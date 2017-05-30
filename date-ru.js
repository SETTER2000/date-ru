/**
 * Created by PhpStorm.
 * Company: Appalachi Ltd.
 * Developer: SETTER
 * Suite: appalachi.ru
 * Email: info@appalachi.ru
 * Date: 30.05.2017
 * Time: 23:15
 */
var DateRu = function (date, tpl) {
    this.tpl = tpl;
    this.f  = {
        y: date.getYear() + 1900,
        m: date.getMonth() + 1,
        d: date.getDate(),
        H: date.getHours(),
        M: date.getMinutes(),
        S: date.getSeconds()
    };
};

DateRu.prototype.localFormat = function () {
    for (var k in this.f) this.tpl = this.tpl.replace('%' + k, this.f[k] < 10 ? "0" + this.f[k] : this.f[k]);
    return this.tpl;
};

module.exports = DateRu;