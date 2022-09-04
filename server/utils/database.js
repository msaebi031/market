const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("market_db", "root", "45573691m", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
