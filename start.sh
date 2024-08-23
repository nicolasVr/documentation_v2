#! /bin/bash

git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME

yarn install
yarn start --host 0.0.0.0 --poll 1000 --locale $DOCUSAURUS_LOCALE
