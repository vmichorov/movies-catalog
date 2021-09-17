const Movie = require("../models/Movie");

async function createMovie(movieData) {
  const movie = new Movie(movieData);
  await movie.save();
  return movie;
}
async function getAllMovies() {
  const movies = await Movie.find().lean();
  return movies;
}
async function getFavouriteMovies() {
  const favourites = await Movie.find({ isFavourite: true }).lean();
  return favourites;
}
async function getMovieById(id) {
  const movie = await Movie.find({ _id: id }).lean();
  return movie;
}
async function getMoviesByTitle(title) {
  const regex = new RegExp(`${title}`, "i");
  const movies = await Movie.find({ title: { $regex: regex } }).lean();
  return movies;
}

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  getFavouriteMovies,
  getMoviesByTitle,
};
