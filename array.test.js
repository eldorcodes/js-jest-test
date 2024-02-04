const array = require('./array');

test('array should equal to array', () => { 
    expect(array()).toEqual([1,2,3]);
    expect(array()).not.toEqual({});
 });

 