// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Header'ı yükle
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Header Yükleme Hatası:", error));

  // Footer'ı yükle
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Footer Yükleme Hatası:", error));
});

//menu-animasted
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const line = item.querySelector(".underline");
    gsap.to(line, { scaleX: 1, duration: 0.3 });
  });

  item.addEventListener("mouseleave", function () {
    const line = item.querySelector(".underline");
    gsap.to(line, { scaleX: 0, duration: 0.3 });
  });
});

//text animation
const wordsArray = [
  "Merhaba", // Türkçe
  "नमस्ते", // Hintçe
  "ہیلو", // Urduca
  "Hola", // İspanyolca
  "Bonjour", // Fransızca
  "Hallo", // Almanca
  "Ciao", // İtalyanca
  "Привет", // Rusça
  "你好", // Çince
  "مرحبا", // Arapça
  "こんにちは", // Japonca
  "안녕하세요", // Korece
];

function displayWords() {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < wordsArray.length) {
      document.getElementById("container").textContent = wordsArray[index];
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  // Sayfa yüklendiğinde loading gizle
  setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, 2000); // 2 saniye
});

displayWords();

//aslan-animation
const lion = document.getElementById("lion");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Ekran merkezini hesapla
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Hareket miktarı hesapla
  const xOffset = (mouseX - centerX) * 0.1; // 0.1 çarpanı hareketi yavaşlatır
  const yOffset = (mouseY - centerY) * 0.1;

  gsap.to(lion, {
    x: xOffset,
    y: yOffset,
    duration: 0.3,
    ease: "power2.out",
  });
});

//menu-show-hide