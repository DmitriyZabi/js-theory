// Number
const int = 42
const float = 42.42
const pow = 10e3

console.log('integer', int)
console.log('float', float)
console.log('pow', pow)
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow(2, 53) - 1', Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2 / 0)
const weird = 2 / undefined
console.log('2 / undefined', weird)
console.log('isNaN(2 / undefined)', Number.isNaN(weird))
console.log('isFinite(Infinity)', Number.isFinite(Infinity))
console.log('isFinite(42)', Number.isFinite(42))

const strInt = '42'
const strFloat = '42.42'
console.log(strInt + 2)
console.log(Number.parseInt(strInt) + 2)
console.log(Number(strInt) + 2)
console.log(+(strInt) + 2)

console.log('0.2 + 0.4', 0.2 + 0.4)
console.log('0.2 + 0.4 (toFixed(1))', (0.2 + 0.4).toFixed(1))

// BigInt
console.log(5647356376537563756475475647564754723123n)
console.log('typeof(5647356376537563756475475647564754723123n)', typeof(5647356376537563756475475647564754723123n))
console.log('10n - BigInt(4)', 10n - BigInt(4))

// Math
console.log('Math.PI', Math.PI)
console.log('Math.E', Math.E)
console.log('Math.sqrt(25)', Math.sqrt(25))
console.log('Math.pow(2, 3)', Math.pow(2, 3))
console.log('Math.abs(-5)', Math.abs(-5))
console.log('Math.max(1 , 2, 3, 4, 5)', Math.max(1 , 2, 3, 4, 5))
console.log('Math.min(1 , 2, 3, 4, 5)', Math.min(1 , 2, 3, 4, 5))
console.log('Math.floor(4.9)', Math.floor(4.9))
console.log('Math.ceil(4.9)', Math.ceil(4.9))
console.log('Math.round(4.9)', Math.round(4.9))
console.log('Math.trunc(4.9)', Math.trunc(4.9))
console.log('Math.random()', Math.random())

// Example

function getRandomBetween(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log('Random[5, 18]', getRandomBetween(5, 18))