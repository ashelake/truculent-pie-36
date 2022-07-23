let total = JSON.parse(localStorage.getItem('total'))
    document.getElementById('price').innerHTML = `TOTAL : <span>${total}</span>`

    import navbar from "./components/navbar.js";
    let nav = document.getElementById("navbar");
    nav.innerHTML = navbar();

    import { footers } from "./components/footer.js";
    let footer = document.getElementById("footer");
    footer.innerHTML = footers();

    let visa = document.getElementById("visa")
    visa.addEventListener("click", function () {
        visa.style.border = "2px solid black";
    })