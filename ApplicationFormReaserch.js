dataRep["applicantName"] = dataRep["applicantInstitution"] = dataRep["applicantAddress"] = dataRep["applicantResearchTitle"] ="";
dataRep['supervisorNameOne'] = dataRep['supervisorPositionOne'] = dataRep['supervisorInstitutionOne'] ="";
dataRep['supervisorNameTwo'] = dataRep['supervisorPositionTwo'] = dataRep['supervisorInstitutionTwo'] ="";
dataRep['supervisorSignatureOne'] = dataRep['supervisorDateOne'] =""; 
dataRep['supervisorSignatureTwo'] = dataRep['supervisorDateTwo'] ="";
dataRep['recHeadDep'] = dataRep['recStudyBoard'] =  dataRep['recFacultyBoard'] = dataRep['recSenate'] = "";
dataRep['supervisorSignatureNameOne'] = dataRep['supervisorSignatureNameTwo'] = dataRep['applicantNameForSupervisor'] = "";



 function displaybuttonFormFive(){
if(document.getElementById('save')){
document.getElementById('edit').style.display='block';
}
if(document.getElementById('edit')){
document.getElementById('save').style.display='none';
document.getElementById('save2').style.display='block';

}
}



function callNextFunctionEditApplicationFormFive(){

	 sendForm('data4EditApplicationFormFive');
	 
		for(i = 0; i<studentNICLength; i++) { 

			if(studentNICArr[i] == dataRep["studentNIC"]){

		
				dataRep["applicationNo"]=applicationNoArr[i];
				
				dataRep["applicantName"] =applicantNameArr[i];
				dataRep["applicantInstitution"] =applicantInstitutionArr[i];
				dataRep["applicantAddress"] =applicantAddressArr[i];
				dataRep["applicantResearchTitle"] =applicantResearchTitleArr[i];
				dataRep['supervisorNameOne'] =supervisorNameOneArr[i];
				dataRep['supervisorPositionOne'] =supervisorPositionOneArr[i];
				dataRep['supervisorInstitutionOne'] =supervisorInstitutionOneArr[i];
				dataRep['supervisorNameTwo'] =supervisorNameTwoArr[i];
				dataRep['supervisorPositionTwo'] =supervisorPositionTwoArr[i];
				dataRep['supervisorInstitutionTwo'] =supervisorInstitutionTwoArr[i];
				dataRep['applicantNameForSupervisor'] =applicantNameForSupervisorArr[i];
				dataRep['supervisorSignatureNameOne'] =supervisorSignatureNameOneArr[i];
				dataRep['supervisorDateOne'] =supervisorDateOneArr[i];
				dataRep['supervisorSignatureOne'] =supervisorSignatureOneArr[i];
				dataRep['supervisorSignatureNameTwo'] =supervisorSignatureNameTwoArr[i];
				dataRep['supervisorDateTwo'] =supervisorDateTwoArr[i];
				dataRep['supervisorSignatureTwo'] =supervisorSignatureTwoArr[i];
				dataRep['recHeadDep'] =recHeadDepArr[i];
				dataRep['recStudyBoard'] =recStudyBoardArr[i];
				dataRep['recFacultyBoard'] =recFacultyBoardArr[i];
				dataRep['recSenate'] = recSenateArr[i];
										
				
			} 
		}


}


