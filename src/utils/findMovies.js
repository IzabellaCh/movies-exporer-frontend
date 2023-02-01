export const findMovies = (allMovies, searchWord) => {
  const newMovies = allMovies.filter((item) => {
    return item.nameRU.toLowerCase().includes(searchWord);
  });
  return newMovies;
};
