const Order = require("../models/order");

const CreateOrder = async ({ data }) => {
  await Order.create({ data });
};

const SelectAllOrder = async () => {
  return await Order.findAll();
};

const SelectOrder = async ({ id }) => {
  return await Order.findOne({ where: { id } });
};

const SelectOrderOfPage = async ({ offset, limit }) => {
  const orders = await Order.findAll({ offset, limit });
  return orders;
};

module.exports = {
  CreateOrder,
  SelectAllOrder,
  SelectOrder,
  SelectOrderOfPage,
};
