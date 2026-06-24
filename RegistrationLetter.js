dataRep["subTotal1"] = dataRep["subTotal2"] = dataRep["tourFee"] = dataRep["2%NBT1"] = dataRep["2%NBT2"] = dataRep["grandTotal"] = dataRep["txtbox"] ="";
dataRep['fullpaymentDeadlineDate'] = dataRep['halfpaymentDeadlineDate'] = dataRep['commenceDate'] ="";

function refreshreturn(){

	dataRep["studentNIC"] = dataRep["applicationNo"] = dataRep["studentName"] = dataRep["studentSex"] = "";
	dataRep["studentNo"] = "";//dataRep["universityCode"]=dataRep["universityTitle"]=dataRep["facultyCode"]=dataRep["facultyTitle"]="";
	//dataRep["departmentCode"]=dataRep["departmentTitle"]=dataRep["programmeTypeCode"]=dataRep["programmeTypeTitle"]="";
	//dataRep["degreeCode"]=dataRep["degreeTitle"]="";
	dataRep['dobYYYY'] = dataRep['dobMM'] = dataRep['dobDD'] ="";
	dataRep["studentAge"] = dataRep["studentAddressLine01"]=dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]="";
	dataRep["selectedprogrammeType"]= dataRep['selecteduniversity'] = "";
	MaleChecked = FemaleChecked = "";
	
	sendForm('data4addSelectedStudent');
	sendForm('data4SelectedStudent');
	}




