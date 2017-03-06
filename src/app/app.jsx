var home        = require('home/home');
var about       = require('about/about');
var login       = require('login/login');
var layout      = require('layout/layout');
var library     = require('library/library');
var search      = require('library/search');
var cart        = require('library/cart');
var bookDetails = require('library/bookDetails');

m.route.mode = 'hash';
m.route(document.body, '/', {
  '/':library,
  '/login' : login,
  '/about': layout(about),
  '/library':library,
  '/search':search,
  '/cart':cart,
  '/bookDetails':bookDetails

});
