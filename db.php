<?php
   //$hostname = '127.0.0.1';
   $hostName = "localhost";
   $username = 'root';
   $password = '';
   //$password = '';
   $dbname = 'universityTest';

   function connectDB($hostname, $username, $password)
   {
      $connect = mysql_connect($hostname, $username, $password);
      if(!$connect)
      {
         echo 'Database connection failed!<br/>';
      }
      else
      {
         echo "Database connection success.<br/>$connect<br/>";
         return $connect;
      }
   }
   function opendb($dbname, $link)
   {
      if(!mysql_select_db($dbname, $link))
      {
         echo "Failed to open database $dbname!<br/>";
      }
      else
      {
         echo "Successfully connected to database $dbname<br/>";
      }
   }


   $link = connectDB($hostname, $username, $password);


   $str = "CREATE DATABASE $dbname;";
   if($result = mysql_query($str, $link))
   {
      echo "Database $dbname created successfully.<br/>";
   }
   else
   {
      echo "Failed to create database $dbname, check for duplicates!<br/>";
   }
   opendb($dbname, $link);
 
/*
   //...............session.........................
   $str = "CREATE TABLE ses_login(";
   $str .= "user_id varchar(20) NOT NULL, ";
   $str .= "ip_add varchar(15) NOT NULL, ";
   $str .= "start_time DATETIME NOT NULL, ";
   $str .= "last_acc DATETIME NOT NULL, "; 
   $str .= "PRIMARY KEY (user_id) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table ses_login created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table ses_login!<br/>';
   }
  
   //.........................LogFile.....................
   
   $str = "CREATE TABLE log_File(";
   $str .= "user_id varchar(20) NOT NULL, ";
   $str .= "ip_add varchar(15) NOT NULL, ";
   $str .= "data_Str varchar(500) NOT NULL, ";
   $str .= "time DATETIME NOT NULL, ";
   $str .= "PRIMARY KEY (user_id, data_Str, time, ip_add) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table Log File created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table Log File!<br/>';
   }
   
   //................University.............................
	
   $str = "CREATE TABLE university(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "universityTitle varchar(50), ";
   $str .= "PRIMARY KEY (universityCode) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table university created successfully.<br/>';
   }
   else
   {
      echo 'Failed to create table university!<br/>';
   }
   
   //.................Faculty.................................
   
   $str = "CREATE TABLE faculty(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "facultyTitle varchar(50), ";
   $str .= "PRIMARY KEY (universityCode , facultyCode), ";
   $str .= "INDEX (universityCode), ";
   $str .= "FOREIGN KEY (universityCode) REFERENCES university(universityCode) ";
   $str .= "ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table faculty created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table faculty!<br/>";
   }

  //..................Department....................................
  
   $str = "CREATE TABLE department(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "departmentTitle varchar(50), ";
   $str .= "PRIMARY KEY (universityCode, facultyCode, departmentCode), ";
   $str .= "INDEX (universityCode, facultyCode), ";
   $str .= "FOREIGN KEY (universityCode, facultyCode) ";
   $str .= "REFERENCES faculty(universityCode, facultyCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table department created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table department!<br/>";
   }

   //.....................Role................................
   
   $str = "CREATE TABLE role ( ";
   $str .= "roleId varchar(10) NOT NULL, ";
   $str .= "roleName varchar(20) NOT NULL, ";
   $str .= "roleDescription varchar(255), ";
   $str .= "PRIMARY KEY (roleId) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table role created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table role!<br/>';
   }
   

   //.....................User............................
   
   $str = "CREATE TABLE user(";
   $str .= "userId varchar(50) NOT NULL, ";
   $str .= "passWd varchar(32) NOT NULL, ";
   $str .= "userName varchar(50) NOT NULL, ";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "roleId varchar(10), "; // Make this field NOT NULL upon final completion of User Role module in the system
   $str .= "PRIMARY KEY (userId), ";
  $str .= "INDEX (universityCode, facultyCode, departmentCode), ";
  $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode) ";
  $str .= "REFERENCES department(universityCode, facultyCode, departmentCode) ";
  $str .= "ON DELETE RESTRICT, ";
   $str .= "FOREIGN KEY (roleId) REFERENCES role(roleId) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table user created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table user!<br/>';
   }

   
   //..................activityLog...............................
   
   $str = "CREATE TABLE activitylog (";
   $str .= "logindex MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT, ";
   $str .= "userId varchar(10) NOT NULL, ";
   $str .= "universityCode varchar(10) NOT NULL, ";
   $str .= "logdate DATE, ";
   $str .= "logtime TIME, ";
   $str .= "action varchar(10) NOT NULL, ";
   $str .= "details varchar(200), ";
   $str .= "PRIMARY KEY (logindex), ";
   $str .= "INDEX (userId), ";
   $str .= "FOREIGN KEY (userId) REFERENCES user(userId) ON DELETE RESTRICT, ";
   $str .= "FOREIGN KEY (universityCode) REFERENCES university(universityCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table activitylog created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table activitylog!<br/>';
   }

   
   //...................currentUser.......................................
   
   $str = "CREATE TABLE currentUser (";
   $str .= "userId varchar(10) NOT NULL, ";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "ipAddress varchar(140), ";
   $str .= "loggedTime TIME, ";
   $str .= "PRIMARY KEY (userId), ";
   $str .= "INDEX (userId, universityCode), ";
   $str .= "FOREIGN KEY (userId) REFERENCES user(userId) ON DELETE RESTRICT, ";
   $str .= "FOREIGN KEY (universityCode) REFERENCES university(universityCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table currentUser created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table currentUser!<br/>';
   }
  

 
    //..............programmeType........................
	
   $str = "CREATE TABLE programmeType ( ";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeTitle varchar(50) NOT NULL, ";
   $str .= "PRIMARY KEY (universityCode ,programmeTypeCode), ";
   $str .= "INDEX (universityCode),";
   $str .= "FOREIGN KEY (universityCode) REFERENCES university(universityCode)ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table programmeType created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table programmeType!<br/>';
   }


   //....................Degree.................................
   
   $str = "CREATE TABLE degree(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, ";
   $str .= "degreeTitle varchar(100) NOT NULL, ";
   $str .= "academicYear varchar(50), ";
   $str .= "duration varchar(50), ";
   $str .= "criteriaCode varchar(10) NOT NULL, ";
   $str .= "PRIMARY KEY (universityCode ,facultyCode ,degreeCode,criteriaCode), ";
   $str .= "INDEX (universityCode ,facultyCode),";
   $str .= "FOREIGN KEY (universityCode , facultyCode) REFERENCES faculty(universityCode ,facultyCode)ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table degree created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table degree!<br/>";
   }
   

   //...............newCourseUnit............................
   
   $str = "CREATE TABLE newcourseunit ( ";
   $str .= "courseUnitCode varchar(10) NOT NULL, ";
   $str .= "courseUnitTitle varchar(50) NOT NULL, ";
   $str .= "method varchar(50) NOT NULL, ";
   $str .= "PRIMARY KEY (courseUnitCode) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table newcourseunit created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table newcourseunit!<br/>';
   }
   


    //......................batch........................
   
	$str = "CREATE TABLE batch(";
	$str .= "universityCode varchar(3) NOT NULL, ";
	$str .= "facultyCode varchar(5) NOT NULL, ";
	$str .= "departmentCode varchar(10) NOT NULL, ";
	$str .= "degreeCode varchar(10) NOT NULL, ";
	$str .= "batchNo varchar(10) NOT NULL, ";
	$str .= "categoryCode varchar(10) NOT NULL, ";
	$str .= "rate1  varchar(10), ";
	$str .= "renewalRegistrationFee varchar(10) NOT NULL, ";
    $str .= "certificateFee varchar(10) NOT NULL, ";
    $str .= "repeatExamFee varchar(10) NOT NULL, ";
    $str .= "convocationFee varchar(10) NOT NULL, ";
	$str .= "academicYear varchar(9)NOT NULL, ";
	$str .= "calenderYear varchar(5)NOT NULL, ";
	$str .= "commenceDate varchar(100) NOT NULL, ";
	$str .= "fullpaymentDeadlineDate varchar(100) NOT NULL, ";
	$str .= "halfpaymentDeadlineDate varchar(100) NOT NULL, ";
	$str .= "extendedDuration varchar(10) NOT NULL, ";
	$str .= "PRIMARY KEY (universityCode , facultyCode , departmentCode , degreeCode , batchNo , categoryCode),";
	$str .= "INDEX (degreeCode),";
	$str .= "FOREIGN KEY (universityCode ,facultyCode  ,degreeCode) REFERENCES degree(universityCode ,facultyCode  ,degreeCode) ON DELETE RESTRICT ";
    $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table batch created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table batch!<br/>';
   }

  

  

  //...................courseUnit.........................
  
   $str = "CREATE TABLE courseUnit(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, ";
   $str .= "courseUnitCode varchar(10) NOT NULL, ";
   $str .= "batchNo varchar(10) NOT NULL, ";
   $str .= "type varchar(100), ";
   $str .= "PRIMARY KEY (universityCode,facultyCode ,departmentCode ,degreeCode ,courseUnitCode ,batchNo) ";
  // $str .= "INDEX (universityCode,facultyCode ,departmentCode , programmeTypeCode, degreeCode) ";
  // $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode) REFERENCES department(universityCode, facultyCode, departmentCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table courseUnit created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table courseUnit!<br/>";
   }
   
   
  

   //...................lecturer.....................
   
   $str = "CREATE TABLE lecturer(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "lecturerEmpNo varchar(10) NOT NULL, ";
   $str .= "lecturerNIC varchar(10) NOT NULL, ";
   $str .= "lecturerPersonalTitle varchar(10),";
   $str .= "lecturerName varchar(50),";
   $str .= "lecturerSex varchar(10), ";
   $str .= "lecturerDateofbirth varchar(10), ";
   $str .= "lecturerAge varchar(30), ";
   $str .= "lecturerAddressLine01 varchar(50), ";
   $str .= "lecturerAddressLine02 varchar(50), ";
   $str .= "lecturerContactLand01 varchar(10), ";
   $str .= "lecturerContactMobile01 varchar(10), ";
   $str .= "lecturerContactEmail varchar(200), ";
   $str .= "lecturertype  varchar(30), ";
   $str .= "registered  varchar(5), ";
   $str .= "PRIMARY KEY (universityCode, facultyCode, departmentCode ,lecturerEmpNo) , ";
   $str .= "INDEX (universityCode, facultyCode, departmentCode), ";
   $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode) REFERENCES department(universityCode, facultyCode, departmentCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table lecturer created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table lecturer!<br/>';
   }

 
   


    //..................lecturercourseunit.......................
	
	$str = "CREATE TABLE lecturercourseunit(";
	$str .= "lecturerEmpNo varchar(10) NOT NULL, ";
	$str .= "degreeCode varchar(10) NOT NULL, ";
	$str .= "courseUnitCode varchar(10) NOT NULL, ";
	$str .= "paymentRate varchar(50) NOT NULL, ";
	$str .= "academicYear varchar(50)NOT NULL, ";
	$str .= "semester varchar(10) NOT NULL, ";
	$str .= "duration varchar(5) NOT NULL, ";
	$str .= "appointmentStartDate varchar(20) NOT NULL, ";
	$str .= "appointmentEndDate varchar(20) NOT NULL, ";
	$str .= "appointed varchar(10) NOT NULL, ";
	$str .= "lecturercourseunitId int(11) NOT NULL,";
	$str .= "PRIMARY KEY (lecturerEmpNo , courseUnitCode, lecturercourseunitId) ,";
	$str .= "INDEX (lecturerEmpNo , courseUnitCode)";
    //$str .= "FOREIGN KEY (courseUnitCode) REFERENCES courseUnit(courseUnitCode) ON DELETE RESTRICT ";
    $str .= ") ENGINE=INNODB;";
    echo "<br/>Executing query: $str<br/>";
    if($result = mysql_query($str, $link))
    {
      echo 'Table lecturercourseunit created successfully<br/>';
    }
    else
    {
      echo 'Failed to create table lecturercourseunit!<br/>';
    }

  
    //....................selectedstudent.................................
	
   $str = "CREATE TABLE selectedstudent(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, ";
   $str .= "applicationNo varchar(20) NOT NULL, ";
   $str .= "studentNIC varchar(10) NOT NULL ,";
   $str .= "studentName varchar(50),";
   $str .= "studentSex varchar(10), ";
   $str .= "studentDateofbirth varchar(10), ";
   $str .= "studentAge varchar(30), ";
   $str .= "studentAddressLine01 varchar(50), ";
   $str .= "studentAddressLine02 varchar(50), ";
   $str .= "studentContactLand01 varchar(10), ";
   $str .= "studentContactMobile01 varchar(10), ";
   $str .= "studentContactEmail varchar(200), ";
   $str .= "selected varchar(10), ";
   $str .= "PRIMARY KEY (universityCode, facultyCode, departmentCode  , degreeCode,studentNIC), ";
   $str .= "INDEX (universityCode, facultyCode, departmentCode , degreeCode ), ";
   $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode) REFERENCES department(universityCode, facultyCode, departmentCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table selectedstudent created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table selectedstudent!<br/>';
   }

   //......................student..........................
   
   $str = "CREATE TABLE student(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, ";
   $str .= "batchNo  varchar(10), ";
   $str .= "studentNo varchar(10) NOT NULL, ";
   $str .= "studentNIC varchar(10) NOT NULL ,";
   $str .= "studentName varchar(50),";
   $str .= "studentSex varchar(10), ";
   $str .= "studentDateofbirth varchar(10), ";
   $str .= "studentAge varchar(30), ";
   $str .= "studentAddressLine01 varchar(50), ";
   $str .= "studentAddressLine02 varchar(50), ";
   $str .= "studentContactLand01 varchar(10), ";
   $str .= "studentContactMobile01 varchar(10), ";
   $str .= "studentContactEmail varchar(200), ";
   $str .= "academicYear  varchar(10), ";
   $str .= "extendedTime  varchar(10), ";
   $str .= "registered  varchar(5), ";
   $str .= "PRIMARY KEY (universityCode, facultyCode, departmentCode , degreeCode, studentNo, batchNo), ";
   $str .= "INDEX (universityCode, facultyCode, departmentCode , degreeCode ), ";
   $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode) REFERENCES department(universityCode, facultyCode, departmentCode) ON DELETE RESTRICT  ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table student created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table student!<br/>';
   }

   //......................studentcourseunit........................
   
    $str = "CREATE TABLE studentcourseunit(";
	$str .= "studentNo varchar(10) NOT NULL, ";
	$str .= "degreeCode varchar(10) NOT NULL, ";
	$str .= "courseUnitCode varchar(100) NOT NULL, ";
	$str .= "academicYear varchar(50)NOT NULL, ";
	$str .= "appointed varchar(10) NOT NULL, ";
	$str .= "studentcourseunitId int(11) NOT NULL,";
	$str .= "PRIMARY KEY (studentNo , courseUnitCode , studentcourseunitId)";
	//$str .= "INDEX (studentNo,degreeCode,courseUnitCode ),";
	//$str .= "FOREIGN KEY (courseUnitCode) REFERENCES courseUnit(courseUnitCode) ON DELETE RESTRICT ";
    $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Table studentcourseunit created successfully<br/>';
   }
   else
   {
      echo 'Failed to create table studentcourseunit!<br/>';
   }

    //...................studentVoucherDetails......................
   
	$str = "CREATE TABLE studentVoucherDetails(";
	$str .= "universityCode varchar(5) NOT NULL, ";
	$str .= "facultyCode varchar(5) NOT NULL, ";
	$str .= "departmentCode varchar(10) NOT NULL, ";
	$str .= "programmeTypeCode varchar(10) NOT NULL, ";
	$str .= "degreeCode varchar(10) NOT NULL, ";
	$str .= "batchNo  varchar(10), ";
	$str .= "budgetId int(11) NOT NULL,";
	$str .= "invoiceNo int(11) NOT NULL,";
	$str .= "studentNIC varchar(10) NOT NULL ,";
	$str .= "studentNo varchar(10) NOT NULL, ";
	$str .= "studentName varchar(50),";
	$str .= "categoryCode varchar(10) NOT NULL, ";
	$str .= "rate1  varchar(10), ";
	$str .= "renewalRegistrationFee varchar(10) NOT NULL, ";
    $str .= "certificateFee varchar(10) NOT NULL, ";
    $str .= "repeatExamFee varchar(10) NOT NULL, ";
    $str .= "convocationFee varchar(10) NOT NULL, ";
	$str .= "instalmentType varchar(10) NOT NULL, ";	
	$str .= "commenceDate varchar(100) NOT NULL, ";
	$str .= "fullpaymentDeadlineDate varchar(100) NOT NULL, ";
	$str .= "halfpaymentDeadlineDate varchar(100) NOT NULL, ";
	$str .= "extendedDuration varchar(10) NOT NULL, ";
	$str .= "issueDate date NOT NULL,";
	$str .= "issueTime time NOT NULL,";
	$str .= "voucherId  int(11) NOT NULL,";
	$str .= "PRIMARY KEY (universityCode ,facultyCode , departmentCode ,degreeCode ,categoryCode ,studentNIC, batchNo , invoiceNo ,voucherId),";
	$str .= "INDEX (voucherId),";
	$str .= "FOREIGN KEY (universityCode ,facultyCode) REFERENCES faculty(universityCode ,facultyCode) ON DELETE RESTRICT ";
    $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table studentVoucherDetails created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table studentVoucherDetails!<br/>";
   }

   //...................studentReceiptDetails......................
   
   $str = "CREATE TABLE studentReceiptDetails(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, ";
   $str .= "batchNo  varchar(10), ";
   $str .= "budgetId int(11) NOT NULL,";
   $str .= "studentNIC varchar(10) NOT NULL ,";
   $str .= "studentNo varchar(10) NOT NULL, ";
   $str .= "studentName varchar(50),";
   $str .= "categoryCode varchar(10) NOT NULL, ";
   $str .= "rate1  varchar(10), ";
   $str .= "renewalRegistrationFee varchar(10) NOT NULL, ";
   $str .= "certificateFee varchar(10) NOT NULL, ";
   $str .= "repeatExamFee varchar(10) NOT NULL, ";
   $str .= "convocationFee varchar(10) NOT NULL, ";
   $str .= "instalmentType varchar(10) NOT NULL, ";
   $str .= "paymentDateToBank varchar(10) NOT NULL, ";
   $str .= "paymentDate date NOT NULL,";
   $str .= "paymentTime time NOT NULL,";
   $str .= "paied varchar(10) NOT NULL, ";
   $str .= "studentPaymentId  int(11) NOT NULL,";
   $str .= "PRIMARY KEY (universityCode ,facultyCode , departmentCode ,degreeCode ,categoryCode ,studentNIC, batchNo ,studentPaymentId),";
   $str .= "INDEX (studentPaymentId),";
   $str .= "FOREIGN KEY (universityCode ,facultyCode ,degreeCode) REFERENCES degree(universityCode ,facultyCode ,degreeCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
  
   if($result = mysql_query($str, $link))
   {
      echo "Table studentReceiptDetails created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table studentReceiptDetails!<br/>";
   }




   $str = "CREATE TABLE category(";
   $str .= "categoryCode varchar(10) NOT NULL, ";
   $str .= "categoryTitle varchar(255) NOT NULL, ";
   $str .= "categoryType varchar(50), ";
   $str .= "PRIMARY KEY (categoryCode) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table category created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table category!<br/>";
   }
   
   
   $str = "CREATE TABLE subcategory(";
   $str .= "subcategoryCode varchar(10) NOT NULL, ";
   $str .= "subcategoryTitle varchar(255) NOT NULL, ";
   $str .= "categoryCode varchar(50), ";
   $str .= "PRIMARY KEY (categoryCode ,subcategoryCode), ";
   $str .= "FOREIGN KEY (categoryCode) REFERENCES category(categoryCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table subcategory created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table subcategory!<br/>";
   }

   $str = "CREATE TABLE budget(";
   $str .= "universityCode varchar(5) NOT NULL, ";
   $str .= "facultyCode varchar(5) NOT NULL, ";
   $str .= "departmentCode varchar(10) NOT NULL, ";
   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
   $str .= "degreeCode varchar(10) NOT NULL, "; 
   $str .= "batchNo  varchar(10), ";
   $str .= "budgetId int(11) NOT NULL,";
   $str .= "academicYear  varchar(10), ";
   $str .= "categoryCode varchar(10) NOT NULL, ";
   $str .= "subcategoryCode varchar(10) NOT NULL, ";
   $str .= "noteNo1  varchar(10), ";
   $str .= "noteNo2  varchar(10), ";
   $str .= "noteNo3  varchar(10), ";
   $str .= "noteNo4  varchar(10), ";
   $str .= "rate1  varchar(10), ";
   $str .= "rate2  varchar(10), ";
   $str .= "unit1  varchar(10), ";
   $str .= "unit2  varchar(10), ";
   $str .= "incomeAmount1  varchar(10), ";
   $str .= "expenditureAmount1  varchar(10), ";
   $str .= "totalIncomeAmount  varchar(20), ";
   $str .= "totalIncomeAfterTax  varchar(20), ";
   $str .= "totalExpenditureAmount  varchar(20), ";
   $str .= "budgetestimatedDate date NOT NULL,";
   $str .= "budgetestimatedTime time NOT NULL,";
   $str .= "PRIMARY KEY (universityCode, facultyCode, departmentCode,degreeCode , batchNo, budgetId , categoryCode , subcategoryCode)";
  // $str .= "INDEX (universityCode, facultyCode, departmentCode)";
  // $str .= "FOREIGN KEY (universityCode, facultyCode, departmentCode ,degreeCode) REFERENCES degree(universityCode, facultyCode, departmentCode,degreeCode) ON DELETE RESTRICT ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table budget created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table budget!<br/>";
   }


  

	// $str = "CREATE TABLE paymentDetails(";
   // $str .= "paymentId varchar(10) NOT NULL, ";
   // $str .= "PaymentTitle varchar(255) NOT NULL, ";
   // $str .= "PRIMARY KEY (paymentId) ";
   // $str .= ") ENGINE=INNODB;";
   // echo "<br/>Executing query: $str<br/>";
   // if($result = mysql_query($str, $link))
   // {
      // echo "Table paymentDetails created successfully.<br/>";
   // }
   // else
   // {
      // echo "Failed to create table paymentDetails!<br/>";
   // }

   $str = "CREATE TABLE criteria(";
   $str .= "criteriaCode varchar(10) NOT NULL, ";
   $str .= "criteriaTitle varchar(255) NOT NULL, ";
   $str .= "PRIMARY KEY (criteriaCode) ";
   $str .= ") ENGINE=INNODB;";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo "Table criteria created successfully.<br/>";
   }
   else
   {
      echo "Failed to create table criteria!<br/>";
   }

   
	   $str = "CREATE TABLE degreecriteria(";
	   $str .= "universityCode varchar(5) NOT NULL, ";
	   $str .= "facultyCode varchar(5) NOT NULL, ";
	   $str .= "departmentCode varchar(10) NOT NULL, ";
	   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
	   $str .= "degreeCode varchar(10) NOT NULL, "; 
	   $str .= "criteriaCode varchar(10) NOT NULL, ";
	   $str .= "eligible varchar(5) NOT NULL, ";
	   $str .= "PRIMARY KEY (universityCode ,facultyCode , departmentCode ,degreeCode ,criteriaCode),";
	   $str .= "INDEX (criteriaCode),";
	   $str .= "FOREIGN KEY (universityCode ,facultyCode ,degreeCode) REFERENCES degree(universityCode ,facultyCode ,degreeCode) ON DELETE RESTRICT ";
	   $str .= ") ENGINE=INNODB;";
	   echo "<br/>Executing query: $str<br/>";
	   if($result = mysql_query($str, $link))
	   {
		  echo "Table degreecriteria created successfully.<br/>";
	   }
	   else
	   {
		  echo "Failed to create table degreecriteria!<br/>";
	   }
	  
	   
	   $str = "CREATE TABLE applicantspersonal(";
	   $str .= "universityCode varchar(5) NOT NULL, ";
	   $str .= "facultyCode varchar(5) NOT NULL, ";
	   $str .= "programmeTypeCode varchar(10) NOT NULL, ";
	   $str .= "degreeCode varchar(10) NOT NULL, "; 
	   $str .= "applicationNo varchar(10) NOT NULL, ";
	   $str .= "studentNIC varchar(10) NOT NULL, ";
	   $str .= "studentName varchar(255) NOT NULL, ";
	   $str .= "studentPersonalTitle varchar(5) NOT NULL, ";
	   $str .= "studentInitial varchar(255) NOT NULL, ";
	   $str .= "studentDateofbirth varchar(10) NOT NULL, ";
	   $str .= "studentNationality varchar(100) NOT NULL, ";
	   $str .= "studentCitizenship varchar(100) NOT NULL, ";
	   $str .= "studentEmployment varchar(255) NOT NULL, ";
	   $str .= "studentPermanentAddress varchar(255) NOT NULL, ";
	   $str .= "studentOfficeAddress varchar(255) NOT NULL, ";
	   $str .= "correspondence varchar(10) NOT NULL, ";
	   $str .= "studentContactLan varchar(10) NOT NULL, ";
	   $str .= "studentContactMobile varchar(10) NOT NULL, ";
	   $str .= "studentContactEmail varchar(255) NOT NULL, ";
	   $str .= "PRIMARY KEY (universityCode ,facultyCode , degreeCode ,applicationNo ,studentNIC)";
	   $str .= ") ENGINE=INNODB;";
	   echo "<br/>Executing query: $str<br/>";
	   if($result = mysql_query($str, $link))
	   {
		  echo "Table applicantspersonal created successfully.<br/>";
	   }
	   else
	   {
		  echo "Failed to create table applicantspersonal!<br/>";
	   }
	  
	
	   
	   $str = "CREATE TABLE applicantseducation(";
	   $str .= "studentNIC varchar(10) NOT NULL, ";
	   $str .= "applicationNo varchar(10) NOT NULL, ";
	   $str .= "bachelorDegree varchar(100) NOT NULL, ";
	   $str .= "bachelorDegreeTitle varchar(255) NOT NULL, ";
	   $str .= "bachelorDegreeobtainUniversity varchar(255) NOT NULL, ";
	   $str .= "bachelorDegreegraduationYear varchar(4) NOT NULL, ";
	   $str .= "bachelorDegreegraduationMonth varchar(3) NOT NULL, ";
	   $str .= "higherDegree varchar(100) NOT NULL, ";
	   $str .= "higherDegreeTitle varchar(255) NOT NULL, ";
	   $str .= "higherDegreeobtainUniversity varchar(255) NOT NULL, ";
	   $str .= "higherDegreegraduationYear varchar(4) NOT NULL, ";
	   $str .= "higherDegreegraduationMonth varchar(3) NOT NULL, ";
	   $str .= "qualificationOne varchar(255) NOT NULL, ";
	   $str .= "qualificationAwardingAuthorityOne varchar(255) NOT NULL, ";
	   $str .= "qualificationAwardingYearOne varchar(4) NOT NULL, ";
	   $str .= "qualificationTwo varchar(255) NOT NULL, ";
	   $str .= "qulificationAwardingAuthorityTwo varchar(255) NOT NULL, ";
	   $str .= "qulificationAwardingYearTwo varchar(4) NOT NULL, ";
	   $str .= "PRIMARY KEY (studentNIC, applicationNo)";
	   $str .= ") ENGINE=INNODB;";
	   echo "<br/>Executing query: $str<br/>";
	   if($result = mysql_query($str, $link))
	   {
		  echo "Table applicantseducation created successfully.<br/>";
	   }
	   else
	   {
		  echo "Failed to create table applicantseducation!<br/>";
	   }
	   
	  
	   
	   $str = "CREATE TABLE applicantswork(";
	   $str .= "studentNIC varchar(10) NOT NULL, ";
	   $str .= "applicationNo varchar(10) NOT NULL, ";
	   $str .= "companyOne varchar(255) NOT NULL, ";
	   $str .= "designationOne varchar(100) NOT NULL, ";
	   $str .= "fromOne varchar(100) NOT NULL, ";
	   $str .= "toOne varchar(100) NOT NULL, ";
	   $str .= "companyTwo varchar(255) NOT NULL, ";
	   $str .= "designationTwo varchar(100) NOT NULL, ";
	   $str .= "fromTwo varchar(100) NOT NULL, ";
	   $str .= "toTwo varchar(100) NOT NULL, ";
	   $str .= "companyThree varchar(255) NOT NULL, ";
	   $str .= "designationThree varchar(100) NOT NULL, ";
	   $str .= "fromThree varchar(100) NOT NULL, ";
	   $str .= "toThree varchar(100) NOT NULL, ";
	   $str .= "refreeNameOne varchar(255) NOT NULL, ";
	   $str .= "refreeAddressOne varchar(255) NOT NULL, ";
	   $str .= "refreeDesignationOne varchar(255) NOT NULL, ";
	   $str .= "refreeNameTwo varchar(255) NOT NULL, ";
	   $str .= "refreeAddressTwo varchar(255) NOT NULL, ";
	   $str .= "refreeDesignationTwo varchar(255) NOT NULL, ";
	   $str .= "PRIMARY KEY (studentNIC , applicationNo)";
	   $str .= ") ENGINE=INNODB;";
	   echo "<br/>Executing query: $str<br/>";
	   if($result = mysql_query($str, $link))
	   {
		  echo "Table applicantswork created successfully.<br/>";
	   }
	   else
	   {
		  echo "Failed to create table applicantswork!<br/>";
	   }
	   
 



  
   // END OF CREATING TABLE
   echo '<br/><br/><br/>Code reached end.<br/>';
   print date("m/d/y G.i:s<br>", time());
   //
   //
   //
   //
   //
   //
   //
   //
   // Test data are added to the DB after this point, Remove the following section upon uploading real data.
   //


   echo '<br/><br/><br/>Adding test data to tables...<br/>';
   
   $str ="INSERT INTO role (roleId, roleName, roleDescription) ";
	$str .= "VALUES ('1', 'Administrator', 'System built test administrator role'),";
	$str .= "('2', 'Bursar', 'Bursar'),";
	$str .= "('3', 'Assistant Bursar', 'Assistant Bursar'),";
	$str .= "('4', 'Book keeper', 'Book keeper'),";
	$str .= "('5', 'Office Staff', 'Office Staff'),";
	$str .= "('6', 'Co-ordinator', 'Co-ordinator');";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table role<br/>';
   }
   else
   {
      echo 'Failed to load test data to table role<br/>';
   }

   $str ="INSERT INTO university (universityCode, universityTitle) VALUES ('KLN', 'University of Kelaniya');";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table university<br/>';
   }
   else
   {
      echo 'Failed to load test data to table university<br/>';
   }


   $str ="INSERT INTO faculty (universityCode, facultyCode, facultyTitle) VALUES ";
	$str .= "('KLN', 'FAC01', 'Faculty of Commerce and Management Studies'),";
	$str .= "('KLN', 'FAC02', 'Faculty of Science'),";
	$str .= "('KLN', 'FAC03', 'Faculty of Medicine'),";
	$str .= "('KLN', 'FAC04', 'Faculty of Humanities'),";
	$str .= "('KLN', 'FAC05', 'Faculty of Social Sciences'),";
	$str .= "('KLN', 'FAC06', 'Faculty of Graduate Studies');";

   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table faculty<br/>';
   }
   else
   {
      echo 'Failed to load test data to table faculty<br/>';
   }

   $str ="INSERT INTO department (universityCode, facultyCode, departmentCode, departmentTitle) VALUES ";

	$str .= "('KLN', 'FAC01', 'CMDEP00001', 'Department of Accountancy (DoA)'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00002', 'Department of Commerce and Financial Management (DCFM)'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00003', 'Department of Finance (DFin)'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00004', 'Department of Human Resource Management (HRM)'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00005', 'Department of Marketing Management (DMM)'),";

	$str .= "('KLN', 'FAC02', 'SCDEP00001', 'Department of Botany'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00002', 'Department of Chemistry'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00003', 'Department of Industrial Management'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00004', 'Department of Mathematics'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00005', 'Department of Microbiology'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00006', 'Department of Physics'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00007', 'Department of Statistics and Computer Science'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00008', 'Department of Zoology'),";	
	
	$str .= "('KLN', 'FAC03', 'MEDEP00001', 'Department of Anatomy '),";
	$str .= "('KLN', 'FAC03', 'MEDEP00002', 'Department of Bio-Chemistry and Clinical Chemistry '),";
	$str .= "('KLN', 'FAC03', 'MEDEP00003', 'Department of Disability Studies'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00004', 'Department of Family Medicine'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00005', 'Department of Forensic Medicine '),";
	$str .= "('KLN', 'FAC03', 'MEDEP00006', 'Department of Medicine'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00007', 'Department of Medical Microbiology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00008', 'Department of Obstetrics and Gynaecology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00009', 'Department of Paediatrics'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00010', 'Department of Parasitology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00011', 'Department of Pathology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00012', 'Department of Pharmacology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00013', 'Department of Physiology'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00014', 'Department of Psychiatry'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00015', 'Department of Public Health'),";
	$str .= "('KLN', 'FAC03', 'MEDEP00016', 'Department of Surgery'),";

		
	$str .= "('KLN', 'FAC04', 'HMDEP00001', 'Department of English '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00002', 'Department of Fine Arts '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00003', 'Department of Hindi Studies '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00004', 'Department of Linguistics '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00005', 'Department of Modern Languages '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00006', 'Department of Pali and Buddhist Studies '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00007', 'Department of Sanskrit '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00008', 'Department of Sinhala '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00009', 'Department of Western Classical Culture and Christian Culture '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00010', 'Department of Visual Arts and Desing And Performing Arts Units '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00011', 'Department of Drama and Theater And Image Arts Unit '),";
	$str .= "('KLN', 'FAC04', 'HMDEP00012', 'Department of English Language Teching Unit '),";
	
	$str .= "('KLN', 'FAC05', 'SSDEP00001', 'Department of Archaelogy'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00002', 'Department of Economics'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00003', 'Department of Geography'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00004', 'Department of History'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00005', 'Department of Library and Information Science'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00006', 'Department of Mass Communication'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00007', 'Department of Philosophy'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00008', 'Department of Sociology');";

	   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table department<br/>';
   }
   else
   {
      echo 'Failed to load test data to table department<br/>';
   }



	$str ="INSERT INTO user (userId, passWd, userName, universityCode, facultyCode, departmentCode, roleId) VALUES ";
	$str .= "('Admin', 'Admin', 'Administrator', 'KLN', 'FAC01', 'CMDEP00001', '1'),";
	$str .= "('co-ordinator', 'co-ordinator', 'co-ordinator', 'KLN', 'FAC01', 'CMDEP00001', '6');";
	

   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table user<br/>';
   }
   else
   {
      echo 'Failed to load test data to table user<br/>';
   }



	$str ="INSERT INTO programmeType (universityCode ,programmeTypeCode, programmeTypeTitle) VALUES ";
	$str .= "('KLN' , 'PRO0000001',  'Post Graduate'),";
	$str .= "('KLN' , 'PRO0000002',  'Diploma and Certificate Courses')";
   echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table programmeType<br/>';
   }
   else
   {
      echo 'Failed to load test data to table programmeType<br/>';
   }

	$str ="INSERT INTO category(categoryCode, categoryTitle, categoryType) VALUES ";
	$str .= "('001', 'Application fee', 'Income'),";
	$str .= "('002', 'Registration fee', 'Income'),";
	$str .= "('003', 'Library fee', 'Income'),";
	$str .= "('004', 'Examination fee', 'Income'),";
	$str .= "('005', 'Course fee', 'Income'),";
	$str .= "('006', 'Library fee-Refundable', 'Income'),";
	$str .= "('007', 'Library fee-Non- Refundable', 'Income'),";
	$str .= "('008', 'Fee for using computer lab', 'Income'),";
	$str .= "('009', 'Fee for using other laboratories', 'Income'),";
	$str .= "('010', 'Fee for Internet usages and payment processing charges', 'Income'),";
	$str .= "('011', 'Initial Expenditure', 'Expenditure'),";
	$str .= "('012', 'Selection', 'Expenditure'),";
	$str .= "('013', 'Inauguration', 'Expenditure'),";
	$str .= "('014', 'Teaching', 'Expenditure'),";
	$str .= "('015', 'Examination', 'Expenditure'),";
	$str .= "('016', 'Course Management', 'Expenditure'),";
	$str .= "('017', 'Staff Emoluments', 'Expenditure'),";
	$str .= "('018', 'Supplies Overheads and Utility Charges', 'Expenditure'),";
	$str .= "('019', 'Rehabilitation and Maintenance Expenditure', 'Expenditure'),";
	$str .= "('020', 'Rehabilitation, Maintenance and Development Fund - Development Expenditure', 'Expenditure'),";
	$str .= "('021', 'Contingencies', 'Expenditure'),";
	$str .= "('022', 'Other', 'Expenditure');";
	echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table category<br/>';
   }
   else
   {
      echo 'Failed to load test data to table category<br/>';
   }

 
    $str ="INSERT INTO subcategory(subcategoryCode, subcategoryTitle, categoryCode) VALUES ";
	$str .= "('SUBCAT0001', 'Advertisements', '011'),";
	$str .= "('SUBCAT0002', 'Promotions of the course(Prospectus,Brochures ect.)', '011'),";
	$str .= "('SUBCAT0001', 'Application fee', '012'),";
	$str .= "('SUBCAT0002', 'Registration fee', '012'),";
	$str .= "('SUBCAT0003', 'Selection Interview/Aptitude Test', '012'),";
	$str .= "('SUBCAT0001', 'Inauguration Expenses', '013'),";
	$str .= "('SUBCAT0001', 'Lecture fee', '014'),";
	$str .= "('SUBCAT0002', 'Handouts', '014'),";
	$str .= "('SUBCAT0003', 'Composite Allowance', '014'),";
	$str .= "('SUBCAT0004', 'Thesis/Dissertations supervision', '014'),";
	$str .= "('SUBCAT0005', 'Guest Lectures', '014'),";
	$str .= "('SUBCAT0006', 'Workshops', '014'),";
	$str .= "('SUBCAT0007', 'Industry Tour', '014'),";
	$str .= "('SUBCAT0001', 'Allowances for examination works', '015'),";
	$str .= "('SUBCAT0002', 'Viva/Interview', '015'),";
	$str .= "('SUBCAT0003', 'Viva/Presentation', '015'),";
	$str .= "('SUBCAT0004', 'Thesis/Dissertation evaluation', '015'),";
	$str .= "('SUBCAT0005', 'Payment for Assessing Assignment', '015'),";
	$str .= "('SUBCAT0001', 'Allowance for Dean', '016'),";
	$str .= "('SUBCAT0002', 'Allowance for Head of the Department', '016'),";
	$str .= "('SUBCAT0003', 'Allowance for course Coordinator', '016'),";
	$str .= "('SUBCAT0004', 'Week-end/Public Holiday Allowance for Dean', '016'),";
	$str .= "('SUBCAT0005', 'Week-end/Public Holiday Allowance for Coordinator', '016'),";
	$str .= "('SUBCAT0001', 'Allowance for SAR/AR', '017'),";
	$str .= "('SUBCAT0002', 'Allowance for Clerical and Allied Grades', '017'),";
	$str .= "('SUBCAT0003', 'Allowance for minor staff', '017'),";
	$str .= "('SUBCAT0004', 'Payments for Finance Division-Bursars Payment', '017'),";
	$str .= "('SUBCAT0005', 'Payments for Finance Division - Subject Clerk', '017'),";
	$str .= "('SUBCAT0006', 'Payments for Finance Division - Accounts Clerk', '017'),";
	$str .= "('SUBCAT0007', 'Salary to office Assistant', '017'),";
	$str .= "('SUBCAT0008', 'Overtime Payments/Week-end and Public Holiday Allowance to Staff', '017'),";
	$str .= "('SUBCAT0009', 'Administrative Allowance', '017'),";
	$str .= "('SUBCAT0001', 'Telephone', '018'),";
	$str .= "('SUBCAT0002', 'Water', '018'),";
	$str .= "('SUBCAT0003', 'Electricity', '018'),";
	$str .= "('SUBCAT0004', 'Stationery', '018'),";
	$str .= "('SUBCAT0005', 'Rental for extra Lecture halls', '018'),";
	$str .= "('SUBCAT0006', 'Fee for Internet usages and payment Processing charges-2.5%', '018'),";
	$str .= "('SUBCAT0001', 'Maintenance of Capital items', '019'),";
	$str .= "('SUBCAT0001', 'Infrastructure', '020'),";
	$str .= "('SUBCAT0002', 'Equipment and Purchasing of Capital Items', '020'),";
	$str .= "('SUBCAT0003', 'University Development Fund-5%', '020'),";
	$str .= "('SUBCAT0004', 'Faculty Development Fund-10%', '020'),";
	$str .= "('SUBCAT0005', 'Faculty of Graduate Studies-1%', '020'),";
	$str .= "('SUBCAT0006', 'Research Center Development Fund -5%', '020'),";
	$str .= "('SUBCAT0007', 'University Income -5%', '020'),";
	$str .= "('SUBCAT0001', 'Library fee-Refundable', '022'),";
	$str .= "('SUBCAT0002', 'Library fee - Non-Refundable', '022');";
	echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table subcategory<br/>';
   }
   else
   {
      echo 'Failed to load test data to table subcategory<br/>';
   }   

/*
	$str ="INSERT INTO degree (universityCode, facultyCode, departmentCode, programmeTypeCode, degreeCode, degreeTitle, academicYear, duration , criteriaCode) VALUES ";

	$str .= "('KLN', 'FAC01', 'CMDEP00001', 'PRO0000001', 'CMDEG01', 'Master of Business', '2015', '2 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00002', 'PRO0000002', 'CMDEG02', 'Diploma in Business', '2015', '1 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00002', 'PRO0000002', 'CMDEG03', 'Higher Diploma in Business', '2015', '1 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00002', 'PRO0000001', 'CMDEG04', 'Master of Commerce', '2015', '2 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00003', 'PRO0000002', 'CMDEG05', 'Diploma in Business Information System', '2015', '1 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00004', 'PRO0000001', 'CMDEG06', 'Postgraduate Diploma in Human Resourse Management Leading to Master of Human Resource Management', '2015', '2 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00005', 'PRO0000002', 'CMDEG07', 'Diploma in Marketing', '2015', '1 year'),";
	$str .= "('KLN', 'FAC01', 'CMDEP00005', 'PRO0000001', 'CMDEG08', 'Postgraduate Diploma in Marketing', '2015', '1 year'),";
	$str .= "('KLN', 'FAC01', '000', 'PRO0000001', 'CMDEG09', 'Master of Business Administration', '2015', '2 year'),";

	$str .= "('KLN', 'FAC02', 'SCDEP00003', 'PRO0000001', 'SCDEG01', 'Master of Science in Management of Information Technology', '2015', '2 year'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00003', 'PRO0000001', 'SCDEG02', 'Post Graduate Dipolma in Information Technology', '2015', '2 year'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00002', 'PRO0000001', 'SCDEG03', 'Master of Science in Industrial and Environmental Chemistry', '2015', '2 year'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00002', 'PRO0000002', 'SCDEG04', 'Diploma in Applied Chemistry', '2015', '1 year'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00005', 'PRO0000001', 'SCDEG05', 'Post Graduate Dipolma/Master of Science in Food and Nutrition', '2015', '2 year'),";
	$str .= "('KLN', 'FAC02', 'SCDEP00005', 'PRO0000001', 'SCDEG06', 'Post Graduate Dipolma/Master of Science in Applied Microbiology', '2015', '2 year'),";

	$str .= "('KLN', 'FAC03', 'MEDEP00015', 'PRO0000001', 'MEDEG01', 'Master of Public Health(Epidemiology)', '2015', '2 year'),";
	
	$str .= "('KLN', 'FAC04', 'HMDEP00008', 'PRO0000001', 'HMDEG01', 'Master of Arts in Sinhala', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00008', 'PRO0000002', 'HMDEG02', 'Diploma in Sinhala', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00009', 'PRO0000001', 'HMDEG03', 'Master of Arts in Christian Studies', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00004', 'PRO0000001', 'HMDEG04', 'Master of Arts in Linguistics', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00004', 'PRO0000002', 'HMDEG05', 'Diploma in Tamil', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00004', 'PRO0000002', 'HMDEG06', 'Diploma in Translation and Interpretation', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00004', 'PRO0000002', 'HMDEG07', 'Advanced certificate course of Communication Dissabilities', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00005', 'PRO0000002', 'HMDEG08', 'Diploma in Korean Language', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00007', 'PRO0000002', 'HMDEG09', 'Certificate course in Astrology', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00007', 'PRO0000002', 'HMDEG10', 'Diploma in Astrology', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00010', 'PRO0000001', 'HMDEG11', 'Master of Arts in Dance', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00010', 'PRO0000001', 'HMDEG12', 'Master of Arts in Music', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00011', 'PRO0000001', 'HMDEG13', 'Master of Arts in Drama and Theatre', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00011', 'PRO0000002', 'HMDEG14', 'Diploma in Photography', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00012', 'PRO0000002', 'HMDEG15', 'Diploma in English for Professional Purposes', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00012', 'PRO0000002', 'HMDEG16', 'Diploma in English for Teaching of English', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00006', 'PRO0000001', 'HMDEG17', 'Master of Arts in Buddhist Studies', '2015', '2 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00006', 'PRO0000002', 'HMDEG18', 'Diploma in Pali and Buddhist Stidies first year', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00006', 'PRO0000002', 'HMDEG19', 'Diploma in Pali and Buddhist Stidies second year', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00006', 'PRO0000002', 'HMDEG20', 'Diploma in Buddhist Studies in Malayasia', '2015', '1 year'),";
	$str .= "('KLN', 'FAC04', 'HMDEP00002', 'PRO0000001', 'HMDEG21', 'Master of Arts in Fine Arts', '2015', '2 year'),";

	$str .= "('KLN', 'FAC05', '000', 'PRO0000001', 'SSDEG01', 'MA/MSSC Social Science Courses', '2015', '2 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00007', 'PRO0000002', 'SSDEG02', 'Diploma in Psychology', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00003', 'PRO0000002', 'SSDEG03', 'Diploma in Dissaster Management', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00004', 'PRO0000002', 'SSDEG04', 'Diploma in History', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00006', 'PRO0000002', 'SSDEG05', 'Diploma in Mass Communication', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00006', 'PRO0000002', 'SSDEG06', 'Diploma in Public and Media Relations', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00005', 'PRO0000002', 'SSDEG07', 'Diploma in Library and Infromation Science', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00005', 'PRO0000002', 'SSDEG08', 'Higher Diploma in Library and Infromation Science', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00005', 'PRO0000002', 'SSDEG09', 'Diploma in Information Literecy and Information Communication Technology', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00001', 'PRO0000002', 'SSDEG10', 'Diploma in Archeology', '2015', '1 year'),";
	$str .= "('KLN', 'FAC05', 'SSDEP00002', 'PRO0000002', 'SSDEG11', 'Diploma in International Relations', '2015', '1 year');"; 	
	echo "<br/>Executing query: $str<br/>";
   if($result = mysql_query($str, $link))
   {
      echo 'Test data successfully loaded to table degree<br/>';
   }
   else
   {
      echo 'Failed to load test data to table degree<br/>';
   }   
*/

   echo '<br/><br/><br/>Code reached end.<br/>';
   print date("m/d/y G.i:s<br>", time());
?>
