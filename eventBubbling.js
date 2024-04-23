const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

// bubbling
red.addEventListener('click', (e) => {
    console.log("Red click")
})

green.addEventListener('click', (e) => {
    console.log("Green click")
    e.stopPropagation()
})

blue.addEventListener('click', (e) => {
    console.log("Blue click")
})

// Captruing
// red.addEventListener('click', (e) => {
//     console.log("Red click")
// }, true)

// green.addEventListener('click', (e) => {
//     console.log("Green click")
// }, true)

// blue.addEventListener('click', (e) => {
//     console.log("Blue click")
// }, true)


// // Stop propgation
// green.addEventListener('click', (e) => {
//     console.log("Green click")
//     e.stopPropagation()
// })
