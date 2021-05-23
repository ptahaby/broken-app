const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATA_BASE: process.env.DATA_BASE,
  USER_NAME_DB: process.env.USER_NAME_DB,
  PORT_DB: process.env.PORT_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
};
