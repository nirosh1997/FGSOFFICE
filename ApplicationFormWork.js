dataRep["companyOne"] = dataRep['designationOne'] = dataRep["fromOne"] = dataRep["toOne"] = "";
dataRep["companyTwo"] = dataRep['designationTwo'] = dataRep["fromTwo"] = dataRep["toTwo"] = "";
dataRep["companyThree"] = dataRep['designationThree'] = dataRep["fromThree"] = dataRep["toThree"] = "";

dataRep["refreeNameOne"] = dataRep['refreeAddressOne'] = dataRep["refreeDesignationOne"] =  "";
dataRep["refreeNameTwo"] = dataRep['refreeAddressTwo'] = dataRep["refreeDesignationTwo"] =  "";


function ResetValueApplication(){
	alert("ok");
	dataRep['studentPersonalTitle'] = dataRep['studentInitial'] = dataRep["studentNationality"] = dataRep["studentEmployment"] = "";
	dataRep["studentCitizenship"] = dataRep["studentPermanentAddress"] = dataRep["studentOfficeAddress"] = dataRep['correspondence'] ="";
	dataRep["selectedprogrammeType"] =  dataRep["studentDateofbirth"] ="";
	dataRep["studentName"] = dataRep['studentNIC']= dataRep['applicationNo']="";
programmeTypeCodeLength =0;
dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]="";
	
	RevVenChecked = DrChecked = MrChecked = MrsChecked = MissChecked = "";
	maleChecked = femaleChecked = correspondenceofficeChecked = correspondencehomeChecked ="";

	dataRep["bachelorDegreeTitle"] = dataRep['bachelorDegree'] = dataRep["bachelorDegreeobtainUniversity"] = dataRep["bachelorDegreegraduationYear"] = dataRep["bachelorDegreegraduationMonth"] ="";
	dataRep["higherDegreeTitle"] = dataRep["higherDegreeobtainUniversity"] = dataRep["higherDegreegraduationYear"] = dataRep["higherDegreegraduationMonth"] ="";

	dataRep['higherDegree'] = dataRep['qualificationOne'] = dataRep['qualificationAwardingAuthorityOne'] = dataRep['qualificationAwardingYearOne'] =  "";
	dataRep['qualificationTwo'] = dataRep['qulificationAwardingAuthorityTwo'] = dataRep['qulificationAwardingYearTwo'] =  "";

	FirstClassChecked = SecondClassUpperChecked = SecondClassLowerChecked = PassChecked ="";
	MasterDegreeChecked = PostgraduateDiplomaChecked = OtherChecked = "";
		
	dataRep["companyOne"] = dataRep['designationOne'] = dataRep["fromOne"] = dataRep["toOne"] = "";
	dataRep["companyTwo"] = dataRep['designationTwo'] = dataRep["fromTwo"] = dataRep["toTwo"] = "";
	dataRep["companyThree"] = dataRep['designationThree'] = dataRep["fromThree"] = dataRep["toThree"] = "";

	dataRep["refreeNameOne"] = dataRep['refreeAddressOne'] = dataRep["refreeDesignationOne"] =  "";
	dataRep["refreeNameTwo"] = dataRep['refreeAddressTwo'] = dataRep["refreeDesignationTwo"] =  "";	
		
	
	
}

// function SaveData(){
	// if (saved!="yes"){
		// var x=confirm("You have not saved the changes you made! This may cause a data loss. Continue?");
		// if (x==true)
	  	// {
	  	// showMenu("main");
	  	// }
		// else
	  	// {
	  	// }}
	// else {
		// showMenu("main");
		// }
	// }

function displaybuttonFormThree(){
if(document.getElementById('save')){
document.getElementById('edit').style.display='block';
document.getElementById('finalbtn').style.display='block';
}
if(document.getElementById('edit')){
document.getElementById('save').style.display='none';
document.getElementById('save2').style.display='block';
document.getElementById('finalbtn').style.display='block';

}
if(document.getElementById('save2')){
document.getElementById('finalbtn').style.display='block';
//document.getElementById('edit').style.display='none';
//document.getElementById('next').style.display='none';
}
}

