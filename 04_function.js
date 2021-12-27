// 1. Function Declaration (можно вызывать до объявления функции)
console.group('1. Function Declaration (можно вызывать до объявления функции)')

function hello1(name) {
    console.log(`Hello ${name}`)
}
hello1('Лена')

console.groupEnd()

// 2. Function Expression (нельзя вызывать до объявления функции)
console.group('2. Function Expression (нельзя вызывать до объявления функции)')

const hello2 = function(name) {
    console.log(`Hello ${name}`)
}
hello2('Лена')

console.groupEnd()

// 3. Анонимные функции
console.group('3. Анонимные функции')

let counter = 0;
const interval = setInterval(function() {
    if(counter === 5)
        clearInterval(interval)
    else
        console.log(++counter)
}, 1000);

console.groupEnd()

// 4. Стрелочные функции
console.group('4. Стрелочные функции')

const hello3 = (name) => {
    console.log(`Hello ${name}`)
}
hello3('Лена')

const hello4 = name => console.log(`Hello ${name}`)
hello4('Лена')

const pow1 = num => {
    return num ** 2
}
console.log(pow1(5))

const pow2 = num => num ** 2
console.log(pow2(5))

console.groupEnd()

// 5. Параметры по умолчанию
console.group('5. Параметры по умолчанию')

const sum = (a = 1, b = 0) => a + b
console.log(sum(1, 2))
console.log(sum(5))
console.log(sum(undefined, 8))

const sumAll = (...all) => {
    let res = 0
    for(let item of all)
        res += item
    return res
}
console.log(sumAll(1, 2, 3, 4, 5))

console.groupEnd()

// 6. Замыкания
console.group('6. Замыкания')

function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const loginWithTheLastName = createMember('Dima')
console.log(loginWithTheLastName('Laptev'))
console.log(loginWithTheLastName('Petrov'))

console.groupEnd()