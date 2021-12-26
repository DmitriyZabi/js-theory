// 1. Function Declaration (можно вызывать до объявления функции)
console.log('1. Function Declaration (можно вызывать до объявления функции)')

function hello1(name) {
    console.log(`Hello ${name}`)
}
hello1('Лена')

// 2. Function Expression (нельзя вызывать до объявления функции)
console.log('2. Function Expression (нельзя вызывать до объявления функции)')

const hello2 = function(name) {
    console.log(`Hello ${name}`)
}
hello2('Лена')

// 3. Анонимные функции
console.log('3. Анонимные функции')

let counter = 0;
const interval = setInterval(function() {
    if(counter === 5)
        clearInterval(interval)
    else
        console.log(++counter)
}, 1000);

// 4. Стрелочные функции
console.log('4. Стрелочные функции')

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

// 5. Параметры по умолчанию
console.log('5. Параметры по умолчанию')

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

// 6. Замыкания
console.log('6. Замыкания')

function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const loginWithTheLastName = createMember('Dima')
console.log(loginWithTheLastName('Laptev'))
console.log(loginWithTheLastName('Petrov'))