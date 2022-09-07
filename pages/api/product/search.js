import { SearchProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { name } = req.body;
  console.log(name);
  const data = await SearchProduct({ name });
  res.status(200).json({ result: true, data });
}
