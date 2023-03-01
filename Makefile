install:
	npm install

lint:
	
	npx stylelint ./app/scss/**/*.scss
	pug-lint ./app/pages/*.pug

lint-fix:
	npx stylelint ./app/scss/**/*.scss --fix

deploy:
	npx surge ./build/
