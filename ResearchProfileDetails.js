var RestdProfileSearch = false;
dataRep['ResearchsearchType'] = '';
dataRep["supervisorOne"] =dataRep["supervisorTwo"] ="";
function formResearchStudentProfileDeteils(dsp) {
	str = "";
	title = "Research Student Profile";

	if(dsp == "formResearchStudentProfileDeteils") { 
			
		//	alert(batchCourseFeeArr);
			
		str  = "<div id='addResearchStudentProfileDeteils'  >";
		str += "<table align='center' border='1'><tr><td>"
		str += '<h2>'+title+'</h2><hr>';
		str += '<form name="maintainformResearchStudentProfileDeteils">';
			
		var u=document.cookie;
		var ur=(u.split(";",2)[u.split(";",2).length-2]);
		var use =(ur.split("=",2)[ur.split(";",2).length-0]);
		for(i = 0; i<roleIdLength; i++) {
			if( use== userIdArr[i]){
				dataRep['roleName']=roleNameArr[i];
			}
		}
		
		/*******************************************************************************/
		
		/*alert("student lenght : " + studentNoLength);
		alert("applicant lenght : " + applicationNoLength);
		alert("role lenght : " + roleIdLength);*/
		
		var studentNoList = "";
		
		for(i=0; i < studentNoProLength; i++){
			if (studentNoProArr.indexOf(studentNoProArr[i]) == studentNoProArr.lastIndexOf(studentNoProArr[i]) || (studentNoProArr.indexOf(studentNoProArr[i]) != studentNoProArr.lastIndexOf(studentNoProArr[i]) && studentNoProArr.indexOf(studentNoProArr)==i)){
				if(studentNoProArr[i] != ""){
					studentNoList += "<option value='"+studentNoProArr[i]+"'>";
				}
			}
		}
		
		// var appNoList="";
		// for(i=0; i< applicationNoLength; i++){
			// if (profileapplicationNoArr.indexOf(profileapplicationNoArr[i]) == profileapplicationNoArr.lastIndexOf(profileapplicationNoArr[i]) || (profileapplicationNoArr.indexOf(profileapplicationNoArr[i]) != profileapplicationNoArr.lastIndexOf(profileapplicationNoArr[i]) && profileapplicationNoArr.indexOf(profileapplicationNoArr[i])==i)){
				// if(profileapplicationNoArr[i] != ""){
					// appNoList += "<option value='"+profileapplicationNoArr[i]+"'>";
				// }
			// }
		// }
		
		str += "<div class='rdo' style='width:auto;margin-left:10px; width:900;'>";
		
			//var applicantSearch = "";
			var ResearchstudentSearch = "";
			//var applicantDisplay = "none";
			var RestudentDisplay = "none";
			var RedisabledRdo = "";
			
			
			if(dataRep['ResearchsearchType'] != ""){
				RedisabledRdo = 'disabled';
			}
			
			// if(dataRep['ResearchsearchType']== 'applicantSearch'){
				// applicantSearch= 'checked';
				// applicantDisplay = 'block';
			// } else 
			if(dataRep['ResearchsearchType']=='ResearchstudentSearch'){
				ResearchstudentSearch = 'checked';
				RestudentDisplay = 'block';
			}
					
			//str +="<input  type='radio' name='ResearchsearchType' id='searchApplicant' "+applicantSearch+" "+RedisabledRdo+" onclick='dataRep[this.name]=this.value;serchApplicant1();' value= 'applicantSearch'>Search Applicant</input>";
			str +="<input  type='radio' name='ResearchsearchType' id='searchStudent' "+ResearchstudentSearch+" "+RedisabledRdo+" onclick='dataRep[this.name]=this.value;serchResearchStudent1();' value='ResearchstudentSearch'>Search Student</input>";
		str += "</div>";
		
		/**Student Search Section**/
		str += "<div id='searchResearchStudent2' class ='section1' style='float:left;margin-left:-2px;display:"+RestudentDisplay+";'>";
			str += "<fieldset class='field' style='width:900;'>"
				str += "<legend class='fieldHead'>Search Student</legend>";
				str += "<div class='longIdentifier'>Student No</div>";
				str += "<div class='viewArea'>";
					str += "<input type='text' "+RedisabledRdo+" name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
					str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
					str += "<input type='button' "+RedisabledRdo+" style='margin-top:0px' class='btnD' value='Search' onclick='searchResearchStudentProfile()'>";  
					//str += "<input type='button' style='margin-top:0px' class='btn' value='Reset' onclick='resetStudentProfile()'>";
				str += "</div>";
			str += "</fieldset>";
		str += "</div>";
		
		/**Applicant Search Section**/
		// str +="<div id='searchApplicant2' class ='section1' style='float:left;margin-left:-2px;display:"+applicantDisplay+";'>";
			// str += "<fieldset class='field' style='width:900;'>"
				// str += "<legend class='fieldHead'>Search Applicant</legend>";
				// str += "<div class='longIdentifier'>Application No</div>";
				// str +="<div class='viewArea'>"; 
					// str +="<input type='text' "+RedisabledRdo+" name='applicationNo'  list='listappNo' id='applicationNo' value= '"+dataRep["applicationNo"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
					// str += "<datalist id='listappNo'>"+appNoList+"</datalist>"; 
					// str += "<input type='button' "+RedisabledRdo+" style='margin-top:0px;' class='btn' value='Search' onclick='searchApplicantProfile()'>"; 
					// str += "<input type='button' style='margin-top:0px' class='btn' value='Reset' onclick='resetStudentProfile()'>";
				// str += "</div>"; 
			// str += "</fieldset>"; 
		// str += "</div>";
		str += "<br>";
		
		str += "<div style ='clear:both;' id='studentProfileData'>";
			str += "<br>";
		str += "</div>";
		
		if((dataRep['studentNo'] != "" && RestdProfileSearch)){
			str += '<input type="button" class="btnD" id="viewProfileBtn" value = "View Profile" onclick="setDataforResearchStudentProfile()">';
		}
		
		/****************************************************************************/
		str += "<br><center>";
		str +="<div style='margin-top:20px;float:left;clear:both;'>";
		
		str += '<input type="button" class="btnD" value = "Return" onclick = "showMenu('+"'main'"+');">';
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += '</center></div></form>';
		str += '</td></tr></table></div>';
		
	}
	return str;
}

//---------------------------------------------SEARCH STUDENT RADIO BYTTON FUNCTION START-----------------------------------
function serchResearchStudent1(){
	document.getElementById('searchResearchStudent2').style.display='block';
	//document.getElementById('searchApplicant2').style.display='none';	
}
//---------------------------------------------SEARCH STUDENT RADIO BYTTON FUNCTION END-----------------------------------

//---------------------------------------------SEARCH APPLICANT RADIO BYTTON FUNCTION START-----------------------------------
// function serchApplicant1(){
	// document.getElementById('searchResearchStudent2').style.display='none';
	// document.getElementById('searchApplicant2').style.display='block';
// }
//---------------------------------------------SEARCH APPLICANT RADIO BYTTON FUNCTION END-----------------------------------
		
//---------------------------------------------RESET STUDENT PROFILE START-----------------------------------

