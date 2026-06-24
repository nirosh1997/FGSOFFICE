
dataRep["degreeCode"] = dataRep["academicYear"] = dataRep["subjectCode"] = dataRep["subjectTitle"]  = dataRep["status"]  = dataRep["credits"] ="";
dataRep["type"]=dataRep["selecteddegreeTitle"]="";
dataRep["semester"] = "";
//var degreeCodeList="";
//var DT="";

var CompusaryChecked = OptionalChecked = compOptChecked =  "";
//var selectedDeCodeArr = new Array();
//var selectedDeCodeLenght=0;
function formAddSubject(dsp) {

		var title = "Add New Subjects";
		str = "";

		if(dsp == "formAddSubject") {

			str  = "<div id='addSubject'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainaddSubject" >';
			
			//----------Insert DegreeCode to the table--------------------------
			
			str += "<div style='clear:both'>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<div class='identifiers'>Degree Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
					
				
			var degreeCodeList = "<option>Please scroll down to see the records</option>";
			
						
			for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++) {
			
				if (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degLoop])==degLoop)){
					if (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) || (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) != degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) && degreeCodeArr.indexOf(degreeCodeArr[degLoop])==degLoop)){
					//selectedDeCodeArr[selectedDeCodeLenght]=degreeCodeArr[degLoop];
					//selectedDeCodeLenght++;
			
						degreeCodeList  += "<option id='"+degreeTitleArr[degLoop]+"' title='"+degreeCodeArr[degLoop]+"'>"+degreeTitleArr[degLoop]+"</option>";
					}			
				}						
			}
			
			
			str += "<select id='selecteddegreeTitleSubject' name='selecteddegreeTitleSubject' onchange='dataRep[this.id]=this.selectedIndex;displaySubjectCode()'>";
			str += degreeCodeList ;
			str += "</select></div>";
			
			//
			
			str += "<br><br><center>";

			//-----------Insert Academic Year------------------------------
			str += "<div style='clear:both'>";
			dataRep['academicYear']="";
			str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYear' value='academicYear' onchange='dataRep[this.id]=this.selectedIndex;displaySubjectCode();'>";
			str += generateNumberOptions(2014, 2025, 4, dataRep['academicYear']);
			str += "</select>";
				
			//----------Select Semester-------------------------------------
			//
			str += "<div class='identifiers' style='clear:none; width:35px'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
				str +="<input type='radio' name='semester' id='sSem1' value='1' onchange='dataRep[this.name]=this.value;displaySubjectCode()'>1";
				str +="<input type='radio' name='semester' id='sSem2' value='2' onchange='dataRep[this.name]=this.value;displaySubjectCode()'>2";
				str +="<input type='radio' name='semester' id='sSem3' value='3' onchange='dataRep[this.name]=this.value;displaySubjectCode()'>3";
				str +="<input type='radio' name='semester' id='sSem4' value='4' onchange='dataRep[this.name]=this.value;displaySubjectCode()'>4";
				str +="<input type='radio' name='semester' id='sSem0' value='0' onchange='dataRep[this.name]=this.value;displaySubjectCode()'>none";
			str +="</div>";
			str +="</div>";
			//---------Insert SubjectCode---------------------------------

			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Subject Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='subjectCode' id ='subjectCode' value= '"+dataRep["subjectCode"]+"'  maxlength='50' onchange='dataRep[this.name]=this.value;getSubjectDetailsUpdate();'  >";
			str += "<datalist id='selectionSubCodeList'></datalist>";
			
			str += '<input type="button" id="sub_EditBtn" value="&#9998" style="display:none" title="Edit" onclick="editSubjects();">';
			str += '<input type="button" id="sub_RemoveBtn" value="&#10008" style="display:none; margin-left: 10px" title="Delete" onclick="removeSubject();"><br>';
			
			str += "</div>";


			//-----------Insert SubjectTitle------------------------------			
				
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Subject Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='subjectTitle'  id = 'subjectTitle' value= '"+dataRep["subjectTitle"]+"'   onchange='dataRep[this.name]=this.value' >";
			str += "</div>";
			str += "<br><br><center>";
			
			//-----------Insert Credits------------------------------			
				
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Number of Credits</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='number' name='credits'  id = 'credits' min='0' step='1' value= '"+dataRep["credits"]+"'  onchange='dataRep[this.name]=this.value' >";
			str += "</div>";
			str += "<br><br>";
			
			
		
			str += "<div style='clear:both'>";
			str += "<div class='identifiers'>Status</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
			if(dataRep["type"]== 'Compulsory'){
			CompusaryChecked = 'checked';
			} else if(dataRep["type"]=='Optional'){
			OptionalChecked = 'checked';
			}


			str +="<input  type='radio' name='type' id='typeCompusary' value= 'Compulsory'";
			str +=CompusaryChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Compulsory";
			str +="<input  type='radio' name='type' id='typeOptional' value= 'Optional'";
			str +=OptionalChecked;
			str +=" onclick=dataRep[this.name]=this.value;>Optional</div></div>";

			
			//----------End of inserting data to the subject table---------
				
			str += "<div style='clear:both'>";
			str += '<input type="button" class="btnD" id="subSave" value="Save" onclick="formAddSubjectsendForm('+"'addSubject'"+');">';
			str += '<input type="button" class="btnD" id="subUpdate" value="Update" style="display:none" onclick="formAddSubjectsendForm('+"'updateSubject'"+');">';
			str += "<input type='reset' class='btnD' value='Reset Values' onclick=resetSubjects();  >";
			str += '<input type="button" class ="btnD" value="Return" onclick="returnadSubject();showMenu('+"'main'"+');">';
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
function displaySubjectCode(){
	document.getElementById('subjectTitle').disabled = false;
	document.getElementById('credits').disabled = false;
	document.getElementById('typeCompusary').disabled = false;
	document.getElementById('typeOptional').disabled = false;
	
	if(document.getElementById('selecteddegreeTitleSubject').selectedIndex != 0 
	&& document.getElementById('academicYear').value != ""
	&& dataRep["semester"] != ""){
		
		document.getElementById('subjectCode').value = "";
		document.getElementById('subjectTitle').value = "";
		document.getElementById('credits').value = "";
		document.getElementById('typeCompusary').checked = false;
		document.getElementById('typeOptional').checked = false;
		document.getElementById('sub_EditBtn').style.display = "none";
		document.getElementById('sub_RemoveBtn').style.display = "none";
		var tmpDId = document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;
		
		selectionSubCodeList = "";
		for(i=0; i<sub_CodeLength; i++){
			
			if(sub_degreeCodeArr[i] !=null 
			&& tmpDId == sub_degreeCodeArr[i]
			&& document.getElementById('academicYear').value == sub_academicYearArr[i]
			&& dataRep["semester"] == sub_semesterArr[i]){
				
				selectionSubCodeList += "<option>"+sub_subjectCodeArr[i]+"</option>";
			
			}
		}
		
		document.getElementById('selectionSubCodeList').innerHTML = selectionSubCodeList;
		document.getElementById('subjectCode').setAttribute("list", "selectionSubCodeList" );
		return;
	}
	document.getElementById('selectionSubCodeList').innerHTML = "";
}

