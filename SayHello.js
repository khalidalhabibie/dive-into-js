//say hello to the world
console.log("Hello World \n")

const newline = "\n"

// using var and const, and try to explain what's different between them

var helloVar = "Hello World"
console.log("First helloVar :"  +helloVar + newline)

helloVar = "second Hello World"
console.log("Second helloVar :" + helloVar + newline)


const helloConst = "Hello World"
console.log("First helloConst :" + helloConst + newline)


// this is error, cause u can't modify const variabel
//const helloConst = "Second Hello World"
//console.log("Second helloConst :" + helloConst + newline)
// error : SyntaxError: Identifier 'helloConst' has already been declared