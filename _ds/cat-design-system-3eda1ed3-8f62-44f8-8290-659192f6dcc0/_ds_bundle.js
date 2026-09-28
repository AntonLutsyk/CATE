/* @ds-bundle: {"format":4,"namespace":"CATDesignSystem_3eda1e","components":[{"name":"ColorBlock","sourcePath":"components/blocks/ColorBlock.jsx"},{"name":"CatCard","sourcePath":"components/cat/CatCard.jsx"},{"name":"Compatibility","sourcePath":"components/cat/Compatibility.jsx"},{"name":"TemperamentMeter","sourcePath":"components/cat/TemperamentMeter.jsx"},{"name":"TraitList","sourcePath":"components/cat/TraitList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"FilterChip","sourcePath":"components/filters/FilterChip.jsx"},{"name":"SegmentedControl","sourcePath":"components/filters/SegmentedControl.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"StepProgress","sourcePath":"components/forms/StepProgress.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Gallery","sourcePath":"components/gallery/Gallery.jsx"},{"name":"PhotoFrame","sourcePath":"components/media/PhotoFrame.jsx"},{"name":"Squiggle","sourcePath":"components/motif/Squiggle.jsx"},{"name":"SquiggleDivider","sourcePath":"components/motif/SquiggleDivider.jsx"},{"name":"Stat","sourcePath":"components/motif/Stat.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"SentenceSearch","sourcePath":"components/search/SentenceSearch.jsx"},{"name":"Checkbox","sourcePath":"components/selection/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/selection/Radio.jsx"},{"name":"Select","sourcePath":"components/selection/Select.jsx"},{"name":"ShelterCard","sourcePath":"components/shelter/ShelterCard.jsx"},{"name":"AdoptionJourney","sourcePath":"components/states/AdoptionJourney.jsx"},{"name":"EmptyState","sourcePath":"components/states/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/states/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/states/Spinner.jsx"}],"sourceHashes":{"components/blocks/ColorBlock.jsx":"a37efe5ef31f","components/cat/CatCard.jsx":"54980ec75913","components/cat/Compatibility.jsx":"614603a1926b","components/cat/TemperamentMeter.jsx":"6c043be7b224","components/cat/TraitList.jsx":"f1863befa0c9","components/core/Badge.jsx":"12cd507b8227","components/core/Button.jsx":"643a110625ea","components/core/Icon.jsx":"364d4ab15a7c","components/core/IconButton.jsx":"a503417b1fd7","components/core/Tag.jsx":"ec49043acefb","components/core/TextLink.jsx":"20f02db09589","components/core/Wordmark.jsx":"5721c5ac42a6","components/feedback/Modal.jsx":"92c8a905c21f","components/feedback/Notice.jsx":"2a416bd1c947","components/feedback/Toast.jsx":"ea4dae5cef14","components/filters/FilterChip.jsx":"457f800aa865","components/filters/SegmentedControl.jsx":"795adcae3096","components/forms/Field.jsx":"ef9bde8256a3","components/forms/Input.jsx":"6ffa1a72412a","components/forms/StepProgress.jsx":"3313c8f73cb8","components/forms/Textarea.jsx":"111796a5fbec","components/gallery/Gallery.jsx":"b3481b7c02d2","components/media/PhotoFrame.jsx":"0a9e299d2072","components/motif/Squiggle.jsx":"84dafbfd49be","components/motif/SquiggleDivider.jsx":"4cfb7f8c7539","components/motif/Stat.jsx":"ccf3e8712964","components/navigation/Footer.jsx":"a203d99f114a","components/navigation/Navbar.jsx":"f5191eb21c1d","components/navigation/Pagination.jsx":"67a8377ca25f","components/navigation/Tabs.jsx":"53ffbc57a798","components/search/SentenceSearch.jsx":"6cb0a80e6b31","components/selection/Checkbox.jsx":"2e72152932da","components/selection/Radio.jsx":"4d8d1b6f32e9","components/selection/Select.jsx":"2221b8430589","components/shelter/ShelterCard.jsx":"2452574c7aae","components/states/AdoptionJourney.jsx":"1451c4bc81d1","components/states/EmptyState.jsx":"29676894c31e","components/states/Skeleton.jsx":"f1adeffc85d5","components/states/Spinner.jsx":"036e498c8a0e","ui_kits/web/apply.jsx":"bde9448d2c0f","ui_kits/web/browse.jsx":"eb2475460fae","ui_kits/web/data.js":"7cc97016b51f","ui_kits/web/home.jsx":"690d400258c5","ui_kits/web/profile.jsx":"8505177886e7","ui_kits/web/saved.jsx":"c9f560cd791b"},"inlinedExternals":[],"unexposedExports":[{"name":"squigglePath","sourcePath":"components/motif/Squiggle.jsx"}]} */

