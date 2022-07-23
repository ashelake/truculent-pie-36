import nav from "./navbar.js";

document.getElementById("div_header").innerHTML = nav();
let showusername = JSON.parse(localStorage.getItem("userName"));
console.log(showusername);
if (showusername != null) {
  document.getElementById("userNameshow").innerText = showusername;
}
let cartarray = JSON.parse(localStorage.getItem("S_cart"));
if (cartarray.length != 0) {
  console.log(cartarray.length);
  document.getElementById("cartcount").innerText = cartarray.length;
}

