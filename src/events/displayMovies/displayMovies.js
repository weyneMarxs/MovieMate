export function displayMovies(movies) {
  const movieResultContainer = document.getElementById('movieResults')
  movieResultContainer.innerHTML = ''

  movies.forEach(movie => {
     console.log(movie) 
  });

}