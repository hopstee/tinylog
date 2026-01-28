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
		client: {start:"_app/immutable/entry/start.D2rIkhHw.js",app:"_app/immutable/entry/app.DCTNvJ8d.js",imports:["_app/immutable/entry/start.D2rIkhHw.js","_app/immutable/chunks/DuF9QeUL.js","_app/immutable/chunks/Bj_O7eFZ.js","_app/immutable/chunks/CmJXhuVg.js","_app/immutable/entry/app.DCTNvJ8d.js","_app/immutable/chunks/Bj_O7eFZ.js","_app/immutable/chunks/DoWNWf0K.js","_app/immutable/chunks/DwVU-2a4.js","_app/immutable/chunks/CmJXhuVg.js","_app/immutable/chunks/D4as1NfB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
