<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

$logError = "";

if (isConnected()) {
    header("Location: /amazon.php");
}

//est ce que j'ai un email un mot de passe dans $_POST
if(isset($_POST['floatingCode0']) && isset($_POST['floatingCode1']) && isset($_POST['floatingCode2']) && isset($_POST['floatingCode3']) && isset($_POST['floatingCode4'])) {
    $code = $_POST["floatingCode0"].$_POST["floatingCode1"].$_POST["floatingCode2"].$_POST["floatingCode3"].$_POST["floatingCode4"];

    $SQL = "SELECT `id`, `user`, `code`, `admin`, `name_group` FROM `users` WHERE code = '".strtolower($code)."';";
        $result = db_query($SQL);

    if (!empty($result)) {

        login($result[0]);

        if ($result[0]["admin"]) {
            header("Location: /administration/guns_stock.php");
        } else {
            header("Location: ../amazon.php");
        }
    } else {
        $logError = "<div class='alert alert-danger'>Identifiants incorrects</div>";
    }
}

$IncludeHeader = '<link href="/assets/css/login.style.css" rel="stylesheet">';

echo Header_HTML("UTDarma - United RP", $IncludeHeader);
?>
    <style>
        .form-floating>.form-control:focus, .form-floating>.form-control:not(:placeholder-shown) {
            padding-top: 0;
            padding-bottom: 0;
            
        }
        .form-floating>.form-control {
            padding: .75rem;
            text-align: center;
            font-size: x-large;
            text-transform: uppercase;
            margin: 0 2px;
        }
        div.form-floating {
            display: flex;
            margin-bottom: 10px;
        }
        .rounded-6 {
            border-radius: 1rem;
        }
        .form-control:focus {
            border-color: #F1AE3A;
            box-shadow: 0 0 0 0.25rem rgb(241 174 58 / 40%);
            z-index: 1;
        }

        .banner{position:fixed;bottom:0;z-index:2147483645;box-sizing:border-box;min-width:275px;max-width:375px;margin:10px 10px;padding:2px 20px;border-radius:20px;-webkit-box-shadow:10px 10px 36px -13px rgba(0,0,0,.15);-moz-box-shadow:10px 10px 36px -13px rgba(0,0,0,.15);box-shadow:10px 10px 36px -13px rgba(0,0,0,.15)}.banner-left{left:0}.banner-right{right:0}.border{border:1px;border-style:solid;border-width:1px;border-color:#e9e9e9}.cookie-consent-banner__inner{padding:15px 0}.cookie-consent-banner__copy{margin-bottom:20px}.cookie-consent-banner__description{font-weight:400;font-size:.9em}.cookie-consent-btn{display:inline-block;width:64%;padding:11px 13px;border-radius:10px;border:none;font-size:.8em;text-decoration:none;text-align:center;font-weight:400;transition:.4s}.cookie-consent-btn:hover{text-decoration:none;opacity:.9}.cookie-consent-btn-secondary{display:inline-block;padding:11px 13px;width:33%;border-radius:10px;border:none;font-size:.8em;margin-left:.2em;text-decoration:none;text-align:center;font-weight:400;transition:.3s}.cookie-consent-btn-secondary:hover{text-decoration:none;opacity:.9}.prebanner{position:fixed;bottom:0;z-index:2147483645;height:50px;font-size:.9em;margin:10px 10px;border:none;padding:12px 18px;border-radius:20px;text-decoration:none;-webkit-box-shadow:10px 10px 36px -13px rgba(0,0,0,.15);-moz-box-shadow:10px 10px 36px -13px rgba(0,0,0,.15);box-shadow:10px 10px 36px -13px rgba(0,0,0,.15);}.prebanner-left{left:0}.prebanner-right{right:0}.prebanner:hover{text-decoration:none}.link-btn{text-decoration:underline}.link-btn:hover{text-decoration:underline}
    </style>

    <body>
        <main class="bg-light form-signin rounded-6 shadow-lg text-center">
            <form method="POST" action="">
                <img class="mb-4" src="/assets/image/logo_dark.png" alt="" height="45">

                <?php echo $logError;?>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingCode" required="required" autofocus="autofocus" name="floatingCode0" maxlength="1" size="1">
                    <input type="text" class="form-control" id="floatingCode" required="required" name="floatingCode1" maxlength="1" size="1">
                    <input type="text" class="form-control" id="floatingCode" required="required" name="floatingCode2" maxlength="1" size="1">
                    <input type="text" class="form-control" id="floatingCode" required="required" name="floatingCode3" maxlength="1" size="1">
                    <input type="text" class="form-control" id="floatingCode" required="required" name="floatingCode4" maxlength="1" size="1">
                </div>

                <!-- <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="1" name="rememberMe me-1">se souvenir de 
                    </label>
                </div> -->
                <input class="w-100 btn btn-lg btn-primary" type="submit" value="Se connecter">
                <p class="mt-5 mb-3 text-muted">C.D.S &copy;2021 - <a target="_blank" href="https://github.com/xalsie/UTDarma/commits/main" class="fw-lighter text-decoration-none"><span class="number-version" style="font-size: small; color: darkgrey;"><?php echo getGitVersion()[0];?></span></a> - <span class="number-date fw-lighter" style="font-size: small; color: darkgrey;"><?php echo getGitVersion()[1];?></span></p>
            </form>

            <div style="display: block;">
                <button type="button" id="prebanner" onclick="abrirSelector()" class="prebanner prebanner-right border" style="color: #24273F; background-color: #fff;">
                    <i class="far fa-cookie-bite" style="margin-top: 0.15em; vertical-align: text-top;"></i>
                </button>
            </div>
            <div style="display: none;">
                <div class="banner banner-right border" style="background-color: #fff;">
                    <div class="cookie-consent-banner__inner">
                    <div class="cookie-consent-banner__copy">
                        <div class="cookie-consent-banner__description" style="color: #505050; text-align: center;">
                        Ce site est protégé par des personnes à qui vous ne voulez aucun problème.
                        Si votre commande n'est pas payé dans les temps ou que vous essayez de doubler le fournisseur, il y aura des représailles.
                        En continuant votre navigation vous approuvez les Pepito.
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" id="aceptarCookies" onclick="acceptCookies()" class="cookie-consent-btn" style="background-color: #24273F; color: #fff;">
                            <i class="far fa-cookie-bite" style="margin-right: 0.25em; margin-top: 0.15em; vertical-align: text-top;"></i>
                            Accepter
                        </button>
                        <button type="button" id="rechazarCookies" onclick="rejectCookies()" class="cookie-consent-btn-secondary" style="background-color: #E8E8E8; color: #636363;">
                            Rejeter
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </main>

        <script>
            $("input.form-control").keyup(function() {
                const regex = /[a-z0-9]/ig;

                if (regex.exec(this.value) !== null) {

                    if (this.value.length == 1) {
                        $(this).next().select();
                    }
                    else if (this.value.length > 1) {
                        $(this).val(this.value[this.value.length-1]);
                    }
                    
                } else if (event.which == 8) {
                    $(this).prev().select();
                } else if (regex.exec(this.value) == null && this.value.length >= 1) {
                    $(this).val("").select();
                }
            })

            $("#prebanner").click(() => {
                $("#prebanner").parent().hide();
                $(".banner.banner-right.border").parent().show();
            })
            function acceptCookies() {
                $("#prebanner").parent().show();
                $(".banner.banner-right.border").parent().hide();
            }
            function rejectCookies() {
                $("#prebanner").parent().show();
                $(".banner.banner-right.border").parent().hide();
            }

        </script>
    </body>
</html>
