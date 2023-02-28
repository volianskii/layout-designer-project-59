install:
	npm install

lint:
	npx stylelint ./build/styles/*.css
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./build/*.html

deploy:
	npx surge ./build/
