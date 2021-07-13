//const { TestWatcher } = require('jest')
const {sum, substract} = require('./calculate')

// test ('add 1  + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test ('add 0 + 0 to equal 0', () => {
//     expect(sum(0, 0)).toBe(0);
// });

// test ('returns false if no argument provided ', () => {
//     expect(sum()).toBe(false);
// });

// test ('returns false if 1 argument provided ', () => {
//     expect(sum(2)).toBe(false);
// });

// test ('returns false if one argument is a string ', () => {
//     expect(sum('3',3)).toBe(false);
// });

//Subtraction test
test( 'Subtract 4 - 2 toBe 2', () => {
   //Testing for the type and vaue 
   expect (substract(4, 2)).toBe(2)
});

test( 'Subtract 4 - 2 toBe 2', () => {
    //Testing for the type and vaue 
    expect (typeof substract(4, 2)).toBe('number')
 });
 
 test( 'Subtract "4" - 2 toBe falsy', () => {
    //Testing for the type and vaue 
    expect (substract("4", 2)).toBeFalsy()
 });
 
 test( `Subtract '4' - '2' toBe falsy`, () => {
    //Testing for the type and vaue 
    expect (substract('4', '2')).toBeFalsy()
 });
 
 test( `Subtract 4 - "2" toBe falsy`, () => {
    //Testing for the type and vaue 
    expect (substract(4, "2")).toBeFalsy()
 });

 test( 'Subtract 2 - 2 toBe falsy', () => {
    //Testing for the type and vaue 
    expect (substract(2, 2)).toBeFalsy()
 });

 test( 'Subtract 10 - 10 toBe 0', () => {
    //Testing for the type and vaue 
    expect (substract(10, 10)).toBe(0)
 });
