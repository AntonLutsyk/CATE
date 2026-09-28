// CATÉ motion system — one clock, one easing family, one stagger.
// Tokens: fast 160 · base 240 · slow 480 · enter 640 · photo 720 | ease-out (.2,.7,.2,1) · ease-in-out (.45,0,.25,1) | stagger 70ms (max 5) | rise 14px
(function () {
if (window.__cateMotion) return; window.__cateMotion = true;
const doc = document, root = doc.documentElement;
const early = doc.createElement('style');
early.textContent = 'html{background:#F4EFE5}' +
  '@view-transition{navigation:auto}' +
  '::view-transition-group(root),::view-transition-old(root),::view-transition-new(root){animation-duration:260ms;animation-timing-function:cubic-bezier(.2,.7,.2,1)}' +
  '.c-nav{view-transition-name:cate-nav}::view-transition-group(cate-nav){animation-duration:0s}' +
  '@media (prefers-reduced-motion:reduce){@view-transition{navigation:none}}';
(doc.head || root).appendChild(early);

const RM = matchMedia('(prefers-reduced-motion: reduce)');
if (RM.matches) return;
const E = 'cubic-bezier(.2,.7,.2,1)', EIO = 'cubic-bezier(.45,0,.25,1)';
const D = { fast: 160, base: 240, slow: 480, enter: 640, photo: 720 };
const STAG = 70, STAG_MAX = 5, RISE = 14;
let t0 = null; // early window opens when content first renders, not when this script loads
const isEarly = () => t0 === null || performance.now() - t0 < 2600;
const fine = matchMedia('(hover: hover) and (pointer: fine)');
const SKIP = '.c-scrim,.c-drawer,.b-sheet,[role="dialog"],.c-nav,.c-footer,footer,.c-menu,.m-ghost';
const seen = new WeakSet(), armed = new WeakMap();
const baseT = (el) => { const t = el.style.transform; return t && t !== 'none' ? ' ' + t : ''; };

function rise(el, delay = 0, dist = RISE, dur = D.enter) {
  const b = baseT(el);
  return el.animate([{ opacity: 0, transform: `translateY(${dist}px)${b}` }, { opacity: 1, transform: b.trim() || 'none' }],
    { duration: dur, delay, easing: E, fill: 'backwards' });
}
function draw(path, delay = 0, dur = 900) {
  if (!path || !path.getTotalLength) return;
  let len; try { len = path.getTotalLength(); } catch (e) { return; }
  if (!len) return;
  path.style.strokeDasharray = len;
  const a = path.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: dur, delay, easing: EIO, fill: 'backwards' });
  a.onfinish = a.oncancel = () => { path.style.strokeDasharray = ''; };
}
function drawSquiggles(scope, delay) { scope.querySelectorAll('.c-squiggle path').forEach((p, i) => { seen.add(p.closest('svg')); draw(p, delay + i * 60); }); }
function loop(el, frames, dur, delay = 0) {
  return el.animate(frames, { duration: dur, delay, easing: EIO, iterations: Infinity, direction: 'alternate', fill: 'none' });
}

