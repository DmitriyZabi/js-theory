// https://youtu.be/mbcP3Oc0PjU
// ключами являются объекты
/*
obj = { name: 'weakmap' }
const map = new WeakMap([[obj, 'objData']])
// get set delete has
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
