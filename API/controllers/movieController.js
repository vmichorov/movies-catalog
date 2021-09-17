const router = require("express").Router();

/* all movies */
router.get("/all", async (req, res) => {
  try {
    const movies = await req.storage.getAllMovies();
    res.send(movies);
  } catch (err) {
    console.log(err.message);
  }
});
/* favourite movies */
router.get("/favourites", async (req, res) => {
  try {
    const movies = await req.storage.getFavouriteMovies();
    res.send(movies);
  } catch (err) {
    console.log(err.message);
  }
});
/* create movie */
router.post("/create", async (req, res) => {
  try {
    const movieData = {
      title: req.body.title,
      releasedAt: Number(req.body.releasedAt),
      isFavourite: Boolean(req.body.isFavourite),
    };
    const movie = await req.storage.createMovie(movieData);
    res.send(movie);
  } catch (err) {
    console.log(err.message);
  }
});
/* get details about a movie */
router.get("/details/:id", async (req, res) => {
  try {
    const movie = await req.storage.getMovieById(req.params.id);
    res.send(movie);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
