
dataRep["ApplicationNo"]=dataRep['senateYYYY'] = dataRep['senateMM'] = dataRep['senateDD'] = dataRep["senateNo"] ="";

dataRep['BOSYYYY'] = dataRep['BOSMM'] = dataRep['BOSDD'] = dataRep["boardOfStudyNo"] = "";

dataRep['FBYYYY'] = dataRep['FBMM'] = dataRep['FBDD'] = dataRep["facultyBoardNo"] =dataRep['userName']="";
dataRep['programmeCode']="";
var BulkNote;
var TempBulkNote;
var user;
var BulkNoteArr= new Array();
var newStr1;
var countviewList=0;	
var divid=1;
var checkdeleteorsave="";
var breakingpoint=50;
var pagenew=" ";
var nextpage=0;
function callNextFunctionApplicantProfile(index){ 

	i=0;
	do{
		if (index == i ){
				dataRep["studentNIC"] = studentNICArr[i];
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
				dataRep["studentName"]=studentNameArr[i];
				dataRep["studentPersonalTitle"]=studentPersonalTitleArr[i];
				dataRep["studentInitial"]=studentInitialArr[i];
				dataRep["studentDateofbirth"]=studentDateofbirthArr[i];
				dataRep["studentNationality"]=studentNationalityArr[i];
				dataRep["studentCitizenship"]=studentCitizenshipArr[i];
				dataRep["studentEmployment"]=studentEmploymentArr[i];
				dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
				dataRep["studentOfficeAddress"]=studentOfficeAddressArr[i];
				dataRep["correspondence"]=correspondenceArr[i];
				dataRep["studentContactLan"]=studentContactLanArr[i];
				dataRep["studentContactMobile"]=studentContactMobileArr[i];
				dataRep["studentContactEmail"]=studentContactEmailArr[i];
				
				dataRep["bachelorDegree"]=bachelorDegreeArr[i];
				dataRep["bachelorDegreeTitle"]=bachelorDegreeTitleArr[i];
				dataRep["bachelorDegreeobtainUniversity"]=bachelorDegreeobtainUniversityArr[i];
				dataRep["bachelorDegreegraduationYear"]=bachelorDegreegraduationYearArr[i];
				dataRep["bachelorDegreegraduationMonth"]=bachelorDegreegraduationMonthArr[i];
				dataRep["higherDegree"]=higherDegreeArr[i];
				dataRep["higherDegreeTitle"]=higherDegreeTitleArr[i];
				dataRep["higherDegreeobtainUniversity"]=higherDegreeobtainUniversityArr[i];
				dataRep["higherDegreegraduationYear"]=higherDegreegraduationYearArr[i];
				dataRep["higherDegreegraduationMonth"]=higherDegreegraduationMonthArr[i];
				dataRep["qualificationOne"]=qualificationOneArr[i];
				dataRep["qualificationAwardingAuthorityOne"]=qualificationAwardingAuthorityOneArr[i];
				dataRep["qualificationAwardingYearOne"]=qualificationAwardingYearOneArr[i];
				dataRep["qualificationTwo"]=qualificationTwoArr[i];
				dataRep["qulificationAwardingAuthorityTwo"]=qulificationAwardingAuthorityTwoArr[i];
				dataRep["qulificationAwardingYearTwo"]=qulificationAwardingYearTwoArr[i];
				
				dataRep["companyOne"]=companyOneArr[i];
				dataRep["designationOne"]=designationOneArr[i];
				dataRep["fromOne"]=fromOneArr[i];
				dataRep["toOne"]=toOneArr[i];
				dataRep["companyTwo"]=companyTwoArr[i];
				dataRep["designationTwo"]=designationTwoArr[i];
				dataRep["fromTwo"]=fromTwoArr[i];
				dataRep["toTwo"]=toTwoArr[i];
				dataRep["companyThree"]=companyThreeArr[i];
				dataRep["designationThree"]=designationThreeArr[i];
				dataRep["fromThree"]=fromThreeArr[i];
				dataRep["toThree"]=toThreeArr[i];
				dataRep["refreeNameOne"]=refreeNameOneArr[i];
				dataRep["refreeAddressOne"]=refreeAddressOneArr[i];
				dataRep["refreeDesignationOne"]=refreeDesignationOneArr[i];
				dataRep["refreeNameTwo"]=refreeNameTwoArr[i];
				dataRep["refreeAddressTwo"]=refreeAddressTwoArr[i];
				dataRep["refreeDesignationTwo"]=refreeDesignationTwoArr[i];
				
				dataRep["registrationSougth"]=registrationSougthArr[i];
				dataRep["mainSubject"]=mainSubjectArr[i];
				dataRep["fieldOfSpecialization"]=fieldOfSpecializationArr[i];
				dataRep["researchMedium"]=researchMediumArr[i];
				dataRep["researchTitle"]=researchTitleArr[i];
				dataRep["grantForProject"]=grantForProjectArr[i];
				dataRep["grantDetails"]=grantDetailsArr[i];
				dataRep["financedDetails"]=financedDetailsArr[i];
				dataRep["registeredOtherDegree"]=registeredOtherDegreeArr[i];
				
				dataRep["applicantName"] =applicantNameArr[i];
				dataRep["applicantInstitution"] =applicantInstitutionArr[i];
				dataRep["applicantAddress"] =applicantAddressArr[i];
				dataRep["applicantResearchTitle"] =applicantResearchTitleArr[i];			
		
				dataRep["facultyTitle"]=facultyTitleArr[i];
				dataRep["facultyCode"]=facultyCodeArr[i];
				dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
				dataRep["degreeTitle"]=degreeTitleArr[i];
				dataRep["degreeCode"]=degreeCodeArr[i];
				dataRep["universityTitle"]=universityTitleArr[i];
				dataRep["universityCode"]=universityCodeArr[i];		
		
		
					sendForm('data4ApplicantProfile');
	
			
		}
		//sendForm('data4ApplicantProfile');
	} while(index != i++);
}



function setuserName()
{
  user = document.loginForm.username.value;
}

