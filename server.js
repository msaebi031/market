// server.js
const next = require("next");
const express = require("express");
const multer = require("multer");
const server = express();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const port = 3000;

const handle = app.getRequestHandler();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    console.log(req.file);
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

var upload = multer({ storage: storage });
/******************************************************************/
const sequelize = require("./server/utils/database");
const Product = require("./server/models/product");

/******************************************************************/
app.prepare().then(async () => {
  sequelize.sync({ Product }).catch();

  server.post("/upload", upload.single("uploaded_file"));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
