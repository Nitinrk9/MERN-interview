// Destructuring an object
let user = {
  firstname: "nitin",
  lastname: "Kam",
  address: {
    city: "pune",
    pincode: "411033",
  },
  cardDetails: {
    adhar: 123456,
    pancard: 145214,
    voterid: 45545,
  },
  isMarried: true,
};

let {
  firstname: fname,
  lastname,
  address: { city, pincode: pin },
  ...cardData
} = user;
console.log(fname, lastname, city, pin);
console.log(cardData); // use of rest operator

// 1 creating an object
const g = new Object();
g.foo = 43;
// console.log(o); //{ foo: 43 }

// 2 cloning an object
const obj = {
  a: 1,
  address: {
    pincode: 413515,
    city: "Ahmedupr",
  },
};
const copy = Object.assign({}, obj); // ex of shallow copy
console.log(copy);
copy.a = 99;
copy.address.city = "Pune";
obj.address.pincode = 411033;
console.log(obj, copy);
// Note - Shallow copy meaning is, the nested properties of an object will change in both the objects if we do changes in any 1 object. But changing non-nested objects will not affect other object to change.

// Deep clone example
const newobj = {
  a: 1,
  b: {
    c: 2,
    d: 4,
  },
};
const deepClone = structuredClone(newobj);
deepClone.b.c = 3;
console.log(deepClone, newobj);

// 3 Merging objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj6 = Object.assign(o1, o2, o3);
console.log(obj6); // { a: 1, b: 2, c: 3 }
console.log(o2, o1 === obj6); // { a: 1, b: 2, c: 3 }, true -> target object itself is changed.

//Merging objects with same properties
const o5 = { a: 1, b: 1, c: 1 };
const o6 = { b: 2, c: 2 };
const o7 = { c: 3 };

const obj8 = Object.assign({}, o5, o6, o7);
console.log(obj8); // { a: 1, b: 2, c: 3 }

// 4 creating new object
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction(); // output: "My name is Matthew. Am I human? true"
person.printIntroduction(); // output: My name is undefined. Am I human? false
console.log(me === person); // false

// 5 define obj properties - defineProperties
const ox = {};
Object.defineProperties(ox, {
  prop1: {
    value: 123,
    writable: true, // true will override this value
  },
  prop2: {
    value: "Swati",
    writable: false, // false will avoid overriding of this value
  },
});
// console.log(ox);
ox.prop1 = 1234;
ox.prop2 = "Nitin";
console.log(ox.prop1, ox.prop2, ox);

// 6 defineProperty
const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77; // Throws an error in strict mode
// console.log(object1.property1); // Expected output: 42

// ex 2 Writable attribute
const o = {};

// with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
}); // 'a' property exists in the o object and its value is 37

// with defineProperty with an accessor property descriptor
let bValue = 48;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
console.log(o.a, o.b);

//ex 3 Enumerable attribute
const x = {};
Object.defineProperty(x, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(x, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(x, "c", {
  value: 3,
}); // enumerable defaults to false
x.d = 4; // enumerable defaults to true when creating a property by setting it
Object.defineProperty(x, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(x, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in x) {
  console.log(i); // a d
}
console.log(Object.keys(x));
// ----------- end of Object define Properties //

// 7 Object.entries() - returns an array of key val pair [ [key, value] ]
const object7 = {
  a: "somestring",
  b: 42,
};
console.log(Object.entries(object7)); // [ [ 'a', 'somestring' ], [ 'b', 42 ] ]
// for (const [key, value] of Object.entries(object7)) {
//   console.log(`${key}: ${value}`);
// }
const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// ex 2
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

//ex 3 loop
const obj12 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj12)) {
  // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj12).forEach(([key, value]) => {
  // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

// 8 Object.freeze()
const objs = {
  prop: 42,
};
Object.freeze(objs);
objs.prop = 33; // Throws an error in strict mode
console.log(objs.prop); // Expected output: 42

//ex 2 freeze an array
const a = [0];
Object.freeze(a); // The array cannot be modified now.
a[0] = 1; // fails silently
// In strict mode such attempt will throw a TypeError
// Attempted to push
// a.push(2); // throws a TypeError

// ex of shallow freezing
const obj1 = {
  internal: {},
};
Object.freeze(obj1);
obj1.internal.a = "aValue";
console.log(obj1.internal.a); // 'aValue'

const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);
employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified
console.log(employee, employee.address.city); // "Noida"

// 8 fromEntries
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const objqw = Object.fromEntries(entries);
console.log(objqw); // Expected output: Object { foo: "bar", baz: 42 }

// ex of obj transformation
const object11 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object11).map(([key, val]) => [key, val * 2])
);
console.log(object2); // { a: 2, b: 4, c: 6 }

//9 getOwnPropertyNames
const object112 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object112));
// Expected output: Array ["a", "b", "c"]

// 10 hasOwn
const object81 = {
  prop: "exists",
};

// console.log(Object.hasOwn(object81, "prop")); // Expected output: true
// console.log(Object.hasOwn(object81, "toString")); // Expected output: false
// console.log(Object.hasOwn(object81, "undeclaredPropertyValue")); // Expected output: false

// 11 Object.is
// console.log(Object.is("1", 1)); // Expected output: false
// console.log(Object.is(NaN, NaN)); // Expected output: true
// console.log(Object.is(-0, 0)); // Expected output: false
// const obj4d = {};
// console.log(Object.is(obj4d, {})); // Expected output: false
// console.log(Object.is([], [])); // Expected output: false
// console.log(Object.is(NaN, Number.NaN)); // Expected output: true

// 12 isExtensible
// New objects are extensible.
const empty = {};
console.log(Object.isExtensible(empty)); // true
// They can be made un-extensible
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); // false
// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
console.log(Object.isExtensible(sealed)); // false
// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
console.log(Object.isExtensible(frozen)); // false

//13 is Frozen
const objectw1 = {
  property1: 42,
};
console.log("Frozen ex - ", Object.isFrozen(objectw1)); // Expected output: false
Object.freeze(objectw1);
console.log("Frozen ex - ", Object.isFrozen(objectw1)); // Expected output: true

//14 keys
const object1121 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1121)); // Expected output: Array ["a", "b", "c"]
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// 15 prvent extensible
const object91 = {};
Object.preventExtensions(object91);
try {
  Object.defineProperty(object91, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}

//16 Object.seal() - Sealing an object makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable.
const object1s = {
  property1: 42,
};

Object.seal(object1s);
object1s.property1 = 33;
console.log(object1s.property1); // Expected output: 33
delete object1s.property1; // Cannot delete when sealed
console.log(object1s.property1); // Expected output: 33

//17 Object.values()
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']
// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']
