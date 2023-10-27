import AOS from 'aos';
import 'aos/dist/aos.css';

// ============ AOS Animation Initilization
AOS.init({
  once: true, // Set the 'once' option to true
});

// ============ Anchor Click
const anchors = document.querySelectorAll("a");

anchors.forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`You Clicked ${a.textContent}`);
  });
});

// ============ Modal
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const modalImg = document.getElementById("modalImg");

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.onclick = () => {
    modal.classList.remove("hidden");
    modalImg.setAttribute("src", img.src);
  };
});

// Close the modal
modalBtn.onclick = () => {
  modal.classList.add("hidden");
};
