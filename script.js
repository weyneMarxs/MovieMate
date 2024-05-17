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
      showMovie(movie)
    } else {
      document.getElementById('result').innerHTML = `Não Encontramos nenhum titulo com o nome ${title}`
    }
  } catch(error) {
    console.error(`Erro ao buscar o filme: ${error}`)
    document.getElementById(result).innerHTML = `Erro ao buscar o filme: ${error}`
  }
  title.value = ''
}

function showMovie(movie) {
  const {original_title, } = movie
  console.log(movie)
}