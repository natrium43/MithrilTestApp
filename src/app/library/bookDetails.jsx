var Model = require('library/bookList')

exports.controller = function() {

}
exports.view = function(ctrl) {
    console.log("Model: "+Model.BookList.selectedBook()['title']);
    return INCLUDE('library/bookDetails.tpl');
}