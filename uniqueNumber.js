console.log("Unique number ...")

const number = [1, 2, 3, 4, 5, 1, 2, 3];

function remveDuplicate(arr) {
    return Array.from(new Set(arr))
}

const uniqueNumber = remveDuplicate(number);
console.log(uniqueNumber)