(() => {

const __ds_ns = (window.CATDesignSystem_3eda1e = window.CATDesignSystem_3eda1e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/ColorBlock.jsx
try { (() => {
/** Solid colour-block card for secondary content: categories, spotlights, CTAs. Heavy headline + underlined link. */
function ColorBlock({
  tone = "rust",
  size = "m",
  eyebrow,
  title,
  line,
  linkLabel,
  href,
  onClick,
  photo,
  photoShape = "blob-a",
  children,
  className = "",
  style
}) {
  const Tag = href || onClick ? "a" : "div";
  const cls = ["c-block", "c-block--" + tone, size === "l" && "c-block--l", photo && "c-block--has-photo", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls,
    href: href || (onClick ? "#" : undefined),
    onClick: onClick ? e => {
      e.preventDefault();
      onClick(e);
    } : undefined,
    style: style
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "c-block__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("span", {
    className: "c-block__t"
  }, title), line && /*#__PURE__*/React.createElement("span", {
    className: "c-block__line"
  }, line), children, linkLabel && /*#__PURE__*/React.createElement("span", {
    className: "c-block__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-link--block"
  }, linkLabel)), photo && /*#__PURE__*/React.createElement("span", {
    className: "c-block__photo",
    style: {
      borderRadius: "var(--shape-" + photoShape + ")"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  })));
}
Object.assign(__ds_scope, { ColorBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ColorBlock.jsx", error: String((e && e.message) || e) }); }

// components/cat/TraitList.jsx
try { (() => {
/** Personality traits as a slash-separated line of plain words — not chips. */
function TraitList({
  traits = [],
  max,
  className = ""
}) {
  const shown = max ? traits.slice(0, max) : traits;
  return /*#__PURE__*/React.createElement("ul", {
    className: "c-traits " + className,
    "aria-label": "Personality"
  }, shown.map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t)), max && traits.length > max && /*#__PURE__*/React.createElement("li", {
    className: "t-muted"
  }, "+", traits.length - max));
}
Object.assign(__ds_scope, { TraitList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cat/TraitList.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Status marker: small caps + dot. Colour carries meaning — never decorative. */
function Badge({
  tone = "neutral",
  solid = false,
  dot = true,
  children,
  className = ""
}) {
  const cls = ["c-badge", "c-badge--" + tone, solid && "c-badge--solid", !dot && "c-badge--nodot", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Generated from assets/icons/*.svg (Lucide 0.460, ISC licence). Do not hand-edit paths.

const ICONS = {
  "arrow-down-up": "<path d=\"m3 16 4 4 4-4\"></path><path d=\"M7 20V4\"></path><path d=\"m21 8-4-4-4 4\"></path><path d=\"M17 4v16\"></path>",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\"></path><path d=\"M19 12H5\"></path>",
  "arrow-right": "<path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path>",
  "arrow-up-right": "<path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path>",
  "baby": "<path d=\"M9 12h.01\"></path><path d=\"M15 12h.01\"></path><path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"></path><path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"></path>",
  "bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"></path><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"></path>",
  "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"></path>",
  "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"></path><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"></path><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"></path><path d=\"M10 6h4\"></path><path d=\"M10 10h4\"></path><path d=\"M10 14h4\"></path><path d=\"M10 18h4\"></path>",
  "calendar-check": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"m9 16 2 2 4-4\"></path>",
  "calendar": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path>",
  "cat": "<path d=\"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z\"></path><path d=\"M8 14v.5\"></path><path d=\"M16 14v.5\"></path><path d=\"M11.25 16.25h1.5L12 17l-.75-.75Z\"></path>",
  "check": "<path d=\"M20 6 9 17l-5-5\"></path>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"></path>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\"></path>",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"></line>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>",
  "dog": "<path d=\"M11.25 16.25h1.5L12 17z\"></path><path d=\"M16 14v.5\"></path><path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309\"></path><path d=\"M8 14v.5\"></path><path d=\"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\"></path>",
  "external-link": "<path d=\"M15 3h6v6\"></path><path d=\"M10 14 21 3\"></path><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"></path><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path>",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path><path d=\"M2 12h20\"></path>",
  "hand-heart": "<path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"></path><path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"></path><path d=\"m2 15 6 6\"></path><path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\"></path>",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"></path>",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"></path><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path>",
  "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"></rect><circle cx=\"9\" cy=\"9\" r=\"2\"></circle><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"></path>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 16v-4\"></path><path d=\"M12 8h.01\"></path>",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line>",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"></rect><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"></rect>",
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"></path><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"></path>",
  "list-filter": "<path d=\"M3 6h18\"></path><path d=\"M7 12h10\"></path><path d=\"M10 18h4\"></path>",
  "loader": "<path d=\"M12 2v4\"></path><path d=\"m16.2 7.8 2.9-2.9\"></path><path d=\"M18 12h4\"></path><path d=\"m16.2 16.2 2.9 2.9\"></path><path d=\"M12 18v4\"></path><path d=\"m4.9 19.1 2.9-2.9\"></path><path d=\"M2 12h4\"></path><path d=\"m4.9 4.9 2.9 2.9\"></path>",
  "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\"></line>",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"></rect><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"></path>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
  "map": "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\"></path><path d=\"M15 5.764v15\"></path><path d=\"M9 3.236v15\"></path>",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line>",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path>",
  "minus": "<path d=\"M5 12h14\"></path>",
  "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path>",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
  "plus": "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>",
  "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M8.12 8.12 12 12\"></path><path d=\"M20 4 8.12 15.88\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M14.8 14.8 20 20\"></path>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><path d=\"m21 21-4.3-4.3\"></path>",
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"></line><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"></line>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path><path d=\"m9 12 2 2 4-4\"></path>",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\"></line><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\"></line><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\"></line><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\"></line><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\"></line><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\"></line><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\"></line><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"></line><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\"></line>",
  "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"></path><path d=\"M20 3v4\"></path><path d=\"M22 5h-4\"></path><path d=\"M4 17v2\"></path><path d=\"M5 18H3\"></path>",
  "stethoscope": "<path d=\"M11 2v2\"></path><path d=\"M5 2v2\"></path><path d=\"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\"></path><path d=\"M8 15a6 6 0 0 0 12 0v-3\"></path><circle cx=\"20\" cy=\"10\" r=\"2\"></circle>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2\"></path><path d=\"M12 20v2\"></path><path d=\"m4.93 4.93 1.41 1.41\"></path><path d=\"m17.66 17.66 1.41 1.41\"></path><path d=\"M2 12h2\"></path><path d=\"M20 12h2\"></path><path d=\"m6.34 17.66-1.41 1.41\"></path><path d=\"m19.07 4.93-1.41 1.41\"></path>",
  "syringe": "<path d=\"m18 2 4 4\"></path><path d=\"m17 7 3-3\"></path><path d=\"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5\"></path><path d=\"m9 11 4 4\"></path><path d=\"m5 19-3 3\"></path><path d=\"m14 4 6 6\"></path>",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>",
  "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\"></line>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>",
  "volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"></path><path d=\"M16 9a5 5 0 0 1 0 6\"></path><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\"></path>",
  "x": "<path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path>"
};
/** CATÉ icon — Lucide glyphs drawn at 1.5 stroke by default. */
function Icon({
  name,
  size = 20,
  stroke = 1.5,
  title,
  className,
  style,
  ...rest
}) {
  const body = ICONS[name];
  if (!body) {
    if (typeof console !== "undefined") console.warn("Icon: unknown name " + name);
    return null;
  }
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    className,
    style,
    ...rest,
    dangerouslySetInnerHTML: {
      __html: (title ? "<title>" + title + "</title>" : "") + body
    }
  });
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cat/Compatibility.jsx
try { (() => {
const ROWS = [{
  k: "kids",
  icon: "baby",
  label: "Kids"
}, {
  k: "cats",
  icon: "cat",
  label: "Cats"
}, {
  k: "dogs",
  icon: "dog",
  label: "Dogs"
}];
const WORD = {
  yes: "Good with",
  maybe: "Slow intro",
  no: "Not with",
  unknown: "Not yet known"
};
/** Kids / cats / dogs compatibility. compact = one line for cards; full = rows with shelter notes. */
function Compatibility({
  value = {},
  notes = {},
  variant = "compact"
}) {
  if (variant === "full") return /*#__PURE__*/React.createElement("ul", {
    className: "c-compat c-compat--full"
  }, ROWS.map(r => {
    const v = value[r.k] || "unknown";
    return /*#__PURE__*/React.createElement("li", {
      key: r.k,
      "data-v": v
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: r.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, r.label === "Kids" ? "Children" : "Other " + r.label.toLowerCase()), /*#__PURE__*/React.createElement("span", {
      className: "c-compat__v",
      "data-v": v
    }, WORD[v]), notes[r.k] && /*#__PURE__*/React.createElement("span", {
      className: "c-compat__note"
    }, notes[r.k]));
  }));
  return /*#__PURE__*/React.createElement("ul", {
    className: "c-compat",
    "aria-label": "Compatibility"
  }, ROWS.map(r => {
    const v = value[r.k] || "unknown";
    return /*#__PURE__*/React.createElement("li", {
      key: r.k,
      "data-v": v,
      title: WORD[v] + " " + r.label.toLowerCase()
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: r.icon,
      size: 15,
      stroke: 1.75
    }), /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, ": ", WORD[v]));
  }));
}
Object.assign(__ds_scope, { Compatibility });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cat/Compatibility.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Primary action control. One primary per view region. */
function Button({
  variant = "primary",
  size = "m",
  icon,
  iconEnd,
  loading = false,
  block = false,
  href,
  children,
  className = "",
  disabled,
  ...rest
}) {
  const cls = ["c-btn", "c-btn--" + variant, size !== "m" && "c-btn--" + size, block && "c-btn--block", className].filter(Boolean).join(" ");
  const is = size === "s" ? 16 : 18;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("span", {
    className: "c-spin",
    style: {
      width: is - 2,
      height: is - 2
    },
    "aria-hidden": "true"
  }) : icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: is,
    stroke: 1.75
  }), children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconEnd && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconEnd,
    size: is,
    stroke: 1.75
  }));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round icon-only control. Always pass a label. */
function IconButton({
  icon,
  label,
  variant = "plain",
  size = "m",
  pressed,
  className = "",
  ...rest
}) {
  const cls = ["c-iconbtn", variant !== "plain" && "c-iconbtn--" + variant, size !== "m" && "c-iconbtn--" + size, icon === "heart" && "c-iconbtn--save", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    "aria-pressed": pressed === undefined ? undefined : !!pressed
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "s" ? 16 : size === "l" ? 22 : 19
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cat/CatCard.jsx
try { (() => {
const STATUS = {
  available: null,
  new: ["new", "New this week"],
  pending: ["pending", "Meet pending"],
  adopted: ["adopted", "Adopted"],
  urgent: ["urgent", "Long stay"]
};
/** Editorial cat card: portrait photo, serif name, a line in the shelter's voice, traits, compatibility. */
function CatCard({
  cat,
  variant = "portrait",
  shape = "rect",
  saved = false,
  onSave,
  href = "#",
  onOpen
}) {
  const {
    id,
    name,
    age,
    sex,
    location,
    shelter,
    photo,
    inset,
    line,
    traits = [],
    compat,
    status = "available"
  } = cat || {};
  const st = STATUS[status];
  const open = e => {
    if (onOpen) {
      e.preventDefault();
      onOpen(cat);
    }
  };
  const save = e => {
    e.stopPropagation();
    onSave && onSave(cat);
  };
  const meta = /*#__PURE__*/React.createElement("div", {
    className: "c-cat__meta"
  }, /*#__PURE__*/React.createElement("span", null, age), /*#__PURE__*/React.createElement("span", null, sex), variant === "row" && /*#__PURE__*/React.createElement("span", null, location));
  if (variant === "row") return /*#__PURE__*/React.createElement("article", {
    className: "c-cat c-cat--row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-cat__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "c-cat__name",
    href: href,
    onClick: open
  }, name), meta), st && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: st[0]
  }, st[1]), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: (saved ? "Unsave " : "Save ") + name,
    pressed: saved,
    onClick: save,
    style: {
      position: "relative",
      zIndex: 2
    }
  }));
  const media = /*#__PURE__*/React.createElement("div", {
    className: "c-cat__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name + ", " + (line || ""),
    loading: "lazy"
  }), st && /*#__PURE__*/React.createElement("span", {
    className: "c-cat__status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: st[0],
    solid: true
  }, st[1])), status !== "adopted" && /*#__PURE__*/React.createElement("span", {
    className: "c-cat__save"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    variant: "photo",
    label: (saved ? "Unsave " : "Save ") + name,
    pressed: saved,
    onClick: save
  })), id && /*#__PURE__*/React.createElement("span", {
    className: "c-cat__no t-num"
  }, "N\xBA ", id));
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "c-cat__head"
  }, /*#__PURE__*/React.createElement("a", {
    className: "c-cat__name",
    href: href,
    onClick: open
  }, name), meta), line && /*#__PURE__*/React.createElement("p", {
    className: "c-cat__line"
  }, line), variant === "feature" && traits.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.TraitList, {
    traits: traits
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-cat__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-cat__loc"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 14,
    stroke: 1.75
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, variant === "feature" && shelter ? shelter + ", " : "", location)), compat && status !== "adopted" && /*#__PURE__*/React.createElement(__ds_scope.Compatibility, {
    value: compat
  })));
  if (variant === "feature") return /*#__PURE__*/React.createElement("article", {
    className: "c-cat c-cat--feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-cat__frame"
  }, media, inset && /*#__PURE__*/React.createElement("div", {
    className: "c-cat__inset"
  }, /*#__PURE__*/React.createElement("img", {
    src: inset,
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "c-cat__body"
  }, body));
  return /*#__PURE__*/React.createElement("article", {
    className: "c-cat" + (shape !== "rect" ? " c-cat--" + shape : "") + (status === "adopted" ? " c-cat--adopted" : "")
  }, media, body);
}
Object.assign(__ds_scope, { CatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cat/CatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Small squared label — applied filters, categories. Not for personality traits (use TraitList). */
function Tag({
  variant = "default",
  icon,
  onRemove,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ["c-tag", variant !== "default" && "c-tag--" + variant, className].filter(Boolean).join(" ")
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    stroke: 1.75
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove " + (typeof children === "string" ? children : ""),
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13,
    stroke: 2
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline or standalone navigational link. */
function TextLink({
  href = "#",
  variant = "default",
  arrow = false,
  external = false,
  children,
  className = "",
  ...rest
}) {
  const cls = ["c-link", variant !== "default" && "c-link--" + variant, arrow && "c-link--arrow", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    stroke: 1.75
  }), external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 15,
    stroke: 1.75
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/** CATÉ wordmark — set in DM Serif Display. Type-only; there is no drawn logo. */
function Wordmark({
  size = 26,
  tagline = false,
  inverse = false,
  href,
  className = "",
  style
}) {
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    className: "c-wordmark " + className,
    "aria-label": "CAT\xC9",
    style: {
      fontSize: size,
      color: inverse ? "var(--paper-50)" : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "CAT\xC9"), tagline && /*#__PURE__*/React.createElement("span", {
    className: "c-wordmark__tag",
    style: {
      color: inverse ? "var(--ink-300)" : undefined
    }
  }, "Cat adoption"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Dialog. Esc and scrim-click close. Becomes a bottom sheet under 640px. */
function Modal({
  open = true,
  title,
  eyebrow,
  onClose,
  children,
  footer,
  size = "m"
}) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "c-scrim",
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-modal" + (size === "l" ? " c-modal--l" : ""),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "t-overline t-muted"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "t-h3"
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    className: "c-modal__x",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "c-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "c-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
const IC = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  error: "circle-alert"
};
/** Inline, persistent message inside a page or form. */
function Notice({
  tone = "info",
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-notice c-notice--" + tone,
    role: tone === "error" ? "alert" : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: IC[tone],
    size: 18,
    stroke: 1.75
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontWeight: 700
    }
  }, title), children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const IC = {
  success: "circle-check",
  error: "circle-alert",
  info: "info",
  saved: "heart"
};
/** Transient confirmation on ink. Position it bottom-left of the viewport. */
function Toast({
  tone = "info",
  children,
  action,
  onAction,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-toast c-toast--" + tone,
    role: tone === "error" ? "alert" : "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-toast__ic"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: IC[tone],
    size: 19,
    style: tone === "saved" ? {
      fill: "currentColor"
    } : undefined
  })), /*#__PURE__*/React.createElement("span", {
    className: "c-toast__msg"
  }, children), action && /*#__PURE__*/React.createElement("button", {
    className: "c-toast__act",
    onClick: onAction
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    className: "c-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggleable filter. Pressed = ink fill. Optional result count and dropdown caret. */
function FilterChip({
  selected = false,
  count,
  icon,
  caret = false,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "c-chip " + className,
    "aria-pressed": selected
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    stroke: 1.75
  }), children, count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "c-chip__count t-num"
  }, count), caret && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    stroke: 2
  }));
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/filters/SegmentedControl.jsx
try { (() => {
/** Small mutually-exclusive switcher — age bands, grid/list view. */
function SegmentedControl({
  options = [],
  value,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-seg",
    role: "group",
    "aria-label": label
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      "aria-pressed": v === value,
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Label + control + hint/error wrapper. Wrap every form control in one. */
function Field({
  label,
  htmlFor,
  optional = false,
  hint,
  error,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-field " + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "c-field__label",
    htmlFor: htmlFor
  }, /*#__PURE__*/React.createElement("span", null, label), optional && /*#__PURE__*/React.createElement("span", {
    className: "c-field__opt"
  }, "Optional")), children, error ? /*#__PURE__*/React.createElement("div", {
    className: "c-field__error",
    role: "alert"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 14,
    stroke: 2,
    style: {
      marginTop: 2
    }
  }), error) : hint && /*#__PURE__*/React.createElement("div", {
    className: "c-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input. */
function Input({
  size = "m",
  icon,
  invalid = false,
  end,
  className = "",
  ...rest
}) {
  const el = /*#__PURE__*/React.createElement("input", _extends({
    className: ["c-input", size === "s" && "c-input--s", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon && !end) return el;
  return /*#__PURE__*/React.createElement("div", {
    className: "c-inputwrap"
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), el, end && /*#__PURE__*/React.createElement("div", {
    className: "c-inputwrap__end"
  }, end));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line input for application answers. Optional live character count. */
function Textarea({
  invalid = false,
  maxLength,
  showCount = false,
  className = "",
  onChange,
  defaultValue = "",
  value,
  ...rest
}) {
  const [n, setN] = React.useState((value ?? defaultValue).length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    className: "c-input " + className,
    "aria-invalid": invalid || undefined,
    maxLength: maxLength,
    defaultValue: value === undefined ? defaultValue : undefined,
    value: value,
    onChange: e => {
      setN(e.target.value.length);
      onChange && onChange(e);
    }
  }, rest)), showCount && maxLength && /*#__PURE__*/React.createElement("div", {
    className: "t-caption t-num",
    style: {
      textAlign: "right",
      marginTop: 6
    }
  }, n, " / ", maxLength));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/gallery/Gallery.jsx
try { (() => {
/** Cat photo gallery. "carousel" = main image + thumbnails (← → keys). "mosaic" = 1 large + 2 small header. */
function Gallery({
  photos = [],
  variant = "carousel",
  onOpenAll
}) {
  const [i, setI] = React.useState(0);
  const n = photos.length;
  const norm = photos.map(p => typeof p === "string" ? {
    src: p
  } : p);
  const go = d => setI(x => (x + d + n) % n);
  if (variant === "mosaic") return /*#__PURE__*/React.createElement("div", {
    className: "c-gallery c-gallery--mosaic"
  }, norm.slice(0, 3).map((p, k) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.alt || ""
  }), k === 2 && n > 3 && /*#__PURE__*/React.createElement("button", {
    className: "c-btn c-btn--inverse c-btn--s",
    style: {
      position: "absolute",
      right: 12,
      bottom: 12
    },
    onClick: onOpenAll
  }, "All ", n, " photos"))));
  const cur = norm[i] || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "c-gallery",
    onKeyDown: e => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-gallery__main"
  }, /*#__PURE__*/React.createElement("img", {
    key: i,
    src: cur.src,
    alt: cur.alt || ""
  }), cur.caption && /*#__PURE__*/React.createElement("div", {
    className: "c-gallery__cap"
  }, cur.caption), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: "Previous photo",
    variant: "photo",
    className: "c-gallery__nav",
    style: {
      left: 14
    },
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    label: "Next photo",
    variant: "photo",
    className: "c-gallery__nav",
    style: {
      right: 14
    },
    onClick: () => go(1)
  })), !cur.caption && /*#__PURE__*/React.createElement("span", {
    className: "c-gallery__count"
  }, String(i + 1).padStart(2, "0"), " / ", String(n).padStart(2, "0"))), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "c-gallery__thumbs"
  }, norm.map((p, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    "aria-label": "Photo " + (k + 1),
    "aria-current": k === i,
    onClick: () => setI(k)
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: ""
  })))));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gallery/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoFrame.jsx
