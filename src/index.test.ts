import { hello } from '.'

describe('hello', () => {
    it('returns an informative message', () => {
        expect(hello({ log: false })).toStrictEqual('This is where it all starts')
    })
})
