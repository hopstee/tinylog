

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BpQi6b18.js","_app/immutable/chunks/DqM7DDVa.js","_app/immutable/chunks/C2oY_9uC.js","_app/immutable/chunks/1IUwvip8.js","_app/immutable/chunks/ZYQ7zqPb.js"];
export const stylesheets = ["_app/immutable/assets/0.Bk3Nv6qv.css"];
export const fonts = [];
