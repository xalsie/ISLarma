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
            $status = (db_escape($_POST["filter"]) == "3")? "%":db_escape($_POST["filter"]);

            //Chargement de la liste des logins
            $sql="SELECT os.*, dy.name, dy.description AS dy_description, dy.price FROM `orders` AS os INNER JOIN `delivery` AS dy WHERE os.statut LIKE '".$status."' AND os.livraison = dy.id ORDER BY os.date_create;";
                $aDatas=db_query($sql);

            $aRow=array();
            foreach ($aDatas as $row) {
                $aRow[]=array("id"=>$row["id"], "date_create"=>$row["date_create"], "date_modification"=>$row["date_modification"], "user"=>$row["user"],
                                "name_group"=>$row["name_group"], "darkchat"=>$row["darkchat"],"livraison_id"=>$row["livraison"],"livraison_name"=>$row["name"],"livraison_price"=>$row["price"],"statut"=>$row["statut"],
                                "user_modification"=>$row["user_modification"], "description"=>$row["description"]);
            }
            echo json_encode($aRow);
        break;
        case 'getOrderListArma':
            $data = $_POST["data"];

            $SQL = "SELECT id, name, description, stock, price FROM weapons WHERE id IN (".$data.") AND visible = 1;";
                $result = db_query($SQL);

            echo json_encode($result);
        break;
        case 'editOrder':
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $id = db_escape($_POST['id']);
            $value = db_escape($_POST["value"]);

            $sql = "UPDATE `orders` SET `statut` = '$value' WHERE `id` = '$id';";
                $result=db_execute($sql);

            echo 'OK';
        break;
        case "deleteOrder":
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $id = db_escape($_POST['id']);

            $sql = "DELETE FROM `orders` WHERE `id` = '$id';";
                $result=db_execute($sql);

            echo 'OK';
        break;
    }
    exit;
}

$logError = "";

$IncludeHeader = '<link href="/assets/css/sidebar.style.css" rel="stylesheet">';
$IncludeHeader .= '<link href="/assets/css/tabBackOffice.style.css" rel="stylesheet">';

