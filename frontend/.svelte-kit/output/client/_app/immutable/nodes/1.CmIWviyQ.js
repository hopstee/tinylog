import { a as append, f as from_html } from "../chunks/yiCpE6_S.js";
import "../chunks/By6-EsdD.js";
import { p as push, j as first_child, t as template_effect, k as pop, m as child, n as reset, s as sibling } from "../chunks/DilKp9Ls.js";
import { s as set_text } from "../chunks/TQ9JzVVz.js";
import { i as init } from "../chunks/B2oYUNLw.js";
import { s as stores, p as page$2 } from "../chunks/BLPQlgvh.js";
const page$1 = {
  get error() {
    return page$2.error;
  },
  get status() {
    return page$2.status;
  }
};
({
  check: stores.updated.check
});
const page = page$1;
var root = from_html(`<h1> </h1> <p> </p>`, 1);
function Error$1($$anchor, $$props) {
  push($$props, false);
  init();
  var fragment = root();
  var h1 = first_child(fragment);
  var text = child(h1, true);
  reset(h1);
  var p = sibling(h1, 2);
  var text_1 = child(p, true);
  reset(p);
  template_effect(() => {
    var _a;
    set_text(text, page.status);
    set_text(text_1, (_a = page.error) == null ? void 0 : _a.message);
  });
  append($$anchor, fragment);
  pop();
}
export {
  Error$1 as component
};
