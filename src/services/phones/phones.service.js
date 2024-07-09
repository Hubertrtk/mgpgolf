const client = require("../../cosmos-sdk/db");
const config = require("../../cosmos-sdk/config");
const container = client
  .database(config.databaseDefName)
  .container(config.phonesContainer);

async function getPhone(phoneNumber) {
  const { resources } = await container.items
    .query({
      query: "SELECT * from c WHERE c.phone_number = @phoneNumber",
      parameters: [{ name: "@phoneNumber", value: phoneNumber }],
    })
    .fetchAll();

  return resources;
}

async function createPhone(req, res, next) {
  const data = req.body;
  try {
    const existingPhoneNumber = await getPhone(data.phone_number);
    if (existingPhoneNumber.length > 0) {
      return res.status(400).json({ message: "Phone number already exists" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
  try {
    await container.items.create(req.body);
    res.status(201).json({ succes: true });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { createPhone };
