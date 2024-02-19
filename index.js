// Example plugin method for modifying events
export function processEvent(event, { config }) {
    if (!event.properties) event.properties = {}
    event.properties['greeting'] = config.greeting
    return event
}