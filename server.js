const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 3000

// Connect db
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "codeup",
  database: 'employees'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());






















app.listen(port, () => console.log(`Example app listening on port ${port}!`))