/* ── Page entrance ── */
// The runtime may render hint placeholders first and then remount the section, so claim by identity and only once the subtree is complete.
let heroEl = null;
function tryHero() {
  const main = doc.querySelector('main');
  const first = main && [...main.children].find(n => !/^(STYLE|SCRIPT|TEMPLATE)$/.test(n.tagName));
  if (!first || !first.firstElementChild || first === heroEl) return;
  const hx = first.matches('.hx') ? first : null;
  if (hx && !(hx.querySelector('.hx-fig img') && hx.querySelector('.h-otto') && hx.querySelector('.hx-copy h1'))) return;
  if (t0 === null) t0 = performance.now();
  if (!isEarly()) { heroEl = first; return; }
  heroEl = first;
  if (hx) homeHero(hx); else pageHero(first);
  seen.add(first);
}
function pageHero(sec) {
  let n = sec;
  while (n.children.length === 1 && n.firstElementChild.children.length) n = n.firstElementChild;
  let units = [...n.children].filter(c => !/^(STYLE|SCRIPT)$/.test(c.tagName) && c.getAttribute('aria-hidden') !== 'true');
  if (units.length < 2 || units.length > 8) units = [n];
  units.forEach((u, i) => { rise(u, 40 + Math.min(i, STAG_MAX) * STAG, 12, 560); seen.add(u); });
  drawSquiggles(sec, 260);
}
function homeHero(hx) {
  const copy = hx.querySelector('.hx-copy'), fig = hx.querySelector('.hx-fig');
  let i = 0; const at = () => 80 + i++ * 80;
  if (copy) [...copy.children].forEach(ch => {
    if (ch.tagName === 'H1') {
      [...ch.children].forEach(s => {
        if (s.tagName !== 'SPAN') return;
        s.animate([{ opacity: 0, transform: 'translateY(.32em)', clipPath: 'inset(-15% -6% 100% -6%)' },
                   { opacity: 1, transform: 'none', clipPath: 'inset(-15% -6% -15% -6%)' }],
          { duration: 860, delay: at(), easing: E, fill: 'backwards' });
      });
      const loopPath = ch.querySelector('.hx-doodle path'); if (loopPath) draw(loopPath, 80 + i * 80 + 380, 1000);
    } else rise(ch, at(), 12, 600);
  });
  drawSquiggles(copy || hx, 200);
  if (!fig) return;
  fig.animate([{ opacity: 0, transform: 'translateY(16px) scale(.975)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: 180, easing: E, fill: 'backwards' });
  const kids = [...fig.children];
  const blob = kids[0], cat = fig.querySelector('img') && fig.querySelector('img').parentElement;
  const otto = fig.querySelector('.h-otto');
  const decos = kids.filter(k => k.getAttribute('aria-hidden') === 'true' && k !== blob && k !== kids[1]);
  if (otto) {
    const b = otto.style.transform || 'rotate(-5deg)';
    otto.animate([{ opacity: 0, transform: `translateY(18px) ${b} rotate(3deg)` }, { opacity: 1, transform: b }], { duration: 760, delay: 640, easing: E, fill: 'backwards' });
    loop(otto, [{ transform: `${b} translateY(0)` }, { transform: `${b} rotate(.8deg) translateY(-6px)` }], 6400, 1400);
    drawSquiggles(otto, 1000);
  }
  decos.forEach((d, k) => {
    d.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'none' }], { duration: D.slow, delay: 820 + k * 70, easing: E, fill: 'backwards' });
    if (k === 0) { d.style.transformOrigin = '58% 0'; loop(d, [{ transform: 'rotate(-2.5deg)' }, { transform: 'rotate(2.5deg)' }], 4200, 1300); }
    else loop(d, [{ transform: 'translateY(0) rotate(0)' }, { transform: `translateY(${k % 2 ? -4 : 3}px) rotate(${k % 2 ? 4 : -4}deg)` }], 3600 + k * 700, 1300 + k * 120);
  });
  if (cat) loop(cat, [{ transform: 'translateY(0)' }, { transform: 'translateY(-5px)' }], 5200, 1200);
  // Parallax: blob drifts against the pointer, cat and doodles with it. Scroll adds a slow sink to the blob.
  const layers = [[blob, -9], [cat, 5], ...decos.map(d => [d, 12])].filter(l => l[0]);
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, sy = 0;
  const tick = () => {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    layers.forEach(([el, d]) => { el.style.translate = `${(cx * d).toFixed(2)}px ${(cy * d + (el === blob ? sy * .05 : 0)).toFixed(2)}px`; });
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .002 ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
  if (fine.matches) {
    hx.addEventListener('pointermove', e => { const r = hx.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width - .5; ty = (e.clientY - r.top) / r.height - .5; kick(); }, { passive: true });
    hx.addEventListener('pointerleave', () => { tx = ty = 0; kick(); });
  }
  addEventListener('scroll', () => { const y = scrollY; if (y > innerHeight * 1.2) return; sy = y; if (!raf) { tick(); } }, { passive: true });
}

/* ── Scroll reveal: section headings, cards, blocks, stats. Not paragraphs, not every node. ── */
const UNITS = '.c-cat,.c-shelter,.c-block,article,.c-stat,.hw-art,.hw-stat,h2';
const io = new IntersectionObserver((entries) => {
  const groups = new Map();
  entries.forEach(en => { if (!en.isIntersecting) return; io.unobserve(en.target); const p = en.target.parentElement; if (!groups.has(p)) groups.set(p, []); groups.get(p).push(en.target); });
  groups.forEach(list => list.sort((a, b) => { const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect(); return ra.top - rb.top || ra.left - rb.left; })
    .forEach((el, i) => {
      if (el.matches('svg.c-squiggle')) { el.querySelectorAll('path').forEach(p => draw(p, 120)); return; }
      const a = armed.get(el); if (!a) return; armed.delete(el);
      a.effect.updateTiming({ delay: Math.min(i, STAG_MAX) * STAG });
      a.onfinish = () => a.cancel();
      a.play();
      el.querySelectorAll('.c-squiggle path').forEach(p => draw(p, 200 + Math.min(i, STAG_MAX) * STAG));
    }));
}, { rootMargin: '0px 0px -6% 0px', threshold: .12 });

function unitOf(el) { return el.tagName === 'H2' ? (el.closest('header') || el) : el; }
function consider(nodes) {
  const main = doc.querySelector('main'); if (!main) return;
  const vh = innerHeight, late = !isEarly();
  const fresh = [];
  nodes.forEach(n => {
    const u = unitOf(n);
    if (seen.has(u) || !main.contains(u) || u.closest(SKIP)) return;
    if (u.parentElement && u.parentElement.closest(UNITS.replace(',h2', '')) ) { seen.add(u); return; }
    const hero = main.firstElementChild; if (hero && hero.contains(u) && hero !== u && !late) { seen.add(u); return; }
    seen.add(u); fresh.push(u);
  });
  const rects = fresh.map(u => u.getBoundingClientRect());
  let k = 0;
  fresh.forEach((u, i) => {
    const r = rects[i]; if (!r.width && !r.height) return;
    if (r.top > vh * .94) {
      const b = baseT(u);
      const a = u.animate([{ opacity: 0, transform: `translateY(${RISE}px)${b}` }, { opacity: 1, transform: b.trim() || 'none' }], { duration: D.enter, easing: E, fill: 'both' });
      a.pause(); armed.set(u, a); io.observe(u);
    } else if (!late && r.bottom > 0 && u.matches('.c-cat,.c-shelter,.c-block,.c-stat')) {
      rise(u, 220 + Math.min(k++, STAG_MAX) * STAG, RISE, D.enter);
    } else if (late && r.bottom > 0 && u.matches('.c-cat,.c-shelter')) {
      // results changed in view (filters, sort, unsave): soft settle, no travel
      u.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: Math.min(k++, 8) * 30, easing: E, fill: 'backwards' });
    }
  });
}
function considerSquiggles(list) {
  const vh = innerHeight;
  list.forEach(svg => {
    if (seen.has(svg) || svg.closest('.m-ghost')) return; seen.add(svg);
    const r = svg.getBoundingClientRect();
    if (r.top > vh * .94) { svg.querySelectorAll('path').forEach(p => { try { const l = p.getTotalLength(); p.style.strokeDasharray = l; p.style.strokeDashoffset = l; } catch (e) {} }); sqIO.observe(svg); }
    else if (r.bottom > 0) svg.querySelectorAll('path').forEach(p => draw(p, isEarly() ? 320 : 0, 800));
  });
}
const sqIO = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; sqIO.unobserve(en.target); en.target.querySelectorAll('path').forEach(p => { p.style.strokeDashoffset = ''; draw(p, 160); }); }), { threshold: .5 });

