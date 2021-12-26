// String
const age = 28
const name = 'Дима'
//console.log('Имя: ' + name + ', возраст: ' + age + ' лет')
console.log(`Имя: ${name}, возраст: ${age} лет и ${age > 10 ? 'я старше 10' : 'я младше 10' }`)

const output = 
`<div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>`

console.log(output)

const str = "Привет"
console.log('str =', str)
console.log('str.length', str.length)
console.log('str.toLowerCase', str.toLowerCase())
console.log('str.toUpperCase', str.toUpperCase())
console.log('str.charAt(2)', str.charAt(2))
console.log(`str.indexOf('ет')`, str.indexOf('ет'))
console.log(`str.indexOf('!!!!')`, str.indexOf('!!!'))
console.log(`str.startsWith('При')`, str.startsWith('При'))
console.log(`str.startsWith('при')`, str.startsWith('при'))
console.log(`str.toLowerCase().startsWith('при')`, str.toLowerCase().startsWith('при'))
console.log(`str.endsWith('вет')`, str.endsWith('вет'))
console.log(`str.endsWith('!!!')`, str.endsWith('!!!'))
console.log('str.repeat(3)', str.repeat(3))

const needTrim = '            str        '
console.log('str =', needTrim)
console.log('str.trim()', needTrim.trim())
console.log('str.trimLeft()', needTrim.trimLeft())
console.log('str.trimRight()', needTrim.trimRight())

function logPerson(s, name, age){
    if(age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}`
}

const name1 = 'Дима'
const name2 = 'Вася'
const age1 = 28
const age2 = -1

const output1 = logPerson`Имя: ${name1}, возраст: ${age1}`
const output2 = logPerson`Имя: ${name2}, возраст: ${age2}`
console.log(output1)
console.log(output2)