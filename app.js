const CATEGORIES = [
  { slug: "originals", label: "ORIGINALS" },
  { slug: "jon-lemen", label: "JON LEMEN" },
  { slug: "brew", label: "BREW" },
];

const PRODUCTS = [
  {
    id: "001",
    slug: "og-bone-tee",
    name: "OG Bone Tee",
    category: "originals",
    categoryLabel: "ORIGINALS",
    price: 38,
    sku: "SG-OG-001",
    color: "#ece6d6",
    colorName: "BONE",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Heavyweight 240gsm cotton. Boxy fit. Front chest print, plain back.",
    season: "SS26",
  },
  {
    id: "002",
    slug: "og-coal-tee",
    name: "OG Coal Tee",
    category: "originals",
    categoryLabel: "ORIGINALS",
    price: 38,
    sku: "SG-OG-002",
    color: "#1a1a1a",
    colorName: "COAL",
    sizes: ["S", "M", "L", "XL"],
    description: "Heavyweight 240gsm cotton, garment-dyed coal black. Boxy fit.",
    season: "SS26",
  },
  {
    id: "003",
    slug: "og-rust-tee",
    name: "OG Rust Tee",
    category: "originals",
    categoryLabel: "ORIGINALS",
    price: 38,
    sku: "SG-OG-003",
    color: "#a14a2a",
    colorName: "RUST",
    sizes: ["S", "M", "L"],
    description:
      "Heavyweight 240gsm cotton, garment-dyed rust. Limited run of 80.",
    season: "SS26",
  },
  {
    id: "004",
    slug: "jl-portrait-tee",
    name: "Portrait Tee",
    category: "jon-lemen",
    categoryLabel: "JON LEMEN",
    price: 42,
    sku: "SG-JL-001",
    color: "#f0ece2",
    colorName: "NATURAL",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Jon Lemen series. Hand-drawn portrait print, screen printed by hand.",
    season: "SS26",
  },
  {
    id: "005",
    slug: "jl-static-tee",
    name: "Static Tee",
    category: "jon-lemen",
    categoryLabel: "JON LEMEN",
    price: 42,
    sku: "SG-JL-002",
    color: "#2a2a2a",
    colorName: "BLACK",
    sizes: ["M", "L", "XL"],
    description:
      "Jon Lemen series. Full-bleed static pattern. One-color print on heavyweight.",
    season: "SS26",
  },
  {
    id: "006",
    slug: "jl-loop-tee",
    name: "Loop Tee",
    category: "jon-lemen",
    categoryLabel: "JON LEMEN",
    price: 42,
    sku: "SG-JL-003",
    color: "#c5b8a0",
    colorName: "SAND",
    sizes: ["S", "M", "L"],
    description:
      "Jon Lemen series. Looping line drawing wraps the body, side seam to side seam.",
    season: "SS26",
  },
  {
    id: "007",
    slug: "brew-pot-tee",
    name: "Pot Tee",
    category: "brew",
    categoryLabel: "BREW",
    price: 36,
    sku: "SG-BR-001",
    color: "#5a4a3a",
    colorName: "MOCHA",
    sizes: ["S", "M", "L", "XL"],
    description: "Brew series. Coffee pot icon, chest hit. Mocha pigment dye.",
    season: "SS26",
  },
  {
    id: "008",
    slug: "brew-grind-tee",
    name: "Grind Tee",
    category: "brew",
    categoryLabel: "BREW",
    price: 36,
    sku: "SG-BR-002",
    color: "#e8dcc4",
    colorName: "CREAM",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Brew series. Specification-sheet print front and back. Cream cotton.",
    season: "SS26",
  },
  {
    id: "009",
    slug: "brew-roast-tee",
    name: "Roast Tee",
    category: "brew",
    categoryLabel: "BREW",
    price: 36,
    sku: "SG-BR-003",
    color: "#3a2a1f",
    colorName: "ROAST",
    sizes: ["M", "L", "XL"],
    description:
      "Brew series. Dark roast colorway. Small back-neck print only.",
    season: "SS26",
  },
];

const BUILD_TS = new Date().toISOString().slice(0, 10);
const BASE_PATH = "/goofy-clothing";

if (window.location.hostname === "n473cl0.github.io" && window.location.pathname === "/") {
  window.location.replace(`${BASE_PATH}/`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeHref(path) {
  if (path === "/") return `${BASE_PATH}/`;
  return `${BASE_PATH}${path}`;
}

function appPathFromLocation(pathname) {
  const normalizedBase = BASE_PATH.endsWith("/") ? BASE_PATH.slice(0, -1) : BASE_PATH;
  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) return "/";
  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length).replace(/\/$/, "") || "/";
  }
  return pathname.replace(/\/$/, "") || "/";
}

