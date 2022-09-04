// server.js
const next = require("next");
const express = require("express");
const server = express();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const port = 3000;

const handle = app.getRequestHandler();
/******************************************************************/
const sequelize = require("./server/utils/database");
const Product = require("./server/models/product");
/******************************************************************/
app.prepare().then(async () => {
  sequelize.sync({ Product }).catch();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
// "dev": "nodemon server.js",
// "build": "next build",
// "start": "NODE_ENV=production node server.js"
