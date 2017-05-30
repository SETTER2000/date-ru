var DateRu = require('./date-ru');

var date = new Date();
var tpl = "%d.%m.%y %H:%M:%S";
var dateRu = new DateRu(date, tpl);

// Текущая дата
console.log(dateRu.localFormat());
