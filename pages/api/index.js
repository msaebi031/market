export default async function handler(req, res) {
  console.log(req.body, "ok");
  res.status(200).json({ name: "John Doe" });
}
