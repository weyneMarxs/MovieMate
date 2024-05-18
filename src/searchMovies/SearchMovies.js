import { displayMovies } from "../events/displayMovies/displayMovies.js"
import { errorMessage } from "../events/error.js"

export default async function searchMovies() {
  const api_key = '7a7c314f199c464edbbab80749e3e013'
  const querySeach = document.getElementById('searchInput').value
  const url = `https://api.themoviedb.org/3/search/movie?query=${querySeach}&api_key=${api_key}&language=pt-BR`

  if(querySeach.trim() === '') {
    errorMessage('Campo Vazio !')
    return
  }
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data.results.length > 0) {
        displayMovies(data.results)
        // console.log(data.results)
      } else {
        errorMessage('Filme não encontrado !')
      }
    })
  //   try{
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   if(data.results.length > 0) {
  //     const movie = data.results
  //     console.log(movie)
  //     // showMovie(movie)
  //   } else {
  //     // document.getElementById('result').innerHTML = `<h2>Não Encontramos nenhum titulo com o nome <strong>${title.value}</strong></h2>`
  //   // document.getElementById('table-body').innerHTML = `<tr><td colspan="4">filme não encontrado : ${title}</td></tr>

  //   }
  // } catch(error) {
  //   console.error(`Erro ao buscar o filme: ${error}`)
  //   // document.getElementById('table-body').innerHTML = `<tr><td colspan="4">Erro ao buscar o filme: ${error}</td></tr>`
  // }
  // input.value = ''

}