function resetStudentProfile(){
	studentNoProLength = 0;
	applicationNoLength = 0;
	roleIdLength = 0;
	studentNoLength = 0;
	tmp_studentNolenght = 0;
	dataItemIDLength = 0;
	batchdetailsLength = 0;
	documentIDLength = 0;
	sessionIDLength = 0;
	educationPinLength = 0;
	workPinLength = 0;
	MarksLength = 0;
	messageTypeLength = 0;
	oldStudentNoLength = 0;
	tCodeLength = 0;
	messageIdLength = 0;
	studentNICLength = 0;
	//trdegreeCodeLength = 0;
	//ruleIDLength = 0;
	//transferIDLength = 0;
	coursecommenceLength = 0;
	
	checkboxCount=0;
	Vcount=0;
	RulCount=0;
	commDate="";
	duration="";
	CheckRules="";
	DegreeCatArr= new Array();
	RestudentTmpi = -1;
	applicantTmpi = -1;
	newStudentNo = "";
	selectedPrg = "";
	
	dataRep['ResearchsearchType'] = '';
	dataRep['studentNo'] = "";
	dataRep['applicationNo'] = "";
	dataRep["Fcode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["academicYear"] = "";
	sendForm('data4DisplayResearchStudentNoforProfile');
	//sendForm('data4DisplayApplicatProfile');
	sendForm('data4ResearchStudentProfileDeteilsCheckUser');
	RestdProfileSearch = false;
}

function returnStudentProfile(){
	studentNoProLength = 0;
	//applicationNoLength = 0;
	roleIdLength = 0;
	studentNoLength = 0;
	tmp_studentNolenght = 0;
	dataItemIDLength = 0;
	batchdetailsLength = 0;
	documentIDLength = 0;
	sessionIDLength = 0;
	educationPinLength = 0;
	workPinLength = 0;
	MarksLength = 0;
	messageTypeLength = 0;
	oldStudentNoLength = 0;
	tCodeLength = 0;
	messageIdLength = 0;
	studentNICLength = 0;
	//trdegreeCodeLength = 0;
	//ruleIDLength = 0;
	//transferIDLength = 0;
	coursecommenceLength = 0;
	
	
	checkboxCount=0;
	Vcount=0;
	RulCount=0;
	commDate="";
	duration="";
	CheckRules="";
	DegreeCatArr= new Array();
	RestudentTmpi = -1;
	applicantTmpi = -1;
	newStudentNo = "";
	selectedPrg = "";
	
	dataRep['ResearchsearchType'] = '';
	dataRep['studentNo'] = "";
	dataRep['applicationNo'] = "";	
	dataRep["Fcode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["academicYear"] = "";
	RestdProfileSearch = false;
}

//---------------------------------------------RESET STUDENT PROFILE END-----------------------------------

//---------------------------------------------SEARCH STUDENT PROFILE START-----------------------------------

function searchResearchStudentProfile(){
	if(document.getElementById('studentNo').value != ""){
		
		var checkStdAvailable = false;
		for(i=0; i< studentNoProLength; i++){
			if (studentNoProArr.indexOf(studentNoProArr[i]) == studentNoProArr.lastIndexOf(studentNoProArr[i]) || (studentNoProArr.indexOf(studentNoProArr[i]) != studentNoProArr.lastIndexOf(studentNoProArr[i]) && studentNoProArr.indexOf(studentNoProArr[i])==i)){
				if(studentNoProArr[i] != ""){
					if (studentNoProArr[i] == dataRep["studentNo"]) {
						dataRep["applicationNo"]=applcationNoProArr[i];
						checkStdAvailable = true;
						break;
					}
				}
			}
		}
		
		if(checkStdAvailable){
			dataRep['studentNo'] = document.getElementById('studentNo').value;
			
			sendForm('data4ResearchStudentProfileDetails');
			sendForm('data4ResearchprofileEducationalDetails');
			
			//sendForm('data4paymentProfile');
			//sendForm('data4paymentBatch');
			//sendForm('data4StudentProfileDocument');
			//sendForm('data4profileDocument');
			
			//sendForm('data4profileNote');
			//sendForm('data4DisplayNotes');
			//sendForm('data4getTransferID');
			//sendForm('data4CommenceDate');		
			RestdProfileSearch = true;
			sendForm('data4ResearchprofilerefreeDetails');
		}else{
			document.getElementById('studentNo').value = '';
			alert("Student No not available");
		}
	}
}

//---------------------------------------------SEARCH STUDENT PROFILE START-----------------------------------

//---------------------------------------------SEARCH STUDENT PROFILE START-----------------------------------

// function searchApplicantProfile(){
	// if(document.getElementById('applicationNo').value != ""){
		
		// var checkApplicantAvailable = false;
		// for(i=0; i< applicationNoLength; i++){
			// if (profileapplicationNoArr[i] == dataRep['applicationNo']) {
				// checkApplicantAvailable = true;
				// break;
			// }
		// }
		
		// if(checkApplicantAvailable){
			// dataRep['applicationNo'] = document.getElementById('applicationNo').value;
			// sendForm('data4paymentBatch');
			// sendForm('data4profileEducationalDetails');
			// sendForm('data4profilerefreeDetails');
			// RestdProfileSearch = true;
			// sendForm('data4GetReleventApplicant');
		// }else{
			// document.getElementById('applicationNo').value = '';
			// alert("Applicant No not available");
		// }
				
	// }
// }

//---------------------------------------------SEARCH STUDENT PROFILE START-----------------------------------

//---------------------------------------------SET DATA START-------------------------------------------------
var RestudentTmpi = -1;
var applicantTmpi = -1;
function setDataforResearchStudentProfile(){
	
	RestudentTmpi = -1;
	applicantTmpi = -1;
	if(dataRep['ResearchsearchType']== 'ResearchstudentSearch'){
		for(i=0; i < studentNoLength; i++){
			if(dataRep["studentNo"]==studentNoArr[i] & studentNICArr[i] != null){
				RestudentTmpi = i;
				break;
			}
		}
	}
	// else{
		// for(i=0; i < studentNICLength; i++){
			// if(dataRep["applicationNo"] == profileapplicationNoArr1[i] & profilestudentNICArr[i] != null){
				// applicantTmpi = i;
				// break;
			// }
		// }
	// }
	
	
	
	var vTmpSTR = "";
	
	//----------Top Details Section Start-------
	vTmpSTR += "<div style ='clear:both;' id='transferDisplay01' style='display:block;'>";
		vTmpSTR +="<div class='hideLabel'>";
			vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Degree Code</div>";
			vTmpSTR +="<div class='viewArea' style='clear:none;'>";
				vTmpSTR += '<label id="stdProfile_degreeCode" style="fontcolor:red;"></label>';
			vTmpSTR +="</div>";
			vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
		vTmpSTR +="</div>";
		
		vTmpSTR +="<div class='hideLabel'>";
			vTmpSTR +="<div class='longIdentifier' style='clear:none;'>University Code</div>";
			vTmpSTR +="<div class='viewArea' style='clear:none;'>";
				vTmpSTR += '<label id="stdProfile_uniCode" style="fontcolor:red;"></label>';
			vTmpSTR +="</div>";
			vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
		vTmpSTR +="</div>";
		
		vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student</div><div class='colon'>&nbsp;:&nbsp;</div>";
			vTmpSTR +="<div class='viewArea' style='clear:none;'>";
				vTmpSTR += '<label id="stdProfile_studentName" style="fontcolor:red;"></label>';
			vTmpSTR +="</div>";
			vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
        vTmpSTR +="</div>";
		
		vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
			vTmpSTR +="<div class='viewArea' style='clear:none;'>";
				vTmpSTR += '<label id="stdProfile_degreeTitle" style="fontcolor:red;"></label>';
			vTmpSTR +="</div>";
			vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
		vTmpSTR +="</div>";
	
		if(dataRep['ResearchsearchType']=='ResearchstudentSearch'){
			vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
				vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Registration Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
				vTmpSTR +="<div class='viewArea' style='clear:none;'>";
					vTmpSTR += '<label id="stdProfile_RegDate" style="fontcolor:red;"></label>';
				vTmpSTR +="</div>";
				vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
			vTmpSTR +="</div>";
			
			
			vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
				vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Duration(Years)</div><div class='colon'>&nbsp;:&nbsp;</div>";
				vTmpSTR +="<div class='viewArea' style='clear:none;'>";
					vTmpSTR += '<label id="stdProfile_duration" style="fontcolor:red;"></label>';
				vTmpSTR +="</div>";
				vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
			vTmpSTR +="</div>";
			
			
		}
	
				
	vTmpSTR +="</div>";
	
	/***************************INACTIVE PROFILE*****************************************/
	
	vTmpSTR += "<div style ='clear:both; display:none;  width:900px; height:50px; text-align:center; margin-left:5px; font-color:black;' id='displayInacive' >";
		vTmpSTR += "<font Color= #000000; size='3'>Inactive Profile</font>"; 
	vTmpSTR += "</div>";
	
	/***************************INACTIVE PROFILE*****************************************/
	
	//----------Top Details Section END-------
	
	//----------Tab Menues Starts--------------
	
	vTmpSTR += "<div style='margin-top:20px; float:left; clear:both; margin-left:5px; margin-right:5px;' class ='demoprint'>";
		
		if(dataRep['ResearchsearchType'] =='ResearchstudentSearch'){
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='personalDetailsbutton' name='PersonnelDetails' value='Personal Details' onclick='displayTabDiv(this.name, this.id);'></input>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='qalificationalDetailsbutton' name='Qualifications' value='Educational Qualifications' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='wrkExperience' name='workExperience' value='Work Experience' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='applicantsreferies' name='referies' value='Referees' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='paymentDetailsbutton' name='payment' value='Payment Details' onclick='displayTabDiv(this.name, this.id);'>";	
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='researchDetails' name='researchdetailsdiv' value='Research Details' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='notesDetailsbutton' name='Notes' value='Notifications' onclick='displayTabDiv(this.name, this.id);'>";	
			//vTmpSTR += "<br>";
			//vTmpSTR += "<div style='text-align:right; margin-right:-65px;'>";
				//vTmpSTR += "</div>";
		}else if(dataRep['ResearchsearchType'] == 'applicantSearch'){
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='personalDetailsbutton' name='PersonnelDetails' value='Personal Details' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='qalificationalDetailsbutton' name='Qualifications' value='Educational Qualifications' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='professionalqalification' name='profqualification' value='Professional Qualifications' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='wrkExperience' name='workExperience' value='Work Experience' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='applicantsreferies' name='referies' value='Referees' onclick='displayTabDiv(this.name, this.id);'>";
			// vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='documentDetailsbutton' name='DocumenNames' value='Document Details' onclick='displayTabDiv(this.name, this.id);'>";
			vTmpSTR += "<input type='button' style='margin-top:0px;background-image:url(img/button.png);padding:10px; font-weight: bold' id='notesDetailsbutton' name='Notes' value='Notifications' onclick='displayTabDiv(this.name, this.id);'>";
		}
	vTmpSTR += "</div>"	
		
	
		//-------------------------Personal Details Tab START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='PersonnelDetails' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Personal Details</legend>";
				vTmpSTR += "<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;  fontColor:black;'>";
						
						vTmpSTR += "<div style='margin-top:0px;float:left;clear:both; padding-top: 2em;'>";
							vTmpSTR += "<div style='align:center;margin-left:200px' class='viewArea' id='studentImage'></div>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
						vTmpSTR +="</div>";
						
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentName1'></div>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";	
						vTmpSTR +="</div>";
						
						if(dataRep['ResearchsearchType']=='ResearchstudentSearch'){
							vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
								vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
								vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentNo1'></div>";
								vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div>";
						}
						
						
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Application Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;' id='applicationNodisplay'></div>";//"+dataRep["applicationNo"]+"
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
						vTmpSTR +="</div>";
						
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentNIC1'></div>";//"+dataRep["studentNIC"]+"
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
						vTmpSTR +="</div>";
							
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Address</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='studentPermanentAddress'></div>";//"+dataRep["studentPermanentAddress"]+"
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
						vTmpSTR +="</div>";
							
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Employment</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='studentEmployment'></div>";//"+dataRep["studentEmployment"]+"
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
						vTmpSTR +="</div>";
						
						vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class ='demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Contact Info</div>";
								
								vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Home&nbsp;:&nbsp;</div>";
									vTmpSTR +="<div class='viewArea' style='clear:none;text-align:left' id='studentContactLan1'></div>";//"+dataRep["studentContactLan"]+"
									vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
								
								vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Mobile&nbsp;:&nbsp;</div>";
									vTmpSTR +="<div class='viewArea' style='clear:none;margin-right:100px;text-align:left' id='studentContactMobile1'></div>";//"+dataRep["studentContactMobile"]+"
									vTmpSTR +="<div class=hideLabel>&nbsp;</div>";

								vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class ='demoprint'>";
									vTmpSTR +="<div class='longIdentifier' style='clear:none;'>E-mail</div><div class='colon'>&nbsp;:&nbsp;</div>";
									vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='studentContactEmail1'></div>";//"+dataRep["studentContactEmail"]+"
									vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
								vTmpSTR +="</div>";
	
							vTmpSTR +="</div>";//
						vTmpSTR +="</div><br/>";
					vTmpSTR +="</div>";
				vTmpSTR +="</div>";
			vTmpSTR +="</fieldset>";
		vTmpSTR +="</div>";
	
		//-------------------------Personal Details Tab END------------------------------------------
		//-------------------------Education Qualifications Tab START------------------------------------------
		vTmpSTR += "<div class='section1' id='Qualifications' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Educational Qualifications</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;  fontColor:black;'>";

						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
						if(educationPinLength != 0){
							vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border:none; table-layout:fixed;">';
								var count= 0;
								
								for(var i=0; i<educationPinLength; i++){
									//alert(educationValueArr[i]);
									//if(dataRep["applicationNo"] == applicationNoArr[i]){
										if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i])==i)){
											if(educationFieldNameArr[i] !=undefined & educationFieldNameArr[i] !=" " & educationValueArr[i] !=undefined & educationValueArr[i] !=" "){		
												if (educationFieldNameArr[i] !="Qualification" && educationFieldNameArr[i] !="Awarding Authority" && educationFieldNameArr[i] !="Awarding Year" && educationFieldNameArr[i] !="Country"){		
													if (educationFieldNameArr[i]== "University/Institute name") {
														count++;
													}	
													if (count==1){
														vTmpSTR+='<tr>';
														if(educationFieldNameArr[i] !=""){
															if(educationFieldNameArr[i] =="If Result is Pending note") {
																count++;
															}
															vTmpSTR+='<td style="border:none; width:250px;"><div class="investLabel_l" style="width:auto;; padding-bottom:0.5em">'+educationFieldNameArr[i]+'</div></td>';
														}
															
														for(var j=0; j<educationPinLength; j++){
															//if(dataRep["applicationNo"] == applicationNoArr[j]){
																if (educationPinArr.indexOf(educationPinArr[j]) == educationPinArr.lastIndexOf(educationPinArr[j]) || (educationPinArr.indexOf(educationPinArr[j]) != educationPinArr.lastIndexOf(educationPinArr[j]) && educationPinArr.indexOf(educationPinArr[j])==j)){
																	if(educationFieldNameArr[j] !=undefined & educationFieldNameArr[j] !=" " & educationValueArr[j] !=undefined & educationValueArr[j] !=" "){		
																		if (educationFieldNameArr[j] !="Qualification" || educationFieldNameArr[j] !="Awarding Authority" || educationFieldNameArr[j] !="Awarding Year" || educationFieldNameArr[j] !="Country"){	
																			if(educationValueArr[j] !="" && educationFieldNameArr[i] == educationFieldNameArr[j]){
																				vTmpSTR+='<td  style="border:none; width:auto;"><div class="investView_l" style="width:auto; padding-left:2em">'+educationValueArr[j]+'&nbsp;</div></td>';
																			}
																		}
																	}
																}
															//}
														}
														vTmpSTR+='</tr>';
													}
												}
											}
										}
									//}
								}	

								if(count == 0){
									vTmpSTR += '<p>Educational Qualification details not available</p>';
								}
								
							vTmpSTR += '</table><br>';
						} else {
							vTmpSTR += '<p>Educational Qualification details not available</p>';
						}
					vTmpSTR	+= "</div>";
				vTmpSTR	+= "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR	+= "</div>";
		//-------------------------Education Qualifications Tab END------------------------------------------
	
		//-------------------------Profecional Qualifications Tab START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='profqualification' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Professional Qualifications</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";

						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
						if(educationPinLength != 0){
							vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border:none; table-layout:fixed;">';
			
								var count= 0;
								for(var i=0; i<educationPinLength; i++){
									//if(dataRep["applicationNo"] == applicationNoArr[i]){
										if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i])==i)){
											if(educationFieldNameArr[i] !=undefined & educationFieldNameArr[i] !=" " & educationValueArr[i] !=undefined & educationValueArr[i] !=" "){		
												if (educationFieldNameArr[i] =="Qualification" || educationFieldNameArr[i] =="Awarding Authority" || educationFieldNameArr[i] ==  "Qualification Level" || educationFieldNameArr[i] =="Awarding Year" || educationFieldNameArr[i] =="Country"){		
													if (educationFieldNameArr[i]== "Qualification")	{
														count++;
													}	
													if (count==1){
														vTmpSTR+='<tr>';
														if(educationFieldNameArr[i] !=""){
															if(educationFieldNameArr[i] =="Country"){
																count++;
															}
															vTmpSTR+='<td style="border:none; width:250px;"><div class="investLabel_l" style="width:auto; padding-bottom:0.5em">'+educationFieldNameArr[i]+'</div></td>';
														}
														for(var j=0; j<educationPinLength; j++){
															//if(dataRep["applicationNo"] == applicationNoArr[j]){
																if (educationPinArr.indexOf(educationPinArr[j]) == educationPinArr.lastIndexOf(educationPinArr[j]) || (educationPinArr.indexOf(educationPinArr[j]) != educationPinArr.lastIndexOf(educationPinArr[j]) && educationPinArr.indexOf(educationPinArr[j])==j)){
																	if(educationFieldNameArr[j] !=undefined & educationFieldNameArr[j] !=" " & educationValueArr[j] !=undefined & educationValueArr[j] !=" "){		
																		if (educationFieldNameArr[j] =="Qualification" || educationFieldNameArr[j] =="Awarding Authority" ||  educationFieldNameArr[i] ==  "Qualification Level" || educationFieldNameArr[j] =="Awarding Year" || educationFieldNameArr[j] =="Country"){	
																			//alert(educationValueArr[i]);
																			if(educationValueArr[j] !="" && educationFieldNameArr[i] == educationFieldNameArr[j]){
																			   vTmpSTR+='<td  style="border:none; width:auto;"><div class="investView_l" style="width:auto; padding-left:2em">'+educationValueArr[j]+'&nbsp;</div></td>';
																			}
																		}
																	}
																}
															//}
														}
														vTmpSTR+='</tr>';
													}
												}
											}
										}
									//}
								}

								if(count == 0){
									vTmpSTR += '<p>Professional Qualification details not available</p>';
								}
								
							vTmpSTR += '</table><br>';
						} else {
							vTmpSTR += '<p>Professional Qualification details not available</p>';
						}
					vTmpSTR	+= "</div>";
				vTmpSTR	+= "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR	+= "</div>";
		
		//-------------------------Profecional Qualifications Tab END------------------------------------------
		
		//-------------------------Work Experience Tab START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='workExperience' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Work Experience</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";

						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
						if(educationPinLength != 0){
							vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border:none; table-layout:fixed;">';
			
								var count= 0;
								for(var i=0; i<workPinLength; i++){
									//if(dataRep["applicationNo"] == applicationNoWoArr[i]){
										if (workPinArr.indexOf(workPinArr[i]) == workPinArr.lastIndexOf(workPinArr[i]) || (workPinArr.indexOf(workPinArr[i]) != workPinArr.lastIndexOf(workPinArr[i]) && workPinArr.indexOf(workPinArr[i])==i)){
											if(workFieldNameArr[i] !=undefined & workFieldNameArr[i] !=" " & workValueArr[i] !=undefined & workValueArr[i] !=" "){		
												if (workFieldNameArr[i] =="Company/Institute/Organization" || workFieldNameArr[i] =="Designation" || workFieldNameArr[i] ==  "Applicant Designation" 
												|| workFieldNameArr[i] =="From" || workFieldNameArr[i] =="To" || workFieldNameArr[i] =="Country" || workFieldNameArr[i] =="Applicant Country"){		
													if (workFieldNameArr[i]== "Company/Institute/Organization" ){
														count++;
													}	
													if (count==1){
														vTmpSTR+='<tr>';
														if(workFieldNameArr[i] !=""){
															//if(workFieldNameArr[i] =="Email Address"){
																//count++;
															//}
															vTmpSTR+='<td style="border:none; width:250px; padding-bottom:0.5em"><div class="investLabel_l" style="width:auto">'+workFieldNameArr[i]+'</div></td>';
														}
														for(var j=0; j<workPinLength; j++){
															//if(dataRep["applicationNo"] == applicationNoWoArr[j]){
																if (workPinArr.indexOf(workPinArr[j]) == workPinArr.lastIndexOf(workPinArr[j]) || (workPinArr.indexOf(workPinArr[j]) != workPinArr.lastIndexOf(workPinArr[j]) && workPinArr.indexOf(workPinArr[j])==j)){
																	if(workFieldNameArr[j] !=undefined & workFieldNameArr[j] !=" " & workValueArr[j] !=undefined & workValueArr[j] !=" "){		
																		if (workFieldNameArr[i] =="Company/Institute/Organization" || workFieldNameArr[i] =="Designation" || workFieldNameArr[i] ==  "Applicant Designation" 
																		|| workFieldNameArr[i] =="From" || workFieldNameArr[i] =="To" || workFieldNameArr[i] =="Country" || workFieldNameArr[i] =="Applicant Country"){		
																			//alert(workValueArr[i]);
																			if(workValueArr[j] !="" && workFieldNameArr[i] == workFieldNameArr[j]){
																			   vTmpSTR+='<td  style="border:none; width:auto;"><div class="investView_l" style="width:auto; padding-left:2em">'+workValueArr[j]+'&nbsp;</div></td>';
																			}
																		}
																	}
																}
															//}
														}
														vTmpSTR+='</tr>';
													}
												}
											}
										}
									//}
								}
								
								if(count == 0){
									vTmpSTR += '<p>Referee details not available</p>';
								}
								
							vTmpSTR += '</table><br>';
						} else {
							vTmpSTR += '<p>Professional Qualification details not available</p>';
						}
					vTmpSTR	+= "</div>";
				vTmpSTR	+= "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR	+= "</div>";
		
		//-------------------------Work Experience Tab END------------------------------------------
	
		//-------------------------Referies Tab START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='referies' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Referees</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";

						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
						if(workPinLength != 0){						
							vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border:none; table-layout:fixed;">';
							
								var count= 0;
								for(var i=0; i<workPinLength; i++){
									//if(dataRep["applicationNo"] == applicationNoWoArr[i]){
										if (workPinArr.indexOf(workPinArr[i]) == workPinArr.lastIndexOf(workPinArr[i]) || (workPinArr.indexOf(workPinArr[i]) != workPinArr.lastIndexOf(workPinArr[i]) && workPinArr.indexOf(workPinArr[i])==i)){
											if(workFieldNameArr[i] !=undefined & workFieldNameArr[i] !=" " & workValueArr[i] !=undefined & workValueArr[i] !=" "){		
												if (workFieldNameArr[i] =="Name" || workFieldNameArr[i] =="Ref.Designation" || workFieldNameArr[i] ==  "Contact Address" || workFieldNameArr[i] =="Ref.Country" || workFieldNameArr[i] =="Tele. Office" || workFieldNameArr[i] =="Tele. Mobile" || workFieldNameArr[i] =="Email Address"
													|| workFieldNameArr[i] =="Name with Initials" || workFieldNameArr[i] =="Office" || workFieldNameArr[i] =="Mobile" || workFieldNameArr[i] =="Home"){		
													if (workFieldNameArr[i]== "Name" || workFieldNameArr[i] =="Name with Initials")	{
														count++;
													}	
													if (count==1){
														vTmpSTR+='<tr">';
														if(workFieldNameArr[i] !=""){
															//if(workFieldNameArr[i] =="Email Address"){
																//count++;
															//}
															vTmpSTR+='<td style="border:none; width:250px; padding-bottom:0.5em"><div class="investLabel_l" style="width:auto">'+workFieldNameArr[i]+'</div></td>';
														}
														for(var j=0; j<workPinLength; j++){
															//if(dataRep["applicationNo"] == applicationNoWoArr[j]){
																if (workPinArr.indexOf(workPinArr[j]) == workPinArr.lastIndexOf(workPinArr[j]) || (workPinArr.indexOf(workPinArr[j]) != workPinArr.lastIndexOf(workPinArr[j]) && workPinArr.indexOf(workPinArr[j])==j)){
																	if(workFieldNameArr[j] !=undefined & workFieldNameArr[j] !=" " & workValueArr[j] !=undefined & workValueArr[j] !=" "){		
																		if (workFieldNameArr[j] =="Name" || workFieldNameArr[j] =="Ref.Designation" ||  workFieldNameArr[i] ==  "Contact Address" || workFieldNameArr[j] =="Ref.Country" || workFieldNameArr[j] =="Tele. Office" || workFieldNameArr[j] =="Tele. Mobile" || workFieldNameArr[j] =="Email Address"
																		|| workFieldNameArr[j] =="Name with Initials" || workFieldNameArr[j] =="Office" || workFieldNameArr[j] =="Mobile" || workFieldNameArr[j] =="Home"){	
																			//alert(workValueArr[i]);
																			if(workValueArr[j] !="" && workFieldNameArr[i] == workFieldNameArr[j]){
																			   vTmpSTR+='<td  style="border:none; width:auto;"><div class="investView_l" style="width:auto; padding-left:2em">'+workValueArr[j]+'&nbsp;</div></td>';
																			}
																		}
																	}
																}
															//}
														}
														vTmpSTR+='</tr>';
													}
												}
											}
										}
									//}
								}
								
								if(count == 0){
									vTmpSTR += '<p>Referee details not available</p>';
								}
								
							vTmpSTR += '</table><br>';
						} else {
							vTmpSTR += '<p>Referee details not available</p>';
						}
					vTmpSTR	+= "</div>";
				vTmpSTR	+= "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR	+= "</div>";
		
		//-------------------------Referies Tab END------------------------------------------
		
		//-------------------------Exam Results Tab START------------------------------------------
		vTmpSTR += "<div class='section1' id='researchdetailsdiv' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Research Details</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;  fontColor:black;'>";
						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
							
							vTmpSTR +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='thesisTopicOne'>"+dataRep["tid"]+"</div>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div>";
							
							
							vTmpSTR +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='thesisTopicOne'>"+dataRep["title"]+"</div>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div>";
							
							
							vTmpSTR +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Supervisor Name One</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<input type='text' name='supervisorOne'  id='supervisorOne' value= '"+dataRep["supervisorOne"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div>";
							
							
							vTmpSTR +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Supervisor Name Two</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<input type='text' name='supervisorTwo'  id='supervisorTwo' value= '"+dataRep["supervisorTwo"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div>";
							
							vTmpSTR += "<div style='float:left;clear:both;'><input type='button'  class='btnD' value='Save' onclick=></div>";
		
		
							
							vTmpSTR += "<div style='float:left;clear:both;'>";
							vTmpSTR +="<hr>";
							vTmpSTR += "<legend class='fieldHead'>Progress Reports</legend>";
							
							vTmpSTR +='<table id="Table1"  style="color:#bd3303; margin:10px; align:center;" font-family: "Times New Roman", Times, serif; font-size: 12px;>'; //font-family: "Times New Roman", Times, serif;
						vTmpSTR +='<tr>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px;">Progress Report No</th>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px;">Submittion Date</th>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px;">Select</th>';
						vTmpSTR +=' </tr>';
						vTmpSTR +='<tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">1</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +=' <tr>';
								  vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">2</td>';
								  vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +=' </tr>';
						vTmpSTR +=' <tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">3</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">4</td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							    vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">5</td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							    vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">6</td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='</table>';
							
						vTmpSTR += "<div style='float:left;clear:both;'><input type='button'  class='btnD' value='Save' onclick=></div>";
			
							vTmpSTR +="</div>";

							
						vTmpSTR += "</div>";
				vTmpSTR += "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR += '</div>';
		//-------------------------Exam Results Tab END------------------------------------------
	
		//-------------------------DOCUMENT DETAILS Tab START------------------------------------------
	    
		vTmpSTR += "<div class='section1' id='DocumenNames' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Document Details</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;fontColor:black;'>";
						
						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						vTmpSTR += "<div id='topics1' class='info'></div>";
			
						for(var i=0; i<documentIDLength; i++){			
							if (documentNameArr[i]!=documentNameArr[i-1]){		
								vTmpSTR += "<div class='info'   name='testInfo"+i+"'>";												
									vTmpSTR += "<div class='investView_l'  style='width:150px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
										vTmpSTR += "<input type='button' name='studentBttn"+i+"' id='studentBttn"+i+"' style='margin-top:0px' value='+' onclick='generateDocuments(this);dataRep[this.name]=this.value; '>";
									vTmpSTR += documentNameArr[i]+"</div>";
									vTmpSTR += "<div id='documentInfo"+i+"'></div>"; 
								vTmpSTR += "</div><br>"; 
							}
						}
					vTmpSTR += "</div>";
				vTmpSTR += "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR += '</div>';
          
        //-------------------------DOCUMENT DETAILS Tab END------------------------------------------
		
		//-------------------------NOTES DETAILS Tab START------------------------------------------
	
		vTmpSTR += "<div class='section1' id='Notes' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Notification Details</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;  fontColor:black;'>";
						
						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
						if(messageIdLength != 0){
							
							vTmpSTR += "<table style='border-collapse: collapse;border: 1px solid black;'>";
								
								vTmpSTR += "<tr style='border: 1px solid black;'>";
									vTmpSTR += "<th style='border: 1px solid black;width:160px;font-size:12px;'><div class='investLabel_l'  style='width:auto'>Message ID</div></th>";
									vTmpSTR += "<th style='border: 1px solid black;width:160px;font-size:12px;'><div class='investLabel_l'  style='auto'>User Name</div></th>";
									vTmpSTR += "<th style='border: 1px solid black;width:160px;font-size:12px;'><div class='investLabel_l'  style='auto'>Message</div></th>";
								vTmpSTR += "</tr>";

								vTmpSTR +="<div class='info'   id='dNotes'>";
		
								for(var i=0; i<messageIdLength; i++){
									var d1=(messageIdArr[i].split("/",6)[messageIdArr[i].split("/",6).length-6]);
									var mo1=(messageIdArr[i].split("/",6)[messageIdArr[i].split("/",6).length-5]);
									var y1=(messageIdArr[i].split("/",6)[messageIdArr[i].split("/",6).length-4]);
									var noteDate= y1+"/"+mo1+"/"+d1;					
												
									if(messageArr[i].indexOf('/') != -1){
										var msg1=(messageArr[i].split("/",2)[messageArr[i].split("/",2).length-1]);
										var msg2=(messageArr[i].split("/",2)[messageArr[i].split("/",2).length-2]);					

										vTmpSTR += "<tr style='border: 1px solid black;'>";													
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += noteDate+"</div></td>";
												
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += notesuserNameArr[i]+"</div></td>";
												 
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += msg1+"</div></td>";
										vTmpSTR +="</tr>";

										vTmpSTR +="<tr style='border: 1px solid black;'>";													
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += noteDate+"</div></td>";
												
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += notesuserNameArr[i]+"</div></td>";
												
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += msg2+"</div></td>";
										vTmpSTR +="</tr>";											
									}else{
										vTmpSTR +="<tr style='border: 1px solid black;'>";													
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += noteDate+"</div></td>";
											
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += notesuserNameArr[i]+"</div></td>";
												 
											vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;'><div class='investView_l'  style='width:160px' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
											vTmpSTR += messageArr[i]+"</div></td>";
										vTmpSTR +="</tr>";
									}
								}
							vTmpSTR += "</table>";
						}else{
							vTmpSTR += '<p>Notifications not available</p>';
						}
						
					vTmpSTR +="</div>";
				vTmpSTR +="</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR += "</div>";
        //-------------------------NOTES DETAILS Tab END------------------------------------------
	
		//-------------------------PAYMENT DETAILS Tab START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='payment' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:900px;'>";
				vTmpSTR += "<legend class='fieldHead'>Payment Details</legend>";
				vTmpSTR += "<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%;  fontColor:black;'>";
						
						vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
						
							vTmpSTR +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
							vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
							vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='thesisTopicOne'>"+dataRep["tid"]+"</div>";
							vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
							vTmpSTR +="</div><br/>";
						
						
							vTmpSTR +='<table id="Table1"  style="color:#bd3303; margin:10px; align:center;" font-family: "Times New Roman", Times, serif; font-size: 12px;>'; //font-family: "Times New Roman", Times, serif;
						vTmpSTR +='<tr>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px;">Payment Category</th>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px;">Amount Paid</th>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px;">Paid Date</th>';
							vTmpSTR +='<th style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px;">Select</th>';
						vTmpSTR +=' </tr>';
						vTmpSTR +='<tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">Registration Fee</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1"  onchange="dataRep[this.name]=this.value;"/></td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +=' <tr>';
								  vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">First Installment</td>';
								 vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1" onchange="dataRep[this.name]=this.value;"/></td>';
								  vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +=' </tr>';
						vTmpSTR +=' <tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">Second Installment</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1"  onchange="dataRep[this.name]=this.value;"/></td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">Third Installment</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1" onchange="dataRep[this.name]=this.value;"/></td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							    vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">Fourth Installment</td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1" onchange="dataRep[this.name]=this.value;"/></td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='<tr>';
							    vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">Fifth Installment</td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="text" name="Paycat1"   id="Paycat1" onchange="dataRep[this.name]=this.value;"/></td>';
								vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:auto; font-size: 12px; align:center;">';
							   vTmpSTR += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(2015, 2050, 4, dataRep['commenceYYYY']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['commenceMM']);
								vTmpSTR += "</select>";
								vTmpSTR += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['commenceDD']);
								vTmpSTR += "</select>";
							   vTmpSTR += '</td>';
							   vTmpSTR +='<td style="border: 1px solid #bd3303; border-collapse: collapse; padding: 5px 5px 5px 5px; width:100px; font-size: 12px; align:center;"><input type="checkbox"/></td>';
						vTmpSTR +='</tr>';
						vTmpSTR +='</table>';
						
						vTmpSTR += "<div style='float:left;clear:both;'><input type='button'  class='btnD' value='Save' onclick=></div>";
						// if(tCodeLength != 0){
								// /**Copy**/
									// for(var j=0; j<batchdetailsLength; j++){
										// if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]){
											// str += "<p style='text-align:left; margin-bottom:-20px; margin-top:20px'>Library Fee : "+batchLibraryFeeArr[j]+"</p>";
										// }
									// }
									// /**Copy**/
							// vTmpSTR += "<table style='border-collapse: collapse;border: 1px solid black;'>";
			
								// vTmpSTR +="<tr style='border: 1px solid black;'>";
									// vTmpSTR +="<th style='border: 1px solid black;width:200px;font-size:12px;'>Total Course Fee</th>";
									// vTmpSTR +="<th style='border: 1px solid black;width:200px;font-size:12px;'>Paid Installments</th>";
									// vTmpSTR +="<th style='border: 1px solid black;width:200px;font-size:12px;'>Total Installments</th>";
									// vTmpSTR +="<th style='border: 1px solid black;width:200px;font-size:12px;'>Remain to pay</th>";
								// vTmpSTR +="</tr>"; 
								 
								// vTmpSTR +="<tr style='border: 1px solid black;'>";
								
								// var totFee = 0
								
								// for(var j=0; j<batchdetailsLength; j++){
									// if (batchDegreeCodeArr[j] == degreeCodeArr[RestudentTmpi] && batchYearArr[j] == achedamicYearArr[RestudentTmpi]){
										// //alert(batchDegreeCodeArr[j]);												
										// totFee = parseInt(batchCourseFeeArr[j]);
										// /**Copy**/
												// totFee = totFee + parseInt(batchLibraryFeeArr[j]);
												// /**Copy**/
									// }
								// }
								
								// var feeCatCount=0; 
								// for(var i=0; i<tCodeLength; i++){
									// if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i])==i)){
										// if(feeCatArr[i] != feeCatArr[i-1]) {
											// for(var j=0; j<tCodeLength; j++){
												// if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j])==j)){
													// if (feeCatArr[i] == feeCatArr[j]){
														// feeCatCount++;
													// }
												// }
											// }
											// vTmpSTR +="<td id='tot_courseFee' style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan="+feeCatCount+">"+totFee.toLocaleString()+"</td>";//"+feeCatArr[i]+"
											// feeCatCount=0;	
										// }
										// vTmpSTR +="<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' >"+parseInt(amountArr[i]).toLocaleString()+"</td>";
										// totalAmountPaid=0;
										// if(feeCatArr[i] != feeCatArr[i-1]) {
											// for(var j=0; j<tCodeLength; j++){
												// if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j])==j)){
													// if (feeCatArr[i] == feeCatArr[j]){
														// feeCatCount++;
														// var n=Number(amountArr[j]);
														// totalAmountPaid=totalAmountPaid+n;
													// }
												// }
											// }
											// //var remainamount1 = parseInt(document.getElementById('tot_courseFee').value);
											// vTmpSTR +="<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan="+feeCatCount+" >"+totalAmountPaid.toLocaleString()+"</td>";
											// var remainamount2 = totFee - totalAmountPaid;
											// vTmpSTR +="<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan="+feeCatCount+">"+remainamount2.toLocaleString()+"</td>";
											// totalAmountPaid=0;	
										// }
									// }								
								// vTmpSTR +="</tr>"; 		
								// }					
							// vTmpSTR += "</table>"; 
						// }
						
						// else{
							// vTmpSTR += '<p>Payment Details not available</p>';
						// }						
						
						//vTmpSTR += '<div><br><input type = "button" class ="btn2" value="Make Payments" onclick="open_Payment1()"></div>';
					vTmpSTR += "</div>"; 
				vTmpSTR += "</div>"; 
			vTmpSTR += "</fieldset>"; 
		vTmpSTR += "</div>";
		
        //-------------------------PAYMENT DETAILS Tab END------------------------------------------
		
		//-------------------------ADD TRANSFER DETAILS START------------------------------------------
		
		vTmpSTR += "<div class='section1' id='tdetails' style=display:none;'>";
			vTmpSTR += "<fieldset  class='field' style='width:900px; height:1000px;'>";
				vTmpSTR += "<legend class='fieldHead'>Transfer Student</legend>";
				vTmpSTR +="<div style='clear:both'>";
				
					vTmpSTR += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";
						

						vTmpSTR +="<div class='section1' id='trDetails' style='margin-left:-2px;'>";
							vTmpSTR += "<fieldset class='field'>";
								vTmpSTR += "<legend class='fieldHead'></legend>";
									vTmpSTR +="<div id='displayTransferTimes'></div>";
							vTmpSTR +="</fieldset>";
						vTmpSTR +="</div>";
						
						
						vTmpSTR +="<div class='section1' id='basicDetails' style='margin-left:-2px;'>";
							vTmpSTR +="<fieldset  class='field'>";
								vTmpSTR += "<legend class='fieldHead'></legend>";
							
								vTmpSTR += "<div class='identifiers'>Transfer Type</div><div class='colon'>&nbsp;:&nbsp;</div>";
								vTmpSTR += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div>";//getType();
								vTmpSTR += "<select id='selectedTransferType' onchange='dataRep[this.id]=this.selectedIndex;displaydegradeType();AddReleventType();displayRelevantRules();getProgrames();'>";
									vTmpSTR += "<option>Please scroll down to see the records</option>";
								vTmpSTR += "</select>";	
								vTmpSTR += "</br>";
			
								vTmpSTR += "<div id='degradeType' style='display:none;' >"; // <class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div>
									vTmpSTR += "<div class='identifiers' id='TypeLabel'> </div><div class='colon'>&nbsp;:&nbsp;</div>";//
									vTmpSTR += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div>";//getType();
									vTmpSTR += "<select id='degradeType01' onchange='dataRep[this.id]=this.selectedIndex;'>";
										vTmpSTR += "<option>Please scroll down to see the records</option>";
									vTmpSTR += "</select>";	
								vTmpSTR += "</div>";
								vTmpSTR += "</br>";

								/*var programmeList;
								for(i=0; i< trdegreeCodeLength; i++){
									//alert(trdegreeTitleArr[i])
									if (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) == trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) || (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) != trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) && trdegreeCodeArr.indexOf(trdegreeCodeArr[i])==i)){
											
											if(trdegreeCodeArr[i] != "" & trdegreeCodeArr[i] != trdegreeCodeArr[i-1] && trfacultyCodeArr[i] == dataRep["Fcode"] ){
												programmeList += "<option> "+trdegreeTitleArr[i]+"</option>";
											}
										}
									}*/
									
								vTmpSTR +="<div  id='programmeDiv' style='display:none;' >";//style='display:none;'
									vTmpSTR +="<div class='identifiers'>Programm</div><div class='colon'>&nbsp;:&nbsp;</div>";
									vTmpSTR += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div>";
									vTmpSTR += "<select  id='selectedProgramme' onchange='dataRep[this.id]=this.selectedIndex;'>";
										vTmpSTR += "<option>Please scroll down to see the records</option>";
										//vTmpSTR += programmeList;
									vTmpSTR += "</select>";
								vTmpSTR += "</div>";

								vTmpSTR += "<div id='mediumDiv' style='display:none;' >";//style='display:none;'
									vTmpSTR += "<div class='identifiers'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div>";
									vTmpSTR += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div>";
										vTmpSTR += "<select  id='selectedMedium' onchange='dataRep[this.id]=this.selectedIndex;'>";
										vTmpSTR += "<option>Please scroll down to see the records</option>";
										vTmpSTR += "<option>Sinhala</option>";
										vTmpSTR += "<option>English</option>";
									vTmpSTR += "</select>";
								vTmpSTR += "</div>"; 
								
								
								vTmpSTR += "<div id='displayTransferYear' style='disply:none'>";
									vTmpSTR += "<div class='identifiers'>Transfer Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
									vTmpSTR += "<div class='investView_l' name='transferyear' id='transferyear' style='width:180px;margin-left:20px;'>";
										vTmpSTR += "&nbsp;&nbsp;<select name='trYYYY' id='trYYYY' value='trYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
										vTmpSTR += generateNumberOptions(2015, 2035, 4, dataRep['trYYYY']);
									vTmpSTR += "</select>";
								vTmpSTR += "</div>";
								
									
								vTmpSTR += "<div style='clear:both'>";
									vTmpSTR += "<div class='identifiers'>Request Date</div><div class='colon'>&nbsp;:&nbsp;</div> "
									vTmpSTR += "<div class='investView_l' name='ReDate' id='ReDate' style='width:180px;margin-left:20px;'>&nbsp;&nbsp;";
										vTmpSTR += "<select name='ReDateYYYY' id='ReDateYYYY' value='ReDateYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(2015, 2025, 4, dataRep['ReDateYYYY']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='ReDateMM' id='ReDateMM' value='ReDateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
											vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['ReDateMM']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='ReDateDD' id='ReDateDD' value='ReDateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['ReDateDD']);
										vTmpSTR += "</select>";
									vTmpSTR += "</div>";
								vTmpSTR += "</div>";

								vTmpSTR += "<div style='clear:both'>";
									vTmpSTR += "<div class='identifiers'>BOS Date</div><div class='colon'>&nbsp;:&nbsp;</div> "
									vTmpSTR += "<div class='investView_l' name='bosDate' id='bosDate' style='width:180px;margin-left:20px;'>&nbsp;&nbsp;";
										vTmpSTR += "<select name='bosDateYYYY' id='bosDateYYYY' value='bosDateYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(2015, 2025, 4, dataRep['bosDateYYYY']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='bosDateMM' id='bosDateMM' value='bosDateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
											vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['bosDateMM']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='bosDateDD' id='bosDateDD' value='bosDateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['bosDateDD']);
										vTmpSTR += "</select>";
									vTmpSTR += "</div>";
									vTmpSTR += "<input type='text'  name='bosnumber'  id='bosnumber' value= '' placeholder='BOS Number' style='width:200px;' onchange='dataRep[this.name]=this.value;' >";		
								vTmpSTR += "</div>";

								vTmpSTR += "<div style='clear:both'>";
									vTmpSTR += "<div class='identifiers'>FGS Date</div><div class='colon'>&nbsp;:&nbsp;</div> "
									vTmpSTR += "<div class='investView_l' name='fgsDate' id='fgsDate' style='width:180px;margin-left:20px;'>&nbsp;&nbsp;";
										vTmpSTR += "<select name='fgsDateYYYY' id='fgsDateYYYY' value='fgsDateYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(2015, 2025, 4, dataRep['fgsDateYYYY']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='fgsDateMM' id='fgsDateMM' value='fgsDateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
											vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['fgsDateMM']);
										vTmpSTR += "</select>";
										vTmpSTR += "<select name='fgsDateDD' id='fgsDateDD' value='fgsDateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
											vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['fgsDateDD']);
										vTmpSTR += "</select>";
									vTmpSTR += "</div>";
									//vTmpSTR +="<div class='longIdentifier' style='clear:none;'>FGS Number";
									//vTmpSTR += "<input type='text'  name='fgsnumber'  id='fgsnumber' onchange='dataRep[this.name]=this.value;' >";
									vTmpSTR += "<input type='text'  name='fgsnumber'  id='fgsnumber' value= '' placeholder='FGS Number' style='width:200px;' onchange='dataRep[this.name]=this.value;' >";		
								vTmpSTR += "</div>";	

							
								
								vTmpSTR += "<input type='button' style='margin-top:0px;margin-left:400px;'  id='transferButton' value='Transfer' onclick=transferStudent01();>";//
							vTmpSTR += "</fieldset>";
						vTmpSTR += "</div></br>"; //class='section1' 
		
						vTmpSTR += "<div id='disrulefield' style='margin-left:-2px;display:none'>";
							vTmpSTR += "<fieldset  class='field'>";
								vTmpSTR += "<legend class='fieldHead'>Relevent Rules</legend>";
								vTmpSTR += "<div id='displayTransferRules' class='section1' style='height:auto;margin-left:10px;text-align:left;'></div>";
							vTmpSTR += "</fieldset>";
						vTmpSTR += "</div>";
						
						vTmpSTR += "<div class='section1' id='StudentDetails' style='margin-left:-2px;'>";
							vTmpSTR += "<fieldset  class='field'>";
								vTmpSTR += "<legend class='fieldHead'>Student Details</legend>";
								vTmpSTR += "<div style='clear:both'>";
								
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+ degreeTitleArr[RestudentTmpi] +"</div>";//"+dataRep["degreeTitle"]+"
										vTmpSTR +="&nbsp;&nbsp;&nbsp;&nbsp;<div class='longIdentifier' style='width:200px;text-align:center;clear:none;font-color:black;background-Color:pink' id='degreeTitle02' ></div>";
										vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
									vTmpSTR +="</div>";
										if(mediumArr[RestudentTmpi]=='si'){
											var trme='Sinhala'
										}else{
											var trme='English'
										}
									
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;width:auto;' id='medium'>"+trme+"</div>";//"+dataRep["degreeTitle"]+"
										vTmpSTR +="&nbsp;&nbsp;&nbsp;&nbsp;<div class='longIdentifier' style='width:200px;text-align:center;clear:none;font-color:black;background-Color:pink' id='medium02' ></div>";
										vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
									vTmpSTR +="</div>";
												
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentName' >"+studentNameArr[RestudentTmpi]+"</div>";//"+dataRep["studentName"]+"
										vTmpSTR +="<div class=hideLabel>&nbsp;";
									vTmpSTR +="</div>";

									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentNo2' >"+studentNoArr[RestudentTmpi]+"</div>";//"+dataRep["studentNo"]+"
										vTmpSTR +="&nbsp;&nbsp;&nbsp;&nbsp;<div class='longIdentifier' style='width:200px;text-align:center;clear:none;font-color:black;background-Color:pink' id='studentNo3' ></div>";
										vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
									vTmpSTR +="</div>";
												
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Application Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;' id='applicationNo1' >"+applicationNoArr[RestudentTmpi]+"</div>";//"+dataRep["applicationNo"]+"
										vTmpSTR +="<div class=hideLabel>&nbsp;</div>";
									vTmpSTR +="</div>";
											
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
										vTmpSTR +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
										vTmpSTR +="<div class='viewArea' style='clear:none;' id='studentNIC' >"+studentNICArr[RestudentTmpi]+"</div>";//"+dataRep["studentNIC"]+"
										vTmpSTR +="<div class=hideLabel>&nbsp;</div>";	
									vTmpSTR +="</div>";
								
									vTmpSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
										vTmpSTR += "<div class='longIdentifier'>Notes</div><div class='colon'>&nbsp;:&nbsp;</div> "
										vTmpSTR += "<div style='float:left' >&nbsp &nbsp;";
										vTmpSTR += "<textarea rows='auto'  name='tNotes' id ='tNotes' style = 'float:left;width:200px;height:120px;text-transform:capitalize'";
											vTmpSTR += "value='' onchange = 'dataRep [this.name] = this.value;'>"; 
										vTmpSTR +=" </textarea>";
									vTmpSTR +="</div>";
							
								vTmpSTR += "</div><br><br><br><br>";
								vTmpSTR += "<div id='displayButton' style='margin-left:400px;'></div>";
							vTmpSTR += "</fieldset>";
						vTmpSTR += "</div>";
					vTmpSTR += "</div><br>";		
				vTmpSTR += "</div>";
			vTmpSTR += "</fieldset>";
		vTmpSTR += "</div>";
		//-------------------------ADD TRANSFER DETAILS END------------------------------------------
	
	vTmpSTR += "</div>"
	
	
	//----------Tab Menues END--------------
	
	document.getElementById('viewProfileBtn').style.display='none';
	document.getElementById('studentProfileData').innerHTML = vTmpSTR;
	
	/***************************INACTIVE PROFILE*****************************************/
	for(var i=0; i<oldStudentNoLength; i++){
		if (oldStudentNoArr.indexOf(oldStudentNoArr[i]) == oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) || (oldStudentNoArr.indexOf(oldStudentNoArr[i]) != oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) && oldStudentNoArr.indexOf(oldStudentNoArr[i])==i)){
			if (oldStudentNoArr[i]==dataRep["studentNo"] && oldStudentNoArr[i]!=TransferstudentNoArr[i] && TransferstudentNoArr[i] !='Special Transfer'){					
				document.getElementById('displayInacive').style.display='block';//
				document.getElementById('transferDisplay01').style.display='none';
				checkInactiveCount++;
			}
		}
	}
	/***************************INACTIVE PROFILE*****************************************/
	
	if(RestudentTmpi != -1){
		document.getElementById('stdProfile_degreeCode').innerHTML = degreeCodeArr[RestudentTmpi];
		document.getElementById('stdProfile_uniCode').innerHTML = universityCodeArr[RestudentTmpi];
		document.getElementById('stdProfile_studentName').innerHTML = studentNameArr[RestudentTmpi]+'&nbsp;&nbsp;&nbsp;&nbsp;'+studentNoArr[RestudentTmpi];
		document.getElementById('stdProfile_degreeTitle').innerHTML = degreeTitleArr[RestudentTmpi];
		dataRep["Fcode"] = facultyCodeArr[RestudentTmpi];
		dataRep["degreeCode"] = degreeCodeArr[RestudentTmpi];
		dataRep["academicYear"] = achedamicYearArr[RestudentTmpi];
		
		var commDate="";
		var duration="";
			
		for(q=0; q<coursecommenceLength;q++){
			// if (commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q]) == commencedegreeCodeArr.lastIndexOf(commencedegreeCodeArr[q]) || (commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q]) != commencedegreeCodeArr.lastIndexOf(commencedegreeCodeArr[q]) && commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q])==q)){
				if(commencedegreeCodeArr[q] == degreeCodeArr[RestudentTmpi] && commenceacademicYearArr[q] == achedamicYearArr[RestudentTmpi]){				
					commDate=coursecommenceArr[q];
					duration=durationArr[q];
					if(durationArr[q].substring(0,1)=="1"){
						duration=1;
					}
					if(durationArr[q].substring(0,1)=="2"){
						duration=2;
					}
					if(durationArr[q].substring(0,1)=="3"){
						duration=3;
					}
					if(durationArr[q].substring(0,2)=="1-2"){
						duration=2;
					}									   
				}
			//}
		}
			
		var endy=(commDate.split("-",3)[commDate.split("-",3).length-3]);
		var endm=(commDate.split("-",3)[commDate.split("-",3).length-2]);
		var endd=(commDate.split("-",3)[commDate.split("-",3).length-1]);
		endy= parseInt(endy)+duration;
		endd= parseInt(endd)-1;
		var EndDate= endy+"-"+endm+"-"+endd;
		
		document.getElementById('stdProfile_duration').innerHTML = duration+' &nbsp;&nbsp;(Start Date:'+commDate+ '&nbsp;&nbsp;End Date:'+EndDate+')';
		document.getElementById('stdProfile_RegDate').innerHTML = librarycodeArr[RestudentTmpi];
		
		//--------------------------Personal Details Data START-----------------------------------
			
		document.getElementById('studentImage').innerHTML += '<img src="studentPhotos/pic/'+studentNICArr[RestudentTmpi]+'.jpg" width="100" height="115" style="float:left" alt=""/>';
		document.getElementById('studentName1').innerHTML += '<label style="fontcolor:red;">'+studentNameArr[RestudentTmpi]+'</label>';
		document.getElementById('studentNo1').innerHTML += '<label style="fontcolor:red;">'+studentNoArr[RestudentTmpi]+'</label>';
		document.getElementById('applicationNodisplay').innerHTML += '<label style="fontcolor:red;">'+applicationNoArr[RestudentTmpi]+'</label>';
		document.getElementById('studentNIC1').innerHTML += '<label style="fontcolor:red;">'+studentNICArr[RestudentTmpi]+'</label>';
		document.getElementById('studentPermanentAddress').innerHTML += '<label style="fontcolor:red;">'+studentPermanentAddressArr[RestudentTmpi]+'</label>';
		document.getElementById('studentEmployment').innerHTML += '<label style="fontcolor:red;">'+studentEmploymentArr[RestudentTmpi]+'</label>';
		document.getElementById('studentContactLan1').innerHTML += '<label style="fontcolor:red;">'+studentContactLanArr[RestudentTmpi]+'</label>';
		document.getElementById('studentContactMobile1').innerHTML += '<label style="fontcolor:red;">'+studentContactMobileArr[RestudentTmpi]+'</label>';
		document.getElementById('studentContactEmail1').innerHTML += '<label style="fontcolor:red;">'+studentContactEmailArr[RestudentTmpi]+'</label>';
		
		//--------------------------Personal Details Data END-----------------------------------
	}else if(applicantTmpi != -1){
		//document.getElementById('stdProfile_degreeCode').innerHTML = "";
		//document.getElementById('stdProfile_uniCode').innerHTML = "";
		document.getElementById('stdProfile_studentName').innerHTML = profilestudentNameArr[applicantTmpi]+'&nbsp;&nbsp;&nbsp;&nbsp;'+profileapplicationNoArr1[applicantTmpi]+'&nbsp;&nbsp;&nbsp;&nbsp;'+profilestudentNICArr[i];
		document.getElementById('stdProfile_degreeTitle').innerHTML = profiledegreeTitleArr[applicantTmpi];
		
		
		//document.getElementById('stdProfile_duration').innerHTML = "";
		//document.getElementById('stdProfile_RegDate').innerHTML = "";
		
		//--------------------------Personal Details Data START-----------------------------------
			
		document.getElementById('studentImage').innerHTML += '<img src="studentPhotos/pic/'+profilestudentNICArr[applicantTmpi]+'.jpg" width="100" height="115" style="float:left" alt=""/>';
		document.getElementById('studentName1').innerHTML += '<label style="fontcolor:red;">'+profilestudentNameArr[applicantTmpi]+'</label>';
		//document.getElementById('studentNo1').innerHTML += '<label style="fontcolor:red;"></label>';
		document.getElementById('applicationNodisplay').innerHTML += '<label style="fontcolor:red;">'+profileapplicationNoArr1[applicantTmpi]+'</label>';
		document.getElementById('studentNIC1').innerHTML += '<label style="fontcolor:red;">'+profilestudentNICArr[applicantTmpi]+'</label>';
		document.getElementById('studentPermanentAddress').innerHTML += '<label style="fontcolor:red;">'+profilestudentPermanentAddressArr[applicantTmpi]+'</label>';
		document.getElementById('studentEmployment').innerHTML += '<label style="fontcolor:red;">'+profilestudentEmploymentArr[applicantTmpi]+'</label>';
		document.getElementById('studentContactLan1').innerHTML += '<label style="fontcolor:red;">'+profilestudentContactLanArr[applicantTmpi]+'</label>';
		document.getElementById('studentContactMobile1').innerHTML += '<label style="fontcolor:red;">'+profilestudentContactMobileArr[applicantTmpi]+'</label>';
		document.getElementById('studentContactEmail1').innerHTML += '<label style="fontcolor:red;">'+profilestudentContactEmailArr[applicantTmpi]+'</label>';
		
		//--------------------------Personal Details Data END-----------------------------------
	}
	
}
//---------------------------------------------SET DATA START END-------------------------------------------------

