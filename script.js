const title = document.getElementById('title')

title.addEventListener("focusin", () => {
  title.classList.add('focus')
});

title.addEventListener("focusout", () => {
  if(title.value) {
    title.classList.add('focus')
  } else {
    title.classList.remove('focus')
  }
});
async function searchMovies() {
  const API_KEY = '7a7c314f199c464edbbab80749e3e013'
  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titulo)}`
  const url = `https://api.themoviedb.org/3/search/movie?query=${title.value}&api_key=${API_KEY}&language=pt-BR`

  try{
    const response = await fetch(url)
    const data = await response.json()
    if(data.results.length > 0) {
      const movie = data.results[0]
      console.log(data)
      showMovie(movie)
    } else {
      document.getElementById('result').innerHTML = `<h2>Não Encontramos nenhum titulo com o nome <strong>${title.value}</strong></h2>`
    }
  } catch(error) {
    console.error(`Erro ao buscar o filme: ${error}`)
    document.getElementById(result).innerHTML = `Erro ao buscar o filme: ${error}`
  }
  title.value = ''
}

function showMovie(movie) {
  const {original_title, poster_path,title, overview, vote_average, release_date, genre_ids} = movie
  const description = document.getElementById('description')
  description.innerHTML = `
      <h1>${title}</h1>

      <h3>Sinopse</h3>

      <p>${overview}</p>

      <ul>
        <li><span>Nota: </span> <p>${vote_average}</p></li>
        <li><span>Lançado: </span> <p>${release_date}</p></li>
        <li><span>Genero: </span> <p>${genre_ids[0]}</p></li>
        <li><span>titulo original: </span> <p>${original_title}</p></li>
      </ul>

  `
  const resultCard = document.querySelector('.card')
  resultCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
        <button><i class='bx bx-movie' ></i> <span>Trailer</span></button>
        <div class="actions">
          <a href="#"><i class='bx bxs-star clicked'></i></i><span>Favorito</span></a>
          <a href="#"><i class='bx bxs-bookmark-star' ></i><span>Assistir mais Tarde</span></a>
          <a href="#"><i class='bx bx-show'></i><span>Assistido !</span></a>
        </div>
  `
}