/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

function addElement() {
  const main = document.querySelector("main");
  main.appendChild(document.createElement("p"));
}

addElement();

const lunchBox = {
  name: "Frog cookie",
  color: "green",
  quantity: 8,
  size: "small",
  newName: (() => {
    console.log(this.name);
  })(),
};

const addFood = function (currentBox) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
      <h1>${currentBox.name}</h1>
      <ul>
        <li>Volume: ${currentBox.color}</li>
        <li>Color: ${currentBox.quantity}</li>
        <li>Number of pockets: ${currentBox.size}</li>
      </ul>
    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addFood(lunchBox));
