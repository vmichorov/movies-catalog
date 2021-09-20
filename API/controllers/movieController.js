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
      length: Number(req.body.length),
      genre: req.body.genre,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    };
    const movie = await req.storage.createMovie(movieData);
    res.send(movie);
  } catch (err) {
    console.log(err.message);
  }
});
/* get details about a movie */
router.get("/:title", async (req, res) => {
  try {
    const movie = await req.storage.getMovieByTitle(req.params.title);
    res.send(movie);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