var currentdate="";
var datetime="";
var TempUser="";
var programName1="";
//------------------------------------------------------MAIN FUNCTION START---------------------------
function formApplicantResearchList(dsp) {


var selectedChecked = "";
var registeredChecked = "";
var selectedDepChecked = "";


		str = "";
		title = "PhD/MPhil Applicants List";
		
		if(dsp == "formApplicantResearchList") {
			//if(dsp == "updateApplicantList" || dsp =="deleteApplicationForm") {
//degreeTitleArr.sort();
			str  = "<div id='updateApplicantList'>";
				str += "<br><div>";	
			    str += "<input type='text'  name='searchApplicantName'  id='searchApplicantName' value= '' placeholder='Eg:PERERA' style='margin-left:900px;width:150px;' onchange='dataRep[this.name]=this.value;' >";		
				str += "<input type='text'  name='searchApplicant'  id='searchApplicant' value= '' placeholder='111111111V' style='width:100px;' onchange='dataRep[this.name]=this.value;' >";		
				str += '<input type="button"  class="btnB" id="search"  value="search" style="background-Color:#ff6633;" onclick=enableButtons();serachApplicants();>';
				str += "</div><br>";
			str += "<div>"

			str += '<h2 id="mainRequestTitle">'+title+'</h2><hr>';

			str += '<form name="maintainformApplicantList">';
			var role;
			var role1;
			var role2;
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					TempUser=use;
					dataRep['roleName']=roleNameArr[i];
					dataRep['departmentCode']=departmentCodeArr[i];
					dataRep['userName']=userNameArr[i];
					dataRep['programmeCode']=programmeCodeArr[i];
					//alert(dataRep['programmeCode']);
				}
		    
		   }
				if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
				{
				//alert("ok");
					var dcode= dataRep['departmentCode']
					role = "cordinator";
					
					 
					var pcode=dataRep['programmeCode']
					role = "cordinator";
				
				}
				else if(dataRep['roleName']=='Head of the Department' )
				{
					var dcode1= dataRep['departmentCode']
					role1 = "head";
					 
					var pcode1=dataRep['programmeCode']
					role1 = "head";
				}
				else{
				
					role2="other";
				}
			

			if (role== "cordinator")
			{
			//alert("yes");
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<applicationNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							   // for(j= 0; j<degreeCodeLength; j++) {
                                	//if(degreeCodappeArr[j] != null){	
							        // if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
									//if (degreeCodeArr[i]==degreeCodappeArr[j] & departmentCodeappArr[j]== dcode){
									  //alert(degreeCodeArr[i]);
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== dataRep['departmentCode']
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									//}
								   // }
									//}
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			else if (role1== "head")
			{
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<applicationNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							   // for(j= 0; j<degreeCodeLength; j++) {
                                	//if(degreeCodappeArr[j] != null){	
							        // if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
									//if (degreeCodeArr[i]==degreeCodappeArr[j] & departmentCodeappArr[j]== dcode){
									  //alert(degreeCodeArr[i]);
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== dataRep['departmentCode']
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									//}
								   // }
									//}
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			if (role2=="other")
			{
			if(dataRep['userName']=="ssdean" || dataRep['userName']=="ssar"){
				//alert(dataRep['userName']);
				programName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<applicationNoLength; i++) {
							if(facultyCodeArr[i]=="FAC03" & degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
			}
			else{
							programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<applicationNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
				}
			}			
				str +="<div>";

			
			    if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' || dataRep['roleName']=='Head of the Department')
		        {
				str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += programName1;
				str += "</select>";	
				
		        }
				else{
				
				str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";						
				}
				str +="<div class='colon'>";
			
				dataRep['achedamicYear']="";
				str +="<div class='identifiers' style='width:100px;'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
			
				str += "</select>";
				
				 
				//str += "<br></br>";
				
		//str +="<div class='colon'>";		
		str += '<input type="button" style="margin-top:1px;float:left" class="btnB" id="View-List" value="View List" onclick="setResearchBreakingpoint();filterListResearchApplicant();enableButtons();">';//
		str += '<input type="button" id="Researchselect-all" style="display:none;margin-top:1px;float:left" class="btnB" value="Mark All" onclick=ResearchSelectAllList();>';
		str += '<input type="button" id="Researchselect-non" style="display:none;margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=ResearchUnselectAllList();>';
        str +="</div >";


		str +="<div style='float:left'>____________________________________________________________________________________________________________________________________________</div>";

		str +="<div style='clear:both'>&nbsp;</div>"
					

		if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
		{
			str += '<input type="button" class="btnB" disabled="disabled"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			str += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formCoordinatorMenu'"+');>';//width:157px;height:37px; Get Application List
            str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if (dataRep["roleName"]=='Head of the Department')
		{
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			str += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formHeadMenu'"+');>';//width:157px;height:37px; Get Application List
            str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar')
		{

		str += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 
		
		str += '<input type="button" class="btnB"  id="ResearchDownload1" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
		str += '<input type="button" class="btnB"  id="ResearchDownload2" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
	
		
		str += "<input type='button' class='btnB' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application' disabled='disabled' onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>"; 
		str += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' disabled='disabled' onclick=generateBulkNote();>";            
		str += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset" disabled="disabled" onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+')">';
        str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formClerkMenu'"+');>';
        str += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

		}
		if (dataRep['roleName']=='Assistant Registrar')
		{

		str += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 
		
		str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
		str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
		//str += "<input type='button' class='btnB' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application' disabled='disabled' onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>"; 
		//str += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' disabled='disabled' onclick=generateBulkNote();>";            
		str += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset" disabled="disabled" onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+')">';
        str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'main'"+');>';
        str += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

		}

		if(dataRep['roleName']=='Administrator')
		{
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			str += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formAdministratorMenu'"+');>';//width:157px;height:37px; Get Application List
            str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if(dataRep['roleName']=='Dean')
		{
			
			str += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 
			
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			str += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			str += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formDeanMenu'"+');>';//width:157px;height:37px; Get Application List
            str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		str +="<div  id='list' style='margin:clear:both'>";  
		str +="</div>";
		str +="<div  id='Buttonlist' style='margin:clear:both'>";  
		str +="</div>";
	

		str +="</div>";

		str += '</form>';
		str += '</div>';
		str += "</div>";
		
		}

		return str;
	}
function refresshStudentLists(){

applicationNoLength =0;	
countviewList=0;	
divid=0;
pagenew=" ";
nextpage=0;
document.getElementById("list").innerHTML = "";
	
}
//------------------------------------------------------MAIN FUNCTION END---------------------------	

//------------------------------------------------------SELECT ALL FUNCTION START---------------------------	
function ResearchSelectAllList() 
	{
		for( i=0; i<applicationNoLength; i++)
		{
			//alert('ok');
		var checkBoxDivIdRegistered = 'checkSelected'+i;
				if(document.getElementById('checkSelected'+i))
				{
				document.getElementById('checkSelected'+i).checked = true;
				document.getElementById("Researchselect-all").disabled= true;
				document.getElementById("Researchselect-non").disabled= false;
		for( var x=0; x<applicationNoLength; x++){
		
		if (applicationNoArr.indexOf(applicationNoArr[x]) == applicationNoArr.lastIndexOf(applicationNoArr[x]) || (applicationNoArr.indexOf(applicationNoArr[x]) != applicationNoArr.lastIndexOf(applicationNoArr[x]) && applicationNoArr.indexOf(applicationNoArr[x])==x)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x] ){
					var nam="Alist";
						nam+=x;
					if (count==1)
				{
					count=0;
				document.getElementById(nam).style.backgroundColor =  '#d0d0fb' ;
				
				}
				else
				{
					count++;
				document.getElementById(nam).style.backgroundColor = '#e7e7fd';
				
				}
						//alert(nam);
			
			}
		}
		}
				}
		}
	}
