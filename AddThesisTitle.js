////Coded by S.Suraweera////
////28.06.2015-----
dataRep["tid"]=dataRep["newThesisTopic"]=dataRep["title"]="";
var StudentNameList="";
function setValuesThesisTitle(){

	for(i=0; i<studentNoLength;i++){

		if(dataRep["studentName"]==studentNameArr[i]){

			//dataRep["studentName"]=studentNameArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["studentNo"]==studentNoArr[i];
			dataRep["thesisTopicOne"]=thesisTopicOneArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			
			
			//dataRep["thesisTopicTwo"]=thesisTopicTwoArr[i];
			//dataRep["thesisTopicThree"]=thesisTopicThreeArr[i];
			//dataRep["thesisTopicFour"]=thesisTopicFourArr[i];
			//alert(tidArr[i]+titleArr[i]);
		}
	}
		
} 

function formAddThesisTitle(dsp) {
		str = "";
		//examinerStr = "";
		title = "Submission of Thesis Title";

		if(dsp == "formAddThesisTitle") { 
			
			
			
			str += "<div id='addThesisTitle'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformAddThesisTitle">';
			
			
			for(studentNoLoop=0; studentNoLoop< studentNoLength; studentNoLoop++){
			
			if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				if(studentNameArr[studentNoLoop] != ""){
				StudentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
				}
			 }
		
			}
		
			
			

			str +="<div class='identifiers' style='clear:none;'>Thesis ID</div><div class='colon'>:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='tid' >"+dataRep["title"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
					
			
			
			// str +="<div class='identifiers' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str += "<textarea rows='auto'  name='title' id='title'  style='float:left;width:250px'  onchange='dataRep[this.name]=this.value;setValuesThesisTitle()' "+fieldDisabled+">";
			// str +=dataRep["title"];
			// str +="</textarea></div>";
			
			str +="<div class='identifiers'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			//str +="<div class='viewArea'>";
			
			str +="<center><input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesThesisTitle();'>";
			str += "<datalist id='liststudentName'>"+StudentNameList+"</datalist>";
			str += "</div></center>"; 
			
			
			str += '<input type="button" style="margin-top:0px" class="btnB" value="Search" onclick=sendForm('+"'data4AddThesisTitle'"+');>';
		
			
			// str +="<div class='identifiers'>Thesis ID</div><div class='colon'>&nbsp;:&nbsp;</div>";
			
			
			// str +="<center><input type='text' name='thesisID' id='thesisID' value= '"+dataRep["tid"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesThesisTitle();'>";
			// //str += "<datalist id='liststudentName'>"+StudentNameList+"</datalist>";
			// str += "</div></center>"; 
			
			// str +="<div class='identifiers'>Selected Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			
			
			// str +="<center><input type='text' name='thesisTitle' id='thesisTitle' value= '"+dataRep["title"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesThesisTitle();'>";
			// //str += "<datalist id='liststudentName'>"+StudentNameList+"</datalist>";
			// str += "</div></center>"; 
			
			
			
			if(programmeTypeCodeArr[i] == "PRO0000011"){
			
			thesisTitle="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(studentNameArr[i] == dataRep["studentName"] ){
							dataRep["studentNo"] = studentNoArr[i];
							
						if (thesisTopicOneArr.indexOf(thesisTopicOneArr[i])== thesisTopicOneArr.lastIndexOf(thesisTopicOneArr[i]) || (thesisTopicOneArr.indexOf(thesisTopicOneArr[i])!= thesisTopicOneArr.lastIndexOf(thesisTopicOneArr[i]) && thesisTopicOneArr.indexOf(thesisTopicOneArr[i])== i)){					
					
							thesisTitle += "<option>"+thesisTopicOneArr[i]+"</option>";
							//thesisTitle += "<option>"+thesisTopicTwoArr[i]+"</option>";
							//thesisTitle += "<option>"+thesisTopicThreeArr[i]+"</option>";
							//thesisTitle += "<option>"+thesisTopicFourArr[i]+"</option>";
								}
							}
							}
							
							str += "<center><div class='identifiers'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedTitle' onchange='dataRep[this.id]=this.selectedIndex;'>";
							str += thesisTitle;
							str += "</select></center><br></div>";
			}
			
			else{
			
			
			 str +="<div class='identifiers'>Enter the New Thesis Topic</div><div class='colon'>&nbsp;:&nbsp;</div>";
		
			 str +="<textarea rows='auto'  name='newThesisTopic' id='newThesisTopic'  style='float:left;width:450px;height:100px'  onchange='dataRep[this.name]=this.value'"+fieldDisabled+">";
			 str += dataRep["newThesisTopic"];
			 str +=" </textarea>";
			 str+="</div>";
			
			}
			//BOS
			
			str+="<br><div style='float:left;'>";
			
				str+="<div style='clear:both;'><div>BOS No</div><div class='colon'></div>";
				str +="<div style='float:left;width:205px'><input type='text' name='bosNo' id='bosNo"+testNum+"' style='width:160px'";
				str += "value= '"+dataRep['bosNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div><br/>";
								 
			
			str+="<div>Received Date From BOS</div>";
								
				dataRep['receivedbYYYY'] = "";
				dataRep['receivedbMM'] = "";
				dataRep['receivedbDD'] = "";
			
								 
			str += "<select name='receivedbYYYY' value='receivedbYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['receivedbYYYY']);
			str += "</select>";
			str += "<select name='receivedbMM' value='receivedbMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['receivedbMM']);
			str += "</select>";
			str += "<select name='receivedbDD' value='receivedbDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['receivedbDD']);
			str += "</select><br>";
			
			str +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Reject</label>";
			str +="<input  type='checkbox' name='bosReject'  id='bosRejectChk' class='changeColor'  value='Bos Reject'></div>";
			str +=BOSChecked;
								
			//FGS
			
			//str+="<div style='float:left;'>";
			str+="<div style='clear:both;'><div>FGS No</div><div class='colon'></div>";
			str +="<div style='float:left;width:205px'><input type='text' name='fgsNo' id='fgsNo"+testNum+"' style='width:160px'";
			str += "value= '"+dataRep['fgsNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
			
			str+="<br/><class='colon'><div style='margin-top:0px;'>FGS Date</div>";
								 
			dataRep['fgsYYYY'] = "";
			dataRep['fgsMM'] = "";
			dataRep['fgsDD'] = "";
			
								 
			str += "<select name='fgsYYYY' value='fgsYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['fgsYYYY']);
			str += "</select>";
			str += "<select name='fgsMM' value='fgsMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['fgsMM']);
			str += "</select>";
			str += "<select name='fgsDD' value='fgsDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['fgsDD']);
			str += "</select><br>";
							
			str +=TwoChecked;
			str +="<br/><div onclick='dataRep[this.name]=this.value;enableElementsfgs();'/><label>Reject</label>";
			str +="<input  type='checkbox' name='fgsReject' id='fgsRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
		    str +="</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str += '<input type="button" class="btnB" value = "Save" onclick = formaddThesisTitlesendForm('+"'addThesisTitle'"+');>';
			str += '<input type="button" class="btnB" value = "Update" onclick = formupdateThesisTitlesendForm('+"'updateThesisTitle'"+');>';
			
			str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
			str += '<input type = "button" class ="btnB" value="logout" onclick=logOut();>';
						
		}
			return str;
}


function formaddThesisTitlesendForm(frm){

	var doc,dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'addThesisTitle'){
 
			doc = document.maintainformAddThesisTitle;
		
			dataStr += "&interface="+frm;
				
										
			dataStr += "&tid="+dataRep["studentNo"]+"/"+"01";
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			dataStr += "&title="+document.getElementById('selectedTitle').value;
			
			alert(dataStr);
	}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
}	

function formupdateThesisTitlesendForm(frm){

	var doc,dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'updateThesisTitle'){
 
			doc = document.maintainformAddThesisTitle;
		
			dataStr += "&interface="+frm;
				
										
			dataStr += "&tid="+dataRep["tid"];
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			dataStr += "&title="+document.getElementById('selectedTitle').value;
			
			alert(dataStr);
	}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
}	