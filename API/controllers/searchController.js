const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Search Page!");
});
/* get movie(s) by title */
router.post("/", async (req, res) => {
  try {
    const movies = await req.storage.getMoviesByTitle(req.body.title);
    res.send(movies);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
