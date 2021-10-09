<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

if (!isConnected() && !$_SESSION["admin"]) {
    header("Location: /");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// print_r($_POST);
	switch ($_POST['action']){
		case "getlist":
            //Chargement de la liste des logins
            $sql = "SELECT * FROM `orders` WHERE `user` = '".$_SESSION["user"]."' AND `name_group` = '".$_SESSION["name_group"]."' ORDER BY date_create;";
                $aDatas=db_query($sql);

            $aRow=array();
            foreach ($aDatas as $row) {
                $aRow[]=array("id"=>$row["id"], "date_create"=>$row["date_create"], "date_modification"=>$row["date_modification"], "user"=>$row["user"],
                                "name_group"=>$row["name_group"], "darkchat"=>$row["darkchat"],"livraison"=>$row["livraison"],"statut"=>$row["statut"],
                                "user_modification"=>$row["user_modification"], "description"=>$row["description"]);
            }
            echo json_encode($aRow);
        break;
        case 'getOrderListArma':
            $data = $_POST["data"];

            $SQL = "SELECT id, name, description, stock FROM weapons WHERE id IN (".$data.") AND visible = 1;";
                $result = db_query($SQL);

            echo json_encode($result);
        break;
        case "deleteOrder":
            $id = db_escape($_POST['id']);

            $sql = "DELETE FROM `orders` WHERE `id` = '$id' AND `user` = '".$_SESSION["user"]."' AND `name_group` = '".$_SESSION["name_group"]."';";
                $result=db_execute($sql);

            echo 'OK';
        break;
    }
    exit;
}

$logError = "";

$IncludeHeader = '<link href="/assets/css/sidebar.style.css?v1.0" rel="stylesheet">';
$IncludeHeader .= '<link href="/assets/css/tabBackOffice.style.css?v1.0" rel="stylesheet">';