function displayTabDiv(divName, buttonName){
	
	document.getElementById('PersonnelDetails').style.display='none';
	document.getElementById('Qualifications').style.display='none';
	//document.getElementById('profqualification').style.display='none';
	document.getElementById('workExperience').style.display='none';
	document.getElementById('referies').style.display='none';
	document.getElementById('DocumenNames').style.display='none';
	document.getElementById('Notes').style.display='none';
	
	document.getElementById('personalDetailsbutton').style.backgroundImage = "url(img/button.png)";
	document.getElementById('qalificationalDetailsbutton').style.backgroundImage = "url(img/button.png)";
	//document.getElementById('professionalqalification').style.backgroundImage="url(img/button.png)";
	document.getElementById('wrkExperience').style.backgroundImage="url(img/button.png)";
	document.getElementById('applicantsreferies').style.backgroundImage="url(img/button.png)";
	document.getElementById('notesDetailsbutton').style.backgroundImage = "url(img/button.png)";
//	document.getElementById('documentDetailsbutton').style.backgroundImage = "url(img/button.png)";
	
	if(dataRep['ResearchsearchType']=='ResearchstudentSearch'){
		document.getElementById('researchdetailsdiv').style.display='none';
		document.getElementById('payment').style.display='none';
		document.getElementById('tdetails').style.display='none';
		
		document.getElementById('researchDetails').style.backgroundImage="url(img/button.png)";
		document.getElementById('paymentDetailsbutton').style.backgroundImage = "url(img/button.png)";
		//document.getElementById('tdetailsbutton').style.backgroundImage = "url(img/button.png)";
	}
	
	document.getElementById(divName).style.display='block';
	document.getElementById(buttonName).style.backgroundImage = "url(img/buttonoff.png)";
}

