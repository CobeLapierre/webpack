var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var webpack = require('webpack-stream');

var named = require('vinyl-named');
var Server = require('karma').Server;
var server = new Server({
    configFile: __dirname + '/karma.conf.js'
});

gulp.task('webpack', function(){
    return gulp.src(['./ts/**/*.ts', './jasmine/**/*.*'])
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch-webpack', function(){
   gulp.watch(['./ts/**/*.ts','./**/*.html', './gulpfile.js', './karma.conf.js'], ['webpack']); 
});

gulp.task('test', function () {
  server.start();
});