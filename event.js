dataRep['deadlineYYYY'] = dataRep['deadlineMM'] = dataRep['deadlineDD'] = "";
var categoryTitleList ="";				
dataRep["selecteddegreeTitle"] = dataRep["selectedcategoryTitle"] ="";
dataRep["paymentDeadlineDate"] = dataRep["notification"] ="";
var investigationData = new Array();
dataRep["selecteddegree"] =dataRep["listcategoryTitle"] ="";

function formEventManagment(dsp) {


		str = "";
		title = "Event Managment";

		if(dsp == "addEvent" || dsp == "updateEvent" || dsp == "deleteEvent") {
			
			
			if(dsp == "updateEvent" || dsp == "deleteEvent"){
				title = "Update Events";
				
				if(dsp == "deleteEvent"){
					title = "Delete Events";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";
				
				
				if(dataRep["selectedEvent"] != "0"){
					dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedEvent"]-1];
					dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedEvent"]-1];
					dataRep["categoryTitle"] = categoryTitleArr[dataRep["selectedEvent"]-1];
					dataRep["categoryCode"] = categoryCodeArr[dataRep["selectedEvent"]-1];
					dataRep["paymentDeadlineDate"] = paymentDeadlineDateArr[dataRep["selectedEvent"]-1];
					dataRep["notification"] = notificationArr[dataRep["selectedEvent"]-1];

				}
				
				
				
			}

			str  = "<div id='addEvent'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainformEventManagment"><br><br>';

			
			if(dsp == "addEvent"){
				degreeCodeStr="<option>Please scroll down to see the records</option>";
				for(degreeLoop=0; degreeLoop<degreeCodeArr.length; degreeLoop++){
						
				//if (degreeTitleArr.indexOf(degreeTitleArr[degreeLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degreeLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degreeLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degreeLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degreeLoop])==degreeLoop)){
				//if (degreeCodeArr[degreeLoop] != degreeCodeArr[degreeLoop-1] && degreeTitleArr[degreeLoop] != ""){		
						degreeCodeStr += "<option>"+degreeTitleArr[degreeLoop]+"</option>";
				//}

				}
				str += "<div class='longIdentifier'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selecteddegree' name='selecteddegree' onchange='dataRep[this.id]=this.selectedIndex;alert(dataRep[this.id]=this.selectedIndex);'>";
				str += degreeCodeStr;
				str += "</select>";
				
				
				
				
				categoryStr="<option>Please scroll down to see the records</option>";
				for(i=0; i<categoryCodeLength; i++){
						
						
						categoryStr += "<option>"+categoryTitleArr[i]+"</option>";
				

				}
				str += "<div class='longIdentifier'>Category (Fee)</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedcatrgory' onchange='dataRep[this.id]=this.selectedIndex'>";
				str += categoryStr;
				str += "</select>";
				
				dataRep['deadlineYYYY'] = year;
				dataRep['deadlineMM'] = month;
				dataRep['deadlineDD'] = date;
				
				
				str +="<div class='longIdentifier'>Dead Line Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
				str += "<select name='deadlineYYYY' value='deadlineYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
				str += generateNumberOptions(2015, 2025, 4, dataRep['deadlineYYYY']);
				str += "</select>";
				str += "<select name='deadlineMM' value='deadlineMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
				str += generateNumberOptions(0, 12, 2, dataRep['deadlineMM']);
				str += "</select>";
				str += "<select name='deadlineDD' value='deadlineDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
				str += generateNumberOptions(0, 31, 2, dataRep['deadlineDD']);
				str += "</select>";
				str += "</div></div>";
				
			
			
			}
			
			if(dsp != "addEvent"){
				
				str += "<div class='longIdentifier'>Degree</div><div class='colon'> &nbsp;:&nbsp;</div><input type='text' name='degreeCode' value= '"+dataRep["degreeCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<label class="textDspArea">'+dataRep["degreeTitle"]+'</label><br />';
				str += "<div class='longIdentifier'>Category (Fee)</div> <div class='colon'>&nbsp;:&nbsp;</div> <input type='text' name='categoryCode' value= '"+dataRep["categoryCode"].trim()+"' maxlength='10' "+keyDisabled+" onchange='dataRep[this.name]=this.value'>";
				str += '<br><label class="textDspArea">'+dataRep["categoryTitle"]+'</label>';
				
				
				dataRep['deadlineYYYY'] = year;
				dataRep['deadlineMM'] = month;
				dataRep['deadlineDD'] = date;
				
				
				str +="<div class='longIdentifier'>Extend Dead Line Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
				str += "<select name='deadlineYYYY' value='deadlineYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
				str += generateNumberOptions(2015, 2025, 4, dataRep['deadlineYYYY']);
				str += "</select>";
				str += "<select name='deadlineMM' value='deadlineMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
				str += generateNumberOptions(0, 12, 2, dataRep['deadlineMM']);
				str += "</select>";
				str += "<select name='deadlineDD' value='deadlineDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
				str += generateNumberOptions(0, 31, 2, dataRep['deadlineDD']);
				str += "</select>";
				
				str += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
				str += '<label class="textDspArea">'+dataRep["paymentDeadlineDate"]+'</label>';
			
				str += "</div></div>";
			}
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Notification</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";	
			str += "<textarea rows='auto'  name='notification' id='notification'  style='width:200%;float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			str +=dataRep["notification"];
			str +=" </textarea></div>";
			
			
			
		
		
		str +="<div style='clear:both'>&nbsp;</div>"
		
			if(dsp == "addEvent"){
				str += '<input type="button" class="btn" value="Save" onclick=formEventManagmentsendForm("addEvent");>';
			} else if(dsp == "updateEvent") {
				str += '<input type="button" class="btn" value="Update" onclick=formEventManagmentsendForm("updateEvent");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formEventManagmentsendForm("deleteEvent");>';
			}
		
		
		
		
		//str += '<input type="button" id="save" class="btn" value="Save"  onclick=formEventManagmentsendForm("addEvent");></div>';
		str += '<input type="button" id="view" class="btn" value="View Events"  onclick=sendForm('+"'data4viewEvent'"+');></div>';
		
		str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
		
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';	
		

		str += '</td></tr></table>';
		str += "</div>";
		
		}

		return str;
	}

	
	
	function formViewEvent(dsp) {

		str = "";
		//testCodeStr = "";

		if(dsp == "formViewEvent") {

			

			str  = "<div id='viewevent'>";
			str += "<table><tr><td>"
			str += '<h2>View Events</h2><hr>';
			str += '<form name="viewevent" method="POST">';

			dataRep["selectedEvent"]="";
			degreeCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<degreeCodeLength; i++) {
				
					degreeCodeStr += "<option>"+degreeTitleArr[i]+"</option>";
				
			}
			str += "<br><center><select id='selectedEvent' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateEvent");>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteEvent");>Delete</button>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

function formEventManagmentsendForm(frm){
	
		var doc, dataStr;

		var eventStr ="";
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addEvent' || frm == 'updateEvent' || frm == 'deleteEvent'){
 
			doc = document.maintainformEventManagment;
			dataStr += "&interface="+frm;
			
			
			if(frm != 'addEvent'){
				dataStr += "&degreeCode="+doc.degreeCode.value; 
				dataStr += "&categoryCode="+doc.categoryCode.value; 
			} else {
				dataStr += "&degreeCode="+degreeCodeArr[dataRep["selecteddegree"]-1];
				dataStr += "&categoryCode="+categoryCodeArr[dataRep["selectedcatrgory"]-1];
			}
			dataStr += "&paymentDeadlineDate="+doc.deadlineYYYY.value+"/"+doc.deadlineMM.value+"/"+doc.deadlineDD.value;
			dataStr += "&notification="+document.getElementById('notification').value;

		
			// if(frm == 'addEvent' ){
				// dataStr += "&degreeCode="+degreeCodeArr[dataRep["selecteddegree"]-1];
				// dataStr += "&categoryCode="+categoryCodeArr[dataRep["selectedcatrgory"]-1];
			
			// }	
			// else{
				// dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedEvent"]-1];
				// dataStr += "&categoryCode="+categoryCodeArr[dataRep["selectedEvent"]-1];
			// }
				// // dataStr += "&degreeCode="+doc.degreeCode.value; 
				// // dataStr += "&categoryCode="+doc.categoryCode.value; 
			
				// dataStr += "&paymentDeadlineDate="+doc.deadlineYYYY.value+"/"+doc.deadlineMM.value+"/"+doc.deadlineDD.value;
				// dataStr += "&notification="+document.getElementById('notification').value;
			
		alert(dataStr);

		}

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
	}
		









