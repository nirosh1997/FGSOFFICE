// var category = new Array();
// category['types'] = new Array();
// category['types'] = ["Income","Expenditure"];
dataRep["categoryTitle"]=dataRep["categoryCode"]="";

var IncomeChecked="";
var ExpenditureChecked="";
dataRep['categoryType1']=dataRep['categoryType2']="";

function formAddNewCategory(dsp){

	var keyDisabled = fieldDisabled = "";

	title = "Add New Category";

		str = "";
		if(dsp == "addNewCategory" || dsp == "updateNewCategory" || dsp == "deleteNewCategory"){
		
		if(dsp == "updateNewCategory" || dsp == "deleteNewCategory"){
					title = "Update New Category";
				
						if(dsp == "deleteNewCategory"){
							title = "Delete New Category ";
							fieldDisabled = "Disabled";
						}
				
				
						if(dataRep["selectedCategoryCode"]!=""){
							dataRep["categoryCode"] = categoryCodeArr[dataRep["selectedCategoryCode"]-1];
							dataRep["categoryTitle"] = categoryTitleArr[dataRep["selectedCategoryCode"]-1];
							dataRep["categoryType1"] = categoryType1Arr[dataRep["selectedCategoryCode"]-1];
							dataRep["categoryType2"] = categoryType2Arr[dataRep["selectedCategoryCode"]-1];
						}

				keyDisabled = "Disabled";
			}
				str  = "<div id='addNewCategory'>";
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				str += '<form name="maintainNewCategory">'; 
				
				
				
				str += "<div class='longIdentifier'>Category Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='categoryCode' id='categoryCode' value= '"+dataRep["categoryCode"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+keyDisabled+">";
				str += "</div>";
			
				str += "<div class='longIdentifier'>Category Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='categoryTitle' id='categoryTitle' value= '"+dataRep["categoryTitle"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+">";
				str += "</div>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Method</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;<div class='chkbox'>";
				if(dataRep['categoryType1'] == 'Income'){
                       IncomeChecked = 'checked';
					}
				if(dataRep['categoryType2'] == 'Expenditure'){
                       ExpenditureChecked = 'checked';
					}
          
               
		   str +='<input type="checkbox" name="categoryType1" id="categoryType1" value="Income"';
		   str += IncomeChecked;
		   str +=" onchange='hims[this.name]=this.value;'"+fieldDisabled+"/>Income";
		   str +='<input type="checkbox" name="categoryType2" id="categoryType2" value="Expenditure"';
		   str += ExpenditureChecked ;
		   str +=" onchange='hims[this.name]=this.value;'"+fieldDisabled+"/>Expenditure</div></div></div></br>";
				
				// str += "<div class='longIdentifier'>Category Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
				// str += "<div style='float:left' >&nbsp;";
				
				
				// var categoryTypeStr;
     
				// for(i = 0; i<category['types'].length; i++) {
				// categoryTypeStr += "<option>"+category['types'][i]+"</option>";
				// }
				// str += "<select id='categorytype' name='categorytype' onchange='category[this.name]=this.value;'>";
				// str += categoryTypeStr;
				// str += "</select><br/><br/>";
				// str += "</div>";
				
				
				str +="<div style='float:left;clear:both' >";
			
					if(dsp == "addNewCategory"){
				str += '<input type="submit" class="btn" value="Save" onclick=formAddNewCategorysendForm("addNewCategory")>';
					} else if(dsp == "updateNewCategory") {
				str += '<input type="submit" class="btn" value="Update" onclick=formAddNewCategorysendForm("updateNewCategory")>';
					} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formAddNewCategorysendForm("deleteNewCategory")>';
				}
			
			//	str += '<input type="button" class="btn" value = "View New Category" onclick="sendForm('+"'data4ViewNewCategory'"+')">';
				str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formBudgetDetails'"+')>';
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
				
				}
		return str;
	}
	
	
	function formViewNewCategory(dsp) {

		str = "";
		if(dsp =="formViewNewCategory") {

			str  = "<div id='viewNewCategory'>";
			str += "<table><tr><td>"
			str += '<h2>View Course Unit </h2><hr>';
			str += '<form name="maintainNewCategory" method="POST">';
			
			dataRep['selectedCategoryCode'] ="";
			CategoryCodeStr="";
			
			var CategoryCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<categoryCodeLength; i++) {
		//alert(CourseUnitCodeArr[i]);
				CategoryCodeStr += "<option>"+categoryCodeArr[i]+"--"+categoryTitleArr[i]+"</option>";
			}

			str += "<br><center><select name='selectedCategoryCode' id='selectedCategoryCode' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += CategoryCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateNewCategory")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteNewCategory")>Delete</button>';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'addNewCategory'"+')>';
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
 
	
	function formAddNewCategorysendForm(frm){

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

		if(frm == 'addNewCategory' || frm == "updateNewCategory" || frm == "deleteNewCategory"){
 
			doc = document.maintainNewCategory;
			dataStr += "&interface="+frm;
			
			if(frm != 'addNewCategory'){
				dataStr +="&categoryCode="+doc.categoryCode.value;//alert(dataStr);
			} else {
				dataStr +="&categoryCode="+categoryCodeArr[dataRep["selectedCategoryCode"]-1];//alert(dataStr);
			}
			
			dataStr += "&categoryCode="+doc.categoryCode.value;
			dataStr += "&categoryTitle="+dataRep["categoryTitle"];
			//dataStr += "&categoryType="+doc.categorytype.value;
			
			if(document.getElementById('categoryType1').checked == true){
				dataStr +="&categoryType="+"Income";
			}
			if(document.getElementById('categoryType2').checked == true){
				dataStr +="&categoryType="+"Expenditure";
			}
			//alert(dataStr);
			}
			
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
	}
	