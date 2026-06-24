//Coded By Nishadi

dataRep["subject"]=dataRep['roleName']=dataRep['userName']="";
var degCode=degCodeIndex="";
var p=0;
var ApplicantData = new Array();
var NoteData = new Array();
var selectedlist = new Array();
var selectedApplicantlist = new Array();
var selectedConfirmlist = new Array();
var selectedNoteForApplicantList = new Array();
var defaultMsgId = new Array();
var selectedNoteForStudentList = new Array();
var defaultMessage = new Array();
var inboxMsg = new Array();
var val="";
var pick;
function formNoteAndNotification(dsp) {

str = "";

		title = "Send Note And Notification";
		
		if(dsp == "formNoteAndNotification") {
		
		str  = "<div id='formNoteAndNotification'>";
				var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					dataRep['roleName']=roleNameArr[i];
					dataRep['userName']=userNameArr[i];
				}
		    
		   }			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				
				str += "<table id='mainTable' style='width:90%';><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainNoteAndNotificationt"><br>';
					str +="<div>";
					
			str += "<div style='margin-top:20px;float:left;clear:both;margin-left:5px;width:900px;' class = 'demoprint'>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='applicantNote' value='Applicant' onclick=displayApplicantDiv();getDefaultNotes("+"'applicant'"+");>";
			str += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);' id='studentNote' value='Student' onclick=displayStudentNoteDiv();getDefaultNotes("+"'student'"+");>";
			str += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);' id='SARNote' value='Other SAR' onclick=displaySARDiv();getDefaultNotes("+"'FGS Deputy Registrar'"+");>";
			str += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);' id='ExamNote' value='Examiner' onclick=displayExamDiv();>";
			str += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);' id='CoordNote' value='Coordinator' onclick=displayCoordDiv();>";
			str += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);'  id='inboxNote' value='Inbox' onclick=displayInboxDiv();>";
				
			str +="</div>";
//-----------APPLICANTS TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			str +="<div class='section1' id='applicantNoteDiv' style='margin-left:-2px;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Applicants</legend><div style='clear:both'>";
            
			str +="<div style='margin-top:1px;margin-right:1px;float:left;clear:none;'>";
		programName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<ndegreeCodeLength; i++) {

							
							if(degreeTitleArr[i] != null){	
							
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
							}
				
				
				str +="<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='degCode=degreeCodeArr[this.selectedIndex-1];'>";//dataRep[degreeCode]="+degreeCodeArr[+"this.selectedIndex"+]+"degCodeIndex=this.selectedIndex;
				
				str += programName;
				str += "</select>";
				
				
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='appachedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=ViewListApplicant();getDefaultNotes('+'"applicant"'+');>';
				
				str +="<div style='margin-top:1px;float:left;clear:both;'>";
				str +="<input type='button' style='background-Color:#ff6633;padding-right:20px;height:30px;' class='btnB' value = 'Send Note' onclick =formAddStudentNote("+"'addApplicantNote'"+");>";
  		    	
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick =resetNote();>';
			
				if (dataRep['roleName']=='Subject Clerk'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';
				}
				if(dataRep['roleName']=='Dean'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeankMenu'"+');>';
				}
				str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				str += '<input type="button" id="select-allapp" style="display:none;margin-top:1px;float:left;" class="btnB" value="Mark All" onclick=SelectAllApp();>';
				str += '<input type="button" id="select-nonapp" style="display:none;margin-top:1px;float:left;" class="btnB" value="Unmark All" onclick=UnselectAllApp();>';
				
				
				str +="</div>";
				
				str +="<div  id='applicantlist' style='margin-top:1px;float:left;clear:both;'>"; 
				str +="</div>";
				str +="</div>";
			
			str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='apppreview'  id='apppreview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";

		
	/////      <APPLICANT Note and Notification>   <start>
	
	     str +="</br></br></br></br></br></br></br></br></br></br></br></br>";
	        str +="<div id='previewNoteNotiDiv' style='margin-top:2px;margin-right:1;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:340px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Select Default Message / Notes</legend>";
		
		str +="<input type='checkbox'  id='appli1' name='appli1' onclick=selectedNoteForApplicant(1);><font color=#bd3303><font size=2px>Documents required</br> </br>";
		str +="<input type='checkbox'  id='appli2' name='appli2' onclick=selectedNoteForApplicant(2);>Proposal sent to HOD / Coordinator</br></br>";
		str +="<input type='checkbox'  id='appli3' name='appli3' onclick=selectedNoteForApplicant(3);>Proposal rejected</br></br>";
		str +="<input type='checkbox'  id='appli4' name='appli4' onclick='applicantnoteDiv();selectedNoteForApplicant(4);'>Proposal accepted</br></br>";
		     
			 str +="<div id='Applicant1'style=display:none;</br>";
			 str +="<input  type='radio'  name='radio1' id='radio1' value= 'Accepted'>As it is &nbsp";
			 str +="<input  type='radio'  name='radio1' id='radio2' value= 'Rejected'>With amend";
			 str +="<input  type='radio'  name='radio1' id='radio3' value= 'Rejected'>With condition";
			 str +="</br></br>";
			 str +="<hr>";
			 str +="</div>";
			 
		str +="<input type='checkbox'  id='appli5' name='appli5' onclick='applicantnoteDiv();selectedNoteForApplicant(5);'>Call for presentation</br>";
		
		str +="<br><div id='Applicant2'style=display:none;";	
		str +="<br><div id='Applicant2' class='identifiers'>Date</div>";
		//str +="<div class='colon'>&nbsp;</div>";
	    str += "<select name='appliYYYY' id='appliYYYY' value='appliYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['appliYYYY']);
        str += "</select>";
        str += "<select name='appliMM' id='appliMM' value='appliMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['appliMM']);
        str += "</select>";
        str += "<select name='appliDD' id='appliDD' value='appliDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['appliDD']);
        str += "</select>";	
		//str +="<div style='clear:both'>&nbsp;</div>"	
		str +="<div class='identifiers'>Time</div>";
		str += "<select name='appliHHH' id='appliHHH' value='appliHHH'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(00, 24, 2, dataRep['appliHHH']);
		str += "</select>";
		str += "<select name='appliMMM' id='appliMMM' value='appliMMM'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(00, 60, 2, dataRep['appliMMM']);
		str += "</select>";
		str +="</br>&nbsp</br>";
		str +="</br></br>Other notes :<input type='text' id='applinote' name='applinote';></br>";
		str +="</div>";
	////
		str +="<input type='checkbox'  id='appli6' name='appli6' onclick=selectedNoteForApplicant(6);>Sent for BOS decision</br></br>";
		str +="<input type='checkbox'  id='appli7' name='appli7' onclick=selectedNoteForApplicant(7);>Sent to FGS board decision</br></br>";
		str +="<input type='checkbox'  id='appli8' name='appli8' onclick='applicantnoteDiv();selectedNoteForApplicant(8);'>Payment letter sent</br>";
		
		str +="<br><div id='Applicant3'style=display:none;";	
		str +="<br><div id='Applicant3' class='identifiers'>Deadline</div>";
		//str +="<div class='colon'>&nbsp;</div>";
	    str += "<select name='appli1YYYY' id='appli1YYYY' value='appli1YYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['appliYYYY']);
        str += "</select>";
        str += "<select name='appli1MM' id='appli1MM' value='appli1MM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['appliMM']);
        str += "</select>";
        str += "<select name='appliDD' id='appli1DD' value='appli1DD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['appliDD']);
        str += "</select>";
		str +="</br>&nbsp</br>";
		str +="</div>";
		
		str +="<input type='checkbox'  id='appli9' name='appli9' onclick=selectedNoteForApplicant(9);>Payment successful</br></br>";
		str +="<input type='checkbox'  id='appli10' name='appli10' onclick=selectedNoteForApplicant(10);>Registration letter sent</br></br>";
		// onclick=receivedDiv()
		
		 str +="</fieldset></div>";
		
	/////      <APPLICANT Note and Notification>   <end>
			
			str +="</fieldset></div>";
