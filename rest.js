console.log("Hello JavaScript!")
function restOprator(a, b, c, ...other) {
    console.log(other)
    return a + b + c;
}

const result = restOprator(12, 13, 14, 15, 16)
console.log(result)


console.log("Spread operators")

const spreadArray = ["Sonu", "Satyam", "Sohil"]
function spreadOperators(spread){
    return spread;
}

const ans = spreadOperators(spreadArray)
console.log(ans)
