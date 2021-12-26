// контекст this. Как работает call, bind, apply
// https://youtu.be/UGapN-hrekw

//this
function hello() {
    console.log('hello', this)
}
hello()

const person = {
    name: 'Dima',
    age: 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(window)
}
person.sayHello()
person.sayHelloWindow()