function callNextFunctionToFinalApplication(){
		sendForm('data4FinalApplication');
		for(i = 0; i<studentNICLength; i++) { 
		
			if(studentNICArr[i] == dataRep["studentNIC"]){
//alert(dataRep["studentName"]);
//alert(dataRep["studentDateofbirth"]);
		
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
				dataRep["studentName"]=studentNameArr[i];
				dataRep["studentPersonalTitle"]=studentPersonalTitleArr[i];
				dataRep["studentInitial"]=studentInitialArr[i];
				dataRep["studentDateofbirth"]=studentDateofbirthArr[i];
				dataRep["studentNationality"]=studentNationalityArr[i];
				dataRep["studentCitizenship"]=studentCitizenshipArr[i];
				dataRep["studentEmployment"]=studentEmploymentArr[i];
				dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
				dataRep["studentOfficeAddress"]=studentOfficeAddressArr[i];
				dataRep["correspondence"]=correspondenceArr[i];
				dataRep["studentContactLan"]=studentContactLanArr[i];
				dataRep["studentContactMobile"]=studentContactMobileArr[i];
				dataRep["studentContactEmail"]=studentContactEmailArr[i];
				
				dataRep["bachelorDegree"]=bachelorDegreeArr[i];
				dataRep["bachelorDegreeTitle"]=bachelorDegreeTitleArr[i];
				dataRep["bachelorDegreeobtainUniversity"]=bachelorDegreeobtainUniversityArr[i];
				dataRep["bachelorDegreegraduationYear"]=bachelorDegreegraduationYearArr[i];
				dataRep["bachelorDegreegraduationMonth"]=bachelorDegreegraduationMonthArr[i];
				dataRep["higherDegree"]=higherDegreeArr[i];
				dataRep["higherDegreeTitle"]=higherDegreeTitleArr[i];
				dataRep["higherDegreeobtainUniversity"]=higherDegreeobtainUniversityArr[i];
				dataRep["higherDegreegraduationYear"]=higherDegreegraduationYearArr[i];
				dataRep["higherDegreegraduationMonth"]=higherDegreegraduationMonthArr[i];
				dataRep["qualificationOne"]=qualificationOneArr[i];
				dataRep["qualificationAwardingAuthorityOne"]=qualificationAwardingAuthorityOneArr[i];
				dataRep["qualificationAwardingYearOne"]=qualificationAwardingYearOneArr[i];
				dataRep["qualificationTwo"]=qualificationTwoArr[i];
				dataRep["qulificationAwardingAuthorityTwo"]=qulificationAwardingAuthorityTwoArr[i];
				dataRep["qulificationAwardingYearTwo"]=qulificationAwardingYearTwoArr[i];
				
				dataRep["companyOne"]=companyOneArr[i];
				dataRep["designationOne"]=designationOneArr[i];
				dataRep["fromOne"]=fromOneArr[i];
				dataRep["toOne"]=toOneArr[i];
				dataRep["companyTwo"]=companyTwoArr[i];
				dataRep["designationTwo"]=designationTwoArr[i];
				dataRep["fromTwo"]=fromTwoArr[i];
				dataRep["toTwo"]=toTwoArr[i];
				dataRep["companyThree"]=companyThreeArr[i];
				dataRep["designationThree"]=designationThreeArr[i];
				dataRep["fromThree"]=fromThreeArr[i];
				dataRep["toThree"]=toThreeArr[i];
				dataRep["refreeNameOne"]=refreeNameOneArr[i];
				dataRep["refreeAddressOne"]=refreeAddressOneArr[i];
				dataRep["refreeDesignationOne"]=refreeDesignationOneArr[i];
				dataRep["refreeNameTwo"]=refreeNameTwoArr[i];
				dataRep["refreeAddressTwo"]=refreeAddressTwoArr[i];
				dataRep["refreeDesignationTwo"]=refreeDesignationTwoArr[i];
				
				dataRep["registrationSougth"]=registrationSougthArr[i];
				dataRep["mainSubject"]=mainSubjectArr[i];
				dataRep["fieldOfSpecialization"]=fieldOfSpecializationArr[i];
				dataRep["researchMedium"]=researchMediumArr[i];
				dataRep["researchTitle"]=researchTitleArr[i];
				dataRep["grantForProject"]=grantForProjectArr[i];
				dataRep["grantDetails"]=grantDetailsArr[i];
				dataRep["financedDetails"]=financedDetailsArr[i];
				dataRep["registeredOtherDegree"]=registeredOtherDegreeArr[i];
				
				dataRep["applicantName"] =applicantNameArr[i];
				dataRep["applicantInstitution"] =applicantInstitutionArr[i];
				dataRep["applicantAddress"] =applicantAddressArr[i];
				dataRep["applicantResearchTitle"] =applicantResearchTitleArr[i];
				
				

			} 
		}


}