//------------------------------------------------------SELECT ALL FUNCTION END---------------------------	
	
//------------------------------------------------------UNSELECT FUNCTION STRAT---------------------------
function ResearchUnselectAllList() 
	{
		for( i=0; i<applicationNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'checkSelected'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("Researchselect-all").disabled= false;
				document.getElementById("Researchselect-non").disabled= true;
				for( var x=0; x<applicationNoLength; x++){
		
		if (applicationNoArr.indexOf(applicationNoArr[x]) == applicationNoArr.lastIndexOf(applicationNoArr[x]) || (applicationNoArr.indexOf(applicationNoArr[x]) != applicationNoArr.lastIndexOf(applicationNoArr[x]) && applicationNoArr.indexOf(applicationNoArr[x])==x)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x] ){
			var nam="Alist";
				nam+=x;
			if (count==1)
		{
			count=0;
		document.getElementById(nam).style.backgroundColor =  '#FDFDFD' ;
		
		}
		else
		{
			count++;
		document.getElementById(nam).style.backgroundColor = '#FDFDFD';
		
		}
				//alert(nam);
			
			}
		}
			}
				}
		}
		
	}
//------------------------------------------------------UNSELECT FUNCTION END---------------------------
	
//------------------------------------------------------ADD ROW COLOUR FUNCTION START---------------------------
	function AddResearchRowColor(x, _this) {

		if (count==1)
		{
			count=0;
		 x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

		}
		else
		{
			count++;
         	x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		}
		
}
//------------------------------------------------------ADD ROW COLOUR FUNCTION END---------------------------

//------------------------------------------------------UPDATE SELECTED FUNCTION START---------------------------	
	function formApplicantListsendForm(frm){

	var doc, dataStr;

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
    if (confirm("Confirm Save!") == true) {
        		if(frm == 'updateApplicantList'){
 
			doc = document.maintainformApplicantList;
			dataStr += "&interface="+frm;
			var newStr ="";
			
			for(var i=0; i<applicationNoLength; i++){
				 if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			    if(document.getElementById('checkDepSendSelected'+i)){ //checkDepSendSelected
				if(document.getElementById('checkDepSendSelected'+i).checked == true){
				
					newStr ="&universityCode="+universityCodeArr[i]+"&facultyCode="+facultyCodeArr[i]+"&programmeTypeCode="+programmeTypeCodeArr[i]+"&degreeCode="+degreeCodeArr[i]+"&studentNIC="+studentNICArr[i]+"&applicationNo="+applicationNoArr[i];
							
					newStr += "&sendToDep="+"YES";
					//newStr += "&notes="+TempBulkNote;
					ApplicantData[i]= dataStr + newStr;

				
			    }
			    }

				}
				
			}
//-----------------------------------------------------add Bulk Note--------------------------------
         	var checkNotes=0;
			for(var i=0; i<applicationNoLength; i++){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if(document.getElementById('checkSelected'+i)){
			if(document.getElementById('checkSelected'+i).checked == true){	  
			if(document.getElementById('notes'+i).value !=" "){
			  checkNotes++;
			 }
			}
			}
			}
			}

		   if(BulkNote!=" " || checkNotes !=0){
			newStr1 = "action=add";
			newStr1 += "&interface="+"addBulkNotes";			
				for(var i=0; i<applicationNoLength; i++){
				if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			    if(document.getElementById('checkSelected'+i)){
				if(document.getElementById('checkSelected'+i).checked == true){	
                    currentdate = new Date(); 
                    datetime =  + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + "/"  
                    + currentdate.getHours() + "/"  
                    + currentdate.getMinutes() + "/" 
                    + currentdate.getSeconds();
					
					if(document.getElementById('notes'+i).value !=" "&& TempBulkNote!=undefined){
					newStr1 +="&messageId="+datetime;		
					newStr1 += "&referenceNo="+applicationNoArr[i];
					newStr1 += "&userId="+TempUser;
					newStr1 += "&message="+TempBulkNote+"/"+document.getElementById('notes'+i).value;						
					}
					else if(document.getElementById('notes'+i).value !=" "&& TempBulkNote ==undefined){
					newStr1 +="&messageId="+datetime;		
					newStr1 += "&referenceNo="+applicationNoArr[i];
					newStr1 += "&userId="+TempUser;
					newStr1 += "&message="+document.getElementById('notes'+i).value;	
					}
					else if(TempBulkNote!=undefined){
					newStr1 +="&messageId="+datetime;
							
					newStr1 += "&referenceNo="+applicationNoArr[i];
					newStr1 += "&userId="+TempUser;
					newStr1 += "&message="+TempBulkNote;	
					}

					
					
				     BulkNoteArr[i]= newStr1;
				}    					 
			    }

				}
				
			}
			}
			for(var j=0; j<applicationNoLength; j++){						
						if(ApplicantData[j] != "" || ApplicantData[j] != undefined  ){
								isrHandle.getDataFromDB(eval("clientController"), "serverController.php",ApplicantData[j]);	
						}
			}
				

				
		} 
    } else {
        //x = "You pressed Cancel!";
    }

		
		return 0;
		
}
//------------------------------------------------------UPDATE SELECTED FUNCTION END---------------------------

