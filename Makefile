install:
	npm install

lint:
	npx stylelint ./app/styles/*.css
	npx stylelint ./app/styles/**/*.scss
	npx htmlhint ./app/*.html

deploy:
	npx surge ./build/
