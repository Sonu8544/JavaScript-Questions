console.log("Higher order function...");

// function fun(a) {
//     console.log(a)
// }

// fun("Hello Sony")
// fun({ name: "sonu", age: 50 })
// fun([1, 2, 3, 4])

// console.dir(typeof (fun))
// console.dir(123)



const result = highorderFunction(add(10, 20));
console.log("Add", result)
const abs = highorderFunction(subtract(10, 20));
console.log("subtract", abs)

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function highorderFunction(fun) {
    return fun;
}


