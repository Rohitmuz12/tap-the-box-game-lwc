!(function (e) {
    function t(t) {
        for (
            var r, i, n = t[0], l = t[1], h = t[2], m = 0, d = [];
            m < n.length;
            m++
        )
            (i = n[m]),
                Object.prototype.hasOwnProperty.call(o, i) &&
                    o[i] &&
                    d.push(o[i][0]),
                (o[i] = 0);
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        for (c && c(t); d.length; ) d.shift()();
        return s.push.apply(s, h || []), a();
    }
    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], r = !0, n = 1; n < a.length; n++) {
                var l = a[n];
                0 !== o[l] && (r = !1);
            }
            r && (s.splice(t--, 1), (e = i((i.s = a[0]))));
        }
        return e;
    }
    var r = {},
        o = { 1: 0 },
        s = [];
    function i(t) {
        if (r[t]) return r[t].exports;
        var a = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
    }
    (i.m = e),
        (i.c = r),
        (i.d = function (e, t, a) {
            i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (i.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (
                (i.r(a),
                Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    i.d(
                        a,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return a;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, 'a', t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = './');
    var n = (window.webpackJsonp = window.webpackJsonp || []),
        l = n.push.bind(n);
    (n.push = t), (n = n.slice());
    for (var h = 0; h < n.length; h++) t(n[h]);
    var c = l;
    s.push([1, 0, 2]), a();
})([
    ,
    function (e, t, a) {
        e.exports = a(4);
    },
    ,
    ,
    function (e, t, a) {
        'use strict';
        a.r(t);
        a(2);
        var r = a(0);
        var o = [
            function (e, t, a) {
                return [
                    '.container',
                    t,
                    '{width:70vw;margin:1rem auto;height:60vh}header',
                    t,
                    '{line-height:30px}'
                ].join('');
            }
        ];
        var s = [
            function (e, t, a) {
                return [
                    '.header',
                    t,
                    '{background:#a0f;color:#fff;font-size:1rem}.game-container',
                    t,
                    '{width:100%;height:60vh;background:#f5f5f5;display:inline-block}.overlay',
                    t,
                    '{position:relative;height:100%;width:100%;margin-top:-55vh;left:0;bottom:0;z-index:9}.overlay-content',
                    t,
                    '{position:relative;top:50%;text-align:center}'
                ].join('');
            }
        ];
        function i(e, t, a, r) {
            const { t: o, d: s, h: i, b: n } = e,
                { _m0: l, _m1: h, _m2: c } = r;
            return [
                i('div', { classMap: { 'game-container': !0 }, key: 9 }, [
                    t.isGameStarted
                        ? i(
                              'div',
                              {
                                  classMap: {
                                      header: !0,
                                      'slds-var-p-around_medium': !0
                                  },
                                  key: 7
                              },
                              [
                                  i(
                                      'div',
                                      { classMap: { 'slds-grid': !0 }, key: 6 },
                                      [
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-col': !0,
                                                      'slds-size_1-of-3': !0
                                                  },
                                                  key: 1
                                              },
                                              [
                                                  i('span', { key: 0 }, [
                                                      o('score : '),
                                                      s(t.score)
                                                  ])
                                              ]
                                          ),
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-col': !0,
                                                      'slds-size_1-of-3': !0,
                                                      'slds-text-align_center': !0
                                                  },
                                                  key: 3
                                              },
                                              [
                                                  i('span', { key: 2 }, [
                                                      o('High Score : '),
                                                      s(t.highScore)
                                                  ])
                                              ]
                                          ),
                                          i(
                                              'div',
                                              {
                                                  classMap: {
                                                      'slds-col': !0,
                                                      'slds-size_1-of-3': !0,
                                                      'slds-text-align_right': !0
                                                  },
                                                  key: 5
                                              },
                                              [
                                                  i('span', { key: 4 }, [
                                                      o('Life : '),
                                                      s(t.remainingLife)
                                                  ])
                                              ]
                                          )
                                      ]
                                  )
                              ]
                          )
                        : null,
                    t.isGameStarted
                        ? i(
                              'div',
                              {
                                  classMap: { touchBox: !0 },
                                  styleMap: {
                                      background: 'red',
                                      marginTop: '200px',
                                      marginLeft: '200px',
                                      height: '70px',
                                      width: '70px'
                                  },
                                  key: 8,
                                  on: { click: l || (r._m0 = n(t.handleTouch)) }
                              },
                              []
                          )
                        : null
                ]),
                t.showLayer
                    ? i('div', { classMap: { overlay: !0 }, key: 17 }, [
                          i(
                              'div',
                              { classMap: { 'overlay-content': !0 }, key: 16 },
                              [
                                  t.isGameEnd
                                      ? i(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-text-heading_large': !0
                                                },
                                                key: 12
                                            },
                                            [
                                                o('Game Over!'),
                                                i('br', { key: 10 }, []),
                                                o('Your Score : '),
                                                s(t.score),
                                                i('br', { key: 11 }, [])
                                            ]
                                        )
                                      : null,
                                  t.isGameEnd
                                      ? i(
                                            'button',
                                            {
                                                classMap: {
                                                    'slds-button': !0,
                                                    'slds-button_brand': !0
                                                },
                                                key: 13,
                                                on: {
                                                    click:
                                                        h ||
                                                        (r._m1 = n(t.startGame))
                                                }
                                            },
                                            [o('Start Again!')]
                                        )
                                      : null,
                                  t.gameNotStart
                                      ? i(
                                            'div',
                                            {
                                                classMap: {
                                                    'slds-text-heading_large': !0
                                                },
                                                key: 14
                                            },
                                            [o('Tap box to play!')]
                                        )
                                      : null,
                                  t.gameNotStart
                                      ? i(
                                            'button',
                                            {
                                                classMap: {
                                                    'slds-button': !0,
                                                    'slds-button_brand': !0
                                                },
                                                key: 15,
                                                on: {
                                                    click:
                                                        c ||
                                                        (r._m2 = n(t.startGame))
                                                }
                                            },
                                            [o('Start Game')]
                                        )
                                      : null
                              ]
                          )
                      ])
                    : null
            ];
        }
        var n = Object(r.registerTemplate)(i);
        (i.stylesheets = []),
            s && i.stylesheets.push.apply(i.stylesheets, s),
            (i.stylesheetTokens = {
                hostAttribute: 'my-tapthebox-_tapthebox-host',
                shadowAttribute: 'my-tapthebox-_tapthebox'
            });
        class l extends r.LightningElement {
            constructor(...e) {
                super(...e),
                    (this.score = void 0),
                    (this.remainingLife = void 0),
                    (this.originalScore = void 0),
                    (this.isGameStart = void 0),
                    (this.isGameOver = void 0),
                    (this.timeInterval = void 0),
                    (this.setTimeoutDisable = void 0),
                    (this.maxScreenWidthForGame = void 0),
                    (this.gameType = void 0),
                    (this.gameNotStart = !0),
                    (this.showLayer = !0),
                    (this.highScore = 0);
            }
            connectedCallback() {
                (this.maxScreenWidthForGame = 0),
                    (this.gameType = 'Intermidiate'),
                    (this.highScore = localStorage.getItem('lwc_tap_the_box')
                        ? localStorage.getItem('lwc_tap_the_box')
                        : 0),
                    console.log(this.highScore),
                    (this.maxScreenWidthForGame =
                        (80 * Math.floor(screen.width)) / 100 - 120),
                    console.log(this.maxScreenWidthForGame),
                    this.resetGame();
            }
            resetGame() {
                '' !== this.gameType
                    ? ((this.isGameStart = !0),
                      (this.isGameOver = !1),
                      (this.score = 0),
                      (this.remainingLife = 3),
                      (this.originalScore = 0),
                      (this.timeInterval = 2e3),
                      (this.setTimeoutDisable = !1),
                      'Beginner' === this.gameType
                          ? (this.timeInterval = 3e3)
                          : 'Intermidiate' === this.gameType
                          ? (this.timeInterval = 2e3)
                          : 'Expert' === this.gameType &&
                            (this.timeInterval = 1e3))
                    : alert('Please select a level');
            }
            startGame() {
                (this.gameNotStart = !1),
                    (this.showLayer = !1),
                    this.resetGame(),
                    this.changeTochBoxPlace();
            }
            exitGame() {
                this.isGameOver = !0;
            }
            get chooseType() {
                return [
                    { label: 'Beginner', value: 'Beginner' },
                    { label: 'Intermidiate', value: 'Intermidiate' },
                    { label: 'Expert', value: 'Expert' }
                ];
            }
            setGameType(e) {
                this.gameType = e.target.value;
            }
            changeTochBoxPlace1(e, t) {
                var a = Math.floor(275 * Math.random()) + 50,
                    r =
                        Math.floor(Math.random() * this.maxScreenWidthForGame) +
                        20,
                    o = Math.floor(255 * Math.random()) + 1,
                    s = Math.floor(255 * Math.random()) + 1,
                    i = Math.floor(255 * Math.random()) + 1;
                console.log(a),
                    console.log(r),
                    (e.querySelector('.touchBox').style.cssText =
                        'background: rgb(' +
                        o +
                        ',' +
                        s +
                        ',' +
                        i +
                        ');height:70px;width: 70px;margin-top:' +
                        a +
                        'px;margin-left:' +
                        r +
                        'px;'),
                    t.changeTochBoxPlace();
            }
            changeTochBoxPlace() {
                const e = this.template,
                    t = this;
                setTimeout(function () {
                    t.isGameOver ||
                        (t.setTimeoutDisable
                            ? ((t.setTimeoutDisable = !1),
                              t.changeTochBoxPlace())
                            : ((t.originalScore += 10),
                              t.originalScore > t.score
                                  ? ((t.remainingLife =
                                        3 - (t.originalScore - t.score) / 10),
                                    t.remainingLife < 1
                                        ? (localStorage.getItem(
                                              'lwc_tap_the_box'
                                          ) < t.score &&
                                              (localStorage.setItem(
                                                  'lwc_tap_the_box',
                                                  t.score
                                              ),
                                              (t.highScore = t.score)),
                                          (t.isGameOver = !0),
                                          (t.showLayer = !0))
                                        : t.changeTochBoxPlace1(e, t))
                                  : t.changeTochBoxPlace1(e, t)),
                        console.log(t.timeInterval));
                }, (t.timeInterval -= 30));
            }
            get isGameGoingToStart() {
                return !this.isGameStart && !this.isGameOver;
            }
            get isGameStarted() {
                return !0;
            }
            get isGameEnd() {
                return !!this.isGameOver;
            }
            handleTouch(e) {
                console.log(e),
                    (this.score += 10),
                    (this.originalScore += 10),
                    (this.setTimeoutDisable = !0);
                const t = this.template;
                var a = Math.floor(275 * Math.random()) + 50,
                    r =
                        Math.floor(Math.random() * this.maxScreenWidthForGame) +
                        20,
                    o = Math.floor(255 * Math.random()) + 1,
                    s = Math.floor(255 * Math.random()) + 1,
                    i = Math.floor(255 * Math.random()) + 1;
                console.log(a),
                    console.log(r),
                    (t.querySelector('.touchBox').style.cssText =
                        'background: rgb(' +
                        o +
                        ',' +
                        s +
                        ',' +
                        i +
                        ');height:70px;width: 70px;margin-top:' +
                        a +
                        'px;margin-left:' +
                        r +
                        'px;');
            }
        }
        Object(r.registerDecorators)(l, {
            fields: [
                'score',
                'remainingLife',
                'originalScore',
                'isGameStart',
                'isGameOver',
                'timeInterval',
                'setTimeoutDisable',
                'maxScreenWidthForGame',
                'gameType',
                'gameNotStart',
                'showLayer',
                'highScore'
            ]
        });
        var h = Object(r.registerComponent)(l, { tmpl: n });
        function c(e, t, a, r) {
            const { t: o, h: s, c: i } = e;
            return [
                s(
                    'header',
                    {
                        classMap: {
                            'slds-size_full': !0,
                            'slds-p-around_large': !0,
                            'slds-text-align_center': !0,
                            'slds-text-heading_large': !0,
                            'slds-m-top_large': !0,
                            header: !0
                        },
                        key: 2
                    },
                    [
                        o('Tap the box'),
                        s(
                            'div',
                            {
                                classMap: {
                                    'slds-text-heading_small': !0,
                                    'slds-m-top_small': !0
                                },
                                key: 1
                            },
                            [
                                o('View code on '),
                                s(
                                    'a',
                                    {
                                        attrs: {
                                            href:
                                                'https://github.com/Rohitmuz12/tap-the-box-game-lwc',
                                            target: '_blank'
                                        },
                                        key: 0
                                    },
                                    [o('Github')]
                                )
                            ]
                        )
                    ]
                ),
                s('div', { classMap: { container: !0 }, key: 4 }, [
                    i('my-tapthebox', h, { key: 3 }, [])
                ]),
                s(
                    'footer',
                    {
                        classMap: {
                            'slds-size_full': !0,
                            'slds-text-align_center': !0,
                            'slds-m-top_large': !0,
                            'slds-m-bottom_small': !0
                        },
                        key: 7
                    },
                    [
                        o('Tap the box by Rasmit Kumar'),
                        s('br', { key: 5 }, []),
                        s(
                            'a',
                            {
                                attrs: {
                                    href:
                                        'https://www.linkedin.com/in/rasmit-kumar-6b62ba150/',
                                    target: '_blank'
                                },
                                key: 6
                            },
                            [o('LinkedIn')]
                        )
                    ]
                )
            ];
        }
        var m = Object(r.registerTemplate)(c);
        (c.stylesheets = []),
            o && c.stylesheets.push.apply(c.stylesheets, o),
            (c.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        class d extends r.LightningElement {}
        var p = Object(r.registerComponent)(d, { tmpl: m });
        const g = Object(r.createElement)('my-app', { is: p });
        document.querySelector('#main').appendChild(g);
    }
]);
