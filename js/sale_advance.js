const products = [
  { id: 1, name: "オリジナルブレンド200g", price: 500 },
  { id: 2, name: "オリジナルブレンド500g", price: 900 },
  { id: 3, name: "スペシャルブレンド200g", price: 700 },
  { id: 4, name: "オリジナルブレンド200g", price: 1200 },
];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const addButtonElement = document.getElementById("addBtn");
const calcButtonElement = document.getElementById("calcBtn");
let purchases = [];

function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find((product) => product.id === targetId);
  const number = parseInt(numberElement.value) || 0;

  let purchase = {
    product,
    number,
  };

  // console.log(purchase);

  const existingPurchase = purchases.find(
    (purchase) => purchase.product.id === product.id
  );
  if (existingPurchase) {
    existingPurchase.number += number;
  } else {
    purchases.push({ product, number });
  }

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0);
}

function display() {
  return purchases
    .map((purchase) => {
      if (purchase.product) {
        return `${purchase.product.name} ${purchase.product.price}円:${purchase.number}点\n`;
      }
    })
    .join("");
}

function calc() {
  const sum = subtotal();
  const postage = sum >= 3000 ? 0 : sum < 2000 ? 500 : 250;
  window.alert(
    `${display()}\n小計は${sum}円、送料は${postage}円です。合計は${
      sum + postage
    }円です`
  );
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

addButtonElement.addEventListener("click", add);
calcButtonElement.addEventListener("click", calc);