function getSubjectDetailsUpdate(){
	if(document.getElementById('selecteddegreeTitleSubject').selectedIndex != 0 
	&& document.getElementById('academicYear').value != ""
	&& dataRep["semester"] != ""
	&& document.getElementById('subjectCode').value != ""){		
		
		var tmpDId = document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;
		
		for(i=0; i<sub_CodeLength; i++){
			
			if(sub_degreeCodeArr[i] !=null 
			&& tmpDId == sub_degreeCodeArr[i]
			&& document.getElementById('academicYear').value == sub_academicYearArr[i]
			&& dataRep["semester"] == sub_semesterArr[i]
			&& document.getElementById('subjectCode').value == sub_subjectCodeArr[i]){
				
				document.getElementById('subjectTitle').value = sub_subjectTitleArr[i];
				document.getElementById('credits').value = sub_creditsArr[i];
				
				if(sub_statusArr[i] == 'c'){
					document.getElementById('typeCompusary').checked = true;
					document.getElementById('typeOptional').checked = false;
				}else if(sub_statusArr[i] == 'o'){
					document.getElementById('typeCompusary').checked = false;
					document.getElementById('typeOptional').checked = true;
				}
				
				document.getElementById('subjectTitle').disabled = true;
				document.getElementById('credits').disabled = true;
				document.getElementById('typeCompusary').disabled = true;
				document.getElementById('typeOptional').disabled = true;
				document.getElementById('subSave').disabled = true;
				
				document.getElementById('sub_EditBtn').style.display = "";
				document.getElementById('sub_RemoveBtn').style.display = "";
				return;
			}
		}
	}
	document.getElementById('subjectTitle').value = "";
	document.getElementById('credits').value = "";
	document.getElementById('typeCompusary').checked = false;
	document.getElementById('typeOptional').checked = false;
	document.getElementById('subSave').disabled = false;
}

function editSubjects(){
	
	document.getElementById('selecteddegreeTitleSubject').disabled = true;
	document.getElementById('academicYear').disabled = true;
	document.getElementById('subjectCode').disabled = true;
	for(i = 0; i < 5; i++){
		document.getElementById('sSem'+i).disabled = true;
	}
	document.getElementById('sub_EditBtn').disabled = true;
	document.getElementById('sub_RemoveBtn').disabled = true;
	
	document.getElementById('subjectTitle').disabled = false;
	document.getElementById('credits').disabled = false;
	document.getElementById('typeCompusary').disabled = false;
	document.getElementById('typeOptional').disabled = false;
	
	document.getElementById('subSave').style.display = "none";
	document.getElementById('subUpdate').style.display = "";
}

function removeSubject(){
	var r = confirm('Do you want to remove : ('+ document.getElementById('subjectCode').value +') '+ document.getElementById('subjectTitle').value);
	
	if(r == true ){
		formAddSubjectsendForm("deleteSubject");
	}else{
		return;
	}
}
	
