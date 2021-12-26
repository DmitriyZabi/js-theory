// https://youtu.be/UGapN-hrekw

const person = {
    name: 'Dima',
    age: 29,
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo('WEB Dev', '11-22-33')
// person.logInfo.bind(lena, 'Junior', '44-55-66')()
// person.logInfo.apply(lena, ['Junior', '44-55-66'])
person.logInfo.call(lena, 'Junior', '44-55-66')


const arr = [1, 2, 3, 4, 5]
Array.prototype.multBy = function(n) {
    return this.map(i => i* n)
}

console.log(arr.multBy(5))