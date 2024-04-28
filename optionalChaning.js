console.log("Optional chaning");

const user = {
    firstName: "Sonu",
    lastName: "Kumar",
    addredss: {
        home: "shamho",
        wad: 5,
        ps: "shamho",
        distic: "begusarai",
        state: "Bihar"
    },
    getFullName: function(){
        return user.firstName + " " + user.lastName;
    }
}


console.log(user)
console.log(user?.name?.address)
console.log(user.getFullName())


