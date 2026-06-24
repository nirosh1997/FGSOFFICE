
function formAddPayment(dsp) {

		var title = "Payment";
		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "addpayment"|| dsp == "updatepayment" || dsp == "deletepayment" ) {

			if(dsp == "updatepayment" || dsp == "deletepayment"){
				title = "Update Payment";
				
				if(dsp == "deletepayment"){
					title = "Delete Payment";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedpayment"] != ""){
					dataRep["paymentId"] = dataRep["selectedpayment"].substring(0,2);
					dataRep["paymentTitle"] = dataRep["selectedpayment"].substring(4,(dataRep["selectedpayment"].length));
				}
			}
			str  = "<div id='addpayment'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainUniversity" >';
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Payment Id</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='paymentId' id ='paymentId' value= '"+dataRep["paymentId"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Payment Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='paymentTitle'  id = 'paymentTitle' value= '"+dataRep["paymentTitle"].trim()+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "<br><br><center>";
				
			if(dsp == "addpayment"){
				str += '<input type="submit" class="btn" value="Save" onclick=formPaymentsendForm("addpayment");>';
			} else if(dsp == "updatepayment") {
				str += '<input type="submit" class="btn" value="Update" onclick=formPaymentsendForm("updatepayment");>';
			} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formPaymentsendForm("deletepayment")>';
			}
		
			str += '<input type="button" class="btn" value = "View Payment" onclick="sendForm('+"'data4ViewPayment'"+')">';
			str += "<input type='reset' class='btn' value='Reset Values'   >";
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
		function formViewPayment(dsp) {

		str = "";

		if(dsp == "formViewPayment") {

			instituteCode = instituteTitle = "";

			str  = "<div id='viewpayment'>";
			str += "<table><tr><td>"
			str += '<h2>View Payment</h2><hr>';
			str += '<form name="maintainviewuniversity" method="POST">';
			
			var paymentCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<paymentIdLength; i++) {
				paymentCodeStr += "<option>"+paymentIdArr[i]+"--"+paymentTitleArr[i]+"</option>";
			}
			str += "<br><center><select name='selectedpayment' onchange='dataRep[this.name]=this.value;'>";
			str += paymentCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updatepayment")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deletepayment")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addpayment'"+')>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
		function formPaymentvalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "addpayment" || frm == "updatepayment" ){

			if(frm == "addpayment"){
				dsp = "addpayment";
			} else if(frm == "updatepayment"){
				dsp = "updatepayment";
			} 
			

			doc = document.maintainUniversity;
			document.getElementById("msgArea").innerHTML = "";
			
		
			
			if((dataRep["paymentId"].trim()).length != 3){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Payment Id with less than 3 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["paymentTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Payment Title cannot be blank.</div>";
					error++;
				} 
			}

		}
		
		
		if(error > 0 && error != ""){//
		 //alert("yes");
			showMenu(dsp);
		} else {
		 //alert("no");
			formPaymentsendForm(frm);
		}
		
	}
	
	
	
	
function formPaymentsendForm(frm){

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

		if(frm == 'addpayment' || frm == 'updatepayment' || frm == 'deletepayment'){
 
			doc = document.maintainUniversity;
			dataStr += "&interface="+frm;
			dataStr += "&paymentId="+doc.paymentId.value;
			dataStr += "&paymentTitle="+doc.paymentTitle.value;
			//alert(dataStr);

		} 
		

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;

}

