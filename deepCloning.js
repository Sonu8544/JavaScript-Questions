const obj = {
    name: "John",
    home: "Shambo",
    age: 30,
    isAdmin: false,
};

const obj2 = obj;
obj.name = "Satyam"
console.log(obj.name)
console.log(obj2.name)