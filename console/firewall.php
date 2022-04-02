<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

$sql = "SELECT `id`, `game_success` FROM `games` WHERE `id` = '2';";
    $result = db_query($sql);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    switch ($_POST["action"]) {
        case "numberError":
            $id_game = db_escape($_POST["id_game"]);

            $sql = "SELECT nb_faute, date_modification FROM `games` WHERE `id` = '".$id_game."';";
                $result = db_query($sql);
            
            // if ($result[0]["nb_faute"] > 3 ) {

                
            // }
            
            echo $result[0]["nb_faute"];
        break;
        case "numberSuccess":
            $id_game = db_escape($_POST["id_game"]);

            $sql = "SELECT game_success, date_modification FROM `games` WHERE `id` = '".$id_game."';";
                $result = db_query($sql);
            
            // if ($result[0]["nb_faute"] > 3 ) {

                
            // }
            
            echo $result[0]["game_success"];
        break;
        case "toResetTimer":
            $id_game = db_escape($_POST["id_game"]);

            $sql = "UPDATE `games` SET `nb_faute` = 0, date_modification = now() WHERE `id` = '".$id_game."';";
                    $result = db_execute($sql);
            
            echo $result[0]["game_success"];
        break;
        case "getTimeToTimer":
            $id_game = db_escape($_POST["id_game"]);

            $sql = "SELECT date_modification FROM `games` WHERE `id` = '".$id_game."';";
                $result = db_query($sql);

            echo $result[0]["date_modification"];
        break;
        case "calculResult":
            $id_game = db_escape($_POST["id_game"]);
            $success = db_escape($_POST["data"]);

            $sql = "SELECT * FROM `games` WHERE `id` = '".$id_game."';";
                $result1 = db_query($sql);

            if ($result1[0]["nb_faute"] > 3) {
                
            }

            if ($success == 1) {
                // $_SESSION["GAME"][$id_game]["success"] = $_SESSION["GAME"][$id_game]["success"] + 1;

                // if ($_SESSION["GAME"][$id_game]["success"] == 3) {
                    $sql = "UPDATE `games` SET `game_success` = game_success+1, date_modification = now() WHERE `id` = '".$id_game."';";
                        $result = db_execute($sql);
                    
                    // $_SESSION["GAME"][$id_game]["success"] = 0;
                // }
            } else if ($success == 0){
                $sql = "UPDATE `games` SET `nb_faute` = nb_faute+1, date_modification = now() WHERE `id` = '".$id_game."';";
                    $result = db_execute($sql);
            }

            echo $result1[0]["nb_faute"];
        break;
    }
    exit;
}
$IncludeHeader = '<link href="/static/css/main.5e1d8052.chunk.css" rel="stylesheet">';