function navigate(event) {
  const link = event.target.closest("a[data-route]");
  if (!link) return;
  event.preventDefault();
  const next = new URL(link.getAttribute("href"), window.location.origin);
  history.pushState({}, "", next.pathname);
  render();
}

function hangerTee(color, size = 240) {
  const height = size * 1.4;
  return `
    <svg width="${size}" height="${height}" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 28 C100 16, 108 8, 100 4" stroke="#0a0a0a" stroke-width="2" fill="none" stroke-linecap="round"></path>
      <path d="M100 28 L40 70 Q38 74 42 76 L158 76 Q162 74 160 70 Z" stroke="#0a0a0a" stroke-width="1.5" fill="none"></path>
      <path d="M55 80 L40 70 L20 95 L40 115 L55 105 L55 260 L145 260 L145 105 L160 115 L180 95 L160 70 L145 80 Q130 95 100 95 Q70 95 55 80 Z" fill="${escapeHtml(color)}" stroke="#0a0a0a" stroke-width="1.25" stroke-linejoin="round"></path>
      <path d="M80 78 Q100 92 120 78" stroke="#0a0a0a" stroke-width="1.25" fill="none"></path>
    </svg>
  `;
}

function header(pathname) {
  const nav = CATEGORIES.map((category, index) => {
    const href = `/category/${category.slug}`;
    const slash = index === CATEGORIES.length - 1 ? "" : '<span class="muted">/</span>';
    return `<a data-route href="${routeHref(href)}" class="${pathname === href ? "active" : ""}">${category.label}</a>${slash}`;
  }).join("");

  return `
    <header class="site-header">
      <div class="header-inner">
        <a data-route href="${routeHref("/")}" class="brand" aria-label="Goofy Clothing home">Goofy Clothing<span class="brand-dot">.</span></a>
        <nav class="site-nav">
          ${nav}
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <div class="muted">// info</div>
          <ul>
            <li><span class="muted">goofyclothing.co.uk</span></li>
            <li><a href="mailto:hello@goofyclothing.co.uk">hello@goofyclothing.co.uk</a></li>
          </ul>
        </div>
        <div>
          <div class="muted">// help</div>
          <ul>
            <li><span class="muted">Shipping</span></li>
            <li><span class="muted">Returns</span></li>
            <li><span class="muted">FAQ</span></li>
          </ul>
        </div>
        <div>
          <div class="muted">// follow</div>
          <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="mailto:hello@goofyclothing.co.uk">hello@goofyclothing.co.uk</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <span>© Goofy Clothing ${new Date().getFullYear()}</span>
          <span>v0.1.0 · built ${BUILD_TS}</span>
        </div>
      </div>
    </footer>
  `;
}

function strip(left, center, right) {
  return `
    <div class="strip">
      <div class="strip-inner">
        <span>${left}</span>
        <span>${center}</span>
        <span>${right}</span>
      </div>
    </div>
  `;
}

function rail(products, compact = false) {
  const itemWidth = compact ? 200 : 260;
  const overlap = compact ? 80 : 110;
  const top = compact ? 30 : 38;
  const items = products
    .map((product, index) => {
      const margin = index === 0 ? 0 : -overlap;
      return `
        <a
          data-route
          class="rail-item"
          href="${routeHref(`/product/${product.slug}`)}"
          style="width: ${itemWidth}px; margin-left: ${margin}px; z-index: ${10 - Math.min(index, 9)}"
          data-index="${index}"
        >
          <div class="tee-wrap" style="transform: rotate(12deg) scale(1)">
            ${hangerTee(product.color, itemWidth)}
          </div>
          <div class="rail-meta" style="top: ${itemWidth * 1.42 + 4}px">
            <div class="meta-small">${product.sku} · ${product.colorName}</div>
            <div class="meta-name">${product.name}</div>
            <div class="meta-price">£${product.price}</div>
          </div>
        </a>
      `;
    })
    .join("");

  return `
    <div class="rail" data-rail>
      <div class="rail-rod" style="top: ${top}px"></div>
      <div class="rail-scroll">
        <div class="rail-items">${items}</div>
      </div>
    </div>
  `;
}

function homePage() {
  return `
    ${strip("// rail 01 - ss26", `${String(PRODUCTS.length).padStart(2, "0")} pieces`, "scroll ->")}
    <section class="rail-section">${rail(PRODUCTS)}</section>
    <section class="statement">
      <div class="eyebrow">// statement</div>
      <p>We make t-shirts. Heavyweight cotton, garment-dyed, printed by hand in small runs. No drops, no hype, no nonsense. If you want one, take one off the rail.</p>
    </section>
  `;
}

