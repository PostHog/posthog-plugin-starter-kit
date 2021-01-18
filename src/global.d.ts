import type { RequestInfo, RequestInit, Response } from 'node-fetch'

export {}

declare global {
    const fetch: (url: RequestInfo, init?: RequestInit) => Promise<Response>
}