//------------------------------------------------------SEND BULK NOTE FUNCTION START---------------------------	
function formBulkNotesendForm(frm){
//alert(BulkNoteArr.length)
				for(var i=0; i<applicationNoLength; i++){
                //alert( BulkNoteArr[i]);
				if (BulkNoteArr[i]!=undefined)
				{
					
				  isrHandle.getDataFromDB(eval("clientController"), "serverController.php",BulkNoteArr[i]);

				  
				}
			}
	return 0;
		
}
//--------------------------------------------------------SEND BULK NOTE FUNCTION END------------------------

//------------------------------------------------------------------DELETE APPLICATION FUNCTION START-------------------
function formDeleteApplicationsendForm(frm){

		var doc, dataStr;

			if(frm.substring(0,3)=="add"){
				dataStr = "action=add";
			} else if(frm.substring(0,6)=="update"){
					dataStr = "action=update";
			} else if(frm.substring(0,6)=="delete"){
					dataStr = "action=delete";
			} else if(frm.substring(0,6)=="search"){
					dataStr = "action=get";
			}
    if (confirm("Confirm Delete!") == true) {
        		if (frm == 'deleteApplicationForm'){	
	
			doc = document.maintainformApplicantList;
			dataStr += "&interface="+frm;
			var newStr ="";
			
			for(var i=0; i<applicationNoLength; i++){
				 if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			     if(document.getElementById('checkSelected'+i)){
			   if(document.getElementById('checkSelected'+i).checked == true){
				
		//newStr ="&universityCode="+universityCodeArr[i]+"&facultyCode="+facultyCodeArr[i]+"&programmeTypeCode="+programmeTypeCodeArr[i]+"&degreeCode="+degreeCodeArr[i]+"&studentNIC="+studentNICArr[i]+"&applicationNo="+applicationNoArr[i];
					
			dataRep["ApplicationNo"]=applicationNoArr[i];	
			newStr ="&applicationNo="+applicationNoArr[i];	
			ApplicantData[i]= dataStr + newStr;
				}
			}
		}

			
//alert(dataStr);
		} 

		for(var j=0; j<applicationNoLength; j++){						
			//if(ApplicantData[j] != "" && updateDataStrArray[j] != "" ){
			
			if(ApplicantData[j] != ""){
							
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", ApplicantData[j]);
			}
		}	
		
	}
    } else {
        //x = "You pressed Cancel!";
    }

		return 0;
		
} 
//----------------------------------------------------------DELETE APPLICATION FUNCTION END--------------------------

//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION START--------------------------
function checkdeleteorsaveapplication(){ 
	checkdeleteorsave='deletefunction';
}
//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION END--------------------------
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION START------------	
function CompleteReseApplicationEng(){

var count=1;
	var Rcount=1;
	var checkBoxCount=0;
	for( i=0; i<applicationNoLength; i++){
		if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] & (medium1Arr[i] == "en" )){// & (medium1Arr[i] == "en" )){	
              if(document.getElementById('checkSelected'+i)){
			   if(document.getElementById('checkSelected'+i).checked == true){
				   checkBoxCount++;
			   }
			  }
			}
		}
	}
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}

    else{

				  var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    if(checkdeleteorsave=='deletefunction'){
					newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;'>user:"+dataRep['userName']+"</div>";
						
					}
					newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>No</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>Name With Initial</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
					newStr +="<th style='border: 1px solid black;'>Stream Name</th>";
					newStr +="<th style='border: 1px solid black;'>Main Subject</th>";
					}
					newStr +="</tr>";  
            
			for( i=0; i<applicationNoLength; i++){
		
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] & (medium1Arr[i] == "en" )){// & (medium1Arr[i] == "en" )){	

			 if(document.getElementById('checkSelected'+i)){
			 if(document.getElementById('checkSelected'+i).checked == true){
		
			
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
					
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</td>';
			
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			//if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
				
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+streamNameArr[i]+'</td>';

			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+Main_SubjectArr[i]+'</td>';

			//}
			
			
			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			count++;
			
						}

			}
		 }
		
				 
				 
			}	 
	}
	
	newStr +="</table>";
	

	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {type: "text/doc;charset=utf8;"});
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	   
	  if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	link.setAttribute("href", window.URL.createObjectURL(blob));
	   link.setAttribute("download", fileName);
	  
		}
		else{
			  link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
		}
	  
	
	  
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	
	if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	document.body.appendChild(link);
	window.location.replace(link);
		}
	
		
		}	

	

}
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION END------------

