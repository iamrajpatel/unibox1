/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-cookies-cssanimations-csscalc-csscolumns-cssgrid_cssgridlegacy-flexbox-localstorage-rgba-svg-video-setclasses !*/
! function(e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function r() {
        var e, n, t, r, a, s, i;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [], n = w[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) s = e[a], i = s.split("."), 1 === i.length ? Modernizr[i[0]] = r : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = r), T.push((r ? "" : "no-") + i.join("-"))
            }
    }

    function a(e) {
        var n = x.className,
            t = Modernizr._config.classPrefix || "";
        if (C && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), C ? x.className.baseVal = n : x.className = n)
    }

    function s() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : C ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function i(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function u(e, n, t) {
        var r;
        for (var a in e)
            if (e[a] in n) return t === !1 ? e[a] : (r = n[e[a]], o(r, "function") ? c(r, t || n) : r);
        return !1
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(n, t, o) {
        var r;
        if ("getComputedStyle" in e) {
            r = getComputedStyle.call(e, n, t);
            var a = e.console;
            if (null !== r) o && (r = r.getPropertyValue(o));
            else if (a) {
                var s = a.error ? "error" : "log";
                a[s].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else r = !t && n.currentStyle && n.currentStyle[o];
        return r
    }

    function p() {
        var e = n.body;
        return e || (e = s(C ? "svg" : "body"), e.fake = !0), e
    }

    function y(e, t, o, r) {
        var a, i, l, c, u = "modernizr",
            d = s("div"),
            f = p();
        if (parseInt(o, 10))
            for (; o--;) l = s("div"), l.id = r ? r[o] : u + (o + 1), d.appendChild(l);
        return a = s("style"), a.type = "text/css", a.id = "s" + u, (f.fake ? f : d).appendChild(a), f.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), d.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = x.style.overflow, x.style.overflow = "hidden", x.appendChild(f)), i = t(d, e), f.fake ? (f.parentNode.removeChild(f), x.style.overflow = c, x.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function m(n, o) {
        var r = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(d(n[r]), o)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; r--;) a.push("(" + d(n[r]) + ":" + o + ")");
            return a = a.join(" or "), y("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == f(e, null, "position")
            })
        }
        return t
    }

    function g(e, n, r, a) {
        function c() {
            d && (delete $.style, delete $.modElem)
        }
        if (a = o(a, "undefined") ? !1 : a, !o(r, "undefined")) {
            var u = m(e, r);
            if (!o(u, "undefined")) return u
        }
        for (var d, f, p, y, g, v = ["modernizr", "tspan", "samp"]; !$.style && v.length;) d = !0, $.modElem = s(v.shift()), $.style = $.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (y = e[f], g = $.style[y], i(y, "-") && (y = l(y)), $.style[y] !== t) {
                if (a || o(r, "undefined")) return c(), "pfx" == n ? y : !0;
                try {
                    $.style[y] = r
                } catch (h) {}
                if ($.style[y] != g) return c(), "pfx" == n ? y : !0
            }
        return c(), !1
    }

    function v(e, n, t, r, a) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + k.join(s + " ") + s).split(" ");
        return o(n, "string") || o(n, "undefined") ? g(i, n, r, a) : (i = (e + " " + _.join(s + " ") + s).split(" "), u(i, n, t))
    }

    function h(e, n, o) {
        return v(e, t, t, n, o)
    }
    var T = [],
        w = [],
        b = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                w.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr, Modernizr.addTest("cookies", function() {
        try {
            n.cookie = "cookietest=1";
            var e = -1 != n.cookie.indexOf("cookietest=");
            return n.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    });
    var x = n.documentElement,
        C = "svg" === x.nodeName.toLowerCase();
    Modernizr.addTest("audio", function() {
        var e = s("audio"),
            n = !1;
        try {
            n = !!e.canPlayType, n && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), n.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {}
        return n
    }), Modernizr.addTest("video", function() {
        var e = s("video"),
            n = !1;
        try {
            n = !!e.canPlayType, n && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), n.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), n.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {}
        return n
    }), Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var S = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    b._prefixes = S, Modernizr.addTest("csscalc", function() {
        var e = "width:",
            n = "calc(10px);",
            t = s("a");
        return t.style.cssText = e + S.join(n + e), !!t.style.length
    });
    var P = "Moz O ms Webkit",
        k = b._config.usePrefixes ? P.split(" ") : [];
    b._cssomPrefixes = k;
    var _ = b._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    b._domPrefixes = _;
    var E = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem
    });
    var $ = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
            delete $.style
        }), b.testAllProps = v, b.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    n = h("columnCount");
                try {
                    e = !!n, e && (e = new Boolean(e))
                } catch (t) {}
                return e
            });
            for (var e, n, t = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], o = 0; o < t.length; o++) e = t[o].toLowerCase(), n = h("column" + t[o]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (n = n || h(t[o])), Modernizr.addTest("csscolumns." + e, n)
        }(), Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), Modernizr.addTest("cssgridlegacy", h("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", h("grid-template-rows", "none", !0)), r(), a(T), delete b.addTest, delete b.addAsyncTest;
    for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr
}(window, document);