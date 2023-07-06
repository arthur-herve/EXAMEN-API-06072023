const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const examenRoute = require("./routes/examen");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(examenRoute);

app.listen(5500);