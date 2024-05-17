export default function searchMovies(inputSearch, api_key) {
  const btn = document.getElementById('searchBtn')
  const url = `https://api.themoviedb.org/3/search/movie?query=matrix&api_key=${api_key}&language=pt-BR`
btn.addEventListener('click', async () => {
    try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(url)
    if(data.results.length > 0) {
      const movie = data.results
      console.log(movie)
      // showMovie(movie)
    } else {
      // document.getElementById('result').innerHTML = `<h2>Não Encontramos nenhum titulo com o nome <strong>${title.value}</strong></h2>`
    // document.getElementById('table-body').innerHTML = `<tr><td colspan="4">filme não encontrado : ${title}</td></tr>

    }
  } catch(error) {
    console.error(`Erro ao buscar o filme: ${error}`)
    // document.getElementById('table-body').innerHTML = `<tr><td colspan="4">Erro ao buscar o filme: ${error}</td></tr>`
  }
  inputSearch.value = ''
})
}