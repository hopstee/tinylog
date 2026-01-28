import { a as append, f as from_html } from "../chunks/DwVU-2a4.js";
import "../chunks/C2BFkbgU.js";
import { k as child, l as reset } from "../chunks/Bj_O7eFZ.js";
import { s as slot } from "../chunks/pKLDCTUm.js";
const prerender = true;
const ssr = false;
const _layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
var root = from_html(`<div class="h-screen bg-background"><!></div>`);
function _layout($$anchor, $$props) {
  var div = root();
  var node = child(div);
  slot(node, $$props, "default", {});
  reset(div);
  append($$anchor, div);
}
export {
  _layout as component,
  _layout$1 as universal
};
