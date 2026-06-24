<?php
//Thiwanka

//spliting function
function multiexplode ($delimiters,$string) {
   
    $ready = str_replace($delimiters, $delimiters[0], $string);
    $launch = explode($delimiters[0], $ready);
    return  $launch;
}

//read file in read only format
$myfile = fopen("logfile.txt", "r") or die("Unable to open file!");
$Vdata = file_get_contents('logfile.txt');



$myArray = explode(',', $Vdata);
$string = implode(';', $myArray);

$myArray1 = explode(';', $string);
$string1 = implode(';', $myArray1);


 $myArray2 =multiexplode(array("SET","where",",",";"),$Vdata);

$rowcount=0;

//Table creation
echo "<div align='center'> <h1>Log </h1></div><div>";
            echo "<table border='1'>";

                echo "<tr>";

                    echo "<th>Row Count</th>";
                    echo "<th width='200'>Action</th>";

                    echo "<th>Data</th>";
					
                    echo "<th>IP Address</th>";

                     echo "<th>Date</th>";
					
					echo "<th>Time</th>";
                     echo "<th>User Name</th>";
                echo "</tr>";
echo "<tr>";

$loop =0;
//read array
foreach($myArray2 as $my_Array){
	
//separating insert log  
if ("INSERT"==substr($my_Array,0,6)) 	
{
		$rowcount= $rowcount+"1";
                echo "</tr>";
	echo "<td>" . $rowcount . "</td>";
	echo "<td> user Add a record </td>";
	echo "<td>";
	
}
//separating delete log  
else if ("delete"==substr($my_Array,0,6))
{
	$rowcount= $rowcount+"1";
                echo "</tr>";
	echo "<td>" . $rowcount . "</td>";
	 	echo "<td> user Delete a record </td>";
		echo "<td>";
}
//separating update log  
else if ("update"==substr($my_Array,0,6))
{
	$rowcount= $rowcount+"1";
                echo "</tr>";
	echo "<td>" . $rowcount . "</td>";
	echo "<td> user Update a record </td>";
	echo "<td>";
}
//separating username log  
else if ("UserName"==substr($my_Array,0,8)) 
{
	$rowcount= $rowcount+"1";
                echo "</tr>";
	echo "<td>" . $rowcount . "</td>";
	echo "<td> user Loged into system </td>";
			echo "<td>";
		echo  $my_Array.'<br>' ;
		echo "</td>";
}
//separating log details 
else
{
//separating ip details 
	if ("ip"==substr($my_Array,0,2)) 
	{
		echo "</td>";
		echo "<td>";
		echo  $my_Array.'<br>' ;
		echo "</td>";
	}
//separating login details 
	else if ("username"==substr($my_Array,0,8))  
	{
		echo "</td>";
		echo "<td>";
		echo  $my_Array.'<br>' ;
		echo "</td>";
	}
//separating date details
	else if ("Date"==substr($my_Array,0,4))  
	{
		echo "</td>";
		echo "<td>";
		echo  $my_Array.'<br>' ;
		echo "</td>";
	}
//separating time details
	else if ("Time"==substr($my_Array,0,4)) 
	{
		echo "</td>";
		echo "<td>";
		echo  $my_Array.'<br>' ;
		echo "</td>";
	}
	else
	{	
	echo  $my_Array.'<br>' ;
	} 
   }
}
//Closing table
 echo "</table></div>";
//Closing file
fclose($myfile);
?>