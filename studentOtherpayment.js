dataRep['dummyUniversity']=new Array
dataRep['dummyUniversity']=["A","B","C","D","E ","F"];
dataRep['facultyCode']=dataRep['facultyTitle']= dataRep['selecteduniversity']="";
dataRep['Paymentmethod1'] = dataRep['Paymentmethod2'] = "";
dataRep["paymentRate"]=dataRep["RegstationFee"]=dataRep["ApplicationFee"]=dataRep["ExaminationFee"]=dataRep["CourseFee"]="";
dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";

dataRep['academicYear']=dataRep["degreeTitle"]=dataRep["programmeTypeTitle"]= dataRep["instalmentType"] = "";
dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["selectedPayment"] ="";
dataRep["paied1"] =dataRep["paied2"] ="";
dataRep["paymentDateToBank"] = "";
var facultyStr ="";
var StudentChecked = StaffChecked = "";
var TotalChecked = InstalmentChecked = "";
var FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked = OtherChecked = "";
var NotpaiedChecked = PaiedChecked ="";
var HalfPaymentChecked = FullPaymentChecked = "";

var academicYearList = degreeTitleList = programmeTypeTitleList = "";


// function callNextFunction(){
// sendForm('data4selectedStudentregister');
	
	// for(studentLoop = 0; studentLoop<studentNICLength; studentLoop++) { 

		// if(studentNICArr[studentLoop] == dataRep["studentNIC"]){
		
	
			// dataRep["studentName"]=studentNameArr[studentLoop];
			// dataRep["studentAge"]=studentAgeArr[studentLoop];
			// dataRep["studentSex"]=studentSexArr[studentLoop];
			// dataRep["studentDOB"]=studentDOBArr[studentLoop];
			// dataRep["studentPermanentAddress"]=studentAddressL1Arr[studentLoop];
			// dataRep["studentAddressLine02"]=studentAddressL2Arr[studentLoop];
			// dataRep["studentContactLan"]=studentContactLanArr[studentLoop];
			// dataRep["studentContactMobile"]=studentContactMobileArr[studentLoop];
			// dataRep["studentContactEmail"]=studentContactEmailArr[studentLoop];
			// dataRep['universityCode'] = universityCodeArr[studentLoop];
			// dataRep['universityTitle'] = universityTitleArr[studentLoop];
			// dataRep['facultyCode']=facultyCodeArr[studentLoop];
			// dataRep['facultyTitle']=facultyTitleArr[studentLoop];
			// dataRep['departmentCode']=departmentCodeArr[studentLoop];
			// dataRep['departmentTitle']=departmentTitleArr[studentLoop];
			// dataRep['programmeTypeCode']=programmeTypeCodeArr[studentLoop];
			// dataRep["programmeTypeTitle"]=programmeTypeTitleArr[studentLoop];
			// dataRep["degreeTitle"]=degreeTitleArr[studentLoop];
			// dataRep["degreeCode"]=degreeCodeArr[studentLoop];
			
			
		// } 
	// }
	// sendForm('data4selectedStudentregister');
	
// }

function displaysave(){
	if(document.getElementById('first').checked){
		document.getElementById('save2').style.display='block';
		document.getElementById('save1').style.display='none';
	}
	else{
		document.getElementById('save2').style.display='none';
		document.getElementById('save1').style.display='block';
	}
}


// function istalmentBlock(){
// //alert("ok");
	// for(i=0; i<studentNICLength; i++){
		// //if (studentNICArr[i] == dataRep["studentNIC"]  && studentNameArr[i] == dataRep["studentName"] && instalmentTypeArr[i] == dataRep["instalmentType"]){
		
		// if (dataRep["studentNIC"] == studentNICArr[i]  && dataRep["studentName"]== studentNameArr[i] || dataRep["instalmentType"] == instalmentTypeArr[i]){
		 // // alert(instalmentTypeArr[i]);
			// if(dataRep["instalmentType"] == 'first'){
		// //	alert("ok3");
				// document.getElementById('first').disabled=true;	
			
			// }
			// else if (dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second')
			// {
			// //alert("ok4");
				// document.getElementById('first').disabled=true;	
				// document.getElementById('second').disabled=true;
			// }
			// else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third')
			// {
		// //	alert("ok5");
				// document.getElementById('first').disabled=true;	
				// document.getElementById('second').disabled=true;
				// document.getElementById('third').disabled=true;
			// }
			// else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third' || dataRep["instalmentType"] == 'forth')
			// {
		// //	alert("ok6");
				// document.getElementById('first').disabled=true;	
				// document.getElementById('second').disabled=true;
				// document.getElementById('third').disabled=true;
				// document.getElementById('forth').disabled=true;
			// }
			// else if(dataRep["instalmentType"] == 'first' || dataRep["instalmentType"] == 'second' || dataRep["instalmentType"] == 'third' || dataRep["instalmentType"] == 'forth'|| dataRep["instalmentType"] == 'fifth')
			// {
		// //	alert("ok7");
				// document.getElementById('first').disabled=true;	
				// document.getElementById('second').disabled=true;
				// document.getElementById('third').disabled=true;
				// document.getElementById('forth').disabled=true;
				// document.getElementById('fifth').disabled=true;
			// }
		// }
	
	// }	
