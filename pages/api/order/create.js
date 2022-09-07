import { CreateOrder } from "../../../server/controllers/order";

export default async function handler(req, res) {
  const { data } = req.body;
  await CreateOrder({ data });

  res.status(200).json({ result: true });
}
