const Product = require("../models/product");

const CreateProduct = async ({ name, taraz, dic, price, tab, value }) => {
  await Product.create({ name, taraz, dic, price, tab, value });
};

const DeleteProduct = async ({ id }) => {
  await Product.destroy({ where: { id } });
};

const SelectAllProduct = async () => {
  return await Product.findAll();
};

const SelectProduct = async ({ id }) => {
  return await Product.findOne({ where: { id } });
};

module.exports = {
  CreateProduct,
  DeleteProduct,
  SelectProduct,
  SelectAllProduct,
};