try { (() => {
/** Photo in an organic container — arch, blob, pebble, leaf, circle — with optional overlapping circular inset. */
function PhotoFrame({
  src,
  alt = "",
  shape = "arch",
  ratio = "4/5",
  inset,
  insetAlt = "",
  insetAt = "br",
  insetSize,
  ring,
  children,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "c-frame c-frame--" + shape + (inset ? " c-frame--inset-" + insetAt : "") + " " + className,
    style: {
      margin: 0,
      "--frame-ring": ring,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-frame__img",
    style: {
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  })), inset && /*#__PURE__*/React.createElement("div", {
    className: "c-frame__inset",
    "data-at": insetAt,
    style: insetSize ? {
      width: insetSize
    } : undefined
  }, /*#__PURE__*/React.createElement("img", {
    src: inset,
    alt: insetAlt
  })), children && /*#__PURE__*/React.createElement("div", {
    className: "c-frame__tag"
  }, children));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/motif/Squiggle.jsx
try { (() => {
function rnd(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ t >>> 15, 1 | t);
    r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
    return ((r ^ r >>> 14) >>> 0) / 4294967296;
  };
}
/** Path data for a hand-drawn wave across a w×h box. jitter 0–1 varies amplitude & wavelength per hump. */
function squigglePath(w = 100, h = 14, cycles = 5, seed = 7, jitter = 0.35) {
  const r = rnd(seed),
    mid = h / 2,
    amp = h / 2 - 1;
  const n = Math.max(1, Math.round(cycles * 2));
  const ws = Array.from({
    length: n
  }, () => 1 + (r() - 0.5) * jitter);
  const tot = ws.reduce((a, b) => a + b, 0);
  let x = 0,
    d = "M0 " + (mid + (r() - 0.5) * jitter * 2).toFixed(2);
  ws.forEach((wi, i) => {
    const seg = wi / tot * w,
      a = amp * (1 - r() * jitter * 0.7),
      dir = i % 2 ? 1 : -1;
    const cx = x + seg / 2,
      nx = x + seg;
    d += " Q" + cx.toFixed(2) + " " + (mid + dir * a * 2).toFixed(2) + " " + nx.toFixed(2) + " " + (mid + (r() - 0.5) * jitter).toFixed(2);
    x = nx;
  });
  return d;
}
const TONE = {
  1: "var(--motif-1)",
  2: "var(--motif-2)",
  muted: "var(--paper-400)",
  ink: "var(--ink-900)",
  current: "currentColor"
};
/** Decorative hand-drawn squiggle line. aria-hidden; purely a motif. */
function Squiggle({
  width = 120,
  height = 14,
  cycles,
  tone = 1,
  strokeWidth = 2.5,
  seed = 7,
  jitter = 0.35,
  className = "",
  style
}) {
  const vw = typeof width === "number" ? width : 200;
  const c = cycles ?? Math.max(1, Math.round(vw / 26));
  return /*#__PURE__*/React.createElement("svg", {
    className: "c-squiggle " + className,
    width: width,
    height: height,
    viewBox: "0 0 " + vw + " " + height,
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: style
  }, /*#__PURE__*/React.createElement("path", {
    d: squigglePath(vw, height, c, seed, jitter),
    fill: "none",
    stroke: TONE[tone] || tone,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}
Object.assign(__ds_scope, { squigglePath, Squiggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motif/Squiggle.jsx", error: String((e && e.message) || e) }); }

// components/cat/TemperamentMeter.jsx
try { (() => {
/** Temperament between two honest poles, drawn as a squiggle with a marker — no bars. */
function TemperamentMeter({
  label,
  value = 3,
  low,
  high,
  valueLabel,
  tone = 1,
  seed
}) {
  const id = React.useId().replace(/:/g, "");
  const pct = (Math.min(5, Math.max(1, value)) - 1) / 4 * 100;
  const d = __ds_scope.squigglePath(200, 18, 7, seed ?? label.length * 7, 0.3);
  const col = tone === 2 ? "var(--motif-2)" : "var(--motif-1)";
  return /*#__PURE__*/React.createElement("div", {
    className: "c-meter",
    role: "meter",
    "aria-label": label,
    "aria-valuemin": 1,
    "aria-valuemax": 5,
    "aria-valuenow": value,
    "aria-valuetext": valueLabel
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-meter__label"
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    className: "c-meter__val"
  }, valueLabel), /*#__PURE__*/React.createElement("span", {
    className: "c-meter__track",
    style: {
      color: col
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 18",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "m" + id
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "-4",
    width: pct * 2,
    height: "26"
  }))), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "var(--paper-400)",
    strokeWidth: "2",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke",
    clipPath: "url(#m" + id + ")"
  })), /*#__PURE__*/React.createElement("span", {
    className: "c-meter__dot",
    style: {
      left: pct + "%"
    }
  })), (low || high) && /*#__PURE__*/React.createElement("span", {
    className: "c-meter__ends"
  }, /*#__PURE__*/React.createElement("span", null, low), /*#__PURE__*/React.createElement("span", null, high)));
}
Object.assign(__ds_scope, { TemperamentMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cat/TemperamentMeter.jsx", error: String((e && e.message) || e) }); }

// components/forms/StepProgress.jsx
try { (() => {
/** Application progress — completed and current steps are drawn as squiggles, upcoming as a dotted line. */
function StepProgress({
  steps = [],
  current = 0
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-overline t-muted",
    style: {
      marginBottom: 12
    }
  }, "Step ", current + 1, " of ", steps.length), /*#__PURE__*/React.createElement("ol", {
    className: "c-steps",
    "aria-label": "Application progress"
  }, steps.map((s, i) => {
    const st = i < current ? "done" : i === current ? "current" : "upcoming";
    return /*#__PURE__*/React.createElement("li", {
      key: s,
      "data-state": st,
      "aria-current": i === current ? "step" : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "c-steps__line"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 14",
      preserveAspectRatio: "none",
      "aria-hidden": "true"
    }, st === "upcoming" ? /*#__PURE__*/React.createElement("line", {
      x1: "1",
      y1: "7",
      x2: "99",
      y2: "7",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeDasharray: "1 6",
      strokeLinecap: "round",
      vectorEffect: "non-scaling-stroke"
    }) : /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.squigglePath(100, 14, 3, i * 13 + 5, 0.35),
      fill: "none",
      stroke: "currentColor",
      strokeWidth: st === "current" ? 3 : 2.5,
      strokeLinecap: "round",
      vectorEffect: "non-scaling-stroke"
    }))), /*#__PURE__*/React.createElement("span", {
      className: "c-steps__t"
    }, s));
  })));
}
Object.assign(__ds_scope, { StepProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/StepProgress.jsx", error: String((e && e.message) || e) }); }

// components/motif/SquiggleDivider.jsx
try { (() => {
/** Section divider: optional small-caps label + squiggle running to the edge. */
function SquiggleDivider({
  label,
  tone = 1,
  seed = 11
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-divider",
    role: "separator"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "c-divider__label"
  }, label), /*#__PURE__*/React.createElement(__ds_scope.Squiggle, {
    width: "100%",
    height: 12,
    cycles: 14,
    tone: tone,
    seed: seed,
    strokeWidth: 2,
    style: {
      flex: 1,
      minWidth: 40
    }
  }));
}
Object.assign(__ds_scope, { SquiggleDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motif/SquiggleDivider.jsx", error: String((e && e.message) || e) }); }

// components/motif/Stat.jsx
try { (() => {
/** Editorial stat: heavy number, squiggle underline, italic serif caption. */
function Stat({
  value,
  label,
  tone = 1,
  seed = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-stat__n"
  }, value), /*#__PURE__*/React.createElement(__ds_scope.Squiggle, {
    width: 84,
    height: 12,
    cycles: 3,
    tone: tone,
    seed: seed,
    strokeWidth: 3
  }), /*#__PURE__*/React.createElement("span", {
    className: "c-stat__l"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motif/Stat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const COLS = [{
  h: "Adopt",
  l: ["Browse cats", "Kittens", "Seniors", "Bonded pairs", "Saved searches"]
}, {
  h: "Shelters",
  l: ["Find a shelter", "Partner with CATÉ", "Shelter login", "Foster programmes"]
}, {
  h: "CATÉ",
  l: ["How adoption works", "Stories", "Journal", "Help centre", "Contact"]
}];
/** Dark closing footer: a single serif sentence, three link columns, legal line. */
function Footer({
  columns = COLS,
  statement = "Every cat here is waiting in a real shelter, looked after by people who know them by name."
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "c-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-footer__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-footer__lead",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
      paddingRight: 48
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 34,
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 24px/1.3 var(--font-display)",
      color: "var(--paper-100)",
      maxWidth: 420
    }
  }, statement)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-footer__h"
  }, c.h), /*#__PURE__*/React.createElement("ul", null, c.l.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, x))))))), /*#__PURE__*/React.createElement("div", {
    className: "c-footer__base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 CAT\xC9 Adoption Co."), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessibility"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, "Adoption fees go directly to partner shelters."))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const DEFAULT_LINKS = [{
  label: "Adopt",
  href: "#adopt"
}, {
  label: "Shelters",
  href: "#shelters"
}, {
  label: "How adoption works",
  href: "#how"
}, {
  label: "Stories",
  href: "#stories"
}];
/** Sticky top bar. Collapses to wordmark + saved + menu under 900px. */
function Navbar({
  links = DEFAULT_LINKS,
  current,
  savedCount = 0,
  signedIn = false,
  onNavigate,
  onSaved,
  onSearch,
  cta = "Start application",
  onCta
}) {
  const [open, setOpen] = React.useState(false);
  const go = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l.href);
    }
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "c-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container c-nav__in"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    href: "#",
    size: 25
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "c-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    "aria-current": current === l.href ? "page" : undefined,
    onClick: go(l)
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    className: "c-nav__end"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    className: "c-nav__hide-m",
    onClick: onSearch
  }), /*#__PURE__*/React.createElement("span", {
    className: "c-nav__saved"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: "Saved cats (" + savedCount + ")",
    onClick: onSaved
  }), savedCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "c-nav__count t-num",
    "aria-hidden": "true"
  }, savedCount)), signedIn ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "user",
    label: "Your account",
    className: "c-nav__hide-m"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "s",
    className: "c-nav__hide-m"
  }, "Sign in"), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "s",
    className: "c-nav__hide-m",
    onClick: onCta,
    style: {
      marginLeft: 8
    }
  }, cta), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Menu",
    className: "c-nav__menu",
    onClick: () => setOpen(true)
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "c-drawer",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-nav__in",
    style: {
      height: 60
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 25
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close menu",
    style: {
      marginLeft: "auto"
    },
    onClick: () => setOpen(false)
  })), /*#__PURE__*/React.createElement("ul", {
    className: "c-drawer__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: go(l)
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "grid",
      gap: 12
    }
  }, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    size: "l",
    onClick: onCta
  }, cta), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    variant: "secondary",
    size: "l"
  }, signedIn ? "Your account" : "Sign in"))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function range(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const s = new Set([1, total, page - 1, page, page + 1]);
  const arr = [...s].filter(n => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  arr.forEach((n, i) => {
    if (i && n - arr[i - 1] > 1) out.push("…" + n);
    out.push(n);
  });
  return out;
}
/** Numbered pagination with a plain-language summary on the left. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  summary
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "c-pages",
    "aria-label": "Pagination"
  }, summary && /*#__PURE__*/React.createElement("span", {
    className: "c-pages__sum"
  }, summary), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-left",
    label: "Previous page",
    size: "s",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1)
  }), range(page, total).map(n => typeof n === "string" ? /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "c-pages__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    className: "c-pages__n",
    "aria-current": n === page ? "page" : undefined,
    onClick: () => onChange && onChange(n)
  }, n)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    label: "Next page",
    size: "s",
    disabled: page >= total,
    onClick: () => onChange && onChange(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs. Controlled or uncontrolled. Arrow keys move between tabs. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  label
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? inner;
  const norm = tabs.map(t => typeof t === "string" ? {
    value: t,
    label: t
  } : t);
  const set = v => {
    setInner(v);
    onChange && onChange(v);
  };
  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : -1) + norm.length) % norm.length;
    set(norm[n].value);
    e.currentTarget.parentNode.children[n].focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "c-tabs",
    role: "tablist",
    "aria-label": label
  }, norm.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": t.value === cur,
    tabIndex: t.value === cur ? 0 : -1,
    disabled: t.disabled,
    onClick: () => set(t.value),
    onKeyDown: e => onKey(e, i)
  }, t.label, t.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "c-tabs__n t-num"
  }, t.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/search/SentenceSearch.jsx
