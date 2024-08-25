# including env file if it exists
-include .env

# setting up shell as bash
SHELL := /bin/bash

# storing git creds for use in commands
NAME=$$(git config user.name)
EMAIL=$$(git config user.email)

# starts container
start: env_check
	@echo "== 🟢 Starting containers... ==============="
	@docker compose up -d
	@make -s url_print
	@echo "== 💜 TiBillet docs are up! ==============="

# changes locale to en in env file with text replacement utility
en: env_check
	@echo "== 🗨  Selecting English locale. ============"
	@sed -i '/DOCUSAURUS_LOCALE=/s/=\w\+/=en/' .env

# changes locale to fr in env file with text replacement utility
fr: env_check
	@echo "== 🗨  Selecting French locale. ============="
	@sed -i '/DOCUSAURUS_LOCALE=/s/=\w\+/=fr/' .env

# stops container
stop:
	@echo "== 🛑 Shutting down containers... =========="
	@docker compose down
	@echo "== 💀 TiBillet docs shut down. ============="

# rebuilds image and starts container
build: env_check
	@echo "== ➰ Building containers... ==============="
	@docker compose up -d --build
	@make -s url_print
	@echo "== 🛠️  TiBillet docs built from scratch! ===="

# opens a bash shell inside the container (for easier access to yarn, mostly)
shell: env_check
	@echo "== 🔐 Entering container... ================"
	@docker exec -ti tibillet_docusaurus bash
	@echo "== 🔒 Welcome back! ========================"

# executes  a pre-configured yarn deploy that sends the generated site on a
# github pages branch
deploy: build
	@echo "== 🐱 Deploying to Github... ==============="
	@docker exec -ti tibillet_docusaurus yarn deploy
	@echo "== 🚀 TiBillet docs are online! ============"

# copies env file, then adds the name and email found at the beginning to your
# env file with text replacement utility
init:
	@echo "== ✨ Initiating environment... ============"
	@cp env_example .env
	@echo "== 🧑 Setting up your Git credentials... ==="
	@echo "${NAME} <${EMAIL}>"
	@sed -i "/GIT_NAME=/s/=.*/=${NAME}/" .env
	@sed -i "/GIT_EMAIL=/s/=.*/=${EMAIL}/" .env
	@echo "== 🪪  All done! ============================"

# check for env file and make recursive call to make init if not found
env_check:
	@[ -f .env ] || make -s init

# displays the local server, adding the locale folder unless it's English
url_print:
	@echo ".. Running at http://localhost:3000/$$( \
		[ ${DOCUSAURUS_LOCALE} = "en" ] || echo "${DOCUSAURUS_LOCALE}/" \
	)"
