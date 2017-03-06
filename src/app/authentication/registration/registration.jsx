var u = require('authentication/u');
var registration = exports;
registration.controller = function() {

}
registration.view = function(ctrl) {
    return INCLUDE('authentication/registration/registration.tpl');
}