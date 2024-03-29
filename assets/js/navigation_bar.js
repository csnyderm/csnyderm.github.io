(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    6010: function(e, t, n) {
        "use strict";
        t.Z = function() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++)
                                t[n] && (r = e(t[n])) && (o && (o += " "),
                                o += r);
                        else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (r && (r += " "),
                r += t);
            return r
        }
    },
    5202: function() {
        !function() {
            "use strict";
            function e(e) {
                var t = !0
                  , n = !1
                  , r = null
                  , o = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function i(e) {
                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList"in e && "contains"in e.classList
                }
                function a(e) {
                    e.classList.contains("focus-visible") || (e.classList.add("focus-visible"),
                    e.setAttribute("data-focus-visible-added", ""))
                }
                function l(e) {
                    t = !1
                }
                function s() {
                    document.addEventListener("mousemove", u),
                    document.addEventListener("mousedown", u),
                    document.addEventListener("mouseup", u),
                    document.addEventListener("pointermove", u),
                    document.addEventListener("pointerdown", u),
                    document.addEventListener("pointerup", u),
                    document.addEventListener("touchmove", u),
                    document.addEventListener("touchstart", u),
                    document.addEventListener("touchend", u)
                }
                function u(e) {
                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1,
                    document.removeEventListener("mousemove", u),
                    document.removeEventListener("mousedown", u),
                    document.removeEventListener("mouseup", u),
                    document.removeEventListener("pointermove", u),
                    document.removeEventListener("pointerdown", u),
                    document.removeEventListener("pointerup", u),
                    document.removeEventListener("touchmove", u),
                    document.removeEventListener("touchstart", u),
                    document.removeEventListener("touchend", u))
                }
                document.addEventListener("keydown", function(n) {
                    n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && a(e.activeElement),
                    t = !0)
                }, !0),
                document.addEventListener("mousedown", l, !0),
                document.addEventListener("pointerdown", l, !0),
                document.addEventListener("touchstart", l, !0),
                document.addEventListener("visibilitychange", function(e) {
                    "hidden" === document.visibilityState && (n && (t = !0),
                    s())
                }, !0),
                s(),
                e.addEventListener("focus", function(e) {
                    var n, r, l;
                    i(e.target) && (t || (r = (n = e.target).type,
                    "INPUT" === (l = n.tagName) && o[r] && !n.readOnly || "TEXTAREA" === l && !n.readOnly || n.isContentEditable)) && a(e.target)
                }, !0),
                e.addEventListener("blur", function(e) {
                    if (i(e.target)) {
                        var t;
                        (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0,
                        window.clearTimeout(r),
                        r = window.setTimeout(function() {
                            n = !1
                        }, 100),
                        (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"),
                        t.removeAttribute("data-focus-visible-added")))
                    }
                }, !0),
                e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if ("undefined" != typeof window && "undefined" != typeof document) {
                var t;
                window.applyFocusVisiblePolyfill = e;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (n) {
                    (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            "undefined" != typeof document && e(document)
        }()
    },
    3837: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(1857)
        }
        ])
    },
    227: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = function(e, t, n, r) {
            return !1
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9749: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageLoaderProps", {
            enumerable: !0,
            get: function() {
                return c.ImageLoaderProps
            }
        }),
        t.default = function(e) {
            let t, n;
            var o, {src: i, sizes: h, unoptimized: b=!1, priority: x=!1, loading: y, className: w, quality: E, width: j, height: A, fill: S, style: k, onLoad: P, onLoadingComplete: N, placeholder: L="empty", blurDataURL: C, layout: O, objectFit: T, objectPosition: z, lazyBoundary: I, lazyRoot: M} = e, F = a(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
            let R = l.useContext(d.ImageConfigContext)
              , _ = l.useMemo(()=>{
                let e = p || R || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , n = e.deviceSizes.sort((e,t)=>e - t);
                return r({}, e, {
                    allSizes: t,
                    deviceSizes: n
                })
            }
            , [R])
              , B = F
              , D = B.loader || f.default;
            if (delete B.loader,
            "__next_img_default"in D) {
                if ("custom" === _.loader)
                    throw Error(`Image with src "${i}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)
            } else {
                let$ = D;
                D = e=>{
                    let {config: t} = e
                      , n = a(e, ["config"]);
                    return $(n)
                }
            }
            if (O) {
                "fill" === O && (S = !0);
                let H = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[O];
                H && (k = r({}, k, H));
                let U = {
                    responsive: "100vw",
                    fill: "100vw"
                }[O];
                U && !h && (h = U)
            }
            let W = ""
              , G = v(j)
              , Z = v(A);
            if ("object" == typeof (o = i) && (m(o) || void 0 !== o.src)) {
                let q = m(i) ? i.default : i;
                if (!q.src)
                    throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(q)}`);
                if (!q.height || !q.width)
                    throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(q)}`);
                if (t = q.blurWidth,
                n = q.blurHeight,
                C = C || q.blurDataURL,
                W = q.src,
                !S) {
                    if (G || Z) {
                        if (G && !Z) {
                            let K = G / q.width;
                            Z = Math.round(q.height * K)
                        } else if (!G && Z) {
                            let V = Z / q.height;
                            G = Math.round(q.width * V)
                        }
                    } else
                        G = q.width,
                        Z = q.height
                }
            }
            let Q = !x && ("lazy" === y || void 0 === y);
            ((i = "string" == typeof i ? i : W).startsWith("data:") || i.startsWith("blob:")) && (b = !0,
            Q = !1),
            _.unoptimized && (b = !0);
            let[X,Y] = l.useState(!1)
              , [J,ee] = l.useState(!1)
              , et = v(E)
              , en = Object.assign(S ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: T,
                objectPosition: z
            } : {}, J ? {} : {
                color: "transparent"
            }, k)
              , er = "blur" === L && C && !X ? {
                backgroundSize: en.objectFit || "cover",
                backgroundPosition: en.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,${u.getImageBlurSvg({
                    widthInt: G,
                    heightInt: Z,
                    blurWidth: t,
                    blurHeight: n,
                    blurDataURL: C
                })}")`
            } : {}
              , eo = function(e) {
                let {config: t, src: n, unoptimized: r, width: o, quality: i, sizes: a, loader: l} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: s, kind: u} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: o} = e;
                    if (n) {
                        let i = /(^|\s)(1?\d?\d)vw/g
                          , a = [];
                        for (let l; l = i.exec(n); l)
                            a.push(parseInt(l[2]));
                        if (a.length) {
                            let s = .01 * Math.min(...a);
                            return {
                                widths: o.filter(e=>e >= r[0] * s),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: r,
                            kind: "w"
                        };
                    let u = [...new Set([t, 2 * t].map(e=>o.find(t=>t >= e) || o[o.length - 1]))];
                    return {
                        widths: u,
                        kind: "x"
                    }
                }(t, o, a)
                  , c = s.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: s.map((e,r)=>`${l({
                        config: t,
                        src: n,
                        quality: i,
                        width: e
                    })} ${"w" === u ? e : r + 1}${u}`).join(", "),
                    src: l({
                        config: t,
                        src: n,
                        quality: i,
                        width: s[c]
                    })
                }
            }({
                config: _,
                src: i,
                unoptimized: b,
                width: G,
                quality: et,
                sizes: h,
                loader: D
            })
              , ei = i
              , ea = {
                imageSrcSet: eo.srcSet,
                imageSizes: eo.sizes,
                crossOrigin: B.crossOrigin
            }
              , el = l.useRef(P);
            l.useEffect(()=>{
                el.current = P
            }
            , [P]);
            let es = l.useRef(N);
            l.useEffect(()=>{
                es.current = N
            }
            , [N]);
            let eu = r({
                isLazy: Q,
                imgAttributes: eo,
                heightInt: Z,
                widthInt: G,
                qualityInt: et,
                className: w,
                imgStyle: en,
                blurStyle: er,
                loading: y,
                config: _,
                fill: S,
                unoptimized: b,
                placeholder: L,
                loader: D,
                srcString: ei,
                onLoadRef: el,
                onLoadingCompleteRef: es,
                setBlurComplete: Y,
                setShowAltText: ee
            }, B);
            return l.default.createElement(l.default.Fragment, null, l.default.createElement(g, Object.assign({}, eu)), x ? l.default.createElement(s.default, null, l.default.createElement("link", Object.assign({
                key: "__nimg-" + eo.src + eo.srcSet + eo.sizes,
                rel: "preload",
                as: "image",
                href: eo.srcSet ? void 0 : eo.src
            }, ea))) : null)
        }
        ;
        var r = n(6495).Z
          , o = n(2648).Z
          , i = n(1598).Z
          , a = n(7273).Z
          , l = i(n(7294))
          , s = o(n(3121))
          , u = n(2675)
          , c = n(139)
          , d = n(8730);
        n(7238);
        var f = o(n(9824));
        let p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e) {
            return void 0 !== e.default
        }
        function v(e) {
            return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function h(e, t, n, o, i, a, l) {
            if (!e || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            let s = "decode"in e ? e.decode() : Promise.resolve();
            s.catch(()=>{}
            ).then(()=>{
                if (e.parentNode) {
                    if ("blur" === n && a(!0),
                    null == o ? void 0 : o.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let l = !1
                          , s = !1;
                        o.current(r({}, t, {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>l,
                            isPropagationStopped: ()=>s,
                            persist() {},
                            preventDefault() {
                                l = !0,
                                t.preventDefault()
                            },
                            stopPropagation() {
                                s = !0,
                                t.stopPropagation()
                            }
                        }))
                    }
                    (null == i ? void 0 : i.current) && i.current(e)
                }
            }
            )
        }
        let g = e=>{
            var {imgAttributes: t, heightInt: n, widthInt: o, qualityInt: i, className: s, imgStyle: u, blurStyle: c, isLazy: d, fill: f, placeholder: p, loading: m, srcString: v, config: g, unoptimized: b, loader: x, onLoadRef: y, onLoadingCompleteRef: w, setBlurComplete: E, setShowAltText: j, onLoad: A, onError: S} = e
              , k = a(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
            return m = d ? "lazy" : m,
            l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, k, t, {
                width: o,
                height: n,
                decoding: "async",
                "data-nimg": f ? "fill" : "1",
                className: s,
                loading: m,
                style: r({}, u, c),
                ref: l.useCallback(e=>{
                    e && (S && (e.src = e.src),
                    e.complete && h(e, v, p, y, w, E, b))
                }
                , [v, p, y, w, E, S, b]),
                onLoad(e) {
                    let t = e.currentTarget;
                    h(t, v, p, y, w, E, b)
                },
                onError(e) {
                    j(!0),
                    "blur" === p && E(!0),
                    S && S(e)
                }
            })))
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1551: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2648).Z
          , o = n(7273).Z
          , i = r(n(7294))
          , a = n(1003)
          , l = n(7795)
          , s = n(4465)
          , u = n(2692)
          , c = n(8245)
          , d = n(9246)
          , f = n(227)
          , p = n(3468);
        let m = new Set;
        function v(e, t, n, r) {
            if (a.isLocalURL(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let o = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                      , i = t + "%" + n + "%" + o;
                    if (m.has(i))
                        return;
                    m.add(i)
                }
                Promise.resolve(e.prefetch(t, n, r)).catch(e=>{}
                )
            }
        }
        function h(e) {
            return "string" == typeof e ? e : l.formatUrl(e)
        }
        let g = i.default.forwardRef(function(e, t) {
            let n, r;
            let {href: l, as: m, children: g, prefetch: b, passHref: x, replace: y, shallow: w, scroll: E, locale: j, onClick: A, onMouseEnter: S, onTouchStart: k, legacyBehavior: P=!0 !== Boolean(!0)} = e
              , N = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = g,
            P && ("string" == typeof n || "number" == typeof n) && (n = i.default.createElement("a", null, n));
            let L = !1 !== b
              , C = i.default.useContext(u.RouterContext)
              , O = i.default.useContext(c.AppRouterContext)
              , T = null != C ? C : O
              , z = !C
              , {href: I, as: M} = i.default.useMemo(()=>{
                if (!C) {
                    let e = h(l);
                    return {
                        href: e,
                        as: m ? h(m) : e
                    }
                }
                let[t,n] = a.resolveHref(C, l, !0);
                return {
                    href: t,
                    as: m ? a.resolveHref(C, m) : n || t
                }
            }
            , [C, l, m])
              , F = i.default.useRef(I)
              , R = i.default.useRef(M);
            P && (r = i.default.Children.only(n));
            let _ = P ? r && "object" == typeof r && r.ref : t
              , [B,D,$] = d.useIntersection({
                rootMargin: "200px"
            })
              , H = i.default.useCallback(e=>{
                (R.current !== M || F.current !== I) && ($(),
                R.current = M,
                F.current = I),
                B(e),
                _ && ("function" == typeof _ ? _(e) : "object" == typeof _ && (_.current = e))
            }
            , [M, _, I, $, B]);
            i.default.useEffect(()=>{
                T && D && L && v(T, I, M, {
                    locale: j
                })
            }
            , [M, I, D, j, L, null == C ? void 0 : C.locale, T]);
            let U = {
                ref: H,
                onClick(e) {
                    P || "function" != typeof A || A(e),
                    P && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    T && !e.defaultPrevented && function(e, t, n, r, o, l, s, u, c, d) {
                        let {nodeName: f} = e.currentTarget
                          , p = "A" === f.toUpperCase();
                        if (p && (function(e) {
                            let {target: t} = e.currentTarget;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !a.isLocalURL(n)))
                            return;
                        e.preventDefault();
                        let m = ()=>{
                            "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                shallow: l,
                                locale: u,
                                scroll: s
                            }) : t[o ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !d
                            })
                        }
                        ;
                        c ? i.default.startTransition(m) : m()
                    }(e, T, I, M, y, w, E, j, z, L)
                },
                onMouseEnter(e) {
                    P || "function" != typeof S || S(e),
                    P && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    T && (L || !z) && v(T, I, M, {
                        locale: j,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart(e) {
                    P || "function" != typeof k || k(e),
                    P && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    T && (L || !z) && v(T, I, M, {
                        locale: j,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if (!P || x || "a" === r.type && !("href"in r.props)) {
                let W = void 0 !== j ? j : null == C ? void 0 : C.locale
                  , G = (null == C ? void 0 : C.isLocaleDomain) && f.getDomainLocale(M, W, null == C ? void 0 : C.locales, null == C ? void 0 : C.domainLocales);
                U.href = G || p.addBasePath(s.addLocale(M, W, null == C ? void 0 : C.defaultLocale))
            }
            return P ? i.default.cloneElement(r, U) : i.default.createElement("a", Object.assign({}, N, U), n)
        });
        t.default = g,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9246: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            let {rootRef: t, rootMargin: n, disabled: s} = e
              , u = s || !i
              , [c,d] = r.useState(!1)
              , [f,p] = r.useState(null);
            r.useEffect(()=>{
                if (i) {
                    if (!u && !c && f && f.tagName) {
                        let e = function(e, t, n) {
                            let {id: r, observer: o, elements: i} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = l.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = a.get(r)))
                                    return t;
                                let o = new Map
                                  , i = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: i,
                                    elements: o
                                },
                                l.push(n),
                                a.set(n, t),
                                t
                            }(n);
                            return i.set(e, t),
                            o.observe(e),
                            function() {
                                if (i.delete(e),
                                o.unobserve(e),
                                0 === i.size) {
                                    o.disconnect(),
                                    a.delete(r);
                                    let t = l.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    t > -1 && l.splice(t, 1)
                                }
                            }
                        }(f, e=>e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return e
                    }
                } else if (!c) {
                    let r = o.requestIdleCallback(()=>d(!0));
                    return ()=>o.cancelIdleCallback(r)
                }
            }
            , [f, u, n, t, c]);
            let m = r.useCallback(()=>{
                d(!1)
            }
            , []);
            return [p, c, m]
        }
        ;
        var r = n(7294)
          , o = n(4686);
        let i = "function" == typeof IntersectionObserver
          , a = new Map
          , l = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2675: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getImageBlurSvg = function(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: o, blurDataURL: i} = e
              , a = r || t
              , l = o || n
              , s = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return a && l ? `%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${a} ${l}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${r && o ? "1" : "20"}'/%3E${s}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${i}'/%3E%3C/svg%3E` : `%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${i}'/%3E%3C/svg%3E`
        }
    },
    9824: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: o} = e;
            return n.endsWith(".svg") && !t.dangerouslyAllowSVG ? n : `${t.path}?url=${encodeURIComponent(n)}&w=${r}&q=${o || 75}`
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n.__next_img_default = !0,
        t.default = n
    },
    7527: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return s
            }
        });
        var r = n(5893)
          , o = n(7294)
          , i = n(6010);
        let a = (0,
        o.forwardRef)(function(e, t) {
            let {className: n, children: o, ...a} = e;
            return (0,
            r.jsx)("div", {
                ref: t,
                className: (0,
                i.Z)("sm:px-8", n),
                ...a,
                children: (0,
                r.jsx)("div", {
                    className: "mx-auto max-w-7xl lg:px-8",
                    children: o
                })
            })
        })
          , l = (0,
        o.forwardRef)(function(e, t) {
            let {className: n, children: o, ...a} = e;
            return (0,
            r.jsx)("div", {
                ref: t,
                className: (0,
                i.Z)("relative px-4 sm:px-8 lg:px-12", n),
                ...a,
                children: (0,
                r.jsx)("div", {
                    className: "mx-auto max-w-2xl lg:max-w-5xl",
                    children: o
                })
            })
        })
          , s = (0,
        o.forwardRef)(function(e, t) {
            let {children: n, ...o} = e;
            return (0,
            r.jsx)(a, {
                ref: t,
                ...o,
                children: (0,
                r.jsx)(l, {
                    children: n
                })
            })
        });
        s.Outer = a,
        s.Inner = l
    },
    1857: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return tr
            }
        });
        var r, o, i, a, l, s, u, c, d, f, p, m, v, h, g = n(5893), b = n(7294), x = n(1664), y = n.n(x), w = n(7527);
        function E(e) {
            let {href: t, children: n} = e;
            return (0,
            g.jsx)(y(), {
                href: t,
                className: "transition hover:text-teal-500 dark:hover:text-teal-400",
                children: n
            })
        }
        function j() {
            return (0,
            g.jsx)("footer", {
                className: "mt-32",
                children: (0,
                g.jsx)(w.W.Outer, {
                    children: (0,
                    g.jsx)("div", {
                        className: "border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40",
                        children: (0,
                        g.jsx)(w.W.Inner, {
                            children: (0,
                            g.jsxs)("div", {
                                className: "flex flex-col items-center justify-between gap-6 sm:flex-row",
                                children: [(0,
                                g.jsxs)("div", {
                                    className: "flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200",
                                    children: [(0,
                                    g.jsx)(E, {
                                        href: "/about",
                                        children: "About"
                                    }), (0,
                                    g.jsx)(E, {
                                        href: "/projects",
                                        children: "Projects"
                                    }), (0,
                                    g.jsx)(E, {
                                        href: "/speaking",
                                        children: "Speaking"
                                    }), (0,
                                    g.jsx)(E, {
                                        href: "/uses",
                                        children: "Uses"
                                    })]
                                }), (0,
                                g.jsxs)("p", {
                                    className: "text-sm text-zinc-400 dark:text-zinc-500",
                                    children: ["\xa9 ", new Date().getFullYear(), " Spencer Sharp. All rights reserved."]
                                })]
                            })
                        })
                    })
                })
            })
        }
        var A = n(5675)
          , S = n.n(A)
          , k = n(1163);
        function P(e, t, ...n) {
            if (e in t) {
                let r = t[e];
                return "function" == typeof r ? r(...n) : r
            }
            let o = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
            throw Error.captureStackTrace && Error.captureStackTrace(o, P),
            o
        }
        function N(...e) {
            return e.filter(Boolean).join(" ")
        }
        var L = ((r = L || {})[r.None = 0] = "None",
        r[r.RenderStrategy = 1] = "RenderStrategy",
        r[r.Static = 2] = "Static",
        r)
          , C = ((o = C || {})[o.Unmount = 0] = "Unmount",
        o[o.Hidden = 1] = "Hidden",
        o);
        function O({ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i=!0, name: a}) {
            let l = z(t, e);
            if (i)
                return T(l, n, r, a);
            let s = null != o ? o : 0;
            if (2 & s) {
                let {static: u=!1, ...c} = l;
                if (u)
                    return T(c, n, r, a)
            }
            if (1 & s) {
                let {unmount: d=!0, ...f} = l;
                return P(d ? 0 : 1, {
                    0: ()=>null,
                    1: ()=>T({
                        ...f,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, n, r, a)
                })
            }
            return T(l, n, r, a)
        }
        function T(e, t={}, n, r) {
            var o;
            let {as: i=n, children: a, refName: l="ref", ...s} = F(e, ["unmount", "static"])
              , u = void 0 !== e.ref ? {
                [l]: e.ref
            } : {}
              , c = "function" == typeof a ? a(t) : a;
            s.className && "function" == typeof s.className && (s.className = s.className(t));
            let d = {};
            if (t) {
                let f = !1
                  , p = [];
                for (let[m,v] of Object.entries(t))
                    "boolean" == typeof v && (f = !0),
                    !0 === v && p.push(m);
                f && (d["data-headlessui-state"] = p.join(" "))
            }
            if (i === b.Fragment && Object.keys(M(s)).length > 0) {
                if (!(0,
                b.isValidElement)(c) || Array.isArray(c) && c.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(e=>`  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));
                let h = N(null == (o = c.props) ? void 0 : o.className, s.className);
                return (0,
                b.cloneElement)(c, Object.assign({}, z(c.props, M(F(s, ["ref"]))), d, u, function(...e) {
                    return {
                        ref: e.every(e=>null == e) ? void 0 : t=>{
                            for (let n of e)
                                null != n && ("function" == typeof n ? n(t) : n.current = t)
                        }
                    }
                }(c.ref, u.ref), h ? {
                    className: h
                } : {}))
            }
            return (0,
            b.createElement)(i, Object.assign({}, F(s, ["ref"]), i !== b.Fragment && u, i !== b.Fragment && d), c)
        }
        function z(...e) {
            if (0 === e.length)
                return {};
            if (1 === e.length)
                return e[0];
            let t = {}
              , n = {};
            for (let r of e)
                for (let o in r)
                    o.startsWith("on") && "function" == typeof r[o] ? (null != n[o] || (n[o] = []),
                    n[o].push(r[o])) : t[o] = r[o];
            if (t.disabled || t["aria-disabled"])
                return Object.assign(t, Object.fromEntries(Object.keys(n).map(e=>[e, void 0])));
            for (let i in n)
                Object.assign(t, {
                    [i](e, ...t) {
                        let r = n[i];
                        for (let o of r) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent)instanceof Event) && e.defaultPrevented)
                                return;
                            o(e, ...t)
                        }
                    }
                });
            return t
        }
        function I(e) {
            var t;
            return Object.assign((0,
            b.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function M(e) {
            let t = Object.assign({}, e);
            for (let n in t)
                void 0 === t[n] && delete t[n];
            return t
        }
        function F(e, t=[]) {
            let n = Object.assign({}, e);
            for (let r of t)
                r in n && delete n[r];
            return n
        }
        var R = Object.defineProperty
          , _ = (e,t,n)=>t in e ? R(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , B = (e,t,n)=>(_(e, "symbol" != typeof t ? t + "" : t, n),
        n);
        let D = new class {
            constructor() {
                B(this, "current", this.detect()),
                B(this, "handoffState", "pending"),
                B(this, "currentId", 0)
            }
            set(e) {
                this.current !== e && (this.handoffState = "pending",
                this.currentId = 0,
                this.current = e)
            }
            reset() {
                this.set(this.detect())
            }
            nextId() {
                return ++this.currentId
            }
            get isServer() {
                return "server" === this.current
            }
            get isClient() {
                return "client" === this.current
            }
            detect() {
                return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete")
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState
            }
        }
          , $ = (e,t)=>{
            D.isServer ? (0,
            b.useEffect)(e, t) : (0,
            b.useLayoutEffect)(e, t)
        }
        ;
        function H(e) {
            let t = (0,
            b.useRef)(e);
            return $(()=>{
                t.current = e
            }
            , [e]),
            t
        }
        let U = function(e) {
            let t = H(e);
            return b.useCallback((...e)=>t.current(...e), [t])
        }
          , W = Symbol();
        function G(...e) {
            let t = (0,
            b.useRef)(e);
            (0,
            b.useEffect)(()=>{
                t.current = e
            }
            , [e]);
            let n = U(e=>{
                for (let n of t.current)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            }
            );
            return e.every(e=>null == e || (null == e ? void 0 : e[W])) ? void 0 : n
        }
        function Z() {
            let[e,t] = (0,
            b.useState)(D.isHandoffComplete);
            return e && !1 === D.isHandoffComplete && t(!1),
            (0,
            b.useEffect)(()=>{
                !0 !== e && t(!0)
            }
            , [e]),
            (0,
            b.useEffect)(()=>D.handoff(), []),
            e
        }
        let q = null != (h = b.useId) ? h : function() {
            let e = Z()
              , [t,n] = b.useState(e ? ()=>D.nextId() : null);
            return $(()=>{
                null === t && n(D.nextId())
            }
            , [t]),
            null != t ? "" + t : void 0
        }
        ;
        var K = ((i = K || {}).Space = " ",
        i.Enter = "Enter",
        i.Escape = "Escape",
        i.Backspace = "Backspace",
        i.Delete = "Delete",
        i.ArrowLeft = "ArrowLeft",
        i.ArrowUp = "ArrowUp",
        i.ArrowRight = "ArrowRight",
        i.ArrowDown = "ArrowDown",
        i.Home = "Home",
        i.End = "End",
        i.PageUp = "PageUp",
        i.PageDown = "PageDown",
        i.Tab = "Tab",
        i);
        function V(e) {
            let t = e.parentElement
              , n = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(r && function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(n)) && r
        }
        function Q(e) {
            return D.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
        let X = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");
        var Y = ((a = Y || {})[a.First = 1] = "First",
        a[a.Previous = 2] = "Previous",
        a[a.Next = 4] = "Next",
        a[a.Last = 8] = "Last",
        a[a.WrapAround = 16] = "WrapAround",
        a[a.NoScroll = 32] = "NoScroll",
        a)
          , J = ((l = J || {})[l.Error = 0] = "Error",
        l[l.Overflow = 1] = "Overflow",
        l[l.Success = 2] = "Success",
        l[l.Underflow = 3] = "Underflow",
        l)
          , ee = ((s = ee || {})[s.Previous = -1] = "Previous",
        s[s.Next = 1] = "Next",
        s);
        function et(e=document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(X)).sort((e,t)=>Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
        }
        var en = ((u = en || {})[u.Strict = 0] = "Strict",
        u[u.Loose = 1] = "Loose",
        u);
        function er(e, t=0) {
            var n;
            return e !== (null == (n = Q(e)) ? void 0 : n.body) && P(t, {
                0: ()=>e.matches(X),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(X))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        function eo(e, t, {sorted: n=!0, relativeTo: r=null, skipElements: o=[]}={}) {
            var i, a, l;
            let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
              , u = Array.isArray(e) ? n ? function(e, t=e=>e) {
                return e.slice().sort((e,n)=>{
                    let r = t(e)
                      , o = t(n);
                    if (null === r || null === o)
                        return 0;
                    let i = r.compareDocumentPosition(o);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }
                )
            }(e) : e : et(e);
            o.length > 0 && u.length > 1 && (u = u.filter(e=>!o.includes(e))),
            r = null != r ? r : s.activeElement;
            let c = (()=>{
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), d = (()=>{
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, u.indexOf(r)) - 1;
                if (4 & t)
                    return Math.max(0, u.indexOf(r)) + 1;
                if (8 & t)
                    return u.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), f = 32 & t ? {
                preventScroll: !0
            } : {}, p = 0, m = u.length, v;
            do {
                if (p >= m || p + m <= 0)
                    return 0;
                let h = d + p;
                if (16 & t)
                    h = (h + m) % m;
                else {
                    if (h < 0)
                        return 3;
                    if (h >= m)
                        return 1
                }
                null == (v = u[h]) || v.focus(f),
                p += c
            } while (v !== s.activeElement);
            return 6 & t && null != (l = null == (a = null == (i = v) ? void 0 : i.matches) ? void 0 : a.call(i, "textarea,input")) && l && v.select(),
            v.hasAttribute("tabindex") || v.setAttribute("tabindex", "0"),
            2
        }
        let ei = (0,
        b.createContext)(null);
        ei.displayName = "OpenClosedContext";
        var ea = ((c = ea || {})[c.Open = 0] = "Open",
        c[c.Closed = 1] = "Closed",
        c);
        function el() {
            return (0,
            b.useContext)(ei)
        }
        function es({value: e, children: t}) {
            return b.createElement(ei.Provider, {
                value: e
            }, t)
        }
        function eu(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            if ("string" == typeof n && "button" === n.toLowerCase())
                return "button"
        }
        function ec(e, t, n) {
            let r = H(t);
            (0,
            b.useEffect)(()=>{
                function t(e) {
                    r.current(e)
                }
                return document.addEventListener(e, t, n),
                ()=>document.removeEventListener(e, t, n)
            }
            , [e, n])
        }
        function ed(...e) {
            return (0,
            b.useMemo)(()=>Q(...e), [...e])
        }
        var ef = ((d = ef || {})[d.None = 1] = "None",
        d[d.Focusable = 2] = "Focusable",
        d[d.Hidden = 4] = "Hidden",
        d);
        let ep = I(function(e, t) {
            let {features: n=1, ...r} = e;
            return O({
                ourProps: {
                    ref: t,
                    "aria-hidden": (2 & n) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & n) == 4 && (2 & n) != 2 && {
                            display: "none"
                        }
                    }
                },
                theirProps: r,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        });
        var em = ((f = em || {})[f.Forwards = 0] = "Forwards",
        f[f.Backwards = 1] = "Backwards",
        f);
        function ev() {
            var e;
            let t, n = (0,
            b.useRef)(0);
            return e = "keydown",
            t = H(e=>{
                "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0)
            }
            ),
            (0,
            b.useEffect)(()=>{
                function n(e) {
                    t.current(e)
                }
                return window.addEventListener(e, n, !0),
                ()=>window.removeEventListener(e, n, !0)
            }
            , [e, !0]),
            n
        }
        var eh = ((p = eh || {})[p.Open = 0] = "Open",
        p[p.Closed = 1] = "Closed",
        p)
          , eg = ((m = eg || {})[m.TogglePopover = 0] = "TogglePopover",
        m[m.ClosePopover = 1] = "ClosePopover",
        m[m.SetButton = 2] = "SetButton",
        m[m.SetButtonId = 3] = "SetButtonId",
        m[m.SetPanel = 4] = "SetPanel",
        m[m.SetPanelId = 5] = "SetPanelId",
        m);
        let eb = {
            0: e=>({
                ...e,
                popoverState: P(e.popoverState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e=>1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e,t)=>e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e,t)=>e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , ex = (0,
        b.createContext)(null);
        function ey(e) {
            let t = (0,
            b.useContext)(ex);
            if (null === t) {
                let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(n, ey),
                n
            }
            return t
        }
        ex.displayName = "PopoverContext";
        let ew = (0,
        b.createContext)(null);
        function eE(e) {
            let t = (0,
            b.useContext)(ew);
            if (null === t) {
                let n = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(n, eE),
                n
            }
            return t
        }
        ew.displayName = "PopoverAPIContext";
        let ej = (0,
        b.createContext)(null);
        function eA() {
            return (0,
            b.useContext)(ej)
        }
        ej.displayName = "PopoverGroupContext";
        let eS = (0,
        b.createContext)(null);
        function ek(e, t) {
            return P(t.type, eb, e, t)
        }
        eS.displayName = "PopoverPanelContext";
        let eP = I(function(e, t) {
            var n, r, o;
            let i;
            let a = (0,
            b.useRef)(null)
              , l = G(t, function(e, t=!0) {
                return Object.assign(e, {
                    [W]: t
                })
            }(e=>{
                a.current = e
            }
            ))
              , s = (0,
            b.useRef)([])
              , u = (0,
            b.useReducer)(ek, {
                popoverState: 1,
                buttons: s,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0,
                b.createRef)(),
                afterPanelSentinel: (0,
                b.createRef)()
            })
              , [{popoverState: c, button: d, buttonId: f, panel: p, panelId: m, beforePanelSentinel: v, afterPanelSentinel: h},g] = u
              , x = ed(null != (n = a.current) ? n : d)
              , y = (0,
            b.useMemo)(()=>{
                if (!d || !p)
                    return !1;
                for (let e of document.querySelectorAll("body > *"))
                    if (Number(null == e ? void 0 : e.contains(d)) ^ Number(null == e ? void 0 : e.contains(p)))
                        return !0;
                let t = et()
                  , n = t.indexOf(d)
                  , r = (n + t.length - 1) % t.length
                  , o = (n + 1) % t.length
                  , i = t[r]
                  , a = t[o];
                return !p.contains(i) && !p.contains(a)
            }
            , [d, p])
              , w = H(f)
              , E = H(m)
              , j = (0,
            b.useMemo)(()=>({
                buttonId: w,
                panelId: E,
                close: ()=>g({
                    type: 1
                })
            }), [w, E, g])
              , A = eA()
              , S = null == A ? void 0 : A.registerPopover
              , k = U(()=>{
                var e;
                return null != (e = null == A ? void 0 : A.isFocusWithinPopoverGroup()) ? e : (null == x ? void 0 : x.activeElement) && ((null == d ? void 0 : d.contains(x.activeElement)) || (null == p ? void 0 : p.contains(x.activeElement)))
            }
            );
            (0,
            b.useEffect)(()=>null == S ? void 0 : S(j), [S, j]),
            r = null == x ? void 0 : x.defaultView,
            o = "focus",
            i = H(e=>{
                var t, n, r, o;
                0 === c && (k() || !d || !p || e.target !== window && (null != (n = null == (t = v.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = h.current) ? void 0 : r.contains) && o.call(r, e.target) || g({
                    type: 1
                })))
            }
            ),
            (0,
            b.useEffect)(()=>{
                function e(e) {
                    i.current(e)
                }
                return (r = null != r ? r : window).addEventListener(o, e, !0),
                ()=>r.removeEventListener(o, e, !0)
            }
            , [r, o, !0]),
            function(e, t, n=!0) {
                let r = (0,
                b.useRef)(!1);
                function o(n, o) {
                    if (!r.current || n.defaultPrevented)
                        return;
                    let i = function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e)
                      , a = o(n);
                    if (null !== a && a.getRootNode().contains(a)) {
                        for (let l of i) {
                            if (null === l)
                                continue;
                            let s = l instanceof HTMLElement ? l : l.current;
                            if (null != s && s.contains(a) || n.composed && n.composedPath().includes(s))
                                return
                        }
                        return er(a, en.Loose) || -1 === a.tabIndex || n.preventDefault(),
                        t(n, a)
                    }
                }
                (0,
                b.useEffect)(()=>{
                    requestAnimationFrame(()=>{
                        r.current = n
                    }
                    )
                }
                , [n]);
                let i = (0,
                b.useRef)(null);
                ec("mousedown", e=>{
                    var t, n;
                    r.current && (i.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                }
                , !0),
                ec("click", e=>{
                    i.current && (o(e, ()=>i.current),
                    i.current = null)
                }
                , !0),
                ec("blur", e=>o(e, ()=>window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }([d, p], (e,t)=>{
                g({
                    type: 1
                }),
                er(t, en.Loose) || (e.preventDefault(),
                null == d || d.focus())
            }
            , 0 === c);
            let N = U(e=>{
                g({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : d : d;
                null == t || t.focus()
            }
            )
              , L = (0,
            b.useMemo)(()=>({
                close: N,
                isPortalled: y
            }), [N, y])
              , C = (0,
            b.useMemo)(()=>({
                open: 0 === c,
                close: N
            }), [c, N]);
            return b.createElement(ex.Provider, {
                value: u
            }, b.createElement(ew.Provider, {
                value: L
            }, b.createElement(es, {
                value: P(c, {
                    0: ea.Open,
                    1: ea.Closed
                })
            }, O({
                ourProps: {
                    ref: l
                },
                theirProps: e,
                slot: C,
                defaultTag: "div",
                name: "Popover"
            }))))
        })
          , eN = I(function(e, t) {
            let n = q()
              , {id: r=`headlessui-popover-button-${n}`, ...o} = e
              , [i,a] = ey("Popover.Button")
              , {isPortalled: l} = eE("Popover.Button")
              , s = (0,
            b.useRef)(null)
              , u = `headlessui-focus-sentinel-${q()}`
              , c = eA()
              , d = null == c ? void 0 : c.closeOthers
              , f = null !== (0,
            b.useContext)(eS);
            (0,
            b.useEffect)(()=>{
                if (!f)
                    return a({
                        type: 3,
                        buttonId: r
                    }),
                    ()=>{
                        a({
                            type: 3,
                            buttonId: null
                        })
                    }
            }
            , [f, r, a]);
            let[p] = (0,
            b.useState)(()=>Symbol())
              , m = G(s, t, f ? null : e=>{
                if (e)
                    i.buttons.current.push(p);
                else {
                    let t = i.buttons.current.indexOf(p);
                    -1 !== t && i.buttons.current.splice(t, 1)
                }
                i.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),
                e && a({
                    type: 2,
                    button: e
                })
            }
            )
              , v = G(s, t)
              , h = ed(s)
              , g = U(e=>{
                var t, n, r;
                if (f) {
                    if (1 === i.popoverState)
                        return;
                    switch (e.key) {
                    case K.Space:
                    case K.Enter:
                        e.preventDefault(),
                        null == (n = (t = e.target).click) || n.call(t),
                        a({
                            type: 1
                        }),
                        null == (r = i.button) || r.focus()
                    }
                } else
                    switch (e.key) {
                    case K.Space:
                    case K.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        1 === i.popoverState && (null == d || d(i.buttonId)),
                        a({
                            type: 0
                        });
                        break;
                    case K.Escape:
                        if (0 !== i.popoverState)
                            return null == d ? void 0 : d(i.buttonId);
                        if (!s.current || (null == h ? void 0 : h.activeElement) && !s.current.contains(h.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        a({
                            type: 1
                        })
                    }
            }
            )
              , x = U(e=>{
                f || e.key === K.Space && e.preventDefault()
            }
            )
              , y = U(t=>{
                var n, r;
                V(t.currentTarget) || e.disabled || (f ? (a({
                    type: 1
                }),
                null == (n = i.button) || n.focus()) : (t.preventDefault(),
                t.stopPropagation(),
                1 === i.popoverState && (null == d || d(i.buttonId)),
                a({
                    type: 0
                }),
                null == (r = i.button) || r.focus()))
            }
            )
              , w = U(e=>{
                e.preventDefault(),
                e.stopPropagation()
            }
            )
              , E = 0 === i.popoverState
              , j = (0,
            b.useMemo)(()=>({
                open: E
            }), [E])
              , A = function(e, t) {
                let[n,r] = (0,
                b.useState)(()=>eu(e));
                return $(()=>{
                    r(eu(e))
                }
                , [e.type, e.as]),
                $(()=>{
                    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                }
                , [n, t]),
                n
            }(e, s)
              , S = f ? {
                ref: v,
                type: A,
                onKeyDown: g,
                onClick: y
            } : {
                ref: m,
                id: i.buttonId,
                type: A,
                "aria-expanded": e.disabled ? void 0 : 0 === i.popoverState,
                "aria-controls": i.panel ? i.panelId : void 0,
                onKeyDown: g,
                onKeyUp: x,
                onClick: y,
                onMouseDown: w
            }
              , k = ev()
              , N = U(()=>{
                let e = i.panel;
                e && P(k.current, {
                    [em.Forwards]: ()=>eo(e, Y.First),
                    [em.Backwards]: ()=>eo(e, Y.Last)
                }) === J.Error && eo(et().filter(e=>"true" !== e.dataset.headlessuiFocusGuard), P(k.current, {
                    [em.Forwards]: Y.Next,
                    [em.Backwards]: Y.Previous
                }), {
                    relativeTo: i.button
                })
            }
            );
            return b.createElement(b.Fragment, null, O({
                ourProps: S,
                theirProps: o,
                slot: j,
                defaultTag: "button",
                name: "Popover.Button"
            }), E && !f && l && b.createElement(ep, {
                id: u,
                features: ef.Focusable,
                "data-headlessui-focus-guard": !0,
                as: "button",
                type: "button",
                onFocus: N
            }))
        })
          , eL = L.RenderStrategy | L.Static
          , eC = I(function(e, t) {
            let n = q()
              , {id: r=`headlessui-popover-overlay-${n}`, ...o} = e
              , [{popoverState: i},a] = ey("Popover.Overlay")
              , l = G(t)
              , s = el()
              , u = null !== s ? s === ea.Open : 0 === i;
            return O({
                ourProps: {
                    ref: l,
                    id: r,
                    "aria-hidden": !0,
                    onClick: U(e=>{
                        if (V(e.currentTarget))
                            return e.preventDefault();
                        a({
                            type: 1
                        })
                    }
                    )
                },
                theirProps: o,
                slot: (0,
                b.useMemo)(()=>({
                    open: 0 === i
                }), [i]),
                defaultTag: "div",
                features: eL,
                visible: u,
                name: "Popover.Overlay"
            })
        })
          , eO = L.RenderStrategy | L.Static
          , eT = Object.assign(eP, {
            Button: eN,
            Overlay: eC,
            Panel: I(function(e, t) {
                let n = q()
                  , {id: r=`headlessui-popover-panel-${n}`, focus: o=!1, ...i} = e
                  , [a,l] = ey("Popover.Panel")
                  , {close: s, isPortalled: u} = eE("Popover.Panel")
                  , c = `headlessui-focus-sentinel-before-${q()}`
                  , d = `headlessui-focus-sentinel-after-${q()}`
                  , f = (0,
                b.useRef)(null)
                  , p = G(f, t, e=>{
                    l({
                        type: 4,
                        panel: e
                    })
                }
                )
                  , m = ed(f);
                $(()=>(l({
                    type: 5,
                    panelId: r
                }),
                ()=>{
                    l({
                        type: 5,
                        panelId: null
                    })
                }
                ), [r, l]);
                let v = el()
                  , h = null !== v ? v === ea.Open : 0 === a.popoverState
                  , g = U(e=>{
                    var t;
                    if (e.key === K.Escape) {
                        if (0 !== a.popoverState || !f.current || (null == m ? void 0 : m.activeElement) && !f.current.contains(m.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 1
                        }),
                        null == (t = a.button) || t.focus()
                    }
                }
                );
                (0,
                b.useEffect)(()=>{
                    var t;
                    e.static || 1 === a.popoverState && (null == (t = e.unmount) || t) && l({
                        type: 4,
                        panel: null
                    })
                }
                , [a.popoverState, e.unmount, e.static, l]),
                (0,
                b.useEffect)(()=>{
                    if (!o || 0 !== a.popoverState || !f.current)
                        return;
                    let e = null == m ? void 0 : m.activeElement;
                    f.current.contains(e) || eo(f.current, Y.First)
                }
                , [o, f, a.popoverState]);
                let x = (0,
                b.useMemo)(()=>({
                    open: 0 === a.popoverState,
                    close: s
                }), [a, s])
                  , y = {
                    ref: p,
                    id: r,
                    onKeyDown: g,
                    onBlur: o && 0 === a.popoverState ? e=>{
                        var t, n, r, o, i;
                        let s = e.relatedTarget;
                        !s || !f.current || null != (t = f.current) && t.contains(s) || (l({
                            type: 1
                        }),
                        ((null == (r = null == (n = a.beforePanelSentinel.current) ? void 0 : n.contains) ? void 0 : r.call(n, s)) || (null == (i = null == (o = a.afterPanelSentinel.current) ? void 0 : o.contains) ? void 0 : i.call(o, s))) && s.focus({
                            preventScroll: !0
                        }))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , w = ev()
                  , E = U(()=>{
                    let e = f.current;
                    e && P(w.current, {
                        [em.Forwards]() {
                            var t;
                            eo(e, Y.First) === J.Error && (null == (t = a.afterPanelSentinel.current) || t.focus())
                        },
                        [em.Backwards]() {
                            var e;
                            null == (e = a.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                )
                  , j = U(()=>{
                    let e = f.current;
                    e && P(w.current, {
                        [em.Forwards]() {
                            var e;
                            if (!a.button)
                                return;
                            let t = et()
                              , n = t.indexOf(a.button)
                              , r = t.slice(0, n + 1)
                              , o = [...t.slice(n + 1), ...r];
                            for (let i of o.slice())
                                if ("true" === i.dataset.headlessuiFocusGuard || (null == (e = a.panel) ? void 0 : e.contains(i))) {
                                    let l = o.indexOf(i);
                                    -1 !== l && o.splice(l, 1)
                                }
                            eo(o, Y.First, {
                                sorted: !1
                            })
                        },
                        [em.Backwards]() {
                            var t;
                            eo(e, Y.Previous) === J.Error && (null == (t = a.button) || t.focus())
                        }
                    })
                }
                );
                return b.createElement(eS.Provider, {
                    value: r
                }, h && u && b.createElement(ep, {
                    id: c,
                    ref: a.beforePanelSentinel,
                    features: ef.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: E
                }), O({
                    ourProps: y,
                    theirProps: i,
                    slot: x,
                    defaultTag: "div",
                    features: eO,
                    visible: h,
                    name: "Popover.Panel"
                }), h && u && b.createElement(ep, {
                    id: d,
                    ref: a.afterPanelSentinel,
                    features: ef.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: j
                }))
            }),
            Group: I(function(e, t) {
                let n = (0,
                b.useRef)(null)
                  , r = G(n, t)
                  , [o,i] = (0,
                b.useState)([])
                  , a = U(e=>{
                    i(t=>{
                        let n = t.indexOf(e);
                        if (-1 !== n) {
                            let r = t.slice();
                            return r.splice(n, 1),
                            r
                        }
                        return t
                    }
                    )
                }
                )
                  , l = U(e=>(i(t=>[...t, e]),
                ()=>a(e)))
                  , s = U(()=>{
                    var e;
                    let t = Q(n);
                    if (!t)
                        return !1;
                    let r = t.activeElement;
                    return !!(null != (e = n.current) && e.contains(r)) || o.some(e=>{
                        var n, o;
                        return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(r))
                    }
                    )
                }
                )
                  , u = U(e=>{
                    for (let t of o)
                        t.buttonId.current !== e && t.close()
                }
                )
                  , c = (0,
                b.useMemo)(()=>({
                    registerPopover: l,
                    unregisterPopover: a,
                    isFocusWithinPopoverGroup: s,
                    closeOthers: u
                }), [l, a, s, u])
                  , d = (0,
                b.useMemo)(()=>({}), []);
                return b.createElement(ej.Provider, {
                    value: c
                }, O({
                    ourProps: {
                        ref: r
                    },
                    theirProps: e,
                    slot: d,
                    defaultTag: "div",
                    name: "Popover.Group"
                }))
            })
        });
        function ez() {
            let e = (0,
            b.useRef)(!1);
            return $(()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            ), []),
            e
        }
        function eI() {
            let e = []
              , t = []
              , n = {
                enqueue(e) {
                    t.push(e)
                },
                addEventListener: (e,t,r,o)=>(e.addEventListener(t, r, o),
                n.add(()=>e.removeEventListener(t, r, o))),
                requestAnimationFrame(...e) {
                    let t = requestAnimationFrame(...e);
                    return n.add(()=>cancelAnimationFrame(t))
                },
                nextFrame: (...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                    let t = setTimeout(...e);
                    return n.add(()=>clearTimeout(t))
                },
                microTask(...e) {
                    var t;
                    let r = {
                        current: !0
                    };
                    return t = ()=>{
                        r.current && e[0]()
                    }
                    ,
                    "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch(e=>setTimeout(()=>{
                        throw e
                    }
                    )),
                    n.add(()=>{
                        r.current = !1
                    }
                    )
                },
                add: t=>(e.push(t),
                ()=>{
                    let n = e.indexOf(t);
                    if (n >= 0) {
                        let[r] = e.splice(n, 1);
                        r()
                    }
                }
                ),
                dispose() {
                    for (let t of e.splice(0))
                        t()
                },
                async workQueue() {
                    for (let e of t.splice(0))
                        await e()
                }
            };
            return n
        }
        function eM(e, ...t) {
            e && t.length > 0 && e.classList.add(...t)
        }
        function eF(e, ...t) {
            e && t.length > 0 && e.classList.remove(...t)
        }
        function eR() {
            let[e] = (0,
            b.useState)(eI);
            return (0,
            b.useEffect)(()=>()=>e.dispose(), [e]),
            e
        }
        function e_(e="") {
            return e.split(" ").filter(e=>e.trim().length > 1)
        }
        let eB = (0,
        b.createContext)(null);
        eB.displayName = "TransitionContext";
        var eD = ((v = eD || {}).Visible = "visible",
        v.Hidden = "hidden",
        v);
        let e$ = (0,
        b.createContext)(null);
        function eH(e) {
            return "children"in e ? eH(e.children) : e.current.filter(({el: e})=>null !== e.current).filter(({state: e})=>"visible" === e).length > 0
        }
        function eU(e, t) {
            let n = H(e)
              , r = (0,
            b.useRef)([])
              , o = ez()
              , i = eR()
              , a = U((e,t=C.Hidden)=>{
                let a = r.current.findIndex(({el: t})=>t === e);
                -1 !== a && (P(t, {
                    [C.Unmount]() {
                        r.current.splice(a, 1)
                    },
                    [C.Hidden]() {
                        r.current[a].state = "hidden"
                    }
                }),
                i.microTask(()=>{
                    var e;
                    !eH(r) && o.current && (null == (e = n.current) || e.call(n))
                }
                ))
            }
            )
              , l = U(e=>{
                let t = r.current.find(({el: t})=>t === e);
                return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                    el: e,
                    state: "visible"
                }),
                ()=>a(e, C.Unmount)
            }
            )
              , s = (0,
            b.useRef)([])
              , u = (0,
            b.useRef)(Promise.resolve())
              , c = (0,
            b.useRef)({
                enter: [],
                leave: [],
                idle: []
            })
              , d = U((e,n,r)=>{
                s.current.splice(0),
                t && (t.chains.current[n] = t.chains.current[n].filter(([t])=>t !== e)),
                null == t || t.chains.current[n].push([e, new Promise(e=>{
                    s.current.push(e)
                }
                )]),
                null == t || t.chains.current[n].push([e, new Promise(e=>{
                    Promise.all(c.current[n].map(([e,t])=>t)).then(()=>e())
                }
                )]),
                "enter" === n ? u.current = u.current.then(()=>null == t ? void 0 : t.wait.current).then(()=>r(n)) : r(n)
            }
            )
              , f = U((e,t,n)=>{
                Promise.all(c.current[t].splice(0).map(([e,t])=>t)).then(()=>{
                    var e;
                    null == (e = s.current.shift()) || e()
                }
                ).then(()=>n(t))
            }
            );
            return (0,
            b.useMemo)(()=>({
                children: r,
                register: l,
                unregister: a,
                onStart: d,
                onStop: f,
                wait: u,
                chains: c
            }), [l, a, r, d, f, c, u])
        }
        function eW() {}
        e$.displayName = "NestingContext";
        let eG = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function eZ(e) {
            var t;
            let n = {};
            for (let r of eG)
                n[r] = null != (t = e[r]) ? t : eW;
            return n
        }
        let eq = L.RenderStrategy
          , eK = I(function(e, t) {
            var n;
            let r, {beforeEnter: o, afterEnter: i, beforeLeave: a, afterLeave: l, enter: s, enterFrom: u, enterTo: c, entered: d, leave: f, leaveFrom: p, leaveTo: m, ...v} = e, h = (0,
            b.useRef)(null), g = G(h, t), x = v.unmount ? C.Unmount : C.Hidden, {show: y, appear: w, initial: E} = function() {
                let e = (0,
                b.useContext)(eB);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), [j,A] = (0,
            b.useState)(y ? "visible" : "hidden"), S = function() {
                let e = (0,
                b.useContext)(e$);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }(), {register: k, unregister: L} = S, T = (0,
            b.useRef)(null);
            (0,
            b.useEffect)(()=>k(h), [k, h]),
            (0,
            b.useEffect)(()=>{
                if (x === C.Hidden && h.current) {
                    if (y && "visible" !== j) {
                        A("visible");
                        return
                    }
                    return P(j, {
                        hidden: ()=>L(h),
                        visible: ()=>k(h)
                    })
                }
            }
            , [j, h, k, L, y, x]);
            let z = H({
                enter: e_(s),
                enterFrom: e_(u),
                enterTo: e_(c),
                entered: e_(d),
                leave: e_(f),
                leaveFrom: e_(p),
                leaveTo: e_(m)
            })
              , I = (n = {
                beforeEnter: o,
                afterEnter: i,
                beforeLeave: a,
                afterLeave: l
            },
            r = (0,
            b.useRef)(eZ(n)),
            (0,
            b.useEffect)(()=>{
                r.current = eZ(n)
            }
            , [n]),
            r)
              , M = Z();
            (0,
            b.useEffect)(()=>{
                if (M && "visible" === j && null === h.current)
                    throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            , [h, j, M]);
            let F = E && !w
              , R = !M || F || T.current === y ? "idle" : y ? "enter" : "leave"
              , _ = U(e=>P(e, {
                enter: ()=>I.current.beforeEnter(),
                leave: ()=>I.current.beforeLeave(),
                idle() {}
            }))
              , B = U(e=>P(e, {
                enter: ()=>I.current.afterEnter(),
                leave: ()=>I.current.afterLeave(),
                idle() {}
            }))
              , W = eU(()=>{
                A("hidden"),
                L(h)
            }
            , S);
            (function({container: e, direction: t, classes: n, onStart: r, onStop: o}) {
                let i = ez()
                  , a = eR()
                  , l = H(t);
                $(()=>{
                    let t = eI();
                    a.add(t.dispose);
                    let s = e.current;
                    if (s && "idle" !== l.current && i.current) {
                        var u, c, d, f;
                        let p, m, v, h, g, b, x;
                        return t.dispose(),
                        r.current(l.current),
                        t.add((u = s,
                        c = n.current,
                        d = "enter" === l.current,
                        f = ()=>{
                            t.dispose(),
                            o.current(l.current)
                        }
                        ,
                        m = d ? "enter" : "leave",
                        v = eI(),
                        h = void 0 !== f ? (p = {
                            called: !1
                        },
                        (...e)=>{
                            if (!p.called)
                                return p.called = !0,
                                f(...e)
                        }
                        ) : ()=>{}
                        ,
                        "enter" === m && (u.removeAttribute("hidden"),
                        u.style.display = ""),
                        g = P(m, {
                            enter: ()=>c.enter,
                            leave: ()=>c.leave
                        }),
                        b = P(m, {
                            enter: ()=>c.enterTo,
                            leave: ()=>c.leaveTo
                        }),
                        x = P(m, {
                            enter: ()=>c.enterFrom,
                            leave: ()=>c.leaveFrom
                        }),
                        eF(u, ...c.enter, ...c.enterTo, ...c.enterFrom, ...c.leave, ...c.leaveFrom, ...c.leaveTo, ...c.entered),
                        eM(u, ...g, ...x),
                        v.nextFrame(()=>{
                            eF(u, ...x),
                            eM(u, ...b),
                            function(e, t) {
                                let n = eI();
                                if (!e)
                                    return n.dispose;
                                let {transitionDuration: r, transitionDelay: o} = getComputedStyle(e)
                                  , [i,a] = [r, o].map(e=>{
                                    let[t=0] = e.split(",").filter(Boolean).map(e=>e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e,t)=>t - e);
                                    return t
                                }
                                );
                                if (i + a !== 0) {
                                    let l = n.addEventListener(e, "transitionend", e=>{
                                        e.target === e.currentTarget && (t(),
                                        l())
                                    }
                                    )
                                } else
                                    t();
                                n.add(()=>t()),
                                n.dispose
                            }(u, ()=>(eF(u, ...g),
                            eM(u, ...c.entered),
                            h()))
                        }
                        ),
                        v.dispose)),
                        t.dispose
                    }
                }
                , [t])
            }
            )({
                container: h,
                classes: z,
                direction: R,
                onStart: H(e=>{
                    W.onStart(h, e, _)
                }
                ),
                onStop: H(e=>{
                    W.onStop(h, e, B),
                    "leave" !== e || eH(W) || (A("hidden"),
                    L(h))
                }
                )
            }),
            (0,
            b.useEffect)(()=>{
                F && (x === C.Hidden ? T.current = null : T.current = y)
            }
            , [y, F, j]);
            let q = v;
            return w && y && D.isServer && (q = {
                ...q,
                className: N(v.className, ...z.current.enter, ...z.current.enterFrom)
            }),
            b.createElement(e$.Provider, {
                value: W
            }, b.createElement(es, {
                value: P(j, {
                    visible: ea.Open,
                    hidden: ea.Closed
                })
            }, O({
                ourProps: {
                    ref: g
                },
                theirProps: q,
                defaultTag: "div",
                features: eq,
                visible: "visible" === j,
                name: "Transition.Child"
            })))
        })
          , eV = I(function(e, t) {
            let {show: n, appear: r=!1, unmount: o, ...i} = e
              , a = (0,
            b.useRef)(null)
              , l = G(a, t);
            Z();
            let s = el();
            if (void 0 === n && null !== s && (n = P(s, {
                [ea.Open]: !0,
                [ea.Closed]: !1
            })),
            ![!0, !1].includes(n))
                throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let[u,c] = (0,
            b.useState)(n ? "visible" : "hidden")
              , d = eU(()=>{
                c("hidden")
            }
            )
              , [f,p] = (0,
            b.useState)(!0)
              , m = (0,
            b.useRef)([n]);
            $(()=>{
                !1 !== f && m.current[m.current.length - 1] !== n && (m.current.push(n),
                p(!1))
            }
            , [m, n]);
            let v = (0,
            b.useMemo)(()=>({
                show: n,
                appear: r,
                initial: f
            }), [n, r, f]);
            (0,
            b.useEffect)(()=>{
                if (n)
                    c("visible");
                else if (eH(d)) {
                    let e = a.current;
                    if (!e)
                        return;
                    let t = e.getBoundingClientRect();
                    0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && c("hidden")
                } else
                    c("hidden")
            }
            , [n, d]);
            let h = {
                unmount: o
            };
            return b.createElement(e$.Provider, {
                value: d
            }, b.createElement(eB.Provider, {
                value: v
            }, O({
                ourProps: {
                    ...h,
                    as: b.Fragment,
                    children: b.createElement(eK, {
                        ref: l,
                        ...h,
                        ...i
                    })
                },
                theirProps: {},
                defaultTag: b.Fragment,
                features: eq,
                visible: "visible" === u,
                name: "Transition"
            })))
        })
          , eQ = I(function(e, t) {
            let n = null !== (0,
            b.useContext)(eB)
              , r = null !== el();
            return b.createElement(b.Fragment, null, !n && r ? b.createElement(eV, {
                ref: t,
                ...e
            }) : b.createElement(eK, {
                ref: t,
                ...e
            }))
        })
          , eX = Object.assign(eV, {
            Child: eQ,
            Root: eV
        });
        var eY = n(6010)
          , eJ = {
            src: "/_next/static/media/avatar.51a13c67.jpg",
            height: 512,
            width: 512,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBAUREkETIXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAAMBAQAAAAAAAAAAAAAAAAABAjES/9oADAMBAAIRAxEAPwCNxmXozOtZGpk7EEbOdeIg+NnFoGy3rZ7Pv4iInhVpLtzh/9k=",
            blurWidth: 8,
            blurHeight: 8
        };
        function e0(e) {
            return (0,
            g.jsx)("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                ...e,
                children: (0,
                g.jsx)("path", {
                    d: "m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
        function e1(e) {
            return (0,
            g.jsx)("svg", {
                viewBox: "0 0 8 6",
                "aria-hidden": "true",
                ...e,
                children: (0,
                g.jsx)("path", {
                    d: "M1.75 1.75 4 4.25l2.25-2.5",
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
        function e2(e) {
            return (0,
            g.jsxs)("svg", {
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                ...e,
                children: [(0,
                g.jsx)("path", {
                    d: "M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                }), (0,
                g.jsx)("path", {
                    d: "M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",
                    fill: "none"
                })]
            })
        }
        function e5(e) {
            return (0,
            g.jsx)("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                ...e,
                children: (0,
                g.jsx)("path", {
                    d: "M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
        function e7(e) {
            let {href: t, children: n} = e;
            return (0,
            g.jsx)("li", {
                children: (0,
                g.jsx)(eT.Button, {
                    as: y(),
                    href: t,
                    className: "block py-2",
                    children: n
                })
            })
        }
        function e4(e) {
            return (0,
            g.jsxs)(eT, {
                ...e,
                children: [(0,
                g.jsxs)(eT.Button, {
                    className: "group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",
                    children: ["Menu", (0,
                    g.jsx)(e1, {
                        className: "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                    })]
                }), (0,
                g.jsxs)(eX.Root, {
                    children: [(0,
                    g.jsx)(eX.Child, {
                        as: b.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        g.jsx)(eT.Overlay, {
                            className: "fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
                        })
                    }), (0,
                    g.jsx)(eX.Child, {
                        as: b.Fragment,
                        enter: "duration-150 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "duration-150 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: (0,
                        g.jsxs)(eT.Panel, {
                            focus: !0,
                            className: "fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800",
                            children: [(0,
                            g.jsxs)("div", {
                                className: "flex flex-row-reverse items-center justify-between",
                                children: [(0,
                                g.jsx)(eT.Button, {
                                    "aria-label": "Close menu",
                                    className: "-m-1 p-1",
                                    children: (0,
                                    g.jsx)(e0, {
                                        className: "h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                    })
                                }), (0,
                                g.jsx)("h2", {
                                    className: "text-sm font-medium text-zinc-600 dark:text-zinc-400",
                                    children: "Navigation"
                                })]
                            }), (0,
                            g.jsx)("nav", {
                                className: "mt-6",
                                children: (0,
                                g.jsxs)("ul", {
                                    className: "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300",
                                    children: [(0,
                                    g.jsx)(e7, {
                                        href: "/about",
                                        children: "About"
                                    }), (0,
                                    g.jsx)(e7, {
                                        href: "/articles",
                                        children: "Articles"
                                    }), (0,
                                    g.jsx)(e7, {
                                        href: "/projects",
                                        children: "Projects"
                                    }), (0,
                                    g.jsx)(e7, {
                                        href: "/speaking",
                                        children: "Speaking"
                                    }), (0,
                                    g.jsx)(e7, {
                                        href: "/uses",
                                        children: "Uses"
                                    })]
                                })
                            })]
                        })
                    })]
                })]
            })
        }
        function e3(e) {
            let {href: t, children: n} = e
              , r = (0,
            k.useRouter)().pathname === t;
            return (0,
            g.jsx)("li", {
                children: (0,
                g.jsxs)(y(), {
                    href: t,
                    className: (0,
                    eY.Z)("relative block px-3 py-2 transition", r ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400"),
                    children: [n, r && (0,
                    g.jsx)("span", {
                        className: "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                    })]
                })
            })
        }
        function e6(e) {
            return (0,
            g.jsx)("nav", {
                ...e,
                children: (0,
                g.jsxs)("ul", {
                    className: "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10",
                    children: [(0,
                    g.jsx)(e3, {
                        href: "/about",
                        children: "About"
                    }), (0,
                    g.jsx)(e3, {
                        href: "/articles",
                        children: "Articles"
                    }), (0,
                    g.jsx)(e3, {
                        href: "/projects",
                        children: "Projects"
                    }), (0,
                    g.jsx)(e3, {
                        href: "/speaking",
                        children: "Speaking"
                    }), (0,
                    g.jsx)(e3, {
                        href: "/uses",
                        children: "Uses"
                    })]
                })
            })
        }
        function e8() {
            return (0,
            g.jsxs)("button", {
                type: "button",
                "aria-label": "Toggle dark mode",
                className: "group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",
                onClick: function() {
                    document.documentElement.classList.add("[&_*]:!transition-none"),
                    window.setTimeout(()=>{
                        document.documentElement.classList.remove("[&_*]:!transition-none")
                    }
                    , 0);
                    let e = window.matchMedia("(prefers-color-scheme: dark)").matches
                      , t = document.documentElement.classList.toggle("dark");
                    t === e ? delete window.localStorage.isDarkMode : window.localStorage.isDarkMode = t
                },
                children: [(0,
                g.jsx)(e2, {
                    className: "h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                }), (0,
                g.jsx)(e5, {
                    className: "hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                })]
            })
        }
        function e9(e, t, n) {
            return Math.min(Math.max(e, Math.min(t, n)), Math.max(t, n))
        }
        function te(e) {
            let {className: t, ...n} = e;
            return (0,
            g.jsx)("div", {
                className: (0,
                eY.Z)(t, "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"),
                ...n
            })
        }
        function tt(e) {
            let {large: t=!1, className: n, ...r} = e;
            return (0,
            g.jsx)(y(), {
                href: "/",
                "aria-label": "Home",
                className: (0,
                eY.Z)(n, "pointer-events-auto"),
                ...r,
                children: (0,
                g.jsx)(S(), {
                    src: eJ,
                    alt: "",
                    sizes: t ? "4rem" : "2.25rem",
                    className: (0,
                    eY.Z)("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", t ? "h-16 w-16" : "h-9 w-9"),
                    priority: !0
                })
            })
        }
        function tn() {
            let e = "/" === (0,
            k.useRouter)().pathname
              , t = (0,
            b.useRef)()
              , n = (0,
            b.useRef)()
              , r = (0,
            b.useRef)(!0);
            return (0,
            b.useEffect)(()=>{
                var o, i;
                let a = null !== (i = null === (o = n.current) || void 0 === o ? void 0 : o.offsetTop) && void 0 !== i ? i : 0;
                function l(e, t) {
                    document.documentElement.style.setProperty(e, t)
                }
                function s(e) {
                    document.documentElement.style.removeProperty(e)
                }
                function u() {
                    (function() {
                        let {top: e, height: n} = t.current.getBoundingClientRect()
                          , o = e9(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
                        if (r.current && l("--header-position", "sticky"),
                        l("--content-offset", `${a}px`),
                        r.current || o < a)
                            l("--header-height", `${a + n}px`),
                            l("--header-mb", `${-a}px`);
                        else if (e + n < -64) {
                            let i = Math.max(n, o - 64);
                            l("--header-height", `${i}px`),
                            l("--header-mb", `${n - i}px`)
                        } else
                            0 === e && (l("--header-height", `${o + n}px`),
                            l("--header-mb", `${-o}px`));
                        0 === e && o > 0 && o >= a ? (l("--header-inner-position", "fixed"),
                        s("--header-top"),
                        s("--avatar-top")) : (s("--header-inner-position"),
                        l("--header-top", "0px"),
                        l("--avatar-top", "0px"))
                    }
                    )(),
                    function() {
                        if (!e)
                            return;
                        let t = 36 / 64
                          , n = 2 / 16
                          , r = a - window.scrollY
                          , o = r * (1 - t) / a + t;
                        o = e9(o, 1, t);
                        let i = r * (0 - n) / a + n;
                        l("--avatar-image-transform", `translate3d(${i = e9(i, 0, n)}rem, 0, 0) scale(${o})`);
                        let s = 1 / (t / o);
                        l("--avatar-border-transform", `translate3d(${(-n + i) * s}rem, 0, 0) scale(${s})`),
                        l("--avatar-border-opacity", o === t ? 1 : 0)
                    }(),
                    r.current = !1
                }
                return u(),
                window.addEventListener("scroll", u, {
                    passive: !0
                }),
                window.addEventListener("resize", u),
                ()=>{
                    window.removeEventListener("scroll", u),
                    window.removeEventListener("resize", u)
                }
            }
            , [e]),
            (0,
            g.jsxs)(g.Fragment, {
                children: [(0,
                g.jsxs)("header", {
                    className: "pointer-events-none relative z-50 flex flex-col",
                    style: {
                        height: "var(--header-height)",
                        marginBottom: "var(--header-mb)"
                    },
                    children: [e && (0,
                    g.jsxs)(g.Fragment, {
                        children: [(0,
                        g.jsx)("div", {
                            ref: n,
                            className: "order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                        }), (0,
                        g.jsx)(w.W, {
                            className: "top-0 order-last -mb-3 pt-3",
                            style: {
                                position: "var(--header-position)"
                            },
                            children: (0,
                            g.jsx)("div", {
                                className: "top-[var(--avatar-top,theme(spacing.3))] w-full",
                                style: {
                                    position: "var(--header-inner-position)"
                                },
                                children: (0,
                                g.jsxs)("div", {
                                    className: "relative",
                                    children: [(0,
                                    g.jsx)(te, {
                                        className: "absolute left-0 top-3 origin-left transition-opacity",
                                        style: {
                                            opacity: "var(--avatar-border-opacity, 0)",
                                            transform: "var(--avatar-border-transform)"
                                        }
                                    }), (0,
                                    g.jsx)(tt, {
                                        large: !0,
                                        className: "block h-16 w-16 origin-left",
                                        style: {
                                            transform: "var(--avatar-image-transform)"
                                        }
                                    })]
                                })
                            })
                        })]
                    }), (0,
                    g.jsx)("div", {
                        ref: t,
                        className: "top-0 z-10 h-16 pt-6",
                        style: {
                            position: "var(--header-position)"
                        },
                        children: (0,
                        g.jsx)(w.W, {
                            className: "top-[var(--header-top,theme(spacing.6))] w-full",
                            style: {
                                position: "var(--header-inner-position)"
                            },
                            children: (0,
                            g.jsxs)("div", {
                                className: "relative flex gap-4",
                                children: [(0,
                                g.jsx)("div", {
                                    className: "flex flex-1",
                                    children: !e && (0,
                                    g.jsx)(te, {
                                        children: (0,
                                        g.jsx)(tt, {})
                                    })
                                }), (0,
                                g.jsxs)("div", {
                                    className: "flex flex-1 justify-end md:justify-center",
                                    children: [(0,
                                    g.jsx)(e4, {
                                        className: "pointer-events-auto md:hidden"
                                    }), (0,
                                    g.jsx)(e6, {
                                        className: "pointer-events-auto hidden md:block"
                                    })]
                                }), (0,
                                g.jsx)("div", {
                                    className: "flex justify-end md:flex-1",
                                    children: (0,
                                    g.jsx)("div", {
                                        className: "pointer-events-auto",
                                        children: (0,
                                        g.jsx)(e8, {})
                                    })
                                })]
                            })
                        })
                    })]
                }), e && (0,
                g.jsx)("div", {
                    style: {
                        height: "var(--content-offset)"
                    }
                })]
            })
        }
        function tr(e) {
            var t;
            let n, {Component: r, pageProps: o, router: i} = e, a = (t = i.pathname,
            n = (0,
            b.useRef)(),
            (0,
            b.useEffect)(()=>{
                n.current = t
            }
            , [t]),
            n.current);
            return (0,
            g.jsxs)(g.Fragment, {
                children: [(0,
                g.jsx)("div", {
                    className: "fixed inset-0 flex justify-center sm:px-8",
                    children: (0,
                    g.jsx)("div", {
                        className: "flex w-full max-w-7xl lg:px-8",
                        children: (0,
                        g.jsx)("div", {
                            className: "w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                        })
                    })
                }), (0,
                g.jsxs)("div", {
                    className: "relative",
                    children: [(0,
                    g.jsx)(tn, {}), (0,
                    g.jsx)("main", {
                        children: (0,
                        g.jsx)(r, {
                            previousPathname: a,
                            ...o
                        })
                    }), (0,
                    g.jsx)(j, {})]
                })]
            })
        }
        n(6728),
        n(5202)
    },
    6728: function() {},
    5675: function(e, t, n) {
        e.exports = n(9749)
    },
    1664: function(e, t, n) {
        e.exports = n(1551)
    },
    1163: function(e, t, n) {
        e.exports = n(880)
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(3837),
        t(880)
    }),
    _N_E = e.O()
}
]);
