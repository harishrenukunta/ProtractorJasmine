var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs: ['./specs/*spec.js'],
    capabilities:{
        browserName:'firefox'
    },
    onPrepare: function() {
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
     }
  };
 