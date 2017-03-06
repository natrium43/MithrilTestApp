/**
 * Created by natrium43 on 2/28/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function (connection) {

    var router = express.Router();
    var connectedDb;
    //var session = session;
    connection.getConnection(function(error, connected) {
        if(!!error) {
            console.log("Error while connecting to the database");
        } else {
            connectedDb = connected;
            console.log("Connected to the database");
        }
    })

    //router.use(session);
    /**
     * Retrieves all books in the database
     */
    router.get('/books', function(req, res) {
        console.log("Received request to view all books"+req.sessionID);
        connection.query('SELECT * FROM books', function(err, record) {
            if(err)  {
                res.status(500).send({error : err});
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(record);
            }
        })
    })

    /**
     * Searches for a book in the database by keyword
     */
    router.get('/findBook/:key', function(req,res) {
        var searchKey = req.params.key;
        console.log("Received request to find a book: " + searchKey);

        connectedDb.query('SELECT * FROM books WHERE title  LIKE ' +connection.escape('%'+searchKey+'%')  +
                                                  'OR tags LIKE ' +connection.escape('%'+searchKey+'%') +
                                                  'OR `author_fl` LIKE '+connection.escape('%'+ searchKey+'%')+
                                                  'OR `author_lf` LIKE '+connection.escape('%'+searchKey+'%'), function(err, record) {

            if(err) {
                console.log("Could not  search!")
                res.status(500).send({error: err});
            } else {
                res.setHeader('Content-Type','application/json');
                res.status(200).json(record);
            }

        } )
    });
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: false }));

    /**
     * Adds books to redis
     */
    router.post('/addToCart', function(req, res) {
        var searchId = req.body.book_id;
        console.log("Server received add to cart request: "+ searchId + "Session ID: "+req.sessionID);
            connectedDb.query("SELECT * FROM books WHERE book_id='"+searchId+"'" , function(err, record) {
                if(err) {
                    console.log("Could not execute the query to find a book by id in addToCart");
                    res.status(500).send({error: err});
                } else {
                    console.log("Session cart" +JSON.stringify(req.session));
                    if(req.session.cart) {
                        console.log("Already present" );
                        req.session.cart.push(record[0]);
                    }else {
                        console.log("first present");
                        req.session.cart = [];
                        req.session.cart.push(record[0]);
                    }
                    return (res.status(200).json({"msg":"Successfully added to cart"}));
                }
            })
    })

    /**
     * Searches for a book in the database by book_id
     */
    router.get('/findBookById/:id', function(req,res) {
        var searchId = req.params.id;
        console.log("Received request to find a book by id: "+ searchId);

        connectedDb.query("SELECT * FROM books WHERE book_id='"+searchId+"'" , function(err, record) {
            if(err) {
                console.log("Could not execute the query to find a book by id")
                res.status(500).send({error: err});
            } else {
                return (record.length==0? res.status(204).json(record) : res.status(200).json(record[0]));
            }
        })
    })

    /**
     * Checks if a cart item is already present in the cart (Redis)
     */
    router.get('/cartItem/:id', function(req,res) {
        var bookId = req.params.id;
        var hasMatch = false;
        console.log("Received a request to find a cart item by id: "+bookId);
        if(req.session.cart) {
            var books = req.session.cart;
            for(var index = 0;index<req.session.cart.length;++index) {
                var book = books[index];
                if(book.book_id == bookId) {
                    hasMatch = true;
                    break;
                }
            }
            return (hasMatch?res.status(200).json({"msg":"Exists in cart"}):res.status(404).json({"msg":"Not in cart"}));
        }
    })

    /**
     * Gets all the cart Items. (Redis store)
     */
    router.get('/cartItems', function(req,res) {
        console.log("Received request to view all cart Items"+  JSON.stringify(req.session.cart));
        if(req.session.cart) {
            var books = req.session.cart;
            return res.status(200).json(books);
        } else {
            return res.status(404).json({"msg":"No items in cart"});

        }

    })
    return router;
};
