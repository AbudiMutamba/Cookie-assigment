const HANDLE_NAME = require('../../handleName')
/**
 * Grouping tests
 * For example you mught have a unit upon which you must test for type, value and more.
 */

describe('Name handling', () => {

    test('Not Undefined', () => {
        expect(HANDLE_NAME('David')).not.toBeUndefined()
    })

    test('Name David toBe David', () => {
        expect(HANDLE_NAME('David')).toBe('David')
    })

    test('Name david toBe David', () => {
        expect(HANDLE_NAME('david')).toBe('David')
    })

    test('Name daVid toBe David', () => {
        expect(HANDLE_NAME('daVid')).toBe('David')
    })

    test('Name daVid toBe David', () => {
        expect(HANDLE_NAME('daViD')).toBe('David')
    })

    test('Name David Wampamba toBeFalsy', () => 
    {
        expect(HANDLE_NAME('David Wampamba')).toBeFalsy()
    })
})