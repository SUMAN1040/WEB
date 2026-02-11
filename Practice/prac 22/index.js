//This KeyWord

// The this keyword provides a way to acess the current execution context - the owner of the function
// if a person is performing an action, method this refers to that person(the object)

//This in an object method
let person = {
    name: "Suman",
    greet: function(){
        console.log(`Hey! I'm ${this.name}`);
    }
};

person.greet();


//Example 2

console.log(this);

//This Inside a Method vs. a Function
let car = {
    brand: "Toyota",
    showBrand: function(){
        console.log(this.brand);
    }
};
car.showBrand();

let display = car.showBrand;
display();



//This is arrow functions
let user = {
    name1: "Suman",
    greet: () => {
        console.log(`Hey! I'm ${this.name1}`);
    }
};

user.greet();