//-------------------------------------------------------------------------------SEARCH FUNCTION STRART---------------	
function serachApplicants()
{
	
 divid=1;
var pagenew="yes";
var nextpage=0;

	var countSearch=0;
    if(countviewList!=0){
    var c=0;
	var appNIC=document.getElementById('searchApplicant').value;
	var tempName=document.getElementById('searchApplicantName').value;
	for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if(document.getElementById('studentNIC'+i)){	
                 c++;
                 if (c%2==0)
                 {
                   document.getElementById('Alist'+i).style.backgroundColor='#ffece6';  
      			   document.getElementById('Namebtn'+i).style.backgroundColor='#ffece6';                  
                 } 
                 else{
                   document.getElementById('Alist'+i).style.backgroundColor='#ffd9cc';
				   document.getElementById('Namebtn'+i).style.backgroundColor='#ffd9cc'; 
                }

			}
			}
				
		}
	}
    var check=0;
	for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if(document.getElementById('searchApplicantName').value!="" & document.getElementById('searchApplicant').value!=""){
			if (studentNICArr[i]==appNIC & studentInitialArr[i].indexOf(tempName) != -1){
                check++;
				countSearch++;
                document.getElementById('Alist'+i).style.backgroundColor='#ccffeb';
			    document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb'; 
			}
			}
			else{
			if((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check==0) || (studentNICArr[i]== appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check==0)  ){
                countSearch++;
				document.getElementById('Alist'+i).style.backgroundColor='#ccffeb';
				document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb';
			}
			}
			}
				
		}
	}
	if(countSearch ==0){
			alert('There is No Matching Data');
	}
	}
	else{
	if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
		alert('Please enter Relevent Details');
	}
    else{
	document.getElementById('list').innerHTML=document.getElementById('list').innerHTML.replace ="";
	if(document.getElementById('searchApplicantName').value!="" & document.getElementById('searchApplicant').value!=""){
         
		var viewStr ="<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
		viewStr +="<tr style='background-Color:#ff9f80'>";
		viewStr +="<th style='width:20px;padding-right:10px;'><div style='width:20px;'></div></th>";
		viewStr +="<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
		viewStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
		viewStr +="<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
		viewStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
		viewStr +="<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
		viewStr +="<th style='width:50px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:50px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
		viewStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Application Send to Department</font></div></th>";
		viewStr +="<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";
		viewStr +="</tr>";

		var count=0;
		var tempName=document.getElementById('searchApplicantName').value;
		var appNIC=document.getElementById('searchApplicant').value;
		for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
            //alert(studentInitialArr[i].indexOf(tempName));
			if(studentInitialArr[i].indexOf(tempName) != -1 && studentNICArr[i]== appNIC){
			countSearch++;
			count++;
			
				
			if (pagenew=="yes")
			{
			viewStr +="<div  id='displaying"+divid+"' style='margin:0px 10px;clear:both'>";
			pagenew="no";
			}
			
			if(count%2==0){
			
            viewStr +="<tr style='background-Color:#ffece6;>";}
			else{
			viewStr +="<tr style='background-Color:#ffd9cc;>";}
			viewStr +="<div class='info'  id='Alist"+i+"' name='testInfo"+i+"' style='background-Color:#ffece6;'>";
			 
			viewStr += "<td style='width:20px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:20px;' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div></td>";

			viewStr += "<td style='width:250px;word-wrap:break-word' align='center'><div class='investView_l' style='width:250px;' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
		    if(count%2==0){
				
			//newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</td>';	
				
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
			else{
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
            viewStr +="<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3"+i+"' value= '"+applicationNoArr[i]+"' >";	
			
			viewStr += "<td style='width:150px;word-wrap:break-word' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+i+"' id='applicationNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += applicationNoArr[i]+"</div></td>";
			
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			
            viewStr += "<td style='width:150px;word-wrap:break-word'><div class='investView' style='width:150px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
            viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='TelNo"+i+"' id='TelNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactLanArr[i]+"</div></td>";				
			
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='MobNo"+i+"' id='MobNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactMobileArr[i]+"</div></td>";				
 

			viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd"+i+"' id='EmailAdd"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactEmailArr[i]+"</div></td>";				

			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedChecked = "checked";
				} else {
					selectedChecked = "";
				}
			
			
			var checkBoxDivIdSelected = 'checkSelected'+i;
				if(document.getElementById(checkBoxDivIdSelected)){
					if(document.getElementById(checkBoxDivIdSelected).checked){
						selectedChecked='checked';
					}
				}
				
			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedDepChecked = "checked";
				} else {
					selectedDepChecked = "";
				}

			
			var checkBoxDivDEPIdSelected = 'checkDepSendSelected'+i;
				if(document.getElementById(checkBoxDivDEPIdSelected)){
					if(document.getElementById(checkBoxDivDEPIdSelected).checked){
						selectedDepChecked='checked';
					}
				}	
				
				

			 viewStr += "<td style='width:25px;word-wrap:break-word' align='center'><div class='investView' style='width:25px;' name='pin"+i+"' id='pin"+i+"'";
			 viewStr += " onchange='dataRep[this.name]=this.value;'>"+pinArr[i]+"</div></td>";				
			
			viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='selected"+i+"' id='selected"+i+"'>"; //Alist"+i+"
			viewStr += "<input type='checkbox' "+selectedChecked+"  id='checkSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkSelected"+i+"''/>";
			viewStr += "</div></td>";

			viewStr += "<input type='checkbox' "+selectedDepChecked+"  id='checkDepSendSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkDepSendSelected"+i+"''/>";
			viewStr += "</div></td>";


			viewStr += "<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
			viewStr +=" </textarea></div>";

            viewStr += "<div id='notesDiv"+i+"' style='width:130px;display:none' class='investView'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
			viewStr +=" </textarea></div></td>";

		    viewStr +="</div>";
	        viewStr +="</tr>";
			nextpage++;
			if (nextpage==50)
			{
				nextpage=0;
				pagenew="yes";
				divid++;
			}

			    }
				}
				
			}
		}
		if(countSearch ==0){
			alert('There is No Matching Data');
		}
	viewStr +="</table><br>";
	if (count >=1)
	{
		
		if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formCoordinatorMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		
		}
		if (dataRep['roleName']=='Head of the Department')
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formHeadMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		}
		if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar')
		{
			
			
		var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
		viewStr1 += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
		viewStr1 += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
	
		
		viewStr1 += "<input type='button' class='btnB' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application' disabled='disabled' onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>"; 
		viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' disabled='disabled' onclick=generateBulkNote();>";            
		viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset" disabled="disabled" onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
        viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formClerkMenu'"+');>';
        viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		
		}

		if (dataRep['roleName']=='Assistant Registrar')
		{
			var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
					
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			
		   // viewStr1 += "<input type='button' class='btnB' id='reApplication' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
			//viewStr1 += '<input type="button" class="btnB"  id="Download" value = "Download"  style="margin-top:0px;padding-right:20px;width:157px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplication1();>';
 			//viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' onclick=generateBulkNote();>";            
        
			viewStr1 += '<input type = "button" class ="btnB" id="Reset" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
            viewStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refresshStudentLists();showMenu('+"'main'"+');>';
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		
		}
		
		
		
		if(dataRep['roleName']=='Administrator')
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formAdministratorMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		}
		if(dataRep['roleName']=='Dean')
		{
					var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formDeanMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		for (make=1; make<=divid; make++)
		{
			viewStr1 += '<input type = "button" class ="btnB" value="'+divid+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		}
		}
		//document.getElementById('Buttonlist').innerHTML += viewStr1;
	}
	viewStr+=viewStr1;
	document.getElementById('list').innerHTML += viewStr; 
	document.getElementById("View-List").disabled= true;
	document.getElementById('Researchselect-all').style="display";
	document.getElementById('Researchselect-non').style="display";	
    	
	}
	if((document.getElementById('searchApplicantName').value!="" & document.getElementById('searchApplicant').value =="") || (document.getElementById('searchApplicantName').value=="" & document.getElementById('searchApplicant').value!="")){
         
		var viewStr ="<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
		viewStr +="<tr style='background-Color:#ff9f80'>";
		viewStr +="<th style='width:20px;padding-right:10px;'><div style='width:20px;'></div></th>";
		viewStr +="<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
		viewStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
		viewStr +="<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
		viewStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
		viewStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
		viewStr +="<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
		viewStr +="<th style='width:30px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:30px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
		viewStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Application Send to Department</font></div></th>";
		viewStr +="<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";
		viewStr +="</tr>";

		var count=0;
		var tempName=document.getElementById('searchApplicantName').value;
		var appNIC=document.getElementById('searchApplicant').value;
		for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0) || (studentNICArr[i]== appNIC & studentInitialArr[i].indexOf(tempName) == 0) ){
			countSearch++;
			count++;
			if(count%2==0){
			
            viewStr +="<tr style='background-Color:#ffece6;>";}
			else{
			viewStr +="<tr style='background-Color:#ffd9cc;>";}
			viewStr +="<div class='info'  id='Alist"+i+"' name='testInfo"+i+"' style='background-Color:#ffece6;'>";
			 
			viewStr += "<td style='width:20px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:20px;' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div></td>";

			viewStr += "<td style='width:250px;word-wrap:break-word' align='center'><div class='investView_l' style='width:250px;' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			if(count%2==0){
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
			else{
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
            viewStr +="<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3"+i+"' value= '"+applicationNoArr[i]+"' >";	
			
			viewStr += "<td style='width:150px;word-wrap:break-word' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+i+"' id='applicationNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += applicationNoArr[i]+"</div></td>";
			
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			
            viewStr += "<td style='width:150px;word-wrap:break-word'><div class='investView' style='width:150px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
            viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='TelNo"+i+"' id='TelNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactLanArr[i]+"</div></td>";				
			
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='MobNo"+i+"' id='MobNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactMobileArr[i]+"</div></td>";				
 

			viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd"+i+"' id='EmailAdd"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactEmailArr[i]+"</div></td>";				

			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedChecked = "checked";
				} else {
					selectedChecked = "";
				}
			
			
			var checkBoxDivIdSelected = 'checkSelected'+i;
				if(document.getElementById(checkBoxDivIdSelected)){
					if(document.getElementById(checkBoxDivIdSelected).checked){
						selectedChecked='checked';
					}
				}
				
			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedDepChecked = "checked";
				} else {
					selectedDepChecked = "";
				}
	
				
				
			var checkBoxDivDEPIdSelected = 'checkDepSendSelected'+i;
				if(document.getElementById(checkBoxDivDEPIdSelected)){
					if(document.getElementById(checkBoxDivDEPIdSelected).checked){
						selectedDepChecked='checked';
					}
				}		
				

			 viewStr += "<td style='width:25px;word-wrap:break-word' align='center'><div class='investView' style='width:25px;' name='pin"+i+"' id='pin"+i+"'";
			 viewStr += " onchange='dataRep[this.name]=this.value;'>"+pinArr[i]+"</div></td>";				
			
			viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='selected"+i+"' id='selected"+i+"'>"; //Alist"+i+"
			viewStr += "<input type='checkbox' "+selectedChecked+"  id='checkSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkSelected"+i+"''/>";
			viewStr += "</div></td>";
			
			viewStr += "<input type='checkbox' "+selectedDepChecked+"  id='checkDepSendSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkDepSendSelected"+i+"''/>";
			viewStr += "</div></td>";
			
			viewStr += "<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
			viewStr +=" </textarea></div>";

            viewStr += "<div id='notesDiv"+i+"' style='width:130px;display:none' class='investView'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
			viewStr +=" </textarea></div></td>";

		    viewStr +="</div>";
	        viewStr +="</tr>";

			    }
				}
				
			}
		}
		if(countSearch ==0){
			alert('There is No Matching Data');
		}
	viewStr +="</table><br>";
	if (count >=1)
	{
		
		if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formCoordinatorMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		
		if (dataRep['roleName']=='Head of the Department')
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formHeadMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar')
		{
			
					var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			
			viewStr1 += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
		viewStr1 += '<input type="button" class="btnB" disabled="disabled" id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
	
		
		viewStr1 += "<input type='button' class='btnB' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application' disabled='disabled' onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>"; 
		viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' disabled='disabled' onclick=generateBulkNote();>";            
		viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset" disabled="disabled" onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
        viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formClerkMenu'"+');>';
        viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

		}

		if (dataRep['roleName']=='Assistant Registrar')
		{
					var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			
		    //viewStr1 += "<input type='button' class='btnB' id='reApplication' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
			//viewStr1 += '<input type="button" class="btnB"  id="Download" value = "Download"  style="margin-top:0px;padding-right:20px;width:157px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplication1();>';
 			//viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' onclick=generateBulkNote();>";            
           
			viewStr1 += '<input type = "button" class ="btnB" id="Reset" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
            viewStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refresshStudentLists();showMenu('+"'main'"+');>';
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		}
		if(dataRep['roleName']=='Administrator')
		{
			var viewStr1 = '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formAdministratorMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if(dataRep['roleName']=='Dean')
		{
			var viewStr1 = "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formDeanMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		//document.getElementById('Buttonlist').innerHTML += viewStr1;
	}
	viewStr+=viewStr1;
	document.getElementById('list').innerHTML += viewStr; 
	document.getElementById("View-List").disabled= true;
	document.getElementById('Researchselect-all').style="display";
	document.getElementById('Researchselect-non').style="display";	
    	
		}
	}	
	}
}

