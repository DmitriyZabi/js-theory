const myNumber = 42
localStorage.setItem('number', myNumber) // тип: только строка
console.log('number from localStorage', localStorage.getItem('number'))
localStorage.removeItem('number')
console.log('after delete number', localStorage.getItem('number'))
//localStorage.clear()

const obj = {
  name: 'Dima',
  age: 29,
}
console.log('obj', obj);

localStorage.setItem('person', JSON.stringify(obj))
console.log('obj in localStorage', localStorage.getItem('person'))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
console.log('obj from localStorage', person)

//
// Синхронизация между несколькими вкладками браузера
window.addEventListener('storage', (event) => {
  console.log(event)
})

//window.onstorage = () => {} // альтернативная запись
