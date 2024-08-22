# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Running in a container

Start by copying `env_example` to `.env` and set the locale to your preference. Due to Docusaurus's limitations, only one is available at once in dev mode.

You can then simply start your container with Docker compose in background mode.

```bash
$ cp env_example .env
$ nano .env
$ docker compose up -d
```

### Deployment

Deploy to Github by entering your container and using `yarn deploy`:

```bash
$ docker exec -ti tibillet_docusaurus bash
tibillet_docusaurus $ yarn deploy
```

> Make sure you have the rights, or edit `docusaurus.config.js` accordingly.

## Alternative: Yarn install

Start by just running:

```
$ yarn
```

### Local Development

```
$ yarn run start
$ yarn run start --locale fr
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
