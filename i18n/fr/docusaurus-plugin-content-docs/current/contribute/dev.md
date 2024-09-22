---
sidebar_position: 1
slug: development
title: Développement
keywords: [contribuer, bénévolat, open source, git, pull request, issue, soutien, code, développement, programmation, python, django, docker, poetry, tests, tdd]
tags: [contribuer, open source, git, soutien, tdd, python, django, docker, poetry]
authors: kaya, guillaume
---

# Développement

Vous voulez aider au développement de TiBillet? Merci! C'est grâce aux gens comme vous que l'open-source fonctionne 🙏

Premièrement, si vous n'avez pas une tâche précise en tête, allez voir les tickets ouverts sur les [dépôts Github](https://github.com/orgs/TiBillet/projects?query=is%3Aopen) officiels.

C'est le moyen le plus simple de comprendre quels sont les problèmes à résoudre et quelles fonctionnalités sont demandées.

:::note[Les dépôts]
Les dépôts épinglés ("Pinned") sur la page de l'organisation devraient suffire. Si vous avez des doutes sur les rôles respectifs de Fedow, LaBoutik ou Lespass, révisez les bases sur les trois moteurs de TiBillet.

<mark>TODO: lien doc vers les moteurs et leur rôle</mark> (une page dans présentation probablement)
:::

## Méthodes de travail

Quand on travaille avec des *forges Git* comme Github, il y a des façons d'aider qui rendent votre contribution plus facile à prendre en compte :

- Si vous ne faites pas partie de l'organisation (avec les accès au dépôt), faites un *fork* (dédoublement) du dépôt qui vous intéresse, travaillez à partir de celui-ci et soumettez vous modifications par le biais d'une *pull request* (demande de fusion).
- Si vous avez un ticket sur lequel vous souhaitez travailler, vérifiez s'il n'existe pas déjà. Si c'est le cas, rejoignez la discussion plutôt que de faire la même chose en parallèle!
- Quand vous démarrez le travail sur un ticket, **assignez-vous** dessus pour informer les autres qu'un chantier est en cours.
- Enfin, un point important: **ne créez pas de demandes de fusion sans avoir fait tourner les tests** ! Ça arrive aux meilleur⋅es d'entre nous. Idéalement, vous devriez les faire tourner avant chaque *commit*, avec l'aide d'un *git hook* (déclencheur automatique) par exemple.

