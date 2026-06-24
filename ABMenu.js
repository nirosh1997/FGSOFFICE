function formAssistantBursarMenu(dsp) {

		str = "";

		title = "Assistant Bursar";
	

		if(dsp == "formAssistantBursarMenu") {

		// str  = "<div id='maintainformAssistantBursarMenu'>";
		// str +="<div></div><br/>";
		
		// str += "<table><tr><td>"
		// str += '<h2 >'+title+'</h2><hr>';

		
		// str += "<div style='float:left;clear:both;' id='btnsection'>";

		// //str += '<input type="button" class="btnD" value = "Student Paymentns" onclick ="sendForm('+"'data4returnBulkPayment1'"+');sendForm('+"'data4StudentPaymentRecordAB'"+'); sendForm('+"'data4InstallmentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetails1AB'"+');sendForm('+"'data4StudentPaymentDetails2AB'"+');">'; 
		
				
		// str += '<input type="button" class="btnD" value = "Add Student Payments" onclick ="sendForm('+"'data4returnBulkPayment'"+');sendForm('+"'data4StudentPaymentRecord'"+'); sendForm('+"'data4InstallmentDetails'"+');sendForm('+"'data4StudentPaymentDetails'"+');sendForm('+"'data4StudentPaymentDetails1'"+');sendForm('+"'data4StudentPaymentDetails2'"+');">'; //sendForm('+"'data4StudentPayDetails"+');

		// str += '<input type="button" class="btnD" value = "View Online Payments" onclick ="Viewonlinepayment();">';
		
		// str += '<input type="button" class="btnD" value = "Upload Bank Statement" onclick ="Uploadstatement();">';
		
		// // str += '<input type="button" class="btnD" value = "View 16 Digit Paid List" onclick ="sendForm('+"'data4checkdepartmentABView16Digit'"+');sendForm('+"'data4returnABView16Digit'"+');sendForm('+"'data4IncomeCategoryDetailsABView'"+');sendForm('+"'data416DigitStudentPaymentDetailsABView'"+');sendForm('+"'data416DigitCAlPaidAmountABView'"+');">';
		// str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');">';
		
		
		// str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';
			

		// str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		// str += "</div>";
	
		
		// str += '</td></tr></table>';
		// str += "</div>";
		
		}
		return str;
		
	}
function Viewonlinepayment(){
window.open('https://sis.kln.ac.lk/PayService/ClientApp/info.php');	
}


function Uploadstatement(){
window.open('https://sysfgs.kln.ac.lk/bank-statement');		
}

function Uploadstatement2(){
window.open('https://sysfgs.kln.ac.lk/bank-payment/bank-statement');		
}