//-----------APPLICANTS TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

//-----------STUDENT TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
	
			str +="<div class='section1' id='studentNoteDiv' style='margin-left:-2px;display:none;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Students</legend><div style='clear:both'>";
           
			
			newStr +="<table id='studentnoteTable' >";
            newStr +="<tr style='background-Color:#ff9f80'>";
            newStr +="<td style='width:60px;' align='left'><div class='investLabel' style='width:150px;'><font color='black'></font>";
		
		
		
	  
			newStr +="</td>";
			
			newStr +="<td style='width:60px;' align='right'><div class='investLabel' style='width:150px;'><font color='black'></font>";
		
		str +="<div style='margin-top:1px;margin-right:1px;float:left;clear:none;'>";
		programName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<ndegreeCodeLength; i++) {

							
							if(degreeTitleArr[i] != null){	
							
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
							}
				
				
				str +="<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='degCode=degreeCodeArr[this.selectedIndex-1];'>";//dataRep[degreeCode]="+degreeCodeArr[+"this.selectedIndex"+]+"degCodeIndex=this.selectedIndex;
				
				
				str += programName;
				str += "</select>";
				
				
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=ViewListStudent();>';
				
				str +="<div style='margin-top:1px;float:left;clear:both;'>";
				str +="<input type='button' style='background-Color:#ff6633;padding-right:20px;height:30px;' class='btnB' value = 'Send Note' onclick =formAddStudentNote("+"'addStudentNote'"+");>";
  		    	
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick =resetNote();>';
			
				if (dataRep['roleName']=='Subject Clerk'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';
				}
				if(dataRep['roleName']=='Dean'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeankMenu'"+');>';
				}
				str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				str += '<input type="button" id="select-all" style="display:none;margin-top:1px;float:left;" class="btnB" value="Mark All" onclick=SelectAllStd();>';
				str += '<input type="button" id="select-non" style="display:none;margin-top:1px;float:left;" class="btnB" value="Unmark All" onclick=UnselectAllStd();>';
				
				
				str +="</div>";
				
				str +="<div  id='studentlist' style='margin-top:1px;float:left;clear:both;'>"; 
				str +="</div>";
				str +="</div>";
		
		/////
			 str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
		/////	
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='preview'  id='preview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";
			
			////<start>
			
			str +="</br></br></br></br></br></br></br></br></br></br></br></br>";
		    str +="<div id='previewNoteNotiDiv' style='margin-top:2px;margin-right:1;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Select Default Message / Notes</legend>";
			
			//////
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='applicantNote' value='Received' onclick=displayReceivedDiv();>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='commonNote' value='Common' onclick=displayCommonDiv();>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='specialNote' value='Special' onclick=displaySpecialDiv();>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='sentNote' value='Sent' onclick=displaySentDiv();>";
			
			//////
			str +="<div id='receivedNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Notify Received Requests</legend>";
			str +="<input type='checkbox'  id='std1' name='To Change Supervisor'; onclick=selectedNoteForStudent(1);><font color=#bd3303><font size=2px>To Change Supervisor </br></br>";
			str +="<input type='checkbox'  id='std2' name='For extension'; onclick=selectedNoteForStudent(2);>For extension  </br></br>";
			str +="<input type='checkbox'  id='std3' name='For Title change'; onclick=selectedNoteForStudent(3);>For Title change </br></br>";
			str +="<input type='checkbox'  id='std4' name='Progress report' onclick='receivedDiv();selectedNoteForStudent(4);'>Progress report </br> </br>";
			str +="<div id='Report_No'style=display:none;> Report No :<input type='text' id='ReportNo' name='ReportNo'></div>";
			str +="<input type='checkbox'  id='std5' name='Refund request'; onclick=selectedNoteForStudent(5);>Refund request </br></br>";
			str +="<input type='checkbox'  id='std6' name='For upgrading'; onclick=selectedNoteForStudent(6);>For upgrading </br></br>";
			str +="<input type='checkbox'  id='std7' name='For cancelling registration'; onclick=selectedNoteForStudent(7);>For cancelling registration </br></br>";
			str +="<input type='checkbox'  id='std8' name='For the submission letter'; onclick=selectedNoteForStudent(8);>For the submission letter </br></br>";
			str +="<input type='checkbox'  id='std9' name='Change examiner'; onclick=selectedNoteForStudent(9);>Change examiner </br></br>";
			str +="</fieldset></div>";
			/////
			
			str +="<div id='commonNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;display:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Common Notes</legend>";
			str +="<input type='checkbox'  id='std10' name='Boss Decision'; onclick=selectedNoteForStudent(10);><font color=#bd3303><font size=2px>Request sent for BOS Decision</br></br>";
			str +="<input type='checkbox'  id='std11' name='Boss Decision recived' onclick='commonDiv();selectedNoteForStudent(11);'>BOS Decision received</br>";
			
			//////commonDiv()
		str +="<br><div id='NoteDate'style=display:none;";	
		str +="<br><div id='noteDate' class='identifiers'>Date</div>";
		str +="<div class='colon'>&nbsp;&nbsp;</div>";
	    str += "<select name='noteYYYY' id='noteYYYY' value='noteYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['noteYYYY']);
        str += "</select>";
        str += "<select name='noteMM' id='noteMM' value='noteMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['noteMM']);
        str += "</select>";
        str += "<select name='noteDD' id='noteDD' value='noteDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['noteDD']);
        str += "</select>";	
		str +="<div style='clear:both'>&nbsp;</div>"	
        str +="</div>";
			////////
		
			str +="<input type='checkbox'  id='std12' name='request sent'; onclick=selectedNoteForStudent(12);>Request sent for FGS Board decision</br></br>";
			str +="<input type='checkbox'  id='std13' name='fgs board'; onclick=selectedNoteForStudent(13);>FGS Board decision</br></br>";
			str +="</fieldset></div>";
			
			
