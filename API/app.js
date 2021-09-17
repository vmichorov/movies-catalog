const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/index");
const databaseConfig = require("./config/databaseConfig");
const routerConfig = require("./config/routerConfig");

const storageMiddleware = require("./middlewares/storageMiddleware");

startApp();

async function startApp() {
  const app = express();
  await databaseConfig(app);
  app.use(bodyParser.json());
  app.use(storageMiddleware());
  routerConfig(app);

  app.listen(PORT, () => {
    console.log(`Application started on: http://localhost:${PORT}`);
  });
}
