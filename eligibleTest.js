dataRep['studentPersonalTitle'] = dataRep['studentInitial'] = dataRep["studentNationality"] = dataRep["studentEmployment"] = "";
dataRep["studentCitizenship"] = dataRep["studentPermanentAddress"] = dataRep["studentOfficeAddress"] = dataRep['correspondence'] ="";
dataRep["selectedDegreeType"]="";


var currentdate = new Date();
var year = currentdate.getFullYear();
var month = (currentdate.getMonth()+1);
var date = currentdate.getDate();
var hours = currentdate.getHours();
var min = currentdate.getMinutes();





function DisplayForm(index){

	//for (i=0; i<criteriaCodeLength; i++){
		if (document.getElementById('selectedCheckbox'+index).checked){
			document.getElementById('form').style.display='block';			
		}
	//}
		else{
			document.getElementById('form').style.display='none';	
		}
}

function callNextFunctionForDegree(){

 //sendForm('data4ApplicationForm');
	 
	
		for(i = 0; i<programmeTypeCodeLength; i++) { 
	
			if(degreeTitleArr[i] == dataRep["selectedDegreeType"]){
			//alert("okk");
			//alert(dataRep["facultyCode"]);
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]= programmeTypeTitleArr[i];
			dataRep["degreeCode"] = degreeCodeArr[i];
			dataRep["degreeTitle"]= degreeTitleArr[i];
			dataRep["batchNo"]= batchNoArr[i];
			dataRep["facultyCode"]= facultyCodeArr[i];
			dataRep["facultyTitle"] = facultyTitleArr[i];
			dataRep["departmentCode"] = departmentCodeArr[i];
			dataRep["departmentTitle"] = departmentTitleArr[i];
				
			
			}
			
			
		}

showMenu('addApplicationForm');
//generateApplicationNo();

}

// function generateApplicationNo(){
// //alert("okk");

// sendForm('data4ApplicationNo');

// // var applicationNo = maxapplicationNoArr[0];
// // dataRep['applicationNo'] = applicationNo;
	// //if(maxapplicationNoArr!=''){
	
		// for(i = 0; i<maxapplicationNoArr.length; i++){
			// //var applicationNo = maxapplicationNoArr[i];
			// //dataRep['applicationNo'] = applicationNo;
			// dataRep['applicationNo'] = maxapplicationNoArr[i];
		
			// if(dataRep['applicationNo']!=''){
			
				// var num = (parseInt(dataRep['applicationNo'].substring(0,5))+1).toString();
				// var newTCode = "";
		
				// for(var tCnt=1; tCnt< 6-(num.toString()).length; tCnt++){
					// newTCode += "0";
				
				// }
							
				// newTCode += num.toString()+"/" + year;
				// dataRep['applicationNo'] = newTCode;
				// //alert(dataRep['applicationNo']);
				// }
		// }
	// //}

// }



function formEligibleTestForm(dsp) {


//title = "Eligibility Test";
		str = "";

		if(dsp == "formEligibleTestForm") {
			
			str  = "<div id='addEligibleTestForm'>";
			str += "<table  ><tr><td>"
			//str += '<h2 >'+title+'</h2><hr>';
			str += '</br></br>';
			str += '<form name="maintainEligibleTestForm" >';

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			programmeTypeCodeStr = "<option>Please scroll down to see the records</option>";
	
			for(var proLoop = 0; proLoop<programmeTypeCodeLength; proLoop++) {
				if (degreeTitleArr.indexOf(degreeTitleArr[proLoop])== degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[proLoop])!= degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) && degreeTitleArr.indexOf(degreeTitleArr[proLoop])== proLoop)){
					//programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[proLoop]+"--"+degreeTitleArr[proLoop]+"</option>";
					programmeTypeCodeStr += "<option>"+degreeTitleArr[proLoop]+"</option>";
				}
			}

			str += "<select id='selectedDegreeType' onchange='dataRep[this.id]=this.value;selectCriteria(this.value);'>";
			str += programmeTypeCodeStr ;
			str += "</select></div>";
			//str += "</select></div>";

			
			
			str +="<div id='criteriaDiv'></div>";
			
			str += "</br></br></br></br><center>";
			
			
			//str += '<input type = "button" class ="btn" id="form" value="Application Form" style="display:none;" onclick="sendForm('+"'data4ApplicationForm'"+')">';
			str += '<input type = "button" class ="btn" id="form" value="Application Form" style="display:none;" onclick="callNextFunctionForDegree();">';
			
			
			
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formClerkMenu'"+')>';
				
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	
	function selectCriteria(selectedDegreeType){
var constr = "";
	
			constr += "<div style='clear:both'>";
			constr += "<div class='longIdentifier'>&nbsp;&nbsp;</div><div class='colon'>&nbsp;:&nbsp;</div>";
			constr += "<div style='float:left' id='' >&nbsp;";
			
		for(criteriaLoop=0; criteriaLoop<criteriaCodeLength; criteriaLoop++){
			if (degreeTitleArr[criteriaLoop] == selectedDegreeType){
				//if (programmeTypeTitleArr[criteriaLoop] == selectedDegreeType){
			
					constr += "<div style='clear:both'>";
					constr += "<div id='instituteDiv' class='investView' style='width:50px;'>";
					constr += "<input type='checkbox'  class='viewArea' id='selectedCheckbox"+criteriaLoop+"' name='selectedCheckbox"+criteriaLoop+"' value ="+criteriaCodeArr[criteriaLoop]+" onchange='dataRep[this.id]=this.value;' onclick='DisplayForm("+criteriaLoop+");' >";
					constr += "</div>";
					constr +="<div id='instituteDiv' class='checkView' style='width:auto;'>"+criteriaTitleArr[criteriaLoop]+"</div></br>";
				//}
			}
		}	

	
	
	document.getElementById('criteriaDiv').innerHTML = constr;
	
	
}