var db = require('Database');
var log = require('logger')(module);

db.Connect();
var User = require('./User');

function Run() {
    var timon = new User("Дмитрий");
    timon.hello(timon);
    log(db.GetPhrase('Run successful'));
}

if (module.parent) {
    exports.Run = Run;
} else {
    Run();
}