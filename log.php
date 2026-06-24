<?php 
if(!session_id()){
	session_start();
}
// echo $_SERVER['REMOTE_ADDR'];
 $loguser = "";
  function setloguser($userName){
		$loguser = $userName;
  }

 function logfiles($qry){


	$remote_ip = $_SERVER['REMOTE_ADDR'];
	// echo $remote_ip;
	$logFile = fopen("logfile.txt", "a") or die("Unable to open file!");
	$date_time = ";Date " . date("Y/m/d") . ";Time " . date("h:i:sa") . ";";
	// echo $date_time;
	$d_log = PHP_EOL . ";" . $qry . "ip " . $remote_ip . $date_time;
	// $u = $_COOKIE['user'];
	// echo $u;
	fwrite($logFile, PHP_EOL . $d_log . "username " . $_SESSION['userIdLog']);
	fclose($logFile);

}

?>