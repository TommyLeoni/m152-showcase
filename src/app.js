"use strict";

let nicolasPortfolio = "<h1>lol</h1>";

const routes = {
  "/": null,
  "/nicolas": nicolasPortfolio/*,
  "/michel": michelPortfolio,
  "/tomaso": tomasoPortfolio,
  "/nicolas/details": nicolasDetails,
  "/michel/details": michelDetails,
  "/tomaso/details": tomasoDetails*/
};



function navigate(path) {
  console.log(routes[path]);
  let contentDiv = document.getElementById("content");
  contentDiv.innerHTML = routes[path];
}