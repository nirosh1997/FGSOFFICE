//chinthaka

dataRep['BankCode']=dataRep['BankName']= dataRep['Branch'] = "";
				

function formBankDetails(dsp){

title = "Bank Details";

		str = "";

		if(dsp == "formBankDetails"){
				str  = "<div id='addBankDetails'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				
				str += '<form name="maintainBankDetails"><br><br>';
				str += "<div style='float:left'>";

				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Bank Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='BankCode' id='BankCode' onchange='dataRep[this.name]=this.value;' value='"+dataRep['BankCode'].trim()+"' maxlength='10' "+fieldDisabled+" >";
				str += "</div>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Bank Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='BankName' id='BankName' onchange='dataRep[this.name]=this.value' value= '"+dataRep['BankName'].trim()+"'  "+fieldDisabled+">";
				str += "</div>";
				
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Branch</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='Branch' id='Branch' onchange='dataRep[this.name]=this.value' value= '"+dataRep['Branch'].trim()+"'  "+fieldDisabled+">";
				str += "</div>";
				
				str += "<br><br><center>";
				
			
				str += "<input type='button' class='btn' value='Save' onclick=sendForm('')>"; 
				str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
			
		
				
