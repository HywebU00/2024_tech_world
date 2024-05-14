/*! For license information please see front.bundle.js.LICENSE.txt */
!(function () {
  var t = {
      928: function () {
        !(function (t, e, r) {
          'use strict';
          var n,
            i = function (t) {
              if (((this.acceleration = 0.08), (this.secondsPerScreen = null), (this.additionalOffset = 0), (this.wrapperEl = null), t)) for (var e in t) this[e] = t[e];
            };
          (i.prototype = {
            init: function () {
              var r = this;
              (this.wrapper = e.querySelectorAll(this.wrapperEl)),
                (n = t.pageYOffset),
                Array.prototype.forEach.call(this.wrapper, function (e) {
                  null === r.secondsPerScreen &&
                    r.wrapper[0].addEventListener('loadedmetadata', function () {
                      (r.secondsPerScreen = r.wrapper[0].duration), (r.distanceToTop = o(l)), (r.offsetFromTop = s(r.distanceToTop)), (r.pixelsPerSecond = a());
                    }),
                    (r.pixelsPerSecond = null),
                    (r.scrollPos = null),
                    (r.currentTime = null),
                    (r.offsetFromTop = null),
                    (r.distanceToTop = null),
                    (function () {
                      for (var e = 0, r = ['ms', 'moz', 'webkit', 'o'], n = 0; n < r.length && !t.requestAnimationFrame; ++n) (t.requestAnimationFrame = t[r[n] + 'RequestAnimationFrame']), (t.cancelAnimationFrame = t[r[n] + 'CancelAnimationFrame'] || t[r[n] + 'CancelRequestAnimationFrame']);
                      t.requestAnimationFrame ||
                        (t.requestAnimationFrame = function (r, n) {
                          var i = new Date().getTime(),
                            o = Math.max(0, 16 - (i - e)),
                            s = t.setTimeout(function () {
                              r(i + o);
                            }, o);
                          return (e = i + o), s;
                        }),
                        t.cancelAnimationFrame ||
                          (t.cancelAnimationFrame = function (t) {
                            clearTimeout(t);
                          });
                    })(),
                    (t.requestAnimFrame =
                      t.requestAnimationFrame ||
                      t.webkitRequestAnimationFrame ||
                      t.mozRequestAnimationFrame ||
                      t.oRequestAnimationFrame ||
                      t.msRequestAnimationFrame ||
                      function (e, r) {
                        t.setTimeout(e, 1e3 / 60);
                      });
                  var i = 0,
                    o = function (t) {
                      var e = 0;
                      if (t.offsetParent)
                        do {
                          (e += t.offsetTop), (t = t.offsetParent);
                        } while (t);
                      return e >= 0 ? e : 0;
                    },
                    s = function (t) {
                      var e = t - 1e3 + r.additionalOffset;
                      return e >= 0 ? e : 0;
                    },
                    a = function () {
                      var t = (1e3 + r.wrapper[0].clientHeight) / r.secondsPerScreen;
                      return t >= 0 ? t : 0;
                    },
                    l = r.wrapper[0];
                  (r.distanceToTop = o(l)),
                    (r.offsetFromTop = s(r.distanceToTop)),
                    (r.pixelsPerSecond = a()),
                    (r.scrollPos = n - r.offsetFromTop),
                    e.pause(),
                    t.requestAnimFrame(function e() {
                      t.requestAnimFrame(e),
                        Math.round(r.scrollPos + r.offsetFromTop) != n &&
                          (function () {
                            if (++i % 2 != 0) {
                              (r.scrollPos += (n - r.offsetFromTop - r.scrollPos) * r.acceleration), (r.currentTime = r.scrollPos / r.pixelsPerSecond);
                              var t = Math.round(10 * r.currentTime) / 10;
                              r.wrapper[0].currentTime != t && (r.wrapper[0].currentTime = t), r.wrapper[0].pause();
                            }
                          })();
                    }),
                    t.addEventListener(
                      'scroll',
                      function () {
                        n = t.pageYOffset;
                      },
                      !1
                    ),
                    t.addEventListener(
                      'resize',
                      function () {
                        (r.distanceToTop = o(l)), (r.offsetFromTop = s(r.distanceToTop)), (r.pixelsPerSecond = a());
                      },
                      !1
                    );
                });
            },
          }),
            (t.Scrolleo = i);
        })(window, document);
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = (e[n] = { exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  !(function () {
    'use strict';
    function t(e) {
      return (
        (t =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              }),
        t(e)
      );
    }
    function e(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function n(t, e) {
      (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
    }
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      h,
      f,
      p,
      d,
      m = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
      g = { duration: 0.5, overwrite: !1, delay: 0 },
      v = 1e8,
      _ = 1e-8,
      y = 2 * Math.PI,
      w = y / 4,
      b = 0,
      x = Math.sqrt,
      T = Math.cos,
      S = Math.sin,
      M = function (t) {
        return 'string' == typeof t;
      },
      O = function (t) {
        return 'function' == typeof t;
      },
      k = function (t) {
        return 'number' == typeof t;
      },
      E = function (t) {
        return void 0 === t;
      },
      A = function (e) {
        return 'object' === t(e);
      },
      P = function (t) {
        return !1 !== t;
      },
      C = function () {
        return 'undefined' != typeof window;
      },
      R = function (t) {
        return O(t) || M(t);
      },
      z = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
      L = Array.isArray,
      D = /(?:-?\.?\d|\.)+/gi,
      F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      B = /[+-]=-?[.\d]+/,
      I = /[^,'"\[\]\s]+/gi,
      W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      X = {},
      N = {},
      H = function (t) {
        return (N = yt(t, X)) && yr;
      },
      U = function (t, e) {
        return console.warn('Invalid property', t, 'set to', e, 'Missing plugin? gsap.registerPlugin()');
      },
      j = function (t, e) {
        return !e && console.warn(t);
      },
      V = function (t, e) {
        return (t && (X[t] = e) && N && (N[t] = e)) || X;
      },
      G = function () {
        return 0;
      },
      K = { suppressEvents: !0, isStart: !0, kill: !1 },
      J = { suppressEvents: !0, kill: !1 },
      Q = { suppressEvents: !0 },
      $ = {},
      Z = [],
      tt = {},
      et = {},
      rt = {},
      nt = 30,
      it = [],
      ot = '',
      st = function (t) {
        var e,
          r,
          n = t[0];
        if ((A(n) || O(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = it.length; r-- && !it[r].targetTest(n); );
          e = it[r];
        }
        for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new ze(t[r], e)))) || t.splice(r, 1);
        return t;
      },
      at = function (t) {
        return t._gsap || st(Jt(t))[0]._gsap;
      },
      lt = function (t, e, r) {
        return (r = t[e]) && O(r) ? t[e]() : (E(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      ut = function (t, e) {
        return (t = t.split(',')).forEach(e) || t;
      },
      ct = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      ht = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      ft = function (t, e) {
        var r = e.charAt(0),
          n = parseFloat(e.substr(2));
        return (t = parseFloat(t)), '+' === r ? t + n : '-' === r ? t - n : '*' === r ? t * n : t / n;
      },
      pt = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      dt = function () {
        var t,
          e,
          r = Z.length,
          n = Z.slice(0);
        for (tt = {}, Z.length = 0, t = 0; t < r; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      mt = function (t, e, r, n) {
        Z.length && !o && dt(), t.render(e, r, n || (o && e < 0 && (t._initted || t._startAt))), Z.length && !o && dt();
      },
      gt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + '').match(I).length < 2 ? e : M(t) ? t.trim() : t;
      },
      vt = function (t) {
        return t;
      },
      _t = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      yt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      wt = function t(e, r) {
        for (var n in r) '__proto__' !== n && 'constructor' !== n && 'prototype' !== n && (e[n] = A(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e;
      },
      bt = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      xt = function (t) {
        var e,
          r = t.parent || a,
          n = t.keyframes
            ? ((e = L(t.keyframes)),
              function (t, r) {
                for (var n in r) n in t || ('duration' === n && e) || 'ease' === n || (t[n] = r[n]);
              })
            : _t;
        if (P(t.inherit)) for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
        return t;
      },
      Tt = function (t, e, r, n, i) {
        void 0 === r && (r = '_first'), void 0 === n && (n = '_last');
        var o,
          s = t[n];
        if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
        return s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[n] = e), (e._prev = s), (e.parent = e._dp = t), e;
      },
      St = function (t, e, r, n) {
        void 0 === r && (r = '_first'), void 0 === n && (n = '_last');
        var i = e._prev,
          o = e._next;
        i ? (i._next = o) : t[r] === e && (t[r] = o), o ? (o._prev = i) : t[n] === e && (t[n] = i), (e._next = e._prev = e.parent = null);
      },
      Mt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
      },
      Ot = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
      },
      kt = function (t, e, r, n) {
        return t._startAt && (o ? t._startAt.revert(J) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, n));
      },
      Et = function t(e) {
        return !e || (e._ts && t(e.parent));
      },
      At = function (t) {
        return t._repeat ? Pt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Pt = function (t, e) {
        var r = Math.floor((t /= e));
        return t && r === t ? r - 1 : r;
      },
      Ct = function (t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
      },
      Rt = function (t) {
        return (t._end = ht(t._start + (t._tDur / Math.abs(t._ts || t._rts || _) || 0)));
      },
      zt = function (t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && ((t._start = ht(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Rt(t), r._dirty || Ot(r, t)), t;
      },
      Lt = function (t, e) {
        var r;
        if (((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((r = Ct(t.rawTime(), e)), (!e._dur || jt(0, e.totalDuration(), r) - e._tTime > _) && e.render(r, !0)), Ot(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
          if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      Dt = function (t, e, r, n) {
        return (
          e.parent && Mt(e),
          (e._start = ht((k(r) ? r : r || t !== a ? Nt(t, r, e) : t._time) + e._delay)),
          (e._end = ht(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
          Tt(t, e, '_first', '_last', t._sort ? '_start' : 0),
          Bt(e) || (t._recent = e),
          n || Lt(t, e),
          t._ts < 0 && zt(t, t._tTime),
          t
        );
      },
      Ft = function (t, e) {
        return (X.ScrollTrigger || U('scrollTrigger', e)) && X.ScrollTrigger.create(e, t);
      },
      qt = function (t, e, r, n, i) {
        return We(t, e, i), t._initted ? (!r && t._pt && !o && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && f !== we.frame ? (Z.push(t), (t._lazy = [i, n]), 1) : void 0) : 1;
      },
      Yt = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
      },
      Bt = function (t) {
        var e = t.data;
        return 'isFromStart' === e || 'isStart' === e;
      },
      It = function (t, e, r, n) {
        var i = t._repeat,
          o = ht(e) || 0,
          s = t._tTime / t._tDur;
        return s && !n && (t._time *= o / t._dur), (t._dur = o), (t._tDur = i ? (i < 0 ? 1e10 : ht(o * (i + 1) + t._rDelay * i)) : o), s > 0 && !n && zt(t, (t._tTime = t._tDur * s)), t.parent && Rt(t), r || Ot(t.parent, t), t;
      },
      Wt = function (t) {
        return t instanceof De ? Ot(t) : It(t, t._dur);
      },
      Xt = { _start: 0, endTime: G, totalDuration: G },
      Nt = function t(e, r, n) {
        var i,
          o,
          s,
          a = e.labels,
          l = e._recent || Xt,
          u = e.duration() >= v ? l.endTime(!1) : e._dur;
        return M(r) && (isNaN(r) || r in a)
          ? ((o = r.charAt(0)),
            (s = '%' === r.substr(-1)),
            (i = r.indexOf('=')),
            '<' === o || '>' === o
              ? (i >= 0 && (r = r.replace(/=/, '')), ('<' === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? l : n).totalDuration() / 100 : 1))
              : i < 0
              ? (r in a || (a[r] = u), a[r])
              : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))), s && n && (o = (o / 100) * (L(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : u + o))
          : null == r
          ? u
          : +r;
      },
      Ht = function (t, e, r) {
        var n,
          i,
          o = k(e[1]),
          s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[s];
        if ((o && (a.duration = e[1]), (a.parent = r), t)) {
          for (n = a, i = r; i && !('immediateRender' in n); ) (n = i.vars.defaults || {}), (i = P(i.vars.inherit) && i.parent);
          (a.immediateRender = P(n.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
        }
        return new je(e[0], a, e[s + 1]);
      },
      Ut = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      jt = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      Vt = function (t, e) {
        return M(t) && (e = W.exec(t)) ? e[1] : '';
      },
      Gt = [].slice,
      Kt = function (t, e) {
        return t && A(t) && 'length' in t && ((!e && !t.length) || (t.length - 1 in t && A(t[0]))) && !t.nodeType && t !== l;
      },
      Jt = function (t, e, r) {
        return s && !e && s.selector
          ? s.selector(t)
          : !M(t) || r || (!u && be())
          ? L(t)
            ? (function (t, e, r) {
                return (
                  void 0 === r && (r = []),
                  t.forEach(function (t) {
                    var n;
                    return (M(t) && !e) || Kt(t, 1) ? (n = r).push.apply(n, Jt(t)) : r.push(t);
                  }) || r
                );
              })(t, r)
            : Kt(t)
            ? Gt.call(t, 0)
            : t
            ? [t]
            : []
          : Gt.call((e || c).querySelectorAll(t), 0);
      },
      Qt = function (t) {
        return (
          (t = Jt(t)[0] || j('Invalid scope') || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return Jt(e, r.querySelectorAll ? r : r === t ? j('Invalid scope') || c.createElement('div') : t);
          }
        );
      },
      $t = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Zt = function (t) {
        if (O(t)) return t;
        var e = A(t) ? t : { each: t },
          r = Ee(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          o = {},
          s = n > 0 && n < 1,
          a = isNaN(n) || s,
          l = e.axis,
          u = n,
          c = n;
        return (
          M(n) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !s && a && ((u = n[0]), (c = n[1])),
          function (t, s, h) {
            var f,
              p,
              d,
              m,
              g,
              _,
              y,
              w,
              b,
              T = (h || e).length,
              S = o[T];
            if (!S) {
              if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, v])[1])) {
                for (y = -v; y < (y = h[b++].getBoundingClientRect().left) && b < T; );
                b--;
              }
              for (S = o[T] = [], f = a ? Math.min(b, T) * u - 0.5 : n % b, p = b === v ? 0 : a ? (T * c) / b - 0.5 : (n / b) | 0, y = 0, w = v, _ = 0; _ < T; _++)
                (d = (_ % b) - f), (m = p - ((_ / b) | 0)), (S[_] = g = l ? Math.abs('y' === l ? m : d) : x(d * d + m * m)), g > y && (y = g), g < w && (w = g);
              'random' === n && $t(S),
                (S.max = y - w),
                (S.min = w),
                (S.v = T = (parseFloat(e.amount) || parseFloat(e.each) * (b > T ? T - 1 : l ? ('y' === l ? T / b : b) : Math.max(b, T / b)) || 0) * ('edges' === n ? -1 : 1)),
                (S.b = T < 0 ? i - T : i),
                (S.u = Vt(e.amount || e.each) || 0),
                (r = r && T < 0 ? Oe(r) : r);
            }
            return (T = (S[t] - S.min) / S.max || 0), ht(S.b + (r ? r(T) : T) * S.v) + S.u;
          }
        );
      },
      te = function (t) {
        var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
        return function (r) {
          var n = ht(Math.round(parseFloat(r) / t) * t * e);
          return (n - (n % 1)) / e + (k(r) ? 0 : Vt(r));
        };
      },
      ee = function (t, e) {
        var r,
          n,
          i = L(t);
        return (
          !i && A(t) && ((r = i = t.radius || v), t.values ? ((t = Jt(t.values)), (n = !k(t[0])) && (r *= r)) : (t = te(t.increment))),
          Ut(
            e,
            i
              ? O(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = v, u = 0, c = t.length; c--; ) (i = n ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && ((l = i), (u = c));
                    return (u = !r || l <= r ? t[u] : e), n || u === e || k(e) ? u : u + Vt(e);
                  }
              : te(t)
          )
        );
      },
      re = function (t, e, r, n) {
        return Ut(L(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return L(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * n) / n;
        });
      },
      ne = function (t, e, r) {
        return Ut(r, function (r) {
          return t[~~e(r)];
        });
      },
      ie = function (t) {
        for (var e, r, n, i, o = 0, s = ''; ~(e = t.indexOf('random(', o)); ) (n = t.indexOf(')', e)), (i = '[' === t.charAt(e + 7)), (r = t.substr(e + 7, n - e - 7).match(i ? I : D)), (s += t.substr(o, e - o) + re(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)), (o = n + 1);
        return s + t.substr(o, t.length - o);
      },
      oe = function (t, e, r, n, i) {
        var o = e - t,
          s = n - r;
        return Ut(i, function (e) {
          return r + (((e - t) / o) * s || 0);
        });
      },
      se = function (t, e, r) {
        var n,
          i,
          o,
          s = t.labels,
          a = v;
        for (n in s) (i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && ((o = n), (a = i));
        return o;
      },
      ae = function (t, e, r) {
        var n,
          i,
          o,
          a = t.vars,
          l = a[e],
          u = s,
          c = t._ctx;
        if (l) return (n = a[e + 'Params']), (i = a.callbackScope || t), r && Z.length && dt(), c && (s = c), (o = n ? l.apply(i, n) : l.call(i)), (s = u), o;
      },
      le = function (t) {
        return Mt(t), t.scrollTrigger && t.scrollTrigger.kill(!!o), t.progress() < 1 && ae(t, 'onInterrupt'), t;
      },
      ue = [],
      ce = function (t) {
        if (C() && t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = O(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = { init: G, render: er, add: Be, kill: nr, modifier: rr, rawVars: 0 },
            o = { targetTest: 0, get: 0, getSetter: Qe, aliases: {}, register: 0 };
          if ((be(), t !== n)) {
            if (et[e]) return;
            _t(n, _t(bt(t, i), o)), yt(n.prototype, yt(i, bt(t, o))), (et[(n.prop = e)] = n), t.targetTest && (it.push(n), ($[e] = 1)), (e = ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
          }
          V(e, n), t.register && t.register(yr, n, sr);
        } else t && ue.push(t);
      },
      he = 255,
      fe = {
        aqua: [0, he, he],
        lime: [0, he, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, he],
        navy: [0, 0, 128],
        white: [he, he, he],
        olive: [128, 128, 0],
        yellow: [he, he, 0],
        orange: [he, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [he, 0, 0],
        pink: [he, 192, 203],
        cyan: [0, he, he],
        transparent: [he, he, he, 0],
      },
      pe = function (t, e, r) {
        return ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * he + 0.5) | 0;
      },
      de = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          f,
          p = t ? (k(t) ? [t >> 16, (t >> 8) & he, t & he] : 0) : fe.black;
        if (!p) {
          if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t])) p = fe[t];
          else if ('#' === t.charAt(0)) {
            if ((t.length < 6 && ((n = t.charAt(1)), (i = t.charAt(2)), (o = t.charAt(3)), (t = '#' + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))), 9 === t.length))
              return [(p = parseInt(t.substr(1, 6), 16)) >> 16, (p >> 8) & he, p & he, parseInt(t.substr(7), 16) / 255];
            p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & he, t & he];
          } else if ('hsl' === t.substr(0, 3))
            if (((p = f = t.match(D)), e)) {
              if (~t.indexOf('=')) return (p = t.match(F)), r && p.length < 4 && (p[3] = 1), p;
            } else (s = (+p[0] % 360) / 360), (a = +p[1] / 100), (n = 2 * (l = +p[2] / 100) - (i = l <= 0.5 ? l * (a + 1) : l + a - l * a)), p.length > 3 && (p[3] *= 1), (p[0] = pe(s + 1 / 3, n, i)), (p[1] = pe(s, n, i)), (p[2] = pe(s - 1 / 3, n, i));
          else p = t.match(D) || fe.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !f &&
            ((n = p[0] / he),
            (i = p[1] / he),
            (o = p[2] / he),
            (l = ((u = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2),
            u === c ? (s = a = 0) : ((h = u - c), (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)), (s = u === n ? (i - o) / h + (i < o ? 6 : 0) : u === i ? (o - n) / h + 2 : (n - i) / h + 4), (s *= 60)),
            (p[0] = ~~(s + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * l + 0.5))),
          r && p.length < 4 && (p[3] = 1),
          p
        );
      },
      me = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(ve).forEach(function (t) {
            var i = t.match(q) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      ge = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a = '',
          l = (t + a).match(ve),
          u = e ? 'hsla(' : 'rgba(',
          c = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (t = de(t, e, 1)) && u + (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) + ')';
          })),
          r && ((o = me(t)), (n = r.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = t.replace(ve, '1').split(q)).length - 1; c < s; c++) a += i[c] + (~n.indexOf(c) ? l.shift() || u + '0,0,0,0)' : (o.length ? o : l.length ? l : r).shift());
        if (!i) for (s = (i = t.split(ve)).length - 1; c < s; c++) a += i[c] + l[c];
        return a + i[s];
      },
      ve = (function () {
        var t,
          e = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
        for (t in fe) e += '|' + t + '\\b';
        return new RegExp(e + ')', 'gi');
      })(),
      _e = /hsl[a]?\(/,
      ye = function (t) {
        var e,
          r = t.join(' ');
        if (((ve.lastIndex = 0), ve.test(r))) return (e = _e.test(r)), (t[1] = ge(t[1], e)), (t[0] = ge(t[0], e, me(t[1]))), !0;
      },
      we = (function () {
        var t,
          e,
          r,
          n,
          i,
          o,
          s = Date.now,
          a = 500,
          f = 33,
          p = s(),
          m = p,
          g = 1e3 / 240,
          v = g,
          _ = [],
          y = function r(l) {
            var u,
              c,
              h,
              d,
              y = s() - m,
              w = !0 === l;
            if ((y > a && (p += y - f), ((u = (h = (m += y) - p) - v) > 0 || w) && ((d = ++n.frame), (i = h - 1e3 * n.time), (n.time = h /= 1e3), (v += u + (u >= g ? 4 : g - u)), (c = 1)), w || (t = e(r)), c)) for (o = 0; o < _.length; o++) _[o](h, i, d, l);
          };
        return (
          (n = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60));
            },
            wake: function () {
              h &&
                (!u && C() && ((l = u = window), (c = l.document || {}), (X.gsap = yr), (l.gsapVersions || (l.gsapVersions = [])).push(yr.version), H(N || l.GreenSockGlobals || (!l.gsap && l) || {}), (r = l.requestAnimationFrame), ue.forEach(ce)),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (v - 1e3 * n.time + 1) | 0);
                  }),
                (d = 1),
                y(2));
            },
            sleep: function () {
              (r ? l.cancelAnimationFrame : clearTimeout)(t), (d = 0), (e = G);
            },
            lagSmoothing: function (t, e) {
              (a = t || 1 / 0), (f = Math.min(e || 33, a));
            },
            fps: function (t) {
              (g = 1e3 / (t || 240)), (v = 1e3 * n.time + g);
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, o, s) {
                    t(e, r, o, s), n.remove(i);
                  }
                : t;
              return n.remove(t), _[r ? 'unshift' : 'push'](i), be(), i;
            },
            remove: function (t, e) {
              ~(e = _.indexOf(t)) && _.splice(e, 1) && o >= e && o--;
            },
            _listeners: _,
          }),
          n
        );
      })(),
      be = function () {
        return !d && we.wake();
      },
      xe = {},
      Te = /^[\d.\-M][\d.\-,\s]/,
      Se = /["']/g,
      Me = function (t) {
        for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(':'), s = o[0], a = 1, l = o.length; a < l; a++) (r = o[a]), (e = a !== l - 1 ? r.lastIndexOf(',') : r.length), (n = r.substr(0, e)), (i[s] = isNaN(n) ? n.replace(Se, '').trim() : +n), (s = r.substr(e + 1).trim());
        return i;
      },
      Oe = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      ke = function t(e, r) {
        for (var n, i = e._first; i; ) i instanceof De ? t(i, r) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === r || (i.timeline ? t(i.timeline, r) : ((n = i._ease), (i._ease = i._yEase), (i._yEase = n), (i._yoyo = r))), (i = i._next);
      },
      Ee = function (t, e) {
        return (
          (t &&
            (O(t)
              ? t
              : xe[t] ||
                (function (t) {
                  var e,
                    r,
                    n,
                    i,
                    o = (t + '').split('('),
                    s = xe[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(null, ~t.indexOf('{') ? [Me(o[1])] : ((e = t), (r = e.indexOf('(') + 1), (n = e.indexOf(')')), (i = e.indexOf('(', r)), e.substring(r, ~i && i < n ? e.indexOf(')', n + 1) : n)).split(',').map(gt))
                    : xe._CE && Te.test(t)
                    ? xe._CE('', t)
                    : s;
                })(t))) ||
          e
        );
      },
      Ae = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          o = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          ut(t, function (t) {
            for (var e in ((xe[t] = X[t] = o), (xe[(i = t.toLowerCase())] = r), o)) xe[i + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')] = xe[t + '.' + e] = o[e];
          }),
          o
        );
      },
      Pe = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Ce = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          s = (o / y) * (Math.asin(1 / i) || 0),
          a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * S((t - s) * o) + 1;
          },
          l =
            'out' === e
              ? a
              : 'in' === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : Pe(a);
        return (
          (o = y / o),
          (l.config = function (r, n) {
            return t(e, r, n);
          }),
          l
        );
      },
      Re = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            'out' === e
              ? n
              : 'in' === e
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : Pe(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    ut('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
      var r = e < 5 ? e + 1 : e;
      Ae(
        t + ',Power' + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
        }
      );
    }),
      (xe.Linear.easeNone = xe.none = xe.Linear.easeIn),
      Ae('Elastic', Ce('in'), Ce('out'), Ce()),
      (function (t, e) {
        var r = function (r) {
          return r < 0.36363636363636365 ? t * r * r : r < 0.7272727272727273 ? t * Math.pow(r - 1.5 / e, 2) + 0.75 : r < 0.9090909090909092 ? t * (r -= 2.25 / e) * r + 0.9375 : t * Math.pow(r - 2.625 / e, 2) + 0.984375;
        };
        Ae(
          'Bounce',
          function (t) {
            return 1 - r(1 - t);
          },
          r
        );
      })(7.5625, 2.75),
      Ae('Expo', function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      Ae('Circ', function (t) {
        return -(x(1 - t * t) - 1);
      }),
      Ae('Sine', function (t) {
        return 1 === t ? 1 : 1 - T(t * w);
      }),
      Ae('Back', Re('in'), Re('out'), Re()),
      (xe.SteppedEase =
        xe.steps =
        X.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((n * jt(0, 0.99999999, t)) | 0) + i) * r;
              };
            },
          }),
      (g.ease = xe['quad.out']),
      ut('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
        return (ot += t + ',' + t + 'Params,');
      });
    var ze = function (t, e) {
        (this.id = b++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : lt), (this.set = e ? e.getSetter : Qe);
      },
      Le = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            It(this, +t.duration, 1, 1),
            (this.data = t.data),
            s && ((this._ctx = s), s.data.push(this)),
            d || we.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length ? ((this._dirty = 0), It(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((be(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (zt(this, t), !r._dp || r.parent || Lt(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
              !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Dt(this._dp, this, this._start - this._delay);
            }
            return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === _) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), mt(this, t, e)), this;
          }),
          (e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + At(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + At(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Pt(this._tTime, r) + 1 : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Ct(this.parent._time, this) : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(jt(-Math.abs(this._delay), this._tDur, e), !0),
              Rt(this),
              (function (t) {
                for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                    : (be(), (this._ts = this._rts), this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== _ && (this._tTime -= _)))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Dt(e, this, t - this._delay), this;
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return this._start + (P(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ct(e.rawTime(t), this) : this._tTime) : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = Q);
            var e = o;
            return (o = t), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), 'nested' !== this.data && !1 !== t.kill && this.kill(), (o = e), this;
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
            return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t)) : r;
          }),
          (e.repeat = function (t) {
            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), Wt(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Nt(this, t), P(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, P(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - _));
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? ((n[t] = e), r && (n[t + 'Params'] = r), 'onUpdate' === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = O(t) ? t : vt,
                i = function () {
                  var t = e.then;
                  (e.then = null), O(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
            });
          }),
          (e.kill = function () {
            le(this);
          }),
          t
        );
      })();
    _t(Le.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
    var De = (function (t) {
      function r(r, n) {
        var i;
        return (
          void 0 === r && (r = {}),
          ((i = t.call(this, r) || this).labels = {}),
          (i.smoothChildTiming = !!r.smoothChildTiming),
          (i.autoRemoveChildren = !!r.autoRemoveChildren),
          (i._sort = P(r.sortChildren)),
          a && Dt(r.parent || a, e(i), n),
          r.reversed && i.reverse(),
          r.paused && i.paused(!0),
          r.scrollTrigger && Ft(e(i), r.scrollTrigger),
          i
        );
      }
      n(r, t);
      var i = r.prototype;
      return (
        (i.to = function (t, e, r) {
          return Ht(0, arguments, this), this;
        }),
        (i.from = function (t, e, r) {
          return Ht(1, arguments, this), this;
        }),
        (i.fromTo = function (t, e, r, n) {
          return Ht(2, arguments, this), this;
        }),
        (i.set = function (t, e, r) {
          return (e.duration = 0), (e.parent = this), xt(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new je(t, e, Nt(this, r), 1), this;
        }),
        (i.call = function (t, e, r) {
          return Dt(this, je.delayedCall(0, t, e), r);
        }),
        (i.staggerTo = function (t, e, r, n, i, o, s) {
          return (r.duration = e), (r.stagger = r.stagger || n), (r.onComplete = o), (r.onCompleteParams = s), (r.parent = this), new je(t, r, Nt(this, i)), this;
        }),
        (i.staggerFrom = function (t, e, r, n, i, o, s) {
          return (r.runBackwards = 1), (xt(r).immediateRender = P(r.immediateRender)), this.staggerTo(t, e, r, n, i, o, s);
        }),
        (i.staggerFromTo = function (t, e, r, n, i, o, s, a) {
          return (n.startAt = r), (xt(n).immediateRender = P(n.immediateRender)), this.staggerTo(t, e, n, i, o, s, a);
        }),
        (i.render = function (t, e, r) {
          var n,
            i,
            s,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m,
            g,
            v = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            w = this._dur,
            b = t <= 0 ? 0 : ht(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !w);
          if ((this !== a && b > y && t >= 0 && (b = y), b !== this._tTime || r || x)) {
            if ((v !== this._time && w && ((b += this._time - v), (t += this._time - v)), (n = b), (p = this._start), (c = !(f = this._ts)), x && (w || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
              if (((m = this._yoyo), (u = w + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * u + t, e, r);
              if (
                ((n = ht(b % u)),
                b === y ? ((l = this._repeat), (n = w)) : ((l = ~~(b / u)) && l === b / u && ((n = w), l--), n > w && (n = w)),
                (d = Pt(this._tTime, u)),
                !v && this._tTime && d !== l && this._tTime - d * u - this._dur <= 0 && (d = l),
                m && 1 & l && ((n = w - n), (g = 1)),
                l !== d && !this._lock)
              ) {
                var T = m && 1 & d,
                  S = T === (m && 1 & l);
                if (
                  (l < d && (T = !T),
                  (v = T ? 0 : b % w ? w : b),
                  (this._lock = 1),
                  (this.render(v || (g ? 0 : ht(l * u)), e, !w)._lock = 0),
                  (this._tTime = b),
                  !e && this.parent && ae(this, 'onRepeat'),
                  this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                  (v && v !== this._time) || c !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (((w = this._dur), (y = this._tDur), S && ((this._lock = 2), (v = T ? w : -1e-4), this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !c)) return this;
                ke(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((h = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if ('isPause' === n.data && n._start > e) return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if ('isPause' === n.data && n._start < e) return n;
                      n = n._prev;
                    }
                })(this, ht(v), ht(n))),
                h && (b -= n - (n = h._start))),
              (this._tTime = b),
              (this._time = n),
              (this._act = !f),
              this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (v = 0)),
              !v && n && !e && !l && (ae(this, 'onStart'), this._tTime !== b))
            )
              return this;
            if (n >= v && t >= 0)
              for (i = this._first; i; ) {
                if (((s = i._next), (i._act || n >= i._start) && i._ts && h !== i)) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if ((i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || (!this._ts && !c))) {
                    (h = 0), s && (b += this._zTime = -1e-8);
                    break;
                  }
                }
                i = s;
              }
            else {
              i = this._last;
              for (var M = t < 0 ? t : n; i; ) {
                if (((s = i._prev), (i._act || M <= i._end) && i._ts && h !== i)) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if ((i.render(i._ts > 0 ? (M - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (M - i._start) * i._ts, e, r || (o && (i._initted || i._startAt))), n !== this._time || (!this._ts && !c))) {
                    (h = 0), s && (b += this._zTime = M ? -1e-8 : _);
                    break;
                  }
                }
                i = s;
              }
            }
            if (h && !e && (this.pause(), (h.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1), this._ts)) return (this._start = p), Rt(this), this.render(t, e, r);
            this._onUpdate && !e && ae(this, 'onUpdate', !0),
              ((b === y && this._tTime >= this.totalDuration()) || (!b && v)) &&
                ((p !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !w) && ((b === y && this._ts > 0) || (!b && this._ts < 0)) && Mt(this, 1), e || (t < 0 && !v) || (!b && !v && y) || (ae(this, b === y && t >= 0 ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }),
        (i.add = function (t, e) {
          var r = this;
          if ((k(e) || (e = Nt(this, e, t)), !(t instanceof Le))) {
            if (L(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (M(t)) return this.addLabel(t, e);
            if (!O(t)) return this;
            t = je.delayedCall(0, t);
          }
          return this !== t ? Dt(this, t, e) : this;
        }),
        (i.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -v);
          for (var i = [], o = this._first; o; ) o._start >= n && (o instanceof je ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), (o = o._next);
          return i;
        }),
        (i.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
        }),
        (i.remove = function (t) {
          return M(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (St(this, t), t === this._recent && (this._recent = this._last), Ot(this));
        }),
        (i.totalTime = function (e, r) {
          return arguments.length ? ((this._forcing = 1), !this._dp && this._ts && (this._start = ht(we.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), (this._forcing = 0), this) : this._tTime;
        }),
        (i.addLabel = function (t, e) {
          return (this.labels[t] = Nt(this, e)), this;
        }),
        (i.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (i.addPause = function (t, e, r) {
          var n = je.delayedCall(0, e || G, r);
          return (n.data = 'isPause'), (this._hasPause = 1), Dt(this, n, Nt(this, t));
        }),
        (i.removePause = function (t) {
          var e = this._first;
          for (t = Nt(this, t); e; ) e._start === t && 'isPause' === e.data && Mt(e), (e = e._next);
        }),
        (i.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; ) Fe !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (i.getTweensOf = function (t, e) {
          for (var r, n = [], i = Jt(t), o = this._first, s = k(e); o; )
            o instanceof je ? pt(o._targets, i) && (s ? (!Fe || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), (o = o._next);
          return n;
        }),
        (i.tweenTo = function (t, e) {
          e = e || {};
          var r,
            n = this,
            i = Nt(n, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            u = o.immediateRender,
            c = je.to(
              n,
              _t(
                {
                  ease: e.ease || 'none',
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: 'auto',
                  duration: e.duration || Math.abs((i - (s && 'time' in s ? s.time : n._time)) / n.timeScale()) || _,
                  onStart: function () {
                    if ((n.pause(), !r)) {
                      var t = e.duration || Math.abs((i - (s && 'time' in s ? s.time : n._time)) / n.timeScale());
                      c._dur !== t && It(c, t, 0, 1).render(c._time, !0, !0), (r = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                e
              )
            );
          return u ? c.render(0) : c;
        }),
        (i.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, _t({ startAt: { time: Nt(this, t) } }, r));
        }),
        (i.recent = function () {
          return this._recent;
        }),
        (i.nextLabel = function (t) {
          return void 0 === t && (t = this._time), se(this, Nt(this, t));
        }),
        (i.previousLabel = function (t) {
          return void 0 === t && (t = this._time), se(this, Nt(this, t), 1);
        }),
        (i.currentLabel = function (t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + _);
        }),
        (i.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, o = this.labels; i; ) i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (n in o) o[n] >= r && (o[n] += t);
          return Ot(this);
        }),
        (i.invalidate = function (e) {
          var r = this._first;
          for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
          return t.prototype.invalidate.call(this, e);
        }),
        (i.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ot(this);
        }),
        (i.totalDuration = function (t) {
          var e,
            r,
            n,
            i = 0,
            o = this,
            s = o._last,
            l = v;
          if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
          if (o._dirty) {
            for (n = o.parent; s; )
              (e = s._prev),
                s._dirty && s.totalDuration(),
                (r = s._start) > l && o._sort && s._ts && !o._lock ? ((o._lock = 1), (Dt(o, s, r - s._delay, 1)._lock = 0)) : (l = r),
                r < 0 && s._ts && ((i -= r), ((!n && !o._dp) || (n && n.smoothChildTiming)) && ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)), o.shiftChildren(-r, !1, -Infinity), (l = 0)),
                s._end > i && s._ts && (i = s._end),
                (s = e);
            It(o, o === a && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (r.updateRoot = function (t) {
          if ((a._ts && (mt(a, Ct(t, a)), (f = we.frame)), we.frame >= nt)) {
            nt += m.autoSleep || 120;
            var e = a._first;
            if ((!e || !e._ts) && m.autoSleep && we._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || we.sleep();
            }
          }
        }),
        r
      );
    })(Le);
    _t(De.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Fe,
      qe,
      Ye = function (t, e, r, n, i, o, s) {
        var a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m = new sr(this._pt, t, e, 0, 1, tr, null, i),
          g = 0,
          v = 0;
        for (m.b = r, m.e = n, r += '', (p = ~(n += '').indexOf('random(')) && (n = ie(n)), o && (o((d = [r, n]), t, e), (r = d[0]), (n = d[1])), l = r.match(Y) || []; (a = Y.exec(n)); )
          (c = a[0]),
            (h = n.substring(g, a.index)),
            u ? (u = (u + 1) % 5) : 'rgba(' === h.substr(-5) && (u = 1),
            c !== l[v++] && ((f = parseFloat(l[v - 1]) || 0), (m._pt = { _next: m._pt, p: h || 1 === v ? h : ',', s: f, c: '=' === c.charAt(1) ? ft(f, c) - f : parseFloat(c) - f, m: u && u < 4 ? Math.round : 0 }), (g = Y.lastIndex));
        return (m.c = g < n.length ? n.substring(g, n.length) : ''), (m.fp = s), (B.test(n) || p) && (m.e = 0), (this._pt = m), m;
      },
      Be = function (t, e, r, n, i, o, s, a, l, u) {
        O(n) && (n = n(i || 0, t, o));
        var c,
          h = t[e],
          f = 'get' !== r ? r : O(h) ? (l ? t[e.indexOf('set') || !O(t['get' + e.substr(3)]) ? e : 'get' + e.substr(3)](l) : t[e]()) : h,
          p = O(h) ? (l ? Ke : Ge) : Ve;
        if ((M(n) && (~n.indexOf('random(') && (n = ie(n)), '=' === n.charAt(1) && ((c = ft(f, n) + (Vt(f) || 0)) || 0 === c) && (n = c)), !u || f !== n || qe))
          return isNaN(f * n) || '' === n ? (!h && !(e in t) && U(e, n), Ye.call(this, t, e, f, n, p, a || m.stringFilter, l)) : ((c = new sr(this._pt, t, e, +f || 0, n - (f || 0), 'boolean' == typeof h ? Ze : $e, 0, p)), l && (c.fp = l), s && c.modifier(s, this, t), (this._pt = c));
      },
      Ie = function (t, e, r, n, i, o) {
        var s, a, l, u;
        if (
          et[t] &&
          !1 !==
            (s = new et[t]()).init(
              i,
              s.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if ((O(t) && (t = Ne(t, i, e, r, n)), !A(t) || (t.style && t.nodeType) || L(t) || z(t))) return M(t) ? Ne(t, i, e, r, n) : t;
                    var o,
                      s = {};
                    for (o in t) s[o] = Ne(t[o], i, e, r, n);
                    return s;
                  })(e[t], n, i, o, r),
              r,
              n,
              o
            ) &&
          ((r._pt = a = new sr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority)), r !== p)
        )
          for (l = r._ptLookup[r._targets.indexOf(i)], u = s._props.length; u--; ) l[s._props[u]] = a;
        return s;
      },
      We = function t(e, r, n) {
        var s,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          y,
          w,
          b,
          x,
          T = e.vars,
          S = T.ease,
          M = T.startAt,
          O = T.immediateRender,
          k = T.lazy,
          E = T.onUpdate,
          A = T.onUpdateParams,
          C = T.callbackScope,
          R = T.runBackwards,
          z = T.yoyoEase,
          L = T.keyframes,
          D = T.autoRevert,
          F = e._dur,
          q = e._startAt,
          Y = e._targets,
          B = e.parent,
          I = B && 'nested' === B.data ? B.vars.targets : Y,
          W = 'auto' === e._overwrite && !i,
          X = e.timeline;
        if ((X && (!L || !S) && (S = 'none'), (e._ease = Ee(S, g.ease)), (e._yEase = z ? Oe(Ee(!0 === z ? S : z, g.ease)) : 0), z && e._yoyo && !e._repeat && ((z = e._yEase), (e._yEase = e._ease), (e._ease = z)), (e._from = !X && !!T.runBackwards), !X || (L && !T.stagger))) {
          if (((b = (d = Y[0] ? at(Y[0]).harness : 0) && T[d.prop]), (s = bt(T, $)), q && (q._zTime < 0 && q.progress(1), r < 0 && R && O && !D ? q.render(-1, !0) : q.revert(R && F ? J : K), (q._lazy = 0)), M)) {
            if (
              (Mt((e._startAt = je.set(Y, _t({ data: 'isStart', overwrite: !1, parent: B, immediateRender: !0, lazy: !q && P(k), startAt: null, delay: 0, onUpdate: E, onUpdateParams: A, callbackScope: C, stagger: 0 }, M)))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (o || (!O && !D)) && e._startAt.revert(J),
              O && F && r <= 0 && n <= 0)
            )
              return void (r && (e._zTime = r));
          } else if (R && F && !q)
            if (
              (r && (O = !1),
              (u = _t({ overwrite: !1, data: 'isFromStart', lazy: O && !q && P(k), immediateRender: O, stagger: 0, parent: B }, s)),
              b && (u[d.prop] = b),
              Mt((e._startAt = je.set(Y, u))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (o ? e._startAt.revert(J) : e._startAt.render(-1, !0)),
              (e._zTime = r),
              O)
            ) {
              if (!r) return;
            } else t(e._startAt, _, _);
          for (e._pt = e._ptCache = 0, k = (F && P(k)) || (k && !F), l = 0; l < Y.length; l++) {
            if (
              ((p = (h = Y[l])._gsap || st(Y)[l]._gsap),
              (e._ptLookup[l] = y = {}),
              tt[p.id] && Z.length && dt(),
              (w = I === Y ? l : I.indexOf(h)),
              d &&
                !1 !== (m = new d()).init(h, b || s, e, w, I) &&
                ((e._pt = c = new sr(e._pt, h, m.name, 0, 1, m.render, m, 0, m.priority)),
                m._props.forEach(function (t) {
                  y[t] = c;
                }),
                m.priority && (f = 1)),
              !d || b)
            )
              for (u in s) et[u] && (m = Ie(u, s, e, w, h, I)) ? m.priority && (f = 1) : (y[u] = c = Be.call(e, h, u, 'get', s[u], w, I, 0, T.stringFilter));
            e._op && e._op[l] && e.kill(h, e._op[l]), W && e._pt && ((Fe = e), a.killTweensOf(h, y, e.globalTime(r)), (x = !e.parent), (Fe = 0)), e._pt && k && (tt[p.id] = 1);
          }
          f && or(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = E), (e._initted = (!e._op || e._pt) && !x), L && r <= 0 && X.render(v, !0, !0);
      },
      Xe = function (t, e, r, n) {
        var i,
          o,
          s = e.ease || n || 'power1.inOut';
        if (L(e))
          (o = r[t] || (r[t] = [])),
            e.forEach(function (t, r) {
              return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: s });
            });
        else for (i in e) (o = r[i] || (r[i] = [])), 'ease' === i || o.push({ t: parseFloat(t), v: e[i], e: s });
      },
      Ne = function (t, e, r, n, i) {
        return O(t) ? t.call(e, r, n, i) : M(t) && ~t.indexOf('random(') ? ie(t) : t;
      },
      He = ot + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
      Ue = {};
    ut(He + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
      return (Ue[t] = 1);
    });
    var je = (function (t) {
      function r(r, n, o, s) {
        var l;
        'number' == typeof n && ((o.duration = n), (n = o), (o = null));
        var u,
          c,
          h,
          f,
          p,
          d,
          g,
          v,
          _ = (l = t.call(this, s ? n : xt(n)) || this).vars,
          y = _.duration,
          w = _.delay,
          b = _.immediateRender,
          x = _.stagger,
          T = _.overwrite,
          S = _.keyframes,
          M = _.defaults,
          O = _.scrollTrigger,
          E = _.yoyoEase,
          C = n.parent || a,
          D = (L(r) || z(r) ? k(r[0]) : 'length' in n) ? [r] : Jt(r);
        if (((l._targets = D.length ? st(D) : j('GSAP target ' + r + ' not found. https://greensock.com', !m.nullTargetWarn) || []), (l._ptLookup = []), (l._overwrite = T), S || x || R(y) || R(w))) {
          if (((n = l.vars), (u = l.timeline = new De({ data: 'nested', defaults: M || {}, targets: C && 'nested' === C.data ? C.vars.targets : D })).kill(), (u.parent = u._dp = e(l)), (u._start = 0), x || R(y) || R(w))) {
            if (((f = D.length), (g = x && Zt(x)), A(x))) for (p in x) ~He.indexOf(p) && (v || (v = {}), (v[p] = x[p]));
            for (c = 0; c < f; c++)
              ((h = bt(n, Ue)).stagger = 0),
                E && (h.yoyoEase = E),
                v && yt(h, v),
                (d = D[c]),
                (h.duration = +Ne(y, e(l), c, d, D)),
                (h.delay = (+Ne(w, e(l), c, d, D) || 0) - l._delay),
                !x && 1 === f && h.delay && ((l._delay = w = h.delay), (l._start += w), (h.delay = 0)),
                u.to(d, h, g ? g(c, d, D) : 0),
                (u._ease = xe.none);
            u.duration() ? (y = w = 0) : (l.timeline = 0);
          } else if (S) {
            xt(_t(u.vars.defaults, { ease: 'none' })), (u._ease = Ee(S.ease || n.ease || 'none'));
            var F,
              q,
              Y,
              B = 0;
            if (L(S))
              S.forEach(function (t) {
                return u.to(D, t, '>');
              }),
                u.duration();
            else {
              for (p in ((h = {}), S)) 'ease' === p || 'easeEach' === p || Xe(p, S[p], h, S.easeEach);
              for (p in h)
                for (
                  F = h[p].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    B = 0,
                    c = 0;
                  c < F.length;
                  c++
                )
                  ((Y = { ease: (q = F[c]).e, duration: ((q.t - (c ? F[c - 1].t : 0)) / 100) * y })[p] = q.v), u.to(D, Y, B), (B += Y.duration);
              u.duration() < y && u.to({}, { duration: y - u.duration() });
            }
          }
          y || l.duration((y = u.duration()));
        } else l.timeline = 0;
        return (
          !0 !== T || i || ((Fe = e(l)), a.killTweensOf(D), (Fe = 0)),
          Dt(C, e(l), o),
          n.reversed && l.reverse(),
          n.paused && l.paused(!0),
          (b || (!y && !S && l._start === ht(C._time) && P(b) && Et(e(l)) && 'nested' !== C.data)) && ((l._tTime = -1e-8), l.render(Math.max(0, -w) || 0)),
          O && Ft(e(l), O),
          l
        );
      }
      n(r, t);
      var s = r.prototype;
      return (
        (s.render = function (t, e, r) {
          var n,
            i,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            p = this._time,
            d = this._tDur,
            m = this._dur,
            g = t < 0,
            v = t > d - _ && !g ? d : t < _ ? 0 : t;
          if (m) {
            if (v !== this._tTime || !t || r || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== g)) {
              if (((n = v), (h = this.timeline), this._repeat)) {
                if (((a = m + this._rDelay), this._repeat < -1 && g)) return this.totalTime(100 * a + t, e, r);
                if (((n = ht(v % a)), v === d ? ((s = this._repeat), (n = m)) : ((s = ~~(v / a)) && s === v / a && ((n = m), s--), n > m && (n = m)), (u = this._yoyo && 1 & s) && ((f = this._yEase), (n = m - n)), (l = Pt(this._tTime, a)), n === p && !r && this._initted))
                  return (this._tTime = v), this;
                s !== l && (h && this._yEase && ke(h, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(ht(a * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (qt(this, g ? t : n, r, e, v)) return (this._tTime = 0), this;
                if (p !== this._time) return this;
                if (m !== this._dur) return this.render(t, e, r);
              }
              if (((this._tTime = v), (this._time = n), !this._act && this._ts && ((this._act = 1), (this._lazy = 0)), (this.ratio = c = (f || this._ease)(n / m)), this._from && (this.ratio = c = 1 - c), n && !p && !e && !s && (ae(this, 'onStart'), this._tTime !== v))) return this;
              for (i = this._pt; i; ) i.r(c, i.d), (i = i._next);
              (h && h.render(t < 0 ? t : !n && u ? -1e-8 : h._dur * h._ease(n / this._dur), e, r)) || (this._startAt && (this._zTime = t)),
                this._onUpdate && !e && (g && kt(this, t, 0, r), ae(this, 'onUpdate')),
                this._repeat && s !== l && this.vars.onRepeat && !e && this.parent && ae(this, 'onRepeat'),
                (v !== this._tDur && v) ||
                  this._tTime !== v ||
                  (g && !this._onUpdate && kt(this, t, 0, !0),
                  (t || !m) && ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) && Mt(this, 1),
                  e || (g && !p) || !(v || p || u) || (ae(this, v === d ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(v < d && this.timeScale() > 0) && this._prom()));
            }
          } else
            !(function (t, e, r, n) {
              var i,
                s,
                a,
                l = t.ratio,
                u = e < 0 || (!e && ((!t._start && Yt(t) && (t._initted || !Bt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !Bt(t)))) ? 0 : 1,
                c = t._rDelay,
                h = 0;
              if ((c && t._repeat && ((h = jt(0, t._tDur, e)), (s = Pt(h, c)), t._yoyo && 1 & s && (u = 1 - u), s !== Pt(t._tTime, c) && ((l = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())), u !== l || o || n || t._zTime === _ || (!e && t._zTime))) {
                if (!t._initted && qt(t, e, n, r, h)) return;
                for (a = t._zTime, t._zTime = e || (r ? _ : 0), r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, i = t._pt; i; ) i.r(u, i.d), (i = i._next);
                e < 0 && kt(t, e, 0, !0), t._onUpdate && !r && ae(t, 'onUpdate'), h && t._repeat && !r && t.parent && ae(t, 'onRepeat'), (e >= t._tDur || e < 0) && t.ratio === u && (u && Mt(t, 1), r || o || (ae(t, u ? 'onComplete' : 'onReverseComplete', !0), t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (s.targets = function () {
          return this._targets;
        }),
        (s.invalidate = function (e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e);
        }),
        (s.resetTo = function (t, e, r, n) {
          d || we.wake(), this._ts || this.play();
          var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return (
            this._initted || We(this, i),
            (function (t, e, r, n, i, o, s) {
              var a,
                l,
                u,
                c,
                h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
              if (!h)
                for (h = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--; ) {
                  if ((a = u[c][e]) && a.d && a.d._pt) for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                  if (!a) return (qe = 1), (t.vars[e] = '+=0'), We(t, s), (qe = 0), 1;
                  h.push(a);
                }
              for (c = h.length; c--; ) ((a = (l = h[c])._pt || l).s = (!n && 0 !== n) || i ? a.s + (n || 0) + o * a.c : n), (a.c = r - a.s), l.e && (l.e = ct(r) + Vt(l.e)), l.b && (l.b = a.s + Vt(l.b));
            })(this, t, e, r, n, this._ease(i / this._dur), i)
              ? this.resetTo(t, e, r, n)
              : (zt(this, 0), this.parent || Tt(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0), this.render(0))
          );
        }),
        (s.kill = function (t, e) {
          if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e)))) return (this._lazy = this._pt = 0), this.parent ? le(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || le(this), this.parent && r !== this.timeline.totalDuration() && It(this, (this._dur * this.timeline._tDur) / r, 0, 1), this;
          }
          var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = this._targets,
            h = t ? Jt(t) : c,
            f = this._ptLookup,
            p = this._pt;
          if (
            (!e || 'all' === e) &&
            (function (t, e) {
              for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; );
              return r < 0;
            })(c, h)
          )
            return 'all' === e && (this._pt = 0), le(this);
          for (
            n = this._op = this._op || [],
              'all' !== e &&
                (M(e) &&
                  ((a = {}),
                  ut(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var r,
                    n,
                    i,
                    o,
                    s = t[0] ? at(t[0]).harness : 0,
                    a = s && s.aliases;
                  if (!a) return e;
                  for (n in ((r = yt({}, e)), a)) if ((n in r)) for (i = (o = a[n].split(',')).length; i--; ) r[o[i]] = r[n];
                  return r;
                })(c, e))),
              u = c.length;
            u--;

          )
            if (~h.indexOf(c[u])) for (a in ((i = f[u]), 'all' === e ? ((n[u] = e), (s = i), (o = {})) : ((o = n[u] = n[u] || {}), (s = e)), s)) (l = i && i[a]) && (('kill' in l.d && !0 !== l.d.kill(a)) || St(this, l, '_pt'), delete i[a]), 'all' !== o && (o[a] = 1);
          return this._initted && !this._pt && p && le(this), this;
        }),
        (r.to = function (t, e) {
          return new r(t, e, arguments[2]);
        }),
        (r.from = function (t, e) {
          return Ht(1, arguments);
        }),
        (r.delayedCall = function (t, e, n, i) {
          return new r(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: i });
        }),
        (r.fromTo = function (t, e, r) {
          return Ht(2, arguments);
        }),
        (r.set = function (t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new r(t, e);
        }),
        (r.killTweensOf = function (t, e, r) {
          return a.killTweensOf(t, e, r);
        }),
        r
      );
    })(Le);
    _t(je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      ut('staggerTo,staggerFrom,staggerFromTo', function (t) {
        je[t] = function () {
          var e = new De(),
            r = Gt.call(arguments, 0);
          return r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r);
        };
      });
    var Ve = function (t, e, r) {
        return (t[e] = r);
      },
      Ge = function (t, e, r) {
        return t[e](r);
      },
      Ke = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      Je = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      Qe = function (t, e) {
        return O(t[e]) ? Ge : E(t[e]) && t.setAttribute ? Je : Ve;
      },
      $e = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      Ze = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      tr = function (t, e) {
        var r = e._pt,
          n = '';
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; ) (n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n), (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      er = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      rr = function (t, e, r, n) {
        for (var i, o = this._pt; o; ) (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
      },
      nr = function (t) {
        for (var e, r, n = this._pt; n; ) (r = n._next), (n.p === t && !n.op) || n.op === t ? St(this, n, '_pt') : n.dep || (e = 1), (n = r);
        return !e;
      },
      ir = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      or = function (t) {
        for (var e, r, n, i, o = t._pt; o; ) {
          for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
          (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o), (o._next = r) ? (r._prev = o) : (i = o), (o = e);
        }
        t._pt = n;
      },
      sr = (function () {
        function t(t, e, r, n, i, o, s, a, l) {
          (this.t = e), (this.s = n), (this.c = i), (this.p = r), (this.r = o || $e), (this.d = s || this), (this.set = a || Ve), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set), (this.set = ir), (this.m = t), (this.mt = r), (this.tween = e);
          }),
          t
        );
      })();
    ut(ot + 'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger', function (t) {
      return ($[t] = 1);
    }),
      (X.TweenMax = X.TweenLite = je),
      (X.TimelineLite = X.TimelineMax = De),
      (a = new De({ sortChildren: !1, defaults: g, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 })),
      (m.stringFilter = ye);
    var ar = [],
      lr = {},
      ur = [],
      cr = 0,
      hr = 0,
      fr = function (t) {
        return (lr[t] || ur).map(function (t) {
          return t();
        });
      },
      pr = function () {
        var t = Date.now(),
          e = [];
        t - cr > 2 &&
          (fr('matchMediaInit'),
          ar.forEach(function (t) {
            var r,
              n,
              i,
              o,
              s = t.queries,
              a = t.conditions;
            for (n in s) (r = l.matchMedia(s[n]).matches) && (i = 1), r !== a[n] && ((a[n] = r), (o = 1));
            o && (t.revert(), i && e.push(t));
          }),
          fr('matchMediaRevert'),
          e.forEach(function (t) {
            return t.onMatch(t);
          }),
          (cr = t),
          fr('matchMedia'));
      },
      dr = (function () {
        function t(t, e) {
          (this.selector = e && Qt(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = hr++), t && this.add(t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            O(t) && ((r = e), (e = t), (t = O));
            var n = this,
              i = function () {
                var t,
                  i = s,
                  o = n.selector;
                return i && i !== n && i.data.push(n), r && (n.selector = Qt(r)), (s = n), (t = e.apply(n, arguments)), O(t) && n._r.push(t), (s = i), (n.selector = o), (n.isReverted = !1), t;
              };
            return (n.last = i), t === O ? i(n) : t ? (n[t] = i) : i;
          }),
          (e.ignore = function (t) {
            var e = s;
            (s = null), t(this), (s = e);
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof je && !(r.parent && 'nested' === r.parent.data) && e.push(r);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var r = this;
            if (t) {
              var n = this.getTweens();
              this.data.forEach(function (t) {
                'isFlip' === t.data &&
                  (t.revert(),
                  t.getChildren(!0, !0, !1).forEach(function (t) {
                    return n.splice(n.indexOf(t), 1);
                  }));
              }),
                n
                  .map(function (t) {
                    return { g: t.globalTime(0), t: t };
                  })
                  .sort(function (t, e) {
                    return e.g - t.g || -1 / 0;
                  })
                  .forEach(function (e) {
                    return e.t.revert(t);
                  }),
                this.data.forEach(function (e) {
                  return !(e instanceof je) && e.revert && e.revert(t);
                }),
                this._r.forEach(function (e) {
                  return e(t, r);
                }),
                (this.isReverted = !0);
            } else
              this.data.forEach(function (t) {
                return t.kill && t.kill();
              });
            if ((this.clear(), e)) for (var i = ar.length; i--; ) ar[i].id === this.id && ar.splice(i, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      mr = (function () {
        function t(t) {
          (this.contexts = []), (this.scope = t);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            A(t) || (t = { matches: t });
            var n,
              i,
              o,
              a = new dr(0, r || this.scope),
              u = (a.conditions = {});
            for (i in (s && !a.selector && (a.selector = s.selector), this.contexts.push(a), (e = a.add('onMatch', e)), (a.queries = t), t))
              'all' === i ? (o = 1) : (n = l.matchMedia(t[i])) && (ar.indexOf(a) < 0 && ar.push(a), (u[i] = n.matches) && (o = 1), n.addListener ? n.addListener(pr) : n.addEventListener('change', pr));
            return o && e(a), this;
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      gr = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          e.forEach(function (t) {
            return ce(t);
          });
        },
        timeline: function (t) {
          return new De(t);
        },
        getTweensOf: function (t, e) {
          return a.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, n) {
          M(t) && (t = Jt(t)[0]);
          var i = at(t || {}).get,
            o = r ? vt : gt;
          return (
            'native' === r && (r = ''),
            t
              ? e
                ? o(((et[e] && et[e].get) || i)(t, e, r, n))
                : function (e, r, n) {
                    return o(((et[e] && et[e].get) || i)(t, e, r, n));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = Jt(t)).length > 1) {
            var n = t.map(function (t) {
                return yr.quickSetter(t, e, r);
              }),
              i = n.length;
            return function (t) {
              for (var e = i; e--; ) n[e](t);
            };
          }
          t = t[0] || {};
          var o = et[e],
            s = at(t),
            a = (s.harness && (s.harness.aliases || {})[e]) || e,
            l = o
              ? function (e) {
                  var n = new o();
                  (p._pt = 0), n.init(t, r ? e + r : e, p, 0, [t]), n.render(1, n), p._pt && er(1, p);
                }
              : s.set(t, a);
          return o
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, s, 1);
              };
        },
        quickTo: function (t, e, r) {
          var n,
            i = yr.to(t, yt((((n = {})[e] = '+=0.1'), (n.paused = !0), n), r || {})),
            o = function (t, r, n) {
              return i.resetTo(e, t, r, n);
            };
          return (o.tween = i), o;
        },
        isTweening: function (t) {
          return a.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Ee(t.ease, g.ease)), wt(g, t || {});
        },
        config: function (t) {
          return wt(m, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            o = t.extendTimeline;
          (n || '').split(',').forEach(function (t) {
            return t && !et[t] && !X[t] && j(e + ' effect requires ' + t + ' plugin.');
          }),
            (rt[e] = function (t, e, n) {
              return r(Jt(t), _t(e || {}, i), n);
            }),
            o &&
              (De.prototype[e] = function (t, r, n) {
                return this.add(rt[e](t, A(r) ? r : (n = r) && {}, this), n);
              });
        },
        registerEase: function (t, e) {
          xe[t] = Ee(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Ee(t, e) : xe;
        },
        getById: function (t) {
          return a.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            i = new De(t);
          for (i.smoothChildTiming = P(t.smoothChildTiming), a.remove(i), i._dp = 0, i._time = i._tTime = a._time, r = a._first; r; ) (n = r._next), (!e && !r._dur && r instanceof je && r.vars.onComplete === r._targets[0]) || Dt(i, r, r._start - r._delay), (r = n);
          return Dt(a, i, 0), i;
        },
        context: function (t, e) {
          return t ? new dr(t, e) : s;
        },
        matchMedia: function (t) {
          return new mr(t);
        },
        matchMediaRefresh: function () {
          return (
            ar.forEach(function (t) {
              var e,
                r,
                n = t.conditions;
              for (r in n) n[r] && ((n[r] = !1), (e = 1));
              e && t.revert();
            }) || pr()
          );
        },
        addEventListener: function (t, e) {
          var r = lr[t] || (lr[t] = []);
          ~r.indexOf(e) || r.push(e);
        },
        removeEventListener: function (t, e) {
          var r = lr[t],
            n = r && r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        },
        utils: {
          wrap: function t(e, r, n) {
            var i = r - e;
            return L(e)
              ? ne(e, t(0, e.length), r)
              : Ut(n, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, r, n) {
            var i = r - e,
              o = 2 * i;
            return L(e)
              ? ne(e, t(0, e.length - 1), r)
              : Ut(n, function (t) {
                  return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
                });
          },
          distribute: Zt,
          random: re,
          snap: ee,
          normalize: function (t, e, r) {
            return oe(t, e, 0, 1, r);
          },
          getUnit: Vt,
          clamp: function (t, e, r) {
            return Ut(r, function (r) {
              return jt(t, e, r);
            });
          },
          splitColor: de,
          toArray: Jt,
          selector: Qt,
          mapRange: oe,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || Vt(r));
            };
          },
          interpolate: function t(e, r, n, i) {
            var o = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!o) {
              var s,
                a,
                l,
                u,
                c,
                h = M(e),
                f = {};
              if ((!0 === n && (i = 1) && (n = null), h)) (e = { p: e }), (r = { p: r });
              else if (L(e) && !L(r)) {
                for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                u--,
                  (o = function (t) {
                    t *= u;
                    var e = Math.min(c, ~~t);
                    return l[e](t - e);
                  }),
                  (n = r);
              } else i || (e = yt(L(e) ? [] : {}, e));
              if (!l) {
                for (s in r) Be.call(f, e, s, 'get', r[s]);
                o = function (t) {
                  return er(t, f) || (h ? e.p : e);
                };
              }
            }
            return Ut(n, o);
          },
          shuffle: $t,
        },
        install: H,
        effects: rt,
        ticker: we,
        updateRoot: De.updateRoot,
        plugins: et,
        globalTimeline: a,
        core: {
          PropTween: sr,
          globals: V,
          Tween: je,
          Timeline: De,
          Animation: Le,
          getCache: at,
          _removeLinkedListItem: St,
          reverting: function () {
            return o;
          },
          context: function (t) {
            return t && s && (s.data.push(t), (t._ctx = s)), s;
          },
          suppressOverwrites: function (t) {
            return (i = t);
          },
        },
      };
    ut('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
      return (gr[t] = je[t]);
    }),
      we.add(De.updateRoot),
      (p = gr.to({}, { duration: 0 }));
    var vr = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
        return r;
      },
      _r = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (M(r) &&
                  ((n = {}),
                  ut(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  o = t._targets;
                for (r in e) for (n = o.length; n--; ) (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = vr(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r));
              })(t, r);
            };
          },
        };
      },
      yr =
        gr.registerPlugin(
          {
            name: 'attr',
            init: function (t, e, r, n, i) {
              var o, s, a;
              for (o in ((this.tween = r), e)) (a = t.getAttribute(o) || ''), ((s = this.add(t, 'setAttribute', (a || 0) + '', e[o], n, i, 0, 0, o)).op = o), (s.b = a), this._props.push(o);
            },
            render: function (t, e) {
              for (var r = e._pt; r; ) o ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
            },
          },
          {
            name: 'endArray',
            init: function (t, e) {
              for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
            },
          },
          _r('roundProps', te),
          _r('modifiers'),
          _r('snap', ee)
        ) || gr;
    function wr(t) {
      return (
        (wr =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              }),
        wr(t)
      );
    }
    (je.version = De.version = yr.version = '3.12.2'), (h = 1), C() && be(), xe.Power0, xe.Power1, xe.Power2, xe.Power3, xe.Power4, xe.Linear, xe.Quad, xe.Cubic, xe.Quart, xe.Quint, xe.Strong, xe.Elastic, xe.Back, xe.SteppedEase, xe.Bounce, xe.Sine, xe.Expo, xe.Circ;
    var br,
      xr,
      Tr,
      Sr,
      Mr,
      Or,
      kr,
      Er,
      Ar = {},
      Pr = 180 / Math.PI,
      Cr = Math.PI / 180,
      Rr = Math.atan2,
      zr = /([A-Z])/g,
      Lr = /(left|right|width|margin|padding|x)/i,
      Dr = /[\s,\(]\S/,
      Fr = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
      qr = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
      },
      Yr = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
      },
      Br = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
      },
      Ir = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Wr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Xr = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      Nr = function (t, e, r) {
        return (t.style[e] = r);
      },
      Hr = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      Ur = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      jr = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      Vr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
      },
      Gr = function (t, e, r, n, i) {
        var o = t._gsap;
        (o[e] = r), o.renderTransform(i, o);
      },
      Kr = 'transform',
      Jr = Kr + 'Origin',
      Qr = function t(e, r) {
        var n = this,
          i = this.target,
          o = i.style;
        if (e in Ar && o) {
          if (((this.tfm = this.tfm || {}), 'transform' === e))
            return Fr.transform.split(',').forEach(function (e) {
              return t.call(n, e, r);
            });
          if (
            (~(e = Fr[e] || e).indexOf(',')
              ? e.split(',').forEach(function (t) {
                  return (n.tfm[t] = gn(i, t));
                })
              : (this.tfm[e] = i._gsap.x ? i._gsap[e] : gn(i, e)),
            this.props.indexOf(Kr) >= 0)
          )
            return;
          i._gsap.svg && ((this.svgo = i.getAttribute('data-svg-origin')), this.props.push(Jr, r, '')), (e = Kr);
        }
        (o || r) && this.props.push(e, r, o[e]);
      },
      $r = function (t) {
        t.translate && (t.removeProperty('translate'), t.removeProperty('scale'), t.removeProperty('rotate'));
      },
      Zr = function () {
        var t,
          e,
          r = this.props,
          n = this.target,
          i = n.style,
          o = n._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? (n[r[t]] = r[t + 2]) : r[t + 2] ? (i[r[t]] = r[t + 2]) : i.removeProperty('--' === r[t].substr(0, 2) ? r[t] : r[t].replace(zr, '-$1').toLowerCase());
        if (this.tfm) {
          for (e in this.tfm) o[e] = this.tfm[e];
          o.svg && (o.renderTransform(), n.setAttribute('data-svg-origin', this.svgo || '')), ((t = kr()) && t.isStart) || i[Kr] || ($r(i), (o.uncache = 1));
        }
      },
      tn = function (t, e) {
        var r = { target: t, props: [], revert: Zr, save: Qr };
        return (
          t._gsap || yr.core.getCache(t),
          e &&
            e.split(',').forEach(function (t) {
              return r.save(t);
            }),
          r
        );
      },
      en = function (t, e) {
        var r = xr.createElementNS ? xr.createElementNS((e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), t) : xr.createElement(t);
        return r.style ? r : xr.createElement(t);
      },
      rn = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(zr, '-$1').toLowerCase()) || i.getPropertyValue(r) || (!n && t(e, on(r) || r, 1)) || '';
      },
      nn = 'O,Moz,ms,Ms,Webkit'.split(','),
      on = function (t, e, r) {
        var n = (e || Mr).style,
          i = 5;
        if (t in n && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(nn[i] + t in n); );
        return i < 0 ? null : (3 === i ? 'ms' : i >= 0 ? nn[i] : '') + t;
      },
      sn = function () {
        'undefined' != typeof window &&
          window.document &&
          ((br = window),
          (xr = br.document),
          (Tr = xr.documentElement),
          (Mr = en('div') || { style: {} }),
          en('div'),
          (Kr = on(Kr)),
          (Jr = Kr + 'Origin'),
          (Mr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
          (Er = !!on('perspective')),
          (kr = yr.core.reverting),
          (Sr = 1));
      },
      an = function t(e) {
        var r,
          n = en('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
          i = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if ((Tr.appendChild(n), n.appendChild(this), (this.style.display = 'block'), e))
          try {
            (r = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Tr.removeChild(n), (this.style.cssText = s), r;
      },
      ln = function (t, e) {
        for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      un = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = an.call(t, !0);
        }
        return (e && (e.width || e.height)) || t.getBBox === an || (e = an.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +ln(t, ['x', 'cx', 'x1']) || 0, y: +ln(t, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 };
      },
      cn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !un(t));
      },
      hn = function (t, e) {
        if (e) {
          var r = t.style;
          e in Ar && e !== Jr && (e = Kr), r.removeProperty ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) || (e = '-' + e), r.removeProperty(e.replace(zr, '-$1').toLowerCase())) : r.removeAttribute(e);
        }
      },
      fn = function (t, e, r, n, i, o) {
        var s = new sr(t._pt, e, r, 0, 1, o ? Xr : Wr);
        return (t._pt = s), (s.b = n), (s.e = i), t._props.push(r), s;
      },
      pn = { deg: 1, rad: 1, turn: 1 },
      dn = { grid: 1, flex: 1 },
      mn = function t(e, r, n, i) {
        var o,
          s,
          a,
          l,
          u = parseFloat(n) || 0,
          c = (n + '').trim().substr((u + '').length) || 'px',
          h = Mr.style,
          f = Lr.test(r),
          p = 'svg' === e.tagName.toLowerCase(),
          d = (p ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
          m = 100,
          g = 'px' === i,
          v = '%' === i;
        return i === c || !u || pn[i] || pn[c]
          ? u
          : ('px' !== c && !g && (u = t(e, r, n, 'px')),
            (l = e.getCTM && cn(e)),
            (!v && '%' !== c) || (!Ar[r] && !~r.indexOf('adius'))
              ? ((h[f ? 'width' : 'height'] = m + (g ? c : i)),
                (s = ~r.indexOf('adius') || ('em' === i && e.appendChild && !p) ? e : e.parentNode),
                l && (s = (e.ownerSVGElement || {}).parentNode),
                (s && s !== xr && s.appendChild) || (s = xr.body),
                (a = s._gsap) && v && a.width && f && a.time === we.time && !a.uncache
                  ? ct((u / a.width) * m)
                  : ((v || '%' === c) && !dn[rn(s, 'display')] && (h.position = rn(e, 'position')),
                    s === e && (h.position = 'static'),
                    s.appendChild(Mr),
                    (o = Mr[d]),
                    s.removeChild(Mr),
                    (h.position = 'absolute'),
                    f && v && (((a = at(s)).time = we.time), (a.width = s[d])),
                    ct(g ? (o * u) / m : o && u ? (m / o) * u : 0)))
              : ((o = l ? e.getBBox()[f ? 'width' : 'height'] : e[d]), ct(v ? (u / o) * m : (u / 100) * o)));
      },
      gn = function (t, e, r, n) {
        var i;
        return (
          Sr || sn(),
          e in Fr && 'transform' !== e && ~(e = Fr[e]).indexOf(',') && (e = e.split(',')[0]),
          Ar[e] && 'transform' !== e
            ? ((i = kn(t, n)), (i = 'transformOrigin' !== e ? i[e] : i.svg ? i.origin : En(rn(t, Jr)) + ' ' + i.zOrigin + 'px'))
            : (!(i = t.style[e]) || 'auto' === i || n || ~(i + '').indexOf('calc(')) && (i = (wn[e] && wn[e](t, e, r)) || rn(t, e) || lt(t, e) || ('opacity' === e ? 1 : 0)),
          r && !~(i + '').trim().indexOf(' ') ? mn(t, e, i, r) + r : i
        );
      },
      vn = function (t, e, r, n) {
        if (!r || 'none' === r) {
          var i = on(e, t, 1),
            o = i && rn(t, i, 1);
          o && o !== r ? ((e = i), (r = o)) : 'borderColor' === e && (r = rn(t, 'borderTopColor'));
        }
        var s,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          g,
          v,
          _ = new sr(this._pt, t.style, e, 0, 1, tr),
          y = 0,
          w = 0;
        if (((_.b = r), (_.e = n), (r += ''), 'auto' == (n += '') && ((t.style[e] = n), (n = rn(t, e) || n), (t.style[e] = r)), ye((s = [r, n])), (n = s[1]), (l = (r = s[0]).match(q) || []), (n.match(q) || []).length)) {
          for (; (a = q.exec(n)); )
            (f = a[0]),
              (d = n.substring(y, a.index)),
              c ? (c = (c + 1) % 5) : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) || (c = 1),
              f !== (h = l[w++] || '') &&
                ((u = parseFloat(h) || 0),
                (v = h.substr((u + '').length)),
                '=' === f.charAt(1) && (f = ft(u, f) + v),
                (p = parseFloat(f)),
                (g = f.substr((p + '').length)),
                (y = q.lastIndex - g.length),
                g || ((g = g || m.units[e] || v), y === n.length && ((n += g), (_.e += g))),
                v !== g && (u = mn(t, e, h, g) || 0),
                (_._pt = { _next: _._pt, p: d || 1 === w ? d : ',', s: u, c: p - u, m: (c && c < 4) || 'zIndex' === e ? Math.round : 0 }));
          _.c = y < n.length ? n.substring(y, n.length) : '';
        } else _.r = 'display' === e && 'none' === n ? Xr : Wr;
        return B.test(n) && (_.e = 0), (this._pt = _), _;
      },
      _n = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
      yn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            o = e.t,
            s = o.style,
            a = e.u,
            l = o._gsap;
          if ('all' === a || !0 === a) (s.cssText = ''), (n = 1);
          else for (i = (a = a.split(',')).length; --i > -1; ) (r = a[i]), Ar[r] && ((n = 1), (r = 'transformOrigin' === r ? Jr : Kr)), hn(o, r);
          n && (hn(o, Kr), l && (l.svg && o.removeAttribute('transform'), kn(o, 1), (l.uncache = 1), $r(s)));
        }
      },
      wn = {
        clearProps: function (t, e, r, n, i) {
          if ('isFromStart' !== i.data) {
            var o = (t._pt = new sr(t._pt, e, r, 0, 0, yn));
            return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
          }
        },
      },
      bn = [1, 0, 0, 1, 0, 0],
      xn = {},
      Tn = function (t) {
        return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
      },
      Sn = function (t) {
        var e = rn(t, Kr);
        return Tn(e) ? bn : e.substr(7).match(F).map(ct);
      },
      Mn = function (t, e) {
        var r,
          n,
          i,
          o,
          s = t._gsap || at(t),
          a = t.style,
          l = Sn(t);
        return s.svg && t.getAttribute('transform')
          ? '1,0,0,1,0,0' === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(',')
            ? bn
            : l
          : (l !== bn ||
              t.offsetParent ||
              t === Tr ||
              s.svg ||
              ((i = a.display), (a.display = 'block'), ((r = t.parentNode) && t.offsetParent) || ((o = 1), (n = t.nextElementSibling), Tr.appendChild(t)), (l = Sn(t)), i ? (a.display = i) : hn(t, 'display'), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Tr.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      On = function (t, e, r, n, i, o) {
        var s,
          a,
          l,
          u = t._gsap,
          c = i || Mn(t, !0),
          h = u.xOrigin || 0,
          f = u.yOrigin || 0,
          p = u.xOffset || 0,
          d = u.yOffset || 0,
          m = c[0],
          g = c[1],
          v = c[2],
          _ = c[3],
          y = c[4],
          w = c[5],
          b = e.split(' '),
          x = parseFloat(b[0]) || 0,
          T = parseFloat(b[1]) || 0;
        r
          ? c !== bn && (a = m * _ - g * v) && ((l = x * (-g / a) + T * (m / a) - (m * w - g * y) / a), (x = x * (_ / a) + T * (-v / a) + (v * w - _ * y) / a), (T = l))
          : ((x = (s = un(t)).x + (~b[0].indexOf('%') ? (x / 100) * s.width : x)), (T = s.y + (~(b[1] || b[0]).indexOf('%') ? (T / 100) * s.height : T))),
          n || (!1 !== n && u.smooth) ? ((y = x - h), (w = T - f), (u.xOffset = p + (y * m + w * v) - y), (u.yOffset = d + (y * g + w * _) - w)) : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = x),
          (u.yOrigin = T),
          (u.smooth = !!n),
          (u.origin = e),
          (u.originIsAbsolute = !!r),
          (t.style[Jr] = '0px 0px'),
          o && (fn(o, u, 'xOrigin', h, x), fn(o, u, 'yOrigin', f, T), fn(o, u, 'xOffset', p, u.xOffset), fn(o, u, 'yOffset', d, u.yOffset)),
          t.setAttribute('data-svg-origin', x + ' ' + T);
      },
      kn = function (t, e) {
        var r = t._gsap || new ze(t);
        if ('x' in r && !e && !r.uncache) return r;
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          g,
          v,
          _,
          y,
          w,
          b,
          x,
          T,
          S,
          M,
          O,
          k,
          E,
          A,
          P,
          C,
          R,
          z,
          L,
          D,
          F = t.style,
          q = r.scaleX < 0,
          Y = 'px',
          B = 'deg',
          I = getComputedStyle(t),
          W = rn(t, Jr) || '0';
        return (
          (n = i = o = l = u = c = h = f = p = 0),
          (s = a = 1),
          (r.svg = !(!t.getCTM || !cn(t))),
          I.translate &&
            (('none' === I.translate && 'none' === I.scale && 'none' === I.rotate) ||
              (F[Kr] =
                ('none' !== I.translate ? 'translate3d(' + (I.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') ' : '') + ('none' !== I.rotate ? 'rotate(' + I.rotate + ') ' : '') + ('none' !== I.scale ? 'scale(' + I.scale.split(' ').join(',') + ') ' : '') + ('none' !== I[Kr] ? I[Kr] : '')),
            (F.scale = F.rotate = F.translate = 'none')),
          (v = Mn(t, r.svg)),
          r.svg && (r.uncache ? ((E = t.getBBox()), (W = r.xOrigin - E.x + 'px ' + (r.yOrigin - E.y) + 'px'), (k = '')) : (k = !e && t.getAttribute('data-svg-origin')), On(t, k || W, !!k || r.originIsAbsolute, !1 !== r.smooth, v)),
          (d = r.xOrigin || 0),
          (g = r.yOrigin || 0),
          v !== bn &&
            ((b = v[0]),
            (x = v[1]),
            (T = v[2]),
            (S = v[3]),
            (n = M = v[4]),
            (i = O = v[5]),
            6 === v.length
              ? ((s = Math.sqrt(b * b + x * x)), (a = Math.sqrt(S * S + T * T)), (l = b || x ? Rr(x, b) * Pr : 0), (h = T || S ? Rr(T, S) * Pr + l : 0) && (a *= Math.abs(Math.cos(h * Cr))), r.svg && ((n -= d - (d * b + g * T)), (i -= g - (d * x + g * S))))
              : ((D = v[6]),
                (z = v[7]),
                (P = v[8]),
                (C = v[9]),
                (R = v[10]),
                (L = v[11]),
                (n = v[12]),
                (i = v[13]),
                (o = v[14]),
                (u = (_ = Rr(D, R)) * Pr),
                _ && ((k = M * (y = Math.cos(-_)) + P * (w = Math.sin(-_))), (E = O * y + C * w), (A = D * y + R * w), (P = M * -w + P * y), (C = O * -w + C * y), (R = D * -w + R * y), (L = z * -w + L * y), (M = k), (O = E), (D = A)),
                (c = (_ = Rr(-T, R)) * Pr),
                _ && ((y = Math.cos(-_)), (L = S * (w = Math.sin(-_)) + L * y), (b = k = b * y - P * w), (x = E = x * y - C * w), (T = A = T * y - R * w)),
                (l = (_ = Rr(x, b)) * Pr),
                _ && ((k = b * (y = Math.cos(_)) + x * (w = Math.sin(_))), (E = M * y + O * w), (x = x * y - b * w), (O = O * y - M * w), (b = k), (M = E)),
                u && Math.abs(u) + Math.abs(l) > 359.9 && ((u = l = 0), (c = 180 - c)),
                (s = ct(Math.sqrt(b * b + x * x + T * T))),
                (a = ct(Math.sqrt(O * O + D * D))),
                (_ = Rr(M, O)),
                (h = Math.abs(_) > 2e-4 ? _ * Pr : 0),
                (p = L ? 1 / (L < 0 ? -L : L) : 0)),
            r.svg && ((k = t.getAttribute('transform')), (r.forceCSS = t.setAttribute('transform', '') || !Tn(rn(t, Kr))), k && t.setAttribute('transform', k))),
          Math.abs(h) > 90 && Math.abs(h) < 270 && (q ? ((s *= -1), (h += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (h += h <= 0 ? 180 : -180))),
          (e = e || r.uncache),
          (r.x = n - ((r.xPercent = n && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) + Y),
          (r.y = i - ((r.yPercent = i && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * r.yPercent) / 100 : 0) + Y),
          (r.z = o + Y),
          (r.scaleX = ct(s)),
          (r.scaleY = ct(a)),
          (r.rotation = ct(l) + B),
          (r.rotationX = ct(u) + B),
          (r.rotationY = ct(c) + B),
          (r.skewX = h + B),
          (r.skewY = f + B),
          (r.transformPerspective = p + Y),
          (r.zOrigin = parseFloat(W.split(' ')[2]) || 0) && (F[Jr] = En(W)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = m.force3D),
          (r.renderTransform = r.svg ? Dn : Er ? Ln : Pn),
          (r.uncache = 0),
          r
        );
      },
      En = function (t) {
        return (t = t.split(' '))[0] + ' ' + t[1];
      },
      An = function (t, e, r) {
        var n = Vt(e);
        return ct(parseFloat(e) + parseFloat(mn(t, 'x', r + 'px', n))) + n;
      },
      Pn = function (t, e) {
        (e.z = '0px'), (e.rotationY = e.rotationX = '0deg'), (e.force3D = 0), Ln(t, e);
      },
      Cn = '0deg',
      Rn = '0px',
      zn = ') ',
      Ln = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          o = r.x,
          s = r.y,
          a = r.z,
          l = r.rotation,
          u = r.rotationY,
          c = r.rotationX,
          h = r.skewX,
          f = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          m = r.transformPerspective,
          g = r.force3D,
          v = r.target,
          _ = r.zOrigin,
          y = '',
          w = ('auto' === g && t && 1 !== t) || !0 === g;
        if (_ && (c !== Cn || u !== Cn)) {
          var b,
            x = parseFloat(u) * Cr,
            T = Math.sin(x),
            S = Math.cos(x);
          (x = parseFloat(c) * Cr), (b = Math.cos(x)), (o = An(v, o, T * b * -_)), (s = An(v, s, -Math.sin(x) * -_)), (a = An(v, a, S * b * -_ + _));
        }
        m !== Rn && (y += 'perspective(' + m + zn),
          (n || i) && (y += 'translate(' + n + '%, ' + i + '%) '),
          (w || o !== Rn || s !== Rn || a !== Rn) && (y += a !== Rn || w ? 'translate3d(' + o + ', ' + s + ', ' + a + ') ' : 'translate(' + o + ', ' + s + zn),
          l !== Cn && (y += 'rotate(' + l + zn),
          u !== Cn && (y += 'rotateY(' + u + zn),
          c !== Cn && (y += 'rotateX(' + c + zn),
          (h === Cn && f === Cn) || (y += 'skew(' + h + ', ' + f + zn),
          (1 === p && 1 === d) || (y += 'scale(' + p + ', ' + d + zn),
          (v.style[Kr] = y || 'translate(0, 0)');
      },
      Dn = function (t, e) {
        var r,
          n,
          i,
          o,
          s,
          a = e || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          h = a.y,
          f = a.rotation,
          p = a.skewX,
          d = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          _ = a.xOrigin,
          y = a.yOrigin,
          w = a.xOffset,
          b = a.yOffset,
          x = a.forceCSS,
          T = parseFloat(c),
          S = parseFloat(h);
        (f = parseFloat(f)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
          f || p
            ? ((f *= Cr),
              (p *= Cr),
              (r = Math.cos(f) * m),
              (n = Math.sin(f) * m),
              (i = Math.sin(f - p) * -g),
              (o = Math.cos(f - p) * g),
              p && ((d *= Cr), (s = Math.tan(p - d)), (i *= s = Math.sqrt(1 + s * s)), (o *= s), d && ((s = Math.tan(d)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
              (r = ct(r)),
              (n = ct(n)),
              (i = ct(i)),
              (o = ct(o)))
            : ((r = m), (o = g), (n = i = 0)),
          ((T && !~(c + '').indexOf('px')) || (S && !~(h + '').indexOf('px'))) && ((T = mn(v, 'x', c, 'px')), (S = mn(v, 'y', h, 'px'))),
          (_ || y || w || b) && ((T = ct(T + _ - (_ * r + y * i) + w)), (S = ct(S + y - (_ * n + y * o) + b))),
          (l || u) && ((s = v.getBBox()), (T = ct(T + (l / 100) * s.width)), (S = ct(S + (u / 100) * s.height))),
          (s = 'matrix(' + r + ',' + n + ',' + i + ',' + o + ',' + T + ',' + S + ')'),
          v.setAttribute('transform', s),
          x && (v.style[Kr] = s);
      },
      Fn = function (t, e, r, n, i) {
        var o,
          s,
          a = 360,
          l = M(i),
          u = parseFloat(i) * (l && ~i.indexOf('rad') ? Pr : 1) - n,
          c = n + u + 'deg';
        return (
          l && ('short' === (o = i.split('_')[1]) && (u %= a) != u % 180 && (u += u < 0 ? a : -360), 'cw' === o && u < 0 ? (u = ((u + 36e9) % a) - ~~(u / a) * a) : 'ccw' === o && u > 0 && (u = ((u - 36e9) % a) - ~~(u / a) * a)),
          (t._pt = s = new sr(t._pt, e, r, n, u, Yr)),
          (s.e = c),
          (s.u = 'deg'),
          t._props.push(r),
          s
        );
      },
      qn = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      Yn = function (t, e, r) {
        var n,
          i,
          o,
          s,
          a,
          l,
          u,
          c = qn({}, r._gsap),
          h = r.style;
        for (i in (c.svg ? ((o = r.getAttribute('transform')), r.setAttribute('transform', ''), (h[Kr] = e), (n = kn(r, 1)), hn(r, Kr), r.setAttribute('transform', o)) : ((o = getComputedStyle(r)[Kr]), (h[Kr] = e), (n = kn(r, 1)), (h[Kr] = o)), Ar))
          (o = c[i]) !== (s = n[i]) && 'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 && ((a = Vt(o) !== (u = Vt(s)) ? mn(r, i, o, u) : parseFloat(o)), (l = parseFloat(s)), (t._pt = new sr(t._pt, n, i, a, l - a, qr)), (t._pt.u = u || 0), t._props.push(i));
        qn(n, c);
      };
    ut('padding,margin,Width,Radius', function (t, e) {
      var r = 'Top',
        n = 'Right',
        i = 'Bottom',
        o = 'Left',
        s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function (r) {
          return e < 2 ? t + r : 'border' + r + t;
        });
      wn[e > 1 ? 'border' + t : t] = function (t, e, r, n, i) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return gn(t, e, r);
            })),
            5 === (a = o.join(' ')).split(o[0]).length ? o[0] : a
          );
        (o = (n + '').split(' ')),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, i);
      };
    });
    var Bn,
      In,
      Wn = {
        name: 'css',
        register: sn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            g,
            v,
            _,
            y,
            w,
            b,
            x,
            T,
            S,
            O,
            k = this._props,
            E = t.style,
            A = r.vars.startAt;
          for (h in (Sr || sn(), (this.styles = this.styles || tn(t)), (b = this.styles.props), (this.tween = r), e))
            if ('autoRound' !== h && ((s = e[h]), !et[h] || !Ie(h, e, r, n, t, i)))
              if (((u = wr(s)), (c = wn[h]), 'function' === u && (u = wr((s = s.call(r, n, t, i)))), 'string' === u && ~s.indexOf('random(') && (s = ie(s)), c)) c(this, t, h, s, r) && (w = 1);
              else if ('--' === h.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(h) + '').trim()), (s += ''), (ve.lastIndex = 0), ve.test(o) || ((f = Vt(o)), (p = Vt(s))), p ? f !== p && (o = mn(t, h, o, p) + p) : f && (s += f), this.add(E, 'setProperty', o, s, n, i, 0, 0, h), k.push(h), b.push(h, 0, E[h]);
              else if ('undefined' !== u) {
                if (
                  (A && h in A ? ((o = 'function' == typeof A[h] ? A[h].call(r, n, t, i) : A[h]), M(o) && ~o.indexOf('random(') && (o = ie(o)), Vt(o + '') || (o += m.units[h] || Vt(gn(t, h)) || ''), '=' === (o + '').charAt(1) && (o = gn(t, h))) : (o = gn(t, h)),
                  (l = parseFloat(o)),
                  (d = 'string' === u && '=' === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  h in Fr &&
                    ('autoAlpha' === h && (1 === l && 'hidden' === gn(t, 'visibility') && a && (l = 0), b.push('visibility', 0, E.visibility), fn(this, E, 'visibility', l ? 'inherit' : 'hidden', a ? 'inherit' : 'hidden', !a)),
                    'scale' !== h && 'transform' !== h && ~(h = Fr[h]).indexOf(',') && (h = h.split(',')[0])),
                  (g = h in Ar))
                )
                  if ((this.styles.save(h), v || (((_ = t._gsap).renderTransform && !e.parseTransform) || kn(t, e.parseTransform), (y = !1 !== e.smoothOrigin && _.smooth), ((v = this._pt = new sr(this._pt, E, Kr, 0, 1, _.renderTransform, _, 0, -1)).dep = 1)), 'scale' === h))
                    (this._pt = new sr(this._pt, _, 'scaleY', _.scaleY, (d ? ft(_.scaleY, d + a) : a) - _.scaleY || 0, qr)), (this._pt.u = 0), k.push('scaleY', h), (h += 'X');
                  else {
                    if ('transformOrigin' === h) {
                      b.push(Jr, 0, E[Jr]),
                        (T = void 0),
                        (S = void 0),
                        (O = void 0),
                        (S = (T = (x = s).split(' '))[0]),
                        (O = T[1] || '50%'),
                        ('top' !== S && 'bottom' !== S && 'left' !== O && 'right' !== O) || ((x = S), (S = O), (O = x)),
                        (T[0] = _n[S] || S),
                        (T[1] = _n[O] || O),
                        (s = T.join(' ')),
                        _.svg ? On(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(' ')[2]) || 0) !== _.zOrigin && fn(this, _, 'zOrigin', _.zOrigin, p), fn(this, E, h, En(o), En(s)));
                      continue;
                    }
                    if ('svgOrigin' === h) {
                      On(t, s, 1, y, 0, this);
                      continue;
                    }
                    if (h in xn) {
                      Fn(this, _, h, l, d ? ft(l, d + s) : s);
                      continue;
                    }
                    if ('smoothOrigin' === h) {
                      fn(this, _, 'smooth', _.smooth, s);
                      continue;
                    }
                    if ('force3D' === h) {
                      _[h] = s;
                      continue;
                    }
                    if ('transform' === h) {
                      Yn(this, s, t);
                      continue;
                    }
                  }
                else h in E || (h = on(h) || h);
                if (g || ((a || 0 === a) && (l || 0 === l) && !Dr.test(s) && h in E))
                  a || (a = 0),
                    (f = (o + '').substr((l + '').length)) !== (p = Vt(s) || (h in m.units ? m.units[h] : f)) && (l = mn(t, h, o, p)),
                    (this._pt = new sr(this._pt, g ? _ : E, h, l, (d ? ft(l, d + a) : a) - l, g || ('px' !== p && 'zIndex' !== h) || !1 === e.autoRound ? qr : Ir)),
                    (this._pt.u = p || 0),
                    f !== p && '%' !== p && ((this._pt.b = o), (this._pt.r = Br));
                else if (h in E) vn.call(this, t, h, o, d ? d + s : s);
                else if (h in t) this.add(t, h, o || t[h], d ? d + s : s, n, i);
                else if ('parseTransform' !== h) {
                  U(h, s);
                  continue;
                }
                g || (h in E ? b.push(h, 0, E[h]) : b.push(h, 1, o || t[h])), k.push(h);
              }
          w && or(this);
        },
        render: function (t, e) {
          if (e.tween._time || !kr()) for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: gn,
        aliases: Fr,
        getSetter: function (t, e, r) {
          var n = Fr[e];
          return n && n.indexOf(',') < 0 && (e = n), e in Ar && e !== Jr && (t._gsap.x || gn(t, 'x')) ? (r && Or === r ? ('scale' === e ? jr : Ur) : (Or = r || {}) && ('scale' === e ? Vr : Gr)) : t.style && !E(t.style[e]) ? Nr : ~e.indexOf('-') ? Hr : Qe(t, e);
        },
        core: { _removeProperty: hn, _getMatrix: Mn },
      };
    (yr.utils.checkPrefix = on),
      (yr.core.getStyleSaver = tn),
      (In = ut('x,y,z,scale,scaleX,scaleY,xPercent,yPercent' + ',' + (Bn = 'rotation,rotationX,rotationY,skewX,skewY') + ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective', function (t) {
        Ar[t] = 1;
      })),
      ut(Bn, function (t) {
        (m.units[t] = 'deg'), (xn[t] = 1);
      }),
      (Fr[In[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + Bn),
      ut('0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY', function (t) {
        var e = t.split(':');
        Fr[e[1]] = In[e[0]];
      }),
      ut('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (t) {
        m.units[t] = 'px';
      }),
      yr.registerPlugin(Wn);
    var Xn = yr.registerPlugin(Wn) || yr;
    function Nn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }
    Xn.core.Tween;
    var Hn,
      Un,
      jn,
      Vn,
      Gn,
      Kn,
      Jn,
      Qn,
      $n,
      Zn,
      ti,
      ei,
      ri,
      ni = function () {
        return Hn || ('undefined' != typeof window && (Hn = window.gsap) && Hn.registerPlugin && Hn);
      },
      ii = 1,
      oi = [],
      si = [],
      ai = [],
      li = Date.now,
      ui = function (t, e) {
        return e;
      },
      ci = function (t, e) {
        return ~ai.indexOf(t) && ai[ai.indexOf(t) + 1][e];
      },
      hi = function (t) {
        return !!~Zn.indexOf(t);
      },
      fi = function (t, e, r, n, i) {
        return t.addEventListener(e, r, { passive: !n, capture: !!i });
      },
      pi = function (t, e, r, n) {
        return t.removeEventListener(e, r, !!n);
      },
      di = 'scrollLeft',
      mi = 'scrollTop',
      gi = function () {
        return (ti && ti.isPressed) || si.cache++;
      },
      vi = function (t, e) {
        var r = function r(n) {
          if (n || 0 === n) {
            ii && (jn.history.scrollRestoration = 'manual');
            var i = ti && ti.isPressed;
            (n = r.v = Math.round(n) || (ti && ti.iOS ? 1 : 0)), t(n), (r.cacheID = si.cache), i && ui('ss', n);
          } else (e || si.cache !== r.cacheID || ui('ref')) && ((r.cacheID = si.cache), (r.v = t()));
          return r.v + r.offset;
        };
        return (r.offset = 0), t && r;
      },
      _i = {
        s: di,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: vi(function (t) {
          return arguments.length ? jn.scrollTo(t, yi.sc()) : jn.pageXOffset || Vn[di] || Gn[di] || Kn[di] || 0;
        }),
      },
      yi = {
        s: mi,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: _i,
        sc: vi(function (t) {
          return arguments.length ? jn.scrollTo(_i.sc(), t) : jn.pageYOffset || Vn[mi] || Gn[mi] || Kn[mi] || 0;
        }),
      },
      wi = function (t, e) {
        return ((e && e._ctx && e._ctx.selector) || Hn.utils.toArray)(t)[0] || ('string' == typeof t && !1 !== Hn.config().nullTargetWarn ? console.warn('Element not found:', t) : null);
      },
      bi = function (t, e) {
        var r = e.s,
          n = e.sc;
        hi(t) && (t = Vn.scrollingElement || Gn);
        var i = si.indexOf(t),
          o = n === yi.sc ? 1 : 2;
        !~i && (i = si.push(t) - 1), si[i + o] || fi(t, 'scroll', gi);
        var s = si[i + o],
          a =
            s ||
            (si[i + o] =
              vi(ci(t, r), !0) ||
              (hi(t)
                ? n
                : vi(function (e) {
                    return arguments.length ? (t[r] = e) : t[r];
                  })));
        return (a.target = t), s || (a.smooth = 'smooth' === Hn.getProperty(t, 'scrollBehavior')), a;
      },
      xi = function (t, e, r) {
        var n = t,
          i = t,
          o = li(),
          s = o,
          a = e || 50,
          l = Math.max(500, 3 * a),
          u = function (t, e) {
            var l = li();
            e || l - o > a ? ((i = n), (n = t), (s = o), (o = l)) : r ? (n += t) : (n = i + ((t - i) / (l - s)) * (o - s));
          };
        return {
          update: u,
          reset: function () {
            (i = n = r ? 0 : n), (s = o = 0);
          },
          getVelocity: function (t) {
            var e = s,
              a = i,
              c = li();
            return (t || 0 === t) && t !== n && u(t), o === s || c - s > l ? 0 : ((n + (r ? a : -a)) / ((r ? c : o) - e)) * 1e3;
          },
        };
      },
      Ti = function (t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
      },
      Si = function (t) {
        var e = Math.max.apply(Math, t),
          r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r;
      },
      Mi = function () {
        var t, e, r, n;
        ($n = Hn.core.globals().ScrollTrigger) &&
          $n.core &&
          ((t = $n.core),
          (e = t.bridge || {}),
          (r = t._scrollers),
          (n = t._proxies),
          r.push.apply(r, si),
          n.push.apply(n, ai),
          (si = r),
          (ai = n),
          (ui = function (t, r) {
            return e[t](r);
          }));
      },
      Oi = function (t) {
        return (
          (Hn = t || ni()) &&
            'undefined' != typeof document &&
            document.body &&
            ((jn = window),
            (Vn = document),
            (Gn = Vn.documentElement),
            (Kn = Vn.body),
            (Zn = [jn, Vn, Gn, Kn]),
            Hn.utils.clamp,
            (ri = Hn.core.context || function () {}),
            (Qn = 'onpointerenter' in Kn ? 'pointer' : 'mouse'),
            (Jn = ki.isTouch = jn.matchMedia && jn.matchMedia('(hover: none), (pointer: coarse)').matches ? 1 : 'ontouchstart' in jn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0),
            (ei = ki.eventTypes = ('ontouchstart' in Gn ? 'touchstart,touchmove,touchcancel,touchend' : 'onpointerdown' in Gn ? 'pointerdown,pointermove,pointercancel,pointerup' : 'mousedown,mousemove,mouseup,mouseup').split(',')),
            setTimeout(function () {
              return (ii = 0);
            }, 500),
            Mi(),
            (Un = 1)),
          Un
        );
      };
    (_i.op = yi), (si.cache = 0);
    var ki = (function () {
      function t(t) {
        this.init(t);
      }
      var e, r;
      return (
        (t.prototype.init = function (t) {
          Un || Oi(Hn) || console.warn('Please gsap.registerPlugin(Observer)'), $n || Mi();
          var e = t.tolerance,
            r = t.dragMinimum,
            n = t.type,
            i = t.target,
            o = t.lineHeight,
            s = t.debounce,
            a = t.preventDefault,
            l = t.onStop,
            u = t.onStopDelay,
            c = t.ignore,
            h = t.wheelSpeed,
            f = t.event,
            p = t.onDragStart,
            d = t.onDragEnd,
            m = t.onDrag,
            g = t.onPress,
            v = t.onRelease,
            _ = t.onRight,
            y = t.onLeft,
            w = t.onUp,
            b = t.onDown,
            x = t.onChangeX,
            T = t.onChangeY,
            S = t.onChange,
            M = t.onToggleX,
            O = t.onToggleY,
            k = t.onHover,
            E = t.onHoverEnd,
            A = t.onMove,
            P = t.ignoreCheck,
            C = t.isNormalizer,
            R = t.onGestureStart,
            z = t.onGestureEnd,
            L = t.onWheel,
            D = t.onEnable,
            F = t.onDisable,
            q = t.onClick,
            Y = t.scrollSpeed,
            B = t.capture,
            I = t.allowClicks,
            W = t.lockAxis,
            X = t.onLockAxis;
          (this.target = i = wi(i) || Gn), (this.vars = t), c && (c = Hn.utils.toArray(c)), (e = e || 1e-9), (r = r || 0), (h = h || 1), (Y = Y || 1), (n = n || 'wheel,touch,pointer'), (s = !1 !== s), o || (o = parseFloat(jn.getComputedStyle(Kn).lineHeight) || 22);
          var N,
            H,
            U,
            j,
            V,
            G,
            K,
            J = this,
            Q = 0,
            $ = 0,
            Z = bi(i, _i),
            tt = bi(i, yi),
            et = Z(),
            rt = tt(),
            nt = ~n.indexOf('touch') && !~n.indexOf('pointer') && 'pointerdown' === ei[0],
            it = hi(i),
            ot = i.ownerDocument || Vn,
            st = [0, 0, 0],
            at = [0, 0, 0],
            lt = 0,
            ut = function () {
              return (lt = li());
            },
            ct = function (t, e) {
              return ((J.event = t) && c && ~c.indexOf(t.target)) || (e && nt && 'touch' !== t.pointerType) || (P && P(t, e));
            },
            ht = function () {
              var t = (J.deltaX = Si(st)),
                r = (J.deltaY = Si(at)),
                n = Math.abs(t) >= e,
                i = Math.abs(r) >= e;
              S && (n || i) && S(J, t, r, st, at),
                n && (_ && J.deltaX > 0 && _(J), y && J.deltaX < 0 && y(J), x && x(J), M && J.deltaX < 0 != Q < 0 && M(J), (Q = J.deltaX), (st[0] = st[1] = st[2] = 0)),
                i && (b && J.deltaY > 0 && b(J), w && J.deltaY < 0 && w(J), T && T(J), O && J.deltaY < 0 != $ < 0 && O(J), ($ = J.deltaY), (at[0] = at[1] = at[2] = 0)),
                (j || U) && (A && A(J), U && (m(J), (U = !1)), (j = !1)),
                G && !(G = !1) && X && X(J),
                V && (L(J), (V = !1)),
                (N = 0);
            },
            ft = function (t, e, r) {
              (st[r] += t), (at[r] += e), J._vx.update(t), J._vy.update(e), s ? N || (N = requestAnimationFrame(ht)) : ht();
            },
            pt = function (t, e) {
              W && !K && ((J.axis = K = Math.abs(t) > Math.abs(e) ? 'x' : 'y'), (G = !0)), 'y' !== K && ((st[2] += t), J._vx.update(t, !0)), 'x' !== K && ((at[2] += e), J._vy.update(e, !0)), s ? N || (N = requestAnimationFrame(ht)) : ht();
            },
            dt = function (t) {
              if (!ct(t, 1)) {
                var e = (t = Ti(t, a)).clientX,
                  n = t.clientY,
                  i = e - J.x,
                  o = n - J.y,
                  s = J.isDragging;
                (J.x = e), (J.y = n), (s || Math.abs(J.startX - e) >= r || Math.abs(J.startY - n) >= r) && (m && (U = !0), s || (J.isDragging = !0), pt(i, o), s || (p && p(J)));
              }
            },
            mt = (J.onPress = function (t) {
              ct(t, 1) || (t && t.button) || ((J.axis = K = null), H.pause(), (J.isPressed = !0), (t = Ti(t)), (Q = $ = 0), (J.startX = J.x = t.clientX), (J.startY = J.y = t.clientY), J._vx.reset(), J._vy.reset(), fi(C ? i : ot, ei[1], dt, a, !0), (J.deltaX = J.deltaY = 0), g && g(J));
            }),
            gt = (J.onRelease = function (t) {
              if (!ct(t, 1)) {
                pi(C ? i : ot, ei[1], dt, !0);
                var e = !isNaN(J.y - J.startY),
                  r = J.isDragging && (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3),
                  n = Ti(t);
                !r &&
                  e &&
                  (J._vx.reset(),
                  J._vy.reset(),
                  a &&
                    I &&
                    Hn.delayedCall(0.08, function () {
                      if (li() - lt > 300 && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (ot.createEvent) {
                          var e = ot.createEvent('MouseEvents');
                          e.initMouseEvent('click', !0, !0, jn, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                        }
                    })),
                  (J.isDragging = J.isGesturing = J.isPressed = !1),
                  l && !C && H.restart(!0),
                  d && r && d(J),
                  v && v(J, r);
              }
            }),
            vt = function (t) {
              return t.touches && t.touches.length > 1 && (J.isGesturing = !0) && R(t, J.isDragging);
            },
            _t = function () {
              return (J.isGesturing = !1) || z(J);
            },
            yt = function (t) {
              if (!ct(t)) {
                var e = Z(),
                  r = tt();
                ft((e - et) * Y, (r - rt) * Y, 1), (et = e), (rt = r), l && H.restart(!0);
              }
            },
            wt = function (t) {
              if (!ct(t)) {
                (t = Ti(t, a)), L && (V = !0);
                var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? jn.innerHeight : 1) * h;
                ft(t.deltaX * e, t.deltaY * e, 0), l && !C && H.restart(!0);
              }
            },
            bt = function (t) {
              if (!ct(t)) {
                var e = t.clientX,
                  r = t.clientY,
                  n = e - J.x,
                  i = r - J.y;
                (J.x = e), (J.y = r), (j = !0), (n || i) && pt(n, i);
              }
            },
            xt = function (t) {
              (J.event = t), k(J);
            },
            Tt = function (t) {
              (J.event = t), E(J);
            },
            St = function (t) {
              return ct(t) || (Ti(t, a) && q(J));
            };
          (H = J._dc =
            Hn.delayedCall(u || 0.25, function () {
              J._vx.reset(), J._vy.reset(), H.pause(), l && l(J);
            }).pause()),
            (J.deltaX = J.deltaY = 0),
            (J._vx = xi(0, 50, !0)),
            (J._vy = xi(0, 50, !0)),
            (J.scrollX = Z),
            (J.scrollY = tt),
            (J.isDragging = J.isGesturing = J.isPressed = !1),
            ri(this),
            (J.enable = function (t) {
              return (
                J.isEnabled ||
                  (fi(it ? ot : i, 'scroll', gi),
                  n.indexOf('scroll') >= 0 && fi(it ? ot : i, 'scroll', yt, a, B),
                  n.indexOf('wheel') >= 0 && fi(i, 'wheel', wt, a, B),
                  ((n.indexOf('touch') >= 0 && Jn) || n.indexOf('pointer') >= 0) &&
                    (fi(i, ei[0], mt, a, B), fi(ot, ei[2], gt), fi(ot, ei[3], gt), I && fi(i, 'click', ut, !1, !0), q && fi(i, 'click', St), R && fi(ot, 'gesturestart', vt), z && fi(ot, 'gestureend', _t), k && fi(i, Qn + 'enter', xt), E && fi(i, Qn + 'leave', Tt), A && fi(i, Qn + 'move', bt)),
                  (J.isEnabled = !0),
                  t && t.type && mt(t),
                  D && D(J)),
                J
              );
            }),
            (J.disable = function () {
              J.isEnabled &&
                (oi.filter(function (t) {
                  return t !== J && hi(t.target);
                }).length || pi(it ? ot : i, 'scroll', gi),
                J.isPressed && (J._vx.reset(), J._vy.reset(), pi(C ? i : ot, ei[1], dt, !0)),
                pi(it ? ot : i, 'scroll', yt, B),
                pi(i, 'wheel', wt, B),
                pi(i, ei[0], mt, B),
                pi(ot, ei[2], gt),
                pi(ot, ei[3], gt),
                pi(i, 'click', ut, !0),
                pi(i, 'click', St),
                pi(ot, 'gesturestart', vt),
                pi(ot, 'gestureend', _t),
                pi(i, Qn + 'enter', xt),
                pi(i, Qn + 'leave', Tt),
                pi(i, Qn + 'move', bt),
                (J.isEnabled = J.isPressed = J.isDragging = !1),
                F && F(J));
            }),
            (J.kill = J.revert =
              function () {
                J.disable();
                var t = oi.indexOf(J);
                t >= 0 && oi.splice(t, 1), ti === J && (ti = 0);
              }),
            oi.push(J),
            C && hi(i) && (ti = J),
            J.enable(f);
        }),
        (e = t),
        (r = [
          {
            key: 'velocityX',
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: 'velocityY',
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && Nn(e.prototype, r),
        t
      );
    })();
    function Ei(t) {
      return (
        (Ei =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              }),
        Ei(t)
      );
    }
    (ki.version = '3.12.2'),
      (ki.create = function (t) {
        return new ki(t);
      }),
      (ki.register = Oi),
      (ki.getAll = function () {
        return oi.slice();
      }),
      (ki.getById = function (t) {
        return oi.filter(function (e) {
          return e.vars.id === t;
        })[0];
      }),
      ni() && Hn.registerPlugin(ki);
    var Ai,
      Pi,
      Ci,
      Ri,
      zi,
      Li,
      Di,
      Fi,
      qi,
      Yi,
      Bi,
      Ii,
      Wi,
      Xi,
      Ni,
      Hi,
      Ui,
      ji,
      Vi,
      Gi,
      Ki,
      Ji,
      Qi,
      $i,
      Zi,
      to,
      eo,
      ro,
      no,
      io,
      oo,
      so,
      ao,
      lo,
      uo,
      co,
      ho = 1,
      fo = Date.now,
      po = fo(),
      mo = 0,
      go = 0,
      vo = function (t, e, r) {
        var n = Co(t) && ('clamp(' === t.substr(0, 6) || t.indexOf('max') > -1);
        return (r['_' + e + 'Clamp'] = n), n ? t.substr(6, t.length - 7) : t;
      },
      _o = function (t, e) {
        return !e || (Co(t) && 'clamp(' === t.substr(0, 6)) ? t : 'clamp(' + t + ')';
      },
      yo = function t() {
        return go && requestAnimationFrame(t);
      },
      wo = function () {
        return (Xi = 1);
      },
      bo = function () {
        return (Xi = 0);
      },
      xo = function (t) {
        return t;
      },
      To = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      So = function () {
        return 'undefined' != typeof window;
      },
      Mo = function () {
        return Ai || (So() && (Ai = window.gsap) && Ai.registerPlugin && Ai);
      },
      Oo = function (t) {
        return !!~Di.indexOf(t);
      },
      ko = function (t) {
        return ('Height' === t ? oo : Ci['inner' + t]) || zi['client' + t] || Li['client' + t];
      },
      Eo = function (t) {
        return (
          ci(t, 'getBoundingClientRect') ||
          (Oo(t)
            ? function () {
                return (Is.width = Ci.innerWidth), (Is.height = oo), Is;
              }
            : function () {
                return ts(t);
              })
        );
      },
      Ao = function (t, e) {
        var r = e.s,
          n = e.d2,
          i = e.d,
          o = e.a;
        return Math.max(0, (r = 'scroll' + n) && (o = ci(t, r)) ? o() - Eo(t)()[i] : Oo(t) ? (zi[r] || Li[r]) - ko(n) : t[r] - t['offset' + n]);
      },
      Po = function (t, e) {
        for (var r = 0; r < Vi.length; r += 3) (!e || ~e.indexOf(Vi[r + 1])) && t(Vi[r], Vi[r + 1], Vi[r + 2]);
      },
      Co = function (t) {
        return 'string' == typeof t;
      },
      Ro = function (t) {
        return 'function' == typeof t;
      },
      zo = function (t) {
        return 'number' == typeof t;
      },
      Lo = function (t) {
        return 'object' === Ei(t);
      },
      Do = function (t, e, r) {
        return t && t.progress(e ? 0 : 1) && r && t.pause();
      },
      Fo = function (t, e) {
        if (t.enabled) {
          var r = e(t);
          r && r.totalTime && (t.callbackAnimation = r);
        }
      },
      qo = Math.abs,
      Yo = 'left',
      Bo = 'right',
      Io = 'bottom',
      Wo = 'width',
      Xo = 'height',
      No = 'Right',
      Ho = 'Left',
      Uo = 'Top',
      jo = 'Bottom',
      Vo = 'padding',
      Go = 'margin',
      Ko = 'Width',
      Jo = 'Height',
      Qo = 'px',
      $o = function (t) {
        return Ci.getComputedStyle(t);
      },
      Zo = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      ts = function (t, e) {
        var r = e && 'matrix(1, 0, 0, 1, 0, 0)' !== $o(t)[Ni] && Ai.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
          n = t.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
      },
      es = function (t, e) {
        var r = e.d2;
        return t['offset' + r] || t['client' + r] || 0;
      },
      rs = function (t) {
        var e,
          r = [],
          n = t.labels,
          i = t.duration();
        for (e in n) r.push(n[e] / i);
        return r;
      },
      ns = function (t) {
        var e = Ai.utils.snap(t),
          r =
            Array.isArray(t) &&
            t.slice(0).sort(function (t, e) {
              return t - e;
            });
        return r
          ? function (t, n, i) {
              var o;
              if ((void 0 === i && (i = 0.001), !n)) return e(t);
              if (n > 0) {
                for (t -= i, o = 0; o < r.length; o++) if (r[o] >= t) return r[o];
                return r[o - 1];
              }
              for (o = r.length, t += i; o--; ) if (r[o] <= t) return r[o];
              return r[0];
            }
          : function (r, n, i) {
              void 0 === i && (i = 0.001);
              var o = e(r);
              return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t);
            };
      },
      is = function (t, e, r, n) {
        return r.split(',').forEach(function (r) {
          return t(e, r, n);
        });
      },
      os = function (t, e, r, n, i) {
        return t.addEventListener(e, r, { passive: !n, capture: !!i });
      },
      ss = function (t, e, r, n) {
        return t.removeEventListener(e, r, !!n);
      },
      as = function (t, e, r) {
        (r = r && r.wheelHandler) && (t(e, 'wheel', r), t(e, 'touchmove', r));
      },
      ls = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
      us = { toggleActions: 'play', anticipatePin: 0 },
      cs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      hs = function (t, e) {
        if (Co(t)) {
          var r = t.indexOf('='),
            n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
          ~r && (t.indexOf('%') > r && (n *= e / 100), (t = t.substr(0, r - 1))), (t = n + (t in cs ? cs[t] * e : ~t.indexOf('%') ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
        }
        return t;
      },
      fs = function (t, e, r, n, i, o, s, a) {
        var l = i.startColor,
          u = i.endColor,
          c = i.fontSize,
          h = i.indent,
          f = i.fontWeight,
          p = Ri.createElement('div'),
          d = Oo(r) || 'fixed' === ci(r, 'pinType'),
          m = -1 !== t.indexOf('scroller'),
          g = d ? Li : r,
          v = -1 !== t.indexOf('start'),
          _ = v ? l : u,
          y = 'border-color:' + _ + ';font-size:' + c + ';color:' + _ + ';font-weight:' + f + ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        return (
          (y += 'position:' + ((m || a) && d ? 'fixed;' : 'absolute;')),
          (m || a || !d) && (y += (n === yi ? Bo : Io) + ':' + (o + parseFloat(h)) + 'px;'),
          s && (y += 'box-sizing:border-box;text-align:left;width:' + s.offsetWidth + 'px;'),
          (p._isStart = v),
          p.setAttribute('class', 'gsap-marker-' + t + (e ? ' marker-' + e : '')),
          (p.style.cssText = y),
          (p.innerText = e || 0 === e ? t + '-' + e : t),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p['offset' + n.op.d2]),
          ps(p, 0, n, v),
          p
        );
      },
      ps = function (t, e, r, n) {
        var i = { display: 'block' },
          o = r[n ? 'os2' : 'p2'],
          s = r[n ? 'p2' : 'os2'];
        (t._isFlipped = n), (i[r.a + 'Percent'] = n ? -100 : 0), (i[r.a] = n ? '1px' : 0), (i['border' + o + Ko] = 1), (i['border' + s + Ko] = 0), (i[r.p] = e + 'px'), Ai.set(t, i);
      },
      ds = [],
      ms = {},
      gs = function () {
        return fo() - mo > 34 && (ao || (ao = requestAnimationFrame(zs)));
      },
      vs = function () {
        (!Qi || !Qi.isPressed || Qi.startX > Li.clientWidth) && (si.cache++, Qi ? ao || (ao = requestAnimationFrame(zs)) : zs(), mo || Ts('scrollStart'), (mo = fo()));
      },
      _s = function () {
        (to = Ci.innerWidth), (Zi = Ci.innerHeight);
      },
      ys = function () {
        si.cache++, !Wi && !Ji && !Ri.fullscreenElement && !Ri.webkitFullscreenElement && (!$i || to !== Ci.innerWidth || Math.abs(Ci.innerHeight - Zi) > 0.25 * Ci.innerHeight) && Fi.restart(!0);
      },
      ws = {},
      bs = [],
      xs = function t() {
        return ss(Vs, 'scrollEnd', t) || Ps(!0);
      },
      Ts = function (t) {
        return (
          (ws[t] &&
            ws[t].map(function (t) {
              return t();
            })) ||
          bs
        );
      },
      Ss = [],
      Ms = function (t) {
        for (var e = 0; e < Ss.length; e += 5) (!t || (Ss[e + 4] && Ss[e + 4].query === t)) && ((Ss[e].style.cssText = Ss[e + 1]), Ss[e].getBBox && Ss[e].setAttribute('transform', Ss[e + 2] || ''), (Ss[e + 3].uncache = 1));
      },
      Os = function (t, e) {
        var r;
        for (Hi = 0; Hi < ds.length; Hi++) !(r = ds[Hi]) || (e && r._ctx !== e) || (t ? r.kill(1) : r.revert(!0, !0));
        e && Ms(e), e || Ts('revert');
      },
      ks = function (t, e) {
        si.cache++,
          (e || !lo) &&
            si.forEach(function (t) {
              return Ro(t) && t.cacheID++ && (t.rec = 0);
            }),
          Co(t) && (Ci.history.scrollRestoration = no = t);
      },
      Es = 0,
      As = function () {
        Li.appendChild(io), (oo = io.offsetHeight || Ci.innerHeight), Li.removeChild(io);
      },
      Ps = function (t, e) {
        if (!mo || t) {
          As(),
            (lo = Vs.isRefreshing = !0),
            si.forEach(function (t) {
              return Ro(t) && ++t.cacheID && (t.rec = t());
            });
          var r = Ts('refreshInit');
          Gi && Vs.sort(),
            e || Os(),
            si.forEach(function (t) {
              Ro(t) && (t.smooth && (t.target.style.scrollBehavior = 'auto'), t(0));
            }),
            ds.slice(0).forEach(function (t) {
              return t.refresh();
            }),
            ds.forEach(function (t, e) {
              if (t._subPinOffset && t.pin) {
                var r = t.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                  n = t.pin[r];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.refresh();
              }
            }),
            ds.forEach(function (t) {
              var e = Ao(t.scroller, t._dir);
              ('max' === t.vars.end || (t._endClamp && t.end > e)) && t.setPositions(t.start, Math.max(t.start + 1, e), !0);
            }),
            r.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
            si.forEach(function (t) {
              Ro(t) &&
                (t.smooth &&
                  requestAnimationFrame(function () {
                    return (t.target.style.scrollBehavior = 'smooth');
                  }),
                t.rec && t(t.rec));
            }),
            ks(no, 1),
            Fi.pause(),
            Es++,
            (lo = 2),
            zs(2),
            ds.forEach(function (t) {
              return Ro(t.vars.onRefresh) && t.vars.onRefresh(t);
            }),
            (lo = Vs.isRefreshing = !1),
            Ts('refresh');
        } else os(Vs, 'scrollEnd', xs);
      },
      Cs = 0,
      Rs = 1,
      zs = function (t) {
        if (!lo || 2 === t) {
          (Vs.isUpdating = !0), co && co.update(0);
          var e = ds.length,
            r = fo(),
            n = r - po >= 50,
            i = e && ds[0].scroll();
          if (((Rs = Cs > i ? -1 : 1), lo || (Cs = i), n && (mo && !Xi && r - mo > 200 && ((mo = 0), Ts('scrollEnd')), (Bi = po), (po = r)), Rs < 0)) {
            for (Hi = e; Hi-- > 0; ) ds[Hi] && ds[Hi].update(0, n);
            Rs = 1;
          } else for (Hi = 0; Hi < e; Hi++) ds[Hi] && ds[Hi].update(0, n);
          Vs.isUpdating = !1;
        }
        ao = 0;
      },
      Ls = [Yo, 'top', Io, Bo, Go + jo, Go + No, Go + Uo, Go + Ho, 'display', 'flexShrink', 'float', 'zIndex', 'gridColumnStart', 'gridColumnEnd', 'gridRowStart', 'gridRowEnd', 'gridArea', 'justifySelf', 'alignSelf', 'placeSelf', 'order'],
      Ds = Ls.concat([Wo, Xo, 'boxSizing', 'max' + Ko, 'max' + Jo, 'position', Go, Vo, Vo + Uo, Vo + No, Vo + jo, Vo + Ho]),
      Fs = function (t, e, r, n) {
        if (!t._gsap.swappedIn) {
          for (var i, o = Ls.length, s = e.style, a = t.style; o--; ) s[(i = Ls[o])] = r[i];
          (s.position = 'absolute' === r.position ? 'absolute' : 'relative'),
            'inline' === r.display && (s.display = 'inline-block'),
            (a[Io] = a[Bo] = 'auto'),
            (s.flexBasis = r.flexBasis || 'auto'),
            (s.overflow = 'visible'),
            (s.boxSizing = 'border-box'),
            (s[Wo] = es(t, _i) + Qo),
            (s[Xo] = es(t, yi) + Qo),
            (s[Vo] = a[Go] = a.top = a[Yo] = '0'),
            Ys(n),
            (a[Wo] = a['max' + Ko] = r[Wo]),
            (a[Xo] = a['max' + Jo] = r[Xo]),
            (a[Vo] = r[Vo]),
            t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)),
            (t._gsap.swappedIn = !0);
        }
      },
      qs = /([A-Z])/g,
      Ys = function (t) {
        if (t) {
          var e,
            r,
            n = t.t.style,
            i = t.length,
            o = 0;
          for ((t.t._gsap || Ai.core.getCache(t.t)).uncache = 1; o < i; o += 2) (r = t[o + 1]), (e = t[o]), r ? (n[e] = r) : n[e] && n.removeProperty(e.replace(qs, '-$1').toLowerCase());
        }
      },
      Bs = function (t) {
        for (var e = Ds.length, r = t.style, n = [], i = 0; i < e; i++) n.push(Ds[i], r[Ds[i]]);
        return (n.t = t), n;
      },
      Is = { left: 0, top: 0 },
      Ws = function (t, e, r, n, i, o, s, a, l, u, c, h, f, p) {
        Ro(t) && (t = t(a)), Co(t) && 'max' === t.substr(0, 3) && (t = h + ('=' === t.charAt(4) ? hs('0' + t.substr(3), r) : 0));
        var d,
          m,
          g,
          v = f ? f.time() : 0;
        if ((f && f.seek(0), isNaN(t) || (t = +t), zo(t))) f && (t = Ai.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), s && ps(s, r, n, !0);
        else {
          Ro(e) && (e = e(a));
          var _,
            y,
            w,
            b,
            x = (t || '0').split(' ');
          (g = wi(e, a) || Li),
            ((_ = ts(g) || {}) && (_.left || _.top)) || 'none' !== $o(g).display || ((b = g.style.display), (g.style.display = 'block'), (_ = ts(g)), b ? (g.style.display = b) : g.style.removeProperty('display')),
            (y = hs(x[0], _[n.d])),
            (w = hs(x[1] || '0', r)),
            (t = _[n.p] - l[n.p] - u + y + i - w),
            s && ps(s, w, n, r - w < 20 || (s._isStart && w > 20)),
            (r -= r - w);
        }
        if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), o)) {
          var T = t + r,
            S = o._isStart;
          (d = 'scroll' + n.d2), ps(o, T, n, (S && T > 20) || (!S && (c ? Math.max(Li[d], zi[d]) : o.parentNode[d]) <= T + 1)), c && ((l = ts(s)), c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Qo));
        }
        return f && g && ((d = ts(g)), f.seek(h), (m = ts(g)), (f._caScrollDist = d[n.p] - m[n.p]), (t = (t / f._caScrollDist) * h)), f && f.seek(v), f ? t : Math.round(t);
      },
      Xs = /(webkit|moz|length|cssText|inset)/i,
      Ns = function (t, e, r, n) {
        if (t.parentNode !== e) {
          var i,
            o,
            s = t.style;
          if (e === Li) {
            for (i in ((t._stOrig = s.cssText), (o = $o(t)))) +i || Xs.test(i) || !o[i] || 'string' != typeof s[i] || '0' === i || (s[i] = o[i]);
            (s.top = r), (s.left = n);
          } else s.cssText = t._stOrig;
          (Ai.core.getCache(t).uncache = 1), e.appendChild(t);
        }
      },
      Hs = function (t, e, r) {
        var n = e,
          i = n;
        return function (e) {
          var o = Math.round(t());
          return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && ((e = o), r && r()), (i = n), (n = e), e;
        };
      },
      Us = function (t, e, r) {
        var n = {};
        (n[e.p] = '+=' + r), Ai.set(t, n);
      },
      js = function (t, e) {
        var r = bi(t, e),
          n = '_scroll' + e.p2,
          i = function e(i, o, s, a, l) {
            var u = e.tween,
              c = o.onComplete,
              h = {};
            s = s || r();
            var f = Hs(r, s, function () {
              u.kill(), (e.tween = 0);
            });
            return (
              (l = (a && l) || 0),
              (a = a || i - s),
              u && u.kill(),
              (o[n] = i),
              (o.modifiers = h),
              (h[n] = function () {
                return f(s + a * u.ratio + l * u.ratio * u.ratio);
              }),
              (o.onUpdate = function () {
                si.cache++, zs();
              }),
              (o.onComplete = function () {
                (e.tween = 0), c && c.call(u);
              }),
              (u = e.tween = Ai.to(t, o))
            );
          };
        return (
          (t[n] = r),
          (r.wheelHandler = function () {
            return i.tween && i.tween.kill() && (i.tween = 0);
          }),
          os(t, 'wheel', r.wheelHandler),
          Vs.isTouch && os(t, 'touchmove', r.wheelHandler),
          i
        );
      },
      Vs = (function () {
        function t(e, r) {
          Pi || t.register(Ai) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), ro(this), this.init(e, r);
        }
        return (
          (t.prototype.init = function (e, r) {
            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), go)) {
              var n,
                i,
                o,
                s,
                a,
                l,
                u,
                c,
                h,
                f,
                p,
                d,
                m,
                g,
                v,
                _,
                y,
                w,
                b,
                x,
                T,
                S,
                M,
                O,
                k,
                E,
                A,
                P,
                C,
                R,
                z,
                L,
                D,
                F,
                q,
                Y,
                B,
                I,
                W,
                X,
                N,
                H,
                U = (e = Zo(Co(e) || zo(e) || e.nodeType ? { trigger: e } : e, us)),
                j = U.onUpdate,
                V = U.toggleClass,
                G = U.id,
                K = U.onToggle,
                J = U.onRefresh,
                Q = U.scrub,
                $ = U.trigger,
                Z = U.pin,
                tt = U.pinSpacing,
                et = U.invalidateOnRefresh,
                rt = U.anticipatePin,
                nt = U.onScrubComplete,
                it = U.onSnapComplete,
                ot = U.once,
                st = U.snap,
                at = U.pinReparent,
                lt = U.pinSpacer,
                ut = U.containerAnimation,
                ct = U.fastScrollEnd,
                ht = U.preventOverlaps,
                ft = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? _i : yi,
                pt = !Q && 0 !== Q,
                dt = wi(e.scroller || Ci),
                mt = Ai.core.getCache(dt),
                gt = Oo(dt),
                vt = 'fixed' === ('pinType' in e ? e.pinType : ci(dt, 'pinType') || (gt && 'fixed')),
                _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                yt = pt && e.toggleActions.split(' '),
                wt = 'markers' in e ? e.markers : us.markers,
                bt = gt ? 0 : parseFloat($o(dt)['border' + ft.p2 + Ko]) || 0,
                xt = this,
                Tt =
                  e.onRefreshInit &&
                  function () {
                    return e.onRefreshInit(xt);
                  },
                St = (function (t, e, r) {
                  var n = r.d,
                    i = r.d2,
                    o = r.a;
                  return (o = ci(t, 'getBoundingClientRect'))
                    ? function () {
                        return o()[n];
                      }
                    : function () {
                        return (e ? ko(i) : t['client' + i]) || 0;
                      };
                })(dt, gt, ft),
                Mt = (function (t, e) {
                  return !e || ~ai.indexOf(t)
                    ? Eo(t)
                    : function () {
                        return Is;
                      };
                })(dt, gt),
                Ot = 0,
                kt = 0,
                Et = 0,
                At = bi(dt, ft);
              if (
                ((xt._startClamp = xt._endClamp = !1),
                (xt._dir = ft),
                (rt *= 45),
                (xt.scroller = dt),
                (xt.scroll = ut ? ut.time.bind(ut) : At),
                (s = At()),
                (xt.vars = e),
                (r = r || e.animation),
                'refreshPriority' in e && ((Gi = 1), -9999 === e.refreshPriority && (co = xt)),
                (mt.tweenScroll = mt.tweenScroll || { top: js(dt, yi), left: js(dt, _i) }),
                (xt.tweenTo = n = mt.tweenScroll[ft.p]),
                (xt.scrubDuration = function (t) {
                  (D = zo(t) && t)
                    ? L
                      ? L.duration(t)
                      : (L = Ai.to(r, {
                          ease: 'expo',
                          totalProgress: '+=0',
                          duration: D,
                          paused: !0,
                          onComplete: function () {
                            return nt && nt(xt);
                          },
                        }))
                    : (L && L.progress(1).kill(), (L = 0));
                }),
                r && ((r.vars.lazy = !1), (r._initted && !xt.isReverted) || (!1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0)), (xt.animation = r.pause()), (r.scrollTrigger = xt), xt.scrubDuration(Q), (R = 0), G || (G = r.vars.id)),
                st &&
                  ((Lo(st) && !st.push) || (st = { snapTo: st }),
                  'scrollBehavior' in Li.style && Ai.set(gt ? [Li, zi] : dt, { scrollBehavior: 'auto' }),
                  si.forEach(function (t) {
                    return Ro(t) && t.target === (gt ? Ri.scrollingElement || zi : dt) && (t.smooth = !1);
                  }),
                  (o = Ro(st.snapTo)
                    ? st.snapTo
                    : 'labels' === st.snapTo
                    ? (function (t) {
                        return function (e) {
                          return Ai.utils.snap(rs(t), e);
                        };
                      })(r)
                    : 'labelsDirectional' === st.snapTo
                    ? ((X = r),
                      function (t, e) {
                        return ns(rs(X))(t, e.direction);
                      })
                    : !1 !== st.directional
                    ? function (t, e) {
                        return ns(st.snapTo)(t, fo() - kt < 500 ? 0 : e.direction);
                      }
                    : Ai.utils.snap(st.snapTo)),
                  (F = st.duration || { min: 0.1, max: 2 }),
                  (F = Lo(F) ? Yi(F.min, F.max) : Yi(F, F)),
                  (q = Ai.delayedCall(st.delay || D / 2 || 0.1, function () {
                    var t = At(),
                      e = fo() - kt < 500,
                      i = n.tween;
                    if (!(e || Math.abs(xt.getVelocity()) < 10) || i || Xi || Ot === t) xt.isActive && Ot !== t && q.restart(!0);
                    else {
                      var s = (t - l) / g,
                        a = r && !pt ? r.totalProgress() : s,
                        c = e ? 0 : ((a - z) / (fo() - Bi)) * 1e3 || 0,
                        h = Ai.utils.clamp(-s, 1 - s, (qo(c / 2) * c) / 0.185),
                        f = s + (!1 === st.inertia ? 0 : h),
                        p = Yi(0, 1, o(f, xt)),
                        d = Math.round(l + p * g),
                        m = st,
                        v = m.onStart,
                        _ = m.onInterrupt,
                        y = m.onComplete;
                      if (t <= u && t >= l && d !== t) {
                        if (i && !i._initted && i.data <= qo(d - t)) return;
                        !1 === st.inertia && (h = p - s),
                          n(
                            d,
                            {
                              duration: F(qo((0.185 * Math.max(qo(f - a), qo(p - a))) / c / 0.05 || 0)),
                              ease: st.ease || 'power3',
                              data: qo(d - t),
                              onInterrupt: function () {
                                return q.restart(!0) && _ && _(xt);
                              },
                              onComplete: function () {
                                xt.update(), (Ot = At()), (R = z = r && !pt ? r.totalProgress() : xt.progress), it && it(xt), y && y(xt);
                              },
                            },
                            t,
                            h * g,
                            d - t - h * g
                          ),
                          v && v(xt, n.tween);
                      }
                    }
                  }).pause())),
                G && (ms[G] = xt),
                (W = ($ = xt.trigger = wi($ || (!0 !== Z && Z))) && $._gsap && $._gsap.stRevert) && (W = W(xt)),
                (Z = !0 === Z ? $ : wi(Z)),
                Co(V) && (V = { targets: $, className: V }),
                Z &&
                  (!1 === tt || tt === Go || (tt = !(!tt && Z.parentNode && Z.parentNode.style && 'flex' === $o(Z.parentNode).display) && Vo),
                  (xt.pin = Z),
                  (i = Ai.core.getCache(Z)).spacer
                    ? (v = i.pinState)
                    : (lt && ((lt = wi(lt)) && !lt.nodeType && (lt = lt.current || lt.nativeElement), (i.spacerIsNative = !!lt), lt && (i.spacerState = Bs(lt))),
                      (i.spacer = w = lt || Ri.createElement('div')),
                      w.classList.add('pin-spacer'),
                      G && w.classList.add('pin-spacer-' + G),
                      (i.pinState = v = Bs(Z))),
                  !1 !== e.force3D && Ai.set(Z, { force3D: !0 }),
                  (xt.spacer = w = i.spacer),
                  (C = $o(Z)),
                  (O = C[tt + ft.os2]),
                  (x = Ai.getProperty(Z)),
                  (T = Ai.quickSetter(Z, ft.a, Qo)),
                  Fs(Z, w, C),
                  (y = Bs(Z))),
                wt)
              ) {
                (d = Lo(wt) ? Zo(wt, ls) : ls), (f = fs('scroller-start', G, dt, ft, d, 0)), (p = fs('scroller-end', G, dt, ft, d, 0, f)), (b = f['offset' + ft.op.d2]);
                var Pt = wi(ci(dt, 'content') || dt);
                (c = this.markerStart = fs('start', G, Pt, ft, d, b, 0, ut)),
                  (h = this.markerEnd = fs('end', G, Pt, ft, d, b, 0, ut)),
                  ut && (I = Ai.quickSetter([c, h], ft.a, Qo)),
                  vt || (ai.length && !0 === ci(dt, 'fixedMarkers')) || ((H = $o((N = gt ? Li : dt)).position), (N.style.position = 'absolute' === H || 'fixed' === H ? H : 'relative'), Ai.set([f, p], { force3D: !0 }), (E = Ai.quickSetter(f, ft.a, Qo)), (P = Ai.quickSetter(p, ft.a, Qo)));
              }
              if (ut) {
                var Ct = ut.vars.onUpdate,
                  Rt = ut.vars.onUpdateParams;
                ut.eventCallback('onUpdate', function () {
                  xt.update(0, 0, 1), Ct && Ct.apply(ut, Rt || []);
                });
              }
              if (
                ((xt.previous = function () {
                  return ds[ds.indexOf(xt) - 1];
                }),
                (xt.next = function () {
                  return ds[ds.indexOf(xt) + 1];
                }),
                (xt.revert = function (t, e) {
                  if (!e) return xt.kill(!0);
                  var n = !1 !== t || !xt.enabled,
                    i = Wi;
                  n !== xt.isReverted &&
                    (n && ((Y = Math.max(At(), xt.scroll.rec || 0)), (Et = xt.progress), (B = r && r.progress())),
                    c &&
                      [c, h, f, p].forEach(function (t) {
                        return (t.style.display = n ? 'none' : 'block');
                      }),
                    n && ((Wi = xt), xt.update(n)),
                    !Z ||
                      (at && xt.isActive) ||
                      (n
                        ? (function (t, e, r) {
                            Ys(r);
                            var n = t._gsap;
                            if (n.spacerIsNative) Ys(n.spacerState);
                            else if (t._gsap.swappedIn) {
                              var i = e.parentNode;
                              i && (i.insertBefore(t, e), i.removeChild(e));
                            }
                            t._gsap.swappedIn = !1;
                          })(Z, w, v)
                        : Fs(Z, w, $o(Z), k)),
                    n || xt.update(n),
                    (Wi = i),
                    (xt.isReverted = n));
                }),
                (xt.refresh = function (i, o, d, b) {
                  if ((!Wi && xt.enabled) || o)
                    if (Z && i && mo) os(t, 'scrollEnd', xs);
                    else {
                      !lo && Tt && Tt(xt), (Wi = xt), n.tween && !d && (n.tween.kill(), (n.tween = 0)), L && L.pause(), et && r && r.revert({ kill: !1 }).invalidate(), xt.isReverted || xt.revert(!0, !0), (xt._subPinOffset = !1);
                      var T,
                        O,
                        E,
                        P,
                        C,
                        R,
                        z,
                        D,
                        F,
                        I,
                        W,
                        X,
                        N,
                        H = St(),
                        U = Mt(),
                        j = ut ? ut.duration() : Ao(dt, ft),
                        V = g <= 0.01,
                        G = 0,
                        K = b || 0,
                        Q = Lo(d) ? d.end : e.end,
                        rt = e.endTrigger || $,
                        nt = Lo(d) ? d.start : e.start || (0 !== e.start && $ ? (Z ? '0 0' : '0 100%') : 0),
                        it = (xt.pinnedContainer = e.pinnedContainer && wi(e.pinnedContainer, xt)),
                        ot = ($ && Math.max(0, ds.indexOf(xt))) || 0,
                        st = ot;
                      for (wt && Lo(d) && ((X = Ai.getProperty(f, ft.p)), (N = Ai.getProperty(p, ft.p))); st--; )
                        (R = ds[st]).end || R.refresh(0, 1) || (Wi = xt), !(z = R.pin) || (z !== $ && z !== Z && z !== it) || R.isReverted || (I || (I = []), I.unshift(R), R.revert(!0, !0)), R !== ds[st] && (ot--, st--);
                      for (
                        Ro(nt) && (nt = nt(xt)),
                          nt = vo(nt, 'start', xt),
                          l = Ws(nt, $, H, ft, At(), c, f, xt, U, bt, vt, j, ut, xt._startClamp && '_startClamp') || (Z ? -0.001 : 0),
                          Ro(Q) && (Q = Q(xt)),
                          Co(Q) && !Q.indexOf('+=') && (~Q.indexOf(' ') ? (Q = (Co(nt) ? nt.split(' ')[0] : '') + Q) : ((G = hs(Q.substr(2), H)), (Q = Co(nt) ? nt : (ut ? Ai.utils.mapRange(0, ut.duration(), ut.scrollTrigger.start, ut.scrollTrigger.end, l) : l) + G), (rt = $))),
                          Q = vo(Q, 'end', xt),
                          u = Math.max(l, Ws(Q || (rt ? '100% 0' : j), rt, H, ft, At() + G, h, p, xt, U, bt, vt, j, ut, xt._endClamp && '_endClamp')) || -0.001,
                          G = 0,
                          st = ot;
                        st--;

                      )
                        (z = (R = ds[st]).pin) && R.start - R._pinPush <= l && !ut && R.end > 0 && ((T = R.end - (xt._startClamp ? Math.max(0, R.start) : R.start)), ((z === $ && R.start - R._pinPush < l) || z === it) && isNaN(nt) && (G += T * (1 - R.progress)), z === Z && (K += T));
                      if (
                        ((l += G),
                        (u += G),
                        xt._startClamp && (xt._startClamp += G),
                        xt._endClamp && !lo && ((xt._endClamp = u || -0.001), (u = Math.min(u, Ao(dt, ft)))),
                        (g = u - l || ((l -= 0.01) && 0.001)),
                        V && (Et = Ai.utils.clamp(0, 1, Ai.utils.normalize(l, u, Y))),
                        (xt._pinPush = K),
                        c && G && (((T = {})[ft.a] = '+=' + G), it && (T[ft.p] = '-=' + At()), Ai.set([c, h], T)),
                        Z)
                      )
                        (T = $o(Z)),
                          (P = ft === yi),
                          (E = At()),
                          (S = parseFloat(x(ft.a)) + K),
                          !j && u > 1 && ((W = { style: (W = (gt ? Ri.scrollingElement || zi : dt).style), value: W['overflow' + ft.a.toUpperCase()] }), gt && 'scroll' !== $o(Li)['overflow' + ft.a.toUpperCase()] && (W.style['overflow' + ft.a.toUpperCase()] = 'scroll')),
                          Fs(Z, w, T),
                          (y = Bs(Z)),
                          (O = ts(Z, !0)),
                          (D = vt && bi(dt, P ? _i : yi)()),
                          tt &&
                            (((k = [tt + ft.os2, g + K + Qo]).t = w),
                            (st = tt === Vo ? es(Z, ft) + g + K : 0) && k.push(ft.d, st + Qo),
                            Ys(k),
                            it &&
                              ds.forEach(function (t) {
                                t.pin === it && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0);
                              }),
                            vt && At(Y)),
                          vt &&
                            (((C = { top: O.top + (P ? E - l : D) + Qo, left: O.left + (P ? D : E - l) + Qo, boxSizing: 'border-box', position: 'fixed' })[Wo] = C['max' + Ko] = Math.ceil(O.width) + Qo),
                            (C[Xo] = C['max' + Jo] = Math.ceil(O.height) + Qo),
                            (C[Go] = C[Go + Uo] = C[Go + No] = C[Go + jo] = C[Go + Ho] = '0'),
                            (C[Vo] = T[Vo]),
                            (C[Vo + Uo] = T[Vo + Uo]),
                            (C[Vo + No] = T[Vo + No]),
                            (C[Vo + jo] = T[Vo + jo]),
                            (C[Vo + Ho] = T[Vo + Ho]),
                            (_ = (function (t, e, r) {
                              for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) (n = t[s]), i.push(n, n in e ? e[n] : t[s + 1]);
                              return (i.t = t.t), i;
                            })(v, C, at)),
                            lo && At(0)),
                          r ? ((F = r._initted), Ki(1), r.render(r.duration(), !0, !0), (M = x(ft.a) - S + g + K), (A = Math.abs(g - M) > 1), vt && A && _.splice(_.length - 2, 2), r.render(0, !0, !0), F || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Ki(0)) : (M = g),
                          W && (W.value ? (W.style['overflow' + ft.a.toUpperCase()] = W.value) : W.style.removeProperty('overflow-' + ft.a));
                      else if ($ && At() && !ut) for (O = $.parentNode; O && O !== Li; ) O._pinOffset && ((l -= O._pinOffset), (u -= O._pinOffset)), (O = O.parentNode);
                      I &&
                        I.forEach(function (t) {
                          return t.revert(!1, !0);
                        }),
                        (xt.start = l),
                        (xt.end = u),
                        (s = a = lo ? Y : At()),
                        ut || lo || (s < Y && At(Y), (xt.scroll.rec = 0)),
                        xt.revert(!1, !0),
                        (kt = fo()),
                        q && ((Ot = -1), q.restart(!0)),
                        (Wi = 0),
                        r && pt && (r._initted || B) && r.progress() !== B && r.progress(B || 0, !0).render(r.time(), !0, !0),
                        (V || Et !== xt.progress || ut) && (r && !pt && r.totalProgress(ut && l < -0.001 && !Et ? Ai.utils.normalize(l, u, 0) : Et, !0), (xt.progress = V || (s - l) / g === Et ? 0 : Et)),
                        Z && tt && (w._pinOffset = Math.round(xt.progress * M)),
                        L && L.invalidate(),
                        isNaN(X) || ((X -= Ai.getProperty(f, ft.p)), (N -= Ai.getProperty(p, ft.p)), Us(f, ft, X), Us(c, ft, X - (b || 0)), Us(p, ft, N), Us(h, ft, N - (b || 0))),
                        V && !lo && xt.update(),
                        !J || lo || m || ((m = !0), J(xt), (m = !1));
                    }
                }),
                (xt.getVelocity = function () {
                  return ((At() - a) / (fo() - Bi)) * 1e3 || 0;
                }),
                (xt.endAnimation = function () {
                  Do(xt.callbackAnimation), r && (L ? L.progress(1) : r.paused() ? pt || Do(r, xt.direction < 0, 1) : Do(r, r.reversed()));
                }),
                (xt.labelToScroll = function (t) {
                  return (r && r.labels && (l || xt.refresh() || l) + (r.labels[t] / r.duration()) * g) || 0;
                }),
                (xt.getTrailing = function (t) {
                  var e = ds.indexOf(xt),
                    r = xt.direction > 0 ? ds.slice(0, e).reverse() : ds.slice(e + 1);
                  return (
                    Co(t)
                      ? r.filter(function (e) {
                          return e.vars.preventOverlaps === t;
                        })
                      : r
                  ).filter(function (t) {
                    return xt.direction > 0 ? t.end <= l : t.start >= u;
                  });
                }),
                (xt.update = function (t, e, i) {
                  if (!ut || i || t) {
                    var o,
                      c,
                      h,
                      p,
                      d,
                      m,
                      v,
                      b = !0 === lo ? Y : xt.scroll(),
                      x = t ? 0 : (b - l) / g,
                      k = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      C = xt.progress;
                    if ((e && ((a = s), (s = ut ? At() : b), st && ((z = R), (R = r && !pt ? r.totalProgress() : k))), rt && !k && Z && !Wi && !ho && mo && l < b + ((b - a) / (fo() - Bi)) * rt && (k = 1e-4), k !== C && xt.enabled)) {
                      if (
                        ((p = (d = (o = xt.isActive = !!k && k < 1) != (!!C && C < 1)) || !!k != !!C),
                        (xt.direction = k > C ? 1 : -1),
                        (xt.progress = k),
                        p && !Wi && ((c = k && !C ? 0 : 1 === k ? 1 : 1 === C ? 2 : 3), pt && ((h = (!d && 'none' !== yt[c + 1] && yt[c + 1]) || yt[c]), (v = r && ('complete' === h || 'reset' === h || h in r)))),
                        ht &&
                          (d || v) &&
                          (v || Q || !r) &&
                          (Ro(ht)
                            ? ht(xt)
                            : xt.getTrailing(ht).forEach(function (t) {
                                return t.endAnimation();
                              })),
                        pt || (!L || Wi || ho ? r && r.totalProgress(k, !(!Wi || (!kt && !t))) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo('totalProgress', k, r._tTime / r._tDur) : ((L.vars.totalProgress = k), L.invalidate().restart()))),
                        Z)
                      )
                        if ((t && tt && (w.style[tt + ft.os2] = O), vt)) {
                          if (p) {
                            if (((m = !t && k > C && u + 1 > b && b + 1 >= Ao(dt, ft)), at))
                              if (t || (!o && !m)) Ns(Z, w);
                              else {
                                var D = ts(Z, !0),
                                  F = b - l;
                                Ns(Z, Li, D.top + (ft === yi ? F : 0) + Qo, D.left + (ft === yi ? 0 : F) + Qo);
                              }
                            Ys(o || m ? _ : y), (A && k < 1 && o) || T(S + (1 !== k || m ? 0 : M));
                          }
                        } else T(To(S + M * k));
                      st && !n.tween && !Wi && !ho && q.restart(!0),
                        V &&
                          (d || (ot && k && (k < 1 || !so))) &&
                          qi(V.targets).forEach(function (t) {
                            return t.classList[o || ot ? 'add' : 'remove'](V.className);
                          }),
                        j && !pt && !t && j(xt),
                        p && !Wi
                          ? (pt && (v && ('complete' === h ? r.pause().totalProgress(1) : 'reset' === h ? r.restart(!0).pause() : 'restart' === h ? r.restart(!0) : r[h]()), j && j(xt)),
                            (!d && so) || (K && d && Fo(xt, K), _t[c] && Fo(xt, _t[c]), ot && (1 === k ? xt.kill(!1, 1) : (_t[c] = 0)), d || (_t[(c = 1 === k ? 1 : 3)] && Fo(xt, _t[c]))),
                            ct && !o && Math.abs(xt.getVelocity()) > (zo(ct) ? ct : 2500) && (Do(xt.callbackAnimation), L ? L.progress(1) : Do(r, 'reverse' === h ? 1 : !k, 1)))
                          : pt && j && !Wi && j(xt);
                    }
                    if (P) {
                      var B = ut ? (b / ut.duration()) * (ut._caScrollDist || 0) : b;
                      E(B + (f._isFlipped ? 1 : 0)), P(B);
                    }
                    I && I((-b / ut.duration()) * (ut._caScrollDist || 0));
                  }
                }),
                (xt.enable = function (e, r) {
                  xt.enabled || ((xt.enabled = !0), os(dt, 'resize', ys), gt || os(dt, 'scroll', vs), Tt && os(t, 'refreshInit', Tt), !1 !== e && ((xt.progress = Et = 0), (s = a = Ot = At())), !1 !== r && xt.refresh());
                }),
                (xt.getTween = function (t) {
                  return t && n ? n.tween : L;
                }),
                (xt.setPositions = function (t, e, r, n) {
                  if (ut) {
                    var i = ut.scrollTrigger,
                      o = ut.duration(),
                      s = i.end - i.start;
                    (t = i.start + (s * t) / o), (e = i.start + (s * e) / o);
                  }
                  xt.refresh(!1, !1, { start: _o(t, r && !!xt._startClamp), end: _o(e, r && !!xt._endClamp) }, n), xt.update();
                }),
                (xt.adjustPinSpacing = function (t) {
                  if (k && t) {
                    var e = k.indexOf(ft.d) + 1;
                    (k[e] = parseFloat(k[e]) + t + Qo), (k[1] = parseFloat(k[1]) + t + Qo), Ys(k);
                  }
                }),
                (xt.disable = function (e, r) {
                  if (xt.enabled && (!1 !== e && xt.revert(!0, !0), (xt.enabled = xt.isActive = !1), r || (L && L.pause()), (Y = 0), i && (i.uncache = 1), Tt && ss(t, 'refreshInit', Tt), q && (q.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !gt)) {
                    for (var o = ds.length; o--; ) if (ds[o].scroller === dt && ds[o] !== xt) return;
                    ss(dt, 'resize', ys), gt || ss(dt, 'scroll', vs);
                  }
                }),
                (xt.kill = function (t, n) {
                  xt.disable(t, n), L && !n && L.kill(), G && delete ms[G];
                  var o = ds.indexOf(xt);
                  o >= 0 && ds.splice(o, 1),
                    o === Hi && Rs > 0 && Hi--,
                    (o = 0),
                    ds.forEach(function (t) {
                      return t.scroller === xt.scroller && (o = 1);
                    }),
                    o || lo || (xt.scroll.rec = 0),
                    r && ((r.scrollTrigger = null), t && r.revert({ kill: !1 }), n || r.kill()),
                    c &&
                      [c, h, f, p].forEach(function (t) {
                        return t.parentNode && t.parentNode.removeChild(t);
                      }),
                    co === xt && (co = 0),
                    Z &&
                      (i && (i.uncache = 1),
                      (o = 0),
                      ds.forEach(function (t) {
                        return t.pin === Z && o++;
                      }),
                      o || (i.spacer = 0)),
                    e.onKill && e.onKill(xt);
                }),
                ds.push(xt),
                xt.enable(!1, !1),
                W && W(xt),
                r && r.add && !g)
              ) {
                var zt = xt.update;
                (xt.update = function () {
                  (xt.update = zt), l || u || xt.refresh();
                }),
                  Ai.delayedCall(0.01, xt.update),
                  (g = 0.01),
                  (l = u = 0);
              } else xt.refresh();
              Z &&
                (function () {
                  if (uo !== Es) {
                    var t = (uo = Es);
                    requestAnimationFrame(function () {
                      return t === Es && Ps(!0);
                    });
                  }
                })();
            } else this.update = this.refresh = this.kill = xo;
          }),
          (t.register = function (e) {
            return Pi || ((Ai = e || Mo()), So() && window.document && t.enable(), (Pi = go)), Pi;
          }),
          (t.defaults = function (t) {
            if (t) for (var e in t) us[e] = t[e];
            return us;
          }),
          (t.disable = function (t, e) {
            (go = 0),
              ds.forEach(function (r) {
                return r[e ? 'kill' : 'disable'](t);
              }),
              ss(Ci, 'wheel', vs),
              ss(Ri, 'scroll', vs),
              clearInterval(Ii),
              ss(Ri, 'touchcancel', xo),
              ss(Li, 'touchstart', xo),
              is(ss, Ri, 'pointerdown,touchstart,mousedown', wo),
              is(ss, Ri, 'pointerup,touchend,mouseup', bo),
              Fi.kill(),
              Po(ss);
            for (var r = 0; r < si.length; r += 3) as(ss, si[r], si[r + 1]), as(ss, si[r], si[r + 2]);
          }),
          (t.enable = function () {
            if (
              ((Ci = window),
              (Ri = document),
              (zi = Ri.documentElement),
              (Li = Ri.body),
              Ai && ((qi = Ai.utils.toArray), (Yi = Ai.utils.clamp), (ro = Ai.core.context || xo), (Ki = Ai.core.suppressOverwrites || xo), (no = Ci.history.scrollRestoration || 'auto'), (Cs = Ci.pageYOffset), Ai.core.globals('ScrollTrigger', t), Li))
            ) {
              (go = 1),
                ((io = document.createElement('div')).style.height = '100vh'),
                (io.style.position = 'absolute'),
                As(),
                yo(),
                ki.register(Ai),
                (t.isTouch = ki.isTouch),
                (eo = ki.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                os(Ci, 'wheel', vs),
                (Di = [Ci, Ri, zi, Li]),
                Ai.matchMedia
                  ? ((t.matchMedia = function (t) {
                      var e,
                        r = Ai.matchMedia();
                      for (e in t) r.add(e, t[e]);
                      return r;
                    }),
                    Ai.addEventListener('matchMediaInit', function () {
                      return Os();
                    }),
                    Ai.addEventListener('matchMediaRevert', function () {
                      return Ms();
                    }),
                    Ai.addEventListener('matchMedia', function () {
                      Ps(0, 1), Ts('matchMedia');
                    }),
                    Ai.matchMedia('(orientation: portrait)', function () {
                      return _s(), _s;
                    }))
                  : console.warn('Requires GSAP 3.11.0 or later'),
                _s(),
                os(Ri, 'scroll', vs);
              var e,
                r,
                n = Li.style,
                i = n.borderTopStyle,
                o = Ai.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, 'revert', {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  n.borderTopStyle = 'solid',
                  e = ts(Li),
                  yi.m = Math.round(e.top + yi.sc()) || 0,
                  _i.m = Math.round(e.left + _i.sc()) || 0,
                  i ? (n.borderTopStyle = i) : n.removeProperty('border-top-style'),
                  Ii = setInterval(gs, 250),
                  Ai.delayedCall(0.5, function () {
                    return (ho = 0);
                  }),
                  os(Ri, 'touchcancel', xo),
                  os(Li, 'touchstart', xo),
                  is(os, Ri, 'pointerdown,touchstart,mousedown', wo),
                  is(os, Ri, 'pointerup,touchend,mouseup', bo),
                  Ni = Ai.utils.checkPrefix('transform'),
                  Ds.push(Ni),
                  Pi = fo(),
                  Fi = Ai.delayedCall(0.2, Ps).pause(),
                  Vi = [
                    Ri,
                    'visibilitychange',
                    function () {
                      var t = Ci.innerWidth,
                        e = Ci.innerHeight;
                      Ri.hidden ? ((Ui = t), (ji = e)) : (Ui === t && ji === e) || ys();
                    },
                    Ri,
                    'DOMContentLoaded',
                    Ps,
                    Ci,
                    'load',
                    Ps,
                    Ci,
                    'resize',
                    ys,
                  ],
                  Po(os),
                  ds.forEach(function (t) {
                    return t.enable(0, 1);
                  }),
                  r = 0;
                r < si.length;
                r += 3
              )
                as(ss, si[r], si[r + 1]), as(ss, si[r], si[r + 2]);
            }
          }),
          (t.config = function (e) {
            'limitCallbacks' in e && (so = !!e.limitCallbacks);
            var r = e.syncInterval;
            (r && clearInterval(Ii)) || ((Ii = r) && setInterval(gs, r)), 'ignoreMobileResize' in e && ($i = 1 === t.isTouch && e.ignoreMobileResize), 'autoRefreshEvents' in e && (Po(ss) || Po(os, e.autoRefreshEvents || 'none'), (Ji = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
          }),
          (t.scrollerProxy = function (t, e) {
            var r = wi(t),
              n = si.indexOf(r),
              i = Oo(r);
            ~n && si.splice(n, i ? 6 : 2), e && (i ? ai.unshift(Ci, e, Li, e, zi, e) : ai.unshift(r, e));
          }),
          (t.clearMatchMedia = function (t) {
            ds.forEach(function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
            });
          }),
          (t.isInViewport = function (t, e, r) {
            var n = (Co(t) ? wi(t) : t).getBoundingClientRect(),
              i = n[r ? Wo : Xo] * e || 0;
            return r ? n.right - i > 0 && n.left + i < Ci.innerWidth : n.bottom - i > 0 && n.top + i < Ci.innerHeight;
          }),
          (t.positionInViewport = function (t, e, r) {
            Co(t) && (t = wi(t));
            var n = t.getBoundingClientRect(),
              i = n[r ? Wo : Xo],
              o = null == e ? i / 2 : e in cs ? cs[e] * i : ~e.indexOf('%') ? (parseFloat(e) * i) / 100 : parseFloat(e) || 0;
            return r ? (n.left + o) / Ci.innerWidth : (n.top + o) / Ci.innerHeight;
          }),
          (t.killAll = function (t) {
            if (
              (ds.slice(0).forEach(function (t) {
                return 'ScrollSmoother' !== t.vars.id && t.kill();
              }),
              !0 !== t)
            ) {
              var e = ws.killAll || [];
              (ws = {}),
                e.forEach(function (t) {
                  return t();
                });
            }
          }),
          t
        );
      })();
    (Vs.version = '3.12.2'),
      (Vs.saveStyles = function (t) {
        return t
          ? qi(t).forEach(function (t) {
              if (t && t.style) {
                var e = Ss.indexOf(t);
                e >= 0 && Ss.splice(e, 5), Ss.push(t, t.style.cssText, t.getBBox && t.getAttribute('transform'), Ai.core.getCache(t), ro());
              }
            })
          : Ss;
      }),
      (Vs.revert = function (t, e) {
        return Os(!t, e);
      }),
      (Vs.create = function (t, e) {
        return new Vs(t, e);
      }),
      (Vs.refresh = function (t) {
        return t ? ys() : (Pi || Vs.register()) && Ps(!0);
      }),
      (Vs.update = function (t) {
        return ++si.cache && zs(!0 === t ? 2 : 0);
      }),
      (Vs.clearScrollMemory = ks),
      (Vs.maxScroll = function (t, e) {
        return Ao(t, e ? _i : yi);
      }),
      (Vs.getScrollFunc = function (t, e) {
        return bi(wi(t), e ? _i : yi);
      }),
      (Vs.getById = function (t) {
        return ms[t];
      }),
      (Vs.getAll = function () {
        return ds.filter(function (t) {
          return 'ScrollSmoother' !== t.vars.id;
        });
      }),
      (Vs.isScrolling = function () {
        return !!mo;
      }),
      (Vs.snapDirectional = ns),
      (Vs.addEventListener = function (t, e) {
        var r = ws[t] || (ws[t] = []);
        ~r.indexOf(e) || r.push(e);
      }),
      (Vs.removeEventListener = function (t, e) {
        var r = ws[t],
          n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1);
      }),
      (Vs.batch = function (t, e) {
        var r,
          n = [],
          i = {},
          o = e.interval || 0.016,
          s = e.batchMax || 1e9,
          a = function (t, e) {
            var r = [],
              n = [],
              i = Ai.delayedCall(o, function () {
                e(r, n), (r = []), (n = []);
              }).pause();
            return function (t) {
              r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1);
            };
          };
        for (r in e) i[r] = 'on' === r.substr(0, 2) && Ro(e[r]) && 'onRefreshInit' !== r ? a(0, e[r]) : e[r];
        return (
          Ro(s) &&
            ((s = s()),
            os(Vs, 'refresh', function () {
              return (s = e.batchMax());
            })),
          qi(t).forEach(function (t) {
            var e = {};
            for (r in i) e[r] = i[r];
            (e.trigger = t), n.push(Vs.create(e));
          }),
          n
        );
      });
    var Gs,
      Ks = function (t, e, r, n) {
        return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1;
      },
      Js = function t(e, r) {
        !0 === r ? e.style.removeProperty('touch-action') : (e.style.touchAction = !0 === r ? 'auto' : r ? 'pan-' + r + (ki.isTouch ? ' pinch-zoom' : '') : 'none'), e === zi && t(Li, r);
      },
      Qs = { auto: 1, scroll: 1 },
      $s = function (t) {
        var e,
          r = t.event,
          n = t.target,
          i = t.axis,
          o = (r.changedTouches ? r.changedTouches[0] : r).target,
          s = o._gsap || Ai.core.getCache(o),
          a = fo();
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
          for (; o && o !== Li && ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) || (!Qs[(e = $o(o)).overflowY] && !Qs[e.overflowX])); ) o = o.parentNode;
          (s._isScroll = o && o !== n && !Oo(o) && (Qs[(e = $o(o)).overflowY] || Qs[e.overflowX])), (s._isScrollT = a);
        }
        (s._isScroll || 'x' === i) && (r.stopPropagation(), (r._gsapAllow = !0));
      },
      Zs = function (t, e, r, n) {
        return ki.create({
          target: t,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: e,
          onWheel: (n = n && $s),
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: function () {
            return r && os(Ri, ki.eventTypes[0], ea, !1, !0);
          },
          onDisable: function () {
            return ss(Ri, ki.eventTypes[0], ea, !0);
          },
        });
      },
      ta = /(input|label|select|textarea)/i,
      ea = function (t) {
        var e = ta.test(t.target.tagName);
        (e || Gs) && ((t._gsapAllow = !0), (Gs = e));
      };
    (Vs.sort = function (t) {
      return ds.sort(
        t ||
          function (t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
          }
      );
    }),
      (Vs.observe = function (t) {
        return new ki(t);
      }),
      (Vs.normalizeScroll = function (t) {
        if (void 0 === t) return Qi;
        if (!0 === t && Qi) return Qi.enable();
        if (!1 === t) return Qi && Qi.kill();
        var e =
          t instanceof ki
            ? t
            : (function (t) {
                Lo(t) || (t = {}), (t.preventDefault = t.isNormalizer = t.allowClicks = !0), t.type || (t.type = 'wheel,touch'), (t.debounce = !!t.debounce), (t.id = t.id || 'normalizer');
                var e,
                  r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  u = t,
                  c = u.normalizeScrollX,
                  h = u.momentum,
                  f = u.allowNestedScroll,
                  p = u.onRelease,
                  d = wi(t.target) || zi,
                  m = Ai.core.globals().ScrollSmoother,
                  g = m && m.get(),
                  v = eo && ((t.content && wi(t.content)) || (g && !1 !== t.content && !g.smooth() && g.content())),
                  _ = bi(d, yi),
                  y = bi(d, _i),
                  w = 1,
                  b = (ki.isTouch && Ci.visualViewport ? Ci.visualViewport.scale * Ci.visualViewport.width : Ci.outerWidth) / Ci.innerWidth,
                  x = 0,
                  T = Ro(h)
                    ? function () {
                        return h(e);
                      }
                    : function () {
                        return h || 2.8;
                      },
                  S = Zs(d, t.type, !0, f),
                  M = function () {
                    return (i = !1);
                  },
                  O = xo,
                  k = xo,
                  E = function () {
                    (r = Ao(d, yi)), (k = Yi(eo ? 1 : 0, r)), c && (O = Yi(0, Ao(d, _i))), (n = Es);
                  },
                  A = function () {
                    (v._gsap.y = To(parseFloat(v._gsap.y) + _.offset) + 'px'), (v.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(v._gsap.y) + ', 0, 1)'), (_.offset = _.cacheID = 0);
                  },
                  P = function () {
                    E(), o.isActive() && o.vars.scrollY > r && (_() > r ? o.progress(1) && _(r) : o.resetTo('scrollY', r));
                  };
                return (
                  v && Ai.set(v, { y: '+=0' }),
                  (t.ignoreCheck = function (t) {
                    return (
                      (eo &&
                        'touchmove' === t.type &&
                        (function () {
                          if (i) {
                            requestAnimationFrame(M);
                            var t = To(e.deltaY / 2),
                              r = k(_.v - t);
                            if (v && r !== _.v + _.offset) {
                              _.offset = r - _.v;
                              var n = To((parseFloat(v && v._gsap.y) || 0) - _.offset);
                              (v.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + n + ', 0, 1)'), (v._gsap.y = n + 'px'), (_.cacheID = si.cache), zs();
                            }
                            return !0;
                          }
                          _.offset && A(), (i = !0);
                        })()) ||
                      (w > 1.05 && 'touchstart' !== t.type) ||
                      e.isGesturing ||
                      (t.touches && t.touches.length > 1)
                    );
                  }),
                  (t.onPress = function () {
                    i = !1;
                    var t = w;
                    (w = To(((Ci.visualViewport && Ci.visualViewport.scale) || 1) / b)), o.pause(), t !== w && Js(d, w > 1.01 || (!c && 'x')), (s = y()), (a = _()), E(), (n = Es);
                  }),
                  (t.onRelease = t.onGestureStart =
                    function (t, e) {
                      if ((_.offset && A(), e)) {
                        si.cache++;
                        var n,
                          i,
                          s = T();
                        c && ((i = (n = y()) + (0.05 * s * -t.velocityX) / 0.227), (s *= Ks(y, n, i, Ao(d, _i))), (o.vars.scrollX = O(i))),
                          (i = (n = _()) + (0.05 * s * -t.velocityY) / 0.227),
                          (s *= Ks(_, n, i, Ao(d, yi))),
                          (o.vars.scrollY = k(i)),
                          o.invalidate().duration(s).play(0.01),
                          ((eo && o.vars.scrollY >= r) || n >= r - 1) && Ai.to({}, { onUpdate: P, duration: s });
                      } else l.restart(!0);
                      p && p(t);
                    }),
                  (t.onWheel = function () {
                    o._ts && o.pause(), fo() - x > 1e3 && ((n = 0), (x = fo()));
                  }),
                  (t.onChange = function (t, e, r, i, o) {
                    if ((Es !== n && E(), e && c && y(O(i[2] === e ? s + (t.startX - t.x) : y() + e - i[1])), r)) {
                      _.offset && A();
                      var l = o[2] === r,
                        u = l ? a + t.startY - t.y : _() + r - o[1],
                        h = k(u);
                      l && u !== h && (a += h - u), _(h);
                    }
                    (r || e) && zs();
                  }),
                  (t.onEnable = function () {
                    Js(d, !c && 'x'), Vs.addEventListener('refresh', P), os(Ci, 'resize', P), _.smooth && ((_.target.style.scrollBehavior = 'auto'), (_.smooth = y.smooth = !1)), S.enable();
                  }),
                  (t.onDisable = function () {
                    Js(d, !0), ss(Ci, 'resize', P), Vs.removeEventListener('refresh', P), S.kill();
                  }),
                  (t.lockAxis = !1 !== t.lockAxis),
                  ((e = new ki(t)).iOS = eo),
                  eo && !_() && _(1),
                  eo && Ai.ticker.add(xo),
                  (l = e._dc),
                  (o = Ai.to(e, {
                    ease: 'power4',
                    paused: !0,
                    scrollX: c ? '+=0.1' : '+=0',
                    scrollY: '+=0.1',
                    modifiers: {
                      scrollY: Hs(_, _(), function () {
                        return o.pause();
                      }),
                    },
                    onUpdate: zs,
                    onComplete: l.vars.onComplete,
                  })),
                  e
                );
              })(t);
        return Qi && Qi.target === e.target && Qi.kill(), Oo(e.target) && (Qi = e), e;
      }),
      (Vs.core = {
        _getVelocityProp: xi,
        _inputObserver: Zs,
        _scrollers: si,
        _proxies: ai,
        bridge: {
          ss: function () {
            mo || Ts('scrollStart'), (mo = fo());
          },
          ref: function () {
            return Wi;
          },
        },
      }),
      Mo() && Ai.registerPlugin(Vs);
    var ra,
      na,
      ia,
      oa,
      sa,
      aa,
      la = 'redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset'.split(','),
      ua = function () {
        return 'undefined' != typeof window;
      },
      ca = function () {
        return ra || (ua() && (ra = window.gsap) && ra.registerPlugin && ra);
      },
      ha = function () {
        return oa || (ia && ia.createjs) || ia || {};
      },
      fa = function (t) {
        return console.warn(t);
      },
      pa = function (t) {
        var e = t.getBounds && t.getBounds();
        e || ((e = t.nominalBounds || { x: 0, y: 0, width: 100, height: 100 }), t.setBounds && t.setBounds(e.x, e.y, e.width, e.height)),
          t.cache && t.cache(e.x, e.y, e.width, e.height),
          fa("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + t);
      },
      da = function (t, e, r) {
        sa || (sa = ha().ColorFilter) || fa("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
        for (var n, i, o, s, a, l, u = t.filters || [], c = u.length; c--; )
          if (u[c] instanceof sa) {
            i = u[c];
            break;
          }
        if ((i || ((i = new sa()), u.push(i), (t.filters = u)), (o = i.clone()), null != e.tint))
          (n = ra.utils.splitColor(e.tint)), (s = null != e.tintAmount ? +e.tintAmount : 1), (o.redOffset = +n[0] * s), (o.greenOffset = +n[1] * s), (o.blueOffset = +n[2] * s), (o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1 - s);
        else for (a in e) 'exposure' !== a && 'brightness' !== a && (o[a] = +e[a]);
        for (
          null != e.exposure
            ? ((o.redOffset = o.greenOffset = o.blueOffset = 255 * (+e.exposure - 1)), (o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1))
            : null != e.brightness && ((s = +e.brightness - 1), (o.redOffset = o.greenOffset = o.blueOffset = s > 0 ? 255 * s : 0), (o.redMultiplier = o.greenMultiplier = o.blueMultiplier = 1 - Math.abs(s))),
            c = 8;
          c--;

        )
          i[(a = la[c])] !== o[a] && (l = r.add(i, a, i[a], o[a], 0, 0, 0, 0, 0, 1)) && (l.op = 'easel_colorFilter');
        r._props.push('easel_colorFilter'), t.cacheID || pa(t);
      },
      ma = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      ga = 0.212671,
      va = 0.71516,
      _a = 0.072169,
      ya = function (t, e) {
        if (!(t instanceof Array && e instanceof Array)) return e;
        var r,
          n,
          i = [],
          o = 0,
          s = 0;
        for (r = 0; r < 4; r++) {
          for (n = 0; n < 5; n++) (s = 4 === n ? t[o + 4] : 0), (i[o + n] = t[o] * e[n] + t[o + 1] * e[n + 5] + t[o + 2] * e[n + 10] + t[o + 3] * e[n + 15] + s);
          o += 5;
        }
        return i;
      },
      wa = function (t, e, r) {
        aa || (aa = ha().ColorMatrixFilter) || fa("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
        for (var n, i, o, s, a = t.filters || [], l = a.length; --l > -1; )
          if (a[l] instanceof aa) {
            o = a[l];
            break;
          }
        for (
          o || ((o = new aa(ma.slice())), a.push(o), (t.filters = a)),
            i = o.matrix,
            n = ma.slice(),
            null != e.colorize &&
              (n = (function (t, e, r) {
                isNaN(r) && (r = 1);
                var n = ra.utils.splitColor(e),
                  i = n[0] / 255,
                  o = n[1] / 255,
                  s = n[2] / 255,
                  a = 1 - r;
                return ya([a + r * i * ga, r * i * va, r * i * _a, 0, 0, r * o * ga, a + r * o * va, r * o * _a, 0, 0, r * s * ga, r * s * va, a + r * s * _a, 0, 0, 0, 0, 0, 1, 0], t);
              })(n, e.colorize, Number(e.colorizeAmount))),
            null != e.contrast &&
              (n = (function (t, e) {
                return isNaN(e) ? t : ya([(e += 0.01), 0, 0, 0, 128 * (1 - e), 0, e, 0, 0, 128 * (1 - e), 0, 0, e, 0, 128 * (1 - e), 0, 0, 0, 1, 0], t);
              })(n, Number(e.contrast))),
            null != e.hue &&
              (n = (function (t, e) {
                if (isNaN(e)) return t;
                e *= Math.PI / 180;
                var r = Math.cos(e),
                  n = Math.sin(e);
                return ya(
                  [
                    ga + r * (1 - ga) + n * -ga,
                    va + r * -va + n * -va,
                    _a + r * -_a + n * (1 - _a),
                    0,
                    0,
                    ga + r * -ga + 0.143 * n,
                    va + 0.28484 * r + 0.14 * n,
                    _a + r * -_a + -0.283 * n,
                    0,
                    0,
                    ga + r * -ga + -0.787329 * n,
                    va + r * -va + n * va,
                    _a + r * (1 - _a) + n * _a,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                  ],
                  t
                );
              })(n, Number(e.hue))),
            null != e.saturation &&
              (n = (function (t, e) {
                if (isNaN(e)) return t;
                var r = 1 - e,
                  n = r * ga,
                  i = r * va,
                  o = r * _a;
                return ya([n + e, i, o, 0, 0, n, i + e, o, 0, 0, n, i, o + e, 0, 0, 0, 0, 0, 1, 0], t);
              })(n, Number(e.saturation))),
            l = n.length;
          --l > -1;

        )
          n[l] !== i[l] && (s = r.add(i, l, i[l], n[l], 0, 0, 0, 0, 0, 1)) && (s.op = 'easel_colorMatrixFilter');
        r._props.push('easel_colorMatrixFilter'), t.cacheID || pa(), (r._matrix = i);
      },
      ba = function (t) {
        (ra = t || ca()), ua() && (ia = window), ra && (na = 1);
      },
      xa = {
        version: '3.12.2',
        name: 'easel',
        init: function (t, e, r, n, i) {
          var o, s, a, l, u, c, h;
          for (o in (na || (ba(), ra || fa('Please gsap.registerPlugin(EaselPlugin)')), (this.target = t), e))
            if (((u = e[o]), 'colorFilter' === o || 'tint' === o || 'tintAmount' === o || 'exposure' === o || 'brightness' === o)) a || (da(t, e.colorFilter || e, this), (a = !0));
            else if ('saturation' === o || 'contrast' === o || 'hue' === o || 'colorize' === o || 'colorizeAmount' === o) l || (wa(t, e.colorMatrixFilter || e, this), (l = !0));
            else if ('frame' === o) {
              if ('string' == typeof u && '=' !== u.charAt(1) && (c = t.labels)) for (h = 0; h < c.length; h++) c[h].label === u && (u = c[h].position);
              (s = this.add(t, 'gotoAndStop', t.currentFrame, u, n, i, Math.round, 0, 0, 1)) && (s.op = o);
            } else null != t[o] && this.add(t, o, 'get', u);
        },
        render: function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          e.target.cacheID && e.target.updateCache();
        },
        register: ba,
      };
    function Ta() {
      return (
        (Ta = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        Ta.apply(this, arguments)
      );
    }
    function Sa(t, e, r) {
      return Math.max(t, Math.min(e, r));
    }
    (xa.registerCreateJS = function (t) {
      oa = t;
    }),
      ca() && ra.registerPlugin(xa);
    class Ma {
      advance(t) {
        var e;
        if (!this.isRunning) return;
        let r = !1;
        if (this.lerp) (this.value = ((n = this.value), (i = this.to), (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * n + o * i)), Math.round(this.value) === this.to && ((this.value = this.to), (r = !0));
        else {
          this.currentTime += t;
          const e = Sa(0, this.currentTime / this.duration, 1);
          r = e >= 1;
          const n = r ? 1 : this.easing(e);
          this.value = this.from + (this.to - this.from) * n;
        }
        var n, i, o;
        null == (e = this.onUpdate) || e.call(this, this.value, { completed: r }), r && this.stop();
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(t, e, { lerp: r = 0.1, duration: n = 1, easing: i = (t) => t, onUpdate: o }) {
        (this.from = this.value = t), (this.to = e), (this.lerp = r), (this.duration = n), (this.easing = i), (this.currentTime = 0), (this.isRunning = !0), (this.onUpdate = o);
      }
    }
    class Oa {
      constructor({ wrapper: t, content: e, autoResize: r = !0 } = {}) {
        if (
          ((this.resize = () => {
            this.onWrapperResize(), this.onContentResize();
          }),
          (this.onWrapperResize = () => {
            this.wrapper === window ? ((this.width = window.innerWidth), (this.height = window.innerHeight)) : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
          }),
          (this.onContentResize = () => {
            (this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth);
          }),
          (this.wrapper = t),
          (this.content = e),
          r)
        ) {
          const t = (function (t, e) {
            let r;
            return function () {
              let e = arguments,
                n = this;
              clearTimeout(r),
                (r = setTimeout(function () {
                  t.apply(n, e);
                }, 250));
            };
          })(this.resize);
          this.wrapper !== window && ((this.wrapperResizeObserver = new ResizeObserver(t)), this.wrapperResizeObserver.observe(this.wrapper)), (this.contentResizeObserver = new ResizeObserver(t)), this.contentResizeObserver.observe(this.content);
        }
        this.resize();
      }
      destroy() {
        var t, e;
        null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect();
      }
      get limit() {
        return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
      }
    }
    class ka {
      constructor() {
        this.events = {};
      }
      emit(t, ...e) {
        let r = this.events[t] || [];
        for (let t = 0, n = r.length; t < n; t++) r[t](...e);
      }
      on(t, e) {
        var r;
        return (
          (null == (r = this.events[t]) ? void 0 : r.push(e)) || (this.events[t] = [e]),
          () => {
            var r;
            this.events[t] = null == (r = this.events[t]) ? void 0 : r.filter((t) => e !== t);
          }
        );
      }
      destroy() {
        this.events = {};
      }
    }
    class Ea {
      constructor(t, { wheelMultiplier: e = 1, touchMultiplier: r = 2, normalizeWheel: n = !1 }) {
        (this.onTouchStart = (t) => {
          const { clientX: e, clientY: r } = t.targetTouches ? t.targetTouches[0] : t;
          (this.touchStart.x = e), (this.touchStart.y = r), (this.lastDelta = { x: 0, y: 0 });
        }),
          (this.onTouchMove = (t) => {
            const { clientX: e, clientY: r } = t.targetTouches ? t.targetTouches[0] : t,
              n = -(e - this.touchStart.x) * this.touchMultiplier,
              i = -(r - this.touchStart.y) * this.touchMultiplier;
            (this.touchStart.x = e), (this.touchStart.y = r), (this.lastDelta = { x: n, y: i }), this.emitter.emit('scroll', { type: 'touch', deltaX: n, deltaY: i, event: t });
          }),
          (this.onTouchEnd = (t) => {
            this.emitter.emit('scroll', { type: 'touch', inertia: !0, deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
          }),
          (this.onWheel = (t) => {
            let { deltaX: e, deltaY: r } = t;
            this.normalizeWheel && ((e = Sa(-100, e, 100)), (r = Sa(-100, r, 100))), (e *= this.wheelMultiplier), (r *= this.wheelMultiplier), this.emitter.emit('scroll', { type: 'wheel', deltaX: e, deltaY: r, event: t });
          }),
          (this.element = t),
          (this.wheelMultiplier = e),
          (this.touchMultiplier = r),
          (this.normalizeWheel = n),
          (this.touchStart = { x: null, y: null }),
          (this.emitter = new ka()),
          this.element.addEventListener('wheel', this.onWheel, { passive: !1 }),
          this.element.addEventListener('touchstart', this.onTouchStart, { passive: !1 }),
          this.element.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
          this.element.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        this.emitter.destroy(),
          this.element.removeEventListener('wheel', this.onWheel, { passive: !1 }),
          this.element.removeEventListener('touchstart', this.onTouchStart, { passive: !1 }),
          this.element.removeEventListener('touchmove', this.onTouchMove, { passive: !1 }),
          this.element.removeEventListener('touchend', this.onTouchEnd, { passive: !1 });
      }
    }
    function Aa(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return Pa(t);
        })(t) ||
        (function (t) {
          if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (t) {
            if ('string' == typeof t) return Pa(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return 'Object' === r && t.constructor && (r = t.constructor.name), 'Map' === r || 'Set' === r ? Array.from(t) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pa(t, e) : void 0;
          }
        })(t) ||
        (function () {
          throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        })()
      );
    }
    function Pa(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function Ca(t) {
      return (
        (Ca =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              }),
        Ca(t)
      );
    }
    r(928);
    var Ra,
      za,
      La,
      Da,
      Fa,
      qa,
      Ya,
      Ba,
      Ia = function () {
        return 'undefined' != typeof window;
      },
      Wa = function () {
        return Ra || (Ia() && (Ra = window.gsap) && Ra.registerPlugin && Ra);
      },
      Xa = function (t) {
        return 'string' == typeof t;
      },
      Na = function (t) {
        return 'function' == typeof t;
      },
      Ha = function (t, e) {
        var r = 'x' === e ? 'Width' : 'Height',
          n = 'scroll' + r,
          i = 'client' + r;
        return t === La || t === Da || t === Fa ? Math.max(Da[n], Fa[n]) - (La['inner' + r] || Da[i] || Fa[i]) : t[n] - t['offset' + r];
      },
      Ua = function (t, e) {
        var r = 'scroll' + ('x' === e ? 'Left' : 'Top');
        return (
          t === La && (null != t.pageXOffset ? (r = 'page' + e.toUpperCase() + 'Offset') : (t = null != Da[r] ? Da : Fa)),
          function () {
            return t[r];
          }
        );
      },
      ja = function (t, e) {
        if (!(t = qa(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 };
        var r = t.getBoundingClientRect(),
          n = !e || e === La || e === Fa,
          i = n ? { top: Da.clientTop - (La.pageYOffset || Da.scrollTop || Fa.scrollTop || 0), left: Da.clientLeft - (La.pageXOffset || Da.scrollLeft || Fa.scrollLeft || 0) } : e.getBoundingClientRect(),
          o = { x: r.left - i.left, y: r.top - i.top };
        return !n && e && ((o.x += Ua(e, 'x')()), (o.y += Ua(e, 'y')())), o;
      },
      Va = function (t, e, r, n, i) {
        return isNaN(t) || 'object' === Ca(t) ? (Xa(t) && '=' === t.charAt(1) ? parseFloat(t.substr(2)) * ('-' === t.charAt(0) ? -1 : 1) + n - i : 'max' === t ? Ha(e, r) - i : Math.min(Ha(e, r), ja(t, e)[r] - i)) : parseFloat(t) - i;
      },
      Ga = function () {
        (Ra = Wa()), Ia() && Ra && 'undefined' != typeof document && document.body && ((La = window), (Fa = document.body), (Da = document.documentElement), (qa = Ra.utils.toArray), Ra.config({ autoKillThreshold: 7 }), (Ya = Ra.config()), (za = 1));
      },
      Ka = {
        version: '3.12.2',
        name: 'scrollTo',
        rawVars: 1,
        register: function (t) {
          (Ra = t), Ga();
        },
        init: function (t, e, r, n, i) {
          za || Ga();
          var o = this,
            s = Ra.getProperty(t, 'scrollSnapType');
          (o.isWin = t === La),
            (o.target = t),
            (o.tween = r),
            (e = (function (t, e, r, n) {
              if ((Na(t) && (t = t(e, r, n)), 'object' !== Ca(t))) return Xa(t) && 'max' !== t && '=' !== t.charAt(1) ? { x: t, y: t } : { y: t };
              if (t.nodeType) return { y: t, x: t };
              var i,
                o = {};
              for (i in t) o[i] = 'onAutoKill' !== i && Na(t[i]) ? t[i](e, r, n) : t[i];
              return o;
            })(e, n, t, i)),
            (o.vars = e),
            (o.autoKill = !!e.autoKill),
            (o.getX = Ua(t, 'x')),
            (o.getY = Ua(t, 'y')),
            (o.x = o.xPrev = o.getX()),
            (o.y = o.yPrev = o.getY()),
            Ba || (Ba = Ra.core.globals().ScrollTrigger),
            'smooth' === Ra.getProperty(t, 'scrollBehavior') && Ra.set(t, { scrollBehavior: 'auto' }),
            s && 'none' !== s && ((o.snap = 1), (o.snapInline = t.style.scrollSnapType), (t.style.scrollSnapType = 'none')),
            null != e.x ? (o.add(o, 'x', o.x, Va(e.x, t, 'x', o.x, e.offsetX || 0), n, i), o._props.push('scrollTo_x')) : (o.skipX = 1),
            null != e.y ? (o.add(o, 'y', o.y, Va(e.y, t, 'y', o.y, e.offsetY || 0), n, i), o._props.push('scrollTo_y')) : (o.skipY = 1);
        },
        render: function (t, e) {
          for (var r, n, i, o, s, a = e._pt, l = e.target, u = e.tween, c = e.autoKill, h = e.xPrev, f = e.yPrev, p = e.isWin, d = e.snap, m = e.snapInline; a; ) a.r(t, a.d), (a = a._next);
          (r = p || !e.skipX ? e.getX() : h),
            (i = (n = p || !e.skipY ? e.getY() : f) - f),
            (o = r - h),
            (s = Ya.autoKillThreshold),
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            c && (!e.skipX && (o > s || o < -s) && r < Ha(l, 'x') && (e.skipX = 1), !e.skipY && (i > s || i < -s) && n < Ha(l, 'y') && (e.skipY = 1), e.skipX && e.skipY && (u.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(u, e.vars.onAutoKillParams || []))),
            p ? La.scrollTo(e.skipX ? r : e.x, e.skipY ? n : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)),
            !d || (1 !== t && 0 !== t) || ((n = l.scrollTop), (r = l.scrollLeft), m ? (l.style.scrollSnapType = m) : l.style.removeProperty('scroll-snap-type'), (l.scrollTop = n + 1), (l.scrollLeft = r + 1), (l.scrollTop = n), (l.scrollLeft = r)),
            (e.xPrev = e.x),
            (e.yPrev = e.y),
            Ba && Ba.update();
        },
        kill: function (t) {
          var e = 'scrollTo' === t;
          (e || 'scrollTo_x' === t) && (this.skipX = 1), (e || 'scrollTo_y' === t) && (this.skipY = 1);
        },
      };
    function Ja(t) {
      return (
        (Ja =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              }),
        Ja(t)
      );
    }
    function Qa(t, e, r) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ('object' !== Ja(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, 'string');
              if ('object' !== Ja(n)) return n;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(t);
          })(t);
          return 'symbol' === Ja(e) ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
          : (t[e] = r),
        t
      );
    }
    (Ka.max = Ha), (Ka.getOffset = ja), (Ka.buildGetter = Ua), Wa() && Ra.registerPlugin(Ka), Xn.registerPlugin(Ka), Xn.registerPlugin(Vs, ki, xa);
    var $a = window.navigator.userAgent.toLowerCase(),
      Za = new (class {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: r = t,
          smoothWheel: n = !0,
          smoothTouch: i = !1,
          syncTouch: o = !1,
          syncTouchLerp: s = 0.1,
          __iosNoInertiaSyncTouchLerp: a = 0.4,
          touchInertiaMultiplier: l = 35,
          duration: u,
          easing: c = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: h = u && 0.1,
          infinite: f = !1,
          orientation: p = 'vertical',
          gestureOrientation: d = 'vertical',
          touchMultiplier: m = 1,
          wheelMultiplier: g = 1,
          normalizeWheel: v = !1,
          autoResize: _ = !0,
        } = {}) {
          (this.onVirtualScroll = ({ type: t, inertia: e, deltaX: r, deltaY: n, event: i }) => {
            if (i.ctrlKey) return;
            const o = 'touch' === t,
              s = 'wheel' === t;
            if (('vertical' === this.options.gestureOrientation && 0 === n) || ('horizontal' === this.options.gestureOrientation && 0 === r) || (o && 'vertical' === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && n <= 0)) return;
            if (
              i
                .composedPath()
                .find(
                  (t) =>
                    (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute('data-lenis-prevent')) ||
                    (o && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute('data-lenis-prevent-touch'))) ||
                    (s && (null == t || null == t.hasAttribute ? void 0 : t.hasAttribute('data-lenis-prevent-wheel')))
                )
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (((this.isSmooth = ((this.options.smoothTouch || this.options.syncTouch) && o) || (this.options.smoothWheel && s)), !this.isSmooth)) return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let a = n;
            'both' === this.options.gestureOrientation ? (a = Math.abs(n) > Math.abs(r) ? n : r) : 'horizontal' === this.options.gestureOrientation && (a = r);
            const l = o && this.options.syncTouch,
              u = o && e && Math.abs(a) > 1;
            u && (a = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + a, Ta({ programmatic: !1 }, l && { lerp: u ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp }));
          }),
            (this.onScroll = () => {
              if (!this.isScrolling) {
                const t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll), (this.velocity = 0), (this.direction = Math.sign(this.animatedScroll - t)), this.emit();
              }
            }),
            (window.lenisVersion = '1.0.19'),
            (t !== document.documentElement && t !== document.body) || (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: r,
              smoothWheel: n,
              smoothTouch: i,
              syncTouch: o,
              syncTouchLerp: s,
              __iosNoInertiaSyncTouchLerp: a,
              touchInertiaMultiplier: l,
              duration: u,
              easing: c,
              lerp: h,
              infinite: f,
              gestureOrientation: d,
              orientation: p,
              touchMultiplier: m,
              wheelMultiplier: g,
              normalizeWheel: v,
              autoResize: _,
            }),
            (this.dimensions = new Oa({ wrapper: t, content: e, autoResize: _ })),
            this.rootElement.classList.add('lenis'),
            (this.velocity = 0),
            (this.isStopped = !1),
            (this.isSmooth = n || i),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            (this.animate = new Ma()),
            (this.emitter = new ka()),
            this.options.wrapper.addEventListener('scroll', this.onScroll, { passive: !1 }),
            (this.virtualScroll = new Ea(r, { touchMultiplier: m, wheelMultiplier: g, normalizeWheel: v })),
            this.virtualScroll.on('scroll', this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener('scroll', this.onScroll, { passive: !1 }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.rootElement.classList.remove('lenis'),
            this.rootElement.classList.remove('lenis-smooth'),
            this.rootElement.classList.remove('lenis-scrolling'),
            this.rootElement.classList.remove('lenis-stopped');
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          var r;
          this.emitter.events[t] = null == (r = this.emitter.events[t]) ? void 0 : r.filter((t) => e !== t);
        }
        setScroll(t) {
          this.isHorizontal ? (this.rootElement.scrollLeft = t) : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit('scroll', this);
        }
        reset() {
          (this.isLocked = !1), (this.isScrolling = !1), (this.velocity = 0), this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(t) {
          const e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(t, { offset: e = 0, immediate: r = !1, lock: n = !1, duration: i = this.options.duration, easing: o = this.options.easing, lerp: s = !i && this.options.lerp, onComplete: a = null, force: l = !1, programmatic: u = !0 } = {}) {
          if (!this.isStopped || l) {
            if (['top', 'left', 'start'].includes(t)) t = 0;
            else if (['bottom', 'right', 'end'].includes(t)) t = this.limit;
            else {
              var c;
              let r;
              if (('string' == typeof t ? (r = document.querySelector(t)) : null != (c = t) && c.nodeType && (r = t), r)) {
                if (this.options.wrapper !== window) {
                  const t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                const n = r.getBoundingClientRect();
                t = (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
              }
            }
            if ('number' == typeof t) {
              if (((t += e), (t = Math.round(t)), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : (t = Sa(0, t, this.limit)), r))
                return (this.animatedScroll = this.targetScroll = t), this.setScroll(this.scroll), this.reset(), this.emit(), void (null == a || a());
              if (!u) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: i,
                easing: o,
                lerp: s,
                onUpdate: (t, { completed: e }) => {
                  n && (this.isLocked = !0),
                    (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    u && (this.targetScroll = t),
                    e &&
                      (n && (this.isLocked = !1),
                      requestAnimationFrame(() => {
                        this.isScrolling = !1;
                      }),
                      (this.velocity = 0),
                      null == a || a()),
                    this.emit();
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window ? this.options.content : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? 'x' : 'y'];
        }
        get isHorizontal() {
          return 'horizontal' === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite ? ((this.animatedScroll % (t = this.limit)) + t) % t : this.animatedScroll;
          var t;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t && (this.rootElement.classList.toggle('lenis-smooth', t), (this.__isSmooth = t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t && (this.rootElement.classList.toggle('lenis-scrolling', t), (this.__isScrolling = t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t && (this.rootElement.classList.toggle('lenis-stopped', t), (this.__isStopped = t));
        }
      })({
        lerp: 0.2,
        duration: 0.8,
        easing: function (t) {
          return 1 - (1 - t) * (1 - t);
        },
        smoothTouch: !0,
      });
    requestAnimationFrame(function t(e) {
      Za.raf(e), requestAnimationFrame(t);
    }),
      Za.scrollTo('html'),
      -1 != $a.indexOf('safari') && Za.destroy(),
      window.innerWidth <= 1024 && Za.destroy(),
      document.querySelector('body').classList.add('loading-start'),
      document.querySelector('#js-scrollingMov'),
      window.addEventListener('pageshow', function (t) {
        function e() {
          var t = document.querySelector('.site-loading');
          document.querySelector('body').classList.add('loading-end'),
            Xn.to(t, {
              autoAlpha: 0,
              duration: 1,
              delay: 0.2,
              onComplete: function () {
                document.querySelector('.site-header').classList.remove('js-scroll-down'),
                  document.querySelector('.site-header_menu').classList.remove('active'),
                  Xn.utils.toArray('.ab-image').forEach(function (t) {
                    var e = t.getAttribute('data-y') || 100;
                    Xn.to(t, { y: e, scrollTrigger: { trigger: t, start: 'top bottom', end: 'bottom top', scrub: 1 } });
                  }),
                  (function () {
                    var t = 0,
                      e = 0,
                      r = document.querySelector('.abstruct-line'),
                      n = r.getContext('2d');
                    function i() {
                      (t = innerWidth * devicePixelRatio), (e = innerWidth * devicePixelRatio * 0.4), window.innerWidth < 600 && ((t = innerWidth * devicePixelRatio * 1.5), (e = innerWidth * devicePixelRatio * 0.8)), (r.width = t), (r.height = e);
                    }
                    noise.seed(Math.random()),
                      i(),
                      (function r() {
                        requestAnimationFrame(r),
                          (function (r) {
                            n.clearRect(0, 0, t, e), (n.lineWidth = 1), window.innerWidth < 600 && (n.lineWidth = 2);
                            var i = e / 2;
                            Aa(Array(27).keys()).forEach(function (o) {
                              var s = 70 + o;
                              n.beginPath(),
                                Math.round((o / 27) * 360),
                                Math.round((o / 27) * 100),
                                (n.strokeStyle = 'rgba(255,255,255,0.5)'),
                                Aa(Array(300).keys()).forEach(function (a) {
                                  var l = (a / 299) * t,
                                    u = a / s,
                                    c = o / 60 + r,
                                    h = i * noise.perlin2(u, c) + e / 2;
                                  0 === a ? n.moveTo(l, h) : n.lineTo(l, h);
                                }),
                                n.stroke();
                            });
                          })(Date.now() / 6e3);
                      })(),
                      window.addEventListener('resize', i);
                  })(),
                  window.innerWidth < 1024 && document.querySelector('.top_producer_name').after(document.querySelector('.top_producer_right')),
                  window.addEventListener('resize', function () {
                    window.innerWidth < 1024 && document.querySelector('.top_producer_name').after(document.querySelector('.top_producer_right'));
                  }),
                  (function () {
                    document.querySelector('.top_hero-inner');
                    var t,
                      e = document.querySelector('.top_hero_main'),
                      r = document.querySelector('.top_hero_cont');
                    Xn.to(e, { autoAlpha: 0, scrollTrigger: { trigger: '.hero-trigger-first', start: 'top top', scrub: 1 } }),
                      Xn.to(r, { autoAlpha: 1, scrollTrigger: { trigger: '.hero-trigger-second', start: 'top top', scrub: 1 } }),
                      Xn.fromTo(r, { autoAlpha: 1 }, { autoAlpha: 0, scrollTrigger: { trigger: '.hero-trigger-third', start: 'top top', scrub: 1 } }),
                      Xn.set(r, { autoAlpha: 0 }),
                      Vs.create({ trigger: '.top_about2', start: 'top top', end: 'bottom+=30% top', pin: !0 }),
                      Xn.fromTo('.top_about2 .base-width', { autoAlpha: 0 }, { autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: '#anim-trigger', start: 'top+=10px top', end: 'top+=300px top', scrub: !0, invalidateOnRefresh: !0, toggleActions: 'play none none reverse' } });
                    var n = document.querySelectorAll('.about-item');
                    Xn.fromTo(n, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, ease: 'Power3.easeOut', duration: 1.1, stagger: { each: 0.2 }, scrollTrigger: { trigger: '#anim-trigger', start: 'top+=310px top', invalidateOnRefresh: !0, toggleActions: 'play none none reverse' } });
                    var i = document.getElementById('horizontal-cont'),
                      o = document.getElementById('horizontal-wrapper'),
                      s = document.querySelector('.holizontal-main');
                    Xn.to(o, {
                      x: function () {
                        return -(o.clientWidth + s.clientWidth - i.clientWidth) + 'px';
                      },
                      ease: 'none',
                      scrollTrigger:
                        ((t = { trigger: i, start: 'top top', end: 'top top' }),
                        Qa(t, 'end', function () {
                          return o.clientWidth + s.clientWidth > i.clientWidth ? '+=' + (o.clientWidth + s.clientWidth - i.clientWidth) : '+=0';
                        }),
                        Qa(t, 'pin', !0),
                        Qa(t, 'anticipatePin', 1),
                        Qa(t, 'scrub', 1),
                        Qa(t, 'invalidateOnRefresh', !0),
                        t),
                    }),
                      Xn.fromTo('.top_pavilion_main img', { scale: 2, transformOrigin: 'center center' }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.top_pavilion_main', start: 'top-=70% bottom', end: 'top-=20% top', scrub: 1 } }),
                      document.querySelector('.top_event_main-inner').clientWidth,
                      document.querySelector('.top_event_main-inner').clientHeight,
                      Xn.fromTo('.top_event_main-inner', { scale: 0, transformOrigin: 'center top' }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.top_event_main', start: 'top-=100% bottom', end: 'top top', scrub: 1 } }),
                      Xn.fromTo('.top_event_main-inner img', { scale: 2, transformOrigin: 'center top' }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.top_event_main', start: 'top-=100% bottom', end: 'top top', scrub: 1 } }),
                      window.addEventListener('resize', function () {
                        Vs.refresh();
                      });
                  })(),
                  document.documentElement;
                var t,
                  e,
                  r = document.querySelector('.site-header_btn'),
                  n = document.querySelector('.site-header_btn-outer'),
                  i = document.querySelector('.site-header_menu'),
                  o = window.innerWidth - document.body.clientWidth,
                  s = document.querySelector('.site-header_logo');
                r.addEventListener('click', function () {
                  this.classList.contains('active')
                    ? (this.classList.remove('active'), i.classList.remove('active'), s.classList.remove('active'), document.querySelector('body').classList.remove('fixed'), (n.style.marginRight = '0px'), window.innerWidth > 1024 && Za.start())
                    : (this.classList.add('active'), i.classList.add('active'), s.classList.add('active'), document.querySelector('body').classList.add('fixed'), (n.style.marginRight = o + 'px'), window.innerWidth > 1024 && Za.stop());
                }),
                  (t = document.querySelectorAll('.anim_cont')),
                  (e = new IntersectionObserver(
                    function (t) {
                      t.forEach(function (t) {
                        t.isIntersecting && t.target.classList.add('show');
                      });
                    },
                    { root: null, rootMargin: '-10% 0px', threshold: 0 }
                  )),
                  t.forEach(function (t) {
                    e.observe(t);
                  });
                var a = document.querySelectorAll('.anchorLink');
                Array.prototype.slice.call(a).forEach(function (t) {
                  t.addEventListener('click', function (e) {
                    e.preventDefault();
                    var r = t.hash,
                      o = t.pathname;
                    if (o === location.pathname) {
                      var a = document.querySelector(r),
                        l = window.pageYOffset + a.getBoundingClientRect().top - 0;
                      window.scrollTo({ top: l, behavior: 'smooth' }),
                        i.classList.remove('active'),
                        s.classList.remove('active'),
                        document.querySelector('body').classList.remove('fixed'),
                        (n.style.marginRight = '0px'),
                        document.querySelector('.site-header_btn').classList.remove('active'),
                        document.querySelector('.site-header_menu').classList.remove('active'),
                        window.innerWidth > 1024 ? Za.start() : Za.destroy();
                    } else window.location.href = o + r;
                  });
                }),
                  document.querySelector('.anchorLink2').addEventListener('click', function (t) {
                    t.preventDefault();
                    var e = document.querySelector('.anchorLink2').hash,
                      r = document.querySelector('.anchorLink2').pathname;
                    if (r === location.pathname) {
                      var o = window.pageYOffset + document.querySelector('.top_producer').getBoundingClientRect().top,
                        a = document.querySelector('#concept');
                      document.documentElement.scrollTop > o && (a = document.querySelector('#concept-bt'));
                      var l = window.pageYOffset + a.getBoundingClientRect().top - 0;
                      window.scrollTo({ top: l, behavior: 'smooth' }),
                        i.classList.remove('active'),
                        s.classList.remove('active'),
                        document.querySelector('body').classList.remove('fixed'),
                        (n.style.marginRight = '0px'),
                        document.querySelector('.site-header_btn').classList.remove('active'),
                        document.querySelector('.site-header_menu').classList.remove('active'),
                        window.innerWidth > 1024 ? Za.start() : Za.destroy();
                    } else window.location.href = r + e;
                  });
                var l,
                  u = location.hash;
                if (u) {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  var c = document.querySelector(u),
                    h = window.pageYOffset + c.getBoundingClientRect().top - 0;
                  setTimeout(function () {
                    window.scrollTo({ top: h, behavior: 'smooth' }), window.innerWidth > 1024 ? Za.start() : Za.destroy();
                  }, 500);
                }
                document.querySelector('body').classList.remove('fixed'),
                  (l = 0),
                  window.addEventListener('scroll', function () {
                    var t = document.querySelector('.site-header');
                    document.documentElement.scrollTop > 100 && (l < document.documentElement.scrollTop ? t.classList.add('js-scroll-down') : (t.classList.remove('js-scroll-down'), document.querySelector('body').classList.remove('fixed'))), (l = document.documentElement.scrollTop);
                  });
              },
            }),
            clearTimeout(r);
        }
        window.innerWidth,
          document.querySelector('.top_hero_main'),
          (function () {
            document.documentElement.scrollTop;
            var t = document.querySelector('#js-scrollingMov'),
              e = document.documentElement.clientHeight,
              r =
                (document.querySelector('.top_hero').clientHeight,
                document.querySelector('.top_hero_main').clientHeight,
                document.querySelector('.top_hero_cont').clientHeight,
                t.duration,
                new Scrolleo({ acceleration: 0.08, secondsPerScreen: 13, additionalOffset: 0, wrapperEl: '#js-scrollingMov' }));
            r.init(),
              window.addEventListener('resize', function () {
                r.init();
              });
            var n = 0,
              i = 0,
              o = 1e3;
            function s() {
              if ('scrollY' in window) return window.scrollY;
              if ('pageYOffset' in window) return window.pageYOffset;
              var t = window.document;
              return 'CSS1Compat' === t.compatMode ? t.documentElement.scrollTop : t.body.scrollTop;
            }
          })();
        var r = setTimeout(function () {
          return e();
        }, 200);
      }),
      window.addEventListener('pageshow', function (t) {
        t.persisted && window.location.reload();
      });
  })();
})();
