dataRep['dummyUniversity']=new Array
dataRep['dummyUniversity']=["A","B","C","D","E ","F"];
dataRep['facultyCode']=dataRep['facultyTitle']= dataRep['selecteduniversity']="";

dataRep["paymentRate"]=dataRep["RegstationFee"]=dataRep["ApplicationFee"]=dataRep["ExaminationFee"]=dataRep["CourseFee"]="";
dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";

dataRep['academicYear']=dataRep["degreeTitle"]=dataRep["programmeTypeTitle"]= dataRep["coursefeeType"] = "";
dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
dataRep["selectedPayment"] ="";

var facultyStr ="";
var StudentChecked = StaffChecked = "";
var TotalChecked = InstalmentChecked = "";

var academicYearList = degreeTitleList = programmeTypeTitleList = "";

function calculate(){
	var doc=document.maintainpaymentDetails; 
	if(document.getElementById('total').checked == true){
	 
	var cFeeTl=parseFloat(doc.courseFeeTotal.value);
	var RegFee=parseFloat(doc.RegstationFee.value);
	var AppFee=parseFloat(doc.ApplicationFee.value);
	var ExamFee=parseFloat(doc.ExaminationFee.value);
	var LFeeRefundable=parseFloat(doc.libraryFeeRefundable.value);
	var LFeeNonRefundable=parseFloat(doc.libraryFeeNonRefundable.value);
	var TstBkFe=parseFloat(doc.textbookFee.value);
	var IUsage=parseFloat(doc.internetFee.value);

	doc.studentTotalAmount.value=(cFeeTl)+(RegFee)+(AppFee)+(ExamFee)+(LFeeRefundable)+(LFeeNonRefundable)+(TstBkFe)+(IUsage);
	dataRep["studentTotalAmount"]=doc.studentTotalAmount.value;
	}
	else{

	var RegFee=parseFloat(doc.RegstationFee.value);
	var AppFee=parseFloat(doc.ApplicationFee.value);
	var ExamFee=parseFloat(doc.ExaminationFee.value);
	var LFeeRefundable=parseFloat(doc.libraryFeeRefundable.value);
	var LFeeNonRefundable=parseFloat(doc.libraryFeeNonRefundable.value);
	var TstBkFe=parseFloat(doc.textbookFee.value);
	var IUsage=parseFloat(doc.internetFee.value);
	var first=parseFloat(doc.firstinstalment.value);
	var second=parseFloat(doc.secondinstalment.value);
	var third=parseFloat(doc.thirdinstalment.value);

	doc.studentTotalAmount.value=(first)+(second)+(third)+(RegFee)+(AppFee)+(ExamFee)+(LFeeRefundable)+(LFeeNonRefundable)+(TstBkFe)+(IUsage);
	dataRep["studentTotalAmount"]=doc.studentTotalAmount.value;
	}
}

function setValuesForPayment(){
	for(i=0; i<degreeCodeLength; i++){

		if(dataRep['degreeTitle']==degreeTitleArr[i]){

			dataRep['degreeCode']=degreeCodeArr[i];
			dataRep['academicYear']=academicYearArr[i];
			dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			dataRep['programmeTypeTitle']=programmeTypeTitleArr[i];
			dataRep['universityCode'] = universityCodeArr[i];
			dataRep['universityTitle'] = universityTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			
		
		}
	}
}

