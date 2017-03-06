/**
 * Created by natrium43 on 3/1/2017.
 */
var fs = require('fs');
var obj;
var content = fs.readFile('../public/books.json', handleBooks);
function handleBooks(err, data) {
    if(err) throw err
    obj = JSON.parse(data);
    console.log(obj.books[54]);
    var record = {}
    if(obj.hasOwnProperty('books')) {
        var books = obj.books;
        for(var book in books) {
            var record = books[book];
            connection.query('INSERT INTO books SET ? ', record, function(err, res) {
                if(err) throw err;
                console.log('Record inserted: '+ res.insertId);
            })
            //console.log(book['book_id']);
        }
    }
}