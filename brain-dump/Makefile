APP_NAME := Brain Dump
DMG_NAME := BrainDump.dmg
DIST_DIR := dist
APP_BUNDLE := $(DIST_DIR)/$(APP_NAME)-darwin-arm64/$(APP_NAME).app

.PHONY: install start package dmg clean

install:
	npm install

start:
	npm start

package:
	npx electron-packager . "$(APP_NAME)" --platform=darwin --arch=arm64 --out=$(DIST_DIR) --overwrite --icon=icon.icns

dmg: package
	rm -f $(DIST_DIR)/$(DMG_NAME)
	create-dmg \
		--volname "$(APP_NAME)" \
		--window-size 600 400 \
		--icon-size 80 \
		--icon "$(APP_NAME).app" 175 200 \
		--app-drop-link 425 200 \
		"$(DIST_DIR)/$(DMG_NAME)" \
		"$(APP_BUNDLE)"

clean:
	rm -rf $(DIST_DIR)