function formPaymentDetails(dsp){
 
  keyDisabled = fieldDisabled = "";
		title = "Add Payment Details";
		str = "";

	if(dsp == "addpayment" || dsp == "updatepayment" || dsp == "deletepayment") {

			if(dsp == "updatepayment" || dsp == "deletepayment"){
			//alert(dsp);
				title = "Update Payment Details ";
				
				if(dsp == "deletepayment"){
				//alert(dsp);
					title = "Delete Payment Details";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedPayment"] != "0"){
					dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedPayment"]-1];
					dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedPayment"]-1];
					dataRep["academicYear"] = academicYearArr[dataRep["selectedPayment"]-1];
					dataRep["programmeTypeCode"] = programmeTypeCodeArr[dataRep["selectedPayment"]-1];
					dataRep["programmeTypeTitle"] = programmeTypeTitleArr[dataRep["selectedPayment"]-1];
					dataRep["paymentRate"] = paymentRateArr[dataRep["selectedPayment"]-1];
					dataRep["RegstationFee"] = registrationFeeArr[dataRep["selectedPayment"]-1];
					dataRep["ApplicationFee"] = applicationFeeArr[dataRep["selectedPayment"]-1];
					dataRep["ExaminationFee"] = examinationFeeArr[dataRep["selectedPayment"]-1];
					dataRep["courseFeeTotal"] = courseFeeTotalArr[dataRep["selectedPayment"]-1];
					dataRep["firstinstalment"] = firstinstalmentArr[dataRep["selectedPayment"]-1];
					dataRep["secondinstalment"] = secondinstalmentArr[dataRep["selectedPayment"]-1];
					dataRep["thirdinstalment"] = thirdinstalmentArr[dataRep["selectedPayment"]-1];
					dataRep["libraryFeeRefundable"] = libraryFeeRefundableArr[dataRep["selectedPayment"]-1];
					dataRep["libraryFeeNonRefundable"] = libraryFeeNonRefundableArr[dataRep["selectedPayment"]-1];
					dataRep["textbookFee"] = textbookFeeArr[dataRep["selectedPayment"]-1];
					dataRep["internetFee"] = internetFeeArr[dataRep["selectedPayment"]-1];
					dataRep["studentTotalAmount"] = studentTotalAmountArr[dataRep["selectedPayment"]-1];

				}

			} 

			str  = "<div id='addpayment'>";
			str += "<table ><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainpaymentDetails">';

		for(degreeLoop=0; degreeLoop< degreeCodeLength; degreeLoop++){
			
			//if (programmeTypeCodeArr.indexOf(programmeTypeCodeArr[degreeLoop]) == programmeTypeCodeArr.lastIndexOf(programmeTypeCodeArr[degreeLoop]) || (programmeTypeCodeArr.indexOf(programmeTypeCodeArr[degreeLoop]) != programmeTypeCodeArr.lastIndexOf(programmeTypeCodeArr[degreeLoop]) && programmeTypeCodeArr.indexOf(programmeTypeCodeArr[degreeLoop])==degreeLoop)){
				//programmeTypeTitleList += "<option value='"+programmeTypeTitleArr[degreeLoop]+"'>";
			//}
			
			//if (studentNoArr.indexOf(studentNoArr[degreeLoop]) == studentNoArr.lastIndexOf(studentNoArr[degreeLoop]) || (studentNoArr.indexOf(studentNoArr[degreeLoop]) != studentNoArr.lastIndexOf(studentNoArr[degreeLoop]) && studentNoArr.indexOf(studentNoArr[degreeLoop])==degreeLoop)){
				degreeTitleList += "<option value='"+degreeTitleArr[degreeLoop]+"'>";
			//}
			//if (academicYearArr.indexOf(academicYearArr[degreeLoop]) == academicYearArr.lastIndexOf(academicYearArr[degreeLoop]) || (academicYearArr.indexOf(academicYearArr[degreeLoop]) != academicYearArr.lastIndexOf(academicYearArr[degreeLoop]) && academicYearArr.indexOf(academicYearArr[degreeLoop])==degreeLoop)){
				//academicYearList += "<option value='"+academicYearArr[degreeLoop]+"'>";
			//}
		}
				
			str +="<div id = 'noprint' class ='section1'><fieldset class='field'><legend class='fieldHead'></legend><div style='clear:both'>";
			
			// str +="<div class='longIdentifier'>Programme Type</div>";
			// str +="<div class='viewArea'>";
		
			// str +="<input type='text' name='programmeTypeTitle' list='listprogrammeTypeTitle' id='programmeTypeTitle' value= '"+dataRep["programmeTypeTitle"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForPayment();'>";
			// str += "<datalist id='listprogrammeTypeTitle'>"+programmeTypeTitleList+"</datalist>";
			// str += "</div><br>";
			
			str +="<div class='longIdentifier'>Degree Title</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='degreeTitle' list='listdegreeTitle' id='degreeTitle' value= '"+dataRep["degreeTitle"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForPayment();'>";
			str += "<datalist id='listdegreeTitle'>"+degreeTitleList+"</datalist>";
			str += "</div></div><br>";
			
			// str +="<div class='longIdentifier'>Academic Year</div>";
			// str +="<div class='viewArea'>";
			
			// str +="<input type='text' name='academicYear' list='listacademicYear' id='academicYear' value= '"+dataRep["academicYear"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesForPayment();'>";
			// str += "<datalist id='listacademicYear'>"+academicYearList+"</datalist>";
			// str += "</div><br>"; 

			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4payment');generateText3();>";
			str += "</fieldset></div></div>";
			
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["universityCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["universityTitle"]+"</div>";
			str += "</div>"

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["programmeTypeCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["programmeTypeTitle"]+"</div>";
			str += "</div>"
				

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["degreeCode"]+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["degreeTitle"]+"</div>";
			str += "</div>"


			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["academicYear"]+"&nbsp;&nbsp;&nbsp;&nbsp;</div>";
			str += "</div>"

			str +="<div id='selectedDiv3'></div>";
			
			str += "<div></div>";	
			str += "<br><br>";
			
			str +="<div style='float:left;clear:both' >";
			if(dsp == "addpayment"){
				str += '<input type="button" class="btn" value="Save" onclick=formPaymentDetailssendForm("addpayment")>';
			} else if(dsp == "updatepayment") {
				str += '<input type="button" class="btn" value="Update" onclick=formPaymentDetailssendForm("updatepayment");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formPaymentDetailssendForm("deletepayment")>';
			}
			str += '<input type="button" class="btn" value="View Payment Details"  onclick=sendForm('+"'data4viewPayments'"+')>'; 
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";	
		
		}

		return str;
	}

function generateText3(){

	 var newStr ="";
	 
			newStr +="<div class='section1'><fieldset  class='field'><legend class='fieldHead'>Staff</legend><div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Payment Rate(per hour)</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='paymentRate' id ='paymentRate' value='"+dataRep["paymentRate"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div></div></div></fieldset>";

			newStr +="<div class='section1'><fieldset  class='field'><legend class='fieldHead'>Student</legend><div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Regstation Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='RegstationFee' name='RegstationFee'  value='"+dataRep["RegstationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Application Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='ApplicationFee' name='ApplicationFee'  value= '"+dataRep["ApplicationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Examination Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='ExaminationFee' name='ExaminationFee'  value= '"+dataRep["ExaminationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr +="<div class='longIdentifier' >Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			newStr +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onchange=generateText2();>";
		
			
				if(dataRep["coursefeeType"]== 'Total'){
					TotalChecked = 'checked';
				}else if(dataRep["coursefeeType"]=='Instalment'){
					InstalmentChecked= 'checked';
				}
				
			
			
			newStr +='<input type="radio" name="coursefeeType" id="total" value= "Total"';
			newStr +=TotalChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;' >Total";
			newStr +='<input type="radio" name="coursefeeType"  id="instalment" value= "Instalment"';
			newStr +=InstalmentChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;'>Instalment</div></div>";

			newStr +="<div id='selectedDiv1'></div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Library Fee Refundable</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='libraryFeeRefundable' name='libraryFeeRefundable'  value= '"+dataRep["libraryFeeRefundable"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Library Fee NonRefundable</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='libraryFeeNonRefundable' name='libraryFeeNonRefundable'  value= '"+dataRep["libraryFeeNonRefundable"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Test book Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='textbookFee' name='textbookFee'  value= '"+dataRep["textbookFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Internet Usage</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='internetFee' name='internetFee'  value= '"+dataRep["internetFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div></div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Total Amount</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' id='studentTotalAmount' name='studentTotalAmount'  value= '"+dataRep["studentTotalAmount"].trim()+"' onchange='dataRep[this.name]=this.value;' onclick='calculate();' "+fieldDisabled+" >";
			newStr += "</div></div></fieldset>";
	
	document.getElementById('selectedDiv3').innerHTML=newStr;

}	
	
	
	
	
	
function generateText2(){
	var newdataStr ="";

	if(dataRep["coursefeeType"]== 'Total'){
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>Course Fee Total</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='courseFeeTotal' name='courseFeeTotal'  value= '"+dataRep["courseFeeTotal"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
		}
		
		if(dataRep["coursefeeType"]== 'Instalment'){
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>1st Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='firstinstalment' name='firstinstalment'  value= '"+dataRep["firstinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
			
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>2nd Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='secondinstalment' name='secondinstalment'  value= '"+dataRep["secondinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
			
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>3rd Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='thirdinstalment' name='thirdinstalment'  value= '"+dataRep["thirdinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
		}
	document.getElementById('selectedDiv1').innerHTML=newdataStr;
}
	
	
		function formViewPayments(dsp) {

		str = "";
		//testCodeStr = "";

		if(dsp == "formViewPayments") {

			programmeTypeCode = programmeTypeTitle = "";

			str  = "<div id='viewPayments'>";
			str += "<table><tr><td>"
			str += '<h2>View Payment Details</h2><hr>';
			str += '<form name="viewPayments" method="POST">';

			dataRep["selectedPayment"]="";
			degreeCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<degreeCodeLength; i++) {
				degreeCodeStr += "<option>"+degreeTitleArr[i]+"--"+programmeTypeTitleArr[i]+"</option>";
				//alert(dataRep["selectedDegree"]);
			}
			str += "<br><center><select id='selectedPayment' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updatepayment");>Update</button>';
			str += '<button class="btn" onclick=showMenu("deletepayment")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	

	function formPaymentDetailssendForm(frm){

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

		if(frm == 'addpayment' || frm == 'updatepayment' || frm == 'deletepayment' ){
		doc = document.maintainpaymentDetails;
		
		doc = document.maintainStudentRegistration;
			dataStr += "&interface="+frm;

			if(frm != 'addpayment'){
			
			dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedPayment"]-1];
			dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedPayment"]-1];
			}
			else{
			dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			dataStr += "&degreeCode="+dataRep["degreeCode"];
			dataStr += "&academicYear="+dataRep["academicYear"];
			}
			dataStr += "&paymentRate="+dataRep["paymentRate"];
			dataStr += "&registrationFee="+dataRep["RegstationFee"];
			dataStr += "&applicationFee="+dataRep["ApplicationFee"];	
			dataStr += "&examinationFee="+dataRep["ExaminationFee"];
			if(document.getElementById('total').checked == true){
			dataStr += "&courseFeeTotal="+dataRep["courseFeeTotal"];
			dataStr += "&firstinstalment="+"000";
			dataStr += "&secondinstalment="+"000";
			dataStr += "&thirdinstalment="+"000";
			}
			if(document.getElementById('instalment').checked == true){
			dataStr += "&courseFeeTotal="+"000";
			dataStr += "&firstinstalment="+dataRep["firstinstalment"];
			dataStr += "&secondinstalment="+dataRep["secondinstalment"];
			dataStr += "&thirdinstalment="+dataRep["thirdinstalment"];
			}
			dataStr += "&libraryFeeRefundable="+dataRep["libraryFeeRefundable"];
			dataStr += "&libraryFeeNonRefundable="+dataRep["libraryFeeNonRefundable"];
			dataStr += "&textbookFee="+dataRep["textbookFee"];
			dataStr += "&internetFee="+dataRep["internetFee"];
			dataStr += "&studentTotalAmount="+dataRep["studentTotalAmount"];

			
//alert(dataStr);
	}
	
	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
	}
