/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

let p = document.getElementsByTagName("p");

p?.classList?.add("first");
p?.classList?.add("paragraph");

p?.classList?.remove("paragraph");

let par = document.querySelector("p");

par.setAttribute("title", "abc");

par.getAttribute("title");

par.setAttribute("title", "Backpack paragraph");

par.style.color = "aquamarine";
