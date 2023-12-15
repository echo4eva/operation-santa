function createCounter(count) {
    
    // keep track of subscribers
    const subscribers = new Set()

    // add subscriber
    function subscribe(subscriber) {
        subscribers.add(subscriber)
    }

    // notify subscriber of updates
    function update(updater) {
        count = updater(count)
        subscribers.forEach(subscriber => subscriber(count))
    }
}

export const counter = createCounter(0)