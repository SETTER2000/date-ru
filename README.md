# date-ru
A small module for converting a date and presenting it in a format customary for Russia

How to use?

Install the module:

npm install date-ru

Using:

var DateRu = require('./date-ru');

var date = new Date();

var tpl = "%d.%m.%y %H:%M:%S";

var dateRu = new DateRu(date, tpl);

//The current date

console.log(dateRu.localFormat());


