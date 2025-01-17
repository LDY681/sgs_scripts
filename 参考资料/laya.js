var Laya = window.Laya = function(t) {
    var e = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, i) {
            return 1 == arguments.length ? e.__presubstr.call(this, t) : e.__presubstr.call(this, t, i > 0 ? i : this.length + i)
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$()
            })
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array)
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var n = 0; t > n; n++) i[n] = e;
            return i
        },
        __extend: function(t, i) {
            function n() {
                e.un(this, "constructor", t)
            }
            for (var s in i)
                if (i.hasOwnProperty(s)) {
                    var r = Object.getOwnPropertyDescriptor(i, s),
                        o = r.get,
                        a = r.set;
                    o || a ? o && a ? Object.defineProperty(t, s, r) : (o && Object.defineProperty(t, s, o), a && Object.defineProperty(t, s, a)) : t[s] = i[s]
                } n.prototype = i.prototype, t.prototype = new n, e.un(t.prototype, "__imps", e.__copy({}, i.prototype.__imps))
        },
        __copy: function(t, e) {
            if (!e) return null;
            t = t || {};
            for (var i in e) t[i] = e[i];
            return t
        },
        __package: function(i, n) {
            if (!e.__packages[i]) {
                e.__packages[i] = !0;
                var s = t,
                    r = i.split(".");
                if (r.length > 1)
                    for (var o = 0, a = r.length - 1; a > o; o++) {
                        var h = s[r[o]];
                        s = h ? h : s[r[o]] = {}
                    }
                s[r[r.length - 1]] || (s[r[r.length - 1]] = n || {})
            }
        },
        __hasOwnProperty: function(t, e) {
            function i(t, e) {
                if (Object.hasOwnProperty.call(e.prototype, t)) return !0;
                var n = e.prototype.__super;
                return null == n ? null : i(t, n)
            }
            return e = e || this, Object.hasOwnProperty.call(e, t) || i(t, e.__class)
        },
        __typeof: function(t, e) {
            if (!t || !e) return !1;
            if (e === String) return "string" == typeof t;
            if (e === Number) return "number" == typeof t;
            if (e.__interface__) e = e.__interface__;
            else if ("string" != typeof e) return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null
        },
        __int: function(t) {
            return t ? parseInt(t) : 0
        },
        "interface": function(i, n) {
            e.__package(i, {});
            var s = e.__internals,
                r = s[i] = s[i] || {
                    self: i
                };
            if (n) {
                var o = n.split(",");
                r.extend = [];
                for (var a = 0; a < o.length; a++) {
                    var h = o[a];
                    s[h] = s[h] || {
                        self: h
                    }, r.extend.push(s[h])
                }
            }
            for (var l = t, u = i.split("."), a = 0; a < u.length - 1; a++) l = l[u[a]];
            l[u[u.length - 1]] = {
                __interface__: i
            }
        },
        "class": function(i, n, s, r) {
            if (s && e.__extend(i, s), n)
                if (e.__package(n, i), e.__classmap[n] = i, n.indexOf(".") > 0) {
                    if (0 == n.indexOf("laya.")) {
                        var o = n.split(".");
                        r = r || o[o.length - 1], e[r] && console.log("Warning!,this class[" + r + "] already exist:", e[r]), e[r] = i
                    }
                } else "Main" == n ? t.Main = i : (e[n] && console.log("Error!,this class[" + n + "] already exist:", e[n]), e[n] = i);
            var a = e.un,
                h = i.prototype;
            a(h, "hasOwnProperty", e.__hasOwnProperty), a(h, "__class", i), a(h, "__super", s), a(h, "__className", n), a(i, "__super", s), a(i, "__className", n), a(i, "__isclass", !0), a(i, "super", function(t) {
                this.__super.call(t)
            })
        },
        imps: function(t, i) {
            function n(t) {
                var i, r;
                if ((i = e.__internals[t]) && (s[t] = !0, r = i.extend))
                    for (var o = 0; o < r.length; o++) n(r[o].self)
            }
            if (!i) return null;
            var s = t.__imps || e.un(t, "__imps", {});
            for (var r in i) n(r)
        },
        superSet: function(t, e, i, n) {
            var s = t.prototype["_$set_" + i];
            s && s.call(e, n)
        },
        superGet: function(t, e, i) {
            var n = t.prototype["_$get_" + i];
            return n ? n.call(e) : null
        },
        getset: function(t, i, n, s, r) {
            t ? (s && (i["_$GET_" + n] = s), r && (i["_$SET_" + n] = r)) : (s && e.un(i, "_$get_" + n, s), r && e.un(i, "_$set_" + n, r)), s && r ? Object.defineProperty(i, n, {
                get: s,
                set: r,
                enumerable: !1,
                configurable: !0
            }) : (s && Object.defineProperty(i, n, {
                get: s,
                enumerable: !1,
                configurable: !0
            }), r && Object.defineProperty(i, n, {
                set: r,
                enumerable: !1,
                configurable: !0
            }))
        },
        "static": function(t, e) {
            function i() {
                var i = e[n],
                    s = e[n + 1];
                Object.defineProperty(t, i, {
                    get: function() {
                        return delete this[i], this[i] = s.call(this)
                    },
                    set: function(t) {
                        delete this[i], this[i] = t
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            for (var n = 0, s = e.length; s > n; n += 2) "length" == e[n] ? t.length = e[n + 1].call(t) : i()
        },
        un: function(t, i, n) {
            return n || (n = t[i]), e.__propun.value = n, Object.defineProperty(t, i, e.__propun), n
        },
        uns: function(t, i) {
            i.forEach(function(i) {
                e.un(t, i)
            })
        }
    };
    return t.console = t.console || {
        log: function() {}
    }, t.trace = t.console.log, Error.prototype.throwError = function() {
        throw arguments
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), e
}(window, document);
! function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec
}(window, document, Laya),
    function(t, e, i) {
        {
            var n = (i.un, i.uns, i.static),
                s = i.class,
                r = i.getset;
            i.__newvec
        }
        i.interface("laya.runtime.IMarket"), i.interface("laya.filters.IFilter"), i.interface("laya.display.ILayout"), i.interface("laya.resource.IDispose"), i.interface("laya.runtime.IPlatform"), i.interface("laya.resource.IDestroy"), i.interface("laya.runtime.IConchNode"), i.interface("laya.filters.IFilterAction"), i.interface("laya.runtime.ICPlatformClass"), i.interface("laya.resource.ICreateResource"), i.interface("laya.runtime.IConchRenderObject"), i.interface("laya.runtime.IPlatformClass", "laya.runtime.IPlatform");
        var o = function() {
                function e() {}
                return s(e, "laya.utils.RunDriver"), e.FILTER_ACTIONS = [], e.pixelRatio = -1, e._charSizeTestDiv = null, e.now = function() {
                    return Date.now()
                }, e.getWindow = function() {
                    return t
                }, e.getPixelRatio = function() {
                    if (e.pixelRatio < 0) {
                        var t = B.context,
                            i = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                        e.pixelRatio = (B.window.devicePixelRatio || 1) / i, e.pixelRatio < 1 && (e.pixelRatio = 1)
                    }
                    return e.pixelRatio
                }, e.getIncludeStr = function() {
                    return null
                }, e.createShaderCondition = function(t) {
                    var e = "(function() {return " + t + ";})";
                    return i._runScript(e)
                }, e.fontMap = [], e.measureText = function(t, i) {
                    var n = e.hanzi.test(t);
                    if (n && e.fontMap[i]) return e.fontMap[i];
                    var s = B.context;
                    s.font = i;
                    var r = s.measureText(t);
                    return n && (e.fontMap[i] = r), r
                }, e.youFontMap = {}, e.measureYouText = function(t) {
                    if (e.youFontMap[t]) return e.youFontMap[t];
                    var i = B.context;
                    i.font = t;
                    var n = i.measureText(ge._testWord);
                    return e.youFontMap[t] = n, n
                }, e.getWebGLContext = function() {}, e.beginFlush = function() {}, e.endFinish = function() {}, e.addToAtlas = null, e.flashFlushImage = function() {}, e.drawToCanvas = function(t, e, i, n, s, r) {
                    var o = ye.create("2D"),
                        a = new D(i, n, o);
                    return k.renders[e]._fun(t, a, s, r), o
                }, e.createParticleTemplate2D = null, e.createGLTextur = null, e.createWebGLContext2D = null, e.changeWebGLSize = function() {}, e.createRenderSprite = function(t, e) {
                    return new k(t, e)
                }, e.createFilterAction = function() {
                    return new x
                }, e.createGraphics = function() {
                    return new f
                }, e.clear = function() {
                    R._context.ctx.clear()
                }, e.cancelLoadByUrl = function() {}, e.clearAtlas = function() {}, e.isAtlas = function() {
                    return !1
                }, e.addTextureToAtlas = function() {}, e.getTexturePixels = function() {
                    return null
                }, e.skinAniSprite = function() {
                    return null
                }, e.update3DLoop = function() {}, n(e, ["hanzi", function() {
                    return this.hanzi = new RegExp("^[一-龥]$")
                }]), e
            }(),
            a = (function() {
                return r(1, i, "alertGlobalError", null, function(t) {
                    var e = 0;
                    B.window.onerror = t ? function(t, i, n, s, r) {
                        e++ < 5 && r && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + r.stack || r)
                    } : null
                }), i.init = function(t, e) {
                    for (var n = [], s = 2, r = arguments.length; r > s; s++) n.push(arguments[s]);
                    if (!i._isinit) {
                        ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = i._arrayBufferSlice), i._isinit = !0, B.__init__(), F.__init__(), f.__init__(), i.timer = new $, i.scaleTimer = new $, i.loader = new ae, Q.__init__();
                        for (var s = 0, o = n.length; o > s; s++) n[s].enable && n[s].enable();
                        return _.__init__(), c.__init__(), O.__init__(), W.beginCheck(), i._currentStage = i.stage = new me, i.stage.conchModel && i.stage.conchModel.setRootNode(), i.getUrlPath(), i.render = new R(0, 0), i.stage.size(t, e), k.__init__(), m.__init__(), v.instance.__init__(i.stage, R.canvas), xe.__init__(), E.autoStopMusic = !0, A.__init__(), R.canvas
                    }
                }, i.getUrlPath = function() {
                    var t = B.window.location,
                        e = t.pathname;
                    e = ":" == e.charAt(2) ? e.substring(1) : e, L.rootPath = L.basePath = L.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname)
                }, i._arrayBufferSlice = function(t, e) {
                    var i = this,
                        n = new Uint8Array(i, t, e - t),
                        s = new Uint8Array(n.length);
                    return s.set(n), s.buffer
                }, i._runScript = function(t) {
                    return B.window["e" + String.fromCharCode(118) + "al"](t)
                }, i.stage = null, i.timer = null, i.scaleTimer = null, i.loader = null, i.version = "1.7.19.1beta", i.render = null, i._currentStage = null, i._isinit = !1, i.MiniAdpter = {
                    init: function() {
                        t.navigator && t.navigator.userAgent && t.navigator.userAgent.indexOf("MiniGame") > -1 && console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")
                    }
                }, n(i, ["conchMarket", function() {
                    return this.conchMarket = t.conch ? conchMarket : null
                }, "PlatformClass", function() {
                    return this.PlatformClass = t.PlatformClass
                }]), i
            }(), function() {
                function t() {}
                return s(t, "Config"), t.WebGLTextCacheCount = 500, t.atlasEnable = !1, t.showCanvasMark = !1, t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, t.premultipliedAlpha = !0, t.isStencil = !0, t.preserveDrawingBuffer = !1, t
            }()),
            h = function() {
                function t() {
                    this._events = null
                }
                var e;
                s(t, "laya.events.EventDispatcher");
                var i = t.prototype;
                return i.hasListener = function(t) {
                    var e = this._events && this._events[t];
                    return !!e
                }, i.event = function(t, e) {
                    if (!this._events || !this._events[t]) return !1;
                    var i = this._events[t];
                    if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run();
                    else {
                        for (var n = 0, s = i.length; s > n; n++) {
                            var r = i[n];
                            r && (null != e ? r.runWith(e) : r.run()), (!r || r.once) && (i.splice(n, 1), n--, s--)
                        }
                        0 === i.length && this._events && delete this._events[t]
                    }
                    return !0
                }, i.on = function(t, e, i, n) {
                    return this._createListener(t, e, i, n, !1)
                }, i.once = function(t, e, i, n) {
                    return this._createListener(t, e, i, n, !0)
                }, i._createListener = function(t, i, n, s, r, o) {
                    void 0 === o && (o = !0), o && this.off(t, i, n, r);
                    var a = e.create(i || this, n, s, r);
                    this._events || (this._events = {});
                    var h = this._events;
                    return h[t] ? h[t].run ? h[t] = [h[t], a] : h[t].push(a) : h[t] = a, this
                }, i.off = function(t, e, i, n) {
                    if (void 0 === n && (n = !1), !this._events || !this._events[t]) return this;
                    var s = this._events[t];
                    if (null != i)
                        if (s.run) e && s.caller !== e || s.method !== i || n && !s.once || (delete this._events[t], s.recover());
                        else {
                            for (var r = 0, o = 0, a = s.length; a > o; o++) {
                                var h = s[o];
                                h ? !h || e && h.caller !== e || h.method !== i || n && !h.once || (r++, s[o] = null, h.recover()) : r++
                            }
                            r === a && delete this._events[t]
                        } return this
                }, i.offAll = function(t) {
                    var e = this._events;
                    if (!e) return this;
                    if (t) this._recoverHandlers(e[t]), delete e[t];
                    else {
                        for (var i in e) this._recoverHandlers(e[i]);
                        this._events = null
                    }
                    return this
                }, i._recoverHandlers = function(t) {
                    if (t)
                        if (t.run) t.recover();
                        else
                            for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), t[e] = null)
                }, i.isMouseEvent = function(e) {
                    return t.MOUSE_EVENTS[e]
                }, t.MOUSE_EVENTS = {
                    rightmousedown: !0,
                    rightmouseup: !0,
                    rightclick: !0,
                    mousedown: !0,
                    mouseup: !0,
                    mousemove: !0,
                    mouseover: !0,
                    mouseout: !0,
                    click: !0,
                    doubleclick: !0
                }, t.__init$ = function() {
                    Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                        enumerable: !1,
                        writable: !0
                    }), e = function(t) {
                        function e(t, i, n, s) {
                            e.__super.call(this, t, i, n, s)
                        }
                        s(e, "", t);
                        var i = e.prototype;
                        return i.recover = function() {
                            this._id > 0 && (this._id = 0, e._pool.push(this.clear()))
                        }, e.create = function(t, i, n, s) {
                            return void 0 === s && (s = !0), e._pool.length ? e._pool.pop().setTo(t, i, n, s) : new e(t, i, n, s)
                        }, e._pool = [], e
                    }(l)
                }, t
            }(),
            l = function() {
                function t(t, e, i, n) {
                    this.once = !1, this._id = 0, void 0 === n && (n = !1), this.setTo(t, e, i, n)
                }
                s(t, "laya.utils.Handler");
                var e = t.prototype;
                return e.setTo = function(e, i, n, s) {
                    return this._id = t._gid++, this.caller = e, this.method = i, this.args = n, this.once = s, this
                }, e.run = function() {
                    if (null == this.method) return null;
                    var t = this._id,
                        e = this.method.apply(this.caller, this.args);
                    return this._id === t && this.once && this.recover(), e
                }, e.runWith = function(t) {
                    if (null == this.method) return null;
                    var e = this._id;
                    if (null == t) var i = this.method.apply(this.caller, this.args);
                    else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
                    return this._id === e && this.once && this.recover(), i
                }, e.clear = function() {
                    return this.caller = null, this.method = null, this.args = null, this
                }, e.recover = function() {
                    this._id > 0 && (this._id = 0, t._pool.push(this.clear()))
                }, t.create = function(e, i, n, s) {
                    return void 0 === s && (s = !0), t._pool.length ? t._pool.pop().setTo(e, i, n, s) : new t(e, i, n, s)
                }, t._pool = [], t._gid = 1, t
            }(),
            u = function() {
                function t() {
                    this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0
                }
                s(t, "laya.display.BitmapFont");
                var e = t.prototype;
                return e.loadFont = function(t, e) {
                    this._path = t, this._complete = e, i.loader.load([{
                        url: this._path,
                        type: "xml"
                    }, {
                        url: this._path.replace(".fnt", ".png"),
                        type: "image"
                    }], l.create(this, this.onLoaded))
                }, e.onLoaded = function() {
                    this.parseFont(oe.getRes(this._path), oe.getRes(this._path.replace(".fnt", ".png"))), this._complete && this._complete.runWith(this._texture ? this : null)
                }, e.parseFont = function(t, e) {
                    if (null != t && null != e) {
                        this._texture = e;
                        var i = 1,
                            n = t.getElementsByTagName("info");
                        if (!n[0].getAttributeNode) return this.parseFont2(t, e);
                        this.fontSize = parseInt(n[0].getAttributeNode("size").nodeValue);
                        var s = n[0].getAttributeNode("padding").nodeValue,
                            r = s.split(",");
                        this._padding = [parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3])];
                        var o;
                        o = t.getElementsByTagName("char");
                        var a = 0;
                        for (a = 0; a < o.length; a++) {
                            var h = o[a],
                                l = parseInt(h.getAttributeNode("id").nodeValue),
                                u = parseInt(h.getAttributeNode("xoffset").nodeValue) / i,
                                c = parseInt(h.getAttributeNode("yoffset").nodeValue) / i,
                                _ = parseInt(h.getAttributeNode("xadvance").nodeValue) / i,
                                d = new P;
                            d.x = parseInt(h.getAttributeNode("x").nodeValue), d.y = parseInt(h.getAttributeNode("y").nodeValue), d.width = parseInt(h.getAttributeNode("width").nodeValue), d.height = parseInt(h.getAttributeNode("height").nodeValue);
                            var f = le.create(e, d.x, d.y, d.width, d.height, u, c);
                            this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[l] = f, this._fontWidthMap[l] = _
                        }
                    }
                }, e.parseFont2 = function(t, e) {
                    if (null != t && null != e) {
                        this._texture = e;
                        var i = 1,
                            n = t.getElementsByTagName("info");
                        this.fontSize = parseInt(n[0].attributes.size.nodeValue);
                        var s = n[0].attributes.padding.nodeValue,
                            r = s.split(",");
                        this._padding = [parseInt(r[0]), parseInt(r[1]), parseInt(r[2]), parseInt(r[3])];
                        var o = t.getElementsByTagName("char"),
                            a = 0;
                        for (a = 0; a < o.length; a++) {
                            var h = o[a].attributes,
                                l = parseInt(h.id.nodeValue),
                                u = parseInt(h.xoffset.nodeValue) / i,
                                c = parseInt(h.yoffset.nodeValue) / i,
                                _ = parseInt(h.xadvance.nodeValue) / i,
                                d = new P;
                            d.x = parseInt(h.x.nodeValue), d.y = parseInt(h.y.nodeValue), d.width = parseInt(h.width.nodeValue), d.height = parseInt(h.height.nodeValue);
                            var f = le.create(e, d.x, d.y, d.width, d.height, u, c);
                            this._maxWidth = Math.max(this._maxWidth, _ + this.letterSpacing), this._fontCharDic[l] = f, this._fontWidthMap[l] = _
                        }
                    }
                }, e.getCharTexture = function(t) {
                    return this._fontCharDic[t.charCodeAt(0)]
                }, e.destroy = function() {
                    if (this._texture) {
                        for (var t in this._fontCharDic) {
                            var e = this._fontCharDic[t];
                            e && e.destroy()
                        }
                        this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null
                    }
                }, e.setSpaceWidth = function(t) {
                    this._spaceWidth = t
                }, e.getCharWidth = function(t) {
                    var e = t.charCodeAt(0);
                    return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " == t ? this._spaceWidth + this.letterSpacing : 0
                }, e.getTextWidth = function(t) {
                    for (var e = 0, i = 0, n = t.length; n > i; i++) e += this.getCharWidth(t.charAt(i));
                    return e
                }, e.getMaxWidth = function() {
                    return this._maxWidth
                }, e.getMaxHeight = function() {
                    return this.fontSize
                }, e.drawText = function(t, e, i, n, s, r) {
                    var o, a = this.getTextWidth(t),
                        h = 0;
                    "center" === s && (h = (r - a) / 2), "right" === s && (h = r - a);
                    for (var l = 0, u = 0, c = t.length; c > u; u++) o = this.getCharTexture(t.charAt(u)), o && (e.graphics.drawTexture(o, i + l + h, n), l += this.getCharWidth(t.charAt(u)))
                }, t
            }(),
            c = function() {
                function t() {
                    this.alpha = 1, this.visible = !0, this.scrollRect = null, this.blendMode = null, this._type = 0, this._tf = t._TF_EMPTY
                }
                s(t, "laya.display.css.Style");
                var e = t.prototype;
                return e.getTransform = function() {
                    return this._tf
                }, e.setTransform = function(e) {
                    this._tf = "none" !== e && e ? e : t._TF_EMPTY
                }, e.setTranslateX = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.translateX = e
                }, e.setTranslateY = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.translateY = e
                }, e.setScaleX = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.scaleX = e
                }, e.setScale = function(e, i) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.scaleX = e, this._tf.scaleY = i
                }, e.setScaleY = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.scaleY = e
                }, e.setRotate = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.rotate = e
                }, e.setSkewX = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.skewX = e
                }, e.setSkewY = function(e) {
                    this._tf === t._TF_EMPTY && (this._tf = new d), this._tf.skewY = e
                }, e.destroy = function() {
                    this.scrollRect = null
                }, e.render = function() {}, e.getCSSStyle = function() {
                    return te.EMPTY
                }, e._enableLayout = function() {
                    return !1
                }, r(0, e, "scaleX", function() {
                    return this._tf.scaleX
                }, function(t) {
                    this.setScaleX(t)
                }), r(0, e, "transform", function() {
                    return this.getTransform()
                }, function(t) {
                    this.setTransform(t)
                }), r(0, e, "translateX", function() {
                    return this._tf.translateX
                }, function(t) {
                    this.setTranslateX(t)
                }), r(0, e, "translateY", function() {
                    return this._tf.translateY
                }, function(t) {
                    this.setTranslateY(t)
                }), r(0, e, "scaleY", function() {
                    return this._tf.scaleY
                }, function(t) {
                    this.setScaleY(t)
                }), r(0, e, "block", function() {
                    return 0 != (1 & this._type)
                }), r(0, e, "skewY", function() {
                    return this._tf.skewY
                }, function(t) {
                    this.setSkewY(t)
                }), r(0, e, "rotate", function() {
                    return this._tf.rotate
                }, function(t) {
                    this.setRotate(t)
                }), r(0, e, "skewX", function() {
                    return this._tf.skewX
                }, function(t) {
                    this.setSkewX(t)
                }), r(0, e, "paddingLeft", function() {
                    return 0
                }), r(0, e, "paddingTop", function() {
                    return 0
                }), r(0, e, "absolute", function() {
                    return !0
                }), t.__init__ = function() {
                    t._TF_EMPTY = new d, t.EMPTY = new t
                }, t.EMPTY = null, t._TF_EMPTY = null, t
            }(),
            _ = function() {
                function t(e) {
                    this._type = 0, this._weight = 0, this._decoration = null, this._text = null, this.indent = 0, this._color = G.create(t.defaultColor), this.family = t.defaultFamily, this.stroke = t._STROKE, this.size = t.defaultSize, e && e !== t.EMPTY && e.copyTo(this)
                }
                s(t, "laya.display.css.Font");
                var e = t.prototype;
                return e.set = function(t) {
                    this._text = null;
                    for (var e = t.split(" "), i = 0, n = e.length; n > i; i++) {
                        var s = e[i];
                        switch (s) {
                            case "italic":
                                this.italic = !0;
                                continue;
                            case "bold":
                                this.bold = !0;
                                continue
                        }
                        s.indexOf("px") > 0 && (this.size = parseInt(s), this.family = e[i + 1], i++)
                    }
                }, e.toString = function() {
                    return this._text = "", this.italic && (this._text += "italic "), this.bold && (this._text += "bold "), this._text += this.size + "px " + this.family
                }, e.copyTo = function(e) {
                    e._type = this._type, e._text = this._text, e._weight = this._weight, e._color = this._color, e.family = this.family, e.stroke = this.stroke != t._STROKE ? this.stroke.slice() : t._STROKE, e.indent = this.indent, e.size = this.size
                }, r(0, e, "password", function() {
                    return 0 !== (1024 & this._type)
                }, function(t) {
                    t ? this._type |= 1024 : this._type &= -1025
                }), r(0, e, "color", function() {
                    return this._color.strColor
                }, function(t) {
                    this._color = G.create(t)
                }), r(0, e, "italic", function() {
                    return 0 !== (512 & this._type)
                }, function(t) {
                    t ? this._type |= 512 : this._type &= -513
                }), r(0, e, "bold", function() {
                    return 0 !== (2048 & this._type)
                }, function(t) {
                    t ? this._type |= 2048 : this._type &= -2049
                }), r(0, e, "weight", function() {
                    return "" + this._weight
                }, function(t) {
                    var e = 0;
                    switch (t) {
                        case "normal":
                            break;
                        case "bold":
                            this.bold = !0, e = 700;
                            break;
                        case "bolder":
                            e = 800;
                            break;
                        case "lighter":
                            e = 100;
                            break;
                        default:
                            e = parseInt(t)
                    }
                    this._weight = e, this._text = null
                }), r(0, e, "decoration", function() {
                    return this._decoration ? this._decoration.value : "none"
                }, function(t) {
                    var e = t.split(" ");
                    switch (this._decoration || (this._decoration = {}), e[0]) {
                        case "_":
                            this._decoration.type = "underline";
                            break;
                        case "-":
                            this._decoration.type = "line-through";
                            break;
                        case "overline":
                            this._decoration.type = "overline";
                            break;
                        default:
                            this._decoration.type = e[0]
                    }
                    e[1] && (this._decoration.color = G.create(e)), this._decoration.value = t
                }), t.__init__ = function() {
                    t.EMPTY = new t(null)
                }, t.EMPTY = null, t.defaultColor = "#000000", t.defaultSize = 12, t.defaultFamily = "Arial", t.defaultFont = "12px Arial", t._STROKE = [0, "#000000"], t._ITALIC = 512, t._PASSWORD = 1024, t._BOLD = 2048, t
            }(),
            d = function() {
                function t() {
                    this.translateX = 0, this.translateY = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, this.skewX = 0, this.skewY = 0
                }
                return s(t, "laya.display.css.TransformInfo"), t
            }(),
            f = function() {
                function e() {
                    if (this._one = null, this._cmds = null, this._render = this._renderEmpty, R.isConchNode) {
                        var e = this;
                        e._nativeObj = new t._conchGraphics, e.id = e._nativeObj.conchID
                    }
                }
                s(e, "laya.display.Graphics");
                var n = e.prototype;
                return n.destroy = function() {
                    this.clear(), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0), this._sp = null
                }, n.clear = function(t) {
                    void 0 === t && (t = !1);
                    var i = 0,
                        n = 0;
                    if (t) {
                        var s = this._one;
                        if (this._cmds) {
                            for (n = this._cmds.length, i = 0; n > i; i++) s = this._cmds[i], !s || s.callee !== R._context._drawTexture && s.callee !== R._context._drawTextureWithTransform || (s[0] = null, e._cache.push(s));
                            this._cmds.length = 0
                        } else s && (!s || s.callee !== R._context._drawTexture && s.callee !== R._context._drawTextureWithTransform || (s[0] = null, e._cache.push(s)))
                    } else this._cmds = null;
                    if (this._one = null, this._render = this._renderEmpty, this._sp && (this._sp._renderType &= -514), this._repaint(), this._vectorgraphArray) {
                        for (i = 0, n = this._vectorgraphArray.length; n > i; i++) q.getInstance().deleteShape(this._vectorgraphArray[i]);
                        this._vectorgraphArray.length = 0
                    }
                }, n._clearBoundsCache = function() {
                    this._graphicBounds && this._graphicBounds.reset()
                }, n._initGraphicBounds = function() {
                    this._graphicBounds || (this._graphicBounds = new p, this._graphicBounds._graphics = this)
                }, n._repaint = function() {
                    this._clearBoundsCache(), this._sp && this._sp.repaint()
                }, n._isOnlyOne = function() {
                    return !this._cmds || 0 === this._cmds.length
                }, n.getBounds = function(t) {
                    return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t)
                }, n.getBoundPoints = function(t) {
                    return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t)
                }, n._addCmd = function(t) {
                    this._cmds = this._cmds || [], t.callee = t.shift(), this._cmds.push(t)
                }, n.setFilters = function(t) {
                    this._saveToCmd(R._context._setFilters, t)
                }, n.drawTexture = function(t, i, n, s, r, o, a, h) {
                    if (void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = 0), void 0 === a && (a = 1), !t || .01 > a) return null;
                    s || (s = t.sourceWidth), r || (r = t.sourceHeight), a = 0 > a ? 0 : a > 1 ? 1 : a;
                    var l = !R.isWebGL && (B.onFirefox || B.onEdge || B.onIE || B.onSafari) ? .5 : 0,
                        u = s / t.sourceWidth,
                        c = r / t.sourceHeight;
                    if (s = t.width * u, r = t.height * c, t.loaded && (0 >= s || 0 >= r)) return null;
                    i += t.offsetX * u, n += t.offsetY * c, this._sp && (this._sp._renderType |= 512);
                    var _;
                    return i -= l, n -= l, s += 2 * l, r += 2 * l, e._cache.length ? (_ = e._cache.pop(), _[0] = t, _[1] = i, _[2] = n, _[3] = s, _[4] = r, _[5] = o, _[6] = a, _[7] = h) : _ = [t, i, n, s, r, o, a, h], _.callee = o || 1 != a ? R._context._drawTextureWithTransform : R._context._drawTexture, null != this._one || o || 1 != a ? this._saveToCmd(_.callee, _) : (this._one = _, this._render = this._renderOneImg), t.loaded || t.once("loaded", this, this._textureLoaded, [t, _]), this._repaint(), _
                }, n.cleanByTexture = function(t, e, i, n, s) {
                    if (void 0 === n && (n = 0), void 0 === s && (s = 0), !t) return this.clear();
                    if (this._one && this._render === this._renderOneImg) {
                        n || (n = t.sourceWidth), s || (s = t.sourceHeight);
                        var r = n / t.sourceWidth,
                            o = s / t.sourceHeight;
                        n = t.width * r, s = t.height * o, e += t.offsetX * r, i += t.offsetY * o, this._one[0] = t, this._one[1] = e, this._one[2] = i, this._one[3] = n, this._one[4] = s, this._repaint()
                    } else this.clear(), t && this.drawTexture(t, e, i, n, s)
                }, n.drawTextures = function(t, e) {
                    t && this._saveToCmd(R._context._drawTextures, [t, e])
                }, n.fillTexture = function(t, e, i, n, s, r, o) {
                    if (void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = "repeat"), t) {
                        var a = [t, e, i, n, s, r, o || S.EMPTY, {}];
                        t.loaded || t.once("loaded", this, this._textureLoaded, [t, a]), this._saveToCmd(R._context._fillTexture, a)
                    }
                }, n._textureLoaded = function(t, e) {
                    e[3] = e[3] || t.width, e[4] = e[4] || t.height, this._repaint()
                }, n.fillCircle = function(t, e, i, n, s, r, o) {
                    i.bitmap.enableMerageInAtlas = !1;
                    var a = new Float32Array(2 * (o + 1)),
                        h = new Float32Array(2 * (o + 1)),
                        l = new Uint16Array(3 * o),
                        u = 2 * Math.PI / o,
                        c = 0;
                    a[0] = n, a[1] = s, h[0] = n / i.width, h[1] = s / i.height;
                    for (var _ = 2, d = 0; o > d; d++) {
                        var f = r * Math.cos(c) + n,
                            p = r * Math.sin(c) + s;
                        a[_] = f, a[_ + 1] = p, h[_] = f / i.width, h[_ + 1] = p / i.height, c += u, _ += 2
                    }
                    for (_ = 0, d = 0; o > d; d++) l[_++] = 0, l[_++] = d + 1, l[_++] = d + 2 >= o + 1 ? 1 : d + 2;
                    this.drawTriangles(i, t, e, a, h, l)
                }, n.drawTriangles = function(t, e, i, n, s, r, o, a, h, l) {
                    void 0 === a && (a = 1), this._saveToCmd(R._context.drawTriangles, [t, e, i, n, s, r, o, a, h, l])
                }, n._saveToCmd = function(t, e) {
                    return this._sp && (this._sp._renderType |= 512), null == this._one ? (this._one = e, this._render = this._renderOne) : (this._sp && (this._sp._renderType &= -2), this._render = this._renderAll, 0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), e.callee = t, this._repaint(), e
                }, n.clipRect = function(t, e, i, n) {
                    this._saveToCmd(R._context._clipRect, [t, e, i, n])
                }, n.fillText = function(t, e, i, n, s, r, o) {
                    void 0 === o && (o = 0), this._saveToCmd(R._context._fillText, [t, e, i, n || _.defaultFont, s, r])
                }, n.fillBorderText = function(t, e, i, n, s, r, o, a) {
                    this._saveToCmd(R._context._fillBorderText, [t, e, i, n || _.defaultFont, s, r, o, a])
                }, n.strokeText = function(t, e, i, n, s, r, o) {
                    this._saveToCmd(R._context._strokeText, [t, e, i, n || _.defaultFont, s, r, o])
                }, n.alpha = function(t) {
                    t = 0 > t ? 0 : t > 1 ? 1 : t, this._saveToCmd(R._context._alpha, [t])
                }, n.setAlpha = function(t) {
                    t = 0 > t ? 0 : t > 1 ? 1 : t, this._saveToCmd(R._context._setAlpha, [t])
                }, n.transform = function(t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(R._context._transform, [t, e, i])
                }, n.rotate = function(t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(R._context._rotate, [t, e, i])
                }, n.scale = function(t, e, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = 0), this._saveToCmd(R._context._scale, [t, e, i, n])
                }, n.translate = function(t, e) {
                    this._saveToCmd(R._context._translate, [t, e])
                }, n.save = function() {
                    this._saveToCmd(R._context._save, [])
                }, n.restore = function() {
                    this._saveToCmd(R._context._restore, [])
                }, n.replaceText = function(t) {
                    this._repaint();
                    var e = this._cmds;
                    if (e) {
                        for (var i = e.length - 1; i > -1; i--)
                            if (this._isTextCmd(e[i].callee)) return e[i][0].toUpperCase ? e[i][0] = t : e[i][0].setText(t), !0
                    } else if (this._one && this._isTextCmd(this._one.callee)) return this._one[0].toUpperCase ? this._one[0] = t : this._one[0].setText(t), !0;
                    return !1
                }, n._isTextCmd = function(t) {
                    return t === R._context._fillText || t === R._context._fillBorderText || t === R._context._strokeText
                }, n.replaceTextColor = function(t) {
                    this._repaint();
                    var e = this._cmds;
                    if (e)
                        for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i].callee) && (e[i][4] = t, e[i][0].toUpperCase || (e[i][0].changed = !0));
                    else this._one && this._isTextCmd(this._one.callee) && (this._one[4] = t, this._one[0].toUpperCase || (this._one[0].changed = !0))
                }, n.loadImage = function(t, e, n, s, r, o) {
                    function a(t) {
                        t && (h.drawTexture(t, e, n, s, r), null != o && o.call(h._sp, t))
                    }
                    var h = this;
                    void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = 0);
                    var u = oe.getRes(t);
                    u ? a(u) : i.loader.load(t, l.create(null, a), null, "image")
                }, n._renderEmpty = function() {}, n._renderAll = function(t, e, i, n) {
                    for (var s, r = this._cmds, o = 0, a = r.length; a > o; o++)(s = r[o]).callee.call(e, i, n, s)
                }, n._renderOne = function(t, e, i, n) {
                    this._one.callee.call(e, i, n, this._one)
                }, n._renderOneImg = function(t, e, i, n) {
                    this._one.callee.call(e, i, n, this._one), 2305 !== t._renderType && (t._renderType |= 1)
                }, n.drawLine = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 1);
                    var o = 0;
                    R.isWebGL && (o = q.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o));
                    var a = r % 2 === 0 ? 0 : .5,
                        h = [t + a, e + a, i + a, n + a, s, r, o];
                    this._saveToCmd(R._context._drawLine, h)
                }, n.drawLines = function(t, e, i, n, s) {
                    void 0 === s && (s = 1);
                    var r = 0;
                    if (i && !(i.length < 4)) {
                        R.isWebGL && (r = q.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(r));
                        var o = s % 2 === 0 ? 0 : .5,
                            a = [t + o, e + o, i, n, s, r];
                        this._saveToCmd(R._context._drawLines, a)
                    }
                }, n.drawCurves = function(t, e, i, n, s) {
                    void 0 === s && (s = 1);
                    var r = [t, e, i, n, s];
                    this._saveToCmd(R._context._drawCurves, r)
                }, n.drawRect = function(t, e, i, n, s, r, o) {
                    void 0 === o && (o = 1);
                    var a = r ? o / 2 : 0,
                        h = r ? o : 0,
                        l = [t + a, e + a, i - h, n - h, s, r, o];
                    this._saveToCmd(R._context._drawRect, l)
                }, n.drawCircle = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 1);
                    var o = s ? r / 2 : 0,
                        a = 0;
                    R.isWebGL && (a = q.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(a));
                    var h = [t, e, i - o, n, s, r, a];
                    this._saveToCmd(R._context._drawCircle, h)
                }, n.drawPie = function(t, e, i, n, s, r, o, a) {
                    void 0 === a && (a = 1);
                    var h = o ? a / 2 : 0,
                        l = o ? a : 0,
                        u = 0;
                    R.isWebGL && (u = q.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(u));
                    var c = [t + h, e + h, i - l, n, s, r, o, a, u];
                    c[3] = K.toRadian(n), c[4] = K.toRadian(s), this._saveToCmd(R._context._drawPie, c)
                }, n.drawPoly = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 1);
                    var o = 0,
                        a = !1;
                    R.isWebGL && (o = q.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), this._vectorgraphArray.push(o), a = i.length > 6 ? !1 : !0);
                    var h = s ? r % 2 === 0 ? 0 : .5 : 0,
                        l = [t + h, e + h, i, n, s, r, o, a];
                    this._saveToCmd(R._context._drawPoly, l)
                }, n.drawPath = function(t, e, i, n, s) {
                    var r = [t, e, i, n, s];
                    this._saveToCmd(R._context._drawPath, r)
                }, r(0, n, "cmds", function() {
                    return this._cmds
                }, function(t) {
                    this._sp && (this._sp._renderType |= 512), this._cmds = t, this._render = this._renderAll, this._repaint()
                }), e.__init__ = function() {
                    if (R.isConchNode) {
                        for (var t = laya.display.Graphics.prototype, e = B.window.ConchGraphics.prototype, i = ["clear", "destroy", "alpha", "rotate", "transform", "scale", "translate", "save", "restore", "clipRect", "blendMode", "fillText", "fillBorderText", "_fands", "drawRect", "drawCircle", "drawPie", "drawPoly", "drawPath", "drawImageM", "drawLine", "drawLines", "_drawPs", "drawCurves", "replaceText", "replaceTextColor", "_fillImage", "fillTexture", "setSkinMesh", "drawParticle", "drawImageS"], n = 0, s = i.length; s >= n; n++) {
                            var r = i[n];
                            t[r] = e[r]
                        }
                        t._saveToCmd = null, e.drawImageS && (t.drawTextures = function(t, e) {
                            if (t && t.loaded && t.bitmap && t.source) {
                                var i = t.uv,
                                    n = t.bitmap.width,
                                    s = t.bitmap.height;
                                this.drawImageS(t.bitmap.source, i[0] * n, i[1] * s, (i[2] - i[0]) * n, (i[5] - i[3]) * s, t.offsetX, t.offsetY, t.width, t.height, e)
                            }
                        }), t.drawTexture = function(t, e, i, n, s, r, o) {
                            if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === o && (o = 1), t) {
                                if (!t.loaded) return t.once("loaded", this, function() {
                                    this.drawTexture(t, e, i, n, s, r)
                                }), void 0;
                                if (t.loaded && t.bitmap && t.source && (n || (n = t.sourceWidth), s || (s = t.sourceHeight), o = 0 > o ? 0 : o > 1 ? 1 : o, n = n - t.sourceWidth + t.width, s = s - t.sourceHeight + t.height, !(0 >= n || 0 >= s))) {
                                    e += t.offsetX, i += t.offsetY;
                                    var a = t.uv,
                                        h = t.bitmap.width,
                                        l = t.bitmap.height;
                                    this.drawImageM(t.bitmap.source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, e, i, n, s, r, o), this._repaint()
                                }
                            }
                        }, t.fillTexture = function(t, e, i, n, s, r, o) {
                            if (void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = "repeat"), t && t.loaded) {
                                var a, h = R._context.ctx,
                                    l = t.bitmap.width,
                                    u = t.bitmap.height,
                                    c = t.uv;
                                a = t.uv != le.DEF_UV ? h.createPattern(t.bitmap.source, r, c[0] * l, c[1] * u, (c[2] - c[0]) * l, (c[5] - c[3]) * u) : h.createPattern(t.bitmap.source, r);
                                var _ = 0,
                                    d = 0;
                                o && (e += o.x % t.width, i += o.y % t.height, _ -= o.x % t.width, d -= o.y % t.height), this._fillImage(a, e, i, _, d, n, s)
                            }
                        }
                    }
                }, e._cache = [], e
            }(),
            p = function() {
                function t() {
                    this._cacheBoundsType = !1
                }
                s(t, "laya.display.GraphicsBounds");
                var e = t.prototype;
                return e.destroy = function() {
                    this._graphics = null, this._temp = null, this._rstBoundPoints = null, this._bounds = null
                }, e.reset = function() {
                    this._temp && (this._temp.length = 0)
                }, e.getBounds = function(t) {
                    return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = P._getWrapRec(this.getBoundPoints(t), this._bounds)), this._cacheBoundsType = t, this._bounds
                }, e.getBoundPoints = function(t) {
                    return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), this._cacheBoundsType = t, this._rstBoundPoints = K.copyArray(this._rstBoundPoints, this._temp)
                }, e._getCmdPoints = function(e) {
                    void 0 === e && (e = !1);
                    var i, n = R._context,
                        s = this._graphics.cmds;
                    if (i = this._temp || (this._temp = []), i.length = 0, s || null == this._graphics._one || (t._tempCmds.length = 0, t._tempCmds.push(this._graphics._one), s = t._tempCmds), !s) return i;
                    var r;
                    r = t._tempMatrixArrays, r.length = 0;
                    var o = t._initMatrix;
                    o.identity();
                    for (var a, h, l = t._tempMatrix, u = 0 / 0, c = 0 / 0, _ = 0 / 0, d = 0 / 0, f = 0 / 0, p = 0 / 0, g = 0, m = s.length; m > g; g++)
                        if (a = s[g], a.callee) switch (a.callee) {
                            case n._save:
                            case 7:
                                r.push(o), o = o.clone();
                                break;
                            case n._restore:
                            case 8:
                                o = r.pop();
                                break;
                            case n._scale:
                            case 5:
                                l.identity(), l.translate(-a[2], -a[3]), l.scale(a[0], a[1]), l.translate(a[2], a[3]), this._switchMatrix(o, l);
                                break;
                            case n._rotate:
                            case 3:
                                l.identity(), l.translate(-a[1], -a[2]), l.rotate(a[0]), l.translate(a[1], a[2]), this._switchMatrix(o, l);
                                break;
                            case n._translate:
                            case 6:
                                l.identity(), l.translate(a[0], a[1]), this._switchMatrix(o, l);
                                break;
                            case n._transform:
                            case 4:
                                l.identity(), l.translate(-a[1], -a[2]), l.concat(a[0]), l.translate(a[1], a[2]), this._switchMatrix(o, l);
                                break;
                            case 16:
                            case 24:
                                t._addPointArrToRst(i, P._getBoundPointS(a[0], a[1], a[2], a[3]), o);
                                break;
                            case 17:
                                o.copyTo(l), l.concat(a[4]), t._addPointArrToRst(i, P._getBoundPointS(a[0], a[1], a[2], a[3]), l);
                                break;
                            case n._drawTexture:
                                h = a[0], e ? a[3] && a[4] ? t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], a[3], a[4]), o) : (h = a[0], t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], h.width, h.height), o)) : (u = (a[3] || h.sourceWidth) / h.width, c = (a[4] || h.sourceHeight) / h.height, _ = u * h.sourceWidth, d = c * h.sourceHeight, f = h.offsetX > 0 ? h.offsetX : 0, p = h.offsetY > 0 ? h.offsetY : 0, f *= u, p *= c, t._addPointArrToRst(i, P._getBoundPointS(a[1] - f, a[2] - p, _, d), o));
                                break;
                            case n._fillTexture:
                                a[3] && a[4] ? t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], a[3], a[4]), o) : (h = a[0], t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], h.width, h.height), o));
                                break;
                            case n._drawTextureWithTransform:
                                var v;
                                a[5] ? (o.copyTo(l), l.concat(a[5]), v = l) : v = o, e ? a[3] && a[4] ? t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], a[3], a[4]), v) : (h = a[0], t._addPointArrToRst(i, P._getBoundPointS(a[1], a[2], h.width, h.height), v)) : (h = a[0], u = (a[3] || h.sourceWidth) / h.width, c = (a[4] || h.sourceHeight) / h.height, _ = u * h.sourceWidth, d = c * h.sourceHeight, f = h.offsetX > 0 ? h.offsetX : 0, p = h.offsetY > 0 ? h.offsetY : 0, f *= u, p *= c, t._addPointArrToRst(i, P._getBoundPointS(a[1] - f, a[2] - p, _, d), v));
                                break;
                            case n._drawRect:
                            case 13:
                                t._addPointArrToRst(i, P._getBoundPointS(a[0], a[1], a[2], a[3]), o);
                                break;
                            case n._drawCircle:
                            case n._fillCircle:
                            case 14:
                                t._addPointArrToRst(i, P._getBoundPointS(a[0] - a[2], a[1] - a[2], a[2] + a[2], a[2] + a[2]), o);
                                break;
                            case n._drawLine:
                            case 20:
                                t._tempPoints.length = 0;
                                var y = 0 / 0;
                                y = .5 * a[5], a[0] == a[2] ? t._tempPoints.push(a[0] + y, a[1], a[2] + y, a[3], a[0] - y, a[1], a[2] - y, a[3]) : a[1] == a[3] ? t._tempPoints.push(a[0], a[1] + y, a[2], a[3] + y, a[0], a[1] - y, a[2], a[3] - y) : t._tempPoints.push(a[0], a[1], a[2], a[3]), t._addPointArrToRst(i, t._tempPoints, o);
                                break;
                            case n._drawCurves:
                            case 22:
                                t._addPointArrToRst(i, T.I.getBezierPoints(a[2]), o, a[0], a[1]);
                                break;
                            case n._drawPoly:
                            case n._drawLines:
                            case 18:
                                t._addPointArrToRst(i, a[2], o, a[0], a[1]);
                                break;
                            case n._drawPath:
                            case 19:
                                t._addPointArrToRst(i, this._getPathPoints(a[2]), o, a[0], a[1]);
                                break;
                            case n._drawPie:
                            case 15:
                                t._addPointArrToRst(i, this._getPiePoints(a[0], a[1], a[2], a[3], a[4]), o)
                        }
                    return i.length > 200 ? i = K.copyArray(i, P._getWrapRec(i)._getBoundPoints()) : i.length > 8 && (i = b.scanPList(i)), i
                }, e._switchMatrix = function(t, e) {
                    e.concat(t), e.copyTo(t)
                }, e._getPiePoints = function(e, i, n, s, r) {
                    var o = t._tempPoints;
                    t._tempPoints.length = 0, o.push(e, i);
                    var a = (r - s) % (2 * Math.PI),
                        h = 10,
                        l = a / h,
                        u = 0 / 0,
                        c = s;
                    for (u = 0; h >= u; u++) o.push(e + n * Math.cos(c), i + n * Math.sin(c)), c += l;
                    return o
                }, e._getPathPoints = function(e) {
                    var i = 0,
                        n = 0,
                        s = t._tempPoints;
                    s.length = 0, n = e.length;
                    var r;
                    for (i = 0; n > i; i++) r = e[i], r.length > 1 && (s.push(r[1], r[2]), r.length > 3 && s.push(r[3], r[4]));
                    return s
                }, t._addPointArrToRst = function(e, i, n, s, r) {
                    void 0 === s && (s = 0), void 0 === r && (r = 0);
                    var o = 0,
                        a = 0;
                    for (a = i.length, o = 0; a > o; o += 2) t._addPointToRst(e, i[o] + s, i[o + 1] + r, n)
                }, t._addPointToRst = function(t, e, i, n) {
                    var s = S.TEMP;
                    s.setTo(e ? e : 0, i ? i : 0), n.transformPoint(s), t.push(s.x, s.y)
                }, t._tempPoints = [], t._tempMatrixArrays = [], t._tempCmds = [], n(t, ["_tempMatrix", function() {
                    return this._tempMatrix = new M
                }, "_initMatrix", function() {
                    return this._initMatrix = new M
                }]), t
            }(),
            g = function() {
                function t() {}
                s(t, "laya.events.Event");
                var e = t.prototype;
                return e.setTo = function(t, e, i) {
                    return this.type = t, this.currentTarget = e, this.target = i, this
                }, e.stopPropagation = function() {
                    this._stoped = !0
                }, r(0, e, "stageY", function() {
                    return i.stage.mouseY
                }), r(0, e, "charCode", function() {
                    return this.nativeEvent.charCode
                }), r(0, e, "touches", function() {
                    var t = this.nativeEvent.touches;
                    if (t)
                        for (var e = i.stage, n = 0, s = t.length; s > n; n++) {
                            var r = t[n],
                                o = S.TEMP;
                            o.setTo(r.clientX, r.clientY), e._canvasTransform.invertTransformPoint(o), e.transform.invertTransformPoint(o), r.stageX = o.x, r.stageY = o.y
                        }
                    return t
                }), r(0, e, "keyLocation", function() {
                    return this.nativeEvent.keyLocation
                }), r(0, e, "ctrlKey", function() {
                    return this.nativeEvent.ctrlKey
                }), r(0, e, "altKey", function() {
                    return this.nativeEvent.altKey
                }), r(0, e, "shiftKey", function() {
                    return this.nativeEvent.shiftKey
                }), r(0, e, "stageX", function() {
                    return i.stage.mouseX
                }), t.EMPTY = new t, t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.PROGRESS = "progress", t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", t.MESSAGE = "message", t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", t.KEY_UP = "keyup", t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", t.DRAG_END = "dragend", t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", t.FOCUS_CHANGE = "focuschange", t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", t.START = "start", t.END = "end", t.ENABLE_CHANGED = "enablechanged", t.ACTIVE_IN_HIERARCHY_CHANGED = "activeinhierarchychanged", t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", t.LAYER_CHANGED = "layerchanged", t.HIERARCHY_LOADED = "hierarchyloaded", t.RECOVERED = "recovered", t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", t.DEVICE_LOST = "devicelost", t.MESH_CHANGED = "meshchanged", t.MATERIAL_CHANGED = "materialchanged", t.WORLDMATRIX_NEEDCHANGE = "worldmatrixneedchanged", t.ANIMATION_CHANGED = "animationchanged", t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", t.TRIGGER_EXIT = "triggerexit", t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.DOMINO_FILTER_CHANGE = "dominofilterchange", t
            }(),
            m = (function() {
                function t() {}
                return s(t, "laya.events.Keyboard"), t.NUMBER_0 = 48, t.NUMBER_1 = 49, t.NUMBER_2 = 50, t.NUMBER_3 = 51, t.NUMBER_4 = 52, t.NUMBER_5 = 53, t.NUMBER_6 = 54, t.NUMBER_7 = 55, t.NUMBER_8 = 56, t.NUMBER_9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.F1 = 112, t.F2 = 113, t.F3 = 114, t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t.F9 = 120, t.F10 = 121, t.F11 = 122, t.F12 = 123, t.F13 = 124, t.F14 = 125, t.F15 = 126, t.NUMPAD = 21, t.NUMPAD_0 = 96, t.NUMPAD_1 = 97, t.NUMPAD_2 = 98, t.NUMPAD_3 = 99, t.NUMPAD_4 = 100, t.NUMPAD_5 = 101, t.NUMPAD_6 = 102, t.NUMPAD_7 = 103, t.NUMPAD_8 = 104, t.NUMPAD_9 = 105, t.NUMPAD_ADD = 107, t.NUMPAD_DECIMAL = 110, t.NUMPAD_DIVIDE = 111, t.NUMPAD_ENTER = 108, t.NUMPAD_MULTIPLY = 106, t.NUMPAD_SUBTRACT = 109, t.SEMICOLON = 186, t.EQUAL = 187, t.COMMA = 188, t.MINUS = 189, t.PERIOD = 190, t.SLASH = 191, t.BACKQUOTE = 192, t.LEFTBRACKET = 219, t.BACKSLASH = 220, t.RIGHTBRACKET = 221, t.QUOTE = 222, t.ALTERNATE = 18, t.BACKSPACE = 8, t.CAPS_LOCK = 20, t.COMMAND = 15, t.CONTROL = 17, t.DELETE = 46, t.ENTER = 13, t.ESCAPE = 27, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.END = 35, t.HOME = 36, t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, t.INSERT = 45, t
            }(), function() {
                function t() {}
                return s(t, "laya.events.KeyBoardManager"), t.__init__ = function() {
                    t._addEvent("keydown"), t._addEvent("keypress"), t._addEvent("keyup")
                }, t._addEvent = function(t) {
                    B.document.addEventListener(t, function(e) {
                        laya.events.KeyBoardManager._dispatch(e, t)
                    }, !0)
                }, t._dispatch = function(e, n) {
                    if (t.enabled) {
                        t._event._stoped = !1, t._event.nativeEvent = e, t._event.keyCode = e.keyCode || e.which || e.charCode, "keydown" === n ? t._pressKeys[t._event.keyCode] = !0 : "keyup" === n && (t._pressKeys[t._event.keyCode] = null);
                        for (var s = i.stage.focus && null != i.stage.focus.event && i.stage.focus.displayedInStage ? i.stage.focus : i.stage, r = s; r;) r.event(n, t._event.setTo(n, r, s)), r = r.parent
                    }
                }, t.hasKeyDown = function(e) {
                    return t._pressKeys[e]
                }, t._pressKeys = {}, t.enabled = !0, n(t, ["_event", function() {
                    return this._event = new g
                }]), t
            }()),
            v = (function() {
                function t() {}
                return s(t, "laya.events.KeyLocation"), t.STANDARD = 0, t.LEFT = 1, t.RIGHT = 2, t.NUM_PAD = 3, t
            }(), function() {
                function t() {
                    this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, this.mouseMoveAccuracy = 2, this._stage = null, this._target = null, this._lastMoveTimer = 0, this._isLeftMouse = !1, this._eventList = [], this._touchIDs = {}, this._id = 1, this._tTouchID = 0, this._event = new g, this._matrix = new M, this._point = new S, this._rect = new P, this._prePoint = new S, this._curTouchID = 0 / 0
                }
                s(t, "laya.events.MouseManager");
                var e = t.prototype;
                return e.__init__ = function(e, i) {
                    var n = this;
                    this._stage = e;
                    var s = this,
                        r = this._eventList;
                    i.oncontextmenu = function() {
                        return t.enabled ? !1 : void 0
                    }, i.addEventListener("mousedown", function(e) {
                        t.enabled && (B.onIE || e.preventDefault(), r.push(e), s.mouseDownTime = B.now())
                    }), i.addEventListener("mouseup", function(e) {
                        t.enabled && (e.preventDefault(), r.push(e), s.mouseDownTime = -B.now())
                    }, !0), i.addEventListener("mousemove", function(e) {
                        if (t.enabled) {
                            e.preventDefault();
                            var i = B.now();
                            if (i - s._lastMoveTimer < 10) return;
                            s._lastMoveTimer = i, r.push(e)
                        }
                    }, !0), i.addEventListener("mouseout", function(e) {
                        t.enabled && r.push(e)
                    }), i.addEventListener("mouseover", function(e) {
                        t.enabled && r.push(e)
                    }), i.addEventListener("touchstart", function(e) {
                        t.enabled && (r.push(e), t._isFirstTouch || xe.isInputting || e.preventDefault(), s.mouseDownTime = B.now())
                    }), i.addEventListener("touchend", function(e) {
                        t.enabled ? (t._isFirstTouch || xe.isInputting || e.preventDefault(), t._isFirstTouch = !1, r.push(e), s.mouseDownTime = -B.now()) : n._curTouchID = 0 / 0
                    }, !0), i.addEventListener("touchmove", function(e) {
                        t.enabled && (e.preventDefault(), r.push(e))
                    }, !0), i.addEventListener("touchcancel", function(e) {
                        t.enabled ? (e.preventDefault(), r.push(e)) : n._curTouchID = 0 / 0
                    }, !0), i.addEventListener("mousewheel", function(e) {
                        t.enabled && r.push(e)
                    }), i.addEventListener("DOMMouseScroll", function(e) {
                        t.enabled && r.push(e)
                    })
                }, e.initEvent = function(t, e) {
                    var i = this;
                    i._event._stoped = !1, i._event.nativeEvent = e || t, i._target = null, this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform.invertTransformPoint(this._point), i.mouseX = this._point.x, i.mouseY = this._point.y, i._event.touchId = t.identifier || 0, this._tTouchID = i._event.touchId;
                    var n;
                    n = y.I._event, n._stoped = !1, n.nativeEvent = i._event.nativeEvent, n.touchId = i._event.touchId
                }, e.checkMouseWheel = function(t) {
                    this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
                    for (var e = y.I.getLastOvers(), i = 0, n = e.length; n > i; i++) {
                        var s = e[i];
                        s.event("mousewheel", this._event.setTo("mousewheel", s, this._target))
                    }
                }, e.onMouseMove = function(t) {
                    y.I.onMouseMove(t, this._tTouchID)
                }, e.onMouseDown = function(t) {
                    if (xe.isInputting && i.stage.focus && i.stage.focus.focus && !i.stage.focus.contains(this._target)) {
                        var e = i.stage.focus._tf || i.stage.focus,
                            n = t._tf || t;
                        n instanceof laya.display.Input && n.multiline == e.multiline ? e._focusOut() : e.focus = !1
                    }
                    y.I.onMouseDown(t, this._tTouchID, this._isLeftMouse)
                }, e.onMouseUp = function(t) {
                    y.I.onMouseUp(t, this._tTouchID, this._isLeftMouse)
                }, e.check = function(t, e, i, n) {
                    this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
                    var s = t.scrollRect;
                    if (s && (this._rect.setTo(s.x, s.y, s.width, s.height), !this._rect.contains(e, i))) return !1;
                    if (!this.disableMouseEvent) {
                        if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                        for (var r = t._childs.length - 1; r > -1; r--) {
                            var o = t._childs[r];
                            if (!o.destroyed && o.mouseEnabled && o.visible && this.check(o, e, i, n)) return !0
                        }
                    }
                    var a = !t.hitTestPrior || t.mouseThrough || this.disableMouseEvent ? this.hitTest(t, e, i) : !0;
                    return a ? (this._target = t, n.call(this, t)) : n === this.onMouseUp && t === this._stage && (this._target = this._stage, n.call(this, this._target)), a
                }, e.hitTest = function(t, e, i) {
                    var n = !1;
                    if (t.scrollRect && (e -= t.scrollRect.x, i -= t.scrollRect.y), t.hitArea instanceof laya.utils.HitArea) return t.hitArea.isHit(e, i);
                    if (t.width > 0 && t.height > 0 || t.mouseThrough || t.hitArea)
                        if (t.mouseThrough) n = t.getGraphicBounds().contains(e, i);
                        else {
                            var s = this._rect;
                            t.hitArea ? s = t.hitArea : s.setTo(0, 0, t.width, t.height), n = s.contains(e, i)
                        } return n
                }, e.runEvent = function() {
                    var e = this._eventList.length;
                    if (e) {
                        for (var i, n = this, s = 0, r = 0, o = 0; e > s;) {
                            var a = this._eventList[s];
                            switch ("mousemove" !== a.type && (this._prePoint.x = this._prePoint.y = -1e6), a.type) {
                                case "mousedown":
                                    this._touchIDs[0] = this._id++, t._isTouchRespond ? t._isTouchRespond = !1 : (n._isLeftMouse = 0 === a.button, n.initEvent(a), n.check(n._stage, n.mouseX, n.mouseY, n.onMouseDown));
                                    break;
                                case "mouseup":
                                    n._isLeftMouse = 0 === a.button, n.initEvent(a), n.check(n._stage, n.mouseX, n.mouseY, n.onMouseUp);
                                    break;
                                case "mousemove":
                                    Math.abs(this._prePoint.x - a.clientX) + Math.abs(this._prePoint.y - a.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = a.clientX, this._prePoint.y = a.clientY, n.initEvent(a), n.check(n._stage, n.mouseX, n.mouseY, n.onMouseMove));
                                    break;
                                case "touchstart":
                                    t._isTouchRespond = !0, n._isLeftMouse = !0;
                                    var h = a.changedTouches;
                                    for (r = 0, o = h.length; o > r; r++) i = h[r], (t.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = i.identifier, this._id % 200 === 0 && (this._touchIDs = {}), this._touchIDs[i.identifier] = this._id++, n.initEvent(i, a), n.check(n._stage, n.mouseX, n.mouseY, n.onMouseDown));
                                    break;
                                case "touchend":
                                case "touchcancel":
                                    t._isTouchRespond = !0, n._isLeftMouse = !0;
                                    var l = a.changedTouches;
                                    for (r = 0, o = l.length; o > r; r++)
                                        if (i = l[r], t.multiTouchEnabled || i.identifier == this._curTouchID) {
                                            this._curTouchID = 0 / 0, n.initEvent(i, a);
                                            var u = !1;
                                            u = n.check(n._stage, n.mouseX, n.mouseY, n.onMouseUp), u || n.onMouseUp(null)
                                        } break;
                                case "touchmove":
                                    var c = a.changedTouches;
                                    for (r = 0, o = c.length; o > r; r++) i = c[r], (t.multiTouchEnabled || i.identifier == this._curTouchID) && (n.initEvent(i, a), n.check(n._stage, n.mouseX, n.mouseY, n.onMouseMove));
                                    break;
                                case "wheel":
                                case "mousewheel":
                                case "DOMMouseScroll":
                                    n.checkMouseWheel(a);
                                    break;
                                case "mouseout":
                                    y.I.stageMouseOut();
                                    break;
                                case "mouseover":
                                    n._stage.event("mouseover", n._event.setTo("mouseover", n._stage, n._stage))
                            }
                            s++
                        }
                        this._eventList.length = 0
                    }
                }, t.enabled = !0, t.multiTouchEnabled = !0, t._isTouchRespond = !1, t._isFirstTouch = !0, n(t, ["instance", function() {
                    return this.instance = new t
                }]), t
            }()),
            y = function() {
                function t() {
                    this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, this._lastClickTime = 0, this._event = new g
                }
                s(t, "laya.events.TouchManager");
                var e = t.prototype;
                return e._clearTempArrs = function() {
                    t._oldArr.length = 0, t._newArr.length = 0, t._tEleArr.length = 0
                }, e.getTouchFromArr = function(t, e) {
                    var i = 0,
                        n = 0;
                    n = e.length;
                    var s;
                    for (i = 0; n > i; i++)
                        if (s = e[i], s.id == t) return s;
                    return null
                }, e.removeTouchFromArr = function(t, e) {
                    var i = 0;
                    for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1)
                }, e.createTouchO = function(t, e) {
                    var i;
                    return i = V.getItem("TouchData") || {}, i.id = e, i.tar = t, i
                }, e.onMouseDown = function(e, i, n) {
                    if (void 0 === n && (n = !1), this.enable) {
                        var s, r, o;
                        s = this.getTouchFromArr(i, this.preOvers), o = this.getEles(e, null, t._tEleArr), s ? s.tar = e : (r = this.createTouchO(e, i), this.preOvers.push(r)), B.onMobile && this.sendEvents(o, "mouseover", i);
                        var a;
                        a = n ? this.preDowns : this.preRightDowns, s = this.getTouchFromArr(i, a), s ? s.tar = e : (r = this.createTouchO(e, i), a.push(r)), this.sendEvents(o, n ? "mousedown" : "rightmousedown", i), this._clearTempArrs()
                    }
                }, e.sendEvents = function(t, e, i) {
                    void 0 === i && (i = 0);
                    var n = 0,
                        s = 0;
                    s = t.length, this._event._stoped = !1;
                    var r;
                    r = t[0];
                    var o;
                    for (n = 0; s > n; n++) {
                        if (o = t[n], o.destroyed) return;
                        if (o.event(e, this._event.setTo(e, o, r)), this._event._stoped) break
                    }
                }, e.getEles = function(t, e, i) {
                    for (i ? i.length = 0 : i = []; t && t != e;) i.push(t), t = t.parent;
                    return i
                }, e.checkMouseOutAndOverOfMove = function(e, i, n) {
                    if (void 0 === n && (n = 0), i != e) {
                        var s, r, o = 0,
                            a = 0;
                        if (i.contains(e)) r = this.getEles(e, i, t._tEleArr), this.sendEvents(r, "mouseover", n);
                        else if (e.contains(i)) r = this.getEles(i, e, t._tEleArr), this.sendEvents(r, "mouseout", n);
                        else {
                            r = t._tEleArr, r.length = 0;
                            var h;
                            h = this.getEles(i, null, t._oldArr);
                            var l;
                            l = this.getEles(e, null, t._newArr), a = h.length;
                            var u = 0;
                            for (o = 0; a > o; o++) {
                                if (s = h[o], u = l.indexOf(s), u >= 0) {
                                    l.splice(u, l.length - u);
                                    break
                                }
                                r.push(s)
                            }
                            r.length > 0 && this.sendEvents(r, "mouseout", n), l.length > 0 && this.sendEvents(l, "mouseover", n)
                        }
                    }
                }, e.onMouseMove = function(e, i) {
                    if (this.enable) {
                        var n;
                        n = this.getTouchFromArr(i, this.preOvers);
                        var s;
                        n ? (this.checkMouseOutAndOverOfMove(e, n.tar), n.tar = e, s = this.getEles(e, null, t._tEleArr)) : (s = this.getEles(e, null, t._tEleArr), this.sendEvents(s, "mouseover", i), this.preOvers.push(this.createTouchO(e, i))), this.sendEvents(s, "mousemove", i), this._clearTempArrs()
                    }
                }, e.getLastOvers = function() {
                    return t._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, t._tEleArr) : (t._tEleArr.push(i.stage), t._tEleArr)
                }, e.stageMouseOut = function() {
                    var t;
                    t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout", 0)
                }, e.onMouseUp = function(e, i, n) {
                    if (void 0 === n && (n = !1), this.enable) {
                        var s, r, o, a, h, l = 0,
                            u = 0,
                            c = B.onMobile;
                        r = this.getEles(e, null, t._tEleArr), this.sendEvents(r, n ? "mouseup" : "rightmouseup", i);
                        var _;
                        if (_ = n ? this.preDowns : this.preRightDowns, s = this.getTouchFromArr(i, _)) {
                            var d = !1,
                                f = B.now();
                            if (d = f - this._lastClickTime < 300, this._lastClickTime = f, e == s.tar) h = r;
                            else
                                for (o = this.getEles(s.tar, null, t._oldArr), h = t._newArr, h.length = 0, u = o.length, l = 0; u > l; l++) a = o[l], r.indexOf(a) >= 0 && h.push(a);
                            h.length > 0 && this.sendEvents(h, n ? "click" : "rightclick", i), n && d && this.sendEvents(h, "doubleclick", i), this.removeTouchFromArr(i, _), s.tar = null, V.recover("TouchData", s)
                        } else;
                        s = this.getTouchFromArr(i, this.preOvers), s && c && (h = this.getEles(s.tar, null, h), h && h.length > 0 && this.sendEvents(h, "mouseout", i), this.removeTouchFromArr(i, this.preOvers), s.tar = null, V.recover("TouchData", s)), this._clearTempArrs()
                    }
                }, t._oldArr = [], t._newArr = [], t._tEleArr = [], n(t, ["I", function() {
                    return this.I = new t
                }]), t
            }(),
            w = function() {
                function t() {
                    this._action = null
                }
                s(t, "laya.filters.Filter");
                var e = t.prototype;
                return i.imps(e, {
                    "laya.filters.IFilter": !0
                }), e.callNative = function() {}, r(0, e, "type", function() {
                    return -1
                }), r(0, e, "action", function() {
                    return this._action
                }), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filterStart = null, t._filterEnd = null, t._EndTarget = null, t._recycleScope = null, t._filter = null, t._useSrc = null, t._endSrc = null, t._useOut = null, t._endOut = null, t
            }(),
            x = function() {
                function t() {
                    this.data = null
                }
                s(t, "laya.filters.ColorFilterAction");
                var e = t.prototype;
                return i.imps(e, {
                    "laya.filters.IFilterAction": !0
                }), e.apply = function(t) {
                    var e = t.ctx.ctx,
                        i = t.ctx.ctx.canvas;
                    if (0 == i.width || 0 == i.height) return i;
                    for (var n, s = e.getImageData(0, 0, i.width, i.height), r = s.data, o = 0, a = r.length; a > o; o += 4) n = this.getColor(r[o], r[o + 1], r[o + 2], r[o + 3]), 0 != r[o + 3] && (r[o] = n[0], r[o + 1] = n[1], r[o + 2] = n[2], r[o + 3] = n[3]);
                    return e.putImageData(s, 0, 0), t
                }, e.getColor = function(t, e, i, n) {
                    var s = [];
                    if (this.data._mat && this.data._alpha) {
                        var r = this.data._mat,
                            o = this.data._alpha;
                        s[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * n + o[0], s[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * n + o[1], s[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * n + o[2], s[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * n + o[3]
                    }
                    return s
                }, t
            }(),
            T = (function() {
                function t() {}
                return s(t, "laya.maths.Arith"), t.formatR = function(t) {
                    return t > Math.PI && (t -= 2 * Math.PI), t < -Math.PI && (t += 2 * Math.PI), t
                }, t.isPOT = function(t, e) {
                    return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
                }, t.setMatToArray = function(t, e) {
                    t.a, t.b, t.c, t.d, t.tx + 20, t.ty + 20, 1, e[0] = t.a, e[1] = t.b, e[4] = t.c, e[5] = t.d, e[12] = t.tx, e[13] = t.ty
                }, t
            }(), function() {
                function t() {
                    this._controlPoints = [new S, new S, new S], this._calFun = this.getPoint2
                }
                s(t, "laya.maths.Bezier");
                var e = t.prototype;
                return e._switchPoint = function(t, e) {
                    var i = this._controlPoints.shift();
                    i.setTo(t, e), this._controlPoints.push(i)
                }, e.getPoint2 = function(t, e) {
                    var i = this._controlPoints[0],
                        n = this._controlPoints[1],
                        s = this._controlPoints[2],
                        r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * n.x + Math.pow(t, 2) * s.x,
                        o = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * n.y + Math.pow(t, 2) * s.y;
                    e.push(r, o)
                }, e.getPoint3 = function(t, e) {
                    var i = this._controlPoints[0],
                        n = this._controlPoints[1],
                        s = this._controlPoints[2],
                        r = this._controlPoints[3],
                        o = Math.pow(1 - t, 3) * i.x + 3 * n.x * t * (1 - t) * (1 - t) + 3 * s.x * t * t * (1 - t) + r.x * Math.pow(t, 3),
                        a = Math.pow(1 - t, 3) * i.y + 3 * n.y * t * (1 - t) * (1 - t) + 3 * s.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
                    e.push(o, a)
                }, e.insertPoints = function(t, e) {
                    var i = 0 / 0;
                    t = t > 0 ? t : 5;
                    var n = 0 / 0;
                    for (n = 1 / t, i = 0; 1 >= i; i += n) this._calFun(i, e)
                }, e.getBezierPoints = function(t, e, i) {
                    void 0 === e && (e = 5), void 0 === i && (i = 2);
                    var n = 0,
                        s = 0;
                    if (s = t.length, 2 * (i + 1) > s) return [];
                    var r;
                    switch (r = [], i) {
                        case 2:
                            this._calFun = this.getPoint2;
                            break;
                        case 3:
                            this._calFun = this.getPoint3;
                            break;
                        default:
                            return []
                    }
                    for (; this._controlPoints.length <= i;) this._controlPoints.push(new S);
                    for (n = 0; 2 * i > n; n += 2) this._switchPoint(t[n], t[n + 1]);
                    for (n = 2 * i; s > n; n += 2) this._switchPoint(t[n], t[n + 1]), n / 2 % i == 0 && this.insertPoints(e, r);
                    return r
                }, n(t, ["I", function() {
                    return this.I = new t
                }]), t
            }()),
            b = function() {
                function t() {}
                return s(t, "laya.maths.GrahamScan"), t.multiply = function(t, e, i) {
                    return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
                }, t.dis = function(t, e) {
                    return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
                }, t._getPoints = function(e, i, n) {
                    for (void 0 === i && (i = !1), t._mPointList || (t._mPointList = []); t._mPointList.length < e;) t._mPointList.push(new S);
                    return n || (n = []), n.length = 0, i ? t.getFrom(n, t._mPointList, e) : t.getFromR(n, t._mPointList, e), n
                }, t.getFrom = function(t, e, i) {
                    var n = 0;
                    for (n = 0; i > n; n++) t.push(e[n]);
                    return t
                }, t.getFromR = function(t, e, i) {
                    var n = 0;
                    for (n = 0; i > n; n++) t.push(e.pop());
                    return t
                }, t.pListToPointList = function(e, i) {
                    void 0 === i && (i = !1);
                    var n = 0,
                        s = e.length / 2,
                        r = t._getPoints(s, i, t._tempPointList);
                    for (n = 0; s > n; n++) r[n].setTo(e[n + n], e[n + n + 1]);
                    return r
                }, t.pointListToPlist = function(e) {
                    var i, n = 0,
                        s = e.length,
                        r = t._temPList;
                    for (r.length = 0, n = 0; s > n; n++) i = e[n], r.push(i.x, i.y);
                    return r
                }, t.scanPList = function(e) {
                    return K.copyArray(e, t.pointListToPlist(t.scan(t.pListToPointList(e, !0))))
                }, t.scan = function(e) {
                    var i, n, s, r = 0,
                        o = 0,
                        a = 0,
                        h = e.length,
                        l = {};
                    for (n = t._temArr, n.length = 0, h = e.length, r = h - 1; r >= 0; r--) i = e[r], s = i.x + "_" + i.y, l.hasOwnProperty(s) || (l[s] = !0, n.push(i));
                    for (h = n.length, K.copyArray(e, n), r = 1; h > r; r++)(e[r].y < e[a].y || e[r].y == e[a].y && e[r].x < e[a].x) && (a = r);
                    for (i = e[0], e[0] = e[a], e[a] = i, r = 1; h - 1 > r; r++) {
                        for (a = r, o = r + 1; h > o; o++)(t.multiply(e[o], e[a], e[0]) > 0 || 0 == t.multiply(e[o], e[a], e[0]) && t.dis(e[0], e[o]) < t.dis(e[0], e[a])) && (a = o);
                        i = e[r], e[r] = e[a], e[a] = i
                    }
                    if (n = t._temArr, n.length = 0, e.length < 3) return K.copyArray(n, e);
                    for (n.push(e[0], e[1], e[2]), r = 3; h > r; r++) {
                        for (; n.length >= 2 && t.multiply(e[r], n[n.length - 1], n[n.length - 2]) >= 0;) n.pop();
                        e[r] && n.push(e[r])
                    }
                    return n
                }, t._mPointList = null, t._tempPointList = [], t._temPList = [], t._temArr = [], t
            }(),
            C = function() {
                function t() {}
                return s(t, "laya.maths.MathUtil"), t.subtractVector3 = function(t, e, i) {
                    i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2]
                }, t.lerp = function(t, e, i) {
                    return t * (1 - i) + e * i
                }, t.scaleVector3 = function(t, e, i) {
                    i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e
                }, t.lerpVector3 = function(t, e, i, n) {
                    var s = t[0],
                        r = t[1],
                        o = t[2];
                    n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o)
                }, t.lerpVector4 = function(t, e, i, n) {
                    var s = t[0],
                        r = t[1],
                        o = t[2],
                        a = t[3];
                    n[0] = s + i * (e[0] - s), n[1] = r + i * (e[1] - r), n[2] = o + i * (e[2] - o), n[3] = a + i * (e[3] - a)
                }, t.slerpQuaternionArray = function(t, e, i, n, s, r, o) {
                    var a, h, l, u, c, _ = t[e + 0],
                        d = t[e + 1],
                        f = t[e + 2],
                        p = t[e + 3],
                        g = i[n + 0],
                        m = i[n + 1],
                        v = i[n + 2],
                        y = i[n + 3];
                    return h = _ * g + d * m + f * v + p * y, 0 > h && (h = -h, g = -g, m = -m, v = -v, y = -y), 1 - h > 1e-6 ? (a = Math.acos(h), l = Math.sin(a), u = Math.sin((1 - s) * a) / l, c = Math.sin(s * a) / l) : (u = 1 - s, c = s), r[o + 0] = u * _ + c * g, r[o + 1] = u * d + c * m, r[o + 2] = u * f + c * v, r[o + 3] = u * p + c * y, r
                }, t.getRotation = function(t, e, i, n) {
                    return Math.atan2(n - e, i - t) / Math.PI * 180
                }, t.sortBigFirst = function(t, e) {
                    return t == e ? 0 : e > t ? 1 : -1
                }, t.sortSmallFirst = function(t, e) {
                    return t == e ? 0 : e > t ? -1 : 1
                }, t.sortNumBigFirst = function(t, e) {
                    return parseFloat(e) - parseFloat(t)
                }, t.sortNumSmallFirst = function(t, e) {
                    return parseFloat(t) - parseFloat(e)
                }, t.sortByKey = function(e, i, n) {
                    void 0 === i && (i = !1), void 0 === n && (n = !0);
                    var s;
                    return s = i ? n ? t.sortNumBigFirst : t.sortBigFirst : n ? t.sortNumSmallFirst : t.sortSmallFirst,
                        function(t, i) {
                            return s(t[e], i[e])
                        }
                }, t
            }(),
            M = function() {
                function t(t, e, i, n, s, r) {
                    this.inPool = !1, this.bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === s && (s = 0), void 0 === r && (r = 0), this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this._checkTransform()
                }
                s(t, "laya.maths.Matrix");
                var e = t.prototype;
                return e.identity = function() {
                    return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this.bTransform = !1, this
                }, e._checkTransform = function() {
                    return this.bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d
                }, e.setTranslate = function(t, e) {
                    return this.tx = t, this.ty = e, this
                }, e.translate = function(t, e) {
                    return this.tx += t, this.ty += e, this
                }, e.scale = function(t, e) {
                    this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this.bTransform = !0
                }, e.rotate = function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t),
                        n = this.a,
                        s = this.c,
                        r = this.tx;
                    this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, this.bTransform = !0
                }, e.skew = function(t, e) {
                    var i = Math.tan(t),
                        n = Math.tan(e),
                        s = this.a,
                        r = this.b;
                    return this.a += n * this.c, this.b += n * this.d, this.c += i * s, this.d += i * r, this
                }, e.invertTransformPoint = function(t) {
                    var e = this.a,
                        i = this.b,
                        n = this.c,
                        s = this.d,
                        r = this.tx,
                        o = e * s - i * n,
                        a = s / o,
                        h = -i / o,
                        l = -n / o,
                        u = e / o,
                        c = (n * this.ty - s * r) / o,
                        _ = -(e * this.ty - i * r) / o;
                    return t.setTo(a * t.x + l * t.y + c, h * t.x + u * t.y + _)
                }, e.transformPoint = function(t) {
                    return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty)
                }, e.transformPointN = function(t) {
                    return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y)
                }, e.transformPointArray = function(t, e) {
                    for (var i = t.length, n = 0; i > n; n += 2) {
                        var s = t[n],
                            r = t[n + 1];
                        e[n] = this.a * s + this.c * r + this.tx, e[n + 1] = this.b * s + this.d * r + this.ty
                    }
                    return e
                }, e.transformPointArrayScale = function(t, e) {
                    for (var i = t.length, n = 0; i > n; n += 2) {
                        var s = t[n],
                            r = t[n + 1];
                        e[n] = this.a * s + this.c * r, e[n + 1] = this.b * s + this.d * r
                    }
                    return e
                }, e.getScaleX = function() {
                    return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b)
                }, e.getScaleY = function() {
                    return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d)
                }, e.invert = function() {
                    var t = this.a,
                        e = this.b,
                        i = this.c,
                        n = this.d,
                        s = this.tx,
                        r = t * n - e * i;
                    return this.a = n / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - n * s) / r, this.ty = -(t * this.ty - e * s) / r, this
                }, e.setTo = function(t, e, i, n, s, r) {
                    return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = r, this
                }, e.concat = function(t) {
                    var e = this.a,
                        i = this.c,
                        n = this.tx;
                    return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d, this.tx = n * t.a + this.ty * t.c + t.tx, this.ty = n * t.b + this.ty * t.d + t.ty, this
                }, e.scaleEx = function(t, e) {
                    var i = this.a,
                        n = this.b,
                        s = this.c,
                        r = this.d;
                    0 !== n || 0 !== s ? (this.a = t * i, this.b = t * n, this.c = e * s, this.d = e * r) : (this.a = t * i, this.b = 0 * r, this.c = 0 * i, this.d = e * r), this.bTransform = !0
                }, e.rotateEx = function(t) {
                    var e = Math.cos(t),
                        i = Math.sin(t),
                        n = this.a,
                        s = this.b,
                        r = this.c,
                        o = this.d;
                    0 !== s || 0 !== r ? (this.a = e * n + i * r, this.b = e * s + i * o, this.c = -i * n + e * r, this.d = -i * s + e * o) : (this.a = e * n, this.b = i * o, this.c = -i * n, this.d = e * o), this.bTransform = !0
                }, e.clone = function() {
                    var e = t.create();
                    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e.bTransform = this.bTransform, e
                }, e.copyTo = function(t) {
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t.bTransform = this.bTransform, t
                }, e.toString = function() {
                    return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty
                }, e.destroy = function() {
                    if (!this.inPool) {
                        var e = t._cache;
                        this.inPool = !0, e._length || (e._length = 0), e[e._length++] = this, this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.bTransform = !1
                    }
                }, t.mul = function(t, e, i) {
                    var n = t.a,
                        s = t.b,
                        r = t.c,
                        o = t.d,
                        a = t.tx,
                        h = t.ty,
                        l = e.a,
                        u = e.b,
                        c = e.c,
                        _ = e.d,
                        d = e.tx,
                        f = e.ty;
                    return 0 !== u || 0 !== c ? (i.a = n * l + s * c, i.b = n * u + s * _, i.c = r * l + o * c, i.d = r * u + o * _, i.tx = l * a + c * h + d, i.ty = u * a + _ * h + f) : (i.a = n * l, i.b = s * _, i.c = r * l, i.d = o * _, i.tx = l * a + d, i.ty = _ * h + f), i
                }, t.mul16 = function(t, e, i) {
                    var n = t.a,
                        s = t.b,
                        r = t.c,
                        o = t.d,
                        a = t.tx,
                        h = t.ty,
                        l = e.a,
                        u = e.b,
                        c = e.c,
                        _ = e.d,
                        d = e.tx,
                        f = e.ty;
                    return 0 !== u || 0 !== c ? (i[0] = n * l + s * c, i[1] = n * u + s * _, i[4] = r * l + o * c, i[5] = r * u + o * _, i[12] = l * a + c * h + d, i[13] = u * a + _ * h + f) : (i[0] = n * l, i[1] = s * _, i[4] = r * l, i[5] = o * _, i[12] = l * a + d, i[13] = _ * h + f), i
                }, t.mulPre = function(t, e, i, n, s, r, o, a) {
                    var h = t.a,
                        l = t.b,
                        u = t.c,
                        c = t.d,
                        _ = t.tx,
                        d = t.ty;
                    return 0 !== i || 0 !== n ? (a.a = h * e + l * n, a.b = h * i + l * s, a.c = u * e + c * n, a.d = u * i + c * s, a.tx = e * _ + n * d + r, a.ty = i * _ + s * d + o) : (a.a = h * e, a.b = l * s, a.c = u * e, a.d = c * s, a.tx = e * _ + r, a.ty = s * d + o), a
                }, t.mulPos = function(t, e, i, n, s, r, o, a) {
                    var h = t.a,
                        l = t.b,
                        u = t.c,
                        c = t.d,
                        _ = t.tx,
                        d = t.ty;
                    return 0 !== l || 0 !== u ? (a.a = e * h + i * u, a.b = e * l + i * c, a.c = n * h + s * u, a.d = n * l + s * c, a.tx = h * r + u * o + _, a.ty = l * r + c * o + d) : (a.a = e * h, a.b = i * c, a.c = n * h, a.d = s * c, a.tx = h * r + _, a.ty = c * o + d), a
                }, t.preMul = function(t, e, i) {
                    var n = t.a,
                        s = t.b,
                        r = t.c,
                        o = t.d,
                        a = e.a,
                        h = e.b,
                        l = e.c,
                        u = e.d,
                        c = e.tx,
                        _ = e.ty;
                    return i.a = a * n, i.b = i.c = 0, i.d = u * o, i.tx = c * n + t.tx, i.ty = _ * o + t.ty, (0 !== h || 0 !== l || 0 !== s || 0 !== r) && (i.a += h * r, i.d += l * s, i.b += a * s + h * o, i.c += l * n + u * r, i.tx += _ * r, i.ty += c * s), i
                }, t.preMulXY = function(t, e, i, n) {
                    var s = t.a,
                        r = t.b,
                        o = t.c,
                        a = t.d;
                    return n.a = s, n.b = r, n.c = o, n.d = a, n.tx = e * s + t.tx + i * o, n.ty = i * a + t.ty + e * r, n
                }, t.create = function() {
                    var e = t._cache,
                        i = e._length ? e[--e._length] : new t;
                    return i.inPool = !1, i
                }, t.EMPTY = new t, t.TEMP = new t, t._cache = [], t
            }(),
            S = function() {
                function t(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
                }
                s(t, "laya.maths.Point");
                var e = t.prototype;
                return e.setTo = function(t, e) {
                    return this.x = t, this.y = e, this
                }, e.distance = function(t, e) {
                    return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e))
                }, e.toString = function() {
                    return this.x + "," + this.y
                }, e.normalize = function() {
                    var t = Math.sqrt(this.x * this.x + this.y * this.y);
                    if (t > 0) {
                        var e = 1 / t;
                        this.x *= e, this.y *= e
                    }
                }, t.TEMP = new t, t.EMPTY = new t, t
            }(),
            P = function() {
                function t(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.x = t, this.y = e, this.width = i, this.height = n
                }
                s(t, "laya.maths.Rectangle");
                var e = t.prototype;
                return e.setTo = function(t, e, i, n) {
                    return this.x = t, this.y = e, this.width = i, this.height = n, this
                }, e.copyFrom = function(t) {
                    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                }, e.contains = function(t, e) {
                    return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.right && e >= this.y && e < this.bottom ? !0 : !1
                }, e.intersects = function(t) {
                    return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y)
                }, e.intersection = function(e, i) {
                    return this.intersects(e) ? (i || (i = new t), i.x = Math.max(this.x, e.x), i.y = Math.max(this.y, e.y), i.width = Math.min(this.right, e.right) - i.x, i.height = Math.min(this.bottom, e.bottom) - i.y, i) : null
                }, e.union = function(e, i) {
                    return i || (i = new t), this.clone(i), e.width <= 0 || e.height <= 0 ? i : (i.addPoint(e.x, e.y), i.addPoint(e.right, e.bottom), this)
                }, e.clone = function(e) {
                    return e || (e = new t), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e
                }, e.toString = function() {
                    return this.x + "," + this.y + "," + this.width + "," + this.height
                }, e.equals = function(t) {
                    return t && t.x === this.x && t.y === this.y && t.width === this.width && t.height === this.height ? !0 : !1
                }, e.addPoint = function(t, e) {
                    return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), this
                }, e._getBoundPoints = function() {
                    var e = t._temB;
                    return e.length = 0, 0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), e)
                }, e.isEmpty = function() {
                    return this.width <= 0 || this.height <= 0 ? !0 : !1
                }, r(0, e, "right", function() {
                    return this.x + this.width
                }), r(0, e, "bottom", function() {
                    return this.y + this.height
                }), t._getBoundPointS = function(e, i, n, s) {
                    var r = t._temA;
                    return r.length = 0, 0 == n || 0 == s ? r : (r.push(e, i, e + n, i, e, i + s, e + n, i + s), r)
                }, t._getWrapRec = function(e, i) {
                    if (!e || e.length < 1) return i ? i.setTo(0, 0, 0, 0) : t.TEMP.setTo(0, 0, 0, 0);
                    i = i ? i : new t;
                    var n, s, r, o, a, h = e.length,
                        l = S.TEMP;
                    for (s = o = 99999, r = a = -s, n = 0; h > n; n += 2) l.x = e[n], l.y = e[n + 1], s = s < l.x ? s : l.x, o = o < l.y ? o : l.y, r = r > l.x ? r : l.x, a = a > l.y ? a : l.y;
                    return i.setTo(s, o, r - s, a - o)
                }, t.EMPTY = new t, t.TEMP = new t, t._temB = [], t._temA = [], t
            }(),
            E = function() {
                function t() {}
                return s(t, "laya.media.SoundManager"), r(1, t, "useAudioMusic", function() {
                    return t._useAudioMusic
                }, function(e) {
                    t._useAudioMusic = e, t._musicClass = e ? ee : null
                }), r(1, t, "autoStopMusic", function() {
                    return t._autoStopMusic
                }, function(e) {
                    i.stage.off("blur", null, t._stageOnBlur), i.stage.off("focus", null, t._stageOnFocus), i.stage.off("visibilitychange", null, t._visibilityChange), t._autoStopMusic = e, e && (i.stage.on("blur", null, t._stageOnBlur), i.stage.on("focus", null, t._stageOnFocus), i.stage.on("visibilitychange", null, t._visibilityChange))
                }), r(1, t, "muted", function() {
                    return t._muted
                }, function(e) {
                    e != t._muted && (e && t.stopAllSound(), t.musicMuted = e, t._muted = e)
                }), r(1, t, "musicMuted", function() {
                    return t._musicMuted
                }, function(e) {
                    e != t._musicMuted && (e ? (t._tMusic ? t._musicChannel && !t._musicChannel.isStopped ? t._musicChannel.pause() : t._musicChannel = null : t._musicChannel = null, t._musicMuted = e) : (t._musicMuted = e, t._tMusic && t._musicChannel && t._musicChannel.resume()))
                }), r(1, t, "soundMuted", function() {
                    return t._soundMuted
                }, function(e) {
                    t._soundMuted = e
                }), t.addChannel = function(e) {
                    t._channels.indexOf(e) >= 0 || t._channels.push(e)
                }, t.removeChannel = function(e) {
                    var i = 0;
                    for (i = t._channels.length - 1; i >= 0; i--) t._channels[i] == e && t._channels.splice(i, 1);
                    var n = t._effectUrls.indexOf(e.url); - 1 != n && t._effectUrls.splice(i, 1)
                }, t.disposeSoundIfNotUsed = function(e) {
                    var i = 0;
                    for (i = t._channels.length - 1; i >= 0; i--)
                        if (t._channels[i].url == e) return;
                    t.destroySound(e)
                }, t._visibilityChange = function() {
                    i.stage.isVisibility ? t._stageOnFocus() : t._stageOnBlur()
                }, t._stageOnBlur = function() {
                    t._isActive = !1, t._musicChannel && (t._musicChannel.isStopped || (t._blurPaused = !0, t._musicChannel.pause())), t.stopAllSound(), i.stage.once("mousedown", null, t._stageOnFocus)
                }, t._recoverWebAudio = function() {
                    se.ctx && "running" != se.ctx.state && se.ctx.resume && se.ctx.resume()
                }, t._stageOnFocus = function() {
                    t._isActive = !0, t._recoverWebAudio(), i.stage.off("mousedown", null, t._stageOnFocus), t._blurPaused && t._musicChannel && t._musicChannel.isStopped && (t._blurPaused = !1, t._musicChannel.resume())
                }, t.playSound = function(e, n, s, r, o) {
                    if (void 0 === n && (n = 1), void 0 === o && (o = 0), !t._isActive || !e) return null;
                    if (t._muted) return null;
                    if (t._recoverWebAudio(), e = L.formatURL(e), e == t._tMusic) {
                        if (t._musicMuted) return null
                    } else {
                        if (R.isConchApp) {
                            var a = K.getFileExtension(e);
                            if ("wav" != a && "ogg" != a) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), null
                        }
                        if (t._soundMuted) return null
                    }
                    var h;
                    B.onMiniGame || (h = i.loader.getRes(e)), r || (r = t._soundClass), h || (h = new r, h.load(e), oe.cacheRes(e, h));
                    var l;
                    if (l = h.play(o, n), !l) return null;
                    l.url = e;
                    var u = e == t._tMusic ? t.musicVolume : t.soundVolume;
                    return -1 != t._effectUrls.indexOf(e) && (u = t.effectVolume), l.volume = u, l.completeHandler = s, l
                }, t.destroySound = function(t) {
                    var e = i.loader.getRes(t);
                    e && (oe.clearRes(t), e.dispose())
                }, t.playMusic = function(e, i, n, s) {
                    return void 0 === i && (i = 0), void 0 === s && (s = 0), e = L.formatURL(e), t._tMusic = e, t._musicChannel && t._musicChannel.stop(), t._musicChannel = t.playSound(e, i, n, t._musicClass, s)
                }, t.playEffect = function(e, i, n, s, r) {
                    return void 0 === i && (i = 0), void 0 === r && (r = 0), e = L.formatURL(e), -1 == t._effectUrls.indexOf(e) && t._effectUrls.push(e), t.playSound(e, i, n, s, r)
                }, t.stopSound = function(e) {
                    e = L.formatURL(e);
                    var i, n = 0;
                    for (n = t._channels.length - 1; n >= 0; n--) i = t._channels[n], i.url == e && i.stop()
                }, t.stopAll = function() {
                    t._tMusic = null;
                    var e, i = 0;
                    for (i = t._channels.length - 1; i >= 0; i--) e = t._channels[i], e.stop()
                }, t.stopAllSound = function() {
                    var e, i = 0;
                    for (i = t._channels.length - 1; i >= 0; i--) e = t._channels[i], e.url != t._tMusic && e.stop()
                }, t.stopMusic = function() {
                    t._musicChannel && t._musicChannel.stop(), t._tMusic = null
                }, t.setSoundVolume = function(e, i) {
                    if (i) i = L.formatURL(i), t._setVolume(i, e);
                    else {
                        t.soundVolume = e;
                        var n, s = 0;
                        for (s = t._channels.length - 1; s >= 0; s--) n = t._channels[s], n.url != t._tMusic && -1 == t._effectUrls.indexOf(n.url) && (n.volume = e)
                    }
                }, t.setEffectVolume = function(e, i) {
                    if (i) i = L.formatURL(i), t._setVolume(i, e);
                    else {
                        t.effectVolume = e;
                        var n, s = 0;
                        for (s = t._channels.length - 1; s >= 0; s--) n = t._channels[s], n.url != t._tMusic && -1 != t._effectUrls.indexOf(n.url) && (n.volume = e)
                    }
                }, t.setMusicVolume = function(e) {
                    t.musicVolume = e, t._setVolume(t._tMusic, e)
                }, t._setVolume = function(e, i) {
                    e = L.formatURL(e);
                    var n, s = 0;
                    for (s = t._channels.length - 1; s >= 0; s--) n = t._channels[s], n.url == e && (n.volume = i)
                }, t.musicVolume = 1, t.soundVolume = 1, t.effectVolume = 1, t.playbackRate = 1, t._useAudioMusic = !0, t._muted = !1, t._soundMuted = !1, t._musicMuted = !1, t._tMusic = null, t._musicChannel = null, t._channels = [], t._effectUrls = [], t._autoStopMusic = !1, t._blurPaused = !1, t._isActive = !0, t._soundClass = null, t._musicClass = null, t.autoReleaseSound = !0, t
            }(),
            A = function() {
                function e() {}
                var i;
                return s(e, "laya.net.LocalStorage"), e.__init__ = function() {
                    e._baseClass || (e._baseClass = i, i.init()), e.items = e._baseClass.items, e.support = e._baseClass.support
                }, e.setItem = function(t, i) {
                    e._baseClass.setItem(t, i)
                }, e.getItem = function(t) {
                    return e._baseClass.getItem(t)
                }, e.setJSON = function(t, i) {
                    e._baseClass.setJSON(t, i)
                }, e.getJSON = function(t) {
                    return e._baseClass.getJSON(t)
                }, e.removeItem = function(t) {
                    e._baseClass.removeItem(t)
                }, e.clear = function() {
                    e._baseClass.clear()
                }, e._baseClass = null, e.items = null, e.support = !1, e.__init$ = function() {
                    i = function() {
                        function e() {}
                        return s(e, ""), e.init = function() {
                            try {
                                e.items = t.localStorage, e.setItem("laya", "1"), e.removeItem("laya"), e.support = !0
                            } catch (i) {}
                            e.support || console.log("LocalStorage is not supprot or browser is private mode.")
                        }, e.setItem = function(t, i) {
                            try {
                                e.support && e.items.setItem(t, i)
                            } catch (n) {
                                console.warn("set localStorage failed", n)
                            }
                        }, e.getItem = function(t) {
                            return e.support ? e.items.getItem(t) : null
                        }, e.setJSON = function(t, i) {
                            try {
                                e.support && e.items.setItem(t, JSON.stringify(i))
                            } catch (n) {
                                console.warn("set localStorage failed", n)
                            }
                        }, e.getJSON = function(t) {
                            return JSON.parse(e.support ? e.items.getItem(t) : null)
                        }, e.removeItem = function(t) {
                            e.support && e.items.removeItem(t)
                        }, e.clear = function() {
                            e.support && e.items.clear()
                        }, e.items = null, e.support = !1, e
                    }()
                }, e
            }(),
            I = (function() {
                function t() {}
                return s(t, "laya.net.ResourceVersion"), t.enable = function(e, n, s) {
                    void 0 === s && (s = 2), laya.net.ResourceVersion.type = s, i.loader.load(e, l.create(null, t.onManifestLoaded, [n]), null, "json"), L.customFormat = t.addVersionPrefix
                }, t.onManifestLoaded = function(e, i) {
                    t.manifest = i, e.run(), i || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")
                }, t.addVersionPrefix = function(e) {
                    return t.manifest && t.manifest[e] ? 2 == t.type ? t.manifest[e] : t.manifest[e] + "/" + e : e
                }, t.FOLDER_VERSION = 1, t.FILENAME_VERSION = 2, t.manifest = null, t.type = 1, t
            }(), function() {
                function t() {
                    this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, this._url = null, this._div = null, this._txtWidth = 0 / 0, this._http = null
                }
                s(t, "laya.net.TTFLoader");
                var e = t.prototype;
                return e.load = function(t) {
                    this._url = t;
                    var e = t.split(".ttf")[0].split("/");
                    this.fontName = e[e.length - 1], B.window.conch ? this._loadConch() : B.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS()
                }, e._loadConch = function() {
                    this._http = new re, this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), this._http.send(this._url, null, "get", "arraybuffer")
                }, e._onHttpLoaded = function(t) {
                    B.window.conch.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), this._complete()
                }, e._clearHttp = function() {
                    this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), this._http = null)
                }, e._onErr = function() {
                    this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null)
                }, e._complete = function() {
                    i.timer.clear(this, this._complete), i.timer.clear(this, this._checkComplete), this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), this._div = null), this.complete && (this.complete.runWith(this), this.complete = null)
                }, e._checkComplete = function() {
                    o.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete()
                }, e._loadWithFontFace = function() {
                    var t = new B.window.FontFace(this.fontName, "url('" + this._url + "')");
                    B.window.document.fonts.add(t);
                    var e = this;
                    t.loaded.then(function() {
                        e._complete()
                    }), t.load()
                }, e._createDiv = function() {
                    this._div = B.createElement("div"), this._div.innerHTML = "laya";
                    var t = this._div.style;
                    t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", B.document.body.appendChild(this._div)
                }, e._loadWithCSS = function() {
                    var t = this,
                        e = B.createElement("style");
                    e.type = "text/css", B.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", this._fontTxt = "40px " + this.fontName, this._txtWidth = o.measureText("LayaTTFFont", this._fontTxt).width;
                    var n = this;
                    e.onload = function() {
                        i.timer.once(1e4, n, t._complete)
                    }, i.timer.loop(20, this, this._checkComplete), this._createDiv()
                }, t._testString = "LayaTTFFont", t
            }()),
            L = function() {
                function t(e) {
                    this._url = null, this._path = null, this._url = t.formatURL(e), this._path = t.getPath(e)
                }
                s(t, "laya.net.URL");
                var e = t.prototype;
                return r(0, e, "path", function() {
                    return this._path
                }), r(0, e, "url", function() {
                    return this._url
                }), t.formatURL = function(e, i) {
                    if (!e) return "null path";
                    if (e.indexOf(":") > 0) return e;
                    null != t.customFormat && (e = t.customFormat(e, i));
                    var n = e.charAt(0);
                    if ("." === n) return t.formatRelativePath((i || t.basePath) + e);
                    if ("~" === n) return t.rootPath + e.substring(1);
                    if ("d" === n) {
                        if (0 === e.indexOf("data:image")) return e
                    } else if ("/" === n) return e;
                    return (i || t.basePath) + e
                }, t.formatRelativePath = function(t) {
                    for (var e = t.split("/"), i = 0, n = e.length; n > i; i++) ".." == e[i] && (e.splice(i - 1, 2), i -= 2);
                    return e.join("/")
                }, t.isAbsolute = function(t) {
                    return t.indexOf(":") > 0 || "/" == t.charAt(0)
                }, t.getPath = function(t) {
                    var e = t.lastIndexOf("/");
                    return e > 0 ? t.substr(0, e + 1) : ""
                }, t.getFileName = function(t) {
                    var e = t.lastIndexOf("/");
                    return e > 0 ? t.substr(e + 1) : t
                }, t.version = {}, t.basePath = "", t.rootPath = "", t.customFormat = function(e) {
                    var i = t.version[e];
                    return !R.isConchApp && i && (e += "?v=" + i), e
                }, t
            }(),
            R = function() {
                function e(t, n) {
                    function s() {
                        i.stage._loop(), B.window.requestAnimationFrame(s)
                    }
                    this._timeId = 0;
                    var r = e._mainCanvas.source.style;
                    r.position = "absolute", r.top = r.left = "0px", r.background = "#000000", e._mainCanvas.source.id = "layaCanvas";
                    var o = laya.renders.Render.isWebGL;
                    e._mainCanvas.source.width = t, e._mainCanvas.source.height = n, o && e.WebGL.init(e._mainCanvas, t, n), B.container.appendChild(e._mainCanvas.source), e._context = new D(t, n, o ? null : e._mainCanvas), e._context.ctx.setIsMainContext(), B.window.requestAnimationFrame(s), i.stage.on("visibilitychange", this, this._onVisibilitychange)
                }
                s(e, "laya.renders.Render");
                var n = e.prototype;
                return n._onVisibilitychange = function() {
                    i.stage.isVisibility ? 0 != this._timeId && B.window.clearInterval(this._timeId) : this._timeId = B.window.setInterval(this._enterFrame, 1e3)
                }, n._enterFrame = function() {
                    i.stage._loop()
                }, r(1, e, "context", function() {
                    return e._context
                }), r(1, e, "canvas", function() {
                    return e._mainCanvas.source
                }), e._context = null, e._mainCanvas = null, e.WebGL = null, e.isConchNode = !1, e.isConchApp = !1, e.isConchWebGL = !1, e.isWebGL = !1, e.is3DMode = !1, e.optimizeTextureMemory = function() {
                    return !0
                }, e.__init$ = function() {
                    t.ConchRenderType = t.ConchRenderType || 1, t.ConchRenderType |= t.conch ? 4 : 0, e.isConchNode = 5 == (5 & t.ConchRenderType), e.isConchApp = 4 == (4 & t.ConchRenderType), e.isConchWebGL = 6 == t.ConchRenderType
                }, e
            }(),
            D = function() {
                function t(e, i, n) {
                    this.x = 0, this.y = 0, this._drawTexture = function(t, e, i) {
                        i[0].loaded && this.ctx.drawTexture(i[0], i[1], i[2], i[3], i[4], t, e)
                    }, this._fillTexture = function(t, e, i) {
                        i[0].loaded && this.ctx.fillTexture(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
                    }, this._drawTextureWithTransform = function(t, e, i) {
                        i[0].loaded && this.ctx.drawTextureWithTransform(i[0], i[1], i[2], i[3], i[4], i[5], t, e, i[6], i[7])
                    }, this._fillQuadrangle = function(t, e, i) {
                        this.ctx.fillQuadrangle(i[0], i[1], i[2], i[3], i[4])
                    }, this._drawRect = function(t, e, i) {
                        var n = this.ctx;
                        null != i[4] && (n.fillStyle = i[4], n.fillRect(t + i[0], e + i[1], i[2], i[3], null)), null != i[5] && (n.strokeStyle = i[5], n.lineWidth = i[6], n.strokeRect(t + i[0], e + i[1], i[2], i[3], i[6]))
                    }, this._drawPie = function(t, e, i) {
                        var n = this.ctx;
                        R.isWebGL && n.setPathId(i[8]), n.beginPath(), R.isWebGL ? (n.movePath(i[0] + t, i[1] + e), n.moveTo(0, 0)) : n.moveTo(t + i[0], e + i[1]), n.arc(t + i[0], e + i[1], i[2], i[3], i[4]), n.closePath(), this._fillAndStroke(i[5], i[6], i[7], !0)
                    }, this._clipRect = function(t, e, i) {
                        this.ctx.clipRect(t + i[0], e + i[1], i[2], i[3])
                    }, this._fillRect = function(t, e, i) {
                        this.ctx.fillRect(t + i[0], e + i[1], i[2], i[3], i[4])
                    }, this._drawCircle = function(e, i, n) {
                        var s = this.ctx;
                        R.isWebGL && s.setPathId(n[6]), X.drawCall++, s.beginPath(), R.isWebGL && s.movePath(n[0] + e, n[1] + i), s.arc(n[0] + e, n[1] + i, n[2], 0, t.PI2), s.closePath(), this._fillAndStroke(n[3], n[4], n[5], !0)
                    }, this._fillCircle = function(e, i, n) {
                        X.drawCall++;
                        var s = this.ctx;
                        s.beginPath(), s.fillStyle = n[3], s.arc(n[0] + e, n[1] + i, n[2], 0, t.PI2), s.fill()
                    }, this._setShader = function(t, e, i) {
                        this.ctx.setShader(i[0])
                    }, this._drawLine = function(t, e, i) {
                        var n = this.ctx;
                        R.isWebGL && n.setPathId(i[6]), n.beginPath(), n.strokeStyle = i[4], n.lineWidth = i[5], R.isWebGL ? (n.movePath(t, e), n.moveTo(i[0], i[1]), n.lineTo(i[2], i[3])) : (n.moveTo(t + i[0], e + i[1]), n.lineTo(t + i[2], e + i[3])), n.stroke()
                    }, this._drawLines = function(t, e, i) {
                        var n = this.ctx;
                        R.isWebGL && n.setPathId(i[5]), n.beginPath(), t += i[0], e += i[1], R.isWebGL && n.movePath(t, e), n.strokeStyle = i[3], n.lineWidth = i[4];
                        var s = i[2],
                            r = 2,
                            o = s.length;
                        if (R.isWebGL)
                            for (n.moveTo(s[0], s[1]); o > r;) n.lineTo(s[r++], s[r++]);
                        else
                            for (n.moveTo(t + s[0], e + s[1]); o > r;) n.lineTo(t + s[r++], e + s[r++]);
                        n.stroke()
                    }, this._drawLinesWebGL = function(t, e, i) {
                        this.ctx.drawLines(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4])
                    }, this._drawCurves = function(t, e, i) {
                        this.ctx.drawCurves(t, e, i)
                    }, this._draw = function(t, e, i) {
                        i[0].call(null, this, t, e)
                    }, this._transformByMatrix = function(t, e, i) {
                        this.ctx.transformByMatrix(i[0])
                    }, this._setTransform = function(t, e, i) {
                        this.ctx.setTransform(i[0], i[1], i[2], i[3], i[4], i[5])
                    }, this._setTransformByMatrix = function(t, e, i) {
                        this.ctx.setTransformByMatrix(i[0])
                    }, this._save = function() {
                        this.ctx.save()
                    }, this._restore = function() {
                        this.ctx.restore()
                    }, this._translate = function(t, e, i) {
                        this.ctx.translate(i[0], i[1])
                    }, this._transform = function(t, e, i) {
                        this.ctx.translate(i[1] + t, i[2] + e);
                        var n = i[0];
                        this.ctx.transform(n.a, n.b, n.c, n.d, n.tx, n.ty), this.ctx.translate(-t - i[1], -e - i[2])
                    }, this._rotate = function(t, e, i) {
                        this.ctx.translate(i[1] + t, i[2] + e), this.ctx.rotate(i[0]), this.ctx.translate(-t - i[1], -e - i[2])
                    }, this._scale = function(t, e, i) {
                        this.ctx.translate(i[2] + t, i[3] + e), this.ctx.scale(i[0], i[1]), this.ctx.translate(-t - i[2], -e - i[3])
                    }, this._alpha = function(t, e, i) {
                        this.ctx.globalAlpha *= i[0]
                    }, this._setAlpha = function(t, e, i) {
                        this.ctx.globalAlpha = i[0]
                    }, this._fillText = function(t, e, i) {
                        this.ctx.fillText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5])
                    }, this._strokeText = function(t, e, i) {
                        this.ctx.strokeText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6])
                    }, this._fillBorderText = function(t, e, i) {
                        this.ctx.fillBorderText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7])
                    }, this._blendMode = function(t, e, i) {
                        this.ctx.globalCompositeOperation = i[0]
                    }, this._beginClip = function(t, e, i) {
                        this.ctx.beginClip && this.ctx.beginClip(t + i[0], e + i[1], i[2], i[3])
                    }, this._setIBVB = function(t, e, i) {
                        this.ctx.setIBVB(i[0] + t, i[1] + e, i[2], i[3], i[4], i[5], i[6], i[7])
                    }, this._fillTrangles = function(t, e, i) {
                        this.ctx.fillTrangles(i[0], i[1] + t, i[2] + e, i[3], i[4])
                    }, this._drawPath = function(t, e, i) {
                        var n = this.ctx;
                        R.isWebGL && n.setPathId(-1), n.beginPath(), t += i[0], e += i[1], R.isWebGL && n.movePath(t, e);
                        for (var s = i[2], r = 0, o = s.length; o > r; r++) {
                            var a = s[r];
                            switch (a[0]) {
                                case "moveTo":
                                    R.isWebGL ? n.moveTo(a[1], a[2]) : n.moveTo(t + a[1], e + a[2]);
                                    break;
                                case "lineTo":
                                    R.isWebGL ? n.lineTo(a[1], a[2]) : n.lineTo(t + a[1], e + a[2]);
                                    break;
                                case "arcTo":
                                    R.isWebGL ? n.arcTo(a[1], a[2], a[3], a[4], a[5]) : n.arcTo(t + a[1], e + a[2], t + a[3], e + a[4], a[5]);
                                    break;
                                case "closePath":
                                    n.closePath()
                            }
                        }
                        var h = i[3];
                        null != h && (n.fillStyle = h.fillStyle, n.fill());
                        var l = i[4];
                        null != l && (n.strokeStyle = l.strokeStyle, n.lineWidth = l.lineWidth || 1, n.lineJoin = l.lineJoin, n.lineCap = l.lineCap, n.miterLimit = l.miterLimit, n.stroke())
                    }, this.drawPoly = function(t, e, i) {
                        this.ctx.drawPoly(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4], i[5], i[6])
                    }, this._drawPoly = function(t, e, i) {
                        var n = this.ctx,
                            s = i[2],
                            r = 2,
                            o = s.length;
                        if (R.isWebGL)
                            for (n.setPathId(i[6]), n.beginPath(), t += i[0], e += i[1], n.movePath(t, e), n.moveTo(s[0], s[1]); o > r;) n.lineTo(s[r++], s[r++]);
                        else
                            for (n.beginPath(), t += i[0], e += i[1], n.moveTo(t + s[0], e + s[1]); o > r;) n.lineTo(t + s[r++], e + s[r++]);
                        n.closePath(), this._fillAndStroke(i[3], i[4], i[5], i[7])
                    }, this._drawSkin = function(t, e, i) {
                        var n = i[0];
                        if (n) {
                            var s = this.ctx;
                            n.render(s, t, e)
                        }
                    }, this._drawParticle = function(t, e, i) {
                        this.ctx.drawParticle(t + this.x, e + this.y, i[0])
                    }, this._setFilters = function(t, e, i) {
                        this.ctx.setFilters(i)
                    }, n ? this.ctx = n.getContext("2d") : (n = ye.create("3D"), this.ctx = o.createWebGLContext2D(n), n._setContext(this.ctx)), n.size(e, i), this.canvas = n
                }
                s(t, "laya.renders.RenderContext");
                var e = t.prototype;
                return e.destroy = function() {
                    this.canvas && (this.canvas.destroy(), this.canvas = null, this.ctx = null), this.ctx && (this.ctx.destroy(), this.ctx = null)
                }, e.drawTexture = function(t, e, i, n, s) {
                    t.loaded && this.ctx.drawTexture(t, e, i, n, s, this.x, this.y)
                }, e._drawTextures = function(t, e, i) {
                    i[0].loaded && this.ctx.drawTextures(i[0], i[1], t + this.x, e + this.y)
                }, e.drawTextureWithTransform = function(t, e, i, n, s, r, o) {
                    t.loaded && this.ctx.drawTextureWithTransform(t, e, i, n, s, r, this.x, this.y, o)
                }, e.fillQuadrangle = function(t, e, i, n, s) {
                    this.ctx.fillQuadrangle(t, e, i, n, s)
                }, e.drawCanvas = function(t, e, i, n, s) {
                    this.ctx.drawCanvas(t, e + this.x, i + this.y, n, s)
                }, e.drawRect = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 1);
                    var o = this.ctx;
                    o.strokeStyle = s, o.lineWidth = r, o.strokeRect(t + this.x, e + this.y, i, n, r)
                }, e._fillAndStroke = function(t, e, i, n) {
                    void 0 === n && (n = !1);
                    var s = this.ctx;
                    null != t && (s.fillStyle = t, R.isWebGL ? s.fill(n) : s.fill()), null != e && i > 0 && (s.strokeStyle = e, s.lineWidth = i, s.stroke())
                }, e.clipRect = function(t, e, i, n) {
                    this.ctx.clipRect(t + this.x, e + this.y, i, n)
                }, e.fillRect = function(t, e, i, n, s) {
                    this.ctx.fillRect(t + this.x, e + this.y, i, n, s)
                }, e.drawCircle = function(e, i, n, s, r) {
                    void 0 === r && (r = 1), X.drawCall++;
                    var o = this.ctx;
                    o.beginPath(), o.strokeStyle = s, o.lineWidth = r, o.arc(e + this.x, i + this.y, n, 0, t.PI2), o.stroke()
                }, e.drawTriangles = function(t, e, i) {
                    if (R.isWebGL) this.ctx.drawTriangles(i[0], t + i[1], e + i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9]);
                    else {
                        var n = i[5],
                            s = 0,
                            r = n.length,
                            o = this.ctx;
                        for (s = 0; r > s; s += 3) {
                            var a = 2 * n[s],
                                h = 2 * n[s + 1],
                                l = 2 * n[s + 2];
                            o.drawTriangle(i[0], i[3], i[4], a, h, l, i[6], !0)
                        }
                    }
                }, e.fillCircle = function(e, i, n, s) {
                    X.drawCall++;
                    var r = this.ctx;
                    r.beginPath(), r.fillStyle = s, r.arc(e + this.x, i + this.y, n, 0, t.PI2), r.fill()
                }, e.setShader = function(t) {
                    this.ctx.setShader(t)
                }, e.drawLine = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 1);
                    var o = this.ctx;
                    o.beginPath(), o.strokeStyle = s, o.lineWidth = r, o.moveTo(this.x + t, this.y + e), o.lineTo(this.x + i, this.y + n), o.stroke()
                }, e.clear = function() {
                    this.ctx.clear()
                }, e.transformByMatrix = function(t) {
                    this.ctx.transformByMatrix(t)
                }, e.setTransform = function(t, e, i, n, s, r) {
                    this.ctx.setTransform(t, e, i, n, s, r)
                }, e.setTransformByMatrix = function(t) {
                    this.ctx.setTransformByMatrix(t)
                }, e.save = function() {
                    this.ctx.save()
                }, e.restore = function() {
                    this.ctx.restore()
                }, e.translate = function(t, e) {
                    this.ctx.translate(t, e)
                }, e.transform = function(t, e, i, n, s, r) {
                    this.ctx.transform(t, e, i, n, s, r)
                }, e.rotate = function(t) {
                    this.ctx.rotate(t)
                }, e.scale = function(t, e) {
                    this.ctx.scale(t, e)
                }, e.alpha = function(t) {
                    this.ctx.globalAlpha *= t
                }, e.setAlpha = function(t) {
                    this.ctx.globalAlpha = t
                }, e.fillWords = function(t, e, i, n, s, r) {
                    void 0 === r && (r = 0), this.ctx.fillWords(t, e, i, n, s, r)
                }, e.fillBorderWords = function(t, e, i, n, s, r, o) {
                    this.ctx.fillBorderWords(t, e, i, n, s, r, o)
                }, e.fillText = function(t, e, i, n, s, r) {
                    this.ctx.fillText(t, e + this.x, i + this.y, n, s, r)
                }, e.strokeText = function(t, e, i, n, s, r, o) {
                    this.ctx.strokeText(t, e + this.x, i + this.y, n, s, r, o)
                }, e.blendMode = function(t) {
                    this.ctx.globalCompositeOperation = t
                }, e.flush = function() {
                    this.ctx.flush && this.ctx.flush()
                }, e.addRenderObject = function(t) {
                    this.ctx.addRenderObject(t)
                }, e.beginClip = function(t, e, i, n) {
                    this.ctx.beginClip && this.ctx.beginClip(t, e, i, n)
                }, e.endClip = function() {
                    this.ctx.endClip && this.ctx.endClip()
                }, e.fillTrangles = function(t, e, i) {
                    this.ctx.fillTrangles(i[0], i[1], i[2], i[3], i.length > 4 ? i[4] : null)
                }, t.PI2 = 2 * Math.PI, t
            }(),
            k = function() {
                function t(e, i) {
                    switch (this._next = i || t.NORENDER, e) {
                        case 0:
                            return this._fun = this._no, void 0;
                        case 1:
                            return this._fun = this._image, void 0;
                        case 2:
                            return this._fun = this._alpha, void 0;
                        case 4:
                            return this._fun = this._transform, void 0;
                        case 8:
                            return this._fun = this._blend, void 0;
                        case 16:
                            return this._fun = this._canvas, void 0;
                        case 64:
                            return this._fun = this._mask, void 0;
                        case 128:
                            return this._fun = this._clip, void 0;
                        case 256:
                            return this._fun = this._style, void 0;
                        case 512:
                            return this._fun = this._graphics, void 0;
                        case 2048:
                            return this._fun = this._childs, void 0;
                        case 1024:
                            return this._fun = this._custom, void 0;
                        case 513:
                            return this._fun = this._image2, void 0;
                        case 517:
                            return this._fun = this._image2, void 0;
                        case 32:
                            return this._fun = w._filter, void 0;
                        case 69905:
                            return this._fun = t._initRenderFun, void 0
                    }
                    this.onCreate(e)
                }
                s(t, "laya.renders.RenderSprite");
                var e = t.prototype;
                return e.onCreate = function() {}, e._style = function(t, e, i, n) {
                    t._style.render(t, e, i, n);
                    var s = this._next;
                    s._fun.call(s, t, e, i, n)
                }, e._no = function() {}, e._custom = function(t, e, i, n) {
                    t.customRender(e, i, n);
                    var s = t._style._tf;
                    this._next._fun.call(this._next, t, e, i - s.translateX, n - s.translateY)
                }, e._clip = function(e, i, n, s) {
                    var r = this._next;
                    if (r != t.NORENDER) {
                        var o = e._style.scrollRect;
                        i.ctx.save(), i.ctx.clipRect(n, s, o.width, o.height), r._fun.call(r, e, i, n - o.x, s - o.y), i.ctx.restore()
                    }
                }, e._blend = function(t, e, i, n) {
                    var s = t._style;
                    s.blendMode && (e.ctx.globalCompositeOperation = s.blendMode);
                    var r = this._next;
                    r._fun.call(r, t, e, i, n), e.ctx.globalCompositeOperation = "source-over"
                }, e._mask = function(t, e, i, n) {
                    var s = this._next;
                    s._fun.call(s, t, e, i, n);
                    var r = t.mask;
                    r && (e.ctx.globalCompositeOperation = "destination-in", (r.numChildren > 0 || !r.graphics._isOnlyOne()) && (r.cacheAsBitmap = !0), r.render(e, i - t.pivotX, n - t.pivotY)), e.ctx.globalCompositeOperation = "source-over"
                }, e._graphics = function(t, e, i, n) {
                    var s = t._style._tf;
                    t._graphics && t._graphics._render(t, e, i - s.translateX, n - s.translateY);
                    var r = this._next;
                    r._fun.call(r, t, e, i, n)
                }, e._image = function(t, e, i, n) {
                    var s = t._style;
                    e.ctx.drawTexture2(i, n, s._tf.translateX, s._tf.translateY, t.transform, s.alpha, s.blendMode, t._graphics._one)
                }, e._image2 = function(t, e, i, n) {
                    var s = t._style._tf;
                    e.ctx.drawTexture2(i, n, s.translateX, s.translateY, t.transform, 1, null, t._graphics._one)
                }, e._alpha = function(t, e, i, n) {
                    var s, r = t._style;
                    if ((s = r.alpha) > .01 || t._needRepaint()) {
                        var o = e.ctx.globalAlpha;
                        e.ctx.globalAlpha *= s;
                        var a = this._next;
                        a._fun.call(a, t, e, i, n), e.ctx.globalAlpha = o
                    }
                }, e._transform = function(e, i, n, s) {
                    var r = e.transform,
                        o = this._next;
                    r && o != t.NORENDER ? (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx + n, r.ty + s), o._fun.call(o, e, i, 0, 0), i.restore()) : o._fun.call(o, e, i, n, s)
                }, e._childs = function(t, e, i, n) {
                    var s = t._style,
                        r = s._tf;
                    if (i = i - r.translateX + s.paddingLeft, n = n - r.translateY + s.paddingTop, s._calculation) {
                        var o = t._getWords();
                        if (o) {
                            var a = s;
                            a && (a.stroke ? e.fillBorderWords(o, i, n, a.font, a.color, a.strokeColor, a.stroke) : e.fillWords(o, i, n, a.font, a.color, "none" != a.textDecoration && a.underLine ? 1 : 0))
                        }
                    }
                    var h, l = t._childs,
                        u = l.length;
                    if (t.viewport || t.optimizeScrollRect && t._style.scrollRect) {
                        var c = t.viewport || t._style.scrollRect,
                            _ = c.x,
                            d = c.y,
                            f = c.right,
                            p = c.bottom,
                            g = 0 / 0,
                            m = 0 / 0;
                        for (v = 0; u > v; ++v)(h = l[v]).visible && (g = h._x) < f && g + h.width > _ && (m = h._y) < p && m + h.height > d && h.render(e, i, n)
                    } else
                        for (var v = 0; u > v; ++v)(h = l[v])._style.visible && h.render(e, i, n)
                }, e._canvas = function(t, e, i, n) {
                    var s = t._$P.cacheCanvas;
                    if (!s) return this._next._fun.call(this._next, t, e, i, n), void 0;
                    "bitmap" === s.type ? X.canvasBitmap++ : X.canvasNormal++;
                    var r = s.ctx;
                    if (t._needRepaint() || !r) this._canvas_repaint(t, e, i, n);
                    else {
                        var o = s._cacheRec;
                        e.drawCanvas(r.canvas, i + o.x, n + o.y, o.width, o.height)
                    }
                }, e._canvas_repaint = function(t, e, n, s) {
                    var r = t._$P.cacheCanvas,
                        o = this._next;
                    if (!r) return o._fun.call(o, t, c, n, s), void 0;
                    var a, h, l, u, c = r.ctx,
                        _ = t._needRepaint() || !c,
                        d = r.type;
                    if ("bitmap" === d ? X.canvasBitmap++ : X.canvasNormal++, _) {
                        r._cacheRec || (r._cacheRec = new P);
                        var f, p;
                        R.isWebGL && "bitmap" !== d ? r._cacheRec.setTo(-t.pivotX, -t.pivotY, 1, 1) : (u = t.getSelfBounds(), u.x = u.x - t.pivotX, u.y = u.y - t.pivotY, u.x = u.x - 16, u.y = u.y - 16, u.width = u.width + 32, u.height = u.height + 32, u.x = Math.floor(u.x + n) - n, u.y = Math.floor(u.y + s) - s, u.width = Math.floor(u.width), u.height = Math.floor(u.height), r._cacheRec.copyFrom(u)), u = r._cacheRec;
                        var g = R.isWebGL ? 1 : B.pixelRatio * i.stage.clientScaleX,
                            m = R.isWebGL ? 1 : B.pixelRatio * i.stage.clientScaleY;
                        if (!R.isWebGL) {
                            var v, y = 1,
                                w = 1;
                            for (v = t; v && v != i.stage;) y *= v.scaleX, w *= v.scaleY, v = v.parent;
                            R.isWebGL ? (1 > y && (g *= y), 1 > w && (m *= w)) : (y > 1 && (g *= y), w > 1 && (m *= w))
                        }
                        if (t.scrollRect) {
                            var x = t.scrollRect;
                            u.x -= x.x, u.y -= x.y
                        }
                        if (f = u.width * g, p = u.height * m, h = u.x, l = u.y, R.isWebGL && "bitmap" === d && (f > 2048 || p > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), r.ctx && (V.recover("RenderContext", r.ctx), r.ctx.canvas.size(0, 0), r.ctx = null), o._fun.call(o, t, e, n, s), void 0;
                        c || (c = r.ctx = V.getItem("RenderContext") || new D(f, p, ye.create("AUTO"))), c.ctx.sprite = t, a = c.canvas, a.clear(), (a.width != f || a.height != p) && a.size(f, p), "bitmap" === d ? a.context.asBitmap = !0 : "normal" === d && (a.context.asBitmap = !1);
                        var T;
                        if (1 != g || 1 != m) {
                            var b = c.ctx;
                            b.save(), b.scale(g, m), !R.isConchWebGL && R.isConchApp && (T = t._$P.cf, T && b.setFilterMatrix && b.setFilterMatrix(T._mat, T._alpha)), o._fun.call(o, t, c, -h, -l), b.restore(), (!R.isConchApp || R.isConchWebGL) && t._applyFilters()
                        } else b = c.ctx, !R.isConchWebGL && R.isConchApp && (T = t._$P.cf, T && b.setFilterMatrix && b.setFilterMatrix(T._mat, T._alpha)), o._fun.call(o, t, c, -h, -l), (!R.isConchApp || R.isConchWebGL) && t._applyFilters();
                        t._$P.staticCache && (r.reCache = !1), X.canvasReCache++
                    } else u = r._cacheRec, h = u.x, l = u.y, a = c.canvas;
                    e.drawCanvas(a, n + h, s + l, u.width, u.height)
                }, t.__init__ = function() {
                    function e(e, i) {
                        for (var n = 0, s = 0; s < e.length; s++) n |= e[s], t.renders[n] = i
                    }
                    var i, n = 0,
                        s = 0;
                    for (i = o.createRenderSprite(69905, null), s = t.renders.length = 4096, n = 0; s > n; n++) t.renders[n] = i;
                    t.renders[0] = o.createRenderSprite(0, null), e([1, 512, 4, 2], new t(1, null)), t.renders[513] = o.createRenderSprite(513, null), t.renders[517] = new t(517, null)
                }, t._initRenderFun = function(e, i, n, s) {
                    var r = e._renderType,
                        o = t.renders[r] = t._getTypeRender(r);
                    o._fun(e, i, n, s)
                }, t._getTypeRender = function(t) {
                    for (var e = null, i = 2048; i > 1;) i & t && (e = o.createRenderSprite(i, e)), i >>= 1;
                    return e
                }, t.IMAGE = 1, t.ALPHA = 2, t.TRANSFORM = 4, t.BLEND = 8, t.CANVAS = 16, t.FILTERS = 32, t.MASK = 64, t.CLIP = 128, t.STYLE = 256, t.GRAPHICS = 512, t.CUSTOM = 1024, t.CHILDS = 2048, t.INIT = 69905, t.renders = [], t.NORENDER = new t(0, null), t
            }(),
            F = function() {
                function t() {
                    this._repaint = !1
                }
                s(t, "laya.resource.Context");
                var e = t.prototype;
                return e.replaceReset = function() {
                    var e = 0,
                        i = 0;
                    i = t.replaceKeys.length;
                    var n;
                    for (e = 0; i > e; e++) n = t.replaceKeys[e], this[t.newKeys[e]] = this[n]
                }, e.replaceResotre = function() {
                    this.__restore(), this.__reset()
                }, e.setIsMainContext = function() {}, e.drawTextures = function(t, e, i, n) {
                    X.drawCall += e.length / 2;
                    for (var s = t.width, r = t.height, o = 0, a = e.length; a > o; o += 2) this.drawTexture(t, e[o], e[o + 1], s, r, i, n)
                }, e.drawCanvas = function(t, e, i, n, s) {
                    X.drawCall++, this.drawImage(t.source, e, i, n, s)
                }, e.fillRect = function(t, e, i, n, s) {
                    X.drawCall++, s && (this.fillStyle = s), this.__fillRect(t, e, i, n)
                }, e.fillText = function(t, e, i, n, s, r) {
                    X.drawCall++, arguments.length > 3 && null != n && (this.font = n, this.fillStyle = s, this.textAlign = r, this.textBaseline = "top"), this.__fillText(t, e, i)
                }, e.fillBorderText = function(t, e, i, n, s, r, o, a) {
                    X.drawCall++, this.font = n, this.fillStyle = s, this.textBaseline = "top", this.strokeStyle = r, this.lineWidth = o, this.textAlign = a, this.__strokeText(t, e, i), this.__fillText(t, e, i)
                }, e.strokeText = function(t, e, i, n, s, r, o) {
                    X.drawCall++, arguments.length > 3 && null != n && (this.font = n, this.strokeStyle = s, this.lineWidth = r, this.textAlign = o, this.textBaseline = "top"), this.__strokeText(t, e, i)
                }, e.transformByMatrix = function(t) {
                    this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty)
                }, e.setTransformByMatrix = function(t) {
                    this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty)
                }, e.clipRect = function(t, e, i, n) {
                    X.drawCall++, this.beginPath(), this.rect(t, e, i, n), this.clip()
                }, e.drawTexture = function(t, e, i, n, s, r, o) {
                    X.drawCall++;
                    var a = t.uv,
                        h = t.bitmap.width,
                        l = t.bitmap.height;
                    this.drawImage(t.source, a[0] * h, a[1] * l, (a[2] - a[0]) * h, (a[5] - a[3]) * l, e + r, i + o, n, s)
                }, e.drawTextureWithTransform = function(t, e, i, n, s, r, o, a, h) {
                    X.drawCall++;
                    var l = t.uv,
                        u = t.bitmap.width,
                        c = t.bitmap.height;
                    this.save(), 1 != h && (this.globalAlpha *= h), r ? (this.transform(r.a, r.b, r.c, r.d, r.tx + o, r.ty + a), this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e, i, n, s)) : this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e + o, i + a, n, s), this.restore()
                }, e.drawTexture2 = function(t, e, i, n, s, r, o, a) {
                    var h = a[0];
                    if (h.loaded && h.bitmap && h.source) {
                        X.drawCall++;
                        var l = 1 !== r;
                        if (l) {
                            var u = this.globalAlpha;
                            this.globalAlpha *= r
                        }
                        var c = h.uv,
                            _ = h.bitmap.width,
                            d = h.bitmap.height;
                        s ? (this.save(), this.transform(s.a, s.b, s.c, s.d, s.tx + t, s.ty + e), this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, a[1] - i, a[2] - n, a[3], a[4]), this.restore()) : this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, a[1] - i + t, a[2] - n + e, a[3], a[4]), l && (this.globalAlpha = u)
                    }
                }, e.fillTexture = function(t, e, i, n, s, r, o, a) {
                    if (!a.pat) {
                        if (t.uv != le.DEF_UV) {
                            var h = new ye("2D");
                            h.getContext("2d"), h.size(t.width, t.height), h.context.drawTexture(t, 0, 0, t.width, t.height, 0, 0), t = new le(h)
                        }
                        a.pat = this.createPattern(t.bitmap.source, r)
                    }
                    var l = e,
                        u = i,
                        c = 0,
                        _ = 0;
                    o && (l += o.x % t.width, u += o.y % t.height, c -= o.x % t.width, _ -= o.y % t.height), this.translate(l, u), this.fillRect(c, _, n, s, a.pat), this.translate(-l, -u)
                }, e.drawTriangle = function(t, e, i, n, s, r, o, a) {
                    var h = t.bitmap,
                        l = h.source,
                        u = t.width,
                        c = t.height,
                        _ = h.width,
                        d = h.height,
                        f = i[n] * _,
                        p = i[s] * _,
                        g = i[r] * _,
                        m = i[n + 1] * d,
                        v = i[s + 1] * d,
                        y = i[r + 1] * d,
                        w = e[n],
                        x = e[s],
                        T = e[r],
                        b = e[n + 1],
                        C = e[s + 1],
                        M = e[r + 1];
                    if (a) {
                        var S = 1,
                            P = 1,
                            E = (w + x + T) / 3,
                            A = (b + C + M) / 3,
                            I = w - E,
                            L = b - A,
                            R = Math.sqrt(I * I + L * L);
                        w = E + I / R * (R + S), b = A + L / R * (R + P), I = x - E, L = C - A, R = Math.sqrt(I * I + L * L), x = E + I / R * (R + S), C = A + L / R * (R + P), I = T - E, L = M - A, R = Math.sqrt(I * I + L * L), T = E + I / R * (R + S), M = A + L / R * (R + P)
                    }
                    this.save(), o && this.transform(o.a, o.b, o.c, o.d, o.tx, o.ty), this.beginPath(), this.moveTo(w, b), this.lineTo(x, C), this.lineTo(T, M), this.closePath(), this.clip();
                    var D = f * v + m * g + p * y - v * g - m * p - f * y,
                        k = 1 / D,
                        F = w * v + m * T + x * y - v * T - m * x - w * y,
                        O = f * x + w * g + p * T - x * g - w * p - f * T,
                        B = f * v * T + m * x * g + w * p * y - w * v * g - m * p * T - f * x * y,
                        N = b * v + m * M + C * y - v * M - m * C - b * y,
                        W = f * C + b * g + p * M - C * g - b * p - f * M,
                        U = f * v * M + m * C * g + b * p * y - b * v * g - m * p * M - f * C * y;
                    this.transform(F * k, N * k, O * k, W * k, B * k, U * k), this.drawImage(l, t.uv[0] * _, t.uv[1] * d, u, c, t.uv[0] * _, t.uv[1] * d, u, c), this.restore()
                }, e.flush = function() {
                    return 0
                }, e.fillWords = function(t, e, i, n, s, r) {
                    n && (this.font = n), s && (this.fillStyle = s);
                    this.textBaseline = "top", this.textAlign = "left";
                    for (var o = 0, a = t.length; a > o; o++) {
                        var h = t[o];
                        if (this.__fillText(h.char, h.x + e, h.y + i), 1 === r) {
                            var l = h.height,
                                u = .5 * h.style.letterSpacing;
                            u || (u = 0), this.beginPath(), this.strokeStyle = s, this.lineWidth = 1, this.moveTo(e + h.x - u + .5, i + h.y + l + .5), this.lineTo(e + h.x + h.width + u + .5, i + h.y + l + .5), this.stroke()
                        }
                    }
                }, e.fillBorderWords = function(t, e, i, n, s, r, o) {
                    n && (this.font = n), s && (this.fillStyle = s), this.textBaseline = "top", this.lineWidth = o, this.textAlign = "left", this.strokeStyle = r;
                    for (var a = 0, h = t.length; h > a; a++) {
                        var l = t[a];
                        this.__strokeText(l.char, l.x + e, l.y + i), this.__fillText(l.char, l.x + e, l.y + i)
                    }
                }, e.destroy = function() {
                    this.canvas.width = this.canvas.height = 0
                }, e.clear = function() {
                    this.clearRect(0, 0, this._canvas.width, this._canvas.height), this._repaint = !1
                }, e.drawCurves = function(t, e, i) {
                    this.beginPath(), this.strokeStyle = i[3], this.lineWidth = i[4];
                    var n = i[2];
                    t += i[0], e += i[1], this.moveTo(t + n[0], e + n[1]);
                    for (var s = 2, r = n.length; r > s;) this.quadraticCurveTo(t + n[s++], e + n[s++], t + n[s++], e + n[s++]);
                    this.stroke()
                }, t.__init__ = function(t) {
                    var e = laya.resource.Context.prototype;
                    if (t = t || CanvasRenderingContext2D.prototype, !t.inited) {
                        t.inited = !0, t.__fillText = t.fillText, t.__fillRect = t.fillRect, t.__strokeText = t.strokeText;
                        var i = ["drawTextures", "drawTriangle", "fillWords", "fillBorderWords", "setIsMainContext", "fillRect", "strokeText", "fillTexture", "fillText", "transformByMatrix", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves"];
                        i.forEach(function(i) {
                            t[i] = e[i]
                        })
                    }
                }, t.replaceCanvasGetSet = function(t, e) {
                    var i = Object.getOwnPropertyDescriptor(t, e);
                    if (!i || !i.configurable) return !1;
                    var n, s = {};
                    for (n in i) "set" != n && (s[n] = i[n]);
                    var r = i.set;
                    return s.set = function(t) {
                        var e = this;
                        r.call(e, t);
                        var i = e.getContext("2d");
                        i && "__reset" in i && i.__reset()
                    }, Object.defineProperty(t, e, s), !0
                }, t.replaceGetSet = function(e, i) {
                    var n = Object.getOwnPropertyDescriptor(e, i);
                    if (!n || !n.configurable) return !1;
                    var s, r = {};
                    for (s in n) "set" != s && (r[s] = n[s]);
                    var o = n.set,
                        a = "___" + i + "__";
                    return t.newKeys.push(a), r.set = function(t) {
                        var e = this;
                        t != e[a] && (e[a] = t, o.call(e, t))
                    }, Object.defineProperty(e, i, r), !0
                }, t._default = new t, t.newKeys = [], n(t, ["replaceKeys", function() {
                    return this.replaceKeys = ["font", "fillStyle", "textBaseline"]
                }]), t
            }(),
            O = function() {
                function t(e) {
                    this._id = 0, this._name = null, this._resources = null, this._memorySize = 0, this._garbageCollectionRate = 0 / 0, this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 0, this._id = ++t._uniqueIDCounter, this._name = e ? e : "Content Manager", t._isResourceManagersSorted = !1, this._memorySize = 0, this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 536870912, this._garbageCollectionRate = .2, t._resourceManagers.push(this), this._resources = []
                }
                s(t, "laya.resource.ResourceManager");
                var e = t.prototype;
                return i.imps(e, {
                    "laya.resource.IDispose": !0
                }), e.getResourceByIndex = function(t) {
                    return this._resources[t]
                }, e.getResourcesLength = function() {
                    return this._resources.length
                }, e.addResource = function(t) {
                    t.resourceManager && t.resourceManager.removeResource(t);
                    var e = this._resources.indexOf(t);
                    return -1 === e ? (t._resourceManager = this, this._resources.push(t), this.addSize(t.memorySize), !0) : !1
                }, e.removeResource = function(t) {
                    var e = this._resources.indexOf(t);
                    return -1 !== e ? (this._resources.splice(e, 1), t._resourceManager = null, this._memorySize -= t.memorySize, !0) : !1
                }, e.unload = function() {
                    for (var t = this._resources.slice(0, this._resources.length), e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.destroy()
                    }
                    t.length = 0
                }, e.dispose = function() {
                    if (this === t._systemResourceManager) throw new Error("systemResourceManager不能被释放！");
                    t._resourceManagers.splice(t._resourceManagers.indexOf(this), 1), t._isResourceManagersSorted = !1;
                    for (var e = this._resources.slice(0, this._resources.length), i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.resourceManager.removeResource(n), n.destroy()
                    }
                    e.length = 0
                }, e.addSize = function(t) {
                    t && (this.autoRelease && t > 0 && this._memorySize + t > this.autoReleaseMaxSize && this.garbageCollection((1 - this._garbageCollectionRate) * this.autoReleaseMaxSize), this._memorySize += t)
                }, e.garbageCollection = function(t) {
                    var e = this._resources;
                    e = e.slice(), e.sort(function(t, e) {
                        if (!t || !e) throw new Error("a或b不能为空！");
                        return t.released && e.released ? 0 : t.released ? 1 : e.released ? -1 : t._lastUseFrameCount - e._lastUseFrameCount
                    });
                    for (var i = X.loopCount, n = 0, s = e.length; s > n; n++) {
                        var r = e[n];
                        if (!(i - r._lastUseFrameCount > 1)) return this._memorySize >= t && (this._isOverflow = !0), void 0;
                        if (r.releaseResource(), this._memorySize < t) return this._isOverflow = !1, void 0
                    }
                }, r(0, e, "id", function() {
                    return this._id
                }), r(0, e, "name", function() {
                    return this._name
                }, function(e) {
                    !e && "" === e || this._name === e || (this._name = e, t._isResourceManagersSorted = !1)
                }), r(0, e, "memorySize", function() {
                    return this._memorySize
                }), r(1, t, "systemResourceManager", function() {
                    return t._systemResourceManager
                }), t.__init__ = function() {
                    t.currentResourceManager = t.systemResourceManager
                }, t.getLoadedResourceManagerByIndex = function(e) {
                    return t._resourceManagers[e]
                }, t.getLoadedResourceManagersCount = function() {
                    return t._resourceManagers.length
                }, t.recreateContentManagers = function(e) {
                    void 0 === e && (e = !1);
                    for (var i = t.currentResourceManager, n = 0; n < t._resourceManagers.length; n++) {
                        t.currentResourceManager = t._resourceManagers[n];
                        for (var s = 0; s < t.currentResourceManager._resources.length; s++) t.currentResourceManager._resources[s].releaseResource(e), t.currentResourceManager._resources[s].activeResource(e)
                    }
                    t.currentResourceManager = i
                }, t.releaseContentManagers = function(e) {
                    void 0 === e && (e = !1);
                    for (var i = t.currentResourceManager, n = 0; n < t._resourceManagers.length; n++) {
                        t.currentResourceManager = t._resourceManagers[n];
                        for (var s = 0; s < t.currentResourceManager._resources.length; s++) {
                            var r = t.currentResourceManager._resources[s];
                            !r.released && r.releaseResource(e)
                        }
                    }
                    t.currentResourceManager = i
                }, t._uniqueIDCounter = 0, t._isResourceManagersSorted = !1, t._resourceManagers = [], n(t, ["_systemResourceManager", function() {
                    return this._systemResourceManager = new t("System Resource Manager")
                }, "currentResourceManager", function() {
                    return this.currentResourceManager = t._systemResourceManager
                }]), t
            }(),
            B = (function() {
                function t() {}
                return s(t, "laya.system.System"), t.changeDefinition = function(t, e) {
                    i[t] = e;
                    var n = t + "=classObj";
                    i._runScript(n)
                }, t.__init__ = function() {
                    R.isConchApp && (conch.disableConchResManager(), conch.disableConchAutoRestoreLostedDevice())
                }, t
            }(), function() {
                function n() {}
                return s(n, "laya.utils.Browser"), r(1, n, "pixelRatio", function() {
                    return n.__init__(), n.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? 2 : o.getPixelRatio()
                }), r(1, n, "height", function() {
                    return n.__init__(), (i.stage && i.stage.canvasRotation ? n.clientWidth : n.clientHeight) * n.pixelRatio
                }), r(1, n, "clientWidth", function() {
                    return n.__init__(), n.window.innerWidth || n.document.body.clientWidth
                }), r(1, n, "window", function() {
                    return n.__init__(), n._window
                }), r(1, n, "clientHeight", function() {
                    return n.__init__(), n.window.innerHeight || n.document.body.clientHeight || n.document.documentElement.clientHeight
                }), r(1, n, "width", function() {
                    return n.__init__(), (i.stage && i.stage.canvasRotation ? n.clientHeight : n.clientWidth) * n.pixelRatio
                }), r(1, n, "container", function() {
                    return n.__init__(), n._container || (n._container = n.createElement("div"), n._container.id = "layaContainer", n.document.body.appendChild(n._container)), n._container
                }, function(t) {
                    n._container = t
                }), r(1, n, "document", function() {
                    return n.__init__(), n._document
                }), n.__init__ = function() {
                    if (!n._window) {
                        n._window = o.getWindow(), n._document = n.window.document, n._window.addEventListener("message", function(t) {
                            laya.utils.Browser._onMessage(t)
                        }, !1), n.document.__createElement = n.document.createElement, t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                            return t.setTimeout(e, 1e3 / 60)
                        };
                        var i = t.document.body.style;
                        i["-webkit-user-select"] = "none", i["-webkit-tap-highlight-color"] = "rgba(200,200,200,0)", n.userAgent = n.window.navigator.userAgent, n.u = n.userAgent, n.onIOS = !!n.u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), n.onMobile = n.u.indexOf("Mobile") > -1, n.onIPhone = n.u.indexOf("iPhone") > -1, n.onMac = n.u.indexOf("Mac OS X") > -1, n.onIPad = n.u.indexOf("iPad") > -1, n.onAndroid = n.u.indexOf("Android") > -1 || n.u.indexOf("Adr") > -1, n.onWP = n.u.indexOf("Windows Phone") > -1, n.onQQBrowser = n.u.indexOf("QQBrowser") > -1, n.onMQQBrowser = n.u.indexOf("MQQBrowser") > -1 || n.u.indexOf("Mobile") > -1 && n.u.indexOf("QQ") > -1, n.onIE = !!n.window.ActiveXObject || "ActiveXObject" in n.window, n.onWeiXin = n.u.indexOf("MicroMessenger") > -1, n.onPC = !n.onMobile, n.onSafari = n.u.indexOf("Safari") > -1, n.onFirefox = n.u.indexOf("Firefox") > -1, n.onEdge = n.u.indexOf("Edge") > -1, n.onMiniGame = n.u.indexOf("MiniGame") > -1, n.onLimixiu = n.u.indexOf("limixiu") > -1, n.httpProtocol = "http:" == n.window.location.protocol, n.onMiniGame && null == n.window.focus && console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"), n.webAudioEnabled = n.window.AudioContext || n.window.webkitAudioContext || n.window.mozAudioContext ? !0 : !1, n.soundType = n.webAudioEnabled ? "WEBAUDIOSOUND" : "AUDIOSOUND", ne = n.webAudioEnabled ? se : ee, n.webAudioEnabled && se.initWebAudio(), ee._initMusicAudio(), n.enableTouch = "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch, t.focus(), E._soundClass = ne, E._musicClass = ee, R._mainCanvas = R._mainCanvas || ye.create("2D"), n.canvas || (n.canvas = ye.create("2D"), n.context = n.canvas.getContext("2d"))
                    }
                }, n._onMessage = function(t) {
                    if (t.data && "size" == t.data.name) {
                        if (n.window.innerWidth = t.data.width, n.window.innerHeight = t.data.height, n.window.__innerHeight = t.data.clientHeight, !n.document.createEvent) return console.warn("no document.createEvent"), void 0;
                        var e = n.document.createEvent("HTMLEvents");
                        return e.initEvent("resize", !1, !1), n.window.dispatchEvent(e), void 0
                    }
                }, n.createElement = function(t) {
                    return n.__init__(), n.document.__createElement(t)
                }, n.getElementById = function(t) {
                    return n.__init__(), n.document.getElementById(t)
                }, n.removeElement = function(t) {
                    t && t.parentNode && t.parentNode.removeChild(t)
                }, n.now = function() {
                    return o.now()
                }, n._window = null, n._document = null, n._container = null, n.userAgent = null, n.u = null, n.onIOS = !1, n.onMac = !1, n.onMobile = !1, n.onIPhone = !1, n.onIPad = !1, n.onAndroid = !1, n.onWP = !1, n.onQQBrowser = !1, n.onMQQBrowser = !1, n.onSafari = !1, n.onFirefox = !1, n.onEdge = !1, n.onIE = !1, n.onWeiXin = !1, n.onMiniGame = !1, n.onLimixiu = !1, n.onPC = !1, n.httpProtocol = !1, n.webAudioEnabled = !1, n.soundType = null, n.enableTouch = !1, n.canvas = null, n.context = null, n.__init$ = function() {}, n
            }()),
            N = function() {
                function t(t) {
                    this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this.___resizeBuffer(this._allocated_)
                }
                s(t, "laya.utils.Byte");
                var e = t.prototype;
                return e.___resizeBuffer = function(t) {
                    try {
                        var e = new Uint8Array(t);
                        null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), this._u8d_ = e, this._d_ = new DataView(e.buffer)
                    } catch (i) {
                        throw "___resizeBuffer err:" + t
                    }
                }, e.getString = function() {
                    return this.rUTF(this.getUint16())
                }, e.getFloat32Array = function(t, e) {
                    var i = t + e;
                    i = i > this._length ? this._length : i;
                    var n = new Float32Array(this._d_.buffer.slice(t, i));
                    return this._pos_ = i, n
                }, e.getUint8Array = function(t, e) {
                    var i = t + e;
                    i = i > this._length ? this._length : i;
                    var n = new Uint8Array(this._d_.buffer.slice(t, i));
                    return this._pos_ = i, n
                }, e.getInt16Array = function(t, e) {
                    var i = t + e;
                    i = i > this._length ? this._length : i;
                    var n = new Int16Array(this._d_.buffer.slice(t, i));
                    return this._pos_ = i, n
                }, e.getFloat32 = function() {
                    if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
                    var t = this._d_.getFloat32(this._pos_, this._xd_);
                    return this._pos_ += 4, t
                }, e.getFloat64 = function() {
                    if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
                    var t = this._d_.getFloat64(this._pos_, this._xd_);
                    return this._pos_ += 8, t
                }, e.writeFloat32 = function(t) {
                    this.ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), this._pos_ += 4
                }, e.writeFloat64 = function(t) {
                    this.ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), this._pos_ += 8
                }, e.getInt32 = function() {
                    if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
                    var t = this._d_.getInt32(this._pos_, this._xd_);
                    return this._pos_ += 4, t
                }, e.getUint32 = function() {
                    if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
                    var t = this._d_.getUint32(this._pos_, this._xd_);
                    return this._pos_ += 4, t
                }, e.writeInt32 = function(t) {
                    this.ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), this._pos_ += 4
                }, e.writeUint32 = function(t) {
                    this.ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), this._pos_ += 4
                }, e.getInt16 = function() {
                    if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
                    var t = this._d_.getInt16(this._pos_, this._xd_);
                    return this._pos_ += 2, t
                }, e.getUint16 = function() {
                    if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
                    var t = this._d_.getUint16(this._pos_, this._xd_);
                    return this._pos_ += 2, t
                }, e.writeUint16 = function(t) {
                    this.ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), this._pos_ += 2
                }, e.writeInt16 = function(t) {
                    this.ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), this._pos_ += 2
                }, e.getUint8 = function() {
                    if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
                    return this._d_.getUint8(this._pos_++)
                }, e.writeUint8 = function(t) {
                    this.ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++
                }, e._getUInt8 = function(t) {
                    return this._d_.getUint8(t)
                }, e._getUint16 = function(t) {
                    return this._d_.getUint16(t, this._xd_)
                }, e._getMatrix = function() {
                    var t = new M(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
                    return t
                }, e.rUTF = function(t) {
                    for (var e = "", i = this._pos_ + t, n = 0, s = 0, r = 0, o = String.fromCharCode, a = this._u8d_, h = 0; this._pos_ < i;) n = a[this._pos_++], 128 > n ? 0 != n && (e += o(n)) : 224 > n ? e += o((63 & n) << 6 | 127 & a[this._pos_++]) : 240 > n ? (s = a[this._pos_++], e += o((31 & n) << 12 | (127 & s) << 6 | 127 & a[this._pos_++])) : (s = a[this._pos_++], r = a[this._pos_++], e += o((15 & n) << 18 | (127 & s) << 12 | r << 6 & 127 | 127 & a[this._pos_++])), h++;
                    return e
                }, e.getCustomString = function(t) {
                    for (var e = "", i = 0, n = 0, s = 0, r = String.fromCharCode, o = this._u8d_; t > 0;)
                        if (n = o[this._pos_], 128 > n) e += r(n), this._pos_++, t--;
                        else
                            for (i = n - 128, this._pos_++, t -= i; i > 0;) n = o[this._pos_++], s = o[this._pos_++], e += r(s << 8 | n), i--;
                    return e
                }, e.clear = function() {
                    this._pos_ = 0, this.length = 0
                }, e.__getBuffer = function() {
                    return this._d_.buffer
                }, e.writeUTFBytes = function(t) {
                    t += "";
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t.charCodeAt(e);
                        127 >= n ? this.writeByte(n) : 2047 >= n ? (this.ensureWrite(this._pos_ + 2), this._u8d_.set([192 | n >> 6, 128 | 63 & n], this._pos_), this._pos_ += 2) : 65535 >= n ? (this.ensureWrite(this._pos_ + 3), this._u8d_.set([224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 3) : (this.ensureWrite(this._pos_ + 4), this._u8d_.set([240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n], this._pos_), this._pos_ += 4)
                    }
                }, e.writeUTFString = function(t) {
                    var e = this.pos;
                    this.writeUint16(1), this.writeUTFBytes(t);
                    var i = this.pos - e - 2;
                    if (i >= 65536) throw "writeUTFString byte len more than 65536";
                    this._d_.setUint16(e, i, this._xd_)
                }, e.readUTFString = function() {
                    return this.readUTFBytes(this.getUint16())
                }, e.getUTFString = function() {
                    return this.readUTFString()
                }, e.readUTFBytes = function(t) {
                    if (void 0 === t && (t = -1), 0 == t) return "";
                    var e = this.bytesAvailable;
                    if (t > e) throw "readUTFBytes error - Out of bounds";
                    return t = t > 0 ? t : e, this.rUTF(t)
                }, e.getUTFBytes = function(t) {
                    return void 0 === t && (t = -1), this.readUTFBytes(t)
                }, e.writeByte = function(t) {
                    this.ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1
                }, e.readByte = function() {
                    if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
                    return this._d_.getInt8(this._pos_++)
                }, e.getByte = function() {
                    return this.readByte()
                }, e.ensureWrite = function(t) {
                    this._length < t && (this._length = t), this._allocated_ < t && (this.length = t)
                }, e.writeArrayBuffer = function(t, e, i) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 0), 0 > e || 0 > i) throw "writeArrayBuffer error - Out of bounds";
                    0 == i && (i = t.byteLength - e), this.ensureWrite(this._pos_ + i);
                    var n = new Uint8Array(t);
                    this._u8d_.set(n.subarray(e, e + i), this._pos_), this._pos_ += i
                }, r(0, e, "buffer", function() {
                    var t = this._d_.buffer;
                    return t.byteLength == this.length ? t : t.slice(0, this.length)
                }), r(0, e, "endian", function() {
                    return this._xd_ ? "littleEndian" : "bigEndian"
                }, function(t) {
                    this._xd_ = "littleEndian" == t
                }), r(0, e, "length", function() {
                    return this._length
                }, function(t) {
                    this._allocated_ < t ? this.___resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this.___resizeBuffer(this._allocated_ = t), this._length = t
                }), r(0, e, "pos", function() {
                    return this._pos_
                }, function(t) {
                    this._pos_ = t
                }), r(0, e, "bytesAvailable", function() {
                    return this._length - this._pos_
                }), t.getSystemEndian = function() {
                    if (!t._sysEndian) {
                        var e = new ArrayBuffer(2);
                        new DataView(e).setInt16(0, 256, !0), t._sysEndian = 256 === new Int16Array(e)[0] ? "littleEndian" : "bigEndian"
                    }
                    return t._sysEndian
                }, t.BIG_ENDIAN = "bigEndian", t.LITTLE_ENDIAN = "littleEndian", t._sysEndian = null, t
            }(),
            W = function() {
                function t() {}
                return s(t, "laya.utils.CacheManager"), t.regCacheByFunction = function(e, i) {
                    t.unRegCacheByFunction(e, i);
                    var n;
                    n = {
                        tryDispose: e,
                        getCacheList: i
                    }, t._cacheList.push(n)
                }, t.unRegCacheByFunction = function(e, i) {
                    var n = 0,
                        s = 0;
                    for (s = t._cacheList.length, n = 0; s > n; n++)
                        if (t._cacheList[n].tryDispose == e && t._cacheList[n].getCacheList == i) return t._cacheList.splice(n, 1), void 0
                }, t.forceDispose = function() {
                    var e = 0,
                        i = t._cacheList.length;
                    for (e = 0; i > e; e++) t._cacheList[e].tryDispose(!0)
                }, t.beginCheck = function(e) {
                    void 0 === e && (e = 15e3), i.timer.loop(e, null, t._checkLoop)
                }, t.stopCheck = function() {
                    i.timer.clear(null, t._checkLoop)
                }, t._checkLoop = function() {
                    var e = t._cacheList;
                    if (!(e.length < 1)) {
                        var i = B.now(),
                            n = 0,
                            s = 0;
                        for (s = n = e.length; n > 0 && (t._index++, t._index = t._index % s, e[t._index].tryDispose(!1), !(B.now() - i > t.loopTimeLimit));) n--
                    }
                }, t.loopTimeLimit = 2, t._cacheList = [], t._index = 0, t
            }(),
            U = function() {
                function t() {}
                return s(t, "laya.utils.ClassUtils"), t.regClass = function(e, i) {
                    t._classMap[e] = i
                }, t.getRegClass = function(e) {
                    return t._classMap[e]
                }, t.getInstance = function(e) {
                    var i = t.getClass(e);
                    return i ? new i : (console.warn("[error] Undefined class:", e), null)
                }, t.createByJson = function(e, i, n, s, r) {
                    "string" == typeof e && (e = JSON.parse(e));
                    var o = e.props;
                    if (!i && (i = r ? r.runWith(e) : t.getInstance(o.runtime || e.type), !i)) return null;
                    var a = e.child;
                    if (a)
                        for (var h = 0, l = a.length; l > h; h++) {
                            var u = a[h];
                            if ("render" !== u.props.name && "render" !== u.props.renderType || !i._$set_itemRender)
                                if ("Graphic" == u.type) t.addGraphicsToSprite(u, i);
                                else if (t.isDrawType(u.type)) t.addGraphicToSprite(u, i, !0);
                                else {
                                    var c = t.createByJson(u, null, n, s, r);
                                    "Script" == u.type ? c.hasOwnProperty("owner") ? c.owner = i : c.hasOwnProperty("target") && (c.target = i) : "mask" == u.props.renderType ? i.mask = c : i.addChild(c)
                                } else i.itemRender = u
                        }
                    if (o)
                        for (var _ in o) {
                            var d = o[_];
                            "var" === _ && n ? n[d] = i : d instanceof Array && "function" == typeof i[_] ? i[_].apply(i, d) : i[_] = d
                        }
                    return s && e.customProps && s.runWith([i, e]), i.created && i.created(), i
                }, t.addGraphicsToSprite = function(e, i) {
                    var n;
                    if (n = e.child, n && !(n.length < 1)) {
                        var s;
                        s = t._getGraphicsFromSprite(e, i);
                        var r = 0,
                            o = 0;
                        e.props && (r = t._getObjVar(e.props, "x", 0), o = t._getObjVar(e.props, "y", 0)), 0 != r && 0 != o && s.translate(r, o);
                        var a = 0,
                            h = 0;
                        for (h = n.length, a = 0; h > a; a++) t._addGraphicToGraphics(n[a], s);
                        0 != r && 0 != o && s.translate(-r, -o)
                    }
                }, t.addGraphicToSprite = function(e, i, n) {
                    void 0 === n && (n = !1);
                    var s;
                    s = n ? t._getGraphicsFromSprite(e, i) : i.graphics, t._addGraphicToGraphics(e, s)
                }, t._getGraphicsFromSprite = function(t, e) {
                    var i;
                    if (!t || !t.props) return e.graphics;
                    var n;
                    switch (n = t.props.renderType) {
                        case "hit":
                        case "unHit":
                            var s;
                            e.hitArea || (e.hitArea = new H), s = e.hitArea, s[n] || (s[n] = new f), i = s[n]
                    }
                    return i || (i = e.graphics), i
                }, t._getTransformData = function(e) {
                    var i;
                    (e.hasOwnProperty("pivotX") || e.hasOwnProperty("pivotY")) && (i = i || new M, i.translate(-t._getObjVar(e, "pivotX", 0), -t._getObjVar(e, "pivotY", 0))); {
                        var n = t._getObjVar(e, "scaleX", 1),
                            s = t._getObjVar(e, "scaleY", 1),
                            r = t._getObjVar(e, "rotation", 0);
                        t._getObjVar(e, "skewX", 0), t._getObjVar(e, "skewY", 0)
                    }
                    return (1 != n || 1 != s || 0 != r) && (i = i || new M, i.scale(n, s), i.rotate(.0174532922222222 * r)), i
                }, t._addGraphicToGraphics = function(e, i) {
                    var n;
                    if (n = e.props) {
                        var s;
                        if (s = t.DrawTypeDic[e.type]) {
                            var r;
                            r = i;
                            var o, a = t._getParams(n, s[1], s[2], s[3]);
                            o = t._tM, (o || 1 != t._alpha) && (r.save(), o && r.transform(o), 1 != t._alpha && r.alpha(t._alpha)), r[s[0]].apply(r, a), (o || 1 != t._alpha) && r.restore()
                        }
                    }
                }, t._adptLineData = function(t) {
                    return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), t
                }, t._adptTextureData = function(t) {
                    return t[0] = oe.getRes(t[0]), t
                }, t._adptLinesData = function(e) {
                    return e[2] = t._getPointListByStr(e[2]), e
                }, t.isDrawType = function(e) {
                    return "Image" == e ? !1 : t.DrawTypeDic.hasOwnProperty(e)
                }, t._getParams = function(e, i, n, s) {
                    void 0 === n && (n = 0);
                    var r;
                    r = t._temParam, r.length = i.length;
                    var o = 0,
                        a = 0;
                    for (a = i.length, o = 0; a > o; o++) r[o] = t._getObjVar(e, i[o][0], i[o][1]);
                    t._alpha = t._getObjVar(e, "alpha", 1);
                    var h;
                    return h = t._getTransformData(e), h ? (n || (n = 0), h.translate(r[n], r[n + 1]), r[n] = r[n + 1] = 0, t._tM = h) : t._tM = null, s && t[s] && (r = t[s](r)), r
                }, t._getPointListByStr = function(t) {
                    var e;
                    e = t.split(",");
                    var i = 0,
                        n = 0;
                    for (n = e.length, i = 0; n > i; i++) e[i] = parseFloat(e[i]);
                    return e
                }, t._getObjVar = function(t, e, i) {
                    return t.hasOwnProperty(e) ? t[e] : i
                }, t._temParam = [], t._classMap = {
                    Sprite: "laya.display.Sprite",
                    Text: "laya.display.Text",
                    Animation: "laya.display.Animation",
                    Skeleton: "laya.ani.bone.Skeleton",
                    Particle2D: "laya.particle.Particle2D",
                    div: "laya.html.dom.HTMLDivElement",
                    p: "laya.html.dom.HTMLElement",
                    img: "laya.html.dom.HTMLImageElement",
                    span: "laya.html.dom.HTMLElement",
                    br: "laya.html.dom.HTMLBrElement",
                    style: "laya.html.dom.HTMLStyleElement",
                    font: "laya.html.dom.HTMLElement",
                    a: "laya.html.dom.HTMLElement",
                    "#text": "laya.html.dom.HTMLElement"
                }, t.getClass = function(e) {
                    var n = t._classMap[e] || e;
                    return "string" == typeof n ? i.__classmap[n] : n
                }, t._tM = null, t._alpha = 0 / 0, n(t, ["DrawTypeDic", function() {
                    return this.DrawTypeDic = {
                        Rect: ["drawRect", [
                            ["x", 0],
                            ["y", 0],
                            ["width", 0],
                            ["height", 0],
                            ["fillColor", null],
                            ["lineColor", null],
                            ["lineWidth", 1]
                        ]],
                        Circle: ["drawCircle", [
                            ["x", 0],
                            ["y", 0],
                            ["radius", 0],
                            ["fillColor", null],
                            ["lineColor", null],
                            ["lineWidth", 1]
                        ]],
                        Pie: ["drawPie", [
                            ["x", 0],
                            ["y", 0],
                            ["radius", 0],
                            ["startAngle", 0],
                            ["endAngle", 0],
                            ["fillColor", null],
                            ["lineColor", null],
                            ["lineWidth", 1]
                        ]],
                        Image: ["drawTexture", [
                            ["x", 0],
                            ["y", 0],
                            ["width", 0],
                            ["height", 0]
                        ]],
                        Texture: ["drawTexture", [
                            ["skin", null],
                            ["x", 0],
                            ["y", 0],
                            ["width", 0],
                            ["height", 0]
                        ], 1, "_adptTextureData"],
                        FillTexture: ["fillTexture", [
                            ["skin", null],
                            ["x", 0],
                            ["y", 0],
                            ["width", 0],
                            ["height", 0],
                            ["repeat", null]
                        ], 1, "_adptTextureData"],
                        FillText: ["fillText", [
                            ["text", ""],
                            ["x", 0],
                            ["y", 0],
                            ["font", null],
                            ["color", null],
                            ["textAlign", null]
                        ], 1],
                        Line: ["drawLine", [
                            ["x", 0],
                            ["y", 0],
                            ["toX", 0],
                            ["toY", 0],
                            ["lineColor", null],
                            ["lineWidth", 0]
                        ], 0, "_adptLineData"],
                        Lines: ["drawLines", [
                            ["x", 0],
                            ["y", 0],
                            ["points", ""],
                            ["lineColor", null],
                            ["lineWidth", 0]
                        ], 0, "_adptLinesData"],
                        Curves: ["drawCurves", [
                            ["x", 0],
                            ["y", 0],
                            ["points", ""],
                            ["lineColor", null],
                            ["lineWidth", 0]
                        ], 0, "_adptLinesData"],
                        Poly: ["drawPoly", [
                            ["x", 0],
                            ["y", 0],
                            ["points", ""],
                            ["fillColor", null],
                            ["lineColor", null],
                            ["lineWidth", 1]
                        ], 0, "_adptLinesData"]
                    }
                }]), t
            }(),
            G = function() {
                function t(e) {
                    if (this._color = [], "string" == typeof e) {
                        this.strColor = e, null === e && (e = "#000000"), "#" == e.charAt(0) && (e = e.substr(1));
                        var i = e.length;
                        if (3 == i || 4 == i) {
                            for (var n = "", s = 0; i > s; s++) n += e[s] + e[s];
                            e = n
                        }
                        var r = this.numColor = parseInt(e, 16),
                            o = 8 == e.length;
                        if (o) return this._color = [parseInt(e.substr(0, 2), 16) / 255, ((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255], void 0
                    } else r = this.numColor = e, this.strColor = K.toHexColor(r);
                    this._color = [((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255, 1], this._color.__id = ++t._COLODID
                }
                return s(t, "laya.utils.Color"), t._initDefault = function() {
                    t._DEFAULT = {};
                    for (var e in t._COLOR_MAP) t._SAVE[e] = t._DEFAULT[e] = new t(t._COLOR_MAP[e]);
                    return t._DEFAULT
                }, t._initSaveMap = function() {
                    t._SAVE_SIZE = 0, t._SAVE = {};
                    for (var e in t._DEFAULT) t._SAVE[e] = t._DEFAULT[e]
                }, t.create = function(e) {
                    var i = t._SAVE[e + ""];
                    return null != i ? i : (t._SAVE_SIZE < 1e3 || t._initSaveMap(), t._SAVE[e + ""] = new t(e))
                }, t._SAVE = {}, t._SAVE_SIZE = 0, t._COLOR_MAP = {
                    white: "#FFFFFF",
                    red: "#FF0000",
                    green: "#00FF00",
                    blue: "#0000FF",
                    black: "#000000",
                    yellow: "#FFFF00",
                    gray: "#AAAAAA"
                }, t._DEFAULT = t._initDefault(), t._COLODID = 1, t
            }(),
            z = (function() {
                function t() {
                    this._values = [], this._keys = []
                }
                s(t, "laya.utils.Dictionary");
                var e = t.prototype;
                return e.set = function(t, e) {
                    var i = this.indexOf(t);
                    return i >= 0 ? (this._values[i] = e, void 0) : (this._keys.push(t), this._values.push(e), void 0)
                }, e.indexOf = function(t) {
                    var e = this._keys.indexOf(t);
                    return e >= 0 ? e : (t = "string" == typeof t ? Number(t) : "number" == typeof t ? t.toString() : t, this._keys.indexOf(t))
                }, e.get = function(t) {
                    var e = this.indexOf(t);
                    return 0 > e ? null : this._values[e]
                }, e.remove = function(t) {
                    var e = this.indexOf(t);
                    return e >= 0 ? (this._keys.splice(e, 1), this._values.splice(e, 1), !0) : !1
                }, e.clear = function() {
                    this._values.length = 0, this._keys.length = 0
                }, r(0, e, "values", function() {
                    return this._values
                }), r(0, e, "keys", function() {
                    return this._keys
                }), t
            }(), function() {
                function t() {
                    this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0
                }
                s(t, "laya.utils.Dragging");
                var e = t.prototype;
                return e.start = function(t, e, n, s, r, o, a, h) {
                    void 0 === h && (h = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = n, this.elasticDistance = e ? s : 0, this.elasticBackTime = r, this.data = o, this._disableMouseEvent = a, this.ratio = h, this._parent = 1 != t.globalScaleX || 1 != t.globalScaleY ? t.parent : i.stage, this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, i.stage.on("mouseup", this, this.onStageMouseUp), i.stage.on("mouseout", this, this.onStageMouseUp), i.timer.frameLoop(1, this, this.loop)
                }, e.clearTimer = function() {
                    i.timer.clear(this, this.loop), i.timer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), this._tween = null)
                }, e.stop = function() {
                    this._dragging && (v.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), i.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), this.clear())
                }, e.loop = function() {
                    var t = this._parent.getMousePoint(),
                        e = t.x,
                        n = t.y,
                        s = e - this._lastX,
                        r = n - this._lastY;
                    if (this._clickOnly) {
                        if (!(Math.abs(s * i.stage._canvasTransform.getScaleX()) > 1 || Math.abs(r * i.stage._canvasTransform.getScaleY()) > 1)) return;
                        this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, this.target.event("dragstart", this.data), v.instance.disableMouseEvent = this._disableMouseEvent, this.target._set$P("$_MOUSEDOWN", !1)
                    } else this._offsets.push(s, r);
                    (0 !== s || 0 !== r) && (this._lastX = e, this._lastY = n, this.target.x += s * this._elasticRateX, this.target.y += r * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data))
                }, e.checkArea = function() {
                    if (this.elasticDistance <= 0) this.backToArea();
                    else {
                        if (this.target.x < this.area.x) var t = this.area.x - this.target.x;
                        else t = this.target.x > this.area.x + this.area.width ? this.target.x - this.area.x - this.area.width : 0;
                        if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target.y < this.area.y) var e = this.area.y - this.target.y;
                        else e = this.target.y > this.area.y + this.area.height ? this.target.y - this.area.y - this.area.height : 0;
                        this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance)
                    }
                }, e.backToArea = function() {
                    this.target.x = Math.min(Math.max(this.target.x, this.area.x), this.area.x + this.area.width), this.target.y = Math.min(Math.max(this.target.y, this.area.y), this.area.y + this.area.height)
                }, e.onStageMouseUp = function() {
                    if (v.instance.disableMouseEvent = !1, i.stage.off("mouseup", this, this.onStageMouseUp), i.stage.off("mouseout", this, this.onStageMouseUp), i.timer.clear(this, this.loop), !this._clickOnly && this.target)
                        if (this.hasInertia) {
                            this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), this._offsetX = this._offsetY = 0;
                            for (var t = this._offsets.length, e = Math.min(t, 6), n = this._offsets.length - e, s = t - 1; s > n; s--) this._offsetY += this._offsets[s--], this._offsetX += this._offsets[s];
                            this._offsetX = this._offsetX / e * 2, this._offsetY = this._offsetY / e * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), i.timer.frameLoop(1, this, this.tweenMove)
                        } else this.elasticDistance > 0 ? this.checkElastic() : this.clear()
                }, e.checkElastic = function() {
                    var t = 0 / 0,
                        e = 0 / 0;
                    if (this.target.x < this.area.x ? t = this.area.x : this.target.x > this.area.x + this.area.width && (t = this.area.x + this.area.width), this.target.y < this.area.y ? e = this.area.y : this.target.y > this.area.y + this.area.height && (e = this.area.y + this.area.height), isNaN(t) && isNaN(e)) this.clear();
                    else {
                        var i = {};
                        isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = j.to(this.target, i, this.elasticBackTime, Y.sineOut, l.create(this, this.clear), 0, !1, !1)
                    }
                }, e.tweenMove = function() {
                    this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (i.timer.clear(this, this.tweenMove), this.elasticDistance > 0 ? this.checkElastic() : this.clear())
                }, e.clear = function() {
                    if (this.target) {
                        this.clearTimer();
                        var t = this.target;
                        this.target = null, this._parent = null, t.event("dragend", this.data)
                    }
                }, t
            }()),
            Y = function() {
                function t() {}
                return s(t, "laya.utils.Ease"), t.linearNone = function(t, e, i, n) {
                    return i * t / n + e
                }, t.linearIn = function(t, e, i, n) {
                    return i * t / n + e
                }, t.linearInOut = function(t, e, i, n) {
                    return i * t / n + e
                }, t.linearOut = function(t, e, i, n) {
                    return i * t / n + e
                }, t.bounceIn = function(e, i, n, s) {
                    return n - t.bounceOut(s - e, 0, n, s) + i
                }, t.bounceInOut = function(e, i, n, s) {
                    return .5 * s > e ? .5 * t.bounceIn(2 * e, 0, n, s) + i : .5 * t.bounceOut(2 * e - s, 0, n, s) + .5 * n + i
                }, t.bounceOut = function(t, e, i, n) {
                    return (t /= n) < 1 / 2.75 ? 7.5625 * i * t * t + e : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                }, t.backIn = function(t, e, i, n, s) {
                    return void 0 === s && (s = 1.70158), i * (t /= n) * t * ((s + 1) * t - s) + e
                }, t.backInOut = function(t, e, i, n, s) {
                    return void 0 === s && (s = 1.70158), (t /= .5 * n) < 1 ? .5 * i * t * t * (((s *= 1.525) + 1) * t - s) + e : i / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + e
                }, t.backOut = function(t, e, i, n, s) {
                    return void 0 === s && (s = 1.70158), i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + e
                }, t.elasticIn = function(e, i, n, s, r, o) {
                    void 0 === r && (r = 0), void 0 === o && (o = 0);
                    var a;
                    return 0 == e ? i : 1 == (e /= s) ? i + n : (o || (o = .3 * s), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, a = o / 4) : a = o / t.PI2 * Math.asin(n / r), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o)) + i)
                }, t.elasticInOut = function(e, i, n, s, r, o) {
                    void 0 === r && (r = 0), void 0 === o && (o = 0);
                    var a;
                    return 0 == e ? i : 2 == (e /= .5 * s) ? i + n : (o || (o = .3 * s * 1.5), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, a = o / 4) : a = o / t.PI2 * Math.asin(n / r), 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - a) * t.PI2 / o) * .5 + n + i)
                }, t.elasticOut = function(e, i, n, s, r, o) {
                    void 0 === r && (r = 0), void 0 === o && (o = 0);
                    var a;
                    return 0 == e ? i : 1 == (e /= s) ? i + n : (o || (o = .3 * s), !r || n > 0 && n > r || 0 > n && -n > r ? (r = n, a = o / 4) : a = o / t.PI2 * Math.asin(n / r), r * Math.pow(2, -10 * e) * Math.sin((e * s - a) * t.PI2 / o) + n + i)
                }, t.strongIn = function(t, e, i, n) {
                    return i * (t /= n) * t * t * t * t + e
                }, t.strongInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
                }, t.strongOut = function(t, e, i, n) {
                    return i * ((t = t / n - 1) * t * t * t * t + 1) + e
                }, t.sineInOut = function(t, e, i, n) {
                    return .5 * -i * (Math.cos(Math.PI * t / n) - 1) + e
                }, t.sineIn = function(e, i, n, s) {
                    return -n * Math.cos(e / s * t.HALF_PI) + n + i
                }, t.sineOut = function(e, i, n, s) {
                    return n * Math.sin(e / s * t.HALF_PI) + i
                }, t.quintIn = function(t, e, i, n) {
                    return i * (t /= n) * t * t * t * t + e
                }, t.quintInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e
                }, t.quintOut = function(t, e, i, n) {
                    return i * ((t = t / n - 1) * t * t * t * t + 1) + e
                }, t.quartIn = function(t, e, i, n) {
                    return i * (t /= n) * t * t * t + e
                }, t.quartInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e
                }, t.quartOut = function(t, e, i, n) {
                    return -i * ((t = t / n - 1) * t * t * t - 1) + e
                }, t.cubicIn = function(t, e, i, n) {
                    return i * (t /= n) * t * t + e
                }, t.cubicInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e
                }, t.cubicOut = function(t, e, i, n) {
                    return i * ((t = t / n - 1) * t * t + 1) + e
                }, t.quadIn = function(t, e, i, n) {
                    return i * (t /= n) * t + e
                }, t.quadInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e
                }, t.quadOut = function(t, e, i, n) {
                    return -i * (t /= n) * (t - 2) + e
                }, t.expoIn = function(t, e, i, n) {
                    return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e - .001 * i
                }, t.expoInOut = function(t, e, i, n) {
                    return 0 == t ? e : t == n ? e + i : (t /= .5 * n) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (-Math.pow(2, -10 * --t) + 2) + e
                }, t.expoOut = function(t, e, i, n) {
                    return t == n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
                }, t.circIn = function(t, e, i, n) {
                    return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
                }, t.circInOut = function(t, e, i, n) {
                    return (t /= .5 * n) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }, t.circOut = function(t, e, i, n) {
                    return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
                }, t.HALF_PI = .5 * Math.PI, t.PI2 = 2 * Math.PI, t
            }(),
            H = function() {
                function t() {
                    this._hit = null, this._unHit = null
                }
                s(t, "laya.utils.HitArea");
                var e = t.prototype;
                return e.isHit = function(e, i) {
                    return t.isHitGraphic(e, i, this.hit) ? !t.isHitGraphic(e, i, this.unHit) : !1
                }, e.contains = function(t, e) {
                    return this.isHit(t, e)
                }, r(0, e, "hit", function() {
                    return this._hit || (this._hit = new f), this._hit
                }, function(t) {
                    this._hit = t
                }), r(0, e, "unHit", function() {
                    return this._unHit || (this._unHit = new f), this._unHit
                }, function(t) {
                    this._unHit = t
                }), t.isHitGraphic = function(e, i, n) {
                    if (!n) return !1;
                    var s;
                    if (s = n.cmds, !s && n._one && (s = t._cmds, s.length = 1, s[0] = n._one), !s) return !1;
                    var r = 0,
                        o = 0;
                    o = s.length;
                    var a;
                    for (r = 0; o > r; r++)
                        if (a = s[r]) {
                            var h = R._context;
                            switch (a.callee) {
                                case h._translate:
                                case 6:
                                    e -= a[0], i -= a[1]
                            }
                            if (t.isHitCmd(e, i, a)) return !0
                        } return !1
                }, t.isHitCmd = function(e, i, n) {
                    if (!n) return !1;
                    var s = R._context,
                        r = !1;
                    switch (n.callee) {
                        case s._drawRect:
                        case 13:
                            t._rec.setTo(n[0], n[1], n[2], n[3]), r = t._rec.contains(e, i);
                            break;
                        case s._drawCircle:
                        case s._fillCircle:
                        case 14:
                            var o = 0 / 0;
                            e -= n[0], i -= n[1], o = e * e + i * i, r = o < n[2] * n[2];
                            break;
                        case s._drawPoly:
                        case 18:
                            e -= n[0], i -= n[1], r = t.ptInPolygon(e, i, n[2])
                    }
                    return r
                }, t.ptInPolygon = function(e, i, n) {
                    var s;
                    s = t._ptPoint, s.setTo(e, i);
                    var r = 0,
                        o = 0 / 0,
                        a = 0 / 0,
                        h = 0 / 0,
                        l = 0 / 0,
                        u = 0;
                    u = n.length;
                    for (var c = 0; u > c; c += 2)
                        if (o = n[c], a = n[c + 1], h = n[(c + 2) % u], l = n[(c + 3) % u], a != l && !(s.y < Math.min(a, l) || s.y >= Math.max(a, l))) {
                            var _ = (s.y - a) * (h - o) / (l - a) + o;
                            _ > s.x && r++
                        } return r % 2 == 1
                }, t._cmds = [], n(t, ["_rec", function() {
                    return this._rec = new P
                }, "_ptPoint", function() {
                    return this._ptPoint = new S
                }]), t
            }(),
            V = (function() {
                function t(e, i, n, s) {
                    this.char = e, this.charNum = e.charCodeAt(0), this._x = this._y = 0, this.width = i, this.height = n, this.style = s, this.isWord = !t._isWordRegExp.test(e)
                }
                s(t, "laya.utils.HTMLChar");
                var e = t.prototype;
                return i.imps(e, {
                    "laya.display.ILayout": !0
                }), e.setSprite = function(t) {
                    this._sprite = t
                }, e.getSprite = function() {
                    return this._sprite
                }, e._isChar = function() {
                    return !0
                }, e._getCSSStyle = function() {
                    return this.style
                }, r(0, e, "width", function() {
                    return this._w
                }, function(t) {
                    this._w = t
                }), r(0, e, "x", function() {
                    return this._x
                }, function(t) {
                    this._sprite && (this._sprite.x = t), this._x = t
                }), r(0, e, "y", function() {
                    return this._y
                }, function(t) {
                    this._sprite && (this._sprite.y = t), this._y = t
                }), r(0, e, "height", function() {
                    return this._h
                }, function(t) {
                    this._h = t
                }), t._isWordRegExp = new RegExp("[\\w.]", ""), t
            }(), function() {
                function t() {}
                return s(t, "laya.utils.Log"), t.enable = function() {
                    t._logdiv || (t._logdiv = B.window.document.createElement("div"), B.window.document.body.appendChild(t._logdiv), t._logdiv.style.cssText = "pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;")
                }, t.toggle = function() {
                    var e = t._logdiv.style;
                    e.width = e.height = "1px" == e.width ? "50%" : "1px"
                }, t.print = function(e) {
                    t._logdiv && (t._count >= t.maxCount && t.clear(), t._count++, t._logdiv.innerText += e + "\n", t._logdiv.scrollTop = t._logdiv.scrollHeight)
                }, t.clear = function() {
                    t._logdiv.innerText = "", t._count = 0
                }, t._logdiv = null, t._count = 0, t.maxCount = 20, t
            }(), function() {
                function t() {}
                return s(t, "laya.utils.Mouse"), r(1, t, "cursor", function() {
                    return t._style.cursor
                }, function(e) {
                    t._style.cursor = e
                }), t.hide = function() {
                    "none" != t.cursor && (t._preCursor = t.cursor, t.cursor = "none")
                }, t.show = function() {
                    "none" == t.cursor && (t.cursor = t._preCursor ? t._preCursor : "auto")
                }, t._preCursor = null, n(t, ["_style", function() {
                    return this._style = B.document.body.style
                }]), t
            }(), function() {
                function t() {}
                return s(t, "laya.utils.Pool"), t.getPoolBySign = function(e) {
                    return t._poolDic[e] || (t._poolDic[e] = [])
                }, t.clearBySign = function(e) {
                    t._poolDic[e] && (t._poolDic[e].length = 0)
                }, t.recover = function(e, i) {
                    i.__InPool || (i.__InPool = !0, t.getPoolBySign(e).push(i))
                }, t.getItemByClass = function(e, i) {
                    var n = t.getPoolBySign(e),
                        s = n.length ? n.pop() : new i;
                    return s.__InPool = !1, s
                }, t.getItemByCreateFun = function(e, i) {
                    var n = t.getPoolBySign(e),
                        s = n.length ? n.pop() : i();
                    return s.__InPool = !1, s
                }, t.getItem = function(e) {
                    var i = t.getPoolBySign(e),
                        n = i.length ? i.pop() : null;
                    return n && (n.__InPool = !1), n
                }, t._poolDic = {}, t.InPoolSign = "__InPool", t
            }()),
            X = (function() {
                function t() {
                    this.sign = null, this.maxCount = 1e3
                }
                s(t, "laya.utils.PoolCache");
                var e = t.prototype;
                return e.getCacheList = function() {
                    return V.getPoolBySign(this.sign)
                }, e.tryDispose = function() {
                    var t;
                    t = V.getPoolBySign(this.sign), t.length > this.maxCount && t.splice(this.maxCount, t.length - this.maxCount)
                }, t.addPoolCacheManager = function(e, i) {
                    void 0 === i && (i = 100);
                    var n;
                    n = new t, n.sign = e, n.maxCount = i, W.regCacheByFunction(K.bind(n.tryDispose, n), K.bind(n.getCacheList, n))
                }, t
            }(), function() {
                function t() {}
                return s(t, "laya.utils.Stat"), r(1, t, "onclick", null, function(e) {
                    t._sp && t._sp.on("click", t._sp, e), t._canvas && (t._canvas.source.onclick = e, t._canvas.source.style.pointerEvents = "")
                }), t.show = function(e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 0), R.isConchApp && !R.isConchWebGL ? (B.window.conch.showFPS && B.window.conch.showFPS(e, i), void 0) : (R.isConchWebGL || B.onMiniGame || B.onLimixiu || (t._useCanvas = !0), t._show = !0, t._fpsData.length = 60, t._view[0] = {
                        title: "FPS(Canvas)",
                        value: "_fpsStr",
                        color: "yellow",
                        units: "int"
                    }, t._view[1] = {
                        title: "Sprite",
                        value: "_spriteStr",
                        color: "white",
                        units: "int"
                    }, t._view[2] = {
                        title: "DrawCall",
                        value: "drawCall",
                        color: "white",
                        units: "int"
                    }, t._view[3] = {
                        title: "CurMem",
                        value: "currentMemorySize",
                        color: "yellow",
                        units: "M"
                    }, R.isWebGL ? (t._view[4] = {
                        title: "Shader",
                        value: "shaderCall",
                        color: "white",
                        units: "int"
                    }, R.is3DMode ? (t._view[0].title = "FPS(3D)", t._view[5] = {
                        title: "TriFaces",
                        value: "trianglesFaces",
                        color: "white",
                        units: "int"
                    }, t._view[6] = {
                        title: "treeNodeColl",
                        value: "treeNodeCollision",
                        color: "white",
                        units: "int"
                    }, t._view[7] = {
                        title: "treeSpriteColl",
                        value: "treeSpriteCollision",
                        color: "white",
                        units: "int"
                    }) : (t._view[0].title = "FPS(WebGL)", t._view[5] = {
                        title: "Canvas",
                        value: "_canvasStr",
                        color: "white",
                        units: "int"
                    })) : t._view[4] = {
                        title: "Canvas",
                        value: "_canvasStr",
                        color: "white",
                        units: "int"
                    }, t._useCanvas ? t.createUIPre(e, i) : t.createUI(e, i), t.enable(), void 0)
                }, t.createUIPre = function(e, i) {
                    var n = B.pixelRatio;
                    t._width = 130 * n, t._vx = 75 * n, t._height = n * (12 * t._view.length + 3 * n) + 4, t._fontSize = 12 * n;
                    for (var s = 0; s < t._view.length; s++) t._view[s].x = 4, t._view[s].y = s * t._fontSize + 2 * n;
                    t._canvas || (t._canvas = new ye("2D"), t._canvas.size(t._width, t._height), t._ctx = t._canvas.getContext("2d"), t._ctx.textBaseline = "top", t._ctx.font = t._fontSize + "px Sans-serif", t._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + i + "px;width:" + t._width / n + "px;height:" + t._height / n + "px;"), t._first = !0, t.loop(), t._first = !1, B.container.appendChild(t._canvas.source)
                }, t.createUI = function(e, i) {
                    var n = t._sp,
                        s = B.pixelRatio;
                    n || (n = new ce, t._leftText = new ge, t._leftText.pos(5, 5), t._leftText.color = "#ffffff", n.addChild(t._leftText), t._txt = new ge, t._txt.pos(80 * s, 5), t._txt.color = "#ffffff", n.addChild(t._txt), t._sp = n), n.pos(e, i);
                    for (var r = "", o = 0; o < t._view.length; o++) {
                        var a = t._view[o];
                        r += a.title + "\n"
                    }
                    t._leftText.text = r;
                    var h = 138 * s,
                        l = s * (12 * t._view.length + 3 * s) + 4;
                    t._txt.fontSize = t._fontSize * s, t._leftText.fontSize = t._fontSize * s, n.size(h, l), n.graphics.clear(), n.graphics.setAlpha(.5), n.graphics.drawRect(0, 0, h, l, "#999999"), n.graphics.setAlpha(1), t.loop()
                }, t.enable = function() {
                    i.timer.frameLoop(1, t, t.loop)
                }, t.hide = function() {
                    t._show = !1, i.timer.clear(t, t.loop), t._canvas && B.removeElement(t._canvas.source)
                }, t.clear = function() {
                    t.trianglesFaces = t.drawCall = t.shaderCall = t.spriteCount = t.spriteRenderUseCacheCount = t.treeNodeCollision = t.treeSpriteCollision = t.canvasNormal = t.canvasBitmap = t.canvasReCache = 0
                }, t.loop = function() {
                    t._count++;
                    var e = B.now();
                    if (!(e - t._timer < 1e3)) {
                        var i = t._count;
                        if (t.FPS = Math.round(1e3 * i / (e - t._timer)), t._show) {
                            t.trianglesFaces = Math.round(t.trianglesFaces / i), t._useCanvas ? (t.drawCall = Math.round(t.drawCall / i) - 2, t.shaderCall = Math.round(t.shaderCall / i), t.spriteCount = Math.round(t.spriteCount / i) - 1) : (t.drawCall = Math.round(t.drawCall / i) - 2, t.shaderCall = Math.round(t.shaderCall / i) - 4, t.spriteCount = Math.round(t.spriteCount / i) - 4), t.spriteRenderUseCacheCount = Math.round(t.spriteRenderUseCacheCount / i), t.canvasNormal = Math.round(t.canvasNormal / i), t.canvasBitmap = Math.round(t.canvasBitmap / i), t.canvasReCache = Math.ceil(t.canvasReCache / i), t.treeNodeCollision = Math.round(t.treeNodeCollision / i), t.treeSpriteCollision = Math.round(t.treeSpriteCollision / i);
                            var n = t.FPS > 0 ? Math.floor(1e3 / t.FPS).toString() : " ";
                            t._fpsStr = t.FPS + (t.renderSlow ? " slow" : "") + " " + n, t._spriteStr = t.spriteCount + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : ""), t._canvasStr = t.canvasReCache + "/" + t.canvasNormal + "/" + t.canvasBitmap, t.currentMemorySize = O.systemResourceManager.memorySize, t._useCanvas ? t.renderInfoPre() : t.renderInfo(), t.clear()
                        }
                        t._count = 0, t._timer = e
                    }
                }, t.renderInfoPre = function() {
                    if (t._canvas) {
                        var e = t._ctx;
                        e.clearRect(t._first ? 0 : t._vx, 0, t._width, t._height);
                        for (var i = 0; i < t._view.length; i++) {
                            var n = t._view[i];
                            t._first && (e.fillStyle = "white", e.fillText(n.title, n.x, n.y, null, null, null)), e.fillStyle = n.color;
                            var s = t[n.value];
                            "M" == n.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), e.fillText(s + "", n.x + t._vx, n.y, null, null, null)
                        }
                    }
                }, t.renderInfo = function() {
                    for (var e = "", i = 0; i < t._view.length; i++) {
                        var n = t._view[i],
                            s = t[n.value];
                        "M" == n.units && (s = Math.floor(s / 1048576 * 100) / 100 + " M"), "K" == n.units && (s = Math.floor(s / 1024 * 100) / 100 + " K"), e += s + "\n"
                    }
                    t._txt.text = e
                }, t.FPS = 0, t.loopCount = 0, t.shaderCall = 0, t.drawCall = 0, t.trianglesFaces = 0, t.spriteCount = 0, t.spriteRenderUseCacheCount = 0, t.treeNodeCollision = 0, t.treeSpriteCollision = 0, t.canvasNormal = 0, t.canvasBitmap = 0, t.canvasReCache = 0, t.renderSlow = !1, t.currentMemorySize = 0, t._fpsStr = null, t._canvasStr = null, t._spriteStr = null, t._fpsData = [], t._timer = 0, t._count = 0, t._view = [], t._fontSize = 12, t._txt = null, t._leftText = null, t._sp = null, t._show = !1, t._useCanvas = !1, t._canvas = null, t._ctx = null, t._first = !1, t._vx = 0 / 0, t._width = 0, t._height = 100, t
            }()),
            $ = (function() {
                function t() {
                    this._strsToID = {}, this._idToStrs = [], this._length = 0
                }
                s(t, "laya.utils.StringKey");
                var e = t.prototype;
                return e.add = function(t) {
                    var e = this._strsToID[t];
                    return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++)
                }, e.getID = function(t) {
                    var e = this._strsToID[t];
                    return null == e ? -1 : e
                }, e.getName = function(t) {
                    var e = this._idToStrs[t];
                    return null == e ? void 0 : e
                }, t
            }(), function() {
                function t() {
                    this._delta = 0, this.scale = 1, this.currFrame = 0, this._mid = 1, this._map = [], this._laters = [], this._handlers = [], this._temp = [], this._count = 0, this.currTimer = this._now(), this._lastTimer = this._now(), this._init()
                }
                var e;
                s(t, "laya.utils.Timer");
                var n = t.prototype;
                return n._init = function() {
                    i.timer && i.timer.frameLoop(1, this, this._update)
                }, n._now = function() {
                    return Date.now()
                }, n._update = function() {
                    if (this.scale <= 0) return this._lastTimer = this._now(), void 0;
                    var t = this.currFrame = this.currFrame + this.scale,
                        e = this._now();
                    this._delta = (e - this._lastTimer) * this.scale;
                    var i = this.currTimer = this.currTimer + this._delta;
                    this._lastTimer = e;
                    var n = this._handlers;
                    for (this._count = 0, o = 0, a = n.length; a > o; o++)
                        if (h = n[o], null !== h.method) {
                            var s = h.userFrame ? t : i;
                            if (s >= h.exeTime)
                                if (h.repeat)
                                    if (h.jumpFrame)
                                        for (; s >= h.exeTime;) h.exeTime += h.delay, h.run(!1);
                                    else h.exeTime += h.delay, h.run(!1), s > h.exeTime && (h.exeTime += Math.ceil((s - h.exeTime) / h.delay) * h.delay);
                                else h.run(!0)
                        } else this._count++;
                    (this._count > 30 || t % 200 === 0) && this._clearHandlers();
                    for (var r = this._laters, o = 0, a = r.length - 1; a >= o; o++) {
                        var h = r[o];
                        null !== h.method && (this._map[h.key] = null, h.run(!1)), this._recoverHandler(h), o === a && (a = r.length - 1)
                    }
                    r.length = 0
                }, n._clearHandlers = function() {
                    for (var t = this._handlers, e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        null !== n.method ? this._temp.push(n) : this._recoverHandler(n)
                    }
                    this._handlers = this._temp, this._temp = t, this._temp.length = 0
                }, n._recoverHandler = function(e) {
                    this._map[e.key] == e && (this._map[e.key] = null), e.clear(), t._pool.push(e)
                }, n._create = function(i, n, s, r, o, a, h) {
                    if (!s) return o.apply(r, a), null;
                    if (h) {
                        var l = this._getHandler(r, o);
                        if (l) return l.repeat = n, l.userFrame = i, l.delay = s, l.caller = r, l.method = o, l.args = a, l.exeTime = s + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer), l
                    }
                    return l = t._pool.length > 0 ? t._pool.pop() : new e, l.repeat = n, l.userFrame = i, l.delay = s, l.caller = r, l.method = o, l.args = a, l.exeTime = s + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer) + 1, this._indexHandler(l), this._handlers.push(l), l
                }, n._indexHandler = function(t) {
                    var e = t.caller,
                        i = t.method,
                        n = e ? e.$_GID || (e.$_GID = K.getGID()) : 0,
                        s = i.$_TID || (i.$_TID = 1e5 * this._mid++);
                    t.key = n + s, this._map[t.key] = t
                }, n.once = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this._create(!1, !1, t, e, i, n, s)
                }, n.loop = function(t, e, i, n, s, r) {
                    void 0 === s && (s = !0), void 0 === r && (r = !1);
                    var o = this._create(!1, !0, t, e, i, n, s);
                    o && (o.jumpFrame = r)
                }, n.frameOnce = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this._create(!0, !1, t, e, i, n, s)
                }, n.frameLoop = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this._create(!0, !0, t, e, i, n, s)
                }, n.toString = function() {
                    return "callLater:" + this._laters.length + " handlers:" + this._handlers.length + " pool:" + t._pool.length
                }, n.clear = function(t, e) {
                    var i = this._getHandler(t, e);
                    i && (this._map[i.key] = null, i.key = 0, i.clear())
                }, n.clearAll = function(t) {
                    if (t)
                        for (var e = 0, i = this._handlers.length; i > e; e++) {
                            var n = this._handlers[e];
                            n.caller === t && (this._map[n.key] = null, n.key = 0, n.clear())
                        }
                }, n._getHandler = function(t, e) {
                    var i = t ? t.$_GID || (t.$_GID = K.getGID()) : 0,
                        n = e.$_TID || (e.$_TID = 1e5 * this._mid++);
                    return this._map[i + n]
                }, n.callLater = function(i, n, s) {
                    if (null == this._getHandler(i, n)) {
                        if (t._pool.length) var r = t._pool.pop();
                        else r = new e;
                        r.caller = i, r.method = n, r.args = s, this._indexHandler(r), this._laters.push(r)
                    }
                }, n.runCallLater = function(t, e) {
                    var i = this._getHandler(t, e);
                    i && null != i.method && (this._map[i.key] = null, i.run(!0))
                }, n.runTimer = function(t, e) {
                    this.runCallLater(t, e)
                }, r(0, n, "delta", function() {
                    return this._delta
                }), t._pool = [], t.__init$ = function() {
                    e = function() {
                        function t() {
                            this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1
                        }
                        s(t, "");
                        var e = t.prototype;
                        return e.clear = function() {
                            this.caller = null, this.method = null, this.args = null
                        }, e.run = function(t) {
                            var e = this.caller;
                            if (e && e.destroyed) return this.clear();
                            var i = this.method,
                                n = this.args;
                            t && this.clear(), null != i && (n ? i.apply(e, n) : i.call(e))
                        }, t
                    }()
                }, t
            }()),
            j = function() {
                function t() {
                    this.gid = 0
                }
                s(t, "laya.utils.Tween");
                var e = t.prototype;
                return e.to = function(t, e, i, n, s, r, o) {
                    return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !0, !1, !0)
                }, e.from = function(t, e, i, n, s, r, o) {
                    return void 0 === r && (r = 0), void 0 === o && (o = !1), this._create(t, e, i, n, s, r, o, !1, !1, !0)
                }, e._create = function(e, n, s, r, o, a, h, l, u, c) {
                    if (!e) throw new Error("Tween:target is null");
                    this._target = e, this._duration = s, this._ease = r || n.ease || t.easeNone, this._complete = o || n.complete, this._delay = a, this._props = [], this._usedTimer = 0, this._startTimer = B.now(), this._usedPool = u, this._delayParam = null, this.update = n.update;
                    var _ = e.$_GID || (e.$_GID = K.getGID());
                    return t.tweenMap[_] ? (h && t.clearTween(e), t.tweenMap[_].push(this)) : t.tweenMap[_] = [this], c ? 0 >= a ? this.firstStart(e, n, l) : (this._delayParam = [e, n, l], i.scaleTimer.once(a, this, this.firstStart, this._delayParam)) : this._initProps(e, n, l), this
                }, e.firstStart = function(t, e, i) {
                    return this._delayParam = null, t.destroyed ? (this.clear(), void 0) : (this._initProps(t, e, i), this._beginLoop(), void 0)
                }, e._initProps = function(t, e, i) {
                    for (var n in e)
                        if ("number" == typeof t[n]) {
                            var s = i ? t[n] : e[n],
                                r = i ? e[n] : t[n];
                            this._props.push([n, s, r - s]), i || (t[n] = s)
                        }
                }, e._beginLoop = function() {
                    i.scaleTimer.frameLoop(1, this, this._doEase)
                }, e._doEase = function() {
                    this._updateEase(B.now())
                }, e._updateEase = function(e) {
                    var i = this._target;
                    if (i) {
                        if (i.destroyed) return t.clearTween(i);
                        var n = this._usedTimer = e - this._startTimer - this._delay;
                        if (!(0 > n)) {
                            if (n >= this._duration) return this.complete();
                            for (var s = n > 0 ? this._ease(n, 0, 1, this._duration) : 0, r = this._props, o = 0, a = r.length; a > o; o++) {
                                var h = r[o];
                                i[h[0]] = h[1] + s * h[2]
                            }
                            this.update && this.update.run()
                        }
                    }
                }, e.complete = function() {
                    if (this._target) {
                        i.scaleTimer.runTimer(this, this.firstStart);
                        for (var t = this._target, e = this._props, n = this._complete, s = 0, r = e.length; r > s; s++) {
                            var o = e[s];
                            t[o[0]] = o[1] + o[2]
                        }
                        this.update && this.update.run(), this.clear(), n && n.run()
                    }
                }, e.pause = function() {
                    i.scaleTimer.clear(this, this._beginLoop), i.scaleTimer.clear(this, this._doEase), i.scaleTimer.clear(this, this.firstStart);
                    var t = B.now(),
                        e = 0 / 0;
                    e = t - this._startTimer - this._delay, 0 > e && (this._usedTimer = e)
                }, e.setStartTime = function(t) {
                    this._startTimer = t
                }, e.clear = function() {
                    this._target && (this._remove(), this._clear())
                }, e._clear = function() {
                    this.pause(), i.scaleTimer.clear(this, this.firstStart), this._complete = null, this._target = null, this._ease = null, this._props = null, this._delayParam = null, this._usedPool && (this.update = null, V.recover("tween", this))
                }, e.recover = function() {
                    this._usedPool = !0, this._clear()
                }, e._remove = function() {
                    var e = t.tweenMap[this._target.$_GID];
                    if (e)
                        for (var i = 0, n = e.length; n > i; i++)
                            if (e[i] === this) {
                                e.splice(i, 1);
                                break
                            }
                }, e.restart = function() {
                    if (this.pause(), this._usedTimer = 0, this._startTimer = B.now(), this._delayParam) return i.scaleTimer.once(this._delay, this, this.firstStart, this._delayParam), void 0;
                    for (var t = this._props, e = 0, n = t.length; n > e; e++) {
                        var s = t[e];
                        this._target[s[0]] = s[1]
                    }
                    i.scaleTimer.once(this._delay, this, this._beginLoop)
                }, e.resume = function() {
                    this._usedTimer >= this._duration || (this._startTimer = B.now() - this._usedTimer - this._delay, this._delayParam ? this._usedTimer < 0 ? i.scaleTimer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop())
                }, r(0, e, "progress", null, function(t) {
                    var e = t * this._duration;
                    this._startTimer = B.now() - this._delay - e
                }), t.to = function(e, i, n, s, r, o, a, h) {
                    return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), V.getItemByClass("tween", t)._create(e, i, n, s, r, o, a, !0, h, !0)
                }, t.from = function(e, i, n, s, r, o, a, h) {
                    return void 0 === o && (o = 0), void 0 === a && (a = !1), void 0 === h && (h = !0), V.getItemByClass("tween", t)._create(e, i, n, s, r, o, a, !1, h, !0)
                }, t.clearAll = function(e) {
                    if (e && e.$_GID) {
                        var i = t.tweenMap[e.$_GID];
                        if (i) {
                            for (var n = 0, s = i.length; s > n; n++) i[n]._clear();
                            i.length = 0
                        }
                    }
                }, t.clear = function(t) {
                    t.clear()
                }, t.clearTween = function(e) {
                    t.clearAll(e)
                }, t.easeNone = function(t, e, i, n) {
                    return i * t / n + e
                }, t.tweenMap = {}, t
            }(),
            K = function() {
                function t() {}
                return s(t, "laya.utils.Utils"), t.toRadian = function(e) {
                    return e * t._pi2
                }, t.toAngle = function(e) {
                    return e * t._pi
                }, t.toHexColor = function(t) {
                    if (0 > t || isNaN(t)) return null;
                    for (var e = t.toString(16); e.length < 6;) e = "0" + e;
                    return "#" + e
                }, t.getGID = function() {
                    return t._gid++
                }, t.concatArray = function(t, e) {
                    if (!e) return t;
                    if (!t) return e;
                    var i = 0,
                        n = e.length;
                    for (i = 0; n > i; i++) t.push(e[i]);
                    return t
                }, t.clearArray = function(t) {
                    return t ? (t.length = 0, t) : t
                }, t.copyArray = function(t, e) {
                    if (t || (t = []), !e) return t;
                    t.length = e.length;
                    var i = 0,
                        n = e.length;
                    for (i = 0; n > i; i++) t[i] = e[i];
                    return t
                }, t.getGlobalRecByPoints = function(t, e, i, n, s) {
                    var r;
                    r = new S(e, i), r = t.localToGlobal(r);
                    var o;
                    return o = new S(n, s), o = t.localToGlobal(o), P._getWrapRec([r.x, r.y, o.x, o.y])
                }, t.getGlobalPosAndScale = function(e) {
                    return t.getGlobalRecByPoints(e, 0, 0, 1, 1)
                }, t.bind = function(t, e) {
                    var i = t;
                    return i = t.bind(e)
                }, t.measureText = function(t, e) {
                    return o.measureText(t, e)
                }, t.measureYouText = function(t) {
                    return o.measureYouText(t)
                }, t.updateOrder = function(t) {
                    if (!t || t.length < 2) return !1;
                    for (var e, i = 1, n = 0, s = t.length, r = 0 / 0; s > i;) {
                        for (n = i, e = t[n], r = t[n]._zOrder; --n > -1 && t[n]._zOrder > r;) t[n + 1] = t[n];
                        t[n + 1] = e, i++
                    }
                    var o = e.parent.conchModel;
                    if (o)
                        if (null != o.updateZOrder) o.updateZOrder();
                        else {
                            for (i = 0; s > i; i++) o.removeChild(t[i].conchModel);
                            for (i = 0; s > i; i++) o.addChildAt(t[i].conchModel, i)
                        } return !0
                }, t.transPointList = function(t, e, i) {
                    var n = 0,
                        s = t.length;
                    for (n = 0; s > n; n += 2) t[n] += e, t[n + 1] += i
                }, t.parseInt = function(t, e) {
                    void 0 === e && (e = 0);
                    var i = B.window.parseInt(t, e);
                    return isNaN(i) ? 0 : i
                }, t.getFileExtension = function(e) {
                    t._extReg.lastIndex = e.lastIndexOf(".");
                    var i = t._extReg.exec(e);
                    return i && i.length > 1 ? i[1].toLowerCase() : null
                }, t.getTransformRelativeToWindow = function(t, e, n) {
                    var s = i.stage,
                        r = laya.utils.Utils.getGlobalPosAndScale(t),
                        o = s._canvasTransform.clone(),
                        a = o.tx,
                        h = o.ty;
                    o.rotate(-Math.PI / 180 * i.stage.canvasDegree), o.scale(i.stage.clientScaleX, i.stage.clientScaleY);
                    var l = i.stage.canvasDegree % 180 != 0,
                        u = 0 / 0,
                        c = 0 / 0;
                    l ? (u = n + r.y, c = e + r.x, u *= o.d, c *= o.a, 90 == i.stage.canvasDegree ? (u = a - u, c += h) : (u += a, c = h - c)) : (u = e + r.x, c = n + r.y, u *= o.a, c *= o.d, u += a, c += h);
                    var _ = 0 / 0,
                        d = 0 / 0;
                    return l ? (_ = o.d * r.height, d = o.a * r.width) : (_ = o.a * r.width, d = o.d * r.height), {
                        x: u,
                        y: c,
                        scaleX: _,
                        scaleY: d
                    }
                }, t.fitDOMElementInArea = function(e, n, s, r, o, a) {
                    e._fitLayaAirInitialized || (e._fitLayaAirInitialized = !0, e.style.transformOrigin = e.style.webKittransformOrigin = "left top", e.style.position = "absolute");
                    var h = t.getTransformRelativeToWindow(n, s, r);
                    e.style.transform = e.style.webkitTransform = "scale(" + h.scaleX + "," + h.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", e.style.width = o + "px", e.style.height = a + "px", e.style.left = h.x + "px", e.style.top = h.y + "px"
                }, t.isOkTextureList = function(t) {
                    if (!t) return !1;
                    var e, i = 0,
                        n = t.length;
                    for (i = 0; n > i; i++)
                        if (e = t[i], !e || !e.source) return !1;
                    return !0
                }, t.isOKCmdList = function(t) {
                    if (!t) return !1;
                    var e, i, n = 0,
                        s = t.length,
                        r = R._context;
                    for (n = 0; s > n; n++) switch (e = t[n], e.callee) {
                        case r._drawTexture:
                        case r._fillTexture:
                        case r._drawTextureWithTransform:
                            if (i = e[0], !i || !i.source) return !1
                    }
                    return !0
                }, t._gid = 1, t._pi = 180 / Math.PI, t._pi2 = Math.PI / 180, t._extReg = /\.(\w+)\??/g, t.parseXMLFromString = function(t) {
                    var e;
                    if (t = t.replace(/>\s+</g, "><"), e = (new DOMParser).parseFromString(t, "text/xml"), e.firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
                    return e
                }, t
            }(),
            q = function() {
                function t() {
                    this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, this._freeIdArray = [], R.isWebGL && W.regCacheByFunction(K.bind(this.startDispose, this), K.bind(this.getCacheList, this))
                }
                s(t, "laya.utils.VectorGraphManager");
                var e = t.prototype;
                return e.getId = function() {
                    return this._id++
                }, e.addShape = function(t, e) {
                    this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0)
                }, e.addLine = function(t, e) {
                    this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0)
                }, e.getShape = function(t) {
                    this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0)
                }, e.deleteShape = function(t) {
                    this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t]
                }, e.getCacheList = function() {
                    var t, e = [];
                    for (t in this.shapeDic) e.push(this.shapeDic[t]);
                    for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
                    return e
                }, e.startDispose = function() {
                    var t;
                    for (t in this.useDic) this.useDic[t] = !1;
                    this._checkKey = !0
                }, e.endDispose = function() {
                    if (this._checkKey) {
                        var t;
                        for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                        this._checkKey = !1
                    }
                }, t.getInstance = function() {
                    return t.instance = t.instance || new t
                }, t.instance = null, t
            }(),
            Q = function() {
                function t() {
                    this._obj = null, this._obj = t.supportWeakMap ? new B.window.WeakMap : {}, t.supportWeakMap || t._maps.push(this)
                }
                s(t, "laya.utils.WeakObject");
                var e = t.prototype;
                return e.set = function(e, i) {
                    if (null != e)
                        if (t.supportWeakMap) {
                            var n = e;
                            ("string" == typeof e || "number" == typeof e) && (n = t._keys[e], n || (n = t._keys[e] = {
                                k: e
                            })), this._obj.set(n, i)
                        } else "string" == typeof e || "number" == typeof e ? this._obj[e] = i : (e.$_GID || (e.$_GID = K.getGID()), this._obj[e.$_GID] = i)
                }, e.get = function(e) {
                    if (null == e) return null;
                    if (t.supportWeakMap) {
                        var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                        return i ? this._obj.get(i) : null
                    }
                    return "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID]
                }, e.del = function(e) {
                    if (null != e)
                        if (t.supportWeakMap) {
                            var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                            if (!i) return;
                            this._obj.delete(i)
                        } else "string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID]
                }, e.has = function(e) {
                    if (null == e) return !1;
                    if (t.supportWeakMap) {
                        var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                        return this._obj.has(i)
                    }
                    return "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID]
                }, t.__init__ = function() {
                    t.supportWeakMap = null != B.window.WeakMap, t.supportWeakMap || i.timer.loop(t.delInterval, null, t.clearCache)
                }, t.clearCache = function() {
                    for (var e = 0, i = t._maps.length; i > e; e++) {
                        var n = t._maps[e];
                        n._obj = {}
                    }
                }, t.supportWeakMap = !1, t.delInterval = 3e5, t._keys = {}, t._maps = [], n(t, ["I", function() {
                    return this.I = new t
                }]), t
            }(),
            J = function() {
                function t() {
                    this.id = 0 / 0, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null
                }
                s(t, "laya.utils.WordText");
                var e = t.prototype;
                return e.setText = function(t) {
                    this.changed = !0, this._text = t
                }, e.toString = function() {
                    return this._text
                }, e.charCodeAt = function(t) {
                    return this._text ? this._text.charCodeAt(t) : 0 / 0
                }, e.charAt = function(t) {
                    return this._text ? this._text.charAt(t) : null
                }, r(0, e, "length", function() {
                    return this._text ? this._text.length : 0
                }), t
            }(),
            Z = function(t) {
                function e() {
                    this._bits = 0, this._displayedInStage = !1, this._parent = null, this.conchModel = null, this.name = "", this._destroyed = !1, e.__super.call(this), this._childs = e.ARRAY_EMPTY, this._$P = e.PROP_EMPTY, this.timer = i.scaleTimer, this.conchModel = R.isConchNode ? this.createConchModel() : null
                }
                s(e, "laya.display.Node", t);
                var n = e.prototype;
                return n._setBit = function(t, e) {
                    if (1 == t) {
                        var i = this._getBit(t);
                        i != e && this._updateDisplayedInstage()
                    }
                    e ? this._bits |= t : this._bits &= ~t
                }, n._getBit = function(t) {
                    return 0 != (this._bits & t)
                }, n._setUpNoticeChain = function() {
                    this._getBit(1) && this._setUpNoticeType(1)
                }, n._setUpNoticeType = function(t) {
                    var e = this;
                    for (e._setBit(t, !0), e = e.parent; e;) {
                        if (e._getBit(t)) return;
                        e._setBit(t, !0), e = e.parent
                    }
                }, n.on = function(t, e, i, n) {
                    return ("display" === t || "undisplay" === t) && (this._getBit(1) || this._setUpNoticeType(1)), this._createListener(t, e, i, n, !1)
                }, n.once = function(t, e, i, n) {
                    return ("display" === t || "undisplay" === t) && (this._getBit(1) || this._setUpNoticeType(1)), this._createListener(t, e, i, n, !0)
                }, n.createConchModel = function() {
                    return null
                }, n.destroy = function(t) {
                    void 0 === t && (t = !0), this._destroyed = !0, this._parent && this._parent.removeChild(this), this._childs && (t ? this.destroyChildren() : this.removeChildren()), this._childs = null, this._$P = null, this.offAll(), this.timer.clearAll(this)
                }, n.destroyChildren = function() {
                    if (this._childs)
                        for (var t = this._childs.length - 1; t > -1; t--) this._childs[t].destroy(!0)
                }, n.addChild = function(t) {
                    if (!t || this.destroyed || t === this) return t;
                    if (t.zOrder && this._set$P("hasZorder", !0), t._parent === this) {
                        var i = this.getChildIndex(t);
                        i !== this._childs.length - 1 && (this._childs.splice(i, 1), this._childs.push(t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, this._childs.length - 1)), this._childChanged())
                    } else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), this._childs.push(t), this.conchModel && this.conchModel.addChildAt(t.conchModel, this._childs.length - 1), t.parent = this, this._childChanged();
                    return t
                }, n.addChildren = function() {
                    for (var t = arguments, e = 0, i = t.length; i > e;) this.addChild(t[e++])
                }, n.addChildAt = function(t, i) {
                    if (!t || this.destroyed || t === this) return t;
                    if (t.zOrder && this._set$P("hasZorder", !0), i >= 0 && i <= this._childs.length) {
                        if (t._parent === this) {
                            var n = this.getChildIndex(t);
                            this._childs.splice(n, 1), this._childs.splice(i, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, i)), this._childChanged()
                        } else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), this._childs.splice(i, 0, t), this.conchModel && this.conchModel.addChildAt(t.conchModel, i), t.parent = this;
                        return t
                    }
                    throw new Error("appendChildAt:The index is out of bounds")
                }, n.getChildIndex = function(t) {
                    return this._childs.indexOf(t)
                }, n.getChildByName = function(t) {
                    var e = this._childs;
                    if (e)
                        for (var i = 0, n = e.length; n > i; i++) {
                            var s = e[i];
                            if (s.name === t) return s
                        }
                    return null
                }, n._get$P = function(t) {
                    return this._$P[t]
                }, n._set$P = function(t, i) {
                    return this.destroyed || (this._$P === e.PROP_EMPTY && (this._$P = {}), this._$P[t] = i), i
                }, n.getChildAt = function(t) {
                    return this._childs[t]
                }, n.setChildIndex = function(t, e) {
                    var i = this._childs;
                    if (0 > e || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
                    var n = this.getChildIndex(t);
                    if (0 > n) throw new Error("setChildIndex:node is must child of this object.");
                    return i.splice(n, 1), i.splice(e, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, e)), this._childChanged(), t
                }, n._childChanged = function() {}, n.removeChild = function(t) {
                    if (!this._childs) return t;
                    var e = this._childs.indexOf(t);
                    return this.removeChildAt(e)
                }, n.removeSelf = function() {
                    return this._parent && this._parent.removeChild(this), this
                }, n.removeChildByName = function(t) {
                    var e = this.getChildByName(t);
                    return e && this.removeChild(e), e
                }, n.removeChildAt = function(t) {
                    var e = this.getChildAt(t);
                    return e && (this._childs.splice(t, 1), this.conchModel && this.conchModel.removeChild(e.conchModel), e.parent = null), e
                }, n.removeChildren = function(t, i) {
                    if (void 0 === t && (t = 0), void 0 === i && (i = 2147483647), this._childs && this._childs.length > 0) {
                        var n = this._childs;
                        if (0 === t && i >= o) {
                            var s = n;
                            this._childs = e.ARRAY_EMPTY
                        } else s = n.splice(t, i - t);
                        for (var r = 0, o = s.length; o > r; r++) s[r].parent = null, this.conchModel && this.conchModel.removeChild(s[r].conchModel)
                    }
                    return this
                }, n.replaceChild = function(t, e) {
                    var i = this._childs.indexOf(e);
                    return i > -1 ? (this._childs.splice(i, 1, t), this.conchModel && (this.conchModel.removeChild(e.conchModel), this.conchModel.addChildAt(t.conchModel, i)), e.parent = null, t.parent = this, t) : null
                }, n._updateDisplayedInstage = function() {
                    var t;
                    t = this;
                    var e = i.stage;
                    for (this._displayedInStage = !1; t;) {
                        if (t._getBit(1)) {
                            this._displayedInStage = t._displayedInStage;
                            break
                        }
                        if (t == e || t._displayedInStage) {
                            this._displayedInStage = !0;
                            break
                        }
                        t = t.parent
                    }
                }, n._setDisplay = function(t) {
                    this._displayedInStage !== t && (this._displayedInStage = t, t ? this.event("display") : this.event("undisplay"))
                }, n._displayChild = function(t, e) {
                    var i = t._childs;
                    if (i)
                        for (var n = 0, s = i.length; s > n; n++) {
                            var r = i[n];
                            r._getBit(1) && (r._childs.length > 0 ? this._displayChild(r, e) : r._setDisplay(e))
                        }
                    t._setDisplay(e)
                }, n.contains = function(t) {
                    if (t === this) return !0;
                    for (; t;) {
                        if (t.parent === this) return !0;
                        t = t.parent
                    }
                    return !1
                }, n.timerLoop = function(t, e, i, n, s, r) {
                    void 0 === s && (s = !0), void 0 === r && (r = !1), this.timer.loop(t, e, i, n, s, r)
                }, n.timerOnce = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this.timer._create(!1, !1, t, e, i, n, s)
                }, n.frameLoop = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this.timer._create(!0, !0, t, e, i, n, s)
                }, n.frameOnce = function(t, e, i, n, s) {
                    void 0 === s && (s = !0), this.timer._create(!0, !1, t, e, i, n, s)
                }, n.clearTimer = function(t, e) {
                    this.timer.clear(t, e)
                }, r(0, n, "numChildren", function() {
                    return this._childs.length
                }), r(0, n, "destroyed", function() {
                    return this._destroyed
                }), r(0, n, "parent", function() {
                    return this._parent
                }, function(t) {
                    this._parent !== t && (t ? (this._parent = t, this.event("added"), this._getBit(1) && (this._setUpNoticeChain(), t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this.event("removed"), this._parent._childChanged(), this._getBit(1) && this._displayChild(this, !1), this._parent = t))
                }), r(0, n, "displayedInStage", function() {
                    return this._getBit(1) ? this._displayedInStage : (this._setUpNoticeType(1), this._displayedInStage)
                }), e.ARRAY_EMPTY = [], e.PROP_EMPTY = {}, e.NOTICE_DISPLAY = 1, e.MOUSEENABLE = 2, e
            }(h),
            te = function(t) {
                function e(t) {
                    this._bgground = null, this._border = null, this._rect = null, this.underLine = 0, this.lineHeight = 0, e.__super.call(this), this._padding = e._PADDING, this._spacing = e._SPACING, this._aligns = e._ALIGNS, this._font = _.EMPTY, this._ower = t
                }
                s(e, "laya.display.css.CSSStyle", t);
                var i = e.prototype;
                return i.destroy = function() {
                    this._ower = null, this._font = null, this._rect = null
                }, i.inherit = function(t) {
                    this._font = t._font, this._spacing = t._spacing === e._SPACING ? e._SPACING : t._spacing.slice(), this.lineHeight = t.lineHeight
                }, i._widthAuto = function() {
                    return 0 !== (262144 & this._type)
                }, i.widthed = function() {
                    return 0 != (8 & this._type)
                }, i._calculation = function(t, e) {
                    function i(t, e, i) {
                        return t * i[0] + e * i[1] + i[2]
                    }

                    function n() {
                        var t = r.width,
                            e = s.width;
                        o.width && (s.width = i(t, e, o.width)), o.height && (s.height = i(t, e, o.height)), o.left && (s.x = i(t, e, o.left)), o.top && (s.y = i(t, e, o.top))
                    }
                    if (e.indexOf("%") < 0) return !1;
                    var s = this._ower,
                        r = s.parent,
                        o = this._rect;
                    null === o && (r._getCSSStyle()._type |= 524288, r.on("resize", this, n), this._rect = o = {
                        input: {}
                    });
                    var a = e.split(" ");
                    return a[0] = parseFloat(a[0]) / 100, 1 == a.length ? a[1] = a[2] = 0 : (a[1] = parseFloat(a[1]) / 100, a[2] = parseFloat(a[2])), o[t] = a, o.input[t] = e, n(t), !0
                }, i.heighted = function() {
                    return 0 != (8192 & this._type)
                }, i.size = function(t, e) {
                    var i = this._ower,
                        n = !1; - 1 !== t && t != this._ower.width && (this._type |= 8, this._ower.width = t, n = !0), -1 !== e && e != this._ower.height && (this._type |= 8192, this._ower.height = e, n = !0), n && (i._layoutLater(), 524288 & this._type && i.event("resize", this))
                }, i._getAlign = function() {
                    return this._aligns[0]
                }, i._getValign = function() {
                    return this._aligns[1]
                }, i._getCssFloat = function() {
                    return 0 != (32768 & this._type) ? 32768 : 0
                }, i._createFont = function() {
                    return 4096 & this._type ? this._font : (this._type |= 4096, this._font = new _(this._font))
                }, i.render = function(t, e, i, n) {
                    var s = t.width,
                        r = t.height;
                    i -= t.pivotX, n -= t.pivotY, this._bgground && null != this._bgground.color && e.ctx.fillRect(i, n, s, r, this._bgground.color), this._border && this._border.color && e.drawRect(i, n, s, r, this._border.color.strColor, this._border.size)
                }, i.getCSSStyle = function() {
                    return this
                }, i.cssText = function(t) {
                    this.attrs(e.parseOneCSS(t, ";"))
                }, i.attrs = function(t) {
                    if (t)
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            this[n[0]] = n[1]
                        }
                }, i.setTransform = function(t) {
                    "none" === t ? this._tf = c._TF_EMPTY : this.attrs(e.parseOneCSS(t, ","))
                }, i.translate = function(t, e) {
                    this._tf === c._TF_EMPTY && (this._tf = new d), this._tf.translateX = t, this._tf.translateY = e
                }, i.scale = function(t, e) {
                    this._tf === c._TF_EMPTY && (this._tf = new d), this._tf.scaleX = t, this._tf.scaleY = e
                }, i._enableLayout = function() {
                    return 0 === (2 & this._type) && 0 === (4 & this._type)
                }, r(0, i, "block", t.prototype._$get_block, function(t) {
                    t ? this._type |= 1 : this._type &= -2
                }), r(0, i, "valign", function() {
                    return e._valigndef[this._aligns[1]]
                }, function(t) {
                    this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]), this._aligns[1] = e._valigndef[t]
                }), r(0, i, "height", null, function(t) {
                    if (this._type |= 8192, "string" == typeof t) {
                        if (this._calculation("height", t)) return;
                        t = parseInt(t)
                    }
                    this.size(-1, t)
                }), r(0, i, "width", null, function(t) {
                    if (this._type |= 8, "string" == typeof t) {
                        var e = t.indexOf("auto");
                        if (e >= 0 && (this._type |= 262144, t = t.substr(0, e)), this._calculation("width", t)) return;
                        t = parseInt(t)
                    }
                    this.size(t, -1)
                }), r(0, i, "fontWeight", function() {
                    return this._font.weight
                }, function(t) {
                    this._createFont().weight = t
                }), r(0, i, "left", null, function(t) {
                    var e = this._ower;
                    if ("string" == typeof t) {
                        if ("center" === t ? t = "50% -50% 0" : "right" === t && (t = "100% -100% 0"), this._calculation("left", t)) return;
                        t = parseInt(t)
                    }
                    e.x = t
                }), r(0, i, "_translate", null, function(t) {
                    this.translate(t[0], t[1])
                }), r(0, i, "absolute", function() {
                    return 0 !== (4 & this._type)
                }), r(0, i, "top", null, function(t) {
                    var e = this._ower;
                    if ("string" == typeof t) {
                        if ("middle" === t ? t = "50% -50% 0" : "bottom" === t && (t = "100% -100% 0"), this._calculation("top", t)) return;
                        t = parseInt(t)
                    }
                    e.y = t
                }), r(0, i, "align", function() {
                    return e._aligndef[this._aligns[0]]
                }, function(t) {
                    this._aligns === e._ALIGNS && (this._aligns = [0, 0, 0]), this._aligns[0] = e._aligndef[t]
                }), r(0, i, "bold", function() {
                    return this._font.bold
                }, function(t) {
                    this._createFont().bold = t
                }), r(0, i, "padding", function() {
                    return this._padding
                }, function(t) {
                    this._padding = t
                }), r(0, i, "leading", function() {
                    return this._spacing[1]
                }, function(t) {
                    "string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [0, 0]), this._spacing[1] = t
                }), r(0, i, "lineElement", function() {
                    return 0 != (65536 & this._type)
                }, function(t) {
                    t ? this._type |= 65536 : this._type &= -65537
                }), r(0, i, "cssFloat", function() {
                    return 0 != (32768 & this._type) ? "right" : "left"
                }, function(t) {
                    this.lineElement = !1, "right" === t ? this._type |= 32768 : this._type &= -32769
                }), r(0, i, "textDecoration", function() {
                    return this._font.decoration
                }, function(t) {
                    this._createFont().decoration = t
                }), r(0, i, "whiteSpace", function() {
                    return 131072 & this._type ? "nowrap" : ""
                }, function(t) {
                    "nowrap" === t && (this._type |= 131072), "none" === t && (this._type &= -131073)
                }), r(0, i, "background", null, function(t) {
                    return t ? (this._bgground || (this._bgground = {}), this._bgground.color = t, this._ower.conchModel && this._ower.conchModel.bgColor(t), this._type |= 16384, this._ower._renderType |= 256, void 0) : (this._bgground = null, void 0)
                }), r(0, i, "wordWrap", function() {
                    return 0 === (131072 & this._type)
                }, function(t) {
                    t ? this._type &= -131073 : this._type |= 131072
                }), r(0, i, "color", function() {
                    return this._font.color
                }, function(t) {
                    this._createFont().color = t
                }), r(0, i, "password", function() {
                    return this._font.password
                }, function(t) {
                    this._createFont().password = t
                }), r(0, i, "backgroundColor", function() {
                    return this._bgground ? this._bgground.color : null
                }, function(t) {
                    "none" === t ? this._bgground = null : (this._bgground || (this._bgground = {}), this._bgground.color = t), this._ower.conchModel && this._ower.conchModel.bgColor(t), this._ower._renderType |= 256
                }), r(0, i, "font", function() {
                    return this._font.toString()
                }, function(t) {
                    this._createFont().set(t)
                }), r(0, i, "weight", null, function(t) {
                    this._createFont().weight = t
                }), r(0, i, "letterSpacing", function() {
                    return this._spacing[0]
                }, function(t) {
                    "string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [0, 0]), this._spacing[0] = t
                }), r(0, i, "fontSize", function() {
                    return this._font.size
                }, function(t) {
                    this._createFont().size = t
                }), r(0, i, "italic", function() {
                    return this._font.italic
                }, function(t) {
                    this._createFont().italic = t
                }), r(0, i, "fontFamily", function() {
                    return this._font.family
                }, function(t) {
                    this._createFont().family = t
                }), r(0, i, "stroke", function() {
                    return this._font.stroke[0]
                }, function(t) {
                    this._createFont().stroke === _._STROKE && (this._font.stroke = [0, "#000000"]), this._font.stroke[0] = t
                }), r(0, i, "strokeColor", function() {
                    return this._font.stroke[1]
                }, function(t) {
                    this._createFont().stroke === _._STROKE && (this._font.stroke = [0, "#000000"]), this._font.stroke[1] = t
                }), r(0, i, "border", function() {
                    return this._border ? this._border.value : ""
                }, function(t) {
                    if ("none" == t) return this._border = null, void 0;
                    this._border || (this._border = {}), this._border.value = t;
                    var e = t.split(" ");
                    if (this._border.color = G.create(e[e.length - 1]), 1 == e.length) return this._border.size = 1, this._border.type = "solid", void 0;
                    var i = 0;
                    e[0].indexOf("px") > 0 ? (this._border.size = parseInt(e[0]), i++) : this._border.size = 1, this._border.type = e[i], this._ower._renderType |= 256
                }), r(0, i, "borderColor", function() {
                    return this._border && this._border.color ? this._border.color.strColor : null
                }, function(t) {
                    return t ? (this._border || (this._border = {
                        size: 1,
                        type: "solid"
                    }), this._border.color = null == t ? null : G.create(t), this._ower.conchModel && this._ower.conchModel.border(this._border.color.strColor), this._ower._renderType |= 256, void 0) : (this._border = null, void 0)
                }), r(0, i, "position", function() {
                    return 4 & this._type ? "absolute" : ""
                }, function(t) {
                    "absolute" == t ? this._type |= 4 : this._type &= -5
                }), r(0, i, "display", null, function(t) {
                    switch (t) {
                        case "":
                            this._type &= -3, this.visible = !0;
                            break;
                        case "none":
                            this._type |= 2, this.visible = !1, this._ower._layoutLater()
                    }
                }), r(0, i, "paddingLeft", function() {
                    return this.padding[3]
                }), r(0, i, "paddingTop", function() {
                    return this.padding[0]
                }), r(0, i, "_scale", null, function(t) {
                    this._ower.scale(t[0], t[1])
                }), r(0, i, "_rotate", null, function(t) {
                    this._ower.rotation = t
                }), e.parseOneCSS = function(t, i) {
                    for (var n, s = [], r = t.split(i), o = 0, a = r.length; a > o; o++) {
                        var h = r[o],
                            l = h.indexOf(":"),
                            u = h.substr(0, l).replace(/^\s+|\s+$/g, "");
                        if (0 != u.length) {
                            var c = h.substr(l + 1).replace(/^\s+|\s+$/g, ""),
                                _ = [u, c];
                            switch (u) {
                                case "italic":
                                case "bold":
                                    _[1] = "true" == c;
                                    break;
                                case "line-height":
                                    _[0] = "lineHeight", _[1] = parseInt(c);
                                    break;
                                case "font-size":
                                    _[0] = "fontSize", _[1] = parseInt(c);
                                    break;
                                case "padding":
                                    n = c.split(" "), n.length > 1 || (n[1] = n[2] = n[3] = n[0]), _[1] = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])];
                                    break;
                                case "rotate":
                                    _[0] = "_rotate", _[1] = parseFloat(c);
                                    break;
                                case "scale":
                                    n = c.split(" "), _[0] = "_scale", _[1] = [parseFloat(n[0]), parseFloat(n[1])];
                                    break;
                                case "translate":
                                    n = c.split(" "), _[0] = "_translate", _[1] = [parseInt(n[0]), parseInt(n[1])];
                                    break;
                                default:
                                    (_[0] = e._CSSTOVALUE[u]) || (_[0] = u)
                            }
                            s.push(_)
                        }
                    }
                    return s
                }, e.parseCSS = function(t) {
                    for (var i; null != (i = e._parseCSSRegExp.exec(t));) e.styleSheets[i[1]] = e.parseOneCSS(i[2], ";")
                }, e.EMPTY = new e(null), e._CSSTOVALUE = {
                    "letter-spacing": "letterSpacing",
                    "line-spacing": "lineSpacing",
                    "white-space": "whiteSpace",
                    "line-height": "lineHeight",
                    "scale-x": "scaleX",
                    "scale-y": "scaleY",
                    "translate-x": "translateX",
                    "translate-y": "translateY",
                    "font-family": "fontFamily",
                    "font-weight": "fontWeight",
                    "vertical-align": "valign",
                    "text-decoration": "textDecoration",
                    "background-color": "backgroundColor",
                    "border-color": "borderColor",
                    "float": "cssFloat"
                }, e._parseCSSRegExp = new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}", "g"), e._aligndef = {
                    left: 0,
                    center: 1,
                    right: 2,
                    0: "left",
                    1: "center",
                    2: "right"
                }, e._valigndef = {
                    top: 0,
                    middle: 1,
                    bottom: 2,
                    0: "top",
                    1: "middle",
                    2: "bottom"
                }, e.styleSheets = {}, e.ALIGN_CENTER = 1, e.ALIGN_RIGHT = 2, e.VALIGN_MIDDLE = 1, e.VALIGN_BOTTOM = 2, e._CSS_BLOCK = 1, e._DISPLAY_NONE = 2, e._ABSOLUTE = 4, e._WIDTH_SET = 8, e._PADDING = [0, 0, 0, 0], e._RECT = [-1, -1, -1, -1], e._SPACING = [0, 0], e._ALIGNS = [0, 0, 0], e.ADDLAYOUTED = 512, e._NEWFONT = 4096, e._HEIGHT_SET = 8192, e._BACKGROUND_SET = 16384, e._FLOAT_RIGHT = 32768, e._LINE_ELEMENT = 65536, e._NOWARP = 131072, e._WIDTHAUTO = 262144, e._LISTERRESZIE = 524288, e
            }(c),
            ee = function(t) {
                function e() {
                    this.url = null, this.audio = null, this.loaded = !1, e.__super.call(this)
                }
                s(e, "laya.media.h5audio.AudioSound", t);
                var i = e.prototype;
                return i.dispose = function() {
                    var t = e._audioCache[this.url];
                    t && (t.src = "", delete e._audioCache[this.url])
                }, i.load = function(t) {
                    function i() {
                        s(), o.loaded = !0, o.event("complete")
                    }

                    function n() {
                        r.load = null, s(), o.event("error")
                    }

                    function s() {
                        r.removeEventListener("canplaythrough", i), r.removeEventListener("error", n)
                    }
                    t = L.formatURL(t), this.url = t;
                    var r;
                    if (t == E._tMusic ? (e._initMusicAudio(), r = e._musicAudio, r.src != t && (e._audioCache[r.src] = null, r = null)) : r = e._audioCache[t], r && r.readyState >= 2) return this.event("complete"), void 0;
                    r || (t == E._tMusic ? (e._initMusicAudio(), r = e._musicAudio) : r = B.createElement("audio"), e._audioCache[t] = r, r.src = t), r.addEventListener("canplaythrough", i), r.addEventListener("error", n);
                    var o = this;
                    this.audio = r, r.load ? r.load() : n()
                }, i.play = function(t, i) {
                    if (void 0 === t && (t = 0), void 0 === i && (i = 0), !this.url) return null;
                    var n;
                    if (n = this.url == E._tMusic ? e._musicAudio : e._audioCache[this.url], !n) return null;
                    var s;
                    s = V.getItem("audio:" + this.url), R.isConchApp ? s || (s = B.createElement("audio"), s.src = this.url) : this.url == E._tMusic ? (e._initMusicAudio(), s = e._musicAudio, s.src = this.url) : s = s ? s : n.cloneNode(!0);
                    var r = new _e(s);
                    return r.url = this.url, r.loops = i, r.startTime = t, r.play(), E.addChannel(r), r
                }, r(0, i, "duration", function() {
                    var t;
                    return t = e._audioCache[this.url], t ? t.duration : 0
                }), e._initMusicAudio = function() {
                    e._musicAudio || (e._musicAudio || (e._musicAudio = B.createElement("audio")), R.isConchApp || B.document.addEventListener("mousedown", e._makeMusicOK))
                }, e._makeMusicOK = function() {
                    B.document.removeEventListener("mousedown", e._makeMusicOK), e._musicAudio.src ? e._musicAudio.play() : (e._musicAudio.src = "", e._musicAudio.load())
                }, e._audioCache = {}, e._musicAudio = null, e
            }(h),
            ie = function(t) {
                function e() {
                    this.url = null, this.loops = 0, this.startTime = 0 / 0, this.isStopped = !1, this.completeHandler = null, e.__super.call(this)
                }
                s(e, "laya.media.SoundChannel", t);
                var i = e.prototype;
                return i.play = function() {}, i.stop = function() {}, i.pause = function() {}, i.resume = function() {}, i.__runComplete = function(t) {
                    t && t.run()
                }, r(0, i, "volume", function() {
                    return 1
                }, function() {}), r(0, i, "position", function() {
                    return 0
                }), r(0, i, "duration", function() {
                    return 0
                }), e
            }(h),
            ne = function(t) {
                function e() {
                    e.__super.call(this)
                }
                s(e, "laya.media.Sound", t);
                var i = e.prototype;
                return i.load = function() {}, i.play = function(t, e) {
                    return void 0 === t && (t = 0), void 0 === e && (e = 0), null
                }, i.dispose = function() {}, r(0, i, "duration", function() {
                    return 0
                }), e
            }(h),
            se = function(t) {
                function e() {
                    this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, this._disposed = !1, e.__super.call(this)
                }
                s(e, "laya.media.webaudio.WebAudioSound", t);
                var i = e.prototype;
                return i.load = function(t) {
                    var i = this;
                    if (t = L.formatURL(t), this.url = t, this.audioBuffer = e._dataCache[t], this.audioBuffer) return this._loaded(this.audioBuffer), void 0;
                    if (e.e.on("loaded:" + t, this, this._loaded), e.e.on("err:" + t, this, this._err), !e.__loadingSound[t]) {
                        e.__loadingSound[t] = !0;
                        var n = new B.window.XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
                            return i._disposed ? (i._removeLoadEvents(), void 0) : (i.data = n.response, e.buffs.push({
                                buffer: i.data,
                                url: i.url
                            }), e.decode(), void 0)
                        }, n.onerror = function() {
                            i._err()
                        }, n.send()
                    }
                }, i._err = function() {
                    this._removeLoadEvents(), e.__loadingSound[this.url] = !1, this.event("error")
                }, i._loaded = function(t) {
                    this._removeLoadEvents(), this._disposed || (this.audioBuffer = t, e._dataCache[this.url] = this.audioBuffer, this.loaded = !0, this.event("complete"))
                }, i._removeLoadEvents = function() {
                    e.e.off("loaded:" + this.url, this, this._loaded), e.e.off("err:" + this.url, this, this._err)
                }, i.__playAfterLoaded = function() {
                    if (this.__toPlays) {
                        var t, e = 0,
                            i = 0;
                        t = this.__toPlays, i = t.length;
                        var n;
                        for (e = 0; i > e; e++) n = t[e], n[2] && !n[2].isStopped && this.play(n[0], n[1], n[2]);
                        this.__toPlays.length = 0
                    }
                }, i.play = function(t, e, i) {
                    return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i ? i : new de, this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([t, e, i]), this.once("complete", this, this.__playAfterLoaded), this.load(this.url)), i.url = this.url, i.loops = e, i.audioBuffer = this.audioBuffer, i.startTime = t, i.play(), E.addChannel(i), i
                }, i.dispose = function() {
                    this._disposed = !0, delete e._dataCache[this.url], delete e.__loadingSound[this.url], this.audioBuffer = null, this.data = null, this.__toPlays = []
                }, r(0, i, "duration", function() {
                    return this.audioBuffer ? this.audioBuffer.duration : 0
                }), e.decode = function() {
                    e.buffs.length <= 0 || e.isDecoding || (e.isDecoding = !0, e.tInfo = e.buffs.shift(), e.ctx.decodeAudioData(e.tInfo.buffer, e._done, e._fail))
                }, e._done = function(t) {
                    e.e.event("loaded:" + e.tInfo.url, t), e.isDecoding = !1, e.decode()
                }, e._fail = function() {
                    e.e.event("err:" + e.tInfo.url, null), e.isDecoding = !1, e.decode()
                }, e._playEmptySound = function() {
                    if (null != e.ctx) {
                        var t = e.ctx.createBufferSource();
                        t.buffer = e._miniBuffer, t.connect(e.ctx.destination), t.start(0, 0, 0)
                    }
                }, e._unlock = function() {
                    e._unlocked || (e._playEmptySound(), "running" == e.ctx.state && (B.document.removeEventListener("mousedown", e._unlock, !0), B.document.removeEventListener("touchend", e._unlock, !0), e._unlocked = !0))
                }, e.initWebAudio = function() {
                    "running" != e.ctx.state && (e._unlock(), B.document.addEventListener("mousedown", e._unlock, !0), B.document.addEventListener("touchend", e._unlock, !0))
                }, e._dataCache = {}, e.buffs = [], e.isDecoding = !1, e._unlocked = !1, e.tInfo = null, e.__loadingSound = {}, n(e, ["window", function() {
                    return this.window = B.window
                }, "webAudioEnabled", function() {
                    return this.webAudioEnabled = e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext
                }, "ctx", function() {
                    return this.ctx = e.webAudioEnabled ? new(e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext) : void 0
                }, "_miniBuffer", function() {
                    return this._miniBuffer = e.ctx.createBuffer(1, 1, 22050)
                }, "e", function() {
                    return this.e = new h
                }]), e
            }(h),
            re = function(t) {
                function e() {
                    this._responseType = null, this._data = null, e.__super.call(this), this._http = new B.window.XMLHttpRequest
                }
                s(e, "laya.net.HttpRequest", t);
                var i = e.prototype;
                return i.send = function(t, e, i, n, s) {
                    void 0 === i && (i = "get"), void 0 === n && (n = "text"), this._responseType = n, this._data = null;
                    var r = this,
                        o = this._http;
                    if (o.open(i, t, !0), s)
                        for (var a = 0; a < s.length; a++) o.setRequestHeader(s[a++], s[a]);
                    else R.isConchApp || (e && "string" != typeof e ? o.setRequestHeader("Content-Type", "application/json") : o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                    o.responseType = "arraybuffer" !== n ? "text" : "arraybuffer", o.onerror = function(t) {
                        r._onError(t)
                    }, o.onabort = function(t) {
                        r._onAbort(t)
                    }, o.onprogress = function(t) {
                        r._onProgress(t)
                    }, o.onload = function(t) {
                        r._onLoad(t)
                    }, o.send(e)
                }, i._onProgress = function(t) {
                    t && t.lengthComputable && this.event("progress", t.loaded / t.total)
                }, i._onAbort = function() {
                    this.error("Request was aborted by user")
                }, i._onError = function() {
                    this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText)
                }, i._onLoad = function() {
                    var t = this._http,
                        e = void 0 !== t.status ? t.status : 200;
                    200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + t.status + "]" + t.statusText + ":" + t.responseURL)
                }, i.error = function(t) {
                    this.clear(), this.event("error", t)
                }, i.complete = function() {
                    this.clear();
                    var t = !0;
                    try {
                        this._data = "json" === this._responseType ? JSON.parse(this._http.responseText) : "xml" === this._responseType ? K.parseXMLFromString(this._http.responseText) : this._http.response || this._http.responseText
                    } catch (e) {
                        t = !1, this.error(e.message)
                    }
                    t && this.event("complete", this._data instanceof Array ? [this._data] : this._data)
                }, i.clear = function() {
                    var t = this._http;
                    t.onerror = t.onabort = t.onprogress = t.onload = null
                }, r(0, i, "url", function() {
                    return this._http.responseURL
                }), r(0, i, "http", function() {
                    return this._http
                }), r(0, i, "data", function() {
                    return this._data
                }), e
            }(h),
            oe = function(e) {
                function n() {
                    this._data = null, this._class = null, this._url = null, this._type = null, this._cache = !1, this._http = null, this._customParse = !1, n.__super.call(this)
                }
                s(n, "laya.net.Loader", e);
                var o = n.prototype;
                return o.load = function(t, e, i, s, r) {
                    if (void 0 === i && (i = !0), void 0 === r && (r = !1), this._url = t, 0 === t.indexOf("data:image") ? this._type = e = "image" : (this._type = e || (e = this.getTypeFromUrl(t)), t = L.formatURL(t)), this._cache = i, this._data = null, !r && n.loadedMap[t]) return this._data = n.loadedMap[t], this.event("progress", 1), this.event("complete", this._data), void 0;
                    if (s && n.setGroup(t, s), null != n.parserMap[e]) return this._customParse = !0, n.parserMap[e] instanceof laya.utils.Handler ? n.parserMap[e].runWith(this) : n.parserMap[e].call(null, this), void 0;
                    if ("image" === e || "htmlimage" === e || "nativeimage" === e) return this._loadImage(t);
                    if ("sound" === e) return this._loadSound(t);
                    if ("ttf" === e) return this._loadTTF(t);
                    var o;
                    switch (e) {
                        case "atlas":
                        case "plf":
                            o = "json";
                            break;
                        case "font":
                            o = "xml";
                            break;
                        case "pkm":
                            o = "arraybuffer";
                            break;
                        default:
                            o = e
                    }
                    n.preLoadedMap[t] ? this.onLoaded(n.preLoadedMap[t]) : (this._http || (this._http = new re, this._http.on("progress", this, this.onProgress), this._http.on("error", this, this.onError), this._http.on("complete", this, this.onLoaded)), this._http.send(t, null, "get", o))
                }, o.getTypeFromUrl = function(t) {
                    var e = K.getFileExtension(t);
                    return e ? n.typeMap[e] : (console.warn("Not recognize the resources suffix", t), "text")
                }, o._loadTTF = function(t) {
                    t = L.formatURL(t);
                    var e = new I;
                    e.complete = l.create(this, this.onLoaded), e.load(t)
                }, o._loadImage = function(t) {
                    function e() {
                        i.onload = null, i.onerror = null, delete n.imgCache[t]
                    }
                    t = L.formatURL(t);
                    var i, s = this,
                        r = function() {
                            e(), s.onLoaded(i)
                        },
                        o = function() {
                            e(), s.event("error", "Load image failed")
                        };
                    "nativeimage" === this._type ? (i = new B.window.Image, i.crossOrigin = "", i.onload = r, i.onerror = o, i.src = t, n.imgCache[t] = i) : new Te.create(t, {
                        onload: r,
                        onerror: o,
                        onCreate: function(e) {
                            i = e, n.imgCache[t] = e
                        }
                    })
                }, o._loadSound = function(t) {
                    function e() {
                        n(), r.onLoaded(s)
                    }

                    function i() {
                        n(), s.dispose(), r.event("error", "Load sound failed")
                    }

                    function n() {
                        s.offAll()
                    }
                    var s = new E._soundClass,
                        r = this;
                    s.on("complete", this, e), s.on("error", this, i), s.load(t)
                }, o.onProgress = function(t) {
                    "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t)
                }, o.onError = function(t) {
                    this.event("error", t)
                }, o.onLoaded = function(e) {
                    var i = this._type;
                    if ("plf" == i) this.parsePLFData(e), this.complete(e);
                    else if ("image" === i) {
                        var s = new le(e);
                        s.url = this._url, this.complete(s)
                    } else if ("sound" === i || "htmlimage" === i || "nativeimage" === i) this.complete(e);
                    else if ("atlas" === i) {
                        if (!e.src && !e._setContext) {
                            if (!this._data) {
                                if (this._data = e, e.meta && e.meta.image)
                                    for (var r = e.meta.image.split(","), o = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(o), h = a >= 0 ? this._url.substr(0, a + 1) : "", l = 0, c = r.length; c > l; l++) r[l] = t.checkWebp ? h + r[l].replace(".png", ".webp") : h + r[l];
                                else r = t.checkWebp ? [this._url.replace(".json", ".webp")] : [this._url.replace(".json", ".png")];
                                r.reverse(), e.toLoads = r, e.pics = []
                            }
                            return this.event("progress", .3 + 1 / r.length * .6), this._loadImage(r.pop())
                        }
                        if (this._data.pics.push(e), this._data.toLoads.length > 0) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), this._loadImage(this._data.toLoads.pop());
                        var _ = this._data.frames,
                            d = this._url.split("?")[0],
                            f = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : d.substring(0, d.lastIndexOf(".")) + "/",
                            p = this._data.pics,
                            g = L.formatURL(this._url),
                            m = n.atlasMap[g] || (n.atlasMap[g] = []);
                        m.dir = f;
                        var v = 1;
                        if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) {
                            v = parseFloat(this._data.meta.scale);
                            for (var y in _) {
                                var w = _[y],
                                    x = p[w.frame.idx ? w.frame.idx : 0],
                                    T = L.formatURL(f + y);
                                x.scaleRate = v, n.cacheRes(T, le.create(x, w.frame.x, w.frame.y, w.frame.w, w.frame.h, w.spriteSourceSize.x, w.spriteSourceSize.y, w.sourceSize.w, w.sourceSize.h)), n.loadedMap[T].url = T, m.push(T)
                            }
                        } else
                            for (y in _) w = _[y], x = p[w.frame.idx ? w.frame.idx : 0], T = L.formatURL(f + y), n.cacheRes(T, le.create(x, w.frame.x, w.frame.y, w.frame.w, w.frame.h, w.spriteSourceSize.x, w.spriteSourceSize.y, w.sourceSize.w, w.sourceSize.h)), n.loadedMap[T].url = T, m.push(T);
                        delete this._data.pics, this.complete(this._data)
                    } else if ("font" == i) {
                        if (!e.src) return this._data = e, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                        var b = new u;
                        b.parseFont(this._data, e);
                        var C = this._url.split(".fnt")[0].split("/"),
                            M = C[C.length - 1];
                        ge.registerBitmapFont(M, b), this._data = b, this.complete(this._data)
                    } else if ("pkm" == i) {
                        var S = Te.create(e, this._url),
                            P = new le(S);
                        P.url = this._url, this.complete(P)
                    } else this.complete(e)
                }, o.parsePLFData = function(t) {
                    var e, i, s;
                    for (e in t) switch (s = t[e], e) {
                        case "json":
                        case "text":
                            for (i in s) n.preLoadedMap[L.formatURL(i)] = s[i];
                            break;
                        default:
                            for (i in s) n.preLoadedMap[L.formatURL(i)] = s[i]
                    }
                }, o.complete = function(t) {
                    this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [t] : t) : (n._loaders.push(this), n._isWorking || n.checkNext())
                }, o.endLoad = function(t) {
                    t && (this._data = t), this._cache && n.cacheRes(this._url, this._data), this.event("progress", 1), this.event("complete", this.data instanceof Array ? [this.data] : this.data)
                }, r(0, o, "url", function() {
                    return this._url
                }), r(0, o, "data", function() {
                    return this._data
                }), r(0, o, "cache", function() {
                    return this._cache
                }), r(0, o, "type", function() {
                    return this._type
                }), n.checkNext = function() {
                    n._isWorking = !0;
                    for (var t = B.now(), e = t; n._startIndex < n._loaders.length;)
                        if (e = B.now(), n._loaders[n._startIndex].endLoad(), n._startIndex++, B.now() - t > n.maxTimeOut) return console.warn("loader callback cost a long time:" + (B.now() - t) + " url=" + n._loaders[n._startIndex - 1].url), i.timer.frameOnce(1, null, n.checkNext), void 0;
                    n._loaders.length = 0, n._startIndex = 0, n._isWorking = !1
                }, n.clearRes = function(t, e) {
                    void 0 === e && (e = !1), t = L.formatURL(t);
                    var i = n.getAtlas(t);
                    if (i) {
                        for (var s = 0, r = i.length; r > s; s++) {
                            var o = i[s],
                                a = n.getRes(o);
                            delete n.loadedMap[o], a && a.destroy(e)
                        }
                        i.length = 0, delete n.atlasMap[t], delete n.loadedMap[t]
                    } else {
                        var h = n.loadedMap[t];
                        h && (delete n.loadedMap[t], h instanceof laya.resource.Texture && h.bitmap && h.destroy(e))
                    }
                }, n.clearTextureRes = function(t) {
                    t = L.formatURL(t);
                    var e = laya.net.Loader.getAtlas(t),
                        i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
                    i && i.bitmap && (R.isConchApp ? i.bitmap && i.bitmap.source && i.bitmap.source.releaseTexture && i.bitmap.source.releaseTexture() : null == i.bitmap._atlaser && i.bitmap.releaseResource(!0))
                }, n.getRes = function(t) {
                    return n.loadedMap[L.formatURL(t)]
                }, n.getAtlas = function(t) {
                    return n.atlasMap[L.formatURL(t)]
                }, n.cacheRes = function(t, e) {
                    t = L.formatURL(t), null != n.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : n.loadedMap[t] = e
                }, n.setGroup = function(t, e) {
                    n.groupMap[e] || (n.groupMap[e] = []), n.groupMap[e].push(t)
                }, n.clearResByGroup = function(t) {
                    if (n.groupMap[t]) {
                        var e = n.groupMap[t],
                            i = 0,
                            s = e.length;
                        for (i = 0; s > i; i++) n.clearRes(e[i]);
                        e.length = 0
                    }
                }, n.TEXT = "text", n.JSON = "json", n.XML = "xml", n.BUFFER = "arraybuffer", n.IMAGE = "image", n.SOUND = "sound", n.ATLAS = "atlas", n.FONT = "font", n.TTF = "ttf", n.PLF = "plf", n.PKM = "pkm", n.typeMap = {
                    png: "image",
                    jpg: "image",
                    jpeg: "image",
                    txt: "text",
                    json: "json",
                    xml: "xml",
                    als: "atlas",
                    atlas: "atlas",
                    mp3: "sound",
                    ogg: "sound",
                    wav: "sound",
                    part: "json",
                    fnt: "font",
                    pkm: "pkm",
                    ttf: "ttf",
                    plf: "plf"
                }, n.parserMap = {}, n.groupMap = {}, n.maxTimeOut = 100, n.loadedMap = {}, n.preLoadedMap = {}, n.atlasMap = {}, n._loaders = [], n._isWorking = !1, n._startIndex = 0, n.imgCache = {}, n
            }(h),
            ae = function(t) {
                function e() {
                    this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, this._failRes = {}, e.__super.call(this);
                    for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = []
                }
                var r;
                s(e, "laya.net.LoaderManager", t);
                var o = e.prototype;
                return o.create = function(t, e, i, n, s, r, o, a) {
                    function h(t) {
                        d++, t.progress = 1, d === _ && e && e.run()
                    }

                    function u(t, e) {
                        t.progress = e;
                        for (var i = 0, n = 0; _ > n; n++) {
                            var s = c[n];
                            i += s.progress
                        }
                        var r = i / _;
                        f.runWith(r)
                    }
                    if (void 0 === r && (r = 1), void 0 === o && (o = !0), t instanceof Array) {
                        var c = t,
                            _ = c.length,
                            d = 0;
                        if (i) var f = l.create(i.caller, i.method, i.args, !1);
                        for (var p = 0; _ > p; p++) {
                            var g = c[p];
                            "string" == typeof g && (g = c[p] = {
                                url: g
                            }), g.progress = 0
                        }
                        for (p = 0; _ > p; p++) {
                            g = c[p];
                            var m = i ? l.create(null, u, [g], !1) : null,
                                v = i || e ? l.create(null, h, [g]) : null;
                            this._create(g.url, v, m, g.clas || n, g.params || s, g.priority || r, o, g.group || a)
                        }
                        return !0
                    }
                    return this._create(t, e, i, n, s, r, o, a)
                }, o._create = function(t, n, s, r, o, a, h, u) {
                    function c(e) {
                        d && !d.destroyed && e && d.onAsynLoaded.call(d, t, e, o), n && n.run(), i.loader.event(t)
                    }
                    void 0 === a && (a = 1), void 0 === h && (h = !0);
                    var _ = L.formatURL(t),
                        d = this.getRes(_);
                    if (d) !d.hasOwnProperty("loaded") || d.loaded ? (s && s.runWith(1), n && n.run()) : n && i.loader._createListener(t, n.caller, n.method, n.args, !0, !1);
                    else {
                        var f = K.getFileExtension(t),
                            p = e.createMap[f];
                        if (!p) throw new Error("LoaderManager:unknown file(" + t + ") extension with: " + f + ".");
                        r || (r = p[0]);
                        var g = p[1];
                        "atlas" == f ? this.load(t, n, s, g, a, h) : (r === le && (g = "htmlimage"), d = r ? new r : null, d.hasOwnProperty("_loaded") && (d._loaded = !1), d._setUrl(t), u && d._setGroup(u), this._createLoad(d, t, l.create(null, c), s, g, a, !1, u, !0), h && this.cacheRes(_, d))
                    }
                    return d
                }, o.load = function(t, n, s, o, a, h, l, u) {
                    var c = this;
                    if (void 0 === a && (a = 1), void 0 === h && (h = !0), void 0 === u && (u = !1), t instanceof Array) return this._loadAssets(t, n, s, o, a, h, l);
                    var _ = oe.getRes(t);
                    if (null != _) i.timer.frameOnce(1, null, function() {
                        s && s.runWith(1), n && n.runWith(_), c._loaderCount || c.event("complete")
                    });
                    else {
                        var d = e._resMap[t];
                        d ? (n && d._createListener("complete", n.caller, n.method, n.args, !1, !1), s && d._createListener("progress", s.caller, s.method, s.args, !1, !1)) : (d = this._infoPool.length ? this._infoPool.pop() : new r, d.url = t, d.type = o, d.cache = h, d.group = l, d.ignoreCache = u, n && d.on("complete", n.caller, n.method, n.args), s && d.on("progress", s.caller, s.method, s.args), e._resMap[t] = d, a = a < this._maxPriority ? a : this._maxPriority - 1, this._resInfos[a].push(d), this._next())
                    }
                    return this
                }, o._createLoad = function(t, n, s, o, a, h, l, u, c) {
                    var _ = this;
                    if (void 0 === h && (h = 1), void 0 === l && (l = !0), void 0 === c && (c = !1), n instanceof Array) return this._loadAssets(n, s, o, a, h, l, u);
                    var d = oe.getRes(n);
                    if (null != d) i.timer.frameOnce(1, null, function() {
                        o && o.runWith(1), s && s.runWith(d), _._loaderCount || _.event("complete")
                    });
                    else {
                        var f = e._resMap[n];
                        f ? (s && f._createListener("complete", s.caller, s.method, s.args, !1, !1), o && f._createListener("progress", o.caller, o.method, o.args, !1, !1)) : (f = this._infoPool.length ? this._infoPool.pop() : new r, f.url = n, f.clas = t, f.type = a, f.cache = l, f.group = u, f.ignoreCache = c, s && f.on("complete", s.caller, s.method, s.args), o && f.on("progress", o.caller, o.method, o.args), e._resMap[n] = f, h = h < this._maxPriority ? h : this._maxPriority - 1, this._resInfos[h].push(f), this._next())
                    }
                    return this
                }, o._next = function() {
                    if (!(this._loaderCount >= this.maxLoader)) {
                        for (var t = 0; t < this._maxPriority; t++)
                            for (var e = this._resInfos[t]; e.length > 0;) {
                                var i = e.shift();
                                if (i) return this._doLoad(i)
                            }
                        this._loaderCount || this.event("complete")
                    }
                }, o._doLoad = function(t) {
                    function e(e) {
                        i.offAll(), i._data = null, i._customParse = !1, n._loaders.push(i), n._endLoad(t, e instanceof Array ? [e] : e), n._loaderCount--, n._next()
                    }
                    this._loaderCount++;
                    var i = this._loaders.length ? this._loaders.pop() : new oe;
                    i.on("complete", null, e), i.on("progress", null, function(e) {
                        t.event("progress", e)
                    }), i.on("error", null, function() {
                        e(null)
                    });
                    var n = this;
                    i._class = t.clas, i.load(t.url, t.type, t.cache, t.group, t.ignoreCache)
                }, o._endLoad = function(t, n) {
                    var s = t.url;
                    if (null == n) {
                        var r = this._failRes[s] || 0;
                        if (r < this.retryNum) return console.warn("[warn]Retry to load:", s), this._failRes[s] = r + 1, i.timer.once(this.retryDelay, this, this._addReTry, [t], !1), void 0;
                        console.warn("[error]Failed to load:", s), this.event("error", s)
                    }
                    this._failRes[s] && (this._failRes[s] = 0), delete e._resMap[s], t.event("complete", n), t.offAll(), this._infoPool.push(t)
                }, o._addReTry = function(t) {
                    this._resInfos[this._maxPriority - 1].push(t), this._next()
                }, o.clearRes = function(t, e) {
                    void 0 === e && (e = !1), oe.clearRes(t, e)
                }, o.getRes = function(t) {
                    return oe.getRes(t)
                }, o.cacheRes = function(t, e) {
                    oe.cacheRes(t, e)
                }, o.clearTextureRes = function(t) {
                    oe.clearTextureRes(t)
                }, o.setGroup = function(t, e) {
                    oe.setGroup(t, e)
                }, o.clearResByGroup = function(t) {
                    oe.clearResByGroup(t)
                }, o.clearUnLoaded = function() {
                    for (var t = 0; t < this._maxPriority; t++) {
                        for (var i = this._resInfos[t], n = i.length - 1; n > -1; n--) {
                            var s = i[n];
                            s && (s.offAll(), this._infoPool.push(s))
                        }
                        i.length = 0
                    }
                    this._loaderCount = 0, e._resMap = {}
                }, o.cancelLoadByUrls = function(t) {
                    if (t)
                        for (var e = 0, i = t.length; i > e; e++) this.cancelLoadByUrl(t[e])
                }, o.cancelLoadByUrl = function(t) {
                    for (var i = 0; i < this._maxPriority; i++)
                        for (var n = this._resInfos[i], s = n.length - 1; s > -1; s--) {
                            var r = n[s];
                            r && r.url === t && (n[s] = null, r.offAll(), this._infoPool.push(r))
                        }
                    e._resMap[t] && delete e._resMap[t]
                }, o._loadAssets = function(t, e, i, n, s, r, o) {
                    function a(t, i) {
                        c++, t.progress = 1, i || (f = !1), c === u && e && e.runWith(f)
                    }

                    function h(t, e) {
                        if (null != i) {
                            t.progress = e;
                            for (var n = 0, s = 0; s < d.length; s++) {
                                var r = d[s];
                                n += r.size * r.progress
                            }
                            var o = n / _;
                            i.runWith(o)
                        }
                    }
                    void 0 === s && (s = 1), void 0 === r && (r = !0);
                    for (var u = t.length, c = 0, _ = 0, d = [], f = !0, p = 0; u > p; p++) {
                        var g = t[p];
                        "string" == typeof g && (g = {
                            url: g,
                            type: n,
                            size: 1,
                            priority: s
                        }), g.size || (g.size = 1), g.progress = 0, _ += g.size, d.push(g);
                        var m = i ? l.create(null, h, [g], !1) : null,
                            v = e || i ? l.create(null, a, [g]) : null;
                        this.load(g.url, v, m, g.type, g.priority || 1, r, g.group || o)
                    }
                    return this
                }, e.cacheRes = function(t, e) {
                    oe.cacheRes(t, e)
                }, e._resMap = {}, n(e, ["createMap", function() {
                    return this.createMap = {
                        atlas: [null, "atlas"]
                    }
                }]), e.__init$ = function() {
                    r = function(t) {
                        function e() {
                            this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, this.clas = null, e.__super.call(this)
                        }
                        return s(e, "", t), e
                    }(h)
                }, e
            }(h),
            he = (function(t) {
                function e(t) {
                    e.__super.call(this), t || (t = [.3, .59, .11, 0, 0, .3, .59, .11, 0, 0, .3, .59, .11, 0, 0, 0, 0, 0, 1, 0]), this._mat = new Float32Array(16), this._alpha = new Float32Array(4);
                    for (var i = 0, n = 0, s = 0; 20 > s; s++) s % 5 != 4 ? this._mat[i++] = t[s] : this._alpha[n++] = t[s];
                    this._action = o.createFilterAction(32), this._action.data = this
                }
                s(e, "laya.filters.ColorFilter", t);
                var n = e.prototype;
                return i.imps(n, {
                    "laya.filters.IFilter": !0
                }), n.callNative = function(t) {
                    t._$P.cf = this;
                    t.conchModel && t.conchModel.setFilterMatrix && t.conchModel.setFilterMatrix(this._mat, this._alpha)
                }, r(0, n, "type", function() {
                    return 32
                }), r(0, n, "action", function() {
                    return this._action
                }), e
            }(w), function(t) {
                function e(t, i, n) {
                    this._endian = null, this._stamp = 0 / 0, this._socket = null, this._connected = !1, this._addInputPosition = 0, this._input = null, this._output = null, this.timeout = 0, this.objectEncoding = 0, this.disableInput = !1, this._byteClass = null, this.protocols = [], void 0 === i && (i = 0), e.__super.call(this), this._byteClass = n ? n : N, this.endian = "bigEndian", this.timeout = 2e4, this._addInputPosition = 0, t && i > 0 && 65535 > i && this.connect(t, i)
                }
                s(e, "laya.net.Socket", t);
                var i = e.prototype;
                return i.connect = function(t, e) {
                    var i = "ws://" + t + ":" + e;
                    i = "https:" == B.window.location.protocol ? "wss://" + t + ":" + e : "ws://" + t + ":" + e, this.connectByUrl(i)
                }, i.connectByUrl = function(t) {
                    var e = this;
                    null != this._socket && this.close(), this._socket && this.cleanSocket(), this._socket = this.protocols && 0 != this.protocols.length ? new B.window.WebSocket(t, this.protocols) : new B.window.WebSocket(t), this._socket.binaryType = "arraybuffer", this._output = new this._byteClass, this._output.endian = this.endian, this._input = new this._byteClass, this._input.endian = this.endian, this._addInputPosition = 0, this._socket.onopen = function(t) {
                        e._onOpen(t)
                    }, this._socket.onmessage = function(t) {
                        e._onMessage(t)
                    }, this._socket.onclose = function(t) {
                        e._onClose(t)
                    }, this._socket.onerror = function(t) {
                        e._onError(t)
                    }
                }, i.cleanSocket = function() {
                    try {
                        this._socket.close()
                    } catch (t) {}
                    this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null, this._socket = null
                }, i.close = function() {
                    if (null != this._socket) try {
                        this._socket.close()
                    } catch (t) {}
                }, i._onOpen = function(t) {
                    this._connected = !0, this.event("open", t)
                }, i._onMessage = function(t) {
                    if (t && t.data) {
                        var e = t.data;
                        if (this.disableInput && e) return this.event("message", e), void 0;
                        this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), this._addInputPosition = 0);
                        var i = this._input.pos;
                        !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e)
                    }
                }, i._onClose = function(t) {
                    this._connected = !1, this.event("close", t)
                }, i._onError = function(t) {
                    this.event("error", t)
                }, i.send = function(t) {
                    this._socket.send(t)
                }, i.flush = function() {
                    if (this._output && this._output.length > 0) {
                        var t;
                        try {
                            this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length))
                        } catch (e) {
                            t = e
                        }
                        this._output.endian = this.endian, this._output.clear(), t && this.event("error", t)
                    }
                }, r(0, i, "input", function() {
                    return this._input
                }), r(0, i, "output", function() {
                    return this._output
                }), r(0, i, "connected", function() {
                    return this._connected
                }), r(0, i, "endian", function() {
                    return this._endian
                }, function(t) {
                    this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t)
                }), e.LITTLE_ENDIAN = "littleEndian", e.BIG_ENDIAN = "bigEndian", e
            }(h), function(t) {
                function e() {
                    this.worker = null, e.__super.call(this);
                    var t = this;
                    this.worker = new B.window.Worker(e.workerPath), this.worker.onmessage = function(e) {
                        t.workerMessage(e.data)
                    }
                }
                s(e, "laya.net.WorkerLoader", t);
                var i = e.prototype;
                return i.workerMessage = function(t) {
                    if (t) switch (t.type) {
                        case "Image":
                            this.imageLoaded(t);
                            break;
                        case "Msg":
                            this.event("image_msg", t.msg)
                    }
                }, i.imageLoaded = function(t) {
                    if (t && t.buffer && t.buffer.length < 10) return e._enable = !1, this._myTrace("buffer lost when postmessage ,disable workerloader"), this.event(t.url, null), this.event("image_err", t.url + "\n" + t.msg), void 0;
                    if (!t.dataType) return this.event(t.url, null), this.event("image_err", t.url + "\n" + t.msg), void 0;
                    var i, n, s;
                    switch (t.dataType) {
                        case "buffer":
                            i = new ye("2D"), n = i.source.getContext("2d"), s = n.createImageData(t.width, t.height), s.data.set(t.buffer), i.size(s.width, s.height), n.putImageData(s, 0, 0), i.memorySize = 0;
                            break;
                        case "imagedata":
                            i = new ye("2D"), n = i.source.getContext("2d"), s = t.imagedata, i.size(s.width, s.height), n.putImageData(s, 0, 0), s = t.imagedata, i.memorySize = 0;
                            break;
                        case "imageBitmap":
                            s = t.imageBitmap, R.isWebGL ? i = s : (i = new ye("2D"), n = i.source.getContext("2d"), i.size(s.width, s.height), n.drawImage(s, 0, 0), i.src = t.url)
                    }
                    R.isWebGL && (i = new laya.webgl.resource.WebGLImage(i, t.url)), this.event(t.url, i)
                }, i._myTrace = function() {
                    var t = arguments,
                        e = [],
                        i = 0,
                        n = t.length;
                    for (i = 0; n > i; i++) e.push(t[i]);
                    this.event("image_msg", e.join(" "))
                }, i.loadImage = function(t) {
                    var e;
                    e = {}, e.type = "load", e.url = t, this.worker.postMessage(e)
                }, i._loadImage = function(t) {
                    function i() {
                        laya.net.WorkerLoader.I.off(t, n, s)
                    }
                    var n = this;
                    if (!e._enable || t.toLowerCase().indexOf(".png") < 0 || -1 != t.indexOf("generalElf/d3/")) return e._preLoadFun.call(n, t), void 0;
                    t = L.formatURL(t);
                    var s = function(s) {
                        i(), s ? n.onLoaded(s) : e._preLoadFun.call(n, t)
                    };
                    laya.net.WorkerLoader.I.on(t, n, s), laya.net.WorkerLoader.I.loadImage(t)
                }, r(1, e, "enable", function() {
                    return e._enable
                }, function(t) {
                    (!e.disableJSDecode || B.window.createImageBitmap) && (e._enable = t, e._enable && null == e._preLoadFun && (e._enable = e.__init__()))
                }), e.__init__ = function() {
                    return null != e._preLoadFun ? !1 : B.window.Worker ? (e._preLoadFun = oe.prototype._loadImage, oe.prototype._loadImage = e.prototype._loadImage, e.I || (e.I = new e), !0) : !1
                }, e.workerSupported = function() {
                    return B.window.Worker ? !0 : !1
                }, e.IMAGE_LOADED = "image_loaded", e.IMAGE_ERR = "image_err", e.IMAGE_MSG = "image_msg", e.I = null, e._preLoadFun = null, e._enable = !1, e.workerPath = "libs/worker.js", e.disableJSDecode = !0, e
            }(h), function(t) {
                function e() {
                    e.__super.call(this), this._$1__id = ++e._uniqueIDCounter, this.__loaded = !0, this._destroyed = !1, this._referenceCount = 0, e._idResourcesMap[this.id] = this, this._released = !0, this.lock = !1, this._memorySize = 0, this._lastUseFrameCount = -1, O.currentResourceManager && O.currentResourceManager.addResource(this)
                }
                s(e, "laya.resource.Resource", t);
                var n = e.prototype;
                return i.imps(n, {
                    "laya.resource.ICreateResource": !0,
                    "laya.resource.IDispose": !0
                }), n._setUrl = function(t) {
                    if (this._url !== t) {
                        var i;
                        this._url && (i = e._urlResourcesMap[this._url], i.splice(i.indexOf(this), 1), 0 === i.length && delete e._urlResourcesMap[this._url]), t && (i = e._urlResourcesMap[t], i || (e._urlResourcesMap[t] = i = []), i.push(this)), this._url = t
                    }
                }, n._getGroup = function() {
                    return this._group
                }, n._setGroup = function(t) {
                    if (this._group !== t) {
                        var i;
                        this._group && (i = e._groupResourcesMap[this._group], i.splice(i.indexOf(this), 1), 0 === i.length && delete e._groupResourcesMap[this._group]), t && (i = e._groupResourcesMap[t], i || (e._groupResourcesMap[t] = i = []), i.push(this)), this._group = t
                    }
                }, n._addReference = function() {
                    this._referenceCount++
                }, n._removeReference = function() {
                    this._referenceCount--
                }, n._clearReference = function() {
                    this._referenceCount = 0
                }, n._endLoaded = function() {
                    this.__loaded = !0, this.event("loaded", this)
                }, n.recreateResource = function() {
                    this.completeCreate()
                }, n.disposeResource = function() {}, n.activeResource = function(t) {
                    void 0 === t && (t = !1), this._lastUseFrameCount = X.loopCount, !this._destroyed && this.__loaded && (this._released || t) && this.recreateResource()
                }, n.releaseResource = function(t) {
                    return void 0 === t && (t = !1), !t && this.lock ? !1 : !this._released || t ? (this.disposeResource(), this._released = !0, this._lastUseFrameCount = -1, this.event("released", this), !0) : !1
                }, n.onAsynLoaded = function() {
                    throw new Error("Resource: must override this function!")
                }, n.destroy = function() {
                    if (!this._destroyed) {
                        null !== this._resourceManager && this._resourceManager.removeResource(this), this._destroyed = !0, this.lock = !1, this.releaseResource(), delete e._idResourcesMap[this.id];
                        var t;
                        this._url && (t = e._urlResourcesMap[this._url], t && (t.splice(t.indexOf(this), 1), 0 === t.length && delete e._urlResourcesMap[this.url]), oe.clearRes(this._url), this.__loaded || o.cancelLoadByUrl(this._url)), this._group && (t = e._groupResourcesMap[this._group], t.splice(t.indexOf(this), 1), 0 === t.length && delete e._groupResourcesMap[this.url])
                    }
                }, n.completeCreate = function() {
                    this._released = !1, this.event("recovered", this)
                }, n.dispose = function() {
                    this.destroy()
                }, r(0, n, "memorySize", function() {
                    return this._memorySize
                }, function(t) {
                    var e = t - this._memorySize;
                    this._memorySize = t, this.resourceManager && this.resourceManager.addSize(e)
                }), r(0, n, "_loaded", null, function(t) {
                    this.__loaded = t
                }), r(0, n, "loaded", function() {
                    return this.__loaded
                }), r(0, n, "id", function() {
                    return this._$1__id
                }), r(0, n, "destroyed", function() {
                    return this._destroyed
                }), r(0, n, "group", function() {
                    return this._getGroup()
                }, function(t) {
                    this._setGroup(t)
                }), r(0, n, "resourceManager", function() {
                    return this._resourceManager
                }), r(0, n, "url", function() {
                    return this._url
                }), r(0, n, "released", function() {
                    return this._released
                }), r(0, n, "referenceCount", function() {
                    return this._referenceCount
                }), e.getResourceByID = function(t) {
                    return e._idResourcesMap[t]
                }, e.getResourceByURL = function(t, i) {
                    return void 0 === i && (i = 0), e._urlResourcesMap[t][i]
                }, e.getResourceCountByURL = function(t) {
                    return e._urlResourcesMap[t].length
                }, e.destroyUnusedResources = function(t) {
                    var i;
                    if (t) {
                        var n = e._groupResourcesMap[t];
                        if (n)
                            for (var s = n.slice(), r = 0, o = s.length; o > r; r++) i = s[r], i.lock || 0 !== i._referenceCount || i.destroy()
                    } else
                        for (var a in e._idResourcesMap) i = e._idResourcesMap[a], i.lock || 0 !== i._referenceCount || i.destroy()
                }, e._uniqueIDCounter = 0, e._idResourcesMap = {}, e._urlResourcesMap = {}, e._groupResourcesMap = {}, e
            }(h)),
            le = function(e) {
                function n(t, e) {
                    this.offsetX = 0, this.offsetY = 0, this.sourceWidth = 0, this.sourceHeight = 0, this._w = 0, this._h = 0, this._uvID = 0, this._atlasID = -1, this.scaleRate = 1, n.__super.call(this), t && null != t._addReference && t._addReference(), this.setTo(t, e)
                }
                s(n, "laya.resource.Texture", e);
                var a = n.prototype;
                return a._setUrl = function(t) {
                    this.url = t
                }, a.setTo = function(e, i) {
                    if (e instanceof t.HTMLElement) {
                        var s = ye.create("2D", e);
                        this.bitmap = s
                    } else this.bitmap = e;
                    if (this.uv = i || n.DEF_UV, e) {
                        this._w = e.width, this._h = e.height, this.sourceWidth = this.sourceWidth || this._w, this.sourceHeight = this.sourceHeight || this._h, this._loaded = this._w > 0;
                        var r = this;
                        if (this._loaded) o.addToAtlas && o.addToAtlas(r);
                        else {
                            var a = e;
                            a instanceof laya.resource.HTMLImage && a.image && a.image.addEventListener("load", function() {
                                o.addToAtlas && o.addToAtlas(r)
                            }, !1)
                        }
                    }
                }, a.active = function() {
                    this.bitmap && this.bitmap.activeResource()
                }, a.destroy = function(t) {
                    if (void 0 === t && (t = !1), this.bitmap && this.bitmap.referenceCount > 0) {
                        var e = this.bitmap;
                        t ? (R.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), this.bitmap = null, e.dispose(), e._clearReference()) : (e._removeReference(), 0 == e.referenceCount && (R.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), this.bitmap = null, e.dispose())), this.url && this === i.loader.getRes(this.url) && i.loader.clearRes(this.url, t), this._loaded = !1
                    }
                }, a.load = function(t) {
                    var e = this;
                    this._loaded = !1, t = L.customFormat(t);
                    var i = this.bitmap || (this.bitmap = Te.create(t));
                    i && i._addReference();
                    var n = this;
                    i.onload = function() {
                        i.onload = null, n._loaded = !0, e.sourceWidth = e._w = i.width, e.sourceHeight = e._h = i.height, n.event("loaded", this), o.addToAtlas && o.addToAtlas(n)
                    }
                }, a.addTextureToAtlas = function() {
                    o.addTextureToAtlas(this)
                }, a.getPixels = function(t, e, i, n) {
                    if (R.isConchApp) {
                        var s = this.bitmap;
                        if (s.source && s.source.getImageData) {
                            var r = s.source.getImageData(t, e, i, n),
                                a = new Uint8Array(r);
                            return Array.from(a)
                        }
                        return null
                    }
                    if (R.isWebGL) return o.getTexturePixels(this, t, e, i, n);
                    B.canvas.size(i, n), B.canvas.clear(), B.context.drawTexture(this, -t, -e, this.width, this.height, 0, 0);
                    var h = B.context.getImageData(0, 0, i, n);
                    return h.data
                }, a.onAsynLoaded = function(t, e) {
                    e && e._addReference(), this.setTo(e, this.uv)
                }, r(0, a, "source", function() {
                    return this.bitmap ? (this.bitmap.activeResource(), this.bitmap.source) : null
                }), r(0, a, "loaded", function() {
                    return this._loaded
                }), r(0, a, "released", function() {
                    return this.bitmap ? this.bitmap.released : !0
                }), r(0, a, "width", function() {
                    return this._w ? this._w : this.uv && this.uv !== n.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width
                }, function(t) {
                    this._w = t, this.sourceWidth || (this.sourceWidth = t)
                }), r(0, a, "repeat", function() {
                    return R.isWebGL && this.bitmap ? this.bitmap.repeat : !0
                }, function(t) {
                    t && R.isWebGL && this.bitmap && (this.bitmap.repeat = t, t && (this.bitmap.enableMerageInAtlas = !1))
                }), r(0, a, "height", function() {
                    return this._h ? this._h : this.uv && this.uv !== n.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height
                }, function(t) {
                    this._h = t, this.sourceHeight || (this.sourceHeight = t)
                }), r(0, a, "isLinearSampling", function() {
                    return R.isWebGL ? 9728 != this.bitmap.minFifter : !0
                }, function(t) {
                    !t && R.isWebGL && (t || -1 != this.bitmap.minFifter || -1 != this.bitmap.magFifter || (this.bitmap.minFifter = 9728, this.bitmap.magFifter = 9728, this.bitmap.enableMerageInAtlas = !1))
                }), n.moveUV = function(t, e, i) {
                    for (var n = 0; 8 > n; n += 2) i[n] += t, i[n + 1] += e;
                    return i
                }, n.create = function(t, e, i, s, r, a, h, l, u) {
                    void 0 === a && (a = 0), void 0 === h && (h = 0), void 0 === l && (l = 0), void 0 === u && (u = 0);
                    var c = t instanceof laya.resource.Texture,
                        _ = c ? t.uv : n.DEF_UV,
                        d = c ? t.bitmap : t,
                        f = o.isAtlas(d);
                    if (f) {
                        var p = d._atlaser,
                            g = t._atlasID;
                        if (-1 == g) throw new Error("create texture error");
                        d = p._inAtlasTextureBitmapValue[g], _ = p._inAtlasTextureOriUVValue[g]
                    }
                    var m = new n(d, null);
                    d.width && e + s > d.width && (s = d.width - e), d.height && i + r > d.height && (r = d.height - i), m.width = s, m.height = r, m.offsetX = a, m.offsetY = h, m.sourceWidth = l || s, m.sourceHeight = u || r;
                    var v = 1 / d.width,
                        y = 1 / d.height;
                    e *= v, i *= y, s *= v, r *= y;
                    var w = m.uv[0],
                        x = m.uv[1],
                        T = m.uv[4],
                        b = m.uv[5],
                        C = T - w,
                        M = b - x,
                        S = n.moveUV(_[0], _[1], [e, i, e + s, i, e + s, i + r, e, i + r]);
                    m.uv = [w + S[0] * C, x + S[1] * M, T - (1 - S[2]) * C, x + S[3] * M, T - (1 - S[4]) * C, b - (1 - S[5]) * M, w + S[6] * C, b - (1 - S[7]) * M], f && m.addTextureToAtlas();
                    var P = d.scaleRate;
                    return P && 1 != P ? (m.sourceWidth /= P, m.sourceHeight /= P, m.width /= P, m.height /= P, m.scaleRate = P, m.offsetX /= P, m.offsetY /= P) : m.scaleRate = 1, m
                }, n.createFromTexture = function(t, e, i, s, r) {
                    var o = t.scaleRate;
                    1 != o && (e *= o, i *= o, s *= o, r *= o);
                    var a = P.TEMP.setTo(e - t.offsetX, i - t.offsetY, s, r),
                        h = a.intersection(n._rect1.setTo(0, 0, t.width, t.height), n._rect2);
                    if (!h) return null;
                    var l = n.create(t, h.x, h.y, h.width, h.height, h.x - a.x, h.y - a.y, s, r);
                    return l.bitmap._removeReference(), l
                }, n.DEF_UV = [0, 0, 1, 0, 1, 1, 0, 1], n.INV_UV = [0, 1, 1, 1, 1, 0, 0, 0], n._rect1 = new P, n._rect2 = new P, n
            }(h),
            ue = function(t) {
                function e() {
                    this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, e.__super.call(this)
                }
                var n;
                s(e, "laya.utils.TimeLine", t);
                var o = e.prototype;
                return o.to = function(t, e, i, n, s) {
                    return void 0 === s && (s = 0), this._create(t, e, i, n, s, !0)
                }, o.from = function(t, e, i, n, s) {
                    return void 0 === s && (s = 0), this._create(t, e, i, n, s, !1)
                }, o._create = function(t, e, i, s, r, o) {
                    var a = V.getItemByClass("tweenData", n);
                    return a.isTo = o, a.type = 0, a.target = t, a.duration = i, a.data = e, a.startTime = this._startTime + r, a.endTime = a.startTime + a.duration, a.ease = s, this._startTime = Math.max(a.endTime, this._startTime), this._tweenDataList.push(a), this._startTimeSort = !0, this._endTimeSort = !0, this
                }, o.addLabel = function(t, e) {
                    var i = V.getItemByClass("tweenData", n);
                    return i.type = 1, i.data = t, i.endTime = i.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), this._labelDic[t] = i, this._tweenDataList.push(i), this
                }, o.removeLabel = function(t) {
                    if (this._labelDic && this._labelDic[t]) {
                        var e = this._labelDic[t];
                        if (e) {
                            var i = this._tweenDataList.indexOf(e);
                            i > -1 && this._tweenDataList.splice(i, 1)
                        }
                        delete this._labelDic[t]
                    }
                }, o.gotoTime = function(t) {
                    function e(t, e) {
                        return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0
                    }
                    if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                        var i, n;
                        for (var s in this._firstTweenDic)
                            if (n = this._firstTweenDic[s])
                                for (var r in n) n.diyTarget.hasOwnProperty(r) && (n.diyTarget[r] = n[r]);
                        for (s in this._tweenDic) i = this._tweenDic[s], i.clear(), delete this._tweenDic[s];
                        this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = B.now();
                        var o;
                        null == this._endTweenDataList || this._endTimeSort ? (this._endTimeSort = !1, this._endTweenDataList = o = this._tweenDataList.concat(), o.sort(e)) : o = this._endTweenDataList;
                        for (var a, h = 0, u = o.length; u > h; h++)
                            if (a = o[h], 0 == a.type) {
                                if (!(t >= a.endTime)) break;
                                this._index = Math.max(this._index, h + 1);
                                var c = a.data;
                                if (a.isTo)
                                    for (var _ in c) a.target[_] = c[_]
                            } for (h = 0, u = this._tweenDataList.length; u > h; h++) a = this._tweenDataList[h], 0 == a.type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, h + 1), this._gidIndex++, i = V.getItemByClass("tween", j), i._create(a.target, a.data, a.duration, a.ease, l.create(this, this._animComplete, [this._gidIndex]), 0, !1, a.isTo, !0, !1), i.setStartTime(this._currTime - (t - a.startTime)), i._updateEase(this._currTime), i.gid = this._gidIndex, this._tweenDic[this._gidIndex] = i)
                    }
                }, o.gotoLabel = function(t) {
                    if (null != this._labelDic) {
                        var e = this._labelDic[t];
                        e && this.gotoTime(e.startTime)
                    }
                }, o.pause = function() {
                    i.timer.clear(this, this._update)
                }, o.resume = function() {
                    this.play(this._currTime, this._loopKey)
                }, o.play = function(t, e) {
                    function n(t, e) {
                        return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0
                    }
                    if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                        if (this._startTimeSort) {
                            this._startTimeSort = !1, this._tweenDataList.sort(n);
                            for (var s = 0, r = this._tweenDataList.length; r > s; s++) {
                                var o = this._tweenDataList[s];
                                if (null != o && 0 == o.type) {
                                    var a = o.target,
                                        h = a.$_GID || (a.$_GID = K.getGID()),
                                        l = null;
                                    null == this._firstTweenDic[h] ? (l = {}, l.diyTarget = a, this._firstTweenDic[h] = l) : l = this._firstTweenDic[h];
                                    for (var u in o.data) null == l[u] && (l[u] = a[u])
                                }
                            }
                        }
                        "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, this._lastTime = B.now(), i.timer.frameLoop(1, this, this._update)
                    }
                }, o._update = function() {
                    if (this._currTime >= this._startTime) {
                        if (!this._loopKey) {
                            for (var t in this._tweenDic) s = this._tweenDic[t], s.complete();
                            return this._complete(), this.pause(), void 0
                        }
                        if (this._complete(), !this._tweenDataList) return;
                        this.gotoTime(0)
                    }
                    var e = B.now(),
                        i = e - this._lastTime,
                        n = this._currTime += i * this.scale;
                    this._lastTime = e;
                    for (t in this._tweenDic) s = this._tweenDic[t], s._updateEase(n);
                    var s;
                    if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                        var r = this._tweenDataList[this._index];
                        n >= r.startTime && (this._index++, 0 == r.type ? (this._gidIndex++, s = V.getItemByClass("tween", j), s._create(r.target, r.data, r.duration, r.ease, l.create(this, this._animComplete, [this._gidIndex]), 0, !1, r.isTo, !0, !1), s.setStartTime(n), s.gid = this._gidIndex, this._tweenDic[this._gidIndex] = s, s._updateEase(n)) : this.event("label", r.data))
                    }
                }, o._animComplete = function(t) {
                    var e = this._tweenDic[t];
                    e && delete this._tweenDic[t]
                }, o._complete = function() {
                    this.event("complete")
                }, o.reset = function() {
                    var t;
                    if (this._labelDic)
                        for (t in this._labelDic) delete this._labelDic[t];
                    var e;
                    for (t in this._tweenDic) e = this._tweenDic[t], e.clear(), delete this._tweenDic[t];
                    for (t in this._firstTweenDic) delete this._firstTweenDic[t];
                    if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                        var n = 0,
                            s = 0;
                        for (s = this._tweenDataList.length, n = 0; s > n; n++) this._tweenDataList[n] && this._tweenDataList[n].destroy()
                    }
                    this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, this.scale = 1, i.timer.clear(this, this._update)
                }, o.destroy = function() {
                    this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, this._firstTweenDic = null
                }, r(0, o, "index", function() {
                    return this._frameIndex
                }, function(t) {
                    this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3)
                }), r(0, o, "total", function() {
                    return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total
                }), e.to = function(t, i, n, s, r) {
                    return void 0 === r && (r = 0), (new e).to(t, i, n, s, r)
                }, e.from = function(t, i, n, s, r) {
                    return void 0 === r && (r = 0), (new e).from(t, i, n, s, r)
                }, e.__init$ = function() {
                    n = function() {
                        function t() {
                            this.type = 0, this.isTo = !0, this.startTime = 0 / 0, this.endTime = 0 / 0, this.target = null, this.duration = 0 / 0, this.ease = null, this.data = null
                        }
                        s(t, "");
                        var e = t.prototype;
                        return e.destroy = function() {
                            this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, V.recover("tweenData", this)
                        }, t
                    }()
                }, e
            }(h),
            ce = function(e) {
                function a() {
                    this._transform = null, this._tfChanged = !1, this._x = 0, this._y = 0, this._width = 0, this._height = 0, this._repaint = 1, this._mouseEnableState = 0, this._zOrder = 0, this._graphics = null, this._renderType = 0, this._optimizeScrollRect = !1, this._texture = null, this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, this.viewport = null, a.__super.call(this), this._style = c.EMPTY
                }
                s(a, "laya.display.Sprite", e);
                var h = a.prototype;
                return i.imps(h, {
                    "laya.display.ILayout": !0
                }), h.createConchModel = function() {
                    return new ConchNode
                }, h.destroy = function(t) {
                    void 0 === t && (t = !0), this._releaseMem(), e.prototype.destroy.call(this, t), this._style && this._style.destroy(), this._transform && this._transform.destroy(), this._transform = null, this._style = null, this._graphics = null
                }, h.updateZOrder = function() {
                    K.updateOrder(this._childs) && this.repaint()
                }, h.reCache = function() {
                    this._$P.cacheCanvas && (this._$P.cacheCanvas.reCache = !0), this._repaint = 1
                }, h.setBounds = function(t) {
                    this._set$P("uBounds", t)
                }, h.getBounds = function() {
                    return this._$P.mBounds || this._set$P("mBounds", new P), P._getWrapRec(this._boundPointsToParent(), this._$P.mBounds)
                }, h.getSelfBounds = function() {
                    return this._$P.uBounds ? this._$P.uBounds : (this._$P.mBounds || this._set$P("mBounds", new P), P._getWrapRec(this._getBoundPointsM(!1), this._$P.mBounds))
                }, h._boundPointsToParent = function(t) {
                    void 0 === t && (t = !1);
                    var e = 0,
                        i = 0;
                    this._style && (e = this._style._tf.translateX, i = this._style._tf.translateY, t = t || 0 !== this._style._tf.rotate, this._style.scrollRect && (e += this._style.scrollRect.x, i += this._style.scrollRect.y));
                    var n = this._getBoundPointsM(t);
                    if (!n || n.length < 1) return n;
                    if (8 != n.length && (n = t ? b.scanPList(n) : P._getWrapRec(n, P.TEMP)._getBoundPoints()), !this.transform) return K.transPointList(n, this._x - e, this._y - i), n;
                    var s = S.TEMP,
                        r = 0,
                        o = n.length;
                    for (r = 0; o > r; r += 2) s.x = n[r], s.y = n[r + 1], this.toParentPoint(s), n[r] = s.x, n[r + 1] = s.y;
                    return n
                }, h.getGraphicBounds = function(t) {
                    return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : P.TEMP.setTo(0, 0, 0, 0)
                }, h._getBoundPointsM = function(t) {
                    if (void 0 === t && (t = !1), this._$P.uBounds) return this._$P.uBounds._getBoundPoints();
                    if (this._$P.temBM || this._set$P("temBM", []), this.scrollRect) {
                        var e = K.clearArray(this._$P.temBM),
                            i = P.TEMP;
                        return i.copyFrom(this.scrollRect), K.concatArray(e, i._getBoundPoints()), e
                    }
                    var n, s, r, o = this._graphics ? this._graphics.getBoundPoints() : K.clearArray(this._$P.temBM);
                    r = this._childs;
                    for (var a = 0, h = r.length; h > a; a++) n = r[a], n instanceof laya.display.Sprite && 1 == n.visible && (s = n._boundPointsToParent(t), s && (o = o ? K.concatArray(o, s) : s));
                    return o
                }, h.getStyle = function() {
                    return this._style === c.EMPTY && (this._style = new c), this._style
                }, h.setStyle = function(t) {
                    this._style = t
                }, h._adjustTransform = function() {
                    this._tfChanged = !1;
                    var t, e = this._style,
                        i = e._tf,
                        n = i.scaleX,
                        s = i.scaleY;
                    if (i.rotate || 1 !== n || 1 !== s || i.skewX || i.skewY) {
                        t = this._transform || (this._transform = M.create()), t.bTransform = !0;
                        var r = .0174532922222222 * (i.rotate - i.skewX),
                            o = .0174532922222222 * (i.rotate + i.skewY),
                            a = Math.cos(o),
                            h = Math.sin(o),
                            l = Math.sin(r),
                            u = Math.cos(r);
                        return t.a = n * a, t.b = n * h, t.c = -s * l, t.d = s * u, t.tx = t.ty = 0, t
                    }
                    return this._transform && this._transform.destroy(), this._transform = null, this._renderType &= -5, t
                }, h.pos = function(t, e, i) {
                    if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                        if (this.destroyed) return this;
                        if (i) {
                            this._x = t, this._y = e, this.conchModel && this.conchModel.pos(this._x, this._y);
                            var n = this._parent;
                            n && 0 === n._repaint && (n._repaint = 1, n.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
                        } else this.x = t, this.y = e
                    }
                    return this
                }, h.pivot = function(t, e) {
                    return this.pivotX = t, this.pivotY = e, this
                }, h.size = function(t, e) {
                    return this.width = t, this.height = e, this
                }, h.scale = function(t, e, i) {
                    void 0 === i && (i = !1);
                    var n = this.getStyle(),
                        s = n._tf;
                    if (s.scaleX != t || s.scaleY != e) {
                        if (this.destroyed) return this;
                        if (i) {
                            n.setScale(t, e), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e), this._renderType |= 4;
                            var r = this._parent;
                            r && 0 === r._repaint && (r._repaint = 1, r.parentRepaint())
                        } else this.scaleX = t, this.scaleY = e
                    }
                    return this
                }, h.skew = function(t, e) {
                    return this.skewX = t, this.skewY = e, this
                }, h.render = function(t, e, i) {
                    X.spriteCount++, k.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), this._repaint = 0
                }, h.drawToCanvas = function(t, e, i, n) {
                    if (R.isConchNode) {
                        var s = ye.create("2D"),
                            r = new D(t, e, s);
                        return r.ctx.setCanvasType(1), this.conchModel.drawToCanvas(s.source, i, n), s
                    }
                    return o.drawToCanvas(this, this._renderType, t, e, i, n)
                }, h.customRender = function() {
                    this._renderType |= 1024
                }, h._applyFilters = function() {
                    if (!R.isWebGL) {
                        var t;
                        if (t = this._$P.filters, t && !(t.length < 1))
                            for (var e = 0, i = t.length; i > e; e++) t[e].action.apply(this._$P.cacheCanvas)
                    }
                }, h._isHaveGlowFilter = function() {
                    var t = 0,
                        e = 0;
                    if (this.filters)
                        for (t = 0; t < this.filters.length; t++)
                            if (8 == this.filters[t].type) return !0;
                    for (t = 0, e = this._childs.length; e > t; t++)
                        if (this._childs[t]._isHaveGlowFilter()) return !0;
                    return !1
                }, h.localToGlobal = function(t, e) {
                    void 0 === e && (e = !1), e === !0 && (t = new S(t.x, t.y));
                    for (var n = this; n && n != i.stage;) t = n.toParentPoint(t), n = n.parent;
                    return t
                }, h.globalToLocal = function(t, e) {
                    void 0 === e && (e = !1), e && (t = new S(t.x, t.y));
                    for (var n = this, s = []; n && n != i.stage;) s.push(n), n = n.parent;
                    for (var r = s.length - 1; r >= 0;) n = s[r], t = n.fromParentPoint(t), r--;
                    return t
                }, h.toParentPoint = function(t) {
                    if (!t) return t;
                    t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), t.x += this._x, t.y += this._y;
                    var e = this._style.scrollRect;
                    return e && (t.x -= e.x, t.y -= e.y), t
                }, h.fromParentPoint = function(t) {
                    if (!t) return t;
                    t.x -= this._x, t.y -= this._y;
                    var e = this._style.scrollRect;
                    return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), t.x += this.pivotX, t.y += this.pivotY, t
                }, h.on = function(t, i, n, s) {
                    return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(t, i, n, s, !1)) : e.prototype.on.call(this, t, i, n, s)
                }, h.once = function(t, i, n, s) {
                    return 1 !== this._mouseEnableState && this.isMouseEvent(t) ? (this.mouseEnabled = !0, this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(t, i, n, s, !0)) : e.prototype.once.call(this, t, i, n, s)
                }, h._$2__onDisplay = function() {
                    if (1 !== this._mouseEnableState) {
                        var t = this;
                        for (t = t.parent; t && 1 !== t._mouseEnableState && !t._getBit(2);) t.mouseEnabled = !0, t._setBit(2, !0), t = t.parent
                    }
                }, h.loadImage = function(t, e, i, n, s, r) {
                    function o(t) {
                        a.destroyed || (a.size(e + (n || t.width), i + (s || t.height)), a.repaint(), r && r.runWith(t))
                    }
                    var a = this;
                    return void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), this.graphics.loadImage(t, e, i, n, s, o), this
                }, h.repaint = function() {
                    this.conchModel && this.conchModel.repaint && this.conchModel.repaint(), 0 === this._repaint && (this._repaint = 1, this.parentRepaint()), this._$P && this._$P.maskParent && this._$P.maskParent.repaint()
                }, h._needRepaint = function() {
                    return 0 !== this._repaint && this._$P.cacheCanvas && this._$P.cacheCanvas.reCache
                }, h._childChanged = function(t) {
                    this._childs.length ? this._renderType |= 2048 : this._renderType &= -2049, t && this._get$P("hasZorder") && i.timer.callLater(this, this.updateZOrder), this.repaint()
                }, h.parentRepaint = function() {
                    var t = this._parent;
                    t && 0 === t._repaint && (t._repaint = 1, t.parentRepaint())
                }, h.startDrag = function(t, e, i, n, s, r, o) {
                    void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === n && (n = 300), void 0 === r && (r = !1), void 0 === o && (o = .92), this._$P.dragging || this._set$P("dragging", new z), this._$P.dragging.start(this, t, e, i, n, s, r, o)
                }, h.stopDrag = function() {
                    this._$P.dragging && this._$P.dragging.stop()
                }, h._releaseMem = function() {
                    if (this._$P) {
                        var t = this._$P.cacheCanvas;
                        t && t.ctx && (V.recover("RenderContext", t.ctx), t.ctx.canvas.size(0, 0), t.ctx = null);
                        var e = this._$P._filterCache;
                        e && (e.destroy(), e.recycle(), this._set$P("_filterCache", null)), this._$P._isHaveGlowFilter && this._set$P("_isHaveGlowFilter", !1), this._$P._isHaveGlowFilter = null
                    }
                }, h._setDisplay = function(t) {
                    t || this._releaseMem(), e.prototype._setDisplay.call(this, t)
                }, h.hitTestPoint = function(t, e) {
                    var i = this.globalToLocal(S.TEMP.setTo(t, e));
                    t = i.x, e = i.y;
                    var n = this._$P.hitArea ? this._$P.hitArea : this._width > 0 && this._height > 0 ? P.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds();
                    return n.contains(t, e)
                }, h.getMousePoint = function() {
                    return this.globalToLocal(S.TEMP.setTo(i.stage.mouseX, i.stage.mouseY))
                }, h._getWords = function() {
                    return null
                }, h._addChildsToLayout = function(t) {
                    var e = this._getWords();
                    if (null == e && 0 == this._childs.length) return !1;
                    if (e)
                        for (var i = 0, n = e.length; n > i; i++) t.push(e[i]);
                    return this._childs.forEach(function(e) {
                        e._style._enableLayout() && e._addToLayout(t)
                    }), !0
                }, h._addToLayout = function(t) {
                    this._style.absolute || (this._style.block ? t.push(this) : this._addChildsToLayout(t) && (this.x = this.y = 0))
                }, h._isChar = function() {
                    return !1
                }, h._getCSSStyle = function() {
                    return this._style.getCSSStyle()
                }, h._setAttributes = function(t, e) {
                    switch (t) {
                        case "x":
                            this.x = parseFloat(e);
                            break;
                        case "y":
                            this.y = parseFloat(e);
                            break;
                        case "width":
                            this.width = parseFloat(e);
                            break;
                        case "height":
                            this.height = parseFloat(e);
                            break;
                        default:
                            this[t] = e
                    }
                }, h._layoutLater = function() {
                    this.parent && this.parent._layoutLater()
                }, r(0, h, "optimizeScrollRect", function() {
                    return this._optimizeScrollRect
                }, function(t) {
                    this._optimizeScrollRect != t && (this._optimizeScrollRect = t, this.conchModel && this.conchModel.optimizeScrollRect(t))
                }), r(0, h, "customRenderEnable", null, function(t) {
                    if (t && (this._renderType |= 1024, R.isConchNode)) {
                        a.CustomList.push(this);
                        var e = new ye("2d");
                        e._setContext(new CanvasRenderingContext2D), this.customContext = new D(0, 0, e), e.context.setCanvasType && e.context.setCanvasType(2), this.conchModel.custom(e.context)
                    }
                }), r(0, h, "cacheAsBitmap", function() {
                    return "none" !== this.cacheAs
                }, function(t) {
                    this.cacheAs = t ? this._$P.hasFilter ? "none" : "normal" : "none"
                }), r(0, h, "cacheAs", function() {
                    return null == this._$P.cacheCanvas ? "none" : this._$P.cacheCanvas.type
                }, function(t) {
                    var e = this._$P.cacheCanvas;
                    if (t !== (e ? e.type : "none")) {
                        if ("none" !== t) this._getBit(1) || this._setUpNoticeType(1), e || (e = this._set$P("cacheCanvas", V.getItemByClass("cacheCanvas", Object))), e.type = t, e.reCache = !0, this._renderType |= 16, "bitmap" == t && this.conchModel && this.conchModel.cacheAs(1), this._set$P("cacheForFilters", !1);
                        else if (this._$P._mask);
                        else if (this._$P.hasFilter) this._set$P("cacheForFilters", !0);
                        else {
                            if (e) {
                                var i = e;
                                i && i.ctx && (V.recover("RenderContext", i.ctx), i.ctx.canvas.size(0, 0), i.ctx = null), V.recover("cacheCanvas", e)
                            }
                            this._$P.cacheCanvas = null, this._renderType &= -17, this.conchModel && this.conchModel.cacheAs(0)
                        }
                        this.repaint()
                    }
                }), r(0, h, "zOrder", function() {
                    return this._zOrder
                }, function(t) {
                    this._zOrder != t && (this._zOrder = t, this.conchModel && this.conchModel.setZOrder && this.conchModel.setZOrder(t), this._parent && (t && this._parent._set$P("hasZorder", !0), i.timer.callLater(this._parent, this.updateZOrder)))
                }), r(0, h, "rotation", function() {
                    return this._style._tf.rotate
                }, function(t) {
                    var e = this.getStyle();
                    if (e._tf.rotate !== t) {
                        e.setRotate(t), this._tfChanged = !0, this.conchModel && this.conchModel.rotate(t), this._renderType |= 4;
                        var i = this._parent;
                        i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
                    }
                }), r(0, h, "width", function() {
                    return this.autoSize ? this.getSelfBounds().width : this._width
                }, function(t) {
                    this._width !== t && (this._width = t, this.conchModel && this.conchModel.size(t, this._height), this.repaint())
                }), r(0, h, "x", function() {
                    return this._x
                }, function(t) {
                    if (this._x !== t) {
                        if (this.destroyed) return;
                        this._x = t, this.conchModel && this.conchModel.pos(t, this._y);
                        var e = this._parent;
                        e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
                    }
                }), r(0, h, "globalScaleY", function() {
                    for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleY, e = e.parent;
                    return t
                }), r(0, h, "hitArea", function() {
                    return this._$P.hitArea
                }, function(t) {
                    this._set$P("hitArea", t)
                }), r(0, h, "staticCache", function() {
                    return this._$P.staticCache
                }, function(t) {
                    this._set$P("staticCache", t), t || this.reCache()
                }), r(0, h, "texture", function() {
                    return this._texture
                }, function(t) {
                    this._texture != t && (this._texture = t, this.graphics.cleanByTexture(t, 0, 0))
                }), r(0, h, "y", function() {
                    return this._y
                }, function(t) {
                    if (this._y !== t) {
                        if (this.destroyed) return;
                        this._y = t, this.conchModel && this.conchModel.pos(this._x, t);
                        var e = this._parent;
                        e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, this._$P.maskParent.parentRepaint())
                    }
                }), r(0, h, "height", function() {
                    return this.autoSize ? this.getSelfBounds().height : this._height
                }, function(t) {
                    this._height !== t && (this._height = t, this.conchModel && this.conchModel.size(this._width, t), this.repaint())
                }), r(0, h, "blendMode", function() {
                    return this._style.blendMode
                }, function(t) {
                    this.getStyle().blendMode = t, this.conchModel && this.conchModel.blendMode(t), t && "source-over" != t ? this._renderType |= 8 : this._renderType &= -9, this.parentRepaint()
                }), r(0, h, "scaleX", function() {
                    return this._style._tf.scaleX
                }, function(t) {
                    var e = this.getStyle();
                    if (e._tf.scaleX !== t) {
                        e.setScaleX(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e._tf.scaleY), this._renderType |= 4;
                        var i = this._parent;
                        i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
                    }
                }), r(0, h, "scaleY", function() {
                    return this._style._tf.scaleY
                }, function(t) {
                    var e = this.getStyle();
                    if (e._tf.scaleY !== t) {
                        e.setScaleY(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(e._tf.scaleX, t), this._renderType |= 4;
                        var i = this._parent;
                        i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
                    }
                }), r(0, h, "stage", function() {
                    return i.stage
                }), r(0, h, "skewX", function() {
                    return this._style._tf.skewX
                }, function(t) {
                    var e = this.getStyle();
                    if (e._tf.skewX !== t) {
                        e.setSkewX(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(t, e._tf.skewY), this._renderType |= 4;
                        var i = this._parent;
                        i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
                    }
                }), r(0, h, "scrollRect", function() {
                    return this._style.scrollRect
                }, function(t) {
                    this.getStyle().scrollRect = t, this.repaint(), t ? (this._renderType |= 128, this.conchModel && this.conchModel.scrollRect(t.x, t.y, t.width, t.height)) : (this._renderType &= -129, this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(64) : this.conchModel.removeType(128)))
                }), r(0, h, "skewY", function() {
                    return this._style._tf.skewY
                }, function(t) {
                    var e = this.getStyle();
                    if (e._tf.skewY !== t) {
                        e.setSkewY(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(e._tf.skewX, t), this._renderType |= 4;
                        var i = this._parent;
                        i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint())
                    }
                }), r(0, h, "transform", function() {
                    return this._tfChanged ? this._adjustTransform() : this._transform
                }, function(t) {
                    this._tfChanged = !1, this._transform = t, t && (this._x = t.tx, this._y = t.ty, t.tx = t.ty = 0, this.conchModel && this.conchModel.transform(t.a, t.b, t.c, t.d, this._x, this._y)), t ? this._renderType |= 4 : (this._renderType &= -5, this.conchModel && this.conchModel.removeType(4)), this.parentRepaint()
                }), r(0, h, "pivotX", function() {
                    return this._style._tf.translateX
                }, function(t) {
                    this.getStyle().setTranslateX(t), this.conchModel && this.conchModel.pivot(t, this._style._tf.translateY), this.repaint()
                }), r(0, h, "pivotY", function() {
                    return this._style._tf.translateY
                }, function(t) {
                    this.getStyle().setTranslateY(t), this.conchModel && this.conchModel.pivot(this._style._tf.translateX, t), this.repaint()
                }), r(0, h, "alpha", function() {
                    return this._style.alpha
                }, function(t) {
                    this._style && this._style.alpha !== t && (t = 0 > t ? 0 : t > 1 ? 1 : t, this.getStyle().alpha = t, this.conchModel && this.conchModel.alpha(t), 1 !== t ? this._renderType |= 2 : this._renderType &= -3, this.parentRepaint())
                }), r(0, h, "visible", function() {
                    return this._style.visible
                }, function(t) {
                    this._style && this._style.visible !== t && (this.getStyle().visible = t, this.conchModel && this.conchModel.visible(t), this.parentRepaint())
                }), r(0, h, "graphics", function() {
                    return this._graphics || (this.graphics = o.createGraphics())
                }, function(t) {
                    this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._renderType &= -2, this._renderType |= 512, t._sp = this, this.conchModel && this.conchModel.graphics(this._graphics)) : (this._renderType &= -513, this._renderType &= -2, this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(256) : this.conchModel.removeType(512))), this.repaint()
                }), r(0, h, "filters", function() {
                    return this._$P.filters
                }, function(t) {
                    t && 0 === t.length && (t = null), this._$P.filters != t && (this._set$P("filters", t ? t.slice() : null), R.isConchApp && (this.conchModel && (a.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(16) : this.conchModel.removeType(32)), this._$P.filters && 1 == this._$P.filters.length && this._$P.filters[0].callNative(this)), R.isWebGL && (t && t.length ? this._renderType |= 32 : this._renderType &= -33), t && t.length > 0 ? (this._getBit(1) || this._setUpNoticeType(1), R.isWebGL && 1 == t.length && t[0] instanceof laya.filters.ColorFilter || ("bitmap" != this.cacheAs && (R.isConchNode || (this.cacheAs = "bitmap"), this._set$P("cacheForFilters", !0)), this._set$P("hasFilter", !0))) : (this._set$P("hasFilter", !1), this._$P.cacheForFilters && "bitmap" == this.cacheAs && (this.cacheAs = "none")), this.repaint())
                }), r(0, h, "parent", e.prototype._$get_parent, function(t) {
                    i.superSet(Z, this, "parent", t), t && this._getBit(2) && this._$2__onDisplay()
                }), r(0, h, "mask", function() {
                    return this._$P._mask
                }, function(t) {
                    t && this.mask && this.mask._$P.maskParent || (t ? (this.cacheAs = "bitmap", this._set$P("_mask", t), t._set$P("maskParent", this)) : (this.mask && this.mask._set$P("maskParent", null), this._set$P("_mask", t), this.cacheAs = "none"), this.conchModel && this.conchModel.mask(t ? t.conchModel : null), this._renderType |= 64, this.parentRepaint())
                }), r(0, h, "mouseEnabled", function() {
                    return this._mouseEnableState > 1
                }, function(t) {
                    this._mouseEnableState = t ? 2 : 1
                }), r(0, h, "globalScaleX", function() {
                    for (var t = 1, e = this; e && e !== i.stage;) t *= e.scaleX, e = e.parent;
                    return t
                }), r(0, h, "mouseX", function() {
                    return this.getMousePoint().x
                }), r(0, h, "mouseY", function() {
                    return this.getMousePoint().y
                }), a.fromImage = function(t) {
                    return (new a).loadImage(t)
                }, a.CustomList = [], n(a, ["RUNTIMEVERION", function() {
                    return this.RUNTIMEVERION = t.conch ? conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-") + 1) : ""
                }]), a
            }(Z),
            _e = function(t) {
                function e(t) {
                    this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), this._onEnd = K.bind(this.__onEnd, this), this._resumePlay = K.bind(this.__resumePlay, this), t.addEventListener("ended", this._onEnd), this._audio = t
                }
                s(e, "laya.media.h5audio.AudioSoundChannel", t);
                var n = e.prototype;
                return n.__onEnd = function() {
                    return 1 == this.loops ? (this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), this.event("complete"), void 0) : (this.loops > 0 && this.loops--, this.startTime = 0, this.play(), void 0)
                }, n.__resumePlay = function() {
                    this._audio && this._audio.removeEventListener("canplay", this._resumePlay);
                    try {
                        this._audio.currentTime = this.startTime, B.container.appendChild(this._audio), this._audio.play()
                    } catch (t) {
                        this.event("error")
                    }
                }, n.play = function() {
                    this.isStopped = !1;
                    try {
                        this._audio.playbackRate = E.playbackRate, this._audio.currentTime = this.startTime
                    } catch (t) {
                        return this._audio.addEventListener("canplay", this._resumePlay), void 0
                    }
                    E.addChannel(this), B.container.appendChild(this._audio), "play" in this._audio && this._audio.play()
                }, n.stop = function() {
                    this.isStopped = !0, E.removeChannel(this), this.completeHandler = null, this._audio && ("pause" in this._audio && R.isConchApp && this._audio.stop(), this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), B.onIE || this._audio != ee._musicAudio && V.recover("audio:" + this.url, this._audio), B.removeElement(this._audio), this._audio = null)
                }, n.pause = function() {
                    this.isStopped = !0, E.removeChannel(this), "pause" in this._audio && this._audio.pause()
                }, n.resume = function() {
                    this._audio && (this.isStopped = !1, E.addChannel(this), "play" in this._audio && this._audio.play())
                }, r(0, n, "position", function() {
                    return this._audio ? this._audio.currentTime : 0
                }), r(0, n, "duration", function() {
                    return this._audio ? this._audio.duration : 0
                }), r(0, n, "volume", function() {
                    return this._audio ? this._audio.volume : 1
                }, function(t) {
                    this._audio && (this._audio.volume = t)
                }), e
            }(ie),
            de = function(t) {
                function e() {
                    this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, this.context = se.ctx, e.__super.call(this), this._onPlayEnd = K.bind(this.__onPlayEnd, this), this.gain = this.context.createGain ? this.context.createGain() : this.context.createGainNode()
                }
                s(e, "laya.media.webaudio.WebAudioSoundChannel", t);
                var n = e.prototype;
                return n.play = function() {
                    if (E.addChannel(this), this.isStopped = !1, this._clearBufferSource(), this.audioBuffer) {
                        var t = this.context,
                            e = this.gain,
                            i = t.createBufferSource();
                        this.bufferSource = i, i.buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), this._startTime = B.now(), this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(this._volume, this.context.currentTime, .001) : this.gain.gain.value = this._volume, 0 == this.loops && (i.loop = !0), i.playbackRate.setTargetAtTime ? i.playbackRate.setTargetAtTime(E.playbackRate, this.context.currentTime, .1) : i.playbackRate.value = E.playbackRate, i.start(0, this.startTime), this._currentTime = 0
                    }
                }, n.__onPlayEnd = function() {
                    return 1 == this.loops ? (this.completeHandler && (i.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), this.event("complete"), void 0) : (this.loops > 0 && this.loops--, this.startTime = 0, this.play(), void 0)
                }, n._clearBufferSource = function() {
                    if (this.bufferSource) {
                        var t = this.bufferSource;
                        t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), this.bufferSource = null
                    }
                }, n._tryClearBuffer = function(t) {
                    if (B.onMac) try {
                        t.buffer = se._miniBuffer
                    } catch (i) {
                        e._tryCleanFailed = !0
                    } else try {
                        t.buffer = null
                    } catch (i) {
                        e._tryCleanFailed = !0
                    }
                }, n.stop = function() {
                    this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), this.isStopped = !0, E.removeChannel(this), this.completeHandler = null, E.autoReleaseSound && i.timer.once(5e3, null, E.disposeSoundIfNotUsed, [this.url], !1)
                }, n.pause = function() {
                    this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), this.gain && this.gain.disconnect(), this.isStopped = !0, E.removeChannel(this), E.autoReleaseSound && i.timer.once(5e3, null, E.disposeSoundIfNotUsed, [this.url], !1)
                }, n.resume = function() {
                    this.startTime = this._pauseTime, this.play()
                }, r(0, n, "position", function() {
                    return this.bufferSource ? (B.now() - this._startTime) / 1e3 + this.startTime : 0
                }), r(0, n, "duration", function() {
                    return this.audioBuffer ? this.audioBuffer.duration : 0
                }), r(0, n, "volume", function() {
                    return this._volume
                }, function(t) {
                    this.isStopped || (this._volume = t, this.gain.gain.setTargetAtTime ? this.gain.gain.setTargetAtTime(t, this.context.currentTime, .001) : this.gain.gain.value = t)
                }), e._tryCleanFailed = !1, e
            }(ie),
            fe = function(t) {
                function e() {
                    e.__super.call(this), this._w = 0, this._h = 0
                }
                s(e, "laya.resource.Bitmap", t);
                var i = e.prototype;
                return r(0, i, "width", function() {
                    return this._w
                }), r(0, i, "height", function() {
                    return this._h
                }), r(0, i, "source", function() {
                    return this._source
                }), e
            }(he),
            pe = function(t) {
                function e() {
                    this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._controlNode = null, this._actionName = null, e.__super.call(this), this._interval = a.animationInterval, this._setUpNoticeType(1)
                }
                s(e, "laya.display.AnimationPlayerBase", t);
                var i = e.prototype;
                return i.play = function(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === n && (n = !0), this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
                }, i._getFrameByLabel = function(t) {
                    var e = 0;
                    for (e = 0; e < this._count; e++)
                        if (this._labels[e] && this._labels[e].indexOf(t) >= 0) return e;
                    return 0
                }, i._frameLoop = function() {
                    if (this._isReverse) {
                        if (this._index--, this._index < 0) {
                            if (!this.loop) return this._index = 0, this.stop(), this.event("complete"), void 0;
                            2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, this.event("complete")
                        }
                    } else if (this._index++, this._index >= this._count) {
                        if (!this.loop) return this._index--, this.stop(), this.event("complete"), void 0;
                        2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, this._isReverse = !0) : this._index = 0, this.event("complete")
                    }
                    this.index = this._index
                }, i._setControlNode = function(t) {
                    this._controlNode && (this._controlNode.off("display", this, this._checkResumePlaying), this._controlNode.off("undisplay", this, this._checkResumePlaying)), this._controlNode = t, t && t != this && (t.on("display", this, this._checkResumePlaying), t.on("undisplay", this, this._checkResumePlaying))
                }, i._setDisplay = function(e) {
                    t.prototype._setDisplay.call(this, e), this._checkResumePlaying()
                }, i._checkResumePlaying = function() {
                    this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop))
                }, i.stop = function() {
                    this._isPlaying = !1, this.clearTimer(this, this._frameLoop)
                }, i.addLabel = function(t, e) {
                    this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), this._labels[e].push(t)
                }, i.removeLabel = function(t) {
                    if (t) {
                        if (this._labels)
                            for (var e in this._labels) this._removeLabelFromLabelList(this._labels[e], t)
                    } else this._labels = null
                }, i._removeLabelFromLabelList = function(t, e) {
                    if (t)
                        for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1)
                }, i.gotoAndStop = function(t) {
                    this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop()
                }, i._displayToIndex = function() {}, i.clear = function() {
                    this.stop(), this._labels = null
                }, r(0, i, "interval", function() {
                    return this._interval
                }, function(t) {
                    this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0))
                }), r(0, i, "isPlaying", function() {
                    return this._isPlaying
                }), r(0, i, "index", function() {
                    return this._index
                }, function(t) {
                    if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t])
                        for (var e = this._labels[t], i = 0, n = e.length; n > i; i++) this.event("label", e[i])
                }), r(0, i, "count", function() {
                    return this._count
                }), e.WRAP_POSITIVE = 0, e.WRAP_REVERSE = 1, e.WRAP_PINGPONG = 2, e
            }(ce),
            ge = function(t) {
                function e() {
                    this._clipPoint = null, this._currBitmapFont = null, this._text = null, this._isChanged = !1, this._typesetChanged = !1, this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], this._startX = 0 / 0, this._startY = 0 / 0, this._lastVisibleLineIndex = -1, this._words = null, this._charSize = {}, this.underline = !1, this._underlineColor = null, e.__super.call(this), this.overflow = e.VISIBLE, this._style = new te(this), this._style.wordWrap = !1
                }
                s(e, "laya.display.Text", t);
                var a = e.prototype;
                return a.destroy = function(e) {
                    void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._lines = null, this._words && (this._words.length = 0, this._words = null)
                }, a._getBoundPointsM = function(t) {
                    void 0 === t && (t = !1);
                    var e = P.TEMP;
                    return e.setTo(0, 0, this.width, this.height), e._getBoundPoints()
                }, a.getGraphicBounds = function(t) {
                    void 0 === t && (t = !1);
                    var e = P.TEMP;
                    return e.setTo(0, 0, this.width, this.height), e
                }, a._getCSSStyle = function() {
                    return this._style
                }, a.lang = function(t) {
                    if (t = e.langPacks && e.langPacks[t] ? e.langPacks[t] : t, arguments.length < 2) this._text = t;
                    else {
                        for (var i = 0, n = arguments.length; n > i; i++) t = t.replace("{" + i + "}", arguments[i + 1]);
                        this._text = t
                    }
                }, a._isPassWordMode = function() {
                    var t = this._style,
                        e = t.password;
                    return "prompt" in this && this.prompt == this._text && (e = !1), e
                }, a._getPassWordTxt = function(t) {
                    var e, i = t.length;
                    e = "";
                    for (var n = i; n > 0; n--) e += "●";
                    return e
                }, a.renderText = function(t, e) {
                    var i = this.graphics;
                    i.clear(!0);
                    var n = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (B.onIPhone ? laya.display.Text._fontFamilyMap[this.font] || this.font : this.font);
                    B.context.font = n;
                    var s = this.padding,
                        r = s[3],
                        o = "left",
                        a = this._lines,
                        h = this.leading + this._charSize.height,
                        l = this._currBitmapFont;
                    l && (h = this.leading + l.getMaxHeight());
                    var u = s[0];
                    if (!l && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (o = "right", r = this._width - s[1]) : "center" == this.align && (o = "center", r = .5 * this._width + s[3] - s[1])), this._height > 0) {
                        var c = this._textHeight > this._height ? "top" : this.valign;
                        "middle" === c ? u = .5 * (this._height - e * h) + s[0] - s[2] : "bottom" === c && (u = this._height - e * h - s[2])
                    }
                    var _ = this._style;
                    if (l && l.autoScaleSize) var d = l.fontSize / this.fontSize;
                    if (this._clipPoint)
                        if (i.save(), l && l.autoScaleSize) {
                            var f = 0,
                                p = 0;
                            f = this._width ? this._width - s[3] - s[1] : this._textWidth, p = this._height ? this._height - s[0] - s[2] : this._textHeight, f *= d, p *= d, i.clipRect(s[3], s[0], f, p)
                        } else i.clipRect(s[3], s[0], this._width ? this._width - s[3] - s[1] : this._textWidth, this._height ? this._height - s[0] - s[2] : this._textHeight);
                    var g = _.password;
                    "prompt" in this && this.prompt == this._text && (g = !1);
                    for (var m = 0, v = 0, y = Math.min(this._lines.length, e + t) || 1, w = t; y > w; w++) {
                        var x, T = a[w];
                        if (g) {
                            var b = T.length;
                            T = "";
                            for (var C = b; C > 0; C--) T += "●"
                        }
                        if (m = r - (this._clipPoint ? this._clipPoint.x : 0), v = u + h * w - (this._clipPoint ? this._clipPoint.y : 0), this.underline && this.drawUnderline(o, m, v, w), l) {
                            var M = this.width;
                            l.autoScaleSize && (M = this.width * d), l.drawText(T, this, m, v, this.align, M)
                        } else R.isWebGL ? (this._words || (this._words = []), x = this._words.length > w - t ? this._words[w - t] : new J, x.setText(T)) : x = T, _.stroke ? i.fillBorderText(x, m, v, n, this.color, _.strokeColor, _.stroke, o) : i.fillText(x, m, v, n, this.color, o)
                    }
                    if (l && l.autoScaleSize) {
                        var S = 1 / d;
                        this.scale(S, S)
                    }
                    this._clipPoint && i.restore(), this._startX = r, this._startY = u
                }, a.drawUnderline = function(t, e, i, n) {
                    var s = this._lineWidths[n];
                    switch (t) {
                        case "center":
                            e -= s / 2;
                            break;
                        case "right":
                            e -= s;
                            break;
                        case "left":
                    }
                    i += this._charSize.height, this._graphics.drawLine(e, i, e + s, i, this.underlineColor || this.color, 1)
                }, a.typeset = function() {
                    if (this._isChanged = !1, !this._text) return this._typesetChanged = !1, this._clipPoint = null, this._textWidth = this._textHeight = 0, this.graphics.clear(!0), void 0;
                    var t = this._getCSSStyle().font;
                    B.context.font = t, this._typesetChanged && (this._typesetChanged = !1, this._lines.length = 0, this._lineWidths.length = 0, this._isPassWordMode() ? this.parseLines(this._getPassWordTxt(this._text), t) : this.parseLines(this._text, t), this.evalTextSize()), this.checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new S(0, 0)) : this._clipPoint = null;
                    var i = this._lines.length;
                    if (this.overflow != e.VISIBLE) {
                        var n = this.overflow == e.HIDDEN ? Math.floor : Math.ceil;
                        i = Math.min(i, n((this.height - this.padding[0] - this.padding[2]) / (this.leading + this._charSize.height)))
                    }
                    var s = this.scrollY / (this._charSize.height + this.leading) | 0;
                    this.renderText(s, i), this.repaint()
                }, a.evalTextSize = function() {
                    var t = 0 / 0,
                        e = 0 / 0;
                    t = Math.max.apply(this, this._lineWidths), e = this._currBitmapFont ? this._lines.length * (this._currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], (t != this._textWidth || e != this._textHeight) && (this._textWidth = t, this._textHeight = e, this._width && this._height || this.conchModel && this.conchModel.size(this._width || this._textWidth, this._height || this._textHeight))
                }, a.checkEnabledViewportOrNot = function() {
                    return this.overflow == e.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height)
                }, a.changeText = function(t) {
                    this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || (this._typesetChanged = !0, this.typeset()))
                }, a.parseLines = function(t, i) {
                    var n = this.wordWrap || this.overflow == e.HIDDEN;
                    if (n) var s = this.getWordWrapWidth();
                    if (this._currBitmapFont) this._charSize.width = this._currBitmapFont.getMaxWidth(), this._charSize.height = this._currBitmapFont.getMaxHeight();
                    else {
                        var r = o.measureYouText(i);
                        this._charSize.width = r.width, this._charSize.height = r.height || this.fontSize
                    }
                    for (var a = t.replace(/\r\n/g, "\n").split("\n"), h = 0, l = a.length; l > h; h++) {
                        var u = a[h];
                        n ? this.parseLine(u, s) : (this._lineWidths.push(this.getTextWidth(u)), this._lines.push(u))
                    }
                }, a.parseLine = function(t, i) {
                    var n, s = (B.context, this._lines),
                        r = 0,
                        o = 0 / 0,
                        a = 0 / 0,
                        h = 0;
                    if (o = this.getTextWidth(t), i >= o) return s.push(t), this._lineWidths.push(o), void 0;
                    o = this._charSize.width, r = Math.floor(i / o), 0 == r && (r = 1), o = this.getTextWidth(t.substring(0, r)), a = o;
                    for (var l = r, u = t.length; u > l; l++)
                        if (o = this.getTextWidth(t.charAt(l)), a += o, a > i)
                            if (this.wordWrap) {
                                var c = t.substring(h, l);
                                if (c.charCodeAt(c.length - 1) < 255 ? (n = /(?:\w|-)+$/.exec(c), n && (l = n.index + h, 0 == n.index ? l += c.length : c = t.substring(h, l))) : e.RightToLeft && (n = /([\u0600-\u06FF])+$/.exec(c), n && (l = n.index + h, 0 == n.index ? l += c.length : c = t.substring(h, l))), s.push(c), this._lineWidths.push(a - o), h = l, !(u > l + r)) {
                                    s.push(t.substring(h, u)), this._lineWidths.push(this.getTextWidth(s[s.length - 1])), h = -1;
                                    break
                                }
                                l += r, o = this.getTextWidth(t.substring(h, l)), a = o, l--
                            } else if (this.overflow == e.HIDDEN) return s.push(t.substring(0, l)), this._lineWidths.push(this.getTextWidth(s[s.length - 1])), void 0;
                    this.wordWrap && -1 != h && (s.push(t.substring(h, u)), this._lineWidths.push(this.getTextWidth(s[s.length - 1])))
                }, a.getTextWidth = function(t) {
                    return this._currBitmapFont ? this._currBitmapFont.getTextWidth(t) : B.context.measureText(t).width
                }, a.getWordWrapWidth = function() {
                    var t = this.padding,
                        e = 0 / 0;
                    return e = this._currBitmapFont && this._currBitmapFont.autoScaleSize ? this._width * (this._currBitmapFont.fontSize / this.fontSize) : this._width, 0 >= e && (e = this.wordWrap ? 100 : B.width), 0 >= e && (e = 100), e - t[3] - t[1]
                }, a.getCharPoint = function(t, e) {
                    this._isChanged && i.timer.runCallLater(this, this.typeset);
                    for (var n = 0, s = this._lines, r = 0, o = 0, a = s.length; a > o; o++) {
                        if (n += s[o].length, n > t) {
                            var h = o;
                            break
                        }
                        r = n
                    }
                    var l = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
                    B.context.font = l;
                    var u = this.getTextWidth(this._text.substring(r, t)),
                        c = e || new S;
                    return c.setTo(this._startX + u - (this._clipPoint ? this._clipPoint.x : 0), this._startY + h * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0))
                }, r(0, a, "width", function() {
                    return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3]
                }, function(t) {
                    t != this._width && (i.superSet(ce, this, "width", t), this._typesetChanged = !0, this.isChanged = !0)
                }), r(0, a, "textWidth", function() {
                    return this._isChanged && i.timer.runCallLater(this, this.typeset), this._textWidth
                }), r(0, a, "height", function() {
                    return this._height ? this._height : this.textHeight + this.padding[0] + this.padding[2]
                }, function(t) {
                    t != this._height && (i.superSet(ce, this, "height", t), this.isChanged = !0)
                }), r(0, a, "textHeight", function() {
                    return this._isChanged && i.timer.runCallLater(this, this.typeset), this._textHeight
                }), r(0, a, "padding", function() {
                    return this._getCSSStyle().padding
                }, function(t) {
                    this._getCSSStyle().padding = t, this.isChanged = !0
                }), r(0, a, "bold", function() {
                    return this._getCSSStyle().bold
                }, function(t) {
                    this._getCSSStyle().bold = t, this._typesetChanged = !0, this.isChanged = !0
                }), r(0, a, "text", function() {
                    return this._text || ""
                }, function(t) {
                    this._text !== t && (this.lang(t + ""), this._typesetChanged = !0, this.isChanged = !0, this.event("change"))
                }), r(0, a, "color", function() {
                    return this._getCSSStyle().color
                }, function(t) {
                    this._getCSSStyle().color != t && (this._getCSSStyle().color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0)
                }), r(0, a, "font", function() {
                    return this._getCSSStyle().fontFamily
                }, function(t) {
                    this._currBitmapFont && (this._currBitmapFont = null, this.scale(1, 1)), e._bitmapFonts && e._bitmapFonts[t] && (this._currBitmapFont = e._bitmapFonts[t]), this._getCSSStyle().fontFamily = t, this._typesetChanged = !0, this.isChanged = !0
                }), r(0, a, "fontSize", function() {
                    return this._getCSSStyle().fontSize
                }, function(t) {
                    this._getCSSStyle().fontSize = t, this._typesetChanged = !0, this.isChanged = !0
                }), r(0, a, "italic", function() {
                    return this._getCSSStyle().italic
                }, function(t) {
                    this._getCSSStyle().italic = t, this._typesetChanged = !0, this.isChanged = !0
                }), r(0, a, "align", function() {
                    return this._getCSSStyle().align
                }, function(t) {
                    this._getCSSStyle().align = t, this.isChanged = !0
                }), r(0, a, "valign", function() {
                    return this._getCSSStyle().valign
                }, function(t) {
                    this._getCSSStyle().valign = t, this.isChanged = !0
                }), r(0, a, "wordWrap", function() {
                    return this._getCSSStyle().wordWrap
                }, function(t) {
                    this._getCSSStyle().wordWrap = t, this._typesetChanged = !0, this.isChanged = !0
                }), r(0, a, "leading", function() {
                    return this._getCSSStyle().leading
                }, function(t) {
                    this._getCSSStyle().leading = t, this.isChanged = !0
                }), r(0, a, "bgColor", function() {
                    return this._getCSSStyle().backgroundColor
                }, function(t) {
                    this._getCSSStyle().backgroundColor = t, this.isChanged = !0
                }), r(0, a, "borderColor", function() {
                    return this._getCSSStyle().borderColor
                }, function(t) {
                    this._getCSSStyle().borderColor = t, this.isChanged = !0
                }), r(0, a, "stroke", function() {
                    return this._getCSSStyle().stroke
                }, function(t) {
                    this._getCSSStyle().stroke = t, this.isChanged = !0
                }), r(0, a, "strokeColor", function() {
                    return this._getCSSStyle().strokeColor
                }, function(t) {
                    this._getCSSStyle().strokeColor = t, this.isChanged = !0
                }), r(0, a, "isChanged", null, function(t) {
                    this._isChanged !== t && (this._isChanged = t, t && i.timer.callLater(this, this.typeset))
                }), r(0, a, "scrollX", function() {
                    return this._clipPoint ? this._clipPoint.x : 0
                }, function(t) {
                    if (!(this.overflow != e.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                        t = t < this.padding[3] ? this.padding[3] : t;
                        var i = this._textWidth - this._width;
                        t = t > i ? i : t;
                        var n = this._height / (this._charSize.height + this.leading) | 1;
                        this._clipPoint.x = t, this.renderText(this._lastVisibleLineIndex, n)
                    }
                }), r(0, a, "scrollY", function() {
                    return this._clipPoint ? this._clipPoint.y : 0
                }, function(t) {
                    if (!(this.overflow != e.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                        t = t < this.padding[0] ? this.padding[0] : t;
                        var i = this._textHeight - this._height;
                        t = t > i ? i : t;
                        var n = t / (this._charSize.height + this.leading) | 0;
                        this._lastVisibleLineIndex = n;
                        var s = (this._height / (this._charSize.height + this.leading) | 0) + 1;
                        this._clipPoint.y = t, this.renderText(n, s)
                    }
                }), r(0, a, "maxScrollX", function() {
                    return this.textWidth < this._width ? 0 : this._textWidth - this._width
                }), r(0, a, "maxScrollY", function() {
                    return this.textHeight < this._height ? 0 : this._textHeight - this._height
                }), r(0, a, "lines", function() {
                    return this._isChanged && this.typeset(), this._lines
                }), r(0, a, "underlineColor", function() {
                    return this._underlineColor
                }, function(t) {
                    this._underlineColor = t, this._typesetChanged = !0, this._isChanged = !0, this.typeset()
                }), e.registerBitmapFont = function(t, i) {
                    e._bitmapFonts || (e._bitmapFonts = {}), e._bitmapFonts[t] = i
                }, e.unregisterBitmapFont = function(t, i) {
                    if (void 0 === i && (i = !0), e._bitmapFonts && e._bitmapFonts[t]) {
                        var n = e._bitmapFonts[t];
                        i && n.destroy(), delete e._bitmapFonts[t]
                    }
                }, e.setTextRightToLeft = function() {
                    var t;
                    t = B.canvas.source.style, t.display = "none", t.position = "absolute", t.direction = "rtl", R._mainCanvas.source.style.direction = "rtl", laya.display.Text.RightToLeft = !0, B.document.body.appendChild(B.canvas.source)
                }, e.supportFont = function(t) {
                    B.context.font = "10px sans-serif";
                    var e = B.context.measureText("abcji").width;
                    B.context.font = "10px " + t;
                    var i = B.context.measureText("abcji").width;
                    return console.log(e, i), e === i ? !1 : !0
                }, e._testWord = "游", e.langPacks = null, e.VISIBLE = "visible", e.SCROLL = "scroll", e.HIDDEN = "hidden", e.CharacterCache = !0, e.RightToLeft = !1, e._bitmapFonts = null, n(e, ["_fontFamilyMap", function() {
                    return this._fontFamilyMap = {
                        "报隶": "报隶-简",
                        "黑体": "黑体-简",
                        "楷体": "楷体-简",
                        "兰亭黑": "兰亭黑-简",
                        "隶变": "隶变-简",
                        "凌慧体": "凌慧体-简",
                        "翩翩体": "翩翩体-简",
                        "苹方": "苹方-简",
                        "手札体": "手札体-简",
                        "宋体": "宋体-简",
                        "娃娃体": "娃娃体-简",
                        "魏碑": "魏碑-简",
                        "行楷": "行楷-简",
                        "雅痞": "雅痞-简",
                        "圆体": "圆体-简"
                    }
                }]), e
            }(ce),
            me = function(t) {
                function e() {
                    function t() {
                        "hidden" == B.document[o] ? r._setStageVisible(!1) : r._setStageVisible(!0)
                    }

                    function i(t) {
                        r._setStageVisible(!t.hidden)
                    }
                    this.focus = null, this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._frameStartTime = 0 / 0, this._isFocused = !1, this._isVisibility = !1, this._scenes = null, this._frameRate = "fast", e.__super.call(this), this.offset = new S, this._canvasTransform = new M, this._previousOrientation = B.window.orientation;
                    var n = this;
                    this.transform = M.create(), this._scenes = [], this.mouseEnabled = !0, this.hitTestPrior = !0, this.autoSize = !1, this._displayedInStage = !0, this._isFocused = !0, this._isVisibility = !0;
                    var s = B.window,
                        r = this;
                    s.addEventListener("focus", function() {
                        n._isFocused = !0, r.event("focus"), r.event("focuschange")
                    }), s.addEventListener("blur", function() {
                        n._isFocused = !1, r.event("blur"), r.event("focuschange"), r._isInputting() && (xe.inputElement.target.focus = !1)
                    });
                    var o = "visibilityState",
                        a = "visibilitychange",
                        h = s.document;
                    "undefined" != typeof h.hidden ? (a = "visibilitychange", o = "visibilityState") : "undefined" != typeof h.mozHidden ? (a = "mozvisibilitychange", o = "mozVisibilityState") : "undefined" != typeof h.msHidden ? (a = "msvisibilitychange", o = "msVisibilityState") : "undefined" != typeof h.webkitHidden && (a = "webkitvisibilitychange", o = "webkitVisibilityState"), s.document.addEventListener(a, t), s.document.addEventListener("qbrowserVisibilityChange", i), s.addEventListener("resize", function() {
                        var t = B.window.orientation;
                        null != t && t != n._previousOrientation && r._isInputting() && (xe.inputElement.target.focus = !1), n._previousOrientation = t, r._isInputting() || r._resetCanvas()
                    }), s.addEventListener("orientationchange", function() {
                        r._resetCanvas()
                    }), this.on("mousemove", this, this._onmouseMove), B.onMobile && this.on("mousedown", this, this._onmouseMove)
                }
                s(e, "laya.display.Stage", t);
                var a = e.prototype;
                return a._setStageVisible = function(t) {
                    this._isVisibility != t && (this._isVisibility = t, this._isVisibility || this._isInputting() && (xe.inputElement.target.focus = !1), this.event("visibilitychange"))
                }, a._isInputting = function() {
                    return B.onMobile && xe.isInputting
                }, a._changeCanvasSize = function() {
                    this.setScreenSize(B.clientWidth * B.pixelRatio, B.clientHeight * B.pixelRatio)
                }, a._resetCanvas = function() {
                    if (this.screenAdaptationEnabled) {
                        {
                            var t = R._mainCanvas;
                            t.source.style
                        }
                        t.size(1, 1), i.timer.once(100, this, this._changeCanvasSize)
                    }
                }, a.setScreenSize = function(t, e) {
                    var i = !1;
                    if ("none" !== this._screenMode) {
                        var n = 1 > t / e ? "vertical" : "horizontal";
                        if (i = n !== this._screenMode) {
                            var s = e;
                            e = t, t = s
                        }
                    }
                    this.canvasRotation = i;
                    var r = R._mainCanvas,
                        a = r.source.style,
                        h = this._canvasTransform.identity(),
                        l = this._scaleMode,
                        u = t / this.designWidth,
                        c = e / this.designHeight,
                        _ = this.designWidth,
                        d = this.designHeight,
                        f = t,
                        p = e,
                        g = B.pixelRatio;
                    switch (this._width = this.designWidth, this._height = this.designHeight, l) {
                        case "noscale":
                            u = c = 1, f = this.designWidth, p = this.designHeight;
                            break;
                        case "showall":
                            u = c = Math.min(u, c), _ = f = Math.round(this.designWidth * u), d = p = Math.round(this.designHeight * c);
                            break;
                        case "noborder":
                            u = c = Math.max(u, c), f = Math.round(this.designWidth * u), p = Math.round(this.designHeight * c);
                            break;
                        case "full":
                            u = c = 1, this._width = _ = t, this._height = d = e;
                            break;
                        case "fixedwidth":
                            c = u, this._height = d = Math.round(e / u);
                            break;
                        case "fixedheight":
                            u = c, this._width = _ = Math.round(t / c);
                            break;
                        case "fixedauto":
                            t / e < this.designWidth / this.designHeight ? (c = u, this._height = d = Math.round(e / u)) : (u = c, this._width = _ = Math.round(t / c))
                    }
                    this.conchModel && this.conchModel.size(this._width, this._height), u *= this.scaleX, c *= this.scaleY, 1 === u && 1 === c ? this.transform.identity() : (this.transform.a = this._formatData(u / (f / _)), this.transform.d = this._formatData(c / (p / d)), this.conchModel && this.conchModel.scale(this.transform.a, this.transform.d)), r.size(_, d), o.changeWebGLSize(_, d), h.scale(f / _ / g, p / d / g), this.offset.x = "left" === this._alignH ? 0 : "right" === this._alignH ? (t - f) / g : .5 * (t - f) / g, this.offset.y = "top" === this._alignV ? 0 : "bottom" === this._alignV ? (e - p) / g : .5 * (e - p) / g, this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), h.translate(this.offset.x, this.offset.y), this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (h.rotate(Math.PI / 2), h.translate(e / g, 0), this.canvasDegree = 90) : (h.rotate(-Math.PI / 2), h.translate(0, t / g), this.canvasDegree = -90)), h.a = this._formatData(h.a), h.d = this._formatData(h.d), h.tx = this._formatData(h.tx), h.ty = this._formatData(h.ty), a.transformOrigin = a.webkitTransformOrigin = a.msTransformOrigin = a.mozTransformOrigin = a.oTransformOrigin = "0px 0px 0px", a.transform = a.webkitTransform = a.msTransform = a.mozTransform = a.oTransform = "matrix(" + h.toString() + ")", h.translate(parseInt(a.left) || 0, parseInt(a.top) || 0), this.visible = !0, this._repaint = 1, this.event("resize")
                }, a._formatData = function(t) {
                    return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t
                }, a.getMousePoint = function() {
                    return S.TEMP.setTo(this.mouseX, this.mouseY)
                }, a.repaint = function() {
                    this._repaint = 1
                }, a.parentRepaint = function() {}, a._loop = function() {
                    return this.render(R.context, 0, 0), !0
                }, a._onmouseMove = function() {
                    this._mouseMoveTime = B.now()
                }, a.getTimeFromFrameStart = function() {
                    return B.now() - this._frameStartTime
                }, a.render = function(e, n, s) {
                    if ("sleep" === this._frameRate && !R.isConchApp) {
                        var r = B.now();
                        if (!(r - this._frameStartTime >= 1e3)) return;
                        this._frameStartTime = r
                    }
                    if (this._renderCount++, R.isFlash && this.repaint(), !this._style.visible) return this._renderCount % 5 === 0 && (X.loopCount++, v.instance.runEvent(), i.timer._update()), void 0;
                    this._frameStartTime = B.now();
                    var a = "mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate,
                        h = "slow" !== a,
                        l = this._renderCount % 2 === 0;
                    if (X.renderSlow = !h, h || l || R.isConchApp) {
                        X.loopCount++, v.instance.runEvent(), i.timer._update(), o.update3DLoop();
                        var u, c = 0,
                            _ = 0;
                        if (R.isConchNode)
                            for (c = 0, _ = this._scenes.length; _ > c; c++) u = this._scenes[c], u && u._updateSceneConch();
                        else
                            for (c = 0, _ = this._scenes.length; _ > c; c++) u = this._scenes[c], u && u._updateScene();
                        if (R.isConchNode) {
                            var d = ce.CustomList;
                            for (c = 0, _ = d.length; _ > c; c++) {
                                var f = d[c];
                                f.customRender(f.customContext, 0, 0)
                            }
                            return
                        }
                    }
                    R.isConchNode || !this.renderingEnabled || !h && l || (R.isWebGL ? (e.clear(), t.prototype.render.call(this, e, n, s), X._show && X._sp && X._sp.render(e, n, s), o.clear(this._bgColor), o.beginFlush(), e.flush(), o.endFinish(), q.instance && q.getInstance().endDispose()) : (o.clear(this._bgColor), t.prototype.render.call(this, e, n, s), X._show && X._sp && X._sp.render(e, n, s)))
                }, a._requestFullscreen = function() {
                    var t = B.document.documentElement;
                    t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                }, a._fullScreenChanged = function() {
                    i.stage.event("fullscreenchange")
                }, a.exitFullscreen = function() {
                    var t = B.document;
                    t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
                }, r(0, a, "clientScaleX", function() {
                    return this._transform ? this._transform.getScaleX() : 1
                }), r(0, a, "desginHeight", function() {
                    return console.debug("desginHeight已经弃用，请使用designHeight代替"), this.designHeight
                }), r(0, a, "frameRate", function() {
                    return this._frameRate
                }, function(t) {
                    if (this._frameRate = t, R.isConchApp) switch (this._frameRate) {
                        case "slow":
                            B.window.conch && B.window.conchConfig.setSlowFrame && B.window.conchConfig.setSlowFrame(!0);
                            break;
                        case "fast":
                            B.window.conch && B.window.conchConfig.setSlowFrame && B.window.conchConfig.setSlowFrame(!1);
                            break;
                        case "mouse":
                            B.window.conch && B.window.conchConfig.setMouseFrame && B.window.conchConfig.setMouseFrame(2e3);
                            break;
                        case "sleep":
                            B.window.conch && B.window.conchConfig.setLimitFPS && B.window.conchConfig.setLimitFPS(1);
                            break;
                        default:
                            throw new Error("Stage:frameRate invalid.")
                    }
                }), r(0, a, "clientScaleY", function() {
                    return this._transform ? this._transform.getScaleY() : 1
                }), r(0, a, "width", t.prototype._$get_width, function(t) {
                    this.designWidth = t, i.superSet(ce, this, "width", t), i.timer.callLater(this, this._changeCanvasSize)
                }), r(0, a, "alignH", function() {
                    return this._alignH
                }, function(t) {
                    this._alignH = t, i.timer.callLater(this, this._changeCanvasSize)
                }), r(0, a, "isFocused", function() {
                    return this._isFocused
                }), r(0, a, "height", t.prototype._$get_height, function(t) {
                    this.designHeight = t, i.superSet(ce, this, "height", t), i.timer.callLater(this, this._changeCanvasSize)
                }), r(0, a, "transform", function() {
                    return this._tfChanged && this._adjustTransform(), this._transform = this._transform || M.create()
                }, t.prototype._$set_transform), r(0, a, "isVisibility", function() {
                    return this._isVisibility
                }), r(0, a, "desginWidth", function() {
                    return console.debug("desginWidth已经弃用，请使用designWidth代替"), this.designWidth
                }), r(0, a, "scaleMode", function() {
                    return this._scaleMode
                }, function(t) {
                    this._scaleMode = t, i.timer.callLater(this, this._changeCanvasSize)
                }), r(0, a, "alignV", function() {
                    return this._alignV
                }, function(t) {
                    this._alignV = t, i.timer.callLater(this, this._changeCanvasSize)
                }), r(0, a, "bgColor", function() {
                    return this._bgColor
                }, function(t) {
                    this._bgColor = t, this.conchModel && this.conchModel.bgColor(t), R.isWebGL && (t ? e._wgColor = G.create(t)._color : B.onMiniGame || (e._wgColor = null)), B.onLimixiu ? e._wgColor = G.create(t)._color : R.canvas.style.background = t ? t : "none"
                }), r(0, a, "mouseX", function() {
                    return Math.round(v.instance.mouseX / this.clientScaleX)
                }), r(0, a, "mouseY", function() {
                    return Math.round(v.instance.mouseY / this.clientScaleY)
                }), r(0, a, "screenMode", function() {
                    return this._screenMode
                }, function(t) {
                    this._screenMode = t
                }), r(0, a, "visible", t.prototype._$get_visible, function(t) {
                    if (this.visible !== t) {
                        i.superSet(ce, this, "visible", t);
                        var e = R._mainCanvas.source.style;
                        e.visibility = t ? "visible" : "hidden"
                    }
                }), r(0, a, "fullScreenEnabled", null, function(t) {
                    var e = B.document,
                        i = R.canvas;
                    t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), e.removeEventListener("msfullscreenchange", this._fullScreenChanged))
                }), e.SCALE_NOSCALE = "noscale", e.SCALE_EXACTFIT = "exactfit", e.SCALE_SHOWALL = "showall", e.SCALE_NOBORDER = "noborder", e.SCALE_FULL = "full", e.SCALE_FIXED_WIDTH = "fixedwidth", e.SCALE_FIXED_HEIGHT = "fixedheight", e.SCALE_FIXED_AUTO = "fixedauto", e.ALIGN_LEFT = "left", e.ALIGN_RIGHT = "right", e.ALIGN_CENTER = "center", e.ALIGN_TOP = "top", e.ALIGN_MIDDLE = "middle", e.ALIGN_BOTTOM = "bottom", e.SCREEN_NONE = "none", e.SCREEN_HORIZONTAL = "horizontal", e.SCREEN_VERTICAL = "vertical", e.FRAME_FAST = "fast", e.FRAME_SLOW = "slow", e.FRAME_MOUSE = "mouse", e.FRAME_SLEEP = "sleep", e.FRAME_MOUSE_THREDHOLD = 2e3, n(e, ["_wgColor", function() {
                    return this._wgColor = [0, 0, 0, 1]
                }]), e
            }(ce),
            ve = (function(t) {
                function e() {
                    this.url = null, this._channel = null, this._tar = null, this._playEvents = null, this._stopEvents = null, e.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), this.on("removed", this, this._onParentChange)
                }
                s(e, "laya.media.SoundNode", t);
                var i = e.prototype;
                return i._onParentChange = function() {
                    this.target = this.parent
                }, i.play = function(t, e) {
                    void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = E.playSound(this.url, t, e))
                }, i.stop = function() {
                    this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null
                }, i._setPlayAction = function(t, e, i, n) {
                    void 0 === n && (n = !0), this[i] && t && (n ? t.on(e, this, this[i]) : t.off(e, this, this[i]))
                }, i._setPlayActions = function(t, e, i, n) {
                    if (void 0 === n && (n = !0), t && e) {
                        var s = e.split(","),
                            r = 0,
                            o = 0;
                        for (o = s.length, r = 0; o > r; r++) this._setPlayAction(t, s[r], i, n)
                    }
                }, r(0, i, "playEvent", null, function(t) {
                    this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play")
                }), r(0, i, "target", null, function(t) {
                    this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), this._setPlayActions(this._tar, this._stopEvents, "stop", !0))
                }), r(0, i, "stopEvent", null, function(t) {
                    this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop")
                }), e
            }(ce), function(t) {
                function e() {
                    this._src = null, this._onload = null, this._onerror = null, e.__super.call(this)
                }
                s(e, "laya.resource.FileBitmap", t);
                var i = e.prototype;
                return r(0, i, "src", function() {
                    return this._src
                }, function(t) {
                    this._src = t
                }), r(0, i, "onload", null, function() {}), r(0, i, "onerror", null, function() {}), e
            }(fe)),
            ye = function(t) {
                function e(t, i) {
                    this._is2D = !1, e.__super.call(this);
                    var n = this;
                    if (this._source = this, "2D" === t || "AUTO" === t && !R.isWebGL) {
                        this._is2D = !0, this._source = i || B.createElement("canvas"), this._w = this._source.width, this._h = this._source.height;
                        var s = this;
                        s.getContext = function(t, e) {
                            if (n._ctx) return n._ctx;
                            var i = n._ctx = n._source.getContext(t, e);
                            return i && (i._canvas = s, R.isFlash || B.onLimixiu || (i.size = function() {})), i
                        }
                    }
                    this.lock = !0
                }
                s(e, "laya.resource.HTMLCanvas", t);
                var i = e.prototype;
                return i.clear = function() {
                    this._ctx && this._ctx.clear()
                }, i.destroy = function() {
                    this._ctx && this._ctx.destroy(), this._ctx = null, laya.resource.Resource.prototype.destroy.call(this)
                }, i.release = function() {}, i._setContext = function(t) {
                    this._ctx = t
                }, i.getContext = function() {
                    return this._ctx ? this._ctx : this._ctx = e._createContext(this)
                }, i.getMemSize = function() {
                    return 0
                }, i.size = function(t, e) {
                    (this._w != t || this._h != e || this._source && (this._source.width != t || this._source.height != e)) && (this._w = t, this._h = e, this.memorySize = this._w * this._h * 4, this._ctx && this._ctx.size(t, e), this._source && (this._source.height = e, this._source.width = t))
                }, i.getCanvas = function() {
                    return this._source
                }, i.toBase64 = function(t, e, i) {
                    if (this._source)
                        if (R.isConchApp && this._source.toBase64) this._source.toBase64(t, e, i);
                        else {
                            var n = this._source.toDataURL(t, e);
                            i.call(this, n)
                        }
                }, r(0, i, "context", function() {
                    return this._ctx
                }), r(0, i, "asBitmap", null, function() {}), e.create = function(t, i) {
                    return new e(t, i)
                }, e.TYPE2D = "2D", e.TYPE3D = "3D", e.TYPEAUTO = "AUTO", e._createContext = null, e
            }(fe),
            we = (function(t) {
                function e() {
                    throw e.__super.call(this), new Error("不允许new！")
                }
                return s(e, "laya.resource.HTMLSubImage", t), e.create = function(t, i, n, s, r, o, a, h) {
                    return void 0 === h && (h = !1), new e(t, i, n, s, r, o, a, h)
                }, e
            }(fe), function(t) {
                function e() {
                    this._frames = null, this._url = null, e.__super.call(this), this._setControlNode(this)
                }
                s(e, "laya.display.Animation", t);
                var n = e.prototype;
                return n.destroy = function(t) {
                    void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), this._frames = null, this._labels = null
                }, n.play = function(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === n && (n = !0), i && this._setFramesFromCache(i, n), this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this._frames && this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0)
                }, n._setFramesFromCache = function(t, i) {
                    if (void 0 === i && (i = !1), this._url && (t = this._url + "#" + t), t && e.framesMap[t]) {
                        var n;
                        return n = e.framesMap[t], n instanceof Array ? (this._frames = e.framesMap[t], this._count = this._frames.length) : (n.nodeRoot && (e.framesMap[t] = this._parseGraphicAnimationByData(n), n = e.framesMap[t]), this._frames = n.frames, this._count = this._frames.length, this._frameRateChanged || (this._interval = n.interval), this._labels = this._copyLabels(n.labels)), !0
                    }
                    return i && console.log("ani not found:", t), !1
                }, n._copyLabels = function(t) {
                    if (!t) return null;
                    var e;
                    e = {};
                    var i;
                    for (i in t) e[i] = K.copyArray([], t[i]);
                    return e
                }, n._frameLoop = function() {
                    this._style.visible && this._style.alpha > .01 && t.prototype._frameLoop.call(this)
                }, n._displayToIndex = function(t) {
                    this._frames && (this.graphics = this._frames[t])
                }, n.clear = function() {
                    this.stop(), this.graphics = null, this._frames = null, this._labels = null
                }, n.loadImages = function(t, i) {
                    return void 0 === i && (i = ""), this._url = "", this._setFramesFromCache(i) || (this.frames = e.framesMap[i] ? e.framesMap[i] : e.createFrames(t, i)), this
                }, n.loadAtlas = function(t, n, s) {
                    function r(i) {
                        t === i && (o.frames = e.framesMap[s] ? e.framesMap[s] : e.createFrames(t, s), n && n.run())
                    }
                    void 0 === s && (s = ""), this._url = "";
                    var o = this;
                    return o._setFramesFromCache(s) || (oe.getAtlas(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "atlas")), this
                }, n.loadAnimation = function(t, e, n) {
                    this._url = t;
                    var s = this;
                    return this._actionName || (this._actionName = ""), s._setFramesFromCache("") ? (s._setFramesFromCache(this._actionName, !0), this.index = 0, e && e.run()) : !n || oe.getAtlas(n) ? this._loadAnimationData(t, e, n) : i.loader.load(n, l.create(this, this._loadAnimationData, [t, e, n]), null, "atlas"), this
                }, n._loadAnimationData = function(t, n, s) {
                    function r(i) {
                        if (oe.getRes(i) && t === i) {
                            var s;
                            if (e.framesMap[t + "#"]) a._setFramesFromCache(o._actionName, !0), o.index = 0, o._checkResumePlaying();
                            else {
                                var r = a._parseGraphicAnimation(oe.getRes(t));
                                if (!r) return;
                                var h, l = r.animationList,
                                    u = 0,
                                    c = l.length;
                                for (u = 0; c > u; u++) s = l[u], e.framesMap[t + "#" + s.name] = s, h || (h = s);
                                h && (e.framesMap[t + "#"] = h, a._setFramesFromCache(o._actionName, !0), o.index = 0), o._checkResumePlaying()
                            }
                            n && n.run()
                        }
                    }
                    var o = this;
                    if (s && !oe.getAtlas(s)) return console.warn("atlas load fail:" + s), void 0;
                    var a = this;
                    oe.getRes(t) ? r(t) : i.loader.load(t, l.create(null, r, [t]), null, "json"), oe.clearRes(t)
                }, n._parseGraphicAnimation = function(t) {
                    return be.parseAnimationData(t)
                }, n._parseGraphicAnimationByData = function(t) {
                    return be.parseAnimationByData(t)
                }, r(0, n, "frames", function() {
                    return this._frames
                }, function(t) {
                    this._frames = t, t && (this._count = t.length, this._isPlaying ? this.play(this._index, this.loop, this._actionName) : this.index = this._index)
                }), r(0, n, "autoPlay", null, function(t) {
                    t ? this.play() : this.stop()
                }), r(0, n, "source", null, function(t) {
                    t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","))
                }), r(0, n, "autoAnimation", null, function(t) {
                    this.play(0, !0, t, !1)
                }), e.createFrames = function(t, i) {
                    var n, s, r = 0,
                        a = 0;
                    if ("string" == typeof t) {
                        var h = oe.getAtlas(t);
                        if (h && h.length)
                            for (n = [], r = 0, a = h.length; a > r; r++) s = new o.createGraphics, s.drawTexture(oe.getRes(h[r]), 0, 0), n.push(s)
                    } else if (t instanceof Array)
                        for (n = [], r = 0, a = t.length; a > r; r++) s = new o.createGraphics, s.loadImage(t[r], 0, 0), n.push(s);
                    return i && (e.framesMap[i] = n), n
                }, e.clearCache = function(t) {
                    var i, n = e.framesMap,
                        s = t + "#";
                    for (i in n)(i === t || 0 == i.indexOf(s)) && delete e.framesMap[i]
                }, e.framesMap = {}, e
            }(pe), function(t) {
                function e() {
                    this._targetDic = null, this._animationData = null, this._animationNewFrames = null, e.__super.call(this), null == e._sortIndexFun && (e._sortIndexFun = C.sortByKey("index", !1, !0))
                }
                s(e, "laya.display.FrameAnimation", t);
                var i = e.prototype;
                return i._setUp = function(t, e) {
                    this._labels = null, this._animationNewFrames = null, this._targetDic = t, this._animationData = e, this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, this._animationNewFrames = e.animationNewFrames) : (this._animationNewFrames = [], this._calculateDatas()), e.parsed = !0, e.labels = this._labels, e.count = this._count, e.animationNewFrames = this._animationNewFrames
                }, i.clear = function() {
                    t.prototype.clear.call(this), this._targetDic = null, this._animationData = null
                }, i._displayToIndex = function(t) {
                    if (this._animationData) {
                        0 > t && (t = 0), t > this._count && (t = this._count);
                        var e = this._animationData.nodes,
                            i = 0,
                            n = e.length;
                        for (i = 0; n > i; i++) this._displayNodeToFrame(e[i], t)
                    }
                }, i._displayNodeToFrame = function(t, e, i) {
                    i || (i = this._targetDic);
                    var n = i[t.target];
                    if (n) {
                        var s, r, o, a = t.frames,
                            h = t.keys,
                            l = 0,
                            u = h.length;
                        for (l = 0; u > l; l++) s = h[l], r = a[s], o = r.length > e ? r[e] : r[r.length - 1], n[s] = o
                    }
                }, i._calculateDatas = function() {
                    if (this._animationData) {
                        var t, e = this._animationData.nodes,
                            i = 0,
                            n = e.length;
                        for (this._count = 0, i = 0; n > i; i++) t = e[i], this._calculateNodeKeyFrames(t);
                        this._count += 1
                    }
                }, i._calculateNodeKeyFrames = function(t) {
                    var i, n, s = t.keyframes,
                        r = t.target;
                    t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.initValues || (t.initValues = {});
                    for (i in s) n = s[i], t.frames[i] || (t.frames[i] = []), this._targetDic && this._targetDic[r] && (t.initValues[i] = this._targetDic[r][i]), n.sort(e._sortIndexFun), t.keys.push(i), this._calculateNodePropFrames(n, t.frames[i], i, r)
                }, i.resetToInitState = function() {
                    if (this._targetDic && this._animationData) {
                        var t, e, i = this._animationData.nodes,
                            n = 0,
                            s = i.length;
                        for (n = 0; s > n; n++)
                            if (t = i[n], e = t.initValues) {
                                var r = this._targetDic[t.target];
                                if (r) {
                                    var o;
                                    for (o in e) r[o] = e[o]
                                }
                            }
                    }
                }, i._calculateNodePropFrames = function(t, e) {
                    var i = 0,
                        n = t.length - 1;
                    for (e.length = t[n].index + 1, i = 0; n > i; i++) this._dealKeyFrame(t[i]), this._calculateFrameValues(t[i], t[i + 1], e);
                    0 == n && (e[0] = t[0].value, this._animationNewFrames && (this._animationNewFrames[t[0].index] = !0)), this._dealKeyFrame(t[i])
                }, i._dealKeyFrame = function(t) {
                    t.label && "" != t.label && this.addLabel(t.label, t.index)
                }, i._calculateFrameValues = function(t, e, i) {
                    var n, s = 0,
                        r = t.index,
                        o = e.index,
                        a = t.value,
                        h = e.value - t.value,
                        l = o - r;
                    if (o > this._count && (this._count = o), t.tween)
                        for (n = Y[t.tweenMethod], null == n && (n = Y.linearNone), s = r; o > s; s++) i[s] = n(s - r, a, h, l), this._animationNewFrames && (this._animationNewFrames[s] = !0);
                    else
                        for (s = r; o > s; s++) i[s] = a;
                    this._animationNewFrames && (this._animationNewFrames[t.index] = !0, this._animationNewFrames[e.index] = !0), i[e.index] = e.value
                }, e._sortIndexFun = null, e
            }(pe)),
            xe = function(t) {
                function e() {
                    this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", this._content = "", e.__super.call(this), this._maxChars = 1e5, this._width = 100, this._height = 20, this.multiline = !1, this.overflow = ge.SCROLL, this.on("mousedown", this, this._onMouseDown), this.on("undisplay", this, this._onUnDisplay)
                }
                s(e, "laya.display.Input", t);
                var o = e.prototype;
                return o.setSelection = function(t, e) {
                    this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e
                }, o._onUnDisplay = function() {
                    this.focus = !1
                }, o._onMouseDown = function() {
                    this.focus = !0
                }, o._syncInputTransform = function() {
                    var t = this.nativeInput,
                        n = K.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]),
                        s = this._width - this.padding[1] - this.padding[3],
                        r = this._height - this.padding[0] - this.padding[2];
                    R.isConchApp ? (t.setScale(n.scaleX, n.scaleY), t.setSize(s, r), t.setPos(n.x, n.y)) : (e.inputContainer.style.transform = e.inputContainer.style.webkitTransform = "scale(" + n.scaleX + "," + n.scaleY + ") rotate(" + i.stage.canvasDegree + "deg)", t.style.width = s + "px", t.style.height = r + "px", e.inputContainer.style.left = n.x + "px", e.inputContainer.style.top = n.y + "px")
                }, o.select = function() {
                    this.nativeInput.select()
                }, o._setInputMethod = function() {
                    e.input.parentElement && e.inputContainer.removeChild(e.input), e.area.parentElement && e.inputContainer.removeChild(e.area), e.inputElement = this._multiline ? e.area : e.input, e.inputContainer.appendChild(e.inputElement), ge.RightToLeft && (e.inputElement.style.direction = "rtl")
                }, o._focusIn = function() {
                    laya.display.Input.isInputting = !0;
                    var t = this.nativeInput;
                    this._focus = !0;
                    var e = t.style;
                    e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, R.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), t.maxLength = this._maxChars;
                    this.padding;
                    if (t.type = this._type, t.value = this._content, t.placeholder = this._prompt, i.stage.off("keydown", this, this._onKeyDown), i.stage.on("keydown", this, this._onKeyDown), i.stage.focus = this, this.event("focus"), B.onPC && t.focus(), !B.onMiniGame) {
                        {
                            this._text
                        }
                        this._text = null
                    }
                    this._typesetChanged = !0, this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(B.onIPhone ? ge._fontFamilyMap[this.font] || this.font : this.font), R.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !R.isConchApp && B.onPC && i.timer.frameLoop(1, this, this._syncInputTransform)
                }, o._setPromptColor = function() {
                    e.promptStyleDOM = B.getElementById("promptStyle"), e.promptStyleDOM || (e.promptStyleDOM = B.createElement("style"), e.promptStyleDOM.setAttribute("id", "promptStyle"), B.document.head.appendChild(e.promptStyleDOM)), e.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}"
                }, o._focusOut = function() {
                    laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, this._content ? (i.superSet(ge, this, "text", this._content), i.superSet(ge, this, "color", this._originColor)) : (i.superSet(ge, this, "text", this._prompt), i.superSet(ge, this, "color", this._promptColor)), i.stage.off("keydown", this, this._onKeyDown), i.stage.focus = null, this.event("blur"), R.isConchApp && this.nativeInput.blur(), B.onPC && i.timer.clear(this, this._syncInputTransform)
                }, o._onKeyDown = function(t) {
                    13 === t.keyCode && (B.onMobile && !this._multiline && (this.focus = !1), this.event("enter"))
                }, o.changeText = function(e) {
                    this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event("change")) : t.prototype.changeText.call(this, e)
                }, r(0, o, "color", t.prototype._$get_color, function(t) {
                    this._focus && this.nativeInput.setColor(t), i.superSet(ge, this, "color", this._content ? t : this._promptColor), this._originColor = t
                }), r(0, o, "inputElementYAdjuster", function() {
                    return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"), 0
                }, function() {
                    console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")
                }), r(0, o, "multiline", function() {
                    return this._multiline
                }, function(t) {
                    this._multiline = t, this.valign = t ? "top" : "middle"
                }), r(0, o, "maxChars", function() {
                    return this._maxChars
                }, function(t) {
                    0 >= t && (t = 1e5), this._maxChars = t
                }), r(0, o, "text", function() {
                    return this._focus ? this.nativeInput.value : this._content || ""
                }, function(t) {
                    i.superSet(ge, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, t ? i.superSet(ge, this, "text", t) : (i.superSet(ge, this, "text", this._prompt), i.superSet(ge, this, "color", this.promptColor)))
                }), r(0, o, "nativeInput", function() {
                    return this._multiline ? e.area : e.input
                }), r(0, o, "prompt", function() {
                    return this._prompt
                }, function(t) {
                    !this._text && t && i.superSet(ge, this, "color", this._promptColor), this.promptColor = this._promptColor, this._text ? i.superSet(ge, this, "text", this._text == this._prompt ? t : this._text) : i.superSet(ge, this, "text", t), this._prompt = ge.langPacks && ge.langPacks[t] ? ge.langPacks[t] : t
                }), r(0, o, "focus", function() {
                    return this._focus
                }, function(t) {
                    var i = this.nativeInput;
                    this._focus !== t && (t ? (i.target ? i.target._focusOut() : this._setInputMethod(), i.target = this, this._focusIn()) : (i.target = null, this._focusOut(), B.document.body.scrollTop = 0, i.blur(), R.isConchApp ? i.setPos(-1e4, -1e4) : e.inputContainer.contains(i) && e.inputContainer.removeChild(i)))
                }), r(0, o, "restrict", function() {
                    return this._restrictPattern ? this._restrictPattern.source : ""
                }, function(t) {
                    t ? (t = "[^" + t + "]", t.indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null
                }), r(0, o, "editable", function() {
                    return this._editable
                }, function(t) {
                    this._editable = t, R.isConchApp && e.input.setForbidEdit(!t)
                }), r(0, o, "promptColor", function() {
                    return this._promptColor
                }, function(t) {
                    this._promptColor = t, this._content || i.superSet(ge, this, "color", t)
                }), r(0, o, "type", function() {
                    return this._type
                }, function(t) {
                    this._getCSSStyle().password = "password" == t ? !0 : !1, this._type = t, R.isConchApp && this.nativeInput.setType(t)
                }), r(0, o, "inputElementXAdjuster", function() {
                    return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"), 0
                }, function() {
                    console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")
                }), r(0, o, "asPassword", function() {
                    return this._getCSSStyle().password
                }, function(t) {
                    this._getCSSStyle().password = t, this._type = "password", console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'), this._typesetChanged = !0, this.isChanged = !0
                }), e.__init__ = function() {
                    e._createInputElement(), B.onMobile && R.canvas.addEventListener(e.IOS_IFRAME ? B.onMiniGame ? "touchend" : "click" : "touchend", e._popupInputMethod)
                }, e._popupInputMethod = function() {
                    if (laya.display.Input.isInputting) {
                        var t = laya.display.Input.inputElement;
                        t.focus()
                    }
                }, e._createInputElement = function() {
                    e._initInput(e.area = B.createElement("textarea")), e._initInput(e.input = B.createElement("input")), e.inputContainer = B.createElement("div"), e.inputContainer.style.position = "absolute", e.inputContainer.style.zIndex = 1e5, B.container.appendChild(e.inputContainer), e.inputContainer.setPos = function(t, i) {
                        e.inputContainer.style.left = t + "px", e.inputContainer.style.top = i + "px"
                    }
                }, e._initInput = function(t) {
                    var i = t.style;
                    i.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", i.resize = "none", i.backgroundColor = "transparent", i.border = "none", i.outline = "none", i.zIndex = 1, t.addEventListener("input", e._processInputting), t.addEventListener("mousemove", e._stopEvent), t.addEventListener("mousedown", e._stopEvent), t.addEventListener("touchmove", e._stopEvent), t.setFontFace = function(e) {
                        t.style.fontFamily = e
                    }, R.isConchApp || (t.setColor = function(e) {
                        t.style.color = e
                    }, t.setFontSize = function(e) {
                        t.style.fontSize = e + "px"
                    })
                }, e._processInputting = function() {
                    var t = laya.display.Input.inputElement.target;
                    if (t) {
                        var e = laya.display.Input.inputElement.value;
                        t._restrictPattern && (e = e.replace(/\u2006|\x27/g, ""), t._restrictPattern.test(e) && (e = e.replace(t._restrictPattern, ""), laya.display.Input.inputElement.value = e)), t._text = e, t.event("input")
                    }
                }, e._stopEvent = function(t) {
                    "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation()
                }, e.TYPE_TEXT = "text", e.TYPE_PASSWORD = "password", e.TYPE_EMAIL = "email", e.TYPE_URL = "url", e.TYPE_NUMBER = "number", e.TYPE_RANGE = "range", e.TYPE_DATE = "date", e.TYPE_MONTH = "month", e.TYPE_WEEK = "week", e.TYPE_TIME = "time", e.TYPE_DATE_TIME = "datetime", e.TYPE_DATE_TIME_LOCAL = "datetime-local", e.TYPE_SEARCH = "search", e.input = null, e.area = null, e.inputElement = null, e.inputContainer = null, e.confirmButton = null, e.promptStyleDOM = null, e.inputHeight = 45, e.isInputting = !1, e.stageMatrix = null, n(e, ["IOS_IFRAME", function() {
                    return this.IOS_IFRAME = B.onIOS && B.window.top != B.window.self
                }]), e
            }(ge),
            Te = function(t) {
                function e(t, i) {
                    this._recreateLock = !1, this._needReleaseAgain = !1, this._enableMerageInAtlas = !0, e.__super.call(this), this._init_(t, i)
                }
                s(e, "laya.resource.HTMLImage", t);
                var i = e.prototype;
                return i._init_ = function(t, e) {
                    this._src = t, this._source = new B.window.Image, e && (e.onload && (this.onload = e.onload), e.onerror && (this.onerror = e.onerror), e.onCreate && e.onCreate(this)), 0 != t.indexOf("data:image") && (this._source.crossOrigin = ""), t && (this._source.src = t)
                }, i.recreateResource = function() {
                    var t = this;
                    if ("" === this._src) throw new Error("src no null！");
                    if (this._needReleaseAgain = !1, this._source) {
                        if (this._recreateLock) return;
                        this.memorySize = this._w * this._h * 4, this._recreateLock = !1, this.completeCreate()
                    } else {
                        this._recreateLock = !0;
                        var e = this;
                        this._source = new B.window.Image, this._source.crossOrigin = "", this._source.onload = function() {
                            return e._needReleaseAgain ? (e._needReleaseAgain = !1, e._source.onload = null, e._source = null, void 0) : (e._source.onload = null, e.memorySize = t._w * t._h * 4, e._recreateLock = !1, e.completeCreate(), void 0)
                        }, this._source.src = this._src
                    }
                }, i.disposeResource = function() {
                    this._recreateLock && (this._needReleaseAgain = !0), this._source && (this._source = null, this.memorySize = 0)
                }, i.onresize = function() {
                    this._w = this._source.width, this._h = this._source.height
                }, r(0, i, "onload", null, function(t) {
                    var e = this;
                    this._onload = t, this._source && (this._source.onload = null != this._onload ? function() {
                        e.onresize(), e._onload()
                    } : null)
                }), r(0, i, "onerror", null, function(t) {
                    var e = this;
                    this._onerror = t, this._source && (this._source.onerror = null != this._onerror ? function() {
                        e._onerror()
                    } : null)
                }), r(0, i, "enableMerageInAtlas", function() {
                    return this._enableMerageInAtlas
                }, function(t) {
                    this._enableMerageInAtlas = t, R.isConchApp && this._source && (this._source.enableMerageInAtlas = t)
                }), e.create = function(t, i) {
                    return new e(t, i)
                }, e
            }(ve),
            be = (function(t) {
                function e() {
                    this._target = null, this._playEvents = null, this._initData = {}, this._aniKeys = null, this._effectClass = null, e.__super.call(this)
                }
                s(e, "laya.display.EffectAnimation", t);
                var i = e.prototype;
                return i._onOtherBegin = function(t) {
                    t != this && this.stop()
                }, i.addEvent = function() {
                    this._target && this._playEvents && (this._setControlNode(this._target), this._target.on(this._playEvents, this, this._onPlayAction))
                }, i._onPlayAction = function() {
                    this.play(0, !1)
                }, i.play = function(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === n && (n = !0), this._target && (this._target.event("effectanimationbegin", [this]), this._recordInitData(), laya.display.AnimationPlayerBase.prototype.play.call(this, t, e, i, n))
                }, i._recordInitData = function() {
                    if (this._aniKeys) {
                        var t = 0,
                            e = 0;
                        e = this._aniKeys.length;
                        var i;
                        for (t = 0; e > t; t++) i = this._aniKeys[t], this._initData[i] = this._target[i]
                    }
                }, i._displayToIndex = function(t) {
                    if (this._animationData) {
                        0 > t && (t = 0), t > this._count && (t = this._count);
                        var e = this._animationData.nodes,
                            i = 0,
                            n = e.length;
                        for (n = n > 1 ? 1 : n, i = 0; n > i; i++) this._displayNodeToFrame(e[i], t)
                    }
                }, i._displayNodeToFrame = function(t, e) {
                    if (this._target) {
                        var i;
                        i = this._target;
                        var n, s, r, o, a = t.frames,
                            h = t.keys,
                            l = 0,
                            u = h.length;
                        o = t.secondFrames;
                        var c, _, d, f, p = 0;
                        for (l = 0; u > l; l++) n = h[l], s = a[n], p = o[n], -1 == p ? r = this._initData[n] : p > e ? (_ = t.keyframes[n], d = _[0], d.tween ? (c = Y[d.tweenMethod], null == c && (c = Y.linearNone), f = _[1], r = c(e, this._initData[n], f.value - this._initData[n], f.index)) : r = this._initData[n]) : r = s.length > e ? s[e] : s[s.length - 1], i[n] = r
                    }
                }, i._calculateNodeKeyFrames = function(e) {
                    t.prototype._calculateNodeKeyFrames.call(this, e); {
                        var i, n, s, r = e.keyframes;
                        e.target
                    }
                    s = {}, e.secondFrames = s;
                    for (i in r) n = r[i], s[i] = n.length <= 1 ? -1 : n[1].index
                }, r(0, i, "target", function() {
                    return this._target
                }, function(t) {
                    this._target && this._target.off("effectanimationbegin", this, this._onOtherBegin), this._target = t, this._target && this._target.on("effectanimationbegin", this, this._onOtherBegin), this.addEvent()
                }), r(0, i, "playEvent", null, function(t) {
                    this._playEvents = t, t && this.addEvent()
                }), r(0, i, "effectData", null, function(t) {
                    if (t) {
                        var e;
                        e = t.animations, e && e[0] && (this._setUp({}, e[0]), e[0].nodes && e[0].nodes[0] && (this._aniKeys = e[0].nodes[0].keys))
                    }
                }), r(0, i, "effectClass", null, function(t) {
                    if (this._effectClass = U.getClass(t), this._effectClass) {
                        var e;
                        if (e = this._effectClass.uiView) {
                            var i;
                            i = e.animations, i && i[0] && (this._setUp({}, i[0]), i[0].nodes && i[0].nodes[0] && (this._aniKeys = i[0].nodes[0].keys))
                        }
                    }
                }), e.EffectAnimationBegin = "effectanimationbegin", e
            }(we), function(t) {
                function e() {
                    this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, e.__super.call(this)
                }
                var i;
                s(e, "laya.utils.GraphicAnimation", t);
                var r = e.prototype;
                return r._parseNodeList = function(t) {
                    this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, t.compId && this._nodeList.push(t.compId);
                    var e = t.child;
                    if (e) {
                        var i = 0,
                            n = e.length;
                        for (i = 0; n > i; i++) this._parseNodeList(e[i])
                    }
                }, r._calGraphicData = function(t) {
                    if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) {
                        var e;
                        for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null
                    }
                }, r._createGraphicData = function() {
                    var t = [],
                        e = 0,
                        i = this.count,
                        n = this._animationNewFrames;
                    n || (n = []);
                    var s;
                    for (e = 0; i > e; e++)(n[e] || !s) && (s = this._createFrameGraphic(e)), t.push(s);
                    this._gList = t
                }, r._createFrameGraphic = function(t) {
                    var i = o.createGraphics();
                    return e._rootMatrix || (e._rootMatrix = new M), this._updateNodeGraphic(this._rootNode, t, e._rootMatrix, i), i
                }, r._updateNodeGraphic = function(t, e, i, n, s) {
                    void 0 === s && (s = 1);
                    var r;
                    r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]);
                    var o = r.alpha * s;
                    if (!(.01 > o)) {
                        r.resultTransform || (r.resultTransform = M.create());
                        var a;
                        a = r.resultTransform, M.mul(r.transform, i, a);
                        var h;
                        r.skin && (h = this._getTextureByUrl(r.skin), h && (a._checkTransform() ? (n.drawTexture(h, 0, 0, r.width, r.height, a, o), r.resultTransform = null) : n.drawTexture(h, a.tx, a.ty, r.width, r.height, null, o)));
                        var l;
                        if (l = t.child) {
                            var u = 0,
                                c = 0;
                            for (c = l.length, u = 0; c > u; u++) this._updateNodeGraphic(l[u], e, a, n, o)
                        }
                    }
                }, r._updateNoChilds = function(t, e) {
                    if (t.skin) {
                        var i = this._getTextureByUrl(t.skin);
                        if (i) {
                            var n = t.transform;
                            n._checkTransform();
                            var s = !1;
                            s = !n.bTransform, s ? e.drawTexture(i, n.tx, n.ty, t.width, t.height, null, t.alpha) : e.drawTexture(i, 0, 0, t.width, t.height, n.clone(), t.alpha)
                        }
                    }
                }, r._updateNodeGraphic2 = function(t, e, i) {
                    var n;
                    if (n = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), !t.child) return this._updateNoChilds(n, i), void 0;
                    var s = n.transform;
                    s._checkTransform();
                    var r = !1;
                    r = !s.bTransform;
                    var o = !1;
                    o = r && (0 != s.tx || 0 != s.ty);
                    var a = !1;
                    a = s.bTransform || 1 != n.alpha, a && i.save(), 1 != n.alpha && i.alpha(n.alpha), r ? o && i.translate(s.tx, s.ty) : i.transform(s.clone());
                    var h;
                    h = t.child;
                    var l;
                    if (n.skin && (l = this._getTextureByUrl(n.skin), l && i.drawTexture(l, 0, 0, n.width, n.height)), h) {
                        var u = 0,
                            c = 0;
                        for (c = h.length, u = 0; c > u; u++) this._updateNodeGraphic2(h[u], e, i)
                    }
                    a ? i.restore() : r ? o && i.translate(-s.tx, -s.ty) : i.transform(s.clone().invert())
                }, r._calculateNodeKeyFrames = function(e) {
                    t.prototype._calculateNodeKeyFrames.call(this, e), this._nodeIDAniDic[e.target] = e
                }, r.getNodeDataByID = function(t) {
                    return this._nodeIDAniDic[t]
                }, r._getParams = function(t, i, n, s) {
                    var r = e._temParam;
                    r.length = i.length;
                    var o = 0,
                        a = i.length;
                    for (o = 0; a > o; o++) r[o] = this._getObjVar(t, i[o][0], n, i[o][1], s);
                    return r
                }, r._getObjVar = function(t, e, i, n, s) {
                    if (t.hasOwnProperty(e)) {
                        var r = t[e];
                        return i >= r.length && (i = r.length - 1), t[e][i]
                    }
                    return s.hasOwnProperty(e) ? s[e] : n
                }, r._getNodeGraphicData = function(t, n, s) {
                    s || (s = i.create()), s.transform ? s.transform.identity() : s.transform = M.create();
                    var r = this.getNodeDataByID(t);
                    if (!r) return s;
                    var o = r.frames,
                        a = this._getParams(o, e._drawTextureCmd, n, this._nodeDefaultProps[t]),
                        h = a[0],
                        l = 0 / 0,
                        u = 0 / 0,
                        c = a[5],
                        _ = a[6],
                        d = a[13],
                        f = a[14],
                        p = a[7],
                        g = a[8],
                        m = a[9],
                        v = a[11],
                        y = a[12];
                    l = a[3], u = a[4], (0 == l || 0 == u) && (h = null), -1 == l && (l = 0), -1 == u && (u = 0);
                    var w;
                    s.skin = h, s.width = l, s.height = u, h && (w = this._getTextureByUrl(h), w ? (l || (l = w.sourceWidth), u || (u = w.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), s.alpha = a[10];
                    var x;
                    x = s.transform, 0 != d && (c = d * l), 0 != f && (_ = f * u), (0 != c || 0 != _) && x.translate(-c, -_);
                    var T = null;
                    if (m || 1 !== p || 1 !== g || v || y) {
                        T = e._tempMt, T.identity(), T.bTransform = !0;
                        var b = .0174532922222222 * (m - v),
                            C = .0174532922222222 * (m + y),
                            S = Math.cos(C),
                            P = Math.sin(C),
                            E = Math.sin(b),
                            A = Math.cos(b);
                        T.a = p * S, T.b = p * P, T.c = -g * E, T.d = g * A, T.tx = T.ty = 0
                    }
                    return T && (x = M.mul(x, T, x)), x.translate(a[1], a[2]), s
                }, r._getTextureByUrl = function(t) {
                    return oe.getRes(t)
                }, r.setAniData = function(t, i) {
                    if (t.animations) {
                        this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = t, this._parseNodeList(t);
                        var n, s = {},
                            r = [],
                            o = t.animations,
                            a = 0,
                            h = o.length;
                        for (a = 0; h > a; a++)
                            if (n = o[a], this._labels = null, (!i || i == n.name) && n) {
                                try {
                                    this._calGraphicData(n)
                                } catch (l) {
                                    console.warn("parse animation fail:" + n.name + ",empty animation created"), this._gList = []
                                }
                                var u = {};
                                u.interval = 1e3 / n.frameRate, u.frames = this._gList, u.labels = this._labels, u.name = n.name, r.push(u), s[n.name] = u
                            } this.animationList = r, this.animationDic = s
                    }
                    e._temParam.length = 0
                }, r.parseByData = function(t) {
                    var e, i;
                    e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, this._parseNodeList(e), this._labels = null;
                    try {
                        this._calGraphicData(i)
                    } catch (n) {
                        console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = []
                    }
                    var s = t;
                    return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, s.name = i.name, s
                }, r.setUpAniData = function(t) {
                    if (t.animations) {
                        var e, i = {},
                            n = [],
                            s = t.animations,
                            r = 0,
                            o = s.length;
                        for (r = 0; o > r; r++)
                            if (e = s[r]) {
                                var a = {};
                                a.name = e.name, a.aniO = e, a.nodeRoot = t, n.push(a), i[e.name] = a
                            } this.animationList = n, this.animationDic = i
                    }
                }, r._clear = function() {
                    if (this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic) {
                        var t, e;
                        for (t in this._nodeGDic) e = this._nodeGDic[t], e && e.recover()
                    }
                    this._nodeGDic = null
                }, e.parseAnimationByData = function(t) {
                    e._I || (e._I = new e);
                    var i;
                    return i = e._I.parseByData(t), e._I._clear(), i
                }, e.parseAnimationData = function(t) {
                    e._I || (e._I = new e), e._I.setUpAniData(t);
                    var i;
                    return i = {}, i.animationList = e._I.animationList, i.animationDic = e._I.animationDic, e._I._clear(), i
                }, e._drawTextureCmd = [
                    ["skin", null],
                    ["x", 0],
                    ["y", 0],
                    ["width", -1],
                    ["height", -1],
                    ["pivotX", 0],
                    ["pivotY", 0],
                    ["scaleX", 1],
                    ["scaleY", 1],
                    ["rotation", 0],
                    ["alpha", 1],
                    ["skewX", 0],
                    ["skewY", 0],
                    ["anchorX", 0],
                    ["anchorY", 0]
                ], e._temParam = [], e._I = null, e._rootMatrix = null, n(e, ["_tempMt", function() {
                    return this._tempMt = new M
                }]), e.__init$ = function() {
                    i = function() {
                        function t() {
                            this.skin = null, this.transform = null, this.resultTransform = null, this.width = 0 / 0, this.height = 0 / 0, this.alpha = 1
                        }
                        s(t, "");
                        var e = t.prototype;
                        return e.recover = function() {
                            this.skin = null, this.width = 0, this.height = 0, this.alpha = 1, this.transform && (this.transform.destroy(), this.transform = null), this.resultTransform && (this.resultTransform.destroy(), this.resultTransform = null), V.recover("GraphicNode", this)
                        }, t.create = function() {
                            return V.getItemByClass("GraphicNode", t)
                        }, t
                    }()
                }, e
            }(we));
        i.__init([h, ae, R, B, $, A, ue, be])
    }(window, document, Laya),
    function(t, e, i) {
        var n = (i.un, i.uns, i.static, i.class),
            s = (i.getset, i.__newvec, function() {
                function t() {}
                return n(t, "LayaMain"), t
            }());
        new s
    }(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var n = Laya[i];
        n && n.__isclass && (e[i] = n)
    }
});
var CtrUtil = function() {
    function t() {
        this.pointer = Math.pow(2, 14), this.blockPointer = 0, this.keySize = 256
    }
    return t.Init = function(e) {
        if (Laya.Browser.window.WebAssembly) {
            var i = Laya.ResourceVersion.addVersionPrefix("libs/min/resc"),
                n = Laya.Browser.window.rescVersion ? Laya.Browser.window.rescVersion : "1.0";
            Laya.Browser.window.JSZipUtils.getBinaryContent(i + "?v=" + n, function(i, n) {
                if (i) alert("zip下载失败");
                else {
                    var s = [0],
                        r = [0],
                        o = 0,
                        a = {
                            memory: new Laya.Browser.window.WebAssembly.Memory({
                                initial: 256,
                                maximum: 256
                            }),
                            STACKTOP: o
                        };
                    Laya.Browser.window.WebAssembly.instantiate(n, {
                        env: a
                    }).then(function(i) {
                        var n = new t;
                        t.Ctr = n, n.blockPointer = n.staticMalloc(0), n.byteView = new Uint8Array(a.memory.buffer), n.Init(s, r, i.instance), e && e()
                    }).catch(function(t) {
                        alert("zip解析失败:" + t)
                    })
                }
            })
        }
    }, t.prototype.Init = function(t, e, i) {
        this.instance = i.exports, i.exports.e(t, e, this.keySize), i.exports.f(t, e, this.keySize), i.exports.d(t, e, 128), this.enc = i.exports.c, this.dec = i.exports.b, this.ofb = i.exports.a
    }, t.prototype.Reset = function() {
        this.instance && (this.instance.e([0], [0], this.keySize), this.instance.f([0], [0], this.keySize))
    }, t.prototype.Encrypt = function(t) {
        var e = new Uint8Array(t);
        return this.loadData(e), this.enc(this.blockPointer, e.length), this.byteView.subarray(this.blockPointer, this.blockPointer + e.length).slice()
    }, t.prototype.Decrypt = function(t) {
        var e = new Uint8Array(t);
        return this.loadData(e), this.dec(this.blockPointer, e.length), this.byteView.subarray(this.blockPointer, this.blockPointer + e.length).slice()
    }, t.prototype.Ofb_Dec = function(t) {
        var e = new Laya.Byte,
            i = t.byteLength;
        e.writeArrayBuffer(t);
        var n = 16 - i % 16;
        e.length = n + i;
        var s = new Uint8Array(e.buffer);
        this.byteView.set(s, this.blockPointer), this.ofb(this.blockPointer, s.length), this.instance.d([0], [0], 128);
        var r = this.byteView.subarray(this.blockPointer, this.blockPointer + s.length).slice();
        return r.slice(0, i)
    }, t.prototype.loadData = function(t) {
        this.byteView.set(t, this.blockPointer)
    }, t.prototype.staticMalloc = function(t) {
        return this.pointer += t, this.pointer - t
    }, t
}();
