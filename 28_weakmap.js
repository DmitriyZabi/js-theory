// ключами являются только объекты
// при удалении самого объекта удаляется и поле с ключ=удаленный объект в WeakMap
/*
obj = { name: 'weakmap' }
const map = new WeakMap([[obj, 'objData']])
// Методы: get set delete has
*/

const cache = new WeakMap()

function cacheuser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let lena = { name: 'Elena' }
let alex = { name: 'Alex' }

cacheuser(lena)
cacheuser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))
