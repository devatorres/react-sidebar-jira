var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/constants/dictionary.js
var DICTIONARY = Object.freeze({
  META_TITLE: "Remix Sidebar Jira"
});

// app/constants/palette.js
var PALETTE = Object.freeze({
  APP: "#1d2125",
  SIDEBAR: "#161a1d",
  SIDEBAR_ACTIVE: "#579dff",
  HANDLE: "#a6c5e229"
});

// app/styles/global.css
var global_default = "/build/_assets/global-ZBRN47G3.css";

// app/styles/home.css
var home_default = "/build/_assets/home-BFR5S3EB.css";

// app/components/MySidebar/contexts/context.js
var import_react2 = require("react");

// app/components/MySidebar/constants/sidebar.js
var SIDEBAR = Object.freeze({
  SIZE_MIN: 20,
  SIZE_DEFAULT: 240,
  SIZE_MAX: 435
});

// app/components/MySidebar/constants/storage.js
var STORAGE = Object.freeze({
  NAME: "mySidebarData",
  VALUE_DEFAULT: {
    isSidebarOpen: !0,
    size: SIDEBAR.SIZE_DEFAULT
  }
});

// app/components/MySidebar/contexts/context.js
var import_jsx_runtime2 = require("react/jsx-runtime"), SidebarContext = (0, import_react2.createContext)(), SidebarProvider = ({ children }) => {
  let [sidebarData, setSidebarData] = (0, import_react2.useState)(STORAGE.VALUE_DEFAULT);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SidebarContext.Provider, { value: { sidebarData, setSidebarData }, children });
};

// app/styles/mySidebar.css
var mySidebar_default = "/build/_assets/mySidebar-3ZNM7B2Y.css";

// app/root.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => [{ title: DICTIONARY.META_TITLE }], links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: mySidebar_default },
  { rel: "stylesheet", href: home_default }
], App = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { charSet: "UTF-8" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { name: "theme-color", content: PALETTE.APP }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {})
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SidebarProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Outlet, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
  ] })
] }), root_default = App;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});

// app/components/Home/index.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Home = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "home" }), Home_default = Home;

// app/components/MySidebar/index.jsx
var import_react5 = require("react");

// app/components/MySidebar/hooks/useSidebar.js
var import_react4 = require("react");

// app/components/MySidebar/utils/storage.js
var getSidebarDataStorage = () => {
  let sidebarData = window.localStorage.getItem(STORAGE.NAME);
  return Promise.resolve(sidebarData ? JSON.parse(sidebarData) : void 0);
}, setSidebarDataStorage = (sidebarData) => {
  window.localStorage.setItem(STORAGE.NAME, JSON.stringify(sidebarData));
};

// app/components/MySidebar/hooks/useSidebar.js
var useSidebar = (sidebarRef) => {
  let { sidebarData, setSidebarData } = (0, import_react4.useContext)(SidebarContext), openSidebar = async () => {
    let newSidebarData = { isSidebarOpen: !0, size: SIDEBAR.SIZE_DEFAULT };
    setSidebarData(newSidebarData), setSidebarDataStorage(newSidebarData), await _removeAnimable();
  }, closeSidebar = async () => {
    let newSidebarData = { isSidebarOpen: !1, size: SIDEBAR.SIZE_MIN };
    setSidebarData(newSidebarData), setSidebarDataStorage(newSidebarData), await _addAnimable();
  }, resizeSidebar = () => {
    window.addEventListener("mousemove", _resizing), window.addEventListener("mouseup", _stopResize);
  }, _stopResize = () => {
    window.removeEventListener("mousemove", _resizing), window.removeEventListener("mouseup", _stopResize);
  }, _resizing = (e) => {
    let newWidth = e.clientX - sidebarRef.current.offsetLeft;
    if (sidebarData.isSidebarOpen) {
      if (newWidth < SIDEBAR.SIZE_MIN)
        return closeSidebar();
      newWidth > SIDEBAR.SIZE_MAX && (newWidth = SIDEBAR.SIZE_MAX), _putWidth(newWidth), setSidebarData((prevSidebarData) => {
        let newSidebarData = { ...prevSidebarData, size: newWidth };
        return setSidebarDataStorage(newSidebarData), newSidebarData;
      });
    }
  }, _putWidth = (newWidth) => {
    sidebarRef.current.style.width = `${newWidth}px`;
  }, init = async () => {
    let storage = await getSidebarDataStorage();
    storage ? _putState(storage) : _putDefaultStorage();
  }, _putState = (storage) => {
    setSidebarData({ ...storage }), _putWidth(storage.size);
  }, _putDefaultStorage = () => {
    setSidebarDataStorage(STORAGE.VALUE_DEFAULT), _putWidth(STORAGE.VALUE_DEFAULT.size);
  }, _addAnimable = () => Promise.resolve(
    setTimeout(() => {
      sidebarRef.current.classList.add("animable");
    }, 100)
  ), _removeAnimable = () => Promise.resolve(sidebarRef.current.classList.remove("animable"));
  return (0, import_react4.useEffect)(() => (init(), () => _stopResize()), []), {
    isSidebarOpen: sidebarData.isSidebarOpen,
    size: sidebarData.size,
    openSidebar,
    closeSidebar,
    resizeSidebar
  };
}, useSidebar_default = useSidebar;

// app/components/MySidebar/index.jsx
var import_jsx_runtime5 = require("react/jsx-runtime"), MySidebar = () => {
  let sidebarRef = (0, import_react5.useRef)(null), handleRef = (0, import_react5.useRef)(null), { isSidebarOpen, closeSidebar, resizeSidebar } = useSidebar_default(sidebarRef);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "aside",
    {
      ref: sidebarRef,
      className: `my-sidebar ${isSidebarOpen ? "opened" : "closed"}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          ref: handleRef,
          className: "handle",
          onMouseDown: resizeSidebar,
          onClick: closeSidebar
        }
      )
    }
  );
}, MySidebar_default = MySidebar;

// app/routes/_index.jsx
var import_jsx_runtime6 = require("react/jsx-runtime"), Index = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { id: "root", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MySidebar_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Home_default, {})
] }), index_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-R3MAXOAJ.js", imports: ["/build/_shared/chunk-DQFVS2MO.js", "/build/_shared/chunk-5XCBIPQZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Y4MMVOML.js", imports: ["/build/_shared/chunk-GMTWMY2Y.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WCZ7CDHB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "37c4adbf", hmr: void 0, url: "/build/manifest-37C4ADBF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
