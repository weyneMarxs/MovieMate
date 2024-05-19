import { displayMovies } from "../displayMovies/displayMovies.js"
import { errorMessage, errorShake } from "../events/error.js"

export default async function searchMovies() {
  const api_key = '7a7c314f199c464edbbab80749e3e013'
  const querySeach = document.getElementById('searchInput').value
  const url = `https://api.themoviedb.org/3/search/movie?query=${querySeach}&api_key=${api_key}&language=pt-BR`
  const messageError = `Filme não encontrado : ${querySeach}`

  if(querySeach.trim() === '') {
    errorShake()
    return
  }
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data.results.length > 0) {
        displayMovies(data.results)
      } else {
        errorMessage(messageError)
      }
    })
}