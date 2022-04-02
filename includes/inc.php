<?php
	//àéè
	// A inclure dans les fichiers php :
	// 	defined('v1SecureForeCaster') or header('Location: /');
	//  include_once("/var/www/html/SiteChrono/includes/inc.php");

	define('v1Secureisl',"WEB");
	
	if (empty(@$_SERVER["DOCUMENT_ROOT"]) || @$_SERVER["DOCUMENT_ROOT"] == "C:/wamp64/www") {
		$path = "C:/wamp64/www/amazonArma";
	} else {
		$path = $_SERVER["DOCUMENT_ROOT"];
	}

	// include_once($path."/db_connect/Connect.php");
	include_once($_SERVER["DOCUMENT_ROOT"]."/includes/config.inc.php");
	$aConfig['db_host']=$dbhost;
	$aConfig['db_user']=$dbuser;
	$aConfig['db_password']=$dbpassword;
	$aConfig['db_name']=$database;

	session_start();
	
	include_once("db.inc.php");
	include_once("functions.inc.php");
	
	include_once("header.inc.php");

	//Verification du niveau et modif si besoin
	// $result = db_query("SELECT Niv FROM login WHERE Ident='".$ident."'");
	// $_SESSION["niv"]=$result[0]["Niv"];
	// $niv=$result[0]["Niv"];
?>