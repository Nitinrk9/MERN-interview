const exMethodFunctionBorrow = function (para1, para2) {
  console.log(`${this.firstName} ${this.lastName} ${para1} ${para2}`);
};

const employee = {
  firstName: "Nitin",
  lastName: "Kam",
};

const customer = {
  firstName: "Rajesh",
  lastName: "Kumar",
};

//now we want to use exMethodFunctionBorrow method using fn borrowing principle
exMethodFunctionBorrow.call(employee, "Emp A", "Emp B");
exMethodFunctionBorrow.apply(customer, ["Cust A", "Cust B"]);
const bindVar = exMethodFunctionBorrow.bind(customer);
bindVar("Cust A bind", "Cust B bind");

// solution 2 use this bind method as an event handler, when user click on button
// const obj = document.getElementById("btn");
// obj.addEventListener("click", exMethodFunctionBorrow.bind(customer, "X", "Y"));
