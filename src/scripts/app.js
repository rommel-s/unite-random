import { pokes } from "./pokes.js";

document.getElementById("app").innerHTML = `
<div class="main">
<div class='poke-container'>
  <div class='img-container'>
    <img id='poke-image' src='./public/assets/default.png' width='200' height='200'>
  </div>
  <h1 class='content' id="poke">...</h1>
</div>
<button class="content shuffle" id="shuffle-btn">Sortear</button>
</div>
`;

const poke = document.getElementById("poke");
const shuffleBtn = document.getElementById("shuffle-btn");
const pokeImage = document.getElementById("poke-image");

shuffleBtn.addEventListener("click", () => {
  let shufflingAnimation = setInterval(startShufflingAnimation, 50);
  console.log(pokes.length);
  setTimeout(() => {
    clearTimeout(shufflingAnimation);
  }, 1500);
});

function startShufflingAnimation() {
  let randomLetter = Math.floor(Math.random() * pokes.length);
  poke.innerHTML = pokes[randomLetter].name;
  pokeImage.src = pokes[randomLetter].source;
}

//SERVICE WORKER

let newWorker;

function showUpdateBar() {
  let snackbar = document.getElementById('snackbar');
  snackbar.className = 'show';
}

// The click event on the pop up notification
document.getElementById('reload').addEventListener('click', function(){
  newWorker.postMessage({ action: 'skipWaiting' });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {
    registration.addEventListener("updatefound", () => {
      newWorker = registration.installing;
      newWorker.addEventListener("statechange", () => {
        switch (newWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              showUpdateBar()
            }
            break;
        }
      })
    })
    console.log("Service worker registered!")
    console.log(registration)
  }).catch(error => {
    console.log("Registration failed!")
    console.log(error)
  })
}