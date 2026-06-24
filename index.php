<?php
if (!isset($_session["user"])) {
	session_start();
	$_session["user"] = "gamini";
	//$_POST ["indexCount"]='ok';
	$indexCount = ' ';
} else {
}

?>
<script type="text/javascript">
	var JSVersion = "?v3";
	indexCount1 = "<?php echo $indexCount; ?>";
	var getUrl = window.location;
	var baseUrl = "https://sysfgs.kln.ac.lk/";
	var host = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + "/";

	function onetime() {

		if (indexCount1 != 'ok') {
			//if(indexCount2!= 1){

			if (navigator.userAgent.indexOf("Firefox") != -1) {

				// window.location.href ="https://sis.kln.ac.lk/FGSeApplication/";
				window.onbeforeunload = function() {

					return "Leaving this page will reset the wizard";
				};
			} else {

				//$POST["indexCount"] =1;
				//var indexCount2=1;
				// window.onbeforeunload = function() {

				// 	return "Leaving this page will reset the wizard";
				// };
			}
		}
	}

	var popupWindow = null;

	function parent_disable() {
		if (popupWindow && !popupWindow.closed) {
			popupWindow.focus();
		}
	}

	var hostname = window.location.protocol + '//' + window.location.hostname + '' + window.location.pathname;
	let docLocation = hostname.replace("staff/", "");
</script>

<style>
	.note-editor {
		width: 100%;
	}

	.nav-pointer {
		font-size: 20px;
		cursor: pointer;
	}

	.nav-pointer .nav-link {
		padding-left: 0;
	}

	.programeLable {
		width: fit-content !important;
		margin: auto !important;
		padding: 10px !important;
	}

	.programeInput {
		width: 80% !important;
		display: inline-block !important;
	}

	.yearLable {
		width: fit-content !important;
		margin: auto !important;
		padding: 10px !important;
	}

	.yearInput {
		width: auto !important;
		display: inline-block !important;
	}

	.docLable {
		width: fit-content !important;
		margin: auto !important;
		padding: 10px !important;
	}

	.docInput {
		width: 50% !important;
		display: inline-block !important;
	}

	.table-bordered>thead>tr>th,
	.table-bordered>thead>tr>td,
	.table-bordered>tbody>tr>th,
	.table-bordered>tbody>tr>td {
		padding: 0.5rem 0.5rem;
		vertical-align: middle;
		border: 1px solid #ddd !important;
	}

	@media (max-width: 1620px) {
		.programeLable {
			width: fit-content !important;
			margin: auto !important;
			padding: 10px !important;
		}

		.programeInput {
			width: 100% !important;
			display: block !important;
		}

		.yearLable {
			width: fit-content !important;
			margin: auto !important;
			padding: 10px !important;
		}

		.yearInput {
			width: auto !important;
			display: block !important;
		}

		.docLable {
			width: fit-content !important;
			margin: auto !important;
			padding: 10px !important;
		}

		.docInput {
			width: auto !important;
			display: block !important;
		}
	}

	.cardorg {
		background-color: #9A0A0A !important;
	}

	.cardorg .card-body .fa {
		font-size: 2.5rem;
		color: #fff;

	}

	.cardorg .card-body .card-title {
		font-size: 1.5rem;
		color: #fff;
		font-weight: bold;
	}

	/* file upload button */
	.swal-wide {
		width: 80% !important;
	}

	#ni_choose input[type="file"]::file-selector-button {
		border-radius: 4px;
		padding: 0 16px;
		height: 35px;
		cursor: pointer;
		background-color: white;
		border: 1px solid rgba(0, 0, 0, 0.16);
		box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
		margin-right: 16px;
		transition: background-color 200ms;
	}

	/* file upload button hover state */
	#ni_choose input[type="file"]::file-selector-button:hover {
		background-color: #f3f4f6;
	}

	/* file upload button active state */
	#ni_choose input[type="file"]::file-selector-button:active {
		background-color: #e5e7eb;
	}

	#loading-spinner {
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000;
	}

	#loading-spinner img {
		width: 100%;
		/* height: 200px; */
	}

	.richText-toolbar ul li a {
		color: #000;
	}

	.msgSHow table {
		border-collapse: collapse;
		width: 100%;
	}

	.msgSHow table td,
	.msgSHow table th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	.msgSHow table th {
		background-color: #f2f2f2;
	}

	.swal2-actions {
		display: flex;
		z-index: 0 !important;
		box-sizing: border-box;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 1.25em auto 0;
		padding: 0;
	}
