dataRep["criteriaCode"] = dataRep["criteriaTitle"] ="";
//dataRep['selecteduniversityCode']="";
function formAddCriteria(dsp) {

		str = "";
		title = "New Criteria";
		var keyDisabled = fieldDisabled = "";
		
		if(dsp == "addcriteria" || dsp == "updatecriteria" || dsp == "deletecriteria") {

			if(dsp == "updatecriteria" || dsp == "deletecriteria"){
				title = "Update Criteria";
				
				if(dsp == "deletecriteria"){
					title = "Delete Criteria";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";
				
					if(dataRep["selectedcriteria"]!=""){
					// dataRep["programmeTypeCode"] = dataRep["selectedprogrammeType"].substring(0,10);
					// dataRep["programmeTypeTitle"] = dataRep["selectedprogrammeType"].substring(11,(dataRep["selectedprogrammeType"].length));
					dataRep["criteriaCode"] = criteriaCodeArr[dataRep["selectedcriteria"]-1];
					dataRep["criteriaTitle"] = criteriaTitleArr[dataRep["selectedcriteria"]-1];
					/*dataRep["universityCode"] = universityCodeArr[dataRep["selectedprogrammeType"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedprogrammeType"]-1];*/
					//dataRep['facultyCode'] = facultyCodeArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['facultyTitle'] = facultyTitleArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['departmentCode'] = departmentCodeArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['departmentTitle'] = departmentTitleArr[dataRep["selectedprogrammeType"]-1];

				}
							
			}
			
			/*
			universityCodeStr="<option>Please scroll down to see the records</option>";
							for(i = 0; i<universityCodeLength; i++) {
							if(universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
							
							//if (departmentTitleArr.indexOf(departmentTitleArr[i])== departmentTitleArr.lastIndexOf(departmentTitleArr[i]) || (departmentTitleArr.indexOf(departmentTitleArr[i])!= departmentTitleArr.lastIndexOf(departmentTitleArr[i]) && departmentTitleArr.indexOf(departmentTitleArr[i])== i)){
				
								universityCodeStr += "<option>"+universityTitleArr[i]+"</option>";
								//universityCodeStr  += "<option>"+departmentTitleArr[i]+"-"+facultyTitleArr[i]+"-"+universityTitleArr[i]+"</option>";
								
							}
						}*/
			
			

			str  = "<div id='addprogrammeType'>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainProgrammeType" >';
			
			
			
			/*
			if(dsp != "addcriteria"){
				str += "<div class='longIdentifier'>University</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='universityCode' value= '"+dataRep["universityCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["universityTitle"]+'</label><br><br>';
				
				// str += "<div class='longIdentifier'>Faculty</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='facultyCode' value= '"+dataRep["facultyCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				// str += '<label class="textDspArea">'+dataRep["facultyTitle"]+'</label><br><br>';
				
				// str += "<div class='longIdentifier'>Department</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='departmentCode' value= '"+dataRep["departmentCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				// str += '<label class="textDspArea">'+dataRep["departmentTitle"]+'</label><br><br>';
			}*/
						
/*
			if(dsp == "addcriteria"){			
			str += "<br><div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selecteduniversityCode' onchange='dataRep[this.id]=this.selectedIndex'>";
			str += universityCodeStr;
			str += "</select></div>";
			}*/
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Criteria Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='criteriaCode' id ='criteriaCode' value= '"+dataRep["criteriaCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Criteria Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='criteriaTitle' value= '"+dataRep["criteriaTitle"]+"'   onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "<br><br><center>";
			
			
			
			if(dsp == "addcriteria"){
			str += '<input type="submit" class="btn" value="Save" onclick=formAddProgrammeTypesendForm("addcriteria")>';
			} else if(dsp == "updatecriteria") {
			str += '<input type="submit" class="btn" value="Update" onclick=formAddProgrammeTypevalidate("updatecriteria");formAddProgrammeTypesendForm("updatecriteria")>';
			} else {
			str += '<input type="submit" class="btn" value="Delete" onclick=formAddProgrammeTypesendForm("deletecriteria")>';
			}
			
			str += '<input type="button" class="btn" value = "View Criteria" onclick="sendForm('+"'data4ViewCriteria'"+')">';
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshCriteria();' >";
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}
	        function refreshCriteria(){    

	       dataRep["criteriaCode"] = dataRep["criteriaTitle"] = "";
	       //dataRep['selecteduniversity'] = "";
	       sendForm('addcriteria');
	
	
	        }
	
	
	function formViewCriteria(dsp) {

		str = "";

		if(dsp == "formViewCriteria") {

			str  = "<div id='viewcriteria'>";
			str += "<table><tr><td>"
			str += '<h2>View Criteria</h2><hr>';
			str += '<form name="maintainprogrammetype" method="POST">';
			
			dataRep['selectedcriteria'] ="";
			criteriaCodeStr="";
			
			var criteriaCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<criteriaCodeLength; i++) {
				//if(universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
				criteriaCodeStr += "<option>"+criteriaCodeArr[i]+"--"+criteriaTitleArr[i]+"</option>";
		
				
				//programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[i]+"--"+departmentTitleArr[i]+"--"+facultyTitleArr[i]+"--"+universityTitleArr[i]+"</option>";
				//}
			}
			
			
			str += "<br><center><select name='selectedcriteria' id='selectedcriteria' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += criteriaCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updatecriteria")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deletecriteria")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addcriteria'"+')>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	

		function formAddProgrammeTypevalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "addcriteria" ){

			if(frm == "addcriteria"){
				dsp = "addcriteria";
			}
			else if(frm == "updatecriteria"){
				dsp = "updatecriteria";
			} 

			doc = document.maintainprogrammeType;
			document.getElementById("msgArea").innerHTML = "";
			
			if((dataRep["criteriaCode"].trim()).length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Criteria Code with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["criteriaTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : criteria Title cannot be blank.</div>";
					error++;
				} 
			}

		}
		
		
		if(error > 0 && error != ""){
			showMenu(dsp);
		} else {
			formAddProgrammeTypesendForm(frm);
		}
		
	}
	
	
	
		function formAddProgrammeTypesendForm(frm){

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

		if(frm == 'addcriteria' || frm == 'updatecriteria' || frm == 'deletecriteria'){
 
			doc = document.maintainProgrammeType;
			dataStr +="&interface="+frm;
			
			/*if(frm != 'addcriteria'){
				dataStr += "&universityCode="+doc.universityCode.value;
			} else {
				dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversityCode"]-1];
			}*/
			
			dataStr += "&criteriaCode="+dataRep["criteriaCode"];
			dataStr += "&criteriaTitle="+dataRep["criteriaTitle"];
			//dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversityCode"]-1];
			
			//alert(dataStr);

		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}