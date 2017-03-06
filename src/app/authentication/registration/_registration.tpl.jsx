<div className="panel-body">
    <div className="row">
        <div className="col-lg-12">
            <form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style={{display: 'block'}}>
                <div className="form-group">
                    <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Email Address" defaultValue />
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>