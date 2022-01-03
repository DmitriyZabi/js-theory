const set = new Set([1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5])
console.log(set)

set.add(1).add(20).add(30)
console.log('Added 3 values', set)
console.log('Has 20 ?', set.has(20))
console.log('Size', set.size)
// set.clear()
console.log('Values', set.values())
console.log('Keys', set.keys())
console.log('Entries', set.entries())

console.group('For')

for (const key of set) {
  console.log(key)
}

console.groupEnd()

 //

 console.group('Example')

function uniqueValues(array) {
  return Array.from(new Set(array))
}

console.log(uniqueValues([1, 1, 2, 3, 4, 4, 4, 5, 5]))

console.groupEnd()
