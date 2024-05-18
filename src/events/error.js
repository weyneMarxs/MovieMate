export function errorMessage(error) {
  const errorDiv = document.getElementById('error')
  errorDiv.innerHTML = `<p>${error}</p>`
  errorDiv.classList.remove('hide')
  setTimeout(() => {
    errorDiv.classList.add('hide')
  }, 1500)
}

export function errorShake() {
  const input = document.getElementById('searchInput')
  input.classList.add('error')
  setTimeout(() => {
    input.classList.remove('error')
  }, 3000)
}