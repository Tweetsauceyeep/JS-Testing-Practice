const reverseString = require('./reverseString');

test('takes a string and reverses it', () => {
  expect(reverseString('Hello')).toBe('olleH');
});
