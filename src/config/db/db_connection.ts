/* eslint-disable @typescript-eslint/no-var-requires */
import mysql from "mysql";
require('dotenv').config({path: '../../../.env'});

const db_connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE  
})

db_connection.connect(function(err){
    if (err) throw err
    console.log('Connected succesfully!')
})

module.exports.db_connection =  db_connection;
