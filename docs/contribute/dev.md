---
sidebar_position: 1
slug: development
title: Development
keywords: [contribute, volunteer, open source, git, pull request, issue, help, code, development, programming, python, django, docker, poetry, testing, tdd]
tags: [contribute, open source, git, help, tdd, python, django, docker, poetry]
authors: kaya
---

# Development

So, you want to help with the development of TiBillet. Thank you! Open-source thrives thanks to people like you 🙏

First, if you don't have a specific task in mind already, check out the open issues on the official [Github repositories](https://github.com/TiBillet).

It's the easiest way to figure out what problem needs fixing or what feature is being requested.

:::note[Repositories]
What you need is probably in the pinned repositories. If you are unsure of the role of Fedow, Laboutik or Lespass, check out the basics on the three TiBillet engines.

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

## Local install

In order to develop and test things out, you're gonna need a (mostly) functional instance of TiBillet on your computer.

Let's make sure you have the required tools at hand. You need:

- Docker CLI and the `docker-compose` extension
- `git`
- a Github account with a registered SSH key for forge access
- an IDE (there are open-source gift licenses of PyCharm available on request, but a regular IDE like VSCodium works reasonably well - that's what I'm using 😉)

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

- one or two Fernet keys
- a Django secret key

You can generate 30 of each in your terminal by running:

```bash
docker run --rm tibillet/fedow poetry run python3 -c "from cryptography.fernet import Fernet; print('\n'.join([Fernet.generate_key().decode('utf-8') for i in range(0,30)]))"
docker run --rm tibillet/fedow poetry run python3 -c "from django.core.management.utils import get_random_secret_key; print('\n'.join([get_random_secret_key() for i in range(0,30)]))"
```

The first line will take some time as it need to pull the entire Docker image. Keep the keys somewhere, we're gonna need them to setup the engines.

### Fedow, Lespass, Laboutik

Start by cloning the repositories:

```bash title="tibillet-dev$"
git clone git@github.com:TiBillet/Fedow.git
git clone git@github.com:TiBillet/Lespass.git
git clone git@github.com:TiBillet/LaBoutik.git
```

From here, we need to write a bit of configuration. It will be better streamlined in the future, so bear with us 😋

Each engine needs its own `.env` file, which you can base on the `env_example` files you cloned.

```bash title="tibillet-dev$"
cp Fedow/env_example Fedow/.env
```

```bash title="Fedow/.env"
SECRET_KEY='' # add a Django secret key here
FERNET_KEY='' # same with one of the Fernet key you previously generated
DOMAIN='fedow.tibillet.localhost' # default local domain, referenced in docker-compose.yml

### FOR TEST AND DEBUG ###

DEBUG=1
TEST=1

STRIPE_TEST=1
STRIPE_KEY_TEST='' # ask the core team! for obvious reasons, we don't freely distribute Stripe keys 😉
STRIPE_ENDPOINT_SECRET_TEST='' # not required in development
```

You can follow the same process for Lespass, even if the environment setup is different.

```bash title="tibillet-dev$"
cp Lespass/env_example Lespass/.env
```

```bash title="Lespass/.env"
DJANGO_SECRET='' # Django secret key, different from the Fedow env
FERNET_KEY='' # same with a different Fernet

DEBUG=1
TEST=1

STRIPE_TEST=1
STRIPE_KEY_TEST='' # same as in Fedow env

# Database
POSTGRES_HOST='lespass_postgres' # referenced in docker-compose.yml
POSTGRES_USER='lespass_postgres_user'
POSTGRES_PASSWORD='' # you can add a second Fernet key here (or another strong password)
POSTGRES_DB='lespass'

TIME_ZONE='Europe/Paris' # TZ timezone identifier
PUBLIC='TiBillet Coop.' # instance name

FEDOW_DOMAIN='fedow.tibillet.localhost' # federation engine domain

DOMAIN='tibillet.localhost' # for the wildcard: without subdomain ! ex : tibillet.coop, not lespass.tibillet.coop
SUB='demo' # instance referenced in docker-compose.yml as demo.tibillet.localhost
META='agenda' # the federated agenda for all events on all tenants. the default setup is accessible as agenda.tibillet.coop
ADMIN_EMAIL='' # required but will not be used in dev to send email

# not required in dev
EMAIL_HOST=''
EMAIL_PORT=''
EMAIL_HOST_USER=''
EMAIL_HOST_PASSWORD=''

# change only if needed
CELERY_BROKER='redis://redis:6379/0'
CELERY_BACKEND='redis://redis:6379/0'
```

