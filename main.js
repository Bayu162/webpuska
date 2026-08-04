const slides = [
  {
    title:
      'Raih Prestasi Melalui <span class="hl">Kompetisi Pendidikan</span> Nasional',
    desc: "Temukan berbagai kompetisi akademik untuk pelajar dan mahasiswa dari seluruh brand dalam ekosistem PUSKANAS.",
    cta: "Lihat Kompetisi",
    photo: "hero-1.gif",
    photoLabel: "hero-1.gif",
  },
  {
    title:
      'Satu Ekosistem, <span class="hl">Beragam Kesempatan</span> Berprestasi',
    desc: "Kenali PUSKANAS, PRESMANESIA, FOSNAS, GEMANESIA, dan brand lain dalam satu portal kompetisi.",
    cta: "Kenali Brand Kami",
    photo: "assets/images/hero-2.png",
    photoLabel: "hero-2.png",
  },
  {
    title:
      'Informasi Kompetisi Lebih <span class="hl">Mudah dan Terpusat</span>',
    desc: "Temukan jadwal, bidang lomba, fasilitas, panduan, dan pengumuman melalui kanal resmi.",
    cta: "Buka Panduan",
    photo: "hero-3.gif",
    photoLabel: "hero-3.gif",
  },
];

let current = 0;
const titleEl = document.getElementById("slideTitle");
const descEl = document.getElementById("slideDesc");
const ctaEl = document.getElementById("slideCta");
const segs = document.querySelectorAll(".indicator .seg");
const pills = document.querySelectorAll(".pill-stack .pill");
const photoImg = document.getElementById("photoImg");
const photoPlaceholder = document.getElementById("photoPlaceholder");
const photoPlaceholderText = document.getElementById("photoPlaceholderText");
const brandOrbit = document.getElementById("brandOrbit");
const ECOSYSTEM_SLIDE_INDEX = 1; // panel "Ekosistem Brand" pakai animasi orbit, bukan foto statis

function loadPhoto(i) {
  const isEcosystem = i === ECOSYSTEM_SLIDE_INDEX;
  brandOrbit.classList.toggle("is-active", isEcosystem);

  if (isEcosystem) {
    photoImg.classList.remove("is-visible");
    photoPlaceholder.classList.add("is-hidden");
    return;
  }

  photoImg.classList.remove("is-visible");
  photoPlaceholder.classList.remove("is-hidden");
  photoPlaceholderText.innerHTML =
    "Taruh file <strong>" +
    slides[i].photoLabel +
    "</strong> (ilustrasi + background biru-oren) di sini";

  const testImg = new Image();
  testImg.onload = function () {
    if (i !== current) return; // slide sudah berpindah lagi sebelum gambar selesai dimuat
    photoImg.src = slides[i].photo;
    photoImg.classList.add("is-visible");
    photoPlaceholder.classList.add("is-hidden");
  };
  testImg.onerror = function () {
    /* file belum ada — biarkan placeholder tampil */
  };
  testImg.src = slides[i].photo;
}

function render() {
  const fadeEls = [titleEl, descEl, ctaEl];
  fadeEls.forEach((el) => el.classList.add("is-switching"));

  setTimeout(() => {
    titleEl.innerHTML = slides[current].title;
    descEl.textContent = slides[current].desc;
    ctaEl.textContent = slides[current].cta;
    fadeEls.forEach((el) => el.classList.remove("is-switching"));
  }, 250);

  segs.forEach((s, i) => s.classList.toggle("active", i === current));
  pills.forEach((p, i) => {
    p.classList.toggle("active", i === current);
    p.classList.toggle("outline", i !== current);
  });
  loadPhoto(current);
}

function goTo(i) {
  current = i;
  render();
}

segs.forEach((s) =>
  s.addEventListener("click", () => goTo(parseInt(s.dataset.i))),
);
pills.forEach((p) =>
  p.addEventListener("click", () => goTo(parseInt(p.dataset.i))),
);
render();

setInterval(() => goTo((current + 1) % slides.length), 5000);

/* ---------- Dock: efek magnify vanilla JS (pengganti framer-motion) ---------- */
const dock = document.getElementById("dock");
const dockItems = dock.querySelectorAll(".dock-item");
const BASE_SIZE = 44;
const MAX_SIZE = 76;
const DISTANCE = 140;

function sizeFromDistance(dist) {
  const d = Math.min(Math.abs(dist), DISTANCE);
  const t = 1 - d / DISTANCE;
  return BASE_SIZE + (MAX_SIZE - BASE_SIZE) * t;
}

dock.addEventListener("mousemove", (e) => {
  dockItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const size = sizeFromDistance(e.clientX - center);
    item.style.width = size + "px";
    item.style.height = size + "px";
  });
});

dock.addEventListener("mouseleave", () => {
  dockItems.forEach((item) => {
    item.style.width = BASE_SIZE + "px";
    item.style.height = BASE_SIZE + "px";
  });
});

