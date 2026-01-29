import { e as comment, a as append, f as from_html } from "../chunks/yiCpE6_S.js";
import "../chunks/By6-EsdD.js";
import { p as push, j as first_child, k as pop, Q as noop, m as child, n as reset } from "../chunks/DilKp9Ls.js";
import { T as TooltipProviderState, b as boxWith, s as snippet, a as slot } from "../chunks/DogESqVt.js";
import { p as prop } from "../chunks/BQfkjXyb.js";
const prerender = true;
const ssr = false;
const _layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
function Tooltip_provider($$anchor, $$props) {
  push($$props, true);
  let delayDuration = prop($$props, "delayDuration", 3, 700), disableCloseOnTriggerClick = prop($$props, "disableCloseOnTriggerClick", 3, false), disableHoverableContent = prop($$props, "disableHoverableContent", 3, false), disabled = prop($$props, "disabled", 3, false), ignoreNonKeyboardFocus = prop($$props, "ignoreNonKeyboardFocus", 3, false), skipDelayDuration = prop($$props, "skipDelayDuration", 3, 300);
  TooltipProviderState.create({
    delayDuration: boxWith(() => delayDuration()),
    disableCloseOnTriggerClick: boxWith(() => disableCloseOnTriggerClick()),
    disableHoverableContent: boxWith(() => disableHoverableContent()),
    disabled: boxWith(() => disabled()),
    ignoreNonKeyboardFocus: boxWith(() => ignoreNonKeyboardFocus()),
    skipDelayDuration: boxWith(() => skipDelayDuration())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop);
  append($$anchor, fragment);
  pop();
}
var root = from_html(`<div class="h-screen bg-background"><!></div>`);
function _layout($$anchor, $$props) {
  var div = root();
  var node = child(div);
  Tooltip_provider(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      slot(node_1, $$props, "default", {});
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
export {
  _layout as component,
  _layout$1 as universal
};
