let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Typing Text Code

const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Web Designer",
    "Software Developer",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
