function functionOne() {
    return "Hello Sonu";
}
function functionTwo(fun) {
    console.log("Function 2")
    return fun()
}

const result = functionTwo(functionOne);
console.log(result)


console.log(a, "A")
let a = 10;
