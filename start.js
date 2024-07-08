const express = require("express");
const app = express();
const port = 3000;
const phonesRoute = require("./src/routes/phones");

app.use(express.json());

app.use("/", phonesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
