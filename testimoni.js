(function () {
  const grid = document.getElementById("testimoniGrid");
  const empty = document.getElementById("testimoniEmpty");
  const filter = document.getElementById("testimoniFilter");
  const background = document.getElementById("testimoniBg");

  if (!grid || !empty || !filter || typeof TESTIMONI === "undefined") {
    return;
  }

  const sumberLabel = {
    peserta: "Peserta",
    orangtua: "Orang Tua",
    guru: "Guru",
    sekolah: "Sekolah",
    mitra: "Mitra",
    alumni: "Alumni",
  };

  function createAvatar(testimoni, className) {
    if (testimoni.foto && className === "testimoni-foto") {
      const image = document.createElement("img");
      image.src = testimoni.foto;
      image.alt = testimoni.nama;
      image.loading = "lazy";
      image.decoding = "async";
      image.className = className;
      return image;
    }

    const avatar = document.createElement("div");
    avatar.className = className;
    avatar.textContent = testimoni.nama.charAt(0).toUpperCase();
    avatar.setAttribute("aria-hidden", "true");
    return avatar;
  }

  function createCard(testimoni) {
    const card = document.createElement("article");
    card.className = "testimoni-card";

    const header = document.createElement("div");
    header.className = "testimoni-card-head";
    header.appendChild(
      testimoni.foto
        ? createAvatar(testimoni, "testimoni-foto")
        : createAvatar(testimoni, "testimoni-avatar"),
    );

    const name = document.createElement("div");
    name.className = "testimoni-nama";
    name.textContent = testimoni.nama;
    header.appendChild(name);

    const badge = document.createElement("span");
    badge.className = "testimoni-badge";
    badge.textContent = sumberLabel[testimoni.sumber] || testimoni.sumber;

    const quote = document.createElement("p");
    quote.className = "testimoni-isi";
    quote.textContent = `“${testimoni.isi}”`;

    const origin = document.createElement("div");
    origin.className = "testimoni-status";
    origin.textContent = testimoni.statusAsal;

    const meta = document.createElement("div");
    meta.className = "testimoni-meta";
    meta.textContent = `${testimoni.event} · ${testimoni.tahun}`;

    card.append(header, badge, quote, origin, meta);
    return card;
  }

  function render(source) {
    const items =
      source === "semua"
        ? TESTIMONI
        : TESTIMONI.filter((item) => item.sumber === source);

    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.appendChild(createCard(item)));

    grid.replaceChildren(fragment);
    empty.hidden = items.length > 0;
  }

  function createBackgroundCard(testimoni) {
    const card = document.createElement("div");
    card.className = "testimoni-bg-card";

    const avatar = createAvatar(testimoni, "testimoni-bg-avatar");

    const name = document.createElement("div");
    name.className = "testimoni-bg-nama";
    name.textContent = testimoni.nama;

    const quote = document.createElement("div");
    quote.className = "testimoni-bg-isi";
    quote.textContent = testimoni.isi;

    card.append(avatar, name, quote);
    return card;
  }

  function renderAnimatedBackground() {
    if (!background || !TESTIMONI.length) {
      return;
    }

    const columns = 5;
    const repetitions = 2;
    const backgroundFragment = document.createDocumentFragment();

    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const column = document.createElement("div");
      column.className = `testimoni-bg-col${columnIndex % 2 ? " is-reverse" : ""}`;
      column.style.setProperty("--bg-delay", `${columnIndex * -5.5}s`);

      const unit = [];
      for (let repetition = 0; repetition < repetitions; repetition += 1) {
        TESTIMONI.forEach((_, itemIndex) => {
          unit.push(TESTIMONI[(itemIndex + columnIndex) % TESTIMONI.length]);
        });
      }

      [...unit, ...unit].forEach((testimoni) => {
        column.appendChild(createBackgroundCard(testimoni));
      });

      backgroundFragment.appendChild(column);
    }

    background.replaceChildren(backgroundFragment);
  }

  filter.addEventListener("click", (event) => {
    const button = event.target.closest(".testimoni-chip");
    if (!button) {
      return;
    }

    filter.querySelectorAll(".testimoni-chip").forEach((chip) => {
      const active = chip === button;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });

    render(button.dataset.sumber || "semua");
  });

  filter.querySelectorAll(".testimoni-chip").forEach((chip) => {
    chip.setAttribute(
      "aria-pressed",
      chip.classList.contains("is-active") ? "true" : "false",
    );
  });

  render("semua");
  renderAnimatedBackground();
})();
