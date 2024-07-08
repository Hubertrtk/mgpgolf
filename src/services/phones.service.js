const client = require("../cosmos-sdk/db");
const config = require("../cosmos-sdk/config");
const container = client
  .database(config.databaseDefName)
  .container(config.phonesContainer);

const bodyFields = {
  area_code: "",
  phone_number: "",
  car_name: "",
  full_mobile: "",
  marketing_checked: "",
};

async function createPhone(req, res, next) {
  if (!req.body.phoneNumber) {
    res.status(409).json({ error: "wrong data" });
    return;
  }
  try {
    console.log("hello");
    res.status(201).json({ setName: "setName" });
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = { createPhone };