</style>
<style>
	/*Copied from bootstrap to handle input file multiple*/
	.btn-imageUpload {
		display: inline-block;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: normal;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
	}

	/*Also */
	.btn-success-imageUpload {
		border: 1px solid #c5dbec;
		background: #d0e5f5;
		font-weight: bold;
		color: #2e6e9e;
	}

	/* This is copied from https://github.com/blueimp/jQuery-File-Upload/blob/master/css/jquery.fileupload.css */
	.fileinput-button {
		position: relative;
		overflow: hidden;
	}

	.fileinput-button input {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0;
		opacity: 0;
		-ms-filter: "alpha(opacity=0)";
		font-size: 200px;
		direction: ltr;
		cursor: pointer;
	}

	.thumb-imageUpload {
		width: 100px;
		height: 100px;
		border: 1px solid #ccc;
		padding: 10px;
	}

	ul.thumb-Images li {
		width: 120px;
		float: left;
		display: inline-block;
		vertical-align: top;
		margin: 10px;
		height: 120px;
	}

	.img-wrap {
		position: relative;
		display: inline-block;
		font-size: 0;
	}

	.img-wrap .close {
		position: absolute;
		top: 2px;
		right: 2px;
		z-index: 100;
		background-color: #d0e5f5;
		padding: 5px 2px 2px;
		color: #000;
		font-weight: bolder;
		cursor: pointer;
		opacity: 0.5;
		font-size: 23px;
		line-height: 10px;
		border-radius: 50%;
	}

	.img-wrap:hover .close {
		opacity: 1;
		background-color: #ff4747;
	}

	.FileNameCaptionStyle {
		font-size: 12px;
	}
</style>
<html>

