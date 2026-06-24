// var image = "studentPhotos/"+degreeTitleArr[courseUnitCodeLength]+"/"+studentNICArr[courseUnitCodeLength]+".jpg";

 // image = dataRep["imageID"] ;
 // dataRep["imageID"] ="";
 
//imageIDArr= new Array();

dataRep["selectedprogrammeType"]="";
dataRep["selectedDegree"] = "";
var MaleChecked="";
var FemaleChecked=""

 dataRep["selectedCompulsory"] = new Array();
/*----Calculate Date of Birth _ Starts*/
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth()+1;
var curyear = dat.getFullYear();

function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}
function datediff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
	 y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}
function calage()
{
	doc = document.maintainStudentRegistration;
	var calday = doc.dobDD.options[doc.dobDD.selectedIndex].value;
	var calmon = doc.dobMM.options[doc.dobMM.selectedIndex].value;
	var calyear = doc.dobYYYY.options[doc.dobYYYY.selectedIndex].value;
	var curd = new Date(curyear,curmon-1,curday);
	var cald = new Date(calyear,calmon-1,calday);
	var diff =  Date.UTC(curyear,curmon,curday,0,0,0) - Date.UTC(calyear,calmon,calday,0,0,0);
	var dife = datediff(curd,cald);
	doc.studentAge.value=dife[0]+" YY, "+dife[1]+" MM, "+dife[2]+" DD";
	dataRep['studentAge'] = doc.studentAge.value;
}
var doc = document.maintainStudentRegistration;
/*----Calculate Date of Birth _ Ends*/

