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
function Lo(t) {
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
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function el() {
  return 0;
}
function rl(t) {
  return t === null ? NaN : +t;
}
const il = Lo(ce), al = il.right;
Lo(rl).center;
const ol = Math.sqrt(50), sl = Math.sqrt(10), ul = Math.sqrt(2);
function ve(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ol ? 10 : a >= sl ? 5 : a >= ul ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? ve(t, n, e * 2) : [s, l, u];
}
function ll(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? ve(n, t, e) : ve(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Pr(t, n, e) {
  return n = +n, t = +t, e = +e, ve(t, n, e)[2];
}
function cl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Pr(n, t, e) : Pr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var fl = { value: () => {
} };
function Fo() {
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
fe.prototype = Fo.prototype = {
  constructor: fe,
  on: function(t, n) {
    var e = this._, r = hl(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = pl(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Ji(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ji(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new fe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
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
function De(t) {
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
function Do(t) {
  var n = De(t);
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
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new F(r, this._parents);
}
function vl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ml() {
  return [];
}
function Bo(t) {
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
  typeof t == "function" ? t = wl(t) : t = Bo(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new F(r, i);
}
function Ho(t) {
  return function() {
    return this.matches(t);
  };
}
function Xo(t) {
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
  return this.select(t == null ? $l : Ml(typeof t == "function" ? t : Xo(t)));
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
function El(t) {
  return this.selectAll(t == null ? Tl : Sl(typeof t == "function" ? t : Xo(t)));
}
function Pl(t) {
  typeof t != "function" && (t = Ho(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new F(r, this._parents);
}
function Uo(t) {
  return new Array(t.length);
}
function kl() {
  return new F(this._enter || this._groups.map(Uo), this._parents);
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
function zl(t) {
  return function() {
    return t;
  };
}
function Ol(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new me(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Cl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new me(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Il(t) {
  return t.__data__;
}
function Rl(t, n) {
  if (!arguments.length) return Array.from(this, Il);
  var e = n ? Cl : Ol, r = this._parents, i = this._groups;
  typeof t != "function" && (t = zl(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = ql(t.call(c, c && c.__data__, u, r)), d = p.length, g = s[u] = new Array(d), w = o[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, g, w, _, p, n);
    for (var x = 0, M = 0, y, m; x < d; ++x)
      if (y = g[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        y._next = m || null;
      }
  }
  return o = new F(o, r), o._enter = s, o._exit = l, o;
}
function ql(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function jl() {
  return new F(this._exit || this._groups.map(Uo), this._parents);
}
function Ll(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Fl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new F(s, this._parents);
}
function Dl() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Bl(t) {
  t || (t = Hl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new F(i, this._parents).order();
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
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
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
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
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
  var e = De(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Wl : Zl : typeof n == "function" ? e.local ? nc : tc : e.local ? Ql : Jl)(e, n));
}
function Go(t) {
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
function ac(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function oc(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? rc : typeof n == "function" ? ac : ic)(t, n, e ?? "")) : en(this.node(), t);
}
function en(t, n) {
  return t.style.getPropertyValue(n) || Go(t).getComputedStyle(t, null).getPropertyValue(n);
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
function Yo(t) {
  return t.trim().split(/^|\s+/);
}
function pi(t) {
  return t.classList || new Vo(t);
}
function Vo(t) {
  this._node = t, this._names = Yo(t.getAttribute("class") || "");
}
Vo.prototype = {
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
function Ko(t, n) {
  for (var e = pi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Zo(t, n) {
  for (var e = pi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function fc(t) {
  return function() {
    Ko(this, t);
  };
}
function hc(t) {
  return function() {
    Zo(this, t);
  };
}
function pc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ko : Zo)(this, t);
  };
}
function dc(t, n) {
  var e = Yo(t + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
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
  var n = typeof t == "function" ? t : Do(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Sc() {
  return null;
}
function Ec(t, n) {
  var e = typeof t == "function" ? t : Do(t), r = n == null ? Sc : typeof n == "function" ? n : hi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Pc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function kc() {
  return this.each(Pc);
}
function zc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Oc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Cc(t) {
  return this.select(t ? Oc : zc);
}
function Ic(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Rc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function qc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function jc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Lc(t, n, e) {
  return function() {
    var r = this.__on, i, a = Rc(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Fc(t, n, e) {
  var r = qc(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Lc : jc, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Wo(t, n, e) {
  var r = Go(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Dc(t, n) {
  return function() {
    return Wo(this, t, n);
  };
}
function Bc(t, n) {
  return function() {
    return Wo(this, t, n.apply(this, arguments));
  };
}
function Hc(t, n) {
  return this.each((typeof n == "function" ? Bc : Dc)(t, n));
}
function* Xc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Jo = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function Hn() {
  return new F([[document.documentElement]], Jo);
}
function Uc() {
  return this;
}
F.prototype = Hn.prototype = {
  constructor: F,
  select: yl,
  selectAll: bl,
  selectChild: Al,
  selectChildren: El,
  filter: Pl,
  data: Rl,
  enter: kl,
  exit: jl,
  join: Ll,
  merge: Fl,
  selection: Uc,
  order: Dl,
  sort: Bl,
  call: Xl,
  nodes: Ul,
  node: Gl,
  size: Yl,
  empty: Vl,
  each: Kl,
  attr: ec,
  style: oc,
  property: cc,
  classed: dc,
  text: vc,
  html: xc,
  raise: $c,
  lower: Nc,
  append: Tc,
  insert: Ec,
  remove: kc,
  clone: Cc,
  datum: Ic,
  on: Fc,
  dispatch: Hc,
  [Symbol.iterator]: Xc
};
function Gc(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], Jo);
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
var It = 0.7, rn = 1 / It, Wt = "\\s*([+-]?\\d+)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Yc = /^#([0-9a-f]{3,8})$/, Vc = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), Kc = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), Zc = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Pn}\\)$`), Wc = new RegExp(`^rgba\\(${et},${et},${et},${Pn}\\)$`), Jc = new RegExp(`^hsl\\(${Pn},${et},${et}\\)$`), Qc = new RegExp(`^hsla\\(${Pn},${et},${et},${Pn}\\)$`), ta = {
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
  hex: na,
  // Deprecated! Use color.formatHex.
  formatHex: na,
  formatHex8: tf,
  formatHsl: nf,
  formatRgb: ea,
  toString: ea
});
function na() {
  return this.rgb().formatHex();
}
function tf() {
  return this.rgb().formatHex8();
}
function nf() {
  return ts(this).formatHsl();
}
function ea() {
  return this.rgb().formatRgb();
}
function Rt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Yc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ra(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Vc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Kc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Zc.exec(t)) ? Kn(n[1], n[2], n[3], n[4]) : (n = Wc.exec(t)) ? Kn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Jc.exec(t)) ? oa(n[1], n[2] / 100, n[3] / 100, 1) : (n = Qc.exec(t)) ? oa(n[1], n[2] / 100, n[3] / 100, n[4]) : ta.hasOwnProperty(t) ? ra(ta[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function ra(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Qo(t) {
  return t instanceof pn || (t = Rt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function zr(t, n, e, r) {
  return arguments.length === 1 ? Qo(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Be(R, zr, di(pn, {
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
  hex: ia,
  // Deprecated! Use color.formatHex.
  formatHex: ia,
  formatHex8: ef,
  formatRgb: aa,
  toString: aa
}));
function ia() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}`;
}
function ef() {
  return `#${Et(this.r)}${Et(this.g)}${Et(this.b)}${Et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function aa() {
  const t = we(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${kt(this.r)}, ${kt(this.g)}, ${kt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function we(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function kt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Et(t) {
  return t = kt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function oa(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function ts(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof pn || (t = Rt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Z(o, s, l, t.opacity);
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
    return new Z(sa(this.h), Zn(this.s), Zn(this.l), we(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = we(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${sa(this.h)}, ${Zn(this.s) * 100}%, ${Zn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function sa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Zn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function _r(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const af = Math.PI / 180, of = 180 / Math.PI;
var ns = -0.14861, gi = 1.78277, _i = -0.29227, He = -0.90649, kn = 1.97294, ua = kn * He, la = kn * gi, ca = gi * _i - He * ns;
function sf(t) {
  if (t instanceof zt) return new zt(t.h, t.s, t.l, t.opacity);
  t instanceof R || (t = Qo(t));
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (ca * r + ua * n - la * e) / (ca + ua - la), a = r - i, o = (kn * (e - i) - _i * a) / He, s = Math.sqrt(o * o + a * a) / (kn * i * (1 - i)), l = s ? Math.atan2(o, a) * of - 120 : NaN;
  return new zt(l < 0 ? l + 360 : l, s, i, t.opacity);
}
function Mt(t, n, e, r) {
  return arguments.length === 1 ? sf(t) : new zt(t, n, e, r ?? 1);
}
function zt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Be(zt, Mt, di(pn, {
  brighter(t) {
    return t = t == null ? rn : Math.pow(rn, t), new zt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? It : Math.pow(It, t), new zt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * af, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
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
  function r(i, a) {
    var o = e((i = zr(i)).r, (a = zr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Jt(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ff(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function hf(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function pf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = yi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
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
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Or = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, yr = new RegExp(Or.source, "g");
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
  var e = Or.lastIndex = yr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Or.exec(t)) && (i = yr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: V(r, i) })), e = yr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? yf(l[0].x) : _f(n) : (n = l.length, function(u) {
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
var fa = 180 / Math.PI, Cr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function is(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * fa,
    skewX: Math.atan(l) * fa,
    scaleX: o,
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
function as(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: V(u, h) }, { i: g - 2, x: V(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
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
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, g = f.length, w; ++d < g; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var bf = as(mf, "px, ", "px)", "deg)"), xf = as(wf, ", ", ")", ")");
function os(t) {
  return function n(e) {
    e = +e;
    function r(i, a) {
      var o = t((i = Mt(i)).h, (a = Mt(a)).h), s = Jt(i.s, a.s), l = Jt(i.l, a.l), u = Jt(i.opacity, a.opacity);
      return function(c) {
        return i.h = o(c), i.s = s(c), i.l = l(Math.pow(c, e)), i.opacity = u(c), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
os(lf);
var ss = os(Jt), an = 0, bn = 0, yn = 0, us = 1e3, xe, xn, Me = 0, qt = 0, Ue = 0, zn = typeof performance == "object" && performance.now ? performance : Date, ls = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ge() {
  return qt || (ls(Mf), qt = zn.now() + Ue);
}
function Mf() {
  qt = 0;
}
function On() {
  this._call = this._time = this._next = null;
}
On.prototype = cs.prototype = {
  constructor: On,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ge() : +e) + (n == null ? 0 : +n), !this._next && xn !== this && (xn ? xn._next = this : xe = this, xn = this), this._call = t, this._time = e, Ir();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ir());
  }
};
function cs(t, n, e) {
  var r = new On();
  return r.restart(t, n, e), r;
}
function $f() {
  Ge(), ++an;
  for (var t = xe, n; t; )
    (n = qt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --an;
}
function ha() {
  qt = (Me = zn.now()) + Ue, an = bn = 0;
  try {
    $f();
  } finally {
    an = 0, Nf(), qt = 0;
  }
}
function Af() {
  var t = zn.now(), n = t - Me;
  n > us && (Ue -= n, Me = t);
}
function Nf() {
  for (var t, n = xe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xe = e);
  xn = t, Ir(r);
}
function Ir(t) {
  if (!an) {
    bn && (bn = clearTimeout(bn));
    var n = t - qt;
    n > 24 ? (t < 1 / 0 && (bn = setTimeout(ha, t - zn.now() - Ue)), yn && (yn = clearInterval(yn))) : (yn || (Me = zn.now(), yn = setInterval(Af, us)), an = 1, ls(ha));
  }
}
function pa(t, n, e) {
  var r = new On();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Tf(t, n, e) {
  var r = new On(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? Ge() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Sf = Fo("start", "end", "cancel", "interrupt"), Ef = [], fs = 0, da = 1, Rr = 2, he = 3, ga = 4, qr = 5, pe = 6;
function Ye(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  Pf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Sf,
    tween: Ef,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: fs
  });
}
function vi(t, n) {
  var e = Q(t, n);
  if (e.state > fs) throw new Error("too late; already scheduled");
  return e;
}
function at(t, n) {
  var e = Q(t, n);
  if (e.state > he) throw new Error("too late; already running");
  return e;
}
function Q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Pf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = cs(a, 0, e.time);
  function a(u) {
    e.state = da, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== da) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === he) return pa(o);
        p.state === ga ? (p.state = pe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = pe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (pa(function() {
      e.state === he && (e.state = ga, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Rr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Rr) {
      for (e.state = he, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = qr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === qr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = pe, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function kf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Rr && r.state < qr, r.state = pe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function zf(t) {
  return this.each(function() {
    kf(this, t);
  });
}
function Of(t, n) {
  var e, r;
  return function() {
    var i = at(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
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
    var a = at(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function If(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Of : Cf)(e, t, n));
}
function mi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
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
function qf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function jf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Lf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Ff(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Df(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Bf(t, n) {
  var e = De(t), r = e === "transform" ? xf : hs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Df : Ff)(e, r, mi(this, "attr." + t, n)) : n == null ? (e.local ? qf : Rf)(e) : (e.local ? Lf : jf)(e, r, n));
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
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Xf(t, a)), e;
  }
  return i._value = n, i;
}
function Gf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Hf(t, a)), e;
  }
  return i._value = n, i;
}
function Yf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = De(t);
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
    at(this, t).duration = +n.apply(this, arguments);
  };
}
function Jf(t, n) {
  return n = +n, function() {
    at(this, t).duration = n;
  };
}
function Qf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wf : Jf)(n, t)) : Q(this.node(), n).duration;
}
function th(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    at(this, t).ease = n;
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
    at(this, t).ease = e;
  };
}
function rh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(eh(this._id, t));
}
function ih(t) {
  typeof t != "function" && (t = Ho(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new ht(r, this._parents, this._name, this._id);
}
function ah(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new ht(o, this._parents, this._name, this._id);
}
function oh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function sh(t, n, e) {
  var r, i, a = oh(n) ? vi : at;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
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
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ye(u[f], n, e, f, u, Q(c, e)));
  return new ht(a, this._parents, n, e);
}
function hh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Bo(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = Q(c, e), g = 0, w = f.length; g < w; ++g)
          (p = f[g]) && Ye(p, n, e, g, f, d);
        a.push(f), o.push(c);
      }
  return new ht(a, o, n, e);
}
var ph = Hn.prototype.constructor;
function dh() {
  return new ph(this._groups, this._parents);
}
function gh(t, n) {
  var e, r, i;
  return function() {
    var a = en(this, t), o = (this.style.removeProperty(t), en(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function ps(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function _h(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = en(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function yh(t, n, e) {
  var r, i, a;
  return function() {
    var o = en(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), en(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function vh(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = at(this, t), u = l.on, c = l.value[a] == null ? s || (s = ps(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
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
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && wh(t, o, e)), r;
  }
  return a._value = n, a;
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
function Eh() {
  for (var t = this._name, n = this._id, e = ds(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = Q(l, n);
        Ye(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ht(r, this._parents, t, e);
}
function Ph() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = at(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
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
  merge: ah,
  selection: dh,
  transition: Eh,
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
  end: Ph,
  [Symbol.iterator]: st[Symbol.iterator]
};
function zh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Oh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: zh
};
function Ch(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ih(t) {
  var n, e;
  t instanceof ht ? (n = t._id, t = t._name) : (n = ds(), (e = Oh).time = Ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ye(l, t, n, u, o, e || Ch(l, n));
  return new ht(r, this._parents, t, n);
}
Hn.prototype.interrupt = zf;
Hn.prototype.transition = Ih;
const jr = Math.PI, Lr = 2 * jr, Nt = 1e-6, Rh = Lr - Nt;
function gs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function qh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return gs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class jh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? gs : qh(n);
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
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Nt) if (!(Math.abs(h * l - u * c) > Nt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, g = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(g), x = Math.sqrt(f), M = a * Math.tan((jr - Math.acos((g + f - w) / (2 * _ * x))) / 2), y = M / x, m = M / _;
      Math.abs(y - 1) > Nt && this._append`L${n + y * c},${e + y * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Nt || Math.abs(this._y1 - c) > Nt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Lr + Lr), f > Rh ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Nt && this._append`A${r},${r},0,${+(f >= jr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Lh(t) {
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
function on(t) {
  return t = $e(Math.abs(t)), t ? t[1] : NaN;
}
function Fh(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Dh(t) {
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
  var r = e[0], i = e[1], a = i - (_s = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + $e(t, Math.max(0, n + a - 1))[0];
}
function _a(t, n) {
  var e = $e(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ya = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Lh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => _a(t * 100, n),
  r: _a,
  s: Xh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function va(t) {
  return t;
}
var ma = Array.prototype.map, wa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Uh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? va : Fh(ma.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? va : Dh(ma.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ae(h);
    var f = h.fill, p = h.align, d = h.sign, g = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : ya[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var P = g === "$" ? e : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = g === "$" ? r : /[%p]/.test(m) ? o : "", z = ya[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var O = P, N = k, C, At, j;
      if (m === "c")
        N = z(v) + N, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), M), y && (v = Hh(v)), X && +v == 0 && d !== "+" && (X = !1), O = (X ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + O, N = (m === "s" ? wa[8 + _s / 3] : "") + N + (X && d === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (j = v.charCodeAt(C), 48 > j || j > 57) {
              N = (j === 46 ? i + v.slice(C + 1) : v.slice(C)) + N, v = v.slice(0, C);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var G = O.length + v.length + N.length, E = G < _ ? new Array(_ - G + 1).join(f) : "";
      switch (x && w && (v = n(E + v, E.length ? _ - N.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + N + E;
          break;
        case "=":
          v = O + E + v + N;
          break;
        case "^":
          v = E.slice(0, G = E.length >> 1) + O + v + N + E.slice(G);
          break;
        default:
          v = E + O + v + N;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = Ae(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(on(f) / 3))) * 3, g = Math.pow(10, -d), w = wa[8 + d / 3];
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
  return Math.max(0, -on(Math.abs(t)));
}
function Vh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(on(n) / 3))) * 3 - on(Math.abs(t)));
}
function Kh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, on(n) - on(t)) + 1;
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
var ba = [0, 1];
function Kt(t) {
  return t;
}
function Fr(t, n) {
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
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Fr(i, r), a = e(o, a)) : (r = Fr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function np(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Fr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = al(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function ep(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rp() {
  var t = ba, n = ba, e = yi, r, i, a, o = Kt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Kt && (o = Qh(t[0], t[f - 1])), s = f > 2 ? np : tp, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Jh), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = vf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Kt, c()) : o !== Kt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function ip() {
  return rp()(Kt, Kt);
}
function ap(t, n, e, r) {
  var i = cl(t, n, e), a;
  switch (r = Ae(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Vh(i, o)) && (r.precision = a), vs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Kh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Yh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return ys(r);
}
function op(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ll(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ap(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Pr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
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
  }, Zh.apply(t, arguments), op(t);
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
  }, () => new jh(n);
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
  var e = Yt(!0), r = null, i = cp, a = null, o = up(s);
  t = typeof t == "function" ? t : t === void 0 ? fp : Yt(t), n = typeof n == "function" ? n : n === void 0 ? hp : Yt(n);
  function s(l) {
    var u, c = (l = lp(l)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +n(h, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Yt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Yt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Yt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
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
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1aazq_40{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:16px}._widget_1aazq_40 ._title_1aazq_51{font-size:20px;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1aazq_40 ._label_1aazq_58{fill:var(--color-text);stroke:none}._widget_1aazq_40 ._lit_1aazq_63{fill:var(--color-lit)}._button_1aazq_67>._symbol_1aazq_67,._radio_1aazq_68>._radiobutton_1aazq_68>._symbol_1aazq_67{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74,._toggle_1aazq_75._selected_1aazq_74,._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74._lit_1aazq_63{fill:var(--color-selected)}._widget_1aazq_40 ._symbol_1aazq_67._lit_1aazq_63{fill:var(--color-lit-symbol)}._slider_1aazq_84>._track_1aazq_84,._toggle_1aazq_75>._track_1aazq_84{pointer-events:none}._slider_1aazq_84>._track_overlay_1aazq_89,._toggle_1aazq_75>._track_overlay_1aazq_89{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1aazq_84>._handle_1aazq_97,._toggle_1aazq_75>._handle_1aazq_97{fill:var(--color-handle)}")), document.head.appendChild(t);
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
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
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
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= mp ? 10 : a >= wp ? 5 : a >= bp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Ne(t, n, e * 2) : [s, l, u];
}
function xp(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? Ne(n, t, e) : Ne(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function Dr(t, n, e) {
  return n = +n, t = +t, e = +e, Ne(t, n, e)[2];
}
function Mp(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Dr(n, t, e) : Dr(t, n, e);
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
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
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
    var e = this._, r = Np(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Tp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = xa(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = xa(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ge(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function Tp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function xa(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ap, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Br = "http://www.w3.org/1999/xhtml";
const Ma = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Br,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ve(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ma.hasOwnProperty(n) ? { space: Ma[n], local: t } : t;
}
function Sp(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Br && n.documentElement.namespaceURI === Br ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ep(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function bs(t) {
  var n = Ve(t);
  return (n.local ? Ep : Sp)(n);
}
function Pp() {
}
function xi(t) {
  return t == null ? Pp : function() {
    return this.querySelector(t);
  };
}
function kp(t) {
  typeof t != "function" && (t = xi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function zp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Op() {
  return [];
}
function xs(t) {
  return t == null ? Op : function() {
    return this.querySelectorAll(t);
  };
}
function Cp(t) {
  return function() {
    return zp(t.apply(this, arguments));
  };
}
function Ip(t) {
  typeof t == "function" ? t = Cp(t) : t = xs(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
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
function qp(t) {
  return function() {
    return Rp.call(this.children, t);
  };
}
function jp() {
  return this.firstElementChild;
}
function Lp(t) {
  return this.select(t == null ? jp : qp(typeof t == "function" ? t : $s(t)));
}
var Fp = Array.prototype.filter;
function Dp() {
  return Array.from(this.children);
}
function Bp(t) {
  return function() {
    return Fp.call(this.children, t);
  };
}
function Hp(t) {
  return this.selectAll(t == null ? Dp : Bp(typeof t == "function" ? t : $s(t)));
}
function Xp(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function As(t) {
  return new Array(t.length);
}
function Up() {
  return new D(this._enter || this._groups.map(As), this._parents);
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
function Yp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new Te(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Vp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new Te(t, a[s]);
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
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Wp(t.call(c, c && c.__data__, u, r)), d = p.length, g = s[u] = new Array(d), w = o[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, g, w, _, p, n);
    for (var x = 0, M = 0, y, m; x < d; ++x)
      if (y = g[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        y._next = m || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function Wp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Jp() {
  return new D(this._exit || this._groups.map(As), this._parents);
}
function Qp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function td(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function nd() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function ed(t) {
  t || (t = rd);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function rd(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function id() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ad() {
  return Array.from(this);
}
function od() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
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
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
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
function Es(t, n) {
  for (var e = Mi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ps(t, n) {
  for (var e = Mi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ad(t) {
  return function() {
    Es(this, t);
  };
}
function Nd(t) {
  return function() {
    Ps(this, t);
  };
}
function Td(t, n) {
  return function() {
    (n.apply(this, arguments) ? Es : Ps)(this, t);
  };
}
function Sd(t, n) {
  var e = Ts(t + "");
  if (arguments.length < 2) {
    for (var r = Mi(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Td : n ? Ad : Nd)(e, n));
}
function Ed() {
  this.textContent = "";
}
function Pd(t) {
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
function zd(t) {
  return arguments.length ? this.each(t == null ? Ed : (typeof t == "function" ? kd : Pd)(t)) : this.node().textContent;
}
function Od() {
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
  return arguments.length ? this.each(t == null ? Od : (typeof t == "function" ? Id : Cd)(t)) : this.node().innerHTML;
}
function qd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function jd() {
  return this.each(qd);
}
function Ld() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Fd() {
  return this.each(Ld);
}
function Dd(t) {
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
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Qd(t, n, e) {
  return function() {
    var r = this.__on, i, a = Zd(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function t0(t, n, e) {
  var r = Wd(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Qd : Jd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
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
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var zs = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function Un() {
  return new D([[document.documentElement]], zs);
}
function a0() {
  return this;
}
D.prototype = Un.prototype = {
  constructor: D,
  select: kp,
  selectAll: Ip,
  selectChild: Lp,
  selectChildren: Hp,
  filter: Xp,
  data: Zp,
  enter: Up,
  exit: Jp,
  join: Qp,
  merge: td,
  selection: a0,
  order: nd,
  sort: ed,
  call: id,
  nodes: ad,
  node: od,
  size: sd,
  empty: ud,
  each: ld,
  attr: _d,
  style: wd,
  property: $d,
  classed: Sd,
  text: zd,
  html: Rd,
  raise: jd,
  lower: Fd,
  append: Dd,
  insert: Hd,
  remove: Ud,
  clone: Vd,
  datum: Kd,
  on: t0,
  dispatch: r0,
  [Symbol.iterator]: i0
};
function I(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], zs);
}
function o0(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Hr(t, n) {
  if (t = o0(t), n === void 0 && (n = t.currentTarget), n) {
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
  active: a,
  x: o,
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
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
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
  var t = c0, n = f0, e = h0, r = p0, i = {}, a = bi("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, s0).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var P = M(this, n.call(this, y, m), y, m, "mouse");
      P && (I(y.view).on("mousemove.drag", d, Cn).on("mouseup.drag", g, Cn), u0(y.view), vr(y), u = !1, s = y.clientX, l = y.clientY, P("start", y));
    }
  }
  function d(y) {
    if (Qt(y), !u) {
      var m = y.clientX - s, P = y.clientY - l;
      u = m * m + P * P > h;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    I(y.view).on("mousemove.drag mouseup.drag", null), l0(y.view, u), Qt(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var P = y.changedTouches, k = n.call(this, y, m), z = P.length, B, H;
      for (B = 0; B < z; ++B)
        (H = M(this, k, y, m, P[B].identifier, P[B])) && (vr(y), H("start", y, P[B]));
    }
  }
  function _(y) {
    var m = y.changedTouches, P = m.length, k, z;
    for (k = 0; k < P; ++k)
      (z = i[m[k].identifier]) && (Qt(y), z("drag", y, m[k]));
  }
  function x(y) {
    var m = y.changedTouches, P = m.length, k, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), k = 0; k < P; ++k)
      (z = i[m[k].identifier]) && (vr(y), z("end", y, m[k]));
  }
  function M(y, m, P, k, z, B) {
    var H = a.copy(), v = Hr(B || P, m), O, N, C;
    if ((C = e.call(y, new Xr("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: z,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), k)) != null)
      return O = C.x - v[0] || 0, N = C.y - v[1] || 0, function At(j, X, G) {
        var E = v, gr;
        switch (j) {
          case "start":
            i[z] = At, gr = o++;
            break;
          case "end":
            delete i[z], --o;
          // falls through
          case "drag":
            v = Hr(G || X, m), gr = o;
            break;
        }
        H.call(
          j,
          y,
          new Xr(j, {
            sourceEvent: X,
            subject: C,
            target: f,
            identifier: z,
            active: gr,
            x: v[0] + O,
            y: v[1] + N,
            dx: v[0] - E[0],
            dy: v[1] - E[1],
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
    var y = a.on.apply(a, arguments);
    return y === a ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, f) : Math.sqrt(h);
  }, f;
}
function $i(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Os(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Gn() {
}
var In = 0.7, Se = 1 / In, tn = "\\s*([+-]?\\d+)\\s*", Rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", g0 = /^#([0-9a-f]{3,8})$/, _0 = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), y0 = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), v0 = new RegExp(`^rgba\\(${tn},${tn},${tn},${Rn}\\)$`), m0 = new RegExp(`^rgba\\(${rt},${rt},${rt},${Rn}\\)$`), w0 = new RegExp(`^hsl\\(${Rn},${rt},${rt}\\)$`), b0 = new RegExp(`^hsla\\(${Rn},${rt},${rt},${Rn}\\)$`), $a = {
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
$i(Gn, jt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Aa,
  // Deprecated! Use color.formatHex.
  formatHex: Aa,
  formatHex8: x0,
  formatHsl: M0,
  formatRgb: Na,
  toString: Na
});
function Aa() {
  return this.rgb().formatHex();
}
function x0() {
  return this.rgb().formatHex8();
}
function M0() {
  return Cs(this).formatHsl();
}
function Na() {
  return this.rgb().formatRgb();
}
function jt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = g0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ta(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ee(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ee(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = _0.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = y0.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = v0.exec(t)) ? ee(n[1], n[2], n[3], n[4]) : (n = m0.exec(t)) ? ee(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = w0.exec(t)) ? Pa(n[1], n[2] / 100, n[3] / 100, 1) : (n = b0.exec(t)) ? Pa(n[1], n[2] / 100, n[3] / 100, n[4]) : $a.hasOwnProperty(t) ? Ta($a[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function Ta(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ee(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function $0(t) {
  return t instanceof Gn || (t = jt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function Ur(t, n, e, r) {
  return arguments.length === 1 ? $0(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
$i(q, Ur, Os(Gn, {
  brighter(t) {
    return t = t == null ? Se : Math.pow(Se, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? In : Math.pow(In, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(Ot(this.r), Ot(this.g), Ot(this.b), Ee(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sa,
  // Deprecated! Use color.formatHex.
  formatHex: Sa,
  formatHex8: A0,
  formatRgb: Ea,
  toString: Ea
}));
function Sa() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function A0() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ea() {
  const t = Ee(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ee(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ot(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pt(t) {
  return t = Ot(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Pa(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
}
function Cs(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Gn || (t = jt(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new W(o, s, l, t.opacity);
}
function N0(t, n, e, r) {
  return arguments.length === 1 ? Cs(t) : new W(t, n, e, r ?? 1);
}
function W(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
$i(W, N0, Os(Gn, {
  brighter(t) {
    return t = t == null ? Se : Math.pow(Se, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? In : Math.pow(In, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      mr(t >= 240 ? t - 240 : t + 120, i, r),
      mr(t, i, r),
      mr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new W(ka(this.h), re(this.s), re(this.l), Ee(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ee(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ka(this.h)}, ${re(this.s) * 100}%, ${re(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ka(t) {
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
function E0(t) {
  return (t = +t) == 1 ? Is : function(n, e) {
    return e - n ? S0(n, e, t) : Ai(isNaN(n) ? e : n);
  };
}
function Is(t, n) {
  var e = n - t;
  return e ? T0(t, e) : Ai(isNaN(t) ? n : t);
}
const Pe = function t(n) {
  var e = E0(n);
  function r(i, a) {
    var o = e((i = Ur(i)).r, (a = Ur(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Is(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function P0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function k0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function z0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Ni(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function O0(t, n) {
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
  return function(a) {
    for (i in e) r[i] = e[i](a);
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
  var e = Gr.lastIndex = wr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Gr.exec(t)) && (i = wr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: K(r, i) })), e = wr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? R0(l[0].x) : I0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function Ni(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ai(n) : (e === "number" ? K : e === "string" ? (r = jt(n)) ? (n = r, Pe) : Rs : n instanceof jt ? Pe : n instanceof Date ? O0 : k0(n) ? P0 : Array.isArray(n) ? z0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? C0 : K)(t, n);
}
function q0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var za = 180 / Math.PI, qs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function js(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * za,
    skewX: Math.atan(l) * za,
    scaleX: o,
    scaleY: s
  };
}
var ie;
function j0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? qs : js(n.a, n.b, n.c, n.d, n.e, n.f);
}
function L0(t) {
  return t == null || (ie || (ie = document.createElementNS("http://www.w3.org/2000/svg", "g")), ie.setAttribute("transform", t), !(t = ie.transform.baseVal.consolidate())) ? qs : (t = t.matrix, js(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ls(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: K(u, h) }, { i: g - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
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
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, g = f.length, w; ++d < g; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var F0 = Ls(j0, "px, ", "px)", "deg)"), D0 = Ls(L0, ", ", ")", ")"), un = 0, $n = 0, vn = 0, Fs = 1e3, ke, An, ze = 0, Lt = 0, Ke = 0, qn = typeof performance == "object" && performance.now ? performance : Date, Ds = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ti() {
  return Lt || (Ds(B0), Lt = qn.now() + Ke);
}
function B0() {
  Lt = 0;
}
function Oe() {
  this._call = this._time = this._next = null;
}
Oe.prototype = Bs.prototype = {
  constructor: Oe,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ti() : +e) + (n == null ? 0 : +n), !this._next && An !== this && (An ? An._next = this : ke = this, An = this), this._call = t, this._time = e, Yr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Yr());
  }
};
function Bs(t, n, e) {
  var r = new Oe();
  return r.restart(t, n, e), r;
}
function H0() {
  Ti(), ++un;
  for (var t = ke, n; t; )
    (n = Lt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --un;
}
function Oa() {
  Lt = (ze = qn.now()) + Ke, un = $n = 0;
  try {
    H0();
  } finally {
    un = 0, U0(), Lt = 0;
  }
}
function X0() {
  var t = qn.now(), n = t - ze;
  n > Fs && (Ke -= n, ze = t);
}
function U0() {
  for (var t, n = ke, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ke = e);
  An = t, Yr(r);
}
function Yr(t) {
  if (!un) {
    $n && ($n = clearTimeout($n));
    var n = t - Lt;
    n > 24 ? (t < 1 / 0 && ($n = setTimeout(Oa, t - qn.now() - Ke)), vn && (vn = clearInterval(vn))) : (vn || (ze = qn.now(), vn = setInterval(X0, Fs)), un = 1, Ds(Oa));
  }
}
function Ca(t, n, e) {
  var r = new Oe();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var G0 = bi("start", "end", "cancel", "interrupt"), Y0 = [], Hs = 0, Ia = 1, Vr = 2, _e = 3, Ra = 4, Kr = 5, ye = 6;
function Ze(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  V0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: G0,
    tween: Y0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Hs
  });
}
function Si(t, n) {
  var e = tt(t, n);
  if (e.state > Hs) throw new Error("too late; already scheduled");
  return e;
}
function ot(t, n) {
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
  r[n] = e, e.timer = Bs(a, 0, e.time);
  function a(u) {
    e.state = Ia, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== Ia) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === _e) return Ca(o);
        p.state === Ra ? (p.state = ye, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ye, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Ca(function() {
      e.state === _e && (e.state = Ra, e.timer.restart(s, e.delay, e.time), s(u));
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
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Vr && r.state < Kr, r.state = ye, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
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
    var i = ot(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
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
    var a = ot(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Q0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? W0 : J0)(e, t, n));
}
function Ei(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function Xs(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof jt ? Pe : (e = jt(n)) ? (n = e, Pe) : Rs)(t, n);
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
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function rg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function ig(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function ag(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function og(t, n) {
  var e = Ve(t), r = e === "transform" ? D0 : Xs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? ag : ig)(e, r, Ei(this, "attr." + t, n)) : n == null ? (e.local ? ng : tg)(e) : (e.local ? rg : eg)(e, r, n));
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
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && ug(t, a)), e;
  }
  return i._value = n, i;
}
function cg(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && sg(t, a)), e;
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
    ot(this, t).duration = +n.apply(this, arguments);
  };
}
function _g(t, n) {
  return n = +n, function() {
    ot(this, t).duration = n;
  };
}
function yg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? gg : _g)(n, t)) : tt(this.node(), n).duration;
}
function vg(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ot(this, t).ease = n;
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
    ot(this, t).ease = e;
  };
}
function bg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(wg(this._id, t));
}
function xg(t) {
  typeof t != "function" && (t = Ms(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new pt(r, this._parents, this._name, this._id);
}
function Mg(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new pt(o, this._parents, this._name, this._id);
}
function $g(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ag(t, n, e) {
  var r, i, a = $g(n) ? Si : ot;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
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
function Eg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xi(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ze(u[f], n, e, f, u, tt(c, e)));
  return new pt(a, this._parents, n, e);
}
function Pg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = xs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = tt(c, e), g = 0, w = f.length; g < w; ++g)
          (p = f[g]) && Ze(p, n, e, g, f, d);
        a.push(f), o.push(c);
      }
  return new pt(a, o, n, e);
}
var kg = Un.prototype.constructor;
function zg() {
  return new kg(this._groups, this._parents);
}
function Og(t, n) {
  var e, r, i;
  return function() {
    var a = sn(this, t), o = (this.style.removeProperty(t), sn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Us(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Cg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = sn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Ig(t, n, e) {
  var r, i, a;
  return function() {
    var o = sn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), sn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function Rg(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = ot(this, t), u = l.on, c = l.value[a] == null ? s || (s = Us(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function qg(t, n, e) {
  var r = (t += "") == "transform" ? F0 : Xs;
  return n == null ? this.styleTween(t, Og(t, r)).on("end.style." + t, Us(t)) : typeof n == "function" ? this.styleTween(t, Ig(t, r, Ei(this, "style." + t, n))).each(Rg(this._id, t)) : this.styleTween(t, Cg(t, r, n), e).on("end.style." + t, null);
}
function jg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Lg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && jg(t, o, e)), r;
  }
  return a._value = n, a;
}
function Fg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Lg(t, n, e ?? ""));
}
function Dg(t) {
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
  return this.tween("text", typeof t == "function" ? Bg(Ei(this, "text", t)) : Dg(t == null ? "" : t + ""));
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
  for (var t = this._name, n = this._id, e = Gs(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = tt(l, n);
        Ze(l, t, e, u, o, {
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
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = ot(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
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
  select: Eg,
  selectAll: Pg,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: xg,
  merge: Mg,
  selection: zg,
  transition: Yg,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: Ng,
  attr: og,
  attrTween: fg,
  style: qg,
  styleTween: Fg,
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
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ze(l, t, n, u, o, e || Jg(l, n));
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
    for (let i = 1, a = r.length; i < a; ++i)
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
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Tt) if (!(Math.abs(h * l - u * c) > Tt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, g = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(g), x = Math.sqrt(f), M = a * Math.tan((Zr - Math.acos((g + f - w) / (2 * _ * x))) / 2), y = M / x, m = M / _;
      Math.abs(y - 1) > Tt && this._append`L${n + y * c},${e + y * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Tt || Math.abs(this._y1 - c) > Tt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Wr + Wr), f > t_ ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Tt && this._append`A${r},${r},0,${+(f >= Zr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
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
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function i_(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var a_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ie(t) {
  if (!(n = a_.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Pi({
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
Ie.prototype = Pi.prototype;
function Pi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Pi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function o_(t) {
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
  var r = e[0], i = e[1], a = i - (Ks = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ce(t, Math.max(0, n + a - 1))[0];
}
function qa(t, n) {
  var e = Ce(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ja = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: e_,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => qa(t * 100, n),
  r: qa,
  s: s_,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function La(t) {
  return t;
}
var Fa = Array.prototype.map, Da = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function u_(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? La : r_(Fa.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? La : i_(Fa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Ie(h);
    var f = h.fill, p = h.align, d = h.sign, g = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, y = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : ja[m] || (M === void 0 && (M = 12), y = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var P = g === "$" ? e : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = g === "$" ? r : /[%p]/.test(m) ? o : "", z = ja[m], B = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var O = P, N = k, C, At, j;
      if (m === "c")
        N = z(v) + N, v = "";
      else {
        v = +v;
        var X = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : z(Math.abs(v), M), y && (v = o_(v)), X && +v == 0 && d !== "+" && (X = !1), O = (X ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + O, N = (m === "s" ? Da[8 + Ks / 3] : "") + N + (X && d === "(" ? ")" : ""), B) {
          for (C = -1, At = v.length; ++C < At; )
            if (j = v.charCodeAt(C), 48 > j || j > 57) {
              N = (j === 46 ? i + v.slice(C + 1) : v.slice(C)) + N, v = v.slice(0, C);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var G = O.length + v.length + N.length, E = G < _ ? new Array(_ - G + 1).join(f) : "";
      switch (x && w && (v = n(E + v, E.length ? _ - N.length : 1 / 0), E = ""), p) {
        case "<":
          v = O + v + N + E;
          break;
        case "=":
          v = O + E + v + N;
          break;
        case "^":
          v = E.slice(0, G = E.length >> 1) + O + v + N + E.slice(G);
          break;
        default:
          v = E + O + v + N;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = Ie(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ln(f) / 3))) * 3, g = Math.pow(10, -d), w = Da[8 + d / 3];
    return function(_) {
      return p(g * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ae, We, Zs;
l_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function l_(t) {
  return ae = u_(t), We = ae.format, Zs = ae.formatPrefix, ae;
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
var Ba = [0, 1];
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
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Jr(i, r), a = e(o, a)) : (r = Jr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function v_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Jr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = vp(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function m_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function w_() {
  var t = Ba, n = Ba, e = Ni, r, i, a, o = Zt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Zt && (o = __(t[0], t[f - 1])), s = f > 2 ? v_ : y_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, g_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = q0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Zt, c()) : o !== Zt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function b_() {
  return w_()(Zt, Zt);
}
function x_(t, n, e, r) {
  var i = Mp(t, n, e), a;
  switch (r = Ie(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = f_(i, o)) && (r.precision = a), Zs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = h_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = c_(i)) && (r.precision = a - (r.type === "%") * 2);
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
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Dr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
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
var S_ = Object.prototype, E_ = S_.toString;
function P_(t) {
  return E_.call(t);
}
var k_ = "[object Null]", z_ = "[object Undefined]", Ha = it ? it.toStringTag : void 0;
function dn(t) {
  return t == null ? t === void 0 ? z_ : k_ : Ha && Ha in Object(t) ? T_(t) : P_(t);
}
function fn(t) {
  return t != null && typeof t == "object";
}
var O_ = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || fn(t) && dn(t) == O_;
}
function Qs(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var J = Array.isArray, Xa = it ? it.prototype : void 0, Ua = Xa ? Xa.toString : void 0;
function tu(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Qs(t, tu) + "";
  if (Je(t))
    return Ua ? Ua.call(t) : "";
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
function q_(t) {
  return t && t.slice(0, I_(t) + 1).replace(R_, "");
}
function hn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Ga = NaN, j_ = /^[-+]0x[0-9a-f]+$/i, L_ = /^0b[01]+$/i, F_ = /^0o[0-7]+$/i, D_ = parseInt;
function B_(t) {
  if (typeof t == "number")
    return t;
  if (Je(t))
    return Ga;
  if (hn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = hn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = q_(t);
  var e = L_.test(t);
  return e || F_.test(t) ? D_(t.slice(2), e ? 2 : 8) : j_.test(t) ? Ga : +t;
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
var xr = gt["__core-js_shared__"], Ya = function() {
  var t = /[^.]+$/.exec(xr && xr.keys && xr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Z_(t) {
  return !!Ya && Ya in t;
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
var Q_ = /[\\^$.*+?()[\]{}|]/g, ty = /^\[object .+?Constructor\]$/, ny = Function.prototype, ey = Object.prototype, ry = ny.toString, iy = ey.hasOwnProperty, ay = RegExp(
  "^" + ry.call(iy).replace(Q_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oy(t) {
  if (!hn(t) || Z_(t))
    return !1;
  var n = nu(t) ? ay : ty;
  return n.test(Ht(t));
}
function sy(t, n) {
  return t == null ? void 0 : t[n];
}
function gn(t, n) {
  var e = sy(t, n);
  return oy(e) ? e : void 0;
}
var Qr = gn(gt, "WeakMap"), uy = 9007199254740991, ly = /^(?:0|[1-9]\d*)$/;
function ki(t, n) {
  var e = typeof t;
  return n = n ?? uy, !!n && (e == "number" || e != "symbol" && ly.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function zi(t, n) {
  return t === n || t !== t && n !== n;
}
var cy = 9007199254740991;
function Oi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= cy;
}
function Qe(t) {
  return t != null && Oi(t.length) && !nu(t);
}
function fy(t, n, e) {
  if (!hn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Qe(e) && ki(n, e.length) : r == "string" && n in e) ? zi(e[n], t) : !1;
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
function Va(t) {
  return fn(t) && dn(t) == gy;
}
var eu = Object.prototype, _y = eu.hasOwnProperty, yy = eu.propertyIsEnumerable, Ci = Va(/* @__PURE__ */ function() {
  return arguments;
}()) ? Va : function(t) {
  return fn(t) && _y.call(t, "callee") && !yy.call(t, "callee");
};
function vy() {
  return !1;
}
var ru = typeof exports == "object" && exports && !exports.nodeType && exports, Ka = ru && typeof module == "object" && module && !module.nodeType && module, my = Ka && Ka.exports === ru, Za = my ? gt.Buffer : void 0, wy = Za ? Za.isBuffer : void 0, ti = wy || vy, by = "[object Arguments]", xy = "[object Array]", My = "[object Boolean]", $y = "[object Date]", Ay = "[object Error]", Ny = "[object Function]", Ty = "[object Map]", Sy = "[object Number]", Ey = "[object Object]", Py = "[object RegExp]", ky = "[object Set]", zy = "[object String]", Oy = "[object WeakMap]", Cy = "[object ArrayBuffer]", Iy = "[object DataView]", Ry = "[object Float32Array]", qy = "[object Float64Array]", jy = "[object Int8Array]", Ly = "[object Int16Array]", Fy = "[object Int32Array]", Dy = "[object Uint8Array]", By = "[object Uint8ClampedArray]", Hy = "[object Uint16Array]", Xy = "[object Uint32Array]", T = {};
T[Ry] = T[qy] = T[jy] = T[Ly] = T[Fy] = T[Dy] = T[By] = T[Hy] = T[Xy] = !0;
T[by] = T[xy] = T[Cy] = T[My] = T[Iy] = T[$y] = T[Ay] = T[Ny] = T[Ty] = T[Sy] = T[Ey] = T[Py] = T[ky] = T[zy] = T[Oy] = !1;
function Uy(t) {
  return fn(t) && Oi(t.length) && !!T[dn(t)];
}
function Gy(t) {
  return function(n) {
    return t(n);
  };
}
var iu = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = iu && typeof module == "object" && module && !module.nodeType && module, Yy = Tn && Tn.exports === iu, Mr = Yy && Ws.process, Wa = function() {
  try {
    var t = Tn && Tn.require && Tn.require("util").types;
    return t || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
}(), Ja = Wa && Wa.isTypedArray, au = Ja ? Gy(Ja) : Uy, Vy = Object.prototype, Ky = Vy.hasOwnProperty;
function Zy(t, n) {
  var e = J(t), r = !e && Ci(t), i = !e && !r && ti(t), a = !e && !r && !i && au(t), o = e || r || i || a, s = o ? dy(t.length, String) : [], l = s.length;
  for (var u in t)
    Ky.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
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
var jn = gn(Object, "create");
function iv() {
  this.__data__ = jn ? jn(null) : {}, this.size = 0;
}
function av(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ov = "__lodash_hash_undefined__", sv = Object.prototype, uv = sv.hasOwnProperty;
function lv(t) {
  var n = this.__data__;
  if (jn) {
    var e = n[t];
    return e === ov ? void 0 : e;
  }
  return uv.call(n, t) ? n[t] : void 0;
}
var cv = Object.prototype, fv = cv.hasOwnProperty;
function hv(t) {
  var n = this.__data__;
  return jn ? n[t] !== void 0 : fv.call(n, t);
}
var pv = "__lodash_hash_undefined__";
function dv(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = jn && n === void 0 ? pv : n, this;
}
function Ft(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ft.prototype.clear = iv;
Ft.prototype.delete = av;
Ft.prototype.get = lv;
Ft.prototype.has = hv;
Ft.prototype.set = dv;
function gv() {
  this.__data__ = [], this.size = 0;
}
function tr(t, n) {
  for (var e = t.length; e--; )
    if (zi(t[e][0], n))
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
var Ln = gn(gt, "Map");
function xv() {
  this.size = 0, this.__data__ = {
    hash: new Ft(),
    map: new (Ln || _t)(),
    string: new Ft()
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
function qi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Sv);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (qi.Cache || yt)(), e;
}
qi.Cache = yt;
var Ev = 500;
function Pv(t) {
  var n = qi(t, function(r) {
    return e.size === Ev && e.clear(), r;
  }), e = n.cache;
  return n;
}
var kv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zv = /\\(\\)?/g, Ov = Pv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(kv, function(e, r, i, a) {
    n.push(i ? a.replace(zv, "$1") : r || e);
  }), n;
});
function Cv(t) {
  return t == null ? "" : tu(t);
}
function ou(t, n) {
  return J(t) ? t : Ri(t, n) ? [t] : Ov(Cv(t));
}
function er(t) {
  if (typeof t == "string" || Je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function su(t, n) {
  n = ou(n, t);
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
var Qa = it ? it.isConcatSpreadable : void 0;
function Rv(t) {
  return J(t) || Ci(t) || !!(Qa && t && t[Qa]);
}
function qv(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Rv), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? uu(i, s) : i[i.length] = s;
  }
  return i;
}
function jv(t) {
  var n = t == null ? 0 : t.length;
  return n ? qv(t) : [];
}
function Lv() {
  this.__data__ = new _t(), this.size = 0;
}
function Fv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Dv(t) {
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
    if (!Ln || r.length < Hv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new yt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ct(t) {
  var n = this.__data__ = new _t(t);
  this.size = n.size;
}
ct.prototype.clear = Lv;
ct.prototype.delete = Fv;
ct.prototype.get = Dv;
ct.prototype.has = Bv;
ct.prototype.set = Xv;
function Uv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Gv() {
  return [];
}
var Yv = Object.prototype, Vv = Yv.propertyIsEnumerable, to = Object.getOwnPropertySymbols, Kv = to ? function(t) {
  return t == null ? [] : (t = Object(t), Uv(to(t), function(n) {
    return Vv.call(t, n);
  }));
} : Gv;
function Zv(t, n, e) {
  var r = n(t);
  return J(t) ? r : uu(r, e(t));
}
function no(t) {
  return Zv(t, Ii, Kv);
}
var ni = gn(gt, "DataView"), ei = gn(gt, "Promise"), ri = gn(gt, "Set"), eo = "[object Map]", Wv = "[object Object]", ro = "[object Promise]", io = "[object Set]", ao = "[object WeakMap]", oo = "[object DataView]", Jv = Ht(ni), Qv = Ht(Ln), t1 = Ht(ei), n1 = Ht(ri), e1 = Ht(Qr), bt = dn;
(ni && bt(new ni(new ArrayBuffer(1))) != oo || Ln && bt(new Ln()) != eo || ei && bt(ei.resolve()) != ro || ri && bt(new ri()) != io || Qr && bt(new Qr()) != ao) && (bt = function(t) {
  var n = dn(t), e = n == Wv ? t.constructor : void 0, r = e ? Ht(e) : "";
  if (r)
    switch (r) {
      case Jv:
        return oo;
      case Qv:
        return eo;
      case t1:
        return ro;
      case n1:
        return io;
      case e1:
        return ao;
    }
  return n;
});
var so = gt.Uint8Array, r1 = "__lodash_hash_undefined__";
function i1(t) {
  return this.__data__.set(t, r1), this;
}
function a1(t) {
  return this.__data__.has(t);
}
function Re(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new yt(); ++n < e; )
    this.add(t[n]);
}
Re.prototype.add = Re.prototype.push = i1;
Re.prototype.has = a1;
function o1(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function s1(t, n) {
  return t.has(n);
}
var u1 = 1, l1 = 2;
function lu(t, n, e, r, i, a) {
  var o = e & u1, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & l1 ? new Re() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], g = n[h];
    if (r)
      var w = o ? r(g, d, h, n, t, a) : r(d, g, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!o1(n, function(_, x) {
        if (!s1(p, x) && (d === _ || i(d, _, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function c1(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function f1(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var h1 = 1, p1 = 2, d1 = "[object Boolean]", g1 = "[object Date]", _1 = "[object Error]", y1 = "[object Map]", v1 = "[object Number]", m1 = "[object RegExp]", w1 = "[object Set]", b1 = "[object String]", x1 = "[object Symbol]", M1 = "[object ArrayBuffer]", $1 = "[object DataView]", uo = it ? it.prototype : void 0, $r = uo ? uo.valueOf : void 0;
function A1(t, n, e, r, i, a, o) {
  switch (e) {
    case $1:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case M1:
      return !(t.byteLength != n.byteLength || !a(new so(t), new so(n)));
    case d1:
    case g1:
    case v1:
      return zi(+t, +n);
    case _1:
      return t.name == n.name && t.message == n.message;
    case m1:
    case b1:
      return t == n + "";
    case y1:
      var s = c1;
    case w1:
      var l = r & h1;
      if (s || (s = f1), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= p1, o.set(t, n);
      var c = lu(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case x1:
      if ($r)
        return $r.call(t) == $r.call(n);
  }
  return !1;
}
var N1 = 1, T1 = Object.prototype, S1 = T1.hasOwnProperty;
function E1(t, n, e, r, i, a) {
  var o = e & N1, s = no(t), l = s.length, u = no(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : S1.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = o ? r(x, _, f, n, t, a) : r(_, x, f, t, n, a);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, a) : M)) {
      g = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (g = !1);
  }
  return a.delete(t), a.delete(n), g;
}
var P1 = 1, lo = "[object Arguments]", co = "[object Array]", oe = "[object Object]", k1 = Object.prototype, fo = k1.hasOwnProperty;
function z1(t, n, e, r, i, a) {
  var o = J(t), s = J(n), l = o ? co : bt(t), u = s ? co : bt(n);
  l = l == lo ? oe : l, u = u == lo ? oe : u;
  var c = l == oe, h = u == oe, f = l == u;
  if (f && ti(t)) {
    if (!ti(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new ct()), o || au(t) ? lu(t, n, e, r, i, a) : A1(t, n, l, e, r, i, a);
  if (!(e & P1)) {
    var p = c && fo.call(t, "__wrapped__"), d = h && fo.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new ct()), i(g, w, e, r, a);
    }
  }
  return f ? (a || (a = new ct()), E1(t, n, e, r, i, a)) : !1;
}
function ji(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !fn(t) && !fn(n) ? t !== t && n !== n : z1(t, n, e, r, ji, i);
}
var O1 = 1, C1 = 2;
function I1(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ct(), h;
      if (!(h === void 0 ? ji(u, l, O1 | C1, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function cu(t) {
  return t === t && !hn(t);
}
function R1(t) {
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
function q1(t) {
  var n = R1(t);
  return n.length == 1 && n[0][2] ? fu(n[0][0], n[0][1]) : function(e) {
    return e === t || I1(e, t, n);
  };
}
function j1(t, n) {
  return t != null && n in Object(t);
}
function L1(t, n, e) {
  n = ou(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = er(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Oi(i) && ki(o, i) && (J(t) || Ci(t)));
}
function F1(t, n) {
  return t != null && L1(t, n, j1);
}
var D1 = 1, B1 = 2;
function H1(t, n) {
  return Ri(t) && cu(n) ? fu(er(t), n) : function(e) {
    var r = Iv(e, t);
    return r === void 0 && r === n ? F1(e, t) : ji(n, r, D1 | B1);
  };
}
function X1(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function U1(t) {
  return function(n) {
    return su(n, t);
  };
}
function G1(t) {
  return Ri(t) ? X1(er(t)) : U1(t);
}
function Y1(t) {
  return typeof t == "function" ? t : t == null ? U_ : typeof t == "object" ? J(t) ? H1(t[0], t[1]) : q1(t) : G1(t);
}
function V1(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var K1 = V1();
function Z1(t, n) {
  return t && K1(t, n, Ii);
}
function W1(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Qe(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var J1 = W1(Z1);
function Q1(t, n) {
  var e = -1, r = Qe(t) ? Array(t.length) : [];
  return J1(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function ho(t, n) {
  var e = J(t) ? Qs : Q1;
  return e(t, Y1(n));
}
var tm = Math.ceil, nm = Math.max;
function em(t, n, e, r) {
  for (var i = -1, a = nm(tm((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function rm(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && fy(n, e, r) && (e = r = void 0), n = br(n), e === void 0 ? (e = n, n = 0) : e = br(e), r = r === void 0 ? n < e ? 1 : -1 : br(r), em(n, e, r);
  };
}
var im = rm();
const am = (t, n, e = 12, r = 12) => {
  const i = cn().domain([0, e]).range([0, t]), a = cn().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return im((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = jv(ho(s, function(u) {
        return ho(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, om = "_widget_1aazq_40", sm = "_label_1aazq_58", um = "_lit_1aazq_63", lm = "_button_1aazq_67", cm = "_symbol_1aazq_67", fm = "_radio_1aazq_68", hm = "_radiobutton_1aazq_68", pm = "_selected_1aazq_74", dm = "_toggle_1aazq_75", gm = "_slider_1aazq_84", _m = "_track_1aazq_84", ym = "_track_overlay_1aazq_89", vm = "_handle_1aazq_97", b = {
  widget: om,
  label: sm,
  lit: um,
  button: lm,
  symbol: cm,
  radio: fm,
  radiobutton: hm,
  selected: pm,
  toggle: dm,
  slider: gm,
  track: _m,
  track_overlay: ym,
  handle: vm
}, Li = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Fi = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, mm = (t = 1) => {
  const n = nt();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, wm = (t = 1) => {
  const n = nt(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, bm = (t = 1) => {
  const n = nt();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, xm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = nt();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Mm = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, $m = (t = 1) => {
  const n = nt(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Am = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Nm = (t = 1) => {
  var n = nt(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Tm = (t = 1) => {
  const n = nt(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ii = (t) => {
  switch (t) {
    case "play":
      return mm;
    case "forward":
      return wm;
    case "back":
      return bm;
    case "pause":
      return xm;
    case "reload":
      return Mm;
    case "capture":
      return $m;
    case "rewind":
      return Am;
    case "stop":
      return Nm;
    case "push":
      return Tm;
  }
}, Di = () => {
  const t = "button";
  var n = Li(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
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
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
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
}, Sm = () => {
  const t = "slider", n = We(".3f");
  var e = Li(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, c = function(_) {
  }, h = function(_) {
  }, f = [0, 1], p = 0, d = null, g = cn().domain(f).range([0, r]).clamp(!0);
  const w = function(_, x, M = f) {
    const y = _.select("#slider_" + e);
    g.domain(M), p = x, y.selectAll("." + b.handle).transition().attr("cx", g(x)), o && y.select("." + b.label).text(d + " = " + n(p)), c(), h();
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
      return typeof _ > "u" ? a : (a = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
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
}, Em = () => {
  const t = "toggle";
  var n = Li(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
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
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
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
}, Pm = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = I(a).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    I(this).classed(b.lit, !0), I(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(b.lit, !1), I(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), o.append("path").attr("d", ii(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = Fi(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, hu = (t, n) => {
  const e = nt();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, km = (t, n) => {
  const e = We(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = I(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", hu(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const g = Hr(d, this)[0];
    t.value(o.invert(g)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    d0().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -te([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? te([t.girth() / 2, t.knob()]) + 7 : -te([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, zm = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = I(o).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", hu(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Fi(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, Om = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = $p(o), l = cn().domain([0, o - 1]).range([0, t.size()]), u = cn().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = I(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (g) => "b" + g).attr("transform", (g) => t.orientation() == "vertical" ? "translate(0," + u(g) + ")" : "translate(" + l(g) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", b.background).on("mouseover", function() {
    I(this).classed(b.lit, !0), I(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    I(this).classed(b.lit, !1), I(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), p.attr("class", b.symbol), p.filter((g) => g == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const d = Fi(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(g, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, Ar = (t, n) => {
  switch (t.type) {
    case "button":
      return Pm(t);
    case "slider":
      return km(t);
    case "radio":
      return Om(t);
    case "toggle":
      return zm(t);
  }
}, Cm = (t, n) => {
  const e = am(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Gc("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
};
var pu = typeof global == "object" && global && global.Object === Object && global, Im = typeof self == "object" && self && self.Object === Object && self, vt = pu || Im || Function("return this")(), $t = vt.Symbol, du = Object.prototype, Rm = du.hasOwnProperty, qm = du.toString, wn = $t ? $t.toStringTag : void 0;
function jm(t) {
  var n = Rm.call(t, wn), e = t[wn];
  try {
    t[wn] = void 0;
    var r = !0;
  } catch {
  }
  var i = qm.call(t);
  return r && (n ? t[wn] = e : delete t[wn]), i;
}
var Lm = Object.prototype, Fm = Lm.toString;
function Dm(t) {
  return Fm.call(t);
}
var Bm = "[object Null]", Hm = "[object Undefined]", po = $t ? $t.toStringTag : void 0;
function Xt(t) {
  return t == null ? t === void 0 ? Hm : Bm : po && po in Object(t) ? jm(t) : Dm(t);
}
function Dt(t) {
  return t != null && typeof t == "object";
}
var Xm = "[object Symbol]";
function rr(t) {
  return typeof t == "symbol" || Dt(t) && Xt(t) == Xm;
}
function ir(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var U = Array.isArray, go = $t ? $t.prototype : void 0, _o = go ? go.toString : void 0;
function gu(t) {
  if (typeof t == "string")
    return t;
  if (U(t))
    return ir(t, gu) + "";
  if (rr(t))
    return _o ? _o.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Um = /\s/;
function Gm(t) {
  for (var n = t.length; n-- && Um.test(t.charAt(n)); )
    ;
  return n;
}
var Ym = /^\s+/;
function Vm(t) {
  return t && t.slice(0, Gm(t) + 1).replace(Ym, "");
}
function dt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var yo = NaN, Km = /^[-+]0x[0-9a-f]+$/i, Zm = /^0b[01]+$/i, Wm = /^0o[0-7]+$/i, Jm = parseInt;
function Qm(t) {
  if (typeof t == "number")
    return t;
  if (rr(t))
    return yo;
  if (dt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = dt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Vm(t);
  var e = Zm.test(t);
  return e || Wm.test(t) ? Jm(t.slice(2), e ? 2 : 8) : Km.test(t) ? yo : +t;
}
var tw = 1 / 0, nw = 17976931348623157e292;
function Nr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Qm(t), t === tw || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * nw;
  }
  return t === t ? t : 0;
}
function _u(t) {
  return t;
}
var ew = "[object AsyncFunction]", rw = "[object Function]", iw = "[object GeneratorFunction]", aw = "[object Proxy]";
function yu(t) {
  if (!dt(t))
    return !1;
  var n = Xt(t);
  return n == rw || n == iw || n == ew || n == aw;
}
var Tr = vt["__core-js_shared__"], vo = function() {
  var t = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ow(t) {
  return !!vo && vo in t;
}
var sw = Function.prototype, uw = sw.toString;
function Ut(t) {
  if (t != null) {
    try {
      return uw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var lw = /[\\^$.*+?()[\]{}|]/g, cw = /^\[object .+?Constructor\]$/, fw = Function.prototype, hw = Object.prototype, pw = fw.toString, dw = hw.hasOwnProperty, gw = RegExp(
  "^" + pw.call(dw).replace(lw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _w(t) {
  if (!dt(t) || ow(t))
    return !1;
  var n = yu(t) ? gw : cw;
  return n.test(Ut(t));
}
function yw(t, n) {
  return t == null ? void 0 : t[n];
}
function Gt(t, n) {
  var e = yw(t, n);
  return _w(e) ? e : void 0;
}
var ai = Gt(vt, "WeakMap"), mo = function() {
  try {
    var t = Gt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function vw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var mw = 9007199254740991, ww = /^(?:0|[1-9]\d*)$/;
function ar(t, n) {
  var e = typeof t;
  return n = n ?? mw, !!n && (e == "number" || e != "symbol" && ww.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function bw(t, n, e) {
  n == "__proto__" && mo ? mo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function or(t, n) {
  return t === n || t !== t && n !== n;
}
var xw = Object.prototype, Mw = xw.hasOwnProperty;
function $w(t, n, e) {
  var r = t[n];
  (!(Mw.call(t, n) && or(r, e)) || e === void 0 && !(n in t)) && bw(t, n, e);
}
var Aw = 9007199254740991;
function Bi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Aw;
}
function Yn(t) {
  return t != null && Bi(t.length) && !yu(t);
}
function Nw(t, n, e) {
  if (!dt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Yn(e) && ar(n, e.length) : r == "string" && n in e) ? or(e[n], t) : !1;
}
var Tw = Object.prototype;
function vu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Tw;
  return t === e;
}
function Sw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Ew = "[object Arguments]";
function wo(t) {
  return Dt(t) && Xt(t) == Ew;
}
var mu = Object.prototype, Pw = mu.hasOwnProperty, kw = mu.propertyIsEnumerable, wu = wo(/* @__PURE__ */ function() {
  return arguments;
}()) ? wo : function(t) {
  return Dt(t) && Pw.call(t, "callee") && !kw.call(t, "callee");
};
function zw() {
  return !1;
}
var bu = typeof exports == "object" && exports && !exports.nodeType && exports, bo = bu && typeof module == "object" && module && !module.nodeType && module, Ow = bo && bo.exports === bu, xo = Ow ? vt.Buffer : void 0, Cw = xo ? xo.isBuffer : void 0, oi = Cw || zw, Iw = "[object Arguments]", Rw = "[object Array]", qw = "[object Boolean]", jw = "[object Date]", Lw = "[object Error]", Fw = "[object Function]", Dw = "[object Map]", Bw = "[object Number]", Hw = "[object Object]", Xw = "[object RegExp]", Uw = "[object Set]", Gw = "[object String]", Yw = "[object WeakMap]", Vw = "[object ArrayBuffer]", Kw = "[object DataView]", Zw = "[object Float32Array]", Ww = "[object Float64Array]", Jw = "[object Int8Array]", Qw = "[object Int16Array]", tb = "[object Int32Array]", nb = "[object Uint8Array]", eb = "[object Uint8ClampedArray]", rb = "[object Uint16Array]", ib = "[object Uint32Array]", S = {};
S[Zw] = S[Ww] = S[Jw] = S[Qw] = S[tb] = S[nb] = S[eb] = S[rb] = S[ib] = !0;
S[Iw] = S[Rw] = S[Vw] = S[qw] = S[Kw] = S[jw] = S[Lw] = S[Fw] = S[Dw] = S[Bw] = S[Hw] = S[Xw] = S[Uw] = S[Gw] = S[Yw] = !1;
function ab(t) {
  return Dt(t) && Bi(t.length) && !!S[Xt(t)];
}
function ob(t) {
  return function(n) {
    return t(n);
  };
}
var xu = typeof exports == "object" && exports && !exports.nodeType && exports, Sn = xu && typeof module == "object" && module && !module.nodeType && module, sb = Sn && Sn.exports === xu, Sr = sb && pu.process, Mo = function() {
  try {
    var t = Sn && Sn.require && Sn.require("util").types;
    return t || Sr && Sr.binding && Sr.binding("util");
  } catch {
  }
}(), $o = Mo && Mo.isTypedArray, Mu = $o ? ob($o) : ab, ub = Object.prototype, lb = ub.hasOwnProperty;
function $u(t, n) {
  var e = U(t), r = !e && wu(t), i = !e && !r && oi(t), a = !e && !r && !i && Mu(t), o = e || r || i || a, s = o ? Sw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || lb.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ar(u, l))) && s.push(u);
  return s;
}
function Au(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var cb = Au(Object.keys, Object), fb = Object.prototype, hb = fb.hasOwnProperty;
function pb(t) {
  if (!vu(t))
    return cb(t);
  var n = [];
  for (var e in Object(t))
    hb.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function sr(t) {
  return Yn(t) ? $u(t) : pb(t);
}
function db(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var gb = Object.prototype, _b = gb.hasOwnProperty;
function yb(t) {
  if (!dt(t))
    return db(t);
  var n = vu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !_b.call(t, r)) || e.push(r);
  return e;
}
function vb(t) {
  return Yn(t) ? $u(t, !0) : yb(t);
}
var mb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wb = /^\w*$/;
function Hi(t, n) {
  if (U(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || rr(t) ? !0 : wb.test(t) || !mb.test(t) || n != null && t in Object(n);
}
var Fn = Gt(Object, "create");
function bb() {
  this.__data__ = Fn ? Fn(null) : {}, this.size = 0;
}
function xb(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Mb = "__lodash_hash_undefined__", $b = Object.prototype, Ab = $b.hasOwnProperty;
function Nb(t) {
  var n = this.__data__;
  if (Fn) {
    var e = n[t];
    return e === Mb ? void 0 : e;
  }
  return Ab.call(n, t) ? n[t] : void 0;
}
var Tb = Object.prototype, Sb = Tb.hasOwnProperty;
function Eb(t) {
  var n = this.__data__;
  return Fn ? n[t] !== void 0 : Sb.call(n, t);
}
var Pb = "__lodash_hash_undefined__";
function kb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Fn && n === void 0 ? Pb : n, this;
}
function Bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = bb;
Bt.prototype.delete = xb;
Bt.prototype.get = Nb;
Bt.prototype.has = Eb;
Bt.prototype.set = kb;
function zb() {
  this.__data__ = [], this.size = 0;
}
function ur(t, n) {
  for (var e = t.length; e--; )
    if (or(t[e][0], n))
      return e;
  return -1;
}
var Ob = Array.prototype, Cb = Ob.splice;
function Ib(t) {
  var n = this.__data__, e = ur(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Cb.call(n, e, 1), --this.size, !0;
}
function Rb(t) {
  var n = this.__data__, e = ur(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function qb(t) {
  return ur(this.__data__, t) > -1;
}
function jb(t, n) {
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
mt.prototype.clear = zb;
mt.prototype.delete = Ib;
mt.prototype.get = Rb;
mt.prototype.has = qb;
mt.prototype.set = jb;
var Dn = Gt(vt, "Map");
function Lb() {
  this.size = 0, this.__data__ = {
    hash: new Bt(),
    map: new (Dn || mt)(),
    string: new Bt()
  };
}
function Fb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function lr(t, n) {
  var e = t.__data__;
  return Fb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Db(t) {
  var n = lr(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Bb(t) {
  return lr(this, t).get(t);
}
function Hb(t) {
  return lr(this, t).has(t);
}
function Xb(t, n) {
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
wt.prototype.clear = Lb;
wt.prototype.delete = Db;
wt.prototype.get = Bb;
wt.prototype.has = Hb;
wt.prototype.set = Xb;
var Ub = "Expected a function";
function Xi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Ub);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Xi.Cache || wt)(), e;
}
Xi.Cache = wt;
var Gb = 500;
function Yb(t) {
  var n = Xi(t, function(r) {
    return e.size === Gb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Vb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kb = /\\(\\)?/g, Zb = Yb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Vb, function(e, r, i, a) {
    n.push(i ? a.replace(Kb, "$1") : r || e);
  }), n;
});
function cr(t) {
  return t == null ? "" : gu(t);
}
function fr(t, n) {
  return U(t) ? t : Hi(t, n) ? [t] : Zb(cr(t));
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
function Wb(t, n, e) {
  var r = t == null ? void 0 : Ui(t, n);
  return r === void 0 ? e : r;
}
function Nu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Jb = Au(Object.getPrototypeOf, Object);
function Qb(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function tx(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Qb(t, n, e);
}
var nx = "\\ud800-\\udfff", ex = "\\u0300-\\u036f", rx = "\\ufe20-\\ufe2f", ix = "\\u20d0-\\u20ff", ax = ex + rx + ix, ox = "\\ufe0e\\ufe0f", sx = "\\u200d", ux = RegExp("[" + sx + nx + ax + ox + "]");
function Tu(t) {
  return ux.test(t);
}
function lx(t) {
  return t.split("");
}
var Su = "\\ud800-\\udfff", cx = "\\u0300-\\u036f", fx = "\\ufe20-\\ufe2f", hx = "\\u20d0-\\u20ff", px = cx + fx + hx, dx = "\\ufe0e\\ufe0f", gx = "[" + Su + "]", si = "[" + px + "]", ui = "\\ud83c[\\udffb-\\udfff]", _x = "(?:" + si + "|" + ui + ")", Eu = "[^" + Su + "]", Pu = "(?:\\ud83c[\\udde6-\\uddff]){2}", ku = "[\\ud800-\\udbff][\\udc00-\\udfff]", yx = "\\u200d", zu = _x + "?", Ou = "[" + dx + "]?", vx = "(?:" + yx + "(?:" + [Eu, Pu, ku].join("|") + ")" + Ou + zu + ")*", mx = Ou + zu + vx, wx = "(?:" + [Eu + si + "?", si, Pu, ku, gx].join("|") + ")", bx = RegExp(ui + "(?=" + ui + ")|" + wx + mx, "g");
function xx(t) {
  return t.match(bx) || [];
}
function Mx(t) {
  return Tu(t) ? xx(t) : lx(t);
}
function $x(t) {
  return function(n) {
    n = cr(n);
    var e = Tu(n) ? Mx(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? tx(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Ax = $x("toUpperCase");
function Nx(t) {
  return Ax(cr(t).toLowerCase());
}
function Tx() {
  this.__data__ = new mt(), this.size = 0;
}
function Sx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Ex(t) {
  return this.__data__.get(t);
}
function Px(t) {
  return this.__data__.has(t);
}
var kx = 200;
function zx(t, n) {
  var e = this.__data__;
  if (e instanceof mt) {
    var r = e.__data__;
    if (!Dn || r.length < kx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new wt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ft(t) {
  var n = this.__data__ = new mt(t);
  this.size = n.size;
}
ft.prototype.clear = Tx;
ft.prototype.delete = Sx;
ft.prototype.get = Ex;
ft.prototype.has = Px;
ft.prototype.set = zx;
function Cu(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Iu() {
  return [];
}
var Ox = Object.prototype, Cx = Ox.propertyIsEnumerable, Ao = Object.getOwnPropertySymbols, Ru = Ao ? function(t) {
  return t == null ? [] : (t = Object(t), Cu(Ao(t), function(n) {
    return Cx.call(t, n);
  }));
} : Iu, Ix = Object.getOwnPropertySymbols, Rx = Ix ? function(t) {
  for (var n = []; t; )
    Nu(n, Ru(t)), t = Jb(t);
  return n;
} : Iu;
function qu(t, n, e) {
  var r = n(t);
  return U(t) ? r : Nu(r, e(t));
}
function No(t) {
  return qu(t, sr, Ru);
}
function qx(t) {
  return qu(t, vb, Rx);
}
var li = Gt(vt, "DataView"), ci = Gt(vt, "Promise"), fi = Gt(vt, "Set"), To = "[object Map]", jx = "[object Object]", So = "[object Promise]", Eo = "[object Set]", Po = "[object WeakMap]", ko = "[object DataView]", Lx = Ut(li), Fx = Ut(Dn), Dx = Ut(ci), Bx = Ut(fi), Hx = Ut(ai), lt = Xt;
(li && lt(new li(new ArrayBuffer(1))) != ko || Dn && lt(new Dn()) != To || ci && lt(ci.resolve()) != So || fi && lt(new fi()) != Eo || ai && lt(new ai()) != Po) && (lt = function(t) {
  var n = Xt(t), e = n == jx ? t.constructor : void 0, r = e ? Ut(e) : "";
  if (r)
    switch (r) {
      case Lx:
        return ko;
      case Fx:
        return To;
      case Dx:
        return So;
      case Bx:
        return Eo;
      case Hx:
        return Po;
    }
  return n;
});
var zo = vt.Uint8Array, Xx = "__lodash_hash_undefined__";
function Ux(t) {
  return this.__data__.set(t, Xx), this;
}
function Gx(t) {
  return this.__data__.has(t);
}
function qe(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new wt(); ++n < e; )
    this.add(t[n]);
}
qe.prototype.add = qe.prototype.push = Ux;
qe.prototype.has = Gx;
function Yx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Vx(t, n) {
  return t.has(n);
}
var Kx = 1, Zx = 2;
function ju(t, n, e, r, i, a) {
  var o = e & Kx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Zx ? new qe() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], g = n[h];
    if (r)
      var w = o ? r(g, d, h, n, t, a) : r(d, g, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Yx(n, function(_, x) {
        if (!Vx(p, x) && (d === _ || i(d, _, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Lu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Wx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Jx = 1, Qx = 2, t2 = "[object Boolean]", n2 = "[object Date]", e2 = "[object Error]", r2 = "[object Map]", i2 = "[object Number]", a2 = "[object RegExp]", o2 = "[object Set]", s2 = "[object String]", u2 = "[object Symbol]", l2 = "[object ArrayBuffer]", c2 = "[object DataView]", Oo = $t ? $t.prototype : void 0, Er = Oo ? Oo.valueOf : void 0;
function f2(t, n, e, r, i, a, o) {
  switch (e) {
    case c2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case l2:
      return !(t.byteLength != n.byteLength || !a(new zo(t), new zo(n)));
    case t2:
    case n2:
    case i2:
      return or(+t, +n);
    case e2:
      return t.name == n.name && t.message == n.message;
    case a2:
    case s2:
      return t == n + "";
    case r2:
      var s = Lu;
    case o2:
      var l = r & Jx;
      if (s || (s = Wx), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Qx, o.set(t, n);
      var c = ju(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case u2:
      if (Er)
        return Er.call(t) == Er.call(n);
  }
  return !1;
}
var h2 = 1, p2 = Object.prototype, d2 = p2.hasOwnProperty;
function g2(t, n, e, r, i, a) {
  var o = e & h2, s = No(t), l = s.length, u = No(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : d2.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = o ? r(x, _, f, n, t, a) : r(_, x, f, t, n, a);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, a) : M)) {
      g = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (g = !1);
  }
  return a.delete(t), a.delete(n), g;
}
var _2 = 1, Co = "[object Arguments]", Io = "[object Array]", se = "[object Object]", y2 = Object.prototype, Ro = y2.hasOwnProperty;
function v2(t, n, e, r, i, a) {
  var o = U(t), s = U(n), l = o ? Io : lt(t), u = s ? Io : lt(n);
  l = l == Co ? se : l, u = u == Co ? se : u;
  var c = l == se, h = u == se, f = l == u;
  if (f && oi(t)) {
    if (!oi(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new ft()), o || Mu(t) ? ju(t, n, e, r, i, a) : f2(t, n, l, e, r, i, a);
  if (!(e & _2)) {
    var p = c && Ro.call(t, "__wrapped__"), d = h && Ro.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new ft()), i(g, w, e, r, a);
    }
  }
  return f ? (a || (a = new ft()), g2(t, n, e, r, i, a)) : !1;
}
function Gi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Dt(t) && !Dt(n) ? t !== t && n !== n : v2(t, n, e, r, Gi, i);
}
var m2 = 1, w2 = 2;
function b2(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ft(), h;
      if (!(h === void 0 ? Gi(u, l, m2 | w2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Fu(t) {
  return t === t && !dt(t);
}
function x2(t) {
  for (var n = sr(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Fu(i)];
  }
  return n;
}
function Du(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function M2(t) {
  var n = x2(t);
  return n.length == 1 && n[0][2] ? Du(n[0][0], n[0][1]) : function(e) {
    return e === t || b2(e, t, n);
  };
}
function $2(t, n) {
  return t != null && n in Object(t);
}
function Bu(t, n, e) {
  n = fr(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Vn(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Bi(i) && ar(o, i) && (U(t) || wu(t)));
}
function A2(t, n) {
  return t != null && Bu(t, n, $2);
}
var N2 = 1, T2 = 2;
function S2(t, n) {
  return Hi(t) && Fu(n) ? Du(Vn(t), n) : function(e) {
    var r = Wb(e, t);
    return r === void 0 && r === n ? A2(e, t) : Gi(n, r, N2 | T2);
  };
}
function E2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function P2(t) {
  return function(n) {
    return Ui(n, t);
  };
}
function k2(t) {
  return Hi(t) ? E2(Vn(t)) : P2(t);
}
function hr(t) {
  return typeof t == "function" ? t : t == null ? _u : typeof t == "object" ? U(t) ? S2(t[0], t[1]) : M2(t) : k2(t);
}
function z2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var O2 = z2();
function C2(t, n) {
  return t && O2(t, n, sr);
}
function I2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Yn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Yi = I2(C2);
function R2(t) {
  return typeof t == "function" ? t : _u;
}
function Ct(t, n) {
  var e = U(t) ? vw : Yi;
  return e(t, R2(n));
}
function q2(t, n) {
  return ir(n, function(e) {
    return [e, t[e]];
  });
}
function j2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var L2 = "[object Map]", F2 = "[object Set]";
function D2(t) {
  return function(n) {
    var e = lt(n);
    return e == L2 ? Lu(n) : e == F2 ? j2(n) : q2(n, t(n));
  };
}
var Hu = D2(sr);
function B2(t, n) {
  var e = [];
  return Yi(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function ue(t, n) {
  var e = U(t) ? Cu : B2;
  return e(t, hr(n));
}
function H2(t, n) {
  var e = -1, r = Yn(t) ? Array(t.length) : [];
  return Yi(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function _n(t, n) {
  var e = U(t) ? ir : H2;
  return e(t, hr(n));
}
var X2 = Object.prototype, U2 = X2.hasOwnProperty;
function G2(t, n) {
  return t != null && U2.call(t, n);
}
function Xu(t, n) {
  return t != null && Bu(t, n, G2);
}
var Y2 = "[object Boolean]";
function V2(t) {
  return t === !0 || t === !1 || Dt(t) && Xt(t) == Y2;
}
function K2(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var Z2 = NaN;
function W2(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? K2(t, n) / e : Z2;
}
function Vt(t, n) {
  return W2(t, hr(n));
}
function J2(t, n, e, r) {
  if (!dt(t))
    return t;
  n = fr(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Vn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = dt(c) ? c : ar(n[i + 1]) ? [] : {});
    }
    $w(s, l, u), s = s[l];
  }
  return t;
}
function Q2(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Ui(t, o);
    e(s, o) && J2(a, fr(o, t), s);
  }
  return a;
}
function Uu(t, n) {
  if (t == null)
    return {};
  var e = ir(qx(t), function(r) {
    return [r];
  });
  return n = hr(n), Q2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var tM = Math.ceil, nM = Math.max;
function eM(t, n, e, r) {
  for (var i = -1, a = nM(tM((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function rM(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Nw(n, e, r) && (e = r = void 0), n = Nr(n), e === void 0 ? (e = n, n = 0) : e = Nr(e), r = r === void 0 ? n < e ? 1 : -1 : Nr(r), eM(n, e, r);
  };
}
var Vi = rM();
function iM() {
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
    n[1].id = n[0], Xu(n[1], "label") || (n[1].label = iM(Nx(n[0]), /_/g, " "));
  }
), Yu = (t) => _n(Hu(t), (n) => n[1]), Vu = (t, n) => Ct(t, (e, r) => e.widget = n[r]), aM = (t) => Uu(t, (n) => Xu(n, "range")), oM = (t) => Uu(t, (n) => V2(n.default)), Y = Xn().domain([0, 360]).range([0, 2 * Math.PI]), le = Xn().range([0, 360]).domain([0, 2 * Math.PI]), sM = (t, n) => {
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
  var e = t * Math.cos(n / 360 * 2 * Math.PI), r = -t * Math.sin(n / 360 * 2 * Math.PI), i = -e, a = r, o = n < 180 ? 0 : 1;
  return "M 0,0 L " + e + "," + r + " A " + t + " " + t + " 0 " + o + " 1 " + i + "," + a + "L 0,0";
}
const uM = "_attract_scope_190m5_2", lM = "_orient_scope_190m5_8", cM = "_repell_scope_190m5_14", fM = "_speed_190m5_20", hM = "_drop_190m5_26", pM = "_agent_190m5_32", L = {
  attract_scope: uM,
  orient_scope: lM,
  repell_scope: cM,
  speed: fM,
  drop: hM,
  agent: pM
}, Ki = aM($), Zi = oM($);
Gu(Ki);
Gu(Zi);
const Zu = Yu(Ki), Wu = Yu(Zi), En = _n(
  Zu,
  (t) => Sm().id(t.id).label(t.label).range(t.range).value(t.default).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob).size(A.widgets.slider_size)
), Bn = _n(
  Wu,
  (t) => Em().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos).size(13)
);
Vu(Wu, Bn);
Vu(Zu, En);
const xt = Di().actions(["play", "pause"]), pr = Di().actions(["back"]), dr = Di().actions(["rewind"]), dM = [xt, pr, dr];
Bn[0].label("Orli's Magic Switch");
const gM = (t, n) => {
  const e = n.position(A.widgets.cartoon_anchor.x, A.widgets.cartoon_anchor.y), r = t.append("g").attr("id", "cartoon").attr("transform", "translate(" + e.x + "," + e.y + ")");
  r.append("path").attr("d", nn(A.widgets.cartoon_size * $.attraction_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)).attr("class", L.attract_scope), r.append("path").attr("d", nn(A.widgets.cartoon_size * $.alignment_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)).attr("class", L.orient_scope), r.append("path").attr("d", nn(A.widgets.cartoon_speed_factor * A.widgets.cartoon_size * $.speed.widget.value(), 90 + $.wiggle.widget.value())).attr("class", L.speed), r.append("path").attr("class", L.drop).attr("transform", "scale(4)translate(0,3)rotate(-90)").attr("d", Ku(A.widgets.cartoon_tadpole_size)), r.append("circle").attr("r", A.widgets.cartoon_size * $.collision_radius.widget.value()).attr("class", L.repell_scope);
  const i = n.position(A.widgets.slider_anchor.x, Vi(En.length).map((o) => A.widgets.slider_anchor.y + A.widgets.slider_gap * o)), a = n.position(A.widgets.toggle_anchor.x, A.widgets.toggle_anchor.y);
  En.forEach((o, s) => o.position(i[s])), Bn[0].position(a).labelposition(A.widgets.toggle_label_pos), xt.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), dr.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), pr.position(n.position(A.widgets.resetbutton_anchor.x, A.widgets.resetbutton_anchor.y)), t.selectAll(null).data(En).enter().append(Ar), t.selectAll(null).data(Bn).enter().append(Ar), t.selectAll(null).data(dM).enter().append(Ar);
}, _M = (t) => {
  Ct(Ki, (n) => n.widget.reset(t, n.default)), Ct(Zi, (n) => n.widget.reset(t, n.default));
}, je = $.L, qo = $.dt, yM = $.N;
var St = [];
const vM = () => {
  $.timer = {}, $.tick = 0, St = _n(Vi(yM), (t) => ({
    id: t,
    x: Math.random() * je,
    y: Math.random() * je,
    theta: Math.random() * 360,
    speed_var: 1 + Math.random() * $.speed_variation
  }));
}, mM = () => {
  $.tick++;
  let t = Math.cos((180 - $.blind_spot.widget.value() / 2) / 180 * Math.PI);
  Ct(St, (n) => {
    let e = [];
    var r, i, a, o;
    if (e = ue(St, (u) => sM(n, u) < $.collision_radius.widget.value() && u.id != n.id), e.length > 0)
      r = n.x - Vt(e, (u) => u.x), i = n.y - Vt(e, (u) => u.y);
    else {
      const u = Math.cos(Y(n.theta)), c = Math.sin(Y(n.theta)), h = Math.sqrt(u * u + c * c), f = ue(St, (g) => {
        let w = g.x - n.x, _ = g.y - n.y;
        g.r = Math.sqrt(w * w + _ * _);
        let x = (w * u + _ * c) / (h * g.r);
        return g.r < $.attraction_radius.widget.value() && x > t && g.id != n.id;
      }), p = ue(f, (g) => g.r < $.alignment_radius.widget.value()), d = ue(f, (g) => g.r > $.alignment_radius.widget.value());
      if (a = n.theta, o = n.theta, p.length > 0) {
        const g = Vt(p, (_) => Math.cos(Y(_.theta))), w = Vt(p, (_) => Math.sin(Y(_.theta)));
        a = le(Math.atan2(w, g));
      }
      if (d.length > 0) {
        const g = Vt(d, (_) => _.x), w = Vt(d, (_) => _.y);
        o = le(Math.atan2(w - n.y, g - n.x));
      }
      r = 0.5 * (Math.cos(Y(a)) + Math.cos(Y(o))), i = 0.5 * (Math.sin(Y(a)) + Math.sin(Y(o)));
    }
    const s = Math.cos(Y(n.theta)) + $.angular_increment * r, l = Math.sin(Y(n.theta)) + $.angular_increment * i;
    n.theta = le(Math.atan2(l, s));
  }), Ct(St, (n) => {
    n.theta = n.theta + (Math.random() - 0.5) * $.wiggle.widget.value();
  }), Ct(St, (n) => {
    const e = $.speed.widget.value(), r = Y(n.theta);
    let i = qo * e * n.speed_var * Math.cos(r), a = qo * e * n.speed_var * Math.sin(r), o = n.x + i, s = n.y + a;
    (o < 0 || o > je) && (i *= -1), (s < 0 || s > je) && (a *= -1), n.x = n.x + i, n.y = n.y + a, n.theta = le(Math.atan2(a, i));
  });
}, Ju = $.L, Le = Xn().domain([0, Ju]), Fe = Xn().domain([0, Ju]);
function Wi(t) {
  return $.orli_switch.widget.value() ? sp(t.theta / 360) : null;
}
const wM = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  Le.range([0, e]), Fe.range([0, r]), t.select("#origin").remove(), t.append("g").attr("id", "origin").selectAll("." + L.agent).data(St).enter().append("g").attr("class", L.agent).attr("transform", (o) => "translate(" + Le(o.x) + "," + Fe(o.y) + ")rotate(" + o.theta + ")").style("fill", Wi).append("path").attr("d", Ku($.agentsize));
}, bM = (t, n) => {
  t.selectAll("." + L.agent).attr("transform", (e) => "translate(" + Le(e.x) + "," + Fe(e.y) + ")rotate(" + e.theta + ")").style("fill", Wi);
}, xM = (t, n) => {
  t.selectAll("." + L.agent).attr("transform", (e) => "translate(" + Le(e.x) + "," + Fe(e.y) + ")rotate(" + e.theta + ")").style("fill", Wi);
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
var jo = {};
const AM = (t, n) => {
  xt.value() == 1 ? jo = Tf(() => MM(t), A.simulation.delay) : jo.stop();
}, NM = (t) => {
  t.select("." + L.attract_scope).attr("d", nn(A.widgets.cartoon_size * $.attraction_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)), t.select("." + L.orient_scope).attr("d", nn(A.widgets.cartoon_size * $.alignment_radius.widget.value(), 270 - $.blind_spot.widget.value() / 2)), t.select("." + L.repell_scope).attr("r", A.widgets.cartoon_size * $.collision_radius.widget.value()), t.select("." + L.speed).attr("d", nn(A.widgets.cartoon_speed_factor * A.widgets.cartoon_size * $.speed.widget.value(), 90 + $.wiggle.widget.value()));
}, TM = (t, n, e) => {
  dr.update(() => _M(n)), xt.update(() => AM(t)), pr.update(() => Qu(t, e)), Ct(En, (r) => {
    r.update(() => NM(n));
  }), Bn[0].update(() => $M(t));
}, SM = {
  name: "@explorables/flockn_roll",
  title: "Flock'n Roll",
  subtitle: "Collective Animal Behavior - Schooling Fish & Flocking Birds",
  description: "This is a model for collective behavior in animals, e.g. flocks of birds or schools of fish based on simple rules of interaction.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function EM(t, n = tl) {
  const e = Cm(t, n), r = e.display, i = e.controls, a = e.grid;
  return gM(i, a), TM(r, i, n), Qu(r, n), {
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
  EM as default,
  EM as load,
  SM as meta
};
