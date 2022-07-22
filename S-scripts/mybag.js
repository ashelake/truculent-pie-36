let mybag = JSON.parse(localStorage.getItem("myProducts"));
// console.log(mybag);
document.querySelector("title").innerText = mybag.prod_name;

let img = document.querySelector("#S_middle>img");
img.src = mybag.imgUrl;
let imgArr = [];

imgArr.push(mybag.imgUrl, mybag.img2, mybag.img3, mybag.img4);
// console.log(imgArr);

let buttons = document.querySelectorAll("#S_middle>button");
let i = 0;
buttons[0].addEventListener("click", () => {
  if (i == 0) {
    i = imgArr.length - 1;
  } else {
    i--;
  }
  img.src = imgArr[i];
});

buttons[1].addEventListener("click", () => {
  if (i == imgArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img.src = imgArr[i];
});

// document.querySelector("#S_right>p").innerText=mybag.prod_name;

let p = document.querySelectorAll("#S_right>p");
p[0].innerText = mybag.prod_name;
p[1].innerText = mybag.description;
p[2].innerText = `₹${mybag.price}`;
p[3].innerText = "MRP incl. of all taxes";

let mycart=JSON.parse(localStorage.getItem("S_cart")) || [];
document.querySelector("#S_right>button").addEventListener("click", () => {
  mycart.push(mybag);
  localStorage.setItem("S_cart", JSON.stringify(mycart));
  // console.log(mycart)
});

document.getElementById("S_middle").addEventListener("mouseover", function () {
  let container = document.getElementById("hover_div");
  let div = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = mybag.imgUrl;
  let img2 = document.createElement("img");
  img2.src = mybag.img2;
  let img3 = document.createElement("img");
  img3.src = mybag.img3;
  let img4 = document.createElement("img");
  img4.src = mybag.img4;
  div.append(img1, img2, img3, img4);
  container.append(div);
});

document.getElementById("S_middle").addEventListener("mouseout", function () {
  document.getElementById("hover_div").innerHTML = null;
});

document.querySelector("#S_middle>img").addEventListener("click", () => {
  window.location.href = document.querySelector("#S_middle>img").src;
});