//// new		
            str +="<div id='specialNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;display:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Notify Received Request</legend>";
			str +="<input type='checkbox'  id='std14' name='New Supervisor' onclick='specialDiv();selectedNoteForStudent(14);'><font color=#bd3303><font size=2px>New Supervisor appointed</br></br>";
			str +="<div id='Supername'style=display:none;> Supervisor Name :<input type='text' id='Supername' name='Supername'></div>";
			str +="<input type='checkbox'  id='std15' name='Resend'; onclick=selectedNoteForStudent(15);>Resend progress report</br></br>";
			str +="<input type='checkbox'  id='std16' name='Refund'; onclick=selectedNoteForStudent(16);>Refund information</br></br>";
			str +="<input type='checkbox'  id='std17' name='Criteria upgraded'; onclick=selectedNoteForStudent(17);>Criteria upgraded</br></br>";
			str +="<input type='checkbox'  id='std18' name='Proposals sent'; onclick=selectedNoteForStudent(18);>Proposals sent for evaluation</br></br>";
			str +="<input type='checkbox'  id='std19' name='Oral presentation' onclick='specialDiv();selectedNoteForStudent(19);'>Oral presentation</br>";
			
				//////commonDiv()
		str +="<br><div id='SpeDate'style=display:none;";	
		str +="<br><div id='SpeDate' class='identifiers'>Date</div>";
		//str +="<div class='colon'>&nbsp;&nbsp;</div>";
	    str += "<select name='SpeYYYY' id='SpeYYYY' value='SpeYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['SpeYYYY']);
        str += "</select>";
        str += "<select name='SpeMM' id='SpeMM' value='SpeMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['SpeMM']);
        str += "</select>";
        str += "<select name='SpeDD' id='SpeDD' value='SpeDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['SpeDD']);
        str += "</select>";	
		//str +="<div style='clear:both'>&nbsp;</div>"
        		
        str +="<div class='identifiers'>Time</div>";
		//str +="<div class='colon2'>&nbsp;&nbsp;</div>";
		str += "<select name='SpeHHH' id='SpeHHH' value='SpeHHH'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(00, 24, 2, dataRep['SpeHHH']);
		str += "</select>";
		str += "<select name='SpeMMM' id='SpeMMM' value='SpeMMM'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(00, 60, 2, dataRep['SpeMMM']);
		str += "</select>";
		str +="</br>&nbsp</br>";
		str +="</br></br>Details :<input type='text' id='Spename' name='Spename'></div>";
		//str +="</div>";
		
		
			////////
			
			
			str +="<input type='checkbox'  id='std20' name='Cancellation unsuccessful'; onclick=selectedNoteForStudent(20);>Cancellation unsuccessful</br></br>";
			str +="<input type='checkbox'  id='std21' name='Examiner appointed'; onclick=selectedNoteForStudent(21);>Examiner appointed</br></br>";
			str +="</fieldset></div>";	
			
//////// 
            str +="<div id='sentNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;display:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:480px;background-Color:#ffe6e6;'><legend class='fieldHead'>Common Notes</legend>";
			str +="<input type='checkbox'  id='std22' name='Letter sent'; onclick=selectedNoteForStudent(22);><font color=#bd3303><font size=2px>Letter sent including supervisor details</br></br>";
			str +="<input type='checkbox'  id='std23' name='Extension Letter sent' onclick='sentDiv();selectedNoteForStudent(23);'>Extension Letter sent</br>";
			
			/////
		str +="<br><div id='Notesent'style=display:none;";	
		str +="<br><div id='notesent' class='identifiers'>Payment Deadline</div>";
		str +="<div class='colon'>&nbsp;&nbsp;</div>";
	    str += "<select name='sentYYYY' id='sentYYYY' value='sentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['sentYYYY']);
        str += "</select>";
        str += "<select name='sentMM' id='sentMM' value='sentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['sentMM']);
        str += "</select>";
        str += "<select name='sentDD' id='sentDD' value='sentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['sentDD']);
        str += "</select>";	
		str +="<div style='clear:both'>&nbsp;</div>"	
        str +="</div>";
			//////
			
			
			str +="<input type='checkbox'  id='std24' name='Cheque posted' onclick='sentDiv();selectedNoteForStudent(24);'>Cheque posted</br>";
		
		///////
            str +="<br><div id='Chequesent'style=display:none;";
			str +="</br>Address :<input type='text' id='Sentadd' name='Sentadd'>";
			str +="</br>Amount :<input type='text' id='Sentamount' name='Sentamount'>";
			
		str +="<br><div id='Chequesent' class='identifiers'>Date</div>";
		str +="<div class='colon'>&nbsp;&nbsp;</div>";
	    str += "<select name='ChequeYYYY' id='ChequeYYYY' value='ChequeYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2014, 2025, 4, dataRep['ChequeYYYY']);
        str += "</select>";
        str += "<select name='ChequeMM' id='ChequeMM' value='ChequeMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['ChequeMM']);
        str += "</select>";
        str += "<select name='ChequeDD' id='ChequeDD' value='ChequeDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['ChequeDD']);
        str += "</select>";	
		str +="<div style='clear:both'>&nbsp;</div>"
	    str +="</div>";
        

		//////////	

		 
			str +="<input type='checkbox'  id='std25' name='Upgrade successful' onclick='sentDiv();selectedNoteForStudent(25);'>Upgrade successful,Letter sent</br>";
		///////
			str +="<br><div id='lettsent'style=display:none;";
			str +="</br>New registration No :<input type='text' id='lettreg' name='lettreg'>";
			str +="</br>Balance fee for payment :<input type='text' id='lettbal' name='lettbal'>";
			str +="</div>";
		//////	
			
			str +="<input type='checkbox'  id='std26' name='Cancellation successful'; onclick=selectedNoteForStudent(26);>Cancellation successful,Letter sent</br></br>";
			str +="</fieldset></div>";
			
			str +="</fieldset></div>";
			/////             <end>
			
			
			
			str +="</fieldset></div>";
			str +="</fieldset></div>";
//-----------STUDENT TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

