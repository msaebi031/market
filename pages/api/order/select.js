import { SelectAllOrder, SelectOrder } from "../../../server/controllers/order";

export default async function handler(req, res) {
  const { id } = req.body;
  if (id) {
    const data = await SelectOrder({ id });
    res.status(200).json({ result: true, data });
  } else {
    const data = await SelectAllOrder();
    res.status(200).json({ result: true, data });
  }
}
