


function formBudgetDetails(dsp){

title = "Budget Details";

		str = "";

		if(dsp == "formBudgetDetails"){
				str  = "<div id='addBudgetDetails'>";
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				str += '<form name="maintainBudgetDetails">';
				str += "<center>";
				str += '<input type="button" id="btnlog" class="btn" value="Add New Category"  onclick = showMenu('+"'addNewCategory'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="Add New Sub Category" onclick ="sendForm('+"'data4addSubcategory'"+');" ></div>';
				str += '<input type="button" id="btnlog" class="btn" value="Add New Item" onclick ="showMenu('+"'formAdditem'"+');" ></div>';
				str += '<input type="button" class="btn" value = "Estimate Budget" onclick ="sendForm('+"'data4AddCategory'"+');sendForm('+"'data4Budgetsheet'"+');" >';
				str += '<input type="button" class="btn" value = "Revise Budget" onclick ="sendForm('+"'data4BudgetSheetData'"+');" >';
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
	