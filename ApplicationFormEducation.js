dataRep["bachelorDegreeTitle"] = dataRep['bachelorDegree'] = dataRep["bachelorDegreeobtainUniversity"] = dataRep["bachelorDegreegraduationYear"] = dataRep["bachelorDegreegraduationMonth"] ="";
dataRep["higherDegreeTitle"] = dataRep["higherDegreeobtainUniversity"] = dataRep["higherDegreegraduationYear"] = dataRep["higherDegreegraduationMonth"] ="";

dataRep['higherDegree'] = dataRep['qualificationOne'] = dataRep['qualificationAwardingAuthorityOne'] = dataRep['qualificationAwardingYearOne'] =  "";
dataRep['qualificationTwo'] = dataRep['qulificationAwardingAuthorityTwo'] = dataRep['qulificationAwardingYearTwo'] =  "";

var FirstClassChecked = SecondClassUpperChecked = SecondClassLowerChecked = PassChecked ="";
var MasterDegreeChecked = PostgraduateDiplomaChecked = OtherChecked = "";

function displaybuttonFormTwo(){
if(document.getElementById('save')){
document.getElementById('edit').style.display='block';
}
if(document.getElementById('edit')){
document.getElementById('save').style.display='none';
//document.getElementById('save2').style.display='block';

}
}
var testNum = 0;
var inum=0;
var jnum=0;
dataRep["educationQualificationValue"]="";
var educationQualificationArr = new Array();
educationQualificationArr = ["Degree Name" , "Grade", "Obtain University" ,"Graduation Year", "Graduation Month"];

dataRep["professionalQualificationValue"]="";
var professionalQualificationArr = new Array();
professionalQualificationArr = ["Qualification" , "Awarding Authority", "Awarding Year"];
var qualificationDataArr = new Array();
var profqualificationDataArr = new Array();

function callNextFunctionApplicationThree(){
//alert("ok");
	 sendForm('data4ApplicationFormThree');
	 
	
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

function callNextFunctionEditApplicationFormTwo(){
//alert("ok");
	 sendForm('data4EditApplicationFormTwo');
	 
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
		//	alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				
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

			} 
		}
}






