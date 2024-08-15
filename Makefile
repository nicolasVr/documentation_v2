# default locale first
locales := en fr

build:
	for locale in $(locales) ; do \
		mkdocs build -f config/$$locale.yml ; \
	done

serve: clean build
	cd site && python -m http.server

clean:
	rm -rf site/*
