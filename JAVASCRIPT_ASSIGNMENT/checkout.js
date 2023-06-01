let cardContainer = document.getElementById("cart-item-container");
let totalAmount = document.getElementById("total-amount");
let numberOfItem = document.getElementById("number-of-item");

let myLocalStorageData = JSON.parse(
  window.localStorage.getItem("product-list")
);

function createItemOnCheckOut(iPreview, iName, iCount, iPrice) {
  let item = document.createElement("div");
  item.setAttribute("class", "item");

  let itemImg = document.createElement("img");
  itemImg.src = iPreview;

  let itemDetail = document.createElement("div");
  itemDetail.setAttribute("class", "detail");

  let itemName = document.createElement("h3");
  let itemNameText = document.createTextNode(iName);
  itemName.appendChild(itemNameText);

  let itemCount = document.createElement("p");
  itemCountText = document.createTextNode("x" + iCount);
  itemCount.appendChild(itemCountText);

  let itemPrice = document.createElement("p");
  let itemPriceText = document.createTextNode("Amount: " + iCount * iPrice);
  itemPrice.appendChild(itemPriceText);

  itemDetail.appendChild(itemName);
  itemDetail.appendChild(itemCount);
  itemDetail.appendChild(itemPrice);

  item.appendChild(itemImg);
  item.appendChild(itemDetail);

  return item;
}

for (let z = 0; z < myLocalStorageData.length; z++) {
  cardContainer.append(
    createItemOnCheckOut(
      myLocalStorageData[z].preview,
      myLocalStorageData[z].title,
      myLocalStorageData[z].count,
      myLocalStorageData[z].price
    )
  );
}

let cost = 0;
let counter = 0;

for (let y = 0; y < myLocalStorageData.length; y++) {
  counter += myLocalStorageData[y].count;
  console.log(counter);
  cost +=
    parseInt(myLocalStorageData[y].count) *
    parseInt(myLocalStorageData[y].price);
  console.log(cost);
}

totalAmount.innerHTML = cost;
numberOfItem.innerHTML = counter;

let placeOrder = document.getElementById("place-order");
placeOrder.addEventListener("click", function() {
  cost = 0;
  counter = 0;
  totalAmount.innerHTML = cost;
  numberOfItem.innerHTML = counter;

  // Clear the local storage
  window.localStorage.removeItem("product-list");
  window.localStorage.setItem("cart-count", "0");

  // Clear the myLocalStorageData array
  myLocalStorageData = [];

  // Clear the cardContainer element
  cardContainer.innerHTML = "";
});
