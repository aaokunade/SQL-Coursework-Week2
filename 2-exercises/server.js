const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "aaokunade",
    password: "alamu3809",
    database: "cyf_ecommerce",
});

const custNamAddSelectQuery = `SELECT name, address FROM customers`

app.get('/customernames', (req, res) =>
pool.query(custNamAddSelectQuery)
    .then(result => res.send(result.rows))
    .catch(error => res.status(500).send(error))
);



app.listen(3000, () => console.log("Listening on port 3000."));