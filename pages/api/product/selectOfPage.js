import {
  SelectProductOfPage,
  ProductCount,
} from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { offset, limit } = req.body;
  console.log(offset, limit);
  const data = await SelectProductOfPage({ offset, limit });
  const count = await ProductCount();
  res.status(200).json({ result: true, count, data });
}
