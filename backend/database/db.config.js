
import mysql from 'mysql'
// var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'L@kshay.07',
  database : 'accident_response_system'
});
 



export default connection

