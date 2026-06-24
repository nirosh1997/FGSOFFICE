dataRep["programmeTypeCode"] = dataRep["programmeTypeTitle"] ="";
dataRep['selecteduniversityCode']="";
function formAddProgrammeType(dsp) {

		str = "";
		title = "New Programme Type";
		var keyDisabled = fieldDisabled = "";
		
		if(dsp == "addprogrammeType" || dsp == "updateprogrammeType" || dsp == "deleteprogrammeType") {

			if(dsp == "updateprogrammeType" || dsp == "deleteprogrammeType"){
				title = "Update ProgrammeType";
				
				if(dsp == "deleteprogrammeType"){
					title = "Delete ProgrammeType";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";
				
					if(dataRep["selectedprogrammeType"]!=""){
					// dataRep["programmeTypeCode"] = dataRep["selectedprogrammeType"].substring(0,10);
					// dataRep["programmeTypeTitle"] = dataRep["selectedprogrammeType"].substring(11,(dataRep["selectedprogrammeType"].length));
					dataRep["programmeTypeCode"] = programmeTypeCodeArr[dataRep["selectedprogrammeType"]-1];
					dataRep["programmeTypeTitle"] = programmeTypeTitleArr[dataRep["selectedprogrammeType"]-1];
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedprogrammeType"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedprogrammeType"]-1];
					//dataRep['facultyCode'] = facultyCodeArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['facultyTitle'] = facultyTitleArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['departmentCode'] = departmentCodeArr[dataRep["selectedprogrammeType"]-1];
					// dataRep['departmentTitle'] = departmentTitleArr[dataRep["selectedprogrammeType"]-1];

				}
							
			}
			
			
			universityCodeStr="<option>Please scroll down to see the records</option>";
							for(i = 0; i<universityCodeLength; i++) {
							if(universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
							
							//if (departmentTitleArr.indexOf(departmentTitleArr[i])== departmentTitleArr.lastIndexOf(departmentTitleArr[i]) || (departmentTitleArr.indexOf(departmentTitleArr[i])!= departmentTitleArr.lastIndexOf(departmentTitleArr[i]) && departmentTitleArr.indexOf(departmentTitleArr[i])== i)){
				
								universityCodeStr += "<option>"+universityTitleArr[i]+"</option>";
								//universityCodeStr  += "<option>"+departmentTitleArr[i]+"-"+facultyTitleArr[i]+"-"+universityTitleArr[i]+"</option>";
								
							}
						}
			
			

			str  = "<div id='addprogrammeType'>";
			str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainProgrammeType" >';
			
			
			
			
			if(dsp != "addprogrammeType"){
				str += "<div class='longIdentifier'>University</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='universityCode' value= '"+dataRep["universityCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["universityTitle"]+'</label><br><br>';
				
				// str += "<div class='longIdentifier'>Faculty</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='facultyCode' value= '"+dataRep["facultyCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				// str += '<label class="textDspArea">'+dataRep["facultyTitle"]+'</label><br><br>';
				
				// str += "<div class='longIdentifier'>Department</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='departmentCode' value= '"+dataRep["departmentCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				// str += '<label class="textDspArea">'+dataRep["departmentTitle"]+'</label><br><br>';
			}
						

			if(dsp == "addprogrammeType"){			
			str += "<br><div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selecteduniversityCode' onchange='dataRep[this.id]=this.selectedIndex'>";
			str += universityCodeStr;
			str += "</select></div>";	
			}
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Programme Type Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='programmeTypeCode' id ='programmeTypeCode' value= '"+dataRep["programmeTypeCode"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Programme Type Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='programmeTypeTitle' value= '"+dataRep["programmeTypeTitle"].trim()+"'   onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "<br><br><center>";
			
			
			
			if(dsp == "addprogrammeType"){
			str += '<input type="submit" class="btn" value="Save" onclick=formAddProgrammeTypesendForm("addprogrammeType")>';
			} else if(dsp == "updateprogrammeType") {
			str += '<input type="submit" class="btn" value="Update" onclick=formAddProgrammeTypevalidate("updateprogrammeType");formAddProgrammeTypesendForm("updateprogrammeType")>';
			} else {
			str += '<input type="submit" class="btn" value="Delete" onclick=formAddProgrammeTypesendForm("deleteprogrammeType")>';
			}
			
			str += '<input type="button" class="btn" value = "View ProgrammeType" onclick="sendForm('+"'data4ViewProgrammeType'"+')">';
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshProgrammeType();' >";
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}
	        function refreshProgrammeType(){    

	       dataRep["programmeTypeCode"] = dataRep["programmeTypeTitle"] = "";
	       dataRep['selecteduniversity'] = "";
	       sendForm('addprogrammeType');
	
	
	        }
	
	
	function formViewProgrammeType(dsp) {

		str = "";

		if(dsp == "formViewProgrammeType") {

			str  = "<div id='viewprogrammetype'>";
			str += "<table><tr><td>"
			str += '<h2>View Programme Type</h2><hr>';
			str += '<form name="maintainprogrammetype" method="POST">';
			
			dataRep['selectedprogrammeType'] ="";
			programmeTypeCodeStr="";
			
			var programmeTypeCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<programmeTypeCodeLength; i++) {
				//if(universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
				programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[i]+"--"+universityTitleArr[i]+"</option>";
		
				
				//programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[i]+"--"+departmentTitleArr[i]+"--"+facultyTitleArr[i]+"--"+universityTitleArr[i]+"</option>";
				//}
			}
			
			
			str += "<br><center><select name='selectedprogrammeType' id='selectedprogrammeType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programmeTypeCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateprogrammeType")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteprogrammeType")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addprogrammeType'"+')>';
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

		if(frm == "addprogrammeType" ){

			if(frm == "addprogrammeType"){
				dsp = "addprogrammeType";
			}
			else if(frm == "updateprogrammeType"){
				dsp = "updateprogrammeType";
			} 

			doc = document.maintainprogrammeType;
			document.getElementById("msgArea").innerHTML = "";
			
			if((dataRep["programmeTypeCode"].trim()).length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Programme Type Code with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["programmeTypeTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Programme Type Name cannot be blank.</div>";
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

		if(frm == 'addprogrammeType' || frm == 'updateprogrammeType' || frm == 'deleteprogrammeType'){
 
			doc = document.maintainProgrammeType;
			dataStr +="&interface="+frm;
			
			if(frm != 'addprogrammeType'){
				dataStr += "&universityCode="+doc.universityCode.value;
			} else {
				dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversityCode"]-1];
			}
			
			dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			dataStr += "&programmeTypeTitle="+dataRep["programmeTypeTitle"];
			//dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversityCode"]-1];
			
			//alert(dataStr);

		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}