//---------------------------------------------GENERATE FUNCTION FUNCTION START-----------------------------------

    function generateDocuments(dID) {
		var documentID = dID.id;
		var documentID = documentID.substr(documentID.indexOf("studentBttn") + 11);	

		for(var i=0; i<documentIDLength; i++){
			if (i==documentID){
				var docName=documentNameArr[i]
			}
		}
    
		if (document.getElementById('studentBttn'+documentID).value=='+'){
			document.getElementById('documentInfo'+documentID).innerHTML =document.getElementById('documentInfo'+documentID).innerHTML.replace="";
			
			var newstr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
			var rowCount=1;
			
			for(var i=0; i<documentIDLength; i++){
				if (documentNameArr[i]==docName && sequenceNoArr[i]!=sequenceNoArr[i-1]){
					rowCount++;
				}
			}
					
			for(var i=0; i<documentIDLength; i++){
			
				//	if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i)){
				//alert(dataRep["studentNo"]);
				//if(itemValueArr[i] != dataRep["studentNo"]){                                                	
				//alert(itemValueArr[i]);
				//alert(dataRep["studentNo"]);
				if (documentNameArr[i]==docName){
					newstr +="<div class='info'   name='testInfo"+i+"'>";
					if (sequenceNoArr[i]!=sequenceNoArr[i-1]) {
						rowCount--;//documentItemIDArr[i]==documentID1Arr[j] &&documentName1Arr[j]== &&
					}
					
					if (sequenceNoArr[i]!=sequenceNoArr[i-1] || documentNameArr[i]!=documentNameArr[i-1] ) {
						newstr +="<div id='myDiv' class='viewArea' style='clear:none;background-color:#ff9999;width:810px;height:auto' >";
						for(var j=0; j<dataItemIDLength; j++){//
							//if (dataItemNameArr.indexOf(dataItemNameArr[j]) == dataItemNameArr.lastIndexOf(dataItemNameArr[j]) || (dataItemNameArr.indexOf(dataItemNameArr[j]) != dataItemNameArr.lastIndexOf(dataItemNameArr[j]) && dataItemNameArr.indexOf(dataItemNameArr[j])==j)){
							if ( documentName1Arr[j]==docName && sequenceNoArr[i]== sequenceNo1Arr[j] & dataItemIDArr[j]!='1' & dataItemIDArr[j]!='2' & dataItemIDArr[j]!='3' & dataItemIDArr[j]!='4'){//
								// newstr +=" <label>"+dataItemNameArr[j]+":"+itemValueArr[j]+"</label><br>";
								// newstr +="<div class='investLabel_l' style='clear:none;'>"+dataItemNameArr[j]+":"+itemValueArr[j]+"</div><br>";
								newstr +="<div class='longIdentifier' style='clear:none;width:auto;font-color:black;'><font color='black' size='2'>"+dataItemNameArr[j]+":</font></div>";
								newstr +="<div class='viewArea' style='clear:none;'>"+itemValueArr[j]+"</div>";
							}
						}
						newstr += "</div>";
						newstr += "<br>";
						newstr +="<div id='topics1' class='info'></div>";
						//newstr +="<div id='topics1' class='info'>&nbsp;</div>";
						//newstr +="<div class='investLabel_l'  style='width:30px'>&nbsp;</div>";
						newstr +="<div class='investLabel_l'  style='width:160px'>Document</div>";
						newstr +="<div class='investLabel_l'  style='width:160px'>Send To</div>";
						newstr +="<div class='investLabel_l' style='width:80px;text-align:left'>Date</div>";
						newstr +="<div class='investLabel_l'  style='width:75px;text-align:left'>Decision</div>";
						newstr +="<div class='investLabel_l'  style='width:80px;text-align:left'>Number</div>";
						newstr +="<div class='investLabel_l'  style='width:160px'>Remarks</div>";
						newstr += "<br>";
					}
					
				   	newstr += "<div class='investView_l'  style='width:160px' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
					newstr += documentNameArr[i]+"-"+rowCount+"</div>";
					
					newstr += "<div class='investView_l'  style='width:160px' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
					newstr += decisionMakingPointNameArr[i]+"</div>";
					
					newstr += "<div class='investView_l'  style='width:80px;text-align:left' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
					newstr += dateArr[i]+"</div>";
								
					newstr += "<div  class='investView_l'   style='width:75px;text-align:left' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
					newstr += decisionArr[i]+"</div>";
					
					newstr += "<div class='investView_l'  style='width:80px;text-align:left' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
					newstr += numberArr[i]+"</div>";
								
					newstr += "<div  class='investView_l'   style='width:160px' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
					newstr += remarksArr[i]+"</div>";
			
					
					newstr += "</div><br>"; 
				}
			}	
            document.getElementById('documentInfo'+documentID).innerHTML =document.getElementById('documentInfo'+documentID).innerHTML.replace="";
			document.getElementById('documentInfo'+documentID).innerHTML += newstr;
		}
		
		if (document.getElementById('studentBttn'+documentID).value=='-'){
			document.getElementById('documentInfo'+documentID).innerHTML =document.getElementById('documentInfo'+documentID).innerHTML.replace="";
		}
		
		var val=document.getElementById('studentBttn'+documentID)
		if (val.value=="+"){
			val.value = "-";
		} else {
			val.value = "+";
		}

    }
	//---------------------------------------------GENERATE FUNCTION FUNCTION END-----------------------------------


