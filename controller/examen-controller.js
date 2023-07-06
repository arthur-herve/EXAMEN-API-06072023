const express = require("express");
const router = express.Router();
const htmlExamenPage = require('../views/examen-model')


const examenGET = (req, res) => {
    res.status(200).send(htmlExamenPage);
}

module.exports = examenGET;