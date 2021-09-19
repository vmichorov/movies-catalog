const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require("./config/index");
const databaseConfig = require("./config/databaseConfig");
const routerConfig = require("./config/routerConfig");

const storageMiddleware = require("./middlewares/storageMiddleware");

startApp();

async function startApp() {
  const app = express();
  app.use(cors());
  await databaseConfig(app);
  app.use(bodyParser.json());
  app.use(storageMiddleware());
  routerConfig(app);

  app.listen(PORT, () => {
    console.log(`Application started on: http://localhost:${PORT}`);
  });
}
