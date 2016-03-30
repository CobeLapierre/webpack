module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],//, 'Chrome', 'Firefox', 'PhantomJS', 'IE'
    plugins: [
      'karma-*',
    ],
    logLevel: config.LOG_DEBUG,
    port:9876,
    autoWatch: false,
    singleRun: true,
    files: [
        //"./dist/shared.bundle.js", 
        "./dist/**/*.js"
    ],
    loggers:[
        {
            type: 'console'
        }
    ],
    colors:true
  });
};