function resetSubjects() {
	dataRep["subjectCode"]= dataRep["subjectTitle"] = dataRep["credits"]= dataRep['academicYear']=dataRep["type"]="";
	dataRep["semester"] = "";
	document.getElementById('subjectTitle').disabled = false;
	document.getElementById('credits').disabled = false;
	document.getElementById('typeCompusary').disabled = false;
	document.getElementById('typeOptional').disabled = false;
	
	document.getElementById('selecteddegreeTitleSubject').disabled = false;
	document.getElementById('academicYear').disabled = false;
	document.getElementById('subjectCode').disabled = false;
	for(i = 0; i < 5; i++){
		document.getElementById('sSem'+i).disabled = false;
	}
	document.getElementById('sub_EditBtn').style.display = "none";
	document.getElementById('sub_RemoveBtn').style.display = "none";
	document.getElementById('sub_EditBtn').disabled = false;
	document.getElementById('sub_RemoveBtn').disabled = false;
	document.getElementById('subSave').style.display = "";
	document.getElementById('subUpdate').style.display = "none";
	document.getElementById('subSave').disabled = false;
	
	//degreeCodeLength=0;
	//sendForm('data4getdegree');
}
	
function checkSubject(){
	
	if(document.getElementById('selecteddegreeTitleSubject').value=="Please scroll down to see the records" || document.getElementById('subjectCode').value=="" || document.getElementById('subjectTitle').value=="" || document.getElementById('credits').value==""){
		alert("Please fill relevent details");
	}
	else{
	formAddSubjectsendForm("addSubject");
	}
}


	
function formAddSubjectsendForm(frm){

	var doc, dataStr;
	
	if(document.getElementById('selecteddegreeTitleSubject').value=="Please scroll down to see the records" || document.getElementById('subjectCode').value=="" || document.getElementById('subjectTitle').value=="" || document.getElementById('credits').value==""){
		alert("Please fill relevent details");
	}
	else{

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
						
		if(frm == 'addSubject'){
 
			doc = document.maintainaddSubject;
			
			dataStr += "&interface="+frm;

			dataStr += "&degreeCode="+document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;;
			dataStr += "&academicYear="+doc.academicYear.value;
			
			for(i = 0; i < 5; i++){
				if (document.getElementById('sSem'+i).checked) {
					dataStr += "&subjectSemester=" + document.getElementById('sSem'+i).value;
				}
			}	
			
			dataStr += "&subjectCode="+doc.subjectCode.value;			
			dataStr += "&subjectTitle="+doc.subjectTitle.value;			
			dataStr += "&credits="+doc.credits.value;
			
			if(document.getElementById('typeCompusary').checked == true){
						dataStr += "&status="+"c";
			}
			else if(document.getElementById('typeOptional').checked == true){
						dataStr += "&status="+"o";
			}
		
			//alert(dataStr);
		}else if(frm == 'updateSubject'){
			doc = document.maintainaddSubject;
			
			dataStr += "&interface="+frm;

			dataStr += "&degreeCode="+document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;;
			dataStr += "&academicYear="+doc.academicYear.value;
			
			for(i = 0; i < 5; i++){
				if (document.getElementById('sSem'+i).checked) {
					dataStr += "&subjectSemester=" + document.getElementById('sSem'+i).value;
				}
			}	
			
			dataStr += "&subjectCode="+doc.subjectCode.value;			
			dataStr += "&subjectTitle="+doc.subjectTitle.value;			
			dataStr += "&credits="+doc.credits.value;
			
			if(document.getElementById('typeCompusary').checked == true){
						dataStr += "&status="+"c";
			}
			else if(document.getElementById('typeOptional').checked == true){
						dataStr += "&status="+"o";
			}
		}else if(frm == 'deleteSubject'){
			doc = document.maintainaddSubject;
			dataStr += "&interface="+frm;

			dataStr += "&degreeCode="+document.getElementById(document.getElementById('selecteddegreeTitleSubject').value).title;;
			dataStr += "&academicYear="+doc.academicYear.value;
			
			for(i = 0; i < 5; i++){
				if (document.getElementById('sSem'+i).checked) {
					dataStr += "&subjectSemester=" + document.getElementById('sSem'+i).value;
				}
			}	
			
			dataStr += "&subjectCode="+doc.subjectCode.value;
		}
			//alert(dataStr);
			
		if(dataStr != ""){
			returnadSubject();
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			return 0;
		}
			
		
		
	}
}

/* function statusDiv(){
   if(document.getElementById('sub1').checked){
       		document.getElementById('status1').style.display='block';		
			}
			else{
			document.getElementById('status1').style.display='none';
			}
			
			
	if(document.getElementById('sub2').checked){
       		document.getElementById('status1').style.display='block';		
			}
			else{
		    document.getElementById('status1').style.display='none';
			}	
	
}
 */
function returnadSubject() {
	dataRep["subjectCode"]= dataRep["subjectTitle"] = dataRep["credits"]= dataRep['academicYear']=dataRep["type"]="";
	dataRep["semester"] = "";
	degreeCodeLength = 0;
	sub_CodeLength = 0;
	
}