console.log('%c HI', 'color: firebrick')

function fetchImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(json) { 
  