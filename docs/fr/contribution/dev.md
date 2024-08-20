---
title: Développement
keywords: [contribuer, bénévolat, open source, git, pull request, issue, soutien, code, développement, programmation, python, django, docker, poetry, tests, tdd]
tags: [contribuer, open source, git, soutien, tdd, python, django, docker, poetry]
authors: [kaya]
---

# Développement

Vous voulez aider au développement de TiBillet? Merci! C'est grâce aux gens comme vous que l'open-source fonctionne :pray:

Premièrement, si vous n'avez pas une tâche précise en tête, allez voir les tickets ouverts sur les [:fontawesome-brands-github: dépôts Github](https://github.com/TiBillet) officiels.

C'est le moyen le plus simple de comprendre quels sont les problèmes à résoudre et quelles fonctionnalités sont demandées.

!!! note "Les dépôts"
    Les dépôts épinglés ("Pinned") sur la page de l'organisation devraient suffire. Si vous avez des doutes sur les rôles respectifs de Fedow, Laboutik ou Lespass, révisez les bases sur les trois moteurs de TiBillet.

    ==TODO: lien doc vers les moteurs et leur rôle== (une page dans présentation probablement)

## Méthodes de travail

Quand on travaille avec des *forges Git* comme Github, il y a des façons d'aider qui rendent votre contribution plus facile à prendre en compte :

- Si vous ne faites pas partie de l'organisation (avec les accès au dépôt), faites un *fork* (dédoublement) du dépôt qui vous intéresse, travaillez à partir de celui-ci et soumettez vous modifications par le biais d'une *pull request* (demande de fusion).
- Si vous avez un ticket sur lequel vous souhaitez travailler, vérifiez s'il n'existe pas déjà. Si c'est le cas, rejoignez la discussion plutôt que de faire la même chose en parallèle!
- Quand vous démarrez le travail sur un ticket, **assignez-vous** dessus pour informer les autres qu'un chantier est en cours.
- Enfin, un point important: **ne créez pas de demandes de fusion sans avoir fait tourner les tests** ! Ça arrive aux meilleur⋅es d'entre nous. Idéalement, vous devriez les faire tourner avant chaque *commit*, avec l'aide d'un *git hook* (déclencheur automatique) par exemple.

