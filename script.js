/* ---------- Content + translations ---------- */
const SERVICE_GROUPS = [
  {
    en: "Lawns & upkeep", nl: "Gazon & onderhoud",
    items: [
      { icon: "🌱", en: "Grass cutting",       nl: "Gras maaien" },
      { icon: "🟩", en: "Lawn care",           nl: "Gazononderhoud" },
      { icon: "🌾", en: "Weeding",             nl: "Onkruid wieden" },
      { icon: "🌼", en: "Strimming",           nl: "Bosmaaien / trimmen" },
      { icon: "🧑‍🌾", en: "Garden maintenance",  nl: "Tuinonderhoud" }
    ]
  },
  {
    en: "Trees, hedges & pruning", nl: "Bomen, heggen & snoeien",
    items: [
      { icon: "✂️", en: "Hedge cutting",           nl: "Heggen knippen" },
      { icon: "🌿", en: "Pruning trees & plants",  nl: "Bomen & planten snoeien" },
      { icon: "🌳", en: "Tree felling & dismantling", nl: "Bomen kappen & verwijderen" },
      { icon: "🪵", en: "Stump removal",           nl: "Stronken verwijderen" }
    ]
  },
  {
    en: "Landscaping & construction", nl: "Aanleg & constructie",
    items: [
      { icon: "🌷", en: "Planting",        nl: "Beplanting" },
      { icon: "🧱", en: "Garden paving",   nl: "Bestrating & terrassen" },
      { icon: "🚧", en: "Fences",          nl: "Schuttingen & hekwerk" },
      { icon: "🔨", en: "Woodwork & more", nl: "Houtwerk & meer" }
    ]
  },
  {
    en: "Cleaning", nl: "Reiniging",
    items: [
      { icon: "🧹", en: "Garden & patio cleaning", nl: "Tuin & terras reinigen" },
      { icon: "🪜", en: "Gutter & pipe cleaning",  nl: "Goten & pijpen reinigen" }
    ]
  }
];

const I18N = {
  en: {
    brand: "Janusz Services",
    kicker: "Gardener · The Hague",
    tagline: "Gardening is the work of a lifetime.",
    heroSub: "Professional, reliable gardening for homes and businesses across The Hague and South Holland.",
    ctaContact: "Get in touch",
    ctaServices: "See services",
    aboutTitle: "Hi, I'm Janusz",
    aboutLead: "I'm a gardener offering professional and reliable gardening services that meet all of your needs.",
    aboutBody: "From basic gardening for residential homes to presentation-quality displays for businesses, functions and events — I'll keep your outdoor space looking its best across The Hague and South Holland.",
    servicesTitle: "What I do",
    pricingLabel: "Pricing",
    pricingFrom: "From",
    pricingUnit: "+ VAT per hour",
    pricingNote: "Get in touch for a free, no-obligation quote.",
    contactTitle: "Get in touch",
    contactLead: "Tell me what your garden needs and I'll get back to you.",
    labelPhone: "WhatsApp / Call",
    labelWhatsapp: "WhatsApp",
    labelEmail: "Email",
    labelFacebook: "Facebook",
    labelInstagram: "Instagram",
    workPrompt: "See photos of my recent work",
    location: "📍 The Hague & South Holland, Netherlands",
    footerTag: "The Hague & South Holland"
  },
  nl: {
    brand: "Janusz Services",
    kicker: "Hovenier · Den Haag",
    tagline: "Tuinieren is het werk van een leven.",
    heroSub: "Professioneel en betrouwbaar tuinonderhoud voor particulieren en bedrijven in Den Haag en Zuid-Holland.",
    ctaContact: "Neem contact op",
    ctaServices: "Bekijk diensten",
    aboutTitle: "Hallo, ik ben Janusz",
    aboutLead: "Ik ben hovenier en bied professionele, betrouwbare tuindiensten die aan al uw wensen voldoen.",
    aboutBody: "Van basaal tuinonderhoud voor woningen tot verzorgde tuinen voor bedrijven, functies en evenementen — ik houd uw buitenruimte op zijn best in Den Haag en Zuid-Holland.",
    servicesTitle: "Wat ik doe",
    pricingLabel: "Tarief",
    pricingFrom: "Vanaf",
    pricingUnit: "+ btw per uur",
    pricingNote: "Neem contact op voor een vrijblijvende offerte.",
    contactTitle: "Neem contact op",
    contactLead: "Vertel me wat uw tuin nodig heeft en ik neem contact met u op.",
    labelPhone: "WhatsApp / Bellen",
    labelWhatsapp: "WhatsApp",
    labelEmail: "E-mail",
    labelFacebook: "Facebook",
    labelInstagram: "Instagram",
    workPrompt: "Bekijk foto's van mijn recente werk",
    location: "📍 Den Haag & Zuid-Holland, Nederland",
    footerTag: "Den Haag & Zuid-Holland"
  }
};

/* ---------- Render grouped services ---------- */
function renderServices(lang){
  const wrap = document.getElementById("servicesGrid");
  wrap.innerHTML = SERVICE_GROUPS.map(g => `
    <div class="svc-group">
      <h3 class="svc-group-title">${g[lang]}</h3>
      <ul class="services-list">
        ${g.items.map(s => `<li>${s[lang]}</li>`).join("")}
      </ul>
    </div>`).join("");
}

/* ---------- Apply language ---------- */
function setLang(lang){
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  renderServices(lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
  try { localStorage.setItem("janusz-lang", lang); } catch(e){}
}

/* ---------- Init ---------- */
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let start = "en";
try { const saved = localStorage.getItem("janusz-lang"); if (saved) start = saved; } catch(e){}
setLang(start);

document.getElementById("year").textContent = new Date().getFullYear();
