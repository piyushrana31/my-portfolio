const carousel = document.getElementById("carousel");
const images = document.querySelectorAll("#carousel img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener("click" , () =>{
    navLinks.classList.toggle('active');
});

const nameElement = document.getElementById("auto-typing-name");
const fullName = "Piyush Rana"; // The name to be typed out
let i = 0;

function typeName() {
    if (i < fullName.length) {
        nameElement.textContent += fullName[i];
        i++;
        setTimeout(typeName, 150); // Adjust speed here (milliseconds)
    } else {
        setTimeout(() => {
            i = 0; // Reset typing
            nameElement.textContent = "Web Developer.."; // Clear the text
             // Start typing again
        }, 200); // Wait 2 seconds before restarting
        typeName();
    }
}

document.addEventListener("DOMContentLoaded", typeName);
