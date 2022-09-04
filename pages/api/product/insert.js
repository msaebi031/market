import { CreateProduct } from "../../../server/controllers/product";

export default async function handler(req, res) {
  await CreateProduct({
    name: "تست",
    taraz: "kg",
    dic: "test dic",
    price: 1000,
    tab: "frut",
    value: 0,
  });

  res.status(200).json({ name: "John Doe" });
}
