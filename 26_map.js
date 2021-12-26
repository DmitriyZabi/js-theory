// https://youtu.be/mbcP3Oc0PjU

const obj = {
  name: 'Dima',
  age: 29,
  job: 'Fullstack',
}

const entries = [
  ['name', 'Dima'],
  ['age', 29],
  ['job', 'Fullstack'],
]

/*
console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))
*/

// Функционал

const map = new Map(entries)
//console.log(map)

map.set('newField', 42).set(obj, 'Value of object')
/*
console.log('Добавление 2 ключей', map)
console.log('Value ключа obj', map.get(obj))
*/

/*
map.delete('job')
console.log('Удаление ключа job', map)
console.log('Есть ли ключ job ?', map.has('job'))

console.log('map size', map.size)
//map.clear() очищение карты

console.log('for [key, value] of map')
for (let [key, value] of map) {
  console.log(key, value)
}

console.log('for [value] of map.values')
for (let value of map.values()) {
  console.log(value)
}

console.log('for [key] of map.keys')
for (let key of map.keys()) {
  console.log(key)
}

console.log('forEach')
map.forEach((value, key, m) => console.log(value, key))

console.log('Массив из карты')
const array = [...map]
// const arra = Array.from(map)
console.log(array)

console.log('Объект из карты')
const object = Object.fromEntries(map.entries())
console.log(object)

*/

// Примеры

const users = [{ name: 'Dima' }, { name: 'Elena' }, { name: 'Meelena' }]

const visits = new Map()
visits
  .set(users[0], new Date())
  .set(users[1], new Date().getTime() * 1000 * 60)
  .set(users[2], new Date().getTime() * 5 * 1000 * 60)

function lastVisituser(user) {
  return visits.get(user)
}
console.log(lastVisituser(users[1]))