//---------------------------------------------------DISPLY PREVIUS TRANSFER DETAILS FUNCTION END--------------------------	

//---------------------------------------------------DISPLY PROGRAMMES IN TRANSFER FUNCTION START-----------------------------------

//---------------------------------------------------DISPLY PROGRAMMES IN TRANSFER FUNCTION END-----------------------------------

//---------------------------------------------------DISPLY PROGRAM TYPES FUNCTION START-----------------------------------


//---------------------------------------------------DISPLY PROGRAM TYPES FUNCTION END-----------------------------------

//---------------------------------------------------DISPLY DEGRADE TYPES FUNCTION START-----------------------------------


//---------------------------------------------------DISPLY DEGRADE TYPES FUNCTION END-----------------------------------	

//--------------------------------------------------DISPLY DEGRADE DEGREE TYPE FUNCTION START----------------------------
 
//--------------------------------------------------DISPLY DEGRADE DEGREE TYPE FUNCTION END----------------------------			
//---------------------------------------------------DISPLY RELEVENT RULS FUNCTION START--------------------------


//---------------------------------------------------DISPLY RELEVENT RULS FUNCTION START--------------------------

//---------------------------------------------DISPLAY HISTORY FUNCTION START-----------------------------------	
    
	//---------------------------------------------DISPLAY HISTORY FUNCTION END-----------------------------------	


