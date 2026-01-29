

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.w2Jdy79g.js","_app/immutable/chunks/yiCpE6_S.js","_app/immutable/chunks/DilKp9Ls.js","_app/immutable/chunks/By6-EsdD.js","_app/immutable/chunks/DogESqVt.js","_app/immutable/chunks/BQfkjXyb.js"];
export const stylesheets = ["_app/immutable/assets/0.CIyzpmD5.css"];
export const fonts = [];