$IncludeHeader .= '';

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
?>
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

        div.d-flex.flex-column {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
            border-width: 1px 0;
        }

        div.flex-column.p-5 {
            width: -webkit-fill-available;
        }
        .select,
        #locale {
            width: 100%;
        }
        .like {
            margin-right: 10px;
        }
        button.swal2-cancel.btn.btn-secondary, button.swal2-confirm.btn.btn-success, button.btn.btn-primary.btn-xs.btn-edit {
            margin-right: 10px;
        }
        tr.detail-view {
            white-space: pre-wrap;
        }
    </style>

    <body>
        <main ng-controller="appCommon">
            <?php echo side_bar_admin(2); ?>

            <div class="flex-column p-5">
                <h2>Gestionnaire Commandes</h2>
                <hr>

                <div id="toolbar">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="toolbar_inlineRadioOptions" id="toolbar_inlineRadio0" value="3" checked>
                        <label class="form-check-label" for="toolbar_inlineRadio0">Tous</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="toolbar_inlineRadioOptions" id="toolbar_inlineRadio1" value="1">
                        <label class="form-check-label" for="toolbar_inlineRadio1">Valider</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="toolbar_inlineRadioOptions" id="toolbar_inlineRadio2" value="2">
                        <label class="form-check-label" for="toolbar_inlineRadio2">Annuler</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="toolbar_inlineRadioOptions" id="toolbar_inlineRadio3" value="0">
                        <label class="form-check-label" for="toolbar_inlineRadio3">En attente</label>
                    </div>
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
                    data-url="./orders.php"
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
                            <th data-field="livraison_name" data-width="100" data-sortable="true" data-halign="center">Livraison</th>
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
                var total = 0;

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
                            _rtn += value.name +" x"+ _json[value.id] +" - "+ numberWithSpaces(_json[value.id]*value.price) + "\n"; // price + total
                            total += _json[value.id]*value.price;
                        });
                    }
                })

                _rtn += "Livraison : "+ row.livraison_name +" - "+ numberWithSpaces(row.livraison_price) +"\n    TOTAL : "+ numberWithSpaces(total+parseInt(row.livraison_price));
                return _rtn;
            }

            function numberWithSpaces(x) {
                return "$ "+parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

            function postQueryParams(params) {
                params.action = "getlist";
                params.filter = $("#toolbar [type='radio']:checked").val();
                return params;
            }

            $("#toolbar [type='radio']").change(() => {
                $('#table').bootstrapTable('refresh');
            });

            function actionFormatter(value, row, index) {
                return [
                    '<button class="btn btn-primary btn-xs btn-edit" title="Modifier"><span class="fas fa-edit"></span></button>',
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
                    // console.log("Remove : "+row["login"]);
                    console.log(row);
                    ShowDeleteOrder(row);
                    },'click .btn-edit': function (e, value, row, index) {
                    console.log("Edit : "+row["id"]);
                    ShowEditOrder(row);
                }
            };

            function ShowEditOrder(row) {
                list_groupe = '';

                Swal.fire({
                    title: "Modifier le statut",
                    html:	'<form class="needs-validation" novalidate>'+
                            '    <div class="form-check form-check-inline">'+
                            '        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" '+((row["statut"] == 1)? "checked":"")+'>'+
                            '        <label class="form-check-label" for="inlineRadio1">Valider</label>'+
                            '    </div>'+
                            '    <div class="form-check form-check-inline">'+
                            '        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" '+((row["statut"] == 2)? "checked":"")+'>'+
                            '        <label class="form-check-label" for="inlineRadio2">Annuler</label>'+
                            '    </div>'+
                            '    <div class="form-check form-check-inline">'+
                            '        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="0" '+((row["statut"] == 0)? "checked":"")+'>'+
                            '        <label class="form-check-label" for="inlineRadio3">En attente</label>'+
                            '    </div>'+
                            '    <hr class="mb-4">'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="date_create">Date de création du compte</label>'+
                            '           <input type="text" class="form-control" id="date_create" placeholder="" value="'+row["date_create"]+'" readonly>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="date_modification">Date de mise a jour</label>'+
                            '           <input type="text" class="form-control" id="date_modification" placeholder="" value="'+row["date_modification"]+'" readonly>'+
                            '       </div>'+
                            '    </div>'+
                            '    <hr class="mb-4">'+
                            '</form>',
                        width: '600px',
                        allowEscapeKey:true,
                        showCancelButton: true,
                        buttonsStyling:false,
                        confirmButtonText: "Enregistrer",
                        confirmButtonClass: "btn btn-success",
                        cancelButtonText: "Annuler",
                        cancelButtonClass: "btn btn-danger",
                        showLoaderOnConfirm: false,
                        preConfirm: function() {
                            return new Promise(function(resolve) {
                                var send=$.ajax({
                                    method: 'POST',
                                    url:'',
                                    data: {
                                        autofunc: true,
                                        action: 'editOrder',
                                        id: row["id"],
                                        value: $(".form-check-input:checked").val()
                                    }
                                }).done(function(html){
                                    if(html != 'OK') {
                                        Swal.showValidationMessage(html);
                                        swal.disableLoading();
                                    } else {
                                        swal.close();
                                        $('#table').bootstrapTable('refresh');
                                    }
                                }).fail(function(){
                                    Swal.fire('Erreur','Une erreur s\'est produite lors de l\'enregistrement du statut !','error');
                                });
                            });
                        },
                        allowOutsideClick: true 
                });
                $('#edit_name_group').focus();
            }

            function ShowDeleteOrder(row) {
                Swal.fire({
                    title: "Supprimer un utilisateur",
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
                                    id: row["id"],
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
    </body>
</html>