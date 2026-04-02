class Event {
  constructor(id, img, name, college, date, month, year, seats) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.college = college;
    this.date = date;
    this.month = month;
    this.year = year;
    this.seats = seats;
  }
}

const Events = JSON.parse(localStorage.getItem("events")) || [];

function initializeEvents() {
  // initializing Events array
  let event = new Event(
    1,
    "link",
    "Hackathon 2026",
    "Gauhati University",
    15,
    "March",
    2026,
    160,
  );
  Events.push(event);
  event = new Event(
    2,
    "link",
    "AI & Web Dev Workshop",
    "IIT Guwahati",
    3,
    "April",
    2026,
    80,
  );
  Events.push(event);
  event = new Event(
    3,
    "link",
    "Cultural Night 2026",
    "Assam Engineering College",
    10,
    "May",
    2026,
    300,
  );
  Events.push(event);
  localStorage.setItem("events", JSON.stringify(Events));
}

// initializeEvents();
