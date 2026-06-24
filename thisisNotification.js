function DisplayReports(){
 var newStr ="";
//alert("okkkk");
//newStr +="<div style ='clear:both;' >";
newStr +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'>Progress Reports</legend>";


if(dataRep["progressReportOne"] != ""){
			// alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report One</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportOne'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report One</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportOne'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}

if(dataRep["progressReportTwo"] != ""){
			 //alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Two</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportTwo'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Two</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportTwo'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}
			
if(dataRep["progressReportThree"] != ""){
			 //alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Three</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportThree'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Three</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportThree'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}	

if(dataRep["progressReportFour"] != ""){
			 //alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Four</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportFour'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Four</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportFour'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}	
if(dataRep["progressReportFive"] != ""){
			 //alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Five</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportFive'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			alert("Progress Requirement Must Be fullfill to Submit Thesis!"+dataRep["studentNIC"]);
			//disableSaveBtn();
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Five</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportFive'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}
			
if(dataRep["progressReportSix"] != ""){
			 //alert("true");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Six</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportSix'><img src='img/right.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			}
			else{
			//alert("false");
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Progress Report Six</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='progressReportSix'><img src='img/wrong3.png' ></div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			}				

newStr += "</fieldset>";


			newStr +="<fieldset class='field'><legend class='fieldHead'>Payments</legend>";


			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Payment Type</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='paymentTypeOne'>"+dataRep["paymentTypeOne"]+"</div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='paymentDateOne'>"+dataRep["paymentDateOne"]+"</div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Amount</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='paymentAmountOne'>"+dataRep["paymentAmountOne"]+"</div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";

			newStr += "</fieldset>";


newStr +="<fieldset class='field'><legend class='fieldHead'>Extension</legend>";


newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Extenstion From</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='extentionFromOne'>"+dataRep["extentionFromOne"]+"</div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/>";
			
			newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			newStr +="<div class='longIdentifier' style='clear:none;'>Extension To</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr +="<div class='viewArea' style='clear:none;width:auto;' id='extentionToOne'>"+dataRep["extentionToOne"]+"</div>";
			newStr +="<div class=hideLabel>&nbsp;</div>";
			newStr +="</div><br/><br/><br/><br/>";

newStr += "</fieldset></div><br/><br/><br/>";
newStr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'></div>";
			
			
			newStr +="<fieldset  class='field'><legend class='fieldHead'> </legend><div style='clear:both'><div class='rdo'>";
					
			
								 dataRep['handYYYY'] = year;
								 dataRep['handMM'] = month;
								 dataRep['handDD'] = date;
			
								 newStr +="<div class='longIdentifier'>Date Received</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 newStr += "<select name='handYYYY' value='handYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newStr += generateNumberOptions(2015, 2025, 4, dataRep['handYYYY']);
								 newStr += "</select>";
								 newStr += "<select name='handMM' value='handMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newStr += generateNumberOptions(0, 12, 2, dataRep['handMM']);
								 newStr += "</select>";
								 newStr += "<select name='handDD' value='handDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newStr += generateNumberOptions(0, 31, 2, dataRep['handDD']);
								 newStr += "</select></div><br>";
								 
								
								newStr +="<div class='longIdentifier' onclick='dataRep[this.name]=this.value;'><label>Ackknowledge Letter</label></div>";
								newStr +="<input  type='checkbox' id='ackLetter' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
						
								
								newStr +="<onclick='dataRep[this.name]=this.value;'><label>&nbsp;&nbsp;Three Copies</label>";
								newStr +="<input  type='checkbox' id='3Copys' name='progressReport' class='changeColor' value= 'Progress Report Three'></div><br>";
			
								newStr +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								
								if(dataRep['roleName']=='Dean' || dataRep['roleName']=='FGS Deputy Registrar') {
								
								newStr +="<br/><div class='longIdentifier'>Approved By</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								newStr += "<select id='approvedBy' name='approvedBy' value='approvedBy'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								newStr += "<option value='0' selected>Please scroll down to see the records</option>";
								newStr += "<option value='1'>Dean</option>";
								newStr += "<option value='2'>SAR of FGS</option>";
													

								newStr += "</select>";
								newStr += "</div>";
			
	
								newStr +="<div class='longIdentifier'>Remarks:&nbsp;<textarea rows='auto'  name='notification' id='notification'  style='float:left;width:250px'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
								newStr += dataRep["notification"];
								newStr +="</textarea></div><br>";
								}
								
								
								newStr +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
								
								if(dataRep["progressReportFour"] != "") {
								
								newStr += '<input id="save" type="button" class="btnB" value="Save"  onclick=formThesisSubmitChecksendForm('+"'updateThesisSubmit'"+');>';	
								}
								newStr += '<input type="button" class="btnB" value="Return"  onclick=showMenu('+"'formThesisSubmitMenu'"+');>';	
								newStr += '<input type="button" class="btnB" value="Logout"  onclick=logOut();>';	
								
								if(dataRep['roleName']=='Dean' || dataRep['roleName']=='FGS Deputy Registrar') {
								newStr += '<input type="button" class="btnB" value="Save UnderCondition"  onclick=formThesisSubmitUnderConditionsendForm('+"'addThesisSubmitUnderCondition'"+');>';	
								}
								newStr+="</div>";
					
							newStr +="</fieldset></div><br>";
			


						
document.getElementById('progressReportDiv').innerHTML=newStr;
		
}




function setValuesNotification(){
	for(i=0; i<studentNoLength;i++){

		if(dataRep["studentNo"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["birthCertificate"]= birthCertificateArr[i] 
			dataRep["degreeCertificate"]= degreeCertificateArr[i]; 
			dataRep["paymentTypeOne"]=paymentTypeOneArr[i]; 
			dataRep["paymentDateOne"]=paymentDateOneArr[i]; 
			dataRep["paymentAmountOne"]=paymentAmountOneArr[i] ; 
			dataRep["paymentTypeTwo"]=paymentTypeTwoArr[i] ; 
			dataRep["paymentDateTwo"]=paymentDateTwoArr[i]; 
			dataRep["paymentAmountTwo"]=paymentAmountTwoArr[i] ; 
			dataRep["paymentTypeThree"]=paymentTypeThreeArr[i] ; 
			dataRep["paymentDateThree"]=paymentDateThreeArr[i]; 
			dataRep["paymentAmountThree"]=paymentAmountThreeArr[i] ; 				
			dataRep["commenceDate"]=commenceDateArr[i]; 
			dataRep["endDate"]=	endDateArr[i] ; 
			dataRep["facultyBoardDate"]= facultyBoardDateArr[i] ; 			
			dataRep["facultyBoardNo"]=	facultyBoardNoArr[i] ; 
			dataRep["boardOfStudyDate"]= boardOfStudyDateArr[i]; 
			dataRep["boardOfStudyNo"]=boardOfStudyNoArr[i] ; 
			dataRep["thesisTopicOne"]=thesisTopicOneArr[i] ; 
			dataRep["thesisTopicTwo"]=thesisTopicTwoArr[i] ; 
			dataRep["thesisTopicThree"]= thesisTopicThreeArr[i]; 
			dataRep["thesisTopicFour"]=	thesisTopicFourArr[i] ; 				
			dataRep["supervisorOne"]=supervisorOneArr[i] ; 
			dataRep["supervisorTwo"]=supervisorTwoArr[i] ; 
			dataRep["examinerOne"]=	examinerOneArr[i]; 
			dataRep["examinerTwo"]=	examinerTwoArr[i]; 			
			dataRep["examinerThree"]=examinerThreeArr[i]; 
			dataRep["progressReportOne"]=progressReportOneArr[i]; 
			dataRep["progressReportDateOne"]= progressReportDateOneArr[i]; 			
			dataRep["progressReportTwo"]=progressReportTwoArr[i] ; 
			dataRep["progressReportDateTwo"]=progressReportDateTwoArr[i] ; 
			dataRep["progressReportThree"]=	progressReportThreeArr[i] ; 
			dataRep["progressReportDateThree"]=	progressReportDateThreeArr[i] ; 
			dataRep["progressReportFour"]=progressReportFourArr[i]; 
			dataRep["progressReportDateFour"]=progressReportDateFourArr[i] ; 
			dataRep["progressReportFive"]=progressReportFiveArr[i] ; 
			dataRep["progressReportDateFive"]=progressReportDateFiveArr[i] ; 
			dataRep["progressReportSix"]=progressReportSixArr[i]; 
			dataRep["progressReportDateSix"]=progressReportDateSixArr[i] ; 
			dataRep["extentionFromOne"]=extentionFromOneArr[i] ; 
			dataRep["extentionToOne"]=extentionToOneArr[i] ; 
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["birthCertificate"]=  birthCertificateArr[i] 
			dataRep["degreeCertificate"]=	degreeCertificateArr[i]; 
			dataRep["paymentTypeOne"]=	paymentTypeOneArr[i]; 
			dataRep["paymentDateOne"]=	paymentDateOneArr[i]; 
			dataRep["paymentAmountOne"]=	paymentAmountOneArr[i] ; 
			dataRep["paymentTypeTwo"]=	paymentTypeTwoArr[i] ; 
			dataRep["paymentDateTwo"]=	paymentDateTwoArr[i]; 
			dataRep["paymentAmountTwo"]=	paymentAmountTwoArr[i] ; 
			dataRep["paymentTypeThree"]=	paymentTypeThreeArr[i] ; 
			dataRep["paymentDateThree"]=	paymentDateThreeArr[i]; 
			dataRep["paymentAmountThree"]=	paymentAmountThreeArr[i] ; 				
			dataRep["commenceDate"]=	commenceDateArr[i]; 
			dataRep["endDate"]=	endDateArr[i] ; 
			dataRep["facultyBoardDate"]= facultyBoardDateArr[i] ; 			
			dataRep["facultyBoardNo"]=	facultyBoardNoArr[i] ; 
			dataRep["boardOfStudyDate"]= boardOfStudyDateArr[i]; 
			dataRep["boardOfStudyNo"]=boardOfStudyNoArr[i] ; 
			dataRep["thesisTopicOne"]=thesisTopicOneArr[i] ; 
			dataRep["thesisTopicTwo"]=thesisTopicTwoArr[i] ; 
			dataRep["thesisTopicThree"]= thesisTopicThreeArr[i]; 
			dataRep["thesisTopicFour"]=	thesisTopicFourArr[i] ; 				
			dataRep["supervisorOne"]=supervisorOneArr[i] ; 
			dataRep["supervisorTwo"]=supervisorTwoArr[i] ; 
			dataRep["examinerOne"]=	examinerOneArr[i]; 
			dataRep["examinerTwo"]=	examinerTwoArr[i]; 			
			dataRep["examinerThree"]=examinerThreeArr[i]; 
			dataRep["progressReportOne"]=progressReportOneArr[i]; 
			dataRep["progressReportDateOne"]= progressReportDateOneArr[i]; 			
			dataRep["progressReportTwo"]=progressReportTwoArr[i] ; 
			dataRep["progressReportDateTwo"]=progressReportDateTwoArr[i] ; 
			dataRep["progressReportThree"]=	progressReportThreeArr[i] ; 
			dataRep["progressReportDateThree"]=	progressReportDateThreeArr[i] ; 
			dataRep["progressReportFour"]=progressReportFourArr[i]; 
			dataRep["progressReportDateFour"]=progressReportDateFourArr[i] ; 
			dataRep["progressReportFive"]=progressReportFiveArr[i] ; 
			dataRep["progressReportDateFive"]=progressReportDateFiveArr[i] ; 
			dataRep["progressReportSix"]=progressReportSixArr[i]; 
			dataRep["progressReportDateSix"]=progressReportDateSixArr[i] ; 
			dataRep["extentionFromOne"]=extentionFromOneArr[i] ; 
			dataRep["extentionToOne"]=extentionToOneArr[i] ; 
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
			
		}else if(dataRep["studentNIC"]==studentNICArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNo"]=studentNoArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["birthCertificate"]=  birthCertificateArr[i] 
			dataRep["degreeCertificate"]=	degreeCertificateArr[i]; 
			dataRep["paymentTypeOne"]=	paymentTypeOneArr[i]; 
			dataRep["paymentDateOne"]=	paymentDateOneArr[i]; 
			dataRep["paymentAmountOne"]=	paymentAmountOneArr[i] ; 
			dataRep["paymentTypeTwo"]=	paymentTypeTwoArr[i] ; 
			dataRep["paymentDateTwo"]=	paymentDateTwoArr[i]; 
			dataRep["paymentAmountTwo"]=	paymentAmountTwoArr[i] ; 
			dataRep["paymentTypeThree"]=	paymentTypeThreeArr[i] ; 
			dataRep["paymentDateThree"]=	paymentDateThreeArr[i]; 
			dataRep["paymentAmountThree"]=	paymentAmountThreeArr[i] ; 				
			dataRep["commenceDate"]=	commenceDateArr[i]; 
			dataRep["endDate"]=	endDateArr[i] ; 
			dataRep["facultyBoardDate"]= facultyBoardDateArr[i] ; 			
			dataRep["facultyBoardNo"]=	facultyBoardNoArr[i] ; 
			dataRep["boardOfStudyDate"]= boardOfStudyDateArr[i]; 
			dataRep["boardOfStudyNo"]=	boardOfStudyNoArr[i] ; 
			dataRep["thesisTopicOne"]=	thesisTopicOneArr[i] ; 
			dataRep["thesisTopicTwo"]=	thesisTopicTwoArr[i] ; 
			dataRep["thesisTopicThree"]= thesisTopicThreeArr[i]; 
			dataRep["thesisTopicFour"]=	thesisTopicFourArr[i] ; 				
			dataRep["supervisorOne"]=	supervisorOneArr[i] ; 
			dataRep["supervisorTwo"]=	supervisorTwoArr[i] ; 
			dataRep["examinerOne"]=	examinerOneArr[i]; 
			dataRep["examinerTwo"]=	examinerTwoArr[i]; 			
			dataRep["examinerThree"]=	examinerThreeArr[i]; 
			dataRep["progressReportOne"]=	progressReportOneArr[i]; 
			dataRep["progressReportDateOne"]= progressReportDateOneArr[i]; 			
			dataRep["progressReportTwo"]=	progressReportTwoArr[i] ; 
			dataRep["progressReportDateTwo"]=	progressReportDateTwoArr[i] ; 
			dataRep["progressReportThree"]=	progressReportThreeArr[i] ; 
			dataRep["progressReportDateThree"]=	progressReportDateThreeArr[i] ; 
			dataRep["progressReportFour"]=	progressReportFourArr[i]; 
			dataRep["progressReportDateFour"]=	progressReportDateFourArr[i] ; 
			dataRep["progressReportFive"]=	progressReportFiveArr[i] ; 
			dataRep["progressReportDateFive"]=	progressReportDateFiveArr[i] ; 
			dataRep["progressReportSix"]=	progressReportSixArr[i]; 
			dataRep["progressReportDateSix"]=	progressReportDateSixArr[i] ; 
			dataRep["extentionFromOne"]=	extentionFromOneArr[i] ; 
			dataRep["extentionToOne"]=	extentionToOneArr[i] ; 
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
		}
	}
} 








function formThesisNotification(dsp) {
		str = "";
		title = "Thesis Notification";

		if(dsp == "formThesisNotification") { 
			
			
			
			str  = "<div id='addThesisNotification'  >";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainThesisNotification">';
			
			
			
			for(studentNoLoop=0; studentNoLoop< studentNoLength; studentNoLoop++){
			
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
			if (studentNICArr.indexOf(studentNICArr[studentNoLoop]) == studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) || (studentNICArr.indexOf(studentNICArr[studentNoLoop]) != studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) && studentNICArr.indexOf(studentNICArr[studentNoLoop])==studentNoLoop)){
				if(studentNICArr[studentNoLoop] != ""){
				studentNICList += "<option value='"+studentNICArr[studentNoLoop]+"'>";
				}
			}
			}
			
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'>Search Student</legend>";
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesNotification();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesNotification();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesNotification();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br>"; 

			str += "<input type='button' style='margin-top:18px' class='btnB' value='Check Eligibility' onclick=sendForm('data4ThesisNotification');DisplayReports();>";
		
			str += '<input type="button" style="margin-top:18px" class="btnB" value="Return"  onclick=showMenu('+"'formThesisSubmitMenu'"+');>';	
			
			
			//str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=''>";
			
			str += "</fieldset></div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			
			if(dataRep["progressReportOne"] != " "){
			
			// str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
			 str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			
			// str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			 str +="<div class='viewArea' style='clear:none;margin-right:100px;color:red' id='studentName'>"+dataRep["studentName"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			// str +="</div><br/>";
			
			// str +="<div style='margin-top:20px;float:left;clear:both;'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			}
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='thesisTopicOne'>"+dataRep["tid"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='thesisTopicOne'>"+dataRep["title"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='facultyTitle'>"+dataRep["facultyTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Programme Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Supervisor One</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='supervisorOne'>"+dataRep["supervisorOne"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Supervisor Two</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='supervisorTwo'>"+dataRep["supervisorTwo"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			//hidelable starts
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['degreeCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";

			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>University Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['universityCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			//hidelable ends
			
			
			str +="<div id='progressReportDiv'></div>";
			
			
			
			
			
			str += "<br><center>";
			// str +="<div style='margin-top:20px;float:left;clear:both;'>";
			// str += '<input type="button" class="btn" value="Save"  onclick=formThesisNotificationsendForm('+"'addThesisNotification'"+');>'; 
		
			// str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentProfileMenu'"+');>';
				
			// //str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			// str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			// str += '</center></div></form>';
			str += '</td></tr></table></div>';
		
		}
		return str;
		}
		
 function disableSaveBtn()
{

document.getElementById("save").disabled=true;
	
}
		
		
function formThesisSubmitChecksendForm(frm){

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
		
		
		if(frm == 'updateThesisSubmit'){
 
			var i = 2;
			doc = document.maintainThesisNotification;
		
			dataStr += "&interface="+frm;
				
			//dataStr += "&tid="+"2";
			dataStr += "&tid="+dataRep["tid"];
			
			dataStr += "&dateHandOverToFgs="+doc.handYYYY.value+"/"+doc.handMM.value+"/"+doc.handDD.value;
			
				
			if(document.getElementById('ackLetter').checked == true){
				dataStr +="&ActLetterIssue="+"2";
			}
			else{
				dataStr +="&ActLetterIssue="+"1";
			}
			
				
			if(document.getElementById('3Copys').checked == true){
				dataStr +="&3copies="+"2";
			}
			else{
				dataStr +="&3copies="+"1";
			}
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}


		
function formThesisSubmitUnderConditionsendForm(frm){

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
		
		
		if(frm == 'addThesisSubmitUnderCondition'){
 
			var i = 2;
			doc = document.maintainThesisNotification;
		
			dataStr += "&interface="+frm;
				
			//dataStr += "&tid="+"2";
			dataStr += "&tid="+dataRep["tid"];
			
			dataStr += "&ApproveBy="+document.getElementById('approvedBy').value;
			
			
			dataStr += "&Remarks="+dataRep["notification"];
			
				
			
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}