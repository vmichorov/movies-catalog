const movieController = require("../controllers/movieController");
const searchController = require("../controllers/searchController");

module.exports = (app) => {
  app.use("/movies", movieController);
  app.use("/search", searchController);
};
