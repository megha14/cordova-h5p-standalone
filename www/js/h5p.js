/*h5p-standalone-main.js*/
      /****
       * The MIT License (MIT)
       *
       * Copyright (c) 2015 Gustavo Henke and Aaron Trent
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       *
       ****/
      /*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license*/
      var H5P;
      (function (n, t) {
        function dt(n) {
          var t = n.length,
            r = i.type(n);
          return i.isWindow(n)
            ? !1
            : 1 === n.nodeType && t
            ? !0
            : "array" === r ||
              ("function" !== r &&
                (0 === t || ("number" == typeof t && t > 0 && t - 1 in n)));
        }
        function kf(n) {
          var t = (gt[n] = {});
          return (
            i.each(n.match(s) || [], function (n, i) {
              t[i] = !0;
            }),
            t
          );
        }
        function ir(n, r, u, f) {
          if (i.acceptData(n)) {
            var s,
              h,
              c = i.expando,
              a = "string" == typeof r,
              l = n.nodeType,
              o = l ? i.cache : n,
              e = l ? n[c] : n[c] && c;
            if ((e && o[e] && (f || o[e].data)) || !a || u !== t)
              return (
                e || (l ? (n[c] = e = b.pop() || i.guid++) : (e = c)),
                o[e] || ((o[e] = {}), l || (o[e].toJSON = i.noop)),
                ("object" == typeof r || "function" == typeof r) &&
                  (f
                    ? (o[e] = i.extend(o[e], r))
                    : (o[e].data = i.extend(o[e].data, r))),
                (s = o[e]),
                f || (s.data || (s.data = {}), (s = s.data)),
                u !== t && (s[i.camelCase(r)] = u),
                a
                  ? ((h = s[r]), null == h && (h = s[i.camelCase(r)]))
                  : (h = s),
                h
              );
          }
        }
        function rr(n, t, r) {
          if (i.acceptData(n)) {
            var o,
              h,
              e,
              s = n.nodeType,
              u = s ? i.cache : n,
              f = s ? n[i.expando] : i.expando;
            if (u[f]) {
              if (t && (e = r ? u[f] : u[f].data)) {
                for (
                  i.isArray(t)
                    ? (t = t.concat(i.map(t, i.camelCase)))
                    : (t in e)
                    ? (t = [t])
                    : ((t = i.camelCase(t)),
                      (t = (t in e) ? [t] : t.split(" "))),
                    o = 0,
                    h = t.length;
                  h > o;
                  o++
                )
                  delete e[t[o]];
                if (!(r ? ni : i.isEmptyObject)(e)) return;
              }
              (r || (delete u[f].data, ni(u[f]))) &&
                (s
                  ? i.cleanData([n], !0)
                  : i.support.deleteExpando || u != u.window
                  ? delete u[f]
                  : (u[f] = null));
            }
          }
        }
        function ur(n, r, u) {
          if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(tr, "-$1").toLowerCase();
            if (((u = n.getAttribute(f)), "string" == typeof u)) {
              try {
                u =
                  "true" === u
                    ? !0
                    : "false" === u
                    ? !1
                    : "null" === u
                    ? null
                    : +u + "" === u
                    ? +u
                    : nr.test(u)
                    ? i.parseJSON(u)
                    : u;
              } catch (e) {}
              i.data(n, r, u);
            } else u = t;
          }
          return u;
        }
        function ni(n) {
          for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
              return !1;
          return !0;
        }
        function ht() {
          return !0;
        }
        function d() {
          return !1;
        }
        function cr(n, t) {
          do n = n[t];
          while (n && 1 !== n.nodeType);
          return n;
        }
        function lr(n, t, r) {
          if (((t = t || 0), i.isFunction(t)))
            return i.grep(n, function (n, i) {
              var u = !!t.call(n, i, n);
              return u === r;
            });
          if (t.nodeType)
            return i.grep(n, function (n) {
              return (n === t) === r;
            });
          if ("string" == typeof t) {
            var u = i.grep(n, function (n) {
              return 1 === n.nodeType;
            });
            if (fe.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u);
          }
          return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r;
          });
        }
        function ar(n) {
          var i = vr.split("|"),
            t = n.createDocumentFragment();
          if (t.createElement) while (i.length) t.createElement(i.pop());
          return t;
        }
        function ye(n, t) {
          return (
            n.getElementsByTagName(t)[0] ||
            n.appendChild(n.ownerDocument.createElement(t))
          );
        }
        function dr(n) {
          var t = n.getAttributeNode("type");
          return (n.type = (t && t.specified) + "/" + n.type), n;
        }
        function gr(n) {
          var t = le.exec(n.type);
          return t ? (n.type = t[1]) : n.removeAttribute("type"), n;
        }
        function si(n, t) {
          for (var u, r = 0; null != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"));
        }
        function nu(n, t) {
          if (1 === t.nodeType && i.hasData(n)) {
            var u,
              f,
              o,
              s = i._data(n),
              r = i._data(t, s),
              e = s.events;
            if (e) {
              delete r.handle;
              r.events = {};
              for (u in e)
                for (f = 0, o = e[u].length; o > f; f++)
                  i.event.add(t, u, e[u][f]);
            }
            r.data && (r.data = i.extend({}, r.data));
          }
        }
        function pe(n, t) {
          var r, f, u;
          if (1 === t.nodeType) {
            if (
              ((r = t.nodeName.toLowerCase()),
              !i.support.noCloneEvent && t[i.expando])
            ) {
              u = i._data(t);
              for (f in u.events) i.removeEvent(t, f, u.handle);
              t.removeAttribute(i.expando);
            }
            "script" === r && t.text !== n.text
              ? ((dr(t).text = n.text), gr(t))
              : "object" === r
              ? (t.parentNode && (t.outerHTML = n.outerHTML),
                i.support.html5Clone &&
                  n.innerHTML &&
                  !i.trim(t.innerHTML) &&
                  (t.innerHTML = n.innerHTML))
              : "input" === r && ei.test(n.type)
              ? ((t.defaultChecked = t.checked = n.checked),
                t.value !== n.value && (t.value = n.value))
              : "option" === r
              ? (t.defaultSelected = t.selected = n.defaultSelected)
              : ("input" === r || "textarea" === r) &&
                (t.defaultValue = n.defaultValue);
          }
        }
        function u(n, r) {
          var s,
            e,
            h = 0,
            f =
              typeof n.getElementsByTagName !== o
                ? n.getElementsByTagName(r || "*")
                : typeof n.querySelectorAll !== o
                ? n.querySelectorAll(r || "*")
                : t;
          if (!f)
            for (f = [], s = n.childNodes || n; null != (e = s[h]); h++)
              !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
          return r === t || (r && i.nodeName(n, r)) ? i.merge([n], f) : f;
        }
        function we(n) {
          ei.test(n.type) && (n.defaultChecked = n.checked);
        }
        function fu(n, t) {
          if (t in n) return t;
          for (
            var r = t.charAt(0).toUpperCase() + t.slice(1),
              u = t,
              i = uu.length;
            i--;

          )
            if (((t = uu[i] + r), t in n)) return t;
          return u;
        }
        function ut(n, t) {
          return (
            (n = t || n),
            "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
          );
        }
        function eu(n, t) {
          for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
            (r = n[u]),
              r.style &&
                ((e[u] = i._data(r, "olddisplay")),
                (f = r.style.display),
                t
                  ? (e[u] || "none" !== f || (r.style.display = ""),
                    "" === r.style.display &&
                      ut(r) &&
                      (e[u] = i._data(r, "olddisplay", cu(r.nodeName))))
                  : e[u] ||
                    ((o = ut(r)),
                    ((f && "none" !== f) || !o) &&
                      i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
          for (u = 0; s > u; u++)
            (r = n[u]),
              r.style &&
                ((t && "none" !== r.style.display && "" !== r.style.display) ||
                  (r.style.display = t ? e[u] || "" : "none"));
          return n;
        }
        function ou(n, t, i) {
          var r = ge.exec(t);
          return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
        }
        function su(n, t, r, u, f) {
          for (
            var e =
                r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
              o = 0;
            4 > e;
            e += 2
          )
            "margin" === r && (o += i.css(n, r + p[e], !0, f)),
              u
                ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)),
                  "margin" !== r &&
                    (o -= i.css(n, "border" + p[e] + "Width", !0, f)))
                : ((o += i.css(n, "padding" + p[e], !0, f)),
                  "padding" !== r &&
                    (o += i.css(n, "border" + p[e] + "Width", !0, f)));
          return o;
        }
        function hu(n, t, r) {
          var e = !0,
            u = "width" === t ? n.offsetWidth : n.offsetHeight,
            f = v(n),
            o =
              i.support.boxSizing &&
              "border-box" === i.css(n, "boxSizing", !1, f);
          if (0 >= u || null == u) {
            if (
              ((u = y(n, t, f)),
              (0 > u || null == u) && (u = n.style[t]),
              ct.test(u))
            )
              return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0;
          }
          return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px";
        }
        function cu(n) {
          var u = r,
            t = iu[n];
          return (
            t ||
              ((t = lu(n, u)),
              ("none" !== t && t) ||
                ((rt = (
                  rt ||
                  i("<iframe frameborder='0' width='0' height='0'/>").css(
                    "cssText",
                    "display:block !important"
                  )
                ).appendTo(u.documentElement)),
                (u = (rt[0].contentWindow || rt[0].contentDocument).document),
                u.write("<!doctype html><html><body>"),
                u.close(),
                (t = lu(n, u)),
                rt.detach()),
              (iu[n] = t)),
            t
          );
        }
        function lu(n, t) {
          var r = i(t.createElement(n)).appendTo(t.body),
            u = i.css(r[0], "display");
          return r.remove(), u;
        }
        function ci(n, t, r, u) {
          var f;
          if (i.isArray(t))
            i.each(t, function (t, i) {
              r || ro.test(n)
                ? u(n, i)
                : ci(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u);
            });
          else if (r || "object" !== i.type(t)) u(n, t);
          else for (f in t) ci(n + "[" + f + "]", t[f], r, u);
        }
        function ku(n) {
          return function (t, r) {
            "string" != typeof t && ((r = t), (t = "*"));
            var u,
              f = 0,
              e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
              while ((u = e[f++]))
                "+" === u[0]
                  ? ((u = u.slice(1) || "*"), (n[u] = n[u] || []).unshift(r))
                  : (n[u] = n[u] || []).push(r);
          };
        }
        function du(n, r, u, f) {
          function o(h) {
            var c;
            return (
              (e[h] = !0),
              i.each(n[h] || [], function (n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || e[h]
                  ? s
                    ? !(c = h)
                    : t
                  : (r.dataTypes.unshift(h), o(h), !1);
              }),
              c
            );
          }
          var e = {},
            s = n === vi;
          return o(r.dataTypes[0]) || (!e["*"] && o("*"));
        }
        function yi(n, r) {
          var f,
            u,
            e = i.ajaxSettings.flatOptions || {};
          for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
          return f && i.extend(!0, n, f), n;
        }
        function co(n, i, r) {
          var s,
            o,
            e,
            u,
            h = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
          for (u in c) u in r && (i[c[u]] = r[u]);
          while ("*" === f[0])
            f.shift(),
              o === t &&
                (o = n.mimeType || i.getResponseHeader("Content-Type"));
          if (o)
            for (u in h)
              if (h[u] && h[u].test(o)) {
                f.unshift(u);
                break;
              }
          if (f[0] in r) e = f[0];
          else {
            for (u in r) {
              if (!f[0] || n.converters[u + " " + f[0]]) {
                e = u;
                break;
              }
              s || (s = u);
            }
            e = e || s;
          }
          return e ? (e !== f[0] && f.unshift(e), r[e]) : t;
        }
        function lo(n, t) {
          var o,
            r,
            i,
            e,
            u = {},
            h = 0,
            s = n.dataTypes.slice(),
            f = s[0];
          if ((n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1]))
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
          for (; (r = s[++h]); )
            if ("*" !== r) {
              if ("*" !== f && f !== r) {
                if (((i = u[f + " " + r] || u["* " + r]), !i))
                  for (o in u)
                    if (
                      ((e = o.split(" ")),
                      e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]]))
                    ) {
                      i === !0
                        ? (i = u[o])
                        : u[o] !== !0 && ((r = e[0]), s.splice(h--, 0, r));
                      break;
                    }
                if (i !== !0)
                  if (i && n.throws) t = i(t);
                  else
                    try {
                      t = i(t);
                    } catch (c) {
                      return {
                        state: "parsererror",
                        error: i ? c : "No conversion from " + f + " to " + r,
                      };
                    }
              }
              f = r;
            }
          return { state: "success", data: t };
        }
        function nf() {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        }
        function ao() {
          try {
            return new n.ActiveXObject("Microsoft.XMLHTTP");
          } catch (t) {}
        }
        function tf() {
          return (
            setTimeout(function () {
              tt = t;
            }),
            (tt = i.now())
          );
        }
        function wo(n, t) {
          i.each(t, function (t, i) {
            for (
              var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length;
              f > r;
              r++
            )
              if (u[r].call(n, t, i)) return;
          });
        }
        function rf(n, t, r) {
          var h,
            e,
            o = 0,
            l = yt.length,
            f = i.Deferred().always(function () {
              delete c.elem;
            }),
            c = function () {
              if (e) return !1;
              for (
                var s = tt || tf(),
                  t = Math.max(0, u.startTime + u.duration - s),
                  h = t / u.duration || 0,
                  i = 1 - h,
                  r = 0,
                  o = u.tweens.length;
                o > r;
                r++
              )
                u.tweens[r].run(i);
              return (
                f.notifyWith(n, [u, i, t]),
                1 > i && o ? t : (f.resolveWith(n, [u]), !1)
              );
            },
            u = f.promise({
              elem: n,
              props: i.extend({}, t),
              opts: i.extend(!0, { specialEasing: {} }, r),
              originalProperties: t,
              originalOptions: r,
              startTime: tt || tf(),
              duration: r.duration,
              tweens: [],
              createTween: function (t, r) {
                var f = i.Tween(
                  n,
                  u.opts,
                  t,
                  r,
                  u.opts.specialEasing[t] || u.opts.easing
                );
                return u.tweens.push(f), f;
              },
              stop: function (t) {
                var i = 0,
                  r = t ? u.tweens.length : 0;
                if (e) return this;
                for (e = !0; r > i; i++) u.tweens[i].run(1);
                return (
                  t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                );
              },
            }),
            s = u.props;
          for (bo(s, u.opts.specialEasing); l > o; o++)
            if ((h = yt[o].call(u, n, s, u.opts))) return h;
          return (
            wo(u, s),
            i.isFunction(u.opts.start) && u.opts.start.call(n, u),
            i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })),
            u
              .progress(u.opts.progress)
              .done(u.opts.done, u.opts.complete)
              .fail(u.opts.fail)
              .always(u.opts.always)
          );
        }
        function bo(n, t) {
          var u, f, r, e, o;
          for (r in n)
            if (
              ((f = i.camelCase(r)),
              (e = t[f]),
              (u = n[r]),
              i.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
              r !== f && ((n[f] = u), delete n[r]),
              (o = i.cssHooks[f]),
              o && "expand" in o)
            ) {
              u = o.expand(u);
              delete n[f];
              for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
            } else t[f] = e;
        }
        function ko(n, t, r) {
          var u,
            o,
            w,
            a,
            s,
            v,
            l,
            f,
            b,
            h = this,
            e = n.style,
            y = {},
            p = [],
            c = n.nodeType && ut(n);
          r.queue ||
            ((f = i._queueHooks(n, "fx")),
            null == f.unqueued &&
              ((f.unqueued = 0),
              (b = f.empty.fire),
              (f.empty.fire = function () {
                f.unqueued || b();
              })),
            f.unqueued++,
            h.always(function () {
              h.always(function () {
                f.unqueued--;
                i.queue(n, "fx").length || f.empty.fire();
              });
            }));
          1 === n.nodeType &&
            ("height" in t || "width" in t) &&
            ((r.overflow = [e.overflow, e.overflowX, e.overflowY]),
            "inline" === i.css(n, "display") &&
              "none" === i.css(n, "float") &&
              (i.support.inlineBlockNeedsLayout && "inline" !== cu(n.nodeName)
                ? (e.zoom = 1)
                : (e.display = "inline-block")));
          r.overflow &&
            ((e.overflow = "hidden"),
            i.support.shrinkWrapBlocks ||
              h.always(function () {
                e.overflow = r.overflow[0];
                e.overflowX = r.overflow[1];
                e.overflowY = r.overflow[2];
              }));
          for (o in t)
            if (((a = t[o]), vo.exec(a))) {
              if (
                (delete t[o],
                (v = v || "toggle" === a),
                a === (c ? "hide" : "show"))
              )
                continue;
              p.push(o);
            }
          if ((w = p.length))
            for (
              s = i._data(n, "fxshow") || i._data(n, "fxshow", {}),
                ("hidden" in s) && (c = s.hidden),
                v && (s.hidden = !c),
                c
                  ? i(n).show()
                  : h.done(function () {
                      i(n).hide();
                    }),
                h.done(function () {
                  var t;
                  i._removeData(n, "fxshow");
                  for (t in y) i.style(n, t, y[t]);
                }),
                o = 0;
              w > o;
              o++
            )
              (u = p[o]),
                (l = h.createTween(u, c ? s[u] : 0)),
                (y[u] = s[u] || i.style(n, u)),
                u in s ||
                  ((s[u] = l.start),
                  c &&
                    ((l.end = l.start),
                    (l.start = "width" === u || "height" === u ? 1 : 0)));
        }
        function f(n, t, i, r, u) {
          return new f.prototype.init(n, t, i, r, u);
        }
        function pt(n, t) {
          var r,
            i = { height: n },
            u = 0;
          for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            (r = p[u]), (i["margin" + r] = i["padding" + r] = n);
          return t && (i.opacity = i.width = n), i;
        }
        function uf(n) {
          return i.isWindow(n)
            ? n
            : 9 === n.nodeType
            ? n.defaultView || n.parentWindow
            : !1;
        }
        var et,
          wi,
          o = typeof t,
          r = n.document,
          ff = n.location,
          ef = n.jQuery,
          of = n.$,
          ot = {},
          b = [],
          wt = "1.9.1",
          bi = b.concat,
          bt = b.push,
          l = b.slice,
          ki = b.indexOf,
          sf = ot.toString,
          it = ot.hasOwnProperty,
          kt = wt.trim,
          i = function (n, t) {
            return new i.fn.init(n, t, wi);
          },
          st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          s = /\S+/g,
          hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
          di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          lf = /^[\],:{}\s]*$/,
          af = /(?:^|:|,)(?:\s*\[)+/g,
          vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
          yf =
            /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
          pf = /^-ms-/,
          wf = /-([\da-z])/gi,
          bf = function (n, t) {
            return t.toUpperCase();
          },
          h = function (n) {
            (r.addEventListener ||
              "load" === n.type ||
              "complete" === r.readyState) &&
              (gi(), i.ready());
          },
          gi = function () {
            r.addEventListener
              ? (r.removeEventListener("DOMContentLoaded", h, !1),
                n.removeEventListener("load", h, !1))
              : (r.detachEvent("onreadystatechange", h),
                n.detachEvent("onload", h));
          },
          gt,
          nr,
          tr,
          pi,
          lt,
          g,
          nt,
          gu,
          at;
        i.fn = i.prototype = {
          jquery: wt,
          constructor: i,
          init: function (n, u, f) {
            var e, o;
            if (!n) return this;
            if ("string" == typeof n) {
              if (
                ((e =
                  "<" === n.charAt(0) &&
                  ">" === n.charAt(n.length - 1) &&
                  n.length >= 3
                    ? [null, n, null]
                    : cf.exec(n)),
                !e || (!e[1] && u))
              )
                return !u || u.jquery
                  ? (u || f).find(n)
                  : this.constructor(u).find(n);
              if (e[1]) {
                if (
                  ((u = u instanceof i ? u[0] : u),
                  i.merge(
                    this,
                    i.parseHTML(
                      e[1],
                      u && u.nodeType ? u.ownerDocument || u : r,
                      !0
                    )
                  ),
                  di.test(e[1]) && i.isPlainObject(u))
                )
                  for (e in u)
                    i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                return this;
              }
              if (((o = r.getElementById(e[2])), o && o.parentNode)) {
                if (o.id !== e[2]) return f.find(n);
                this.length = 1;
                this[0] = o;
              }
              return (this.context = r), (this.selector = n), this;
            }
            return n.nodeType
              ? ((this.context = this[0] = n), (this.length = 1), this)
              : i.isFunction(n)
              ? f.ready(n)
              : (n.selector !== t &&
                  ((this.selector = n.selector), (this.context = n.context)),
                i.makeArray(n, this));
          },
          selector: "",
          length: 0,
          size: function () {
            return this.length;
          },
          toArray: function () {
            return l.call(this);
          },
          get: function (n) {
            return null == n
              ? this.toArray()
              : 0 > n
              ? this[this.length + n]
              : this[n];
          },
          pushStack: function (n) {
            var t = i.merge(this.constructor(), n);
            return (t.prevObject = this), (t.context = this.context), t;
          },
          each: function (n, t) {
            return i.each(this, n, t);
          },
          ready: function (n) {
            return i.ready.promise().done(n), this;
          },
          slice: function () {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (n) {
            var i = this.length,
              t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : []);
          },
          map: function (n) {
            return this.pushStack(
              i.map(this, function (t, i) {
                return n.call(t, i, t);
              })
            );
          },
          end: function () {
            return this.prevObject || this.constructor(null);
          },
          push: bt,
          sort: [].sort,
          splice: [].splice,
        };
        i.fn.init.prototype = i.fn;
        i.extend = i.fn.extend = function () {
          var u,
            o,
            r,
            e,
            s,
            h,
            n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof n &&
              ((c = n), (n = arguments[1] || {}), (f = 2)),
              "object" == typeof n || i.isFunction(n) || (n = {}),
              l === f && ((n = this), --f);
            l > f;
            f++
          )
            if (null != (s = arguments[f]))
              for (e in s)
                (u = n[e]),
                  (r = s[e]),
                  n !== r &&
                    (c && r && (i.isPlainObject(r) || (o = i.isArray(r)))
                      ? (o
                          ? ((o = !1), (h = u && i.isArray(u) ? u : []))
                          : (h = u && i.isPlainObject(u) ? u : {}),
                        (n[e] = i.extend(c, h, r)))
                      : r !== t && (n[e] = r));
          return n;
        };
        i.extend({
          noConflict: function (t) {
            return (
              n.$ === i && (n.$ = of), t && n.jQuery === i && (n.jQuery = ef), i
            );
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0);
          },
          ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
              if (!r.body) return setTimeout(i.ready);
              i.isReady = !0;
              (n !== !0 && --i.readyWait > 0) ||
                (et.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"));
            }
          },
          isFunction: function (n) {
            return "function" === i.type(n);
          },
          isArray:
            Array.isArray ||
            function (n) {
              return "array" === i.type(n);
            },
          isWindow: function (n) {
            return null != n && n == n.window;
          },
          isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          },
          type: function (n) {
            return null == n
              ? n + ""
              : "object" == typeof n || "function" == typeof n
              ? ot[sf.call(n)] || "object"
              : typeof n;
          },
          isPlainObject: function (n) {
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
              return !1;
            try {
              if (
                n.constructor &&
                !it.call(n, "constructor") &&
                !it.call(n.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (u) {
              return !1;
            }
            for (var r in n);
            return r === t || it.call(n, r);
          },
          isEmptyObject: function (n) {
            for (var t in n) return !1;
            return !0;
          },
          error: function (n) {
            throw Error(n);
          },
          parseHTML: function (n, t, u) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && ((u = t), (t = !1));
            t = t || r;
            var f = di.exec(n),
              e = !u && [];
            return f
              ? [t.createElement(f[1])]
              : ((f = i.buildFragment([n], t, e)),
                e && i(e).remove(),
                i.merge([], f.childNodes));
          },
          parseJSON: function (r) {
            return n.JSON && n.JSON.parse
              ? n.JSON.parse(r)
              : null === r
              ? r
              : "string" == typeof r &&
                ((r = i.trim(r)),
                r &&
                  lf.test(r.replace(vf, "@").replace(yf, "]").replace(af, "")))
              ? Function("return " + r)()
              : (i.error("Invalid JSON: " + r), t);
          },
          parseXML: function (r) {
            var u, f;
            if (!r || "string" != typeof r) return null;
            try {
              n.DOMParser
                ? ((f = new DOMParser()),
                  (u = f.parseFromString(r, "text/xml")))
                : ((u = new ActiveXObject("Microsoft.XMLDOM")),
                  (u.async = "false"),
                  u.loadXML(r));
            } catch (e) {
              u = t;
            }
            return (
              (u &&
                u.documentElement &&
                !u.getElementsByTagName("parsererror").length) ||
                i.error("Invalid XML: " + r),
              u
            );
          },
          noop: function () {},
          globalEval: function (t) {
            t &&
              i.trim(t) &&
              (
                n.execScript ||
                function (t) {
                  n.eval.call(n, t);
                }
              )(t);
          },
          camelCase: function (n) {
            return n.replace(pf, "ms-").replace(wf, bf);
          },
          nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
          },
          each: function (n, t, i) {
            var u,
              r = 0,
              f = n.length,
              e = dt(n);
            if (i) {
              if (e) {
                for (; f > r; r++)
                  if (((u = t.apply(n[r], i)), u === !1)) break;
              } else for (r in n) if (((u = t.apply(n[r], i)), u === !1)) break;
            } else if (e) {
              for (; f > r; r++)
                if (((u = t.call(n[r], r, n[r])), u === !1)) break;
            } else
              for (r in n) if (((u = t.call(n[r], r, n[r])), u === !1)) break;
            return n;
          },
          trim:
            kt && !kt.call("﻿ ")
              ? function (n) {
                  return null == n ? "" : kt.call(n);
                }
              : function (n) {
                  return null == n ? "" : (n + "").replace(hf, "");
                },
          makeArray: function (n, t) {
            var r = t || [];
            return (
              null != n &&
                (dt(Object(n))
                  ? i.merge(r, "string" == typeof n ? [n] : n)
                  : bt.call(r, n)),
              r
            );
          },
          inArray: function (n, t, i) {
            var r;
            if (t) {
              if (ki) return ki.call(t, n, i);
              for (
                r = t.length, i = i ? (0 > i ? Math.max(0, r + i) : i) : 0;
                r > i;
                i++
              )
                if (i in t && t[i] === n) return i;
            }
            return -1;
          },
          merge: function (n, i) {
            var f = i.length,
              u = n.length,
              r = 0;
            if ("number" == typeof f) for (; f > r; r++) n[u++] = i[r];
            else while (i[r] !== t) n[u++] = i[r++];
            return (n.length = u), n;
          },
          grep: function (n, t, i) {
            var u,
              f = [],
              r = 0,
              e = n.length;
            for (i = !!i; e > r; r++)
              (u = !!t(n[r], r)), i !== u && f.push(n[r]);
            return f;
          },
          map: function (n, t, i) {
            var u,
              r = 0,
              e = n.length,
              o = dt(n),
              f = [];
            if (o)
              for (; e > r; r++)
                (u = t(n[r], r, i)), null != u && (f[f.length] = u);
            else
              for (r in n) (u = t(n[r], r, i)), null != u && (f[f.length] = u);
            return bi.apply([], f);
          },
          guid: 1,
          proxy: function (n, r) {
            var f, u, e;
            return (
              "string" == typeof r && ((e = n[r]), (r = n), (n = e)),
              i.isFunction(n)
                ? ((f = l.call(arguments, 2)),
                  (u = function () {
                    return n.apply(r || this, f.concat(l.call(arguments)));
                  }),
                  (u.guid = n.guid = n.guid || i.guid++),
                  u)
                : t
            );
          },
          access: function (n, r, u, f, e, o, s) {
            var h = 0,
              l = n.length,
              c = null == u;
            if ("object" === i.type(u)) {
              e = !0;
              for (h in u) i.access(n, r, h, u[h], !0, o, s);
            } else if (
              f !== t &&
              ((e = !0),
              i.isFunction(f) || (s = !0),
              c &&
                (s
                  ? (r.call(n, f), (r = null))
                  : ((c = r),
                    (r = function (n, t, r) {
                      return c.call(i(n), r);
                    }))),
              r)
            )
              for (; l > h; h++)
                r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o;
          },
          now: function () {
            return new Date().getTime();
          },
        });
        i.ready.promise = function (t) {
          if (!et)
            if (((et = i.Deferred()), "complete" === r.readyState))
              setTimeout(i.ready);
            else if (r.addEventListener)
              r.addEventListener("DOMContentLoaded", h, !1),
                n.addEventListener("load", h, !1);
            else {
              r.attachEvent("onreadystatechange", h);
              n.attachEvent("onload", h);
              var u = !1;
              try {
                u = null == n.frameElement && r.documentElement;
              } catch (e) {}
              u &&
                u.doScroll &&
                (function f() {
                  if (!i.isReady) {
                    try {
                      u.doScroll("left");
                    } catch (n) {
                      return setTimeout(f, 50);
                    }
                    gi();
                    i.ready();
                  }
                })();
            }
          return et.promise(t);
        };
        i.each(
          "Boolean Number String Function Array Date RegExp Object Error".split(
            " "
          ),
          function (n, t) {
            ot["[object " + t + "]"] = t.toLowerCase();
          }
        );
        wi = i(r);
        gt = {};
        i.Callbacks = function (n) {
          n = "string" == typeof n ? gt[n] || kf(n) : i.extend({}, n);
          var o,
            f,
            c,
            s,
            e,
            l,
            r = [],
            u = !n.once && [],
            a = function (t) {
              for (
                f = n.memory && t,
                  c = !0,
                  e = l || 0,
                  l = 0,
                  s = r.length,
                  o = !0;
                r && s > e;
                e++
              )
                if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                  f = !1;
                  break;
                }
              o = !1;
              r && (u ? u.length && a(u.shift()) : f ? (r = []) : h.disable());
            },
            h = {
              add: function () {
                if (r) {
                  var t = r.length;
                  (function u(t) {
                    i.each(t, function (t, f) {
                      var e = i.type(f);
                      "function" === e
                        ? (n.unique && h.has(f)) || r.push(f)
                        : f && f.length && "string" !== e && u(f);
                    });
                  })(arguments);
                  o ? (s = r.length) : f && ((l = t), a(f));
                }
                return this;
              },
              remove: function () {
                return (
                  r &&
                    i.each(arguments, function (n, t) {
                      for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1), o && (s >= u && s--, e >= u && e--);
                    }),
                  this
                );
              },
              has: function (n) {
                return n ? i.inArray(n, r) > -1 : !(!r || !r.length);
              },
              empty: function () {
                return (r = []), this;
              },
              disable: function () {
                return (r = u = f = t), this;
              },
              disabled: function () {
                return !r;
              },
              lock: function () {
                return (u = t), f || h.disable(), this;
              },
              locked: function () {
                return !u;
              },
              fireWith: function (n, t) {
                return (
                  (t = t || []),
                  (t = [n, t.slice ? t.slice() : t]),
                  !r || (c && !u) || (o ? u.push(t) : a(t)),
                  this
                );
              },
              fire: function () {
                return h.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!c;
              },
            };
          return h;
        };
        i.extend({
          Deferred: function (n) {
            var u = [
                ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                ["notify", "progress", i.Callbacks("memory")],
              ],
              f = "pending",
              r = {
                state: function () {
                  return f;
                },
                always: function () {
                  return t.done(arguments).fail(arguments), this;
                },
                then: function () {
                  var n = arguments;
                  return i
                    .Deferred(function (f) {
                      i.each(u, function (u, e) {
                        var s = e[0],
                          o = i.isFunction(n[u]) && n[u];
                        t[e[1]](function () {
                          var n = o && o.apply(this, arguments);
                          n && i.isFunction(n.promise)
                            ? n
                                .promise()
                                .done(f.resolve)
                                .fail(f.reject)
                                .progress(f.notify)
                            : f[s + "With"](
                                this === r ? f.promise() : this,
                                o ? [n] : arguments
                              );
                        });
                      });
                      n = null;
                    })
                    .promise();
                },
                promise: function (n) {
                  return null != n ? i.extend(n, r) : r;
                },
              },
              t = {};
            return (
              (r.pipe = r.then),
              i.each(u, function (n, i) {
                var e = i[2],
                  o = i[3];
                r[i[1]] = e.add;
                o &&
                  e.add(
                    function () {
                      f = o;
                    },
                    u[1 ^ n][2].disable,
                    u[2][2].lock
                  );
                t[i[0]] = function () {
                  return (
                    t[i[0] + "With"](this === t ? r : this, arguments), this
                  );
                };
                t[i[0] + "With"] = e.fireWith;
              }),
              r.promise(t),
              n && n.call(t, t),
              t
            );
          },
          when: function (n) {
            var t = 0,
              u = l.call(arguments),
              r = u.length,
              e = 1 !== r || (n && i.isFunction(n.promise)) ? r : 0,
              f = 1 === e ? n : i.Deferred(),
              h = function (n, t, i) {
                return function (r) {
                  t[n] = this;
                  i[n] = arguments.length > 1 ? l.call(arguments) : r;
                  i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
                };
              },
              o,
              c,
              s;
            if (r > 1)
              for (o = Array(r), c = Array(r), s = Array(r); r > t; t++)
                u[t] && i.isFunction(u[t].promise)
                  ? u[t]
                      .promise()
                      .done(h(t, s, u))
                      .fail(f.reject)
                      .progress(h(t, c, o))
                  : --e;
            return e || f.resolveWith(s, u), f.promise();
          },
        });
        i.support = (function () {
          var u,
            s,
            e,
            f,
            h,
            c,
            l,
            a,
            y,
            v,
            t = r.createElement("div");
          if (
            (t.setAttribute("className", "t"),
            (t.innerHTML =
              "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>"),
            (s = t.getElementsByTagName("*")),
            (e = t.getElementsByTagName("a")[0]),
            !s || !e || !s.length)
          )
            return {};
          h = r.createElement("select");
          l = h.appendChild(r.createElement("option"));
          f = t.getElementsByTagName("input")[0];
          e.style.cssText = "top:1px;float:left;opacity:.5";
          u = {
            getSetAttribute: "t" !== t.className,
            leadingWhitespace: 3 === t.firstChild.nodeType,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: !!f.value,
            optSelected: l.selected,
            enctype: !!r.createElement("form").enctype,
            html5Clone:
              "<:nav><\/:nav>" !==
              r.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === r.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1,
          };
          f.checked = !0;
          u.noCloneChecked = f.cloneNode(!0).checked;
          h.disabled = !0;
          u.optDisabled = !l.disabled;
          try {
            delete t.test;
          } catch (p) {
            u.deleteExpando = !1;
          }
          f = r.createElement("input");
          f.setAttribute("value", "");
          u.input = "" === f.getAttribute("value");
          f.value = "t";
          f.setAttribute("type", "radio");
          u.radioValue = "t" === f.value;
          f.setAttribute("checked", "t");
          f.setAttribute("name", "t");
          c = r.createDocumentFragment();
          c.appendChild(f);
          u.appendChecked = f.checked;
          u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
          t.attachEvent &&
            (t.attachEvent("onclick", function () {
              u.noCloneEvent = !1;
            }),
            t.cloneNode(!0).click());
          for (v in { submit: !0, change: !0, focusin: !0 })
            t.setAttribute((a = "on" + v), "t"),
              (u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1);
          return (
            (t.style.backgroundClip = "content-box"),
            (t.cloneNode(!0).style.backgroundClip = ""),
            (u.clearCloneStyle = "content-box" === t.style.backgroundClip),
            i(function () {
              var e,
                f,
                i,
                h =
                  "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = r.getElementsByTagName("body")[0];
              s &&
                ((e = r.createElement("div")),
                (e.style.cssText =
                  "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                s.appendChild(e).appendChild(t),
                (t.innerHTML =
                  "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>"),
                (i = t.getElementsByTagName("td")),
                (i[0].style.cssText =
                  "padding:0;margin:0;border:0;display:none"),
                (y = 0 === i[0].offsetHeight),
                (i[0].style.display = ""),
                (i[1].style.display = "none"),
                (u.reliableHiddenOffsets = y && 0 === i[0].offsetHeight),
                (t.innerHTML = ""),
                (t.style.cssText =
                  "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
                (u.boxSizing = 4 === t.offsetWidth),
                (u.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop),
                n.getComputedStyle &&
                  ((u.pixelPosition =
                    "1%" !== (n.getComputedStyle(t, null) || {}).top),
                  (u.boxSizingReliable =
                    "4px" ===
                    (n.getComputedStyle(t, null) || { width: "4px" }).width),
                  (f = t.appendChild(r.createElement("div"))),
                  (f.style.cssText = t.style.cssText = h),
                  (f.style.marginRight = f.style.width = "0"),
                  (t.style.width = "1px"),
                  (u.reliableMarginRight = !parseFloat(
                    (n.getComputedStyle(f, null) || {}).marginRight
                  ))),
                typeof t.style.zoom !== o &&
                  ((t.innerHTML = ""),
                  (t.style.cssText =
                    h + "width:1px;padding:1px;display:inline;zoom:1"),
                  (u.inlineBlockNeedsLayout = 3 === t.offsetWidth),
                  (t.style.display = "block"),
                  (t.innerHTML = "<div><\/div>"),
                  (t.firstChild.style.width = "5px"),
                  (u.shrinkWrapBlocks = 3 !== t.offsetWidth),
                  u.inlineBlockNeedsLayout && (s.style.zoom = 1)),
                s.removeChild(e),
                (e = t = i = f = null));
            }),
            (s = h = c = l = e = f = null),
            u
          );
        })();
        nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
        tr = /([A-Z])/g;
        i.extend({
          cache: {},
          expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
          noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0,
          },
          hasData: function (n) {
            return (
              (n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando]),
              !!n && !ni(n)
            );
          },
          data: function (n, t, i) {
            return ir(n, t, i);
          },
          removeData: function (n, t) {
            return rr(n, t);
          },
          _data: function (n, t, i) {
            return ir(n, t, i, !0);
          },
          _removeData: function (n, t) {
            return rr(n, t, !0);
          },
          acceptData: function (n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || (t !== !0 && n.getAttribute("classid") === t);
          },
        });
        i.fn.extend({
          data: function (n, r) {
            var e,
              f,
              u = this[0],
              o = 0,
              s = null;
            if (n === t) {
              if (
                this.length &&
                ((s = i.data(u)),
                1 === u.nodeType && !i._data(u, "parsedAttrs"))
              ) {
                for (e = u.attributes; e.length > o; o++)
                  (f = e[o].name),
                    f.indexOf("data-") ||
                      ((f = i.camelCase(f.slice(5))), ur(u, f, s[f]));
                i._data(u, "parsedAttrs", !0);
              }
              return s;
            }
            return "object" == typeof n
              ? this.each(function () {
                  i.data(this, n);
                })
              : i.access(
                  this,
                  function (r) {
                    return r === t
                      ? u
                        ? ur(u, n, i.data(u, n))
                        : null
                      : (this.each(function () {
                          i.data(this, n, r);
                        }),
                        t);
                  },
                  null,
                  r,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (n) {
            return this.each(function () {
              i.removeData(this, n);
            });
          },
        });
        i.extend({
          queue: function (n, r, u) {
            var f;
            return n
              ? ((r = (r || "fx") + "queue"),
                (f = i._data(n, r)),
                u &&
                  (!f || i.isArray(u)
                    ? (f = i._data(n, r, i.makeArray(u)))
                    : f.push(u)),
                f || [])
              : t;
          },
          dequeue: function (n, t) {
            t = t || "fx";
            var f = i.queue(n, t),
              e = f.length,
              r = f.shift(),
              u = i._queueHooks(n, t),
              o = function () {
                i.dequeue(n, t);
              };
            "inprogress" === r && ((r = f.shift()), e--);
            u.cur = r;
            r &&
              ("fx" === t && f.unshift("inprogress"),
              delete u.stop,
              r.call(n, o, u));
            !e && u && u.empty.fire();
          },
          _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return (
              i._data(n, r) ||
              i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                  i._removeData(n, t + "queue");
                  i._removeData(n, r);
                }),
              })
            );
          },
        });
        i.fn.extend({
          queue: function (n, r) {
            var u = 2;
            return (
              "string" != typeof n && ((r = n), (n = "fx"), u--),
              u > arguments.length
                ? i.queue(this[0], n)
                : r === t
                ? this
                : this.each(function () {
                    var t = i.queue(this, n, r);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n);
                  })
            );
          },
          dequeue: function (n) {
            return this.each(function () {
              i.dequeue(this, n);
            });
          },
          delay: function (n, t) {
            return (
              (n = i.fx ? i.fx.speeds[n] || n : n),
              (t = t || "fx"),
              this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                  clearTimeout(r);
                };
              })
            );
          },
          clearQueue: function (n) {
            return this.queue(n || "fx", []);
          },
          promise: function (n, r) {
            var u,
              e = 1,
              o = i.Deferred(),
              f = this,
              s = this.length,
              h = function () {
                --e || o.resolveWith(f, [f]);
              };
            for (
              "string" != typeof n && ((r = n), (n = t)), n = n || "fx";
              s--;

            )
              (u = i._data(f[s], n + "queueHooks")),
                u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(r);
          },
        });
        var k,
          fr,
          ti = /[\t\r\n]/g,
          df = /\r/g,
          gf = /^(?:input|select|textarea|button|object)$/i,
          ne = /^(?:a|area)$/i,
          er =
            /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
          ii = /^(?:checked|selected)$/i,
          a = i.support.getSetAttribute,
          ri = i.support.input;
        i.fn.extend({
          attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1);
          },
          removeAttr: function (n) {
            return this.each(function () {
              i.removeAttr(this, n);
            });
          },
          prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1);
          },
          removeProp: function (n) {
            return (
              (n = i.propFix[n] || n),
              this.each(function () {
                try {
                  this[n] = t;
                  delete this[n];
                } catch (i) {}
              })
            );
          },
          addClass: function (n) {
            var e,
              t,
              r,
              u,
              o,
              f = 0,
              h = this.length,
              c = "string" == typeof n && n;
            if (i.isFunction(n))
              return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className));
              });
            if (c)
              for (e = (n || "").match(s) || []; h > f; f++)
                if (
                  ((t = this[f]),
                  (r =
                    1 === t.nodeType &&
                    (t.className
                      ? (" " + t.className + " ").replace(ti, " ")
                      : " ")))
                ) {
                  for (o = 0; (u = e[o++]); )
                    0 > r.indexOf(" " + u + " ") && (r += u + " ");
                  t.className = i.trim(r);
                }
            return this;
          },
          removeClass: function (n) {
            var e,
              t,
              r,
              u,
              o,
              f = 0,
              h = this.length,
              c = 0 === arguments.length || ("string" == typeof n && n);
            if (i.isFunction(n))
              return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className));
              });
            if (c)
              for (e = (n || "").match(s) || []; h > f; f++)
                if (
                  ((t = this[f]),
                  (r =
                    1 === t.nodeType &&
                    (t.className
                      ? (" " + t.className + " ").replace(ti, " ")
                      : "")))
                ) {
                  for (o = 0; (u = e[o++]); )
                    while (r.indexOf(" " + u + " ") >= 0)
                      r = r.replace(" " + u + " ", " ");
                  t.className = n ? i.trim(r) : "";
                }
            return this;
          },
          toggleClass: function (n, t) {
            var r = typeof n,
              u = "boolean" == typeof t;
            return i.isFunction(n)
              ? this.each(function (r) {
                  i(this).toggleClass(n.call(this, r, this.className, t), t);
                })
              : this.each(function () {
                  if ("string" === r)
                    for (
                      var f, c = 0, h = i(this), e = t, l = n.match(s) || [];
                      (f = l[c++]);

                    )
                      (e = u ? e : !h.hasClass(f)),
                        h[e ? "addClass" : "removeClass"](f);
                  else
                    (r === o || "boolean" === r) &&
                      (this.className &&
                        i._data(this, "__className__", this.className),
                      (this.className =
                        this.className || n === !1
                          ? ""
                          : i._data(this, "__className__") || ""));
                });
          },
          hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
              if (
                1 === this[t].nodeType &&
                (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0
              )
                return !0;
            return !1;
          },
          val: function (n) {
            var u,
              r,
              e,
              f = this[0];
            return arguments.length
              ? ((e = i.isFunction(n)),
                this.each(function (u) {
                  var f,
                    o = i(this);
                  1 === this.nodeType &&
                    ((f = e ? n.call(this, u, o.val()) : n),
                    null == f
                      ? (f = "")
                      : "number" == typeof f
                      ? (f += "")
                      : i.isArray(f) &&
                        (f = i.map(f, function (n) {
                          return null == n ? "" : n + "";
                        })),
                    (r =
                      i.valHooks[this.type] ||
                      i.valHooks[this.nodeName.toLowerCase()]),
                    (r && "set" in r && r.set(this, f, "value") !== t) ||
                      (this.value = f));
                }))
              : f
              ? ((r =
                  i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]),
                r && "get" in r && (u = r.get(f, "value")) !== t
                  ? u
                  : ((u = f.value),
                    "string" == typeof u
                      ? u.replace(df, "")
                      : null == u
                      ? ""
                      : u))
              : void 0;
          },
        });
        i.extend({
          valHooks: {
            option: {
              get: function (n) {
                var t = n.attributes.value;
                return !t || t.specified ? n.value : n.text;
              },
            },
            select: {
              get: function (n) {
                for (
                  var e,
                    t,
                    o = n.options,
                    r = n.selectedIndex,
                    u = "select-one" === n.type || 0 > r,
                    s = u ? null : [],
                    h = u ? r + 1 : o.length,
                    f = 0 > r ? h : u ? r : 0;
                  h > f;
                  f++
                )
                  if (
                    ((t = o[f]),
                    !(
                      (!t.selected && f !== r) ||
                      (i.support.optDisabled
                        ? t.disabled
                        : null !== t.getAttribute("disabled")) ||
                      (t.parentNode.disabled &&
                        i.nodeName(t.parentNode, "optgroup"))
                    ))
                  ) {
                    if (((e = i(t).val()), u)) return e;
                    s.push(e);
                  }
                return s;
              },
              set: function (n, t) {
                var r = i.makeArray(t);
                return (
                  i(n)
                    .find("option")
                    .each(function () {
                      this.selected = i.inArray(i(this).val(), r) >= 0;
                    }),
                  r.length || (n.selectedIndex = -1),
                  r
                );
              },
            },
          },
          attr: function (n, r, u) {
            var f,
              s,
              e,
              h = n.nodeType;
            if (n && 3 !== h && 8 !== h && 2 !== h)
              return typeof n.getAttribute === o
                ? i.prop(n, r, u)
                : ((s = 1 !== h || !i.isXMLDoc(n)),
                  s &&
                    ((r = r.toLowerCase()),
                    (f = i.attrHooks[r] || (er.test(r) ? fr : k))),
                  u === t
                    ? f && s && "get" in f && null !== (e = f.get(n, r))
                      ? e
                      : (typeof n.getAttribute !== o && (e = n.getAttribute(r)),
                        null == e ? t : e)
                    : null !== u
                    ? f && s && "set" in f && (e = f.set(n, u, r)) !== t
                      ? e
                      : (n.setAttribute(r, u + ""), u)
                    : (i.removeAttr(n, r), t));
          },
          removeAttr: function (n, t) {
            var r,
              u,
              e = 0,
              f = t && t.match(s);
            if (f && 1 === n.nodeType)
              while ((r = f[e++]))
                (u = i.propFix[r] || r),
                  er.test(r)
                    ? !a && ii.test(r)
                      ? (n[i.camelCase("default-" + r)] = n[u] = !1)
                      : (n[u] = !1)
                    : i.attr(n, r, ""),
                  n.removeAttribute(a ? r : u);
          },
          attrHooks: {
            type: {
              set: function (n, t) {
                if (
                  !i.support.radioValue &&
                  "radio" === t &&
                  i.nodeName(n, "input")
                ) {
                  var r = n.value;
                  return n.setAttribute("type", t), r && (n.value = r), t;
                }
              },
            },
          },
          propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable",
          },
          prop: function (n, r, u) {
            var e,
              f,
              s,
              o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o)
              return (
                (s = 1 !== o || !i.isXMLDoc(n)),
                s && ((r = i.propFix[r] || r), (f = i.propHooks[r])),
                u !== t
                  ? f && "set" in f && (e = f.set(n, u, r)) !== t
                    ? e
                    : (n[r] = u)
                  : f && "get" in f && null !== (e = f.get(n, r))
                  ? e
                  : n[r]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (n) {
                var i = n.getAttributeNode("tabindex");
                return i && i.specified
                  ? parseInt(i.value, 10)
                  : gf.test(n.nodeName) || (ne.test(n.nodeName) && n.href)
                  ? 0
                  : t;
              },
            },
          },
        });
        fr = {
          get: function (n, r) {
            var u = i.prop(n, r),
              f = "boolean" == typeof u && n.getAttribute(r),
              e =
                "boolean" == typeof u
                  ? ri && a
                    ? null != f
                    : ii.test(r)
                    ? n[i.camelCase("default-" + r)]
                    : !!f
                  : n.getAttributeNode(r);
            return e && e.value !== !1 ? r.toLowerCase() : t;
          },
          set: function (n, t, r) {
            return (
              t === !1
                ? i.removeAttr(n, r)
                : (ri && a) || !ii.test(r)
                ? n.setAttribute((!a && i.propFix[r]) || r, r)
                : (n[i.camelCase("default-" + r)] = n[r] = !0),
              r
            );
          },
        };
        (ri && a) ||
          (i.attrHooks.value = {
            get: function (n, r) {
              var u = n.getAttributeNode(r);
              return i.nodeName(n, "input")
                ? n.defaultValue
                : u && u.specified
                ? u.value
                : t;
            },
            set: function (n, r, u) {
              return i.nodeName(n, "input")
                ? ((n.defaultValue = r), t)
                : k && k.set(n, r, u);
            },
          });
        a ||
          ((k = i.valHooks.button =
            {
              get: function (n, i) {
                var r = n.getAttributeNode(i);
                return r &&
                  ("id" === i || "name" === i || "coords" === i
                    ? "" !== r.value
                    : r.specified)
                  ? r.value
                  : t;
              },
              set: function (n, i, r) {
                var u = n.getAttributeNode(r);
                return (
                  u ||
                    n.setAttributeNode(
                      (u = n.ownerDocument.createAttribute(r))
                    ),
                  (u.value = i += ""),
                  "value" === r || i === n.getAttribute(r) ? i : t
                );
              },
            }),
          (i.attrHooks.contenteditable = {
            get: k.get,
            set: function (n, t, i) {
              k.set(n, "" === t ? !1 : t, i);
            },
          }),
          i.each(["width", "height"], function (n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
              set: function (n, i) {
                return "" === i ? (n.setAttribute(r, "auto"), i) : t;
              },
            });
          }));
        i.support.hrefNormalized ||
          (i.each(["href", "src", "width", "height"], function (n, r) {
            i.attrHooks[r] = i.extend(i.attrHooks[r], {
              get: function (n) {
                var i = n.getAttribute(r, 2);
                return null == i ? t : i;
              },
            });
          }),
          i.each(["href", "src"], function (n, t) {
            i.propHooks[t] = {
              get: function (n) {
                return n.getAttribute(t, 4);
              },
            };
          }));
        i.support.style ||
          (i.attrHooks.style = {
            get: function (n) {
              return n.style.cssText || t;
            },
            set: function (n, t) {
              return (n.style.cssText = t + "");
            },
          });
        i.support.optSelected ||
          (i.propHooks.selected = i.extend(i.propHooks.selected, {
            get: function (n) {
              var t = n.parentNode;
              return (
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
              );
            },
          }));
        i.support.enctype || (i.propFix.enctype = "encoding");
        i.support.checkOn ||
          i.each(["radio", "checkbox"], function () {
            i.valHooks[this] = {
              get: function (n) {
                return null === n.getAttribute("value") ? "on" : n.value;
              },
            };
          });
        i.each(["radio", "checkbox"], function () {
          i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, r) {
              return i.isArray(r)
                ? (n.checked = i.inArray(i(n).val(), r) >= 0)
                : t;
            },
          });
        });
        var ui = /^(?:input|select|textarea)$/i,
          te = /^key/,
          ie = /^(?:mouse|contextmenu)|click/,
          or = /^(?:focusinfocus|focusoutblur)$/,
          sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
          global: {},
          add: function (n, r, u, f, e) {
            var b,
              p,
              k,
              w,
              c,
              l,
              a,
              v,
              h,
              d,
              g,
              y = i._data(n);
            if (y) {
              for (
                u.handler && ((w = u), (u = w.handler), (e = w.selector)),
                  u.guid || (u.guid = i.guid++),
                  (p = y.events) || (p = y.events = {}),
                  (l = y.handle) ||
                    ((l = y.handle =
                      function (n) {
                        return typeof i === o ||
                          (n && i.event.triggered === n.type)
                          ? t
                          : i.event.dispatch.apply(l.elem, arguments);
                      }),
                    (l.elem = n)),
                  r = (r || "").match(s) || [""],
                  k = r.length;
                k--;

              )
                (b = sr.exec(r[k]) || []),
                  (h = g = b[1]),
                  (d = (b[2] || "").split(".").sort()),
                  (c = i.event.special[h] || {}),
                  (h = (e ? c.delegateType : c.bindType) || h),
                  (c = i.event.special[h] || {}),
                  (a = i.extend(
                    {
                      type: h,
                      origType: g,
                      data: f,
                      handler: u,
                      guid: u.guid,
                      selector: e,
                      needsContext: e && i.expr.match.needsContext.test(e),
                      namespace: d.join("."),
                    },
                    w
                  )),
                  (v = p[h]) ||
                    ((v = p[h] = []),
                    (v.delegateCount = 0),
                    (c.setup && c.setup.call(n, f, d, l) !== !1) ||
                      (n.addEventListener
                        ? n.addEventListener(h, l, !1)
                        : n.attachEvent && n.attachEvent("on" + h, l))),
                  c.add &&
                    (c.add.call(n, a),
                    a.handler.guid || (a.handler.guid = u.guid)),
                  e ? v.splice(v.delegateCount++, 0, a) : v.push(a),
                  (i.event.global[h] = !0);
              n = null;
            }
          },
          remove: function (n, t, r, u, f) {
            var y,
              o,
              h,
              b,
              p,
              a,
              c,
              l,
              e,
              w,
              k,
              v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
              for (t = (t || "").match(s) || [""], p = t.length; p--; )
                if (
                  ((h = sr.exec(t[p]) || []),
                  (e = k = h[1]),
                  (w = (h[2] || "").split(".").sort()),
                  e)
                ) {
                  for (
                    c = i.event.special[e] || {},
                      e = (u ? c.delegateType : c.bindType) || e,
                      l = a[e] || [],
                      h =
                        h[2] &&
                        RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      b = y = l.length;
                    y--;

                  )
                    (o = l[y]),
                      (!f && k !== o.origType) ||
                        (r && r.guid !== o.guid) ||
                        (h && !h.test(o.namespace)) ||
                        (u &&
                          u !== o.selector &&
                          ("**" !== u || !o.selector)) ||
                        (l.splice(y, 1),
                        o.selector && l.delegateCount--,
                        c.remove && c.remove.call(n, o));
                  b &&
                    !l.length &&
                    ((c.teardown && c.teardown.call(n, w, v.handle) !== !1) ||
                      i.removeEvent(n, e, v.handle),
                    delete a[e]);
                } else for (e in a) i.event.remove(n, e + t[p], r, u, !0);
              i.isEmptyObject(a) &&
                (delete v.handle, i._removeData(n, "events"));
            }
          },
          trigger: function (u, f, e, o) {
            var a,
              v,
              h,
              p,
              l,
              c,
              w,
              b = [e || r],
              s = it.call(u, "type") ? u.type : u,
              y = it.call(u, "namespace") ? u.namespace.split(".") : [];
            if (
              ((h = c = e = e || r),
              3 !== e.nodeType &&
                8 !== e.nodeType &&
                !or.test(s + i.event.triggered) &&
                (s.indexOf(".") >= 0 &&
                  ((y = s.split(".")), (s = y.shift()), y.sort()),
                (v = 0 > s.indexOf(":") && "on" + s),
                (u = u[i.expando]
                  ? u
                  : new i.Event(s, "object" == typeof u && u)),
                (u.isTrigger = !0),
                (u.namespace = y.join(".")),
                (u.namespace_re = u.namespace
                  ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (u.result = t),
                u.target || (u.target = e),
                (f = null == f ? [u] : i.makeArray(f, [u])),
                (l = i.event.special[s] || {}),
                o || !l.trigger || l.trigger.apply(e, f) !== !1))
            ) {
              if (!o && !l.noBubble && !i.isWindow(e)) {
                for (
                  p = l.delegateType || s, or.test(p + s) || (h = h.parentNode);
                  h;
                  h = h.parentNode
                )
                  b.push(h), (c = h);
                c === (e.ownerDocument || r) &&
                  b.push(c.defaultView || c.parentWindow || n);
              }
              for (w = 0; (h = b[w++]) && !u.isPropagationStopped(); )
                (u.type = w > 1 ? p : l.bindType || s),
                  (a =
                    (i._data(h, "events") || {})[u.type] &&
                    i._data(h, "handle")),
                  a && a.apply(h, f),
                  (a = v && h[v]),
                  a &&
                    i.acceptData(h) &&
                    a.apply &&
                    a.apply(h, f) === !1 &&
                    u.preventDefault();
              if (
                ((u.type = s),
                !(
                  o ||
                  u.isDefaultPrevented() ||
                  (l._default && l._default.apply(e.ownerDocument, f) !== !1) ||
                  ("click" === s && i.nodeName(e, "a")) ||
                  !i.acceptData(e) ||
                  !v ||
                  !e[s] ||
                  i.isWindow(e)
                ))
              ) {
                c = e[v];
                c && (e[v] = null);
                i.event.triggered = s;
                try {
                  e[s]();
                } catch (k) {}
                i.event.triggered = t;
                c && (e[v] = c);
              }
              return u.result;
            }
          },
          dispatch: function (n) {
            n = i.event.fix(n);
            var o,
              e,
              r,
              u,
              s,
              h = [],
              c = l.call(arguments),
              a = (i._data(this, "events") || {})[n.type] || [],
              f = i.event.special[n.type] || {};
            if (
              ((c[0] = n),
              (n.delegateTarget = this),
              !f.preDispatch || f.preDispatch.call(this, n) !== !1)
            ) {
              for (
                h = i.event.handlers.call(this, n, a), o = 0;
                (u = h[o++]) && !n.isPropagationStopped();

              )
                for (
                  n.currentTarget = u.elem, s = 0;
                  (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();

                )
                  (!n.namespace_re || n.namespace_re.test(r.namespace)) &&
                    ((n.handleObj = r),
                    (n.data = r.data),
                    (e = (
                      (i.event.special[r.origType] || {}).handle || r.handler
                    ).apply(u.elem, c)),
                    e !== t &&
                      (n.result = e) === !1 &&
                      (n.preventDefault(), n.stopPropagation()));
              return f.postDispatch && f.postDispatch.call(this, n), n.result;
            }
          },
          handlers: function (n, r) {
            var e,
              o,
              f,
              s,
              c = [],
              h = r.delegateCount,
              u = n.target;
            if (h && u.nodeType && (!n.button || "click" !== n.type))
              for (; u != this; u = u.parentNode || this)
                if (
                  1 === u.nodeType &&
                  (u.disabled !== !0 || "click" !== n.type)
                ) {
                  for (f = [], s = 0; h > s; s++)
                    (o = r[s]),
                      (e = o.selector + " "),
                      f[e] === t &&
                        (f[e] = o.needsContext
                          ? i(e, this).index(u) >= 0
                          : i.find(e, this, null, [u]).length),
                      f[e] && f.push(o);
                  f.length && c.push({ elem: u, handlers: f });
                }
            return (
              r.length > h && c.push({ elem: this, handlers: r.slice(h) }), c
            );
          },
          fix: function (n) {
            if (n[i.expando]) return n;
            var e,
              o,
              s,
              u = n.type,
              f = n,
              t = this.fixHooks[u];
            for (
              t ||
                (this.fixHooks[u] = t =
                  ie.test(u)
                    ? this.mouseHooks
                    : te.test(u)
                    ? this.keyHooks
                    : {}),
                s = t.props ? this.props.concat(t.props) : this.props,
                n = new i.Event(f),
                e = s.length;
              e--;

            )
              (o = s[e]), (n[o] = f[o]);
            return (
              n.target || (n.target = f.srcElement || r),
              3 === n.target.nodeType && (n.target = n.target.parentNode),
              (n.metaKey = !!n.metaKey),
              t.filter ? t.filter(n, f) : n
            );
          },
          props:
            "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
              " "
            ),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
              return (
                null == n.which &&
                  (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
              );
            },
          },
          mouseHooks: {
            props:
              "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
              ),
            filter: function (n, i) {
              var u,
                o,
                f,
                e = i.button,
                s = i.fromElement;
              return (
                null == n.pageX &&
                  null != i.clientX &&
                  ((o = n.target.ownerDocument || r),
                  (f = o.documentElement),
                  (u = o.body),
                  (n.pageX =
                    i.clientX +
                    ((f && f.scrollLeft) || (u && u.scrollLeft) || 0) -
                    ((f && f.clientLeft) || (u && u.clientLeft) || 0)),
                  (n.pageY =
                    i.clientY +
                    ((f && f.scrollTop) || (u && u.scrollTop) || 0) -
                    ((f && f.clientTop) || (u && u.clientTop) || 0))),
                !n.relatedTarget &&
                  s &&
                  (n.relatedTarget = s === n.target ? i.toElement : s),
                n.which ||
                  e === t ||
                  (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
                n
              );
            },
          },
          special: {
            load: { noBubble: !0 },
            click: {
              trigger: function () {
                return i.nodeName(this, "input") &&
                  "checkbox" === this.type &&
                  this.click
                  ? (this.click(), !1)
                  : t;
              },
            },
            focus: {
              trigger: function () {
                if (this !== r.activeElement && this.focus)
                  try {
                    return this.focus(), !1;
                  } catch (n) {}
              },
              delegateType: "focusin",
            },
            blur: {
              trigger: function () {
                return this === r.activeElement && this.blur
                  ? (this.blur(), !1)
                  : t;
              },
              delegateType: "focusout",
            },
            beforeunload: {
              postDispatch: function (n) {
                n.result !== t && (n.originalEvent.returnValue = n.result);
              },
            },
          },
          simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event(), r, {
              type: n,
              isSimulated: !0,
              originalEvent: {},
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault();
          },
        };
        i.removeEvent = r.removeEventListener
          ? function (n, t, i) {
              n.removeEventListener && n.removeEventListener(t, i, !1);
            }
          : function (n, t, i) {
              var r = "on" + t;
              n.detachEvent &&
                (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i));
            };
        i.Event = function (n, r) {
          return this instanceof i.Event
            ? (n && n.type
                ? ((this.originalEvent = n),
                  (this.type = n.type),
                  (this.isDefaultPrevented =
                    n.defaultPrevented ||
                    n.returnValue === !1 ||
                    (n.getPreventDefault && n.getPreventDefault())
                      ? ht
                      : d))
                : (this.type = n),
              r && i.extend(this, r),
              (this.timeStamp = (n && n.timeStamp) || i.now()),
              (this[i.expando] = !0),
              t)
            : new i.Event(n, r);
        };
        i.Event.prototype = {
          isDefaultPrevented: d,
          isPropagationStopped: d,
          isImmediatePropagationStopped: d,
          preventDefault: function () {
            var n = this.originalEvent;
            this.isDefaultPrevented = ht;
            n && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1));
          },
          stopPropagation: function () {
            var n = this.originalEvent;
            this.isPropagationStopped = ht;
            n &&
              (n.stopPropagation && n.stopPropagation(), (n.cancelBubble = !0));
          },
          stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = ht;
            this.stopPropagation();
          },
        };
        i.each(
          { mouseenter: "mouseover", mouseleave: "mouseout" },
          function (n, t) {
            i.event.special[n] = {
              delegateType: t,
              bindType: t,
              handle: function (n) {
                var u,
                  f = this,
                  r = n.relatedTarget,
                  e = n.handleObj;
                return (
                  (!r || (r !== f && !i.contains(f, r))) &&
                    ((n.type = e.origType),
                    (u = e.handler.apply(this, arguments)),
                    (n.type = t)),
                  u
                );
              },
            };
          }
        );
        i.support.submitBubbles ||
          (i.event.special.submit = {
            setup: function () {
              return i.nodeName(this, "form")
                ? !1
                : (i.event.add(
                    this,
                    "click._submit keypress._submit",
                    function (n) {
                      var u = n.target,
                        r =
                          i.nodeName(u, "input") || i.nodeName(u, "button")
                            ? u.form
                            : t;
                      r &&
                        !i._data(r, "submitBubbles") &&
                        (i.event.add(r, "submit._submit", function (n) {
                          n._submit_bubble = !0;
                        }),
                        i._data(r, "submitBubbles", !0));
                    }
                  ),
                  t);
            },
            postDispatch: function (n) {
              n._submit_bubble &&
                (delete n._submit_bubble,
                this.parentNode &&
                  !n.isTrigger &&
                  i.event.simulate("submit", this.parentNode, n, !0));
            },
            teardown: function () {
              return i.nodeName(this, "form")
                ? !1
                : (i.event.remove(this, "._submit"), t);
            },
          });
        i.support.changeBubbles ||
          (i.event.special.change = {
            setup: function () {
              return ui.test(this.nodeName)
                ? (("checkbox" === this.type || "radio" === this.type) &&
                    (i.event.add(this, "propertychange._change", function (n) {
                      "checked" === n.originalEvent.propertyName &&
                        (this._just_changed = !0);
                    }),
                    i.event.add(this, "click._change", function (n) {
                      this._just_changed &&
                        !n.isTrigger &&
                        (this._just_changed = !1);
                      i.event.simulate("change", this, n, !0);
                    })),
                  !1)
                : (i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    ui.test(t.nodeName) &&
                      !i._data(t, "changeBubbles") &&
                      (i.event.add(t, "change._change", function (n) {
                        !this.parentNode ||
                          n.isSimulated ||
                          n.isTrigger ||
                          i.event.simulate("change", this.parentNode, n, !0);
                      }),
                      i._data(t, "changeBubbles", !0));
                  }),
                  t);
            },
            handle: function (n) {
              var i = n.target;
              return this !== i ||
                n.isSimulated ||
                n.isTrigger ||
                ("radio" !== i.type && "checkbox" !== i.type)
                ? n.handleObj.handler.apply(this, arguments)
                : t;
            },
            teardown: function () {
              return i.event.remove(this, "._change"), !ui.test(this.nodeName);
            },
          });
        i.support.focusinBubbles ||
          i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
            var u = 0,
              f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0);
              };
            i.event.special[t] = {
              setup: function () {
                0 == u++ && r.addEventListener(n, f, !0);
              },
              teardown: function () {
                0 == --u && r.removeEventListener(n, f, !0);
              },
            };
          });
        i.fn.extend({
          on: function (n, r, u, f, e) {
            var s, o;
            if ("object" == typeof n) {
              "string" != typeof r && ((u = u || r), (r = t));
              for (s in n) this.on(s, r, u, n[s], e);
              return this;
            }
            if (
              (null == u && null == f
                ? ((f = r), (u = r = t))
                : null == f &&
                  ("string" == typeof r
                    ? ((f = u), (u = t))
                    : ((f = u), (u = r), (r = t))),
              f === !1)
            )
              f = d;
            else if (!f) return this;
            return (
              1 === e &&
                ((o = f),
                (f = function (n) {
                  return i().off(n), o.apply(this, arguments);
                }),
                (f.guid = o.guid || (o.guid = i.guid++))),
              this.each(function () {
                i.event.add(this, n, f, u, r);
              })
            );
          },
          one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1);
          },
          off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
              return (
                (f = n.handleObj),
                i(n.delegateTarget).off(
                  f.namespace ? f.origType + "." + f.namespace : f.origType,
                  f.selector,
                  f.handler
                ),
                this
              );
            if ("object" == typeof n) {
              for (e in n) this.off(e, r, n[e]);
              return this;
            }
            return (
              (r === !1 || "function" == typeof r) && ((u = r), (r = t)),
              u === !1 && (u = d),
              this.each(function () {
                i.event.remove(this, n, u, r);
              })
            );
          },
          bind: function (n, t, i) {
            return this.on(n, null, t, i);
          },
          unbind: function (n, t) {
            return this.off(n, null, t);
          },
          delegate: function (n, t, i, r) {
            return this.on(t, n, i, r);
          },
          undelegate: function (n, t, i) {
            return 1 === arguments.length
              ? this.off(n, "**")
              : this.off(t, n || "**", i);
          },
          trigger: function (n, t) {
            return this.each(function () {
              i.event.trigger(n, t, this);
            });
          },
          triggerHandler: function (n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t;
          },
        }),
          (function (n, t) {
            function ti(n) {
              return tr.test(n + "");
            }
            function ii() {
              var n,
                t = [];
              return (n = function (i, u) {
                return (
                  t.push((i += " ")) > r.cacheLength && delete n[t.shift()],
                  (n[i] = u)
                );
              });
            }
            function l(n) {
              return (n[f] = !0), n;
            }
            function b(n) {
              var t = s.createElement("div");
              try {
                return n(t);
              } catch (i) {
                return !1;
              } finally {
                t = null;
              }
            }
            function u(n, t, i, r) {
              var y, u, e, l, p, v, w, h, d, b;
              if (
                ((t ? t.ownerDocument || t : k) !== s && it(t),
                (t = t || s),
                (i = i || []),
                !n || "string" != typeof n)
              )
                return i;
              if (1 !== (l = t.nodeType) && 9 !== l) return [];
              if (!c && !r) {
                if ((y = ir.exec(n)))
                  if ((e = y[1])) {
                    if (9 === l) {
                      if (((u = t.getElementById(e)), !u || !u.parentNode))
                        return i;
                      if (u.id === e) return i.push(u), i;
                    } else if (
                      t.ownerDocument &&
                      (u = t.ownerDocument.getElementById(e)) &&
                      et(t, u) &&
                      u.id === e
                    )
                      return i.push(u), i;
                  } else {
                    if (y[2])
                      return (
                        ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i
                      );
                    if (
                      (e = y[3]) &&
                      o.getByClassName &&
                      t.getElementsByClassName
                    )
                      return (
                        ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), i
                      );
                  }
                if (o.qsa && !a.test(n)) {
                  if (
                    ((w = !0),
                    (h = f),
                    (d = t),
                    (b = 9 === l && n),
                    1 === l && "object" !== t.nodeName.toLowerCase())
                  ) {
                    for (
                      v = yt(n),
                        (w = t.getAttribute("id"))
                          ? (h = w.replace(fr, "\\$&"))
                          : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        p = v.length;
                      p--;

                    )
                      v[p] = h + pt(v[p]);
                    d = (ni.test(n) && t.parentNode) || t;
                    b = v.join(",");
                  }
                  if (b)
                    try {
                      return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i;
                    } catch (g) {
                    } finally {
                      w || t.removeAttribute("id");
                    }
                }
              }
              return lr(n.replace(at, "$1"), t, i, r);
            }
            function yi(n, t) {
              var i = t && n,
                r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
              if (r) return r;
              if (i) while ((i = i.nextSibling)) if (i === t) return -1;
              return n ? 1 : -1;
            }
            function or(n) {
              return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n;
              };
            }
            function sr(n) {
              return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n;
              };
            }
            function g(n) {
              return l(function (t) {
                return (
                  (t = +t),
                  l(function (i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                      i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
                  })
                );
              });
            }
            function yt(n, t) {
              var e,
                f,
                s,
                o,
                i,
                h,
                c,
                l = hi[n + " "];
              if (l) return t ? 0 : l.slice(0);
              for (i = n, h = [], c = r.preFilter; i; ) {
                (!e || (f = ki.exec(i))) &&
                  (f && (i = i.slice(f[0].length) || i), h.push((s = [])));
                e = !1;
                (f = di.exec(i)) &&
                  ((e = f.shift()),
                  s.push({ value: e, type: f[0].replace(at, " ") }),
                  (i = i.slice(e.length)));
                for (o in r.filter)
                  (f = vt[o].exec(i)) &&
                    (!c[o] || (f = c[o](f))) &&
                    ((e = f.shift()),
                    s.push({ value: e, type: o, matches: f }),
                    (i = i.slice(e.length)));
                if (!e) break;
              }
              return t ? i.length : i ? u.error(n) : hi(n, h).slice(0);
            }
            function pt(n) {
              for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
              return i;
            }
            function ri(n, t, i) {
              var r = t.dir,
                u = i && "parentNode" === r,
                e = wi++;
              return t.first
                ? function (t, i, f) {
                    while ((t = t[r]))
                      if (1 === t.nodeType || u) return n(t, i, f);
                  }
                : function (t, i, o) {
                    var h,
                      s,
                      c,
                      l = v + " " + e;
                    if (o) {
                      while ((t = t[r]))
                        if ((1 === t.nodeType || u) && n(t, i, o)) return !0;
                    } else
                      while ((t = t[r]))
                        if (1 === t.nodeType || u)
                          if (
                            ((c = t[f] || (t[f] = {})),
                            (s = c[r]) && s[0] === l)
                          ) {
                            if ((h = s[1]) === !0 || h === ot) return h === !0;
                          } else if (
                            ((s = c[r] = [l]),
                            (s[1] = n(t, i, o) || ot),
                            s[1] === !0)
                          )
                            return !0;
                  };
            }
            function ui(n) {
              return n.length > 1
                ? function (t, i, r) {
                    for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
                    return !0;
                  }
                : n[0];
            }
            function wt(n, t, i, r, u) {
              for (
                var e, o = [], f = 0, s = n.length, h = null != t;
                s > f;
                f++
              )
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
              return o;
            }
            function fi(n, t, i, r, u, e) {
              return (
                r && !r[f] && (r = fi(r)),
                u && !u[f] && (u = fi(u, e)),
                l(function (f, e, o, s) {
                  var l,
                    c,
                    a,
                    p = [],
                    y = [],
                    w = e.length,
                    b = f || cr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || (!f && t) ? b : wt(b, p, n, o, s),
                    h = i ? (u || (f ? n : w || r) ? [] : e) : v;
                  if ((i && i(v, h, o, s), r))
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--; )
                      (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                  if (f) {
                    if (u || n) {
                      if (u) {
                        for (l = [], c = h.length; c--; )
                          (a = h[c]) && l.push((v[c] = a));
                        u(null, (h = []), l, s);
                      }
                      for (c = h.length; c--; )
                        (a = h[c]) &&
                          (l = u ? dt.call(f, a) : p[c]) > -1 &&
                          (f[l] = !(e[l] = a));
                    }
                  } else (h = wt(h === e ? h.splice(w, h.length) : h)), u ? u(null, e, h, s) : ut.apply(e, h);
                })
              );
            }
            function ei(n) {
              for (
                var s,
                  u,
                  i,
                  o = n.length,
                  h = r.relative[n[0].type],
                  c = h || r.relative[" "],
                  t = h ? 1 : 0,
                  l = ri(
                    function (n) {
                      return n === s;
                    },
                    c,
                    !0
                  ),
                  a = ri(
                    function (n) {
                      return dt.call(s, n) > -1;
                    },
                    c,
                    !0
                  ),
                  e = [
                    function (n, t, i) {
                      return (
                        (!h && (i || t !== ht)) ||
                        ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                      );
                    },
                  ];
                o > t;
                t++
              )
                if ((u = r.relative[n[t].type])) e = [ri(ui(e), u)];
                else {
                  if (
                    ((u = r.filter[n[t].type].apply(null, n[t].matches)), u[f])
                  ) {
                    for (i = ++t; o > i; i++) if (r.relative[n[i].type]) break;
                    return fi(
                      t > 1 && ui(e),
                      t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"),
                      u,
                      i > t && ei(n.slice(t, i)),
                      o > i && ei((n = n.slice(i))),
                      o > i && pt(n)
                    );
                  }
                  e.push(u);
                }
              return ui(e);
            }
            function hr(n, t) {
              var f = 0,
                i = t.length > 0,
                e = n.length > 0,
                o = function (o, h, c, l, a) {
                  var p,
                    d,
                    b,
                    w = [],
                    k = 0,
                    y = "0",
                    g = o && [],
                    nt = null != a,
                    tt = ht,
                    rt = o || (e && r.find.TAG("*", (a && h.parentNode) || h)),
                    it = (v += null == tt ? 1 : Math.random() || 0.1);
                  for (
                    nt && ((ht = h !== s && h), (ot = f));
                    null != (p = rt[y]);
                    y++
                  ) {
                    if (e && p) {
                      for (d = 0; (b = n[d++]); )
                        if (b(p, h, c)) {
                          l.push(p);
                          break;
                        }
                      nt && ((v = it), (ot = ++f));
                    }
                    i && ((p = !b && p) && k--, o && g.push(p));
                  }
                  if (((k += y), i && y !== k)) {
                    for (d = 0; (b = t[d++]); ) b(g, w, h, c);
                    if (o) {
                      if (k > 0)
                        while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                      w = wt(w);
                    }
                    ut.apply(l, w);
                    nt &&
                      !o &&
                      w.length > 0 &&
                      k + t.length > 1 &&
                      u.uniqueSort(l);
                  }
                  return nt && ((v = it), (ht = tt)), g;
                };
              return i ? l(o) : o;
            }
            function cr(n, t, i) {
              for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
              return i;
            }
            function lr(n, t, i, u) {
              var o,
                f,
                e,
                h,
                l,
                s = yt(n);
              if (!u && 1 === s.length) {
                if (
                  ((f = s[0] = s[0].slice(0)),
                  f.length > 2 &&
                    "ID" === (e = f[0]).type &&
                    9 === t.nodeType &&
                    !c &&
                    r.relative[f[1].type])
                ) {
                  if (((t = r.find.ID(e.matches[0].replace(p, w), t)[0]), !t))
                    return i;
                  n = n.slice(f.shift().value.length);
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                  if (((e = f[o]), r.relative[(h = e.type)])) break;
                  if (
                    (l = r.find[h]) &&
                    (u = l(
                      e.matches[0].replace(p, w),
                      (ni.test(f[0].type) && t.parentNode) || t
                    ))
                  ) {
                    if ((f.splice(o, 1), (n = u.length && pt(f)), !n))
                      return ut.apply(i, ft.call(u, 0)), i;
                    break;
                  }
                }
              }
              return bt(n, s)(u, t, c, i, ni.test(n)), i;
            }
            function pi() {}
            var nt,
              ot,
              r,
              st,
              oi,
              bt,
              tt,
              ht,
              it,
              s,
              h,
              c,
              a,
              rt,
              ct,
              et,
              kt,
              f = "sizzle" + -new Date(),
              k = n.document,
              o = {},
              v = 0,
              wi = 0,
              si = ii(),
              hi = ii(),
              ci = ii(),
              y = typeof t,
              li = -2147483648,
              lt = [],
              bi = lt.pop,
              ut = lt.push,
              ft = lt.slice,
              dt =
                lt.indexOf ||
                function (n) {
                  for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === n) return t;
                  return -1;
                },
              e = "[\\x20\\t\\r\\n\\f]",
              d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
              ai = d.replace("w", "w#"),
              vi =
                "\\[" +
                e +
                "*(" +
                d +
                ")" +
                e +
                "*(?:([*^$|!~]?=)" +
                e +
                "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
                ai +
                ")|)|)" +
                e +
                "*\\]",
              gt =
                ":(" +
                d +
                ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                vi.replace(3, 8) +
                ")*)|.*)\\)|)",
              at = RegExp(
                "^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$",
                "g"
              ),
              ki = RegExp("^" + e + "*," + e + "*"),
              di = RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
              gi = RegExp(gt),
              nr = RegExp("^" + ai + "$"),
              vt = {
                ID: RegExp("^#(" + d + ")"),
                CLASS: RegExp("^\\.(" + d + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
                TAG: RegExp("^(" + d.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + vi),
                PSEUDO: RegExp("^" + gt),
                CHILD: RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    e +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    e +
                    "*(?:([+-]|)" +
                    e +
                    "*(\\d+)|))" +
                    e +
                    "*\\)|)",
                  "i"
                ),
                needsContext: RegExp(
                  "^" +
                    e +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    e +
                    "*((?:-\\d)?\\d*)" +
                    e +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              ni = /[\x20\t\r\n\f]*[+~]/,
              tr = /^[^{]+\{\s*\[native code/,
              ir = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              rr = /^(?:input|select|textarea|button)$/i,
              ur = /^h\d$/i,
              fr = /'|\\/g,
              er = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
              w = function (n, t) {
                var i = "0x" + t - 65536;
                return i !== i
                  ? t
                  : 0 > i
                  ? String.fromCharCode(i + 65536)
                  : String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i));
              };
            try {
              ft.call(k.documentElement.childNodes, 0)[0].nodeType;
            } catch (ar) {
              ft = function (n) {
                for (var t, i = []; (t = this[n++]); ) i.push(t);
                return i;
              };
            }
            oi = u.isXML = function (n) {
              var t = n && (n.ownerDocument || n).documentElement;
              return t ? "HTML" !== t.nodeName : !1;
            };
            it = u.setDocument = function (n) {
              var i = n ? n.ownerDocument || n : k;
              return i !== s && 9 === i.nodeType && i.documentElement
                ? ((s = i),
                  (h = i.documentElement),
                  (c = oi(i)),
                  (o.tagNameNoComments = b(function (n) {
                    return (
                      n.appendChild(i.createComment("")),
                      !n.getElementsByTagName("*").length
                    );
                  })),
                  (o.attributes = b(function (n) {
                    n.innerHTML = "<select><\/select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t;
                  })),
                  (o.getByClassName = b(function (n) {
                    return (
                      (n.innerHTML =
                        "<div class='hidden e'><\/div><div class='hidden'><\/div>"),
                      n.getElementsByClassName &&
                      n.getElementsByClassName("e").length
                        ? ((n.lastChild.className = "e"),
                          2 === n.getElementsByClassName("e").length)
                        : !1
                    );
                  })),
                  (o.getByName = b(function (n) {
                    n.id = f + 0;
                    n.innerHTML =
                      "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>";
                    h.insertBefore(n, h.firstChild);
                    var t =
                      i.getElementsByName &&
                      i.getElementsByName(f).length ===
                        2 + i.getElementsByName(f + 0).length;
                    return (
                      (o.getIdNotName = !i.getElementById(f)),
                      h.removeChild(n),
                      t
                    );
                  })),
                  (r.attrHandle = b(function (n) {
                    return (
                      (n.innerHTML = "<a href='#'><\/a>"),
                      n.firstChild &&
                        typeof n.firstChild.getAttribute !== y &&
                        "#" === n.firstChild.getAttribute("href")
                    );
                  })
                    ? {}
                    : {
                        href: function (n) {
                          return n.getAttribute("href", 2);
                        },
                        type: function (n) {
                          return n.getAttribute("type");
                        },
                      }),
                  o.getIdNotName
                    ? ((r.find.ID = function (n, t) {
                        if (typeof t.getElementById !== y && !c) {
                          var i = t.getElementById(n);
                          return i && i.parentNode ? [i] : [];
                        }
                      }),
                      (r.filter.ID = function (n) {
                        var t = n.replace(p, w);
                        return function (n) {
                          return n.getAttribute("id") === t;
                        };
                      }))
                    : ((r.find.ID = function (n, i) {
                        if (typeof i.getElementById !== y && !c) {
                          var r = i.getElementById(n);
                          return r
                            ? r.id === n ||
                              (typeof r.getAttributeNode !== y &&
                                r.getAttributeNode("id").value === n)
                              ? [r]
                              : t
                            : [];
                        }
                      }),
                      (r.filter.ID = function (n) {
                        var t = n.replace(p, w);
                        return function (n) {
                          var i =
                            typeof n.getAttributeNode !== y &&
                            n.getAttributeNode("id");
                          return i && i.value === t;
                        };
                      })),
                  (r.find.TAG = o.tagNameNoComments
                    ? function (n, i) {
                        return typeof i.getElementsByTagName !== y
                          ? i.getElementsByTagName(n)
                          : t;
                      }
                    : function (n, t) {
                        var i,
                          r = [],
                          f = 0,
                          u = t.getElementsByTagName(n);
                        if ("*" === n) {
                          while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                          return r;
                        }
                        return u;
                      }),
                  (r.find.NAME =
                    o.getByName &&
                    function (n, i) {
                      return typeof i.getElementsByName !== y
                        ? i.getElementsByName(name)
                        : t;
                    }),
                  (r.find.CLASS =
                    o.getByClassName &&
                    function (n, i) {
                      return typeof i.getElementsByClassName === y || c
                        ? t
                        : i.getElementsByClassName(n);
                    }),
                  (rt = []),
                  (a = [":focus"]),
                  (o.qsa = ti(i.querySelectorAll)) &&
                    (b(function (n) {
                      n.innerHTML =
                        "<select><option selected=''><\/option><\/select>";
                      n.querySelectorAll("[selected]").length ||
                        a.push(
                          "\\[" +
                            e +
                            "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                        );
                      n.querySelectorAll(":checked").length ||
                        a.push(":checked");
                    }),
                    b(function (n) {
                      n.innerHTML = "<input type='hidden' i=''/>";
                      n.querySelectorAll("[i^='']").length &&
                        a.push("[*^$]=" + e + "*(?:\"\"|'')");
                      n.querySelectorAll(":enabled").length ||
                        a.push(":enabled", ":disabled");
                      n.querySelectorAll("*,:x");
                      a.push(",.*:");
                    })),
                  (o.matchesSelector = ti(
                    (ct =
                      h.matchesSelector ||
                      h.mozMatchesSelector ||
                      h.webkitMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    b(function (n) {
                      o.disconnectedMatch = ct.call(n, "div");
                      ct.call(n, "[s!='']:x");
                      rt.push("!=", gt);
                    }),
                  (a = RegExp(a.join("|"))),
                  (rt = RegExp(rt.join("|"))),
                  (et =
                    ti(h.contains) || h.compareDocumentPosition
                      ? function (n, t) {
                          var r = 9 === n.nodeType ? n.documentElement : n,
                            i = t && t.parentNode;
                          return (
                            n === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(r.contains
                                ? r.contains(i)
                                : n.compareDocumentPosition &&
                                  16 & n.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (n, t) {
                          if (t)
                            while ((t = t.parentNode)) if (t === n) return !0;
                          return !1;
                        }),
                  (kt = h.compareDocumentPosition
                    ? function (n, t) {
                        var r;
                        return n === t
                          ? ((tt = !0), 0)
                          : (r =
                              t.compareDocumentPosition &&
                              n.compareDocumentPosition &&
                              n.compareDocumentPosition(t))
                          ? 1 & r ||
                            (n.parentNode && 11 === n.parentNode.nodeType)
                            ? n === i || et(k, n)
                              ? -1
                              : t === i || et(k, t)
                              ? 1
                              : 0
                            : 4 & r
                            ? -1
                            : 1
                          : n.compareDocumentPosition
                          ? -1
                          : 1;
                      }
                    : function (n, t) {
                        var r,
                          u = 0,
                          o = n.parentNode,
                          s = t.parentNode,
                          f = [n],
                          e = [t];
                        if (n === t) return (tt = !0), 0;
                        if (!o || !s)
                          return n === i
                            ? -1
                            : t === i
                            ? 1
                            : o
                            ? -1
                            : s
                            ? 1
                            : 0;
                        if (o === s) return yi(n, t);
                        for (r = n; (r = r.parentNode); ) f.unshift(r);
                        for (r = t; (r = r.parentNode); ) e.unshift(r);
                        while (f[u] === e[u]) u++;
                        return u
                          ? yi(f[u], e[u])
                          : f[u] === k
                          ? -1
                          : e[u] === k
                          ? 1
                          : 0;
                      }),
                  (tt = !1),
                  [0, 0].sort(kt),
                  (o.detectDuplicates = tt),
                  s)
                : s;
            };
            u.matches = function (n, t) {
              return u(n, null, null, t);
            };
            u.matchesSelector = function (n, t) {
              if (
                ((n.ownerDocument || n) !== s && it(n),
                (t = t.replace(er, "='$1']")),
                !(!o.matchesSelector || c || (rt && rt.test(t)) || a.test(t)))
              )
                try {
                  var i = ct.call(n, t);
                  if (
                    i ||
                    o.disconnectedMatch ||
                    (n.document && 11 !== n.document.nodeType)
                  )
                    return i;
                } catch (r) {}
              return u(t, s, null, [n]).length > 0;
            };
            u.contains = function (n, t) {
              return (n.ownerDocument || n) !== s && it(n), et(n, t);
            };
            u.attr = function (n, t) {
              var i;
              return (
                (n.ownerDocument || n) !== s && it(n),
                c || (t = t.toLowerCase()),
                (i = r.attrHandle[t])
                  ? i(n)
                  : c || o.attributes
                  ? n.getAttribute(t)
                  : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) &&
                    n[t] === !0
                  ? t
                  : i && i.specified
                  ? i.value
                  : null
              );
            };
            u.error = function (n) {
              throw Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function (n) {
              var r,
                u = [],
                t = 1,
                i = 0;
              if (((tt = !o.detectDuplicates), n.sort(kt), tt)) {
                for (; (r = n[t]); t++) r === n[t - 1] && (i = u.push(t));
                while (i--) n.splice(u[i], 1);
              }
              return n;
            };
            st = u.getText = function (n) {
              var r,
                i = "",
                u = 0,
                t = n.nodeType;
              if (t) {
                if (1 === t || 9 === t || 11 === t) {
                  if ("string" == typeof n.textContent) return n.textContent;
                  for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
                } else if (3 === t || 4 === t) return n.nodeValue;
              } else for (; (r = n[u]); u++) i += st(r);
              return i;
            };
            r = u.selectors = {
              cacheLength: 50,
              createPseudo: l,
              match: vt,
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (n) {
                  return (
                    (n[1] = n[1].replace(p, w)),
                    (n[3] = (n[4] || n[5] || "").replace(p, w)),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                  );
                },
                CHILD: function (n) {
                  return (
                    (n[1] = n[1].toLowerCase()),
                    "nth" === n[1].slice(0, 3)
                      ? (n[3] || u.error(n[0]),
                        (n[4] = +(n[4]
                          ? n[5] + (n[6] || 1)
                          : 2 * ("even" === n[3] || "odd" === n[3]))),
                        (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                      : n[3] && u.error(n[0]),
                    n
                  );
                },
                PSEUDO: function (n) {
                  var i,
                    t = !n[5] && n[2];
                  return vt.CHILD.test(n[0])
                    ? null
                    : (n[4]
                        ? (n[2] = n[4])
                        : t &&
                          gi.test(t) &&
                          (i = yt(t, !0)) &&
                          (i = t.indexOf(")", t.length - i) - t.length) &&
                          ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
                      n.slice(0, 3));
                },
              },
              filter: {
                TAG: function (n) {
                  return "*" === n
                    ? function () {
                        return !0;
                      }
                    : ((n = n.replace(p, w).toLowerCase()),
                      function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === n;
                      });
                },
                CLASS: function (n) {
                  var t = si[n + " "];
                  return (
                    t ||
                    ((t = RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) &&
                      si(n, function (n) {
                        return t.test(
                          n.className ||
                            (typeof n.getAttribute !== y &&
                              n.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (n, t, i) {
                  return function (r) {
                    var f = u.attr(r, n);
                    return null == f
                      ? "!=" === t
                      : t
                      ? ((f += ""),
                        "=" === t
                          ? f === i
                          : "!=" === t
                          ? f !== i
                          : "^=" === t
                          ? i && 0 === f.indexOf(i)
                          : "*=" === t
                          ? i && f.indexOf(i) > -1
                          : "$=" === t
                          ? i && f.slice(-i.length) === i
                          : "~=" === t
                          ? (" " + f + " ").indexOf(i) > -1
                          : "|=" === t
                          ? f === i || f.slice(0, i.length + 1) === i + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (n, t, i, r, u) {
                  var s = "nth" !== n.slice(0, 3),
                    o = "last" !== n.slice(-4),
                    e = "of-type" === t;
                  return 1 === r && 0 === u
                    ? function (n) {
                        return !!n.parentNode;
                      }
                    : function (t, i, h) {
                        var a,
                          k,
                          c,
                          l,
                          y,
                          w,
                          b = s !== o ? "nextSibling" : "previousSibling",
                          p = t.parentNode,
                          g = e && t.nodeName.toLowerCase(),
                          d = !h && !e;
                        if (p) {
                          if (s) {
                            while (b) {
                              for (c = t; (c = c[b]); )
                                if (
                                  e
                                    ? c.nodeName.toLowerCase() === g
                                    : 1 === c.nodeType
                                )
                                  return !1;
                              w = b = "only" === n && !w && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((w = [o ? p.firstChild : p.lastChild]), o && d)
                          ) {
                            for (
                              k = p[f] || (p[f] = {}),
                                a = k[n] || [],
                                y = a[0] === v && a[1],
                                l = a[0] === v && a[2],
                                c = y && p.childNodes[y];
                              (c =
                                (++y && c && c[b]) || (l = y = 0) || w.pop());

                            )
                              if (1 === c.nodeType && ++l && c === t) {
                                k[n] = [v, y, l];
                                break;
                              }
                          } else if (
                            d &&
                            (a = (t[f] || (t[f] = {}))[n]) &&
                            a[0] === v
                          )
                            l = a[1];
                          else
                            while (
                              (c = (++y && c && c[b]) || (l = y = 0) || w.pop())
                            )
                              if (
                                (e
                                  ? c.nodeName.toLowerCase() === g
                                  : 1 === c.nodeType) &&
                                ++l &&
                                (d && ((c[f] || (c[f] = {}))[n] = [v, l]),
                                c === t)
                              )
                                break;
                          return (
                            (l -= u), l === r || (0 == l % r && l / r >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (n, t) {
                  var e,
                    i =
                      r.pseudos[n] ||
                      r.setFilters[n.toLowerCase()] ||
                      u.error("unsupported pseudo: " + n);
                  return i[f]
                    ? i(t)
                    : i.length > 1
                    ? ((e = [n, n, "", t]),
                      r.setFilters.hasOwnProperty(n.toLowerCase())
                        ? l(function (n, r) {
                            for (var u, f = i(n, t), e = f.length; e--; )
                              (u = dt.call(n, f[e])), (n[u] = !(r[u] = f[e]));
                          })
                        : function (n) {
                            return i(n, 0, e);
                          })
                    : i;
                },
              },
              pseudos: {
                not: l(function (n) {
                  var i = [],
                    r = [],
                    t = bt(n.replace(at, "$1"));
                  return t[f]
                    ? l(function (n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                          (e = o[f]) && (n[f] = !(i[f] = e));
                      })
                    : function (n, u, f) {
                        return (i[0] = n), t(i, null, f, r), !r.pop();
                      };
                }),
                has: l(function (n) {
                  return function (t) {
                    return u(n, t).length > 0;
                  };
                }),
                contains: l(function (n) {
                  return function (t) {
                    return (
                      (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    );
                  };
                }),
                lang: l(function (n) {
                  return (
                    nr.test(n || "") || u.error("unsupported lang: " + n),
                    (n = n.replace(p, w).toLowerCase()),
                    function (t) {
                      var i;
                      do
                        if (
                          (i = c
                            ? t.getAttribute("xml:lang") ||
                              t.getAttribute("lang")
                            : t.lang)
                        )
                          return (
                            (i = i.toLowerCase()),
                            i === n || 0 === i.indexOf(n + "-")
                          );
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var i = n.location && n.location.hash;
                  return i && i.slice(1) === t.id;
                },
                root: function (n) {
                  return n === h;
                },
                focus: function (n) {
                  return (
                    n === s.activeElement &&
                    (!s.hasFocus || s.hasFocus()) &&
                    !!(n.type || n.href || ~n.tabIndex)
                  );
                },
                enabled: function (n) {
                  return n.disabled === !1;
                },
                disabled: function (n) {
                  return n.disabled === !0;
                },
                checked: function (n) {
                  var t = n.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!n.checked) ||
                    ("option" === t && !!n.selected)
                  );
                },
                selected: function (n) {
                  return (
                    n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                  );
                },
                empty: function (n) {
                  for (n = n.firstChild; n; n = n.nextSibling)
                    if (
                      n.nodeName > "@" ||
                      3 === n.nodeType ||
                      4 === n.nodeType
                    )
                      return !1;
                  return !0;
                },
                parent: function (n) {
                  return !r.pseudos.empty(n);
                },
                header: function (n) {
                  return ur.test(n.nodeName);
                },
                input: function (n) {
                  return rr.test(n.nodeName);
                },
                button: function (n) {
                  var t = n.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === n.type) || "button" === t
                  );
                },
                text: function (n) {
                  var t;
                  return (
                    "input" === n.nodeName.toLowerCase() &&
                    "text" === n.type &&
                    (null == (t = n.getAttribute("type")) ||
                      t.toLowerCase() === n.type)
                  );
                },
                first: g(function () {
                  return [0];
                }),
                last: g(function (n, t) {
                  return [t - 1];
                }),
                eq: g(function (n, t, i) {
                  return [0 > i ? i + t : i];
                }),
                even: g(function (n, t) {
                  for (var i = 0; t > i; i += 2) n.push(i);
                  return n;
                }),
                odd: g(function (n, t) {
                  for (var i = 1; t > i; i += 2) n.push(i);
                  return n;
                }),
                lt: g(function (n, t, i) {
                  for (var r = 0 > i ? i + t : i; --r >= 0; ) n.push(r);
                  return n;
                }),
                gt: g(function (n, t, i) {
                  for (var r = 0 > i ? i + t : i; t > ++r; ) n.push(r);
                  return n;
                }),
              },
            };
            for (nt in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            })
              r.pseudos[nt] = or(nt);
            for (nt in { submit: !0, reset: !0 }) r.pseudos[nt] = sr(nt);
            bt = u.compile = function (n, t) {
              var r,
                u = [],
                e = [],
                i = ci[n + " "];
              if (!i) {
                for (t || (t = yt(n)), r = t.length; r--; )
                  (i = ei(t[r])), i[f] ? u.push(i) : e.push(i);
                i = ci(n, hr(e, u));
              }
              return i;
            };
            r.pseudos.nth = r.pseudos.eq;
            r.filters = pi.prototype = r.pseudos;
            r.setFilters = new pi();
            it();
            u.attr = i.attr;
            i.find = u;
            i.expr = u.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = u.uniqueSort;
            i.text = u.getText;
            i.isXMLDoc = u.isXML;
            i.contains = u.contains;
          })(n);
        var re = /Until$/,
          ue = /^(?:parents|prev(?:Until|All))/,
          fe = /^.[^:#\[\.,]*$/,
          hr = i.expr.match.needsContext,
          ee = { children: !0, contents: !0, next: !0, prev: !0 };
        i.fn.extend({
          find: function (n) {
            var t,
              r,
              f,
              u = this.length;
            if ("string" != typeof n)
              return (
                (f = this),
                this.pushStack(
                  i(n).filter(function () {
                    for (t = 0; u > t; t++)
                      if (i.contains(f[t], this)) return !0;
                  })
                )
              );
            for (r = [], t = 0; u > t; t++) i.find(n, this[t], r);
            return (
              (r = this.pushStack(u > 1 ? i.unique(r) : r)),
              (r.selector = (this.selector ? this.selector + " " : "") + n),
              r
            );
          },
          has: function (n) {
            var t,
              r = i(n, this),
              u = r.length;
            return this.filter(function () {
              for (t = 0; u > t; t++) if (i.contains(this, r[t])) return !0;
            });
          },
          not: function (n) {
            return this.pushStack(lr(this, n, !1));
          },
          filter: function (n) {
            return this.pushStack(lr(this, n, !0));
          },
          is: function (n) {
            return (
              !!n &&
              ("string" == typeof n
                ? hr.test(n)
                  ? i(n, this.context).index(this[0]) >= 0
                  : i.filter(n, this).length > 0
                : this.filter(n).length > 0)
            );
          },
          closest: function (n, t) {
            for (
              var r,
                f = 0,
                o = this.length,
                u = [],
                e =
                  hr.test(n) || "string" != typeof n
                    ? i(n, t || this.context)
                    : 0;
              o > f;
              f++
            )
              for (
                r = this[f];
                r && r.ownerDocument && r !== t && 11 !== r.nodeType;

              ) {
                if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                  u.push(r);
                  break;
                }
                r = r.parentNode;
              }
            return this.pushStack(u.length > 1 ? i.unique(u) : u);
          },
          index: function (n) {
            return n
              ? "string" == typeof n
                ? i.inArray(this[0], i(n))
                : i.inArray(n.jquery ? n[0] : n, this)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (n, t) {
            var r =
                "string" == typeof n
                  ? i(n, t)
                  : i.makeArray(n && n.nodeType ? [n] : n),
              u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u));
          },
          addBack: function (n) {
            return this.add(
              null == n ? this.prevObject : this.prevObject.filter(n)
            );
          },
        });
        i.fn.andSelf = i.fn.addBack;
        i.each(
          {
            parent: function (n) {
              var t = n.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (n) {
              return i.dir(n, "parentNode");
            },
            parentsUntil: function (n, t, r) {
              return i.dir(n, "parentNode", r);
            },
            next: function (n) {
              return cr(n, "nextSibling");
            },
            prev: function (n) {
              return cr(n, "previousSibling");
            },
            nextAll: function (n) {
              return i.dir(n, "nextSibling");
            },
            prevAll: function (n) {
              return i.dir(n, "previousSibling");
            },
            nextUntil: function (n, t, r) {
              return i.dir(n, "nextSibling", r);
            },
            prevUntil: function (n, t, r) {
              return i.dir(n, "previousSibling", r);
            },
            siblings: function (n) {
              return i.sibling((n.parentNode || {}).firstChild, n);
            },
            children: function (n) {
              return i.sibling(n.firstChild);
            },
            contents: function (n) {
              return i.nodeName(n, "iframe")
                ? n.contentDocument || n.contentWindow.document
                : i.merge([], n.childNodes);
            },
          },
          function (n, t) {
            i.fn[n] = function (r, u) {
              var f = i.map(this, t, r);
              return (
                re.test(n) || (u = r),
                u && "string" == typeof u && (f = i.filter(u, f)),
                (f = this.length > 1 && !ee[n] ? i.unique(f) : f),
                this.length > 1 && ue.test(n) && (f = f.reverse()),
                this.pushStack(f)
              );
            };
          }
        );
        i.extend({
          filter: function (n, t, r) {
            return (
              r && (n = ":not(" + n + ")"),
              1 === t.length
                ? i.find.matchesSelector(t[0], n)
                  ? [t[0]]
                  : []
                : i.find.matches(n, t)
            );
          },
          dir: function (n, r, u) {
            for (
              var e = [], f = n[r];
              f &&
              9 !== f.nodeType &&
              (u === t || 1 !== f.nodeType || !i(f).is(u));

            )
              1 === f.nodeType && e.push(f), (f = f[r]);
            return e;
          },
          sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling)
              1 === n.nodeType && n !== t && i.push(n);
            return i;
          },
        });
        var vr =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
          oe = / jQuery\d+="(?:null|\d+)"/g,
          yr = RegExp("<(?:" + vr + ")[\\s/>]", "i"),
          fi = /^\s+/,
          pr =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          wr = /<([\w:]+)/,
          br = /<tbody/i,
          se = /<|&#?\w+;/,
          he = /<(?:script|style|link)/i,
          ei = /^(?:checkbox|radio)$/i,
          ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
          kr = /^$|\/(?:java|ecma)script/i,
          le = /^true\/(.*)/,
          ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
          e = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [
              2,
              "<table><tbody><\/tbody><colgroup>",
              "<\/colgroup><\/table>",
            ],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: i.support.htmlSerialize
              ? [0, "", ""]
              : [1, "X<div>", "<\/div>"],
          },
          ve = ar(r),
          oi = ve.appendChild(r.createElement("div"));
        e.optgroup = e.option;
        e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
        e.th = e.td;
        i.fn.extend({
          text: function (n) {
            return i.access(
              this,
              function (n) {
                return n === t
                  ? i.text(this)
                  : this.empty().append(
                      ((this[0] && this[0].ownerDocument) || r).createTextNode(
                        n
                      )
                    );
              },
              null,
              n,
              arguments.length
            );
          },
          wrapAll: function (n) {
            if (i.isFunction(n))
              return this.each(function (t) {
                i(this).wrapAll(n.call(this, t));
              });
            if (this[0]) {
              var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && t.insertBefore(this[0]);
              t.map(function () {
                for (
                  var n = this;
                  n.firstChild && 1 === n.firstChild.nodeType;

                )
                  n = n.firstChild;
                return n;
              }).append(this);
            }
            return this;
          },
          wrapInner: function (n) {
            return i.isFunction(n)
              ? this.each(function (t) {
                  i(this).wrapInner(n.call(this, t));
                })
              : this.each(function () {
                  var t = i(this),
                    r = t.contents();
                  r.length ? r.wrapAll(n) : t.append(n);
                });
          },
          wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
              i(this).wrapAll(t ? n.call(this, r) : n);
            });
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                i.nodeName(this, "body") ||
                  i(this).replaceWith(this.childNodes);
              })
              .end();
          },
          append: function () {
            return this.domManip(arguments, !0, function (n) {
              (1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType) &&
                this.appendChild(n);
            });
          },
          prepend: function () {
            return this.domManip(arguments, !0, function (n) {
              (1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType) &&
                this.insertBefore(n, this.firstChild);
            });
          },
          before: function () {
            return this.domManip(arguments, !1, function (n) {
              this.parentNode && this.parentNode.insertBefore(n, this);
            });
          },
          after: function () {
            return this.domManip(arguments, !1, function (n) {
              this.parentNode &&
                this.parentNode.insertBefore(n, this.nextSibling);
            });
          },
          remove: function (n, t) {
            for (var r, f = 0; null != (r = this[f]); f++)
              (!n || i.filter(n, [r]).length > 0) &&
                (t || 1 !== r.nodeType || i.cleanData(u(r)),
                r.parentNode &&
                  (t && i.contains(r.ownerDocument, r) && si(u(r, "script")),
                  r.parentNode.removeChild(r)));
            return this;
          },
          empty: function () {
            for (var n, t = 0; null != (n = this[t]); t++) {
              for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild; )
                n.removeChild(n.firstChild);
              n.options && i.nodeName(n, "select") && (n.options.length = 0);
            }
            return this;
          },
          clone: function (n, t) {
            return (
              (n = null == n ? !1 : n),
              (t = null == t ? n : t),
              this.map(function () {
                return i.clone(this, n, t);
              })
            );
          },
          html: function (n) {
            return i.access(
              this,
              function (n) {
                var r = this[0] || {},
                  f = 0,
                  o = this.length;
                if (n === t)
                  return 1 === r.nodeType ? r.innerHTML.replace(oe, "") : t;
                if (
                  !(
                    "string" != typeof n ||
                    he.test(n) ||
                    (!i.support.htmlSerialize && yr.test(n)) ||
                    (!i.support.leadingWhitespace && fi.test(n)) ||
                    e[(wr.exec(n) || ["", ""])[1].toLowerCase()]
                  )
                ) {
                  n = n.replace(pr, "<$1><\/$2>");
                  try {
                    for (; o > f; f++)
                      (r = this[f] || {}),
                        1 === r.nodeType &&
                          (i.cleanData(u(r, !1)), (r.innerHTML = n));
                    r = 0;
                  } catch (s) {}
                }
                r && this.empty().append(n);
              },
              null,
              n,
              arguments.length
            );
          },
          replaceWith: function (n) {
            var t = i.isFunction(n);
            return (
              t || "string" == typeof n || (n = i(n).not(this).detach()),
              this.domManip([n], !0, function (n) {
                var r = this.nextSibling,
                  t = this.parentNode;
                t && (i(this).remove(), t.insertBefore(n, r));
              })
            );
          },
          detach: function (n) {
            return this.remove(n, !0);
          },
          domManip: function (n, r, f) {
            n = bi.apply([], n);
            var c,
              e,
              l,
              s,
              y,
              h,
              o = 0,
              a = this.length,
              w = this,
              b = a - 1,
              v = n[0],
              p = i.isFunction(v);
            if (
              p ||
              (!(1 >= a || "string" != typeof v || i.support.checkClone) &&
                ce.test(v))
            )
              return this.each(function (i) {
                var u = w.eq(i);
                p && (n[0] = v.call(this, i, r ? u.html() : t));
                u.domManip(n, r, f);
              });
            if (
              a &&
              ((h = i.buildFragment(n, this[0].ownerDocument, !1, this)),
              (c = h.firstChild),
              1 === h.childNodes.length && (h = c),
              c)
            ) {
              for (
                r = r && i.nodeName(c, "tr"),
                  s = i.map(u(h, "script"), dr),
                  l = s.length;
                a > o;
                o++
              )
                (e = h),
                  o !== b &&
                    ((e = i.clone(e, !0, !0)), l && i.merge(s, u(e, "script"))),
                  f.call(
                    r && i.nodeName(this[o], "table")
                      ? ye(this[o], "tbody")
                      : this[o],
                    e,
                    o
                  );
              if (l)
                for (
                  y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0;
                  l > o;
                  o++
                )
                  (e = s[o]),
                    kr.test(e.type || "") &&
                      !i._data(e, "globalEval") &&
                      i.contains(y, e) &&
                      (e.src
                        ? i.ajax({
                            url: e.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0,
                          })
                        : i.globalEval(
                            (
                              e.text ||
                              e.textContent ||
                              e.innerHTML ||
                              ""
                            ).replace(ae, "")
                          ));
              h = c = null;
            }
            return this;
          },
        });
        i.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (n, t) {
            i.fn[n] = function (n) {
              for (
                var u, r = 0, f = [], e = i(n), o = e.length - 1;
                o >= r;
                r++
              )
                (u = r === o ? this : this.clone(!0)),
                  i(e[r])[t](u),
                  bt.apply(f, u.get());
              return this.pushStack(f);
            };
          }
        );
        i.extend({
          clone: function (n, t, r) {
            var f,
              h,
              o,
              e,
              s,
              c = i.contains(n.ownerDocument, n);
            if (
              (i.support.html5Clone ||
              i.isXMLDoc(n) ||
              !yr.test("<" + n.nodeName + ">")
                ? (o = n.cloneNode(!0))
                : ((oi.innerHTML = n.outerHTML),
                  oi.removeChild((o = oi.firstChild))),
              !(
                (i.support.noCloneEvent && i.support.noCloneChecked) ||
                (1 !== n.nodeType && 11 !== n.nodeType) ||
                i.isXMLDoc(n)
              ))
            )
              for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e)
                f[e] && pe(h, f[e]);
            if (t)
              if (r)
                for (
                  s = s || u(n), f = f || u(o), e = 0;
                  null != (h = s[e]);
                  e++
                )
                  nu(h, f[e]);
              else nu(n, o);
            return (
              (f = u(o, "script")),
              f.length > 0 && si(f, !c && u(n, "script")),
              (f = s = h = null),
              o
            );
          },
          buildFragment: function (n, t, r, f) {
            for (
              var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0;
              b > v;
              v++
            )
              if (((o = n[v]), o || 0 === o))
                if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
                else if (se.test(o)) {
                  for (
                    s = s || a.appendChild(t.createElement("div")),
                      y = (wr.exec(o) || ["", ""])[1].toLowerCase(),
                      l = e[y] || e._default,
                      s.innerHTML = l[1] + o.replace(pr, "<$1><\/$2>") + l[2],
                      h = l[0];
                    h--;

                  )
                    s = s.lastChild;
                  if (
                    (!i.support.leadingWhitespace &&
                      fi.test(o) &&
                      c.push(t.createTextNode(fi.exec(o)[0])),
                    !i.support.tbody)
                  )
                    for (
                      o =
                        "table" !== y || br.test(o)
                          ? "<table>" !== l[1] || br.test(o)
                            ? 0
                            : s
                          : s.firstChild,
                        h = o && o.childNodes.length;
                      h--;

                    )
                      i.nodeName((p = o.childNodes[h]), "tbody") &&
                        !p.childNodes.length &&
                        o.removeChild(p);
                  for (
                    i.merge(c, s.childNodes), s.textContent = "";
                    s.firstChild;

                  )
                    s.removeChild(s.firstChild);
                  s = a.lastChild;
                } else c.push(t.createTextNode(o));
            for (
              s && a.removeChild(s),
                i.support.appendChecked || i.grep(u(c, "input"), we),
                v = 0;
              (o = c[v++]);

            )
              if (
                (!f || -1 === i.inArray(o, f)) &&
                ((w = i.contains(o.ownerDocument, o)),
                (s = u(a.appendChild(o), "script")),
                w && si(s),
                r)
              )
                for (h = 0; (o = s[h++]); ) kr.test(o.type || "") && r.push(o);
            return (s = null), a;
          },
          cleanData: function (n, t) {
            for (
              var r,
                f,
                u,
                e,
                c = 0,
                s = i.expando,
                h = i.cache,
                l = i.support.deleteExpando,
                a = i.event.special;
              null != (r = n[c]);
              c++
            )
              if ((t || i.acceptData(r)) && ((u = r[s]), (e = u && h[u]))) {
                if (e.events)
                  for (f in e.events)
                    a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                h[u] &&
                  (delete h[u],
                  l
                    ? delete r[s]
                    : typeof r.removeAttribute !== o
                    ? r.removeAttribute(s)
                    : (r[s] = null),
                  b.push(u));
              }
          },
        });
        var rt,
          v,
          y,
          hi = /alpha\([^)]*\)/i,
          be = /opacity\s*=\s*([^)]*)/,
          ke = /^(top|right|bottom|left)$/,
          de = /^(none|table(?!-c[ea]).+)/,
          tu = /^margin/,
          ge = RegExp("^(" + st + ")(.*)$", "i"),
          ct = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
          no = RegExp("^([+-])=(" + st + ")", "i"),
          iu = { BODY: "block" },
          to = { position: "absolute", visibility: "hidden", display: "block" },
          ru = { letterSpacing: 0, fontWeight: 400 },
          p = ["Top", "Right", "Bottom", "Left"],
          uu = ["Webkit", "O", "Moz", "ms"];
        i.fn.extend({
          css: function (n, r) {
            return i.access(
              this,
              function (n, r, u) {
                var e,
                  o,
                  s = {},
                  f = 0;
                if (i.isArray(r)) {
                  for (o = v(n), e = r.length; e > f; f++)
                    s[r[f]] = i.css(n, r[f], !1, o);
                  return s;
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r);
              },
              n,
              r,
              arguments.length > 1
            );
          },
          show: function () {
            return eu(this, !0);
          },
          hide: function () {
            return eu(this);
          },
          toggle: function (n) {
            var t = "boolean" == typeof n;
            return this.each(function () {
              (t ? n : ut(this)) ? i(this).show() : i(this).hide();
            });
          },
        });
        i.extend({
          cssHooks: {
            opacity: {
              get: function (n, t) {
                if (t) {
                  var i = y(n, "opacity");
                  return "" === i ? "1" : i;
                }
              },
            },
          },
          cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: { float: i.support.cssFloat ? "cssFloat" : "styleFloat" },
          style: function (n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
              var o,
                s,
                e,
                h = i.camelCase(r),
                c = n.style;
              if (
                ((r = i.cssProps[h] || (i.cssProps[h] = fu(c, h))),
                (e = i.cssHooks[r] || i.cssHooks[h]),
                u === t)
              )
                return e && "get" in e && (o = e.get(n, !1, f)) !== t
                  ? o
                  : c[r];
              if (
                ((s = typeof u),
                "string" === s &&
                  (o = no.exec(u)) &&
                  ((u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r))),
                  (s = "number")),
                !(
                  null == u ||
                  ("number" === s && isNaN(u)) ||
                  ("number" !== s || i.cssNumber[h] || (u += "px"),
                  i.support.clearCloneStyle ||
                    "" !== u ||
                    0 !== r.indexOf("background") ||
                    (c[r] = "inherit"),
                  e && "set" in e && (u = e.set(n, u, f)) === t)
                ))
              )
                try {
                  c[r] = u;
                } catch (l) {}
            }
          },
          css: function (n, r, u, f) {
            var h,
              e,
              o,
              s = i.camelCase(r);
            return (
              (r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s))),
              (o = i.cssHooks[r] || i.cssHooks[s]),
              o && "get" in o && (e = o.get(n, !0, u)),
              e === t && (e = y(n, r, f)),
              "normal" === e && r in ru && (e = ru[r]),
              "" === u || u
                ? ((h = parseFloat(e)), u === !0 || i.isNumeric(h) ? h || 0 : e)
                : e
            );
          },
          swap: function (n, t, i, r) {
            var f,
              u,
              e = {};
            for (u in t) (e[u] = n.style[u]), (n.style[u] = t[u]);
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f;
          },
        });
        n.getComputedStyle
          ? ((v = function (t) {
              return n.getComputedStyle(t, null);
            }),
            (y = function (n, r, u) {
              var s,
                h,
                c,
                o = u || v(n),
                e = o ? o.getPropertyValue(r) || o[r] : t,
                f = n.style;
              return (
                o &&
                  ("" !== e ||
                    i.contains(n.ownerDocument, n) ||
                    (e = i.style(n, r)),
                  ct.test(e) &&
                    tu.test(r) &&
                    ((s = f.width),
                    (h = f.minWidth),
                    (c = f.maxWidth),
                    (f.minWidth = f.maxWidth = f.width = e),
                    (e = o.width),
                    (f.width = s),
                    (f.minWidth = h),
                    (f.maxWidth = c))),
                e
              );
            }))
          : r.documentElement.currentStyle &&
            ((v = function (n) {
              return n.currentStyle;
            }),
            (y = function (n, i, r) {
              var s,
                e,
                o,
                h = r || v(n),
                u = h ? h[i] : t,
                f = n.style;
              return (
                null == u && f && f[i] && (u = f[i]),
                ct.test(u) &&
                  !ke.test(i) &&
                  ((s = f.left),
                  (e = n.runtimeStyle),
                  (o = e && e.left),
                  o && (e.left = n.currentStyle.left),
                  (f.left = "fontSize" === i ? "1em" : u),
                  (u = f.pixelLeft + "px"),
                  (f.left = s),
                  o && (e.left = o)),
                "" === u ? "auto" : u
              );
            }));
        i.each(["height", "width"], function (n, r) {
          i.cssHooks[r] = {
            get: function (n, u, f) {
              return u
                ? 0 === n.offsetWidth && de.test(i.css(n, "display"))
                  ? i.swap(n, to, function () {
                      return hu(n, r, f);
                    })
                  : hu(n, r, f)
                : t;
            },
            set: function (n, t, u) {
              var f = u && v(n);
              return ou(
                n,
                t,
                u
                  ? su(
                      n,
                      r,
                      u,
                      i.support.boxSizing &&
                        "border-box" === i.css(n, "boxSizing", !1, f),
                      f
                    )
                  : 0
              );
            },
          };
        });
        i.support.opacity ||
          (i.cssHooks.opacity = {
            get: function (n, t) {
              return be.test(
                (t && n.currentStyle
                  ? n.currentStyle.filter
                  : n.style.filter) || ""
              )
                ? 0.01 * parseFloat(RegExp.$1) + ""
                : t
                ? "1"
                : "";
            },
            set: function (n, t) {
              var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                f = (u && u.filter) || r.filter || "";
              r.zoom = 1;
              ((t >= 1 || "" === t) &&
                "" === i.trim(f.replace(hi, "")) &&
                r.removeAttribute &&
                (r.removeAttribute("filter"), "" === t || (u && !u.filter))) ||
                (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e);
            },
          });
        i(function () {
          i.support.reliableMarginRight ||
            (i.cssHooks.marginRight = {
              get: function (n, r) {
                return r
                  ? i.swap(n, { display: "inline-block" }, y, [
                      n,
                      "marginRight",
                    ])
                  : t;
              },
            });
          !i.support.pixelPosition &&
            i.fn.position &&
            i.each(["top", "left"], function (n, r) {
              i.cssHooks[r] = {
                get: function (n, u) {
                  return u
                    ? ((u = y(n, r)),
                      ct.test(u) ? i(n).position()[r] + "px" : u)
                    : t;
                },
              };
            });
        });
        i.expr &&
          i.expr.filters &&
          ((i.expr.filters.hidden = function (n) {
            return (
              (0 >= n.offsetWidth && 0 >= n.offsetHeight) ||
              (!i.support.reliableHiddenOffsets &&
                "none" ===
                  ((n.style && n.style.display) || i.css(n, "display")))
            );
          }),
          (i.expr.filters.visible = function (n) {
            return !i.expr.filters.hidden(n);
          }));
        i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
          i.cssHooks[n + t] = {
            expand: function (i) {
              for (
                var r = 0,
                  f = {},
                  u = "string" == typeof i ? i.split(" ") : [i];
                4 > r;
                r++
              )
                f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
              return f;
            },
          };
          tu.test(n) || (i.cssHooks[n + t].set = ou);
        });
        var io = /%20/g,
          ro = /\[\]$/,
          au = /\r?\n/g,
          uo = /^(?:submit|button|image|reset|file)$/i,
          fo = /^(?:input|select|textarea|keygen)/i;
        i.fn.extend({
          serialize: function () {
            return i.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var n = i.prop(this, "elements");
              return n ? i.makeArray(n) : this;
            })
              .filter(function () {
                var n = this.type;
                return (
                  this.name &&
                  !i(this).is(":disabled") &&
                  fo.test(this.nodeName) &&
                  !uo.test(n) &&
                  (this.checked || !ei.test(n))
                );
              })
              .map(function (n, t) {
                var r = i(this).val();
                return null == r
                  ? null
                  : i.isArray(r)
                  ? i.map(r, function (n) {
                      return { name: t.name, value: n.replace(au, "\r\n") };
                    })
                  : { name: t.name, value: r.replace(au, "\r\n") };
              })
              .get();
          },
        });
        i.param = function (n, r) {
          var u,
            f = [],
            e = function (n, t) {
              t = i.isFunction(t) ? t() : null == t ? "" : t;
              f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
            };
          if (
            (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
            i.isArray(n) || (n.jquery && !i.isPlainObject(n)))
          )
            i.each(n, function () {
              e(this.name, this.value);
            });
          else for (u in n) ci(u, n[u], r, e);
          return f.join("&").replace(io, "+");
        };
        i.each(
          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
          ),
          function (n, t) {
            i.fn[t] = function (n, i) {
              return arguments.length > 0
                ? this.on(t, null, n, i)
                : this.trigger(t);
            };
          }
        );
        i.fn.hover = function (n, t) {
          return this.mouseenter(n).mouseleave(t || n);
        };
        var w,
          c,
          li = i.now(),
          ai = /\?/,
          eo = /#.*$/,
          vu = /([?&])_=[^&]*/,
          oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
          so = /^(?:GET|HEAD)$/,
          ho = /^\/\//,
          yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
          pu = i.fn.load,
          wu = {},
          vi = {},
          bu = "*/".concat("*");
        try {
          c = ff.href;
        } catch (go) {
          c = r.createElement("a");
          c.href = "";
          c = c.href;
        }
        w = yu.exec(c.toLowerCase()) || [];
        i.fn.load = function (n, r, u) {
          if ("string" != typeof n && pu) return pu.apply(this, arguments);
          var f,
            s,
            h,
            e = this,
            o = n.indexOf(" ");
          return (
            o >= 0 && ((f = n.slice(o, n.length)), (n = n.slice(0, o))),
            i.isFunction(r)
              ? ((u = r), (r = t))
              : r && "object" == typeof r && (h = "POST"),
            e.length > 0 &&
              i
                .ajax({ url: n, type: h, dataType: "html", data: r })
                .done(function (n) {
                  s = arguments;
                  e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
                })
                .complete(
                  u &&
                    function (n, t) {
                      e.each(u, s || [n.responseText, t, n]);
                    }
                ),
            this
          );
        };
        i.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (n, t) {
            i.fn[t] = function (n) {
              return this.on(t, n);
            };
          }
        );
        i.each(["get", "post"], function (n, r) {
          i[r] = function (n, u, f, e) {
            return (
              i.isFunction(u) && ((e = e || f), (f = u), (u = t)),
              i.ajax({ url: n, type: r, dataType: e, data: u, success: f })
            );
          };
        });
        i.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: c,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                w[1]
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": bu,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: "responseXML", text: "responseText" },
            converters: {
              "* text": n.String,
              "text html": !0,
              "text json": i.parseJSON,
              "text xml": i.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (n, t) {
            return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n);
          },
          ajaxPrefilter: ku(wu),
          ajaxTransport: ku(vi),
          ajax: function (n, r) {
            function k(n, r, s, c) {
              var l,
                k,
                w,
                rt,
                p,
                a = r;
              2 !== o &&
                ((o = 2),
                g && clearTimeout(g),
                (y = t),
                (d = c || ""),
                (f.readyState = n > 0 ? 4 : 0),
                s && (rt = co(u, f, s)),
                (n >= 200 && 300 > n) || 304 === n
                  ? (u.ifModified &&
                      ((p = f.getResponseHeader("Last-Modified")),
                      p && (i.lastModified[e] = p),
                      (p = f.getResponseHeader("etag")),
                      p && (i.etag[e] = p)),
                    204 === n
                      ? ((l = !0), (a = "nocontent"))
                      : 304 === n
                      ? ((l = !0), (a = "notmodified"))
                      : ((l = lo(u, rt)),
                        (a = l.state),
                        (k = l.data),
                        (w = l.error),
                        (l = !w)))
                  : ((w = a), (n || !a) && ((a = "error"), 0 > n && (n = 0))),
                (f.status = n),
                (f.statusText = (r || a) + ""),
                l ? tt.resolveWith(h, [k, a, f]) : tt.rejectWith(h, [f, a, w]),
                f.statusCode(b),
                (b = t),
                v &&
                  nt.trigger(l ? "ajaxSuccess" : "ajaxError", [
                    f,
                    u,
                    l ? k : w,
                  ]),
                it.fireWith(h, [f, a]),
                v &&
                  (nt.trigger("ajaxComplete", [f, u]),
                  --i.active || i.event.trigger("ajaxStop")));
            }
            "object" == typeof n && ((r = n), (n = t));
            r = r || {};
            var l,
              a,
              e,
              d,
              g,
              v,
              y,
              p,
              u = i.ajaxSetup({}, r),
              h = u.context || u,
              nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
              tt = i.Deferred(),
              it = i.Callbacks("once memory"),
              b = u.statusCode || {},
              rt = {},
              ut = {},
              o = 0,
              ft = "canceled",
              f = {
                readyState: 0,
                getResponseHeader: function (n) {
                  var t;
                  if (2 === o) {
                    if (!p)
                      for (p = {}; (t = oo.exec(d)); )
                        p[t[1].toLowerCase()] = t[2];
                    t = p[n.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function () {
                  return 2 === o ? d : null;
                },
                setRequestHeader: function (n, t) {
                  var i = n.toLowerCase();
                  return o || ((n = ut[i] = ut[i] || n), (rt[n] = t)), this;
                },
                overrideMimeType: function (n) {
                  return o || (u.mimeType = n), this;
                },
                statusCode: function (n) {
                  var t;
                  if (n)
                    if (2 > o) for (t in n) b[t] = [b[t], n[t]];
                    else f.always(n[f.status]);
                  return this;
                },
                abort: function (n) {
                  var t = n || ft;
                  return y && y.abort(t), k(0, t), this;
                },
              };
            if (
              ((tt.promise(f).complete = it.add),
              (f.success = f.done),
              (f.error = f.fail),
              (u.url = ((n || u.url || c) + "")
                .replace(eo, "")
                .replace(ho, w[1] + "//")),
              (u.type = r.method || r.type || u.method || u.type),
              (u.dataTypes = i
                .trim(u.dataType || "*")
                .toLowerCase()
                .match(s) || [""]),
              null == u.crossDomain &&
                ((l = yu.exec(u.url.toLowerCase())),
                (u.crossDomain = !(
                  !l ||
                  (l[1] === w[1] &&
                    l[2] === w[2] &&
                    (l[3] || ("http:" === l[1] ? 80 : 443)) ==
                      (w[3] || ("http:" === w[1] ? 80 : 443)))
                ))),
              u.data &&
                u.processData &&
                "string" != typeof u.data &&
                (u.data = i.param(u.data, u.traditional)),
              du(wu, u, r, f),
              2 === o)
            )
              return f;
            v = u.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !so.test(u.type);
            e = u.url;
            u.hasContent ||
              (u.data &&
                ((e = u.url += (ai.test(e) ? "&" : "?") + u.data),
                delete u.data),
              u.cache === !1 &&
                (u.url = vu.test(e)
                  ? e.replace(vu, "$1_=" + li++)
                  : e + (ai.test(e) ? "&" : "?") + "_=" + li++));
            u.ifModified &&
              (i.lastModified[e] &&
                f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
              i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            ((u.data && u.hasContent && u.contentType !== !1) ||
              r.contentType) &&
              f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader(
              "Accept",
              u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                ? u.accepts[u.dataTypes[0]] +
                    ("*" !== u.dataTypes[0] ? ", " + bu + "; q=0.01" : "")
                : u.accepts["*"]
            );
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o))
              return f.abort();
            ft = "abort";
            for (a in { success: 1, error: 1, complete: 1 }) f[a](u[a]);
            if ((y = du(vi, u, r, f))) {
              f.readyState = 1;
              v && nt.trigger("ajaxSend", [f, u]);
              u.async &&
                u.timeout > 0 &&
                (g = setTimeout(function () {
                  f.abort("timeout");
                }, u.timeout));
              try {
                o = 1;
                y.send(rt, k);
              } catch (et) {
                if (!(2 > o)) throw et;
                k(-1, et);
              }
            } else k(-1, "No Transport");
            return f;
          },
          getScript: function (n, r) {
            return i.get(n, t, r, "script");
          },
          getJSON: function (n, t, r) {
            return i.get(n, t, r, "json");
          },
        });
        i.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /(?:java|ecma)script/ },
          converters: {
            "text script": function (n) {
              return i.globalEval(n), n;
            },
          },
        });
        i.ajaxPrefilter("script", function (n) {
          n.cache === t && (n.cache = !1);
          n.crossDomain && ((n.type = "GET"), (n.global = !1));
        });
        i.ajaxTransport("script", function (n) {
          if (n.crossDomain) {
            var u,
              f = r.head || i("head")[0] || r.documentElement;
            return {
              send: function (t, i) {
                u = r.createElement("script");
                u.async = !0;
                n.scriptCharset && (u.charset = n.scriptCharset);
                u.src = n.url;
                u.onload = u.onreadystatechange = function (n, t) {
                  (t ||
                    !u.readyState ||
                    /loaded|complete/.test(u.readyState)) &&
                    ((u.onload = u.onreadystatechange = null),
                    u.parentNode && u.parentNode.removeChild(u),
                    (u = null),
                    t || i(200, "success"));
                };
                f.insertBefore(u, f.firstChild);
              },
              abort: function () {
                u && u.onload(t, !0);
              },
            };
          }
        });
        pi = [];
        lt = /(=)\?(?=&|$)|\?\?/;
        i.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var n = pi.pop() || i.expando + "_" + li++;
            return (this[n] = !0), n;
          },
        });
        i.ajaxPrefilter("json jsonp", function (r, u, f) {
          var e,
            s,
            o,
            h =
              r.jsonp !== !1 &&
              (lt.test(r.url)
                ? "url"
                : "string" == typeof r.data &&
                  !(r.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                  lt.test(r.data) &&
                  "data");
          return h || "jsonp" === r.dataTypes[0]
            ? ((e = r.jsonpCallback =
                i.isFunction(r.jsonpCallback)
                  ? r.jsonpCallback()
                  : r.jsonpCallback),
              h
                ? (r[h] = r[h].replace(lt, "$1" + e))
                : r.jsonp !== !1 &&
                  (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e),
              (r.converters["script json"] = function () {
                return o || i.error(e + " was not called"), o[0];
              }),
              (r.dataTypes[0] = "json"),
              (s = n[e]),
              (n[e] = function () {
                o = arguments;
              }),
              f.always(function () {
                n[e] = s;
                r[e] && ((r.jsonpCallback = u.jsonpCallback), pi.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t;
              }),
              "script")
            : t;
        });
        gu = 0;
        at =
          n.ActiveXObject &&
          function () {
            for (var n in g) g[n](t, !0);
          };
        i.ajaxSettings.xhr = n.ActiveXObject
          ? function () {
              return (!this.isLocal && nf()) || ao();
            }
          : nf;
        nt = i.ajaxSettings.xhr();
        i.support.cors = !!nt && "withCredentials" in nt;
        nt = i.support.ajax = !!nt;
        nt &&
          i.ajaxTransport(function (r) {
            if (!r.crossDomain || i.support.cors) {
              var u;
              return {
                send: function (f, e) {
                  var h,
                    s,
                    o = r.xhr();
                  if (
                    (r.username
                      ? o.open(r.type, r.url, r.async, r.username, r.password)
                      : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                  )
                    for (s in r.xhrFields) o[s] = r.xhrFields[s];
                  r.mimeType &&
                    o.overrideMimeType &&
                    o.overrideMimeType(r.mimeType);
                  r.crossDomain ||
                    f["X-Requested-With"] ||
                    (f["X-Requested-With"] = "XMLHttpRequest");
                  try {
                    for (s in f) o.setRequestHeader(s, f[s]);
                  } catch (c) {}
                  o.send((r.hasContent && r.data) || null);
                  u = function (n, f) {
                    var s, a, l, c;
                    try {
                      if (u && (f || 4 === o.readyState))
                        if (
                          ((u = t),
                          h &&
                            ((o.onreadystatechange = i.noop),
                            at && delete g[h]),
                          f)
                        )
                          4 !== o.readyState && o.abort();
                        else {
                          c = {};
                          s = o.status;
                          a = o.getAllResponseHeaders();
                          "string" == typeof o.responseText &&
                            (c.text = o.responseText);
                          try {
                            l = o.statusText;
                          } catch (y) {
                            l = "";
                          }
                          s || !r.isLocal || r.crossDomain
                            ? 1223 === s && (s = 204)
                            : (s = c.text ? 200 : 404);
                        }
                    } catch (v) {
                      f || e(-1, v);
                    }
                    c && e(s, l, c, a);
                  };
                  r.async
                    ? 4 === o.readyState
                      ? setTimeout(u)
                      : ((h = ++gu),
                        at && (g || ((g = {}), i(n).unload(at)), (g[h] = u)),
                        (o.onreadystatechange = u))
                    : u();
                },
                abort: function () {
                  u && u(t, !0);
                },
              };
            }
          });
        var tt,
          vt,
          vo = /^(?:toggle|show|hide)$/,
          yo = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
          po = /queueHooks$/,
          yt = [ko],
          ft = {
            "*": [
              function (n, t) {
                var o,
                  s,
                  r = this.createTween(n, t),
                  e = yo.exec(t),
                  h = r.cur(),
                  u = +h || 0,
                  f = 1,
                  c = 20;
                if (e) {
                  if (
                    ((o = +e[2]),
                    (s = e[3] || (i.cssNumber[n] ? "" : "px")),
                    "px" !== s && u)
                  ) {
                    u = i.css(r.elem, n, !0) || o || 1;
                    do (f = f || ".5"), (u /= f), i.style(r.elem, n, u + s);
                    while (f !== (f = r.cur() / h) && 1 !== f && --c);
                  }
                  r.unit = s;
                  r.start = u;
                  r.end = e[1] ? u + (e[1] + 1) * o : o;
                }
                return r;
              },
            ],
          };
        i.Animation = i.extend(rf, {
          tweener: function (n, t) {
            i.isFunction(n) ? ((t = n), (n = ["*"])) : (n = n.split(" "));
            for (var r, u = 0, f = n.length; f > u; u++)
              (r = n[u]), (ft[r] = ft[r] || []), ft[r].unshift(t);
          },
          prefilter: function (n, t) {
            t ? yt.unshift(n) : yt.push(n);
          },
        });
        i.Tween = f;
        f.prototype = {
          constructor: f,
          init: function (n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px");
          },
          cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this);
          },
          run: function (n) {
            var r,
              t = f.propHooks[this.prop];
            return (
              (this.pos = r =
                this.options.duration
                  ? i.easing[this.easing](
                      n,
                      this.options.duration * n,
                      0,
                      1,
                      this.options.duration
                    )
                  : n),
              (this.now = (this.end - this.start) * r + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              t && t.set ? t.set(this) : f.propHooks._default.set(this),
              this
            );
          },
        };
        f.prototype.init.prototype = f.prototype;
        f.propHooks = {
          _default: {
            get: function (n) {
              var t;
              return null == n.elem[n.prop] ||
                (n.elem.style && null != n.elem.style[n.prop])
                ? ((t = i.css(n.elem, n.prop, "")), t && "auto" !== t ? t : 0)
                : n.elem[n.prop];
            },
            set: function (n) {
              i.fx.step[n.prop]
                ? i.fx.step[n.prop](n)
                : n.elem.style &&
                  (null != n.elem.style[i.cssProps[n.prop]] ||
                    i.cssHooks[n.prop])
                ? i.style(n.elem, n.prop, n.now + n.unit)
                : (n.elem[n.prop] = n.now);
            },
          },
        };
        f.propHooks.scrollTop = f.propHooks.scrollLeft = {
          set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
          },
        };
        i.each(["toggle", "show", "hide"], function (n, t) {
          var r = i.fn[t];
          i.fn[t] = function (n, i, u) {
            return null == n || "boolean" == typeof n
              ? r.apply(this, arguments)
              : this.animate(pt(t, !0), n, i, u);
          };
        });
        i.fn.extend({
          fadeTo: function (n, t, i, r) {
            return this.filter(ut)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, n, i, r);
          },
          animate: function (n, t, r, u) {
            var o = i.isEmptyObject(n),
              e = i.speed(t, r, u),
              f = function () {
                var t = rf(this, i.extend({}, n), e);
                f.finish = function () {
                  t.stop(!0);
                };
                (o || i._data(this, "finish")) && t.stop(!0);
              };
            return (
              (f.finish = f),
              o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            );
          },
          stop: function (n, r, u) {
            var f = function (n) {
              var t = n.stop;
              delete n.stop;
              t(u);
            };
            return (
              "string" != typeof n && ((u = r), (r = n), (n = t)),
              r && n !== !1 && this.queue(n || "fx", []),
              this.each(function () {
                var o = !0,
                  t = null != n && n + "queueHooks",
                  e = i.timers,
                  r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else for (t in r) r[t] && r[t].stop && po.test(t) && f(r[t]);
                for (t = e.length; t--; )
                  e[t].elem !== this ||
                    (null != n && e[t].queue !== n) ||
                    (e[t].anim.stop(u), (o = !1), e.splice(t, 1));
                (o || !u) && i.dequeue(this, n);
              })
            );
          },
          finish: function (n) {
            return (
              n !== !1 && (n = n || "fx"),
              this.each(function () {
                var t,
                  f = i._data(this),
                  r = f[n + "queue"],
                  e = f[n + "queueHooks"],
                  u = i.timers,
                  o = r ? r.length : 0;
                for (
                  f.finish = !0,
                    i.queue(this, n, []),
                    e && e.cur && e.cur.finish && e.cur.finish.call(this),
                    t = u.length;
                  t--;

                )
                  u[t].elem === this &&
                    u[t].queue === n &&
                    (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; o > t; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish;
              })
            );
          },
        });
        i.each(
          {
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (n, t) {
            i.fn[n] = function (n, i, r) {
              return this.animate(t, n, i, r);
            };
          }
        );
        i.speed = function (n, t, r) {
          var u =
            n && "object" == typeof n
              ? i.extend({}, n)
              : {
                  complete: r || (!r && t) || (i.isFunction(n) && n),
                  duration: n,
                  easing: (r && t) || (t && !i.isFunction(t) && t),
                };
          return (
            (u.duration = i.fx.off
              ? 0
              : "number" == typeof u.duration
              ? u.duration
              : u.duration in i.fx.speeds
              ? i.fx.speeds[u.duration]
              : i.fx.speeds._default),
            (null == u.queue || u.queue === !0) && (u.queue = "fx"),
            (u.old = u.complete),
            (u.complete = function () {
              i.isFunction(u.old) && u.old.call(this);
              u.queue && i.dequeue(this, u.queue);
            }),
            u
          );
        };
        i.easing = {
          linear: function (n) {
            return n;
          },
          swing: function (n) {
            return 0.5 - Math.cos(n * Math.PI) / 2;
          },
        };
        i.timers = [];
        i.fx = f.prototype.init;
        i.fx.tick = function () {
          var u,
            n = i.timers,
            r = 0;
          for (tt = i.now(); n.length > r; r++)
            (u = n[r]), u() || n[r] !== u || n.splice(r--, 1);
          n.length || i.fx.stop();
          tt = t;
        };
        i.fx.timer = function (n) {
          n() && i.timers.push(n) && i.fx.start();
        };
        i.fx.interval = 13;
        i.fx.start = function () {
          vt || (vt = setInterval(i.fx.tick, i.fx.interval));
        };
        i.fx.stop = function () {
          clearInterval(vt);
          vt = null;
        };
        i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
        i.fx.step = {};
        i.expr &&
          i.expr.filters &&
          (i.expr.filters.animated = function (n) {
            return i.grep(i.timers, function (t) {
              return n === t.elem;
            }).length;
          });
        i.fn.offset = function (n) {
          if (arguments.length)
            return n === t
              ? this
              : this.each(function (t) {
                  i.offset.setOffset(this, n, t);
                });
          var r,
            e,
            f = { top: 0, left: 0 },
            u = this[0],
            s = u && u.ownerDocument;
          if (s)
            return (
              (r = s.documentElement),
              i.contains(r, u)
                ? (typeof u.getBoundingClientRect !== o &&
                    (f = u.getBoundingClientRect()),
                  (e = uf(s)),
                  {
                    top:
                      f.top +
                      (e.pageYOffset || r.scrollTop) -
                      (r.clientTop || 0),
                    left:
                      f.left +
                      (e.pageXOffset || r.scrollLeft) -
                      (r.clientLeft || 0),
                  })
                : f
            );
        };
        i.offset = {
          setOffset: function (n, t, r) {
            var f = i.css(n, "position");
            "static" === f && (n.style.position = "relative");
            var e = i(n),
              o = e.offset(),
              l = i.css(n, "top"),
              a = i.css(n, "left"),
              v =
                ("absolute" === f || "fixed" === f) &&
                i.inArray("auto", [l, a]) > -1,
              u = {},
              s = {},
              h,
              c;
            v
              ? ((s = e.position()), (h = s.top), (c = s.left))
              : ((h = parseFloat(l) || 0), (c = parseFloat(a) || 0));
            i.isFunction(t) && (t = t.call(n, r, o));
            null != t.top && (u.top = t.top - o.top + h);
            null != t.left && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u);
          },
        };
        i.fn.extend({
          position: function () {
            if (this[0]) {
              var n,
                r,
                t = { top: 0, left: 0 },
                u = this[0];
              return (
                "fixed" === i.css(u, "position")
                  ? (r = u.getBoundingClientRect())
                  : ((n = this.offsetParent()),
                    (r = this.offset()),
                    i.nodeName(n[0], "html") || (t = n.offset()),
                    (t.top += i.css(n[0], "borderTopWidth", !0)),
                    (t.left += i.css(n[0], "borderLeftWidth", !0))),
                {
                  top: r.top - t.top - i.css(u, "marginTop", !0),
                  left: r.left - t.left - i.css(u, "marginLeft", !0),
                }
              );
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var n = this.offsetParent || r.documentElement;
                n &&
                !i.nodeName(n, "html") &&
                "static" === i.css(n, "position");

              )
                n = n.offsetParent;
              return n || r.documentElement;
            });
          },
        });
        i.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (n, r) {
            var u = /Y/.test(r);
            i.fn[n] = function (f) {
              return i.access(
                this,
                function (n, f, e) {
                  var o = uf(n);
                  return e === t
                    ? o
                      ? r in o
                        ? o[r]
                        : o.document.documentElement[f]
                      : n[f]
                    : (o
                        ? o.scrollTo(
                            u ? i(o).scrollLeft() : e,
                            u ? e : i(o).scrollTop()
                          )
                        : (n[f] = e),
                      t);
                },
                n,
                f,
                arguments.length,
                null
              );
            };
          }
        );
        i.each({ Height: "height", Width: "width" }, function (n, r) {
          i.each(
            { padding: "inner" + n, content: r, "": "outer" + n },
            function (u, f) {
              i.fn[f] = function (f, e) {
                var o = arguments.length && (u || "boolean" != typeof f),
                  s = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(
                  this,
                  function (r, u, f) {
                    var e;
                    return i.isWindow(r)
                      ? r.document.documentElement["client" + n]
                      : 9 === r.nodeType
                      ? ((e = r.documentElement),
                        Math.max(
                          r.body["scroll" + n],
                          e["scroll" + n],
                          r.body["offset" + n],
                          e["offset" + n],
                          e["client" + n]
                        ))
                      : f === t
                      ? i.css(r, u, s)
                      : i.style(r, u, f, s);
                  },
                  r,
                  o ? f : t,
                  o,
                  null
                );
              };
            }
          );
        });
        n.jQuery = n.$ = i;
        "function" == typeof define &&
          define.amd &&
          define.amd.jQuery &&
          define("jquery", [], function () {
            return i;
          });
      })(window);
      H5P = window.H5P = window.H5P || {};
      H5P.jQuery = jQuery.noConflict(!0);
      H5P.jQuery.ajaxPrefilter(function (n) {
        n.crossDomain && (n.contents.script = !1);
      });
      H5P = window.H5P = window.H5P || {};
      H5P.isFramed = window.self !== window.parent;
      H5P.$window = H5P.jQuery(window);
      H5P.instances = [];
      document.documentElement.requestFullScreen
        ? (H5P.fullScreenBrowserPrefix = "")
        : document.documentElement.webkitRequestFullScreen
        ? ((H5P.safariBrowser =
            navigator.userAgent.match(/version\/([.\d]+)/i)),
          (H5P.safariBrowser =
            H5P.safariBrowser === null ? 0 : parseInt(H5P.safariBrowser[1])),
          (H5P.safariBrowser === 0 || H5P.safariBrowser > 6) &&
            (H5P.fullScreenBrowserPrefix = "webkit"))
        : document.documentElement.mozRequestFullScreen
        ? (H5P.fullScreenBrowserPrefix = "moz")
        : document.documentElement.msRequestFullscreen &&
          (H5P.fullScreenBrowserPrefix = "ms");
      H5P.opened = {};
      H5P.init = function (n) {
        H5P.$body === undefined && (H5P.$body = H5P.jQuery(document.body));
        H5P.fullscreenSupported === undefined &&
          (H5P.fullscreenSupported =
            !H5PIntegration.fullscreenDisabled &&
            !H5P.fullscreenDisabled &&
            (!(H5P.isFramed && H5P.externalEmbed !== !1) ||
              !!(
                document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled
              )));
        H5P.canHasFullScreen === undefined &&
          (H5P.canHasFullScreen = H5P.fullscreenSupported);
        H5P.jQuery(".h5p-content:not(.h5p-initialized)", n).each(function () {
          var o = H5P.jQuery(this).addClass("h5p-initialized"),
            u = H5P.jQuery('<div class="h5p-container"><\/div>').appendTo(o),
            t = o.data("content-id"),
            i = H5PIntegration.contents["cid-" + t],
            f,
            n,
            s,
            v,
            y,
            e,
            h,
            c,
            l,
            a,
            r,
            w,
            p;
          if (i === undefined)
            return H5P.error(
              "No data for content id " + t + ". Perhaps the library is gone?"
            );
          if (
            ((f = {
              library: i.library,
              params: JSON.parse(i.jsonContent),
              metadata: i.metadata,
            }),
            H5P.getUserData(t, "state", function (r, e) {
              if (e) f.userDatas = { state: e };
              else if (e === null && H5PIntegration.saveFreq) {
                delete i.contentUserData;
                var o = new H5P.Dialog(
                  "content-user-data-reset",
                  "Data Reset",
                  "<p>" +
                    H5P.t("contentChanged") +
                    "<\/p><p>" +
                    H5P.t("startingOver") +
                    '<\/p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK<\/div>',
                  u
                );
                H5P.jQuery(o)
                  .on("dialog-opened", function (i, r) {
                    var u = function (n) {
                      (n.type === "click" || n.which === 32) &&
                        (o.close(), H5P.deleteUserData(t, "state", 0));
                    };
                    r.find(".h5p-dialog-ok-button").click(u).keypress(u);
                    H5P.trigger(n, "resize");
                  })
                  .on("dialog-closed", function () {
                    H5P.trigger(n, "resize");
                  });
                o.open();
              }
            }),
            (n = H5P.newRunnable(f, t, u, !0, { standalone: !0 })),
            i.fullScreen == 1 &&
              H5P.fullscreenSupported &&
              H5P.jQuery(
                '<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' +
                  H5P.t("fullscreen") +
                  '" title="' +
                  H5P.t("fullscreen") +
                  '"><\/div><\/div>'
              )
                .prependTo(u)
                .children()
                .click(function () {
                  H5P.fullScreen(u, n);
                })
                .keydown(function (t) {
                  if (t.which === 32 || t.which === 13)
                    return H5P.fullScreen(u, n), !1;
                }),
            (s = i.displayOptions),
            (v = !1),
            s.frame)
          ) {
            s.copyright &&
              ((y = H5P.getCopyrights(n, f.params, t, f.metadata)),
              y || (s.copyright = !1));
            e = new H5P.ActionBar(s);
            h = e.getDOMElement();
            e.on("reuse", function () {
              H5P.openReuseDialog(h, i, f, n, t);
              n.triggerXAPI("accessed-reuse");
            });
            e.on("copyrights", function () {
              var t = new H5P.Dialog(
                "copyrights",
                H5P.t("copyrightInformation"),
                y,
                u
              );
              t.open(!0);
              n.triggerXAPI("accessed-copyright");
            });
            e.on("embed", function () {
              H5P.openEmbedDialog(
                h,
                i.embedCode,
                i.resizeCode,
                { width: o.width(), height: o.height() },
                n
              );
              n.triggerXAPI("accessed-embed");
            });
            e.hasActions() && ((v = !0), h.insertAfter(u));
          }
          o.addClass(v ? "h5p-frame" : "h5p-no-frame");
          H5P.opened[t] = new Date();
          H5P.on(n, "finish", function (n) {
            n.data !== undefined &&
              H5P.setFinished(t, n.data.score, n.data.maxScore, n.data.time);
          });
          H5P.on(n, "xAPI", H5P.xAPICompletedListener);
          if (
            H5PIntegration.saveFreq !== !1 &&
            (n.getCurrentState instanceof Function ||
              typeof n.getCurrentState == "function")
          ) {
            l = function () {
              var i = n.getCurrentState();
              i !== undefined &&
                H5P.setUserData(t, "state", i, { deleteOnChange: !0 });
              H5PIntegration.saveFreq &&
                (c = setTimeout(l, H5PIntegration.saveFreq * 1e3));
            };
            H5PIntegration.saveFreq &&
              (c = setTimeout(l, H5PIntegration.saveFreq * 1e3));
            H5P.on(n, "xAPI", function (n) {
              var t = n.getVerb();
              (t === "completed" || t === "progressed") &&
                (clearTimeout(c), (c = setTimeout(l, 3e3)));
            });
          }
          if (H5P.isFramed)
            if (H5P.externalEmbed === !1) {
              r = window.frameElement;
              w = function () {
                if (!window.parent.H5P.isFullscreen) {
                  var n = r.parentElement.style.height;
                  r.parentElement.style.height =
                    r.parentElement.clientHeight + "px";
                  r.getBoundingClientRect();
                  r.style.height = "1px";
                  r.style.height = r.contentDocument.body.scrollHeight + "px";
                  r.parentElement.style.height = n;
                }
              };
              H5P.on(n, "resize", function () {
                clearTimeout(a);
                a = setTimeout(function () {
                  w();
                }, 1);
              });
            } else if (H5P.communicator) {
              p = !1;
              H5P.communicator.on("ready", function () {
                H5P.communicator.send("hello");
              });
              H5P.communicator.on("hello", function () {
                p = !0;
                document.body.style.height = "auto";
                document.body.style.overflow = "hidden";
                H5P.trigger(n, "resize");
              });
              H5P.communicator.on("resizePrepared", function () {
                H5P.communicator.send("resize", {
                  scrollHeight: document.body.scrollHeight,
                });
              });
              H5P.communicator.on("resize", function () {
                H5P.trigger(n, "resize");
              });
              H5P.on(n, "resize", function () {
                H5P.isFullscreen ||
                  (clearTimeout(a),
                  (a = setTimeout(function () {
                    p
                      ? H5P.communicator.send("prepareResize", {
                          scrollHeight: document.body.scrollHeight,
                          clientHeight: document.body.clientHeight,
                        })
                      : H5P.communicator.send("hello");
                  }, 0)));
              });
            }
          (H5P.isFramed && H5P.externalEmbed !== !1) ||
            H5P.jQuery(window.parent).resize(function () {
              window.parent.H5P.isFullscreen
                ? H5P.trigger(n, "resize")
                : H5P.trigger(n, "resize");
            });
          H5P.instances.push(n);
          H5P.trigger(n, "resize");
        });
        H5P.jQuery("iframe.h5p-iframe:not(.h5p-initialized)", n).each(
          function () {
            var n = H5P.jQuery(this)
              .addClass("h5p-initialized")
              .data("content-id");
            this.contentDocument.open();
            this.contentDocument.write(
              '<!doctype html><html class="h5p-iframe"><head>' +
                H5P.getHeadTags(n) +
                '<\/head><body><div class="h5p-content" data-content-id="' +
                n +
                '"/><\/body><\/html>'
            );
            this.contentDocument.close();
          }
        );
      };
      H5P.getHeadTags = function (n) {
        var t = function (n) {
            for (var i = "", t = 0; t < n.length; t++)
              i += '<link rel="stylesheet" href="' + n[t] + '">';
            return i;
          },
          i = function (n) {
            for (var i = "", t = 0; t < n.length; t++)
              i += '<script src="' + n[t] + '"><\/script>';
            return i;
          };
        return (
          '<base target="_parent">' +
          t(H5PIntegration.core.styles) +
          t(H5PIntegration.contents["cid-" + n].styles) +
          i(H5PIntegration.core.scripts) +
          i(H5PIntegration.contents["cid-" + n].scripts) +
          "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;<\/script>"
        );
      };
      H5P.communicator = (function () {
        function n() {
          var t = this,
            n = {};
          window.addEventListener(
            "message",
            function (t) {
              window.parent === t.source &&
                t.data.context === "h5p" &&
                n[t.data.action] !== undefined &&
                n[t.data.action](t.data);
            },
            !1
          );
          t.on = function (t, i) {
            n[t] = i;
          };
          t.send = function (n, t) {
            t === undefined && (t = {});
            t.context = "h5p";
            t.action = n;
            window.parent.postMessage(t, "*");
          };
        }
        return window.postMessage && window.addEventListener
          ? new n()
          : undefined;
      })();
      H5P.semiFullScreen = function (n, t, i, r) {
        H5P.fullScreen(n, t, i, r, !0);
      };
      H5P.fullScreen = function (n, t, i, r, u) {
        var b, e, c, o, k, a, v, y, s, f, l, h, p, tt, w, it, rt;
        if (H5P.exitFullScreen === undefined) {
          if (H5P.isFramed && H5P.externalEmbed === !1) {
            window.parent.H5P.fullScreen(n, t, i, H5P.$body.get(), u);
            H5P.isFullscreen = !0;
            H5P.exitFullScreen = function () {
              window.parent.H5P.exitFullScreen();
            };
            H5P.on(t, "exitFullScreen", function () {
              H5P.isFullscreen = !1;
              H5P.exitFullScreen = undefined;
            });
            return;
          }
          b = n;
          r === undefined
            ? (o = H5P.$body)
            : ((o = H5P.jQuery(r)),
              (e = o.add(n.get())),
              (k = "#h5p-iframe-" + n.parent().data("content-id")),
              (c = H5P.jQuery(k)),
              (n = c.parent()));
          e = n.add(H5P.$body).add(e);
          var d = function (n) {
              e.addClass(n);
              c !== undefined && c.css("height", "");
            },
            g = function () {
              H5P.trigger(t, "resize");
              H5P.trigger(t, "focus");
              H5P.trigger(t, "enterFullScreen");
            },
            nt = function (n) {
              H5P.isFullscreen = !1;
              e.removeClass(n);
              H5P.trigger(t, "resize");
              H5P.trigger(t, "focus");
              H5P.exitFullScreen = undefined;
              i !== undefined && i();
              H5P.trigger(t, "exitFullScreen");
            };
          if (
            ((H5P.isFullscreen = !0),
            H5P.fullScreenBrowserPrefix === undefined || u === !0)
          ) {
            if (H5P.isFramed) return;
            for (
              d("h5p-semi-fullscreen"),
                a = H5P.jQuery(
                  '<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' +
                    H5P.t("disableFullscreen") +
                    '" aria-label="' +
                    H5P.t("disableFullscreen") +
                    '"><\/div>'
                ).appendTo(b.find(".h5p-content-controls")),
                y = H5P.exitFullScreen =
                  function () {
                    s ? (f.content = s) : p.removeChild(f);
                    a.remove();
                    o.unbind("keyup", v);
                    nt("h5p-semi-fullscreen");
                  },
                v = function (n) {
                  n.keyCode === 27 && y();
                },
                a.click(y),
                o.keyup(v),
                l = document.getElementsByTagName("meta"),
                h = 0;
              h < l.length;
              h++
            )
              if (l[h].name === "viewport") {
                f = l[h];
                s = f.content;
                break;
              }
            s || ((f = document.createElement("meta")), (f.name = "viewport"));
            f.content =
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
            s ||
              ((p = document.getElementsByTagName("head")[0]),
              p.appendChild(f));
            g();
          } else
            d("h5p-fullscreen"),
              (w =
                H5P.fullScreenBrowserPrefix === "ms"
                  ? "MSFullscreenChange"
                  : H5P.fullScreenBrowserPrefix + "fullscreenchange"),
              document.addEventListener(w, function () {
                if (tt === undefined) {
                  tt = !1;
                  g();
                  return;
                }
                nt("h5p-fullscreen");
                document.removeEventListener(w, arguments.callee, !1);
              }),
              H5P.fullScreenBrowserPrefix === ""
                ? n[0].requestFullScreen()
                : ((it =
                    H5P.fullScreenBrowserPrefix === "ms"
                      ? "msRequestFullscreen"
                      : H5P.fullScreenBrowserPrefix + "RequestFullScreen"),
                  (rt =
                    H5P.fullScreenBrowserPrefix === "webkit" &&
                    H5P.safariBrowser === 0
                      ? Element.ALLOW_KEYBOARD_INPUT
                      : undefined),
                  n[0][it](rt)),
              (H5P.exitFullScreen = function () {
                H5P.fullScreenBrowserPrefix === ""
                  ? document.exitFullscreen()
                  : H5P.fullScreenBrowserPrefix === "moz"
                  ? document.mozCancelFullScreen()
                  : document[H5P.fullScreenBrowserPrefix + "ExitFullscreen"]();
              });
        }
      };
      H5P.getPath = function (n, t) {
        var r, i, u;
        if (
          n.indexOf("data:") === 0 ||
          ((r = function (n) {
            return n.match(/^[a-z0-9]+:\/\//i);
          }),
          r(n))
        )
          return n;
        if (((u = n.substr(-4, 4) === "#tmp"), t === undefined || u))
          if (window.H5PEditor !== undefined) i = H5PEditor.filesPath;
          else return;
        else
          H5PIntegration.contents !== undefined &&
            H5PIntegration.contents["cid-" + t] &&
            (i = H5PIntegration.contents["cid-" + t].contentUrl),
            i || (i = H5PIntegration.url + "/content/" + t);
        return !r(i), i + "/" + n;
      };
      H5P.getContentPath = function (n) {
        return H5PIntegration.url + "/content/" + n;
      };
      H5P.classFromName = function (n) {
        var t = n.split(".");
        return this[t[t.length - 1]];
      };
      H5P.newRunnable = function (n, t, i, r, u) {
        var o, s, h, e, c, l, f;
        try {
          o = n.library.split(" ", 2);
          h = o[0];
          s = o[1].split(".", 2);
        } catch (a) {
          return H5P.error("Invalid library string: " + n.library);
        }
        if (n.params instanceof Object != !0 || n.params instanceof Array == !0)
          return (
            H5P.error("Invalid library params for: " + n.library),
            H5P.error(n.params)
          );
        try {
          for (o = o[0].split("."), e = window, c = 0; c < o.length; c++)
            e = e[o[c]];
          if (typeof e != "function") throw null;
        } catch (a) {
          return H5P.error("Unable to find constructor for: " + n.library);
        }
        return (
          u === undefined && (u = {}),
          n.subContentId && (u.subContentId = n.subContentId),
          n.userDatas &&
            n.userDatas.state &&
            H5PIntegration.saveFreq &&
            (u.previousState = n.userDatas.state),
          n.metadata && (u.metadata = n.metadata),
          (l = u.standalone || !1),
          (e.prototype = H5P.jQuery.extend(
            {},
            H5P.ContentType(l).prototype,
            e.prototype
          )),
          (f =
            H5P.jQuery.inArray(n.library, [
              "H5P.CoursePresentation 1.0",
              "H5P.CoursePresentation 1.1",
              "H5P.CoursePresentation 1.2",
              "H5P.CoursePresentation 1.3",
            ]) > -1
              ? new e(n.params, t)
              : new e(n.params, t, u)),
          f.$ === undefined && (f.$ = H5P.jQuery(f)),
          f.contentId === undefined && (f.contentId = t),
          f.subContentId === undefined &&
            n.subContentId &&
            (f.subContentId = n.subContentId),
          f.parent === undefined && u && u.parent && (f.parent = u.parent),
          f.libraryInfo === undefined &&
            (f.libraryInfo = {
              versionedName: n.library,
              versionedNameNoSpaces: h + "-" + s[0] + "." + s[1],
              machineName: h,
              majorVersion: s[0],
              minorVersion: s[1],
            }),
          i !== undefined &&
            (i.toggleClass("h5p-standalone", l),
            f.attach(i),
            H5P.trigger(
              f,
              "domChanged",
              { $target: i, library: h, key: "newLibrary" },
              { bubbles: !0, external: !0 }
            ),
            (r !== undefined && r) || H5P.trigger(f, "resize")),
          f
        );
      };
      H5P.error = function (n) {
        window.console !== undefined &&
          console.error !== undefined &&
          console.error(n.stack ? n.stack : n);
      };
      H5P.t = function (n, t, i) {
        var r, u;
        if (
          (i === undefined && (i = "H5P"), H5PIntegration.l10n[i] === undefined)
        )
          return '[Missing translation namespace "' + i + '"]';
        if (H5PIntegration.l10n[i][n] === undefined)
          return '[Missing translation "' + n + '" in "' + i + '"]';
        if (((r = H5PIntegration.l10n[i][n]), t !== undefined))
          for (u in t) r = r.replace(u, t[u]);
        return r;
      };
      H5P.Dialog = function (n, t, i, r) {
        var u = this,
          f = H5P.jQuery(
            '<div class="h5p-popup-dialog h5p-' +
              n +
              '-dialog">                              <div class="h5p-inner">                                <h2>' +
              t +
              '<\/h2>                                <div class="h5p-scroll-content">' +
              i +
              '<\/div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' +
              H5P.t("close") +
              '" title="' +
              H5P.t("close") +
              '"><\/div>                              <\/div>                            <\/div>'
          )
            .insertAfter(r)
            .click(function () {
              u.close();
            })
            .children(".h5p-inner")
            .click(function () {
              return !1;
            })
            .find(".h5p-close")
            .click(function () {
              u.close();
            })
            .end()
            .find("a")
            .click(function (n) {
              n.stopPropagation();
            })
            .end()
            .end();
        u.open = function (n) {
          n && f.css("height", "100%");
          setTimeout(function () {
            f.addClass("h5p-open");
            H5P.jQuery(u).trigger("dialog-opened", [f]);
          }, 1);
        };
        u.close = function () {
          f.removeClass("h5p-open");
          setTimeout(function () {
            f.remove();
            H5P.jQuery(u).trigger("dialog-closed", [f]);
          }, 200);
        };
      };
      H5P.getCopyrights = function (n, t, i, r) {
        var u, f;
        if (n.getCopyrights !== undefined)
          try {
            u = n.getCopyrights();
          } catch (e) {}
        return (
          u === undefined &&
            ((u = new H5P.ContentCopyrights()), H5P.findCopyrights(u, t, i)),
          (f = H5P.buildMetadataCopyrights(r, n.libraryInfo.machineName)),
          f !== undefined && u.addMediaInFront(f),
          u !== undefined && (u = u.toString()),
          u
        );
      };
      H5P.findCopyrights = function (n, t, i, r) {
        function s(t, i, r) {
          if (t.metadata) {
            const u = H5P.buildMetadataCopyrights(t.metadata, i);
            if (u !== undefined) {
              if (
                t.params &&
                t.params.contentName === "Image" &&
                t.params.file
              ) {
                const n = t.params.file.path,
                  i = t.params.file.width,
                  f = t.params.file.height;
                u.setThumbnail(new H5P.Thumbnail(H5P.getPath(n, r), i, f));
              }
              n.addMedia(u);
            }
          }
        }
        var f, e, u, o;
        r && ((r.params = t), s(r, r.machineName, i));
        for (e in t)
          if (t.hasOwnProperty(e)) {
            if (e === "overrideSettings") {
              console.warn(
                "The semantics field 'overrideSettings' is DEPRECATED and should not be used."
              );
              console.warn(t);
              continue;
            }
            u = t[e];
            u && u.library && typeof u.library == "string"
              ? (f = u.library.split(" ")[0])
              : u &&
                u.library &&
                typeof u.library == "object" &&
                (f =
                  u.library.library && typeof u.library.library == "string"
                    ? u.library.library.split(" ")[0]
                    : f);
            u instanceof Array
              ? H5P.findCopyrights(n, u, i)
              : u instanceof Object &&
                (s(u, f, i),
                u.copyright === undefined ||
                u.copyright.license === undefined ||
                u.path === undefined ||
                u.mime === undefined
                  ? H5P.findCopyrights(n, u, i)
                  : ((o = new H5P.MediaCopyright(u.copyright)),
                    u.width !== undefined &&
                      u.height !== undefined &&
                      o.setThumbnail(
                        new H5P.Thumbnail(
                          H5P.getPath(u.path, i),
                          u.width,
                          u.height
                        )
                      ),
                    n.addMedia(o)));
          }
      };
      H5P.buildMetadataCopyrights = function (n) {
        if (n && n.license !== undefined && n.license !== "U") {
          var t = {
            contentType: n.contentType,
            title: n.title,
            author:
              n.authors && n.authors.length > 0
                ? n.authors
                    .map(function (n) {
                      return n.role ? n.name + " (" + n.role + ")" : n.name;
                    })
                    .join(", ")
                : undefined,
            source: n.source,
            year: n.yearFrom
              ? n.yearFrom + (n.yearTo ? "-" + n.yearTo : "")
              : undefined,
            license: n.license,
            version: n.licenseVersion,
            licenseExtras: n.licenseExtras,
            changes:
              n.changes && n.changes.length > 0
                ? n.changes
                    .map(function (n) {
                      return (
                        n.log +
                        (n.author ? ", " + n.author : "") +
                        (n.date ? ", " + n.date : "")
                      );
                    })
                    .join(" / ")
                : undefined,
          };
          return new H5P.MediaCopyright(t);
        }
      };
      H5P.openReuseDialog = function (n, t, i, r, u) {
        let f = "";
        t.displayOptions.export &&
          (f +=
            '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file<\/div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.<\/div><\/button>');
        t.displayOptions.export &&
          t.displayOptions.copy &&
          (f +=
            '<div class="h5p-horizontal-line-text"><span>or<\/span><\/div>');
        t.displayOptions.copy &&
          (f +=
            '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content<\/div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.<\/div><\/button>');
        const e = new H5P.Dialog("reuse", H5P.t("reuseContent"), f, n);
        H5P.jQuery(e)
          .on("dialog-opened", function (n, f) {
            H5P.jQuery(
              '<a href="https://h5p.org/node/442225" target="_blank">More Info<\/a>'
            )
              .click(function (n) {
                n.stopPropagation();
              })
              .appendTo(f.find("h2"));
            f.find(".h5p-download-button").click(function () {
              window.location.href = t.exportUrl;
              r.triggerXAPI("downloaded");
              e.close();
            });
            f.find(".h5p-copy-button").click(function () {
              const n = new H5P.ClipboardItem(i);
              n.contentId = u;
              H5P.setClipboard(n);
              r.triggerXAPI("copied");
              e.close();
              H5P.attachToastTo(
                H5P.jQuery(".h5p-content:first")[0],
                H5P.t("contentCopied"),
                {
                  position: {
                    horizontal: "centered",
                    vertical: "centered",
                    noOverflowX: !0,
                  },
                }
              );
            });
            H5P.trigger(r, "resize");
          })
          .on("dialog-closed", function () {
            H5P.trigger(r, "resize");
          });
        e.open();
      };
      H5P.openEmbedDialog = function (n, t, i, r, u) {
        var e = t + i,
          f = new H5P.Dialog(
            "embed",
            H5P.t("embed"),
            '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"><\/textarea>' +
              H5P.t("size") +
              ': <input type="text" value="' +
              Math.ceil(r.width) +
              '" class="h5p-embed-size"/> × <input type="text" value="' +
              Math.ceil(r.height) +
              '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' +
              H5P.t("showAdvanced") +
              '<\/div><div class="h5p-expander-content"><p>' +
              H5P.t("advancedHelp") +
              '<\/p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' +
              i +
              "<\/textarea><\/div>",
            n
          );
        H5P.jQuery(f)
          .on("dialog-opened", function (n, t) {
            var a = t.find(".h5p-inner"),
              o = a.find(".h5p-scroll-content"),
              v = o.outerHeight() - o.innerHeight(),
              s = function () {
                H5P.trigger(u, "resize");
              },
              h = t.find(".h5p-embed-size:eq(0)"),
              c = t.find(".h5p-embed-size:eq(1)"),
              l = function (n, t) {
                var i = parseFloat(n.val());
                return isNaN(i) ? t : Math.ceil(i);
              },
              i = function () {
                t.find(".h5p-embed-code-container:first").val(
                  e.replace(":w", l(h, r.width)).replace(":h", l(c, r.height))
                );
              },
              f;
            h.change(i);
            c.change(i);
            i();
            t.find(".h5p-embed-code-container").each(function () {
              H5P.jQuery(this)
                .css("height", this.scrollHeight + "px")
                .focus(function () {
                  H5P.jQuery(this).select();
                });
            });
            t.find(".h5p-embed-code-container").eq(0).select();
            s();
            f = function () {
              var n = H5P.jQuery(this),
                i = n.next();
              i.is(":visible")
                ? (n.removeClass("h5p-open").text(H5P.t("showAdvanced")),
                  i.hide())
                : (n.addClass("h5p-open").text(H5P.t("hideAdvanced")),
                  i.show());
              t.find(".h5p-embed-code-container").each(function () {
                H5P.jQuery(this).css("height", this.scrollHeight + "px");
              });
              s();
            };
            t.find(".h5p-expander")
              .click(f)
              .keypress(function (n) {
                n.keyCode === 32 && f.apply(this);
              });
          })
          .on("dialog-closed", function () {
            H5P.trigger(u, "resize");
          });
        f.open();
      };
      H5P.attachToastTo = function (n, t, i) {
        if (n !== undefined && t !== undefined) {
          const s = function (n) {
              function r(n, t) {
                t = t || [];
                var i = n.parentNode;
                return i ? r(i, t.concat(i)) : t;
              }
              var t = (n.composedPath && n.composedPath()) || n.path,
                i = n.target;
              return t != null
                ? t.indexOf(window) < 0
                  ? t.concat(window)
                  : t
                : i === window
                ? [window]
                : [i].concat(r(i), window);
            },
            u = function (t) {
              var i = s(t);
              i.indexOf(n) === -1 && (clearTimeout(c), f());
            },
            f = function () {
              document.removeEventListener("click", u);
              r.parentNode && r.parentNode.removeChild(r);
            },
            h = function (n, t, i) {
              i = i || {};
              i.offsetHorizontal = i.offsetHorizontal || 0;
              i.offsetVertical = i.offsetVertical || 0;
              const e = t.getBoundingClientRect(),
                r = n.getBoundingClientRect();
              let u = 0,
                o = 0;
              switch (i.horizontal) {
                case "before":
                  u = r.left - e.width - i.offsetHorizontal;
                  break;
                case "after":
                  u = r.left + r.width + i.offsetHorizontal;
                  break;
                case "left":
                  u = r.left + i.offsetHorizontal;
                  break;
                case "right":
                  u = r.left + r.width - e.width - i.offsetHorizontal;
                  break;
                case "centered":
                  u = r.left + r.width / 2 - e.width / 2 + i.offsetHorizontal;
                  break;
                default:
                  u = r.left + r.width / 2 - e.width / 2 + i.offsetHorizontal;
              }
              switch (i.vertical) {
                case "above":
                  o = r.top - e.height - i.offsetVertical;
                  break;
                case "below":
                  o = r.top + r.height + i.offsetVertical;
                  break;
                case "top":
                  o = r.top + i.offsetVertical;
                  break;
                case "bottom":
                  o = r.top + r.height - e.height - i.offsetVertical;
                  break;
                case "centered":
                  o = r.top + r.height / 2 - e.height / 2 + i.offsetVertical;
                  break;
                default:
                  o = r.top + r.height + i.offsetVertical;
              }
              const s = document.body,
                f = s.getBoundingClientRect();
              return (
                (i.noOverflowLeft || i.noOverflowX) && u < f.x && (u = f.x),
                (i.noOverflowRight || i.noOverflowX) &&
                  u + e.width > f.x + f.width &&
                  (u = f.x + f.width - e.width),
                (i.noOverflowTop || i.noOverflowY) && o < f.y && (o = f.y),
                (i.noOverflowBottom || i.noOverflowY) &&
                  o + e.height > f.y + f.height &&
                  (u = f.y + f.height - e.height),
                { left: u, top: o }
              );
            };
          i = i || {};
          i.style = i.style || "h5p-toast";
          i.duration = i.duration || 3e3;
          const r = document.createElement("div");
          r.setAttribute("id", i.style);
          r.classList.add("h5p-toast-disabled");
          r.classList.add(i.style);
          const e = document.createElement("span");
          e.innerHTML = t;
          r.appendChild(e);
          document.body.appendChild(r);
          const o = h(n, r, i.position);
          r.style.left = Math.round(o.left) + "px";
          r.style.top = Math.round(o.top) + "px";
          r.classList.remove("h5p-toast-disabled");
          const c = setTimeout(f, i.duration);
          document.addEventListener("click", u);
        }
      };
      H5P.ContentCopyrights = function () {
        var t,
          n = [],
          i = [];
        this.setLabel = function (n) {
          t = n;
        };
        this.addMedia = function (t) {
          t !== undefined && n.push(t);
        };
        this.addMediaInFront = function (t) {
          t !== undefined && n.unshift(t);
        };
        this.addContent = function (n) {
          n !== undefined && i.push(n);
        };
        this.toString = function () {
          for (var r = "", u = 0; u < n.length; u++) r += n[u];
          for (u = 0; u < i.length; u++) r += i[u];
          return (
            r !== "" &&
              (t !== undefined && (r = "<h3>" + t + "<\/h3>" + r),
              (r = '<div class="h5p-content-copyrights">' + r + "<\/div>")),
            r
          );
        };
      };
      H5P.MediaCopyright = function (n, t, i, r) {
        var h,
          e = new H5P.DefinitionList(),
          c = function (n) {
            return t === undefined || t[n] === undefined ? H5P.t(n) : t[n];
          },
          l = function (n, t) {
            var i = H5P.copyrightLicenses[n],
              r = "",
              u,
              e,
              f;
            return (
              (n === "PD" && t) ||
                (r += i.hasOwnProperty("label") ? i.label : i),
              i.versions &&
                (!i.versions.default ||
                  (t && i.versions[t]) ||
                  (t = i.versions.default),
                t && i.versions[t] && (u = i.versions[t])),
              u &&
                (r && (r += " "),
                (r += u.hasOwnProperty("label") ? u.label : u)),
              i.hasOwnProperty("link")
                ? (e = i.link.replace(
                    ":version",
                    i.linkVersions ? i.linkVersions[t] : t
                  ))
                : u && i.hasOwnProperty("link") && (e = u.link),
              e && (r = '<a href="' + e + '" target="_blank">' + r + "<\/a>"),
              (f = ""),
              n !== "PD" && n !== "C" && (f += n),
              t &&
                t !== "CC0 1.0" &&
                (f && n !== "GNU GPL" && (f += " "), (f += t)),
              f && (r += " (" + f + ")"),
              n === "C" && (r += " &copy;"),
              r
            );
          },
          o,
          s,
          u,
          f;
        if (n !== undefined) {
          for (o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
          for (
            i === undefined &&
              (i = [
                "contentType",
                "title",
                "license",
                "author",
                "year",
                "source",
                "licenseExtras",
                "changes",
              ]),
              s = 0;
            s < i.length;
            s++
          )
            (u = i[s]),
              n[u] !== undefined &&
                n[u] !== "" &&
                ((f = n[u]),
                u === "license" && (f = l(n.license, n.version)),
                u === "source" &&
                  (f = f
                    ? '<a href="' + f + '" target="_blank">' + f + "<\/a>"
                    : undefined),
                e.add(new H5P.Field(c(u), f)));
        }
        this.setThumbnail = function (n) {
          h = n;
        };
        this.undisclosed = function () {
          if (e.size() === 1) {
            var n = e.get(0);
            if (n.getLabel() === c("license") && n.getValue() === l("U"))
              return !0;
          }
          return !1;
        };
        this.toString = function () {
          var n = "";
          return this.undisclosed()
            ? n
            : (h !== undefined && (n += h),
              (n += e),
              n !== "" &&
                (n = '<div class="h5p-media-copyright">' + n + "<\/div>"),
              n);
        };
      };
      H5P.Thumbnail = function (n, t, i) {
        var r,
          u = 100;
        t !== undefined && (r = Math.round(u * (t / i)));
        this.toString = function () {
          return (
            '<img src="' +
            n +
            '" alt="' +
            H5P.t("thumbnail") +
            '" class="h5p-thumbnail" height="' +
            u +
            '"' +
            (r === undefined ? "" : ' width="' + r + '"') +
            "/>"
          );
        };
      };
      H5P.Field = function (n, t) {
        this.getLabel = function () {
          return n;
        };
        this.getValue = function () {
          return t;
        };
      };
      H5P.DefinitionList = function () {
        var n = [];
        this.add = function (t) {
          n.push(t);
        };
        this.size = function () {
          return n.length;
        };
        this.get = function (t) {
          return n[t];
        };
        this.toString = function () {
          for (var r, t = "", i = 0; i < n.length; i++)
            (r = n[i]),
              (t +=
                "<dt>" + r.getLabel() + "<\/dt><dd>" + r.getValue() + "<\/dd>");
          return t === ""
            ? t
            : '<dl class="h5p-definition-list">' + t + "<\/dl>";
        };
      };
      H5P.Coords = function (n, t, i, r) {
        return this instanceof H5P.Coords
          ? ((this.x = 0),
            (this.y = 0),
            (this.w = 1),
            (this.h = 1),
            typeof n == "object"
              ? ((this.x = n.x), (this.y = n.y), (this.w = n.w), (this.h = n.h))
              : (n !== undefined && (this.x = n),
                t !== undefined && (this.y = t),
                i !== undefined && (this.w = i),
                r !== undefined && (this.h = r)),
            this)
          : new H5P.Coords(n, t, i, r);
      };
      H5P.libraryFromString = function (n) {
        var t = /(.+)\s(\d+)\.(\d+)$/g.exec(n);
        return t !== null
          ? {
              machineName: t[1],
              majorVersion: parseInt(t[2]),
              minorVersion: parseInt(t[3]),
            }
          : !1;
      };
      H5P.getLibraryPath = function (n) {
        return H5PIntegration.urlLibraries !== undefined
          ? H5PIntegration.urlLibraries + "/" + n
          : H5PIntegration.url + "/libraries/" + n;
      };
      H5P.cloneObject = function (n, t) {
        var r = n instanceof Array ? [] : {};
        for (var i in n)
          n.hasOwnProperty(i) &&
            (r[i] =
              t !== undefined && t && typeof n[i] == "object"
                ? H5P.cloneObject(n[i], t)
                : n[i]);
        return r;
      };
      H5P.trim = function (n) {
        return n.replace(/^\s+|\s+$/g, "");
      };
      H5P.jsLoaded = function (n) {
        return (
          (H5PIntegration.loadedJs = H5PIntegration.loadedJs || []),
          H5P.jQuery.inArray(n, H5PIntegration.loadedJs) !== -1
        );
      };
      H5P.cssLoaded = function (n) {
        return (
          (H5PIntegration.loadedCss = H5PIntegration.loadedCss || []),
          H5P.jQuery.inArray(n, H5PIntegration.loadedCss) !== -1
        );
      };
      H5P.shuffleArray = function (n) {
        if (n instanceof Array) {
          var t = n.length,
            i,
            r,
            u;
          if (t === 0) return !1;
          while (--t)
            (i = Math.floor(Math.random() * (t + 1))),
              (r = n[t]),
              (u = n[i]),
              (n[t] = u),
              (n[i] = r);
          return n;
        }
      };
      H5P.setFinished = function (n, t, i, r) {
        var f = typeof t == "number" || t instanceof Number,
          u;
        f &&
          H5PIntegration.postUserStatistics === !0 &&
          ((u = function (n) {
            return Math.round(n.getTime() / 1e3);
          }),
          H5P.jQuery.post(H5PIntegration.ajax.setFinished, {
            contentId: n,
            score: t,
            maxScore: i,
            opened: u(H5P.opened[n]),
            finished: u(new Date()),
            time: r,
          }));
      };
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (n) {
          for (var t = 0; t < this.length; t++) if (this[t] === n) return t;
          return -1;
        });
      String.prototype.trim === undefined &&
        (String.prototype.trim = function () {
          return H5P.trim(this);
        });
      H5P.trigger = function (n, t, i, r) {
        n.trigger !== undefined
          ? n.trigger(t, i, r)
          : n.$ !== undefined && n.$.trigger !== undefined && n.$.trigger(t);
      };
      H5P.on = function (n, t, i) {
        if (n.on !== undefined) n.on(t, i);
        else if (n.$ !== undefined && n.$.on !== undefined) n.$.on(t, i);
      };
      H5P.createUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (n) {
            var t = (Math.random() * 16) | 0,
              i = n === "x" ? t : (t & 3) | 8;
            return i.toString(16);
          }
        );
      };
      (H5P.createTitle = function (n, t) {
        if (!n) return "";
        t === undefined && (t = 60);
        var i = H5P.jQuery("<div><\/div>")
          .text(n.replace(/(<([^>]+)>)/gi, ""))
          .text();
        return i.length > t && (i = i.substr(0, t - 3) + "..."), i;
      }),
        (function (n) {
          function t(t, i, r, u, f, e, o, s) {
            if (H5PIntegration.user === undefined) {
              u("Not signed in.");
              return;
            }
            var h = {
              url: H5PIntegration.ajax.contentUserData
                .replace(":contentId", t)
                .replace(":dataType", i)
                .replace(":subContentId", r ? r : 0),
              dataType: "json",
              async: s === undefined ? !0 : s,
            };
            f !== undefined
              ? ((h.type = "POST"),
                (h.data = {
                  data: f === null ? 0 : f,
                  preload: e ? 1 : 0,
                  invalidate: o ? 1 : 0,
                }))
              : (h.type = "GET");
            u !== undefined &&
              ((h.error = function (n, t) {
                u(t);
              }),
              (h.success = function (n) {
                if (!n.success) {
                  u(n.message);
                  return;
                }
                if (n.data === !1 || n.data === undefined) {
                  u();
                  return;
                }
                u(undefined, n.data);
              }));
            n.ajax(h);
          }
          H5P.getUserData = function (n, i, r, u) {
            u || (u = 0);
            H5PIntegration.contents = H5PIntegration.contents || {};
            var e = H5PIntegration.contents["cid-" + n] || {},
              f = e.contentUserData;
            if (f && f[u] && f[u][i] !== undefined) {
              if (f[u][i] === "RESET") {
                r(undefined, null);
                return;
              }
              try {
                r(undefined, JSON.parse(f[u][i]));
              } catch (o) {
                r(o);
              }
            } else
              t(n, i, u, function (n, t) {
                if (n || t === undefined) {
                  r(n, t);
                  return;
                }
                e.contentUserData === undefined && (e.contentUserData = f = {});
                f[u] === undefined && (f[u] = {});
                f[u][i] = t;
                try {
                  r(undefined, JSON.parse(t));
                } catch (o) {
                  r(o);
                }
              });
          };
          H5P.getCrossOrigin = function (n) {
            var t = H5PIntegration.crossorigin,
              i = H5PIntegration.crossoriginRegex;
            return t && i && n.match(i) ? t : null;
          };
          H5P.setUserData = function (n, i, r, u) {
            var f = H5P.jQuery.extend(
                !0,
                {},
                {
                  subContentId: 0,
                  preloaded: !0,
                  deleteOnChange: !1,
                  async: !0,
                },
                u
              ),
              e,
              o;
            try {
              r = JSON.stringify(r);
            } catch (s) {
              f.errorCallback && f.errorCallback(s);
              return;
            }
            ((e = H5PIntegration.contents["cid-" + n]),
            e === undefined && (e = H5PIntegration.contents["cid-" + n] = {}),
            e.contentUserData || (e.contentUserData = {}),
            (o = e.contentUserData),
            o[f.subContentId] === undefined && (o[f.subContentId] = {}),
            r !== o[f.subContentId][i]) &&
              ((o[f.subContentId][i] = r),
              t(
                n,
                i,
                f.subContentId,
                function (n) {
                  f.errorCallback && n && f.errorCallback(n);
                },
                r,
                f.preloaded,
                f.deleteOnChange,
                f.async
              ));
          };
          H5P.deleteUserData = function (n, i, r) {
            r || (r = 0);
            var u = H5PIntegration.contents["cid-" + n].contentUserData;
            u && u[r] && u[r][i] && delete u[r][i];
            t(n, i, r, undefined, null);
          };
          H5P.getContentForInstance = function (n) {
            var t = "cid-" + n,
              i =
                H5PIntegration &&
                H5PIntegration.contents &&
                H5PIntegration.contents[t];
            return i ? H5PIntegration.contents[t] : undefined;
          };
          H5P.ClipboardItem = function (n, t, i) {
            var r = this,
              u = function () {
                if (r.generic) {
                  var n = r.specific[r.generic];
                  n.params.file &&
                    n.params.file.width &&
                    n.params.file.height &&
                    ((r.width = 20),
                    (r.height =
                      (n.params.file.height / n.params.file.width) * r.width));
                }
              };
            t || ((t = "action"), (n = { action: n }));
            r.specific = n;
            t && n[t] && (r.generic = t);
            i && (r.from = i);
            window.H5PEditor &&
              H5PEditor.contentId &&
              (r.contentId = H5PEditor.contentId);
            r.specific.width || r.specific.height || u();
          };
          H5P.clipboardify = function (n) {
            n instanceof H5P.ClipboardItem || (n = new H5P.ClipboardItem(n));
            H5P.setClipboard(n);
          };
          H5P.getClipboard = function () {
            return r();
          };
          H5P.setClipboard = function (n) {
            localStorage.setItem("h5pClipboard", JSON.stringify(n));
            H5P.externalDispatcher.trigger("datainclipboard", { reset: !1 });
          };
          H5P.getLibraryConfig = function (n) {
            var t =
              H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[n];
            return t ? H5PIntegration.libraryConfig[n] : {};
          };
          var r = function () {
              var n = localStorage.getItem("h5pClipboard");
              if (n) {
                try {
                  n = JSON.parse(n);
                } catch (t) {
                  console.error("Unable to parse JSON from clipboard.", t);
                  return;
                }
                return (
                  i(n.specific, function (t) {
                    var i = t.substr(-4, 4) === "#tmp";
                    return !i && n.contentId
                      ? H5PEditor.contentId
                        ? "../" + n.contentId + "/" + t
                        : (H5PEditor.contentRelUrl
                            ? H5PEditor.contentRelUrl
                            : "../content/") +
                          n.contentId +
                          "/" +
                          t
                      : t;
                  }),
                  n.generic && (n.generic = n.specific[n.generic]),
                  n
                );
              }
            },
            i = function (n, t) {
              var u, r;
              for (u in n)
                n.hasOwnProperty(u) &&
                  n[u] instanceof Object &&
                  ((r = n[u]),
                  r.path !== undefined && r.mime !== undefined
                    ? (r.path = t(r.path))
                    : (r.library !== undefined &&
                        r.subContentId !== undefined &&
                        delete r.subContentId,
                      i(r, t)));
            };
          n(document).ready(function () {
            var n, t, i;
            if (
              (window.addEventListener("storage", function (n) {
                n.key === "h5pClipboard" &&
                  H5P.externalDispatcher.trigger("datainclipboard", {
                    reset: n.newValue === null,
                  });
              }),
              (n = {
                default: "4.0",
                "4.0": H5P.t("licenseCC40"),
                "3.0": H5P.t("licenseCC30"),
                2.5: H5P.t("licenseCC25"),
                "2.0": H5P.t("licenseCC20"),
                "1.0": H5P.t("licenseCC10"),
              }),
              (H5P.copyrightLicenses = {
                U: H5P.t("licenseU"),
                "CC BY": {
                  label: H5P.t("licenseCCBY"),
                  link: "http://creativecommons.org/licenses/by/:version",
                  versions: n,
                },
                "CC BY-SA": {
                  label: H5P.t("licenseCCBYSA"),
                  link: "http://creativecommons.org/licenses/by-sa/:version",
                  versions: n,
                },
                "CC BY-ND": {
                  label: H5P.t("licenseCCBYND"),
                  link: "http://creativecommons.org/licenses/by-nd/:version",
                  versions: n,
                },
                "CC BY-NC": {
                  label: H5P.t("licenseCCBYNC"),
                  link: "http://creativecommons.org/licenses/by-nc/:version",
                  versions: n,
                },
                "CC BY-NC-SA": {
                  label: H5P.t("licenseCCBYNCSA"),
                  link: "http://creativecommons.org/licenses/by-nc-sa/:version",
                  versions: n,
                },
                "CC BY-NC-ND": {
                  label: H5P.t("licenseCCBYNCND"),
                  link: "http://creativecommons.org/licenses/by-nc-nd/:version",
                  versions: n,
                },
                "CC0 1.0": {
                  label: H5P.t("licenseCC010"),
                  link: "https://creativecommons.org/publicdomain/zero/1.0/",
                },
                "GNU GPL": {
                  label: H5P.t("licenseGPL"),
                  link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
                  linkVersions: { v3: "3.0", v2: "2.0", v1: "1.0" },
                  versions: {
                    default: "v3",
                    v3: H5P.t("licenseV3"),
                    v2: H5P.t("licenseV2"),
                    v1: H5P.t("licenseV1"),
                  },
                },
                PD: {
                  label: H5P.t("licensePD"),
                  versions: {
                    "CC0 1.0": {
                      label: H5P.t("licenseCC010"),
                      link: "https://creativecommons.org/publicdomain/zero/1.0/",
                    },
                    "CC PDM": {
                      label: H5P.t("licensePDM"),
                      link: "https://creativecommons.org/publicdomain/mark/1.0/",
                    },
                  },
                },
                "ODC PDDL":
                  '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence<\/a>',
                "CC PDM": {
                  label: H5P.t("licensePDM"),
                  link: "https://creativecommons.org/publicdomain/mark/1.0/",
                },
                C: H5P.t("licenseC"),
              }),
              H5P.isFramed && H5P.externalEmbed === !1)
            )
              H5P.externalDispatcher.on("*", function (n) {
                window.parent.H5P.externalDispatcher.trigger.call(this, n);
              });
            if (
              (H5P.preventInit || H5P.init(document.body),
              H5PIntegration.saveFreq !== !1)
            ) {
              t = 0;
              i = function () {
                var u = new Date().getTime(),
                  i,
                  n,
                  r;
                if (u - t > 250)
                  for (t = u, i = 0; i < H5P.instances.length; i++)
                    (n = H5P.instances[i]),
                      (n.getCurrentState instanceof Function ||
                        typeof n.getCurrentState == "function") &&
                        ((r = n.getCurrentState()),
                        r !== undefined &&
                          H5P.setUserData(n.contentId, "state", r, {
                            deleteOnChange: !0,
                            async: !1,
                          }));
              };
              H5P.$window.one("beforeunload unload", function () {
                H5P.$window.off("pagehide beforeunload unload");
                i();
              });
              H5P.$window.on("pagehide", i);
            }
          });
        })(H5P.jQuery);
      H5P = window.H5P = window.H5P || {};
      H5P.Event = function (n, t, i) {
        this.type = n;
        this.data = t;
        var r = !1,
          u = !1,
          f = !1;
        i === undefined && (i = {});
        i.bubbles === !0 && (r = !0);
        i.external === !0 && (u = !0);
        this.preventBubbling = function () {
          r = !1;
        };
        this.getBubbles = function () {
          return r;
        };
        this.scheduleForExternal = function () {
          return u && !f ? ((f = !0), !0) : !1;
        };
      };
      H5P.EventDispatcher = (function () {
        function n() {
          var t = this,
            n = {},
            i;
          this.on = function (i, r, u) {
            if (typeof r != "function")
              throw TypeError("listener must be a function");
            t.trigger("newListener", { type: i, listener: r });
            var f = { listener: r, thisArg: u };
            n[i] ? n[i].push(f) : (n[i] = [f]);
          };
          this.once = function (n, i, r) {
            if (!(i instanceof Function))
              throw TypeError("listener must be a function");
            var u = function (n) {
              t.off(n.type, u);
              i.call(this, n);
            };
            t.on(n, u, r);
          };
          this.off = function (i, r) {
            if (r !== undefined && !(r instanceof Function))
              throw TypeError("listener must be a function");
            if (n[i] !== undefined) {
              if (r === undefined) {
                delete n[i];
                t.trigger("removeListener", i);
                return;
              }
              for (var u = 0; u < n[i].length; u++)
                if (n[i][u].listener === r) {
                  n[i].splice(u, 1);
                  t.trigger("removeListener", i, { listener: r });
                  break;
                }
              n[i].length || delete n[i];
            }
          };
          i = function (t, i) {
            var f, r, u, e;
            if (n[t] !== undefined)
              for (f = n[t].slice(), r = 0; r < f.length; r++)
                (u = f[r]),
                  (e = u.thisArg ? u.thisArg : this),
                  u.listener.call(e, i);
          };
          this.trigger = function (n, r, u) {
            if (n !== undefined) {
              n instanceof String || typeof n == "string"
                ? (n = new H5P.Event(n, r, u))
                : r !== undefined && (n.data = r);
              var f = n.scheduleForExternal();
              i.call(this, n.type, n);
              i.call(this, "*", n);
              n.getBubbles() &&
                t.parent instanceof H5P.EventDispatcher &&
                (t.parent.trigger instanceof Function ||
                  typeof t.parent.trigger == "function") &&
                t.parent.trigger(n);
              f && H5P.externalDispatcher.trigger.call(this, n);
            }
          };
        }
        return n;
      })();
      H5P = window.H5P = window.H5P || {};
      H5P.XAPIEvent = function () {
        H5P.Event.call(
          this,
          "xAPI",
          { statement: {} },
          { bubbles: !0, external: !0 }
        );
      };
      H5P.XAPIEvent.prototype = Object.create(H5P.Event.prototype);
      H5P.XAPIEvent.prototype.constructor = H5P.XAPIEvent;
      H5P.XAPIEvent.prototype.setScoredResult = function (n, t, i, r, u) {
        if (
          ((this.data.statement.result = {}),
          typeof n != "undefined" &&
            (typeof t == "undefined"
              ? (this.data.statement.result.score = { raw: n })
              : ((this.data.statement.result.score = {
                  min: 0,
                  max: t,
                  raw: n,
                }),
                t > 0 &&
                  (this.data.statement.result.score.scaled =
                    Math.round((n / t) * 1e4) / 1e4))),
          (this.data.statement.result.completion =
            typeof r == "undefined"
              ? this.getVerb() === "completed" || this.getVerb() === "answered"
              : r),
          typeof u != "undefined" && (this.data.statement.result.success = u),
          i && i.activityStartTime)
        ) {
          var f = Math.round((Date.now() - i.activityStartTime) / 10) / 100;
          this.data.statement.result.duration = "PT" + f + "S";
        }
      };
      H5P.XAPIEvent.prototype.setVerb = function (n) {
        H5P.jQuery.inArray(n, H5P.XAPIEvent.allowedXAPIVerbs) !== -1
          ? (this.data.statement.verb = {
              id: "http://adlnet.gov/expapi/verbs/" + n,
              display: { "en-US": n },
            })
          : n.id !== undefined && (this.data.statement.verb = n);
      };
      H5P.XAPIEvent.prototype.getVerb = function (n) {
        var t = this.data.statement;
        return "verb" in t ? (n === !0 ? t.verb : t.verb.id.slice(31)) : null;
      };
      H5P.XAPIEvent.prototype.setObject = function (n) {
        if (n.contentId)
          if (
            ((this.data.statement.object = {
              id: this.getContentXAPIId(n),
              objectType: "Activity",
              definition: {
                extensions: {
                  "http://h5p.org/x-api/h5p-local-content-id": n.contentId,
                },
              },
            }),
            n.subContentId)
          )
            (this.data.statement.object.definition.extensions[
              "http://h5p.org/x-api/h5p-subContentId"
            ] = n.subContentId),
              typeof n.getTitle == "function" &&
                (this.data.statement.object.definition.name = {
                  "en-US": n.getTitle(),
                });
          else {
            var t = H5P.getContentForInstance(n.contentId);
            t &&
              t.metadata &&
              t.metadata.title &&
              (this.data.statement.object.definition.name = {
                "en-US": H5P.createTitle(t.metadata.title),
              });
          }
      };
      H5P.XAPIEvent.prototype.setContext = function (n) {
        n.parent &&
          (n.parent.contentId || n.parent.subContentId) &&
          (this.data.statement.context = {
            contextActivities: {
              parent: [
                { id: this.getContentXAPIId(n.parent), objectType: "Activity" },
              ],
            },
          });
        n.libraryInfo &&
          (this.data.statement.context === undefined &&
            (this.data.statement.context = { contextActivities: {} }),
          (this.data.statement.context.contextActivities.category = [
            {
              id:
                "http://h5p.org/libraries/" +
                n.libraryInfo.versionedNameNoSpaces,
              objectType: "Activity",
            },
          ]));
      };
      H5P.XAPIEvent.prototype.setActor = function () {
        if (H5PIntegration.user !== undefined)
          this.data.statement.actor = {
            name: H5PIntegration.user.name,
            mbox: "mailto:" + H5PIntegration.user.mail,
            objectType: "Agent",
          };
        else {
          var n;
          try {
            localStorage.H5PUserUUID
              ? (n = localStorage.H5PUserUUID)
              : ((n = H5P.createUUID()), (localStorage.H5PUserUUID = n));
          } catch (t) {
            n = "not-trackable-" + H5P.createUUID();
          }
          this.data.statement.actor = {
            account: { name: n, homePage: H5PIntegration.siteUrl },
            objectType: "Agent",
          };
        }
      };
      H5P.XAPIEvent.prototype.getMaxScore = function () {
        return this.getVerifiedStatementValue(["result", "score", "max"]);
      };
      H5P.XAPIEvent.prototype.getScore = function () {
        return this.getVerifiedStatementValue(["result", "score", "raw"]);
      };
      H5P.XAPIEvent.prototype.getContentXAPIId = function (n) {
        var t;
        return (
          n.contentId &&
            H5PIntegration &&
            H5PIntegration.contents &&
            H5PIntegration.contents["cid-" + n.contentId] &&
            ((t = H5PIntegration.contents["cid-" + n.contentId].url),
            n.subContentId && (t += "?subContentId=" + n.subContentId)),
          t
        );
      };
      H5P.XAPIEvent.prototype.isFromChild = function () {
        var n = this.getVerifiedStatementValue([
          "context",
          "contextActivities",
          "parent",
          0,
          "id",
        ]);
        return !n || n.indexOf("subContentId") === -1;
      };
      H5P.XAPIEvent.prototype.getVerifiedStatementValue = function (n) {
        for (var t = this.data.statement, i = 0; i < n.length; i++) {
          if (t[n[i]] === undefined) return null;
          t = t[n[i]];
        }
        return t;
      };
      H5P.XAPIEvent.allowedXAPIVerbs = [
        "answered",
        "asked",
        "attempted",
        "attended",
        "commented",
        "completed",
        "exited",
        "experienced",
        "failed",
        "imported",
        "initialized",
        "interacted",
        "launched",
        "mastered",
        "passed",
        "preferred",
        "progressed",
        "registered",
        "responded",
        "resumed",
        "scored",
        "shared",
        "suspended",
        "terminated",
        "voided",
        "downloaded",
        "accessed-embed",
        "accessed-copyright",
      ];
      H5P = window.H5P = window.H5P || {};
      H5P.externalDispatcher = new H5P.EventDispatcher();
      H5P.EventDispatcher.prototype.triggerXAPI = function (n, t) {
        this.trigger(this.createXAPIEventTemplate(n, t));
      };
      H5P.EventDispatcher.prototype.createXAPIEventTemplate = function (n, t) {
        var i = new H5P.XAPIEvent(),
          r;
        if ((i.setActor(), i.setVerb(n), t !== undefined))
          for (r in t) i.data.statement[r] = t[r];
        return (
          "object" in i.data.statement || i.setObject(this),
          "context" in i.data.statement || i.setContext(this),
          i
        );
      };
      H5P.EventDispatcher.prototype.triggerXAPICompleted = function (n, t, i) {
        this.triggerXAPIScored(n, t, "completed", !0, i);
      };
      H5P.EventDispatcher.prototype.triggerXAPIScored = function (
        n,
        t,
        i,
        r,
        u
      ) {
        var f = this.createXAPIEventTemplate(i);
        f.setScoredResult(n, t, this, r, u);
        this.trigger(f);
      };
      H5P.EventDispatcher.prototype.setActivityStarted = function () {
        this.activityStartTime === undefined &&
          (this.contentId !== undefined &&
            H5PIntegration.contents !== undefined &&
            H5PIntegration.contents["cid-" + this.contentId] !== undefined &&
            this.triggerXAPI("attempted"),
          (this.activityStartTime = Date.now()));
      };
      H5P.xAPICompletedListener = function (n) {
        if (
          (n.getVerb() === "completed" || n.getVerb() === "answered") &&
          !n.getVerifiedStatementValue([
            "context",
            "contextActivities",
            "parent",
          ])
        ) {
          var t = n.getScore(),
            i = n.getMaxScore(),
            r = n.getVerifiedStatementValue([
              "object",
              "definition",
              "extensions",
              "http://h5p.org/x-api/h5p-local-content-id",
            ]);
          H5P.setFinished(r, t, i);
        }
      };
      H5P.ContentType = function (n) {
        function t() {}
        return (
          (t.prototype = new H5P.EventDispatcher()),
          (t.prototype.isRoot = function () {
            return n;
          }),
          (t.prototype.getLibraryFilePath = function (n) {
            return (
              H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) +
              "/" +
              n
            );
          }),
          t
        );
      };
      H5P.ConfirmationDialog = (function (n) {
        "use strict";
        function t(t) {
          function tt(n) {
            o.hide();
            o.trigger("confirmed");
            n.preventDefault();
          }
          function h(n) {
            o.hide();
            o.trigger("canceled");
            n.preventDefault();
          }
          function it(n, t) {
            n.focus();
            t.preventDefault();
          }
          var o, w, i, v, y, c, l, a, s, u, e, f, p, g, nt, rt;
          n.call(this);
          o = this;
          H5P.ConfirmationDialog.uniqueId += 1;
          w = H5P.ConfirmationDialog.uniqueId;
          t = t || {};
          t.headerText = t.headerText || H5P.t("confirmDialogHeader");
          t.dialogText = t.dialogText || H5P.t("confirmDialogBody");
          t.cancelText = t.cancelText || H5P.t("cancelLabel");
          t.confirmText = t.confirmText || H5P.t("confirmLabel");
          var b = 32,
            k = 8,
            d = !1,
            r = document.createElement("div");
          r.classList.add(
            "h5p-confirmation-dialog-background",
            "hidden",
            "hiding"
          );
          i = document.createElement("div");
          i.classList.add("h5p-confirmation-dialog-popup", "hidden");
          i.setAttribute("role", "dialog");
          i.setAttribute(
            "aria-labelledby",
            "h5p-confirmation-dialog-dialog-text-" + w
          );
          r.appendChild(i);
          i.addEventListener("keydown", function (n) {
            n.which === 27 && h(n);
          });
          v = document.createElement("div");
          v.classList.add("h5p-confirmation-dialog-header");
          i.appendChild(v);
          y = document.createElement("div");
          y.classList.add("h5p-confirmation-dialog-header-text");
          y.innerHTML = t.headerText;
          v.appendChild(y);
          c = document.createElement("div");
          c.classList.add("h5p-confirmation-dialog-body");
          i.appendChild(c);
          l = document.createElement("div");
          l.classList.add("h5p-confirmation-dialog-text");
          l.innerHTML = t.dialogText;
          l.id = "h5p-confirmation-dialog-dialog-text-" + w;
          c.appendChild(l);
          a = document.createElement("div");
          a.classList.add("h5p-confirmation-dialog-buttons");
          c.appendChild(a);
          s = document.createElement("button");
          s.classList.add("h5p-core-cancel-button");
          s.textContent = t.cancelText;
          u = document.createElement("button");
          u.classList.add("h5p-core-button");
          u.classList.add("h5p-confirmation-dialog-confirm-button");
          u.textContent = t.confirmText;
          e = document.createElement("button");
          e.classList.add("h5p-confirmation-dialog-exit");
          e.setAttribute("aria-hidden", "true");
          e.tabIndex = -1;
          e.title = t.cancelText;
          s.addEventListener("click", h);
          s.addEventListener("keydown", function (n) {
            n.which === 32 ? h(n) : n.which === 9 && n.shiftKey && it(u, n);
          });
          a.appendChild(s);
          u.addEventListener("click", tt);
          u.addEventListener("keydown", function (n) {
            n.which === 32 ? tt(n) : n.which !== 9 || n.shiftKey || it(s, n);
          });
          a.appendChild(u);
          e.addEventListener("click", h);
          e.addEventListener("keydown", function (n) {
            n.which === 32 && h(n);
          });
          i.appendChild(e);
          g = [];
          nt = [];
          this.appendTo = function (n) {
            return (f = n), this;
          };
          var ut = function (n) {
              r.contains(n.target) || (n.preventDefault(), u.focus());
            },
            ft = function (n) {
              for (
                var r = [], i = n.parentNode.children, t = 0;
                t < i.length;
                t += 1
              )
                (r[t] = i[t].getAttribute("aria-hidden") ? !0 : !1),
                  i[t] !== n && i[t].setAttribute("aria-hidden", !0);
              return r;
            },
            et = function (n, t) {
              for (var r = n.parentNode.children, i = 0; i < r.length; i += 1)
                r[i] === n || t[i] || r[i].removeAttribute("aria-hidden");
            },
            ot = function () {
              p = f.parentNode || f;
              p.addEventListener("focus", ut, !0);
            },
            st = function () {
              p.removeAttribute("aria-hidden");
              p.removeEventListener("focus", ut, !0);
            },
            ht = function () {
              g = ft(f);
              nt = ft(r);
            },
            ct = function () {
              et(f, g);
              et(r, nt);
            },
            lt = function (n) {
              var t = parseInt(i.style.top, 10);
              n && (t = n);
              t + i.offsetHeight > f.offsetHeight &&
                (t = f.offsetHeight - i.offsetHeight - k);
              t - b <= 0 && ((t = b + k), (d = !0));
              i.style.top = t + "px";
            };
          this.show = function (n) {
            return (
              (rt = document.activeElement),
              f.appendChild(r),
              ot(),
              ht(),
              r.classList.remove("hidden"),
              lt(n),
              setTimeout(function () {
                i.classList.remove("hidden");
                r.classList.remove("hiding");
                setTimeout(function () {
                  if ((u.focus(), d && t.instance)) {
                    var n = parseInt(i.offsetHeight, 10) + b + 2 * k;
                    o.setViewPortMinimumHeight(n);
                    t.instance.trigger("resize");
                    d = !1;
                  }
                }, 100);
              }, 0),
              this
            );
          };
          this.hide = function () {
            return (
              r.classList.add("hiding"),
              i.classList.add("hidden"),
              st(),
              rt.focus(),
              ct(),
              setTimeout(function () {
                r.classList.add("hidden");
                f.removeChild(r);
                o.setViewPortMinimumHeight(null);
              }, 100),
              this
            );
          };
          this.setViewPortMinimumHeight = function (n) {
            var t = document.querySelector(".h5p-container") || document.body;
            t.style.minHeight = typeof n == "number" ? n + "px" : n;
          };
        }
        return (
          (t.prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          t
        );
      })(H5P.EventDispatcher);
      H5P.ConfirmationDialog.uniqueId = -1;
      H5P.ActionBar = (function (n, t) {
        "use strict";
        function i(n) {
          t.call(this);
          var i = this,
            r = !1,
            u = H5P.jQuery('<ul class="h5p-actions"><\/ul>'),
            f = function (n, t) {
              var f = function () {
                i.trigger(n);
              };
              H5P.jQuery("<li/>", {
                class: "h5p-button h5p-noselect h5p-" + (t ? t : n),
                role: "button",
                tabindex: 0,
                title: H5P.t(n + "Description"),
                html: H5P.t(n),
                on: {
                  click: f,
                  keypress: function (n) {
                    n.which === 32 && (f(), n.preventDefault());
                  },
                },
                appendTo: u,
              });
              r = !0;
            };
          (n.export || n.copy) && f("reuse", "export");
          n.copyright && f("copyrights");
          n.embed && f("embed");
          n.icon &&
            (H5P.jQuery(
              '<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' +
                H5P.t("h5pDescription") +
                '"><\/a><\/li>'
            ).appendTo(u),
            (r = !0));
          i.getDOMElement = function () {
            return u;
          };
          i.hasActions = function () {
            return r;
          };
        }
        return (
          (i.prototype = Object.create(t.prototype)),
          (i.prototype.constructor = i),
          i
        );
      })(H5P.jQuery, H5P.EventDispatcher);