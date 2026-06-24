


function formThesisSubmitMenu(dsp){

title = "Thesis Submit Menu";



		str = "";

		if(dsp == "formThesisSubmitMenu"){
				str  = "<div id='thesisDetails'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				str += '<form name="maintainThesisDetails">';
				str += "<center>";
				
				
				str += '<input type = "button" class ="btn2" value="Appoint Examiners By Faculty" onclick="showMenu('+"'formAppointExaminersMenu'"+');">';

				str += '<input type = "button" class ="btn2" value="Board Recommendation" onclick="sendForm('+"'data4TransactionTypeDetails'"+');sendForm('+"'data4StudentTransaction'"+');sendForm('+"'data4ExaminerList'"+');">';
				
				str += '<input type = "button" class ="btn2" value="Add Document Details" onclick="sendForm('+"'data4AddDocument'"+');">';
				
				//str += '<input type = "button" class ="btn2" value="FGS Board Recommendation" onclick="showMenu('+"'formRequestForFGSBoardRecommendation'"+');">';

				//str += '<input type = "button" class ="btn2" value="Request For Senate Approval" onclick="showMenu('+"'formRequestForSenateApproval'"+');">';

				//str += '<input type = "button" class ="btn2" value="Thesis Hand Over" onclick="showMenu('+"'formHandingOverThesisToFGSByStudent'"+');">';

				//str += '<input type = "button" class ="btn2" value="Sending Thesis To Examiners" onclick="showMenu('+"'formSendingThesisToExaminers'"+');">';

				//str += '<input type = "button" class ="btn2" value="Reciving Thesis Report Examiners" onclick="showMenu('+"'formReceivingEvaluationReportFromExaminers'"+');">';

				//str += '<input type = "button" class ="btn2" value="Sending Thesis to Examiners" onclick="showMenu('+"'formSendingThesisToExaminers'"+');">';

				//str += '<input type = "button" class ="btn2" value="Reciving Thesis Report Examiners" onclick="showMenu('+"'formReceivingEvaluationReportFromExaminers'"+');">';
				
				str += '<input type = "button" class ="btn2" value="Add Thesis" onclick="sendForm('+"'data4AddThesisTitle'"+');">';
				
				str += '<input type = "button" class ="btn2" value="Notify Thesis" onclick="sendForm('+"'data4AppointExaminers'"+');">';

				str += '<input type = "button" class ="btn2" value="Examiners Recommendation" onclick="sendForm('+"'data4ExaminerReccomand'"+');">';
				
				//str += '<input type = "button" class ="btn2" value="Thesis Submit" onclick="showMenu('+"'formThesisSubmit'"+');">';
				str += '<input type = "button" class ="btn2" value="Thesis Submit Eligibility" onclick="sendForm('+"'data4ThesisNotification'"+');">';
						
				str += '<input type = "button" class ="btn2" value="Thesis Evaluation" onclick="sendForm('+"'data4ThesisEvaluation'"+');">';
				
				str += '<input type = "button" class ="btn2" value="Sending Thesis to Exam Branch" onclick="showMenu('+"'formSendingThesisToExamBranch'"+');">';
								
				str += '<input type = "button" class ="btn2" value="Pannel Board" onclick="showMenu('+"'formPannelBoard'"+');">';
						
				str += '<input type = "button" class ="btn2" value="Viva Board" onclick="showMenu('+"'formVivaBoard'"+');">';

				//str += '<input type = "button" class ="btn2" value="Ex Update" onclick="showMenu('+"'formUpdateExaminerBoard'"+');">';

				
				//str += '<input type = "button" class ="btn2" value="Add Old Student2" onclick="sendForm('+"'data4AddOldStudentTwo'"+');">';

			//	str += '<input type = "button" style="margin-top:18px" class ="btn" value="View Examiners" onclick="sendForm('+"'data4ExaminerReccomand'"+');">';
			
				
				
				
				str += '<input type="button" class="btn2" value = "Return to Administrator Menu" onclick ="showMenu('+"'formAdministratorMenu'"+');">';	
				
				//str += '<input type="button" class="btn2" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	
}
			
		

	