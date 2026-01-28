

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DIJ587iy.js","_app/immutable/chunks/DwVU-2a4.js","_app/immutable/chunks/Bj_O7eFZ.js","_app/immutable/chunks/C2BFkbgU.js","_app/immutable/chunks/pKLDCTUm.js"];
export const stylesheets = ["_app/immutable/assets/0.CQtufaXu.css"];
export const fonts = [];