function callNextFunctionToFinalApplication(){
		sendForm('data4FinalApplication');
		for(i = 0; i<studentNICLength; i++) { 
		
			if(studentNICArr[i] == dataRep["studentNIC"]){
//alert(dataRep["educationFieldName"]);
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
				
				dataRep["educationFieldName"]=educationFieldNameArr[i];
				dataRep["educationValue"]=educationValueArr[i];
				
				dataRep["workFieldName"]=workFieldNameArr[i];
				dataRep["workValue"]=workValueArr[i];

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






function callNextFunctionApplicationFourth(){
//alert("ok");
	 sendForm('data4ApplicationFormFourth');
	 
	
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
			//alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
				dataRep["pin"]=pinArr[i];
				dataRep["applicationCode"]=applicationCodeArr[i];

			} 
		}
}


function callNextFunctionEditApplicationFormThree(){
//alert("ok");
	 sendForm('data4EditApplicationFormThree');
	 
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
		//	alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				
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

			} 
		}
}

var code = 0;
var num=0;
var txt=0;
dataRep["workingExperienceValue"]="";
var workingExperienceArr = new Array();
workingExperienceArr = ["Company Name" , "Designation", "From" ,"To"];

dataRep["refreeValue"]="";
var refreeArr = new Array();
refreeArr = ["Name" , "Designation", "Address", "Contact No"];

var	workingDataArr=  new Array();	
var	refreeDataArr =new Array();