$IncludeHeader .= '<script src="/assets/js/app-angular.js?v1.0"></script>';

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
        tr.detail-view {
            white-space: pre-wrap;
        }
    </style>
    <body ng-controller="appCommon" ng-init="getFromUrl(); getBadgeCart();">
        <!-- Navigation-->
        <?php echo nav_bar_user() ?>

        <main>
            <div class="flex-column p-5">
                <h2>Gestionnaire Commandes</h2>
                <hr>

                <div id="toolbar">
                    <a class="btn btn-secondary" href="/amazon.php"><i class="fab fa-amazon me-1"></i>Retourner au catalogue</a>
                </div>
                <table class="table caption-top table-responsive table-striped table-hover"
                    id="table"
                    data-toolbar="#toolbar"
                    data-search="true"
                    data-show-refresh="true"
                    data-show-columns="true"
                    data-show-columns-toggle-all="true"
                    data-show-export="true"
                    data-minimum-count-columns="2"
                    data-show-pagination-switch="false"

                    data-detail-view="true"
                    data-detail-view-icon="false"
                    data-detail-view-by-click="true"
                    data-detail-formatter="detailFormatter"

                    data-pagination="true"
                    data-id-field="id"
                    data-page-list="[10, 25, 50, 100, all]"
                    data-side-pagination="server"
                    data-url="./orders_user.php"
                    data-method="post"
                    data-query-params="postQueryParams"
                    data-content-type="application/x-www-form-urlencoded">
                    <thead>
                        <tr>
                            <!-- <th data-field="id" data-width="100" data-sortable="true" data-halign="center">id</th> -->
                            <th data-field="id" data-width="100" data-sortable="true" data-halign="center" data-visible="false">ID</th>
                            <th data-field="date_create" data-width="100" data-sortable="true" data-halign="center" data-visible="false">date Create</th>
                            <th data-field="date_modification" data-width="100" data-sortable="true" data-halign="center" data-visible="false">Date Modification</th>
                            <th data-field="user" data-width="100" data-sortable="true" data-halign="center">User</th>
                            <th data-field="name_group" data-width="100" data-sortable="true" data-halign="center">Nom Groupe</th>
                            <th data-field="darkchat" data-width="100" data-sortable="true" data-halign="center">Dark Chat</th>
                            <th data-field="livraison" data-width="100" data-sortable="true" data-halign="center">Livraison</th>
                            <th data-field="statut" data-width="100" data-sortable="true" data-halign="center" data-formatter="toCheckbox">Statut</th>
                            <th data-field="user_modification" data-width="100" data-sortable="true" data-halign="center" data-visible="false">Prime</th>
                            <th data-field="description" data-width="100" data-sortable="true" data-halign="center" data-visible="false">description</th>

                            <th data-field="action" data-width="150" data-halign="center" data-align="center" data-formatter="actionFormatter" data-events="actionEvents">Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </main>

        <script>
            function initTable() {
                var $table = $('#table');

                $table.bootstrapTable('destroy').bootstrapTable({
                    height: 550,
                    locale: "fr-FR"
                })
            }

            function detailFormatter(value, row, index) {
                var _json = JSON.parse(row.description);
                var _rtn = "";
                var str = [];

                $.each(_json, function( key, value ) {
                    str.push(key);
                });

                var send=$.ajax({
                    async: false,
                    method: 'POST',
                    dataType: 'JSON',
                    url:'',
                    data: {
                        autofunc:true,
                        action:'getOrderListArma',
                        data: str.join(", ")
                    },
                    success: function (html) {
                        $.each(html, function( key, value ) {
                            _rtn += value.name +" x"+ _json[value.id] +"\n";
                        });
                    }
                })

                return _rtn;
            }

            function postQueryParams(params) {
                params.action = "getlist";
                return params;
            }

            function actionFormatter(value, row, index) {
                return [
                    '<button class="btn btn-danger btn-xs btn-remove" title="Supprimer"><span class="fas fa-trash"></span></button>'
                ].join('');
            }

            function toCheckbox(value, row, index) {
                if (value == "1") {
                    return '<i class="far fa-check me-1" style="color:green"></i>Accepter';
                } else if (value == "2"){
                    return '<i class="far fa-ban me-1" style="color:Tomato"></i>Annulé';
                }
                return '<i class="fal fa-spinner-third fa-spin me-1"></i>En attente';
            }

            window.actionEvents = {
                'click .btn-remove': function (e, value, row, index) {
                    console.log(row);
                    ShowDeleteOrder(row);
                }
            };

            function ShowDeleteOrder(row) {
                Swal.fire({
                    title: "Supprimer une commande",
                    html:	'Etes-vous sûr de vouloir supprimer la commande "'+row["darkchat"]+'" ?',
                    width: '600px',
                    allowEscapeKey:true,
                    showCancelButton: true,
                    buttonsStyling:false,
                    confirmButtonText: "Oui, je veux le supprimer",
                    confirmButtonClass: "btn btn-warning",
                    cancelButtonText: "Non",
                    cancelButtonClass: "btn btn-secondary",
                    showLoaderOnConfirm: false,
                    reverseButtons: true,
                    focusCancel:true,
                    preConfirm: function() {
                        return new Promise(function(resolve) {
                            var send=$.ajax({
                                method: 'POST',
                                url:'',
                                data: {
                                    autofunc:true,
                                    action:'deleteOrder',
                                    id: row["id"]
                                }
                            }).done(function(html){
                                if(html != 'OK') {
                                    Swal.showValidationMessage(html);
                                    Swal.disableLoading();
                                } else {
                                    Swal.close();
                                    $('#table').bootstrapTable('refresh');
                                }
                            }).fail(function(){
                                Swal.fire('Erreur','Une erreur s\'est produite lors de la suppression de la commande !','error');
                            });
                        });
                    },
                    allowOutsideClick: true
                });
            }

            $(() => {
                initTable();
            })
        </script>

<?php
  echo Footer_HTML();
?>
