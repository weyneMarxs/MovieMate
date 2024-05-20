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
          <h4>${movie.title}</h4>
          <p>Titulo Original: ${movie.original_title}</p>
          <p>Lançado: ${formatDate(movie.release_date)}</p>
          <span>Nota: ${movie.vote_average}</span>
        </div>
     `
     movieElement.addEventListener('click', () => {
        const modal = document.getElementById('modal')
        modal.classList.remove('hide')
        const modalCard = document.getElementById('modal-card')
        modalCard.innerHTML = ''
        modalCard.innerHTML = `
          <div class="card">
              <i class='bx bx-x' id="closeBtn"></i>
              <div class="card-left">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Poster do Filme"/>
                <div class="content">
                  <h4>${movie.title}</h4>
                  <p>Titulo Original: ${movie.original_title}</p>
                  <p>Lançado: ${formatDate(movie.release_date)}</p>
                  <p>Popularidade: ${movie.popularity}</p>
                  <span>Nota: ${movie.vote_average}</span>
                </div>
              </div>
              <div class="sinopse">
                <h5>Sinopse</h5>
                <p>${movie.overview}</p>
              </div>
          </div>
        `
        modal.appendChild(modalCard)
        document.getElementById('closeBtn').addEventListener('click', () => {
          modal.classList.add('hide')
        })
      })
      movieResultContainer.appendChild(movieElement)
    });
    
}