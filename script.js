const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const flowerScene = document.getElementById("flowerScene");
const slideshow = document.getElementById("slideshow");
const videoScene = document.getElementById("videoScene");
const finalScene = document.getElementById("finalScene");

const hiBtn = document.getElementById("hiBtn");
const noBtn = document.getElementById("noBtn");
const maybeBtn = document.getElementById("maybeBtn");
const yesBtn = document.getElementById("yesBtn");

const music = document.getElementById("music");
const video = document.getElementById("finalVideo");

let yesScale = 1;

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

/* Scene flow */
hiBtn.onclick = () => {
  scene1.classList.remove("active");
  scene2.classList.add("active");
};

function growYes() {
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
}

maybeBtn.onclick = growYes;

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
  growYes();
};

yesBtn.onclick = () => {
  scene2.classList.remove("active");
  flowerScene.classList.add("active");
  music.play();
  setTimeout(startSlideshow, 3000);
};

function startSlideshow() {
  flowerScene.classList.remove("active");
  slideshow.classList.add("active");

  setTimeout(endSlideshow, 40000);
}

function endSlideshow() {
  slideshow.classList.remove("active");
  videoScene.classList.add("active");
  video.play();

  video.onended = () => {
    videoScene.classList.remove("active");
    finalScene.classList.add("active");
    document.getElementById("pressLink").style.display = "inline-block";
  };
}
