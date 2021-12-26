// https://youtu.be/np08WdS9OXg
// Functions

const log = text => `Text: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args){
        console.log('Calling fn ...')

        return target.apply(thisArg, args).toUpperCase()
    }
})