// }


function setValuesforStudent(){
	for(i=0; i<studentNICLength; i++){

		if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["studentAge"]=studentAgeArr[i];
			dataRep["studentSex"]=studentSexArr[i];
			dataRep["studentDOB"]=studentDOBArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			//dataRep["studentAddressLine02"]=studentAddressL2Arr[i];
			dataRep["studentContactLan"]=studentContactLanArr[i];
			dataRep["studentContactMobile"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			dataRep['universityCode'] = universityCodeArr[i];
			dataRep['universityTitle'] = universityTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["instalmentType"] = instalmentTypeArr[i];
			
			dataRep['rate1']=rate1Arr[i];
						
			dataRep['categoryCode']= categoryCodeArr[i];
			dataRep['categoryTitle']=categoryTitleArr[i];
			dataRep["studentPaymentId "] = studentPaymentIdArr[i];
			
			dataRep['certificateFee']=certificateFeeArr[i];			
			dataRep['renewalRegistrationFee']= renewalRegistrationFeeArr[i];
			dataRep['convocationFee']=convocationFeeArr[i];
			dataRep["repeatExamFee "] = repeatExamFeeArr[i];
			
		}else if(dataRep["studentNIC"]==studentNICArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentAge"]=studentAgeArr[i];
			dataRep["studentSex"]=studentSexArr[i];
			dataRep["studentDOB"]=studentDOBArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			//dataRep["studentAddressLine02"]=studentAddressL2Arr[i];
			dataRep["studentContactLan"]=studentContactLanArr[i];
			dataRep["studentContactMobile"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			dataRep['universityCode'] = universityCodeArr[i];
			dataRep['universityTitle'] = universityTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["instalmentType"] = instalmentTypeArr[i];
			
			dataRep['rate1']=rate1Arr[i];			
			dataRep['categoryCode']= categoryCodeArr[i];
			dataRep['categoryTitle']=categoryTitleArr[i];
			dataRep["studentPaymentId "] = studentPaymentIdArr[i];
			
			dataRep['certificateFee']=certificateFeeArr[i];			
			dataRep['renewalRegistrationFee']= renewalRegistrationFeeArr[i];
			dataRep['convocationFee']=convocationFeeArr[i];
			dataRep["repeatExamFee "] = repeatExamFeeArr[i];
		}
		//else if(dataRep['degreeTitle']==degreeTitleArr[i]){

			// dataRep["studentNIC"]=studentNICArr[i];
			// dataRep["studentName"]=studentNameArr[i];
			// dataRep["studentAge"]=studentAgeArr[i];
			// dataRep["studentSex"]=studentSexArr[i];
			// dataRep["studentDOB"]=studentDOBArr[i];
			// dataRep["studentPermanentAddress"]=studentAddressL1Arr[i];
			// dataRep["studentAddressLine02"]=studentAddressL2Arr[i];
			// dataRep["studentContactLan"]=studentContactLanArr[i];
			// dataRep["studentContactMobile"]=studentContactMobileArr[i];
			// dataRep["studentContactEmail"]=studentContactEmailArr[i];
			// dataRep['universityCode'] = universityCodeArr[i];
			// dataRep['universityTitle'] = universityTitleArr[i];
			// dataRep['facultyCode']=facultyCodeArr[i];
			// dataRep['facultyTitle']=facultyTitleArr[i];
			// dataRep['departmentCode']=departmentCodeArr[i];
			// dataRep['departmentTitle']=departmentTitleArr[i];
			// dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			// dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			// dataRep["degreeCode"]=degreeCodeArr[i];
			// //dataRep["instalmentType"] = instalmentTypeArr[i];
			
		
		// }
	}
} 
function hidebox(){
	if(document.getElementById('paied1').checked){
		document.getElementById('paied2').disabled=true;
	}
}

function Save(){
if(document.getElementById('paied2').checked && saved!="yes"){
	//if (saved!="yes"){
		var r=confirm("You have not saved the changes you made! This may cause a data loss. Continue?");
		if (r==true)
	  	{
	  	showMenu("formAdministratorMenu");
	  	}
		//}
	else {
		showMenu("formAdministratorMenu");
		}
		}
}

function refreshStudentOtherPayment(){

	dataRep["studentNIC"] = dataRep["studentName"] = dataRep["studentSex"]=dataRep["studentDOB"]=dataRep["studentPermanentAddress"]= "";
	dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]= "";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"]= dataRep["instalmentType"] = "";
	studentNICList = studentNameList ="";
	dataRep["applicationFee"] = dataRep["registrationFee"] = dataRep["examinationFee"] =dataRep["courseFee"]="";
	dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";
	dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
	dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["selectedPayment"] ="";
	dataRep["paied1"] =dataRep["paied2"] ="";
	TotalChecked = InstalmentChecked = "";
	FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked ="";
	NotpaiedChecked = PaiedChecked ="";
	dataRep["paymentDateToBank"] = dataRep["tutionFeeFirstYear"] = dataRep["tutionFeeSecondYear"] =  dataRep["supervisionFee"] = dataRep["foreigntourFee"] = dataRep["firstYearPartOne"] = dataRep["fullpaymentDeadlineDate"] = dataRep["halfpaymentDeadlineDate"] = "";
	dataRep["secondYearPartTwo"] = dataRep["secondYearPartTwo"] = dataRep["Feeforusingcomputerlab"] = dataRep["Feeforusingotherlaboratories"] = dataRep["FeeforInternetusagesandpaymentprocessingcharges"] = dataRep["fullTotalAmount"] = ""; 
	dataRep["subTotalAmount"] = dataRep["NoOfInstalments"] = dataRep["extendedDuration"] = dataRep["addtionalPayments"] = dataRep["commenceDate"] = "";
	dataRep["annualBenchFee"] = dataRep["certificateFee"] = dataRep["convocationFee"] = dataRep["renewalRegistrationFee"] = dataRep["repeatExamFee"] = "";
	dataRep["instalmentType"] = dataRep['Paymentmethod1'] = dataRep['Paymentmethod2'] =  HalfPaymentChecked = FullPaymentChecked =  "";
	
	sendForm('data4studentOtherPayment');


}


