

dataRep["universityCode"] = dataRep["universityTitle"] ="";

function buttonDissable()
	{
	
	
	}


function formAddMessage(dsp) {

		var title = "Add New Message";
		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "formAddMessage") {
			
			var previousID= MessageCodeLength;
			
			var messageID = MessageCodeLength+1;
			str  = "<div id='addmessage'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainMessage" >';
			
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='identifiers'>Message ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='universityCode' id ='universityCode' value= '"+dataRep["universityCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			// str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Message ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='universityCode' id ='universityCode' value= '"+messageID+"' disabled='disabled' maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";
			
			

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Message Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "<br><br><center>";
				
			//if(dsp == "addmessage"){
				str += '<input type="submit" class="btn" value="Save" onclick=formAddMessagesendForm("addMessage");buttonDissable()>';
			//}
		
		
			str += '<input type="button" class="btn" value = "Return to Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			
			//str += '<input type="button" class="btn" value = "Save" onclick = "">';

			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	

	

	
	
	
	
function formAddMessagesendForm(frm){

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

		if(frm == 'addMessage'){
 
			doc = document.maintainMessage;
			dataStr += "&interface="+frm;
			dataStr += "&MessageID="+doc.universityCode.value;
			dataStr += "&MessageType="+doc.universityTitle.value;
			alert(dataStr);

		} 
		

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;

}

