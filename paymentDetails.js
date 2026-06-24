dataRep['dummyUniversity']=new Array
dataRep['dummyUniversity']=["A","B","C","D","E ","F"];
dataRep['facultyCode']=dataRep['facultyTitle']= dataRep['selecteduniversity']="";

dataRep["paymentRate"]=dataRep["RegstationFee"]=dataRep["ApplicationFee"]=dataRep["ExaminationFee"]=dataRep["CourseFee"]="";
dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";
dataRep["Fee4UsingComputerLab"]=dataRep["InternetUsagesAndProcessingCharges"]=dataRep["Fee4UsingOtherLaboratories"]= "" ;
dataRep['academicYear']=dataRep["degreeTitle"]=dataRep["programmeTypeTitle"]= dataRep["instalmentType"] = "";
dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["sixthinstalment"] = dataRep["selectedPayment"] ="";
dataRep["paied1"] =dataRep["paied2"] ="";
var facultyStr ="";
var StudentChecked = StaffChecked = "";
var TotalChecked = InstalmentChecked = "";
var FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked = SixthChecked =  "";
var NotpaiedChecked = PaiedChecked ="";

var academicYearList = degreeTitleList = programmeTypeTitleList = "";

function calculate(){
	var doc=document.maintainstudentpaymentDetails; 
	
	if((document.getElementById('first').checked == true)&&(document.getElementById('total').checked == true)){
	 
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
	else if((document.getElementById('first').checked == true)&&(document.getElementById('instalment').checked == true)) {

	var RegFee=parseFloat(doc.RegstationFee.value);
	var AppFee=parseFloat(doc.ApplicationFee.value);
	var ExamFee=parseFloat(doc.ExaminationFee.value);
	var LFeeRefundable=parseFloat(doc.libraryFeeRefundable.value);
	var LFeeNonRefundable=parseFloat(doc.libraryFeeNonRefundable.value);
	var TstBkFe=parseFloat(doc.textbookFee.value);
	var IUsage=parseFloat(doc.internetFee.value);
	var firstinstalment=parseFloat(doc.firstinstalment.value);
	var secondinstalment=parseFloat(doc.secondinstalment.value);
	var thirdinstalment=parseFloat(doc.thirdinstalment.value);
	var forthinstalment=parseFloat(doc.forthinstalment.value);
	var fifthinstalment=parseFloat(doc.fifthinstalment.value);

	doc.studentTotalAmount.value=(firstinstalment)+(secondinstalment)+(thirdinstalment)+(forthinstalment)+(fifthinstalment)+(RegFee)+(AppFee)+(ExamFee)+(LFeeRefundable)+(LFeeNonRefundable)+(TstBkFe)+(IUsage);
	dataRep["studentTotalAmount"]=doc.studentTotalAmount.value;
	}
	else if(((document.getElementById('second').checked == true)||(document.getElementById('third').checked == true)||(document.getElementById('forth').checked == true)||(document.getElementById('fifth').checked == true))&&(document.getElementById('total').checked == true)){
	var cFeeTl=parseFloat(doc.courseFeeTotal.value);
	
	doc.studentTotalAmount.value=(cFeeTl);
	dataRep["studentTotalAmount"]=doc.studentTotalAmount.value;
	}
	
	else if(((document.getElementById('second').checked == true)||(document.getElementById('third').checked == true)||(document.getElementById('forth').checked == true)||(document.getElementById('fifth').checked == true))&&(document.getElementById('instalment').checked == true)){
	
	var firstinstalment=parseFloat(doc.firstinstalment.value);
	var secondinstalment=parseFloat(doc.secondinstalment.value);
	var thirdinstalment=parseFloat(doc.thirdinstalment.value);
	var forthinstalment=parseFloat(doc.forthinstalment.value);
	var fifthinstalment=parseFloat(doc.fifthinstalment.value);

	doc.studentTotalAmount.value=(firstinstalment)+(secondinstalment)+(thirdinstalment)+(forthinstalment)+(fifthinstalment);
	dataRep["studentTotalAmount"]=doc.studentTotalAmount.value;
	}
	
	
}


// function displaysave(){
	// if(document.getElementById('first').checked){
		// document.getElementById('save2').style.display='block';
		// document.getElementById('save1').style.display='none';
	// }
	// else{
		// document.getElementById('save2').style.display='none';
		// document.getElementById('save1').style.display='block';
	// }
// }


function istalmentBlock(){
//alert("ok");
	for(i=0; i<studentNICLength;i++){
		//if (studentNICArr[i] == dataRep["studentNIC"]  && studentNameArr[i] == dataRep["studentName"] && instalmentTypeArr[i] == dataRep["instalmentType"]){
		
		if (dataRep["studentNIC"] == studentNICArr[i]  && dataRep["studentName"]== studentNameArr[i] || dataRep["instalmentType"] == instalmentTypeArr[i]){
		 // alert(instalmentTypeArr[i]);
			if(dataRep["instalmentType"] == 'first'){
		//	alert("ok3");
				document.getElementById('first').disabled=true;	
			
			}
			else if (dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second')
			{
		//	alert("ok4");
				document.getElementById('first').disabled=true;	
				document.getElementById('second').disabled=true;
			}
			else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third')
			{
		//	alert("ok5");
				document.getElementById('first').disabled=true;	
				document.getElementById('second').disabled=true;
				document.getElementById('third').disabled=true;
			}
			else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third' || dataRep["instalmentType"] == 'forth')
			{
		//	alert("ok6");
				document.getElementById('first').disabled=true;	
				document.getElementById('second').disabled=true;
				document.getElementById('third').disabled=true;
				document.getElementById('forth').disabled=true;
			}
			else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third' || dataRep["instalmentType"] == 'forth'|| dataRep["instalmentType"] == 'fifth')
			{
		//	alert("ok7");
				document.getElementById('first').disabled=true;	
				document.getElementById('second').disabled=true;
				document.getElementById('third').disabled=true;
				document.getElementById('forth').disabled=true;
				document.getElementById('fifth').disabled=true;
			}
			
			else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third' || dataRep["instalmentType"] == 'forth'|| dataRep["instalmentType"] == 'fifth'|| dataRep["instalmentType"] == 'sixth')
			{
		//	alert("ok7");
				document.getElementById('first').disabled=true;	
				document.getElementById('second').disabled=true;
				document.getElementById('third').disabled=true;
				document.getElementById('forth').disabled=true;
				document.getElementById('fifth').disabled=true;
				document.getElementById('sixth').disabled=true;
			}
		}
	
	}	
}


function setValuesforStudent(){
	for(i=0; i<degreeCodeLength;i++){

		 if(dataRep['degreeTitle']==degreeTitleArr[i]){
		 
			dataRep['universityCode'] = universityCodeArr[i];
			dataRep['universityTitle'] = universityTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];

		}
	}
} 


function refreshPayment(){

	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"]= dataRep["instalmentType"] = "";
	degreeTitleList = "";
	sendForm('data4paymentDetails');


}


function refreshStudentPaymentInstalment(){

	
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"]= dataRep["instalmentType"] = "";
	degreeTitleList ="";
	dataRep["RegstationFee"]=dataRep["ApplicationFee"]=dataRep["ExaminationFee"]=dataRep["CourseFee"]="";
	dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";
	dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
	dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["sixthinstalment"]= dataRep["selectedPayment"] ="";
	dataRep["paied1"] =dataRep["paied2"] ="";
	TotalChecked = InstalmentChecked = "";
	FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked = SixthChecked = "";
	NotpaiedChecked = PaiedChecked ="";

}






function formPaymentDetails(dsp){
 saved="No"; 
 var keyDisabled = fieldDisabled = "";
 
		title = "Selected Student Payment Details";
		str = "";

	if(dsp == "addpayment" || dsp == "updatepayment" || dsp == "deletepayment") {
			keyDisabled = "Disabled";
			if(dsp == "updatepayment" || dsp == "deletepayment"){
			//alert(dsp);
				title = "Update Student Payment Details ";
				
				if(dsp == "deletepayment"){
				//alert(dsp);
					title = "Delete Student Payment Details";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

			} 

			str  = "<div id='addpayment'>";
			str += "<table ><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainpaymentDetails">';

			
			for(studentNoLoop=0; studentNoLoop< degreeCodeLength; studentNoLoop++){
			
				degreeTitleList += "<option value='"+degreeTitleArr[studentNoLoop]+"'>";
		}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
	
			str +="<div class='longIdentifier'>Degree</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='degreeTitle' list='listdegreeTitle' id='degreeTitle' value= '"+dataRep["degreeTitle"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudent();'>";
			str += "<datalist id='listdegreeTitle'>"+degreeTitleList+"</datalist>";
			str += "</div><br>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4paymentDetails');generateTextpayment();>";
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick='refreshPayment();'>";
			
			
			str += "</fieldset></div></div>";
			
			
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["universityCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["universityTitle"]+"</div>";
			str += "</div>"
	
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["facultyCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["facultyTitle"]+"</div>";
			str += "</div>"

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["departmentCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["departmentTitle"]+"</div>";
			str += "</div>"

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["programmeTypeCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["programmeTypeTitle"]+"</div>";
			str += "</div>"
				

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["degreeCode"]+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["degreeTitle"]+"</div>";
			str += "</div>"

			str +="<div id='selectedDiv9'></div>";
			
			str += "<div></div>";	
			str += "<br><br>";
			
			str +="<div style='float:left;clear:both' >";
			if(dsp == "addpayment"){
				str += '<input type="button" class="btn" id="save1" value="Save" onclick=formPaymentDetailssendForm("addpayment");>';
		
				str += '<input type="button" class="btn"  id="save2" value="Save and Register" style="display:none;" onclick=formPaymentDetailssendForm("addpayment");>';
			} else if(dsp == "updatepayment"){
				str += '<input type="button" class="btn" value="Update" onclick=formPaymentDetailssendForm("updatepayment");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formPaymentDetailssendForm("deletepayment")>';
			}
			//str += '<input type="button" class="btn" value="View Payment Details"  onclick=sendForm('+"'data4viewPayments'"+')>'; 
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');refreshStudentPaymentInstalment();>';
			
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";	
		
		}

		return str;
	}

function generateTextpayment(){

	 var newStr ="";

			newStr +="<div class='section1'><fieldset  class='field'><legend class='fieldHead'>Student</legend>";
			newStr +="<div class='longIdentifier' >Instalment Type</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			newStr +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onclick='generateinstalment();'>";
		
			
				if(dataRep["instalmentType"]== 'First'){
					FirstChecked = 'checked';
				}else if(dataRep["instalmentType"]=='Second'){
					SecondChecked= 'checked';
				}else if(dataRep["instalmentType"]=='Third'){
					ThirdChecked= 'checked';
				}else if(dataRep["instalmentType"]=='Forth'){
					ForthChecked= 'checked';
				}else if(dataRep["instalmentType"]=='Fifth'){
					FifthChecked= 'checked';
				}else if(dataRep["instalmentType"]=='Sixth'){
					SixthChecked= 'checked';
				}

			newStr +='<input type="radio" name="instalmentType" id="first" value= "First"';
			newStr +=FirstChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();' >First";
			newStr +='<input type="radio" name="instalmentType"  id="second" value= "Second"';
			newStr +=SecondChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();'>Second";
			newStr +='<input type="radio" name="instalmentType"  id="third" value= "Third"';
			newStr +=ThirdChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();'>Third";
			newStr +='<input type="radio" name="instalmentType"  id="forth" value= "Forth"';
			newStr +=ForthChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();'>Forth";
			newStr +='<input type="radio" name="instalmentType"  id="fifth" value= "Fifth"';
			newStr +=FifthChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();'>Fifth";
			newStr +='<input type="radio" name="instalmentType"  id="sixth" value= "Sixth"';
			newStr +=SixthChecked;
			newStr +=" onclick='dataRep[this.name]=this.value;displaysave();'>Sixth</div></div>";    
					
	
			newStr +="<div id='selectedText2'></div>";
			
			newStr +="</div></br>";
			
			newStr += "</fieldset>";
	
	document.getElementById('selectedDiv9').innerHTML=newStr;
istalmentBlock();
}



function generateinstalment(){

var newFirstStr ="";


	

			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Application Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='ApplicationFee' name='ApplicationFee'  value= '"+dataRep["ApplicationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";

			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Regstation Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='RegstationFee' name='RegstationFee'  value='"+dataRep["RegstationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";

			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Examination Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='ExaminationFee' name='ExaminationFee'  value= '"+dataRep["ExaminationFee"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";
			
			newFirstStr +="<div class='longIdentifier' >Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			newFirstStr +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onclick=generatefield3();>";
		
			
				if(dataRep["coursefeeType"]== 'Total'){
					TotalChecked = 'checked';
				}else if(dataRep["coursefeeType"]=='Instalment'){
					InstalmentChecked= 'checked';
				}
				
			
			
			newFirstStr +='<input type="radio" name="coursefeeType" id="total" value= "Total"';
			newFirstStr +=TotalChecked;
			newFirstStr +=" onclick='dataRep[this.name]=this.value;' >Total";
			newFirstStr +='<input type="radio" name="coursefeeType"  id="instalment" value= "Instalment"';
			newFirstStr +=InstalmentChecked;
			newFirstStr +=" onclick='dataRep[this.name]=this.value;'>Instalment</div></div>";
			
			
			newFirstStr +="<div id='selectedDivpay'></div>";
			
			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Library Fee Refundable</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='libraryFeeRefundable' name='libraryFeeRefundable'  value= '"+dataRep["libraryFeeRefundable"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";
			
			
			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Library Fee NonRefundable</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='libraryFeeNonRefundable' name='libraryFeeNonRefundable'  value= '"+dataRep["libraryFeeNonRefundable"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";
			
			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Fee for using computer lab</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='Fee4UsingComputerLab' name='Fee4UsingComputerLab'  value= '"+dataRep["Fee4UsingComputerLab"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";
			
			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Fee for using other laboratories</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='Fee4UsingOtherLaboratories' name='Fee4UsingOtherLaboratories'  value= '"+dataRep["Fee4UsingOtherLaboratories"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";
			
			
			newFirstStr += "<div style='clear:both'>";
			newFirstStr += "<div class='longIdentifier'>Internet usages and  processing charges</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newFirstStr += "<div style='float:left' >&nbsp;";
			newFirstStr += "<input type='text' id='InternetUsagesAndProcessingCharges' name='InternetUsagesAndProcessingCharges'  value= '"+dataRep["InternetUsagesAndProcessingCharges"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newFirstStr += "</div>";

	
			document.getElementById('selectedText2').innerHTML=newFirstStr;
			
	}
			
			

function generatefield3(){
	var newdataStr ="";

	if(dataRep["coursefeeType"]== 'Total'){
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>Course Fee Total</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='courseFeeTotal' name='courseFeeTotal'  value= '"+dataRep["courseFeeTotal"].trim()+"' onchange='dataRep[this.name]=this.value;calculate();' "+fieldDisabled+" >";
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
			
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>4th Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='forthinstalment' name='forthinstalment'  value= '"+dataRep["forthinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
			
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>5th Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='fifthinstalment' name='fifthinstalment'  value= '"+dataRep["fifthinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;calculate();' "+fieldDisabled+" >";
			newdataStr += "</div>";
			
			newdataStr += "<div style='clear:both'>";
			newdataStr += "<div class='longIdentifier'>6th Instalment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newdataStr += "<div style='float:left' >&nbsp;";
			newdataStr += "<input type='text' id='sixthinstalment' name='sixthinstalment'  value= '"+dataRep["sixthinstalment"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newdataStr += "</div>";
		}
	document.getElementById('selectedDivpay').innerHTML=newdataStr;
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
	
		dataStr += "&interface="+frm;
		
		dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
		dataStr += "&degreeCode="+dataRep["degreeCode"];
		

		if(document.getElementById('first').checked == true){
			dataStr += "&instalmentType="+"first";
		}
		if(document.getElementById('second').checked == true){
			dataStr += "&instalmentType="+"second";
		}
		if(document.getElementById('third').checked == true){
			dataStr += "&instalmentType="+"third";
		}
		if(document.getElementById('forth').checked == true){
			dataStr += "&instalmentType="+"forth";
		}
		if(document.getElementById('fifth').checked == true){
			dataStr += "&instalmentType="+"fifth";
		}
		if(document.getElementById('sixth').checked == true){
			dataStr += "&instalmentType="+"sixth";
		}
		
		
			dataStr += "&registrationFee="+dataRep["RegstationFee"];
			dataStr += "&applicationFee="+dataRep["ApplicationFee"];	
			dataStr += "&examinationFee="+dataRep["ExaminationFee"];
			if(document.getElementById('total').checked == true){
			dataStr += "&courseFeeTotal="+dataRep["courseFeeTotal"];
			dataStr += "&firstinstalment="+"000";
			dataStr += "&secondinstalment="+"000";
			dataStr += "&thirdinstalment="+"000";
			dataStr += "&forthinstalment="+"000";
			dataStr += "&fifthinstalment="+"000";
			dataStr += "&sixthinstalment="+"000";
			}
			if(document.getElementById('instalment').checked == true){
			dataStr += "&courseFeeTotal="+"000";
			dataStr += "&firstinstalment="+dataRep["firstinstalment"];
			dataStr += "&secondinstalment="+dataRep["secondinstalment"];
			dataStr += "&thirdinstalment="+dataRep["thirdinstalment"];
			dataStr += "&forthinstalment="+dataRep["forthinstalment"];
			dataStr += "&fifthinstalment="+dataRep["fifthinstalment"];
			dataStr += "&sixthinstalment="+dataRep["sixthinstalment"]
			}
			dataStr += "&libraryFeeRefundable="+dataRep["libraryFeeRefundable"];
			dataStr += "&libraryFeeNonRefundable="+dataRep["libraryFeeNonRefundable"];
			
			dataStr += "&Feeforusingcomputerlab="+dataRep["Fee4UsingComputerLab"];
			dataStr += "&Feeforusingotherlaboratories="+dataRep["Fee4UsingOtherLaboratories"];
			dataStr += "&FeeforInternetusagesandpaymentprocessingcharges="+dataRep["InternetUsagesAndProcessingCharges"];


			
	}

isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
}
