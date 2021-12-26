// Синхронность
/*
setTimeout(() => {
    console.log('after timeout')
}, 1000)

setInterval(() => {
    console.log('after interval')
}, 1000)
*/

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve() //Все ок
            //reject('Что-то пошло не так.') // Ошибка
        }, wait);
    })
    return promise
}

/*
delay(2000)
.then(()=> {
    console.log('After 2 sec')
})
.catch(err => console.error('Error:', err))
.finally(()=> console.log('Finally'))
*/

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))
//getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(2000)
        const data = await getData()
        console.log(data)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        
    }
    
}
asyncExample()