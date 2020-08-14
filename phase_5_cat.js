function Cat (name,owner) {
        this.name = name;
        this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    return `${this.owner} loves ${this.name}`;
}

let gary = new Cat("gary","griffiths");
let clea = new Cat("clea","griffiths")
console.log(gary.cuteStatement());

Cat.prototype.cuteStatement = function() {
    return `Everyone loves ${this.name}`;
}

console.log(gary.cuteStatement());

Cat.prototype.meow = function() {
    return `${this.name} says meow`
}

console.log(gary.meow());

gary.meow = function() {
    return `purr`;
}

console.log(gary.meow());
console.log(clea.meow());
