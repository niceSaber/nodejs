var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.21.170',
  user     : 'root',
  password : '123',
  database : 'b2bexv32'
});
 
connection.connect();
 
connection.query('SELECT * from par_party limit 10', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results);
});