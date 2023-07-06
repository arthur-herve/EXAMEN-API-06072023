const express = require("express");
const router = express.Router();
const examenController = require('../controller/examen-controller')

router.get("/examen/", examenController);

module.exports = router;
