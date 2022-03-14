// 1. Основные операции
console.group('1. Основные операции')

const cars = ['Mazda', 'Toyota', 'Nissan']

console.log('Array =', cars)
cars.push('BMW')
console.log('Added to end', cars)
cars.unshift('Porsche')
console.log('Added to start', cars)
//cars.shift()
const deletedFirstElement = cars.shift()
console.log('Deleted first', cars)
console.log('Deleted Element', deletedFirstElement)

const deletedEndElement = cars.pop()
console.log('Deleted last', cars)
console.log('Deleted Element', deletedEndElement)

cars.reverse()
console.log('Reverse array', cars)

const index = cars.indexOf('Toyota')
console.log('Toyota index', index)

console.log('includes Mazda', cars.includes('Mazda'))

const uppercaseCars = cars.map((car) => car.toUpperCase())
console.log('Uppercase array', uppercaseCars)

delete cars[1]
console.log('delete cars[1]', cars)

console.groupEnd()

// 2. Map
console.group('2. Map')

const fib = [1, 1, 2, 3, 5, 8, 13]
const fib2 = fib.map((n) => n ** 2)
console.log('array =', fib)
console.log('array ** 2 =', fib2)

const pow3 = (n) => n ** 3
const fib3 = fib.map(pow3)
console.log('array ** 3 =', fib3)

const pow2 = (n) => n ** 2
const sqrt = (n) => Math.sqrt(n)
const fib4 = fib.map(pow2).map(sqrt)
// const fib4 = fib.map(pow2).map(Math.sqrt) Альтернативная запись
console.log('array ** 2 + sqrt =', fib4)

console.groupEnd()

// 3. Filter
console.group('3. Filter')

const filter1 = (n) => n > 5
const fib5 = fib.filter(filter1)
console.log('array > 5 =', fib5)

console.groupEnd()

// 4. Find, Reduce
console.group('4. Find, Reduce')

const people = [
  { name: 'Dima', budget: 15000 },
  { name: 'Elena', budget: 12000 },
  { name: 'Alina', budget: 7500 },
]
console.log('Array =', people)

const index2 = people.findIndex((person) => person.budget === 12000)
console.log('index of budget = 12000', index2)

const persone = people.find((person) => person.budget === 12000)
console.log('persone of budget = 12000', persone)

const allBudget = people.reduce((acc, person) => {
  acc += person.budget
  return acc
}, 0)
console.log('summ budget', allBudget)

const allBudget2 = people
  .filter((n) => n.budget > 10000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)
console.log('summ budget if budget > 10000', allBudget2)

console.groupEnd()

// 5. Every, Some
console.group('5. Every, Some')

const ages = [32, 33, 16, 40]
const checkAge = (age) => age > 18
const resultEvery = ages.every(checkAge)
const resultSome = ages.some(checkAge)
console.log(resultEvery)
console.log(resultSome)

console.groupEnd()

// 6. Splice, Slice
console.group('6. Splice, Slice')

console.log('ages', ages)
console.log('ages.splice(1, 2)', ages.splice(1, 2))
console.log('ages', ages)
console.log('ages.splice(1, 0, 33, 44, 55)', ages.splice(1, 0, 33, 44, 55))
console.log('ages', ages)

console.groupEnd()

// 7. Rest
console.group('7. Rest')

const average = (...args) =>
  args.reduce((acc, i) => (acc += i), 0) / args.length
console.log('average of array', average(10, 20, 30, 40, 50))

console.groupEnd()

// 8. Spread
console.group('8. Spread')

console.log(...fib)
console.log(Math.max(...fib))

const newFib = [1, ...fib]
console.log(newFib)

console.groupEnd()

// 9. Destructuring
console.group('9. Destructuring')

const fib6 = [1, undefined, 2, 3, 5, 8, 13]
const [a, b = 3, ...c] = fib6
console.log(a, b, c)
const [d, , , e] = fib6
console.log(d, e)

console.groupEnd()