function refreshStudentOtherPaymentInstalment(){

	dataRep["studentNIC"] = dataRep["studentName"] = dataRep["studentSex"]=dataRep["studentDOB"]=dataRep["studentPermanentAddress"]= "";
	dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]= "";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"]= dataRep["instalmentType"] = "";
	studentNICList = studentNameList ="";
	dataRep["applicationFee"] = dataRep["registrationFee"] = dataRep["examinationFee"] =dataRep["courseFee"]="";
	dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";
	dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["studentTotalAmount"] ="";
	dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["selectedPayment"] ="";
	dataRep["paied1"] =dataRep["paied2"] ="";
	TotalChecked = InstalmentChecked = "";
	FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked ="";
	NotpaiedChecked = PaiedChecked ="";
	dataRep["paymentDateToBank"] = dataRep["tutionFeeFirstYear"] = dataRep["tutionFeeSecondYear"] =  dataRep["supervisionFee"] = dataRep["foreigntourFee"] = dataRep["firstYearPartOne"] = dataRep["fullpaymentDeadlineDate"] = dataRep["halfpaymentDeadlineDate"] = "";
	dataRep["secondYearPartTwo"] = dataRep["secondYearPartTwo"] = dataRep["Feeforusingcomputerlab"] = dataRep["Feeforusingotherlaboratories"] = dataRep["FeeforInternetusagesandpaymentprocessingcharges"] = dataRep["fullTotalAmount"] = ""; 
	dataRep["subTotalAmount"] = dataRep["NoOfInstalments"] = dataRep["extendedDuration"] = dataRep["addtionalPayments"] = dataRep["commenceDate"] = "";
	dataRep["annualBenchFee"] = dataRep["certificateFee"] = dataRep["convocationFee"] = dataRep["renewalRegistrationFee"] = dataRep["repeatExamFee"] = "";
	dataRep["instalmentType"] = dataRep['Paymentmethod1'] = dataRep['Paymentmethod2'] =  HalfPaymentChecked = FullPaymentChecked =  "";
	
	
}






