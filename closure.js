console.log("this is closure...")

function outerFunction() {
    const outerData = "Hello Outer";

    function innerFunction() {
        let innerData = "Hello Inner"
        console.log(outerData)
    }
    return innerFunction;
}

let closurecalling = outerFunction();
closurecalling()

