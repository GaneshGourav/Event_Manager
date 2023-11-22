let adminEmail = document.getElementById("admin-email");
let adminPass = document.getElementById("admin-pass");
let loginBtn = document.getElementById("login-btn");
let loginForm = document.getElementById("login-form");
let adminToken = JSON.parse(localStorage.getItem("admin-token")) || [];
console.log(adminToken);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = adminEmail.value;
  let password = adminPass.value;
  adminLogin(email, password);
});

function adminLogin(email, password) {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let token = data.token;
      localStorage.setItem("admin-token", JSON.stringify(token));
      window.location.href = "dashBoard.html";
    })
    .catch((err) => {
      console.log(err);
    });
}
