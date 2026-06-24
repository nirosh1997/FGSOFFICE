

// ////Coded by S.Suraweera////
// ////09.06.2015-----



function setValuesReminderDetails(){
		
	for(i=0; i<tidNoLength;i++){

		if(dataRep["studentNIC"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNoArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["RemDate"]=RemDateArr[i];
			dataRep["description"]=descriptionArr[i];
			dataRep["reminderMethod"]=reminderMethodArr[i];
			
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNoArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["RemDate"]=RemDateArr[i];
			dataRep["description"]=descriptionArr[i];
			dataRep["reminderMethod"]=reminderMethodArr[i];
			
			
			
		}else if(dataRep["studentNIC"]==studentNoArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["RemDate"]=RemDateArr[i];
			dataRep["description"]=descriptionArr[i];
			dataRep["reminderMethod"]=reminderMethodArr[i];
			
			
		}
	}while(index != i++);
} 


function formViewReminderDetails(dsp) {

		
		str = ""; 
		title = "Reminder Details View"; 
  
	if(dsp == "formViewReminderDetails") {    

		
			str  = "<div id='formViewReminderDetails'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainformViewReminderDetails"><br>';
						str +="<div>";
						 str +="<div style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
							
			for(studentNoLoop=0; studentNoLoop< tidNoLength; studentNoLoop++){
			
			if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				if(studentNameArr[studentNoLoop] != ""){
				studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
			}
			}
			if (studentNoArr.indexOf(studentNoArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				if(studentNoArr[studentNoLoop] != ""){
				studentNoList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
				}
			}
			if (studentNoArr.indexOf(studentNoArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				if(studentNoArr[studentNoLoop] != ""){
				studentNICList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
				}
			}
			if (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop])==studentNoLoop)){
				if(lecturerNameArr[studentNoLoop] != ""){
				lecturerNameList += "<option value='"+lecturerNameArr[studentNoLoop]+"'>";
				}
			}
			if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop])==studentNoLoop)){
				if(lecturerEmpNoArr[studentNoLoop] != ""){
				lecturerEmpNoList += "<option value='"+lecturerNameArr[studentNoLoop]+"-"+lecturerEmpNoArr[studentNoLoop]+"'>";
				}
			}
					
			}
	
	
			
					str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentName'>"+dataRep["studentName"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
					str += "<textarea rows='auto'  name='title' id='title'  style='float:left;width:220px'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
					str +=dataRep["title"];
					str +=" </textarea></div><br>";
					
					
					
					
					str +="<div id='topics' class='info'>";
					str +="<div class='investLabel_l'>Examiner Name</div>";
					str +="<div class='investLabel'>Date Reminder Sent</div>";
					str +="<div class='investLabel'>Reminder Message</div>";
					str +="<div class='investLabel_l'>Methods Reminder Sent</div>";
					
					
					
					for( var i=0; i<tidNoLength; i++){
		
		//if (tidArr.indexOf(tidArr[i]) == tidArr.lastIndexOf(tidArr[i]) || (tidArr.indexOf(tidArr[i]) != tidArr.lastIndexOf(tidArr[i]) && tidArr.indexOf(tidArr[i])==i)){
			
			str +="<div class='info'   name='testInfo"+i+"'>";
			 
			 
			str += "<div class='hideLabel'>";
			str += lecturerNameArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += RemDateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += descriptionArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += reminderMethodArr[i];
			str +="</div>";
			
			
			
			str += "<div class='investView_l' name='lecturerName"+i+"' id='lecturerName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += lecturerNameArr[i]+"</div>";
			
			str += "<div  class='investView' name='RemDate"+i+"' id='RemDate"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += RemDateArr[i]+"</div>";
			
			str += "<div class='investView' name='description"+i+"' id='description"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+descriptionArr[i]+"</div>";
			 
			str += "<div class='investView_l' name='reminderMethod"+i+"' id='reminderMethod"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+reminderMethodArr[i]+"</div>";
			
			
			
			 // }
			 str += "</div>"; 
			//}
}			
					
					str +="<div style='margin-top:10px;float:center;clear:both;'>";
								
					str += '<input type="button" class="btn" value = "Return" onclick = sendForm('+"'data4ThesisEvaluation'"+');>';
			
	}
		return str;	
	}