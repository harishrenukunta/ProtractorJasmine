var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs: ['./specs/*spec.js'],
    capabilities:{
        browserName:'firefox'
    },
    onPrepare: function() {
        /*
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            screenshotsFolder: 'images',
            takeScreenshots:true,
            takeScreenshotsOnlyOnFailures: true,
            fileNamePrefix: 'Prefix',
            fileName: 'Tanvi Test Report',
            fileNameSeparator: '_'
         })

        );
        */
         var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
            })
        
        });
  }
}
 