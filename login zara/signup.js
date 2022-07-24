let signup_data = JSON.parse(localStorage.getItem("SignUp")) || [];

document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();
  let form = document.querySelector("form");
  let data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    repeatPassword: form.reapeatpassword.value,
    address: form.address.value,
    city: form.city.value,
    state: form.state.value,
    pincode: form.pin.value,
    morenfo: form.optional.value,
    locality: form.locality.value,
    phone: form.tel.value,
  };
  signup_data.push(data);
  localStorage.setItem("SignUp", JSON.stringify(signup_data));
  window.location.href = "login.html";
  alert("Sign Up successful")
});
