const movieService = require("../services/movieService");

module.exports = () => (req, res, next) => {
  req.storage = {
    ...movieService,
  };
  next();
};
