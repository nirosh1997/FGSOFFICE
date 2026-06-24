//rismila
var DepartmentStr ="";
dataRep['dummyfaculty']=new Array();
dataRep['dummyfaculty']=["Faculty of Science","Faculty of Social Science","Faculty of Commerce and Management","Faculty of Humanities","Faculty of Medicine","Faculty of Graduate Studies"];


				
//chinthaka
function formDepartment(dsp){

title = "Add New Department";

		str = "";

		if(dsp == "adddepartment" || dsp == "updatedepartment" || dsp == "deletedepartment") {

			if(dsp == "updatedepartment" || dsp == "deletedepartment"){
				title = "Update Department";
				
				if(dsp == "deletedepartment"){
					title = "Delete Department";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedDepartment"] != "0"){
					dataRep["departmentCode"] = departmentCodeArr[dataRep["selectedDepartment"]-1];
					dataRep["departmentTitle"] = departmentTitleArr[dataRep["selectedDepartment"]-1];
					dataRep["facultyCode"] = facultyCodeArr[dataRep["selectedDepartment"]-1];
					dataRep["facultyTitle"] = facultyTitleArr[dataRep["selectedDepartment"]-1];
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedDepartment"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedDepartment"]-1];

				}
				
			}
			
			DepartmentCodeStr="<option>Please scroll down to see the records</option>";
				
				for(deploop = 0; deploop<facultyCodeLength; deploop++) {
					
					DepartmentCodeStr  += "<option>"+facultyTitleArr[deploop]+"--"+universityTitleArr[deploop]+"</option>";
				}
			
			
			
				str  = "<div id='adddepartment'>";
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				str += '<form name="maintainDepartment"><br><br>';
				str += "<div style='float:left'>";
				
				if(dsp != "adddepartment"){
				str += "<div class='longIdentifier'>University</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='universityCode' value= '"+dataRep["universityCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["universityTitle"]+'</label><br />';
				str += "<div class='longIdentifier'>Faculty</div> <div class='colon'>&nbsp;:&nbsp;</div> <input type='text' name='facultyCode' value= '"+dataRep["facultyCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<br><label class="textDspArea">'+dataRep["facultyTitle"]+'</label>';
			}
				
				if(dsp == "adddepartment"){
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
		        str += "<div style='float:left' >&nbsp;";
				str += "<select id='selecteduniversity' name='selecteduniversity' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += DepartmentCodeStr ;
				str += "</select></div>";
				
				}
				
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Department Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='departmentCode' id='departmentCode' onchange='dataRep[this.name]=this.value;' value='"+dataRep['departmentCode'].trim()+"' maxlength='10' "+keyDisabled+" >";
				str += "</div>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Department Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='departmentTitle' id='departmentTitle' onchange='dataRep[this.name]=this.value' value= '"+dataRep['departmentTitle'].trim()+"'  "+fieldDisabled+">";
				str += "</div>";
				
				
				
				str += "<br><br><center>";
				
			if(dsp == "adddepartment"){
				str += '<input type="submit" class="btn" value="Save" onclick=formDepartmentsendForm("adddepartment");>';
			} else if(dsp == "updatedepartment") {
				str += '<input type="submit" class="btn" value="Update" onclick=formDepartmentsendForm("updatedepartment")>';
			} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formDepartmentsendForm("deletedepartment")>';
			}
			str += '<input type="button" class="btn" value = "View Department" onclick ="sendForm('+"'data4ViewDepartment'"+')">';
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshDepartment();' >"; 
				//str += "<input type='button' class='btn' value='Save' onclick=formDepartmentvalidate('addDepartment');formDepartmentsendForm('addDepartment');>"; 
				str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}

	 function refreshDepartment(){    

	           dataRep["departmentCode"] = dataRep["departmentTitle"] = "";
	           dataRep['selectedfaulty'] = "";
	           sendForm('adddepartment');
	
	
	}
	
		function formViewDepartment(dsp) {

		str = "";
		departmentCodeStr = "";

		if(dsp == "formViewDepartment") {

			departmentCode = departmentTitle = "";

			str  = "<div id='viewdepartment'>";
			str += "<table><tr><td>"
			str += '<h2>View Department</h2><hr>';
			str += '<form name="viewDepartment" method="POST">';

			dataRep["selectedDepartment"]="";
			departmentCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<departmentCodeLength; i++) {
			if (departmentCodeArr.indexOf(departmentCodeArr[i])== departmentCodeArr.lastIndexOf(departmentCodeArr[i]) || (departmentCodeArr.indexOf(departmentCodeArr[i])!= departmentCodeArr.lastIndexOf(departmentCodeArr[i]) && departmentCodeArr.indexOf(departmentCodeArr[i])== i)){					
					
				departmentCodeStr += "<option>"+departmentTitleArr[i]+" "+facultyTitleArr[i]+" "+universityTitleArr[i]+"</option>";
			}
			}
			str += "<br><center><select id='selectedDepartment' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += departmentCodeStr;
			str += "</select></center><br><br><br><br>";

			str += '<button class="btn" onclick=showMenu("updatedepartment")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deletedepartment")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick="sendForm('+"'data4addDepartment'"+')">';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
	
	
	
	function formDepartmentvalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "adddepartment" || frm == "updatedepartment"   ){

			if(frm == "adddepartment"){
				dsp = "adddepartment";
			} else if(frm == "updatedepartment"){
				dsp = "updatedepartment";
			} 

			doc = document.maintainDepartment;
			document.getElementById("msgArea").innerHTML = "";
			
			if((dataRep["departmentCode"].trim()).length != 5){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Department Code with less than 5 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["departmentTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Department Title cannot be blank.</div>";
					error++;
				} 
			}

		}
		
		
		if(error > 0){
			showMenu(dsp);
		} else {
			formDepartmentsendForm(frm);
		}
		
	}


	
			
	function formDepartmentsendForm(frm){
	
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
		
		if(frm == 'adddepartment' || frm == 'updatedepartment' || frm == 'deletedepartment'){
 
			doc = document.maintainDepartment;
			dataStr += "&interface="+frm;
			if(frm != 'adddepartment'){
				dataStr += "&universityCode="+doc.universityCode.value;
				dataStr += "&facultyCode="+doc.facultyCode.value;
			} else {
				//alert('ok');
				dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
				dataStr += "&facultyCode="+facultyCodeArr[dataRep["selecteduniversity"]-1];
			}
			dataStr += "&departmentCode="+doc.departmentCode.value;
			dataStr += "&departmentTitle="+doc.departmentTitle.value;
			//alert(dataStr);

		}

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
	}
		