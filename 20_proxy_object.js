const person = {
    name: 'Dima',
    age: 28,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)

        //
        if(!(prop in target)) {
            return prop
            .split('_')
            .map(p => target[p])
            .join(' ')
        }
        //
        
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        }
        else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting prop ...', prop)
        delete target[prop]
        return true
    }
})

op.age
op.age = 26
op.address = 12
