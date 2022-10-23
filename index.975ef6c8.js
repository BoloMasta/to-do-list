// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vanillaIconPicker = require("vanilla-icon-picker");
var _vanillaIconPickerDefault = parcelHelpers.interopDefault(_vanillaIconPicker);
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-form__input");
const list_el = document.querySelector("#tasks");
const trash = document.querySelector("#trash");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const task = input.value;
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("task__content");
    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("task__text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.readOnly = true;
    // task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("task__actions");
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("task__actions--edit");
    task_edit_el.innerText = "Edit";
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("task__actions--delete");
    task_delete_el.innerText = "Delete";
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);
    input.value = "";
    task_edit_el.addEventListener("click", (event)=>{
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_edit_el.innerText = "Save";
            task_input_el.readOnly = false;
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Edit";
            task_input_el.readOnly = true;
        }
    });
    task_delete_el.addEventListener("click", (event)=>{
        list_el.removeChild(task_el);
    });
    if (list_el.children.length >= 1) {
        console.log("dsdsd");
        trash.classList.remove("is-hidden");
    }
});
trash.addEventListener("click", ()=>{
    list_el.innerText = "";
    trash.classList.add("is-hidden");
});
const iconChange = document.querySelector("#iconChange");
// Icon picker with `default` theme
const iconPickerButton = new (0, _vanillaIconPickerDefault.default)(iconChange, {
    theme: "default",
    iconSource: [
        "FontAwesome Brands 5",
        "FontAwesome Solid 5",
        "FontAwesome Regular 5", 
    ],
    closeOnSelect: true
});

},{"vanilla-icon-picker":"3FobB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FobB":[function(require,module,exports) {
/*! Icon Picker 1.1.3 MIT | https://github.com/AppoloDev/icon-picker */ !function(e, t) {
    module.exports = t();
}(self, function() {
    return (()=>{
        "use strict";
        var e = {
            d: (t, n)=>{
                for(var i in n)e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: n[i]
                });
            },
            o: (e, t)=>Object.prototype.hasOwnProperty.call(e, t)
        }, t = {};
        function n(e, t, n, i) {
            Array.isArray(t) || (t = [
                t
            ]), Array.isArray(n) || (n = [
                n
            ]);
            for (const s of t)for (const t1 of n)s[e](t1, i);
            return [].slice.call(arguments, 1);
        }
        e.d(t, {
            default: ()=>m
        });
        const i = n.bind(null, "addEventListener"), s = n.bind(null, "removeEventListener");
        function o(e) {
            if (window.DOMParser) return (new DOMParser).parseFromString(e, "text/html").body.firstElementChild;
            const t = document.createElement("div");
            return t.innerHTML = e, t.firstElementChild;
        }
        function r(e) {
            return e && "object" == typeof e && !Array.isArray(e);
        }
        function a(e, t) {
            let n = Object.assign({}, e);
            return r(e) && r(t) && Object.keys(t).forEach((i)=>{
                r(t[i]) ? i in e ? n[i] = a(e[i], t[i]) : Object.assign(n, {
                    [i]: t[i]
                }) : Object.assign(n, {
                    [i]: t[i]
                });
            }), n;
        }
        function c(e, t) {
            return Object.keys(e).find((n)=>e[n] === t);
        }
        const l = (e)=>{
            const { theme: t , i18n: n , closeOnSelect: i  } = e, s = function(e) {
                const t = (e, t)=>{
                    const n = e.getAttribute(t);
                    return e.removeAttribute(t), n;
                }, n = (e, i = {})=>{
                    const s = t(e, "data-element");
                    s && (i[s] = e);
                    for (const s1 of Array.from(e.children)){
                        const e1 = t(s1, "data-interaction");
                        e1 && e1 && (i[e1] = s1), n(s1, i);
                    }
                    return i;
                };
                return n(o(e));
            }(`\n        <div class="icon-picker-modal" tabindex="-1" data-theme="${t}" data-element="modal" aria-modal="true" aria-labelledby="Icon picker modal" role="dialog">\n            <div class="icon-picker-modal__dialog">\n                <div class="icon-picker-modal__header" data-element="header">\n                    ${"string" == typeof n["text:title"] && "" !== n["text:title"] ? `<h2>${n["text:title"]}</h2>` : ""}\n                    \n                    <button class="icon-picker-modal--close" aria-label="Close" data-interaction="close">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="1.5">\n                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>\n                        </svg>\n                    </button>\n                </div>\n                \n                <input placeholder="${n["input:placeholder"]}" class="icon-picker-modal__search" aria-label="${n["input:placeholder"]}" data-interaction="search">\n                \n                <div class="icon-picker-modal__content" data-element="content"></div>\n            \n                ${i ? "" : `\n                    <div class="icon-picker-modal__footer" data-element="footer">\n                        <button type="button" class="picker-save" data-interaction="save">${n["btn:save"]}</button>\n                    </div>`}\n            </div>\n        </div>\n    `);
            return t.includes("bootstrap") && (s.save?.classList.add("btn", "btn-primary"), s.search.classList.add("form-control")), s;
        };
        const d = "https://raw.githubusercontent.com/iconify/collections-json/master/json", u = {
            "Material Design Icons": {
                key: "mdi",
                prefix: "mdi mdi-",
                url: `${d}/mdi.json`
            },
            "FontAwesome Brands 5": {
                key: "fa-brands",
                prefix: "fab fa-",
                url: `${d}/fa-brands.json`
            },
            "FontAwesome Solid 5": {
                key: "fa-solid",
                prefix: "fas fa-",
                url: `${d}/fa-solid.json`
            },
            "FontAwesome Regular 5": {
                key: "fa-regular",
                prefix: "far fa-",
                url: `${d}/fa-regular.json`
            },
            Iconoir: {
                key: "iconoir",
                prefix: "iconoir-",
                url: `${d}/iconoir.json`
            }
        };
        function h(e) {
            let t = Object.create({});
            return Array.isArray(e) && e.forEach((e)=>{
                !function(e) {
                    return u.hasOwnProperty(e);
                }(e) ? t[e.key] = e : t[u[e].key] = u[e];
            }), t;
        }
        class m {
            static DEFAULT_OPTIONS = {
                theme: "default",
                closeOnSelect: !0,
                defaultValue: null,
                iconSource: [],
                i18n: {
                    "input:placeholder": "Search icon…",
                    "text:title": "Select icon",
                    "text:empty": "No results found…",
                    "btn:save": "Save"
                }
            };
            _eventListener = {
                select: [],
                save: [],
                show: [],
                hide: []
            };
            constructor(e, t = {}){
                this.options = a(m.DEFAULT_OPTIONS, t), this.element = e, this._preBuild(), this.element && this.options.iconSource.length > 0 ? (this._binEvents(), this._renderdIcons(), this._createModal()) : this._catchError("iconSourceMissing");
            }
            _preBuild() {
                var e;
                this.element = (e = this.element) instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : null, this.root = l(this.options), !Array.isArray(this.options.iconSource) && this.options.iconSource.length > 0 && (this.options.iconSource = [
                    this.options.iconSource
                ]);
            }
            _binEvents() {
                const { options: e , root: t , element: n  } = this;
                let s = [];
                var r, a, c;
                this._eventBindings = [
                    i(n, "click", ()=>this.show()),
                    i(t.close, "click", ()=>this.hide()),
                    i(t.modal, "click", (e)=>{
                        e.target === t.modal && this.hide();
                    }),
                    i(t.search, "keyup", (r = (n)=>{
                        const i = this.availableIcons.filter((e)=>e.value.includes(n.target.value.toLowerCase()));
                        s.length || (s = document.querySelectorAll(".icon-element")), s.forEach((e)=>{
                            e.hidden = !0, i.forEach((t)=>{
                                e.classList.contains(t.value) && (e.hidden = !1);
                            });
                        });
                        const r = t.content.querySelector(".is-empty");
                        i.length > 0 ? r && r.remove() : r || t.content.appendChild(o(`<div class="is-empty">${e.i18n["text:empty"]}</div>`));
                    }, a = 250, function() {
                        var e = arguments, t = this;
                        clearTimeout(c), c = setTimeout(function() {
                            r.apply(t, e);
                        }, a);
                    }))
                ], e.closeOnSelect || this._eventBindings.push(i(t.save, "click", ()=>this._onSave()));
            }
            hide() {
                return !!this.isOpen() && (this.root.modal.classList.remove("is-visible"), this._emit("hide"), this);
            }
            show() {
                return !this.isOpen() && (this.root.modal.classList.add("is-visible"), this._emit("show"), this);
            }
            isOpen() {
                return this.root.modal.classList.contains("is-visible");
            }
            destroy(e = !0) {
                this.initialized = !1, this._eventBindings.forEach((e)=>s(...e)), e && Object.keys(this).forEach((e)=>delete this[e]);
            }
            _emit(e, ...t) {
                this._eventListener[e].forEach((e)=>e(...t, this));
            }
            on(e, t) {
                return void 0 !== this._eventListener[e] && (this._eventListener[e].push(t), this);
            }
            off(e, t) {
                const n = this._eventListener[e] || [], i = n.indexOf(t);
                return ~i && n.splice(i, 1), this;
            }
            _createModal() {
                document.body.appendChild(this.root.modal), this.initialized = !0;
            }
            _onSave() {
                this._setValueInput(), this.hide(), this._emit("save", this.emitValues);
            }
            async _renderdIcons() {
                const { root: e , options: t  } = this;
                let n = null, i = null;
                if (this.availableIcons = [], e.content.innerHTML = "", (await this._getIcons()).forEach((s)=>{
                    for (const [o, r] of Object.entries(s.icons)){
                        const a = document.createElement("button");
                        a.title = o, a.className = `icon-element ${o}`, a.dataset.value = s.prefix + o, s.chars && (a.dataset.unicode = c(s.chars, o));
                        const l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        l.setAttribute("height", "24"), l.setAttribute("width", "24"), l.setAttribute("viewBox", `0 0 ${r.width ? r.width : s.width} ${r.height ? r.height : s.height}`), l.innerHTML = r.body, a.append(l), e.content.appendChild(a), this.availableIcons.push({
                            value: o,
                            body: l.outerHTML
                        }), a.addEventListener("click", (e)=>{
                            this.currentlySelectName !== e.currentTarget.firstChild.className && (e.currentTarget.classList.add("is-selected"), i = e.currentTarget, this.currentlySelectName = i.dataset.value, this.SVGString = l.outerHTML, this.emitValues = {
                                name: o,
                                value: this.currentlySelectName,
                                svg: this.SVGString
                            }, s.chars && (this.emitValues.unicode = l.dataset.unicode), this._emit("select", this.emitValues)), n && n.classList.remove("is-selected"), t.closeOnSelect && this._onSave(), n = i;
                        });
                    }
                }), t.defaultValue || this.element.value) {
                    let e1 = document.querySelector(`[data-value="${t.defaultValue ? t.defaultValue : this.element.value}"]`) ? document.querySelector(`[data-value="${t.defaultValue ? t.defaultValue : this.element.value}"]`) : document.querySelector(`.${t.defaultValue ? t.defaultValue : this.element.value}`), i1 = e1.dataset.value;
                    e1.classList.add("is-selected"), n = e1, this.currentlySelectName = i1, this.element.value || this._setValueInput();
                }
            }
            async _getIcons() {
                const { options: e  } = this, t = [];
                let n = h(e.iconSource);
                for (const e1 of Object.values(n))t.push(e1.url);
                return await Promise.all(t.map((e)=>fetch(e).then((e)=>e.json()))).then((e)=>(e.forEach((e)=>{
                        e.prefix = n[e.prefix].prefix;
                    }), e));
            }
            _catchError(e) {
                if ("iconSourceMissing" === e) throw Error("No icon source was found.");
            }
            _setValueInput(e = this.currentlySelectName) {
                const { element: t  } = this;
                t instanceof HTMLInputElement && this.currentlySelectName && (t.value = e);
            }
        }
        return t = t.default;
    })();
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequiree5c7")

//# sourceMappingURL=index.975ef6c8.js.map
