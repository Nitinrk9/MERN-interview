function Phone() {
  this.modelName = "";
  this.getModelName = function () {
    return this.modelName;
  };
}

function Samsung() {
  this.modelName = "S-Galaxy";
  this.galaxyFeature = function () {
    console.log("inside samsung feature function " + this.modelName);
  };
}

// q) Now we want to access getModelName from Samsung using proto. inheritance?
// see below answer
Samsung.prototype = new Phone();
let obj = new Samsung();
console.log(`Model name is:`, obj.getModelName());
obj.galaxyFeature();

// Ex 2
function Car(model, year) {
  this.model = model;
  this.year = year;
}

// create multiple objects
let c1 = new Car("Mustang", 1964);
let c2 = new Car("Corolla", 1966);

// add property
Car.prototype.color = "Red";

// add method
Car.prototype.drive = function () {
  console.log(`Driving ${this.model}`);
};

// display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);
console.log(`${c2.model} color: ${c2.color}`);

// display added method using c1 and c2 objects
c1.drive();
c2.drive();
