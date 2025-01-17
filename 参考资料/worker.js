function testCanImageData() {
    try {
        cc = new ImageData(20, 20), canUseImageData = !0
    } catch (t) {}
}

function loadImage(t) {
    PNG.load(t.url, pngLoaded)
}

function loadImage2(t) {
    var e, a = t.url;
    e = new XMLHttpRequest, e.open("GET", a, !0), e.responseType = "arraybuffer", e.onload = function() {
        var t, i, r = e.response || e.mozResponseArrayBuffer;
        if (t = new Uint8Array(r), self.createImageBitmap) return void doCreateImageBitmap(t, a);
        try {
            startTime = getTimeNow(), i = new PNG(t), i.url = a, i.startTime = startTime, i.decodeEndTime = getTimeNow(), i.decodeTime = i.decodeEndTime - startTime, pngLoaded(i)
        } catch (s) {
            pngFail(a, "parse fail" + s.toString() + ":ya")
        }
    }, e.onerror = function(t) {
        pngFail(a, "loadFail")
    }, e.send(null)
}

function doCreateImageBitmap(t, e) {
    try {
        var a = getTimeNow();
        t = new self.Blob([t], {
            type: "image/png"
        }), self.createImageBitmap(t).then(function(t) {
            var i = {};
            i.url = e, i.imageBitmap = t, i.dataType = "imageBitmap", i.startTime = a, i.decodeTime = getTimeNow() - a, i.sendTime = getTimeNow(), i.type = "Image", postMessage(i, [i.imageBitmap])
        })["catch"](function(t) {
            showMsgToMain("cache:" + t), pngFail(e, "parse fail" + t + ":ya")
        })
    } catch (i) {
        pngFail(e, "parse fail" + i.toString() + ":ya")
    }
}

function getTimeNow() {
    return (new Date).getTime()
}

function pngFail(t, e) {
    var a = {};
    a.url = t, a.imagedata = null, a.type = "Image", a.msg = e, postMessage(a)
}

function showMsgToMain(t) {
    var e = {};
    e.type = "Msg", e.msg = t, postMessage(e)
}

