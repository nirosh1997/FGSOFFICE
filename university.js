
function resetuniversity(){
alert("ok");
dataRep["universityCode"] = dataRep["universityTitle"] ="";
}



function formAddUniversity(dsp) {

		var title = "Add New University";
		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "adduniversity" || dsp == "updateuniversity" || dsp == "deleteuniversity") {

			if(dsp == "updateuniversity" || dsp == "deleteuniversity"){
				title = "Update University";
				
				if(dsp == "deleteuniversity"){
					title = "Delete University";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedUniversity"] != ""){
					dataRep["universityCode"] = dataRep["selectedUniversity"].substring(0,3);
					dataRep["universityTitle"] = dataRep["selectedUniversity"].substring(4,(dataRep["selectedUniversity"].length));
				}
			}
			str  = "<div id='adduniversity'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainUniversity" >';
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>UniverSity Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='universityCode' id ='universityCode' value= '"+dataRep["universityCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>University Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='universityTitle'  id = 'universityTitle' value= '"+dataRep["universityTitle"].trim()+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "<br><br><center>";
				
			if(dsp == "adduniversity"){
				str += '<input type="submit" class="btn" value="Save" onclick=formAddUniversitysendForm("adduniversity");>';
			} else if(dsp == "updateuniversity") {
				str += '<input type="submit" class="btn" value="Update" onclick=formAddUniversitysendForm("updateuniversity");>';
			} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formAddUniversitysendForm("deleteuniversity")>';
			}
		
			str += '<input type="button" class="btn" value = "View University" onclick="sendForm('+"'data4ViewUniversity'"+')">';
			str += "<input type='reset' class='btn' value='Reset Values'   >";
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
		function formViewUniversity(dsp) {

		str = "";

		if(dsp == "formViewUniversity") {

			instituteCode = instituteTitle = "";

			str  = "<div id='viewuniversity'>";
			str += "<table><tr><td>"
			str += '<h2>View university</h2><hr>';
			str += '<form name="maintainviewuniversity" method="POST">';
			
			var universityCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<universityCodeLength; i++) {
				universityCodeStr += "<option>"+universityCodeArr[i]+" "+universityTitleArr[i]+"</option>";
			}
			str += "<br><center><select name='selectedUniversity' onchange='dataRep[this.name]=this.value;'>";
			str += universityCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateuniversity")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteuniversity")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'adduniversity'"+')>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
		function formAddUniversityvalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "adduniversity" || frm == "updateuniversity" ){

			if(frm == "adduniversity"){
				dsp = "adduniversity";
			} else if(frm == "updateuniversity"){
				dsp = "updateuniversity";
			} 
			

			doc = document.maintainUniversity;
			document.getElementById("msgArea").innerHTML = "";
			
		
			
			if((dataRep["universityCode"].trim()).length != 3 || dataRep["universityCode"].trim() ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : UniverSity Code with less than 3 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["universityTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : University Title cannot be blank.</div>";
					error++;
				} 
			}

		}
		
		
		if(error > 0 && error != ""){//
		 //alert("yes");
			showMenu(dsp);
		} else {
		 //alert("no");
			formAddUniversitysendForm(frm);
		}
		
	}
	
	
	
	
function formAddUniversitysendForm(frm){

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

		if(frm == 'adduniversity' || frm == 'updateuniversity' || frm == 'deleteuniversity'){
 
			doc = document.maintainUniversity;
			dataStr += "&interface="+frm;
			dataStr += "&universityCode="+doc.universityCode.value;
			dataStr += "&universityTitle="+doc.universityTitle.value;
			//alert(dataStr);

		} 
		

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;

}

