// Sample content for CATÉ mockups (Kyiv). Photos: photos/ (Unsplash placeholders).
(function () {
const P = (n) => "photos/" + n + ".jpg";
const S1 = "Podil Street Rescue", S2 = "Obolon Feline Aid", S3 = "Irpin Senior Cats";
const cats = [
  { id: "0142", name: "Juniper", age: "4 yrs", sex: "Female", location: "Podil", shelter: S1, photo: P("tabby-sofa"), inset: P("blanket-tabby"), photos: [P("tabby-sofa"), { src: P("blanket-tabby"), caption: "Her spot, every afternoon." }, P("tabby-stairs"), P("chin-scratch")], line: "Wants a windowsill and a slow Sunday.", traits: ["lap cat", "chatty", "early riser", "food-motivated"], compat: { kids: "yes", cats: "maybe", dogs: "no" }, status: "available", waiting: 38 },
  { id: "0157", name: "Otto", age: "9 mo", sex: "Male", location: "Obolon", shelter: S2, photo: P("paw-reach"), inset: P("kitten-walk"), line: "Will supervise every grocery delivery.", traits: ["curious", "playful", "brave"], compat: { kids: "yes", cats: "yes", dogs: "yes" }, status: "new", waiting: 3 },
  { id: "0133", name: "Pepper", age: "2 yrs", sex: "Female", location: "Pechersk", shelter: S1, photo: P("peek"), line: "Takes a day to trust you, then follows you room to room.", traits: ["shy at first", "loyal", "quiet"], compat: { kids: "maybe", cats: "yes", dogs: "no" }, status: "pending", waiting: 21 },
  { id: "0121", name: "Biscuit", age: "6 yrs", sex: "Male", location: "Osokorky", shelter: S3, photo: P("yawn"), line: "Thinks every sunbeam was put there for him.", traits: ["laid-back", "sunbather", "gentle"], compat: { kids: "yes", cats: "yes", dogs: "maybe" }, status: "available", waiting: 64 },
  { id: "0109", name: "Mochi", age: "3 yrs", sex: "Female", location: "Podil", shelter: S1, photo: P("colorpoint"), line: "Talks back. Has opinions about breakfast.", traits: ["vocal", "affectionate", "smart"], compat: { kids: "maybe", cats: "no", dogs: "no" }, status: "available", waiting: 45 },
  { id: "0088", name: "Walter", age: "12 yrs", sex: "Male", location: "Irpin", shelter: S3, photo: P("ginger-stretch"), line: "A retired gentleman seeking a warm radiator.", traits: ["senior", "calm", "lap cat"], compat: { kids: "yes", cats: "yes", dogs: "yes" }, status: "urgent", waiting: 212 },
  { id: "0160", name: "Clementine", age: "1 yr", sex: "Female", location: "Sviatoshyn", shelter: S2, photo: P("strut"), line: "Counter surfer. Excellent company for cooks.", traits: ["confident", "playful", "social"], compat: { kids: "yes", cats: "yes", dogs: "unknown" }, status: "new", waiting: 5 },
  { id: "0114", name: "Ziggy", age: "1 yr", sex: "Male", location: "Troieshchyna", shelter: S1, photo: "photos/meow-bandana.webp", inset: P("roll"), line: "Announces himself at every door.", traits: ["attention-seeking", "sweet", "clumsy"], compat: { kids: "yes", cats: "maybe", dogs: "yes" }, status: "available", waiting: 30 },
  { id: "0149", name: "Snow", age: "7 yrs", sex: "Female", location: "Vyshneve", shelter: S3, photo: P("white-cat"), line: "Deaf in one ear, unbothered by thunderstorms.", traits: ["special needs", "calm", "observant"], compat: { kids: "maybe", cats: "yes", dogs: "no" }, status: "available", waiting: 88 },
  { id: "0126", name: "Fig", age: "5 yrs", sex: "Male", location: "Lukianivka", shelter: S1, photo: P("bicolor"), line: "Sits on whatever you're reading.", traits: ["lap cat", "steady", "nosy"], compat: { kids: "yes", cats: "yes", dogs: "unknown" }, status: "available", waiting: 52 },
  { id: "0131", name: "Ash", age: "3 yrs", sex: "Male", location: "Obolon", shelter: S2, photo: P("grey-shorthair"), line: "Follows the sun around the apartment.", traits: ["quiet", "gentle", "tidy"], compat: { kids: "yes", cats: "maybe", dogs: "maybe" }, status: "available", waiting: 27 },
  { id: "0163", name: "Marmalade", age: "8 mo", sex: "Female", location: "Podil", shelter: S1, photo: P("kitten-tabby"), line: "Tries every box. Fits in most of them.", traits: ["playful", "curious", "fearless"], compat: { kids: "yes", cats: "yes", dogs: "yes" }, status: "new", waiting: 2 },
];
const shelters = [
  { name: S1, area: "Podil, Kyiv", distance: "2.4 mi", catCount: 31, cats: [P("tabby-sofa"), P("colorpoint"), P("bicolor"), P("grey-shorthair")], hours: "Open today 11–6", responds: "Replies in ~1 day" },
  { name: S2, area: "Obolon, Kyiv", distance: "4.3 mi", catCount: 18, cats: [P("kitten-tabby"), P("kitchen-cat")], hours: "Open today 12–5", responds: "Replies in ~2 days" },
  { name: S3, area: "Irpin", distance: "13 mi", catCount: 9, cats: [P("ginger-stretch"), P("white-cat"), P("ginger-sleep")], hours: "By appointment", responds: "Replies in ~1 day" },
];
const S4 = "Bucha Cat House", S5 = "Darnytsia Cat Room", S6 = "Brovary Street Cats";
cats.push(
  { id: "0201", name: "Pip", age: "7 mo", sex: "Male", location: "Bucha", shelter: S4, photo: P("roll"), line: "Rolls over for strangers. Regrets nothing.", traits: ["playful", "social", "silly"], compat: { kids: "yes", cats: "yes", dogs: "maybe" }, status: "new", waiting: 6 },
  { id: "0202", name: "Hazel", age: "2 yrs", sex: "Female", location: "Bucha", shelter: S4, photo: P("peek"), line: "Watches from doorways until she's sure.", traits: ["shy at first", "gentle"], compat: { kids: "maybe", cats: "yes", dogs: "no" }, status: "available", waiting: 41 },
  { id: "0203", name: "Tango", age: "1 yr", sex: "Male", location: "Bucha", shelter: S4, photo: P("strut"), line: "Walks every room like he owns the lease.", traits: ["confident", "curious"], compat: { kids: "yes", cats: "maybe", dogs: "yes" }, status: "available", waiting: 19 },
  { id: "0211", name: "Olive", age: "4 yrs", sex: "Female", location: "Darnytsia", shelter: S5, photo: P("blanket-tabby"), line: "Makes a nest out of any blanket left alone.", traits: ["lap cat", "calm"], compat: { kids: "yes", cats: "yes", dogs: "unknown" }, status: "available", waiting: 33 },
  { id: "0212", name: "Bruno", age: "9 yrs", sex: "Male", location: "Darnytsia", shelter: S5, photo: P("ginger-sleep"), line: "Naps in shifts. Very committed to them.", traits: ["senior", "easy-going"], compat: { kids: "yes", cats: "yes", dogs: "yes" }, status: "urgent", waiting: 140 },
  { id: "0213", name: "Kiwi", age: "10 mo", sex: "Female", location: "Darnytsia", shelter: S5, photo: P("kitten-walk"), line: "Chases the light from your watch.", traits: ["playful", "brave"], compat: { kids: "yes", cats: "yes", dogs: "maybe" }, status: "new", waiting: 4 },
  { id: "0221", name: "Sable", age: "6 yrs", sex: "Female", location: "Brovary", shelter: S6, photo: P("tabby-stairs"), line: "Waits on the third step for you to come home.", traits: ["loyal", "quiet"], compat: { kids: "maybe", cats: "no", dogs: "no" }, status: "available", waiting: 97 },
  { id: "0222", name: "Rusty", age: "3 yrs", sex: "Male", location: "Brovary", shelter: S6, photo: P("ginger-lounge"), line: "Drapes himself over the arm of the sofa.", traits: ["laid-back", "affectionate"], compat: { kids: "yes", cats: "yes", dogs: "maybe" }, status: "available", waiting: 58 }
);
const extraShelters = [
  { name: S4, area: "Bucha", distance: "16 mi", catCount: 14, cats: [P("roll"), P("peek"), P("strut")], hours: "Sat–Sun 10–4", responds: "Replies in ~2 days" },
  { name: S5, area: "Darnytsia, Kyiv", distance: "6.1 mi", catCount: 22, cats: [P("yawn"), P("bicolor"), P("grey-shorthair"), P("paw-reach")], hours: "Open today 10–7", responds: "Replies in ~1 day" },
  { name: S6, area: "Brovary", distance: "14 mi", catCount: 11, cats: [P("ginger-lounge"), P("white-cat")], hours: "By appointment", responds: "Replies in ~3 days" },
];
const slugs = { [S1]: "podil", [S2]: "obolon", [S3]: "irpin", [S4]: "bucha", [S5]: "darnytsia", [S6]: "brovary" };
const tags = { podil: ["open", "weekend", "kittens"], obolon: ["open", "kittens"], irpin: ["seniors", "weekend"], bucha: ["weekend", "kittens"], darnytsia: ["open", "seniors"], brovary: ["seniors"] };
const sheltersAll = shelters.concat(extraShelters).map((s) => { const slug = slugs[s.name]; return Object.assign(s, { slug, href: "Shelter.dc.html?id=" + slug, tags: tags[slug] }); });
const details = {
  podil: { short: "Podil Street", since: 2017, place: "Podil, Kyiv", heroPhoto: P("kitchen-cat"), heroInset: P("chin-scratch"), heroAlt: "Cat in the shelter kitchen",
    lede: "A ground-floor flat and a courtyard, run by four volunteers and a vet who comes on Thursdays. They take the cats other places can't: seniors, shy ones, cats who've lost their person.",
    adopted: "412", reply: "~1 day",
    storyTitle: "One cat, a borrowed carrier, and a very patient landlord.", storyLead: "It started with one cat under a car. Now it's a home for many.", storyNote: "Same flat. Many more beds.",
    story1: "Maya found the first one — a grey tom with a torn ear — under a car on Kostiantynivska in the winter of 2017. The vet bill was more than her rent. By spring there were six cats in her flat and a sign on the courtyard gate.",
    story2: "Today the flat is the shelter. Every cat has a bed near a window, a name on the door and a volunteer who knows what they like for breakfast. Cats stay as long as they need to.",
    quote: "We don't rush anyone. The right person usually writes the longest application.", person: "Maya R.", role: "founder", personPhoto: P("colorpoint"),
    address: "Kostiantynivska St 21, Kyiv", directions: "Courtyard entrance, green gate. Five minutes from Kontraktova Ploshcha metro.",
    hours: [["Mon–Fri", "11:00–18:00"], ["Saturday", "10:00–14:00"], ["Sunday", "Closed — cats' day off"]],
    phone: "+380 44 425 1180", email: "hello@podilstreet.org", reads: "Maya reads every one herself.", visit: "Meet the cat in the courtyard room.",
    fee: "Fee $95 for adults, waived for cats over 10. It covers vaccines, spay and microchip." },
  obolon: { short: "Obolon Feline Aid", since: 2019, place: "Obolon, Kyiv", heroPhoto: P("kitten-tabby"), heroInset: P("paw-reach"), heroAlt: "Kitten at Obolon Feline Aid",
    lede: "A foster network on the left bank. Most cats live in volunteers' homes, not cages, so they arrive already used to kettles, doorbells and children.",
    adopted: "268", reply: "~2 days",
    storyTitle: "Twelve foster flats and one very full group chat.", storyLead: "It started with three neighbours. Now there are ninety of them.", storyNote: "Same chat. Bigger family.",
    story1: "Obolon Feline Aid began in 2019 when three neighbours on Heroiv Stalinhrada started fostering kittens from the riverbank colonies. The group chat now has ninety people in it.",
    story2: "There's no building. Cats live with fosters until adoption, and each foster writes the cat's profile themselves — so what you read is what you'll get.",
    quote: "Our fosters know if a cat hates the hoover. We tell you everything.", person: "Iryna K.", role: "coordinator", personPhoto: P("white-cat"),
    address: "Obolonskyi Ave 16, Kyiv", directions: "Visits happen at the foster's home or the meeting room above VetCity. Obolon metro, 4 minutes.",
    hours: [["Tue–Fri", "12:00–17:00"], ["Saturday", "11:00–15:00"], ["Sun–Mon", "By arrangement"]],
    phone: "+380 44 390 2214", email: "cats@obolonfeline.org", reads: "The cat's foster reads it first.", visit: "Meet the cat at their foster home.",
    fee: "Fee $70, $40 for a second cat. It covers vaccines, spay and microchip." },
  irpin: { short: "Irpin Senior Cats", since: 2014, place: "Irpin", heroPhoto: P("ginger-stretch"), heroInset: P("ginger-sleep"), heroAlt: "Senior ginger cat stretching",
    lede: "A house with a garden, fifteen minutes out of Kyiv, just for cats over seven. Quiet rooms, heated floors and a lot of patience.",
    adopted: "190", reply: "~1 day",
    storyTitle: "Old cats, warm floors and no hurry at all.", storyLead: "It started with the cats nobody asked about. Now they have a house.", storyNote: "Same nurse. Older patients.",
    story1: "Natalia retired from nursing in 2014 and noticed that the older cats at every shelter she visited were the ones nobody asked about. So she turned her house in Irpin into a place just for them.",
    story2: "Many of the cats came from owners who went abroad or into care. Some stay a month, some a year. All of them get a sunny spot and a proper vet plan.",
    quote: "A twelve-year-old cat already knows who they are. That's the gift.", person: "Natalia H.", role: "founder", personPhoto: P("bicolor"),
    address: "Universytetska St 8, Irpin", directions: "White house with a blue gate. Park on the street. Irpin station, 10 minutes on foot.",
    hours: [["Mon–Sat", "By appointment"], ["Sunday", "Closed"]],
    phone: "+380 44 597 0318", email: "natalia@irpinseniors.org", reads: "Natalia reads every one herself.", visit: "Meet the cat in the garden room.",
    fee: "No fee for cats over 10. $50 for younger seniors, which covers their latest vet check." },
  bucha: { short: "Bucha Cat House", since: 2022, place: "Bucha", heroPhoto: P("roll"), heroInset: P("peek"), heroAlt: "Cat rolling on the floor",
    lede: "Rebuilt from a former bakery on Vokzalna Street. Open at weekends, with a playroom full of kittens and a quiet room for the ones who need more time.",
    adopted: "156", reply: "~2 days",
    storyTitle: "A bakery, a new roof and a lot of kittens.", storyLead: "It started with cats left behind. Now it's a bakery full of them.", storyNote: "Same bakery. New regulars.",
    story1: "After 2022, Oleh and his sister started taking in cats left behind in Bucha and Hostomel. The old family bakery was the only building they had, so they fixed the roof and moved the cats in.",
    story2: "It still smells faintly of bread. Weekdays are for vet visits and cleaning; weekends the doors open and families come to meet the cats.",
    quote: "Every cat here waited for someone once already. We make sure the second wait is short.", person: "Oleh M.", role: "co-founder", personPhoto: P("grey-shorthair"),
    address: "Vokzalna St 44, Bucha", directions: "Old bakery sign above the door. Bucha station, 6 minutes on foot.",
    hours: [["Mon–Fri", "Closed to visitors"], ["Sat–Sun", "10:00–16:00"]],
    phone: "+380 44 223 4471", email: "hello@buchacathouse.org", reads: "Oleh or his sister read every one.", visit: "Meet the cat in the playroom.",
    fee: "Fee $60. It covers vaccines, spay and microchip." },
  darnytsia: { short: "Darnytsia Cat Room", since: 2020, place: "Darnytsia, Kyiv", heroPhoto: P("yawn"), heroInset: P("blanket-tabby"), heroAlt: "Cat yawning",
    lede: "A bright room above a vet clinic on the left bank, open every day. Good for quick visits after work and for cats who need regular medical care.",
    adopted: "301", reply: "~1 day",
    storyTitle: "The vet upstairs who couldn't say no.", storyLead: "It started with one cat at the clinic door. Now it's a home for many.", storyNote: "Same vet. Bigger family.",
    story1: "Dr. Serhii Bondar kept finding cats left at the clinic door. In 2020 he cleared out the storage room upstairs, added shelves and a window seat, and called it the Cat Room.",
    story2: "Because the clinic is downstairs, the Cat Room takes cats with ongoing conditions — diabetes, kidney diets, missing legs — and teaches adopters how to care for them.",
    quote: "Medical needs sound scary. Usually it's a pill in some tuna.", person: "Serhii B.", role: "vet and founder", personPhoto: P("tabby-stairs"),
    address: "Kharkivske Hwy 19, Kyiv", directions: "Above Darnytsia Vet, side door on the left. Kharkivska metro, 7 minutes.",
    hours: [["Mon–Fri", "10:00–19:00"], ["Sat–Sun", "11:00–16:00"]],
    phone: "+380 44 501 7720", email: "catroom@darnytsiavet.ua", reads: "Serhii and the nurse on shift read it.", visit: "Meet the cat in the window room.",
    fee: "Fee $80, including a first check-up at the clinic downstairs." },
  brovary: { short: "Brovary Street Cats", since: 2016, place: "Brovary", heroPhoto: P("ginger-lounge"), heroInset: P("white-cat"), heroAlt: "Ginger cat lounging",
    lede: "A small volunteer team working the streets of Brovary: trap, neuter, return — and rehoming the friendly ones who clearly want a sofa.",
    adopted: "124", reply: "~3 days",
    storyTitle: "Mostly street work. Sometimes a cat picks a lap instead.", storyLead: "It started on the street. Some cats chose a sofa instead.", storyNote: "Same streets. Warmer kitchens.",
    story1: "Brovary Street Cats has spent ten years neutering and feeding the town's colonies. Every so often a street cat walks straight into a volunteer's kitchen and refuses to leave.",
    story2: "Those are the cats listed here. They're used to people, checked by a vet and living with volunteers until they find a home.",
    quote: "We don't choose who comes indoors. The cats do.", person: "Andrii P.", role: "volunteer lead", personPhoto: P("kitchen-cat"),
    address: "Kyivska St 120, Brovary", directions: "Visits by appointment at a volunteer's home. We'll send the address.",
    hours: [["Any day", "By appointment"]],
    phone: "+380 45 946 1032", email: "hi@brovarystreetcats.org", reads: "Andrii reads them in the evenings.", visit: "Meet the cat at a volunteer's home.",
    fee: "Fee $40. It goes straight back into neutering street cats." },
};
const FOCUS = { "meow-bandana": "50% 12%", "paw-reach": "50% 22%", "strut": "32% 30%", "grey-shorthair": "50% 22%", "tabby-sofa": "45% 35%", "peek": "55% 35%", "colorpoint": "50% 28%", "yawn": "50% 30%", "white-cat": "50% 25%", "bicolor": "50% 28%", "kitten-tabby": "50% 30%", "ginger-stretch": "50% 60%", "roll": "50% 40%", "blanket-tabby": "50% 40%", "ginger-sleep": "50% 40%", "kitten-walk": "50% 30%", "tabby-stairs": "50% 30%", "ginger-lounge": "50% 45%", "white-cat": "50% 25%" };
const focus = (p) => { const k = String(p || "").split("/").pop().replace(/\.(jpg|webp|png)$/, ""); return FOCUS[k] || "50% 30%"; };
cats.forEach((c) => { c.pos = focus(c.photo); });
window.CATE_MOCK = { focus, cats, shelters, sheltersAll, details, photo: P, byId: (id) => cats.find((c) => c.id === id), shelterBySlug: (slug) => sheltersAll.find((s) => s.slug === slug) };
})();

