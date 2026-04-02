// Signup page

const users = JSON.parse(localStorage.getItem("users")) || [];

class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const subBtn = document.querySelector("#sub-btn");

if (subBtn) {
  subBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#signup-form");

    // check user
    for (let user of users) {
      if (form[1].value === user.username || form[2].value === user.email) {
        alert("user already exist!");
        return;
      }
    }

    // check password
    if (form[3].value !== form[4].value) {
      alert("Password doesn't match!");
      return;
    }

    // instance of user
    const newUser = new User(
      form[0].value,
      form[1].value,
      form[2].value,
      form[3].value,
    );
    // adding user in the users array
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // adding username as a key in registeredEvents object
    const registeredEvents =
      JSON.parse(localStorage.getItem("registeredEvents")) || {};
    registeredEvents[newUser.username] = [];
    localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));
    alert("Registration successful!");
    window.location.href = "../html/login.html";
  });
}
