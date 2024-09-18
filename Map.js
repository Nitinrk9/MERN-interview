const contacts = new Map();
contacts.set("Nitin", { phone: "12345", address: "pune" });
contacts.set("Swati", "Wife");
console.log(contacts.has("Nitin"), contacts.has("nitin"));

contacts.set("Swati", "Wifeee"); //override old value
contacts.set("Pravin", "brother");
console.log(contacts);
contacts.delete("Pravin");
console.log(contacts, contacts.size, contacts.get("Nitin"));

const newEnteriesarr = contacts.entries(); //Returns a new Iterator object => array of [key, value]
console.log(newEnteriesarr.next().value); // [ 'Nitin', { phone: '12345', address: 'pune' } ]
console.log(newEnteriesarr.next().value); // [ 'Swati', 'Wifeee' ]

const newValuesarr = contacts.values(); //Returns a new Iterator object => array of [key, value]
console.log(newValuesarr.next().value); // { phone: '12345', address: 'pune' }
console.log(newValuesarr.next().value); // Wifeee

console.log(`Keys: `);
for (const keys of contacts.keys()) {
  console.log(keys);
}

console.log(`Values: `);
for (const val of contacts.values()) {
  console.log(val);
}
for (const [key, value] of contacts) {
  if (typeof value === "object") {
    console.log(`${key} =`, value);
  } else {
    console.log(`${key} = ${value}`);
  }
}

//Cloning Maps
const original = new Map([[1, "one"]]);
const clone = new Map(original);
console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)

//Merging Maps
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);
console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
