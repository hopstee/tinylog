

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.KiSza1MV.js","_app/immutable/chunks/Cxy8EUpd.js","_app/immutable/chunks/BaP1QAji.js","_app/immutable/chunks/CAnNuId1.js","_app/immutable/chunks/k7hI1nOc.js"];
export const stylesheets = ["_app/immutable/assets/0.DHEWkt8f.css"];
export const fonts = [];
