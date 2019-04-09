const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const less = require('gulp-less');
const { src, dest, parallel, task } = require('gulp');
const fileroot = "./";
task ('js', () => {
  return src(fileroot + 'index.js')
    .pipe(rename('index.min.js'))
	.pipe(uglify())
	.pipe(dest(fileroot));
});
task ('jsr', () => {
  return src(fileroot + 'manager/main_process/index.js')
    .pipe(rename('index.min.js'))
	.pipe(uglify())
	.pipe(dest(fileroot + 'manager/main_process'));
});
task ('jsrd', () => {
  return src(fileroot + 'manager/main_process/data.js')
    .pipe(rename('data.min.js'))
	.pipe(uglify())
	.pipe(dest(fileroot + 'manager/main_process'));
});
task ('css', () => {
  return src(fileroot + 'content/sheet1.less')
	.pipe(rename('csscompile.less'))
	.pipe(less())
	.pipe(dest(fileroot + 'content/build'));
});