//-----------SAR TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			
			str +="<div class='section1' id='SARNoteDiv' style='margin-left:-2px;display:none;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Other SAR</legend><div style='clear:both'>";
            
			str +="<div style='margin-top:1px;margin-right:1px;float:left;clear:none;'>";
		facName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<facultyLength; i++) {

							
							if(nfacultyTitleArr[i] != null){	
							
							   if (nfacultyTitleArr.indexOf(nfacultyTitleArr[i]) == nfacultyTitleArr.lastIndexOf(nfacultyTitleArr[i]) || (nfacultyTitleArr.indexOf(nfacultyTitleArr[i]) != nfacultyTitleArr.lastIndexOf(nfacultyTitleArr[i]) && nfacultyTitleArr.indexOf(nfacultyTitleArr[i])==i)){
							
							facName += "<option>"+nfacultyTitleArr[i]+"</option>";

									}
								 }
							}
				
				
				str +="<div class='identifiers'>Select Faculty</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedFac' onchange='dataRep[this.name]=this.value;'>";//dataRep[degreeCode]="+degreeCodeArr[+"this.selectedIndex"+]+"degCodeIndex=this.selectedIndex;
				
				
				str += facName;
				str += "</select>";
				str +="</div>";
			
			str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='preview'  id='preview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";
			
			
			/////      <SAR Note and Notification>   <start>
	
            str +="</br></br></br></br></br></br></br></br></br></br></br></br>";
	        str +="<div id='previewNoteNotiDiv' style='margin-top:2px;margin-right:1;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:340px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Select Default Message / Notes</legend>";
		   
		    str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='sarreqNote' value='Received request' onclick=displaySarreqDiv();>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='sarletNote' value='Sent letter' onclick=displaySarletDiv();>";
			str +="<input type='button'  style='margin-top:0px;background-image:url(img/button.png);' id='sarfgsNote' value='FGS Board decision' onclick=displaySarfgsDiv();>";
	
	////  sarreqNoteDiv	
	
			str +="<div id='sarreqNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Notify Received Requests</legend>";
			
			str +="<input type='checkbox'  id='req1' name='Newsarreq'onclick=sarreqDiv();><font color=#bd3303><font size=2px>Request received to change Supervisor by :</br></br>";
			 str +="<select name='reqsuper' id='reqsuper' style='width:300px; display:none;'></br></br>";
			str +="<input type='checkbox'  id='req2' name='Newsarreq' onclick=sarreqDiv();>Request received extension by :</br></br>";
			 str +="<select name='reqext' id='reqext' style='width:300px; display:none;'></br></br>";
			str +="<input type='checkbox' id='req3' name='Newsarreq'onclick=sarreqDiv();>Request received for title change by :</br>";

			  str +="<br><div id='reqtit'style=display:none;";
			  str +="<br><div id='reqtit1' class='identifiers'></div>";
			 str +="<select name='reqtit1' id='reqtit1' style='width:300px;'>";
			 str += "</select>";
			 str +="<br><div id='reqtit2' class='identifiers'>Old title</div>";
			 str +="<select name='reqtit2' id='reqtit2' style='width:300px;'>";
			 str += "</select>";
			 str +="<br><div id='reqtit3' class='identifiers'>New title</div>";
			 str +="<select name='reqtit3' id='reqtit3' style='width:300px;'>";
			 str += "</select>";
			 str +="</div>";
			
			str +="<input type='checkbox' id='request4' name='Newsarreq'onclick=sarreqDiv();>Student upgrade received from :</br>";
		  
		    str +="<br><div id='requp'style=display:none;";
			str +="<br><div id='requp1' class='identifiers'></div>";
			 str +="<select name='requp1' id='requp1' style='width:300px;'>";
			 str += "</select>";
			 str +="<br><div id='requp2' class='identifiers'>Degree</div>";
			 str +="<select name='requp2' id='requp2' style='width:300px;'>";
			 str += "</select>";
			 str +="<br><div id='requp3' class='identifiers'>Academic year</div>";
			 str +="<select name='requp3' id='requp3' style='width:300px;'>";
			 str += "</select>";
			 str +="</div>";
			
			str +="</fieldset></div>";
			
	//// sarletNoteDiv
	
			str +="<div id='sarletNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;display:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Notify Received Requests</legend>";
			str +="<input type='checkbox'  id='let1' name='Newsarlet';><font color=#bd3303><font size=2px>Supervisor appointment letter sent</br></br>";
			str +="<input type='checkbox'  id='let2' name='Newsarlet';>Examiner letter sent</br></br>";
			str +="<input type='checkbox'  id='let3' name='Newsarlet';>New examiner appointment letter sent</br></br>";
			str +="</fieldset></div>";
			
	//// sarfgsNoteDiv
	
			str +="<div id='sarfgsNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;display:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:auto;background-Color:#ffe6e6;'><legend class='fieldHead'>Notify Received Requests</legend>";
			
			str +="<input type='checkbox'  id='fgs1' name='New Sarreport' onclick=sarfgsDiv();><font color=#bd3303><font size=2px>Progress report";
			 str +="<div id='Sarreport'style=display:none;> Report No :<input type='text' id='Sarreport' name='Sarreport'></br>";
			 str +="<input  type='radio'  name='selectfgsreport' id='Accepted' value= 'Accepted'>Accepted &nbsp";
			 str +="<input  type='radio'  name='selectfgsreport' id='Rejected' value= 'Rejected'>Rejected";
			 str +="<hr>";
			 str +="</div>";
			 str +="</br></br>";
			
			str +="<input type='checkbox'  id='fgs2' name='New Supervisor' onclick=sarfgsDiv();>Refund request</br>";
			 str +="<div id='Sarreq'style=display:none;> Report No :<input type='text' id='Sarreq' name='Sarreq'></br>";
			 str +="<input  type='radio'  name='selectfgsreq' id='Accepted' value= 'Accepted'>Accepted &nbsp";
			 str +="<input  type='radio'  name='selectfgsreq' id='Rejected' value= 'Rejected'>Rejected";
			 str +="</div>";
			 str +="</br></br>";
			str +="</fieldset></div>";
			str +="</fieldset></div>";
			str +="</fieldset></div>";
			
		  str +="</fieldset></div>";
	
	/////      <SAR Note and Notification>   <end>
//-----------SAR TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

//-----------EXAMINER TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			
			str +="<div class='section1' id='ExamNoteDiv' style='margin-left:-2px;display:none;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Examiner</legend><div style='clear:both'>";
            str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='preview'  id='preview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";
			str +="</fieldset></div>";
//-----------EXAMINER TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

//-----------COORDINATOR TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			
			str +="<div class='section1' id='CoordNoteDiv' style='margin-left:-2px;display:none;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Coordinator</legend><div style='clear:both'>";
            str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='preview'  id='preview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";
			str +="</fieldset></div>";
//-----------COORDINATOR TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

//-----------INBOX TAB START------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
			
			str +="<div class='section1' id='inboxNoteDiv' style='margin-left:-2px;display:none;'><fieldset  class='field' style='width:1200px;height:90%;'><legend class='fieldHead'>Your Inbox</legend><div style='clear:both'>";
            
			str +="<div  id='confirmlist' style='margin-top:1px;float:left;clear:both;'>"; 
			
			str +="<div style='margin-top:1px;float:left;clear:both;'>";
				str +="<input type='button' style='background-Color:#ff6633;padding-right:20px;height:30px;' class='btnB' value = 'Confirm and Send Note' onclick =formAddStudentNote("+"'updateNote'"+");>";
  		    	
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick =resetNote();>';
			
				if (dataRep['roleName']=='Subject Clerk'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';
				}
				if(dataRep['roleName']=='Dean'){
				str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeankMenu'"+');>';
				}
				str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				str +="</div>";
				getSavedMessage();
				str +="<table id='confirmNoteTable' >";
				str +="<tr style='background-Color:#ff9f80'>";
				str +="<th style='width:60px;' align='center'><div class='investLabel' style='width:60px;'><font color='black'>Select</font></div></th>";
				str +="<th style='width:60px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Recipient</font></div></th>";
				str +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:100px;'><font color='black'>Message</font></div></th>";
				str +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:100;'><font color='black'>Additional Notes</font></div></th>";
				str +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:100px;'><font color='black'>Requested Date</font></div></th>";
				//str +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:100;'><font color='black'>Edit Additional Notes</font></div></th>";
				str +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:100;'><font color='black'>Preview</font></div></th>";
				str +="</tr>";
				
				for(i=0;i<confirmNoteLength;i++){
				if(studentIDArr.indexOf(studentIDArr[i]) == studentIDArr.lastIndexOf(studentIDArr[i]) || (studentIDArr.indexOf(studentIDArr[i]) != studentIDArr.lastIndexOf(studentIDArr[i]) && studentIDArr.indexOf(studentIDArr[i])==i)){
					
				str +="<tr>";
				str += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered"+i+"' id='registered"+i+"'>";
				str += "<input type='checkbox'  "+registeredChecked+"  id='concheckRegistered"+i+"' name='checkRegistered"+i+"' onchange='selectedConfirmNoteList("+i+")'/>";
				str += "</div></td>";
				str += "<td style='width:150px;' align='center'><div style='width:150px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				str += studentIDArr[i]+"</div></td>";		
			//	str += "<td style='width:100px;' align='center'><div style='width:150px;' class='investView_l' name='appNo"+i+"' id='recmsg"+i+"' onchange='dataRep[this.name]=this.value;'>";
				//str += inboxMsg[i]+"</div></td>";
				
				//////
				
				str += "<td style='width:100px;' align='center'><div style='width:100px;' class='investView'><textarea rows='auto' name='appNo"+i+"' id='recmsg"+i+"' style='width:90%;float:left;'  onchange='dataRep[this.name]=this.value;'>";
				str +=inboxMsg[i]+"</textarea></div></td>";
				/////
				
				str += "<td style='width:100px;' align='center'><div style='width:100px;' class='investView'><textarea rows='auto' name='connotes"+i+"' id='connotes"+i+"' style='width:90%;float:left;'  onchange='dataRep[this.name]=this.value'>";
				str +=additionalNotesArr[i]+" </textarea></div></td>";
				str += "<td style='width:100px;' align='center'><div style='width:100px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				str += ndateArr[i]+"</div></td>";
				// str +="<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
				// str +="</div>";
				// str += "<div id='notesDiv"+i+"' style='width:120px;display:none;clear:none;' class='investView'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:90%;float:left;'  onchange='dataRep[this.name]=this.value'>";
				// str +=" </textarea></div></td>";
				str +="<td style='width:100px;word-wrap:break-word'><div style='width:100px;' class='investView'><input type='button' name='prevBttn"+i+"' id='prevBttn"+i+"' style='margin-top:0px' value='Preview' onclick='previewRecievedNote("+i+");dataRep[this.name]=this.value; '></div></td>";
				
				
			var checkBoxDivIdRegistered = 'concheckRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';						
					}
				}
			
			
				
				str +="</tr>";
					
					}
				}
				
				str +="</table>";
				str +="</div>";
			
			str +="<div id='previewNoteDiv' style='margin-top:1px;margin-right:1px;float:right;clear:none;'>";
			str +="<fieldset  class='field' style='width:320px;height:230px;background-Color:#ffe6e6;'><legend class='fieldHead'>Preview</legend>";
			str +="<textarea name='preview'  id='conpreview' style='width:320px;height:180px;float:right;'></textarea>";
			str +="</fieldset></div>";
			str +="</fieldset></div>";
			
