console.group('Object/Entries')

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

console.log(Object.fromEntries(entries))
console.log(Object.entries(obj))

console.groupEnd()

//

console.group('Map')

const map = new Map(entries)
console.log(map)

map.set('newField', 42).set(obj, 'Value of object')
console.log('Added 2 keys', map)
console.log('Value of key = obj', map.get(obj))
map.delete('job')
console.log('Deleted key = job', map)
console.log('Has key=job ?', map.has('job'))
console.log('Map size', map.size)
//map.clear() очищение карты

console.groupEnd()

//

console.group('for [key, value] of map')

for (let [key, value] of map) {
  console.log(key, value)
}

console.groupEnd()

//

console.group('for [value] of map.values')

for (let value of map.values()) {
  console.log(value)
}

console.groupEnd()

//

console.group('for [key] of map.keys')

for (let key of map.keys()) {
  console.log(key)
}

console.groupEnd()

//

console.group('forEach')

map.forEach((value, key, m) => console.log(value, key))

console.groupEnd()

//

console.group('Map to Array')

const array = [...map]
// const arra = Array.from(map)
console.log(array)

console.groupEnd()

//

console.group('Map to Object')

const object = Object.fromEntries(map.entries())
console.log(object)

console.groupEnd()

//

console.group('Example')

const users = [{ name: 'Dima' }, { name: 'Elena' }, { name: 'Meelena' }]

const visits = new Map()
visits
  .set(users[0], new Date())
  .set(users[1], new Date().getTime() * 1000 * 60)
  .set(users[2], new Date().getTime() * 5 * 1000 * 60)

function lastVisitUser(user) {
  return visits.get(user)
}
console.log(lastVisitUser(users[1]))

console.groupEnd()
