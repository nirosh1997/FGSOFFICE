dataRep['selecteddegreeTitle'] = dataRep['batchNo'] = dataRep['roleName']="";
 var Duration1Checked = "";
 var Duration2Checked = "";
 var degreeCodeStr = "";
 var checkStr = "";
 var installmentDataArr = new Array();
dataRep['academicYYYY'] = dataRep['academicMM'] = dataRep['academicDD'] = dataRep['academicYYYY2'] = "";
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
dataRep["installmentValue"]="";
var count=0;
var batchFieldNameArr = new Array();
batchFieldNameArr = ["Academic Year" , "Calender Year", "Commence Date" ,"First Installment Payment Deadline", "Second Installment Payment Deadline" ,"Third Installment Payment Deadline", "Registraion Fee" , "Course Fee(Full Amount)" , "First Installment" , "Second Installment" ,"Third Installment" , "Fourth Installment" ,"Fifth Installment" , "Examination Fee" ,"Library fee-Refundable" , "Library fee-Non- Refundable"];

	
	

function formDegreeDetails(dsp){
		title = "Budget Details";
		str = "";
		var batchNoStr = "";
		
		
		if(dsp == "addDegreeDetails" || dsp == "updateDegreeDetails" || dsp == "deleteDegreeDetails") {

			if(dsp == "updateDegreeDetails" || dsp == "deleteDegreeDetails"){
			//alert(dsp);
				title = "Update Degree Details";
				
				if(dsp == "deleteDegreeDetails"){
				//alert(dsp);
					title = "Delete Degree Details";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedDegree"] != "0"){
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedDegree"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedDegree"]-1];
					dataRep["facultyCode"] = facultyCodeArr[dataRep["selectedDegree"]-1];
					dataRep["facultyTitle"] = facultyTitleArr[dataRep["selectedDegree"]-1];
					dataRep["departmentCode"] = departmentCodeArr[dataRep["selectedDegree"]-1];
					dataRep["departmentTitle"] = departmentTitleArr[dataRep["selectedDegree"]-1];
					dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedDegree"]-1];
					dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedDegree"]-1];
					dataRep["batchNo"] = batchNoArr[dataRep["selectedDegree"]-1];
					dataRep["academicYear"] = academicYearArr[dataRep["selectedDegree"]-1];
					dataRep["calenderYear"] = calenderYearArr[dataRep["selectedDegree"]-1];
					dataRep["certificateFee"] = certificateFeeArr[dataRep["selectedDegree"]-1];
					dataRep["renewalRegistrationFee"] = renewalRegistrationFeeArr[dataRep["selectedDegree"]-1];
					dataRep["convocationFee"] = convocationFeeArr[dataRep["selectedDegree"]-1];
					dataRep["repeatExamFee"] = repeatExamFeeArr[dataRep["selectedDegree"]-1];
					dataRep["extendedDuration"] = extendedDurationArr[dataRep["selectedDegree"]-1];
					dataRep["commenceDate"] = commenceDateArr[dataRep["selectedDegree"]-1];
					dataRep["fullpaymentDeadlineDate"] = fullpaymentDeadlineDateArr[dataRep["selectedDegree"]-1];
					dataRep["halfpaymentDeadlineDate"] = halfpaymentDeadlineDateArr[dataRep["selectedDegree"]-1];					
					dataRep["categoryCode"] = categoryCodeArr[dataRep["selectedDegree"]-1];
					dataRep["categoryTitle"] = categoryTitleArr[dataRep["selectedDegree"]-1];
					dataRep["rate1"] = rate1Arr[dataRep["selectedDegree"]-1];
					dataRep["notification"] = notificationArr[dataRep["selectedDegree"]-1];
				}

			} 
	
			str  = "<div id='addDegreeDetails'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformDegreeDetails" >';
			
			if(dsp == "addDegreeDetails"){
			
			str += "<div class='longIdentifier'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			degreeCodeStr = "<option>Please scroll down to see the records</option>";
	
			for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++) {
			
			//if (departmentTitleArr.indexOf(departmentTitleArr[degLoop])== departmentTitleArr.lastIndexOf(departmentTitleArr[degLoop]) || (departmentTitleArr.indexOf(departmentTitleArr[degLoop])!= departmentTitleArr.lastIndexOf(departmentTitleArr[degLoop]) && departmentTitleArr.indexOf(departmentTitleArr[degLoop])== degLoop)){
				
						degreeCodeStr  += "<option>"+degreeTitleArr[degLoop]+"</option>";
								
					}
						
			//}
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					dataRep['roleName']=roleNameArr[i];
					//alert(dataRep['departmentCode']);
				}
		    
		   }			
			
			str += "<select id='selecteddegreeTitle' name='selecteddegreeTitle' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeStr ;
			str += "</select></div>";
			
			
			str += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			
			dataRep['academicYYYY1'] = year;


			str += "<select name='academicYYYY1' value='academicYYYY1'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['academicYYYY1']);
			str += "</select></div>";
			
			str += "<div class='longIdentifier'>Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str +="<input type='text' style='width:230px';visibility:'hidden' name='courseFee'  id='courseFee' value= '"+dataRep["courseFee"]+"' onchange='dataRep[this.name]=this.value'></div>";
			
			str += "<div class='longIdentifier'>Library Fee</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str +="<input type='text' style='width:230px';visibility:'hidden' name='libraryFee'  id='libraryFee' value= '"+dataRep["libraryFee"]+"' onchange='dataRep[this.name]=this.value'></div>";
			
			dataRep['commenceYYYY'] = year;
			dataRep['commenceMM'] = month;
			dataRep['commenceDD'] = date;
			
			str +="<div class='longIdentifier'>Program Commence Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
			str += "</select>";
			str += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
			str += "</select>";
			str += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
			str += "</select></div>";	
			
			dataRep['appcallYYYY'] = year;
			dataRep['appcallMM'] = month;
			dataRep['appcallDD'] = date;	
				
			str +="<div class='longIdentifier'>Application Calling Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='appcallYYYY' value='appcallYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['appcallYYYY']);
			str += "</select>";
			str += "<select name='appcallMM' value='appcallMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['appcallMM']);
			str += "</select>";
			str += "<select name='appcallDD' value='appcallDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['appcallDD']);
			str += "</select></div>";

			dataRep['appcloYYYY'] = year;
			dataRep['appcloMM'] = month;
			dataRep['appcloDD'] = date;	
				
			str +="<div class='longIdentifier'>Application Closing Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='appcloYYYY' value='appcloYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['appcloYYYY']);
			str += "</select>";
			str += "<select name='appcloMM' value='appcloMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['appcloMM']);
			str += "</select>";
			str += "<select name='appcloDD' value='appcloDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['appcloDD']);
			str += "</select></div>";
			

			
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
			
			str +="<div class='section1' id='installment'  style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Installment Details</legend>";
			str += "<div id='selectedinstalmentdiv'></div>";
			str +='<input type="button" id="addbtn1" class="btn" value="Add Installment" onclick="addInstallment();">';
			str += "</fieldset></div>";

		//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
		}
			


			 str += "<div style='clear:both'>";
			 str += "<br><br><center>";
			
			
			if(dsp == "addDegreeDetails"){
				str += '<input type="button" class="btn" value="Save" onclick=formDegreeDetailssendForm("addDegreeDetails");>';
			} else if(dsp == "updateDegreeDetails") {
				str += '<input type="button" class="btn" value="Update" onclick=formDegreeDetailssendForm("updateDegreeDetails");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formDegreeDetailssendForm("deleteDegreeDetails");>';
			}
			
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshDegreeDetails();' >";
			if(dataRep['roleName']=='Administrator')
		    {
            str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formAdministratorMenu'"+');>';
		    }
			if (dataRep['roleName']=='Subject Clerk')
		    {	
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
		    }
            if(dataRep['roleName']=='Dean')
		    {
            str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formDeanMenu'"+');>';
			dataRep['userName']="Dean Faculty of Graduate Studies"
		    }		
				
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>';
			
			
			str += '</center></div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
		//addInstallment();
		
	}


	function refreshDegreeDetails(){    

	dataRep["academicYear"] = dataRep["calenderYear"] = dataRep["commenceDate"] = dataRep["fullpaymentDeadlineDate"] = dataRep["halfpaymentDeadlineDate"] = dataRep["extendedDuration"] = "";
	dataRep['selecteddegree'] = "";
	//dataRep['selecteduniversity'] = "";
	//dataRep['selectedType'] = "";
	//MaleChecked = FemaleChecked = "";
	//var DepartmentCodeStr = programmeTypeCodeStr = "";
	sendForm('addDegreeDetails');
	//sendForm('data4SelectedStudent');
	
	}
	
	
