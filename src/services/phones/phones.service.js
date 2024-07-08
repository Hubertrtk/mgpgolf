// const client = require("../cosmos-sdk/db");
// const config = require("../cosmos-sdk/config");
// const container = client
//   .database(config.databaseDefName)
//   .container(config.phonesContainer);

async function createPhone(req, res, next) {
  try {
    console.log("hello");
    res.status(201).json({ succes: true });
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = { createPhone };
