let {firstName , fullName} = require('../../integration')

describe('They must be functions', () =>{ 
    test('firstName and fullName toBe functions', () => {
        expect(typeof firstName).toBe('function');
        expect(typeof fullName).toBe('function');
    });

   
})

describe('Not to be udefined', () => {

    test('firstName and fullName not toBeUndefined', () => {
        expect(firstName()).not.toBeUndefined();
        expect(fullName()).not.toBeUndefined();
    });


    test('Data type of firstName and fullName toBe string', () => {
        let fname = firstName();
        let full_name = fullName();

        expect(typeof fname).toBe('string');
        expect(typeof full_name).toBe('string');
    });
});

describe('Integration Tests', () => {
    test('Full Name toBe atleast two names', () => {
        let fname = firstName('Abudi');
        //fname = ""
        
        let full_name = fullName( fname, 'Mutamba');
        //'Abudi Mutamba'

        let nameChunks = full_name.split(" ")
        // namechunk[0] = "Abudi"
        // naemchunk[1]  = "Mutamba"

        expect(nameChunks.length).toBeGreaterThan(1);
        expect(nameChunks[0]).not.toBe("");
        expect(nameChunks[1]).not.toBe("");

    });
});

