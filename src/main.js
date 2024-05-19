import toggleInputBackground from "./events/toggleInputBackground.js"
import searchMovies from "./searchMovies/SearchMovies.js"
const inputSearch = document.getElementById('searchInput')
const btn = document.getElementById('searchBtn')


toggleInputBackground(inputSearch)
btn.addEventListener('click', searchMovies)
