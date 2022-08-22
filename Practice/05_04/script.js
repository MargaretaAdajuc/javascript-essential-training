/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document
  .querySelectorAll("button")
  .forEach((item) => (item.style.color = "magenta"));

let feature = document.querySelector(".feature");

let color = feature.querySelectorAll(".feature > span");

console.log(color);
