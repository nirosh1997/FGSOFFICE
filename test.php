<?php $filename = "test.txt"; $file = @fopen($filename, "a"); 
// Suppress error message 
if (!$file) { 
    $error = error_get_last(); 
    echo "Error: " . $error['message']; 
} else { 
// Process the file 
    echo "fd";
    fclose($file); 
} ?>