/* ── Ambient: slow, small, only on decorative marks ── */
function ambient(el) {
  if (seen.has(el)) return; seen.add(el);
  const b = baseT(el).trim();
  if (el.matches('.nw-yarn')) loop(el, [{ transform: `${b} rotate(0)` }, { transform: `${b} rotate(-1.5deg) translateY(-4px)` }], 7200);
  else if (el.matches('svg.sn-deco,.nw-hand')) loop(el, [{ transform: `${b} translateY(0)` }, { transform: `${b} translateY(-4px) rotate(3deg)` }], 4200 + Math.random() * 1200);
}

/* ── Enter / exit for things that appear on demand ── */
function onAdded(el) {
  if (el.matches('[role="region"][aria-labelledby]')) accordionOpen(el);
  if (el.matches('[role="alert"],.c-field__error,.c-notice')) el.animate([{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }], { duration: D.base, easing: E });
  if (el.parentElement && el.parentElement.matches('[role="tabpanel"]') && !isEarly()) rise(el, 0, 8, 360);
}
function accordionOpen(el) {
  const cs = getComputedStyle(el), pt = cs.paddingTop, pb = cs.paddingBottom;
  const h = el.getBoundingClientRect().height - parseFloat(pt) - parseFloat(pb);
  el.style.overflow = 'hidden';
  const a = el.animate([{ height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0 }, { height: h + 'px', paddingTop: pt, paddingBottom: pb, opacity: 1 }], { duration: 320, easing: E });
  a.onfinish = a.oncancel = () => { el.style.overflow = ''; };
}
const EXIT = '.c-scrim,.c-drawer,.b-sheet';
function onRemoved(n, parent, next) {
  const x = n.matches(EXIT) ? n : n.querySelector && n.querySelector(EXIT);
  if (x && doc.body) {
    const g = x.cloneNode(true); g.classList.add('m-ghost'); g.setAttribute('aria-hidden', 'true'); g.removeAttribute('role');
    doc.body.appendChild(g);
    const panel = g.querySelector('.c-modal,.b-sheet-in,.c-drawer__links');
    const sheet = innerWidth < 640 && panel && !panel.matches('.c-drawer__links');
    if (panel) panel.animate([{ transform: 'none' }, { transform: sheet ? 'translateY(40%)' : 'translateY(10px)' }], { duration: 220, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
    g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' }).onfinish = () => g.remove();
    return;
  }
  if (n.matches && n.matches('[role="region"][aria-labelledby]') && parent && parent.isConnected) {
    const g = n.cloneNode(true); g.classList.add('m-ghost'); g.removeAttribute('id'); g.setAttribute('aria-hidden', 'true'); g.style.overflow = 'hidden';
    parent.insertBefore(g, next && next.parentNode === parent ? next : null);
    const h = g.getBoundingClientRect().height;
    g.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0 }], { duration: 240, easing: E, fill: 'forwards' }).onfinish = () => g.remove();
  }
}