(function () {
  const KEY = "cate.saved", DEF = ["0142", "0133", "0088", "0114"];
  let ids; try { ids = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (_) {}
  if (!Array.isArray(ids)) { let signed = false; try { signed = !!JSON.parse(localStorage.getItem("cate.auth") || "null"); } catch (_) {} ids = signed ? DEF.slice() : []; }
  const subs = new Set();
  const S = {
    list: () => ids.slice(), has: (id) => ids.includes(id), count: () => ids.length, DEF,
    set: (list) => { ids = [...new Set(list)]; try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch (_) {} subs.forEach((f) => f(ids)); },
    toggle: (id) => { ids = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]; try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch (_) {} subs.forEach((f) => f(ids)); },
    subscribe: (f) => { subs.add(f); return () => subs.delete(f); },
  };
  window.addEventListener("storage", (e) => { if (e.key === KEY) { try { ids = JSON.parse(e.newValue || "[]"); } catch (_) {} subs.forEach((f) => f(ids)); } });
  window.CATE_SAVED = S;
  window.useCateSaved = () => { const [, f] = React.useState(0); React.useEffect(() => S.subscribe(() => f((n) => n + 1)), []); return S; };
  const patch = () => {
    const NS = window.CATDesignSystem_3eda1e; if (!NS || !NS.CatCard || !window.React) return false;
    if (!NS.CatCard.__saved) {
      const C = NS.CatCard;
      const W = (p) => { const s = window.useCateSaved(); const id = p.cat && p.cat.id; return React.createElement(C, { ...p, saved: id ? s.has(id) : !!p.saved, onSave: (cat) => { id && s.toggle(id); p.onSave && p.onSave(cat); } }); };
      W.__saved = true; NS.CatCard = W;
    }
    return true;
  };
  if (!patch()) { const t = setInterval(() => { if (patch()) clearInterval(t); }, 10); }
})();

