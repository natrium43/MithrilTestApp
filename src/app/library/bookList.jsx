bookList = {

    books: m.prop([]),
    load: function (process) {
        console.log("Loading books..");
        m.request({
            method: 'GET',
            url: "http://127.0.0.1:3000/books/books",
            withCredentials:true,
        })
            .then(this.books).then(process);
    },

    searchKey: m.prop(" "),
    numResults: m.prop(0),
    cartBooks: m.prop([]),
    cartNumber: m.prop(0),
    selectedBook: m.prop({}),

    setSearchKey: function(value) {
        console.log("Setting search key");
        this.searchKey(value);
    },
    setNumResults: function(value) {
        this.numResults (value);
    },

    //new
    searchHandle:function (event) {
        // ctrl.showCarousel(false);
        m.request({
            method: "GET",
            url: "http://127.0.0.1:3000/books/findBook/:id",
            data: {id: bookList.searchKey()},
            withCredentials:true,
        })
            .then(function(result){
                console.log("Setting result length: "+result.length);
                bookList.setNumResults(result.length);
                console.log("Searched for "+ bookList.searchKey() +" and found: "+result);
                bookViewModel.books(result);
                m.route('/search');
            });

    },

    addCartHandle:function(task,e) {
        event.preventDefault();
        console.log("Add to cart called" +task['book_id'] );
        // bookList.cartBooks().push(task['book_id']);
        var numOfBooks = bookList.cartNumber() + 1;


        m.request({
            method: "POST",
            url: "http://127.0.0.1:3000/books/addToCart",
            data:{
                "book_id":task['book_id']
            },
            withCredentials:true,
            extract: function coerceToJson(xhr) {
                var isJson = "\"[{".indexOf(xhr.responseText.charAt(0)) !== -1 // fragile but fast
                var resMsg = isJson ? xhr.responseText : JSON.stringify(xhr.responseText)
                var resStatus = isJson ? xhr.status : JSON.stringify(xhr.status)
                var result = {
                    "status": resStatus,
                    "msg": resMsg
                }
                return JSON.stringify(result);
            },
            unwrapSuccess: function (response) {
                return response;
            },
            unwrapError: function (response) {
                console.log("Unwrap fail: Add to cart failed! " + response);
                bookList.cartBooks({});
                return typeof response === "object" && "error" in response ? response.error : response
            }
        }).then(function(result) {
            console.log("Added to cart : "+JSON.parse(result.msg));
            bookList.cartNumber(numOfBooks);
        });

    },

    viewDetailsHandle:function(book,e) {
        e.preventDefault();
        console.log("View details called "+ book['book_id']);
        m.request({
            method: "GET",
            url: "http://127.0.0.1:3000/books/findBookById/:id",
            data: {id: book['book_id']},
            withCredentials:true,
            extract: function coerceToJson(xhr) {
                var isJson = "\"[{".indexOf(xhr.responseText.charAt(0)) !== -1 // fragile but fast
                var resMsg = isJson ? xhr.responseText : JSON.stringify(xhr.responseText)
                var resStatus = isJson ? xhr.status : JSON.stringify(xhr.status)
                var result = {
                    "status": resStatus,
                    "msg": resMsg
                }
                return JSON.stringify(result);
            },
            unwrapSuccess: function (response) {
                return response;
            },
            //Handles login error
            unwrapError: function (response) {
                console.log("Unwrap fail: " + response);
                return typeof response === "object" && "error" in response ? response.error : response
            }
        }).then(function(result) {
            console.log("Selected book: "+JSON.parse(result.msg));
            bookList.selectedBook(JSON.parse(result.msg));
            console.log("SelectedBook: "+bookList.selectedBook());
            m.route('/bookDetails');
        });


    },

    viewCartHandle:function(e) {
        e.preventDefault();
        console.log("View cart called ");

        //get All cart items. add it to the cartitems
        m.request({
            method: "GET",
            url: "http://127.0.0.1:3000/books/cartItems",
            withCredentials:true,
            extract: function coerceToJson(xhr) {
                var isJson = "\"[{".indexOf(xhr.responseText.charAt(0)) !== -1 // fragile but fast
                var resMsg = isJson ? xhr.responseText : JSON.stringify(xhr.responseText)
                var resStatus = isJson ? xhr.status : JSON.stringify(xhr.status)
                var result = {
                    "status": resStatus,
                    "msg": resMsg
                }
                return JSON.stringify(result);
            },
            unwrapSuccess: function (response) {
                return response;
            },
            unwrapError: function (response) {
                console.log("Unwrap fail: " + response);
                bookList.cartBooks({});
                return typeof response === "object" && "error" in response ? response.error : response
            }
        }).then(function(result) {
            console.log("Cart Items: "+JSON.parse(result.msg));
            bookList.cartBooks(JSON.parse(result.msg));
            console.log("Cart Books: "+bookList.cartBooks());
            m.route('/cart');
        });

    }

};

//view-model
bookViewModel = {
    books: m.prop([]),

    DEFAULT_IMG: "assets/no_cover.png",
    sampleBooks: function () {
        var sample = _.sample(bookList.books(), 3);
        bookViewModel.books(sample);
    }
}

exports.BookList = bookList;
exports.BookViewModel = bookViewModel;