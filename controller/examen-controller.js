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
    res.status(400).send("unNombre !== 2");
  }
};

const examenPOST = (req, res) => {
  try {
    const body = req.body;
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { examenGET, examenPOST };
