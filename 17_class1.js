// https://youtu.be/uLY9GXGMXaA

/*
const animal = {
    name: 'animal',
    age: 50,
    hasTail: true
}
*/

class Animal {
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() { // метод в прототипе
        console.log('i am animal')
    }
}

const animal = new Animal({
    name: 'animal',
    age: 50,
    hasTail: true
})

console.log(animal)
console.log('animal.type', animal.type)
console.log('Animal.type', Animal.type)

class Cat extends Animal {
    static type = 'CAT'

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice() { // метод в прототипе
        super.voice()
        console.log('i am cat')
    }

    get ageInfo() {
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'cat',
    age: 7,
    hasTail: true
})
cat.color = 'black'
console.log(cat)