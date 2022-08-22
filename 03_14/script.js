/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const firstBook = new Book(
  "The Little Prince",
  "Antoine de Saint-Exupery",
  "Gallimard",
  1943,
  90,
  true,
  "April 21, 2020, 17:00:00 UTC"
);

console.log(firstBook);

const secondBook = new Book(
  "Cenusareasa",
  "Hans Christian Andersen",
  "Gallimard",
  1835,
  35,
  true,
  "May 07, 2021, 15:00:00 UTC"
);

console.log(secondBook);

const thirdBook = new Book(
  "Vina",
  "Camelia Cavadia",
  "Trei",
  2020,
  320,
  false,
  "June 21, 2021, 17:00:00 UTC"
);

console.log(thirdBook);

const fourthBook = new Book(
  "Sa nu ne facem de ras in fata furnicilor",
  "Iv cel Naiv",
  "Trei",
  2021,
  297,
  true,
  "August 14, 2022, 09:00:00 UTC"
);

console.log(fourthBook);

const fifthBook = new Book(
  "1984",
  "George Orwell",
  "Secker & Warburg",
  1949,
  348,
  false,
  "August 21, 2022, 17:00:00 UTC"
);

console.log(fifthBook);
