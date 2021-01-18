export interface HelloOptions {
    log?: boolean
}

export function hello(options?: HelloOptions): string {
    const messageForYou = 'This is where it all starts'
    if (options?.log) console.log(messageForYou)
    return messageForYou
}

hello()