function formApplicationFormFive(dsp) {
title = "Research Details";
		str = "";

		if(dsp == "addApplicationFormFive" || dsp == "updateApplicationFormFive" ){
		
			if(dsp == "updateApplicationFormFive"){
				title = "";
				keyDisabled = "Disabled";
				
			}

			str  = "<div id='addApplicationFormFive'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainStudentApplicationFive" >';

		//	str += "<div style='clear:both'>";

			str +="<fieldset  class='field' style='border: 2px solid black'><legend class='fieldHead'>Applicant's</legend><div style='clear:both'>";
	
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='applicantName' id='applicantName'  value= '"+dataRep["applicantName"]+"'   onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Institution</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='applicantInstitution' id='applicantInstitution' value= '"+dataRep["applicantInstitution"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";

			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='applicantAddress' id='applicantAddress' value= '"+dataRep["applicantAddress"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Title of the Research</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='applicantResearchTitle' id='applicantResearchTitle' value= '"+dataRep["applicantResearchTitle"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div></fieldset></div>";
			
			str +="<div ></div> </div><div style='clear:both'>";
			
			str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorNameOne'  value= '"+dataRep['supervisorNameOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div></div><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Position</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorPositionOne'  value=  '"+dataRep['supervisorPositionOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Institution</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorInstitutionOne'  value=  '"+dataRep['supervisorInstitutionOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div></fieldset></div>";
			

			//str +="<div ><hr /></div> </div><div style='clear:both'>";
			str +="<div ></div> </div><div style='clear:both'>";
			//str +="<div ></div> <div style='float:left' >";
			
			str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorNameTwo'  value= '"+dataRep['supervisorNameTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Position</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorPositionTwo'  value=  '"+dataRep['supervisorPositionTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
			str +="<div class='longIdentifier' >Institution</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorInstitutionTwo'  value=  '"+dataRep['supervisorInstitutionTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div></fieldset></div>";
			
			
			//str +="<div ><hr /></div> </div><div style='clear:both'>";
			str +="<div ></div> </div><div style='clear:both'>";
			str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div class='paragraphDiv'>I/We agree to function as Supervisor/s for </div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		
			//str +="<div class='longIdentifier' >I/We agree to function as Supervisor/s for </div><div style='float:left' >";
			str +="<input type='text' name='applicantNameForSupervisor'  value= '"+dataRep['applicantNameForSupervisor']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div></div><div style='clear:both'>";
			
			
			str +="<div class='paragraphDiv'>I am/We are satisfied that grant /financial support states in No.11 is sufficient to cover the cost of the project</div><div style='clear:both'>";
			//str +="<input type='text' name='supervisorNameTwo'  value= '"+dataRep['supervisorNameTwo'].trim()+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div>";
			
			str +="<div class='identifiers' >Signature</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureOne'  value= '"+dataRep['supervisorSignatureOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div class='identifiers' >Signature</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureTwo'  value= '"+dataRep['supervisorSignatureTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
			
			str +="<div class='identifiers' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureNameOne'  value=  '"+dataRep['supervisorSignatureNameOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div class='identifiers' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureNameTwo'  value=  '"+dataRep['supervisorSignatureNameTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' '></div></div><div style='clear:both'>";
			
			
			str +="<div class='identifiers' >Date</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorDateOne'  value=  '"+dataRep['supervisorDateOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div><div style='float:left' >";
			
			
			
			str +="<div class='identifiers' >Date</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorDateTwo'  value=  '"+dataRep['supervisorDateTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			str +="</fieldset></div>";
			
			
			str +="<div class='paragraphDiv'>Note : Boxes out lined in bold lined should be filled by the applicant</div><div style='clear:both'>";
			str +="</br>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Head of the Department</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recHeadDep' id='recHeadDep' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recHeadDep'];
			str += "</textarea></div><div style='clear:both'>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Board of Study</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recStudyBoard' id='recStudyBoard' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recStudyBoard'];
			str += "</textarea></div><div style='clear:both'>";
		
			str += "<div class='paragraphDiv'>Recommendation of the Faculty Board</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recFacultyBoard' id='recFacultyBoard' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recFacultyBoard'];
			str += "</textarea></div><div style='clear:both'>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Senate</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recSenate' id='recSenate' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recSenate'];
			str += "</textarea></div><div style='clear:both'>";
	
	
			str += "<br><br><center>";
			
			str += "<input type='button' class='btn' value='Confirm' id='save'  onclick=formApplicationFormFivesendForm('addApplicationFormFive');displaybuttonFormFive()>";
			//str += "<input type='button' class='btn' value='Next' id='naxt'  onclick=>"; 
			str += "<input type='button' class='btn' value='Confirm' id='save2'  style='display:none;'  onclick=formApplicationFormFivesendForm('updateApplicationFormFive');>";
			
			str += "<input type='button' class='btn' value='Edit' id='edit'  style='display:none;'  onclick=callNextFunctionEditApplicationFormFive();displaybuttonFormFive()>";

			
			str += "<input type='button' class='btn' value=' View Your Final Application'  onclick=callNextFunctionToFinalApplication();>";

			
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addApplicationFormFourth'"+');>';  
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	function formApplicationFormFivesendForm(frm){

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

		if(frm == 'addApplicationFormFive' || frm == 'updateApplicationFormFive' ){
 
			doc = document.maintainStudentApplicationFive;
			dataStr += "&interface="+frm;
			

			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&applicationNo="+dataRep["applicationNo"];
			
			//dataStr += "&studentNIC="+"wwwwwww";
			//dataStr += "&applicationNo="+"dfdsfdfa";
			
			
			dataStr += "&applicantName="+dataRep["applicantName"];	
			dataStr += "&applicantInstitution="+dataRep["applicantInstitution"];
			dataStr += "&applicantAddress="+dataRep["applicantAddress"];
			dataStr += "&applicantResearchTitle="+dataRep["applicantResearchTitle"];
			dataStr += "&supervisorNameOne="+dataRep["supervisorNameOne"];
			dataStr += "&supervisorPositionOne="+dataRep["supervisorPositionOne"];
			dataStr += "&supervisorInstitutionOne="+dataRep["supervisorInstitutionOne"];
			dataStr += "&supervisorNameTwo="+dataRep["supervisorNameTwo"];
			dataStr += "&supervisorPositionTwo="+dataRep["supervisorPositionTwo"];
			dataStr += "&supervisorInstitutionTwo="+dataRep["supervisorInstitutionTwo"];	
			dataStr += "&applicantNameForSupervisor="+dataRep["applicantNameForSupervisor"];
			dataStr += "&supervisorSignatureNameOne="+dataRep["supervisorSignatureNameOne"];
			dataStr += "&supervisorDateOne="+dataRep["supervisorDateOne"];
			dataStr += "&supervisorSignatureOne="+dataRep["supervisorSignatureOne"];
			dataStr += "&supervisorSignatureNameTwo="+dataRep["supervisorSignatureNameTwo"];
			dataStr += "&supervisorDateTwo="+dataRep["supervisorDateTwo"];
			dataStr += "&supervisorSignatureTwo="+dataRep["supervisorNameTwo"];
			dataStr += "&recHeadDep="+dataRep["recHeadDep"];
			dataStr += "&recStudyBoard="+dataRep["recStudyBoard"];
			dataStr += "&recFacultyBoard="+dataRep["recFacultyBoard"];
			dataStr += "&recSenate="+dataRep["recSenate"];
			
			
//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
	}