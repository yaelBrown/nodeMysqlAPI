const express = require('express')
const app = express()
const path = require('path');
const port = 3000


const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "codeup"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))