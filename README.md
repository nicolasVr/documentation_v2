# TiBillet docs

You can view your edits and deploy the TiBillet docs with several methods, listed here from the simplest one to the fiddliest one.

## Using the Makefile

Requirements:

- gnu make (you probably have it)
- docker cli and docker-compose
- low level utilities: bash, sed (yeah you have them)

### Commands

- `make init` to initiate your environment (done automatically if .env is absent)
- `make start` and `make stop` to start and stop the container (and serve the node app)
- `make en` or `make fr` to change the environment locale
    - combine the targets to restart in a different locale, ex `make fr start`
- `make rebuild` to rebuild your docker containers
- `make open` to enter a bash shell in the container
- `make deploy` to deploy the docs to github pages (all locales)

## Running from the container

Requirements:

- docker cli and docker-compose

### Commands

- `cp env_example .env` to init your environment
  - fill in your Git credentials and the target locale
- `docker compose up -d` and `docker compose down` to start and stop the container and serve the node app
  - to change the locale, edit the dot .env and do a new compose up
- `docker compose up -d --build` to rebuild the containers
- `docker exec -ti tibillet_docusaurus bash` to enter a shell in the container
- `yarn deploy` from inside the container to deploy to github pages

## Local yarn install

Requirements:

- node, yarn

### Commands

- `yarn install` to install dependencies
- `yarn start --poll 1000 --locale xx` (where xx is either fr or en)
- `yarn deploy` to deploy to github pages

---

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