//-----------INBOX TAB END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			

			str +="<div style='clear:both'>&nbsp;</div>";
			//// tb
			newStr +="</div>";
			newStr +="</td>";
			newStr +="</tr>";	
            newStr +="</table>";
            //newStr +="<br>&nbsp;&nbsp;&nbsp;&nbsp;";
			////
			str +="<div>";
			str +="</div>";
			
			str += '</form>';			
			str += '</div></td></tr></table>';
							
		
		
	}

		return str;
}

function getSavedMessage(){	
	var mID;
	for(i=0;i<confirmNoteLength;i++){
		mID=messageIdArr[i].split("|");
		
		for(j=0;j<messageLength;j++){
			if(messageTypeIDArr[j]==mID[0] && MIDArr[j]==mID[1]){
				if(mID[2]!=undefined)
					inboxMsg[i]=messageNoteArr[j]+" "+mID[2];
				else
					inboxMsg[i]=messageNoteArr[j];
				
			}
		}
		
	}
	//alert("end");
}

function ViewListApplicant(){
	var count=0;
	document.getElementById('select-allapp').style="display";
	document.getElementById('select-nonapp').style="display";	
	document.getElementById('applicantlist').innerHTML =document.getElementById('applicantlist').innerHTML.replace="";
	var newStr ="<table id='appListTable' >";
				newStr +="<tr style='background-Color:#ff9f80'>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:60px;'><font color='black'>Select</font></div></th>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:60px;'><font color='black'>Count</font></div></th>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Student No.</font></div></th>";
				newStr +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Name</font></div></th>";
				newStr +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:170px;'><font color='black'>Add Additional Notes</font></div></th>";
				newStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Preview</font></div></th>";
				newStr +="</tr>";
				
				for(i=0;i<napplicantNoLength;i++){
					
					if(napplicantNoArr.indexOf(napplicantNoArr[i]) == napplicantNoArr.lastIndexOf(napplicantNoArr[i]) || (napplicantNoArr.indexOf(napplicantNoArr[i]) != napplicantNoArr.lastIndexOf(napplicantNoArr[i]) && napplicantNoArr.indexOf(napplicantNoArr[i])==i)){
					
					if(applicantdegreeCodeArr[i]==degCode  && document.getElementById('appachedamicYear').value==applicantachedamicYearArr[i]){
						count++;
				if(count%2==0){
				newStr +="<tr style='background-Color:#ffece6;>";}
				else{
				newStr +="<tr style='background-Color:#ffd9cc;>";}
				
		
				newStr +="<div class='info' id='Alist1"+i+"'  name='testInfo"+i+"'>";
				newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered"+i+"' id='registered"+i+"'>";
				newStr += "<input type='checkbox'  "+registeredChecked+"  id='ncheckRegistered"+i+"' name='ncheckRegistered"+i+"' onchange='selectedApplicantNoteList("+i+")'/>";
				newStr += "</div></td>";
				newStr += "<td style='width:60px;' align='center'><div style='width:60px;' class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += count+"</div></td>";	
				newStr += "<td style='width:150px;' align='center'><div style='width:150px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += napplicantNoArr[i]+"</div></td>";		
				newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += napplicantInitialArr[i]+"</div></td>";			
				newStr +="<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
				newStr +="</div>";
				newStr += "<div id='notesDiv"+i+"' style='width:120px;display:none;clear:none;' class='investView'><textarea rows='auto' name='anotes"+i+"'  id='anotes"+i+"' style='width:90%;float:left;'  onchange='dataRep[this.name]=this.value'>";
				newStr +=" </textarea></div></td>";
				newStr +="<td style='width:100px;word-wrap:break-word'><div style='width:100px;' class='investView'><input type='button' name='prevBttn"+i+"' id='prevBttn"+i+"' style='margin-top:0px' value='Preview' onclick='previewAppNote("+i+");dataRep[this.name]=this.value; '></div></td>";
				
				
			var checkBoxDivIdRegistered = 'ncheckRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';						
					}
				}
			
			
				
				newStr +="</tr>";
				}
					}
					}
				
				
				newStr +="</table>";
			if(count>5){
				newStr +="<input type='button' style='background-Color:#ff6633;padding-right:20px;height:30px;' class='btnB' value = 'Send Note' onclick =formAddStudentNote("+"'addApplicantNote'"+");>";
  		    	
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick =resetNote();>';
			
				if (dataRep['roleName']=='Subject Clerk'){
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';
				}
				if(dataRep['roleName']=='Dean'){
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeankMenu'"+');>';
				}
				newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				
			}
	document.getElementById('applicantlist').innerHTML += newStr;
}

