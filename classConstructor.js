console.log("Class constructor here...")

class person {
    constructor(name, home, age) {
            this.name = name,
            this.home = home,
            this.age = age
            console.log(this.name)
    }

    heySonu() {
        console.log(`Hey bro what is your name ${this.name} and whete is your home ${this.home} and how year old you gies ${this.age}`)
    }
}

const personVariable = new person("Sonu kumar", "Delhi", 22);
personVariable.heySonu()