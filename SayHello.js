//say hello to the world
console.log("Hello World \n")

const newline = "\n"

// using var and const, and try to explain what's different between them

console.log("var for varibel ")
var helloVar = "Hello World"
console.log("First helloVar :"  + helloVar )

helloVar = "second Hello World"
console.log("Second helloVar :" + helloVar + newline )

console.log("const for variabel")
const helloConst = "Hello World"
console.log("First helloConst :" + helloConst + newline)

// this is error, cause u can't modify const variabel
//const helloConst = "Second Hello World"
//console.log("Second helloConst :" + helloConst + newline)
// error : SyntaxError: Identifier 'helloConst' has already been declared



// how to using array 
console.log("how to using array ")
var helloArray = []

// push for add to the end
helloArray.push("World")

//unshifted for add to the top
helloArray.unshift("Hello")
console.log(helloArray + newline)


//how to using object literal or also we know dict 
console.log("how to using object literal")

var helloObjectLiteral =  {}

// first way how input data
helloObjectLiteral = {hello1:"worl1"}
console.log(helloObjectLiteral)

//second way how to input data
helloObjectLiteral.hello2 = "world2"
console.log(helloObjectLiteral)

// input list to object literal 
arraytoObjectLiteral = ["hello", "World"]
helloObjectLiteral.arrayIn = arraytoObjectLiteral
console.log(helloObjectLiteral)

// how to get your data like key 
console.log("get hello1 " + helloObjectLiteral.hello1)
console.log("get world in arrayIn: " + helloObjectLiteral.arrayIn[1] + newline)


// how to using function 
//def funct
console.log("def and call ur func")
function sayHello(magicWord){
    return ("hello " + magicWord)
}

// call function 
console.log(sayHello("Word"))

   














