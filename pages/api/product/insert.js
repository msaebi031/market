import { CreateProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { name, taraz, dic, price, tab, value } = req.body;

  await CreateProduct({ name, taraz, dic, price, tab, value });

  res.status(200).json({ result: true });
}
