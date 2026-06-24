
dataRep['acYear'] = '';
dataRep["degCode"] = '';
dataRep["degTitle"] = '';
dataRep["finsemester"] = '';
// var mediumSinhalaChecked=mediumEnglishChecked="";
// dataRep["selectedmediumFinal"] = '';

function formFinalResultConfirm(dsp) {

		var title = "Final Result";
		str = "";

		if(dsp == "formFinalResultConfirm") {

			str  = "<div id='viewSubject'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainFinalResult" >';
			
			//----------Insert DegreeCode to the table--------------------------
			
			str += "<div style='clear:both'>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='identifiers'>Degree Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
					
				
			var degreeCodeList = "<option>Please scroll down to see the records</option>";
			
						
			for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++) {
			
				if (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degLoop])==degLoop)){
					if (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) || (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) != degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) && degreeCodeArr.indexOf(degreeCodeArr[degLoop])==degLoop)){
					//selectedDeCodeArr[selectedDeCodeLenght]=degreeCodeArr[degLoop];
					//selectedDeCodeLenght++;
			
						degreeCodeList  += "<option id='"+degreeTitleArr[degLoop]+"' title='"+degreeCodeArr[degLoop]+"'>"+degreeTitleArr[degLoop]+"</option>";
					}			
				}						
			}
			
			
			str += "<select id='selecteddegreeTitleFinal' name='selecteddegreeTitleFinal'>";
			str += degreeCodeList ;
			str += "</select></div>";
			
			//
			
			str += "<br><br><center>";

			//-----------Insert Academic Year------------------------------
			str += "<div style='clear:both'>";
			dataRep['acYear']="";
			str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYearFinal' value='academicYearFinal' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += generateNumberOptions(2014, 2025, 4, dataRep['acYear']);
			str += "</select>";
				
			str += "<div class='identifiers' style='clear:none; width:35px'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
				str +="<input type='radio' name='finsemester' id='finsem1' value='1' onchange='dataRep[this.name]=this.value'>1";
				str +="<input type='radio' name='finsemester' id='finsem2' value='2' onchange='dataRep[this.name]=this.value'>2";
				str +="<input type='radio' name='finsemester' id='finsem3' value='3' onchange='dataRep[this.name]=this.value'>3";
				str +="<input type='radio' name='finsemester' id='finsem4' value='4' onchange='dataRep[this.name]=this.value'>4";
				str +="<input type='radio' name='finsemester' id='finsem0' value='0' onchange='dataRep[this.name]=this.value'>All";
			str +="</div>";
			str +="</div>";
			str += "<div style='clear:both'>";
			
			// dataRep['medium']="";
			// str += "<div class='identifiers'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div>";
				// str +="<div class='rdo' style='float:center;position:relative;'>";
				// str +="<input  type='radio'  name='selectedmediumFinal' id='mediumFinal1' value= 'mediumSinhala' onchange='dataRep[this.name]=this.value'>Sinhala";
				// str +="<input  type='radio'  name='selectedmediumFinal' id='mediumFinal2' value= 'mediumEnglish' onchange='dataRep[this.name]=this.value'>English";//</div></div>
				// str += "</div>";
			// str +="</div>";
			
			str += "<div style='clear:both'>";
			str += '<input type="button" class ="btnD" value="View Semester Result" onclick="generateSemesterResultC();">';
			str += '<input type="button" class ="btnD" value="View Final Result" onclick="generateFinalResultC();">';
			str += '<input type="button" class ="btnD" value="Add Result Criteria" onclick="addResultCriteria();">';
			str += '<input type="button" class ="btnD" value="Print Certificate / Transcript" onclick="printCertificatesFinal();">';

			//str += "<input type='reset' class='btnD' value='Reset Values'>";
			str += '<input type="button" class ="btnD" value="Return" onclick="returnFinalResultC();showMenu('+"'main'"+');">';
			//str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
function generateSemesterResultC(){
	if(document.getElementById('selecteddegreeTitleFinal').selectedIndex != 0 
	&& document.getElementById('academicYearFinal').value != ""
	&& dataRep["finsemester"] != "" ){	//&& dataRep["selectedmediumFinal"] !=""
		dataRep["degCode"] = document.getElementById(document.getElementById('selecteddegreeTitleFinal').value).title;
		dataRep["acYear"] = document.getElementById('academicYearFinal').value;
		dataRep["degTitle"] = document.getElementById('selecteddegreeTitleFinal').value;
		//dataRep["medium"] = document.getElementById('selectedmediumFinal').value;
		sendForm('data4finalExamCriteriaSem');
		sendForm('data4finalExamResultsViewSem');
	}else{
		alert('Select relevant fields');
	}
	
}

function generateFinalResultC(){
	if(document.getElementById('selecteddegreeTitleFinal').selectedIndex != 0 
	&& document.getElementById('academicYearFinal').value != "" ){	//&& dataRep["selectedmediumFinal"] !=""
		dataRep["degCode"] = document.getElementById(document.getElementById('selecteddegreeTitleFinal').value).title;
		dataRep["acYear"] = document.getElementById('academicYearFinal').value;
		dataRep["degTitle"] = document.getElementById('selecteddegreeTitleFinal').value;
		//dataRep["medium"] = document.getElementById('selectedmediumFinal').value;
		sendForm('data4finalExamCriteria');
		sendForm('data4finalExamResultsView');
	}else{
		alert('Select relevant fields');
	}
	
}

function addResultCriteria(){
	if(document.getElementById('selecteddegreeTitleFinal').selectedIndex != 0){	
		dataRep["degCode"] = document.getElementById(document.getElementById('selecteddegreeTitleFinal').value).title;
		dataRep["degTitle"] = document.getElementById('selecteddegreeTitleFinal').value;
		dataRep["acYear"] = document.getElementById('academicYearFinal').value;
		//dataRep["medium"] = document.getElementById('selectedmediumFinal').value;
		sendForm('data4finalExamCriteriaAdd');
	}else{
		alert('Select relevant fields');
	}
	
}


function printCertificatesFinal(){
	if(document.getElementById('selecteddegreeTitleFinal').selectedIndex != 0 
	&& document.getElementById('academicYearFinal').value != ""
	&& dataRep["finsemester"] != ""){	
		dataRep["degCode"] = document.getElementById(document.getElementById('selecteddegreeTitleFinal').value).title;
		dataRep["acYear"] = document.getElementById('academicYearFinal').value;
		dataRep["degTitle"] = document.getElementById('selecteddegreeTitleFinal').value;
		sendForm('data4printReport');
		sendForm('data4finalExamResultsPrint');
	}else{
		alert('Select relevant fields');
	}
	
}

function returnFinalResultC() {
	dataRep['acYear'] = '';
	dataRep["degCode"] = '';
	dataRep["degTitle"] = '';
	dataRep["finsemester"] = '';
	degreeCodeLength = 0;
}