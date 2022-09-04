const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Product = sequelize.define("Product", {
  //? Model attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  taraz: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  dic: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  tab: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
  },
});

module.exports = Product;
