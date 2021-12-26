// https://youtu.be/nEabP9CYCAQ

const people = [
  { name: 'Dima', age: 16, budget: 15000 },
  { name: 'Elena', age: 28, budget: 12000 },
  { name: 'Alina', age: 31, budget: 7500 },
  { name: 'Tanya', age: 12, budget: 1500 },
  { name: 'Meelena', age: 312, budget: 1000 },
  { name: 'Kitana', age: 354, budget: 15000 },
]

/*
for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}

for (const person of people) {
  console.log(person)
}
*/

// ForEach
// people.forEach((person) => console.log(person))

// Map
// используется для преобразование массива в новый
/*
const newPeople = people.map(person => `${person.name} (${person.age})`)
console.log(newPeople)
*/

// Filter
/*
const adults = people.filter((person) => person.age >= 18)
console.log(adults)
*/

//Reduce
// Преобразование массива в результирующее значение
/*
const totalBudget = people.reduce((total, person) => total + person.budget, 0)
console.log(totalBudget)
*/

// Find
// Находит 1 запись
/*
const dima = people.find((person) => person.name === 'Dima')
console.log(dima)
*/

// FindIndex
// Находит 1 запись
/*
const dimaIndex = people.findIndex((person) => person.name === 'Dima')
console.log(dimaIndex)
*/

const newPeople = people
  .filter((person) => person.budget > 10000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    }
  })
console.log(newPeople)

const p = people.sort((people) => people.age)
console.log(p)
