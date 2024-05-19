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
          <div class="markers">
            <p id="openModal">
              <i class='bx bx-show'></i>
              <span>ver mais</span>
            </p>
            <p>
              <i class='bx bx-bookmark'></i>
              <span>Assitir Depois</span>
            </p>
            <p>
              <i class='bx bx-star' ></i>
              <span>Favoritar</span>
            </p>
          </div>
        </div>
     `
     movieResultContainer.appendChild(movieElement)
    });
    document.getElementById('openModal').addEventListener('click', openModal)

    document.getElementById('closeBtn').addEventListener('click', closeModal)
    // setTimeout(() => {
    // }, 1000)
    
}

export function openModal() {
    const modal = document.getElementById('modal-card')
    modal.classList.remove('hide')
}
export function closeModal() {
    const modal = document.getElementById('modal-card')
    modal.classList.add('hide')
}