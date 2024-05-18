import formatDate from "../events/formatDate.js"

export function displayMovies(movies) {
  // const { title, overview, release_date, rating, poster_path} = movies[0]
  const movieResultContainer = document.getElementById('movieResults')
  movieResultContainer.innerHTML = ''
  movies.forEach(movie => {
     const movieElement = document.createElement('div')
     movieElement.innerHTML = `
        <div id="movieCard">
          <div id="movieImgBlock">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
          </div>
          <h2>${movie.title}</h2>
          <p>${formatDate(movie.release_date)}</p>
        </div>
     `

     movieResultContainer.appendChild(movieElement)
  });

}