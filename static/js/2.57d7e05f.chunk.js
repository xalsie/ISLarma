(this["webpackJsonphex-code-puzzle"] = this["webpackJsonphex-code-puzzle"] || []).push([
    [2],
    [
        function (e, t, n) {
            "use strict";
            e.exports = n(70);
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(14),
                o = n(7),
                a = (function () {
                    function e() {}
                    return (
                        (e.replaceColorSvg = function (e, t, n) {
                            if (!e.svgData) return "";
                            return e.svgData.replace(/#([0-9A-F]{3,6})/gi, function () {
                                return o.ColorUtils.getStyleFromColor(t, n);
                            });
                        }),
                        (e.clamp = function (e, t, n) {
                            return Math.min(Math.max(e, t), n);
                        }),
                        (e.isInArray = function (e, t) {
                            return e === t || (t instanceof Array && t.indexOf(e) > -1);
                        }),
                        (e.mix = function (e, t, n, i) {
                            return Math.floor((e * n + t * i) / (n + i));
                        }),
                        (e.getParticleBaseVelocity = function (e) {
                            var t;
                            switch (e.direction) {
                                case r.MoveDirection.top:
                                    t = { x: 0, y: -1 };
                                    break;
                                case r.MoveDirection.topRight:
                                    t = { x: 0.5, y: -0.5 };
                                    break;
                                case r.MoveDirection.right:
                                    t = { x: 1, y: -0 };
                                    break;
                                case r.MoveDirection.bottomRight:
                                    t = { x: 0.5, y: 0.5 };
                                    break;
                                case r.MoveDirection.bottom:
                                    t = { x: 0, y: 1 };
                                    break;
                                case r.MoveDirection.bottomLeft:
                                    t = { x: -0.5, y: 1 };
                                    break;
                                case r.MoveDirection.left:
                                    t = { x: -1, y: 0 };
                                    break;
                                case r.MoveDirection.topLeft:
                                    t = { x: -0.5, y: -0.5 };
                                    break;
                                default:
                                    t = { x: 0, y: 0 };
                            }
                            return t;
                        }),
                        (e.getDistance = function (e, t) {
                            var n = e.x - t.x,
                                i = e.y - t.y;
                            return Math.sqrt(n * n + i * i);
                        }),
                        (e.loadFont = function (e) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), [4, document.fonts.load(e.weight + " 36px '" + e.font + "'")];
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return t.sent(), [3, 3];
                                        case 3:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.arrayRandomIndex = function (e) {
                            return Math.floor(Math.random() * e.length);
                        }),
                        (e.itemFromArray = function (e, t) {
                            return e[void 0 !== t ? t : this.arrayRandomIndex(e)];
                        }),
                        (e.randomInRange = function (e, t) {
                            return Math.random() * (t - e) + e;
                        }),
                        (e.isPointInside = function (e, t, n) {
                            return this.areBoundsInside(this.calculateBounds(e, null !== n && void 0 !== n ? n : 0), t);
                        }),
                        (e.areBoundsInside = function (e, t) {
                            return e.left < t.width && e.right > 0 && e.top < t.height && e.bottom > 0;
                        }),
                        (e.calculateBounds = function (e, t) {
                            return { bottom: e.y + t, left: e.x - t, right: e.x + t, top: e.y - t };
                        }),
                        (e.loadImage = function (e) {
                            return new Promise(function (t, n) {
                                if (e) {
                                    var i = { source: e, type: e.substr(e.length - 3) },
                                        r = new Image();
                                    r.addEventListener("load", function () {
                                        (i.element = r), t(i);
                                    }),
                                        r.addEventListener("error", function () {
                                            n("Error tsParticles - loading image: " + e);
                                        }),
                                        (r.src = e);
                                } else n("Error tsParticles - No image.src");
                            });
                        }),
                        (e.downloadSvgImage = function (e) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var t, n, r;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return e ? ("svg" !== (t = { source: e, type: e.substr(e.length - 3) }).type ? [2, this.loadImage(e)] : [4, fetch(t.source)]) : [3, 5];
                                        case 1:
                                            return (n = i.sent()).ok ? ((r = t), [4, n.text()]) : [3, 3];
                                        case 2:
                                            return (r.svgData = i.sent()), [2, t];
                                        case 3:
                                            throw new Error("Error tsParticles - Image not found");
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw new Error("Error tsParticles - No image.src");
                                        case 6:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.deepExtend = function (t, n) {
                            var i;
                            for (var r in ((t = null !== t && void 0 !== t ? t : {}), n))
                                n[r] && n[r].constructor && n[r].constructor === Object ? ((t[r] = null !== (i = t[r]) && void 0 !== i ? i : {}), e.deepExtend(t[r], n[r])) : (t[r] = n[r]);
                            return t;
                        }),
                        e
                    );
                })();
            t.Utils = a;
        },
        function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "__extends", function () {
                    return r;
                }),
                n.d(t, "__assign", function () {
                    return o;
                }),
                n.d(t, "__rest", function () {
                    return a;
                }),
                n.d(t, "__decorate", function () {
                    return l;
                }),
                n.d(t, "__param", function () {
                    return s;
                }),
                n.d(t, "__metadata", function () {
                    return u;
                }),
                n.d(t, "__awaiter", function () {
                    return c;
                }),
                n.d(t, "__generator", function () {
                    return f;
                }),
                n.d(t, "__createBinding", function () {
                    return d;
                }),
                n.d(t, "__exportStar", function () {
                    return p;
                }),
                n.d(t, "__values", function () {
                    return h;
                }),
                n.d(t, "__read", function () {
                    return v;
                }),
                n.d(t, "__spread", function () {
                    return y;
                }),
                n.d(t, "__spreadArrays", function () {
                    return m;
                }),
                n.d(t, "__await", function () {
                    return b;
                }),
                n.d(t, "__asyncGenerator", function () {
                    return g;
                }),
                n.d(t, "__asyncDelegator", function () {
                    return w;
                }),
                n.d(t, "__asyncValues", function () {
                    return x;
                }),
                n.d(t, "__makeTemplateObject", function () {
                    return k;
                }),
                n.d(t, "__importStar", function () {
                    return _;
                }),
                n.d(t, "__importDefault", function () {
                    return P;
                }),
                n.d(t, "__classPrivateFieldGet", function () {
                    return S;
                }),
                n.d(t, "__classPrivateFieldSet", function () {
                    return T;
                });
            var i = function (e, t) {
                return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
            };
            function r(e, t) {
                function n() {
                    this.constructor = e;
                }
                i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var o = function () {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++) for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                var n = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                }
                return n;
            }
            function l(e, t, n, i) {
                var r,
                    o = arguments.length,
                    a = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, n)) : i;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                else for (var l = e.length - 1; l >= 0; l--) (r = e[l]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a;
            }
            function s(e, t) {
                return function (n, i) {
                    t(n, i, e);
                };
            }
            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function c(e, t, n, i) {
                return new (n || (n = Promise))(function (r, o) {
                    function a(e) {
                        try {
                            s(i.next(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function l(e) {
                        try {
                            s(i.throw(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function s(e) {
                        var t;
                        e.done
                            ? r(e.value)
                            : ((t = e.value),
                              t instanceof n
                                  ? t
                                  : new n(function (e) {
                                        e(t);
                                    })).then(a, l);
                    }
                    s((i = i.apply(e, t || [])).next());
                });
            }
            function f(e, t) {
                var n,
                    i,
                    r,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (o = { next: l(0), throw: l(1), return: l(2) }),
                    "function" === typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                            return this;
                        }),
                    o
                );
                function l(o) {
                    return function (l) {
                        return (function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (((n = 1), i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done)) return r;
                                    switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, { value: o[1], done: !1 };
                                        case 5:
                                            a.label++, (i = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                                                a.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                (a.label = r[1]), (r = o);
                                                break;
                                            }
                                            if (r && a.label < r[2]) {
                                                (a.label = r[2]), a.ops.push(o);
                                                break;
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, a);
                                } catch (l) {
                                    (o = [6, l]), (i = 0);
                                } finally {
                                    n = r = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, l]);
                    };
                }
            }
            function d(e, t, n, i) {
                void 0 === i && (i = n), (e[i] = t[n]);
            }
            function p(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
            }
            function h(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    i = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length)
                    return {
                        next: function () {
                            return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                        },
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function v(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i,
                    r,
                    o = n.call(e),
                    a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(i = o.next()).done; ) a.push(i.value);
                } catch (l) {
                    r = { error: l };
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o);
                    } finally {
                        if (r) throw r.error;
                    }
                }
                return a;
            }
            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                return e;
            }
            function m() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var i = Array(e),
                    r = 0;
                for (t = 0; t < n; t++) for (var o = arguments[t], a = 0, l = o.length; a < l; a++, r++) i[r] = o[a];
                return i;
            }
            function b(e) {
                return this instanceof b ? ((this.v = e), this) : new b(e);
            }
            function g(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i,
                    r = n.apply(e, t || []),
                    o = [];
                return (
                    (i = {}),
                    a("next"),
                    a("throw"),
                    a("return"),
                    (i[Symbol.asyncIterator] = function () {
                        return this;
                    }),
                    i
                );
                function a(e) {
                    r[e] &&
                        (i[e] = function (t) {
                            return new Promise(function (n, i) {
                                o.push([e, t, n, i]) > 1 || l(e, t);
                            });
                        });
                }
                function l(e, t) {
                    try {
                        (n = r[e](t)).value instanceof b ? Promise.resolve(n.value.v).then(s, u) : c(o[0][2], n);
                    } catch (i) {
                        c(o[0][3], i);
                    }
                    var n;
                }
                function s(e) {
                    l("next", e);
                }
                function u(e) {
                    l("throw", e);
                }
                function c(e, t) {
                    e(t), o.shift(), o.length && l(o[0][0], o[0][1]);
                }
            }
            function w(e) {
                var t, n;
                return (
                    (t = {}),
                    i("next"),
                    i("throw", function (e) {
                        throw e;
                    }),
                    i("return"),
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                    t
                );
                function i(i, r) {
                    t[i] = e[i]
                        ? function (t) {
                              return (n = !n) ? { value: b(e[i](t)), done: "return" === i } : r ? r(t) : t;
                          }
                        : r;
                }
            }
            function x(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t,
                    n = e[Symbol.asyncIterator];
                return n
                    ? n.call(e)
                    : ((e = h(e)),
                      (t = {}),
                      i("next"),
                      i("throw"),
                      i("return"),
                      (t[Symbol.asyncIterator] = function () {
                          return this;
                      }),
                      t);
                function i(n) {
                    t[n] =
                        e[n] &&
                        function (t) {
                            return new Promise(function (i, r) {
                                (function (e, t, n, i) {
                                    Promise.resolve(i).then(function (t) {
                                        e({ value: t, done: n });
                                    }, t);
                                })(i, r, (t = e[n](t)).done, t.value);
                            });
                        };
                }
            }
            function k(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
            }
            function _(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
            }
            function P(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function S(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e);
            }
            function T(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n;
            }
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    this.value = "#fff";
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && void 0 !== e.value && (this.value = e.value);
                    }),
                    (e.create = function (t, n) {
                        var i = null !== t && void 0 !== t ? t : new e();
                        return void 0 !== n && i.load("string" === typeof n ? { value: n } : n), i;
                    }),
                    e
                );
            })();
            t.OptionsColor = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.bubble = "bubble"), (e.push = "push"), (e.remove = "remove"), (e.repulse = "repulse"), (e.emitter = "emitter"), (e.absorber = "absorber");
                })(t.ClickMode || (t.ClickMode = {}));
        },
        function (e, t, n) {
            var i = n(37),
                r = "object" == typeof self && self && self.Object === Object && self,
                o = i || r || Function("return this")();
            e.exports = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.canvasClass = "tsparticles-canvas-el"),
                    (e.randomColorValue = "random"),
                    (e.midColorValue = "mid"),
                    (e.touchEndEvent = "touchend"),
                    (e.mouseUpEvent = "mouseup"),
                    (e.mouseMoveEvent = "mousemove"),
                    (e.touchStartEvent = "touchstart"),
                    (e.touchMoveEvent = "touchmove"),
                    (e.mouseLeaveEvent = "mouseleave"),
                    (e.touchCancelEvent = "touchcancel"),
                    (e.resizeEvent = "resize"),
                    (e.visibilityChangeEvent = "visibilitychange"),
                    (e.noPolygonDataLoaded = "No polygon data loaded."),
                    (e.noPolygonFound = "No polygon found, you need to specify SVG url in config."),
                    e
                );
            })();
            t.Constants = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(1),
                r = n(6),
                o = (function () {
                    function e() {}
                    return (
                        (e.colorToRgb = function (t) {
                            var n, o, a;
                            if ("string" === typeof t.value)
                                a = t.value === r.Constants.randomColorValue ? { b: Math.floor(256 * Math.random()), g: Math.floor(256 * Math.random()), r: Math.floor(256 * Math.random()) } : e.stringToRgb(t.value);
                            else if (t.value instanceof Array) {
                                var l = i.Utils.itemFromArray(t.value);
                                a = e.stringToRgb(l);
                            } else {
                                var s = t.value,
                                    u = null !== (n = s.rgb) && void 0 !== n ? n : t.value;
                                if (void 0 !== u.r) a = u;
                                else {
                                    var c = null !== (o = s.hsl) && void 0 !== o ? o : t.value;
                                    void 0 !== c.h && (a = e.hslToRgb(c));
                                }
                            }
                            return a;
                        }),
                        (e.stringToAlpha = function (t) {
                            var n;
                            return null === (n = e.stringToRgba(t)) || void 0 === n ? void 0 : n.a;
                        }),
                        (e.stringToRgb = function (t) {
                            return e.stringToRgba(t);
                        }),
                        (e.hslToRgb = function (t) {
                            var n = { b: 0, g: 0, r: 0 },
                                i = { h: t.h > 1 ? t.h / 360 : t.h, l: t.l > 1 ? t.l / 100 : t.l, s: t.s > 1 ? t.s / 100 : t.s };
                            if (0 === i.s) (n.b = i.l), (n.g = i.l), (n.r = i.l);
                            else {
                                var r = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
                                    o = 2 * i.l - r;
                                (n.r = e.hue2rgb(o, r, i.h + 1 / 3)), (n.g = e.hue2rgb(o, r, i.h)), (n.b = e.hue2rgb(o, r, i.h - 1 / 3));
                            }
                            return (n.r = Math.floor(255 * n.r)), (n.g = Math.floor(255 * n.g)), (n.b = Math.floor(255 * n.b)), n;
                        }),
                        (e.hslaToRgba = function (t) {
                            var n = e.hslToRgb(t);
                            return { a: t.a, b: n.b, g: n.g, r: n.r };
                        }),
                        (e.getRandomRgbColor = function (e) {
                            var t,
                                n = e || 0,
                                i = n + n * Math.pow(16, 2) + n * Math.pow(16, 4),
                                r = 16777215 ^ i,
                                o = Math.floor((Math.random() * r) | i).toString(16);
                            return null !== (t = this.stringToRgb("#" + o)) && void 0 !== t ? t : { b: 0, g: 0, r: 0 };
                        }),
                        (e.getStyleFromColor = function (e, t) {
                            var n = null !== t && void 0 !== t ? t : 1;
                            return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + n + ")";
                        }),
                        (e.mix = function (e, t, n, r) {
                            return { b: i.Utils.mix(e.b, t.b, n, r), g: i.Utils.mix(e.g, t.g, n, r), r: i.Utils.mix(e.r, t.r, n, r) };
                        }),
                        (e.hue2rgb = function (e, t, n) {
                            var i = n;
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < 0.5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
                        }),
                        (e.stringToRgba = function (t) {
                            if (t.startsWith("rgb"))
                                return (n = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t))
                                    ? { a: n.length > 4 ? parseFloat(n[5]) : 1, b: parseInt(n[3], 10), g: parseInt(n[2], 10), r: parseInt(n[1], 10) }
                                    : void 0;
                            if (t.startsWith("hsl"))
                                return (n = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t))
                                    ? e.hslaToRgba({ a: n.length > 4 ? parseFloat(n[5]) : 1, h: parseInt(n[1], 10), l: parseInt(n[3], 10), s: parseInt(n[2], 10) })
                                    : void 0;
                            var n,
                                i = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, function (e, t, n, i, r) {
                                    return t + t + n + n + i + i + (void 0 !== r ? r + r : "");
                                });
                            return (n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i)) ? { a: void 0 !== n[4] ? parseInt(n[4], 16) / 255 : 1, b: parseInt(n[3], 16), g: parseInt(n[2], 16), r: parseInt(n[1], 16) } : void 0;
                        }),
                        e
                    );
                })();
            t.ColorUtils = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return (r.radius = i), r;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.contains = function (e) {
                            return Math.pow(e.x - this.position.x, 2) + Math.pow(e.y - this.position.y, 2) <= this.radius * this.radius;
                        }),
                        (t.prototype.intersects = function (e) {
                            var t = e,
                                n = e,
                                i = this.position,
                                r = e.position,
                                o = Math.abs(r.x - i.x),
                                a = Math.abs(r.y - i.y),
                                l = this.radius;
                            if (void 0 !== n.radius) return l + n.radius > Math.sqrt(o * o + a + a);
                            if (void 0 !== t.size) {
                                var s = t.size.width,
                                    u = t.size.height,
                                    c = Math.pow(o - s, 2) + Math.pow(a - u, 2);
                                return !(o > l + s || a > l + u) && (o <= s || a <= u || c <= l * l);
                            }
                            return !1;
                        }),
                        t
                    );
                })(n(54).Range);
            t.Circle = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.char = "char"),
                        (e.character = "character"),
                        (e.circle = "circle"),
                        (e.edge = "edge"),
                        (e.image = "image"),
                        (e.images = "images"),
                        (e.line = "line"),
                        (e.polygon = "polygon"),
                        (e.square = "square"),
                        (e.star = "star"),
                        (e.triangle = "triangle");
                })(t.ShapeType || (t.ShapeType = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.bubble = "bubble"), (e.connect = "connect"), (e.grab = "grab"), (e.repulse = "repulse"), (e.slow = "slow");
                })(t.HoverMode || (t.HoverMode = {}));
        },
        function (e, t, n) {
            var i = n(94),
                r = n(100);
            e.exports = function (e, t) {
                var n = r(e, t);
                return i(n) ? n : void 0;
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.inline = "inline"), (e.inside = "inside"), (e.outside = "outside"), (e.none = "none");
                })(t.PolygonMaskType || (t.PolygonMaskType = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.bounce = "bounce"), (e.bounceHorizontal = "bounce-horizontal"), (e.bounceVertical = "bounce-vertical"), (e.out = "out"), (e.destroy = "destroy");
                })(t.OutMode || (t.OutMode = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.bottom = "bottom"), (e.bottomLeft = "bottom-left"), (e.bottomRight = "bottom-right"), (e.left = "left"), (e.none = "none"), (e.right = "right"), (e.top = "top"), (e.topLeft = "top-left"), (e.topRight = "top-right");
                })(t.MoveDirection || (t.MoveDirection = {}));
        },
        function (e, t, n) {
            var i = n(84),
                r = n(85),
                o = n(86),
                a = n(87),
                l = n(88);
            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            (s.prototype.clear = i), (s.prototype.delete = r), (s.prototype.get = o), (s.prototype.has = a), (s.prototype.set = l), (e.exports = s);
        },
        function (e, t, n) {
            var i = n(35);
            e.exports = function (e, t) {
                for (var n = e.length; n--; ) if (i(e[n][0], t)) return n;
                return -1;
            };
        },
        function (e, t, n) {
            var i = n(26),
                r = n(96),
                o = n(97),
                a = i ? i.toStringTag : void 0;
            e.exports = function (e) {
                return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : a && a in Object(e) ? r(e) : o(e);
            };
        },
        function (e, t, n) {
            var i = n(11)(Object, "create");
            e.exports = i;
        },
        function (e, t, n) {
            var i = n(109);
            e.exports = function (e, t) {
                var n = e.__data__;
                return i(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                return null != e && "object" == typeof e;
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.clockwise = "clockwise"), (e.counterClockwise = "counter-clockwise"), (e.random = "random");
                })(t.RotateDirection || (t.RotateDirection = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.getPlugin = function (e) {
                        return this.plugins.filter(function (t) {
                            return t.id === e;
                        })[0];
                    }),
                    (e.addPlugin = function (e) {
                        this.getPlugin(e.id) || this.plugins.push(e);
                    }),
                    (e.getAvailablePlugins = function (e) {
                        for (
                            var t = {},
                                n = 0,
                                i = this.plugins.filter(function (t) {
                                    return t.needsPlugin(e);
                                });
                            n < i.length;
                            n++
                        ) {
                            var r = i[n];
                            t[r.id] = r.getPlugin(e);
                        }
                        return t;
                    }),
                    (e.getPreset = function (e) {
                        return this.presets[e];
                    }),
                    (e.addPreset = function (e, t) {
                        this.getPreset(e) || (this.presets[e] = t);
                    }),
                    (e.addShapeDrawer = function (e, t) {
                        this.drawers[e] || (this.drawers[e] = t);
                    }),
                    (e.getShapeDrawer = function (e) {
                        return this.drawers[e];
                    }),
                    (e.getSupportedShapes = function () {
                        return Object.keys(this.drawers);
                    }),
                    (e.plugins = []),
                    (e.presets = {}),
                    (e.drawers = {}),
                    e
                );
            })();
            t.Plugins = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.equidistant = "equidistant"), (e.onePerPoint = "one-per-point"), (e.perPoint = "per-point"), (e.randomLength = "random-length"), (e.randomPoint = "random-point");
                })(t.PolygonMaskInlineArrangement || (t.PolygonMaskInlineArrangement = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.canvas = "canvas"), (e.parent = "parent"), (e.window = "window");
                })(t.InteractivityDetect || (t.InteractivityDetect = {}));
        },
        function (e, t, n) {
            var i = n(11)(n(5), "Map");
            e.exports = i;
        },
        function (e, t, n) {
            var i = n(5).Symbol;
            e.exports = i;
        },
        function (e, t) {
            var n = Array.isArray;
            e.exports = n;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(9),
                r = n(154),
                o = n(1),
                a = n(12),
                l = n(21),
                s = n(7),
                u = n(49),
                c = n(47),
                f = n(48),
                d = n(50),
                p = n(51),
                h = n(22),
                v = (function () {
                    function e(e, t, n) {
                        var v,
                            y,
                            m,
                            b,
                            g,
                            w,
                            x,
                            k,
                            _,
                            P,
                            S,
                            T,
                            O,
                            C,
                            E,
                            M,
                            z,
                            j = this;
                        (this.container = e), (this.fill = !0), (this.close = !0), (this.links = []), (this.lastNoiseTime = 0), (this.destroyed = !1);
                        var A = e.options,
                            R = new u.Particles();
                        if ((R.load(A.particles), void 0 !== (null === n || void 0 === n ? void 0 : n.shape))) {
                            var I = null !== (v = n.shape.type) && void 0 !== v ? v : R.shape.type;
                            this.shape = I instanceof Array ? o.Utils.itemFromArray(I) : I;
                            var D = new d.Shape();
                            if ((D.load(n.shape), void 0 !== this.shape))
                                void 0 !== (L = D.options[this.shape]) &&
                                    ((this.shapeData = o.Utils.deepExtend({}, L instanceof Array ? o.Utils.itemFromArray(L) : L)),
                                    (this.fill = null !== (m = null === (y = this.shapeData) || void 0 === y ? void 0 : y.fill) && void 0 !== m ? m : this.fill),
                                    (this.close = null !== (g = null === (b = this.shapeData) || void 0 === b ? void 0 : b.close) && void 0 !== g ? g : this.close));
                        } else {
                            var L;
                            I = R.shape.type;
                            (this.shape = I instanceof Array ? o.Utils.itemFromArray(I) : I),
                                (L = R.shape.options[this.shape]) &&
                                    ((this.shapeData = o.Utils.deepExtend({}, L instanceof Array ? o.Utils.itemFromArray(L) : L)),
                                    (this.fill = null !== (x = null === (w = this.shapeData) || void 0 === w ? void 0 : w.fill) && void 0 !== x ? x : this.fill),
                                    (this.close = null !== (_ = null === (k = this.shapeData) || void 0 === k ? void 0 : k.close) && void 0 !== _ ? _ : this.close));
                        }
                        void 0 !== n && R.load(n),
                            void 0 !== (null === (P = this.shapeData) || void 0 === P ? void 0 : P.particles) && R.load(null === (S = this.shapeData) || void 0 === S ? void 0 : S.particles),
                            (this.particlesOptions = R);
                        var U = this.particlesOptions.move.noise.delay;
                        (this.noiseDelay = 1e3 * (U.random.enable ? o.Utils.randomInRange(U.random.minimumValue, U.value) : U.value)), e.retina.initParticle(this);
                        var N = this.particlesOptions.color,
                            F = null !== (T = this.sizeValue) && void 0 !== T ? T : e.retina.sizeValue,
                            V = "boolean" === typeof this.particlesOptions.size.random ? this.particlesOptions.size.random : this.particlesOptions.size.random.enable;
                        if (
                            ((this.size = { value: V && void 0 !== this.randomMinimumSize ? o.Utils.randomInRange(this.randomMinimumSize, F) : F }),
                            (this.direction = this.particlesOptions.move.direction),
                            (this.bubble = {}),
                            (this.angle = this.particlesOptions.rotate.random ? 360 * Math.random() : this.particlesOptions.rotate.value),
                            this.particlesOptions.rotate.direction == l.RotateDirection.random)
                        ) {
                            var B = Math.floor(2 * Math.random());
                            this.rotateDirection = B > 0 ? l.RotateDirection.counterClockwise : l.RotateDirection.clockwise;
                        } else this.rotateDirection = this.particlesOptions.rotate.direction;
                        if (this.particlesOptions.size.animation.enable) {
                            switch (this.particlesOptions.size.animation.startValue) {
                                case p.StartValueType.min:
                                    if (!V) {
                                        var H = e.retina.pixelRatio;
                                        this.size.value = this.particlesOptions.size.animation.minimumValue * H;
                                    }
                            }
                            (this.size.status = c.SizeAnimationStatus.increasing),
                                (this.size.velocity = (null !== (O = this.sizeAnimationSpeed) && void 0 !== O ? O : e.retina.sizeAnimationSpeed) / 100),
                                this.particlesOptions.size.animation.sync || (this.size.velocity = this.size.velocity * Math.random());
                        }
                        this.particlesOptions.rotate.animation.enable && (this.particlesOptions.rotate.animation.sync || (this.angle = 360 * Math.random())),
                            (this.position = this.calcPosition(this.container, t)),
                            A.polygon.enable && A.polygon.type === a.PolygonMaskType.inline && (this.initialPosition = { x: this.position.x, y: this.position.y }),
                            (this.offset = { x: 0, y: 0 }),
                            this.particlesOptions.collisions.enable && this.checkOverlap(t),
                            (this.color = N instanceof Array ? s.ColorUtils.colorToRgb(o.Utils.itemFromArray(N)) : s.ColorUtils.colorToRgb(N));
                        var q = this.particlesOptions.opacity.random,
                            W = this.particlesOptions.opacity.value;
                        (this.opacity = { value: q.enable ? o.Utils.randomInRange(q.minimumValue, W) : W }),
                            this.particlesOptions.opacity.animation.enable &&
                                ((this.opacity.status = f.OpacityAnimationStatus.increasing),
                                (this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100),
                                this.particlesOptions.opacity.animation.sync || (this.opacity.velocity *= Math.random())),
                            (this.initialVelocity = this.calculateVelocity()),
                            (this.velocity = { horizontal: this.initialVelocity.horizontal, vertical: this.initialVelocity.vertical });
                        var $ = e.drawers[this.shape];
                        if (($ || (($ = h.Plugins.getShapeDrawer(this.shape)), (e.drawers[this.shape] = $)), this.shape === i.ShapeType.image || this.shape === i.ShapeType.images)) {
                            var Q = $,
                                G = this.particlesOptions.shape.options[this.shape],
                                K = Q.getImages(e).images,
                                Y = K[(B = o.Utils.arrayRandomIndex(K))],
                                X =
                                    G instanceof Array
                                        ? G.filter(function (e) {
                                              return e.src === Y.source;
                                          })[0]
                                        : G;
                            if (void 0 !== (null === Y || void 0 === Y ? void 0 : Y.svgData) && X.replaceColor && this.color) {
                                var J = o.Utils.replaceColorSvg(Y, this.color, this.opacity.value),
                                    Z = new Blob([J], { type: "image/svg+xml" }),
                                    ee = window.URL || window.webkitURL || window,
                                    te = ee.createObjectURL(Z),
                                    ne = new Image();
                                (this.image = { data: Y, loaded: !1, ratio: X.width / X.height, replaceColor: null !== (C = X.replaceColor) && void 0 !== C ? C : X.replace_color, source: X.src }),
                                    ne.addEventListener("load", function (e) {
                                        j.image && ((j.image.loaded = !0), (Y.element = ne)), ee.revokeObjectURL(te);
                                    }),
                                    ne.addEventListener("error", function (e) {
                                        ee.revokeObjectURL(te),
                                            o.Utils.loadImage(X.src).then(function (e) {
                                                j.image && ((Y.element = e.element), (j.image.loaded = !0));
                                            });
                                    }),
                                    (ne.src = te);
                            } else this.image = { data: Y, loaded: !0, ratio: X.width / X.height, replaceColor: null !== (E = X.replaceColor) && void 0 !== E ? E : X.replace_color, source: X.src };
                            this.image.ratio || (this.image.ratio = 1), (this.fill = null !== (M = X.fill) && void 0 !== M ? M : this.fill), (this.close = null !== (z = X.close) && void 0 !== z ? z : this.close);
                        }
                        (this.stroke = this.particlesOptions.stroke instanceof Array ? o.Utils.itemFromArray(this.particlesOptions.stroke) : this.particlesOptions.stroke),
                            (this.strokeColor = "string" === typeof this.stroke.color ? s.ColorUtils.stringToRgb(this.stroke.color) : s.ColorUtils.colorToRgb(this.stroke.color)),
                            (this.shadowColor = "string" === typeof this.particlesOptions.shadow.color ? s.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) : s.ColorUtils.colorToRgb(this.particlesOptions.shadow.color)),
                            (this.updater = new r.Updater(this.container, this));
                    }
                    return (
                        (e.prototype.update = function (e, t) {
                            (this.links = []), this.updater.update(t);
                        }),
                        // (e.prototype.draw = function (e) {
                        //     var t;
                        //     !1 !== (null === (t = this.image) || void 0 === t ? void 0 : t.loaded) && this.container.canvas.drawParticle(this, e);
                        // }),
                        (e.prototype.isOverlapping = function () {
                            for (
                                var e = this.container,
                                    t = this,
                                    n = !1,
                                    i = 0,
                                    r = t.getPosition(),
                                    a = 0,
                                    l = e.particles.array.filter(function (e) {
                                        return e != t;
                                    });
                                a < l.length;
                                a++
                            ) {
                                var s = l[a];
                                i++;
                                var u = s.getPosition();
                                if (o.Utils.getDistance(r, u) <= t.size.value + s.size.value) {
                                    n = !0;
                                    break;
                                }
                            }
                            return { collisionFound: n, iterations: i };
                        }),
                        (e.prototype.checkOverlap = function (e) {
                            var t = this.container,
                                n = this,
                                i = n.isOverlapping();
                            i.iterations >= t.particles.count
                                ? t.particles.remove(this)
                                : i.collisionFound && ((n.position.x = e ? e.x : Math.random() * t.canvas.size.width), (n.position.y = e ? e.y : Math.random() * t.canvas.size.height), n.checkOverlap());
                        }),
                        (e.prototype.startInfection = function (e) {
                            e > this.container.options.infection.stages.length || e < 0 || ((this.infectionDelay = 0), (this.infectionDelayStage = e));
                        }),
                        (e.prototype.updateInfectionStage = function (e) {
                            e > this.container.options.infection.stages.length ||
                                e < 0 ||
                                (void 0 !== this.infectionStage && this.infectionStage > e) ||
                                (void 0 !== this.infectionTimeout && window.clearTimeout(this.infectionTimeout), (this.infectionStage = e), (this.infectionTime = 0));
                        }),
                        (e.prototype.updateInfection = function (e) {
                            var t = this.container.options,
                                n = t.infection,
                                i = t.infection.stages,
                                r = i.length;
                            if (void 0 !== this.infectionDelay && void 0 !== this.infectionDelayStage) {
                                var o = this.infectionDelayStage;
                                if (o > r || o < 0) return;
                                this.infectionDelay > 1e3 * n.delay ? ((this.infectionStage = o), (this.infectionTime = 0), delete this.infectionDelay, delete this.infectionDelayStage) : (this.infectionDelay += e);
                            } else delete this.infectionDelay, delete this.infectionDelayStage;
                            if (void 0 !== this.infectionStage && void 0 !== this.infectionTime) {
                                var a = i[this.infectionStage];
                                void 0 !== a.duration && a.duration >= 0 && this.infectionTime > 1e3 * a.duration ? this.nextInfectionStage() : (this.infectionTime += e);
                            } else delete this.infectionStage, delete this.infectionTime;
                        }),
                        (e.prototype.getPosition = function () {
                            return { x: this.position.x + this.offset.x, y: this.position.y + this.offset.y };
                        }),
                        (e.prototype.destroy = function () {
                            this.destroyed = !0;
                        }),
                        (e.prototype.nextInfectionStage = function () {
                            var e = this.container.options,
                                t = e.infection.stages.length;
                            if (!(t <= 0 || void 0 === this.infectionStage) && ((this.infectionTime = 0), t <= ++this.infectionStage)) {
                                if (e.infection.cure) return delete this.infectionStage, void delete this.infectionTime;
                                (this.infectionStage = 0), (this.infectionTime = 0);
                            }
                        }),
                        (e.prototype.calcPosition = function (e, t) {
                            for (var n in e.plugins) {
                                var i = e.plugins[n],
                                    r = void 0 !== i.particlePosition ? i.particlePosition(t) : void 0;
                                if (void 0 !== r) return r;
                            }
                            var o = { x: 0, y: 0 };
                            return (
                                (o.x = t ? t.x : Math.random() * e.canvas.size.width),
                                (o.y = t ? t.y : Math.random() * e.canvas.size.height),
                                o.x > e.canvas.size.width - 2 * this.size.value ? (o.x -= this.size.value) : o.x < 2 * this.size.value && (o.x += this.size.value),
                                o.y > e.canvas.size.height - 2 * this.size.value ? (o.y -= this.size.value) : o.y < 2 * this.size.value && (o.y += this.size.value),
                                o
                            );
                        }),
                        (e.prototype.calculateVelocity = function () {
                            var e = o.Utils.getParticleBaseVelocity(this),
                                t = { horizontal: 0, vertical: 0 };
                            return (
                                this.particlesOptions.move.straight
                                    ? ((t.horizontal = e.x), (t.vertical = e.y), this.particlesOptions.move.random && ((t.horizontal *= Math.random()), (t.vertical *= Math.random())))
                                    : ((t.horizontal = e.x + Math.random() - 0.5), (t.vertical = e.y + Math.random() - 0.5)),
                                t
                            );
                        }),
                        e
                    );
                })();
            t.Particle = v;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.fill = !0), (this.close = !0);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.fill && (this.fill = e.fill), void 0 !== e.particles && (this.particles = e.particles));
                    }),
                    e
                );
            })();
            t.ShapeBase = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    e.repulse = "repulse";
                })(t.DivMode || (t.DivMode = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.prototype.draw = function (e, t, n, i) {
                        var r = this.getCenter(t, n),
                            o = this.getSidesData(t, n),
                            a = o.count.numerator * o.count.denominator,
                            l = o.count.numerator / o.count.denominator,
                            s = (180 * (l - 2)) / l,
                            u = Math.PI - (Math.PI * s) / 180;
                        if (e) {
                            e.beginPath(), e.translate(r.x, r.y), e.moveTo(0, 0);
                            for (var c = 0; c < a; c++) e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(u);
                        }
                    }),
                    e
                );
            })();
            t.PolygonDrawerBase = i;
        },
        function (e, t, n) {
            !(function (t, i) {
                var r;
                e.exports =
                    ((r = n(0)),
                    (function (e) {
                        function t(i) {
                            if (n[i]) return n[i].exports;
                            var r = (n[i] = { i: i, l: !1, exports: {} });
                            return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
                        }
                        var n = {};
                        return (
                            (t.m = e),
                            (t.c = n),
                            (t.d = function (e, n, i) {
                                t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
                            }),
                            (t.n = function (e) {
                                var n =
                                    e && e.__esModule
                                        ? function () {
                                              return e.default;
                                          }
                                        : function () {
                                              return e;
                                          };
                                return t.d(n, "a", n), n;
                            }),
                            (t.o = function (e, t) {
                                return Object.prototype.hasOwnProperty.call(e, t);
                            }),
                            (t.p = ""),
                            t((t.s = 7))
                        );
                    })([
                        function (e, t, n) {
                            "use strict";
                            function i(e, t) {
                                return (
                                    (function (e) {
                                        if (Array.isArray(e)) return e;
                                    })(e) ||
                                    (function (e, t) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                            var n = [],
                                                i = !0,
                                                r = !1,
                                                o = void 0;
                                            try {
                                                for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                                            } catch (s) {
                                                (r = !0), (o = s);
                                            } finally {
                                                try {
                                                    i || null == l.return || l.return();
                                                } finally {
                                                    if (r) throw o;
                                                }
                                            }
                                            return n;
                                        }
                                    })(e, t) ||
                                    (function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return r(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return (
                                                "Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                                            );
                                        }
                                    })(e, t) ||
                                    (function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    })()
                                );
                            }
                            function r(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            var o = n(1),
                                a = n.n(o),
                                l = n(8),
                                s = n.n(l),
                                u = n(2),
                                c = n(10),
                                f = n.n(c),
                                d = n(3),
                                p = n(6),
                                h = function (e) {
                                    if (!e) return null;
                                    var t = Object.keys(e);
                                    return 0 === t.length
                                        ? null
                                        : t.reduce(function (t, n) {
                                              return (t[Object(u.a)(n)] = e[n]), t;
                                          }, {});
                                },
                                v = function () {
                                    var e = a.a.useRef(!1);
                                    return (
                                        a.a.useEffect(function () {
                                            e.current = !0;
                                        }, []),
                                        e.current
                                    );
                                },
                                y = function (e) {
                                    var t = function () {
                                            return (function (e) {
                                                return e.query || Object(d.a)(e);
                                            })(e);
                                        },
                                        n = i(a.a.useState(t), 2),
                                        r = n[0],
                                        o = n[1];
                                    return (
                                        a.a.useEffect(
                                            function () {
                                                var e = t();
                                                r !== e && o(e);
                                            },
                                            [e]
                                        ),
                                        r
                                    );
                                };
                            t.a = function (e, t, n) {
                                var r = (function (e) {
                                        var t = a.a.useContext(p.a),
                                            n = function () {
                                                return h(e) || h(t);
                                            },
                                            r = i(a.a.useState(n), 2),
                                            o = r[0],
                                            l = r[1];
                                        return (
                                            a.a.useEffect(
                                                function () {
                                                    var e = n();
                                                    f()(o, e) || l(e);
                                                },
                                                [e, t]
                                            ),
                                            o
                                        );
                                    })(t),
                                    o = y(e);
                                if (!o) throw new Error("Invalid or missing MediaQuery!");
                                var l = (function (e) {
                                        var t = i(a.a.useState(e.matches), 2),
                                            n = t[0],
                                            r = t[1];
                                        return (
                                            a.a.useEffect(
                                                function () {
                                                    var t = function () {
                                                        r(e.matches);
                                                    };
                                                    return (
                                                        e.addListener(t),
                                                        t(),
                                                        function () {
                                                            e.removeListener(t);
                                                        }
                                                    );
                                                },
                                                [e]
                                            ),
                                            n
                                        );
                                    })(
                                        (function (e, t) {
                                            var n = function () {
                                                    return s()(e, t || {}, !!t);
                                                },
                                                r = i(a.a.useState(n), 2),
                                                o = r[0],
                                                l = r[1],
                                                u = v();
                                            return (
                                                a.a.useEffect(
                                                    function () {
                                                        return (
                                                            u && l(n()),
                                                            function () {
                                                                o.dispose();
                                                            }
                                                        );
                                                    },
                                                    [e, t]
                                                ),
                                                o
                                            );
                                        })(o, r)
                                    ),
                                    u = v();
                                return (
                                    a.a.useEffect(
                                        function () {
                                            u && n && n(l);
                                        },
                                        [l]
                                    ),
                                    l
                                );
                            };
                        },
                        function (e, t) {
                            e.exports = r;
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e) {
                                return "-" + e.toLowerCase();
                            }
                            var r = /[A-Z]/g,
                                o = /^ms-/,
                                a = {};
                            t.a = function (e) {
                                if (a.hasOwnProperty(e)) return a[e];
                                var t = e.replace(r, i);
                                return (a[e] = o.test(t) ? "-" + t : t);
                            };
                        },
                        function (e, t, n) {
                            "use strict";
                            var i = n(2),
                                r = n(11);
                            t.a = function (e) {
                                var t = [];
                                return (
                                    Object.keys(r.a.all).forEach(function (n) {
                                        var r = e[n];
                                        null != r &&
                                            t.push(
                                                (function (e, t) {
                                                    var n = Object(i.a)(e);
                                                    return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")");
                                                })(n, r)
                                            );
                                    }),
                                    t.join(" and ")
                                );
                            };
                        },
                        function (e, t, n) {
                            "use strict";
                            e.exports = n(13);
                        },
                        function (e, t, n) {
                            "use strict";
                            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                        },
                        function (e, t, n) {
                            "use strict";
                            var i = n(1),
                                r = n.n(i).a.createContext();
                            t.a = r;
                        },
                        function (e, t, n) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            var i = n(0),
                                r = n(17),
                                o = n(3),
                                a = n(6);
                            n.d(t, "default", function () {
                                return r.a;
                            }),
                                n.d(t, "useMediaQuery", function () {
                                    return i.a;
                                }),
                                n.d(t, "toQuery", function () {
                                    return o.a;
                                }),
                                n.d(t, "Context", function () {
                                    return a.a;
                                });
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e, t, n) {
                                function i(e) {
                                    (a.matches = e.matches), (a.media = e.media);
                                }
                                var a = this;
                                if (o && !n) {
                                    var l = o.call(window, e);
                                    (this.matches = l.matches), (this.media = l.media), l.addListener(i);
                                } else (this.matches = r(e, t)), (this.media = e);
                                (this.addListener = function (e) {
                                    l && l.addListener(e);
                                }),
                                    (this.removeListener = function (e) {
                                        l && l.removeListener(e);
                                    }),
                                    (this.dispose = function () {
                                        l && l.removeListener(i);
                                    });
                            }
                            var r = n(9).match,
                                o = "undefined" != typeof window ? window.matchMedia : null;
                            e.exports = function (e, t, n) {
                                return new i(e, t, n);
                            };
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e) {
                                return e.split(",").map(function (e) {
                                    var t = (e = e.trim()).match(l),
                                        n = t[1],
                                        i = t[2],
                                        r = t[3] || "",
                                        o = {};
                                    return (
                                        (o.inverse = !!n && "not" === n.toLowerCase()),
                                        (o.type = i ? i.toLowerCase() : "all"),
                                        (r = r.match(/\([^\)]+\)/g) || []),
                                        (o.expressions = r.map(function (e) {
                                            var t = e.match(s),
                                                n = t[1].toLowerCase().match(u);
                                            return { modifier: n[1], feature: n[2], value: t[2] };
                                        })),
                                        o
                                    );
                                });
                            }
                            function r(e) {
                                var t,
                                    n = Number(e);
                                return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n;
                            }
                            function o(e) {
                                var t = parseFloat(e);
                                switch (String(e).match(f)[1]) {
                                    case "dpcm":
                                        return t / 2.54;
                                    case "dppx":
                                        return 96 * t;
                                    default:
                                        return t;
                                }
                            }
                            function a(e) {
                                var t = parseFloat(e);
                                switch (String(e).match(c)[1]) {
                                    case "em":
                                    case "rem":
                                        return 16 * t;
                                    case "cm":
                                        return (96 * t) / 2.54;
                                    case "mm":
                                        return (96 * t) / 2.54 / 10;
                                    case "in":
                                        return 96 * t;
                                    case "pt":
                                        return 72 * t;
                                    case "pc":
                                        return (72 * t) / 12;
                                    default:
                                        return t;
                                }
                            }
                            (t.match = function (e, t) {
                                return i(e).some(function (e) {
                                    var n = e.inverse,
                                        i = "all" === e.type || t.type === e.type;
                                    if ((i && n) || (!i && !n)) return !1;
                                    var l = e.expressions.every(function (e) {
                                        var n = e.feature,
                                            i = e.modifier,
                                            l = e.value,
                                            s = t[n];
                                        if (!s) return !1;
                                        switch (n) {
                                            case "orientation":
                                            case "scan":
                                                return s.toLowerCase() === l.toLowerCase();
                                            case "width":
                                            case "height":
                                            case "device-width":
                                            case "device-height":
                                                (l = a(l)), (s = a(s));
                                                break;
                                            case "resolution":
                                                (l = o(l)), (s = o(s));
                                                break;
                                            case "aspect-ratio":
                                            case "device-aspect-ratio":
                                            case "device-pixel-ratio":
                                                (l = r(l)), (s = r(s));
                                                break;
                                            case "grid":
                                            case "color":
                                            case "color-index":
                                            case "monochrome":
                                                (l = parseInt(l, 10) || 1), (s = parseInt(s, 10) || 0);
                                        }
                                        switch (i) {
                                            case "min":
                                                return s >= l;
                                            case "max":
                                                return s <= l;
                                            default:
                                                return s === l;
                                        }
                                    });
                                    return (l && !n) || (!l && n);
                                });
                            }),
                                (t.parse = i);
                            var l = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                                s = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                                u = /^(?:(min|max)-)?(.+)/,
                                c = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                                f = /(dpi|dpcm|dppx)?$/;
                        },
                        function (e, t, n) {
                            "use strict";
                            e.exports = function (e, t) {
                                if (e === t) return !0;
                                if (!e || !t) return !1;
                                var n = Object.keys(e),
                                    i = Object.keys(t),
                                    r = n.length;
                                if (i.length !== r) return !1;
                                for (var o = 0; o < r; o++) {
                                    var a = n[o];
                                    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1;
                                }
                                return !0;
                            };
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t &&
                                        (i = i.filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                        })),
                                        n.push.apply(n, i);
                                }
                                return n;
                            }
                            function r(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? i(Object(n), !0).forEach(function (t) {
                                              o(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                        : i(Object(n)).forEach(function (t) {
                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                          });
                                }
                                return e;
                            }
                            function o(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                            }
                            var a = n(12),
                                l = n.n(a),
                                s = l.a.oneOfType([l.a.string, l.a.number]),
                                u = {
                                    orientation: l.a.oneOf(["portrait", "landscape"]),
                                    scan: l.a.oneOf(["progressive", "interlace"]),
                                    aspectRatio: l.a.string,
                                    deviceAspectRatio: l.a.string,
                                    height: s,
                                    deviceHeight: s,
                                    width: s,
                                    deviceWidth: s,
                                    color: l.a.bool,
                                    colorIndex: l.a.bool,
                                    monochrome: l.a.bool,
                                    resolution: s,
                                },
                                c = r(
                                    {
                                        minAspectRatio: l.a.string,
                                        maxAspectRatio: l.a.string,
                                        minDeviceAspectRatio: l.a.string,
                                        maxDeviceAspectRatio: l.a.string,
                                        minHeight: s,
                                        maxHeight: s,
                                        minDeviceHeight: s,
                                        maxDeviceHeight: s,
                                        minWidth: s,
                                        maxWidth: s,
                                        minDeviceWidth: s,
                                        maxDeviceWidth: s,
                                        minColor: l.a.number,
                                        maxColor: l.a.number,
                                        minColorIndex: l.a.number,
                                        maxColorIndex: l.a.number,
                                        minMonochrome: l.a.number,
                                        maxMonochrome: l.a.number,
                                        minResolution: s,
                                        maxResolution: s,
                                    },
                                    u
                                ),
                                f = { all: l.a.bool, grid: l.a.bool, aural: l.a.bool, braille: l.a.bool, handheld: l.a.bool, print: l.a.bool, projection: l.a.bool, screen: l.a.bool, tty: l.a.bool, tv: l.a.bool, embossed: l.a.bool },
                                d = r(r({}, f), c);
                            (u.type = Object.keys(f)), (t.a = { all: d, types: f, matchers: u, features: c });
                        },
                        function (e, t, n) {
                            var i = n(4);
                            e.exports = n(14)(i.isElement, !0);
                        },
                        function (e, t, n) {
                            "use strict";
                            !(function () {
                                function e(e) {
                                    if ("object" == typeof e && null !== e) {
                                        var t = e.$$typeof;
                                        switch (t) {
                                            case r:
                                                var n = e.type;
                                                switch (n) {
                                                    case f:
                                                    case d:
                                                    case a:
                                                    case s:
                                                    case l:
                                                    case h:
                                                        return n;
                                                    default:
                                                        var i = n && n.$$typeof;
                                                        switch (i) {
                                                            case c:
                                                            case p:
                                                            case m:
                                                            case y:
                                                            case u:
                                                                return i;
                                                            default:
                                                                return t;
                                                        }
                                                }
                                            case o:
                                                return t;
                                        }
                                    }
                                }
                                function n(t) {
                                    return e(t) === d;
                                }
                                var i = "function" == typeof Symbol && Symbol.for,
                                    r = i ? Symbol.for("react.element") : 60103,
                                    o = i ? Symbol.for("react.portal") : 60106,
                                    a = i ? Symbol.for("react.fragment") : 60107,
                                    l = i ? Symbol.for("react.strict_mode") : 60108,
                                    s = i ? Symbol.for("react.profiler") : 60114,
                                    u = i ? Symbol.for("react.provider") : 60109,
                                    c = i ? Symbol.for("react.context") : 60110,
                                    f = i ? Symbol.for("react.async_mode") : 60111,
                                    d = i ? Symbol.for("react.concurrent_mode") : 60111,
                                    p = i ? Symbol.for("react.forward_ref") : 60112,
                                    h = i ? Symbol.for("react.suspense") : 60113,
                                    v = i ? Symbol.for("react.suspense_list") : 60120,
                                    y = i ? Symbol.for("react.memo") : 60115,
                                    m = i ? Symbol.for("react.lazy") : 60116,
                                    b = i ? Symbol.for("react.block") : 60121,
                                    g = i ? Symbol.for("react.fundamental") : 60117,
                                    w = i ? Symbol.for("react.responder") : 60118,
                                    x = i ? Symbol.for("react.scope") : 60119,
                                    k = f,
                                    _ = d,
                                    P = c,
                                    S = u,
                                    T = r,
                                    O = p,
                                    C = a,
                                    E = m,
                                    M = y,
                                    z = o,
                                    j = s,
                                    A = l,
                                    R = h,
                                    I = !1;
                                (t.AsyncMode = k),
                                    (t.ConcurrentMode = _),
                                    (t.ContextConsumer = P),
                                    (t.ContextProvider = S),
                                    (t.Element = T),
                                    (t.ForwardRef = O),
                                    (t.Fragment = C),
                                    (t.Lazy = E),
                                    (t.Memo = M),
                                    (t.Portal = z),
                                    (t.Profiler = j),
                                    (t.StrictMode = A),
                                    (t.Suspense = R),
                                    (t.isAsyncMode = function (t) {
                                        return (
                                            I ||
                                                ((I = !0),
                                                console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),
                                            n(t) || e(t) === f
                                        );
                                    }),
                                    (t.isConcurrentMode = n),
                                    (t.isContextConsumer = function (t) {
                                        return e(t) === c;
                                    }),
                                    (t.isContextProvider = function (t) {
                                        return e(t) === u;
                                    }),
                                    (t.isElement = function (e) {
                                        return "object" == typeof e && null !== e && e.$$typeof === r;
                                    }),
                                    (t.isForwardRef = function (t) {
                                        return e(t) === p;
                                    }),
                                    (t.isFragment = function (t) {
                                        return e(t) === a;
                                    }),
                                    (t.isLazy = function (t) {
                                        return e(t) === m;
                                    }),
                                    (t.isMemo = function (t) {
                                        return e(t) === y;
                                    }),
                                    (t.isPortal = function (t) {
                                        return e(t) === o;
                                    }),
                                    (t.isProfiler = function (t) {
                                        return e(t) === s;
                                    }),
                                    (t.isStrictMode = function (t) {
                                        return e(t) === l;
                                    }),
                                    (t.isSuspense = function (t) {
                                        return e(t) === h;
                                    }),
                                    (t.isValidElementType = function (e) {
                                        return (
                                            "string" == typeof e ||
                                            "function" == typeof e ||
                                            e === a ||
                                            e === d ||
                                            e === s ||
                                            e === l ||
                                            e === h ||
                                            e === v ||
                                            ("object" == typeof e &&
                                                null !== e &&
                                                (e.$$typeof === m || e.$$typeof === y || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === g || e.$$typeof === w || e.$$typeof === x || e.$$typeof === b))
                                        );
                                    }),
                                    (t.typeOf = e);
                            })();
                        },
                        function (e, t, n) {
                            "use strict";
                            function i() {
                                return null;
                            }
                            var r,
                                o = n(4),
                                a = n(15),
                                l = n(5),
                                s = n(16),
                                u = Function.call.bind(Object.prototype.hasOwnProperty);
                            (r = function (e) {
                                var t = "Warning: " + e;
                                "undefined" != typeof console && console.error(t);
                                try {
                                    throw new Error(t);
                                } catch (n) {}
                            }),
                                (e.exports = function (e, t) {
                                    function n(e, t) {
                                        return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
                                    }
                                    function c(e) {
                                        (this.message = e), (this.stack = "");
                                    }
                                    function f(e) {
                                        function n(n, a, s, u, f, d, p) {
                                            if (((u = u || g), (d = d || s), p !== l)) {
                                                if (t) {
                                                    var h = new Error(
                                                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                                                    );
                                                    throw ((h.name = "Invariant Violation"), h);
                                                }
                                                if ("undefined" != typeof console) {
                                                    var v = u + ":" + s;
                                                    !i[v] &&
                                                        o < 3 &&
                                                        (r(
                                                            "You are manually calling a React.PropTypes validation function for the `" +
                                                                d +
                                                                "` prop on `" +
                                                                u +
                                                                "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                                                        ),
                                                        (i[v] = !0),
                                                        o++);
                                                }
                                            }
                                            return null == a[s]
                                                ? n
                                                    ? new c(
                                                          null === a[s]
                                                              ? "The " + f + " `" + d + "` is marked as required in `" + u + "`, but its value is `null`."
                                                              : "The " + f + " `" + d + "` is marked as required in `" + u + "`, but its value is `undefined`."
                                                      )
                                                    : null
                                                : e(a, s, u, f, d);
                                        }
                                        var i = {},
                                            o = 0,
                                            a = n.bind(null, !1);
                                        return (a.isRequired = n.bind(null, !0)), a;
                                    }
                                    function d(e) {
                                        return f(function (t, n, i, r, o, a) {
                                            var l = t[n];
                                            return h(l) !== e ? new c("Invalid " + r + " `" + o + "` of type `" + v(l) + "` supplied to `" + i + "`, expected `" + e + "`.") : null;
                                        });
                                    }
                                    function p(t) {
                                        switch (typeof t) {
                                            case "number":
                                            case "string":
                                            case "undefined":
                                                return !0;
                                            case "boolean":
                                                return !t;
                                            case "object":
                                                if (Array.isArray(t)) return t.every(p);
                                                if (null === t || e(t)) return !0;
                                                var n = (function (e) {
                                                    var t = e && ((m && e[m]) || e[b]);
                                                    if ("function" == typeof t) return t;
                                                })(t);
                                                if (!n) return !1;
                                                var i,
                                                    r = n.call(t);
                                                if (n !== t.entries) {
                                                    for (; !(i = r.next()).done; ) if (!p(i.value)) return !1;
                                                } else
                                                    for (; !(i = r.next()).done; ) {
                                                        var o = i.value;
                                                        if (o && !p(o[1])) return !1;
                                                    }
                                                return !0;
                                            default:
                                                return !1;
                                        }
                                    }
                                    function h(e) {
                                        var t = typeof e;
                                        return Array.isArray(e)
                                            ? "array"
                                            : e instanceof RegExp
                                            ? "object"
                                            : (function (e, t) {
                                                  return "symbol" === e || (!!t && ("Symbol" === t["@@toStringTag"] || ("function" == typeof Symbol && t instanceof Symbol)));
                                              })(t, e)
                                            ? "symbol"
                                            : t;
                                    }
                                    function v(e) {
                                        if (void 0 === e || null === e) return "" + e;
                                        var t = h(e);
                                        if ("object" === t) {
                                            if (e instanceof Date) return "date";
                                            if (e instanceof RegExp) return "regexp";
                                        }
                                        return t;
                                    }
                                    function y(e) {
                                        var t = v(e);
                                        switch (t) {
                                            case "array":
                                            case "object":
                                                return "an " + t;
                                            case "boolean":
                                            case "date":
                                            case "regexp":
                                                return "a " + t;
                                            default:
                                                return t;
                                        }
                                    }
                                    var m = "function" == typeof Symbol && Symbol.iterator,
                                        b = "@@iterator",
                                        g = "<<anonymous>>",
                                        w = {
                                            array: d("array"),
                                            bool: d("boolean"),
                                            func: d("function"),
                                            number: d("number"),
                                            object: d("object"),
                                            string: d("string"),
                                            symbol: d("symbol"),
                                            any: f(i),
                                            arrayOf: function (e) {
                                                return f(function (t, n, i, r, o) {
                                                    if ("function" != typeof e) return new c("Property `" + o + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
                                                    var a = t[n];
                                                    if (!Array.isArray(a)) return new c("Invalid " + r + " `" + o + "` of type `" + h(a) + "` supplied to `" + i + "`, expected an array.");
                                                    for (var s = 0; s < a.length; s++) {
                                                        var u = e(a, s, i, r, o + "[" + s + "]", l);
                                                        if (u instanceof Error) return u;
                                                    }
                                                    return null;
                                                });
                                            },
                                            element: f(function (t, n, i, r, o) {
                                                var a = t[n];
                                                return e(a) ? null : new c("Invalid " + r + " `" + o + "` of type `" + h(a) + "` supplied to `" + i + "`, expected a single ReactElement.");
                                            }),
                                            elementType: f(function (e, t, n, i, r) {
                                                var a = e[t];
                                                return o.isValidElementType(a) ? null : new c("Invalid " + i + " `" + r + "` of type `" + h(a) + "` supplied to `" + n + "`, expected a single ReactElement type.");
                                            }),
                                            instanceOf: function (e) {
                                                return f(function (t, n, i, r, o) {
                                                    if (!(t[n] instanceof e)) {
                                                        var a = e.name || g;
                                                        return new c(
                                                            "Invalid " + r + " `" + o + "` of type `" + ((l = t[n]).constructor && l.constructor.name ? l.constructor.name : g) + "` supplied to `" + i + "`, expected instance of `" + a + "`."
                                                        );
                                                    }
                                                    var l;
                                                    return null;
                                                });
                                            },
                                            node: f(function (e, t, n, i, r) {
                                                return p(e[t]) ? null : new c("Invalid " + i + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.");
                                            }),
                                            objectOf: function (e) {
                                                return f(function (t, n, i, r, o) {
                                                    if ("function" != typeof e) return new c("Property `" + o + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
                                                    var a = t[n],
                                                        s = h(a);
                                                    if ("object" !== s) return new c("Invalid " + r + " `" + o + "` of type `" + s + "` supplied to `" + i + "`, expected an object.");
                                                    for (var f in a)
                                                        if (u(a, f)) {
                                                            var d = e(a, f, i, r, o + "." + f, l);
                                                            if (d instanceof Error) return d;
                                                        }
                                                    return null;
                                                });
                                            },
                                            oneOf: function (e) {
                                                function t(t, i, r, o, a) {
                                                    for (var l = t[i], s = 0; s < e.length; s++) if (n(l, e[s])) return null;
                                                    var u = JSON.stringify(e, function (e, t) {
                                                        return "symbol" === v(t) ? String(t) : t;
                                                    });
                                                    return new c("Invalid " + o + " `" + a + "` of value `" + String(l) + "` supplied to `" + r + "`, expected one of " + u + ".");
                                                }
                                                return Array.isArray(e)
                                                    ? f(t)
                                                    : (r(
                                                          arguments.length > 1
                                                              ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                                                              : "Invalid argument supplied to oneOf, expected an array."
                                                      ),
                                                      i);
                                            },
                                            oneOfType: function (e) {
                                                if (!Array.isArray(e)) return r("Invalid argument supplied to oneOfType, expected an instance of array."), i;
                                                for (var t = 0; t < e.length; t++) {
                                                    var n = e[t];
                                                    if ("function" != typeof n) return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + y(n) + " at index " + t + "."), i;
                                                }
                                                return f(function (t, n, i, r, o) {
                                                    for (var a = 0; a < e.length; a++) if (null == (0, e[a])(t, n, i, r, o, l)) return null;
                                                    return new c("Invalid " + r + " `" + o + "` supplied to `" + i + "`.");
                                                });
                                            },
                                            shape: function (e) {
                                                return f(function (t, n, i, r, o) {
                                                    var a = t[n],
                                                        s = h(a);
                                                    if ("object" !== s) return new c("Invalid " + r + " `" + o + "` of type `" + s + "` supplied to `" + i + "`, expected `object`.");
                                                    for (var u in e) {
                                                        var f = e[u];
                                                        if (f) {
                                                            var d = f(a, u, i, r, o + "." + u, l);
                                                            if (d) return d;
                                                        }
                                                    }
                                                    return null;
                                                });
                                            },
                                            exact: function (e) {
                                                return f(function (t, n, i, r, o) {
                                                    var s = t[n],
                                                        u = h(s);
                                                    if ("object" !== u) return new c("Invalid " + r + " `" + o + "` of type `" + u + "` supplied to `" + i + "`, expected `object`.");
                                                    var f = a({}, t[n], e);
                                                    for (var d in f) {
                                                        var p = e[d];
                                                        if (!p)
                                                            return new c(
                                                                "Invalid " +
                                                                    r +
                                                                    " `" +
                                                                    o +
                                                                    "` key `" +
                                                                    d +
                                                                    "` supplied to `" +
                                                                    i +
                                                                    "`.\nBad object: " +
                                                                    JSON.stringify(t[n], null, "  ") +
                                                                    "\nValid keys: " +
                                                                    JSON.stringify(Object.keys(e), null, "  ")
                                                            );
                                                        var v = p(s, d, i, r, o + "." + d, l);
                                                        if (v) return v;
                                                    }
                                                    return null;
                                                });
                                            },
                                        };
                                    return (c.prototype = Error.prototype), (w.checkPropTypes = s), (w.resetWarningCache = s.resetWarningCache), (w.PropTypes = w), w;
                                });
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e) {
                                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                return Object(e);
                            }
                            var r = Object.getOwnPropertySymbols,
                                o = Object.prototype.hasOwnProperty,
                                a = Object.prototype.propertyIsEnumerable;
                            e.exports = (function () {
                                try {
                                    if (!Object.assign) return !1;
                                    var e = new String("abc");
                                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                                    if (
                                        "0123456789" !==
                                        Object.getOwnPropertyNames(t)
                                            .map(function (e) {
                                                return t[e];
                                            })
                                            .join("")
                                    )
                                        return !1;
                                    var i = {};
                                    return (
                                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                                            i[e] = e;
                                        }),
                                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                                    );
                                } catch (r) {
                                    return !1;
                                }
                            })()
                                ? Object.assign
                                : function (e, t) {
                                      for (var n, l, s = i(e), u = 1; u < arguments.length; u++) {
                                          for (var c in (n = Object(arguments[u]))) o.call(n, c) && (s[c] = n[c]);
                                          if (r) {
                                              l = r(n);
                                              for (var f = 0; f < l.length; f++) a.call(n, l[f]) && (s[l[f]] = n[l[f]]);
                                          }
                                      }
                                      return s;
                                  };
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e, t, n, i, s) {
                                for (var u in e)
                                    if (l(e, u)) {
                                        var c;
                                        try {
                                            if ("function" != typeof e[u]) {
                                                var f = Error((i || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.");
                                                throw ((f.name = "Invariant Violation"), f);
                                            }
                                            c = e[u](t, u, i, n, null, o);
                                        } catch (p) {
                                            c = p;
                                        }
                                        if (
                                            (!c ||
                                                c instanceof Error ||
                                                r(
                                                    (i || "React class") +
                                                        ": type specification of " +
                                                        n +
                                                        " `" +
                                                        u +
                                                        "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                                                        typeof c +
                                                        ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                                                ),
                                            c instanceof Error && !(c.message in a))
                                        ) {
                                            a[c.message] = !0;
                                            var d = s ? s() : "";
                                            r("Failed " + n + " type: " + c.message + (null != d ? d : ""));
                                        }
                                    }
                            }
                            var r = function () {},
                                o = n(5),
                                a = {},
                                l = Function.call.bind(Object.prototype.hasOwnProperty);
                            (r = function (e) {
                                var t = "Warning: " + e;
                                "undefined" != typeof console && console.error(t);
                                try {
                                    throw new Error(t);
                                } catch (n) {}
                            }),
                                (i.resetWarningCache = function () {
                                    a = {};
                                }),
                                (e.exports = i);
                        },
                        function (e, t, n) {
                            "use strict";
                            function i(e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            r = {},
                                            o = Object.keys(e);
                                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                        return r;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                                }
                                return r;
                            }
                            t.a = function (e) {
                                var t = e.children,
                                    n = e.device,
                                    o = e.onChange,
                                    a = i(e, ["children", "device", "onChange"]),
                                    l = Object(r.a)(a, n, o);
                                return "function" == typeof t ? t(l) : l ? t : null;
                            };
                            var r = n(0);
                        },
                    ]));
            })("undefined" != typeof self && self);
        },
        function (e, t, n) {
            "use strict";
            var i = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
            function a(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e);
            }
            e.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join("")
                    )
                        return !1;
                    var i = {};
                    return (
                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            i[e] = e;
                        }),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    );
                } catch (r) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (e, t) {
                      for (var n, l, s = a(e), u = 1; u < arguments.length; u++) {
                          for (var c in (n = Object(arguments[u]))) r.call(n, c) && (s[c] = n[c]);
                          if (i) {
                              l = i(n);
                              for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (s[l[f]] = n[l[f]]);
                          }
                      }
                      return s;
                  };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.path = "path"), (e.radius = "radius");
                })(t.PolygonMaskMoveType || (t.PolygonMaskMoveType = {}));
        },
        function (e, t) {
            e.exports = function (e, t) {
                return e === t || (e !== e && t !== t);
            };
        },
        function (e, t, n) {
            var i = n(17),
                r = n(38);
            e.exports = function (e) {
                if (!r(e)) return !1;
                var t = i(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
            };
        },
        function (e, t, n) {
            (function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.exports = n;
            }.call(this, n(95)));
        },
        function (e, t) {
            e.exports = function (e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
            };
        },
        function (e, t) {
            var n = Function.prototype.toString;
            e.exports = function (e) {
                if (null != e) {
                    try {
                        return n.call(e);
                    } catch (t) {}
                    try {
                        return e + "";
                    } catch (t) {}
                }
                return "";
            };
        },
        function (e, t, n) {
            var i = n(101),
                r = n(108),
                o = n(110),
                a = n(111),
                l = n(112);
            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            (s.prototype.clear = i), (s.prototype.delete = r), (s.prototype.get = o), (s.prototype.has = a), (s.prototype.set = l), (e.exports = s);
        },
        function (e, t, n) {
            var i = n(113),
                r = n(116),
                o = n(117);
            e.exports = function (e, t, n, a, l, s) {
                var u = 1 & n,
                    c = e.length,
                    f = t.length;
                if (c != f && !(u && f > c)) return !1;
                var d = s.get(e);
                if (d && s.get(t)) return d == t;
                var p = -1,
                    h = !0,
                    v = 2 & n ? new i() : void 0;
                for (s.set(e, t), s.set(t, e); ++p < c; ) {
                    var y = e[p],
                        m = t[p];
                    if (a) var b = u ? a(m, y, p, t, e, s) : a(y, m, p, e, t, s);
                    if (void 0 !== b) {
                        if (b) continue;
                        h = !1;
                        break;
                    }
                    if (v) {
                        if (
                            !r(t, function (e, t) {
                                if (!o(v, t) && (y === e || l(y, e, n, a, s))) return v.push(t);
                            })
                        ) {
                            h = !1;
                            break;
                        }
                    } else if (y !== m && !l(y, m, n, a, s)) {
                        h = !1;
                        break;
                    }
                }
                return s.delete(e), s.delete(t), h;
            };
        },
        function (e, t, n) {
            (function (e) {
                var i = n(5),
                    r = n(134),
                    o = t && !t.nodeType && t,
                    a = o && "object" == typeof e && e && !e.nodeType && e,
                    l = a && a.exports === o ? i.Buffer : void 0,
                    s = (l ? l.isBuffer : void 0) || r;
                e.exports = s;
            }.call(this, n(43)(e)));
        },
        function (e, t) {
            e.exports = function (e) {
                return (
                    e.webpackPolyfill ||
                        ((e.deprecate = function () {}),
                        (e.paths = []),
                        e.children || (e.children = []),
                        Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return e.l;
                            },
                        }),
                        Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function () {
                                return e.i;
                            },
                        }),
                        (e.webpackPolyfill = 1)),
                    e
                );
            };
        },
        function (e, t, n) {
            var i = n(136),
                r = n(137),
                o = n(138),
                a = o && o.isTypedArray,
                l = a ? r(a) : i;
            e.exports = l;
        },
        function (e, t) {
            e.exports = function (e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(150),
                o = n(152),
                a = n(153),
                l = n(195),
                s = n(196),
                u = n(57),
                c = n(22),
                f = n(227),
                d = (function () {
                    function e(e, t) {
                        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                        (this.started = !1),
                            (this.destroyed = !1),
                            (this.id = e),
                            (this.paused = !0),
                            (this.sourceOptions = t),
                            (this.lastFrameTime = 0),
                            (this.pageHidden = !1),
                            (this.retina = new l.Retina(this)),
                            (this.canvas = new r.Canvas(this)),
                            (this.particles = new a.Particles(this)),
                            (this.drawer = new s.FrameManager(this)),
                            (this.interactivity = { mouse: {} }),
                            (this.bubble = {}),
                            (this.repulse = { particles: [] }),
                            (this.plugins = {}),
                            (this.drawers = {}),
                            (this.density = 1),
                            (this.options = new u.Options());
                        for (var d = 0, p = n; d < p.length; d++) {
                            var h = p[d];
                            this.options.load(c.Plugins.getPreset(h));
                        }
                        for (var v = 0, y = c.Plugins.getSupportedShapes(); v < y.length; v++) {
                            var m = y[v];
                            this.drawers[m] = c.Plugins.getShapeDrawer(m);
                        }
                        this.sourceOptions && this.options.load(this.sourceOptions), (this.simplex = new f.SimplexNoise()), (this.eventListeners = new o.EventListeners(this));
                    }
                    return (
                        (e.requestFrame = function (e) {
                            return window.customRequestAnimationFrame(e);
                        }),
                        (e.cancelAnimation = function (e) {
                            window.cancelAnimationFrame(e);
                        }),
                        (e.prototype.play = function (e) {
                            var t = this.paused || e;
                            if ((this.paused && (this.paused = !1), t)) {
                                for (var n in this.plugins) {
                                    var i = this.plugins[n];
                                    i.play && i.play();
                                }
                                this.lastFrameTime = performance.now();
                            }
                            this.draw();
                        }),
                        (e.prototype.pause = function () {
                            if ((void 0 !== this.drawAnimationFrame && (e.cancelAnimation(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused)) {
                                for (var t in this.plugins) {
                                    var n = this.plugins[t];
                                    n.pause && n.pause();
                                }
                                this.pageHidden || (this.paused = !0);
                            }
                        }),
                        (e.prototype.draw = function () {
                            var t = this;
                            this.drawAnimationFrame = e.requestFrame(function (e) {
                                return t.drawer.nextFrame(e);
                            });
                        }),
                        (e.prototype.getAnimationStatus = function () {
                            return !this.paused;
                        }),
                        (e.prototype.densityAutoParticles = function () {
                            this.initDensityFactor();
                            var e = this.options.particles.number,
                                t = e.value,
                                n = e.limit > 0 ? e.limit : t,
                                i = Math.min(t, n) * this.density,
                                r = this.particles.count;
                            r < i ? this.particles.push(Math.abs(i - r)) : r > i && this.particles.removeQuantity(r - i);
                        }),
                        (e.prototype.initDensityFactor = function () {
                            var e = this.options.particles.number.density;
                            if (this.canvas.element && e.enable) {
                                var t = this.canvas.element,
                                    n = this.retina.pixelRatio;
                                this.density = (t.width * t.height) / (e.factor * n * e.area);
                            }
                        }),
                        (e.prototype.destroy = function () {
                            for (var e in (this.stop(),
                            this.retina.reset(),
                            this.canvas.destroy(),
                            delete this.interactivity,
                            delete this.options,
                            delete this.retina,
                            delete this.canvas,
                            delete this.particles,
                            delete this.bubble,
                            delete this.repulse,
                            delete this.drawer,
                            delete this.eventListeners,
                            this.drawers)) {
                                var t = this.drawers[e];
                                void 0 !== t.destroy && t.destroy(this);
                            }
                            (this.drawers = {}), (this.destroyed = !0);
                        }),
                        (e.prototype.exportImg = function (e) {
                            this.exportImage(e);
                        }),
                        (e.prototype.exportImage = function (e, t, n) {
                            var i;
                            return null === (i = this.canvas.element) || void 0 === i ? void 0 : i.toBlob(e, null !== t && void 0 !== t ? t : "image/png", n);
                        }),
                        (e.prototype.exportConfiguration = function () {
                            return JSON.stringify(this.options, void 0, 2);
                        }),
                        (e.prototype.refresh = function () {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.stop(), [4, this.start()];
                                        case 1:
                                            return e.sent(), [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.stop = function () {
                            if (this.started) {
                                for (var e in ((this.started = !1), this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.retina.reset(), this.canvas.clear(), this.plugins)) {
                                    var t = this.plugins[e];
                                    void 0 !== t.stop && t.stop();
                                }
                                (this.plugins = {}), delete this.particles.lineLinkedColor;
                            }
                        }),
                        (e.prototype.start = function () {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var e, t, n, r, o, a, l, s, u, f, d;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.started) return [2];
                                            for (o in (e = c.Plugins.getAvailablePlugins(this))) this.plugins[o] = e[o];
                                            for (n in ((this.started = !0), this.eventListeners.addListeners(), (t = []), this.plugins)) t.push(n);
                                            (r = 0), (i.label = 1);
                                        case 1:
                                            return r < t.length ? ((o = t[r]), void 0 === (a = this.plugins[o]).startAsync ? [3, 3] : [4, a.startAsync()]) : [3, 5];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            void 0 !== a.start && a.start(), (i.label = 4);
                                        case 4:
                                            return r++, [3, 1];
                                        case 5:
                                            for (s in ((l = []), this.drawers)) l.push(s);
                                            (u = 0), (i.label = 6);
                                        case 6:
                                            return u < l.length ? ((f = l[u]), void 0 === (d = this.drawers[f]).init ? [3, 8] : [4, d.init(this)]) : [3, 9];
                                        case 7:
                                            i.sent(), (i.label = 8);
                                        case 8:
                                            return u++, [3, 6];
                                        case 9:
                                            return this.init(), this.play(), [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.init = function () {
                            for (var e in (this.retina.init(), this.canvas.init(), this.particles.init(), this.densityAutoParticles(), this.plugins)) {
                                var t = this.plugins[e];
                                void 0 !== t.init && t.init();
                            }
                        }),
                        e
                    );
                })();
            t.Container = d;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e[(e.increasing = 0)] = "increasing"), (e[(e.decreasing = 1)] = "decreasing");
                })(t.SizeAnimationStatus || (t.SizeAnimationStatus = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e[(e.increasing = 0)] = "increasing"), (e[(e.decreasing = 1)] = "decreasing");
                })(t.OpacityAnimationStatus || (t.OpacityAnimationStatus = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = n(156),
                o = n(158),
                a = n(166),
                l = n(168),
                s = n(50),
                u = n(174),
                c = n(177),
                f = n(179),
                d = n(180),
                p = n(181),
                h = n(182),
                v = (function () {
                    function e() {
                        (this.collisions = new p.Collisions()),
                            (this.color = new i.OptionsColor()),
                            (this.lineLinked = new r.LineLinked()),
                            (this.move = new o.Move()),
                            (this.number = new a.ParticlesNumber()),
                            (this.opacity = new l.Opacity()),
                            (this.rotate = new c.Rotate()),
                            (this.shadow = new f.Shadow()),
                            (this.shape = new s.Shape()),
                            (this.size = new u.Size()),
                            (this.stroke = new d.Stroke()),
                            (this.twinkle = new h.Twinkle());
                    }
                    return (
                        Object.defineProperty(e.prototype, "line_linked", {
                            get: function () {
                                return this.lineLinked;
                            },
                            set: function (e) {
                                this.lineLinked = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t, n, r, o, a, l;
                            if (void 0 !== e) {
                                void 0 !== e.color &&
                                    (e.color instanceof Array
                                        ? (this.color = e.color.map(function (e) {
                                              return i.OptionsColor.create(void 0, e);
                                          }))
                                        : (this.color instanceof Array && (this.color = new i.OptionsColor()), (this.color = i.OptionsColor.create(this.color, e.color))));
                                var s = null !== (t = e.lineLinked) && void 0 !== t ? t : e.line_linked;
                                void 0 !== s && this.lineLinked.load(s),
                                    this.move.load(e.move),
                                    this.number.load(e.number),
                                    this.opacity.load(e.opacity),
                                    this.rotate.load(e.rotate),
                                    this.shape.load(e.shape),
                                    this.size.load(e.size),
                                    this.shadow.load(e.shadow),
                                    this.twinkle.load(e.twinkle);
                                var u = null !== (r = null === (n = e.move) || void 0 === n ? void 0 : n.collisions) && void 0 !== r ? r : null === (o = e.move) || void 0 === o ? void 0 : o.bounce;
                                void 0 !== u && (this.collisions.enable = u), this.collisions.load(e.collisions);
                                var c = null !== (a = e.stroke) && void 0 !== a ? a : null === (l = e.shape) || void 0 === l ? void 0 : l.stroke;
                                void 0 !== c &&
                                    (c instanceof Array
                                        ? (this.stroke = c.map(function (e) {
                                              var t = new d.Stroke();
                                              return t.load(e), t;
                                          }))
                                        : (this.stroke instanceof Array && (this.stroke = new d.Stroke()), this.stroke.load(c)));
                            }
                        }),
                        e
                    );
                })();
            t.Particles = v;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(9),
                r = n(171),
                o = n(172),
                a = n(173),
                l = n(1),
                s = (function () {
                    function e() {
                        (this.options = {}), (this.character = new a.CharacterShape()), (this.image = new r.ImageShape()), (this.polygon = new o.PolygonShape()), (this.type = i.ShapeType.circle);
                    }
                    return (
                        Object.defineProperty(e.prototype, "image", {
                            get: function () {
                                var e;
                                return null !== (e = this.options[i.ShapeType.image]) && void 0 !== e ? e : this.options[i.ShapeType.images];
                            },
                            set: function (e) {
                                (this.options[i.ShapeType.image] = e), (this.options[i.ShapeType.images] = e);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "custom", {
                            get: function () {
                                return this.options;
                            },
                            set: function (e) {
                                this.options = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "images", {
                            get: function () {
                                return this.image instanceof Array ? this.image : [this.image];
                            },
                            set: function (e) {
                                this.image = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "stroke", {
                            get: function () {
                                return [];
                            },
                            set: function (e) {},
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "character", {
                            get: function () {
                                var e;
                                return null !== (e = this.options[i.ShapeType.character]) && void 0 !== e ? e : this.options[i.ShapeType.char];
                            },
                            set: function (e) {
                                (this.options[i.ShapeType.character] = e), (this.options[i.ShapeType.char] = e);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "polygon", {
                            get: function () {
                                var e;
                                return null !== (e = this.options[i.ShapeType.polygon]) && void 0 !== e ? e : this.options[i.ShapeType.star];
                            },
                            set: function (e) {
                                (this.options[i.ShapeType.polygon] = e), (this.options[i.ShapeType.star] = e);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t, n, r, o, a, s, u, c, f, d, p, h, v, y;
                            if (void 0 !== e) {
                                var m = null !== (t = e.options) && void 0 !== t ? t : e.custom;
                                if (void 0 !== m)
                                    for (var b in m) {
                                        var g;
                                        void 0 !== (g = m[b]) && (this.options[b] = l.Utils.deepExtend(null !== (n = this.options[b]) && void 0 !== n ? n : {}, g));
                                    }
                                if (void 0 !== e.character)
                                    void 0 !== (g = e.character) &&
                                        (g instanceof Array
                                            ? this.options[i.ShapeType.character] instanceof Array
                                                ? ((this.options[i.ShapeType.character] = l.Utils.deepExtend(null !== (r = this.options[i.ShapeType.character]) && void 0 !== r ? r : [], g)),
                                                  (this.options[i.ShapeType.char] = l.Utils.deepExtend(null !== (o = this.options[i.ShapeType.char]) && void 0 !== o ? o : [], g)))
                                                : ((this.options[i.ShapeType.character] = l.Utils.deepExtend([], g)), (this.options[i.ShapeType.char] = l.Utils.deepExtend([], g)))
                                            : this.options[i.ShapeType.character] instanceof Array
                                            ? ((this.options[i.ShapeType.character] = l.Utils.deepExtend({}, g)), (this.options[i.ShapeType.char] = l.Utils.deepExtend({}, g)))
                                            : ((this.options[i.ShapeType.character] = l.Utils.deepExtend(null !== (a = this.options[i.ShapeType.character]) && void 0 !== a ? a : [], g)),
                                              (this.options[i.ShapeType.char] = l.Utils.deepExtend(null !== (s = this.options[i.ShapeType.char]) && void 0 !== s ? s : [], g))));
                                if (void 0 !== e.polygon)
                                    void 0 !== (g = e.polygon) &&
                                        (g instanceof Array
                                            ? this.options[i.ShapeType.polygon] instanceof Array
                                                ? ((this.options[i.ShapeType.polygon] = l.Utils.deepExtend(null !== (u = this.options[i.ShapeType.polygon]) && void 0 !== u ? u : [], g)),
                                                  (this.options[i.ShapeType.star] = l.Utils.deepExtend(null !== (c = this.options[i.ShapeType.star]) && void 0 !== c ? c : [], g)))
                                                : ((this.options[i.ShapeType.polygon] = l.Utils.deepExtend([], g)), (this.options[i.ShapeType.star] = l.Utils.deepExtend([], g)))
                                            : this.options[i.ShapeType.polygon] instanceof Array
                                            ? ((this.options[i.ShapeType.polygon] = l.Utils.deepExtend({}, g)), (this.options[i.ShapeType.star] = l.Utils.deepExtend({}, g)))
                                            : ((this.options[i.ShapeType.polygon] = l.Utils.deepExtend(null !== (f = this.options[i.ShapeType.polygon]) && void 0 !== f ? f : [], g)),
                                              (this.options[i.ShapeType.star] = l.Utils.deepExtend(null !== (d = this.options[i.ShapeType.star]) && void 0 !== d ? d : [], g))));
                                if (void 0 !== e.image)
                                    void 0 !== (g = e.image) &&
                                        (g instanceof Array
                                            ? this.options[i.ShapeType.image] instanceof Array
                                                ? ((this.options[i.ShapeType.image] = l.Utils.deepExtend(null !== (p = this.options[i.ShapeType.image]) && void 0 !== p ? p : [], g)),
                                                  (this.options[i.ShapeType.images] = l.Utils.deepExtend(null !== (h = this.options[i.ShapeType.images]) && void 0 !== h ? h : [], g)))
                                                : ((this.options[i.ShapeType.image] = l.Utils.deepExtend([], g)), (this.options[i.ShapeType.images] = l.Utils.deepExtend([], g)))
                                            : this.options[i.ShapeType.image] instanceof Array
                                            ? ((this.options[i.ShapeType.image] = l.Utils.deepExtend({}, g)), (this.options[i.ShapeType.images] = l.Utils.deepExtend({}, g)))
                                            : ((this.options[i.ShapeType.image] = l.Utils.deepExtend(null !== (v = this.options[i.ShapeType.image]) && void 0 !== v ? v : [], g)),
                                              (this.options[i.ShapeType.images] = l.Utils.deepExtend(null !== (y = this.options[i.ShapeType.images]) && void 0 !== y ? y : [], g))));
                                void 0 !== e.type && (this.type = e.type);
                            }
                        }),
                        e
                    );
                })();
            t.Shape = s;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.max = "max"), (e.min = "min");
                })(t.StartValueType || (t.StartValueType = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.none = "none"), (e.max = "max"), (e.min = "min");
                })(t.DestroyType || (t.DestroyType = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    e.bounce = "bounce";
                })(t.CollisionMode || (t.CollisionMode = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function (e, t) {
                this.position = { x: e, y: t };
            };
            t.Range = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.color = "color"), (e.opacity = "opacity"), (e.size = "size");
                })(t.ProcessBubbleType || (t.ProcessBubbleType = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t(t, n, i, r) {
                        var o = e.call(this, t, n) || this;
                        return (o.size = { height: r, width: i }), o;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.contains = function (e) {
                            return e.x >= this.position.x - this.size.width && e.x < this.position.x + this.size.width && e.y >= this.position.y - this.size.height && e.y < this.position.y + this.size.height;
                        }),
                        (t.prototype.intersects = function (e) {
                            var t = e,
                                n = e,
                                i = this.size.width,
                                r = this.size.height,
                                o = this.position,
                                a = e.position;
                            if (void 0 !== n.radius) return n.intersects(this);
                            if (void 0 !== t.size) {
                                var l = t.size,
                                    s = l.width,
                                    u = l.height;
                                return a.x - s < o.x + i && a.x + s > o.x - i && a.y - u < o.y + r && a.y + u > o.y - r;
                            }
                            return !1;
                        }),
                        t
                    );
                })(n(54).Range);
            t.Rectangle = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(197),
                r = n(49),
                o = n(217),
                a = n(222),
                l = n(224),
                s = n(58),
                u = n(61),
                c = n(225),
                f = n(22),
                d = (function () {
                    function e() {
                        (this.absorbers = []),
                            (this.background = new l.Background()),
                            (this.backgroundMask = new a.BackgroundMask()),
                            (this.detectRetina = !1),
                            (this.emitters = []),
                            (this.fpsLimit = 30),
                            (this.infection = new c.Infection()),
                            (this.interactivity = new i.Interactivity()),
                            (this.particles = new r.Particles()),
                            (this.pauseOnBlur = !0),
                            (this.polygon = new o.PolygonMask());
                    }
                    return (
                        Object.defineProperty(e.prototype, "fps_limit", {
                            get: function () {
                                return this.fpsLimit;
                            },
                            set: function (e) {
                                this.fpsLimit = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "retina_detect", {
                            get: function () {
                                return this.detectRetina;
                            },
                            set: function (e) {
                                this.detectRetina = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t, n;
                            if (void 0 !== e) {
                                if (void 0 !== e.preset)
                                    if (e.preset instanceof Array)
                                        for (var i = 0, r = e.preset; i < r.length; i++) {
                                            var o = r[i];
                                            this.importPreset(o);
                                        }
                                    else this.importPreset(e.preset);
                                void 0 !== e.background && this.background.load(e.background);
                                var a = null !== (t = e.detectRetina) && void 0 !== t ? t : e.retina_detect;
                                void 0 !== a && (this.detectRetina = a);
                                var l = null !== (n = e.fpsLimit) && void 0 !== n ? n : e.fps_limit;
                                void 0 !== l && (this.fpsLimit = l),
                                    void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur),
                                    this.particles.load(e.particles),
                                    this.infection.load(e.infection),
                                    this.interactivity.load(e.interactivity),
                                    this.polygon.load(e.polygon),
                                    this.backgroundMask.load(e.backgroundMask),
                                    void 0 !== e.emitters &&
                                        (e.emitters instanceof Array
                                            ? (this.emitters = e.emitters.map(function (e) {
                                                  var t = new s.Emitter();
                                                  return t.load(e), t;
                                              }))
                                            : (this.emitters instanceof Array && (this.emitters = new s.Emitter()), this.emitters.load(e.emitters))),
                                    void 0 !== e.absorbers &&
                                        (e.absorbers instanceof Array
                                            ? (this.absorbers = e.absorbers.map(function (e) {
                                                  var t = new u.Absorber();
                                                  return t.load(e), t;
                                              }))
                                            : (this.absorbers instanceof Array && (this.absorbers = new u.Absorber()), this.absorbers.load(e.absorbers)));
                            }
                        }),
                        (e.prototype.importPreset = function (e) {
                            var t = f.Plugins.getPreset(e);
                            void 0 !== t && this.load(t);
                        }),
                        e
                    );
                })();
            t.Options = d;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(14),
                r = n(213),
                o = n(214),
                a = n(1),
                l = n(59),
                s = (function () {
                    function e() {
                        (this.direction = i.MoveDirection.none), (this.life = new o.EmitterLife()), (this.rate = new r.EmitterRate());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.size && (void 0 === this.size && (this.size = new l.EmitterSize()), this.size.load(e.size)),
                                void 0 !== e.direction && (this.direction = e.direction),
                                this.life.load(e.life),
                                void 0 !== e.particles && (this.particles = a.Utils.deepExtend({}, e.particles)),
                                this.rate.load(e.rate),
                                void 0 !== e.position && (this.position = { x: e.position.x, y: e.position.y }));
                        }),
                        e
                    );
                })();
            t.Emitter = s;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(60),
                r = (function () {
                    function e() {
                        (this.mode = i.SizeMode.percent), (this.height = 0), (this.width = 0);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.height && (this.height = e.height), void 0 !== e.width && (this.width = e.width));
                        }),
                        e
                    );
                })();
            t.EmitterSize = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.precise = "precise"), (e.percent = "percent");
                })(t.SizeMode || (t.SizeMode = {}));
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(215),
                r = n(3),
                o = (function () {
                    function e() {
                        (this.color = new r.OptionsColor()), (this.color.value = "#000000"), (this.opacity = 1), (this.size = new i.AbsorberSize());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.color && (this.color = r.OptionsColor.create(this.color, e.color)),
                                void 0 !== e.opacity && (this.opacity = e.opacity),
                                void 0 !== e.position && (this.position = { x: e.position.x, y: e.position.y }),
                                void 0 !== e.size && this.size.load(e.size));
                        }),
                        e
                    );
                })();
            t.Absorber = o;
        },
        function (e, t, n) {
            "use strict";
            !(function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                    0;
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                    } catch (t) {
                        console.error(t);
                    }
                }
            })(),
                (e.exports = n(71));
        },
        function (e, t, n) {
            "use strict";
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            n.d(t, "a", function () {
                return i;
            });
        },
        function (e, t, n) {
            "use strict";
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            function r(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e;
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        function (e, t, n) {
            var i = n(79);
            for (var r in i) i.default[r] = i[r];
            e.exports = i.default;
        },
        function (e, t, n) {
            "use strict";
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i;
            }
            function r(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                i = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                            } catch (s) {
                                (r = !0), (o = s);
                            } finally {
                                try {
                                    i || null == l.return || l.return();
                                } finally {
                                    if (r) throw o;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" === typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        function (e, t, n) {
            "use strict";
            function i(e) {
                return (i = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function r() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function o(e) {
                return (o =
                    "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function a(e, t) {
                return !t || ("object" !== o(t) && "function" !== typeof t)
                    ? (function (e) {
                          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return e;
                      })(e)
                    : t;
            }
            function l(e) {
                return function () {
                    var t,
                        n = i(e);
                    if (r()) {
                        var o = i(this).constructor;
                        t = Reflect.construct(n, arguments, o);
                    } else t = n.apply(this, arguments);
                    return a(this, t);
                };
            }
            n.d(t, "a", function () {
                return l;
            });
        },
        function (e, t, n) {
            "use strict";
            function i(e, t) {
                return (i =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function r(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        ,
        function (e, t, n) {
            "use strict";
            var i = n(33),
                r = "function" === typeof Symbol && Symbol.for,
                o = r ? Symbol.for("react.element") : 60103,
                a = r ? Symbol.for("react.portal") : 60106,
                l = r ? Symbol.for("react.fragment") : 60107,
                s = r ? Symbol.for("react.strict_mode") : 60108,
                u = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                f = r ? Symbol.for("react.context") : 60110,
                d = r ? Symbol.for("react.forward_ref") : 60112,
                p = r ? Symbol.for("react.suspense") : 60113,
                h = r ? Symbol.for("react.memo") : 60115,
                v = r ? Symbol.for("react.lazy") : 60116,
                y = "function" === typeof Symbol && Symbol.iterator;
            function m(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var b = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                g = {};
            function w(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || b);
            }
            function x() {}
            function k(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || b);
            }
            (w.prototype.isReactComponent = {}),
                (w.prototype.setState = function (e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(m(85));
                    this.updater.enqueueSetState(this, e, t, "setState");
                }),
                (w.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                }),
                (x.prototype = w.prototype);
            var _ = (k.prototype = new x());
            (_.constructor = k), i(_, w.prototype), (_.isPureReactComponent = !0);
            var P = { current: null },
                S = Object.prototype.hasOwnProperty,
                T = { key: !0, ref: !0, __self: !0, __source: !0 };
            function O(e, t, n) {
                var i,
                    r = {},
                    a = null,
                    l = null;
                if (null != t) for (i in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t)) S.call(t, i) && !T.hasOwnProperty(i) && (r[i] = t[i]);
                var s = arguments.length - 2;
                if (1 === s) r.children = n;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                    r.children = u;
                }
                if (e && e.defaultProps) for (i in (s = e.defaultProps)) void 0 === r[i] && (r[i] = s[i]);
                return { $$typeof: o, type: e, key: a, ref: l, props: r, _owner: P.current };
            }
            function C(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o;
            }
            var E = /\/+/g,
                M = [];
            function z(e, t, n, i) {
                if (M.length) {
                    var r = M.pop();
                    return (r.result = e), (r.keyPrefix = t), (r.func = n), (r.context = i), (r.count = 0), r;
                }
                return { result: e, keyPrefix: t, func: n, context: i, count: 0 };
            }
            function j(e) {
                (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > M.length && M.push(e);
            }
            function A(e, t, n) {
                return null == e
                    ? 0
                    : (function e(t, n, i, r) {
                          var l = typeof t;
                          ("undefined" !== l && "boolean" !== l) || (t = null);
                          var s = !1;
                          if (null === t) s = !0;
                          else
                              switch (l) {
                                  case "string":
                                  case "number":
                                      s = !0;
                                      break;
                                  case "object":
                                      switch (t.$$typeof) {
                                          case o:
                                          case a:
                                              s = !0;
                                      }
                              }
                          if (s) return i(r, t, "" === n ? "." + R(t, 0) : n), 1;
                          if (((s = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                              for (var u = 0; u < t.length; u++) {
                                  var c = n + R((l = t[u]), u);
                                  s += e(l, c, i, r);
                              }
                          else if ((null === t || "object" !== typeof t ? (c = null) : (c = "function" === typeof (c = (y && t[y]) || t["@@iterator"]) ? c : null), "function" === typeof c))
                              for (t = c.call(t), u = 0; !(l = t.next()).done; ) s += e((l = l.value), (c = n + R(l, u++)), i, r);
                          else if ("object" === l) throw ((i = "" + t), Error(m(31, "[object Object]" === i ? "object with keys {" + Object.keys(t).join(", ") + "}" : i, "")));
                          return s;
                      })(e, "", t, n);
            }
            function R(e, t) {
                return "object" === typeof e && null !== e && null != e.key
                    ? (function (e) {
                          var t = { "=": "=0", ":": "=2" };
                          return (
                              "$" +
                              ("" + e).replace(/[=:]/g, function (e) {
                                  return t[e];
                              })
                          );
                      })(e.key)
                    : t.toString(36);
            }
            function I(e, t) {
                e.func.call(e.context, t, e.count++);
            }
            function D(e, t, n) {
                var i = e.result,
                    r = e.keyPrefix;
                (e = e.func.call(e.context, t, e.count++)),
                    Array.isArray(e)
                        ? L(e, i, n, function (e) {
                              return e;
                          })
                        : null != e &&
                          (C(e) &&
                              (e = (function (e, t) {
                                  return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                              })(e, r + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(E, "$&/") + "/") + n)),
                          i.push(e));
            }
            function L(e, t, n, i, r) {
                var o = "";
                null != n && (o = ("" + n).replace(E, "$&/") + "/"), A(e, D, (t = z(t, o, i, r))), j(t);
            }
            var U = { current: null };
            function N() {
                var e = U.current;
                if (null === e) throw Error(m(321));
                return e;
            }
            var F = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: P, IsSomeRendererActing: { current: !1 }, assign: i };
            (t.Children = {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var i = [];
                    return L(e, i, null, t, n), i;
                },
                forEach: function (e, t, n) {
                    if (null == e) return e;
                    A(e, I, (t = z(null, null, t, n))), j(t);
                },
                count: function (e) {
                    return A(
                        e,
                        function () {
                            return null;
                        },
                        null
                    );
                },
                toArray: function (e) {
                    var t = [];
                    return (
                        L(e, t, null, function (e) {
                            return e;
                        }),
                        t
                    );
                },
                only: function (e) {
                    if (!C(e)) throw Error(m(143));
                    return e;
                },
            }),
                (t.Component = w),
                (t.Fragment = l),
                (t.Profiler = u),
                (t.PureComponent = k),
                (t.StrictMode = s),
                (t.Suspense = p),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
                (t.cloneElement = function (e, t, n) {
                    if (null === e || void 0 === e) throw Error(m(267, e));
                    var r = i({}, e.props),
                        a = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if ((void 0 !== t.ref && ((l = t.ref), (s = P.current)), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
                        for (c in t) S.call(t, c) && !T.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
                    }
                    var c = arguments.length - 2;
                    if (1 === c) r.children = n;
                    else if (1 < c) {
                        u = Array(c);
                        for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
                        r.children = u;
                    }
                    return { $$typeof: o, type: e.type, key: a, ref: l, props: r, _owner: s };
                }),
                (t.createContext = function (e, t) {
                    return (
                        void 0 === t && (t = null),
                        ((e = { $$typeof: f, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: c, _context: e }),
                        (e.Consumer = e)
                    );
                }),
                (t.createElement = O),
                (t.createFactory = function (e) {
                    var t = O.bind(null, e);
                    return (t.type = e), t;
                }),
                (t.createRef = function () {
                    return { current: null };
                }),
                (t.forwardRef = function (e) {
                    return { $$typeof: d, render: e };
                }),
                (t.isValidElement = C),
                (t.lazy = function (e) {
                    return { $$typeof: v, _ctor: e, _status: -1, _result: null };
                }),
                (t.memo = function (e, t) {
                    return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
                }),
                (t.useCallback = function (e, t) {
                    return N().useCallback(e, t);
                }),
                (t.useContext = function (e, t) {
                    return N().useContext(e, t);
                }),
                (t.useDebugValue = function () {}),
                (t.useEffect = function (e, t) {
                    return N().useEffect(e, t);
                }),
                (t.useImperativeHandle = function (e, t, n) {
                    return N().useImperativeHandle(e, t, n);
                }),
                (t.useLayoutEffect = function (e, t) {
                    return N().useLayoutEffect(e, t);
                }),
                (t.useMemo = function (e, t) {
                    return N().useMemo(e, t);
                }),
                (t.useReducer = function (e, t, n) {
                    return N().useReducer(e, t, n);
                }),
                (t.useRef = function (e) {
                    return N().useRef(e);
                }),
                (t.useState = function (e) {
                    return N().useState(e);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            var i = n(0),
                r = n(33),
                o = n(72);
            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            if (!i) throw Error(a(227));
            function l(e, t, n, i, r, o, a, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u);
                } catch (c) {
                    this.onError(c);
                }
            }
            var s = !1,
                u = null,
                c = !1,
                f = null,
                d = {
                    onError: function (e) {
                        (s = !0), (u = e);
                    },
                };
            function p(e, t, n, i, r, o, a, c, f) {
                (s = !1), (u = null), l.apply(d, arguments);
            }
            var h = null,
                v = null,
                y = null;
            function m(e, t, n) {
                var i = e.type || "unknown-event";
                (e.currentTarget = y(n)),
                    (function (e, t, n, i, r, o, l, d, h) {
                        if ((p.apply(this, arguments), s)) {
                            if (!s) throw Error(a(198));
                            var v = u;
                            (s = !1), (u = null), c || ((c = !0), (f = v));
                        }
                    })(i, t, void 0, e),
                    (e.currentTarget = null);
            }
            var b = null,
                g = {};
            function w() {
                if (b)
                    for (var e in g) {
                        var t = g[e],
                            n = b.indexOf(e);
                        if (!(-1 < n)) throw Error(a(96, e));
                        if (!k[n]) {
                            if (!t.extractEvents) throw Error(a(97, e));
                            for (var i in ((k[n] = t), (n = t.eventTypes))) {
                                var r = void 0,
                                    o = n[i],
                                    l = t,
                                    s = i;
                                if (_.hasOwnProperty(s)) throw Error(a(99, s));
                                _[s] = o;
                                var u = o.phasedRegistrationNames;
                                if (u) {
                                    for (r in u) u.hasOwnProperty(r) && x(u[r], l, s);
                                    r = !0;
                                } else o.registrationName ? (x(o.registrationName, l, s), (r = !0)) : (r = !1);
                                if (!r) throw Error(a(98, i, e));
                            }
                        }
                    }
            }
            function x(e, t, n) {
                if (P[e]) throw Error(a(100, e));
                (P[e] = t), (S[e] = t.eventTypes[n].dependencies);
            }
            var k = [],
                _ = {},
                P = {},
                S = {};
            function T(e) {
                var t,
                    n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var i = e[t];
                        if (!g.hasOwnProperty(t) || g[t] !== i) {
                            if (g[t]) throw Error(a(102, t));
                            (g[t] = i), (n = !0);
                        }
                    }
                n && w();
            }
            var O = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                C = null,
                E = null,
                M = null;
            function z(e) {
                if ((e = v(e))) {
                    if ("function" !== typeof C) throw Error(a(280));
                    var t = e.stateNode;
                    t && ((t = h(t)), C(e.stateNode, e.type, t));
                }
            }
            function j(e) {
                E ? (M ? M.push(e) : (M = [e])) : (E = e);
            }
            function A() {
                if (E) {
                    var e = E,
                        t = M;
                    if (((M = E = null), z(e), t)) for (e = 0; e < t.length; e++) z(t[e]);
                }
            }
            function R(e, t) {
                return e(t);
            }
            function I(e, t, n, i, r) {
                return e(t, n, i, r);
            }
            function D() {}
            var L = R,
                U = !1,
                N = !1;
            function F() {
                (null === E && null === M) || (D(), A());
            }
            function V(e, t, n) {
                if (N) return e(t, n);
                N = !0;
                try {
                    return L(e, t, n);
                } finally {
                    (N = !1), F();
                }
            }
            var B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                H = Object.prototype.hasOwnProperty,
                q = {},
                W = {};
            function $(e, t, n, i, r, o) {
                (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = i), (this.attributeNamespace = r), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o);
            }
            var Q = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
                Q[e] = new $(e, 0, !1, e, null, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (e) {
                    var t = e[0];
                    Q[t] = new $(t, 1, !1, e[1], null, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                    Q[e] = new $(e, 2, !1, e.toLowerCase(), null, !1);
                }),
                ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
                    Q[e] = new $(e, 2, !1, e, null, !1);
                }),
                "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                    .split(" ")
                    .forEach(function (e) {
                        Q[e] = new $(e, 3, !1, e.toLowerCase(), null, !1);
                    }),
                ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                    Q[e] = new $(e, 3, !0, e, null, !1);
                }),
                ["capture", "download"].forEach(function (e) {
                    Q[e] = new $(e, 4, !1, e, null, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (e) {
                    Q[e] = new $(e, 6, !1, e, null, !1);
                }),
                ["rowSpan", "start"].forEach(function (e) {
                    Q[e] = new $(e, 5, !1, e.toLowerCase(), null, !1);
                });
            var G = /[\-:]([a-z])/g;
            function K(e) {
                return e[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(G, K);
                    Q[t] = new $(t, 1, !1, e, null, !1);
                }),
                "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                    var t = e.replace(G, K);
                    Q[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                    var t = e.replace(G, K);
                    Q[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
                }),
                ["tabIndex", "crossOrigin"].forEach(function (e) {
                    Q[e] = new $(e, 1, !1, e.toLowerCase(), null, !1);
                }),
                (Q.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0)),
                ["src", "href", "action", "formAction"].forEach(function (e) {
                    Q[e] = new $(e, 1, !1, e.toLowerCase(), null, !0);
                });
            var Y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function X(e, t, n, i) {
                var r = Q.hasOwnProperty(t) ? Q[t] : null;
                (null !== r ? 0 === r.type : !i && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
                    ((function (e, t, n, i) {
                        if (
                            null === t ||
                            "undefined" === typeof t ||
                            (function (e, t, n, i) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1;
                                }
                            })(e, t, n, i)
                        )
                            return !0;
                        if (i) return !1;
                        if (null !== n)
                            switch (n.type) {
                                case 3:
                                    return !t;
                                case 4:
                                    return !1 === t;
                                case 5:
                                    return isNaN(t);
                                case 6:
                                    return isNaN(t) || 1 > t;
                            }
                        return !1;
                    })(t, n, r, i) && (n = null),
                    i || null === r
                        ? (function (e) {
                              return !!H.call(W, e) || (!H.call(q, e) && (B.test(e) ? (W[e] = !0) : ((q[e] = !0), !1)));
                          })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                        : r.mustUseProperty
                        ? (e[r.propertyName] = null === n ? 3 !== r.type && "" : n)
                        : ((t = r.attributeName), (i = r.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (r = r.type) || (4 === r && !0 === n) ? "" : "" + n), i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
            }
            Y.hasOwnProperty("ReactCurrentDispatcher") || (Y.ReactCurrentDispatcher = { current: null }), Y.hasOwnProperty("ReactCurrentBatchConfig") || (Y.ReactCurrentBatchConfig = { suspense: null });
            var J = /^(.*)[\\\/]/,
                Z = "function" === typeof Symbol && Symbol.for,
                ee = Z ? Symbol.for("react.element") : 60103,
                te = Z ? Symbol.for("react.portal") : 60106,
                ne = Z ? Symbol.for("react.fragment") : 60107,
                ie = Z ? Symbol.for("react.strict_mode") : 60108,
                re = Z ? Symbol.for("react.profiler") : 60114,
                oe = Z ? Symbol.for("react.provider") : 60109,
                ae = Z ? Symbol.for("react.context") : 60110,
                le = Z ? Symbol.for("react.concurrent_mode") : 60111,
                se = Z ? Symbol.for("react.forward_ref") : 60112,
                ue = Z ? Symbol.for("react.suspense") : 60113,
                ce = Z ? Symbol.for("react.suspense_list") : 60120,
                fe = Z ? Symbol.for("react.memo") : 60115,
                de = Z ? Symbol.for("react.lazy") : 60116,
                pe = Z ? Symbol.for("react.block") : 60121,
                he = "function" === typeof Symbol && Symbol.iterator;
            function ve(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = (he && e[he]) || e["@@iterator"]) ? e : null;
            }
            function ye(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case ne:
                        return "Fragment";
                    case te:
                        return "Portal";
                    case re:
                        return "Profiler";
                    case ie:
                        return "StrictMode";
                    case ue:
                        return "Suspense";
                    case ce:
                        return "SuspenseList";
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                        case ae:
                            return "Context.Consumer";
                        case oe:
                            return "Context.Provider";
                        case se:
                            var t = e.render;
                            return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case fe:
                            return ye(e.type);
                        case pe:
                            return ye(e.render);
                        case de:
                            if ((e = 1 === e._status ? e._result : null)) return ye(e);
                    }
                return null;
            }
            function me(e) {
                var t = "";
                do {
                    e: switch (e.tag) {
                        case 3:
                        case 4:
                        case 6:
                        case 7:
                        case 10:
                        case 9:
                            var n = "";
                            break e;
                        default:
                            var i = e._debugOwner,
                                r = e._debugSource,
                                o = ye(e.type);
                            (n = null), i && (n = ye(i.type)), (i = o), (o = ""), r ? (o = " (at " + r.fileName.replace(J, "") + ":" + r.lineNumber + ")") : n && (o = " (created by " + n + ")"), (n = "\n    in " + (i || "Unknown") + o);
                    }
                    (t += n), (e = e.return);
                } while (e);
                return t;
            }
            function be(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return "";
                }
            }
            function ge(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
            }
            function we(e) {
                e._valueTracker ||
                    (e._valueTracker = (function (e) {
                        var t = ge(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            i = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var r = n.get,
                                o = n.set;
                            return (
                                Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function () {
                                        return r.call(this);
                                    },
                                    set: function (e) {
                                        (i = "" + e), o.call(this, e);
                                    },
                                }),
                                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                {
                                    getValue: function () {
                                        return i;
                                    },
                                    setValue: function (e) {
                                        i = "" + e;
                                    },
                                    stopTracking: function () {
                                        (e._valueTracker = null), delete e[t];
                                    },
                                }
                            );
                        }
                    })(e));
            }
            function xe(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    i = "";
                return e && (i = ge(e) ? (e.checked ? "true" : "false") : e.value), (e = i) !== n && (t.setValue(e), !0);
            }
            function ke(e, t) {
                var n = t.checked;
                return r({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
            }
            function _e(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    i = null != t.checked ? t.checked : t.defaultChecked;
                (n = be(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: i, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
            }
            function Pe(e, t) {
                null != (t = t.checked) && X(e, "checked", t, !1);
            }
            function Se(e, t) {
                Pe(e, t);
                var n = be(t.value),
                    i = t.type;
                if (null != n) "number" === i ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === i || "reset" === i) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? Oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oe(e, t.type, be(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
            }
            function Te(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var i = t.type;
                    if (!(("submit" !== i && "reset" !== i) || (void 0 !== t.value && null !== t.value))) return;
                    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
                }
                "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
            }
            function Oe(e, t, n) {
                ("number" === t && e.ownerDocument.activeElement === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
            }
            function Ce(e, t) {
                return (
                    (e = r({ children: void 0 }, t)),
                    (t = (function (e) {
                        var t = "";
                        return (
                            i.Children.forEach(e, function (e) {
                                null != e && (t += e);
                            }),
                            t
                        );
                    })(t.children)) && (e.children = t),
                    e
                );
            }
            function Ee(e, t, n, i) {
                if (((e = e.options), t)) {
                    t = {};
                    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
                    for (n = 0; n < e.length; n++) (r = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== r && (e[n].selected = r), r && i && (e[n].defaultSelected = !0);
                } else {
                    for (n = "" + be(n), t = null, r = 0; r < e.length; r++) {
                        if (e[r].value === n) return (e[r].selected = !0), void (i && (e[r].defaultSelected = !0));
                        null !== t || e[r].disabled || (t = e[r]);
                    }
                    null !== t && (t.selected = !0);
                }
            }
            function Me(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                return r({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
            }
            function ze(e, t) {
                var n = t.value;
                if (null == n) {
                    if (((n = t.children), (t = t.defaultValue), null != n)) {
                        if (null != t) throw Error(a(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(a(93));
                            n = n[0];
                        }
                        t = n;
                    }
                    null == t && (t = ""), (n = t);
                }
                e._wrapperState = { initialValue: be(n) };
            }
            function je(e, t) {
                var n = be(t.value),
                    i = be(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != i && (e.defaultValue = "" + i);
            }
            function Ae(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
            }
            var Re = "http://www.w3.org/1999/xhtml",
                Ie = "http://www.w3.org/2000/svg";
            function De(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml";
                }
            }
            function Le(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? De(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
            }
            var Ue,
                Ne = (function (e) {
                    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
                        ? function (t, n, i, r) {
                              MSApp.execUnsafeLocalFunction(function () {
                                  return e(t, n);
                              });
                          }
                        : e;
                })(function (e, t) {
                    if (e.namespaceURI !== Ie || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((Ue = Ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ue.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                        for (; t.firstChild; ) e.appendChild(t.firstChild);
                    }
                });
            function Fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
                }
                e.textContent = t;
            }
            function Ve(e, t) {
                var n = {};
                return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
            }
            var Be = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") },
                He = {},
                qe = {};
            function We(e) {
                if (He[e]) return He[e];
                if (!Be[e]) return e;
                var t,
                    n = Be[e];
                for (t in n) if (n.hasOwnProperty(t) && t in qe) return (He[e] = n[t]);
                return e;
            }
            O &&
                ((qe = document.createElement("div").style),
                "AnimationEvent" in window || (delete Be.animationend.animation, delete Be.animationiteration.animation, delete Be.animationstart.animation),
                "TransitionEvent" in window || delete Be.transitionend.transition);
            var $e = We("animationend"),
                Qe = We("animationiteration"),
                Ge = We("animationstart"),
                Ke = We("transitionend"),
                Ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
                Xe = new ("function" === typeof WeakMap ? WeakMap : Map)();
            function Je(e) {
                var t = Xe.get(e);
                return void 0 === t && ((t = new Map()), Xe.set(e, t)), t;
            }
            function Ze(e) {
                var t = e,
                    n = e;
                if (e.alternate) for (; t.return; ) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
                    } while (e);
                }
                return 3 === t.tag ? n : null;
            }
            function et(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
                }
                return null;
            }
            function tt(e) {
                if (Ze(e) !== e) throw Error(a(188));
            }
            function nt(e) {
                if (
                    !(e = (function (e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Ze(e))) throw Error(a(188));
                            return t !== e ? null : e;
                        }
                        for (var n = e, i = t; ; ) {
                            var r = n.return;
                            if (null === r) break;
                            var o = r.alternate;
                            if (null === o) {
                                if (null !== (i = r.return)) {
                                    n = i;
                                    continue;
                                }
                                break;
                            }
                            if (r.child === o.child) {
                                for (o = r.child; o; ) {
                                    if (o === n) return tt(r), e;
                                    if (o === i) return tt(r), t;
                                    o = o.sibling;
                                }
                                throw Error(a(188));
                            }
                            if (n.return !== i.return) (n = r), (i = o);
                            else {
                                for (var l = !1, s = r.child; s; ) {
                                    if (s === n) {
                                        (l = !0), (n = r), (i = o);
                                        break;
                                    }
                                    if (s === i) {
                                        (l = !0), (i = r), (n = o);
                                        break;
                                    }
                                    s = s.sibling;
                                }
                                if (!l) {
                                    for (s = o.child; s; ) {
                                        if (s === n) {
                                            (l = !0), (n = o), (i = r);
                                            break;
                                        }
                                        if (s === i) {
                                            (l = !0), (i = o), (n = r);
                                            break;
                                        }
                                        s = s.sibling;
                                    }
                                    if (!l) throw Error(a(189));
                                }
                            }
                            if (n.alternate !== i) throw Error(a(190));
                        }
                        if (3 !== n.tag) throw Error(a(188));
                        return n.stateNode.current === n ? e : t;
                    })(e))
                )
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                        if (t === e) break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }
                return null;
            }
            function it(e, t) {
                if (null == t) throw Error(a(30));
                return null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
            }
            function rt(e, t, n) {
                Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
            }
            var ot = null;
            function at(e) {
                if (e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchInstances;
                    if (Array.isArray(t)) for (var i = 0; i < t.length && !e.isPropagationStopped(); i++) m(e, t[i], n[i]);
                    else t && m(e, t, n);
                    (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
                }
            }
            function lt(e) {
                if ((null !== e && (ot = it(ot, e)), (e = ot), (ot = null), e)) {
                    if ((rt(e, at), ot)) throw Error(a(95));
                    if (c) throw ((e = f), (c = !1), (f = null), e);
                }
            }
            function st(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
            }
            function ut(e) {
                if (!O) return !1;
                var t = (e = "on" + e) in document;
                return t || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" === typeof t[e])), t;
            }
            var ct = [];
            function ft(e) {
                (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > ct.length && ct.push(e);
            }
            function dt(e, t, n, i) {
                if (ct.length) {
                    var r = ct.pop();
                    return (r.topLevelType = e), (r.eventSystemFlags = i), (r.nativeEvent = t), (r.targetInst = n), r;
                }
                return { topLevelType: e, eventSystemFlags: i, nativeEvent: t, targetInst: n, ancestors: [] };
            }
            function pt(e) {
                var t = e.targetInst,
                    n = t;
                do {
                    if (!n) {
                        e.ancestors.push(n);
                        break;
                    }
                    var i = n;
                    if (3 === i.tag) i = i.stateNode.containerInfo;
                    else {
                        for (; i.return; ) i = i.return;
                        i = 3 !== i.tag ? null : i.stateNode.containerInfo;
                    }
                    if (!i) break;
                    (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = On(i));
                } while (n);
                for (n = 0; n < e.ancestors.length; n++) {
                    t = e.ancestors[n];
                    var r = st(e.nativeEvent);
                    i = e.topLevelType;
                    var o = e.nativeEvent,
                        a = e.eventSystemFlags;
                    0 === n && (a |= 64);
                    for (var l = null, s = 0; s < k.length; s++) {
                        var u = k[s];
                        u && (u = u.extractEvents(i, t, o, r, a)) && (l = it(l, u));
                    }
                    lt(l);
                }
            }
            function ht(e, t, n) {
                if (!n.has(e)) {
                    switch (e) {
                        case "scroll":
                            Gt(t, "scroll", !0);
                            break;
                        case "focus":
                        case "blur":
                            Gt(t, "focus", !0), Gt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                            break;
                        case "cancel":
                        case "close":
                            ut(e) && Gt(t, e, !0);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === Ye.indexOf(e) && Qt(e, t);
                    }
                    n.set(e, null);
                }
            }
            var vt,
                yt,
                mt,
                bt = !1,
                gt = [],
                wt = null,
                xt = null,
                kt = null,
                _t = new Map(),
                Pt = new Map(),
                St = [],
                Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
                    " "
                ),
                Ot = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
            function Ct(e, t, n, i, r) {
                return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: r, container: i };
            }
            function Et(e, t) {
                switch (e) {
                    case "focus":
                    case "blur":
                        wt = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        xt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        kt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        _t.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Pt.delete(t.pointerId);
                }
            }
            function Mt(e, t, n, i, r, o) {
                return null === e || e.nativeEvent !== o ? ((e = Ct(t, n, i, r, o)), null !== t && null !== (t = Cn(t)) && yt(t), e) : ((e.eventSystemFlags |= i), e);
            }
            function zt(e) {
                var t = On(e.target);
                if (null !== t) {
                    var n = Ze(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = et(n)))
                                return (
                                    (e.blockedOn = t),
                                    void o.unstable_runWithPriority(e.priority, function () {
                                        mt(n);
                                    })
                                );
                        } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
                }
                e.blockedOn = null;
            }
            function jt(e) {
                if (null !== e.blockedOn) return !1;
                var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                if (null !== t) {
                    var n = Cn(t);
                    return null !== n && yt(n), (e.blockedOn = t), !1;
                }
                return !0;
            }
            function At(e, t, n) {
                jt(e) && n.delete(t);
            }
            function Rt() {
                for (bt = !1; 0 < gt.length; ) {
                    var e = gt[0];
                    if (null !== e.blockedOn) {
                        null !== (e = Cn(e.blockedOn)) && vt(e);
                        break;
                    }
                    var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                    null !== t ? (e.blockedOn = t) : gt.shift();
                }
                null !== wt && jt(wt) && (wt = null), null !== xt && jt(xt) && (xt = null), null !== kt && jt(kt) && (kt = null), _t.forEach(At), Pt.forEach(At);
            }
            function It(e, t) {
                e.blockedOn === t && ((e.blockedOn = null), bt || ((bt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Rt)));
            }
            function Dt(e) {
                function t(t) {
                    return It(t, e);
                }
                if (0 < gt.length) {
                    It(gt[0], e);
                    for (var n = 1; n < gt.length; n++) {
                        var i = gt[n];
                        i.blockedOn === e && (i.blockedOn = null);
                    }
                }
                for (null !== wt && It(wt, e), null !== xt && It(xt, e), null !== kt && It(kt, e), _t.forEach(t), Pt.forEach(t), n = 0; n < St.length; n++) (i = St[n]).blockedOn === e && (i.blockedOn = null);
                for (; 0 < St.length && null === (n = St[0]).blockedOn; ) zt(n), null === n.blockedOn && St.shift();
            }
            var Lt = {},
                Ut = new Map(),
                Nt = new Map(),
                Ft = [
                    "abort",
                    "abort",
                    $e,
                    "animationEnd",
                    Qe,
                    "animationIteration",
                    Ge,
                    "animationStart",
                    "canplay",
                    "canPlay",
                    "canplaythrough",
                    "canPlayThrough",
                    "durationchange",
                    "durationChange",
                    "emptied",
                    "emptied",
                    "encrypted",
                    "encrypted",
                    "ended",
                    "ended",
                    "error",
                    "error",
                    "gotpointercapture",
                    "gotPointerCapture",
                    "load",
                    "load",
                    "loadeddata",
                    "loadedData",
                    "loadedmetadata",
                    "loadedMetadata",
                    "loadstart",
                    "loadStart",
                    "lostpointercapture",
                    "lostPointerCapture",
                    "playing",
                    "playing",
                    "progress",
                    "progress",
                    "seeking",
                    "seeking",
                    "stalled",
                    "stalled",
                    "suspend",
                    "suspend",
                    "timeupdate",
                    "timeUpdate",
                    Ke,
                    "transitionEnd",
                    "waiting",
                    "waiting",
                ];
            function Vt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var i = e[n],
                        r = e[n + 1],
                        o = "on" + (r[0].toUpperCase() + r.slice(1));
                    (o = { phasedRegistrationNames: { bubbled: o, captured: o + "Capture" }, dependencies: [i], eventPriority: t }), Nt.set(i, t), Ut.set(i, o), (Lt[r] = o);
                }
            }
            Vt(
                "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                    " "
                ),
                0
            ),
                Vt(
                    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                        " "
                    ),
                    1
                ),
                Vt(Ft, 2);
            for (var Bt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ht = 0; Ht < Bt.length; Ht++) Nt.set(Bt[Ht], 0);
            var qt = o.unstable_UserBlockingPriority,
                Wt = o.unstable_runWithPriority,
                $t = !0;
            function Qt(e, t) {
                Gt(t, e, !1);
            }
            function Gt(e, t, n) {
                var i = Nt.get(t);
                switch (void 0 === i ? 2 : i) {
                    case 0:
                        i = Kt.bind(null, t, 1, e);
                        break;
                    case 1:
                        i = Yt.bind(null, t, 1, e);
                        break;
                    default:
                        i = Xt.bind(null, t, 1, e);
                }
                n ? e.addEventListener(t, i, !0) : e.addEventListener(t, i, !1);
            }
            function Kt(e, t, n, i) {
                U || D();
                var r = Xt,
                    o = U;
                U = !0;
                try {
                    I(r, e, t, n, i);
                } finally {
                    (U = o) || F();
                }
            }
            function Yt(e, t, n, i) {
                Wt(qt, Xt.bind(null, e, t, n, i));
            }
            function Xt(e, t, n, i) {
                if ($t)
                    if (0 < gt.length && -1 < Tt.indexOf(e)) (e = Ct(null, e, t, n, i)), gt.push(e);
                    else {
                        var r = Jt(e, t, n, i);
                        if (null === r) Et(e, i);
                        else if (-1 < Tt.indexOf(e)) (e = Ct(r, e, t, n, i)), gt.push(e);
                        else if (
                            !(function (e, t, n, i, r) {
                                switch (t) {
                                    case "focus":
                                        return (wt = Mt(wt, e, t, n, i, r)), !0;
                                    case "dragenter":
                                        return (xt = Mt(xt, e, t, n, i, r)), !0;
                                    case "mouseover":
                                        return (kt = Mt(kt, e, t, n, i, r)), !0;
                                    case "pointerover":
                                        var o = r.pointerId;
                                        return _t.set(o, Mt(_t.get(o) || null, e, t, n, i, r)), !0;
                                    case "gotpointercapture":
                                        return (o = r.pointerId), Pt.set(o, Mt(Pt.get(o) || null, e, t, n, i, r)), !0;
                                }
                                return !1;
                            })(r, e, t, n, i)
                        ) {
                            Et(e, i), (e = dt(e, i, null, t));
                            try {
                                V(pt, e);
                            } finally {
                                ft(e);
                            }
                        }
                    }
            }
            function Jt(e, t, n, i) {
                if (null !== (n = On((n = st(i))))) {
                    var r = Ze(n);
                    if (null === r) n = null;
                    else {
                        var o = r.tag;
                        if (13 === o) {
                            if (null !== (n = et(r))) return n;
                            n = null;
                        } else if (3 === o) {
                            if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                            n = null;
                        } else r !== n && (n = null);
                    }
                }
                e = dt(e, i, n, t);
                try {
                    V(pt, e);
                } finally {
                    ft(e);
                }
                return null;
            }
            var Zt = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0,
                },
                en = ["Webkit", "ms", "Moz", "O"];
            function tn(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || (Zt.hasOwnProperty(e) && Zt[e]) ? ("" + t).trim() : t + "px";
            }
            function nn(e, t) {
                for (var n in ((e = e.style), t))
                    if (t.hasOwnProperty(n)) {
                        var i = 0 === n.indexOf("--"),
                            r = tn(n, t[n], i);
                        "float" === n && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r);
                    }
            }
            Object.keys(Zt).forEach(function (e) {
                en.forEach(function (t) {
                    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zt[t] = Zt[e]);
                });
            });
            var rn = r({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
            function on(e, t) {
                if (t) {
                    if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e, ""));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(a(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(a(62, ""));
                }
            }
            function an(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0;
                }
            }
            var ln = Re;
            function sn(e, t) {
                var n = Je((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
                t = S[t];
                for (var i = 0; i < t.length; i++) ht(t[i], e, n);
            }
            function un() {}
            function cn(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body;
                } catch (t) {
                    return e.body;
                }
            }
            function fn(e) {
                for (; e && e.firstChild; ) e = e.firstChild;
                return e;
            }
            function dn(e, t) {
                var n,
                    i = fn(e);
                for (e = 0; i; ) {
                    if (3 === i.nodeType) {
                        if (((n = e + i.textContent.length), e <= t && n >= t)) return { node: i, offset: t - e };
                        e = n;
                    }
                    e: {
                        for (; i; ) {
                            if (i.nextSibling) {
                                i = i.nextSibling;
                                break e;
                            }
                            i = i.parentNode;
                        }
                        i = void 0;
                    }
                    i = fn(i);
                }
            }
            function pn() {
                for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href;
                    } catch (i) {
                        n = !1;
                    }
                    if (!n) break;
                    t = cn((e = t.contentWindow).document);
                }
                return t;
            }
            function hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
            }
            var vn = null,
                yn = null;
            function mn(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus;
                }
                return !1;
            }
            function bn(e, t) {
                return (
                    "textarea" === e ||
                    "option" === e ||
                    "noscript" === e ||
                    "string" === typeof t.children ||
                    "number" === typeof t.children ||
                    ("object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
                );
            }
            var gn = "function" === typeof setTimeout ? setTimeout : void 0,
                wn = "function" === typeof clearTimeout ? clearTimeout : void 0;
            function xn(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                }
                return e;
            }
            function kn(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--;
                        } else "/$" === n && t++;
                    }
                    e = e.previousSibling;
                }
                return null;
            }
            var _n = Math.random().toString(36).slice(2),
                Pn = "__reactInternalInstance$" + _n,
                Sn = "__reactEventHandlers$" + _n,
                Tn = "__reactContainere$" + _n;
            function On(e) {
                var t = e[Pn];
                if (t) return t;
                for (var n = e.parentNode; n; ) {
                    if ((t = n[Tn] || n[Pn])) {
                        if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                            for (e = kn(e); null !== e; ) {
                                if ((n = e[Pn])) return n;
                                e = kn(e);
                            }
                        return t;
                    }
                    n = (e = n).parentNode;
                }
                return null;
            }
            function Cn(e) {
                return !(e = e[Pn] || e[Tn]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
            }
            function En(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(a(33));
            }
            function Mn(e) {
                return e[Sn] || null;
            }
            function zn(e) {
                do {
                    e = e.return;
                } while (e && 5 !== e.tag);
                return e || null;
            }
            function jn(e, t) {
                var n = e.stateNode;
                if (!n) return null;
                var i = h(n);
                if (!i) return null;
                n = i[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !i);
                        break e;
                    default:
                        e = !1;
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
                return n;
            }
            function An(e, t, n) {
                (t = jn(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = it(n._dispatchListeners, t)), (n._dispatchInstances = it(n._dispatchInstances, e)));
            }
            function Rn(e) {
                if (e && e.dispatchConfig.phasedRegistrationNames) {
                    for (var t = e._targetInst, n = []; t; ) n.push(t), (t = zn(t));
                    for (t = n.length; 0 < t--; ) An(n[t], "captured", e);
                    for (t = 0; t < n.length; t++) An(n[t], "bubbled", e);
                }
            }
            function In(e, t, n) {
                e && n && n.dispatchConfig.registrationName && (t = jn(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = it(n._dispatchListeners, t)), (n._dispatchInstances = it(n._dispatchInstances, e)));
            }
            function Dn(e) {
                e && e.dispatchConfig.registrationName && In(e._targetInst, null, e);
            }
            function Ln(e) {
                rt(e, Rn);
            }
            var Un = null,
                Nn = null,
                Fn = null;
            function Vn() {
                if (Fn) return Fn;
                var e,
                    t,
                    n = Nn,
                    i = n.length,
                    r = "value" in Un ? Un.value : Un.textContent,
                    o = r.length;
                for (e = 0; e < i && n[e] === r[e]; e++);
                var a = i - e;
                for (t = 1; t <= a && n[i - t] === r[o - t]; t++);
                return (Fn = r.slice(e, 1 < t ? 1 - t : void 0));
            }
            function Bn() {
                return !0;
            }
            function Hn() {
                return !1;
            }
            function qn(e, t, n, i) {
                for (var r in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface)))
                    e.hasOwnProperty(r) && ((t = e[r]) ? (this[r] = t(n)) : "target" === r ? (this.target = i) : (this[r] = n[r]));
                return (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Bn : Hn), (this.isPropagationStopped = Hn), this;
            }
            function Wn(e, t, n, i) {
                if (this.eventPool.length) {
                    var r = this.eventPool.pop();
                    return this.call(r, e, t, n, i), r;
                }
                return new this(e, t, n, i);
            }
            function $n(e) {
                if (!(e instanceof this)) throw Error(a(279));
                e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
            }
            function Qn(e) {
                (e.eventPool = []), (e.getPooled = Wn), (e.release = $n);
            }
            r(qn.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = Bn));
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = Bn));
                },
                persist: function () {
                    this.isPersistent = Bn;
                },
                isPersistent: Hn,
                destructor: function () {
                    var e,
                        t = this.constructor.Interface;
                    for (e in t) this[e] = null;
                    (this.nativeEvent = this._targetInst = this.dispatchConfig = null), (this.isPropagationStopped = this.isDefaultPrevented = Hn), (this._dispatchInstances = this._dispatchListeners = null);
                },
            }),
                (qn.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function () {
                        return null;
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function (e) {
                        return e.timeStamp || Date.now();
                    },
                    defaultPrevented: null,
                    isTrusted: null,
                }),
                (qn.extend = function (e) {
                    function t() {}
                    function n() {
                        return i.apply(this, arguments);
                    }
                    var i = this;
                    t.prototype = i.prototype;
                    var o = new t();
                    return r(o, n.prototype), (n.prototype = o), (n.prototype.constructor = n), (n.Interface = r({}, i.Interface, e)), (n.extend = i.extend), Qn(n), n;
                }),
                Qn(qn);
            var Gn = qn.extend({ data: null }),
                Kn = qn.extend({ data: null }),
                Yn = [9, 13, 27, 32],
                Xn = O && "CompositionEvent" in window,
                Jn = null;
            O && "documentMode" in document && (Jn = document.documentMode);
            var Zn = O && "TextEvent" in window && !Jn,
                ei = O && (!Xn || (Jn && 8 < Jn && 11 >= Jn)),
                ti = String.fromCharCode(32),
                ni = {
                    beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                    compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                    compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                    compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
                },
                ii = !1;
            function ri(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Yn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "blur":
                        return !0;
                    default:
                        return !1;
                }
            }
            function oi(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
            }
            var ai = !1;
            var li = {
                    eventTypes: ni,
                    extractEvents: function (e, t, n, i) {
                        var r;
                        if (Xn)
                            e: {
                                switch (e) {
                                    case "compositionstart":
                                        var o = ni.compositionStart;
                                        break e;
                                    case "compositionend":
                                        o = ni.compositionEnd;
                                        break e;
                                    case "compositionupdate":
                                        o = ni.compositionUpdate;
                                        break e;
                                }
                                o = void 0;
                            }
                        else ai ? ri(e, n) && (o = ni.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = ni.compositionStart);
                        return (
                            o
                                ? (ei && "ko" !== n.locale && (ai || o !== ni.compositionStart ? o === ni.compositionEnd && ai && (r = Vn()) : ((Nn = "value" in (Un = i) ? Un.value : Un.textContent), (ai = !0))),
                                  (o = Gn.getPooled(o, t, n, i)),
                                  r ? (o.data = r) : null !== (r = oi(n)) && (o.data = r),
                                  Ln(o),
                                  (r = o))
                                : (r = null),
                            (e = Zn
                                ? (function (e, t) {
                                      switch (e) {
                                          case "compositionend":
                                              return oi(t);
                                          case "keypress":
                                              return 32 !== t.which ? null : ((ii = !0), ti);
                                          case "textInput":
                                              return (e = t.data) === ti && ii ? null : e;
                                          default:
                                              return null;
                                      }
                                  })(e, n)
                                : (function (e, t) {
                                      if (ai) return "compositionend" === e || (!Xn && ri(e, t)) ? ((e = Vn()), (Fn = Nn = Un = null), (ai = !1), e) : null;
                                      switch (e) {
                                          case "paste":
                                              return null;
                                          case "keypress":
                                              if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                                  if (t.char && 1 < t.char.length) return t.char;
                                                  if (t.which) return String.fromCharCode(t.which);
                                              }
                                              return null;
                                          case "compositionend":
                                              return ei && "ko" !== t.locale ? null : t.data;
                                          default:
                                              return null;
                                      }
                                  })(e, n))
                                ? (((t = Kn.getPooled(ni.beforeInput, t, n, i)).data = e), Ln(t))
                                : (t = null),
                            null === r ? t : null === t ? r : [r, t]
                        );
                    },
                },
                si = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            function ui(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!si[e.type] : "textarea" === t;
            }
            var ci = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
            function fi(e, t, n) {
                return ((e = qn.getPooled(ci.change, e, t, n)).type = "change"), j(n), Ln(e), e;
            }
            var di = null,
                pi = null;
            function hi(e) {
                lt(e);
            }
            function vi(e) {
                if (xe(En(e))) return e;
            }
            function yi(e, t) {
                if ("change" === e) return t;
            }
            var mi = !1;
            function bi() {
                di && (di.detachEvent("onpropertychange", gi), (pi = di = null));
            }
            function gi(e) {
                if ("value" === e.propertyName && vi(pi))
                    if (((e = fi(pi, e, st(e))), U)) lt(e);
                    else {
                        U = !0;
                        try {
                            R(hi, e);
                        } finally {
                            (U = !1), F();
                        }
                    }
            }
            function wi(e, t, n) {
                "focus" === e ? (bi(), (pi = n), (di = t).attachEvent("onpropertychange", gi)) : "blur" === e && bi();
            }
            function xi(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return vi(pi);
            }
            function ki(e, t) {
                if ("click" === e) return vi(t);
            }
            function _i(e, t) {
                if ("input" === e || "change" === e) return vi(t);
            }
            O && (mi = ut("input") && (!document.documentMode || 9 < document.documentMode));
            var Pi = {
                    eventTypes: ci,
                    _isInputEventSupported: mi,
                    extractEvents: function (e, t, n, i) {
                        var r = t ? En(t) : window,
                            o = r.nodeName && r.nodeName.toLowerCase();
                        if ("select" === o || ("input" === o && "file" === r.type)) var a = yi;
                        else if (ui(r))
                            if (mi) a = _i;
                            else {
                                a = xi;
                                var l = wi;
                            }
                        else (o = r.nodeName) && "input" === o.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (a = ki);
                        if (a && (a = a(e, t))) return fi(a, n, i);
                        l && l(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && Oe(r, "number", r.value);
                    },
                },
                Si = qn.extend({ view: null, detail: null }),
                Ti = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            function Oi(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Ti[e]) && !!t[e];
            }
            function Ci() {
                return Oi;
            }
            var Ei = 0,
                Mi = 0,
                zi = !1,
                ji = !1,
                Ai = Si.extend({
                    screenX: null,
                    screenY: null,
                    clientX: null,
                    clientY: null,
                    pageX: null,
                    pageY: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    getModifierState: Ci,
                    button: null,
                    buttons: null,
                    relatedTarget: function (e) {
                        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                    },
                    movementX: function (e) {
                        if ("movementX" in e) return e.movementX;
                        var t = Ei;
                        return (Ei = e.screenX), zi ? ("mousemove" === e.type ? e.screenX - t : 0) : ((zi = !0), 0);
                    },
                    movementY: function (e) {
                        if ("movementY" in e) return e.movementY;
                        var t = Mi;
                        return (Mi = e.screenY), ji ? ("mousemove" === e.type ? e.screenY - t : 0) : ((ji = !0), 0);
                    },
                }),
                Ri = Ai.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
                Ii = {
                    mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] },
                    mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] },
                    pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] },
                    pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] },
                },
                Di = {
                    eventTypes: Ii,
                    extractEvents: function (e, t, n, i, r) {
                        var o = "mouseover" === e || "pointerover" === e,
                            a = "mouseout" === e || "pointerout" === e;
                        if ((o && 0 === (32 & r) && (n.relatedTarget || n.fromElement)) || (!a && !o)) return null;
                        ((o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window), a)
                            ? ((a = t), null !== (t = (t = n.relatedTarget || n.toElement) ? On(t) : null) && (t !== Ze(t) || (5 !== t.tag && 6 !== t.tag)) && (t = null))
                            : (a = null);
                        if (a === t) return null;
                        if ("mouseout" === e || "mouseover" === e)
                            var l = Ai,
                                s = Ii.mouseLeave,
                                u = Ii.mouseEnter,
                                c = "mouse";
                        else ("pointerout" !== e && "pointerover" !== e) || ((l = Ri), (s = Ii.pointerLeave), (u = Ii.pointerEnter), (c = "pointer"));
                        if (
                            ((e = null == a ? o : En(a)),
                            (o = null == t ? o : En(t)),
                            ((s = l.getPooled(s, a, n, i)).type = c + "leave"),
                            (s.target = e),
                            (s.relatedTarget = o),
                            ((n = l.getPooled(u, t, n, i)).type = c + "enter"),
                            (n.target = o),
                            (n.relatedTarget = e),
                            (c = t),
                            (i = a) && c)
                        )
                            e: {
                                for (u = c, a = 0, e = l = i; e; e = zn(e)) a++;
                                for (e = 0, t = u; t; t = zn(t)) e++;
                                for (; 0 < a - e; ) (l = zn(l)), a--;
                                for (; 0 < e - a; ) (u = zn(u)), e--;
                                for (; a--; ) {
                                    if (l === u || l === u.alternate) break e;
                                    (l = zn(l)), (u = zn(u));
                                }
                                l = null;
                            }
                        else l = null;
                        for (u = l, l = []; i && i !== u && (null === (a = i.alternate) || a !== u); ) l.push(i), (i = zn(i));
                        for (i = []; c && c !== u && (null === (a = c.alternate) || a !== u); ) i.push(c), (c = zn(c));
                        for (c = 0; c < l.length; c++) In(l[c], "bubbled", s);
                        for (c = i.length; 0 < c--; ) In(i[c], "captured", n);
                        return 0 === (64 & r) ? [s] : [s, n];
                    },
                };
            var Li =
                    "function" === typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
                          },
                Ui = Object.prototype.hasOwnProperty;
            function Ni(e, t) {
                if (Li(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    i = Object.keys(t);
                if (n.length !== i.length) return !1;
                for (i = 0; i < n.length; i++) if (!Ui.call(t, n[i]) || !Li(e[n[i]], t[n[i]])) return !1;
                return !0;
            }
            var Fi = O && "documentMode" in document && 11 >= document.documentMode,
                Vi = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
                Bi = null,
                Hi = null,
                qi = null,
                Wi = !1;
            function $i(e, t) {
                var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                return Wi || null == Bi || Bi !== cn(n)
                    ? null
                    : ("selectionStart" in (n = Bi) && hn(n)
                          ? (n = { start: n.selectionStart, end: n.selectionEnd })
                          : (n = { anchorNode: (n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }),
                      qi && Ni(qi, n) ? null : ((qi = n), ((e = qn.getPooled(Vi.select, Hi, e, t)).type = "select"), (e.target = Bi), Ln(e), e));
            }
            var Qi = {
                    eventTypes: Vi,
                    extractEvents: function (e, t, n, i, r, o) {
                        if (!(o = !(r = o || (i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument)))) {
                            e: {
                                (r = Je(r)), (o = S.onSelect);
                                for (var a = 0; a < o.length; a++)
                                    if (!r.has(o[a])) {
                                        r = !1;
                                        break e;
                                    }
                                r = !0;
                            }
                            o = !r;
                        }
                        if (o) return null;
                        switch (((r = t ? En(t) : window), e)) {
                            case "focus":
                                (ui(r) || "true" === r.contentEditable) && ((Bi = r), (Hi = t), (qi = null));
                                break;
                            case "blur":
                                qi = Hi = Bi = null;
                                break;
                            case "mousedown":
                                Wi = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                return (Wi = !1), $i(n, i);
                            case "selectionchange":
                                if (Fi) break;
                            case "keydown":
                            case "keyup":
                                return $i(n, i);
                        }
                        return null;
                    },
                },
                Gi = qn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
                Ki = qn.extend({
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                    },
                }),
                Yi = Si.extend({ relatedTarget: null });
            function Xi(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
            }
            var Ji = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified",
                },
                Zi = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta",
                },
                er = Si.extend({
                    key: function (e) {
                        if (e.key) {
                            var t = Ji[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type ? (13 === (e = Xi(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Zi[e.keyCode] || "Unidentified" : "";
                    },
                    location: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    repeat: null,
                    locale: null,
                    getModifierState: Ci,
                    charCode: function (e) {
                        return "keypress" === e.type ? Xi(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type ? Xi(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                }),
                tr = Ai.extend({ dataTransfer: null }),
                nr = Si.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Ci }),
                ir = qn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
                rr = Ai.extend({
                    deltaX: function (e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                    },
                    deltaY: function (e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                    },
                    deltaZ: null,
                    deltaMode: null,
                }),
                or = {
                    eventTypes: Lt,
                    extractEvents: function (e, t, n, i) {
                        var r = Ut.get(e);
                        if (!r) return null;
                        switch (e) {
                            case "keypress":
                                if (0 === Xi(n)) return null;
                            case "keydown":
                            case "keyup":
                                e = er;
                                break;
                            case "blur":
                            case "focus":
                                e = Yi;
                                break;
                            case "click":
                                if (2 === n.button) return null;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                e = Ai;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                e = tr;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                e = nr;
                                break;
                            case $e:
                            case Qe:
                            case Ge:
                                e = Gi;
                                break;
                            case Ke:
                                e = ir;
                                break;
                            case "scroll":
                                e = Si;
                                break;
                            case "wheel":
                                e = rr;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                e = Ki;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                e = Ri;
                                break;
                            default:
                                e = qn;
                        }
                        return Ln((t = e.getPooled(r, t, n, i))), t;
                    },
                };
            if (b) throw Error(a(101));
            (b = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "))),
                w(),
                (h = Mn),
                (v = Cn),
                (y = En),
                T({ SimpleEventPlugin: or, EnterLeaveEventPlugin: Di, ChangeEventPlugin: Pi, SelectEventPlugin: Qi, BeforeInputEventPlugin: li });
            var ar = [],
                lr = -1;
            function sr(e) {
                0 > lr || ((e.current = ar[lr]), (ar[lr] = null), lr--);
            }
            function ur(e, t) {
                lr++, (ar[lr] = e.current), (e.current = t);
            }
            var cr = {},
                fr = { current: cr },
                dr = { current: !1 },
                pr = cr;
            function hr(e, t) {
                var n = e.type.contextTypes;
                if (!n) return cr;
                var i = e.stateNode;
                if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
                var r,
                    o = {};
                for (r in n) o[r] = t[r];
                return i && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
            }
            function vr(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e;
            }
            function yr() {
                sr(dr), sr(fr);
            }
            function mr(e, t, n) {
                if (fr.current !== cr) throw Error(a(168));
                ur(fr, t), ur(dr, n);
            }
            function br(e, t, n) {
                var i = e.stateNode;
                if (((e = t.childContextTypes), "function" !== typeof i.getChildContext)) return n;
                for (var o in (i = i.getChildContext())) if (!(o in e)) throw Error(a(108, ye(t) || "Unknown", o));
                return r({}, n, {}, i);
            }
            function gr(e) {
                return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cr), (pr = fr.current), ur(fr, e), ur(dr, dr.current), !0;
            }
            function wr(e, t, n) {
                var i = e.stateNode;
                if (!i) throw Error(a(169));
                n ? ((e = br(e, t, pr)), (i.__reactInternalMemoizedMergedChildContext = e), sr(dr), sr(fr), ur(fr, e)) : sr(dr), ur(dr, n);
            }
            var xr = o.unstable_runWithPriority,
                kr = o.unstable_scheduleCallback,
                _r = o.unstable_cancelCallback,
                Pr = o.unstable_requestPaint,
                Sr = o.unstable_now,
                Tr = o.unstable_getCurrentPriorityLevel,
                Or = o.unstable_ImmediatePriority,
                Cr = o.unstable_UserBlockingPriority,
                Er = o.unstable_NormalPriority,
                Mr = o.unstable_LowPriority,
                zr = o.unstable_IdlePriority,
                jr = {},
                Ar = o.unstable_shouldYield,
                Rr = void 0 !== Pr ? Pr : function () {},
                Ir = null,
                Dr = null,
                Lr = !1,
                Ur = Sr(),
                Nr =
                    1e4 > Ur
                        ? Sr
                        : function () {
                              return Sr() - Ur;
                          };
            function Fr() {
                switch (Tr()) {
                    case Or:
                        return 99;
                    case Cr:
                        return 98;
                    case Er:
                        return 97;
                    case Mr:
                        return 96;
                    case zr:
                        return 95;
                    default:
                        throw Error(a(332));
                }
            }
            function Vr(e) {
                switch (e) {
                    case 99:
                        return Or;
                    case 98:
                        return Cr;
                    case 97:
                        return Er;
                    case 96:
                        return Mr;
                    case 95:
                        return zr;
                    default:
                        throw Error(a(332));
                }
            }
            function Br(e, t) {
                return (e = Vr(e)), xr(e, t);
            }
            function Hr(e, t, n) {
                return (e = Vr(e)), kr(e, t, n);
            }
            function qr(e) {
                return null === Ir ? ((Ir = [e]), (Dr = kr(Or, $r))) : Ir.push(e), jr;
            }
            function Wr() {
                if (null !== Dr) {
                    var e = Dr;
                    (Dr = null), _r(e);
                }
                $r();
            }
            function $r() {
                if (!Lr && null !== Ir) {
                    Lr = !0;
                    var e = 0;
                    try {
                        var t = Ir;
                        Br(99, function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0);
                                } while (null !== n);
                            }
                        }),
                            (Ir = null);
                    } catch (n) {
                        throw (null !== Ir && (Ir = Ir.slice(e + 1)), kr(Or, Wr), n);
                    } finally {
                        Lr = !1;
                    }
                }
            }
            function Qr(e, t, n) {
                return 1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n;
            }
            function Gr(e, t) {
                if (e && e.defaultProps) for (var n in ((t = r({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            var Kr = { current: null },
                Yr = null,
                Xr = null,
                Jr = null;
            function Zr() {
                Jr = Xr = Yr = null;
            }
            function eo(e) {
                var t = Kr.current;
                sr(Kr), (e.type._context._currentValue = t);
            }
            function to(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if (e.childExpirationTime < t) (e.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                    else {
                        if (!(null !== n && n.childExpirationTime < t)) break;
                        n.childExpirationTime = t;
                    }
                    e = e.return;
                }
            }
            function no(e, t) {
                (Yr = e), (Jr = Xr = null), null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ma = !0), (e.firstContext = null));
            }
            function io(e, t) {
                if (Jr !== e && !1 !== t && 0 !== t)
                    if ((("number" === typeof t && 1073741823 !== t) || ((Jr = e), (t = 1073741823)), (t = { context: e, observedBits: t, next: null }), null === Xr)) {
                        if (null === Yr) throw Error(a(308));
                        (Xr = t), (Yr.dependencies = { expirationTime: 0, firstContext: t, responders: null });
                    } else Xr = Xr.next = t;
                return e._currentValue;
            }
            var ro = !1;
            function oo(e) {
                e.updateQueue = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
            }
            function ao(e, t) {
                (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, baseQueue: e.baseQueue, shared: e.shared, effects: e.effects });
            }
            function lo(e, t) {
                return ((e = { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null }).next = e);
            }
            function so(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
                }
            }
            function uo(e, t) {
                var n = e.alternate;
                null !== n && ao(n, e), null === (n = (e = e.updateQueue).baseQueue) ? ((e.baseQueue = t.next = t), (t.next = t)) : ((t.next = n.next), (n.next = t));
            }
            function co(e, t, n, i) {
                var o = e.updateQueue;
                ro = !1;
                var a = o.baseQueue,
                    l = o.shared.pending;
                if (null !== l) {
                    if (null !== a) {
                        var s = a.next;
                        (a.next = l.next), (l.next = s);
                    }
                    (a = l), (o.shared.pending = null), null !== (s = e.alternate) && null !== (s = s.updateQueue) && (s.baseQueue = l);
                }
                if (null !== a) {
                    s = a.next;
                    var u = o.baseState,
                        c = 0,
                        f = null,
                        d = null,
                        p = null;
                    if (null !== s)
                        for (var h = s; ; ) {
                            if ((l = h.expirationTime) < i) {
                                var v = { expirationTime: h.expirationTime, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
                                null === p ? ((d = p = v), (f = u)) : (p = p.next = v), l > c && (c = l);
                            } else {
                                null !== p && (p = p.next = { expirationTime: 1073741823, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null }), os(l, h.suspenseConfig);
                                e: {
                                    var y = e,
                                        m = h;
                                    switch (((l = t), (v = n), m.tag)) {
                                        case 1:
                                            if ("function" === typeof (y = m.payload)) {
                                                u = y.call(v, u, l);
                                                break e;
                                            }
                                            u = y;
                                            break e;
                                        case 3:
                                            y.effectTag = (-4097 & y.effectTag) | 64;
                                        case 0:
                                            if (null === (l = "function" === typeof (y = m.payload) ? y.call(v, u, l) : y) || void 0 === l) break e;
                                            u = r({}, u, l);
                                            break e;
                                        case 2:
                                            ro = !0;
                                    }
                                }
                                null !== h.callback && ((e.effectTag |= 32), null === (l = o.effects) ? (o.effects = [h]) : l.push(h));
                            }
                            if (null === (h = h.next) || h === s) {
                                if (null === (l = o.shared.pending)) break;
                                (h = a.next = l.next), (l.next = s), (o.baseQueue = a = l), (o.shared.pending = null);
                            }
                        }
                    null === p ? (f = u) : (p.next = d), (o.baseState = f), (o.baseQueue = p), as(c), (e.expirationTime = c), (e.memoizedState = u);
                }
            }
            function fo(e, t, n) {
                if (((e = t.effects), (t.effects = null), null !== e))
                    for (t = 0; t < e.length; t++) {
                        var i = e[t],
                            r = i.callback;
                        if (null !== r) {
                            if (((i.callback = null), (i = r), (r = n), "function" !== typeof i)) throw Error(a(191, i));
                            i.call(r);
                        }
                    }
            }
            var po = Y.ReactCurrentBatchConfig,
                ho = new i.Component().refs;
            function vo(e, t, n, i) {
                (n = null === (n = n(i, (t = e.memoizedState))) || void 0 === n ? t : r({}, t, n)), (e.memoizedState = n), 0 === e.expirationTime && (e.updateQueue.baseState = n);
            }
            var yo = {
                isMounted: function (e) {
                    return !!(e = e._reactInternalFiber) && Ze(e) === e;
                },
                enqueueSetState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var i = $l(),
                        r = po.suspense;
                    ((r = lo((i = Ql(i, e, r)), r)).payload = t), void 0 !== n && null !== n && (r.callback = n), so(e, r), Gl(e, i);
                },
                enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var i = $l(),
                        r = po.suspense;
                    ((r = lo((i = Ql(i, e, r)), r)).tag = 1), (r.payload = t), void 0 !== n && null !== n && (r.callback = n), so(e, r), Gl(e, i);
                },
                enqueueForceUpdate: function (e, t) {
                    e = e._reactInternalFiber;
                    var n = $l(),
                        i = po.suspense;
                    ((i = lo((n = Ql(n, e, i)), i)).tag = 2), void 0 !== t && null !== t && (i.callback = t), so(e, i), Gl(e, n);
                },
            };
            function mo(e, t, n, i, r, o, a) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, o, a) : !t.prototype || !t.prototype.isPureReactComponent || !Ni(n, i) || !Ni(r, o);
            }
            function bo(e, t, n) {
                var i = !1,
                    r = cr,
                    o = t.contextType;
                return (
                    "object" === typeof o && null !== o ? (o = io(o)) : ((r = vr(t) ? pr : fr.current), (o = (i = null !== (i = t.contextTypes) && void 0 !== i) ? hr(e, r) : cr)),
                    (t = new t(n, o)),
                    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
                    (t.updater = yo),
                    (e.stateNode = t),
                    (t._reactInternalFiber = e),
                    i && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r), (e.__reactInternalMemoizedMaskedChildContext = o)),
                    t
                );
            }
            function go(e, t, n, i) {
                (e = t.state),
                    "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i),
                    "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i),
                    t.state !== e && yo.enqueueReplaceState(t, t.state, null);
            }
            function wo(e, t, n, i) {
                var r = e.stateNode;
                (r.props = n), (r.state = e.memoizedState), (r.refs = ho), oo(e);
                var o = t.contextType;
                "object" === typeof o && null !== o ? (r.context = io(o)) : ((o = vr(t) ? pr : fr.current), (r.context = hr(e, o))),
                    co(e, n, r, i),
                    (r.state = e.memoizedState),
                    "function" === typeof (o = t.getDerivedStateFromProps) && (vo(e, t, o, n), (r.state = e.memoizedState)),
                    "function" === typeof t.getDerivedStateFromProps ||
                        "function" === typeof r.getSnapshotBeforeUpdate ||
                        ("function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount) ||
                        ((t = r.state),
                        "function" === typeof r.componentWillMount && r.componentWillMount(),
                        "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                        t !== r.state && yo.enqueueReplaceState(r, r.state, null),
                        co(e, n, r, i),
                        (r.state = e.memoizedState)),
                    "function" === typeof r.componentDidMount && (e.effectTag |= 4);
            }
            var xo = Array.isArray;
            function ko(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if ((n = n._owner)) {
                            if (1 !== n.tag) throw Error(a(309));
                            var i = n.stateNode;
                        }
                        if (!i) throw Error(a(147, e));
                        var r = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r
                            ? t.ref
                            : (((t = function (e) {
                                  var t = i.refs;
                                  t === ho && (t = i.refs = {}), null === e ? delete t[r] : (t[r] = e);
                              })._stringRef = r),
                              t);
                    }
                    if ("string" !== typeof e) throw Error(a(284));
                    if (!n._owner) throw Error(a(290, e));
                }
                return e;
            }
            function _o(e, t) {
                if ("textarea" !== e.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
            }
            function Po(e) {
                function t(t, n) {
                    if (e) {
                        var i = t.lastEffect;
                        null !== i ? ((i.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
                    }
                }
                function n(n, i) {
                    if (!e) return null;
                    for (; null !== i; ) t(n, i), (i = i.sibling);
                    return null;
                }
                function i(e, t) {
                    for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
                    return e;
                }
                function r(e, t) {
                    return ((e = Ts(e, t)).index = 0), (e.sibling = null), e;
                }
                function o(t, n, i) {
                    return (t.index = i), e ? (null !== (i = t.alternate) ? ((i = i.index) < n ? ((t.effectTag = 2), n) : i) : ((t.effectTag = 2), n)) : n;
                }
                function l(t) {
                    return e && null === t.alternate && (t.effectTag = 2), t;
                }
                function s(e, t, n, i) {
                    return null === t || 6 !== t.tag ? (((t = Es(n, e.mode, i)).return = e), t) : (((t = r(t, n)).return = e), t);
                }
                function u(e, t, n, i) {
                    return null !== t && t.elementType === n.type ? (((i = r(t, n.props)).ref = ko(e, t, n)), (i.return = e), i) : (((i = Os(n.type, n.key, n.props, null, e.mode, i)).ref = ko(e, t, n)), (i.return = e), i);
                }
                function c(e, t, n, i) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
                        ? (((t = Ms(n, e.mode, i)).return = e), t)
                        : (((t = r(t, n.children || [])).return = e), t);
                }
                function f(e, t, n, i, o) {
                    return null === t || 7 !== t.tag ? (((t = Cs(n, e.mode, i, o)).return = e), t) : (((t = r(t, n)).return = e), t);
                }
                function d(e, t, n) {
                    if ("string" === typeof t || "number" === typeof t) return ((t = Es("" + t, e.mode, n)).return = e), t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case ee:
                                return ((n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = ko(e, null, t)), (n.return = e), n;
                            case te:
                                return ((t = Ms(t, e.mode, n)).return = e), t;
                        }
                        if (xo(t) || ve(t)) return ((t = Cs(t, e.mode, n, null)).return = e), t;
                        _o(e, t);
                    }
                    return null;
                }
                function p(e, t, n, i) {
                    var r = null !== t ? t.key : null;
                    if ("string" === typeof n || "number" === typeof n) return null !== r ? null : s(e, t, "" + n, i);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case ee:
                                return n.key === r ? (n.type === ne ? f(e, t, n.props.children, i, r) : u(e, t, n, i)) : null;
                            case te:
                                return n.key === r ? c(e, t, n, i) : null;
                        }
                        if (xo(n) || ve(n)) return null !== r ? null : f(e, t, n, i, null);
                        _o(e, n);
                    }
                    return null;
                }
                function h(e, t, n, i, r) {
                    if ("string" === typeof i || "number" === typeof i) return s(t, (e = e.get(n) || null), "" + i, r);
                    if ("object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case ee:
                                return (e = e.get(null === i.key ? n : i.key) || null), i.type === ne ? f(t, e, i.props.children, r, i.key) : u(t, e, i, r);
                            case te:
                                return c(t, (e = e.get(null === i.key ? n : i.key) || null), i, r);
                        }
                        if (xo(i) || ve(i)) return f(t, (e = e.get(n) || null), i, r, null);
                        _o(t, i);
                    }
                    return null;
                }
                function v(r, a, l, s) {
                    for (var u = null, c = null, f = a, v = (a = 0), y = null; null !== f && v < l.length; v++) {
                        f.index > v ? ((y = f), (f = null)) : (y = f.sibling);
                        var m = p(r, f, l[v], s);
                        if (null === m) {
                            null === f && (f = y);
                            break;
                        }
                        e && f && null === m.alternate && t(r, f), (a = o(m, a, v)), null === c ? (u = m) : (c.sibling = m), (c = m), (f = y);
                    }
                    if (v === l.length) return n(r, f), u;
                    if (null === f) {
                        for (; v < l.length; v++) null !== (f = d(r, l[v], s)) && ((a = o(f, a, v)), null === c ? (u = f) : (c.sibling = f), (c = f));
                        return u;
                    }
                    for (f = i(r, f); v < l.length; v++) null !== (y = h(f, r, v, l[v], s)) && (e && null !== y.alternate && f.delete(null === y.key ? v : y.key), (a = o(y, a, v)), null === c ? (u = y) : (c.sibling = y), (c = y));
                    return (
                        e &&
                            f.forEach(function (e) {
                                return t(r, e);
                            }),
                        u
                    );
                }
                function y(r, l, s, u) {
                    var c = ve(s);
                    if ("function" !== typeof c) throw Error(a(150));
                    if (null == (s = c.call(s))) throw Error(a(151));
                    for (var f = (c = null), v = l, y = (l = 0), m = null, b = s.next(); null !== v && !b.done; y++, b = s.next()) {
                        v.index > y ? ((m = v), (v = null)) : (m = v.sibling);
                        var g = p(r, v, b.value, u);
                        if (null === g) {
                            null === v && (v = m);
                            break;
                        }
                        e && v && null === g.alternate && t(r, v), (l = o(g, l, y)), null === f ? (c = g) : (f.sibling = g), (f = g), (v = m);
                    }
                    if (b.done) return n(r, v), c;
                    if (null === v) {
                        for (; !b.done; y++, b = s.next()) null !== (b = d(r, b.value, u)) && ((l = o(b, l, y)), null === f ? (c = b) : (f.sibling = b), (f = b));
                        return c;
                    }
                    for (v = i(r, v); !b.done; y++, b = s.next())
                        null !== (b = h(v, r, y, b.value, u)) && (e && null !== b.alternate && v.delete(null === b.key ? y : b.key), (l = o(b, l, y)), null === f ? (c = b) : (f.sibling = b), (f = b));
                    return (
                        e &&
                            v.forEach(function (e) {
                                return t(r, e);
                            }),
                        c
                    );
                }
                return function (e, i, o, s) {
                    var u = "object" === typeof o && null !== o && o.type === ne && null === o.key;
                    u && (o = o.props.children);
                    var c = "object" === typeof o && null !== o;
                    if (c)
                        switch (o.$$typeof) {
                            case ee:
                                e: {
                                    for (c = o.key, u = i; null !== u; ) {
                                        if (u.key === c) {
                                            switch (u.tag) {
                                                case 7:
                                                    if (o.type === ne) {
                                                        n(e, u.sibling), ((i = r(u, o.props.children)).return = e), (e = i);
                                                        break e;
                                                    }
                                                    break;
                                                default:
                                                    if (u.elementType === o.type) {
                                                        n(e, u.sibling), ((i = r(u, o.props)).ref = ko(e, u, o)), (i.return = e), (e = i);
                                                        break e;
                                                    }
                                            }
                                            n(e, u);
                                            break;
                                        }
                                        t(e, u), (u = u.sibling);
                                    }
                                    o.type === ne ? (((i = Cs(o.props.children, e.mode, s, o.key)).return = e), (e = i)) : (((s = Os(o.type, o.key, o.props, null, e.mode, s)).ref = ko(e, i, o)), (s.return = e), (e = s));
                                }
                                return l(e);
                            case te:
                                e: {
                                    for (u = o.key; null !== i; ) {
                                        if (i.key === u) {
                                            if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                n(e, i.sibling), ((i = r(i, o.children || [])).return = e), (e = i);
                                                break e;
                                            }
                                            n(e, i);
                                            break;
                                        }
                                        t(e, i), (i = i.sibling);
                                    }
                                    ((i = Ms(o, e.mode, s)).return = e), (e = i);
                                }
                                return l(e);
                        }
                    if ("string" === typeof o || "number" === typeof o) return (o = "" + o), null !== i && 6 === i.tag ? (n(e, i.sibling), ((i = r(i, o)).return = e), (e = i)) : (n(e, i), ((i = Es(o, e.mode, s)).return = e), (e = i)), l(e);
                    if (xo(o)) return v(e, i, o, s);
                    if (ve(o)) return y(e, i, o, s);
                    if ((c && _o(e, o), "undefined" === typeof o && !u))
                        switch (e.tag) {
                            case 1:
                            case 0:
                                throw ((e = e.type), Error(a(152, e.displayName || e.name || "Component")));
                        }
                    return n(e, i);
                };
            }
            var So = Po(!0),
                To = Po(!1),
                Oo = {},
                Co = { current: Oo },
                Eo = { current: Oo },
                Mo = { current: Oo };
            function zo(e) {
                if (e === Oo) throw Error(a(174));
                return e;
            }
            function jo(e, t) {
                switch ((ur(Mo, t), ur(Eo, e), ur(Co, Oo), (e = t.nodeType))) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
                        break;
                    default:
                        t = Le((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
                }
                sr(Co), ur(Co, t);
            }
            function Ao() {
                sr(Co), sr(Eo), sr(Mo);
            }
            function Ro(e) {
                zo(Mo.current);
                var t = zo(Co.current),
                    n = Le(t, e.type);
                t !== n && (ur(Eo, e), ur(Co, n));
            }
            function Io(e) {
                Eo.current === e && (sr(Co), sr(Eo));
            }
            var Do = { current: 0 };
            function Lo(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.effectTag)) return t;
                    } else if (null !== t.child) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
                return null;
            }
            function Uo(e, t) {
                return { responder: e, props: t };
            }
            var No = Y.ReactCurrentDispatcher,
                Fo = Y.ReactCurrentBatchConfig,
                Vo = 0,
                Bo = null,
                Ho = null,
                qo = null,
                Wo = !1;
            function $o() {
                throw Error(a(321));
            }
            function Qo(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!Li(e[n], t[n])) return !1;
                return !0;
            }
            function Go(e, t, n, i, r, o) {
                if (((Vo = o), (Bo = t), (t.memoizedState = null), (t.updateQueue = null), (t.expirationTime = 0), (No.current = null === e || null === e.memoizedState ? ma : ba), (e = n(i, r)), t.expirationTime === Vo)) {
                    o = 0;
                    do {
                        if (((t.expirationTime = 0), !(25 > o))) throw Error(a(301));
                        (o += 1), (qo = Ho = null), (t.updateQueue = null), (No.current = ga), (e = n(i, r));
                    } while (t.expirationTime === Vo);
                }
                if (((No.current = ya), (t = null !== Ho && null !== Ho.next), (Vo = 0), (qo = Ho = Bo = null), (Wo = !1), t)) throw Error(a(300));
                return e;
            }
            function Ko() {
                var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                return null === qo ? (Bo.memoizedState = qo = e) : (qo = qo.next = e), qo;
            }
            function Yo() {
                if (null === Ho) {
                    var e = Bo.alternate;
                    e = null !== e ? e.memoizedState : null;
                } else e = Ho.next;
                var t = null === qo ? Bo.memoizedState : qo.next;
                if (null !== t) (qo = t), (Ho = e);
                else {
                    if (null === e) throw Error(a(310));
                    (e = { memoizedState: (Ho = e).memoizedState, baseState: Ho.baseState, baseQueue: Ho.baseQueue, queue: Ho.queue, next: null }), null === qo ? (Bo.memoizedState = qo = e) : (qo = qo.next = e);
                }
                return qo;
            }
            function Xo(e, t) {
                return "function" === typeof t ? t(e) : t;
            }
            function Jo(e) {
                var t = Yo(),
                    n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var i = Ho,
                    r = i.baseQueue,
                    o = n.pending;
                if (null !== o) {
                    if (null !== r) {
                        var l = r.next;
                        (r.next = o.next), (o.next = l);
                    }
                    (i.baseQueue = r = o), (n.pending = null);
                }
                if (null !== r) {
                    (r = r.next), (i = i.baseState);
                    var s = (l = o = null),
                        u = r;
                    do {
                        var c = u.expirationTime;
                        if (c < Vo) {
                            var f = { expirationTime: u.expirationTime, suspenseConfig: u.suspenseConfig, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null };
                            null === s ? ((l = s = f), (o = i)) : (s = s.next = f), c > Bo.expirationTime && ((Bo.expirationTime = c), as(c));
                        } else
                            null !== s && (s = s.next = { expirationTime: 1073741823, suspenseConfig: u.suspenseConfig, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }),
                                os(c, u.suspenseConfig),
                                (i = u.eagerReducer === e ? u.eagerState : e(i, u.action));
                        u = u.next;
                    } while (null !== u && u !== r);
                    null === s ? (o = i) : (s.next = l), Li(i, t.memoizedState) || (Ma = !0), (t.memoizedState = i), (t.baseState = o), (t.baseQueue = s), (n.lastRenderedState = i);
                }
                return [t.memoizedState, n.dispatch];
            }
            function Zo(e) {
                var t = Yo(),
                    n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var i = n.dispatch,
                    r = n.pending,
                    o = t.memoizedState;
                if (null !== r) {
                    n.pending = null;
                    var l = (r = r.next);
                    do {
                        (o = e(o, l.action)), (l = l.next);
                    } while (l !== r);
                    Li(o, t.memoizedState) || (Ma = !0), (t.memoizedState = o), null === t.baseQueue && (t.baseState = o), (n.lastRenderedState = o);
                }
                return [o, i];
            }
            function ea(e) {
                var t = Ko();
                return (
                    "function" === typeof e && (e = e()),
                    (t.memoizedState = t.baseState = e),
                    (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Xo, lastRenderedState: e }).dispatch = va.bind(null, Bo, e)),
                    [t.memoizedState, e]
                );
            }
            function ta(e, t, n, i) {
                return (
                    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
                    null === (t = Bo.updateQueue)
                        ? ((t = { lastEffect: null }), (Bo.updateQueue = t), (t.lastEffect = e.next = e))
                        : null === (n = t.lastEffect)
                        ? (t.lastEffect = e.next = e)
                        : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
                    e
                );
            }
            function na() {
                return Yo().memoizedState;
            }
            function ia(e, t, n, i) {
                var r = Ko();
                (Bo.effectTag |= e), (r.memoizedState = ta(1 | t, n, void 0, void 0 === i ? null : i));
            }
            function ra(e, t, n, i) {
                var r = Yo();
                i = void 0 === i ? null : i;
                var o = void 0;
                if (null !== Ho) {
                    var a = Ho.memoizedState;
                    if (((o = a.destroy), null !== i && Qo(i, a.deps))) return void ta(t, n, o, i);
                }
                (Bo.effectTag |= e), (r.memoizedState = ta(1 | t, n, o, i));
            }
            function oa(e, t) {
                return ia(516, 4, e, t);
            }
            function aa(e, t) {
                return ra(516, 4, e, t);
            }
            function la(e, t) {
                return ra(4, 2, e, t);
            }
            function sa(e, t) {
                return "function" === typeof t
                    ? ((e = e()),
                      t(e),
                      function () {
                          t(null);
                      })
                    : null !== t && void 0 !== t
                    ? ((e = e()),
                      (t.current = e),
                      function () {
                          t.current = null;
                      })
                    : void 0;
            }
            function ua(e, t, n) {
                return (n = null !== n && void 0 !== n ? n.concat([e]) : null), ra(4, 2, sa.bind(null, t, e), n);
            }
            function ca() {}
            function fa(e, t) {
                return (Ko().memoizedState = [e, void 0 === t ? null : t]), e;
            }
            function da(e, t) {
                var n = Yo();
                t = void 0 === t ? null : t;
                var i = n.memoizedState;
                return null !== i && null !== t && Qo(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
            }
            function pa(e, t) {
                var n = Yo();
                t = void 0 === t ? null : t;
                var i = n.memoizedState;
                return null !== i && null !== t && Qo(t, i[1]) ? i[0] : ((e = e()), (n.memoizedState = [e, t]), e);
            }
            function ha(e, t, n) {
                var i = Fr();
                Br(98 > i ? 98 : i, function () {
                    e(!0);
                }),
                    Br(97 < i ? 97 : i, function () {
                        var i = Fo.suspense;
                        Fo.suspense = void 0 === t ? null : t;
                        try {
                            e(!1), n();
                        } finally {
                            Fo.suspense = i;
                        }
                    });
            }
            function va(e, t, n) {
                var i = $l(),
                    r = po.suspense;
                r = { expirationTime: (i = Ql(i, e, r)), suspenseConfig: r, action: n, eagerReducer: null, eagerState: null, next: null };
                var o = t.pending;
                if ((null === o ? (r.next = r) : ((r.next = o.next), (o.next = r)), (t.pending = r), (o = e.alternate), e === Bo || (null !== o && o === Bo))) (Wo = !0), (r.expirationTime = Vo), (Bo.expirationTime = Vo);
                else {
                    if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer))
                        try {
                            var a = t.lastRenderedState,
                                l = o(a, n);
                            if (((r.eagerReducer = o), (r.eagerState = l), Li(l, a))) return;
                        } catch (s) {}
                    Gl(e, i);
                }
            }
            var ya = {
                    readContext: io,
                    useCallback: $o,
                    useContext: $o,
                    useEffect: $o,
                    useImperativeHandle: $o,
                    useLayoutEffect: $o,
                    useMemo: $o,
                    useReducer: $o,
                    useRef: $o,
                    useState: $o,
                    useDebugValue: $o,
                    useResponder: $o,
                    useDeferredValue: $o,
                    useTransition: $o,
                },
                ma = {
                    readContext: io,
                    useCallback: fa,
                    useContext: io,
                    useEffect: oa,
                    useImperativeHandle: function (e, t, n) {
                        return (n = null !== n && void 0 !== n ? n.concat([e]) : null), ia(4, 2, sa.bind(null, t, e), n);
                    },
                    useLayoutEffect: function (e, t) {
                        return ia(4, 2, e, t);
                    },
                    useMemo: function (e, t) {
                        var n = Ko();
                        return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
                    },
                    useReducer: function (e, t, n) {
                        var i = Ko();
                        return (
                            (t = void 0 !== n ? n(t) : t),
                            (i.memoizedState = i.baseState = t),
                            (e = (e = i.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = va.bind(null, Bo, e)),
                            [i.memoizedState, e]
                        );
                    },
                    useRef: function (e) {
                        return (e = { current: e }), (Ko().memoizedState = e);
                    },
                    useState: ea,
                    useDebugValue: ca,
                    useResponder: Uo,
                    useDeferredValue: function (e, t) {
                        var n = ea(e),
                            i = n[0],
                            r = n[1];
                        return (
                            oa(
                                function () {
                                    var n = Fo.suspense;
                                    Fo.suspense = void 0 === t ? null : t;
                                    try {
                                        r(e);
                                    } finally {
                                        Fo.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            i
                        );
                    },
                    useTransition: function (e) {
                        var t = ea(!1),
                            n = t[0];
                        return (t = t[1]), [fa(ha.bind(null, t, e), [t, e]), n];
                    },
                },
                ba = {
                    readContext: io,
                    useCallback: da,
                    useContext: io,
                    useEffect: aa,
                    useImperativeHandle: ua,
                    useLayoutEffect: la,
                    useMemo: pa,
                    useReducer: Jo,
                    useRef: na,
                    useState: function () {
                        return Jo(Xo);
                    },
                    useDebugValue: ca,
                    useResponder: Uo,
                    useDeferredValue: function (e, t) {
                        var n = Jo(Xo),
                            i = n[0],
                            r = n[1];
                        return (
                            aa(
                                function () {
                                    var n = Fo.suspense;
                                    Fo.suspense = void 0 === t ? null : t;
                                    try {
                                        r(e);
                                    } finally {
                                        Fo.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            i
                        );
                    },
                    useTransition: function (e) {
                        var t = Jo(Xo),
                            n = t[0];
                        return (t = t[1]), [da(ha.bind(null, t, e), [t, e]), n];
                    },
                },
                ga = {
                    readContext: io,
                    useCallback: da,
                    useContext: io,
                    useEffect: aa,
                    useImperativeHandle: ua,
                    useLayoutEffect: la,
                    useMemo: pa,
                    useReducer: Zo,
                    useRef: na,
                    useState: function () {
                        return Zo(Xo);
                    },
                    useDebugValue: ca,
                    useResponder: Uo,
                    useDeferredValue: function (e, t) {
                        var n = Zo(Xo),
                            i = n[0],
                            r = n[1];
                        return (
                            aa(
                                function () {
                                    var n = Fo.suspense;
                                    Fo.suspense = void 0 === t ? null : t;
                                    try {
                                        r(e);
                                    } finally {
                                        Fo.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            i
                        );
                    },
                    useTransition: function (e) {
                        var t = Zo(Xo),
                            n = t[0];
                        return (t = t[1]), [da(ha.bind(null, t, e), [t, e]), n];
                    },
                },
                wa = null,
                xa = null,
                ka = !1;
            function _a(e, t) {
                var n = Ps(5, null, null, 0);
                (n.elementType = "DELETED"), (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
            }
            function Pa(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
                    case 13:
                    default:
                        return !1;
                }
            }
            function Sa(e) {
                if (ka) {
                    var t = xa;
                    if (t) {
                        var n = t;
                        if (!Pa(e, t)) {
                            if (!(t = xn(n.nextSibling)) || !Pa(e, t)) return (e.effectTag = (-1025 & e.effectTag) | 2), (ka = !1), void (wa = e);
                            _a(wa, n);
                        }
                        (wa = e), (xa = xn(t.firstChild));
                    } else (e.effectTag = (-1025 & e.effectTag) | 2), (ka = !1), (wa = e);
                }
            }
            function Ta(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
                wa = e;
            }
            function Oa(e) {
                if (e !== wa) return !1;
                if (!ka) return Ta(e), (ka = !0), !1;
                var t = e.type;
                if (5 !== e.tag || ("head" !== t && "body" !== t && !bn(t, e.memoizedProps))) for (t = xa; t; ) _a(e, t), (t = xn(t.nextSibling));
                if ((Ta(e), 13 === e.tag)) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        xa = xn(e.nextSibling);
                                        break e;
                                    }
                                    t--;
                                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                            }
                            e = e.nextSibling;
                        }
                        xa = null;
                    }
                } else xa = wa ? xn(e.stateNode.nextSibling) : null;
                return !0;
            }
            function Ca() {
                (xa = wa = null), (ka = !1);
            }
            var Ea = Y.ReactCurrentOwner,
                Ma = !1;
            function za(e, t, n, i) {
                t.child = null === e ? To(t, null, n, i) : So(t, e.child, n, i);
            }
            function ja(e, t, n, i, r) {
                n = n.render;
                var o = t.ref;
                return (
                    no(t, r),
                    (i = Go(e, t, n, i, o, r)),
                    null === e || Ma ? ((t.effectTag |= 1), za(e, t, i, r), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= r && (e.expirationTime = 0), Ga(e, t, r))
                );
            }
            function Aa(e, t, n, i, r, o) {
                if (null === e) {
                    var a = n.type;
                    return "function" !== typeof a || Ss(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps
                        ? (((e = Os(n.type, null, i, null, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
                        : ((t.tag = 15), (t.type = a), Ra(e, t, a, i, r, o));
                }
                return (a = e.child), r < o && ((r = a.memoizedProps), (n = null !== (n = n.compare) ? n : Ni)(r, i) && e.ref === t.ref) ? Ga(e, t, o) : ((t.effectTag |= 1), ((e = Ts(a, i)).ref = t.ref), (e.return = t), (t.child = e));
            }
            function Ra(e, t, n, i, r, o) {
                return null !== e && Ni(e.memoizedProps, i) && e.ref === t.ref && ((Ma = !1), r < o) ? ((t.expirationTime = e.expirationTime), Ga(e, t, o)) : Da(e, t, n, i, o);
            }
            function Ia(e, t) {
                var n = t.ref;
                ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
            }
            function Da(e, t, n, i, r) {
                var o = vr(n) ? pr : fr.current;
                return (
                    (o = hr(t, o)),
                    no(t, r),
                    (n = Go(e, t, n, i, o, r)),
                    null === e || Ma ? ((t.effectTag |= 1), za(e, t, n, r), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= r && (e.expirationTime = 0), Ga(e, t, r))
                );
            }
            function La(e, t, n, i, r) {
                if (vr(n)) {
                    var o = !0;
                    gr(t);
                } else o = !1;
                if ((no(t, r), null === t.stateNode)) null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), bo(t, n, i), wo(t, n, i, r), (i = !0);
                else if (null === e) {
                    var a = t.stateNode,
                        l = t.memoizedProps;
                    a.props = l;
                    var s = a.context,
                        u = n.contextType;
                    "object" === typeof u && null !== u ? (u = io(u)) : (u = hr(t, (u = vr(n) ? pr : fr.current)));
                    var c = n.getDerivedStateFromProps,
                        f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                    f || ("function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps) || ((l !== i || s !== u) && go(t, a, i, u)), (ro = !1);
                    var d = t.memoizedState;
                    (a.state = d),
                        co(t, i, a, r),
                        (s = t.memoizedState),
                        l !== i || d !== s || dr.current || ro
                            ? ("function" === typeof c && (vo(t, n, c, i), (s = t.memoizedState)),
                              (l = ro || mo(t, n, l, i, d, s, u))
                                  ? (f ||
                                        ("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
                                        ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                                    "function" === typeof a.componentDidMount && (t.effectTag |= 4))
                                  : ("function" === typeof a.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = i), (t.memoizedState = s)),
                              (a.props = i),
                              (a.state = s),
                              (a.context = u),
                              (i = l))
                            : ("function" === typeof a.componentDidMount && (t.effectTag |= 4), (i = !1));
                } else
                    (a = t.stateNode),
                        ao(e, t),
                        (l = t.memoizedProps),
                        (a.props = t.type === t.elementType ? l : Gr(t.type, l)),
                        (s = a.context),
                        "object" === typeof (u = n.contextType) && null !== u ? (u = io(u)) : (u = hr(t, (u = vr(n) ? pr : fr.current))),
                        (f = "function" === typeof (c = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) ||
                            ("function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps) ||
                            ((l !== i || s !== u) && go(t, a, i, u)),
                        (ro = !1),
                        (s = t.memoizedState),
                        (a.state = s),
                        co(t, i, a, r),
                        (d = t.memoizedState),
                        l !== i || s !== d || dr.current || ro
                            ? ("function" === typeof c && (vo(t, n, c, i), (d = t.memoizedState)),
                              (c = ro || mo(t, n, l, i, s, d, u))
                                  ? (f ||
                                        ("function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate) ||
                                        ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(i, d, u), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(i, d, u)),
                                    "function" === typeof a.componentDidUpdate && (t.effectTag |= 4),
                                    "function" === typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                  : ("function" !== typeof a.componentDidUpdate || (l === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 4),
                                    "function" !== typeof a.getSnapshotBeforeUpdate || (l === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 256),
                                    (t.memoizedProps = i),
                                    (t.memoizedState = d)),
                              (a.props = i),
                              (a.state = d),
                              (a.context = u),
                              (i = c))
                            : ("function" !== typeof a.componentDidUpdate || (l === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 4),
                              "function" !== typeof a.getSnapshotBeforeUpdate || (l === e.memoizedProps && s === e.memoizedState) || (t.effectTag |= 256),
                              (i = !1));
                return Ua(e, t, n, i, o, r);
            }
            function Ua(e, t, n, i, r, o) {
                Ia(e, t);
                var a = 0 !== (64 & t.effectTag);
                if (!i && !a) return r && wr(t, n, !1), Ga(e, t, o);
                (i = t.stateNode), (Ea.current = t);
                var l = a && "function" !== typeof n.getDerivedStateFromError ? null : i.render();
                return (t.effectTag |= 1), null !== e && a ? ((t.child = So(t, e.child, null, o)), (t.child = So(t, null, l, o))) : za(e, t, l, o), (t.memoizedState = i.state), r && wr(t, n, !0), t.child;
            }
            function Na(e) {
                var t = e.stateNode;
                t.pendingContext ? mr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && mr(0, t.context, !1), jo(e, t.containerInfo);
            }
            var Fa,
                Va,
                Ba,
                Ha = { dehydrated: null, retryTime: 0 };
            function qa(e, t, n) {
                var i,
                    r = t.mode,
                    o = t.pendingProps,
                    a = Do.current,
                    l = !1;
                if (
                    ((i = 0 !== (64 & t.effectTag)) || (i = 0 !== (2 & a) && (null === e || null !== e.memoizedState)),
                    i ? ((l = !0), (t.effectTag &= -65)) : (null !== e && null === e.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1),
                    ur(Do, 1 & a),
                    null === e)
                ) {
                    if ((void 0 !== o.fallback && Sa(t), l)) {
                        if (((l = o.fallback), ((o = Cs(null, r, 0, null)).return = t), 0 === (2 & t.mode))) for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
                        return ((n = Cs(l, r, n, null)).return = t), (o.sibling = n), (t.memoizedState = Ha), (t.child = o), n;
                    }
                    return (r = o.children), (t.memoizedState = null), (t.child = To(t, null, r, n));
                }
                if (null !== e.memoizedState) {
                    if (((r = (e = e.child).sibling), l)) {
                        if (((o = o.fallback), ((n = Ts(e, e.pendingProps)).return = t), 0 === (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child))
                            for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
                        return ((r = Ts(r, o)).return = t), (n.sibling = r), (n.childExpirationTime = 0), (t.memoizedState = Ha), (t.child = n), r;
                    }
                    return (n = So(t, e.child, o.children, n)), (t.memoizedState = null), (t.child = n);
                }
                if (((e = e.child), l)) {
                    if (((l = o.fallback), ((o = Cs(null, r, 0, null)).return = t), (o.child = e), null !== e && (e.return = o), 0 === (2 & t.mode)))
                        for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
                    return ((n = Cs(l, r, n, null)).return = t), (o.sibling = n), (n.effectTag |= 2), (o.childExpirationTime = 0), (t.memoizedState = Ha), (t.child = o), n;
                }
                return (t.memoizedState = null), (t.child = So(t, e, o.children, n));
            }
            function Wa(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t), to(e.return, t);
            }
            function $a(e, t, n, i, r, o) {
                var a = e.memoizedState;
                null === a
                    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailExpiration: 0, tailMode: r, lastEffect: o })
                    : ((a.isBackwards = t), (a.rendering = null), (a.renderingStartTime = 0), (a.last = i), (a.tail = n), (a.tailExpiration = 0), (a.tailMode = r), (a.lastEffect = o));
            }
            function Qa(e, t, n) {
                var i = t.pendingProps,
                    r = i.revealOrder,
                    o = i.tail;
                if ((za(e, t, i.children, n), 0 !== (2 & (i = Do.current)))) (i = (1 & i) | 2), (t.effectTag |= 64);
                else {
                    if (null !== e && 0 !== (64 & e.effectTag))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag) null !== e.memoizedState && Wa(e, n);
                            else if (19 === e.tag) Wa(e, n);
                            else if (null !== e.child) {
                                (e.child.return = e), (e = e.child);
                                continue;
                            }
                            if (e === t) break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return;
                            }
                            (e.sibling.return = e.return), (e = e.sibling);
                        }
                    i &= 1;
                }
                if ((ur(Do, i), 0 === (2 & t.mode))) t.memoizedState = null;
                else
                    switch (r) {
                        case "forwards":
                            for (n = t.child, r = null; null !== n; ) null !== (e = n.alternate) && null === Lo(e) && (r = n), (n = n.sibling);
                            null === (n = r) ? ((r = t.child), (t.child = null)) : ((r = n.sibling), (n.sibling = null)), $a(t, !1, r, n, o, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, r = t.child, t.child = null; null !== r; ) {
                                if (null !== (e = r.alternate) && null === Lo(e)) {
                                    t.child = r;
                                    break;
                                }
                                (e = r.sibling), (r.sibling = n), (n = r), (r = e);
                            }
                            $a(t, !0, n, null, o, t.lastEffect);
                            break;
                        case "together":
                            $a(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                return t.child;
            }
            function Ga(e, t, n) {
                null !== e && (t.dependencies = e.dependencies);
                var i = t.expirationTime;
                if ((0 !== i && as(i), t.childExpirationTime < n)) return null;
                if (null !== e && t.child !== e.child) throw Error(a(153));
                if (null !== t.child) {
                    for (n = Ts((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Ts(e, e.pendingProps)).return = t);
                    n.sibling = null;
                }
                return t.child;
            }
            function Ka(e, t) {
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                        null === n ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var i = null; null !== n; ) null !== n.alternate && (i = n), (n = n.sibling);
                        null === i ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (i.sibling = null);
                }
            }
            function Ya(e, t, n) {
                var i = t.pendingProps;
                switch (t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                        return vr(t.type) && yr(), null;
                    case 3:
                        return Ao(), sr(dr), sr(fr), (n = t.stateNode).pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)), (null !== e && null !== e.child) || !Oa(t) || (t.effectTag |= 4), null;
                    case 5:
                        Io(t), (n = zo(Mo.current));
                        var o = t.type;
                        if (null !== e && null != t.stateNode) Va(e, t, o, i, n), e.ref !== t.ref && (t.effectTag |= 128);
                        else {
                            if (!i) {
                                if (null === t.stateNode) throw Error(a(166));
                                return null;
                            }
                            if (((e = zo(Co.current)), Oa(t))) {
                                (i = t.stateNode), (o = t.type);
                                var l = t.memoizedProps;
                                switch (((i[Pn] = t), (i[Sn] = l), o)) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Qt("load", i);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < Ye.length; e++) Qt(Ye[e], i);
                                        break;
                                    case "source":
                                        Qt("error", i);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Qt("error", i), Qt("load", i);
                                        break;
                                    case "form":
                                        Qt("reset", i), Qt("submit", i);
                                        break;
                                    case "details":
                                        Qt("toggle", i);
                                        break;
                                    case "input":
                                        _e(i, l), Qt("invalid", i), sn(n, "onChange");
                                        break;
                                    case "select":
                                        (i._wrapperState = { wasMultiple: !!l.multiple }), Qt("invalid", i), sn(n, "onChange");
                                        break;
                                    case "textarea":
                                        ze(i, l), Qt("invalid", i), sn(n, "onChange");
                                }
                                for (var s in (on(o, l), (e = null), l))
                                    if (l.hasOwnProperty(s)) {
                                        var u = l[s];
                                        "children" === s
                                            ? "string" === typeof u
                                                ? i.textContent !== u && (e = ["children", u])
                                                : "number" === typeof u && i.textContent !== "" + u && (e = ["children", "" + u])
                                            : P.hasOwnProperty(s) && null != u && sn(n, s);
                                    }
                                switch (o) {
                                    case "input":
                                        we(i), Te(i, l, !0);
                                        break;
                                    case "textarea":
                                        we(i), Ae(i);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof l.onClick && (i.onclick = un);
                                }
                                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
                            } else {
                                switch (
                                    ((s = 9 === n.nodeType ? n : n.ownerDocument),
                                    e === ln && (e = De(o)),
                                    e === ln
                                        ? "script" === o
                                            ? (((e = s.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                            : "string" === typeof i.is
                                            ? (e = s.createElement(o, { is: i.is }))
                                            : ((e = s.createElement(o)), "select" === o && ((s = e), i.multiple ? (s.multiple = !0) : i.size && (s.size = i.size)))
                                        : (e = s.createElementNS(e, o)),
                                    (e[Pn] = t),
                                    (e[Sn] = i),
                                    Fa(e, t),
                                    (t.stateNode = e),
                                    (s = an(o, i)),
                                    o)
                                ) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Qt("load", e), (u = i);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (u = 0; u < Ye.length; u++) Qt(Ye[u], e);
                                        u = i;
                                        break;
                                    case "source":
                                        Qt("error", e), (u = i);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Qt("error", e), Qt("load", e), (u = i);
                                        break;
                                    case "form":
                                        Qt("reset", e), Qt("submit", e), (u = i);
                                        break;
                                    case "details":
                                        Qt("toggle", e), (u = i);
                                        break;
                                    case "input":
                                        _e(e, i), (u = ke(e, i)), Qt("invalid", e), sn(n, "onChange");
                                        break;
                                    case "option":
                                        u = Ce(e, i);
                                        break;
                                    case "select":
                                        (e._wrapperState = { wasMultiple: !!i.multiple }), (u = r({}, i, { value: void 0 })), Qt("invalid", e), sn(n, "onChange");
                                        break;
                                    case "textarea":
                                        ze(e, i), (u = Me(e, i)), Qt("invalid", e), sn(n, "onChange");
                                        break;
                                    default:
                                        u = i;
                                }
                                on(o, u);
                                var c = u;
                                for (l in c)
                                    if (c.hasOwnProperty(l)) {
                                        var f = c[l];
                                        "style" === l
                                            ? nn(e, f)
                                            : "dangerouslySetInnerHTML" === l
                                            ? null != (f = f ? f.__html : void 0) && Ne(e, f)
                                            : "children" === l
                                            ? "string" === typeof f
                                                ? ("textarea" !== o || "" !== f) && Fe(e, f)
                                                : "number" === typeof f && Fe(e, "" + f)
                                            : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (P.hasOwnProperty(l) ? null != f && sn(n, l) : null != f && X(e, l, f, s));
                                    }
                                switch (o) {
                                    case "input":
                                        we(e), Te(e, i, !1);
                                        break;
                                    case "textarea":
                                        we(e), Ae(e);
                                        break;
                                    case "option":
                                        null != i.value && e.setAttribute("value", "" + be(i.value));
                                        break;
                                    case "select":
                                        (e.multiple = !!i.multiple), null != (n = i.value) ? Ee(e, !!i.multiple, n, !1) : null != i.defaultValue && Ee(e, !!i.multiple, i.defaultValue, !0);
                                        break;
                                    default:
                                        "function" === typeof u.onClick && (e.onclick = un);
                                }
                                mn(o, i) && (t.effectTag |= 4);
                            }
                            null !== t.ref && (t.effectTag |= 128);
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) Ba(0, t, e.memoizedProps, i);
                        else {
                            if ("string" !== typeof i && null === t.stateNode) throw Error(a(166));
                            (n = zo(Mo.current)),
                                zo(Co.current),
                                Oa(t) ? ((n = t.stateNode), (i = t.memoizedProps), (n[Pn] = t), n.nodeValue !== i && (t.effectTag |= 4)) : (((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[Pn] = t), (t.stateNode = n));
                        }
                        return null;
                    case 13:
                        return (
                            sr(Do),
                            (i = t.memoizedState),
                            0 !== (64 & t.effectTag)
                                ? ((t.expirationTime = n), t)
                                : ((n = null !== i),
                                  (i = !1),
                                  null === e
                                      ? void 0 !== t.memoizedProps.fallback && Oa(t)
                                      : ((i = null !== (o = e.memoizedState)),
                                        n ||
                                            null === o ||
                                            (null !== (o = e.child.sibling) && (null !== (l = t.firstEffect) ? ((t.firstEffect = o), (o.nextEffect = l)) : ((t.firstEffect = t.lastEffect = o), (o.nextEffect = null)), (o.effectTag = 8)))),
                                  n &&
                                      !i &&
                                      0 !== (2 & t.mode) &&
                                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Do.current)
                                          ? Ol === wl && (Ol = xl)
                                          : ((Ol !== wl && Ol !== xl) || (Ol = kl), 0 !== jl && null !== Pl && (As(Pl, Tl), Rs(Pl, jl)))),
                                  (n || i) && (t.effectTag |= 4),
                                  null)
                        );
                    case 4:
                        return Ao(), null;
                    case 10:
                        return eo(t), null;
                    case 17:
                        return vr(t.type) && yr(), null;
                    case 19:
                        if ((sr(Do), null === (i = t.memoizedState))) return null;
                        if (((o = 0 !== (64 & t.effectTag)), null === (l = i.rendering))) {
                            if (o) Ka(i, !1);
                            else if (Ol !== wl || (null !== e && 0 !== (64 & e.effectTag)))
                                for (l = t.child; null !== l; ) {
                                    if (null !== (e = Lo(l))) {
                                        for (
                                            t.effectTag |= 64, Ka(i, !1), null !== (o = e.updateQueue) && ((t.updateQueue = o), (t.effectTag |= 4)), null === i.lastEffect && (t.firstEffect = null), t.lastEffect = i.lastEffect, i = t.child;
                                            null !== i;

                                        )
                                            (l = n),
                                                ((o = i).effectTag &= 2),
                                                (o.nextEffect = null),
                                                (o.firstEffect = null),
                                                (o.lastEffect = null),
                                                null === (e = o.alternate)
                                                    ? ((o.childExpirationTime = 0), (o.expirationTime = l), (o.child = null), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null))
                                                    : ((o.childExpirationTime = e.childExpirationTime),
                                                      (o.expirationTime = e.expirationTime),
                                                      (o.child = e.child),
                                                      (o.memoizedProps = e.memoizedProps),
                                                      (o.memoizedState = e.memoizedState),
                                                      (o.updateQueue = e.updateQueue),
                                                      (l = e.dependencies),
                                                      (o.dependencies = null === l ? null : { expirationTime: l.expirationTime, firstContext: l.firstContext, responders: l.responders })),
                                                (i = i.sibling);
                                        return ur(Do, (1 & Do.current) | 2), t.child;
                                    }
                                    l = l.sibling;
                                }
                        } else {
                            if (!o)
                                if (null !== (e = Lo(l))) {
                                    if (((t.effectTag |= 64), (o = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)), Ka(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate))
                                        return null !== (t = t.lastEffect = i.lastEffect) && (t.nextEffect = null), null;
                                } else 2 * Nr() - i.renderingStartTime > i.tailExpiration && 1 < n && ((t.effectTag |= 64), (o = !0), Ka(i, !1), (t.expirationTime = t.childExpirationTime = n - 1));
                            i.isBackwards ? ((l.sibling = t.child), (t.child = l)) : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l), (i.last = l));
                        }
                        return null !== i.tail
                            ? (0 === i.tailExpiration && (i.tailExpiration = Nr() + 500),
                              (n = i.tail),
                              (i.rendering = n),
                              (i.tail = n.sibling),
                              (i.lastEffect = t.lastEffect),
                              (i.renderingStartTime = Nr()),
                              (n.sibling = null),
                              (t = Do.current),
                              ur(Do, o ? (1 & t) | 2 : 1 & t),
                              n)
                            : null;
                }
                throw Error(a(156, t.tag));
            }
            function Xa(e) {
                switch (e.tag) {
                    case 1:
                        vr(e.type) && yr();
                        var t = e.effectTag;
                        return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 3:
                        if ((Ao(), sr(dr), sr(fr), 0 !== (64 & (t = e.effectTag)))) throw Error(a(285));
                        return (e.effectTag = (-4097 & t) | 64), e;
                    case 5:
                        return Io(e), null;
                    case 13:
                        return sr(Do), 4096 & (t = e.effectTag) ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 19:
                        return sr(Do), null;
                    case 4:
                        return Ao(), null;
                    case 10:
                        return eo(e), null;
                    default:
                        return null;
                }
            }
            function Ja(e, t) {
                return { value: e, source: t, stack: me(t) };
            }
            (Fa = function (e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        (n.child.return = n), (n = n.child);
                        continue;
                    }
                    if (n === t) break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t) return;
                        n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                }
            }),
                (Va = function (e, t, n, i, o) {
                    var a = e.memoizedProps;
                    if (a !== i) {
                        var l,
                            s,
                            u = t.stateNode;
                        switch ((zo(Co.current), (e = null), n)) {
                            case "input":
                                (a = ke(u, a)), (i = ke(u, i)), (e = []);
                                break;
                            case "option":
                                (a = Ce(u, a)), (i = Ce(u, i)), (e = []);
                                break;
                            case "select":
                                (a = r({}, a, { value: void 0 })), (i = r({}, i, { value: void 0 })), (e = []);
                                break;
                            case "textarea":
                                (a = Me(u, a)), (i = Me(u, i)), (e = []);
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof i.onClick && (u.onclick = un);
                        }
                        for (l in (on(n, i), (n = null), a))
                            if (!i.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                                if ("style" === l) for (s in (u = a[l])) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                                else
                                    "dangerouslySetInnerHTML" !== l &&
                                        "children" !== l &&
                                        "suppressContentEditableWarning" !== l &&
                                        "suppressHydrationWarning" !== l &&
                                        "autoFocus" !== l &&
                                        (P.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
                        for (l in i) {
                            var c = i[l];
                            if (((u = null != a ? a[l] : void 0), i.hasOwnProperty(l) && c !== u && (null != c || null != u)))
                                if ("style" === l)
                                    if (u) {
                                        for (s in u) !u.hasOwnProperty(s) || (c && c.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                                        for (s in c) c.hasOwnProperty(s) && u[s] !== c[s] && (n || (n = {}), (n[s] = c[s]));
                                    } else n || (e || (e = []), e.push(l, n)), (n = c);
                                else
                                    "dangerouslySetInnerHTML" === l
                                        ? ((c = c ? c.__html : void 0), (u = u ? u.__html : void 0), null != c && u !== c && (e = e || []).push(l, c))
                                        : "children" === l
                                        ? u === c || ("string" !== typeof c && "number" !== typeof c) || (e = e || []).push(l, "" + c)
                                        : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (P.hasOwnProperty(l) ? (null != c && sn(o, l), e || u === c || (e = [])) : (e = e || []).push(l, c));
                        }
                        n && (e = e || []).push("style", n), (o = e), (t.updateQueue = o) && (t.effectTag |= 4);
                    }
                }),
                (Ba = function (e, t, n, i) {
                    n !== i && (t.effectTag |= 4);
                });
            var Za = "function" === typeof WeakSet ? WeakSet : Set;
            function el(e, t) {
                var n = t.source,
                    i = t.stack;
                null === i && null !== n && (i = me(n)), null !== n && ye(n.type), (t = t.value), null !== e && 1 === e.tag && ye(e.type);
                try {
                    console.error(t);
                } catch (r) {
                    setTimeout(function () {
                        throw r;
                    });
                }
            }
            function tl(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null);
                        } catch (n) {
                            bs(e, n);
                        }
                    else t.current = null;
            }
            function nl(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps,
                                i = e.memoizedState;
                            (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Gr(t.type, n), i)), (e.__reactInternalSnapshotBeforeUpdate = t);
                        }
                        return;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                }
                throw Error(a(163));
            }
            function il(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = (t = t.next);
                    do {
                        if ((n.tag & e) === e) {
                            var i = n.destroy;
                            (n.destroy = void 0), void 0 !== i && i();
                        }
                        n = n.next;
                    } while (n !== t);
                }
            }
            function rl(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = (t = t.next);
                    do {
                        if ((n.tag & e) === e) {
                            var i = n.create;
                            n.destroy = i();
                        }
                        n = n.next;
                    } while (n !== t);
                }
            }
            function ol(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return void rl(3, n);
                    case 1:
                        if (((e = n.stateNode), 4 & n.effectTag))
                            if (null === t) e.componentDidMount();
                            else {
                                var i = n.elementType === n.type ? t.memoizedProps : Gr(n.type, t.memoizedProps);
                                e.componentDidUpdate(i, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
                            }
                        return void (null !== (t = n.updateQueue) && fo(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (((e = null), null !== n.child))
                                switch (n.child.tag) {
                                    case 5:
                                        e = n.child.stateNode;
                                        break;
                                    case 1:
                                        e = n.child.stateNode;
                                }
                            fo(n, t, e);
                        }
                        return;
                    case 5:
                        return (e = n.stateNode), void (null === t && 4 & n.effectTag && mn(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (null === n.memoizedState && ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && Dt(n)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                        return;
                }
                throw Error(a(163));
            }
            function al(e, t, n) {
                switch (("function" === typeof ks && ks(t), t.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var i = e.next;
                            Br(97 < n ? 97 : n, function () {
                                var e = i;
                                do {
                                    var n = e.destroy;
                                    if (void 0 !== n) {
                                        var r = t;
                                        try {
                                            n();
                                        } catch (o) {
                                            bs(r, o);
                                        }
                                    }
                                    e = e.next;
                                } while (e !== i);
                            });
                        }
                        break;
                    case 1:
                        tl(t),
                            "function" === typeof (n = t.stateNode).componentWillUnmount &&
                                (function (e, t) {
                                    try {
                                        (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                                    } catch (n) {
                                        bs(e, n);
                                    }
                                })(t, n);
                        break;
                    case 5:
                        tl(t);
                        break;
                    case 4:
                        cl(e, t, n);
                }
            }
            function ll(e) {
                var t = e.alternate;
                (e.return = null),
                    (e.child = null),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    (e.dependencies = null),
                    (e.alternate = null),
                    (e.firstEffect = null),
                    (e.lastEffect = null),
                    (e.pendingProps = null),
                    (e.memoizedProps = null),
                    (e.stateNode = null),
                    null !== t && ll(t);
            }
            function sl(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag;
            }
            function ul(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (sl(t)) {
                            var n = t;
                            break e;
                        }
                        t = t.return;
                    }
                    throw Error(a(160));
                }
                switch (((t = n.stateNode), n.tag)) {
                    case 5:
                        var i = !1;
                        break;
                    case 3:
                    case 4:
                        (t = t.containerInfo), (i = !0);
                        break;
                    default:
                        throw Error(a(161));
                }
                16 & n.effectTag && (Fe(t, ""), (n.effectTag &= -17));
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || sl(n.return)) {
                            n = null;
                            break e;
                        }
                        n = n.return;
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.effectTag) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        (n.child.return = n), (n = n.child);
                    }
                    if (!(2 & n.effectTag)) {
                        n = n.stateNode;
                        break e;
                    }
                }
                i
                    ? (function e(t, n, i) {
                          var r = t.tag,
                              o = 5 === r || 6 === r;
                          if (o)
                              (t = o ? t.stateNode : t.stateNode.instance),
                                  n
                                      ? 8 === i.nodeType
                                          ? i.parentNode.insertBefore(t, n)
                                          : i.insertBefore(t, n)
                                      : (8 === i.nodeType ? (n = i.parentNode).insertBefore(t, i) : (n = i).appendChild(t), (null !== (i = i._reactRootContainer) && void 0 !== i) || null !== n.onclick || (n.onclick = un));
                          else if (4 !== r && null !== (t = t.child)) for (e(t, n, i), t = t.sibling; null !== t; ) e(t, n, i), (t = t.sibling);
                      })(e, n, t)
                    : (function e(t, n, i) {
                          var r = t.tag,
                              o = 5 === r || 6 === r;
                          if (o) (t = o ? t.stateNode : t.stateNode.instance), n ? i.insertBefore(t, n) : i.appendChild(t);
                          else if (4 !== r && null !== (t = t.child)) for (e(t, n, i), t = t.sibling; null !== t; ) e(t, n, i), (t = t.sibling);
                      })(e, n, t);
            }
            function cl(e, t, n) {
                for (var i, r, o = t, l = !1; ; ) {
                    if (!l) {
                        l = o.return;
                        e: for (;;) {
                            if (null === l) throw Error(a(160));
                            switch (((i = l.stateNode), l.tag)) {
                                case 5:
                                    r = !1;
                                    break e;
                                case 3:
                                case 4:
                                    (i = i.containerInfo), (r = !0);
                                    break e;
                            }
                            l = l.return;
                        }
                        l = !0;
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var s = e, u = o, c = n, f = u; ; )
                            if ((al(s, f, c), null !== f.child && 4 !== f.tag)) (f.child.return = f), (f = f.child);
                            else {
                                if (f === u) break e;
                                for (; null === f.sibling; ) {
                                    if (null === f.return || f.return === u) break e;
                                    f = f.return;
                                }
                                (f.sibling.return = f.return), (f = f.sibling);
                            }
                        r ? ((s = i), (u = o.stateNode), 8 === s.nodeType ? s.parentNode.removeChild(u) : s.removeChild(u)) : i.removeChild(o.stateNode);
                    } else if (4 === o.tag) {
                        if (null !== o.child) {
                            (i = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
                            continue;
                        }
                    } else if ((al(e, o, n), null !== o.child)) {
                        (o.child.return = o), (o = o.child);
                        continue;
                    }
                    if (o === t) break;
                    for (; null === o.sibling; ) {
                        if (null === o.return || o.return === t) return;
                        4 === (o = o.return).tag && (l = !1);
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                }
            }
            function fl(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        return void il(3, t);
                    case 1:
                        return;
                    case 5:
                        var n = t.stateNode;
                        if (null != n) {
                            var i = t.memoizedProps,
                                r = null !== e ? e.memoizedProps : i;
                            e = t.type;
                            var o = t.updateQueue;
                            if (((t.updateQueue = null), null !== o)) {
                                for (n[Sn] = i, "input" === e && "radio" === i.type && null != i.name && Pe(n, i), an(e, r), t = an(e, i), r = 0; r < o.length; r += 2) {
                                    var l = o[r],
                                        s = o[r + 1];
                                    "style" === l ? nn(n, s) : "dangerouslySetInnerHTML" === l ? Ne(n, s) : "children" === l ? Fe(n, s) : X(n, l, s, t);
                                }
                                switch (e) {
                                    case "input":
                                        Se(n, i);
                                        break;
                                    case "textarea":
                                        je(n, i);
                                        break;
                                    case "select":
                                        (t = n._wrapperState.wasMultiple),
                                            (n._wrapperState.wasMultiple = !!i.multiple),
                                            null != (e = i.value) ? Ee(n, !!i.multiple, e, !1) : t !== !!i.multiple && (null != i.defaultValue ? Ee(n, !!i.multiple, i.defaultValue, !0) : Ee(n, !!i.multiple, i.multiple ? [] : "", !1));
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(a(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void ((t = t.stateNode).hydrate && ((t.hydrate = !1), Dt(t.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        if (((n = t), null === t.memoizedState ? (i = !1) : ((i = !0), (n = t.child), (Rl = Nr())), null !== n))
                            e: for (e = n; ; ) {
                                if (5 === e.tag)
                                    (o = e.stateNode),
                                        i
                                            ? "function" === typeof (o = o.style).setProperty
                                                ? o.setProperty("display", "none", "important")
                                                : (o.display = "none")
                                            : ((o = e.stateNode), (r = void 0 !== (r = e.memoizedProps.style) && null !== r && r.hasOwnProperty("display") ? r.display : null), (o.style.display = tn("display", r)));
                                else if (6 === e.tag) e.stateNode.nodeValue = i ? "" : e.memoizedProps;
                                else {
                                    if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                        ((o = e.child.sibling).return = e), (e = o);
                                        continue;
                                    }
                                    if (null !== e.child) {
                                        (e.child.return = e), (e = e.child);
                                        continue;
                                    }
                                }
                                if (e === n) break;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === n) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        return void dl(t);
                    case 19:
                        return void dl(t);
                    case 17:
                        return;
                }
                throw Error(a(163));
            }
            function dl(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Za()),
                        t.forEach(function (t) {
                            var i = ws.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(i, i));
                        });
                }
            }
            var pl = "function" === typeof WeakMap ? WeakMap : Map;
            function hl(e, t, n) {
                ((n = lo(n, null)).tag = 3), (n.payload = { element: null });
                var i = t.value;
                return (
                    (n.callback = function () {
                        Dl || ((Dl = !0), (Ll = i)), el(e, t);
                    }),
                    n
                );
            }
            function vl(e, t, n) {
                (n = lo(n, null)).tag = 3;
                var i = e.type.getDerivedStateFromError;
                if ("function" === typeof i) {
                    var r = t.value;
                    n.payload = function () {
                        return el(e, t), i(r);
                    };
                }
                var o = e.stateNode;
                return (
                    null !== o &&
                        "function" === typeof o.componentDidCatch &&
                        (n.callback = function () {
                            "function" !== typeof i && (null === Ul ? (Ul = new Set([this])) : Ul.add(this), el(e, t));
                            var n = t.stack;
                            this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
                        }),
                    n
                );
            }
            var yl,
                ml = Math.ceil,
                bl = Y.ReactCurrentDispatcher,
                gl = Y.ReactCurrentOwner,
                wl = 0,
                xl = 3,
                kl = 4,
                _l = 0,
                Pl = null,
                Sl = null,
                Tl = 0,
                Ol = wl,
                Cl = null,
                El = 1073741823,
                Ml = 1073741823,
                zl = null,
                jl = 0,
                Al = !1,
                Rl = 0,
                Il = null,
                Dl = !1,
                Ll = null,
                Ul = null,
                Nl = !1,
                Fl = null,
                Vl = 90,
                Bl = null,
                Hl = 0,
                ql = null,
                Wl = 0;
            function $l() {
                return 0 !== (48 & _l) ? 1073741821 - ((Nr() / 10) | 0) : 0 !== Wl ? Wl : (Wl = 1073741821 - ((Nr() / 10) | 0));
            }
            function Ql(e, t, n) {
                if (0 === (2 & (t = t.mode))) return 1073741823;
                var i = Fr();
                if (0 === (4 & t)) return 99 === i ? 1073741823 : 1073741822;
                if (0 !== (16 & _l)) return Tl;
                if (null !== n) e = Qr(e, 0 | n.timeoutMs || 5e3, 250);
                else
                    switch (i) {
                        case 99:
                            e = 1073741823;
                            break;
                        case 98:
                            e = Qr(e, 150, 100);
                            break;
                        case 97:
                        case 96:
                            e = Qr(e, 5e3, 250);
                            break;
                        case 95:
                            e = 2;
                            break;
                        default:
                            throw Error(a(326));
                    }
                return null !== Pl && e === Tl && --e, e;
            }
            function Gl(e, t) {
                if (50 < Hl) throw ((Hl = 0), (ql = null), Error(a(185)));
                if (null !== (e = Kl(e, t))) {
                    var n = Fr();
                    1073741823 === t ? (0 !== (8 & _l) && 0 === (48 & _l) ? Zl(e) : (Xl(e), 0 === _l && Wr())) : Xl(e),
                        0 === (4 & _l) || (98 !== n && 99 !== n) || (null === Bl ? (Bl = new Map([[e, t]])) : (void 0 === (n = Bl.get(e)) || n > t) && Bl.set(e, t));
                }
            }
            function Kl(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t);
                var i = e.return,
                    r = null;
                if (null === i && 3 === e.tag) r = e.stateNode;
                else
                    for (; null !== i; ) {
                        if (((n = i.alternate), i.childExpirationTime < t && (i.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === i.return && 3 === i.tag)) {
                            r = i.stateNode;
                            break;
                        }
                        i = i.return;
                    }
                return null !== r && (Pl === r && (as(t), Ol === kl && As(r, Tl)), Rs(r, t)), r;
            }
            function Yl(e) {
                var t = e.lastExpiredTime;
                if (0 !== t) return t;
                if (!js(e, (t = e.firstPendingTime))) return t;
                var n = e.lastPingedTime;
                return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
            }
            function Xl(e) {
                if (0 !== e.lastExpiredTime) (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = qr(Zl.bind(null, e)));
                else {
                    var t = Yl(e),
                        n = e.callbackNode;
                    if (0 === t) null !== n && ((e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90));
                    else {
                        var i = $l();
                        if ((1073741823 === t ? (i = 99) : 1 === t || 2 === t ? (i = 95) : (i = 0 >= (i = 10 * (1073741821 - t) - 10 * (1073741821 - i)) ? 99 : 250 >= i ? 98 : 5250 >= i ? 97 : 95), null !== n)) {
                            var r = e.callbackPriority;
                            if (e.callbackExpirationTime === t && r >= i) return;
                            n !== jr && _r(n);
                        }
                        (e.callbackExpirationTime = t), (e.callbackPriority = i), (t = 1073741823 === t ? qr(Zl.bind(null, e)) : Hr(i, Jl.bind(null, e), { timeout: 10 * (1073741821 - t) - Nr() })), (e.callbackNode = t);
                    }
                }
            }
            function Jl(e, t) {
                if (((Wl = 0), t)) return Is(e, (t = $l())), Xl(e), null;
                var n = Yl(e);
                if (0 !== n) {
                    if (((t = e.callbackNode), 0 !== (48 & _l))) throw Error(a(327));
                    if ((vs(), (e === Pl && n === Tl) || ns(e, n), null !== Sl)) {
                        var i = _l;
                        _l |= 16;
                        for (var r = rs(); ; )
                            try {
                                ss();
                                break;
                            } catch (s) {
                                is(e, s);
                            }
                        if ((Zr(), (_l = i), (bl.current = r), 1 === Ol)) throw ((t = Cl), ns(e, n), As(e, n), Xl(e), t);
                        if (null === Sl)
                            switch (((r = e.finishedWork = e.current.alternate), (e.finishedExpirationTime = n), (i = Ol), (Pl = null), i)) {
                                case wl:
                                case 1:
                                    throw Error(a(345));
                                case 2:
                                    Is(e, 2 < n ? 2 : n);
                                    break;
                                case xl:
                                    if ((As(e, n), n === (i = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fs(r)), 1073741823 === El && 10 < (r = Rl + 500 - Nr()))) {
                                        if (Al) {
                                            var o = e.lastPingedTime;
                                            if (0 === o || o >= n) {
                                                (e.lastPingedTime = n), ns(e, n);
                                                break;
                                            }
                                        }
                                        if (0 !== (o = Yl(e)) && o !== n) break;
                                        if (0 !== i && i !== n) {
                                            e.lastPingedTime = i;
                                            break;
                                        }
                                        e.timeoutHandle = gn(ds.bind(null, e), r);
                                        break;
                                    }
                                    ds(e);
                                    break;
                                case kl:
                                    if ((As(e, n), n === (i = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fs(r)), Al && (0 === (r = e.lastPingedTime) || r >= n))) {
                                        (e.lastPingedTime = n), ns(e, n);
                                        break;
                                    }
                                    if (0 !== (r = Yl(e)) && r !== n) break;
                                    if (0 !== i && i !== n) {
                                        e.lastPingedTime = i;
                                        break;
                                    }
                                    if (
                                        (1073741823 !== Ml
                                            ? (i = 10 * (1073741821 - Ml) - Nr())
                                            : 1073741823 === El
                                            ? (i = 0)
                                            : ((i = 10 * (1073741821 - El) - 5e3),
                                              0 > (i = (r = Nr()) - i) && (i = 0),
                                              (n = 10 * (1073741821 - n) - r) < (i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * ml(i / 1960)) - i) && (i = n)),
                                        10 < i)
                                    ) {
                                        e.timeoutHandle = gn(ds.bind(null, e), i);
                                        break;
                                    }
                                    ds(e);
                                    break;
                                case 5:
                                    if (1073741823 !== El && null !== zl) {
                                        o = El;
                                        var l = zl;
                                        if ((0 >= (i = 0 | l.busyMinDurationMs) ? (i = 0) : ((r = 0 | l.busyDelayMs), (i = (o = Nr() - (10 * (1073741821 - o) - (0 | l.timeoutMs || 5e3))) <= r ? 0 : r + i - o)), 10 < i)) {
                                            As(e, n), (e.timeoutHandle = gn(ds.bind(null, e), i));
                                            break;
                                        }
                                    }
                                    ds(e);
                                    break;
                                default:
                                    throw Error(a(329));
                            }
                        if ((Xl(e), e.callbackNode === t)) return Jl.bind(null, e);
                    }
                }
                return null;
            }
            function Zl(e) {
                var t = e.lastExpiredTime;
                if (((t = 0 !== t ? t : 1073741823), 0 !== (48 & _l))) throw Error(a(327));
                if ((vs(), (e === Pl && t === Tl) || ns(e, t), null !== Sl)) {
                    var n = _l;
                    _l |= 16;
                    for (var i = rs(); ; )
                        try {
                            ls();
                            break;
                        } catch (r) {
                            is(e, r);
                        }
                    if ((Zr(), (_l = n), (bl.current = i), 1 === Ol)) throw ((n = Cl), ns(e, t), As(e, t), Xl(e), n);
                    if (null !== Sl) throw Error(a(261));
                    (e.finishedWork = e.current.alternate), (e.finishedExpirationTime = t), (Pl = null), ds(e), Xl(e);
                }
                return null;
            }
            function es(e, t) {
                var n = _l;
                _l |= 1;
                try {
                    return e(t);
                } finally {
                    0 === (_l = n) && Wr();
                }
            }
            function ts(e, t) {
                var n = _l;
                (_l &= -2), (_l |= 8);
                try {
                    return e(t);
                } finally {
                    0 === (_l = n) && Wr();
                }
            }
            function ns(e, t) {
                (e.finishedWork = null), (e.finishedExpirationTime = 0);
                var n = e.timeoutHandle;
                if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== Sl))
                    for (n = Sl.return; null !== n; ) {
                        var i = n;
                        switch (i.tag) {
                            case 1:
                                null !== (i = i.type.childContextTypes) && void 0 !== i && yr();
                                break;
                            case 3:
                                Ao(), sr(dr), sr(fr);
                                break;
                            case 5:
                                Io(i);
                                break;
                            case 4:
                                Ao();
                                break;
                            case 13:
                            case 19:
                                sr(Do);
                                break;
                            case 10:
                                eo(i);
                        }
                        n = n.return;
                    }
                (Pl = e), (Sl = Ts(e.current, null)), (Tl = t), (Ol = wl), (Cl = null), (Ml = El = 1073741823), (zl = null), (jl = 0), (Al = !1);
            }
            function is(e, t) {
                for (;;) {
                    try {
                        if ((Zr(), (No.current = ya), Wo))
                            for (var n = Bo.memoizedState; null !== n; ) {
                                var i = n.queue;
                                null !== i && (i.pending = null), (n = n.next);
                            }
                        if (((Vo = 0), (qo = Ho = Bo = null), (Wo = !1), null === Sl || null === Sl.return)) return (Ol = 1), (Cl = t), (Sl = null);
                        e: {
                            var r = e,
                                o = Sl.return,
                                a = Sl,
                                l = t;
                            if (((t = Tl), (a.effectTag |= 2048), (a.firstEffect = a.lastEffect = null), null !== l && "object" === typeof l && "function" === typeof l.then)) {
                                var s = l;
                                if (0 === (2 & a.mode)) {
                                    var u = a.alternate;
                                    u ? ((a.updateQueue = u.updateQueue), (a.memoizedState = u.memoizedState), (a.expirationTime = u.expirationTime)) : ((a.updateQueue = null), (a.memoizedState = null));
                                }
                                var c = 0 !== (1 & Do.current),
                                    f = o;
                                do {
                                    var d;
                                    if ((d = 13 === f.tag)) {
                                        var p = f.memoizedState;
                                        if (null !== p) d = null !== p.dehydrated;
                                        else {
                                            var h = f.memoizedProps;
                                            d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c);
                                        }
                                    }
                                    if (d) {
                                        var v = f.updateQueue;
                                        if (null === v) {
                                            var y = new Set();
                                            y.add(s), (f.updateQueue = y);
                                        } else v.add(s);
                                        if (0 === (2 & f.mode)) {
                                            if (((f.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag))
                                                if (null === a.alternate) a.tag = 17;
                                                else {
                                                    var m = lo(1073741823, null);
                                                    (m.tag = 2), so(a, m);
                                                }
                                            a.expirationTime = 1073741823;
                                            break e;
                                        }
                                        (l = void 0), (a = t);
                                        var b = r.pingCache;
                                        if ((null === b ? ((b = r.pingCache = new pl()), (l = new Set()), b.set(s, l)) : void 0 === (l = b.get(s)) && ((l = new Set()), b.set(s, l)), !l.has(a))) {
                                            l.add(a);
                                            var g = gs.bind(null, r, s, a);
                                            s.then(g, g);
                                        }
                                        (f.effectTag |= 4096), (f.expirationTime = t);
                                        break e;
                                    }
                                    f = f.return;
                                } while (null !== f);
                                l = Error(
                                    (ye(a.type) || "A React component") +
                                        " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                                        me(a)
                                );
                            }
                            5 !== Ol && (Ol = 2), (l = Ja(l, a)), (f = o);
                            do {
                                switch (f.tag) {
                                    case 3:
                                        (s = l), (f.effectTag |= 4096), (f.expirationTime = t), uo(f, hl(f, s, t));
                                        break e;
                                    case 1:
                                        s = l;
                                        var w = f.type,
                                            x = f.stateNode;
                                        if (0 === (64 & f.effectTag) && ("function" === typeof w.getDerivedStateFromError || (null !== x && "function" === typeof x.componentDidCatch && (null === Ul || !Ul.has(x))))) {
                                            (f.effectTag |= 4096), (f.expirationTime = t), uo(f, vl(f, s, t));
                                            break e;
                                        }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Sl = cs(Sl);
                    } catch (k) {
                        t = k;
                        continue;
                    }
                    break;
                }
            }
            function rs() {
                var e = bl.current;
                return (bl.current = ya), null === e ? ya : e;
            }
            function os(e, t) {
                e < El && 2 < e && (El = e), null !== t && e < Ml && 2 < e && ((Ml = e), (zl = t));
            }
            function as(e) {
                e > jl && (jl = e);
            }
            function ls() {
                for (; null !== Sl; ) Sl = us(Sl);
            }
            function ss() {
                for (; null !== Sl && !Ar(); ) Sl = us(Sl);
            }
            function us(e) {
                var t = yl(e.alternate, e, Tl);
                return (e.memoizedProps = e.pendingProps), null === t && (t = cs(e)), (gl.current = null), t;
            }
            function cs(e) {
                Sl = e;
                do {
                    var t = Sl.alternate;
                    if (((e = Sl.return), 0 === (2048 & Sl.effectTag))) {
                        if (((t = Ya(t, Sl, Tl)), 1 === Tl || 1 !== Sl.childExpirationTime)) {
                            for (var n = 0, i = Sl.child; null !== i; ) {
                                var r = i.expirationTime,
                                    o = i.childExpirationTime;
                                r > n && (n = r), o > n && (n = o), (i = i.sibling);
                            }
                            Sl.childExpirationTime = n;
                        }
                        if (null !== t) return t;
                        null !== e &&
                            0 === (2048 & e.effectTag) &&
                            (null === e.firstEffect && (e.firstEffect = Sl.firstEffect),
                            null !== Sl.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Sl.firstEffect), (e.lastEffect = Sl.lastEffect)),
                            1 < Sl.effectTag && (null !== e.lastEffect ? (e.lastEffect.nextEffect = Sl) : (e.firstEffect = Sl), (e.lastEffect = Sl)));
                    } else {
                        if (null !== (t = Xa(Sl))) return (t.effectTag &= 2047), t;
                        null !== e && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
                    }
                    if (null !== (t = Sl.sibling)) return t;
                    Sl = e;
                } while (null !== Sl);
                return Ol === wl && (Ol = 5), null;
            }
            function fs(e) {
                var t = e.expirationTime;
                return t > (e = e.childExpirationTime) ? t : e;
            }
            function ds(e) {
                var t = Fr();
                return Br(99, ps.bind(null, e, t)), null;
            }
            function ps(e, t) {
                do {
                    vs();
                } while (null !== Fl);
                if (0 !== (48 & _l)) throw Error(a(327));
                var n = e.finishedWork,
                    i = e.finishedExpirationTime;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)) throw Error(a(177));
                (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
                var r = fs(n);
                if (
                    ((e.firstPendingTime = r),
                    i <= e.lastSuspendedTime ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : i <= e.firstSuspendedTime && (e.firstSuspendedTime = i - 1),
                    i <= e.lastPingedTime && (e.lastPingedTime = 0),
                    i <= e.lastExpiredTime && (e.lastExpiredTime = 0),
                    e === Pl && ((Sl = Pl = null), (Tl = 0)),
                    1 < n.effectTag ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect)) : (r = n)) : (r = n.firstEffect),
                    null !== r)
                ) {
                    var o = _l;
                    (_l |= 32), (gl.current = null), (vn = $t);
                    var l = pn();
                    if (hn(l)) {
                        if ("selectionStart" in l) var s = { start: l.selectionStart, end: l.selectionEnd };
                        else
                            e: {
                                var u = (s = ((s = l.ownerDocument) && s.defaultView) || window).getSelection && s.getSelection();
                                if (u && 0 !== u.rangeCount) {
                                    s = u.anchorNode;
                                    var c = u.anchorOffset,
                                        f = u.focusNode;
                                    u = u.focusOffset;
                                    try {
                                        s.nodeType, f.nodeType;
                                    } catch (T) {
                                        s = null;
                                        break e;
                                    }
                                    var d = 0,
                                        p = -1,
                                        h = -1,
                                        v = 0,
                                        y = 0,
                                        m = l,
                                        b = null;
                                    t: for (;;) {
                                        for (
                                            var g;
                                            m !== s || (0 !== c && 3 !== m.nodeType) || (p = d + c), m !== f || (0 !== u && 3 !== m.nodeType) || (h = d + u), 3 === m.nodeType && (d += m.nodeValue.length), null !== (g = m.firstChild);

                                        )
                                            (b = m), (m = g);
                                        for (;;) {
                                            if (m === l) break t;
                                            if ((b === s && ++v === c && (p = d), b === f && ++y === u && (h = d), null !== (g = m.nextSibling))) break;
                                            b = (m = b).parentNode;
                                        }
                                        m = g;
                                    }
                                    s = -1 === p || -1 === h ? null : { start: p, end: h };
                                } else s = null;
                            }
                        s = s || { start: 0, end: 0 };
                    } else s = null;
                    (yn = { activeElementDetached: null, focusedElem: l, selectionRange: s }), ($t = !1), (Il = r);
                    do {
                        try {
                            hs();
                        } catch (T) {
                            if (null === Il) throw Error(a(330));
                            bs(Il, T), (Il = Il.nextEffect);
                        }
                    } while (null !== Il);
                    Il = r;
                    do {
                        try {
                            for (l = e, s = t; null !== Il; ) {
                                var w = Il.effectTag;
                                if ((16 & w && Fe(Il.stateNode, ""), 128 & w)) {
                                    var x = Il.alternate;
                                    if (null !== x) {
                                        var k = x.ref;
                                        null !== k && ("function" === typeof k ? k(null) : (k.current = null));
                                    }
                                }
                                switch (1038 & w) {
                                    case 2:
                                        ul(Il), (Il.effectTag &= -3);
                                        break;
                                    case 6:
                                        ul(Il), (Il.effectTag &= -3), fl(Il.alternate, Il);
                                        break;
                                    case 1024:
                                        Il.effectTag &= -1025;
                                        break;
                                    case 1028:
                                        (Il.effectTag &= -1025), fl(Il.alternate, Il);
                                        break;
                                    case 4:
                                        fl(Il.alternate, Il);
                                        break;
                                    case 8:
                                        cl(l, (c = Il), s), ll(c);
                                }
                                Il = Il.nextEffect;
                            }
                        } catch (T) {
                            if (null === Il) throw Error(a(330));
                            bs(Il, T), (Il = Il.nextEffect);
                        }
                    } while (null !== Il);
                    if (
                        ((k = yn),
                        (x = pn()),
                        (w = k.focusedElem),
                        (s = k.selectionRange),
                        x !== w &&
                            w &&
                            w.ownerDocument &&
                            (function e(t, n) {
                                return (
                                    !(!t || !n) &&
                                    (t === n || ((!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))))
                                );
                            })(w.ownerDocument.documentElement, w))
                    ) {
                        null !== s &&
                            hn(w) &&
                            ((x = s.start),
                            void 0 === (k = s.end) && (k = x),
                            "selectionStart" in w
                                ? ((w.selectionStart = x), (w.selectionEnd = Math.min(k, w.value.length)))
                                : (k = ((x = w.ownerDocument || document) && x.defaultView) || window).getSelection &&
                                  ((k = k.getSelection()),
                                  (c = w.textContent.length),
                                  (l = Math.min(s.start, c)),
                                  (s = void 0 === s.end ? l : Math.min(s.end, c)),
                                  !k.extend && l > s && ((c = s), (s = l), (l = c)),
                                  (c = dn(w, l)),
                                  (f = dn(w, s)),
                                  c &&
                                      f &&
                                      (1 !== k.rangeCount || k.anchorNode !== c.node || k.anchorOffset !== c.offset || k.focusNode !== f.node || k.focusOffset !== f.offset) &&
                                      ((x = x.createRange()).setStart(c.node, c.offset), k.removeAllRanges(), l > s ? (k.addRange(x), k.extend(f.node, f.offset)) : (x.setEnd(f.node, f.offset), k.addRange(x))))),
                            (x = []);
                        for (k = w; (k = k.parentNode); ) 1 === k.nodeType && x.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
                        for ("function" === typeof w.focus && w.focus(), w = 0; w < x.length; w++) ((k = x[w]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
                    }
                    ($t = !!vn), (yn = vn = null), (e.current = n), (Il = r);
                    do {
                        try {
                            for (w = e; null !== Il; ) {
                                var _ = Il.effectTag;
                                if ((36 & _ && ol(w, Il.alternate, Il), 128 & _)) {
                                    x = void 0;
                                    var P = Il.ref;
                                    if (null !== P) {
                                        var S = Il.stateNode;
                                        switch (Il.tag) {
                                            case 5:
                                                x = S;
                                                break;
                                            default:
                                                x = S;
                                        }
                                        "function" === typeof P ? P(x) : (P.current = x);
                                    }
                                }
                                Il = Il.nextEffect;
                            }
                        } catch (T) {
                            if (null === Il) throw Error(a(330));
                            bs(Il, T), (Il = Il.nextEffect);
                        }
                    } while (null !== Il);
                    (Il = null), Rr(), (_l = o);
                } else e.current = n;
                if (Nl) (Nl = !1), (Fl = e), (Vl = t);
                else for (Il = r; null !== Il; ) (t = Il.nextEffect), (Il.nextEffect = null), (Il = t);
                if ((0 === (t = e.firstPendingTime) && (Ul = null), 1073741823 === t ? (e === ql ? Hl++ : ((Hl = 0), (ql = e))) : (Hl = 0), "function" === typeof xs && xs(n.stateNode, i), Xl(e), Dl))
                    throw ((Dl = !1), (e = Ll), (Ll = null), e);
                return 0 !== (8 & _l) || Wr(), null;
            }
            function hs() {
                for (; null !== Il; ) {
                    var e = Il.effectTag;
                    0 !== (256 & e) && nl(Il.alternate, Il),
                        0 === (512 & e) ||
                            Nl ||
                            ((Nl = !0),
                            Hr(97, function () {
                                return vs(), null;
                            })),
                        (Il = Il.nextEffect);
                }
            }
            function vs() {
                if (90 !== Vl) {
                    var e = 97 < Vl ? 97 : Vl;
                    return (Vl = 90), Br(e, ys);
                }
            }
            function ys() {
                if (null === Fl) return !1;
                var e = Fl;
                if (((Fl = null), 0 !== (48 & _l))) throw Error(a(331));
                var t = _l;
                for (_l |= 32, e = e.current.firstEffect; null !== e; ) {
                    try {
                        var n = e;
                        if (0 !== (512 & n.effectTag))
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 22:
                                    il(5, n), rl(5, n);
                            }
                    } catch (i) {
                        if (null === e) throw Error(a(330));
                        bs(e, i);
                    }
                    (n = e.nextEffect), (e.nextEffect = null), (e = n);
                }
                return (_l = t), Wr(), !0;
            }
            function ms(e, t, n) {
                so(e, (t = hl(e, (t = Ja(n, t)), 1073741823))), null !== (e = Kl(e, 1073741823)) && Xl(e);
            }
            function bs(e, t) {
                if (3 === e.tag) ms(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            ms(n, e, t);
                            break;
                        }
                        if (1 === n.tag) {
                            var i = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || ("function" === typeof i.componentDidCatch && (null === Ul || !Ul.has(i)))) {
                                so(n, (e = vl(n, (e = Ja(t, e)), 1073741823))), null !== (n = Kl(n, 1073741823)) && Xl(n);
                                break;
                            }
                        }
                        n = n.return;
                    }
            }
            function gs(e, t, n) {
                var i = e.pingCache;
                null !== i && i.delete(t),
                    Pl === e && Tl === n ? (Ol === kl || (Ol === xl && 1073741823 === El && Nr() - Rl < 500) ? ns(e, Tl) : (Al = !0)) : js(e, n) && ((0 !== (t = e.lastPingedTime) && t < n) || ((e.lastPingedTime = n), Xl(e)));
            }
            function ws(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 === (t = 0) && (t = Ql((t = $l()), e, null)), null !== (e = Kl(e, t)) && Xl(e);
            }
            yl = function (e, t, n) {
                var i = t.expirationTime;
                if (null !== e) {
                    var r = t.pendingProps;
                    if (e.memoizedProps !== r || dr.current) Ma = !0;
                    else {
                        if (i < n) {
                            switch (((Ma = !1), t.tag)) {
                                case 3:
                                    Na(t), Ca();
                                    break;
                                case 5:
                                    if ((Ro(t), 4 & t.mode && 1 !== n && r.hidden)) return (t.expirationTime = t.childExpirationTime = 1), null;
                                    break;
                                case 1:
                                    vr(t.type) && gr(t);
                                    break;
                                case 4:
                                    jo(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    (i = t.memoizedProps.value), (r = t.type._context), ur(Kr, r._currentValue), (r._currentValue = i);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (i = t.child.childExpirationTime) && i >= n ? qa(e, t, n) : (ur(Do, 1 & Do.current), null !== (t = Ga(e, t, n)) ? t.sibling : null);
                                    ur(Do, 1 & Do.current);
                                    break;
                                case 19:
                                    if (((i = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))) {
                                        if (i) return Qa(e, t, n);
                                        t.effectTag |= 64;
                                    }
                                    if ((null !== (r = t.memoizedState) && ((r.rendering = null), (r.tail = null)), ur(Do, Do.current), !i)) return null;
                            }
                            return Ga(e, t, n);
                        }
                        Ma = !1;
                    }
                } else Ma = !1;
                switch (((t.expirationTime = 0), t.tag)) {
                    case 2:
                        if (
                            ((i = t.type),
                            null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                            (e = t.pendingProps),
                            (r = hr(t, fr.current)),
                            no(t, n),
                            (r = Go(null, t, i, e, r, n)),
                            (t.effectTag |= 1),
                            "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof)
                        ) {
                            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), vr(i))) {
                                var o = !0;
                                gr(t);
                            } else o = !1;
                            (t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null), oo(t);
                            var l = i.getDerivedStateFromProps;
                            "function" === typeof l && vo(t, i, l, e), (r.updater = yo), (t.stateNode = r), (r._reactInternalFiber = t), wo(t, i, e, n), (t = Ua(null, t, i, !0, o, n));
                        } else (t.tag = 0), za(null, t, r, n), (t = t.child);
                        return t;
                    case 16:
                        e: {
                            if (
                                ((r = t.elementType),
                                null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                                (e = t.pendingProps),
                                (function (e) {
                                    if (-1 === e._status) {
                                        e._status = 0;
                                        var t = e._ctor;
                                        (t = t()),
                                            (e._result = t),
                                            t.then(
                                                function (t) {
                                                    0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                                                },
                                                function (t) {
                                                    0 === e._status && ((e._status = 2), (e._result = t));
                                                }
                                            );
                                    }
                                })(r),
                                1 !== r._status)
                            )
                                throw r._result;
                            switch (
                                ((r = r._result),
                                (t.type = r),
                                (o = t.tag = (function (e) {
                                    if ("function" === typeof e) return Ss(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === se) return 11;
                                        if (e === fe) return 14;
                                    }
                                    return 2;
                                })(r)),
                                (e = Gr(r, e)),
                                o)
                            ) {
                                case 0:
                                    t = Da(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = La(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = ja(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = Aa(null, t, r, Gr(r.type, e), i, n);
                                    break e;
                            }
                            throw Error(a(306, r, ""));
                        }
                        return t;
                    case 0:
                        return (i = t.type), (r = t.pendingProps), Da(e, t, i, (r = t.elementType === i ? r : Gr(i, r)), n);
                    case 1:
                        return (i = t.type), (r = t.pendingProps), La(e, t, i, (r = t.elementType === i ? r : Gr(i, r)), n);
                    case 3:
                        if ((Na(t), (i = t.updateQueue), null === e || null === i)) throw Error(a(282));
                        if (((i = t.pendingProps), (r = null !== (r = t.memoizedState) ? r.element : null), ao(e, t), co(t, i, null, n), (i = t.memoizedState.element) === r)) Ca(), (t = Ga(e, t, n));
                        else {
                            if (((r = t.stateNode.hydrate) && ((xa = xn(t.stateNode.containerInfo.firstChild)), (wa = t), (r = ka = !0)), r))
                                for (n = To(t, null, i, n), t.child = n; n; ) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                            else za(e, t, i, n), Ca();
                            t = t.child;
                        }
                        return t;
                    case 5:
                        return (
                            Ro(t),
                            null === e && Sa(t),
                            (i = t.type),
                            (r = t.pendingProps),
                            (o = null !== e ? e.memoizedProps : null),
                            (l = r.children),
                            bn(i, r) ? (l = null) : null !== o && bn(i, o) && (t.effectTag |= 16),
                            Ia(e, t),
                            4 & t.mode && 1 !== n && r.hidden ? ((t.expirationTime = t.childExpirationTime = 1), (t = null)) : (za(e, t, l, n), (t = t.child)),
                            t
                        );
                    case 6:
                        return null === e && Sa(t), null;
                    case 13:
                        return qa(e, t, n);
                    case 4:
                        return jo(t, t.stateNode.containerInfo), (i = t.pendingProps), null === e ? (t.child = So(t, null, i, n)) : za(e, t, i, n), t.child;
                    case 11:
                        return (i = t.type), (r = t.pendingProps), ja(e, t, i, (r = t.elementType === i ? r : Gr(i, r)), n);
                    case 7:
                        return za(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return za(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            (i = t.type._context), (r = t.pendingProps), (l = t.memoizedProps), (o = r.value);
                            var s = t.type._context;
                            if ((ur(Kr, s._currentValue), (s._currentValue = o), null !== l))
                                if (((s = l.value), 0 === (o = Li(s, o) ? 0 : 0 | ("function" === typeof i._calculateChangedBits ? i._calculateChangedBits(s, o) : 1073741823)))) {
                                    if (l.children === r.children && !dr.current) {
                                        t = Ga(e, t, n);
                                        break e;
                                    }
                                } else
                                    for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                                        var u = s.dependencies;
                                        if (null !== u) {
                                            l = s.child;
                                            for (var c = u.firstContext; null !== c; ) {
                                                if (c.context === i && 0 !== (c.observedBits & o)) {
                                                    1 === s.tag && (((c = lo(n, null)).tag = 2), so(s, c)),
                                                        s.expirationTime < n && (s.expirationTime = n),
                                                        null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n),
                                                        to(s.return, n),
                                                        u.expirationTime < n && (u.expirationTime = n);
                                                    break;
                                                }
                                                c = c.next;
                                            }
                                        } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                                        if (null !== l) l.return = s;
                                        else
                                            for (l = s; null !== l; ) {
                                                if (l === t) {
                                                    l = null;
                                                    break;
                                                }
                                                if (null !== (s = l.sibling)) {
                                                    (s.return = l.return), (l = s);
                                                    break;
                                                }
                                                l = l.return;
                                            }
                                        s = l;
                                    }
                            za(e, t, r.children, n), (t = t.child);
                        }
                        return t;
                    case 9:
                        return (r = t.type), (i = (o = t.pendingProps).children), no(t, n), (i = i((r = io(r, o.unstable_observedBits)))), (t.effectTag |= 1), za(e, t, i, n), t.child;
                    case 14:
                        return (o = Gr((r = t.type), t.pendingProps)), Aa(e, t, r, (o = Gr(r.type, o)), i, n);
                    case 15:
                        return Ra(e, t, t.type, t.pendingProps, i, n);
                    case 17:
                        return (
                            (i = t.type),
                            (r = t.pendingProps),
                            (r = t.elementType === i ? r : Gr(i, r)),
                            null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                            (t.tag = 1),
                            vr(i) ? ((e = !0), gr(t)) : (e = !1),
                            no(t, n),
                            bo(t, i, r),
                            wo(t, i, r, n),
                            Ua(null, t, i, !0, e, n)
                        );
                    case 19:
                        return Qa(e, t, n);
                }
                throw Error(a(156, t.tag));
            };
            var xs = null,
                ks = null;
            function _s(e, t, n, i) {
                (this.tag = e),
                    (this.key = n),
                    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
                    (this.index = 0),
                    (this.ref = null),
                    (this.pendingProps = t),
                    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                    (this.mode = i),
                    (this.effectTag = 0),
                    (this.lastEffect = this.firstEffect = this.nextEffect = null),
                    (this.childExpirationTime = this.expirationTime = 0),
                    (this.alternate = null);
            }
            function Ps(e, t, n, i) {
                return new _s(e, t, n, i);
            }
            function Ss(e) {
                return !(!(e = e.prototype) || !e.isReactComponent);
            }
            function Ts(e, t) {
                var n = e.alternate;
                return (
                    null === n
                        ? (((n = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
                        : ((n.pendingProps = t), (n.effectTag = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
                    (n.childExpirationTime = e.childExpirationTime),
                    (n.expirationTime = e.expirationTime),
                    (n.child = e.child),
                    (n.memoizedProps = e.memoizedProps),
                    (n.memoizedState = e.memoizedState),
                    (n.updateQueue = e.updateQueue),
                    (t = e.dependencies),
                    (n.dependencies = null === t ? null : { expirationTime: t.expirationTime, firstContext: t.firstContext, responders: t.responders }),
                    (n.sibling = e.sibling),
                    (n.index = e.index),
                    (n.ref = e.ref),
                    n
                );
            }
            function Os(e, t, n, i, r, o) {
                var l = 2;
                if (((i = e), "function" === typeof e)) Ss(e) && (l = 1);
                else if ("string" === typeof e) l = 5;
                else
                    e: switch (e) {
                        case ne:
                            return Cs(n.children, r, o, t);
                        case le:
                            (l = 8), (r |= 7);
                            break;
                        case ie:
                            (l = 8), (r |= 1);
                            break;
                        case re:
                            return ((e = Ps(12, n, t, 8 | r)).elementType = re), (e.type = re), (e.expirationTime = o), e;
                        case ue:
                            return ((e = Ps(13, n, t, r)).type = ue), (e.elementType = ue), (e.expirationTime = o), e;
                        case ce:
                            return ((e = Ps(19, n, t, r)).elementType = ce), (e.expirationTime = o), e;
                        default:
                            if ("object" === typeof e && null !== e)
                                switch (e.$$typeof) {
                                    case oe:
                                        l = 10;
                                        break e;
                                    case ae:
                                        l = 9;
                                        break e;
                                    case se:
                                        l = 11;
                                        break e;
                                    case fe:
                                        l = 14;
                                        break e;
                                    case de:
                                        (l = 16), (i = null);
                                        break e;
                                    case pe:
                                        l = 22;
                                        break e;
                                }
                            throw Error(a(130, null == e ? e : typeof e, ""));
                    }
                return ((t = Ps(l, n, t, r)).elementType = e), (t.type = i), (t.expirationTime = o), t;
            }
            function Cs(e, t, n, i) {
                return ((e = Ps(7, e, i, t)).expirationTime = n), e;
            }
            function Es(e, t, n) {
                return ((e = Ps(6, e, null, t)).expirationTime = n), e;
            }
            function Ms(e, t, n) {
                return ((t = Ps(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
            }
            function zs(e, t, n) {
                (this.tag = t),
                    (this.current = null),
                    (this.containerInfo = e),
                    (this.pingCache = this.pendingChildren = null),
                    (this.finishedExpirationTime = 0),
                    (this.finishedWork = null),
                    (this.timeoutHandle = -1),
                    (this.pendingContext = this.context = null),
                    (this.hydrate = n),
                    (this.callbackNode = null),
                    (this.callbackPriority = 90),
                    (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
            }
            function js(e, t) {
                var n = e.firstSuspendedTime;
                return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
            }
            function As(e, t) {
                var n = e.firstSuspendedTime,
                    i = e.lastSuspendedTime;
                n < t && (e.firstSuspendedTime = t), (i > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
            }
            function Rs(e, t) {
                t > e.firstPendingTime && (e.firstPendingTime = t);
                var n = e.firstSuspendedTime;
                0 !== n && (t >= n ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
            }
            function Is(e, t) {
                var n = e.lastExpiredTime;
                (0 === n || n > t) && (e.lastExpiredTime = t);
            }
            function Ds(e, t, n, i) {
                var r = t.current,
                    o = $l(),
                    l = po.suspense;
                o = Ql(o, r, l);
                e: if (n) {
                    t: {
                        if (Ze((n = n._reactInternalFiber)) !== n || 1 !== n.tag) throw Error(a(170));
                        var s = n;
                        do {
                            switch (s.tag) {
                                case 3:
                                    s = s.stateNode.context;
                                    break t;
                                case 1:
                                    if (vr(s.type)) {
                                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t;
                                    }
                            }
                            s = s.return;
                        } while (null !== s);
                        throw Error(a(171));
                    }
                    if (1 === n.tag) {
                        var u = n.type;
                        if (vr(u)) {
                            n = br(n, u, s);
                            break e;
                        }
                    }
                    n = s;
                } else n = cr;
                return null === t.context ? (t.context = n) : (t.pendingContext = n), ((t = lo(o, l)).payload = { element: e }), null !== (i = void 0 === i ? null : i) && (t.callback = i), so(r, t), Gl(r, o), o;
            }
            function Ls(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode;
                }
            }
            function Us(e, t) {
                null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
            }
            function Ns(e, t) {
                Us(e, t), (e = e.alternate) && Us(e, t);
            }
            function Fs(e, t, n) {
                var i = new zs(e, t, (n = null != n && !0 === n.hydrate)),
                    r = Ps(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                (i.current = r),
                    (r.stateNode = i),
                    oo(r),
                    (e[Tn] = i.current),
                    n &&
                        0 !== t &&
                        (function (e, t) {
                            var n = Je(t);
                            Tt.forEach(function (e) {
                                ht(e, t, n);
                            }),
                                Ot.forEach(function (e) {
                                    ht(e, t, n);
                                });
                        })(0, 9 === e.nodeType ? e : e.ownerDocument),
                    (this._internalRoot = i);
            }
            function Vs(e) {
                return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
            }
            function Bs(e, t, n, i, r) {
                var o = n._reactRootContainer;
                if (o) {
                    var a = o._internalRoot;
                    if ("function" === typeof r) {
                        var l = r;
                        r = function () {
                            var e = Ls(a);
                            l.call(e);
                        };
                    }
                    Ds(t, a, e, r);
                } else {
                    if (
                        ((o = n._reactRootContainer = (function (e, t) {
                            if ((t || (t = !(!(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)) for (var n; (n = e.lastChild); ) e.removeChild(n);
                            return new Fs(e, 0, t ? { hydrate: !0 } : void 0);
                        })(n, i)),
                        (a = o._internalRoot),
                        "function" === typeof r)
                    ) {
                        var s = r;
                        r = function () {
                            var e = Ls(a);
                            s.call(e);
                        };
                    }
                    ts(function () {
                        Ds(t, a, e, r);
                    });
                }
                return Ls(a);
            }
            function Hs(e, t, n) {
                var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return { $$typeof: te, key: null == i ? null : "" + i, children: e, containerInfo: t, implementation: n };
            }
            function qs(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Vs(t)) throw Error(a(200));
                return Hs(e, t, null, n);
            }
            (Fs.prototype.render = function (e) {
                Ds(e, this._internalRoot, null, null);
            }),
                (Fs.prototype.unmount = function () {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    Ds(null, e, null, function () {
                        t[Tn] = null;
                    });
                }),
                (vt = function (e) {
                    if (13 === e.tag) {
                        var t = Qr($l(), 150, 100);
                        Gl(e, t), Ns(e, t);
                    }
                }),
                (yt = function (e) {
                    13 === e.tag && (Gl(e, 3), Ns(e, 3));
                }),
                (mt = function (e) {
                    if (13 === e.tag) {
                        var t = $l();
                        Gl(e, (t = Ql(t, e, null))), Ns(e, t);
                    }
                }),
                (C = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((Se(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var i = n[t];
                                    if (i !== e && i.form === e.form) {
                                        var r = Mn(i);
                                        if (!r) throw Error(a(90));
                                        xe(i), Se(i, r);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            je(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Ee(e, !!n.multiple, t, !1);
                    }
                }),
                (R = es),
                (I = function (e, t, n, i, r) {
                    var o = _l;
                    _l |= 4;
                    try {
                        return Br(98, e.bind(null, t, n, i, r));
                    } finally {
                        0 === (_l = o) && Wr();
                    }
                }),
                (D = function () {
                    0 === (49 & _l) &&
                        ((function () {
                            if (null !== Bl) {
                                var e = Bl;
                                (Bl = null),
                                    e.forEach(function (e, t) {
                                        Is(t, e), Xl(t);
                                    }),
                                    Wr();
                            }
                        })(),
                        vs());
                }),
                (L = function (e, t) {
                    var n = _l;
                    _l |= 2;
                    try {
                        return e(t);
                    } finally {
                        0 === (_l = n) && Wr();
                    }
                });
            var Ws = {
                Events: [
                    Cn,
                    En,
                    Mn,
                    T,
                    _,
                    Ln,
                    function (e) {
                        rt(e, Dn);
                    },
                    j,
                    A,
                    Xt,
                    lt,
                    vs,
                    { current: !1 },
                ],
            };
            !(function (e) {
                var t = e.findFiberByHostInstance;
                (function (e) {
                    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber) return !0;
                    try {
                        var n = t.inject(e);
                        (xs = function (e) {
                            try {
                                t.onCommitFiberRoot(n, e, void 0, 64 === (64 & e.current.effectTag));
                            } catch (i) {}
                        }),
                            (ks = function (e) {
                                try {
                                    t.onCommitFiberUnmount(n, e);
                                } catch (i) {}
                            });
                    } catch (i) {}
                })(
                    r({}, e, {
                        overrideHookState: null,
                        overrideProps: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: Y.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = nt(e)) ? null : e.stateNode;
                        },
                        findFiberByHostInstance: function (e) {
                            return t ? t(e) : null;
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                    })
                );
            })({ findFiberByHostInstance: On, bundleType: 0, version: "16.13.1", rendererPackageName: "react-dom" }),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ws),
                (t.createPortal = qs),
                (t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternalFiber;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(a(188));
                        throw Error(a(268, Object.keys(e)));
                    }
                    return (e = null === (e = nt(t)) ? null : e.stateNode);
                }),
                (t.flushSync = function (e, t) {
                    if (0 !== (48 & _l)) throw Error(a(187));
                    var n = _l;
                    _l |= 1;
                    try {
                        return Br(99, e.bind(null, t));
                    } finally {
                        (_l = n), Wr();
                    }
                }),
                (t.hydrate = function (e, t, n) {
                    if (!Vs(t)) throw Error(a(200));
                    return Bs(null, e, t, !0, n);
                }),
                (t.render = function (e, t, n) {
                    if (!Vs(t)) throw Error(a(200));
                    return Bs(null, e, t, !1, n);
                }),
                (t.unmountComponentAtNode = function (e) {
                    if (!Vs(e)) throw Error(a(40));
                    return (
                        !!e._reactRootContainer &&
                        (ts(function () {
                            Bs(null, null, e, !1, function () {
                                (e._reactRootContainer = null), (e[Tn] = null);
                            });
                        }),
                        !0)
                    );
                }),
                (t.unstable_batchedUpdates = es),
                (t.unstable_createPortal = function (e, t) {
                    return qs(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
                }),
                (t.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
                    if (!Vs(n)) throw Error(a(200));
                    if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
                    return Bs(e, t, n, !1, i);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(73);
        },
        function (e, t, n) {
            "use strict";
            var i, r, o, a, l;
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var s = null,
                    u = null,
                    c = function e() {
                        if (null !== s)
                            try {
                                var n = t.unstable_now();
                                s(!0, n), (s = null);
                            } catch (i) {
                                throw (setTimeout(e, 0), i);
                            }
                    },
                    f = Date.now();
                (t.unstable_now = function () {
                    return Date.now() - f;
                }),
                    (i = function (e) {
                        null !== s ? setTimeout(i, 0, e) : ((s = e), setTimeout(c, 0));
                    }),
                    (r = function (e, t) {
                        u = setTimeout(e, t);
                    }),
                    (o = function () {
                        clearTimeout(u);
                    }),
                    (a = function () {
                        return !1;
                    }),
                    (l = t.unstable_forceFrameRate = function () {});
            } else {
                var d = window.performance,
                    p = window.Date,
                    h = window.setTimeout,
                    v = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var y = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
                        "function" !== typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
                }
                if ("object" === typeof d && "function" === typeof d.now)
                    t.unstable_now = function () {
                        return d.now();
                    };
                else {
                    var m = p.now();
                    t.unstable_now = function () {
                        return p.now() - m;
                    };
                }
                var b = !1,
                    g = null,
                    w = -1,
                    x = 5,
                    k = 0;
                (a = function () {
                    return t.unstable_now() >= k;
                }),
                    (l = function () {}),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : (x = 0 < e ? Math.floor(1e3 / e) : 5);
                    });
                var _ = new MessageChannel(),
                    P = _.port2;
                (_.port1.onmessage = function () {
                    if (null !== g) {
                        var e = t.unstable_now();
                        k = e + x;
                        try {
                            g(!0, e) ? P.postMessage(null) : ((b = !1), (g = null));
                        } catch (n) {
                            throw (P.postMessage(null), n);
                        }
                    } else b = !1;
                }),
                    (i = function (e) {
                        (g = e), b || ((b = !0), P.postMessage(null));
                    }),
                    (r = function (e, n) {
                        w = h(function () {
                            e(t.unstable_now());
                        }, n);
                    }),
                    (o = function () {
                        v(w), (w = -1);
                    });
            }
            function S(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var i = (n - 1) >>> 1,
                        r = e[i];
                    if (!(void 0 !== r && 0 < C(r, t))) break e;
                    (e[i] = t), (e[n] = r), (n = i);
                }
            }
            function T(e) {
                return void 0 === (e = e[0]) ? null : e;
            }
            function O(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var i = 0, r = e.length; i < r; ) {
                            var o = 2 * (i + 1) - 1,
                                a = e[o],
                                l = o + 1,
                                s = e[l];
                            if (void 0 !== a && 0 > C(a, n)) void 0 !== s && 0 > C(s, a) ? ((e[i] = s), (e[l] = n), (i = l)) : ((e[i] = a), (e[o] = n), (i = o));
                            else {
                                if (!(void 0 !== s && 0 > C(s, n))) break e;
                                (e[i] = s), (e[l] = n), (i = l);
                            }
                        }
                    }
                    return t;
                }
                return null;
            }
            function C(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }
            var E = [],
                M = [],
                z = 1,
                j = null,
                A = 3,
                R = !1,
                I = !1,
                D = !1;
            function L(e) {
                for (var t = T(M); null !== t; ) {
                    if (null === t.callback) O(M);
                    else {
                        if (!(t.startTime <= e)) break;
                        O(M), (t.sortIndex = t.expirationTime), S(E, t);
                    }
                    t = T(M);
                }
            }
            function U(e) {
                if (((D = !1), L(e), !I))
                    if (null !== T(E)) (I = !0), i(N);
                    else {
                        var t = T(M);
                        null !== t && r(U, t.startTime - e);
                    }
            }
            function N(e, n) {
                (I = !1), D && ((D = !1), o()), (R = !0);
                var i = A;
                try {
                    for (L(n), j = T(E); null !== j && (!(j.expirationTime > n) || (e && !a())); ) {
                        var l = j.callback;
                        if (null !== l) {
                            (j.callback = null), (A = j.priorityLevel);
                            var s = l(j.expirationTime <= n);
                            (n = t.unstable_now()), "function" === typeof s ? (j.callback = s) : j === T(E) && O(E), L(n);
                        } else O(E);
                        j = T(E);
                    }
                    if (null !== j) var u = !0;
                    else {
                        var c = T(M);
                        null !== c && r(U, c.startTime - n), (u = !1);
                    }
                    return u;
                } finally {
                    (j = null), (A = i), (R = !1);
                }
            }
            function F(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3;
                }
            }
            var V = l;
            (t.unstable_IdlePriority = 5),
                (t.unstable_ImmediatePriority = 1),
                (t.unstable_LowPriority = 4),
                (t.unstable_NormalPriority = 3),
                (t.unstable_Profiling = null),
                (t.unstable_UserBlockingPriority = 2),
                (t.unstable_cancelCallback = function (e) {
                    e.callback = null;
                }),
                (t.unstable_continueExecution = function () {
                    I || R || ((I = !0), i(N));
                }),
                (t.unstable_getCurrentPriorityLevel = function () {
                    return A;
                }),
                (t.unstable_getFirstCallbackNode = function () {
                    return T(E);
                }),
                (t.unstable_next = function (e) {
                    switch (A) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = A;
                    }
                    var n = A;
                    A = t;
                    try {
                        return e();
                    } finally {
                        A = n;
                    }
                }),
                (t.unstable_pauseExecution = function () {}),
                (t.unstable_requestPaint = V),
                (t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3;
                    }
                    var n = A;
                    A = e;
                    try {
                        return t();
                    } finally {
                        A = n;
                    }
                }),
                (t.unstable_scheduleCallback = function (e, n, a) {
                    var l = t.unstable_now();
                    if ("object" === typeof a && null !== a) {
                        var s = a.delay;
                        (s = "number" === typeof s && 0 < s ? l + s : l), (a = "number" === typeof a.timeout ? a.timeout : F(e));
                    } else (a = F(e)), (s = l);
                    return (
                        (e = { id: z++, callback: n, priorityLevel: e, startTime: s, expirationTime: (a = s + a), sortIndex: -1 }),
                        s > l ? ((e.sortIndex = s), S(M, e), null === T(E) && e === T(M) && (D ? o() : (D = !0), r(U, s - l))) : ((e.sortIndex = a), S(E, e), I || R || ((I = !0), i(N))),
                        e
                    );
                }),
                (t.unstable_shouldYield = function () {
                    var e = t.unstable_now();
                    L(e);
                    var n = T(E);
                    return (n !== j && null !== j && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < j.expirationTime) || a();
                }),
                (t.unstable_wrapCallback = function (e) {
                    var t = A;
                    return function () {
                        var n = A;
                        A = t;
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            A = n;
                        }
                    };
                });
        },
        ,
        ,
        ,
        ,
        ,
        function (e, t, n) {
            !(function (e, t) {
                for (var n in t) e[n] = t[n];
            })(
                t,
                (function (e) {
                    var t = {};
                    function n(i) {
                        if (t[i]) return t[i].exports;
                        var r = (t[i] = { i: i, l: !1, exports: {} });
                        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, i) {
                            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
                        }),
                        (n.r = function (e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (n.t = function (e, t) {
                            if ((1 & t && (e = n(e)), 8 & t)) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var i = Object.create(null);
                            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                                for (var r in e)
                                    n.d(
                                        i,
                                        r,
                                        function (t) {
                                            return e[t];
                                        }.bind(null, r)
                                    );
                            return i;
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return n.d(t, "a", t), t;
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ""),
                        n((n.s = 10))
                    );
                })([
                    function (e, t) {
                        e.exports = n(0);
                    },
                    function (e, t) {
                        e.exports = n(9);
                    },
                    function (e, t) {
                        e.exports = n(12);
                    },
                    function (e, t) {
                        e.exports = n(23);
                    },
                    function (e, t) {
                        e.exports = n(34);
                    },
                    function (e, t) {
                        e.exports = n(10);
                    },
                    function (e, t) {
                        e.exports = n(4);
                    },
                    function (e, t) {
                        e.exports = n(24);
                    },
                    function (e, t) {
                        e.exports = n(13);
                    },
                    function (e, t) {
                        e.exports = n(14);
                    },
                    function (e, t, n) {
                        "use strict";
                        function i(e) {
                            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                        }
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var o = r(n(11));
                        (t.Particles = o.default), i(n(7)), i(n(9)), i(n(8)), i(n(3)), i(n(4)), i(n(2)), i(n(17)), i(n(18)), i(n(1)), i(n(6)), i(n(19)), i(n(5)), (t.default = o.default);
                    },
                    function (e, t, n) {
                        "use strict";
                        function i(e) {
                            return (i =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      })(e);
                        }
                        function r(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                            }
                        }
                        function o(e, t, n) {
                            return (o =
                                "undefined" != typeof Reflect && Reflect.get
                                    ? Reflect.get
                                    : function (e, t, n) {
                                          var i = (function (e, t) {
                                              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)); );
                                              return e;
                                          })(e, t);
                                          if (i) {
                                              var r = Object.getOwnPropertyDescriptor(i, t);
                                              return r.get ? r.get.call(n) : r.value;
                                          }
                                      })(e, t, n || e);
                        }
                        function a(e, t) {
                            return !t || ("object" !== i(t) && "function" != typeof t) ? l(e) : t;
                        }
                        function l(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        }
                        function s() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        }
                        function u(e) {
                            return (u = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function (e) {
                                      return e.__proto__ || Object.getPrototypeOf(e);
                                  })(e);
                        }
                        function c(e, t) {
                            return (c =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                })(e, t);
                        }
                        var f =
                                (this && this.__importStar) ||
                                function (e) {
                                    if (e && e.__esModule) return e;
                                    var t = {};
                                    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    return (t.default = e), t;
                                },
                            d =
                                (this && this.__importDefault) ||
                                function (e) {
                                    return e && e.__esModule ? e : { default: e };
                                };
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var p = f(n(0)),
                            h = n(0),
                            v = d(n(12)),
                            y = n(13),
                            m = n(14),
                            b = n(15),
                            g = n(16),
                            w = (function (e) {
                                !(function (e, t) {
                                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
                                })(d, e);
                                var t,
                                    n,
                                    i,
                                    f =
                                        ((t = d),
                                        function () {
                                            var e,
                                                n = u(t);
                                            if (s()) {
                                                var i = u(this).constructor;
                                                e = Reflect.construct(n, arguments, i);
                                            } else e = n.apply(this, arguments);
                                            return a(this, e);
                                        });
                                function d(e) {
                                    var t;
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        })(this, d),
                                        ((t = f.call(this, e)).state = { canvas: void 0, library: void 0 }),
                                        (t.loadCanvas = t.loadCanvas.bind(l(t))),
                                        t
                                    );
                                }
                                return (
                                    (n = d),
                                    (i = [
                                        {
                                            key: "buildParticlesLibrary",
                                            value: function (e, t) {
                                                try {
                                                    if (void 0 === window) return null;
                                                } catch (e) {
                                                    return null;
                                                }
                                                var n = new b.Options();
                                                n.load(m.defaultParams), n.load(t), g.tsParticles.dom();
                                                var i = new y.Container(e, n);
                                                return this.props.particlesRef && (this.props.particlesRef.current = i), i;
                                            },
                                        },
                                        {
                                            key: "refresh",
                                            value: function (e) {
                                                var t = this,
                                                    n = this.state.canvas;
                                                n &&
                                                    (this.destroy(),
                                                    this.setState({ library: this.buildParticlesLibrary(e.id, e.params) }, function () {
                                                        t.loadCanvas(n);
                                                    }));
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                this.state.library && this.state.library.destroy();
                                            },
                                        },
                                        {
                                            key: "loadCanvas",
                                            value: function (e) {
                                                var t = this;
                                                e &&
                                                    this.setState({ canvas: e }, function () {
                                                        var n = t.state.library;
                                                        n && (n.canvas.loadCanvas(e), n.start());
                                                    });
                                            },
                                        },
                                        {
                                            key: "shouldComponentUpdate",
                                            value: function (e) {
                                                return !v.default(e, this.props);
                                            },
                                        },
                                        {
                                            key: "componentDidUpdate",
                                            value: function () {
                                                this.refresh(this.props);
                                            },
                                        },
                                        {
                                            key: "forceUpdate",
                                            value: function () {
                                                this.refresh(this.props), o(u(d.prototype), "forceUpdate", this).call(this);
                                            },
                                        },
                                        {
                                            key: "componentDidMount",
                                            value: function () {
                                                this.setState({ library: this.buildParticlesLibrary(this.props.id, this.props.params) });
                                            },
                                        },
                                        {
                                            key: "componentWillUnmount",
                                            value: function () {
                                                this.destroy(), this.setState({ library: void 0 });
                                            },
                                        },
                                        {
                                            key: "render",
                                            value: function () {
                                                var e = this.props,
                                                    t = e.width,
                                                    n = e.height,
                                                    i = e.className,
                                                    r = e.canvasClassName,
                                                    o = e.id;
                                                return p.createElement(
                                                    "div",
                                                    { className: i, id: o },
                                                    p.createElement("canvas", { ref: this.loadCanvas, className: r, style: Object.assign(Object.assign({}, this.props.style), { width: t, height: n }) })
                                                );
                                            },
                                        },
                                    ]) && r(n.prototype, i),
                                    d
                                );
                            })(h.Component);
                        (t.default = w), (w.defaultProps = { width: "100%", height: "100%", params: m.defaultParams, style: {}, id: "tsparticles" });
                    },
                    function (e, t) {
                        e.exports = n(80);
                    },
                    function (e, t) {
                        e.exports = n(149);
                    },
                    function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i = n(1),
                            r = n(2),
                            o = n(3),
                            a = n(4),
                            l = n(5),
                            s = n(6),
                            u = n(7),
                            c = n(8),
                            f = n(9);
                        t.defaultParams = {
                            particles: {
                                number: { value: 40, max: -1, density: { enable: !1, value_area: 1200 } },
                                color: { value: "#FFF" },
                                shape: { type: i.ShapeType.circle, stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } },
                                opacity: { value: 0.5, random: !1, anim: { enable: !0, speed: 1, opacity_min: 0.1, sync: !1 } },
                                size: { value: 1, random: !1, anim: { enable: !1, speed: 40, size_min: 0, sync: !1 } },
                                line_linked: { enable: !0, distance: 150, color: "#FFF", opacity: 0.6, width: 1, shadow: { enable: !1, blur: 5, color: "lime" } },
                                move: { enable: !0, speed: 3, direction: f.MoveDirection.none, random: !1, straight: !1, out_mode: c.OutMode.bounce, bounce: !0, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } },
                            },
                            interactivity: {
                                detectsOn: u.InteractivityDetect.canvas,
                                events: { onHover: { enable: !1, mode: l.HoverMode.grab }, onClick: { enable: !1, mode: s.ClickMode.repulse }, resize: !0 },
                                modes: {
                                    grab: { distance: 180, line_linked: { opacity: 0.35 } },
                                    bubble: { distance: 200, size: 80, duration: 0.4 },
                                    repulse: { distance: 100, duration: 5 },
                                    push: { particles_nb: 4 },
                                    remove: { particles_nb: 2 },
                                },
                            },
                            retina_detect: !0,
                            fps_limit: 999,
                            polygon: {
                                enable: !1,
                                scale: 1,
                                type: r.PolygonMaskType.inline,
                                inline: { arrangement: o.PolygonMaskInlineArrangement.onePerPoint },
                                draw: { enable: !1, stroke: { width: 0.5, color: "rgba(255, 255, 255, .1)" } },
                                move: { radius: 10, type: a.PolygonMaskMoveType.path },
                                url: "",
                            },
                        };
                    },
                    function (e, t) {
                        e.exports = n(228);
                    },
                    function (e, t) {
                        e.exports = n(229);
                    },
                    function (e, t) {
                        e.exports = n(55);
                    },
                    function (e, t) {
                        e.exports = n(21);
                    },
                    function (e, t) {
                        e.exports = n(30);
                    },
                ])
            );
        },
        function (e, t, n) {
            var i = n(81);
            e.exports = function (e, t) {
                return i(e, t);
            };
        },
        function (e, t, n) {
            var i = n(82),
                r = n(20);
            e.exports = function e(t, n, o, a, l) {
                return t === n || (null == t || null == n || (!r(t) && !r(n)) ? t !== t && n !== n : i(t, n, o, a, e, l));
            };
        },
        function (e, t, n) {
            var i = n(83),
                r = n(41),
                o = n(118),
                a = n(122),
                l = n(144),
                s = n(27),
                u = n(42),
                c = n(44),
                f = "[object Object]",
                d = Object.prototype.hasOwnProperty;
            e.exports = function (e, t, n, p, h, v) {
                var y = s(e),
                    m = s(t),
                    b = y ? "[object Array]" : l(e),
                    g = m ? "[object Array]" : l(t),
                    w = (b = "[object Arguments]" == b ? f : b) == f,
                    x = (g = "[object Arguments]" == g ? f : g) == f,
                    k = b == g;
                if (k && u(e)) {
                    if (!u(t)) return !1;
                    (y = !0), (w = !1);
                }
                if (k && !w) return v || (v = new i()), y || c(e) ? r(e, t, n, p, h, v) : o(e, t, b, n, p, h, v);
                if (!(1 & n)) {
                    var _ = w && d.call(e, "__wrapped__"),
                        P = x && d.call(t, "__wrapped__");
                    if (_ || P) {
                        var S = _ ? e.value() : e,
                            T = P ? t.value() : t;
                        return v || (v = new i()), h(S, T, n, p, v);
                    }
                }
                return !!k && (v || (v = new i()), a(e, t, n, p, h, v));
            };
        },
        function (e, t, n) {
            var i = n(15),
                r = n(89),
                o = n(90),
                a = n(91),
                l = n(92),
                s = n(93);
            function u(e) {
                var t = (this.__data__ = new i(e));
                this.size = t.size;
            }
            (u.prototype.clear = r), (u.prototype.delete = o), (u.prototype.get = a), (u.prototype.has = l), (u.prototype.set = s), (e.exports = u);
        },
        function (e, t) {
            e.exports = function () {
                (this.__data__ = []), (this.size = 0);
            };
        },
        function (e, t, n) {
            var i = n(16),
                r = Array.prototype.splice;
            e.exports = function (e) {
                var t = this.__data__,
                    n = i(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0);
            };
        },
        function (e, t, n) {
            var i = n(16);
            e.exports = function (e) {
                var t = this.__data__,
                    n = i(t, e);
                return n < 0 ? void 0 : t[n][1];
            };
        },
        function (e, t, n) {
            var i = n(16);
            e.exports = function (e) {
                return i(this.__data__, e) > -1;
            };
        },
        function (e, t, n) {
            var i = n(16);
            e.exports = function (e, t) {
                var n = this.__data__,
                    r = i(n, e);
                return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
            };
        },
        function (e, t, n) {
            var i = n(15);
            e.exports = function () {
                (this.__data__ = new i()), (this.size = 0);
            };
        },
        function (e, t) {
            e.exports = function (e) {
                var t = this.__data__,
                    n = t.delete(e);
                return (this.size = t.size), n;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                return this.__data__.get(e);
            };
        },
        function (e, t) {
            e.exports = function (e) {
                return this.__data__.has(e);
            };
        },
        function (e, t, n) {
            var i = n(15),
                r = n(25),
                o = n(40);
            e.exports = function (e, t) {
                var n = this.__data__;
                if (n instanceof i) {
                    var a = n.__data__;
                    if (!r || a.length < 199) return a.push([e, t]), (this.size = ++n.size), this;
                    n = this.__data__ = new o(a);
                }
                return n.set(e, t), (this.size = n.size), this;
            };
        },
        function (e, t, n) {
            var i = n(36),
                r = n(98),
                o = n(38),
                a = n(39),
                l = /^\[object .+?Constructor\]$/,
                s = Function.prototype,
                u = Object.prototype,
                c = s.toString,
                f = u.hasOwnProperty,
                d = RegExp(
                    "^" +
                        c
                            .call(f)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$"
                );
            e.exports = function (e) {
                return !(!o(e) || r(e)) && (i(e) ? d : l).test(a(e));
            };
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (i) {
                "object" === typeof window && (n = window);
            }
            e.exports = n;
        },
        function (e, t, n) {
            var i = n(26),
                r = Object.prototype,
                o = r.hasOwnProperty,
                a = r.toString,
                l = i ? i.toStringTag : void 0;
            e.exports = function (e) {
                var t = o.call(e, l),
                    n = e[l];
                try {
                    e[l] = void 0;
                    var i = !0;
                } catch (s) {}
                var r = a.call(e);
                return i && (t ? (e[l] = n) : delete e[l]), r;
            };
        },
        function (e, t) {
            var n = Object.prototype.toString;
            e.exports = function (e) {
                return n.call(e);
            };
        },
        function (e, t, n) {
            var i = n(99),
                r = (function () {
                    var e = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "");
                    return e ? "Symbol(src)_1." + e : "";
                })();
            e.exports = function (e) {
                return !!r && r in e;
            };
        },
        function (e, t, n) {
            var i = n(5)["__core-js_shared__"];
            e.exports = i;
        },
        function (e, t) {
            e.exports = function (e, t) {
                return null == e ? void 0 : e[t];
            };
        },
        function (e, t, n) {
            var i = n(102),
                r = n(15),
                o = n(25);
            e.exports = function () {
                (this.size = 0), (this.__data__ = { hash: new i(), map: new (o || r)(), string: new i() });
            };
        },
        function (e, t, n) {
            var i = n(103),
                r = n(104),
                o = n(105),
                a = n(106),
                l = n(107);
            function s(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            (s.prototype.clear = i), (s.prototype.delete = r), (s.prototype.get = o), (s.prototype.has = a), (s.prototype.set = l), (e.exports = s);
        },
        function (e, t, n) {
            var i = n(18);
            e.exports = function () {
                (this.__data__ = i ? i(null) : {}), (this.size = 0);
            };
        },
        function (e, t) {
            e.exports = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
            };
        },
        function (e, t, n) {
            var i = n(18),
                r = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                var t = this.__data__;
                if (i) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return r.call(t, e) ? t[e] : void 0;
            };
        },
        function (e, t, n) {
            var i = n(18),
                r = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                var t = this.__data__;
                return i ? void 0 !== t[e] : r.call(t, e);
            };
        },
        function (e, t, n) {
            var i = n(18);
            e.exports = function (e, t) {
                var n = this.__data__;
                return (this.size += this.has(e) ? 0 : 1), (n[e] = i && void 0 === t ? "__lodash_hash_undefined__" : t), this;
            };
        },
        function (e, t, n) {
            var i = n(19);
            e.exports = function (e) {
                var t = i(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
            };
        },
        function (e, t, n) {
            var i = n(19);
            e.exports = function (e) {
                return i(this, e).get(e);
            };
        },
        function (e, t, n) {
            var i = n(19);
            e.exports = function (e) {
                return i(this, e).has(e);
            };
        },
        function (e, t, n) {
            var i = n(19);
            e.exports = function (e, t) {
                var n = i(this, e),
                    r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            };
        },
        function (e, t, n) {
            var i = n(40),
                r = n(114),
                o = n(115);
            function a(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new i(); ++t < n; ) this.add(e[t]);
            }
            (a.prototype.add = a.prototype.push = r), (a.prototype.has = o), (e.exports = a);
        },
        function (e, t) {
            e.exports = function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
            };
        },
        function (e, t) {
            e.exports = function (e) {
                return this.__data__.has(e);
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                for (var n = -1, i = null == e ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return !0;
                return !1;
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                return e.has(t);
            };
        },
        function (e, t, n) {
            var i = n(26),
                r = n(119),
                o = n(35),
                a = n(41),
                l = n(120),
                s = n(121),
                u = i ? i.prototype : void 0,
                c = u ? u.valueOf : void 0;
            e.exports = function (e, t, n, i, u, f, d) {
                switch (n) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        (e = e.buffer), (t = t.buffer);
                    case "[object ArrayBuffer]":
                        return !(e.byteLength != t.byteLength || !f(new r(e), new r(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return o(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var p = l;
                    case "[object Set]":
                        var h = 1 & i;
                        if ((p || (p = s), e.size != t.size && !h)) return !1;
                        var v = d.get(e);
                        if (v) return v == t;
                        (i |= 2), d.set(e, t);
                        var y = a(p(e), p(t), i, u, f, d);
                        return d.delete(e), y;
                    case "[object Symbol]":
                        if (c) return c.call(e) == c.call(t);
                }
                return !1;
            };
        },
        function (e, t, n) {
            var i = n(5).Uint8Array;
            e.exports = i;
        },
        function (e, t) {
            e.exports = function (e) {
                var t = -1,
                    n = Array(e.size);
                return (
                    e.forEach(function (e, i) {
                        n[++t] = [i, e];
                    }),
                    n
                );
            };
        },
        function (e, t) {
            e.exports = function (e) {
                var t = -1,
                    n = Array(e.size);
                return (
                    e.forEach(function (e) {
                        n[++t] = e;
                    }),
                    n
                );
            };
        },
        function (e, t, n) {
            var i = n(123),
                r = Object.prototype.hasOwnProperty;
            e.exports = function (e, t, n, o, a, l) {
                var s = 1 & n,
                    u = i(e),
                    c = u.length;
                if (c != i(t).length && !s) return !1;
                for (var f = c; f--; ) {
                    var d = u[f];
                    if (!(s ? d in t : r.call(t, d))) return !1;
                }
                var p = l.get(e);
                if (p && l.get(t)) return p == t;
                var h = !0;
                l.set(e, t), l.set(t, e);
                for (var v = s; ++f < c; ) {
                    var y = e[(d = u[f])],
                        m = t[d];
                    if (o) var b = s ? o(m, y, d, t, e, l) : o(y, m, d, e, t, l);
                    if (!(void 0 === b ? y === m || a(y, m, n, o, l) : b)) {
                        h = !1;
                        break;
                    }
                    v || (v = "constructor" == d);
                }
                if (h && !v) {
                    var g = e.constructor,
                        w = t.constructor;
                    g == w || !("constructor" in e) || !("constructor" in t) || ("function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w) || (h = !1);
                }
                return l.delete(e), l.delete(t), h;
            };
        },
        function (e, t, n) {
            var i = n(124),
                r = n(126),
                o = n(129);
            e.exports = function (e) {
                return i(e, o, r);
            };
        },
        function (e, t, n) {
            var i = n(125),
                r = n(27);
            e.exports = function (e, t, n) {
                var o = t(e);
                return r(e) ? o : i(o, n(e));
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                for (var n = -1, i = t.length, r = e.length; ++n < i; ) e[r + n] = t[n];
                return e;
            };
        },
        function (e, t, n) {
            var i = n(127),
                r = n(128),
                o = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                l = a
                    ? function (e) {
                          return null == e
                              ? []
                              : ((e = Object(e)),
                                i(a(e), function (t) {
                                    return o.call(e, t);
                                }));
                      }
                    : r;
            e.exports = l;
        },
        function (e, t) {
            e.exports = function (e, t) {
                for (var n = -1, i = null == e ? 0 : e.length, r = 0, o = []; ++n < i; ) {
                    var a = e[n];
                    t(a, n, e) && (o[r++] = a);
                }
                return o;
            };
        },
        function (e, t) {
            e.exports = function () {
                return [];
            };
        },
        function (e, t, n) {
            var i = n(130),
                r = n(139),
                o = n(143);
            e.exports = function (e) {
                return o(e) ? i(e) : r(e);
            };
        },
        function (e, t, n) {
            var i = n(131),
                r = n(132),
                o = n(27),
                a = n(42),
                l = n(135),
                s = n(44),
                u = Object.prototype.hasOwnProperty;
            e.exports = function (e, t) {
                var n = o(e),
                    c = !n && r(e),
                    f = !n && !c && a(e),
                    d = !n && !c && !f && s(e),
                    p = n || c || f || d,
                    h = p ? i(e.length, String) : [],
                    v = h.length;
                for (var y in e) (!t && !u.call(e, y)) || (p && ("length" == y || (f && ("offset" == y || "parent" == y)) || (d && ("buffer" == y || "byteLength" == y || "byteOffset" == y)) || l(y, v))) || h.push(y);
                return h;
            };
        },
        function (e, t) {
            e.exports = function (e, t) {
                for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
                return i;
            };
        },
        function (e, t, n) {
            var i = n(133),
                r = n(20),
                o = Object.prototype,
                a = o.hasOwnProperty,
                l = o.propertyIsEnumerable,
                s = i(
                    (function () {
                        return arguments;
                    })()
                )
                    ? i
                    : function (e) {
                          return r(e) && a.call(e, "callee") && !l.call(e, "callee");
                      };
            e.exports = s;
        },
        function (e, t, n) {
            var i = n(17),
                r = n(20);
            e.exports = function (e) {
                return r(e) && "[object Arguments]" == i(e);
            };
        },
        function (e, t) {
            e.exports = function () {
                return !1;
            };
        },
        function (e, t) {
            var n = /^(?:0|[1-9]\d*)$/;
            e.exports = function (e, t) {
                var i = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == i || ("symbol" != i && n.test(e))) && e > -1 && e % 1 == 0 && e < t;
            };
        },
        function (e, t, n) {
            var i = n(17),
                r = n(45),
                o = n(20),
                a = {};
            (a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a[
                "[object Uint16Array]"
            ] = a["[object Uint32Array]"] = !0),
                (a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a[
                    "[object Number]"
                ] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1),
                (e.exports = function (e) {
                    return o(e) && r(e.length) && !!a[i(e)];
                });
        },
        function (e, t) {
            e.exports = function (e) {
                return function (t) {
                    return e(t);
                };
            };
        },
        function (e, t, n) {
            (function (e) {
                var i = n(37),
                    r = t && !t.nodeType && t,
                    o = r && "object" == typeof e && e && !e.nodeType && e,
                    a = o && o.exports === r && i.process,
                    l = (function () {
                        try {
                            var e = o && o.require && o.require("util").types;
                            return e || (a && a.binding && a.binding("util"));
                        } catch (t) {}
                    })();
                e.exports = l;
            }.call(this, n(43)(e)));
        },
        function (e, t, n) {
            var i = n(140),
                r = n(141),
                o = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t;
            };
        },
        function (e, t) {
            var n = Object.prototype;
            e.exports = function (e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || n);
            };
        },
        function (e, t, n) {
            var i = n(142)(Object.keys, Object);
            e.exports = i;
        },
        function (e, t) {
            e.exports = function (e, t) {
                return function (n) {
                    return e(t(n));
                };
            };
        },
        function (e, t, n) {
            var i = n(36),
                r = n(45);
            e.exports = function (e) {
                return null != e && r(e.length) && !i(e);
            };
        },
        function (e, t, n) {
            var i = n(145),
                r = n(25),
                o = n(146),
                a = n(147),
                l = n(148),
                s = n(17),
                u = n(39),
                c = u(i),
                f = u(r),
                d = u(o),
                p = u(a),
                h = u(l),
                v = s;
            ((i && "[object DataView]" != v(new i(new ArrayBuffer(1)))) ||
                (r && "[object Map]" != v(new r())) ||
                (o && "[object Promise]" != v(o.resolve())) ||
                (a && "[object Set]" != v(new a())) ||
                (l && "[object WeakMap]" != v(new l()))) &&
                (v = function (e) {
                    var t = s(e),
                        n = "[object Object]" == t ? e.constructor : void 0,
                        i = n ? u(n) : "";
                    if (i)
                        switch (i) {
                            case c:
                                return "[object DataView]";
                            case f:
                                return "[object Map]";
                            case d:
                                return "[object Promise]";
                            case p:
                                return "[object Set]";
                            case h:
                                return "[object WeakMap]";
                        }
                    return t;
                }),
                (e.exports = v);
        },
        function (e, t, n) {
            var i = n(11)(n(5), "DataView");
            e.exports = i;
        },
        function (e, t, n) {
            var i = n(11)(n(5), "Promise");
            e.exports = i;
        },
        function (e, t, n) {
            var i = n(11)(n(5), "Set");
            e.exports = i;
        },
        function (e, t, n) {
            var i = n(11)(n(5), "WeakMap");
            e.exports = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(46);
            t.Container = i.Container;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(6),
                r = n(151),
                o = n(7),
                a = (function () {
                    function e(e) {
                        (this.container = e), (this.size = { height: 0, width: 0 }), (this.context = null), (this.generatedCanvas = !1);
                    }
                    return (
                        (e.prototype.init = function () {
                            this.resize();
                            var e = this.container.options,
                                t = e.backgroundMask.cover.color,
                                n = e.particles.move.trail;
                            (this.coverColor = o.ColorUtils.colorToRgb(t)), (this.trailFillColor = o.ColorUtils.colorToRgb(n.fillColor)), this.paint();
                        }),
                        (e.prototype.loadCanvas = function (e, t) {
                            var n;
                            e.className || (e.className = i.Constants.canvasClass),
                                this.generatedCanvas && (null === (n = this.element) || void 0 === n || n.remove()),
                                (this.generatedCanvas = null !== t && void 0 !== t && t),
                                (this.element = e),
                                (this.size.height = e.offsetHeight),
                                (this.size.width = e.offsetWidth),
                                (this.context = this.element.getContext("2d")),
                                this.container.retina.init(),
                                this.initBackground();
                        }),
                        (e.prototype.destroy = function () {
                            var e;
                            this.generatedCanvas && (null === (e = this.element) || void 0 === e || e.remove()), this.context && r.CanvasUtils.clear(this.context, this.size);
                        }),
                        (e.prototype.resize = function () {
                            this.element && ((this.element.width = this.size.width), (this.element.height = this.size.height));
                        }),
                        (e.prototype.paint = function () {
                            var e = this.container.options;
                            this.context && (e.backgroundMask.enable && e.backgroundMask.cover && this.coverColor ? this.paintBase(o.ColorUtils.getStyleFromColor(this.coverColor)) : this.paintBase());
                        }),
                        (e.prototype.clear = function () {
                            var e = this.container.options,
                                t = e.particles.move.trail;
                            e.backgroundMask.enable
                                ? this.paint()
                                : t.enable && t.length > 0 && this.trailFillColor
                                ? this.paintBase(o.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / t.length))
                                : this.context && r.CanvasUtils.clear(this.context, this.size);
                        }),
                        (e.prototype.isPointInPath = function (e, t) {
                            var n, i;
                            return null !== (i = null === (n = this.context) || void 0 === n ? void 0 : n.isPointInPath(e, t.x, t.y)) && void 0 !== i && i;
                        }),
                        (e.prototype.drawLinkedLine = function (e, t) {
                            var n,
                                a = this.container,
                                l = a.options,
                                s = t.destination,
                                u = t.opacity,
                                c = e.getPosition(),
                                f = s.getPosition(),
                                d = this.context;
                            if (d) {
                                var p,
                                    h = e.particlesOptions.twinkle.lines;
                                if (h.enable) {
                                    var v = h.frequency,
                                        y = "string" === typeof h.color ? { value: h.color } : h.color,
                                        m = void 0 !== y ? o.ColorUtils.colorToRgb(y) : void 0;
                                    Math.random() < v && void 0 !== m && ((p = m), (u = h.opacity));
                                }
                                if (!p)
                                    if (a.particles.lineLinkedColor === i.Constants.randomColorValue) p = o.ColorUtils.getRandomRgbColor();
                                    else if ("mid" == a.particles.lineLinkedColor && e.color && s.color) {
                                        var b = e.color,
                                            g = s.color;
                                        p = o.ColorUtils.mix(b, g, e.size.value, s.size.value);
                                    } else p = a.particles.lineLinkedColor;
                                var w = null !== (n = e.lineLinkedWidth) && void 0 !== n ? n : a.retina.lineLinkedWidth;
                                r.CanvasUtils.drawLinkedLine(d, w, c, f, l.backgroundMask.enable, p, u, e.particlesOptions.lineLinked.shadow);
                            }
                        }),
                        (e.prototype.drawConnectLine = function (e, t) {
                            var n,
                                i = this.lineStyle(e, t);
                            if (i) {
                                var o = this.context;
                                if (o) {
                                    var a = e.getPosition(),
                                        l = t.getPosition();
                                    r.CanvasUtils.drawConnectLine(o, null !== (n = e.lineLinkedWidth) && void 0 !== n ? n : this.container.retina.lineLinkedWidth, i, a, l);
                                }
                            }
                        }),
                        (e.prototype.drawGrabLine = function (e, t, n) {
                            var a,
                                l = this.container,
                                s = e.particlesOptions.lineLinked.color,
                                u = l.particles.grabLineColor || ("string" === typeof s ? o.ColorUtils.stringToRgb(s) : o.ColorUtils.colorToRgb(s));
                            u == i.Constants.randomColorValue && (u = o.ColorUtils.getRandomRgbColor()), (l.particles.grabLineColor = u);
                            var c,
                                f = l.canvas.context;
                            if (f && void 0 !== (c = l.particles.grabLineColor === i.Constants.randomColorValue ? o.ColorUtils.getRandomRgbColor() : l.particles.grabLineColor)) {
                                var d = e.getPosition();
                                r.CanvasUtils.drawGrabLine(f, null !== (a = e.lineLinkedWidth) && void 0 !== a ? a : l.retina.lineLinkedWidth, d, n, c, t);
                            }
                        }),
                        (e.prototype.drawParticle = function (e, t) {
                            var n,
                                i,
                                a,
                                l = this.container.options,
                                s = e.particlesOptions.twinkle.particles,
                                u = s.frequency,
                                c = "string" === typeof s.color ? { value: s.color } : s.color,
                                f = void 0 !== c ? o.ColorUtils.colorToRgb(c) : void 0,
                                d = s.enable && Math.random() < u,
                                p = null !== (n = e.bubble.radius) && void 0 !== n ? n : e.size.value,
                                h = d ? s.opacity : null !== (i = e.bubble.opacity) && void 0 !== i ? i : e.opacity.value,
                                v = e.infectionStage,
                                y = l.infection.stages,
                                m = void 0 !== v ? y[v].color : void 0,
                                b = m ? o.ColorUtils.colorToRgb(m) : void 0,
                                g = d && void 0 !== f ? f : null !== (a = null !== b && void 0 !== b ? b : e.bubble.color) && void 0 !== a ? a : e.color,
                                w = void 0 !== g ? o.ColorUtils.getStyleFromColor(g, h) : void 0;
                            if (this.context && w) {
                                this.context.save();
                                for (var x = 0, k = e.links; x < k.length; x++) {
                                    var _ = k[x];
                                    this.drawLinkedLine(e, _);
                                }
                                this.context.restore(), r.CanvasUtils.drawParticle(this.container, this.context, e, t, w, l.backgroundMask.enable, p, h, e.particlesOptions.shadow);
                            }
                        }),
                        (e.prototype.drawPlugin = function (e, t) {
                            this.context && r.CanvasUtils.drawPlugin(this.context, e, t);
                        }),
                        (e.prototype.paintBase = function (e) {
                            this.context && r.CanvasUtils.paintBase(this.context, this.size, e);
                        }),
                        (e.prototype.lineStyle = function (e, t) {
                            var n = this.container.options.interactivity.modes.connect;
                            if (e.color && t.color && this.context) return r.CanvasUtils.gradient(this.context, e, t, n.lineLinked.opacity);
                        }),
                        (e.prototype.initBackground = function () {
                            var e = this.container.options.background,
                                t = this.element;
                            if (t) {
                                var n = t.style;
                                if (e.color) {
                                    var i = o.ColorUtils.colorToRgb(e.color);
                                    i && (n.backgroundColor = o.ColorUtils.getStyleFromColor(i, e.opacity));
                                }
                                e.image && (n.backgroundImage = e.image), e.position && (n.backgroundPosition = e.position), e.repeat && (n.backgroundRepeat = e.repeat), e.size && (n.backgroundSize = e.size);
                            }
                        }),
                        e
                    );
                })();
            t.Canvas = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(7),
                r = (function () {
                    function e() {}
                    return (
                        (e.paintBase = function (e, t, n) {
                            e.save(), (e.fillStyle = null !== n && void 0 !== n ? n : "rgba(0,0,0,0)"), e.fillRect(0, 0, t.width, t.height), e.restore();
                        }),
                        (e.clear = function (e, t) {
                            e.clearRect(0, 0, t.width, t.height);
                        }),
                        (e.drawLinkedLine = function (e, t, n, r, o, a, l, s) {
                            if (
                                (e.beginPath(),
                                e.moveTo(n.x, n.y),
                                e.lineTo(r.x, r.y),
                                e.closePath(),
                                (e.lineWidth = t),
                                o && (e.globalCompositeOperation = "destination-out"),
                                (e.strokeStyle = i.ColorUtils.getStyleFromColor(a, l)),
                                s.enable)
                            ) {
                                var u = "string" === typeof s.color ? i.ColorUtils.stringToRgb(s.color) : i.ColorUtils.colorToRgb(s.color);
                                u && ((e.shadowBlur = s.blur), (e.shadowColor = i.ColorUtils.getStyleFromColor(u)));
                            }
                            e.stroke();
                        }),
                        (e.drawConnectLine = function (e, t, n, i, r) {
                            e.save(), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(r.x, r.y), e.closePath(), (e.lineWidth = t), (e.strokeStyle = n), e.stroke(), e.restore();
                        }),
                        (e.gradient = function (e, t, n, r) {
                            var o = Math.floor(n.size.value / t.size.value);
                            if (t.color && n.color) {
                                var a = t.getPosition(),
                                    l = n.getPosition(),
                                    s = i.ColorUtils.mix(t.color, n.color, t.size.value, n.size.value),
                                    u = e.createLinearGradient(a.x, a.y, l.x, l.y);
                                return u.addColorStop(0, i.ColorUtils.getStyleFromColor(t.color, r)), u.addColorStop(o > 1 ? 1 : o, i.ColorUtils.getStyleFromColor(s, r)), u.addColorStop(1, i.ColorUtils.getStyleFromColor(n.color, r)), u;
                            }
                        }),
                        (e.drawGrabLine = function (e, t, n, r, o, a) {
                            e.save(), e.beginPath(), e.moveTo(n.x, n.y), e.lineTo(r.x, r.y), e.closePath(), (e.strokeStyle = i.ColorUtils.getStyleFromColor(o, a)), (e.lineWidth = t), e.stroke(), e.restore();
                        }),
                        (e.drawParticle = function (e, t, n, r, o, a, l, s, u) {
                            var c = n.getPosition();
                            t.save(), t.translate(c.x, c.y), t.beginPath(), 0 !== n.angle && t.rotate((n.angle * Math.PI) / 180), a && (t.globalCompositeOperation = "destination-out");
                            var f = n.shadowColor;
                            u.enable && f && ((t.shadowBlur = u.blur), (t.shadowColor = i.ColorUtils.getStyleFromColor(f)), (t.shadowOffsetX = u.offset.x), (t.shadowOffsetY = u.offset.y)), (t.fillStyle = o);
                            var d = n.stroke;
                            d.width > 0 && n.strokeColor && ((t.strokeStyle = i.ColorUtils.getStyleFromColor(n.strokeColor, n.stroke.opacity)), (t.lineWidth = d.width)),
                                this.drawShape(e, t, n, l, s, r),
                                n.close && t.closePath(),
                                d.width > 0 && n.strokeColor && t.stroke(),
                                n.fill && t.fill(),
                                t.restore(),
                                t.save(),
                                t.translate(c.x, c.y),
                                0 !== n.angle && t.rotate((n.angle * Math.PI) / 180),
                                a && (t.globalCompositeOperation = "destination-out"),
                                this.drawShapeAfterEffect(e, t, n, l, s, r),
                                t.restore();
                        }),
                        (e.drawShape = function (e, t, n, i, r, o) {
                            if (n.shape) {
                                var a = e.drawers[n.shape];
                                a && a.draw(t, n, i, r, o);
                            }
                        }),
                        (e.drawShapeAfterEffect = function (e, t, n, i, r, o) {
                            if (n.shape) {
                                var a = e.drawers[n.shape];
                                a && void 0 !== a.afterEffect && a.afterEffect(t, n, i, r, o);
                            }
                        }),
                        (e.drawPlugin = function (e, t, n) {
                            e.save(), void 0 !== t.draw && t.draw(e, n), e.restore();
                        }),
                        e
                    );
                })();
            t.CanvasUtils = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(4),
                r = n(24),
                o = n(6),
                a = (function () {
                    function e(e) {
                        var t = this;
                        (this.container = e),
                            (this.canPush = !0),
                            (this.mouseMoveHandler = function (e) {
                                return t.mouseTouchMove(e);
                            }),
                            (this.touchStartHandler = function (e) {
                                return t.mouseTouchMove(e);
                            }),
                            (this.touchMoveHandler = function (e) {
                                return t.mouseTouchMove(e);
                            }),
                            (this.touchEndHandler = function () {
                                return t.mouseTouchFinish();
                            }),
                            (this.mouseLeaveHandler = function () {
                                return t.mouseTouchFinish();
                            }),
                            (this.touchCancelHandler = function () {
                                return t.mouseTouchFinish();
                            }),
                            (this.touchEndClickHandler = function (e) {
                                return t.mouseTouchClick(e);
                            }),
                            (this.mouseUpHandler = function (e) {
                                return t.mouseTouchClick(e);
                            }),
                            (this.visibilityChangeHandler = function () {
                                return t.handleVisibilityChange();
                            }),
                            (this.resizeHandler = function () {
                                return t.handleWindowResize();
                            });
                    }
                    return (
                        (e.manageListener = function (t, n, i, r, o) {
                            if (r) {
                                var a = { passive: !0 };
                                "boolean" === typeof o ? (a.capture = o) : void 0 !== o && (a = o), e.addListener(t, n, i, a);
                            } else e.removeListener(t, n, i, o);
                        }),
                        (e.addListener = function (e, t, n, i) {
                            e.addEventListener(t, n, i);
                        }),
                        (e.removeListener = function (e, t, n, i) {
                            e.removeEventListener(t, n, i);
                        }),
                        (e.prototype.addListeners = function () {
                            this.manageListeners(!0);
                        }),
                        (e.prototype.removeListeners = function () {
                            this.manageListeners(!1);
                        }),
                        (e.prototype.manageListeners = function (t) {
                            var n = this.container,
                                i = n.options;
                            i.interactivity.detectsOn === r.InteractivityDetect.window
                                ? (n.interactivity.element = window)
                                : i.interactivity.detectsOn === r.InteractivityDetect.parent && n.canvas.element
                                ? (n.interactivity.element = n.canvas.element.parentNode)
                                : (n.interactivity.element = n.canvas.element);
                            var a = n.interactivity.element;
                            a &&
                                (i.interactivity.events.onHover.enable || i.interactivity.events.onClick.enable) &&
                                (e.manageListener(a, o.Constants.mouseMoveEvent, this.mouseMoveHandler, t),
                                e.manageListener(a, o.Constants.touchStartEvent, this.touchStartHandler, t),
                                e.manageListener(a, o.Constants.touchMoveEvent, this.touchMoveHandler, t),
                                i.interactivity.events.onClick.enable || e.manageListener(a, o.Constants.touchEndEvent, this.touchEndHandler, t),
                                e.manageListener(a, o.Constants.mouseLeaveEvent, this.mouseLeaveHandler, t),
                                e.manageListener(a, o.Constants.touchCancelEvent, this.touchCancelHandler, t)),
                                i.interactivity.events.onClick.enable && a && (e.manageListener(a, o.Constants.touchEndEvent, this.touchEndClickHandler, t), e.manageListener(a, o.Constants.mouseUpEvent, this.mouseUpHandler, t)),
                                i.interactivity.events.resize && e.manageListener(window, o.Constants.resizeEvent, this.resizeHandler, t),
                                document && e.manageListener(document, o.Constants.visibilityChangeEvent, this.visibilityChangeHandler, t, !1);
                        }),
                        (e.prototype.handleWindowResize = function () {
                            var e = this.container,
                                t = e.options;
                            if (e.canvas.element)
                                for (var n in ((e.canvas.size.width = e.canvas.element.offsetWidth),
                                (e.canvas.size.height = e.canvas.element.offsetHeight),
                                e.retina.isRetina && ((e.canvas.size.width *= e.retina.pixelRatio), (e.canvas.size.height *= e.retina.pixelRatio)),
                                (e.canvas.element.width = e.canvas.size.width),
                                (e.canvas.element.height = e.canvas.size.height),
                                t.particles.move.enable || e.particles.redraw(),
                                e.densityAutoParticles(),
                                e.plugins)) {
                                    var i = e.plugins[n];
                                    void 0 !== i.resize && i.resize();
                                }
                        }),
                        (e.prototype.handleVisibilityChange = function () {
                            var e = this.container;
                            e.options.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? ((e.pageHidden = !0), e.pause()) : ((e.pageHidden = !1), e.getAnimationStatus() ? e.play(!0) : e.draw()));
                        }),
                        (e.prototype.mouseTouchMove = function (e) {
                            var t,
                                n,
                                i,
                                a,
                                l,
                                s = this.container,
                                u = s.options;
                            if (e.type.startsWith("mouse")) {
                                this.canPush = !0;
                                var c = e;
                                if (void 0 === (null === (t = s.interactivity) || void 0 === t ? void 0 : t.element)) return;
                                if (s.interactivity.element === window) {
                                    if (s.canvas.element) {
                                        var f = s.canvas.element.getBoundingClientRect();
                                        l = { x: c.clientX - f.left, y: c.clientY - f.top };
                                    }
                                } else if (u.interactivity.detectsOn === r.InteractivityDetect.parent) {
                                    var d = c.target,
                                        p = c.currentTarget;
                                    if (d && p) {
                                        var h = d.getBoundingClientRect(),
                                            v = p.getBoundingClientRect();
                                        l = { x: c.offsetX + h.left - v.left, y: c.offsetY + h.top - v.top };
                                    } else l = { x: c.offsetX || c.clientX, y: c.offsetY || c.clientY };
                                } else c.target === s.canvas.element && (l = { x: c.offsetX || c.clientX, y: c.offsetY || c.clientY });
                            } else {
                                this.canPush = "touchmove" !== e.type;
                                var y = e,
                                    m = y.touches[y.touches.length - 1],
                                    b = null === (n = s.canvas.element) || void 0 === n ? void 0 : n.getBoundingClientRect();
                                l = {
                                    x: m.clientX - (null !== (i = null === b || void 0 === b ? void 0 : b.left) && void 0 !== i ? i : 0),
                                    y: m.clientY - (null !== (a = null === b || void 0 === b ? void 0 : b.top) && void 0 !== a ? a : 0),
                                };
                            }
                            (s.interactivity.mouse.position = l),
                                s.retina.isRetina && s.interactivity.mouse.position && ((s.interactivity.mouse.position.x *= s.retina.pixelRatio), (s.interactivity.mouse.position.y *= s.retina.pixelRatio)),
                                (s.interactivity.status = o.Constants.mouseMoveEvent);
                        }),
                        (e.prototype.mouseTouchFinish = function () {
                            var e = this.container;
                            delete e.interactivity.mouse.position, (e.interactivity.status = o.Constants.mouseLeaveEvent);
                        }),
                        (e.prototype.mouseTouchClick = function (e) {
                            var t = this.container,
                                n = t.options,
                                i = !1,
                                r = t.interactivity.mouse.position;
                            if (void 0 !== r && n.interactivity.events.onClick.enable) {
                                for (var o in t.plugins) {
                                    var a = t.plugins[o];
                                    if (void 0 !== a.clickPositionValid && (i = a.clickPositionValid(r))) break;
                                }
                                i || this.doMouseTouchClick(e);
                            }
                        }),
                        (e.prototype.doMouseTouchClick = function (e) {
                            var t = this,
                                n = this.container,
                                i = n.options;
                            if (this.canPush) {
                                if (!n.interactivity.mouse.position) return;
                                if (
                                    ((n.interactivity.mouse.clickPosition = { x: n.interactivity.mouse.position.x, y: n.interactivity.mouse.position.y }),
                                    (n.interactivity.mouse.clickTime = new Date().getTime()),
                                    i.interactivity.events.onClick.mode instanceof Array)
                                )
                                    for (var r = 0, o = i.interactivity.events.onClick.mode; r < o.length; r++) {
                                        var a = o[r];
                                        this.handleClickMode(a);
                                    }
                                else {
                                    a = i.interactivity.events.onClick.mode;
                                    this.handleClickMode(a);
                                }
                            }
                            "touchend" === e.type &&
                                setTimeout(function () {
                                    return t.mouseTouchFinish();
                                }, 500);
                        }),
                        (e.prototype.handleClickMode = function (e) {
                            var t = this.container,
                                n = t.options,
                                r = n.interactivity.modes.push.quantity,
                                o = n.interactivity.modes.remove.quantity;
                            switch (e) {
                                case i.ClickMode.push:
                                    n.particles.move.enable || 1 === n.interactivity.modes.push.quantity ? t.particles.push(r, t.interactivity.mouse) : n.interactivity.modes.push.quantity > 1 && t.particles.push(r);
                                    break;
                                case i.ClickMode.remove:
                                    t.particles.removeQuantity(o);
                                    break;
                                case i.ClickMode.bubble:
                                    t.bubble.clicking = !0;
                                    break;
                                case i.ClickMode.repulse:
                                    (t.repulse.clicking = !0), (t.repulse.count = 0);
                                    for (var a = 0, l = t.repulse.particles; a < l.length; a++) {
                                        var s = l[a];
                                        (s.velocity.horizontal = s.initialVelocity.horizontal), (s.velocity.vertical = s.initialVelocity.vertical);
                                    }
                                    (t.repulse.particles = []),
                                        (t.repulse.finish = !1),
                                        setTimeout(function () {
                                            t.destroyed || (t.repulse.clicking = !1);
                                        }, 1e3 * n.interactivity.modes.repulse.duration);
                            }
                            for (var u in t.plugins) {
                                var c = t.plugins[u];
                                c.handleClickMode && c.handleClickMode(e);
                            }
                        }),
                        e
                    );
                })();
            t.EventListeners = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(28),
                r = n(184),
                o = n(1),
                a = n(10),
                l = n(189),
                s = n(4),
                u = n(190),
                c = n(30),
                f = n(191),
                d = n(192),
                p = n(193),
                h = n(52),
                v = n(194),
                y = n(56),
                m = (function () {
                    function e(e) {
                        (this.container = e), (this.array = []), (this.interactionsEnabled = !1);
                        var t = this.container.canvas.size;
                        (this.noiseZ = 0), (this.quadTree = new p.QuadTree(new y.Rectangle(0, 0, t.width, t.height), 4));
                    }
                    return (
                        Object.defineProperty(e.prototype, "count", {
                            get: function () {
                                return this.array.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.init = function () {
                            var e = this.container,
                                t = e.options,
                                n = !1;
                            for (var r in ((this.noiseZ = 0), e.plugins)) {
                                var a = e.plugins[r];
                                if ((void 0 !== a.particlesInitialization && (n = a.particlesInitialization()), n)) break;
                            }
                            if (!n) for (var l = this.count; l < t.particles.number.value; l++) this.addParticle(new i.Particle(e));
                            if (((this.interactionsEnabled = t.particles.lineLinked.enable || t.particles.move.attract.enable || t.particles.collisions.enable || t.infection.enable), t.infection.enable))
                                for (l = 0; l < t.infection.infections; l++) {
                                    var s = this.array.filter(function (e) {
                                        return void 0 === e.infectionStage;
                                    });
                                    o.Utils.itemFromArray(s).startInfection(0);
                                }
                        }),
                        (e.prototype.redraw = function () {
                            this.clear(), this.init(), this.draw(0);
                        }),
                        (e.prototype.removeAt = function (e, t) {
                            if (e >= 0 && e <= this.count)
                                for (var n = 0, i = this.array.splice(e, null !== t && void 0 !== t ? t : 1); n < i.length; n++) {
                                    i[n].destroy();
                                }
                        }),
                        (e.prototype.remove = function (e) {
                            this.removeAt(this.array.indexOf(e));
                        }),
                        (e.prototype.update = function (e) {
                            for (var t = this.container, n = t.options, i = [], p = 0; p < this.count; p++) {
                                var y = this.array[p];
                                for (var m in (f.Bubbler.reset(y), t.plugins)) {
                                    var b = t.plugins[m];
                                    if (y.destroyed) break;
                                    b.particleUpdate && b.particleUpdate(y, e);
                                }
                                if (!y.destroyed) {
                                    var g = y.particlesOptions.size,
                                        w = g.animation;
                                    if (w.enable)
                                        switch (w.destroy) {
                                            case h.DestroyType.max:
                                                y.size.value >= g.value * t.retina.pixelRatio && (y.destroyed = !0);
                                                break;
                                            case h.DestroyType.min:
                                                y.size.value <= w.minimumValue * t.retina.pixelRatio && (y.destroyed = !0);
                                        }
                                }
                                if (y.destroyed) i.push(y);
                                else {
                                    y.update(p, e);
                                    var x = y.getPosition();
                                    t.particles.quadTree.insert(new v.Point(x.x, x.y, y));
                                }
                            }
                            for (var k = 0, _ = i; k < _.length; k++) {
                                y = _[k];
                                this.remove(y);
                            }
                            if (
                                t.options.interactivity.events.onDiv.enable ||
                                (t.options.interactivity.events.onHover.enable && t.interactivity.mouse.position) ||
                                (t.options.interactivity.events.onClick.enable && t.interactivity.mouse.clickPosition)
                            ) {
                                var P = n.interactivity.events.onHover.mode,
                                    S = n.interactivity.events.onClick.mode,
                                    T = n.interactivity.events.onDiv.mode;
                                o.Utils.isInArray(a.HoverMode.grab, P) && l.Grabber.grab(t, e),
                                    (o.Utils.isInArray(a.HoverMode.repulse, P) || o.Utils.isInArray(s.ClickMode.repulse, S) || o.Utils.isInArray(c.DivMode.repulse, T)) && u.Repulser.repulse(t, e),
                                    (o.Utils.isInArray(a.HoverMode.bubble, P) || o.Utils.isInArray(s.ClickMode.bubble, S)) && f.Bubbler.bubble(t, e),
                                    o.Utils.isInArray(a.HoverMode.connect, P) && d.Connector.connect(t, e);
                            }
                            for (var O = 0, C = this.array; O < C.length; O++) {
                                y = C[O];
                                this.interactionsEnabled && r.InteractionManager.interact(y, t, e);
                            }
                        }),
                        (e.prototype.draw = function (e) {
                            var t = this.container;
                            t.canvas.clear();
                            var n = this.container.canvas.size;
                            for (var i in ((this.quadTree = new p.QuadTree(new y.Rectangle(0, 0, n.width, n.height), 4)), this.update(e), (this.noiseZ += 4e-4), t.plugins)) {
                                var r = t.plugins[i];
                                t.canvas.drawPlugin(r, e);
                            }
                            for (var o = 0, a = this.array; o < a.length; o++) {
                                a[o].draw(e);
                            }
                        }),
                        (e.prototype.clear = function () {
                            this.array = [];
                        }),
                        (e.prototype.push = function (e, t) {
                            var n,
                                r,
                                o = this.container,
                                a = o.options,
                                l = a.particles.number.limit * o.density;
                            if (((this.pushing = !0), l > 0)) {
                                var s = this.count + e - l;
                                s > 0 && this.removeQuantity(s);
                            }
                            t && (r = null !== (n = t.position) && void 0 !== n ? n : { x: 0, y: 0 });
                            for (var u = 0; u < e; u++) this.addParticle(new i.Particle(o, r));
                            a.particles.move.enable || this.container.play(), (this.pushing = !1);
                        }),
                        (e.prototype.addParticle = function (e) {
                            this.array.push(e);
                        }),
                        (e.prototype.removeQuantity = function (e) {
                            var t = this.container.options;
                            this.removeAt(0, e), t.particles.move.enable || this.container.play();
                        }),
                        e
                    );
                })();
            t.Particles = m;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(13),
                r = n(1),
                o = n(155),
                a = n(21),
                l = n(47),
                s = n(48),
                u = (function () {
                    function e(e, t) {
                        (this.container = e), (this.particle = t), (this.mover = new o.Mover(e, t));
                    }
                    return (
                        (e.checkBounds = function (e, t, n, i, r) {
                            ((e + t > n && i > 0) || (e - t < 0 && i < 0)) && r();
                        }),
                        (e.prototype.update = function (e) {
                            this.mover.move(e), this.updateOpacity(e), this.updateSize(e), this.updateAngle(e), this.fixOutOfCanvasPosition(e), this.updateOutMode(e);
                        }),
                        (e.prototype.updateOpacity = function (e) {
                            var t = this.container.options,
                                n = this.particle,
                                i = t.fpsLimit > 0 ? (60 * e) / 1e3 : 3.6;
                            if (n.particlesOptions.opacity.animation.enable) {
                                switch (n.opacity.status) {
                                    case s.OpacityAnimationStatus.increasing:
                                        n.opacity.value >= n.particlesOptions.opacity.value ? (n.opacity.status = s.OpacityAnimationStatus.decreasing) : (n.opacity.value += (n.opacity.velocity || 0) * i);
                                        break;
                                    case s.OpacityAnimationStatus.decreasing:
                                        n.opacity.value <= n.particlesOptions.opacity.animation.minimumValue ? (n.opacity.status = s.OpacityAnimationStatus.increasing) : (n.opacity.value -= (n.opacity.velocity || 0) * i);
                                }
                                n.opacity.value < 0 && (n.opacity.value = 0);
                            }
                        }),
                        (e.prototype.updateSize = function (e) {
                            var t,
                                n = this.container,
                                i = n.options,
                                r = this.particle,
                                o = i.fpsLimit > 0 ? (60 * e) / 1e3 : 3.6;
                            if (r.particlesOptions.size.animation.enable) {
                                switch (r.size.status) {
                                    case l.SizeAnimationStatus.increasing:
                                        r.size.value >= (null !== (t = r.sizeValue) && void 0 !== t ? t : n.retina.sizeValue) ? (r.size.status = l.SizeAnimationStatus.decreasing) : (r.size.value += (r.size.velocity || 0) * o);
                                        break;
                                    case l.SizeAnimationStatus.decreasing:
                                        r.size.value <= r.particlesOptions.size.animation.minimumValue ? (r.size.status = l.SizeAnimationStatus.increasing) : (r.size.value -= (r.size.velocity || 0) * o);
                                }
                                r.size.value < 0 && (r.size.value = 0);
                            }
                        }),
                        (e.prototype.updateAngle = function (e) {
                            var t = this.container.options,
                                n = this.particle,
                                i = t.fpsLimit > 0 ? (60 * e) / 1e3 : 3.6;
                            if (n.particlesOptions.rotate.animation.enable)
                                switch (n.rotateDirection) {
                                    case a.RotateDirection.clockwise:
                                        (n.angle += ((n.particlesOptions.rotate.animation.speed * Math.PI) / 18) * i), n.angle > 360 && (n.angle -= 360);
                                        break;
                                    case a.RotateDirection.counterClockwise:
                                    default:
                                        (n.angle -= ((n.particlesOptions.rotate.animation.speed * Math.PI) / 18) * i), n.angle < 0 && (n.angle += 360);
                                }
                        }),
                        (e.prototype.fixOutOfCanvasPosition = function (e) {
                            var t,
                                n = this.container,
                                o = this.particle,
                                a = o.particlesOptions.move.outMode,
                                l = n.canvas.size;
                            if (
                                ((t =
                                    a === i.OutMode.bounce
                                        ? { bottom: l.height, left: o.size.value, right: l.width, top: o.size.value }
                                        : a === i.OutMode.bounceHorizontal
                                        ? { bottom: l.height + o.size.value - o.offset.y, left: o.size.value, right: l.width, top: -o.size.value - o.offset.y }
                                        : a === i.OutMode.bounceVertical
                                        ? { bottom: l.height, left: -o.size.value - o.offset.x, right: l.width + o.size.value + o.offset.x, top: o.size.value }
                                        : { bottom: l.height + o.size.value - o.offset.y, left: -o.size.value - o.offset.x, right: l.width + o.size.value + o.offset.x, top: -o.size.value - o.offset.y }),
                                a === i.OutMode.destroy)
                            ) {
                                var s = o.size.value;
                                r.Utils.isPointInside(o.position, n.canvas.size, s) || n.particles.remove(o);
                            } else {
                                s = o.size.value;
                                var u = r.Utils.calculateBounds(o.position, s);
                                u.left > l.width - o.offset.x ? ((o.position.x = t.left), (o.position.y = Math.random() * l.height)) : u.right < -o.offset.x && ((o.position.x = t.right), (o.position.y = Math.random() * l.height)),
                                    u.top > l.height - o.offset.y ? ((o.position.x = Math.random() * l.width), (o.position.y = t.top)) : u.bottom < -o.offset.y && ((o.position.x = Math.random() * l.width), (o.position.y = t.bottom));
                            }
                        }),
                        (e.prototype.updateOutMode = function (e) {
                            switch (this.particle.particlesOptions.move.outMode) {
                                case i.OutMode.bounce:
                                case i.OutMode.bounceVertical:
                                case i.OutMode.bounceHorizontal:
                                    this.updateBounce(e);
                            }
                        }),
                        (e.prototype.updateBounce = function (t) {
                            var n = this.container,
                                r = this.particle,
                                o = !1;
                            for (var a in n.plugins) {
                                var l = n.plugins[a];
                                if ((void 0 !== l.particleBounce && (o = l.particleBounce(r, t)), o)) break;
                            }
                            if (!o) {
                                var s = r.particlesOptions.move.outMode,
                                    u = r.getPosition();
                                if (s === i.OutMode.bounce || s === i.OutMode.bounceHorizontal) {
                                    var c = r.size.value,
                                        f = r.velocity.horizontal;
                                    e.checkBounds(u.x, c, n.canvas.size.width, f, function () {
                                        r.velocity.horizontal *= -1;
                                    });
                                }
                                if (s === i.OutMode.bounce || s === i.OutMode.bounceVertical) {
                                    (c = r.size.value), (f = r.velocity.vertical);
                                    e.checkBounds(u.y, c, n.canvas.size.height, f, function () {
                                        r.velocity.vertical *= -1;
                                    });
                                }
                            }
                        }),
                        e
                    );
                })();
            t.Updater = u;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(1),
                r = n(10),
                o = (function () {
                    function e(e, t) {
                        (this.container = e), (this.particle = t);
                    }
                    return (
                        (e.calcNoiseValue = function (e, t, n) {
                            return Math.floor(e / t) / n.value + n.offset;
                        }),
                        (e.prototype.move = function (t) {
                            var n,
                                r = this.container,
                                o = r.options,
                                a = this.particle,
                                l = a.particlesOptions;
                            if (l.move.enable) {
                                var s = this.getProximitySpeedFactor(),
                                    u = o.fpsLimit > 0 ? (60 * t) / 1e3 : 3.6,
                                    c = ((null !== (n = a.moveSpeed) && void 0 !== n ? n : r.retina.moveSpeed) / 2) * s * u,
                                    f = l.move.noise;
                                if (f.enable)
                                    if (a.lastNoiseTime > a.noiseDelay) {
                                        var d = a.position,
                                            p = f.factor,
                                            h = r.simplex,
                                            v = {
                                                angle: h.noise3D(e.calcNoiseValue(d.x, a.size.value, p.horizontal), e.calcNoiseValue(d.y, a.size.value, p.horizontal), r.particles.noiseZ),
                                                length: h.noise3D(e.calcNoiseValue(d.x, a.size.value, p.vertical), e.calcNoiseValue(d.y, a.size.value, p.vertical), r.particles.noiseZ),
                                            };
                                        (a.velocity.horizontal += Math.cos(v.angle) * v.length),
                                            (a.velocity.horizontal = i.Utils.clamp(a.velocity.horizontal, -1, 1)),
                                            (a.velocity.vertical += Math.sin(v.angle) * v.length),
                                            (a.velocity.vertical = i.Utils.clamp(a.velocity.vertical, -1, 1)),
                                            (a.lastNoiseTime -= a.noiseDelay);
                                    } else a.lastNoiseTime += t;
                                (a.position.x += a.velocity.horizontal * c),
                                    (a.position.y += a.velocity.vertical * c),
                                    l.move.vibrate && ((a.position.x += Math.sin(a.position.x * Math.cos(a.position.y))), (a.position.y += Math.cos(a.position.y * Math.sin(a.position.x))));
                            }
                            this.moveParallax(t);
                        }),
                        (e.prototype.moveParallax = function (e) {
                            var t = this.container,
                                n = t.options;
                            if (n.interactivity.events.onHover.parallax.enable) {
                                var i = this.particle,
                                    r = n.interactivity.events.onHover.parallax.force,
                                    o = t.interactivity.mouse.position;
                                if (o) {
                                    var a = window.innerHeight / 2,
                                        l = window.innerWidth / 2,
                                        s = n.interactivity.events.onHover.parallax.smooth,
                                        u = (o.x - l) * (i.size.value / r),
                                        c = (o.y - a) * (i.size.value / r);
                                    (i.offset.x += (u - i.offset.x) / s), (i.offset.y += (c - i.offset.y) / s);
                                }
                            }
                        }),
                        (e.prototype.getProximitySpeedFactor = function () {
                            var e = this.container,
                                t = e.options,
                                n = this.particle;
                            if (!i.Utils.isInArray(r.HoverMode.slow, t.interactivity.events.onHover.mode)) return 1;
                            var o = this.container.interactivity.mouse.position;
                            if (!o) return 1;
                            var a = n.getPosition(),
                                l = i.Utils.getDistance(o, a),
                                s = e.retina.slowModeRadius;
                            return l > s ? 1 : (l / s || 0) / t.interactivity.modes.slow.factor;
                        }),
                        e
                    );
                })();
            t.Mover = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(157),
                r = n(3),
                o = (function () {
                    function e() {
                        (this.blink = !1), (this.color = new r.OptionsColor()), (this.consent = !1), (this.distance = 100), (this.enable = !1), (this.opacity = 1), (this.shadow = new i.LineLinkedShadow()), (this.width = 1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.blink && (this.blink = e.blink),
                                (this.color = r.OptionsColor.create(this.color, e.color)),
                                void 0 !== e.consent && (this.consent = e.consent),
                                void 0 !== e.distance && (this.distance = e.distance),
                                void 0 !== e.enable && (this.enable = e.enable),
                                void 0 !== e.opacity && (this.opacity = e.opacity),
                                this.shadow.load(e.shadow),
                                void 0 !== e.width && (this.width = e.width));
                        }),
                        e
                    );
                })();
            t.LineLinked = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.blur = 5), (this.color = new i.OptionsColor()), (this.enable = !1), (this.color.value = "lime");
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.blur && (this.blur = e.blur), (this.color = i.OptionsColor.create(this.color, e.color)), void 0 !== e.enable && (this.enable = e.enable));
                        }),
                        e
                    );
                })();
            t.LineLinkedShadow = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(159),
                r = n(14),
                o = n(13),
                a = n(160),
                l = n(161),
                s = (function () {
                    function e() {
                        (this.attract = new i.Attract()),
                            (this.direction = r.MoveDirection.none),
                            (this.enable = !1),
                            (this.noise = new l.Noise()),
                            (this.outMode = o.OutMode.out),
                            (this.random = !1),
                            (this.speed = 2),
                            (this.straight = !1),
                            (this.trail = new a.Trail()),
                            (this.vibrate = !1);
                    }
                    return (
                        Object.defineProperty(e.prototype, "collisions", {
                            get: function () {
                                return !1;
                            },
                            set: function (e) {},
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "bounce", {
                            get: function () {
                                return this.collisions;
                            },
                            set: function (e) {
                                this.collisions = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "out_mode", {
                            get: function () {
                                return this.outMode;
                            },
                            set: function (e) {
                                this.outMode = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                this.attract.load(e.attract), void 0 !== e.direction && (this.direction = e.direction), void 0 !== e.enable && (this.enable = e.enable), this.noise.load(e.noise);
                                var n = null !== (t = e.outMode) && void 0 !== t ? t : e.out_mode;
                                void 0 !== n && (this.outMode = n),
                                    void 0 !== e.random && (this.random = e.random),
                                    void 0 !== e.speed && (this.speed = e.speed),
                                    void 0 !== e.straight && (this.straight = e.straight),
                                    this.trail.load(e.trail),
                                    void 0 !== e.vibrate && (this.vibrate = e.vibrate);
                            }
                        }),
                        e
                    );
                })();
            t.Move = s;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
                }
                return (
                    Object.defineProperty(e.prototype, "rotateX", {
                        get: function () {
                            return this.rotate.x;
                        },
                        set: function (e) {
                            this.rotate.x = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "rotateY", {
                        get: function () {
                            return this.rotate.y;
                        },
                        set: function (e) {
                            this.rotate.y = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t, n, i, r;
                        if (void 0 !== e) {
                            void 0 !== e.enable && (this.enable = e.enable);
                            var o = null !== (n = null === (t = e.rotate) || void 0 === t ? void 0 : t.x) && void 0 !== n ? n : e.rotateX;
                            void 0 !== o && (this.rotate.x = o);
                            var a = null !== (r = null === (i = e.rotate) || void 0 === i ? void 0 : i.y) && void 0 !== r ? r : e.rotateY;
                            void 0 !== a && (this.rotate.y = a);
                        }
                    }),
                    e
                );
            })();
            t.Attract = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.enable = !1), (this.length = 10), (this.fillColor = new i.OptionsColor()), (this.fillColor.value = "#000000");
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), (this.fillColor = i.OptionsColor.create(this.fillColor, e.fillColor)), void 0 !== e.length && (this.length = e.length));
                        }),
                        e
                    );
                })();
            t.Trail = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(162),
                r = n(164),
                o = (function () {
                    function e() {
                        (this.delay = new i.NoiseDelay()), (this.enable = !1), (this.factor = new r.NoiseFactor());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (this.delay.load(e.delay), void 0 !== e.enable && (this.enable = e.enable), this.factor.load(e.factor));
                        }),
                        e
                    );
                })();
            t.Noise = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(163),
                r = (function () {
                    function e() {
                        (this.random = new i.NoiseRandom()), (this.value = 0);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            var t;
                            void 0 !== e && (null === (t = this.random) || void 0 === t || t.load(e.random), void 0 !== e.value && (this.value = e.value));
                        }),
                        e
                    );
                })();
            t.NoiseDelay = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.minimumValue = 0);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue));
                    }),
                    e
                );
            })();
            t.NoiseRandom = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(165),
                r = (function () {
                    function e() {
                        (this.horizontal = new i.NoiseValue()), (this.horizontal.value = 50), (this.horizontal.offset = 0), (this.vertical = new i.NoiseValue()), (this.vertical.value = 10), (this.vertical.offset = 4e4);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
                        }),
                        e
                    );
                })();
            t.NoiseFactor = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.value = 1), (this.offset = 0);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.value && (this.value = 0 === e.value ? this.value : e.value), void 0 !== e.offset && (this.offset = e.offset));
                    }),
                    e
                );
            })();
            t.NoiseValue = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(167),
                r = (function () {
                    function e() {
                        (this.density = new i.Density()), (this.limit = 0), (this.value = 100);
                    }
                    return (
                        Object.defineProperty(e.prototype, "max", {
                            get: function () {
                                return this.limit;
                            },
                            set: function (e) {
                                this.limit = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                this.density.load(e.density);
                                var n = null !== (t = e.limit) && void 0 !== t ? t : e.max;
                                void 0 !== n && (this.limit = n), void 0 !== e.value && (this.value = e.value);
                            }
                        }),
                        e
                    );
                })();
            t.ParticlesNumber = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.area = 800), (this.factor = 1e3);
                }
                return (
                    Object.defineProperty(e.prototype, "value_area", {
                        get: function () {
                            return this.area;
                        },
                        set: function (e) {
                            this.area = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t;
                        if (void 0 !== e) {
                            void 0 !== e.enable && (this.enable = e.enable);
                            var n = null !== (t = e.area) && void 0 !== t ? t : e.value_area;
                            void 0 !== n && (this.area = n), void 0 !== e.factor && (this.factor = e.factor);
                        }
                    }),
                    e
                );
            })();
            t.Density = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(169),
                r = n(170),
                o = (function () {
                    function e() {
                        (this.animation = new i.OpacityAnimation()), (this.random = new r.OpacityRandom()), (this.value = 1);
                    }
                    return (
                        Object.defineProperty(e.prototype, "anim", {
                            get: function () {
                                return this.animation;
                            },
                            set: function (e) {
                                this.animation = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            void 0 !== e &&
                                (this.animation.load(null !== (t = e.animation) && void 0 !== t ? t : e.anim),
                                void 0 !== e.random && ("boolean" === typeof e.random ? (this.random.enable = e.random) : this.random.load(e.random)),
                                void 0 !== e.value && (this.value = e.value));
                        }),
                        e
                    );
                })();
            t.Opacity = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.minimumValue = 0), (this.speed = 2), (this.sync = !1);
                }
                return (
                    Object.defineProperty(e.prototype, "opacity_min", {
                        get: function () {
                            return this.minimumValue;
                        },
                        set: function (e) {
                            this.minimumValue = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t;
                        if (void 0 !== e) {
                            void 0 !== e.enable && (this.enable = e.enable);
                            var n = null !== (t = e.minimumValue) && void 0 !== t ? t : e.opacity_min;
                            void 0 !== n && (this.minimumValue = n), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.sync && (this.sync = e.sync);
                        }
                    }),
                    e
                );
            })();
            t.OpacityAnimation = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.minimumValue = 1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue));
                    }),
                    e
                );
            })();
            t.OpacityRandom = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        var t = e.call(this) || this;
                        return (t.height = 100), (t.replaceColor = !1), (t.src = ""), (t.width = 100), t;
                    }
                    return (
                        i.__extends(t, e),
                        Object.defineProperty(t.prototype, "replace_color", {
                            get: function () {
                                return this.replaceColor;
                            },
                            set: function (e) {
                                this.replaceColor = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.load = function (t) {
                            var n;
                            if ((e.prototype.load.call(this, t), void 0 !== t)) {
                                void 0 !== t.height && (this.height = t.height);
                                var i = null !== (n = t.replaceColor) && void 0 !== n ? n : t.replace_color;
                                void 0 !== i && (this.replaceColor = i), void 0 !== t.src && (this.src = t.src), void 0 !== t.width && (this.width = t.width);
                            }
                        }),
                        t
                    );
                })(n(29).ShapeBase);
            t.ImageShape = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        var t = e.call(this) || this;
                        return (t.sides = 5), t;
                    }
                    return (
                        i.__extends(t, e),
                        Object.defineProperty(t.prototype, "nb_sides", {
                            get: function () {
                                return this.sides;
                            },
                            set: function (e) {
                                this.sides = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.load = function (t) {
                            var n;
                            if ((e.prototype.load.call(this, t), void 0 !== t)) {
                                var i = null !== (n = t.sides) && void 0 !== n ? n : t.nb_sides;
                                void 0 !== i && (this.sides = i);
                            }
                        }),
                        t
                    );
                })(n(29).ShapeBase);
            t.PolygonShape = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        var t = e.call(this) || this;
                        return (t.font = "Verdana"), (t.style = ""), (t.value = "*"), (t.weight = "400"), t;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.load = function (t) {
                            e.prototype.load.call(this, t),
                                void 0 !== t && (void 0 !== t.font && (this.font = t.font), void 0 !== t.style && (this.style = t.style), void 0 !== t.value && (this.value = t.value), void 0 !== t.weight && (this.weight = t.weight));
                        }),
                        t
                    );
                })(n(29).ShapeBase);
            t.CharacterShape = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(175),
                r = n(176),
                o = (function () {
                    function e() {
                        (this.animation = new i.SizeAnimation()), (this.random = new r.SizeRandom()), (this.value = 3);
                    }
                    return (
                        Object.defineProperty(e.prototype, "anim", {
                            get: function () {
                                return this.animation;
                            },
                            set: function (e) {
                                this.animation = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                var n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
                                void 0 !== n && this.animation.load(n), void 0 !== e.random && ("boolean" === typeof e.random ? (this.random.enable = e.random) : this.random.load(e.random)), void 0 !== e.value && (this.value = e.value);
                            }
                        }),
                        e
                    );
                })();
            t.Size = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(51),
                r = n(52),
                o = (function () {
                    function e() {
                        (this.destroy = r.DestroyType.none), (this.enable = !1), (this.minimumValue = 0), (this.speed = 5), (this.startValue = i.StartValueType.max), (this.sync = !1);
                    }
                    return (
                        Object.defineProperty(e.prototype, "size_min", {
                            get: function () {
                                return this.minimumValue;
                            },
                            set: function (e) {
                                this.minimumValue = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                void 0 !== e.destroy && (this.destroy = e.destroy), void 0 !== e.enable && (this.enable = e.enable);
                                var n = null !== (t = e.minimumValue) && void 0 !== t ? t : e.size_min;
                                void 0 !== n && (this.minimumValue = n), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.startValue && (this.startValue = e.startValue), void 0 !== e.sync && (this.sync = e.sync);
                            }
                        }),
                        e
                    );
                })();
            t.SizeAnimation = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.minimumValue = 1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue));
                    }),
                    e
                );
            })();
            t.SizeRandom = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(178),
                r = n(21),
                o = (function () {
                    function e() {
                        (this.animation = new i.RotateAnimation()), (this.direction = r.RotateDirection.clockwise), (this.random = !1), (this.value = 0);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (this.animation.load(e.animation), void 0 !== e.random && (this.random = e.random), void 0 !== e.direction && (this.direction = e.direction), void 0 !== e.value && (this.value = e.value));
                        }),
                        e
                    );
                })();
            t.Rotate = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.speed = 0), (this.sync = !1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.sync && (this.sync = e.sync));
                    }),
                    e
                );
            })();
            t.RotateAnimation = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.blur = 0), (this.color = new i.OptionsColor()), (this.enable = !1), (this.offset = { x: 0, y: 0 }), (this.color.value = "#000000");
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.blur && (this.blur = e.blur),
                                (this.color = i.OptionsColor.create(this.color, e.color)),
                                void 0 !== e.enable && (this.enable = e.enable),
                                void 0 !== e.offset && (void 0 !== e.offset.x && (this.offset.x = e.offset.x), void 0 !== e.offset.y && (this.offset.y = e.offset.y)));
                        }),
                        e
                    );
                })();
            t.Shadow = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.color = new i.OptionsColor()), (this.width = 0), (this.opacity = 1), (this.color.value = "#ff0000");
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && ((this.color = i.OptionsColor.create(this.color, e.color)), void 0 !== e.width && (this.width = e.width), void 0 !== e.opacity && (this.opacity = e.opacity));
                        }),
                        e
                    );
                })();
            t.Stroke = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(53),
                r = (function () {
                    function e() {
                        (this.enable = !1), (this.mode = i.CollisionMode.bounce);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode));
                        }),
                        e
                    );
                })();
            t.Collisions = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(183),
                r = (function () {
                    function e() {
                        (this.lines = new i.TwinkleValues()), (this.particles = new i.TwinkleValues());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (this.lines.load(e.lines), this.particles.load(e.particles));
                        }),
                        e
                    );
                })();
            t.Twinkle = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.color && (this.color = i.OptionsColor.create(this.color, e.color)),
                                void 0 !== e.enable && (this.enable = e.enable),
                                void 0 !== e.frequency && (this.frequency = e.frequency),
                                void 0 !== e.opacity && (this.opacity = e.opacity));
                        }),
                        e
                    );
                })();
            t.TwinkleValues = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(185),
                r = n(186),
                o = n(187),
                a = n(188),
                l = (function () {
                    function e() {}
                    return (
                        (e.interact = function (e, t, n) {
                            e.particlesOptions.lineLinked.enable && i.Linker.link(e, t, n),
                                e.particlesOptions.move.attract.enable && r.Attractor.attract(e, t, n),
                                e.particlesOptions.collisions.enable && o.Collider.collide(e, t, n),
                                t.options.infection.enable && a.Infecter.infect(e, t, n);
                        }),
                        e
                    );
                })();
            t.InteractionManager = l;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(7),
                r = n(6),
                o = n(1),
                a = n(8),
                l = (function () {
                    function e() {}
                    return (
                        (e.link = function (e, t, n) {
                            for (
                                var l,
                                    s = e.particlesOptions.lineLinked.opacity,
                                    u = null !== (l = e.lineLinkedDistance) && void 0 !== l ? l : t.retina.lineLinkedDistance,
                                    c = e.getPosition(),
                                    f = 0,
                                    d = t.particles.quadTree.query(new a.Circle(c.x, c.y, u));
                                f < d.length;
                                f++
                            ) {
                                var p = d[f];
                                if (e !== p && p.particlesOptions.lineLinked.enable) {
                                    var h = p.getPosition(),
                                        v = s - (o.Utils.getDistance(c, h) * s) / u;
                                    if (v > 0) {
                                        if (!t.particles.lineLinkedColor) {
                                            var y = e.particlesOptions.lineLinked.color,
                                                m = "string" === typeof y ? y : y.value;
                                            m === r.Constants.randomColorValue
                                                ? e.particlesOptions.lineLinked.consent
                                                    ? (t.particles.lineLinkedColor = i.ColorUtils.colorToRgb({ value: m }))
                                                    : e.particlesOptions.lineLinked.blink
                                                    ? (t.particles.lineLinkedColor = r.Constants.randomColorValue)
                                                    : (t.particles.lineLinkedColor = r.Constants.midColorValue)
                                                : (t.particles.lineLinkedColor = i.ColorUtils.colorToRgb({ value: m }));
                                        }
                                        -1 ==
                                            p.links
                                                .map(function (e) {
                                                    return e.destination;
                                                })
                                                .indexOf(e) &&
                                            -1 ==
                                                e.links
                                                    .map(function (e) {
                                                        return e.destination;
                                                    })
                                                    .indexOf(p) &&
                                            e.links.push({ destination: p, opacity: v });
                                    }
                                }
                            }
                        }),
                        e
                    );
                })();
            t.Linker = l;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(8),
                r = (function () {
                    function e() {}
                    return (
                        (e.attract = function (e, t, n) {
                            for (
                                var r, o = t.options, a = null !== (r = e.lineLinkedDistance) && void 0 !== r ? r : t.retina.lineLinkedDistance, l = e.getPosition(), s = 0, u = t.particles.quadTree.query(new i.Circle(l.x, l.y, a));
                                s < u.length;
                                s++
                            ) {
                                var c = u[s];
                                if (e !== c && !c.particlesOptions.move.attract.enable) {
                                    var f = c.getPosition(),
                                        d = l.x - f.x,
                                        p = l.y - f.y,
                                        h = o.particles.move.attract.rotate,
                                        v = d / (1e3 * h.x),
                                        y = p / (1e3 * h.y);
                                    (e.velocity.horizontal -= v), (e.velocity.vertical -= y), (c.velocity.horizontal += v), (c.velocity.vertical += y);
                                }
                            }
                        }),
                        e
                    );
                })();
            t.Attractor = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(1),
                r = n(53),
                o = n(8),
                a = (function () {
                    function e() {}
                    return (
                        (e.collide = function (e, t, n) {
                            for (var r = e.getPosition(), a = 0, l = t.particles.quadTree.query(new o.Circle(r.x, r.y, 2 * e.size.value)); a < l.length; a++) {
                                var s = l[a];
                                if (e !== s && s.particlesOptions.collisions.enable && e.particlesOptions.collisions.mode === s.particlesOptions.collisions.mode) {
                                    var u = s.getPosition(),
                                        c = i.Utils.getDistance(r, u),
                                        f = t.retina.sizeValue;
                                    c <= this.getRadius(e, f) + this.getRadius(s, f) && this.resolveCollision(e, s);
                                }
                            }
                        }),
                        (e.getRadius = function (e, t) {
                            return e.bubble.radius || e.size.value || t;
                        }),
                        (e.resolveCollision = function (e, t) {
                            var n = e.getPosition(),
                                i = t.getPosition();
                            switch (e.particlesOptions.collisions.mode) {
                                case r.CollisionMode.bounce:
                                    var o = e.velocity.horizontal - t.velocity.horizontal,
                                        a = e.velocity.vertical - t.velocity.vertical;
                                    if (o * (i.x - n.x) + a * (i.y - n.y) >= 0) {
                                        var l = -Math.atan2(i.y - n.y, i.x - n.x),
                                            s = e.size.value,
                                            u = t.size.value,
                                            c = this.rotate(e.velocity, l),
                                            f = this.rotate(t.velocity, l),
                                            d = { horizontal: (c.horizontal * (s - u)) / (s + u) + (2 * f.horizontal * u) / (s + u), vertical: c.vertical },
                                            p = { horizontal: (f.horizontal * (s - u)) / (s + u) + (2 * c.horizontal * u) / (s + u), vertical: f.vertical },
                                            h = this.rotate(d, -l),
                                            v = this.rotate(p, -l);
                                        (e.velocity.horizontal = h.horizontal), (e.velocity.vertical = h.vertical), (t.velocity.horizontal = v.horizontal), (t.velocity.vertical = v.vertical);
                                    }
                            }
                        }),
                        (e.rotate = function (e, t) {
                            return { horizontal: e.horizontal * Math.cos(t) - e.vertical * Math.sin(t), vertical: e.horizontal * Math.sin(t) + e.vertical * Math.cos(t) };
                        }),
                        e
                    );
                })();
            t.Collider = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(8),
                r = (function () {
                    function e() {}
                    return (
                        (e.infect = function (e, t, n) {
                            var r, o;
                            if ((e.updateInfection(n), void 0 !== e.infectionStage)) {
                                var a = t.options.infection;
                                if (a.enable && !(a.stages.length < 1))
                                    for (
                                        var l = a.stages[e.infectionStage],
                                            s = t.retina.pixelRatio,
                                            u = 2 * e.size.value + l.radius * s,
                                            c = e.getPosition(),
                                            f = null !== (r = l.infectedStage) && void 0 !== r ? r : e.infectionStage,
                                            d = t.particles.quadTree.query(new i.Circle(c.x, c.y, u)).filter(function (t) {
                                                return void 0 === t.infectionStage || t.infectionStage !== e.infectionStage;
                                            }),
                                            p = l.rate,
                                            h = d.length,
                                            v = 0,
                                            y = d;
                                        v < y.length;
                                        v++
                                    ) {
                                        var m = y[v];
                                        if (Math.random() < p / h)
                                            if (void 0 === m.infectionStage) m.startInfection(f);
                                            else if (m.infectionStage < e.infectionStage) m.updateInfectionStage(f);
                                            else if (m.infectionStage > e.infectionStage) {
                                                var b = a.stages[m.infectionStage],
                                                    g = null !== (o = null === b || void 0 === b ? void 0 : b.infectedStage) && void 0 !== o ? o : m.infectionStage;
                                                e.updateInfectionStage(g);
                                            }
                                    }
                            }
                        }),
                        e
                    );
                })();
            t.Infecter = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(6),
                r = n(1),
                o = n(8),
                a = (function () {
                    function e() {}
                    return (
                        (e.grab = function (e, t) {
                            var n = e.options.interactivity;
                            if (n.events.onHover.enable && e.interactivity.status === i.Constants.mouseMoveEvent) {
                                var a = e.interactivity.mouse.position;
                                if (void 0 === a) return;
                                for (var l = e.retina.grabModeDistance, s = 0, u = e.particles.quadTree.query(new o.Circle(a.x, a.y, l)); s < u.length; s++) {
                                    var c = u[s],
                                        f = c.getPosition(),
                                        d = r.Utils.getDistance(f, a);
                                    if (d <= e.retina.grabModeDistance) {
                                        var p = n.modes.grab.lineLinked.opacity,
                                            h = p - (d * p) / e.retina.grabModeDistance;
                                        h > 0 && e.canvas.drawGrabLine(c, h, a);
                                    }
                                }
                            }
                        }),
                        e
                    );
                })();
            t.Grabber = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(4),
                r = n(10),
                o = n(13),
                a = n(1),
                l = n(30),
                s = n(6),
                u = n(8),
                c = (function () {
                    function e() {}
                    return (
                        (e.repulse = function (e, t) {
                            var n = e.options.interactivity,
                                o = n.events.onHover.enable,
                                u = n.events.onClick.enable,
                                c = e.interactivity.status === s.Constants.mouseMoveEvent,
                                f = n.events.onHover.mode,
                                d = n.events.onClick.mode,
                                p = n.events.onDiv.mode;
                            c && o && a.Utils.isInArray(r.HoverMode.repulse, f)
                                ? this.hoverRepulse(e)
                                : u && a.Utils.isInArray(i.ClickMode.repulse, d)
                                ? this.clickRepulse(e)
                                : n.events.onDiv.enable && a.Utils.isInArray(l.DivMode.repulse, p) && this.divRepulse(e);
                        }),
                        (e.divRepulse = function (e) {
                            var t = e.options,
                                n = document.getElementById(t.interactivity.events.onDiv.elementId);
                            if (n) {
                                var i = { x: n.offsetLeft + n.offsetWidth / 2, y: n.offsetTop + n.offsetHeight / 2 },
                                    r = n.offsetWidth / 2;
                                e.retina.isRetina && ((i.x *= e.retina.pixelRatio), (i.y *= e.retina.pixelRatio), (r *= e.retina.pixelRatio));
                                var o = r;
                                this.processRepulse(e, i, o);
                            }
                        }),
                        (e.hoverRepulse = function (e) {
                            var t = e.interactivity.mouse.position;
                            if (t) {
                                var n = e.retina.repulseModeDistance;
                                this.processRepulse(e, t, n);
                            }
                        }),
                        (e.processRepulse = function (e, t, n) {
                            for (var i = 0, r = e.particles.quadTree.query(new u.Circle(t.x, t.y, n)); i < r.length; i++) {
                                var l = r[i],
                                    s = l.position.x - t.x,
                                    c = l.position.y - t.y,
                                    f = Math.sqrt(s * s + c * c),
                                    d = { x: s / f, y: c / f },
                                    p = 100 * e.options.interactivity.modes.repulse.speed,
                                    h = a.Utils.clamp((1 - Math.pow(f / n, 2)) * p, 0, 50),
                                    v = l.particlesOptions.move.outMode,
                                    y = l.size.value,
                                    m = { x: l.position.x + d.x * h, y: l.position.y + d.y * h };
                                if (v === o.OutMode.bounce || v === o.OutMode.bounceVertical || v === o.OutMode.bounceHorizontal) {
                                    var b = { horizontal: m.x - y > 0 && m.x + y < e.canvas.size.width, vertical: m.y - y > 0 && m.y + y < e.canvas.size.height };
                                    (v === o.OutMode.bounceVertical || b.horizontal) && (l.position.x = m.x), (v === o.OutMode.bounceHorizontal || b.vertical) && (l.position.y = m.y);
                                } else (l.position.x = m.x), (l.position.y = m.y);
                            }
                        }),
                        (e.clickRepulse = function (e) {
                            if ((e.repulse.finish || (e.repulse.count || (e.repulse.count = 0), e.repulse.count++, e.repulse.count === e.particles.count && (e.repulse.finish = !0)), e.repulse.clicking)) {
                                var t = e.retina.repulseModeDistance,
                                    n = Math.pow(t / 6, 3),
                                    i = e.interactivity.mouse.clickPosition;
                                if (void 0 === i) return;
                                for (var r = new u.Circle(i.x, i.y, n), o = 0, a = e.particles.quadTree.query(r); o < a.length; o++) {
                                    if (void 0 !== (null === (h = a[o]) || void 0 === h ? void 0 : h.position)) {
                                        var l = i.x - h.position.x,
                                            s = i.y - h.position.y,
                                            c = l * l + s * s,
                                            f = (-n * e.options.interactivity.modes.repulse.speed) / c;
                                        c <= n && (e.repulse.particles.push(h), this.processClickRepulse(e, h, l, s, f));
                                    }
                                }
                            } else if (!1 === e.repulse.clicking) {
                                for (var d = 0, p = e.repulse.particles; d < p.length; d++) {
                                    var h;
                                    ((h = p[d]).velocity.horizontal = h.initialVelocity.horizontal), (h.velocity.vertical = h.initialVelocity.vertical);
                                }
                                e.repulse.particles = [];
                            }
                        }),
                        (e.processClickRepulse = function (e, t, n, i, r) {
                            var a = e.options,
                                l = Math.atan2(i, n);
                            (t.velocity.horizontal = r * Math.cos(l)), (t.velocity.vertical = r * Math.sin(l));
                            var s = a.particles.move.outMode;
                            if (s === o.OutMode.bounce || s === o.OutMode.bounceHorizontal || s === o.OutMode.bounceVertical) {
                                var u = { x: t.position.x + t.velocity.horizontal, y: t.position.y + t.velocity.vertical };
                                s !== o.OutMode.bounceVertical && (u.x + t.size.value > e.canvas.size.width || u.x - t.size.value < 0) && (t.velocity.horizontal = -t.velocity.horizontal),
                                    s !== o.OutMode.bounceHorizontal && (u.y + t.size.value > e.canvas.size.height || u.y - t.size.value < 0) && (t.velocity.vertical = -t.velocity.vertical);
                            }
                        }),
                        e
                    );
                })();
            t.Repulser = c;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(55),
                r = n(1),
                o = n(10),
                a = n(4),
                l = n(6),
                s = n(7),
                u = n(8),
                c = (function () {
                    function e() {}
                    return (
                        (e.reset = function (e) {
                            delete e.bubble.opacity, delete e.bubble.radius, delete e.bubble.color;
                        }),
                        (e.bubble = function (e, t) {
                            var n = e.options.interactivity.events,
                                i = n.onHover,
                                l = n.onClick,
                                s = i.enable,
                                u = i.mode,
                                c = l.enable,
                                f = l.mode;
                            s && r.Utils.isInArray(o.HoverMode.bubble, u) ? this.hoverBubble(e) : c && r.Utils.isInArray(a.ClickMode.bubble, f) && this.clickBubble(e);
                        }),
                        (e.process = function (e, t, n, r, o) {
                            var a = o.bubbleObj.optValue;
                            if (void 0 !== a) {
                                var l = e.options.interactivity.modes.bubble.duration,
                                    s = e.retina.bubbleModeDistance,
                                    u = o.particlesObj.optValue,
                                    c = o.bubbleObj.value,
                                    f = o.particlesObj.value || 0,
                                    d = o.type;
                                if (a !== u)
                                    if (e.bubble.durationEnd) c && (d === i.ProcessBubbleType.size && delete t.bubble.radius, d === i.ProcessBubbleType.opacity && delete t.bubble.opacity);
                                    else if (n <= s) {
                                        if ((null !== c && void 0 !== c ? c : f) !== a) {
                                            var p = f - (r * (f - a)) / l;
                                            d === i.ProcessBubbleType.size && (t.bubble.radius = p), d === i.ProcessBubbleType.opacity && (t.bubble.opacity = p);
                                        }
                                    } else d === i.ProcessBubbleType.size && delete t.bubble.radius, d === i.ProcessBubbleType.opacity && delete t.bubble.opacity;
                            }
                        }),
                        (e.clickBubble = function (e) {
                            var t,
                                n = e.options,
                                o = e.interactivity.mouse.clickPosition;
                            if (void 0 !== o)
                                for (var a = e.retina.bubbleModeDistance, l = 0, s = e.particles.quadTree.query(new u.Circle(o.x, o.y, a)); l < s.length; l++) {
                                    var c = s[l],
                                        f = c.getPosition(),
                                        d = r.Utils.getDistance(f, o),
                                        p = (new Date().getTime() - (e.interactivity.mouse.clickTime || 0)) / 1e3;
                                    if (e.bubble.clicking) {
                                        p > n.interactivity.modes.bubble.duration && (e.bubble.durationEnd = !0), p > 2 * n.interactivity.modes.bubble.duration && ((e.bubble.clicking = !1), (e.bubble.durationEnd = !1));
                                        var h = {
                                            bubbleObj: { optValue: e.retina.bubbleModeSize, value: c.bubble.radius },
                                            particlesObj: { optValue: null !== (t = c.sizeValue) && void 0 !== t ? t : e.retina.sizeValue, value: c.size.value },
                                            type: i.ProcessBubbleType.size,
                                        };
                                        this.process(e, c, d, p, h);
                                        var v = {
                                            bubbleObj: { optValue: n.interactivity.modes.bubble.opacity, value: c.bubble.opacity },
                                            particlesObj: { optValue: c.particlesOptions.opacity.value, value: c.opacity.value },
                                            type: i.ProcessBubbleType.opacity,
                                        };
                                        this.process(e, c, d, p, v), e.bubble.durationEnd ? delete c.bubble.color : d <= e.retina.bubbleModeDistance ? this.hoverBubbleColor(e, c) : delete c.bubble.color;
                                    }
                                }
                        }),
                        (e.hoverBubble = function (e) {
                            var t = e.interactivity.mouse.position;
                            if (void 0 !== t)
                                for (var n = e.retina.bubbleModeDistance, i = 0, o = e.particles.quadTree.query(new u.Circle(t.x, t.y, n)); i < o.length; i++) {
                                    var a = o[i],
                                        s = a.getPosition(),
                                        c = r.Utils.getDistance(s, t),
                                        f = 1 - c / e.retina.bubbleModeDistance;
                                    c <= e.retina.bubbleModeDistance
                                        ? f >= 0 && e.interactivity.status === l.Constants.mouseMoveEvent && (this.hoverBubbleSize(e, a, f), this.hoverBubbleOpacity(e, a, f), this.hoverBubbleColor(e, a))
                                        : this.reset(a),
                                        e.interactivity.status === l.Constants.mouseLeaveEvent && this.reset(a);
                                }
                        }),
                        (e.hoverBubbleSize = function (e, t, n) {
                            var i,
                                r = e.retina.bubbleModeSize;
                            if (void 0 !== r) {
                                var o = null !== (i = t.sizeValue) && void 0 !== i ? i : e.retina.sizeValue,
                                    a = t.size.value,
                                    l = this.calculateBubbleValue(a, r, o, n);
                                void 0 !== l && (t.bubble.radius = l);
                            }
                        }),
                        (e.hoverBubbleOpacity = function (e, t, n) {
                            var i = e.options.interactivity.modes.bubble.opacity;
                            if (void 0 !== i) {
                                var r = t.particlesOptions.opacity.value,
                                    o = t.opacity.value,
                                    a = this.calculateBubbleValue(o, i, r, n);
                                void 0 !== a && (t.bubble.opacity = a);
                            }
                        }),
                        (e.calculateBubbleValue = function (e, t, n, i) {
                            if (t > n) {
                                var o = e + (t - n) * i;
                                return r.Utils.clamp(o, e, t);
                            }
                            if (t < n) {
                                o = e - (n - t) * i;
                                return r.Utils.clamp(o, t, e);
                            }
                        }),
                        (e.hoverBubbleColor = function (e, t) {
                            var n = e.options;
                            if (void 0 === t.bubble.color) {
                                var i = n.interactivity.modes.bubble.color;
                                if (void 0 === i) return;
                                t.bubble.color = s.ColorUtils.colorToRgb(i instanceof Array ? r.Utils.itemFromArray(i) : i);
                            }
                        }),
                        e
                    );
                })();
            t.Bubbler = c;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(8),
                r = (function () {
                    function e() {}
                    return (
                        (e.connect = function (e, t) {
                            if (e.options.interactivity.events.onHover.enable && "mousemove" == e.interactivity.status) {
                                var n = e.interactivity.mouse.position;
                                if (!n) return;
                                for (var r = Math.abs(e.retina.connectModeRadius), o = e.particles.quadTree.query(new i.Circle(n.x, n.y, r)), a = 0, l = 0, s = o; l < s.length; l++) {
                                    for (var u = s[l], c = u.getPosition(), f = 0, d = o.slice(a + 1); f < d.length; f++) {
                                        var p = d[f],
                                            h = p.getPosition(),
                                            v = Math.abs(e.retina.connectModeDistance),
                                            y = Math.abs(c.x - h.x),
                                            m = Math.abs(c.y - h.y);
                                        y < v && m < v && e.canvas.drawConnectLine(u, p);
                                    }
                                    ++a;
                                }
                            }
                        }),
                        e
                    );
                })();
            t.Connector = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(56),
                r = (function () {
                    function e(e, t) {
                        (this.rectangle = e), (this.capacity = t), (this.points = []), (this.divided = !1);
                    }
                    return (
                        (e.prototype.subdivide = function () {
                            var t = this.rectangle.position.x,
                                n = this.rectangle.position.y,
                                r = this.rectangle.size.width,
                                o = this.rectangle.size.height;
                            (this.northEast = new e(new i.Rectangle(t, n, r / 2, o / 2), this.capacity)),
                                (this.northWest = new e(new i.Rectangle(t + r / 2, n, r / 2, o / 2), this.capacity)),
                                (this.southEast = new e(new i.Rectangle(t, n + o / 2, r / 2, o / 2), this.capacity)),
                                (this.southWest = new e(new i.Rectangle(t + r / 2, n + o / 2, r / 2, o / 2), this.capacity)),
                                (this.divided = !0);
                        }),
                        (e.prototype.insert = function (e) {
                            var t, n, i, r;
                            return (
                                !!this.rectangle.contains(e.position) &&
                                (this.points.length < this.capacity
                                    ? (this.points.push(e), !0)
                                    : (this.divided || this.subdivide(),
                                      !!(null === (t = this.northEast) || void 0 === t ? void 0 : t.insert(e)) ||
                                          !!(null === (n = this.northWest) || void 0 === n ? void 0 : n.insert(e)) ||
                                          !!(null === (i = this.southEast) || void 0 === i ? void 0 : i.insert(e)) ||
                                          !!(null === (r = this.southWest) || void 0 === r ? void 0 : r.insert(e))))
                            );
                        }),
                        (e.prototype.query = function (e, t) {
                            var n,
                                i,
                                r,
                                o,
                                a = null !== t && void 0 !== t ? t : [];
                            if (!e.intersects(this.rectangle)) return [];
                            for (var l = 0, s = this.points; l < s.length; l++) {
                                var u = s[l];
                                e.contains(u.position) && a.push(u.particle);
                            }
                            return (
                                this.divided &&
                                    (null === (n = this.northEast) || void 0 === n || n.query(e, a),
                                    null === (i = this.northWest) || void 0 === i || i.query(e, a),
                                    null === (r = this.southEast) || void 0 === r || r.query(e, a),
                                    null === (o = this.southWest) || void 0 === o || o.query(e, a)),
                                a
                            );
                        }),
                        e
                    );
                })();
            t.QuadTree = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function (e, t, n) {
                (this.position = { x: e, y: t }), (this.particle = n);
            };
            t.Point = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e) {
                    (this.container = e),
                        (this.isRetina = !1),
                        (this.bubbleModeDistance = 0),
                        (this.bubbleModeSize = 0),
                        (this.connectModeDistance = 0),
                        (this.connectModeRadius = 0),
                        (this.grabModeDistance = 0),
                        (this.repulseModeDistance = 0),
                        (this.slowModeRadius = 0),
                        (this.lineLinkedDistance = 0),
                        (this.lineLinkedWidth = 0),
                        (this.moveSpeed = 0),
                        (this.sizeValue = 0),
                        (this.sizeAnimationSpeed = 0),
                        (this.polygonMaskMoveRadius = 0),
                        (this.pixelRatio = 1);
                }
                return (
                    (e.prototype.init = function () {
                        var e,
                            t = this.container,
                            n = t.options;
                        n.detectRetina && window.devicePixelRatio > 1 ? ((this.pixelRatio = window.devicePixelRatio), (this.isRetina = !0)) : ((this.pixelRatio = 1), (this.isRetina = !1));
                        var i = this.pixelRatio;
                        if (t.canvas.element) {
                            var r = t.canvas.element;
                            (t.canvas.size.width = r.offsetWidth * i), (t.canvas.size.height = r.offsetHeight * i);
                        }
                        var o = n.particles;
                        (this.lineLinkedDistance = o.lineLinked.distance * i),
                            (this.lineLinkedWidth = o.lineLinked.width * i),
                            (this.moveSpeed = o.move.speed * i),
                            (this.sizeValue = o.size.value * i),
                            (this.sizeAnimationSpeed = o.size.animation.speed * i);
                        var a = n.interactivity;
                        (this.connectModeDistance = a.modes.connect.distance * i),
                            (this.connectModeRadius = a.modes.connect.radius * i),
                            (this.grabModeDistance = a.modes.grab.distance * i),
                            (this.repulseModeDistance = a.modes.repulse.distance * i),
                            (this.slowModeRadius = a.modes.slow.radius * i),
                            (this.bubbleModeDistance = a.modes.bubble.distance * i),
                            (this.bubbleModeSize = null !== (e = a.modes.bubble.size) && void 0 !== e ? e : this.sizeValue * i),
                            (this.polygonMaskMoveRadius = n.polygon.move.radius * i);
                    }),
                    (e.prototype.initParticle = function (e) {
                        var t = e.particlesOptions,
                            n = this.pixelRatio;
                        (e.lineLinkedDistance = t.lineLinked.distance * n),
                            (e.lineLinkedWidth = t.lineLinked.width * n),
                            (e.moveSpeed = t.move.speed * n),
                            (e.sizeValue = t.size.value * n),
                            "boolean" !== typeof t.size.random && (e.randomMinimumSize = t.size.random.minimumValue),
                            (e.sizeAnimationSpeed = t.size.animation.speed * n);
                    }),
                    (e.prototype.reset = function () {}),
                    e
                );
            })();
            t.Retina = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e) {
                    this.container = e;
                }
                return (
                    (e.prototype.nextFrame = function (e) {
                        var t = this.container,
                            n = t.options,
                            i = n.fpsLimit > 0 ? n.fpsLimit : 60;
                        if (void 0 !== t.lastFrameTime && e < t.lastFrameTime + 1e3 / i) t.draw();
                        else {
                            var r = e - t.lastFrameTime;
                            (t.lastFrameTime = e), t.particles.draw(r), n.particles.move.enable && t.getAnimationStatus() && t.draw();
                        }
                    }),
                    e
                );
            })();
            t.FrameManager = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(24),
                r = n(198),
                o = n(203),
                a = n(10),
                l = (function () {
                    function e() {
                        (this.detectsOn = i.InteractivityDetect.canvas), (this.events = new r.Events()), (this.modes = new o.Modes());
                    }
                    return (
                        Object.defineProperty(e.prototype, "detect_on", {
                            get: function () {
                                return this.detectsOn;
                            },
                            set: function (e) {
                                this.detectsOn = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t, n, i;
                            if (void 0 !== e) {
                                var r = null !== (t = e.detectsOn) && void 0 !== t ? t : e.detect_on;
                                void 0 !== r && (this.detectsOn = r),
                                    this.events.load(e.events),
                                    this.modes.load(e.modes),
                                    !0 === (null === (i = null === (n = e.modes) || void 0 === n ? void 0 : n.slow) || void 0 === i ? void 0 : i.active) &&
                                        (this.events.onHover.mode instanceof Array
                                            ? this.events.onHover.mode.indexOf(a.HoverMode.slow) < 0 && this.events.onHover.mode.push(a.HoverMode.slow)
                                            : this.events.onHover.mode !== a.HoverMode.slow && (this.events.onHover.mode = [this.events.onHover.mode, a.HoverMode.slow]));
                            }
                        }),
                        e
                    );
                })();
            t.Interactivity = l;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(199),
                r = n(200),
                o = n(201),
                a = (function () {
                    function e() {
                        (this.onClick = new i.ClickEvent()), (this.onDiv = new r.DivEvent()), (this.onHover = new o.HoverEvent()), (this.resize = !0);
                    }
                    return (
                        Object.defineProperty(e.prototype, "onclick", {
                            get: function () {
                                return this.onClick;
                            },
                            set: function (e) {
                                this.onClick = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "ondiv", {
                            get: function () {
                                return this.onDiv;
                            },
                            set: function (e) {
                                this.onDiv = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "onhover", {
                            get: function () {
                                return this.onHover;
                            },
                            set: function (e) {
                                this.onHover = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t, n, i;
                            void 0 !== e &&
                                (this.onClick.load(null !== (t = e.onClick) && void 0 !== t ? t : e.onclick),
                                this.onDiv.load(null !== (n = e.onDiv) && void 0 !== n ? n : e.ondiv),
                                this.onHover.load(null !== (i = e.onHover) && void 0 !== i ? i : e.onhover),
                                void 0 !== e.resize && (this.resize = e.resize));
                        }),
                        e
                    );
                })();
            t.Events = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.mode = []);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode));
                    }),
                    e
                );
            })();
            t.ClickEvent = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.elementId = ""), (this.enable = !1), (this.mode = []);
                }
                return (
                    Object.defineProperty(e.prototype, "el", {
                        get: function () {
                            return this.elementId;
                        },
                        set: function (e) {
                            this.elementId = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t;
                        if (void 0 !== e) {
                            var n = null !== (t = e.elementId) && void 0 !== t ? t : e.el;
                            void 0 !== n && (this.elementId = n), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode);
                        }
                    }),
                    e
                );
            })();
            t.DivEvent = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(202),
                r = (function () {
                    function e() {
                        (this.enable = !1), (this.mode = []), (this.parallax = new i.Parallax());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), this.parallax.load(e.parallax));
                        }),
                        e
                    );
                })();
            t.HoverEvent = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.force = 2), (this.smooth = 10);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.force && (this.force = e.force), void 0 !== e.smooth && (this.smooth = e.smooth));
                    }),
                    e
                );
            })();
            t.Parallax = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(204),
                r = n(205),
                o = n(207),
                a = n(209),
                l = n(210),
                s = n(211),
                u = n(212),
                c = n(58),
                f = n(61),
                d = (function () {
                    function e() {
                        (this.absorbers = []),
                            (this.bubble = new i.Bubble()),
                            (this.connect = new r.Connect()),
                            (this.emitters = []),
                            (this.grab = new o.Grab()),
                            (this.push = new l.Push()),
                            (this.remove = new a.Remove()),
                            (this.repulse = new s.Repulse()),
                            (this.slow = new u.Slow());
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (this.bubble.load(e.bubble),
                                this.connect.load(e.connect),
                                this.grab.load(e.grab),
                                this.push.load(e.push),
                                this.remove.load(e.remove),
                                this.repulse.load(e.repulse),
                                this.slow.load(e.slow),
                                void 0 !== e.emitters &&
                                    (e.emitters instanceof Array
                                        ? (this.emitters = e.emitters.map(function (e) {
                                              var t = new c.Emitter();
                                              return t.load(e), t;
                                          }))
                                        : (this.emitters instanceof Array && (this.emitters = new c.Emitter()), this.emitters.load(e.emitters))),
                                void 0 !== e.absorbers &&
                                    (e.absorbers instanceof Array
                                        ? (this.absorbers = e.absorbers.map(function (e) {
                                              var t = new f.Absorber();
                                              return t.load(e), t;
                                          }))
                                        : (this.absorbers instanceof Array && (this.absorbers = new f.Absorber()), this.absorbers.load(e.absorbers))));
                        }),
                        e
                    );
                })();
            t.Modes = d;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.distance = 200), (this.duration = 0.4);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.distance && (this.distance = e.distance),
                                void 0 !== e.duration && (this.duration = e.duration),
                                void 0 !== e.opacity && (this.opacity = e.opacity),
                                void 0 !== e.color &&
                                    (e.color instanceof Array
                                        ? (this.color = e.color.map(function (e) {
                                              return i.OptionsColor.create(void 0, e);
                                          }))
                                        : (this.color instanceof Array && (this.color = new i.OptionsColor()), (this.color = i.OptionsColor.create(this.color, e.color)))),
                                void 0 !== e.size && (this.size = e.size));
                        }),
                        e
                    );
                })();
            t.Bubble = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(206),
                r = (function () {
                    function e() {
                        (this.distance = 80), (this.lineLinked = new i.ConnectLineLinked()), (this.radius = 60);
                    }
                    return (
                        Object.defineProperty(e.prototype, "line_linked", {
                            get: function () {
                                return this.lineLinked;
                            },
                            set: function (e) {
                                this.lineLinked = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), this.lineLinked.load(null !== (t = e.lineLinked) && void 0 !== t ? t : e.line_linked), void 0 !== e.radius && (this.radius = e.radius));
                        }),
                        e
                    );
                })();
            t.Connect = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    this.opacity = 0.5;
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && void 0 !== e.opacity && (this.opacity = e.opacity);
                    }),
                    e
                );
            })();
            t.ConnectLineLinked = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(208),
                r = (function () {
                    function e() {
                        (this.distance = 100), (this.lineLinked = new i.GrabLineLinked());
                    }
                    return (
                        Object.defineProperty(e.prototype, "line_linked", {
                            get: function () {
                                return this.lineLinked;
                            },
                            set: function (e) {
                                this.lineLinked = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), this.lineLinked.load(null !== (t = e.lineLinked) && void 0 !== t ? t : e.line_linked));
                        }),
                        e
                    );
                })();
            t.Grab = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    this.opacity = 1;
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && void 0 !== e.opacity && (this.opacity = e.opacity);
                    }),
                    e
                );
            })();
            t.GrabLineLinked = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    this.quantity = 2;
                }
                return (
                    Object.defineProperty(e.prototype, "particles_nb", {
                        get: function () {
                            return this.quantity;
                        },
                        set: function (e) {
                            this.quantity = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t;
                        if (void 0 !== e) {
                            var n = null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
                            void 0 !== n && (this.quantity = n);
                        }
                    }),
                    e
                );
            })();
            t.Remove = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    this.quantity = 4;
                }
                return (
                    Object.defineProperty(e.prototype, "particles_nb", {
                        get: function () {
                            return this.quantity;
                        },
                        set: function (e) {
                            this.quantity = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        var t;
                        if (void 0 !== e) {
                            var n = null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
                            void 0 !== n && (this.quantity = n);
                        }
                    }),
                    e
                );
            })();
            t.Push = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.distance = 200), (this.duration = 0.4), (this.speed = 1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.duration && (this.duration = e.duration), void 0 !== e.speed && (this.speed = e.speed));
                    }),
                    e
                );
            })();
            t.Repulse = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.factor = 3), (this.radius = 200);
                }
                return (
                    Object.defineProperty(e.prototype, "active", {
                        get: function () {
                            return !1;
                        },
                        set: function (e) {},
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.factor && (this.factor = e.factor), void 0 !== e.radius && (this.radius = e.radius));
                    }),
                    e
                );
            })();
            t.Slow = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.quantity = 1), (this.delay = 0.1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.quantity && (this.quantity = e.quantity), void 0 !== e.delay && (this.delay = e.delay));
                    }),
                    e
                );
            })();
            t.EmitterRate = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.count && (this.count = e.count), void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.duration && (this.duration = e.duration));
                    }),
                    e
                );
            })();
            t.EmitterLife = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(216),
                r = (function () {
                    function e() {
                        (this.density = 5), (this.random = new i.AbsorberRandomSize()), (this.value = 50);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.density && (this.density = e.density),
                                void 0 !== e.value && (this.value = e.value),
                                void 0 !== e.random && ("boolean" === typeof e.random ? this.random.load({ enable: e.random }) : this.random.load(e.random)),
                                void 0 !== e.limit && (this.limit = e.limit));
                        }),
                        e
                    );
                })();
            t.AbsorberSize = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {
                    (this.enable = !1), (this.minimumValue = 1);
                }
                return (
                    (e.prototype.load = function (e) {
                        void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue));
                    }),
                    e
                );
            })();
            t.AbsorberRandomSize = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(12),
                r = n(218),
                o = n(220),
                a = n(221),
                l = (function () {
                    function e() {
                        (this.draw = new r.Draw()), (this.enable = !1), (this.inline = new a.PolygonInline()), (this.move = new o.Move()), (this.scale = 1), (this.type = i.PolygonMaskType.none), (this.url = "");
                    }
                    return (
                        Object.defineProperty(e.prototype, "inlineArrangement", {
                            get: function () {
                                return this.inline.arrangement;
                            },
                            set: function (e) {
                                this.inline.arrangement = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                this.draw.load(e.draw);
                                var n = null !== (t = e.inline) && void 0 !== t ? t : { arrangement: e.inlineArrangement };
                                void 0 !== n && this.inline.load(n),
                                    this.move.load(e.move),
                                    void 0 !== e.scale && (this.scale = e.scale),
                                    void 0 !== e.type && (this.type = e.type),
                                    void 0 !== e.enable ? (this.enable = e.enable) : (this.enable = this.type !== i.PolygonMaskType.none),
                                    void 0 !== e.url && (this.url = e.url),
                                    void 0 !== e.position && (this.position = { x: e.position.x, y: e.position.y });
                            }
                        }),
                        e
                    );
                })();
            t.PolygonMask = l;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(219),
                r = n(3),
                o = (function () {
                    function e() {
                        (this.enable = !1), (this.stroke = new i.PolygonMaskDrawStroke());
                    }
                    return (
                        Object.defineProperty(e.prototype, "lineWidth", {
                            get: function () {
                                return this.stroke.width;
                            },
                            set: function (e) {
                                this.stroke.width = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "lineColor", {
                            get: function () {
                                return this.stroke.color;
                            },
                            set: function (e) {
                                this.stroke.color = r.OptionsColor.create(this.stroke.color, e);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.load = function (e) {
                            var t;
                            if (void 0 !== e) {
                                void 0 !== e.enable && (this.enable = e.enable);
                                var n = null !== (t = e.stroke) && void 0 !== t ? t : { color: e.lineColor, width: e.lineWidth };
                                this.stroke.load(n);
                            }
                        }),
                        e
                    );
                })();
            t.Draw = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = n(7),
                o = (function () {
                    function e() {
                        (this.color = new i.OptionsColor()), (this.width = 0.5), (this.opacity = 1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            var t;
                            void 0 !== e &&
                                ((this.color = i.OptionsColor.create(this.color, e.color)),
                                "string" === typeof this.color.value && (this.opacity = null !== (t = r.ColorUtils.stringToAlpha(this.color.value)) && void 0 !== t ? t : this.opacity),
                                void 0 !== e.opacity && (this.opacity = e.opacity),
                                void 0 !== e.width && (this.width = e.width));
                        }),
                        e
                    );
                })();
            t.PolygonMaskDrawStroke = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(34),
                r = (function () {
                    function e() {
                        (this.radius = 10), (this.type = i.PolygonMaskMoveType.path);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.radius && (this.radius = e.radius), void 0 !== e.type && (this.type = e.type));
                        }),
                        e
                    );
                })();
            t.Move = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(23),
                r = (function () {
                    function e() {
                        this.arrangement = i.PolygonMaskInlineArrangement.onePerPoint;
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && void 0 !== e.arrangement && (this.arrangement = e.arrangement);
                        }),
                        e
                    );
                })();
            t.PolygonInline = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(223),
                r = (function () {
                    function e() {
                        (this.cover = new i.BackgroundMaskCover()), (this.enable = !1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            if (void 0 !== e) {
                                if (void 0 !== e.cover) {
                                    var t = e.cover,
                                        n = "string" === typeof e.cover ? { color: e.cover } : e.cover;
                                    this.cover.load(void 0 !== t.color ? t : { color: n });
                                }
                                void 0 !== e.enable && (this.enable = e.enable);
                            }
                        }),
                        e
                    );
                })();
            t.BackgroundMask = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.color = new i.OptionsColor()), (this.opacity = 1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e && (void 0 !== e.color && (this.color = i.OptionsColor.create(this.color, e.color)), void 0 !== e.opacity && (this.opacity = e.opacity));
                        }),
                        e
                    );
                })();
            t.BackgroundMaskCover = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {}
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.color && (this.color = i.OptionsColor.create(this.color, e.color)),
                                void 0 !== e.image && (this.image = e.image),
                                void 0 !== e.position && (this.position = e.position),
                                void 0 !== e.repeat && (this.repeat = e.repeat),
                                void 0 !== e.size && (this.size = e.size),
                                void 0 !== e.opacity && (this.opacity = e.opacity));
                        }),
                        e
                    );
                })();
            t.Background = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(226),
                r = (function () {
                    function e() {
                        (this.cure = !1), (this.delay = 0), (this.enable = !1), (this.infections = 0), (this.stages = []);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.cure && (this.cure = e.cure),
                                void 0 !== e.delay && (this.delay = e.delay),
                                void 0 !== e.enable && (this.enable = e.enable),
                                void 0 !== e.infections && (this.infections = e.infections),
                                void 0 !== e.stages &&
                                    (this.stages = e.stages.map(function (e) {
                                        var t = new i.InfectionStage();
                                        return t.load(e), t;
                                    })));
                        }),
                        e
                    );
                })();
            t.Infection = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(3),
                r = (function () {
                    function e() {
                        (this.color = new i.OptionsColor()), (this.color.value = "#ff0000"), (this.radius = 0), (this.rate = 1);
                    }
                    return (
                        (e.prototype.load = function (e) {
                            void 0 !== e &&
                                (void 0 !== e.color && (this.color = i.OptionsColor.create(this.color, e.color)),
                                (this.duration = e.duration),
                                (this.infectedStage = e.infectedStage),
                                void 0 !== e.radius && (this.radius = e.radius),
                                void 0 !== e.rate && (this.rate = e.rate));
                        }),
                        e
                    );
                })();
            t.InfectionStage = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = 1 / 6,
                r = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
                o = (function () {
                    function e(e) {
                        var t = null !== e && void 0 !== e ? e : Math.random;
                        (this.p = (function (e) {
                            for (var t = new Uint8Array(256), n = 0; n < 256; n++) t[n] = n;
                            for (n = 0; n < 255; n++) {
                                var i = n + ~~(e() * (256 - n)),
                                    r = t[n];
                                (t[n] = t[i]), (t[i] = r);
                            }
                            return t;
                        })(t)),
                            (this.perm = new Uint8Array(512)),
                            (this.permMod12 = new Uint8Array(512));
                        for (var n = 0; n < 512; n++) (this.perm[n] = this.p[255 & n]), (this.permMod12[n] = this.perm[n] % 12);
                    }
                    return (
                        (e.prototype.noise3D = function (e, t, n) {
                            var o,
                                a,
                                l,
                                s,
                                u,
                                c,
                                f,
                                d,
                                p,
                                h,
                                v = this.permMod12,
                                y = this.perm,
                                m = (e + t + n) * (1 / 3),
                                b = Math.floor(e + m),
                                g = Math.floor(t + m),
                                w = Math.floor(n + m),
                                x = (b + g + w) * i,
                                k = e - (b - x),
                                _ = t - (g - x),
                                P = n - (w - x);
                            k >= _
                                ? _ >= P
                                    ? ((u = 1), (c = 0), (f = 0), (d = 1), (p = 1), (h = 0))
                                    : k >= P
                                    ? ((u = 1), (c = 0), (f = 0), (d = 1), (p = 0), (h = 1))
                                    : ((u = 0), (c = 0), (f = 1), (d = 1), (p = 0), (h = 1))
                                : _ < P
                                ? ((u = 0), (c = 0), (f = 1), (d = 0), (p = 1), (h = 1))
                                : k < P
                                ? ((u = 0), (c = 1), (f = 0), (d = 0), (p = 1), (h = 1))
                                : ((u = 0), (c = 1), (f = 0), (d = 1), (p = 1), (h = 0));
                            var S = k - u + i,
                                T = _ - c + i,
                                O = P - f + i,
                                C = k - d + 2 * i,
                                E = _ - p + 2 * i,
                                M = P - h + 2 * i,
                                z = k - 1 + 0.5,
                                j = _ - 1 + 0.5,
                                A = P - 1 + 0.5,
                                R = 255 & b,
                                I = 255 & g,
                                D = 255 & w,
                                L = 0.6 - k * k - _ * _ - P * P;
                            if (L < 0) o = 0;
                            else {
                                var U = 3 * v[R + y[I + y[D]]];
                                o = (L *= L) * L * (r[U] * k + r[U + 1] * _ + r[U + 2] * P);
                            }
                            var N = 0.6 - S * S - T * T - O * O;
                            if (N < 0) a = 0;
                            else {
                                var F = 3 * v[R + u + y[I + c + y[D + f]]];
                                a = (N *= N) * N * (r[F] * S + r[F + 1] * T + r[F + 2] * O);
                            }
                            var V = 0.6 - C * C - E * E - M * M;
                            if (V < 0) l = 0;
                            else {
                                var B = 3 * v[R + d + y[I + p + y[D + h]]];
                                l = (V *= V) * V * (r[B] * C + r[B + 1] * E + r[B + 2] * M);
                            }
                            var H = 0.6 - z * z - j * j - A * A;
                            if (H < 0) s = 0;
                            else {
                                var q = 3 * v[R + 1 + y[I + 1 + y[D + 1]]];
                                s = (H *= H) * H * (r[q] * z + r[q + 1] * j + r[q + 2] * A);
                            }
                            return 32 * (o + a + l + s);
                        }),
                        e
                    );
                })();
            t.SimplexNoise = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(57);
            t.Options = i.Options;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(230),
                r = n(233),
                o = n(236),
                a = n(238);
            (t.particlesJS = a.particlesJS),
                (t.pJSDom = a.pJSDom),
                (t.tsParticles = a.tsParticles),
                a.tsParticles.addPlugin(new i.AbsorbersPlugin()),
                a.tsParticles.addPlugin(new r.EmittersPlugin()),
                a.tsParticles.addPlugin(new o.PolygonMaskPlugin());
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(231),
                r = n(1),
                o = n(4),
                a = (function () {
                    function e() {
                        this.id = "absorbers";
                    }
                    return (
                        (e.prototype.getPlugin = function (e) {
                            return new i.Absorbers(e);
                        }),
                        (e.prototype.needsPlugin = function (e) {
                            var t = e.options,
                                n = t.absorbers,
                                i = !1;
                            return n instanceof Array ? n.length && (i = !0) : (void 0 !== n || r.Utils.isInArray(o.ClickMode.absorber, t.interactivity.events.onClick.mode)) && (i = !0), i;
                        }),
                        e
                    );
                })();
            t.AbsorbersPlugin = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(232),
                r = n(4),
                o = n(1),
                a = (function () {
                    function e(e) {
                        (this.container = e), (this.array = []);
                    }
                    return (
                        (e.prototype.init = function () {
                            var e = this.container.options;
                            if (e.absorbers instanceof Array)
                                for (var t = 0, n = e.absorbers; t < n.length; t++) {
                                    var r = n[t],
                                        o = new i.Absorber(this, r);
                                    this.addAbsorber(o);
                                }
                            else {
                                (r = e.absorbers), (o = new i.Absorber(this, r));
                                this.addAbsorber(o);
                            }
                        }),
                        (e.prototype.particleUpdate = function (e, t) {
                            for (var n = 0, i = this.array; n < i.length; n++) {
                                if ((i[n].attract(e, t), e.destroyed)) break;
                            }
                        }),
                        (e.prototype.draw = function (e) {
                            for (var t = 0, n = this.array; t < n.length; t++) {
                                var i = n[t];
                                e.save(), i.draw(e), e.restore();
                            }
                        }),
                        (e.prototype.stop = function () {
                            this.array = [];
                        }),
                        (e.prototype.resize = function () {
                            for (var e = 0, t = this.array; e < t.length; e++) {
                                t[e].resize();
                            }
                        }),
                        (e.prototype.handleClickMode = function (e) {
                            var t = this.container,
                                n = t.options;
                            if (e === r.ClickMode.absorber) {
                                var a = void 0,
                                    l = n.interactivity.modes.absorbers;
                                l instanceof Array ? l.length > 0 && (a = o.Utils.itemFromArray(l)) : (a = l);
                                var s = null !== a && void 0 !== a ? a : n.absorbers instanceof Array ? o.Utils.itemFromArray(n.absorbers) : n.absorbers,
                                    u = t.interactivity.mouse.clickPosition,
                                    c = new i.Absorber(this, s, u);
                                this.addAbsorber(c);
                            }
                        }),
                        (e.prototype.addAbsorber = function (e) {
                            this.array.push(e);
                        }),
                        (e.prototype.removeAbsorber = function (e) {
                            var t = this.array.indexOf(e);
                            t >= 0 && this.array.splice(t, 1);
                        }),
                        e
                    );
                })();
            t.Absorbers = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(7),
                r = n(1),
                o = (function () {
                    function e(e, t, n) {
                        var o, a;
                        (this.absorbers = e), (this.container = e.container), (this.initialPosition = n), (this.options = t);
                        var l = this.container,
                            s = t.size.value * l.retina.pixelRatio,
                            u = "boolean" === typeof t.size.random ? t.size.random : t.size.random.enable,
                            c = "boolean" === typeof t.size.random ? 1 : t.size.random.minimumValue;
                        u && (s = r.Utils.randomInRange(c, s)), (this.opacity = this.options.opacity), (this.size = s * l.retina.pixelRatio), (this.mass = this.size * t.size.density);
                        var f = t.size.limit;
                        this.limit = void 0 !== f ? f * l.retina.pixelRatio : f;
                        var d = "string" === typeof t.color ? { value: t.color } : t.color;
                        (this.color = null !== (o = i.ColorUtils.colorToRgb(d)) && void 0 !== o ? o : { b: 0, g: 0, r: 0 }), (this.position = null !== (a = this.initialPosition) && void 0 !== a ? a : this.calcPosition());
                    }
                    return (
                        (e.prototype.attract = function (e, t) {
                            var n = e.getPosition(),
                                i = this.position.x - n.x,
                                r = this.position.y - n.y,
                                o = Math.sqrt(Math.abs(i * i + r * r)),
                                a = Math.atan2(i, r) * (180 / Math.PI),
                                l = this.mass / Math.pow(o, 2);
                            if (o < this.size + e.size.value) {
                                var s = 0.033 * e.size.value;
                                this.size > e.size.value && o < this.size - e.size.value
                                    ? (e.destroyed = !0)
                                    : ((e.size.value -= s), (e.velocity.horizontal += Math.sin(a * (Math.PI / 180)) * l), (e.velocity.vertical += Math.cos(a * (Math.PI / 180)) * l)),
                                    (void 0 === this.limit || this.size < this.limit) && (this.size += s),
                                    (this.mass += s * this.options.size.density);
                            } else (e.velocity.horizontal += Math.sin(a * (Math.PI / 180)) * l), (e.velocity.vertical += Math.cos(a * (Math.PI / 180)) * l);
                        }),
                        (e.prototype.resize = function () {
                            var e = this.initialPosition;
                            this.position = e && r.Utils.isPointInside(e, this.container.canvas.size) ? e : this.calcPosition();
                        }),
                        (e.prototype.draw = function (e) {
                            e.translate(this.position.x, this.position.y), e.beginPath(), e.arc(0, 0, this.size, 0, 2 * Math.PI, !1), e.closePath(), (e.fillStyle = i.ColorUtils.getStyleFromColor(this.color, this.opacity)), e.fill();
                        }),
                        (e.prototype.calcPosition = function () {
                            var e,
                                t = this.container,
                                n = null !== (e = this.options.position) && void 0 !== e ? e : { x: 100 * Math.random(), y: 100 * Math.random() };
                            return { x: (n.x / 100) * t.canvas.size.width, y: (n.y / 100) * t.canvas.size.height };
                        }),
                        e
                    );
                })();
            t.Absorber = o;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(1),
                r = n(4),
                o = n(234),
                a = (function () {
                    function e() {
                        this.id = "emitters";
                    }
                    return (
                        (e.prototype.getPlugin = function (e) {
                            return new o.Emitters(e);
                        }),
                        (e.prototype.needsPlugin = function (e) {
                            var t = e.options,
                                n = t.emitters,
                                o = !1;
                            return n instanceof Array ? n.length && (o = !0) : (void 0 !== n || i.Utils.isInArray(r.ClickMode.absorber, t.interactivity.events.onClick.mode)) && (o = !0), o;
                        }),
                        e
                    );
                })();
            t.EmittersPlugin = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(235),
                r = n(4),
                o = n(1),
                a = (function () {
                    function e(e) {
                        (this.container = e), (this.array = []);
                    }
                    return (
                        (e.prototype.init = function () {
                            var e = this.container.options;
                            if (e.emitters instanceof Array)
                                for (var t = 0, n = e.emitters; t < n.length; t++) {
                                    var r = n[t],
                                        o = new i.Emitter(this, r);
                                    this.addEmitter(o);
                                }
                            else {
                                (r = e.emitters), (o = new i.Emitter(this, r));
                                this.addEmitter(o);
                            }
                        }),
                        (e.prototype.play = function () {
                            for (var e = 0, t = this.array; e < t.length; e++) {
                                t[e].play();
                            }
                        }),
                        (e.prototype.pause = function () {
                            for (var e = 0, t = this.array; e < t.length; e++) {
                                t[e].pause();
                            }
                        }),
                        (e.prototype.stop = function () {
                            this.array = [];
                        }),
                        (e.prototype.handleClickMode = function (e) {
                            var t = this.container,
                                n = t.options;
                            if (e === r.ClickMode.emitter) {
                                var a = void 0,
                                    l = n.interactivity.modes.emitters;
                                l instanceof Array ? l.length > 0 && (a = o.Utils.itemFromArray(l)) : (a = l);
                                var s = null !== a && void 0 !== a ? a : n.emitters instanceof Array ? o.Utils.itemFromArray(n.emitters) : n.emitters,
                                    u = t.interactivity.mouse.clickPosition,
                                    c = new i.Emitter(this, o.Utils.deepExtend({}, s), u);
                                this.addEmitter(c);
                            }
                        }),
                        (e.prototype.resize = function () {
                            for (var e = 0, t = this.array; e < t.length; e++) {
                                t[e].resize();
                            }
                        }),
                        (e.prototype.addEmitter = function (e) {
                            this.array.push(e);
                        }),
                        (e.prototype.removeEmitter = function (e) {
                            var t = this.array.indexOf(e);
                            t >= 0 && this.array.splice(t, 1);
                        }),
                        e
                    );
                })();
            t.Emitters = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(28),
                r = n(1),
                o = n(60),
                a = n(59),
                l = (function () {
                    function e(e, t, n) {
                        var i, l, s;
                        (this.emitters = e),
                            (this.container = e.container),
                            (this.initialPosition = n),
                            (this.emitterOptions = r.Utils.deepExtend({}, t)),
                            (this.position = null !== (i = this.initialPosition) && void 0 !== i ? i : this.calcPosition());
                        var u = r.Utils.deepExtend({}, this.emitterOptions.particles);
                        void 0 === u && (u = {}),
                            void 0 === u.move && (u.move = {}),
                            void 0 === u.move.direction && (u.move.direction = this.emitterOptions.direction),
                            (this.particlesOptions = u),
                            (this.size =
                                null !== (l = this.emitterOptions.size) && void 0 !== l
                                    ? l
                                    : (function () {
                                          var e = new a.EmitterSize();
                                          return e.load({ height: 0, width: 0, mode: o.SizeMode.percent }), e;
                                      })()),
                            (this.lifeCount = null !== (s = this.emitterOptions.life.count) && void 0 !== s ? s : -1),
                            this.play();
                    }
                    return (
                        (e.prototype.play = function () {
                            var e = this;
                            (this.lifeCount > 0 || !this.emitterOptions.life.count) &&
                                (void 0 === this.startInterval &&
                                    (this.startInterval = window.setInterval(function () {
                                        e.emit();
                                    }, 1e3 * this.emitterOptions.rate.delay)),
                                this.lifeCount > 0 && this.prepareToDie());
                        }),
                        (e.prototype.pause = function () {
                            var e = this.startInterval;
                            void 0 !== e && (clearInterval(e), delete this.startInterval);
                        }),
                        (e.prototype.resize = function () {
                            var e = this.initialPosition;
                            this.position = e && r.Utils.isPointInside(e, this.container.canvas.size) ? e : this.calcPosition();
                        }),
                        (e.prototype.prepareToDie = function () {
                            var e,
                                t = this;
                            this.lifeCount > 0 &&
                                void 0 !== (null === (e = this.emitterOptions.life) || void 0 === e ? void 0 : e.duration) &&
                                window.setTimeout(function () {
                                    var e;
                                    t.pause(),
                                        t.lifeCount--,
                                        t.lifeCount > 0
                                            ? ((t.position = t.calcPosition()),
                                              window.setTimeout(
                                                  function () {
                                                      t.play();
                                                  },
                                                  null !== (e = t.emitterOptions.life.delay) && void 0 !== e ? e : 0
                                              ))
                                            : t.destroy();
                                }, 1e3 * this.emitterOptions.life.duration);
                        }),
                        (e.prototype.destroy = function () {
                            this.emitters.removeEmitter(this);
                        }),
                        (e.prototype.calcPosition = function () {
                            var e,
                                t = this.container,
                                n = null !== (e = this.emitterOptions.position) && void 0 !== e ? e : { x: 100 * Math.random(), y: 100 * Math.random() };
                            return { x: (n.x / 100) * t.canvas.size.width, y: (n.y / 100) * t.canvas.size.height };
                        }),
                        (e.prototype.emit = function () {
                            for (
                                var e = this.container,
                                    t = this.position,
                                    n = this.size.mode === o.SizeMode.percent ? (e.canvas.size.width * this.size.width) / 100 : this.size.width,
                                    r = this.size.mode === o.SizeMode.percent ? (e.canvas.size.height * this.size.height) / 100 : this.size.height,
                                    a = 0;
                                a < this.emitterOptions.rate.quantity;
                                a++
                            ) {
                                var l = new i.Particle(e, { x: t.x + n * (Math.random() - 0.5), y: t.y + r * (Math.random() - 0.5) }, this.particlesOptions);
                                e.particles.addParticle(l);
                            }
                        }),
                        e
                    );
                })();
            t.Emitter = l;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(237),
                r = (function () {
                    function e() {
                        this.id = "polygonMask";
                    }
                    return (
                        (e.prototype.getPlugin = function (e) {
                            return new i.PolygonMask(e);
                        }),
                        (e.prototype.needsPlugin = function (e) {
                            return e.options.polygon.enable;
                        }),
                        e
                    );
                })();
            t.PolygonMaskPlugin = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(12),
                o = n(28),
                a = n(23),
                l = n(1),
                s = n(6),
                u = n(7),
                c = (function () {
                    function e(e) {
                        (this.container = e), (this.dimension = { height: 0, width: 0 }), (this.paths = []), (this.path2DSupported = window.hasOwnProperty("Path2D"));
                    }
                    return (
                        (e.polygonBounce = function (e) {
                            (e.velocity.horizontal = -e.velocity.horizontal + e.velocity.vertical / 2), (e.velocity.vertical = -e.velocity.vertical + e.velocity.horizontal / 2);
                        }),
                        (e.drawPolygonMask = function (e, t, n) {
                            var i = "string" === typeof n.color ? u.ColorUtils.stringToRgb(n.color) : u.ColorUtils.colorToRgb(n.color);
                            if (i) {
                                e.beginPath(), e.moveTo(t[0].x, t[0].y);
                                for (var r = 1; r < t.length; r++) e.lineTo(t[r].x, t[r].y);
                                e.closePath(), (e.strokeStyle = u.ColorUtils.getStyleFromColor(i)), (e.lineWidth = n.width), e.stroke();
                            }
                        }),
                        (e.drawPolygonMaskPath = function (e, t, n, i) {
                            e.translate(i.x, i.y);
                            var r = "string" === typeof n.color ? u.ColorUtils.stringToRgb(n.color) : u.ColorUtils.colorToRgb(n.color);
                            r && ((e.strokeStyle = u.ColorUtils.getStyleFromColor(r, n.opacity)), (e.lineWidth = n.width), e.stroke(t));
                        }),
                        (e.prototype.checkInsidePolygon = function (e) {
                            var t = this.container,
                                n = t.options;
                            if (!n.polygon.enable || n.polygon.type === r.PolygonMaskType.none || n.polygon.type === r.PolygonMaskType.inline) return !0;
                            if (!this.raw) throw new Error(s.Constants.noPolygonFound);
                            for (var i = e ? e.x : Math.random() * t.canvas.size.width, o = e ? e.y : Math.random() * t.canvas.size.height, a = !1, l = 0, u = this.raw.length - 1; l < this.raw.length; u = l++) {
                                var c = this.raw[l].x,
                                    f = this.raw[l].y,
                                    d = this.raw[u].x,
                                    p = this.raw[u].y;
                                f > o !== p > o && i < ((d - c) * (o - f)) / (p - f) + c && (a = !a);
                            }
                            return n.polygon.type === r.PolygonMaskType.inside ? a : n.polygon.type === r.PolygonMaskType.outside && !a;
                        }),
                        (e.prototype.resize = function () {
                            var e = this,
                                t = this.container,
                                n = t.options;
                            n.polygon.enable &&
                                n.polygon.type !== r.PolygonMaskType.none &&
                                (this.redrawTimeout && clearTimeout(this.redrawTimeout),
                                (this.redrawTimeout = window.setTimeout(function () {
                                    e.parseSvgPathToPolygon().then(function (n) {
                                        (e.raw = n), e.createPath2D(), t.particles.redraw();
                                    });
                                }, 250)));
                        }),
                        (e.prototype.startAsync = function () {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var e, t, n;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return (e = this.container), (t = e.options).polygon.enable && t.polygon.url ? ((n = this), [4, this.parseSvgPathToPolygon(t.polygon.url)]) : [3, 2];
                                        case 1:
                                            (n.raw = i.sent()), this.createPath2D(), (i.label = 2);
                                        case 2:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.stop = function () {
                            delete this.raw, (this.paths = []), delete this.svg;
                        }),
                        (e.prototype.randomPointInPolygon = function () {
                            var e,
                                t = this.container,
                                n = t.options;
                            if (n.polygon.type === r.PolygonMaskType.inline)
                                switch (n.polygon.inline.arrangement) {
                                    case a.PolygonMaskInlineArrangement.randomPoint:
                                        e = this.getRandomPointOnPolygonPath();
                                        break;
                                    case a.PolygonMaskInlineArrangement.randomLength:
                                        e = this.getRandomPointOnPolygonPathByLength();
                                        break;
                                    case a.PolygonMaskInlineArrangement.equidistant:
                                        e = this.getEquidistantPointOnPolygonPathByIndex(t.particles.count);
                                        break;
                                    case a.PolygonMaskInlineArrangement.onePerPoint:
                                    case a.PolygonMaskInlineArrangement.perPoint:
                                    default:
                                        e = this.getPointOnPolygonPathByIndex(t.particles.count);
                                }
                            else e = { x: Math.random() * t.canvas.size.width, y: Math.random() * t.canvas.size.height };
                            return this.checkInsidePolygon(e) ? e : this.randomPointInPolygon();
                        }),
                        (e.prototype.particlesInitialization = function () {
                            var e = this.container.options;
                            return (
                                !(
                                    !e.polygon.enable ||
                                    e.polygon.type !== r.PolygonMaskType.inline ||
                                    (e.polygon.inline.arrangement !== a.PolygonMaskInlineArrangement.onePerPoint && e.polygon.inline.arrangement !== a.PolygonMaskInlineArrangement.perPoint)
                                ) && (this.drawPointsOnPolygonPath(), !0)
                            );
                        }),
                        (e.prototype.particlePosition = function (e) {
                            var t, n;
                            if (this.container.options.polygon.enable && (null !== (n = null === (t = this.raw) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0) {
                                var i = { x: 0, y: 0 };
                                if (e) (i.x = e.x), (i.y = e.y);
                                else {
                                    var r = this.randomPointInPolygon();
                                    (i.x = r.x), (i.y = r.y);
                                }
                                return i;
                            }
                        }),
                        (e.prototype.particleBounce = function (t, n) {
                            var i = this.container,
                                o = i.options;
                            if (o.polygon.enable && o.polygon.type !== r.PolygonMaskType.none && o.polygon.type !== r.PolygonMaskType.inline) {
                                if (!this.checkInsidePolygon(t.position)) return e.polygonBounce(t), !0;
                            } else if (o.polygon.enable && o.polygon.type === r.PolygonMaskType.inline) {
                                if (t.initialPosition) if (l.Utils.getDistance(t.initialPosition, t.position) > i.retina.polygonMaskMoveRadius) return e.polygonBounce(t), !0;
                            }
                            return !1;
                        }),
                        (e.prototype.clickPositionValid = function (e) {
                            var t = this.container.options;
                            return !(!t.polygon.enable || t.polygon.type === r.PolygonMaskType.none || t.polygon.type === r.PolygonMaskType.inline || !this.checkInsidePolygon(e));
                        }),
                        (e.prototype.parseSvgPathToPolygon = function (e) {
                            var t;
                            return i.__awaiter(this, void 0, void 0, function () {
                                var n, r, o, a, l, s, u, c, f, d, p, h, v, y, m, b, g, w, x, k, _;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return (n = this.container), (r = n.options), (o = e || r.polygon.url), this.paths.length && this.svg ? [3, 4] : [4, fetch(o)];
                                        case 1:
                                            return (a = i.sent()).ok ? [4, a.text()] : [3, 3];
                                        case 2:
                                            for (l = i.sent(), s = new DOMParser(), u = s.parseFromString(l, "image/svg+xml"), this.svg = u.getElementsByTagName("svg")[0], c = u.getElementsByTagName("path"), w = 0; w < c.length; w++)
                                                (m = c.item(w)) && this.paths.push({ element: m, length: m.getTotalLength() });
                                            return [3, 4];
                                        case 3:
                                            throw new Error("tsParticles Error - Error occurred during polygon mask download");
                                        case 4:
                                            for (
                                                f = n.retina.pixelRatio,
                                                    d = r.polygon.scale / f,
                                                    this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * d,
                                                    this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * d,
                                                    p = null !== (t = r.polygon.position) && void 0 !== t ? t : { x: 50, y: 50 },
                                                    this.offset = { x: (n.canvas.size.width * p.x) / (100 * f) - this.dimension.width / 2, y: (n.canvas.size.height * p.y) / (100 * f) - this.dimension.height / 2 },
                                                    h = [],
                                                    v = 0,
                                                    y = this.paths;
                                                v < y.length;
                                                v++
                                            )
                                                for (m = y[v], b = m.element.pathSegList.numberOfItems, g = { x: 0, y: 0 }, w = 0; w < b; w++) {
                                                    switch ((x = m.element.pathSegList.getItem(w)).pathSegType) {
                                                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                                            (k = x), (g.x = k.x), (g.y = k.y);
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                                            g.x = x.x;
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                                            g.y = x.y;
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                                            (_ = x), (g.x += _.x), (g.y += _.y);
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                                            g.x += x.x;
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                                            g.y += x.y;
                                                            break;
                                                        case window.SVGPathSeg.PATHSEG_UNKNOWN:
                                                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                                            continue;
                                                    }
                                                    h.push({ x: g.x * d + this.offset.x, y: g.y * d + this.offset.y });
                                                }
                                            return [2, h];
                                    }
                                });
                            });
                        }),
                        (e.prototype.draw = function (t) {
                            var n = this.container.options;
                            if (n.polygon.enable && n.polygon.draw.enable)
                                for (var i = this.container.options.polygon.draw, r = this.raw, o = 0, a = this.paths; o < a.length; o++) {
                                    var l = a[o].path2d,
                                        s = this.path2DSupported;
                                    t && (s && l && this.offset ? e.drawPolygonMaskPath(t, l, i.stroke, this.offset) : r && e.drawPolygonMask(t, r, i.stroke));
                                }
                        }),
                        (e.prototype.drawPointsOnPolygonPath = function () {
                            var e = this.container;
                            if (this.raw)
                                for (var t = 0, n = this.raw; t < n.length; t++) {
                                    var i = n[t],
                                        r = { x: i.x, y: i.y };
                                    e.particles.addParticle(new o.Particle(e, r));
                                }
                        }),
                        (e.prototype.getRandomPointOnPolygonPath = function () {
                            if (!this.raw || !this.raw.length) throw new Error(s.Constants.noPolygonDataLoaded);
                            var e = l.Utils.itemFromArray(this.raw);
                            return { x: e.x, y: e.y };
                        }),
                        (e.prototype.getRandomPointOnPolygonPathByLength = function () {
                            var e,
                                t,
                                n = this.container.options;
                            if (!this.raw || !this.raw.length || !this.paths.length) throw new Error(s.Constants.noPolygonDataLoaded);
                            var i = l.Utils.itemFromArray(this.paths),
                                r = Math.floor(Math.random() * i.length) + 1,
                                o = i.element.getPointAtLength(r);
                            return { x: o.x * n.polygon.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) || 0), y: o.y * n.polygon.scale + ((null === (t = this.offset) || void 0 === t ? void 0 : t.y) || 0) };
                        }),
                        (e.prototype.getEquidistantPointOnPolygonPathByIndex = function (e) {
                            var t,
                                n,
                                i,
                                r,
                                o,
                                a,
                                l = this.container.options;
                            if (!this.raw || !this.raw.length || !this.paths.length) throw new Error(s.Constants.noPolygonDataLoaded);
                            for (
                                var u,
                                    c = 0,
                                    f =
                                        this.paths.reduce(function (e, t) {
                                            return e + t.length;
                                        }, 0) / l.particles.number.value,
                                    d = 0,
                                    p = this.paths;
                                d < p.length;
                                d++
                            ) {
                                var h = p[d],
                                    v = f * e - c;
                                if (v <= h.length) {
                                    u = h.element.getPointAtLength(v);
                                    break;
                                }
                                c += h.length;
                            }
                            return {
                                x: (null !== (t = null === u || void 0 === u ? void 0 : u.x) && void 0 !== t ? t : 0) * l.polygon.scale + (null !== (i = null === (n = this.offset) || void 0 === n ? void 0 : n.x) && void 0 !== i ? i : 0),
                                y: (null !== (r = null === u || void 0 === u ? void 0 : u.y) && void 0 !== r ? r : 0) * l.polygon.scale + (null !== (a = null === (o = this.offset) || void 0 === o ? void 0 : o.y) && void 0 !== a ? a : 0),
                            };
                        }),
                        (e.prototype.getPointOnPolygonPathByIndex = function (e) {
                            if (!this.raw || !this.raw.length) throw new Error(s.Constants.noPolygonDataLoaded);
                            var t = this.raw[e % this.raw.length];
                            return { x: t.x, y: t.y };
                        }),
                        (e.prototype.createPath2D = function () {
                            var e;
                            if (this.path2DSupported)
                                for (
                                    var t = function (t) {
                                            var i = null === (e = t.element) || void 0 === e ? void 0 : e.getAttribute("d");
                                            if (i) {
                                                var r = new Path2D(i),
                                                    o = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
                                                    a = new Path2D(),
                                                    l = o.scale(n.container.options.polygon.scale);
                                                a.addPath ? (a.addPath(r, l), (t.path2d = a)) : delete t.path2d;
                                            } else delete t.path2d;
                                            !t.path2d &&
                                                n.raw &&
                                                ((t.path2d = new Path2D()),
                                                t.path2d.moveTo(n.raw[0].x, n.raw[0].y),
                                                n.raw.forEach(function (e, n) {
                                                    var i;
                                                    n > 0 && (null === (i = t.path2d) || void 0 === i || i.lineTo(e.x, e.y));
                                                }),
                                                t.path2d.closePath());
                                        },
                                        n = this,
                                        i = 0,
                                        r = this.paths;
                                    i < r.length;
                                    i++
                                ) {
                                    t(r[i]);
                                }
                        }),
                        e
                    );
                })();
            t.PolygonMask = c;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(239),
                o = n(9),
                a = n(240),
                l = n(241),
                s = n(242),
                u = n(243),
                c = n(244),
                f = n(245),
                d = n(246),
                p = n(247),
                h = n(22),
                v = new ((function () {
                    function e() {
                        (this.initialized = !1),
                            "undefined" !== typeof window &&
                                window &&
                                ((window.customRequestAnimationFrame =
                                    window.requestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    function (e) {
                                        return window.setTimeout(e, 1e3 / 60);
                                    }),
                                (window.customCancelRequestAnimationFrame =
                                    window.cancelAnimationFrame ||
                                    window.webkitCancelRequestAnimationFrame ||
                                    window.mozCancelRequestAnimationFrame ||
                                    window.oCancelRequestAnimationFrame ||
                                    window.msCancelRequestAnimationFrame ||
                                    clearTimeout));
                        var e = new s.SquareDrawer(),
                            t = new d.TextDrawer(),
                            n = new p.ImageDrawer();
                        h.Plugins.addShapeDrawer(o.ShapeType.line, new a.LineDrawer()),
                            h.Plugins.addShapeDrawer(o.ShapeType.circle, new l.CircleDrawer()),
                            h.Plugins.addShapeDrawer(o.ShapeType.edge, e),
                            h.Plugins.addShapeDrawer(o.ShapeType.square, e),
                            h.Plugins.addShapeDrawer(o.ShapeType.triangle, new u.TriangleDrawer()),
                            h.Plugins.addShapeDrawer(o.ShapeType.star, new c.StarDrawer()),
                            h.Plugins.addShapeDrawer(o.ShapeType.polygon, new f.PolygonDrawer()),
                            h.Plugins.addShapeDrawer(o.ShapeType.char, t),
                            h.Plugins.addShapeDrawer(o.ShapeType.character, t),
                            h.Plugins.addShapeDrawer(o.ShapeType.image, n),
                            h.Plugins.addShapeDrawer(o.ShapeType.images, n);
                    }
                    return (
                        (e.prototype.init = function () {
                            this.initialized || (this.initialized = !0);
                        }),
                        (e.prototype.loadFromArray = function (e, t, n) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (i) {
                                    return [2, r.Loader.loadFromArray(e, t, n)];
                                });
                            });
                        }),
                        (e.prototype.load = function (e, t) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (n) {
                                    return [2, r.Loader.load(e, t)];
                                });
                            });
                        }),
                        (e.prototype.loadJSON = function (e, t) {
                            return r.Loader.loadJSON(e, t);
                        }),
                        (e.prototype.setOnClickHandler = function (e) {
                            r.Loader.setOnClickHandler(e);
                        }),
                        (e.prototype.dom = function () {
                            return r.Loader.dom();
                        }),
                        (e.prototype.domItem = function (e) {
                            return r.Loader.domItem(e);
                        }),
                        (e.prototype.addShape = function (e, t, n, i, r) {
                            var o;
                            (o = "function" === typeof t ? { afterEffect: i, draw: t, destroy: r, init: n } : t), h.Plugins.addShapeDrawer(e, o);
                        }),
                        (e.prototype.addPreset = function (e, t) {
                            h.Plugins.addPreset(e, t);
                        }),
                        (e.prototype.addPlugin = function (e) {
                            h.Plugins.addPlugin(e);
                        }),
                        e
                    );
                })())();
            t.tsParticles = v;
            var y = function (e, t) {
                return v.load(e, t);
            };
            (t.particlesJS = y),
                (y.load = function (e, t, n) {
                    v.loadJSON(e, t).then(function (e) {
                        e && n(e);
                    });
                }),
                (y.setOnClickHandler = function (e) {
                    v.setOnClickHandler(e);
                });
            var m = v.dom();
            t.pJSDom = m;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(46),
                o = n(6),
                a = n(1),
                l = [],
                s = (function () {
                    function e() {}
                    return (
                        (e.dom = function () {
                            return l || (l = []), l;
                        }),
                        (e.domItem = function (t) {
                            var n = e.dom(),
                                i = n[t];
                            if (i && !i.destroyed) return i;
                            n.splice(t, 1);
                        }),
                        (e.loadFromArray = function (t, n, r) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (i) {
                                    return [2, e.load(t, a.Utils.itemFromArray(n, r))];
                                });
                            });
                        }),
                        (e.setFromArray = function (t, n, r, o) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                return i.__generator(this, function (i) {
                                    return [2, e.set(t, n, a.Utils.itemFromArray(r, o))];
                                });
                            });
                        }),
                        (e.load = function (e, t) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var n;
                                return i.__generator(this, function (i) {
                                    return (n = document.getElementById(e)) ? [2, this.set(e, n, t)] : [2];
                                });
                            });
                        }),
                        (e.set = function (t, n, a) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var l, s, u, c, f, d, p;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return (
                                                (l = e.dom()),
                                                (s = l.findIndex(function (e) {
                                                    return e.id === t;
                                                })) >= 0 &&
                                                    (u = this.domItem(s)) &&
                                                    !u.destroyed &&
                                                    (u.destroy(), l.splice(s, 1)),
                                                "canvas" === n.tagName
                                                    ? ((c = n), (f = !1))
                                                    : (d = n.getElementsByTagName("canvas")).length
                                                    ? ((c = d[0]).className || (c.className = o.Constants.canvasClass), (f = !1))
                                                    : ((f = !0), ((c = document.createElement("canvas")).className = o.Constants.canvasClass), (c.style.width = "100%"), (c.style.height = "100%"), n.appendChild(c)),
                                                (p = new r.Container(t, a)),
                                                s >= 0 ? l.splice(s, 0, p) : l.push(p),
                                                p.canvas.loadCanvas(c, f),
                                                [4, p.start()]
                                            );
                                        case 1:
                                            return i.sent(), [2, p];
                                    }
                                });
                            });
                        }),
                        (e.loadJSON = function (t, n) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var r, o;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, fetch(n)];
                                        case 1:
                                            return (r = i.sent()).ok ? [4, r.json()] : [3, 3];
                                        case 2:
                                            return (o = i.sent()) instanceof Array ? [2, e.loadFromArray(t, o)] : [2, e.load(t, o)];
                                        case 3:
                                            console.error("Error tsParticles - fetch status: " + r.status), console.error("Error tsParticles - File config not found"), (i.label = 4);
                                        case 4:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.setJSON = function (t, n, r) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var o, a;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, fetch(r)];
                                        case 1:
                                            return (o = i.sent()).ok ? [4, o.json()] : [3, 3];
                                        case 2:
                                            return (a = i.sent()) instanceof Array ? [2, e.setFromArray(t, n, a)] : [2, e.set(t, n, a)];
                                        case 3:
                                            console.error("Error tsParticles - fetch status: " + o.status), console.error("Error tsParticles - File config not found"), (i.label = 4);
                                        case 4:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.setOnClickHandler = function (t) {
                            var n = e.dom();
                            if (0 === n.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                            for (var i = 0, r = n; i < r.length; i++) {
                                var o = r[i].interactivity.element;
                                o && o.addEventListener("click", t);
                            }
                        }),
                        e
                    );
                })();
            t.Loader = s;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.prototype.draw = function (e, t, n, i) {
                        e.moveTo(0, -n / 2), e.lineTo(0, n / 2);
                    }),
                    e
                );
            })();
            t.LineDrawer = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.prototype.draw = function (e, t, n, i) {
                        e.arc(0, 0, n, 0, 2 * Math.PI, !1);
                    }),
                    e
                );
            })();
            t.CircleDrawer = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e() {}
                return (
                    (e.prototype.draw = function (e, t, n, i) {
                        e.rect(-n, -n, 2 * n, 2 * n);
                    }),
                    e
                );
            })();
            t.SquareDrawer = i;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.getSidesData = function (e, t) {
                            return { count: { denominator: 2, numerator: 3 }, length: 2 * t };
                        }),
                        (t.prototype.getCenter = function (e, t) {
                            return { x: -t, y: t / 1.66 };
                        }),
                        t
                    );
                })(n(31).PolygonDrawerBase);
            t.TriangleDrawer = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.getSidesData = function (e, t) {
                            var n,
                                i = e.shapeData,
                                r = null !== (n = null === i || void 0 === i ? void 0 : i.sides) && void 0 !== n ? n : 5;
                            return { count: { denominator: 2, numerator: r }, length: (2 * t * 2.66) / (r / 3) };
                        }),
                        (t.prototype.getCenter = function (e, t) {
                            var n,
                                i = e.shapeData;
                            return { x: (2 * -t) / ((null !== (n = null === i || void 0 === i ? void 0 : i.sides) && void 0 !== n ? n : 5) / 4), y: -t / 1.52 };
                        }),
                        t
                    );
                })(n(31).PolygonDrawerBase);
            t.StarDrawer = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        i.__extends(t, e),
                        (t.prototype.getSidesData = function (e, t) {
                            var n,
                                i,
                                r = e.shapeData,
                                o = null !== (i = null !== (n = null === r || void 0 === r ? void 0 : r.sides) && void 0 !== n ? n : null === r || void 0 === r ? void 0 : r.nb_sides) && void 0 !== i ? i : 5;
                            return { count: { denominator: 1, numerator: o }, length: (2.66 * t) / (o / 3) };
                        }),
                        (t.prototype.getCenter = function (e, t) {
                            var n,
                                i,
                                r = e.shapeData;
                            return {
                                x: -t / ((null !== (i = null !== (n = null === r || void 0 === r ? void 0 : r.sides) && void 0 !== n ? n : null === r || void 0 === r ? void 0 : r.nb_sides) && void 0 !== i ? i : 5) / 3.5),
                                y: -t / 0.76,
                            };
                        }),
                        t
                    );
                })(n(31).PolygonDrawerBase);
            t.PolygonDrawer = r;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(1),
                o = n(9),
                a = (function () {
                    function e() {}
                    return (
                        (e.prototype.init = function (e) {
                            var t, n;
                            return i.__awaiter(this, void 0, void 0, function () {
                                var a, l, s, u, c;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            if (((a = e.options), !r.Utils.isInArray(o.ShapeType.char, a.particles.shape.type) && !r.Utils.isInArray(o.ShapeType.character, a.particles.shape.type))) return [3, 7];
                                            if (!((l = null !== (t = a.particles.shape.options[o.ShapeType.character]) && void 0 !== t ? t : a.particles.shape.options[o.ShapeType.char]) instanceof Array)) return [3, 5];
                                            (s = 0), (u = l), (i.label = 1);
                                        case 1:
                                            return s < u.length ? ((c = u[s]), [4, r.Utils.loadFont(c)]) : [3, 4];
                                        case 2:
                                            i.sent(), (i.label = 3);
                                        case 3:
                                            return s++, [3, 1];
                                        case 4:
                                            return [3, 7];
                                        case 5:
                                            return void 0 === (c = null !== (n = a.particles.shape.options[o.ShapeType.character]) && void 0 !== n ? n : a.particles.shape.options[o.ShapeType.char]) ? [3, 7] : [4, r.Utils.loadFont(c)];
                                        case 6:
                                            i.sent(), (i.label = 7);
                                        case 7:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.draw = function (e, t, n, i) {
                            var o = t.shapeData;
                            if (void 0 !== o) {
                                var a = o.value;
                                if (void 0 !== a) {
                                    var l = t;
                                    void 0 === l.text && (l.text = a instanceof Array ? r.Utils.itemFromArray(a, t.randomIndexData) : a);
                                    var s = l.text,
                                        u = o.style,
                                        c = o.weight,
                                        f = 2 * Math.round(n),
                                        d = o.font,
                                        p = t.fill;
                                    e.font = u + " " + c + " " + f + 'px "' + d + '"';
                                    var h = { x: -n / 2, y: n / 2 };
                                    p ? e.fillText(s, h.x, h.y) : e.strokeText(s, h.x, h.y);
                                }
                            }
                        }),
                        e
                    );
                })();
            t.TextDrawer = a;
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(2),
                r = n(1),
                o = n(9),
                a = (function () {
                    function e() {
                        this.images = [];
                    }
                    return (
                        (e.prototype.getImages = function (e) {
                            var t = this.images.filter(function (t) {
                                return t.id === e.id;
                            });
                            return t.length ? t[0] : (this.images.push({ id: e.id, images: [] }), this.getImages(e));
                        }),
                        (e.prototype.addImage = function (e, t) {
                            var n = this.getImages(e);
                            null === n || void 0 === n || n.images.push(t);
                        }),
                        (e.prototype.init = function (e) {
                            var t;
                            return i.__awaiter(this, void 0, void 0, function () {
                                var n, a, l, s, u, c;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            if (((n = e.options), (a = n.particles.shape), !r.Utils.isInArray(o.ShapeType.image, a.type) && !r.Utils.isInArray(o.ShapeType.images, a.type))) return [2];
                                            if (!((l = null !== (t = a.options[o.ShapeType.images]) && void 0 !== t ? t : a.options[o.ShapeType.image]) instanceof Array)) return [3, 5];
                                            (s = 0), (u = l), (i.label = 1);
                                        case 1:
                                            return s < u.length ? ((c = u[s]), [4, this.loadImageShape(e, c)]) : [3, 4];
                                        case 2:
                                            i.sent(), (i.label = 3);
                                        case 3:
                                            return s++, [3, 1];
                                        case 4:
                                            return [3, 7];
                                        case 5:
                                            return [4, this.loadImageShape(e, l)];
                                        case 6:
                                            i.sent(), (i.label = 7);
                                        case 7:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.destroy = function () {
                            this.images = [];
                        }),
                        (e.prototype.loadImageShape = function (e, t) {
                            return i.__awaiter(this, void 0, void 0, function () {
                                var n, o;
                                return i.__generator(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 5, , 6]), t.replaceColor ? [4, r.Utils.downloadSvgImage(t.src)] : [3, 2];
                                        case 1:
                                            return (o = i.sent()), [3, 4];
                                        case 2:
                                            return [4, r.Utils.loadImage(t.src)];
                                        case 3:
                                            (o = i.sent()), (i.label = 4);
                                        case 4:
                                            return (n = o), this.addImage(e, n), [3, 6];
                                        case 5:
                                            return i.sent(), console.log("tsParticles error - " + t.src + " not found"), [3, 6];
                                        case 6:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (e.prototype.draw = function (e, t, n, i) {
                            var r, o;
                            if (e) {
                                var a = t.image,
                                    l = null === (r = null === a || void 0 === a ? void 0 : a.data) || void 0 === r ? void 0 : r.element;
                                if (l) {
                                    var s = null !== (o = null === a || void 0 === a ? void 0 : a.ratio) && void 0 !== o ? o : 1,
                                        u = { x: -n, y: -n };
                                    ((null === a || void 0 === a ? void 0 : a.data.svgData) && (null === a || void 0 === a ? void 0 : a.replaceColor)) || (e.globalAlpha = i),
                                        e.drawImage(l, u.x, u.y, 2 * n, (2 * n) / s),
                                        ((null === a || void 0 === a ? void 0 : a.data.svgData) && (null === a || void 0 === a ? void 0 : a.replaceColor)) || (e.globalAlpha = 1);
                                }
                            }
                        }),
                        e
                    );
                })();
            t.ImageDrawer = a;
        },
    ],
]);