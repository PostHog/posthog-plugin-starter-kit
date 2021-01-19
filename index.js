// Some internal library function
async function getRandomNumber() {
    return 4 // remove this line to get an actual random number from random.org – caution, rate limited to 10 events/s!
    const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new'
    )
    return parseInt(await response.text())
}

async function setupPlugin({ config }) {
    console.log(`Setting up the plugin:\n${config.greeting}`)
}

async function processEvent(event, { config, cache }) {
    const counterValue = (await cache.get('greeting_counter', 0))
    cache.set('greeting_counter', counterValue + 1)
    if (!event.properties) event.properties = {}
    event.properties['greeting'] = config.greeting
    event.properties['greeting_counter'] = counterValue
    event.properties['random_number'] = await getRandomNumber()
    return event
}

// The famed Hello World plugin itself
module.exports = {
    setupPlugin,
    processEvent
}