function formApplicationFormTwo(dsp) {
title = "Education & Professional Details";
		str = "";

		if(dsp == "addApplicationFormTwo" || dsp == "updateApplicationFormTwo" ) {
		
			if(dsp == "updateApplicationFormTwo"){
				title = "";
				keyDisabled = "Disabled";
				
			}
	
			str  = "<div id='addApplicationFormTwo'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainStudentApplicationTwo" >';

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
		
	//	str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >Application Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['applicationCode']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
	//	str +="</div>";
	
	//	str +="<div class='hideLabel'>";
		str +="<div class='longIdentifier' >Pin</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['pin']+"</div>";
		str +="<div class=hideLabel>&nbsp;</div>";
	//	str +="</div>";
			
		str +="<div class='section1' style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Education Qualifications</legend><div style='clear:both'>";

		str += '<input type="button" style="margin-top:1px" class="btnB" value="Add Qualification" onclick=addNewEducationQulification();>';
		
		str +="<div id='newRow"+testNum+"' style='margin:0px 10px;clear:both'>";
		str +="<div  id='inputs' style='margin:clear:both'>"; 
		
		str +="</fieldset></div></div><fieldset  class='field'><legend class='fieldHead'>Professional Qualifications</legend><div style='clear:both'>";
		
		str +="<div id='newRowOne"+testNum+"' style='margin:0px 10px;clear:both'>";
		str +="<div  id='inputsOne' style='margin:clear:both'>"; 
		
		str += '<input type="button" style="margin-top:1px" class="btnB" value="Add Qualification" onclick=addNewProfessionalQulification();>';
		str +="</fieldset></div>";
		



	
			str += "<br><br><center>";
			str +="<div>";
			str += "<input type='button' class='btn' value='Save' id='save'  onclick=formApplicationFormTwosendForm('addApplicationFormTwo');displaybuttonFormTwo();>";
			
			//str += "<input type='button' class='btn' value='Save' id='save2'  style='display:none;'    onclick=formApplicationFormTwosendForm('updateApplicationFormTwo');>";
			
			//str += "<input type='button' class='btn' value='Edit' id='edit'  style='display:none;'    onclick=callNextFunctionEditApplicationFormTwo();displaybuttonFormTwo();>";

			
			str += '<input type="button" class="btn" value = "Next" onclick = callNextFunctionApplicationThree();>';
			
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addApplicationForm'"+');>';
			
					
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	

function addNewEducationQulification(){


var f ="sentTo"+testNum;

 
 if((dataRep['sentTo']).value !=""){

dataRep['sentTo'][testNum]=dataRep['sentTo'];



e="sentTo"+ ++testNum;
 
 
		var newRowstr ="<div  id='inputs' style='margin:0px 0px;clear:both'>";  //test333
				
					
		newRowstr +="<div id='newRow"+testNum+"' style='margin:clear:both'>";
					
				
				var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			
			for(var j=0; j<educationQualificationArr.length; j++){
				
				
						
						
					
						//newRowstr +="<div class='viewArea' style='width:160px';visibility:'hidden' name='educationQualification"+inum+"'  id='educationQualification"+inum+"' onchange='dataRep[this.id]=this.value'>"+educationQualificationArr[j]+"</div>";
						
						newRowstr +="<div><input type='text' style='width:160px';visibility:'hidden' name='educationQualification"+inum+"'  id='educationQualification"+inum+"' value= '"+educationQualificationArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
					
						
						
						newRowstr +="<input type='text' style='width:230px';visibility:'hidden' name='educationQualificationValue"+inum+"'  id='educationQualificationValue"+inum+"' value= '"+dataRep["educationQualificationValue"]+"' onchange='dataRep[this.name]=this.value'></div><div>";
					//alert(inum);
						inum++;
					
					
									
												
					newRowstr +="</div>";
					
						
					newRowstr +="</div>";
				}
			}	
		document.getElementById('inputs').innerHTML += newRowstr;

  
}


function addNewProfessionalQulification(){


var f ="sentTo"+testNum;

 
 if((dataRep['sentTo']).value !=""){

		dataRep['sentTo'][testNum]=dataRep['sentTo'];



		e="sentTo"+ ++testNum;
 
 
		var newRowstr ="<div  id='inputsOne' style='margin:0px 0px;clear:both'>";  //test333
				
					
		newRowstr +="<div id='newRowOne"+testNum+"' style='margin:clear:both'>";
					
				
				var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			
			for(var j=0; j<professionalQualificationArr.length; j++){

					
						
						newRowstr +="<input type='text' style='width:160px';visibility:'hidden' name='professionalQualification"+jnum+"'  id='professionalQualification"+jnum+"' value= '"+professionalQualificationArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
					
					
						
						newRowstr +="<input type='text' style='width:230px';visibility:'hidden' name='professionalQualificationValue"+jnum+"'  id='professionalQualificationValue"+jnum+"' value= '"+dataRep["professionalQualificationValue"].trim()+"' onchange='dataRep[this.name]=this.value'></div><div>";
					
						jnum++;
					//alert(jnum);
					
									
										
					newRowstr +="</div>";
					
						
					newRowstr +="</div>";
				}
				
		document.getElementById('inputsOne').innerHTML += newRowstr;
	}
  
}



function formApplicationFormTwosendForm(frm){

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

		if(frm == 'addApplicationFormTwo' || frm == 'updateApplicationFormTwo'){
 
			doc = document.maintainStudentApplicationTwo;
			dataStr += "&interface="+frm;
				
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&applicationNo="+dataRep["applicationNo"];
			
			dataStr += "&pin="+dataRep["pin"];
			dataStr += "&applicationCode="+dataRep["applicationCode"];
			
		for(var i=0; i<inum; i++){
		
			newStr += "&educationFieldName="+document.getElementById('educationQualification'+i).value;
		
			newStr += "&educationValue="+document.getElementById('educationQualificationValue'+i).value;
			
			
			qualificationDataArr[i]= dataStr + newStr;
			//alert(qualificationDataArr[i]);
		}
		
		for(var x=0; x<jnum; x++){

			
			newStr += "&educationFieldName="+document.getElementById('professionalQualification'+x).value;

			newStr += "&educationValue="+document.getElementById('professionalQualificationValue'+x).value;
			
			//	}
			
			
			profqualificationDataArr[x]= dataStr + newStr;
			//alert(qualificationDataArr[i]);
		}
		
		
				
			for(var j=0; j<inum; j++){
				if(qualificationDataArr[j] != ""){				
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", qualificationDataArr[j]);
				}
			}
			
			for(var k=0; k<jnum; k++){
				if(profqualificationDataArr[j] != ""){				
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", profqualificationDataArr[k]);
				}
			}
		
	}

		return 0;
}


