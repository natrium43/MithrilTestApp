var u = require('authentication/u');
var login = exports;

login.controller = function() {

    this.userName = m.prop("");
    this.userPwd  = m.prop("");
    this.showLoginError = m.prop("");
    this.showLoginError(false);

    var contr = this;

    this.clearLoginForm = function() {
        this.userName(" ");
        this.userPwd(" ");
    }

    this.loginHandle = function(userName, userPwd, e) {
        e.preventDefault();

        var tempUserName = userName();
        var tempUserPwd  = userPwd();
        //this.clearLoginForm();

        if(userName() && userPwd()) {
            m.request({
                method: "POST",
                url: "http://localhost:3000/login",
                data: {
                    "user_name": tempUserName,
                    "user_pwd": tempUserPwd
                },
                withCredentials:true,
                extract: function coerceToJson(xhr) {
                    var isJson = "\"[{".indexOf(xhr.responseText.charAt(0)) !== -1 // fragile but fast
                    var resMsg =  isJson ? xhr.responseText : JSON.stringify(xhr.responseText)
                    var resStatus =  isJson ? xhr.status : JSON.stringify(xhr.status)
                    var result = {
                        "status":resStatus,
                        "msg":resMsg
                    }
                    return JSON.stringify(result);
                },
                unwrapSuccess: function (response) {return response; },
                //Handles login error
                unwrapError: function (response) {
                    console.log("Unwrap fail: "+ response);
                    contr.showLoginError(true);
                    return typeof response === "object" && "error" in response ? response.error : response
                }
            })
            //Authenticated, show the homepage
            .then(function(result){
                m.route('/library');
            });

        }
    }
}
login.view = function(ctrl) {
    return INCLUDE('authentication/login/login.tpl');
}