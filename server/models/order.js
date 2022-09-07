const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Order = sequelize.define("order", {
  //? Model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(30),
    allowNull: false,
    defaultValue: "در دست انجام",
  },
});

module.exports = Order;
