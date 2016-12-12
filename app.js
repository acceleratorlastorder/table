const app = {};
app.people = [
  { firstname: "Landry", surname: "O'Hara", age: "29", taille: "1m50" },
  { firstname: "Sharon", surname: "O'Neil", age: "28", taille: "1m80" },
  { firstname: "Emerson", surname: "O'Connell", age: "25", taille: "1m95" },
  { firstname: "Roberto", surname: "O'Maley", age: "666", taille: "1m66" }
];
const ready = function() {
  const people = app.people;
  var docfrag = document.createDocumentFragment();
  const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");
let tr = document.createElement("tr");
tr.innerHTML = `<th>Prénom</th><th>Nom</th><th>Âge</th><th>Taille</th>`;
docfrag.appendChild(tr);
  for(let i = 0; i < people.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td><td>${people[i].age}</td><td>${people[i].taille}</td>`;
    docfrag.appendChild(tr);
  }
thead.appendChild(docfrag);
tbody.appendChild(docfrag);
}/*
var up_forms = document.getElementsByName("prenom");
function Info()
{
  console.log(up_forms[0].tagName);
     window.alert(up_forms);
}
document.getElementById("surname").addEventListener("submit", function(e)){
  e.preventDefault();
}
object.addEventListener("", myScript);




*/




document.addEventListener("DOMContentLoaded", ready);
