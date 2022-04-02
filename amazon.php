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
        .maxsizepng {
            max-width: 100px;
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
                            <img ng-class="{'maxsizepng': i.image == 'chargeur.png'}" class="card-img-top" src="\assets\image\arms\{{i.image}}" alt="er" />
                            <!-- Product details-->
                            <div class="align-items-end card-body p-4 row">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{i.name}}</h5>
                                   <span class="text-muted">{{i.description}}</span>
                                   <hr>
                                   <i>Prime <strong>{{convertNumber(i.price_prime)}}</strong></i>
                                   <hr>
                                   {{convertNumber(i.price)}}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="align-self-center bg-transparent border-top-0 card-footer p-4 pt-0 text-center">
                                <div class="text-center">
                                    <a ng-show="i.stock >= 1" class="btn btn-outline-dark mt-auto" ng-click="addToCart(i.id, i.stock)">Ajouter au panier</a>
                                    <a ng-show="i.stock == 0" class="btn btn-outline-warning mt-auto">Pas en stock</a>
                                </div>
                                <span class="text-muted" style="font-size: smaller;">Stock {{i.stock}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<?php
  echo Footer_HTML();
?>