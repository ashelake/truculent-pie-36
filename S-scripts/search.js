import { S_sort } from "./sort.js";
let x = document.getElementById("S-sort");
// console.log(x);

document.getElementById("jacket").addEventListener("click", WJ);
document.getElementById("shoes").addEventListener("click", shoes);
document.getElementById("acces").addEventListener("click", WA);
document.getElementById("shirt").addEventListener("click", SM);

async function WJ() {
  let data = await S_getData("womenJacket");
  localStorage.setItem("products", JSON.stringify(data));
  S_getData("womenJacket");
  document.getElementById("s-trends").innerHTML = null;
  // document.getElementById("s-append").innerHTML = null;
  // S_getData("womenJacket");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
async function shoes() {
  let data = await S_getData("mensShoes");
  localStorage.setItem("products", JSON.stringify(data));
  document.getElementById("s-trends").innerHTML = null;
  // document.getElementById("s-append").innerHTML = null;
  S_getData("mensShoes");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
async function WA() {
  let data = await S_getData("womenAccessories");
  localStorage.setItem("products", JSON.stringify(data));
  document.getElementById("s-trends").innerHTML = null;
  // document.getElementById("s-append").innerHTML = null;
  S_getData("womenAccessories");
  let filter_btn = document.createElement("button");
  filter_btn.innerText = "FILTERS";
  document.getElementById("filter_button").append(filter_btn);
  x.innerHTML = S_sort();
}
async function SM() {
  let data = await S_getData("mensShirt");
  localStorage.setItem("products", JSON.stringify(data));
  document.getElementById("s-trends").innerHTML = null;
  // document.getElementById("s-append").innerHTML = null;
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
  S_append(data);
  return data;
  // ;
}
// S_getData("")

function S_append(data) {
  let container = document.getElementById("s-append");
  container.innerHTML = null;
  data.forEach((el) => {
    let img = document.createElement("img");
    img.src = el.imgUrl;
    let name = document.createElement("p");
    name.innerText = el.prod_name;
    let price = document.createElement("p");
    price.innerText = `₹${el.price}`;
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div2.addEventListener("click", function () {
      localStorage.setItem("myProducts", JSON.stringify(el));
      window.location.href = "mybag.html";
    });
    div1.append(name, price);
    div2.append(img, div1);
    container.append(div2);
  });
}
document.getElementById("S-search").addEventListener("keypress", searchIt);

async function searchIt(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    let searched = document.getElementById("S-search").value;
    if (
      searched == "jacket" ||
      searched == "JACKET" ||
      searched == "women jacket"
    ) {
      let data = await S_getData("womenJacket");
      localStorage.setItem("products", JSON.stringify(data));
      // document.getElementById("s-append").innerHTML = null;
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("womenJacket");
      x.innerHTML = S_sort();
    } else if (searched == "shoes" || searched == "men shoes") {
      // document.getElementById("s-append").innerHTML = null;
      let data = await S_getData("mensShoes");
      localStorage.setItem("products", JSON.stringify(data));
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("mensShoes");
      x.innerHTML = S_sort();
    } else if (searched == "accessories" || searched == "women accessories") {
      // document.getElementById("s-append").innerHTML = null;
      let data = await S_getData("womenAccessories");
      localStorage.setItem("products", JSON.stringify(data));
      document.getElementById("s-trends").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      S_getData("womenAccessories");
      x.innerHTML = S_sort();
    } else if (
      searched == "shirt" ||
      searched == "shirts" ||
      searched == "men shirts"
    ) {
      let data = await S_getData("mensShirt");
      localStorage.setItem("products", JSON.stringify(data));
      document.getElementById("s-trends").innerHTML = null;
      // document.getElementById("s-append").innerHTML = null;
      document.getElementById("filter_button").innerHTML = null;
      S_getData("mensShirt");

      let filter_btn = document.createElement("button");
      filter_btn.innerText = "FILTERS";
      document.getElementById("filter_button").append(filter_btn);
      x.innerHTML = S_sort();
    }
    document.getElementById("S-search").value = null;
  }
}
// console.log(x)

x.addEventListener("change", function () {
  let data = JSON.parse(localStorage.getItem("products"));
  let selected = document.getElementById("S-sorting").value;
  // console.log(selected);
  if (selected == "HtoL") {
    data.sort((a, b) => {
      return b.price - a.price;
    });
    S_append(data);
  }
  if (selected == "LtoH") {
    data.sort((a, b) => {
      return a.price - b.price;
    });
    S_append(data);
  }
});

// function showProducts() {
//   let data = JSON.parse(localStorage.getItem("products"));
//   console.log(data);

//   let selected = document.getElementById("S-sorting").value;
//   // console.log(selected);
//   if ((selected = "HtoL")) {
//     data.sort(function (a, b) {
//       return b.price - a.price;
//     });
//     // console.log(data);
//     // document.getElementById("s-append").innerHTML = null;
//     S_append(data);
//   }
//   if ((selected = "LtoH")) {
//     data.sort(function (a, b) {
//       return a.price - b.price;
//     });
//     // console.log(data);
//     // document.getElementById("s-append").innerHTML = null;
//     S_append(data);
//   }
// }
