const {evaluation, person, fetchData} =  require('./matchers')

//Using toBe on Person 
test('person.firstname toBe David', () => {
    expect(person.firstname).toBe('David')
})

// toBe matcher is better for single values but toEqual and toStrictEqual are good for objects since they recursively run through the object keys 

//This test will fail
// test('Object values', () => {
//     expect(person).toBe ({ 'firstname': 'david', 'lastname' : 'Wampamba'})
// })

//This test will pass
test('Object values', () => {
    expect(person).toStrictEqual({ 'firstname': 'David', 'lastname' : 'Wampamba'});
})

// In JavaScript everything that if statement will evaluate as false is considered falsy. So 0, nukk, undefined, false, []

test('Test null', () => {
    expect(null).toBeNull()
})

test('Null toBeFalsy', () => {
    expect(null).toBeFalsy()
})

test('Empty arrat is considerd false', () => {
    expect([]).toBeTruthy()
})
 
//Asynchronous

//Don't do this!
// test('the data is peanut butter', () => {
//     function callback (data) { 
//       expect (data).tobe('peanut butter');
//     }

//     fetchData(callback);
// });

//async / await

/* test('the data is peanut butter', done => {
    function callback(data) {
      try{
          expect(data).toBe('peanut butter');
          done();
        } catch (error) {
            done(error);
        }
    }
});

test('the data is peanut butter', () => {
    return fetchData().then(data { 
      expect (data).tobe('peanut butter');
    });
});
*/

test('the data is peanut butter', async () => {
    let data = await fetchData()
      expect(data).toBe('peanut butter');
});