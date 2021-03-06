!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('styled-components')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'styled-components'], t)
    : 'object' == typeof exports
    ? (exports.ReactSimpleChatbot = t(require('react'), require('styled-components')))
    : (e.ReactSimpleChatbot = t(e.react, e['styled-components']));
})('undefined' != typeof self ? self : this, function(e, t) {
  return (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
      }),
      (t.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (t.t = function(e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e;
        if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & n && 'string' != typeof e)
        )
          for (var o in e)
            t.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = 'dist/'),
      t((t.s = 9))
    );
  })([
    function(e, t, n) {
      e.exports = n(5)();
    },
    function(t, n) {
      t.exports = e;
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t) {
      function n(e, t, o) {
        return t instanceof Array
          ? (function(e, t, r) {
              for (var o = 0, i = t.length; o < i; o++) t[o] = n(e, t[o], r);
              return t;
            })(e, t, o)
          : t instanceof l
          ? t.length
            ? o.hasOwnProperty(t)
              ? o[t]
              : (o[t] = (function(e, t) {
                  for (var n = 0, o = t.length; n < o; e = e[t[n++].replace(s, r)]);
                  return e;
                })(e, t.split(r)))
            : e
          : t instanceof Object
          ? (function(e, t, r) {
              for (var o in t) t.hasOwnProperty(o) && (t[o] = n(e, t[o], r));
              return t;
            })(e, t, o)
          : t;
      }
      var r = '~',
        o = '\\x' + ('0' + r.charCodeAt(0).toString(16)).slice(-2),
        i = '\\' + o,
        a = new RegExp(o, 'g'),
        s = new RegExp(i, 'g'),
        u = new RegExp('(?:^|([^\\\\]))' + i),
        c =
          [].indexOf ||
          function(e) {
            for (var t = this.length; t-- && this[t] !== e; );
            return t;
          },
        l = String;
      (this.stringify = function(e, t, n, s) {
        return JSON.stringify(
          e,
          (function(e, t, n) {
            var s,
              u = [],
              l = [e],
              p = [e],
              f = [n ? r : '[Circular]'],
              d = e,
              b = 1;
            return function(e, h) {
              return (
                t && (h = t.call(this, e, h)),
                '' !== e &&
                  (d !== this &&
                    ((s = b - c.call(l, this) - 1),
                    (b -= s),
                    l.splice(b, l.length),
                    u.splice(b - 1, u.length),
                    (d = this)),
                  'object' == typeof h && h
                    ? (c.call(l, h) < 0 && l.push((d = h)),
                      (b = l.length),
                      (s = c.call(p, h)) < 0
                        ? ((s = p.push(h) - 1),
                          n
                            ? (u.push(('' + e).replace(a, o)), (f[s] = r + u.join(r)))
                            : (f[s] = f[0]))
                        : (h = f[s]))
                    : 'string' == typeof h && n && (h = h.replace(o, i).replace(r, o))),
                h
              );
            };
          })(e, t, !s),
          n
        );
      }),
        (this.parse = function(e, t) {
          return JSON.parse(
            e,
            (function(e) {
              return function(t, a) {
                var s = 'string' == typeof a;
                return s && a.charAt(0) === r
                  ? new l(a.slice(1))
                  : ('' === t && (a = n(a, a, {})),
                    s && (a = a.replace(u, '$1' + r).replace(i, o)),
                    e ? e.call(this, t, a) : a);
              };
            })(t)
          );
        });
    },
    function(e, t, n) {
      e.exports = function(e, t) {
        var n = [
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '0123456789',
            "~!@#$%^&()_+-={}[];',"
          ],
          r = '';
        (t = t || 'aA0').split('').forEach(function(e) {
          isNaN(parseInt(e))
            ? /[a-z]/.test(e)
              ? (r += n[0])
              : /[A-Z]/.test(e)
              ? (r += n[1])
              : (r += n[3])
            : (r += n[2]);
        }),
          (e = e || 30);
        for (var o = ''; e--; ) o += r.charAt(Math.floor(Math.random() * r.length));
        return o;
      };
    },
    function(e, t, n) {
      'use strict';
      var r = n(6),
        o = n(7),
        i = n(8);
      e.exports = function() {
        function e(e, t, n, r, a, s) {
          s !== i &&
            o(
              !1,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t
        };
        return (n.checkPropTypes = r), (n.PropTypes = n), n;
      };
    },
    function(e, t, n) {
      'use strict';
      function r(e) {
        return function() {
          return e;
        };
      }
      var o = function() {};
      (o.thatReturns = r),
        (o.thatReturnsFalse = r(!1)),
        (o.thatReturnsTrue = r(!0)),
        (o.thatReturnsNull = r(null)),
        (o.thatReturnsThis = function() {
          return this;
        }),
        (o.thatReturnsArgument = function(e) {
          return e;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      'use strict';
      var r = function(e) {};
      e.exports = function(e, t, n, o, i, a, s, u) {
        if ((r(t), !e)) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var l = [n, o, i, a, s, u],
              p = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return l[p++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    function(e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(e, t, n) {
      'use strict';
      function r() {
        var e = s([
          '\n  0% { box-shadow: 0 0 0 0 ',
          '; }\n  70% { box-shadow: 0 0 0 10px ',
          '; }\n  100% { box-shadow: 0 0 0 0 ',
          '; }\n'
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = s(['\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n']);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = s(['\n  100% { transform: scale(1); }\n']);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = s(['\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n']);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      function u() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  animation: ', ' 1.4s infinite both;\n  animation-delay: ', ';\n']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n'
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t &&
            (function(e, t) {
              (Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            })(e, t);
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function g() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n'
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  background: ',
          ';\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ',
          ';\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n'
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function S(e) {
        return (S =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function O(e) {
        return (O = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t &&
            (function(e, t) {
              (Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            })(e, t);
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function E() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  background: ',
          ';\n  border-radius: ',
          ';\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ',
          ';\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ',
          ';\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ',
          ';\n'
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  animation: ',
          ' 0.3s ease forwards;\n  border-radius: ',
          ';\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ',
          ';\n  width: 40;\n'
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  display: inline-block;\n  order: ', ';\n  padding: 6px;\n']);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  align-items: flex-end;\n  display: flex;\n  justify-content: ', ';\n']);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      function C(e) {
        return (C =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function N(e) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function I(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t &&
            (function(e, t) {
              (Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            })(e, t);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function M(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function T(e) {
        return (T =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function _() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  background: ',
          ';\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ',
          ';\n  overflow: hidden;\n  position: ',
          ';\n  bottom: ',
          ';\n  top: ',
          ';\n  right: ',
          ';\n  left: ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n  z-index: 999;\n  transform: ',
          ';\n  transform-origin: ',
          ';\n  transition: transform 0.3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ',
          ';\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  height: calc(',
          ' - ',
          ');\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ',
          ';\n  }\n'
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  align-items: center;\n  background: ',
          ';\n  color: ',
          ';\n  display: flex;\n  fill: ',
          ';\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n'
        ]);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  margin: 0;\n  font-size: ', ';\n']);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      function L() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  cursor: pointer;\n']);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })([
          '\n  align-items: center;\n  cursor: pointer;\n  background: ',
          ';\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ',
          ';\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ',
          ';\n  transition: transform 0.3s ease;\n  width: 56px;\n  z-index: 999;\n'
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  height: 24px;\n  width: 24px;\n']);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = (function(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
          );
        })(['\n  position: relative;\n']);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = J(['\n          ', ' .2s ease\n        ']);
        return (
          (K = function() {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = J([
          '\n  animation: ',
          ';\n  border: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ',
          ';\n  box-shadow: ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  font-size: 16px;\n  opacity: ',
          ';\n  outline: none;\n  padding: ',
          ';\n  width: 100%;\n  -webkit-appearance: none;\n\n  &:disabled {\n    background: #fff;\n  }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ',
          ';\n    border-bottom-right-radius: ',
          ';\n  }\n'
        ]);
        return (
          ($ = function() {
            return e;
          }),
          e
        );
      }
      function J(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      function W() {
        var e = Z(['\n            ', ' 2s ease infinite\n          ']);
        return (
          (W = function() {
            return e;
          }),
          e
        );
      }
      function Y() {
        var e = Z([
          '\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ',
          ';\n  fill: ',
          ';\n  opacity: ',
          ";\n  outline: none;\n  padding: 14px 16px 12px 16px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  &:before {\n    content: '';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ",
          ';\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n'
        ]);
        return (
          (Y = function() {
            return e;
          }),
          e
        );
      }
      function Z(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      function G(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Q(e, t, n) {
        return t && G(e.prototype, t), n && G(e, n), e;
      }
      function X(e) {
        return (X =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ee() {
        return (ee =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ne(e) {
        return (ne = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function re(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t &&
            (function(e, t) {
              (Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            })(e, t);
      }
      function oe(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function ie(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      n.r(t);
      var ae = n(1),
        se = n.n(ae),
        ue = n(0),
        ce = n.n(ue),
        le = n(4),
        pe = n.n(le),
        fe = n(2),
        de = n.n(fe),
        be = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = (function(e) {
              e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
              });
              var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return t
                ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
                : null;
            })(e);
          return 'rgba('
            .concat(n.r, ', ')
            .concat(n.g, ', ')
            .concat(n.b, ', ')
            .concat(t, ')');
        },
        he = Object(fe.keyframes)(a()),
        ge = Object(fe.keyframes)(i()),
        ye = Object(fe.keyframes)(o()),
        ve = de.a.span(u(), he, function(e) {
          return e.delay;
        }),
        me = function() {
          return se.a.createElement(
            'span',
            { className: 'rsc-loading' },
            se.a.createElement(ve, { delay: '0s' }, '.'),
            se.a.createElement(ve, { delay: '.2s' }, '.'),
            se.a.createElement(ve, { delay: '.4s' }, '.')
          );
        },
        Se = de.a.div(c()),
        xe = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              h(
                b(
                  b(
                    (n = (function(e, t) {
                      return !t || ('object' !== l(t) && 'function' != typeof t) ? b(e) : t;
                    })(this, (e = f(t)).call.apply(e, [this].concat(o))))
                  )
                ),
                'state',
                { loading: !0 }
              ),
              h(b(b(n)), 'renderComponent', function() {
                var e = n.props,
                  t = e.step,
                  r = e.steps,
                  o = e.previousStep,
                  i = e.triggerNextStep,
                  a = t.component;
                return se.a.cloneElement(a, {
                  step: t,
                  steps: r,
                  previousStep: o,
                  triggerNextStep: i
                });
              }),
              n
            );
          }
          return (
            d(t, ae.Component),
            (function(e, t, n) {
              t && p(e.prototype, t), n && p(e, n);
            })(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.speak,
                    r = t.step,
                    o = t.previousValue,
                    i = t.triggerNextStep,
                    a = r.delay,
                    s = r.waitAction;
                  setTimeout(function() {
                    e.setState({ loading: !1 }, function() {
                      s || r.rendered || i(), n(r, o);
                    });
                  }, a);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.loading,
                    t = this.props.style;
                  return se.a.createElement(
                    Se,
                    { className: 'rsc-cs', style: t },
                    e ? se.a.createElement(me, null) : this.renderComponent()
                  );
                }
              }
            ]),
            t
          );
        })();
      (xe.propTypes = {
        previousStep: ce.a.objectOf(ce.a.any).isRequired,
        previousValue: ce.a.oneOfType([
          ce.a.string,
          ce.a.bool,
          ce.a.number,
          ce.a.object,
          ce.a.array
        ]),
        speak: ce.a.func,
        step: ce.a.objectOf(ce.a.any).isRequired,
        steps: ce.a.objectOf(ce.a.any).isRequired,
        style: ce.a.objectOf(ce.a.any).isRequired,
        triggerNextStep: ce.a.func.isRequired
      }),
        (xe.defaultProps = { previousValue: '', speak: function() {} });
      var Oe = xe,
        we = de.a.li(g(), ge),
        je = {
          background: '#f5f8fb',
          fontFamily: 'monospace',
          headerBgColor: '#6e48aa',
          headerFontColor: '#fff',
          headerFontSize: '16px',
          botBubbleColor: '#6E48AA',
          botFontColor: '#fff',
          userBubbleColor: '#fff',
          userFontColor: '#4a4a4a'
        },
        ke = de.a.a(
          y(),
          function(e) {
            return e.theme.botBubbleColor;
          },
          function(e) {
            return e.theme.botFontColor;
          }
        );
      ke.defaultProps = { theme: je };
      var Ee = ke,
        Pe = de.a.ul(v()),
        ze = de.a.div(m()),
        qe = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              k(
                j(
                  j(
                    (n = (function(e, t) {
                      return !t || ('object' !== S(t) && 'function' != typeof t) ? j(e) : t;
                    })(this, (e = O(t)).call.apply(e, [this].concat(o))))
                  )
                ),
                'onOptionClick',
                function(e) {
                  var t = e.value;
                  (0, n.props.triggerNextStep)({ value: t });
                }
              ),
              k(j(j(n)), 'renderOption', function(e) {
                var t = n.props,
                  r = t.bubbleOptionStyle,
                  o = t.step.user,
                  i = e.value,
                  a = e.label;
                return se.a.createElement(
                  we,
                  { key: i, className: 'rsc-os-option' },
                  se.a.createElement(
                    Ee,
                    {
                      className: 'rsc-os-option-element',
                      style: r,
                      user: o,
                      onClick: function() {
                        return n.onOptionClick({ value: i });
                      }
                    },
                    a
                  )
                );
              }),
              n
            );
          }
          return (
            w(t, ae.Component),
            (function(e, t, n) {
              t && x(e.prototype, t), n && x(e, n);
            })(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.step.options;
                  return se.a.createElement(
                    ze,
                    { className: 'rsc-os' },
                    se.a.createElement(
                      Pe,
                      { className: 'rsc-os-options' },
                      Object.values(e).map(this.renderOption)
                    )
                  );
                }
              }
            ]),
            t
          );
        })();
      qe.propTypes = {
        bubbleOptionStyle: ce.a.objectOf(ce.a.any).isRequired,
        step: ce.a.objectOf(ce.a.any).isRequired,
        triggerNextStep: ce.a.func.isRequired
      };
      var Ce = qe,
        Re = de.a.div(
          E(),
          ge,
          function(e) {
            return e.user ? e.theme.userBubbleColor : e.theme.botBubbleColor;
          },
          function(e) {
            var t = e.isFirst,
              n = e.isLast,
              r = e.user;
            return t || n
              ? !t && n
                ? r
                  ? '18px 0 18px 18px'
                  : '0 18px 18px 18px'
                : e.user
                ? '18px 18px 0 18px'
                : '18px 18px 18px 0'
              : r
              ? '18px 0 0 18px'
              : '0 18px 18px 0px';
          },
          function(e) {
            return e.user ? e.theme.userFontColor : e.theme.botFontColor;
          },
          function(e) {
            var t = e.isFirst,
              n = e.showAvatar,
              r = e.user;
            return !t && n
              ? r
                ? '-8px 46px 10px 0'
                : '-8px 0 10px 46px'
              : t || n
              ? '0 0 10px 0'
              : r
              ? '-8px 0px 10px 0'
              : '-8px 0 10px 0px';
          },
          function(e) {
            var t = e.isFirst,
              n = e.user;
            return t ? (n ? 'bottom right' : 'bottom left') : n ? 'top right' : 'top left';
          }
        );
      Re.defaultProps = { theme: je };
      var Ne = Re,
        Ie = de.a.img(
          P(),
          ge,
          function(e) {
            return e.user ? '50% 50% 50% 0' : '50% 50% 0 50%';
          },
          function(e) {
            return e.user ? 'bottom left' : 'bottom right';
          }
        ),
        Ae = de.a.div(z(), function(e) {
          return e.user ? '1' : '0';
        }),
        Me = de.a.div(q(), function(e) {
          return e.user ? 'flex-end' : 'flex-start';
        }),
        Te = (function(e) {
          function t() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              M(
                A(
                  A(
                    (n = (function(e, t) {
                      return !t || ('object' !== C(t) && 'function' != typeof t) ? A(e) : t;
                    })(this, (e = N(t)).call.apply(e, [this].concat(o))))
                  )
                ),
                'state',
                { loading: !0 }
              ),
              M(A(A(n)), 'getMessage', function() {
                var e = n.props,
                  t = e.previousValue,
                  r = e.step.message;
                return r ? r.replace(/{previousValue}/g, t) : '';
              }),
              M(A(A(n)), 'renderMessage', function() {
                var e = n.props,
                  t = e.step,
                  r = e.steps,
                  o = e.previousStep,
                  i = e.triggerNextStep,
                  a = t.component;
                return a
                  ? se.a.cloneElement(a, { step: t, steps: r, previousStep: o, triggerNextStep: i })
                  : n.getMessage();
              }),
              n
            );
          }
          return (
            I(t, ae.Component),
            (function(e, t, n) {
              t && R(e.prototype, t), n && R(e, n);
            })(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.step,
                    r = t.speak,
                    o = t.previousValue,
                    i = t.triggerNextStep,
                    a = n.component,
                    s = n.delay,
                    u = n.waitAction,
                    c = a && u;
                  setTimeout(function() {
                    e.setState({ loading: !1 }, function() {
                      c || n.rendered || i(), r(n, o);
                    });
                  }, s);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.step,
                    n = e.isFirst,
                    r = e.isLast,
                    o = e.avatarStyle,
                    i = e.bubbleStyle,
                    a = e.hideBotAvatar,
                    s = e.hideUserAvatar,
                    u = this.state.loading,
                    c = t.avatar,
                    l = t.user,
                    p = l ? !s : !a;
                  return se.a.createElement(
                    Me,
                    { className: 'rsc-ts '.concat(l ? 'rsc-ts-user' : 'rsc-ts-bot'), user: l },
                    se.a.createElement(
                      Ae,
                      { className: 'rsc-ts-image-container', user: l },
                      n &&
                        p &&
                        se.a.createElement(Ie, {
                          className: 'rsc-ts-image',
                          style: o,
                          showAvatar: p,
                          user: l,
                          src: c,
                          alt: 'avatar'
                        })
                    ),
                    se.a.createElement(
                      Ne,
                      {
                        className: 'rsc-ts-bubble',
                        style: i,
                        user: l,
                        showAvatar: p,
                        isFirst: n,
                        isLast: r
                      },
                      u ? se.a.createElement(me, null) : this.renderMessage()
                    )
                  );
                }
              }
            ]),
            t
          );
        })();
      (Te.propTypes = {
        avatarStyle: ce.a.objectOf(ce.a.any).isRequired,
        isFirst: ce.a.bool.isRequired,
        isLast: ce.a.bool.isRequired,
        bubbleStyle: ce.a.objectOf(ce.a.any).isRequired,
        hideBotAvatar: ce.a.bool.isRequired,
        hideUserAvatar: ce.a.bool.isRequired,
        previousStep: ce.a.objectOf(ce.a.any),
        previousValue: ce.a.oneOfType([
          ce.a.string,
          ce.a.bool,
          ce.a.number,
          ce.a.object,
          ce.a.array
        ]),
        speak: ce.a.func,
        step: ce.a.objectOf(ce.a.any).isRequired,
        steps: ce.a.objectOf(ce.a.any),
        triggerNextStep: ce.a.func.isRequired
      }),
        (Te.defaultProps = {
          previousStep: {},
          previousValue: '',
          speak: function() {},
          steps: {}
        });
      var _e = Te,
        Be = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'user', types: ['boolean'], required: !0 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'validator', types: ['function'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        Fe = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'message', types: ['string', 'function'], required: !0 },
          { key: 'avatar', types: ['string'], required: !1 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'delay', types: ['number'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        Ve = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'options', types: ['object'], required: !0 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        Le = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'component', types: ['any'], required: !0 },
          { key: 'avatar', types: ['string'], required: !1 },
          { key: 'replace', types: ['boolean'], required: !1 },
          { key: 'waitAction', types: ['boolean'], required: !1 },
          { key: 'asMessage', types: ['boolean'], required: !1 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !1 },
          { key: 'delay', types: ['number'], required: !1 },
          { key: 'end', types: ['boolean'], required: !1 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'hideInput', types: ['boolean'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        De = [
          { key: 'id', types: ['string', 'number'], required: !0 },
          { key: 'update', types: ['string', 'number'], required: !0 },
          { key: 'trigger', types: ['string', 'number', 'function'], required: !0 },
          { key: 'placeholder', types: ['string'], required: !1 },
          { key: 'inputAttributes', types: ['object'], required: !1 },
          { key: 'metadata', types: ['object'], required: !1 }
        ],
        Ue = n(3),
        He = {
          parse: function(e) {
            var t = [];
            if (e.user) t = Be;
            else if (e.message) t = Fe;
            else if (e.options) t = Ve;
            else if (e.component) t = Le;
            else {
              if (!e.update) throw new Error('The step '.concat(Ue.stringify(e), ' is invalid'));
              t = De;
            }
            for (var n = 0, r = t.length; n < r; n += 1) {
              var o = t[n],
                i = o.key,
                a = o.types,
                s = o.required;
              if (!e[i] && s)
                throw new Error(
                  "Key '".concat(i, "' is required in step ").concat(Ue.stringify(e))
                );
              if (e[i] && 'any' !== a[0] && a.indexOf(T(e[i])) < 0)
                throw new Error(
                  "The type of '"
                    .concat(i, "' value must be ")
                    .concat(a.join(' or '), ' instead of ')
                    .concat(T(e[i]))
                );
            }
            var u = t.map(function(e) {
              return e.key;
            });
            for (var i in e)
              u.indexOf(i) < 0 &&
                (console.error("Invalid key '".concat(i, "' in step '").concat(e.id, "'")),
                delete e[i]);
            return e;
          },
          checkInvalidIds: function(e) {
            for (var t in e) {
              var n = e[t],
                r = e[t].trigger;
              if ('function' != typeof r)
                if (n.options)
                  for (
                    var o = n.options
                        .filter(function(e) {
                          return 'function' != typeof e.trigger;
                        })
                        .map(function(e) {
                          return e.trigger;
                        }),
                      i = 0,
                      a = o.length;
                    i < a;
                    i += 1
                  ) {
                    var s = o[i];
                    if (s && !e[s])
                      throw new Error(
                        "The id '"
                          .concat(s, "' triggered by option ")
                          .concat(i + 1, " in step '")
                          .concat(e[t].id, "' does not exist")
                      );
                  }
                else if (r && !e[r])
                  throw new Error(
                    "The id '"
                      .concat(r, "' triggered by step '")
                      .concat(e[t].id, "' does not exist")
                  );
            }
          }
        },
        Ke = n(3),
        $e = function(e, t) {
          var n = Ke.parse(Ke.stringify(t));
          for (var r in n)
            for (var o = 0, i = n[r].length; o < i; o += 1)
              n[r][o].component && (n[r][o].component = n[r][o].id);
          localStorage.setItem(e, Ke.stringify(n));
        },
        Je = de.a.div(
          _(),
          function(e) {
            return e.theme.background;
          },
          function(e) {
            return e.theme.fontFamily;
          },
          function(e) {
            return e.floating ? 'fixed' : 'relative';
          },
          function(e) {
            var t = e.floating,
              n = e.floatingStyle;
            return t ? n.bottom || '32px' : 'initial';
          },
          function(e) {
            var t = e.floating,
              n = e.floatingStyle;
            return (t && n.top) || 'initial';
          },
          function(e) {
            var t = e.floating,
              n = e.floatingStyle;
            return t ? n.right || '32px' : 'initial';
          },
          function(e) {
            var t = e.floating,
              n = e.floatingStyle;
            return (t && n.left) || 'initial';
          },
          function(e) {
            return e.width;
          },
          function(e) {
            return e.height;
          },
          function(e) {
            return e.opened ? 'scale(1)' : 'scale(0)';
          },
          function(e) {
            return e.floatingStyle.transformOrigin || 'bottom right';
          },
          function(e) {
            return e.floating ? '0' : '';
          }
        );
      Je.defaultProps = { theme: je };
      var We = Je,
        Ye = de.a.div(
          B(),
          function(e) {
            return e.height;
          },
          function(e) {
            return e.hideInput ? '56px' : '112px';
          },
          function(e) {
            return e.floating ? 'calc(100% - 112px)' : '';
          }
        ),
        Ze = de.a.div(
          F(),
          function(e) {
            return e.theme.headerBgColor;
          },
          function(e) {
            return e.theme.headerFontColor;
          },
          function(e) {
            return e.theme.headerFontColor;
          }
        );
      Ze.defaultProps = { theme: je };
      var Ge = Ze,
        Qe = de.a.h2(V(), function(e) {
          return e.theme.headerFontSize;
        });
      Qe.defaultProps = { theme: je };
      var Xe = Qe,
        et = de.a.a(L()),
        tt = de.a.a(
          D(),
          function(e) {
            return e.theme.headerBgColor;
          },
          function(e) {
            return e.theme.headerFontColor;
          },
          function(e) {
            return e.opened ? 'scale(0)' : 'scale(1)';
          }
        );
      tt.defaultProps = { theme: { headerBgColor: '#6e48aa', headerFontColor: '#fff' } };
      var nt = tt,
        rt = de.a.img(U()),
        ot = de.a.div(H()),
        it = de.a.input(
          $(),
          function(e) {
            return e.invalid ? Object(fe.css)(K(), ye) : '';
          },
          function(e) {
            return e.invalid ? '0' : '1px solid #eee';
          },
          function(e) {
            return e.invalid ? 'inset 0 0 2px #E53935' : 'none';
          },
          function(e) {
            return e.invalid ? '#E53935' : '';
          },
          function(e) {
            return e.disabled && !e.invalid ? '.5' : '1';
          },
          function(e) {
            return e.hasButton ? '16px 52px 16px 10px' : '16px 10px';
          },
          function(e) {
            return e.floating ? '0' : '10px';
          },
          function(e) {
            return e.floating ? '0' : '10px';
          }
        ),
        at = de.a.button(
          Y(),
          function(e) {
            return e.disabled ? 'default' : 'pointer';
          },
          function(e) {
            var t = e.speaking,
              n = e.invalid,
              r = e.theme;
            return t ? r.headerBgColor : n ? '#E53935' : '#4a4a4a';
          },
          function(e) {
            return e.disabled && !e.invalid ? '.5' : '1';
          },
          function(e) {
            var t = e.theme;
            return e.speaking
              ? Object(fe.css)(
                  W(),
                  (function(e) {
                    return Object(fe.keyframes)(r(), be(e, 0.4), be(e, 0), be(e, 0));
                  })(t.headerBgColor)
                )
              : '';
          }
        );
      at.defaultProps = { theme: je };
      var st = at,
        ut = null,
        ct = function() {},
        lt = (function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ct,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ct,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'en';
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, e),
              ut || (ut = this),
              (this.state = { inputValue: '', lang: o, onChange: t, onEnd: n, onStop: r }),
              (this.onResult = this.onResult.bind(this)),
              (this.onEnd = this.onEnd.bind(this)),
              this.setup(),
              ut
            );
          }
          return (
            Q(e, null, [
              {
                key: 'isSupported',
                value: function() {
                  return 'webkitSpeechRecognition' in window;
                }
              }
            ]),
            Q(e, [
              {
                key: 'onChange',
                value: function(e) {
                  var t = this.state.onChange;
                  this.setState({ inputValue: e }), t(e);
                }
              },
              {
                key: 'onFinal',
                value: function(e) {
                  this.setState({ inputValue: e }), this.recognition.stop();
                }
              },
              {
                key: 'onEnd',
                value: function() {
                  var e = this.state,
                    t = e.onStop,
                    n = e.onEnd,
                    r = e.force;
                  this.setState({ speaking: !1 }), r ? t() : n();
                }
              },
              {
                key: 'onResult',
                value: function(e) {
                  for (var t = '', n = '', r = e.resultIndex; r < e.results.length; r += 1)
                    e.results[r].isFinal
                      ? ((n += e.results[r][0].transcript), this.onFinal(n))
                      : ((t += e.results[r][0].transcript), this.onChange(t));
                }
              },
              {
                key: 'setState',
                value: function(e) {
                  this.state = Object.assign({}, this.state, e);
                }
              },
              {
                key: 'setup',
                value: function() {
                  if (!e.isSupported()) return this;
                  var t = window.webkitSpeechRecognition;
                  return (
                    (this.recognition = new t()),
                    (this.recognition.continuous = !0),
                    (this.recognition.interimResults = !0),
                    (this.recognition.lang = this.state.lang),
                    (this.recognition.onresult = this.onResult),
                    (this.recognition.onend = this.onEnd),
                    this
                  );
                }
              },
              {
                key: 'setLang',
                value: function(e) {
                  return this.setState({ lang: e }), this.setup(), this;
                }
              },
              {
                key: 'speak',
                value: function() {
                  return e.isSupported()
                    ? (this.state.speaking
                        ? (this.setState({ force: !0 }), this.recognition.stop())
                        : (this.recognition.start(),
                          this.setState({ speaking: !0, inputValue: '' })),
                      this)
                    : this;
                }
              }
            ]),
            e
          );
        })(),
        pt = function() {
          return se.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            se.a.createElement('path', {
              d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'
            }),
            se.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          );
        },
        ft = function() {
          return se.a.createElement(
            'svg',
            {
              height: '24',
              viewBox: '0 0 24 24',
              width: '24',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            se.a.createElement('path', {
              d:
                'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            }),
            se.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          );
        },
        dt = function(e) {
          var t = e.size;
          return se.a.createElement(
            'svg',
            {
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              width: t,
              height: t,
              viewBox: '0 0 500 500'
            },
            se.a.createElement(
              'g',
              null,
              se.a.createElement(
                'g',
                null,
                se.a.createElement('polygon', {
                  points: '0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75'
                })
              )
            )
          );
        };
      (dt.propTypes = { size: ce.a.number }), (dt.defaultProps = { size: 20 });
      var bt = dt,
        ht = function(e) {
          var t = e.size;
          return se.a.createElement(
            'svg',
            {
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              width: t,
              height: t,
              viewBox: '0 0 400 400'
            },
            se.a.createElement(
              'g',
              null,
              se.a.createElement('path', {
                d:
                  'M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z'
              }),
              se.a.createElement('path', {
                d:
                  'M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z'
              })
            )
          );
        };
      (ht.propTypes = { size: ce.a.number }), (ht.defaultProps = { size: 20 });
      var gt = ht,
        yt = function() {
          return /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent);
        },
        vt = function(e) {
          return 'string' == typeof e;
        },
        mt = function(e) {
          return function(t, n) {
            var r = e.lang,
              o = e.voice,
              i = e.enable,
              a = t.user;
            if (window.SpeechSynthesisUtterance && window.speechSynthesis && !a && i) {
              var s = (function(e) {
                  var t = e.message,
                    n = e.metadata,
                    r = void 0 === n ? {} : n;
                  return vt(r.speak) ? r.speak : vt(t) ? t : '';
                })(t),
                u = new window.SpeechSynthesisUtterance();
              (u.text = s.replace(/{previousValue}/g, n)),
                (u.lang = r),
                (u.voice = o),
                window.speechSynthesis.speak(u);
            }
          };
        },
        St = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
              ie(
                oe(
                  oe(
                    (n = (function(e, t) {
                      return !t || ('object' !== X(t) && 'function' != typeof t) ? oe(e) : t;
                    })(this, ne(t).call(this, e)))
                  )
                ),
                'onNodeInserted',
                function(e) {
                  e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
                }
              ),
              ie(oe(oe(n)), 'onResize', function() {
                n.content.scrollTop = n.content.scrollHeight;
              }),
              ie(oe(oe(n)), 'onRecognitionChange', function(e) {
                n.setState({ inputValue: e });
              }),
              ie(oe(oe(n)), 'onRecognitionEnd', function() {
                n.setState({ speaking: !1 }), n.handleSubmitButton();
              }),
              ie(oe(oe(n)), 'onRecognitionStop', function() {
                n.setState({ speaking: !1 });
              }),
              ie(oe(oe(n)), 'onValueChange', function(e) {
                n.setState({ inputValue: e.target.value });
              }),
              ie(oe(oe(n)), 'getTriggeredStep', function(e, t) {
                var r = n.generateRenderedStepsById();
                return 'function' == typeof e ? e({ value: t, steps: r }) : e;
              }),
              ie(oe(oe(n)), 'getStepMessage', function(e) {
                var t = n.state.previousSteps,
                  r = t.length > 0 ? t.length - 1 : 0,
                  o = n.generateRenderedStepsById(),
                  i = t[r].value;
                return 'function' == typeof e ? e({ previousValue: i, steps: o }) : e;
              }),
              ie(oe(oe(n)), 'generateRenderedStepsById', function() {
                for (var e = n.state.previousSteps, t = {}, r = 0, o = e.length; r < o; r += 1) {
                  var i = e[r],
                    a = i.id,
                    s = i.message,
                    u = i.value,
                    c = i.metadata;
                  t[a] = { id: a, message: s, value: u, metadata: c };
                }
                return t;
              }),
              ie(oe(oe(n)), 'triggerNextStep', function(e) {
                var t = n.props.enableMobileAutoFocus,
                  r = n.state,
                  o = r.defaultUserSettings,
                  i = r.previousSteps,
                  a = r.renderedSteps,
                  s = r.steps,
                  u = n.state,
                  c = u.currentStep,
                  l = u.previousStep,
                  p = c.end;
                if (
                  (e && e.value && (c.value = e.value),
                  e && e.hideInput && (c.hideInput = e.hideInput),
                  e && e.trigger && (c.trigger = n.getTriggeredStep(e.trigger, e.value)),
                  p)
                )
                  n.handleEnd();
                else if (c.options && e) {
                  var f = c.options.filter(function(t) {
                      return t.value === e.value;
                    })[0],
                    d = n.getTriggeredStep(f.trigger, c.value);
                  delete c.options,
                    (c = Object.assign({}, c, f, o, { user: !0, message: f.label, trigger: d })),
                    a.pop(),
                    i.pop(),
                    a.push(c),
                    i.push(c),
                    n.setState({ currentStep: c, renderedSteps: a, previousSteps: i });
                } else if (c.trigger) {
                  c.replace && a.pop();
                  var b = n.getTriggeredStep(c.trigger, c.value),
                    h = Object.assign({}, s[b]);
                  if (h.message) h.message = n.getStepMessage(h.message);
                  else if (h.update) {
                    var g = h;
                    if ((h = Object.assign({}, s[g.update])).options)
                      for (var y = 0, v = h.options.length; y < v; y += 1)
                        h.options[y].trigger = g.trigger;
                    else h.trigger = g.trigger;
                  }
                  (h.key = pe()(24)),
                    (l = c),
                    (c = h),
                    n.setState({ renderedSteps: a, currentStep: c, previousStep: l }, function() {
                      h.user
                        ? n.setState({ disabled: !1 }, function() {
                            (!t && yt()) || (n.input && n.input.focus());
                          })
                        : (a.push(h),
                          i.push(h),
                          n.setState({ renderedSteps: a, previousSteps: i }));
                    });
                }
                var m = n.props,
                  S = m.cache,
                  x = m.cacheName;
                S &&
                  setTimeout(function() {
                    $e(x, { currentStep: c, previousStep: l, previousSteps: i, renderedSteps: a });
                  }, 300);
              }),
              ie(oe(oe(n)), 'handleEnd', function() {
                var e = n.props.handleEnd;
                if (e) {
                  for (
                    var t = n.state.previousSteps,
                      r = t.map(function(e) {
                        return {
                          id: e.id,
                          message: e.message,
                          value: e.value,
                          metadata: e.metadata
                        };
                      }),
                      o = [],
                      i = 0,
                      a = t.length;
                    i < a;
                    i += 1
                  ) {
                    var s = t[i],
                      u = s.id,
                      c = s.message,
                      l = s.value,
                      p = s.metadata;
                    o[u] = { id: u, message: c, value: l, metadata: p };
                  }
                  e({
                    renderedSteps: r,
                    steps: o,
                    values: t
                      .filter(function(e) {
                        return e.value;
                      })
                      .map(function(e) {
                        return e.value;
                      })
                  });
                }
              }),
              ie(oe(oe(n)), 'isInputValueEmpty', function() {
                var e = n.state.inputValue;
                return !e || 0 === e.length;
              }),
              ie(oe(oe(n)), 'isLastPosition', function(e) {
                var t = n.state.renderedSteps,
                  r = t.length,
                  o = t
                    .map(function(e) {
                      return e.key;
                    })
                    .indexOf(e.key);
                if (r <= 1 || o + 1 === r) return !0;
                var i = t[o + 1];
                return (!i.message && !i.asMessage) || e.user !== i.user;
              }),
              ie(oe(oe(n)), 'isFirstPosition', function(e) {
                var t = n.state.renderedSteps,
                  r = t
                    .map(function(e) {
                      return e.key;
                    })
                    .indexOf(e.key);
                if (0 === r) return !0;
                var o = t[r - 1];
                return (!o.message && !o.asMessage) || e.user !== o.user;
              }),
              ie(oe(oe(n)), 'handleKeyPress', function(e) {
                'Enter' === e.key && n.submitUserMessage();
              }),
              ie(oe(oe(n)), 'handleSubmitButton', function() {
                var e = n.state,
                  t = e.speaking,
                  r = e.recognitionEnable;
                if ((n.isInputValueEmpty() || t) && r)
                  return n.recognition.speak(), void (t || n.setState({ speaking: !0 }));
                n.submitUserMessage();
              }),
              ie(oe(oe(n)), 'submitUserMessage', function() {
                var e = n.state,
                  t = e.defaultUserSettings,
                  r = e.inputValue,
                  o = e.previousSteps,
                  i = e.renderedSteps,
                  a = n.state.currentStep;
                if (!a.validator || !n.checkInvalidInput()) {
                  var s = { message: r, value: r };
                  (a = Object.assign({}, t, a, s)),
                    i.push(a),
                    o.push(a),
                    n.setState(
                      {
                        currentStep: a,
                        renderedSteps: i,
                        previousSteps: o,
                        disabled: !0,
                        inputValue: ''
                      },
                      function() {
                        n.input && n.input.blur();
                      }
                    );
                }
              }),
              ie(oe(oe(n)), 'checkInvalidInput', function() {
                var e = n.props.enableMobileAutoFocus,
                  t = n.state,
                  r = t.currentStep,
                  o = t.inputValue,
                  i = r.validator(o),
                  a = o;
                return !(
                  ('boolean' == typeof i && i) ||
                  (n.setState(
                    { inputValue: i.toString(), inputInvalid: !0, disabled: !0 },
                    function() {
                      setTimeout(function() {
                        n.setState({ inputValue: a, inputInvalid: !1, disabled: !1 }, function() {
                          (!e && yt()) || (n.input && n.input.focus());
                        });
                      }, 2e3);
                    }
                  ),
                  0)
                );
              }),
              ie(oe(oe(n)), 'toggleChatBot', function(e) {
                var t = n.props.toggleFloating;
                t ? t({ opened: e }) : n.setState({ opened: e });
              }),
              ie(oe(oe(n)), 'renderStep', function(e, t) {
                var r = n.state.renderedSteps,
                  o = n.props,
                  i = o.avatarStyle,
                  a = o.bubbleStyle,
                  s = o.bubbleOptionStyle,
                  u = o.customStyle,
                  c = o.hideBotAvatar,
                  l = o.hideUserAvatar,
                  p = o.speechSynthesis,
                  f = e.options,
                  d = e.component,
                  b = e.asMessage,
                  h = n.generateRenderedStepsById(),
                  g = t > 0 ? r[t - 1] : {};
                return d && !b
                  ? se.a.createElement(Oe, {
                      key: t,
                      speak: n.speak,
                      step: e,
                      steps: h,
                      style: u,
                      previousStep: g,
                      previousValue: g.value,
                      triggerNextStep: n.triggerNextStep
                    })
                  : f
                  ? se.a.createElement(Ce, {
                      key: t,
                      step: e,
                      speak: n.speak,
                      previousValue: g.value,
                      triggerNextStep: n.triggerNextStep,
                      bubbleOptionStyle: s
                    })
                  : se.a.createElement(_e, {
                      key: t,
                      step: e,
                      steps: h,
                      speak: n.speak,
                      previousStep: g,
                      previousValue: g.value,
                      triggerNextStep: n.triggerNextStep,
                      avatarStyle: i,
                      bubbleStyle: a,
                      hideBotAvatar: c,
                      hideUserAvatar: l,
                      speechSynthesis: p,
                      isFirst: n.isFirstPosition(e),
                      isLast: n.isLastPosition(e)
                    });
              }),
              (n.content = null),
              (n.input = null),
              (n.setContentRef = function(e) {
                n.content = e;
              }),
              (n.setInputRef = function(e) {
                n.input = e;
              }),
              (n.state = {
                renderedSteps: [],
                previousSteps: [],
                currentStep: {},
                previousStep: {},
                steps: {},
                disabled: !0,
                opened: e.opened || !e.floating,
                inputValue: '',
                inputInvalid: !1,
                speaking: !1,
                recognitionEnable: e.recognitionEnable && lt.isSupported(),
                defaultUserSettings: {}
              }),
              (n.speak = mt(e.speechSynthesis)),
              n
            );
          }
          return (
            re(t, ae.Component),
            (function(e, t, n) {
              t && te(e.prototype, t), n && te(e, n);
            })(
              t,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    for (
                      var e = this,
                        t = this.props.steps,
                        n = this.props,
                        r = n.botDelay,
                        o = n.botAvatar,
                        i = n.cache,
                        a = n.cacheName,
                        s = n.customDelay,
                        u = n.enableMobileAutoFocus,
                        c = n.userAvatar,
                        l = {},
                        p = { delay: r, avatar: o },
                        f = { delay: n.userDelay, avatar: c, hideInput: !1 },
                        d = { delay: s },
                        b = 0,
                        h = t.length;
                      b < h;
                      b += 1
                    ) {
                      var g = t[b],
                        y = {};
                      g.user
                        ? (y = f)
                        : g.message || g.asMessage
                        ? (y = p)
                        : g.component && (y = d),
                        (l[g.id] = Object.assign({}, y, He.parse(g)));
                    }
                    He.checkInvalidIds(l);
                    var v = t[0];
                    if (v.message) {
                      var m = v.message;
                      (v.message = 'function' == typeof m ? m() : m), (l[v.id].message = v.message);
                    }
                    var S = this.state.recognitionEnable,
                      x = this.props.recognitionLang;
                    S &&
                      (this.recognition = new lt(
                        this.onRecognitionChange,
                        this.onRecognitionEnd,
                        this.onRecognitionStop,
                        x
                      )),
                      this.content &&
                        (this.content.addEventListener('DOMNodeInserted', this.onNodeInserted),
                        window.addEventListener('resize', this.onResize));
                    var O = (function(e, t) {
                        var n = e.cacheName,
                          r = e.cache,
                          o = e.firstStep,
                          i = e.steps,
                          a = o,
                          s = [i[a.id]],
                          u = [i[a.id]];
                        if (r && localStorage.getItem(n)) {
                          var c = Ke.parse(localStorage.getItem(n)),
                            l = c.renderedSteps[c.renderedSteps.length - 1];
                          if (!l || !l.end) {
                            for (var p = 0, f = c.renderedSteps.length; p < f; p += 1) {
                              var d = c.renderedSteps[p];
                              if (
                                ((c.renderedSteps[p].delay = 0),
                                (c.renderedSteps[p].rendered = !0),
                                d.component)
                              ) {
                                var b = d.id;
                                c.renderedSteps[p].component = i[b].component;
                              }
                            }
                            var h = c.currentStep,
                              g = h.trigger,
                              y = h.end,
                              v = h.options,
                              m = c.currentStep.id;
                            if ((v && delete c.currentStep.rendered, !g && !y))
                              if (v)
                                for (var S = 0; S < v.length; S += 1)
                                  c.currentStep.options[S].trigger = i[m].options[S].trigger;
                              else c.currentStep.trigger = i[m].trigger;
                            return c.currentStep.user && t(), c;
                          }
                          localStorage.removeItem(n);
                        }
                        return {
                          currentStep: a,
                          previousStep: {},
                          previousSteps: u,
                          renderedSteps: s
                        };
                      })({ cacheName: a, cache: i, firstStep: v, steps: l }, function() {
                        e.setState({ disabled: !1 }, function() {
                          (!u && yt()) || (e.input && e.input.focus());
                        });
                      }),
                      w = O.currentStep,
                      j = O.previousStep,
                      k = O.previousSteps,
                      E = O.renderedSteps;
                    this.setState({
                      currentStep: w,
                      defaultUserSettings: f,
                      previousStep: j,
                      previousSteps: k,
                      renderedSteps: E,
                      steps: l
                    });
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.content &&
                      (this.content.removeEventListener('DOMNodeInserted', this.onNodeInserted),
                      window.removeEventListener('resize', this.onResize));
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.state,
                      n = t.currentStep,
                      r = t.disabled,
                      o = t.inputInvalid,
                      i = t.inputValue,
                      a = t.opened,
                      s = t.renderedSteps,
                      u = t.speaking,
                      c = t.recognitionEnable,
                      l = this.props,
                      p = l.className,
                      f = l.contentStyle,
                      d = l.floating,
                      b = l.floatingIcon,
                      h = l.floatingStyle,
                      g = l.footerStyle,
                      y = l.headerComponent,
                      v = l.headerTitle,
                      m = l.hideHeader,
                      S = l.hideSubmitButton,
                      x = l.inputStyle,
                      O = l.placeholder,
                      w = l.inputAttributes,
                      j = l.recognitionPlaceholder,
                      k = l.style,
                      E = l.submitButtonStyle,
                      P = l.width,
                      z = l.height,
                      q =
                        y ||
                        se.a.createElement(
                          Ge,
                          { className: 'rsc-header' },
                          se.a.createElement(Xe, { className: 'rsc-header-title' }, v),
                          d &&
                            se.a.createElement(
                              et,
                              {
                                className: 'rsc-header-close-button',
                                onClick: function() {
                                  return e.toggleChatBot(!1);
                                }
                              },
                              se.a.createElement(ft, null)
                            )
                        ),
                      C =
                        (this.isInputValueEmpty() || u) && c
                          ? se.a.createElement(gt, null)
                          : se.a.createElement(bt, null),
                      R = u ? j : n.placeholder || O,
                      N = n.inputAttributes || w;
                    return se.a.createElement(
                      'div',
                      { className: 'rsc '.concat(p) },
                      d &&
                        se.a.createElement(
                          nt,
                          {
                            className: 'rsc-float-button',
                            style: h,
                            opened: a,
                            onClick: function() {
                              return e.toggleChatBot(!0);
                            }
                          },
                          'string' == typeof b ? se.a.createElement(rt, { src: b }) : b
                        ),
                      se.a.createElement(
                        We,
                        {
                          className: 'rsc-container',
                          floating: d,
                          floatingStyle: h,
                          opened: a,
                          style: k,
                          width: P,
                          height: z
                        },
                        !m && q,
                        se.a.createElement(
                          Ye,
                          {
                            className: 'rsc-content',
                            ref: this.setContentRef,
                            floating: d,
                            style: f,
                            height: z,
                            hideInput: n.hideInput
                          },
                          s.map(this.renderStep)
                        ),
                        se.a.createElement(
                          ot,
                          { className: 'rsc-footer', style: g },
                          !n.hideInput &&
                            se.a.createElement(
                              it,
                              ee(
                                {
                                  type: 'textarea',
                                  style: x,
                                  ref: this.setInputRef,
                                  className: 'rsc-input',
                                  placeholder: o ? '' : R,
                                  onKeyPress: this.handleKeyPress,
                                  onChange: this.onValueChange,
                                  value: i,
                                  floating: d,
                                  invalid: o,
                                  disabled: r,
                                  hasButton: !S
                                },
                                N
                              )
                            ),
                          !n.hideInput &&
                            !S &&
                            se.a.createElement(
                              st,
                              {
                                className: 'rsc-submit-button',
                                style: E,
                                onClick: this.handleSubmitButton,
                                invalid: o,
                                disabled: r,
                                speaking: u
                              },
                              C
                            )
                        )
                      )
                    );
                  }
                }
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var n = e.opened;
                    return void 0 !== e.toggleFloating && void 0 !== n && n !== t.opened
                      ? (function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function(e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                              )),
                              r.forEach(function(t) {
                                ie(e, t, n[t]);
                              });
                          }
                          return e;
                        })({}, t, { opened: n })
                      : t;
                  }
                }
              ]
            ),
            t
          );
        })();
      (St.propTypes = {
        avatarStyle: ce.a.objectOf(ce.a.any),
        botAvatar: ce.a.string,
        botDelay: ce.a.number,
        bubbleOptionStyle: ce.a.objectOf(ce.a.any),
        bubbleStyle: ce.a.objectOf(ce.a.any),
        cache: ce.a.bool,
        cacheName: ce.a.string,
        className: ce.a.string,
        contentStyle: ce.a.objectOf(ce.a.any),
        customDelay: ce.a.number,
        customStyle: ce.a.objectOf(ce.a.any),
        enableMobileAutoFocus: ce.a.bool,
        floating: ce.a.bool,
        floatingIcon: ce.a.oneOfType([ce.a.string, ce.a.element]),
        floatingStyle: ce.a.objectOf(ce.a.any),
        footerStyle: ce.a.objectOf(ce.a.any),
        handleEnd: ce.a.func,
        headerComponent: ce.a.element,
        headerTitle: ce.a.string,
        height: ce.a.string,
        hideBotAvatar: ce.a.bool,
        hideHeader: ce.a.bool,
        hideSubmitButton: ce.a.bool,
        hideUserAvatar: ce.a.bool,
        inputAttributes: ce.a.objectOf(ce.a.any),
        inputStyle: ce.a.objectOf(ce.a.any),
        opened: ce.a.bool,
        toggleFloating: ce.a.func,
        placeholder: ce.a.string,
        recognitionEnable: ce.a.bool,
        recognitionLang: ce.a.string,
        recognitionPlaceholder: ce.a.string,
        speechSynthesis: ce.a.shape({
          enable: ce.a.bool,
          lang: ce.a.string,
          voice:
            'undefined' != typeof window ? ce.a.instanceOf(window.SpeechSynthesisVoice) : ce.a.any
        }),
        steps: ce.a.arrayOf(ce.a.object).isRequired,
        style: ce.a.objectOf(ce.a.any),
        submitButtonStyle: ce.a.objectOf(ce.a.any),
        userAvatar: ce.a.string,
        userDelay: ce.a.number,
        width: ce.a.string
      }),
        (St.defaultProps = {
          avatarStyle: {},
          botDelay: 1e3,
          bubbleOptionStyle: {},
          bubbleStyle: {},
          cache: !1,
          cacheName: 'rsc_cache',
          className: '',
          contentStyle: {},
          customStyle: {},
          customDelay: 1e3,
          enableMobileAutoFocus: !1,
          floating: !1,
          floatingIcon: se.a.createElement(pt, null),
          floatingStyle: {},
          footerStyle: {},
          handleEnd: void 0,
          headerComponent: void 0,
          headerTitle: 'Chat',
          height: '520px',
          hideBotAvatar: !1,
          hideHeader: !1,
          hideSubmitButton: !1,
          hideUserAvatar: !1,
          inputStyle: {},
          opened: void 0,
          placeholder: 'Type the message ...',
          inputAttributes: {},
          recognitionEnable: !1,
          recognitionLang: 'en',
          recognitionPlaceholder: 'Listening ...',
          speechSynthesis: { enable: !1, lang: 'en', voice: null },
          style: {},
          submitButtonStyle: {},
          toggleFloating: void 0,
          userDelay: 1e3,
          width: '350px',
          botAvatar:
            "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e",
          userAvatar:
            "data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e"
        });
      var xt = St;
      n.d(t, 'Loading', function() {
        return me;
      }),
        (t.default = xt);
    }
  ]);
});
