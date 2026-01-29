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
		client: {start:"_app/immutable/entry/start.CF2WXKBz.js",app:"_app/immutable/entry/app.BHQA_nGn.js",imports:["_app/immutable/entry/start.CF2WXKBz.js","_app/immutable/chunks/BLPQlgvh.js","_app/immutable/chunks/DilKp9Ls.js","_app/immutable/chunks/D39b7Q4Q.js","_app/immutable/entry/app.BHQA_nGn.js","_app/immutable/chunks/DilKp9Ls.js","_app/immutable/chunks/TQ9JzVVz.js","_app/immutable/chunks/yiCpE6_S.js","_app/immutable/chunks/D39b7Q4Q.js","_app/immutable/chunks/BBjsIr89.js","_app/immutable/chunks/BQfkjXyb.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
