var express = require("express");
var router = express.Router();
var phoneService = require("../services/phones/phones.service");
const { requestValidation } = require("../services/phones/validation");

router.post("/", requestValidation, phoneService.createPhone);

module.exports = router;
