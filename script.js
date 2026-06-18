// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Navbar: scrolled state ----
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---- Mobile menu ----
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav__links");
const backdrop = document.getElementById("navBackdrop");

function setMenuOpen(open) {
  links.classList.toggle("is-open", open);
  toggle.classList.toggle("is-open", open);
  backdrop.classList.toggle("is-visible", open);
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}

toggle.addEventListener("click", () => {
  setMenuOpen(!links.classList.contains("is-open"));
});

backdrop.addEventListener("click", () => setMenuOpen(false));

links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") setMenuOpen(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && links.classList.contains("is-open")) setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680 && links.classList.contains("is-open")) setMenuOpen(false);
});

// ---- Scroll reveal ----
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
