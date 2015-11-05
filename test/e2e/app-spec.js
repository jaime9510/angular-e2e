'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  beforeEach(function () {
    browser.get('index.html');
  });

  it('Se debe dirigir automaticamente a / cuando la dirección está vacía', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('El menú superior debe tener 3 items', function() {
    var list = element.all(by.css('.nav li'));
	   expect(list.count()).toBe(3);
  });

});
