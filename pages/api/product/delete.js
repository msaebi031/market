import { DeleteProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  await DeleteProduct({ id: 1 });

  res.status(200).json({ name: "John Doe" });
}