try { (() => {
/** Hero search read as a sentence: who, where, what temperament. Each segment opens its own picker. */
function SentenceSearch({
  segments = [],
  onSearch,
  onSegment,
  openKey,
  buttonLabel = "Find cats"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-search",
    role: "search"
  }, segments.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    type: "button",
    className: "c-search__seg",
    "aria-expanded": openKey === s.key,
    onClick: () => onSegment && onSegment(s.key)
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-search__k"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "c-search__v" + (s.value ? "" : " c-search__v--empty")
  }, s.value || s.placeholder))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    className: "c-search__go",
    size: "l",
    icon: "search",
    onClick: onSearch
  }, buttonLabel));
}
Object.assign(__ds_scope, { SentenceSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/SentenceSearch.jsx", error: String((e && e.message) || e) }); }

// components/selection/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label and optional description. */
function Checkbox({
  label,
  description,
  indeterminate = false,
  invalid = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: "c-check " + className,
    "data-invalid": invalid || undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "c-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? "minus" : "check",
    size: 14,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "c-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with label; set card for a bordered choice tile. */
function Radio({
  label,
  description,
  card = false,
  className = "",
  ...rest
}) {
  const inner = /*#__PURE__*/React.createElement("label", {
    className: "c-check c-check--radio " + (card ? "" : className),
    style: card ? {
      width: "100%"
    } : undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "c-check__box"
  }), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "c-check__desc"
  }, description)));
  return card ? /*#__PURE__*/React.createElement("div", {
    className: "c-choice " + className
  }, inner) : inner;
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Radio.jsx", error: String((e && e.message) || e) }); }

// components/selection/Select.jsx
try { (() => {
/** Custom dropdown (listbox). Keyboard: ↑↓ to move, Enter to pick, Esc to close. */
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Choose…",
  size = "m",
  invalid = false,
  disabled = false,
  id,
  className = "",
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const ref = React.useRef(null);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const sel = norm.find(o => o.value === value);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const pick = o => {
    if (o.disabled) return;
    onChange && onChange(o.value);
    setOpen(false);
  };
  const onKey = e => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActive(a => {
        const d = e.key === "ArrowDown" ? 1 : -1;
        return (a + d + norm.length) % norm.length;
      });
    }
    if ((e.key === "Enter" || e.key === " ") && open && active > -1) {
      e.preventDefault();
      pick(norm[active]);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "c-select " + className,
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    className: "c-input c-select__trigger" + (size === "s" ? " c-input--s" : ""),
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-invalid": invalid || undefined,
    disabled: disabled,
    onClick: () => setOpen(!open),
    onKeyDown: onKey
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-select__val" + (sel ? "" : " c-select__val--ph")
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })), open && /*#__PURE__*/React.createElement("ul", {
    className: "c-menu",
    role: "listbox"
  }, norm.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === value,
    "aria-disabled": o.disabled || undefined,
    "data-active": i === active,
    className: "c-menu__item",
    onMouseEnter: () => setActive(i),
    onClick: () => pick(o)
  }, o.label, o.meta && /*#__PURE__*/React.createElement("span", {
    className: "c-menu__meta"
  }, o.meta), o.value === value && !o.meta && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    stroke: 2,
    className: "c-menu__check"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection/Select.jsx", error: String((e && e.message) || e) }); }

// components/shelter/ShelterCard.jsx
try { (() => {
/** Shelter summary: who they are, where, how many cats, when you can visit. */
function ShelterCard({
  shelter,
  href = "#",
  onOpen
}) {
  const {
    name,
    area,
    distance,
    verified = true,
    cats = [],
    catCount,
    hours,
    phone,
    responds
  } = shelter || {};
  return /*#__PURE__*/React.createElement("article", {
    className: "c-shelter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-shelter__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "c-shelter__name",
    href: href,
    onClick: e => {
      if (onOpen) {
        e.preventDefault();
        onOpen(shelter);
      }
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "c-shelter__where"
  }, area, distance && " · " + distance)), verified && /*#__PURE__*/React.createElement("span", {
    className: "c-verified"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 14,
    stroke: 2
  }), "Verified")), /*#__PURE__*/React.createElement("div", {
    className: "c-shelter__cats"
  }, cats.slice(0, 4).map((c, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: c,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", null, catCount, " cats in care")), /*#__PURE__*/React.createElement("div", {
    className: "c-shelter__facts"
  }, hours && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 15
  }), hours), responds && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 15
  }), responds), phone && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15
  }), phone)));
}
Object.assign(__ds_scope, { ShelterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shelter/ShelterCard.jsx", error: String((e && e.message) || e) }); }

// components/states/AdoptionJourney.jsx
try { (() => {
/** Vertical timeline of an application's progress. */
function AdoptionJourney({
  steps = []
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "c-journey"
  }, steps.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.title,
    "data-state": s.state || "upcoming"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-journey__dot"
  }, s.state === "done" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    stroke: 2.5
  }), s.state === "blocked" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    className: "c-journey__t"
  }, s.title), s.detail && /*#__PURE__*/React.createElement("span", {
    className: "c-journey__d"
  }, s.detail), s.when && /*#__PURE__*/React.createElement("span", {
    className: "c-journey__when"
  }, s.when))));
}
Object.assign(__ds_scope, { AdoptionJourney });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/AdoptionJourney.jsx", error: String((e && e.message) || e) }); }

