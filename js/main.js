'use strict';
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const closeItem = document.querySelector(".close");
cartButton.addEventListener("click",function(event){
    modal.classList.add("is-open");
});
closeItem.addEventListener("click",function(event){
    modal.classList.remove("is-open");
});

new WOW().init();