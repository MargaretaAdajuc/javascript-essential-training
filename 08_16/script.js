/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
//import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST",
//   "../assets/images/everyday.svg"
// );

const content = backpackObjectArray.map((element) => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpackObjectArray[element.id]);

  newArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${element.image} alt="" />
    </figure>
    <h1 class="backpack__name">${element.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        element.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        element.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${element.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        element.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        element.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        element.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        element.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;
  return newArticle;
});

const main = document.querySelector(".maincontent");

content.forEach((element) => {
  main.append(element);
});
