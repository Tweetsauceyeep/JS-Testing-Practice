const calculator = require('./calculator')

test("add 2 numbers together", ()=>{
  expect(calculator.add(2,3)).toBe(5)
})
