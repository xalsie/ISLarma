<?php
if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
    $path = "C:/wamp64/www/amazonArma";
} else {
    $path = $_SERVER["DOCUMENT_ROOT"];
}
include_once($path."/includes/inc.php");

$sql = "SELECT `id`, `game_success` FROM `games` WHERE `id` = '2';";
    $result = db_query($sql);

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
    <head>
        <title>Index of /console</title>
    </head>
    <body>
        <h1>Index of /console test</h1>
        <table>
            <tr><th valign="top"><img src="./icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
            <tr><th colspan="5"><hr></th></tr>
            <tr><td valign="top"><img src="./icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/">Parent Directory</a>       </td><td>&nbsp;</td><td align="right">  - </td><td>&nbsp;</td></tr>
            <?php if ($result[0]['game_success']) {?><tr><td valign="top"><img src="/icons/unknown.gif" alt="[   ]"></td><td><a href=<?php echo str_shuffle(substr("0123456789", 0, rand(7,12)))."@terminal";?>">Console</a>            </td><td align="right">2021-10-13 14:37  </td><td align="right"> 13K</td><td>&nbsp;</td></tr><?php }?>
            <tr><td valign="top"><img src="/icons/unknown.gif" alt="[   ]"></td><td><a href=<?php echo str_shuffle(substr("0123456789", 0, rand(7,12)))."@firewall";?>>Bypass Firewall</a>           </td><td align="right">2021-10-18 12:11  </td><td align="right">4.2K</td><td>&nbsp;</td></tr>
            <tr><td valign="top"><img src="./icons/unknown.gif" alt="[   ]"></td><td><a href="private.key">private.key</a>            </td><td align="right">2021-10-08 12:50  </td><td align="right">1.7K</td><td>&nbsp;</td></tr>
            <tr><th colspan="5"><hr></th></tr>
        </table>
        <address>Apache/2.4.39 (Win64) PHP/7.4.0 Server at localhost Port 85</address>
    </body>
</html>