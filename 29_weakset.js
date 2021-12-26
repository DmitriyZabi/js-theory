const users = [{ name: 'Dima' }, { name: 'Elena' }, { name: 'Meelena' }]

const weakset = new WeakSet()

weakset.add(users[0]).add(users[1])

users.splice(1, 1)

console.log(weakset.has(users[0]))
console.log(weakset.has(users[1]))
