let user = {
  name: "nitin",
};
console.log(`User object`, user);

let score = [1, 2, 3];

// ex 1
function car() {
  console.log(`Car instance created. Color`);
}
car.prototype.color = "Red";
car.prototype.drive = function () {
  console.log(`Driving the car painted in ${this.color}`);
};
// console.log(`My car is on ${car.prototype.color} color`);

// ex 2
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
Point2D.prototype.move = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

var p1 = new Point2D(1, 2);
p1.move(3, 4);
// console.log("New X:", p1.x); // 4
// console.log("New Y:", p1.y); // 6

// ex 3
function Users(user) {
  this.name = user;
}
Users.prototype.getUderDetails = function () {
  console.log(`Username is:`, this.name);
};

let user1 = new Users("Nitin");
let user2 = new Users("Swati");

user1.getUderDetails();
user2.getUderDetails();
