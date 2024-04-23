// Parašykite JavaScript kodą, kuris leis vartotojui paspaudus ant mygtuko "Rodyti pranešimus"
// gauti pranešimų duomenis iš JSONPlaceholder API (API endpoint'as pateiktas žemiau).

// Paspaudus mygtuką "Rodyti pranešimus":

//     Pranešimų informacija turi būti pateikta <div id="output"></div> bloke.
//     1.1. Informacija, kuri turi būti pateikta: "title" ir "body" (kortelėje).
//     Žinutė "Paspauskite mygtuką "Rodyti pranešimus" norėdami pamatyti pranešimus" turi išnykti.

// Pastaba: Pranešimų informacija (kortelė) turi turėti bent minimalų stilių.

// API endpoint'as:
// const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const btn = document.getElementById('btn');
const outputContainer = document.getElementById('output');
const messageElement = document.getElementById('message');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    const postsHTML = data.map((post) => {
      return `
        <div class="card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    }).join('');
    outputContainer.innerHTML = postsHTML;
    messageElement.style.display = 'none';
  } catch (error) {
    console.error(error);
    outputContainer.innerHTML = '<p>Error fetching data</p>';
  }
});