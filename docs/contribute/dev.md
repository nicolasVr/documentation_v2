---
sidebar_position: 10
slug: development
title: Development
keywords: [contribute, volunteer, open source, git, pull request, issue, help, code, development, programming, python, django, docker, poetry, testing, tdd]
tags: [contribute, open source, git, help, tdd, python, django, docker, poetry]
authors: kaya, guillaume
---

# Development

So, you want to help with the development of TiBillet. Thank you! Open-source thrives thanks to people like you 🙏

First, if you don't have a specific task in mind already, check out the open issues on the official [Github repositories](https://github.com/TiBillet).

It's the easiest way to figure out what problem needs fixing or what feature is being requested.

:::note[Repositories]
What you need is probably in the pinned repositories. If you are unsure of the role of Fedow, LaBoutik or Lespass, check out the basics on the three TiBillet engines.

<mark>TODO: link to engines and their roles in the doc</mark> (a very basic page in intro probably)
:::

## Understanding the workflow

When you work with *Git forges* like Github, there are ways in which you can make your contributions easier to handle:

- If you're not part of the core team, *fork* the repository that interests you, work from there, and submit your changes through a *pull request*.
- If you have an issue you want to work on, check that it doesn't already exists. If it does, join the discussion instead of doing your own thing!
- When you start working on an issue, **assign yourself** to let others know you're working on it.
- Last but not least: **don't create pull requests without running the tests**! Happens to the best of us. Ideally, you should run them before committing, with the help of a *git hook* for example.

