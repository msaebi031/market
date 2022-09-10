// server.js
const next = require("next");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const server = express();

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const port = 3000;

const handle = app.getRequestHandler();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).any();
/******************************************************************/
const sequelize = require("./server/utils/database");
const Product = require("./server/models/product");
const Order = require("./server/models/order");
const { CreatePay, VerifyPay } = require("./server/middleware/zarinpal");

/******************************************************************/
app.prepare().then(async () => {
  sequelize.sync({ Product, Order }).catch();

  server.post("/upload", (req, res) => {
    upload(req, res, function (err) {
      fs.renameSync(
        `uploads/${req.files[0].originalname}`,
        `uploads/${req.body.name}.png`
      );
    });
  });

  server.get("/PaymentRequest", function (req, res) {
    CreatePay(req, res);
  });

  server.get("/PaymentVerification/:Amount/:Id", function (req, res) {
    VerifyPay(req, res);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
