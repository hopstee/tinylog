var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key2) => __reflectGet(__getProtoOf(cls), key2, obj);
var _sources, _version, _size, _update_version, _SvelteMap_instances, source_fn, read_all_fn, _size2, _observed, _options, _node, _window, _width, _height, _subscribe, _opts, _currentTabStopId, _props, _value, _isActive, _isDisabled, _contentNode, _props2, _root, _isDisabled2, _props3, _originalStyles, _isMountAnimationPrevented, _dimensions, _open, _updateDimensions, _snippetProps, _props4, _props5, _triggerNode, _contentNode2, _overlayNode, _descriptionNode, _contentId, _titleId, _triggerId, _descriptionId, _cancelNode, _nestedOpenCount, _sharedProps, _props6, _props7, _props8, _snippetProps2, _props9, _snippetProps3, _props10, _opts2, _search, _onMatch, _getCurrentItem, _opts3, _enabled, _isPointerInTransit, _pointerGraceArea, _GraceArea_instances, removeGraceArea_fn, createGraceArea_fn, _ignoreCloseAutoFocus, _isPointerInTransit2, _contentNode3, _triggerNode2, _search2, _timer, _handleTypeaheadSearch, _mounted, _isSub, _MenuContentState_instances, getCandidateNodes_fn, isPointerMovingToSubmenu_fn, _snippetProps4, _props11, _isFocused, _props12, _isPointerDown, _MenuItemState_instances, handleSelect_fn, _props13, _snippetProps5, _props14, _ariaControls, _props15, _groupHeadingId, _props16, _interactOutsideProp, _behaviorType, _interceptedEvents, _isResponsibleLayer, _isFocusInsideDOMTree, _documentObj, _onFocusOutside, _unsubClickListener, _handleFocus, _DismissibleLayerState_instances, addEventListeners_fn, _handleDismiss, _handleInteractOutside, _markInterceptedEvent, _markNonInterceptedEvent, _markResponsibleLayer, _isTargetWithinLayer, _resetState, isAnyEventIntercepted_fn, _onfocuscapture, _onblurcapture, _addEventListener, _onkeydown, _scopeStack, _focusHistory, _preFocusHistory, _paused, _container, _manager, _cleanupFns, _opts4, _FocusScope_instances, cleanup_fn, handleOpenAutoFocus_fn, handleCloseAutoFocus_fn, setupEventListeners_fn, getTabbables_fn, getFirstTabbable_fn, getAllFocusables_fn, _unsubSelectionLock, _TextSelectionLayerState_instances, addEventListeners_fn2, _pointerdown, _resetSelectionLock, _factory, _subscribers, _state, _scope, _SharedState_instances, dispose_fn, _id, _initialState, _restoreScrollDelay, _countState, _trueName, _trueRequired, _trueDisabled, _trueReadonly, _CheckboxRootState_instances, toggle_fn, _snippetProps6, _props17, _trueChecked, _shouldRender, _props18, _transformedStyle, _updatePositionStrategy, _arrowSize, _arrowWidth, _arrowHeight, _desiredPlacement, _boundary, _hasExplicitBoundaries, _detectOverflowOptions, _availableWidth, _availableHeight, _anchorWidth, _anchorHeight, _middleware, _placedSide, _placedAlign, _arrowX, _arrowY, _cannotCenterArrow, _contentZIndex, _arrowBaseSide, _wrapperProps, _props19, _arrowStyle, _props20, _triggerIds, _props21, _isDisabled3, _props22, _tabIndex, _isActive2, _isDisabled4, _ariaControls2, _TabsTriggerState_instances, activate_fn, _props23, _isActive3, _ariaLabelledBy, _props24;
import { d as assign_nodes, g as create_event, i as delegate, c as createSubscriber, o as on, p as props_id, e as comment, a as append, f as from_html, j as from_svg, t as text, k as event } from "../chunks/yiCpE6_S.js";
import "../chunks/By6-EsdD.js";
import { aU as is_array, aV as get_prototype_of, aW as object_prototype, o as hydrating, q as hydrate_next, aX as is_runes, v as block, J as create_text, y as set_hydrate_node, au as get_first_child, g as get$2, w as read_hydration_instruction, H as HYDRATION_START_ELSE, x as skip_nodes, z as set_hydrating, L as hydrate_node, ab as COMMENT_NODE, aC as HYDRATION_END, am as internal_set, D as current_batch, aY as EFFECT_OFFSCREEN, K as branch, N as should_defer_append, a3 as derived_safe_equal, aA as array_from, aZ as EACH_ITEM_REACTIVE, a_ as EACH_ITEM_IMMUTABLE, R as mutable_source, a7 as source, a$ as EACH_INDEX_REACTIVE, F as resume_effect, I as pause_effect, b0 as INERT, az as clear_text_content, G as destroy_effect, C as queue_micro_task, aw as get_next_sibling, b1 as EACH_IS_CONTROLLED, b2 as EACH_IS_ANIMATED, _ as active_effect, E as EFFECT_TRANSPARENT, b3 as BLOCK_EFFECT, aO as EFFECT_RAN, A as effect, b as untrack, b4 as TRANSITION_GLOBAL, aK as without_reactive_context, a8 as is_function, Q as noop$1, b5 as ELEMENT_NODE, b6 as NAMESPACE_SVG, O as teardown, b7 as managed, b8 as select_multiple_invalid_value, b9 as is, ba as add_form_reset_listener, bb as LOADING_ATTR_SYMBOL, bc as NAMESPACE_HTML, bd as flatten, aQ as ATTACHMENT_KEY, be as autofocus, bf as UNINITIALIZED, bg as get_descriptors, bh as listen_to_event_and_reset_event, aF as tick, B as render_effect, bi as previous_batch, aG as state, Z as proxy, V as set, bj as update_version, aJ as increment, aH as user_derived, a as user_effect, p as push, j as first_child, k as pop, m as child, n as reset, bk as getAllContexts, bl as effect_root, s as sibling, bm as writable, e as deep_read_state, bn as to_array, t as template_effect, an as next, bo as mutate, bp as legacy_pre_effect, bq as legacy_pre_effect_reset } from "../chunks/DilKp9Ls.js";
import { a as should_intro, i as is_raw_text_element, b as set_should_intro, c as is_capture_event, n as normalize_attribute, d as can_delegate_event, m as mount, u as unmount, s as set_text } from "../chunks/TQ9JzVVz.js";
import { i as if_block, b as bind_this, c as component } from "../chunks/BBjsIr89.js";
import { i as init } from "../chunks/B2oYUNLw.js";
import { i as isWritableSymbol, B as BoxSymbol, c as boxFrom, b as boxWith, d as boxFlatten, t as toReadonlyBox, e as isBox, f as isWritableBox, g as isClassValue, h as defaultWindow, j as isHTMLElement$1, C as Context, k as attachRef, P as PresenceManager, l as boolToEmptyStrOrUndef, m as getDataOpenClosed, n as boolToStr, w as watch, o as afterTick, p as createBitsAttrs, s as snippet, q as onDestroyEffect, r as isBrowser, u as getDocument, v as isSelectableInput, x as getWindow$1, y as isElement$1, D as DOMContext, z as isElementOrSVGElement, A as getAriaChecked, E as simpleBox, F as contains, G as isIOS, H as isNotNull, I as boolToStrTrueOrUndef, J as boolToTrueOrUndef, K as TooltipRootState, L as TooltipContentState, M as TooltipTriggerState, a as slot } from "../chunks/DogESqVt.js";
import { B as BranchManager, p as prop, r as rest_props, s as spread_props, l as legacy_rest_props, a as setup_stores, b as store_get } from "../chunks/BQfkjXyb.js";
import { o as onMount } from "../chunks/D39b7Q4Q.js";
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
      for (var key2 in value) {
        copy[key2] = clone(
          // @ts-expect-error
          value[key2],
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
function key(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}
function index$1(_, i) {
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
  var fallback = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var first_run = true;
  function commit() {
    state2.fallback = fallback;
    reconcile(state2, array, anchor, flags, get_key);
    if (fallback !== null) {
      if (array.length === 0) {
        if ((fallback.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback);
        } else {
          fallback.f ^= EFFECT_OFFSCREEN;
          move(fallback, null, anchor);
        }
      } else {
        pause_effect(fallback, () => {
          fallback = null;
        });
      }
    }
  }
  var effect2 = block(() => {
    array = /** @type {V[]} */
    get$2(each_array);
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
    var keys = /* @__PURE__ */ new Set();
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
      var key2 = get_key(value, index2);
      var item = first_run ? null : items.get(key2);
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
          key2,
          index2,
          render_fn,
          flags,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key2, item);
      }
      keys.add(key2);
    }
    if (length === 0 && fallback_fn && !fallback) {
      if (first_run) {
        fallback = branch(() => fallback_fn(anchor));
      } else {
        fallback = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text())));
        fallback.f |= EFFECT_OFFSCREEN;
      }
    }
    if (hydrating && length > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      if (defer) {
        for (const [key3, item2] of items) {
          if (!keys.has(key3)) {
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
    get$2(each_array);
  });
  var state2 = { effect: effect2, items, outrogroups: null, fallback };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(state2, array, anchor, flags, get_key) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
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
  var key2;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        (_b = (_a2 = effect2.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(effect2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key2).e;
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
        var next2 = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next2);
        move(effect2, next2, anchor);
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
      var _a3, _b2;
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        (_b2 = (_a3 = effect2.nodes) == null ? void 0 : _a3.a) == null ? void 0 : _b2.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key2, index2, render_fn, flags, get_collection) {
  var v = (flags & EACH_ITEM_REACTIVE) !== 0 ? (flags & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
  var i = (flags & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key2);
      };
    })
  };
}
function move(effect2, next2, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next2.nodes.start
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
function link(state2, prev, next2) {
  if (prev === null) {
    state2.effect.first = next2;
  } else {
    prev.next = next2;
  }
  if (next2 === null) {
    state2.effect.last = prev;
  } else {
    next2.prev = prev;
  }
}
const now = () => performance.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => requestAnimationFrame(_)
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
  const now2 = raf.now();
  raf.tasks.forEach((task) => {
    if (!task.c(now2)) {
      raf.tasks.delete(task);
      task.f();
    }
  });
  if (raf.tasks.size !== 0) {
    raf.tick(run_tasks);
  }
}
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) {
    raf.tick(run_tasks);
  }
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function dispatch_event(element2, type) {
  without_reactive_context(() => {
    element2.dispatchEvent(new CustomEvent(type));
  });
}
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  if (parts.length === 1) return parts[0];
  return parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
