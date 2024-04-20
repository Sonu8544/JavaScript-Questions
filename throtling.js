let count = 0;

function throt() {
    setTimeout(() => {
        document.getElementById("button").disabled = false;
    }, 1000)
    console.log("Throt Call...", count++);
}

function throtling(fun, ti) {
    let timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                document.getElementById("button").disabled = true;
                console.log("Throttling is calling ...");
                fun()
            }, ti);
        }
    };
}

const throtlingCall = throtling(throt, 1000);
