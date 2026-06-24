dataRep["courseUnitCode"]=dataRep["courseUnitTitle"]="";
var PracticalChecked="";
var TheoryChecked="";
dataRep['method1']=dataRep['method2']="";

function resetcouesrUnit(){
//alert("okk");
 dataRep["courseUnitCode"] = dataRep["courseUnitTitle"] = dataRep["method1"] = dataRep["method2"] = "";
 PracticalChecked = TheoryChecked= "";
 showMenu('addNewCourseUnit');
}



	function formAddNewCourseUnit(dsp){
		title = "Add New Course Unit";
		var keyDisabled = fieldDisabled = "";
 
		str = "";

			
		if(dsp == "addNewCourseUnit" || dsp == "updateNewCourseUnit" || dsp == "deleteNewCourseUnit" ) {
	
			if(dsp == "updateNewCourseUnit" || dsp == "deleteNewCourseUnit"){
					title = "Update Course Unit ";
				
						if(dsp == "deleteNewCourseUnit"){
							title = "Delete Course Unit ";
							fieldDisabled = "Disabled";
						}
				
				
						if(dataRep["selectedCourseUnitCode"]!=""){
							dataRep["courseUnitCode"] = courseUnitCodeArr[dataRep["selectedCourseUnitCode"]-1];
							dataRep["courseUnitTitle"] = courseUnitTitleArr[dataRep["selectedCourseUnitCode"]-1];
							dataRep["method1"] = method1Arr[dataRep["selectedCourseUnitCode"]-1];
							dataRep["method2"] = method2Arr[dataRep["selectedCourseUnitCode"]-1];
						}

				keyDisabled = "Disabled";
			}
	
	
		
			str  = "<div id='addNewCourseUnit'>";
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainNewCourseUnit" >';

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Course Unit Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='courseUnitCode' id='courseUnitCode' value= '"+dataRep["courseUnitCode"]+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+keyDisabled+">";
			str += "</div>";
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'> Course Unit Title </div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='courseUnitTitle' name='courseUnitTitle'  value= '"+dataRep["courseUnitTitle"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Method</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;<div class='chkbox'>";
				if(dataRep['method1'] == 'Practical'){
                       PracticalChecked = 'checked';
               }
               if(dataRep['method2'] == 'Theory'){
                       TheoryChecked = 'checked';
               }
          
               
		   str +='<input type="checkbox" name="method1" id="method1" value="Practical"';
		   str += PracticalChecked;
		   str +=" onchange='dataRep[this.name]=this.value;'"+fieldDisabled+"/>Practical";
		   str +='<input type="checkbox" name="method2" id="method2" value="Theory"';
		   str += TheoryChecked ;
		   str +=" onchange='dataRep[this.name]=this.value;'"+fieldDisabled+"/>Theory</div></div></div></br>";
		   

			str +="<div style='float:left;clear:both' >";
			
			if(dsp == "addNewCourseUnit"){
			str += '<input type="submit" class="btn" value="Save" onclick=formNewCourseUnitsendForm("addNewCourseUnit")>';
			} else if(dsp == "updateNewCourseUnit") {
			str += '<input type="submit" class="btn" value="Update" onclick=formNewCourseUnitsendForm("updateNewCourseUnit")>';
			} else {
			str += '<input type="submit" class="btn" value="Delete" onclick=formNewCourseUnitsendForm("deleteNewCourseUnit")>';
			}
	        str += '<input type="button" class="btn" value = "Reset Values " onclick=resetcouesrUnit();>';
			str += '<input type="button" class="btn" value = "View Course Unit" onclick="sendForm('+"'data4ViewNewCourseUnit'"+')">';
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		
		}
		return str;
 
	}


 
	function formViewNewCourseUnit(dsp) {

		str = "";
		if(dsp =="formViewNewCourseUnit") {

			str  = "<div id='viewCourseUnit'>";
			str += "<table><tr><td>"
			str += '<h2>View Course Unit </h2><hr>';
			str += '<form name="maintainNewCourseUnit2" method="POST">';
			
			dataRep['selectedCourseUnitCode'] ="";
			courseUnitCodeStr="";
			
			var courseUnitCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<courseUnitCodeLength; i++) {
		//alert(CourseUnitCodeArr[i]);
				courseUnitCodeStr += "<option>"+courseUnitCodeArr[i]+"--"+courseUnitTitleArr[i]+"</option>";
			}

			str += "<br><center><select name='selectedCourseUnitCode' id='selectedCourseUnitCode' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += courseUnitCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateNewCourseUnit")>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteNewCourseUnit")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'addCourseUnit2'"+')>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
 
 
 
 
 function formNewCourseUnitsendForm(frm){
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

		if(frm == 'addNewCourseUnit' || frm == "updateNewCourseUnit" || frm == "deleteNewCourseUnit" ){
		
		doc = document.maintainNewCourseUnit;
		dataStr +="&interface="+frm;
			
			
			
			if(frm != 'addNewCourseUnit'){
				dataStr +="&courseUnitCode="+doc.courseUnitCode.value;//alert(dataStr);
			} else {
				dataStr +="&courseUnitCode="+courseUnitCodeArr[dataRep["selectedCourseUnitCode"]-1];//alert(dataStr);
			}
			
			
			dataStr +="&courseUnitCode="+doc.courseUnitCode.value;
			dataStr +="&courseUnitTitle="+doc.courseUnitTitle.value;
			
			if((document.getElementById('method1').checked == true)&&(document.getElementById('method2').checked == true)){
				dataStr +="&method="+"Both";
			}
			if(document.getElementById('method1').checked == true){
				dataStr +="&method="+"Practical";
			}
			if(document.getElementById('method2').checked == true){
				dataStr +="&method="+"Theory";
			}
			
			
		//alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
 
 }
 
 