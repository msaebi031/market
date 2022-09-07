const Product = require("../models/product");
const { Op } = require("sequelize");

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

const SelectProductOfPage = async ({ offset, limit }) => {
  const products = await Product.findAll({ offset, limit });
  return products;
};

const ProductCount = async () => {
  const productCount = await Product.count();
  return productCount;
};

const UpdateProduct = async ({ id, name, taraz, dic, price, tab, value }) => {
  const product = await Product.findOne({ where: { id } });
  product.name = name;
  product.taraz = taraz;
  product.dic = dic;
  product.price;
  product.tab;
  product.value;
  await product.save();
};

const SearchProduct = async ({ name }) => {
  return await Product.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
};

module.exports = {
  CreateProduct,
  DeleteProduct,
  SelectProduct,
  SelectAllProduct,
  SelectProductOfPage,
  ProductCount,
  UpdateProduct,
  SearchProduct,
};
