const express = require("express");
const router = express.Router();
const examenController = require('../controller/examen-controller')

router.get("/examen/", examenController.examenGET);

router.post("/examen/", examenController.examenPOST);

module.exports = router;
