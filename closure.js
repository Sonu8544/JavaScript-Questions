console.log("this is closure...")

function outerFunction() {
    const outerData = "Hello Outer";

    function innerFunction() {

        console.log(outerData)
    }
    return innerFunction;

}

let closurecalling = outerFunction();
closurecalling()

