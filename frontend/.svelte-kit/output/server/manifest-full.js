export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Inter-Medium.ttf","favicon.png","style.css","svelte.svg","wails.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BwLZMKGc.js",app:"_app/immutable/entry/app.DYPNuhLD.js",imports:["_app/immutable/entry/start.BwLZMKGc.js","_app/immutable/chunks/9ZE4MUB0.js","_app/immutable/chunks/C2oY_9uC.js","_app/immutable/chunks/TFWdNYCK.js","_app/immutable/entry/app.DYPNuhLD.js","_app/immutable/chunks/C2oY_9uC.js","_app/immutable/chunks/DzYaaIdB.js","_app/immutable/chunks/DqM7DDVa.js","_app/immutable/chunks/TFWdNYCK.js","_app/immutable/chunks/hAGMeUWP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
