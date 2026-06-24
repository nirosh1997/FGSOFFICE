dataRep['selecteddegreeSource'] = dataRep['batchNo'] = dataRep['roleName']="";
 var Duration1Checked = "";
 var Duration2Checked = "";
 var ddCodeStr = "";
 var IncomeCategoryStr="";
 var checkStr = "";
 var installmentDataArr = new Array();
dataRep['academicYYYY1']=dataRep['academicYYYY'] = dataRep['academicMM'] = dataRep['academicDD'] = dataRep['academicYYYY2'] = "";
dataRep['calenderYYYY'] = dataRep['calenderMM'] = dataRep['calenderDD'] = "";
dataRep['commenceYYYY'] = dataRep['commenceMM'] = dataRep['commenceDD'] = "";
dataRep['fullpaymentYYYY'] = dataRep['fullpaymentMM'] = dataRep['fullpaymentDD'] = "";
dataRep['halfpaymentYYYY'] = dataRep['halfpaymentMM'] = dataRep['halfpaymentDD'] = "";
dataRep["courseFee"] = dataRep["libraryFee"] ="";

dataRep['firstpaymentYYYY'] = dataRep['firstpaymentMM'] = dataRep['firstpaymentDD'] ="";
dataRep['secondpaymentYYYY'] = dataRep['secondpaymentMM'] = dataRep['secondpaymentDD'] = "";
dataRep['fifthpaymentYYYY'] = dataRep['fifthpaymentMM'] = dataRep['fifthpaymentDD'] = "";
dataRep['thirdpaymentYYYY'] = dataRep['thirdpaymentMM'] = dataRep['thirdpaymentDD'] = "";	
dataRep['fourthpaymentYYYY'] = dataRep['fourthpaymentMM'] = dataRep['fourthpaymentDD'] = "";		
dataRep["batchValue"]="";
dataRep['appcallYYYY'] = dataRep['appcallMM'] = dataRep['appcallDD'] ="";
dataRep['appcloYYYY'] = dataRep['appcloMM'] = dataRep['appcloDD'] = "";	
dataRep["installmentValue"]= dataRep["Amount"]="";
var count=0;
var batchFieldNameArr = new Array();
batchFieldNameArr = ["Academic Year" , "Calender Year", "Commence Date" ,"First Installment Payment Deadline", "Second Installment Payment Deadline" ,"Third Installment Payment Deadline", "Registraion Fee" , "Course Fee(Full Amount)" , "First Installment" , "Second Installment" ,"Third Installment" , "Fourth Installment" ,"Fifth Installment" , "Examination Fee" ,"Library fee-Refundable" , "Library fee-Non- Refundable"];

	
	