function ViewListStudent(){
	var count=0;
	document.getElementById('select-all').style="display";
	document.getElementById('select-non').style="display";	
	document.getElementById('studentlist').innerHTML =document.getElementById('studentlist').innerHTML.replace="";
	 
	var newStr ="<table id='studentListTable' >";
				newStr +="<tr style='background-Color:#ff9f80'>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:60px;'><font color='black'>Select</font></div></th>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:60px;'><font color='black'>Count</font></div></th>";
				newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Student No.</font></div></th>";
				newStr +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Name</font></div></th>";
				newStr +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:170px;'><font color='black'>Add Additional Notes</font></div></th>";
				newStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Preview</font></div></th>";
				newStr +="</tr>";
				
				for(i=0;i<nstudentNoLength;i++){
					
					if(nstudentNoArr.indexOf(nstudentNoArr[i]) == nstudentNoArr.lastIndexOf(nstudentNoArr[i]) || (nstudentNoArr.indexOf(nstudentNoArr[i]) != nstudentNoArr.lastIndexOf(nstudentNoArr[i]) && nstudentNoArr.indexOf(nstudentNoArr[i])==i)){
					
					if(studentdegreeCodeArr[i]==degCode  && document.getElementById('achedamicYear').value==studentachedamicYearArr[i]){
						
						count++;
				if(count%2==0){
				newStr +="<tr style='background-Color:#ffece6;>";}
				else{
				newStr +="<tr style='background-Color:#ffd9cc;>";}
				
		
				newStr +="<div class='info' id='Alist"+i+"'  name='testInfo"+i+"'>";
				newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered"+i+"' id='registered"+i+"'>";
				newStr += "<input type='checkbox'  "+registeredChecked+"  id='scheckRegistered"+i+"' name='ncheckRegistered"+i+"' onchange='selectedStudentNoteList("+i+")'/>";
				newStr += "</div></td>";
				newStr += "<td style='width:60px;' align='center'><div style='width:60px;' class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += count+"</div></td>";	
				newStr += "<td style='width:150px;' align='center'><div style='width:150px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += nstudentNoArr[i]+"</div></td>";		
				newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView_l' name='appNo"+i+"' id='appNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
				newStr += nstudentInitialArr[i]+"</div></td>";			
				newStr +="<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
				newStr +="</div>";
				newStr += "<div id='notesDiv"+i+"' style='width:120px;display:none;clear:none;' class='investView'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:90%;float:left;'  onchange='dataRep[this.name]=this.value'>";
				newStr +=" </textarea></div></td>";
				newStr +="<td style='width:100px;word-wrap:break-word'><div style='width:100px;' class='investView'><input type='button' name='prevBttn"+i+"' id='prevBttn"+i+"' style='margin-top:0px' value='Preview' onclick='previeStdwNote("+i+");dataRep[this.name]=this.value; '></div></td>";
				
				
			var checkBoxDivIdRegistered = 'scheckRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';						
					}
				}
			
			
				
				newStr +="</tr>";
				}
					}
					}
				
				
				newStr +="</table>";
			if(count>5){
				newStr +="<input type='button' style='background-Color:#ff6633;padding-right:20px;height:30px;' class='btnB' value = 'Send Note' onclick =formAddStudentNote("+"'addStudentNote'"+");>";
  		    	
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick =resetNote();>';
			
				if (dataRep['roleName']=='Subject Clerk'){
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';
				}
				if(dataRep['roleName']=='Dean'){
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeankMenu'"+');>';
				}
				newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				
			}
	
	document.getElementById('studentlist').innerHTML += newStr;
}

//Add marked student list to a temporary array - avoid slow down of saving process
function selectedStudentNoteList(i){
	
	if(document.getElementById('scheckRegistered'+i).checked)
	{
		selectedlist[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedlist.length;ii++){
			if(selectedlist[ii]==i)
				selectedlist[ii]=null;
		}
	}
}

//Add marked applicant list to a temporary array - avoid slow down of saving process
function selectedApplicantNoteList(i){
	
	if(document.getElementById('ncheckRegistered'+i).checked)
	{
		selectedApplicantlist[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedApplicantlist.length;ii++){
			if(selectedApplicantlist[ii]==i)
				selectedApplicantlist[ii]=null;
		}
	}
}

//Add marked confirmation list to a temporary array - avoid slow down of saving process
function selectedConfirmNoteList(i){
	
	if(document.getElementById('concheckRegistered'+i).checked)
	{
		selectedConfirmlist[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedConfirmlist.length;ii++){
			if(selectedConfirmlist[ii]==i)
				selectedConfirmlist[ii]=null;
		}
	}
}

//Add selected note ids in Apllicant tab to a temporary array
function selectedNoteForApplicant(i){
	if(document.getElementById('appli'+i).checked)
	{
		selectedNoteForApplicantList[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedNoteForApplicantList.length;ii++){
			if(selectedNoteForApplicantList[ii]==i)
				selectedNoteForApplicantList[ii]=null;
		}
	}
}

//Add selected note ids in Student tab to a temporary array
function selectedNoteForStudent(i){
	//alert("selected"+i);
	if(document.getElementById('std'+i).checked)
	{
		selectedNoteForStudentList[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedNoteForStudentList.length;ii++){
			if(selectedNoteForStudentList[ii]==i)
				selectedNoteForStudentList[ii]=null;
		}
	}
}

//Mark all applicants in list
function SelectAllApp(){
		for( i=0; i<napplicantNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'ncheckRegistered'+i;
				if(document.getElementById('ncheckRegistered'+i))
				{
				document.getElementById('ncheckRegistered'+i).checked = true;
				selectedApplicantNoteList(i);
				document.getElementById("select-allapp").disabled= true;
				document.getElementById("select-nonapp").disabled= false;
				}
		}
}

//Unmark all applicants in list
function UnselectAllApp(){
	selectedApplicantlist=new Array();
		for( i=0; i<napplicantNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'ncheckRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("select-allapp").disabled= false;
				document.getElementById("select-nonapp").disabled= true;
				}
		}
}
//Mark all students in list
function SelectAllStd(){
		for( i=0; i<nstudentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'scheckRegistered'+i;
				if(document.getElementById('scheckRegistered'+i))
				{
				document.getElementById('scheckRegistered'+i).checked = true;
				selectedStudentNoteList(i);
				document.getElementById("select-all").disabled= true;
				document.getElementById("select-non").disabled= false;
				}
		}
}

//Unmark all students in list
function UnselectAllStd(){
	selectedlist=new Array();
		for( i=0; i<nstudentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'scheckRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("select-all").disabled= false;
				document.getElementById("select-non").disabled= true;
				}
		}
}


function previewRecievedNote(pnID){
	var i=pnID;
	val1="";
	val2="";
	val1 +=document.getElementById('recmsg'+i).value;
	//alert(document.getElementById('recmsg'+i).value);
	val +="\n";
	val2 +=document.getElementById('connotes'+i).value;
	//document.getElementById('conpreview').value = val; 
	document.getElementById('conpreview').value=val1+val2;
}

function previewAppNote(pnID){
	var i=pnID;
	var nID;
	var prevNote=new Array();
	val="";
	prevNote=getSelectedAppNotes();
	for(n=0;n<prevNote.length;n++){
		if(prevNote[n]==null){
			val +="";
		}
		else{
			for(j=0;j<defaultMsgId.length;j++){
				//prevNote[n].search("|");
			//if(prevNote[n].includes("|")){
			if(prevNote[n].length>2){
				nID=prevNote[n].split("|");
				if(defaultMsgId[j]==nID[0]){
					val +=defaultMessage[j];
					val +=nID[1];
					val +="\n";
				}				
			}
			else{
				if(defaultMsgId[j]==prevNote[n]){
					val +=defaultMessage[j];
					val +="\n";
				}
			}
			}
				
		}
		
	}
	val +=document.getElementById('anotes'+i).value;
	
	document.getElementById('apppreview').value = val; 
}