// components/states/EmptyState.jsx
try { (() => {
/** Empty result or empty collection. Serif line + one sentence + a way forward. */
function EmptyState({
  title,
  children,
  actions,
  photo,
  align = "start"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "c-empty" + (align === "center" ? " c-empty--center" : "")
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: 120,
      height: 120,
      objectFit: "cover",
      borderRadius: "var(--radius-photo)",
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "c-empty__t"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "c-empty__d"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "c-empty__act"
  }, actions));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/states/Skeleton.jsx
try { (() => {
/** Warm shimmer placeholder. Compose into shapes, or use variant="cat" for a full cat card. */
function Skeleton({
  variant = "block",
  width = "100%",
  height = 16,
  style
}) {
  if (variant === "cat") return /*#__PURE__*/React.createElement("div", {
    className: "c-cat",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-skel",
    style: {
      aspectRatio: "4/5",
      borderRadius: "var(--radius-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-skel",
    style: {
      width: "46%",
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-skel",
    style: {
      width: "72%",
      height: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-skel",
    style: {
      width: "88%",
      height: 13
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "c-skel",
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius: variant === "circle" ? "50%" : undefined,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/states/Spinner.jsx
try { (() => {
/** Small inline ring spinner. */
function Spinner({
  size = 18,
  label = "Loading"
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label,
    className: "c-spin",
    style: {
      width: size,
      height: size
    }
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/states/Spinner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/apply.jsx
try { (() => {
// Guided adoption application
function ApplyScreen({
  go,
  catId,
  toast,
  submit
}) {
  const {
    StepProgress,
    Field,
    Input,
    Textarea,
    Radio,
    Checkbox,
    Select,
    Button,
    Notice,
    CatCard,
    TextLink,
    Icon
  } = window.CATDesignSystem_3eda1e;
  const D = window.CATE_DATA;
  const cat = D.cats.find(c => c.id === catId) || D.cats[0];
  const steps = ["About you", "Your home", "Other pets", "Your days", "Review"];
  const [i, setI] = React.useState(0);
  const [v, setV] = React.useState({
    name: "Ana Okafor",
    email: "",
    phone: "",
    home: "flat",
    own: "rent",
    hours: "most"
  });
  const [err, setErr] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => setV({
    ...v,
    [k]: e && e.target ? e.target.value : e
  });
  const next = () => {
    if (i === 0) {
      const e = {};
      if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Add an email so the shelter can reply.";
      setErr(e);
      if (Object.keys(e).length) return;
    }
    if (i < steps.length - 1) {
      setI(i + 1);
      window.scrollTo(0, 0);
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      submit(cat);
      toast({
        tone: "success",
        msg: "Application sent to " + cat.shelter + "."
      });
      go("saved");
    }, 900);
  };
  const H = ({
    t,
    d
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "t-h1"
  }, t), d && /*#__PURE__*/React.createElement("p", {
    className: "t-secondary",
    style: {
      marginTop: 12,
      maxWidth: 520
    }
  }, d));
  return /*#__PURE__*/React.createElement("main", {
    className: "container",
    style: {
      paddingTop: 32,
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    variant: "quiet",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("profile", cat.id);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), "Back to ", cat.name), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      marginTop: 32,
      rowGap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "apply-main",
    style: {
      gridColumn: "1 / span 7"
    }
  }, /*#__PURE__*/React.createElement(StepProgress, {
    steps: steps,
    current: i
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, i === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
    t: "First, a little about you.",
    d: "This goes only to the shelter. Nothing here is public."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name"
  }, /*#__PURE__*/React.createElement(Input, {
    value: v.name,
    onChange: set("name")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    error: err.email,
    hint: "Where the shelter will reply."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    invalid: !!err.email,
    value: v.email,
    onChange: set("email"),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: v.phone,
    onChange: set("phone"),
    placeholder: "For visit reminders"
  }))))), i === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
    t: "Tell us about your home.",
    d: "There's no wrong answer \u2014 shelters match cats to all kinds of homes."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("legend", {
    className: "t-label",
    style: {
      marginBottom: 12
    }
  }, "What kind of home?"), [["house", "House", "With or without a garden"], ["flat", "Flat or apartment", "Any floor"], ["other", "Something else", "Houseboat, shared house…"]].map(([k, l, d]) => /*#__PURE__*/React.createElement(Radio, {
    key: k,
    card: true,
    name: "home",
    label: l,
    description: d,
    checked: v.home === k,
    onChange: () => setV({
      ...v,
      home: k
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Do you own or rent?"
  }, /*#__PURE__*/React.createElement(Select, {
    value: v.own,
    onChange: set("own"),
    options: [{
      value: "own",
      label: "I own it"
    }, {
      value: "rent",
      label: "I rent"
    }, {
      value: "family",
      label: "I live with family"
    }]
  })), v.own === "rent" && /*#__PURE__*/React.createElement(Notice, {
    tone: "info"
  }, "We'll ask for your landlord's pet policy at the home check \u2014 no need to upload it now."))), i === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
    t: "Who else lives with you?",
    d: cat.name + " does best with calm children and no dogs. That's a guide, not a rule."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Children under 12",
    description: "Ages help the shelter plan a first visit."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Other cats",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Dogs"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Just me, or adults only"
  }))), i === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
    t: "What does a normal day look like?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("legend", {
    className: "t-label",
    style: {
      marginBottom: 12
    }
  }, "How often is someone home?"), [["most", "Most of the day", "Works from home, retired, or similar"], ["part", "Out 4–8 hours on weekdays"], ["long", "Out more than 8 hours most days"]].map(([k, l, d]) => /*#__PURE__*/React.createElement(Radio, {
    key: k,
    card: true,
    name: "hrs",
    label: l,
    description: d,
    checked: v.hours === k,
    onChange: () => setV({
      ...v,
      hours: k
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "In your own words",
    hint: "Two or three sentences is plenty."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    maxLength: 600,
    showCount: true,
    placeholder: "e.g. I'm up at seven, work at the kitchen table\u2026"
  })))), i === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H, {
    t: "Ready to send.",
    d: "Your application goes to " + cat.shelter + ". They usually reply within two days."
  }), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid",
      gridTemplateColumns: "160px 1fr",
      rowGap: 0
    }
  }, [["Name", v.name], ["Email", v.email], ["Home", v.home === "flat" ? "Flat or apartment" : v.home], ["Tenure", v.own], ["Home most days", v.hours === "most" ? "Yes" : "Partly"]].map(([k, x]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    className: "t-label t-secondary",
    style: {
      padding: "14px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      padding: "14px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I understand the shelter may call my references.",
    defaultChecked: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid var(--border)"
    }
  }, i > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: () => setI(i - 1)
  }, "Back") : /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "About 12 minutes \xB7 saves as you go"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    iconEnd: i < 4 ? "arrow-right" : undefined,
    loading: busy,
    onClick: next
  }, i < 4 ? "Continue" : busy ? "Sending" : "Send application"))), /*#__PURE__*/React.createElement("aside", {
    className: "apply-aside",
    style: {
      gridColumn: "9 / span 4"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-overline t-muted",
    style: {
      marginBottom: 16
    }
  }, "Applying for"), /*#__PURE__*/React.createElement(CatCard, {
    cat: {
      ...cat,
      status: "available"
    }
  })))));
}
window.ApplyScreen = ApplyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/browse.jsx
try { (() => {
// Browse — results with filters, loading and empty states
function BrowseScreen({
  go,
  saved,
  toggleSave
}) {
  const {
    CatCard,
    ColorBlock,
    FilterChip,
    Select,
    SegmentedControl,
    Tag,
    Button,
    Pagination,
    Skeleton,
    EmptyState
  } = window.CATDesignSystem_3eda1e;
  const D = window.CATE_DATA;
  const [f, setF] = React.useState({
    kids: false,
    cats: false,
    dogs: false,
    senior: false
  });
  const [age, setAge] = React.useState("Any");
  const [sort, setSort] = React.useState("long");
  const [view, setView] = React.useState("grid");
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const bump = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 450);
  };
  const tog = k => {
    setF({
      ...f,
      [k]: !f[k]
    });
    bump();
  };
  let list = D.cats.filter(c => (!f.kids || c.compat.kids === "yes") && (!f.cats || c.compat.cats === "yes") && (!f.dogs || c.compat.dogs === "yes") && (age === "Any" || c.age_band === age || age === "Kitten" && c.age.includes("mo")));
  if (sort === "long") list = [...list].sort((a, b) => b.waiting - a.waiting);
  const count = pred => D.cats.filter(pred).length;
  const applied = [f.kids && ["kids", "Good with kids"], f.cats && ["cats", "Lives with cats"], f.dogs && ["dogs", "Good with dogs"], age !== "Any" && ["age", age]].filter(Boolean);
  const open_ = c => go("profile", c.id);
  return /*#__PURE__*/React.createElement("main", {
    className: "container",
    style: {
      paddingTop: 48,
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 20,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-overline t-muted",
    style: {
      marginBottom: 12
    }
  }, "Within 10 miles of Portland, OR"), /*#__PURE__*/React.createElement("h1", {
    className: "t-h1"
  }, list.length === D.cats.length ? "212" : list.length, " cats looking for a home")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "s",
    value: sort,
    onChange: v => {
      setSort(v);
      bump();
    },
    style: {
      width: 200
    },
    options: [{
      value: "long",
      label: "Waiting longest"
    }, {
      value: "new",
      label: "Newest first"
    }, {
      value: "near",
      label: "Nearest"
    }]
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    label: "View",
    value: view,
    onChange: setView,
    options: [{
      value: "grid",
      label: "Grid"
    }, {
      value: "list",
      label: "List"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      paddingBottom: 20,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    icon: "sliders-horizontal"
  }, "All filters"), /*#__PURE__*/React.createElement(FilterChip, {
    caret: true
  }, "Within 10 mi"), /*#__PURE__*/React.createElement(FilterChip, {
    selected: f.kids,
    onClick: () => tog("kids"),
    count: count(c => c.compat.kids === "yes")
  }, "Good with kids"), /*#__PURE__*/React.createElement(FilterChip, {
    selected: f.cats,
    onClick: () => tog("cats"),
    count: count(c => c.compat.cats === "yes")
  }, "Lives with cats"), /*#__PURE__*/React.createElement(FilterChip, {
    selected: f.dogs,
    onClick: () => tog("dogs"),
    count: count(c => c.compat.dogs === "yes")
  }, "Good with dogs"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8
    }
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    label: "Age",
    value: age,
    onChange: v => {
      setAge(v);
      bump();
    },
    options: ["Any", "Kitten", "Young", "Adult", "Senior"]
  })), applied.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center",
      paddingTop: 16
    }
  }, applied.map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    onRemove: () => {
      k === "age" ? setAge("Any") : setF({
        ...f,
        [k]: false
      });
      bump();
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "s",
    onClick: () => {
      setF({});
      setAge("Any");
      bump();
    }
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    variant: "cat"
  }))) : list.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    title: "No cats match all of that \u2014 yet.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setF({});
        setAge("Any");
      }
    }, "Clear filters"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Get an email when one arrives"))
  }, "Cats who've never met a dog are often marked \"unknown\", not \"no\". Try removing \"Good with dogs\" \u2014 6 more cats appear.") : view === "grid" ? /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, list.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c.id
  }, i === 5 && /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "sage",
    className: "span-2",
    eyebrow: "Saved search",
    title: "Hear about new cats first",
    line: "We'll email when a cat matching these filters arrives. Usually within a week.",
    linkLabel: "Save this search",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(CatCard, {
    cat: c,
    saved: saved.has(c.id),
    onSave: toggleSave,
    onOpen: open_
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    variant: "row",
    cat: c,
    saved: saved.has(c.id),
    onSave: toggleSave,
    onOpen: open_
  })))), !loading && list.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      paddingTop: 24,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 9,
    onChange: setPage,
    summary: "Showing " + ((page - 1) * 24 + 1) + "–" + page * 24 + " of 212"
  })));
}
window.BrowseScreen = BrowseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/browse.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
// Sample content for the CATÉ web UI kit. Photos: assets/photos (Unsplash).
const P = n => "../../assets/photos/" + n + ".jpg";
window.CATE_DATA = {
  cats: [{
    id: "0142",
    name: "Juniper",
    age: "4 yrs",
    sex: "Female",
    location: "SE Portland",
    shelter: "Harbor Street Rescue",
    photo: P("tabby-sofa"),
    inset: P("blanket-tabby"),
    photos: [P("tabby-sofa"), {
      src: P("blanket-tabby"),
      caption: "Her spot, every afternoon."
    }, P("tabby-stairs"), P("chin-scratch")],
    line: "Wants a windowsill and a slow Sunday.",
    traits: ["lap cat", "chatty", "early riser", "food-motivated"],
    compat: {
      kids: "yes",
      cats: "maybe",
      dogs: "no"
    },
    status: "available",
    waiting: 38,
    energy: 2,
    affection: 4,
    fee: "$95",
    age_band: "Adult"
  }, {
    id: "0157",
    name: "Otto",
    age: "9 mo",
    sex: "Male",
    location: "Beaverton",
    shelter: "Westside Feline Aid",
    photo: P("paw-reach"),
    inset: P("kitten-walk"),
    photos: [P("paw-reach"), P("kitten-walk"), P("kitten-tabby")],
    line: "Will supervise every grocery delivery.",
    traits: ["curious", "playful", "brave"],
    compat: {
      kids: "yes",
      cats: "yes",
      dogs: "yes"
    },
    status: "new",
    waiting: 3,
    energy: 5,
    affection: 3,
    age_band: "Young"
  }, {
    id: "0133",
    name: "Pepper",
    age: "2 yrs",
    sex: "Female",
    location: "NE Portland",
    shelter: "Harbor Street Rescue",
    photo: P("peek"),
    line: "Takes a day to trust you, then follows you room to room.",
    traits: ["shy at first", "loyal", "quiet"],
    compat: {
      kids: "maybe",
      cats: "yes",
      dogs: "no"
    },
    status: "pending",
    waiting: 21,
    age_band: "Adult"
  }, {
    id: "0121",
    name: "Biscuit",
    age: "6 yrs",
    sex: "Male",
    location: "Milwaukie",
    shelter: "Willamette Cat House",
    photo: P("yawn"),
    line: "Thinks every sunbeam was put there for him.",
    traits: ["laid-back", "sunbather", "gentle"],
    compat: {
      kids: "yes",
      cats: "yes",
      dogs: "maybe"
    },
    status: "available",
    waiting: 64,
    age_band: "Adult"
  }, {
    id: "0109",
    name: "Mochi",
    age: "3 yrs",
    sex: "Female",
    location: "SE Portland",
    shelter: "Harbor Street Rescue",
    photo: P("colorpoint"),
    line: "Talks back. Has opinions about breakfast.",
    traits: ["vocal", "affectionate", "smart"],
    compat: {
      kids: "maybe",
      cats: "no",
      dogs: "no"
    },
    status: "available",
    waiting: 45,
    age_band: "Adult"
  }, {
    id: "0088",
    name: "Walter",
    age: "12 yrs",
    sex: "Male",
    location: "Gresham",
    shelter: "Eastside Senior Cats",
    photo: P("ginger-stretch"),
    line: "A retired gentleman seeking a warm radiator.",
    traits: ["senior", "calm", "lap cat"],
    compat: {
      kids: "yes",
      cats: "yes",
      dogs: "yes"
    },
    status: "urgent",
    waiting: 212,
    age_band: "Senior"
  }, {
    id: "0160",
    name: "Clementine",
    age: "1 yr",
    sex: "Female",
    location: "Lake Oswego",
    shelter: "Westside Feline Aid",
    photo: P("strut"),
    photos: [P("strut"), P("kitchen-cat")],
    line: "Counter surfer. Excellent company for cooks.",
    traits: ["confident", "playful", "social"],
    compat: {
      kids: "yes",
      cats: "yes",
      dogs: "unknown"
    },
    status: "new",
    waiting: 5,
    age_band: "Young"
  }, {
    id: "0114",
    name: "Ziggy",
    age: "1 yr",
    sex: "Male",
    location: "NE Portland",
    shelter: "Harbor Street Rescue",
    photo: P("meow-bandana"),
    inset: P("roll"),
    photos: [P("meow-bandana"), P("roll"), P("bicolor")],
    line: "Announces himself at every door.",
    traits: ["attention-seeking", "sweet", "clumsy"],
    compat: {
      kids: "yes",
      cats: "maybe",
      dogs: "yes"
    },
    status: "available",
    waiting: 30,
    age_band: "Adult"
  }, {
    id: "0149",
    name: "Snow",
    age: "7 yrs",
    sex: "Female",
    location: "Tigard",
    shelter: "Willamette Cat House",
    photo: P("white-cat"),
    line: "Deaf in one ear, unbothered by thunderstorms.",
    traits: ["special needs", "calm", "observant"],
    compat: {
      kids: "maybe",
      cats: "yes",
      dogs: "no"
    },
    status: "available",
    waiting: 88,
    age_band: "Adult"
  }],
  shelters: [{
    name: "Harbor Street Rescue",
    area: "Southeast Portland",
    distance: "2.4 mi",
    catCount: 31,
    cats: [P("tabby-sofa"), P("colorpoint"), P("bicolor"), P("grey-shorthair")],
    hours: "Open today 11–6",
    responds: "Replies in ~1 day"
  }, {
    name: "Westside Feline Aid",
    area: "Beaverton",
    distance: "6.8 mi",
    catCount: 18,
    cats: [P("kitten-tabby"), P("kitchen-cat")],
    hours: "Open today 12–5",
    responds: "Replies in ~2 days"
  }, {
    name: "Eastside Senior Cats",
    area: "Gresham",
    distance: "11 mi",
    catCount: 9,
    cats: [P("ginger-stretch"), P("white-cat"), P("ginger-sleep")],
    hours: "By appointment",
    responds: "Replies in ~1 day"
  }],
  photo: P
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

// ui_kits/web/home.jsx
try { (() => {
// Home — discovery landing, asymmetric editorial composition
function HomeScreen({
  go,
  saved,
  toggleSave
}) {
  const {
    CatCard,
    SentenceSearch,
    TextLink,
    ShelterCard,
    Button,
    PhotoFrame,
    ColorBlock,
    Stat,
    Squiggle,
    SquiggleDivider,
    Badge
  } = window.CATDesignSystem_3eda1e;
  const D = window.CATE_DATA;
  const [open, setOpen] = React.useState();
  const byId = id => D.cats.find(c => c.id === id);
  const open_ = c => go("profile", c.id);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingTop: "clamp(40px,6vw,80px)",
      paddingBottom: "clamp(56px,7vw,104px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid home-hero",
    style: {
      rowGap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 7",
      display: "grid",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Squiggle, {
    width: 44,
    height: 10,
    cycles: 2,
    tone: 1,
    strokeWidth: 2.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-overline t-muted"
  }, "212 cats in Portland shelters this week")), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-xl"
  }, "Find the one who ", /*#__PURE__*/React.createElement("em", null, "picks you.")), /*#__PURE__*/React.createElement("p", {
    className: "t-tagline-l",
    style: {
      maxWidth: 480
    }
  }, "Every profile is written by the people who feed them each morning."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SentenceSearch, {
    openKey: open,
    onSegment: k => setOpen(open === k ? undefined : k),
    onSearch: () => go("browse"),
    segments: [{
      key: "who",
      label: "Looking for",
      value: "A playful one",
      placeholder: "Any cat"
    }, {
      key: "near",
      label: "Near",
      value: "Portland, OR",
      placeholder: "City or ZIP"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "home-hero-fig",
    style: {
      gridColumn: "9 / span 4",
      paddingRight: "4%"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: D.photo("paw-reach"),
    alt: "A kitten reaching up with one paw",
    shape: "arch",
    ratio: "3/4",
    inset: D.photo("yawn"),
    insetAt: "bl",
    insetSize: "40%"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "new",
    solid: true
  }, "Otto \xB7 9 mo"))))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "block-row"
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "rust",
    size: "l",
    eyebrow: "Browse by mood",
    title: "Chaos agents",
    line: "Kittens and young cats who treat the sofa as a racetrack.",
    linkLabel: "Meet 38 young cats",
    onClick: () => go("browse"),
    photo: D.photo("roll"),
    photoShape: "blob-a"
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "charcoal",
    eyebrow: "Seniors",
    title: "Old souls",
    line: "Calm, house-trained, deeply grateful.",
    linkLabel: "See 14 seniors",
    onClick: () => go("browse")
  }), /*#__PURE__*/React.createElement("div", {
    className: "block-stack"
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "sage",
    eyebrow: "Bonded pairs",
    title: "Better together",
    linkLabel: "9 pairs",
    onClick: () => go("browse"),
    style: {
      minHeight: 0,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 4px 0",
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-body-s t-secondary"
  }, "Not sure yet? Save a few and we'll tell you if someone else applies."), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("saved");
    }
  }, "How saving works"))))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SquiggleDivider, {
    label: "Waiting longest",
    tone: 2
  })), /*#__PURE__*/React.createElement(CatCard, {
    variant: "feature",
    cat: byId("0142"),
    saved: saved.has("0142"),
    onSave: toggleSave,
    onOpen: open_
  })), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h1"
  }, "New this week"), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("browse");
    }
  }, "All 212 cats")), /*#__PURE__*/React.createElement("div", {
    className: "new-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "new-a"
  }, /*#__PURE__*/React.createElement(CatCard, {
    cat: byId("0114"),
    shape: "arch",
    saved: saved.has("0114"),
    onSave: toggleSave,
    onOpen: open_
  })), /*#__PURE__*/React.createElement("div", {
    className: "new-b"
  }, /*#__PURE__*/React.createElement(CatCard, {
    cat: byId("0160"),
    saved: saved.has("0160"),
    onSave: toggleSave,
    onOpen: open_
  })), /*#__PURE__*/React.createElement("div", {
    className: "new-c"
  }, /*#__PURE__*/React.createElement(CatCard, {
    cat: byId("0121"),
    saved: saved.has("0121"),
    onSave: toggleSave,
    onOpen: open_
  })), /*#__PURE__*/React.createElement("div", {
    className: "new-d"
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-tagline-l",
    style: {
      color: "var(--text-primary)"
    }
  }, "\"We had a list. Walter wasn't on it. He's asleep on my feet right now.\""), /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "\u2014 Dana, adopted Walter (12) in August")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface)",
      borderBlock: "1px solid var(--border-subtle)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container grid",
    style: {
      rowGap: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-lead",
    style: {
      gridColumn: "1 / span 7",
      display: "grid",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-display-m",
    style: {
      maxWidth: 640
    }
  }, "Start to sofa in about ", /*#__PURE__*/React.createElement("em", null, "two weeks.")), /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12 min",
    label: "one application, sent to the shelter"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2 days",
    label: "for the shelter to reply, usually",
    tone: 2,
    seed: 9
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$95",
    label: "average fee \u2014 all of it to the shelter",
    seed: 21
  }))), /*#__PURE__*/React.createElement("div", {
    className: "how-list",
    style: {
      gridColumn: "9 / span 4"
    }
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    tone: "charcoal",
    eyebrow: "How adoption works",
    title: "Save, apply, meet, go home.",
    line: "No central office. You talk to the people who know the cat.",
    linkLabel: "See every step",
    href: "#"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      padding: "var(--section-gap) var(--grid-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h1"
  }, "Shelters near you"), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true,
    href: "#"
  }, "All 14 partner shelters")), /*#__PURE__*/React.createElement("div", {
    className: "shelter-grid"
  }, D.shelters.map(s => /*#__PURE__*/React.createElement(ShelterCard, {
    key: s.name,
    shelter: s
  })))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/profile.jsx
