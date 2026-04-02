const users = JSON.parse(localStorage.getItem("users")) || [];
const loggedInUser = localStorage.getItem("loggedInUser");
// if user is not logged in then redirect to index page
if (!loggedInUser) {
  window.location.href = "../index.html";
}

// finding the user from users array
const user = users.find((user) => user.username === loggedInUser);

const welcomeHeader = document.querySelector("#welcomeUser");
welcomeHeader.append(user.name);
const email = document.querySelector("#userEmail");
email.append(user.email);

// log out

const logoutBtn = document.querySelector("#dash-logout-btn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});

// RIGISTERED EVENTS

const registeredEvents =
  JSON.parse(localStorage.getItem("registeredEvents")) || {};

// wraping event in html
function addEvent(event) {
  const article = document.createElement("article");
  article.classList.add("event-card");

  const div = document.createElement("div");
  div.classList.add("event-info");

  const h3 = document.createElement("h3");
  h3.append(event.name);

  const college = document.createElement("p");
  college.classList.add("college");
  college.append(event.college);

  const meta = document.createElement("p");
  meta.classList.add("meta");
  meta.append(`${event.month} ${event.date}, ${event.year} • ${event.seats}`);

  // const a = document.createElement("a");
  // a.classList.add("btn-primary");
  // a.classList.add("register-btns");
  // a.setAttribute("id", event.id);
  // a.append("Register");
  // a.style.cursor = "pointer";

  div.append(h3);
  div.append(college);
  div.append(meta);

  article.append(div);
  return article;
}

// showing the events
for (let eve of registeredEvents[loggedInUser]) {
  let card = addEvent(eve);
  const box = document.querySelector(".events-grid");
  box.append(card);
}
