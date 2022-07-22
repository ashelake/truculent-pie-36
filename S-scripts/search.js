import S_sort from "./sort.js";
let x = document.getElementById("S-sort");
// console.log(x);

document.getElementById("jacket").addEventListener("click", WJ);
document.getElementById("shoes").addEventListener("click", shoes);
document.getElementById("acces").addEventListener("click", WA);
document.getElementById("shirt").addEventListener("click", SM);

function WJ() {
  document.getElementById("s-trends").innerHTML = null;
  document.getElementById("s-append").innerHTML = null;
  S_getData("womenJacket");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
function shoes() {
  document.getElementById("s-trends").innerHTML = null;
  document.getElementById("s-append").innerHTML = null;
  S_getData("mensShoes");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
function WA() {
  document.getElementById("s-trends").innerHTML = null;
  document.getElementById("s-append").innerHTML = null;
  S_getData("womenAccessories");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
function SM() {
  document.getElementById("s-trends").innerHTML = null;
  document.getElementById("s-append").innerHTML = null;
  S_getData("mensShirt");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
async function S_getData(query) {
  const url = `https://zara-server.herokuapp.com/products?section=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  S_append(data);
  showProducts(data)
}
// S_getData("mensShoes");

function S_append(data) {
  let container = document.getElementById("s-append");
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let name = document.createElement("p");
    name.innerText = el.prod_name;
    let price = document.createElement("p");
    price.innerText = `₹${el.price}`;
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.append(name, price);
    div2.append(img, div1);
    container.append(div2);
  });
}
document.getElementById("S-search").addEventListener("keypress", searchIt);

function searchIt(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    let searched = document.getElementById("S-search").value;
    if (
      searched == "jacket" ||
      searched == "JACKET" ||
      searched == "women jacket"
    ) {
      document.getElementById("s-append").innerHTML = null;
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("womenJacket");
    } else if (searched == "shoes" || searched == "men shoes") {
      document.getElementById("s-append").innerHTML = null;
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("mensShoes");
    } else if (searched == "accessories" || searched == "women accessories") {
      document.getElementById("s-append").innerHTML = null;
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("womenAccessories");
    } else if (
      searched == "shirt" ||
      searched == "shirts" ||
      searched == "men shirts"
    ) {
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("s-append").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      S_getData("mensShirt");
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
    }
    document.getElementById("S-search").value = null;
  }
}
// console.log(x)
x.addEventListener("change", showProducts);

function showProducts(data) {
  // console.log("IN");
  let selected = document.getElementById("S-sorting").value;
  // console.log(selected);
  if (selected == "HtoL") {
    data.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  console.log(data);
}