//-------------------------------------------------------------------------SEARCH FUNCTION END------------------------------					

//-------------------------------------------------------------------------BUTTON DISABLE FUNCTION START--------------------
function enableButtons()
{
	document.getElementById("save").disabled=false;
	document.getElementById("Reset").disabled=false;
	document.getElementById("ResearchDownload1").disabled=false;
	document.getElementById("ResearchDownload2").disabled=false;
	document.getElementById("reApplication").disabled=false;
	document.getElementById("AddNote").disabled=false;

	
	document.getElementById("Resetsc").disabled=false;
	document.getElementById("ResearchDownload3").disabled=false;
	document.getElementById("ResearchDownload4").disabled=false;
	document.getElementById("reApplicationsc").disabled=false;
	document.getElementById("AddNotesc").disabled=false;
}
//-------------------------------------------------------------------------BUTTON DISABLE FUNCTION END--------------------


//-------------------------------------------------------------------------VIEW LIST FUNCTION START--------------------	
function filterListResearchApplicant(){


pagenew="yes";
nextpage=0;
divid=1;

var rowCount=0;
for( var i=0; i<applicationNoLength; i++){
	if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
		if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){	

		   rowCount++;
		}
	}
}
if(rowCount==0)
{
	alert('There is no data');
}
else{
	
	
	  countviewList++;
	  var viewStr="";
	    
		var count=0;
		for( var i=0; i<applicationNoLength; i++){
		
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){

			
					
			if (pagenew=="yes")
			{
				if (count==0)
				{
			viewStr +="<div  id='displaying"+divid+"' style='margin:0px 10px;clear:both'>";
			
			var viewStrt ="<table id='myTable"+divid+"' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
		viewStrt +="<tr style='background-Color:#ff9f80'>";
		viewStrt +="<th style='width:40px;padding-right:10px;'><div style='width:40px;'></div></th>";
		viewStrt +="<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
		viewStrt +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
		viewStrt +="<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
		viewStrt +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
		
		if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
			viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Stream Name</font></div></th>";
			viewStrt +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Main Subject</font></div></th>";
		
		}
		
		
		
		viewStrt +="<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
		viewStrt +="<th style='width:30px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:30px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
		viewStrt +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Application Send to Department</font></div></th>";
		viewStrt +="<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";

		viewStrt +="</tr>";

			
			viewStr+= viewStrt;
				}
				else
				{					
			viewStr +="</div><div  id='displaying"+divid+"' style='display:none;margin:0px 10px;clear:both'>";
			
			 viewStrt ="<table id='myTable"+divid+"' style='display:none;margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
		viewStrt +="<tr style='background-Color:#ff9f80'>";
		viewStrt +="<th style='width:40px;padding-right:10px;'><div style='width:40px;'></div></th>";
		viewStrt +="<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
		viewStrt +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
		viewStrt +="<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
		viewStrt +="<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
		viewStrt +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
		viewStrt +="<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
		viewStrt +="<th style='width:30px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:30px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
		viewStrt +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Application Send to Department</font></div></th>";
		viewStrt +="<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";

		viewStrt +="</tr>";
			
			viewStr+= viewStrt;
				}
			pagenew="no";
			}
			
			
			count++;
			if(count%2==0){
			
            viewStr +="<tr style='background-Color:#ffece6;>";}
			else{
			viewStr +="<tr style='background-Color:#ffd9cc;>";}
			viewStr +="<div class='info'  id='Alist"+i+"' name='testInfo"+i+"' style='background-Color:#ffece6;'>";
			 
			viewStr += "<td style='width:40px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:40px;' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div></td>";
            var name=studentInitialArr[i];
			viewStr += "<td style='width:250px;word-wrap:break-word' align='center'><div class='investView_l' style='width:250px;' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			if(count%2==0){
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
			else{
			viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="Namebtn'+i+'" onclick="loadProfile(this);">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
			}
            viewStr +="<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3"+i+"' value= '"+applicationNoArr[i]+"' >";			
			viewStr += "<td style='width:150px;word-wrap:break-word' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+i+"' id='applicationNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += applicationNoArr[i]+"</div></td>";
			

			
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			
            viewStr += "<td style='width:150px;word-wrap:break-word'><div class='investView' style='width:150px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
            viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='TelNo"+i+"' id='TelNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactLanArr[i]+"</div></td>";				
			
 
			viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='MobNo"+i+"' id='MobNo"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactMobileArr[i]+"</div></td>";				
 

			viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd"+i+"' id='EmailAdd"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+studentContactEmailArr[i]+"</div></td>";


			if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
				
			viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd"+i+"' id='EmailAdd"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+streamNameArr[i]+"</div></td>";
			
			viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd"+i+"' id='EmailAdd"+i+"'";
			viewStr += " onchange='dataRep[this.name]=this.value;'>"+Main_SubjectArr[i]+"</div></td>";
		}

			

			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedChecked = "checked";
				} else {
					selectedChecked = "";
				}
			
			
			var checkBoxDivIdSelected = 'checkSelected'+i;
				if(document.getElementById(checkBoxDivIdSelected)){
					if(document.getElementById(checkBoxDivIdSelected).checked){
						selectedChecked='checked';
					}
				}
			

			if(selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes"){
					selectedDepChecked = "checked";
				} else {
					selectedDepChecked = "";
				}

			
			var checkBoxDivDEPIdSelected = 'checkDepSendSelected'+i;
				if(document.getElementById(checkBoxDivDEPIdSelected)){
					if(document.getElementById(checkBoxDivDEPIdSelected).checked){
						selectedDepChecked='checked';
					}
				}	
					
				
				

			 viewStr += "<td style='width:25px;word-wrap:break-word' align='center'><div class='investView' style='width:25px;' name='pin"+i+"' id='pin"+i+"'";
			 viewStr += " onchange='dataRep[this.name]=this.value;'>"+pinArr[i]+"</div></td>";				
			
			viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='selected"+i+"' id='selected"+i+"'>"; //Alist"+i+"
			viewStr += "<input type='checkbox' "+selectedChecked+"  id='checkSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkSelected"+i+"''/>";
			viewStr += "</div></td>";
			
			viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='Depselected"+i+"' id='Depselected"+i+"'>"; 
			viewStr += "<input type='checkbox' "+selectedDepChecked+"  id='checkDepSendSelected"+i+"' onChange='AddResearchRowColor("+i+", this)' name='checkDepSendSelected"+i+"''/>";
			viewStr += "</div></td>";

			
			viewStr += "<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn"+i+"' id='notesBttn"+i+"' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
			viewStr +=" </textarea></div>";
		    //<td style='width:130px;'> </td>
            viewStr += "<div id='notesDiv"+i+"' style='width:130px;display:none' class='investView'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
			viewStr +=" </textarea></div></td>";

		    viewStr +="</div>";
	        viewStr +="</tr>";
