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
            $sql="SELECT * FROM `weapons` ORDER BY name";
                $aDatas=db_query($sql);

            $aRow=array();
            foreach ($aDatas as $row) {
                $aRow[]=array("id"=>$row["id"], "date_create"=>$row["date_create"], "date_modification"=>$row["date_modification"], "name"=>$row["name"],
                                "description"=>$row["description"], "image"=>$row["image"],"image"=>$row["image"],"price"=>$row["price"],
                                "price_prime"=>$row["price_prime"], "stock"=>$row["stock"], "visible"=>$row["visible"]);
            }
            echo json_encode($aRow);
        break;
        case 'additem':
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $edit_name = db_escape($_POST['name']);
            $edit_image = db_escape($_POST['image']);
            $edit_description = db_escape($_POST['description']);
            $edit_price = db_escape($_POST['price']);
            $edit_price_prime = db_escape($_POST['price_prime']);
            $edit_stock = db_escape($_POST['stock']);
            $edit_visible = ($_POST['visible'] == "true")? "1":"0";


            // id
            // date_create
            // date_modification
            // name
            // description
            // image
            // price
            // price_prime
            // stock
            // visible

            $sql="INSERT INTO `weapons` (`date_create`, `date_modification`, `name`, `description`, `image`, `price`, `price_prime`, `stock`, `visible`)
                VALUES (now(), now(), '$edit_name', '$edit_image', '$edit_description', '$edit_price', '$edit_price_prime', '$edit_stock', '$edit_visible');";
            $result=db_execute($sql);

            echo 'OK';
        break;
        case "deleteitem":
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $id = db_escape($_POST['id']);

            $sql = "DELETE FROM `weapons` WHERE `id` = '$id';";
                $result=db_execute($sql);

            echo 'OK';
        break;
        case 'edititem':
            if ($_SESSION["admin"] == '2') {
                echo "En tant que staff vous ne pouvez rien modifier.";
                exit;
            }

            $edit_id = db_escape($_POST['id']);
            $edit_name = db_escape($_POST['name']);
            $edit_image = db_escape($_POST['image']);
            $edit_description = db_escape($_POST['description']);
            $edit_price = db_escape($_POST['price']);
            $edit_price_prime = db_escape($_POST['price_prime']);
            $edit_stock = db_escape($_POST['stock']);
            $edit_visible = ($_POST['visible'] == "true")? "1":"0";

            $sql = "UPDATE `weapons` SET `date_modification` = now(), `name` = '$edit_name', `image` = '$edit_image', `description` = '$edit_description', `price` = '$edit_price', `price_prime` = '$edit_price_prime', `stock` = '$edit_stock', `visible` = '$edit_visible' WHERE `id` = '$edit_id';";
                $result=db_execute($sql);

            echo 'OK';
        break;
    }
    exit;
}

$logError = "";

