var M = Object.defineProperty,
  z = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var F = (t, o, n) =>
    o in t
      ? M(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[o] = n),
  $ = (t, o) => {
    for (var n in o || (o = {})) K.call(o, n) && F(t, n, o[n]);
    if (j) for (var n of j(o)) R.call(o, n) && F(t, n, o[n]);
    return t;
  },
  _ = (t, o) => z(t, q(o));
import {
  R as h,
  j as e,
  a as c,
  r as f,
  F as A,
  _ as D,
  u as U,
  T as b,
  I as T,
  d as V,
  b as X,
  S as H,
  c as J,
  e as Q,
  f as Y,
  B as ee,
  A as te,
  g as re,
  G as C,
  h as oe,
} from "./vendor.44e18edc.js";
const ne = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) d(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const g of s.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && d(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function d(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
};
ne();
const G = h.createContext({}),
  w = () => h.useContext(G),
  le = ({ children: t }) => {
    const [o, n] = h.useState({ width: 500, height: 500 }),
      [d, r] = h.useState(1.5),
      [s, g] = h.useState("blue"),
      [x, i] = h.useState(0.05),
      [v, a] = h.useState("rgb(0, 0, 0)"),
      [m, p] = h.useState("#BD34FE"),
      [y, u] = h.useState(1),
      k = [
        { type: "M", x: 50, y: 50 },
        { type: "L", x: 200, y: 200 },
        { type: "L", x: 400, y: 200 },
        { type: "Z", x: null, y: null },
      ],
      [S, N] = h.useState(k),
      I = () => {
        N(k),
          n({ width: 500, height: 500 }),
          r(1.5),
          g("blue"),
          i(0.05),
          a("rgb(0, 0, 0)"),
          p("#BD34FE"),
          u(1);
      },
      O = (P, E, L) => {
        const B = S.map((W, Z) => (Z === L ? _($({}, W), { [E]: +P }) : W));
        N(B);
      };
    return e(G.Provider, {
      value: {
        global: {
          viewBox: o,
          setViewBox: n,
          gridColor: s,
          setGridColor: g,
          gridStrokeWidth: x,
          setGridStrokeWidth: i,
          svgScale: d,
          setSvgScale: r,
          clear: I,
        },
        path: {
          path: S,
          setPath: O,
          pathWidth: y,
          setPathWidth: u,
          pathColor: v,
          setPathColor: a,
          pathFill: m,
          setPathFill: p,
        },
      },
      children: t,
    });
  },
  se = () => {
    const {
      global: { viewBox: t, gridColor: o, gridStrokeWidth: n },
    } = w();
    return c("g", {
      children: [
        [...Array(t.width / 10)].map((d, r) =>
          e(
            "line",
            {
              x1: r * 10,
              x2: r * 10,
              y1: 0,
              y2: t.width,
              stroke: o,
              strokeWidth: n,
            },
            r
          )
        ),
        [...Array(t.height / 10)].map((d, r) =>
          e(
            "line",
            {
              y1: r * 10,
              y2: r * 10,
              x1: 0,
              x2: t.height,
              stroke: o,
              strokeWidth: n,
            },
            r
          )
        ),
      ],
    });
  },
  ae = (t) =>
    t.map((o) => (o.type === "Z" ? "Z" : `${o.type}${o.x} ${o.y}`)).join(" "),
  ie = () => {
    const {
      global: { viewBox: t, svgScale: o },
      path: { path: n, pathWidth: d, pathColor: r, pathFill: s },
    } = w();
    return e("div", {
      children: e("div", {
        className: "m-5",
        children: c("svg", {
          transform: `scale(${o})`,
          style: { transformOrigin: "0 0" },
          height: t.height,
          width: t.Width,
          viewBox: `0 0 ${t.width} ${t.height}`,
          className: "border-2 border-blue-600 ",
          children: [
            e(se, {}),
            e("path", {
              id: "path",
              d: ae(n),
              stroke: r,
              fill: s,
              strokeWidth: d,
            }),
          ],
        }),
      }),
    });
  },
  ce = ({ value: t, setValue: o, label: n, className: d }) => {
    const [r, s] = f.exports.useState(t),
      [g, x] = f.exports.useState(!1),
      i = f.exports.useRef(null),
      v = f.exports.useCallback(
        (a) => {
          x(!0), s(t);
        },
        [t]
      );
    return (
      f.exports.useEffect(() => {
        const a = (p) => {
            const y = p.movementX > 0 ? "right" : "left";
            if (g) {
              if (y === "right") {
                const u = r + 1;
                o(u < 10 ? u : 10), s(u < 10 ? u : 10);
              }
              if (y === "left") {
                const u = r - 1;
                o(u > 0 ? u : 1), s(u > 0 ? u : 1);
              }
            }
          },
          m = () => {
            x(!1);
          };
        return (
          (i == null ? void 0 : i.current) &&
            (i.current.addEventListener("mousemove", a),
            i.current.addEventListener("mouseup", m),
            i.current.addEventListener("mouseleave", m)),
          () => {
            (i == null ? void 0 : i.current) &&
              (i.current.removeEventListener("mousemove", a),
              i.current.removeEventListener("mouseup", m),
              i.current.removeEventListener("mouseleave", m));
          }
        );
      }, [g, o, r]),
      e("span", {
        ref: i,
        onMouseDown: v,
        style: { cursor: "ew-resize", userSelect: "none" },
        className: d,
        children: n,
      })
    );
  },
  de = ({ isDark: t, setIsDark: o }) => {
    const [n, d] = U(),
      r = document.getElementById("editor-ref");
    return c("div", {
      className: "flex justify-end",
      children: [
        e(b, {
          title: "Toggle dark mode",
          children: e(T, {
            size: "small",
            onClick: () => o(!t),
            children: e(V, { htmlColor: t ? "white" : "black" }),
          }),
        }),
        e(b, {
          title: "Copy to clipboard",
          children: e(T, {
            size: "small",
            onClick: () => d((r == null ? void 0 : r.textContent) || ""),
            children: e(X, { htmlColor: t ? "white" : "black" }),
          }),
        }),
      ],
    });
  },
  l = ({ color: t, word: o }) =>
    e("span", { className: `${t || ""}`, children: o || null }),
  ue = () => {
    const [t, o] = h.useState(!0),
      {
        path: {
          path: n,
          setPath: d,
          pathWidth: r,
          setPathWidth: s,
          pathColor: g,
          setPathColor: x,
          pathFill: i,
          setPathFill: v,
        },
      } = w();
    return e("div", {
      className: t ? "dark" : "",
      children: c("div", {
        className: "p-1 rounded-md dark:bg-slate-800 bg-slate-100",
        children: [
          e(de, { isDark: t, setIsDark: o }),
          c("div", {
            id: "editor-ref",
            className: "p-4",
            children: [
              c("div", {
                children: [
                  e(l, {
                    color: t ? "text-gray-200" : "text-gray-700",
                    word: "<",
                  }),
                  e(l, { color: "text-red-500", word: "path" }),
                ],
              }),
              c("div", {
                className: "pl-6",
                children: [
                  e(l, { color: "text-orange-500", word: "d" }),
                  e(l, {
                    color: t ? "text-gray-200" : "text-gray-700",
                    word: "=",
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                  n.map((a, m) =>
                    c(A, {
                      children: [
                        e(l, { color: "text-green-500", word: a.type }),
                        a.type === "Z"
                          ? null
                          : c(A, {
                              children: [
                                e(D, {
                                  value: a == null ? void 0 : a.x,
                                  type: "number",
                                  onChange: (p) => d(p.target.value, "x", m),
                                  className:
                                    "text-green-500 just-to-remove-the-bg",
                                }),
                                e(l, { color: "text-green-500", word: "," }),
                                e(D, {
                                  value: a == null ? void 0 : a.y,
                                  type: "number",
                                  onChange: (p) => d(p.target.value, "y", m),
                                  className:
                                    "text-green-500 just-to-remove-the-bg",
                                }),
                                e(l, { color: "text-green-500", word: " " }),
                              ],
                            }),
                      ],
                    })
                  ),
                  e(l, { color: "text-green-500", word: '"' }),
                ],
              }),
              c("div", {
                className: "pl-6",
                children: [
                  e(l, { color: "text-orange-500", word: "fill" }),
                  e(l, {
                    color: t ? "text-gray-200" : "text-gray-700",
                    word: "=",
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                  e("input", {
                    type: "color",
                    value: i,
                    onChange: (a) => v(a.target.value),
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                ],
              }),
              c("div", {
                className: "pl-6",
                children: [
                  e(l, { color: "text-orange-500", word: "stroke" }),
                  e(l, {
                    color: t ? "text-gray-200" : "text-gray-700",
                    word: "=",
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                  e("input", {
                    type: "color",
                    value: g,
                    onChange: (a) => x(a.target.value),
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                ],
              }),
              c("div", {
                className: "pl-6",
                children: [
                  e(ce, {
                    label: "stroke-width",
                    value: r,
                    setValue: s,
                    className: "text-orange-500",
                  }),
                  e(l, {
                    color: t ? "text-gray-200" : "text-gray-700",
                    word: "=",
                  }),
                  e(l, { color: "text-green-500", word: '"' }),
                  e(l, { color: "text-green-500", word: r }),
                  e(l, { color: "text-green-500", word: '"' }),
                ],
              }),
              e(l, { color: " ", word: " " }),
              e(l, {
                color: t ? "text-gray-200" : "text-gray-700",
                word: "/>",
              }),
            ],
          }),
        ],
      }),
    });
  },
  he = () => {
    const {
      global: { clear: t, svgScale: o, setSvgScale: n },
    } = w();
    return e("div", {
      children: c("div", {
        className: "p-10",
        children: [
          c("div", {
            className: "flex justify-end items-center mb-5 gap-4",
            children: [
              e(b, {
                title: "Zoom SVG",
                children: c(H, {
                  spacing: 2,
                  direction: "row",
                  className: "w-52",
                  children: [
                    e(J, {}),
                    e(Q, {
                      "aria-label": "Zoom",
                      value: o,
                      onChange: (d, r) => n(r),
                      min: 1,
                      max: 1.7,
                      step: 0.01,
                      size: "small",
                      valueLabelDisplay: "auto",
                    }),
                    e(Y, {}),
                  ],
                }),
              }),
              e(ee, {
                variant: "contained",
                onClick: () => t(),
                children: "Clear",
              }),
            ],
          }),
          e(ue, {}),
        ],
      }),
    });
  };
function ge() {
  return c(le, {
    children: [
      e(te, { position: "static", children: e(re, {}) }),
      c(C, {
        container: !0,
        children: [
          e(C, { item: !0, xs: 6, children: e(he, {}) }),
          e(C, { item: !0, xs: 6, children: e(ie, {}) }),
        ],
      }),
    ],
  });
}
oe.render(
  e(h.StrictMode, { children: e(ge, {}) }),
  document.getElementById("root")
);
