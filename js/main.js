const projects = [
  {
    title: 'Personal portfolio',
    description:
      'A responsive personal portfolio with a dark, professional layout—Tailwind-driven styling, clear typography, and a project showcase.',
    cover: 'imges/Portfolio.png',
    repo: 'https://github.com/Abdo-Mo2/Portfolio',
    live: 'https://abdo-mo2.github.io/Portfolio/',
  },
  {
    title: 'Weather app',
    description:
      'A frontend weather experience: search locations, view conditions, and explore a clean UI built with vanilla HTML, CSS, and JavaScript.',
    cover: 'imges/weather.webp',
    repo: 'https://github.com/Abdo-Mo2/Weather',
    live: 'https://abdo-mo2.github.io/Weather/',
  },
  {
    title: 'To-do app',
    description:
      'Angular to-do app with Firebase auth and Firestore sync—task CRUD, filters, dark/light mode, and GSAP-powered UI motion.',
    cover: 'imges/To%20do%20list.webp',
    repo: 'https://github.com/Abdo-Mo2/To-do-App',
    live: 'https://to-do-app-henna-five.vercel.app/',
  },
  {
    title: 'UI components playground',
    description:
      'Interactive Angular playground to tweak buttons, cards, and inputs in real time—Tailwind output, responsive preview modes, and dark mode.',
    cover: 'imges/UI%20componint%20Play%20ground.png',
    repo: 'https://github.com/Abdo-Mo2/UI-Components-Playground',
    live: 'https://ui-components-playground-virid.vercel.app/',
  },
  {
    title: 'E-commerce storefront',
    description:
      'Angular e-commerce style storefront—product browsing, cart flows, and a polished product-detail experience ready for extension.',
    cover: 'imges/ecommerce-Website-Project.webp',
    repo: 'https://github.com/Abdo-Mo2/E-commerce',
    live: 'https://e-commerce-psi-rust.vercel.app/',
  },
];

const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRepo = document.getElementById('modal-repo');
const modalLive = document.getElementById('modal-live');

let index = 0;

function buildSlides() {
  track.innerHTML = projects
    .map(
      (p, i) => `
    <article
      class="w-full shrink-0 px-2 sm:px-4"
      role="listitem"
      data-index="${i}"
      aria-hidden="${i !== 0}"
    >
      <button
        type="button"
        class="project-card group relative mx-auto block w-full max-w-xl overflow-hidden rounded-2xl border-2 border-light-border bg-light-surface text-left shadow-soft ring-1 ring-slate-200/50 transition duration-300 hover:border-accent-light hover:shadow-lg hover:ring-accent-light/30 focus:outline-none focus-visible:border-accent-light focus-visible:shadow-lg focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg dark:border-white/15 dark:bg-surface-overlay dark:shadow-xl dark:ring-white/10 dark:hover:border-accent dark:hover:shadow-glow dark:hover:ring-accent/25 dark:focus-visible:border-accent dark:focus-visible:ring-accent dark:focus-visible:ring-offset-surface"
        data-project-index="${i}"
        aria-label="Open ${p.title}—source and live links"
      >
        <div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <img
            src="${p.cover}"
            alt=""
            class="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.07] group-focus-visible:scale-[1.07] group-hover:brightness-105 group-focus-visible:brightness-105"
            loading="${i === 0 ? 'eager' : 'lazy'}"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/10 opacity-100 transition-opacity duration-300 group-hover:opacity-35 group-focus-visible:opacity-35 dark:from-surface dark:via-slate-900/40 dark:to-transparent dark:group-hover:opacity-30 dark:group-focus-visible:opacity-30"
          ></div>
          <span
            class="absolute bottom-4 left-4 right-4 z-10 text-lg font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:text-xl"
          >
            ${p.title}
          </span>
          <span
            class="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/95 px-3 py-1 text-xs font-semibold text-accent-light shadow-sm backdrop-blur-sm transition group-hover:border-accent-light/50 group-hover:bg-white group-focus-visible:border-accent-light/50 group-focus-visible:bg-white dark:border-white/10 dark:bg-black/60 dark:text-accent dark:group-hover:bg-cyan-950/90 dark:group-focus-visible:bg-cyan-950/90"
          >
            Tap for links
          </span>
        </div>
        <div class="p-5">
          <p class="line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            ${p.description}
          </p>
        </div>
      </button>
    </article>
  `
    )
    .join('');

  dotsContainer.innerHTML = projects
    .map(
      (_, i) => `
    <button
      type="button"
      class="carousel-dot h-2.5 rounded-full transition-all ${
        i === 0
          ? 'w-8 bg-accent-light dark:bg-accent'
          : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40'
      }"
      data-dot="${i}"
      aria-label="Go to project ${i + 1}"
    ></button>
  `
    )
    .join('');

  track.style.transform = 'translateX(0%)';
}

function updateCarousel() {
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;

  track.querySelectorAll('[role="listitem"]').forEach((el, i) => {
    el.setAttribute('aria-hidden', String(i !== index));
  });

  dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    const active = i === index;
    dot.className =
      'carousel-dot h-2.5 rounded-full transition-all ' +
      (active
        ? 'w-8 bg-accent-light dark:bg-accent'
        : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40');
  });
}

function openModal(i) {
  const p = projects[i];
  modalTitle.textContent = p.title;
  modalDescription.textContent = p.description;
  modalRepo.href = p.repo;
  modalLive.href = p.live;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + projects.length) % projects.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % projects.length;
  updateCarousel();
});

dotsContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-dot]');
  if (!btn) return;
  index = Number(btn.dataset.dot);
  updateCarousel();
});

track.addEventListener('click', (e) => {
  const card = e.target.closest('[data-project-index]');
  if (!card) return;
  openModal(Number(card.dataset.projectIndex));
});

modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    return;
  }
  if (modal.classList.contains('hidden')) {
    if (e.key === 'ArrowLeft') {
      index = (index - 1 + projects.length) % projects.length;
      updateCarousel();
    }
    if (e.key === 'ArrowRight') {
      index = (index + 1) % projects.length;
      updateCarousel();
    }
  }
});

document.getElementById('year').textContent = String(new Date().getFullYear());

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  });
}

buildSlides();
