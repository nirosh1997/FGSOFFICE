

	function formFaculty(dsp){
	 
		title = "Add New Faculty";
		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "addfaulty" || dsp == "updatefaulty" || dsp == "deletefaulty") {

			if(dsp == "updatefaulty" || dsp == "deletefaulty"){
				title = "Update Fculty";
				
				if(dsp == "deletefaulty"){
					title = "Delete Faculty";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedFaculty"] != "0"){
					dataRep["facultyCode"] = facultyCodeArr[dataRep["selectedFaculty"]-1];
					dataRep["facultyTitle"] = facultyTitleArr[dataRep["selectedFaculty"]-1];
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedFaculty"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedFaculty"]-1];

				}
			}
			facultyCodeStr="<option>Please scroll down to see the records</option>";
			for(uniLoop = 0; uniLoop<universityCodeLength; uniLoop++) {
						facultyCodeStr += "<option>"+universityTitleArr[uniLoop]+"</option>";
				}
			
			str  = "<div id='addfaulty'>";
			str += "<table ><tr><td>"
			str += "<div>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainFaculty">';   

			if(dsp == "addfaulty"){
			
			str += "<br><div class='identifiers'>University</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selecteduniversity' onchange='dataRep[this.id]=this.selectedIndex'>";
			str += facultyCodeStr;
			str += "</select>";
			//str += "</select></div>";
			}	
			
			if(dsp != "addfaulty"){
				str += "<div class='identifiers'>University</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='universityCode' value= '"+dataRep["universityCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["universityTitle"]+'</label><br>';
			}

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Faculty Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='facultyCode' id ='facultyCode' value= '"+dataRep["facultyCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Faculty Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='facultyTitle' value= '"+dataRep["facultyTitle"].trim()+"' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			
			str +="</div><br>";
			//str +="<div>";   
			
			str += "<br><br><center>";
				
			if(dsp == "addfaulty"){
				str += '<input type="submit" class="btn" value="Save" onclick=formFacultysendForm("addfaulty");>';
			} else if(dsp == "updatefaulty"){
				str += '<input type="submit" class="btn" value="Update" onclick=formFacultysendForm("updatefaulty");>';
			} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formFacultysendForm("deletefaulty")>';
			}
		
			str += '<input type="button" class="btn" value = "View Faculty" onclick="sendForm('+"'data4ViewFaculty'"+')">';
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshFaculty();' >";
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
			
			
			
				
			
				
				
				//str +="<input type='button'  id='save' class='btn' value='Save' onclick=formFacultysendForm('addfaulty')>"; 
				// str += '<input type="button" class="btn" value = "View Faculty" onclick="sendForm('+"'data4ViewFaculty'"+')">';
			    // str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshFaculty();' >";
				// str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
				// str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				// str +="</div>";		
				// str +='</div>';
				// str +='</div></form>';
				// str += '</div>';
				// str += '</td></tr></table>';
				// str += '</div>';
			
			}

			return str;
		}
			function refreshFaculty(){    

	           dataRep["facultyCode"] = dataRep["facultyTitle"] = "";
               dataRep['selecteduniversity'] = "";
               sendForm('data4addfaulty');
	
       }
	
		
		
		
	function formViewFaculty(dsp) {

		str = "";

		if(dsp == "formViewFaculty") {

			facultyCode = facultyTitle = "";

			str  = "<div id='viewfaculty'>";
			str += "<table><tr><td>"
			str += '<h2>View Faculty</h2><hr>';
			str += '<form name="viewUnit" method="POST">';


			facultyCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<facultyCodeLength; i++) {
				//unitCodeStr += "<option>"+unitCodeArr[i]+" "+unitTitleArr[i]+"</option>";
				facultyCodeStr += "<option> "+facultyTitleArr[i]+"--"+universityTitleArr[i]+"</option>";
			}
			
			str += "<br><center><select id='selectedFaculty' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += facultyCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updatefaulty")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deletefaulty")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick="sendForm('+"'data4addfaulty'"+')">';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}

	function formFacultyvalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "addfaulty" || frm == "updatefaulty"  ){

			if(frm == "addfaulty"){
				dsp = "addfaulty";
			} else if(frm == "updatefaulty"){
				dsp = "updatefaulty";
			} 

			doc = document.maintainFaculty;
			document.getElementById("msgArea").innerHTML = "";
			
			if((dataRep["facultyCode"].trim()).length != FACULTYCODELENGTH || dataRep["facultyCode"].trim() =="" ){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Faculty Code with less than 5 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["facultyTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Faculty Title cannot be blank.</div>";
					error++;
				} 
			}

		}
		
		
		if(error > 0){
			showMenu(dsp);
			//alert("yes");
		} else {
		formFacultysendForm(frm);	
		}
		
	}
	
		
		function formFacultysendForm(frm){

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

		if(frm == 'addfaulty' || frm == 'updatefaulty' || frm == 'deletefaulty'){
 
			doc = document.maintainFaculty;
			dataStr += "&interface="+frm;
			
			if(frm != 'addfaulty'){
				dataStr += "&universityCode="+doc.universityCode.value;
			} else {
				dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
			}
			dataStr += "&facultyCode="+dataRep["facultyCode"];
			dataStr += "&facultyTitle="+dataRep["facultyTitle"];
			//alert(dataStr);

		} 
		

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;

}