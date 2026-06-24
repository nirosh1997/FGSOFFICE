 
var count=0;

dataRep["universityCode"] = dataRep["universityTitle"] ="";

function buttonDissable()
	{
	
	
	}


function formAddMessageNewMessage(dsp) {
	
	//alert("ok");

		var title = "Add New Message";
		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "formAddMessageNewMessage") {
			
		//	var previousID= EditMessageCodeLength;
			
			var messageID = EditMessageCodeLength+1;
			str  = "<div id='addmessage'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainMessage" >';
			
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='identifiers'>Message ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='universityCode' id ='universityCode' value= '"+dataRep["universityCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			// str += "</div>";
			
			// str += "<div style='clear:both'>";
			// str += "<div class='identifiers'>Message Type ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='universityCode' id ='universityCode' value= '"+messageID+"' disabled='disabled' maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			// str += "</div>";
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='identifiers'>Message ID </div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			// str += "</div>";
			// str += "<br><br><center>";
			
			
				
			

			// str += "<div style='clear:both'>";
			// str += "<div class='identifiers'>Message </div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			// str += "</div>";
			// str += "<br><br><center>";
				
				
				
					str += '</br></br>';
				
						documentName="<option>Please scroll down to see the records</option>";
					
							for(i = 0; i<MessageCodeLength; i++) {
								
							if(messageTypeArr[i] != null){	
							
							   if (messageTypeArr.indexOf(messageTypeArr[i]) == messageTypeArr.lastIndexOf(messageTypeArr[i]) || (messageTypeArr.indexOf(messageTypeArr[i]) != messageTypeArr.lastIndexOf(messageTypeArr[i]) && messageTypeArr.indexOf(messageTypeArr[i])==i)){
							
							documentName += "<option>"+messageTypeArr[i]+"</option>";

									}
								 }
						}
			//str += documentName;
			
				str +="<div class='colon' style='width:50px;'>Message Type</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDocName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();addNewRowDoc();'>";
				str += documentName;
				str += "</select>";
				
			//--------------------------------------------	
			str +="<div class='section1' id='installment'  style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Add seperate mesage to this message type</legend>";
			str += "<div id='selectedinstalmentdiv'></div>";
			str +='<input type="button" id="addbtn1" class="btn" value="Add Message" onclick="addInstallment1();">';
			str += "</fieldset></div>";
	//---------------------------------------------
				
			
				
				
				
			//str += '<input type="submit" id="click" class="btn" value="Add Another Message" onclick=;>';
	
			// prasanna code...............	
			
			//str +="<input type='checkbox'  id='check5' name='Progress report' onclick=receivedDiv();>Add New Message </br> </br>";
			//	str +="<div id='Report_No'style=display:none;> Report No :<input type='text' id='ReportNo' name='ReportNo'">;
			//str +="<div id='Report_No'style=display:none;> Report No :<input type='text' id='ReportNo' name='ReportNo'>";
	
			//str +="<div id='Report_No'style=display:none;> Report No :>";
			//str += "<div class='identifiers'>Message ID </div><div class='colon'>&nbsp;:&nbsp;</div> "
			//str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
				//	str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
		
			


			//str += "<div class='identifiers'>Message </div><div class='colon'>&nbsp;:&nbsp;</div> "
			//	str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
		
			//	str +="<input type='checkbox'  id='check5' name='Progress report' onclick=receivedDiv();>Add New Message </br> </br>";
			
			//	str += "</div>";

			// prasanna code...............	
				
				
				str += '</br>'
			//if(dsp == "addmessage"){
				str += '<input type="submit" class="btn" value="Save" onclick=formAddMessagesendForm("addMessage");buttonDissable()>';
			//}
		
		
			str += '<input type="button" class="btn" value = "Return to Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			
			//str += '<input type="button" class="btn" value = "Save" onclick = "">';

			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</br>'
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	

	

	
	function receivedDiv(){
   if(document.getElementById('check5').checked){
       		document.getElementById('Report_No').style.display='block';		
			}
			else{
			document.getElementById('Report_No').style.display='none';
			}
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
			dataStr += "&messageTypeID="+doc.universityCode.value;
			
			dataStr += "&messageID="+doc.universityCode.value;
			dataStr += "&message="+doc.universityTitle.value;
			alert(dataStr);

		} 
		

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;

}

