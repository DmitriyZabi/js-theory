console.group('Example 1: string generator')

function* strGen() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const strHello = strGen()
console.log(strHello.next())
console.log(strHello.next())
console.log(strHello.next())
console.log(strHello.next())
console.log(strHello.next())
console.log(strHello.next())

console.groupEnd()

//

console.group('Example 2: num generator with use generators')

function* iterWithGenerator(n = 10){
    for(let i = 0; i < 10; i++){
        yield i
    }
}
const iterWithGenerator_ = iterWithGenerator(3)
console.log(iterWithGenerator_.next())
console.log(iterWithGenerator_.next())
console.log(iterWithGenerator_.next())
console.log(iterWithGenerator_.next())
console.log(iterWithGenerator_.next())

console.groupEnd()

//

console.group('Example 3: num generator without use generators')

const iterWithoutGenerator = {
    gen(n = 10){
        let i = 0
        return {
            next() {
                if(i < n){
                    return { value: ++  i, done: false }
                }
                return { value: void 0, done: true }
            }
        }
    }
}

const iterWithoutGenerator_ = iterWithoutGenerator.gen(3)
console.log(iterWithoutGenerator_.next())
console.log(iterWithoutGenerator_.next())
console.log(iterWithoutGenerator_.next())
console.log(iterWithoutGenerator_.next())

console.groupEnd()

//

console.group('For of')

for(let i of 'Hello'){
    console.log(i);
}

for(let i of [1, 3, 5]){
    console.log(i);
}

console.groupEnd()

//

console.group('Symbol.iterator');

const array = [10, 20, 30, 40]
const iter1 = array[Symbol.iterator]()

for(let i of iter1){
    console.log(i)
}

console.groupEnd()