function formStudentOtherPaymentDetails(dsp){
 saved="No"; 
 var keyDisabled = fieldDisabled = "";
 
		title = "Student Payment Details";
		str = "";

	if(dsp == "addstudentotherpayment" || dsp == "updatestudentotherpayment" || dsp == "deletestudentotherpayment") {
			keyDisabled = "Disabled";
			if(dsp == "updatestudentotherpayment" || dsp == "deletestudentotherpayment"){
			//alert(dsp);
				title = "Update Student Payment Details ";
				
				if(dsp == "deletestudentotherpayment"){
				//alert(dsp);
					title = "Delete Student Payment Details";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				// if(dataRep["selectedPayment"] != "0"){
					// dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedPayment"]-1];
					// dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedPayment"]-1];
					// dataRep["academicYear"] = academicYearArr[dataRep["selectedPayment"]-1];
					// dataRep["programmeTypeCode"] = programmeTypeCodeArr[dataRep["selectedPayment"]-1];
					// dataRep["programmeTypeTitle"] = programmeTypeTitleArr[dataRep["selectedPayment"]-1];
					// dataRep["paymentRate"] = paymentRateArr[dataRep["selectedPayment"]-1];
					// dataRep["RegstationFee"] = registrationFeeArr[dataRep["selectedPayment"]-1];
					// dataRep["ApplicationFee"] = applicationFeeArr[dataRep["selectedPayment"]-1];
					// dataRep["ExaminationFee"] = examinationFeeArr[dataRep["selectedPayment"]-1];
					// dataRep["courseFeeTotal"] = courseFeeTotalArr[dataRep["selectedPayment"]-1];
					// dataRep["firstinstalment"] = firstinstalmentArr[dataRep["selectedPayment"]-1];
					// dataRep["secondinstalment"] = secondinstalmentArr[dataRep["selectedPayment"]-1];
					// dataRep["thirdinstalment"] = thirdinstalmentArr[dataRep["selectedPayment"]-1];
					// dataRep["libraryFeeRefundable"] = libraryFeeRefundableArr[dataRep["selectedPayment"]-1];
					// dataRep["libraryFeeNonRefundable"] = libraryFeeNonRefundableArr[dataRep["selectedPayment"]-1];
					// dataRep["textbookFee"] = textbookFeeArr[dataRep["selectedPayment"]-1];
					// dataRep["internetFee"] = internetFeeArr[dataRep["selectedPayment"]-1];
					// dataRep["studentTotalAmount"] = studentTotalAmountArr[dataRep["selectedPayment"]-1];

				// }

			} 

			str  = "<div id='addstudentotherpayment'>";
			str += "<table ><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainstudentpaymentDetails">';

			
			for(studentNoLoop=0; studentNoLoop< studentNICLength; studentNoLoop++){
					
			if (studentNICArr.indexOf(studentNICArr[studentNoLoop]) == studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) || (studentNICArr.indexOf(studentNICArr[studentNoLoop]) != studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) && studentNICArr.indexOf(studentNICArr[studentNoLoop])==studentNoLoop)){
				studentNICList += "<option value='"+studentNICArr[studentNoLoop]+"'>";
			}
			if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
			}
			
				//degreeTitleList += "<option value='"+degreeTitleArr[studentNoLoop]+"'>";
		}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudent();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudent();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=generateTextforPayment();>";
		//	str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4studentOtherPayment');generateTextforPayment();>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick='refreshStudentOtherPayment();'>";
			
			
			str += "</fieldset></div></div>";
			
			str += '<center>';
			str += "<div  style='margin:0 auto; width:100; height:100; clear:both;'>";
			str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';
			str += "<img style='float:left;width:100; height:100' src='studentPhotos/"+dataRep["degreeTitle"]+"/"+dataRep["studentNIC"]+".jpg'></fieldset></div></center>";
			
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

			str +="<div id='selectedDivforpayment2'></div>";
			
			str += "<div></div>";	
			str += "<br><br>";
			
			str +="<div style='float:left;clear:both' >";
			if(dsp == "addstudentotherpayment"){
				str += '<input type="button" class="btn" id="save1" value="Save" onclick=formStudentOtherPaymentDetailssendForm("addstudentotherpayment");>';
		
				//str += '<input type="button" class="btn"  id="save2" value="Save and Register" style="display:none;" onclick=Save();formStudentOtherPaymentDetailssendForm("addstudentotherpayment");callNextFunction();>';
			} else if(dsp == "updatestudentotherpayment"){
				str += '<input type="button" class="btn" value="Update" onclick=formStudentOtherPaymentDetailssendForm("updatestudentotherpayment");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formStudentOtherPaymentDetailssendForm("deletestudentotherpayment")>';
			}
			//str += '<input type="button" class="btn" value="View Payment Details"  onclick=sendForm('+"'data4viewPayments'"+')>'; 
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');refreshStudentOtherPaymentInstalment();>';
			
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";	
		
		}

		return str;
	}

