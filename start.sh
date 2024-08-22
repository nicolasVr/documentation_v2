#! /bin/bash

yarn install
yarn start --host 0.0.0.0 --poll 1000 --locale $DOCUSAURUS_LOCALE
