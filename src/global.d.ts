export {}

import type { RequestInfo, RequestInit, Response } from 'node-fetch'

declare global {
    const fetch: (url: RequestInfo, init?: RequestInit) => Promise<Response>
}
