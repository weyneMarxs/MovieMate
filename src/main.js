import { Router } from "./routes/router.js"
const router = new Router()

import toggleInputBackground from "./events/toggleInputBackground.js"
import searchMovies from "./searchMovies/SearchMovies.js"
import { showSearchBar, showModal } from "./events/showSearchBar.js"

const inputSearch = document.getElementById('searchInput')
const btn = document.getElementById('searchBtn')

router.add('/', '../pages/home.html')
router.add('/search', '../pages/search.html')
router.add(404, '../pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

showSearchBar()
showModal()
toggleInputBackground(inputSearch)
btn.addEventListener('click', searchMovies)