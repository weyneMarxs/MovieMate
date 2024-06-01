export function showSearchBar() {
  const pathname = window.location.pathname
  if(pathname === '/search') {
    document.querySelector('.searchBlock').classList.remove('hide')
  }
}

export function showModal() {
  const pathname = window.location.pathname
if(pathname === '/search') {
  const modal = document.getElementById('modal')
  console.log(modal)
}
}