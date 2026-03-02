// Signup page

const users = [];

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
    for (user of users) {
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
  });
}

// initializing users array
const user1 = new User(
  "Chinmoy Sarma",
  "chinmoy",
  "chinmoy123@gmail.com",
  "chinmoy",
);
const user2 = new User(
  "Abhishek Das",
  "abhishek",
  "abhishek123@gmail.com",
  "abhishek",
);
const user3 = new User("Rahul Kumar", "rahul", "rahul@gmail.com", "rahul");
const user4 = new User("Neha Sarma", "neha", "neha123@gmail.com", "neha");

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
console.log(users);

// Login page

const loginBtn = document.querySelector("#login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#loginForm");

    const username = form[0].value;
    const password = form[1].value;

    // check user exist or not
    for (user of users) {
      if (user.username === username && user.password === password) {
        console.log("user exist!");
      }
    }
    console.log("btn is clicked!");
  });
}
