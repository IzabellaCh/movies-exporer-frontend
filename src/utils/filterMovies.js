export const filterMovies = (
  movies,
  searchWord,
  isShortFilm,
  turnOffPreloader
) => {
  let filteredMovies;
  if (!isShortFilm) {
    filteredMovies = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchWord);
    });
  } else {
    filteredMovies = movies.filter((item) => {
      if (
        item.nameRU.toLowerCase().includes(searchWord) &&
        item.duration < 40
      ) {
        return item;
      }
    });
  }
  turnOffPreloader(false);
  return filteredMovies;
};
