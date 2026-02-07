setTimeout(() => {
    document.body.classList.add("show-main");
    document.body.classList.remove("intro");
    document.documentElement.classList.add("show-main");
    document.documentElement.classList.remove("intro");
    resetScrollTop();
}, 1200);

function resetScrollTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

document.documentElement.classList.add("intro");
window.addEventListener("load", resetScrollTop);
window.addEventListener("pageshow", resetScrollTop);

const revealTargets = document.querySelectorAll(".hero, .section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
);

revealTargets.forEach((target) => observer.observe(target));

// Authentication Check
let isLoggedIn = false; // Mock login status. Change to true to simulate logged-in user.

const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

function checkAuth(event) {
    if (!isLoggedIn) {
        event.preventDefault();
        alert("Please Login or Sign Up first.");
        // Optional: Redirect to login page or scroll to login section
        // window.location.hash = "#contact"; 
    } else {
        console.log("Search initiated: " + searchInput.value);
        // Add actual search logic here
    }
}

if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkAuth(event);
        }
    });
}

if (searchButton) {
    searchButton.addEventListener("click", checkAuth);
}

// Header Scroll Effect
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
