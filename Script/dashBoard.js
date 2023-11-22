let eventForm = document.getElementById("event-form");
let imageUrl = document.getElementById("event-poster");
let eventName = document.getElementById("event-name");
let eventDescription = document.getElementById("event-description");
let eventDate = document.getElementById("event-date");
let eventCategory = document.getElementById("event-category");
let eventPrice = document.getElementById("event-price");


eventForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(imageUrl.value,eventCategory.value,eventDate.value,eventDescription.value,eventPrice.value,eventName.value)
})