//-----------------------------------------------------TRANSFER DEATILS GENERATE FUNCTION START-----------------------------------------



//-----------------------------------------------------TRANSFER DEATILS GENERATE FUNCTION END-----------------------------------------

//-----------------------------------------------------STUDENT DEATILS ADD FUNCTION START-----------------------------------------


//-----------------------------------------------------STUDENT DEATILS ADD FUNCTION END-----------------------------------------

//-----------------------------------------------------TRANSFER DETAILS ADD FUNCTION START-----------------------------------------


//-----------------------------------------------------TRANSFER DETAILS ADD FUNCTION START-----------------------------------------


//---------------------------------------------------UPDATE STUDENT TABLE AS TR FUNCTION START--------------------------

//---------------------------------------------------UPDATE STUDENT TABLE AS TR FUNCTION END--------------------------

//---------------------------------------------------UPDATE APPLICANT DETAILS(DEGREE CODE) FUNCTION START--------------------------


//---------------------------------------------------RELEVENT RULS ADD FUNCTION START--------------------------

	
function open_Payment1() {
	window.open("https://sis.kln.ac.lk/PayService/ClientApp/", "_blank");
}

function PrintResultSheet(){
	
	var exprint = "";
	
	
			// exprint += "<div class='section1' id='researchdetailsdiv' style=display:none;'>";
				// exprint +="<div style='margin-top:20px;float:left;clear:both;'>";
					// exprint +="<div class='longIdentifier' style='clear:none;'>Student</div><div class='colon'>&nbsp;:&nbsp;</div>";
					// exprint +="<div class='viewArea' style='clear:none;'>";
						// exprint += '<label id="stdProfile_studentName" style="fontcolor:red;"></label>';
					// exprint +="</div>";
					// exprint +="<div class=hideLabel>&nbsp;</div>";
				// exprint +="</div>";
				
				// exprint +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
					// exprint +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
					// exprint +="<div class='viewArea' style='clear:none;'>";
						// exprint += '<label id="stdProfile_degreeTitle" style="fontcolor:red;"></label>';
					// exprint +="</div>";
					// exprint +="<div class=hideLabel>&nbsp;</div>";
				// exprint +="</div>";
				
					exprint += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";
						exprint += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";	
							
							if(MarksLength != 0){
								
								var sem0Count = 0;
								var sem1Count = 0;
								var sem2Count = 0;
								var sem3Count = 0;
								var sem4Count = 0;
								
								for(var j = 0 ; j < MarksLength ; j++){
									switch(subjectSemesterArr[j]) {	
										case '0': sem0Count++; break;
										case '1': sem1Count++; break;
										case '2': sem2Count++; break;
										case '3': sem3Count++; break;
										case '4': sem4Count++; break;
									}
								}
								
								var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];
								
								//	Compare Result Point Equal the minimum marks							
								var tmpTestGrade = 'B-';
								
								exprint += '<table align="center" style="width:auto; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';
				
									exprint += "<tr style='border: 1px solid black;'>";
										exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
										exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
										exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
										exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
										exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
									exprint += "</tr>";
									
									var tmpGPA = 0;
									var tmpcredits = 0;
									for(var i=0; i<MarksLength; i++){
										
										if(marksArr[i] == '-'){
											marksArr[i] = '(ab)';
										}
										
										exprint += "<tr style='border: 1px solid black;'>";	
											
											if(subjectSemesterArr[i] == '0' && sem0Count != 0){
												exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='"+sem0Count+"'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>0</div></td>";
												sem0Count = 0;
											}else if(subjectSemesterArr[i] == '1' && sem1Count != 0){
												exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='"+sem1Count+"'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
												sem1Count = 0;
											}else if(subjectSemesterArr[i] == '2' && sem2Count != 0){
												exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='"+sem2Count+"'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
												sem2Count = 0;
											}else if(subjectSemesterArr[i] == '3' && sem3Count != 0){
												exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='"+sem3Count+"'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
												sem3Count = 0;
											}else if(subjectSemesterArr[i] == '4' && sem4Count != 0){
												exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='"+sem4Count+"'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
												sem4Count = 0;
											}
											
											exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+subjectNameArr[i]+"</div></td>";
											exprint += "<td style='border: 1px solid black;padding: 5px 160px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>"+subjectTitleArr[i]+"</div></td>";											
											exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>"+marksArr[i]+"</div></td>";					
											
											var pFstatus = "";
											
											if(gradeArray.indexOf(tmpTestGrade) < gradeArray.indexOf(marksArr[i])){
												pFstatus = "Repeat";
											}else{
												pFstatus = "Pass";
											}
											
											exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+pFstatus+"</div></td>";	
											tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));
											tmpcredits += parseInt(subjectCreditsArr[i]);
										exprint += "</tr>";
									}									
									var tmpCalGPA = tmpGPA/tmpcredits;
									exprint += "<tr style='border: 1px solid black;'>";
										exprint += "<td style='padding: 5px;text-align:center' colspan='3'><div class='investView_l'  style='text-align:center; width:auto'>GPA : </div></td>";	
										exprint += "<td></td>";
										exprint += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+tmpCalGPA.toFixed(1)+"</div></td>";	
									exprint += "</tr>";
								exprint += "</table>";
								exprint += '<p>*This is only the result sheet of the student and it cannot be considered as an academic certificate.This is only a computer generated results sheet</p>';
								
							}else{
								exprint += '<p>Results not available</p>';
							}
						exprint += "</div>";
				exprint += "</div>";
			exprint += "</fieldset>";
		exprint += '</div>';
		
		newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">label{font-family:tahoma;font-size:14px}.investView_l,.investView,.investLabel_l,.investLabel,br{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0096c7;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write(exprint);
		doc.write('</body></html>');
		doc.close();
}