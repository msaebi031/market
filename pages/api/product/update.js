import { UpdateProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { name, taraz, dic, price, tab, value, id } = req.body;
  await UpdateProduct({ id, name, taraz, dic, price, tab, value });

  res.status(200).json({ result: true });
}
