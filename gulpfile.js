/* const BrowserSync = require('browser-sync/dist/browser-sync'); */
const { watch, parallel, src, dest } = require('gulp');
/* const { require } = require('gulp-cli/lib/shared/cli-options'); */
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
/* const sassCompile =(done) => {
  console.log('Comple SASS to CSS');

  done();
};

const pugCompile = (done) => {
  console.log('Compile PUG to HTML');

  done();
};

const ImagesOptimize = (done) => {
  console.log('Optimize images');

  done();
};

const Copyscss = () => {
  return src(['src/sass/*scss', '!src/sass/file1.scss'])
  .pipe(dest('build/styles'));
};

const changescssfiles = (done) => {
  console.log('One of SCSS files was changed');

  done();
}

const changeFileStructure = (done) => {
  console.log('One of src/ directory files was added or deleted');

  done();
}

const watchers = () => {
  watch('src/sass/*.scss', { events: 'change' }, changescssfiles);

  watch('src/', { events: ['unlink', 'add'] }, changeFileStructure);
};
 */


function browserSyncJob() {
  browserSync.init({
    server: 'build/'
  });

  watch('app/styles/**/*.scss', buildSass);
  watch('app/**/*.pug', buildPug);
}

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/styles/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles'))
    .pipe(browserSync.stream());
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/**/*.pug')
    .pipe(pug({pretty: true}))
    .pug(dest('build/'))
    .pipe(browserSync.stream());
}

/* const development = () => {

} */

/* exports.default = parallel(sassCompile, pugCompile, ImagesOptimize);
exports.layoutCompile = parallel(sassCompile, pugCompile);
exports.assetsOptimize = ImagesOptimize;
exports.Copyscss = Copyscss;
exports.watchers = watchers; */
exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);
/* Для теста отдельно 2 функций */
exports.sass = buildSass;
exports.pug = buildPug;