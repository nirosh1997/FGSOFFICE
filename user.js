dataRep['selectedroleName']="";
dataRep["userName1"]=dataRep["ReturnroleName"]=dataRep["ReturnuserName"]="";
dataRep["userId1"]="";
dataRep["passWd1"]="";
dataRep["position"]="";
dataRep["userName3"]="";
dataRep['assign']="";
dataRep['selection']="";
dataRep['selection2']="";
dataRep['selection3']="";
dataRep['exYYYY'] = dataRep['exDD'] =dataRep['exMM'] ="";
var DepartmentChecked = ProgrammeChecked ="";
// function refreshUser(){
	// dataRep["userId"]=dataRep["passWd"]=dataRep["userName"]="";
	// //showMenu('formAdministratorMenu');
// }
function formUser(dsp) {
	
	var DepartmentChecked = ProgrammeChecked ="";

		str = "";
		title = "Create New User";
		keyDisabled = fieldDisabled = "";

		if(dsp == "adduser" || dsp == "updateuser" || dsp == "deleteuser") {

			if(dsp == "updateuser" || dsp == "deleteuser"){
				title = "Change Password";
				
				if(dsp == "deleteuser"){
					title = "Delete User Account";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";
            
				if(dataRep["selectedUser"] != "0"){
					dataRep["userId1"] = userIdArr1[dataRep["selectedUser"]-1];
					dataRep["passWd1"] = passWdArr1[dataRep["selectedUser"]-1];
					dataRep["userName1"] = userNameArr1[dataRep["selectedUser"]-1];
					//dataRep["departmentCode1"] = departmentCodeArr1[dataRep["selectedUser"]-1];
					//dataRep["departmentTitle1"] = departmentTitleArr1[dataRep["selectedUser"]-1];
					//dataRep["facultyCode1"] =facultyCodeArr1[dataRep["selectedUser"]-1];
					//dataRep["facultyTitle1"] = facultyTitleArr1[dataRep["selectedUser"]-1];
					//dataRep["universityCode1"] = universityCodeArr1[dataRep["selectedUser"]-1];
					//dataRep["universityTitle1"] = universityTitleArr1[dataRep["selectedUser"]-1];
					

				}

			}

					

			str  = "<div id='adduser'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainUser">';

			if(dsp == "adduser"){ 
			
			universityCodeLength = testLength;
			facultyCodeLength = testLength;
			departmentCodeLength = testLength;
			degreeCodeLength  = testLength;

				
				roleIdStr="<option>Please scroll down to see the records</option>";

				for(i = 0; i<roleIdLength; i++) {
				//if (roleNameArr[i]!= "Student"){
					roleIdStr += "<option>"+roleNameArr[i]+"</option>";
				//}
				}
				str += "<div class='identifiers'>Role Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<select id='selectedroleName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += roleIdStr;
				str += '</select><br><br>';
				
				
				
				
				
				facultyCodeStr="<option>Please scroll down to see the records</option>";
			
				for(i = 0; i<testLength; i++) {
				if (facultyCodeArr.indexOf(facultyCodeArr[i]) == facultyCodeArr.lastIndexOf(facultyCodeArr[i]) || (facultyCodeArr.indexOf(facultyCodeArr[i]) != facultyCodeArr.lastIndexOf(facultyCodeArr[i]) && facultyCodeArr.indexOf(facultyCodeArr[i])==i)){
					//if (facultyCodeArr[i] != facultyCodeArr[i-1] && facultyTitleArr[i] != ""){
						facultyCodeStr += "<option>"+facultyTitleArr[i]+"</option>";
				}
					//}
				}
				
				
				str += "<div class='identifiers'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<select id='selectedDepartment' onchange='dataRep[this.id]=this.value;'>";
				str += facultyCodeStr;
				str += '</select><br><br>';
				
				
				str +="<div class='identifiers' >Division</div><div class='colon'>&nbsp;:&nbsp;</div>";
	

				str +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onchange=>";
				if(dataRep['assign']== 'Department'){
				DepartmentChecked = 'checked';
				} else if(dataRep['assign']=='Programme'){
				ProgrammeChecked = 'checked'
				}


				str +="<input  type='radio' name='assign' id='assignDepartment' value= 'Department'";
				str +=DepartmentChecked;
				str +=" onclick='dataRep[this.name]=this.value;getDepartment();hideDisplay();'>Assign to a Department";
				str +="<input  type='radio' name='assign' id='assignProgramme' value= 'Programme'";
				str +=ProgrammeChecked;
				str +=" onclick=dataRep[this.name]=this.value;getDegree();hideDisplay();>Assign to a Programme</div></div>";
				
				str += "</div>";

				str +="</div>";	
				
				
				str +="<div id='selectedDepartment1'></div>";
				str +="<div id='selectedCourse'></div>";
				str +="<div id='selectedCourse1'></div>";
			
			
			
			
				
			}

			if(dsp != "adduser"){

				str += "<div style='clear:both'>";
				str += "<div class='identifiers'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
				//str += "<div class='viewArea' >&nbsp;"+dataRep["universityCode"].trim()+"</div>";
				str += "<div' class='viewArea' >&nbsp;&nbsp;University of Kelaniya</div>";
				str += "</div><br>";

				str += "<div style='clear:both'>";
				str += "<div class='identifiers'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
				//str += "<div class='viewArea' >&nbsp;"+dataRep["facultyCode"].trim()+"</div>";
				if(dataRep["facultyTitle1"]=="Admin"){
					
					str += "<div' class='viewArea' >&nbsp;&nbsp;Faculty of Garduate Studies</div>";
				}else{
					str += "<div' class='viewArea' >&nbsp;&nbsp;"+dataRep["facultyTitle1"]+"</div>";
				}
				str += "</div><br><br>";

				// str += "<div style='clear:both'>";
				// str += "<div class='identifiers'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> "
				// str += "<div class='viewArea' >&nbsp;"+dataRep["departmentCode"].trim()+"</div>";
				// str += "<div' class='viewArea' >&nbsp;&nbsp;"+dataRep["departmentTitle"]+"</div>";
				// str += "</div>";
			}

			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Name</div><div class='colon'>&nbsp;:&nbsp;</div> "//
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='userName1' value= '"+dataRep["userName1"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>User ID</div><div class='colon'>&nbsp;:&nbsp;</div> "//
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='userId1' placeholder='Eg:-u.perera' value= '"+dataRep["userId1"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Password</div><div class='colon'>&nbsp;:&nbsp;</div> "//
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='password' name='passWd1' value= '"+dataRep["passWd1"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div><br>";

			if(dsp == "adduser"){
			
			str +="<hr>";
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Assigned By</div><div class='colon'>&nbsp;:&nbsp;</div> "//
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='userName3' value= '"+dataRep["userName3"]+"'   onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Position</div><div class='colon'>&nbsp;:&nbsp;</div> "//
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='position' value= '"+dataRep["position"]+"'   onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str +="<div class='identifiers'>User Account Expiration Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select name='exDD' value='exDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(01, 31, 2, dataRep['exDD']);
			str += "</select>";
			str += "<select name='exMM' value='exMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(01, 12, 2, dataRep['exMM']);
			str += "</select>";
			str += "<select name='exYYYY' value='exYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2016, 2050, 4, dataRep['exYYYY']);
			str += "</select></div></div></br>";

			
			}
			
			
			



			str += "<br><br><center>";

			if(dsp == "adduser"){
				str += '<input type="button" class="btnD" value="Save" onclick=formUserRegistrationsendForm("adduser")>';
			} else if(dsp == "updateuser") {
				str += '<input type="button" class="btnD" value="Update" onclick=formUserRegistrationsendForm("updateUser")>';
			} else {
				str += '<input type="button" class="btnD" value="Delete" onclick=formUserRegistrationsendForm("deleteUser")>';
			}
			
			
			//str += "<input type='button' class='btnD' value='Reset Values'  onclick='refreshUser();' >";
			//str += '<input type="button" class="btnD" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+');refreshUser();>';
			if (dataRep['roleName']=='Administrator'){
				str += '<input type="button" class="btnD" value = "View Users" onclick ="sendForm('+"'data4ViewUser'"+')">';
			    str += '<input type="button" class="btnD" value = "Back to Administrator Menu" onclick ="showMenu('+"'formAdministratorMenu'"+');refreshUser();">';
			}
		    if (dataRep['roleName']=='Subject Clerk')
		   {
			str += '<input type="button" class="btnD" value = "View Users" onclick ="sendForm('+"'data4ViewUser'"+')">';
			str += '<input type="button" class="btnD" value = "Back" onclick ="showMenu('+"'formClerkMenu'"+');refreshUser();">';
		   }
           if(dataRep['roleName']=='Dean')
		  {	str += '<input type="button" class="btnD" value = "View Users" onclick ="sendForm('+"'data4ViewUser'"+')">';
			str += '<input type="button" class="btnD" value = "Back" onclick ="showMenu('+"'formDeanMenu'"+');refreshUser();">';	    
		  }
            if(dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator')
		  {	
			str += '<input type="button" class="btnD" value = "Return" onclick ="showMenu('+"'formCoordinatorMenu'"+');refreshUser();">';	    
		  }
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}


	function refreshUser(){    

	dataRep["userId1"] = dataRep["passWd1"] = dataRep["userName1"] = "";
	dataRep['selectedfaculty'] = "";
	dataRep['selecteddepartment'] = "";
	dataRep['selectedroleName'] = "";
	
	
	
	}

	function formViewUser(dsp) {

		str = "";
		userIdStr = "";

		if(dsp == "formViewUser") {

			str  = "<div id='viewuser'>";
			str += "<table  ><tr><td>"
			str += '<h2 ></h2><hr>';
			str += '<form name="viewUser" method="POST">';
			dataRep["selectedUser"]="";
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr1[i] && userIdArr1[i] !=""){
					dataRep['ReturnroleName']=roleNameArr1[i];
					dataRep['ReturnuserName']=userNameArr1[i];
				}
		    
		   }
		
			userIdStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<userIdLength; i++) {
				if (roleNameArr1[i]=='Administrator'){
					var role='Administrator';
				}
			}
			//alert(dataRep['ReturnroleName']);
			//alert(dataRep['ReturnuserName']);
			
			//if (dataRep['ReturnroleName']=='Administrator'){
				for(i = 0; i<userIdLength; i++) {
					if (userNameArr1.indexOf(userNameArr1[i]) == userNameArr1.lastIndexOf(userNameArr1[i]) || (userNameArr1.indexOf(userNameArr1[i]) != userNameArr1.lastIndexOf(userNameArr1[i]) && userNameArr1.indexOf(userNameArr1[i])==i)){

					  userIdStr += "<option>"+userNameArr1[i]+"</option>";
					  dataRep["facultyTitle1"]=facultyTitleArr1[i];
					}
				}
			//}
			// else{
				// for(i = 0; i<userIdLength; i++) {
				// //alert(dataRep['userIdLength']);
				// if ( dataRep['ReturnuserName']==userNameArr1[i] && userNameArr1[i]!=userNameArr1[i-1]){
				// userIdStr += "<option>"+userNameArr1[i]+"--"+departmentTitleArr1[i]+"--"+facultyTitleArr1[i]+"--University of Kelaniya</option>";
				// dataRep["facultyTitle1"]=facultyTitleArr1[i];
				// }
			// }
			// }
			
			
		
			
			str += "<br><center><select id='selectedUser' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += userIdStr;
			str += "</select></center><br><br>";
			str += '<button class="btnD" onclick=showMenu("updateuser")>Update</button>';
			if (role=='Administrator'){
			    str += '<button class="btnD" onclick=showMenu("deleteuser")>Delete</button>';
			    str += '<input type="button" class="btnD" value = "Back" onclick="sendForm('+"'data4AddUser'"+')">';
			    str += '<input type="button" class="btnD" value = "Back to Administrator Menu" onclick ="showMenu('+"'formAdministratorMenu'"+');refreshUser();">';
			}
		
		    if (dataRep['ReturnroleName']=='Subject Clerk')
		   {	
			str += '<input type="button" class="btnD" value = "Return " onclick ="showMenu('+"'formClerkMenu'"+');refreshUser();">';
		   }
           if(dataRep['ReturnroleName']=='Dean')
		  {
	
			str += '<input type="button" class="btnD" value = "Back" onclick ="showMenu('+"'formDeanMenu'"+');refreshUser();">';	    
		  }
          if(dataRep['ReturnroleName']=='Coordinator')
		  {	
			str += '<input type="button" class="btnD" value = "Back" onclick ="showMenu('+"'formCoordinatorMenu'"+');refreshUser();">';	    
		  }			
			
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}

function getDepartment()
{
	var assign="";
	var assign2="";
	var newStr="";
	var newStr1="";

	if(dataRep['assign']== 'Department'){
	assign = "Department";
	} else if(dataRep['assign']=='Programme'){
	assign2 = "Degree Programme";
	}
	
	
	departmentTitleStr="<option>Please scroll down to see the records</option>";
		for(g = 0; g<testLength; g++) {
		
				if(dataRep['assign']== 'Department'){
					if (departmentTitleArr.indexOf(departmentTitleArr[g]) == departmentTitleArr.lastIndexOf(departmentTitleArr[g]) || (departmentTitleArr.indexOf(departmentTitleArr[g]) != departmentTitleArr.lastIndexOf(departmentTitleArr[g]) && departmentTitleArr.indexOf(departmentTitleArr[g])==g)){
						if(facultyTitleArr[g]==dataRep["selectedDepartment"]){
							departmentTitleStr += "<option>"+departmentTitleArr[g]+"</option>";
							//alert(departmentTitleArr[g]);
						}
					}
				
				}
				
				
				
		}

			newStr += "<div class='identifiers'>"+assign+"</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<select id='selection' onchange='dataRep[this.id]=this.value;'>";
			newStr += departmentTitleStr;
			newStr += "</select>";

			
				
	document.getElementById('selectedDepartment1').innerHTML=newStr;


				
}	

function getDegree()
{
	var assign="";
	var assign2="";
	var assign3="";
	var newStr="";
	var newStr1="";
	var newStr2="";
	var TitleStr="";

	if(dataRep['assign']== 'Department'){
	assign = "Department";
	} else if(dataRep['assign']=='Programme'){
	assign2 = "Programme One";
	} else if(dataRep['assign']=='Programme'){
	assign3 = "Programme Two";
	}
	

		TitleStr="<option>Please scroll down to see the records</option>";
		for(i = 0; i<testLength; i++) {
		
				if(dataRep['assign']=='Programme'){
				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
						if(facultyTitleArr[i]==dataRep["selectedDepartment"]){
							TitleStr += "<option>"+degreeTitleArr[i]+"</option>";
						
						
					}
					}
				}
		}

			
			
			newStr1 += "<div class='identifiers'>"+assign2+"</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr1 += "<select id='selection2' onchange='dataRep[this.id]=this.value;'>";
			newStr1 += TitleStr;
			newStr1 += "</select>";
			
		
		
			TitleStr1="<option>Please scroll down to see the records</option>";
		for(i = 0; i<testLength; i++) {
		
				if(dataRep['assign']=='Programme'){
				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
						if(facultyTitleArr[i]==dataRep["selectedDepartment"]){
							TitleStr1 += "<option>"+degreeTitleArr[i]+"</option>";
						
						
					}
					}
				}
		}

			
			
			newStr2 += "<div class='identifiers'>Programme Two</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr2 += "<select id='selection3' onchange='dataRep[this.id]=this.value;'>";
			newStr2 += TitleStr1;
			newStr2 += "</select>";
			
				


	document.getElementById('selectedCourse').innerHTML=newStr1;
	document.getElementById('selectedCourse1').innerHTML=newStr2;
				
}



