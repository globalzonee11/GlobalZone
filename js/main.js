// Database Data Desain & Produk Jersey
const jerseyCatalog = [
  {
    id: 1,
    title: "Setelan Futsal Neon Hyper",
    category: "futsal",
    price: "Rp 110.000",
    fabric: "Dryfit Milano Premium",
    image: "images/SAMPUL.webp",
    isNew: false
  },
  {
    id: 2,
    title: "Jersey Voli Smash Speed",
    category: "voli",
    price: "Rp 105.000",
    fabric: "Dryfit Milano",
    image: "images/SAMPUL.webp",
    isNew: false
  },
  {
    id: 3,
    title: "Jersey Mancing Wave Runner",
    category: "mancing",
    price: "Rp 125.000",
    fabric: "Dryfit Anti-UV",
    image: "images/SAMPUL.webp",
    isNew: false
  },
  {
    id: 4,
    title: "Setelan Sepakbola Cyber Blue",
    category: "sepakbola",
    price: "Rp 115.000",
    fabric: "Dryfit Brazil",
    image: "images/SAMPUL.webp",
    isNew: true // Item Terbaru
  }
];

// Data Teknologi Kain
const fabricCatalog = [
  {
    id: 1,
    name: "Dryfit Milano",
    desc: "Karakteristik serat zigzag halus, sirkulasi udara optimal, ringan, dan sangat menyerap keringat."
  },
  {
    id: 2,
    name: "Dryfit Brazil",
    desc: "Tekstur kain elastis, jatuh di badan dengan ketahanan gesekan yang sangat tinggi saat pertandingan."
  },
  {
    id: 3,
    name: "Dryfit Pique UV",
    desc: "Proteksi terhadap terik matahari luar ruangan, sangat cocok untuk jersey komunitas lari dan mancing."
  }
];

// Fungsi Mengurutkan Data dari yang Paling Baru (Berdasarkan ID terbesar)
function getSortedData(data) {
  return [...data].sort((a, b) => b.id - a.id);
}

// Render Produk ke #product-grid
function renderProducts(limit = null) {
  const container = document.getElementById("product-grid");
  if (!container) return;

  container.innerHTML = "";
  let list = getSortedData(jerseyCatalog);
  if (limit) list = list.slice(0, limit);

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "catalog-card relative";
    card.innerHTML = `
      <div>
        <div class="img-wrapper relative">
          ${item.isNew ? `<span class="badge-new">Terbaru</span>` : ""}
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="p-3">
          <h3 class="font-bold text-white uppercase text-xs mb-1">${item.title}</h3>
          <p class="text-slate-400 text-[10px] leading-relaxed">${item.fabric}</p>
        </div>
      </div>
      <div class="p-3 pt-0 mt-auto flex items-center justify-between border-t border-slate-800/80">
        <div>
          <span class="text-[9px] text-slate-500 block">Mulai dari</span>
          <span class="text-xs font-black text-neon-cyan">${item.price}</span>
        </div>
        <a href="https://wa.me/6283817075604?text=Halo%20Admin,%20saya%20tertarik%20pesan%20desain%20${encodeURIComponent(item.title)}" target="_blank" class="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-neon-cyan hover:bg-neon-cyan hover:text-slate-950 font-bold text-[10px] transition-all">
          Pesan
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Desain ke #design-grid
function renderDesigns(limit = null) {
  const container = document.getElementById("design-grid");
  if (!container) return;

  container.innerHTML = "";
  let list = getSortedData(jerseyCatalog);
  if (limit) list = list.slice(0, limit);

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "catalog-card relative group";
    card.innerHTML = `
      <div class="img-wrapper relative">
        ${item.isNew ? `<span class="badge-new">Terbaru</span>` : ""}
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="p-3">
        <h3 class="font-bold text-white uppercase text-xs">${item.title}</h3>
        <span class="text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">${item.category}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Teknologi Kain ke #fabric-grid
function renderFabrics() {
  const container = document.getElementById("fabric-grid");
  if (!container) return;

  container.innerHTML = "";
  fabricCatalog.forEach(fabric => {
    const card = document.createElement("div");
    card.className = "bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-neon-cyan/40 transition-all";
    card.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan mb-4">
        <i class="fa-solid fa-shield-halved"></i>
      </div>
      <h3 class="text-base font-bold text-white mb-2">${fabric.name}</h3>
      <p class="text-slate-400 text-xs leading-relaxed">${fabric.desc}</p>
    `;
    container.appendChild(card);
  });
}

// Mobile Menu Handler
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");
}

// Inisialisasi Saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  // Jika di index, batasi preview referensi sebanyak 3 atau 6 item terbaru
  const isIndex = document.getElementById("referensi");
  renderDesigns(isIndex ? 6 : null);
  renderFabrics();
});
