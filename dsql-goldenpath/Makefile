.PHONY: build dev run deploy

build:
	npm run build

dev:
	npm run dev

run:
	npm start

deploy:
	aws s3 sync dist/ s3://aurora-dsql-onboarding-guide-ca --delete