function hideDisplay(){
	//alert("ok");
	
	if(document.getElementById('assignProgramme').checked == true){
		//alert("ok22");
	document.getElementById('selectedDepartment1').style.display = 'none';
	document.getElementById('selectedCourse').style.display = 'block';
	document.getElementById('selectedCourse1').style.display = 'block';
	}

	if(document.getElementById('assignDepartment').checked == true){
		//alert("ok22");
	document.getElementById('selectedCourse').style.display = 'none';
	document.getElementById('selectedCourse1').style.display = 'none';
	document.getElementById('selectedDepartment1').style.display = 'block';
	}  
}

	
			
	function formUserRegistrationsendForm(frm){

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

			if(frm == 'adduser' || frm == 'updateUser' || frm == 'deleteUser'){
			doc = document.maintainUser;
			dataStr += "&interface="+frm;
			if(frm == 'updateUser'){

				//dataStr += "&universityCode="+"KLN";
				//dataStr += "&facultyCode="+dataRep["facultyCode1"];
				//dataStr += "&departmentCode="+dataRep["departmentCode1"];
				dataStr += "&userId="+userIdArr1[dataRep["selectedUser"]-1];
				dataStr += "&userName="+userNameArr1[dataRep["selectedUser"]-1];
				
				dataStr += "&passWd="+doc.passWd1.value;

			} 
			else {
				
				dataStr += "&universityCode="+"KLN"; 

				
				for(x=0; x <facultyTitleArr.length; x++){
					if (facultyTitleArr[x] == dataRep['selectedDepartment']){
						dataRep['selectedDepartment']=x;
					}

				}
				dataStr += "&facultyCode="+facultyCodeArr[dataRep["selectedDepartment"]];//alert(facultyCodeArr[dataRep["selectedOffering2"]]);
					
				
				var dep=dataRep['selection'];
				for(z=0; z <departmentTitleArr.length; z++){
					
					//alert(dataRep['selection']);
					if (departmentTitleArr[z] == dataRep['selection']){
						dataRep['selection']=z; //alert(z);
					}

				}

				if(document.getElementById('assignDepartment').checked == true){
					if(dep=="Department of Botany"){
						//alert("ok");
						dataStr += "&departmentCode=SCDEP00001"; 
					}
					else{
					//alert("dep");
					dataStr += "&departmentCode="+departmentCodeArr[dataRep["selection"]];//alert(departmentCodeArr[dataRep["selection"]]);
					}
				}
				
				
	
				for(a=0; a <degreeTitleArr.length; a++){
					if (degreeTitleArr[a] == dataRep['selection2']){
						dataRep['selection2']=a;
					}

				}
				
				if(document.getElementById('assignProgramme').checked == true){
					//alert("degree");
					dataStr += "&departmentCode="+degreeCodeArr[dataRep["selection2"]];//alert(facultyCodeArr[dataRep["selectedOffering2"]]);
					
				}
			
			
				for(d=0; d <degreeTitleArr.length; d++){
					if (degreeTitleArr[d] == dataRep['selection3']){
						dataRep['selection3']=d;
					}

				}
				
				if(document.getElementById('assignProgramme').checked == true){
					//alert("degree");
					dataStr += "&programmeCode="+degreeCodeArr[dataRep["selection3"]];//alert(facultyCodeArr[dataRep["selectedOffering2"]]);
					
				}
			

				dataStr += "&roleId="+roleIdArr[dataRep["selectedroleName"]-1];
				
				dataStr += "&userId="+doc.userId1.value;
				dataStr += "&passWd="+doc.passWd1.value;
				dataStr += "&userName="+doc.userName1.value;
				
				dataStr += "&assignedBy="+dataRep["userName3"];
				dataStr += "&position="+dataRep["position"];
		
				dataStr += "&expirationDate="+doc.exDD.value+"/"+doc.exMM.value+"/"+doc.exYYYY.value;
				
				
				alert("User Account Added Successfully");
				
				
			}
			
				//dataStr += "&passWd="+doc.passWd1.value;
				//dataStr += "&userName="+doc.userName1.value;
				

//alert(dataStr);

		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}
	
	
	
	

	
	
	
	
	