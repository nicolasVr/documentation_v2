---
sidebar_position: 100
slug: docker_install
title: Self hosted
description: Installation de la billetterie fédéré via Docker.
keywords: [ cashless, billetterie, ticketing ]
wiktags: [ cashless, billetterie, ticketing ]
authors: jonas
---

# Self-hosted TiBillet

:::danger

Since January 1, 2018, in order to combat VAT fraud, all VAT-registered professionals recording
customer payments using one of these software or systems are required to use secure, certified hardware.

A measure enshrined in
[Article 286 3° bis of the General Tax Code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666)
and initially stemming from the 2016 Finance Act,
when April became involved in promoting and defending open-source
software with cashiering functions.

If you're using TiBillet's SaaS model, you don't need to worry about any of this : We provide you with the certificate.
Contact us !

But I imagine that if you're here, it's to install it yourself: here you are informed!

More information here (in french) :

- https://www.economie.gouv.fr/entreprises/professionnels-logiciels-caisse
- https://www.april.org/reglementation-des-systemes-de-caisse-les-logiciels-libres-de-mieux-en-mieux-pris-en-compte-par-berc
- https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666

:::

# Introduction to Engines

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
- A valid Stripe account with *Stripe connect"

You can find some ressource (in french) here :

- https://codecommun.coop/blog/sysadmin-mon-chaton-part1
- https://codecommun.coop/blog/sysadmin-mon-chaton-part2

If you're ready for adventure, create a new folder "TiBillet", and let's start by installing a Fedow!

```bash
cd && mkdir TiBillet
```

# Fedow : One ring to rule them all

## Create .env file and fill it with your own variable

```bash
# Create .env and fill with :
SECRET_KEY="" # see below to create one
FERNET_KEY="" # see below to create one
DOMAIN="" # ex : fedow.domain.com
STRIPE_KEY="" # from your stripe account
```

### Generate Fernet key and django secret key

```bash
# Generate fernet key with the fedow image :
# Choose one line and fill the .env file
docker run --rm tibillet/fedow:alpha1.2 poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"

# Generate django secret key with the fedow image :
# Choose one line and fill the .env file
docker run --rm tibillet/fedow:alpha1.2 poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```



### Prepare the rocket launch

```bash
# Create frontend and backend network with docker
docker network create frontend
docker network create fedow_backend

# prepare the logs, assets and database folder
mkdir database www logs
```

```yaml
services:
  fedow_django:
    image: tibillet/fedow:alpha1.2
    container_name: fedow_django
    hostname: fedow_django
    restart: always
    env_file: .env
    user: fedow
    volumes:
      - ./database:/home/fedow/Fedow/database
      - ./www:/home/fedow/Fedow/www
      - ./logs:/home/fedow/Fedow/logs
    networks:
      - fedow_backend

  fedow_nginx:
    image: nginx
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

And check to ```https://<DOMAIN>/dashbord```

Congratulation !