function pngLoaded(t) {
    var e = {};
    e.url = t.url, canUseImageData ? (e.imagedata = t.getImageData(), e.dataType = "imagedata") : (e.buffer = t.getImageDataBuffer(), e.dataType = "buffer"), e.width = t.width, e.height = t.height, e.decodeTime = getTimeNow() - t.startTime, e.type = "Image", canUseImageData ? postMessage(e, [e.imagedata.data.buffer]) : postMessage(e, [e.buffer.buffer])
}
var DecodeStream = function() {
        function t() {
            this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null
        }
        return t.prototype = {
            ensureBuffer: function(t) {
                var e = this.buffer,
                    a = e ? e.byteLength : 0;
                if (a > t) return e;
                for (var i = 512; t > i;) i <<= 1;
                for (var r = new Uint8Array(i), s = 0; a > s; ++s) r[s] = e[s];
                return this.buffer = r
            },
            getByte: function() {
                for (var t = this.pos; this.bufferLength <= t;) {
                    if (this.eof) return null;
                    this.readBlock()
                }
                return this.buffer[this.pos++]
            },
            getBytes: function(t) {
                var e = this.pos;
                if (t) {
                    this.ensureBuffer(e + t);
                    for (var a = e + t; !this.eof && this.bufferLength < a;) this.readBlock();
                    var i = this.bufferLength;
                    a > i && (a = i)
                } else {
                    for (; !this.eof;) this.readBlock();
                    var a = this.bufferLength
                }
                return this.pos = a, this.buffer.subarray(e, a)
            },
            lookChar: function() {
                for (var t = this.pos; this.bufferLength <= t;) {
                    if (this.eof) return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos])
            },
            getChar: function() {
                for (var t = this.pos; this.bufferLength <= t;) {
                    if (this.eof) return null;
                    this.readBlock()
                }
                return String.fromCharCode(this.buffer[this.pos++])
            },
            makeSubStream: function(t, e, a) {
                for (var i = t + e; this.bufferLength <= i && !this.eof;) this.readBlock();
                return new Stream(this.buffer, t, e, a)
            },
            skip: function(t) {
                t || (t = 1), this.pos += t
            },
            reset: function() {
                this.pos = 0
            }
        }, t
    }(),
    FlateStream = function() {
        function t(t) {
            throw new Error(t)
        }

        function e(e) {
            var a = 0,
                i = e[a++],
                r = e[a++]; - 1 != i && -1 != r || t("Invalid header in flate stream"), 8 != (15 & i) && t("Unknown compression method in flate stream"), ((i << 8) + r) % 31 != 0 && t("Bad FCHECK in flate stream"), 32 & r && t("FDICT bit set in flate stream"), this.bytes = e, this.bytesPos = a, this.codeSize = 0, this.codeBuf = 0, DecodeStream.call(this)
        }
        var a = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            i = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
            r = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
            s = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
            n = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
        return e.prototype = Object.create(DecodeStream.prototype), e.prototype.getBits = function(e) {
            for (var a, i = this.codeSize, r = this.codeBuf, s = this.bytes, n = this.bytesPos; e > i;) "undefined" == typeof(a = s[n++]) && t("Bad encoding in flate stream"), r |= a << i, i += 8;
            return a = r & (1 << e) - 1, this.codeBuf = r >> e, this.codeSize = i -= e, this.bytesPos = n, a
        }, e.prototype.getCode = function(e) {
            for (var a = e[0], i = e[1], r = this.codeSize, s = this.codeBuf, n = this.bytes, o = this.bytesPos; i > r;) {
                var h;
                "undefined" == typeof(h = n[o++]) && t("Bad encoding in flate stream"), s |= h << r, r += 8
            }
            var f = a[s & (1 << i) - 1],
                d = f >> 16,
                c = 65535 & f;
            return (0 == r || d > r || 0 == d) && t("Bad encoding in flate stream"), this.codeBuf = s >> d, this.codeSize = r - d, this.bytesPos = o, c
        }, e.prototype.generateHuffmanTable = function(t) {
            for (var e = t.length, a = 0, i = 0; e > i; ++i) t[i] > a && (a = t[i]);
            for (var r = 1 << a, s = new Uint32Array(r), n = 1, o = 0, h = 2; a >= n; ++n, o <<= 1, h <<= 1)
                for (var f = 0; e > f; ++f)
                    if (t[f] == n) {
                        for (var d = 0, c = o, i = 0; n > i; ++i) d = d << 1 | 1 & c, c >>= 1;
                        for (var i = d; r > i; i += h) s[i] = n << 16 | f;
                        ++o
                    } return [s, a]
        }, e.prototype.readBlock = function() {
            function e(t, e, a, i, r) {
                for (var s = t.getBits(a) + i; s-- > 0;) e[I++] = r
            }
            var o = this.getBits(3);
            if (1 & o && (this.eof = !0), o >>= 1, 0 == o) {
                var h, f = this.bytes,
                    d = this.bytesPos;
                "undefined" == typeof(h = f[d++]) && t("Bad block header in flate stream");
                var c = h;
                "undefined" == typeof(h = f[d++]) && t("Bad block header in flate stream"), c |= h << 8, "undefined" == typeof(h = f[d++]) && t("Bad block header in flate stream");
                var l = h;
                "undefined" == typeof(h = f[d++]) && t("Bad block header in flate stream"), l |= h << 8, l != (65535 & ~c) && t("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                var u = this.bufferLength,
                    p = this.ensureBuffer(u + c),
                    g = u + c;
                this.bufferLength = g;
                for (var m = u; g > m; ++m) {
                    if ("undefined" == typeof(h = f[d++])) {
                        this.eof = !0;
                        break
                    }
                    p[m] = h
                }
                return void(this.bytesPos = d)
            }
            var y, v;
            if (1 == o) y = s, v = n;
            else if (2 == o) {
                for (var b = this.getBits(5) + 257, w = this.getBits(5) + 1, B = this.getBits(4) + 4, T = Array(a.length), I = 0; B > I;) T[a[I++]] = this.getBits(3);
                for (var U = this.generateHuffmanTable(T), D = 0, I = 0, k = b + w, A = new Array(k); k > I;) {
                    var C = this.getCode(U);
                    16 == C ? e(this, A, 2, 3, D) : 17 == C ? e(this, A, 3, 3, D = 0) : 18 == C ? e(this, A, 7, 11, D = 0) : A[I++] = D = C
                }
                y = this.generateHuffmanTable(A.slice(0, b)), v = this.generateHuffmanTable(A.slice(b, k))
            } else t("Unknown block type in flate stream");
            for (var p = this.buffer, S = p ? p.length : 0, P = this.bufferLength;;) {
                var M = this.getCode(y);
                if (256 > M) P + 1 >= S && (p = this.ensureBuffer(P + 1), S = p.length), p[P++] = M;
                else {
                    if (256 == M) return void(this.bufferLength = P);
                    M -= 257, M = i[M];
                    var L = M >> 16;
                    L > 0 && (L = this.getBits(L));
                    var D = (65535 & M) + L;
                    M = this.getCode(v), M = r[M], L = M >> 16, L > 0 && (L = this.getBits(L));
                    var x = (65535 & M) + L;
                    P + D >= S && (p = this.ensureBuffer(P + D), S = p.length);
                    for (var N = 0; D > N; ++N, ++P) p[P] = p[P - x]
                }
            }
        }, e
    }();
(function() {
    var t;
    t = function() {
        function t(t) {
            var e, a, i, r, s, n, o, h, f, d, c, l, u, p;
            for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, s = null;;) {
                switch (e = this.readUInt32(), f = function() {
                    var t, e;
                    for (e = [], n = t = 0; 4 > t; n = ++t) e.push(String.fromCharCode(this.data[this.pos++]));
                    return e
                }.call(this).join("")) {
                    case "IHDR":
                        if (this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++], 0 != this.interlaceMethod) throw new Error("Invalid interlaceMethod: " + this.interlaceMethod);
                        break;
                    case "acTL":
                        this.animation = {
                            numFrames: this.readUInt32(),
                            numPlays: this.readUInt32() || 1 / 0,
                            frames: []
                        };
                        break;
                    case "PLTE":
                        this.palette = this.read(e);
                        break;
                    case "fcTL":
                        s && this.animation.frames.push(s), this.pos += 4, s = {
                            width: this.readUInt32(),
                            height: this.readUInt32(),
                            xOffset: this.readUInt32(),
                            yOffset: this.readUInt32()
                        }, r = this.readUInt16(), i = this.readUInt16() || 100, s.delay = 1e3 * r / i, s.disposeOp = this.data[this.pos++], s.blendOp = this.data[this.pos++], s.data = [];
                        break;
                    case "IDAT":
                    case "fdAT":
                        for ("fdAT" === f && (this.pos += 4, e -= 4), t = (null != s ? s.data : void 0) || this.imgData, n = l = 0; e >= 0 ? e > l : l > e; n = e >= 0 ? ++l : --l) t.push(this.data[this.pos++]);
                        break;
                    case "tRNS":
                        switch (this.transparency = {}, this.colorType) {
                            case 3:
                                if (this.transparency.indexed = this.read(e), d = 255 - this.transparency.indexed.length, d > 0)
                                    for (n = u = 0; d >= 0 ? d > u : u > d; n = d >= 0 ? ++u : --u) this.transparency.indexed.push(255);
                                break;
                            case 0:
                                this.transparency.grayscale = this.read(e)[0];
                                break;
                            case 2:
                                this.transparency.rgb = this.read(e)
                        }
                        break;
                    case "tEXt":
                        c = this.read(e), o = c.indexOf(0), h = String.fromCharCode.apply(String, c.slice(0, o)), this.text[h] = String.fromCharCode.apply(String, c.slice(o + 1));
                        break;
                    case "IEND":
                        return s && this.animation.frames.push(s), this.colors = function() {
                            switch (this.colorType) {
                                case 0:
                                case 3:
                                case 4:
                                    return 1;
                                case 2:
                                case 6:
                                    return 3
                            }
                        }.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, a = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * a, this.colorSpace = function() {
                            switch (this.colors) {
                                case 1:
                                    return "DeviceGray";
                                case 3:
                                    return "DeviceRGB"
                            }
                        }.call(this), void(this.imgData = new Uint8Array(this.imgData));
                    default:
                        this.pos += e
                }
                if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
            }
        }
        var e, a, i, r, s, n;
        return t.load = function(e, a) {
            var i;
            return "function" == typeof canvas && (a = canvas), i = new XMLHttpRequest, i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = function() {
                var r, s;
                return r = new Uint8Array(i.response || i.mozResponseArrayBuffer), s = new t(r), s.url = e, "function" == typeof a ? a(s) : void 0
            }, i.send(null)
        }, r = 0, i = 1, s = 2, a = 0, e = 1, t.prototype.read = function(t) {
            var e, a, i;
            for (i = [], e = a = 0; t >= 0 ? t > a : a > t; e = t >= 0 ? ++a : --a) i.push(this.data[this.pos++]);
            return i
        }, t.prototype.readUInt32 = function() {
            var t, e, a, i;
            return t = this.data[this.pos++] << 24, e = this.data[this.pos++] << 16, a = this.data[this.pos++] << 8, i = this.data[this.pos++], t | e | a | i
        }, t.prototype.readUInt16 = function() {
            var t, e;
            return t = this.data[this.pos++] << 8, e = this.data[this.pos++], t | e
        }, t.prototype.decodePixels = function(t) {
            var e, a, i, r, s, n, o, h, f, d, c, l, u, p, g, m, y, v, b, w, B, T, I;
            if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);
            for (t = new FlateStream(t), t = t.getBytes(), l = this.pixelBitlength / 8, m = l * this.width, u = new Uint8Array(m * this.height), n = t.length, g = 0, p = 0, a = 0; n > p;) {
                switch (t[p++]) {
                    case 0:
                        for (r = b = 0; m > b; r = b += 1) u[a++] = t[p++];
                        break;
                    case 1:
                        for (r = w = 0; m > w; r = w += 1) e = t[p++], s = l > r ? 0 : u[a - l], u[a++] = (e + s) % 256;
                        break;
                    case 2:
                        for (r = B = 0; m > B; r = B += 1) e = t[p++], i = (r - r % l) / l, y = g && u[(g - 1) * m + i * l + r % l], u[a++] = (y + e) % 256;
                        break;
                    case 3:
                        for (r = T = 0; m > T; r = T += 1) e = t[p++], i = (r - r % l) / l, s = l > r ? 0 : u[a - l], y = g && u[(g - 1) * m + i * l + r % l], u[a++] = (e + Math.floor((s + y) / 2)) % 256;
                        break;
                    case 4:
                        for (r = I = 0; m > I; r = I += 1) e = t[p++], i = (r - r % l) / l, s = l > r ? 0 : u[a - l], 0 === g ? y = v = 0 : (y = u[(g - 1) * m + i * l + r % l], v = i && u[(g - 1) * m + (i - 1) * l + r % l]), o = s + y - v, h = Math.abs(o - s), d = Math.abs(o - y), c = Math.abs(o - v), f = d >= h && c >= h ? s : c >= d ? y : v, u[a++] = (e + f) % 256;
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + t[p - 1])
                }
                g++
            }
            return u
        }, t.prototype.decodePalette = function() {
            var t, e, a, i, r, s, n, o, h, f;
            i = this.palette, n = this.transparency.indexed || [];
            var d;
            for (d = 4 * i.length / 3, s = new Uint8Array(d), r = 0, a = i.length, t = 0, e = o = 0, h = i.length; h > o; e = o += 3) s[r++] = i[e], s[r++] = i[e + 1], s[r++] = i[e + 2], s[r++] = null != (f = n[t++]) ? f : 255;
            return s
        }, t.prototype.getImageData = function() {
            var t = new self.ImageData(this.width, this.height);
            return this.copyToImageData(t, this.decodePixels()), t
        }, t.prototype.getImageDataBuffer = function() {
            var t;
            return t = self.Uint8ClampedArray ? new self.Uint8ClampedArray(this.width * this.height * 4) : new self.Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t
        }, t.prototype.copyToImageData = function(t, e) {
            var a, i, r, s, n, o, h, f, d, c, l;
            if (i = this.colors, d = null, a = this.hasAlphaChannel, this.palette.length && (d = null != (l = this._decodedPalette) ? l : this._decodedPalette = this.decodePalette(), i = 4, a = !0), r = t.data || t, f = r.length, n = d || e, s = o = 0, 1 === i)
                for (; f > s;) h = d ? 4 * e[s / 4] : o, c = n[h++], r[s++] = c, r[s++] = c, r[s++] = c, r[s++] = a ? n[h++] : 255, o = h;
            else
                for (; f > s;) h = d ? 4 * e[s / 4] : o, r[s++] = n[h++], r[s++] = n[h++], r[s++] = n[h++], r[s++] = a ? n[h++] : 255, o = h
        }, t.prototype.decode = function() {
            var t;
            return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t
        }, t.prototype.decodeFrames = function(t) {
            var e, a, i, r, s, o, h, f;
            if (this.animation) {
                for (h = this.animation.frames, f = [], a = s = 0, o = h.length; o > s; a = ++s) e = h[a], i = t.createImageData(e.width, e.height), r = this.decodePixels(new Uint8Array(e.data)), this.copyToImageData(i, r), e.imageData = i, f.push(e.image = n(i));
                return f
            }
        }, t
    }(), this.PNG = t
}).call(this), onmessage = function(t) {
    var e = t.data;
    switch (e.type) {
        case "load":
            loadImage2(e)
    }
};
var canUseImageData = !1;
testCanImageData();