(function () {
  const PAGES = ["Home", "Browse", "Profile", "Shelters", "Shelter", "Favorites", "Apply", "Status", "Account", "HowItWorks", "Stories", "Legal"].map((p) => p + ".dc.html");
  const here = decodeURIComponent(location.pathname.split("/").pop() || "Home.dc.html");
  const LINKS = [
    { label: "Adopt", href: "Browse.dc.html" },
    { label: "Shelters", href: "Shelters.dc.html" },
    { label: "How adoption works", href: "HowItWorks.dc.html" },
    { label: "Stories", href: "Stories.dc.html" },
  ];
  const CURRENT = { "Browse.dc.html": "Browse.dc.html", "Profile.dc.html": "Browse.dc.html", "Shelters.dc.html": "Shelters.dc.html", "Shelter.dc.html": "Shelters.dc.html", "HowItWorks.dc.html": "HowItWorks.dc.html", "Stories.dc.html": "Stories.dc.html" }[here];
  const FOOT = {
    "Browse cats": "Browse.dc.html", "Kittens": "Browse.dc.html?age=kitten", "Seniors": "Browse.dc.html?age=senior",
    "Find a shelter": "Shelters.dc.html", "Partner with CATÉ": "Shelters.dc.html#partner", "Shelter login": "Account.dc.html",
    "How adoption works": "HowItWorks.dc.html", "Stories": "Stories.dc.html", "Contact": "Shelter.dc.html?id=podil#contact",
  };

  // Instant-feeling navigation: warm the cache for every page + shared files on idle.
  const warmed = new Set();
  const warm = (url) => {
    const u = url.split("#")[0]; if (!u || warmed.has(u)) return; warmed.add(u);
    const l = document.createElement("link"); l.rel = "prefetch"; l.href = u; document.head.appendChild(l);
  };
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 600));
  window.addEventListener("load", () => idle(() => PAGES.forEach(warm)));

  const scrollY2 = (y, smooth) => {
    const start = window.scrollY, dist = y - start;
    if (!smooth || Math.abs(dist) < 4 || matchMedia("(prefers-reduced-motion: reduce)").matches) { window.scrollTo(0, y); return; }
    const dur = Math.min(700, 250 + Math.abs(dist) * 0.12), t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => { const t = Math.min(1, (now - t0) / dur); window.scrollTo(0, start + dist * ease(t)); if (t < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
    setTimeout(() => { if (Math.abs(window.scrollY - y) > 8) window.scrollTo(0, y); }, dur + 150);
  };
  const scrollToHash = (hash, smooth) => {
    if (!hash || hash === "#") return false;
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) { scrollY2(el.getBoundingClientRect().top + window.scrollY - 80, smooth); return; }
      if (tries++ < 60) setTimeout(tick, 50);
    };
    tick(); return true;
  };
  if (location.hash) window.addEventListener("load", () => scrollToHash(location.hash, false));

  const nav = (e, url) => {
    e.preventDefault(); e.stopPropagation();
    const [path, hash] = url.split("#");
    const target = path || here;
    if (target === here && !url.includes("?")) {
      if (hash) { history.replaceState(null, "", "#" + hash); scrollToHash("#" + hash, true); }
      else scrollY2(0, true);
      return;
    }
    location.href = url;
  };


  document.addEventListener("pointerover", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (a) { const h = a.getAttribute("href"); if (/\.dc\.html/.test(h)) warm(h); }
  }, { passive: true });

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const t = e.target.closest ? e.target : null; if (!t) return;
    if (t.closest(".c-wordmark")) return nav(e, "Home.dc.html");
    if (t.closest(".c-nav__saved")) return nav(e, "Favorites.dc.html");
    if (t.closest('[aria-label="Your account"]')) return nav(e, "Account.dc.html");
    const fa = t.closest(".c-footer a");
    if (fa && FOOT[fa.textContent.trim()]) return nav(e, FOOT[fa.textContent.trim()]);
    const btn = t.closest("button,a");
    if (btn && btn.closest(".c-nav, .c-drawer") && /^\s*Sign in\s*$/.test(btn.textContent)) { e.preventDefault(); e.stopPropagation(); const x = document.querySelector('.c-drawer [aria-label="Close menu"]'); x && x.click(); return window.CATE_AUTH && window.CATE_AUTH.open({ mode: "nav" }); }
    if (btn && btn.closest(".c-nav, .c-drawer") && /^\s*Your account\s*$/.test(btn.textContent)) return nav(e, "Account.dc.html");
    if (btn && !btn.closest("[data-no-route]") && /^\s*Start application\s*$/.test(btn.textContent)) {
      e.preventDefault(); e.stopPropagation();
      const pid = (here === "Profile.dc.html" || here === "Apply.dc.html") && new URLSearchParams(location.search).get("id");
      const go = () => pid ? (location.href = "Apply.dc.html?id=" + pid) : (window.CATE_PICK && window.CATE_PICK.open());
      const A = window.CATE_AUTH;
      if (A && !A.user()) return A.require({ mode: "apply", cat: pid && window.CATE_MOCK ? window.CATE_MOCK.byId(pid) : null }, go);
      return go();
    }
    const a = t.closest("a[href]");
    if (a && !a.target) {
      const h = a.getAttribute("href");
      if (/^[^:?#]*\.dc\.html/.test(h)) return nav(e, h);
      if (/^#.+/.test(h) && document.getElementById(h.slice(1))) return nav(e, h);
      if (h === "#") e.preventDefault();
    }
  }, true);

  const patch = () => {
    const NS = window.CATDesignSystem_3eda1e;
    if (!NS || !NS.Navbar) return false;
    if (!NS.Navbar.__cate) {
      const N = NS.Navbar;
      const W = (p) => { window.useCateAuth && window.useCateAuth(); const s = window.useCateSaved ? window.useCateSaved() : null; return React.createElement(N, { ...p, savedCount: s ? s.count() : p.savedCount, signedIn: !!(window.CATE_AUTH && window.CATE_AUTH.user()), links: LINKS, current: CURRENT, onSearch: () => window.CATE_SEARCH && window.CATE_SEARCH.open() }); };
      W.__cate = true; NS.Navbar = W;
    }
    return true;
  };
  if (!patch()) { const t = setInterval(() => { if (patch()) clearInterval(t); }, 10); }
  const ICON_CUR = { "Favorites.dc.html": '.c-nav__saved button', "Account.dc.html": '.c-nav [aria-label="Your account"]', "Status.dc.html": '.c-nav [aria-label="Your account"]' }[here];
  if (ICON_CUR) { const mark = () => { const b = document.querySelector(ICON_CUR); if (b) { b.setAttribute("aria-current", "page"); return true; } }; if (!mark()) { const t = setInterval(() => { if (mark()) clearInterval(t); }, 60); setTimeout(() => clearInterval(t), 8000); } }

})();

