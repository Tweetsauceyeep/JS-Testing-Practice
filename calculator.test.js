const calculator = require('./calculator')

test("add 2 numbers together", ()=>{
  expect(calculator.add(2,3)).toBe(5)
})

test("subtract 2 numbers", ()=>{
  expect(calculator.subtract(3,2)).toBe(1)
})

test("multiply 2 numbers together",()=>{
  expect(calculator.multiply(3,2)).toBe(6)
})

test("divide 2 numbers",()=>{
  expect(calculator.divide(100,2)).toBe(50)
})