!!! question "Trouver de l'aide"
    Si  vous avez des questions sur Git, Github, ou un aspect du développement, rejoignez-nous sur le serveur [Discord](https://discord.gg/7FJvtYx) ou [Matrix](https://matrix.to/#/#tibillet:tiers-lieux.org). Nous ferons de notre mieux pour aider !

## Outils et langages utilisés

TiBillet, c'est :

- une suite d'applications [:fontawesome-brands-python: Python](https://www.python.org/),
- développées avec l'aide du framework [Django](https://www.djangoproject.com/),
- ses dépendances sont gérées avec [Poetry](https://python-poetry.org/),
- le tout tournant dans des conteneurs [Docker](https://www.docker.com/) en production comme en développement.

Si vous ne vous sentez pas à l'aise avec la pile logicielle, la meilleure chose à faire est d'aller chercher des tutoriels. Avec un peu de chance on compilera notre propre liste de ressources ici un de ces jours :sweat_smile:

!!! warning "Attention"
    En particulier, des connaissances de bases avec Git feront une différence. C'est assez facile de semer le chaos dans un dépôt quand on ne comprend pas comment le versionnage marche. Il y a des sécurités en place, mais vous pourriez avoir beaucoup plus de difficultés que nécessaire! Je dis ça par expérience :expressionless:

## Installation locale

Pour coder et tester votre code, vous allez avoir besoin d'une instance (à peu près) fonctionnelle de TiBillet sur votre ordinateur.

Vérifions que vous avez l'outillage requis sous la main. Vous avez besoin de :

- Docker CLI et l'extension `docker-compose`,
- `git`,
- un compte Github avec une clé SSH enregistrée (pour un accès authentifié à la forge),
- un IDE (environnement de développement). Des coupons pour PyCharm sot disponibles sur demande, mais un IDE généraliste comme VSCodium fonctionne assez bien - c'est ce que j'utilise :wink: .

On va commencer en créant un dossier qui contiendra les différents dépôts requis à sa racine, dans votre dossier de travail par exemple. Ça ressemblera à :

```bash
tibillet-dev
├── Fedow
├── LaBoutik
├── Lespass
├── Test-Driven-Development
└── Traefik
```

### Traefik

On va avoir besoin d'un *proxy d'application* (un outil qui va aider à rediriger le trafic des conteneurs vers des adresses locales). TiBillet fournit une configuration de base pour un conteneur Trafik + LetsEncrypt (certificats SSL), partons donc là-dessus :


```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Traefik-reverse-proxy.git Traefik
```

Pour le démarrer :

```bash title="tibillet-dev$"
cd Traefik
docker compose up -d
```

Consulter le navigateur à l'adresse [`https://localhost`](https://localhost) devrait vous donner un avertissement de sécurité sur les certificats auto-signés (pas un problème dans ce cas précis) et une `404 page not found`. Parfait !

!!! note
    Rappelez-vous de `compose up` Traefik chaque fois que vous démarrez une session de travail sur TiBillet.

### Génération des clés

==TODO: à simplifier ? lourd et compliqué pour aucune raison valable==

Pour générer les clés nécessaires à la configuration des moteurs, à l'heure actuelle, on *pull* l'image Docker de la version production de Fedow, puis on lance quelques commandes dans l'environnement de Poetry.

Pour chaque moteur, on aura besoin :

- d'une ou deux clés Fernet,
- d'une clé secrète Django.

Vous pouvez générer 30 clés uniques de chaque type en lançant les commandes :

```bash
docker run --rm tibillet/fedow poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"
docker run --rm tibillet/fedow poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```

La première commande prendra quelques minutes, vu qu'elle télécharge une image Docker. Gardez les clés quelque part, on s'en servira au moment de la mise en place des moteurs.

### Fedow, Lespass, Laboutik


Démarrons en clonant les dépôts des différents moteurs :

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Fedow.git
git clone git@github.com:TiBillet/Lespass.git
git clone git@github.com:TiBillet/LaBoutik.git
```

À partir de là, on a besoin d'écrire un peu de configuration. Ça sera plus simple à l'avenir, prenez patience :yum:

Chaque moteur a besoin de son propre fichier `.env`, que vous pouvez baser sur les fichiers `env_example` qu'on vient de cloner. Fedow d'abord :

```bash title="tibillet-dev$"
cp Fedow/env_example Fedow/.env
```

```bash title="Fedow/.env" linenums="1"
# clés
SECRET_KEY='' # clé secrète Django unique générée précédemment
FERNET_KEY='' # même chose avec une des clés Fernet

# réseau
DOMAIN='fedow.tibillet.localhost' # domaine local par défaut, mentionné également dans docker-compose.yml

# tests et debug (dev uniquement !)
DEBUG=1
TEST=1
STRIPE_TEST=1
STRIPE_KEY_TEST='' # demandez à l'équipe si nécessaire ! pour des raisons évidentes on ne distribue pas de clé Stripe librement 😉
STRIPE_ENDPOINT_SECRET_TEST='' # pas nécessaire en dev
```

Vous pouvez suivre la même démarche pour Lespass.

```bash title="tibillet-dev$"
cp Lespass/env_example Lespass/.env
```

```bash title="Lespass/.env" linenums="1"
# comme dans l'environnement Fedow, avec des clés différentes
DJANGO_SECRET=''
FERNET_KEY=''

DEBUG=1
TEST=1

STRIPE_TEST=1
STRIPE_KEY_TEST=''

# base de données
POSTGRES_HOST='lespass_postgres' # conf du docker-compose.yml
POSTGRES_USER='lespass_postgres_user'
POSTGRES_DB='lespass'
POSTGRES_PASSWORD='' # une autre clé Fernet ou un mdp fort de votre choix

TIME_ZONE='Europe/Paris' # identifiant de plage horaire TZ
PUBLIC='TiBillet Coop.' # nom d'instance (tenant)

FEDOW_DOMAIN='fedow.tibillet.localhost' # domaine renseigné dans l'env Fedow

DOMAIN='tibillet.localhost' # sans sous-domaine ! ex : tibillet.coop, pas demo.tibillet.coop
SUB='demo' # sous-domaine par défaut, renseigné dans le docker-compose.yml
META='agenda' # sous domaine par défaut de l'agenda fédéré
ADMIN_EMAIL='' # requis, ne devrait pas envoyer d'email en local

# pas nécessaire au dev
EMAIL_HOST=''
EMAIL_PORT=''
EMAIL_HOST_USER=''
EMAIL_HOST_PASSWORD=''

# changer seulement si nécessaire
CELERY_BROKER='redis://redis:6379/0'
CELERY_BACKEND='redis://redis:6379/0'
```

Enfin, on configure Laboutik de la même façon :


```bash title="tibillet-dev$"
cp Laboutik/env_example Laboutik/.env
```

```bash title="Laboutik/.env" linenums="1"
# comme les deux autres, toujours avec des clés uniques
DJANGO_SECRET=''
FERNET_KEY=''

DEBUG=1
TEST=1
DEMO=1 # fausse caisse

POSTGRES_USER='laboutik_user'
POSTGRES_DB='laboutik'
POSTGRES_PASSWORD='' # à nouveau, Fernet unique ou mdp fort au choix

DOMAIN='cashless.tibillet.localhost' # domaine laboutik par défaut, renseigné dans le docker-compose.yml

# laboutik a besoin de Fedow et d'une instance Lespass (tenant)
FEDOW_URL='https://fedow.tibillet.localhost/'
LESPASS_TENANT_URL='https://demo.tibillet.localhost/'

# nom de la monnaie de test
MAIN_ASSET_NAME='PieceEnChocolat'

# email admin précédemment renseigné dans l'environnement lespass
ADMIN_EMAIL=''

# peut rester vide en dev
EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""

TIME_ZONE='Europe/Paris'
LANGUAGE_CODE='fr'


# sauvegardes

# peut rester vide si pas de sauvegardes
BORG_PASSPHRASE=""

# tests et debug

# Sentry Debug pour le backend Django
SENTRY_DNS=""
# Sentry Debug pour le frontend JS
SENTRY_FRONT_DNS=""
SENTRY_FRONT_ASSET=""

# paramétrage de la caisse de test
DEMO_TAGID_CM=''
DEMO_TAGID_CLIENT1=''
DEMO_TAGID_CLIENT2=''
```

La configuration devrait être maintenant complète pour les trois moteurs.

### Mise en place des tests

Pour une raison… une raison, l'image Docker de dev est assemblée à partir des tests. L'installation est similaire au moteurs :

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Test-Driven-Development.git
cp Test-Driven-Development/env_example Test-Driven-Development/.env
```

C'est fait :blush: On peut maintenant conteneuriser l'application entière depuis le dossier des tests :

```bash title="Test-Driven-Development$"
docker compose up -d
```

Vous pouvez accéder en prime aux logs avec la commande :

```bash title="Test-Driven-Development$"
docker compose logs -f
```

!!! warning "Attention"
    Ce `docker-compose.yml` en particulier s'appuie sur la structure décrite au début de l'installation, donc sur la structure du dossier *parent* aux tests, appelé pour l'exemple `tibillet-dev`. Contre-intuitif, mais maintenant vous savez :wink:

### Démarrage des moteurs

La principale différence entre les conteneurs de dev et de prod, c'est qu'en dev la commande `docker compose` ne démarre pas les applications Django individuelles. C'est un niveau de contrôle fin qui est utile pour le développement, mais ça veut dire que vous avez besoin de les lancer manuellement.

Faisons un peut d'environnement-ception : on va entrer dans un environnement bash dans un conteneur Docker, puis de là entrer dans l'environnement virtuel de Poetry. Par exemple avec Fedow :

```bash
docker exec -ti fedow_django bash # on entre dans le conteneur
poetry shell # on démarre l'environnement virtuel
```

À partir de là, on a quelques options.

Le script `flush.sh` démarre une app Django réinitialisée avec des données de test :

```bash title="poetry env$"
./flush.sh
```

La commande `rsp` (alias de `python manage.py runserver 0.0.0.0:8000`) lance Django sans réinitialiser les données.

Enfin, parfois des ressources statiques ne sont pas correctement assemblées, que qui donne l'impression que le site est resté coincé dans les années 90 :floppy_disk: Si ça vous arrive, il suffit de relancer l'assemblage des ressources :

```bash title="poetry env$"
./manage.py collectstatic
```
Les conteneurs Django sont nommés par défaut d'après les moteurs : `fedow_django`, `lespass_django`, `laboutik_django`. Démarrez-les tous !

!!! tip "Création d'alias"
    La commande Docker devient vite répétitive. Pourquoi ne pas créer un alias, ou même une petite fonction bash pour gagner du temps et soulager son canal carpien par la même occasion ? Voilà ma fonction :

    ```bash title="~/.bashrc" linenums="21"
    function dockex {
        docker exec -ti $1 bash
    }
    ```

    Il suffit d'ouvrir un nouveau terminal pour que la fonction s'ajoute à l'environnement. Il y a même sans doule moyen d'ajouter poetry à tout ça si vous cherchez un peu !

### Ça tourne ?

Si vous avez utilisé la configuration des sous-domaines par défaut, vous avez maintenant accès :

- au moteur de fédération Fedow sur [fedow.tibillet.localhost](https://fedow.tibillet.localhost),
- à une instance du moteur de billetterie Lespass sur [demo.tibillet.localhost](https://demo.tibillet.localhost),
- au serveur de caisse Laboutik sur [cashless.tibillet.localhost](https://cashless.tibillet.localhost)

Si tout marche comme prévu, félicitations : vous êtes prêt⋅es à vous lancer :wrench:

Sinon, venez nous en parler, on est là pour aider !

!!! note "Pour conclure"
    N'oubliez pas de `docker compose down` à la fois dans les tests et dans Trafik quand vous avez fini votre session de travail. Votre ordinateur aussi a besoin de faire des pauses !

    Si vous avez peur de ne pas vous en souvenir, enlevez l'option `-d` à `compose up` et la commande se lancera directement dans le terminal, pas en tâche de fond. C'est pas grave, vous aurez juste besoin de plus d'onglets :yum:

## Cycle de vie

### Mises à jour

Pour rester à jour durant le développement, télécharger l'image la plus récente :

```bash title="Test-Driven-Devlopment$"
docker compose pull
docker compose up -d # démarrer ou redémarrer les conteneurs
```

### Tests

Vous pouvez lancer les tests Python de la même façon que pour un démarrage manuel. Commencez par réinitialiser les trois app Django pour obtenir les données testables, puis lancez cette commande depuis votre conteneur Django Laboutik :

```bash title="laboutik_django> poetry shell$"
./manage.py test
```

==TODO: docs des tests end-to-end (ils existent !)==

### Sauvegardes

Avant de vous attaquer à un changement majeur, sauvegardez toute donnée qui a de la valeur pour votre développement. Sur votre instance Fedow, par exemple, il suffit de sauvegarder le dossier `database` régulièrement. Les autres moteurs peuvent être sauvegardés par l'utilitaire Borgbackup, des tâches cron et des dump de bases de données. Plus sur ce sujet à l'avenir.

==TODO: explications détaillées==