function formRegistrationLetter(dsp) {

	str = "";
 var keyDisabled = fieldDisabled = "";

		if(dsp == "updateRegistrationLetter") { 
		//if(dsp == "formRegistrationLetter") { 
	keyDisabled = "Disabled";

		str  = "<div id='updateRegistrationLetter'>";
		str += '<form name="maintainaddRegistrationLetter">';
str += "<div style='width:80%; margin:0 auto; float:center; '>";			
			
		str += "<table ><tr><td>"
		str += '<center><img src ="img/nciNew.gif" style="width:150px; height:150px;"/></center>';
		str += '<center><h3>UNIVERSITY OF KELANIYA</h3></center>'
		str += '<center><h4>Facalty of Graduate Studies</h4></center>'
		str += '<center><h5>Kelaniya,Sri Lanka</h5></center>'


		
		str +="<div style='float:left; width:100%;'><font style= 'font-size:12px;'>";		

		str +="<div style='background:; height:; width:100%; float:left; padding:10px; '><h2>Admission to the&nbsp;<span>"+dataRep['degreeTitle']+"</span>-<span>"+dataRep['academicYear']+"</span></h2></div>";
		
		str +="<div style='background:; height:; width:100%; float:left; padding:10px; '>Reference to the&nbsp;<span>"+dataRep['degreeTitle']+"</span>&nbsp;application sent by you on the above subject.</div>";		

		str +="<div style='background:; height:; width:100%; float:left; padding:10px; '>I am pleased to inform you that,subject to the approval of the University Senate,you have been selected to follow the above&nbsp;<span>"+dataRep['programmeTypeTitle']+"</span>&nbsp;programme conducted by the&nbsp;<span>"+dataRep['facultyTitle']+"</span>,University of Kelaniya.</div>";				
		
		str +="<div style='float:left; width:100%; padding:10px; '><p>";		
		str += "<div style='background:; float:left; '>The details regarding inaugural ceremony will be informed for paid applicants and the study programme will be commenced in &nbsp;</div>";
		str += "<div style='background:; float:left; '>&nbsp;<span>"+dataRep['commenceDate']+"</span>&nbsp;</div>";
		str += "<div style='background:;  float:left; '>The course fee structure is as follows</div>";	
		str +="</p><div>";				
		
		str +="</font></div>";
		
		str +="<font style= 'font-size:12px;'>";	

		str += "<div style='width:100%; height:20px;  float:left;'>&nbsp;</div>";			

		
		str += "<center><div style='width:80%;  float:center;'    >";
	
		str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Cost Componet</div>";
		str += "<div style='width:25%; float:left; border-right:1px solid black; '>Rs</div>";
		str += "<div style='width:25%; float:left;  '>To be paid</div>";		
		str += "</div>";	

		for (var i=0; i<studentNICLength; i++) {
			if (categoryCodeArr.indexOf(categoryCodeArr[i])== categoryCodeArr.lastIndexOf(categoryCodeArr[i]) || (categoryCodeArr.indexOf(categoryCodeArr[i])!= categoryCodeArr.lastIndexOf(categoryCodeArr[i]) && categoryCodeArr.indexOf(categoryCodeArr[i])== i)){
				if (rate1Arr[i] !=""){	
		
			str += "<div style='width:100%; height:20px; float:left;  text-align:left;  border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
			str += "<div style='width:45%; float:left; border-right:1px solid black; '>"+categoryTitleArr[i]+"</div>";
			str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='amount' value= '"+rate1Arr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:25%; float:left; border-left:1px solid black; '>&nbsp;</div>";		
			str += "</div>";
			
			
				}
			}
		}
		
	
		str += "<div style='width:100%; float:left; text-align:left; border-bottom:1px solid black;  border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Grand total</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'  name='fullTotalAmount' value= '"+dataRep["fullTotalAmount"]+"'  onchange='dataRep[this.name]=this.value'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '>&nbsp;</div>";		
		str += "</div>";
		str +="</div></center>";		
		str += "<br><br></div>";	
		str += "<div style='width:100%; height:20px;  float:left;'>&nbsp;</div>";	

//////////////////////////////////////////////////
		str +="<div style='float:left; width:100%; padding:10px; '><font style= 'font-size:12px;'><p>";		
		str += "<div style='background:; float:left; '>Candidates are requested to pay &nbsp;<span>"+dataRep["fullTotalAmount"]+"</span>&nbsp;</div>";
		str += "<div style='background:; float:left; '>or part payment of &nbsp;<span>"+dataRep["subTotalAmount"]+"</span>&nbsp;</div>";
		str += "<div style='background:; float:left; '>for joining to the course on or before&nbsp;</div>";
		str += "<div style='background:; float:left; '>&nbsp;<span>"+dataRep["fullpaymentDeadlineDate"]+"</span>&nbsp;to the University of Kelaniya -</div>";
		str += "<div style='background:;  float:left; '>Earned Income Account Number 055-100180669229 at <b>Kelaniya Branch </b>of the peoples bank.(please use attached paying -in-vouchers(PIV)) Candidates who make part payment are required to pay the balance&nbsp;<span>"+dataRep["subTotalAmount"]+"</span>&nbsp; before &nbsp;<span>"+dataRep["halfpaymentDeadlineDate"]+"</span>&nbsp;</div>";
		str += "<div style='background:; float:left; '></div>";
		str += "<div style='background:; float:left; '></div>";
		str += "<div style='background:;  float:left; '>Please note to send the certified copies of following documents along with the first copy of the paying in vocher.[Educational certificates, Birth certificate ,certificate in proof of professional Qualification (if any), National identity card and a photograph(2cm x 2 1/2 cm in size)].Also please fill the form sent to you according to the rules  mentioned in it.</div>";		
		str +="</p></font><div>";				
		str += "<div style='width:100%; height:50px;  float:left;'>&nbsp;</div>";					
		str += "<div  style='width:100%; height:20px; float:left;'>Yours sincerely,</div>";
		str += "<div style='width:100%; height:20px;  float:left;'&nbsp;<span>Assistant Registrar(For Registrar)</span>&nbsp;</div>";
		str += "<div style='width:100%; height:20px;  float:left;'&nbsp;<span>Faculty of Graduate Studies</span>&nbsp;</div>";	
		str += "<div style='width:100%; height:20px;  float:left;'&nbsp;<span>University of Kelaniya</span>&nbsp;</div>";			
		str += "</font></div><br><br><br>";
		str += "<div></div>";
			

		str += '<input type="button" class="btn" style="display:none;" id="issue" value="Issue Letter" onclick=formRegistrationLettersendForm("updateRegistrationLetter");>';
			
		str += '<input type="button" class="btn" id="print" value="Print Letter" onclick="getLetterPrint();displayButtonIssue();">';
		str += '<input type="button" class="btn" id ="return" value = "Return" onclick = refreshreturn();showMenu('+"'formStudentMenu'"+');>';	
		//str += '<input type="button" class="btn" id ="return" value = "Add Next Student" onclick = refreshreturn();>';	
		str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
		str += '</center>';
		str += '</form>';
		str += '</div>';
		str += '</td></tr></table>';
		str += "</div>";
		
		}

		return str;
		}
		
		
		function formRegistrationLettersendForm(frm){
		
		var doc, dataStr;
		var letterStr = "";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		} else if(frm.substring(0,5) == 'data4'){
				dataStr = "action=get&interface="+frm;
		}
		
		if(frm == 'updateRegistrationLetter'){
		
			doc = document.maintainaddRegistrationLetter;
			dataStr = "action=update&interface="+frm;
	
			for (var i=0; i<studentNICArr.length; i++){
				if(studentNICArr[i] == dataRep["studentNIC"]){
					//alert(dataRep["studentNIC"]);
		
					dataStr +="&universityCode="+dataRep['universityCode']+"&facultyCode="+dataRep['facultyCode']+"&departmentCode="+dataRep['departmentCode']+"&degreeCode="+dataRep['degreeCode']+"&studentNIC="+dataRep['studentNIC'];
						
					dataStr += "&commenceDate="+dataRep['commenceDate'];
					dataStr += "&fullpaymentDeadlineDate="+dataRep['fullpaymentDeadlineDate'];
					dataStr += "&halfpaymentDeadlineDate="+dataRep['halfpaymentDeadlineDate'];	//alert(dataStr);	

				}
				// letterDataArr[i] = dataStr + letterStr;
				// alert(letterDataArr[i]);	
			}
			
			
			// if(frm == 'updateRegistrationLetter'){
				// for(z=0; z<studentNICArr.length; z++){
					// if(studentNICArr[z] == dataRep["studentNIC"]){
					// if(letterDataArr[z]!= ""){
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", letterDataArr[z]);
					// }
					// }
				// }	
			// }
		}
	
		
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 		
			
	return 0;
		
}
		
			
	function getLetterPrint(){
	var gtDischargeDiv = document.getElementById('updateRegistrationLetter').innerHTML;

	var gtDischargeDiv = document.getElementById('updateRegistrationLetter').innerHTML;
	
	newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">label{font-family:tahoma;font-size:12px}.investView_l,.investLabel_l{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:1000px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write('<h2 style="text-align:center;"></h2>');
		doc.write(gtDischargeDiv);
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write('</body></html>');
		doc.close();
		
}
	

function displayButtonIssue(){
	
		document.getElementById('issue').style.display='block';
		
}	
	