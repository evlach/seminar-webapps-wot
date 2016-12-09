'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () =>
  gulp
    .src('./test/DummySensorTest.js', {read: false})
    .pipe(mocha({reporter: 'spec', timeout: 5000}))
);
