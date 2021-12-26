// https://youtu.be/3-bZ7gLVSzo

const myNumber = 42
localStorage.setItem('number', myNumber) // тип: только строка
console.log(localStorage.getItem('number'))
localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
//localStorage.clear()

const obj = {
  name: 'Dima',
  age: 29,
}

localStorage.setItem('person', JSON.stringify(obj))
console.log(localStorage.getItem('person'))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
console.log(person)

//====================================================

window.addEventListener('storage', (event) => {
  console.log(event)
})

//window.onstorage = () => {}