function addInstallment(){
var newStr=""; 
if (count ==0){
			//newStr +="<table id='myTable'>";
			newStr +="<tr>";
			newStr +="<th style='width:110px;' align='center'><div class='investLabel' style='width:110px;'><font color='black'>Installment No</font></div></th>";
			newStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:150px;' ><font color='black'>Amount</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Deadline</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'></font></div></th>";
			newStr +="</tr>";
			count++;
			newStr +="<tr>";
			newStr +="<div class='info'  id='installmentInfo"+count+"' name='installmentInfo"+count+"'>";
			
			newStr += "<td style='width:110px;word-wrap:break-word;' align='center'><div class='investView' style='width:110px;' name='count"+count+"' id='count"+count+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += count+"</div></td>";
			
			newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' style='width:100px;' id='installmentValue"+count+"' name='installmentValue"+count+"' value= '"+dataRep["installmentValue"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
            newStr += "<td style='width:200px;word-wrap:break-word' align='center'>";
			dataRep['firstpaymentYYYY'] = year;
			dataRep['firstpaymentMM'] = month;
			dataRep['firstpaymentDD'] = date;
			
			
		
			newStr += "<select name='firstpaymentYYYY"+count+"' value='firstpaymentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			newStr += generateNumberOptions(2015, 2025, 4, dataRep['firstpaymentYYYY']);
			newStr += "</select>";
			newStr += "<select name='firstpaymentMM"+count+"' value='firstpaymentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			newStr += generateNumberOptions(0, 12, 2, dataRep['firstpaymentMM']);
			newStr += "</select>";
			newStr += "<select name='firstpaymentDD"+count+"' value='firstpaymentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			newStr += generateNumberOptions(0, 31, 2, dataRep['firstpaymentDD']);
			newStr += "</select>";
			
			newStr += "</td>";
			
            newStr += '<td style="width:80px;word-wrap:break-word" align="center"><input type="button" class="btn" value="Add" onclick="addInstallment();"></td>';	
		
			newStr +="</div>";
			newStr +="</tr>";
			//newStr +="</table><br>";
			
			}
			else {
			
			count++;
			newStr +="<tr>";
			newStr +="<div class='info'  id='installmentInfo"+count+"' name='installmentInfo"+count+"'>";
			
			newStr += "<td style='width:110px;word-wrap:break-word;' align='center'><div class='investView' style='width:110px;' name='count"+count+"' id='count"+count+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += count+"</div></td>";
			
			newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' style='width:100px;' id='installmentValue"+count+"' name='installmentValue"+count+"' value= '"+dataRep["installmentValue"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
            newStr += "<td style='width:200px;word-wrap:break-word' align='center'>";
			dataRep['firstpaymentYYYY'] = year;
			dataRep['firstpaymentMM'] = month;
			dataRep['firstpaymentDD'] = date;
			
			
		
			newStr += "<select name='firstpaymentYYYY"+count+"' value='firstpaymentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			newStr += generateNumberOptions(2015, 2025, 4, dataRep['firstpaymentYYYY']);
			newStr += "</select>";
			newStr += "<select name='firstpaymentMM"+count+"' value='firstpaymentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			newStr += generateNumberOptions(0, 12, 2, dataRep['firstpaymentMM']);
			newStr += "</select>";
			newStr += "<select name='firstpaymentDD"+count+"' value='firstpaymentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			newStr += generateNumberOptions(0, 31, 2, dataRep['firstpaymentDD']);
			newStr += "</select>";
			
			newStr += "</td>";
			
            newStr += '<td style="width:80px;word-wrap:break-word" align="center"><input type="button" class="btn" value="Add" onclick="addInstallment();"></td>';	
		
			newStr +="</div>";
			newStr +="</tr>";
			//newStr +="</table><br>";
			
			}
//newStr +="</table><br>";
		document.getElementById('addbtn1').style.display='none';
document.getElementById('selectedinstalmentdiv').innerHTML += newStr;

}	
	
	
	
	
	
	




	function formDegreeDetailssendForm(frm){
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
			if(frm == 'addDegreeDetails' || frm == 'updateDegreeDetails' || frm == 'deleteDegreeDetails' ){
		
	
				doc = document.maintainformDegreeDetails;
				dataStr += "&interface="+frm;

				dataStr += "&degreeCode="+degreeCodeArr[dataRep["selecteddegreeTitle"]-1];
				dataStr += "&academicYear="+doc.academicYYYY1.value;
				
				dataStr += "&courseFee="+doc.courseFee.value;
				dataStr += "&libraryFee="+doc.libraryFee.value;
				
				dataStr += "&coursecommence="+doc.commenceYYYY.value+"/"+doc.commenceMM.value+"/"+doc.commenceDD.value;
				
				dataStr += "&applicationstarts="+doc.appcallYYYY.value+"/"+doc.appcallMM.value+"/"+doc.appcallDD.value;
				
				dataStr += "&applicationclose="+doc.appcloYYYY.value+"/"+doc.appcloMM.value+"/"+doc.appcloDD.value;
				
				alert(dataStr);

					if(frm.substring(0,3)=="add"){
							instStr = "action=add";
					} else if(frm.substring(0,6)=="update"){
							instStr = "action=update";
					} else if(frm.substring(0,6)=="delete"){
							instStr = "action=delete";
					} else if(frm.substring(0,6)=="search"){
							instStr = "action=get";
					}
		
						instStr += "&interface=addInstallment";
						
						instStr += "&degreeCode="+degreeCodeArr[dataRep["selecteddegreeTitle"]-1];
							
						instStr += "&academicYear="+doc.academicYYYY1.value;
					
							for(i=1; i>count; i++){
							
								instStr += "&installmentNo="+i;
							
								instStr += "&amount="+document.getElementById('installmentValue'+i).value;
								
								instStr += "&paymentdeadline="+document.getElementById('firstpaymentYYYY'+i).value+"/"+document.getElementById('firstpaymentMM'+i).value+"/"+document.getElementById('firstpaymentDD'+i).value;
								
								installmentDataArr[i]= instStr ;
							}
//alert(installmentDataArr[i]);
		
			}

		
		


				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		
				for(var j=1; j>count; j++){
					if(installmentDataArr[j] != ""){				
						isrHandle.getDataFromDB(eval("clientController"), "serverController.php", installmentDataArr[j]);
					}
				}
		//isrHandle.getDataFromDB(eval("clientController"), "serverController.php", instStr);
		
		
			
	return 0;
		
}