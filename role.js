 dataRep["roleDescription"] = dataRep["roleName"] = dataRep["roleId"] ="";


 
function refreshRole(){
	dataRep["roleId"]=dataRep["roleName"]=dataRep["roleDescription"]="";
}
 
 
	function formAddRole(dsp) {


		str = "";


		if(dsp == "formAddRole") {

			str  = "<div id='addrole'>";
			str +="</div></div><br/>";
			
			
			str += "<table  ><tr><td>"
			str += '<h2 >Add New Role</h2><hr>';
			str += '<form name="maintainRole" >';
			
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Role ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='roleId' id ='roleId' value= '"+dataRep["roleId"].trim()+"'  maxlength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
		   	str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Role Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='roleName' value= '"+dataRep["roleName"].trim()+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Role Description</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='roleDescription' value= '"+dataRep["roleDescription"].trim()+"'  maxlength='50' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			

			str += "<br><br><center>";

		
			str += "<input type='button' class='btn' value='Save' onclick=formAddRolesendForm('addrole')>"; 
			str += "<input type='button' class='btn' value='Update' onclick=formAddRolesendForm('updaterole')>"; 
			str += "<input type='button' class='btn' value='Delete' onclick=formAddRolesendForm('deleterole')>"; 
			
			
			str += "<input type='button' class='btn' value='View Role' onclick=formAddRolesendForm('deleterole')>"; 
		
			
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = refreshRole();showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}

	
	
	function formAddRolesendForm(frm){

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

		if(frm == 'addrole'){
			doc = document.maintainRole;
			dataStr += "&interface="+frm;
			
			dataStr += "&roleId="+doc.roleId.value;
			dataStr += "&roleName="+doc.roleName.value;
			dataStr += "&roleDescription="+doc.roleDescription.value;
//alert(dataStr);

		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}