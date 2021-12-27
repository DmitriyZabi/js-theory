const person = {
    name: 'Dima',
    age: 28,
    greet: () => {
        console.log('greet');
    }
}

Object.prototype.sayHello = () => console.log("hello")
console.log(person.sayHello())

const lena = Object.create(person)
console.log(lena.greet())
lena.name = "Elena"
console.log(lena)