var express = require("express");
var router = express.Router();
var phoneService = require("../services/phones.service");

router.post("/", phoneService.createPhone, function (req, res, next) {
  phoneService.createPhone();
  res.json({ user: "nana" });
});

module.exports = router;
