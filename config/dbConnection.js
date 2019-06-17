var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'seu usuario',
		password : 'sua senha',
		database : 'seu banco'
	});
}

module.exports = function () {
	return connMySQL;
}