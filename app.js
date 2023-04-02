const itemCounter = document.querySelectorAll(".item-counter");
const cartBtn = document.querySelectorAll(".cart-btn");
const numProduct = document.querySelectorAll("span");
const plus = document.querySelectorAll(".increment");
const minus = document.querySelectorAll(".decrement");
const shopCounter = document.querySelector(".shop-counter");
let detector = false;
const showCounters = () => {
  for (let i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener("click", () => {
      itemCounter[i].classList.remove("invisible");
      let num = parseInt(numProduct[i].innerHTML);
      numProduct[i].innerHTML = num + 1;
      detector = true;
      shoppingCartCounter();
      detector = false;
    });
  }
};

const increment = () => {
  for (let i = 0; i < numProduct.length; i++) {
    plus[i].addEventListener("click", () => {
      let num = parseInt(numProduct[i].innerHTML);
      numProduct[i].innerHTML = num + 1;
      detector = true;
      shoppingCartCounter();
    });
  }
};
const decrement = () => {
  for (let i = 0; i < numProduct.length; i++) {
    minus[i].addEventListener("click", () => {
      let num = parseInt(numProduct[i].innerHTML);
      if (parseInt(numProduct[i].innerHTML) == 1) {
        itemCounter[i].classList.add("invisible");
        detector = false;
        shoppingCartCounter();
        numProduct[i].innerHTML = 0;
      } else {
        numProduct[i].innerHTML = num - 1;
        detector = false;
        shoppingCartCounter();
      }
    });
  }
};

const shoppingCartCounter = () => {
    let counter = parseInt(shopCounter.innerHTML);
    if(detector){
        shopCounter.innerHTML = counter + 1;
    } else if(!detector){
        shopCounter.innerHTML = counter - 1;
    } else if(shopCounter.innerHTML < 0){
        shopCounter.innerHTML = 0;
    }
}

showCounters();
increment();
decrement();