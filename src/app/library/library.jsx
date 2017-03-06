var Library = {};

//model
// Library.BookList = {
//     books: m.prop([]),
//     load: function (process) {
//         console.log("Loading books..");
//         m.request({
//             method: 'GET',
//             url: "http://localhost:3000/books/books"
//         })
//             .then(Library.BookList.books).then(process);
//     },
//
//     searchKey: "",
//     numResults: "",
//
//     setSearchKey: function(value) {
//        Library.BookList.searchKey = value;
//     },
//     setNumResults: function(value) {
//         Library.BookList.numResults = value;
//     },
//
//
//     //new
//     searchHandle:function (event) {
//         // ctrl.showCarousel(false);
//         m.request({
//             method: "GET",
//             url: "http://localhost:3000/books/findBook/:id",
//             data: {id: searchKey}
//         })
//             .then(function(result){
//                 Library.BookList.numResults = result.length;
//                 console.log("Searched for "+ Library.BookList.searchKey +" and found: "+result);
//                 Library.BookViewModel.books(result);
//             });
//
//     }
//
// };
// //view-model
// Library.BookViewModel = {
//     books: m.prop([]),
//     DEFAULT_IMG: "assets/no_cover.png",
//     sampleBooks: function () {
//         var sample = _.sample(Library.BookList.books(), 3);
//         Library.BookViewModel.books(sample);
//     }
// }

var Model = require('library/bookList')
exports.controller = function () {

    var ctrl = this;
    //Img src should be reassigned if the src is invalid!
    this.onError = function (book, index) {
        console.log("Inside error!" + book.title + " Index: " + index);
        //Library.BookViewModel.books()[index].cover = "no_cover.png";
    }
    var c = {

        refreshBooks: function () {
            Model.BookList.load(Model.BookViewModel.sampleBooks);
        }
    }

    c.refreshBooks();
    //ctrl.showCarousel= m.prop(true);
    //ctrl.numResults = m.prop(0);
    //ctrl.searchKey = m.prop('');
    ctrl.searchKeyUpdate = function(event) {
        // ctrl.searchKey(event.target.value);
        Model.BookList.setSearchKey(event.target.value);
    }
    // ctrl.searchHandle = function (event) {
    //     ctrl.showCarousel(false);
    //     m.request({
    //         method: "GET",
    //         url: "http://localhost:3000/books/findBook/:id",
    //         data: {id: ctrl.searchKey()}
    //     })
    //         .then(function(result){
    //             ctrl.numResults(result.length);
    //             console.log("Searched for "+ ctrl.searchKey() +" and found: "+result);
    //             Library.BookViewModel.books(result);
    //         });

    //}

}
exports.view = function (ctrl) {

    return INCLUDE('library/library.tpl');
}