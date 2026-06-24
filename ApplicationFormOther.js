dataRep["registrationSougth"] = dataRep['mainSubject'] = dataRep["fieldOfSpecialization"] = dataRep["researchMedium"]= dataRep["researchTitle"] ="";
 dataRep["grantForProject"] = dataRep["grantDetails"] = dataRep["financedDetails"]= dataRep["registeredOtherDegree"]= "";

 function displaybuttonFormFourth(){
if(document.getElementById('save')){
document.getElementById('edit').style.display='block';
}
if(document.getElementById('edit')){
document.getElementById('save').style.display='none';
document.getElementById('save2').style.display='block';

}
}
 
 
 
 
 
function callNextFunctionApplicationFive(){
//alert("ok");
	 sendForm('data4ApplicationFormFive');
	 
	
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
			//alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			} 
		}
} 
 


function callNextFunctionEditApplicationFormFourth(){
//alert("ok");
	 sendForm('data4EditApplicationFormFourth');
	 
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
		//	alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				
				dataRep["registrationSougth"]=registrationSougthArr[i];
				dataRep["mainSubject"]=mainSubjectArr[i];
				dataRep["fieldOfSpecialization"]=fieldOfSpecializationArr[i];
				dataRep["researchMedium"]=researchMediumArr[i];
				dataRep["researchTitle"]=researchTitleArr[i];
				dataRep["grantForProject"]=grantForProjectArr[i];
				dataRep["grantDetails"]=grantDetailsArr[i];
				dataRep["financedDetails"]=financedDetailsArr[i];
				dataRep["registeredOtherDegree"]=registeredOtherDegreeArr[i];
				
			} 
		}
} 
 
 
 
 
 



function formApplicationFormFourth(dsp) {
//title = "Education & Professional Details";
		str = "";


		if(dsp == "addApplicationFormFourth" || dsp == "updateApplicationFormFourth" ) {
		
			if(dsp == "updateApplicationFormFourth"){
				title = "";
				keyDisabled = "Disabled";
				
			}

		
			str  = "<div id='addApplicationFormFourth'>";
			str += "<table  ><tr><td>"
			//str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainStudentApplicationFourth" >';

		//	str += "<div style='clear:both'>";

			
			str +="<div class='section1' style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Other</legend><div style='clear:both'>";

			
	
		str +="<div class='longIdentifier'>Degree for which registration is sougth</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='registrationSougth'  value= '"+dataRep['registrationSougth']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
		
		str +="<div class='longIdentifier'>Main Subject</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='mainSubject'  value= '"+dataRep['mainSubject']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
		
		str +="<div class='longIdentifier'>Field of Specialization</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='fieldOfSpecialization'  value= '"+dataRep['fieldOfSpecialization']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
		
		str +="<div class='longIdentifier'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='researchMedium'  value= '"+dataRep['researchMedium']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";

        str +="<div class='longIdentifier'>Title of the proposed Research</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='researchTitle'  value= '"+dataRep['researchTitle']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
   
        str +="<div class='longIdentifier'>Is a grant available for the project</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='grantForProject'  value= '"+dataRep['grantForProject']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";

        str +="<div class='longIdentifier'>If so,give details</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='grantDetails'  value= '"+dataRep['grantDetails']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
  
        str +="<div class='longIdentifier'>If not,how will the project be Financed</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<input type='text' name='financedDetails'  value= '"+dataRep['financedDetails']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";

        //str +="<div class='paragraphDiv'>If you are registered at present for degree/diploma at this university or any other university,give details</div><div class='colon'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</div> <div style='float:left' >";
		str +="<div class='paragraphDiv'>If you are registered at present for degree/diploma at this university or any other university,give details</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
		
		
		str +="<input type='text' name='registeredOtherDegree'  value= '"+dataRep['registeredOtherDegree']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div></fieldset></div>";
 
        //str +="<div ><hr /></div> </div><div style='clear:both'>";

	
			str += "<br><br><center>";
			
			str += "<input type='button' class='btn' value='Save' id='save'  onclick=formApplicationFormFourthsendForm('addApplicationFormFourth');displaybuttonFormFourth();>";
			
			str += "<input type='button' class='btn' value='Save' id='save2' style='display:none;'  onclick=formApplicationFormFourthsendForm('updateApplicationFormFourth');>";
			
			str += "<input type='button' class='btn' value='Edit' id='edit' style='display:none;'  onclick=callNextFunctionEditApplicationFormFourth();displaybuttonFormFourth();>";

			
			str += '<input type="button" class="btn" value = "Next" onclick = callNextFunctionApplicationFive();>';  
			
			//str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addApplicationFormThree'"+');>';  
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addApplicationFormThree'"+');>';  
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	function formApplicationFormFourthsendForm(frm){

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

		if(frm == 'addApplicationFormFourth' || frm == 'updateApplicationFormFourth' ){
 
			doc = document.maintainStudentApplicationFourth;
			dataStr += "&interface="+frm;
			

			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&applicationNo="+dataRep["applicationNo"];
			dataStr += "&registrationSougth="+dataRep["registrationSougth"];	
			dataStr += "&mainSubject="+dataRep["mainSubject"];
			dataStr += "&fieldOfSpecialization="+dataRep["fieldOfSpecialization"];
			dataStr += "&researchMedium="+dataRep["researchMedium"];
			dataStr += "&researchTitle="+dataRep["researchTitle"];
			dataStr += "&grantForProject="+dataRep["grantForProject"];
			dataStr += "&grantDetails="+dataRep["grantDetails"];
			dataStr += "&financedDetails="+dataRep["financedDetails"];
			dataStr += "&registeredOtherDegree="+dataRep["registeredOtherDegree"];
			
//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
	}
	
	
	
	
	
	