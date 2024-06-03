// tests/logic.test.js
const fizzBuzz = require('../src/logic');

test('FizzBuzz logic test', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(1)).toBe(1);
});