:::note[Trouver de l'aide]
Si  vous avez des questions sur Git, Github, ou un aspect du développement, rejoignez-nous sur le serveur [Discord](https://discord.gg/7FJvtYx) ou [Matrix](https://matrix.to/#/#tibillet:tiers-lieux.org). Nous ferons de notre mieux pour aider !
:::

## Outils et langages utilisés

TiBillet, c'est :

- une suite d'applications [Python](https://www.python.org/),
- développées avec l'aide du framework [Django](https://www.djangoproject.com/),
- ses dépendances sont gérées avec [Poetry](https://python-poetry.org/),
- le tout tournant dans des conteneurs [Docker](https://www.docker.com/) en production comme en développement.

Si vous ne vous sentez pas à l'aise avec la pile logicielle, la meilleure chose à faire est d'aller chercher des tutoriels. Avec un peu de chance on compilera notre propre liste de ressources ici un de ces jours 😅

:::warning[Attention]
En particulier, des connaissances de bases avec Git feront une différence. C'est assez facile de semer le chaos dans un dépôt quand on ne comprend pas comment le versionnage marche. Il y a des sécurités en place, mais vous pourriez avoir beaucoup plus de difficultés que nécessaire! Je dis ça par expérience 😑
:::

## Installation locale simple

Pour coder et tester votre code, vous allez avoir besoin d'une instance (à peu près) fonctionnelle de TiBillet sur votre ordinateur.

Vérifions que vous avez l'outillage requis sous la main. Vous avez besoin de :

- Docker CLI et l'extension `docker-compose`. S'installe super facilement [ici](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)
- `git`
- un compte Github avec une clé SSH enregistrée (pour un accès authentifié à la forge),
- un IDE (environnement de développement). Des coupons pour PyCharm sot disponibles sur demande, mais un IDE généraliste comme VSCodium fonctionne assez bien - c'est ce que j'utilise 😉.

:::info
A partir de la, vous avez le choix entre deux chemins : 
- Le chemin **Trop facile !** : [je télécharge une archive](https://nuage.tierslieux.re/s/rprGfbDDDrazJ9d) dans laquelle tout est déja installé et je peux passer directement au [démarrage des moteurs](#démarrage-des-moteurs).
- Le chemin **Je veux comprendre !** : Chaque étape pour créer son environnement est détaillée dans le [tuto ci dessous](#installation-locale-detaillée).

Vous pouvez même faire les deux, pour un effet maximal ! 
:::

## Installation locale détaillée

On va commencer en créant un dossier qui contiendra les différents dépôts requis à sa racine, dans votre dossier de travail par exemple. Ça ressemblera à :

```bash
tibillet-dev
├── Fedow
├── LaBoutik
├── Lespass
├── Test-Driven-Development
└── Traefik
```

### Génération des clés

<mark>TODO: à simplifier ? lourd et compliqué pour aucune raison valable</mark>

Pour générer les clés nécessaires à la configuration des moteurs, à l'heure actuelle, on *pull* l'image Docker de la version production de Fedow, puis on lance quelques commandes dans l'environnement de Poetry.

Pour chaque moteur, on aura besoin :

- d'une ou deux clés Fernet (pour le champ `FERNET_KEY` et possiblement des mots de passe),
- d'une clé secrète Django (pour le champ `SECRET_KEY`).

Vous pouvez générer 30 clés uniques de chaque type en lançant les commandes :

```bash
docker run --rm tibillet/fedow poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"
docker run --rm tibillet/fedow poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```

La première commande prendra quelques minutes, vu qu'elle télécharge une image Docker. Gardez les clés quelque part, on s'en servira au moment de la mise en place des moteurs.

On aura également besoin d'une clé de test Stripe pour le champ `STRIPE_KEY_TEST`. Stripe est actuellement la solution de paiement qui se charge de la conversion cash en cashless. Une clé de test peut être obtenue en se créant un compte gratuit, puis and allant dans le Mode test -> Clé API de test. Alternativement, demandez à l'équipe.

### Fedow, Lespass, LaBoutik


Démarrons en clonant les dépôts des différents moteurs :

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Fedow.git
git clone git@github.com:TiBillet/Lespass.git
git clone git@github.com:TiBillet/LaBoutik.git
```

À partir de là, on a besoin d'écrire un peu de configuration. Ça sera plus simple à l'avenir, prenez patience 😋

Chaque moteur a besoin de son propre fichier `.env`, que vous pouvez baser sur les fichiers `env_example` qu'on vient de cloner.

:::warning[Attention]
Toute variable d'environnement, doit être trouvable dans le fichier `.env`. Pas de suppression de variable ! Elle peut par contre suivant les cas rester vide (nullable).
:::

#### Environnement Fedow

```bash title="tibillet-dev$"
cp Fedow/env_example Fedow/.env
```

|Nom|Environnement cible|Nullable|Valeur par défaut|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|Tous|Non||Une des clés secrètes Django générées précédemment|
|`FERNET_KEY`|Tous|Non||Une des clés Fernet générées précédemment|
|`STRIPE_KEY`|Production|Oui||Clé API de votre compte Stripe|
|`DOMAIN`|Tous|Non|`fedow.tibillet.localhost`|À adapter à votre nom de domaine et sous-domaine en production|
|`STRIPE_KEY_TEST`|Développement, Tests|Oui||Clé API de test de votre compte Stripe|
|`STRIPE_TEST`|Développement, Tests|Non|0|Passer à 1 si `STRIPE_KEY_TEST` est rempli|
|`STRIPE_ENDPOINT_SECRET_TEST`|Développement, Tests|Oui||Aucune idée|
|`DEBUG`|Développement|Non|0|Passer à 1 pour le développement|
|`TEST`|Tests|Non|0|Passer à 1 pour les tests|

#### Environnement Lespass

```bash title="tibillet-dev$"
cp Lespass/env_example Lespass/.env
```

|Nom|Environnement cible|Nullable|Valeur par défaut|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|Tous|Non||Une des clés secrètes Django générées précédemment|
|`FERNET_KEY`|Tous|Non||Une des clés Fernet générées précédemment|
|`STRIPE_KEY`|Production|Oui||Clé API de votre compte Stripe|
|`DOMAIN`|Tous|Non|`tibillet.localhost`|À adapter à votre nom de domaine en production|
|`SUB`|Tous|Non|`lespass`|Sous-domaine de l'instance, à adapter en production|
|`META`|Tous|Non|`agenda`|Sous-domaine de l'agenda fédéré, à adapter en production|
|`FEDOW_DOMAIN`|Tous|Non|`fedow.tibillet.localhost`|Domaine et sous-domaine du moteur Fedow|
|`PUBLIC`|Tous|Non|TiBillet Coop.|Nom de l'instance principale|
|`TIME_ZONE`|Tous|Non|Europe/Paris|Plage horaire TZ de l'instance|
|`ADMIN_EMAIL`|Tous|Non||Email administrateur (pour le⋅a premier⋅e admin)|
|`POSTGRES_DB`|Tous|Non|lespass|À changer en production si nécessaire|
|`POSTGRES_USER`|Tous|Non|lespass_postgres|À changer en production|
|`POSTGRES_PASSWORD`|Tous|Non||Mot de passe fort (une des clés Fernets par exemple)|
|`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`|Tous|Oui||Serveur d'email, requis pour confirmer des abonné⋅es par exemple|
|`STRIPE_KEY_TEST`|Développement, Tests|Oui||Clé API de test de votre compte Stripe|
|`STRIPE_TEST`|Développement, Tests|Non|0|Passer à 1 si `STRIPE_KEY_TEST` est rempli|
|`DEBUG`|Développement|Non|0|Passer à 1 pour le développement|
|`TEST`|Tests|Non|0|Passer à 1 pour les tests|


#### Environnement LaBoutik

```bash title="tibillet-dev$"
cp LaBoutik/env_example LaBoutik/.env
```

|Nom|Environnement cible|Nullable|Valeur par défaut|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|Tous|Non||Une des clés secrètes Django générées précédemment|
|`FERNET_KEY`|Tous|Non||Une des clés Fernet générées précédemment|
|`DOMAIN`|Tous|Non|`laboutik.tibillet.localhost`|À adapter à votre nom de domaine et sous-domaine en production|
|`FEDOW_URL`|Tous|Non|https://fedow.tibillet.localhost/|URL du moteur Fedow|
|`LESPASS_TENANT_URL`|Tous|Non|https://lespass.tibillet.localhost/|URL de l'instance Lespass|
|`TIME_ZONE`|Tous|Non|Europe/Paris|Plage horaire TZ de l'instance|
|`ADMIN_EMAIL`|Tous|Non||Email administrateur (pour le⋅a premier⋅e admin)|
|`MAIN_ASSET_NAME`|Tous|Non||Le nom de votre unité de valeur cashless (Piécette, CoeurDor… comme vous voulez)|
|`POSTGRES_DB`|Tous|Non|laboutik|À changer en production si nécessaire|
|`POSTGRES_USER`|Tous|Non|laboutik_user|À changer en production|
|`POSTGRES_PASSWORD`|Tous|Non||Mot de passe fort (une des clés Fernets par exemple)|
|`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`|Tous|Oui||Serveur d'email, requis pour confirmer des abonné⋅es par exemple|
|`BORG_PASSPHRASE`|Tous|Oui||Mot de passe utilisé pour la sauvegarde des données|
|`DEBUG`|Développement|Non|0|Passer à 1 pour le développement|
|`TEST`|Tests|Non|0|Passer à 1 pour les tests|
|`DEMO`|Développement, Tests|Non|0|Passer à 1 pour une simulation de terminal de caisse|
|`SENTRY_DNS`|Développement, Tests|Oui||Sentry Debug pour le back-end|
|`SENTRY_FRONT_DNS`, `SENTRY_FRONT_ASSET`|Développement, Tests|Oui||Sentry Debug pour le front-end|
|`DEMO_TAGID_CM`, `DEMO_TAGID_CLIENT1`, `DEMO_TAGID_CLIENT2`||Oui||Aucune idée|

La configuration devrait être maintenant complète pour les trois moteurs.


### Le dossier Test Driven Development

On peut lancer tout notre environnement depuis le dépot des tests. 

L'installation est similaire aux moteurs :

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Test-Driven-Development.git
cp Test-Driven-Development/env_example Test-Driven-Development/.env
```

C'est fait ☺️ On peut maintenant conteneuriser l'application entière depuis le dossier des tests.

Ce dernier contient un conteneur supplémentaire : Traefik.

C'est un reverse proxy. Il permet permet de router les requetes https en direction des conteneurs.

## Démarrage des moteurs 

Lancement des moteurs depuis le dépot des tests :

```bash title="Test-Driven-Development$"
docker network create frontend # uniquement la première fois, c'est un réseau virtuel utilisé par Traefik.
docker compose up -d # Le premier lancement peut être long, il télécharge et construit toute les images.
```

Vous pouvez accéder en prime aux logs avec la commande :

```bash title="Test-Driven-Development$"
docker compose logs -f
```

Pour supprimer les conteneurs :
```bash title="Test-Driven-Development$"
docker compose doww -v # -v pour les volumes utilisé par les bases de données.
```

:::warning[Attention]
Ce `docker-compose.yml` en particulier s'appuie sur la structure décrite au début de l'installation, donc sur la structure du dossier *parent* aux tests, appelé pour l'exemple `tibillet-dev`. Contre-intuitif, mais maintenant vous savez 😉
:::


La principale différence entre les conteneurs de dev et de prod, c'est qu'en dev la commande `docker compose up` ne démarre pas les applications Django individuelles. C'est un niveau de contrôle fin qui est utile pour le développement, mais ça veut dire que vous avez besoin de les lancer manuellement.

On va les lancer de préférence dans l'ordre :

1. Fedow
2. Lespass
3. LaBoutik (qui a besoin des deux autres pour fonctionner)

Les outils dont on a besoin sont dans les conteneurs, nommés d'après leur moteur : `fedow_django`, `lespass_django` et enfin `laboutik_django`. Pour rentrer dans un conteneur (exemple avec Fedow) :

```bash
# on démarre un environnement bash dans le conteneur fedow_django
docker exec -ti fedow_django bash
```

À partir de là, on a quelques options.

La première, c'est le script `flush.sh`. Il initialise les données de test et démarre Django dans la foulée. C'est cette commande qu'on va utiliser au **premier démarrage** de notre application :

```bash title="fedow_django$"
./flush.sh
```

On l'utilisera aussi quand on veut **réinitialiser** les données, par exemple avant de lancer les tests automatisés qui ont besoin de ces données prévisibles.

Pour le reste des manipulation dans le conteneur, on a besoin de rentrer dans l'environnement de Poetry, car on va lancer du Python.

Pour lancer l'environnement virtuel de Poetry depuis le conteneur : 

```bash title="fedow_django$"
 # on démarre l'environnement virtuel qui prend en charge les dépendances python
poetry shell
```

Django se gère avec un script appelé `manage.py`. Deux commandes nous intéressent à l'heure actuelle :

- `rsp` (alias de  `./manage.py runserver 0.0.0.0:8000`) démarre Django sans réinitialiser les données. Ça nous servira quand on veut garder des données entre deux démarrages. Généralement, si on a pas besoin de lancer les tests, c'est cette commande qu'on utilise plutôt que `flush`.

- Optionnellement, si on a des bugs graphiques, on peut tenter `./manage.py collectstatic`. Parfois, les ressources graphiques ne sont pas correctement copiées au premier démarrage, et ça peut régler le problème.

Plus qu'à démarrer les trois moteurs de TiBillet dans l'ordre indiqué précédemment : Fedow, Lespass, puis LaBoutik !

:::tip[Création d'alias]
La commande Docker devient vite répétitive. Pourquoi ne pas créer un alias, ou même une petite fonction bash pour gagner du temps et soulager son canal carpien par la même occasion ? Voilà ma fonction :

```bash title="~/.bashrc"
function dockex {
    docker exec -ti $1 bash
}
```

Il suffit d'ouvrir un nouveau terminal pour que la fonction s'ajoute à l'environnement. Il y a même sans doule moyen d'ajouter poetry à tout ça si vous cherchez un peu !
:::

### Ça tourne ?

Si vous avez utilisé la configuration des sous-domaines par défaut, vous avez maintenant accès :

- au moteur de fédération Fedow sur [fedow.tibillet.localhost](https://fedow.tibillet.localhost),
- à une instance du moteur de billetterie Lespass sur [lespass.tibillet.localhost](https://lespass.tibillet.localhost),
- au serveur de caisse LaBoutik sur [laboutik.tibillet.localhost](https://laboutik.tibillet.localhost) pour l'admin. Cliquez sur "voir le site" pour lancer la simulation d'un terminal.

Si tout marche comme prévu, félicitations : vous êtes prêt⋅es à vous lancer 🔧

Sinon, venez nous en parler, on est là pour aider !

:::note[Pour conclure]
N'oubliez pas de `docker compose down` à la fois dans les tests et dans Trafik quand vous avez fini votre session de travail. Votre ordinateur aussi a besoin de faire des pauses !

Si vous avez peur de ne pas vous en souvenir, enlevez l'option `-d` à `compose up` et la commande se lancera directement dans le terminal, pas en tâche de fond. C'est pas grave, vous aurez juste besoin de plus d'onglets 😋
:::

## Cycle de vie

### Mises à jour

Pour rester à jour durant le développement, pensez à télécharger les images les plus récente et/ou à builder les images django :

```bash title="Test-Driven-Development$"
docker compose pull
docker compose up -d --build # démarrer ou redémarrer les conteneurs
```

### Tests

Vous pouvez lancer les tests Python de la même façon que pour un démarrage manuel. Commencez par réinitialiser les trois app Django pour obtenir les données testables, puis lancez cette commande depuis votre conteneur Django LaBoutik :

```bash title="laboutik_django> poetry shell$"
./manage.py test
```

<mark>TODO: docs des tests end-to-end (ils existent !)</mark>

### Sauvegardes

Avant de vous attaquer à un changement majeur, sauvegardez toute donnée qui a de la valeur pour votre développement. Sur votre instance Fedow, par exemple, il suffit de sauvegarder le dossier `database` régulièrement. Les autres moteurs peuvent être sauvegardés par l'utilitaire Borgbackup, des tâches cron et des dump de bases de données. Plus sur ce sujet à l'avenir.

<mark>TODO: explications détaillées</mark>
