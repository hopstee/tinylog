var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _sources, _version, _size, _update_version, _SvelteSet_instances, source_fn, init_fn, _document, _subscribe, _props, _internal_set, _isControlled, _isMultiple, _props2, _multiple, _expandOnClick, _typeaheadTimeout, _typeahead, _selected, _expanded, _id, _props3, _tree, _selectedState, _item, _elId, _id2, _parent, _selected2, _expanded2, _canExpand, _idx;
import { b as assign_nodes, a as append, f as from_html, c as comment, d as from_svg } from "../chunks/Cxy8EUpd.js";
import "../chunks/CAnNuId1.js";
import { aO as is_array, aP as get_prototype_of, aQ as object_prototype, af as queue_micro_task, aR as ATTACHMENT_KEY, A as create_text, F as block, h as hydrating, K as set_hydrate_node, a6 as get_first_child, a as hydrate_next, g as get, H as read_hydration_instruction, I as HYDRATION_START_ELSE, J as skip_nodes, L as set_hydrating, C as hydrate_node, ag as COMMENT_NODE, aH as HYDRATION_END, ar as internal_set, w as current_batch, aS as EFFECT_OFFSCREEN, B as branch, E as should_defer_append, aT as EACH_IS_CONTROLLED, _ as derived_safe_equal, aF as array_from, aU as EACH_ITEM_REACTIVE, aV as EACH_ITEM_IMMUTABLE, N as mutable_source, a2 as source, aW as EACH_INDEX_REACTIVE, x as resume_effect, z as pause_effect, aX as INERT, aY as EACH_IS_ANIMATED, aE as clear_text_content, y as destroy_effect, aB as get_next_sibling, aZ as ELEMENT_NODE, G as EFFECT_TRANSPARENT, a_ as NAMESPACE_SVG, V as active_effect, M as teardown, a$ as managed, aJ as effect, b0 as select_multiple_invalid_value, b1 as is, b2 as flatten, b3 as UNINITIALIZED, b4 as NAMESPACE_HTML, b5 as LOADING_ATTR_SYMBOL, b6 as get_descriptors, p as push, t as template_effect, q as pop, k as child, m as reset, f as deep_read_state, d as untrack, o as first_child, v as sibling, aN as user_derived, b7 as to_array, aM as state, b8 as update_version, O as set, ae as increment, u as user_pre_effect, b as user_effect, n as noop, b9 as fallback } from "../chunks/BaP1QAji.js";
import { i as is_raw_text_element, a as is_capture_event, c as create_event, d as delegate, n as normalize_attribute, b as can_delegate_event, s as set_text, e as createSubscriber, o as on, f as event } from "../chunks/CGBEa8mP.js";
import { i as init } from "../chunks/BZQtCLdr.js";
import { B as BranchManager, s as setup_stores, a as store_get, l as legacy_rest_props, p as prop, b as spread_props, i as if_block } from "../chunks/BA7gcSst.js";
import { w as writable } from "../chunks/BYda1gcW.js";
import { s as slot } from "../chunks/k7hI1nOc.js";
const empty = [];
function snapshot(value, skip_warning = false, no_tojson = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty, null, no_tojson);
}
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element2 = value[i];
        if (i in value) {
          copy[i] = clone(element2, cloned, path, paths, null, no_tojson);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key in value) {
        copy[key] = clone(
          // @ts-expect-error
          value[key],
          cloned,
          path,
          paths,
          null,
          no_tojson
        );
      }
      return copy;
    }
    if (value instanceof Date) {
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function" && !no_tojson) {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
function autofocus(dom, value) {
  if (value) {
    const body = document.body;
    dom.autofocus = true;
    queue_micro_task(() => {
      if (document.activeElement === body) {
        dom.focus();
      }
    });
  }
}
let listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          var _a;
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              (_a = e.__on_r) == null ? void 0 : _a.call(e);
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: true }
    );
  }
}
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function index(_, i) {
  return i;
}
function pause_effects(state2, to_destroy, controlled_anchor) {
  var transitions = [];
  var length = to_destroy.length;
  var group;
  var remaining = to_destroy.length;
  for (var i = 0; i < length; i++) {
    let effect2 = to_destroy[i];
    pause_effect(
      effect2,
      () => {
        if (group) {
          group.pending.delete(effect2);
          group.done.add(effect2);
          if (group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state2.outrogroups
            );
            destroy_effects(array_from(group.done));
            groups.delete(group);
            if (groups.size === 0) {
              state2.outrogroups = null;
            }
          }
        } else {
          remaining -= 1;
        }
      },
      false
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state2.items.clear();
    }
    destroy_effects(to_destroy, !fast_path);
  } else {
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    };
    (state2.outrogroups ?? (state2.outrogroups = /* @__PURE__ */ new Set())).add(group);
  }
}
function destroy_effects(to_destroy, remove_dom = true) {
  for (var i = 0; i < to_destroy.length; i++) {
    destroy_effect(to_destroy[i], remove_dom);
  }
}
var offscreen_anchor;
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var first_run = true;
  function commit() {
    state2.fallback = fallback2;
    reconcile(state2, array, anchor, flags, get_key);
    if (fallback2 !== null) {
      if (array.length === 0) {
        if ((fallback2.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback2);
        } else {
          fallback2.f ^= EFFECT_OFFSCREEN;
          move(fallback2, null, anchor);
        }
      } else {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  var effect2 = block(() => {
    array = /** @type {V[]} */
    get(each_array);
    var length = array.length;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = skip_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var keys2 = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    for (var index2 = 0; index2 < length; index2 += 1) {
      if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
      hydrate_node.data === HYDRATION_END) {
        anchor = /** @type {Comment} */
        hydrate_node;
        mismatch = true;
        set_hydrating(false);
      }
      var value = array[index2];
      var key = get_key(value, index2);
      var item = first_run ? null : items.get(key);
      if (item) {
        if (item.v) internal_set(item.v, value);
        if (item.i) internal_set(item.i, index2);
        if (defer) {
          batch.skipped_effects.delete(item.e);
        }
      } else {
        item = create_item(
          items,
          first_run ? anchor : offscreen_anchor ?? (offscreen_anchor = create_text()),
          value,
          key,
          index2,
          render_fn,
          flags,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key, item);
      }
      keys2.add(key);
    }
    if (length === 0 && fallback_fn && !fallback2) {
      if (first_run) {
        fallback2 = branch(() => fallback_fn(anchor));
      } else {
        fallback2 = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text())));
        fallback2.f |= EFFECT_OFFSCREEN;
      }
    }
    if (hydrating && length > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      if (defer) {
        for (const [key2, item2] of items) {
          if (!keys2.has(key2)) {
            batch.skipped_effects.add(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(() => {
        });
      } else {
        commit();
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  var state2 = { effect: effect2, items, outrogroups: null, fallback: fallback2 };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(state2, array, anchor, flags, get_key) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var length = array.length;
  var items = state2.items;
  var current = state2.effect.first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        (_b = (_a = effect2.nodes) == null ? void 0 : _a.a) == null ? void 0 : _b.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(effect2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key).e;
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        group.pending.delete(effect2);
        group.done.delete(effect2);
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
      effect2.f ^= EFFECT_OFFSCREEN;
      if (effect2 === current) {
        move(effect2, null, anchor);
      } else {
        var next = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next);
        move(effect2, next, anchor);
        prev = effect2;
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
    }
    if ((effect2.f & INERT) !== 0) {
      resume_effect(effect2);
      if (is_animated) {
        (_d = (_c = effect2.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(effect2);
      }
    }
    if (effect2 !== current) {
      if (seen !== void 0 && seen.has(effect2)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(effect2);
          move(effect2, current, anchor);
          link(state2, effect2.prev, effect2.next);
          link(state2, effect2, prev === null ? state2.effect.first : prev.next);
          link(state2, prev, effect2);
          prev = effect2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current !== effect2) {
        (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
      matched.push(effect2);
    }
    prev = effect2;
    current = effect2.next;
  }
  if (state2.outrogroups !== null) {
    for (const group of state2.outrogroups) {
      if (group.pending.size === 0) {
        destroy_effects(array_from(group.done));
        (_e = state2.outrogroups) == null ? void 0 : _e.delete(group);
      }
    }
    if (state2.outrogroups.size === 0) {
      state2.outrogroups = null;
    }
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = [];
    if (seen !== void 0) {
      for (effect2 of seen) {
        if ((effect2.f & INERT) === 0) {
          to_destroy.push(effect2);
        }
      }
    }
    while (current !== null) {
      if ((current.f & INERT) === 0 && current !== state2.fallback) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          (_g = (_f = to_destroy[i].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          (_i = (_h = to_destroy[i].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      var _a2, _b2;
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        (_b2 = (_a2 = effect2.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b2.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key, index2, render_fn, flags, get_collection) {
  var v = (flags & EACH_ITEM_REACTIVE) !== 0 ? (flags & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
  var i = (flags & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key);
      };
    })
  };
}
function move(effect2, next, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next && (next.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next.nodes.start
  ) : anchor;
  while (node !== null) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    if (node === end) {
      return;
    }
    node = next_node;
  }
}
function link(state2, prev, next) {
  if (prev === null) {
    state2.effect.first = next;
  } else {
    prev.next = next;
  }
  if (next === null) {
    state2.effect.last = prev;
  } else {
    next.prev = prev;
  }
}
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  let was_hydrating = hydrating;
  if (hydrating) {
    hydrate_next();
  }
  var element2 = null;
  if (hydrating && hydrate_node.nodeType === ELEMENT_NODE) {
    element2 = /** @type {Element} */
    hydrate_node;
    hydrate_next();
  }
  var anchor = (
    /** @type {TemplateNode} */
    hydrating ? hydrate_node : node
  );
  var branches = new BranchManager(anchor, false);
  block(() => {
    const next_tag = get_tag() || null;
    var ns = NAMESPACE_SVG;
    if (next_tag === null) {
      branches.ensure(null, null);
      return;
    }
    branches.ensure(next_tag, (anchor2) => {
      if (next_tag) {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : document.createElementNS(ns, next_tag);
        assign_nodes(element2, element2);
        if (render_fn) {
          if (hydrating && is_raw_text_element(next_tag)) {
            element2.append(document.createComment(""));
          }
          var child_anchor = hydrating ? get_first_child(element2) : element2.appendChild(create_text());
          if (hydrating) {
            if (child_anchor === null) {
              set_hydrating(false);
            } else {
              set_hydrate_node(child_anchor);
            }
          }
          render_fn(element2, child_anchor);
        }
        active_effect.nodes.end = element2;
        anchor2.before(element2);
      }
      if (hydrating) {
        set_hydrate_node(anchor2);
      }
    });
    return () => {
    };
  }, EFFECT_TRANSPARENT);
  teardown(() => {
  });
  if (was_hydrating) {
    set_hydrating(true);
    set_hydrate_node(anchor);
  }
}
function attach(node, get_fn) {
  var fn = void 0;
  var e;
  managed(() => {
    if (fn !== (fn = get_fn())) {
      if (e) {
        destroy_effect(e);
        e = null;
      }
      if (fn) {
        e = branch(() => {
          effect(() => (
            /** @type {(node: Element) => void} */
            fn(node)
          ));
        });
      }
    }
  });
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx$1() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key in styles) {
    var value = styles[key];
    if (value != null && value !== "") {
      css += " " + key + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c = value[i];
        if (in_comment) {
          if (c === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c) {
            in_str = false;
          }
        } else if (c === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c === '"' || c === "'") {
          in_str = c;
        } else if (c === "(") {
          in_apo++;
        } else if (c === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c === ":" && name_index === -1) {
            name_index = i;
          } else if (c === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
  var prev = dom.__className;
  if (hydrating || prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom.__className = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key in next_classes) {
      var is_present = !!next_classes[key];
      if (prev_classes == null || is_present !== !!prev_classes[key]) {
        dom.classList.toggle(key, is_present);
      }
    }
  }
  return next_classes;
}
function update_styles(dom, prev = {}, next, priority) {
  for (var key in next) {
    var value = next[key];
    if (prev[key] !== value) {
      if (next[key] == null) {
        dom.style.removeProperty(key);
      } else {
        dom.style.setProperty(key, value, priority);
      }
    }
  }
}
function set_style(dom, value, prev_styles, next_styles) {
  var prev = dom.__style;
  if (hydrating || prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom.__style = value;
  } else if (next_styles) {
    if (Array.isArray(next_styles)) {
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]);
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important");
    } else {
      update_styles(dom, prev_styles, next_styles);
    }
  }
  return next_styles;
}
function select_option(select, value, mounting = false) {
  if (select.multiple) {
    if (value == void 0) {
      return;
    }
    if (!is_array(value)) {
      return select_multiple_invalid_value();
    }
    for (var option of select.options) {
      option.selected = value.includes(get_option_value(option));
    }
    return;
  }
  for (option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select) {
  var observer = new MutationObserver(() => {
    select_option(select, select.__value);
  });
  observer.observe(select, {
    // Listen to option element changes
    childList: true,
    subtree: true,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: true,
    attributeFilter: ["value"]
  });
  teardown(() => {
    observer.disconnect();
  });
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}
const CLASS = Symbol("class");
const STYLE = Symbol("style");
const IS_CUSTOM_ELEMENT = Symbol("is custom element");
const IS_HTML = Symbol("is html");
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute(input, "checked", null);
      input.checked = checked;
    }
  };
  input.__on_r = remove_defaults;
  queue_micro_task(remove_defaults);
  add_form_reset_listener();
}
function set_selected(element2, selected) {
  if (selected) {
    if (!element2.hasAttribute("selected")) {
      element2.setAttribute("selected", "");
    }
  } else {
    element2.removeAttribute("selected");
  }
}
function set_attribute(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function set_attributes(element2, prev, next, css_hash, should_remove_defaults = false, skip_warning = false) {
  if (hydrating && should_remove_defaults && element2.tagName === "INPUT") {
    var input = (
      /** @type {HTMLInputElement} */
      element2
    );
    var attribute = input.type === "checkbox" ? "defaultChecked" : "defaultValue";
    if (!(attribute in next)) {
      remove_input_defaults(input);
    }
  }
  var attributes = get_attributes(element2);
  var is_custom_element = attributes[IS_CUSTOM_ELEMENT];
  var preserve_attribute_case = !attributes[IS_HTML];
  let is_hydrating_custom_element = hydrating && is_custom_element;
  if (is_hydrating_custom_element) {
    set_hydrating(false);
  }
  var current = prev || {};
  var is_option_element = element2.tagName === "OPTION";
  for (var key in prev) {
    if (!(key in next)) {
      next[key] = null;
    }
  }
  if (next.class) {
    next.class = clsx(next.class);
  } else if (next[CLASS]) {
    next.class = null;
  }
  if (next[STYLE]) {
    next.style ?? (next.style = null);
  }
  var setters = get_setters(element2);
  for (const key2 in next) {
    let value = next[key2];
    if (is_option_element && key2 === "value" && value == null) {
      element2.value = element2.__value = "";
      current[key2] = value;
      continue;
    }
    if (key2 === "class") {
      var is_html = element2.namespaceURI === "http://www.w3.org/1999/xhtml";
      set_class(element2, is_html, value, css_hash, prev == null ? void 0 : prev[CLASS], next[CLASS]);
      current[key2] = value;
      current[CLASS] = next[CLASS];
      continue;
    }
    if (key2 === "style") {
      set_style(element2, value, prev == null ? void 0 : prev[STYLE], next[STYLE]);
      current[key2] = value;
      current[STYLE] = next[STYLE];
      continue;
    }
    var prev_value = current[key2];
    if (value === prev_value && !(value === void 0 && element2.hasAttribute(key2))) {
      continue;
    }
    current[key2] = value;
    var prefix = key2[0] + key2[1];
    if (prefix === "$$") continue;
    if (prefix === "on") {
      const opts = {};
      const event_handle_key = "$$" + key2;
      let event_name = key2.slice(2);
      var delegated = can_delegate_event(event_name);
      if (is_capture_event(event_name)) {
        event_name = event_name.slice(0, -7);
        opts.capture = true;
      }
      if (!delegated && prev_value) {
        if (value != null) continue;
        element2.removeEventListener(event_name, current[event_handle_key], opts);
        current[event_handle_key] = null;
      }
      if (value != null) {
        if (!delegated) {
          let handle = function(evt) {
            current[key2].call(this, evt);
          };
          current[event_handle_key] = create_event(event_name, element2, handle, opts);
        } else {
          element2[`__${event_name}`] = value;
          delegate([event_name]);
        }
      } else if (delegated) {
        element2[`__${event_name}`] = void 0;
      }
    } else if (key2 === "style") {
      set_attribute(element2, key2, value);
    } else if (key2 === "autofocus") {
      autofocus(
        /** @type {HTMLElement} */
        element2,
        Boolean(value)
      );
    } else if (!is_custom_element && (key2 === "__value" || key2 === "value" && value != null)) {
      element2.value = element2.__value = value;
    } else if (key2 === "selected" && is_option_element) {
      set_selected(
        /** @type {HTMLOptionElement} */
        element2,
        value
      );
    } else {
      var name = key2;
      if (!preserve_attribute_case) {
        name = normalize_attribute(name);
      }
      var is_default = name === "defaultValue" || name === "defaultChecked";
      if (value == null && !is_custom_element && !is_default) {
        attributes[key2] = null;
        if (name === "value" || name === "checked") {
          let input2 = (
            /** @type {HTMLInputElement} */
            element2
          );
          const use_default = prev === void 0;
          if (name === "value") {
            let previous = input2.defaultValue;
            input2.removeAttribute(name);
            input2.defaultValue = previous;
            input2.value = input2.__value = use_default ? previous : null;
          } else {
            let previous = input2.defaultChecked;
            input2.removeAttribute(name);
            input2.defaultChecked = previous;
            input2.checked = use_default ? previous : false;
          }
        } else {
          element2.removeAttribute(key2);
        }
      } else if (is_default || setters.includes(name) && (is_custom_element || typeof value !== "string")) {
        element2[name] = value;
        if (name in attributes) attributes[name] = UNINITIALIZED;
      } else if (typeof value !== "function") {
        set_attribute(element2, name, value);
      }
    }
  }
  if (is_hydrating_custom_element) {
    set_hydrating(true);
  }
  return current;
}
function attribute_effect(element2, fn, sync = [], async = [], blockers = [], css_hash, should_remove_defaults = false, skip_warning = false) {
  flatten(blockers, sync, async, (values) => {
    var prev = void 0;
    var effects = {};
    var is_select = element2.nodeName === "SELECT";
    var inited2 = false;
    managed(() => {
      var next = fn(...values.map(get));
      var current = set_attributes(
        element2,
        prev,
        next,
        css_hash,
        should_remove_defaults,
        skip_warning
      );
      if (inited2 && is_select && "value" in next) {
        select_option(
          /** @type {HTMLSelectElement} */
          element2,
          next.value
        );
      }
      for (let symbol of Object.getOwnPropertySymbols(effects)) {
        if (!next[symbol]) destroy_effect(effects[symbol]);
      }
      for (let symbol of Object.getOwnPropertySymbols(next)) {
        var n = next[symbol];
        if (symbol.description === ATTACHMENT_KEY && (!prev || n !== prev[symbol])) {
          if (effects[symbol]) destroy_effect(effects[symbol]);
          effects[symbol] = branch(() => attach(element2, () => n));
        }
        current[symbol] = n;
      }
      prev = current;
    });
    if (is_select) {
      var select = (
        /** @type {HTMLSelectElement} */
        element2
      );
      effect(() => {
        select_option(
          select,
          /** @type {Record<string | symbol, any>} */
          prev.value,
          true
        );
        init_select(select);
      });
    }
    inited2 = true;
  });
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element2.__attributes ?? (element2.__attributes = {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    })
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var cache_key = element2.getAttribute("is") || element2.nodeName;
  var setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
const logs = writable([]);
const selectedLog = writable(null);
const levelFilter = writable(
  /* @__PURE__ */ new Set(["info", "warn", "error"])
);
var root$7 = from_html(`<div class="h-48 border-t border-border bg-card p-3 text-sm overflow-auto"><pre class="whitespace-pre-wrap text-xs"> </pre></div>`);
function LogDetails($$anchor, $$props) {
  push($$props, false);
  const $selectedLog = () => store_get(selectedLog, "$selectedLog", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  var div = root$7();
  var pre = child(div);
  var text = child(pre);
  reset(pre);
  reset(div);
  template_effect(
    ($0) => set_text(text, `
        ${$0 ?? ""}
  `),
    [
      () => {
        var _a, _b;
        return ((_a = $selectedLog()) == null ? void 0 : _a.raw) ?? JSON.stringify((_b = $selectedLog()) == null ? void 0 : _b.data, null, 2);
      }
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
const defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
var root$6 = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["type", "name", "color", "size", "stroke", "iconNode"]);
  push($$props, false);
  let type = prop($$props, "type", 8);
  let name = prop($$props, "name", 8);
  let color = prop($$props, "color", 8, "currentColor");
  let size = prop($$props, "size", 8, 24);
  let stroke = prop($$props, "stroke", 8, 2);
  let iconNode = prop($$props, "iconNode", 8);
  init();
  var svg = root$6();
  attribute_effect(svg, () => ({
    ...defaultAttributes[type()],
    ...$$restProps,
    width: size(),
    height: size(),
    class: (deep_read_state(name()), deep_read_state($$sanitized_props), untrack(() => `tabler-icon tabler-icon-${name()} ${$$sanitized_props.class ?? ""}`)),
    ...type() === "filled" ? { fill: color() } : { "stroke-width": stroke(), stroke: color() }
  }));
  var node = child(svg);
  each(node, 1, iconNode, index, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get($$item), 2));
    let tag = () => get($$array)[0];
    let attrs = () => get($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  slot(node_2, $$props, "default", {});
  reset(svg);
  append($$anchor, svg);
  pop();
}
function File($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4" }],
    [
      "path",
      {
        "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"
      }
    ]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "file" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function Folder_open($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
      }
    ]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "folder-open" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function Folder($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
      }
    ]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "folder" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
var read_methods = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"];
var set_like_methods = ["difference", "intersection", "symmetricDifference", "union"];
var inited = false;
const _SvelteSet = class _SvelteSet extends Set {
  /**
   * @param {Iterable<T> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteSet_instances);
    /** @type {Map<T, Source<boolean>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, state(0));
    __privateAdd(this, _size, state(0));
    __privateAdd(this, _update_version, update_version || -1);
    if (value) {
      for (var element2 of value) {
        super.add(element2);
      }
      __privateGet(this, _size).v = super.size;
    }
    if (!inited) __privateMethod(this, _SvelteSet_instances, init_fn).call(this);
  }
  /** @param {T} value */
  has(value) {
    var has2 = super.has(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s === void 0) {
      if (!has2) {
        get(__privateGet(this, _version));
        return false;
      }
      s = __privateMethod(this, _SvelteSet_instances, source_fn).call(this, true);
      sources.set(value, s);
    }
    get(s);
    return has2;
  }
  /** @param {T} value */
  add(value) {
    if (!super.has(value)) {
      super.add(value);
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return this;
  }
  /** @param {T} value */
  delete(value) {
    var deleted = super.delete(value);
    var sources = __privateGet(this, _sources);
    var s = sources.get(value);
    if (s !== void 0) {
      sources.delete(value);
      set(s, false);
    }
    if (deleted) {
      set(__privateGet(this, _size), super.size);
      increment(__privateGet(this, _version));
    }
    return deleted;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    for (var s of sources.values()) {
      set(s, false);
    }
    sources.clear();
    set(__privateGet(this, _size), 0);
    increment(__privateGet(this, _version));
  }
  keys() {
    return this.values();
  }
  values() {
    get(__privateGet(this, _version));
    return super.values();
  }
  entries() {
    get(__privateGet(this, _version));
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return get(__privateGet(this, _size));
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_update_version = new WeakMap();
_SvelteSet_instances = new WeakSet();
/**
 * If the source is being created inside the same reaction as the SvelteSet instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
source_fn = function(value) {
  return update_version === __privateGet(this, _update_version) ? state(value) : source(value);
};
// We init as part of the first instance so that we can treeshake this class
init_fn = function() {
  inited = true;
  var proto = _SvelteSet.prototype;
  var set_proto = Set.prototype;
  for (const method of read_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      return set_proto[method].apply(this, v);
    };
  }
  for (const method of set_like_methods) {
    proto[method] = function(...v) {
      get(__privateGet(this, _version));
      var set2 = (
        /** @type {Set<T>} */
        set_proto[method].apply(this, v)
      );
      return new _SvelteSet(set2);
    };
  }
};
let SvelteSet = _SvelteSet;
function isFunction(value) {
  return typeof value === "function";
}
function isGetter(value) {
  return isFunction(value) && value.length === 0;
}
function isSvelteSet(value) {
  return value instanceof SvelteSet;
}
function isIterable(value) {
  return value !== null && typeof value === "object" && Symbol.iterator in value;
}
function isString(value) {
  return typeof value === "string";
}
function extract(value, defaultValue) {
  if (isGetter(value)) {
    const getter = value;
    const gotten = getter();
    if (gotten === void 0)
      return defaultValue;
    return gotten;
  }
  if (value === void 0)
    return defaultValue;
  return value;
}
function last(values) {
  let result;
  for (const value of values) {
    result = value;
  }
  return result;
}
function first(values) {
  let result;
  for (const value of values) {
    result = value;
    break;
  }
  return result;
}
function forEach(values, callback) {
  for (const value of values) {
    callback(value);
  }
}
const defaultWindow = typeof window !== "undefined" ? window : void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement {
  constructor(options = {}) {
    __privateAdd(this, _document);
    __privateAdd(this, _subscribe);
    const { window: window2 = defaultWindow, document: document2 = window2 == null ? void 0 : window2.document } = options;
    if (window2 === void 0) return;
    __privateSet(this, _document, document2);
    __privateSet(this, _subscribe, createSubscriber((update) => {
      const cleanupFocusIn = on(window2, "focusin", update);
      const cleanupFocusOut = on(window2, "focusout", update);
      return () => {
        cleanupFocusIn();
        cleanupFocusOut();
      };
    }));
  }
  get current() {
    var _a;
    (_a = __privateGet(this, _subscribe)) == null ? void 0 : _a.call(this);
    if (!__privateGet(this, _document)) return null;
    return getActiveElement(__privateGet(this, _document));
  }
}
_document = new WeakMap();
_subscribe = new WeakMap();
new ActiveElement();
function useDebounce(callback, wait = 250) {
  let context = state(null);
  function debounced(...args) {
    if (get(context)) {
      if (get(context).timeout) {
        clearTimeout(get(context).timeout);
      }
    } else {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      set(context, { timeout: null, runner: null, promise, resolve, reject }, true);
    }
    get(context).runner = async () => {
      if (!get(context)) return;
      const ctx = get(context);
      set(context, null);
      try {
        ctx.resolve(await callback.apply(this, args));
      } catch (error) {
        ctx.reject(error);
      }
    };
    get(context).timeout = setTimeout(get(context).runner, typeof wait === "function" ? wait() : wait);
    return get(context).promise;
  }
  debounced.cancel = async () => {
    if (!get(context) || get(context).timeout === null) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!get(context) || get(context).timeout === null) return;
    }
    clearTimeout(get(context).timeout);
    get(context).reject("Cancelled");
    set(context, null);
  };
  debounced.runScheduledNow = async () => {
    var _a, _b;
    if (!get(context) || !get(context).timeout) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!get(context) || !get(context).timeout) return;
    }
    clearTimeout(get(context).timeout);
    get(context).timeout = null;
    await ((_b = (_a = get(context)).runner) == null ? void 0 : _b.call(_a));
  };
  Object.defineProperty(debounced, "pending", {
    enumerable: true,
    get() {
      var _a;
      return !!((_a = get(context)) == null ? void 0 : _a.timeout);
    }
  });
  return debounced;
}
function runEffect(flush, effect2) {
  switch (flush) {
    case "post":
      user_effect(effect2);
      break;
    case "pre":
      user_pre_effect(effect2);
      break;
  }
}
function runWatcher(sources, flush, effect2, options = {}) {
  const { lazy = false } = options;
  let active = !lazy;
  let previousValues = Array.isArray(sources) ? [] : void 0;
  runEffect(flush, () => {
    const values = Array.isArray(sources) ? sources.map((source2) => source2()) : sources();
    if (!active) {
      active = true;
      previousValues = values;
      return;
    }
    const cleanup = untrack(() => effect2(values, previousValues));
    previousValues = values;
    return cleanup;
  });
}
function watch(sources, effect2, options) {
  runWatcher(sources, "post", effect2, options);
}
function watchPre(sources, effect2, options) {
  runWatcher(sources, "pre", effect2, options);
}
watch.pre = watchPre;
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar)) return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!bar.has(tmp)) return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len)) ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len]) ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
function toSet(v) {
  if (v === void 0) return new SvelteSet();
  if (isSvelteSet(v)) return v;
  if (!isIterable(v)) return new SvelteSet([v]);
  return new SvelteSet(v);
}
function toSingle(v) {
  if (!isIterable(v) || v === void 0) return v;
  return last(v);
}
class SelectionState {
  constructor(props) {
    __privateAdd(this, _props);
    __privateAdd(this, _internal_set, new SvelteSet());
    __privateAdd(this, _isControlled, user_derived(() => isSvelteSet(__privateGet(this, _props).value) || isFunction(__privateGet(this, _props).value)));
    __privateAdd(this, _isMultiple, user_derived(() => extract(__privateGet(this, _props).multiple, false)));
    __privateSet(this, _props, props);
    if (this.isControlled) return;
    if (!isIterable(props.value) && props.value !== void 0) {
      __privateGet(this, _internal_set).add(props.value);
    } else if (isIterable(props.value)) {
      forEach(props.value, (v) => __privateGet(this, _internal_set).add(v));
    }
    watch(
      () => this.isMultiple,
      (isMultiple) => {
        if (isMultiple) return;
        const curr = this.current;
        __privateGet(this, _internal_set).clear();
        if (curr === void 0) return;
        __privateGet(this, _internal_set).add(curr);
      },
      { lazy: true }
    );
  }
  get isControlled() {
    return get(__privateGet(this, _isControlled));
  }
  set isControlled(value) {
    set(__privateGet(this, _isControlled), value);
  }
  get isMultiple() {
    return get(__privateGet(this, _isMultiple));
  }
  set isMultiple(value) {
    set(__privateGet(this, _isMultiple), value);
  }
  /**
   * Gets the current selection value(s)
   * @returns For multiple selection, returns a SvelteSet of values. For single selection, returns a single value or undefined.
   */
  get current() {
    let value;
    if (isFunction(__privateGet(this, _props).value)) {
      value = __privateGet(this, _props).value();
    } else if (isSvelteSet(__privateGet(this, _props).value)) {
      value = __privateGet(this, _props).value;
    } else {
      value = __privateGet(this, _internal_set);
    }
    if (this.isMultiple) {
      return toSet(value);
    }
    return toSingle(value);
  }
  /**
   * Sets the current selection value(s)
   * @param value - The new selection value(s)
   */
  set current(value) {
    this.onChange(value);
    if (this.isControlled) return;
    __privateGet(this, _internal_set).clear();
    if (isSvelteSet(value)) {
      value.forEach((v) => __privateGet(this, _internal_set).add(v));
    } else if (value !== void 0) {
      __privateGet(this, _internal_set).add(value);
    }
  }
  /**
   * Manipulates the selection set through a callback
   * @param cb - Callback function that receives the selection set for manipulation
   * @internal
   */
  manipulate(cb) {
    const set2 = this.isControlled ? toSet(this.current) : __privateGet(this, _internal_set);
    const prevValue = snapshot(this.isMultiple ? set2 : toSingle(set2));
    cb(set2);
    const newValue = this.isMultiple ? set2 : toSingle(set2);
    if (dequal(prevValue, snapshot(newValue))) return;
    this.onChange(newValue);
  }
  /**
   * Triggers the onChange callback with the current selection
   * @param value - The current selection value(s)
   * @internal
   */
  onChange(value) {
    if (!__privateGet(this, _props).onChange) return;
    __privateGet(this, _props).onChange(value);
  }
  /**
   * Checks if an item is currently selected
   * @param item - The item to check
   * @returns True if the item is selected, false otherwise
   */
  has(item) {
    return toSet(this.current).has(item);
  }
  /**
   * Adds an item to the selection
   * For single selection, this replaces the current selection
   * For multiple selection, this adds to the current selection
   * @param value - The item to add
   */
  add(value) {
    this.manipulate((set2) => {
      if (!this.isMultiple) {
        set2.clear();
      }
      set2.add(value);
    });
  }
  /**
   * Adds multiple items to the selection
   * For single selection, only the first item is selected
   * For multiple selection, all items are added to the selection
   * @param items - The items to add
   */
  addAll(items) {
    this.manipulate((set2) => {
      if (!this.isMultiple) {
        set2.clear();
        set2.add(first(items));
      } else {
        forEach(items, (i) => set2.add(i));
      }
    });
  }
  /**
   * Removes an item from the selection
   * @param value - The item to remove
   */
  delete(value) {
    this.manipulate((set2) => {
      set2.delete(value);
    });
  }
  /**
   * Removes multiple items from the selection
   * @param items - The items to remove
   */
  deleteAll(items) {
    this.manipulate((set2) => forEach(items, set2.delete));
  }
  /**
   * Clears all selections
   */
  clear() {
    this.manipulate((set2) => set2.clear());
  }
  /**
   * Gets the number of selected items
   * @returns The number of selected items
   */
  size() {
    return toSet(this.current).size;
  }
  /**
   * Toggles the selection state of an item
   * If the item is selected, it will be deselected
   * If the item is not selected, it will be selected
   * @param item - The item to toggle
   */
  toggle(item) {
    this.manipulate((set2) => {
      if (set2.has(item)) {
        set2.delete(item);
      } else {
        if (!this.isMultiple) set2.clear();
        set2.add(item);
      }
    });
  }
  /**
   * Converts the current selection to a SvelteSet
   * @returns A SvelteSet containing the current selection
   */
  toSet() {
    return toSet(this.current);
  }
  /**
   * Converts the current selection to an array
   * @returns An array containing the current selection
   */
  toArray() {
    return Array.from(this.toSet());
  }
}
_props = new WeakMap();
_internal_set = new WeakMap();
_isControlled = new WeakMap();
_isMultiple = new WeakMap();
function dataAttr(value) {
  return value === true ? "" : value === false ? void 0 : value;
}
function keys(obj) {
  return Object.keys(obj);
}
let id = 0;
function createId() {
  return `melt-${id++}`;
}
function createDataIds(name, parts) {
  return parts.reduce((acc, part) => {
    acc[part] = `data-melt-${name}-${part}`;
    return acc;
  }, {});
}
function createIds(identifiers2) {
  const id2 = createId();
  return Object.keys(identifiers2).reduce((acc, key) => {
    acc[key] = `${key}-${id2}`;
    return acc;
  }, {});
}
function createBuilderMetadata(name, parts) {
  const dataAttrs = createDataIds(name, parts);
  const dataSelectors = keys(dataAttrs).reduce((acc, key) => {
    acc[key] = `[${dataAttrs[key]}]`;
    return acc;
  }, {});
  return {
    dataAttrs,
    dataSelectors,
    createIds: () => createIds(dataAttrs),
    createReferences: () => createReferences()
  };
}
function createReferences() {
  const refs = /* @__PURE__ */ new Map();
  const ak = createAttachmentKey();
  return {
    get(key) {
      return refs.get(key);
    },
    attach(key) {
      return (node) => {
        refs.set(key, node);
        return () => refs.delete(key);
      };
    },
    key: ak
  };
}
createBuilderMetadata("accordion", ["root", "item", "trigger", "heading", "content"]);
createDataIds("avatar", ["image", "fallback"]);
createBuilderMetadata("collapsible", ["trigger", "content"]);
const letterRegex = /^[a-zA-Z]$/;
function createTypeahead(args) {
  let value = state("");
  const timeout = user_derived(() => extract(args.timeout, 500));
  const debounceClear = useDebounce(
    () => {
      set(value, "");
    },
    () => get(timeout)
  );
  function typeahead(letter) {
    if (!letterRegex.test(letter)) return;
    debounceClear();
    set(value, get(value) + letter.toLowerCase());
    const isStartingTypeahead = get(value).length === 1;
    const items = args.getItems();
    const index2 = items.findIndex((item) => item.current);
    const itemsForTypeahead = items.filter((item) => {
      const searchValue = item.typeahead ?? item.value;
      return searchValue.toLowerCase().startsWith(get(value));
    }).map((item) => ({ item, index: items.indexOf(item) }));
    if (!itemsForTypeahead.length) return;
    const next = itemsForTypeahead.find((item) => {
      if (isStartingTypeahead) return item.index > index2;
      return item.index >= index2;
    }) ?? itemsForTypeahead[0];
    return next == null ? void 0 : next.item;
  }
  return typeahead;
}
createBuilderMetadata("popover", ["trigger", "content", "arrow"]);
function mapAndFilter(array, mapper, filter) {
  return array.reduce((acc, item) => {
    const mappedItem = mapper(item);
    if (filter(mappedItem))
      acc.push(mappedItem);
    return acc;
  }, []);
}
createBuilderMetadata("combobox", ["input", "trigger", "content", "option"]);
createBuilderMetadata("fileupload", ["dropzone", "input"]);
createBuilderMetadata("pin-input", ["root", "input"]);
createDataIds("progress", ["root", "progress"]);
createBuilderMetadata("radio-group", ["root", "item", "label", "hidden-input"]);
createBuilderMetadata("select", ["trigger", "content", "option"]);
createBuilderMetadata("slider", ["root", "thumb"]);
createDataIds("tabs", ["trigger", "content", "trigger-list"]);
createBuilderMetadata("toaster", ["root"]);
createBuilderMetadata("toaster-toast", ["content", "title", "description", "close"]);
createDataIds("toggle", ["trigger", "hidden-input"]);
createBuilderMetadata("tooltip", ["trigger", "content", "arrow"]);
class Collection {
  constructor(source2, defaultValue) {
    __publicField(this, "source");
    __publicField(this, "defaultValue");
    this.source = source2;
    this.defaultValue = defaultValue;
  }
  getIterable() {
    if (!this.source) {
      return this.defaultValue !== void 0 ? this.defaultValue : [];
    }
    return typeof this.source === "function" ? this.source() : this.source;
  }
  *[Symbol.iterator]() {
    const iterable = this.getIterable();
    if (iterable) {
      yield* iterable;
    }
  }
  *keys() {
    const iterable = this.getIterable();
    if (iterable) {
      let index2 = 0;
      for (const _ of iterable) {
        yield index2++;
      }
    }
  }
  *values() {
    const iterable = this.getIterable();
    if (iterable) {
      yield* iterable;
    }
  }
  *entries() {
    const iterable = this.getIterable();
    if (iterable) {
      let index2 = 0;
      for (const value of iterable) {
        yield [index2++, value];
      }
    }
  }
  toArray() {
    const iterable = this.getIterable();
    return iterable ? Array.from(iterable) : [];
  }
  toSet() {
    const iterable = this.getIterable();
    return new Set(iterable);
  }
  size() {
    const iterable = this.getIterable();
    if (!iterable)
      return 0;
    let count = 0;
    for (const _ of iterable) {
      count++;
    }
    return count;
  }
  isEmpty() {
    const iterable = this.getIterable();
    if (!iterable)
      return true;
    for (const _ of iterable) {
      return false;
    }
    return true;
  }
  first() {
    const iterable = this.getIterable();
    if (!iterable)
      return void 0;
    for (const value of iterable) {
      return value;
    }
    return void 0;
  }
  last() {
    const iterable = this.getIterable();
    if (!iterable)
      return void 0;
    let lastValue;
    for (const value of iterable) {
      lastValue = value;
    }
    return lastValue;
  }
  find(predicate) {
    const iterable = this.getIterable();
    if (!iterable)
      return void 0;
    for (const value of iterable) {
      if (predicate(value)) {
        return value;
      }
    }
    return void 0;
  }
  some(predicate) {
    const iterable = this.getIterable();
    if (!iterable)
      return false;
    for (const value of iterable) {
      if (predicate(value)) {
        return true;
      }
    }
    return false;
  }
  every(predicate) {
    const iterable = this.getIterable();
    if (!iterable)
      return true;
    for (const value of iterable) {
      if (!predicate(value)) {
        return false;
      }
    }
    return true;
  }
}
function isMac() {
  return /mac/i.test(navigator.platform);
}
function isControlOrMeta(event2) {
  return isMac() ? event2.metaKey : event2.ctrlKey;
}
const identifiers = createDataIds("tree", ["root", "item", "group"]);
const _Tree = class _Tree {
  constructor(props) {
    __privateAdd(this, _props2);
    /** The items contained in the tree */
    __publicField(this, "collection");
    __privateAdd(this, _multiple, user_derived(() => extract(__privateGet(this, _props2).multiple, false)));
    __privateAdd(this, _expandOnClick, user_derived(() => extract(__privateGet(this, _props2).expandOnClick, true)));
    __privateAdd(this, _typeaheadTimeout, user_derived(() => extract(__privateGet(this, _props2).typeaheadTimeout, 500)));
    __privateAdd(this, _typeahead, user_derived(() => createTypeahead({
      timeout: __privateGet(this, _props2).typeaheadTimeout,
      getItems: () => {
        const activeEl = document.activeElement;
        if (!isString(activeEl == null ? void 0 : activeEl.getAttribute(identifiers.item))) return [];
        const visibleChildren = _Tree.getAllChildren(this, true);
        return mapAndFilter(
          visibleChildren,
          (curr) => {
            var _a, _b, _c;
            return {
              child: curr,
              value: ((_a = curr.el) == null ? void 0 : _a.innerText) ?? "",
              typeahead: ((_b = curr.el) == null ? void 0 : _b.innerText) ?? "",
              current: ((_c = curr.el) == null ? void 0 : _c.id) === activeEl.id
            };
          },
          (c) => !!c.typeahead
        );
      }
    })));
    __privateAdd(this, _selected);
    __privateAdd(this, _expanded);
    __privateAdd(this, _id, createId());
    /**
     * Expands a specific item
     * @param id - ID of the item to expand
     */
    __publicField(this, "expand", (id2) => {
      var _a;
      const item = this.getItem(id2);
      if (!item || !((_a = item.children) == null ? void 0 : _a.length)) return;
      __privateGet(this, _expanded).add(id2);
    });
    /**
     * Expands all items
     */
    __publicField(this, "expandAll", () => {
      const children = _Tree.getAllChildren(this);
      children.forEach((c) => this.expand(c.id));
    });
    /**
     * Collapses a specific item
     * @param id - ID of the item to collapse
     */
    __publicField(this, "collapse", (id2) => {
      __privateGet(this, _expanded).delete(id2);
    });
    /**
     * Collapses all items
     */
    __publicField(this, "collapseAll", () => {
      const children = _Tree.getAllChildren(this);
      children.forEach((c) => this.collapse(c.id));
    });
    /**
     * Toggles the expanded state of an item
     * @param id - ID of the item to toggle
     */
    __publicField(this, "toggleExpand", (id2) => {
      __privateGet(this, _expanded).toggle(id2);
    });
    /**
     * Selects a specific item
     * @param id - ID of the item to select
     */
    __publicField(this, "select", (id2) => {
      __privateGet(this, _selected).add(id2);
    });
    /**
     * Deselects a specific item
     * @param id - ID of the item to deselect
     */
    __publicField(this, "deselect", (id2) => {
      __privateGet(this, _selected).delete(id2);
    });
    /**
     * Clears all current selections
     */
    __publicField(this, "clearSelection", () => {
      __privateGet(this, _selected).clear();
    });
    /**
     * Toggles the selected state of an item
     * @param id - ID of the item to toggle
     */
    __publicField(this, "toggleSelect", (id2) => {
      __privateGet(this, _selected).toggle(id2);
    });
    /**
     * Selects all visible items.
     * If all items are already selected, clears the selection.
     */
    __publicField(this, "selectAll", () => {
      const ids = _Tree.getAllChildren(this, true).map((c) => c.id);
      const alreadySelected = ids.every((id2) => __privateGet(this, _selected).has(id2));
      if (alreadySelected) {
        this.clearSelection();
      } else {
        __privateGet(this, _selected).addAll(ids);
      }
    });
    __privateSet(this, _props2, props);
    this.collection = new Collection(props.items);
    __privateSet(this, _selected, new SelectionState({
      value: props.selected,
      onChange: props.onSelectedChange,
      multiple: props.multiple
    }));
    __privateSet(this, _expanded, new SelectionState({
      value: props.expanded,
      onChange: props.onExpandedChange,
      multiple: true
    }));
  }
  get multiple() {
    return get(__privateGet(this, _multiple));
  }
  set multiple(value) {
    set(__privateGet(this, _multiple), value);
  }
  get expandOnClick() {
    return get(__privateGet(this, _expandOnClick));
  }
  set expandOnClick(value) {
    set(__privateGet(this, _expandOnClick), value);
  }
  get typeaheadTimeout() {
    return get(__privateGet(this, _typeaheadTimeout));
  }
  set typeaheadTimeout(value) {
    set(__privateGet(this, _typeaheadTimeout), value);
  }
  get typeahead() {
    return get(__privateGet(this, _typeahead));
  }
  set typeahead(value) {
    set(__privateGet(this, _typeahead), value);
  }
  get items() {
    return [...this.collection];
  }
  /**
   * Currently selected item(s)
   * For multiple selection, returns a Set of IDs
   * For single selection, returns a single ID or undefined
   */
  get selected() {
    return __privateGet(this, _selected).current;
  }
  set selected(v) {
    __privateGet(this, _selected).current = v;
  }
  /**
   * Set of currently expanded item IDs
   */
  get expanded() {
    return __privateGet(this, _expanded).current;
  }
  set expanded(v) {
    __privateGet(this, _expanded).current = v;
  }
  /**
   * Checks if an item is currently selected
   * @param id - ID of the item to check
   */
  isSelected(id2) {
    return __privateGet(this, _selected).has(id2);
  }
  /**
   * Checks if an item is currently expanded
   * @param id - ID of the item to check
   */
  isExpanded(id2) {
    return __privateGet(this, _expanded).has(id2);
  }
  getItem(id2) {
    var _a;
    return (_a = _Tree.getAllChildren(this).find((i) => i.id === id2)) == null ? void 0 : _a.item;
  }
  /**
   * Gets the DOM ID for a specific tree item
   * @param id - ID of the item
   */
  getItemId(id2) {
    return `melt-tree-${__privateGet(this, _id)}-item--${id2}`;
  }
  /**
   * Gets the DOM element for a specific tree item
   * @param id - ID of the item
   */
  getItemEl(id2) {
    return document.getElementById(this.getItemId(id2));
  }
  /**
   * Selects all items between the last selected item and the specified item
   * @param id - ID of the item to select until
   */
  selectUntil(id2) {
    if (!__privateGet(this, _selected).size()) return this.select(id2);
    const allChildren = _Tree.getAllChildren(this);
    const to = allChildren.find((c) => c.id === id2);
    if (!to) return;
    const from = allChildren.find((c) => c.id === first(__privateGet(this, _selected).toSet()));
    if (!from) return this.select(id2);
    const fromIdx = allChildren.indexOf(from);
    const toIdx = allChildren.indexOf(to);
    const [start, end] = fromIdx < toIdx ? [from, to] : [to, from];
    let current = start;
    this.clearSelection();
    this.select(from.id);
    this.select(start.id);
    while (current.id !== end.id && current.next) {
      current = current.next;
      this.select(current.id);
    }
  }
  /**
   * Gets ARIA attributes for the root tree element
   */
  get root() {
    return { role: "tree", [identifiers.root]: "" };
  }
  /**
   * ARIA attributes for group elements
   */
  get group() {
    return { role: "group", [identifiers.group]: "" };
  }
  /**
   * Array of Child instances representing the top-level items
   */
  get children() {
    return [...this.collection].map((i) => new Child({
      tree: this,
      item: i,
      parent: this,
      selectedState: __privateGet(this, _selected)
    }));
  }
  /**
   * Helper function to get all child items in a tree or subtree
   * @param treeOrChild - Tree or Child instance to get children from
   * @param onlyVisible - If true, only returns visible (expanded) children
   */
  static getAllChildren(treeOrChild, onlyVisible = false) {
    const children = !onlyVisible || treeOrChild instanceof _Tree || treeOrChild.expanded ? treeOrChild.children : [];
    return (children == null ? void 0 : children.reduce(
      (acc, c) => {
        return [...acc, c, ..._Tree.getAllChildren(c, onlyVisible)];
      },
      []
    )) || [];
  }
};
_props2 = new WeakMap();
_multiple = new WeakMap();
_expandOnClick = new WeakMap();
_typeaheadTimeout = new WeakMap();
_typeahead = new WeakMap();
_selected = new WeakMap();
_expanded = new WeakMap();
_id = new WeakMap();
let Tree = _Tree;
const _Child = class _Child {
  constructor(props) {
    __privateAdd(this, _props3);
    __privateAdd(this, _tree, user_derived(() => __privateGet(this, _props3).tree));
    __privateAdd(this, _selectedState, user_derived(() => __privateGet(this, _props3).selectedState));
    __privateAdd(this, _item, user_derived(() => __privateGet(this, _props3).item));
    __privateAdd(this, _elId, user_derived(() => this.tree.getItemId(this.item.id)));
    __privateAdd(this, _id2, user_derived(() => this.item.id));
    __privateAdd(this, _parent, user_derived(() => __privateGet(this, _props3).parent));
    __privateAdd(this, _selected2, user_derived(() => this.tree.isSelected(this.id)));
    __privateAdd(this, _expanded2, user_derived(() => this.tree.isExpanded(this.id)));
    __privateAdd(this, _canExpand, user_derived(() => {
      var _a;
      return Boolean(this.item.children && ((_a = this.item.children) == null ? void 0 : _a.length) > 0);
    }));
    __publicField(this, "collapse", () => this.tree.collapse(this.id));
    __publicField(this, "expand", () => this.tree.expand(this.id));
    __publicField(this, "toggleExpand", () => this.tree.toggleExpand(this.id));
    __publicField(this, "select", () => this.tree.select(this.id));
    __publicField(this, "deselect", () => this.tree.deselect(this.id));
    __publicField(this, "toggleSelect", () => this.tree.toggleSelect(this.id));
    __publicField(this, "focus", () => {
      var _a;
      return (_a = this.el) == null ? void 0 : _a.focus();
    });
    __privateAdd(this, _idx, user_derived(() => {
      var _a, _b;
      return ((_b = (_a = this.parent) == null ? void 0 : _a.children) == null ? void 0 : _b.findIndex((c) => c.id === this.id)) ?? -1;
    }));
    __privateSet(this, _props3, props);
  }
  get tree() {
    return get(__privateGet(this, _tree));
  }
  set tree(value) {
    set(__privateGet(this, _tree), value);
  }
  get selectedState() {
    return get(__privateGet(this, _selectedState));
  }
  set selectedState(value) {
    set(__privateGet(this, _selectedState), value);
  }
  get item() {
    return get(__privateGet(this, _item));
  }
  set item(value) {
    set(__privateGet(this, _item), value);
  }
  get elId() {
    return get(__privateGet(this, _elId));
  }
  set elId(value) {
    set(__privateGet(this, _elId), value);
  }
  get id() {
    return get(__privateGet(this, _id2));
  }
  set id(value) {
    set(__privateGet(this, _id2), value);
  }
  get parent() {
    return get(__privateGet(this, _parent));
  }
  set parent(value) {
    set(__privateGet(this, _parent), value);
  }
  /** The DOM element representing this item */
  get el() {
    return document.getElementById(this.elId);
  }
  get selected() {
    return get(__privateGet(this, _selected2));
  }
  set selected(value) {
    set(__privateGet(this, _selected2), value);
  }
  get expanded() {
    return get(__privateGet(this, _expanded2));
  }
  set expanded(value) {
    set(__privateGet(this, _expanded2), value);
  }
  get canExpand() {
    return get(__privateGet(this, _canExpand));
  }
  set canExpand(value) {
    set(__privateGet(this, _canExpand), value);
  }
  get idx() {
    return get(__privateGet(this, _idx));
  }
  set idx(value) {
    set(__privateGet(this, _idx), value);
  }
  get siblings() {
    var _a;
    return ((_a = this.parent) == null ? void 0 : _a.children) ?? [];
  }
  /** Gets the previous sibling item */
  get previousSibling() {
    return this.siblings[this.idx - 1];
  }
  /** Gets the next sibling item */
  get nextSibling() {
    return this.siblings[this.idx + 1];
  }
  /** Gets the previous item in the tree (including parent/child relationships) */
  get previous() {
    let current = this.previousSibling;
    if (!current) return this.parent instanceof _Child ? this.parent : void 0;
    while (current == null ? void 0 : current.expanded) {
      current = last((current == null ? void 0 : current.children) ?? []);
    }
    return current;
  }
  /** Gets the next item in the tree (including parent/child relationships) */
  get next() {
    var _a;
    if (this.expanded) {
      return (_a = this.children) == null ? void 0 : _a[0];
    }
    if (this.nextSibling) {
      return this.nextSibling;
    }
    if (this.parent instanceof _Child) {
      let p = this.parent;
      while (p && !p.nextSibling) {
        if (p.parent instanceof Tree) break;
        p = p.parent;
      }
      return p == null ? void 0 : p.nextSibling;
    }
  }
  /** Gets the tabindex for this item's DOM element */
  get tabindex() {
    if (this.selectedState.size()) {
      return this.tree.isSelected(this.id) ? 0 : -1;
    }
    return this.parent instanceof Tree && this.idx === 0 ? 0 : -1;
  }
  /** Gets DOM and ARIA attributes for this item */
  get attrs() {
    return {
      id: this.elId,
      [identifiers.item]: "",
      "data-selected": dataAttr(this.selected),
      tabindex: this.tabindex,
      role: "treeitem",
      onclick: (e) => {
        e.stopPropagation();
        if (!isControlOrMeta(e) && !e.shiftKey) this.tree.clearSelection();
        if (this.tree.expandOnClick && this.canExpand && (!this.tree.multiple || !isControlOrMeta(e) && !e.shiftKey)) {
          this.toggleExpand();
        }
        if (isControlOrMeta(e)) this.toggleSelect();
        else this.tree.select(this.id);
        if (e.shiftKey) this.tree.selectUntil(this.id);
        this.focus();
      },
      onkeydown: (e) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        let shouldPrevent = true;
        switch (e.key) {
          case "ArrowLeft": {
            if (this.expanded) {
              this.collapse();
              break;
            }
            if (!(this.parent instanceof _Child)) return;
            (_a = this.parent) == null ? void 0 : _a.focus();
            break;
          }
          case "ArrowRight": {
            if (!this.canExpand) break;
            if (this.expanded) {
              (_c = (_b = this.children) == null ? void 0 : _b[0]) == null ? void 0 : _c.focus();
              break;
            }
            this.expand();
            break;
          }
          case "ArrowUp": {
            (_d = this.previous) == null ? void 0 : _d.focus();
            if (e.shiftKey) (_e = this.previous) == null ? void 0 : _e.toggleSelect();
            break;
          }
          case "ArrowDown": {
            (_f = this.next) == null ? void 0 : _f.focus();
            if (e.shiftKey) (_g = this.next) == null ? void 0 : _g.toggleSelect();
            break;
          }
          case " ": {
            if (!this.tree.multiple) break;
            if (e.shiftKey) {
              this.tree.selectUntil(this.id);
              break;
            }
            this.toggleSelect();
            break;
          }
          case "Enter": {
            this.tree.clearSelection();
            this.select();
            break;
          }
          case "Home": {
            (_h = first(Tree.getAllChildren(this.tree))) == null ? void 0 : _h.focus();
            break;
          }
          case "End": {
            (_i = last(Tree.getAllChildren(this.tree, true))) == null ? void 0 : _i.focus();
            break;
          }
          case "*": {
            this.siblings.forEach((s) => s.expand());
            break;
          }
          default: {
            if (letterRegex.test(e.key)) {
              if (e.ctrlKey) {
                if (e.key === "a") {
                  this.tree.selectAll();
                }
                break;
              }
              const next = this.tree.typeahead(e.key);
              (_j = next == null ? void 0 : next.child.el) == null ? void 0 : _j.focus();
              break;
            }
            shouldPrevent = false;
          }
        }
        if (shouldPrevent) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };
  }
  /** The item's sub-items, if any */
  get children() {
    var _a;
    return (_a = this.item.children) == null ? void 0 : _a.map((i) => new _Child({ ...__privateGet(this, _props3), item: i, parent: this }));
  }
};
_props3 = new WeakMap();
_tree = new WeakMap();
_selectedState = new WeakMap();
_item = new WeakMap();
_elId = new WeakMap();
_id2 = new WeakMap();
_parent = new WeakMap();
_selected2 = new WeakMap();
_expanded2 = new WeakMap();
_canExpand = new WeakMap();
_idx = new WeakMap();
let Child = _Child;
createBuilderMetadata("spatial-menu", ["root", "input", "item"]);
createBuilderMetadata("dialog", ["trigger", "content", "overlay"]);
const treeItems = ($$anchor, items = noop, $$arg1) => {
  let depth = derived_safe_equal(() => fallback($$arg1 == null ? void 0 : $$arg1(), 0));
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, items, (item) => item.id, ($$anchor2, item) => {
    var li = root_2();
    attribute_effect(li, () => ({ ...get(item).attrs }));
    var div = child(li);
    var div_1 = child(div);
    var node_1 = child(div_1);
    {
      var consequent_1 = ($$anchor3) => {
        var span = root_3();
        var node_2 = child(span);
        {
          var consequent = ($$anchor4) => {
            Folder_open($$anchor4, { size: 18 });
          };
          var alternate = ($$anchor4) => {
            Folder($$anchor4, { size: 18 });
          };
          if_block(node_2, ($$render) => {
            if (get(item).expanded) $$render(consequent);
            else $$render(alternate, false);
          });
        }
        reset(span);
        append($$anchor3, span);
      };
      var alternate_1 = ($$anchor3) => {
        var span_1 = root_6();
        var node_3 = child(span_1);
        File(node_3, { size: 16 });
        reset(span_1);
        append($$anchor3, span_1);
      };
      if_block(node_1, ($$render) => {
        var _a;
        if ((_a = get(item).children) == null ? void 0 : _a.length) $$render(consequent_1);
        else $$render(alternate_1, false);
      });
    }
    var span_2 = sibling(node_1, 2);
    var text = child(span_2, true);
    reset(span_2);
    reset(div_1);
    reset(div);
    var node_4 = sibling(div, 2);
    {
      var consequent_2 = ($$anchor3) => {
        var ul = root_7();
        var div_2 = child(ul);
        var node_5 = sibling(div_2, 2);
        treeItems(node_5, () => get(item).children, () => get(depth) + 1);
        reset(ul);
        template_effect(() => {
          set_style(ul, `
                    max-height: ${get(item).expanded ? "1000px" : "0px"};
                    opacity: ${get(item).expanded ? 1 : 0};
                    transform: ${get(item).expanded ? "scale(1)" : "scale(.85)"};
                    `);
          set_style(div_2, `left: ${get(depth) + 0.75}rem`);
        });
        append($$anchor3, ul);
      };
      if_block(node_4, ($$render) => {
        var _a;
        if ((_a = get(item).children) == null ? void 0 : _a.length) $$render(consequent_2);
      });
    }
    reset(li);
    template_effect(() => {
      set_style(div, `padding-left: ${get(depth) * 1}rem`);
      set_class(div_1, 1, `
                        flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md
                        group-hover:bg-muted transition-all duration-100
                        ${(get(item).selected && "bg-accent/80 hover:bg-accent/80") ?? ""}
                    `);
      set_text(text, get(item).item.label);
    });
    append($$anchor2, li);
  });
  append($$anchor, fragment);
};
var root_3 = from_html(`<span><!></span>`);
var root_6 = from_html(`<span><!></span>`);
var root_7 = from_html(`<ul class="relative list-none p-0 overflow-hidden origin-left transition-all duration-100 ease-out"><div class="absolute bottom-2 top-2 w-px bg-border"></div> <!></ul>`);
var root_2 = from_html(`<li><div class="group py-1"><div><!> <span class="select-none text-sm"> </span></div></div> <!></li>`);
var root$5 = from_html(`<div class="h-full overflow-hidden"><ul><!></ul></div>`);
function LogsSidebar($$anchor, $$props) {
  push($$props, false);
  const items = [
    {
      id: "src",
      label: "src",
      children: [
        { id: "main.ts", label: "main.ts" },
        {
          id: "components",
          label: "components",
          children: [{ id: "Button.svelte", label: "Button.svelte" }]
        }
      ]
    },
    {
      id: "static",
      label: "static",
      children: [
        { id: "favicon.png", label: "favicon.p" },
        { id: "style.css", label: "style" }
      ]
    }
  ];
  const tree = new Tree({ items });
  init();
  var div_3 = root$5();
  var ul_1 = child(div_3);
  attribute_effect(ul_1, () => ({
    ...tree.root,
    class: "w-56 h-full overflow-x-auto border-r border-border p-2"
  }));
  var node_6 = child(ul_1);
  treeItems(node_6, () => tree.children, () => 0);
  reset(ul_1);
  reset(div_3);
  append($$anchor, div_3);
  pop();
}
var root$4 = from_html(`<div><span class="w-20 shrink-0 text-muted-foreground"> </span> <span> </span> <span class="flex-1 truncate"> </span></div>`);
function LogRow($$anchor, $$props) {
  push($$props, false);
  const $selectedLog = () => store_get(selectedLog, "$selectedLog", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let log = prop($$props, "log", 8);
  const colors = {
    trace: "text-muted-foreground",
    debug: "text-muted-foreground",
    info: "text-foreground",
    warn: "text-yellow-500",
    error: "text-red-500",
    fatal: "text-red-600 font-semibold"
  };
  init();
  var div = root$4();
  let classes;
  var span = child(div);
  var text = child(span, true);
  reset(span);
  var span_1 = sibling(span, 2);
  var text_1 = child(span_1, true);
  reset(span_1);
  var span_2 = sibling(span_1, 2);
  var text_2 = child(span_2, true);
  reset(span_2);
  reset(div);
  template_effect(
    ($0, $1) => {
      var _a;
      classes = set_class(div, 1, "flex gap-3 px-3 py-1 cursor-pointer hover:bg-muted svelte-1k3731m", null, classes, { selected: ((_a = $selectedLog()) == null ? void 0 : _a.id) === log().id });
      set_text(text, $0);
      set_class(
        span_1,
        1,
        (deep_read_state(log()), untrack(() => "w-12 shrink-0 " + colors[log().level])),
        "svelte-1k3731m"
      );
      set_text(text_1, $1);
      set_text(text_2, (deep_read_state(log()), untrack(() => log().message)));
    },
    [
      () => (deep_read_state(log()), untrack(() => new Date(log().ts).toLocaleTimeString())),
      () => (deep_read_state(log()), untrack(() => log().level.toUpperCase()))
    ]
  );
  event("click", div, () => selectedLog.set(log()));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$3 = from_html(`<div class="flex-1 overflow-auto font-mono text-xs"></div>`);
function LogsStream($$anchor, $$props) {
  push($$props, false);
  const $logs = () => store_get(logs, "$logs", $$stores);
  const $levelFilter = () => store_get(levelFilter, "$levelFilter", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  var div = root$3();
  each(div, 5, $logs, (log) => log.id, ($$anchor2, log) => {
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor3) => {
        LogRow($$anchor3, {
          get log() {
            return get(log);
          }
        });
      };
      if_block(node, ($$render) => {
        if ($levelFilter().has(get(log).level)) $$render(consequent);
      });
    }
    append($$anchor2, fragment);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1 = from_html(`<button> </button>`);
var root$2 = from_html(`<div class="h-11 flex items-center gap-3 px-3 border-b border-border" style="
        padding-left: calc(var(--titlebar-x) + 12px);
        padding-top: env(safe-area-inset-top);
      "><input placeholder="Search logs…" class="h-7 px-2 text-sm bg-muted rounded-md outline-none"/> <div class="flex gap-1"></div></div>`);
function LogsTopbar($$anchor, $$props) {
  push($$props, false);
  const $levelFilter = () => store_get(levelFilter, "$levelFilter", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const levels = ["trace", "debug", "info", "warn", "error", "fatal"];
  function toggle(level) {
    levelFilter.update((s) => {
      const next = new Set(s);
      next.has(level) ? next.delete(level) : next.add(level);
      return next;
    });
  }
  init();
  var div = root$2();
  var div_1 = sibling(child(div), 2);
  each(div_1, 5, () => levels, index, ($$anchor2, lvl) => {
    var button = root_1();
    var text = child(button, true);
    reset(button);
    template_effect(
      ($0, $1) => {
        set_class(button, 1, `px-2 text-xs rounded-md border transition
                ${$0 ?? ""}`);
        set_text(text, $1);
      },
      [
        () => $levelFilter().has(get(lvl)) ? "bg-primary/15 text-primary border-primary/30" : "border-transparent text-muted-foreground",
        () => get(lvl).toUpperCase()
      ]
    );
    event("click", button, () => toggle(get(lvl)));
    append($$anchor2, button);
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="h-full w-full flex flex-col bg-background text-foreground"><!> <div class="flex flex-1 overflow-hidden"><!> <div class="flex-1 flex flex-col overflow-hidden"><!> <!></div></div></div>`);
function LogsViewer($$anchor) {
  var div = root$1();
  var node = child(div);
  LogsTopbar(node, {});
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  LogsSidebar(node_1, {});
  var div_2 = sibling(node_1, 2);
  var node_2 = child(div_2);
  LogsStream(node_2, {});
  var node_3 = sibling(node_2, 2);
  LogDetails(node_3, {});
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, div);
}
var root = from_html(`<div><!></div>`);
function _page($$anchor) {
  var div = root();
  var node = child(div);
  LogsViewer(node);
  reset(div);
  append($$anchor, div);
}
export {
  _page as component
};
