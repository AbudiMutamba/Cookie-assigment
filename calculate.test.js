// const sum = require('./calculate')

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

test ('returns false if one argument is not a number', () => {
    expect(sum('3',3)).toBe(false);
});

