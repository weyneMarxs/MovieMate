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
      const movie = data.results
      console.log(data)
      showMovie(movie)
    } else {
      // document.getElementById('result').innerHTML = `<h2>Não Encontramos nenhum titulo com o nome <strong>${title.value}</strong></h2>`
    document.getElementById('table-body').innerHTML = `<tr><td colspan="4">filme não encontrado : ${title}</td></tr>`

    }
  } catch(error) {
    console.error(`Erro ao buscar o filme: ${error}`)
    document.getElementById('table-body').innerHTML = `<tr><td colspan="4">Erro ao buscar o filme: ${error}</td></tr>`
  }
  title.value = ''
}

// function showMovie(movie) {
//   const {original_title, poster_path,title, overview, vote_average, release_date, genre_ids} = movie
//   const description = document.getElementById('description')
//   description.innerHTML = `
//       <h1>${title}</h1>

//       <h3>Sinopse</h3>

//       <p>${overview}</p>

//       <ul>
//         <li><span>Nota: </span> <p>${vote_average}</p></li>
//         <li><span>Lançado: </span> <p>${release_date}</p></li>
//         <li><span>Genero: </span> <p>${genre_ids[0]}</p></li>
//         <li><span>titulo original: </span> <p>${original_title}</p></li>
//       </ul>

//   `
//   const resultCard = document.querySelector('.card')
//   resultCard.innerHTML = `
//         <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
//         <button><i class='bx bx-movie' ></i> <span>Trailer</span></button>
//         <div class="actions">
//           <a href="#"><i class='bx bxs-star clicked'></i></i><span>Favorito</span></a>
//           <a href="#"><i class='bx bxs-bookmark-star' ></i><span>Assistir mais Tarde</span></a>
//           <a href="#"><i class='bx bx-show'></i><span>Assistido !</span></a>
//         </div>
//   `
// }

function showMovie(movie) {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  movie.forEach(movie => {
      const row = document.createElement('tr');

      const tituloCell = document.createElement('td');
      tituloCell.textContent = movie.title;
      row.appendChild(tituloCell);

      const sinopseCell = document.createElement('td');
      sinopseCell.textContent = movie.overview;
      row.appendChild(sinopseCell);

      const dataLancamentoCell = document.createElement('td');
      dataLancamentoCell.textContent = movie.release_date;
      row.appendChild(dataLancamentoCell);

      const posterCell = document.createElement('td');
      if (movie.poster_path) {
          const img = document.createElement('img');
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          img.alt = `${movie.title} poster`;
          posterCell.appendChild(img);
      } else {
          posterCell.textContent = 'N/A';
      }
      row.appendChild(posterCell);

      tableBody.appendChild(row);
  });
}