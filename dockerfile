# syntax=docker/dockerfile:1

# loosely base on
# https://docusaurus.community/knowledge/deployment/docker/
# then adapted for i18n dev only
FROM node:lts

## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD yarn install && yarn start --host 0.0.0.0 --poll 1000
