
function takeScreenShot(msg){
    browser.takeScreenshot().then(function(png){
        allure.createAttachment(msg, function(){
            return new Buffer(png, 'base64')
        }, 'image/png')();

    })
}
describe('Demo first test', function(){
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    })

    it('Add two numbers', function(){
        allure.createStep('Enter data into first operand', function(){
            element(by.model('first')).sendKeys('5');
            takeScreenShot('Screenshot:After First operand');
        })();

        allure.createStep('Enter data into second operand', function(){
            element(by.model('second')).sendKeys('6');
            takeScreenShot('Screenshot:After First operand');
        })();

        element(by.id('gobutton')).click();
        expect(element(by.tagName('h2')).getText()).toEqual('11');

    })

    it('Substract two numbers', function(){
        element(by.model('first')).sendKeys(6);
        element(by.model('second')).sendKeys(2);
        element(by.model('operator')).element(by.cssContainingText('option', '-')).click();
        element(by.id('gobutton')).click();
        expect(element(by.tagName('h2')).getText()).toEqual('4');
    })

    it('Division of two numbers', function(){
        element(by.model('first')).sendKeys('6');
        element(by.model('second')).sendKeys('3');
        element(by.css('select option[value*="DIVISION"]')).click();
        element(by.id('gobutton')).click();
        browser.sleep(2000);
        expect(element(by.tagName('h2')).getText()).toEqual('2');
    
    })

    it('Should allow 4 operations', function(){
        let operationsOptions = element.all(by.options('value for (key, value) in operators'));
        expect(operationsOptions.count()).toEqual(5);
    })

    it('Performed operations are displayed in table',async function(){
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('3');
        browser.sleep(2000);
        element(by.css('select option[value="ADDITION"]')).click();
        element(by.id('gobutton')).click();
        expect(element(by.tagName('h2')).getText()).toEqual('6');
        
        let firstrow = element(by.css('table.table tbody tr td:first-child'));
        /*
        firstrow.getText().then(function(text){
            console.log(`Operation performed at : ${text}`);
        });*/
        let timestamp = await firstrow.getText();

        browser.sleep(2000);
        console.log(`Operation performed at(async) : ${timestamp}`);
        
    })
})