Lastly, we configure Laboutik in the same way:


```bash title="tibillet-dev$"
cp Laboutik/env_example Laboutik/.env
```

```bash title="Laboutik/.env"
DJANGO_SECRET='' # yet another unique Django secret key
FERNET_KEY='' # unique Fernet key

DEBUG=1
TEST=1
DEMO=1

POSTGRES_USER='laboutik_user'
POSTGRES_PASSWORD='' # again, you can use a unique Fernet for this or a strong password of your choice
POSTGRES_DB='laboutik'

DOMAIN='cashless.tibillet.localhost' # default, referenced in docker-compose.yml

# laboutik requires Fedow and a Lespass instance (tenant)
FEDOW_URL='https://fedow.tibillet.localhost/'
LESPASS_TENANT_URL='https://demo.tibillet.localhost/'

# name of your cashless asset (virtual currency)
MAIN_ASSET_NAME='TestCoin'

# admin email, required but not in use in dev, use the same as for lespass
ADMIN_EMAIL=''

# still not required in dev
EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""

TIME_ZONE='Europe/Paris'
LANGUAGE_CODE='fr'


########## FOR SAVE CRON TASK ##########

# can be empty if you don't backup
BORG_PASSPHRASE=""

########## FOR TEST AND DEBUG ONLY ##########

# Sentry Debug for django backend
SENTRY_DNS=""
# Sentry Debug for js frontend
SENTRY_FRONT_DNS=""
SENTRY_FRONT_ASSET=""

###!!!!!! Don't push to production with debug, test or demo !!!!!!###

DEMO_TAGID_CM=''
DEMO_TAGID_CLIENT1=''
DEMO_TAGID_CLIENT2=''
```

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

### Manual engine start

The main difference between dev and prod containers is that running the `docker compose` command will not start the individual Django apps. It's a level of granularity that helps with development, but it means you get to start them manually by entering the containers. Lucky you! 🍀

Let's do a bit of a shell-ception: we're going to enter a bash shell inside a Docker container, then from there enter the Poetry virtual environment. For example with Fedow:

```bash
docker exec -ti fedow_django bash # entering the container
poetry shell # entering the virtual environment
```

From there we have a few options.

```bash title="poetry env$"
./flush.sh # will start the Django app from scratch with test data
rsp # alias to 'python manage.py runserver 0.0.0.0:8000' if you want to keep your data
./manage.py collectstatic # sometimes static assets do not get collected properly in the first startup, which makes it look like a website from the 90s. if that happens, run this
```

The django containers are by default named after the engines: `fedow_django`, `lespass_django`, `laboutik_django`. Manually start them all!

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
- an instance of the ticketing engine Lespass at [demo.tibillet.localhost](https://demo.tibillet.localhost)
- the currency register server Laboutik at [cashless.tibillet.localhost](https://cashless.tibillet.localhost)

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

You can run the Python tests through the same shell-ception required to do a manual start. Start by flushing the 3 Django apps to get fresh testing data, then run this inside your Laboutik Django container:

```bash title="laboutik_django> poetry shell$"
./manage.py test
```

<mark>TODO: end-to-end tests docs (they exist!)</mark>

### Backups

Before causing any major change, backup any data that has value to your development. On your Fedow instance, you only need to save the `database` folder regularly. The other engines can be backed up through the Borgbackup util, cron tasks and database dumps. More about this in the future.

<mark>TODO: detailed backup explanation</mark>
