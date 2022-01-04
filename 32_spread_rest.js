// Spread - разворачивает массив/объект в набор строк
console.group('Spread Array')

const russiaCities = ['Москва', 'Ростов', 'Рязань']
const europeCities = ['Париж', 'Лондон', 'Прага']

console.log('russiaCities', russiaCities);
console.log('europeCities', europeCities);

const allCities = [...russiaCities, 'Вашингтон', ...europeCities]
console.log('allCities', allCities)

console.groupEnd()

//

console.group('Spread Object')

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

console.log('russiaCitiesWithPopulation', russiaCitiesWithPopulation);
console.log('europeCitiesWithPopulation', europeCitiesWithPopulation);

const allCitiesWithPopulation = {
  ...russiaCitiesWithPopulation,
  ...europeCitiesWithPopulation,
}
console.log('allCitiesWithPopulation', allCitiesWithPopulation)

console.groupEnd()

//

console.group('Spread examples');

// Spread example 1
const numbers = [5, 1, 2, 33, 4, 56, 21]
console.log('numbers', numbers);
console.log('Math.max(...numbers)', Math.max(...numbers))

// Spread example 2
const divs = document.querySelectorAll('div')
const nodes = [...divs] // теперь Array
console.log('[...divs]', nodes);

console.groupEnd()

//

// Rest - собирает параметры
console.group('Rest');

function SumSpread(a, b) {
  return a + b
}

const arr = [1, 2, 3, 4, 5]
console.log('arr', arr);
console.log('SumSpread', SumSpread(...arr)) // spread (складывает только 1 + 2)

function SumRest(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}
console.log('SumRest', SumRest(...arr))

console.groupEnd()

//

console.group('Destructuring')

const [a, b, ...others] = arr
console.log(arr, a, b, others)

const person = {
  name: 'Dima',
  age: 29,
  city: 'Donetsk',
  job: 'Fullstack',
}

const { name, age, ...others2 } = person
console.log(person, name, age, others2)

console.groupEnd()