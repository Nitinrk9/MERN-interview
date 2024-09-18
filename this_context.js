// 1 this behaviour
const Employee = {
  firstName: "Nitin",
  lastName: "Kam",
  getFullname: function () {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
  },
  getFriestList: () => {
    console.log("Inside arrow method");
    console.log(this, this.firstName);
  },
  exMethodFunctionBorrow: function (para1, para2) {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName} ${para1} ${para2}`);
  },
};

// Employee.getFullname(); // this belings to Employee obj here

const secVar = Employee.getFullname;
secVar(); // this belongs to window obj here

// Employee.getFriestList(); // this belongs to window obj here bcoz of arrow function

// 2 funcition borrowing ex

const Customer = {
  firstName: "Rajesh",
  lastName: "Kumar",
};

//now we want to use exMethodFunctionBorrow method of Employee obj using fn borrowing principle
Employee.exMethodFunctionBorrow.call(Customer, "A", "B");
Employee.exMethodFunctionBorrow.apply(Customer, ["A", "B"]);
const bindVar = Employee.exMethodFunctionBorrow.bind(Customer);
bindVar("A", "B");

// solution 2 use this bind method as an event handler, when user click on button
const btnClikc = document.getElementById("btn");
btnClikc.addEventListener(
  "click",
  Employee.exMethodFunctionBorrow.bind(Customer, "X", "Y")
);
