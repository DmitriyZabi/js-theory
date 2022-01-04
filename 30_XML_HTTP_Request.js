const requestUrl = 'https://jsonplaceholder.typicode.com/users'

/*
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.responseType = 'json'
xhr.onload = () => {
  if (xhr.status >= 400) {
    console.error(xhr.response)
  } else {
    console.log(xhr.response)
  }
}
xhr.onerror = () => {
  console.error(xhr.response)
}
xhr.send()
*/

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.error(xhr.response)
      } else {
        console.log(xhr.response)
      }
    }
    xhr.onerror = () => {
      console.error(xhr.response)
    }
    xhr.send(JSON.stringify(body))
  })
}

/*
sendRequest('GET', requestUrl)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
*/

const body = {
  name: 'Dima',
  age: 29,
}

sendRequest('POST', requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
