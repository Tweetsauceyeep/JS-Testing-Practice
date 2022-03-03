const capitalize = require('./capitalize')

test('capitalizes first letter in hello',()=>{
  expect(capitalize('hello')).toBe('Hello');
});