// echo Header_HTML("FireWall ISLarma - Immersion Life", $IncludeHeader);
?>
<!doctype html>
<html lang="fr" ng-app="appRoot">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="French">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="amazon guns rp">
    <meta name="keywords" content="arma,rp,united,photo,gta,five,fivem,gta online,gta server">
    <meta name="author" content="LeGrizzly#0341">

    <title>FireWall ISLarma - Immersion Life</title>

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ISL arma Immersion Life - https://github.com/xalsie/ISLarma/commit/<?php echo getGitVersion()[0]."\n";?>
    Updated: <?php echo getGitVersion()[1]."\n";?>
    Theme by: LeGrizzly - LeGrizzly#0341
    Support: LeGrizzly#0341
    Terminal : <?php $token = substr("0123456789", 0, rand(7,12)); echo $_SERVER["HTTP_HOST"].'/'.str_shuffle($token)."@".str_shuffle($token)."\n";?>
     _                _____          _               _         
    | |              / ____|        (_)             | |        
    | |        ___  | |  __   _ __   _   ____  ____ | |  _   _ 
    | |       / _ \ | | |_ | | \'__|| | |_  / |_  / | | | | | |
    | |____  |  __/ | |__| | | |    | |  / /   / /  | | | |_| |
    |______|  \___|  \_____| |_|    |_| /___| /___| |_|  \__, |
                                                          __/ |
                                                         |___/
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <!-- Font-Awesome Pro CSS -->
    <link href="/assets/font-awesome/css/all.min.css?v.5.15.4" rel="stylesheet">

    <meta name="theme-color" content="#7952b3">

    <!-- AngularJs -->
    <script src="/assets/angularjs/js/angular.min.js"></script>
    <script src="/assets/js/app-angular.js?v1.0"></script>
    <script src="/assets/js/infinite-scroll.js?v1.0"></script>

    <!-- Script init -->
    <script src="/assets/jQuery/js/jquery.min.js?v1.0"></script>

    <!-- SweetAlert2 -->
    <link href="/assets/SweetAlert2/css/sweetalert2.min.css?v1.0" rel="stylesheet">
    <script src="/assets/SweetAlert2/js/sweetalert2.min.js?v1.0"></script>

    <script src="/assets/bootstrap/js/bootstrap.min.js?v1.0"></script>
    <script src="/assets/bootstrap/js/bootstrap.bundle.min.js?v1.0"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0FP5CF9QH"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());

      gtag("config", "G-S0FP5CF9QH");
    </script>

    <!-- Custom styles for this template -->

	<!-- Import Auto script -->
	<link href="/static/css/main.5e1d8052.chunk.css" rel="stylesheet">

  </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <style>
        .ObjectiveError, .ObjectiveSuccess {
            font-size: small;
            font-weight: 700;
            font-family: monospace;
        }
        </style>
        <div id="root" style="background-color: #171b23;"></div>
        <script>
            !(function (e) {
                function r(r) {
                    for (var n, l, p = r[0], f = r[1], i = r[2], c = 0, s = []; c < p.length; c++) (l = p[c]), Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), (o[l] = 0);
                    for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]);
                    for (a && a(r); s.length; ) s.shift()();
                    return u.push.apply(u, i || []), t();
                }
                function t() {
                    for (var e, r = 0; r < u.length; r++) {
                        for (var t = u[r], n = !0, p = 1; p < t.length; p++) {
                            var f = t[p];
                            0 !== o[f] && (n = !1);
                        }
                        n && (u.splice(r--, 1), (e = l((l.s = t[0]))));
                    }
                    return e;
                }
                var n = {},
                    o = { 1: 0 },
                    u = [];
                function l(r) {
                    if (n[r]) return n[r].exports;
                    var t = (n[r] = { i: r, l: !1, exports: {} });
                    return e[r].call(t.exports, t, t.exports, l), (t.l = !0), t.exports;
                }
                (l.m = e),
                    (l.c = n),
                    (l.d = function (e, r, t) {
                        l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
                    }),
                    (l.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                    }),
                    (l.t = function (e, r) {
                        if ((1 & r && (e = l(e)), 8 & r)) return e;
                        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
                        var t = Object.create(null);
                        if ((l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e))
                            for (var n in e)
                                l.d(
                                    t,
                                    n,
                                    function (r) {
                                        return e[r];
                                    }.bind(null, n)
                                );
                        return t;
                    }),
                    (l.n = function (e) {
                        var r =
                            e && e.__esModule
                                ? function () {
                                    return e.default;
                                }
                                : function () {
                                    return e;
                                };
                        return l.d(r, "a", r), r;
                    }),
                    (l.o = function (e, r) {
                        return Object.prototype.hasOwnProperty.call(e, r);
                    }),
                    (l.p = "/");
                var p = (this["webpackJsonphex-code-puzzle"] = this["webpackJsonphex-code-puzzle"] || []),
                    f = p.push.bind(p);
                (p.push = r), (p = p.slice());
                for (var i = 0; i < p.length; i++) r(p[i]);
                var a = f;
                t();
            })([]);

            function timer(text = "00:00:00") {
                $(".timerText")[0].innerText = text;
                $(".timerText")[0].attributes[1].value = text;
            }
        </script>
        <script src="/static/js/2.57d7e05f.chunk.js"></script>
        <script src="/static/js/main.85606f97.chunk.js"></script>
    </body>
</html>