// ---------- Marquee Papan Pengumuman (jalan otomatis + bisa digeser tombol) ----------
const papanMarquee = document.querySelector(".papan-marquee");
const papanTrack = document.getElementById("papanTrack");
const papanPrev = document.getElementById("papanPrev");
const papanNext = document.getElementById("papanNext");
const papanReduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const SPEED = 40; // px per detik (auto-scroll)
const SLIDE_DURATION = 450; // ms (durasi slide tombol)
let papanOffset = 0;
let papanPaused = false;
let papanLastTime = null;

// status animasi slide saat tombol diklik
let papanAnimating = false;
let papanAnimFrom = 0;
let papanAnimTo = 0;
let papanAnimStart = null;

function papanLoopWidth() {
  return papanTrack.scrollWidth / 2; // konten digandakan, jadi separuh = satu putaran
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function papanStep(timestamp) {
  if (papanLastTime === null) papanLastTime = timestamp;
  const delta = (timestamp - papanLastTime) / 1000;
  papanLastTime = timestamp;
  const loopWidth = papanLoopWidth();

  if (papanAnimating) {
    if (papanAnimStart === null) papanAnimStart = timestamp;
    const t = Math.min(1, (timestamp - papanAnimStart) / SLIDE_DURATION);
    papanOffset =
      papanAnimFrom + (papanAnimTo - papanAnimFrom) * easeOutCubic(t);
    if (t >= 1) {
      papanAnimating = false;
      papanOffset = ((papanAnimTo % loopWidth) + loopWidth) % loopWidth;
    }
  } else if (!papanPaused) {
    papanOffset = (papanOffset + SPEED * delta) % loopWidth;
  }

  papanTrack.style.transform = `translateX(${-papanOffset}px)`;
  requestAnimationFrame(papanStep);
}

function papanNudge(direction) {
  const card = papanTrack.querySelector(".papan-card");
  const step = card.offsetWidth + 24; // lebar kartu + gap
  const loopWidth = papanLoopWidth();

  // geser mundur sebelum offset 0 tak ada konten; lompat "tak kasat mata" ke posisi setara
  // di putaran berikutnya (kontennya sama karena digandakan), baru animasikan dari sana.
  if (direction < 0 && papanOffset - step < 0) papanOffset += loopWidth;

  papanAnimFrom = papanOffset;
  papanAnimTo = papanOffset + step * direction;
  papanAnimStart = null;
  papanAnimating = true;
}

papanMarquee.addEventListener("focusin", () => (papanPaused = true));
papanMarquee.addEventListener("focusout", () => (papanPaused = false));
papanPrev.addEventListener("click", () => papanNudge(-1));
papanNext.addEventListener("click", () => papanNudge(1));

// ---------- Geser pakai kursor (drag) ----------
let papanDragging = false;
let papanDragMoved = false;
let papanDragStartX = 0;
let papanDragStartOffset = 0;
let papanDragPointerId = null;

papanMarquee.addEventListener("pointerdown", (e) => {
  papanDragging = true;
  papanDragMoved = false;
  papanPaused = true; // baru berhenti saat ditekan, bukan saat kursor cuma lewat
  papanAnimating = false; // batalkan slide tombol yang sedang berjalan kalau ada
  papanDragStartX = e.clientX;
  papanDragStartOffset = papanOffset;
  papanDragPointerId = e.pointerId;
  // setPointerCapture & is-dragging SENGAJA belum diaktifkan di sini. setPointerCapture
  // me-retarget event click ke papanMarquee (bukan ke elemen aslinya), jadi kalau dipanggil
  // di pointerdown, klik biasa (tanpa geser) pada link "Baca Detail" tidak pernah nyampe ke
  // elemen <a>-nya. Baru diaktifkan di pointermove, setelah geseran beneran terdeteksi.
});

papanMarquee.addEventListener("pointermove", (e) => {
  if (!papanDragging) return;
  const dx = e.clientX - papanDragStartX;
  if (Math.abs(dx) > 4 && !papanDragMoved) {
    papanDragMoved = true;
    papanMarquee.setPointerCapture(papanDragPointerId);
    papanMarquee.classList.add("is-dragging");
  }
  if (!papanDragMoved) return;
  const loopWidth = papanLoopWidth();
  papanOffset =
    (((papanDragStartOffset - dx) % loopWidth) + loopWidth) % loopWidth;
  papanTrack.style.transform = `translateX(${-papanOffset}px)`;
});

function papanEndDrag() {
  if (!papanDragging) return;
  papanDragging = false;
  papanPaused = false; // lanjut jalan otomatis lagi setelah dilepas
  papanMarquee.classList.remove("is-dragging");
}

papanMarquee.addEventListener("pointerup", papanEndDrag);
papanMarquee.addEventListener("pointercancel", papanEndDrag);
papanMarquee.addEventListener("pointerleave", papanEndDrag);

// batalkan klik link kalau kartu barusan digeser, supaya drag tidak kebaca sebagai klik
papanTrack.addEventListener("click", (e) => {
  if (papanDragMoved) {
    e.preventDefault();
    papanDragMoved = false;
  }
});

if (papanReduceMotion) {
  papanTrack
    .querySelectorAll('.papan-card[aria-hidden="true"]')
    .forEach((card) => (card.style.display = "none"));
} else {
  requestAnimationFrame(papanStep);
}
