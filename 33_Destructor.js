// https://youtu.be/wWYokY0Pt2M

// Array
function calcValues(a, b) {
  return [a + b, a - b, a * b, undefined, a / b]
}

const [sum, , mult, value1 = 'Значение по умолчанию', ...other] = calcValues(
  32,
  10
)
console.log(sum, mult, value1, other)

// Object

const person = {
  name: 'Dima',
  age: 29,
  job: 'Fullstack',
  address: {
    country: 'DNR',
    city: 'Donetsk',
  },
}

/*
const {
  name: firstname,
  age,
  job,
  car = 'нет машины',
  address: { city, country },
} = person
console.log(firstname, age, job, car, city)
*/

function logPersone({ name, age }) {
  console.log(name, age)
}
logPersone(person)
