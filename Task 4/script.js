/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į countries.json failą (fetch("./countries.json"))
ir iš atvaizduos visas šalis ir jų eksportus. 
Kiekviena šalis turės savo atvaizdavimo "kortelę", kurioje bus 
nurodoma šalis ir jos eksportai.


Pastaba: Informacija apie šalis turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch("./countries.json")
 .then(response => response.json())
 .then(data => {
    const outputContainer = document.getElementById("output");

    data.forEach(country => {
      const card = document.createElement("div");
      card.className = "card";

      const header = document.createElement("h2");
      header.textContent = country.country;

      const exportsList = document.createElement("ul");

      country.exports.forEach(exportItem => {
        const listItem = document.createElement("li");
        listItem.textContent = exportItem;
        exportsList.appendChild(listItem);
      });

      card.appendChild(header);
      card.appendChild(exportsList);

      outputContainer.appendChild(card);
    });
  })
 .catch(error => console.error("Error fetching countries data:", error));

      card.appendChild(header);
      card.appendChild(exportsList);