const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  }
  return fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : null,
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return response.json().then((error) => {
      const e = new Error('Ошибка')
      e.data = error
      throw e
    })
  })
}


/*sendRequest('GET', requestUrl)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))*/

const body = {
  name: 'Dima',
  age: 29,
}

/*
sendRequest('POST', requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
*/

// async await fetch
async function sendRequestAsyncAwait(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  }
  response = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: headers,
   })
   if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
   }
   const data = await response.json()
   return data
}

sendRequestAsyncAwait('GET', requestUrl)
 .then((data) => console.log(data))
 .catch((err) => console.error(err))