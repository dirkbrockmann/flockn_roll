(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--tw-color-red-300:oklch(80.8% .114 19.571);--tw-color-yellow-300:oklch(90.5% .182 98.111);--tw-color-blue-300:oklch(80.9% .105 251.813);--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-container-6xl:72rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300;--tw-default-font-family:var(--tw-font-sans);--tw-default-mono-font-family:var(--tw-font-mono)}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._attract_scope_16r3u_2{fill:#dcdcdc;stroke:#000;stroke-width:.5px}._orient_scope_16r3u_8{fill:#b4b4b4;stroke:#000;stroke-width:.5px}._repell_scope_16r3u_14,._speed_16r3u_20{fill:#fff;stroke:#000;stroke-width:.5px}._drop_16r3u_26{fill-opacity:1;fill:#000;stroke:#000}._agent_16r3u_32{stroke-width:0px;stroke:#000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const fo = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function hn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ho(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Yr(t) {
  let n, e, r;
  t.length !== 2 ? (n = hn, e = (s, u) => hn(t(s), u), r = (s, u) => t(s) - u) : (n = t === hn || t === ho ? t : po, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function po() {
  return 0;
}
function go(t) {
  return t === null ? NaN : +t;
}
const _o = Yr(hn), yo = _o.right;
Yr(go).center;
const mo = Math.sqrt(50), vo = Math.sqrt(10), wo = Math.sqrt(2);
function _n(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= mo ? 10 : o >= vo ? 5 : o >= wo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? _n(t, n, e * 2) : [s, u, l];
}
function bo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? _n(n, t, e) : _n(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function ie(t, n, e) {
  return n = +n, t = +t, e = +e, _n(t, n, e)[2];
}
function xo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? ie(n, t, e) : ie(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function nn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Mo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var $o = { value: () => {
} };
function Ae() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new dn(e);
}
function dn(t) {
  this._ = t;
}
function Ao(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
dn.prototype = Ae.prototype = {
  constructor: dn,
  on: function(t, n) {
    var e = this._, r = Ao(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = To(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = We(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = We(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new dn(t);
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
function To(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function We(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = $o, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var oe = "http://www.w3.org/1999/xhtml";
const Je = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: oe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Sn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Je.hasOwnProperty(n) ? { space: Je[n], local: t } : t;
}
function Po(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === oe && n.documentElement.namespaceURI === oe ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function So(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kr(t) {
  var n = Sn(t);
  return (n.local ? So : Po)(n);
}
function Eo() {
}
function Te(t) {
  return t == null ? Eo : function() {
    return this.querySelector(t);
  };
}
function No(t) {
  typeof t != "function" && (t = Te(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new C(r, this._parents);
}
function zo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Io() {
  return [];
}
function Vr(t) {
  return t == null ? Io : function() {
    return this.querySelectorAll(t);
  };
}
function Oo(t) {
  return function() {
    return zo(t.apply(this, arguments));
  };
}
function Co(t) {
  typeof t == "function" ? t = Oo(t) : t = Vr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new C(r, i);
}
function Zr(t) {
  return function() {
    return this.matches(t);
  };
}
function Wr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ko = Array.prototype.find;
function Ro(t) {
  return function() {
    return ko.call(this.children, t);
  };
}
function Fo() {
  return this.firstElementChild;
}
function Lo(t) {
  return this.select(t == null ? Fo : Ro(typeof t == "function" ? t : Wr(t)));
}
var Do = Array.prototype.filter;
function Bo() {
  return Array.from(this.children);
}
function qo(t) {
  return function() {
    return Do.call(this.children, t);
  };
}
function Ho(t) {
  return this.selectAll(t == null ? Bo : qo(typeof t == "function" ? t : Wr(t)));
}
function Xo(t) {
  typeof t != "function" && (t = Zr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new C(r, this._parents);
}
function Jr(t) {
  return new Array(t.length);
}
function Go() {
  return new C(this._enter || this._groups.map(Jr), this._parents);
}
function yn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
yn.prototype = {
  constructor: yn,
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
function Uo(t) {
  return function() {
    return t;
  };
}
function Yo(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new yn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Ko(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = p = a.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < f; ++s)
    p = a.call(t, o[s], s, o) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = o[s], l.delete(p)) : e[s] = new yn(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Vo(t) {
  return t.__data__;
}
function Zo(t, n) {
  if (!arguments.length) return Array.from(this, Vo);
  var e = n ? Ko : Yo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Uo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, p = Wo(t.call(c, c && c.__data__, l, r)), d = p.length, y = s[l] = new Array(d), v = a[l] = new Array(d), g = u[l] = new Array(h);
    e(c, f, y, v, g, p, n);
    for (var $ = 0, T = 0, _, w; $ < d; ++$)
      if (_ = y[$]) {
        for ($ >= T && (T = $ + 1); !(w = v[T]) && ++T < d; ) ;
        _._next = w || null;
      }
  }
  return a = new C(a, r), a._enter = s, a._exit = u, a;
}
function Wo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Jo() {
  return new C(this._exit || this._groups.map(Jr), this._parents);
}
function Qo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function jo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), p, d = 0; d < f; ++d)
      (p = l[d] || c[d]) && (h[d] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new C(s, this._parents);
}
function ta() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function na(t) {
  t || (t = ea);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new C(i, this._parents).order();
}
function ea(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ra() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ia() {
  return Array.from(this);
}
function oa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function aa() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function sa() {
  return !this.node();
}
function ua(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function la(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ca(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function fa(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function ha(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function da(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function pa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ga(t, n) {
  var e = Sn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? ca : la : typeof n == "function" ? e.local ? pa : da : e.local ? ha : fa)(e, n));
}
function Qr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function _a(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ya(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ma(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function va(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? _a : typeof n == "function" ? ma : ya)(t, n, e ?? "")) : zt(this.node(), t);
}
function zt(t, n) {
  return t.style.getPropertyValue(n) || Qr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function wa(t) {
  return function() {
    delete this[t];
  };
}
function ba(t, n) {
  return function() {
    this[t] = n;
  };
}
function xa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ma(t, n) {
  return arguments.length > 1 ? this.each((n == null ? wa : typeof n == "function" ? xa : ba)(t, n)) : this.node()[t];
}
function jr(t) {
  return t.trim().split(/^|\s+/);
}
function Pe(t) {
  return t.classList || new ti(t);
}
function ti(t) {
  this._node = t, this._names = jr(t.getAttribute("class") || "");
}
ti.prototype = {
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
function ni(t, n) {
  for (var e = Pe(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ei(t, n) {
  for (var e = Pe(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function $a(t) {
  return function() {
    ni(this, t);
  };
}
function Aa(t) {
  return function() {
    ei(this, t);
  };
}
function Ta(t, n) {
  return function() {
    (n.apply(this, arguments) ? ni : ei)(this, t);
  };
}
function Pa(t, n) {
  var e = jr(t + "");
  if (arguments.length < 2) {
    for (var r = Pe(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ta : n ? $a : Aa)(e, n));
}
function Sa() {
  this.textContent = "";
}
function Ea(t) {
  return function() {
    this.textContent = t;
  };
}
function Na(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function za(t) {
  return arguments.length ? this.each(t == null ? Sa : (typeof t == "function" ? Na : Ea)(t)) : this.node().textContent;
}
function Ia() {
  this.innerHTML = "";
}
function Oa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ca(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ka(t) {
  return arguments.length ? this.each(t == null ? Ia : (typeof t == "function" ? Ca : Oa)(t)) : this.node().innerHTML;
}
function Ra() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fa() {
  return this.each(Ra);
}
function La() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Da() {
  return this.each(La);
}
function Ba(t) {
  var n = typeof t == "function" ? t : Kr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function qa() {
  return null;
}
function Ha(t, n) {
  var e = typeof t == "function" ? t : Kr(t), r = n == null ? qa : typeof n == "function" ? n : Te(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Xa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ga() {
  return this.each(Xa);
}
function Ua() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ya() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ka(t) {
  return this.select(t ? Ya : Ua);
}
function Va(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Za(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Wa(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ja(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Qa(t, n, e) {
  return function() {
    var r = this.__on, i, o = Za(n);
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
function ja(t, n, e) {
  var r = Wa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Qa : Ja, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ri(t, n, e) {
  var r = Qr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ts(t, n) {
  return function() {
    return ri(this, t, n);
  };
}
function ns(t, n) {
  return function() {
    return ri(this, t, n.apply(this, arguments));
  };
}
function es(t, n) {
  return this.each((typeof n == "function" ? ns : ts)(t, n));
}
function* rs() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ii = [null];
function C(t, n) {
  this._groups = t, this._parents = n;
}
function Jt() {
  return new C([[document.documentElement]], ii);
}
function is() {
  return this;
}
C.prototype = Jt.prototype = {
  constructor: C,
  select: No,
  selectAll: Co,
  selectChild: Lo,
  selectChildren: Ho,
  filter: Xo,
  data: Zo,
  enter: Go,
  exit: Jo,
  join: Qo,
  merge: jo,
  selection: is,
  order: ta,
  sort: na,
  call: ra,
  nodes: ia,
  node: oa,
  size: aa,
  empty: sa,
  each: ua,
  attr: ga,
  style: va,
  property: Ma,
  classed: Pa,
  text: za,
  html: ka,
  raise: Fa,
  lower: Da,
  append: Ba,
  insert: Ha,
  remove: Ga,
  clone: Ka,
  datum: Va,
  on: ja,
  dispatch: es,
  [Symbol.iterator]: rs
};
function S(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], ii);
}
function os(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ae(t, n) {
  if (t = os(t), n === void 0 && (n = t.currentTarget), n) {
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
const as = { passive: !1 }, Xt = { capture: !0, passive: !1 };
function Wn(t) {
  t.stopImmediatePropagation();
}
function Pt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ss(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", Pt, Xt);
  "onselectstart" in n ? e.on("selectstart.drag", Pt, Xt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function us(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Pt, Xt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const en = (t) => () => t;
function se(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
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
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
se.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ls(t) {
  return !t.ctrlKey && !t.button;
}
function cs() {
  return this.parentNode;
}
function fs(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function hs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ds() {
  var t = ls, n = cs, e = fs, r = hs, i = {}, o = Ae("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", v).on("touchmove.drag", g, as).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, w) {
    if (!(c || !t.call(this, _, w))) {
      var P = T(this, n.call(this, _, w), _, w, "mouse");
      P && (S(_.view).on("mousemove.drag", d, Xt).on("mouseup.drag", y, Xt), ss(_.view), Wn(_), l = !1, s = _.clientX, u = _.clientY, P("start", _));
    }
  }
  function d(_) {
    if (Pt(_), !l) {
      var w = _.clientX - s, P = _.clientY - u;
      l = w * w + P * P > f;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    S(_.view).on("mousemove.drag mouseup.drag", null), us(_.view, l), Pt(_), i.mouse("end", _);
  }
  function v(_, w) {
    if (t.call(this, _, w)) {
      var P = _.changedTouches, E = n.call(this, _, w), z = P.length, X, Z;
      for (X = 0; X < z; ++X)
        (Z = T(this, E, _, w, P[X].identifier, P[X])) && (Wn(_), Z("start", _, P[X]));
    }
  }
  function g(_) {
    var w = _.changedTouches, P = w.length, E, z;
    for (E = 0; E < P; ++E)
      (z = i[w[E].identifier]) && (Pt(_), z("drag", _, w[E]));
  }
  function $(_) {
    var w = _.changedTouches, P = w.length, E, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (z = i[w[E].identifier]) && (Wn(_), z("end", _, w[E]));
  }
  function T(_, w, P, E, z, X) {
    var Z = o.copy(), b = ae(X || P, w), G, I, F;
    if ((F = e.call(_, new se("beforestart", {
      sourceEvent: P,
      target: h,
      identifier: z,
      active: a,
      x: b[0],
      y: b[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), E)) != null)
      return G = F.x - b[0] || 0, I = F.y - b[1] || 0, function tn(it, ut, Mt) {
        var R = b, Zn;
        switch (it) {
          case "start":
            i[z] = tn, Zn = a++;
            break;
          case "end":
            delete i[z], --a;
          // falls through
          case "drag":
            b = ae(Mt || ut, w), Zn = a;
            break;
        }
        Z.call(
          it,
          _,
          new se(it, {
            sourceEvent: ut,
            subject: F,
            target: h,
            identifier: z,
            active: Zn,
            x: b[0] + G,
            y: b[1] + I,
            dx: b[0] - R[0],
            dy: b[1] - R[1],
            dispatch: Z
          }),
          E
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : en(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : en(_), h) : n;
  }, h.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : en(_), h) : e;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : en(!!_), h) : r;
  }, h.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function En(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Se(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function kt() {
}
var gt = 0.7, It = 1 / gt, St = "\\s*([+-]?\\d+)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ps = /^#([0-9a-f]{3,8})$/, gs = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), _s = new RegExp(`^rgb\\(${U},${U},${U}\\)$`), ys = new RegExp(`^rgba\\(${St},${St},${St},${Gt}\\)$`), ms = new RegExp(`^rgba\\(${U},${U},${U},${Gt}\\)$`), vs = new RegExp(`^hsl\\(${Gt},${U},${U}\\)$`), ws = new RegExp(`^hsla\\(${Gt},${U},${U},${Gt}\\)$`), Qe = {
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
En(kt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: je,
  // Deprecated! Use color.formatHex.
  formatHex: je,
  formatHex8: bs,
  formatHsl: xs,
  formatRgb: tr,
  toString: tr
});
function je() {
  return this.rgb().formatHex();
}
function bs() {
  return this.rgb().formatHex8();
}
function xs() {
  return ai(this).formatHsl();
}
function tr() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ps.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? nr(n) : e === 3 ? new N(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? rn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? rn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = gs.exec(t)) ? new N(n[1], n[2], n[3], 1) : (n = _s.exec(t)) ? new N(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ys.exec(t)) ? rn(n[1], n[2], n[3], n[4]) : (n = ms.exec(t)) ? rn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = vs.exec(t)) ? ir(n[1], n[2] / 100, n[3] / 100, 1) : (n = ws.exec(t)) ? ir(n[1], n[2] / 100, n[3] / 100, n[4]) : Qe.hasOwnProperty(t) ? nr(Qe[t]) : t === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function nr(t) {
  return new N(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function rn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new N(t, n, e, r);
}
function oi(t) {
  return t instanceof kt || (t = _t(t)), t ? (t = t.rgb(), new N(t.r, t.g, t.b, t.opacity)) : new N();
}
function ue(t, n, e, r) {
  return arguments.length === 1 ? oi(t) : new N(t, n, e, r ?? 1);
}
function N(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
En(N, ue, Se(kt, {
  brighter(t) {
    return t = t == null ? It : Math.pow(It, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new N(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new N(ht(this.r), ht(this.g), ht(this.b), mn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: er,
  // Deprecated! Use color.formatHex.
  formatHex: er,
  formatHex8: Ms,
  formatRgb: rr,
  toString: rr
}));
function er() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function Ms() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rr() {
  const t = mn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function mn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ft(t) {
  return t = ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ir(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new B(t, n, e, r);
}
function ai(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof kt || (t = _t(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function $s(t, n, e, r) {
  return arguments.length === 1 ? ai(t) : new B(t, n, e, r ?? 1);
}
function B(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
En(B, $s, Se(kt, {
  brighter(t) {
    return t = t == null ? It : Math.pow(It, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new N(
      Jn(t >= 240 ? t - 240 : t + 120, i, r),
      Jn(t, i, r),
      Jn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new B(or(this.h), on(this.s), on(this.l), mn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = mn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${or(this.h)}, ${on(this.s) * 100}%, ${on(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function or(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function on(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Jn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const As = Math.PI / 180, Ts = 180 / Math.PI;
var si = -0.14861, Ee = 1.78277, Ne = -0.29227, Nn = -0.90649, Ut = 1.97294, ar = Ut * Nn, sr = Ut * Ee, ur = Ee * Ne - Nn * si;
function Ps(t) {
  if (t instanceof dt) return new dt(t.h, t.s, t.l, t.opacity);
  t instanceof N || (t = oi(t));
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (ur * r + ar * n - sr * e) / (ur + ar - sr), o = r - i, a = (Ut * (e - i) - Ne * o) / Nn, s = Math.sqrt(a * a + o * o) / (Ut * i * (1 - i)), u = s ? Math.atan2(a, o) * Ts - 120 : NaN;
  return new dt(u < 0 ? u + 360 : u, s, i, t.opacity);
}
function at(t, n, e, r) {
  return arguments.length === 1 ? Ps(t) : new dt(t, n, e, r ?? 1);
}
function dt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
En(dt, at, Se(kt, {
  brighter(t) {
    return t = t == null ? It : Math.pow(It, t), new dt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new dt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * As, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
    return new N(
      255 * (n + e * (si * r + Ee * i)),
      255 * (n + e * (Ne * r + Nn * i)),
      255 * (n + e * (Ut * r)),
      this.opacity
    );
  }
}));
const zn = (t) => () => t;
function ui(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ss(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Es(t, n) {
  var e = n - t;
  return e ? ui(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : zn(isNaN(t) ? n : t);
}
function Ns(t) {
  return (t = +t) == 1 ? Et : function(n, e) {
    return e - n ? Ss(n, e, t) : zn(isNaN(n) ? e : n);
  };
}
function Et(t, n) {
  var e = n - t;
  return e ? ui(t, e) : zn(isNaN(t) ? n : t);
}
const vn = function t(n) {
  var e = Ns(n);
  function r(i, o) {
    var a = e((i = ue(i)).r, (o = ue(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Et(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function zs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Is(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Os(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ze(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Cs(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function D(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ks(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ze(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var le = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qn = new RegExp(le.source, "g");
function Rs(t) {
  return function() {
    return t;
  };
}
function Fs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function li(t, n) {
  var e = le.lastIndex = Qn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = le.exec(t)) && (i = Qn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: D(r, i) })), e = Qn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Fs(u[0].x) : Rs(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function ze(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? zn(n) : (e === "number" ? D : e === "string" ? (r = _t(n)) ? (n = r, vn) : li : n instanceof _t ? vn : n instanceof Date ? Cs : Is(n) ? zs : Array.isArray(n) ? Os : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ks : D)(t, n);
}
function Ls(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var lr = 180 / Math.PI, ce = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ci(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * lr,
    skewX: Math.atan(u) * lr,
    scaleX: a,
    scaleY: s
  };
}
var an;
function Ds(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ce : ci(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Bs(t) {
  return t == null || (an || (an = document.createElementNS("http://www.w3.org/2000/svg", "g")), an.setAttribute("transform", t), !(t = an.transform.baseVal.consolidate())) ? ce : (t = t.matrix, ci(t.a, t.b, t.c, t.d, t.e, t.f));
}
function fi(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: D(l, f) }, { i: y - 2, x: D(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: D(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: D(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, p, d) {
    if (l !== f || c !== h) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: D(l, f) }, { i: y - 2, x: D(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(p) {
      for (var d = -1, y = h.length, v; ++d < y; ) f[(v = h[d]).i] = v.x(p);
      return f.join("");
    };
  };
}
var qs = fi(Ds, "px, ", "px)", "deg)"), Hs = fi(Bs, ", ", ")", ")");
function hi(t) {
  return function n(e) {
    e = +e;
    function r(i, o) {
      var a = t((i = at(i)).h, (o = at(o)).h), s = Et(i.s, o.s), u = Et(i.l, o.l), l = Et(i.opacity, o.opacity);
      return function(c) {
        return i.h = a(c), i.s = s(c), i.l = u(Math.pow(c, e)), i.opacity = l(c), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
hi(Es);
var di = hi(Et), Ot = 0, Lt = 0, Rt = 0, pi = 1e3, wn, Dt, bn = 0, yt = 0, In = 0, Yt = typeof performance == "object" && performance.now ? performance : Date, gi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function On() {
  return yt || (gi(Xs), yt = Yt.now() + In);
}
function Xs() {
  yt = 0;
}
function Kt() {
  this._call = this._time = this._next = null;
}
Kt.prototype = _i.prototype = {
  constructor: Kt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? On() : +e) + (n == null ? 0 : +n), !this._next && Dt !== this && (Dt ? Dt._next = this : wn = this, Dt = this), this._call = t, this._time = e, fe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, fe());
  }
};
function _i(t, n, e) {
  var r = new Kt();
  return r.restart(t, n, e), r;
}
function Gs() {
  On(), ++Ot;
  for (var t = wn, n; t; )
    (n = yt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ot;
}
function cr() {
  yt = (bn = Yt.now()) + In, Ot = Lt = 0;
  try {
    Gs();
  } finally {
    Ot = 0, Ys(), yt = 0;
  }
}
function Us() {
  var t = Yt.now(), n = t - bn;
  n > pi && (In -= n, bn = t);
}
function Ys() {
  for (var t, n = wn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : wn = e);
  Dt = t, fe(r);
}
function fe(t) {
  if (!Ot) {
    Lt && (Lt = clearTimeout(Lt));
    var n = t - yt;
    n > 24 ? (t < 1 / 0 && (Lt = setTimeout(cr, t - Yt.now() - In)), Rt && (Rt = clearInterval(Rt))) : (Rt || (bn = Yt.now(), Rt = setInterval(Us, pi)), Ot = 1, gi(cr));
  }
}
function fr(t, n, e) {
  var r = new Kt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ks(t, n, e) {
  var r = new Kt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? On() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Vs = Ae("start", "end", "cancel", "interrupt"), Zs = [], yi = 0, hr = 1, he = 2, pn = 3, dr = 4, de = 5, gn = 6;
function Cn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Ws(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Vs,
    tween: Zs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: yi
  });
}
function Ie(t, n) {
  var e = q(t, n);
  if (e.state > yi) throw new Error("too late; already scheduled");
  return e;
}
function V(t, n) {
  var e = q(t, n);
  if (e.state > pn) throw new Error("too late; already running");
  return e;
}
function q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Ws(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = _i(o, 0, e.time);
  function o(l) {
    e.state = hr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, p;
    if (e.state !== hr) return u();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === pn) return fr(a);
        p.state === dr ? (p.state = gn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = gn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (fr(function() {
      e.state === pn && (e.state = dr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = he, e.on.call("start", t, t.__data__, e.index, e.group), e.state === he) {
      for (e.state = pn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = de, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === de && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = gn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Js(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > he && r.state < de, r.state = gn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Qs(t) {
  return this.each(function() {
    Js(this, t);
  });
}
function js(t, n) {
  var e, r;
  return function() {
    var i = V(this, t), o = i.tween;
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
function tu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = V(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function nu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? js : tu)(e, t, n));
}
function Oe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = V(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[n];
  };
}
function mi(t, n) {
  var e;
  return (typeof n == "number" ? D : n instanceof _t ? vn : (e = _t(n)) ? (n = e, vn) : li)(t, n);
}
function eu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ru(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function iu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ou(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function au(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function su(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function uu(t, n) {
  var e = Sn(t), r = e === "transform" ? Hs : mi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? su : au)(e, r, Oe(this, "attr." + t, n)) : n == null ? (e.local ? ru : eu)(e) : (e.local ? ou : iu)(e, r, n));
}
function lu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function cu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function fu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && cu(t, o)), e;
  }
  return i._value = n, i;
}
function hu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && lu(t, o)), e;
  }
  return i._value = n, i;
}
function du(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Sn(t);
  return this.tween(e, (r.local ? fu : hu)(r, n));
}
function pu(t, n) {
  return function() {
    Ie(this, t).delay = +n.apply(this, arguments);
  };
}
function gu(t, n) {
  return n = +n, function() {
    Ie(this, t).delay = n;
  };
}
function _u(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? pu : gu)(n, t)) : q(this.node(), n).delay;
}
function yu(t, n) {
  return function() {
    V(this, t).duration = +n.apply(this, arguments);
  };
}
function mu(t, n) {
  return n = +n, function() {
    V(this, t).duration = n;
  };
}
function vu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? yu : mu)(n, t)) : q(this.node(), n).duration;
}
function wu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    V(this, t).ease = n;
  };
}
function bu(t) {
  var n = this._id;
  return arguments.length ? this.each(wu(n, t)) : q(this.node(), n).ease;
}
function xu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    V(this, t).ease = e;
  };
}
function Mu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(xu(this._id, t));
}
function $u(t) {
  typeof t != "function" && (t = Zr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new j(r, this._parents, this._name, this._id);
}
function Au(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = u[p] || l[p]) && (f[p] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new j(a, this._parents, this._name, this._id);
}
function Tu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Pu(t, n, e) {
  var r, i, o = Tu(n) ? Ie : V;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Su(t, n) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(t) : this.each(Pu(e, t, n));
}
function Eu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Nu() {
  return this.on("end.remove", Eu(this._id));
}
function zu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Te(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Cn(l[h], n, e, h, l, q(c, e)));
  return new j(o, this._parents, n, e);
}
function Iu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Vr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), p, d = q(c, e), y = 0, v = h.length; y < v; ++y)
          (p = h[y]) && Cn(p, n, e, y, h, d);
        o.push(h), a.push(c);
      }
  return new j(o, a, n, e);
}
var Ou = Jt.prototype.constructor;
function Cu() {
  return new Ou(this._groups, this._parents);
}
function ku(t, n) {
  var e, r, i;
  return function() {
    var o = zt(this, t), a = (this.style.removeProperty(t), zt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function vi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ru(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = zt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Fu(t, n, e) {
  var r, i, o;
  return function() {
    var a = zt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), zt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Lu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = V(this, t), l = u.on, c = u.value[o] == null ? s || (s = vi(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function Du(t, n, e) {
  var r = (t += "") == "transform" ? qs : mi;
  return n == null ? this.styleTween(t, ku(t, r)).on("end.style." + t, vi(t)) : typeof n == "function" ? this.styleTween(t, Fu(t, r, Oe(this, "style." + t, n))).each(Lu(this._id, t)) : this.styleTween(t, Ru(t, r, n), e).on("end.style." + t, null);
}
function Bu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function qu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Bu(t, a, e)), r;
  }
  return o._value = n, o;
}
function Hu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, qu(t, n, e ?? ""));
}
function Xu(t) {
  return function() {
    this.textContent = t;
  };
}
function Gu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Uu(t) {
  return this.tween("text", typeof t == "function" ? Gu(Oe(this, "text", t)) : Xu(t == null ? "" : t + ""));
}
function Yu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Ku(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Yu(i)), n;
  }
  return r._value = t, r;
}
function Vu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Ku(t));
}
function Zu() {
  for (var t = this._name, n = this._id, e = wi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = q(u, n);
        Cn(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new j(r, this._parents, t, e);
}
function Wu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = V(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Ju = 0;
function j(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function wi() {
  return ++Ju;
}
var W = Jt.prototype;
j.prototype = {
  constructor: j,
  select: zu,
  selectAll: Iu,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: $u,
  merge: Au,
  selection: Cu,
  transition: Zu,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: Su,
  attr: uu,
  attrTween: du,
  style: Du,
  styleTween: Hu,
  text: Uu,
  textTween: Vu,
  remove: Nu,
  tween: nu,
  delay: _u,
  duration: vu,
  ease: bu,
  easeVarying: Mu,
  end: Wu,
  [Symbol.iterator]: W[Symbol.iterator]
};
function Qu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ju = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qu
};
function tl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function nl(t) {
  var n, e;
  t instanceof j ? (n = t._id, t = t._name) : (n = wi(), (e = ju).time = On(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Cn(u, t, n, l, a, e || tl(u, n));
  return new j(r, this._parents, t, n);
}
Jt.prototype.interrupt = Qs;
Jt.prototype.transition = nl;
const pe = Math.PI, ge = 2 * pe, lt = 1e-6, el = ge - lt;
function bi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function rl(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return bi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ce {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? bi : rl(n);
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
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > lt) if (!(Math.abs(f * u - l * c) > lt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, y = u * u + l * l, v = p * p + d * d, g = Math.sqrt(y), $ = Math.sqrt(h), T = o * Math.tan((pe - Math.acos((y + h - v) / (2 * g * $))) / 2), _ = T / $, w = T / g;
      Math.abs(_ - 1) > lt && this._append`L${n + _ * c},${e + _ * f}`, this._append`A${o},${o},0,0,${+(f * p > c * d)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > lt || Math.abs(this._y1 - c) > lt) && this._append`L${l},${c}`, r && (h < 0 && (h = h % ge + ge), h > el ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > lt && this._append`A${r},${r},0,${+(h >= pe)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function H() {
  return new Ce();
}
H.prototype = Ce.prototype;
function il(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function xn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ct(t) {
  return t = xn(Math.abs(t)), t ? t[1] : NaN;
}
function ol(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function al(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var sl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(n = sl.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ke({
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
Mn.prototype = ke.prototype;
function ke(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ke.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ul(t) {
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
var xi;
function ll(t, n) {
  var e = xn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (xi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + xn(t, Math.max(0, n + o - 1))[0];
}
function pr(t, n) {
  var e = xn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const gr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: il,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => pr(t * 100, n),
  r: pr,
  s: ll,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function _r(t) {
  return t;
}
var yr = Array.prototype.map, mr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function cl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? _r : ol(yr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? _r : al(yr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Mn(f);
    var h = f.fill, p = f.align, d = f.sign, y = f.symbol, v = f.zero, g = f.width, $ = f.comma, T = f.precision, _ = f.trim, w = f.type;
    w === "n" ? ($ = !0, w = "g") : gr[w] || (T === void 0 && (T = 12), _ = !0, w = "g"), (v || h === "0" && p === "=") && (v = !0, h = "0", p = "=");
    var P = y === "$" ? e : y === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", E = y === "$" ? r : /[%p]/.test(w) ? a : "", z = gr[w], X = /[defgprs%]/.test(w);
    T = T === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function Z(b) {
      var G = P, I = E, F, tn, it;
      if (w === "c")
        I = z(b) + I, b = "";
      else {
        b = +b;
        var ut = b < 0 || 1 / b < 0;
        if (b = isNaN(b) ? u : z(Math.abs(b), T), _ && (b = ul(b)), ut && +b == 0 && d !== "+" && (ut = !1), G = (ut ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + G, I = (w === "s" ? mr[8 + xi / 3] : "") + I + (ut && d === "(" ? ")" : ""), X) {
          for (F = -1, tn = b.length; ++F < tn; )
            if (it = b.charCodeAt(F), 48 > it || it > 57) {
              I = (it === 46 ? i + b.slice(F + 1) : b.slice(F)) + I, b = b.slice(0, F);
              break;
            }
        }
      }
      $ && !v && (b = n(b, 1 / 0));
      var Mt = G.length + b.length + I.length, R = Mt < g ? new Array(g - Mt + 1).join(h) : "";
      switch ($ && v && (b = n(R + b, R.length ? g - I.length : 1 / 0), R = ""), p) {
        case "<":
          b = G + b + I + R;
          break;
        case "=":
          b = G + R + b + I;
          break;
        case "^":
          b = R.slice(0, Mt = R.length >> 1) + G + b + I + R.slice(Mt);
          break;
        default:
          b = R + G + b + I;
          break;
      }
      return o(b);
    }
    return Z.toString = function() {
      return f + "";
    }, Z;
  }
  function c(f, h) {
    var p = l((f = Mn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Ct(h) / 3))) * 3, y = Math.pow(10, -d), v = mr[8 + d / 3];
    return function(g) {
      return p(y * g) + v;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var sn, kn, Mi;
fl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function fl(t) {
  return sn = cl(t), kn = sn.format, Mi = sn.formatPrefix, sn;
}
function hl(t) {
  return Math.max(0, -Ct(Math.abs(t)));
}
function dl(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ct(n) / 3))) * 3 - Ct(Math.abs(t)));
}
function pl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ct(n) - Ct(t)) + 1;
}
function gl(t, n) {
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
function _l(t) {
  return function() {
    return t;
  };
}
function yl(t) {
  return +t;
}
var vr = [0, 1];
function Tt(t) {
  return t;
}
function _e(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : _l(isNaN(n) ? NaN : 0.5);
}
function ml(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function vl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = _e(i, r), o = e(a, o)) : (r = _e(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function wl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = _e(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = yo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function bl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function xl() {
  var t = vr, n = vr, e = ze, r, i, o, a = Tt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== Tt && (a = ml(t[0], t[h - 1])), s = h > 2 ? wl : vl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), D)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, yl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Ls, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Tt, c()) : a !== Tt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function Ml() {
  return xl()(Tt, Tt);
}
function $l(t, n, e, r) {
  var i = xo(t, n, e), o;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = dl(i, a)) && (r.precision = o), Mi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = pl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = hl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return kn(r);
}
function Al(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return bo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return $l(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = ie(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function Y() {
  var t = Ml();
  return t.copy = function() {
    return bl(t, Y());
  }, gl.apply(t, arguments), Al(t);
}
di(at(-100, 0.75, 0.35), at(80, 1.5, 0.8));
di(at(260, 0.75, 0.35), at(80, 1.5, 0.8));
var un = at();
function Tl(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var n = Math.abs(t - 0.5);
  return un.h = 360 * t - 100, un.s = 1.5 - 1.5 * n, un.l = 0.8 - 0.9 * n, un + "";
}
function $t(t) {
  return function() {
    return t;
  };
}
function Pl(t) {
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
  }, () => new Ce(n);
}
function Sl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function $i(t) {
  this._context = t;
}
$i.prototype = {
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
function El(t) {
  return new $i(t);
}
function Nl(t) {
  return t[0];
}
function zl(t) {
  return t[1];
}
function Il(t, n) {
  var e = $t(!0), r = null, i = El, o = null, a = Pl(s);
  t = typeof t == "function" ? t : t === void 0 ? Nl : $t(t), n = typeof n == "function" ? n : n === void 0 ? zl : $t(n);
  function s(u) {
    var l, c = (u = Sl(u)).length, f, h = !1, p;
    for (r == null && (o = i(p = a())), l = 0; l <= c; ++l)
      !(l < c && e(f = u[l], l, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(f, l, u), +n(f, l, u));
    if (p) return o = null, p + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : $t(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : $t(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : $t(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function Bt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Bt.prototype = {
  constructor: Bt,
  scale: function(t) {
    return t === 1 ? this : new Bt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Bt(this.k, this.x + this.k * t, this.y + this.k * n);
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
Bt.prototype;
var Ai = typeof global == "object" && global && global.Object === Object && global, Ol = typeof self == "object" && self && self.Object === Object && self, nt = Ai || Ol || Function("return this")(), K = nt.Symbol, Ti = Object.prototype, Cl = Ti.hasOwnProperty, kl = Ti.toString, Ft = K ? K.toStringTag : void 0;
function Rl(t) {
  var n = Cl.call(t, Ft), e = t[Ft];
  try {
    t[Ft] = void 0;
    var r = !0;
  } catch {
  }
  var i = kl.call(t);
  return r && (n ? t[Ft] = e : delete t[Ft]), i;
}
var Fl = Object.prototype, Ll = Fl.toString;
function Dl(t) {
  return Ll.call(t);
}
var Bl = "[object Null]", ql = "[object Undefined]", wr = K ? K.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? ql : Bl : wr && wr in Object(t) ? Rl(t) : Dl(t);
}
function mt(t) {
  return t != null && typeof t == "object";
}
var Hl = "[object Symbol]";
function Rn(t) {
  return typeof t == "symbol" || mt(t) && wt(t) == Hl;
}
function Fn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var k = Array.isArray, br = K ? K.prototype : void 0, xr = br ? br.toString : void 0;
function Pi(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return Fn(t, Pi) + "";
  if (Rn(t))
    return xr ? xr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Xl = /\s/;
function Gl(t) {
  for (var n = t.length; n-- && Xl.test(t.charAt(n)); )
    ;
  return n;
}
var Ul = /^\s+/;
function Yl(t) {
  return t && t.slice(0, Gl(t) + 1).replace(Ul, "");
}
function tt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Mr = NaN, Kl = /^[-+]0x[0-9a-f]+$/i, Vl = /^0b[01]+$/i, Zl = /^0o[0-7]+$/i, Wl = parseInt;
function Jl(t) {
  if (typeof t == "number")
    return t;
  if (Rn(t))
    return Mr;
  if (tt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Yl(t);
  var e = Vl.test(t);
  return e || Zl.test(t) ? Wl(t.slice(2), e ? 2 : 8) : Kl.test(t) ? Mr : +t;
}
var Ql = 1 / 0, jl = 17976931348623157e292;
function jn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Jl(t), t === Ql || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * jl;
  }
  return t === t ? t : 0;
}
function Si(t) {
  return t;
}
var tc = "[object AsyncFunction]", nc = "[object Function]", ec = "[object GeneratorFunction]", rc = "[object Proxy]";
function Ei(t) {
  if (!tt(t))
    return !1;
  var n = wt(t);
  return n == nc || n == ec || n == tc || n == rc;
}
var te = nt["__core-js_shared__"], $r = function() {
  var t = /[^.]+$/.exec(te && te.keys && te.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ic(t) {
  return !!$r && $r in t;
}
var oc = Function.prototype, ac = oc.toString;
function bt(t) {
  if (t != null) {
    try {
      return ac.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var sc = /[\\^$.*+?()[\]{}|]/g, uc = /^\[object .+?Constructor\]$/, lc = Function.prototype, cc = Object.prototype, fc = lc.toString, hc = cc.hasOwnProperty, dc = RegExp(
  "^" + fc.call(hc).replace(sc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pc(t) {
  if (!tt(t) || ic(t))
    return !1;
  var n = Ei(t) ? dc : uc;
  return n.test(bt(t));
}
function gc(t, n) {
  return t == null ? void 0 : t[n];
}
function xt(t, n) {
  var e = gc(t, n);
  return pc(e) ? e : void 0;
}
var ye = xt(nt, "WeakMap"), Ar = function() {
  try {
    var t = xt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function _c(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var yc = 9007199254740991, mc = /^(?:0|[1-9]\d*)$/;
function Ln(t, n) {
  var e = typeof t;
  return n = n ?? yc, !!n && (e == "number" || e != "symbol" && mc.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function vc(t, n, e) {
  n == "__proto__" && Ar ? Ar(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Dn(t, n) {
  return t === n || t !== t && n !== n;
}
var wc = Object.prototype, bc = wc.hasOwnProperty;
function xc(t, n, e) {
  var r = t[n];
  (!(bc.call(t, n) && Dn(r, e)) || e === void 0 && !(n in t)) && vc(t, n, e);
}
var Mc = 9007199254740991;
function Re(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Mc;
}
function Qt(t) {
  return t != null && Re(t.length) && !Ei(t);
}
function $c(t, n, e) {
  if (!tt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Qt(e) && Ln(n, e.length) : r == "string" && n in e) ? Dn(e[n], t) : !1;
}
var Ac = Object.prototype;
function Ni(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Ac;
  return t === e;
}
function Tc(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Pc = "[object Arguments]";
function Tr(t) {
  return mt(t) && wt(t) == Pc;
}
var zi = Object.prototype, Sc = zi.hasOwnProperty, Ec = zi.propertyIsEnumerable, Fe = Tr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Tr : function(t) {
  return mt(t) && Sc.call(t, "callee") && !Ec.call(t, "callee");
};
function Nc() {
  return !1;
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Pr = Ii && typeof module == "object" && module && !module.nodeType && module, zc = Pr && Pr.exports === Ii, Sr = zc ? nt.Buffer : void 0, Ic = Sr ? Sr.isBuffer : void 0, me = Ic || Nc, Oc = "[object Arguments]", Cc = "[object Array]", kc = "[object Boolean]", Rc = "[object Date]", Fc = "[object Error]", Lc = "[object Function]", Dc = "[object Map]", Bc = "[object Number]", qc = "[object Object]", Hc = "[object RegExp]", Xc = "[object Set]", Gc = "[object String]", Uc = "[object WeakMap]", Yc = "[object ArrayBuffer]", Kc = "[object DataView]", Vc = "[object Float32Array]", Zc = "[object Float64Array]", Wc = "[object Int8Array]", Jc = "[object Int16Array]", Qc = "[object Int32Array]", jc = "[object Uint8Array]", tf = "[object Uint8ClampedArray]", nf = "[object Uint16Array]", ef = "[object Uint32Array]", A = {};
A[Vc] = A[Zc] = A[Wc] = A[Jc] = A[Qc] = A[jc] = A[tf] = A[nf] = A[ef] = !0;
A[Oc] = A[Cc] = A[Yc] = A[kc] = A[Kc] = A[Rc] = A[Fc] = A[Lc] = A[Dc] = A[Bc] = A[qc] = A[Hc] = A[Xc] = A[Gc] = A[Uc] = !1;
function rf(t) {
  return mt(t) && Re(t.length) && !!A[wt(t)];
}
function of(t) {
  return function(n) {
    return t(n);
  };
}
var Oi = typeof exports == "object" && exports && !exports.nodeType && exports, qt = Oi && typeof module == "object" && module && !module.nodeType && module, af = qt && qt.exports === Oi, ne = af && Ai.process, Er = function() {
  try {
    var t = qt && qt.require && qt.require("util").types;
    return t || ne && ne.binding && ne.binding("util");
  } catch {
  }
}(), Nr = Er && Er.isTypedArray, Ci = Nr ? of(Nr) : rf, sf = Object.prototype, uf = sf.hasOwnProperty;
function ki(t, n) {
  var e = k(t), r = !e && Fe(t), i = !e && !r && me(t), o = !e && !r && !i && Ci(t), a = e || r || i || o, s = a ? Tc(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || uf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ln(l, u))) && s.push(l);
  return s;
}
function Ri(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var lf = Ri(Object.keys, Object), cf = Object.prototype, ff = cf.hasOwnProperty;
function hf(t) {
  if (!Ni(t))
    return lf(t);
  var n = [];
  for (var e in Object(t))
    ff.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Bn(t) {
  return Qt(t) ? ki(t) : hf(t);
}
function df(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var pf = Object.prototype, gf = pf.hasOwnProperty;
function _f(t) {
  if (!tt(t))
    return df(t);
  var n = Ni(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !gf.call(t, r)) || e.push(r);
  return e;
}
function yf(t) {
  return Qt(t) ? ki(t, !0) : _f(t);
}
var mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vf = /^\w*$/;
function Le(t, n) {
  if (k(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Rn(t) ? !0 : vf.test(t) || !mf.test(t) || n != null && t in Object(n);
}
var Vt = xt(Object, "create");
function wf() {
  this.__data__ = Vt ? Vt(null) : {}, this.size = 0;
}
function bf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var xf = "__lodash_hash_undefined__", Mf = Object.prototype, $f = Mf.hasOwnProperty;
function Af(t) {
  var n = this.__data__;
  if (Vt) {
    var e = n[t];
    return e === xf ? void 0 : e;
  }
  return $f.call(n, t) ? n[t] : void 0;
}
var Tf = Object.prototype, Pf = Tf.hasOwnProperty;
function Sf(t) {
  var n = this.__data__;
  return Vt ? n[t] !== void 0 : Pf.call(n, t);
}
var Ef = "__lodash_hash_undefined__";
function Nf(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Vt && n === void 0 ? Ef : n, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = wf;
vt.prototype.delete = bf;
vt.prototype.get = Af;
vt.prototype.has = Sf;
vt.prototype.set = Nf;
function zf() {
  this.__data__ = [], this.size = 0;
}
function qn(t, n) {
  for (var e = t.length; e--; )
    if (Dn(t[e][0], n))
      return e;
  return -1;
}
var If = Array.prototype, Of = If.splice;
function Cf(t) {
  var n = this.__data__, e = qn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Of.call(n, e, 1), --this.size, !0;
}
function kf(t) {
  var n = this.__data__, e = qn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Rf(t) {
  return qn(this.__data__, t) > -1;
}
function Ff(t, n) {
  var e = this.__data__, r = qn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = zf;
et.prototype.delete = Cf;
et.prototype.get = kf;
et.prototype.has = Rf;
et.prototype.set = Ff;
var Zt = xt(nt, "Map");
function Lf() {
  this.size = 0, this.__data__ = {
    hash: new vt(),
    map: new (Zt || et)(),
    string: new vt()
  };
}
function Df(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Hn(t, n) {
  var e = t.__data__;
  return Df(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Bf(t) {
  var n = Hn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function qf(t) {
  return Hn(this, t).get(t);
}
function Hf(t) {
  return Hn(this, t).has(t);
}
function Xf(t, n) {
  var e = Hn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Lf;
rt.prototype.delete = Bf;
rt.prototype.get = qf;
rt.prototype.has = Hf;
rt.prototype.set = Xf;
var Gf = "Expected a function";
function De(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Gf);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (De.Cache || rt)(), e;
}
De.Cache = rt;
var Uf = 500;
function Yf(t) {
  var n = De(t, function(r) {
    return e.size === Uf && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Kf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vf = /\\(\\)?/g, Zf = Yf(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Kf, function(e, r, i, o) {
    n.push(i ? o.replace(Vf, "$1") : r || e);
  }), n;
});
function Xn(t) {
  return t == null ? "" : Pi(t);
}
function Gn(t, n) {
  return k(t) ? t : Le(t, n) ? [t] : Zf(Xn(t));
}
function jt(t) {
  if (typeof t == "string" || Rn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Be(t, n) {
  n = Gn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[jt(n[e++])];
  return e && e == r ? t : void 0;
}
function Wf(t, n, e) {
  var r = t == null ? void 0 : Be(t, n);
  return r === void 0 ? e : r;
}
function qe(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var zr = K ? K.isConcatSpreadable : void 0;
function Jf(t) {
  return k(t) || Fe(t) || !!(zr && t && t[zr]);
}
function Qf(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Jf), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? qe(i, s) : i[i.length] = s;
  }
  return i;
}
function jf(t) {
  var n = t == null ? 0 : t.length;
  return n ? Qf(t) : [];
}
var th = Ri(Object.getPrototypeOf, Object);
function nh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function eh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, nh(t, n, e);
}
var rh = "\\ud800-\\udfff", ih = "\\u0300-\\u036f", oh = "\\ufe20-\\ufe2f", ah = "\\u20d0-\\u20ff", sh = ih + oh + ah, uh = "\\ufe0e\\ufe0f", lh = "\\u200d", ch = RegExp("[" + lh + rh + sh + uh + "]");
function Fi(t) {
  return ch.test(t);
}
function fh(t) {
  return t.split("");
}
var Li = "\\ud800-\\udfff", hh = "\\u0300-\\u036f", dh = "\\ufe20-\\ufe2f", ph = "\\u20d0-\\u20ff", gh = hh + dh + ph, _h = "\\ufe0e\\ufe0f", yh = "[" + Li + "]", ve = "[" + gh + "]", we = "\\ud83c[\\udffb-\\udfff]", mh = "(?:" + ve + "|" + we + ")", Di = "[^" + Li + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", qi = "[\\ud800-\\udbff][\\udc00-\\udfff]", vh = "\\u200d", Hi = mh + "?", Xi = "[" + _h + "]?", wh = "(?:" + vh + "(?:" + [Di, Bi, qi].join("|") + ")" + Xi + Hi + ")*", bh = Xi + Hi + wh, xh = "(?:" + [Di + ve + "?", ve, Bi, qi, yh].join("|") + ")", Mh = RegExp(we + "(?=" + we + ")|" + xh + bh, "g");
function $h(t) {
  return t.match(Mh) || [];
}
function Ah(t) {
  return Fi(t) ? $h(t) : fh(t);
}
function Th(t) {
  return function(n) {
    n = Xn(n);
    var e = Fi(n) ? Ah(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? eh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Ph = Th("toUpperCase");
function Sh(t) {
  return Ph(Xn(t).toLowerCase());
}
function Eh() {
  this.__data__ = new et(), this.size = 0;
}
function Nh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function zh(t) {
  return this.__data__.get(t);
}
function Ih(t) {
  return this.__data__.has(t);
}
var Oh = 200;
function Ch(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var r = e.__data__;
    if (!Zt || r.length < Oh - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new rt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function Q(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
Q.prototype.clear = Eh;
Q.prototype.delete = Nh;
Q.prototype.get = zh;
Q.prototype.has = Ih;
Q.prototype.set = Ch;
function Gi(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ui() {
  return [];
}
var kh = Object.prototype, Rh = kh.propertyIsEnumerable, Ir = Object.getOwnPropertySymbols, Yi = Ir ? function(t) {
  return t == null ? [] : (t = Object(t), Gi(Ir(t), function(n) {
    return Rh.call(t, n);
  }));
} : Ui, Fh = Object.getOwnPropertySymbols, Lh = Fh ? function(t) {
  for (var n = []; t; )
    qe(n, Yi(t)), t = th(t);
  return n;
} : Ui;
function Ki(t, n, e) {
  var r = n(t);
  return k(t) ? r : qe(r, e(t));
}
function Or(t) {
  return Ki(t, Bn, Yi);
}
function Dh(t) {
  return Ki(t, yf, Lh);
}
var be = xt(nt, "DataView"), xe = xt(nt, "Promise"), Me = xt(nt, "Set"), Cr = "[object Map]", Bh = "[object Object]", kr = "[object Promise]", Rr = "[object Set]", Fr = "[object WeakMap]", Lr = "[object DataView]", qh = bt(be), Hh = bt(Zt), Xh = bt(xe), Gh = bt(Me), Uh = bt(ye), J = wt;
(be && J(new be(new ArrayBuffer(1))) != Lr || Zt && J(new Zt()) != Cr || xe && J(xe.resolve()) != kr || Me && J(new Me()) != Rr || ye && J(new ye()) != Fr) && (J = function(t) {
  var n = wt(t), e = n == Bh ? t.constructor : void 0, r = e ? bt(e) : "";
  if (r)
    switch (r) {
      case qh:
        return Lr;
      case Hh:
        return Cr;
      case Xh:
        return kr;
      case Gh:
        return Rr;
      case Uh:
        return Fr;
    }
  return n;
});
var Dr = nt.Uint8Array, Yh = "__lodash_hash_undefined__";
function Kh(t) {
  return this.__data__.set(t, Yh), this;
}
function Vh(t) {
  return this.__data__.has(t);
}
function $n(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++n < e; )
    this.add(t[n]);
}
$n.prototype.add = $n.prototype.push = Kh;
$n.prototype.has = Vh;
function Zh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Wh(t, n) {
  return t.has(n);
}
var Jh = 1, Qh = 2;
function Vi(t, n, e, r, i, o) {
  var a = e & Jh, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, p = e & Qh ? new $n() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], y = n[f];
    if (r)
      var v = a ? r(y, d, f, n, t, o) : r(d, y, f, t, n, o);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Zh(n, function(g, $) {
        if (!Wh(p, $) && (d === g || i(d, g, e, r, o)))
          return p.push($);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Zi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function jh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var td = 1, nd = 2, ed = "[object Boolean]", rd = "[object Date]", id = "[object Error]", od = "[object Map]", ad = "[object Number]", sd = "[object RegExp]", ud = "[object Set]", ld = "[object String]", cd = "[object Symbol]", fd = "[object ArrayBuffer]", hd = "[object DataView]", Br = K ? K.prototype : void 0, ee = Br ? Br.valueOf : void 0;
function dd(t, n, e, r, i, o, a) {
  switch (e) {
    case hd:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case fd:
      return !(t.byteLength != n.byteLength || !o(new Dr(t), new Dr(n)));
    case ed:
    case rd:
    case ad:
      return Dn(+t, +n);
    case id:
      return t.name == n.name && t.message == n.message;
    case sd:
    case ld:
      return t == n + "";
    case od:
      var s = Zi;
    case ud:
      var u = r & td;
      if (s || (s = jh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= nd, a.set(t, n);
      var c = Vi(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case cd:
      if (ee)
        return ee.call(t) == ee.call(n);
  }
  return !1;
}
var pd = 1, gd = Object.prototype, _d = gd.hasOwnProperty;
function yd(t, n, e, r, i, o) {
  var a = e & pd, s = Or(t), u = s.length, l = Or(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : _d.call(n, h)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  o.set(t, n), o.set(n, t);
  for (var v = a; ++f < u; ) {
    h = s[f];
    var g = t[h], $ = n[h];
    if (r)
      var T = a ? r($, g, h, n, t, o) : r(g, $, h, t, n, o);
    if (!(T === void 0 ? g === $ || i(g, $, e, r, o) : T)) {
      y = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (y && !v) {
    var _ = t.constructor, w = n.constructor;
    _ != w && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (y = !1);
  }
  return o.delete(t), o.delete(n), y;
}
var md = 1, qr = "[object Arguments]", Hr = "[object Array]", ln = "[object Object]", vd = Object.prototype, Xr = vd.hasOwnProperty;
function wd(t, n, e, r, i, o) {
  var a = k(t), s = k(n), u = a ? Hr : J(t), l = s ? Hr : J(n);
  u = u == qr ? ln : u, l = l == qr ? ln : l;
  var c = u == ln, f = l == ln, h = u == l;
  if (h && me(t)) {
    if (!me(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new Q()), a || Ci(t) ? Vi(t, n, e, r, i, o) : dd(t, n, u, e, r, i, o);
  if (!(e & md)) {
    var p = c && Xr.call(t, "__wrapped__"), d = f && Xr.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, v = d ? n.value() : n;
      return o || (o = new Q()), i(y, v, e, r, o);
    }
  }
  return h ? (o || (o = new Q()), yd(t, n, e, r, i, o)) : !1;
}
function He(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !mt(t) && !mt(n) ? t !== t && n !== n : wd(t, n, e, r, He, i);
}
var bd = 1, xd = 2;
function Md(t, n, e, r) {
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
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new Q(), f;
      if (!(f === void 0 ? He(l, u, bd | xd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Wi(t) {
  return t === t && !tt(t);
}
function $d(t) {
  for (var n = Bn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Wi(i)];
  }
  return n;
}
function Ji(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Ad(t) {
  var n = $d(t);
  return n.length == 1 && n[0][2] ? Ji(n[0][0], n[0][1]) : function(e) {
    return e === t || Md(e, t, n);
  };
}
function Td(t, n) {
  return t != null && n in Object(t);
}
function Qi(t, n, e) {
  n = Gn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = jt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Re(i) && Ln(a, i) && (k(t) || Fe(t)));
}
function Pd(t, n) {
  return t != null && Qi(t, n, Td);
}
var Sd = 1, Ed = 2;
function Nd(t, n) {
  return Le(t) && Wi(n) ? Ji(jt(t), n) : function(e) {
    var r = Wf(e, t);
    return r === void 0 && r === n ? Pd(e, t) : He(n, r, Sd | Ed);
  };
}
function zd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Id(t) {
  return function(n) {
    return Be(n, t);
  };
}
function Od(t) {
  return Le(t) ? zd(jt(t)) : Id(t);
}
function Un(t) {
  return typeof t == "function" ? t : t == null ? Si : typeof t == "object" ? k(t) ? Nd(t[0], t[1]) : Ad(t) : Od(t);
}
function Cd(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var kd = Cd();
function Rd(t, n) {
  return t && kd(t, n, Bn);
}
function Fd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Qt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Xe = Fd(Rd);
function Ld(t) {
  return typeof t == "function" ? t : Si;
}
function pt(t, n) {
  var e = k(t) ? _c : Xe;
  return e(t, Ld(n));
}
function Dd(t, n) {
  return Fn(n, function(e) {
    return [e, t[e]];
  });
}
function Bd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var qd = "[object Map]", Hd = "[object Set]";
function Xd(t) {
  return function(n) {
    var e = J(n);
    return e == qd ? Zi(n) : e == Hd ? Bd(n) : Dd(n, t(n));
  };
}
var ji = Xd(Bn);
function Gd(t, n) {
  var e = [];
  return Xe(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function cn(t, n) {
  var e = k(t) ? Gi : Gd;
  return e(t, Un(n));
}
function Ud(t, n) {
  var e = -1, r = Qt(t) ? Array(t.length) : [];
  return Xe(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function st(t, n) {
  var e = k(t) ? Fn : Ud;
  return e(t, Un(n));
}
var Yd = Object.prototype, Kd = Yd.hasOwnProperty;
function Vd(t, n) {
  return t != null && Kd.call(t, n);
}
function to(t, n) {
  return t != null && Qi(t, n, Vd);
}
var Zd = "[object Boolean]";
function Wd(t) {
  return t === !0 || t === !1 || mt(t) && wt(t) == Zd;
}
function Jd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var Qd = NaN;
function jd(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? Jd(t, n) / e : Qd;
}
function At(t, n) {
  return jd(t, Un(n));
}
function tp(t, n, e, r) {
  if (!tt(t))
    return t;
  n = Gn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = jt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = tt(c) ? c : Ln(n[i + 1]) ? [] : {});
    }
    xc(s, u, l), s = s[u];
  }
  return t;
}
function np(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Be(t, a);
    e(s, a) && tp(o, Gn(a, t), s);
  }
  return o;
}
function no(t, n) {
  if (t == null)
    return {};
  var e = Fn(Dh(t), function(r) {
    return [r];
  });
  return n = Un(n), np(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var ep = Math.ceil, rp = Math.max;
function ip(t, n, e, r) {
  for (var i = -1, o = rp(ep((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function op(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && $c(n, e, r) && (e = r = void 0), n = jn(n), e === void 0 ? (e = n, n = 0) : e = jn(e), r = r === void 0 ? n < e ? 1 : -1 : jn(r), ip(n, e, r);
  };
}
var Yn = op();
function ap() {
  var t = arguments, n = Xn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const sp = (t, n, e = 12, r = 12) => {
  const i = Y().domain([0, e]).range([0, t]), o = Y().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Yn((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = jf(st(l, function(f) {
        return st(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, up = "_widget_18g36_1", lp = "_label_18g36_19", cp = "_lit_18g36_24", fp = "_button_18g36_29", hp = "_symbol_18g36_29", dp = "_radio_18g36_29", pp = "_radiobutton_18g36_29", gp = "_selected_18g36_35", _p = "_toggle_18g36_35", yp = "_slider_18g36_44", mp = "_track_18g36_44", vp = "_track_overlay_18g36_48", wp = "_handle_18g36_55", m = {
  widget: up,
  label: lp,
  lit: cp,
  button: fp,
  symbol: hp,
  radio: dp,
  radiobutton: pp,
  selected: gp,
  toggle: _p,
  slider: yp,
  track: mp,
  track_overlay: vp,
  handle: wp
}, Ge = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ue = (t, n, e) => {
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
}, bp = (t = 1) => {
  const n = H();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, xp = (t = 1) => {
  const n = H(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Mp = (t = 1) => {
  const n = H();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, $p = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = H();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Ap = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Tp = (t = 1) => {
  const n = H(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Pp = (t = 1) => {
  const n = H(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Sp = (t = 1) => {
  var n = H(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Ep = (t = 1) => {
  const n = H(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, $e = (t) => {
  switch (t) {
    case "play":
      return bp;
    case "forward":
      return xp;
    case "back":
      return Mp;
    case "pause":
      return $p;
    case "reload":
      return Ap;
    case "capture":
      return Tp;
    case "rewind":
      return Pp;
    case "stop":
      return Sp;
    case "push":
      return Ep;
  }
}, Ye = () => {
  const t = "button";
  var n = Ge(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", $e(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + n).select("." + m.symbol).attr("d", $e(c[f])(r * e));
    }
  };
}, Np = () => {
  const t = "slider", n = kn(".3f");
  var e = Ge(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(g) {
  }, f = function(g) {
  }, h = [0, 1], p = 0, d = null, y = Y().domain(h).range([0, r]).clamp(!0);
  const v = function(g, $, T = h) {
    const _ = g.select("#slider_" + e);
    y.domain(T), p = $, _.selectAll("." + m.handle).transition().attr("cx", y($)), a && _.select("." + m.label).text(d + " = " + n(p)), c(), f();
  };
  return {
    type: t,
    scale: y,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return c = g, this;
      c(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: v,
    click: v
  };
}, zp = () => {
  const t = "toggle";
  var n = Ge(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = S(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const p = f.select("#toggle_" + n);
      p.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), p.classed(m.selected, u), s();
    }
  };
}, Ip = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", $e(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Ue(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, eo = (t, n) => {
  const e = H();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Op = (t, n) => {
  const e = kn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", eo(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const y = ae(d, this)[0];
    t.value(a.invert(y)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ds().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? nn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -nn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? nn([t.girth() / 2, t.knob()]) + 7 : -nn([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Cp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", eo(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Ue(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, kp = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Mo(a), u = Y().domain([0, a - 1]).range([0, t.size()]), l = Y().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (v) => "b" + v).attr("transform", (v) => t.orientation() == "vertical" ? "translate(0," + l(v) + ")" : "translate(" + u(v) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), p.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((v) => v == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const y = Ue(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(v, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", y.valign).attr("transform", "translate(" + y.x + "," + y.y + ")").style("font-size", t.fontsize()).attr("text-anchor", y.anchor), c;
}, re = (t, n) => {
  switch (t.type) {
    case "button":
      return Ip(t);
    case "slider":
      return Op(t);
    case "radio":
      return kp(t);
    case "toggle":
      return Cp(t);
  }
}, Rp = (t, n) => {
  const e = sp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, M = {
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
}, x = {
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
}, ro = (t) => st(
  ji(t),
  (n) => {
    n[1].id = n[0], to(n[1], "label") || (n[1].label = ap(Sh(n[0]), /_/g, " "));
  }
), io = (t) => st(ji(t), (n) => n[1]), oo = (t, n) => pt(t, (e, r) => e.widget = n[r]), Fp = (t) => no(t, (n) => to(n, "range")), Lp = (t) => no(t, (n) => Wd(n.default)), L = Y().domain([0, 360]).range([0, 2 * Math.PI]), fn = Y().range([0, 360]).domain([0, 2 * Math.PI]), Dp = (t, n) => {
  const e = t.x - n.x, r = t.y - n.y;
  return Math.sqrt(e * e + r * r);
}, ao = (t) => {
  const e = Il().x((i) => t * i.x).y((i) => t * i.y), r = st(Yn(30), (i) => ({
    x: -2 * Math.cos(i / 30 * Math.PI * 2),
    y: Math.sin(i / 30 * Math.PI * 2) * Math.pow(Math.sin(i / 30 / 2 * Math.PI * 2), 6)
  }));
  return e(r);
};
function Nt(t, n) {
  var e = t * Math.cos(n / 360 * 2 * Math.PI), r = -t * Math.sin(n / 360 * 2 * Math.PI), i = -e, o = r, a = n < 180 ? 0 : 1;
  return "M 0,0 L " + e + "," + r + " A " + t + " " + t + " 0 " + a + " 1 " + i + "," + o + "L 0,0";
}
const Bp = "_attract_scope_16r3u_2", qp = "_orient_scope_16r3u_8", Hp = "_repell_scope_16r3u_14", Xp = "_speed_16r3u_20", Gp = "_drop_16r3u_26", Up = "_agent_16r3u_32", O = {
  attract_scope: Bp,
  orient_scope: qp,
  repell_scope: Hp,
  speed: Xp,
  drop: Gp,
  agent: Up
}, Ke = Fp(x), Ve = Lp(x);
ro(Ke);
ro(Ve);
const so = io(Ke), uo = io(Ve), Ht = st(
  so,
  (t) => Np().id(t.id).label(t.label).range(t.range).value(t.default).girth(M.widgets.slider_girth).knob(M.widgets.slider_knob).size(M.widgets.slider_size)
), Wt = st(
  uo,
  (t) => zp().id(t.id).label(t.label).value(t.default).labelposition(M.widgets.toggle_label_pos).size(13)
);
oo(uo, Wt);
oo(so, Ht);
const ot = Ye().actions(["play", "pause"]), Kn = Ye().actions(["back"]), Vn = Ye().actions(["rewind"]), Yp = [ot, Kn, Vn];
Wt[0].label("Orli's Magic Switch");
const Kp = (t, n) => {
  const e = n.position(M.widgets.cartoon_anchor.x, M.widgets.cartoon_anchor.y), r = t.append("g").attr("id", "cartoon").attr("transform", "translate(" + e.x + "," + e.y + ")");
  r.append("path").attr("d", Nt(M.widgets.cartoon_size * x.attraction_radius.widget.value(), 270 - x.blind_spot.widget.value() / 2)).attr("class", O.attract_scope), r.append("path").attr("d", Nt(M.widgets.cartoon_size * x.alignment_radius.widget.value(), 270 - x.blind_spot.widget.value() / 2)).attr("class", O.orient_scope), r.append("path").attr("d", Nt(M.widgets.cartoon_speed_factor * M.widgets.cartoon_size * x.speed.widget.value(), 90 + x.wiggle.widget.value())).attr("class", O.speed), r.append("path").attr("class", O.drop).attr("transform", "scale(4)translate(0,3)rotate(-90)").attr("d", ao(M.widgets.cartoon_tadpole_size)), r.append("circle").attr("r", M.widgets.cartoon_size * x.collision_radius.widget.value()).attr("class", O.repell_scope);
  const i = n.position(M.widgets.slider_anchor.x, Yn(Ht.length).map((a) => M.widgets.slider_anchor.y + M.widgets.slider_gap * a)), o = n.position(M.widgets.toggle_anchor.x, M.widgets.toggle_anchor.y);
  Ht.forEach((a, s) => a.position(i[s])), Wt[0].position(o).labelposition(M.widgets.toggle_label_pos), ot.position(n.position(M.widgets.playbutton_anchor.x, M.widgets.playbutton_anchor.y)).size(M.widgets.playbutton_size), Vn.position(n.position(M.widgets.backbutton_anchor.x, M.widgets.backbutton_anchor.y)), Kn.position(n.position(M.widgets.resetbutton_anchor.x, M.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Ht).enter().append(re), t.selectAll(null).data(Wt).enter().append(re), t.selectAll(null).data(Yp).enter().append(re);
}, Vp = (t) => {
  pt(Ke, (n) => n.widget.reset(t, n.default)), pt(Ve, (n) => n.widget.reset(t, n.default));
}, An = x.L, Gr = x.dt, Zp = x.N;
var ct = [];
const Wp = () => {
  x.timer = {}, x.tick = 0, ct = st(Yn(Zp), (t) => ({
    id: t,
    x: Math.random() * An,
    y: Math.random() * An,
    theta: Math.random() * 360,
    speed_var: 1 + Math.random() * x.speed_variation
  }));
}, Jp = () => {
  x.tick++;
  let t = Math.cos((180 - x.blind_spot.widget.value() / 2) / 180 * Math.PI);
  pt(ct, (n) => {
    let e = [];
    var r, i, o, a;
    if (e = cn(ct, (l) => Dp(n, l) < x.collision_radius.widget.value() && l.id != n.id), e.length > 0)
      r = n.x - At(e, (l) => l.x), i = n.y - At(e, (l) => l.y);
    else {
      const l = Math.cos(L(n.theta)), c = Math.sin(L(n.theta)), f = Math.sqrt(l * l + c * c), h = cn(ct, (y) => {
        let v = y.x - n.x, g = y.y - n.y;
        y.r = Math.sqrt(v * v + g * g);
        let $ = (v * l + g * c) / (f * y.r);
        return y.r < x.attraction_radius.widget.value() && $ > t && y.id != n.id;
      }), p = cn(h, (y) => y.r < x.alignment_radius.widget.value()), d = cn(h, (y) => y.r > x.alignment_radius.widget.value());
      if (o = n.theta, a = n.theta, p.length > 0) {
        const y = At(p, (g) => Math.cos(L(g.theta))), v = At(p, (g) => Math.sin(L(g.theta)));
        o = fn(Math.atan2(v, y));
      }
      if (d.length > 0) {
        const y = At(d, (g) => g.x), v = At(d, (g) => g.y);
        a = fn(Math.atan2(v - n.y, y - n.x));
      }
      r = 0.5 * (Math.cos(L(o)) + Math.cos(L(a))), i = 0.5 * (Math.sin(L(o)) + Math.sin(L(a)));
    }
    const s = Math.cos(L(n.theta)) + x.angular_increment * r, u = Math.sin(L(n.theta)) + x.angular_increment * i;
    n.theta = fn(Math.atan2(u, s));
  }), pt(ct, (n) => {
    n.theta = n.theta + (Math.random() - 0.5) * x.wiggle.widget.value();
  }), pt(ct, (n) => {
    const e = x.speed.widget.value(), r = L(n.theta);
    let i = Gr * e * n.speed_var * Math.cos(r), o = Gr * e * n.speed_var * Math.sin(r), a = n.x + i, s = n.y + o;
    (a < 0 || a > An) && (i *= -1), (s < 0 || s > An) && (o *= -1), n.x = n.x + i, n.y = n.y + o, n.theta = fn(Math.atan2(o, i));
  });
}, lo = x.L, Tn = Y().domain([0, lo]), Pn = Y().domain([0, lo]);
function Ze(t) {
  return x.orli_switch.widget.value() ? Tl(t.theta / 360) : "black";
}
const Qp = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  Tn.range([0, e]), Pn.range([0, r]), t.select("#origin").remove(), t.append("g").attr("id", "origin").selectAll("." + O.agent).data(ct).enter().append("g").attr("class", O.agent).attr("transform", (a) => "translate(" + Tn(a.x) + "," + Pn(a.y) + ")rotate(" + a.theta + ")").style("fill", Ze).append("path").attr("d", ao(x.agentsize));
}, jp = (t, n) => {
  t.selectAll("." + O.agent).attr("transform", (e) => "translate(" + Tn(e.x) + "," + Pn(e.y) + ")rotate(" + e.theta + ")").style("fill", Ze);
}, t0 = (t, n) => {
  t.selectAll("." + O.agent).attr("transform", (e) => "translate(" + Tn(e.x) + "," + Pn(e.y) + ")rotate(" + e.theta + ")").style("fill", Ze);
};
function n0(t, n) {
  Jp(), jp(t);
}
function co(t, n) {
  Wp(), Qp(t, n);
}
function e0(t, n) {
  t0(t);
}
var Ur = {};
const r0 = (t, n) => {
  ot.value() == 1 ? Ur = Ks(() => n0(t), M.simulation.delay) : Ur.stop();
}, i0 = (t) => {
  t.select("." + O.attract_scope).attr("d", Nt(M.widgets.cartoon_size * x.attraction_radius.widget.value(), 270 - x.blind_spot.widget.value() / 2)), t.select("." + O.orient_scope).attr("d", Nt(M.widgets.cartoon_size * x.alignment_radius.widget.value(), 270 - x.blind_spot.widget.value() / 2)), t.select("." + O.repell_scope).attr("r", M.widgets.cartoon_size * x.collision_radius.widget.value()), t.select("." + O.speed).attr("d", Nt(M.widgets.cartoon_speed_factor * M.widgets.cartoon_size * x.speed.widget.value(), 90 + x.wiggle.widget.value()));
}, o0 = (t, n, e) => {
  Vn.update(() => Vp(n)), ot.update(() => r0(t)), Kn.update(() => co(t, e)), pt(Ht, (r) => {
    r.update(() => i0(n));
  }), Wt[0].update(() => e0(t));
}, a0 = {
  name: "@explorables/flockn_roll",
  title: "Flock'n Roll",
  subtitle: "Collective Animal Behavior - Schooling Fish & Flocking Birds",
  description: "This is a model for collective behavior in animals, e.g. flocks of birds or schools of fish based on simple rules of interaction.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function s0(t, n = fo) {
  const e = Rp(t, n), r = e.display, i = e.controls, o = e.grid;
  return Kp(i, o), o0(r, i, n), co(r, n), {
    halt() {
      ot.value() === 1 && ot.press(i);
    },
    reset() {
      ot.value() === 1 && ot.press(i), Vn.press(i), Kn.press(i);
    },
    config: n,
    meta: a0
  };
}
export {
  fo as config,
  s0 as default,
  s0 as load,
  a0 as meta
};
