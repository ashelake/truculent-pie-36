let SignUp_data = JSON.parse(localStorage.getItem("SignUp"));

document.querySelector("form").addEventListener("submit", function () {
  let email = document.getElementById("inputEmail").value;

  let password = document.getElementById("inputPasswd").value;
  SignUp_data.filter(function (el) {
    if (email == el.email && password == el.password) {
      localStorage.setItem("userData", JSON.stringify(el));
      localStorage.setItem("userName", JSON.stringify(el.name));
      window.location.href = "../index.html";
      alert("Logged In");
    } else {
      alert("Enter Correct details");
    }
  });
});