function previeStdwNote(pnID){
	var i=pnID;
	val="";
	
	
	val +=document.getElementById('notes'+i).value;
	document.getElementById('preview').value = val; 
}

function generateNotes(nID){

var NoteID = nID.id;
NoteID = NoteID.substr(NoteID.indexOf("notesBttn") + 9);

document.getElementById('notesDiv'+NoteID).style.display='block';
		if (document.getElementById('notesBttn'+NoteID).value=='-'){
		
           document.getElementById('notesDiv'+NoteID).style.display='none';

		}
		var val=document.getElementById('notesBttn'+NoteID)
		if (val.value=="+"){val.value = "-";}
		else {val.value = "+";}
}

//validate selected notes for applicants
function getSelectedAppNotes(){
	var j=doc=0;
	var finalAppNote = new Array();
	doc = document.maintainNoteAndNotificationt;
	for(i=0;i<selectedNoteForApplicantList.length;i++){
		if(selectedNoteForApplicantList[i]==4){
			if(document.getElementById('radio1').checked){
				finalAppNote[j]=selectedNoteForApplicantList[i]+"| as it is";
			}
			if(document.getElementById('radio2').checked){
				finalAppNote[j]=selectedNoteForApplicantList[i]+"| with amends";
			}
			if(document.getElementById('radio3').checked){
				finalAppNote[j]=selectedNoteForApplicantList[i]+"| with conditions";
			}
		}
		else if(selectedNoteForApplicantList[i]==5){
			finalAppNote[j]=selectedNoteForApplicantList[i]+"| Date:"+doc.appliYYYY.value+"/"+doc.appliMM.value+"/"+doc.appliDD.value+"Time: "+doc.appliHHH.value+"/"+doc.appliMMM.value;
		}
		else if(selectedNoteForApplicantList[i]==8){
			finalAppNote[j]=selectedNoteForApplicantList[i]+"| Date:"+doc.appli1YYYY.value+"/"+doc.appli1MM.value+"/"+doc.appli1DD.value;
		}
		else{
			finalAppNote[j]=selectedNoteForApplicantList[i];
		}
		j++;
	}
	return finalAppNote;
}

//validate selected notes for students
function getSelectedStdNotes(){
	var j=doc=0;
	doc = document.maintainNoteAndNotificationt;
	for(i=0;i<selectedNoteForStudentList.length;i++){
		if(selectedNoteForStudentList[i]==14){
			finalStdNote[j]=selectedNoteForStudentList[i]+"| Name : "+document.getElementById('Supername').value;
		}
			finalStdNote[j]=selectedNoteForStudentList[i];
		
		j++;
	}
	return finalStdNote;
}

//adding and updating notes
function formAddStudentNote(frm){
	var dataStr,doc,tempval,uname,i,r;
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addStudentNote'){
			var data=0;
			var finalNote = new Array();
			finalNote=getSelectedStdNotes();
			doc = document.maintainNoteAndNotificationt;
			dataStr += "&interface="+frm;
		for(var i=0; i<selectedlist.length; i++){
			r=selectedlist[i];
			for(f=0;f<finalNote.length;f++){				
				if(finalNote[f]!=undefined){
					dataStr += "&ID="+nstudentNoArr[r];
					dataStr += "&messageId=2|"+finalNote[f];
					dataStr += "&additionalNotes="+document.getElementById('notes'+r).value;					
					dataStr += "&status=0";					
					NoteData[data]= dataStr;
					data++;					
				}
			}
		}
		for(var j=0; j<NoteData.length; j++){
				if(NoteData[j] != ""){
					//alert(NoteData[j]);
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", NoteData[j]);
				}	
			}
		}
		
		if(frm == 'addApplicantNote'){
			var data=0;
			var finalNote = new Array();
			finalNote=getSelectedAppNotes();
			doc = document.maintainNoteAndNotificationt;
			dataStr += "&interface="+frm;
		for(var i=0; i<selectedApplicantlist.length; i++){
			r=selectedApplicantlist[i];
			for(f=0;f<finalNote.length;f++){				
				if(finalNote[f]!=undefined){
					//alert(finalAppNote[f]);
					dataStr += "&ID="+napplicantNoArr[r];
					dataStr += "&messageId=1|"+finalNote[f];
					dataStr += "&additionalNotes="+document.getElementById('anotes'+r).value;					
					dataStr += "&status=0";
					
					NoteData[data]= dataStr;
					data++;
					//alert(NoteData[data]);
				}					
			}
		}
		for(var j=0; j<NoteData.length; j++){
				if(NoteData[j] != ""){
					//alert(NoteData[j]);
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", NoteData[j]);
				}	
			}
		}
		
		if(frm == 'updateNote'){
			doc = document.maintainNoteAndNotificationt;
			dataStr += "&interface="+frm;
			
			for(var i=0; i<selectedConfirmlist.length; i++){
				//alert(selectedConfirmlist[i]);
				r=selectedConfirmlist[i];
					dataStr += "&ID="+studentIDArr[r];
					dataStr += "&messageId=1";
					dataStr += "&additionalNotes="+document.getElementById('connotes'+r).value;					
					dataStr += "&status=1";
					
					NoteData[i]= dataStr;	

		}
		for(var j=0; j<selectedConfirmlist.length; j++){
				if(NoteData[j] != ""){
					//alert(NoteData[j]);
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", NoteData[j]);
				}	
			}
		}
	return 0;		
}


function displayApplicantDiv(){
	document.getElementById('applicantNoteDiv').style.display='block';
	document.getElementById('studentNoteDiv').style.display='none';
	document.getElementById('SARNoteDiv').style.display='none';
	document.getElementById('ExamNoteDiv').style.display='none';
	document.getElementById('CoordNoteDiv').style.display='none';
	document.getElementById('inboxNoteDiv').style.display='none';
}

function displayStudentNoteDiv(){
	document.getElementById('applicantNoteDiv').style.display='none';
	document.getElementById('studentNoteDiv').style.display='block';
	document.getElementById('SARNoteDiv').style.display='none';
	document.getElementById('ExamNoteDiv').style.display='none';
	document.getElementById('CoordNoteDiv').style.display='none';
	document.getElementById('inboxNoteDiv').style.display='none';
}

function displaySARDiv(){
	document.getElementById('applicantNoteDiv').style.display='none';
	document.getElementById('studentNoteDiv').style.display='none';
	document.getElementById('SARNoteDiv').style.display='block';
	document.getElementById('ExamNoteDiv').style.display='none';
	document.getElementById('CoordNoteDiv').style.display='none';
	document.getElementById('inboxNoteDiv').style.display='none';
}

function displayExamDiv(){
	document.getElementById('applicantNoteDiv').style.display='none';
	document.getElementById('studentNoteDiv').style.display='none';
	document.getElementById('SARNoteDiv').style.display='none';
	document.getElementById('ExamNoteDiv').style.display='block';
	document.getElementById('CoordNoteDiv').style.display='none';
	document.getElementById('inboxNoteDiv').style.display='none';
}

function displayCoordDiv(){
	document.getElementById('applicantNoteDiv').style.display='none';
	document.getElementById('studentNoteDiv').style.display='none';
	document.getElementById('SARNoteDiv').style.display='none';
	document.getElementById('ExamNoteDiv').style.display='none';
	document.getElementById('CoordNoteDiv').style.display='block';
	document.getElementById('inboxNoteDiv').style.display='none';
}

