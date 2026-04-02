const Events = JSON.parse(localStorage.getItem("events")) || [];

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

  const a = document.createElement("a");
  a.classList.add("btn-primary");
  a.classList.add("register-btns");
  a.setAttribute("id", event.id);
  a.append("Register");
  a.style.cursor = "pointer";

  div.append(h3);
  div.append(college);
  div.append(meta);
  div.append(a);

  article.append(div);
  return article;
}

// showing the events
for (let eve of Events) {
  let card = addEvent(eve);
  const box = document.querySelector(".events-grid");
  box.append(card);
}

const cards = document.querySelectorAll(".event-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});

// Register Events

const registerBtns = document.querySelectorAll(".register-btns");

for (const btn of registerBtns) {
  // adding event listeners on register btns
  btn.addEventListener("click", () => {
    // checking the user is logged in or not
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      window.location.href = "../html/login.html";
    }

    // taking out the id of the event
    const id = btn.id;
    // taking the Events array from the local storage
    const Events = JSON.parse(localStorage.getItem("events"));

    // selecting individual event
    for (const event of Events) {
      // filtering out the clicked event
      if (event.id == id) {
        // getting the registerEvents object from the local storage
        const registeredEvents =
          JSON.parse(localStorage.getItem("registeredEvents")) || [];

        // checking if user has already registered for the clicked event
        for (let eve of registeredEvents[user]) {
          if (event.id == eve.id) {
            alert("User already has registered for the event!");
            return;
          }
        }
        // adding the clicked event
        registeredEvents[user].push(event);
        localStorage.setItem(
          "registeredEvents",
          JSON.stringify(registeredEvents),
        );

        // redirecting towards dashboard
        window.location.href = "../html/dashboard.html";
      }
    }
  });
}

// log out, log in and singup button visibility

const loginBtn = document.querySelector("#index-login-btn");
const logoutBtn = document.querySelector("#index-logout-btn");
const signupBtn = document.querySelector("#index-signup-btn");

function display() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    loginBtn.classList.add("display-none");
    signupBtn.classList.add("display-none");
    logoutBtn.classList.remove("display-none");
  } else {
    loginBtn.classList.remove("display-none");
    signupBtn.classList.remove("display-none");
    logoutBtn.classList.add("display-none");
  }
}

display();

// log out

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});
