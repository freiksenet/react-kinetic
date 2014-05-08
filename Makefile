OUT := build

package := ./package.json
deps := ./node_modules
deps_installed := $(deps)/installed
browserify := $(deps)/browserify/bin/cmd.js
browserify_flags := -r ./react-kinetic -r react
beefy := $(deps)/beefy/bin/beefy
js_files := $(shell find src/ -type f -name '*.js')

$(OUT):
	mkdir $(OUT)

$(deps_installed): $(package)
	npm list > /dev/null 2> /dev/null; echo $$? && rm -rf deps
	npm install --silent
	touch $@

$(OUT)/react-kinetic.js: fun.js $(js_files) $(deps_installed) $(OUT)
	$(browserify) . $(browserify_flags) -o $@

.PHONY: demo
demo: $(deps_installed)
	$(beefy) demo.js --live --browrerify $(browserify) -- $(browserify_flags)

dist: $(OUT)/react-kinetic.js

.PHONY: clean-npm
clean-npm:
	rm -rf $(deps)

.PHONY: clean
clean:
	rm -rf $(OUT)
