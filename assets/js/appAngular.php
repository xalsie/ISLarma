<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

if (!isConnected()) {
    return "Error not connect!";
}

switch($_GET['action']) {
    case 'getListItems':
        $SQL = "SELECT `id`, `name`, `description`, `image`, `price`, `price_prime`, `stock` FROM `weapons` ORDER BY `name` ASC;";
            $result = db_query($SQL);

        echo json_encode($result);
    break;
    case 'getBadgePanier':
        echo json_encode($_SESSION["panier"]);
    break;
    case 'getPanier':
        $panierNumber = [];

        foreach ($_SESSION['panier'] as $key => $value) {
            if (isset($panierNumber[$value])) {
                $panierNumber[$value] += 1;
            } else {
                $panierNumber[$value] = 1;
            }
        }

        $SQL = "SELECT * FROM weapons WHERE id IN (".implode(",", $_SESSION['panier']).") AND visible = 1;";
            $result = db_query($SQL);

        echo json_encode([$result, $panierNumber]);
    break;
    case 'Delivery':
        $SQL = "SELECT * FROM delivery ORDER BY `id` ASC;";
            $result = db_query($SQL);

        echo json_encode($result);
    break;
    case 'deletePanier':
        $_SESSION["panier"] = [];
    break;
    case 'addPanier':
        $id = db_escape($_GET["id"]);

        $_SESSION["panier"][] = $id;
    break;
    case 'validatePanier':
        $panierNumber = [];
        $arma = [];

        if (!empty($_SESSION["panier"])) {
            foreach ($_SESSION['panier'] as $key => $value) {
                if (isset($panierNumber[$value])) {
                    $panierNumber[$value] += 1;
                } else {
                    $panierNumber[$value] = 1;
                }
        
                $arma[] = $value;
            }
        
            $sql = "INSERT INTO `orders` (`date_create`, `date_modification`, `user`, `name_group`, `darkchat`, `livraison`, `statut`, `description`)
                    VALUES (NOW(), NOW(), '".$_SESSION['user']."', '".$_SESSION['name_group']."', '".$_GET["codeDarkChat"]."', ".db_escape($_GET["id"]).", 0, '".json_encode($panierNumber)."')";
                $result = db_execute($sql);

            $_SESSION["panier"] = [];
        } else {
            echo 'KO';
        }
    break;
}
