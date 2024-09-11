---
sidebar_position: 100
slug: docker_install
title: Self hosted TiBillet instances
description: self hosted TiBillet tools with docker
keywords: [ cashless, billetterie, ticketing ]
wiktags: [ cashless, billetterie, ticketing ]
authors: jonas
---

## Legal warning

:::danger

Since January 1, 2018, in order to combat VAT fraud, all VAT-registered professionals recording
customer payments using one of these software or systems are required to use secure, **certified hardware**.

A measure enshrined in
[Article 286 3° bis of the General Tax Code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666)
and initially stemming from the 2016 Finance Act,
when [April](https://www.april.org/reglementation-des-systemes-de-caisse-les-logiciels-libres-de-mieux-en-mieux-pris-en-compte-par-berc)
became involved in promoting and defending open-source
software with cashiering functions.

If you're using [TiBillet's Coop' and SaaS model](/docs/presentation/tarifs), you don't need to worry about any of
this : We provide you with the certificate.

But if you self-host your own cash register instance, you legally become the publisher, and we can't provide you with
any legal documents to present to the tax authorities.

I imagine that if you're here, it's to install it yourself ;)

Here you are informed!
:::

More information here (in french) :

- https://www.economie.gouv.fr/entreprises/professionnels-logiciels-caisse
- https://www.april.org/reglementation-des-systemes-de-caisse-les-logiciels-libres-de-mieux-en-mieux-pris-en-compte-par-berc
- https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666

## Introduction to Engines

Tibillet is a software suite composed of several interoperable building blocks. The engines are :

