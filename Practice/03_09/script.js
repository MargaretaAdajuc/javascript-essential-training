/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (newName) {
    this.name = newName;
  },
  newVolume: function (newVolume) {
    this.volume = newVolume;
  },
  newColor: function (newColor) {
    this.color = newColor;
  },
  newPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};

console.log("Left strap lenght before: ", backpack.strapLength.left);
console.log("Right strap lenght before: ", backpack.strapLength.right);
console.log("Name before: ", backpack.name);
console.log("Volume before: ", backpack.volume);
console.log("Color before: ", backpack.color);
console.log("Number of pockets before: ", backpack.pocketNum);

backpack.newStrapLength(20, 40);
backpack.newName("Vacay backpack");
backpack.newVolume("60");
backpack.newColor("pink");
backpack.newPocketNum(20);

console.log("Left strap lenght after: ", backpack.strapLength.left);
console.log("Right strap lenght after: ", backpack.strapLength.right);
console.log("Name after: ", backpack.name);
console.log("Volume after: ", backpack.volume);
console.log("Color after: ", backpack.color);
console.log("Number of pockets after: ", backpack.pocketNum);
