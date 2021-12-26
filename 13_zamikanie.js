// https://youtu.be/pahO5XjnfLA

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(5))
console.log(addOne(3))
console.log(addTen(3))

//

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const urlCom = urlGenerator('com')
const urlRu = urlGenerator('ru')

console.log(urlCom('google'))
console.log(urlCom('vk'))
console.log(urlRu('google'))
console.log(urlRu('vk'))

//

// Задача: написать свой bind

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const dima = { name: 'Dima', age: 29, job: 'Jun'}
const lena = { name: 'Elena', age: 23, job: 'Mid'}

bind(dima, logPerson)()
//bind(lena, logPerson)()