- [Fedow](https://github.com/TiBillet/Fedow): Federated and open wallet, the federation engine. A PoA and Rsa key based
  blockchain to
  share membership assets, local currencies and
  time for several Lespass and LaBoutik instances.

- [Lespass](https://github.com/TiBillet/Lespass): Ticketing, booking, membership and landing page engines. Usefull too
  for refill online with self scanned qrcode unique on each card.

- [LaBoutik](https://github.com/TiBillet/LaBoutik): Cash register, cashless system with RFID / NFC chip and order-taking
  system.

To get the full functionality of TiBillet, you need to install these three engines.

- One **Fedow** for multiple locations (RSA based PoA blockchain)
- One **Lespass** for multiple locations (Django multi-tenant)
- One **Laboutik** per location, which connects to a fedow and a lespass to join a federation.

:::note Exemple

if you want to use the same NFC card to manage cashless at 2 festivals and 3 community cafés, you'll need 5
**LabouTik**, but only one **Fedow** for the federated asset, and one **Lespass** for the webpage of each venue.
The same applies if you want to manage a co-working subscription for a
group of *third place* in a given city/region/department.

:::

# Requirements :

For security and performance reasons, we recommend that you separate the **Lespass** public area from the **LaBoutik**
checkout and **Fedow** federation engines.

For dev' and test purpose, you can install everything on one VPS. Here the minimal requirements :

A linux server with :

- 2 vCpu / 4Go Ram
- Docker & Compose
- 1 domain with wildcard capacity
- A Reverse proxy who handle 443 and 80 port (we use Traefik)
- A valid Stripe account with *Stripe connect*

You can find some ressource (in french) here :

- https://codecommun.coop/blog/sysadmin-mon-chaton-part1
- https://codecommun.coop/blog/sysadmin-mon-chaton-part2

If you're ready for adventure, create a new folder "TiBillet", and let's start by installing a Fedow!

```bash
mkdir TiBillet && cd TiBillet
```

### Generate many Fernet key and django secret key

You will need 3 couple of Fernet/Django secret key.

```bash
# Generate fernet key with the fedow image :
# Choose one line and fill the .env file
docker run --rm tibillet/fedow poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"

# Generate django secret key with the fedow image :
# Choose one line and fill the .env file
docker run --rm tibillet/fedow poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```

## Fedow : One ring to rule them all

### Environment

Create the Fedow folder :

```bash
mkdir -p TiBillet/Fedow && cd TiBillet/Fedow
```

Create .env file and fill it with your own variable

```bash
nano .env
```

```bash
# Create .env and fill with :
SECRET_KEY='' # see upper to create one
FERNET_KEY='' # see upper to create one
DOMAIN='' # ex : fedow.domain.com
STRIPE_KEY='' # from your stripe account
```

Create frontend and backend network with docker if needed

```bash
docker network create frontend
docker network create fedow_backend
```

Prepare the logs, assets and database folder

```
mkdir logs www database
```

### Nginx rules

Créate the nginx conf file :

```
nano nginx/django.conf
```

```
server {
    listen 80;
    server_name localhost;

    access_log /logs/nginxAccess.log;
    error_log /logs/nginxError.log;

    location /static {
        root /www;
    }

    location /media {
        root /www;
    }

    location / {
        # everything is passed to Gunicorn
        proxy_pass http://fedow_django:8000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_redirect off;
    }
}
```

### Docker compose

create the docker compose file :

```bash
nano docker-compose.yml
```

```yaml
services:
  fedow_memcached:
    image: memcached:1.6
    container_name: fedow_memcached
    hostname: fedow_memcached
    restart: always
    networks:
      - fedow_backend

  fedow_django:
    image: tibillet/fedow:latest
    container_name: fedow_django
    hostname: fedow_django
    restart: always
    env_file: .env
    user: fedow
    links:
      - fedow_memcached:memcached
    volumes:
      - ./database:/home/fedow/Fedow/database
      - ./www:/home/fedow/Fedow/www
      - ./logs:/home/fedow/Fedow/logs
    networks:
      - fedow_backend

    # only useful for dev purpose :
    extra_hosts:
      - "fedow.tibillet.localhost:172.17.0.1"
      - "lespass.tibillet.localhost:172.17.0.1"
      - "cashless.tibillet.localhost:172.17.0.1"


  fedow_nginx:
    image: nginx:latest
    restart: always
    container_name: fedow_nginx
    hostname: fedow_nginx
    volumes:
      - ./www:/www
      - ./logs:/logs
      - ./nginx:/etc/nginx/conf.d
    depends_on:
      - fedow_django
    links:
      - fedow_django:fedow_django
    labels:
      - traefik.enable=true
      - traefik.docker.network=frontend
      - traefik.http.routers.fedow_nginx.tls.certresolver=myresolver
      - traefik.http.routers.fedow_nginx.rule=Host(`$DOMAIN`)
    networks:
      - frontend
      - fedow_backend


networks:
  frontend:
    external: true
  fedow_backend:
```

### Launch the rocket !

```bash
docker compose up -d 
# To see the logs :
docker compose logs -f 
```

And check to ```https://<FEDOW_DOMAIN>/dashboard```

Congratulation, You own your own blockchain ;)

### Backup

To make a backup, simply back up the database folder regularly.

## Lespass : Multi tenant engine for membership, ticketing and online cashless refill.

Lespass is a multi-tenant engine. You can run it with or without a wildcard certificate. See
the [Code Commun blog](https://codecommun.coop/) for
exemple : [https://codecommun.coop/blog/sysadmin-mon-chaton-part2](https://codecommun.coop/blog/sysadmin-mon-chaton-part2)

In this tutoriel, we work as a mono tenant instance. Contact us if you want start TiBillet as SaaS multi tenant.

### Environment

Create the Lespass folder :

```bash
mkdir TiBillet/Lespass && cd TiBillet/Lespass
```

Prepare the logs, assets, backup and database folder

```bash
mkdir logs www backup database nginx
```

create .env file and fill it with your own variable

```bash
nano .env
```

```bash
# Secret
DJANGO_SECRET='' # see upper to create one
FERNET_KEY='' # see upper to create one

STRIPE_KEY='' # from your stripe account
# or 
STRIPE_KEY_TEST=''
STRIPE_TEST=0 # set to 1 for use stripe test env

# Database
POSTGRES_HOST='lespass_postgres'
POSTGRES_USER='lespass_postgres_user'
POSTGRES_PASSWORD='' # strong ! generate a new fernet for exemple.
POSTGRES_DB='lespass'

ADMIN_EMAIL=''
TIME_ZONE='Europe/Paris' # or where you are

FEDOW_DOMAIN='' # the same as Fedow

DOMAIN='' # for the wildcard : without subdomain ! ex : tibillet.coop, not lespass.tibillet.coop
PUBLIC='TiBillet Coop.' # The name of the root instance
SUB='' # the sub domain of your first place ex : if 'festival', it will be accessible on https://festival.tibillet.coop
META='' # the federated agenda for all events on all tenants. If 'agenda', it will be accessible, for exemple, on https://agenda.tibillet.coop

# For transactionnal email : 
EMAIL_HOST=''
EMAIL_PORT=''
EMAIL_HOST_USER=''
EMAIL_HOST_PASSWORD=''

# Change only if needed :
CELERY_BROKER='redis://redis:6379/0'
CELERY_BACKEND='redis://redis:6379/0'
```

### Nginx rules

Create the file :

```bash 
nano nginx/lespass.conf
```

```bash 
server {

    listen 80;
    server_name localhost;

    access_log /logs/nginxAccess.log;
    error_log /logs/nginxError.log;

    location /static {
        root /www;
    }

    location /media {
        root /www;
    }

    location / {
        # everything is passed to Gunicorn
        proxy_pass http://lespass_django:8002;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_redirect off;
        proxy_http_version 1.1;
        client_max_body_size 4M;
        proxy_buffer_size 16k;
        proxy_buffers 32 16k;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Host $server_name;
    }
}
```

### Docker compose

create the docker compose file :

```bash
nano docker-compose.yml
```

```yaml
services:
  lespass_postgres:
    image: postgres:13-bookworm
    restart: always
    container_name: lespass_postgres
    hostname: lespass_postgres
    volumes:
      - ./database:/var/lib/postgresql/data
    env_file: .env
    networks:
      - lespass_backend


  lespass_memcached:
    image: memcached:1.6
    container_name: lespass_memcached
    hostname: lespass_memcached
    restart: always
    networks:
      - lespass_backend


  lespass_redis:
    container_name: lespass_redis
    hostname: lespass_redis
    image: redis:7.2.3-bookworm
    restart: always
    networks:
      - lespass_backend

  lespass_django:
    image: tibillet/lespass:latest
    restart: always
    container_name: lespass_django
    hostname: lespass_django
    volumes:
      - ./www:/DjangoFiles/www
      - ./logs:/DjangoFiles/logs
      - ./backup:/Backup
      - ./ssh:/home/tibillet/.ssh # if you want ssh borgbackup 
    env_file: .env
    depends_on:
      - lespass_postgres
      - lespass_redis
      - lespass_memcached
    links:
      - lespass_postgres:postgres
      - lespass_redis:redis
      - lespass_memcached:memcached
    networks:
      - lespass_backend
    # only useful for dev purpose :
    extra_hosts:
      - "fedow.tibillet.localhost:172.17.0.1"
      - "lespass.tibillet.localhost:172.17.0.1"
      - "cashless.tibillet.localhost:172.17.0.1"
        
  lespass_celery:
    image: tibillet/lespass:latest
    restart: always
    container_name: lespass_celery
    hostname: lespass_celery
    env_file: .env
    depends_on:
      - lespass_postgres
      - lespass_redis
      - lespass_memcached
    links:
      - lespass_postgres:postgres
      - lespass_redis:redis
      - lespass_memcached:memcached
    command: "poetry run celery -A TiBillet worker -l INFO"
    networks:
      - lespass_backend


  lespass_nginx:
    image: nginx:latest
    container_name: lespass_nginx
    hostname: lespass_nginx
    restart: always
    links:
      - lespass_django:lespass_django
    volumes:
      - ./www:/www
      - ./logs:/logs
      - ./nginx:/etc/nginx/conf.d
    labels:
      - traefik.enable=true
      - traefik.docker.network=frontend
      - traefik.http.routers.lespass.tls.certresolver=myresolver
      - traefik.http.routers.lespass.rule=Host(`$DOMAIN`) || Host(`www.$DOMAIN`) || Host(`$META.$DOMAIN`) || Host(`$SUB.$DOMAIN`)
    networks:
      - frontend
      - lespass_backend

networks:
  frontend:
    external: true
  lespass_backend:
```

### Launch the rocket !

```bash
docker compose up -d 
# To see the logs :
docker compose logs -f 
```

And check to ```https://<SUB>.<DOMAIN>```

Congratulation !

### Update

Just update the container :

```bash
docker compose pull
docker compose up -d
```

### Backups

TODO : Create a blog note for borgbackup, cron and postgres dump.

## LaBoutik : Cash and cashless registrer. NFC card reader for cashless, membership or badge scan.

### Environment

Create the Lespass folder :

```bash
mkdir Laboutik && cd Laboutik
```

Prepare the logs, assets, backup and database folder

```bash
mkdir logs www backup database nginx ssh
```

create .env file and fill it with your own variable

```bash
nano .env
```

```bash
DJANGO_SECRET=''
FERNET_KEY=''

POSTGRES_USER='laboutik_user'
POSTGRES_DB='laboutik'
POSTGRES_PASSWORD=''

# The domain of this instance ex : 'cashless.tibillet.localhost'
DOMAIN=''

# admin email
ADMIN_EMAIL=''

# For transactionnal email :
EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""

TIME_ZONE='Europe/Paris'
LANGUAGE_CODE='fr'

########## FOR CASHLESS ##########

# No Cashless if no Fedow nor Lespass tenant manager
FEDOW_URL='' # ex : https://fedow.tibillet.localhost/
LESPASS_TENANT_URL='' # ex : https://festival.tibillet.localhost/

# The name of your cashless asset ex : TestCoin, FestivalCoin, etc ....
MAIN_ASSET_NAME='' 

########## FOR SAVE CRON TASK ##########dex

# can be empty if you don't backup
BORG_REPO=''
BORG_PASSPHRASE=''
```

### Nginx rules

Create the file :

```bash 
nano nginx/laboutik.conf
```

```bash 
server {

    listen 80;
    server_name localhost;

    access_log /DjangoFiles/logs/nginxAccess.log;
    error_log /DjangoFiles/logs/nginxError.log;

    # Static and media géré par Nginx :
     location /static {
         root /DjangoFiles/www;
     }

     location /media {
         root /DjangoFiles/www;
     }

    location / {
        # everything is passed to Gunicorn/Django
        proxy_pass http://laboutik_django:8000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_redirect off;
    }
}
```

### Docker compose

```yaml
services:
  laboutik_postgres:
    image: postgres:11.5-alpine
    restart: always
    env_file: .env
    container_name: laboutik_postgres
    hostname: laboutik_postgres
    volumes:
      - ./database/data:/var/lib/postgresql/data
    networks:
      - laboutik_backend

  laboutik_memcached:
    image: memcached:1.6
    container_name: laboutik_memcached
    hostname: laboutik_memcached
    restart: always
    networks:
      - laboutik_backend

  laboutik_redis:
    image: redis:6-alpine
    restart: always
    env_file: .env
    container_name: laboutik_redis
    hostname: laboutik_redis
    networks:
      - laboutik_backend

  laboutik_django:
    image: tibillet/laboutik:latest
    restart: always
    env_file: .env
    container_name: laboutik_django
    hostname: laboutik_django
    volumes:
      - ./www:/DjangoFiles/www
      - ./logs:/DjangoFiles/logs
      - ./backup:/Backup
      - ./ssh:/home/tibillet/.ssh # if you want to use borgbackup with ssh
    links:
      - laboutik_postgres:postgres
      - laboutik_redis:redis
      - laboutik_memcached:memcached
    depends_on:
      - laboutik_postgres
      - laboutik_redis
      - laboutik_memcached
    networks:
      - laboutik_backend
    # only useful for dev purpose :
    extra_hosts:
      - "fedow.tibillet.localhost:172.17.0.1"
      - "lespass.tibillet.localhost:172.17.0.1"
      - "cashless.tibillet.localhost:172.17.0.1"


  laboutik_celery:
    image: tibillet/laboutik:latest
    restart: always
    env_file: .env
    container_name: laboutik_celery
    hostname: laboutik_celery
    volumes:
      - ./www:/DjangoFiles/www
      - ./logs:/DjangoFiles/logs
      - ./backup:/Backup
    links:
      - laboutik_postgres:postgres
      - laboutik_redis:redis
      - laboutik_memcached:memcached
    depends_on:
      - laboutik_postgres
      - laboutik_redis
      - laboutik_memcached
    networks:
      - laboutik_backend
    command: "bash start_celery.sh"

  laboutik_nginx:
    image: nginx
    restart: always
    container_name: laboutik_nginx
    hostname: laboutik_nginx
    depends_on:
      - laboutik_django
    links:
      - laboutik_django:laboutik_django
    volumes:
      - ./www:/DjangoFiles/www
      - ./logs:/DjangoFiles/logs
      - ./nginx:/etc/nginx/conf.d
    labels:
      - traefik.enable=true
      - traefik.docker.network=frontend
      - traefik.http.routers.laboutik_nginx.tls.certresolver=myresolver
      - traefik.http.routers.laboutik_nginx.rule=Host(`${DOMAIN}`)
    networks:
      - frontend
      - laboutik_backend

networks:
  frontend:
    external: true
  laboutik_backend:
```

### Launch the rocket !

```bash
docker compose up -d 
# To see the logs :
docker compose logs -f 
```

You should have received an e-mail inviting you to create your administrator password. 

Congratulations! You can now read
through the documentation and come and see us on discord to tell us you've succeeded!

### Update

Just pull the latest docker image release :
```bash
docker compose pull
docker compose up -d 
```

### Backups

TODO: A note blog for Syncthing, Borgbackup, Crontab and postgres dump.