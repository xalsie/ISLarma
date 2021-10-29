<?php
	//àéè
	defined('v1Secureutd') or header('Location: /');
	
	function Header_HTML($Title="", $IncludeHeader="") {
    $token = substr("0123456789", 0, rand(7,12));
    $terminal = '/'.str_shuffle($token)."@".str_shuffle($token);

    $git = getGitVersion();

	$ret='<!doctype html>
<html lang="fr" ng-app="appRoot">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="French">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="amazon guns rp">
    <meta name="keywords" content="arma,rp,united,photo,gta,five,fivem,gta online,gta server">
    <meta name="author" content="LeGrizzly#0341">

    <title>'.$Title.'</title>

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    UTD arma United RP - https://github.com/xalsie/UTDarma/commit/'.$git[0].'
    Updated: '.$git[1].'
    Theme by: LeGrizzly - LeGrizzly#0341
    Support: LeGrizzly#0341
    Terminal : '.$_SERVER["HTTP_HOST"].$terminal.'
     _                _____          _               _         
    | |              / ____|        (_)             | |        
    | |        ___  | |  __   _ __   _   ____  ____ | |  _   _ 
    | |       / _ \ | | |_ | | \'__| | | |_  / |_  / | | | | | |
    | |____  |  __/ | |__| | | |    | |  / /   / /  | | | |_| |
    |______|  \___|  \_____| |_|    |_| /___| /___| |_|  \__, |
                                                          __/ |
                                                         |___/
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <!-- Bootstrap core CSS -->
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap-grid.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap-reboot.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap-utilities.min.css" rel="stylesheet">

    <!-- Bootstrap icon CSS -->
    <link href="/assets/bootstrap/css/bootstrap-icons.css" rel="stylesheet" />

    <!-- Font-Awesome Pro CSS -->
    <link href="/assets/font-awesome/css/all.min.css?v.5.15.4" rel="stylesheet">

    <!-- Favicons -->
    <!-- <link rel="apple-touch-icon" href="/docs/5.0/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="manifest" href="/docs/5.0/assets/img/favicons/manifest.json">
    <link rel="mask-icon" href="/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
    <link rel="icon" href="/docs/5.0/assets/img/favicons/favicon.ico"> -->
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

    <!-- Bootstrap table CSS -->
    <link href="/assets/bootstrap-table/css/bootstrap-table.min.css?v1.0" rel="stylesheet">

    <!-- script src="https://unpkg.com/tableexport.jquery.plugin/tableExport.min.js"></script -->
    <script src="/assets/bootstrap-table/js/bootstrap-table.min.js?v1.0"></script>
    <!-- script src="/assets/bootstrap-table/locale/bootstrap-table-fr-FR.min.js?v1.0"></script>
    <script src="/assets/bootstrap-table/js/bootstrap-table-export.min.js?v1.0"></script>
    <script src="/assets/bootstrap-table/js/bootstrap-table-select2-filter.js?v1.0"></script -->

    <script src="/assets/Isotope/js/isotope.pkgd.min.js?v1.0"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0FP5CF9QH"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());

      gtag("config", "G-S0FP5CF9QH");
    </script>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      .bi {
        vertical-align: 0;
        padding-right: 5px;
      }
    </style>

    <!-- Custom styles for this template -->

	<!-- Import Auto script -->
	'.$IncludeHeader.'

  </head>';
	return $ret;
}

function nav_bar_user() {
  $back_office_user = (($_SESSION["admin"])? '<li><a class="dropdown-item" href="/administration/guns_stock.php"><i class="fal fa-cogs me-2"></i>Back office</a></li>':'');
  $rtn = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container px-4 px-lg-5">
      <a class="navbar-brand bg-dark" href="/amazon.php"><img src="/assets/image/logo_white.png" alt="logo united arma shop" height="27"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          </ul>
          <form class="d-flex" style="margin-right: 10px;">
              <a class="btn btn-outline-light" href="/cartShop.php">
                  <i class="fal fa-shopping-cart me-1"></i>
                  Panier
                  <span id="badge-cart-shop" class="badge bg-dark text-white ms-1 rounded-pill">{{badgeCartShop}}</span>
              </a>
          </form>
          <div class="dropdown">
              <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fal fa-id-card me-1"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                  <!-- <li><a class="dropdown-item" href="#"><i class="fal fa-user me-2"></i>Mon profile</a></li> -->
                  <li><a class="dropdown-item" href="./orders_user.php"><i class="fal fa-clipboard-list-check me-2"></i>Vos commandes</a></li>
                  '.$back_office_user.'
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="/logout.php"><i class="fal fa-sign-out me-2"></i></i>Déconnexion</a></li>
              </ul>
          </div>
      </div>
  </div>
</nav>';

return $rtn;
}
function side_bar_admin($active_section) {
  $rtn = '<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
        <a href="./guns_stock.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            <span class="fs-4"><img src="/assets/image/logo_white.png" alt="logo united arma shop" height="27"></span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="./guns_stock.php" class="nav-link text-white '.(($active_section == 1)? "active":"").'" aria-current="page">
                  <i class="fal fa-raygun"></i>
                  Armes / items
                </a>
            </li>
            <li>
                <a href="./orders.php" class="nav-link text-white '.(($active_section == 2)? "active":"").'">
                <i class="fal fa-cart-arrow-down"></i>
                Commandes
                </a>
            </li>
            <li>
                <a href="./gestion_users.php" class="nav-link text-white '.(($active_section == 3)? "active":"").'">
                <i class="fal fa-user-circle"></i>
                Utilisateurs
                </a>
            </li>
            <li>
                <a href="./gestion_delivery.php" class="nav-link text-white '.(($active_section == 4)? "active":"").'">
                <i class="fal fa-car-side"></i>
                Livraison
                </a>
            </li>
            <hr>
            <li>
                <a href="/amazon.php" class="nav-link text-white">
                <i class="fab fa-amazon"></i>
                Catalogue
                </a>
            </li>
        </ul>
        <hr>
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>'.$_SESSION["user"].' - '.$_SESSION["name_group"].'
            <div style="margin-top: 10px;">
              <a class="btn btn-light btn-sm" href="/logout.php">
                <i class="bi bi-box-arrow-left me-1"></i>
                LogOut
              </a>
            </div>
        </div>
      </div>';
    return $rtn;
}


function Footer_HTML($IncludeFooter="") {
  $git = getGitVersion();

	$ret = '<!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">C.D.S &copy;2021 - <a target="_blank" href="https://github.com/xalsie/UTDarma/commits/main" class="fw-lighter text-decoration-none"><span class="number-version" style="font-size: small; color: darkgrey;">'.$git[0].'</span></a> - <span class="number-date fw-lighter" style="font-size: small; color: darkgrey;">'.$git[1].'</span></p></div>
    </footer>
  </body>
</html>';
	return $ret;
}

function getGitVersion() {
  $version = trim(exec('git log --pretty="%h" -n1 HEAD'));
  $commitDate = new \DateTime(trim(exec('git log -n1 --pretty=%ci HEAD')));
    $date = $commitDate->setTimezone(new \DateTimeZone('UTC'))->add(new DateInterval("PT2H"))->format('d-m H:i');
  
  return array($version, $date);
}