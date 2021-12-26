const players = [
    'Zabivalkin',
    'nullxdth',
    'rapha',
    'scept1c',
    'unknown00112233'
]

const url = 'https://quake-stats.bethesda.net/api/v2/Player/Stats?name='
//const url = 'https://stats.quake.com/api/v2/Player/GamesSummary?name='

for(let player in players)
{
    fetchBethesda(players[player])
}

async function fetchBethesda(name) {
    try {
        const response = await fetch(`${url}${name}`)
        const data = await response.json()
        console.log(data)
    }
    catch(e) {
        console.error(e)
    }
    finally {
        
    }


/*
    try {
        const response = await fetch(`https://dev.quake-champions.com/apicall.php`, {
            method: 'POST'
        })
        const data = await response.json()
        console.log(data)
    }
    catch(e) {
        console.error(e)
    }
    finally {
        
    }
    */
}
