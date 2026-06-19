// script.js

const player = document.getElementById("player");
const statusText = document.getElementById("status");

player.addEventListener("play",()=>{
statusText.textContent = "Now Playing 🎵";
});

player.addEventListener("pause",()=>{
statusText.textContent = "Paused";
});

player.addEventListener("ended",()=>{
statusText.textContent = "Thanks for listening ❤️";
});
