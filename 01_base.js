// 1. Переменные
console.log('1. Переменные')

const firstName = 'laptev'
let lastName = 'dima'
lastName = 'lptv'
console.log(`${firstName} ${lastName}`)

// 2. Операторы
console.log('2. Операторы')

const a = 10
const b = 5
let c = 32

c += a // c = c + a
c -= a
c *= a
c /= a

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(c)

// 3. Типы данных
console.log('3. Типы данных')

const isProgrammer = true
const name = 'dima'
const age = 28

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)

// 4. Приоритет операторов
console.log('4. Приоритет операторов')

const fullAge = 29
const birthYear = 1992
const currentYear = 2020

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)

// 5. Условные операторы
console.log('5. Условные операторы')

const num1 = 42
const num2 = '42'

console.log(num1 == num2)
console.log(num1 === num2)

const isReady = true
// Обычный if
if (isReady) {
  console.log('Готово')
} else {
  console.log('Не готово')
}
// Тернарное выражение
isReady ? console.log('Готово') : console.log('Не готово')

// 6. Функции
console.log('6. Функции')

function calcAge(year) {
  return 2020 - year
}
const myAge = calcAge(1992)
console.log(myAge)

function logInfoAbout(name, year) {
  const myAge = calcAge(year)
  console.log(`${name} ${myAge}`)
}
logInfoAbout('Дима', 1992)

// 7. Массивы
console.log('7. Массивы')

const myArr = [1, 2, 3]
//const myArr = new Array(1, 2, 3)
console.log(myArr)
console.log(myArr[1])
console.log(myArr.length)

myArr[3] = 4
myArr[myArr.length] = 5
console.log(myArr)

// 8. Циклы
console.log('8. Циклы')

for (let i = 0; i < myArr.length; i++) console.log(`${i}: ${myArr[i]}`)

for (let item of myArr) console.log(item)

// 9. Объекты
console.log('9. Объекты')

const person = {
  fName: 'Laptev',
  lName: 'Dima',
  age: 28,
  arr: [1, 2, 3, 4],
  func: function () {
    console.log('Hello')
  },
}

console.log(person.fName)
console.log(person['fName'])
person.func()

person.isProgrammer = true
console.log(person)
