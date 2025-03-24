#! /bin/bash

# git config
git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME
git config --global --add safe.directory /opt/docusaurus

# yarn setup
yarn install
sleep infinity
#yarn start --host 0.0.0.0 --poll 1000 --locale $DOCUSAURUS_LOCALE
