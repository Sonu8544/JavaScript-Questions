function javaScriptToJson(value) {
    try {
        return JSON.stringify(value)
    } catch (error) {
        console.log("Error", error)
    }
}

const obj = {
    name: "John",
    age: 30,
    isAdmin: false,
    hobbies: ["reading", "cooking", "traveling"],
    address: {
        city: "New York",
        country: "USA"
    }
};

const result = javaScriptToJson(obj);
console.log(result)