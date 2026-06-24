var inum=0;
var rwcnt=1;
var count=0;
var Fcount=0;
var Mcount=0;
var FEcount=0;
var MEcount=0;
var TFcount=0;
var TMcount=0;
var TFEcount=0;
var TMEcount=0;
var TotalcourseFee2=0;	
var newcount=0;	
function setThree()
{
	achedamicYearLength=0;
}
function setTwo()
{
	StudentCountLength=0;
}
function settonone()
{
	studentNoLength=0;
}
		
		function formAllReport(dsp){
			
			title = "All Reports";
		var keyDisabled = fieldDisabled = "";
 
		str = "";

			
		if(dsp == "formAllReport") {
			str  = "<div id='AllReport'>";
			str += "<table><tr><td>"
			if(dataRep["roleName"]!="ICT Center"){
				str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainAllReport" >';
			
			str +="<div>";
			str += '<input type="button" id="Total-Student-Report" class="btnNew" value = "Total Student Report" onclick=sendForm('+"'data4StudentReport'"+');SReport();>';
			str += '<input type="button" id="Total-Student-Reportoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Total Student Report" onclick=Educationdetails();>';
			
			str += '<input type="button" id="Student-Report" class="btnNew" value = "Student Report" onclick=sendForm('+"'data4StudentReport'"+');TSReport();>';
			str += '<input type="button" id="Student-Reportoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Student Report" onclick=Educationdetails();>';
			
		
			str += '<input type="button" id="Foreign-Student-Report" style="margin-top:1px;display:block;float:left" class="btnNew" value="Foreign Student Report" onclick=sendForm("data4ForeignReport");FSReport();>';
			str += '<input type="button" id="Foreign-Student-Reportoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Foreign Student Report" onclick=Educationdetails();>';
			
			str += '<input type="button" id="Student-Count" style="margin-top:1px;display:block;float:left" class="btnNew" value="Local Student Report" onclick=setTwo();sendForm('+"'data4viewstudent'"+');settonone();SCReport();>';
			str += '<input type="button" id="Student-Countoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Local Student Report" onclick=Workexperiance();>';
			
			str += '<input type="button" id="Registered-Students" style="margin-top:1px;display:block;float:left" class="btnNew" value="Registered Students Report" onclick=setThree();setTwo();settonone();sendForm('+"'data4formstudentnew'"+');RSReport();>';
			str += '<input type="button" id="Registered-Studentsoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Registered Students Report" onclick=referees();>';
			
			str += '<input type="button" id="Degree-Medium-Report" style="margin-top:1px;display:block;float:left" class="btnNew" value="Degree Medium Report" onclick=sendForm('+"'data4DegreeMediumReport'"+');DMReport();>';
			str += '<input type="button" id="Degree-Medium-Reportoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Degree Medium Report" onclick=Profitionaldetails();>';
			}
			else{
				title = "";
				str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainAllReport" >';
			str +="<div>";
			str += '<input type="button" id="Total-Student-Report" class="btnNew" value = "Total Student Report" onclick=sendForm('+"'data4StudentReport'"+');STReport();>';
			str += '<input type="button" id="Total-Student-Reportoff" style="margin-top:1px;display:none;float:left" class="btnBOff" value="Total Student Report" onclick=Educationdetails();>';
			}
			
			str +="</div></br>";
			 str += '<div>';
			 str +="<div class=hideLabel>&nbsp;</div>";
			str +="<div id='report-displayDiv1' style='margin-top:1px;display:none;float:center'>";
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Student report</h2><hr></div>';

			programName="<option>Please scroll down to see the records</option>";
			programName+="<option>All Students</option>";
				//alert (studentNoLength);
							for(i = 0; i<studentNoLength; i++) {

							
							if(degreeTitleArr[i] != null){	
							
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
							}
							
				
				
				
				//str +="<div>";
				str +="<div class='identifiers'>Select the Programm</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();ViewList();'>";
				str += programName;
				str += "</select>";
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				//str +="</div>";
			
			str +="<div style='clear:both'>&nbsp;</div>"
	        str += '<input type="button" class="btn" value = "Get Report " onclick=getStuReport();>';
			
			str +="</div>";
			str +="<div id='report-displayDiv2'style='margin-top:1px;display:none;float:center'>"
				
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Total Student report</h2><hr></div>';
			
			dataRep['achedamicYear1']="";
				str +="<div class='identifiers'>Achedamic Year From</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear1' value='achedamicYear1' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear1']);
				str += "</select>";
				//str +="</div>";
				
				dataRep['achedamicYear2']="";
				str +="<div class='identifiers'>Achedamic Year To</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear2' value='achedamicYear2' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear2']);
				str += "</select>";
				//str +="</div>";
				
				str +="<div style='clear:both'>&nbsp;</div>"
				str += '<input type="button" class="btn" value = "Get Report " onclick=getTotStuReport();>';
			
				
			str += '</div>';	
			str +="</div>";
			
			str +="<div id='report-displayDiv3'style='margin-top:1px;display:none;float:center'>"
				
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Foreign Student Report</h2><hr></div>';
			dataRep['achedamicYear3']="";
				str +="<div class='identifiers'>Achedamic Year To</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear3' value='achedamicYear3' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear3']);
				str += "</select>";
				//str +="</div>";
				
				str +="<div style='clear:both'>&nbsp;</div>"
				str += '<input type="button" class="btn" value = "Get Report " onclick=getForStuReport();>';
			
			
			str +="</div>";
			str +="</div>";
			
			
			str +="<div id='report-displayDiv4'style='margin-top:1px;display:none;float:center'>"
				
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Degree Medium Report</h2><hr></div>';
			
			programName1="<option>All Programs</option>";
							for(i = 0; i<degreeCodeLength; i++) {
							if(facultyTitleArrDegree[i] != null){	
							   if (facultyTitleArrDegree.indexOf(facultyTitleArrDegree[i]) == facultyTitleArrDegree.lastIndexOf(facultyTitleArrDegree[i]) || (facultyTitleArrDegree.indexOf(facultyTitleArrDegree[i]) != facultyTitleArrDegree.lastIndexOf(facultyTitleArrDegree[i]) && facultyTitleArrDegree.indexOf(facultyTitleArrDegree[i])==i)){
							programName1 += "<option>"+facultyTitleArrDegree[i]+"</option>";

									}
								 }
							}
				
			
			
			str +="<div class='identifiers'>Select the Faculty</div><div class='colon'>&nbsp;&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedFaculty' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName1;
				str += "</select>";	
				//str +="</div>";
				
				str +="<div style='clear:both'>&nbsp;</div>"
				str += '<input type="button" class="btn" value = "Get Report " onclick=getDegreeMediumReport();>';
			
				
			str += '</div>';	
			str +="</div>";
			
			str +="<div id='report-displayDiv5'style='margin-top:1px;display:none;float:center'>"
				
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Student Count Report</h2><hr></div>';
			
			dataRep['achedamicYear4']="";
				str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear4' value='achedamicYear4' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear4']);
				str += "</select>";
				
				str +="<div style='clear:both'>&nbsp;</div>"
				str += '<input type="button" class="btn" value = "Get Report " onclick=getStudentCountReport();>';
			
				
			str += '</div>';	
			str +="</div>";
			
			str +="<div id='report-displayDiv6'style='margin-top:1px;display:none;float:center'>"
				
			str += '<div>&nbsp;</div>';
			str += '<div><h2 >Details of registered Students</h2><hr></div>';
			
			
				
				dataRep['achedamicYear5']="";
				str +="<div class='identifiers'>From</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear5' value='achedamicYear5' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear5']);
				str += "</select>";

				dataRep['achedamicYear6']="";
				str +="<div class='identifiers'>To</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear6' value='achedamicYear6' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear6']);
				str += "</select>";
				
				str +="<div style='clear:both'>&nbsp;</div>"
				str += '<input type="button" class="btn" value = "Get Report " onclick=getRegisteredStudentsReport();>';
			
				
			str += '</div>';	
			str +="</div>";
			
			str += '<div>&nbsp;</div>';
			str +="<div style='clear:both'>"
	      //  str += '<input type="button" class="btn" value = "Get Report " onclick=getSReport();>';
			//str += '<input type="button" class="btn" value = "View Course Unit" onclick="sendForm('+"'data4ViewNewCourseUnit'"+')">';
			if(dataRep["roleName"]!="ICT Center"){			
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			}
			else{
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			}
			str += '</div>&nbsp;</div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		
		}
		return str;	
	}
	
	function SReport() 
	{
		
		document.getElementById('Total-Student-Report').style.display='none';
		document.getElementById('Student-Report').style.display='block';
		document.getElementById('Foreign-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='block';
		
		
		
		document.getElementById('report-displayDiv1').style.display='block';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		document.getElementById('report-displayDiv4').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= true;
		document.getElementById("Student-Reportoff").disabled= false;
		document.getElementById("Foreign-Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= false;
		
		document.getElementById('Total-Student-Reportoff').style.display='block';
		document.getElementById('Student-Reportoff').style.display='none';
		document.getElementById('Foreign-Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='none';
		
		
		document.getElementById('Student-Count').style.display='block';
		document.getElementById('report-displayDiv5').style.display='none';
		document.getElementById("Student-Countoff").disabled= false;
		document.getElementById('Student-Countoff').style.display='none';
		
		document.getElementById('Registered-Students').style.display='block';
		document.getElementById('report-displayDiv6').style.display='none';
		document.getElementById("Registered-Studentsoff").disabled= false;
		document.getElementById('Registered-Studentsoff').style.display='none';
		
	}
	function STReport() 
	{
		
		document.getElementById('Total-Student-Report').style.display='none';
		//document.getElementById('Student-Report').style.display='block';
		//document.getElementById('Foreign-Student-Report').style.display='block';
		////document.getElementById('Degree-Medium-Report').style.display='block';
		
		
		
		document.getElementById('report-displayDiv1').style.display='block';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		document.getElementById('report-displayDiv4').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= true;
		//document.getElementById("Student-Reportoff").disabled= false;
		//document.getElementById("Foreign-Student-Reportoff").disabled= false;
		//document.getElementById("Degree-Medium-Reportoff").disabled= false;
		
		document.getElementById('Total-Student-Reportoff').style.display='block';
		//document.getElementById('Student-Reportoff').style.display='none';
		//document.getElementById('Foreign-Student-Reportoff').style.display='none';
		//document.getElementById('Degree-Medium-Reportoff').style.display='none';
		
		
		// document.getElementById('Student-Count').style.display='block';
		// document.getElementById('report-displayDiv5').style.display='none';
		// document.getElementById("Student-Countoff").disabled= false;
		// document.getElementById('Student-Countoff').style.display='none';
		
		// document.getElementById('Registered-Students').style.display='block';
		// document.getElementById('report-displayDiv6').style.display='none';
		// document.getElementById("Registered-Studentsoff").disabled= false;
		// document.getElementById('Registered-Studentsoff').style.display='none';
		
	}
	
	function TSReport() 
	{
		document.getElementById('Total-Student-Report').style.display='block';
		document.getElementById('Student-Report').style.display='none';
		document.getElementById('Foreign-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='block';
		
		document.getElementById('report-displayDiv2').style.display='block';
		document.getElementById('report-displayDiv1').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		document.getElementById('report-displayDiv4').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= false;
		document.getElementById("Student-Reportoff").disabled= true;
		document.getElementById("Foreign-Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= false;
		
		document.getElementById('Total-Student-Reportoff').style.display='none';
		document.getElementById('Student-Reportoff').style.display='block';
		document.getElementById('Foreign-Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='none';
		
		
		document.getElementById('Student-Count').style.display='block';
		document.getElementById('report-displayDiv5').style.display='none';
		document.getElementById("Student-Countoff").disabled= false;
		document.getElementById('Student-Countoff').style.display='none';
		
		
		document.getElementById('Registered-Students').style.display='block';
		document.getElementById('report-displayDiv6').style.display='none';
		document.getElementById("Registered-Studentsoff").disabled= false;
		document.getElementById('Registered-Studentsoff').style.display='none';
		
		
	}
		
	function FSReport() 
	{
		document.getElementById('Student-Report').style.display='block';
		document.getElementById('Total-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='block';
		document.getElementById('Foreign-Student-Report').style.display='none';
		
		document.getElementById('report-displayDiv3').style.display='block';
		document.getElementById('report-displayDiv1').style.display='none';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv4').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= false;
		document.getElementById("Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= false;
		document.getElementById("Foreign-Student-Reportoff").disabled= true;
		
		document.getElementById('Total-Student-Reportoff').style.display='none';
		document.getElementById('Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='none';
		document.getElementById('Foreign-Student-Reportoff').style.display='block';
		
		
		document.getElementById('Student-Count').style.display='block';
		document.getElementById('report-displayDiv5').style.display='none';
		document.getElementById("Student-Countoff").disabled= false;
		document.getElementById('Student-Countoff').style.display='none';
		
		
		document.getElementById('Registered-Students').style.display='block';
		document.getElementById('report-displayDiv6').style.display='none';
		document.getElementById("Registered-Studentsoff").disabled= false;
		document.getElementById('Registered-Studentsoff').style.display='none';
		
	}	
	
	function DMReport() 
	{
		document.getElementById('Total-Student-Report').style.display='block';
		document.getElementById('Student-Report').style.display='block';
		document.getElementById('Foreign-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='none';
		
		document.getElementById('report-displayDiv4').style.display='block';
		document.getElementById('report-displayDiv1').style.display='none';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= false;
		document.getElementById("Student-Reportoff").disabled= false;
		document.getElementById("Foreign-Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= true;
		
		document.getElementById('Total-Student-Reportoff').style.display='none';
		document.getElementById('Student-Reportoff').style.display='none';
		document.getElementById('Foreign-Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='block';
		
		
		document.getElementById('Student-Count').style.display='block';
		document.getElementById('report-displayDiv5').style.display='none';
		document.getElementById("Student-Countoff").disabled= false;
		document.getElementById('Student-Countoff').style.display='none';
		
		
		document.getElementById('Registered-Students').style.display='block';
		document.getElementById('report-displayDiv6').style.display='none';
		document.getElementById("Registered-Studentsoff").disabled= false;
		document.getElementById('Registered-Studentsoff').style.display='none';
		
	}
		
	function SCReport() 
	{
		document.getElementById('Total-Student-Report').style.display='block';
		document.getElementById('Student-Report').style.display='block';
		document.getElementById('Foreign-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='block';
		
		document.getElementById('report-displayDiv4').style.display='none';
		document.getElementById('report-displayDiv1').style.display='none';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= false;
		document.getElementById("Student-Reportoff").disabled= false;
		document.getElementById("Foreign-Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= false;
		
		document.getElementById('Total-Student-Reportoff').style.display='none';
		document.getElementById('Student-Reportoff').style.display='none';
		document.getElementById('Foreign-Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='none';
		
		
		document.getElementById('Student-Count').style.display='none';
		document.getElementById('report-displayDiv5').style.display='block';
		document.getElementById("Student-Countoff").disabled= true;
		document.getElementById('Student-Countoff').style.display='block';
		
		
		document.getElementById('Registered-Students').style.display='block';
		document.getElementById('report-displayDiv6').style.display='none';
		document.getElementById("Registered-Studentsoff").disabled= false;
		document.getElementById('Registered-Studentsoff').style.display='none';
		
	}	
		
		function RSReport() 
	{
		document.getElementById('Total-Student-Report').style.display='block';
		document.getElementById('Student-Report').style.display='block';
		document.getElementById('Foreign-Student-Report').style.display='block';
		document.getElementById('Degree-Medium-Report').style.display='block';
		
		document.getElementById('report-displayDiv4').style.display='none';
		document.getElementById('report-displayDiv1').style.display='none';
		document.getElementById('report-displayDiv2').style.display='none';
		document.getElementById('report-displayDiv3').style.display='none';
		
		document.getElementById("Total-Student-Reportoff").disabled= false;
		document.getElementById("Student-Reportoff").disabled= false;
		document.getElementById("Foreign-Student-Reportoff").disabled= false;
		document.getElementById("Degree-Medium-Reportoff").disabled= false;
		
		document.getElementById('Total-Student-Reportoff').style.display='none';
		document.getElementById('Student-Reportoff').style.display='none';
		document.getElementById('Foreign-Student-Reportoff').style.display='none';
		document.getElementById('Degree-Medium-Reportoff').style.display='none';
		
				
		document.getElementById('Student-Count').style.display='block';
		document.getElementById('report-displayDiv5').style.display='none';
		document.getElementById("Student-Countoff").disabled= false;
		document.getElementById('Student-Countoff').style.display='none';
		
		
		document.getElementById('Registered-Students').style.display='none';
		document.getElementById('report-displayDiv6').style.display='block';
		document.getElementById("Registered-Studentsoff").disabled= true;
		document.getElementById('Registered-Studentsoff').style.display='block';
		
	}
	
		
	function getStuReport()
{
//	alert(document.getElementById('selectedDegreeName').value);
	var count1=1;
	var Rcount=1;
	inum=0;
	rwcnt=1;
	count=0;
	
	if(dataRep["roleName"]!="ICT Center"){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>selected Degree Name :"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initial</th>";
					newStr +="<th style='border: 1px solid black;'>Student Personal Title</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Permanet Address</th>";			
					newStr +="<th style='border: 1px solid black;'>Student Date of birth</th>";
					newStr +="<th style='border: 1px solid black;'>Student Nationality</th>";
					newStr +="<th style='border: 1px solid black;'>Student Citizenship</th>";
					newStr +="<th style='border: 1px solid black;'>Student Employment</th>";
					newStr +="<th style='border: 1px solid black;'>Student Office Address</th>";
					newStr +="<th style='border: 1px solid black;'>Correspondence</th>";					
					newStr +="<th style='border: 1px solid black;'>Student Contact Lan</th>";
					newStr +="<th style='border: 1px solid black;'>Student Contact Mobile</th>";
					newStr +="<th style='border: 1px solid black;'>Student Contact Email</th>";
					newStr +="<th style='border: 1px solid black;'>Registered Status</th>";
					newStr +="<th style='border: 1px solid black;'>Notes</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";					
					newStr +="<th style='border: 1px solid black;'>University Title</th>";
					newStr +="<th style='border: 1px solid black;'>Faculty Title</th>";
					newStr +="<th style='border: 1px solid black;'>Degree Title</th>";
					newStr +="<th style='border: 1px solid black;'>Programme Type Title</th>";
					newStr +="<th style='border: 1px solid black;'>Medium</th>";
					newStr +="<th style='border: 1px solid black;'>Achedamic Year</th>";
					newStr +="</tr>";
					
				
				
		
			for( i=0; i<studentNoLength; i++){
		//alert(document.getElementById('achedamicYear').value);
		//alert(academicYearArr[i]);
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  &  document.getElementById('achedamicYear').value==academicYearArr[i] ){	
		//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en"){	
		
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;			
				
			}
			else if(document.getElementById('selectedDegreeName').value=="All Students"  &  document.getElementById('achedamicYear').value==academicYearArr[i] )
			{
				newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;	
			}
					
		
	}
	
}
newStr +="</table>";

if (Rcount==1)
{
	alert("No records to display ");
	return 0;
}
	
	fileSave(newStr);
}
else{
	var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>selected Degree Name :"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initial</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Personal Title</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					//newStr +="<th style='border: 1px solid black;'>Permanet Address</th>";			
					//newStr +="<th style='border: 1px solid black;'>Student Date of birth</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Nationality</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Citizenship</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Employment</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Office Address</th>";
					//newStr +="<th style='border: 1px solid black;'>Correspondence</th>";					
					//newStr +="<th style='border: 1px solid black;'>Student Contact Lan</th>";
					//newStr +="<th style='border: 1px solid black;'>Student Contact Mobile</th>";
					newStr +="<th style='border: 1px solid black;'>Student Contact Email</th>";
					//newStr +="<th style='border: 1px solid black;'>Registered Status</th>";
					//newStr +="<th style='border: 1px solid black;'>Notes</th>";
					//newStr +="<th style='border: 1px solid black;'>Application No</th>";					
					//newStr +="<th style='border: 1px solid black;'>University Title</th>";
					//newStr +="<th style='border: 1px solid black;'>Faculty Title</th>";
					newStr +="<th style='border: 1px solid black;'>Degree Title</th>";
					//newStr +="<th style='border: 1px solid black;'>Programme Type Title</th>";
					//newStr +="<th style='border: 1px solid black;'>Medium</th>";
					newStr +="<th style='border: 1px solid black;'>Achedamic Year</th>";
					newStr +="</tr>";
					
				
				
		
			for( i=0; i<studentNoLength; i++){
		//alert(document.getElementById('achedamicYear').value);
		//alert(academicYearArr[i]);
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  &  document.getElementById('achedamicYear').value==academicYearArr[i] ){	
		//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en"){	
		
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
          //  newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
            //newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
          //  newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;			
				
			}
			else if(document.getElementById('selectedDegreeName').value=="All Students"  &  document.getElementById('achedamicYear').value==academicYearArr[i] )
			{
				newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
          //  newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
          //  newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
           // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;	
			}
					
		
	}
	
}
newStr +="</table>";

if (Rcount==1)
{
	alert("No records to display ");
	return 0;
}
	
	fileSave(newStr);
}
	}	

function getTotStuReport()
{
//	alert(document.getElementById('selectedDegreeName').value);
	var count1=1;
	var Rcount=1;
	var Stotal=0;
	inum=0;
	rwcnt=1;
	count=0;
	
	
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Total Registerd Student From "+document.getElementById('achedamicYear1').value+" To "+document.getElementById('achedamicYear2').value+"</div>";
					//newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>#</th>";
					newStr +="<th style='border: 1px solid black;'>Year</th>";
					newStr +="<th style='border: 1px solid black;'>Total</th>";
					
					newStr +="</tr>";
					
				
				
		
			//for( i=0; i<studentNoLength; i++){
				
				var frm= document.getElementById('achedamicYear1').value;
				var to= document.getElementById('achedamicYear2').value;
				//alert(studentNoLength);
				for ( q=frm; q<=to; q++)
				{
					//alert(q);
					//alert(Stotal);
					//alert(TotStuReportLength);
					for( i=0; i<studentNoLength; i++){
					if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
	
					if (academicYearArr[i]==q)
					{
					Stotal++;
					}
					}
					
					}
					//alert("second"+Stotal);
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+q+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Stotal+'</td>';
					newStr +="</tr>";	
					newStr += "</div><dev><br>";
					inum++				
					Rcount++;	
					Stotal=0;
				}
				
		newStr +="</table>";

if (Rcount==1)
{
	alert("No records to display ");
	return 0;
}
	
	
	fileSave(newStr);
}


function getForStuReport()
{
Fcount=0;
 Mcount=0;
 FEcount=0;
 MEcount=0;
 TFcount=0;
 TMcount=0;
 TFEcount=0;
 TMEcount=0;
	//alert("ok");
      //  if(document.getElementById('selectedDocName').value=="Application List" ){
				var	Strnew ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					Strnew +="<div id='topics1' class='info'></div>";
					Strnew +="<div class='investLabel' style='text-align:center;font-weight:bold;'>FOREIGN POSTGRADUATE STUDENT ENROLMENT-"+document.getElementById('achedamicYear3').value+"</div>";
					Strnew +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:12px'>(Number of Foreign Student registered for postgraduate Courses)</div>";
                    Strnew +="</br>";
					Strnew +="<br><br><table style='margin-left:80px;' >";
					Strnew +="<tr>";
					Strnew +="<td style='width:120px;font-size:12px;'> University/HEI</td>";
					Strnew +="<td style='font-size:12px;border-collapse: collapse;border: 1px solid black;'> University of Kelaniya</td>";
					Strnew +="</tr>";
					Strnew +="</table>";
				    Strnew +="</br>";
					Strnew +="<table style='margin-left:80px;' >";
					Strnew +="<tr>";
					Strnew +="<td style='width:120px;font-size:12px;'>Faculty</td>";
					Strnew +="<td style='font-size:12px;width:200px;border-collapse: collapse;border: 1px solid black;'>Faculty of Graduate Studies</td>";
					Strnew +="<td style='font-size:12px;font-weight:bold;text-align:right'>Calender Year-"+document.getElementById('achedamicYear3').value+"</td>";
					Strnew +="</tr>";
					Strnew +="</table>";
				    Strnew +="<br><table style='border-collapse: collapse;border: 1px solid black;'>";
					Strnew +="<tr style='border: 1px solid black;'>";
					Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'>(1)</th>";
					Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>(2)</th>";
					Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>(3)</th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;' colspan='2'>(4)</th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;' colspan='2'>(5)</th>";
					Strnew +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>(6)</th>";
					Strnew +="</tr>"; 
					
					Strnew +="<tr style='border: 1px solid black;'>";
					Strnew +="<th style='border: 1px solid black;width:250px;font-size:12px;' rowspan='2'>Programme of Syudy</th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;' rowspan='2'>Full Time/Part Time</th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;' rowspan='2'>Nationality</th>";
					Strnew +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>New Registrations</th>";
					Strnew +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>Total Foreign Student Enrolment</th>";
					Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;' colspan='2'>Fees Charges for the year 2015(from all the students mentioned in column (5)</th>";
					Strnew +="</tr>"; 					

					Strnew +="<tr style='border: 1px solid black;'>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";					
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Curency&nbsp;</th>";					
					Strnew +="<th style='border: 1px solid black;width:125px;font-size:12px;'>Amount</th>";					
					Strnew +="</tr>"; 	

                    Strnew +="<tr style='border: 1px solid black;background-Color:#666666;font-size:12px;width:300px;' colspan='9'>Eg.PG Dip in Computer Science";
					//Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;colspan='9'>Eg.PG Dip in Computer Science</th>";				
					Strnew +="</tr>"; 

                    Strnew +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
					Strnew +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					Strnew +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";					
					Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";					
					Strnew +="<th style='border: 1px solid black;width:125px;font-size:12px;'></th>";		
					Strnew +="</tr>";
                    
					Strnew +="<tr style='border: 1px solid black;'>";				
					Strnew +="</tr>"; 
					
					Strnew +="<tr style='border: 1px solid black;background-Color:#666666;font-size:12px;width:300px' colspan='9'>MASTER DEGREE (MSC,MA,MBA,....)";
					//Strnew +="<th style='border: 1px solid black;width:75px;font-size:12px;colspan='9'>MASTER DEGREE (MSC,MA,MBA,....)</th>";	
					
					Strnew +="</tr>"; 
			
					
			for( i=0; i<applicationNoLength; i++){
				
			if(applicationNoArrForeign.indexOf(applicationNoArrForeign[i]) == applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[i]) || (applicationNoArrForeign.indexOf(applicationNoArrForeign[i]) != applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[i]) && applicationNoArrForeign.indexOf(applicationNoArrForeign[i])==i)){
			if(studentNationalityArrForeign[i] != studentNationalityArrForeign[i-1] && countryRegionArrForeign[i] !='Local' && countryRegionArrForeign[i] !="" && achedamicYearArrForeign[i]== document.getElementById('achedamicYear3').value ){	
			//alert(degreeCodeArrForeign);
			Strnew +="<tr style='border: 1px solid black;'>";
            Strnew +="<td style='border: 1px solid black;width:250px;font-size:12px;'>"+degreeTitleArrForeign[i]+"</td>"; 		
			Strnew +="<td style='border: 1px solid black;width:100px;font-size:12px;'>Full Time</td>";

			Strnew +="<td style='border: 1px solid black;width:100px;font-size:12px;'>"+studentNationalityArrForeign[i]+"</td>";
			       for( j=0; j<applicationNoLength; j++){
		              if(applicationNoArrForeign.indexOf(applicationNoArrForeign[j]) == applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[j]) || (applicationNoArrForeign.indexOf(applicationNoArrForeign[j]) != applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[j]) && applicationNoArrForeign.indexOf(applicationNoArrForeign[j])==j)){
			            if (degreeCodeArrForeign[i] == degreeCodeArrForeign[j] && studentNationalityArrForeign[i] == studentNationalityArrForeign[j] && studentNICArrForeign[j] >499 && achedamicYearArrForeign[j]== document.getElementById('achedamicYear3').value )
						{
							Fcount++;
							TFcount++;
						}
					    if (degreeCodeArrForeign[i] == degreeCodeArrForeign[j] && studentNationalityArrForeign[i] == studentNationalityArrForeign[j] && studentNICArrForeign[j] < 500 && achedamicYearArrForeign[j]== document.getElementById('achedamicYear3').value)
						{
							Mcount++;
							TMcount++;
						}
					  }
				   }
				  // alert(durationArrForeign[i]);
				    str = "";
                   str = durationArrForeign[i];
				   str=(str.split(" ",2)[str.split(" ",2).length-2]);
                   
				   var NewYear = '';
				   NewYear= document.getElementById('achedamicYear3').value - str;
				   //alert(NewYear);
			       for( j=0; j<applicationNoLength; j++){
		              if(applicationNoArrForeign.indexOf(applicationNoArrForeign[j]) == applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[j]) || (applicationNoArrForeign.indexOf(applicationNoArrForeign[j]) != applicationNoArrForeign.lastIndexOf(applicationNoArrForeign[j]) && applicationNoArrForeign.indexOf(applicationNoArrForeign[j])==j)){
			            if (degreeCodeArrForeign[i] == degreeCodeArrForeign[j] && studentNationalityArrForeign[i] == studentNationalityArrForeign[j] && studentNICArrForeign[j] >499 && NewYear-1 < achedamicYearArrForeign[j] < document.getElementById('achedamicYear3').value +1 )
						{
							FEcount++;
							TFEcount++;
						}
					    if (degreeCodeArrForeign[i] == degreeCodeArrForeign[j] && studentNationalityArrForeign[i] == studentNationalityArrForeign[j] && studentNICArrForeign[j] < 500 && NewYear-1 < achedamicYearArrForeign[j] < document.getElementById('achedamicYear3').value +1)
						{
							MEcount++;
							TMEcount++;
			            
					    }
					  }
				   }
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					if (str==1)
					{
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					var courseFee= Mcount + Fcount;
					}
					else{
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+MEcount+"</td>";
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+FEcount+"</td>";	
                    var courseFee= FEcount + MEcount;
					
					}
                    
					var TotalcourseFee1 = courseFeeArrForeign[i]* courseFee;
					TotalcourseFee2=TotalcourseFee2+TotalcourseFee1;
					Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;'>LKR</td>";					
					Strnew +="<td style='border: 1px solid black;width:125px;font-size:12px;'>"+TotalcourseFee1+"</td>";
			        Strnew +="</tr>";
					Mcount=0;
					Fcount=0;
					MEcount=0;
					FEcount=0;
					
		    }
			}
			}
			Strnew +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
            Strnew +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>"; 		
			Strnew +="<td style='border: 1px solid black;width:100px;font-size:12px;'></td>";	
            Strnew +="<td style='border: 1px solid black;width:100px;font-size:12px;'></td>";
			Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";
			Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";	
			Strnew +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>LKR</td>";					
			Strnew +="<td style='border: 1px solid black;width:125px;font-size:12px;font-weight:bold;'>"+TotalcourseFee2+"</td>";
            Strnew +="</tr>";			
		    Strnew +="</table>";
            Strnew +="<br><div class='investLabel' style='margin-left:350px;text-align:center;font-weight:bold;font-size:12px'>Certified by:</div>";
            Strnew +="<table style='margin-left:400px;border-collapse: collapse;border: 1px solid black;'>";
		   	Strnew +="<tr style='border: 1px solid black;height:20px;'>";
			Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Signature</th>";
			Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			Strnew +="</tr>"; 
			Strnew +="<tr style='border: 1px solid black;height:20px;'>";
			Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Nane</th>";
			Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			Strnew +="</tr>"; 
			Strnew +="<tr style='border: 1px solid black;height:20px;'>";
			Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Designation</th>";
			Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			Strnew +="</tr>"; 
			Strnew +="<tr style='border: 1px solid black;height:20px;'>";
			Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Contact Tel No</th>";
			Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			Strnew +="</tr>"; 
			Strnew +="<tr style='border: 1px solid black;height:20px;'>";
			Strnew +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Date</th>";
			Strnew +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			Strnew +="</tr>"; 
		    Strnew +="</table>";
		   // Strnew +="<br><div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-weight:bold;font-size:12px>_______________________________________________________________________________________________</div>";
            Strnew +="<br><br><br><hr style='width:750px;margin-left:10px;'></hr>"; 
			Strnew +="<div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-size:9px'>Please return completed shedule to the Head/MIS, MIS Division, University Grants Commission,20, Ward Place, Colombo 7.Tel 2685184/ E-mail: mis@ugc.ac.lk  This shedule can be downloaded from http://www.ugc.ac.lk under data collection Sfedules (Enrolment)</div>";


	
	fileSave(Strnew);
}


function getDegreeMediumReport()
{
	
			
			var	viewStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					viewStr +="<div id='topics1' class='info'></div>";
				    viewStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Degree Medium Report </div>";
					//viewStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    viewStr +="<br>";
				    viewStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					viewStr +="<tr style='border: 1px solid black;'>";
					viewStr +="<th style='border: 1px solid black;'>No.</th>";
					viewStr +="<th style='border: 1px solid black;'>Faculty Title</th>";
					viewStr +="<th style='border: 1px solid black;'>Degree Code</th>";
					viewStr +="<th style='border: 1px solid black;'>Degree Title</th>";
					viewStr +="<th style='border: 1px solid black;'>Sinhala</th>";
					viewStr +="<th style='border: 1px solid black;'>English</th>";
					
					viewStr +="</tr>";
			
			var no=0;
			//var medium=null;
			var temp=null;
		
			
			for(var i=0; i<degreeCodeLength; i++){
			if (degreeCodeArrDegree.indexOf(degreeCodeArrDegree[i]) == degreeCodeArrDegree.lastIndexOf(degreeCodeArrDegree[i]) || (degreeCodeArrDegree.indexOf(degreeCodeArrDegree[i]) != degreeCodeArrDegree.lastIndexOf(degreeCodeArrDegree[i]) && degreeCodeArrDegree.indexOf(degreeCodeArrDegree[i])==i)){
		
			if(document.getElementById('selectedFaculty').value=='All Programs'){
			
			temp=mediumArrDegree[i];
			//if(medium.charAt(3)=='/'){
			//	temp=medium.split("/");
			//}else
			//	temp=medium;
			count++;
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArrDegree[i]+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeCodeArrDegree[i]+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArrDegree[i]+'</td>';
			if(temp=='Sin'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			}
			else if(temp=='Eng'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			}
			else{
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Not Defined</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Not Defined</td>';
			}
				
			no++;
			viewStr +="</tr>";	
			viewStr += "</div><dev><br>";
				
				
			
			}
			else if(document.getElementById('selectedFaculty').value==facultyTitleArrDegree[i]){
			
				
			temp=mediumArrDegree[i];
			
			count++;
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArrDegree[i]+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeCodeArrDegree[i]+'</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArrDegree[i]+'</td>';
			if(temp=='Sin'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			}
			else if(temp=='Eng'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Y</td>';
			}
			else{
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Not Defined</td>';
			viewStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">Not Defined</td>';
			}
				
			no++;
			viewStr +="</tr>";	
			viewStr += "</div><dev><br>";
				
			
			}
			
			}
			
			}
			
				fileSave(viewStr);
	
}

function getStudentCountReport()
{
 Fcount=0;
 Mcount=0;
 FEcount=0;
 MEcount=0;
 TFcount=0;
 TMcount=0;
 TFEcount=0;
 TMEcount=0;
 TotalcourseFee2=0;
	var	SCountStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					SCountStr +="<div id='topics1' class='info'></div>";
					SCountStr +="<br>";
					SCountStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>(Number of Students registered for Postgraduate Courses as at "+document.getElementById('achedamicYear4').value+")</div>";
					//SCountStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:12px'>(Number of Foreign Student registered for postgraduate Courses)</div>";
                    SCountStr +="</br>";
					SCountStr +="<br><br><table style='margin-left:80px;' >";
					SCountStr +="<tr>";
					SCountStr +="<td style='width:120px;font-size:12px;'> University/HEI</td>";
					SCountStr +="<td style='font-size:12px;border-collapse: collapse;border: 1px solid black;'> University of Kelaniya</td>";
					SCountStr +="</tr>";
					SCountStr +="</table>";
				    SCountStr +="</br>";
					SCountStr +="<table style='margin-left:80px;' >";
					SCountStr +="<tr>";
					SCountStr +="<td style='width:120px;font-size:12px;'>Faculty</td>";
					SCountStr +="<td style='font-size:12px;width:200px;border-collapse: collapse;border: 1px solid black;'>Faculty of Graduate Studies</td>";
					SCountStr +="<td style='font-size:12px;font-weight:bold;text-align:right'>Calender Year-"+document.getElementById('achedamicYear4').value+"</td>";
					SCountStr +="</tr>";
					SCountStr +="</table>";
				    SCountStr +="<br><table style='border-collapse: collapse;border: 1px solid black;'>";			
					SCountStr +="<tr style='border: 1px solid black;'>";
					SCountStr +="<th style='border: 1px solid black;width:250px;font-size:12px;' rowspan='2'>Programme of Syudy</th>";
					SCountStr +="<th style='border: 1px solid black;width:100px;font-size:12px;' rowspan='2'>Full Time/Part Time</th>";
					SCountStr +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>New Registrations</th>";
					SCountStr +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>Total Enrolment</th>";

					SCountStr +="</tr>"; 					

					SCountStr +="<tr style='border: 1px solid black;'>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";					
					SCountStr +="</tr>"; 

					SCountStr +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
					SCountStr +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>";
					SCountStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";		
					SCountStr +="</tr>";

					SCountStr +="<tr style='border: 1px solid black;background-Color:#666666;'>";
					SCountStr +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Master Degree</th>";
					SCountStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					SCountStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";		
					SCountStr +="</tr>";
            		//alert(studentNoLength);		
            for( i=0; i<StudentCountLength; i++){
			if(studentNoArrCount.indexOf(studentNoArrCount[i]) == studentNoArrCount.lastIndexOf(studentNoArrCount[i]) || (studentNoArrCount.indexOf(studentNoArrCount[i]) != studentNoArrCount.lastIndexOf(studentNoArrCount[i]) && studentNoArrCount.indexOf(studentNoArrCount[i])==i)){
			if(degreeTitleArrCount[i]!=degreeTitleArrCount[i-1] && achedamicYearArrCount[i]== document.getElementById('achedamicYear4').value ){	
				//alert("ok");
			SCountStr +="<tr style='border: 1px solid black;'>";
            SCountStr +="<td style='border: 1px solid black;width:250px;font-size:12px;'>"+degreeTitleArrCount[i]+"</td>"; 		
			SCountStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'>Full Time</td>";

			       for( j=0; j<StudentCountLength; j++){
		              if(studentNoArrCount.indexOf(studentNoArrCount[j]) == studentNoArrCount.lastIndexOf(studentNoArrCount[j]) || (studentNoArrCount.indexOf(studentNoArrCount[j]) != studentNoArrCount.lastIndexOf(studentNoArrCount[j]) && studentNoArrCount.indexOf(studentNoArrCount[j])==j)){
			            if (degreeCodeArrCount[i] == degreeCodeArrCount[j] && nicArrCount[j] >499 && achedamicYearArrCount[j]== document.getElementById('achedamicYear4').value )
						{
							Fcount++;
							TFcount++;
						}
					    if (degreeCodeArrCount[i] == degreeCodeArrCount[j] && nicArrCount[j] < 500 && achedamicYearArrCount[j]== document.getElementById('achedamicYear4').value)
						{
							Mcount++;
							TMcount++;
						}
					  }
				   }
				   
				   var str1 = "";
                   str1 = durationArrCount[i];
				  str1=(str1.split(" ",2)[str1.split(" ",2).length-2]);
                   
				   var NewYear1 = 2;
				 NewYear1= document.getElementById('achedamicYear4').value - str1;
				   //alert(NewYear1);
			       for( j=0; j<StudentCountLength; j++){
		              if(studentNoArrCount.indexOf(studentNoArrCount[j]) == studentNoArrCount.lastIndexOf(studentNoArrCount[j]) || (studentNoArrCount.indexOf(studentNoArrCount[j]) != studentNoArrCount.lastIndexOf(studentNoArrCount[j]) && studentNoArrCount.indexOf(studentNoArrCount[j])==j)){
			            if (degreeCodeArrCount[i] == degreeCodeArrCount[j] && nicArrCount[j] >499 && NewYear1-1 < achedamicYearArrCount[j] < document.getElementById('achedamicYear4').value +1 )
						{
							FEcount++;
							TFEcount++;
						}
					    if (degreeCodeArrCount[i] == degreeCodeArrCount[j] && nicArrCount[j] < 500 && NewYear1-1 < achedamicYearArrCount[j] < document.getElementById('achedamicYear4').value +1)
						{
							MEcount++;
							TMEcount++;
			            
					    }
					  }
				   }
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					if (str1==1)
					{
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					}
					else{
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+MEcount+"</td>";
					SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+FEcount+"</td>";	
					
					}
                    
			        SCountStr +="</tr>";
					Mcount=0;
					Fcount=0;
					MEcount=0;
					FEcount=0;
					
		    }
			}
			}
			SCountStr +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
            SCountStr +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>"; 		
            SCountStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'></td>";
			SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";
			SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			SCountStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";	
            SCountStr +="</tr>";			
		    SCountStr +="</table>";
			SCountStr +="<br></br>"; 
			SCountStr +="<div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-size:9px'>Note: Students included in this schedule exclude foreign students. Excluded foreign student numbers should be shown separately in schedule ENRL_PF.  </div>";

            SCountStr +="<br><div class='investLabel' style='margin-left:350px;text-align:center;font-weight:bold;font-size:12px'>Certified by:</div>";
            SCountStr +="<table style='margin-left:400px;border-collapse: collapse;border: 1px solid black;'>";
		   	SCountStr +="<tr style='border: 1px solid black;height:20px;'>";
			SCountStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Signature</th>";
			SCountStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			SCountStr +="</tr>"; 
			SCountStr +="<tr style='border: 1px solid black;height:20px;'>";
			SCountStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Name</th>";
			SCountStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			SCountStr +="</tr>"; 
			SCountStr +="<tr style='border: 1px solid black;height:20px;'>";
			SCountStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Designation</th>";
			SCountStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			SCountStr +="</tr>"; 
			SCountStr +="<tr style='border: 1px solid black;height:20px;'>";
			SCountStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Contact Tel No</th>";
			SCountStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			SCountStr +="</tr>"; 
			SCountStr +="<tr style='border: 1px solid black;height:20px;'>";
			SCountStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Date</th>";
			SCountStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			SCountStr +="</tr>"; 
		    SCountStr +="</table>";
		   // SCountStr +="<br><div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-weight:bold;font-size:12px>_______________________________________________________________________________________________</div>";
            SCountStr +="<br><br><br><hr style='width:750px;margin-left:10px;'></hr>"; 
			SCountStr +="<div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-size:9px'>Please return the duly completed shedule to the Head/MIS, MIS Division, University Grants Commission,20, Ward Place, Colombo 7.Tel 2685184/2678730 E-mail: mis@ugc.ac.lk.  This schedule can be downloaded from http://www.ugc.ac.lk under MIS data collection Schedules (Enrolment)</div>";

		fileSave(SCountStr);
		 Fcount=0;
 Mcount=0;
 FEcount=0;
 MEcount=0;
 TFcount=0;
 TMcount=0;
 TFEcount=0;
 TMEcount=0;
//setTwo();	
}
var x;
var j;
function getRegisteredStudentsReport()
{
	//alert(achedamicYearLength);
	var	RStudentStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					RStudentStr +="<div id='topics1' class='info'></div>";
			        
					RStudentStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:12px'>University of Kelaniya</div>";
		            RStudentStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:11px'>Faculty of Graduate Studies</div>";
					RStudentStr +="<br><div class='investLabel' style='text-align:center;font-weight:bold;font-size:12px'>Details of Registered Students from "+document.getElementById('achedamicYear5').value+" to "+document.getElementById('achedamicYear6').value+" & Course Fee</div></br>";
					
					
				    RStudentStr +="<br><center><table style='border-collapse: collapse;border: 1px solid black;'>";
					
					RStudentStr +="<tr style='border: 1px solid black;'>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Faculty&nbsp;</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Course&nbsp;</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Course Fee&nbsp;</th>";
					x=document.getElementById('achedamicYear6').value-document.getElementById('achedamicYear5').value;
					for( j=0; j<x+1; j++){
           
						var y=document.getElementById('achedamicYear5').value;
						var n=Number(y);
						var t = n+j;
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+t+"</th>";
					
					

					}
					RStudentStr +="</tr>";
					
					RStudentStr +="<tr style='border: 1px solid black;'>";
					
					for( i=0; i<achedamicYearLength; i++){	
					
					if (degreeTitleArrRegistered[i] != degreeTitleArrRegistered[i-1])
					{
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+facultyTitleArrRegistered[i]+"</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+degreeTitleArrRegistered[i]+"</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+courseFeeArrRegistered[i]+"</th>";
					
					x=document.getElementById('achedamicYear6').value-document.getElementById('achedamicYear5').value;
					for( j=0; j<x+1; j++){
                    for( q=0; q<achedamicYearLength; q++){
						var y=document.getElementById('achedamicYear5').value;
						var n=Number(y);
						var t = n+j;
					
			        if(achedamicYearArrRegistered[q]==t && degreeTitleArrRegistered[i]== degreeTitleArrRegistered[q]){
					
			          newcount++;

					
                    
			        }
		            }
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+newcount+"</th>";
		            newcount=0;
                    }

					}
					
					RStudentStr +="</tr>";
				   
                }
				
				
              
                    
					RStudentStr +="<tr style='border: 1px solid black;'>";	
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>&nbsp;</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Total&nbsp;</th>";
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>&nbsp;</th>";
					
					
				  for( j=0; j<x+1; j++){
					var y=document.getElementById('achedamicYear5').value;
						var n=Number(y);
	
						var t = n+j;
						for( i=0; i<achedamicYearLength; i++){	
                    
			             if(achedamicYearArrRegistered[i]==t){
					
			          newcount++;
					  
					}
					
	
					
					
					}
					RStudentStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>"+newcount+"</th>";
					newcount=0;
					}

					RStudentStr +="</tr>";	
					
    RStudentStr +="</center></table>";
	
	fileSave(RStudentStr);
}

function fileSave(x)
{
	var csvData = new Array();
	
	csvData.push(x);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {
	  "type": "text/doc;charset=utf8;"			  
	});
	
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	  link.setAttribute("href", window.URL.createObjectURL(blob));
	  link.setAttribute("download", fileName);
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
	
}