nextpage++;
			if (nextpage==breakingpoint)
			{
				nextpage=0;
				pagenew="yes";
				divid++;
				viewStr +="</div>";
				viewStr +="</div>";
				//viewStr +="</table><br>";
			}
			}
			

			
			}
			
	
			
			
		}
		if (pagenew=="no")
			{
			viewStr +="</div>";
			viewStr +="</div>";
			
			}
	viewStr +="</table><br>";
	viewStr += '<div align="center">';
	if (count%breakingpoint==0)
{
	divid=divid-1;
}
	
			for (make=1; make<=divid; make++)
		{
				viewStr += '<input type = "button" id="page'+make+'" class ="btnB" value="Page '+make+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=showDivPage('+make+');>';
		//alert("yesy");
		}
	

	
	//alert(rowCount);
	if (count >=6)
	{
	
		if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
		{
			var viewStr1 = '</div></br><input type="button" class="btnB"  id="ResearchDownload1" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload2" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Reset" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formCoordinatorMenu'"+');>';
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if (dataRep['roleName']=='Head of the Department')
		{
			var viewStr1 = '</div></br><input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formHeadMenu'"+');>';
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		
		if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar')
		{
			
			var viewStr1 = "</div></br><input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload3"  value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4"  value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
		    viewStr1 += "<input type='button' class='btnB' id='reApplicationsc' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
			viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNotesc' value='Add Note' onclick=generateBulkNote();>";            
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
           viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formClerkMenu'"+');>';
        viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

		
		}

		 if(dataRep['roleName']=='Assistant Registrar')
		{
			
			var viewStr1 = "</div></br><input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload3"  value = "Download Sinhala Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4"  value = "Download English Medium" disabled="disabled" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
		   // viewStr1 += "<input type='button' class='btnB' id='reApplicationsc' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
			//viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNotesc' value='Add Note' onclick=generateBulkNote();>";            
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
            viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'main'"+');>';
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		//else
		if(dataRep['roleName']=='Dean')
		{
			
			var viewStr1 = "</div></br><input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='save' value='Save send applications' disabled='disabled' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 	
			
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationSin();>';
			viewStr1 += '<input type="button" class="btnB"  id="ResearchDownload4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteReseApplicationEng();>';
			viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentLists();sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
			viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentLists();showMenu('+"'formDeanMenu'"+');>';//width:157px;height:37px; Get Application List
            viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		
		// for (make=1; make<=divid; make++)
		// {
			// viewStr1 += '<input type = "button" class ="btnB" value="Page '+make+'" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=showDivPage('+make+');>';
		
		// }
		}
		//document.getElementById('Buttonlist').innerHTML += viewStr1;
	}
	viewStr+=viewStr1;
	document.getElementById('list').innerHTML += viewStr; 
	document.getElementById("View-List").disabled= true;
	document.getElementById("save").disabled= false;
	document.getElementById("ResearchDownload3").disabled= false;
	document.getElementById("ResearchDownload4").disabled= false;
	document.getElementById('Researchselect-all').style="display";
	document.getElementById('Researchselect-non').style="display";	
    }
	}
