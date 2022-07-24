import nav from "../navbar.js";
// console.log(nav())
document.getElementById("div_header").innerHTML = nav();

import {footers} from "../login zara/components/footer.js"
// console.log(footers);
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footers();

let mybag = JSON.parse(localStorage.getItem("myProducts"));
// console.log(mybag);
document.querySelector("title").innerText = mybag.name;

let img = document.querySelector("#S_middle>img");
img.src = mybag.image_url;

let p = document.querySelectorAll("#S_right>p");
p[0].innerText = mybag.name;
p[1].innerText = mybag.desc;
p[2].innerText = `₹${mybag.price}`;
p[3].innerText = "MRP incl. of all taxes";

let mycart = JSON.parse(localStorage.getItem("S_cart")) || [];
let loginfromls = JSON.parse(localStorage.getItem("userData")) || [];
console.log(loginfromls.length);
document.querySelector("#S_right>button").addEventListener("click", () => {
  if (loginfromls.length == 0) {
    alert("LOGIN TO PROCEED");
    window.location.href = "./login zara/login.html";
  } else {
    mycart.push(mybag);
    localStorage.setItem("S_cart", JSON.stringify(mycart));
    // console.log(mycart)
  }
});

document.querySelector("#S_middle>img").addEventListener("click", () => {
  window.location.href = document.querySelector("#S_middle>img").src;
});

let data = JSON.parse(localStorage.getItem("products"));

console.log(data);

document.querySelector("#like1>img").src = data[0].image_url;
let p_s = document.querySelectorAll("#like1>p");
p_s[0].innerText = data[0].name;
p_s[1].innerText = `₹${data[0].price}`;

document.querySelector("#like2>img").src = data[1].image_url;
p_s = document.querySelectorAll("#like2>p");
p_s[0].innerText = data[1].name;
p_s[1].innerText = `₹${data[1].price}`;

document.querySelector("#like3>img").src = data[2].image_url;
p_s = document.querySelectorAll("#like3>p");
p_s[0].innerText = data[2].name;
p_s[1].innerText = `₹${data[2].price}`;