function addInstallment1(){
var newStr="";
if (count ==0){
			//newStr +="<table id='myTable'>";
			newStr +="<tr>";
			newStr +="<th style='width:110px;' align='center'><div class='investLabel' style='width:110px;'><font color='black'>Installment No</font></div></th>";
			newStr +="<th style='width:80px;' align='center'><div class='investLabel' style='width:150px;' ><font color='black'>Message ID</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Message</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'></font></div></th>";
			newStr +="</tr>";
			count++;
			newStr +="<tr>";
			newStr +="<div class='info'  id='installmentInfo"+count+"' name='installmentInfo"+count+"'>";
			
			newStr += "<td style='width:110px;word-wrap:break-word;' align='center'><div class='investView' style='width:110px;' name='count"+count+"' id='count"+count+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += count+"</div></td>";
			
			newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' style='width:100px;' id='installmentValue"+count+"' name='installmentValue"+count+"' value= '"+count+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
            newStr += "<td style='width:200px;word-wrap:break-word' align='center'>";
			// dataRep['firstpaymentYYYY'] = year;
			// dataRep['firstpaymentMM'] = month;
			// dataRep['firstpaymentDD'] = date;
			
			
		
			// newStr += "<select name='firstpaymentYYYY"+count+"' value='firstpaymentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(2015, 2025, 4, dataRep['firstpaymentYYYY']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentMM"+count+"' value='firstpaymentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			// newStr += generateNumberOptions(0, 12, 2, dataRep['firstpaymentMM']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentDD"+count+"' value='firstpaymentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(0, 31, 2, dataRep['firstpaymentDD']);
			// newStr += "</select>";
				newStr += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
				//	str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
		
			
			newStr += "</td>";
			
            newStr += '<td style="width:80px;word-wrap:break-word" align="center"><input type="button" class="btn" value="Add" onclick="addInstallment1();"></td>';	
		
			newStr +="</div>";
			newStr +="</tr>";
			//newStr +="</table><br>";
			
			}
			else {
			
			count++;
			newStr +="<tr>";
			newStr +="<div class='info'  id='installmentInfo"+count+"' name='installmentInfo"+count+"'>";
			
			
			
			//000000000000000000000000000000000000000000000000000000
			newStr += "<td style='width:110px;word-wrap:break-word;' align='center'><div class='investView' style='width:110px;' name='count"+count+"' id='count"+count+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += count+"</div></td>";
			
			newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' style='width:100px;' id='installmentValue"+count+"' name='installmentValue"+count+"' value= '"+count+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
            newStr += "<td style='width:200px;word-wrap:break-word' align='center'>";
			// dataRep['firstpaymentYYYY'] = year;
			// dataRep['firstpaymentMM'] = month;
			// dataRep['firstpaymentDD'] = date;
			
			
		
			// newStr += "<select name='firstpaymentYYYY"+count+"' value='firstpaymentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(2015, 2025, 4, dataRep['firstpaymentYYYY']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentMM"+count+"' value='firstpaymentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			// newStr += generateNumberOptions(0, 12, 2, dataRep['firstpaymentMM']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentDD"+count+"' value='firstpaymentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(0, 31, 2, dataRep['firstpaymentDD']);
			// newStr += "</select>";
				newStr += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			//000000000000000000000000000000000000000000000000000000
			
			
			
			
			
			
			
			
			
			
			
			
			// newStr += "<td style='width:110px;word-wrap:break-word;' align='center'><div class='investView' style='width:110px;' name='count"+count+"' id='count"+count+"' onchange='dataRep[this.name]=this.value;'>";
			// newStr += count+"</div></td>";
			
			// newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' style='width:100px;' id='installmentValue"+count+"' name='installmentValue"+count+"' value= '"+dataRep["installmentValue"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
            //newStr += "<td style='width:200px;word-wrap:break-word' align='center'>";
			// dataRep['firstpaymentYYYY'] = year;
			// dataRep['firstpaymentMM'] = month;
			// dataRep['firstpaymentDD'] = date;
			
				// newStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Message</font></div></th>";
			
		
			// newStr += "<select name='firstpaymentYYYY"+count+"' value='firstpaymentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(2015, 2025, 4, dataRep['firstpaymentYYYY']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentMM"+count+"' value='firstpaymentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			// newStr += generateNumberOptions(0, 12, 2, dataRep['firstpaymentMM']);
			// newStr += "</select>";
			// newStr += "<select name='firstpaymentDD"+count+"' value='firstpaymentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			// newStr += generateNumberOptions(0, 31, 2, dataRep['firstpaymentDD']);
			// newStr += "</select>";
				// newStr += "<td style='width:100px;word-wrap:break-word' align='center'><input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></td>";
			
			//newStr += "</td>";
			
            newStr += '<td style="width:80px;word-wrap:break-word" align="center"><input type="button" class="btn" value="Add" onclick="addInstallment1();"></td>';	
		
			newStr +="</div>";
			newStr +="</tr>";
			//newStr +="</table><br>";
			
			}
newStr +="</table><br>";
		document.getElementById('addbtn1').style.display='none';
document.getElementById('selectedinstalmentdiv').innerHTML += newStr;

}	
	
	

