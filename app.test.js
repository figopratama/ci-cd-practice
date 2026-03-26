const { greet, add } = require('./app');

test('greet returns correct greeting', () => {
  expect(greet('Figo')).toBe('Hello, Figo!');
});

test('add returns correct sum', () => {
  expect(add(2, 3)).toBe(5);
});

test('add handles negative numbers', () => {
  expect(add(-1, 1)).toBe(0);
});