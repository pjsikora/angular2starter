var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var MainComponent_1 = require('./components/MainComponent');
angular2_1.bootstrap(MainComponent_1.MainComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS
]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
