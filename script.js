/* ============================================================
   Bareq Aljuboori — Projects Hub
   Data + interactions
   ============================================================ */

// SVG icon set (inline, no dependencies)
const ICONS = {
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  vr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4.5a2 2 0 0 1-1.6-.8l-1.3-1.7a1 1 0 0 0-1.6 0l-1.3 1.7a2 2 0 0 1-1.6.8H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="13" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1-3.5C8 8 6 10 6 14a6 6 0 0 0 12 0c0-5-6-12-6-12z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  snake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7"/><circle cx="19" cy="5" r="1.4" fill="currentColor"/></svg>',
};

// Project data — gradients give each card its own identity
const PROJECTS = [
  {
    title: "Photography",
    category: "Creative",
    desc: "A visual portfolio showcasing my photography work and captured moments.",
    url: "https://bareqaljuboori.vercel.app",
    icon: "camera",
    grad: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
  },
  {
    title: "Blog",
    category: "Writing",
    desc: "Thoughts, stories, and writing on the things I find interesting.",
    url: "https://bareqblog.vercel.app",
    icon: "pen",
    grad: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    title: "VR Eye Tracking Program",
    category: "Research",
    desc: "A virtual reality program built around eye-tracking technology.",
    url: "https://vr-vision-program.vercel.app/",
    icon: "vr",
    grad: "linear-gradient(135deg, #8b7bff 0%, #38d6ff 100%)",
  },
  {
    title: "Eye Tracking Exercises",
    category: "Health",
    desc: "Guided vision-training exercises to strengthen and track eye movement.",
    url: "https://vision-training-zeta.vercel.app/",
    icon: "eye",
    grad: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
  },
  {
    title: "Spanish Flashcards",
    category: "Education",
    desc: "An interactive flashcard app for learning and practicing Spanish.",
    url: "https://spanish-flashcards-sigma.vercel.app/",
    icon: "cards",
    grad: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
  },
  {
    title: "Neon Pong",
    category: "Games",
    desc: "A glowing, neon-styled take on the classic Pong arcade game.",
    url: "https://neonponggame.vercel.app",
    icon: "gamepad",
    grad: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
  },
  {
    title: "Consistency Streak Tracker",
    category: "Productivity",
    desc: "Track your daily habits and keep your streaks alive, day after day.",
    url: "https://consistency-streak-website.vercel.app",
    icon: "flame",
    grad: "linear-gradient(135deg, #ff512f 0%, #f09819 100%)",
  },
  {
    title: "To-Do List & Planner",
    category: "Productivity",
    desc: "Organize tasks and plan your day with a clean, focused planner.",
    url: "https://to-do-list-planner.vercel.app/",
    icon: "check",
    grad: "linear-gradient(135deg, #7f00ff 0%, #e100ff 100%)",
  },
  {
    title: "The Arabian Cobra — Snake",
    category: "Games",
    desc: "A sleek modern rebuild of the timeless Snake game.",
    url: "https://thearabiancobra.vercel.app",
    icon: "snake",
    grad: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const filtersEl = document.getElementById("filters");
const emptyEl = document.getElementById("empty");

let activeCategory = "All";
let searchTerm = "";

/* ---------- Build category filters ---------- */
const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.className = "filter-pill" + (cat === "All" ? " active" : "");
  btn.textContent = cat;
  btn.type = "button";
  btn.setAttribute("role", "tab");
  btn.addEventListener("click", () => {
    activeCategory = cat;
    document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
  filtersEl.appendChild(btn);
});

/* ---------- Render cards ---------- */
function render() {
  const term = searchTerm.trim().toLowerCase();
  const visible = PROJECTS.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      !term ||
      p.title.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term);
    return matchesCat && matchesSearch;
  });

  grid.innerHTML = "";
  emptyEl.hidden = visible.length !== 0;

  visible.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--card-grad", p.grad);
    card.style.animationDelay = `${i * 60}ms`;

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${ICONS[p.icon] || ""}</div>
        <span class="card-tag">${p.category}</span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <a class="card-btn" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.title}">
        Visit Site
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
      </a>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  render();
});

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("ba-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("ba-theme", next);
});

/* ---------- Animated counters ---------- */
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  if (Number.isNaN(target)) return;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const tick = () => {
    current = Math.min(target, current + step);
    el.textContent = current;
    if (current < target) requestAnimationFrame(tick);
  };
  tick();
}
document.querySelectorAll(".stat-num[data-count]").forEach(animateCount);

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Init ---------- */
render();
