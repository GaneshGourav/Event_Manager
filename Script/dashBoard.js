let eventForm = document.getElementById("event-form");
let imageUrl = document.getElementById("event-poster");
let eventName = document.getElementById("event-name");
let eventDescription = document.getElementById("event-description");
let eventDate = document.getElementById("event-date");
let eventCategory = document.getElementById("event-category");
let eventPrice = document.getElementById("event-price");
let eventLocation = document.getElementById("event-location");
let tbody = document.getElementById("table-body")
let datas = []

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


function getData(){
    fetch("https://json-mock-server-i3w0.onrender.com/events")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        // console.log(data)
        datas=data
        console.log(datas)
        showData(datas)
        createEventDetails()
    }).catch((err)=>{
        console.log(err)
    })
}
window.addEventListener("load",getData())

function showData(data){
    tbody.innerHTML=null;
    data.forEach(element => {
        tbody.append(createTable(element))
        
    });

}

function createTable(element){
let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.textContent=element.name;
let td2=document.createElement("td");
td2.textContent=element.description
let td3 = document.createElement("td");
td3.textContent=element.date;
let td4 = document.createElement("td");
td4.textContent=element.location;
let td5 = document.createElement("td");
td5.textContent=element.category;
let td6 = document.createElement("td");
td6.textContent=element.price;
let editButton = document.createElement("button");
editButton.textContent="EDIT";
let deleteButton = document.createElement("button");
deleteButton.textContent="DELETE"
tr.append(td1,td2,td3,td4,td5,td6,editButton,deleteButton)
return tr
}