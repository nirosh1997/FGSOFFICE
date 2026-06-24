

function printFinalApplicationForm(dsp){

title1 ="UNIVERSITY OF KELANIYA, FACULTY OF GRADUATE STUDIES" 

	title = "Application Form";

	var str="";

	var rowHeight='height:40';
		

	str += "<div style='width:700; height:900'>";
	str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';
	str += '</br><h10><center><font color="#bd3303">'+title1+'</font></center></h10></br>';
	str += '<center><font color="#bd3303">'+title+'</font></center></br>';
	str += '<center><font color="#bd3303">'+dataRep["degreeTitle"]+'</font></center>';

	str +="<div style='float:left;width:100%;'>";
	str +="<div style='float:right;padding:15px;'>";
	str +="<div class='longIdentifier' style='float:left;'>Application No:</div>";
	str +="<div class='viewArea' id='studentInitial' style='clear:none;'>"+dataRep["applicationNo"]+"</div>";
	str +="</div></div>";

	str +="<div style='clear:both'>";
	str +='<hr>';
	str +='<form name="maintainStudentApplication" >';

	str += '<p style="float:left;"><u><b>Personal Details</b></u></p></br></br>';
	str +="<div style='clear:both'>";
	
	str += "<div style='float:left;width:200;"+rowHeight+"'>1. Name with Initials</div>";
	str += "<div style='float:left;width:10;"+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentInitial"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>2. Name in Full</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentName"]+"</div>";
	str += "<div style='float:left;width:200'; "+rowHeight+">3. Date of Birth</div>";
	str += "<div style='float:left;width:10'; "+rowHeight+">:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentDateofbirth"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>4. Student NIC Number</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentNIC"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>5. Nationality</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentNationality"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>6. Citizenship</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentCitizenship"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>7. Fixed Number</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentContactLan"]+"</div>";	
	
	str += "<div style='float:left;width:200; "+rowHeight+"'>8. Mobile Number</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentContactMobile"]+"</div>";	
	
	str += "<div style='float:left;width:200; "+rowHeight+"'>9. Email</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentContactEmail"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>10. Permanent Address</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentPermanentAddress"]+"</div>";	
	
	
			
	str += '<p style="float:left;"><u><b>Office Details</b></u></p></br></br>';
	str +="<div style='clear:both'>";;
	
	str += "<div style='float:left;width:200;"+rowHeight+"'>11. Employment</div>";
	str += "<div style='float:left;width:10;"+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentEmployment"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>12. Office Address</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["studentOfficeAddress"]+"</div>";
	str += "<div style='float:left;width:200'; "+rowHeight+">13. Address for Correspondence</div>";
	str += "<div style='float:left;width:10'; "+rowHeight+">:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["correspondence"]+"</div></br></br>";
	
	
	str += "</fieldset></div>";
	
	str += "<div style='width:700; height:800'>";
	str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';

	
	str += "<div style='both:clear;width:800; height:100'>";
	
	str += '<p style="float:left;"><u><b>University Education</b></u></p></br></br>';
	str +="<div style='clear:both'>";;
	
	

	str += "<div style='float:left;width:200; "+rowHeight+"'>University Name</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["bachelorDegreeobtainUniversity"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>Degree Title</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["bachelorDegreeTitle"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>Class</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["bachelorDegree"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>Year of Graduation</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["bachelorDegreegraduationYear"]+"</div>";
	str += "<div style='float:left;width:200; "+rowHeight+"'>Month</div>";
	str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
	str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["bachelorDegreegraduationMonth"]+"</div>";


	if(dataRep["higherDegreeobtainUniversity"] !=""){
		str += "<div style='float:left;width:200; "+rowHeight+"'>University Name</div>";
		str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["higherDegreeobtainUniversity"]+"</div>";
	}
	if(dataRep["higherDegreeTitle"] !=""){
		str += "<div style='float:left;width:200; "+rowHeight+"'>Degree Title</div>";
		str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["higherDegreeTitle"]+"</div>";
	}
	if(dataRep["higherDegree"] !=""){
		str += "<div style='float:left;width:200; "+rowHeight+"'>Class</div>";
		str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["higherDegree"]+"</div>";
	}
	if(dataRep["higherDegreegraduationYear"] !=""){
		str += "<div style='float:left;width:200; "+rowHeight+"'>Year of Graduation</div>";
		str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["higherDegreegraduationYear"]+"</div>";
	}
	if(dataRep["higherDegreegraduationMonth"] !=""){
		str += "<div style='float:left;width:200; "+rowHeight+"'>Month</div>";
		str += "<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str += "<div style='both:clear; "+rowHeight+"'>"+dataRep["higherDegreegraduationMonth"]+"</div>";
	}
			
	str += '</br><p style="float:left;"><u><b>Professional & Other Qualifications</b></u></p></br></br>';
	str +="<div style='clear:both'>";;
	
			
	if(dataRep["qualificationOne"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Qualification</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qualificationOne"]+"</div>";
	}
	if(dataRep["qualificationAwardingAuthorityOne"] !=""){
		str +="<div style='float:left;width:200; "+rowHeight+"'>Awarding Authority</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qualificationAwardingAuthorityOne"]+"</div>";
	}
	if(dataRep["qualificationAwardingYearOne"] !=""){
		str +="<div style='float:left;width:200; "+rowHeight+"'>Year</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qualificationAwardingYearOne"]+"</div>";
	}
	if(dataRep["qualificationTwo"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>Qualification</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qualificationTwo"]+"</div>";
	}
	if(dataRep["qulificationAwardingAuthorityTwo"] !=""){
		str +="<div style='float:left;width:200; "+rowHeight+"'>Awarding Authority</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qulificationAwardingAuthorityTwo"]+"</div>";
	}
	if(dataRep["qulificationAwardingYearTwo"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>Year</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["qulificationAwardingYearTwo"]+"</div></br></br>";
	}	
			
			
	str += '</br><p style="float:left;"><u><b>Employments Records</b></u></p></br></br>';
	str +="<div style='clear:both'>";;
		

	if(dataRep["designationOne"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Designation</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["designationOne"]+"</div>";
	}	
	if(dataRep["companyOne"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Work place/Employer</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["companyOne"]+"</div>";
	}
	if(dataRep["fromOne"] !=""){				
		str +="<div style='float:left;width:200; "+rowHeight+"'>From</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["fromOne"]+"</div>";
	}
	if(dataRep["toOne"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>To</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["toOne"]+"</div></br>";
	}
	if(dataRep["designationTwo"] !=""){					
		str +="<div style='float:left;width:200; "+rowHeight+"'>Designation</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["designationTwo"]+"</div>";
	}
	if(dataRep["companyTwo"] !=""){				
		str +="<div style='float:left;width:200; "+rowHeight+"'>Work place/Employer</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["companyTwo"]+"</div>";
	}
	if(dataRep["fromTwo"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>From</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["fromTwo"]+"</div>";
	}
	if(dataRep["toTwo"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>To</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["toTwo"]+"</div></br>";
	}
	if(dataRep["designationThree"] !=""){				
		str +="<div style='float:left;width:200; "+rowHeight+"'>Designation</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["designationThree"]+"</div>";
	}
	if(dataRep["companyThree"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Work place/Employer</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["companyThree"]+"</div>";
	}
	if(dataRep["fromThree"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>From</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["fromThree"]+"</div>";
	}
	if(dataRep["toThree"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>To</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["toThree"]+"</div></br></br>";
	}
		
	str += '</br><p style="float:left;"><u><b>Refrees</b></u></p></br></br>';
	str +="<div style='clear:both'>";;
	
	if(dataRep["refreeNameOne"] !=""){				
		str +="<div style='float:left;width:200; "+rowHeight+"'>Name</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeNameOne"]+"</div>";
	}
	if(dataRep["refreeDesignationOne"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>Designation</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeDesignationOne"]+"</div>";
	}	
	if(dataRep["refreeAddressOne"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Address</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeAddressOne"]+"</div>";
	}	
	if(dataRep["refreeNameTwo"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>Name</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeNameTwo"]+"</div>";
	}
	if(dataRep["refreeDesignationTwo"] !=""){			
		str +="<div style='float:left;width:200; "+rowHeight+"'>Designation</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeDesignationTwo"]+"</div>";
	}
	if(dataRep["refreeAddressTwo"] !=""){		
		str +="<div style='float:left;width:200; "+rowHeight+"'>Address</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["refreeAddressTwo"]+"</div></br></br>";
	}

	if(dataRep["programmeTypeCode"] == "PRO0000003" || dataRep["programmeTypeCode"] =="PRO0000004"){
		str += '</br><p style="float:left;"><u><b>Research Details</b></u></p></br></br>';
		str +="<div style='clear:both'>";;
				
		str +="<div style='float:left;width:; "+rowHeight+"'>Degree for which registration is sougth</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["registrationSougth"]+"</div>";
		

		str +="<div style='float:left;width:200; "+rowHeight+"'>Main Subject</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["mainSubject"]+"</div>";
		

		str +="<div style='float:left;width:200; "+rowHeight+"'>Field of Specialization</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["fieldOfSpecialization"]+"</div>";
		

		str +="<div style='float:left;width:200; "+rowHeight+"'>Medium</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["researchMedium"]+"</div>";
		

		str +="<div style='float:left;width:; "+rowHeight+"'>Title of the proposed Research</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["researchTitle"]+"</div>";
		

		str +="<div style='float:left;width:; "+rowHeight+"'>Is a grant available for the project</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["grantForProject"]+"</div>";
		

		str +="<div style='float:left;width:200; "+rowHeight+"'>If so,give details</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["grantDetails"]+"</div>";
		

		str +="<div style='float:left;width:; "+rowHeight+"'>If not,how will the project be Financed</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["financedDetails"]+"</div>";
			
			//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<<div style='float:left;width:; "+rowHeight+"'>If you are registered at present for degree/diploma at this university or any other university,give details</div>";
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["registeredOtherDegree"]+"</div></br></br>";
		
		
		str += '</br><p style="float:left;"><u><b>Consent of the Supervisor/s</b></u></p></br></br>';
		str +="<div style='clear:both'>";;
	
			
		str +="<fieldset  class='field' style='border: 2px solid black'><legend class='fieldHead'>Applicant's</legend><div style='clear:both'>";

		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div style='float:left;width:100; "+rowHeight+"'>Name</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["applicantName"]+"</div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div style='float:left;width:100; "+rowHeight+"'>Institution</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["applicantInstitution"]+"</div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div style='float:left;width:100; "+rowHeight+"'>Address</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["applicantAddress"]+"</div>";

		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div style='float:left;width:100; "+rowHeight+"'>Title of the Research</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["applicantResearchTitle"]+"</div>";
		str += "</fieldset></div>";
		
		str +="<div ></div></div><div style='clear:both'>";
		
		//str +="<fieldset  class='field'><div style='clear:both'>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="</br></br><div style='float:left;width:100; "+rowHeight+"'>Name</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<div style='float:left;width:100; "+rowHeight+"'>Position</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<div style='float:left;width:100; "+rowHeight+"'>Institution</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div></br>";
		//str += "</fieldset></div>";

		
		str +="<div ></div></div><div style='clear:both'>";

		
		//str +="<fieldset  class='field'><div style='clear:both'>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<div style='float:left;width:100; "+rowHeight+"'>Name</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<div style='float:left;width:100; "+rowHeight+"'>Position</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div>";
		
		//str +="<div style='margin-top:20px;float:left;clear:both;'>";
		str +="<div style='float:left;width:100; "+rowHeight+"'>Institution</div>"
		str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
		str +="<div style='both:clear; "+rowHeight+"'></div>";
		//str += "</fieldset></div>";
		
		
		
		str +="<div ></div> </div><div style='clear:both'>";
		str +="<fieldset  class='field'><div style='clear:both'>";
			
			//str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='paragraphDiv'>I/We agree to function as Supervisor/s for </div><div class='colon' style='margin-left:160px;'>&nbsp;:&nbsp;</div> <div style='float:left' >";
			str +="<div class='viewArea'  id='applicantNameForSupervisor' style='clear:none;'></div></div><div style='clear:both'>";
			
			//str +="<input type='text' name='applicantNameForSupervisor'  value= '"+dataRep['applicantNameForSupervisor']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div></div><div style='clear:both'>";

			str +="<div class='paragraphDiv'>I am/We are satisfied that grant /financial support states in No.11 is sufficient to cover the cost of the project</div><div style='clear:both'>";
			
			str +="</br></br><div style='float:left;width:100; "+rowHeight+"'>Name</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorSignatureNameOne"]+"</div>";
			//str +="<input type='text' name='supervisorSignatureNameOne'  value=  '"+dataRep['supervisorSignatureNameOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div style='float:left;width:100; "+rowHeight+"' >Date</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorDateOne"]+"</div>";
			//str +="<input type='text' name='supervisorDateOne'  value=  '"+dataRep['supervisorDateOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div><div style='float:left' >";
			
			
			str +="<div style='float:left;width:100; "+rowHeight+"'>Signature</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorSignatureOne"]+"</div>";
			//str +="<input type='text' name='supervisorSignatureOne'  value= '"+dataRep['supervisorSignatureOne']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'></div><div style='float:left' >";
			
			str +="<div style='float:left;width:100; "+rowHeight+"'>Name</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorSignatureNameTwo"]+"</div>";
			//str +="<input type='text' name='supervisorSignatureNameTwo'  value=  '"+dataRep['supervisorSignatureNameTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' '></div></div><div style='clear:both'>";

			str +="<div style='float:left;width:100; "+rowHeight+"'>Signature</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorSignatureTwo"]+"</div>";
			//str +="<input type='text' name='supervisorSignatureTwo'  value= '"+dataRep['supervisorSignatureTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			

			str +="<div style='float:left;width:100; "+rowHeight+"'>Date</div>";
			str +="<div style='float:left;width:10; "+rowHeight+"'>:</div>";
			str +="<div style='both:clear; "+rowHeight+"'>"+dataRep["supervisorDateTwo"]+"</div>";
			//str +="<input type='text' name='supervisorDateTwo'  value=  '"+dataRep['supervisorDateTwo']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' ></div></div><div style='clear:both'>";
			
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
			
			str += "<div class='paragraphDiv'>I do hereby certify that the above particulars furnished by me are true and correct.</div></br>";
			
			
			str +="<div style='float:left;clear:both;margin:25px;'>";
		    str +="<div style='float:left;margin-right:500px'><p>--------------------------</p><p>Date</p></div>";
		    str +="<div style='float:left;'><p>--------------------------</p><p>Signature of the Applicant</p></div>";
		    str +="</div>";
			
			

			str += '</form>';
			str += '</td></tr></table>';
			
			str += "<div style='both:clear;width:800; height:500'>";
			str += "</div>";
	
	

	str += "</fieldset></div>";
			
			str += "</div>";
	
	
	//}
	
	
	//	return str;
	
	
	var reportWindow = window.open();
	reportWindow.document.write(str);
	reportWindow.print();
	reportWindow.document.close();
	
	
	
}



