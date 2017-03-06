/**
 * Created by natrium43 on 2/28/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function (connection) {
    var connectedDb;
   // var session = session;
    var router = express.Router();
    connection.getConnection(function(error, connected) {
        if(!!error) {
            console.log("Error while connecting to the database");
        } else {
            connectedDb = connected;
            console.log("Connected to the database in authentication "+connectedDb);
        }
    })

    /**
     * API to authenticate login with credentials against DB.
     */
    //router.use(session);
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: false }));
    router.post('/login', function(req, res) {
        console.log("Session while login: "+req.sessionID);
        console.log("Server received post request: "+ req.body.user_name + " and pwd: "+ req.body.user_pwd);
        connectedDb.query("SELECT * FROM user WHERE user_name='"+req.body.user_name+"' AND `user_pwd`='"+req.body.user_pwd+"'",

            function(err, record) {
                if(err) {
                console.log("Could not locate the user!")
                res.status(500).json({"error":err.msg});
            } else {
                if(record.length == 0) {
                    res.status(401).json({"msg":"Wrong username/password"});
                }
                else {
                    var msg = {
                        "msg":"Successful"
                    }
                    console.log("User login successful!"+JSON.stringify(req.session));
                    req.session.user = record;
                    res.status(200).json({"msg":"Successful login"});
                }

            }

        })

    })

    /**
     * API to logout.
     */
    router.get('/logout', function(req, res) {
        console.log("Session while logout: "+req.sessionID);
        console.log("Server received request to logout!");
        if(req.session.user) {
            console.log("Session existed and will be closed!");
            req.session.destroy(function () {
                console.log("Session destroyed!");
                res.setHeader('Content-Type','application/json');
                res.status(200).json({msg:"Successfully logged out!"});
            })
        } else {
            res.setHeader('Content-Type','application/json');
            res.status(200).json({msg:"No Session to logout from"});
        }

    })


    router.post('/register', function(req, res) {

    })
    return router;
};
