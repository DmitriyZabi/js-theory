// 1. Основные операции
console.log('1. Основные операции')

const person = {
    name: 'Dima',
    age: 28,
    isProgrammer: undefined,
    languages: ['ru', 'en'],
    'complex key': 'complex value',
    ['key' + (1 + 4)]: 'computed key',
    method() {
        console.log('hello')
    }
}

console.log('object =', person)
console.log('complex key =', person['complex key'])
console.log('key5 =', person['key5'])
delete(person['key5'])
console.log('deleted key5', person)

const first = { a: 1 }
const second = { b: 2 }
console.log('first object = ', first)
console.log('second object = ', second)
const obj = Object.assign(first, second, { c: 3, d: 4 })
console.log('Object.assign(first, second, { c: 3, d: 4 }) = ', obj)
console.log('Object.entries(obj) = ', Object.entries(obj))
console.log('Object.keys(obj) = ', Object.keys(obj))
console.log('Object.values(obj) = ', Object.values(obj))

// 2. For in
console.log('2. For in')

for (let key in person)
{
    if(person.hasOwnProperty(key)){ // избегаем поля прототипа
        console.log('key', key)
        console.log('value', person[key])
    }
}

// 3. Object.keys forEach
console.log('3. Object.keys forEach')

Object.keys(person).forEach(key => {
    console.log('key', key)
    console.log('value', person[key])
})

// 4. Context this, bind, call
console.log('4. Context this, bind, call, apply')

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`${key}: ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if(top)
            console.log('---------------START-----------------')
        Object.keys(this).forEach((key, index, array) => {  
            console.log(`${key}: ${this[key]}`)
            if(between && index != array.length - 1)
                console.log('-------------------------------------')
        })
        if(bottom)
            console.log('---------------BOTTOM----------------')
    }
}
logger.keys()

console.log('keys')
/*const bound = logger.keys.bind(person)
bound()*/
// или
logger.keys.call(person)

console.log('keysAndValues')
logger.keysAndValues.call(person)

console.log('withParams')
logger.withParams.call(person, true, true, true)
// или
// logger.withParams.apply(person, [true, true, true])

// 5. Rest
console.log('5. Rest')

const address = {
    country: 'Russia',
    city: 'Moskow',
    //street: 'Lenina',
    concat: function() { return `${this.country}, ${this.city}, ${this.street}`}
}
console.log('object = ', address)

const {city: city2, ...rest} = address
console.log(city2, rest)

// 6. Spread
console.log('6. Spread')

const newAddress = {...address, city: 'SP', code: 123}
console.log(newAddress)

// 7. Destructuring
console.log('7. Destructuring')

const {city, country, street = 'Tverskaya', concat} = address
console.log(country, city, street)
console.log(concat.call(address))