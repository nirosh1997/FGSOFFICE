//chinthaka
var DepartmentStr ="";
dataRep['dummyfaculty']=new Array();
dataRep['dummyfaculty']=["A","B","C","D","E"];

dataRep['subcategoryCode']=dataRep['subcategoryTitle']= dataRep["selectedCategoryCode"]="";
				

function formAddSubcategory(dsp){

title = "Add New Sub Category";

		str = "";
		var keyDisabled = fieldDisabled = "";

		if(dsp == "addSubCategory" || dsp == "updateSubCategory" || dsp == "deleteSubCategory"){
		
		if(dsp == "updateSubCategory" || dsp == "deleteSubCategory"){
					title = "Update Sub Category";
				
						if(dsp == "deleteSubCategory"){
							title = "Delete Sub Category ";
							fieldDisabled = "Disabled";
						}
				
				
						if(dataRep["selectedSubCategoryCode"]!=""){
							dataRep["subcategoryCode"] = subcategoryCodeArr[dataRep["selectedSubCategoryCode"]-1];
							dataRep["subcategoryTitle"] = subcategoryTitleArr[dataRep["selectedSubCategoryCode"]-1];
							dataRep["categoryCode"] = categoryCodeArr[dataRep["selectedSubCategoryCode"]-1];
							dataRep["categoryTitle"] = categoryTitleArr[dataRep["selectedSubCategoryCode"]-1];
						}

				keyDisabled = "Disabled";
			}
			
						
				categoryCodeStr="<option>Please scroll down to see the records</option>";
					for(subLoop=0; subLoop<categoryCodeLength; subLoop++) {
					//alert(categoryCodeArr[subLoop]);
						categoryCodeStr += "<option>"+categoryCodeArr[subLoop]+"--"+categoryTitleArr[subLoop]+"</option>";
				}
		
				str  = "<div id='addSubCategory'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				str += '<form name="maintainSubcategory"><br><br>';
				str += "<div style='float:left'>";
			
			if(dsp == "addSubCategory"){
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Category Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
		        str += "<div style='float:left' >";
				str += "<select id='selectedCategoryCode' name='selectedCategoryCode' onchange='dataRep[this.id]=this.selectedIndex;' >";
				str += categoryCodeStr ;
				str += "</select></div>";
			}
			
				if(dsp != "addSubCategory"){
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Category</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='categoryCode' value= '"+dataRep["categoryCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["categoryTitle"]+'</label><br>';
				}
			
			
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Sub Category Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='subcategoryCode' id='subcategoryCode' onchange='dataRep[this.name]=this.value;' value= '"+dataRep['subcategoryCode'].trim()+"'  maxlength='10' "+keyDisabled+" >";
				str += "</div>";
				
				str += "<div style='clear:both'>";
				str += "<div class='longIdentifier'>Sub Category Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
				str += "<div style='float:left' >&nbsp;";
				str += "<input type='text' name='subcategoryTitle' id='subcategoryTitle' onchange='dataRep[this.name]=this.value' value= '"+dataRep['subcategoryTitle'].trim()+"'  "+fieldDisabled+">";
				str += "</div>";
				str += "<br><br><center>";
				
				
				if(dsp == "addSubCategory"){
				str += '<input type="submit" class="btn" value="Save" onclick=formAddNewSubCategorysendForm("addSubCategory")>';
					} else if(dsp == "updateSubCategory") {
				str += '<input type="submit" class="btn" value="Update" onclick=formAddNewSubCategorysendForm("updateSubCategory")>';
					} else {
				str += '<input type="submit" class="btn" value="Delete" onclick=formAddNewSubCategorysendForm("deleteSubCategory")>';
				}
			
				
				//str += '<input type="button" class="btn" value = "View Sub Category" onclick="sendForm('+"'data4ViewSubCategory'"+')">';
				str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formBudgetDetails'"+')>';
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
	
	function formViewSubCategory(dsp) {

		str = "";
		if(dsp =="formViewSubCategory") {

			str  = "<div id='viewSubCategory'>";
			str += "<table><tr><td>"
			str += '<h2>View Sub Category </h2><hr>';
			str += '<form name="maintainSubCategory" method="POST">';
			
			dataRep['selectedSubCategoryCode'] ="";
			CategorySubCodeStr="";
			
			var CategorySubCodeStr="<option>Please scroll down to see the records</option>";
			for(subCodeloop = 0; subCodeloop<subcategoryCodeLength; subCodeloop++) {
		//alert(subcategoryTitleArr[subCodeloop]);
				CategorySubCodeStr += "<option>"+subcategoryCodeArr[subCodeloop]+"--"+subcategoryTitleArr[subCodeloop]+"</option>";
			}

			str += "<br><center><select name='selectedSubCategoryCode' id='selectedSubCategoryCode' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += CategorySubCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateSubCategory")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteSubCategory")>Delete</button>';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'addSubCategory'"+')>';
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
	
	
	function formAddNewSubCategorysendForm(frm) {
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
		
		if(frm == 'addSubCategory' || frm == "updateSubCategory" || frm == "deleteSubCategory"){
 
			doc = document.maintainSubcategory;
			dataStr += "&interface="+frm;
			
			if(frm != 'addSubCategory'){
				dataStr += "&categoryCode="+doc.categoryCode.value;
				//[dataRep["selectedCategoryCode"]-1];//alert(dataStr);
			} else {
				dataStr +="&categoryCode="+categoryCodeArr[dataRep["selectedCategoryCode"]-1];//alert(dataStr);
			}
			dataStr += "&subcategoryCode="+doc.subcategoryCode.value;
			dataStr += "&subcategoryTitle="+dataRep["subcategoryTitle"];
			
				alert(dataStr);
		
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		
		return 0;
	
}
			
		
				
