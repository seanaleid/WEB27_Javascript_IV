// constructor function
// parent function the old way
// function Character(attributes) {
//     this.name = attributes.name,
//     this.location = attributes.location, 
//     this.phrase = attributes.phrase
// }

// Character.prototype.speak = function(){
//     return `${this.name} says ${this.phrase}`;
// }


// // class is not hoisted - that means that if we are putting our information above a class we have referenced it will not work
// // class use strict mode - every scope inside a class is utilizing 'use strict' - it prevents window binding, it will return undefined, it makes you write cleaner code with errors if you don't
// // methods are a special syntax that is reserved for classes 
// // a constructor function is visible 
// // convert to class syntax
// class Pet{
//     constructor(attributes){
//         this.name = attributes.name,
//         this.location = attributes.location,
//         this.phrase = attributes.phrase
//     } // methods go here
//     speak(){
//         return `${this.name} says ${this.phrase}`;
//     }
// }

// // child the old way
// // function Child(childAttributes){
// //     Character.call(this, childAttributes) // binding this to parent
// //     this.isChild = childAttributes.isChild; // this will be fore special attributes to the child
// // }

// // Child.prototype = Object.create(Character.prototype);

// // convert child in class syntax
// class Child extends Pet{
//     constructor(childAttributes){
//         // if we have any special attributes for kid they would go here
//         super(childAttributes)
//     } // if we had any specific methods for the child they go here
// }

// const character1 = new Child({
//     name: 'Ash',
//     location: 'Kanto',
//     phrase: 'Gotta catch em all'
// });

// const character2 = new Child({
//     name: 'Misty',
//     location: 'Kanto',
//     phrase: 'Kawaiiiiiii'
// })

// console.log(character1.speak());
// console.log(character2.speak());

class Parent {
    constructor(attributes){
        this.name = attributes.name,
        this.location = attributes.location,
        this.work = attributes.work
    } // write methods here
    job(){
        return `${this.name} is a ${this.work}`;
    }
} // this closes the parent

class Child extends Parent{
    constructor(genes){
        super(genes) // this replaces parent.call
        this.major = genes.major
    }// this is where any special methods for the child go
    study(){
        return `${this.name} is studying ${this.major}`;
    }
}

class Grandchild extends Child{
    constructor(genes){
        super(genes);
        this.toy = genes.toy
    }
    play(){ 
        return `${this.name} plays with ${this.toy}`
    }
}

const mom = new Parent({
    name: 'Mom',
    location: 'USA',
    work: 'Computer Programmer'
})

const child = new Child({
    name: 'Me',
    location: 'USA',
    work: 'student',
    major: 'Computer Science'
})

const grandBaby = new Grandchild({
    name: 'Jake',
    location: 'USA',
    work: 'baby',
    major: 'first words',
    toy: 'binky'
})

console.log(mom.job());
console.log(child.job(), 'and', child.study());
console.log(grandBaby.job());
console.log(grandBaby.study());
console.log(grandBaby.play());
