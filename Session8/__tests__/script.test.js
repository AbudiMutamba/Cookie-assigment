const {notify,validateInput} = require('../src/script')

test('Must be function', () => {
    expect(typeof notify).toBe("function")
    let result = notify();
    expect(result).not.toBeUndefined()
    expect(typeof result === 'string').toBe(true)
})

describe('Picking input', () => {
    test('validateInput Must be a function', () => {
        expect(typeof validateInput === 'function').toBeTruthy()   })
    
        
    test('picking Must return true', () => {
            expect( pickInfo('live')).toBeTruthy() 
    })
});

