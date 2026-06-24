
function formFinalResultsCriteriaAdd(dsp) {

		var title = "Add New Criteria";
		str = "";

		if(dsp == "formFinalResultsCriteriaAdd") {
			
			
			str  = "<div id='viewSubject'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainFinalResultView" >';				
			/***************************************************************************************/
			
			// str += '<h2>'+ dataRep["degTitle"] + ' ('+dataRep["degCode"]+') ' +'</h2>';
			// str += '<h2>'+ dataRep["acYear"]+'</h2><hr>';
			//str += '<h2>'+dataRep['acYear'] + ' - ' + dataRep["degTitle"] + ' ('+dataRep["degCode"]+') ' +'</h2><hr>';
			
			str += '<h2>'+dataRep['acYear'] + ' - ' + dataRep["degTitle"] + ' ('+dataRep["degCode"]+') ' +'</h2><hr>';
			
			
			for (var j = 0 ; j < cr_Length ; j++){
				str += '<p style="text-align:left; font-weight: bold">'+cr_finalResultArr[j]+'</p>';
				var tmpDescription = '';
				if(cr_descriptionArr[j].indexOf('<br>') == -1){
					tmpDescription = cr_descriptionArr[j].replace(/\(/g, "<br>&emsp;&emsp;(");
				}
				
				str += "<p style='text-align:left;margin-left:30px'>"+tmpDescription+"</p><br>";
			}
			
			str += '<hr>';
			str += '<br>';
			var selectedFinalResultList = '';
			
			str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Final Result (Pass/Distinction)*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='text' id='finalResult' list='selectedFinalResultList' value= '' style='width:180px' onchange='updateCriteriaDetails()'>";
					//str += "<input type='text' id='finalResult' value= '' style='width:180px'>";
					for(j=0; j<cr_Length; j++){
						if(cr_finalResultArr[j] !=null){
							selectedFinalResultList += "<option>"+cr_finalResultArr[j]+"</option>";				
						}
					}
					str += "<datalist id='selectedFinalResultList'>"+selectedFinalResultList+"</datalist>";
					
				str += "</div>";
			
				str += "<div class='shortIdentifier' style='clear: none;'>Pass Grade*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='text' id='passGrade' value= '' style='width:50px'>";
				str += "</div>";
			
				str += "<div class='shortIdentifier' style='clear: none;'>GPA*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='number' id='passGPA' value= '' step='0.01' min='0' style='width:70px'>";
				str += "</div>";
			str += "</div>";
			
			
			
			str += "<div style='clear:both'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Minimum Academic Years*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='number' id='academicYears' value= ''  min='0' style='width:70px;margin-right: 140px;'>";
				str += "</div>";
			
				str += "<div class='shortIdentifier' style='clear: none;'>Resit Grade*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='text' id='resitGrade' value= '' style='width:50px'>";
				str += "</div>";
			str += "</div>";
			
			
			
			str += "<div style='clear:both'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Credits</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='number' id='passCredits' value= ''  min='0' style='width:70px; margin-right: 140px;'>";
				str += "</div>";
			
				str += "<div class='shortIdentifier' style='clear: none;'>Thesies Grade</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='text' id='thesiesGrade' value= '' style='width:50px;'>";
				str += "</div>";
			str += "</div>";
			
			
			
			str += "<div style='clear:both'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Optional Subject Credits</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='number' id='optionalCredits' value= ''  min='0' style='width:70px; margin-right: 140px;'>";
				str += "</div>";
				
				str += "<div class='shortIdentifier' style='clear: none;'>Optional Subject Grade</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left' >&nbsp;";
					str += "<input type='text' id='optionalGrade' value= '' style='width:50px; '>";
				str += "</div>";
			str += "</div>";
			
			
			
			
			
			str += "<div style='clear:both;'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Description*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left;' >&nbsp;";
					str += "<textarea rows='10' id='finalDiscription' value= '' style='width:600px; height:100px; margin-bottom: 20px'></textarea>";
				str += "</div>";
			str += "</div>";
			
			
			str += "<div style='clear:both;'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Examination Held in*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left;' >&nbsp;";
					str += "<textarea rows='2' id='examHeld' value= '' style='width:200px; height:50px; margin-bottom: 20px'></textarea>";
				str += "</div>";
			str += "</div>";
			
			str += "<div style='clear:both;'>";
			str += '<br>';
				str += "<div class='longIdentifier'>Results Valid Date*</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<div style='float:left;' >&nbsp;";
					str += "<input type='text' id='examValiddate' value= '' value= '' style='width:200px; '>";
				str += "</div>";
			str += "</div>";
			
			str += '<br>';
			/***************************************************************************************/
			str += "<div style='clear:both'>";
			
			str += '<input type="button" id="critSave" class ="btnD" value="Save" onclick="saveFinalCriteria('+"'addfinalCriteria'"+');">';
			str += '<input type="button" id="critUpdate" style="display:none" class ="btnD" value="Update" onclick="saveFinalCriteria('+"'updatefinalCriteria'"+');">';
			str += '<input type="button" class ="btnD" value="Return" onclick="returnFinalCriteria();showMenu('+"'main'"+');">';
			str += '<input type="reset" id="btnlog" class="btnD" value="Reset"  onclick=" criteRest();"></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}

function updateCriteriaDetails(){
	if(document.getElementById('finalResult').value != ''){
		for(j=0; j<cr_Length; j++){
			if(document.getElementById('finalResult').value == cr_finalResultArr[j]){
				document.getElementById('finalResult').disabled = true;
				document.getElementById('critUpdate').style.display = '';
				document.getElementById('critSave').style.display = 'none';
				
				document.getElementById('passGrade').value = cr_gradeArr[j];
				document.getElementById('passCredits').value = cr_creditsArr[j];
				document.getElementById('passGPA').value = cr_gpaArr[j];
				document.getElementById('thesiesGrade').value = cr_thesisArr[j];
				document.getElementById('optionalGrade').value = cr_optionalSubGArr[j];
				document.getElementById('optionalCredits').value = cr_optionalSubCArr[j];
				document.getElementById('academicYears').value = cr_academicYearsArr[j];
				document.getElementById('resitGrade').value = cr_resitArr[j];
				document.getElementById('finalDiscription').value = cr_descriptionArr[j];
				document.getElementById('examHeld').value = cr_examHeldArr[j];
				document.getElementById('examValiddate').value = cr_examValiddateArr[j];
				break;
				
			}
		}
	}else{
		document.getElementById('critUpdate').style.display = 'none';
		document.getElementById('critSave').style.display = '';
	}
}

function criteRest(){
	document.getElementById('critUpdate').style.display = 'none';
	document.getElementById('critSave').style.display = '';
	document.getElementById('finalResult').disabled = false;
}
	
function saveFinalCriteria(frm) {
	if(document.getElementById('finalResult').value == '' || document.getElementById('passGrade').value == '' ||
	document.getElementById('passGPA').value == '' || document.getElementById('academicYears').value == '' ||
	document.getElementById('resitGrade').value == '' || document.getElementById('finalDiscription').value == '' || document.getElementById('examHeld').value == '' || document.getElementById('examValiddate').value == ''){
		alert("Please fill relevent details");	
	}else{
		
		var dataStr = '';
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
						
		if(frm == 'addfinalCriteria'){
 
			dataStr += "&interface="+frm;

			dataStr += "&cr_degreeCode="+dataRep["degCode"];
			dataStr += "&cr_finalResult="+ document.getElementById('finalResult').value;
			
			dataStr += "&cr_grade="+ document.getElementById('passGrade').value;
			dataStr += "&cr_credits="+ document.getElementById('passCredits').value;
			dataStr += "&cr_gpa="+ document.getElementById('passGPA').value;			
			dataStr += "&cr_thesis="+ document.getElementById('thesiesGrade').value;
			dataStr += "&cr_optionalSubG="+ document.getElementById('optionalGrade').value;
			dataStr += "&cr_optionalSubC="+ document.getElementById('optionalCredits').value;			
			dataStr += "&cr_academicYears="+ document.getElementById('academicYears').value;
			dataStr += "&cr_resit="+ document.getElementById('resitGrade').value;
			dataStr += "&cr_description="+ document.getElementById('finalDiscription').value;
			dataStr += "&cr_examHeld="+ document.getElementById('examHeld').value;
			dataStr += "&cr_examValiddate="+ document.getElementById('examValiddate').value;
			
		
			//alert(dataStr);
		}else if(frm == 'updatefinalCriteria'){
			dataStr += "&interface="+frm;

			dataStr += "&cr_degreeCode="+dataRep["degCode"];
			dataStr += "&cr_finalResult="+ document.getElementById('finalResult').value;
			
			dataStr += "&cr_grade="+ document.getElementById('passGrade').value;
			dataStr += "&cr_credits="+ document.getElementById('passCredits').value;
			dataStr += "&cr_gpa="+ document.getElementById('passGPA').value;			
			dataStr += "&cr_thesis="+ document.getElementById('thesiesGrade').value;
			dataStr += "&cr_optionalSubG="+ document.getElementById('optionalGrade').value;
			dataStr += "&cr_optionalSubC="+ document.getElementById('optionalCredits').value;			
			dataStr += "&cr_academicYears="+ document.getElementById('academicYears').value;
			dataStr += "&cr_resit="+ document.getElementById('resitGrade').value;
			dataStr += "&cr_description="+ document.getElementById('finalDiscription').value;
			dataStr += "&cr_examHeld="+ document.getElementById('examHeld').value;
			dataStr += "&cr_examValiddate="+ document.getElementById('examValiddate').value;
		}
		if(dataStr != ""){
			cr_Length = 0;
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			sendForm('data4finalExamCriteriaAdd');
			return 0;
		}
	}
}	

function returnFinalCriteria() {
	dataRep['acYear'] = '';
	dataRep["degCode"] = '';
	dataRep["degTitle"] = '';
	dataRep["finsemester"] = '';
	cr_Length = 0;
}