function displayInboxDiv(){	
	document.getElementById('applicantNoteDiv').style.display='none';
	document.getElementById('studentNoteDiv').style.display='none';
	document.getElementById('SARNoteDiv').style.display='none';
	document.getElementById('ExamNoteDiv').style.display='none';
	document.getElementById('CoordNoteDiv').style.display='none';
	document.getElementById('inboxNoteDiv').style.display='block';
}

//////      <start>

function displayReceivedDiv(){
    document.getElementById('receivedNoteDiv').style.display='block';
	document.getElementById('commonNoteDiv').style.display='none';
	document.getElementById('specialNoteDiv').style.display='none';
	document.getElementById('sentNoteDiv').style.display='none';
}

function displayCommonDiv(){
    document.getElementById('receivedNoteDiv').style.display='none';
	document.getElementById('commonNoteDiv').style.display='block';
	document.getElementById('specialNoteDiv').style.display='none';
	document.getElementById('sentNoteDiv').style.display='none';
}

function displaySpecialDiv(){
    document.getElementById('receivedNoteDiv').style.display='none';
	document.getElementById('commonNoteDiv').style.display='none';
	document.getElementById('specialNoteDiv').style.display='block';
	document.getElementById('sentNoteDiv').style.display='none';
}

function displaySentDiv(){
    document.getElementById('receivedNoteDiv').style.display='none';
	document.getElementById('commonNoteDiv').style.display='none';
	document.getElementById('specialNoteDiv').style.display='none';
	document.getElementById('sentNoteDiv').style.display='block';
}

////   SAR
function displaySarreqDiv(){
    document.getElementById('sarreqNoteDiv').style.display='block';
	document.getElementById('sarletNoteDiv').style.display='none';
	document.getElementById('sarfgsNoteDiv').style.display='none';
}

function displaySarletDiv(){
    document.getElementById('sarreqNoteDiv').style.display='none';
	document.getElementById('sarletNoteDiv').style.display='block';
	document.getElementById('sarfgsNoteDiv').style.display='none';
}

function displaySarfgsDiv(){
    document.getElementById('sarreqNoteDiv').style.display='none';
	document.getElementById('sarletNoteDiv').style.display='none';
	document.getElementById('sarfgsNoteDiv').style.display='block';
}

function receivedDiv(){
   if(document.getElementById('r4').checked){
       		document.getElementById('Report_No').style.display='block';		
			}
			else{
			document.getElementById('Report_No').style.display='none';
			}
}


function commonDiv(){
   if(document.getElementById('com2').checked){
       		document.getElementById('NoteDate').style.display='block';		
			//document.getElementById('noteYYYY').style.display='block';
			//document.getElementById('noteMM').style.display='block';
			//document.getElementById('noteDD').style.display='block';
			}
			else{
			document.getElementById('NoteDate').style.display='none';
			//document.getElementById('noteYYYY').style.display='none';
			//document.getElementById('noteMM').style.display='none';
			//document.getElementById('noteDD').style.display='none';
			}
}


function specialDiv(){
   if(document.getElementById('std14').checked){
       		document.getElementById('Supername').style.display='block';		
			}
			else{
			document.getElementById('Supername').style.display='none';
			}
			
			
	if(document.getElementById('std19').checked){
       		document.getElementById('SpeDate').style.display='block';		
			}
			else{
			document.getElementById('SpeDate').style.display='none';
			}
}


function sentDiv(){
   if(document.getElementById('sent2').checked){
       		document.getElementById('Notesent').style.display='block';		
			}
			else{
			document.getElementById('Notesent').style.display='none';
			}
			
			
	if(document.getElementById('sent3').checked){
       		document.getElementById('Chequesent').style.display='block';		
			}
			else{
		    document.getElementById('Chequesent').style.display='none';
			}	
	
	
	if(document.getElementById('sent4').checked){
       		document.getElementById('lettsent').style.display='block';		
			}
			else{
		    document.getElementById('lettsent').style.display='none';
			}
}

function sarfgsDiv(){
	if(document.getElementById('fgs1').checked){
       		document.getElementById('Sarreport').style.display='block';		
			}
			else{
		    document.getElementById('Sarreport').style.display='none';
			}
			
	if(document.getElementById('fgs2').checked){
       		document.getElementById('Sarreq').style.display='block';		
			}
			else{
		    document.getElementById('Sarreq').style.display='none';
			}
}

function sarreqDiv(){

    if(document.getElementById('req1').checked){
       		document.getElementById('reqsuper').style.display='block';		
			}
			else{
		    document.getElementById('reqsuper').style.display='none';
			}
			
    if(document.getElementById('req2').checked){
       		document.getElementById('reqext').style.display='block';		
			}
			else{
		    document.getElementById('reqext').style.display='none';
			}
			
	if(document.getElementById('req3').checked){
       		document.getElementById('reqtit').style.display='block';		
			}
			else{
		    document.getElementById('reqtit').style.display='none';
			}
			
    if(document.getElementById('request4').checked){
	       // alert('ok');
       		document.getElementById('requp').style.display='block';		
			}
			else{
		    document.getElementById('requp').style.display='none';
			}			
}


function applicantnoteDiv(){
   if(document.getElementById('appli4').checked){
       		document.getElementById('Applicant1').style.display='block';		
			}
			else{
			document.getElementById('Applicant1').style.display='none';
			}
			
	if(document.getElementById('appli5').checked){
       		document.getElementById('Applicant2').style.display='block';		
			}
			else{
			document.getElementById('Applicant2').style.display='none';
			}
			
	if(document.getElementById('appli8').checked){
       		document.getElementById('Applicant3').style.display='block';		
			}
			else{
			document.getElementById('Applicant3').style.display='none';
			}		
			
}

function getDefaultNotes(user){
	defaultMessage = new Array();
	var i=j=0;
	if(user=='applicant'){
		for(i=0;i<messageLength;i++){
			if(messageTypeIDArr[i]==1){
				defaultMsgId[j]=MIDArr[i];
				defaultMessage[j]=messageNoteArr[i];
				j++;
			}
		}
	}
	if(user=='student'){
		for(i=0;i<messageLength;i++){
			if(messageTypeIDArr[i]==2){
				defaultMsgId[j]=MIDArr[i];
				defaultMessage[j]=messageNoteArr[i];
				j++;
			}
		}
	}
	if(user=='FGS Deputy Registrar'){
		for(i=0;i<messageLength;i++){
			if(messageTypeIDArr[i]==3){
				defaultMsgId[j]=MIDArr[i];
				defaultMessage[j]=messageNoteArr[i];
				j++;
			}
		}
	}
	if(user=='inbox'){
		for(i=0;i<messageLength;i++){
			if(messageTypeIDArr[i]==3){
				defaultMsgId[j]=MIDArr[i];
				defaultMessage[j]=messageNoteArr[i];
				j++;
			}
		}
	}
}

function resetNote(){
	sendForm('data4returnNoteAndNotification');
	sendForm('data4Notificationcheckdepartment');
	sendForm('data4StudentNotificationList');
	sendForm('data4PendingConfirmNote');
	sendForm('data4ApplicantNotificationList');
	// NoteData = new Array();
// var selectedlist = new Array();
// var selectedApplicantlist = new Array();
// var selectedConfirmlist = new Array();
// var selectedNoteForApplicantList = new Array();
// var finalAppNote = new Array();
	
}
//////      <end>