$IncludeHeader = '<link href="/assets/css/sidebar.style.css" rel="stylesheet">';
$IncludeHeader .= '<link href="/assets/css/tabBackOffice.style.css" rel="stylesheet">';

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
?>
    <body>
        <main ng-controller="appCommon">
            <?php echo side_bar_admin(1); ?>

            <div class="flex-column p-5">
                <h2>Gestionnaire Armes</h2>
                <hr>

                <div id="toolbar">
                    <button id="btn-add" class="btn btn-secondary"><i class="fal fa-plus-square"></i> Ajouter une arme / item</button>
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
                    data-url="./guns_stock.php"
                    data-method="post"
                    data-query-params="postQueryParams"
                    data-content-type="application/x-www-form-urlencoded">
                    <thead>
                        <tr>
                            <!-- <th data-field="id" data-width="100" data-sortable="true" data-halign="center">id</th> -->
                            <th data-field="id" data-width="100" data-sortable="true" data-halign="center" data-visible="false">ID</th>
                            <th data-field="date_create" data-width="100" data-sortable="true" data-halign="center" data-visible="false">date Create</th>
                            <th data-field="date_modification" data-width="100" data-sortable="true" data-halign="center" data-visible="false">Date Modification</th>
                            <th data-field="name" data-width="100" data-sortable="true" data-halign="center">Nom</th>
                            <th data-field="description" data-width="100" data-sortable="true" data-halign="center">Description</th>
                            <th data-field="image" data-width="100" data-sortable="true" data-halign="center">Image</th>
                            <th data-field="price" data-width="100" data-sortable="true" data-halign="center" data-formatter="numberPrice">Prix</th>
                            <th data-field="price_prime" data-width="100" data-sortable="true" data-halign="center" data-formatter="numberPrice">Prix Prime</th>
                            <th data-field="stock" data-width="100" data-sortable="true" data-halign="center">Stock</th>
                            <th data-field="visible" data-width="100" data-sortable="true" data-halign="center" data-formatter="toCheckbox">Visible</th>


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
                if (value == "1") {
                    return "✔️";
                }
                return "❌";
            }

            window.actionEvents = {
                'click .btn-remove': function (e, value, row, index) {
                    ShowDeleteItem(row);
                },'click .btn-edit': function (e, value, row, index) {
                    ShowEditItem(row);
                }
            };

            function ShowDeleteItem(row) {
                Swal.fire({
                    title: "Supprimer un item",
                    html:	'Etes-vous sûr de vouloir supprimer l\'item "'+row["name"]+'" ?',
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
                                    action:'deleteitem',
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
                ShowAddItem();
            });

            $('#table').on('dbl-click-row.bs.table', function (e, row, element, field) {
                ShowEditItem(row);
            });

            function ShowAddItem() {
                list_groupe = '';

                Swal.fire({
                    title: "Ajouter un item",
                    html:	'<form class="needs-validation" novalidate>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_name">Nom :</label>'+
                            '           <input type="text" class="form-control" id="edit_name" placeholder="Pistolet" value="" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_image">Image :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_image" placeholder="pi_pistolet.png" value="" required>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <div class="mb-3">'+
                            '       <label for="edit_description">Description :</label>'+
                            '       <input type="text" class="form-control" id="edit_description" placeholder=".9mm" value="" required>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_price">Prix :</label>'+
                            '           <input type="text" class="form-control" id="edit_price" placeholder="50000" value="" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_price_prime">Prix en Prime :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_price_prime" placeholder="70000" value="" required>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_stock">Stock :</label>'+
                            '           <input type="text" class="form-control" id="edit_stock" placeholder="5" value="" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3 align-self-center">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" id="edit_visible">'+
                            '               <label class="form-check-label" for="edit_visible">Visible</label>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <hr class="mb-4">'+
                            '</form>',
                        width: '600px',
                    allowEscapeKey:true,
                    showCancelButton: true,
                    buttonsStyling:false,
                    confirmButtonText: "Ajouter l'item",
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
                                    action: 'additem',
                                    name: $("#edit_name").val(),
                                    image: $("#edit_image").val(),
                                    description: $("#edit_description").val(),
                                    price: $("#edit_price").val(),
                                    price_prime: $("#edit_price_prime").val(),
                                    stock: $("#edit_stock").val(),
                                    visible: $("#edit_visible").is(":checked")
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

            function ShowEditItem(row) {
                list_groupe = '';

                Swal.fire({
                    title: "Modifier un utilisateur",
                    html:	'<form class="needs-validation" novalidate>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_name">Nom :</label>'+
                            '           <input type="text" class="form-control" id="edit_name" placeholder="Pistolet" value="'+row["name"]+'" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_image">Image :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_image" placeholder="pi_pistolet.png" value="'+row["image"]+'" required>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <div class="mb-3">'+
                            '       <label for="edit_description">Description :</label>'+
                            '       <input type="text" class="form-control" id="edit_description" placeholder=".9mm" value="'+row["description"]+'" required>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_price">Prix :</label>'+
                            '           <input type="text" class="form-control" id="edit_price" placeholder="50000" value="'+row["price"]+'" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_price_prime">Prix en Prime :</label>'+
                            '             <div class="input-group">'+
                            '              <input type="text" class="form-control" id="edit_price_prime" placeholder="70000" value="'+row["price_prime"]+'" required>'+
                            '           </div>'+
                            '       </div>'+
                            '    </div>'+
                            '    <div class="row">'+
                            '       <div class="col-md-6 mb-3">'+
                            '           <label for="edit_stock">Stock :</label>'+
                            '           <input type="text" class="form-control" id="edit_stock" placeholder="5" value="'+row["stock"]+'" required>'+
                            '       </div>'+
                            '       <div class="col-md-6 mb-3 align-self-center">'+
                            '           <div class="form-check form-switch">'+
                            '               <input class="form-check-input" type="checkbox" '+((row["visible"] == 1)? "checked":"")+' id="edit_visible">'+
                            '               <label class="form-check-label" for="edit_visible">Visible</label>'+
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
                                        action: 'edititem',
                                        id: row["id"],
                                        name: $("#edit_name").val(),
                                        image: $("#edit_image").val(),
                                        description: $("#edit_description").val(),
                                        price: $("#edit_price").val(),
                                        price_prime: $("#edit_price_prime").val(),
                                        stock: $("#edit_stock").val(),
                                        visible: $("#edit_visible").is(":checked")
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