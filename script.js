/* ---------- Content + translations ---------- */
const SERVICES = [
  { icon: "🌳", en: "Tree felling & dismantling", nl: "Bomen kappen & verwijderen" },
  { icon: "✂️", en: "Hedge cutting",              nl: "Heggen knippen" },
  { icon: "🪵", en: "Stump removal",              nl: "Stronken verwijderen" },
  { icon: "🌿", en: "Pruning trees & plants",     nl: "Bomen & planten snoeien" },
  { icon: "🧑‍🌾", en: "Garden maintenance",         nl: "Tuinonderhoud" },
  { icon: "🌱", en: "Grass cutting",              nl: "Gras maaien" },
  { icon: "🧹", en: "Garden & patio cleaning",    nl: "Tuin & terras reinigen" },
  { icon: "🌷", en: "Planting",                   nl: "Beplanting" },
  { icon: "🌾", en: "Weeding",                    nl: "Onkruid wieden" },
  { icon: "🌼", en: "Strimming",                  nl: "Bosmaaien / trimmen" },
  { icon: "🟩", en: "Lawn care",                  nl: "Gazononderhoud" },
  { icon: "🪜", en: "Gutter & pipe cleaning",     nl: "Goten & pijpen reinigen" },
  { icon: "🔨", en: "Woodwork & more",            nl: "Houtwerk & meer" }
];

const I18N = {
  en: {
    brand: "Janusz Services",
    kicker: "Gardener · The Hague",
    tagline: "Gardening is the work of a lifetime.",
    heroSub: "Professional, reliable gardening for homes and businesses across Den Haag.",
    ctaContact: "Get in touch",
    ctaServices: "See services",
    aboutTitle: "Hi, I'm Janusz",
    aboutLead: "I'm a gardener offering professional and reliable gardening services that meet all of your needs.",
    aboutBody: "From basic gardening for residential homes to presentation-quality displays for businesses, functions and events — I'll keep your outdoor space looking its best.",
    servicesTitle: "What I do",
    pricingLabel: "Pricing",
    pricingFrom: "From",
    pricingUnit: "+ tax per hour",
    pricingNote: "Get in touch for a free, no-obligation quote.",
    contactTitle: "Get in touch",
    contactLead: "Tell me what your garden needs and I'll get back to you.",
    labelPhone: "Call",
    labelWhatsapp: "WhatsApp",
    labelEmail: "Email",
    labelFacebook: "Facebook",
    location: "📍 The Hague (Den Haag), Netherlands",
    footerTag: "The Hague"
  },
  nl: {
    brand: "Janusz Services",
    kicker: "Hovenier · Den Haag",
    tagline: "Tuinieren is het werk van een leven.",
    heroSub: "Professioneel en betrouwbaar tuinonderhoud voor particulieren en bedrijven in Den Haag.",
    ctaContact: "Neem contact op",
    ctaServices: "Bekijk diensten",
    aboutTitle: "Hallo, ik ben Janusz",
    aboutLead: "Ik ben hovenier en bied professionele, betrouwbare tuindiensten die aan al uw wensen voldoen.",
    aboutBody: "Van basaal tuinonderhoud voor woningen tot verzorgde tuinen voor bedrijven, functies en evenementen — ik houd uw buitenruimte op zijn best.",
    servicesTitle: "Wat ik doe",
    pricingLabel: "Tarief",
    pricingFrom: "Vanaf",
    pricingUnit: "+ btw per uur",
    pricingNote: "Neem contact op voor een vrijblijvende offerte.",
    contactTitle: "Neem contact op",
    contactLead: "Vertel me wat uw tuin nodig heeft en ik neem contact met u op.",
    labelPhone: "Bellen",
    labelWhatsapp: "WhatsApp",
    labelEmail: "E-mail",
    labelFacebook: "Facebook",
    location: "📍 Den Haag, Nederland",
    footerTag: "Den Haag"
  }
};

/* ---------- Render services ---------- */
function renderServices(lang){
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map(s =>
    `<li><span class="svc-ico" aria-hidden="true">${s.icon}</span>${s[lang]}</li>`
  ).join("");
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
