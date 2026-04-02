const loginBtn = document.querySelector("#login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#loginForm");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const username = form[0].value;
    const password = form[1].value;

    // check user exist or not
    const validUser = users.find(
      (user) => user.username === username && user.password === password,
    );
    console.log(validUser);

    if (validUser) {
      // storing username in the local storage
      localStorage.setItem("loggedInUser", username);
      // redirecting towards the dashboard
      window.location.href = "../html/dashboard.html";
    } else {
      alert("Invalied username and password!");
    }
  });
}
