// https://youtu.be/1idOY3C1gYU

/*

console.log('Request data...')

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparring data...')
        const backendData = {
            server: 'aws',
            port: 2000
        }
        resolve(backendData)
    }, 2000);
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
            //reject(data)
        }, 2000);
    })
})
.then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
})
.then(data => {
    console.log('Data modified from promise', data)
})
.catch(err => console.error('Error', err))

*/

//

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))
//sleep(2000).then(() => console.log('After 2 sec'))
//sleep(3000).then(() => console.log('After 3 sec'))

// Сработали все
Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))

// Сработал 1й
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))