function formIncomeCategoryDetails(dsp){
		title = "Income Category Details";
		str = "";
		var batchNoStr = "";
		
		if(dsp == "formIncomeCategoryDetails") {

			str  = "<div id='formIncomeCategoryDetails'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformIncomeCategoryDetails" >';
			
		
			
			str += "<div class='longIdentifier'>Income Source</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			ddCodeStr = "<option>Please scroll down to see the records</option>";
	
			for(var dd = 0; dd<degreeCodeLength; dd++) {
			
				if (degreeCodeArr.indexOf(degreeCodeArr[dd])== degreeCodeArr.lastIndexOf(degreeCodeArr[dd]) || (degreeCodeArr.indexOf(degreeCodeArr[dd])!= degreeCodeArr.lastIndexOf(degreeCodeArr[dd]) && degreeCodeArr.indexOf(degreeCodeArr[dd])== dd)){
				
						ddCodeStr  += "<option id='"+degreeTitleArr[dd]+"' title='"+degreeCodeArr[dd]+"'>"+degreeTitleArr[dd]+"--"+IncomeSourceCodeArr[dd]+"</option>";
						//IncomeCategoryStr  += "<option id='"+IncomeCategoryTitleArr[catLoop]+"' title='"+IncomeCategoryCodeArr[catLoop]+"'>"+IncomeCategoryTitleArr[catLoop]+
								
				}
						
			}
						
			
			str += "<select id='selecteddegreeSource' name='selecteddegreeSource' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += ddCodeStr ;
			str += "</select></div>";
			
			
			str += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			
			dataRep['academicYYYY1'] = "";


			str += "<select name='academicYYYY1' value='academicYYYY1'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2022, 2030, 4, dataRep['academicYYYY1']);
			str += "</select></div>";
			
			str += "<div class='longIdentifier'>Income Category</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			IncomeCategoryStr = "<option>Please scroll down to see the records</option>";
	
			for(var catLoop = 0; catLoop<IncomeCategoryCodeLength; catLoop++) {
			
			//if (departmentTitleArr.indexOf(departmentTitleArr[degLoop])== departmentTitleArr.lastIndexOf(departmentTitleArr[degLoop]) || (departmentTitleArr.indexOf(departmentTitleArr[degLoop])!= departmentTitleArr.lastIndexOf(departmentTitleArr[degLoop]) && departmentTitleArr.indexOf(departmentTitleArr[degLoop])== degLoop)){
				
						IncomeCategoryStr  += "<option id='"+IncomeCategoryTitleArr[catLoop]+"' title='"+IncomeCategoryCodeArr[catLoop]+"'>"+IncomeCategoryTitleArr[catLoop]+"</option>";
								
					}
						
			//}
		
			str += "<select id='selectedIncomeCategory' name='selectedIncomeCategory' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += IncomeCategoryStr ;
			str += "</select></div>";
			
			str += "<div class='longIdentifier'>Amount</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str +="<input type='text' style='width:230px';visibility:'hidden' name='Amount'  id='Amount' value= '"+dataRep["Amount"]+"' onchange='dataRep[this.name]=this.value'></div>";
			

			str += "<div style='clear:both'>";
			str += "<br><center>";
			
			
			
			str += '<input type="button" class="btnD" value="Save" onclick=formIncomeCategoryDetailssendForm("addIncomeCategoryDetails");>';
	
			if(dataRep['roleName']=='Administrator')
		    {
            str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
		    }
			if (dataRep['roleName']=='Subject Clerk')
		    {	
			str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
		    }
            if(dataRep['roleName']=='Dean')
		    {
            str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
			dataRep['userName']="Dean Faculty of Graduate Studies"
		    }		
				
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();>';
			
			
			str += '</center></div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
		//addInstallment();
		
	}





	function formIncomeCategoryDetailssendForm(frm){
	//alert("ok");
	var doc, dataStr;
	var instStr="";
	var paymentStr ="";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
			if(frm == 'addIncomeCategoryDetails'){
		
	
				doc = document.maintainformIncomeCategoryDetails;
				dataStr += "&interface="+frm;
				
				
				// for(depLength=0; depLength<IncomeSourceCodeArr.length; depLength++){
							
	// // if(IncomeSourceCodeArr[depLength].trim()==dataRep["selecteddegreeSource"].substring(dataRep["selecteddegreeSource"].indexOf('--')+2,dataRep"selecteddegreeSource"].length)){
	// if(IncomeSourceCodeArr[depLength].trim()==dataRep["selecteddegreeSource"].substring(dataRep["selecteddegreeSource"].indexOf('--')+2, dataRep["selecteddegreeSource"].length)){
									// //alert(departmentTitleArr[depLength]);	
						// var IncomeSourceCode = IncomeSourceCodeArr[depLength];
						// alert(IncomeSourceCode);
							
					// }
				// }
				
				
				
				

				dataStr += "&IncomeSourceCode="+IncomeSourceCodeArr[dataRep["selecteddegreeSource"]-1];
				dataStr += "&achedamicYear="+doc.academicYYYY1.value;
				
				dataStr += "&IncomeCategoryCode="+IncomeCategoryCodeArr[dataRep["selectedIncomeCategory"]-1];
				dataStr += "&IncomeCategoryValue="+doc.Amount.value;
				
				dataStr += "&Currency="+"LKR";
				

				
				alert(dataStr);


			}


		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		//isrHandle.getDataFromDB(eval("clientController"), "serverController.php", instStr);
		
		
			
	return 0;
		
}