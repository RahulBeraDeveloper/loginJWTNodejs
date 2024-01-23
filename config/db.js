const mysql = require('mysql');

var connection = mysql.createConnection({

	host: "192.168.1.250",
	user: "user_root",
	password: "Infym@x2021",
	database: "rahul"
});

connection.connect(function (error) {
	if (!!error) {
		console.log('Database Connection Error');
	} else {
		console.log('Database Connected');
	}
});


module.exports = connection;
