-include .env

SHELL := /bin/bash

NAME=$$(git config user.name)
EMAIL=$$(git config user.email)

start: env_check
	@echo "== 🟢 Starting containers... ==============="
	@docker compose up -d
	@make -s url_print
	@echo "== 💜 TiBillet docs are up! ==============="

en: env_check
	@echo "== 🗨  Selecting English locale. ============"
	@sed -i '/DOCUSAURUS_LOCALE=/s/=\w\+/=en/' .env

fr: env_check
	@echo "== 🗨  Selecting French locale. ============="
	@sed -i '/DOCUSAURUS_LOCALE=/s/=\w\+/=fr/' .env

stop:
	@echo "== 🛑 Shutting down containers... =========="
	@docker compose down
	@echo "== 💀 TiBillet docs shut down. ============="

build: env_check
	@echo "== ➰ Building containers... ==============="
	@docker compose up -d --build
	@make -s url_print
	@echo "== 🛠️  TiBillet docs built from scratch! ===="

shell: env_check
	@echo "== 🔐 Entering container... ================"
	@docker exec -ti tibillet_docusaurus bash
	@echo "== 🔒 Welcome back! ========================"

deploy: build
	@echo "== 🐱 Deploying to Github... ==============="
	@docker exec -ti tibillet_docusaurus yarn deploy
	@echo "== 🚀 TiBillet docs are online! ============"

init:
	@echo "== ✨ Initiating environment... ============"
	@cp env_example .env
	@echo "== 🧑 Setting up your Git credentials... ==="
	@echo "${NAME} <${EMAIL}>"
	@sed -i "/GIT_NAME=/s/=.*/=${NAME}/" .env
	@sed -i "/GIT_EMAIL=/s/=.*/=${EMAIL}/" .env
	@echo "== 🪪  All done! ============================"

env_check:
	@[ -f .env ] || make -s init

url_print:
	@echo ".. Running at http://localhost:3000/$$( \
		[ ${DOCUSAURUS_LOCALE} = "en" ] || echo "${DOCUSAURUS_LOCALE}/" \
	)"
