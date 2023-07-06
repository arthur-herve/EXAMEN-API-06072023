const express = require("express");
const router = express.Router();
const htmlExamenPage = require("../views/examen-model");
const { error } = require("console");

const examenGET = (req, res) => {
  try {
    const unNombre = 2;
    if (unNombre === 2) {
      throw TypeError.name;
    }
    res.status(200).send(htmlExamenPage);
  } catch (error) {
    res.status(400).send('unNombre !== 2');
  }
  
};

module.exports = examenGET;
