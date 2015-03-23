var db = require('Database');
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.GetPhrase('hello') + ", " + who.name);
};
module.exports = User;