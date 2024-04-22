const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(resolve("Hello Promise1"))
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(resolve("Hello Promise2"))
    }, 1000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(resolve("Hello Promise3"))
    }, 2000)
})

Promise.any([promise1, promise2, promise3])
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })


