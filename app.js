const dark = document.querySelector(".dark");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav_link = document.querySelector(".nav_link");

// ----- DARK MODE TOGGLE -----

function enableDarkMode() {
  document.body.classList.add("darkMood");
  sun.style.opacity = 0;
  sun.style.pointerEvents = "none";
  moon.style.opacity = 1;
  moon.style.pointerEvents = "auto";
  localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
  document.body.classList.remove("darkMood");
  sun.style.opacity = 1;
  sun.style.pointerEvents = "auto";
  moon.style.opacity = 0;
  moon.style.pointerEvents = "none";
  localStorage.setItem("theme", "light");
}

sun.addEventListener("click", enableDarkMode);
moon.addEventListener("click", disableDarkMode);

// ----- LOAD SAVED THEME -----
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// ----- MENU TOGGLE -----
menu.addEventListener("click", () => {
  nav_link.style.maxHeight = "450px"; // or any value that fits your content
  close.style.opacity = 1;
  menu.style.opacity = 0;
  menu.style.pointerEvents = "none";
  close.style.pointerEvents = "all";
});

close.addEventListener("click", () => {
  nav_link.style.maxHeight = "0";
  menu.style.opacity = 1;
  close.style.opacity = 0;
  close.style.pointerEvents = "none";
  menu.style.pointerEvents = "all";
});