try { (() => {
// Cat profile
function ProfileScreen({
  go,
  catId,
  saved,
  toggleSave,
  toast
}) {
  const {
    Gallery,
    Badge,
    Button,
    IconButton,
    TraitList,
    Compatibility,
    TemperamentMeter,
    Tabs,
    Modal,
    Field,
    Select,
    Textarea,
    TextLink,
    Icon,
    Notice,
    CatCard
  } = window.CATDesignSystem_3eda1e;
  const D = window.CATE_DATA;
  const cat = D.cats.find(c => c.id === catId) || D.cats[0];
  const [tab, setTab] = React.useState("about");
  const [visit, setVisit] = React.useState(false);
  const [slot, setSlot] = React.useState();
  const photos = cat.photos || [cat.photo, D.photo("chin-scratch"), D.photo("tabby-stairs")];
  const isSaved = saved.has(cat.id);
  const st = {
    available: ["available", "Available"],
    new: ["new", "New this week"],
    pending: ["pending", "Meet pending"],
    urgent: ["urgent", "Waiting " + cat.waiting + " days"]
  }[cat.status];
  return /*#__PURE__*/React.createElement("main", {
    className: "container",
    style: {
      paddingTop: 28,
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    variant: "quiet",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("browse");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), "All cats"), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      marginTop: 24,
      rowGap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "prof-gallery",
    style: {
      gridColumn: "1 / span 7"
    }
  }, /*#__PURE__*/React.createElement(Gallery, {
    photos: photos
  })), /*#__PURE__*/React.createElement("div", {
    className: "prof-side",
    style: {
      gridColumn: "9 / span 4",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, st && /*#__PURE__*/React.createElement(Badge, {
    tone: st[0]
  }, st[1]), /*#__PURE__*/React.createElement("span", {
    className: "t-caption t-num"
  }, "N\xBA ", cat.id)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "t-name-l"
  }, cat.name), /*#__PURE__*/React.createElement("p", {
    className: "t-quote",
    style: {
      fontSize: 24,
      lineHeight: 1.3,
      color: "var(--text-secondary)",
      marginTop: 10
    }
  }, cat.line)), /*#__PURE__*/React.createElement("div", {
    className: "c-cat__meta",
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, cat.age), /*#__PURE__*/React.createElement("span", null, cat.sex), /*#__PURE__*/React.createElement("span", null, cat.location)), /*#__PURE__*/React.createElement(TraitList, {
    traits: cat.traits
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    },
    onClick: () => go("apply", cat.id),
    disabled: cat.status === "pending"
  }, cat.status === "pending" ? "Application in review" : "Start application"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    variant: "outline",
    size: "l",
    label: isSaved ? "Unsave" : "Save",
    pressed: isSaved,
    onClick: () => toggleSave(cat)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "calendar",
    onClick: () => setVisit(true)
  }, "Book a visit first"), cat.status === "pending" && /*#__PURE__*/React.createElement(Notice, {
    tone: "warning"
  }, "Someone has a meet booked. You can still save ", cat.name, " \u2014 we'll tell you if she's available again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 14,
      alignItems: "center",
      paddingTop: 20,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.shelters[0].cats[1],
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, cat.shelter), /*#__PURE__*/React.createElement("div", {
    className: "t-caption"
  }, "Maya R. \xB7 replies in about a day"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      marginTop: "var(--section-gap)",
      rowGap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    label: "Profile sections",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "about",
      label: "About " + cat.name
    }, {
      value: "home",
      label: "Ideal home"
    }, {
      value: "health",
      label: "Health"
    }, {
      value: "fees",
      label: "Fees & process"
    }]
  })), tab === "about" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "prof-col-a",
    style: {
      gridColumn: "1 / span 6"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-body-l",
    style: {
      maxWidth: 580
    }
  }, cat.name, " came to ", cat.shelter, " after her person moved into care. She's gentle, a little shy for the first hour, then very much yours. Mornings are for the window; evenings are for a lap and whatever you're watching."), /*#__PURE__*/React.createElement("p", {
    className: "t-secondary",
    style: {
      maxWidth: 580,
      marginTop: 20
    }
  }, "She eats wet food twice a day and is tidy with her litter. She'll tell you when breakfast is late.")), /*#__PURE__*/React.createElement("div", {
    className: "prof-col-b",
    style: {
      gridColumn: "8 / span 5",
      display: "grid",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(TemperamentMeter, {
    label: "Energy",
    value: cat.energy || 3,
    low: "Napper",
    high: "Parkour",
    valueLabel: (cat.energy || 3) <= 2 ? "Mostly calm" : "Lively"
  }), /*#__PURE__*/React.createElement(TemperamentMeter, {
    label: "Affection",
    value: cat.affection || 3,
    low: "Independent",
    high: "Velcro",
    valueLabel: "Seeks you out"
  }), /*#__PURE__*/React.createElement(TemperamentMeter, {
    label: "Confidence with strangers",
    value: 2,
    low: "Hides",
    high: "Greets everyone",
    valueLabel: "Needs an hour"
  }))), tab === "home" && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 7"
    }
  }, /*#__PURE__*/React.createElement(Compatibility, {
    variant: "full",
    value: cat.compat,
    notes: {
      kids: "Calm school-age children are ideal.",
      cats: "Fine after a week of scent swapping.",
      dogs: "Hisses at dogs through the kennel door."
    }
  })), tab === "health" && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / span 7",
      display: "grid",
      gap: 14
    },
    className: "t-secondary"
  }, [["syringe", "Vaccinated (FVRCP, rabies) — Aug 2026"], ["scissors", "Spayed"], ["shield-check", "Microchipped, FeLV/FIV negative"], ["stethoscope", "Mild dental tartar; cleaning scheduled"]].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    style: {
      color: "var(--text-primary)"
    }
  }), t))), tab === "fees" && /*#__PURE__*/React.createElement("p", {
    className: "t-body-l",
    style: {
      gridColumn: "1 / span 7"
    }
  }, "Adoption fee ", cat.fee || "$95", ", paid to ", cat.shelter, " on adoption day. It covers her vaccines, spay and microchip.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      marginBottom: 32
    }
  }, "Also at ", cat.shelter), /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, D.cats.filter(c => c.id !== cat.id).slice(0, 4).map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    cat: c,
    saved: saved.has(c.id),
    onSave: toggleSave,
    onOpen: x => {
      go("profile", x.id);
      window.scrollTo(0, 0);
    }
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: visit,
    onClose: () => setVisit(false),
    eyebrow: cat.shelter,
    title: "Book a visit with " + cat.name,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setVisit(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      disabled: !slot,
      onClick: () => {
        setVisit(false);
        toast({
          tone: "success",
          msg: "Visit requested for " + slot + ". Maya will confirm by email."
        });
      }
    }, "Request visit"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-body-s"
  }, "Visits last about 40 minutes in the shelter's quiet room. Bring anyone who'll live with ", cat.name, "."), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred time"
  }, /*#__PURE__*/React.createElement(Select, {
    value: slot,
    onChange: setSlot,
    placeholder: "Choose a time",
    options: [{
      value: "Sat 26 Sep, 11:00",
      label: "Sat 26 Sep, 11:00"
    }, {
      value: "Sat 26 Sep, 14:30",
      label: "Sat 26 Sep, 14:30"
    }, {
      value: "Sun 27 Sep, 12:00",
      label: "Sun 27 Sep, 12:00",
      meta: "1 left"
    }, {
      value: "x",
      label: "Mon 28 Sep",
      disabled: true,
      meta: "Closed"
    }]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Anything the shelter should know?",
    optional: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "e.g. my partner can only come on weekends"
  })))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/saved.jsx