function generateTextforPayment(){
sendForm('data4PaymentId2');
			 var newStr ="";

			newStr +="<div class='section1'><fieldset  class='field'><legend class='fieldHead'>Payment Details</legend>";
			
			newStr += "<div style='clear:both'>";
			
			newStr +="<div class='longIdentifier' >Payment Method</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div><div style='float:left' >";
			newStr +="<div class='chkbox' style='width:auto;margin:0px 30px 10px 0px;' onclick='generateCheckobx();'>";
		
			
			
			//newStr += "<div class='longIdentifier'>Payment Method</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div> "
			//newStr += "<div style='float:left' >&nbsp;<div class='chkbox' style='width:auto;margin:0px 30px 10px 0px;' onclick='generateCheckobx();>";
				
				if(dataRep['Paymentmethod1'] == 'Full Payment'){
                       FullPaymentChecked = 'checked';
               }
               if(dataRep['Paymentmethod2'] == 'Half Payment'){
                       HalfPaymentChecked = 'checked';
               }
          
               
		   newStr +='<input type="checkbox" name="Paymentmethod1" id="Paymentmethod1" value="Full Payment"';
		   newStr += FullPaymentChecked;
		   newStr +=" onchange='dataRep[this.name]=this.value;'"+fieldDisabled+"/>Full Payment";
		   newStr +='<input type="checkbox" name="Paymentmethod2" id="Paymentmethod2" value="Half Payment"';
		   newStr += HalfPaymentChecked ;
		   newStr +=" onchange='dataRep[this.name]=this.value;'"+fieldDisabled+"/>Half Payment</div></div></div></br>";
		   
		   
			//newStr +="<div class='longIdentifier' >Instalment Type</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div><div style='float:left' >";
			//newStr +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onclick='generateCheckobx();'>";
		
			
				// if(dataRep["instalmentType"]== 'First'){
					// FirstChecked = 'checked';
				// }else if(dataRep["instalmentType"]=='Second'){
					// SecondChecked= 'checked';
				// }else if(dataRep["instalmentType"]=='Third'){
					// ThirdChecked= 'checked';
				// }else if(dataRep["instalmentType"]=='Forth'){
					// ForthChecked= 'checked';
				// }else if(dataRep["instalmentType"]=='Fifth'){
					// FifthChecked= 'checked';
				// }else if(dataRep["instalmentType"]=='Other'){
					// OtherChecked= 'checked';
				// }

			// newStr +='<input type="radio" name="instalmentType" id="first" value= "First"';
			// newStr +=FirstChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;displaysave();' >First";
			// newStr +='<input type="radio" name="instalmentType"  id="second" value= "Second"';
			// newStr +=SecondChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;'>Second";
			// newStr +='<input type="radio" name="instalmentType"  id="third" value= "Third"';
			// newStr +=ThirdChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;'>Third";
			// newStr +='<input type="radio" name="instalmentType"  id="forth" value= "Forth"';
			// newStr +=ForthChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;'>Forth";
			// newStr +='<input type="radio" name="instalmentType"  id="fifth" value= "Fifth"';
			// newStr +=FifthChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;'>Fifth<";
			// newStr +='<input type="radio" name="instalmentType"  id="Other" value= "Other"';
			// newStr +=OtherChecked;
			// newStr +=" onclick='dataRep[this.name]=this.value;'>Other</div></div>";
	
			newStr +="<div id='selectedText12'></div>";
			
			newStr +="</div></fieldset></br>";

		document.getElementById('selectedDivforpayment2').innerHTML=newStr;
		//istalmentBlock();
}




	function generateCheckobx(){


	var otherStr ="";

	for (var i=0; i<studentNICLength; i++) {
		 
			
		if (degreeCodeArr.indexOf(degreeCodeArr[i])== degreeCodeArr.lastIndexOf(degreeCodeArr[i]) || (degreeCodeArr.indexOf(degreeCodeArr[i])!= degreeCodeArr.lastIndexOf(degreeCodeArr[i]) && degreeCodeArr.indexOf(degreeCodeArr[i])== i)){
			
			// otherStr += "<div style='clear:both'>";
			// otherStr += "<div class='longIdentifier'>"+categoryTitleArr[i]+"</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			// otherStr += "<div style='float:left' >&nbsp;";
			// otherStr += "<input type='text' id='rate1"+i+"' name='rate1"+i+"'  value= '"+rate1Arr[i]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// otherStr += "</div>";
				// }	
		
			// }

			
			// otherStr += "<div style='clear:both'>";
			// otherStr += "<div class='longIdentifier'>Renewal of Registration Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			// otherStr += "<div style='float:left' >&nbsp;";
			// otherStr += "<input type='text' id='renewalRegistrationFee' name='renewalRegistrationFee'  value= '"+dataRep["renewalRegistrationFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// otherStr += "</div>";
			
			// otherStr += "<div style='clear:both'>";
			// otherStr += "<div class='longIdentifier'>Certificate Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			// otherStr += "<div style='float:left' >&nbsp;";
			// otherStr += "<input type='text' id='certificateFee' name='certificateFee'  value= '"+dataRep["certificateFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// otherStr += "</div>";
			
			// otherStr += "<div style='clear:both'>";
			// otherStr += "<div class='longIdentifier'>Repeat Exam Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			// otherStr += "<div style='float:left' >&nbsp;";
			// otherStr += "<input type='text' id='repeatExamFee' name='repeatExamFee'  value= '"+dataRep["repeatExamFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// otherStr += "</div>";
			
			// otherStr += "<div style='clear:both'>";
			// otherStr += "<div class='longIdentifier'>Convocation Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			// otherStr += "<div style='float:left' >&nbsp;";
			// otherStr += "<input type='text' id='convocationFee' name='convocationFee'  value= '"+dataRep["convocationFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// otherStr += "</div>";
			if(document.getElementById('Paymentmethod1').checked == true){
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Renewal of Registration Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='renewalRegistrationFee' name='renewalRegistrationFee'  value= '"+renewalRegistrationFeeArr[i]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Certificate Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='certificateFee' name='certificateFee'  value= '"+certificateFeeArr[i]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Repeat Exam Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='repeatExamFee' name='repeatExamFee'  value= '"+repeatExamFeeArr[i]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Convocation Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='convocationFee' name='convocationFee'  value= '"+convocationFeeArr[i]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			}
			
			if(document.getElementById('Paymentmethod2').checked == true){
			dataRep["renewalRegistrationFee"] = dataRep["certificateFee"]= dataRep["repeatExamFee"]= dataRep["convocationFee"] ="";
				
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Renewal of Registration Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='renewalRegistrationFee' name='renewalRegistrationFee'  value= '"+dataRep["renewalRegistrationFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Certificate Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='certificateFee' name='certificateFee'  value= '"+dataRep["certificateFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Repeat Exam Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='repeatExamFee' name='repeatExamFee'  value= '"+dataRep["repeatExamFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Convocation Fee</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='convocationFee' name='convocationFee'  value= '"+dataRep["convocationFee"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			}
			
		}
			
	}
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Payment Date(to Bank)</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div>";
			otherStr += "<div style='float:left' >&nbsp;";
			otherStr += "<input type='text' id='paymentDateToBank' name='paymentDateToBank'  value= '"+dataRep["paymentDateToBank"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			otherStr += "</div>";
			
			
			otherStr += "<div style='clear:both'>";
			otherStr += "<div class='longIdentifier'>Paied</div><div class='colon'>&nbsp;&nbsp;&nbsp;:&nbsp;</div> ";
			otherStr += "<div style='float:left' >&nbsp;<div class='chkbox'>";
				if(dataRep['paied1'] == 'Paied'){
                       PaiedChecked = 'checked';
               }
               if(dataRep['paied2'] == 'Theory'){
                       NotpaiedChecked = 'checked';
               }
          
               
		   otherStr +='<input type="checkbox" name="paied1" id="paied1" value="Paied"';
		   otherStr += PaiedChecked;
		   otherStr +=" onchange='dataRep[this.name]=this.value;' onclick ='hidebox();' "+fieldDisabled+"/>Yes";
		   otherStr +='&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="paied2" id="paied2" value="NotPaied"';
		   otherStr += NotpaiedChecked ;
		   otherStr +=" onchange='dataRep[this.name]=this.value;'"+fieldDisabled+"/>No";
		   otherStr +="</div></div>";

			
		
			
			document.getElementById('selectedText12').innerHTML=otherStr;
			
	}
			
			


	// function formStudentOtherPaymentDetailssendForm(frm){

		// var doc, dataStr;
		// var voucherStr = "";
		
		// if(frm.substring(0,3)=="add"){
			// dataStr = "action=add";
		// } else if(frm.substring(0,6)=="update"){
				// dataStr = "action=update";
		// } else if(frm.substring(0,6)=="delete"){
				// dataStr = "action=delete";
		// } else if(frm.substring(0,6)=="search"){
				// dataStr = "action=get";
		// }

		// if(frm == 'addstudentotherpayment' || frm == 'updatestudentotherpayment' || frm == 'deletestudentotherpayment' ){
		// //if(frm == 'addstudentotherpayment'){
		// doc = document.maintainstudentpaymentDetails;

			// dataStr += "&interface="+frm;


			// dataStr += "&universityCode="+dataRep["universityCode"];
			// dataStr += "&facultyCode="+dataRep["facultyCode"];
			// dataStr += "&departmentCode="+dataRep["departmentCode"];			
			// dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			// dataStr += "&degreeCode="+dataRep["degreeCode"];
			
			// if(document.getElementById('Paymentmethod1').checked == true){
				// dataStr +="&paymentMethod="+"Full";
			// }
			// if(document.getElementById('Paymentmethod2').checked == true){
				// dataStr +="&paymentMethod="+"Half";
			// }
			
			// if(document.getElementById('first').checked == true){
				// dataStr += "&instalmentType="+"first";
			// }
			// if(document.getElementById('second').checked == true){
				// dataStr += "&instalmentType="+"second";
			// }
			// if(document.getElementById('third').checked == true){
				// dataStr += "&instalmentType="+"third";
			// }
			// if(document.getElementById('forth').checked == true){
				// dataStr += "&instalmentType="+"forth";
			// }
			// if(document.getElementById('fifth').checked == true){
				// dataStr += "&instalmentType="+"fifth";
			// }
		
			// if(document.getElementById('paied1').checked == true){
				// dataStr += "&paied="+"yes";
			// }
			
			// dataStr += "&paymentDateToBank="+dataRep["paymentDateToBank"];
			// dataStr += "&studentNIC="+dataRep["studentNIC"];
			// dataStr += "&studentName="+dataRep["studentName"];
			// dataStr += "&studentTotalAmount="+dataRep["studentTotalAmount"];
				
			
			// for (var i=0; i<studentNICLength; i++){
				// //if (amountArr[i] !=""){	
					// voucherStr += "&categoryCode="+categoryCodeArr[i];
					// //voucherStr += "&amount="+amountArr[i];
					// voucherStr += "&rate1="+dataRep["rate1"+i];
				
				// dataRep["studentPaymentId"] = studentPaymentIdArr[0];
                // if(dataRep["studentPaymentId"]== null || dataRep["studentPaymentId"]==""){
            // // alert("yes");
                    // voucherStr += "&studentPaymentId="+"1";
                // }else{
             // // alert("no");
                    // var studentPaymentId  = (parseInt(dataRep["studentPaymentId"])+1).toString();
                    // dataRep["studentPaymentId"] = studentPaymentId ;
                    // voucherStr += "&studentPaymentId="+dataRep["studentPaymentId"];
                // }
				// //alert(dataRep["studentPaymentId"]);
				
				// //}	
				// voucherStr += "&renewalRegistrationFee="+dataRep["renewalRegistrationFee"];
				// voucherStr += "&certificateFee="+dataRep["certificateFee"];
				// voucherStr += "&repeatExamFee="+dataRep["repeatExamFee"];
				// voucherStr += "&convocationFee="+dataRep["convocationFee"];
				
				
				
						// voucherArr[i] = dataStr + voucherStr;
					// //alert(voucherArr[i]);	
			// }
			
			// if(frm == 'addstudentpayment'){
				// for(x=0; x<studentNICLength; x++){
					// if(voucherArr[x]!= "" || voucherArr[x]!= null){
				// //alert(budgetDataIncomeArr[budgetLoop]);
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", voucherArr[x]);
					// }
				// }

			// }

		// }	

	 // else{
		 // isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 // }		
			
	// return 0;
		
// }



	function formStudentOtherPaymentDetailssendForm(frm){

		var doc, dataStr;
		var voucherStr = "";
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}

		if(frm == 'addstudentotherpayment' || frm == 'updatestudentotherpayment' || frm == 'deletestudentotherpayment' ){
		//alert("ok");
		//if(frm == 'addstudentotherpayment'){
		doc = document.maintainstudentpaymentDetails;

			dataStr += "&interface="+frm;
	if(document.getElementById('paied1').checked == true){
	//alert("ok121212");
				
		

			dataStr += "&universityCode="+dataRep["universityCode"];
			dataStr += "&facultyCode="+dataRep["facultyCode"];
			dataStr += "&departmentCode="+dataRep["departmentCode"];			
			dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			dataStr += "&degreeCode="+dataRep["degreeCode"];
			
			if(document.getElementById('Paymentmethod1').checked == true){
				dataStr +="&paymentMethod="+"Full";
			}
			if(document.getElementById('Paymentmethod2').checked == true){
				dataStr +="&paymentMethod="+"Half";
			}
			
			// if(document.getElementById('first').checked == true){
				 dataStr += "&instalmentType="+"";
			// }
			// if(document.getElementById('second').checked == true){
				// dataStr += "&instalmentType="+"second";
			// }
			// if(document.getElementById('third').checked == true){
				// dataStr += "&instalmentType="+"third";
			// }
			// if(document.getElementById('forth').checked == true){
				// dataStr += "&instalmentType="+"forth";
			// }
			// if(document.getElementById('fifth').checked == true){
				// dataStr += "&instalmentType="+"fifth";
			// }
		
			
			dataStr += "&paymentDateToBank="+dataRep["paymentDateToBank"];
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&studentName="+dataRep["studentName"];
			dataStr += "&studentTotalAmount="+dataRep["studentTotalAmount"];
				
		
			
				
				// dataRep["studentPaymentId"] = studentPaymentIdArr[0];
                // if(dataRep["studentPaymentId"]== null || dataRep["studentPaymentId"]==""){
            // alert("yes");
                    // dataStr += "&studentPaymentId="+"1";
                // }else{
              // alert("no");
                    // var studentPaymentId  = (parseInt(dataRep["studentPaymentId"])+1).toString();
                    // dataRep["studentPaymentId"] = studentPaymentId ;
                    // dataStr += "&studentPaymentId="+dataRep["studentPaymentId"];
                // }
				
			for (var i=0; i<studentNICArr.length; i++){
				//if(studentNICArr[i] == dataRep["studentNIC"]){
					if(document.getElementById('Paymentmethod1').checked == true){
					//alert("ok");
						dataStr += "&renewalRegistrationFee="+renewalRegistrationFeeArr[i];
						dataStr += "&certificateFee="+certificateFeeArr[i];
						dataStr += "&repeatExamFee="+repeatExamFeeArr[i];
						dataStr += "&convocationFee="+convocationFeeArr[i];
					}
					if(document.getElementById('Paymentmethod2').checked == true){
						dataStr += "&renewalRegistrationFee="+dataRep["renewalRegistrationFee"];
						dataStr += "&certificateFee="+dataRep["certificateFee"];
						dataStr += "&repeatExamFee="+dataRep["repeatExamFee"];
						dataStr += "&convocationFee="+dataRep["convocationFee"];
				
					}	
					
					if(studentPaymentIdArr.length!=0){
						var studentPaymentId=parseInt(studentPaymentIdArr[studentPaymentIdArr.length-1]);
						studentPaymentId=studentPaymentId+1;	
						dataRep['studentPaymentId']=studentPaymentId;
						dataStr += "&studentPaymentId="+studentPaymentId;
						}
						else{
						var studentPaymentId=parseInt('1');
						dataRep['studentPaymentId']=studentPaymentId;
						dataStr += "&studentPaymentId="+studentPaymentId;
						}
					
					
					dataStr += "&paied="+"yes";
					//alert(dataStr);
					//}	
					
					// voucherArr2[i] = dataStr + voucherStr;
								//alert(voucherArr2[i]);
								
				//}				
			}
		}	
			// if(frm == 'addstudentotherpayment'){
				// for(x=0; x<studentNICArr.length; x++){
				// if(studentNICArr[x] == dataRep["studentNIC"]){
					// if(voucherArr2[x]!= ""){
				// //alert(budgetDataIncomeArr[budgetLoop]);
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", voucherArr2[x]);
					// }
				// }
				// }

			// }
	
		}	

	 //else{
		 isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		// }		
			
	return 0;
		
}
	