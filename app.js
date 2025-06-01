const menu = document.getElementById("menu");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const navItems = document.querySelectorAll(".nav-item");

// Toggle sidebar
menu.onclick = () => {
  sidebar.classList.add("active");
  menu.style.display = "none";
  close.style.display = "inline";
};

close.onclick = () => {
  sidebar.classList.remove("active");
  close.style.display = "none";
  menu.style.display = "inline";
};

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  sunIcon.style.display = isDark ? "inline" : "none";
  moonIcon.style.display = isDark ? "none" : "inline";

  localStorage.setItem("darkMode", isDark);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedDark = localStorage.getItem("darkMode") === "true";
  if (savedDark) {
    document.body.classList.add("dark");
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  }
});

// Page switching and active nav item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-page");

    // Page display toggle
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    if (target) {
      document.querySelector("." + target).style.display = "block";
    }

    // Highlight active nav
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");

    // Close sidebar if mobile

    sidebar.classList.remove("active");
    close.style.display = "none";
    menu.style.display = "inline";
  });
});