function categoryPage(slug) {
  const category = CATEGORIES.find((item) => item.slug === slug);
  if (!category) return notFoundPage();
  const items = PRODUCTS.filter((product) => product.category === category.slug);
  return `
    ${strip(`// ${category.label.toLowerCase()}`, `${String(items.length).padStart(2, "0")} pieces`, "scroll ->")}
    <section class="rail-section">${rail(items)}</section>
  `;
}

function productPage(slug) {
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) return notFoundPage();
  const related = PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id,
  ).slice(0, 3);

  const sizes = ["S", "M", "L", "XL"]
    .map((size) => {
      const available = product.sizes.includes(size);
      return `
        <button
          class="size-button ${available ? "" : "unavailable"}"
          ${available ? "" : "disabled"}
          data-size="${size}"
        >[ ${size} ]</button>
      `;
    })
    .join("");

  return `
    ${strip(`<a data-route class="link" href="${routeHref("/")}">← rail</a>`, `// ${product.categoryLabel.toLowerCase()} / ${product.sku}`, product.season)}
    <div class="product-grid">
      <div class="product-art">${hangerTee(product.color, 420)}</div>
      <div>
        <div class="product-category">${product.categoryLabel}</div>
        <h1 class="product-title">${product.name}</h1>
        <div class="product-price">£${product.price.toFixed(2)}</div>
        <p class="product-description">${product.description}</p>
        <div class="specs">
          <div class="spec-row"><span class="muted">SKU</span><span>${product.sku}</span></div>
          <div class="spec-row"><span class="muted">Color</span><span>${product.colorName}</span></div>
          <div class="spec-row"><span class="muted">Season</span><span>${product.season}</span></div>
        </div>
        <div class="size-block">
          <div class="eyebrow">// size</div>
          <div class="sizes">${sizes}</div>
        </div>
        <button class="dark-button add-to-cart" data-cart>Add to cart -></button>
        <div class="reserve-note">// shop opens soon · email to reserve</div>
      </div>
    </div>
    ${
      related.length
        ? `<section class="related"><div class="related-label">// related</div>${rail(related, true)}</section>`
        : ""
    }
  `;
}

function notFoundPage() {
  return `
    <div class="not-found">
      <div>
        <div class="eyebrow">// 404</div>
        <h1>Page not found.</h1>
        <a data-route href="${routeHref("/")}" class="outline-link">Back to rail</a>
      </div>
    </div>
  `;
}

function routeFor(pathname) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  if (cleanPath === "/") return homePage();
  if (cleanPath.startsWith("/category/")) {
    return categoryPage(decodeURIComponent(cleanPath.slice("/category/".length)));
  }
  if (cleanPath.startsWith("/product/")) {
    return productPage(decodeURIComponent(cleanPath.slice("/product/".length)));
  }
  return notFoundPage();
}

function activateRails() {
  document.querySelectorAll("[data-rail]").forEach((railElement) => {
    const items = [...railElement.querySelectorAll(".rail-item")];

    function applyHover(hoveredIndex) {
      items.forEach((item, index) => {
        const isHovered = hoveredIndex === index;
        const isLeft = hoveredIndex !== null && index < hoveredIndex;
        const isRight = hoveredIndex !== null && index > hoveredIndex;
        const distance = hoveredIndex === null ? 0 : Math.abs(index - hoveredIndex);
        const shiftMagnitude =
          hoveredIndex === null ? 0 : Math.max(0, 80 - distance * 8);
        const shift = isLeft ? -shiftMagnitude : isRight ? shiftMagnitude : 0;
        const rotation = isHovered ? 0 : 12;
        const scale = isHovered ? 1.06 : 1;
        const z = isHovered ? 40 : 10 - Math.min(distance, 9);

        item.classList.toggle("is-hovered", isHovered);
        item.style.transform = `translateX(${shift}px)`;
        item.style.zIndex = z;
        item.querySelector(".tee-wrap").style.transform = `rotate(${rotation}deg) scale(${scale})`;
      });
    }

    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => applyHover(index));
      item.addEventListener("focus", () => applyHover(index));
      item.addEventListener("mouseleave", () => applyHover(null));
      item.addEventListener("blur", () => applyHover(null));
    });
  });
}

function activateForms() {
  document.querySelectorAll("[data-size]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-size]")
        .forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });

  const cartButton = document.querySelector("[data-cart]");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      alert("Cart isn't open yet. Email hello@goofyclothing.co.uk to reserve.");
    });
  }
}

function render() {
  const pathname = appPathFromLocation(window.location.pathname);
  document.getElementById("app").innerHTML = `
    <div class="app-shell">
      ${header(pathname)}
      <main class="main">${routeFor(pathname)}</main>
      ${footer()}
    </div>
  `;
  document.title = "Goofy Clothing - t-shirts";
  activateRails();
  activateForms();
  window.scrollTo({ top: 0, left: 0 });
}

document.addEventListener("click", navigate);
window.addEventListener("popstate", render);
render();
