// https://youtu.be/mbcP3Oc0PjU

const set = new Set([1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5])
console.log(set)

/*
set.add(1).add(20).add(30)
console.log(set)
console.log(set.has(20))
console.log(set.size)
// set.clear()
console.log(set.values())
console.log(set.keys())
console.log(set.entries())

for (const key of set) {
  console.log(key)
}
*/

// Примеры

function uniqueValues(array) {
  return Array.from(new Set(array))
}

console.log(uniqueValues([1, 1, 2, 3, 4, 4, 4, 5, 5]))
