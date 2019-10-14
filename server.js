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
  user: "nodejs",
  password: "Codeup!1",
  database: 'employees'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected!");
  }
});

// Setup middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

//Setup routes
// Get all employees
app.get('/api/', (req, res) => {
  let sql = 'SELECT * FROM empl';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.json(results);
  });
});

// Post using route parameters
app.post('/api/:name/:age', (req, res) => {
  let addEmpl = {name: req.params.name, age: req.params.age};
  let sql = `INSERT INTO empl SET ?`;
  let query = db.query(sql, addEmpl, (err, results) => {
    if(err) throw err;
    res.send(`${addEmpl.name} was added successfully!`);
  });
});

// Post using default route and json
app.post('/api/', (req, res) => {
  let addEmpl = {name: req.body.name, age: req.body.age};
  let sql = `INSERT INTO empl SET ?`;
  let query = db.query(sql, addEmpl, (err, results) => {
    if(err) throw err;
    res.send(`${addEmpl.name} was added successfully!`);
  });
});

app.put('/api/:id', (req, res) => {
  let updateEmpl = {name: req.body.name, age: req.body.age};
})
















app.listen(port, () => console.log(`Example app listening on port ${port}!`))