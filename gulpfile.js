const rename = require('gulp-rename');
const less = require('gulp-less');
const { src, dest, parallel, task } = require('gulp');
const fileroot = "./";
task ('css', () => {
  return src(fileroot + 'content/sheet1.less')
	.pipe(rename('csscompile.less'))
	.pipe(less())
	.pipe(dest(fileroot + 'content/build'));
});