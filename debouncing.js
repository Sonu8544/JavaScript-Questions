let count = 0;
function functionCaling() {
    console.log("Function Calling here", count++)
}

function deBounceFunction(data, time) {
    let newTime;
    return function (...argss) {
        if (time) clearTimeout(time);
        newTime = setTimeout(() => {
            data()
        }, time)
    }
}

const newFunctionCall = deBounceFunction(functionCaling, 500)