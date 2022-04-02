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
            position: initial;
            width: 100%;
        }
    </style>
    <body ng-controller="appCommon" ng-init="getBadgeCart(); getCart(); getDelivery();">
        <!-- Navigation-->
        <?php echo nav_bar_user() ?>

        <div class="card rounded-6 shadow-lg">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4><b>Panier</b></h4>
                            </div>
                            <div class="col align-self-center text-right text-muted">{{numberItem}} articles</div>
                        </div>
                    </div>

                    <div class="row border-top" ng-class="{'border-bottom':$last}" id="{{i.id}}" ng-repeat="i in mapShop">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="\assets\image\arms\{{i.image}}"></div>
                            <div class="col">
                                <div class="row">{{i.name}}</div>
                                <div class="row text-muted">{{i.description}}</div>
                            </div>
                            <div class="col text-muted">{{mapItemNumber[i.id]}}</div>
                            <div class="col-3 me-2">{{convertNumber(i.price*mapItemNumber[i.id])}}</div>
                            <!-- <div class="col"> <a href="#"><i class="fal fa-minus-square"></i></a><a href="#" class="border">{{mapItemNumber[i.id]}}</a><a href="#"><i class="fal fa-plus-square"></i></a></div> -->
                            <div class="col-3 me-1">{{convertNumber(i.price*mapItemNumber[i.id])}}<span class="delete" ng-click="deleteItem(i.id)" style="margin-left: 10px; cursor: pointer;"><i class="fal fa-times me-2"></i></span></div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col align-self-start back-to-shop"><a class="btn btn-outline-dark" href="/amazon.php"><i class="fab fa-amazon me-2"></i>Retourner au catalogue</a></div>
                        <div class="col align-self-end"><a class="btn btn-outline-dark" ng-click="delToCart()"><i class="fal fa-trash-alt me-2"></i>Vider le panier</a></div>
                    </div>
                </div>

                <div class="col-md-4 summary">
                    <div>
                        <h5><b>Sommaire</b></h5>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col" style="padding-left:0;">{{numberItem}} articles</div>
                        <div class="col text-right">{{convertNumber(totalPrice)}}</div>
                    </div>
                    <div style="padding: 3vh 0;">
                        <p>Expédition</p>
                        <select ng-model="deliveryOpt" ng-options="Delivery.name for Delivery in selectedDelivery"></select>
                        <div class="col text-right text-muted" style="font-size: smaller;">Temps de livraison : {{deliveryOpt.description}}</div>
                        <div class="col text-left text-muted" style="font-size: smaller;">Prix : {{convertNumber(deliveryOpt.price)}}</div>
                    </div>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col" style="padding-left:0;">Prix Toatal</div>
                        <div class="col text-right">{{convertNumber((totalPrice-0) + (deliveryOpt.price-0))}}</div>
                    </div>
                    <div><a class="btn btn-outline-dark" href="/toValidate.php?id={{deliveryOpt.id}}">Valider la commande</a></div>
                </div>
            </div>
        </div>

<?php
  echo Footer_HTML();
?>