(this["webpackJsonphex-code-puzzle"] = this["webpackJsonphex-code-puzzle"] || []).push([
    [0],
    {
        248: function (e, t, r) {},
        249: function (e, t, r) {},
        250: function (e, t, r) {
            "use strict";
            r.r(t);
            var a = r(0),
                n = r.n(a),
                i = r(62),
                s = r.n(i),
                l = (r(74), r(66)),
                u = r(63),
                c = r(64),
                o = r(68),
                h = r(67),
                m = (r(75), r(76), { rows: 5, columns: 5, selectedChar: "\u2022", bufferLength: 6 });
            var f = function (e) {
                return n.a.createElement(
                    "td",
                    {
                        className: "Hex " + e.hexClass,
                        onClick: function () {
                            return e.onClick && e.onClick(e.row, e.col);
                        },
                    },
                    n.a.createElement("p", { className: e.textClass }, e.value || m.selectedChar)
                );
            };
            function b(e, t) {
                return e.highlightCol === t && e.row === m.rows - 1 ? "bottomHex " : "";
            }
            function g(e, t) {
                return e.highlightCol === t && 0 === e.row ? "topHex " : "";
            }
            var v = function (e) {
                var t = e.highlightRow === e.row;
                return n.a.createElement(
                    "tr",
                    { className: "HexRow " + (t ? "hexRowHighlight " : "") },
                    e.hexValues.map(function (r, a) {
                        var i = e.highlightCol === a,
                            s = i ? "hexHighlight " : "",
                            l = !1;
                        return (
                            r !== m.selectedChar && (t || i) && (l = !0),
                            n.a.createElement(f, { value: r, key: a, onClick: l && e.onClick, row: e.row, col: a, textClass: null === r ? "greyText " : "", hexClass: (l ? "hoverable " : "") + s + g(e, a) + b(e, a) })
                        );
                    })
                );
            };
            r(77);
            var d = function (e) {
                return n.a.createElement(
                    "div",
                    { className: "Buffer" },
                    Array(e.bufferLength)
                        .fill()
                        .map(function (t, r) {
                            return n.a.createElement(
                                "div",
                                { className: "bufferText onBoot-buffer " + e.className, key: r },
                                e.buffer.length === r && n.a.createElement("p", { key: r, className: "blink" }, "|"),
                                e.buffer.length !== r && n.a.createElement("p", { key: r }, e.buffer[r])
                            );
                        })
                );
            };
            r(78);
            var E = function (e) {
                    var t = e.failed || e.success ? "noAnimation" : "";
                    var j = e.timer ? "terminate":"";
                    return n.a.createElement(
                        "div",
                        { className: "primaryObjective" },
                        n.a.createElement("h3", { className: "objectiveHeader" }, "Primary Access"),
                        n.a.createElement(
                            "div",
                            { className: "Objective " + t + j},
                            e.objective.map(function (t, r) {
                                var a = e.progress[r] === t ? "objectiveHighlight " : "";
                                return n.a.createElement("div", { className: "ObjectiveTextContainer " + a + (e.failed ? "objectiveFailed " : ""), key: r }, n.a.createElement("p", { key: r }, t));
                            })
                        )
                    );
                },
                p = r(65),
                y = r.n(p);
            r(248);
            var C = function (e) {
                    return n.a.createElement(
                        "div",
                        { className: "Subroutines " + e.className },
                        n.a.createElement("h4", { className: "subroutineHeader" }, "Subroutines"),
                        n.a.createElement(
                            "div",
                            { className: "subroutinesContainer" },
                            e.subroutines.map(function (t, r) {
                                var a = e.terminate && e.subroutinesProgress[r].length !== t.length ? "subroutineTerminate " : "",
                                    i = e.terminate ? "subroutineNoAnimation" : "";
                                return n.a.createElement(
                                    "div",
                                    { key: r, className: "subroutine " + a + i },
                                    n.a.createElement(
                                        "div",
                                        { className: "subroutineValues" },
                                        t.map(function (t, a) {
                                            var i = e.subroutinesProgress[r][a] === t ? "subroutineObjectiveHighlight" : "";
                                            return n.a.createElement("div", { className: "subroutineTextContainer " + i, key: a }, n.a.createElement("p", { key: a }, t));
                                        })
                                    )
                                );
                            })
                        ),
                        n.a.createElement("p", { className: "ObjectiveSuccess" }, getNumberSuccess()),
                        n.a.createElement("p", { className: "ObjectiveError" }, getNumberError()),
                    );
                },
                N = r(32),
                k = r.n(N),
                x =
                    (r(249),
                    (function (e) {
                        Object(o.a)(r, e);
                        var t = Object(h.a)(r);
                        function r() {
                            var e;
                            Object(u.a)(this, r);
                            for (var a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
                            return ((e = t.call.apply(t, [this].concat(n))).state = e.initialState()), e;
                        }
                        return (
                            Object(c.a)(r, [
                                {
                                    key: "initialState",
                                    value: function () {
                                        var e = this.generateBoard();

                                        return {
                                            board: e,
                                            highlightRow: 0,
                                            highlightCol: null,
                                            buffer: [],
                                            primaryObjective: this.generatePrimaryObjective(e),
                                            primaryObjectiveProgress: [],
                                            subroutines: this.generateSubroutines(e),
                                            subroutinesProgress: [[], [], [], []],
                                            success: !1,
                                            failure: !1,
                                            timer: this.getErrorForTimer(),
                                        };
                                    },
                                },

                                {
                                    key: "getErrorForTimer",
                                    value: function() {
                                        return getSetTimer();
                                    }
                                },

                                {
                                    key: "reset",
                                    value: function () {
                                        this.setState(this.initialState());
                                    },
                                },
                                {
                                    key: "generateBoard",
                                    value: function () {
                                        var e = this,
                                            t = Array(m.rows)
                                                .fill()
                                                .map(function () {
                                                    return e.randomHex();
                                                });
                                        return Array(m.rows)
                                            .fill()
                                            .map(function () {
                                                return Array(m.columns)
                                                    .fill()
                                                    .map(function () {
                                                        return t[e.randomIndex()];
                                                    });
                                            });
                                    },
                                },
                                {
                                    key: "randomHex",
                                    value: function () {
                                        return Math.floor(256 * Math.random())
                                            .toString(16)
                                            .toUpperCase()
                                            .padStart(2, "0");
                                    },
                                },
                                {
                                    key: "generatePrimaryObjective",
                                    value: function (e) {
                                        var t = Array(m.rows)
                                                .fill()
                                                .map(function (e, t) {
                                                    return t;
                                                }),
                                            r = this.randomIndex(),
                                            a = this.randomIndex(),
                                            n = (t = t.filter(function (e, t) {
                                                return e !== a;
                                            }))[Math.floor(Math.random() * t.length)];
                                        return [e[a][r], e[n][r]];
                                    },
                                },
                                {
                                    key: "generateSubroutines",
                                    value: function (e) {
                                        var t = this;
                                        return Array(4)
                                            .fill()
                                            .map(function () {
                                                var r = Math.ceil(3 * Math.random()) + 1;
                                                return Array(r)
                                                    .fill()
                                                    .map(function () {
                                                        return e[t.randomIndex()][t.randomIndex()];
                                                    });
                                            });
                                    },
                                },
                                {
                                    key: "hexClick",
                                    value: function (e, t) {
                                        var r = this.state.board.slice(),
                                            a = this.state.buffer.slice(),
                                            n = r[e][t],
                                            i = this.refreshHighlights(e, t),
                                            s = Object(l.a)(i, 2),
                                            u = s[0],
                                            c = s[1],
                                            o = this.calcObjectiveProgress(n, this.state.primaryObjectiveProgress, this.state.primaryObjective),
                                            h = o.length === this.state.primaryObjective.length;
                                    
                                        this.calcSubroutineProgress(n);
                                        a.push(n),
                                            (r[e][t] = m.selectedChar),

                                            this.setState({
                                                board: r,
                                                highlightRow: u,
                                                highlightCol: c,
                                                buffer: a,
                                                primaryObjectiveProgress: o,
                                                success: h && a.length === m.bufferLength && this.calcSubroutineSuccess(this.state, n),
                                                failure: (!h || this.calcSubroutineSuccess(this.state, n) == false) && a.length === m.bufferLength,
                                                subroutinesProgress: this.calcSubroutineProgress(n),
                                            });
                                    },
                                },
                                {
                                    key: "refreshHighlights",
                                    value: function (e, t) {
                                        return null != this.state.highlightRow ? [null, t] : [e, null];
                                    },
                                },
                                {
                                    key: "calcObjectiveProgress",
                                    value: function (e, t, r) {
                                        var a = t.slice();
                                        return e === r[a.length] ? a.push(e) : e !== r[0] && t.length !== r.length && (a = []), a;
                                    },
                                },

                                {
                                    key: "calcSubroutineSuccess",
                                    value: function (t, n) {
                                        const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
                                        var e = false;

                                        t.subroutinesProgress.map(function (r, a) {
                                            if (equals(r, t.subroutines[a])) e = true;
                                        });

                                        return e;
                                    },
                                },

                                {
                                    key: "calcSubroutineProgress",
                                    value: function (e) {
                                        var t = this;
                                        return this.state.subroutinesProgress.map(function (r, a) {
                                            return t.calcObjectiveProgress(e, r, t.state.subroutines[a]);
                                        });
                                    },
                                },

                                {
                                    key: "calculResult",
                                    value: function (e) {

                                        $.ajax({
                                            method: 'POST',
                                            url:'/console/firewall.php',
                                            data: {
                                                autofunc:true,
                                                action:'calculResult',
                                                id_game: 1,
                                                data: e
                                            }
                                        }).done(function(data) {
                                            console.log(data +" > 6");
                                        });

                                        return true;
                                    }
                                },

                                {
                                    key: "randomIndex",
                                    value: function () {
                                        return Math.floor(Math.random() * m.rows);
                                    },
                                },
                                {
                                    key: "terminate",
                                    value: function () {
                                        return this.state.success || this.state.failure || this.state.timer;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return n.a.createElement(
                                            "div",
                                            { className: "App" },
                                            // n.a.createElement(y.a, { params: { particles: { number: { value: 100, density: { enable: !0 } }, color: { value: "#ffffff" }, line_linked: { color: "#3bc702", width: 2 } } } }),
                                            n.a.createElement(
                                                "div",
                                                { className: "centralRow" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "centralContainer" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "objectiveRow" },
                                                        n.a.createElement(E, { objective: this.state.primaryObjective, progress: this.state.primaryObjectiveProgress, failed: this.state.failure, success: this.state.success, timer: this.state.timer }),
                                                        n.a.createElement(
                                                            k.a,
                                                            { maxWidth: 590 },
                                                            n.a.createElement(C, { className: "subroutineObjectives", subroutines: this.state.subroutines, subroutinesProgress: this.state.subroutinesProgress, terminate: this.terminate() })
                                                        )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "centralColumn" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "board" },
                                                            n.a.createElement(
                                                                "table",
                                                                { className: "table onBoot " + (this.terminate() ? "terminate" : "") },
                                                                n.a.createElement(
                                                                    "tbody",
                                                                    null,
                                                                    this.state.board.map(function (t, r) {
                                                                        return n.a.createElement(v, {
                                                                            hexValues: t,
                                                                            key: r,
                                                                            row: r,
                                                                            onClick: e.terminate()
                                                                                ? null
                                                                                : function (t, r) {
                                                                                      return e.hexClick(t, r);
                                                                                  },
                                                                            highlightRow: e.state.highlightRow,
                                                                            highlightCol: e.state.highlightCol,
                                                                        });
                                                                    })
                                                                )
                                                            ),
                                                            this.state.success && this.calculResult(1) && n.a.createElement("h1", { className: "successText glitch terminateText", "data-text": "ACCESS GRANTED" }, "ACCESS GRANTED"),
                                                            this.state.failure && this.calculResult(0) && n.a.createElement("h1", { className: "failureText glitch terminateText", "data-text": "ACCESS DENIED" }, "ACCESS DENIED"),
                                                            this.state.timer && this.calculResult(2) && n.a.createElement("h1", { className: "failureText glitch terminateText timerText", "data-text": "00:00:00" }, "00:00:00"),
                                                            this.terminate() &&
                                                                n.a.createElement(
                                                                    "h3",
                                                                    {
                                                                        className: "reboot",
                                                                        onClick: function () {
                                                                            return e.reset();
                                                                        },
                                                                    },
                                                                    "Reboot"
                                                                )
                                                        ),
                                                        n.a.createElement(d, { buffer: this.state.buffer, bufferLength: m.bufferLength, className: "app-buffer " + (this.terminate() ? "terminate-buffer" : "") })
                                                    )
                                                ),
                                                n.a.createElement(
                                                    k.a,
                                                    { minWidth: 590 },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "objectiveColumn" },
                                                        n.a.createElement(C, { className: "subroutineObjectives", subroutines: this.state.subroutines, subroutinesProgress: this.state.subroutinesProgress, terminate: this.terminate() })
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            r
                        );
                    })(n.a.Component));
            s.a.render(n.a.createElement(n.a.StrictMode, null, n.a.createElement(x, null)), document.getElementById("root"));
        },
        69: function (e, t, r) {
            e.exports = r(250);
        },
        74: function (e, t, r) {},
        75: function (e, t, r) {},
        76: function (e, t, r) {},
        77: function (e, t, r) {},
        78: function (e, t, r) {},
    },
    [[69, 1, 2]],
]);


function getNumberError() {
    var numError = "";

    var send = $.ajax({
        method: 'POST',
        url:'/console/firewall.php',
        data: {
            autofunc:true,
            action:'numberError',
            id_game: 1
        }
    }).done(function(data) {
        $("p.ObjectiveError").html("error : "+data+" / 6")
    });
}

function getNumberSuccess() {
    var numError = "";

    var send = $.ajax({
        method: 'POST',
        url:'/console/firewall.php',
        data: {
            autofunc:true,
            action:'numberSuccess',
            id_game: 1
        }
    }).done(function(data) {
        $("p.ObjectiveSuccess").html("success : "+data+" / 3")
    });
}

function getSetTimer() {
    var toTimer = "";

    var send = $.ajax({
        method: 'POST',
        url:'/console/firewall.php',
        async: false,
        data: {
            autofunc:true,
            action:'numberError',
            id_game: 1
        }
    }).done(function(data) {
        console.log(data +" > 6");
        data = parseInt(data);

        if (data >= 6) {
            toTimer = 1;
            getCountDown();
        }
    });

    return toTimer;
}

function getCountDown() {
    var send = $.ajax({
        method: 'POST',
        url:'/console/firewall.php',
        async: false,
        data: {
            autofunc:true,
            action:'getTimeToTimer',
            id_game: 1
        }
    }).done(function(data) {
        countDown(data);
    });
}

function toResetTimer() {
    var send = $.ajax({
        method: 'POST',
        url:'/console/firewall.php',
        async: false,
        data: {
            autofunc:true,
            action:'toResetTimer',
            id_game: 1
        }
    }).done(function(data) {
        countDown(data);
    });
}

function countDown(date) {
    // Set the date we're counting down to
    var countDownDate = new Date(date).getTime() + (6*60*60*1000);

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"

        let res = hours +":"+ minutes +":"+ seconds;

        document.getElementsByClassName("timerText")[0].innerHTML = res;
        document.getElementsByClassName("timerText")[0].attributes[1].nodeValue = res;

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);

            toResetTimer();

            // document.getElementsByClassName("timerText")[0].innerHTML = "EXPIRED";
            // document.getElementsByClassName("timerText")[0].attributes[1].nodeValue = "EXPIRED";
        }
    }, 1000);
}