:::note[Getting help]
If you have any questions regarding Git, Github, or an aspect of development, join us on [Discord](https://discord.gg/7FJvtYx) or [Matrix](https://matrix.to/#/#tibillet:tiers-lieux.org). These are mostly French-speaking spaces as the founders are from La Reunion, but we'll do our best to help (with a bit of *un accent* 🍷🥖).
:::

## Tools and languages used

TiBillet is:

- [Python](https://www.python.org/) software
- developed with the help of the [Django](https://www.djangoproject.com/) framework
- its dependencies are handled through [Poetry](https://python-poetry.org/)
- it runs in [Docker](https://www.docker.com/) containers for production as well as development

If you don't feel at ease with the software stack, the best thing you can do is to go look for tutorials. Hopefully we'll compile a list of our own down here one of these days 😅

:::warning
In particular, basic knowledge of Git can help. It is relatively easy to make a complete mess of a project by not grasping the way versioning works. There are safeguards, but you might struggle a lot more than necessary! I remember how that feels 😑
:::

## Simple local install

In order to develop and test things out, you're gonna need a (mostly) functional instance of TiBillet on your computer.

Let's make sure you have the required tools at hand. You need:

- Docker CLI and the `docker-compose` extension
- `git`
- a Github account with a registered SSH key for forge access
- an IDE (there are open-source gift licenses of PyCharm available on request, but a regular IDE like VSCodium works reasonably well - that's what I'm using 😉)

:::info
From here, you can choose between two paths: 
- The **Too easy !** path: [I download an archive](https://nuage.tierslieux.re/s/rprGfbDDDrazJ9d) in which everything is already installed and I can go straight to [engine startup](#manual-engine-start).
- The **I want to understand! path**: Each step in creating your environment is detailed in the [tuto below](#detailed-local-installation).

You can even do both, for maximum effect!
:::

## Detailed local installation

Translated with DeepL.com (free version)
We're gonna start by creating a folder that will hold the different repositories required, in your local repository or work folder if you have one for example. It will look like this:

```bash
tibillet-dev
├── Fedow
├── LaBoutik
├── Lespass
├── Test-Driven-Development
└── Traefik
```

### Traefik

We are going to need an application proxy. TiBillet provides a basic configuration for a containerized Traefik + LetsEncrypt, so let's roll with it:

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Traefik-reverse-proxy.git Traefik
```

To start it:

```bash title="tibillet-dev$"
cd Traefik
docker compose up -d
```

Navigating to `https://localhost` should now prompt you with a security warning about self-signed certificates (it's fine in this instance) and a `404 page not found`. Good!

:::note
Remember to `compose up` Traefik every time you start a dev session on this project.
:::

### Key generation

<mark>TODO: Complicated and heavy for no reason.</mark>

The legacy way of generating the necessary configuration keys is to pull the production Fedow docker image and run poetry inside of it.

For each engine, we will need:

- one or two Fernet keys (for the `FERNET_KEY` field and possibly, passwords)
- a Django secret key (for the `SECRET_KEY` field)

You can generate 30 of each in your terminal by running:

```bash
docker run --rm tibillet/fedow poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"
docker run --rm tibillet/fedow poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```

The first line will take some time as it need to pull the entire Docker image. Keep the keys somewhere, we're gonna need them to setup the engines.

We're also going to need a Stripe test key for the `STRIPE_KEY_TEST` field. Stripe is the payment solution that is currently taking care of the cashing in. You can obtain a key by creating a free account, then by going to Test mode -> API test key. Alternatively you can ask the team.

### Fedow, Lespass, LaBoutik

Start by cloning the repositories:

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Fedow.git
git clone git@github.com:TiBillet/Lespass.git
git clone git@github.com:TiBillet/LaBoutik.git
```

From here, we need to write a bit of configuration. It will be better streamlined in the future, so bear with us 😋

Each engine needs its own `.env` file, which you can base on the `env_example` files you cloned.

:::warning
Each environment variable must be readable from the `.env` file. No line deletion! Some of them can however stay empty (nullable).
:::

#### Fedow environment

```bash title="tibillet-dev$"
cp Fedow/env_example Fedow/.env
```

|Name|Target environment|Nullable|Default value|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|All|No||One of the previously generated Django secret key|
|`FERNET_KEY`|All|No||One of the previously generated Fernet key|
|`STRIPE_KEY`|Production|Yes||Your Stripe API key|
|`DOMAIN`|All|No|`fedow.tibillet.localhost`|Change to you domain and subdomain for production mode|
|`STRIPE_KEY_TEST`|Development, Testing|Yes||Your Stripe API test key|
|`STRIPE_TEST`|Development, Testing|No|0|Set to 1 if `STRIPE_KEY_TEST` is filled|
|`STRIPE_ENDPOINT_SECRET_TEST`|Development, Testing|Yes||No idea|
|`DEBUG`|Development|No|0|Set to 1 for development|
|`TEST`|Testing|No|0|Set to 1 for testing|


#### Lespass environment

```bash title="tibillet-dev$"
cp Lespass/env_example Lespass/.env
```

|Name|Target environment|Nullable|Default value|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|All|No||One of the previously generated Django secret key|
|`FERNET_KEY`|All|No||One of the previously generated Fernet key|
|`STRIPE_KEY`|Production|Yes||Your Stripe API key|
|`DOMAIN`|All|No|`tibillet.localhost`|Change to your domain for production mode|
|`SUB`|All|No|`lespass`|Instance subdomain, change for production mode as necessary|
|`META`|All|No|`agenda`|Federated calendar subdomain, change for production mode as necessary|
|`FEDOW_DOMAIN`|All|No|`fedow.tibillet.localhost`|Domain and subdomain of the Fedow engine|
|`PUBLIC`|All|No|TiBillet Coop.|Main instance name|
|`TIME_ZONE`|All|No|Europe/Paris|TZ time zone of the instance|
|`ADMIN_EMAIL`|All|No||Admin email (for the first admin)|
|`POSTGRES_DB`|All|No|lespass|Change for production mode if necessary|
|`POSTGRES_USER`|All|No|lespass_postgres|Change for production mode|
|`POSTGRES_PASSWORD`|All|No||Strong password (one of the Fernet keys for example)|
|`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`|All|Yes||Email server, required to confirm user registrations for example|
|`STRIPE_KEY_TEST`|Development, Testing|Yes||Your Stripe API test key|
|`STRIPE_TEST`|Development, Testing|No|0|Set to 1 if `STRIPE_KEY_TEST` is filled|
|`DEBUG`|Development|No|0|Set to 1 for development|
|`TEST`|Testing|No|0|Set to 1 for testing|


#### LaBoutik environment

```bash title="tibillet-dev$"
cp LaBoutik/env_example LaBoutik/.env
```

Name|Target environment|Nullable|Default value|Notes|
|---|---|---|---|---|
|`SECRET_KEY`|All|No||One of the previously generated Django secret key|
|`FERNET_KEY`|All|No||One of the previously generated Fernet key|
|`DOMAIN`|All|No|`laboutik.tibillet.localhost`|Change to you domain and subdomain for production mode|
|`FEDOW_URL`|All|No|https://fedow.tibillet.localhost/|Fedow engine URL|
|`LESPASS_TENANT_URL`|All|No|https://lespass.tibillet.localhost/|Lespass instance URL|
|`TIME_ZONE`|All|No|Europe/Paris|TZ time zone of the instance|
|`ADMIN_EMAIL`|All|No||Admin email (for the first admin)|
|`MAIN_ASSET_NAME`|All|No||Name of your main cashless asset (Centiment, HeartBit… whatever you like)|
|`POSTGRES_DB`|All|No|laboutik|Change for production mode if necessary|
|`POSTGRES_USER`|All|No|laboutik_user|Change for production mode|
|`POSTGRES_PASSWORD`|All|No||Strong password (one of the Fernet keys for example)|
|`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`|All|Yes||Email server, required to confirm user registrations for example|
|`BORG_PASSPHRASE`|All|Yes||Password used for data backup|
|`DEBUG`|Development|No|0|Set to 1 for development|
|`TEST`|Testing|No|0|Set to 1 for testing|
|`DEMO`|Development, Testing|No|0|Set to 1 for a register simulation|
|`SENTRY_DNS`|Development, Testing|Yes||Sentry Debug pour le back-end|
|`SENTRY_FRONT_DNS`, `SENTRY_FRONT_ASSET`|Development, Testing|Yes||Sentry Debug for front-end|
|`DEMO_TAGID_CM`, `DEMO_TAGID_CLIENT1`, `DEMO_TAGID_CLIENT2`||Yes||No idea|

The configuration should now be complete for the TiBillet engines.

### Tests setup

For… reasons, the entire dev environment is assembled through the tests. The setup of the testing repository might seem familiar:

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Test-Driven-Development.git
cp Test-Driven-Development/env_example Test-Driven-Development/.env
```

There! Setup done ☺️ Now we can start running the entire project from inside the test folder:

```bash title="Test-Driven-Development$"
docker compose up -d
```

You can access the logs with:

```bash title="Test-Driven-Development$"
docker compose logs -f
```

:::warning[Careful!]
This particular `docker-compose.yml` relies on the folder structure of its *parent folder* shown in the beginning with the example name of `tibillet-dev`. Counterintuitive, but hey: now you know!
:::

## Manual engine start

The main difference between dev and prod containers is that running the `docker compose` command will not start the individual Django apps. It's a level of granularity that helps with development, but it means you get to start them manually by entering the containers. Lucky you! 🍀

Were're gonna start them in a particular order:

1. Fedow
2. Lespass
3. LaBoutik (needs the other two to start)

The tools we need are in the Django containers, named after the engines: `fedow_django`, `lespass_django` and `laboutik_django`. To enter a container (Fedow example) :

```bash
# starting bash shell in fedow_django container
docker exec -ti fedow_django bash
```

From there we have a few options.

First is the `flush.sh` script. It initializes testing data and starts the app right after. This is what we're gonna use at **first boot**:

```bash title="fedow_django$"
./flush.sh
```

We will also use it when we want to **reset** data, for example before starting the automated testing with relies on this predictible data.

For the rest of the container manipulations, we're going to need the Poetry shell, because we're gonna use Python commands.

To start Poetry's virtual env from the container:

```bash title="fedow_django$"
 # we start the virtual env that handles the python dependencies
poetry shell
```

Django is handled through a script called `manage.py`. Two commands are of interest to us here:

- `rsp` (alias of  `./manage.py runserver 0.0.0.0:8000`) starts Django but doesn't wipe out the data. This will help keep data between sessions. GThis command is used in most cases, `flush` is only used for testing or when something's gonz wrong.

- As an option, if you're encontering graphical issues (such as assets not loading), you can attempt `./manage.py collectstatic`. Sometimes the graphical assets are not properly collected at first boot, in which case this can help.

Only thing left to do is to start the three engines in the order described earlier : Fedow, Lespass, then LaBoutik !

:::tip[Aliasing]
The docker command gets repetitive after a while. Why not create an alias, or even a little bash function that will shorten your labor and preserve your carpal tunnel? Here's mine:

```bash title="~/.bashrc"
function dockex {
    docker exec -ti $1 bash
}
```

There's probably even a way to add the poetry stuff to it, look it up!
:::

### Is it working?

If you have used the default domain configuration, you can now access:

- the federation engine Fedow at [fedow.tibillet.localhost](https://fedow.tibillet.localhost)
- an instance of the ticketing engine Lespass at [lespass.tibillet.localhost](https://lespass.tibillet.localhost)
- the currency register server LaBoutik at [laboutik.tibillet.localhost](https://laboutik.tibillet.localhost)

If everything is working as expected, congratulations: you're ready to go 🔧

If not, come talk to us, we'd love to help!

:::note[Wrapping up]
Don't forget to `docker compose down` both here and in Traefik when you're done. You computer needs a break sometimes.

If you think you won't remember, remove the daemon option when you compose up (`-d`) and the command will run directly in the terminal, not as a background job. It's fine, you'll just need more tabs 😋
:::


## Lifecycle

### Updates

To stay up to date during development, pull the latest image:

```bash title="Test-Driven-Development$"
docker compose pull
docker compose up -d # start or restart the updated containers
```

### Testing

You can run the Python tests through the same shell-ception required to do a manual start. Start by flushing the 3 Django apps to get fresh testing data, then run this inside your LaBoutik Django container:

```bash title="laboutik_django> poetry shell$"
./manage.py test
```

<mark>TODO: end-to-end tests docs (they exist!)</mark>

### Backups

Before causing any major change, backup any data that has value to your development. On your Fedow instance, you only need to save the `database` folder regularly. The other engines can be backed up through the Borgbackup util, cron tasks and database dumps. More about this in the future.

<mark>TODO: detailed backup explanation</mark>
