dataRep["studentDateofbirth"] = dataRep["studentName"] ="";
function empltyLength(){
	studentNICLength =0;
}

function formAplicantProfile(dsp){


title = "Applicant Profile";
		str = "";

	if(dsp == "formAplicantProfile"){

		
	
			str  = "<div id='addAplicantProfile'>";
			str += "<table><tr><td>"
			str += '<center><h2>'+title+'</h2></center></br>';
			

			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainAplicantProfile" >';

			str += '<p style="float:left;"><u><b>Personal Details</b></u></p>';

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Application Number</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='applicationNo' style='clear:none;'>"+dataRep["applicationNo"]+"</div>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>University</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='universityTitle' style='clear:none;'>"+dataRep["universityCode"]+"&nbsp;&nbsp;"+dataRep["universityTitle"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='facultyCode' style='clear:none;'>"+dataRep["facultyCode"]+"&nbsp;&nbsp;"+dataRep["facultyTitle"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='programmeTypeCode' style='clear:none;'>"+dataRep["programmeTypeCode"]+"&nbsp;&nbsp;"+dataRep["programmeTypeTitle"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='degreeCode' style='clear:none;'>"+dataRep["degreeCode"]+"&nbsp;&nbsp;"+dataRep["degreeTitle"]+"</div>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Name with Initials</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='studentInitial' style='clear:none;'>"+dataRep["studentPersonalTitle"]+"."+dataRep["studentInitial"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Name in Full</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div  class='viewArea'  id='studentName' style='clear:none;'>"+dataRep["studentName"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Date of Birth</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='studentDateofbirth' style='clear:none;'>"+dataRep["studentDateofbirth"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Student NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentNIC' style='clear:none;'>"+dataRep["studentNIC"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Nationality</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentNationality' style='clear:none;'>"+dataRep["studentNationality"]+"</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Citizenship</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentCitizenship' style='clear:none;'>"+dataRep["studentCitizenship"]+"</div></br>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Fixed Number</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentContactLan' style='clear:none;'>"+dataRep["studentContactLan"]+"</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Mobile Number</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentContactMobile' style='clear:none;'>"+dataRep["studentContactMobile"]+"</div></br>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Email</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentContactEmail' style='clear:none;'>"+dataRep["studentContactEmail"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Permenent Address</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentPermanentAddress' style='clear:none;'>"+dataRep["studentPermanentAddress"]+"</div></br></br>";
			
			str += '<p style="float:left;"><u><b>Office Details</b></u></p>';
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Employment</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='studentEmployment' style='clear:none;'>"+dataRep["studentEmployment"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Office Address</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='studentOfficeAddress' style='clear:none;'>"+dataRep["studentOfficeAddress"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Address for Correspondence</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='correspondence' style='clear:none;'>"+dataRep["correspondence"]+"</div></br></br>";
			
			
			str += '<p style="float:left;"><u><b>University Education</b></u></p>';
					

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>University Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='bachelorDegreeobtainUniversity' style='clear:none;'>"+dataRep["bachelorDegreeobtainUniversity"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='bachelorDegreeTitle' style='clear:none;'>"+dataRep["bachelorDegreeTitle"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Class</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='bachelorDegree' style='clear:none;'>"+dataRep["bachelorDegree"]+"</div>";
	
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Year of Graduation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='bachelorDegreegraduationYear' style='clear:none;'>"+dataRep["bachelorDegreegraduationYear"]+"</div>";

			str +="<div class='longIdentifier' style='clear:none;'>Month</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='bachelorDegreegraduationMonth' style='clear:none;'>"+dataRep["bachelorDegreegraduationMonth"]+"</div></br>";
			
		if(dataRep["higherDegreeobtainUniversity"] !=""){

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>University Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='higherDegreeobtainUniversity' style='clear:none;'>"+dataRep["higherDegreeobtainUniversity"]+"</div>";
		}
		
		if(dataRep["higherDegreeTitle"] !=""){
		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='higherDegreeTitle' style='clear:none;'>"+dataRep["higherDegreeTitle"]+"</div>";
		}
		
		if(dataRep["higherDegree"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Class</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='higherDegree' style='clear:none;'>"+dataRep["higherDegree"]+"</div>";
		}
		
		if(dataRep["higherDegreegraduationYear"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Year of Graduation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='higherDegreegraduationYear' style='clear:none;'>"+dataRep["higherDegreegraduationYear"]+"</div>";
		}
		
		if(dataRep["higherDegreegraduationMonth"] !=""){
			str +="<div class='longIdentifier' style='clear:none;'>Month</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='higherDegreegraduationMonth' style='clear:none;'>"+dataRep["higherDegreegraduationMonth"]+"</div></br></br>";
		}	
			
			str += '</br><p style="float:left;"><u><b>Professional & Other Qualifications</b></u></p>';
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
		if(dataRep["qualificationOne"] !=""){	
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Qualification</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qualificationOne' style='clear:none;'>"+dataRep["qualificationOne"]+"</div>";
		}

		if(dataRep["qualificationAwardingAuthorityOne"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Awarding Authority</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qualificationAwardingAuthorityOne' style='clear:none;'>"+dataRep["qualificationAwardingAuthorityOne"]+"</div>";
		}
		
		if(dataRep["qualificationAwardingYearOne"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Year</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qualificationAwardingYearOne' style='clear:none;'>"+dataRep["qualificationAwardingYearOne"]+"</div>";
		}
		
		if(dataRep["qualificationTwo"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Qualification</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qualificationTwo' style='clear:none;'>"+dataRep["qualificationTwo"]+"</div>";
		}
		
		if(dataRep["qulificationAwardingAuthorityTwo"] !=""){
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Awarding Authority</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qulificationAwardingAuthorityTwo' style='clear:none;'>"+dataRep["qulificationAwardingAuthorityTwo"]+"</div>";
		}
		
		if(dataRep["qulificationAwardingYearTwo"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Year</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='qulificationAwardingYearTwo' style='clear:none;'>"+dataRep["qulificationAwardingYearTwo"]+"</div></br></br>";
		}	
			
			str += '</br><p style="float:left;"><u><b>Employments Records</b></u></p>';
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
		if(dataRep["designationOne"] !=""){			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='designationOne' style='clear:none;'>"+dataRep["designationOne"]+"</div>";
		}
		
		if(dataRep["companyOne"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Work place/Employer</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='companyOne' style='clear:none;'>"+dataRep["companyOne"]+"</div>";
		}
		
		if(dataRep["fromOne"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>From</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='fromOne' style='clear:none;'>"+dataRep["fromOne"]+"</div>";
		}
		
		if(dataRep["toOne"] !=""){		
			str +="<div class='longIdentifier' style='clear:none;'>To</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='toOne' style='clear:none;'>"+dataRep["toOne"]+"</div></br>";
		}
		
		if(dataRep["designationTwo"] !=""){			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='designationTwo' style='clear:none;'>"+dataRep["designationTwo"]+"</div>";
		}
		
		if(dataRep["companyTwo"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Work place/Employer</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='companyTwo' style='clear:none;'>"+dataRep["companyTwo"]+"</div>";
		}
		
		if(dataRep["fromTwo"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>From</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='fromTwo' style='clear:none;'>"+dataRep["fromTwo"]+"</div>";
		}
		
		if(dataRep["toTwo"] !=""){		
			str +="<div class='longIdentifier' style='clear:none;'>To</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='toTwo' style='clear:none;'>"+dataRep["toTwo"]+"</div></br>";
		}
		
		if(dataRep["designationThree"] !=""){			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='designationThree' style='clear:none;'>"+dataRep["designationThree"]+"</div>";
		}
		
		if(dataRep["companyThree"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Work place/Employer</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='companyThree' style='clear:none;'>"+dataRep["companyThree"]+"</div>";
		}
		
		if(dataRep["fromThree"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>From</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='fromThree' style='clear:none;'>"+dataRep["fromThree"]+"</div>";
		}
		
		if(dataRep["toThree"] !=""){		
			str +="<div class='longIdentifier' style='clear:none;'>To</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='toThree' style='clear:none;'>"+dataRep["toThree"]+"</div></br></br>";
		}
		
			str += '</br><p style="float:left;"><u><b>Refrees</b></u></p>';
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
		
		if(dataRep["refreeNameOne"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeNameOne' style='clear:none;'>"+dataRep["refreeNameOne"]+"</div>";
		}
		
		if(dataRep["refreeDesignationOne"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeDesignationOne' style='clear:none;'>"+dataRep["refreeDesignationOne"]+"</div>";
		}
		
		if(dataRep["refreeAddressOne"] !=""){		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Address</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeAddressOne' style='clear:none;'>"+dataRep["refreeAddressOne"]+"</div>";
		}	
		
		if(dataRep["refreeNameTwo"] !=""){	
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeNameTwo' style='clear:none;'>"+dataRep["refreeNameTwo"]+"</div>";
		}

		if(dataRep["refreeDesignationTwo"] !=""){	
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeDesignationTwo' style='clear:none;'>"+dataRep["refreeDesignationTwo"]+"</div>";
		}
		
		if(dataRep["refreeAddressTwo"] !=""){	
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Address</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='refreeAddressTwo' style='clear:none;'>"+dataRep["refreeAddressTwo"]+"</div></br></br>";
		}

		if(dataRep["programmeTypeCode"] == "PRO0000003" || dataRep["programmeTypeCode"] =="PRO0000004"){
			str += '</br><p style="float:left;"><u><b>Research Details</b></u></p>';
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree for which registration is sougth</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='registrationSougth' style='clear:none;'>"+dataRep["registrationSougth"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Main Subject</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='mainSubject' style='clear:none;'>"+dataRep["mainSubject"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Field of Specialization</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='fieldOfSpecialization' style='clear:none;'>"+dataRep["fieldOfSpecialization"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='researchMedium' style='clear:none;'>"+dataRep["researchMedium"]+"</div>";
			

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Title of the proposed Research</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='researchTitle' style='clear:none;'>"+dataRep["researchTitle"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Is a grant available for the project</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='grantForProject' style='clear:none;'>"+dataRep["grantForProject"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>If so,give details</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='grantDetails' style='clear:none;'>"+dataRep["grantDetails"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>If not,how will the project be Financed</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='financedDetails' style='clear:none;'>"+dataRep["financedDetails"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='paragraphDiv' style='clear:none;'>If you are registered at present for degree/diploma at this university or any other university,give details</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='registeredOtherDegree' style='clear:none;'>"+dataRep["registeredOtherDegree"]+"</div></br></br>";
			
			
			str += '</br><p style="float:left;"><u><b>Consent of the Supervisor/s</b></u></p></br></br>';
			
			
			str +="<fieldset  class='field' style='border: 2px solid black'><legend class='fieldHead'>Applicant's</legend><div style='clear:both'>";

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='longIdentifier' style='clear:none;'>Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str +="<div class='viewArea'  id='applicantName' style='clear:none;'>"+dataRep["applicantName"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='longIdentifier' style='clear:none;'>Institution</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str +="<div class='viewArea'  id='applicantInstitution' style='clear:none;'>"+dataRep["applicantInstitution"]+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='longIdentifier' style='clear:none;'>Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str +="<div class='viewArea'  id='applicantAddress' style='clear:none;'>"+dataRep["applicantAddress"]+"</div>";

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='longIdentifier' style='clear:none;'>Title of the Research</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str +="<div class='viewArea'  id='applicantResearchTitle' style='clear:none;'>"+dataRep["applicantResearchTitle"]+"</div>";
			str += "</fieldset></div>";
			
			str +="<div ></div></div><div style='clear:both'>";
			
			//str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;' >Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorNameOne' style='clear:none;'></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier'  style='clear:none;'>Position</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorPositionOne' style='clear:none;'></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Institution</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorInstitutionOne' style='clear:none;'></div></br>";
			//str += "</fieldset></div>";

			
			str +="<div ></div></div><div style='clear:both'>";

			
			//str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorNameTwo' style='clear:none;'></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;' >Position</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorPositionTwo' style='clear:none;'></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Institution</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea'  id='supervisorInstitutionTwo' style='clear:none;'></div>";
			//str += "</fieldset></div>";
			
			
			
			str +="<div ></div> </div><div style='clear:both'>";
			str +="<fieldset  class='field'><div style='clear:both'>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='paragraphDiv'>I/We agree to function as Supervisor/s for </div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<div class='viewArea'  id='applicantNameForSupervisor' style='clear:none;'></div></div><div style='clear:both'>";
			
			//str +="<input type='text' name='applicantNameForSupervisor'  value= '"+dataRep['applicantNameForSupervisor']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div></div><div style='clear:both'>";

			str +="<div class='paragraphDiv'>I am/We are satisfied that grant /financial support states in No.11 is sufficient to cover the cost of the project</div><div style='clear:both'>";
			
			
			str +="<div class='identifiers' >Signature</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureOne'  value= '"+dataRep['supervisorSignatureOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div class='identifiers' >Signature</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureTwo'  value= '"+dataRep['supervisorSignatureTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
			str +="<div class='identifiers' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureNameOne'  value=  '"+dataRep['supervisorSignatureNameOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div class='identifiers' >Name</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorSignatureNameTwo'  value=  '"+dataRep['supervisorSignatureNameTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' '></div></div><div style='clear:both'>";

			str +="<div class='identifiers' >Date</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorDateOne'  value=  '"+dataRep['supervisorDateOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div><div style='float:left' >";
			
			
			str +="<div class='identifiers' >Date</div><div class='colon'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<input type='text' name='supervisorDateTwo'  value=  '"+dataRep['supervisorDateTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			str +="</fieldset></div>";
			str +="</br>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Head of the Department</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recHeadDep' id='recHeadDep' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recHeadDep'];
			str += "</textarea></div><div style='clear:both'>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Board of Study</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recStudyBoard' id='recStudyBoard' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recStudyBoard'];
			str += "</textarea></div><div style='clear:both'>";
		
			str += "<div class='paragraphDiv'>Recommendation of the Faculty Board</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recFacultyBoard' id='recFacultyBoard' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recFacultyBoard'];
			str += "</textarea></div><div style='clear:both'>";
			
			str += "<div class='paragraphDiv'>Recommendation of the Senate</div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str += "<textarea style='min-width:150px;' rows='auto' name='recSenate' id='recSenate' onchange='dataRep[this.id]=this.value'>";
			str += dataRep['recSenate'];
			str += "</textarea></div><div style='clear:both'>";
	
			}
			str += "<br><br>";
			str += "<center>";
			
			// str += "<div class='paragraphDiv'>I do hereby certify that the above particulars furnished by me are true and correct.</div></br>";
			
			
			// str +="<div style='float:left;clear:both;margin:25px;'>";
		    // str +="<div style='float:left;margin-right:500px'><p>--------------------------</p><p>Date</p></div>";
		    // str +="<div style='float:left;'><p>--------------------------</p><p>Signature of the Applicant</p></div>";
		    // str +="</div>";
			
			
			
			// str +="<div style='margin-top:20px;float:left;clear:both;'>";
			// //str +='<a href="http://selectpdf.com/save-as-pdf">Save as Pdf</a> ';
			// str += '<input type="button" id="btnlog" class="btn" value="Download Application"  onclick=downloadapp();>';
			
			// str += '<input type="button" id="btnlog" class="btn" value="Print Application"  onclick=sendForm('+"'data4printFinalApplication'"+');>';
			
			
			
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>';
			str += '<input type="button" class="btn" value = "Return to Applicant List" onclick = showMenu('+"'formApplicantList'"+');></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
	
	
	}
	
	
		return str;
	
}