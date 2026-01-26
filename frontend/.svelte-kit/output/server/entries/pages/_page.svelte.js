import "clsx";
import { _ as ATTACHMENT_KEY, $ as store_get, a0 as unsubscribe_stores, a1 as sanitize_props, a2 as rest_props, a3 as attributes, a4 as ensure_array_like, a5 as element, Z as slot, a6 as bind_props, a7 as spread_props, a8 as derived, a9 as attr_style, aa as attr_class, ab as stringify } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { i as is_array, b as get_prototype_of, o as object_prototype, e as escape_html, f as fallback } from "../../chunks/context.js";
import { dequal } from "dequal";
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
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
const logs = writable([]);
const selectedLog = writable(null);
const levelFilter = writable(
  /* @__PURE__ */ new Set(["info", "warn", "error"])
);
function LogDetails($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="h-48 border-t border-border bg-card p-3 text-sm overflow-auto"><pre class="whitespace-pre-wrap text-xs">
        ${escape_html(store_get($$store_subs ??= {}, "$selectedLog", selectedLog)?.raw ?? JSON.stringify(store_get($$store_subs ??= {}, "$selectedLog", selectedLog)?.data, null, 2))}
  </pre></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
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
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["type", "name", "color", "size", "stroke", "iconNode"]);
  $$renderer.component(($$renderer2) => {
    let type = $$props["type"];
    let name = $$props["name"];
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let stroke = fallback($$props["stroke"], 2);
    let iconNode = $$props["iconNode"];
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes[type],
        ...$$restProps,
        width: size,
        height: size,
        class: `tabler-icon tabler-icon-${name} ${$$sanitized_props.class ?? ""}`,
        ...type === "filled" ? { fill: color } : { "stroke-width": stroke, stroke: color }
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, { type, name, color, size, stroke, iconNode });
  });
}
function File($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4" }],
    [
      "path",
      {
        "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "file" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Folder_open($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "folder-open" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Folder($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "folder" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const SvelteSet = globalThis.Set;
function createSubscriber(_) {
  return () => {
  };
}
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
const defaultWindow = void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window = defaultWindow, document: document2 = window?.document } = options;
    if (window === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement(this.#document);
  }
}
new ActiveElement();
function useDebounce(callback, wait = 250) {
  let context = null;
  function debounced(...args) {
    if (context) {
      if (context.timeout) {
        clearTimeout(context.timeout);
      }
    } else {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      context = { timeout: null, runner: null, promise, resolve, reject };
    }
    context.runner = async () => {
      if (!context) return;
      const ctx = context;
      context = null;
      try {
        ctx.resolve(await callback.apply(this, args));
      } catch (error) {
        ctx.reject(error);
      }
    };
    context.timeout = setTimeout(context.runner, typeof wait === "function" ? wait() : wait);
    return context.promise;
  }
  debounced.cancel = async () => {
    if (!context || context.timeout === null) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || context.timeout === null) return;
    }
    clearTimeout(context.timeout);
    context.reject("Cancelled");
    context = null;
  };
  debounced.runScheduledNow = async () => {
    if (!context || !context.timeout) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!context || !context.timeout) return;
    }
    clearTimeout(context.timeout);
    context.timeout = null;
    await context.runner?.();
  };
  Object.defineProperty(debounced, "pending", {
    enumerable: true,
    get() {
      return !!context?.timeout;
    }
  });
  return debounced;
}
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
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
  #props;
  #internal_set = new SvelteSet();
  #isControlled = derived(() => isSvelteSet(this.#props.value) || isFunction(this.#props.value));
  get isControlled() {
    return this.#isControlled();
  }
  set isControlled($$value) {
    return this.#isControlled($$value);
  }
  #isMultiple = derived(() => extract(this.#props.multiple, false));
  get isMultiple() {
    return this.#isMultiple();
  }
  set isMultiple($$value) {
    return this.#isMultiple($$value);
  }
  constructor(props) {
    this.#props = props;
    if (this.isControlled) return;
    if (!isIterable(props.value) && props.value !== void 0) {
      this.#internal_set.add(props.value);
    } else if (isIterable(props.value)) {
      forEach(props.value, (v) => this.#internal_set.add(v));
    }
    watch(
      () => this.isMultiple,
      (isMultiple) => {
        if (isMultiple) return;
        const curr = this.current;
        this.#internal_set.clear();
        if (curr === void 0) return;
        this.#internal_set.add(curr);
      },
      { lazy: true }
    );
  }
  /**
   * Gets the current selection value(s)
   * @returns For multiple selection, returns a SvelteSet of values. For single selection, returns a single value or undefined.
   */
  get current() {
    let value;
    if (isFunction(this.#props.value)) {
      value = this.#props.value();
    } else if (isSvelteSet(this.#props.value)) {
      value = this.#props.value;
    } else {
      value = this.#internal_set;
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
    this.#internal_set.clear();
    if (isSvelteSet(value)) {
      value.forEach((v) => this.#internal_set.add(v));
    } else if (value !== void 0) {
      this.#internal_set.add(value);
    }
  }
  /**
   * Manipulates the selection set through a callback
   * @param cb - Callback function that receives the selection set for manipulation
   * @internal
   */
  manipulate(cb) {
    const set = this.isControlled ? toSet(this.current) : this.#internal_set;
    const prevValue = this.isMultiple ? set : toSingle(set);
    cb(set);
    const newValue = this.isMultiple ? set : toSingle(set);
    if (dequal(prevValue, snapshot(newValue))) return;
    this.onChange(newValue);
  }
  /**
   * Triggers the onChange callback with the current selection
   * @param value - The current selection value(s)
   * @internal
   */
  onChange(value) {
    if (!this.#props.onChange) return;
    this.#props.onChange(value);
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
    this.manipulate((set) => {
      if (!this.isMultiple) {
        set.clear();
      }
      set.add(value);
    });
  }
  /**
   * Adds multiple items to the selection
   * For single selection, only the first item is selected
   * For multiple selection, all items are added to the selection
   * @param items - The items to add
   */
  addAll(items) {
    this.manipulate((set) => {
      if (!this.isMultiple) {
        set.clear();
        set.add(first(items));
      } else {
        forEach(items, (i) => set.add(i));
      }
    });
  }
  /**
   * Removes an item from the selection
   * @param value - The item to remove
   */
  delete(value) {
    this.manipulate((set) => {
      set.delete(value);
    });
  }
  /**
   * Removes multiple items from the selection
   * @param items - The items to remove
   */
  deleteAll(items) {
    this.manipulate((set) => forEach(items, set.delete));
  }
  /**
   * Clears all selections
   */
  clear() {
    this.manipulate((set) => set.clear());
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
    this.manipulate((set) => {
      if (set.has(item)) {
        set.delete(item);
      } else {
        if (!this.isMultiple) set.clear();
        set.add(item);
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
  let value = "";
  const timeout = extract(args.timeout, 500);
  const debounceClear = useDebounce(
    () => {
      value = "";
    },
    () => timeout
  );
  function typeahead(letter) {
    if (!letterRegex.test(letter)) return;
    debounceClear();
    value += letter.toLowerCase();
    const isStartingTypeahead = value.length === 1;
    const items = args.getItems();
    const index = items.findIndex((item) => item.current);
    const itemsForTypeahead = items.filter((item) => {
      const searchValue = item.typeahead ?? item.value;
      return searchValue.toLowerCase().startsWith(value);
    }).map((item) => ({ item, index: items.indexOf(item) }));
    if (!itemsForTypeahead.length) return;
    const next = itemsForTypeahead.find((item) => {
      if (isStartingTypeahead) return item.index > index;
      return item.index >= index;
    }) ?? itemsForTypeahead[0];
    return next?.item;
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
  source;
  defaultValue;
  constructor(source, defaultValue) {
    this.source = source;
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
      let index = 0;
      for (const _ of iterable) {
        yield index++;
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
      let index = 0;
      for (const value of iterable) {
        yield [index++, value];
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
function isControlOrMeta(event) {
  return isMac() ? event.metaKey : event.ctrlKey;
}
const identifiers = createDataIds("tree", ["root", "item", "group"]);
class Tree {
  #props;
  /** The items contained in the tree */
  collection;
  #multiple = derived(() => extract(this.#props.multiple, false));
  get multiple() {
    return this.#multiple();
  }
  set multiple($$value) {
    return this.#multiple($$value);
  }
  #expandOnClick = derived(() => extract(this.#props.expandOnClick, true));
  get expandOnClick() {
    return this.#expandOnClick();
  }
  set expandOnClick($$value) {
    return this.#expandOnClick($$value);
  }
  #typeaheadTimeout = derived(() => extract(this.#props.typeaheadTimeout, 500));
  get typeaheadTimeout() {
    return this.#typeaheadTimeout();
  }
  set typeaheadTimeout($$value) {
    return this.#typeaheadTimeout($$value);
  }
  #typeahead = derived(() => createTypeahead({
    timeout: this.#props.typeaheadTimeout,
    getItems: () => {
      const activeEl = document.activeElement;
      if (!isString(activeEl?.getAttribute(identifiers.item))) return [];
      const visibleChildren = Tree.getAllChildren(this, true);
      return mapAndFilter(
        visibleChildren,
        (curr) => {
          return {
            child: curr,
            value: curr.el?.innerText ?? "",
            typeahead: curr.el?.innerText ?? "",
            current: curr.el?.id === activeEl.id
          };
        },
        (c) => !!c.typeahead
      );
    }
  }));
  get typeahead() {
    return this.#typeahead();
  }
  set typeahead($$value) {
    return this.#typeahead($$value);
  }
  #selected;
  #expanded;
  #id = createId();
  constructor(props) {
    this.#props = props;
    this.collection = new Collection(props.items);
    this.#selected = new SelectionState({
      value: props.selected,
      onChange: props.onSelectedChange,
      multiple: props.multiple
    });
    this.#expanded = new SelectionState({
      value: props.expanded,
      onChange: props.onExpandedChange,
      multiple: true
    });
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
    return this.#selected.current;
  }
  set selected(v) {
    this.#selected.current = v;
  }
  /**
   * Set of currently expanded item IDs
   */
  get expanded() {
    return this.#expanded.current;
  }
  set expanded(v) {
    this.#expanded.current = v;
  }
  /**
   * Checks if an item is currently selected
   * @param id - ID of the item to check
   */
  isSelected(id2) {
    return this.#selected.has(id2);
  }
  /**
   * Checks if an item is currently expanded
   * @param id - ID of the item to check
   */
  isExpanded(id2) {
    return this.#expanded.has(id2);
  }
  getItem(id2) {
    return Tree.getAllChildren(this).find((i) => i.id === id2)?.item;
  }
  /**
   * Expands a specific item
   * @param id - ID of the item to expand
   */
  expand = (id2) => {
    const item = this.getItem(id2);
    if (!item || !item.children?.length) return;
    this.#expanded.add(id2);
  };
  /**
   * Expands all items
   */
  expandAll = () => {
    const children = Tree.getAllChildren(this);
    children.forEach((c) => this.expand(c.id));
  };
  /**
   * Collapses a specific item
   * @param id - ID of the item to collapse
   */
  collapse = (id2) => {
    this.#expanded.delete(id2);
  };
  /**
   * Collapses all items
   */
  collapseAll = () => {
    const children = Tree.getAllChildren(this);
    children.forEach((c) => this.collapse(c.id));
  };
  /**
   * Toggles the expanded state of an item
   * @param id - ID of the item to toggle
   */
  toggleExpand = (id2) => {
    this.#expanded.toggle(id2);
  };
  /**
   * Selects a specific item
   * @param id - ID of the item to select
   */
  select = (id2) => {
    this.#selected.add(id2);
  };
  /**
   * Deselects a specific item
   * @param id - ID of the item to deselect
   */
  deselect = (id2) => {
    this.#selected.delete(id2);
  };
  /**
   * Clears all current selections
   */
  clearSelection = () => {
    this.#selected.clear();
  };
  /**
   * Toggles the selected state of an item
   * @param id - ID of the item to toggle
   */
  toggleSelect = (id2) => {
    this.#selected.toggle(id2);
  };
  /**
   * Selects all visible items.
   * If all items are already selected, clears the selection.
   */
  selectAll = () => {
    const ids = Tree.getAllChildren(this, true).map((c) => c.id);
    const alreadySelected = ids.every((id2) => this.#selected.has(id2));
    if (alreadySelected) {
      this.clearSelection();
    } else {
      this.#selected.addAll(ids);
    }
  };
  /**
   * Gets the DOM ID for a specific tree item
   * @param id - ID of the item
   */
  getItemId(id2) {
    return `melt-tree-${this.#id}-item--${id2}`;
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
    if (!this.#selected.size()) return this.select(id2);
    const allChildren = Tree.getAllChildren(this);
    const to = allChildren.find((c) => c.id === id2);
    if (!to) return;
    const from = allChildren.find((c) => c.id === first(this.#selected.toSet()));
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
      selectedState: this.#selected
    }));
  }
  /**
   * Helper function to get all child items in a tree or subtree
   * @param treeOrChild - Tree or Child instance to get children from
   * @param onlyVisible - If true, only returns visible (expanded) children
   */
  static getAllChildren(treeOrChild, onlyVisible = false) {
    const children = !onlyVisible || treeOrChild instanceof Tree || treeOrChild.expanded ? treeOrChild.children : [];
    return children?.reduce(
      (acc, c) => {
        return [...acc, c, ...Tree.getAllChildren(c, onlyVisible)];
      },
      []
    ) || [];
  }
}
class Child {
  #props;
  #tree = derived(() => this.#props.tree);
  get tree() {
    return this.#tree();
  }
  set tree($$value) {
    return this.#tree($$value);
  }
  #selectedState = derived(() => this.#props.selectedState);
  get selectedState() {
    return this.#selectedState();
  }
  set selectedState($$value) {
    return this.#selectedState($$value);
  }
  #item = derived(() => this.#props.item);
  get item() {
    return this.#item();
  }
  set item($$value) {
    return this.#item($$value);
  }
  #elId = derived(() => this.tree.getItemId(this.item.id));
  get elId() {
    return this.#elId();
  }
  set elId($$value) {
    return this.#elId($$value);
  }
  #id = derived(() => this.item.id);
  get id() {
    return this.#id();
  }
  set id($$value) {
    return this.#id($$value);
  }
  #parent = derived(() => this.#props.parent);
  get parent() {
    return this.#parent();
  }
  set parent($$value) {
    return this.#parent($$value);
  }
  constructor(props) {
    this.#props = props;
  }
  /** The DOM element representing this item */
  get el() {
    return document.getElementById(this.elId);
  }
  #selected = derived(() => this.tree.isSelected(this.id));
  get selected() {
    return this.#selected();
  }
  set selected($$value) {
    return this.#selected($$value);
  }
  #expanded = derived(() => this.tree.isExpanded(this.id));
  get expanded() {
    return this.#expanded();
  }
  set expanded($$value) {
    return this.#expanded($$value);
  }
  #canExpand = derived(() => Boolean(this.item.children && this.item.children?.length > 0));
  get canExpand() {
    return this.#canExpand();
  }
  set canExpand($$value) {
    return this.#canExpand($$value);
  }
  collapse = () => this.tree.collapse(this.id);
  expand = () => this.tree.expand(this.id);
  toggleExpand = () => this.tree.toggleExpand(this.id);
  select = () => this.tree.select(this.id);
  deselect = () => this.tree.deselect(this.id);
  toggleSelect = () => this.tree.toggleSelect(this.id);
  focus = () => this.el?.focus();
  #idx = derived(() => this.parent?.children?.findIndex((c) => c.id === this.id) ?? -1);
  get idx() {
    return this.#idx();
  }
  set idx($$value) {
    return this.#idx($$value);
  }
  get siblings() {
    return this.parent?.children ?? [];
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
    if (!current) return this.parent instanceof Child ? this.parent : void 0;
    while (current?.expanded) {
      current = last(current?.children ?? []);
    }
    return current;
  }
  /** Gets the next item in the tree (including parent/child relationships) */
  get next() {
    if (this.expanded) {
      return this.children?.[0];
    }
    if (this.nextSibling) {
      return this.nextSibling;
    }
    if (this.parent instanceof Child) {
      let p = this.parent;
      while (p && !p.nextSibling) {
        if (p.parent instanceof Tree) break;
        p = p.parent;
      }
      return p?.nextSibling;
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
        let shouldPrevent = true;
        switch (e.key) {
          case "ArrowLeft": {
            if (this.expanded) {
              this.collapse();
              break;
            }
            if (!(this.parent instanceof Child)) return;
            this.parent?.focus();
            break;
          }
          case "ArrowRight": {
            if (!this.canExpand) break;
            if (this.expanded) {
              this.children?.[0]?.focus();
              break;
            }
            this.expand();
            break;
          }
          case "ArrowUp": {
            this.previous?.focus();
            if (e.shiftKey) this.previous?.toggleSelect();
            break;
          }
          case "ArrowDown": {
            this.next?.focus();
            if (e.shiftKey) this.next?.toggleSelect();
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
            first(Tree.getAllChildren(this.tree))?.focus();
            break;
          }
          case "End": {
            last(Tree.getAllChildren(this.tree, true))?.focus();
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
              next?.child.el?.focus();
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
    return this.item.children?.map((i) => new Child({ ...this.#props, item: i, parent: this }));
  }
}
createBuilderMetadata("spatial-menu", ["root", "input", "item"]);
createBuilderMetadata("dialog", ["trigger", "content", "overlay"]);
function treeItems($$renderer, items, depth = 0) {
  $$renderer.push(`<!--[-->`);
  const each_array = ensure_array_like(items);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<li${attributes({ ...item.attrs })}><div class="group py-1"${attr_style(`padding-left: ${stringify(depth * 1)}rem`)}><div${attr_class(` flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md group-hover:bg-muted transition-all duration-100 ${stringify(item.selected && "bg-accent/80 hover:bg-accent/80")} `)}>`);
    if (item.children?.length) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<span>`);
      if (item.expanded) {
        $$renderer.push("<!--[-->");
        Folder_open($$renderer, { size: 18 });
      } else {
        $$renderer.push("<!--[!-->");
        Folder($$renderer, { size: 18 });
      }
      $$renderer.push(`<!--]--></span>`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`<span>`);
      File($$renderer, { size: 16 });
      $$renderer.push(`<!----></span>`);
    }
    $$renderer.push(`<!--]--> <span class="select-none text-sm">${escape_html(item.item.label)}</span></div></div> `);
    if (item.children?.length) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<ul class="relative list-none p-0 overflow-hidden origin-left transition-all duration-100 ease-out"${attr_style(` max-height: ${stringify(item.expanded ? "1000px" : "0px")}; opacity: ${stringify(item.expanded ? 1 : 0)}; transform: ${stringify(item.expanded ? "scale(1)" : "scale(.85)")}; `)}><div${attr_style(`left: ${stringify(depth + 0.75)}rem`)} class="absolute bottom-2 top-2 w-px bg-border"></div> `);
      treeItems($$renderer, item.children, depth + 1);
      $$renderer.push(`<!----></ul>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--></li>`);
  }
  $$renderer.push(`<!--]-->`);
}
function LogsSidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
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
    $$renderer2.push(`<div class="h-full overflow-hidden"><ul${attributes({
      ...tree.root,
      class: "w-56 h-full overflow-x-auto border-r border-border p-2"
    })}>`);
    treeItems($$renderer2, tree.children, 0);
    $$renderer2.push(`<!----></ul></div>`);
  });
}
function LogRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let log = $$props["log"];
    const colors = {
      trace: "text-muted-foreground",
      debug: "text-muted-foreground",
      info: "text-foreground",
      warn: "text-yellow-500",
      error: "text-red-500",
      fatal: "text-red-600 font-semibold"
    };
    $$renderer2.push(`<div${attr_class("flex gap-3 px-3 py-1 cursor-pointer hover:bg-muted svelte-1k3731m", void 0, {
      "selected": store_get($$store_subs ??= {}, "$selectedLog", selectedLog)?.id === log.id
    })}><span class="w-20 shrink-0 text-muted-foreground">${escape_html(new Date(log.ts).toLocaleTimeString())}</span> <span${attr_class("w-12 shrink-0 " + colors[log.level], "svelte-1k3731m")}>${escape_html(log.level.toUpperCase())}</span> <span class="flex-1 truncate">${escape_html(log.message)}</span></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { log });
  });
}
function LogsStream($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="flex-1 overflow-auto font-mono text-xs"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$logs", logs));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let log = each_array[$$index];
      if (store_get($$store_subs ??= {}, "$levelFilter", levelFilter).has(log.level)) {
        $$renderer2.push("<!--[-->");
        LogRow($$renderer2, { log });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function LogsTopbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const levels = ["trace", "debug", "info", "warn", "error", "fatal"];
    $$renderer2.push(`<div class="h-11 flex items-center gap-3 px-3 border-b border-border" style="padding-left: calc(var(--titlebar-x) + 12px); padding-top: env(safe-area-inset-top);"><input placeholder="Search logs…" class="h-7 px-2 text-sm bg-muted rounded-md outline-none"/> <div class="flex gap-1"><!--[-->`);
    const each_array = ensure_array_like(levels);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let lvl = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`px-2 text-xs rounded-md border transition ${stringify(store_get($$store_subs ??= {}, "$levelFilter", levelFilter).has(lvl) ? "bg-primary/15 text-primary border-primary/30" : "border-transparent text-muted-foreground")}`)}>${escape_html(lvl.toUpperCase())}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function LogsViewer($$renderer) {
  $$renderer.push(`<div class="h-full w-full flex flex-col bg-background text-foreground">`);
  LogsTopbar($$renderer);
  $$renderer.push(`<!----> <div class="flex flex-1 overflow-hidden">`);
  LogsSidebar($$renderer);
  $$renderer.push(`<!----> <div class="flex-1 flex flex-col overflow-hidden">`);
  LogsStream($$renderer);
  $$renderer.push(`<!----> `);
  LogDetails($$renderer);
  $$renderer.push(`<!----></div></div></div>`);
}
function _page($$renderer) {
  $$renderer.push(`<div>`);
  LogsViewer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
