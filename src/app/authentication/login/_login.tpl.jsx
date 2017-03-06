<div className="panel-body">
    <div className="row">
        <div className="col-lg-12">
            <form id="login-form">
                {ctrl.showLoginError() ?  <div class="alert alert-info">
                        <strong>Error!</strong> Wrong username,password combination!
                    </div> : null}
                <div className="form-group">
                    <input onchange={m.withAttr("value", ctrl.userName)} value={ctrl.userName()} type="text" id="username" tabIndex={1} className="form-control" placeholder="Username"  />
                </div>
                <div className="form-group">
                    <input onchange={m.withAttr("value", ctrl.userPwd)} value={ctrl.userPwd()} type="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                </div>
                <div className="form-group text-center">
                    <input type="checkbox" tabIndex={3} className name="remember" id="remember" />
                    <label htmlFor="remember"> Remember Me</label>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input onclick={ctrl.loginHandle.bind(ctrl, ctrl.userName,ctrl.userPwd)}type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <a tabIndex={5} className="forgot-password">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>