try { (() => {
// Saved cats + application status
function SavedScreen({
  go,
  saved,
  toggleSave,
  apps
}) {
  const {
    Tabs,
    CatCard,
    EmptyState,
    Button,
    AdoptionJourney,
    Badge,
    TextLink
  } = window.CATDesignSystem_3eda1e;
  const D = window.CATE_DATA;
  const [tab, setTab] = React.useState(apps.length ? "apps" : "saved");
  const list = D.cats.filter(c => saved.has(c.id));
  return /*#__PURE__*/React.createElement("main", {
    className: "container",
    style: {
      paddingTop: 48,
      paddingBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "t-h1",
    style: {
      marginBottom: 28
    }
  }, "Your adoption"), /*#__PURE__*/React.createElement(Tabs, {
    label: "Your adoption",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "saved",
      label: "Saved cats",
      count: list.length
    }, {
      value: "apps",
      label: "Applications",
      count: apps.length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, tab === "saved" && (list.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    title: "Nobody saved yet.",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go("browse")
    }, "Browse cats")
  }, "Tap the heart on any cat to keep them here. Shelters can see how many people saved a cat \u2014 it helps them plan.") : /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, list.map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    cat: c,
    saved: true,
    onSave: toggleSave,
    onOpen: x => go("profile", x.id)
  })))), tab === "apps" && (apps.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    title: "No applications yet.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go("browse")
    }, "Find a cat")
  }, "When you apply, you'll follow each step here \u2014 and so will the shelter.") : apps.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "grid",
    style: {
      rowGap: 32,
      paddingBottom: 48,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-cat",
    style: {
      gridColumn: "1 / span 4"
    }
  }, /*#__PURE__*/React.createElement(CatCard, {
    cat: {
      ...c,
      status: "pending"
    },
    onOpen: x => go("profile", x.id)
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-journey",
    style: {
      gridColumn: "6 / span 6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pending"
  }, "Shelter review"), /*#__PURE__*/React.createElement("span", {
    className: "t-caption"
  }, "Sent Wed 23 Sep")), /*#__PURE__*/React.createElement(AdoptionJourney, {
    steps: [{
      title: "Application sent",
      state: "done",
      when: "Wed 23 Sep, 10:14"
    }, {
      title: "Shelter review",
      state: "current",
      detail: "Maya at " + c.shelter + " usually replies within 2 days."
    }, {
      title: "Meet " + c.name,
      detail: "In the shelter's quiet room, about 40 minutes."
    }, {
      title: "Home check",
      detail: "A short video call about your space."
    }, {
      title: "Adoption day"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "Message the shelter"), /*#__PURE__*/React.createElement(TextLink, {
    variant: "quiet",
    href: "#"
  }, "Withdraw application"))))))));
}
window.SavedScreen = SavedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/saved.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ColorBlock = __ds_scope.ColorBlock;

__ds_ns.CatCard = __ds_scope.CatCard;

__ds_ns.Compatibility = __ds_scope.Compatibility;

__ds_ns.TemperamentMeter = __ds_scope.TemperamentMeter;

__ds_ns.TraitList = __ds_scope.TraitList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StepProgress = __ds_scope.StepProgress;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Squiggle = __ds_scope.Squiggle;

__ds_ns.SquiggleDivider = __ds_scope.SquiggleDivider;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.SentenceSearch = __ds_scope.SentenceSearch;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ShelterCard = __ds_scope.ShelterCard;

__ds_ns.AdoptionJourney = __ds_scope.AdoptionJourney;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

})();
