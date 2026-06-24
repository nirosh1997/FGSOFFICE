
dataRep["academicYear"]="";
dataRep["semester"] = "";
//var degreeCodeList="";
//var DT="";

var CompusaryChecked = OptionalChecked = compOptChecked =  "";
//var selectedDeCodeArr = new Array();
//var selectedDeCodeLenght=0;
function formViewSubject(dsp) {

		var title = "View Subjects";
		str = "";

		if(dsp == "formViewSubject") {

			str  = "<div id='viewSubject'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainViewSubject" >';
			
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
			
			
			str += "<select id='selecteddegreeTitleSubject' name='selecteddegreeTitleSubject' onchange='viewSubjectDetails()'>";
			str += degreeCodeList ;
			str += "</select></div>";
			
			//
			
			str += "<br><br><center>";

			//-----------Insert Academic Year------------------------------
			str += "<div style='clear:both'>";
			dataRep['academicYear']="";
			str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYear' value='academicYear' onchange='dataRep[this.id]=this.selectedIndex;viewSubjectDetails();'>";
			str += generateNumberOptions(2014, 2025, 4, dataRep['academicYear']);
			str += "</select>";
				
			//----------Select Semester-------------------------------------
			//
			str += "<div class='identifiers' style='clear:none; width:35px'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
				str +="<input type='radio' name='semester' id='sem1' value='1' onchange='dataRep[this.name]=this.value;viewSubjectDetails()'>1";
				str +="<input type='radio' name='semester' id='sem2' value='2' onchange='dataRep[this.name]=this.value;viewSubjectDetails()'>2";
				str +="<input type='radio' name='semester' id='sem3' value='3' onchange='dataRep[this.name]=this.value;viewSubjectDetails()'>3";
				str +="<input type='radio' name='semester' id='sem4' value='4' onchange='dataRep[this.name]=this.value;viewSubjectDetails()'>4";
				str +="<input type='radio' name='semester' id='sem0' value='0' onchange='dataRep[this.name]=this.value;viewSubjectDetails()'>All";
			str +="</div>";
			str +="</div>";
			
			
			str += "<div style='clear:both' id='viewSubjects'>";				
			str += "</div>";			
			
			str += "<div style='clear:both'>";
			
			str += "<input type='reset' class='btnD' value='Reset Values' onclick=resetSubjectsView();  >";
			str += '<input type="button" class ="btnD" value="Return" onclick="returnSubjectView();showMenu('+"'main'"+');">';
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
function viewSubjectDetails(){
	var tmpStr = "";	
	var tmpcnt = 0;
	
	if(document.getElementById('selecteddegreeTitleSubject').selectedIndex != 0 
	&& document.getElementById('academicYear').value != ""
	&& dataRep["semester"] != ""){
		document.getElementById('viewSubjects').innerHTML = "";
		
		if(sub_CodeLength != 0){
			if(dataRep["semester"] == 0){
				tmpStr = "<table id'viewSub' style='margin:10px'>"; 
			
					tmpStr += "<tr style='font-weight:bold'>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Semester</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Subject Code</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Subject Title</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Number of Credits</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Status</th>";
					tmpStr += "</tr>";
				
				var tmpDId = document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;
				for(i=0; i<sub_CodeLength; i++){
					
					if(sub_degreeCodeArr[i] !=null 
					&& tmpDId == sub_degreeCodeArr[i]
					&& document.getElementById('academicYear').value == sub_academicYearArr[i]){
						
						tmpStr += "<tr>";
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 0 5px 0; text-align:center'>";
								tmpStr += sub_semesterArr[i];
							tmpStr += "</td>"
						
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_subjectCodeArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_subjectTitleArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 0 5px 0; text-align:center'>";
								tmpStr += sub_creditsArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_statusArr[i];
							tmpStr += "</td>"
						tmpStr += "</tr>";
						tmpcnt++;
					}
				}
				
				tmpStr += "</table><br>";
				
				//document.getElementById('viewSubjects').innerHTML = tmpStr;
				//return;
			}else if(dataRep["semester"] == 1 || dataRep["semester"] == 2 || dataRep["semester"] == 3 || dataRep["semester"] == 4){
				tmpStr = "<table id'viewSub' style='margin:10px'>"; 
			
					tmpStr += "<tr style='font-weight:bold'>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Subject Code</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Subject Title</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Number of Credits</th>";
						tmpStr += "<th style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px' >Status</th>";
					tmpStr += "</tr>";
				
				var tmpDId = document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;
				for(i=0; i<sub_CodeLength; i++){
					
					if(sub_degreeCodeArr[i] !=null 
					&& tmpDId == sub_degreeCodeArr[i]
					&& document.getElementById('academicYear').value == sub_academicYearArr[i]
					&& dataRep["semester"] == sub_semesterArr[i]){
						
						tmpStr += "<tr>";
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_subjectCodeArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_subjectTitleArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 0 5px 0; text-align:center'>";
								tmpStr += sub_creditsArr[i];
							tmpStr += "</td>"
							
							tmpStr += "<td style='border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; text-align:center'>";
								tmpStr += sub_statusArr[i];
							tmpStr += "</td>"
						tmpStr += "</tr>";
						tmpcnt++;
					}
				}
				
				tmpStr += "</table><br>";
				
				
				//return;
			}
			if(tmpcnt != 0){
				document.getElementById('viewSubjects').innerHTML = tmpStr;
				document.getElementById('viewSubjects').innerHTML += "<input type='button' class='btnD' value='Print' onclick='window.print();return false;' style='float: right;' >";
			}			
		}
		
		
		
	}
}

	
function resetSubjectsView() {
	dataRep["subjectCode"]= dataRep["subjectTitle"] = dataRep["credits"]= dataRep['academicYear']=dataRep["type"]="";
	dataRep["semester"] = "";
	document.getElementById('viewSubjects').innerHTML = "";
	
	//degreeCodeLength=0;
	//sendForm('data4getdegree');
}	

function returnSubjectView() {
	dataRep["subjectCode"]= dataRep["subjectTitle"] = dataRep["credits"]= dataRep['academicYear']=dataRep["type"]="";
	dataRep["semester"] = "";
	degreeCodeLength = 0;
	sub_CodeLength = 0;
	
}