function css_to_keyframe(css) {
  const keyframe = {};
  const parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
const linear$1 = (t) => t;
function transition(flags, element2, get_fn, get_params) {
  var _a2;
  var is_global = (flags & TRANSITION_GLOBAL) !== 0;
  var direction = "both";
  var current_options;
  var inert = element2.inert;
  var overflow = element2.style.overflow;
  var intro;
  var outro;
  function get_options() {
    return without_reactive_context(() => {
      return current_options ?? (current_options = get_fn()(element2, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
      {}, {
        direction
      }));
    });
  }
  var transition2 = {
    is_global,
    in() {
      element2.inert = inert;
      dispatch_event(element2, "introstart");
      intro = animate(element2, get_options(), outro, 1, () => {
        dispatch_event(element2, "introend");
        intro == null ? void 0 : intro.abort();
        intro = current_options = void 0;
        element2.style.overflow = overflow;
      });
    },
    out(fn) {
      element2.inert = true;
      dispatch_event(element2, "outrostart");
      outro = animate(element2, get_options(), intro, 0, () => {
        dispatch_event(element2, "outroend");
        fn == null ? void 0 : fn();
      });
    },
    stop: () => {
      intro == null ? void 0 : intro.abort();
      outro == null ? void 0 : outro.abort();
    }
  };
  var e = (
    /** @type {Effect & { nodes: EffectNodes }} */
    active_effect
  );
  ((_a2 = e.nodes).t ?? (_a2.t = [])).push(transition2);
  if (should_intro) {
    var run = is_global;
    if (!run) {
      var block2 = (
        /** @type {Effect | null} */
        e.parent
      );
      while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
        while (block2 = block2.parent) {
          if ((block2.f & BLOCK_EFFECT) !== 0) break;
        }
      }
      run = !block2 || (block2.f & EFFECT_RAN) !== 0;
    }
    if (run) {
      effect(() => {
        untrack(() => transition2.in());
      });
    }
  }
}
function animate(element2, options, counterpart, t2, on_finish) {
  var is_intro = t2 === 1;
  if (is_function(options)) {
    var a;
    var aborted = false;
    queue_micro_task(() => {
      if (aborted) return;
      var o = options({ direction: is_intro ? "in" : "out" });
      a = animate(element2, o, counterpart, t2, on_finish);
    });
    return {
      abort: () => {
        aborted = true;
        a == null ? void 0 : a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  counterpart == null ? void 0 : counterpart.deactivate();
  if (!(options == null ? void 0 : options.duration)) {
    on_finish();
    return {
      abort: noop$1,
      deactivate: noop$1,
      reset: noop$1,
      t: () => t2
    };
  }
  const { delay = 0, css, tick: tick2, easing = linear$1 } = options;
  var keyframes = [];
  if (is_intro && counterpart === void 0) {
    if (tick2) {
      tick2(0, 1);
    }
    if (css) {
      var styles = css_to_keyframe(css(0, 1));
      keyframes.push(styles, styles);
    }
  }
  var get_t = () => 1 - t2;
  var animation = element2.animate(keyframes, { duration: delay, fill: "forwards" });
  animation.onfinish = () => {
    animation.cancel();
    var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
    counterpart == null ? void 0 : counterpart.abort();
    var delta = t2 - t1;
    var duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    );
    var keyframes2 = [];
    if (duration > 0) {
      var needs_overflow_hidden = false;
      if (css) {
        var n = Math.ceil(duration / (1e3 / 60));
        for (var i = 0; i <= n; i += 1) {
          var t = t1 + delta * easing(i / n);
          var styles2 = css_to_keyframe(css(t, 1 - t));
          keyframes2.push(styles2);
          needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
        }
      }
      if (needs_overflow_hidden) {
        element2.style.overflow = "hidden";
      }
      get_t = () => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation.currentTime
        );
        return t1 + delta * easing(time / duration);
      };
      if (tick2) {
        loop(() => {
          if (animation.playState !== "running") return false;
          var t3 = get_t();
          tick2(t3, 1 - t3);
          return true;
        });
      }
    }
    animation = element2.animate(keyframes2, { duration, fill: "forwards" });
    animation.onfinish = () => {
      get_t = () => t2;
      tick2 == null ? void 0 : tick2(t2, 1 - t2);
      on_finish();
    };
  };
  return {
    abort: () => {
      if (animation) {
        animation.cancel();
        animation.effect = null;
        animation.onfinish = noop$1;
      }
    },
    deactivate: () => {
      on_finish = noop$1;
    },
    reset: () => {
      if (t2 === 0) {
        tick2 == null ? void 0 : tick2(1, 0);
      }
    },
    t: () => get_t()
  };
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
    var ns = is_svg || next_tag === "svg" ? NAMESPACE_SVG : null;
    if (next_tag === null) {
      branches.ensure(null, null);
      set_should_intro(true);
      return;
    }
    branches.ensure(next_tag, (anchor2) => {
      if (next_tag) {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : ns ? document.createElementNS(ns, next_tag) : document.createElement(next_tag);
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
    set_should_intro(true);
    return () => {
      if (next_tag) {
        set_should_intro(false);
      }
    };
  }, EFFECT_TRANSPARENT);
  teardown(() => {
    set_should_intro(true);
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
    for (var key2 in directives) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
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
  for (var key2 in styles) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
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
    for (var key2 in next_classes) {
      var is_present = !!next_classes[key2];
      if (prev_classes == null || is_present !== !!prev_classes[key2]) {
        dom.classList.toggle(key2, is_present);
      }
    }
  }
  return next_classes;
}
function update_styles(dom, prev = {}, next2, priority) {
  for (var key2 in next2) {
    var value = next2[key2];
    if (prev[key2] !== value) {
      if (next2[key2] == null) {
        dom.style.removeProperty(key2);
      } else {
        dom.style.setProperty(key2, value, priority);
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
function set_attributes(element2, prev, next2, css_hash, should_remove_defaults = false, skip_warning = false) {
  if (hydrating && should_remove_defaults && element2.tagName === "INPUT") {
    var input = (
      /** @type {HTMLInputElement} */
      element2
    );
    var attribute = input.type === "checkbox" ? "defaultChecked" : "defaultValue";
    if (!(attribute in next2)) {
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
  for (var key2 in prev) {
    if (!(key2 in next2)) {
      next2[key2] = null;
    }
  }
  if (next2.class) {
    next2.class = clsx(next2.class);
  } else if (next2[CLASS]) {
    next2.class = null;
  }
  if (next2[STYLE]) {
    next2.style ?? (next2.style = null);
  }
  var setters = get_setters(element2);
  for (const key3 in next2) {
    let value = next2[key3];
    if (is_option_element && key3 === "value" && value == null) {
      element2.value = element2.__value = "";
      current[key3] = value;
      continue;
    }
    if (key3 === "class") {
      var is_html = element2.namespaceURI === "http://www.w3.org/1999/xhtml";
      set_class(element2, is_html, value, css_hash, prev == null ? void 0 : prev[CLASS], next2[CLASS]);
      current[key3] = value;
      current[CLASS] = next2[CLASS];
      continue;
    }
    if (key3 === "style") {
      set_style(element2, value, prev == null ? void 0 : prev[STYLE], next2[STYLE]);
      current[key3] = value;
      current[STYLE] = next2[STYLE];
      continue;
    }
    var prev_value = current[key3];
    if (value === prev_value && !(value === void 0 && element2.hasAttribute(key3))) {
      continue;
    }
    current[key3] = value;
    var prefix = key3[0] + key3[1];
    if (prefix === "$$") continue;
    if (prefix === "on") {
      const opts = {};
      const event_handle_key = "$$" + key3;
      let event_name = key3.slice(2);
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
            current[key3].call(this, evt);
          };
          current[event_handle_key] = create_event(event_name, element2, handle, opts);
        } else {
          element2[`__${event_name}`] = value;
          delegate([event_name]);
        }
      } else if (delegated) {
        element2[`__${event_name}`] = void 0;
      }
    } else if (key3 === "style") {
      set_attribute(element2, key3, value);
    } else if (key3 === "autofocus") {
      autofocus(
        /** @type {HTMLElement} */
        element2,
        Boolean(value)
      );
    } else if (!is_custom_element && (key3 === "__value" || key3 === "value" && value != null)) {
      element2.value = element2.__value = value;
    } else if (key3 === "selected" && is_option_element) {
      set_selected(
        /** @type {HTMLOptionElement} */
        element2,
        value
      );
    } else {
      var name = key3;
      if (!preserve_attribute_case) {
        name = normalize_attribute(name);
      }
      var is_default = name === "defaultValue" || name === "defaultChecked";
      if (value == null && !is_custom_element && !is_default) {
        attributes[key3] = null;
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
          element2.removeAttribute(key3);
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
    var inited = false;
    managed(() => {
      var next2 = fn(...values.map(get$2));
      var current = set_attributes(
        element2,
        prev,
        next2,
        css_hash,
        should_remove_defaults,
        skip_warning
      );
      if (inited && is_select && "value" in next2) {
        select_option(
          /** @type {HTMLSelectElement} */
          element2,
          next2.value
        );
      }
      for (let symbol of Object.getOwnPropertySymbols(effects)) {
        if (!next2[symbol]) destroy_effect(effects[symbol]);
      }
      for (let symbol of Object.getOwnPropertySymbols(next2)) {
        var n = next2[symbol];
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
    inited = true;
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
    for (var key2 in descriptors) {
      if (descriptors[key2].set) {
        setters.push(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function bind_value(input, get2, set2 = get2) {
  var batches = /* @__PURE__ */ new WeakSet();
  listen_to_event_and_reset_event(input, "input", async (is_reset) => {
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
    await tick();
    if (value !== (value = get2())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      var length = input.value.length;
      input.value = value ?? "";
      if (end !== null) {
        var new_length = input.value.length;
        if (start === end && end === length && new_length > length) {
          input.selectionStart = new_length;
          input.selectionEnd = new_length;
        } else {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, new_length);
        }
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get2) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  }
  render_effect(() => {
    var value = get2();
    if (input === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        previous_batch ?? current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function box(initialValue) {
  let current = state(proxy(initialValue));
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return get$2(current);
    },
    set current(v) {
      set(current, v, true);
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    var _a2;
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        (_a2 = handler.current) == null ? void 0 : _a2.call(this, e);
      }
    }
  };
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
function index(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style) return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  function position() {
    var start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace2();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(
      options.source + ":" + lineno + ":" + column + ": " + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent) ;
    else {
      throw err;
    }
  }
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  function whitespace2() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment2()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }
  function comment2() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position();
    var prop2 = match(PROPERTY_REGEX);
    if (!prop2) return;
    comment2();
    if (!match(COLON_REGEX)) return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop2[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace2();
  return declarations();
}
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(style, iterator) {
  let styleObject = null;
  if (!style || typeof style !== "string") {
    return styleObject;
  }
  const declarations = index(style);
  const hasIterator = typeof iterator === "function";
  declarations.forEach((declaration) => {
    if (declaration.type !== "declaration") {
      return;
    }
    const { property, value } = declaration;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      styleObject = styleObject || {};
      styleObject[property] = value;
    }
  });
  return styleObject;
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  StyleToObject(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const EVENT_LIST = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key2) {
  return EVENT_LIST_SET.has(key2);
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    if (!props)
      continue;
    for (const key2 of Object.keys(props)) {
      const a = result[key2];
      const b = props[key2];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key2)) {
        const aHandler = a;
        const bHandler = b;
        result[key2] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key2] = executeCallbacks(a, b);
      } else if (key2 === "class") {
        const aIsClassValue = isClassValue(a);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key2] = clsx$1(a, b);
        } else if (aIsClassValue) {
          result[key2] = clsx$1(a);
        } else if (bIsClassValue) {
          result[key2] = clsx$1(b);
        }
      } else if (key2 === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key2] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key2] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key2] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key2] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key2] = a;
        } else if (bIsObject) {
          result[key2] = b;
        } else if (aIsString) {
          result[key2] = a;
        } else if (bIsString) {
          result[key2] = b;
        }
      } else {
        result[key2] = b !== void 0 ? b : a;
      }
    }
    for (const key2 of Object.getOwnPropertySymbols(props)) {
      const a = result[key2];
      const b = props[key2];
      result[key2] = b !== void 0 ? b : a;
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden === false) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled === false) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
const _SvelteMap = class _SvelteMap extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteMap_instances);
    /** @type {Map<K, Source<number>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, state(0));
    __privateAdd(this, _size, state(0));
    __privateAdd(this, _update_version, update_version || -1);
    if (value) {
      for (var [key2, v] of value) {
        super.set(key2, v);
      }
      __privateGet(this, _size).v = super.size;
    }
  }
  /** @param {K} key */
  has(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    if (s === void 0) {
      var ret = super.get(key2);
      if (ret !== void 0) {
        s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      } else {
        get$2(__privateGet(this, _version));
        return false;
      }
    }
    get$2(s);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    if (s === void 0) {
      var ret = super.get(key2);
      if (ret !== void 0) {
        s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      } else {
        get$2(__privateGet(this, _version));
        return void 0;
      }
    }
    get$2(s);
    return super.get(key2);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key2, value) {
    var _a2;
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    var prev_res = super.get(key2);
    var res = super.set(key2, value);
    var version = __privateGet(this, _version);
    if (s === void 0) {
      s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
      sources.set(key2, s);
      set(__privateGet(this, _size), super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !((_a2 = s.reactions) == null ? void 0 : _a2.every(
        (r2) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r2)
        )
      ));
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key2) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key2);
    var res = super.delete(key2);
    if (s !== void 0) {
      sources.delete(key2);
      set(__privateGet(this, _size), super.size);
      set(s, -1);
      increment(__privateGet(this, _version));
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    set(__privateGet(this, _size), 0);
    for (var s of sources.values()) {
      set(s, -1);
    }
    increment(__privateGet(this, _version));
    sources.clear();
  }
  keys() {
    get$2(__privateGet(this, _version));
    return super.keys();
  }
  values() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.values();
  }
  entries() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get$2(__privateGet(this, _size));
    return super.size;
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_update_version = new WeakMap();
_SvelteMap_instances = new WeakSet();
/**
 * If the source is being created inside the same reaction as the SvelteMap instance,
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
read_all_fn = function() {
  get$2(__privateGet(this, _version));
  var sources = __privateGet(this, _sources);
  if (__privateGet(this, _size).v !== sources.size) {
    for (var key2 of __superGet(_SvelteMap.prototype, this, "keys").call(this)) {
      if (!sources.has(key2)) {
        var s = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key2, s);
      }
    }
  }
  for ([, s] of __privateGet(this, _sources)) {
    get$2(s);
  }
};
let SvelteMap = _SvelteMap;
function isFunction(value) {
  return typeof value === "function";
}
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  constructor(node, options = { box: "border-box" }) {
    // no need to use `$state` here since we are using createSubscriber
    __privateAdd(this, _size2, { width: 0, height: 0 });
    __privateAdd(this, _observed, false);
    __privateAdd(this, _options);
    __privateAdd(this, _node);
    __privateAdd(this, _window);
    // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
    // which we would get if we would just use a getter since the version of the subscriber will be changing
    __privateAdd(this, _width, user_derived(() => {
      var _a2;
      (_a2 = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a2();
      return this.getSize().width;
    }));
    // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
    // which we would get if we would just use a getter since the version of the subscriber will be changing
    __privateAdd(this, _height, user_derived(() => {
      var _a2;
      (_a2 = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a2();
      return this.getSize().height;
    }));
    // we need to use a derived here because the class will be created before the node is bound to the ref
    __privateAdd(this, _subscribe, user_derived(() => {
      const node$ = get$1(__privateGet(this, _node));
      if (!node$) return;
      return createSubscriber((update2) => {
        if (!__privateGet(this, _window)) return;
        const observer = new (__privateGet(this, _window)).ResizeObserver((entries) => {
          __privateSet(this, _observed, true);
          for (const entry of entries) {
            const boxSize = __privateGet(this, _options).box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
            const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
            __privateGet(this, _size2).width = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.inlineSize), 0);
            __privateGet(this, _size2).height = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.blockSize), 0);
          }
          update2();
        });
        observer.observe(node$);
        return () => {
          __privateSet(this, _observed, false);
          observer.disconnect();
        };
      });
    }));
    __privateSet(this, _window, options.window ?? defaultWindow);
    __privateSet(this, _options, options);
    __privateSet(this, _node, node);
    __privateSet(this, _size2, { width: 0, height: 0 });
  }
  calculateSize() {
    const element2 = get$1(__privateGet(this, _node));
    if (!element2 || !__privateGet(this, _window)) {
      return;
    }
    const offsetWidth = element2.offsetWidth;
    const offsetHeight = element2.offsetHeight;
    if (__privateGet(this, _options).box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = __privateGet(this, _window).getComputedStyle(element2);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return __privateGet(this, _observed) ? __privateGet(this, _size2) : this.calculateSize() ?? __privateGet(this, _size2);
  }
  get current() {
    var _a2;
    (_a2 = get$2(__privateGet(this, _subscribe))) == null ? void 0 : _a2();
    return this.getSize();
  }
  get width() {
    return get$2(__privateGet(this, _width));
  }
  get height() {
    return get$2(__privateGet(this, _height));
  }
}
_size2 = new WeakMap();
_observed = new WeakMap();
_options = new WeakMap();
_node = new WeakMap();
_window = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_subscribe = new WeakMap();
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const PAGE_DOWN = "PageDown";
const PAGE_UP = "PageUp";
const SPACE = " ";
const TAB = "Tab";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
class RovingFocusGroup {
  constructor(opts) {
    __privateAdd(this, _opts);
    __privateAdd(this, _currentTabStopId, box(null));
    __privateSet(this, _opts, opts);
  }
  getCandidateNodes() {
    if (!__privateGet(this, _opts).rootNode.current)
      return [];
    if (__privateGet(this, _opts).candidateSelector) {
      const candidates = Array.from(__privateGet(this, _opts).rootNode.current.querySelectorAll(__privateGet(this, _opts).candidateSelector));
      return candidates;
    } else if (__privateGet(this, _opts).candidateAttr) {
      const candidates = Array.from(__privateGet(this, _opts).rootNode.current.querySelectorAll(`[${__privateGet(this, _opts).candidateAttr}]:not([data-disabled])`));
      return candidates;
    }
    return [];
  }
  focusFirstCandidate() {
    var _a2;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    (_a2 = items[0]) == null ? void 0 : _a2.focus();
  }
  handleKeydown(node, e, both = false) {
    var _a2, _b;
    const rootNode = __privateGet(this, _opts).rootNode.current;
    if (!rootNode || !node)
      return;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, __privateGet(this, _opts).orientation.current);
    const loop2 = __privateGet(this, _opts).loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0)
      return;
    e.preventDefault();
    if (itemIndex < 0 && loop2) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop2) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus)
      return;
    itemToFocus.focus();
    __privateGet(this, _currentTabStopId).current = itemToFocus.id;
    (_b = (_a2 = __privateGet(this, _opts)).onCandidateFocus) == null ? void 0 : _b.call(_a2, itemToFocus);
    return itemToFocus;
  }
  getTabIndex(node) {
    const items = this.getCandidateNodes();
    const anyActive = __privateGet(this, _currentTabStopId).current !== null;
    if (node && !anyActive && items[0] === node) {
      __privateGet(this, _currentTabStopId).current = node.id;
      return 0;
    } else if ((node == null ? void 0 : node.id) === __privateGet(this, _currentTabStopId).current) {
      return 0;
    }
    return -1;
  }
  setCurrentTabStopId(id) {
    __privateGet(this, _currentTabStopId).current = id;
  }
  focusCurrentTabStop() {
    var _a2;
    const currentTabStopId = __privateGet(this, _currentTabStopId).current;
    if (!currentTabStopId)
      return;
    const currentTabStop = (_a2 = __privateGet(this, _opts).rootNode.current) == null ? void 0 : _a2.querySelector(`#${currentTabStopId}`);
    if (!currentTabStop || !isHTMLElement$1(currentTabStop))
      return;
    currentTabStop.focus();
  }
}
_opts = new WeakMap();
_currentTabStopId = new WeakMap();
const accordionAttrs = createBitsAttrs({
  component: "accordion",
  parts: ["root", "trigger", "content", "item", "header"]
});
const AccordionRootContext = new Context("Accordion.Root");
const AccordionItemContext = new Context("Accordion.Item");
class AccordionBaseState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "rovingFocusGroup");
    __publicField(this, "attachment");
    __privateAdd(this, _props, user_derived(() => ({
      id: this.opts.id.current,
      "data-orientation": this.opts.orientation.current,
      "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
      [accordionAttrs.root]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.rovingFocusGroup = new RovingFocusGroup({
      rootNode: this.opts.ref,
      candidateAttr: accordionAttrs.trigger,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
    this.attachment = attachRef(this.opts.ref);
  }
  get props() {
    return get$2(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
}
_props = new WeakMap();
class AccordionSingleState extends AccordionBaseState {
  constructor(opts) {
    super(opts);
    __publicField(this, "opts");
    __publicField(this, "isMulti", false);
    this.opts = opts;
    this.includesItem = this.includesItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  includesItem(item) {
    return this.opts.value.current === item;
  }
  toggleItem(item) {
    this.opts.value.current = this.includesItem(item) ? "" : item;
  }
}
class AccordionMultiState extends AccordionBaseState {
  constructor(props) {
    super(props);
    __privateAdd(this, _value);
    __publicField(this, "isMulti", true);
    __privateSet(this, _value, props.value);
    this.includesItem = this.includesItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  includesItem(item) {
    return __privateGet(this, _value).current.includes(item);
  }
  toggleItem(item) {
    __privateGet(this, _value).current = this.includesItem(item) ? __privateGet(this, _value).current.filter((v) => v !== item) : [...__privateGet(this, _value).current, item];
  }
}
_value = new WeakMap();
class AccordionRootState {
  static create(props) {
    const { type, ...rest } = props;
    const rootState = type === "single" ? new AccordionSingleState(rest) : new AccordionMultiState(rest);
    return AccordionRootContext.set(rootState);
  }
}
const _AccordionItemState = class _AccordionItemState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _isActive, user_derived(() => this.root.includesItem(this.opts.value.current)));
    __privateAdd(this, _isDisabled, user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current));
    __publicField(this, "attachment");
    __privateAdd(this, _contentNode, state(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _props2, user_derived(() => ({
      id: this.opts.id.current,
      "data-state": getDataOpenClosed(this.isActive),
      "data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
      "data-orientation": this.root.opts.orientation.current,
      [accordionAttrs.item]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.root = opts.rootState;
    this.updateValue = this.updateValue.bind(this);
    this.attachment = attachRef(this.opts.ref);
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: boxWith(() => this.isActive)
    });
  }
  static create(props) {
    return AccordionItemContext.set(new _AccordionItemState({ ...props, rootState: AccordionRootContext.get() }));
  }
  get isActive() {
    return get$2(__privateGet(this, _isActive));
  }
  set isActive(value) {
    set(__privateGet(this, _isActive), value);
  }
  get isDisabled() {
    return get$2(__privateGet(this, _isDisabled));
  }
  set isDisabled(value) {
    set(__privateGet(this, _isDisabled), value);
  }
  get contentNode() {
    return get$2(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode), value, true);
  }
  updateValue() {
    this.root.toggleItem(this.opts.value.current);
  }
  get props() {
    return get$2(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
};
_isActive = new WeakMap();
_isDisabled = new WeakMap();
_contentNode = new WeakMap();
_props2 = new WeakMap();
let AccordionItemState = _AccordionItemState;
const _AccordionTriggerState = class _AccordionTriggerState {
  constructor(opts, itemState) {
    __publicField(this, "opts");
    __publicField(this, "itemState");
    __privateAdd(this, _root);
    __privateAdd(this, _isDisabled2, user_derived(() => this.opts.disabled.current || this.itemState.opts.disabled.current || __privateGet(this, _root).opts.disabled.current));
    __publicField(this, "attachment");
    __privateAdd(this, _props3, user_derived(() => ({
      id: this.opts.id.current,
      disabled: get$2(__privateGet(this, _isDisabled2)),
      "aria-expanded": boolToStr(this.itemState.isActive),
      "aria-disabled": boolToStr(get$2(__privateGet(this, _isDisabled2))),
      "data-disabled": boolToEmptyStrOrUndef(get$2(__privateGet(this, _isDisabled2))),
      "data-state": getDataOpenClosed(this.itemState.isActive),
      "data-orientation": __privateGet(this, _root).opts.orientation.current,
      [accordionAttrs.trigger]: "",
      tabindex: 0,
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.itemState = itemState;
    __privateSet(this, _root, itemState.root);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.attachment = attachRef(this.opts.ref);
  }
  static create(props) {
    return new _AccordionTriggerState(props, AccordionItemContext.get());
  }
  onclick(e) {
    if (get$2(__privateGet(this, _isDisabled2)) || e.button !== 0) {
      e.preventDefault();
      return;
    }
    this.itemState.updateValue();
  }
  onkeydown(e) {
    if (get$2(__privateGet(this, _isDisabled2))) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.itemState.updateValue();
      return;
    }
    __privateGet(this, _root).rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  get props() {
    return get$2(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
};
_root = new WeakMap();
_isDisabled2 = new WeakMap();
_props3 = new WeakMap();
let AccordionTriggerState = _AccordionTriggerState;
const _AccordionContentState = class _AccordionContentState {
  constructor(opts, item) {
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "attachment");
    __privateAdd(this, _originalStyles);
    __privateAdd(this, _isMountAnimationPrevented, false);
    __privateAdd(this, _dimensions, state(proxy({ width: 0, height: 0 })));
    __privateAdd(this, _open, user_derived(() => {
      if (this.opts.hiddenUntilFound.current) return this.item.isActive;
      return this.opts.forceMount.current || this.item.isActive;
    }));
    __privateAdd(this, _updateDimensions, ([_, node]) => {
      if (!node) return;
      afterTick(() => {
        const element2 = this.opts.ref.current;
        if (!element2) return;
        __privateGet(this, _originalStyles) ?? __privateSet(this, _originalStyles, {
          transitionDuration: element2.style.transitionDuration,
          animationName: element2.style.animationName
        });
        element2.style.transitionDuration = "0s";
        element2.style.animationName = "none";
        const rect = element2.getBoundingClientRect();
        set(__privateGet(this, _dimensions), { width: rect.width, height: rect.height }, true);
        if (!__privateGet(this, _isMountAnimationPrevented) && __privateGet(this, _originalStyles)) {
          element2.style.transitionDuration = __privateGet(this, _originalStyles).transitionDuration;
          element2.style.animationName = __privateGet(this, _originalStyles).animationName;
        }
      });
    });
    __privateAdd(this, _snippetProps, user_derived(() => ({ open: this.item.isActive })));
    __privateAdd(this, _props4, user_derived(() => ({
      id: this.opts.id.current,
      "data-state": getDataOpenClosed(this.item.isActive),
      "data-disabled": boolToEmptyStrOrUndef(this.item.isDisabled),
      "data-orientation": this.item.root.opts.orientation.current,
      [accordionAttrs.content]: "",
      style: {
        "--bits-accordion-content-height": `${get$2(__privateGet(this, _dimensions)).height}px`,
        "--bits-accordion-content-width": `${get$2(__privateGet(this, _dimensions)).width}px`
      },
      hidden: this.opts.hiddenUntilFound.current && !this.item.isActive ? "until-found" : void 0,
      ...this.opts.hiddenUntilFound.current && !this.shouldRender ? {} : {
        hidden: this.opts.hiddenUntilFound.current ? !this.shouldRender : this.opts.forceMount.current ? void 0 : !this.shouldRender
      },
      ...this.attachment
    })));
    this.opts = opts;
    this.item = item;
    __privateSet(this, _isMountAnimationPrevented, this.item.isActive);
    this.attachment = attachRef(this.opts.ref, (v) => this.item.contentNode = v);
    user_effect(() => {
      const rAF = requestAnimationFrame(() => {
        __privateSet(this, _isMountAnimationPrevented, false);
      });
      return () => cancelAnimationFrame(rAF);
    });
    watch.pre(
      [
        () => this.opts.ref.current,
        () => this.opts.hiddenUntilFound.current
      ],
      ([node, hiddenUntilFound]) => {
        if (!node || !hiddenUntilFound) return;
        const handleBeforeMatch = () => {
          if (this.item.isActive) return;
          requestAnimationFrame(() => {
            this.item.updateValue();
          });
        };
        return on(node, "beforematch", handleBeforeMatch);
      }
    );
    watch([() => this.open, () => this.opts.ref.current], __privateGet(this, _updateDimensions));
  }
  get open() {
    return get$2(__privateGet(this, _open));
  }
  set open(value) {
    set(__privateGet(this, _open), value);
  }
  static create(props) {
    return new _AccordionContentState(props, AccordionItemContext.get());
  }
  get shouldRender() {
    return this.item.contentPresence.shouldRender;
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props4));
  }
  set props(value) {
    set(__privateGet(this, _props4), value);
  }
};
_originalStyles = new WeakMap();
_isMountAnimationPrevented = new WeakMap();
_dimensions = new WeakMap();
_open = new WeakMap();
_updateDimensions = new WeakMap();
_snippetProps = new WeakMap();
_props4 = new WeakMap();
let AccordionContentState = _AccordionContentState;
const _AccordionHeaderState = class _AccordionHeaderState {
  constructor(opts, item) {
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "attachment");
    __privateAdd(this, _props5, user_derived(() => ({
      id: this.opts.id.current,
      role: "heading",
      "aria-level": this.opts.level.current,
      "data-heading-level": this.opts.level.current,
      "data-state": getDataOpenClosed(this.item.isActive),
      "data-orientation": this.item.root.opts.orientation.current,
      [accordionAttrs.header]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.item = item;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(props) {
    return new _AccordionHeaderState(props, AccordionItemContext.get());
  }
  get props() {
    return get$2(__privateGet(this, _props5));
  }
  set props(value) {
    set(__privateGet(this, _props5), value);
  }
};
_props5 = new WeakMap();
let AccordionHeaderState = _AccordionHeaderState;
function noop() {
}
function createId(prefixOrUid, uid) {
  return `bits-${prefixOrUid}`;
}
var root_2$h = from_html(`<div><!></div>`);
function Accordion($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), value = prop($$props, "value", 15), ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), onValueChange = prop($$props, "onValueChange", 3, noop), loop2 = prop($$props, "loop", 3, true), orientation = prop($$props, "orientation", 3, "vertical"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "disabled",
    "children",
    "child",
    "type",
    "value",
    "ref",
    "id",
    "onValueChange",
    "loop",
    "orientation"
  ]);
  function handleDefaultValue() {
    if (value() !== void 0) return;
    value($$props.type === "single" ? "" : []);
  }
  handleDefaultValue();
  watch.pre(() => value(), () => {
    handleDefaultValue();
  });
  const rootState = AccordionRootState.create({
    type: $$props.type,
    value: boxWith(() => value(), (v) => {
      value(v);
      onValueChange()(v);
    }),
    id: boxWith(() => id()),
    disabled: boxWith(() => disabled()),
    loop: boxWith(() => loop2()),
    orientation: boxWith(() => orientation()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$h();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$g = from_html(`<div><!></div>`);
function Accordion_item($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  const defaultId = createId(uid);
  let id = prop($$props, "id", 3, defaultId), disabled = prop($$props, "disabled", 3, false), value = prop($$props, "value", 3, defaultId), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "disabled",
    "value",
    "children",
    "child",
    "ref"
  ]);
  const itemState = AccordionItemState.create({
    value: boxWith(() => value()),
    disabled: boxWith(() => disabled()),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, itemState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$g();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$f = from_html(`<div><!></div>`);
function Accordion_header($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), level = prop($$props, "level", 3, 2), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "level",
    "children",
    "child",
    "ref"
  ]);
  const headerState = AccordionHeaderState.create({
    id: boxWith(() => id()),
    level: boxWith(() => level()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, headerState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$f();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$e = from_html(`<button><!></button>`);
function Accordion_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "disabled",
    "ref",
    "id",
    "children",
    "child"
  ]);
  const triggerState = AccordionTriggerState.create({
    disabled: boxWith(() => disabled()),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$e();
      attribute_effect(button, () => ({ type: "button", ...get$2(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$d = from_html(`<div><!></div>`);
function Accordion_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), forceMount = prop($$props, "forceMount", 3, false), hiddenUntilFound = prop($$props, "hiddenUntilFound", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "ref",
    "id",
    "forceMount",
    "children",
    "hiddenUntilFound"
  ]);
  const contentState = AccordionContentState.create({
    forceMount: boxWith(() => forceMount()),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    hiddenUntilFound: boxWith(() => hiddenUntilFound())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get$2(mergedProps), ...contentState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get$2($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$d();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
const dialogAttrs = createBitsAttrs({
  component: "dialog",
  parts: [
    "content",
    "trigger",
    "overlay",
    "title",
    "description",
    "close",
    "cancel",
    "action"
  ]
});
const DialogRootContext = new Context("Dialog.Root | AlertDialog.Root");
const _DialogRootState = class _DialogRootState {
  constructor(opts, parent) {
    __publicField(this, "opts");
    __privateAdd(this, _triggerNode, state(null));
    __privateAdd(this, _contentNode2, state(null));
    __privateAdd(this, _overlayNode, state(null));
    __privateAdd(this, _descriptionNode, state(null));
    __privateAdd(this, _contentId, state(void 0));
    __privateAdd(this, _titleId, state(void 0));
    __privateAdd(this, _triggerId, state(void 0));
    __privateAdd(this, _descriptionId, state(void 0));
    __privateAdd(this, _cancelNode, state(null));
    __privateAdd(this, _nestedOpenCount, state(0));
    __publicField(this, "depth");
    __publicField(this, "parent");
    __publicField(this, "contentPresence");
    __publicField(this, "overlayPresence");
    __publicField(this, "getBitsAttr", (part) => {
      return dialogAttrs.getAttr(part, this.opts.variant.current);
    });
    __privateAdd(this, _sharedProps, user_derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) })));
    this.opts = opts;
    this.parent = parent;
    this.depth = parent ? parent.depth + 1 : 0;
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      enabled: true,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    this.overlayPresence = new PresenceManager({
      ref: boxWith(() => this.overlayNode),
      open: this.opts.open,
      enabled: true
    });
    watch(
      () => this.opts.open.current,
      (isOpen) => {
        if (!this.parent) return;
        if (isOpen) {
          this.parent.incrementNested();
        } else {
          this.parent.decrementNested();
        }
      },
      { lazy: true }
    );
    onDestroyEffect(() => {
      var _a2;
      if (this.opts.open.current) {
        (_a2 = this.parent) == null ? void 0 : _a2.decrementNested();
      }
    });
  }
  static create(opts) {
    const parent = DialogRootContext.getOr(null);
    return DialogRootContext.set(new _DialogRootState(opts, parent));
  }
  get triggerNode() {
    return get$2(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode), value, true);
  }
  get contentNode() {
    return get$2(__privateGet(this, _contentNode2));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode2), value, true);
  }
  get overlayNode() {
    return get$2(__privateGet(this, _overlayNode));
  }
  set overlayNode(value) {
    set(__privateGet(this, _overlayNode), value, true);
  }
  get descriptionNode() {
    return get$2(__privateGet(this, _descriptionNode));
  }
  set descriptionNode(value) {
    set(__privateGet(this, _descriptionNode), value, true);
  }
  get contentId() {
    return get$2(__privateGet(this, _contentId));
  }
  set contentId(value) {
    set(__privateGet(this, _contentId), value, true);
  }
  get titleId() {
    return get$2(__privateGet(this, _titleId));
  }
  set titleId(value) {
    set(__privateGet(this, _titleId), value, true);
  }
  get triggerId() {
    return get$2(__privateGet(this, _triggerId));
  }
  set triggerId(value) {
    set(__privateGet(this, _triggerId), value, true);
  }
  get descriptionId() {
    return get$2(__privateGet(this, _descriptionId));
  }
  set descriptionId(value) {
    set(__privateGet(this, _descriptionId), value, true);
  }
  get cancelNode() {
    return get$2(__privateGet(this, _cancelNode));
  }
  set cancelNode(value) {
    set(__privateGet(this, _cancelNode), value, true);
  }
  get nestedOpenCount() {
    return get$2(__privateGet(this, _nestedOpenCount));
  }
  set nestedOpenCount(value) {
    set(__privateGet(this, _nestedOpenCount), value, true);
  }
  handleOpen() {
    if (this.opts.open.current) return;
    this.opts.open.current = true;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
  incrementNested() {
    var _a2;
    this.nestedOpenCount++;
    (_a2 = this.parent) == null ? void 0 : _a2.incrementNested();
  }
  decrementNested() {
    var _a2;
    if (this.nestedOpenCount === 0) return;
    this.nestedOpenCount--;
    (_a2 = this.parent) == null ? void 0 : _a2.decrementNested();
  }
  get sharedProps() {
    return get$2(__privateGet(this, _sharedProps));
  }
  set sharedProps(value) {
    set(__privateGet(this, _sharedProps), value);
  }
};
_triggerNode = new WeakMap();
_contentNode2 = new WeakMap();
_overlayNode = new WeakMap();
_descriptionNode = new WeakMap();
_contentId = new WeakMap();
_titleId = new WeakMap();
_triggerId = new WeakMap();
_descriptionId = new WeakMap();
_cancelNode = new WeakMap();
_nestedOpenCount = new WeakMap();
_sharedProps = new WeakMap();
let DialogRootState = _DialogRootState;
const _DialogTriggerState = class _DialogTriggerState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props6, user_derived(() => ({
      id: this.opts.id.current,
      "aria-haspopup": "dialog",
      "aria-expanded": boolToStr(this.root.opts.open.current),
      "aria-controls": this.root.contentId,
      [this.root.getBitsAttr("trigger")]: "",
      onkeydown: this.onkeydown,
      onclick: this.onclick,
      disabled: this.opts.disabled.current ? true : void 0,
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.triggerNode = v;
      this.root.triggerId = v == null ? void 0 : v.id;
    });
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _DialogTriggerState(opts, DialogRootContext.get());
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleOpen();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleOpen();
    }
  }
  get props() {
    return get$2(__privateGet(this, _props6));
  }
  set props(value) {
    set(__privateGet(this, _props6), value);
  }
};
_props6 = new WeakMap();
let DialogTriggerState = _DialogTriggerState;
const _DialogCloseState = class _DialogCloseState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props7, user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr(this.opts.variant.current)]: "",
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      disabled: this.opts.disabled.current ? true : void 0,
      tabindex: 0,
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _DialogCloseState(opts, DialogRootContext.get());
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleClose();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleClose();
    }
  }
  get props() {
    return get$2(__privateGet(this, _props7));
  }
  set props(value) {
    set(__privateGet(this, _props7), value);
  }
};
_props7 = new WeakMap();
let DialogCloseState = _DialogCloseState;
const _DialogTitleState = class _DialogTitleState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props8, user_derived(() => ({
      id: this.opts.id.current,
      role: "heading",
      "aria-level": this.opts.level.current,
      [this.root.getBitsAttr("title")]: "",
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.root.titleId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref);
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.titleId = id;
    });
  }
  static create(opts) {
    return new _DialogTitleState(opts, DialogRootContext.get());
  }
  get props() {
    return get$2(__privateGet(this, _props8));
  }
  set props(value) {
    set(__privateGet(this, _props8), value);
  }
};
_props8 = new WeakMap();
let DialogTitleState = _DialogTitleState;
const _DialogContentState = class _DialogContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps2, user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props9, user_derived(() => ({
      id: this.opts.id.current,
      role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
      "aria-modal": "true",
      "aria-describedby": this.root.descriptionId,
      "aria-labelledby": this.root.titleId,
      [this.root.getBitsAttr("content")]: "",
      style: {
        pointerEvents: "auto",
        outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0,
        "--bits-dialog-depth": this.root.depth,
        "--bits-dialog-nested-count": this.root.nestedOpenCount
      },
      tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
      "data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
      "data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v) => {
      this.root.contentNode = v;
      this.root.contentId = v == null ? void 0 : v.id;
    });
  }
  static create(opts) {
    return new _DialogContentState(opts, DialogRootContext.get());
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps2));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps2), value);
  }
  get props() {
    return get$2(__privateGet(this, _props9));
  }
  set props(value) {
    set(__privateGet(this, _props9), value);
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
};
_snippetProps2 = new WeakMap();
_props9 = new WeakMap();
let DialogContentState = _DialogContentState;
const _DialogOverlayState = class _DialogOverlayState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps3, user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props10, user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("overlay")]: "",
      style: {
        pointerEvents: "auto",
        "--bits-dialog-depth": this.root.depth,
        "--bits-dialog-nested-count": this.root.nestedOpenCount
      },
      "data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
      "data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.overlayNode = v);
  }
  static create(opts) {
    return new _DialogOverlayState(opts, DialogRootContext.get());
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps3));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps3), value);
  }
  get props() {
    return get$2(__privateGet(this, _props10));
  }
  set props(value) {
    set(__privateGet(this, _props10), value);
  }
  get shouldRender() {
    return this.root.overlayPresence.shouldRender;
  }
};
_snippetProps3 = new WeakMap();
_props10 = new WeakMap();
let DialogOverlayState = _DialogOverlayState;
var root_2$c = from_html(`<div><!></div>`);
function Dialog_title($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), level = prop($$props, "level", 3, 2), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "level"
  ]);
  const titleState = DialogTitleState.create({
    id: boxWith(() => id()),
    level: boxWith(() => level()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, titleState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$c();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Portal_consumer($$anchor, $$props) {
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children ?? noop$1);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
  const fallback = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback).opts;
}
class BitsConfigState {
  constructor(parent, opts) {
    __publicField(this, "opts");
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = boxWith(() => {
      var _a2, _b;
      const value = (_a2 = getter(currentOpts)) == null ? void 0 : _a2.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return (_b = getter(parent.opts)) == null ? void 0 : _b.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback) {
  return (getProp) => {
    const config = getBitsConfig();
    return boxWith(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$anchor, $$props) {
  push($$props, true);
  const to = resolvePortalToProp(() => $$props.to);
  const context = getAllContexts();
  let target = user_derived(getTarget);
  function getTarget() {
    if (!isBrowser || $$props.disabled) return null;
    let localTarget = null;
    if (typeof to.current === "string") {
      const target2 = document.querySelector(to.current);
      localTarget = target2;
    } else {
      localTarget = to.current;
    }
    return localTarget;
  }
  let instance;
  function unmountInstance() {
    if (instance) {
      unmount(instance);
      instance = null;
    }
  }
  watch([() => get$2(target), () => $$props.disabled], ([target2, disabled2]) => {
    if (!target2 || disabled2) {
      unmountInstance();
      return;
    }
    instance = mount(Portal_consumer, {
      target: target2,
      props: { children: $$props.children },
      context
    });
    return () => {
      unmountInstance();
    };
  });
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($$props.disabled) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
class CustomEventDispatcher {
  constructor(eventName, options = { bubbles: true, cancelable: true }) {
    __publicField(this, "eventName");
    __publicField(this, "options");
    this.eventName = eventName;
    this.options = options;
  }
  createEvent(detail) {
    return new CustomEvent(this.eventName, {
      ...this.options,
      detail
    });
  }
  dispatch(element2, detail) {
    const event2 = this.createEvent(detail);
    element2.dispatchEvent(event2);
    return event2;
  }
  listen(element2, callback, options) {
    const handler = (event2) => {
      callback(event2);
    };
    return on(element2, this.eventName, handler, options);
  }
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return (el == null ? void 0 : el.ownerDocument) ?? document;
}
function isClickTrulyOutside(event2, contentNode) {
  const { clientX, clientY } = event2;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function isMouseEvent(event2) {
  return event2.pointerType === "mouse";
}
function focus(element2, { select = false } = {}) {
  if (!element2 || !element2.focus)
    return;
  const doc = getDocument(element2);
  if (doc.activeElement === element2)
    return;
  const previouslyFocusedElement = doc.activeElement;
  element2.focus({ preventScroll: true });
  if (element2 !== previouslyFocusedElement && isSelectableInput(element2) && select) {
    element2.select();
  }
}
function focusFirst(candidates, { select = false } = {}, getActiveElement) {
  const previouslyFocusedElement = getActiveElement();
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (getActiveElement() !== previouslyFocusedElement)
      return true;
  }
}
let isUsingKeyboard = state(false);
const _IsUsingKeyboard = class _IsUsingKeyboard {
  constructor() {
    user_effect(() => {
      if (_IsUsingKeyboard._refs === 0) {
        _IsUsingKeyboard._cleanup = effect_root(() => {
          const callbacksToDispose = [];
          const handlePointer = (_) => {
            set(isUsingKeyboard, false);
          };
          const handleKeydown = (_) => {
            set(isUsingKeyboard, true);
          };
          callbacksToDispose.push(on(document, "pointerdown", handlePointer, { capture: true }), on(document, "pointermove", handlePointer, { capture: true }), on(document, "keydown", handleKeydown, { capture: true }));
          return executeCallbacks(...callbacksToDispose);
        });
      }
      _IsUsingKeyboard._refs++;
      return () => {
        var _a2;
        _IsUsingKeyboard._refs--;
        if (_IsUsingKeyboard._refs === 0) {
          set(isUsingKeyboard, false);
          (_a2 = _IsUsingKeyboard._cleanup) == null ? void 0 : _a2.call(_IsUsingKeyboard);
        }
      };
    });
  }
  get current() {
    return get$2(isUsingKeyboard);
  }
  set current(value) {
    set(isUsingKeyboard, value, true);
  }
};
__publicField(_IsUsingKeyboard, "_refs", 0);
// Reference counting to avoid multiple listeners.
__publicField(_IsUsingKeyboard, "_cleanup");
let IsUsingKeyboard = _IsUsingKeyboard;
/*!
* tabbable 6.4.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element2) {
  var _element$getRootNode;
  return element2 === null || element2 === void 0 ? void 0 : (_element$getRootNode = element2.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element2);
} : function(element2) {
  return element2 === null || element2 === void 0 ? void 0 : element2.ownerDocument;
};
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element2 = elementsToCheck.shift();
    if (_isInert(element2, false)) {
      continue;
    }
    if (element2.tagName === "SLOT") {
      var assigned = element2.assignedElements();
      var content = assigned.length ? assigned : element2.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element2,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element2, candidateSelector);
      if (validCandidate && options.filter(element2) && (includeContainer || !elements.includes(element2))) {
        candidates.push(element2);
      }
      var shadowRoot = element2.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element2);
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element2));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element2.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element2,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element2.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child2) {
    return child2.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (displayCheck === "full-native") {
    if ("checkVisibility" in node) {
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
  }
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === "full-native" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child2 = parentNode.children.item(i);
          if (child2.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child2.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element2 = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element2, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element2;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element2);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
function getTabbableOptions() {
  return {
    getShadowRoot: true,
    displayCheck: (
      // JSDOM does not support the `tabbable` library. To solve this we can
      // check if `ResizeObserver` is a real function (not polyfilled), which
      // determines if the current environment is JSDOM-like.
      typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    )
  };
}
function getTabbableFrom(currentNode, direction) {
  if (!isTabbable(currentNode, getTabbableOptions())) {
    return getTabbableFromFocusable(currentNode, direction);
  }
  const doc = getDocument(currentNode);
  const allTabbable = tabbable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allTabbable.reverse();
  const activeIndex = allTabbable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getTabbableFromFocusable(currentNode, direction) {
  const doc = getDocument(currentNode);
  if (!isFocusable(currentNode, getTabbableOptions()))
    return doc.body;
  const allFocusable = focusable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allFocusable.reverse();
  const activeIndex = allFocusable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  return arr1.every((value, index2) => isEqual(value, arr2[index2]));
}
function isEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b))
    return true;
  if (Array.isArray(a) && Array.isArray(b))
    return arraysAreEqual(a, b);
  if (typeof a === "object" && typeof b === "object")
    return isDeepEqual(a, b);
  return Object.is(a, b);
}
function isDeepEqual(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null)
    return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length)
    return false;
  for (const key2 of aKeys) {
    if (!bKeys.includes(key2))
      return false;
    if (!isEqual(a[key2], b[key2])) {
      return false;
    }
  }
  return true;
}
function getNextMatch(values, search, currentMatch) {
  const lowerSearch = search.toLowerCase();
  if (lowerSearch.endsWith(" ")) {
    const searchWithoutSpace = lowerSearch.slice(0, -1);
    const matchesWithoutSpace = values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace));
    if (matchesWithoutSpace.length <= 1) {
      return getNextMatch(values, searchWithoutSpace, currentMatch);
    }
    const currentMatchLowercase = currentMatch == null ? void 0 : currentMatch.toLowerCase();
    if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) {
      return currentMatch;
    }
    const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
    if (spacedMatches.length > 0) {
      const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
      let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
      const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
      return nextMatch2 || currentMatch;
    }
  }
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const normalizedLowerSearch = normalizedSearch.toLowerCase();
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value == null ? void 0 : value.toLowerCase().startsWith(normalizedLowerSearch));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
const defaultOptions = { afterMs: 1e4, onChange: noop };
function boxAutoReset(defaultValue, options) {
  const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
  let timeout = null;
  let value = state(proxy(defaultValue));
  function resetAfter() {
    return getWindow2().setTimeout(
      () => {
        set(value, defaultValue, true);
        onChange == null ? void 0 : onChange(defaultValue);
      },
      afterMs
    );
  }
  user_effect(() => {
    return () => {
      if (timeout) getWindow2().clearTimeout(timeout);
    };
  });
  return boxWith(() => get$2(value), (v) => {
    set(value, v, true);
    onChange == null ? void 0 : onChange(v);
    if (timeout) getWindow2().clearTimeout(timeout);
    timeout = resetAfter();
  });
}
class DOMTypeahead {
  constructor(opts) {
    __privateAdd(this, _opts2);
    __privateAdd(this, _search);
    __privateAdd(this, _onMatch, user_derived(() => {
      if (__privateGet(this, _opts2).onMatch) return __privateGet(this, _opts2).onMatch;
      return (node) => node.focus();
    }));
    __privateAdd(this, _getCurrentItem, user_derived(() => {
      if (__privateGet(this, _opts2).getCurrentItem) return __privateGet(this, _opts2).getCurrentItem;
      return __privateGet(this, _opts2).getActiveElement;
    }));
    __privateSet(this, _opts2, opts);
    __privateSet(this, _search, boxAutoReset("", { afterMs: 1e3, getWindow: opts.getWindow }));
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key2, candidates) {
    var _a2, _b;
    if (!candidates.length) return;
    __privateGet(this, _search).current = __privateGet(this, _search).current + key2;
    const currentItem = get$2(__privateGet(this, _getCurrentItem))();
    const currentMatch = ((_b = (_a2 = candidates.find((item) => item === currentItem)) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) ?? "";
    const values = candidates.map((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) ?? "";
    });
    const nextMatch = getNextMatch(values, __privateGet(this, _search).current, currentMatch);
    const newItem = candidates.find((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) === nextMatch;
    });
    if (newItem) get$2(__privateGet(this, _onMatch))(newItem);
    return newItem;
  }
  resetTypeahead() {
    __privateGet(this, _search).current = "";
  }
  get search() {
    return __privateGet(this, _search).current;
  }
}
_opts2 = new WeakMap();
_search = new WeakMap();
_onMatch = new WeakMap();
_getCurrentItem = new WeakMap();
class GraceArea {
  constructor(opts) {
    __privateAdd(this, _GraceArea_instances);
    __privateAdd(this, _opts3);
    __privateAdd(this, _enabled);
    __privateAdd(this, _isPointerInTransit);
    __privateAdd(this, _pointerGraceArea, state(null));
    __privateSet(this, _opts3, opts);
    __privateSet(this, _enabled, user_derived(() => __privateGet(this, _opts3).enabled()));
    __privateSet(this, _isPointerInTransit, boxAutoReset(false, {
      afterMs: opts.transitTimeout ?? 300,
      onChange: (value) => {
        var _a2, _b;
        if (!get$2(__privateGet(this, _enabled))) return;
        (_b = (_a2 = __privateGet(this, _opts3)).setIsPointerInTransit) == null ? void 0 : _b.call(_a2, value);
      },
      getWindow: () => getWindow$1(__privateGet(this, _opts3).triggerNode())
    }));
    watch([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled]) => {
      if (!triggerNode || !contentNode || !enabled) return;
      const handleTriggerLeave = (e) => {
        __privateMethod(this, _GraceArea_instances, createGraceArea_fn).call(this, e, contentNode);
      };
      const handleContentLeave = (e) => {
        __privateMethod(this, _GraceArea_instances, createGraceArea_fn).call(this, e, triggerNode);
      };
      return executeCallbacks(on(triggerNode, "pointerleave", handleTriggerLeave), on(contentNode, "pointerleave", handleContentLeave));
    });
    watch(() => get$2(__privateGet(this, _pointerGraceArea)), () => {
      const handleTrackPointerGrace = (e) => {
        var _a2, _b;
        if (!get$2(__privateGet(this, _pointerGraceArea))) return;
        const target = e.target;
        if (!isElement$1(target)) return;
        const pointerPosition = { x: e.clientX, y: e.clientY };
        const hasEnteredTarget = ((_a2 = opts.triggerNode()) == null ? void 0 : _a2.contains(target)) || ((_b = opts.contentNode()) == null ? void 0 : _b.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, get$2(__privateGet(this, _pointerGraceArea)));
        if (hasEnteredTarget) {
          __privateMethod(this, _GraceArea_instances, removeGraceArea_fn).call(this);
        } else if (isPointerOutsideGraceArea) {
          __privateMethod(this, _GraceArea_instances, removeGraceArea_fn).call(this);
          opts.onPointerExit();
        }
      };
      const doc = getDocument(opts.triggerNode() ?? opts.contentNode());
      if (!doc) return;
      return on(doc, "pointermove", handleTrackPointerGrace);
    });
  }
}
_opts3 = new WeakMap();
_enabled = new WeakMap();
_isPointerInTransit = new WeakMap();
_pointerGraceArea = new WeakMap();
_GraceArea_instances = new WeakSet();
removeGraceArea_fn = function() {
  set(__privateGet(this, _pointerGraceArea), null);
  __privateGet(this, _isPointerInTransit).current = false;
};
createGraceArea_fn = function(e, hoverTarget) {
  const currentTarget = e.currentTarget;
  if (!isHTMLElement$1(currentTarget)) return;
  const exitPoint = { x: e.clientX, y: e.clientY };
  const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
  const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
  const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
  const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
  set(__privateGet(this, _pointerGraceArea), graceArea, true);
  __privateGet(this, _isPointerInTransit).current = true;
};
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const tipPadding = padding * 1.5;
  switch (exitSide) {
    case "top":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x, y: exitPoint.y - tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "bottom":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x, y: exitPoint.y + tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      ];
    case "left":
      return [
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x - tipPadding, y: exitPoint.y },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "right":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + tipPadding, y: exitPoint.y },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      ];
  }
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q.x - r2.x) * (p.y - r2.y) >= (q.y - r2.y) * (p.x - r2.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q.x - r2.x) * (p.y - r2.y) >= (q.y - r2.y) * (p.x - r2.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
const CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
const CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
const MenuRootContext = new Context("Menu.Root");
const MenuMenuContext = new Context("Menu.Root | Menu.Sub");
const MenuContentContext = new Context("Menu.Content");
const MenuCheckboxGroupContext = new Context("Menu.CheckboxGroup");
const MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", { bubbles: false, cancelable: true });
const menuAttrs = createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
const _MenuRootState = class _MenuRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "isUsingKeyboard", new IsUsingKeyboard());
    __privateAdd(this, _ignoreCloseAutoFocus, state(false));
    __privateAdd(this, _isPointerInTransit2, state(false));
    __publicField(this, "getBitsAttr", (part) => {
      return menuAttrs.getAttr(part, this.opts.variant.current);
    });
    this.opts = opts;
  }
  static create(opts) {
    const root2 = new _MenuRootState(opts);
    return MenuRootContext.set(root2);
  }
  get ignoreCloseAutoFocus() {
    return get$2(__privateGet(this, _ignoreCloseAutoFocus));
  }
  set ignoreCloseAutoFocus(value) {
    set(__privateGet(this, _ignoreCloseAutoFocus), value, true);
  }
  get isPointerInTransit() {
    return get$2(__privateGet(this, _isPointerInTransit2));
  }
  set isPointerInTransit(value) {
    set(__privateGet(this, _isPointerInTransit2), value, true);
  }
};
_ignoreCloseAutoFocus = new WeakMap();
_isPointerInTransit2 = new WeakMap();
let MenuRootState = _MenuRootState;
const _MenuMenuState = class _MenuMenuState {
  constructor(opts, root2, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "parentMenu");
    __publicField(this, "contentId", boxWith(() => ""));
    __privateAdd(this, _contentNode3, state(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _triggerNode2, state(null));
    this.opts = opts;
    this.root = root2;
    this.parentMenu = parentMenu;
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    if (parentMenu) {
      watch(() => parentMenu.opts.open.current, () => {
        if (parentMenu.opts.open.current) return;
        this.opts.open.current = false;
      });
    }
  }
  static create(opts, root2) {
    return MenuMenuContext.set(new _MenuMenuState(opts, root2, null));
  }
  get contentNode() {
    return get$2(__privateGet(this, _contentNode3));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode3), value, true);
  }
  get triggerNode() {
    return get$2(__privateGet(this, _triggerNode2));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode2), value, true);
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
};
_contentNode3 = new WeakMap();
_triggerNode2 = new WeakMap();
let MenuMenuState = _MenuMenuState;
const _MenuContentState = class _MenuContentState {
  constructor(opts, parentMenu) {
    __privateAdd(this, _MenuContentState_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "rovingFocusGroup");
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _search2, state(""));
    __privateAdd(this, _timer, 0);
    __privateAdd(this, _handleTypeaheadSearch);
    __privateAdd(this, _mounted, state(false));
    __privateAdd(this, _isSub);
    __publicField(this, "onCloseAutoFocus", (e) => {
      var _a2, _b;
      (_b = (_a2 = this.opts.onCloseAutoFocus).current) == null ? void 0 : _b.call(_a2, e);
      if (e.defaultPrevented || __privateGet(this, _isSub)) return;
      if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
        e.preventDefault();
        this.parentMenu.triggerNode.focus();
      }
    });
    __privateAdd(this, _snippetProps4, user_derived(() => ({ open: this.parentMenu.opts.open.current })));
    __privateAdd(this, _props11, user_derived(() => ({
      id: this.opts.id.current,
      role: "menu",
      "aria-orientation": "vertical",
      [this.parentMenu.root.getBitsAttr("content")]: "",
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      onkeydown: this.onkeydown,
      onblur: this.onblur,
      onfocus: this.onfocus,
      dir: this.parentMenu.root.opts.dir.current,
      style: { pointerEvents: "auto" },
      ...this.attachment
    })));
    __publicField(this, "popperProps", { onCloseAutoFocus: (e) => this.onCloseAutoFocus(e) });
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.domContext = new DOMContext(opts.ref);
    this.attachment = attachRef(this.opts.ref, (v) => {
      if (this.parentMenu.contentNode !== v) {
        this.parentMenu.contentNode = v;
      }
    });
    parentMenu.contentId = opts.id;
    __privateSet(this, _isSub, opts.isSub ?? false);
    this.onkeydown = this.onkeydown.bind(this);
    this.onblur = this.onblur.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
    new GraceArea({
      contentNode: () => this.parentMenu.contentNode,
      triggerNode: () => this.parentMenu.triggerNode,
      enabled: () => {
        var _a2;
        return this.parentMenu.opts.open.current && Boolean((_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")));
      },
      onPointerExit: () => {
        this.parentMenu.opts.open.current = false;
      },
      setIsPointerInTransit: (value) => {
        this.parentMenu.root.isPointerInTransit = value;
      }
    });
    __privateSet(this, _handleTypeaheadSearch, new DOMTypeahead({
      getActiveElement: () => this.domContext.getActiveElement(),
      getWindow: () => this.domContext.getWindow()
    }).handleTypeaheadSearch);
    this.rovingFocusGroup = new RovingFocusGroup({
      rootNode: boxWith(() => this.parentMenu.contentNode),
      candidateAttr: this.parentMenu.root.getBitsAttr("item"),
      loop: this.opts.loop,
      orientation: boxWith(() => "vertical")
    });
    watch(() => this.parentMenu.contentNode, (contentNode) => {
      if (!contentNode) return;
      const handler = () => {
        afterTick(() => {
          if (!this.parentMenu.root.isUsingKeyboard.current) return;
          this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return MenuOpenEvent.listen(contentNode, handler);
    });
    user_effect(() => {
      if (!this.parentMenu.opts.open.current) {
        this.domContext.getWindow().clearTimeout(__privateGet(this, _timer));
      }
    });
  }
  static create(opts) {
    return MenuContentContext.set(new _MenuContentState(opts, MenuMenuContext.get()));
  }
  get search() {
    return get$2(__privateGet(this, _search2));
  }
  set search(value) {
    set(__privateGet(this, _search2), value, true);
  }
  get mounted() {
    return get$2(__privateGet(this, _mounted));
  }
  set mounted(value) {
    set(__privateGet(this, _mounted), value, true);
  }
  handleTabKeyDown(e) {
    let rootMenu = this.parentMenu;
    while (rootMenu.parentMenu !== null) {
      rootMenu = rootMenu.parentMenu;
    }
    if (!rootMenu.triggerNode) return;
    e.preventDefault();
    const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
    if (nodeToFocus) {
      this.parentMenu.root.ignoreCloseAutoFocus = true;
      rootMenu.onClose();
      afterTick(() => {
        nodeToFocus.focus();
        afterTick(() => {
          this.parentMenu.root.ignoreCloseAutoFocus = false;
        });
      });
    } else {
      this.domContext.getDocument().body.focus();
    }
  }
  onkeydown(e) {
    var _a2, _b;
    if (e.defaultPrevented) return;
    if (e.key === TAB) {
      this.handleTabKeyDown(e);
      return;
    }
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement$1(target) || !isHTMLElement$1(currentTarget)) return;
    const isKeydownInside = ((_a2 = target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)) == null ? void 0 : _a2.id) === this.parentMenu.contentId.current;
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
    if (kbdFocusedEl) return;
    if (e.code === "Space") return;
    const candidateNodes = __privateMethod(this, _MenuContentState_instances, getCandidateNodes_fn).call(this);
    if (isKeydownInside) {
      if (!isModifierKey && isCharacterKey) {
        __privateGet(this, _handleTypeaheadSearch).call(this, e.key, candidateNodes);
      }
    }
    if (((_b = e.target) == null ? void 0 : _b.id) !== this.parentMenu.contentId.current) return;
    if (!FIRST_LAST_KEYS.includes(e.key)) return;
    e.preventDefault();
    if (LAST_KEYS.includes(e.key)) {
      candidateNodes.reverse();
    }
    focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
  }
  onblur(e) {
    var _a2, _b;
    if (!isElement$1(e.currentTarget)) return;
    if (!isElement$1(e.target)) return;
    if (!((_b = (_a2 = e.currentTarget).contains) == null ? void 0 : _b.call(_a2, e.target))) {
      this.domContext.getWindow().clearTimeout(__privateGet(this, _timer));
      this.search = "";
    }
  }
  onfocus(_) {
    if (!this.parentMenu.root.isUsingKeyboard.current) return;
    afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return __privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this);
  }
  onItemLeave(e) {
    if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this) || this.parentMenu.root.isUsingKeyboard.current) return;
    const contentNode = this.parentMenu.contentNode;
    contentNode == null ? void 0 : contentNode.focus();
    this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this)) return true;
    return false;
  }
  handleInteractOutside(e) {
    var _a2;
    if (!isElementOrSVGElement(e.target)) return;
    const triggerId = (_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.id;
    if (e.target.id === triggerId) {
      e.preventDefault();
      return;
    }
    if (e.target.closest(`#${triggerId}`)) {
      e.preventDefault();
    }
  }
  get shouldRender() {
    return this.parentMenu.contentPresence.shouldRender;
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps4));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps4), value);
  }
  get props() {
    return get$2(__privateGet(this, _props11));
  }
  set props(value) {
    set(__privateGet(this, _props11), value);
  }
};
_search2 = new WeakMap();
_timer = new WeakMap();
_handleTypeaheadSearch = new WeakMap();
_mounted = new WeakMap();
_isSub = new WeakMap();
_MenuContentState_instances = new WeakSet();
getCandidateNodes_fn = function() {
  const node = this.parentMenu.contentNode;
  if (!node) return [];
  const candidates = Array.from(node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`));
  return candidates;
};
isPointerMovingToSubmenu_fn = function() {
  return this.parentMenu.root.isPointerInTransit;
};
_snippetProps4 = new WeakMap();
_props11 = new WeakMap();
let MenuContentState = _MenuContentState;
class MenuItemSharedState {
  constructor(opts, content) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "attachment");
    __privateAdd(this, _isFocused, state(false));
    __privateAdd(this, _props12, user_derived(() => ({
      id: this.opts.id.current,
      tabindex: -1,
      role: "menuitem",
      "aria-disabled": boolToStr(this.opts.disabled.current),
      "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
      "data-highlighted": get$2(__privateGet(this, _isFocused)) ? "" : void 0,
      [this.content.parentMenu.root.getBitsAttr("item")]: "",
      //
      onpointermove: this.onpointermove,
      onpointerleave: this.onpointerleave,
      onfocus: this.onfocus,
      onblur: this.onblur,
      ...this.attachment
    })));
    this.opts = opts;
    this.content = content;
    this.attachment = attachRef(this.opts.ref);
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
  }
  onpointermove(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    if (this.opts.disabled.current) {
      this.content.onItemLeave(e);
    } else {
      const defaultPrevented = this.content.onItemEnter();
      if (defaultPrevented) return;
      const item = e.currentTarget;
      if (!isHTMLElement$1(item)) return;
      item.focus();
    }
  }
  onpointerleave(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    this.content.onItemLeave(e);
  }
  onfocus(e) {
    afterTick(() => {
      if (e.defaultPrevented || this.opts.disabled.current) return;
      set(__privateGet(this, _isFocused), true);
    });
  }
  onblur(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      set(__privateGet(this, _isFocused), false);
    });
  }
  get props() {
    return get$2(__privateGet(this, _props12));
  }
  set props(value) {
    set(__privateGet(this, _props12), value);
  }
}
_isFocused = new WeakMap();
_props12 = new WeakMap();
const _MenuItemState = class _MenuItemState {
  constructor(opts, item) {
    __privateAdd(this, _MenuItemState_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "root");
    __privateAdd(this, _isPointerDown, false);
    __privateAdd(this, _props13, user_derived(() => mergeProps(this.item.props, {
      onclick: this.onclick,
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown
    })));
    this.opts = opts;
    this.item = item;
    this.root = item.content.parentMenu.root;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  static create(opts) {
    const item = new MenuItemSharedState(opts, MenuContentContext.get());
    return new _MenuItemState(opts, item);
  }
  onkeydown(e) {
    const isTypingAhead = this.item.content.search !== "";
    if (this.item.opts.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SELECTION_KEYS.includes(e.key)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(_) {
    if (this.item.opts.disabled.current) return;
    __privateMethod(this, _MenuItemState_instances, handleSelect_fn).call(this);
  }
  onpointerup(e) {
    var _a2;
    if (e.defaultPrevented) return;
    if (!__privateGet(this, _isPointerDown)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      (_a2 = e.currentTarget) == null ? void 0 : _a2.click();
    }
  }
  onpointerdown(_) {
    __privateSet(this, _isPointerDown, true);
  }
  get props() {
    return get$2(__privateGet(this, _props13));
  }
  set props(value) {
    set(__privateGet(this, _props13), value);
  }
};
_isPointerDown = new WeakMap();
_MenuItemState_instances = new WeakSet();
handleSelect_fn = function() {
  if (this.item.opts.disabled.current) return;
  const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
  this.opts.onSelect.current(selectEvent);
  if (selectEvent.defaultPrevented) {
    this.item.content.parentMenu.root.isUsingKeyboard.current = false;
    return;
  }
  if (this.opts.closeOnSelect.current) {
    this.item.content.parentMenu.root.opts.onClose();
  }
};
_props13 = new WeakMap();
let MenuItemState = _MenuItemState;
const _MenuCheckboxItemState = class _MenuCheckboxItemState {
  constructor(opts, item, group = null) {
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "group");
    __privateAdd(this, _snippetProps5, user_derived(() => ({
      checked: this.opts.checked.current,
      indeterminate: this.opts.indeterminate.current
    })));
    __privateAdd(this, _props14, user_derived(() => ({
      ...this.item.props,
      role: "menuitemcheckbox",
      "aria-checked": getAriaChecked(this.opts.checked.current, this.opts.indeterminate.current),
      "data-state": getCheckedState(this.opts.checked.current),
      [this.item.root.getBitsAttr("checkbox-item")]: ""
    })));
    this.opts = opts;
    this.item = item;
    this.group = group;
    if (this.group) {
      watch(() => this.group.opts.value.current, (groupValues) => {
        this.opts.checked.current = groupValues.includes(this.opts.value.current);
      });
      watch(() => this.opts.checked.current, (checked) => {
        if (checked) {
          this.group.addValue(this.opts.value.current);
        } else {
          this.group.removeValue(this.opts.value.current);
        }
      });
    }
  }
  static create(opts, checkboxGroup) {
    const item = new MenuItemState(opts, new MenuItemSharedState(opts, MenuContentContext.get()));
    return new _MenuCheckboxItemState(opts, item, checkboxGroup);
  }
  toggleChecked() {
    if (this.opts.indeterminate.current) {
      this.opts.indeterminate.current = false;
      this.opts.checked.current = true;
    } else {
      this.opts.checked.current = !this.opts.checked.current;
    }
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps5));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps5), value);
  }
  get props() {
    return get$2(__privateGet(this, _props14));
  }
  set props(value) {
    set(__privateGet(this, _props14), value);
  }
};
_snippetProps5 = new WeakMap();
_props14 = new WeakMap();
let MenuCheckboxItemState = _MenuCheckboxItemState;
const _DropdownMenuTriggerState = class _DropdownMenuTriggerState {
  constructor(opts, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "attachment");
    __publicField(this, "onclick", (e) => {
      if (this.opts.disabled.current || e.detail !== 0) return;
      this.parentMenu.toggleOpen();
      e.preventDefault();
    });
    __publicField(this, "onpointerdown", (e) => {
      if (this.opts.disabled.current) return;
      if (e.pointerType === "touch") return e.preventDefault();
      if (e.button === 0 && e.ctrlKey === false) {
        this.parentMenu.toggleOpen();
        if (!this.parentMenu.opts.open.current) e.preventDefault();
      }
    });
    __publicField(this, "onpointerup", (e) => {
      if (this.opts.disabled.current) return;
      if (e.pointerType === "touch") {
        e.preventDefault();
        this.parentMenu.toggleOpen();
      }
    });
    __publicField(this, "onkeydown", (e) => {
      if (this.opts.disabled.current) return;
      if (e.key === SPACE || e.key === ENTER) {
        this.parentMenu.toggleOpen();
        e.preventDefault();
        return;
      }
      if (e.key === ARROW_DOWN) {
        this.parentMenu.onOpen();
        e.preventDefault();
      }
    });
    __privateAdd(this, _ariaControls, user_derived(() => {
      if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
      return void 0;
    }));
    __privateAdd(this, _props15, user_derived(() => ({
      id: this.opts.id.current,
      disabled: this.opts.disabled.current,
      "aria-haspopup": "menu",
      "aria-expanded": boolToStr(this.parentMenu.opts.open.current),
      "aria-controls": get$2(__privateGet(this, _ariaControls)),
      "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      [this.parentMenu.root.getBitsAttr("trigger")]: "",
      //
      onclick: this.onclick,
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.attachment = attachRef(this.opts.ref, (v) => this.parentMenu.triggerNode = v);
  }
  static create(opts) {
    return new _DropdownMenuTriggerState(opts, MenuMenuContext.get());
  }
  get props() {
    return get$2(__privateGet(this, _props15));
  }
  set props(value) {
    set(__privateGet(this, _props15), value);
  }
};
_ariaControls = new WeakMap();
_props15 = new WeakMap();
let DropdownMenuTriggerState = _DropdownMenuTriggerState;
const _MenuCheckboxGroupState = class _MenuCheckboxGroupState {
  constructor(opts, content) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _groupHeadingId, state(null));
    __privateAdd(this, _props16, user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("checkbox-group")]: "",
      role: "group",
      "aria-labelledby": this.groupHeadingId,
      ...this.attachment
    })));
    this.opts = opts;
    this.content = content;
    this.root = content.parentMenu.root;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(opts) {
    return MenuCheckboxGroupContext.set(new _MenuCheckboxGroupState(opts, MenuContentContext.get()));
  }
  get groupHeadingId() {
    return get$2(__privateGet(this, _groupHeadingId));
  }
  set groupHeadingId(value) {
    set(__privateGet(this, _groupHeadingId), value, true);
  }
  addValue(checkboxValue) {
    if (!checkboxValue) return;
    if (!this.opts.value.current.includes(checkboxValue)) {
      const newValue = [...snapshot(this.opts.value.current), checkboxValue];
      this.opts.value.current = newValue;
      if (arraysAreEqual(this.opts.value.current, newValue)) return;
      this.opts.onValueChange.current(newValue);
    }
  }
  removeValue(checkboxValue) {
    if (!checkboxValue) return;
    const index2 = this.opts.value.current.indexOf(checkboxValue);
    if (index2 === -1) return;
    const newValue = this.opts.value.current.filter((v) => v !== checkboxValue);
    this.opts.value.current = newValue;
    if (arraysAreEqual(this.opts.value.current, newValue)) return;
    this.opts.onValueChange.current(newValue);
  }
  get props() {
    return get$2(__privateGet(this, _props16));
  }
  set props(value) {
    set(__privateGet(this, _props16), value);
  }
};
_groupHeadingId = new WeakMap();
_props16 = new WeakMap();
let MenuCheckboxGroupState = _MenuCheckboxGroupState;
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
const _DismissibleLayerState = class _DismissibleLayerState {
  constructor(opts) {
    __privateAdd(this, _DismissibleLayerState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _interactOutsideProp);
    __privateAdd(this, _behaviorType);
    __privateAdd(this, _interceptedEvents, { pointerdown: false });
    __privateAdd(this, _isResponsibleLayer, false);
    __privateAdd(this, _isFocusInsideDOMTree, false);
    __privateAdd(this, _documentObj);
    __privateAdd(this, _onFocusOutside);
    __privateAdd(this, _unsubClickListener, noop);
    __privateAdd(this, _handleFocus, (event2) => {
      if (event2.defaultPrevented) return;
      if (!this.opts.ref.current) return;
      afterTick(() => {
        var _a2, _b;
        if (!this.opts.ref.current || __privateGet(this, _isTargetWithinLayer).call(this, event2.target)) return;
        if (event2.target && !__privateGet(this, _isFocusInsideDOMTree)) {
          (_b = (_a2 = __privateGet(this, _onFocusOutside)).current) == null ? void 0 : _b.call(_a2, event2);
        }
      });
    });
    __privateAdd(this, _handleDismiss, (e) => {
      let event2 = e;
      if (event2.defaultPrevented) {
        event2 = createWrappedEvent(e);
      }
      __privateGet(this, _interactOutsideProp).current(e);
    });
    __privateAdd(this, _handleInteractOutside, debounce(
      (e) => {
        if (!this.opts.ref.current) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
        if (!__privateGet(this, _isResponsibleLayer) || __privateMethod(this, _DismissibleLayerState_instances, isAnyEventIntercepted_fn).call(this) || !isEventValid) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        let event2 = e;
        if (event2.defaultPrevented) {
          event2 = createWrappedEvent(event2);
        }
        if (__privateGet(this, _behaviorType).current !== "close" && __privateGet(this, _behaviorType).current !== "defer-otherwise-close") {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        if (e.pointerType === "touch") {
          __privateGet(this, _unsubClickListener).call(this);
          __privateSet(this, _unsubClickListener, on(__privateGet(this, _documentObj), "click", __privateGet(this, _handleDismiss), { once: true }));
        } else {
          __privateGet(this, _interactOutsideProp).current(event2);
        }
      },
      10
    ));
    __privateAdd(this, _markInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = true;
    });
    __privateAdd(this, _markNonInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = false;
    });
    __privateAdd(this, _markResponsibleLayer, () => {
      if (!this.opts.ref.current) return;
      __privateSet(this, _isResponsibleLayer, isResponsibleLayer(this.opts.ref.current));
    });
    __privateAdd(this, _isTargetWithinLayer, (target) => {
      if (!this.opts.ref.current) return false;
      return isOrContainsTarget(this.opts.ref.current, target);
    });
    __privateAdd(this, _resetState, debounce(
      () => {
        for (const eventType in __privateGet(this, _interceptedEvents)) {
          __privateGet(this, _interceptedEvents)[eventType] = false;
        }
        __privateSet(this, _isResponsibleLayer, false);
      },
      20
    ));
    __privateAdd(this, _onfocuscapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, true);
    });
    __privateAdd(this, _onblurcapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, false);
    });
    __publicField(this, "props", {
      onfocuscapture: __privateGet(this, _onfocuscapture),
      onblurcapture: __privateGet(this, _onblurcapture)
    });
    this.opts = opts;
    __privateSet(this, _behaviorType, opts.interactOutsideBehavior);
    __privateSet(this, _interactOutsideProp, opts.onInteractOutside);
    __privateSet(this, _onFocusOutside, opts.onFocusOutside);
    user_effect(() => {
      __privateSet(this, _documentObj, getOwnerDocument(this.opts.ref.current));
    });
    let unsubEvents = noop;
    const cleanup = () => {
      __privateGet(this, _resetState).call(this);
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      unsubEvents();
    };
    watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!this.opts.enabled.current || !this.opts.ref.current) return;
      afterSleep(1, () => {
        if (!this.opts.ref.current) return;
        globalThis.bitsDismissableLayers.set(this, __privateGet(this, _behaviorType));
        unsubEvents();
        unsubEvents = __privateMethod(this, _DismissibleLayerState_instances, addEventListeners_fn).call(this);
      });
      return cleanup;
    });
    onDestroyEffect(() => {
      __privateGet(this, _resetState).destroy();
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      __privateGet(this, _unsubClickListener).call(this);
      unsubEvents();
    });
  }
  static create(opts) {
    return new _DismissibleLayerState(opts);
  }
};
_interactOutsideProp = new WeakMap();
_behaviorType = new WeakMap();
_interceptedEvents = new WeakMap();
_isResponsibleLayer = new WeakMap();
_isFocusInsideDOMTree = new WeakMap();
_documentObj = new WeakMap();
_onFocusOutside = new WeakMap();
_unsubClickListener = new WeakMap();
_handleFocus = new WeakMap();
_DismissibleLayerState_instances = new WeakSet();
addEventListeners_fn = function() {
  return executeCallbacks(
    /**
     * CAPTURE INTERACTION START
     * mark interaction-start event as intercepted.
     * mark responsible layer during interaction start
     * to avoid checking if is responsible layer during interaction end
     * when a new floating element may have been opened.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markInterceptedEvent), __privateGet(this, _markResponsibleLayer)), { capture: true }),
    /**
     * BUBBLE INTERACTION START
     * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
     * to avoid prematurely checking if other events were intercepted.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markNonInterceptedEvent), __privateGet(this, _handleInteractOutside))),
    /**
     * HANDLE FOCUS OUTSIDE
     */
    on(__privateGet(this, _documentObj), "focusin", __privateGet(this, _handleFocus))
  );
};
_handleDismiss = new WeakMap();
_handleInteractOutside = new WeakMap();
_markInterceptedEvent = new WeakMap();
_markNonInterceptedEvent = new WeakMap();
_markResponsibleLayer = new WeakMap();
_isTargetWithinLayer = new WeakMap();
_resetState = new WeakMap();
isAnyEventIntercepted_fn = function() {
  const i = Object.values(__privateGet(this, _interceptedEvents)).some(Boolean);
  return i;
};
_onfocuscapture = new WeakMap();
_onblurcapture = new WeakMap();
let DismissibleLayerState = _DismissibleLayerState;
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostDismissableLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  const target = e.target;
  if (!isElementOrSVGElement(target)) return false;
  const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
  if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
  if ("button" in e && e.button === 0 && targetIsContextMenuTrigger) return true;
  const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
  if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop2) => {
      if (prop2 === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop2 === "target") {
        return capturedTarget;
      }
      if (prop2 === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop2 === "defaultPrevented") {
        return isPrevented;
      }
      if (prop2 in target) {
        return target[prop2];
      }
      return e[prop2];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onFocusOutside = prop($$props, "onFocusOutside", 3, noop), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false);
  const dismissibleLayerState = DismissibleLayerState.create({
    id: boxWith(() => $$props.id),
    interactOutsideBehavior: boxWith(() => interactOutsideBehavior()),
    onInteractOutside: boxWith(() => onInteractOutside()),
    enabled: boxWith(() => $$props.enabled),
    onFocusOutside: boxWith(() => onFocusOutside()),
    isValidEvent: boxWith(() => isValidEvent2()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1, () => ({ props: dismissibleLayerState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
const _EscapeLayerState = class _EscapeLayerState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _addEventListener, () => {
      return on(this.domContext.getDocument(), "keydown", __privateGet(this, _onkeydown), { passive: false });
    });
    __privateAdd(this, _onkeydown, (e) => {
      if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
      const clonedEvent = new KeyboardEvent(e.type, e);
      e.preventDefault();
      const behaviorType = this.opts.escapeKeydownBehavior.current;
      if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
      this.opts.onEscapeKeydown.current(clonedEvent);
    });
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = __privateGet(this, _addEventListener).call(this);
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  static create(opts) {
    return new _EscapeLayerState(opts);
  }
};
_addEventListener = new WeakMap();
_onkeydown = new WeakMap();
let EscapeLayerState = _EscapeLayerState;
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$anchor, $$props) {
  push($$props, true);
  let escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "close"), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop);
  EscapeLayerState.create({
    escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior()),
    onEscapeKeydown: boxWith(() => onEscapeKeydown()),
    enabled: boxWith(() => $$props.enabled),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
const _FocusScopeManager = class _FocusScopeManager {
  constructor() {
    __privateAdd(this, _scopeStack, simpleBox([]));
    __privateAdd(this, _focusHistory, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _preFocusHistory, /* @__PURE__ */ new WeakMap());
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new _FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      __privateGet(this, _preFocusHistory).set(scope, activeElement);
    }
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    __privateGet(this, _scopeStack).current.unshift(scope);
  }
  unregister(scope) {
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    const next2 = this.getActive();
    if (next2) {
      next2.resume();
    }
  }
  getActive() {
    return __privateGet(this, _scopeStack).current[0];
  }
  setFocusMemory(scope, element2) {
    __privateGet(this, _focusHistory).set(scope, element2);
  }
  getFocusMemory(scope) {
    return __privateGet(this, _focusHistory).get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
  setPreFocusMemory(scope, element2) {
    __privateGet(this, _preFocusHistory).set(scope, element2);
  }
  getPreFocusMemory(scope) {
    return __privateGet(this, _preFocusHistory).get(scope);
  }
  clearPreFocusMemory(scope) {
    __privateGet(this, _preFocusHistory).delete(scope);
  }
};
_scopeStack = new WeakMap();
_focusHistory = new WeakMap();
_preFocusHistory = new WeakMap();
__publicField(_FocusScopeManager, "instance");
let FocusScopeManager = _FocusScopeManager;
const _FocusScope = class _FocusScope {
  constructor(opts) {
    __privateAdd(this, _FocusScope_instances);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _container, null);
    __privateAdd(this, _manager, FocusScopeManager.getInstance());
    __privateAdd(this, _cleanupFns, []);
    __privateAdd(this, _opts4);
    __privateSet(this, _opts4, opts);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  pause() {
    __privateSet(this, _paused, true);
  }
  resume() {
    __privateSet(this, _paused, false);
  }
  mount(container) {
    if (__privateGet(this, _container)) {
      this.unmount();
    }
    __privateSet(this, _container, container);
    __privateGet(this, _manager).register(this);
    __privateMethod(this, _FocusScope_instances, setupEventListeners_fn).call(this);
    __privateMethod(this, _FocusScope_instances, handleOpenAutoFocus_fn).call(this);
  }
  unmount() {
    if (!__privateGet(this, _container)) return;
    __privateMethod(this, _FocusScope_instances, cleanup_fn).call(this);
    __privateMethod(this, _FocusScope_instances, handleCloseAutoFocus_fn).call(this);
    __privateGet(this, _manager).unregister(this);
    __privateGet(this, _manager).clearPreFocusMemory(this);
    __privateSet(this, _container, null);
  }
  static use(opts) {
    let scope = null;
    watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
      if (ref && enabled) {
        if (!scope) {
          scope = new _FocusScope(opts);
        }
        scope.mount(ref);
      } else if (scope) {
        scope.unmount();
        scope = null;
      }
    });
    onDestroyEffect(() => {
      scope == null ? void 0 : scope.unmount();
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
};
_paused = new WeakMap();
_container = new WeakMap();
_manager = new WeakMap();
_cleanupFns = new WeakMap();
_opts4 = new WeakMap();
_FocusScope_instances = new WeakSet();
cleanup_fn = function() {
  for (const fn of __privateGet(this, _cleanupFns)) {
    fn();
  }
  __privateSet(this, _cleanupFns, []);
};
handleOpenAutoFocus_fn = function() {
  if (!__privateGet(this, _container)) return;
  const event2 = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _opts4).onOpenAutoFocus.current(event2);
  if (!event2.defaultPrevented) {
    requestAnimationFrame(() => {
      if (!__privateGet(this, _container)) return;
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      if (firstTabbable) {
        firstTabbable.focus();
        __privateGet(this, _manager).setFocusMemory(this, firstTabbable);
      } else {
        __privateGet(this, _container).focus();
      }
    });
  }
};
handleCloseAutoFocus_fn = function() {
  var _a2, _b;
  const event2 = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
  (_b = (_a2 = __privateGet(this, _opts4).onCloseAutoFocus).current) == null ? void 0 : _b.call(_a2, event2);
  if (!event2.defaultPrevented) {
    const preFocusedElement = __privateGet(this, _manager).getPreFocusMemory(this);
    if (preFocusedElement && document.contains(preFocusedElement)) {
      try {
        preFocusedElement.focus();
      } catch {
        document.body.focus();
      }
    }
  }
};
setupEventListeners_fn = function() {
  if (!__privateGet(this, _container) || !__privateGet(this, _opts4).trap.current) return;
  const container = __privateGet(this, _container);
  const doc = container.ownerDocument;
  const handleFocus = (e) => {
    if (__privateGet(this, _paused) || !__privateGet(this, _manager).isActiveScope(this)) return;
    const target = e.target;
    if (!target) return;
    const isInside = container.contains(target);
    if (isInside) {
      __privateGet(this, _manager).setFocusMemory(this, target);
    } else {
      const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
      if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
        e.preventDefault();
        lastFocused.focus();
      } else {
        const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
        const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
        (firstTabbable || firstFocusable || container).focus();
      }
    }
  };
  const handleKeydown = (e) => {
    if (!__privateGet(this, _opts4).loop || __privateGet(this, _paused) || e.key !== "Tab") return;
    if (!__privateGet(this, _manager).isActiveScope(this)) return;
    const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
    if (tabbables.length < 2) return;
    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    if (!e.shiftKey && doc.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && doc.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };
  __privateGet(this, _cleanupFns).push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
  const observer = new MutationObserver(() => {
    const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
    if (lastFocused && !container.contains(lastFocused)) {
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
      const elementToFocus = firstTabbable || firstFocusable;
      if (elementToFocus) {
        elementToFocus.focus();
        __privateGet(this, _manager).setFocusMemory(this, elementToFocus);
      } else {
        container.focus();
      }
    }
  });
  observer.observe(container, { childList: true, subtree: true });
  __privateGet(this, _cleanupFns).push(() => observer.disconnect());
};
getTabbables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return tabbable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
getFirstTabbable_fn = function() {
  const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
  return tabbables[0] || null;
};
getAllFocusables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return focusable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
let FocusScope = _FocusScope;
function Focus_scope($$anchor, $$props) {
  push($$props, true);
  let enabled = prop($$props, "enabled", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), loop2 = prop($$props, "loop", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop);
  const focusScopeState = FocusScope.use({
    enabled: boxWith(() => enabled()),
    trap: boxWith(() => trapFocus()),
    loop: loop2(),
    onCloseAutoFocus: boxWith(() => onCloseAutoFocus()),
    onOpenAutoFocus: boxWith(() => onOpenAutoFocus()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.focusScope ?? noop$1, () => ({ props: focusScopeState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
const _TextSelectionLayerState = class _TextSelectionLayerState {
  constructor(opts) {
    __privateAdd(this, _TextSelectionLayerState_instances);
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _unsubSelectionLock, noop);
    __privateAdd(this, _pointerdown, (e) => {
      const node = this.opts.ref.current;
      const target = e.target;
      if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !this.opts.enabled.current) return;
      if (!isHighestLayer(this) || !contains(node, target)) return;
      this.opts.onPointerDown.current(e);
      if (e.defaultPrevented) return;
      __privateSet(this, _unsubSelectionLock, preventTextSelectionOverflow(node, this.domContext.getDocument().body));
    });
    __privateAdd(this, _resetSelectionLock, () => {
      __privateGet(this, _unsubSelectionLock).call(this);
      __privateSet(this, _unsubSelectionLock, noop);
    });
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop;
    watch(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = __privateMethod(this, _TextSelectionLayerState_instances, addEventListeners_fn2).call(this);
      }
      return () => {
        unsubEvents();
        __privateGet(this, _resetSelectionLock).call(this);
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
  static create(opts) {
    return new _TextSelectionLayerState(opts);
  }
};
_unsubSelectionLock = new WeakMap();
_TextSelectionLayerState_instances = new WeakSet();
addEventListeners_fn2 = function() {
  return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", __privateGet(this, _pointerdown)), on(this.domContext.getDocument(), "pointerup", composeHandlers(__privateGet(this, _resetSelectionLock), this.opts.onPointerUp.current)));
};
_pointerdown = new WeakMap();
_resetSelectionLock = new WeakMap();
let TextSelectionLayerState = _TextSelectionLayerState;
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$anchor, $$props) {
  push($$props, true);
  let preventOverflowTextSelection = prop($$props, "preventOverflowTextSelection", 3, true), onPointerDown = prop($$props, "onPointerDown", 3, noop), onPointerUp = prop($$props, "onPointerUp", 3, noop);
  TextSelectionLayerState.create({
    id: boxWith(() => $$props.id),
    onPointerDown: boxWith(() => onPointerDown()),
    onPointerUp: boxWith(() => onPointerUp()),
    enabled: boxWith(() => $$props.enabled && preventOverflowTextSelection()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function useId(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
  constructor(factory) {
    __privateAdd(this, _SharedState_instances);
    __privateAdd(this, _factory);
    __privateAdd(this, _subscribers, 0);
    __privateAdd(this, _state, state());
    __privateAdd(this, _scope);
    __privateSet(this, _factory, factory);
  }
  get(...args) {
    __privateSet(this, _subscribers, __privateGet(this, _subscribers) + 1);
    if (get$2(__privateGet(this, _state)) === void 0) {
      __privateSet(this, _scope, effect_root(() => {
        set(__privateGet(this, _state), __privateGet(this, _factory).call(this, ...args), true);
      }));
    }
    user_effect(() => {
      return () => {
        __privateMethod(this, _SharedState_instances, dispose_fn).call(this);
      };
    });
    return get$2(__privateGet(this, _state));
  }
}
_factory = new WeakMap();
_subscribers = new WeakMap();
_state = new WeakMap();
_scope = new WeakMap();
_SharedState_instances = new WeakSet();
dispose_fn = function() {
  __privateSet(this, _subscribers, __privateGet(this, _subscribers) - 1);
  if (__privateGet(this, _scope) && __privateGet(this, _subscribers) <= 0) {
    __privateGet(this, _scope).call(this);
    set(__privateGet(this, _state), void 0);
    __privateSet(this, _scope, void 0);
  }
};
const lockMap = new SvelteMap();
let initialBodyStyle = state(null);
let stopTouchMoveListener = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = boxWith(() => {
  for (const value of lockMap.values()) {
    if (value) return true;
  }
  return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
  function resetBodyStyle() {
    document.body.setAttribute("style", get$2(initialBodyStyle) ?? "");
    document.body.style.removeProperty("--scrollbar-width");
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    set(initialBodyStyle, null);
  }
  function cancelPendingCleanup() {
    if (cleanupTimeoutId === null) return;
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }
  function scheduleCleanupIfNoNewLocks(delay, callback) {
    cancelPendingCleanup();
    isInCleanupTransition = true;
    cleanupScheduledAt = Date.now();
    const currentCleanupId = cleanupScheduledAt;
    const cleanupFn = () => {
      cleanupTimeoutId = null;
      if (cleanupScheduledAt !== currentCleanupId) return;
      if (!isAnyLocked(lockMap)) {
        isInCleanupTransition = false;
        callback();
      } else {
        isInCleanupTransition = false;
      }
    };
    const actualDelay = delay === null ? 24 : delay;
    cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
  }
  function ensureInitialStyleCaptured() {
    if (get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition) {
      set(initialBodyStyle, document.body.getAttribute("style"), true);
    }
  }
  watch(() => anyLocked.current, () => {
    var _a2, _b;
    if (!anyLocked.current) return;
    ensureInitialStyleCaptured();
    isInCleanupTransition = false;
    const htmlStyle = getComputedStyle(document.documentElement);
    const bodyStyle = getComputedStyle(document.body);
    const hasStableGutter = ((_a2 = htmlStyle.scrollbarGutter) == null ? void 0 : _a2.includes("stable")) || ((_b = bodyStyle.scrollbarGutter) == null ? void 0 : _b.includes("stable"));
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0 && !hasStableGutter) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
    }
    document.body.style.overflow = "hidden";
    if (isIOS) {
      stopTouchMoveListener = on(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  onDestroyEffect(() => {
    return () => {
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    };
  });
  return {
    get lockMap() {
      return lockMap;
    },
    resetBodyStyle,
    scheduleCleanupIfNoNewLocks,
    cancelPendingCleanup,
    ensureInitialStyleCaptured
  };
});
class BodyScrollLock {
  constructor(initialState, restoreScrollDelay = () => null) {
    __privateAdd(this, _id, useId());
    __privateAdd(this, _initialState);
    __privateAdd(this, _restoreScrollDelay, () => null);
    __privateAdd(this, _countState);
    __publicField(this, "locked");
    __privateSet(this, _initialState, initialState);
    __privateSet(this, _restoreScrollDelay, restoreScrollDelay);
    __privateSet(this, _countState, bodyLockStackCount.get());
    if (!__privateGet(this, _countState)) return;
    __privateGet(this, _countState).cancelPendingCleanup();
    __privateGet(this, _countState).ensureInitialStyleCaptured();
    __privateGet(this, _countState).lockMap.set(__privateGet(this, _id), __privateGet(this, _initialState) ?? false);
    this.locked = boxWith(() => __privateGet(this, _countState).lockMap.get(__privateGet(this, _id)) ?? false, (v) => __privateGet(this, _countState).lockMap.set(__privateGet(this, _id), v));
    onDestroyEffect(() => {
      __privateGet(this, _countState).lockMap.delete(__privateGet(this, _id));
      if (isAnyLocked(__privateGet(this, _countState).lockMap)) return;
      const restoreScrollDelay2 = __privateGet(this, _restoreScrollDelay).call(this);
      __privateGet(this, _countState).scheduleCleanupIfNoNewLocks(restoreScrollDelay2, () => {
        __privateGet(this, _countState).resetBodyStyle();
      });
    });
  }
}
_id = new WeakMap();
_initialState = new WeakMap();
_restoreScrollDelay = new WeakMap();
_countState = new WeakMap();
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$anchor, $$props) {
  push($$props, true);
  let preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null);
  if (preventScroll()) {
    new BodyScrollLock(preventScroll(), () => restoreScrollDelay());
  }
  pop();
}
var root_3$4 = from_html(`<div><!></div>`);
function Dialog_overlay($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), forceMount = prop($$props, "forceMount", 3, false), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "forceMount",
    "child",
    "children",
    "ref"
  ]);
  const overlayState = DialogOverlayState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, overlayState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            let $0 = user_derived(() => ({
              props: mergeProps(get$2(mergedProps)),
              ...overlayState.snippetProps
            }));
            snippet(node_2, () => $$props.child, () => get$2($0));
          }
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var div = root_3$4();
          attribute_effect(div, ($0) => ({ ...$0 }), [() => mergeProps(get$2(mergedProps))]);
          var node_3 = child(div);
          snippet(node_3, () => $$props.children ?? noop$1, () => overlayState.snippetProps);
          reset(div);
          append($$anchor3, div);
        };
        if_block(node_1, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (overlayState.shouldRender || forceMount()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$b = from_html(`<button><!></button>`);
function Dialog_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "children",
    "child",
    "disabled"
  ]);
  const triggerState = DialogTriggerState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    disabled: boxWith(() => Boolean(disabled()))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$b();
      attribute_effect(button, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Button($$anchor, $$props) {
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "href",
    "type",
    "children",
    "disabled",
    "ref"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  element(node, () => $$props.href ? "a" : "button", false, ($$element, $$anchor2) => {
    bind_this($$element, ($$value) => ref($$value), () => ref());
    attribute_effect($$element, () => ({
      "data-button-root": true,
      type: $$props.href ? void 0 : $$props.type,
      href: $$props.href && !disabled() ? $$props.href : void 0,
      disabled: $$props.href ? void 0 : disabled(),
      "aria-disabled": $$props.href ? disabled() : void 0,
      role: $$props.href && disabled() ? "link" : void 0,
      tabindex: $$props.href && disabled() ? -1 : 0,
      ...restProps
    }));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children ?? noop$1);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
const checkboxAttrs = createBitsAttrs({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
});
const CheckboxGroupContext = new Context("Checkbox.Group");
const CheckboxRootContext = new Context("Checkbox.Root");
const _CheckboxRootState = class _CheckboxRootState {
  constructor(opts, group) {
    __privateAdd(this, _CheckboxRootState_instances);
    __publicField(this, "opts");
    __publicField(this, "group");
    __privateAdd(this, _trueName, user_derived(() => {
      if (this.group && this.group.opts.name.current) return this.group.opts.name.current;
      return this.opts.name.current;
    }));
    __privateAdd(this, _trueRequired, user_derived(() => {
      if (this.group && this.group.opts.required.current) return true;
      return this.opts.required.current;
    }));
    __privateAdd(this, _trueDisabled, user_derived(() => {
      if (this.group && this.group.opts.disabled.current) return true;
      return this.opts.disabled.current;
    }));
    __privateAdd(this, _trueReadonly, user_derived(() => {
      if (this.group && this.group.opts.readonly.current) return true;
      return this.opts.readonly.current;
    }));
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps6, user_derived(() => ({
      checked: this.opts.checked.current,
      indeterminate: this.opts.indeterminate.current
    })));
    __privateAdd(this, _props17, user_derived(() => ({
      id: this.opts.id.current,
      role: "checkbox",
      type: this.opts.type.current,
      disabled: this.trueDisabled,
      "aria-checked": getAriaChecked(this.opts.checked.current, this.opts.indeterminate.current),
      "aria-required": boolToStr(this.trueRequired),
      "aria-readonly": boolToStr(this.trueReadonly),
      "data-disabled": boolToEmptyStrOrUndef(this.trueDisabled),
      "data-readonly": boolToEmptyStrOrUndef(this.trueReadonly),
      "data-state": getCheckboxDataState(this.opts.checked.current, this.opts.indeterminate.current),
      [checkboxAttrs.root]: "",
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    watch.pre(
      [
        () => {
          var _a2;
          return snapshot((_a2 = this.group) == null ? void 0 : _a2.opts.value.current);
        },
        () => this.opts.value.current
      ],
      ([groupValue, value]) => {
        if (!groupValue || !value) return;
        this.opts.checked.current = groupValue.includes(value);
      }
    );
    watch.pre(() => this.opts.checked.current, (checked) => {
      var _a2, _b;
      if (!this.group) return;
      if (checked) {
        (_a2 = this.group) == null ? void 0 : _a2.addValue(this.opts.value.current);
      } else {
        (_b = this.group) == null ? void 0 : _b.removeValue(this.opts.value.current);
      }
    });
  }
  static create(opts, group = null) {
    return CheckboxRootContext.set(new _CheckboxRootState(opts, group));
  }
  get trueName() {
    return get$2(__privateGet(this, _trueName));
  }
  set trueName(value) {
    set(__privateGet(this, _trueName), value);
  }
  get trueRequired() {
    return get$2(__privateGet(this, _trueRequired));
  }
  set trueRequired(value) {
    set(__privateGet(this, _trueRequired), value);
  }
  get trueDisabled() {
    return get$2(__privateGet(this, _trueDisabled));
  }
  set trueDisabled(value) {
    set(__privateGet(this, _trueDisabled), value);
  }
  get trueReadonly() {
    return get$2(__privateGet(this, _trueReadonly));
  }
  set trueReadonly(value) {
    set(__privateGet(this, _trueReadonly), value);
  }
  onkeydown(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (e.key === ENTER) {
      e.preventDefault();
      if (this.opts.type.current === "submit") {
        const form = e.currentTarget.closest("form");
        form == null ? void 0 : form.requestSubmit();
      }
      return;
    }
    if (e.key === SPACE) {
      e.preventDefault();
      __privateMethod(this, _CheckboxRootState_instances, toggle_fn).call(this);
    }
  }
  onclick(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (this.opts.type.current === "submit") {
      __privateMethod(this, _CheckboxRootState_instances, toggle_fn).call(this);
      return;
    }
    e.preventDefault();
    __privateMethod(this, _CheckboxRootState_instances, toggle_fn).call(this);
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps6));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps6), value);
  }
  get props() {
    return get$2(__privateGet(this, _props17));
  }
  set props(value) {
    set(__privateGet(this, _props17), value);
  }
};
_trueName = new WeakMap();
_trueRequired = new WeakMap();
_trueDisabled = new WeakMap();
_trueReadonly = new WeakMap();
_CheckboxRootState_instances = new WeakSet();
toggle_fn = function() {
  if (this.opts.indeterminate.current) {
    this.opts.indeterminate.current = false;
    this.opts.checked.current = true;
  } else {
    this.opts.checked.current = !this.opts.checked.current;
  }
};
_snippetProps6 = new WeakMap();
_props17 = new WeakMap();
let CheckboxRootState = _CheckboxRootState;
const _CheckboxInputState = class _CheckboxInputState {
  constructor(root2) {
    __publicField(this, "root");
    __privateAdd(this, _trueChecked, user_derived(() => {
      if (!this.root.group) return this.root.opts.checked.current;
      if (this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) {
        return true;
      }
      return false;
    }));
    __privateAdd(this, _shouldRender, user_derived(() => Boolean(this.root.trueName)));
    __privateAdd(this, _props18, user_derived(() => ({
      type: "checkbox",
      checked: this.root.opts.checked.current === true,
      disabled: this.root.trueDisabled,
      required: this.root.trueRequired,
      name: this.root.trueName,
      value: this.root.opts.value.current,
      readonly: this.root.trueReadonly,
      onfocus: this.onfocus
    })));
    this.root = root2;
    this.onfocus = this.onfocus.bind(this);
  }
  static create() {
    return new _CheckboxInputState(CheckboxRootContext.get());
  }
  get trueChecked() {
    return get$2(__privateGet(this, _trueChecked));
  }
  set trueChecked(value) {
    set(__privateGet(this, _trueChecked), value);
  }
  get shouldRender() {
    return get$2(__privateGet(this, _shouldRender));
  }
  set shouldRender(value) {
    set(__privateGet(this, _shouldRender), value);
  }
  onfocus(_) {
    if (!isHTMLElement$1(this.root.opts.ref.current)) return;
    this.root.opts.ref.current.focus();
  }
  get props() {
    return get$2(__privateGet(this, _props18));
  }
  set props(value) {
    set(__privateGet(this, _props18), value);
  }
};
_trueChecked = new WeakMap();
_shouldRender = new WeakMap();
_props18 = new WeakMap();
let CheckboxInputState = _CheckboxInputState;
function getCheckboxDataState(checked, indeterminate) {
  if (indeterminate) return "indeterminate";
  return checked ? "checked" : "unchecked";
}
var root_1$6 = from_html(`<input/>`);
var root_2$a = from_html(`<input/>`);
function Hidden_input($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), restProps = rest_props($$props, ["$$slots", "$$events", "$$legacy", "value"]);
  const mergedProps = user_derived(() => mergeProps(restProps, {
    "aria-hidden": "true",
    tabindex: -1,
    style: srOnlyStylesString
  }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var input = root_1$6();
      attribute_effect(input, () => ({ ...get$2(mergedProps), value: value() }), void 0, void 0, void 0, void 0, true);
      append($$anchor2, input);
    };
    var alternate = ($$anchor2) => {
      var input_1 = root_2$a();
      attribute_effect(input_1, () => ({ ...get$2(mergedProps) }), void 0, void 0, void 0, void 0, true);
      bind_value(input_1, value);
      append($$anchor2, input_1);
    };
    if_block(node, ($$render) => {
      if (get$2(mergedProps).type === "checkbox") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Checkbox_input($$anchor, $$props) {
  push($$props, false);
  const inputState = CheckboxInputState.create();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Hidden_input($$anchor2, spread_props(() => inputState.props));
    };
    if_block(node, ($$render) => {
      if (inputState.shouldRender) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$9 = from_html(`<button><!></button>`);
var root$9 = from_html(`<!> <!>`, 1);
function Checkbox($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let checked = prop($$props, "checked", 15, false), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), required = prop($$props, "required", 3, false), name = prop($$props, "name", 19, () => void 0), value = prop($$props, "value", 3, "on"), id = prop($$props, "id", 19, () => createId(uid)), indeterminate = prop($$props, "indeterminate", 15, false), type = prop($$props, "type", 3, "button"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "checked",
    "ref",
    "onCheckedChange",
    "children",
    "disabled",
    "required",
    "name",
    "value",
    "id",
    "indeterminate",
    "onIndeterminateChange",
    "child",
    "type",
    "readonly"
  ]);
  const group = CheckboxGroupContext.getOr(null);
  if (group && value()) {
    if (group.opts.value.current.includes(value())) {
      checked(true);
    } else {
      checked(false);
    }
  }
  watch.pre(() => value(), () => {
    if (group && value()) {
      if (group.opts.value.current.includes(value())) {
        checked(true);
      } else {
        checked(false);
      }
    }
  });
  const rootState = CheckboxRootState.create(
    {
      checked: boxWith(() => checked(), (v) => {
        var _a2;
        checked(v);
        (_a2 = $$props.onCheckedChange) == null ? void 0 : _a2.call($$props, v);
      }),
      disabled: boxWith(() => disabled() ?? false),
      required: boxWith(() => required()),
      name: boxWith(() => name()),
      value: boxWith(() => value()),
      id: boxWith(() => id()),
      ref: boxWith(() => ref(), (v) => ref(v)),
      indeterminate: boxWith(() => indeterminate(), (v) => {
        var _a2;
        indeterminate(v);
        (_a2 = $$props.onIndeterminateChange) == null ? void 0 : _a2.call($$props, v);
      }),
      type: boxWith(() => type()),
      readonly: boxWith(() => Boolean($$props.readonly))
    },
    group
  );
  const mergedProps = user_derived(() => mergeProps({ ...restProps }, rootState.props));
  var fragment = root$9();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get$2(mergedProps), ...rootState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get$2($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$9();
      attribute_effect(button, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1, () => rootState.snippetProps);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_3 = sibling(node, 2);
  Checkbox_input(node_3, {});
  append($$anchor, fragment);
  pop();
}
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state2, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state2;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state2);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    var _platform$detectOverf;
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset: reset2
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: {
        ...platform2,
        detectOverflow: (_platform$detectOverf = platform2.detectOverflow) != null ? _platform$detectOverf : detectOverflow
      },
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset2 && resetCount <= 50) {
      resetCount++;
      if (typeof reset2 === "object") {
        if (reset2.placement) {
          statefulPlacement = reset2.placement;
        }
        if (reset2.rects) {
          rects = reset2.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset2.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state2) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state2;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state2) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state2) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state2);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state2) {
      const {
        rects,
        platform: platform2
      } = state2;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state2);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform2.detectOverflow(state2, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform2.detectOverflow(state2, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state2, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state2;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state2);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state2) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state2;
      const diffCoords = await convertValueToCoords(state2, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state2) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state2,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state2) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state2;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state2);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state2) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state2;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const overflow = await platform2.detectOverflow(state2, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state2.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state2.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state2.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state2,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element2) {
  return tableElements.has(getNodeName(element2));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element2) {
  return topLayerSelectors.some((selector) => {
    try {
      return element2.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.scrollX,
    scrollTop: element2.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element2, rect) {
  const leftScroll = getNodeScroll(element2).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element2)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element2) ? [] : getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element2) {
  return getComputedStyle$1(element2).position === "static";
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  let rawOffsetParent = element2.offsetParent;
  if (getDocumentElement(element2) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element2, polyfill) {
  const win = getWindow(element2);
  if (isTopLayer(element2)) {
    return win;
  }
  if (!isHTMLElement(element2)) {
    let svgOffsetParent = getParentNode(element2);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element2) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element2);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element2.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element2.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element2) {
  if (typeof window === "undefined") return 1;
  const win = element2.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element2, value) {
  const dpr = getDPR(element2);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = user_derived(() => get(options.open) ?? true);
  const middlewareOption = user_derived(() => get(options.middleware));
  const transformOption = user_derived(() => get(options.transform) ?? true);
  const placementOption = user_derived(() => get(options.placement) ?? "bottom");
  const strategyOption = user_derived(() => get(options.strategy) ?? "absolute");
  const sideOffsetOption = user_derived(() => get(options.sideOffset) ?? 0);
  const alignOffsetOption = user_derived(() => get(options.alignOffset) ?? 0);
  const reference = options.reference;
  let x = state(0);
  let y = state(0);
  const floating = simpleBox(null);
  let strategy = state(proxy(get$2(strategyOption)));
  let placement = state(proxy(get$2(placementOption)));
  let middlewareData = state(proxy({}));
  let isPositioned = state(false);
  const floatingStyles = user_derived(() => {
    const xVal = floating.current ? roundByDPR(floating.current, get$2(x)) : get$2(x);
    const yVal = floating.current ? roundByDPR(floating.current, get$2(y)) : get$2(y);
    if (get$2(transformOption)) {
      return {
        position: get$2(strategy),
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return {
      position: get$2(strategy),
      left: `${xVal}px`,
      top: `${yVal}px`
    };
  });
  let whileElementsMountedCleanup;
  function update2() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: get$2(middlewareOption),
      placement: get$2(placementOption),
      strategy: get$2(strategyOption)
    }).then((position) => {
      if (!get$2(openOption) && get$2(x) !== 0 && get$2(y) !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(get$2(sideOffsetOption)), Math.abs(get$2(alignOffsetOption)), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      set(x, position.x, true);
      set(y, position.y, true);
      set(strategy, position.strategy, true);
      set(placement, position.placement, true);
      set(middlewareData, position.middlewareData, true);
      set(isPositioned, true);
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach2() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update2();
      return;
    }
    if (reference.current === null || floating.current === null) return;
    whileElementsMountedCleanup = whileElementsMountedOption(reference.current, floating.current, update2);
  }
  function reset2() {
    if (!get$2(openOption)) {
      set(isPositioned, false);
    }
  }
  user_effect(update2);
  user_effect(attach2);
  user_effect(reset2);
  user_effect(() => cleanup);
  return {
    floating,
    reference,
    get strategy() {
      return get$2(strategy);
    },
    get placement() {
      return get$2(placement);
    },
    get middlewareData() {
      return get$2(middlewareData);
    },
    get isPositioned() {
      return get$2(isPositioned);
    },
    get floatingStyles() {
      return get$2(floatingStyles);
    },
    get update() {
      return update2;
    }
  };
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
  constructor() {
    __publicField(this, "anchorNode", simpleBox(null));
    __publicField(this, "customAnchorNode", simpleBox(null));
    __publicField(this, "triggerNode", simpleBox(null));
    user_effect(() => {
      if (this.customAnchorNode.current) {
        if (typeof this.customAnchorNode.current === "string") {
          this.anchorNode.current = document.querySelector(this.customAnchorNode.current);
        } else {
          this.anchorNode.current = this.customAnchorNode.current;
        }
      } else {
        this.anchorNode.current = this.triggerNode.current;
      }
    });
  }
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
}
const _FloatingContentState = class _FloatingContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    // nodes
    __publicField(this, "contentRef", simpleBox(null));
    __publicField(this, "wrapperRef", simpleBox(null));
    __publicField(this, "arrowRef", simpleBox(null));
    __publicField(this, "contentAttachment", attachRef(this.contentRef));
    __publicField(this, "wrapperAttachment", attachRef(this.wrapperRef));
    __publicField(this, "arrowAttachment", attachRef(this.arrowRef));
    // ids
    __publicField(this, "arrowId", simpleBox(useId()));
    __privateAdd(this, _transformedStyle, user_derived(() => {
      if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _updatePositionStrategy);
    __privateAdd(this, _arrowSize, new ElementSize(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _arrowWidth, user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.width) ?? 0;
    }));
    __privateAdd(this, _arrowHeight, user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.height) ?? 0;
    }));
    __privateAdd(this, _desiredPlacement, user_derived(() => {
      var _a2;
      return ((_a2 = this.opts.side) == null ? void 0 : _a2.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _boundary, user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _hasExplicitBoundaries, user_derived(() => get$2(__privateGet(this, _boundary)).length > 0));
    __privateAdd(this, _detectOverflowOptions, user_derived(() => ({
      padding: this.opts.collisionPadding.current,
      boundary: get$2(__privateGet(this, _boundary)).filter(isNotNull),
      altBoundary: this.hasExplicitBoundaries
    })));
    __privateAdd(this, _availableWidth, state(void 0));
    __privateAdd(this, _availableHeight, state(void 0));
    __privateAdd(this, _anchorWidth, state(void 0));
    __privateAdd(this, _anchorHeight, state(void 0));
    __privateAdd(this, _middleware, user_derived(() => [
      offset({
        mainAxis: this.opts.sideOffset.current + get$2(__privateGet(this, _arrowHeight)),
        alignmentAxis: this.opts.alignOffset.current
      }),
      this.opts.avoidCollisions.current && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
        ...this.detectOverflowOptions
      }),
      this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
      size({
        ...this.detectOverflowOptions,
        apply: ({ rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          set(__privateGet(this, _availableWidth), availableWidth, true);
          set(__privateGet(this, _availableHeight), availableHeight, true);
          set(__privateGet(this, _anchorWidth), anchorWidth, true);
          set(__privateGet(this, _anchorHeight), anchorHeight, true);
        }
      }),
      this.arrowRef.current && arrow({
        element: this.arrowRef.current,
        padding: this.opts.arrowPadding.current
      }),
      transformOrigin({
        arrowWidth: get$2(__privateGet(this, _arrowWidth)),
        arrowHeight: get$2(__privateGet(this, _arrowHeight))
      }),
      this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
    ].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _placedSide, user_derived(() => getSideFromPlacement(this.floating.placement)));
    __privateAdd(this, _placedAlign, user_derived(() => getAlignFromPlacement(this.floating.placement)));
    __privateAdd(this, _arrowX, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.x) ?? 0;
    }));
    __privateAdd(this, _arrowY, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.y) ?? 0;
    }));
    __privateAdd(this, _cannotCenterArrow, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
    }));
    __privateAdd(this, _contentZIndex, state());
    __privateAdd(this, _arrowBaseSide, user_derived(() => OPPOSITE_SIDE[this.placedSide]));
    __privateAdd(this, _wrapperProps, user_derived(() => {
      var _a2, _b, _c;
      return {
        id: this.opts.wrapperId.current,
        "data-bits-floating-content-wrapper": "",
        style: {
          ...this.floating.floatingStyles,
          transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: this.contentZIndex,
          "--bits-floating-transform-origin": `${(_a2 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a2.x} ${(_b = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b.y}`,
          "--bits-floating-available-width": `${get$2(__privateGet(this, _availableWidth))}px`,
          "--bits-floating-available-height": `${get$2(__privateGet(this, _availableHeight))}px`,
          "--bits-floating-anchor-width": `${get$2(__privateGet(this, _anchorWidth))}px`,
          "--bits-floating-anchor-height": `${get$2(__privateGet(this, _anchorHeight))}px`,
          ...((_c = this.floating.middlewareData.hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", "pointer-events": "none" },
          ...get$2(__privateGet(this, _transformedStyle))
        },
        dir: this.opts.dir.current,
        ...this.wrapperAttachment
      };
    }));
    __privateAdd(this, _props19, user_derived(() => ({
      "data-side": this.placedSide,
      "data-align": this.placedAlign,
      style: styleToString({ ...get$2(__privateGet(this, _transformedStyle)) }),
      ...this.contentAttachment
    })));
    __privateAdd(this, _arrowStyle, user_derived(() => ({
      position: "absolute",
      left: this.arrowX ? `${this.arrowX}px` : void 0,
      top: this.arrowY ? `${this.arrowY}px` : void 0,
      [this.arrowBaseSide]: 0,
      "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[this.placedSide],
      visibility: this.cannotCenterArrow ? "hidden" : void 0
    })));
    this.opts = opts;
    this.root = root2;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => get$2(__privateGet(this, _desiredPlacement)),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...args) => {
        var _a2;
        const cleanup = autoUpdate(...args, {
          animationFrame: ((_a2 = __privateGet(this, _updatePositionStrategy)) == null ? void 0 : _a2.current) === "always"
        });
        return cleanup;
      },
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    user_effect(() => {
      var _a2;
      if (!this.floating.isPositioned) return;
      (_a2 = this.opts.onPlaced) == null ? void 0 : _a2.current();
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      const win = getWindow$1(contentNode);
      this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
    });
    user_effect(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new _FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new _FloatingContentState(opts, FloatingRootContext.get()));
  }
  get hasExplicitBoundaries() {
    return get$2(__privateGet(this, _hasExplicitBoundaries));
  }
  set hasExplicitBoundaries(value) {
    set(__privateGet(this, _hasExplicitBoundaries), value);
  }
  get detectOverflowOptions() {
    return get$2(__privateGet(this, _detectOverflowOptions));
  }
  set detectOverflowOptions(value) {
    set(__privateGet(this, _detectOverflowOptions), value);
  }
  get middleware() {
    return get$2(__privateGet(this, _middleware));
  }
  set middleware(value) {
    set(__privateGet(this, _middleware), value);
  }
  get placedSide() {
    return get$2(__privateGet(this, _placedSide));
  }
  set placedSide(value) {
    set(__privateGet(this, _placedSide), value);
  }
  get placedAlign() {
    return get$2(__privateGet(this, _placedAlign));
  }
  set placedAlign(value) {
    set(__privateGet(this, _placedAlign), value);
  }
  get arrowX() {
    return get$2(__privateGet(this, _arrowX));
  }
  set arrowX(value) {
    set(__privateGet(this, _arrowX), value);
  }
  get arrowY() {
    return get$2(__privateGet(this, _arrowY));
  }
  set arrowY(value) {
    set(__privateGet(this, _arrowY), value);
  }
  get cannotCenterArrow() {
    return get$2(__privateGet(this, _cannotCenterArrow));
  }
  set cannotCenterArrow(value) {
    set(__privateGet(this, _cannotCenterArrow), value);
  }
  get contentZIndex() {
    return get$2(__privateGet(this, _contentZIndex));
  }
  set contentZIndex(value) {
    set(__privateGet(this, _contentZIndex), value, true);
  }
  get arrowBaseSide() {
    return get$2(__privateGet(this, _arrowBaseSide));
  }
  set arrowBaseSide(value) {
    set(__privateGet(this, _arrowBaseSide), value);
  }
  get wrapperProps() {
    return get$2(__privateGet(this, _wrapperProps));
  }
  set wrapperProps(value) {
    set(__privateGet(this, _wrapperProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props19));
  }
  set props(value) {
    set(__privateGet(this, _props19), value);
  }
  get arrowStyle() {
    return get$2(__privateGet(this, _arrowStyle));
  }
  set arrowStyle(value) {
    set(__privateGet(this, _arrowStyle), value);
  }
};
_transformedStyle = new WeakMap();
_updatePositionStrategy = new WeakMap();
_arrowSize = new WeakMap();
_arrowWidth = new WeakMap();
_arrowHeight = new WeakMap();
_desiredPlacement = new WeakMap();
_boundary = new WeakMap();
_hasExplicitBoundaries = new WeakMap();
_detectOverflowOptions = new WeakMap();
_availableWidth = new WeakMap();
_availableHeight = new WeakMap();
_anchorWidth = new WeakMap();
_anchorHeight = new WeakMap();
_middleware = new WeakMap();
_placedSide = new WeakMap();
_placedAlign = new WeakMap();
_arrowX = new WeakMap();
_arrowY = new WeakMap();
_cannotCenterArrow = new WeakMap();
_contentZIndex = new WeakMap();
_arrowBaseSide = new WeakMap();
_wrapperProps = new WeakMap();
_props19 = new WeakMap();
_arrowStyle = new WeakMap();
let FloatingContentState = _FloatingContentState;
class FloatingAnchorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    this.opts = opts;
    this.root = root2;
    if (opts.virtualEl && opts.virtualEl.current) {
      root2.triggerNode = boxFrom(opts.virtualEl.current);
    } else {
      root2.triggerNode = opts.ref;
    }
  }
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      var _a2, _b, _c;
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = ((_a2 = middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
      const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingRootState.create(tooltip());
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_anchor($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingAnchorState.create(
    {
      id: boxWith(() => $$props.id),
      virtualEl: boxWith(() => $$props.virtualEl),
      ref: $$props.ref
    },
    tooltip()
  );
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content($$anchor, $$props) {
  push($$props, true);
  let side = prop($$props, "side", 3, "bottom"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), alignOffset = prop($$props, "alignOffset", 3, 0), arrowPadding = prop($$props, "arrowPadding", 3, 0), avoidCollisions = prop($$props, "avoidCollisions", 3, true), collisionBoundary = prop($$props, "collisionBoundary", 19, () => []), collisionPadding = prop($$props, "collisionPadding", 3, 0), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), onPlaced = prop($$props, "onPlaced", 3, () => {
  }), sticky = prop($$props, "sticky", 3, "partial"), updatePositionStrategy = prop($$props, "updatePositionStrategy", 3, "optimized"), strategy = prop($$props, "strategy", 3, "fixed"), dir = prop($$props, "dir", 3, "ltr"), style = prop($$props, "style", 19, () => ({})), wrapperId = prop($$props, "wrapperId", 19, useId), customAnchor = prop($$props, "customAnchor", 3, null), tooltip = prop($$props, "tooltip", 3, false);
  const contentState = FloatingContentState.create(
    {
      side: boxWith(() => side()),
      sideOffset: boxWith(() => sideOffset()),
      align: boxWith(() => align()),
      alignOffset: boxWith(() => alignOffset()),
      id: boxWith(() => $$props.id),
      arrowPadding: boxWith(() => arrowPadding()),
      avoidCollisions: boxWith(() => avoidCollisions()),
      collisionBoundary: boxWith(() => collisionBoundary()),
      collisionPadding: boxWith(() => collisionPadding()),
      hideWhenDetached: boxWith(() => hideWhenDetached()),
      onPlaced: boxWith(() => onPlaced()),
      sticky: boxWith(() => sticky()),
      updatePositionStrategy: boxWith(() => updatePositionStrategy()),
      strategy: boxWith(() => strategy()),
      dir: boxWith(() => dir()),
      style: boxWith(() => style()),
      enabled: boxWith(() => $$props.enabled),
      wrapperId: boxWith(() => wrapperId()),
      customAnchor: boxWith(() => customAnchor())
    },
    tooltip()
  );
  const mergedProps = user_derived(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$1, () => ({ props: contentState.props, wrapperProps: get$2(mergedProps) }));
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content_static($$anchor, $$props) {
  push($$props, true);
  onMount(() => {
    var _a2;
    (_a2 = $$props.onPlaced) == null ? void 0 : _a2.call($$props);
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$1, () => ({ props: {}, wrapperProps: {} }));
  append($$anchor, fragment);
  pop();
}
const separatorAttrs = createBitsAttrs({ component: "separator", parts: ["root"] });
const _SeparatorRootState = class _SeparatorRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _props20, user_derived(() => ({
      id: this.opts.id.current,
      role: this.opts.decorative.current ? "none" : "separator",
      "aria-orientation": this.opts.orientation.current,
      "aria-hidden": boolToStrTrueOrUndef(this.opts.decorative.current),
      "data-orientation": this.opts.orientation.current,
      [separatorAttrs.root]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
  }
  static create(opts) {
    return new _SeparatorRootState(opts);
  }
  get props() {
    return get$2(__privateGet(this, _props20));
  }
  set props(value) {
    set(__privateGet(this, _props20), value);
  }
};
_props20 = new WeakMap();
let SeparatorRootState = _SeparatorRootState;
var root_2$8 = from_html(`<div><!></div>`);
function Separator($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), decorative = prop($$props, "decorative", 3, false), orientation = prop($$props, "orientation", 3, "horizontal"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "decorative",
    "orientation"
  ]);
  const rootState = SeparatorRootState.create({
    ref: boxWith(() => ref(), (v) => ref(v)),
    id: boxWith(() => id()),
    decorative: boxWith(() => decorative()),
    orientation: boxWith(() => orientation())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$8();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Popper_content($$anchor, $$props) {
  let isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Floating_layer_content_static($$anchor2, {
        get content() {
          return $$props.content;
        },
        get onPlaced() {
          return $$props.onPlaced;
        }
      });
    };
    var alternate = ($$anchor2) => {
      Floating_layer_content($$anchor2, spread_props(
        {
          get content() {
            return $$props.content;
          },
          get onPlaced() {
            return $$props.onPlaced;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if (isStatic()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
}
var root_1$5 = from_html(`<!> <!>`, 1);
function Popper_layer_inner($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), tooltip = prop($$props, "tooltip", 3, false), contentPointerEvents = prop($$props, "contentPointerEvents", 3, "auto"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled",
    "ref",
    "tooltip",
    "contentPointerEvents"
  ]);
  {
    const content = ($$anchor2, $$arg0) => {
      let floatingProps = () => $$arg0 == null ? void 0 : $$arg0().props;
      let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          Scroll_lock($$anchor3, {
            get preventScroll() {
              return $$props.preventScroll;
            }
          });
        };
        var alternate = ($$anchor3) => {
          var fragment_3 = comment();
          var node_1 = first_child(fragment_3);
          {
            var consequent_1 = ($$anchor4) => {
              Scroll_lock($$anchor4, {
                get preventScroll() {
                  return $$props.preventScroll;
                }
              });
            };
            if_block(
              node_1,
              ($$render) => {
                if (!$$props.forceMount) $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_3);
        };
        if_block(node, ($$render) => {
          if ($$props.forceMount && $$props.enabled) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var node_2 = sibling(node, 2);
      {
        const focusScope = ($$anchor3, $$arg02) => {
          let focusScopeProps = () => $$arg02 == null ? void 0 : $$arg02().props;
          Escape_layer($$anchor3, {
            get onEscapeKeydown() {
              return $$props.onEscapeKeydown;
            },
            get escapeKeydownBehavior() {
              return $$props.escapeKeydownBehavior;
            },
            get enabled() {
              return $$props.enabled;
            },
            get ref() {
              return $$props.ref;
            },
            children: ($$anchor4, $$slotProps) => {
              {
                const children = ($$anchor5, $$arg03) => {
                  let dismissibleProps = () => $$arg03 == null ? void 0 : $$arg03().props;
                  Text_selection_layer($$anchor5, {
                    get id() {
                      return $$props.id;
                    },
                    get preventOverflowTextSelection() {
                      return $$props.preventOverflowTextSelection;
                    },
                    get onPointerDown() {
                      return $$props.onPointerDown;
                    },
                    get onPointerUp() {
                      return $$props.onPointerUp;
                    },
                    get enabled() {
                      return $$props.enabled;
                    },
                    get ref() {
                      return $$props.ref;
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var fragment_8 = comment();
                      var node_3 = first_child(fragment_8);
                      {
                        let $0 = user_derived(() => ({
                          props: mergeProps(restProps, floatingProps(), dismissibleProps(), focusScopeProps(), { style: { pointerEvents: contentPointerEvents() } }),
                          wrapperProps: wrapperProps()
                        }));
                        snippet(node_3, () => $$props.popper ?? noop$1, () => get$2($0));
                      }
                      append($$anchor6, fragment_8);
                    },
                    $$slots: { default: true }
                  });
                };
                Dismissible_layer($$anchor4, {
                  get id() {
                    return $$props.id;
                  },
                  get onInteractOutside() {
                    return $$props.onInteractOutside;
                  },
                  get onFocusOutside() {
                    return $$props.onFocusOutside;
                  },
                  get interactOutsideBehavior() {
                    return interactOutsideBehavior();
                  },
                  get isValidEvent() {
                    return isValidEvent2();
                  },
                  get enabled() {
                    return $$props.enabled;
                  },
                  get ref() {
                    return $$props.ref;
                  },
                  children,
                  $$slots: { default: true }
                });
              }
            },
            $$slots: { default: true }
          });
        };
        Focus_scope(node_2, {
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get loop() {
            return $$props.loop;
          },
          get enabled() {
            return $$props.enabled;
          },
          get trapFocus() {
            return trapFocus();
          },
          get forceMount() {
            return $$props.forceMount;
          },
          get ref() {
            return $$props.ref;
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
      append($$anchor2, fragment_1);
    };
    Popper_content($$anchor, {
      get isStatic() {
        return isStatic();
      },
      get id() {
        return $$props.id;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get enabled() {
        return $$props.enabled;
      },
      get tooltip() {
        return tooltip();
      },
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
function Popper_layer($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "open",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "ref",
    "shouldRender"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Popper_layer_inner($$anchor2, spread_props(
        {
          get popper() {
            return $$props.popper;
          },
          get onEscapeKeydown() {
            return $$props.onEscapeKeydown;
          },
          get escapeKeydownBehavior() {
            return $$props.escapeKeydownBehavior;
          },
          get preventOverflowTextSelection() {
            return $$props.preventOverflowTextSelection;
          },
          get id() {
            return $$props.id;
          },
          get onPointerDown() {
            return $$props.onPointerDown;
          },
          get onPointerUp() {
            return $$props.onPointerUp;
          },
          get side() {
            return $$props.side;
          },
          get sideOffset() {
            return $$props.sideOffset;
          },
          get align() {
            return $$props.align;
          },
          get alignOffset() {
            return $$props.alignOffset;
          },
          get arrowPadding() {
            return $$props.arrowPadding;
          },
          get avoidCollisions() {
            return $$props.avoidCollisions;
          },
          get collisionBoundary() {
            return $$props.collisionBoundary;
          },
          get collisionPadding() {
            return $$props.collisionPadding;
          },
          get sticky() {
            return $$props.sticky;
          },
          get hideWhenDetached() {
            return $$props.hideWhenDetached;
          },
          get updatePositionStrategy() {
            return $$props.updatePositionStrategy;
          },
          get strategy() {
            return $$props.strategy;
          },
          get dir() {
            return $$props.dir;
          },
          get preventScroll() {
            return $$props.preventScroll;
          },
          get wrapperId() {
            return $$props.wrapperId;
          },
          get style() {
            return $$props.style;
          },
          get onPlaced() {
            return $$props.onPlaced;
          },
          get customAnchor() {
            return customAnchor();
          },
          get isStatic() {
            return isStatic();
          },
          get enabled() {
            return $$props.open;
          },
          get onInteractOutside() {
            return $$props.onInteractOutside;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get interactOutsideBehavior() {
            return interactOutsideBehavior();
          },
          get loop() {
            return $$props.loop;
          },
          get trapFocus() {
            return trapFocus();
          },
          get isValidEvent() {
            return isValidEvent2();
          },
          get onFocusOutside() {
            return $$props.onFocusOutside;
          },
          forceMount: false,
          get ref() {
            return $$props.ref;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if ($$props.shouldRender) $$render(consequent);
    });
  }
  append($$anchor, fragment);
}
function Popper_layer_force_mount($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  Popper_layer_inner($$anchor, spread_props(
    {
      get popper() {
        return $$props.popper;
      },
      get onEscapeKeydown() {
        return $$props.onEscapeKeydown;
      },
      get escapeKeydownBehavior() {
        return $$props.escapeKeydownBehavior;
      },
      get preventOverflowTextSelection() {
        return $$props.preventOverflowTextSelection;
      },
      get id() {
        return $$props.id;
      },
      get onPointerDown() {
        return $$props.onPointerDown;
      },
      get onPointerUp() {
        return $$props.onPointerUp;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get preventScroll() {
        return $$props.preventScroll;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get isStatic() {
        return isStatic();
      },
      get enabled() {
        return $$props.enabled;
      },
      get onInteractOutside() {
        return $$props.onInteractOutside;
      },
      get onCloseAutoFocus() {
        return $$props.onCloseAutoFocus;
      },
      get onOpenAutoFocus() {
        return $$props.onOpenAutoFocus;
      },
      get interactOutsideBehavior() {
        return interactOutsideBehavior();
      },
      get loop() {
        return $$props.loop;
      },
      get trapFocus() {
        return trapFocus();
      },
      get isValidEvent() {
        return isValidEvent2();
      },
      get onFocusOutside() {
        return $$props.onFocusOutside;
      }
    },
    () => restProps,
    { forceMount: true }
  ));
}
var root_2$7 = from_html(`<div><!></div>`);
function Menu_checkbox_item($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), checked = prop($$props, "checked", 15, false), id = prop($$props, "id", 19, () => createId(uid)), onCheckedChange = prop($$props, "onCheckedChange", 3, noop), disabled = prop($$props, "disabled", 3, false), onSelect = prop($$props, "onSelect", 3, noop), closeOnSelect = prop($$props, "closeOnSelect", 3, true), indeterminate = prop($$props, "indeterminate", 15, false), onIndeterminateChange = prop($$props, "onIndeterminateChange", 3, noop), value = prop($$props, "value", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "checked",
    "id",
    "onCheckedChange",
    "disabled",
    "onSelect",
    "closeOnSelect",
    "indeterminate",
    "onIndeterminateChange",
    "value"
  ]);
  const group = MenuCheckboxGroupContext.getOr(null);
  if (group && value()) {
    if (group.opts.value.current.includes(value())) {
      checked(true);
    } else {
      checked(false);
    }
  }
  watch.pre(() => value(), () => {
    if (group && value()) {
      if (group.opts.value.current.includes(value())) {
        checked(true);
      } else {
        checked(false);
      }
    }
  });
  const checkboxItemState = MenuCheckboxItemState.create(
    {
      checked: boxWith(() => checked(), (v) => {
        if (v !== checked()) {
          checked(v);
          onCheckedChange()(v);
        }
      }),
      id: boxWith(() => id()),
      disabled: boxWith(() => disabled()),
      onSelect: boxWith(() => handleSelect),
      ref: boxWith(() => ref(), (v) => ref(v)),
      closeOnSelect: boxWith(() => closeOnSelect()),
      indeterminate: boxWith(() => indeterminate(), (v) => {
        if (v !== indeterminate()) {
          indeterminate(v);
          onIndeterminateChange()(v);
        }
      }),
      value: boxWith(() => value())
    },
    group
  );
  function handleSelect(e) {
    onSelect()(e);
    if (e.defaultPrevented) return;
    checkboxItemState.toggleChecked();
  }
  const mergedProps = user_derived(() => mergeProps(restProps, checkboxItemState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({
        checked: checked(),
        indeterminate: indeterminate(),
        props: get$2(mergedProps)
      }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$7();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1, () => ({ checked: checked(), indeterminate: indeterminate() }));
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$6 = from_html(`<div><!></div>`);
function Menu_checkbox_group($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 31, () => proxy([])), onValueChange = prop($$props, "onValueChange", 3, noop), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "child",
    "ref",
    "value",
    "onValueChange"
  ]);
  const checkboxGroupState = MenuCheckboxGroupState.create({
    value: boxWith(() => snapshot(value()), (v) => {
      value(snapshot(v));
      onValueChange()(v);
    }),
    onValueChange: boxWith(() => onValueChange()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    id: boxWith(() => id())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, checkboxGroupState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$6();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Dialog($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop);
  DialogRootState.create({
    variant: boxWith(() => "dialog"),
    open: boxWith(() => open(), (v) => {
      open(v);
      onOpenChange()(v);
    }),
    onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
var root_2$5 = from_html(`<button><!></button>`);
function Dialog_close($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "disabled"
  ]);
  const closeState = DialogCloseState.create({
    variant: boxWith(() => "close"),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    disabled: boxWith(() => Boolean(disabled()))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, closeState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$5();
      attribute_effect(button, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_6 = from_html(`<!> <!>`, 1);
var root_8$2 = from_html(`<!> <div><!></div>`, 1);
function Dialog_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), forceMount = prop($$props, "forceMount", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), trapFocus = prop($$props, "trapFocus", 3, true), preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "child",
    "ref",
    "forceMount",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onEscapeKeydown",
    "onInteractOutside",
    "trapFocus",
    "preventScroll",
    "restoreScrollDelay"
  ]);
  const contentState = DialogContentState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      {
        const focusScope = ($$anchor3, $$arg0) => {
          let focusScopeProps = () => $$arg0 == null ? void 0 : $$arg0().props;
          Escape_layer($$anchor3, spread_props(() => get$2(mergedProps), {
            get enabled() {
              return contentState.root.opts.open.current;
            },
            get ref() {
              return contentState.opts.ref;
            },
            onEscapeKeydown: (e) => {
              onEscapeKeydown()(e);
              if (e.defaultPrevented) return;
              contentState.root.handleClose();
            },
            children: ($$anchor4, $$slotProps) => {
              Dismissible_layer($$anchor4, spread_props(() => get$2(mergedProps), {
                get ref() {
                  return contentState.opts.ref;
                },
                get enabled() {
                  return contentState.root.opts.open.current;
                },
                onInteractOutside: (e) => {
                  onInteractOutside()(e);
                  if (e.defaultPrevented) return;
                  contentState.root.handleClose();
                },
                children: ($$anchor5, $$slotProps2) => {
                  Text_selection_layer($$anchor5, spread_props(() => get$2(mergedProps), {
                    get ref() {
                      return contentState.opts.ref;
                    },
                    get enabled() {
                      return contentState.root.opts.open.current;
                    },
                    children: ($$anchor6, $$slotProps3) => {
                      var fragment_5 = comment();
                      var node_1 = first_child(fragment_5);
                      {
                        var consequent_1 = ($$anchor7) => {
                          var fragment_6 = root_6();
                          var node_2 = first_child(fragment_6);
                          {
                            var consequent = ($$anchor8) => {
                              Scroll_lock($$anchor8, {
                                get preventScroll() {
                                  return preventScroll();
                                },
                                get restoreScrollDelay() {
                                  return restoreScrollDelay();
                                }
                              });
                            };
                            if_block(node_2, ($$render) => {
                              if (contentState.root.opts.open.current) $$render(consequent);
                            });
                          }
                          var node_3 = sibling(node_2, 2);
                          {
                            let $0 = user_derived(() => ({
                              props: mergeProps(get$2(mergedProps), focusScopeProps()),
                              ...contentState.snippetProps
                            }));
                            snippet(node_3, () => $$props.child, () => get$2($0));
                          }
                          append($$anchor7, fragment_6);
                        };
                        var alternate = ($$anchor7) => {
                          var fragment_8 = root_8$2();
                          var node_4 = first_child(fragment_8);
                          Scroll_lock(node_4, {
                            get preventScroll() {
                              return preventScroll();
                            }
                          });
                          var div = sibling(node_4, 2);
                          attribute_effect(div, ($0) => ({ ...$0 }), [() => mergeProps(get$2(mergedProps), focusScopeProps())]);
                          var node_5 = child(div);
                          snippet(node_5, () => $$props.children ?? noop$1);
                          reset(div);
                          append($$anchor7, fragment_8);
                        };
                        if_block(node_1, ($$render) => {
                          if ($$props.child) $$render(consequent_1);
                          else $$render(alternate, false);
                        });
                      }
                      append($$anchor6, fragment_5);
                    },
                    $$slots: { default: true }
                  }));
                },
                $$slots: { default: true }
              }));
            },
            $$slots: { default: true }
          }));
        };
        Focus_scope($$anchor2, {
          get ref() {
            return contentState.opts.ref;
          },
          loop: true,
          get trapFocus() {
            return trapFocus();
          },
          get enabled() {
            return contentState.root.opts.open.current;
          },
          get onOpenAutoFocus() {
            return onOpenAutoFocus();
          },
          get onCloseAutoFocus() {
            return onCloseAutoFocus();
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
    };
    if_block(node, ($$render) => {
      if (contentState.shouldRender || forceMount()) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Menu($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), dir = prop($$props, "dir", 3, "ltr"), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop), variant = prop($$props, "_internal_variant", 3, "dropdown-menu");
  const root2 = MenuRootState.create({
    variant: boxWith(() => variant()),
    dir: boxWith(() => dir()),
    onClose: () => {
      open(false);
      onOpenChange()(false);
    }
  });
  MenuMenuState.create(
    {
      open: boxWith(() => open(), (v) => {
        open(v);
        onOpenChange()(v);
      }),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
    },
    root2
  );
  Floating_layer($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_4$1 = from_html(`<div><div><!></div></div>`);
var root_9$1 = from_html(`<div><div><!></div></div>`);
function Dropdown_menu_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), loop2 = prop($$props, "loop", 3, true), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), forceMount = prop($$props, "forceMount", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "child",
    "children",
    "ref",
    "loop",
    "onInteractOutside",
    "onEscapeKeydown",
    "onCloseAutoFocus",
    "forceMount",
    "trapFocus"
  ]);
  const contentState = MenuContentState.create({
    id: boxWith(() => id()),
    loop: boxWith(() => loop2()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    onCloseAutoFocus: boxWith(() => onCloseAutoFocus())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside()(e);
    if (e.defaultPrevented) return;
    if (e.target && e.target instanceof Element) {
      const subContentSelector = `[${contentState.parentMenu.root.getBitsAttr("sub-content")}]`;
      if (e.target.closest(subContentSelector)) return;
    }
    contentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown()(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }));
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $0 = user_derived(() => ({
                  props: get$2(finalProps),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$2($0));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4$1();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$1);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
          get ref() {
            return contentState.opts.ref;
          },
          get enabled() {
            return contentState.parentMenu.opts.open.current;
          },
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          get trapFocus() {
            return trapFocus();
          },
          get loop() {
            return loop2();
          },
          forceMount: true,
          get id() {
            return id();
          },
          get shouldRender() {
            return contentState.shouldRender;
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_4 = comment();
      var node_4 = first_child(fragment_4);
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }));
              var fragment_6 = comment();
              var node_5 = first_child(fragment_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_6 = first_child(fragment_7);
                  {
                    let $0 = user_derived(() => ({
                      props: get$2(finalProps),
                      wrapperProps: wrapperProps(),
                      ...contentState.snippetProps
                    }));
                    snippet(node_6, () => $$props.child, () => get$2($0));
                  }
                  append($$anchor5, fragment_7);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_2 = root_9$1();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
                  var node_7 = child(div_3);
                  snippet(node_7, () => $$props.children ?? noop$1);
                  reset(div_3);
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_5, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              append($$anchor4, fragment_6);
            };
            Popper_layer($$anchor3, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
              get ref() {
                return contentState.opts.ref;
              },
              get open() {
                return contentState.parentMenu.opts.open.current;
              },
              onInteractOutside: handleInteractOutside,
              onEscapeKeydown: handleEscapeKeydown,
              get trapFocus() {
                return trapFocus();
              },
              get loop() {
                return loop2();
              },
              forceMount: false,
              get id() {
                return id();
              },
              get shouldRender() {
                return contentState.shouldRender;
              },
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          node_4,
          ($$render) => {
            if (!forceMount()) $$render(consequent_3);
          },
          true
        );
      }
      append($$anchor2, fragment_4);
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$3 = from_html(`<button><!></button>`);
function Menu_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "disabled",
    "type"
  ]);
  const triggerState = DropdownMenuTriggerState.create({
    id: boxWith(() => id()),
    disabled: boxWith(() => disabled() ?? false),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  Floating_layer_anchor($$anchor, {
    get id() {
      return id();
    },
    get ref() {
      return triggerState.opts.ref;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var button = root_3$3();
          attribute_effect(button, () => ({ ...get$2(mergedProps) }));
          var node_2 = child(button);
          snippet(node_2, () => $$props.children ?? noop$1);
          reset(button);
          append($$anchor3, button);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
const tabsAttrs = createBitsAttrs({
  component: "tabs",
  parts: ["root", "list", "trigger", "content"]
});
const TabsRootContext = new Context("Tabs.Root");
const _TabsRootState = class _TabsRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __publicField(this, "rovingFocusGroup");
    __privateAdd(this, _triggerIds, state(proxy([])));
    __publicField(this, "valueToTriggerId", new SvelteMap());
    __publicField(this, "valueToContentId", new SvelteMap());
    __privateAdd(this, _props21, user_derived(() => ({
      id: this.opts.id.current,
      "data-orientation": this.opts.orientation.current,
      [tabsAttrs.root]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      candidateAttr: tabsAttrs.trigger,
      rootNode: this.opts.ref,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
  }
  static create(opts) {
    return TabsRootContext.set(new _TabsRootState(opts));
  }
  get triggerIds() {
    return get$2(__privateGet(this, _triggerIds));
  }
  set triggerIds(value) {
    set(__privateGet(this, _triggerIds), value, true);
  }
  registerTrigger(id, value) {
    this.triggerIds.push(id);
    this.valueToTriggerId.set(value, id);
    return () => {
      this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
      this.valueToTriggerId.delete(value);
    };
  }
  registerContent(id, value) {
    this.valueToContentId.set(value, id);
    return () => {
      this.valueToContentId.delete(value);
    };
  }
  setValue(v) {
    this.opts.value.current = v;
  }
  get props() {
    return get$2(__privateGet(this, _props21));
  }
  set props(value) {
    set(__privateGet(this, _props21), value);
  }
};
_triggerIds = new WeakMap();
_props21 = new WeakMap();
let TabsRootState = _TabsRootState;
const _TabsListState = class _TabsListState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isDisabled3, user_derived(() => this.root.opts.disabled.current));
    __privateAdd(this, _props22, user_derived(() => ({
      id: this.opts.id.current,
      role: "tablist",
      "aria-orientation": this.root.opts.orientation.current,
      "data-orientation": this.root.opts.orientation.current,
      [tabsAttrs.list]: "",
      "data-disabled": boolToEmptyStrOrUndef(get$2(__privateGet(this, _isDisabled3))),
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
  }
  static create(opts) {
    return new _TabsListState(opts, TabsRootContext.get());
  }
  get props() {
    return get$2(__privateGet(this, _props22));
  }
  set props(value) {
    set(__privateGet(this, _props22), value);
  }
};
_isDisabled3 = new WeakMap();
_props22 = new WeakMap();
let TabsListState = _TabsListState;
const _TabsTriggerState = class _TabsTriggerState {
  constructor(opts, root2) {
    __privateAdd(this, _TabsTriggerState_instances);
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _tabIndex, state(0));
    __privateAdd(this, _isActive2, user_derived(() => this.root.opts.value.current === this.opts.value.current));
    __privateAdd(this, _isDisabled4, user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current));
    __privateAdd(this, _ariaControls2, user_derived(() => this.root.valueToContentId.get(this.opts.value.current)));
    __privateAdd(this, _props23, user_derived(() => ({
      id: this.opts.id.current,
      role: "tab",
      "data-state": getTabDataState(get$2(__privateGet(this, _isActive2))),
      "data-value": this.opts.value.current,
      "data-orientation": this.root.opts.orientation.current,
      "data-disabled": boolToEmptyStrOrUndef(get$2(__privateGet(this, _isDisabled4))),
      "aria-selected": boolToStr(get$2(__privateGet(this, _isActive2))),
      "aria-controls": get$2(__privateGet(this, _ariaControls2)),
      [tabsAttrs.trigger]: "",
      disabled: boolToTrueOrUndef(get$2(__privateGet(this, _isDisabled4))),
      tabindex: get$2(__privateGet(this, _tabIndex)),
      //
      onclick: this.onclick,
      onfocus: this.onfocus,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
    watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
      return this.root.registerTrigger(id, value);
    });
    user_effect(() => {
      this.root.triggerIds.length;
      if (get$2(__privateGet(this, _isActive2)) || !this.root.opts.value.current) {
        set(__privateGet(this, _tabIndex), 0);
      } else {
        set(__privateGet(this, _tabIndex), -1);
      }
    });
    this.onfocus = this.onfocus.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _TabsTriggerState(opts, TabsRootContext.get());
  }
  onfocus(_) {
    if (this.root.opts.activationMode.current !== "automatic" || get$2(__privateGet(this, _isDisabled4))) return;
    __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
  }
  onclick(_) {
    if (get$2(__privateGet(this, _isDisabled4))) return;
    __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
  }
  onkeydown(e) {
    if (get$2(__privateGet(this, _isDisabled4))) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
      return;
    }
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  get props() {
    return get$2(__privateGet(this, _props23));
  }
  set props(value) {
    set(__privateGet(this, _props23), value);
  }
};
_tabIndex = new WeakMap();
_isActive2 = new WeakMap();
_isDisabled4 = new WeakMap();
_ariaControls2 = new WeakMap();
_TabsTriggerState_instances = new WeakSet();
activate_fn = function() {
  if (this.root.opts.value.current === this.opts.value.current) return;
  this.root.setValue(this.opts.value.current);
};
_props23 = new WeakMap();
let TabsTriggerState = _TabsTriggerState;
const _TabsContentState = class _TabsContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isActive3, user_derived(() => this.root.opts.value.current === this.opts.value.current));
    __privateAdd(this, _ariaLabelledBy, user_derived(() => this.root.valueToTriggerId.get(this.opts.value.current)));
    __privateAdd(this, _props24, user_derived(() => ({
      id: this.opts.id.current,
      role: "tabpanel",
      hidden: boolToTrueOrUndef(!get$2(__privateGet(this, _isActive3))),
      tabindex: 0,
      "data-value": this.opts.value.current,
      "data-state": getTabDataState(get$2(__privateGet(this, _isActive3))),
      "aria-labelledby": get$2(__privateGet(this, _ariaLabelledBy)),
      "data-orientation": this.root.opts.orientation.current,
      [tabsAttrs.content]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
    watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
      return this.root.registerContent(id, value);
    });
  }
  static create(opts) {
    return new _TabsContentState(opts, TabsRootContext.get());
  }
  get props() {
    return get$2(__privateGet(this, _props24));
  }
  set props(value) {
    set(__privateGet(this, _props24), value);
  }
};
_isActive3 = new WeakMap();
_ariaLabelledBy = new WeakMap();
_props24 = new WeakMap();
let TabsContentState = _TabsContentState;
function getTabDataState(condition) {
  return condition ? "active" : "inactive";
}
var root_2$4 = from_html(`<div><!></div>`);
function Tabs($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15, ""), onValueChange = prop($$props, "onValueChange", 3, noop), orientation = prop($$props, "orientation", 3, "horizontal"), loop2 = prop($$props, "loop", 3, true), activationMode = prop($$props, "activationMode", 3, "automatic"), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "value",
    "onValueChange",
    "orientation",
    "loop",
    "activationMode",
    "disabled",
    "children",
    "child"
  ]);
  const rootState = TabsRootState.create({
    id: boxWith(() => id()),
    value: boxWith(() => value(), (v) => {
      value(v);
      onValueChange()(v);
    }),
    orientation: boxWith(() => orientation()),
    loop: boxWith(() => loop2()),
    activationMode: boxWith(() => activationMode()),
    disabled: boxWith(() => disabled()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$4();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$3 = from_html(`<div><!></div>`);
function Tabs_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "value"
  ]);
  const contentState = TabsContentState.create({
    value: boxWith(() => $$props.value),
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$3();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$2 = from_html(`<div><!></div>`);
function Tabs_list($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "id",
    "ref"
  ]);
  const listState = TabsListState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, listState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$2();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$1 = from_html(`<button><!></button>`);
function Tabs_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), id = prop($$props, "id", 19, () => createId(uid)), type = prop($$props, "type", 3, "button"), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "disabled",
    "id",
    "type",
    "value",
    "ref"
  ]);
  const triggerState = TabsTriggerState.create({
    id: boxWith(() => id()),
    disabled: boxWith(() => disabled() ?? false),
    value: boxWith(() => $$props.value),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$1();
      attribute_effect(button, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Tooltip($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop);
  TooltipRootState.create({
    open: boxWith(() => open(), (v) => {
      open(v);
      onOpenChange()(v);
    }),
    delayDuration: boxWith(() => $$props.delayDuration),
    disableCloseOnTriggerClick: boxWith(() => $$props.disableCloseOnTriggerClick),
    disableHoverableContent: boxWith(() => $$props.disableHoverableContent),
    ignoreNonKeyboardFocus: boxWith(() => $$props.ignoreNonKeyboardFocus),
    disabled: boxWith(() => $$props.disabled),
    onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
  });
  Floating_layer($$anchor, {
    tooltip: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_4 = from_html(`<div><div><!></div></div>`);
var root_9 = from_html(`<div><div><!></div></div>`);
function Tooltip_content($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), side = prop($$props, "side", 3, "top"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), avoidCollisions = prop($$props, "avoidCollisions", 3, true), arrowPadding = prop($$props, "arrowPadding", 3, 0), sticky = prop($$props, "sticky", 3, "partial"), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), collisionPadding = prop($$props, "collisionPadding", 3, 0), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), forceMount = prop($$props, "forceMount", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "side",
    "sideOffset",
    "align",
    "avoidCollisions",
    "arrowPadding",
    "sticky",
    "strategy",
    "hideWhenDetached",
    "collisionPadding",
    "onInteractOutside",
    "onEscapeKeydown",
    "forceMount"
  ]);
  const contentState = TooltipContentState.create({
    id: boxWith(() => id()),
    ref: boxWith(() => ref(), (v) => ref(v)),
    onInteractOutside: boxWith(() => onInteractOutside()),
    onEscapeKeydown: boxWith(() => onEscapeKeydown())
  });
  const floatingProps = user_derived(() => ({
    side: side(),
    sideOffset: sideOffset(),
    align: align(),
    avoidCollisions: avoidCollisions(),
    arrowPadding: arrowPadding(),
    sticky: sticky(),
    hideWhenDetached: hideWhenDetached(),
    collisionPadding: collisionPadding(),
    strategy: $$props.strategy
  }));
  const mergedProps = user_derived(() => mergeProps(restProps, get$2(floatingProps), contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          const mergedProps2 = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("tooltip") }));
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $02 = user_derived(() => ({
                  props: get$2(mergedProps2),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$2($02));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$2(mergedProps2) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$1);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        let $0 = user_derived(() => contentState.root.disableHoverableContent ? "none" : "auto");
        Popper_layer_force_mount($$anchor2, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
          get enabled() {
            return contentState.root.opts.open.current;
          },
          get id() {
            return id();
          },
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: true,
          get ref() {
            return contentState.opts.ref;
          },
          tooltip: true,
          get shouldRender() {
            return contentState.shouldRender;
          },
          get contentPointerEvents() {
            return get$2($0);
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_4 = comment();
      var node_4 = first_child(fragment_4);
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              const mergedProps2 = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("tooltip") }));
              var fragment_6 = comment();
              var node_5 = first_child(fragment_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_6 = first_child(fragment_7);
                  {
                    let $02 = user_derived(() => ({
                      props: get$2(mergedProps2),
                      wrapperProps: wrapperProps(),
                      ...contentState.snippetProps
                    }));
                    snippet(node_6, () => $$props.child, () => get$2($02));
                  }
                  append($$anchor5, fragment_7);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_2 = root_9();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$2(mergedProps2) }));
                  var node_7 = child(div_3);
                  snippet(node_7, () => $$props.children ?? noop$1);
                  reset(div_3);
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_5, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              append($$anchor4, fragment_6);
            };
            let $0 = user_derived(() => contentState.root.disableHoverableContent ? "none" : "auto");
            Popper_layer($$anchor3, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
              get open() {
                return contentState.root.opts.open.current;
              },
              get id() {
                return id();
              },
              trapFocus: false,
              loop: false,
              preventScroll: false,
              forceMount: false,
              get ref() {
                return contentState.opts.ref;
              },
              tooltip: true,
              get shouldRender() {
                return contentState.shouldRender;
              },
              get contentPointerEvents() {
                return get$2($0);
              },
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          node_4,
          ($$render) => {
            if (!forceMount()) $$render(consequent_3);
          },
          true
        );
      }
      append($$anchor2, fragment_4);
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$2 = from_html(`<button><!></button>`);
function Tooltip_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), disabled = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "disabled",
    "type",
    "ref"
  ]);
  const triggerState = TooltipTriggerState.create({
    id: boxWith(() => id()),
    disabled: boxWith(() => disabled() ?? false),
    ref: boxWith(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  Floating_layer_anchor($$anchor, {
    get id() {
      return id();
    },
    get ref() {
      return triggerState.opts.ref;
    },
    tooltip: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var button = root_3$2();
          attribute_effect(button, () => ({ ...get$2(mergedProps) }));
          var node_2 = child(button);
          snippet(node_2, () => $$props.children ?? noop$1);
          reset(button);
          append($$anchor3, button);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
const logs = writable([]);
const selectedLog = writable(null);
const levelFilter = writable(
  /* @__PURE__ */ new Set(["info", "warn", "error"])
);
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
var root$8 = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["type", "name", "color", "size", "stroke", "iconNode"]);
  push($$props, false);
  let type = prop($$props, "type", 8);
  let name = prop($$props, "name", 8);
  let color = prop($$props, "color", 8, "currentColor");
  let size2 = prop($$props, "size", 8, 24);
  let stroke = prop($$props, "stroke", 8, 2);
  let iconNode = prop($$props, "iconNode", 8);
  init();
  var svg = root$8();
  attribute_effect(svg, () => ({
    ...defaultAttributes[type()],
    ...$$restProps,
    width: size2(),
    height: size2(),
    class: (deep_read_state(name()), deep_read_state($$sanitized_props), untrack(() => `tabler-icon tabler-icon-${name()} ${$$sanitized_props.class ?? ""}`)),
    ...type() === "filled" ? { fill: color() } : { "stroke-width": stroke(), stroke: color() }
  }));
  var node = child(svg);
  each(node, 1, iconNode, index$1, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get$2($$item), 2));
    let tag = () => get$2($$array)[0];
    let attrs = () => get$2($$array)[1];
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
function Check($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M5 12l5 5l10 -10" }]];
  Icon($$anchor, spread_props({ type: "outline", name: "check" }, () => $$sanitized_props, {
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
function Disc($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { "d": "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }],
    ["path", { "d": "M7 12a5 5 0 0 1 5 -5" }],
    ["path", { "d": "M12 17a5 5 0 0 0 5 -5" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "disc" }, () => $$sanitized_props, {
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
function Forms($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" }],
    ["path", { "d": "M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" }],
    ["path", { "d": "M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" }],
    ["path", { "d": "M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" }],
    ["path", { "d": "M17 12h.01" }],
    ["path", { "d": "M13 12h.01" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "forms" }, () => $$sanitized_props, {
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
function Loader($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 6l0 -3" }],
    ["path", { "d": "M16.25 7.75l2.15 -2.15" }],
    ["path", { "d": "M18 12l3 0" }],
    ["path", { "d": "M16.25 16.25l2.15 2.15" }],
    ["path", { "d": "M12 18l0 3" }],
    ["path", { "d": "M7.75 16.25l-2.15 2.15" }],
    ["path", { "d": "M6 12l-3 0" }],
    ["path", { "d": "M7.75 7.75l-2.15 -2.15" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "loader" }, () => $$sanitized_props, {
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
function Minus($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M5 12l14 0" }]];
  Icon($$anchor, spread_props({ type: "outline", name: "minus" }, () => $$sanitized_props, {
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
function Password($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 10v4" }],
    ["path", { "d": "M10 13l4 -2" }],
    ["path", { "d": "M10 11l4 2" }],
    ["path", { "d": "M5 10v4" }],
    ["path", { "d": "M3 13l4 -2" }],
    ["path", { "d": "M3 11l4 2" }],
    ["path", { "d": "M19 10v4" }],
    ["path", { "d": "M17 13l4 -2" }],
    ["path", { "d": "M17 11l4 2" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "password" }, () => $$sanitized_props, {
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
function Plus($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M12 5l0 14" }],
    ["path", { "d": "M5 12l14 0" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "plus" }, () => $$sanitized_props, {
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
function Server_2($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"
      }
    ],
    [
      "path",
      {
        "d": "M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2"
      }
    ],
    ["path", { "d": "M7 8l0 .01" }],
    ["path", { "d": "M7 16l0 .01" }],
    ["path", { "d": "M11 8h6" }],
    ["path", { "d": "M11 16h6" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "server-2" }, () => $$sanitized_props, {
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
function Server($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3"
      }
    ],
    [
      "path",
      {
        "d": "M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2"
      }
    ],
    ["path", { "d": "M7 8l0 .01" }],
    ["path", { "d": "M7 16l0 .01" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "server" }, () => $$sanitized_props, {
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
function Test_pipe($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"
      }
    ],
    ["path", { "d": "M7 13h8" }],
    ["path", { "d": "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" }],
    ["path", { "d": "M15 3l6 6" }]
  ];
  Icon($$anchor, spread_props({ type: "outline", name: "test-pipe" }, () => $$sanitized_props, {
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
function Button_1($$anchor, $$props) {
  let variant = prop($$props, "variant", 3, "primary"), size2 = prop($$props, "size", 3, "md"), loading = prop($$props, "loading", 3, false), disabled = prop($$props, "disabled", 3, false), rest = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "variant",
    "size",
    "loading",
    "disabled",
    "children"
  ]);
  const base = "flex gap-1 items-center justify-center rounded-xl font-medium transition-all select-none text-sm";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
    secondary: "bg-muted text-muted-foreground hover:bg-muted/90 active:bg-muted/80",
    ghost: "bg-transparent text-foreground hover:bg-muted active:bg-muted",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80"
  };
  const sizes = {
    sm: "px-2 h-6 text-xs",
    md: "px-3 h-8 text-sm",
    lg: "px-4 h-10 text-md",
    icon: "flex items-center justify-center size-8 text-sm",
    "icon-sm": "flex items-center justify-center size-6 text-xs"
  };
  const isDisabled = user_derived(() => disabled() || loading());
  const disabledClass = user_derived(() => get$2(isDisabled) ? "opacity-60 cursor-not-allowed" : "");
  const className = user_derived(() => `${base} ${variants[variant()]} ${sizes[size2()]} ${get$2(disabledClass)}`);
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Button, ($$anchor2, Button_Root) => {
    Button_Root($$anchor2, spread_props(() => rest, {
      get class() {
        return get$2(className);
      },
      get disabled() {
        return get$2(isDisabled);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        snippet(node_1, () => $$props.children ?? noop$1);
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    }));
  });
  append($$anchor, fragment);
}
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size2 = 21) {
  let id = "";
  let i = size2 | 0;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
}
const runtimeURL = window.location.origin + "/wails/runtime";
const objectNames = Object.freeze({
  Call: 0,
  Clipboard: 1,
  Application: 2,
  Events: 3,
  ContextMenu: 4,
  Dialog: 5,
  Window: 6,
  Screens: 7,
  System: 8,
  Browser: 9,
  CancelCall: 10,
  IOS: 11
});
let clientId = nanoid();
function newRuntimeCaller(object, windowName = "") {
  return function(method, args = null) {
    return runtimeCallWithID(object, method, windowName, args);
  };
}
async function runtimeCallWithID(objectID, method, windowName, args) {
  var _a2, _b;
  let url = new URL(runtimeURL);
  let body = {
    object: objectID,
    method
  };
  if (args !== null && args !== void 0) {
    body.args = args;
  }
  let headers = {
    ["x-wails-client-id"]: clientId,
    ["Content-Type"]: "application/json"
  };
  if (windowName) {
    headers["x-wails-window-name"] = windowName;
  }
  let response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  if (((_b = (_a2 = response.headers.get("Content-Type")) === null || _a2 === void 0 ? void 0 : _a2.indexOf("application/json")) !== null && _b !== void 0 ? _b : -1) !== -1) {
    return response.json();
  } else {
    return response.text();
  }
}
newRuntimeCaller(objectNames.System);
const _invoke = function() {
  var _a2, _b, _c, _d, _e, _f;
  try {
    if ((_b = (_a2 = window.chrome) === null || _a2 === void 0 ? void 0 : _a2.webview) === null || _b === void 0 ? void 0 : _b.postMessage) {
      return window.chrome.webview.postMessage.bind(window.chrome.webview);
    } else if ((_e = (_d = (_c = window.webkit) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d["external"]) === null || _e === void 0 ? void 0 : _e.postMessage) {
      return window.webkit.messageHandlers["external"].postMessage.bind(window.webkit.messageHandlers["external"]);
    } else if ((_f = window.wails) === null || _f === void 0 ? void 0 : _f.invoke) {
      return (msg) => window.wails.invoke(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
  } catch (e) {
  }
  console.warn("\n%c⚠️ Browser Environment Detected %c\n\n%cOnly UI previews are available in the browser. For full functionality, please run the application in desktop mode.\nMore information at: https://v3.wails.io/learn/build/#using-a-browser-for-development\n", "background: #ffffff; color: #000000; font-weight: bold; padding: 4px 8px; border-radius: 4px; border: 2px solid #000000;", "background: transparent;", "color: #ffffff; font-style: italic; font-weight: bold;");
  return null;
}();
function invoke(msg) {
  _invoke === null || _invoke === void 0 ? void 0 : _invoke(msg);
}
function IsWindows() {
  var _a2, _b;
  return ((_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.environment) === null || _b === void 0 ? void 0 : _b.OS) === "windows";
}
function IsDebug() {
  var _a2, _b;
  return Boolean((_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.environment) === null || _b === void 0 ? void 0 : _b.Debug);
}
function canTrackButtons() {
  return new MouseEvent("mousedown").buttons === 0;
}
function eventTarget(event2) {
  var _a2;
  if (event2.target instanceof HTMLElement) {
    return event2.target;
  } else if (!(event2.target instanceof HTMLElement) && event2.target instanceof Node) {
    return (_a2 = event2.target.parentElement) !== null && _a2 !== void 0 ? _a2 : document.body;
  } else {
    return document.body;
  }
}
document.addEventListener("DOMContentLoaded", () => {
});
window.addEventListener("contextmenu", contextMenuHandler);
const call$1 = newRuntimeCaller(objectNames.ContextMenu);
const ContextMenuOpen = 0;
function openContextMenu(id, x, y, data) {
  void call$1(ContextMenuOpen, { id, x, y, data });
}
function contextMenuHandler(event2) {
  const target = eventTarget(event2);
  const customContextMenu = window.getComputedStyle(target).getPropertyValue("--custom-contextmenu").trim();
  if (customContextMenu) {
    event2.preventDefault();
    const data = window.getComputedStyle(target).getPropertyValue("--custom-contextmenu-data");
    openContextMenu(customContextMenu, event2.clientX, event2.clientY, data);
  } else {
    processDefaultContextMenu(event2, target);
  }
}
function processDefaultContextMenu(event2, target) {
  if (IsDebug()) {
    return;
  }
  switch (window.getComputedStyle(target).getPropertyValue("--default-contextmenu").trim()) {
    case "show":
      return;
    case "hide":
      event2.preventDefault();
      return;
  }
  if (target.isContentEditable) {
    return;
  }
  const selection = window.getSelection();
  const hasSelection = selection && selection.toString().length > 0;
  if (hasSelection) {
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      const rects = range.getClientRects();
      for (let j = 0; j < rects.length; j++) {
        const rect = rects[j];
        if (document.elementFromPoint(rect.left, rect.top) === target) {
          return;
        }
      }
    }
  }
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    if (hasSelection || !target.readOnly && !target.disabled) {
      return;
    }
  }
  event2.preventDefault();
}
function GetFlag(key2) {
  try {
    return window._wails.flags[key2];
  } catch (e) {
    throw new Error("Unable to retrieve flag '" + key2 + "': " + e, { cause: e });
  }
}
let canDrag = false;
let dragging = false;
let resizable = false;
let canResize = false;
let resizing = false;
let resizeEdge = "";
let defaultCursor = "auto";
let buttons = 0;
const buttonsTracked = canTrackButtons();
window._wails = window._wails || {};
window._wails.setResizable = (value) => {
  resizable = value;
  if (!resizable) {
    canResize = resizing = false;
    setResize();
  }
};
let dragInitDone = false;
function isMobile() {
  var _a2, _b;
  const os = (_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.environment) === null || _b === void 0 ? void 0 : _b.OS;
  if (os === "ios" || os === "android")
    return true;
  const ua = navigator.userAgent || navigator.vendor || window.opera || "";
  return /android|iphone|ipad|ipod|iemobile|wpdesktop/i.test(ua);
}
function tryInitDragHandlers() {
  if (dragInitDone)
    return;
  if (isMobile())
    return;
  window.addEventListener("mousedown", update, { capture: true });
  window.addEventListener("mousemove", update, { capture: true });
  window.addEventListener("mouseup", update, { capture: true });
  for (const ev of ["click", "contextmenu", "dblclick"]) {
    window.addEventListener(ev, suppressEvent, { capture: true });
  }
  dragInitDone = true;
}
tryInitDragHandlers();
document.addEventListener("DOMContentLoaded", tryInitDragHandlers, { once: true });
let dragEnvPolls = 0;
const dragEnvPoll = window.setInterval(() => {
  if (dragInitDone) {
    window.clearInterval(dragEnvPoll);
    return;
  }
  tryInitDragHandlers();
  if (++dragEnvPolls > 100) {
    window.clearInterval(dragEnvPoll);
  }
}, 50);
function suppressEvent(event2) {
  if (dragging || resizing) {
    event2.stopImmediatePropagation();
    event2.stopPropagation();
    event2.preventDefault();
  }
}
const MouseDown = 0;
const MouseUp = 1;
const MouseMove = 2;
function update(event2) {
  let eventType, eventButtons = event2.buttons;
  switch (event2.type) {
    case "mousedown":
      eventType = MouseDown;
      if (!buttonsTracked) {
        eventButtons = buttons | 1 << event2.button;
      }
      break;
    case "mouseup":
      eventType = MouseUp;
      if (!buttonsTracked) {
        eventButtons = buttons & ~(1 << event2.button);
      }
      break;
    default:
      eventType = MouseMove;
      if (!buttonsTracked) {
        eventButtons = buttons;
      }
      break;
  }
  let released = buttons & ~eventButtons;
  let pressed = eventButtons & ~buttons;
  buttons = eventButtons;
  if (eventType === MouseDown && !(pressed & event2.button)) {
    released |= 1 << event2.button;
    pressed |= 1 << event2.button;
  }
  if (eventType !== MouseMove && resizing || dragging && (eventType === MouseDown || event2.button !== 0)) {
    event2.stopImmediatePropagation();
    event2.stopPropagation();
    event2.preventDefault();
  }
  if (released & 1) {
    primaryUp();
  }
  if (pressed & 1) {
    primaryDown(event2);
  }
  if (eventType === MouseMove) {
    onMouseMove(event2);
  }
}
function primaryDown(event2) {
  canDrag = false;
  canResize = false;
  if (!IsWindows()) {
    if (event2.type === "mousedown" && event2.button === 0 && event2.detail !== 1) {
      return;
    }
  }
  if (resizeEdge) {
    canResize = true;
    return;
  }
  const target = eventTarget(event2);
  const style = window.getComputedStyle(target);
  canDrag = style.getPropertyValue("--wails-draggable").trim() === "drag" && (event2.offsetX - parseFloat(style.paddingLeft) < target.clientWidth && event2.offsetY - parseFloat(style.paddingTop) < target.clientHeight);
}
function primaryUp(event2) {
  canDrag = false;
  dragging = false;
  canResize = false;
  resizing = false;
}
const cursorForEdge = Object.freeze({
  "se-resize": "nwse-resize",
  "sw-resize": "nesw-resize",
  "nw-resize": "nwse-resize",
  "ne-resize": "nesw-resize",
  "w-resize": "ew-resize",
  "n-resize": "ns-resize",
  "s-resize": "ns-resize",
  "e-resize": "ew-resize"
});
function setResize(edge) {
  if (edge) {
    if (!resizeEdge) {
      defaultCursor = document.body.style.cursor;
    }
    document.body.style.cursor = cursorForEdge[edge];
  } else if (!edge && resizeEdge) {
    document.body.style.cursor = defaultCursor;
  }
  resizeEdge = edge || "";
}
function onMouseMove(event2) {
  if (canResize && resizeEdge) {
    resizing = true;
    invoke("wails:resize:" + resizeEdge);
  } else if (canDrag) {
    dragging = true;
    invoke("wails:drag");
  }
  if (dragging || resizing) {
    canDrag = canResize = false;
    return;
  }
  if (!resizable || !IsWindows()) {
    if (resizeEdge) {
      setResize();
    }
    return;
  }
  const resizeHandleHeight = GetFlag("system.resizeHandleHeight") || 5;
  const resizeHandleWidth = GetFlag("system.resizeHandleWidth") || 5;
  const cornerExtra = GetFlag("resizeCornerExtra") || 10;
  const rightBorder = window.outerWidth - event2.clientX < resizeHandleWidth;
  const leftBorder = event2.clientX < resizeHandleWidth;
  const topBorder = event2.clientY < resizeHandleHeight;
  const bottomBorder = window.outerHeight - event2.clientY < resizeHandleHeight;
  const rightCorner = window.outerWidth - event2.clientX < resizeHandleWidth + cornerExtra;
  const leftCorner = event2.clientX < resizeHandleWidth + cornerExtra;
  const topCorner = event2.clientY < resizeHandleHeight + cornerExtra;
  const bottomCorner = window.outerHeight - event2.clientY < resizeHandleHeight + cornerExtra;
  if (!leftCorner && !topCorner && !bottomCorner && !rightCorner) {
    setResize();
  } else if (rightCorner && bottomCorner)
    setResize("se-resize");
  else if (leftCorner && bottomCorner)
    setResize("sw-resize");
  else if (leftCorner && topCorner)
    setResize("nw-resize");
  else if (topCorner && rightCorner)
    setResize("ne-resize");
  else if (leftBorder)
    setResize("w-resize");
  else if (topBorder)
    setResize("n-resize");
  else if (bottomBorder)
    setResize("s-resize");
  else if (rightBorder)
    setResize("e-resize");
  else
    setResize();
}
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr.call(all) === toStr.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e) {
        }
      }
      return false;
    };
  }
}
function isCallableRefApply(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
}
function isCallableNoRefApply(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
}
const isCallable = reflectApply ? isCallableRefApply : isCallableNoRefApply;
var _a;
class CancelError extends Error {
  /**
   * Constructs a new `CancelError` instance.
   * @param message - The error message.
   * @param options - Options to be forwarded to the Error constructor.
   */
  constructor(message, options) {
    super(message, options);
    this.name = "CancelError";
  }
}
class CancelledRejectionError extends Error {
  /**
   * Constructs a new `CancelledRejectionError` instance.
   * @param promise - The promise that caused the error originally.
   * @param reason - The rejection reason.
   * @param info - An optional informative message specifying the circumstances in which the error was thrown.
   *               Defaults to the string `"Unhandled rejection in cancelled promise."`.
   */
  constructor(promise, reason, info) {
    super((info !== null && info !== void 0 ? info : "Unhandled rejection in cancelled promise.") + " Reason: " + errorMessage(reason), { cause: reason });
    this.promise = promise;
    this.name = "CancelledRejectionError";
  }
}
const barrierSym = Symbol("barrier");
const cancelImplSym = Symbol("cancelImpl");
const species = (_a = Symbol.species) !== null && _a !== void 0 ? _a : Symbol("speciesPolyfill");
class CancellablePromise extends Promise {
  /**
   * Creates a new `CancellablePromise`.
   *
   * @param executor - A callback used to initialize the promise. This callback is passed two arguments:
   *                   a `resolve` callback used to resolve the promise with a value
   *                   or the result of another promise (possibly cancellable),
   *                   and a `reject` callback used to reject the promise with a provided reason or error.
   *                   If the value provided to the `resolve` callback is a thenable _and_ cancellable object
   *                   (it has a `then` _and_ a `cancel` method),
   *                   cancellation requests will be forwarded to that object and the oncancelled will not be invoked anymore.
   *                   If any one of the two callbacks is called _after_ the promise has been cancelled,
   *                   the provided values will be cancelled and resolved as usual,
   *                   but their results will be discarded.
   *                   However, if the resolution process ultimately ends up in a rejection
   *                   that is not due to cancellation, the rejection reason
   *                   will be wrapped in a {@link CancelledRejectionError}
   *                   and bubbled up as an unhandled rejection.
   * @param oncancelled - It is the caller's responsibility to ensure that any operation
   *                      started by the executor is properly halted upon cancellation.
   *                      This optional callback can be used to that purpose.
   *                      It will be called _synchronously_ with a cancellation cause
   *                      when cancellation is requested, _after_ the promise has already rejected
   *                      with a {@link CancelError}, but _before_
   *                      any {@link then}/{@link catch}/{@link finally} callback runs.
   *                      If the callback returns a thenable, the promise returned from {@link cancel}
   *                      will only fulfill after the former has settled.
   *                      Unhandled exceptions or rejections from the callback will be wrapped
   *                      in a {@link CancelledRejectionError} and bubbled up as unhandled rejections.
   *                      If the `resolve` callback is called before cancellation with a cancellable promise,
   *                      cancellation requests on this promise will be diverted to that promise,
   *                      and the original `oncancelled` callback will be discarded.
   */
  constructor(executor, oncancelled) {
    let resolve;
    let reject;
    super((res, rej) => {
      resolve = res;
      reject = rej;
    });
    if (this.constructor[species] !== Promise) {
      throw new TypeError("CancellablePromise does not support transparent subclassing. Please refrain from overriding the [Symbol.species] static property.");
    }
    let promise = {
      promise: this,
      resolve,
      reject,
      get oncancelled() {
        return oncancelled !== null && oncancelled !== void 0 ? oncancelled : null;
      },
      set oncancelled(cb) {
        oncancelled = cb !== null && cb !== void 0 ? cb : void 0;
      }
    };
    const state2 = {
      get root() {
        return state2;
      },
      resolving: false,
      settled: false
    };
    void Object.defineProperties(this, {
      [barrierSym]: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      },
      [cancelImplSym]: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: cancellerFor(promise, state2)
      }
    });
    const rejector = rejectorFor(promise, state2);
    try {
      executor(resolverFor(promise, state2), rejector);
    } catch (err) {
      if (state2.resolving) {
        console.log("Unhandled exception in CancellablePromise executor.", err);
      } else {
        rejector(err);
      }
    }
  }
  /**
   * Cancels immediately the execution of the operation associated with this promise.
   * The promise rejects with a {@link CancelError} instance as reason,
   * with the {@link CancelError#cause} property set to the given argument, if any.
   *
   * Has no effect if called after the promise has already settled;
   * repeated calls in particular are safe, but only the first one
   * will set the cancellation cause.
   *
   * The `CancelError` exception _need not_ be handled explicitly _on the promises that are being cancelled:_
   * cancelling a promise with no attached rejection handler does not trigger an unhandled rejection event.
   * Therefore, the following idioms are all equally correct:
   * ```ts
   * new CancellablePromise((resolve, reject) => { ... }).cancel();
   * new CancellablePromise((resolve, reject) => { ... }).then(...).cancel();
   * new CancellablePromise((resolve, reject) => { ... }).then(...).catch(...).cancel();
   * ```
   * Whenever some cancelled promise in a chain rejects with a `CancelError`
   * with the same cancellation cause as itself, the error will be discarded silently.
   * However, the `CancelError` _will still be delivered_ to all attached rejection handlers
   * added by {@link then} and related methods:
   * ```ts
   * let cancellable = new CancellablePromise((resolve, reject) => { ... });
   * cancellable.then(() => { ... }).catch(console.log);
   * cancellable.cancel(); // A CancelError is printed to the console.
   * ```
   * If the `CancelError` is not handled downstream by the time it reaches
   * a _non-cancelled_ promise, it _will_ trigger an unhandled rejection event,
   * just like normal rejections would:
   * ```ts
   * let cancellable = new CancellablePromise((resolve, reject) => { ... });
   * let chained = cancellable.then(() => { ... }).then(() => { ... }); // No catch...
   * cancellable.cancel(); // Unhandled rejection event on chained!
   * ```
   * Therefore, it is important to either cancel whole promise chains from their tail,
   * as shown in the correct idioms above, or take care of handling errors everywhere.
   *
   * @returns A cancellable promise that _fulfills_ after the cancel callback (if any)
   * and all handlers attached up to the call to cancel have run.
   * If the cancel callback returns a thenable, the promise returned by `cancel`
   * will also wait for that thenable to settle.
   * This enables callers to wait for the cancelled operation to terminate
   * without being forced to handle potential errors at the call site.
   * ```ts
   * cancellable.cancel().then(() => {
   *     // Cleanup finished, it's safe to do something else.
   * }, (err) => {
   *     // Unreachable: the promise returned from cancel will never reject.
   * });
   * ```
   * Note that the returned promise will _not_ handle implicitly any rejection
   * that might have occurred already in the cancelled chain.
   * It will just track whether registered handlers have been executed or not.
   * Therefore, unhandled rejections will never be silently handled by calling cancel.
   */
  cancel(cause) {
    return new CancellablePromise((resolve) => {
      Promise.all([
        this[cancelImplSym](new CancelError("Promise cancelled.", { cause })),
        currentBarrier(this)
      ]).then(() => resolve(), () => resolve());
    });
  }
  /**
   * Binds promise cancellation to the abort event of the given {@link AbortSignal}.
   * If the signal has already aborted, the promise will be cancelled immediately.
   * When either condition is verified, the cancellation cause will be set
   * to the signal's abort reason (see {@link AbortSignal#reason}).
   *
   * Has no effect if called (or if the signal aborts) _after_ the promise has already settled.
   * Only the first signal to abort will set the cancellation cause.
   *
   * For more details about the cancellation process,
   * see {@link cancel} and the `CancellablePromise` constructor.
   *
   * This method enables `await`ing cancellable promises without having
   * to store them for future cancellation, e.g.:
   * ```ts
   * await longRunningOperation().cancelOn(signal);
   * ```
   * instead of:
   * ```ts
   * let promiseToBeCancelled = longRunningOperation();
   * await promiseToBeCancelled;
   * ```
   *
   * @returns This promise, for method chaining.
   */
  cancelOn(signal) {
    if (signal.aborted) {
      void this.cancel(signal.reason);
    } else {
      signal.addEventListener("abort", () => void this.cancel(signal.reason), { capture: true });
    }
    return this;
  }
  /**
   * Attaches callbacks for the resolution and/or rejection of the `CancellablePromise`.
   *
   * The optional `oncancelled` argument will be invoked when the returned promise is cancelled,
   * with the same semantics as the `oncancelled` argument of the constructor.
   * When the parent promise rejects or is cancelled, the `onrejected` callback will run,
   * _even after the returned promise has been cancelled:_
   * in that case, should it reject or throw, the reason will be wrapped
   * in a {@link CancelledRejectionError} and bubbled up as an unhandled rejection.
   *
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A `CancellablePromise` for the completion of whichever callback is executed.
   * The returned promise is hooked up to propagate cancellation requests up the chain, but not down:
   *
   *   - if the parent promise is cancelled, the `onrejected` handler will be invoked with a `CancelError`
   *     and the returned promise _will resolve regularly_ with its result;
   *   - conversely, if the returned promise is cancelled, _the parent promise is cancelled too;_
   *     the `onrejected` handler will still be invoked with the parent's `CancelError`,
   *     but its result will be discarded
   *     and the returned promise will reject with a `CancelError` as well.
   *
   * The promise returned from {@link cancel} will fulfill only after all attached handlers
   * up the entire promise chain have been run.
   *
   * If either callback returns a cancellable promise,
   * cancellation requests will be diverted to it,
   * and the specified `oncancelled` callback will be discarded.
   */
  then(onfulfilled, onrejected, oncancelled) {
    if (!(this instanceof CancellablePromise)) {
      throw new TypeError("CancellablePromise.prototype.then called on an invalid object.");
    }
    if (!isCallable(onfulfilled)) {
      onfulfilled = identity;
    }
    if (!isCallable(onrejected)) {
      onrejected = thrower;
    }
    if (onfulfilled === identity && onrejected == thrower) {
      return new CancellablePromise((resolve) => resolve(this));
    }
    const barrier = {};
    this[barrierSym] = barrier;
    return new CancellablePromise((resolve, reject) => {
      void super.then((value) => {
        var _a2;
        if (this[barrierSym] === barrier) {
          this[barrierSym] = null;
        }
        (_a2 = barrier.resolve) === null || _a2 === void 0 ? void 0 : _a2.call(barrier);
        try {
          resolve(onfulfilled(value));
        } catch (err) {
          reject(err);
        }
      }, (reason) => {
        var _a2;
        if (this[barrierSym] === barrier) {
          this[barrierSym] = null;
        }
        (_a2 = barrier.resolve) === null || _a2 === void 0 ? void 0 : _a2.call(barrier);
        try {
          resolve(onrejected(reason));
        } catch (err) {
          reject(err);
        }
      });
    }, async (cause) => {
      try {
        return oncancelled === null || oncancelled === void 0 ? void 0 : oncancelled(cause);
      } finally {
        await this.cancel(cause);
      }
    });
  }
  /**
   * Attaches a callback for only the rejection of the Promise.
   *
   * The optional `oncancelled` argument will be invoked when the returned promise is cancelled,
   * with the same semantics as the `oncancelled` argument of the constructor.
   * When the parent promise rejects or is cancelled, the `onrejected` callback will run,
   * _even after the returned promise has been cancelled:_
   * in that case, should it reject or throw, the reason will be wrapped
   * in a {@link CancelledRejectionError} and bubbled up as an unhandled rejection.
   *
   * It is equivalent to
   * ```ts
   * cancellablePromise.then(undefined, onrejected, oncancelled);
   * ```
   * and the same caveats apply.
   *
   * @returns A Promise for the completion of the callback.
   * Cancellation requests on the returned promise
   * will propagate up the chain to the parent promise,
   * but not in the other direction.
   *
   * The promise returned from {@link cancel} will fulfill only after all attached handlers
   * up the entire promise chain have been run.
   *
   * If `onrejected` returns a cancellable promise,
   * cancellation requests will be diverted to it,
   * and the specified `oncancelled` callback will be discarded.
   * See {@link then} for more details.
   */
  catch(onrejected, oncancelled) {
    return this.then(void 0, onrejected, oncancelled);
  }
  /**
   * Attaches a callback that is invoked when the CancellablePromise is settled (fulfilled or rejected). The
   * resolved value cannot be accessed or modified from the callback.
   * The returned promise will settle in the same state as the original one
   * after the provided callback has completed execution,
   * unless the callback throws or returns a rejecting promise,
   * in which case the returned promise will reject as well.
   *
   * The optional `oncancelled` argument will be invoked when the returned promise is cancelled,
   * with the same semantics as the `oncancelled` argument of the constructor.
   * Once the parent promise settles, the `onfinally` callback will run,
   * _even after the returned promise has been cancelled:_
   * in that case, should it reject or throw, the reason will be wrapped
   * in a {@link CancelledRejectionError} and bubbled up as an unhandled rejection.
   *
   * This method is implemented in terms of {@link then} and the same caveats apply.
   * It is polyfilled, hence available in every OS/webview version.
   *
   * @returns A Promise for the completion of the callback.
   * Cancellation requests on the returned promise
   * will propagate up the chain to the parent promise,
   * but not in the other direction.
   *
   * The promise returned from {@link cancel} will fulfill only after all attached handlers
   * up the entire promise chain have been run.
   *
   * If `onfinally` returns a cancellable promise,
   * cancellation requests will be diverted to it,
   * and the specified `oncancelled` callback will be discarded.
   * See {@link then} for more details.
   */
  finally(onfinally, oncancelled) {
    if (!(this instanceof CancellablePromise)) {
      throw new TypeError("CancellablePromise.prototype.finally called on an invalid object.");
    }
    if (!isCallable(onfinally)) {
      return this.then(onfinally, onfinally, oncancelled);
    }
    return this.then((value) => CancellablePromise.resolve(onfinally()).then(() => value), (reason) => CancellablePromise.resolve(onfinally()).then(() => {
      throw reason;
    }), oncancelled);
  }
  /**
   * We use the `[Symbol.species]` static property, if available,
   * to disable the built-in automatic subclassing features from {@link Promise}.
   * It is critical for performance reasons that extenders do not override this.
   * Once the proposal at https://github.com/tc39/proposal-rm-builtin-subclassing
   * is either accepted or retired, this implementation will have to be revised accordingly.
   *
   * @ignore
   * @internal
   */
  static get [species]() {
    return Promise;
  }
  static all(values) {
    let collected = Array.from(values);
    const promise = collected.length === 0 ? CancellablePromise.resolve(collected) : new CancellablePromise((resolve, reject) => {
      void Promise.all(collected).then(resolve, reject);
    }, (cause) => cancelAll(promise, collected, cause));
    return promise;
  }
  static allSettled(values) {
    let collected = Array.from(values);
    const promise = collected.length === 0 ? CancellablePromise.resolve(collected) : new CancellablePromise((resolve, reject) => {
      void Promise.allSettled(collected).then(resolve, reject);
    }, (cause) => cancelAll(promise, collected, cause));
    return promise;
  }
  static any(values) {
    let collected = Array.from(values);
    const promise = collected.length === 0 ? CancellablePromise.resolve(collected) : new CancellablePromise((resolve, reject) => {
      void Promise.any(collected).then(resolve, reject);
    }, (cause) => cancelAll(promise, collected, cause));
    return promise;
  }
  static race(values) {
    let collected = Array.from(values);
    const promise = new CancellablePromise((resolve, reject) => {
      void Promise.race(collected).then(resolve, reject);
    }, (cause) => cancelAll(promise, collected, cause));
    return promise;
  }
  /**
   * Creates a new cancelled CancellablePromise for the provided cause.
   *
   * @group Static Methods
   */
  static cancel(cause) {
    const p = new CancellablePromise(() => {
    });
    p.cancel(cause);
    return p;
  }
  /**
   * Creates a new CancellablePromise that cancels
   * after the specified timeout, with the provided cause.
   *
   * If the {@link AbortSignal.timeout} factory method is available,
   * it is used to base the timeout on _active_ time rather than _elapsed_ time.
   * Otherwise, `timeout` falls back to {@link setTimeout}.
   *
   * @group Static Methods
   */
  static timeout(milliseconds, cause) {
    const promise = new CancellablePromise(() => {
    });
    if (AbortSignal && typeof AbortSignal === "function" && AbortSignal.timeout && typeof AbortSignal.timeout === "function") {
      AbortSignal.timeout(milliseconds).addEventListener("abort", () => void promise.cancel(cause));
    } else {
      setTimeout(() => void promise.cancel(cause), milliseconds);
    }
    return promise;
  }
  static sleep(milliseconds, value) {
    return new CancellablePromise((resolve) => {
      setTimeout(() => resolve(value), milliseconds);
    });
  }
  /**
   * Creates a new rejected CancellablePromise for the provided reason.
   *
   * @group Static Methods
   */
  static reject(reason) {
    return new CancellablePromise((_, reject) => reject(reason));
  }
  static resolve(value) {
    if (value instanceof CancellablePromise) {
      return value;
    }
    return new CancellablePromise((resolve) => resolve(value));
  }
  /**
   * Creates a new CancellablePromise and returns it in an object, along with its resolve and reject functions
   * and a getter/setter for the cancellation callback.
   *
   * This method is polyfilled, hence available in every OS/webview version.
   *
   * @group Static Methods
   */
  static withResolvers() {
    let result = { oncancelled: null };
    result.promise = new CancellablePromise((resolve, reject) => {
      result.resolve = resolve;
      result.reject = reject;
    }, (cause) => {
      var _a2;
      (_a2 = result.oncancelled) === null || _a2 === void 0 ? void 0 : _a2.call(result, cause);
    });
    return result;
  }
}
function cancellerFor(promise, state2) {
  let cancellationPromise = void 0;
  return (reason) => {
    if (!state2.settled) {
      state2.settled = true;
      state2.reason = reason;
      promise.reject(reason);
      void Promise.prototype.then.call(promise.promise, void 0, (err) => {
        if (err !== reason) {
          throw err;
        }
      });
    }
    if (!state2.reason || !promise.oncancelled) {
      return;
    }
    cancellationPromise = new Promise((resolve) => {
      try {
        resolve(promise.oncancelled(state2.reason.cause));
      } catch (err) {
        Promise.reject(new CancelledRejectionError(promise.promise, err, "Unhandled exception in oncancelled callback."));
      }
    }).catch((reason2) => {
      Promise.reject(new CancelledRejectionError(promise.promise, reason2, "Unhandled rejection in oncancelled callback."));
    });
    promise.oncancelled = null;
    return cancellationPromise;
  };
}
function resolverFor(promise, state2) {
  return (value) => {
    if (state2.resolving) {
      return;
    }
    state2.resolving = true;
    if (value === promise.promise) {
      if (state2.settled) {
        return;
      }
      state2.settled = true;
      promise.reject(new TypeError("A promise cannot be resolved with itself."));
      return;
    }
    if (value != null && (typeof value === "object" || typeof value === "function")) {
      let then;
      try {
        then = value.then;
      } catch (err) {
        state2.settled = true;
        promise.reject(err);
        return;
      }
      if (isCallable(then)) {
        try {
          let cancel = value.cancel;
          if (isCallable(cancel)) {
            const oncancelled = (cause) => {
              Reflect.apply(cancel, value, [cause]);
            };
            if (state2.reason) {
              void cancellerFor(Object.assign(Object.assign({}, promise), { oncancelled }), state2)(state2.reason);
            } else {
              promise.oncancelled = oncancelled;
            }
          }
        } catch (_a2) {
        }
        const newState = {
          root: state2.root,
          resolving: false,
          get settled() {
            return this.root.settled;
          },
          set settled(value2) {
            this.root.settled = value2;
          },
          get reason() {
            return this.root.reason;
          }
        };
        const rejector = rejectorFor(promise, newState);
        try {
          Reflect.apply(then, value, [resolverFor(promise, newState), rejector]);
        } catch (err) {
          rejector(err);
        }
        return;
      }
    }
    if (state2.settled) {
      return;
    }
    state2.settled = true;
    promise.resolve(value);
  };
}
function rejectorFor(promise, state2) {
  return (reason) => {
    if (state2.resolving) {
      return;
    }
    state2.resolving = true;
    if (state2.settled) {
      try {
        if (reason instanceof CancelError && state2.reason instanceof CancelError && Object.is(reason.cause, state2.reason.cause)) {
          return;
        }
      } catch (_a2) {
      }
      void Promise.reject(new CancelledRejectionError(promise.promise, reason));
    } else {
      state2.settled = true;
      promise.reject(reason);
    }
  };
}
function cancelAll(parent, values, cause) {
  const results = [];
  for (const value of values) {
    let cancel;
    try {
      if (!isCallable(value.then)) {
        continue;
      }
      cancel = value.cancel;
      if (!isCallable(cancel)) {
        continue;
      }
    } catch (_a2) {
      continue;
    }
    let result;
    try {
      result = Reflect.apply(cancel, value, [cause]);
    } catch (err) {
      Promise.reject(new CancelledRejectionError(parent, err, "Unhandled exception in cancel method."));
      continue;
    }
    if (!result) {
      continue;
    }
    results.push((result instanceof Promise ? result : Promise.resolve(result)).catch((reason) => {
      Promise.reject(new CancelledRejectionError(parent, reason, "Unhandled rejection in cancel method."));
    }));
  }
  return Promise.all(results);
}
function identity(x) {
  return x;
}
function thrower(reason) {
  throw reason;
}
function errorMessage(err) {
  try {
    if (err instanceof Error || typeof err !== "object" || err.toString !== Object.prototype.toString) {
      return "" + err;
    }
  } catch (_a2) {
  }
  try {
    return JSON.stringify(err);
  } catch (_b) {
  }
  try {
    return Object.prototype.toString.call(err);
  } catch (_c) {
  }
  return "<could not convert error to string>";
}
function currentBarrier(promise) {
  var _a2;
  let pwr = (_a2 = promise[barrierSym]) !== null && _a2 !== void 0 ? _a2 : {};
  if (!("promise" in pwr)) {
    Object.assign(pwr, promiseWithResolvers());
  }
  if (promise[barrierSym] == null) {
    pwr.resolve();
    promise[barrierSym] = pwr;
  }
  return pwr.promise;
}
let promiseWithResolvers = Promise.withResolvers;
if (promiseWithResolvers && typeof promiseWithResolvers === "function") {
  promiseWithResolvers = promiseWithResolvers.bind(Promise);
} else {
  promiseWithResolvers = function() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}
window._wails = window._wails || {};
const call = newRuntimeCaller(objectNames.Call);
const cancelCall = newRuntimeCaller(objectNames.CancelCall);
const callResponses = /* @__PURE__ */ new Map();
const CallBinding = 0;
const CancelMethod = 0;
function generateID() {
  let result;
  do {
    result = nanoid();
  } while (callResponses.has(result));
  return result;
}
function Call(options) {
  const id = generateID();
  const result = CancellablePromise.withResolvers();
  callResponses.set(id, { resolve: result.resolve, reject: result.reject });
  const request = call(CallBinding, Object.assign({ "call-id": id }, options));
  let running = true;
  request.then((res) => {
    running = false;
    callResponses.delete(id);
    result.resolve(res);
  }, (err) => {
    running = false;
    callResponses.delete(id);
    result.reject(err);
  });
  const cancel = () => {
    callResponses.delete(id);
    return cancelCall(CancelMethod, { "call-id": id }).catch((err) => {
      console.error("Error while requesting binding call cancellation:", err);
    });
  };
  result.oncancelled = () => {
    if (running) {
      return cancel();
    } else {
      return request.then(cancel);
    }
  };
  return result.promise;
}
function ByID(methodID, ...args) {
  return Call({ methodID, args });
}
const DROP_TARGET_ATTRIBUTE = "data-file-drop-target";
const DROP_TARGET_ACTIVE_CLASS = "file-drop-target-active";
let currentDropTarget = null;
const PositionMethod = 0;
const CenterMethod = 1;
const CloseMethod = 2;
const DisableSizeConstraintsMethod = 3;
const EnableSizeConstraintsMethod = 4;
const FocusMethod = 5;
const ForceReloadMethod = 6;
const FullscreenMethod = 7;
const GetScreenMethod = 8;
const GetZoomMethod = 9;
const HeightMethod = 10;
const HideMethod = 11;
const IsFocusedMethod = 12;
const IsFullscreenMethod = 13;
const IsMaximisedMethod = 14;
const IsMinimisedMethod = 15;
const MaximiseMethod = 16;
const MinimiseMethod = 17;
const NameMethod = 18;
const OpenDevToolsMethod = 19;
const RelativePositionMethod = 20;
const ReloadMethod = 21;
const ResizableMethod = 22;
const RestoreMethod = 23;
const SetPositionMethod = 24;
const SetAlwaysOnTopMethod = 25;
const SetBackgroundColourMethod = 26;
const SetFramelessMethod = 27;
const SetFullscreenButtonEnabledMethod = 28;
const SetMaxSizeMethod = 29;
const SetMinSizeMethod = 30;
const SetRelativePositionMethod = 31;
const SetResizableMethod = 32;
const SetSizeMethod = 33;
const SetTitleMethod = 34;
const SetZoomMethod = 35;
const ShowMethod = 36;
const SizeMethod = 37;
const ToggleFullscreenMethod = 38;
const ToggleMaximiseMethod = 39;
const ToggleFramelessMethod = 40;
const UnFullscreenMethod = 41;
const UnMaximiseMethod = 42;
const UnMinimiseMethod = 43;
const WidthMethod = 44;
const ZoomMethod = 45;
const ZoomInMethod = 46;
const ZoomOutMethod = 47;
const ZoomResetMethod = 48;
const SnapAssistMethod = 49;
const FilesDropped = 50;
const PrintMethod = 51;
function getDropTargetElement(element2) {
  if (!element2) {
    return null;
  }
  return element2.closest(`[${DROP_TARGET_ATTRIBUTE}]`);
}
function canResolveFilePaths() {
  var _a2, _b, _c, _d;
  if (((_b = (_a2 = window.chrome) === null || _a2 === void 0 ? void 0 : _a2.webview) === null || _b === void 0 ? void 0 : _b.postMessageWithAdditionalObjects) == null) {
    return false;
  }
  return ((_d = (_c = window._wails) === null || _c === void 0 ? void 0 : _c.flags) === null || _d === void 0 ? void 0 : _d.enableFileDrop) === true;
}
function resolveFilePaths(x, y, files) {
  var _a2, _b;
  if ((_b = (_a2 = window.chrome) === null || _a2 === void 0 ? void 0 : _a2.webview) === null || _b === void 0 ? void 0 : _b.postMessageWithAdditionalObjects) {
    window.chrome.webview.postMessageWithAdditionalObjects(`file:drop:${x}:${y}`, files);
  }
}
let nativeDragActive = false;
function cleanupNativeDrag() {
  nativeDragActive = false;
  if (currentDropTarget) {
    currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
    currentDropTarget = null;
  }
}
function handleDragEnter() {
  var _a2, _b;
  if (((_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) {
    return;
  }
  nativeDragActive = true;
}
function handleDragLeave() {
  cleanupNativeDrag();
}
function handleDragOver(x, y) {
  var _a2, _b;
  if (!nativeDragActive)
    return;
  if (((_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) {
    return;
  }
  const targetElement = document.elementFromPoint(x, y);
  const dropTarget = getDropTargetElement(targetElement);
  if (currentDropTarget && currentDropTarget !== dropTarget) {
    currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
  }
  if (dropTarget) {
    dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
    currentDropTarget = dropTarget;
  } else {
    currentDropTarget = null;
  }
}
const callerSym = Symbol("caller");
class Window {
  /**
   * Initialises a window object with the specified name.
   *
   * @private
   * @param name - The name of the target window.
   */
  constructor(name = "") {
    this[callerSym] = newRuntimeCaller(objectNames.Window, name);
    for (const method of Object.getOwnPropertyNames(Window.prototype)) {
      if (method !== "constructor" && typeof this[method] === "function") {
        this[method] = this[method].bind(this);
      }
    }
  }
  /**
   * Gets the specified window.
   *
   * @param name - The name of the window to get.
   * @returns The corresponding window object.
   */
  Get(name) {
    return new Window(name);
  }
  /**
   * Returns the absolute position of the window.
   *
   * @returns The current absolute position of the window.
   */
  Position() {
    return this[callerSym](PositionMethod);
  }
  /**
   * Centers the window on the screen.
   */
  Center() {
    return this[callerSym](CenterMethod);
  }
  /**
   * Closes the window.
   */
  Close() {
    return this[callerSym](CloseMethod);
  }
  /**
   * Disables min/max size constraints.
   */
  DisableSizeConstraints() {
    return this[callerSym](DisableSizeConstraintsMethod);
  }
  /**
   * Enables min/max size constraints.
   */
  EnableSizeConstraints() {
    return this[callerSym](EnableSizeConstraintsMethod);
  }
  /**
   * Focuses the window.
   */
  Focus() {
    return this[callerSym](FocusMethod);
  }
  /**
   * Forces the window to reload the page assets.
   */
  ForceReload() {
    return this[callerSym](ForceReloadMethod);
  }
  /**
   * Switches the window to fullscreen mode.
   */
  Fullscreen() {
    return this[callerSym](FullscreenMethod);
  }
  /**
   * Returns the screen that the window is on.
   *
   * @returns The screen the window is currently on.
   */
  GetScreen() {
    return this[callerSym](GetScreenMethod);
  }
  /**
   * Returns the current zoom level of the window.
   *
   * @returns The current zoom level.
   */
  GetZoom() {
    return this[callerSym](GetZoomMethod);
  }
  /**
   * Returns the height of the window.
   *
   * @returns The current height of the window.
   */
  Height() {
    return this[callerSym](HeightMethod);
  }
  /**
   * Hides the window.
   */
  Hide() {
    return this[callerSym](HideMethod);
  }
  /**
   * Returns true if the window is focused.
   *
   * @returns Whether the window is currently focused.
   */
  IsFocused() {
    return this[callerSym](IsFocusedMethod);
  }
  /**
   * Returns true if the window is fullscreen.
   *
   * @returns Whether the window is currently fullscreen.
   */
  IsFullscreen() {
    return this[callerSym](IsFullscreenMethod);
  }
  /**
   * Returns true if the window is maximised.
   *
   * @returns Whether the window is currently maximised.
   */
  IsMaximised() {
    return this[callerSym](IsMaximisedMethod);
  }
  /**
   * Returns true if the window is minimised.
   *
   * @returns Whether the window is currently minimised.
   */
  IsMinimised() {
    return this[callerSym](IsMinimisedMethod);
  }
  /**
   * Maximises the window.
   */
  Maximise() {
    return this[callerSym](MaximiseMethod);
  }
  /**
   * Minimises the window.
   */
  Minimise() {
    return this[callerSym](MinimiseMethod);
  }
  /**
   * Returns the name of the window.
   *
   * @returns The name of the window.
   */
  Name() {
    return this[callerSym](NameMethod);
  }
  /**
   * Opens the development tools pane.
   */
  OpenDevTools() {
    return this[callerSym](OpenDevToolsMethod);
  }
  /**
   * Returns the relative position of the window to the screen.
   *
   * @returns The current relative position of the window.
   */
  RelativePosition() {
    return this[callerSym](RelativePositionMethod);
  }
  /**
   * Reloads the page assets.
   */
  Reload() {
    return this[callerSym](ReloadMethod);
  }
  /**
   * Returns true if the window is resizable.
   *
   * @returns Whether the window is currently resizable.
   */
  Resizable() {
    return this[callerSym](ResizableMethod);
  }
  /**
   * Restores the window to its previous state if it was previously minimised, maximised or fullscreen.
   */
  Restore() {
    return this[callerSym](RestoreMethod);
  }
  /**
   * Sets the absolute position of the window.
   *
   * @param x - The desired horizontal absolute position of the window.
   * @param y - The desired vertical absolute position of the window.
   */
  SetPosition(x, y) {
    return this[callerSym](SetPositionMethod, { x, y });
  }
  /**
   * Sets the window to be always on top.
   *
   * @param alwaysOnTop - Whether the window should stay on top.
   */
  SetAlwaysOnTop(alwaysOnTop) {
    return this[callerSym](SetAlwaysOnTopMethod, { alwaysOnTop });
  }
  /**
   * Sets the background colour of the window.
   *
   * @param r - The desired red component of the window background.
   * @param g - The desired green component of the window background.
   * @param b - The desired blue component of the window background.
   * @param a - The desired alpha component of the window background.
   */
  SetBackgroundColour(r2, g, b, a) {
    return this[callerSym](SetBackgroundColourMethod, { r: r2, g, b, a });
  }
  /**
   * Removes the window frame and title bar.
   *
   * @param frameless - Whether the window should be frameless.
   */
  SetFrameless(frameless) {
    return this[callerSym](SetFramelessMethod, { frameless });
  }
  /**
   * Disables the system fullscreen button.
   *
   * @param enabled - Whether the fullscreen button should be enabled.
   */
  SetFullscreenButtonEnabled(enabled) {
    return this[callerSym](SetFullscreenButtonEnabledMethod, { enabled });
  }
  /**
   * Sets the maximum size of the window.
   *
   * @param width - The desired maximum width of the window.
   * @param height - The desired maximum height of the window.
   */
  SetMaxSize(width, height) {
    return this[callerSym](SetMaxSizeMethod, { width, height });
  }
  /**
   * Sets the minimum size of the window.
   *
   * @param width - The desired minimum width of the window.
   * @param height - The desired minimum height of the window.
   */
  SetMinSize(width, height) {
    return this[callerSym](SetMinSizeMethod, { width, height });
  }
  /**
   * Sets the relative position of the window to the screen.
   *
   * @param x - The desired horizontal relative position of the window.
   * @param y - The desired vertical relative position of the window.
   */
  SetRelativePosition(x, y) {
    return this[callerSym](SetRelativePositionMethod, { x, y });
  }
  /**
   * Sets whether the window is resizable.
   *
   * @param resizable - Whether the window should be resizable.
   */
  SetResizable(resizable2) {
    return this[callerSym](SetResizableMethod, { resizable: resizable2 });
  }
  /**
   * Sets the size of the window.
   *
   * @param width - The desired width of the window.
   * @param height - The desired height of the window.
   */
  SetSize(width, height) {
    return this[callerSym](SetSizeMethod, { width, height });
  }
  /**
   * Sets the title of the window.
   *
   * @param title - The desired title of the window.
   */
  SetTitle(title) {
    return this[callerSym](SetTitleMethod, { title });
  }
  /**
   * Sets the zoom level of the window.
   *
   * @param zoom - The desired zoom level.
   */
  SetZoom(zoom) {
    return this[callerSym](SetZoomMethod, { zoom });
  }
  /**
   * Shows the window.
   */
  Show() {
    return this[callerSym](ShowMethod);
  }
  /**
   * Returns the size of the window.
   *
   * @returns The current size of the window.
   */
  Size() {
    return this[callerSym](SizeMethod);
  }
  /**
   * Toggles the window between fullscreen and normal.
   */
  ToggleFullscreen() {
    return this[callerSym](ToggleFullscreenMethod);
  }
  /**
   * Toggles the window between maximised and normal.
   */
  ToggleMaximise() {
    return this[callerSym](ToggleMaximiseMethod);
  }
  /**
   * Toggles the window between frameless and normal.
   */
  ToggleFrameless() {
    return this[callerSym](ToggleFramelessMethod);
  }
  /**
   * Un-fullscreens the window.
   */
  UnFullscreen() {
    return this[callerSym](UnFullscreenMethod);
  }
  /**
   * Un-maximises the window.
   */
  UnMaximise() {
    return this[callerSym](UnMaximiseMethod);
  }
  /**
   * Un-minimises the window.
   */
  UnMinimise() {
    return this[callerSym](UnMinimiseMethod);
  }
  /**
   * Returns the width of the window.
   *
   * @returns The current width of the window.
   */
  Width() {
    return this[callerSym](WidthMethod);
  }
  /**
   * Zooms the window.
   */
  Zoom() {
    return this[callerSym](ZoomMethod);
  }
  /**
   * Increases the zoom level of the webview content.
   */
  ZoomIn() {
    return this[callerSym](ZoomInMethod);
  }
  /**
   * Decreases the zoom level of the webview content.
   */
  ZoomOut() {
    return this[callerSym](ZoomOutMethod);
  }
  /**
   * Resets the zoom level of the webview content.
   */
  ZoomReset() {
    return this[callerSym](ZoomResetMethod);
  }
  /**
   * Handles file drops originating from platform-specific code (e.g., macOS/Linux native drag-and-drop).
   * Gathers information about the drop target element and sends it back to the Go backend.
   *
   * @param filenames - An array of file paths (strings) that were dropped.
   * @param x - The x-coordinate of the drop event (CSS pixels).
   * @param y - The y-coordinate of the drop event (CSS pixels).
   */
  HandlePlatformFileDrop(filenames, x, y) {
    var _a2, _b;
    if (((_b = (_a2 = window._wails) === null || _a2 === void 0 ? void 0 : _a2.flags) === null || _b === void 0 ? void 0 : _b.enableFileDrop) === false) {
      return;
    }
    const element2 = document.elementFromPoint(x, y);
    const dropTarget = getDropTargetElement(element2);
    if (!dropTarget) {
      return;
    }
    const elementDetails = {
      id: dropTarget.id,
      classList: Array.from(dropTarget.classList),
      attributes: {}
    };
    for (let i = 0; i < dropTarget.attributes.length; i++) {
      const attr = dropTarget.attributes[i];
      elementDetails.attributes[attr.name] = attr.value;
    }
    const payload = {
      filenames,
      x,
      y,
      elementDetails
    };
    this[callerSym](FilesDropped, payload);
    cleanupNativeDrag();
  }
  /* Triggers Windows 11 Snap Assist feature (Windows only).
   * This is equivalent to pressing Win+Z and shows snap layout options.
   */
  SnapAssist() {
    return this[callerSym](SnapAssistMethod);
  }
  /**
   * Opens the print dialog for the window.
   */
  Print() {
    return this[callerSym](PrintMethod);
  }
}
const thisWindow = new Window("");
function setupDropTargetListeners() {
  const docElement = document.documentElement;
  let dragEnterCounter = 0;
  docElement.addEventListener("dragenter", (event2) => {
    var _a2, _b, _c;
    if (!((_a2 = event2.dataTransfer) === null || _a2 === void 0 ? void 0 : _a2.types.includes("Files"))) {
      return;
    }
    event2.preventDefault();
    if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
      event2.dataTransfer.dropEffect = "none";
      return;
    }
    dragEnterCounter++;
    const targetElement = document.elementFromPoint(event2.clientX, event2.clientY);
    const dropTarget = getDropTargetElement(targetElement);
    if (currentDropTarget && currentDropTarget !== dropTarget) {
      currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
    }
    if (dropTarget) {
      dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
      event2.dataTransfer.dropEffect = "copy";
      currentDropTarget = dropTarget;
    } else {
      event2.dataTransfer.dropEffect = "none";
      currentDropTarget = null;
    }
  }, false);
  docElement.addEventListener("dragover", (event2) => {
    var _a2, _b, _c;
    if (!((_a2 = event2.dataTransfer) === null || _a2 === void 0 ? void 0 : _a2.types.includes("Files"))) {
      return;
    }
    event2.preventDefault();
    if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
      event2.dataTransfer.dropEffect = "none";
      return;
    }
    const targetElement = document.elementFromPoint(event2.clientX, event2.clientY);
    const dropTarget = getDropTargetElement(targetElement);
    if (currentDropTarget && currentDropTarget !== dropTarget) {
      currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
    }
    if (dropTarget) {
      if (!dropTarget.classList.contains(DROP_TARGET_ACTIVE_CLASS)) {
        dropTarget.classList.add(DROP_TARGET_ACTIVE_CLASS);
      }
      event2.dataTransfer.dropEffect = "copy";
      currentDropTarget = dropTarget;
    } else {
      event2.dataTransfer.dropEffect = "none";
      currentDropTarget = null;
    }
  }, false);
  docElement.addEventListener("dragleave", (event2) => {
    var _a2, _b, _c;
    if (!((_a2 = event2.dataTransfer) === null || _a2 === void 0 ? void 0 : _a2.types.includes("Files"))) {
      return;
    }
    event2.preventDefault();
    if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
      return;
    }
    if (event2.relatedTarget === null) {
      return;
    }
    dragEnterCounter--;
    if (dragEnterCounter === 0 || currentDropTarget && !currentDropTarget.contains(event2.relatedTarget)) {
      if (currentDropTarget) {
        currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
        currentDropTarget = null;
      }
      dragEnterCounter = 0;
    }
  }, false);
  docElement.addEventListener("drop", (event2) => {
    var _a2, _b, _c;
    if (!((_a2 = event2.dataTransfer) === null || _a2 === void 0 ? void 0 : _a2.types.includes("Files"))) {
      return;
    }
    event2.preventDefault();
    if (((_c = (_b = window._wails) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.enableFileDrop) === false) {
      return;
    }
    dragEnterCounter = 0;
    if (currentDropTarget) {
      currentDropTarget.classList.remove(DROP_TARGET_ACTIVE_CLASS);
      currentDropTarget = null;
    }
    if (canResolveFilePaths()) {
      const files = [];
      if (event2.dataTransfer.items) {
        for (const item of event2.dataTransfer.items) {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file)
              files.push(file);
          }
        }
      } else if (event2.dataTransfer.files) {
        for (const file of event2.dataTransfer.files) {
          files.push(file);
        }
      }
      if (files.length > 0) {
        resolveFilePaths(event2.clientX, event2.clientY, files);
      }
    }
  }, false);
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
  setupDropTargetListeners();
}
window._wails = window._wails || {};
window._wails.invoke = invoke;
window._wails.clientId = clientId;
window._wails.handlePlatformFileDrop = thisWindow.HandlePlatformFileDrop.bind(thisWindow);
window._wails.handleDragEnter = handleDragEnter;
window._wails.handleDragLeave = handleDragLeave;
window._wails.handleDragOver = handleDragOver;
invoke("wails:runtime:ready");
function loadOptionalScript(url) {
  return fetch(url, { method: "HEAD" }).then((response) => {
    if (response.ok) {
      const script = document.createElement("script");
      script.src = url;
      document.head.appendChild(script);
    }
  }).catch(() => {
  });
}
loadOptionalScript("/wails/custom.js");
function DialogClose($$anchor, $$props) {
  Dialog_close($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function Dialog_1($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false);
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Dialog, ($$anchor2, Dialog_Root) => {
    Dialog_Root($$anchor2, {
      get open() {
        return open();
      },
      set open($$value) {
        open($$value);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        snippet(node_1, () => $$props.children ?? noop$1);
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
var root$7 = from_html(`<input class="
        w-full px-2 py-1.5 rounded-xl
        border border-border
        bg-background text-foreground
        placeholder:text-muted-foreground
        focus:outline-none focus:ring-2 focus:ring-ring
        disabled:opacity-50 disabled:cursor-not-allowed
        text-sm
    "/>`);
function Input($$anchor, $$props) {
  let value = prop($$props, "value", 12, "");
  let type = prop($$props, "type", 8, "text");
  let placeholder = prop($$props, "placeholder", 8, "");
  let disabled = prop($$props, "disabled", 8, false);
  var input = root$7();
  remove_input_defaults(input);
  template_effect(() => {
    set_attribute(input, "type", type());
    set_attribute(input, "placeholder", placeholder());
    input.disabled = disabled();
  });
  bind_value(input, value);
  append($$anchor, input);
}
function DialogTrigger($$anchor, $$props) {
  Dialog_trigger($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
const linear = (x) => x;
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function split_css_unit(value) {
  const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || "px"] : [
    /** @type {number} */
    value,
    "px"
  ];
}
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [x_value, x_unit] = split_css_unit(x);
  const [y_value, y_unit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${e[0].toUpperCase()}${e.slice(1)}`
    )
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
  };
}
var root_3$1 = from_html(`<div></div>`);
var root_5$4 = from_html(`<div class="fixed inset-0 grid place-items-center"><div><!></div></div>`);
var root_1$4 = from_html(`<!> <!>`, 1);
function DialogContent($$anchor, $$props) {
  Portal($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      {
        const child2 = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let open = () => $$arg0 == null ? void 0 : $$arg0().open;
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var div = root_3$1();
              attribute_effect(div, () => ({
                ...props(),
                class: "fixed inset-0 bg-black/10 backdrop-blur-xs"
              }));
              transition(3, div, () => fade, () => ({ duration: 150 }));
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if (open()) $$render(consequent);
            });
          }
          append($$anchor3, fragment_2);
        };
        Dialog_overlay(node, { forceMount: true, child: child2, $$slots: { child: true } });
      }
      var node_2 = sibling(node, 2);
      {
        const child$1 = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let open = () => $$arg0 == null ? void 0 : $$arg0().open;
          var fragment_3 = comment();
          var node_3 = first_child(fragment_3);
          {
            var consequent_1 = ($$anchor4) => {
              var div_1 = root_5$4();
              var div_2 = child(div_1);
              attribute_effect(div_2, () => ({ ...props() }));
              var node_4 = child(div_2);
              slot(node_4, $$props, "default", {});
              reset(div_2);
              reset(div_1);
              transition(3, div_2, () => fly, () => ({ y: -20, opacity: 0, duration: 150 }));
              append($$anchor4, div_1);
            };
            if_block(node_3, ($$render) => {
              if (open()) $$render(consequent_1);
            });
          }
          append($$anchor3, fragment_3);
        };
        Dialog_content(node_2, {
          class: "\n            rounded-3xl bg-background shadow-popover data-[state=open]:animate-in\n            data-[state=closed]:animate-out data-[state=closed]:fade-out-0\n            data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95\n            data-[state=open]:zoom-in-95 outline-hidden p-5\n            sm:max-w-122 md:w-full\n        ",
          forceMount: true,
          child: child$1,
          $$slots: { child: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function DialogTitle($$anchor, $$props) {
  Dialog_title($$anchor, {
    class: "text-lg font-semibold mb-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_5$3 = from_html(`<div><div><div class="
                                    rounded-xl border-border bg-background shadow-sm
                                    outline-hidden z-0 flex items-center justify-center border
                                    px-3 py-1.5 text-xs font-medium
                                "><!></div></div></div>`);
var root_1$3 = from_html(`<!> <!>`, 1);
function Tooltip_1($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), triggerProps = prop($$props, "triggerProps", 19, () => ({})), delayDuration = prop($$props, "delayDuration", 3, 500), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "open",
    "children",
    "trigger",
    "triggerProps",
    "delayDuration"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Tooltip, ($$anchor2, Tooltip_Root) => {
    Tooltip_Root($$anchor2, spread_props(() => restProps, {
      get delayDuration() {
        return delayDuration();
      },
      get open() {
        return open();
      },
      set open($$value) {
        open($$value);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = root_1$3();
        var node_1 = first_child(fragment_1);
        component(node_1, () => Tooltip_trigger, ($$anchor4, Tooltip_Trigger) => {
          Tooltip_Trigger($$anchor4, spread_props(triggerProps, {
            children: ($$anchor5, $$slotProps2) => {
              var fragment_2 = comment();
              var node_2 = first_child(fragment_2);
              snippet(node_2, () => $$props.trigger);
              append($$anchor5, fragment_2);
            },
            $$slots: { default: true }
          }));
        });
        var node_3 = sibling(node_1, 2);
        component(node_3, () => Portal, ($$anchor4, Tooltip_Portal) => {
          Tooltip_Portal($$anchor4, {
            children: ($$anchor5, $$slotProps2) => {
              var fragment_3 = comment();
              var node_4 = first_child(fragment_3);
              {
                const child$1 = ($$anchor6, $$arg0) => {
                  let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
                  let props = () => $$arg0 == null ? void 0 : $$arg0().props;
                  let open2 = () => $$arg0 == null ? void 0 : $$arg0().open;
                  var fragment_4 = comment();
                  var node_5 = first_child(fragment_4);
                  {
                    var consequent = ($$anchor7) => {
                      var div = root_5$3();
                      attribute_effect(div, () => ({ ...wrapperProps() }));
                      var div_1 = child(div);
                      attribute_effect(div_1, () => ({ ...props() }));
                      var div_2 = child(div_1);
                      var node_6 = child(div_2);
                      snippet(node_6, () => $$props.children ?? noop$1);
                      reset(div_2);
                      reset(div_1);
                      reset(div);
                      transition(3, div_1, () => fly, () => ({ y: 10, opacity: 0, duration: 150 }));
                      append($$anchor7, div);
                    };
                    if_block(node_5, ($$render) => {
                      if (open2()) $$render(consequent);
                    });
                  }
                  append($$anchor6, fragment_4);
                };
                component(node_4, () => Tooltip_content, ($$anchor6, Tooltip_Content) => {
                  Tooltip_Content($$anchor6, {
                    sideOffset: 8,
                    forceMount: true,
                    class: "z-60",
                    child: child$1,
                    $$slots: { child: true }
                  });
                });
              }
              append($$anchor5, fragment_3);
            },
            $$slots: { default: true }
          });
        });
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    }));
  });
  append($$anchor, fragment);
  pop();
}
function Tabs_1($$anchor, $$props) {
  let value = prop($$props, "value", 8);
  let onValueChange = prop($$props, "onValueChange", 8);
  Tabs($$anchor, {
    get value() {
      return value();
    },
    get onValueChange() {
      return onValueChange();
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function TabsList($$anchor, $$props) {
  Tabs_list($$anchor, {
    class: "\n        flex gap-1 w-fit\n        p-1 text-xs font-semibold\n        border border-border rounded-xl\n    ",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function TabsTrigger($$anchor, $$props) {
  let value = prop($$props, "value", 8);
  Tabs_trigger($$anchor, {
    get value() {
      return value();
    },
    class: "\n        flex items-center justify-center gap-1\n        h-6 px-3 rounded-lg\n        bg-transparent\n        transition-colors\n        data-[state=active]:bg-muted\n        dark:data-[state=active]:bg-muted\n    ",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function TabsContent($$anchor, $$props) {
  let value = prop($$props, "value", 8);
  Tabs_content($$anchor, {
    get value() {
      return value();
    },
    class: "select-none pt-3",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function TestConnection(creds) {
  return ByID(734208430, creds);
}
var root_1$2 = from_html(`<div class="space-y-2"><!> <!></div>`);
var root_10$1 = from_html(`<!> `, 1);
var root_12 = from_html(`<span><!></span>`);
var root_11 = from_html(`<div class="flex items-center space-x-1"><!> <!></div>`);
var root_26 = from_html(`<!> `, 1);
var root_23 = from_html(`<!> <!> <!>`, 1);
var root_22 = from_html(`<div class="space-y-2 mb-4"><!> <!> <div class="flex gap-2"><!> <!></div></div> <!> <!> <!>`, 1);
var root_7 = from_html(`<div class="flex items-center justify-between"><!> <!></div> <!> <!>`, 1);
var root_31 = from_html(`<!> Add`, 1);
var root_5$2 = from_html(`<!> <!> <div class="mt-4 flex"><div class="flex space-x-1 ml-auto"><!> <!></div></div>`, 1);
var root_2 = from_html(`<!> <!>`, 1);
function AddSourceDialog($$anchor, $$props) {
  push($$props, false);
  const defaultInputs = ($$anchor2) => {
    var div = root_1$2();
    var node = child(div);
    Input(node, {
      placeholder: "/var/log/app.log",
      get value() {
        return get$2(logPath);
      },
      set value($$value) {
        set(logPath, $$value);
      },
      $$legacy: true
    });
    var node_1 = sibling(node, 2);
    Input(node_1, {
      placeholder: "Display name (optional)",
      get value() {
        return get$2(logLabel);
      },
      set value($$value) {
        set(logLabel, $$value);
      },
      $$legacy: true
    });
    reset(div);
    append($$anchor2, div);
  };
  let dialogOpen = mutable_source(false);
  const connTypesList = [
    { name: "local", title: "Local", icon: Disc },
    { name: "ssh", title: "SSH", icon: Server }
  ];
  let selectedConnType = mutable_source(connTypesList[0].name);
  const onChangeConnTab = (tab) => {
    set(selectedConnType, tab);
  };
  const authTypesList = [
    { name: "pass", title: "Password", icon: Password },
    { name: "pub_key", title: "Passphrase", icon: Forms }
  ];
  let selectedAuthType = mutable_source(authTypesList[0].name);
  console.log(get$2(selectedAuthType));
  const onChangeAuthTab = (tab) => {
    set(selectedAuthType, tab);
  };
  let name = mutable_source("");
  let host = mutable_source("164.92.194.64");
  let port = mutable_source(22);
  let user = mutable_source("root");
  let pass = mutable_source("");
  let passphrase = mutable_source("");
  let logPath = mutable_source("");
  let logLabel = mutable_source("");
  const connection = mutable_source({
    testingesting: false,
    success: false,
    failed: false,
    showMessage: false
  });
  let submitLoading = mutable_source(false);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function submit() {
    set(submitLoading, true);
    const payload = {
      selectedConnType: get$2(selectedConnType),
      connection: get$2(selectedConnType) === "local" ? null : {
        name: get$2(name),
        host: get$2(host),
        port: get$2(port),
        user: get$2(user)
      },
      log: {
        path: get$2(logPath),
        label: get$2(logLabel) || get$2(logPath).split("/").pop()
      }
    };
    console.log("ADD SOURCE", payload);
    await sleep(2e3);
    set(submitLoading, false);
    set(dialogOpen, false);
  }
  async function testConnection() {
    if (get$2(connection).testingesting) return;
    mutate(connection, get$2(connection).testingesting = true);
    const creds = {
      host: get$2(host),
      port: String(get$2(port)),
      user: get$2(user),
      password: get$2(pass),
      passphrase: get$2(passphrase)
    };
    const res = await TestConnection(creds);
    if (!res) {
      mutate(connection, get$2(connection).failed = true);
    } else {
      mutate(connection, get$2(connection).success = true);
    }
    mutate(connection, get$2(connection).testingesting = false);
    mutate(connection, get$2(connection).showMessage = true);
    setTimeout(
      () => {
        mutate(connection, get$2(connection).failed = false);
        mutate(connection, get$2(connection).success = false);
        mutate(connection, get$2(connection).showMessage = false);
      },
      2e3
    );
  }
  init();
  Dialog_1($$anchor, {
    get open() {
      return get$2(dialogOpen);
    },
    set open($$value) {
      set(dialogOpen, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_2 = first_child(fragment_1);
      DialogTrigger(node_2, {
        class: "w-fit",
        children: ($$anchor3, $$slotProps2) => {
          Button_1($$anchor3, {
            size: "icon-sm",
            variant: "ghost",
            children: ($$anchor4, $$slotProps3) => {
              Plus($$anchor4, { size: 14 });
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      DialogContent(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_5$2();
          var node_4 = first_child(fragment_4);
          DialogTitle(node_4, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Add log source");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          Tabs_1(node_5, {
            get value() {
              return get$2(selectedConnType);
            },
            onValueChange: onChangeConnTab,
            children: ($$anchor4, $$slotProps3) => {
              var fragment_5 = root_7();
              var div_1 = first_child(fragment_5);
              var node_6 = child(div_1);
              TabsList(node_6, {
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_6 = comment();
                  var node_7 = first_child(fragment_6);
                  each(node_7, 1, () => connTypesList, index$1, ($$anchor6, tab) => {
                    TabsTrigger($$anchor6, {
                      get value() {
                        return get$2(tab).name;
                      },
                      children: ($$anchor7, $$slotProps5) => {
                        var fragment_8 = root_10$1();
                        var node_8 = first_child(fragment_8);
                        component(node_8, () => get$2(tab).icon, ($$anchor8, $$component) => {
                          $$component($$anchor8, { class: "size-4 shrink-0" });
                        });
                        var text_1 = sibling(node_8);
                        template_effect(() => set_text(text_1, ` ${get$2(tab).title ?? ""}`));
                        append($$anchor7, fragment_8);
                      },
                      $$slots: { default: true }
                    });
                  });
                  append($$anchor5, fragment_6);
                },
                $$slots: { default: true }
              });
              var node_9 = sibling(node_6, 2);
              {
                var consequent_4 = ($$anchor5) => {
                  var div_2 = root_11();
                  var node_10 = child(div_2);
                  {
                    var consequent_2 = ($$anchor6) => {
                      var span = root_12();
                      let classes;
                      var node_11 = child(span);
                      {
                        var consequent = ($$anchor7) => {
                          var text_2 = text("Не удалось подключиться");
                          append($$anchor7, text_2);
                        };
                        var alternate = ($$anchor7) => {
                          var fragment_9 = comment();
                          var node_12 = first_child(fragment_9);
                          {
                            var consequent_1 = ($$anchor8) => {
                              var text_3 = text("Успешно подключились");
                              append($$anchor8, text_3);
                            };
                            if_block(
                              node_12,
                              ($$render) => {
                                if (get$2(connection).success) $$render(consequent_1);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_9);
                        };
                        if_block(node_11, ($$render) => {
                          if (get$2(connection).failed) $$render(consequent);
                          else $$render(alternate, false);
                        });
                      }
                      reset(span);
                      template_effect(() => classes = set_class(span, 1, "text-xs", null, classes, {
                        "text-secondary": get$2(connection).success,
                        "text-destructive": get$2(connection).failed
                      }));
                      transition(3, span, () => fade, () => ({ duration: 150 }));
                      append($$anchor6, span);
                    };
                    if_block(node_10, ($$render) => {
                      if (get$2(connection).showMessage) $$render(consequent_2);
                    });
                  }
                  var node_13 = sibling(node_10, 2);
                  {
                    const trigger = ($$anchor6) => {
                      Button_1($$anchor6, {
                        variant: "ghost",
                        size: "icon",
                        get loading() {
                          return get$2(connection).testingesting;
                        },
                        onclick: () => testConnection(),
                        children: ($$anchor7, $$slotProps4) => {
                          var fragment_11 = comment();
                          var node_14 = first_child(fragment_11);
                          {
                            var consequent_3 = ($$anchor8) => {
                              Loader($$anchor8, { size: 16, class: "animate-spin" });
                            };
                            var alternate_1 = ($$anchor8) => {
                              Test_pipe($$anchor8, { size: 16 });
                            };
                            if_block(node_14, ($$render) => {
                              if (get$2(connection).testingesting) $$render(consequent_3);
                              else $$render(alternate_1, false);
                            });
                          }
                          append($$anchor7, fragment_11);
                        },
                        $$slots: { default: true }
                      });
                    };
                    Tooltip_1(node_13, {
                      trigger,
                      children: ($$anchor6, $$slotProps4) => {
                        next();
                        var text_4 = text("Test SSH connection");
                        append($$anchor6, text_4);
                      },
                      $$slots: { trigger: true, default: true }
                    });
                  }
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_9, ($$render) => {
                  if (get$2(selectedConnType) === "ssh") $$render(consequent_4);
                });
              }
              reset(div_1);
              var node_15 = sibling(div_1, 2);
              TabsContent(node_15, {
                value: "local",
                children: ($$anchor5, $$slotProps4) => {
                  defaultInputs($$anchor5);
                },
                $$slots: { default: true }
              });
              var node_16 = sibling(node_15, 2);
              TabsContent(node_16, {
                value: "ssh",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_15 = root_22();
                  var div_3 = first_child(fragment_15);
                  var node_17 = child(div_3);
                  Input(node_17, {
                    placeholder: "Connection name",
                    get value() {
                      return get$2(name);
                    },
                    set value($$value) {
                      set(name, $$value);
                    },
                    $$legacy: true
                  });
                  var node_18 = sibling(node_17, 2);
                  Input(node_18, {
                    placeholder: "Host",
                    get value() {
                      return get$2(host);
                    },
                    set value($$value) {
                      set(host, $$value);
                    },
                    $$legacy: true
                  });
                  var div_4 = sibling(node_18, 2);
                  var node_19 = child(div_4);
                  Input(node_19, {
                    placeholder: "User",
                    get value() {
                      return get$2(user);
                    },
                    set value($$value) {
                      set(user, $$value);
                    },
                    $$legacy: true
                  });
                  var node_20 = sibling(node_19, 2);
                  Input(node_20, {
                    type: "number",
                    placeholder: "Port",
                    get value() {
                      return get$2(port);
                    },
                    set value($$value) {
                      set(port, $$value);
                    },
                    $$legacy: true
                  });
                  reset(div_4);
                  reset(div_3);
                  var node_21 = sibling(div_3, 2);
                  Tabs_1(node_21, {
                    get value() {
                      return get$2(selectedAuthType);
                    },
                    onValueChange: onChangeAuthTab,
                    children: ($$anchor6, $$slotProps5) => {
                      var fragment_16 = root_23();
                      var node_22 = first_child(fragment_16);
                      TabsList(node_22, {
                        children: ($$anchor7, $$slotProps6) => {
                          var fragment_17 = comment();
                          var node_23 = first_child(fragment_17);
                          each(node_23, 1, () => authTypesList, index$1, ($$anchor8, tab) => {
                            TabsTrigger($$anchor8, {
                              get value() {
                                return get$2(tab).name;
                              },
                              children: ($$anchor9, $$slotProps7) => {
                                var fragment_19 = root_26();
                                var node_24 = first_child(fragment_19);
                                component(node_24, () => get$2(tab).icon, ($$anchor10, $$component) => {
                                  $$component($$anchor10, { class: "size-4 shrink-0" });
                                });
                                var text_5 = sibling(node_24);
                                template_effect(() => set_text(text_5, ` ${get$2(tab).title ?? ""}`));
                                append($$anchor9, fragment_19);
                              },
                              $$slots: { default: true }
                            });
                          });
                          append($$anchor7, fragment_17);
                        },
                        $$slots: { default: true }
                      });
                      var node_25 = sibling(node_22, 2);
                      TabsContent(node_25, {
                        value: "pass",
                        children: ($$anchor7, $$slotProps6) => {
                          Input($$anchor7, {
                            type: "password",
                            placeholder: "Password",
                            get value() {
                              return get$2(pass);
                            },
                            set value($$value) {
                              set(pass, $$value);
                            },
                            $$legacy: true
                          });
                        },
                        $$slots: { default: true }
                      });
                      var node_26 = sibling(node_25, 2);
                      TabsContent(node_26, {
                        value: "pub_key",
                        children: ($$anchor7, $$slotProps6) => {
                          Input($$anchor7, {
                            type: "password",
                            placeholder: "Key passphrase (optional)",
                            get value() {
                              return get$2(passphrase);
                            },
                            set value($$value) {
                              set(passphrase, $$value);
                            },
                            $$legacy: true
                          });
                        },
                        $$slots: { default: true }
                      });
                      append($$anchor6, fragment_16);
                    },
                    $$slots: { default: true }
                  });
                  var node_27 = sibling(node_21, 2);
                  Separator(node_27, { class: "bg-muted -mx-5 mb-6 mt-5 block h-px" });
                  var node_28 = sibling(node_27, 2);
                  defaultInputs(node_28);
                  append($$anchor5, fragment_15);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
          var div_5 = sibling(node_5, 2);
          var div_6 = child(div_5);
          var node_29 = child(div_6);
          DialogClose(node_29, {
            children: ($$anchor4, $$slotProps3) => {
              Button_1($$anchor4, {
                variant: "secondary",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_6 = text("Cancel");
                  append($$anchor5, text_6);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_30 = sibling(node_29, 2);
          Button_1(node_30, {
            onclick: submit,
            get loading() {
              return get$2(submitLoading);
            },
            children: ($$anchor4, $$slotProps3) => {
              var fragment_23 = root_31();
              var node_31 = first_child(fragment_23);
              {
                var consequent_5 = ($$anchor5) => {
                  Loader($$anchor5, { class: "size-4 animate-spin" });
                };
                if_block(node_31, ($$render) => {
                  if (get$2(submitLoading)) $$render(consequent_5);
                });
              }
              next();
              append($$anchor4, fragment_23);
            },
            $$slots: { default: true }
          });
          reset(div_6);
          reset(div_5);
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
var root_5$1 = from_html(`<!> <span> </span>`, 1);
var root_8$1 = from_html(`<div><ul class="relative"><div class="absolute top-0 bottom-0 w-px bg-border z-50"></div> <!></ul></div>`);
var root_3 = from_html(`<!> <!>`, 1);
var root_10 = from_html(`<div class="py-px"><button><!> <span> </span></button></div>`);
var root$6 = from_html(`<li><!></li>`);
function TreeItem_1($$anchor, $$props) {
  push($$props, false);
  const $openNodes = () => store_get(openNodes, "$openNodes", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isSelected = mutable_source();
  let item = prop($$props, "item", 8);
  let depth = prop($$props, "depth", 8, 0);
  let selected = prop($$props, "selected", 8);
  let onSelect = prop($$props, "onSelect", 8);
  const openNodes = writable(/* @__PURE__ */ new Set());
  legacy_pre_effect(() => (deep_read_state(selected()), deep_read_state(item())), () => {
    set(isSelected, selected() === item().id);
  });
  legacy_pre_effect_reset();
  init();
  var li = root$6();
  var node = child(li);
  {
    var consequent_2 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($openNodes(), untrack(() => [...$openNodes()])));
        Accordion($$anchor2, {
          type: "multiple",
          get value() {
            return get$2($0);
          },
          onValueChange: (v) => openNodes.set(new Set(v)),
          children: ($$anchor3, $$slotProps) => {
            Accordion_item($$anchor3, {
              get value() {
                return deep_read_state(item()), untrack(() => item().id);
              },
              children: ($$anchor4, $$slotProps2) => {
                var fragment_2 = root_3();
                var node_1 = first_child(fragment_2);
                Accordion_header(node_1, {
                  children: ($$anchor5, $$slotProps3) => {
                    {
                      let $02 = derived_safe_equal(() => get$2(isSelected) && "bg-primary/15 hover:bg-primary/15 text-primary");
                      let $1 = derived_safe_equal(() => depth() + 0.5);
                      Accordion_trigger($$anchor5, {
                        get class() {
                          return `
                            group flex items-center gap-2 w-full px-2 py-1 rounded-md
                            hover:bg-muted
                            ${get$2($02) ?? ""}
                        `;
                        },
                        get style() {
                          return `padding-left: ${get$2($1) ?? ""}rem`;
                        },
                        children: ($$anchor6, $$slotProps4) => {
                          var fragment_4 = root_5$1();
                          var node_2 = first_child(fragment_4);
                          {
                            var consequent = ($$anchor7) => {
                              var fragment_5 = comment();
                              var node_3 = first_child(fragment_5);
                              component(node_3, () => item().icon, ($$anchor8, $$component) => {
                                $$component($$anchor8, { class: "size-4 shrink-0" });
                              });
                              append($$anchor7, fragment_5);
                            };
                            if_block(node_2, ($$render) => {
                              if (deep_read_state(item()), untrack(() => item().icon)) $$render(consequent);
                            });
                          }
                          var span = sibling(node_2, 2);
                          var text2 = child(span, true);
                          reset(span);
                          template_effect(() => set_text(text2, (deep_read_state(item()), untrack(() => item().label))));
                          append($$anchor6, fragment_4);
                        },
                        $$slots: { default: true }
                      });
                    }
                  },
                  $$slots: { default: true }
                });
                var node_4 = sibling(node_1, 2);
                {
                  const child$1 = ($$anchor5, $$arg0) => {
                    let props = () => $$arg0 == null ? void 0 : $$arg0().props;
                    let open = () => $$arg0 == null ? void 0 : $$arg0().open;
                    var fragment_6 = comment();
                    var node_5 = first_child(fragment_6);
                    {
                      var consequent_1 = ($$anchor6) => {
                        var div = root_8$1();
                        attribute_effect(div, () => ({ ...props() }));
                        var ul = child(div);
                        var div_1 = child(ul);
                        var node_6 = sibling(div_1, 2);
                        each(node_6, 1, () => (deep_read_state(item()), untrack(() => item().children)), (child2) => child2.id, ($$anchor7, child2, $$index, $$array) => {
                          {
                            let $02 = derived_safe_equal(() => depth() + 1);
                            TreeItem_1($$anchor7, {
                              get item() {
                                return get$2(child2);
                              },
                              get depth() {
                                return get$2($02);
                              },
                              get selected() {
                                return selected();
                              },
                              get onSelect() {
                                return onSelect();
                              }
                            });
                          }
                        });
                        reset(ul);
                        reset(div);
                        template_effect(() => set_style(div_1, `left: ${depth() + 1}rem`));
                        transition(3, div, () => slide, () => ({ duration: 220, easing: quintOut }));
                        append($$anchor6, div);
                      };
                      if_block(node_5, ($$render) => {
                        if (open()) $$render(consequent_1);
                      });
                    }
                    append($$anchor5, fragment_6);
                  };
                  Accordion_content(node_4, { forceMount: true, child: child$1, $$slots: { child: true } });
                }
                append($$anchor4, fragment_2);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var div_2 = root_10();
      var button = child(div_2);
      var node_7 = child(button);
      File(node_7, { class: "size-4 shrink-0" });
      var span_1 = sibling(node_7, 2);
      var text_1 = child(span_1, true);
      reset(span_1);
      reset(button);
      reset(div_2);
      template_effect(() => {
        set_class(button, 1, `
                    flex items-center gap-2 w-full px-2 py-1 rounded-md
                    hover:bg-muted
                    ${(get$2(isSelected) && "bg-primary/15 hover:bg-primary/15 text-primary") ?? ""}
                `);
        set_style(button, `padding-left: ${depth() + 0.5}rem`);
        set_text(text_1, (deep_read_state(item()), untrack(() => item().label)));
      });
      event("click", button, () => onSelect()(item().id));
      append($$anchor2, div_2);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(item()), untrack(() => item().children)) $$render(consequent_2);
      else $$render(alternate, false);
    });
  }
  reset(li);
  append($$anchor, li);
  pop();
  $$cleanup();
}
var root$5 = from_html(`<ul class="text-sm select-none"></ul>`);
function Tree($$anchor, $$props) {
  let items = prop($$props, "items", 8);
  let selected = prop($$props, "selected", 8, null);
  let onSelect = prop($$props, "onSelect", 8);
  var ul = root$5();
  each(ul, 5, items, (item) => item.id, ($$anchor2, item) => {
    TreeItem_1($$anchor2, {
      get item() {
        return get$2(item);
      },
      get selected() {
        return selected();
      },
      get onSelect() {
        return onSelect();
      },
      depth: 0
    });
  });
  reset(ul);
  append($$anchor, ul);
}
var root$4 = from_html(`<div class="flex flex-col w-56 h-full overflow-hidden border-r border-border"><div class="flex items-center gap-2 border-b border-border h-11 px-2"><!> <!></div> <div class="flex-1 h-full overflow-auto p-2"><!></div></div>`);
function LogsSidebar($$anchor) {
  const items = [
    {
      id: "local",
      label: "Local",
      icon: Disc,
      children: [
        { id: "local-syslog", label: "syslog", path: "/var/log/syslog" },
        { id: "local-app", label: "app.log", path: "~/logs/app.log" }
      ]
    },
    {
      id: "ssh",
      label: "SSH",
      icon: Server_2,
      children: [
        {
          id: "ssh-1",
          label: "my-server-1",
          children: [
            {
              id: "nginx-access",
              label: "nginx access",
              path: "/var/log/nginx/access.log"
            },
            {
              id: "nginx-error",
              label: "nginx error",
              path: "/var/log/nginx/error.log"
            }
          ]
        }
      ]
    }
  ];
  let selectedItem = mutable_source("");
  var div = root$4();
  var div_1 = child(div);
  var node = child(div_1);
  Input(node, { placeholder: "Search file..." });
  var node_1 = sibling(node, 2);
  AddSourceDialog(node_1, {});
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_2 = child(div_2);
  Tree(node_2, {
    get items() {
      return items;
    },
    onSelect: (id) => set(selectedItem, id),
    get selected() {
      return get$2(selectedItem);
    }
  });
  reset(div_2);
  reset(div);
  append($$anchor, div);
}
var root$3 = from_html(`<div><span class="w-20 shrink-0 text-muted-foreground"> </span> <span> </span> <span class="flex-1 truncate"> </span></div>`);
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
  var div = root$3();
  let classes;
  var span = child(div);
  var text2 = child(span, true);
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
      var _a2;
      classes = set_class(div, 1, "flex gap-3 px-3 py-1 cursor-pointer hover:bg-muted svelte-1k3731m", null, classes, { selected: ((_a2 = $selectedLog()) == null ? void 0 : _a2.id) === log().id });
      set_text(text2, $0);
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
var root$2 = from_html(`<div class="flex-1 overflow-auto font-mono text-xs"></div>`);
function LogsStream($$anchor, $$props) {
  push($$props, false);
  const $logs = () => store_get(logs, "$logs", $$stores);
  const $levelFilter = () => store_get(levelFilter, "$levelFilter", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  var div = root$2();
  each(div, 5, $logs, (log) => log.id, ($$anchor2, log) => {
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor3) => {
        LogRow($$anchor3, {
          get log() {
            return get$2(log);
          }
        });
      };
      if_block(node, ($$render) => {
        if ($levelFilter().has(get$2(log).level)) $$render(consequent);
      });
    }
    append($$anchor2, fragment);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<div class="text-background inline-flex items-center justify-center"><!></div>`);
function Checkbox_1($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), checked = prop($$props, "checked", 15, false), ref = prop($$props, "ref", 15, null);
  prop($$props, "labelRef", 11, null);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "checked",
    "ref",
    "labelRef"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    const children = ($$anchor2, $$arg0) => {
      let checked2 = () => $$arg0 == null ? void 0 : $$arg0().checked;
      let indeterminate = () => $$arg0 == null ? void 0 : $$arg0().indeterminate;
      var div = root_1$1();
      var node_1 = child(div);
      {
        var consequent = ($$anchor3) => {
          Minus($$anchor3, { class: "size-3" });
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              Check($$anchor4, { class: "size-3" });
            };
            if_block(
              node_2,
              ($$render) => {
                if (checked2()) $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (indeterminate()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    component(node, () => Checkbox, ($$anchor2, Checkbox_Root) => {
      Checkbox_Root($$anchor2, spread_props(
        {
          get id() {
            return id();
          }
        },
        () => restProps,
        {
          class: "border-muted bg-foreground data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40 peer inline-flex size-4 items-center justify-center rounded-md border transition-all duration-150 ease-in-out active:scale-[0.98]",
          get checked() {
            return checked();
          },
          set checked($$value) {
            checked($$value);
          },
          get ref() {
            return ref();
          },
          set ref($$value) {
            ref($$value);
          },
          children,
          $$slots: { default: true }
        }
      ));
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_8 = from_html(`<!> `, 1);
var root_5 = from_html(`<div><div><!></div></div>`);
var root_1 = from_html(`<!> <!>`, 1);
function DropdownMenu_1($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "open",
    "children",
    "buttonText",
    "items",
    "contentProps"
  ]);
  let selectedItems = state(proxy([]));
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Menu, ($$anchor2, DropdownMenu_Root) => {
    DropdownMenu_Root($$anchor2, spread_props(() => restProps, {
      get open() {
        return open();
      },
      set open($$value) {
        open($$value);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = root_1();
        var node_1 = first_child(fragment_1);
        component(node_1, () => Menu_trigger, ($$anchor4, DropdownMenu_Trigger) => {
          DropdownMenu_Trigger($$anchor4, {
            class: "\n            px-2 py-1.5 rounded-xl\n            border border-border\n            bg-background text-foreground\n            placeholder:text-muted-foreground\n            focus:outline-none focus:ring-2 focus:ring-ring\n            disabled:opacity-50 disabled:cursor-not-allowed\n            text-sm\n        ",
            children: ($$anchor5, $$slotProps2) => {
              next();
              var text$1 = text();
              template_effect(() => set_text(text$1, $$props.buttonText));
              append($$anchor5, text$1);
            },
            $$slots: { default: true }
          });
        });
        var node_2 = sibling(node_1, 2);
        component(node_2, () => Portal, ($$anchor4, DropdownMenu_Portal) => {
          DropdownMenu_Portal($$anchor4, {
            children: ($$anchor5, $$slotProps2) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              {
                const child$1 = ($$anchor6, $$arg0) => {
                  let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
                  let props = () => $$arg0 == null ? void 0 : $$arg0().props;
                  let open2 = () => $$arg0 == null ? void 0 : $$arg0().open;
                  var fragment_4 = comment();
                  var node_4 = first_child(fragment_4);
                  {
                    var consequent = ($$anchor7) => {
                      var div = root_5();
                      attribute_effect(div, () => ({ ...wrapperProps() }));
                      var div_1 = child(div);
                      attribute_effect(div_1, () => ({ ...props() }));
                      var node_5 = child(div_1);
                      component(node_5, () => Menu_checkbox_group, ($$anchor8, DropdownMenu_CheckboxGroup) => {
                        DropdownMenu_CheckboxGroup($$anchor8, {
                          get "aria-label"() {
                            return $$props.buttonText;
                          },
                          get value() {
                            return get$2(selectedItems);
                          },
                          set value($$value) {
                            set(selectedItems, $$value, true);
                          },
                          children: ($$anchor9, $$slotProps3) => {
                            var fragment_5 = comment();
                            var node_6 = first_child(fragment_5);
                            each(node_6, 17, () => $$props.items, index$1, ($$anchor10, item) => {
                              var fragment_6 = comment();
                              var node_7 = first_child(fragment_6);
                              {
                                const children = ($$anchor11, $$arg02) => {
                                  let checked = () => $$arg02 == null ? void 0 : $$arg02().checked;
                                  var fragment_7 = root_8();
                                  var node_8 = first_child(fragment_7);
                                  {
                                    let $0 = user_derived(() => checked() === true);
                                    Checkbox_1(node_8, {
                                      get checked() {
                                        return get$2($0);
                                      },
                                      get labelText() {
                                        return get$2(item);
                                      }
                                    });
                                  }
                                  var text_1 = sibling(node_8);
                                  template_effect(() => set_text(text_1, ` ${get$2(item) ?? ""}`));
                                  append($$anchor11, fragment_7);
                                };
                                component(node_7, () => Menu_checkbox_item, ($$anchor11, DropdownMenu_CheckboxItem) => {
                                  DropdownMenu_CheckboxItem($$anchor11, {
                                    get value() {
                                      return get$2(item);
                                    },
                                    closeOnSelect: false,
                                    class: "flex items-center gap-1 hover:bg-muted px-2 py-1 transition-all rounded-lg",
                                    children,
                                    $$slots: { default: true }
                                  });
                                });
                              }
                              append($$anchor10, fragment_6);
                            });
                            append($$anchor9, fragment_5);
                          },
                          $$slots: { default: true }
                        });
                      });
                      reset(div_1);
                      reset(div);
                      transition(3, div_1, () => fly, () => ({ y: -10, opacity: 0, duration: 150 }));
                      append($$anchor7, div);
                    };
                    if_block(node_4, ($$render) => {
                      if (open2()) $$render(consequent);
                    });
                  }
                  append($$anchor6, fragment_4);
                };
                component(node_3, () => Dropdown_menu_content, ($$anchor6, DropdownMenu_Content) => {
                  DropdownMenu_Content($$anchor6, spread_props(() => $$props.contentProps, {
                    class: "p-1 border border-border bg-background shadow-md rounded-xl",
                    forceMount: true,
                    align: "end",
                    sideOffset: 8,
                    child: child$1,
                    $$slots: { child: true }
                  }));
                });
              }
              append($$anchor5, fragment_3);
            },
            $$slots: { default: true }
          });
        });
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    }));
  });
  append($$anchor, fragment);
  pop();
}
var root$1 = from_html(`<div class="h-11 flex items-center gap-3 px-3 border-b border-border" style="
        padding-left: calc(var(--titlebar-x) + 12px);
        padding-top: env(safe-area-inset-top);
    "><!> <div class="flex gap-1"><!></div></div>`);
function LogsTopbar($$anchor, $$props) {
  push($$props, false);
  let search = mutable_source("");
  const levels = ["trace", "debug", "info", "warn", "error", "fatal"];
  init();
  var div = root$1();
  var node = child(div);
  Input(node, {
    placeholder: "Search logs…",
    get value() {
      return get$2(search);
    },
    set value($$value) {
      set(search, $$value);
    },
    $$legacy: true
  });
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  DropdownMenu_1(node_1, {
    buttonText: "Level",
    get items() {
      return levels;
    }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root = from_html(`<div class="h-full w-full flex bg-background text-foreground"><!> <div class="flex-1 flex flex-col overflow-hidden"><!> <div class="flex-1 flex flex-col overflow-hidden"><!></div></div></div>`);
function LogsViewer($$anchor) {
  var div = root();
  var node = child(div);
  LogsSidebar(node);
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  LogsTopbar(node_1, {});
  var div_2 = sibling(node_1, 2);
  var node_2 = child(div_2);
  LogsStream(node_2, {});
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, div);
}
function _page($$anchor) {
  LogsViewer($$anchor);
}
export {
  _page as component
};
