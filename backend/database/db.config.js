
import mysql from 'mysql'
// var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'dbms202211043.mysql.database.azure.com',
  user     : 'LakshayDhiman',
  password : 'L@kshay.07',
  database : 'accident_response_system',
  ssl : true
});
 



export default connection

