(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--tw-color-red-300:oklch(80.8% .114 19.571);--tw-color-yellow-300:oklch(90.5% .182 98.111);--tw-color-blue-300:oklch(80.9% .105 251.813);--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-container-6xl:72rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300;--tw-default-font-family:var(--tw-font-sans);--tw-default-mono-font-family:var(--tw-font-mono)}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:border-black{border-color:var(--tw-color-black)}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._attract_scope_190m5_2{fill:#dcdcdc;stroke:#000;stroke-width:.5px}._orient_scope_190m5_8{fill:#b4b4b4;stroke:#000;stroke-width:.5px}._repell_scope_190m5_14,._speed_190m5_20{fill:#fff;stroke:#000;stroke-width:.5px}._drop_190m5_26{fill-opacity:1;fill:#000;stroke:#000}._agent_190m5_32{stroke-width:0px;stroke:#000;fill:#000}@media (prefers-color-scheme: dark){._agent_190m5_32{stroke:#fff;fill:#fff}._drop_190m5_26{fill:#fff;stroke:gray;stroke-width:.5px}._speed_190m5_20{fill:#fff;stroke:#fff}._repell_scope_190m5_14{fill:#000;stroke:gray;stroke-width:.5px}._orient_scope_190m5_8{fill:#b4b4b4;stroke:gray;stroke-width:.5px}._attract_scope_190m5_2{fill:#dcdcdc;stroke:gray;stroke-width:.5px}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const tl = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0 tw:border-1 tw:border-black tw:dark:border-white",
  controls_class: "d3-widgets tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ce(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function nl(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Fa(t) {
  let n, e, r;
  t.length !== 2 ? (n = ce, e = (s, l) => ce(t(s), l), r = (s, l) => t(s) - l) : (n = t === ce || t === nl ? t : el, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function el() {
  return 0;
}
function rl(t) {
  return t === null ? NaN : +t;
}
const il = Fa(ce), ol = il.right;
Fa(rl).center;
const al = Math.sqrt(50), sl = Math.sqrt(10), ul = Math.sqrt(2);
function ve(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= al ? 10 : o >= sl ? 5 : o >= ul ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? ve(t, n, e * 2) : [s, l, u];
}
function ll(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? ve(n, t, e) : ve(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Er(t, n, e) {
  return n = +n, t = +t, e = +e, ve(t, n, e)[2];
}
function cl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Er(n, t, e) : Er(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var fl = { value: () => {
} };
function Da() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new fe(e);
}
function fe(t) {
  this._ = t;
}
function hl(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
fe.prototype = Da.prototype = {
  constructor: fe,
  on: function(t, n) {
    var e = this._, r = hl(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = pl(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ji(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ji(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new fe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function pl(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ji(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = fl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var kr = "http://www.w3.org/1999/xhtml";
const Qi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: kr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function qe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Qi.hasOwnProperty(n) ? { space: Qi[n], local: t } : t;
}
function dl(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === kr && n.documentElement.namespaceURI === kr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function gl(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function qa(t) {
  var n = qe(t);
  return (n.local ? gl : dl)(n);
}
function _l() {
}
function hi(t) {
  return t == null ? _l : function() {
    return this.querySelector(t);
  };
}
function yl(t) {
  typeof t != "function" && (t = hi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function vl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ml() {
  return [];
}
function Ba(t) {
  return t == null ? ml : function() {
    return this.querySelectorAll(t);
  };
}
function wl(t) {
  return function() {
    return vl(t.apply(this, arguments));
  };
}
function bl(t) {
  typeof t == "function" ? t = wl(t) : t = Ba(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new D(r, i);
}
function Ha(t) {
  return function() {
    return this.matches(t);
  };
}
function Xa(t) {
  return function(n) {
    return n.matches(t);
  };
}
var xl = Array.prototype.find;
function Ml(t) {
  return function() {
    return xl.call(this.children, t);
  };
}
function $l() {
  return this.firstElementChild;
}
function Al(t) {
  return this.select(t == null ? $l : Ml(typeof t == "function" ? t : Xa(t)));
}
var Nl = Array.prototype.filter;
function Tl() {
  return Array.from(this.children);
}
function Sl(t) {
  return function() {
    return Nl.call(this.children, t);
  };
}
function Pl(t) {
  return this.selectAll(t == null ? Tl : Sl(typeof t == "function" ? t : Xa(t)));
}
function El(t) {
  typeof t != "function" && (t = Ha(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new D(r, this._parents);
}
function Ua(t) {
  return new Array(t.length);
}
function kl() {
  return new D(this._enter || this._groups.map(Ua), this._parents);
}
function me(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
me.prototype = {
  constructor: me,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ol(t) {
  return function() {
    return t;
  };
}
function zl(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new me(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Cl(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new me(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Il(t) {
  return t.__data__;
}
function Rl(t, n) {
  if (!arguments.length) return Array.from(this, Il);
  var e = n ? Cl : zl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ol(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = jl(t.call(c, c && c.__data__, u, r)), d = p.length, g = s[u] = new Array(d), w = a[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, g, w, _, p, n);
    for (var x = 0, M = 0, y, m; x < d; ++x)
      if (y = g[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        y._next = m || null;
      }
  }
  return a = new D(a, r), a._enter = s, a._exit = l, a;
}
function jl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ll() {
  return new D(this._exit || this._groups.map(Ua), this._parents);
}
function Fl(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Dl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function ql() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Bl(t) {
  t || (t = Hl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function Hl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Xl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ul() {
  return Array.from(this);
}
function Gl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Yl() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Vl() {
  return !this.node();
}
function Kl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Zl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Wl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ql(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function tc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function nc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ec(t, n) {
  var e = qe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Wl : Zl : typeof n == "function" ? e.local ? nc : tc : e.local ? Ql : Jl)(e, n));
}
function Ga(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function rc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ic(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function oc(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ac(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? rc : typeof n == "function" ? oc : ic)(t, n, e ?? "")) : en(this.node(), t);
}
function en(t, n) {
  return t.style.getPropertyValue(n) || Ga(t).getComputedStyle(t, null).getPropertyValue(n);
}
function sc(t) {
  return function() {
    delete this[t];
  };
}
function uc(t, n) {
  return function() {
    this[t] = n;
  };
}
function lc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function cc(t, n) {
  return arguments.length > 1 ? this.each((n == null ? sc : typeof n == "function" ? lc : uc)(t, n)) : this.node()[t];
}
function Ya(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new Va(t);
}
function Va(t) {
  this._node = t, this._names = Ya(t.getAttribute("class") || "");
}
Va.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ka(t, n) {
  for (var e = pi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Za(t, n) {
  for (var e = pi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function fc(t) {
  return function() {
    Ka(this, t);
  };
}
function hc(t) {
  return function() {
    Za(this, t);
  };
}
function pc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ka : Za)(this, t);
  };
}
function dc(t, n) {
  var e = Ya(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? pc : n ? fc : hc)(e, n));
}
function gc() {
  this.textContent = "";
}
function _c(t) {
  return function() {
    this.textContent = t;
  };
}
function yc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function vc(t) {
  return arguments.length ? this.each(t == null ? gc : (typeof t == "function" ? yc : _c)(t)) : this.node().textContent;
}
function mc() {
  this.innerHTML = "";
}
function wc(t) {
  return function() {
    this.innerHTML = t;
  };
}
function bc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function xc(t) {
  return arguments.length ? this.each(t == null ? mc : (typeof t == "function" ? bc : wc)(t)) : this.node().innerHTML;
}
function Mc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $c() {
  return this.each(Mc);
}
function Ac() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Nc() {
  return this.each(Ac);
}
function Tc(t) {
  var n = typeof t == "function" ? t : qa(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Sc() {
  return null;
}
function Pc(t, n) {
  var e = typeof t == "function" ? t : qa(t), r = n == null ? Sc : typeof n == "function" ? n : hi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ec() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function kc() {
  return this.each(Ec);
}
function Oc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function zc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Cc(t) {
  return this.select(t ? zc : Oc);
}
function Ic(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Rc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function jc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Lc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Fc(t, n, e) {
  return function() {
    var r = this.__on, i, o = Rc(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Dc(t, n, e) {
  var r = jc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Fc : Lc, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Wa(t, n, e) {
  var r = Ga(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function qc(t, n) {
  return function() {
    return Wa(this, t, n);
  };
}
function Bc(t, n) {
  return function() {
    return Wa(this, t, n.apply(this, arguments));
  };
}
function Hc(t, n) {
  return this.each((typeof n == "function" ? Bc : qc)(t, n));
}
function* Xc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Ja = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function Hn() {
  return new D([[document.documentElement]], Ja);
}
function Uc() {
  return this;
}
D.prototype = Hn.prototype = {
  constructor: D,
  select: yl,
  selectAll: bl,
  selectChild: Al,
  selectChildren: Pl,
  filter: El,
  data: Rl,
  enter: kl,
  exit: Ll,
  join: Fl,
  merge: Dl,
  selection: Uc,
  order: ql,
  sort: Bl,
  call: Xl,
  nodes: Ul,
  node: Gl,
  size: Yl,
  empty: Vl,
  each: Kl,
  attr: ec,
  style: ac,
  property: cc,
  classed: dc,
  text: vc,
  html: xc,
  raise: $c,
  lower: Nc,
  append: Tc,
  insert: Pc,
  remove: kc,
  clone: Cc,
  datum: Ic,
  on: Dc,
  dispatch: Hc,
  [Symbol.iterator]: Xc
};
function Gc(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], Ja);
}
function Be(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function di(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function pn() {
}
var It = 0.7, rn = 1 / It, Wt = "\\s*([+-]?\\d+)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Yc = /^#([0-9a-f]{3,8})$/, Vc = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), Kc = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), Zc = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${En}\\)$`), Wc = new RegExp(`^rgba\\(${et},${et},${et},${En}\\)$`), Jc = new RegExp(`^hsl\\(${En},${et},${et}\\)$`), Qc = new RegExp(`^hsla\\(${En},${et},${et},${En}\\)$`), to = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Be(pn, Rt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: no,
  // Deprecated! Use color.formatHex.
  formatHex: no,
  formatHex8: tf,
  formatHsl: nf,
  formatRgb: eo,
  toString: eo
});
function no() {
  return this.rgb().formatHex();
}
function tf() {
  return this.rgb().formatHex8();
}
function nf() {
  return ts(this).formatHsl();
}
function eo() {
  return this.rgb().formatRgb();
}
function Rt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Yc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ro(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Vc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Kc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Zc.exec(t)) ? Kn(n[1], n[2], n[3], n[4]) : (n = Wc.exec(t)) ? Kn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Jc.exec(t)) ? ao(n[1], n[2] / 100, n[3] / 100, 1) : (n = Qc.exec(t)) ? ao(n[1], n[2] / 100, n[3] / 100, n[4]) : to.hasOwnProperty(t) ? ro(to[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function ro(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Qa(t) {
  return t instanceof pn || (t = Rt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function Or(t, n, e, r) {
  return arguments.length === 1 ? Qa(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Be(R, Or, di(pn, {
  brighter(t) {
    return t = t == null ? rn : Math.pow(rn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(kt(this.r), kt(this.g), kt(this.b), we(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: io,
  // Deprecated! Use color.formatHex.
  formatHex: io,
  formatHex8: ef,
  formatRgb: oo,
  toString: oo
}));
function io() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function ef() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function oo() {
  const t = we(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${kt(this.r)}, ${kt(this.g)}, ${kt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function we(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function kt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pt(t) {
  return t = kt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ao(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function ts(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof pn || (t = Rt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Z(a, s, l, t.opacity);
}
function rf(t, n, e, r) {
  return arguments.length === 1 ? ts(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Be(Z, rf, di(pn, {
  brighter(t) {
    return t = t == null ? rn : Math.pow(rn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      _r(t >= 240 ? t - 240 : t + 120, i, r),
      _r(t, i, r),
      _r(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(so(this.h), Zn(this.s), Zn(this.l), we(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = we(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${so(this.h)}, ${Zn(this.s) * 100}%, ${Zn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function so(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Zn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function _r(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const of = Math.PI / 180, af = 180 / Math.PI;
var ns = -0.14861, gi = 1.78277, _i = -0.29227, He = -0.90649, kn = 1.97294, uo = kn * He, lo = kn * gi, co = gi * _i - He * ns;
function sf(t) {
  if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);
  t instanceof R || (t = Qa(t));
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (co * r + uo * n - lo * e) / (co + uo - lo), o = r - i, a = (kn * (e - i) - _i * o) / He, s = Math.sqrt(a * a + o * o) / (kn * i * (1 - i)), l = s ? Math.atan2(a, o) * af - 120 : NaN;
  return new Ot(l < 0 ? l + 360 : l, s, i, t.opacity);
}
function Mt(t, n, e, r) {
  return arguments.length === 1 ? sf(t) : new Ot(t, n, e, r ?? 1);
}
function Ot(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Be(Ot, Mt, di(pn, {
  brighter(t) {
    return t = t == null ? rn : Math.pow(rn, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new Ot(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * of, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
    return new R(
      255 * (n + e * (ns * r + gi * i)),
      255 * (n + e * (_i * r + He * i)),
      255 * (n + e * (kn * r)),
      this.opacity
    );
  }
}));
const Xe = (t) => () => t;
function es(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function uf(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function lf(t, n) {
  var e = n - t;
  return e ? es(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Xe(isNaN(t) ? n : t);
}
function cf(t) {
  return (t = +t) == 1 ? Jt : function(n, e) {
    return e - n ? uf(n, e, t) : Xe(isNaN(n) ? e : n);
  };
}
function Jt(t, n) {
  var e = n - t;
  return e ? es(t, e) : Xe(isNaN(t) ? n : t);
}
const be = function t(n) {
  var e = cf(n);
  function r(i, o) {
    var a = e((i = Or(i)).r, (o = Or(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Jt(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ff(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function hf(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function pf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = yi(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function df(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function gf(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = yi(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yr = new RegExp(zr.source, "g");
function _f(t) {
  return function() {
    return t;
  };
}
function yf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function rs(t, n) {
  var e = zr.lastIndex = yr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = zr.exec(t)) && (i = yr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: V(r, i) })), e = yr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? yf(l[0].x) : _f(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function yi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Xe(n) : (e === "number" ? V : e === "string" ? (r = Rt(n)) ? (n = r, be) : rs : n instanceof Rt ? be : n instanceof Date ? df : hf(n) ? ff : Array.isArray(n) ? pf : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? gf : V)(t, n);
}
function vf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var fo = 180 / Math.PI, Cr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function is(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * fo,
    skewX: Math.atan(l) * fo,
    scaleX: a,
    scaleY: s
  };
}
var Wn;
function mf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Cr : is(n.a, n.b, n.c, n.d, n.e, n.f);
}
function wf(t) {
  return t == null || (Wn || (Wn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wn.setAttribute("transform", t), !(t = Wn.transform.baseVal.consolidate())) ? Cr : (t = t.matrix, is(t.a, t.b, t.c, t.d, t.e, t.f));
}
function os(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: V(u, h) }, { i: g - 2, x: V(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: V(u, h) }, { i: g - 2, x: V(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, g = f.length, w; ++d < g; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var bf = os(mf, "px, ", "px)", "deg)"), xf = os(wf, ", ", ")", ")");
function as(t) {
  return function n(e) {
    e = +e;
    function r(i, o) {
      var a = t((i = Mt(i)).h, (o = Mt(o)).h), s = Jt(i.s, o.s), l = Jt(i.l, o.l), u = Jt(i.opacity, o.opacity);
      return function(c) {
        return i.h = a(c), i.s = s(c), i.l = l(Math.pow(c, e)), i.opacity = u(c), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
as(lf);
var ss = as(Jt), on = 0, bn = 0, yn = 0, us = 1e3, xe, xn, Me = 0, jt = 0, Ue = 0, On = typeof performance == "object" && performance.now ? performance : Date, ls = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ge() {
  return jt || (ls(Mf), jt = On.now() + Ue);
}
function Mf() {
  jt = 0;
}
function zn() {
  this._call = this._time = this._next = null;
}
zn.prototype = cs.prototype = {
  constructor: zn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ge() : +e) + (n == null ? 0 : +n), !this._next && xn !== this && (xn ? xn._next = this : xe = this, xn = this), this._call = t, this._time = e, Ir();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ir());
  }
};
function cs(t, n, e) {
  var r = new zn();
  return r.restart(t, n, e), r;
}
function $f() {
  Ge(), ++on;
  for (var t = xe, n; t; )
    (n = jt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --on;
}
function ho() {
  jt = (Me = On.now()) + Ue, on = bn = 0;
  try {
    $f();
  } finally {
    on = 0, Nf(), jt = 0;
  }
}
function Af() {
  var t = On.now(), n = t - Me;
  n > us && (Ue -= n, Me = t);
}
function Nf() {
  for (var t, n = xe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xe = e);
  xn = t, Ir(r);
}
function Ir(t) {
  if (!on) {
    bn && (bn = clearTimeout(bn));
    var n = t - jt;
    n > 24 ? (t < 1 / 0 && (bn = setTimeout(ho, t - On.now() - Ue)), yn && (yn = clearInterval(yn))) : (yn || (Me = On.now(), yn = setInterval(Af, us)), on = 1, ls(ho));
  }
}
function po(t, n, e) {
  var r = new zn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Tf(t, n, e) {
  var r = new zn(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Ge() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Sf = Da("start", "end", "cancel", "interrupt"), Pf = [], fs = 0, go = 1, Rr = 2, he = 3, _o = 4, jr = 5, pe = 6;
function Ye(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ef(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Sf,
    tween: Pf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: fs
  });
}
function vi(t, n) {
  var e = Q(t, n);
  if (e.state > fs) throw new Error("too late; already scheduled");
  return e;
}
function ot(t, n) {
  var e = Q(t, n);
  if (e.state > he) throw new Error("too late; already running");
  return e;
}
function Q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ef(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = cs(o, 0, e.time);
  function o(u) {
    e.state = go, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (e.state !== go) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === he) return po(a);
        p.state === _o ? (p.state = pe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = pe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (po(function() {
      e.state === he && (e.state = _o, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Rr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Rr) {
      for (e.state = he, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = jr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === jr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = pe, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function kf(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Rr && r.state < jr, r.state = pe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Of(t) {
  return this.each(function() {
    kf(this, t);
  });
}
function zf(t, n) {
  var e, r;
  return function() {
    var i = ot(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Cf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = ot(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function If(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? zf : Cf)(e, t, n));
}
function mi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[n];
  };
}
function hs(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof Rt ? be : (e = Rt(n)) ? (n = e, be) : rs)(t, n);
}
function Rf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Lf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ff(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Df(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function qf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Bf(t, n) {
  var e = qe(t), r = e === "transform" ? xf : hs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? qf : Df)(e, r, mi(this, "attr." + t, n)) : n == null ? (e.local ? jf : Rf)(e) : (e.local ? Ff : Lf)(e, r, n));
}
function Hf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Xf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Uf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Xf(t, o)), e;
  }
  return i._value = n, i;
}
function Gf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Hf(t, o)), e;
  }
  return i._value = n, i;
}
function Yf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = qe(t);
  return this.tween(e, (r.local ? Uf : Gf)(r, n));
}
function Vf(t, n) {
  return function() {
    vi(this, t).delay = +n.apply(this, arguments);
  };
}
function Kf(t, n) {
  return n = +n, function() {
    vi(this, t).delay = n;
  };
}
function Zf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Vf : Kf)(n, t)) : Q(this.node(), n).delay;
}
function Wf(t, n) {
  return function() {
    ot(this, t).duration = +n.apply(this, arguments);
  };
}
function Jf(t, n) {
  return n = +n, function() {
    ot(this, t).duration = n;
  };
}
function Qf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wf : Jf)(n, t)) : Q(this.node(), n).duration;
}
function th(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ot(this, t).ease = n;
  };
}
function nh(t) {
  var n = this._id;
  return arguments.length ? this.each(th(n, t)) : Q(this.node(), n).ease;
}
function eh(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ot(this, t).ease = e;
  };
}
function rh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(eh(this._id, t));
}
function ih(t) {
  typeof t != "function" && (t = Ha(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new ht(r, this._parents, this._name, this._id);
}
function oh(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = n[s];
  return new ht(a, this._parents, this._name, this._id);
}
function ah(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function sh(t, n, e) {
  var r, i, o = ah(n) ? vi : ot;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function uh(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Q(this.node(), e).on.on(t) : this.each(sh(e, t, n));
}
function lh(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function ch() {
  return this.on("end.remove", lh(this._id));
}
function fh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ye(u[f], n, e, f, u, Q(c, e)));
  return new ht(o, this._parents, n, e);
}
function hh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ba(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = Q(c, e), g = 0, w = f.length; g < w; ++g)
          (p = f[g]) && Ye(p, n, e, g, f, d);
        o.push(f), a.push(c);
      }
  return new ht(o, a, n, e);
}
var ph = Hn.prototype.constructor;
function dh() {
  return new ph(this._groups, this._parents);
}
function gh(t, n) {
  var e, r, i;
  return function() {
    var o = en(this, t), a = (this.style.removeProperty(t), en(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ps(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _h(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = en(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function yh(t, n, e) {
  var r, i, o;
  return function() {
    var a = en(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), en(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function vh(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = ot(this, t), u = l.on, c = l.value[o] == null ? s || (s = ps(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(a, i = c), l.on = r;
  };
}
function mh(t, n, e) {
  var r = (t += "") == "transform" ? bf : hs;
  return n == null ? this.styleTween(t, gh(t, r)).on("end.style." + t, ps(t)) : typeof n == "function" ? this.styleTween(t, yh(t, r, mi(this, "style." + t, n))).each(vh(this._id, t)) : this.styleTween(t, _h(t, r, n), e).on("end.style." + t, null);
}
function wh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function bh(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && wh(t, a, e)), r;
  }
  return o._value = n, o;
}
function xh(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, bh(t, n, e ?? ""));
}
function Mh(t) {
  return function() {
    this.textContent = t;
  };
}
function $h(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ah(t) {
  return this.tween("text", typeof t == "function" ? $h(mi(this, "text", t)) : Mh(t == null ? "" : t + ""));
}
function Nh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Th(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Nh(i)), n;
  }
  return r._value = t, r;
}
function Sh(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Th(t));
}
function Ph() {
  for (var t = this._name, n = this._id, e = ds(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = Q(l, n);
        Ye(l, t, e, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ht(r, this._parents, t, e);
}
function Eh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = ot(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var kh = 0;
function ht(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ds() {
  return ++kh;
}
var st = Hn.prototype;
ht.prototype = {
  constructor: ht,
  select: fh,
  selectAll: hh,
  selectChild: st.selectChild,
  selectChildren: st.selectChildren,
  filter: ih,
  merge: oh,
  selection: dh,
  transition: Ph,
  call: st.call,
  nodes: st.nodes,
  node: st.node,
  size: st.size,
  empty: st.empty,
  each: st.each,
  on: uh,
  attr: Bf,
  attrTween: Yf,
  style: mh,
  styleTween: xh,
  text: Ah,
  textTween: Sh,
  remove: ch,
  tween: If,
  delay: Zf,
  duration: Qf,
  ease: nh,
  easeVarying: rh,
  end: Eh,
  [Symbol.iterator]: st[Symbol.iterator]
};
function Oh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Oh
};
function Ch(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ih(t) {
  var n, e;
  t instanceof ht ? (n = t._id, t = t._name) : (n = ds(), (e = zh).time = Ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ye(l, t, n, u, a, e || Ch(l, n));
  return new ht(r, this._parents, t, n);
}
Hn.prototype.interrupt = Of;
Hn.prototype.transition = Ih;
const Lr = Math.PI, Fr = 2 * Lr, Nt = 1e-6, Rh = Fr - Nt;
function gs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function jh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return gs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Lh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? gs : jh(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, c = a - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Nt) if (!(Math.abs(h * l - u * c) > Nt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, g = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(g), x = Math.sqrt(f), M = o * Math.tan((Lr - Math.acos((g + f - w) / (2 * _ * x))) / 2), y = M / x, m = M / _;
      Math.abs(y - 1) > Nt && this._append`L${n + y * c},${e + y * h}`, this._append`A${o},${o},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - c) > Nt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Fr + Fr), f > Rh ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Nt && this._append`A${r},${r},0,${+(f >= Lr)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Fh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $e(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function an(t) {
  return t = $e(Math.abs(t)), t ? t[1] : NaN;
}
function Dh(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function qh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Bh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ae(t) {
  if (!(n = Bh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new wi({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ae.prototype = wi.prototype;
function wi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
wi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Hh(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var _s;
function Xh(t, n) {
  var e = $e(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (_s = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + $e(t, Math.max(0, n + o - 1))[0];
}
function yo(t, n) {
  var e = $e(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const vo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Fh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => yo(t * 100, n),
  r: yo,
  s: Xh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function mo(t) {
  return t;
}
var wo = Array.prototype.map, bo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? mo : Dh(wo.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? mo : qh(wo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ae(h);
    var f = h.fill, p = h.align, d = h.sign, g = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : vo[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var E = g === "$" ? e : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = g === "$" ? r : /[%p]/.test(m) ? a : "", O = vo[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var z = E, N = k, C, At, F;
      if (m === "c")
        N = O(v) + N, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), y && (v = Hh(v)), X && +v == 0 && d !== "+" && (X = !1), z = (X ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, N = (m === "s" ? bo[8 + _s / 3] : "") + N + (X && d === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (F = v.charCodeAt(C), 48 > F || F > 57) {
              N = (F === 46 ? i + v.slice(C + 1) : v.slice(C)) + N, v = v.slice(0, C);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var G = z.length + v.length + N.length, P = G < _ ? new Array(_ - G + 1).join(f) : "";
      switch (x && w && (v = n(P + v, P.length ? _ - N.length : 1 / 0), P = ""), p) {
        case "<":
          v = z + v + N + P;
          break;
        case "=":
          v = z + P + v + N;
          break;
        case "^":
          v = P.slice(0, G = P.length >> 1) + z + v + N + P.slice(G);
          break;
        default:
          v = P + z + v + N;
          break;
      }
      return o(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = Ae(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(an(f) / 3))) * 3, g = Math.pow(10, -d), w = bo[8 + d / 3];
    return function(_) {
      return p(g * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Jn, ys, vs;
Gh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Gh(t) {
  return Jn = Uh(t), ys = Jn.format, vs = Jn.formatPrefix, Jn;
}
function Yh(t) {
  return Math.max(0, -an(Math.abs(t)));
}
function Vh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(an(n) / 3))) * 3 - an(Math.abs(t)));
}
function Kh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, an(n) - an(t)) + 1;
}
function Zh(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Wh(t) {
  return function() {
    return t;
  };
}
function Jh(t) {
  return +t;
}
var xo = [0, 1];
function Kt(t) {
  return t;
}
function Dr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Wh(isNaN(n) ? NaN : 0.5);
}
function Qh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function tp(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Dr(i, r), o = e(a, o)) : (r = Dr(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function np(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Dr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = ol(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function ep(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rp() {
  var t = xo, n = xo, e = yi, r, i, o, a = Kt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Kt && (a = Qh(t[0], t[f - 1])), s = f > 2 ? np : tp, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Jh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = vf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Kt, c()) : a !== Kt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function ip() {
  return rp()(Kt, Kt);
}
function op(t, n, e, r) {
  var i = cl(t, n, e), o;
  switch (r = Ae(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Vh(i, a)) && (r.precision = o), vs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Kh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Yh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ys(r);
}
function ap(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ll(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return op(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = Er(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function Xn() {
  var t = ip();
  return t.copy = function() {
    return ep(t, Xn());
  }, Zh.apply(t, arguments), ap(t);
}
ss(Mt(-100, 0.75, 0.35), Mt(80, 1.5, 0.8));
ss(Mt(260, 0.75, 0.35), Mt(80, 1.5, 0.8));
var Qn = Mt();
function sp(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var n = Math.abs(t - 0.5);
  return Qn.h = 360 * t - 100, Qn.s = 1.5 - 1.5 * n, Qn.l = 0.8 - 0.9 * n, Qn + "";
}
function Yt(t) {
  return function() {
    return t;
  };
}
function up(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Lh(n);
}
function lp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ms(t) {
  this._context = t;
}
ms.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function cp(t) {
  return new ms(t);
}
function fp(t) {
  return t[0];
}
function hp(t) {
  return t[1];
}
function pp(t, n) {
  var e = Yt(!0), r = null, i = cp, o = null, a = up(s);
  t = typeof t == "function" ? t : t === void 0 ? fp : Yt(t), n = typeof n == "function" ? n : n === void 0 ? hp : Yt(n);
  function s(l) {
    var u, c = (l = lp(l)).length, h, f = !1, p;
    for (r == null && (o = i(p = a())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(h, u, l), +n(h, u, l));
    if (p) return o = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Yt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Yt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Yt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (o = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = o = null : o = i(r = l), s) : r;
  }, s;
}
function Mn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(t) {
    return t === 1 ? this : new Mn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Mn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Mn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function de(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function dp(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ws(t) {
  let n, e, r;
  t.length !== 2 ? (n = de, e = (s, l) => de(t(s), l), r = (s, l) => t(s) - l) : (n = t === de || t === dp ? t : gp, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function gp() {
  return 0;
}
function _p(t) {
  return t === null ? NaN : +t;
}
const yp = ws(de), vp = yp.right;
ws(_p).center;
const mp = Math.sqrt(50), wp = Math.sqrt(10), bp = Math.sqrt(2);
function Ne(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= mp ? 10 : o >= wp ? 5 : o >= bp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Ne(t, n, e * 2) : [s, l, u];
}
function xp(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? Ne(n, t, e) : Ne(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function qr(t, n, e) {
  return n = +n, t = +t, e = +e, Ne(t, n, e)[2];
}
function Mp(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? qr(n, t, e) : qr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function te(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function $p(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Ap = { value: () => {
} };
function bi() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ge(e);
}
function ge(t) {
  this._ = t;
}
function Np(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ge.prototype = bi.prototype = {
  constructor: ge,
  on: function(t, n) {
    var e = this._, r = Np(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Tp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Mo(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Mo(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ge(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Tp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Mo(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ap, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Br = "http://www.w3.org/1999/xhtml";
const $o = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Br,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ve(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), $o.hasOwnProperty(n) ? { space: $o[n], local: t } : t;
}
function Sp(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Br && n.documentElement.namespaceURI === Br ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Pp(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function bs(t) {
  var n = Ve(t);
  return (n.local ? Pp : Sp)(n);
}
function Ep() {
}
function xi(t) {
  return t == null ? Ep : function() {
    return this.querySelector(t);
  };
}
function kp(t) {
  typeof t != "function" && (t = xi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function Op(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function zp() {
  return [];
}
function xs(t) {
  return t == null ? zp : function() {
    return this.querySelectorAll(t);
  };
}
function Cp(t) {
  return function() {
    return Op(t.apply(this, arguments));
  };
}
function Ip(t) {
  typeof t == "function" ? t = Cp(t) : t = xs(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new q(r, i);
}
function Ms(t) {
  return function() {
    return this.matches(t);
  };
}
function $s(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Rp = Array.prototype.find;
function jp(t) {
  return function() {
    return Rp.call(this.children, t);
  };
}
function Lp() {
  return this.firstElementChild;
}
function Fp(t) {
  return this.select(t == null ? Lp : jp(typeof t == "function" ? t : $s(t)));
}
var Dp = Array.prototype.filter;
function qp() {
  return Array.from(this.children);
}
function Bp(t) {
  return function() {
    return Dp.call(this.children, t);
  };
}
function Hp(t) {
  return this.selectAll(t == null ? qp : Bp(typeof t == "function" ? t : $s(t)));
}
function Xp(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new q(r, this._parents);
}
function As(t) {
  return new Array(t.length);
}
function Up() {
  return new q(this._enter || this._groups.map(As), this._parents);
}
function Te(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Te.prototype = {
  constructor: Te,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Gp(t) {
  return function() {
    return t;
  };
}
function Yp(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Te(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Vp(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new Te(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Kp(t) {
  return t.__data__;
}
function Zp(t, n) {
  if (!arguments.length) return Array.from(this, Kp);
  var e = n ? Vp : Yp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Gp(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Wp(t.call(c, c && c.__data__, u, r)), d = p.length, g = s[u] = new Array(d), w = a[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, g, w, _, p, n);
    for (var x = 0, M = 0, y, m; x < d; ++x)
      if (y = g[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        y._next = m || null;
      }
  }
  return a = new q(a, r), a._enter = s, a._exit = l, a;
}
function Wp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Jp() {
  return new q(this._exit || this._groups.map(As), this._parents);
}
function Qp(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function td(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function nd() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ed(t) {
  t || (t = rd);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function rd(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function id() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function od() {
  return Array.from(this);
}
function ad() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function sd() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ud() {
  return !this.node();
}
function ld(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function cd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function hd(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function pd(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function dd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function gd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function _d(t, n) {
  var e = Ve(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? fd : cd : typeof n == "function" ? e.local ? gd : dd : e.local ? pd : hd)(e, n));
}
function Ns(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function yd(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vd(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function md(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function wd(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? yd : typeof n == "function" ? md : vd)(t, n, e ?? "")) : sn(this.node(), t);
}
function sn(t, n) {
  return t.style.getPropertyValue(n) || Ns(t).getComputedStyle(t, null).getPropertyValue(n);
}
function bd(t) {
  return function() {
    delete this[t];
  };
}
function xd(t, n) {
  return function() {
    this[t] = n;
  };
}
function Md(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function $d(t, n) {
  return arguments.length > 1 ? this.each((n == null ? bd : typeof n == "function" ? Md : xd)(t, n)) : this.node()[t];
}
function Ts(t) {
  return t.trim().split(/^|\s+/);
}
function Mi(t) {
  return t.classList || new Ss(t);
}
function Ss(t) {
  this._node = t, this._names = Ts(t.getAttribute("class") || "");
}
Ss.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ps(t, n) {
  for (var e = Mi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Es(t, n) {
  for (var e = Mi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ad(t) {
  return function() {
    Ps(this, t);
  };
}
function Nd(t) {
  return function() {
    Es(this, t);
  };
}
function Td(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ps : Es)(this, t);
  };
}
function Sd(t, n) {
  var e = Ts(t + "");
  if (arguments.length < 2) {
    for (var r = Mi(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Td : n ? Ad : Nd)(e, n));
}
function Pd() {
  this.textContent = "";
}
function Ed(t) {
  return function() {
    this.textContent = t;
  };
}
function kd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Od(t) {
  return arguments.length ? this.each(t == null ? Pd : (typeof t == "function" ? kd : Ed)(t)) : this.node().textContent;
}
function zd() {
  this.innerHTML = "";
}
function Cd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Id(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Rd(t) {
  return arguments.length ? this.each(t == null ? zd : (typeof t == "function" ? Id : Cd)(t)) : this.node().innerHTML;
}
function jd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ld() {
  return this.each(jd);
}
function Fd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dd() {
  return this.each(Fd);
}
function qd(t) {
  var n = typeof t == "function" ? t : bs(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Bd() {
  return null;
}
function Hd(t, n) {
  var e = typeof t == "function" ? t : bs(t), r = n == null ? Bd : typeof n == "function" ? n : xi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Xd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ud() {
  return this.each(Xd);
}
function Gd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Yd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Vd(t) {
  return this.select(t ? Yd : Gd);
}
function Kd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Zd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Wd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Jd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Qd(t, n, e) {
  return function() {
    var r = this.__on, i, o = Zd(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function t0(t, n, e) {
  var r = Wd(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Qd : Jd, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ks(t, n, e) {
  var r = Ns(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function n0(t, n) {
  return function() {
    return ks(this, t, n);
  };
}
function e0(t, n) {
  return function() {
    return ks(this, t, n.apply(this, arguments));
  };
}
function r0(t, n) {
  return this.each((typeof n == "function" ? e0 : n0)(t, n));
}
function* i0() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Os = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Un() {
  return new q([[document.documentElement]], Os);
}
function o0() {
  return this;
}
q.prototype = Un.prototype = {
  constructor: q,
  select: kp,
  selectAll: Ip,
  selectChild: Fp,
  selectChildren: Hp,
  filter: Xp,
  data: Zp,
  enter: Up,
  exit: Jp,
  join: Qp,
  merge: td,
  selection: o0,
  order: nd,
  sort: ed,
  call: id,
  nodes: od,
  node: ad,
  size: sd,
  empty: ud,
  each: ld,
  attr: _d,
  style: wd,
  property: $d,
  classed: Sd,
  text: Od,
  html: Rd,
  raise: Ld,
  lower: Dd,
  append: qd,
  insert: Hd,
  remove: Ud,
  clone: Vd,
  datum: Kd,
  on: t0,
  dispatch: r0,
  [Symbol.iterator]: i0
};
function I(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], Os);
}
function a0(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Hr(t, n) {
  if (t = a0(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const s0 = { passive: !1 }, Cn = { capture: !0, passive: !1 };
function vr(t) {
  t.stopImmediatePropagation();
}
function Qt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function u0(t) {
  var n = t.document.documentElement, e = I(t).on("dragstart.drag", Qt, Cn);
  "onselectstart" in n ? e.on("selectstart.drag", Qt, Cn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function l0(t, n) {
  var e = t.document.documentElement, r = I(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Qt, Cn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const ne = (t) => () => t;
function Xr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Xr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function c0(t) {
  return !t.ctrlKey && !t.button;
}
function f0() {
  return this.parentNode;
}
function h0(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function p0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function d0() {
  var t = c0, n = f0, e = h0, r = p0, i = {}, o = bi("start", "drag", "end"), a = 0, s, l, u, c, h = 0;
  function f(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, s0).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var E = M(this, n.call(this, y, m), y, m, "mouse");
      E && (I(y.view).on("mousemove.drag", d, Cn).on("mouseup.drag", g, Cn), u0(y.view), vr(y), u = !1, s = y.clientX, l = y.clientY, E("start", y));
    }
  }
  function d(y) {
    if (Qt(y), !u) {
      var m = y.clientX - s, E = y.clientY - l;
      u = m * m + E * E > h;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    I(y.view).on("mousemove.drag mouseup.drag", null), l0(y.view, u), Qt(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var E = y.changedTouches, k = n.call(this, y, m), O = E.length, B, H;
      for (B = 0; B < O; ++B)
        (H = M(this, k, y, m, E[B].identifier, E[B])) && (vr(y), H("start", y, E[B]));
    }
  }
  function _(y) {
    var m = y.changedTouches, E = m.length, k, O;
    for (k = 0; k < E; ++k)
      (O = i[m[k].identifier]) && (Qt(y), O("drag", y, m[k]));
  }
  function x(y) {
    var m = y.changedTouches, E = m.length, k, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), k = 0; k < E; ++k)
      (O = i[m[k].identifier]) && (vr(y), O("end", y, m[k]));
  }
  function M(y, m, E, k, O, B) {
    var H = o.copy(), v = Hr(B || E, m), z, N, C;
    if ((C = e.call(y, new Xr("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: O,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), k)) != null)
      return z = C.x - v[0] || 0, N = C.y - v[1] || 0, function At(F, X, G) {
        var P = v, gr;
        switch (F) {
          case "start":
            i[O] = At, gr = a++;
            break;
          case "end":
            delete i[O], --a;
          // falls through
          case "drag":
            v = Hr(G || X, m), gr = a;
            break;
        }
        H.call(
          F,
          y,
          new Xr(F, {
            sourceEvent: X,
            subject: C,
            target: f,
            identifier: O,
            active: gr,
            x: v[0] + z,
            y: v[1] + N,
            dx: v[0] - P[0],
            dy: v[1] - P[1],
            dispatch: H
          }),
          k
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : ne(!!y), f) : t;
  }, f.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : ne(y), f) : n;
  }, f.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : ne(y), f) : e;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : ne(!!y), f) : r;
  }, f.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function $i(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function zs(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gn() {
}
var In = 0.7, Se = 1 / In, tn = "\\s*([+-]?\\d+)\\s*", Rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", g0 = /^#([0-9a-f]{3,8})$/, _0 = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), y0 = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), v0 = new RegExp(`^rgba\\(${tn},${tn},${tn},${Rn}\\)$`), m0 = new RegExp(`^rgba\\(${rt},${rt},${rt},${Rn}\\)$`), w0 = new RegExp(`^hsl\\(${Rn},${rt},${rt}\\)$`), b0 = new RegExp(`^hsla\\(${Rn},${rt},${rt},${Rn}\\)$`), Ao = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
$i(Gn, Lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: No,
  // Deprecated! Use color.formatHex.
  formatHex: No,
  formatHex8: x0,
  formatHsl: M0,
  formatRgb: To,
  toString: To
});
function No() {
  return this.rgb().formatHex();
}
function x0() {
  return this.rgb().formatHex8();
}
function M0() {
  return Cs(this).formatHsl();
}
function To() {
  return this.rgb().formatRgb();
}
function Lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = g0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? So(n) : e === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ee(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ee(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = _0.exec(t)) ? new L(n[1], n[2], n[3], 1) : (n = y0.exec(t)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = v0.exec(t)) ? ee(n[1], n[2], n[3], n[4]) : (n = m0.exec(t)) ? ee(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = w0.exec(t)) ? ko(n[1], n[2] / 100, n[3] / 100, 1) : (n = b0.exec(t)) ? ko(n[1], n[2] / 100, n[3] / 100, n[4]) : Ao.hasOwnProperty(t) ? So(Ao[t]) : t === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function So(t) {
  return new L(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ee(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function $0(t) {
  return t instanceof Gn || (t = Lt(t)), t ? (t = t.rgb(), new L(t.r, t.g, t.b, t.opacity)) : new L();
}
function Ur(t, n, e, r) {
  return arguments.length === 1 ? $0(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
$i(L, Ur, zs(Gn, {
  brighter(t) {
    return t = t == null ? Se : Math.pow(Se, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? In : Math.pow(In, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new L(zt(this.r), zt(this.g), zt(this.b), Pe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Po,
  // Deprecated! Use color.formatHex.
  formatHex: Po,
  formatHex8: A0,
  formatRgb: Eo,
  toString: Eo
}));
function Po() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function A0() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Eo() {
  const t = Pe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${zt(this.r)}, ${zt(this.g)}, ${zt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Pe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function zt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Et(t) {
  return t = zt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ko(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
}
function Cs(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gn || (t = Lt(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new W(a, s, l, t.opacity);
}
function N0(t, n, e, r) {
  return arguments.length === 1 ? Cs(t) : new W(t, n, e, r ?? 1);
}
function W(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
$i(W, N0, zs(Gn, {
  brighter(t) {
    return t = t == null ? Se : Math.pow(Se, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? In : Math.pow(In, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new L(
      mr(t >= 240 ? t - 240 : t + 120, i, r),
      mr(t, i, r),
      mr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(Oo(this.h), re(this.s), re(this.l), Pe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Pe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Oo(this.h)}, ${re(this.s) * 100}%, ${re(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Oo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function re(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function mr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Ai = (t) => () => t;
function T0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function S0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function P0(t) {
  return (t = +t) == 1 ? Is : function(n, e) {
    return e - n ? S0(n, e, t) : Ai(isNaN(n) ? e : n);
  };
}
function Is(t, n) {
  var e = n - t;
  return e ? T0(t, e) : Ai(isNaN(t) ? n : t);
}
const Ee = function t(n) {
  var e = P0(n);
  function r(i, o) {
    var a = e((i = Ur(i)).r, (o = Ur(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Is(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function E0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function k0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function O0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Ni(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function z0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function K(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function C0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ni(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Gr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wr = new RegExp(Gr.source, "g");
function I0(t) {
  return function() {
    return t;
  };
}
function R0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Rs(t, n) {
  var e = Gr.lastIndex = wr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Gr.exec(t)) && (i = wr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: K(r, i) })), e = wr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? R0(l[0].x) : I0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function Ni(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ai(n) : (e === "number" ? K : e === "string" ? (r = Lt(n)) ? (n = r, Ee) : Rs : n instanceof Lt ? Ee : n instanceof Date ? z0 : k0(n) ? E0 : Array.isArray(n) ? O0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? C0 : K)(t, n);
}
function j0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var zo = 180 / Math.PI, js = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ls(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * zo,
    skewX: Math.atan(l) * zo,
    scaleX: a,
    scaleY: s
  };
}
var ie;
function L0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? js : Ls(n.a, n.b, n.c, n.d, n.e, n.f);
}
function F0(t) {
  return t == null || (ie || (ie = document.createElementNS("http://www.w3.org/2000/svg", "g")), ie.setAttribute("transform", t), !(t = ie.transform.baseVal.consolidate())) ? js : (t = t.matrix, Ls(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Fs(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: K(u, h) }, { i: g - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: K(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: K(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: K(u, h) }, { i: g - 2, x: K(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, g = f.length, w; ++d < g; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var D0 = Fs(L0, "px, ", "px)", "deg)"), q0 = Fs(F0, ", ", ")", ")"), un = 0, $n = 0, vn = 0, Ds = 1e3, ke, An, Oe = 0, Ft = 0, Ke = 0, jn = typeof performance == "object" && performance.now ? performance : Date, qs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ti() {
  return Ft || (qs(B0), Ft = jn.now() + Ke);
}
function B0() {
  Ft = 0;
}
function ze() {
  this._call = this._time = this._next = null;
}
ze.prototype = Bs.prototype = {
  constructor: ze,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ti() : +e) + (n == null ? 0 : +n), !this._next && An !== this && (An ? An._next = this : ke = this, An = this), this._call = t, this._time = e, Yr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yr());
  }
};
function Bs(t, n, e) {
  var r = new ze();
  return r.restart(t, n, e), r;
}
function H0() {
  Ti(), ++un;
  for (var t = ke, n; t; )
    (n = Ft - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --un;
}
function Co() {
  Ft = (Oe = jn.now()) + Ke, un = $n = 0;
  try {
    H0();
  } finally {
    un = 0, U0(), Ft = 0;
  }
}
function X0() {
  var t = jn.now(), n = t - Oe;
  n > Ds && (Ke -= n, Oe = t);
}
function U0() {
  for (var t, n = ke, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ke = e);
  An = t, Yr(r);
}
function Yr(t) {
  if (!un) {
    $n && ($n = clearTimeout($n));
    var n = t - Ft;
    n > 24 ? (t < 1 / 0 && ($n = setTimeout(Co, t - jn.now() - Ke)), vn && (vn = clearInterval(vn))) : (vn || (Oe = jn.now(), vn = setInterval(X0, Ds)), un = 1, qs(Co));
  }
}
function Io(t, n, e) {
  var r = new ze();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var G0 = bi("start", "end", "cancel", "interrupt"), Y0 = [], Hs = 0, Ro = 1, Vr = 2, _e = 3, jo = 4, Kr = 5, ye = 6;
function Ze(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  V0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: G0,
    tween: Y0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Hs
  });
}
function Si(t, n) {
  var e = tt(t, n);
  if (e.state > Hs) throw new Error("too late; already scheduled");
  return e;
}
function at(t, n) {
  var e = tt(t, n);
  if (e.state > _e) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function V0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Bs(o, 0, e.time);
  function o(u) {
    e.state = Ro, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (e.state !== Ro) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === _e) return Io(a);
        p.state === jo ? (p.state = ye, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ye, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Io(function() {
      e.state === _e && (e.state = jo, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Vr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Vr) {
      for (e.state = _e, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Kr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Kr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ye, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function K0(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Vr && r.state < Kr, r.state = ye, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Z0(t) {
  return this.each(function() {
    K0(this, t);
  });
}
function W0(t, n) {
  var e, r;
  return function() {
    var i = at(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function J0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = at(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Q0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? W0 : J0)(e, t, n));
}
function Pi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function Xs(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof Lt ? Ee : (e = Lt(n)) ? (n = e, Ee) : Rs)(t, n);
}
function tg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ng(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function eg(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function rg(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ig(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function og(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function ag(t, n) {
  var e = Ve(t), r = e === "transform" ? q0 : Xs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? og : ig)(e, r, Pi(this, "attr." + t, n)) : n == null ? (e.local ? ng : tg)(e) : (e.local ? rg : eg)(e, r, n));
}
function sg(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function ug(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function lg(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && ug(t, o)), e;
  }
  return i._value = n, i;
}
function cg(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && sg(t, o)), e;
  }
  return i._value = n, i;
}
function fg(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Ve(t);
  return this.tween(e, (r.local ? lg : cg)(r, n));
}
function hg(t, n) {
  return function() {
    Si(this, t).delay = +n.apply(this, arguments);
  };
}
function pg(t, n) {
  return n = +n, function() {
    Si(this, t).delay = n;
  };
}
function dg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? hg : pg)(n, t)) : tt(this.node(), n).delay;
}
function gg(t, n) {
  return function() {
    at(this, t).duration = +n.apply(this, arguments);
  };
}
function _g(t, n) {
  return n = +n, function() {
    at(this, t).duration = n;
  };
}
function yg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gg : _g)(n, t)) : tt(this.node(), n).duration;
}
function vg(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    at(this, t).ease = n;
  };
}
function mg(t) {
  var n = this._id;
  return arguments.length ? this.each(vg(n, t)) : tt(this.node(), n).ease;
}
function wg(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    at(this, t).ease = e;
  };
}
function bg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(wg(this._id, t));
}
function xg(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new pt(r, this._parents, this._name, this._id);
}
function Mg(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = n[s];
  return new pt(a, this._parents, this._name, this._id);
}
function $g(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ag(t, n, e) {
  var r, i, o = $g(n) ? Si : at;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Ng(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(Ag(e, t, n));
}
function Tg(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Sg() {
  return this.on("end.remove", Tg(this._id));
}
function Pg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ze(u[f], n, e, f, u, tt(c, e)));
  return new pt(o, this._parents, n, e);
}
function Eg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xs(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = tt(c, e), g = 0, w = f.length; g < w; ++g)
          (p = f[g]) && Ze(p, n, e, g, f, d);
        o.push(f), a.push(c);
      }
  return new pt(o, a, n, e);
}
var kg = Un.prototype.constructor;
function Og() {
  return new kg(this._groups, this._parents);
}
function zg(t, n) {
  var e, r, i;
  return function() {
    var o = sn(this, t), a = (this.style.removeProperty(t), sn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Us(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Cg(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = sn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Ig(t, n, e) {
  var r, i, o;
  return function() {
    var a = sn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), sn(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function Rg(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = at(this, t), u = l.on, c = l.value[o] == null ? s || (s = Us(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(a, i = c), l.on = r;
  };
}
function jg(t, n, e) {
  var r = (t += "") == "transform" ? D0 : Xs;
  return n == null ? this.styleTween(t, zg(t, r)).on("end.style." + t, Us(t)) : typeof n == "function" ? this.styleTween(t, Ig(t, r, Pi(this, "style." + t, n))).each(Rg(this._id, t)) : this.styleTween(t, Cg(t, r, n), e).on("end.style." + t, null);
}
function Lg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Fg(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Lg(t, a, e)), r;
  }
  return o._value = n, o;
}
function Dg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Fg(t, n, e ?? ""));
}
function qg(t) {
  return function() {
    this.textContent = t;
  };
}
function Bg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Hg(t) {
  return this.tween("text", typeof t == "function" ? Bg(Pi(this, "text", t)) : qg(t == null ? "" : t + ""));
}
function Xg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ug(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Xg(i)), n;
  }
  return r._value = t, r;
}
function Gg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Ug(t));
}
function Yg() {
  for (var t = this._name, n = this._id, e = Gs(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = tt(l, n);
        Ze(l, t, e, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new pt(r, this._parents, t, e);
}
function Vg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = at(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var Kg = 0;
function pt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Gs() {
  return ++Kg;
}
var ut = Un.prototype;
pt.prototype = {
  constructor: pt,
  select: Pg,
  selectAll: Eg,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: xg,
  merge: Mg,
  selection: Og,
  transition: Yg,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: Ng,
  attr: ag,
  attrTween: fg,
  style: jg,
  styleTween: Dg,
  text: Hg,
  textTween: Gg,
  remove: Sg,
  tween: Q0,
  delay: dg,
  duration: yg,
  ease: mg,
  easeVarying: bg,
  end: Vg,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function Zg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Zg
};
function Jg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Qg(t) {
  var n, e;
  t instanceof pt ? (n = t._id, t = t._name) : (n = Gs(), (e = Wg).time = Ti(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ze(l, t, n, u, a, e || Jg(l, n));
  return new pt(r, this._parents, t, n);
}
Un.prototype.interrupt = Z0;
Un.prototype.transition = Qg;
const Zr = Math.PI, Wr = 2 * Zr, Tt = 1e-6, t_ = Wr - Tt;
function Ys(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function n_(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ys;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Vs {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ys : n_(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, c = a - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Tt) if (!(Math.abs(h * l - u * c) > Tt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, g = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(g), x = Math.sqrt(f), M = o * Math.tan((Zr - Math.acos((g + f - w) / (2 * _ * x))) / 2), y = M / x, m = M / _;
      Math.abs(y - 1) > Tt && this._append`L${n + y * c},${e + y * h}`, this._append`A${o},${o},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Tt || Math.abs(this._y1 - c) > Tt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Wr + Wr), f > t_ ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Tt && this._append`A${r},${r},0,${+(f >= Zr)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nt() {
  return new Vs();
}
nt.prototype = Vs.prototype;
function e_(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ce(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function ln(t) {
  return t = Ce(Math.abs(t)), t ? t[1] : NaN;
}
function r_(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function i_(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var o_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ie(t) {
  if (!(n = o_.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ei({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ie.prototype = Ei.prototype;
function Ei(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ei.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function a_(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Ks;
function s_(t, n) {
  var e = Ce(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Ks = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Ce(t, Math.max(0, n + o - 1))[0];
}
function Lo(t, n) {
  var e = Ce(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Fo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: e_,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Lo(t * 100, n),
  r: Lo,
  s: s_,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Do(t) {
  return t;
}
var qo = Array.prototype.map, Bo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function u_(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Do : r_(qo.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Do : i_(qo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ie(h);
    var f = h.fill, p = h.align, d = h.sign, g = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : Fo[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var E = g === "$" ? e : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = g === "$" ? r : /[%p]/.test(m) ? a : "", O = Fo[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var z = E, N = k, C, At, F;
      if (m === "c")
        N = O(v) + N, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), y && (v = a_(v)), X && +v == 0 && d !== "+" && (X = !1), z = (X ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, N = (m === "s" ? Bo[8 + Ks / 3] : "") + N + (X && d === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (F = v.charCodeAt(C), 48 > F || F > 57) {
              N = (F === 46 ? i + v.slice(C + 1) : v.slice(C)) + N, v = v.slice(0, C);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var G = z.length + v.length + N.length, P = G < _ ? new Array(_ - G + 1).join(f) : "";
      switch (x && w && (v = n(P + v, P.length ? _ - N.length : 1 / 0), P = ""), p) {
        case "<":
          v = z + v + N + P;
          break;
        case "=":
          v = z + P + v + N;
          break;
        case "^":
          v = P.slice(0, G = P.length >> 1) + z + v + N + P.slice(G);
          break;
        default:
          v = P + z + v + N;
          break;
      }
      return o(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = Ie(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ln(f) / 3))) * 3, g = Math.pow(10, -d), w = Bo[8 + d / 3];
    return function(_) {
      return p(g * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var oe, We, Zs;
l_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function l_(t) {
  return oe = u_(t), We = oe.format, Zs = oe.formatPrefix, oe;
}
function c_(t) {
  return Math.max(0, -ln(Math.abs(t)));
}
function f_(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ln(n) / 3))) * 3 - ln(Math.abs(t)));
}
function h_(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, ln(n) - ln(t)) + 1;
}
function p_(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function d_(t) {
  return function() {
    return t;
  };
}
function g_(t) {
  return +t;
}
var Ho = [0, 1];
function Zt(t) {
  return t;
}
function Jr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : d_(isNaN(n) ? NaN : 0.5);
}
function __(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function y_(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Jr(i, r), o = e(a, o)) : (r = Jr(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function v_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Jr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = vp(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function m_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function w_() {
  var t = Ho, n = Ho, e = Ni, r, i, o, a = Zt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Zt && (a = __(t[0], t[f - 1])), s = f > 2 ? v_ : y_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(n, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, g_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = j0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Zt, c()) : a !== Zt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function b_() {
  return w_()(Zt, Zt);
}
function x_(t, n, e, r) {
  var i = Mp(t, n, e), o;
  switch (r = Ie(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = f_(i, a)) && (r.precision = o), Zs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = h_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = c_(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return We(r);
}
function M_(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return xp(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return x_(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = qr(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function cn() {
  var t = b_();
  return t.copy = function() {
    return m_(t, cn());
  }, p_.apply(t, arguments), M_(t);
}
function Nn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Nn.prototype = {
  constructor: Nn,
  scale: function(t) {
    return t === 1 ? this : new Nn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Nn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Nn.prototype;
var Ws = typeof global == "object" && global && global.Object === Object && global, $_ = typeof self == "object" && self && self.Object === Object && self, gt = Ws || $_ || Function("return this")(), it = gt.Symbol, Js = Object.prototype, A_ = Js.hasOwnProperty, N_ = Js.toString, mn = it ? it.toStringTag : void 0;
function T_(t) {
  var n = A_.call(t, mn), e = t[mn];
  try {
    t[mn] = void 0;
    var r = !0;
  } catch {
  }
  var i = N_.call(t);
  return r && (n ? t[mn] = e : delete t[mn]), i;
}
var S_ = Object.prototype, P_ = S_.toString;
function E_(t) {
  return P_.call(t);
}
var k_ = "[object Null]", O_ = "[object Undefined]", Xo = it ? it.toStringTag : void 0;
function dn(t) {
  return t == null ? t === void 0 ? O_ : k_ : Xo && Xo in Object(t) ? T_(t) : E_(t);
}
function fn(t) {
  return t != null && typeof t == "object";
}
var z_ = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || fn(t) && dn(t) == z_;
}
function Qs(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var J = Array.isArray, Uo = it ? it.prototype : void 0, Go = Uo ? Uo.toString : void 0;
function tu(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Qs(t, tu) + "";
  if (Je(t))
    return Go ? Go.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var C_ = /\s/;
function I_(t) {
  for (var n = t.length; n-- && C_.test(t.charAt(n)); )
    ;
  return n;
}
var R_ = /^\s+/;
function j_(t) {
  return t && t.slice(0, I_(t) + 1).replace(R_, "");
}
function hn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Yo = NaN, L_ = /^[-+]0x[0-9a-f]+$/i, F_ = /^0b[01]+$/i, D_ = /^0o[0-7]+$/i, q_ = parseInt;
function B_(t) {
  if (typeof t == "number")
    return t;
  if (Je(t))
    return Yo;
  if (hn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = hn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = j_(t);
  var e = F_.test(t);
  return e || D_.test(t) ? q_(t.slice(2), e ? 2 : 8) : L_.test(t) ? Yo : +t;
}
var H_ = 1 / 0, X_ = 17976931348623157e292;
function br(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = B_(t), t === H_ || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * X_;
  }
  return t === t ? t : 0;
}
function U_(t) {
  return t;
}
var G_ = "[object AsyncFunction]", Y_ = "[object Function]", V_ = "[object GeneratorFunction]", K_ = "[object Proxy]";
function nu(t) {
  if (!hn(t))
    return !1;
  var n = dn(t);
  return n == Y_ || n == V_ || n == G_ || n == K_;
}
var xr = gt["__core-js_shared__"], Vo = function() {
  var t = /[^.]+$/.exec(xr && xr.keys && xr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Z_(t) {
  return !!Vo && Vo in t;
}
var W_ = Function.prototype, J_ = W_.toString;
function Ht(t) {
  if (t != null) {
    try {
      return J_.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Q_ = /[\\^$.*+?()[\]{}|]/g, ty = /^\[object .+?Constructor\]$/, ny = Function.prototype, ey = Object.prototype, ry = ny.toString, iy = ey.hasOwnProperty, oy = RegExp(
  "^" + ry.call(iy).replace(Q_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ay(t) {
  if (!hn(t) || Z_(t))
    return !1;
  var n = nu(t) ? oy : ty;
  return n.test(Ht(t));
}
function sy(t, n) {
  return t == null ? void 0 : t[n];
}
function gn(t, n) {
  var e = sy(t, n);
  return ay(e) ? e : void 0;
}
var Qr = gn(gt, "WeakMap"), uy = 9007199254740991, ly = /^(?:0|[1-9]\d*)$/;
function ki(t, n) {
  var e = typeof t;
  return n = n ?? uy, !!n && (e == "number" || e != "symbol" && ly.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Oi(t, n) {
  return t === n || t !== t && n !== n;
}
var cy = 9007199254740991;
function zi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= cy;
}
function Qe(t) {
  return t != null && zi(t.length) && !nu(t);
}
function fy(t, n, e) {
  if (!hn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Qe(e) && ki(n, e.length) : r == "string" && n in e) ? Oi(e[n], t) : !1;
}
var hy = Object.prototype;
function py(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || hy;
  return t === e;
}
function dy(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var gy = "[object Arguments]";
function Ko(t) {
  return fn(t) && dn(t) == gy;
}
var eu = Object.prototype, _y = eu.hasOwnProperty, yy = eu.propertyIsEnumerable, Ci = Ko(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ko : function(t) {
  return fn(t) && _y.call(t, "callee") && !yy.call(t, "callee");
};
function vy() {
  return !1;
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, Zo = ru && typeof module == "object" && module && !module.nodeType && module, my = Zo && Zo.exports === ru, Wo = my ? gt.Buffer : void 0, wy = Wo ? Wo.isBuffer : void 0, ti = wy || vy, by = "[object Arguments]", xy = "[object Array]", My = "[object Boolean]", $y = "[object Date]", Ay = "[object Error]", Ny = "[object Function]", Ty = "[object Map]", Sy = "[object Number]", Py = "[object Object]", Ey = "[object RegExp]", ky = "[object Set]", Oy = "[object String]", zy = "[object WeakMap]", Cy = "[object ArrayBuffer]", Iy = "[object DataView]", Ry = "[object Float32Array]", jy = "[object Float64Array]", Ly = "[object Int8Array]", Fy = "[object Int16Array]", Dy = "[object Int32Array]", qy = "[object Uint8Array]", By = "[object Uint8ClampedArray]", Hy = "[object Uint16Array]", Xy = "[object Uint32Array]", T = {};
T[Ry] = T[jy] = T[Ly] = T[Fy] = T[Dy] = T[qy] = T[By] = T[Hy] = T[Xy] = !0;
T[by] = T[xy] = T[Cy] = T[My] = T[Iy] = T[$y] = T[Ay] = T[Ny] = T[Ty] = T[Sy] = T[Py] = T[Ey] = T[ky] = T[Oy] = T[zy] = !1;
function Uy(t) {
  return fn(t) && zi(t.length) && !!T[dn(t)];
}
function Gy(t) {
  return function(n) {
    return t(n);
  };
}
var iu = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = iu && typeof module == "object" && module && !module.nodeType && module, Yy = Tn && Tn.exports === iu, Mr = Yy && Ws.process, Jo = function() {
  try {
    var t = Tn && Tn.require && Tn.require("util").types;
    return t || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
}(), Qo = Jo && Jo.isTypedArray, ou = Qo ? Gy(Qo) : Uy, Vy = Object.prototype, Ky = Vy.hasOwnProperty;
function Zy(t, n) {
  var e = J(t), r = !e && Ci(t), i = !e && !r && ti(t), o = !e && !r && !i && ou(t), a = e || r || i || o, s = a ? dy(t.length, String) : [], l = s.length;
  for (var u in t)
    Ky.call(t, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ki(u, l))) && s.push(u);
  return s;
}
function Wy(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Jy = Wy(Object.keys, Object), Qy = Object.prototype, tv = Qy.hasOwnProperty;
function nv(t) {
  if (!py(t))
    return Jy(t);
  var n = [];
  for (var e in Object(t))
    tv.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ii(t) {
  return Qe(t) ? Zy(t) : nv(t);
}
var ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rv = /^\w*$/;
function Ri(t, n) {
  if (J(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Je(t) ? !0 : rv.test(t) || !ev.test(t) || n != null && t in Object(n);
}
var Ln = gn(Object, "create");
function iv() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function ov(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var av = "__lodash_hash_undefined__", sv = Object.prototype, uv = sv.hasOwnProperty;
function lv(t) {
  var n = this.__data__;
  if (Ln) {
    var e = n[t];
    return e === av ? void 0 : e;
  }
  return uv.call(n, t) ? n[t] : void 0;
}
var cv = Object.prototype, fv = cv.hasOwnProperty;
function hv(t) {
  var n = this.__data__;
  return Ln ? n[t] !== void 0 : fv.call(n, t);
}
var pv = "__lodash_hash_undefined__";
function dv(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ln && n === void 0 ? pv : n, this;
}
function Dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Dt.prototype.clear = iv;
Dt.prototype.delete = ov;
Dt.prototype.get = lv;
Dt.prototype.has = hv;
Dt.prototype.set = dv;
function gv() {
  this.__data__ = [], this.size = 0;
}
function tr(t, n) {
  for (var e = t.length; e--; )
    if (Oi(t[e][0], n))
      return e;
  return -1;
}
var _v = Array.prototype, yv = _v.splice;
function vv(t) {
  var n = this.__data__, e = tr(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : yv.call(n, e, 1), --this.size, !0;
}
function mv(t) {
  var n = this.__data__, e = tr(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function wv(t) {
  return tr(this.__data__, t) > -1;
}
function bv(t, n) {
  var e = this.__data__, r = tr(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = gv;
_t.prototype.delete = vv;
_t.prototype.get = mv;
_t.prototype.has = wv;
_t.prototype.set = bv;
var Fn = gn(gt, "Map");
function xv() {
  this.size = 0, this.__data__ = {
    hash: new Dt(),
    map: new (Fn || _t)(),
    string: new Dt()
  };
}
function Mv(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function nr(t, n) {
  var e = t.__data__;
  return Mv(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function $v(t) {
  var n = nr(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Av(t) {
  return nr(this, t).get(t);
}
function Nv(t) {
  return nr(this, t).has(t);
}
function Tv(t, n) {
  var e = nr(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function yt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = xv;
yt.prototype.delete = $v;
yt.prototype.get = Av;
yt.prototype.has = Nv;
yt.prototype.set = Tv;
var Sv = "Expected a function";
function ji(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Sv);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (ji.Cache || yt)(), e;
}
ji.Cache = yt;
var Pv = 500;
function Ev(t) {
  var n = ji(t, function(r) {
    return e.size === Pv && e.clear(), r;
  }), e = n.cache;
  return n;
}
var kv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ov = /\\(\\)?/g, zv = Ev(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(kv, function(e, r, i, o) {
    n.push(i ? o.replace(Ov, "$1") : r || e);
  }), n;
});
function Cv(t) {
  return t == null ? "" : tu(t);
}
function au(t, n) {
  return J(t) ? t : Ri(t, n) ? [t] : zv(Cv(t));
}
function er(t) {
  if (typeof t == "string" || Je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function su(t, n) {
  n = au(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[er(n[e++])];
  return e && e == r ? t : void 0;
}
function Iv(t, n, e) {
  var r = t == null ? void 0 : su(t, n);
  return r === void 0 ? e : r;
}
function uu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var ta = it ? it.isConcatSpreadable : void 0;
function Rv(t) {
  return J(t) || Ci(t) || !!(ta && t && t[ta]);
}
function jv(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Rv), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? uu(i, s) : i[i.length] = s;
  }
  return i;
}
function Lv(t) {
  var n = t == null ? 0 : t.length;
  return n ? jv(t) : [];
}
function Fv() {
  this.__data__ = new _t(), this.size = 0;
}
function Dv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function qv(t) {
  return this.__data__.get(t);
}
function Bv(t) {
  return this.__data__.has(t);
}
var Hv = 200;
function Xv(t, n) {
  var e = this.__data__;
  if (e instanceof _t) {
    var r = e.__data__;
    if (!Fn || r.length < Hv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new yt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ct(t) {
  var n = this.__data__ = new _t(t);
  this.size = n.size;
}
ct.prototype.clear = Fv;
ct.prototype.delete = Dv;
ct.prototype.get = qv;
ct.prototype.has = Bv;
ct.prototype.set = Xv;
function Uv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Gv() {
  return [];
}
var Yv = Object.prototype, Vv = Yv.propertyIsEnumerable, na = Object.getOwnPropertySymbols, Kv = na ? function(t) {
  return t == null ? [] : (t = Object(t), Uv(na(t), function(n) {
    return Vv.call(t, n);
  }));
} : Gv;
function Zv(t, n, e) {
  var r = n(t);
  return J(t) ? r : uu(r, e(t));
}
function ea(t) {
  return Zv(t, Ii, Kv);
}
var ni = gn(gt, "DataView"), ei = gn(gt, "Promise"), ri = gn(gt, "Set"), ra = "[object Map]", Wv = "[object Object]", ia = "[object Promise]", oa = "[object Set]", aa = "[object WeakMap]", sa = "[object DataView]", Jv = Ht(ni), Qv = Ht(Fn), tm = Ht(ei), nm = Ht(ri), em = Ht(Qr), bt = dn;
(ni && bt(new ni(new ArrayBuffer(1))) != sa || Fn && bt(new Fn()) != ra || ei && bt(ei.resolve()) != ia || ri && bt(new ri()) != oa || Qr && bt(new Qr()) != aa) && (bt = function(t) {
  var n = dn(t), e = n == Wv ? t.constructor : void 0, r = e ? Ht(e) : "";
  if (r)
    switch (r) {
      case Jv:
        return sa;
      case Qv:
        return ra;
      case tm:
        return ia;
      case nm:
        return oa;
      case em:
        return aa;
    }
  return n;
});
var ua = gt.Uint8Array, rm = "__lodash_hash_undefined__";
function im(t) {
  return this.__data__.set(t, rm), this;
}
function om(t) {
  return this.__data__.has(t);
}
function Re(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new yt(); ++n < e; )
    this.add(t[n]);
}
Re.prototype.add = Re.prototype.push = im;
Re.prototype.has = om;
function am(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function sm(t, n) {
  return t.has(n);
}
var um = 1, lm = 2;
function lu(t, n, e, r, i, o) {
  var a = e & um, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & lm ? new Re() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], g = n[h];
    if (r)
      var w = a ? r(g, d, h, n, t, o) : r(d, g, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!am(n, function(_, x) {
        if (!sm(p, x) && (d === _ || i(d, _, e, r, o)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function cm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function fm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var hm = 1, pm = 2, dm = "[object Boolean]", gm = "[object Date]", _m = "[object Error]", ym = "[object Map]", vm = "[object Number]", mm = "[object RegExp]", wm = "[object Set]", bm = "[object String]", xm = "[object Symbol]", Mm = "[object ArrayBuffer]", $m = "[object DataView]", la = it ? it.prototype : void 0, $r = la ? la.valueOf : void 0;
function Am(t, n, e, r, i, o, a) {
  switch (e) {
    case $m:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Mm:
      return !(t.byteLength != n.byteLength || !o(new ua(t), new ua(n)));
    case dm:
    case gm:
    case vm:
      return Oi(+t, +n);
    case _m:
      return t.name == n.name && t.message == n.message;
    case mm:
    case bm:
      return t == n + "";
    case ym:
      var s = cm;
    case wm:
      var l = r & hm;
      if (s || (s = fm), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= pm, a.set(t, n);
      var c = lu(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case xm:
      if ($r)
        return $r.call(t) == $r.call(n);
  }
  return !1;
}
var Nm = 1, Tm = Object.prototype, Sm = Tm.hasOwnProperty;
function Pm(t, n, e, r, i, o) {
  var a = e & Nm, s = ea(t), l = s.length, u = ea(n), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in n : Sm.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = a ? r(x, _, f, n, t, o) : r(_, x, f, t, n, o);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, o) : M)) {
      g = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var Em = 1, ca = "[object Arguments]", fa = "[object Array]", ae = "[object Object]", km = Object.prototype, ha = km.hasOwnProperty;
function Om(t, n, e, r, i, o) {
  var a = J(t), s = J(n), l = a ? fa : bt(t), u = s ? fa : bt(n);
  l = l == ca ? ae : l, u = u == ca ? ae : u;
  var c = l == ae, h = u == ae, f = l == u;
  if (f && ti(t)) {
    if (!ti(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new ct()), a || ou(t) ? lu(t, n, e, r, i, o) : Am(t, n, l, e, r, i, o);
  if (!(e & Em)) {
    var p = c && ha.call(t, "__wrapped__"), d = h && ha.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new ct()), i(g, w, e, r, o);
    }
  }
  return f ? (o || (o = new ct()), Pm(t, n, e, r, i, o)) : !1;
}
function Li(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !fn(t) && !fn(n) ? t !== t && n !== n : Om(t, n, e, r, Li, i);
}
var zm = 1, Cm = 2;
function Im(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ct(), h;
      if (!(h === void 0 ? Li(u, l, zm | Cm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function cu(t) {
  return t === t && !hn(t);
}
function Rm(t) {
  for (var n = Ii(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, cu(i)];
  }
  return n;
}
function fu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function jm(t) {
  var n = Rm(t);
  return n.length == 1 && n[0][2] ? fu(n[0][0], n[0][1]) : function(e) {
    return e === t || Im(e, t, n);
  };
}
function Lm(t, n) {
  return t != null && n in Object(t);
}
function Fm(t, n, e) {
  n = au(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = er(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && zi(i) && ki(a, i) && (J(t) || Ci(t)));
}
function Dm(t, n) {
  return t != null && Fm(t, n, Lm);
}
var qm = 1, Bm = 2;
function Hm(t, n) {
  return Ri(t) && cu(n) ? fu(er(t), n) : function(e) {
    var r = Iv(e, t);
    return r === void 0 && r === n ? Dm(e, t) : Li(n, r, qm | Bm);
  };
}
function Xm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Um(t) {
  return function(n) {
    return su(n, t);
  };
}
function Gm(t) {
  return Ri(t) ? Xm(er(t)) : Um(t);
}
function Ym(t) {
  return typeof t == "function" ? t : t == null ? U_ : typeof t == "object" ? J(t) ? Hm(t[0], t[1]) : jm(t) : Gm(t);
}
function Vm(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var Km = Vm();
function Zm(t, n) {
  return t && Km(t, n, Ii);
}
function Wm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Qe(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Jm = Wm(Zm);
function Qm(t, n) {
  var e = -1, r = Qe(t) ? Array(t.length) : [];
  return Jm(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function pa(t, n) {
  var e = J(t) ? Qs : Qm;
  return e(t, Ym(n));
}
var t1 = Math.ceil, n1 = Math.max;
function e1(t, n, e, r) {
  for (var i = -1, o = n1(t1((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function r1(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && fy(n, e, r) && (e = r = void 0), n = br(n), e === void 0 ? (e = n, n = 0) : e = br(e), r = r === void 0 ? n < e ? 1 : -1 : br(r), e1(n, e, r);
  };
}
var i1 = r1();
const o1 = (t, n, e = 12, r = 12) => {
  const i = cn().domain([0, e]).range([0, t]), o = cn().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return i1((e + 1) * (r + 1)).map(function(a) {
        return { m: a % (e + 1), n: Math.floor(a / (e + 1)), x: i(a % (e + 1)), y: o(Math.floor(a / (e + 1))) };
      });
    },
    position: function(a, s) {
      typeof a == "number" && (a = [a]), typeof s == "number" && (s = [s]);
      const l = Lv(pa(s, function(u) {
        return pa(
          a,
          function(c) {
            return { x: i(c), y: o(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, a1 = "_widget_9wct0_49", s1 = "_label_9wct0_69", u1 = "_lit_9wct0_74", l1 = "_button_9wct0_78", c1 = "_symbol_9wct0_78", f1 = "_radio_9wct0_79", h1 = "_radiobutton_9wct0_79", p1 = "_selected_9wct0_85", d1 = "_toggle_9wct0_86", g1 = "_slider_9wct0_95", _1 = "_track_9wct0_95", y1 = "_track_overlay_9wct0_100", v1 = "_handle_9wct0_108", b = {
  widget: a1,
  label: s1,
  lit: u1,
  button: l1,
  symbol: c1,
  radio: f1,
  radiobutton: h1,
  selected: p1,
  toggle: d1,
  slider: g1,
  track: _1,
  track_overlay: y1,
  handle: v1
}, Fi = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Di = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, m1 = (t = 1) => {
  const n = nt();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, w1 = (t = 1) => {
  const n = nt(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, b1 = (t = 1) => {
  const n = nt();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, x1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = nt();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, M1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, $1 = (t = 1) => {
  const n = nt(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, A1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, N1 = (t = 1) => {
  var n = nt(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, T1 = (t = 1) => {
  const n = nt(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ii = (t) => {
  switch (t) {
    case "play":
      return m1;
    case "forward":
      return w1;
    case "back":
      return b1;
    case "pause":
      return x1;
    case "reload":
      return M1;
    case "capture":
      return $1;
    case "rewind":
      return A1;
    case "stop":
      return N1;
    case "push":
      return T1;
  }
}, qi = () => {
  const t = "button";
  var n = Fi(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, u(), I(this.parentNode).select("." + b.symbol).attr("d", ii(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + b.symbol).attr("d", ii(c[h])(r * e));
    }
  };
}, S1 = () => {
  const t = "slider", n = We(".3f");
  var e = Fi(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, c = function(_) {
  }, h = function(_) {
  }, f = [0, 1], p = 0, d = null, g = cn().domain(f).range([0, r]).clamp(!0);
  const w = function(_, x, M = f) {
    const y = _.select("#slider_" + e);
    g.domain(M), p = x, y.selectAll("." + b.handle).transition().attr("cx", g(x)), a && y.select("." + b.label).text(d + " = " + n(p)), c(), h();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    range: function(_) {
      return typeof _ > "u" ? f : (f = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: w,
    click: w
  };
}, P1 = () => {
  const t = "toggle";
  var n = Fi(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = I(this.parentNode);
      u.select("." + b.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(b.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + b.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(b.selected, l), s();
    }
  };
}, E1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = I(o).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(b.lit, !0), I(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(b.lit, !1), I(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), a.append("path").attr("d", ii(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = Di(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, hu = (t, n) => {
  const e = nt();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, k1 = (t, n) => {
  const e = We(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = I(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", hu(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const g = Hr(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    d0().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -te([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + 7 : -te([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, O1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = I(a).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", hu(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Di(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, z1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = $p(a), l = cn().domain([0, a - 1]).range([0, t.size()]), u = cn().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = I(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + u(g) + ")" : "translate(" + l(g) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), f.attr("class", b.background).on("mouseover", function() {
    I(this).classed(b.lit, !0), I(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(b.lit, !1), I(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), p.attr("class", b.symbol), p.filter((g) => g == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const d = Di(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(g, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, Ar = (t, n) => {
  switch (t.type) {
    case "button":
      return E1(t);
    case "slider":
      return k1(t);
    case "radio":
      return z1(t);
    case "toggle":
      return O1(t);
  }
}, C1 = "_attract_scope_190m5_2", I1 = "_orient_scope_190m5_8", R1 = "_repell_scope_190m5_14", j1 = "_speed_190m5_20", L1 = "_drop_190m5_26", F1 = "_agent_190m5_32", j = {
  attract_scope: C1,
  orient_scope: I1,
  repell_scope: R1,
  speed: j1,
  drop: L1,
  agent: F1
}, D1 = (t, n) => {
  const e = o1(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Gc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", j.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", o).attr("class", "d3-widgets " + j.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && s.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && a.style("border", n.display_border), n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: s, grid: e };
};
var pu = typeof global == "object" && global && global.Object === Object && global, q1 = typeof self == "object" && self && self.Object === Object && self, vt = pu || q1 || Function("return this")(), $t = vt.Symbol, du = Object.prototype, B1 = du.hasOwnProperty, H1 = du.toString, wn = $t ? $t.toStringTag : void 0;
function X1(t) {
  var n = B1.call(t, wn), e = t[wn];
  try {
    t[wn] = void 0;
    var r = !0;
  } catch {
  }
  var i = H1.call(t);
  return r && (n ? t[wn] = e : delete t[wn]), i;
}
var U1 = Object.prototype, G1 = U1.toString;
function Y1(t) {
  return G1.call(t);
}
var V1 = "[object Null]", K1 = "[object Undefined]", da = $t ? $t.toStringTag : void 0;
function Xt(t) {
  return t == null ? t === void 0 ? K1 : V1 : da && da in Object(t) ? X1(t) : Y1(t);
}
function qt(t) {
  return t != null && typeof t == "object";
}
var Z1 = "[object Symbol]";
function rr(t) {
  return typeof t == "symbol" || qt(t) && Xt(t) == Z1;
}
function ir(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var U = Array.isArray, ga = $t ? $t.prototype : void 0, _a = ga ? ga.toString : void 0;
function gu(t) {
  if (typeof t == "string")
    return t;
  if (U(t))
    return ir(t, gu) + "";
  if (rr(t))
    return _a ? _a.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var W1 = /\s/;
function J1(t) {
  for (var n = t.length; n-- && W1.test(t.charAt(n)); )
    ;
  return n;
}
var Q1 = /^\s+/;
function tw(t) {
  return t && t.slice(0, J1(t) + 1).replace(Q1, "");
}
function dt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ya = NaN, nw = /^[-+]0x[0-9a-f]+$/i, ew = /^0b[01]+$/i, rw = /^0o[0-7]+$/i, iw = parseInt;
function ow(t) {
  if (typeof t == "number")
    return t;
  if (rr(t))
    return ya;
  if (dt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = dt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = tw(t);
  var e = ew.test(t);
  return e || rw.test(t) ? iw(t.slice(2), e ? 2 : 8) : nw.test(t) ? ya : +t;
}
var aw = 1 / 0, sw = 17976931348623157e292;
function Nr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = ow(t), t === aw || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * sw;
  }
  return t === t ? t : 0;
}
function _u(t) {
  return t;
}
var uw = "[object AsyncFunction]", lw = "[object Function]", cw = "[object GeneratorFunction]", fw = "[object Proxy]";
function yu(t) {
  if (!dt(t))
    return !1;
  var n = Xt(t);
  return n == lw || n == cw || n == uw || n == fw;
}
var Tr = vt["__core-js_shared__"], va = function() {
  var t = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function hw(t) {
  return !!va && va in t;
}
var pw = Function.prototype, dw = pw.toString;
function Ut(t) {
  if (t != null) {
    try {
      return dw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var gw = /[\\^$.*+?()[\]{}|]/g, _w = /^\[object .+?Constructor\]$/, yw = Function.prototype, vw = Object.prototype, mw = yw.toString, ww = vw.hasOwnProperty, bw = RegExp(
  "^" + mw.call(ww).replace(gw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xw(t) {
  if (!dt(t) || hw(t))
    return !1;
  var n = yu(t) ? bw : _w;
  return n.test(Ut(t));
}
function Mw(t, n) {
  return t == null ? void 0 : t[n];
}
function Gt(t, n) {
  var e = Mw(t, n);
  return xw(e) ? e : void 0;
}
var oi = Gt(vt, "WeakMap"), ma = function() {
  try {
    var t = Gt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function $w(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Aw = 9007199254740991, Nw = /^(?:0|[1-9]\d*)$/;
function or(t, n) {
  var e = typeof t;
  return n = n ?? Aw, !!n && (e == "number" || e != "symbol" && Nw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Tw(t, n, e) {
  n == "__proto__" && ma ? ma(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function ar(t, n) {
  return t === n || t !== t && n !== n;
}
var Sw = Object.prototype, Pw = Sw.hasOwnProperty;
function Ew(t, n, e) {
  var r = t[n];
  (!(Pw.call(t, n) && ar(r, e)) || e === void 0 && !(n in t)) && Tw(t, n, e);
}
var kw = 9007199254740991;
function Bi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= kw;
}
function Yn(t) {
  return t != null && Bi(t.length) && !yu(t);
}
function Ow(t, n, e) {
  if (!dt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Yn(e) && or(n, e.length) : r == "string" && n in e) ? ar(e[n], t) : !1;
}
var zw = Object.prototype;
function vu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || zw;
  return t === e;
}
function Cw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Iw = "[object Arguments]";
function wa(t) {
  return qt(t) && Xt(t) == Iw;
}
var mu = Object.prototype, Rw = mu.hasOwnProperty, jw = mu.propertyIsEnumerable, wu = wa(/* @__PURE__ */ function() {
  return arguments;
}()) ? wa : function(t) {
  return qt(t) && Rw.call(t, "callee") && !jw.call(t, "callee");
};
function Lw() {
  return !1;
}
var bu = typeof exports == "object" && exports && !exports.nodeType && exports, ba = bu && typeof module == "object" && module && !module.nodeType && module, Fw = ba && ba.exports === bu, xa = Fw ? vt.Buffer : void 0, Dw = xa ? xa.isBuffer : void 0, ai = Dw || Lw, qw = "[object Arguments]", Bw = "[object Array]", Hw = "[object Boolean]", Xw = "[object Date]", Uw = "[object Error]", Gw = "[object Function]", Yw = "[object Map]", Vw = "[object Number]", Kw = "[object Object]", Zw = "[object RegExp]", Ww = "[object Set]", Jw = "[object String]", Qw = "[object WeakMap]", tb = "[object ArrayBuffer]", nb = "[object DataView]", eb = "[object Float32Array]", rb = "[object Float64Array]", ib = "[object Int8Array]", ob = "[object Int16Array]", ab = "[object Int32Array]", sb = "[object Uint8Array]", ub = "[object Uint8ClampedArray]", lb = "[object Uint16Array]", cb = "[object Uint32Array]", S = {};
S[eb] = S[rb] = S[ib] = S[ob] = S[ab] = S[sb] = S[ub] = S[lb] = S[cb] = !0;
S[qw] = S[Bw] = S[tb] = S[Hw] = S[nb] = S[Xw] = S[Uw] = S[Gw] = S[Yw] = S[Vw] = S[Kw] = S[Zw] = S[Ww] = S[Jw] = S[Qw] = !1;
function fb(t) {
  return qt(t) && Bi(t.length) && !!S[Xt(t)];
}
function hb(t) {
  return function(n) {
    return t(n);
  };
}
var xu = typeof exports == "object" && exports && !exports.nodeType && exports, Sn = xu && typeof module == "object" && module && !module.nodeType && module, pb = Sn && Sn.exports === xu, Sr = pb && pu.process, Ma = function() {
  try {
    var t = Sn && Sn.require && Sn.require("util").types;
    return t || Sr && Sr.binding && Sr.binding("util");
  } catch {
  }
}(), $a = Ma && Ma.isTypedArray, Mu = $a ? hb($a) : fb, db = Object.prototype, gb = db.hasOwnProperty;
function $u(t, n) {
  var e = U(t), r = !e && wu(t), i = !e && !r && ai(t), o = !e && !r && !i && Mu(t), a = e || r || i || o, s = a ? Cw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || gb.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    or(u, l))) && s.push(u);
  return s;
}
function Au(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var _b = Au(Object.keys, Object), yb = Object.prototype, vb = yb.hasOwnProperty;
function mb(t) {
  if (!vu(t))
    return _b(t);
  var n = [];
  for (var e in Object(t))
    vb.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function sr(t) {
  return Yn(t) ? $u(t) : mb(t);
}
function wb(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var bb = Object.prototype, xb = bb.hasOwnProperty;
function Mb(t) {
  if (!dt(t))
    return wb(t);
  var n = vu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !xb.call(t, r)) || e.push(r);
  return e;
}
function $b(t) {
  return Yn(t) ? $u(t, !0) : Mb(t);
}
var Ab = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nb = /^\w*$/;
function Hi(t, n) {
  if (U(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || rr(t) ? !0 : Nb.test(t) || !Ab.test(t) || n != null && t in Object(n);
}
var Dn = Gt(Object, "create");
function Tb() {
  this.__data__ = Dn ? Dn(null) : {}, this.size = 0;
}
function Sb(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Pb = "__lodash_hash_undefined__", Eb = Object.prototype, kb = Eb.hasOwnProperty;
function Ob(t) {
  var n = this.__data__;
  if (Dn) {
    var e = n[t];
    return e === Pb ? void 0 : e;
  }
  return kb.call(n, t) ? n[t] : void 0;
}
var zb = Object.prototype, Cb = zb.hasOwnProperty;
function Ib(t) {
  var n = this.__data__;
  return Dn ? n[t] !== void 0 : Cb.call(n, t);
}
var Rb = "__lodash_hash_undefined__";
function jb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Dn && n === void 0 ? Rb : n, this;
}
function Bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = Tb;
Bt.prototype.delete = Sb;
Bt.prototype.get = Ob;
Bt.prototype.has = Ib;
Bt.prototype.set = jb;
function Lb() {
  this.__data__ = [], this.size = 0;
}
function ur(t, n) {
  for (var e = t.length; e--; )
    if (ar(t[e][0], n))
      return e;
  return -1;
}
var Fb = Array.prototype, Db = Fb.splice;
function qb(t) {
  var n = this.__data__, e = ur(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Db.call(n, e, 1), --this.size, !0;
}
function Bb(t) {
  var n = this.__data__, e = ur(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Hb(t) {
  return ur(this.__data__, t) > -1;
}
function Xb(t, n) {
  var e = this.__data__, r = ur(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Lb;
mt.prototype.delete = qb;
mt.prototype.get = Bb;
mt.prototype.has = Hb;
mt.prototype.set = Xb;
var qn = Gt(vt, "Map");
function Ub() {
  this.size = 0, this.__data__ = {
    hash: new Bt(),
    map: new (qn || mt)(),
    string: new Bt()
  };
}
function Gb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function lr(t, n) {
  var e = t.__data__;
  return Gb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Yb(t) {
  var n = lr(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Vb(t) {
  return lr(this, t).get(t);
}
function Kb(t) {
  return lr(this, t).has(t);
}
function Zb(t, n) {
  var e = lr(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function wt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = Ub;
wt.prototype.delete = Yb;
wt.prototype.get = Vb;
wt.prototype.has = Kb;
wt.prototype.set = Zb;
var Wb = "Expected a function";
function Xi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Wb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Xi.Cache || wt)(), e;
}
Xi.Cache = wt;
var Jb = 500;
function Qb(t) {
  var n = Xi(t, function(r) {
    return e.size === Jb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var tx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nx = /\\(\\)?/g, ex = Qb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(tx, function(e, r, i, o) {
    n.push(i ? o.replace(nx, "$1") : r || e);
  }), n;
});
function cr(t) {
  return t == null ? "" : gu(t);
}
function fr(t, n) {
  return U(t) ? t : Hi(t, n) ? [t] : ex(cr(t));
}
function Vn(t) {
  if (typeof t == "string" || rr(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ui(t, n) {
  n = fr(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Vn(n[e++])];
  return e && e == r ? t : void 0;
}
function rx(t, n, e) {
  var r = t == null ? void 0 : Ui(t, n);
  return r === void 0 ? e : r;
}
function Nu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var ix = Au(Object.getPrototypeOf, Object);
function ox(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function ax(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, ox(t, n, e);
}
var sx = "\\ud800-\\udfff", ux = "\\u0300-\\u036f", lx = "\\ufe20-\\ufe2f", cx = "\\u20d0-\\u20ff", fx = ux + lx + cx, hx = "\\ufe0e\\ufe0f", px = "\\u200d", dx = RegExp("[" + px + sx + fx + hx + "]");
function Tu(t) {
  return dx.test(t);
}
function gx(t) {
  return t.split("");
}
var Su = "\\ud800-\\udfff", _x = "\\u0300-\\u036f", yx = "\\ufe20-\\ufe2f", vx = "\\u20d0-\\u20ff", mx = _x + yx + vx, wx = "\\ufe0e\\ufe0f", bx = "[" + Su + "]", si = "[" + mx + "]", ui = "\\ud83c[\\udffb-\\udfff]", xx = "(?:" + si + "|" + ui + ")", Pu = "[^" + Su + "]", Eu = "(?:\\ud83c[\\udde6-\\uddff]){2}", ku = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mx = "\\u200d", Ou = xx + "?", zu = "[" + wx + "]?", $x = "(?:" + Mx + "(?:" + [Pu, Eu, ku].join("|") + ")" + zu + Ou + ")*", Ax = zu + Ou + $x, Nx = "(?:" + [Pu + si + "?", si, Eu, ku, bx].join("|") + ")", Tx = RegExp(ui + "(?=" + ui + ")|" + Nx + Ax, "g");
function Sx(t) {
  return t.match(Tx) || [];
}
function Px(t) {
  return Tu(t) ? Sx(t) : gx(t);
}
function Ex(t) {
  return function(n) {
    n = cr(n);
    var e = Tu(n) ? Px(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? ax(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var kx = Ex("toUpperCase");
function Ox(t) {
  return kx(cr(t).toLowerCase());
}
function zx() {
  this.__data__ = new mt(), this.size = 0;
}
function Cx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Ix(t) {
  return this.__data__.get(t);
}
function Rx(t) {
  return this.__data__.has(t);
}
var jx = 200;
function Lx(t, n) {
  var e = this.__data__;
  if (e instanceof mt) {
    var r = e.__data__;
    if (!qn || r.length < jx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new wt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ft(t) {
  var n = this.__data__ = new mt(t);
  this.size = n.size;
}
ft.prototype.clear = zx;
ft.prototype.delete = Cx;
ft.prototype.get = Ix;
ft.prototype.has = Rx;
ft.prototype.set = Lx;
function Cu(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Iu() {
  return [];
}
var Fx = Object.prototype, Dx = Fx.propertyIsEnumerable, Aa = Object.getOwnPropertySymbols, Ru = Aa ? function(t) {
  return t == null ? [] : (t = Object(t), Cu(Aa(t), function(n) {
    return Dx.call(t, n);
  }));
} : Iu, qx = Object.getOwnPropertySymbols, Bx = qx ? function(t) {
  for (var n = []; t; )
    Nu(n, Ru(t)), t = ix(t);
  return n;
} : Iu;
function ju(t, n, e) {
  var r = n(t);
  return U(t) ? r : Nu(r, e(t));
}
function Na(t) {
  return ju(t, sr, Ru);
}
function Hx(t) {
  return ju(t, $b, Bx);
}
var li = Gt(vt, "DataView"), ci = Gt(vt, "Promise"), fi = Gt(vt, "Set"), Ta = "[object Map]", Xx = "[object Object]", Sa = "[object Promise]", Pa = "[object Set]", Ea = "[object WeakMap]", ka = "[object DataView]", Ux = Ut(li), Gx = Ut(qn), Yx = Ut(ci), Vx = Ut(fi), Kx = Ut(oi), lt = Xt;
(li && lt(new li(new ArrayBuffer(1))) != ka || qn && lt(new qn()) != Ta || ci && lt(ci.resolve()) != Sa || fi && lt(new fi()) != Pa || oi && lt(new oi()) != Ea) && (lt = function(t) {
  var n = Xt(t), e = n == Xx ? t.constructor : void 0, r = e ? Ut(e) : "";
  if (r)
    switch (r) {
      case Ux:
        return ka;
      case Gx:
        return Ta;
      case Yx:
        return Sa;
      case Vx:
        return Pa;
      case Kx:
        return Ea;
    }
  return n;
});
var Oa = vt.Uint8Array, Zx = "__lodash_hash_undefined__";
function Wx(t) {
  return this.__data__.set(t, Zx), this;
}
function Jx(t) {
  return this.__data__.has(t);
}
function je(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++n < e; )
    this.add(t[n]);
}
je.prototype.add = je.prototype.push = Wx;
je.prototype.has = Jx;
function Qx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function t2(t, n) {
  return t.has(n);
}
var n2 = 1, e2 = 2;
function Lu(t, n, e, r, i, o) {
  var a = e & n2, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & e2 ? new je() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], g = n[h];
    if (r)
      var w = a ? r(g, d, h, n, t, o) : r(d, g, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Qx(n, function(_, x) {
        if (!t2(p, x) && (d === _ || i(d, _, e, r, o)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function Fu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function r2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var i2 = 1, o2 = 2, a2 = "[object Boolean]", s2 = "[object Date]", u2 = "[object Error]", l2 = "[object Map]", c2 = "[object Number]", f2 = "[object RegExp]", h2 = "[object Set]", p2 = "[object String]", d2 = "[object Symbol]", g2 = "[object ArrayBuffer]", _2 = "[object DataView]", za = $t ? $t.prototype : void 0, Pr = za ? za.valueOf : void 0;
function y2(t, n, e, r, i, o, a) {
  switch (e) {
    case _2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case g2:
      return !(t.byteLength != n.byteLength || !o(new Oa(t), new Oa(n)));
    case a2:
    case s2:
    case c2:
      return ar(+t, +n);
    case u2:
      return t.name == n.name && t.message == n.message;
    case f2:
    case p2:
      return t == n + "";
    case l2:
      var s = Fu;
    case h2:
      var l = r & i2;
      if (s || (s = r2), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= o2, a.set(t, n);
      var c = Lu(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case d2:
      if (Pr)
        return Pr.call(t) == Pr.call(n);
  }
  return !1;
}
var v2 = 1, m2 = Object.prototype, w2 = m2.hasOwnProperty;
function b2(t, n, e, r, i, o) {
  var a = e & v2, s = Na(t), l = s.length, u = Na(n), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in n : w2.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = a ? r(x, _, f, n, t, o) : r(_, x, f, t, n, o);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, o) : M)) {
      g = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var x2 = 1, Ca = "[object Arguments]", Ia = "[object Array]", se = "[object Object]", M2 = Object.prototype, Ra = M2.hasOwnProperty;
function $2(t, n, e, r, i, o) {
  var a = U(t), s = U(n), l = a ? Ia : lt(t), u = s ? Ia : lt(n);
  l = l == Ca ? se : l, u = u == Ca ? se : u;
  var c = l == se, h = u == se, f = l == u;
  if (f && ai(t)) {
    if (!ai(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new ft()), a || Mu(t) ? Lu(t, n, e, r, i, o) : y2(t, n, l, e, r, i, o);
  if (!(e & x2)) {
    var p = c && Ra.call(t, "__wrapped__"), d = h && Ra.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new ft()), i(g, w, e, r, o);
    }
  }
  return f ? (o || (o = new ft()), b2(t, n, e, r, i, o)) : !1;
}
function Gi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !qt(t) && !qt(n) ? t !== t && n !== n : $2(t, n, e, r, Gi, i);
}
var A2 = 1, N2 = 2;
function T2(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ft(), h;
      if (!(h === void 0 ? Gi(u, l, A2 | N2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Du(t) {
  return t === t && !dt(t);
}
function S2(t) {
  for (var n = sr(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Du(i)];
  }
  return n;
}
function qu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function P2(t) {
  var n = S2(t);
  return n.length == 1 && n[0][2] ? qu(n[0][0], n[0][1]) : function(e) {
    return e === t || T2(e, t, n);
  };
}
function E2(t, n) {
  return t != null && n in Object(t);
}
function Bu(t, n, e) {
  n = fr(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Vn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Bi(i) && or(a, i) && (U(t) || wu(t)));
}
function k2(t, n) {
  return t != null && Bu(t, n, E2);
}
var O2 = 1, z2 = 2;
function C2(t, n) {
  return Hi(t) && Du(n) ? qu(Vn(t), n) : function(e) {
    var r = rx(e, t);
    return r === void 0 && r === n ? k2(e, t) : Gi(n, r, O2 | z2);
  };
}
function I2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function R2(t) {
  return function(n) {
    return Ui(n, t);
  };
}
function j2(t) {
  return Hi(t) ? I2(Vn(t)) : R2(t);
}
function hr(t) {
  return typeof t == "function" ? t : t == null ? _u : typeof t == "object" ? U(t) ? C2(t[0], t[1]) : P2(t) : j2(t);
}
function L2(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var F2 = L2();
function D2(t, n) {
  return t && F2(t, n, sr);
}
function q2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Yn(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Yi = q2(D2);
function B2(t) {
  return typeof t == "function" ? t : _u;
}
function Ct(t, n) {
  var e = U(t) ? $w : Yi;
  return e(t, B2(n));
}
function H2(t, n) {
  return ir(n, function(e) {
    return [e, t[e]];
  });
}
function X2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var U2 = "[object Map]", G2 = "[object Set]";
function Y2(t) {
  return function(n) {
    var e = lt(n);
    return e == U2 ? Fu(n) : e == G2 ? X2(n) : H2(n, t(n));
  };
}
var Hu = Y2(sr);
function V2(t, n) {
  var e = [];
  return Yi(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function ue(t, n) {
  var e = U(t) ? Cu : V2;
  return e(t, hr(n));
}
function K2(t, n) {
  var e = -1, r = Yn(t) ? Array(t.length) : [];
  return Yi(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function _n(t, n) {
  var e = U(t) ? ir : K2;
  return e(t, hr(n));
}
var Z2 = Object.prototype, W2 = Z2.hasOwnProperty;
function J2(t, n) {
  return t != null && W2.call(t, n);
}
function Xu(t, n) {
  return t != null && Bu(t, n, J2);
}
var Q2 = "[object Boolean]";
function tM(t) {
  return t === !0 || t === !1 || qt(t) && Xt(t) == Q2;
}
function nM(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var eM = NaN;
function rM(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? nM(t, n) / e : eM;
}
function Vt(t, n) {
  return rM(t, hr(n));
}
function iM(t, n, e, r) {
  if (!dt(t))
    return t;
  n = fr(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Vn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = s[l];
      u = void 0, u === void 0 && (u = dt(c) ? c : or(n[i + 1]) ? [] : {});
    }
    Ew(s, l, u), s = s[l];
  }
  return t;
}
function oM(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ui(t, a);
    e(s, a) && iM(o, fr(a, t), s);
  }
  return o;
}
function Uu(t, n) {
  if (t == null)
    return {};
  var e = ir(Hx(t), function(r) {
    return [r];
  });
  return n = hr(n), oM(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var aM = Math.ceil, sM = Math.max;
function uM(t, n, e, r) {
  for (var i = -1, o = sM(aM((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function lM(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Ow(n, e, r) && (e = r = void 0), n = Nr(n), e === void 0 ? (e = n, n = 0) : e = Nr(e), r = r === void 0 ? n < e ? 1 : -1 : Nr(r), uM(n, e, r);
  };
}
var Vi = lM();
function cM() {
  var t = arguments, n = cr(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const A = {
  widgets: {
    slider_size: 200,
    slider_gap: 1.666,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 6, y: 1 },
    toggle_anchor: { x: 10, y: 11 },
    //toggle_fontsize:20,
    toggle_label_pos: "left",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    cartoon_anchor: { x: 3, y: 9 },
    cartoon_size: 4,
    cartoon_speed_factor: 30,
    cartoon_tadpole_size: 6
  },
  simulation: {
    delay: 20
  }
}, $ = {
  N: 200,
  L: 128,
  agentsize: 6,
  dt: 1,
  speed_variation: 0.5,
  angular_increment: 0.2,
  speed: {
    range: [0, 1],
    default: 0.64
  },
  collision_radius: {
    range: [0, 3],
    default: 1
  },
  alignment_radius: {
    range: [0, 10],
    default: 5
  },
  attraction_radius: {
    range: [0, 20],
    default: 15
  },
  wiggle: {
    range: [0, 60],
    default: 15
  },
  blind_spot: {
    range: [1, 360],
    default: 120
  },
  orli_switch: {
    default: !1
  }
}, Gu = (t) => _n(
  Hu(t),
  (n) => {
    n[1].id = n[0], Xu(n[1], "label") || (n[1].label = cM(Ox(n[0]), /_/g, " "));
  }
), Yu = (t) => _n(Hu(t), (n) => n[1]), Vu = (t, n) => Ct(t, (e, r) => e.widget = n[r]), fM = (t) => Uu(t, (n) => Xu(n, "range")), hM = (t) => Uu(t, (n) => tM(n.default)), Y = Xn().domain([0, 360]).range([0, 2 * Math.PI]), le = Xn().range([0, 360]).domain([0, 2 * Math.PI]), pM = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, Ku = (t) => {
  const e = pp().x((i) => t * i.x).y((i) => t * i.y), r = _n(Vi(30), (i) => ({
    x: -2 * Math.cos(i / 30 * Math.PI * 2),
    y: Math.sin(i / 30 * Math.PI * 2) * Math.pow(Math.sin(i / 30 / 2 * Math.PI * 2), 6)
  }));
  return e(r);
};
function nn(t, n) {
  var e = t * Math.cos(n / 360 * 2 * Math.PI), r = -t * Math.sin(n / 360 * 2 * Math.PI), i = -e, o = r, a = n < 180 ? 0 : 1;
  return "M 0,0 L " + e + "," + r + " A " + t + " " + t + " 0 " + a + " 1 " + i + "," + o + "L 0,0";
}
const Ki = fM($), Zi = hM($);
Gu(Ki);
Gu(Zi);
const Zu = Yu(Ki), Wu = Yu(Zi), Pn = _n(
  Zu,
  (t) => S1().id(t.id).label(t.label).range(t.range).value(t.default).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob).size(A.widgets.slider_size)
), Bn = _n(
  Wu,
  (t) => P1().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos).size(13)
);
Vu(Wu, Bn);
Vu(Zu, Pn);
const xt = qi().actions(["play", "pause"]), pr = qi().actions(["back"]), dr = qi().actions(["rewind"]), dM = [xt, pr, dr];
Bn[0].label("Orli's Magic Switch");
const gM = (t, n) => {
  const e = n.position(A.widgets.cartoon_anchor.x, A.widgets.cartoon_anchor.y), r = t.append("g").attr("id", "cartoon").attr("transform", "translate(" + e.x + "," + e.y + ")");
  r.append("path").attr("d", nn(A.widgets.cartoon_size * $.attraction_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)).attr("class", j.attract_scope), r.append("path").attr("d", nn(A.widgets.cartoon_size * $.alignment_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)).attr("class", j.orient_scope), r.append("path").attr("d", nn(A.widgets.cartoon_speed_factor * A.widgets.cartoon_size * $.speed.widget.value(), 90 + $.wiggle.widget.value())).attr("class", j.speed), r.append("path").attr("class", j.drop).attr("transform", "scale(4)translate(0,3)rotate(-90)").attr("d", Ku(A.widgets.cartoon_tadpole_size)), r.append("circle").attr("r", A.widgets.cartoon_size * $.collision_radius.widget.value()).attr("class", j.repell_scope);
  const i = n.position(A.widgets.slider_anchor.x, Vi(Pn.length).map((a) => A.widgets.slider_anchor.y + A.widgets.slider_gap * a)), o = n.position(A.widgets.toggle_anchor.x, A.widgets.toggle_anchor.y);
  Pn.forEach((a, s) => a.position(i[s])), Bn[0].position(o).labelposition(A.widgets.toggle_label_pos), xt.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), dr.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), pr.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Pn).enter().append(Ar), t.selectAll(null).data(Bn).enter().append(Ar), t.selectAll(null).data(dM).enter().append(Ar);
}, _M = (t) => {
  Ct(Ki, (n) => n.widget.reset(t, n.default)), Ct(Zi, (n) => n.widget.reset(t, n.default));
}, Le = $.L, ja = $.dt, yM = $.N;
var St = [];
const vM = () => {
  $.timer = {}, $.tick = 0, St = _n(Vi(yM), (t) => ({
    id: t,
    x: Math.random() * Le,
    y: Math.random() * Le,
    theta: Math.random() * 360,
    speed_var: 1 + Math.random() * $.speed_variation
  }));
}, mM = () => {
  $.tick++;
  let t = Math.cos((180 - $.blind_spot.widget.value() / 2) / 180 * Math.PI);
  Ct(St, (n) => {
    let e = [];
    var r, i, o, a;
    if (e = ue(St, (u) => pM(n, u) < $.collision_radius.widget.value() && u.id != n.id), e.length > 0)
      r = n.x - Vt(e, (u) => u.x), i = n.y - Vt(e, (u) => u.y);
    else {
      const u = Math.cos(Y(n.theta)), c = Math.sin(Y(n.theta)), h = Math.sqrt(u * u + c * c), f = ue(St, (g) => {
        let w = g.x - n.x, _ = g.y - n.y;
        g.r = Math.sqrt(w * w + _ * _);
        let x = (w * u + _ * c) / (h * g.r);
        return g.r < $.attraction_radius.widget.value() && x > t && g.id != n.id;
      }), p = ue(f, (g) => g.r < $.alignment_radius.widget.value()), d = ue(f, (g) => g.r > $.alignment_radius.widget.value());
      if (o = n.theta, a = n.theta, p.length > 0) {
        const g = Vt(p, (_) => Math.cos(Y(_.theta))), w = Vt(p, (_) => Math.sin(Y(_.theta)));
        o = le(Math.atan2(w, g));
      }
      if (d.length > 0) {
        const g = Vt(d, (_) => _.x), w = Vt(d, (_) => _.y);
        a = le(Math.atan2(w - n.y, g - n.x));
      }
      r = 0.5 * (Math.cos(Y(o)) + Math.cos(Y(a))), i = 0.5 * (Math.sin(Y(o)) + Math.sin(Y(a)));
    }
    const s = Math.cos(Y(n.theta)) + $.angular_increment * r, l = Math.sin(Y(n.theta)) + $.angular_increment * i;
    n.theta = le(Math.atan2(l, s));
  }), Ct(St, (n) => {
    n.theta = n.theta + (Math.random() - 0.5) * $.wiggle.widget.value();
  }), Ct(St, (n) => {
    const e = $.speed.widget.value(), r = Y(n.theta);
    let i = ja * e * n.speed_var * Math.cos(r), o = ja * e * n.speed_var * Math.sin(r), a = n.x + i, s = n.y + o;
    (a < 0 || a > Le) && (i *= -1), (s < 0 || s > Le) && (o *= -1), n.x = n.x + i, n.y = n.y + o, n.theta = le(Math.atan2(o, i));
  });
}, Ju = $.L, Fe = Xn().domain([0, Ju]), De = Xn().domain([0, Ju]);
function Wi(t) {
  return $.orli_switch.widget.value() ? sp(t.theta / 360) : null;
}
const wM = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  Fe.range([0, e]), De.range([0, r]), t.select("#origin").remove(), t.append("g").attr("id", "origin").selectAll("." + j.agent).data(St).enter().append("g").attr("class", j.agent).attr("transform", (a) => "translate(" + Fe(a.x) + "," + De(a.y) + ")rotate(" + a.theta + ")").style("fill", Wi).append("path").attr("d", Ku($.agentsize));
}, bM = (t, n) => {
  t.selectAll("." + j.agent).attr("transform", (e) => "translate(" + Fe(e.x) + "," + De(e.y) + ")rotate(" + e.theta + ")").style("fill", Wi);
}, xM = (t, n) => {
  t.selectAll("." + j.agent).attr("transform", (e) => "translate(" + Fe(e.x) + "," + De(e.y) + ")rotate(" + e.theta + ")").style("fill", Wi);
};
function MM(t, n) {
  mM(), bM(t);
}
function Qu(t, n) {
  vM(), wM(t, n);
}
function $M(t, n) {
  xM(t);
}
var La = {};
const AM = (t, n) => {
  xt.value() == 1 ? La = Tf(() => MM(t), A.simulation.delay) : La.stop();
}, NM = (t) => {
  t.select("." + j.attract_scope).attr("d", nn(A.widgets.cartoon_size * $.attraction_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)), t.select("." + j.orient_scope).attr("d", nn(A.widgets.cartoon_size * $.alignment_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)), t.select("." + j.repell_scope).attr("r", A.widgets.cartoon_size * $.collision_radius.widget.value()), t.select("." + j.speed).attr("d", nn(A.widgets.cartoon_speed_factor * A.widgets.cartoon_size * $.speed.widget.value(), 90 + $.wiggle.widget.value()));
}, TM = (t, n, e) => {
  dr.update(() => _M(n)), xt.update(() => AM(t)), pr.update(() => Qu(t, e)), Ct(Pn, (r) => {
    r.update(() => NM(n));
  }), Bn[0].update(() => $M(t));
}, SM = {
  name: "@explorables/flockn_roll",
  title: "Flock'n Roll",
  subtitle: "Collective Animal Behavior - Schooling Fish & Flocking Birds",
  description: "This is a model for collective behavior in animals, e.g. flocks of birds or schools of fish based on simple rules of interaction.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function PM(t, n = tl) {
  const e = D1(t, n), r = e.display, i = e.controls, o = e.grid;
  return gM(i, o), TM(r, i, n), Qu(r, n), {
    halt() {
      xt.value() === 1 && xt.press(i);
    },
    reset() {
      xt.value() === 1 && xt.press(i), dr.press(i), pr.press(i);
    },
    config: n,
    meta: SM
  };
}
export {
  tl as config,
  PM as default,
  PM as load,
  SM as meta
};
