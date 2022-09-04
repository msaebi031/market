import {
  SelectAllProduct,
  SelectProduct,
} from "../../../server/controllers/product";

export default async function handler(req, res) {
  const { id } = req.body;
  if (id) {
    const data = await SelectProduct({ id });
    res.status(200).json({ result: true, data });
  } else {
    const data = await SelectAllProduct();
    res.status(200).json({ result: true, data });
  }
}
