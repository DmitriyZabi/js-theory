// https://youtu.be/SGeQ-U0G7dE

// Spread
// Array
const russiaCities = ['Москва', 'Ростов', 'Рязань']
const europeCities = ['Париж', 'Лондон', 'Прага']

const allCities = [...russiaCities, 'Вашингтон', ...europeCities]
console.log(allCities)

// Object
const russiaCitiesWithPopulation = {
  Moscow: 16,
  kazan: 3,
  SP: 8,
}

const europeCitiesWithPopulation = {
  London: 6,
  Moscow: 20,
  Paris: 5,
}

const allCitiesWithPopulation = {
  ...russiaCitiesWithPopulation,
  ...europeCitiesWithPopulation,
}
console.log(allCitiesWithPopulation)

// Practice
const numbers = [5, 1, 2, 33, 4, 56, 21]
console.log(Math.max(...numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs] // теперь Array

// Rest
function SumSpread(a, b) {
  return a + b
}

const arr = [1, 2, 3, 4, 5]
console.log(SumSpread(...arr)) // spread (складывает только 1 + 2)

function SumRest(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}
console.log(SumRest(...arr))

const [a, b, ...others] = arr
console.log(a, b, others)

const person = {
  name: 'Dima',
  age: 29,
  city: 'Donetsk',
  job: 'Fullstack',
}

const { name, age, ...others2 } = person
console.log(name, age, others2)