(function () {
  const LINKS = [
    ["Browse cats", "Browse.dc.html"], ["How adoption works", "HowItWorks.dc.html"],
    ["Kittens", "Browse.dc.html?age=kitten"], ["Shelters", "Shelters.dc.html"],
    ["Seniors", "Browse.dc.html?age=senior"], ["Stories", "Stories.dc.html"],
    ["Saved cats", "Favorites.dc.html"], ["Partner with CATÉ", "Shelters.dc.html#partner"],
  ];
  const SOC = [
    ["Instagram", "https://instagram.com", '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>'],
    ["Facebook", "https://facebook.com", '<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3.5h2V21h3.5v-8.5H15l.5-3.5h-3V7c0-.6.4-1 1-1H15z"/>'],
    ["Telegram", "https://t.me", '<path d="m21 4-3 16-6.5-5.5L9 18l.5-5L18 6l-10 6-4-1.5z"/>'],
  ];
  const css = `
.cf{background:#201D1A;color:#F4EFE5;font-family:Manrope,var(--font-sans),sans-serif}
.cf-in{max-width:var(--grid-max,1360px);margin:0 auto;padding:clamp(56px,6vw,88px) var(--grid-margin,56px) clamp(40px,4vw,56px);display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1.3fr) minmax(0,1fr);gap:48px clamp(32px,5vw,80px);align-items:start}
.cf-logo{display:block;width:150px;height:52px;background:url(assets/logo-paper.png) left center/contain no-repeat;font-size:0;color:transparent}
.cf-tag{margin:20px 0 0;font:500 16px/1.5 Manrope,sans-serif;color:#D6CDC0;max-width:24em;text-wrap:pretty}
.cf-soc{display:flex;gap:10px;margin-top:28px}
.cf-soc a{display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:#F4EFE5;color:#201D1A;transition:background 200ms cubic-bezier(.2,.7,.2,1),color 200ms}
.cf-soc a:hover{background:#B24A25;color:#fff}
.cf-soc a:focus-visible,.cf a:focus-visible,.cf button:focus-visible,.cf input:focus-visible{outline:2px solid #E07A52;outline-offset:2px}
.cf-h{margin:0 0 24px;font:800 20px/1.1 'Between 2','Bricolage Grotesque',var(--font-headline);letter-spacing:-.02em;color:#F4EFE5}
.cf-links{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,max-content);gap:18px clamp(32px,4vw,64px)}
.cf-links a{font:500 15.5px/1.3 Manrope,sans-serif;color:#D6CDC0;text-decoration:none;transition:color 200ms}
.cf-links a:hover{color:#F4EFE5;text-decoration:underline;text-underline-offset:4px}
.cf-form{display:flex;align-items:center;gap:6px;max-width:340px;height:52px;padding:0 6px 0 20px;background:#FBF8F2;border-radius:999px;border:1px solid transparent;transition:border-color 200ms,box-shadow 200ms}
.cf-form:focus-within{border-color:#B24A25;box-shadow:0 0 0 3px rgba(178,74,37,.35)}
.cf-form input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:500 15px/1 Manrope,sans-serif;color:#16130F}
.cf-form input::placeholder{color:#8A8074}
.cf-form button{flex:none;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:#B24A25;color:#fff;cursor:pointer;transition:background 200ms}
.cf-form button:hover{background:#963C1C}
.cf-note{margin:12px 0 0;font:400 13.5px/1.45 Manrope,sans-serif;color:#A89E91;max-width:340px}
.cf-note[data-state=ok]{color:#B8C2A6}.cf-note[data-state=err]{color:#F0A080}
.cf-mail{display:inline-block;margin-top:24px;font:600 15.5px/1.3 Manrope,sans-serif;color:#F4EFE5;text-decoration:none;border-bottom:1px solid #5A5249;padding-bottom:2px}
.cf-mail:hover{color:#F4EFE5;border-color:#F4EFE5}
.cf-base{border-top:1px solid #3A3530}
.cf-base-in{max-width:var(--grid-max,1360px);margin:0 auto;padding:22px var(--grid-margin,56px);display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:8px 28px;font:400 14px/1.4 Manrope,sans-serif;color:#A89E91;text-align:center}
.cf-base-in a{color:#A89E91;text-decoration:none}.cf-base-in a:hover{color:#F4EFE5}
@media (max-width:1023px){.cf-in{grid-template-columns:1fr 1fr}.cf-brand{grid-column:1/-1}}
@media (max-width:639px){.cf-in{grid-template-columns:1fr;padding-inline:20px}.cf-links{grid-template-columns:1fr 1fr;column-gap:24px}.cf-base-in{padding-inline:20px}}`;
  const h = React.createElement;
  function CateFooter() {
    const [st, setSt] = React.useState({ v: "", s: "" });
    const submit = (e) => { e.preventDefault(); const v = st.v.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return setSt({ v: st.v, s: "err" }); try { localStorage.setItem("cate.newsletter", v); } catch (_) {} setSt({ v: "", s: "ok" }); };
    const note = st.s === "ok" ? "You're on the list. One email a week, new cats only." : st.s === "err" ? "Add a full email address so we can reach you." : "New cats every Friday. No spam, unsubscribe any time.";
    return h("footer", { className: "cf" },
      h("div", { className: "cf-in" },
        h("div", { className: "cf-brand" },
          h("a", { className: "cf-logo", href: "Home.dc.html", "aria-label": "CATÉ home" }, "CATÉ"),
          h("p", { className: "cf-tag" }, "Every cat here is waiting in a real shelter, looked after by people who know them by name."),
          h("div", { className: "cf-soc" }, SOC.map(([n, u, p]) => h("a", { key: n, href: u, target: "_blank", rel: "noopener", "aria-label": n, dangerouslySetInnerHTML: { __html: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>" } })))),
        h("nav", { "aria-label": "Footer" },
          h("h2", { className: "cf-h" }, "Quick links"),
          h("ul", { className: "cf-links" }, LINKS.map(([l, u]) => h("li", { key: l }, h("a", { href: u }, l))))),
        h("div", null,
          h("h2", { className: "cf-h" }, "New cats, weekly"),
          h("form", { className: "cf-form", onSubmit: submit, noValidate: true },
            h("input", { type: "email", placeholder: "Your email", "aria-label": "Email for weekly new cats", autoComplete: "email", value: st.v, "aria-invalid": st.s === "err" ? "true" : "false", "aria-describedby": "cf-note", onChange: (e) => setSt({ v: e.target.value, s: st.s === "err" ? "" : st.s }) }),
            h("button", { type: "submit", "aria-label": "Subscribe", dangerouslySetInnerHTML: { __html: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>' } })),
          h("p", { className: "cf-note", id: "cf-note", "data-state": st.s, "aria-live": "polite" }, note),
          h("a", { className: "cf-mail", href: "mailto:hello@cate.org.ua" }, "hello@cate.org.ua"))),
      h("div", { className: "cf-base" }, h("div", { className: "cf-base-in" },
        h("span", null, "© 2026 CATÉ Adoption Co. Adoption fees go directly to partner shelters."),
        h("a", { href: "Legal.dc.html#privacy" }, "Privacy"), h("a", { href: "Legal.dc.html#terms" }, "Terms"), h("a", { href: "Legal.dc.html#accessibility" }, "Accessibility"))));
  }
  CateFooter.__cate = true;
  const patch = () => {
    const NS = window.CATDesignSystem_3eda1e;
    if (!NS || !NS.Footer || !window.React) return false;
    if (!NS.Footer.__cate) { const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st); NS.Footer = CateFooter; }
    return true;
  };
  if (!patch()) { const t = setInterval(() => { if (patch()) clearInterval(t); }, 10); }
})();

(function () {
  const PAGES = [
    { t: "Browse all cats", s: "Adopt", href: "Browse.dc.html" },
    { t: "Kittens", s: "Adopt", href: "Browse.dc.html?age=kitten" },
    { t: "Senior cats", s: "Adopt", href: "Browse.dc.html?age=senior" },
    { t: "All shelters", s: "Shelters", href: "Shelters.dc.html" },
    { t: "How adoption works", s: "Guide", href: "HowItWorks.dc.html" },
    { t: "Adoption fees", s: "Guide", href: "HowItWorks.dc.html#cost" },
    { t: "Questions", s: "Guide", href: "HowItWorks.dc.html#faq" },
    { t: "Stories", s: "Home now", href: "Stories.dc.html" },
    { t: "Saved cats", s: "You", href: "Favorites.dc.html" },
    { t: "Application status", s: "You", href: "Status.dc.html" },
    { t: "Account", s: "You", href: "Account.dc.html" },
  ];
  const css = `
.cs-scrim{position:fixed;inset:0;z-index:1000;background:rgba(30,27,23,.42);display:flex;justify-content:center;align-items:flex-start;padding:10vh 16px 16px;opacity:0;transition:opacity 200ms cubic-bezier(.2,.7,.2,1)}
.cs-scrim.on{opacity:1}
.cs-box{width:100%;max-width:640px;max-height:76vh;display:flex;flex-direction:column;background:#FBF8F2;border-radius:20px;box-shadow:0 32px 64px -24px rgba(30,24,16,.45);overflow:hidden;transform:translateY(8px);transition:transform 360ms cubic-bezier(.2,.7,.2,1)}
.cs-scrim.on .cs-box{transform:none}
.cs-field{display:flex;align-items:center;gap:12px;padding:0 12px 0 20px;height:60px;border-bottom:1px solid #E6DECF;color:#6F665B}
.cs-field input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:500 16px/1 Manrope,var(--font-sans),sans-serif;color:#16130F}
.cs-field input::placeholder{color:#8A8074}
.cs-field input::-webkit-search-cancel-button{display:none}
.cs-esc{flex:none;display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:50%;background:transparent;color:#6F665B;cursor:pointer;transition:background 200ms,color 200ms}.cs-esc:hover{background:#F0E9DD;color:#16130F}.cs-esc:focus-visible{outline:2px solid #B24A25;outline-offset:2px}
.cs-list{overflow:auto;padding:8px 8px 12px}
.cs-h{font:700 11.5px/1 Manrope,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#6F665B;padding:16px 12px 8px}
.cs-item{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:12px;text-decoration:none;color:#16130F}
.cs-item[aria-selected=true]{background:#F0E9DD}
.cs-ph{flex:none;width:44px;height:44px;border-radius:50%;background:#DCD6C8 center/cover}
.cs-ic{flex:none;width:44px;height:44px;border-radius:50%;background:#E3E5D6;display:grid;place-items:center;color:#3F4834}
.cs-t{font:700 16px/1.25 Manrope,sans-serif}
.cs-s{font:400 14px/1.35 Manrope,sans-serif;color:#5E584D;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cs-empty{padding:32px 16px;font:400 16px/1.55 Manrope,sans-serif;color:#3A352E;text-align:center}
.cs-empty a{color:#B24A25}
mark.cs-m{background:none;color:#B24A25}`;
  const ICON = { pin: '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>', page: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>' };
  const svg = (k) => '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ICON[k] + '</svg>';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const hl = (s, q) => { const t = esc(s); if (!q) return t; const i = t.toLowerCase().indexOf(q); return i < 0 ? t : t.slice(0, i) + '<mark class="cs-m">' + t.slice(i, i + q.length) + "</mark>" + t.slice(i + q.length); };
  let root, input, list, sel = 0, items = [], lastFocus;
  const build = () => {
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    root = document.createElement("div"); root.className = "cs-scrim"; root.hidden = true;
    root.innerHTML = '<div class="cs-box" role="dialog" aria-modal="true" aria-label="Search CATÉ"><label class="cs-field"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="search" placeholder="Search cats, shelters, districts…" aria-label="Search" aria-controls="cs-list" autocomplete="off"><button type="button" class="cs-esc" aria-label="Close search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></label><div class="cs-list" id="cs-list" role="listbox"></div></div>';
    document.body.appendChild(root);
    input = root.querySelector("input"); list = root.querySelector(".cs-list");
    root.addEventListener("mousedown", (e) => { if (e.target === root) close(); });
    root.querySelector(".cs-esc").addEventListener("click", close);
    input.addEventListener("input", render);
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); if (!items.length) return; sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length; mark(); }
      else if (e.key === "Enter" && items[sel]) { e.preventDefault(); location.href = items[sel].getAttribute("href"); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    list.addEventListener("mousemove", (e) => { const a = e.target.closest(".cs-item"); if (a) { const i = items.indexOf(a); if (i !== sel) { sel = i; mark(); } } });
  };
  const mark = () => items.forEach((a, i) => { a.setAttribute("aria-selected", i === sel); if (i === sel) { const r = a.offsetTop - list.scrollTop; if (r < 0 || r > list.clientHeight - a.offsetHeight) list.scrollTop = a.offsetTop - 8; } });
  const render = () => {
    const D = window.CATE_MOCK || {}; const q = input.value.trim().toLowerCase();
    const has = (...f) => !q || f.some((x) => x && String(x).toLowerCase().includes(q));
    const cats = (D.cats || []).filter((c) => has(c.name, c.location, c.shelter, c.line, (c.traits || []).join(" "), c.age)).slice(0, q ? 8 : 4);
    const sh = (D.sheltersAll || []).filter((s) => has(s.name, s.area)).slice(0, q ? 6 : 3);
    const pg = PAGES.filter((p) => has(p.t, p.s)).slice(0, q ? 6 : 4);
    let html = "";
    if (cats.length) html += '<div class="cs-h">' + (q ? "Cats" : "Waiting now") + "</div>" + cats.map((c) => '<a class="cs-item" role="option" href="Profile.dc.html?id=' + c.id + '"><span class="cs-ph" style="background-image:url(' + c.photo + ')"></span><span style="min-width:0;display:grid;gap:3px"><span class="cs-t">' + hl(c.name, q) + ' <span style="font-weight:400;color:#6F665B">· ' + esc(c.age) + '</span></span><span class="cs-s">' + hl(c.location, q) + " · " + hl(c.shelter, q) + "</span></span></a>").join("");
    if (sh.length) html += '<div class="cs-h">Shelters</div>' + sh.map((s) => '<a class="cs-item" role="option" href="Shelter.dc.html?id=' + (s.slug || "") + '"><span class="cs-ic">' + svg("pin") + '</span><span style="min-width:0;display:grid;gap:3px"><span class="cs-t">' + hl(s.name, q) + '</span><span class="cs-s">' + hl(s.area || "", q) + "</span></span></a>").join("");
    if (pg.length) html += '<div class="cs-h">Pages</div>' + pg.map((p) => '<a class="cs-item" role="option" href="' + p.href + '"><span class="cs-ic">' + svg("page") + '</span><span style="min-width:0;display:grid;gap:3px"><span class="cs-t">' + hl(p.t, q) + '</span><span class="cs-s">' + esc(p.s) + "</span></span></a>").join("");
    if (!html) html = '<div class="cs-empty">No cat, shelter or page matches “' + esc(input.value.trim()) + '”.<br>Try a name, a district like Podil, or a trait like “shy”. Or <a href="Browse.dc.html">browse all cats</a>.</div>';
    list.innerHTML = html; items = [...list.querySelectorAll(".cs-item")]; sel = 0; mark();
  };
  const open = () => {
    if (!root) build(); if (!root.hidden) return;
    lastFocus = document.activeElement; root.hidden = false; document.documentElement.style.overflow = "hidden";
    input.value = ""; render(); requestAnimationFrame(() => { root.classList.add("on"); input.focus(); });
  };
  const close = () => {
    if (!root || root.hidden) return; root.classList.remove("on"); document.documentElement.style.overflow = "";
    setTimeout(() => { root.hidden = true; }, 180); lastFocus && lastFocus.focus && lastFocus.focus();
  };
  window.CATE_SEARCH = { open, close };
  document.addEventListener("click", (e) => { const b = e.target.closest && e.target.closest('.c-nav [aria-label="Search"]'); if (b) { e.preventDefault(); open(); } }, true);
  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !/input|textarea|select/.test(tag) && !e.target.isContentEditable)) { e.preventDefault(); open(); }
  });
})();

(function () {
  const SAVED = ["0142", "0133", "0088", "0114"];
  const css = `
.cp-scrim{position:fixed;inset:0;z-index:1000;background:rgba(30,27,23,.42);display:flex;justify-content:center;align-items:flex-start;padding:8vh 16px 16px;opacity:0;transition:opacity 200ms cubic-bezier(.2,.7,.2,1)}
.cp-scrim.on{opacity:1}
.cp-box{width:100%;max-width:720px;max-height:84vh;display:flex;flex-direction:column;background:#FBF8F2;border-radius:20px;box-shadow:0 32px 64px -24px rgba(30,24,16,.45);overflow:hidden;transform:translateY(8px);transition:transform 360ms cubic-bezier(.2,.7,.2,1)}
.cp-scrim.on .cp-box{transform:none}
.cp-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:28px 28px 20px}
.cp-t{margin:0;font:800 32px/1 'Between 2','Bricolage Grotesque',var(--font-headline);letter-spacing:-.04em;color:#16130F}
.cp-s{margin:10px 0 0;font:400 15px/1.5 Manrope,sans-serif;color:#5E584D}
.cp-x{flex:none;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:#6F665B;cursor:pointer}.cp-x:hover{background:#F0E9DD;color:#16130F}
.cp-field{display:flex;align-items:center;gap:10px;margin:0 28px;height:48px;padding:0 16px;background:#fff;border:1px solid #E6DECF;border-radius:999px;color:#6F665B}
.cp-field:focus-within{border-color:#B24A25;box-shadow:0 0 0 3px #F4DDD3}
.cp-field input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:500 15px/1 Manrope,sans-serif;color:#16130F}
.cp-body{overflow:auto;padding:8px 28px 28px}
.cp-h{font:700 11.5px/1 Manrope,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#6F665B;margin:20px 0 12px}
.cp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.cp-cat{display:grid;gap:10px;padding:8px 8px 12px;border:1px solid #E6DECF;border-radius:16px;background:#fff;text-decoration:none;color:#16130F;transition:border-color 200ms,transform 200ms}
.cp-cat:hover,.cp-cat:focus-visible{border-color:#B24A25;transform:translateY(-2px);outline:0}
.cp-ph{aspect-ratio:1;border-radius:10px;background:#DCD6C8 center/cover}
.cp-n{font:800 18px/1 'Between 2','Bricolage Grotesque',var(--font-headline);letter-spacing:-.03em;padding:0 4px}
.cp-m{font:500 12.5px/1.35 Manrope,sans-serif;color:#6F665B;padding:0 4px}
.cp-foot{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 28px;border-top:1px solid #E6DECF;font:400 14px/1.4 Manrope,sans-serif;color:#5E584D}
.cp-foot a{font-weight:600;color:#B24A25}
.cp-empty{padding:24px 0;font:400 15px/1.5 Manrope,sans-serif;color:#3A352E}`;
  let root, input, body, last;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const card = (c) => '<a class="cp-cat" href="Apply.dc.html?id=' + c.id + '"><span class="cp-ph" style="background-image:url(' + c.photo + ');background-position:' + (c.pos || "50% 30%") + '"></span><span class="cp-n">' + esc(c.name) + '</span><span class="cp-m">' + esc(c.age) + " · " + esc(c.shelter) + "</span></a>";
  const render = () => {
    const D = window.CATE_MOCK || { cats: [] }; const q = input.value.trim().toLowerCase();
    if (q) {
      const r = D.cats.filter((c) => [c.name, c.location, c.shelter].join(" ").toLowerCase().includes(q)).slice(0, 12);
      body.innerHTML = r.length ? '<div class="cp-h">Matches</div><div class="cp-grid">' + r.map(card).join("") + "</div>" : '<div class="cp-empty">No cat called “' + esc(input.value.trim()) + '”. Try another name, or <a href="Browse.dc.html" style="color:#B24A25">browse everyone</a>.</div>';
      return;
    }
    const SV = window.CATE_SAVED ? window.CATE_SAVED.list() : SAVED;
    const saved = SV.map(D.byId || (() => null)).filter(Boolean);
    const rest = D.cats.filter((c) => !SV.includes(c.id)).slice(0, 4);
    body.innerHTML = (saved.length ? '<div class="cp-h">Your saved cats</div><div class="cp-grid">' + saved.map(card).join("") + "</div>" : "") + '<div class="cp-h">Waiting longest</div><div class="cp-grid">' + rest.map(card).join("") + "</div>";
  };
  const build = () => {
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    root = document.createElement("div"); root.className = "cp-scrim"; root.hidden = true;
    root.innerHTML = '<div class="cp-box" role="dialog" aria-modal="true" aria-labelledby="cp-t"><div class="cp-head"><div><h2 class="cp-t" id="cp-t">Who are you applying for?</h2><p class="cp-s">Each application goes to the shelter that knows the cat. Pick one to start.</p></div><button type="button" class="cp-x" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></div><label class="cp-field"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><input type="search" placeholder="Search by name, district or shelter" aria-label="Search cats" autocomplete="off"></label><div class="cp-body"></div><div class="cp-foot"><span>Not sure yet?</span><a href="Browse.dc.html">Browse all cats</a></div></div>';
    document.body.appendChild(root);
    input = root.querySelector("input"); body = root.querySelector(".cp-body");
    input.addEventListener("input", render);
    root.querySelector(".cp-x").addEventListener("click", close);
    root.addEventListener("mousedown", (e) => { if (e.target === root) close(); });
    root.addEventListener("keydown", (e) => { if (e.key === "Escape") { e.preventDefault(); close(); } });
  };
  const open = () => { if (!root) build(); last = document.activeElement; root.hidden = false; document.documentElement.style.overflow = "hidden"; input.value = ""; render(); requestAnimationFrame(() => { root.classList.add("on"); input.focus(); }); };
  const close = () => { if (!root || root.hidden) return; root.classList.remove("on"); document.documentElement.style.overflow = ""; setTimeout(() => { root.hidden = true; }, 180); last && last.focus && last.focus(); };
  window.CATE_PICK = { open, close };
})();

(function () {
  const KEY = "cate.auth", ACC = "cate.accounts";
  const DEMO = { email: "olena.k@gmail.com", first: "Olena", last: "Kovalenko", place: "Obolon, Kyiv", phone: "+380 67 214 5580", home: "Apartment in Obolon, Kyiv · rented", since: "June", demo: true };
  const here = decodeURIComponent(location.pathname.split("/").pop() || "Home.dc.html");
  const read = (k, f) => { try { const v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? f : v; } catch (_) { return f; } };
  let user = read(KEY, null);
  const subs = new Set();
  const emit = () => subs.forEach((f) => { try { f(user); } catch (_) {} });
  const persist = () => { try { user ? localStorage.setItem(KEY, JSON.stringify(user)) : localStorage.removeItem(KEY); } catch (_) {} emit(); };
  window.addEventListener("storage", (e) => { if (e.key === KEY) { user = read(KEY, null); emit(); } });
  const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pron = (c) => (c && c.sex === "Male" ? "he" : "she");
  const A = {
    user: () => user,
    name: () => (user ? [user.first, user.last].filter(Boolean).join(" ") : ""),
    initials: () => (user ? ((user.first || user.email || "?")[0] + (user.last ? user.last[0] : "")).toUpperCase() : ""),
    subscribe: (f) => { subs.add(f); return () => subs.delete(f); },
    signIn(u) {
      const S = window.CATE_SAVED;
      const accounts = read(ACC, {});
      user = { ...u }; accounts[u.email] = user;
      try { localStorage.setItem(ACC, JSON.stringify(accounts)); } catch (_) {}
      if (S && u.demo) S.set([...S.DEF, ...S.list()]);
      persist();
    },
    update(p) { if (!user) return; user = { ...user, ...p }; const acc = read(ACC, {}); acc[user.email] = user; try { localStorage.setItem(ACC, JSON.stringify(acc)); } catch (_) {} persist(); },
    signOut() {
      const first = user && user.first;
      user = null; persist();
      try { localStorage.removeItem("cate.apply.draft"); } catch (_) {}
      window.CATE_SAVED && window.CATE_SAVED.set([]);
      try { sessionStorage.setItem("cate.toast", "Signed out" + (first ? ". See you soon, " + first : "") + "."); } catch (_) {}
      location.href = "Home.dc.html";
    },
    open: (o) => open(o || {}),
    require(o, then) { if (user) { then && then(); return; } open({ ...(o || {}), then }); },
  };
  window.CATE_AUTH = A;
  window.useCateAuth = () => { const [, f] = React.useState(0); React.useEffect(() => A.subscribe(() => f((n) => n + 1)), []); return A; };

  const I = {
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  };
  const ic = (k, s) => '<svg viewBox="0 0 24 24" width="' + (s || 18) + '" height="' + (s || 18) + '" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[k] + "</svg>";
  const G = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.2a11 11 0 0 0 0 9.9z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.1-3.1A11 11 0 0 0 2.2 7.1l3.6 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>';
  const AP = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg>';
  const css = `
.ca-scrim{position:fixed;inset:0;z-index:1100;background:rgba(30,27,23,.52);display:flex;justify-content:center;align-items:center;padding:24px 16px;opacity:0;transition:opacity 200ms cubic-bezier(.2,.7,.2,1)}
.ca-scrim.on{opacity:1}
.ca-box{position:relative;width:100%;max-width:440px;max-height:calc(100vh - 48px);overflow:auto;background:#FBF8F2;border-radius:20px;box-shadow:0 32px 64px -24px rgba(30,24,16,.45);transform:translateY(10px);transition:transform 360ms cubic-bezier(.2,.7,.2,1);font-family:Manrope,var(--font-sans),sans-serif;color:#1E1B17}
.ca-scrim.on .ca-box{transform:none}
.ca-in{display:grid;gap:20px;padding:32px 32px 26px}.ca-box{overflow-x:hidden}.ca-box:focus{outline:0}
.ca-x,.ca-back{position:absolute;top:14px;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:transparent;color:#6F665B;cursor:pointer;transition:background 200ms,color 200ms}
.ca-x{right:14px}.ca-back{left:14px}
.ca-x:hover,.ca-back:hover{background:#F0E9DD;color:#1E1B17}
.ca-head{display:grid;gap:10px;justify-items:start}
.ca-cat{display:flex;align-items:center;gap:10px;padding:4px 12px 4px 4px;border-radius:999px;background:#F0E9DD;font:600 13px/1 Manrope,sans-serif;color:#3A352E}
.ca-cat span:first-child{width:28px;height:28px;border-radius:50%;background:#DCD6C8 center/cover}
.ca-mark{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#F8EAE2;color:#B24A25}
.ca-t{margin:0;font:800 30px/1 'Between 2','Bricolage Grotesque',var(--font-headline);letter-spacing:-.04em;color:#16130F;text-wrap:balance}
.ca-s{margin:0;font:400 15px/1.55 Manrope,sans-serif;color:#5E584D;text-wrap:pretty}
.ca-s b{font-weight:700;color:#1E1B17}
.ca-stack{display:grid;gap:10px}
.ca-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;height:52px;padding:0 20px;border-radius:999px;font:700 15px/1 Manrope,sans-serif;cursor:pointer;transition:background 200ms,border-color 200ms,color 200ms,transform 120ms}
.ca-btn:active{transform:translateY(1px)}
.ca-btn:focus-visible,.ca-field input:focus-visible,.ca-code input:focus-visible,.ca-link:focus-visible{outline:2px solid #C85A32;outline-offset:2px}
.ca-sso{background:#fff;border:1px solid #DCD3C2;color:#1E1B17}.ca-sso:hover{border-color:#1E1B17}
.ca-pri{background:#B24A25;border:0;color:#fff}.ca-pri:hover{background:#943C1D}
.ca-pri[disabled]{background:#EAE3D5;color:#A89E91;cursor:not-allowed;transform:none}
.ca-or{display:flex;align-items:center;gap:14px;font:600 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A8074}
.ca-or::before,.ca-or::after{content:"";flex:1;height:1px;background:#E6DECF}
.ca-field{display:grid;gap:8px}
.ca-field label{font:600 14px/1 Manrope,sans-serif;color:#3A352E}
.ca-field input{width:100%;min-width:0;box-sizing:border-box;height:52px;padding:0 16px;border:1px solid #CFC4B2;border-radius:12px;background:#fff;font:500 16px/1 Manrope,sans-serif;color:#16130F;transition:border-color 200ms,box-shadow 200ms}
.ca-field input:hover{border-color:#8A8074}
.ca-field input:focus{outline:0;border-color:#B24A25;box-shadow:0 0 0 3px #F0D3C3}
.ca-field input[aria-invalid=true]{border-color:#A3321F}
.ca-err{margin:0;font:500 13.5px/1.4 Manrope,sans-serif;color:#A3321F}
.ca-two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}.ca-field{min-width:0}
.ca-code{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}
.ca-code input{width:100%;box-sizing:border-box;height:60px;min-width:0;border:1px solid #CFC4B2;border-radius:12px;background:#fff;text-align:center;font:800 26px/1 'Between 2','Bricolage Grotesque',var(--font-headline);color:#16130F;caret-color:#B24A25;transition:border-color 200ms,box-shadow 200ms}
.ca-code input:focus{outline:0;border-color:#B24A25;box-shadow:0 0 0 3px #F0D3C3}
.ca-code.bad input{border-color:#A3321F}
.ca-row{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.ca-link{padding:6px 0;border:0;background:none;font:600 14px/1.2 Manrope,sans-serif;color:#1E1B17;text-decoration:underline;text-decoration-color:#CFC4B2;text-underline-offset:4px;cursor:pointer}
.ca-link:hover{text-decoration-color:currentColor}.ca-link[disabled]{color:#8A8074;text-decoration:none;cursor:default}
.ca-fine{margin:0;font:400 13px/1.5 Manrope,sans-serif;color:#6F665B;text-align:center}
.ca-fine a{color:#3A352E}
.ca-note{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;border-radius:12px;background:#F0E9DD;font:500 13px/1.45 Manrope,sans-serif;color:#5E584D}
.ca-note svg{flex:none;margin-top:1px}
.ca-later{justify-self:center}
.ca-spin{width:18px;height:18px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:caspin .7s linear infinite}
@keyframes caspin{to{transform:rotate(360deg)}}
.ca-step{animation:castep 280ms cubic-bezier(.2,.7,.2,1)}@keyframes castep{from{opacity:0;transform:translateX(8px)}}
.ca-toast{position:fixed;left:50%;bottom:24px;z-index:1200;display:flex;align-items:center;gap:12px;max-width:calc(100vw - 32px);padding:14px 20px 14px 14px;border-radius:999px;background:#2A2622;color:#FBF8F2;font:600 14.5px/1.35 Manrope,sans-serif;box-shadow:0 20px 40px -16px rgba(30,24,16,.5);transform:translate(-50%,16px);opacity:0;transition:transform 360ms cubic-bezier(.2,.7,.2,1),opacity 360ms}
.ca-toast.on{transform:translate(-50%,0);opacity:1}
.ca-toast i{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#B8C2A6;color:#1E1B17}
@media (max-width:639px){.ca-scrim{align-items:flex-end;padding:0}.ca-box{max-width:none;max-height:92vh;border-radius:20px 20px 0 0;transform:translateY(40px)}.ca-in{padding:40px 20px calc(24px + env(safe-area-inset-bottom))}.ca-t{font-size:28px}.ca-code{gap:6px}.ca-code input{height:56px}}
@media (prefers-reduced-motion:reduce){.ca-step{animation:none}.ca-box,.ca-toast{transition:none}}`;

  let root, box, ctx = {}, last, timer, gen = 0;
  const after = (f, ms) => { const g = gen; return setTimeout(() => { if (g === gen && root && !root.hidden) f(); }, ms); };
  const toast = (msg) => {
    if (!document.getElementById("ca-css")) { const st = document.createElement("style"); st.id = "ca-css"; st.textContent = css; document.head.appendChild(st); }
    const t = document.createElement("div"); t.className = "ca-toast"; t.setAttribute("role", "status");
    t.innerHTML = "<i>" + ic("check", 16) + "</i><span>" + esc(msg) + "</span>"; document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("on"));
    setTimeout(() => { t.classList.remove("on"); setTimeout(() => t.remove(), 400); }, 3600);
  };
  A.toast = toast;
  const catChip = (c) => c ? '<span class="ca-cat"><span style="background-image:url(' + esc(c.photo) + ');background-position:' + esc(c.pos || "50% 30%") + '"></span><span>' + esc(c.name) + " · " + esc(c.shelter) + "</span></span>" : "";
  const copy = () => {
    const c = ctx.cat;
    if (ctx.mode === "save" && c) return { chip: catChip(c), t: "Keep " + c.name + " saved", s: "Add your email and your saved cats follow you to any device. We'll also tell you if someone else applies for " + (c.sex === "Male" ? "him" : "her") + "." };
    if (ctx.mode === "apply") return { chip: catChip(c), t: c ? "Apply for " + c.name : "Before you apply", s: "Shelters reply by email, so we need one. Your answers save as you go — you can finish on any device." };
    return { chip: '<span class="ca-mark">' + ic("mail", 22) + "</span>", t: "Sign in or join CATÉ", s: "One account for your saved cats and applications. No password — we'll email you a code." };
  };
  const trap = (e) => {
    if (e.key === "Escape") { e.preventDefault(); dismiss(); return; }
    if (e.key !== "Tab") return;
    const f = [...box.querySelectorAll("button:not([disabled]),input,a[href]")].filter((x) => x.offsetParent);
    if (!f.length) return; const a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  };
  const busy = (b, on, label) => { b.disabled = on; b.innerHTML = on ? '<span class="ca-spin" aria-hidden="true"></span><span>' + label + "</span>" : b.dataset.label; };
  const step = (html, focusSel) => {
    box.innerHTML = '<button type="button" class="ca-x" aria-label="Close">' + ic("x") + '</button><div class="ca-in ca-step">' + html + "</div>";
    box.querySelector(".ca-x").onclick = dismiss;
    requestAnimationFrame(() => { const f = focusSel ? box.querySelector(focusSel) : box; f && f.focus(); });
  };
  const finish = (u, isNew) => {
    A.signIn(u);
    const then = ctx.then; const c = ctx.cat; const mode = ctx.mode;
    close();
    let msg = isNew ? "Account created. Welcome, " + u.first + "." : "Welcome back, " + u.first + ".";
    if (mode === "save" && c) msg = c.name + " is saved to your account.";
    if (then) { toast(msg); setTimeout(then, 250); return; }
    if (mode === "nav" && here !== "Account.dc.html") { try { sessionStorage.setItem("cate.toast", msg); } catch (_) {} location.href = "Account.dc.html"; return; }
    toast(msg);
  };
  const viewStart = () => {
    const k = copy();
    step('<div class="ca-head">' + k.chip + '<h2 class="ca-t" id="ca-t">' + esc(k.t) + '</h2><p class="ca-s">' + esc(k.s) + '</p></div>' +
      '<div class="ca-stack"><button type="button" class="ca-btn ca-sso" data-p="Google">' + G + '<span>Continue with Google</span></button><button type="button" class="ca-btn ca-sso" data-p="Apple">' + AP + '<span>Continue with Apple</span></button></div>' +
      '<div class="ca-or">or</div>' +
      '<form class="ca-stack" novalidate><div class="ca-field"><label for="ca-email">Email</label><input id="ca-email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="' + esc(ctx.email || "") + '" aria-describedby="ca-email-err"></div><p class="ca-err" id="ca-email-err" hidden></p><button type="submit" class="ca-btn ca-pri" data-label="Continue with email">Continue with email</button></form>' +
      (ctx.mode === "save" ? '<button type="button" class="ca-link ca-later">Not now — keep it on this device</button>' : "") +
      '<p class="ca-fine">By continuing you agree to our <a href="Legal.dc.html#terms">Terms</a> and <a href="Legal.dc.html#privacy">Privacy</a>.</p>', ctx.email ? "#ca-email" : null);
    box.setAttribute("aria-labelledby", "ca-t");
    box.querySelectorAll(".ca-sso").forEach((b) => { b.dataset.label = b.innerHTML; b.onclick = () => { busy(b, true, "Connecting to " + b.dataset.p + "…"); box.querySelectorAll(".ca-sso").forEach((x) => x !== b && (x.disabled = true)); after(() => finish({ ...DEMO, via: b.dataset.p }, false), 900); }; });
    const later = box.querySelector(".ca-later"); if (later) later.onclick = () => { close(); toast((ctx.cat ? ctx.cat.name : "Cat") + " is saved on this device."); };
    const form = box.querySelector("form"), inp = form.querySelector("input"), err = form.querySelector(".ca-err"), sub = form.querySelector("button");
    inp.oninput = () => { if (!err.hidden) { err.hidden = true; inp.setAttribute("aria-invalid", "false"); } };
    form.onsubmit = (e) => {
      e.preventDefault(); const v = inp.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { err.textContent = v ? "That doesn't look like a full email. Check for a typo." : "Add your email so we can send you a code."; err.hidden = false; inp.setAttribute("aria-invalid", "true"); inp.focus(); return; }
      ctx.email = v.toLowerCase(); busy(sub, true, "Sending code…"); after(viewCode, 800);
    };
  };
  const viewCode = () => {
    step('<button type="button" class="ca-back" aria-label="Use a different email">' + ic("left") + '</button><div class="ca-head"><span class="ca-mark">' + ic("mail", 22) + '</span><h2 class="ca-t" id="ca-t">Check your email</h2><p class="ca-s">We sent a 6-digit code to <b>' + esc(ctx.email) + '</b>. It works for 10 minutes.</p></div>' +
      '<fieldset style="border:0;margin:0;padding:0;display:grid;gap:10px"><legend style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">6-digit code</legend><div class="ca-code">' + Array.from({ length: 6 }, (_, i) => '<input inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="' + (i ? "off" : "one-time-code") + '" aria-label="Digit ' + (i + 1) + ' of 6">').join("") + '</div><p class="ca-err" id="ca-code-err" hidden></p></fieldset>' +
      '<button type="button" class="ca-btn ca-pri ca-verify" data-label="Verify" disabled>Verify</button>' +
      '<div class="ca-row"><button type="button" class="ca-link ca-resend" disabled>Resend code in 30s</button><button type="button" class="ca-link ca-change">Use a different email</button></div>' +
      '<div class="ca-note">' + ic("lock", 16) + "<span>Prototype: any 6 digits sign you in.</span></div>", ".ca-code input");
    const ins = [...box.querySelectorAll(".ca-code input")], ver = box.querySelector(".ca-verify"), err = box.querySelector("#ca-code-err"), wrap = box.querySelector(".ca-code");
    const val = () => ins.map((i) => i.value).join("");
    const upd = () => { ver.disabled = val().length !== 6; if (!err.hidden) { err.hidden = true; wrap.classList.remove("bad"); } };
    const fill = (s, from) => { s.replace(/\D/g, "").split("").slice(0, 6 - from).forEach((ch, k) => { ins[from + k].value = ch; }); const n = Math.min(5, from + s.replace(/\D/g, "").length); ins[n].focus(); upd(); if (val().length === 6) submit(); };
    ins.forEach((inp, i) => {
      inp.oninput = () => { const v = inp.value.replace(/\D/g, ""); if (v.length > 1) { inp.value = ""; return fill(v, i); } inp.value = v; if (v && i < 5) ins[i + 1].focus(); upd(); if (val().length === 6) submit(); };
      inp.onkeydown = (e) => { if (e.key === "Backspace" && !inp.value && i > 0) { ins[i - 1].focus(); ins[i - 1].value = ""; upd(); e.preventDefault(); } else if (e.key === "ArrowLeft" && i > 0) ins[i - 1].focus(); else if (e.key === "ArrowRight" && i < 5) ins[i + 1].focus(); };
      inp.onpaste = (e) => { e.preventDefault(); fill((e.clipboardData || window.clipboardData).getData("text"), i); };
      inp.onfocus = () => inp.select();
    });
    let submitting = false;
    const submit = () => {
      if (submitting) return; const v = val();
      if (v === "000000") { err.textContent = "That code didn't work. Check the latest email, or resend."; err.hidden = false; wrap.classList.add("bad"); ins.forEach((x) => (x.value = "")); ins[0].focus(); ver.disabled = true; return; }
      submitting = true; busy(ver, true, "Checking…");
      after(() => {
        const known = read(ACC, {})[ctx.email];
        if (ctx.email === DEMO.email) return finish({ ...DEMO, via: "email" }, false);
        if (known) return finish(known, false);
        viewName();
      }, 700);
    };
    ver.onclick = submit;
    const back = () => { clearInterval(timer); viewStart(); };
    box.querySelector(".ca-back").onclick = back; box.querySelector(".ca-change").onclick = back;
    const rs = box.querySelector(".ca-resend"); let left = 30;
    clearInterval(timer); timer = setInterval(() => { left--; if (left <= 0) { clearInterval(timer); rs.disabled = false; rs.textContent = "Resend code"; } else rs.textContent = "Resend code in " + left + "s"; }, 1000);
    rs.onclick = () => { left = 30; rs.disabled = true; rs.textContent = "Resend code in 30s"; toast("New code sent to " + ctx.email + "."); clearInterval(timer); timer = setInterval(() => { left--; if (left <= 0) { clearInterval(timer); rs.disabled = false; rs.textContent = "Resend code"; } else rs.textContent = "Resend code in " + left + "s"; }, 1000); };
  };
  const viewName = () => {
    clearInterval(timer);
    const guess = ctx.email.split("@")[0].split(/[._-]/)[0]; const cap = guess ? guess[0].toUpperCase() + guess.slice(1) : "";
    step('<div class="ca-head"><span class="ca-mark">' + ic("check", 22) + '</span><h2 class="ca-t" id="ca-t">Nice to meet you</h2><p class="ca-s">What should shelters call you? This goes on your applications — you can change it later.</p></div>' +
      '<form class="ca-stack" novalidate><div class="ca-two"><div class="ca-field"><label for="ca-first">First name</label><input id="ca-first" autocomplete="given-name" value="' + esc(/^\d/.test(cap) ? "" : cap) + '"></div><div class="ca-field"><label for="ca-last">Last name</label><input id="ca-last" autocomplete="family-name"></div></div><p class="ca-err" hidden></p><button type="submit" class="ca-btn ca-pri" data-label="Create account">Create account</button></form>' +
      '<p class="ca-fine">Signed in as ' + esc(ctx.email) + "</p>", "#ca-last");
    const form = box.querySelector("form"), f = form.querySelector("#ca-first"), l = form.querySelector("#ca-last"), err = form.querySelector(".ca-err"), b = form.querySelector("button");
    [f, l].forEach((x) => (x.oninput = () => { err.hidden = true; x.setAttribute("aria-invalid", "false"); }));
    form.onsubmit = (e) => {
      e.preventDefault(); const fv = f.value.trim(), lv = l.value.trim();
      if (!fv) { err.textContent = "Add your first name so the shelter knows who's writing."; err.hidden = false; f.setAttribute("aria-invalid", "true"); f.focus(); return; }
      busy(b, true, "Creating account…");
      after(() => finish({ email: ctx.email, first: fv, last: lv, place: "", phone: "", home: "", since: MONTH[new Date().getMonth()], demo: false, via: "email" }, true), 700);
    };
  };
  const build = () => {
    if (!document.getElementById("ca-css")) { const st = document.createElement("style"); st.id = "ca-css"; st.textContent = css; document.head.appendChild(st); }
    root = document.createElement("div"); root.className = "ca-scrim"; root.hidden = true;
    root.innerHTML = '<div class="ca-box" role="dialog" aria-modal="true" tabindex="-1"></div>';
    document.body.appendChild(root); box = root.firstChild;
    root.addEventListener("mousedown", (e) => { if (e.target === root) dismiss(); });
    root.addEventListener("keydown", trap);
  };
  function open(o) {
    if (user) { o.then && o.then(); return; }
    if (!root) build(); gen++; ctx = { ...o, email: ctx.email };
    last = document.activeElement; root.hidden = false; document.documentElement.style.overflow = "hidden";
    viewStart(); requestAnimationFrame(() => root.classList.add("on"));
  }
  function close() {
    if (!root || root.hidden) return; clearInterval(timer); gen++;
    root.classList.remove("on"); document.documentElement.style.overflow = "";
    setTimeout(() => { root.hidden = true; }, 200); last && last.focus && last.focus();
  }
  function dismiss() { const d = ctx.onDismiss; close(); d && d(); }

  const S = window.CATE_SAVED;
  if (S) {
    const orig = S.toggle;
    S.toggle = (id) => {
      const adding = !S.has(id); orig(id);
      let asked = false; try { asked = !!sessionStorage.getItem("cate.savePrompt"); } catch (_) {}
      if (adding && !user && !asked) {
        try { sessionStorage.setItem("cate.savePrompt", "1"); } catch (_) {}
        const c = window.CATE_MOCK && window.CATE_MOCK.byId(id);
        setTimeout(() => open({ mode: "save", cat: c }), 220);
      }
    };
  }
  const onReady = (f) => (document.readyState === "complete" ? setTimeout(f, 300) : window.addEventListener("load", () => setTimeout(f, 300)));
  if (here === "Status.dc.html" && (!user || !user.demo)) location.replace("Account.dc.html");
  if (here === "Apply.dc.html" && !user) onReady(() => {
    const id = new URLSearchParams(location.search).get("id"); const c = id && window.CATE_MOCK ? window.CATE_MOCK.byId(id) : null;
    open({ mode: "apply", cat: c, onDismiss: () => { if (history.length > 1 && document.referrer) history.back(); else location.href = c ? "Profile.dc.html?id=" + c.id : "Browse.dc.html"; } });
  });
  onReady(() => { let m = null; try { m = sessionStorage.getItem("cate.toast"); sessionStorage.removeItem("cate.toast"); } catch (_) {} if (m) toast(m); });
})();

// Motion system (sync so entrances are set before first paint)
(function(){var cs=document.currentScript;if(document.readyState==='loading'&&cs&&!cs.async&&!cs.defer){document.write('<script src="cate-motion.js"><\/script>');}else{var s=document.createElement('script');s.src='cate-motion.js';document.head.appendChild(s);}})();
