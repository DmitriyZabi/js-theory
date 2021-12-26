const pCount = 10000000
let inCircleCount = 0;

for(let i = 0; i < pCount; i++)
{
    const pX = Math.random()
    const pY = Math.random()

    if(Math.sqrt(pX * pX + pY * pY) <= 1)
        inCircleCount++;
}

const pi = 4 * inCircleCount / pCount;

console.log(pi.toFixed(5))