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
    switch ($_POST["action"]) {
        case "getlist":
            //Chargement de la liste des logins
            $sql="SELECT * FROM `delivery` ORDER BY name";
            $aDatas=db_query($sql);

            // echo $sql;

            $aRow=array();
            foreach ($aDatas as $row) {
                $aRow[]=array("id"=>$row["id"], "date_create"=>$row["date_create"], "date_modification"=>$row["date_modification"], "name"=>$row["name"],
                                "description"=>$row["description"], "price"=>$row["price"]);
            }
            echo json_encode($aRow);
        break;
        case 'adddelivery':
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $edit_name_group = db_escape($_POST['name_group']);
            $edit_user = db_escape($_POST['user']);
            $edit_code = db_escape($_POST['code']);
            $edit_admin = ($_POST['admin'] == "true")? "1":"0";
            $edit_prime = ($_POST['prime'] == "true")? "1":"0";

            $sql="INSERT INTO `users` (`date_create`, `date_modification`, `name_group`, `user`, `code`, `admin`, `prime`)
                VALUES (now(), now(), '$edit_name_group', '$edit_user', '$edit_code', '$edit_admin', '$edit_prime');";
            $result=db_execute($sql);

            echo 'OK';
        break;
        case "deletedelivery":
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $id = db_escape($_POST['id']);

            $sql = "DELETE FROM `users` WHERE `id` = '$id';";
                $result=db_execute($sql);

            echo 'OK';
        break;
        case 'editdelivery':
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $edit_id = db_escape($_POST["id"]);
            $edit_name_group = db_escape($_POST['name_group']);
            $edit_user = db_escape($_POST['user']);
            $edit_code = db_escape($_POST['code']);
            $edit_admin = ($_POST['admin'] == "true")? "1":"0";
            $edit_prime = ($_POST['prime'] == "true")? "1":"0";

            $sql = "UPDATE `users` SET `date_modification` = now(), `name_group` = '$edit_name_group', `user` = '$edit_user', `code` = '$edit_code', `admin` = '$edit_admin', `prime` = '$edit_prime' WHERE `id` = '$edit_id';";
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
    <body>
        <main ng-controller="appCommon">
            <?php echo side_bar_admin(4); ?>
            
            <div class="flex-column p-5">
                <h2>Gestionnaire de mode de livraison</h2>
                <hr>

                <div id="toolbar">
                    <button id="btn-add" class="btn btn-secondary"><i class="fal fa-plus-square"></i> Ajouter un mode de livraison</button>
                </div>
                <table class="table caption-top table-responsive table-striped table-hover"
                    id="table"
                    data-toolbar="#toolbar"
                    data-search="true"
                    data-show-refresh="true"
                    data-show-columns="true"
                    data-show-columns-toggle-all="true"
                    data-show-export="true"
                    data-detail-formatter="detailFormatter"
                    data-minimum-count-columns="2"
                    data-show-pagination-switch="true"
                    data-pagination="true"
                    data-id-field="id"

                    data-page-list="[10, 25, 50, 100, all]"
                    data-side-pagination="server"
                    data-url="./gestion_delivery.php"
                    data-method="post"
                    data-query-params="postQueryParams"
                    data-content-type="application/x-www-form-urlencoded">
                    <thead>
                        <tr>
                            <!-- <th data-field="id" data-width="100" data-sortable="true" data-halign="center">id</th> -->
                            <th data-field="id" data-width="100" data-sortable="true" data-halign="center" data-visible="false">ID</th>
                            <th data-field="date_create" data-width="100" data-sortable="true" data-halign="center" data-visible="false">date Create</th>
                            <th data-field="date_modification" data-width="100" data-sortable="true" data-halign="center" data-visible="false">Date Modification</th>
                            <th data-field="name" data-width="100" data-sortable="true" data-halign="center">Name</th>
                            <th data-field="description" data-width="100" data-sortable="true" data-halign="center">Description</th>
                            <th data-field="price" data-width="100" data-sortable="true" data-halign="center" data-formatter="numberPrice">Prix</th>

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

            function postQueryParams(params) {
                params.action = "getlist";
                return params;
            }

            function actionFormatter(value, row, index) {
                return [
                    '<button class="btn btn-primary btn-xs btn-edit" title="Modifier"><span class="fas fa-edit"></span></button>',
                    '<button class="btn btn-danger btn-xs btn-remove" title="Supprimer"><span class="fas fa-trash"></span></button>'
                ].join('');
            }

            function numberPrice(value, rox, index) {
                return "$ "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

            function toCheckbox(value, row, index) {
                if (value == "1")
                    return "✔️";
                else if (value == "2") 
                    return "⚠";
                return "❌";
            }

            window.actionEvents = {
                    'click .btn-remove': function (e, value, row, index) {
                    // console.log("Remove : "+row["login"]);
                    console.log(row);
                    ShowDeleteDelivery(row);
                    },'click .btn-edit': function (e, value, row, index) {
                    console.log("Edit : "+row["id"]);
                    ShowEditDelivery(row);
                }
            };

            function ShowDeleteDelivery(row) {
                Swal.fire({
                    title: "Supprimer un mode de livraison",
                    html:	'Etes-vous sûr de vouloir supprimer ce mode de livraison "'+row["user"]+' - '+row["name_group"]+'" ?',
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
                                    action:'deleteuser',
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
                                Swal.fire('Erreur','Une erreur s\'est produite lors de la suppression du collaborateur !','error');
                            });
                        });
                    },
                    allowOutsideClick: true
                });
            }

            $("#btn-add").click(function () {
                ShowAddDelivery();
            });

            $('#table').on('dbl-click-row.bs.table', function (e, row, element, field) {
                ShowEditDelivery(row);
            });

            function ShowAddDelivery() {
                list_groupe = '';

                Swal.fire({
                    title: "Ajouter un mode de livraison",
                    html:	'<form class="needs-validation" novalidate>'+
                            '    <div class="mb-3">'+
                            '       <label for="edit_name_group">Name Of Groupe :</label>'+
                            '       <input type="text" class="form-control" id="edit_name_group" placeholder="Name Of Groupe" value="" required>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_user">User :</label>'+
                            '           <input type="text" class="form-control" id="edit_user" placeholder="" value="" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_code">Code :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_code" placeholder="" value="'+pwdAleatoir()+'" required>'+
                            '              <button class="btn btn-outline-secondary" type="button" onclick="updateCode()" id="button-addon2">Generate</button>'+
                            '           </div>'+
                            '       </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" id="edit_check_admin">'+
                            '               <label class="form-check-label" for="edit_check_admin">Admin</label>'+
                            '           </div>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" id="edit_check_prime">'+
                            '               <label class="form-check-label" for="edit_check_prime">Prime</label>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <hr class="mb-4">'+
                            '</form>',
                        width: '600px',
                    allowEscapeKey:true,
                    showCancelButton: true,
                    buttonsStyling:false,
                    confirmButtonText: "Ajouter l'utilisateur",
                    confirmButtonClass: "btn btn-success",
                    cancelButtonText: "Annuler",
                    cancelButtonClass: "btn btn-default",
                    showLoaderOnConfirm: false,
                    preConfirm: function() {
                        return new Promise(function(resolve) {
                            var send=$.ajax({
                                method: 'POST',
                                url:'',
                                data: {
                                    autofunc: true,
                                    action: 'adduser',
                                    name_group: $("#edit_name_group").val(),
                                    user: $("#edit_user").val(),
                                    code: $("#edit_code").val(),
                                    admin: $("#edit_check_admin").is(":checked"),
                                    prime: $("#edit_check_prime").is(":checked")
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
                                Swal.fire('Erreur','Une erreur s\'est produite lors de l\'enregistrement du collaborateur !','error');
                            });
                        });
                    },
                    allowOutsideClick: true 
                });
                $('#edit_name_group').focus();
            }

            function ShowEditDelivery(row) {
                list_groupe = '';

                Swal.fire({
                    title: "Modifier une livraison",
                    html:	'<form class="needs-validation" novalidate>'+
                            '    <div class="mb-3">'+
                            '       <label for="edit_name_group">Name Of Groupe :</label>'+
                            '       <input type="text" class="form-control" id="edit_name_group" placeholder="Name Of Groupe" value="'+row["name_group"]+'" required>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_user">User :</label>'+
                            '           <input type="text" class="form-control" id="edit_user" placeholder="" value="'+row["user"]+'" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_code">Code :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_code" placeholder="" value="'+row["code"]+'" required>'+
                            '              <button class="btn btn-outline-secondary" type="button"onclick="updateCode()"  id="button-addon2">Generate</button>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" '+((row["admin"] == 1)? "checked":"")+' id="edit_check_admin">'+
                            '               <label class="form-check-label" for="edit_check_admin">Admin</label>'+
                            '           </div>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" '+((row["prime"] == 1)? "checked":"")+' id="edit_check_prime">'+
                            '               <label class="form-check-label" for="edit_check_prime">Prime</label>'+
                            '           </div>'+
                            '       </div>'+
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
                                        action: 'edituser',
                                        id: row["id"],
                                        name_group: $("#edit_name_group").val(),
                                        user: $("#edit_user").val(),
                                        code: $("#edit_code").val(),
                                        admin: $("#edit_check_admin").is(":checked"),
                                        prime: $("#edit_check_prime").is(":checked")
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
                                    Swal.fire('Erreur','Une erreur s\'est produite lors de l\'enregistrement du collaborateur !','error');
                                });
                            });
                        },
                        allowOutsideClick: true 
                });
                $('#edit_name_group').focus();
            }

            $(() => {
                initTable();
            })
        </script>
    </body>
</html>