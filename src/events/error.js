export function errorMessage(error) {
  CreateContainerError()
  const errorDiv = document.getElementById('error')
  errorDiv.innerHTML = `<p>${error}</p>`
  errorDiv.classList.remove('hide')
  setTimeout(() => {
    errorDiv.classList.add('hide')
  }, 1500)
}

export function errorShake() {
  CreateContainerError()
  const input = document.getElementById('searchInput')
  input.classList.add('error')
  setTimeout(() => {
    input.classList.remove('error')
  }, 3000)
}


function CreateContainerError() {
  const movieResultContainer = document.getElementById('movieResults')
  movieResultContainer.innerHTML = ''

  const errorElement = document.createElement('div')

  errorElement.innerHTML = `
  <div id="error" class="hide">
  </div>
  `

  movieResultContainer.appendChild(errorElement)
}