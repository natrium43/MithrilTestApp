/**
 * Created by natrium43 on 2/28/2017.
 */

var express         = require('express');
var favicon         = require('express-favicon');
var mysql           = require('mysql');
var path            = require('path');
var config          = require('./config');
var app             = express();
var redis           = require('redis');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var redisStore      = require('connect-redis')(session);


app.set('port', process.env.PORT || config.node_port);

//setting a directory for the views
// app.set('views', 'build/public');//CHECK THIS!
//app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname,'./build/public'))); //CHECK THIS!

//Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,X-Prototype-Version,Content-Type,Cache-Control,Pragma,Origin");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
    res.header("Access-Control-Expose-Headers","Access-Control-Allow-Origin");
    next();
});

//Creates Redis client
var client = redis.createClient(config.redis_url);
client.on("error", function(err) {
    console.log("Error while connecting to redis client: "+err);
    throw err;
})
//Code for creating database pool
var connection = mysql.createPool({
    connectionLimit:100,
    host:config.db_host,
    user:config.db_user,
    password:config.db_password,
    database:config.db_database
})


//Code to connect to hosted redis
// app.use(session({
//     secret: 'bookstore',
//     store: new redisStore({ host: config.redis_host, port: config.redis_port, client: client,ttl :  config.redis_ttl}),
//     saveUninitialized: false,
//     resave: false
// }));
app.use(favicon());
// app.use(cookieParser('abc'));
app.use(session({
    store: new redisStore({
        host: config.redis_host,
        port: config.redis_port,
        client: client,
        ttl :  config.redis_ttl
    }),
    secret:'abc',
    key:'express.sid',
    // cookie : {
    //     maxAge:3156000000,
    //     secure:false,
    //     httpOnly:false
    // },
    saveUninitialized: false,
    resave: false
}))

app.use('/', require('./routes/authenticationRoute')(connection));
app.use('/books', require('./routes/bookRoute')(connection));

var server = app.listen(app.get('port'), function() {
    console.log("Server listening on port: "+ app.get('port'));
})

