// https://youtu.be/cS6nTVNzOPw


const person = Object.create(
{}, // тут прототип
{   // тут поля
    name: {
        value: 'Dima',
        enumerable: true, // участвует в перечислении (по умолчанию false)
        writable: true, // можно редактировать (по умолчанию false)
        configurable: true // можно удалять ключи объекта (по умолчанию false)
    },
    birthYear: {
        value: 29,
        enumerable: true
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            //document.body.style.backgroundColor = 'red'
            console.log('Person age set', value)
        }
    }
})

//delete(person.name)
console.log(person.age)
person.age = 100
console.log(person.age)

for(let key in person)
{
    if(person.hasOwnProperty(key))
    {
        console.log('Key:', key, person[key])
    }
}