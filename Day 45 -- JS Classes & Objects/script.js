let obj = {
    a: 1,
    b: "Harry"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// prototype is kind of inheritance

console.log(rabbit)

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}


class Lion extends Animal {
    constructor(name){
        super(name) 
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)

console.log(l instanceof Animal);
console.log(l instanceof Lion);
console.log(a instanceof Animal);
console.log(a instanceof Lion);

/*
Lion is inheriited Animal Property also that's why l is intance of both Animal and Lion

a is instance of only Animal
 */

/*
extends used for inheritence of Animal , now liion inherit all the properties of Animal
 */