// 1. Переменные
console.group('1. Переменные')

const firstName = 'laptev'
let lastName = 'dima'
lastName = 'lptv'
console.log(`${firstName} ${lastName}`)

console.groupEnd()

// 2. Операторы
console.group('2. Операторы')

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

console.groupEnd()

// 3. Типы данных
console.group('3. Типы данных')

const isProgrammer = true
const name = 'dima'
const age = 28

console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)

console.groupEnd()

// 4. Приоритет операторов
console.group('4. Приоритет операторов')

const fullAge = 29
const birthYear = 1992
const currentYear = 2020

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)

console.groupEnd()

// 5. Условные операторы
console.group('5. Условные операторы')

const num1 = 42
const num2 = '42'

console.log(num1 == num2)
console.log(num1 === num2)

const isReady = true
// Обычный if
if (isReady) { // если isReady != falsy (0, undefined, false, null, '')
  console.log('Готово')
} else {
  console.log('Не готово')
}
// Тернарное выражение
isReady ? console.log('Готово') : console.log('Не готово')

console.groupEnd()

// 6. Функции
console.group('6. Функции')

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

console.groupEnd()

// 7. Массивы
console.group('7. Массивы')

const myArr = [1, 2, 3]
//const myArr = new Array(1, 2, 3)
console.log(myArr)
console.log(myArr[1])
console.log(myArr.length)

myArr[3] = 4
myArr[myArr.length] = 5
console.log(myArr)

console.groupEnd()

// 8. Циклы
console.group('8. Циклы')

for (let i = 0; i < myArr.length; i++) console.log(`${i}: ${myArr[i]}`)

for (let item of myArr) console.log(item)

console.groupEnd()

// 9. Объекты
console.group('9. Объекты')

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

console.groupEnd()
