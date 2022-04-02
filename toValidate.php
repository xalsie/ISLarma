<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

if (!isConnected() | empty($_SESSION["panier"])) {
    header("Location: /");
}

$IncludeHeader = '<script src="/assets/js/app-angular.js?v1.0"></script>';
$IncludeHeader .= '<link href="/assets/css/cart.styles.css?v1.0" rel="stylesheet" />';

echo Header_HTML("ISLarma - Immersion Life", $IncludeHeader);
?>
    <style>
        .dropdown-menu[data-bs-popper] {
            margin-top: 0.725rem;
        }
        .rounded-4 {
            border-radius: 0.4rem;
        }
        img.card-img-top {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
        }
        footer.footer {
            bottom: 0;
            position: absolute;
            width: 100%;
        }

        .my-8 {
            margin-top: 8rem !important;
            margin-bottom: 8rem !important;
        }

        footer.footer {
            bottom: 0;
            position: initial;
            width: 100%;
        }
    </style>
    <body ng-controller="appCommon" ng-init="getBadgeCart(); getCart(); getDelivery();">
        <!-- Navigation-->
        <?php echo nav_bar_user() ?>

        <div class="container my-8">
            <div class="p-4 align-items-center rounded-3 border shadow-lg text-center">
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Votre commande à bien été prise en compte rendez-vous sur le DarkChat ci-dessous pour finaliser votre achat :</p>
                </div>
                <h1 class="display-5 fw-bold" id="darkchat"></h1>
                <div class="col align-self-start back-to-shop"><a class="btn btn-outline-dark" href="/amazon.php"><i class="fab fa-amazon me-2"></i>Retourner au achat</a></div>
            </div>
        </div>

        <script>
            function pwdAleatoir() {
                String.prototype.shuffle = function() {
                    var parts = this.split('');
                    for (var i = 0, len = parts.length; i < len; i++) {
                        var j = Math.floor( Math.random() * ( i + 1 ) );
                        var temp = parts[i];
                        parts[i] = parts[j];
                        parts[j] = temp;
                    }
                    return parts.join('');
                };
                return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.shuffle().substr(1, 5);
            }

            $(() => {
                var darkChat = pwdAleatoir();
                const id = new URLSearchParams(window.location.search).get('id');

                $("#darkchat").text(darkChat);

                $.ajax({
                    url: '/assets/js/appAngular.php?action=validatePanier&codeDarkChat='+darkChat+'&id='+id,
                    type: 'GET'
                });
            })
        </script>

<?php
  echo Footer_HTML();
?>