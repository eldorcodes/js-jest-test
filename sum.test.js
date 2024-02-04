const sum = require('./sum');

test('properly add two numbers', () => { 
    expect(sum(2,5)).toBe(7)
 });