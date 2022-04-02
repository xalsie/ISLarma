<?php
	//àéè
	defined('v1Secureisl') or header('Location: /'); 

	function login($user) {
		$token = createToken();
		$_SESSION["token"] = $token;
		$_SESSION["id"] = $user["id"];
		$_SESSION["user"] = $user["user"];
		$_SESSION["admin"] = $user["admin"];
		$_SESSION["name_group"] = $user["name_group"];
		if (!isset($_SESSION["panier"])) {$_SESSION["panier"] = [];}

		$SQL = "UPDATE users SET 
				token= '".$token."'  
				WHERE id=".$user["id"]." 
				AND user='".$user["user"]."'";
		$result = db_execute($SQL);
			if(!empty($result)) $_SESSION["auth"] = true;
	}
	
	function createToken() {
		$token = md5(uniqid()."jq2à,?".time());
		$token = substr($token, 0, rand(10,20));
		$token = str_shuffle($token);
		return $token;
	}
	
	function isConnected() {
		//Est ce que les sessions existent
		if( !empty($_SESSION["token"]) 
			&& !empty($_SESSION["user"]) 
			&& !empty($_SESSION["id"]) ){
			//-> si oui
			//comparaison des variables de session avec la bdd
			$SQL = "SELECT id, admin, name_group FROM users WHERE token='".$_SESSION["token"]."' AND id=".$_SESSION["id"]." AND user='".$_SESSION["user"]."';";
				$result = db_query($SQL);
	
			if(!empty($result[0])) {
				//-> si oui
				//Nouveau token
				$user = ["id"=>$_SESSION["id"], "user"=>$_SESSION["user"], "admin"=>$_SESSION["admin"], "name_group"=>$_SESSION["name_group"]];
				login($user);
				return true;
			}
		}
		return false;
	}