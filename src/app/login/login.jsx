var u = require('authentication/u');
var tabs = require('authentication/tabs/tabs');
var loginPage = require('authentication/login/login');
var registration = require('authentication/registration/registration');

var login = {
    controller: function() {
        this.showRegistration = function() {
        }
        this.tabs = u.init(tabs({
            label: 'Login',
            module: loginPage
        }, {
            label: 'Registration',
            module: registration
        }));
    },

    view: function(ctrl) {
         return INCLUDE('login/login.tpl');
    }
}
module.exports = login