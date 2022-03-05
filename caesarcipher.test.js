const caesarCipher = require('./caesarcipher')

test("caesarcipher thingy",()=>{
 expect(caesarCipher("hello", 1)).toBe("ifmmp")
})
