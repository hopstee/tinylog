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
var _document, _subscribe, _name, _key, _root, _variant, _prefix, _opts, _currentFrame, _AnimationsComplete_instances, cleanup_fn, executeCallback_fn, _opts2, _enabled, _afterAnimations, _shouldRender, _opts3, _buffer, _exitPoint, _exitTarget, _SafePolygon_instances, onPointerMove_fn, getCorridorPolygon_fn, getSafePolygon_fn, flipSide_fn, _interval, _cb, _timer, _TimeoutFn_instances, clear_fn, _isOpenDelayed, _timerFn, _openTooltip, _startTimer, _clearTimer, _delayDuration, _disableHoverableContent, _disableCloseOnTriggerClick, _disabled, _ignoreNonKeyboardFocus, _contentNode, _triggerNode, _wasOpenDelayed, _timerFn2, _stateAttr, _handleDelayedOpen, _isPointerDown, _hasPointerMoveOpened, _isDisabled, _transitCheckTimeout, _clearTransitCheck, _onpointerup, _onpointerdown, _onpointerenter, _onpointermove, _onpointerleave, _onfocus, _onblur, _onclick, _props, _snippetProps, _props2;
import { aQ as ATTACHMENT_KEY, o as hydrating, q as hydrate_next, v as block, E as EFFECT_TRANSPARENT, aG as state, Z as proxy, V as set, g as get, aH as user_derived, aR as hasContext, aS as getContext, aT as setContext, u as user_pre_effect, a as user_effect, b as untrack, aF as tick } from "./DilKp9Ls.js";
import { B as BranchManager } from "./BQfkjXyb.js";
import { c as createSubscriber, o as on } from "./yiCpE6_S.js";
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a;
  if (hydrating) {
    hydrate_next();
  }
  var slot_fn = (_a = $$props.$$slots) == null ? void 0 : _a[name];
  var is_interop = false;
  if (slot_fn === true) {
    slot_fn = $$props["children"];
    is_interop = true;
  }
  if (slot_fn === void 0) ;
  else {
    slot_fn(anchor, is_interop ? () => slot_props : slot_props);
  }
}
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block(() => {
    const snippet2 = get_snippet() ?? null;
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
  const derived = user_derived(getter);
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return get(derived);
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return isBox(value) && isWritableSymbol in value;
}
function boxFrom(value) {
  if (isBox(value)) return value;
  if (isFunction(value)) return boxWith(value);
  return simpleBox(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
function simpleBox(initialValue) {
  let current = state(proxy(initialValue));
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return get(current);
    },
    set current(v) {
      set(current, v, true);
    }
  };
}
const defaultWindow = typeof window !== "undefined" ? window : void 0;
function getActiveElement$1(document2) {
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
    return getActiveElement$1(__privateGet(this, _document));
  }
}
_document = new WeakMap();
_subscribe = new WeakMap();
new ActiveElement();
class Context {
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    __privateAdd(this, _name);
    __privateAdd(this, _key);
    __privateSet(this, _name, name);
    __privateSet(this, _key, Symbol(name));
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return __privateGet(this, _key);
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(__privateGet(this, _key));
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(__privateGet(this, _key));
    if (context === void 0) {
      throw new Error(`Context "${__privateGet(this, _name)}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback) {
    const context = getContext(__privateGet(this, _key));
    if (context === void 0) {
      return fallback;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(__privateGet(this, _key), context);
  }
}
_name = new WeakMap();
_key = new WeakMap();
function runEffect(flush, effect) {
  switch (flush) {
    case "post":
      user_effect(effect);
      break;
    case "pre":
      user_pre_effect(effect);
      break;
  }
}
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
  let active = !lazy;
  let previousValues = Array.isArray(sources) ? [] : void 0;
  runEffect(flush, () => {
    const values = Array.isArray(sources) ? sources.map((source) => source()) : sources();
    if (!active) {
      active = true;
      previousValues = values;
      return;
    }
    const cleanup = untrack(() => effect(values, previousValues));
    previousValues = values;
    return cleanup;
  });
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function onDestroyEffect(fn) {
  user_effect(() => {
    return () => {
      fn();
    };
  });
}
function onMountEffect(fn) {
  user_effect(() => {
    const cleanup = untrack(() => fn());
    return cleanup;
  });
}
function afterTick(fn) {
  tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$1(node) {
  return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  var _a;
  return isObject(node) && ((_a = node.constructor) == null ? void 0 : _a.name) === "VisualViewport";
}
function isNode(node) {
  return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
  return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
  var _a;
  if (!parent || !child)
    return false;
  if (!isHTMLElement$1(parent) || !isHTMLElement$1(child))
    return false;
  const rootNode = (_a = child.getRootNode) == null ? void 0 : _a.call(child);
  if (parent === child)
    return true;
  if (parent.contains(child))
    return true;
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next)
        return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return (node == null ? void 0 : node.ownerDocument) ?? document;
}
function getWindow(node) {
  var _a;
  if (isShadowRoot(node))
    return getWindow(node.host);
  if (isDocument(node))
    return node.defaultView ?? window;
  if (isHTMLElement$1(node))
    return ((_a = node.ownerDocument) == null ? void 0 : _a.defaultView) ?? window;
  return window;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  constructor(element) {
    __publicField(this, "element");
    __privateAdd(this, _root, user_derived(() => {
      if (!this.element.current) return document;
      const rootNode = this.element.current.getRootNode() ?? document;
      return rootNode;
    }));
    __publicField(this, "getDocument", () => {
      return getDocument(this.root);
    });
    __publicField(this, "getWindow", () => {
      return this.getDocument().defaultView ?? window;
    });
    __publicField(this, "getActiveElement", () => {
      return getActiveElement(this.root);
    });
    __publicField(this, "isActiveElement", (node) => {
      return node === this.getActiveElement();
    });
    __publicField(this, "querySelector", (selector) => {
      if (!this.root) return null;
      return this.root.querySelector(selector);
    });
    __publicField(this, "querySelectorAll", (selector) => {
      if (!this.root) return [];
      return this.root.querySelectorAll(selector);
    });
    __publicField(this, "setTimeout", (callback, delay) => {
      return this.getWindow().setTimeout(callback, delay);
    });
    __publicField(this, "clearTimeout", (timeoutId) => {
      return this.getWindow().clearTimeout(timeoutId);
    });
    if (typeof element === "function") {
      this.element = boxWith(element);
    } else {
      this.element = element;
    }
  }
  get root() {
    return get(__privateGet(this, _root));
  }
  set root(value) {
    set(__privateGet(this, _root), value);
  }
  getElementById(id) {
    return this.root.getElementById(id);
  }
}
_root = new WeakMap();
function attachRef(ref, onChange) {
  return {
    [createAttachmentKey()]: (node) => {
      if (isBox(ref)) {
        ref.current = node;
        untrack(() => onChange == null ? void 0 : onChange(node));
        return () => {
          if ("isConnected" in node && node.isConnected)
            return;
          ref.current = null;
          onChange == null ? void 0 : onChange(null);
        };
      }
      ref(node);
      untrack(() => onChange == null ? void 0 : onChange(node));
      return () => {
        if ("isConnected" in node && node.isConnected)
          return;
        ref(null);
        onChange == null ? void 0 : onChange(null);
      };
    }
  };
}
function boolToStr(condition) {
  return condition ? "true" : "false";
}
function boolToStrTrueOrUndef(condition) {
  return condition ? "true" : void 0;
}
function boolToEmptyStrOrUndef(condition) {
  return condition ? "" : void 0;
}
function boolToTrueOrUndef(condition) {
  return condition ? true : void 0;
}
function getDataOpenClosed(condition) {
  return condition ? "open" : "closed";
}
function getAriaChecked(checked, indeterminate) {
  if (indeterminate) {
    return "mixed";
  }
  return checked ? "true" : "false";
}
class BitsAttrs {
  constructor(config) {
    __privateAdd(this, _variant);
    __privateAdd(this, _prefix);
    __publicField(this, "attrs");
    __privateSet(this, _variant, config.getVariant ? config.getVariant() : null);
    __privateSet(this, _prefix, __privateGet(this, _variant) ? `data-${__privateGet(this, _variant)}-` : `data-${config.component}-`);
    this.getAttr = this.getAttr.bind(this);
    this.selector = this.selector.bind(this);
    this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
  }
  getAttr(part, variantOverride) {
    if (variantOverride)
      return `data-${variantOverride}-${part}`;
    return `${__privateGet(this, _prefix)}${part}`;
  }
  selector(part, variantOverride) {
    return `[${this.getAttr(part, variantOverride)}]`;
  }
}
_variant = new WeakMap();
_prefix = new WeakMap();
function createBitsAttrs(config) {
  const bitsAttrs = new BitsAttrs(config);
  return {
    ...bitsAttrs.attrs,
    selector: bitsAttrs.selector,
    getAttr: bitsAttrs.getAttr
  };
}
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isBrowser && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isElement(element) {
  return element instanceof Element;
}
function isElementOrSVGElement(element) {
  return element instanceof Element || element instanceof SVGElement;
}
function isFocusVisible(element) {
  return element.matches(":focus-visible");
}
function isNotNull(value) {
  return value !== null;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
class AnimationsComplete {
  constructor(opts) {
    __privateAdd(this, _AnimationsComplete_instances);
    __privateAdd(this, _opts);
    __privateAdd(this, _currentFrame, null);
    __privateSet(this, _opts, opts);
    onDestroyEffect(() => __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this));
  }
  run(fn) {
    __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this);
    const node = __privateGet(this, _opts).ref.current;
    if (!node)
      return;
    if (typeof node.getAnimations !== "function") {
      __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
      return;
    }
    __privateSet(this, _currentFrame, window.requestAnimationFrame(() => {
      const animations = node.getAnimations();
      if (animations.length === 0) {
        __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
        return;
      }
      Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
        __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
      });
    }));
  }
}
_opts = new WeakMap();
_currentFrame = new WeakMap();
_AnimationsComplete_instances = new WeakSet();
cleanup_fn = function() {
  if (!__privateGet(this, _currentFrame))
    return;
  window.cancelAnimationFrame(__privateGet(this, _currentFrame));
  __privateSet(this, _currentFrame, null);
};
executeCallback_fn = function(fn) {
  const execute = () => {
    fn();
  };
  if (__privateGet(this, _opts).afterTick) {
    afterTick(execute);
  } else {
    execute();
  }
};
class PresenceManager {
  constructor(opts) {
    __privateAdd(this, _opts2);
    __privateAdd(this, _enabled);
    __privateAdd(this, _afterAnimations);
    __privateAdd(this, _shouldRender, state(false));
    __privateSet(this, _opts2, opts);
    set(__privateGet(this, _shouldRender), opts.open.current, true);
    __privateSet(this, _enabled, opts.enabled ?? true);
    __privateSet(this, _afterAnimations, new AnimationsComplete({ ref: __privateGet(this, _opts2).ref, afterTick: __privateGet(this, _opts2).open }));
    watch(() => __privateGet(this, _opts2).open.current, (isOpen) => {
      if (isOpen) set(__privateGet(this, _shouldRender), true);
      if (!__privateGet(this, _enabled)) return;
      __privateGet(this, _afterAnimations).run(() => {
        var _a, _b;
        if (isOpen === __privateGet(this, _opts2).open.current) {
          if (!__privateGet(this, _opts2).open.current) {
            set(__privateGet(this, _shouldRender), false);
          }
          (_b = (_a = __privateGet(this, _opts2)).onComplete) == null ? void 0 : _b.call(_a);
        }
      });
    });
  }
  get shouldRender() {
    return get(__privateGet(this, _shouldRender));
  }
}
_opts2 = new WeakMap();
_enabled = new WeakMap();
_afterAnimations = new WeakMap();
_shouldRender = new WeakMap();
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] ?? [0, 0];
    const [xj, yj] = polygon[j] ?? [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInsideRect(point, rect) {
  return point[0] >= rect.left && point[0] <= rect.right && point[1] >= rect.top && point[1] <= rect.bottom;
}
function getSide(triggerRect, contentRect) {
  const triggerCenterX = triggerRect.left + triggerRect.width / 2;
  const triggerCenterY = triggerRect.top + triggerRect.height / 2;
  const contentCenterX = contentRect.left + contentRect.width / 2;
  const contentCenterY = contentRect.top + contentRect.height / 2;
  const deltaX = contentCenterX - triggerCenterX;
  const deltaY = contentCenterY - triggerCenterY;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX > 0 ? "right" : "left";
  }
  return deltaY > 0 ? "bottom" : "top";
}
class SafePolygon {
  constructor(opts) {
    __privateAdd(this, _SafePolygon_instances);
    __privateAdd(this, _opts3);
    __privateAdd(this, _buffer);
    // tracks the cursor position when leaving trigger or content
    __privateAdd(this, _exitPoint, null);
    // tracks what we're moving toward: "content" when leaving trigger, "trigger" when leaving content
    __privateAdd(this, _exitTarget, null);
    __privateSet(this, _opts3, opts);
    __privateSet(this, _buffer, opts.buffer ?? 1);
    watch([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled]) => {
      if (!triggerNode || !contentNode || !enabled) {
        __privateSet(this, _exitPoint, null);
        __privateSet(this, _exitTarget, null);
        return;
      }
      const doc = getDocument(triggerNode);
      const handlePointerMove = (e) => {
        __privateMethod(this, _SafePolygon_instances, onPointerMove_fn).call(this, e, triggerNode, contentNode);
      };
      const handleTriggerLeave = (e) => {
        const target = e.relatedTarget;
        if (isElement(target) && contentNode.contains(target)) {
          return;
        }
        __privateSet(this, _exitPoint, [e.clientX, e.clientY]);
        __privateSet(this, _exitTarget, "content");
      };
      const handleTriggerEnter = () => {
        __privateSet(this, _exitPoint, null);
        __privateSet(this, _exitTarget, null);
      };
      const handleContentEnter = () => {
        __privateSet(this, _exitPoint, null);
        __privateSet(this, _exitTarget, null);
      };
      const handleContentLeave = (e) => {
        const target = e.relatedTarget;
        if (isElement(target) && triggerNode.contains(target)) {
          return;
        }
        __privateSet(this, _exitPoint, [e.clientX, e.clientY]);
        __privateSet(this, _exitTarget, "trigger");
      };
      return [
        on(doc, "pointermove", handlePointerMove),
        on(triggerNode, "pointerleave", handleTriggerLeave),
        on(triggerNode, "pointerenter", handleTriggerEnter),
        on(contentNode, "pointerenter", handleContentEnter),
        on(contentNode, "pointerleave", handleContentLeave)
      ].reduce(
        (acc, cleanup) => () => {
          acc();
          cleanup();
        },
        () => {
        }
      );
    });
  }
}
_opts3 = new WeakMap();
_buffer = new WeakMap();
_exitPoint = new WeakMap();
_exitTarget = new WeakMap();
_SafePolygon_instances = new WeakSet();
onPointerMove_fn = function(e, triggerNode, contentNode) {
  if (!__privateGet(this, _exitPoint) || !__privateGet(this, _exitTarget)) return;
  const clientPoint = [e.clientX, e.clientY];
  const triggerRect = triggerNode.getBoundingClientRect();
  const contentRect = contentNode.getBoundingClientRect();
  if (__privateGet(this, _exitTarget) === "content" && isInsideRect(clientPoint, contentRect)) {
    __privateSet(this, _exitPoint, null);
    __privateSet(this, _exitTarget, null);
    return;
  }
  if (__privateGet(this, _exitTarget) === "trigger" && isInsideRect(clientPoint, triggerRect)) {
    __privateSet(this, _exitPoint, null);
    __privateSet(this, _exitTarget, null);
    return;
  }
  const side = getSide(triggerRect, contentRect);
  const corridorPoly = __privateMethod(this, _SafePolygon_instances, getCorridorPolygon_fn).call(this, triggerRect, contentRect, side);
  if (corridorPoly && isPointInPolygon(clientPoint, corridorPoly)) {
    return;
  }
  const targetRect = __privateGet(this, _exitTarget) === "content" ? contentRect : triggerRect;
  const safePoly = __privateMethod(this, _SafePolygon_instances, getSafePolygon_fn).call(this, __privateGet(this, _exitPoint), targetRect, side, __privateGet(this, _exitTarget));
  if (isPointInPolygon(clientPoint, safePoly)) {
    return;
  }
  __privateSet(this, _exitPoint, null);
  __privateSet(this, _exitTarget, null);
  __privateGet(this, _opts3).onPointerExit();
};
/**
 * Creates a rectangular corridor between trigger and content
 * This prevents closing when cursor is in the gap between them
 */
getCorridorPolygon_fn = function(triggerRect, contentRect, side) {
  const buffer = __privateGet(this, _buffer);
  switch (side) {
    case "top":
      return [
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          triggerRect.top
        ],
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          contentRect.bottom
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          contentRect.bottom
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          triggerRect.top
        ]
      ];
    case "bottom":
      return [
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          triggerRect.bottom
        ],
        [
          Math.min(triggerRect.left, contentRect.left) - buffer,
          contentRect.top
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          contentRect.top
        ],
        [
          Math.max(triggerRect.right, contentRect.right) + buffer,
          triggerRect.bottom
        ]
      ];
    case "left":
      return [
        [
          triggerRect.left,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.right,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.right,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ],
        [
          triggerRect.left,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ]
      ];
    case "right":
      return [
        [
          triggerRect.right,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.left,
          Math.min(triggerRect.top, contentRect.top) - buffer
        ],
        [
          contentRect.left,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ],
        [
          triggerRect.right,
          Math.max(triggerRect.bottom, contentRect.bottom) + buffer
        ]
      ];
  }
};
/**
 * Creates a triangular/trapezoidal safe zone from the exit point to the target
 */
getSafePolygon_fn = function(exitPoint, targetRect, side, exitTarget) {
  const buffer = __privateGet(this, _buffer) * 4;
  const [x, y] = exitPoint;
  const effectiveSide = exitTarget === "trigger" ? __privateMethod(this, _SafePolygon_instances, flipSide_fn).call(this, side) : side;
  switch (effectiveSide) {
    case "top":
      return [
        [x - buffer, y + buffer],
        [x + buffer, y + buffer],
        [targetRect.right + buffer, targetRect.bottom],
        [targetRect.right + buffer, targetRect.top],
        [targetRect.left - buffer, targetRect.top],
        [targetRect.left - buffer, targetRect.bottom]
      ];
    case "bottom":
      return [
        [x - buffer, y - buffer],
        [x + buffer, y - buffer],
        [targetRect.right + buffer, targetRect.top],
        [targetRect.right + buffer, targetRect.bottom],
        [targetRect.left - buffer, targetRect.bottom],
        [targetRect.left - buffer, targetRect.top]
      ];
    case "left":
      return [
        [x + buffer, y - buffer],
        [x + buffer, y + buffer],
        [targetRect.right, targetRect.bottom + buffer],
        [targetRect.left, targetRect.bottom + buffer],
        [targetRect.left, targetRect.top - buffer],
        [targetRect.right, targetRect.top - buffer]
      ];
    case "right":
      return [
        [x - buffer, y - buffer],
        [x - buffer, y + buffer],
        [targetRect.left, targetRect.bottom + buffer],
        [targetRect.right, targetRect.bottom + buffer],
        [targetRect.right, targetRect.top - buffer],
        [targetRect.left, targetRect.top - buffer]
      ];
  }
};
flipSide_fn = function(side) {
  switch (side) {
    case "top":
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left";
  }
};
class TimeoutFn {
  constructor(cb, interval) {
    __privateAdd(this, _TimeoutFn_instances);
    __privateAdd(this, _interval);
    __privateAdd(this, _cb);
    __privateAdd(this, _timer, null);
    __privateSet(this, _cb, cb);
    __privateSet(this, _interval, interval);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    onDestroyEffect(this.stop);
  }
  stop() {
    __privateMethod(this, _TimeoutFn_instances, clear_fn).call(this);
  }
  start(...args) {
    __privateMethod(this, _TimeoutFn_instances, clear_fn).call(this);
    __privateSet(this, _timer, window.setTimeout(() => {
      __privateSet(this, _timer, null);
      __privateGet(this, _cb).call(this, ...args);
    }, __privateGet(this, _interval)));
  }
}
_interval = new WeakMap();
_cb = new WeakMap();
_timer = new WeakMap();
_TimeoutFn_instances = new WeakSet();
clear_fn = function() {
  if (__privateGet(this, _timer) !== null) {
    window.clearTimeout(__privateGet(this, _timer));
    __privateSet(this, _timer, null);
  }
};
const tooltipAttrs = createBitsAttrs({ component: "tooltip", parts: ["content", "trigger"] });
const TooltipProviderContext = new Context("Tooltip.Provider");
const TooltipRootContext = new Context("Tooltip.Root");
const _TooltipProviderState = class _TooltipProviderState {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _isOpenDelayed, state(true));
    __publicField(this, "isPointerInTransit", simpleBox(false));
    __privateAdd(this, _timerFn);
    __privateAdd(this, _openTooltip, state(null));
    __privateAdd(this, _startTimer, () => {
      const skipDuration = this.opts.skipDelayDuration.current;
      if (skipDuration === 0) {
        return;
      } else {
        __privateGet(this, _timerFn).start();
      }
    });
    __privateAdd(this, _clearTimer, () => {
      __privateGet(this, _timerFn).stop();
    });
    __publicField(this, "onOpen", (tooltip) => {
      if (get(__privateGet(this, _openTooltip)) && get(__privateGet(this, _openTooltip)) !== tooltip) {
        get(__privateGet(this, _openTooltip)).handleClose();
      }
      __privateGet(this, _clearTimer).call(this);
      this.isOpenDelayed = false;
      set(__privateGet(this, _openTooltip), tooltip, true);
    });
    __publicField(this, "onClose", (tooltip) => {
      if (get(__privateGet(this, _openTooltip)) === tooltip) {
        set(__privateGet(this, _openTooltip), null);
      }
      __privateGet(this, _startTimer).call(this);
    });
    __publicField(this, "isTooltipOpen", (tooltip) => {
      return get(__privateGet(this, _openTooltip)) === tooltip;
    });
    this.opts = opts;
    __privateSet(this, _timerFn, new TimeoutFn(
      () => {
        this.isOpenDelayed = true;
      },
      this.opts.skipDelayDuration.current
    ));
  }
  static create(opts) {
    return TooltipProviderContext.set(new _TooltipProviderState(opts));
  }
  get isOpenDelayed() {
    return get(__privateGet(this, _isOpenDelayed));
  }
  set isOpenDelayed(value) {
    set(__privateGet(this, _isOpenDelayed), value, true);
  }
};
_isOpenDelayed = new WeakMap();
_timerFn = new WeakMap();
_openTooltip = new WeakMap();
_startTimer = new WeakMap();
_clearTimer = new WeakMap();
let TooltipProviderState = _TooltipProviderState;
const _TooltipRootState = class _TooltipRootState {
  constructor(opts, provider) {
    __publicField(this, "opts");
    __publicField(this, "provider");
    __privateAdd(this, _delayDuration, user_derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current));
    __privateAdd(this, _disableHoverableContent, user_derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current));
    __privateAdd(this, _disableCloseOnTriggerClick, user_derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current));
    __privateAdd(this, _disabled, user_derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current));
    __privateAdd(this, _ignoreNonKeyboardFocus, user_derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current));
    __privateAdd(this, _contentNode, state(null));
    __publicField(this, "contentPresence");
    __privateAdd(this, _triggerNode, state(null));
    __privateAdd(this, _wasOpenDelayed, state(false));
    __privateAdd(this, _timerFn2);
    __privateAdd(this, _stateAttr, user_derived(() => {
      if (!this.opts.open.current) return "closed";
      return get(__privateGet(this, _wasOpenDelayed)) ? "delayed-open" : "instant-open";
    }));
    __publicField(this, "handleOpen", () => {
      __privateGet(this, _timerFn2).stop();
      set(__privateGet(this, _wasOpenDelayed), false);
      this.opts.open.current = true;
    });
    __publicField(this, "handleClose", () => {
      __privateGet(this, _timerFn2).stop();
      this.opts.open.current = false;
    });
    __privateAdd(this, _handleDelayedOpen, () => {
      __privateGet(this, _timerFn2).stop();
      const shouldSkipDelay = !this.provider.isOpenDelayed;
      const delayDuration = this.delayDuration ?? 0;
      if (shouldSkipDelay || delayDuration === 0) {
        set(__privateGet(this, _wasOpenDelayed), delayDuration > 0 && shouldSkipDelay, true);
        this.opts.open.current = true;
      } else {
        __privateGet(this, _timerFn2).start();
      }
    });
    __publicField(this, "onTriggerEnter", () => {
      __privateGet(this, _handleDelayedOpen).call(this);
    });
    __publicField(this, "onTriggerLeave", () => {
      if (this.disableHoverableContent) {
        this.handleClose();
      } else {
        __privateGet(this, _timerFn2).stop();
      }
    });
    this.opts = opts;
    this.provider = provider;
    __privateSet(this, _timerFn2, new TimeoutFn(
      () => {
        set(__privateGet(this, _wasOpenDelayed), true);
        this.opts.open.current = true;
      },
      this.delayDuration ?? 0
    ));
    this.contentPresence = new PresenceManager({
      open: this.opts.open,
      ref: boxWith(() => this.contentNode),
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    watch(() => this.delayDuration, () => {
      if (this.delayDuration === void 0) return;
      __privateSet(this, _timerFn2, new TimeoutFn(
        () => {
          set(__privateGet(this, _wasOpenDelayed), true);
          this.opts.open.current = true;
        },
        this.delayDuration
      ));
    });
    watch(
      () => this.opts.open.current,
      (isOpen) => {
        if (isOpen) {
          this.provider.onOpen(this);
        } else {
          this.provider.onClose(this);
        }
      },
      { lazy: true }
    );
  }
  static create(opts) {
    return TooltipRootContext.set(new _TooltipRootState(opts, TooltipProviderContext.get()));
  }
  get delayDuration() {
    return get(__privateGet(this, _delayDuration));
  }
  set delayDuration(value) {
    set(__privateGet(this, _delayDuration), value);
  }
  get disableHoverableContent() {
    return get(__privateGet(this, _disableHoverableContent));
  }
  set disableHoverableContent(value) {
    set(__privateGet(this, _disableHoverableContent), value);
  }
  get disableCloseOnTriggerClick() {
    return get(__privateGet(this, _disableCloseOnTriggerClick));
  }
  set disableCloseOnTriggerClick(value) {
    set(__privateGet(this, _disableCloseOnTriggerClick), value);
  }
  get disabled() {
    return get(__privateGet(this, _disabled));
  }
  set disabled(value) {
    set(__privateGet(this, _disabled), value);
  }
  get ignoreNonKeyboardFocus() {
    return get(__privateGet(this, _ignoreNonKeyboardFocus));
  }
  set ignoreNonKeyboardFocus(value) {
    set(__privateGet(this, _ignoreNonKeyboardFocus), value);
  }
  get contentNode() {
    return get(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode), value, true);
  }
  get triggerNode() {
    return get(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode), value, true);
  }
  get stateAttr() {
    return get(__privateGet(this, _stateAttr));
  }
  set stateAttr(value) {
    set(__privateGet(this, _stateAttr), value);
  }
};
_delayDuration = new WeakMap();
_disableHoverableContent = new WeakMap();
_disableCloseOnTriggerClick = new WeakMap();
_disabled = new WeakMap();
_ignoreNonKeyboardFocus = new WeakMap();
_contentNode = new WeakMap();
_triggerNode = new WeakMap();
_wasOpenDelayed = new WeakMap();
_timerFn2 = new WeakMap();
_stateAttr = new WeakMap();
_handleDelayedOpen = new WeakMap();
let TooltipRootState = _TooltipRootState;
const _TooltipTriggerState = class _TooltipTriggerState {
  constructor(opts, root) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isPointerDown, simpleBox(false));
    __privateAdd(this, _hasPointerMoveOpened, state(false));
    __privateAdd(this, _isDisabled, user_derived(() => this.opts.disabled.current || this.root.disabled));
    __publicField(this, "domContext");
    __privateAdd(this, _transitCheckTimeout, null);
    __privateAdd(this, _clearTransitCheck, () => {
      if (__privateGet(this, _transitCheckTimeout) !== null) {
        clearTimeout(__privateGet(this, _transitCheckTimeout));
        __privateSet(this, _transitCheckTimeout, null);
      }
    });
    __publicField(this, "handlePointerUp", () => {
      __privateGet(this, _isPointerDown).current = false;
    });
    __privateAdd(this, _onpointerup, () => {
      if (get(__privateGet(this, _isDisabled))) return;
      __privateGet(this, _isPointerDown).current = false;
    });
    __privateAdd(this, _onpointerdown, () => {
      if (get(__privateGet(this, _isDisabled))) return;
      __privateGet(this, _isPointerDown).current = true;
      this.domContext.getDocument().addEventListener(
        "pointerup",
        () => {
          this.handlePointerUp();
        },
        { once: true }
      );
    });
    __privateAdd(this, _onpointerenter, (e) => {
      if (get(__privateGet(this, _isDisabled))) return;
      if (e.pointerType === "touch") return;
      if (this.root.provider.isPointerInTransit.current) {
        __privateGet(this, _clearTransitCheck).call(this);
        __privateSet(this, _transitCheckTimeout, window.setTimeout(
          () => {
            if (this.root.provider.isPointerInTransit.current) {
              this.root.provider.isPointerInTransit.current = false;
              this.root.onTriggerEnter();
              set(__privateGet(this, _hasPointerMoveOpened), true);
            }
          },
          250
        ));
        return;
      }
      this.root.onTriggerEnter();
      set(__privateGet(this, _hasPointerMoveOpened), true);
    });
    __privateAdd(this, _onpointermove, (e) => {
      if (get(__privateGet(this, _isDisabled))) return;
      if (e.pointerType === "touch") return;
      if (get(__privateGet(this, _hasPointerMoveOpened))) return;
      __privateGet(this, _clearTransitCheck).call(this);
      this.root.provider.isPointerInTransit.current = false;
      this.root.onTriggerEnter();
      set(__privateGet(this, _hasPointerMoveOpened), true);
    });
    __privateAdd(this, _onpointerleave, () => {
      if (get(__privateGet(this, _isDisabled))) return;
      __privateGet(this, _clearTransitCheck).call(this);
      this.root.onTriggerLeave();
      set(__privateGet(this, _hasPointerMoveOpened), false);
    });
    __privateAdd(this, _onfocus, (e) => {
      if (__privateGet(this, _isPointerDown).current || get(__privateGet(this, _isDisabled))) return;
      if (this.root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget)) return;
      this.root.handleOpen();
    });
    __privateAdd(this, _onblur, () => {
      if (get(__privateGet(this, _isDisabled))) return;
      this.root.handleClose();
    });
    __privateAdd(this, _onclick, () => {
      if (this.root.disableCloseOnTriggerClick || get(__privateGet(this, _isDisabled))) return;
      this.root.handleClose();
    });
    __privateAdd(this, _props, user_derived(() => {
      var _a;
      return {
        id: this.opts.id.current,
        "aria-describedby": this.root.opts.open.current ? (_a = this.root.contentNode) == null ? void 0 : _a.id : void 0,
        "data-state": this.root.stateAttr,
        "data-disabled": boolToEmptyStrOrUndef(get(__privateGet(this, _isDisabled))),
        "data-delay-duration": `${this.root.delayDuration}`,
        [tooltipAttrs.trigger]: "",
        tabindex: get(__privateGet(this, _isDisabled)) ? void 0 : 0,
        disabled: this.opts.disabled.current,
        onpointerup: __privateGet(this, _onpointerup),
        onpointerdown: __privateGet(this, _onpointerdown),
        onpointerenter: __privateGet(this, _onpointerenter),
        onpointermove: __privateGet(this, _onpointermove),
        onpointerleave: __privateGet(this, _onpointerleave),
        onfocus: __privateGet(this, _onfocus),
        onblur: __privateGet(this, _onblur),
        onclick: __privateGet(this, _onclick),
        ...this.attachment
      };
    }));
    this.opts = opts;
    this.root = root;
    this.domContext = new DOMContext(opts.ref);
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
  }
  static create(opts) {
    return new _TooltipTriggerState(opts, TooltipRootContext.get());
  }
  get props() {
    return get(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
};
_isPointerDown = new WeakMap();
_hasPointerMoveOpened = new WeakMap();
_isDisabled = new WeakMap();
_transitCheckTimeout = new WeakMap();
_clearTransitCheck = new WeakMap();
_onpointerup = new WeakMap();
_onpointerdown = new WeakMap();
_onpointerenter = new WeakMap();
_onpointermove = new WeakMap();
_onpointerleave = new WeakMap();
_onfocus = new WeakMap();
_onblur = new WeakMap();
_onclick = new WeakMap();
_props = new WeakMap();
let TooltipTriggerState = _TooltipTriggerState;
const _TooltipContentState = class _TooltipContentState {
  constructor(opts, root) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __publicField(this, "onInteractOutside", (e) => {
      var _a;
      if (isElement(e.target) && ((_a = this.root.triggerNode) == null ? void 0 : _a.contains(e.target)) && this.root.disableCloseOnTriggerClick) {
        e.preventDefault();
        return;
      }
      this.opts.onInteractOutside.current(e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onEscapeKeydown", (e) => {
      var _a, _b;
      (_b = (_a = this.opts.onEscapeKeydown).current) == null ? void 0 : _b.call(_a, e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onOpenAutoFocus", (e) => {
      e.preventDefault();
    });
    __publicField(this, "onCloseAutoFocus", (e) => {
      e.preventDefault();
    });
    __privateAdd(this, _snippetProps, user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props2, user_derived(() => ({
      id: this.opts.id.current,
      "data-state": this.root.stateAttr,
      "data-disabled": boolToEmptyStrOrUndef(this.root.disabled),
      style: { outline: "none" },
      [tooltipAttrs.content]: "",
      ...this.attachment
    })));
    __publicField(this, "popperProps", {
      onInteractOutside: this.onInteractOutside,
      onEscapeKeydown: this.onEscapeKeydown,
      onOpenAutoFocus: this.onOpenAutoFocus,
      onCloseAutoFocus: this.onCloseAutoFocus
    });
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
    new SafePolygon({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.root.contentNode,
      enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
      onPointerExit: () => {
        if (this.root.provider.isTooltipOpen(this.root)) {
          this.root.handleClose();
        }
      }
    });
    onMountEffect(() => on(window, "scroll", (e) => {
      const target = e.target;
      if (!target) return;
      if (target.contains(this.root.triggerNode)) {
        this.root.handleClose();
      }
    }));
  }
  static create(opts) {
    return new _TooltipContentState(opts, TooltipRootContext.get());
  }
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  get snippetProps() {
    return get(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
};
_snippetProps = new WeakMap();
_props2 = new WeakMap();
let TooltipContentState = _TooltipContentState;
export {
  getAriaChecked as A,
  BoxSymbol as B,
  Context as C,
  DOMContext as D,
  simpleBox as E,
  contains as F,
  isIOS as G,
  isNotNull as H,
  boolToStrTrueOrUndef as I,
  boolToTrueOrUndef as J,
  TooltipRootState as K,
  TooltipContentState as L,
  TooltipTriggerState as M,
  PresenceManager as P,
  TooltipProviderState as T,
  slot as a,
  boxWith as b,
  boxFrom as c,
  boxFlatten as d,
  isBox as e,
  isWritableBox as f,
  isClassValue as g,
  defaultWindow as h,
  isWritableSymbol as i,
  isHTMLElement as j,
  attachRef as k,
  boolToEmptyStrOrUndef as l,
  getDataOpenClosed as m,
  boolToStr as n,
  afterTick as o,
  createBitsAttrs as p,
  onDestroyEffect as q,
  isBrowser as r,
  snippet as s,
  toReadonlyBox as t,
  getDocument as u,
  isSelectableInput as v,
  watch as w,
  getWindow as x,
  isElement as y,
  isElementOrSVGElement as z
};
