<html>
	<head>
		<title>Upload Photo & Signature</title>
	</head>
	<body>
		<form method="post" enctype="multipart/form-data" name="formUploadFile">		
			</br></br>
			<label><b>Upload Photo & Signature</b><label></br>
			<label><font color="red"> * Images format should be in .jpg</font></label></br>
			<label><font color="red"> * Can upload only 20 images in one time </font></label></br>
			<hr>
			</br><label>Select Photo to upload:</label>
			<input type="file" name="files1[]" multiple="multiple" />
			<input type="submit" value="Upload Photo" name="btnSubmit1"/></br></br>
			<label>Select Signature to upload:</label>
			<input type="file" name="files2[]" multiple="multiple" />
			<input type="submit" value="Upload Signature" name="btnSubmit2"/></br>
		</form>		
		<?php
			if(isset($_POST["btnSubmit1"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpg");
				$bytes = 10000;
				$KB = 10000;
				$totalBytes = $bytes * $KB;
				$pic = "testimg";
				
				$counter = 0;
				
				foreach($_FILES["files1"]["tmp_name"] as $key=>$tmp_name){
					$temp = $_FILES["files1"]["tmp_name"][$key];
					$name = $_FILES["files1"]["name"][$key];
					
					if(empty($temp))
					{
						break;
					}
					
					$counter++;
					$UploadOk = true;
					
					if($_FILES["files1"]["size"][$key] > $totalBytes)
					{
						$UploadOk = false;
						array_push($errors, $name." file size is larger than the 10 MB.");
					}
					
					$ext = pathinfo($name, PATHINFO_EXTENSION);
					if(in_array($ext, $extension) == false){
						$UploadOk = false;
						array_push($errors, $name." is invalid file type.");
					}
					
					if(file_exists($pic."/".$name) == true){
						$UploadOk = false;
						array_push($errors, $name." file is already exist.");
					}
					
					if($UploadOk == true){
						if(move_uploaded_file($temp,$pic."/".$name)){

						}else{
							echo error_get_last()['message'];
						}
						array_push($uploadedFiles, $name);
					}
				}
				
				if($counter>0){
					if(count($errors)>0)
					{
						echo "<b>Errors:</b>";
						echo "<br/><ul>";
						foreach($errors as $error)
						{
							echo "<li>".$error."</li>";
						}
						echo "</ul><br/>";
					}
					
					if(count($uploadedFiles)>0){
						echo "<b>Uploaded Files:</b>";
						echo "<br/><ul>";
						foreach($uploadedFiles as $fileName)
						{
							echo "<li>".$fileName."</li>";
						}
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
			
			
			if(isset($_POST["btnSubmit2"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpg");
				$bytes = 10000;
				$KB = 10000;
				$totalBytes = $bytes * $KB;
				$sig = "sig";
				
				$counter = 0;
				
				foreach($_FILES["files2"]["tmp_name"] as $key=>$tmp_name){
					$temp = $_FILES["files2"]["tmp_name"][$key];
					$name = $_FILES["files2"]["name"][$key];
					
					if(empty($temp))
					{
						break;
					}
					
					$counter++;
					$UploadOk = true;
					
					if($_FILES["files2"]["size"][$key] > $totalBytes)
					{
						$UploadOk = false;
						array_push($errors, $name." file size is larger than the 10 MB.");
					}
					
					$ext = pathinfo($name, PATHINFO_EXTENSION);
					if(in_array($ext, $extension) == false){
						$UploadOk = false;
						array_push($errors, $name." is invalid file type.");
					}
					
					if(file_exists($sig."/".$name) == true){
						$UploadOk = false;
						array_push($errors, $name." file is already exist.");
					}
					
					if($UploadOk == true){
						move_uploaded_file($temp,$sig."/".$name);
						array_push($uploadedFiles, $name);
					}
				}
				
				if($counter>0){
					if(count($errors)>0)
					{
						echo "<b>Errors:</b>";
						echo "<br/><ul>";
						foreach($errors as $error)
						{
							echo "<li>".$error."</li>";
						}
						echo "</ul><br/>";
					}
					
					if(count($uploadedFiles)>0){
						echo "<b>Uploaded Files:</b>";
						echo "<br/><ul>";
						foreach($uploadedFiles as $fileName)
						{
							echo "<li>".$fileName."</li>";
						}
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
			
			
		?>
	</body>
</html>