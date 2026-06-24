//chinthaka
var DepartmentStr ="";
dataRep['dummyfaculty']=new Array();
dataRep['dummyfaculty']=["A","B","C","D","E"];

dataRep['itemTitle']=dataRep['itemCode']="";
				

function formAdditem(dsp){

title = "Add New Item";

		str = "";

		if(dsp == "formAdditem"){
				str  = "<div id='addItem'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				str += '<form name="maintainItemForm"><br><br>';
				str += "<div style='float:left'>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Item ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='itemCode' id='itemCode' onchange='dataRep[this.name]=this.value;' value='"+dataRep['itemCode'].trim()+"' maxlength='10' "+fieldDisabled+" >";
				str += "</div>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Item Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='itemTitle' id='itemTitle' onchange='dataRep[this.name]=this.value' value= '"+dataRep['itemTitle'].trim()+"'  "+fieldDisabled+">";
				str += "</div>";
				
				
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Sub Category Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
		        str += "<div style='float:left' >";
			
				//DepartmentStr="<option>select</option>";
				
				
				str += "<select id='SubCategoryTitle' name='SubCategoryTitle' onchange='hims[this.name]=this.value;'>";
				//str += DepartmentStr ;
				str += "</select></div>";
				str += "<br><br><center>";
	
				str += "<input type='button' class='btn' value='Save' onclick=sendForm('addprogrammeType')>"; 
				str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formBudgetDetails'"+')>';
				
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
			
		
				