<head>
	<title>FGSMIS - Staff Portal</title>
	<meta name="robots" content="noindex">

	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
	<!-- <script src="https://unpkg.com/html-docx-js/dist/html-docx.js"></script> -->
	<script type="text/javascript" src="js/docx.js"></script>
	<script type="text/javascript" src="js/html-docx.js"></script>
	<script src="https://unpkg.com/docx@7.1.0/build/index.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js" integrity="sha512-r22gChDnGvBylk90+2e/ycr3RVrDi8DIOkIGNhJlKfuyQM4tIRAI062MaV8sfjQKYVGjOBaZBOA87z+IhZE9DA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
	<link rel="stylesheet" href="vendors/typicons/typicons.css">
	<link rel="stylesheet" href="main.css">
	<link rel="stylesheet" href="vendors/css/vendor.bundle.base.css">
	<link rel="stylesheet" href="css/vertical-layout-light/style.css">
	<link rel="stylesheet" href="vendors/mdi/css/materialdesignicons.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap4.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="richtextbox/richtext.min.css">
	<link href="summernote/summernote-bs4.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/FilePond.css">

	<!-- <link href="https://unpkg.com/filepond@^4/dist/filepond.css" rel="stylesheet" /> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
	<link rel="stylesheet" href="richtextbox/rte_theme_default.css" />
	<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />


	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<script>
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", "clientController.js" + JSVersion);
		document.getElementsByTagName("head")[0].appendChild(fileref)
	</script>
	<style type="text/css">
		.warptable td {
			word-wrap: break-word;
			border: 1px solid #ccc;
			padding: 8px;
		}

		.no-overflow {
			overflow: hidden;
		}

		.setdtwidth .dt-buttons {
			width: 99%;
		}

		.sidebar .nav .nav-item .nav-link .menu-title {
			color: #fff !important;
			font-weight: bolder;
			display: inline-block;
			font-size: 1.3rem !important;
			line-height: 1;
			vertical-align: middle;
		}

		.sidebar {
			width: 450px;
		}

		.sidebar .nav .nav-item .nav-link i.menu-arrow:before {
			font-size: 1.4rem;
		}

		.sidebar .nav.sub-menu .nav-item .nav-link {

			font-size: 1.2rem;
		}

		.navbar .navbar-brand-wrapper {
			width: calc(450px + 0.5rem);
		}

		.navbar .navbar-menu-wrapper {

			width: calc(100% - 450px - 0.5rem);
		}

		.form-group .label-r {
			font-size: 1.2rem;
		}

		.form-control,
		.select2-container--default .select2-selection--single,
		.select2-container--default .select2-selection--single .select2-search__field,
		.typeahead,
		.tt-query,
		.tt-hint {
			font-size: 1.2rem;
		}


		.btn i {
			font-size: 1rem
		}

		.dt-buttons .dt-button {
			margin-bottom: 10px
		}

		.table td {
			font-size: 0.9rem;
			padding: 10px;

		}

		.table thead th {
			border-top: 0;
			border-bottom-width: 1px;
			font-weight: 500;
			font-size: 1.1rem;
			padding: 10px;
		}

		.fa {
			font-size: 1.5rem;
		}

		.sidebar-dark .sidebar .nav .nav-item .nav-link i {
			padding: 0 0 0 0;
		}

		.menu-title {
			padding-left: 10px
		}

		div.table-responsive>div.dataTables_wrapper>div.row {
			padding-right: 0;
			overflow-x: auto;
		}

		.form-control-sm {
			height: 2.75rem
		}

		.content-wrapper {
			padding: 1px 0px 0rem 9px;
			width: 100%;
			-webkit-flex-grow: 1;
			flex-grow: 1;

		}

		.main-panel {

			transition: width 0.25s ease, margin 0.25s ease;
			width: 75%;
			min-height: calc(100vh - 4.625rem);
			display: -webkit-flex;
			display: flex;
			-webkit-flex-direction: column;
			flex-direction: column;
		}

		.stretch-card>.card {
			width: 100%;
			max-width: calc(100% - 230px);
		}

		.form-check .form-check-label {
			min-height: 18px;
			display: block;
			margin-left: 1.75rem;
			font-size: 1.2rem;
			line-height: 1.5;
		}

		table.table-bordered.dataTable thead th,
		table.table-bordered.dataTable tbody td {
			border-bottom-width: 0;
			white-space: normal;
			line-height: 1.5;
			vertical-align: middle;
		}

		.klnlogo {
			width: 75% !important;
			margin-bottom: 2rem
		}

		.navbar .navbar-brand-wrapper,
		.navbar .navbar-menu-wrapper {
			height: 4rem;
		}

		.navbar+.page-body-wrapper {
			padding-top: calc(3.225rem + 1rem);
		}

		.navbar-breadcrumb .navbar-menu-wrapper {
			padding-left: 1rem;
			height: auto;
		}

		@media (min-width: 992px) {
			.sidebar-icon-only .navbar .navbar-brand-wrapper {
				width: calc(450px + 0.5rem);
			}

			.sidebar-icon-only .navbar .navbar-menu-wrapper {
				width: calc(100% - 450px - 0.5rem);
			}

			.sidebar-icon-only .navbar .navbar-brand-wrapper .brand-logo {
				display: inline-block;
			}

			.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapse,
			.sidebar-icon-only .sidebar .nav .nav-item.hover-open .collapsing {
				display: block;
				padding: 0.5rem 0;
				background: #313030;
				border-radius: 0 0 5px 0;
				position: absolute;
				left: calc(70px - 2px);
				width: 350px;
				box-shadow: 4px 4px 7px 0px rgba(182, 185, 189, 0.25);
			}

			.sidebar-icon-only .sidebar .nav .nav-item.hover-open .nav-link .menu-title {
				background: #000 !important;
				width: 350px;
			}
		}

		@media (max-width: 991px) {
			.navbar .navbar-brand-wrapper .navbar-brand-inner-wrapper .c {
				display: block;
			}

			.navbar .navbar-brand-wrapper {
				width: calc(50px + 0.5rem);
			}

			.navbar .navbar-menu-wrapper {

				width: calc(100% - 50px - 0.5rem);
			}

			.navbar .navbar-menu-wrapper .navbar-nav .nav-item.nav-date {
				display: block !important;
			}

			.navbar .navbar-menu-wrapper .navbar-nav .nav-item.nav-date a {
				margin-top: 20px
			}

			.main-panel {
				width: 100%
			}

			.klnlogo {
				width: 100% !important;
				margin-bottom: 2rem
			}

			.sidebar-offcanvas {
				position: fixed;
				max-height: calc(100vh - 4.625rem);
				top: 4.625rem;
				bottom: 0;
				overflow: auto;
				left: -456px;
				-webkit-transition: all 0.25s ease-out;
				-o-transition: all 0.25s ease-out;
				transition: all 0.25s ease-out;
			}

			.sidebar-offcanvas.active {
				left: -40px;
			}

			.nav-item i {
				display: none;
			}


			.sidebar {
				width: 420px
			}

			.form-group .label-r {
				text-align: left;
			}

			.dt-button {
				padding: 5px;
				font-size: 1rem;
				width: 100%
			}

			.dt-button span {
				line-height: 1
			}

			.dt-button span i {
				font-size: 1.2rem
			}

		}

		@media (min-width: 992px) {

			.modal-lg,
			.modal-xl {
				max-width: 80% !important;
			}
		}

		.navbar .navbar-brand-wrapper .navbar-brand-inner-wrapper .navbar-brand img {
			width: calc(375px - 110px);
			max-width: 100%;
			height: 67px;
			margin: auto;
			vertical-align: middle;
		}

		#spinner2 {
			display: inline-block;
			width: 20px;
			height: 20px;
			border: 3px solid rgba(0, 0, 0, 0.1);
			border-top: 3px solid #3498db;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}

			100% {
				transform: rotate(360deg);
			}
		}

		#login[disabled] {
			cursor: not-allowed;
			opacity: 0.6;
		}
	</style>
	<!-- SNOW CSS -->
	<!-- <style type="text/css">
		/* SNOW */
		.page-body-wrapper{
			background-color: #ccc;
		}
		.auth .auth-form-light{
			background-color: #aaa;
		}
		#snow {
			position: fixed;
			inset: 0;
			pointer-events: none;
			z-index: 1;
		}

		.snowflake {
			position: absolute;
			top: -10px;
			color: white;
			text-shadow: 0 0 10px white;
			opacity: 0.8;
			animation-name: fall;
			animation-timing-function: linear;
			animation-fill-mode: forwards;
		}

		@keyframes fall {
			0% {
				transform: translateX(0) translateY(0);
				opacity: inherit;
			}

			50% {
				transform: translateX(25px) translateY(50vh);
			}

			100% {
				transform: translateX(-25px) translateY(110vh);
				opacity: 0;
			}
		}

		@keyframes fadeTitle {
			from {
				opacity: 0;
				transform: translateY(-20px);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	</style> -->
</head>

<body class="sidebar-icon-only">
	<!-- <div id="snow"></div> -->
	<div id="loading-spinner">
		<img src="style/loading.gif" alt="Loading Spinner">
	</div>

	<div class="container-scroller">
		<nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row navbar-dark">
			<div class="navbar-brand-wrapper d-flex justify-content-center">
				<div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100" id="baseTag">
					<a class="navbar-brand brand-logo" href="#" id="baseTag" style="cursor: pointer;"><img src="images/fgslogo-white.png" alt="logo" /></a>
					<!-- <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a> -->

					<button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
						<span class="typcn typcn-th-menu"></span>
					</button>
					<button class="navbar-toggler navbar-toggler align-self-center d-lg-none c" type="button" data-toggle="offcanvas">
						<span class="typcn typcn-th-menu"></span>
					</button>
				</div>
			</div>
			<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
				<ul class="navbar-nav mr-lg-2">
					<li class="nav-item nav-profile dropdown">
						<a class="nav-link" href="#">
							<!-- <img src="images/faces/face5.jpg" alt="profile"/> -->
							<span class="nav-profile-name" id="userDetails"></span>
						</a>

					</li>

				</ul>
				<ul class="navbar-nav">
					<!-- 	<button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
					<span class="typcn typcn-th-menu"></span>
				</button> -->
					<li class="nav-item nav-date dropdown">
						<a class="nav-link d-flex justify-content-center align-items-center" href="javascript:;">

							<h6 class="date mb-0" id="DateToday"></h6>
						</a>
					</li>
				</ul>

			</div>
		</nav>

		<div class="container-fluid page-body-wrapper">

			<!-- partial:partials/_sidebar.html -->
			<div id="menuArea">

			</div>
			<div class="main-panel" style="margin: auto;    margin-top: 0;">
				<div class="content-wrapper">
					<div id="formArea">

						<div class="container-scroller">
							<div class="container-fluid" style="    min-height: fit-content;">
								<div class="content-wrapper  auth">
									<div class="row w-100 mx-0" style="margin-top: 2rem;">
										<div class="col-xl-5 col-lg-9 col-md-8 mx-auto">
											<div class="auth-form-light text-left py-2 px-4 px-sm-5">
												<div class="brand-logo" style="margin: auto; width:100%;text-align:center">
													<img src="img/fgslogo1.png" alt="logo" class="klnlogo">
												</div>
												<form class="pt-3" name="loginForm2" id="loginForm2" method="post">

													<div class="form-group" style="margin-bottom: 2rem !important">
														<label for="exampleInputUsername1" style="font-size: 1.5rem">Username</label>
														<input class="form-control form-control-lg" id="username" placeholder="Username" type="text" name="username" style="font-size: 1.3rem">
													</div>
													<div class="form-group">
														<label for="exampleInputUsername1" style="font-size: 1.5rem">Password</label>
														<input type="password" name="password" class="form-control form-control-lg" id="password" placeholder="Password" style="font-size: 1.3rem">
													</div>
													<div class="mt-3">
														<input type="checkbox" value="lsRememberMe" id="rememberMe"> <label for="rememberMe">Remember me</label> <a href="https://sspr.kln.ac.lk/Password/Reset" style="text-align: right;float: right;    cursor: pointer;" target="_blank">Forgot Password</a>

														<input name="login" type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" id="login" value="SIGN IN" style="font-size: 1.2rem;padding: 10px" />
													</div>
													<div class="my-2 d-flex justify-content-between align-items-center">
														<!-- <a href="#" class="auth-link text-black">Forgot password?</a> -->
													</div>
												</form>

												<script>
													document.addEventListener("DOMContentLoaded", function() {
														const button = document.getElementById("login");
														const spinner = document.getElementById("spinner");
														button.disabled = true;
														button.innerHTML = 'Loading... <span id="spinner"></span>';
													});

													// Enable the button after the entire page has fully loaded
													window.onload = function() {
														const button = document.getElementById("login");
														button.disabled = false;
														button.innerHTML = 'SIGN IN';
													};



													const rmCheck = document.getElementById("rememberMe"),
														emailInput = document.getElementById("username");
													passwordE = document.getElementById("password");

													if (localStorage.checkbox && localStorage.checkbox !== "") {
														rmCheck.setAttribute("checked", "checked");
														emailInput.value = localStorage.username;
														passwordE.value = localStorage.password;
													} else {
														rmCheck.removeAttribute("checked");
														emailInput.value = "";
														passwordE.value = "";
													}


													//Get form element
													var form3 = document.getElementById("loginForm2");

													//Calling a function during form submission.
													form3.addEventListener('submit', submitForm);

													function submitForm(event) {
														event.preventDefault();
														if (rmCheck.checked && emailInput.value !== "") {
															localStorage.username = emailInput.value;
															localStorage.password = passwordE.value;
															localStorage.checkbox = rmCheck.value;
														} else {
															localStorage.username = "";
															localStorage.password = "";
															localStorage.checkbox = "";
														}
														userLogin();
													}



													// $("#loginForm2").submit(function(e) {
													// 	e.preventDefault();
													// 	alert("ds")
													// });

													// document.getElementById("loginForm2").onsubmit = function() {
													// 	myFunction3()
													// };

													// function myFunction3() {
													// 	userLogin();
													// }
												</script>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div id="msgArea"></div>
				</div>
			</div>


		</div>
		<footer class="footer" style="   margin-top: 30px;">
			<div class="card" style="width: 100%;position: fixed;bottom: 0;left: 0;">
				<div class="card-body">
					<div class="d-sm-flex justify-content-center">
						<span class="text-muted text-center text-sm-center d-block d-sm-inline-block">Copyright © 2024<a href="https://fgs.kln.ac.lk/" class="text-muted" target="_blank"> Faculty of Graduate Studies</a></span>
					</div>
				</div>
			</div>
		</footer>
	</div>
</body>
<!-- SNOW JS -->
<!-- <script>
	/* SnowFlake */
	const snow = document.getElementById("snow");
	const flakes = ["❄", "❅", "❆"];

	function createSnowflake() {
		const flake = document.createElement("div");
		flake.classList.add("snowflake");
		flake.textContent = flakes[Math.floor(Math.random() * flakes.length)];

		flake.style.left = Math.random() * window.innerWidth + "px";

		const depth = Math.random();
		flake.style.fontSize = 8 + depth * 30 + "px";
		flake.style.opacity = 0.4 + depth * 0.6;
		flake.style.animationDuration = 4 + (1 - depth) * 6 + "s";

		flake.addEventListener("animationend", () => flake.remove());
		snow.appendChild(flake);
	}

	// Create a new snowflake every 120 milliseconds
	setInterval(createSnowflake, 120);

	/* Night Mode */
	function toggleNight() {
		// Toggle the "night" class on the body element
		document.body.classList.toggle("night");
	}

	/* Christmas Mode */
	function toggleChristmas() {
		// Toggle the "christmas" class on the body element
		document.body.classList.toggle("christmas");
	}
</script> -->
<script src="vendors/js/vendor.bundle.base.js"></script>
<script src="js/off-canvas.js"></script>
<script src="js/hoverable-collapse.js"></script>
<script src="js/template.js"></script>
<script src="js/settings.js"></script>
<script src="js/todolist.js"></script>

<script src="https://code.jquery.com/jquery-3.7.0.js"></script>
<script type="text/javascript" src="richtextbox/jquery.richtext.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<script src="summernote/summernote-bs4.min.js"></script>


<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/select/1.1.2/js/dataTables.select.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js"></script>
<!-- <script src="https://unpkg.com/filepond@^4/dist/filepond.js"></script> -->

<script type="text/javascript" src="js/FilePond.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<!-- <script type="module">
import docx from 'https://cdn.jsdelivr.net/npm/docx@9.1.1/+esm'
</script> -->

<script type="text/javascript" src="richtextbox/rte.js"></script>
<script type="text/javascript" src='richtextbox/plugins/all_plugins.js'></script>
<script src="js/forgetpass.js"></script>

<script>
	var monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = monthNames[currentDate.getMonth()];
	var day = currentDate.getDate().toString().padStart(2, '0');

	var formattedDate = year + ' ' + month + ' ' + day;

	document.getElementById('DateToday').innerHTML = "Today : " + formattedDate;

	function generate2() {
		const doc = new docx.Document({
			sections: [{
				properties: {},
				children: [
					new docx.Paragraph({
						children: [
							new docx.TextRun("Hello World"),
							new docx.TextRun({
								text: "Foo Bar",
								bold: true
							}),
							new docx.TextRun({
								text: "\tGithub is the best",
								bold: true
							})
						]
					})
				]
			}]
		});

		docx.Packer.toBlob(doc).then((blob) => {
			console.log(blob);
			saveAs(blob, "example.docx");
			console.log("Document created successfully");
		});



	}

	$(document).on("submit", "#searchStudentProfileS", function(event) {
		event.preventDefault(); // Prevents page refresh
		checkStudentAvailable();
	});
	$(document).on("submit", "#searchApplicantProfileS", function(event) {
		event.preventDefault(); // Prevents page refresh
		checkApplicationAvailable();
	});
</script>

</html>