function formViewExamApplicants(dsp){
	
	
title1 = "View Exam Applicants";
		str = "";

	if(dsp == "formViewExamApplicants"){
				//alert(studentNoArr);
			

			keyDisabled = "Disabled";	

			
			str  = "<div id='addApplicationForm'>";
			str += "<table  ><tr><td>"
			str += '<center><font color="#bd3303">'+title1+'</font></center></br>';
	
			
			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainformViewExamApplicants" >';
			

			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			var examdegreeCodeList = "<option>Please scroll down to see the records</option>";
			
						
			for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++) {

				if (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degLoop])==degLoop)){
					examdegreeCodeList += "<option id='"+degreeTitleArr[degLoop]+"' title='"+degreeCodeArr[degLoop]+"'>"+degreeTitleArr[degLoop]+"</option>";
                                     
				}						
			}
			

			str += "<select id='examDegreeCode' name='examDegreeCode' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += examdegreeCodeList ;
			str += "</select></div>";
			
			str += "<div style='clear:both'>";
			dataRep['academicYear']="";
			str +="<div class='longIdentifier'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYear' value='academicYear' onchange='dataRep[this.id]=this.selectedIndex;showSemesters();'>";//displaySubjectCode();
			str += generateNumberOptions(2016, 2017, 4, dataRep['academicYear']);
			str += "</select>";

			
			
			
			
			
			str  += "<div id='SemDiv'></div>";
			
			str  += "<div id='admissionFormTable'></div>";


			str += "<div style='clear:both'>";
			str += "<center>";

			str += '<input type="button" class ="btnD" value="Return" onclick="resetResultUpload();showMenu('+"'main'"+');">';
			
			str += '<input type="button" id="btnDlogAdmi" class="btnD" value="logout"  onclick= logOut();></div>';
			
			str += "</div>";
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
	}

		return str;
}