function formApplicationFormThree(dsp) {
//title = "Working Experience";
		str = "";

		if(dsp == "addApplicationFormThree" || dsp == "updateApplicationFormThree") {
		
			if(dsp == "updateApplicationFormThree"){
					title = "";
					keyDisabled = "Disabled";
					
			}
		
		
			var FirstClassChecked = SecondClassUpperChecked = SecondClassLowerChecked = PassChecked ="";
			var MasterDegreeChecked = PostgraduateDiplomaChecked = OtherChecked = "";
	
			str  = "<div id='addApplicationFormThree'>";
			str += "<table  ><tr><td>"
			//str += '<h2 ></h2><hr>';
			str += '<form name="maintainStudentApplicationThree" >';

		//	str += "<div style='clear:both'>";

		str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >application no</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['applicationNo']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
		str +="</div>";
		
		str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['studentNIC']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
		str +="</div>";
		
		str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >Application Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['applicationCode']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
		str +="</div>";
	
		str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >Pin</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['pin']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
		str +="</div>";
		
			
		str +="<div class='section1' style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Working Experience</legend><div style='clear:both'>";
			
		str += '<input type="button" style="margin-top:1px" class="btnB" value="Add" onclick=addNewWorkingExperience();>';
		
		str +="<div id='newRow"+code+"' style='margin:0px 10px;clear:both'>";
		str +="<div  id='workDiv' style='margin:clear:both'>"; 
		
		
		str +="</div></div></fieldset>";


		
		str +="<fieldset  class='field'><legend class='fieldHead'>Non-Related Refrees</legend><div style='clear:both'>";

		str +="<div id='newRowOne"+code+"' style='margin:0px 10px;clear:both'>";
		str +="<div  id='refreeDiv' style='margin:clear:both'>"; 
		
		str += '<input type="button" style="margin-top:1px" class="btnB" value="Add" onclick=addNewRefree();>';
		str +="</div></div></fieldset></div>";
		
		

	
			str += "<br><br><center>";
			
			str += "<input type='button' class='btn' value='Confirm' id='save'  onclick=formApplicationFormThreesendForm('addApplicationFormThree');displaybuttonFormThree();>";
			
			str += "<input type='button' class='btn' value='Confirm' id='save2' style='display:none;'  onclick=formApplicationFormThreesendForm('updateApplicationFormThree');displaybuttonFormThree();>";
			
			str += "<input type='button' class='btn' value='Edit' id='edit' style='display:none;'  onclick=callNextFunctionEditApplicationFormThree();displaybuttonFormThree();>";
			
			if(dataRep["programmeTypeCode"] == "PRO0000003" || dataRep["programmeTypeCode"] =="PRO0000004"){
			str += '<input type="button" class="btn" value = "Next"  id="next" onclick = callNextFunctionApplicationFourth();>'; 
			}
			
			str += "<input type='button' class='btn' value=' View Your Final Application' id='finalbtn' style='display:none;' onclick=callNextFunctionToFinalApplication();>";
		
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addApplicationFormTwo'"+');>';  
			
			str += '<input type="button" class="btn" value = "Return To Clerk Menu" onclick = ResetValueApplication();showMenu('+"'formClerkMenu'"+');>';  
			
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	
function addNewWorkingExperience(){


var f ="sentTo"+code;

 
 if((dataRep['sentTo']).value !=""){

dataRep['sentTo'][code]=dataRep['sentTo'];



e="sentTo"+ ++code;
 
 
		var newRowstr ="<div  id='workDiv' style='margin:0px 0px;clear:both'>";  //test333
				
					
		newRowstr +="<div id='newRow"+code+"' style='margin:clear:both'>";
					
				
				var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			
			for(var j=0; j<workingExperienceArr.length; j++){
				
				
						
						
					
						//newRowstr +="<div class='viewArea' style='width:160px';visibility:'hidden' name='educationQualification"+inum+"'  id='educationQualification"+inum+"' onchange='dataRep[this.id]=this.value'>"+educationQualificationArr[j]+"</div>";
						
						newRowstr +="<div><input type='text' style='width:160px';visibility:'hidden' name='workingExperience"+num+"'  id='workingExperience"+num+"' value= '"+workingExperienceArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
					
						
						
						newRowstr +="<input type='text' style='width:230px';visibility:'hidden' name='workingExperienceValue"+num+"'  id='workingExperienceValue"+num+"' value= '"+dataRep["workingExperienceValue"]+"' onchange='dataRep[this.name]=this.value'></div><div>";
					//alert(inum);
						num++;
					
					
									
												
					newRowstr +="</div>";
					
						
					newRowstr +="</div>";
				}
			}	
		document.getElementById('workDiv').innerHTML += newRowstr;

  
}


function addNewRefree(){


var f ="sentTo"+code;

 
 if((dataRep['sentTo']).value !=""){

		dataRep['sentTo'][code]=dataRep['sentTo'];



		e="sentTo"+ ++code;
 
 
		var newRowstr ="<div  id='refreeDiv' style='margin:0px 0px;clear:both'>";  //test333
				
					
		newRowstr +="<div id='newRowOne"+code+"' style='margin:clear:both'>";
					
				
				var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			
			for(var j=0; j<refreeArr.length; j++){

					
						
						newRowstr +="<input type='text' style='width:160px';visibility:'hidden' name='refree"+txt+"'  id='refree"+txt+"' value= '"+refreeArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
					
					
						
						newRowstr +="<input type='text' style='width:230px';visibility:'hidden' name='refreeValue"+txt+"'  id='refreeValue"+txt+"' value= '"+dataRep["professionalQualificationValue"].trim()+"' onchange='dataRep[this.name]=this.value'></div><div>";
					
						txt++;
					//alert(jnum);
					
									
										
					newRowstr +="</div>";
					
						
					newRowstr +="</div>";
				}
				
		document.getElementById('refreeDiv').innerHTML += newRowstr;
	}
  
}
	
	
	
	function formApplicationFormThreesendForm(frm){

		var doc, dataStr,tempid1,tempid2,docid,dataid;
		var newStr ="";
		var sqnum=0;
			
		//var doc, dataStr;

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}

		if(frm == 'addApplicationFormThree' ||  frm == 'updateApplicationFormThree'){
 
			doc = document.maintainStudentApplicationThree;
			dataStr += "&interface="+frm;
				
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&applicationNo="+dataRep["applicationNo"];
			
			dataStr += "&pin="+dataRep["pin"];
			dataStr += "&applicationCode="+dataRep["applicationCode"];
			
			
		for(var i=0; i<num; i++){
		
			newStr += "&workFieldName="+document.getElementById('workingExperience'+i).value;
		
			newStr += "&workValue="+document.getElementById('workingExperienceValue'+i).value;
			
			
			workingDataArr[i]= dataStr + newStr;
			//alert(qualificationDataArr[i]);
		}
		
		for(var x=0; x<txt; x++){

			
			newStr += "&workFieldName="+document.getElementById('refree'+x).value;

			newStr += "&workValue="+document.getElementById('refreeValue'+x).value;
			
			//	}
			
			
			refreeDataArr[x]= dataStr + newStr;
			//alert(qualificationDataArr[i]);
		}
		
		
				
			for(var j=0; j<num; j++){
				if(workingDataArr[j] != ""){				
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", workingDataArr[j]);
				}
			}
			
			for(var k=0; k<txt; k++){
				if(refreeDataArr[j] != ""){				
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", refreeDataArr[k]);
				}
			}
		
	}

		return 0;
}

	
	
	
	
	
	
	
	
	// function formApplicationFormThreesendForm(frm){

	// var doc, dataStr;

		// if(frm.substring(0,3)=="add"){
			// dataStr = "action=add";
		// } else if(frm.substring(0,6)=="update"){
				// dataStr = "action=update";
		// } else if(frm.substring(0,6)=="delete"){
				// dataStr = "action=delete";
		// } else if(frm.substring(0,6)=="search"){
				// dataStr = "action=get";
		// }

		// if(frm == 'addApplicationFormThree' ||  frm == 'updateApplicationFormThree'){
 
			// doc = document.maintainStudentApplicationThree;
			// dataStr += "&interface="+frm;
			

			// dataStr += "&studentNIC="+dataRep["studentNIC"];
			// dataStr += "&applicationNo="+dataRep["applicationNo"];
			
			// // dataStr += "&studentNIC="+"908281179V";
			// // dataStr += "&applicationNo="+"000000001";
			
			// dataStr += "&companyOne="+dataRep["companyOne"];	
			// dataStr += "&designationOne="+dataRep["designationOne"];
			// dataStr += "&fromOne="+dataRep["fromOne"];
			// dataStr += "&toOne="+dataRep["toOne"];
			
			// dataStr += "&companyTwo="+dataRep["companyTwo"];
			// dataStr += "&designationTwo="+dataRep["designationTwo"];
			// dataStr += "&fromTwo="+dataRep["fromTwo"];
			// dataStr += "&toTwo="+dataRep["toTwo"];
			
			// dataStr += "&companyThree="+dataRep["companyThree"];
			// dataStr += "&designationThree="+dataRep["designationThree"];
			// dataStr += "&fromThree="+dataRep["fromThree"];
			// dataStr += "&toThree="+dataRep["toThree"];
			
			// dataStr += "&refreeNameOne="+dataRep["refreeNameOne"];
			// dataStr += "&refreeAddressOne="+dataRep["refreeAddressOne"];
			// dataStr += "&refreeDesignationOne="+dataRep["refreeDesignationOne"];
			
			// dataStr += "&refreeNameTwo="+dataRep["refreeNameTwo"];
			// dataStr += "&refreeAddressTwo="+dataRep["refreeAddressTwo"];
			// dataStr += "&refreeDesignationTwo="+dataRep["refreeDesignationTwo"];
			
// //alert(dataStr);
		// } 
		
		// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		// return 0;
		
// }