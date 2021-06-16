const { createEvent, createIdentify, getMeta, resetMeta, clone } = require("@posthog/plugin-scaffold/test/utils");

const { processEvent } = require("./index");

beforeEach(() => {
    // Making sure plugin meta has our custom test config
    resetMeta({
        config: {
            greeting: "Dzień dobry!",
        },
    });
});

test("processEvent adds properties", async () => {
    // Create a random event
    const event0 = createEvent({ event: "booking completed", properties: { amount: "20", currency: "USD" } });

    // Must clone the event since `processEvent` will mutate it
    const event1 = await processEvent(clone(event0), getMeta());
    expect(event1).toEqual({
        ...event0,
        properties: {
            ...event0.properties,
            greeting: "Dzień dobry!",
            greeting_counter: 0,
            random_number: 4,
        },
    });

    const event2 = await processEvent(clone(event0), getMeta());
    expect(event2).toEqual({
        ...event1,
        properties: {
            ...event1.properties,
            greeting_counter: 1,
        },
    });

    const event3 = await processEvent(clone(event0), getMeta());
    expect(event3).toEqual({
        ...event2,
        properties: {
            ...event2.properties,
            greeting_counter: 2,
        },
    });
});

test("processEvent does not crash with identify", async () => {
    const defaultHelloWorldProperties = Object.freeze({
        greeting: "Dzień dobry!",
        greeting_counter: 0,
        random_number: 4,
    });
    // Create a random event
    const event0 = createIdentify();
    // Must clone the event since `processEvent` will mutate it
    const { properties, ...restOfEvent1 } = await processEvent(clone(event0), getMeta());
    expect(restOfEvent1).toEqual(event0);
    expect(properties).toEqual(defaultHelloWorldProperties);
});
