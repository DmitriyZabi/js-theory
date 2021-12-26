// https://youtu.be/7wtbNNiOh30

const array = [10, 20, 30, 40]
const str = 'Hello'
const iter1 = array[Symbol.iterator]()
/*console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())*/

for(let i of iter1){
    console.log(i)
}