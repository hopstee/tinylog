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
		client: {start:"_app/immutable/entry/start.dmHSUc2u.js",app:"_app/immutable/entry/app.Bl5u8GS7.js",imports:["_app/immutable/entry/start.dmHSUc2u.js","_app/immutable/chunks/DGZuiAph.js","_app/immutable/chunks/BaP1QAji.js","_app/immutable/chunks/BYda1gcW.js","_app/immutable/chunks/BB252WvV.js","_app/immutable/entry/app.Bl5u8GS7.js","_app/immutable/chunks/BaP1QAji.js","_app/immutable/chunks/CGBEa8mP.js","_app/immutable/chunks/Cxy8EUpd.js","_app/immutable/chunks/BB252WvV.js","_app/immutable/chunks/BA7gcSst.js","_app/immutable/chunks/BYda1gcW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
