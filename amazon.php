<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

if (!isConnected()) {
    header("Location: /");
}

$IncludeHeader = '<script src="/assets/js/app-angular.js?v1.0"></script>';

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
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
    </style>
    <body ng-controller="appCommon" ng-init="getFromUrl(); getBadgeCart();">
        <!-- Navigation-->
        <?php echo nav_bar_user() ?>

        <!-- Section-->
        <section class="py-2">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" >
                    <div class="col mb-5" id="{{i.id}}" ng-repeat="i in responseMap">
                        <div class="card h-100 rounded-4 shadow-sm">
                            <!-- Product image-->
                            <img class="card-img-top" src="\assets\image\arms\{{i.image}}" alt="er" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{i.name}}</h5>
                                   {{i.description}}
                                   <hr>
                                   <i>Prime <strong>{{convertNumber(i.price_prime)}}</strong></i>
                                   <hr>
                                   {{convertNumber(i.price)}}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <a class="btn btn-outline-dark mt-auto" ng-click="addToCart(i.id)">Ajouter au panier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>
            function numberWithSpaces(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        </script>

<?php
  echo Footer_HTML();
?>