const people = [
  { name: 'Dima', age: 16, budget: 15000 },
  { name: 'Elena', age: 28, budget: 12000 },
  { name: 'Alina', age: 31, budget: 7500 },
  { name: 'Tanya', age: 12, budget: 1500 },
  { name: 'Meelena', age: 312, budget: 1000 },
  { name: 'Kitana', age: 354, budget: 15000 },
]

console.group('1. For')

for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}

console.groupEnd()


//

console.group('2. For of')

for (const person of people) {
  console.log(person)
}

console.groupEnd()

//

console.group('3. ForEach')

//people.forEach((person, index, pArr) => console.log(pArr[index]))
people.forEach(person => console.log(person))

console.groupEnd()

//

console.group('4. Map')
// используется для преобразование массива в новый

const newPeople = people.map(person => `${person.name} (${person.age})`)
console.log(newPeople)

console.groupEnd()

//

console.group('5. Filter')

const adults = people.filter((person) => person.age >= 18)
console.log(adults)

console.groupEnd()

//

console.group('6. Reduce')
// преобразование массива в результирующее значение

const totalBudget = people.reduce((total, person) => total + person.budget, 0)
console.log(totalBudget)

console.groupEnd()

//

console.group('7. Find')
// находит 1 запись

const dima = people.find((person) => person.name === 'Dima')
console.log(dima)

console.groupEnd()

//

console.group('8. FindIndex')
// Находит 1 запись

const dimaIndex = people.findIndex((person) => person.name === 'Dima')
console.log(dimaIndex)

console.groupEnd()

//

console.group('9. Sort')

const p = people.sort((a, b) => { 
  if(a.age < b.age) {
    return -1
  }
  if(a.age > b.age) {
    return 1
  }
  return 0
})

console.log(p)

console.groupEnd()

//

console.group('Совместное использование')

const newPeople2 = people
  .filter((person) => person.budget > 10000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    }
  })
console.log(newPeople2)

console.groupEnd()