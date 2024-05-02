import fs from 'fs';
import mysql from "mysql";
import connection from './db.config.js';

const sqlQueries = fs.readFileSync('database_setup.sql', 'utf8');
const queriesArray = sqlQueries.split(';');

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL.');

    // Execute each query in the array
    queriesArray.forEach((query) => {
        if (query.trim() !== '') {
            connection.query(query, (err, result) => {
                if (err) throw err;
                console.log('Query executed successfully:', query);
            });
        }
    });

    // Close the connection
    connection.end((err) => {
        if (err) throw err;
        console.log('MySQL connection closed.');
    });
});