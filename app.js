const app = {};
app.people = [{firstname: "Landry",surname: "O'Hara",age: "29",taille: "1m50"}, {firstname: "Sharon",surname: "O'Neil",age: "28",taille: "1m80"}, {firstname: "Emerson",surname: "O'Connell",age: "25",taille: "1m95"}, {firstname: "Roberto",surname: "O'Maley",age: "666",taille: "1m66"}, {firstname: "Roberta",surname: "O'Malpoy",age: "66",taille: "1m6"}];
app.redraw = function() {
    var myNode = document.getElementById("foo");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }  };




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

    }

    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new formData(this);
        const newPerson = {
            surname: formData.get("surname"),
            firstname: formData.get("firstname"),
            age: formData.get("age"),
            height: formData.get("taille")
        };
    });

    thead.appendChild(docfrag);
    tbody.appendChild(docfrag);
    people[0].town = "marseille";




/*
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
