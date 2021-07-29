/**
 * @jest-environmemt jsdom
 */
const { doLogin } = require('../src/login')

test('Must be function', () => {

    expect(doLogin()).not.toBe(undefined)
    expect(typeof doLogin).toBe('function')
});