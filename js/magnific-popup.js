
// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+retina+imagezoom+fastclick
(function(a) {
    var b = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        e = "BeforeAppend",
        f = "MarkupParse",
        g = "Open",
        h = "Change",
        i = "mfp",
        j = "." + i,
        k = "mfp-ready",
        l = "mfp-removing",
        m = "mfp-prevent-close",
        n, o = function() {},
        p = !!window.jQuery,
        q, r = a(window),
        s, t, u, v, w, x = function(a, b) {
            n.ev.on(i + a + j, b)
        },
        y = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        z = function(b, c) {
            n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
        },
        A = function(b) {
            if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
            return n.currTemplate.closeBtn
        },
        B = function() {
            a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
        },
        C = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (a.transition !== undefined) return !0;
            while (b.length)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    o.prototype = {
        constructor: o,
        init: function() {
            var b = navigator.appVersion;
            n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
        },
        open: function(b) {
            s || (s = a(document.body));
            var c;
            if (b.isObj === !1) {
                n.items = b.items.toArray(), n.index = 0;
                var d = b.items,
                    e;
                for (c = 0; c < d.length; c++) {
                    e = d[c], e.parsed && (e = e.el[0]);
                    if (e === b.el[0]) {
                        n.index = c;
                        break
                    }
                }
            } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
            if (n.isOpen) {
                n.updateItemHTML();
                return
            }
            n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function() {
                n.close()
            }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function(a) {
                n._checkIfClose(a.target) && n.close()
            }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
            var h = a.magnificPopup.modules;
            for (c = 0; c < h.length; c++) {
                var i = h[c];
                i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
            }
            z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function(a, b, c, d) {
                c.close_replaceWith = A(d.type)
            }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
                overflow: n.st.overflowY,
                overflowX: "hidden",
                overflowY: n.st.overflowY
            }) : n.wrap.css({
                top: r.scrollTop(),
                position: "absolute"
            }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
                height: t.height(),
                position: "absolute"
            }), n.st.enableEscapeKey && t.on("keyup" + j, function(a) {
                a.keyCode === 27 && n.close()
            }), r.on("resize" + j, function() {
                n.updateSize()
            }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
            var l = n.wH = r.height(),
                m = {};
            if (n.fixedContentPos && n._hasScrollBar(l)) {
                var o = n._getScrollbarSize();
                o && (m.marginRight = o)
            }
            n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var p = n.st.mainClass;
            return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function() {
                n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
            }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
        },
        close: function() {
            if (!n.isOpen) return;
            z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function() {
                n._close()
            }, n.st.removalDelay)) : n._close()
        },
        _close: function() {
            z(b);
            var c = l + " " + k + " ";
            n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
            if (n.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
        },
        updateSize: function(a) {
            if (n.isIOS) {
                var b = document.documentElement.clientWidth / window.innerWidth,
                    c = window.innerHeight * b;
                n.wrap.css("height", c), n.wH = c
            } else n.wH = a || r.height();
            n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
        },
        updateItemHTML: function() {
            var b = n.items[n.index];
            n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
            var c = b.type;
            z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
            if (!n.currTemplate[c]) {
                var d = n.st[c] ? n.st[c].markup : !1;
                z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
            }
            u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
            var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
            n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
        },
        appendContent: function(a, b) {
            n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
        },
        parseEl: function(b) {
            var c = n.items[b],
                d;
            c.tagName ? c = {
                el: a(c)
            } : (d = c.type, c = {
                data: c,
                src: c.src
            });
            if (c.el) {
                var e = n.types;
                for (var f = 0; f < e.length; f++)
                    if (c.el.hasClass("mfp-" + e[f])) {
                        d = e[f];
                        break
                    }
                c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
            }
            return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
        },
        addGroup: function(a, b) {
            var c = function(c) {
                c.mfpEl = this, n._openClick(c, a, b)
            };
            b || (b = {});
            var d = "click.magnificPopup";
            b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
        },
        _openClick: function(b, c, d) {
            var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
            if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;
            var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
            if (f)
                if (a.isFunction(f)) {
                    if (!f.call(n)) return !0
                } else if (r.width() < f) return !0;
            b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
        },
        updateStatus: function(a, b) {
            if (n.preloader) {
                q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
                var c = {
                    status: a,
                    text: b
                };
                z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), n.container.addClass("mfp-s-" + a), q = a
            }
        },
        _checkIfClose: function(b) {
            if (a(b).hasClass(m)) return;
            var c = n.st.closeOnContentClick,
                d = n.st.closeOnBgClick;
            if (c && d) return !0;
            if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0;
            if (b !== n.content[0] && !a.contains(n.content[0], b)) {
                if (d && a.contains(document, b)) return !0
            } else if (c) return !0;
            return !1
        },
        _addClassToMFP: function(a) {
            n.bgOverlay.addClass(a), n.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
        },
        _setFocus: function() {
            (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
        },
        _onFocusIn: function(b) {
            if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function(a, c) {
                if (c === undefined || c === !1) return !0;
                e = a.split("_");
                if (e.length > 1) {
                    var d = b.find(j + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(j + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (n.scrollbarSize === undefined) {
                var a = document.createElement("div");
                a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return n.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: o.prototype,
        modules: [],
        open: function(b, c) {
            return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(b) {
        B();
        var c = a(this);
        if (typeof b == "string")
            if (b === "open") {
                var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup,
                    f = parseInt(arguments[1], 10) || 0;
                e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({
                    mfpEl: d
                }, c, e)
            } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
        else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
        return c
    };
})(window.jQuery || window.Zepto)