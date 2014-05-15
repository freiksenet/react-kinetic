OUT := build

package := ./package.json
deps := ./node_modules
deps_installed := $(deps)/installed

browserify := $(deps)/browserify/bin/cmd.js
browserify_flags := -r ./react-kinetic -r react
beefy := $(deps)/beefy/bin/beefy
jsxc := $(deps)/jsxc/bin/jsxc

js_files := $(shell find src/ -type f -name '*.js')

$(OUT):
	mkdir $(OUT)

$(deps_installed): $(package)
	npm list > /dev/null 2> /dev/null; echo $$? && rm -rf deps
	npm install --silent
	touch $@

$(OUT)/react-kinetic.js: react-kinetic.js $(js_files) $(deps_installed) $(OUT)
	$(browserify) . $(browserify_flags) -o $@

.PHONY: demo-rectangles
demo-rectangles: $(deps_installed)
	$(beefy) demo/rectangles.js --live --browserify $(browserify) -- $(browserify_flags) -d

.PHONY: demo-plane-game
demo-plane-game: $(deps_installed)
	$(beefy) demo/plane-game.js --live --browserify $(browserify) -- $(browserify_flags) -d

# Demo dist stuff
demofiles := $(wildcard demo/*)

$(OUT)/demo: $(demofiles) $(OUT)
	cp -r demo $@
	for f in $(OUT)/demo/*.js; do \
          $(jsxc) $$f $$f; \
	done

$(OUT)/index.html: index.html $(OUT)
	cp $< $@

dist: $(OUT)/react-kinetic.js $(OUT)/demo $(OUT)/index.html

.PHONY: clean-npm
clean-npm:
	rm -rf $(deps)

.PHONY: clean
clean:
	rm -rf $(OUT)

origin := $(shell git config --get remote.origin.url)

.PHONY: pages
pages: dist
	cd $(OUT) && \
	git init . && \
	git add . && \
	git commit -m "Update pages"; \
	git push $(origin) master:gh-pages --force && \
	rm -rf .git
