var t = {
  function() {
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
};