/* ── Attribute-driven feedback ── */
function onAttr(el, name) {
  if (name === 'aria-invalid' && el.getAttribute('aria-invalid') === 'true') {
    const t = el.closest('.c-field,.a-fld,label') || el;
    t.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(-2px)' }, { transform: 'translateX(0)' }], { duration: 360, easing: EIO });
  }
}

/* ── Save / heart ── */
const isSave = (b) => b && (b.closest('.c-cat__save') || /^(save|unsave|remove from saved)\b/i.test(b.getAttribute('aria-label') || '') || /^(save|saved)$/i.test((b.textContent || '').trim()));
doc.addEventListener('click', (e) => {
  const b = e.target.closest && e.target.closest('button,[role="button"]');
  if (!isSave(b)) return;
  const card = b.closest('.c-cat,article,section'), label = (b.getAttribute('aria-label') || '').replace(/^(Save|Unsave)\s*/i, '');
  requestAnimationFrame(() => {
    let t = b.isConnected ? b : null;
    if (!t && card && card.isConnected) t = [...card.querySelectorAll('button')].find(isSave);
    if (!t && label) t = [...doc.querySelectorAll('button[aria-label]')].find(x => x.getAttribute('aria-label').endsWith(label) && isSave(x));
    if (!t) return;
    const on = t.getAttribute('aria-pressed') === 'true' || /^unsave|^saved/i.test(t.getAttribute('aria-label') || t.textContent.trim());
    const icon = t.querySelector('svg') || t;
    icon.animate(on
      ? [{ transform: 'scale(1)' }, { transform: 'scale(.78)', offset: .25 }, { transform: 'scale(1.18)', offset: .62 }, { transform: 'scale(1)' }]
      : [{ transform: 'scale(1)' }, { transform: 'scale(.86)', offset: .4 }, { transform: 'scale(1)' }],
      { duration: on ? 440 : 240, easing: E });
  });
}, true);

/* ── Observer ── */
const mo = new MutationObserver((muts) => {
  tryHero();
  const units = [], squig = [];
  const scan = (el) => {
    if (el.nodeType !== 1 || el.closest('.m-ghost')) return;
    if (el.matches(UNITS)) units.push(el);
    if (el.matches('svg.c-squiggle')) squig.push(el);
    if (el.matches('.nw-yarn,svg.sn-deco,.nw-hand')) ambient(el);
    onAdded(el);
    if (el.firstElementChild) {
      el.querySelectorAll(UNITS).forEach(x => units.push(x));
      el.querySelectorAll('svg.c-squiggle').forEach(x => squig.push(x));
      el.querySelectorAll('.nw-yarn,svg.sn-deco,.nw-hand').forEach(ambient);
      el.querySelectorAll('[role="region"][aria-labelledby],[role="alert"],.c-notice').forEach(onAdded);
    }
  };
  muts.forEach(m => {
    if (m.type === 'attributes') { onAttr(m.target, m.attributeName); return; }
    m.addedNodes.forEach(scan);
    m.removedNodes.forEach(n => { if (n.nodeType === 1 && !n.classList.contains('m-ghost')) onRemoved(n, m.target, m.nextSibling); });
  });
  if (units.length) consider(units);
  if (squig.length) considerSquiggles(squig);
});
mo.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-invalid'] });
})();
