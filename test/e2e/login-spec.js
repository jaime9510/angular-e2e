'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {
  beforeEach(function () {
    browser.get('/#/login');
  });

  it('Se debe dirigir a /login cuando la dirección apunta allí', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });

  it('Se debe mostrar el form de Sign in cuando carga la página', function() {
    expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeTruthy();
    expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeFalsy();
  });

  it('No se debe autenticar el usuario cuando las credenciales no coinciden', function() {
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    email.sendKeys('jaime@gmail.com');
    password.sendKeys('invalid');
    element(by.css('.btn')).click().then(function () {
        expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeTruthy();
        expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeFalsy();
    });
  });


  it('Se debe loguear al usuario cuando las credenciales son correctas', function() {
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    email.sendKeys('jaime@gmail.com');
    password.sendKeys('1234');
    element(by.css('.btn')).click().then(function () {
        expect($('[ng-show=isLoggedIn]').isDisplayed()).toBeTruthy();
        expect($('[ng-hide=isLoggedIn]').isDisplayed()).toBeFalsy();
    });
  });

});
