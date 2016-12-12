/*
const ready = function() {
  const people = app.people;
  var docfrag = document.createDocumentFragment();
  const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<th>Prénom</th><th>Nom</th><th>Âge</th><th>Taille</th>`;
docfrag.appendChild(tr);

/* fonction pour plus tard
for(let i = 0; i < people.length; i++) {
  let tr = document.createElement("tr");
  tr.innerHTML = `<th>Prénom</th><th>Nom</th><th>Âge</th><th>Taille</th>`;
  docfrag.appendChild(tr);
}
*/
/*
thead.appendChild(docfrag);
tbody.appendChild(docfrag);
people[0].town="marseille";
*/
var docfrag = document.createDocumentFragment();
const thead = document.querySelector("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<th>Prénom</th><th>Nom</th><th>Âge</th><th>Taille</th>`;
docfrag.appendChild(tr);
const app = {};
app.people = [
  { firstname: "Landry", surname: "O'Hara", age: "29", height: "1m50" },
  { firstname: "Sharon", surname: "O'Neil", age: "28", height: "1m80" },
  { firstname: "Emerson", surname: "O'Connell", age: "25", height: "1m95" },
  { firstname: "Roberto", surname: "O'Maley", age: "666", height: "1m66" },
  { firstname: "Roberta", surname: "O'Malpoy", age: "66", height: "1m6" }
];
const people = app.people;
// app controller
app.redraw = function() {
  var docfrag = document.createDocumentFragment();
  const tbody = document.querySelector("tbody");

  // Remove tbody contents
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // Add new contents from app.people

  const trContainer = document.createDocumentFragment();
  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td><td>${people[i].age}</td><td>${people[i].height}</td>`;
    docfrag.appendChild(tr);
  }
  tbody.appendChild(trContainer);
};
// app view
app.onSubmit = function(e) {
  e.preventDefault();
  const formData = new formData(this);
  const newPerson = {
    surname: formData.get("surname"),
    firstname: formData.get("firstname"),
    age: formData.get("age"),
    height: formData.get("height")
  };
  app.people.push(newPerson);
  app.redraw();
};
// DOM bindings
const ready = function() {
  // Initial drawing
  app.redraw();
  // On form submit
  document.getElementById("form").addEventListener("submit", app.onSubmit);
}
document.addEventListener("DOMContentLoaded", ready);
