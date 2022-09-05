import { DeleteProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { id } = req.body;
  await DeleteProduct({ id });

  res.status(200).json({ result: true });
}
