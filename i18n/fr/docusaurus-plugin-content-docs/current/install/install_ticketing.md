---
sidebar_position: 1
slug: install_ticketing
title: Installation
description: Installation de la billetterie fédéré via Docker.
keywords: [cashless, billetterie, ticketing]
wiktags: [cashless, billetterie, ticketing]
authors: jonas
---

# Installation

Une [version de démonstration](/docs/presentation/Demonstration) est disponible en ligne.

## Ticketing :

[Install Docker](https://docs.docker.com/engine/install/)

```shell
git clone git@github.com:TiBillet/TiBillet.git

# Change branch to PreProd
cd TiBillet
git checkout PreProd

# Change environment credential inside .env
cd Docker/Development
cp env_example .env
nano .env

# if not created before (with Traefik)
docker network create frontend

# Launch in detached mode
docker compose up -d
```

Launch the backend service for dev :
```shell
# Go inside the django container :
docker exec -ti billetterie_django bash
bash ./install.sh 
python /DjangoFiles/manage.py runserver 0.0.0.0:8002
```

Launch the frontend service for dev' : 
```shell
docker exec -ti billetterie_nodejs_dev bash
npm install
npm run dev
```


## No Reverse proxy

No reverse proxy ? No problem with linux !

Just add to /etc/hosts the domain and subdomain of your choice.

```
172.17.0.1       tibillet.local
172.17.0.1       m.tibillet.local
172.17.0.1       demo.tibillet.local
```

#### Admin Root :
http://www.tibillet.local:8002/admin
#### Admin Tenant :
http://demo.tibillet.local:8002/admin
#### Front Tenant 
http://demo.tibillet.local:8004
#### Front Meta 
http://m.tibillet.local:8004


## With Traefik as reverse proxy 

Example for Widlcard with Traefik and OVH DNS Challenge :

https://github.com/TiBillet/Traefik-reverse-proxy/tree/main/wildcard

#### Admin Root :
https://www.tibillet.local/admin
#### Admin Tenant :
https://demo.tibillet.local/admin
#### Front Tenant 
https://demo.tibillet.local
#### Front Meta 
https://m.tibillet.local


# Update

```bash
git pull
cd Docker/Development
docker compose pull
docker compose down
docker compose up -d
docker exec -ti billetterie_django /usr/local/bin/python /DjangoFiles/manage.py migrate
```