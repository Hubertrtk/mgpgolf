const ENUMS = require("./enums");

const REQUIRED_FIELDS = [
  ENUMS.REQUEST_FIELDS.AREA_CODE,
  ENUMS.REQUEST_FIELDS.PHONE_NUMBER,
  ENUMS.REQUEST_FIELDS.CAR_NAME,
  ENUMS.REQUEST_FIELDS.FULL_MOBILE,
  ENUMS.REQUEST_FIELDS.MARKETING_CHECKED,
];

const validateData = (body) => {
  let errors = [];
  for (const field of REQUIRED_FIELDS) {
    const data = body[field];
    if (!data) {
      errors.push(`Field ${field} is required`);
      continue;
    }
    switch (field) {
      case ENUMS.REQUEST_FIELDS.AREA_CODE:
        break;
      case ENUMS.REQUEST_FIELDS.PHONE_NUMBER:
        break;
      case ENUMS.REQUEST_FIELDS.CAR_NAME:
        break;
      case ENUMS.REQUEST_FIELDS.FULL_MOBILE:
        break;
      case ENUMS.REQUEST_FIELDS.MARKETING_CHECKED:
        break;
    }
  }
  return errors;
};

const requestValidation = (req, res, next) => {
  for (const field of REQUIRED_FIELDS) {
    if (!req.body[field]) {
      return res.status(409).json({ error: `Field ${field} is required` });
    }
  }

  console.log("req.body");
  console.log(req.body);

  next();
};

module.exports = { requestValidation };
