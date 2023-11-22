let eventForm = document.getElementById("event-form");
let imageUrl = document.getElementById("event-poster");
let eventName = document.getElementById("event-name");
let eventDescription = document.getElementById("event-description");
let eventDate = document.getElementById("event-date");
let eventCategory = document.getElementById("event-category");
let eventPrice = document.getElementById("event-price");
let eventLocation = document.getElementById("event-location");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  poster = imageUrl.value;
  Name = eventName.value;
  description = eventDescription.value;
  date = eventDate.value;
  locations = eventLocation.value;
  category = eventCategory.value;
  price = eventPrice.value;
    console.log(poster,Name,description,date,locations,category,price)
  createEventDetails(
    poster,
    name,
    description,
    date,
    locations,
    category,
    price
  );
});

function createEventDetails(
  poster,
  name,
  description,
  date,
  location,
  category,
  price
) {
  fetch("https://json-mock-server-i3w0.onrender.com/events", {
    method: "POST",
    body: JSON.stringify({
      poster,
      name,
      description,
      date,
      location,
      category,
      price,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
