/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const skincare = [
  "micellar water",
  "cleanser",
  "toner",
  "essence",
  "serum",
  "peeling",
  "moisturiser",
  "sunscreen",
];

console.log(skincare);

skincare.pop();

console.log(skincare);

skincare.unshift(skincare.pop());

console.log(skincare);

skincare.sort();

let found = skincare.find((element) => element === "serum");
console.log(found);

skincare.splice(skincare.indexOf(found), 1);

console.log(skincare);