//-------------------------------------------------------------------------VIEW LIST FUNCTION END--------------------		

//-------------------------------------------------------------------------GENERATE NOTES FUNCTION START-------------	
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
//-------------------------------------------------------------------------GENERATE NOTES FUNCTION END-------------	

//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION START-------	
function generateBulkNote() {
if (TempBulkNote==undefined)
 {
     BulkNote = prompt("Please enter Note", "");
     TempBulkNote=BulkNote;
 
 }  
else{
    BulkNote = prompt("Please enter Note", TempBulkNote );
    if (BulkNote!=null){
    TempBulkNote=BulkNote;
}
     
} 


}
//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION END-------	

function loadProfile(app)
{
 
	returnStudentProfile();
	var adID = app.id;
    var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
    dataRep["applicationNo"]=document.getElementById('applicationNo3'+lastChar).value;  //sendForm('data4GetReleventApplicant')
	
	dataRep['searchType'] = 'applicantSearch';
	
	
	sendForm('data4LoadApplicantView');
	// searchApplicantProfile();	
	document.getElementById('applicationNo').value = dataRep["applicationNo"];

}

function sendMail()
{
  var link = "mailto:me@example.com"+
             "?cc=CCaddress@example.com"+
             "&subject=" + escape("This is subject")+
             "&body=" + escape("This is body");
  window.location.href = link;
}

function CompleteReseApplicationSin(){
//alert(medium1Arr);
var count=1;
	var Rcount=1;
	var checkBoxCount=0;
	for( i=0; i<applicationNoLength; i++){
		if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] & (medium1Arr[i] == "si" )) {// & (medium1Arr[i] == "en" )){	
              if(document.getElementById('checkSelected'+i)){
			   if(document.getElementById('checkSelected'+i).checked == true){
				   checkBoxCount++;
			   }
			  }
			}
		}
	}
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}

    else{

				  var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    if(checkdeleteorsave=='deletefunction'){
					newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;'>user:"+dataRep['userName']+"</div>";
						
					}
					newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>No</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>Name With Initial</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					//sew
					
					if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
					newStr +="<th style='border: 1px solid black;'>Stream Name</th>";
					newStr +="<th style='border: 1px solid black;'>Main Subject</th>";
					}
					
					
					//newStr +="<th style='border: 1px solid black;'>Qualifications</th>";
					newStr +="</tr>";  
            
			for( i=0; i<applicationNoLength; i++){
		
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] & (medium1Arr[i] == "si" )){// & (medium1Arr[i] == "en" )){	

			 if(document.getElementById('checkSelected'+i)){
			 if(document.getElementById('checkSelected'+i).checked == true){

			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
			

			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</td>';
			
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			if(document.getElementById('selectedDegreeName').value=='Master of Philosophy' || document.getElementById('selectedDegreeName').value=='Doctor of Philosophy'){
				
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+streamNameArr[i]+'</td>';

			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+Main_SubjectArr[i]+'</td>';

			}
			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			count++;
						}

			}
		 }
		
				 
				 
			}	 
	}
	
	newStr +="</table>";
	

	
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {type: "text/doc;charset=utf8;"});
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	   
	  if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	link.setAttribute("href", window.URL.createObjectURL(blob));
	   link.setAttribute("download", fileName);
	  
		}
		else{
			  link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
		}
	  
	
	  
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	
	if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	document.body.appendChild(link);
	window.location.replace(link);
		}
	
		
		}	

	

}

function showDivPage(idpass)
{
	if(document.getElementById('myTable'+idpass))
	{
	document.getElementById('myTable'+idpass).style="display";
	document.getElementById('page'+idpass).disabled= true;
	}
	
	for (make=1; make<=divid; make++)
		{
			if(document.getElementById('myTable'+make))
	{
			if (make!=idpass)
			{
		document.getElementById('myTable'+make).style.display='none';
document.getElementById('page'+idpass).disabled= false;		
			}
	}
		}
	
	
}


function setResearchBreakingpoint ()
{
	
	var useramount = prompt("Please enter number of records you wish to view in one page", "50");
    
    if (useramount != null) {
         breakingpoint=useramount;
    }
	
}