function refreshStudentRegistration(){
dataRep['universityTitle'] = dataRep['facultyTitle'] = dataRep['departmentTitle'] = "";
dataRep["programmeTypeTitle"] = dataRep["degreeTitle"] = dataRep["degreeTitle"] ="";
dataRep["studentNo"] = dataRep["academicYear"] = dataRep["batchNo"] ="";
}
			
		
		
		function formStudentRegistration(dsp){
		title = "Register Selected Student";
		str = "";

		if(dsp == "formStudentRegistration") {
		
			str  = "<div id='addStudent'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainStudentRegistration" >';
			
			str += '<center>';

			str += "<div  style='margin:0 auto; width:100; height:100; clear:both;'>";

			str += "<div id='dImage'>";
			str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';
			str += "<img style='float:left;width:100; height:100' src='studentPhotos/"+dataRep["degreeTitle"]+"/"+dataRep["studentNIC"]+".jpg'></fieldset></div></center>";
			str += "</div>";			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>University</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='University' style='clear:none;'>"+dataRep['universityTitle']+"</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='faculty' style='clear:none;'>"+dataRep['facultyTitle']+"</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'   id='department' style='clear:none;'>"+dataRep['departmentTitle']+"</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Programme Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;  '  >";
			str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='studentName'>"+dataRep["studentName"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;  '  >";
			str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='longIdentifier'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentNo' id='studentNo' value= '"+dataRep["studentNo"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='academicYear' id='academicYear' value= '"+dataRep["academicYear"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div class='longIdentifier'>Batch No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='batchNo' id='batchNo' value= '"+dataRep["batchNo"]+"'  onchange='dataRep[this.name]=this.value;' disabled='disabled' "+fieldDisabled+">";
			str += "</div>";
			
				
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Address</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['studentPermanentAddress']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
	
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<input type='button' class='btn' value='Save'  onclick=formStudentRegistrationsendForm('addStudent');>";
			
			str += "<input type='button' class='btn' value='Print Student ID'  onclick='getLetterPrint2()'>";  
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');refreshStudentRegistration();>';
			
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
			
		}

		return str;
	}
	


	function formStudentRegistrationvalidate(frm){
//alert("val awa");
		var error = 0;
		var pattn=/[^0123456789]/g;

		 if(frm == "addStudent" ){

			if(frm == "addStudent"){
				dsp = "formStudentRegistration";
			} 

			doc = document.maintainStudentRegistration;
			document.getElementById("msgArea").innerHTML = "";
			
			if(dataRep["studentNo"].trim().length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Student Number with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

 
			

			if(dataRep["studentNIC"].trim() != "" && (pattn.test(dataRep["studentNIC"].substring(0,9)) ||
			  (dataRep["studentNIC"].trim().substring(9,10) != "V" && dataRep["studentNIC"].trim().substring(9,10) != "X" ) ||
			   dataRep["studentNIC"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Incorrect NIC number.</div>";
					error++;
				}

			}



			
			if(dataRep["studentName"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E003") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E003 : Student name with non-blank.</div>";
					error++;
				}
			}			
			
			
			if(dataRep["studentSex"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E004") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E004 : Student sex with non-blank.</div>";
					error++;
				}
			}			
			

			
			
			if(dataRep["studentAge"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E005") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E005 : Student age with non-blank.</div>";
					error++;
				}
			}				




			if(dataRep["studentPermanentAddress"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E006") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E006 : Student address line 01 with non-blank.</div>";
					error++;
				}
			}



			if(dataRep["studentAddressLine02"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E007") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E007 : Student address line 02 with non-blank.</div>";
					error++;
				}
			}



		
			

			if(dataRep["studentContactLan"].trim() != "" && (pattn.test(dataRep["studentContactLan"]) ||
			   dataRep["studentContactLan"].trim().substring(0,1) != "0" || 
			   dataRep["studentContactLan"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E008") == -1){
				 
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E008 : Incorrect Telephone number.</div>";
					error++;
				}

			}



			if(dataRep["studentContactMobile"].trim() != "" && (pattn.test(dataRep["studentContactMobile"]) ||
			   dataRep["studentContactMobile"].trim().substring(0,1) != "0" || 
			   dataRep["studentContactMobile"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E009") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E009 : Incorrect Telephone number.</div>";
					error++;
				}

			}
			
			
			
			if((dataRep["studentContactEmail"] == "")){
				if((document.getElementById("msgArea").innerHTML).indexOf("E010") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E010 : Student email with non-blank.</div>";
					error++;
			}
		}
			
	}		
		if(error > 0 && error != ""){
			showMenu(dsp);
		} else {
			formStudentRegistrationsendForm(frm);
		}
		
}
	
	function formStudentRegistrationsendForm(frm){

	var doc, dataStr;

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}

		if(frm == 'addStudent'){
 
			doc = document.maintainStudentRegistration;
			dataStr += "&interface="+frm;
			
			dataStr += "&universityCode="+dataRep["universityCode"];
			dataStr += "&facultyCode="+dataRep["facultyCode"];
			dataStr += "&departmentCode="+dataRep["departmentCode"];
			dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			dataStr += "&degreeCode="+dataRep["degreeCode"];//alert(degreeCodeArr[doc.selectedDegree.selectedIndex]);
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&studentName="+dataRep["studentName"];	
			dataStr += "&studentSex="+dataRep["studentSex"];
			dataStr += "&studentAge="+dataRep["studentAge"];
			//dataStr += "&studentDateofbirth="+doc.dobYYYY.value+"/"+doc.dobMM.value+"/"+doc.dobDD.value;//alert(dataStr);
			dataStr += "&studentDateofbirth="+dataRep["studentDOB"];
			dataStr += "&studentPermanentAddress="+dataRep["studentPermanentAddress"];
			//dataStr += "&studentAddressLine02="+dataRep["studentAddressLine02"];
			dataStr += "&studentContactLand01="+dataRep["studentContactLan"];
			dataStr += "&studentContactMobile01="+dataRep["studentContactMobile"];
			dataStr += "&studentContactEmail="+dataRep["studentContactEmail"];
			dataStr += "&academicYear="+dataRep["academicYear"];
			dataStr += "&batchNo="+dataRep["batchNo"];
			dataStr += "&registered="+"yes";

//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}


	function getLetterPrint2(){
	var gtDischargeDiv = document.getElementById('addStudent').innerHTML;

	var gtDischargeDiv = document.getElementById('addStudent').innerHTML;



var img=document.getElementById('dImage').innerHTML;
var name=document.getElementById('studentName').innerHTML;
var sNo=document.getElementById('studentNo').value;
var aYear=document.getElementById('academicYear').value;
 	
     	newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css"></style>');
		doc.write('</head><body>');    

		doc.write('<div style=" width: 1200px; max-width: 1200px; min-width: 900px; margin: 0 auto;  ">');						
		
		doc.write('<div style="border:1px solid black; border-radius:4px; width:400px; height:200; float:left; ">');				
		
		doc.write('<div style="width:395px; height:195px; background:#f5f5f5; float:left; margin-top:2px; margin-left:2px; ">');		

		doc.write('<div style="width:100%; height:70px;  float:left;"><img src="img/id.jpg" style="height:100%; width:100%;"></div>');		

		doc.write('<div style="width:100%; height:5px; background:#ffffff;  float:left;">&nbsp;</div>');


		doc.write('<div style="width:100%;   float:left;">');	  
		
		doc.write('<div style="width:100px; height:100px;   float:left;">');
		doc.write(img);		
		doc.write('</div>');				
		
		doc.write('<div style="width:295px; text-align:right;   height:95px;  float:left;">');	
		
		doc.write('<div style="width:295px; text-align:right;   float:left;"><font style="font-family:arial;   font-size:18px;">');
		doc.write('Ms  ',name);				
		doc.write('</font></div>');		
		doc.write('<div style="width:295px; text-align:right;   float:left;"><font style="font-family:arial;   font-size:20px;">');
		doc.write(sNo);
		doc.write('</font></div>');
		doc.write('<div style="width:295px; text-align:right;  float:left;"><font style="font-family:arial;   font-size:15px;">');
		doc.write('Date of Registration ',aYear);
		doc.write('</font></div>');		
		doc.write('<div style="width:295px; text-align:right;    float:left;">');

		doc.write('<div style="width:90px; text-align:right;    float:left;"><font style="font-family:arial; color:#c8c8c8; font-size:25px;">');
		doc.write(aYear);
		doc.write('</font></div>');

		doc.write('<div style="width:205px; text-align:right;    float:left;"><font style="font-family:arial;   font-size:15px;">');
		doc.write('Date of Expire ',aYear);
		doc.write('</font></div>');		

		doc.write('</div>');
		doc.write('</div>');		
		doc.write('</div>');		
		doc.write('</div>');
		doc.write('</div>');


		doc.write('<div style="width:100%; height:50px;   float:left;">&nbsp;</div>');				
///////////////////////////////////////////////////////////////////////		
		doc.write('<div style=" width: 1200px; max-width: 1200px; min-width: 900px; margin: 0 auto;  ">');						
		
		doc.write('<div style="border:1px solid black; border-radius:4px; width:400px; height:200; float:left; ">');				

		
		doc.write('<div style="width:395px; height:195px; background:#f5f5f5; float:left; margin-top:2px; margin-left:2px; ">');		

/////////////////////////////////////////
		doc.write('<div style="width:395px;  background:#f5f5f5; float:left; ">');				
		doc.write('<div style="width:20%;  background:#f5f5f5; float:left; "><font style="font-family:arial;   font-size:15px;">Address</font>');				
		doc.write('</div>');		
		doc.write('<div style="width:80%;  background:#f5f5f5; float:left; ">');				
		doc.write(dataRep["studentPermanentAddress"]+","+dataRep["studentAddressLine02"]);				
		doc.write('</div>');
		
		doc.write('<div style="width:20%;  background:#f5f5f5; float:left; "><font style="font-family:arial;   font-size:15px;">NIC</font>');				
		doc.write('</div>');		
		doc.write('<div style="width:80%;  background:#f5f5f5; float:left; ">');				
		doc.write(dataRep["studentNIC"]);						
		doc.write('</div>');						
		doc.write('</div>');		
//////////////////////////////////////////////
		doc.write('<div style="width:100%; height:5px; background:#f5f5f5;  float:left;">&nbsp;</div>');
/////////////////////////////////////////
		// doc.write('<div style="width:395px;  background:#f5f5f5; float:left; "><font style="font-family:arial; font-size:10px; ">');	
		// doc.write('');						
		// //doc.write('<ol>');
		// doc.write('This card is the property of the University of Kelaniya , Sri Lanka');
		// doc.write('On termination of studentship this card is to be invalid');		
		// //doc.write('<li></li>');
		// //doc.write('</ol>');		
		// doc.write('</font></div>');				
/////////////////////////////////////////
		doc.write('<div style="width:100%; height:5px; background:#f5f5f5;  float:left;">&nbsp;</div>');		
/////////////////////////////////////////
		doc.write('<div style="width:395px;  background:#f5f5f5; float:left;   text-align:right; "><font style="font-family:arial; font-size:15px; ">...................................<br>Senior Assistant Registrar');						
		doc.write('</font></div>');
		
		doc.write('<div style="width:395px;  background:#f5f5f5; float:left; "><font style="font-family:arial; font-size:10px; ">');	
		doc.write('');						
		//doc.write('<ol>');
		doc.write('This card is the property of the University of Kelaniya , Sri Lanka');
		doc.write('On termination of studentship this card is to be invalid');		
		//doc.write('<li></li>');
		//doc.write('</ol>');		
		doc.write('</font></div>');	
///////////////////////////////////

		doc.write('</div>');



		
		doc.write('</div>');		
		doc.write('</div>');				
		

///////////////////////////////////////////////////////////////////////
		doc.write('<div style="width:100%; height:50px;   float:left;">&nbsp;</div>');		
		
		doc.write('<div style="width:100%;    float:left;">');
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write('</div>');
		doc.write('</body></html>');
		doc.close();
	//alert('hello');	
}
	
	
	
	

	
	
	
	
