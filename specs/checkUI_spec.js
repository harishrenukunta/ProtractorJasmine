

describe('Verify UI elements', function(){

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    })
    it('Verify all text boxes available', function(){
        expect(element(by.model('first')).isPresent()).toBeTruthy;
        expect(element(by.model('second')).isPresent()).toBeTruthy;
    })
})