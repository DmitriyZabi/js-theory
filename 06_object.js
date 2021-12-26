// Объекты
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
/*console.log(person['complex key'])
console.log(person['key5'])*/
delete(person['key5'])
console.log('deleted key5', person)

/*const name = person.name
const age = person.age
const languages = person.languages*/
const {name, age, languages, age: age2, isProgrammer = true } = person
console.log(name, languages, age, age2, isProgrammer)

console.log('for object')
for (let key in person)
{
    if(person.hasOwnProperty(key)){
        console.log('key', key)
        console.log('value', person[key])
    }
}

console.log('object keys forEach')
Object.keys(person).forEach(key => {
    console.log('key', key)
    console.log('value', person[key])
})

// Context
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

// Destructuring
const address = {
    country: 'Russia',
    city: 'Moskow',
    //street: 'Lenina',
    concat: function() { return `${this.country}, ${this.city}, ${this.street}`}
}

const {city, country, street = 'Tverskaya', concat} = address
console.log(country, city, street)
console.log(concat.call(address))

// Rest
const {city: city2, ...rest} = address
console.log(city2, rest)

// Spread
const newAddress = {...address, city: 'SP', code: 123}
console.log(newAddress)

//
const first = { a: 1 }
const second = { b: 2 }
const obj = Object.assign(first, second, { c: 3, d: 4 })
console.log(obj)
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))