
var selectedDegreeCodeRepete= studentNoListRepete=selectedCheckboxCheckedRepete="";
var checkboxCountRepete= repsemcount1=repsemcount2=repsemcount3=repsemcount4=repsemcount0=0;

var selectedCheckboxChecked="";
var checkboxCount= semcount1=semcount2=semcount3=semcount4=semcount0=0;

var RepeatChecked = MedicalChecked = BatchDifferChecked="";
dataRep['selectReason']=dataRep["repSemester"]="";
dataRep['appliedYear']=dataRep['achedamicYear']=""; 
function formApplicationRepete(dsp){

	title = "Repeat Examination Application Form";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if(dsp == "formApplicationRepete"){
		keyDisabled = "Disabled";
		
		str  = "<div id='formApplicationRepete'>";
			str += "<table align='center' border='1' style='width:65%'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformApplication">';
			

			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			
			degreeStr1 = "<option>Please scroll down to see the records</option>";
				for(var i = 0; i<studentNoLength; i++) {
					if (repeatDegreeTitleArr.indexOf(repeatDegreeTitleArr[i]) == repeatDegreeTitleArr.lastIndexOf(repeatDegreeTitleArr[i]) || (repeatDegreeTitleArr.indexOf(repeatDegreeTitleArr[i]) != repeatDegreeTitleArr.lastIndexOf(repeatDegreeTitleArr[i]) && repeatDegreeTitleArr.indexOf(repeatDegreeTitleArr[i])==i)){
							
						degreeStr1  += "<option>"+repeatDegreeTitleArr[i]+"</option>";
								
					}
				}

			
			str += "<select id='selecteddegreeRepete' onchange='dataRep[this.id]=this.value;setDegreeCodeRepete();'>";
			str += degreeStr1 ;
			str += "</select></div>";


			
			
			// str += "<div class='longIdentifier' style='clear:none;'>Reason for Repeating</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
			
				// if(dataRep['selectReason'] == 'Repeat'){
                       // RepeatChecked = 'checked';
				// }
				// if(dataRep['selectReason'] == 'Medical/Other_Reasons'){
                       // MedicalChecked = 'checked';
				// }
				// if(dataRep['selectReason'] == 'Batch Differ'){
                       // BatchDifferChecked = 'checked';
				// }
			
			// str +="<input type='radio' name='selectReason' id='selectReason' "+RepeatChecked+" value='Repeat' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Repeat";
			// str +="<input type='radio' name='selectReason' id='selectReason' "+MedicalChecked+" value='Medical/Other_Reasons' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Medical/Other Reasons";
			// str +="<input type='radio' name='selectReason' id='selectReason' "+BatchDifferChecked+" value='BatchDiffer' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Batch Differ";
			// str +="</div>";
			// str +="</div></br>";
			// str +="<br>";
			 
			// str += "<div id='note' style='clear:both; display: none;'>";
			// str += "<div class='investLabel_l'  style='width:auto;margin-left:40px;' >*If you are appearing for the exam as Medical/Other Reasons or Batch differ candidates, please provide approved medical certificates and Board of Study approval letter.</div></br>";
			// str += "<div class='investLabel_l'  style='width:auto;margin-left:40px;' >*Please note that the proof of following payments should be submitted to the FGS office;</div></br>";
			// //str += "<ul>";	
			// str += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Course fee payment voucher/s.(If not submitted previously)</li></div></br>";
			// str += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Repeat Exam fee payment voucher - (1000/= per paper).</li></div></br>";
			// str += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Renewal of Registration payment voucher – 5000/= per year.</li></div></br>";
			// //str += "</ul>";
			// str += "<div class='investLabel_l' style='width:auto;margin-left:40px;' >Admissions will be issued only on submission of the above mentioned vouchers certified by the bank.</div></br>";
			// str += "</div>";

			str +="</br>";
			
			
			var dd = new Date();
			var d = dd.getUTCDate(); 
			var m = dd.getUTCMonth();
			var y = dd.getUTCFullYear();
			var mn=m+1;
			var currentdate = y+"-"+mn+"-"+d;
			
			


			str += "<div style='clear:both' id='studentNoListView' style='display:none'></div>";// 
		
			str += "<div style='clear:both' id='studentDetailListView' style='display:none'></div>";
			str += "<div style='clear:both' id='repAppDiv' ></div>";
			
			str += "<div style='clear:both' id='paperDivRep'  	style='display:none'></div>";
			
			str += "<div style='clear:both' id='subjectDivAll' 	style='display:none'></div>";
			
			
			
			

			str += "<div style='clear:both'><br>";
			str += '<input type="button" class="btnD" id="returnapp" value = "Return" onclick ="returnApplicationFormsubRepete();showMenu('+"'main'"+');">';			
		   	str += "<div style='clear:both' id='paperDiv'  style='display:none'></div>";
			
			str += "<div style='clear:both' id='subjectDiv'  style='display:none'></div>";
			
			str += '</center></div>';
			str += "<br></form>";
			str += '</td></tr></table></div>';
			
			
			}
			

			
		
		return str;
}


function showpaperDivRep(){
	
	var newStrRep="";
	newStrRep += "<div style='clear:both' id='paperDivRep'>";
	newStrRep += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStrRep +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";

			
			
			for(var n = 0; n<sub_subjectCodeLength; n++) {
				//alert("ok");
				if(repeatSubjectSemesterArr[n]== "1")
				{	//alert(":p 1");
					if(repsemcount1==0)
					{//alert(":p 2");
						newStrRep +="<input type='radio' name='appSemester' id='appSem1' value='1' onchange='dataRep[this.name]=this.value;showDivApplicationFormRepete();'>1";
					repsemcount1++;
					}
				}
				else if(repeatSubjectSemesterArr[n]== "2")
				{	
					if(repsemcount2==0)
					{	
						newStrRep +="<input type='radio' name='appSemester' id='appSem2' value='2' onchange='dataRep[this.name]=this.value;showDivApplicationFormRepete();'>2";
					repsemcount2++;
					}
				
				}
				else if(repeatSubjectSemesterArr[n]== "3")
				{	
					if(repsemcount3==0)
					{	
						newStrRep +="<input type='radio' name='appSemester' id='appSem3' value='3' onchange='dataRep[this.name]=this.value;showDivApplicationFormRepete();'>3";
					repsemcount3++;
					}
				
				}
				else if(repeatSubjectSemesterArr[n]== "4")
				{	
					if(repsemcount4==0)
					{	
						newStrRep +="<input type='radio' name='appSemester' id='appSem4' value='4' onchange='dataRep[this.name]=this.value;showDivApplicationFormRepete();'>4";
					repsemcount4++;
					}
				
				}
				else if(repeatSubjectSemesterArr[n]== "0")
				{	
					if(repsemcount0==0)
					{	
						newStrRep +="<input type='radio' name='appSemester' id='appSem0' value='0' onchange='dataRep[this.name]=this.value;showDivApplicationFormRepete();'>Year End";
					repsemcount0++;
					}
				
				}
			}
			
			newStrRep +="</div>";
			newStrRep +="</div></br>";
	
	document.getElementById('paperDivRep').innerHTML=newStrRep;
	
}


function showsubjectDivAll(){
	
	var newStrAll="";
	newStrAll += "<div style='clear:both' id='subjectDivAll'>";
	newStrAll += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStrAll +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";

			
			
		for(var i = 0; i<sub_CodeLength; i++) {
			//alert("ok");
			if(sub_subjectSemesterArr[i]== "1")	{	
				if(semcount1==0) {
					newStrAll +="<input type='radio' name='appSemester' id='repSem1' value='1' onchange='dataRep[this.name]=this.value;showSubjectDivRepeteApplicationForm()'>1";
					semcount1++;
				}
			}else if(sub_subjectSemesterArr[i]== "2") {	
				if(semcount2==0) {	
					newStrAll +="<input type='radio' name='appSemester' id='repSem2' value='2' onchange='dataRep[this.name]=this.value;showSubjectDivRepeteApplicationForm()'>2";
					semcount2++;
				}
			}else if(sub_subjectSemesterArr[i]== "3") {	
				if(semcount3==0) {	
					newStrAll +="<input type='radio' name='appSemester' id='repSem3' value='3' onchange='dataRep[this.name]=this.value;showSubjectDivRepeteApplicationForm()'>3";
					semcount3++;
				}
			}else if(sub_subjectSemesterArr[i]== "4") {	
				if(semcount4==0) {	
					newStrAll +="<input type='radio' name='appSemester' id='repSem4' value='4' onchange='dataRep[this.name]=this.value;showSubjectDivRepeteApplicationForm()'>4";
					semcount4++;
				}
			}else if(sub_subjectSemesterArr[i]== "0") {	
				if(semcount0==0){	
					newStrAll +="<input type='radio' name='appSemester' id='repSem0' value='0' onchange='dataRep[this.name]=this.value;showSubjectDivRepeteApplicationForm()'>Year End";
					semcount0++;
				}
			}
		}
			newStrAll +="</div>";
			newStrAll +="</div></br>";
	
	document.getElementById('subjectDivAll').innerHTML=newStrAll;
	
}



function showDivApplicationFormRepete(){
		
		count = 0;
		checkboxCountRepete = 0;
	var newStr="";	
	
	var keyDisabled = fieldDisabled = "";
	keyDisabled = "Disabled";
			
	for(var i = 0; i<sub_subjectCodeLength; i++) {
	
		//alert(dataRep["degreeCode"]);
		if(dataRep["appSemester"] == repeatSubjectSemesterArr[i]){ //dataRep["degreeCode"] == repeatDegreeCodeArr[i] && 
				// && dataRep["appSemester"] == repeatSubjectSemesterArr[i] && document.getElementById("RepeteYearSelect").value== repeatAchedamicYearArr[i]
			if(repeatSubjectNameArr.indexOf(repeatSubjectNameArr[i]) == repeatSubjectNameArr.lastIndexOf(repeatSubjectNameArr[i]) || (repeatSubjectNameArr.indexOf(repeatSubjectNameArr[i]) != repeatSubjectNameArr.lastIndexOf(repeatSubjectNameArr[i]) && repeatSubjectNameArr.indexOf(repeatSubjectNameArr[i])==i)){
					
			
				if(count == 0){
					newStr += "<div style='clear:both' id='paperDiv'>";
					newStr += "<div class='longIdentifier'>Subjects</div><div class='colon'>&nbsp;:&nbsp;</div>";
					newStr += "<div style='float:left' >&nbsp;";
				}

				newStr += "<div style='clear:both'>";
				newStr += "<div id='instituteDiv' class='investView' style='width:50px;'>";

				newStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxCheckedRepete+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+repeatSubjectNameArr[i]+"  onchange='dataRep[this.id]=this.value;checkSubjectApplicationRepete(this.id);' >";
			
				newStr += "</div>";
							
				newStr +="<input type='text' style='width:130px;border:none;margin-right:10px;' name='paperCode'  id='paperCode"+count+"' value= '"+repeatSubjectNameArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
				newStr +="<input type='text' style='width:500px;border:none;' name='paperTitle'  id='paperTitle"+count+"' value= '"+repeatSubjectTitleArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
						
				count++;
			}
		}
	}
			
		newStr += "</div></br>";
		newStr += "<div style='clear:both'><br>";
		newStr += "<div><input type='button' style='margin-top:0px' class='btnD' value='Save' onclick=formExamApplicationFormsendFormRepete('addApplicationFormRepeteExam');>";
		newStr += '<input type="button" class="btnD"  value = "Return" onclick = returnApplicationFormsub();showMenu('+"'main'"+')>';
		newStr += "</div>";
			
		document.getElementById('returnapp').style.display="none";
			
		document.getElementById('paperDiv').innerHTML=newStr;
	
	
	
	}
	
	
function showSubjectDivRepeteApplicationForm(){
		
		count = 0;
		checkboxCountRepete = 0;
	var newRepStr="";	
	
	var keyDisabled = fieldDisabled = "";
	keyDisabled = "Disabled";
			
	for(var j = 0; j<sub_CodeLength; j++) {
		if(dataRep["appSemester"] == sub_subjectSemesterArr[j]){
				// && dataRep["appSemester"] == repeatSubjectSemesterArr[i] && document.getElementById("RepeteYearSelect").value== repeatAchedamicYearArr[i]
			if(sub_subjectCodeArr.indexOf(sub_subjectCodeArr[j]) == sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[j]) || (sub_subjectCodeArr.indexOf(sub_subjectCodeArr[j]) != sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[j]) && sub_subjectCodeArr.indexOf(sub_subjectCodeArr[j])==j)){
					
			
				if(count == 0){
					newRepStr += "<div style='clear:both' id='subjectDiv'>";
					newRepStr += "<div class='longIdentifier'>Subjects</div><div class='colon'>&nbsp;:&nbsp;</div>";
					newRepStr += "<div style='float:left' >&nbsp;";
				}

				newRepStr += "<div style='clear:both'>";
				newRepStr += "<div id='instituteDiv' class='investView' style='width:50px;'>";
				if(sub_subjectStatusArr[j]=="c"){
				newRepStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+sub_subjectCodeArr[j]+" checked  disabled  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
				checkboxCount++;
				}else if(sub_subjectStatusArr[j]=="o"){
				newRepStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+sub_subjectCodeArr[j]+"  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
				}
				newRepStr += "</div>";
				
				newRepStr +="<input type='text' style='width:130px;border:none;margin-right:10px;' name='paperCode'  id='paperCode"+count+"' value= '"+sub_subjectCodeArr[j]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
				newRepStr +="<input type='text' style='width:500px;border:none;' name='paperTitle'  id='paperTitle"+count+"' value= '"+sub_subjectTitleArr[j]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
					
				count++;
			}
		}
	}
			
		newRepStr += "</div></br>";
		newRepStr += "<div style='clear:both'><br>";
		newRepStr += "<div><input type='button' style='margin-top:0px' class='btnD' value='Save' onclick=formExamApplicationFormsendFormRepete('addApplicationFormRepeteExam');>";
		newRepStr += '<input type="button" class="btnD"  value = "Return" onclick = returnApplicationFormsub();showMenu('+"'main'"+')>';
		newRepStr += "</div>";
			
		document.getElementById('returnapp').style.display="none";
			
		document.getElementById('subjectDiv').innerHTML=newRepStr;
	
	
	
	}	
	

function checkSubjectApplicationRepete(CheckselectedCheckboxRepete){
	
	
	// if(document.getElementById(CheckselectedCheckboxRepete).checked == true){
		// checkboxCountRepete++;
		// for(i = 0; i < 5; i++){
			// document.getElementById('repSem'+i).disabled = true;
		// }
			if(checkboxCountRepete>6){
				checkboxCountRepete=checkboxCountRepete-1;
				alert("You have select maximum allowed subjects");
				document.getElementById(CheckselectedCheckboxRepete).checked = false;
			}
	
	//}
	else{
		checkboxCountRepete=checkboxCountRepete-1;
	}
	//alert(checkboxCountRepete);
	
}	
	

function checkSubjectApplication(CheckselectedCheckbox){
	
	if(document.getElementById(CheckselectedCheckbox).checked == true){
		for(i = 0; i < 5; i++){
			if(document.getElementById('appSem'+i) != undefined)
				document.getElementById('appSem'+i).disabled = true;
		}
		checkboxCount++;
		if(checkboxCount>6){
			checkboxCount=checkboxCount-1;
			alert("You have select maximum allowed subjects");
			document.getElementById(CheckselectedCheckbox).checked = false;
		}
	
	}else{
		checkboxCount=checkboxCount-1;
	}
}	


function displayDivForRepeatExam(){
	//alert("ok2");
	if(sub_subjectCodeLength!= 0){
		//alert("ok3");
		showpaperDivRep();
		//document.getElementById('paperDivRep').style.display='block';
	}
	else if(sub_CodeLength!= 0){
		//alert("ok4");
		showsubjectDivAll();
		//document.getElementById('subjectDivAll').style.display='block';
	}
	else{
		"Error"
	}
}



	
	
function formExamApplicationFormsendFormRepete(frm){

	var doc, dataStr,dataStr2="";
	var applicationArray =new Array();
var paperStr="";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}

		if(frm == 'addApplicationFormRepeteExam'){
 
			doc = document.maintainformApplication;
			dataStr += "&interface="+frm;
			
			var dd = new Date();
			var d = dd.getUTCDate(); 
			var m = dd.getUTCMonth();
			var y = dd.getUTCFullYear();
			var mn=m+1;
			var currentdate = y+"-"+mn+"-"+d;
			
			
			
			var forloopcount =1;
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			dataStr += "&degreeCode="+dataRep["degreeCode"];
			dataStr += "&semester="+dataRep["appSemester"];
			dataStr += "&attempt=R";
			dataStr += "&achedamicYear="+dataRep["academicYear"];//document.getElementById('appliedYear').value;
			dataStr += "&reason="+dataRep['selectReason'];
			dataStr += "&appliedDate="+currentdate;
			
			
			for(var y=0; y<=count; y++){
		
				if(document.getElementById('selectedCheckbox'+y)){
					if(document.getElementById('selectedCheckbox'+y).checked==true){		
						if(forloopcount ==1){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}else if(forloopcount ==2){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}else if(forloopcount ==3){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}else if(forloopcount ==4){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}else if(forloopcount ==5){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}else if(forloopcount ==6){
							dataStr2 += "&subjectCode="+document.getElementById('selectedCheckbox'+y).value;
							applicationArray[forloopcount]= (dataStr+dataStr2);
							dataStr2="";
							forloopcount++;
						}
					}
					
				}				
			}
			
			if(frm == 'addApplicationFormRepeteExam'){
				for(var p=0; p<forloopcount; p++){
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", applicationArray[p]);
				}
				returnApplicationFormsubRepete();
			}
		}
		return 0;
	}
	


function returnApplicationFormsubRepete(){
	checkboxCountRepete= count =0;
	sub_subjectCodeLength=sub_CodeLength=0;	
	dataRep["appSemester"]=dataRep['selectReason']="";
	var checkboxCountRepete= repsemcount1=repsemcount2=repsemcount3=repsemcount4=repsemcount0=0;
	var selectedCheckboxChecked="";
	var checkboxCount= semcount1=semcount2=semcount3=semcount4=semcount0=0;
	returnStudentProfile();
}

function show1(){
  document.getElementById('note').style.display ='block';
}



function setDegreeCodeRepete()
{
	//alert(degreeCodeArr);
	for(var i = 0; i<studentNoLength; i++){
		
		if(document.getElementById('selecteddegreeRepete').value==repeatDegreeTitleArr[i])
		{
			
			selectedDegreeCodeRepete=repeatDegreeCodeArr[i];
			
			
			
		}
		//alert(studentNoListRepete);
	}
	
	for(var j=0; j< studentNoLength; j++){
			if(repeatDegreeCodeArr[j]==selectedDegreeCodeRepete){
				if (repeatSudentNoArr.indexOf(repeatSudentNoArr[j]) == repeatSudentNoArr.lastIndexOf(repeatSudentNoArr[j]) || (repeatSudentNoArr.indexOf(repeatSudentNoArr[j]) != repeatSudentNoArr.lastIndexOf(repeatSudentNoArr[j]) && repeatSudentNoArr.indexOf(repeatSudentNoArr[j])==j)){
					
//alert(document.getElementById('selecteddegreeRepete').value + "   " +degreeTitleArr[i] + "   "+selectedDegreeCodeRepete);
					
						studentNoListRepete += "<option value='"+repeatSudentNoArr[j]+"'>";
						
				}
			}
						
				
	}
var testStr="";	
			testStr +="<div style='margin-top:20px;float:left;clear:both;'>";
			testStr +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			testStr +="<input type='text' name='studentNoRepete'  id='studentNoRepete' list='studentNoListRepete' value= ''  onchange='dataRep[this.name]=this.value;setValuesForApplicationRepete();'>";
			testStr += "<datalist id='studentNoListRepete'>"+studentNoListRepete+"</datalist>";
	
			
			testStr += "<input type='button' id='searchid' style='margin-top:0px' class='btnD' value='search' onclick=showRepApplication();>"; //
document.getElementById('studentNoListView').style.display="block";			
document.getElementById('studentNoListView').innerHTML=testStr;

		
}

function setValuesForApplicationRepete(){

	for(var k=0; k<studentNoLength; k++){

		if(dataRep["studentNoRepete"]==repeatSudentNoArr[k]){
	
			dataRep["studentNameRepete"]=repeatStudentNameArr[k];
			dataRep["degreeTitleRepete"]=repeatDegreeTitleArr[k];
			dataRep["degreeYer"]=repeatAchedamicYearArr[k];
			
			

		}

	}
	
	var stuinfoSTR="";
	
			stuinfoSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			stuinfoSTR +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			stuinfoSTR += "<input type='text'  name='studentNameRepete' disabled id='studentNameRepete' value= '"+dataRep["studentNameRepete"]+"'  onchange='dataRep[this.name]=this.value;' >";		
			
			stuinfoSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			stuinfoSTR +="<div class='longIdentifier' style='clear:none;'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			stuinfoSTR += "<input type='text'  name='degreeYer' disabled id='degreeYer' value= '"+dataRep["degreeYer"]+"'  onchange='dataRep[this.name]=this.value;' >";		
	
			
			stuinfoSTR += "<div class='longIdentifier' style='clear:none;'>Reason for Repeating</div><div class='colon'>&nbsp;:&nbsp;</div>";
			stuinfoSTR +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
			
				if(dataRep['selectReason'] == 'Repeat'){
                       RepeatChecked = 'checked';
				}
				if(dataRep['selectReason'] == 'Medical/Other_Reasons'){
                       MedicalChecked = 'checked';
				}
				if(dataRep['selectReason'] == 'Batch Differ'){
                       BatchDifferChecked = 'checked';
				}
			
			stuinfoSTR +="<input type='radio' name='selectReason' id='selectReason' "+RepeatChecked+" value='Repeat' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Repeat";
			stuinfoSTR +="<input type='radio' name='selectReason' id='selectReason' "+MedicalChecked+" value='Medical/Other_Reasons' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Medical/Other Reasons";
			stuinfoSTR +="<input type='radio' name='selectReason' id='selectReason' "+BatchDifferChecked+" value='BatchDiffer' onchange='dataRep[this.name]=this.value;' onclick='show1();displayDivForRepeatExam();'>Batch Differ";
			stuinfoSTR +="</div>";
			stuinfoSTR +="</div></br>";
			stuinfoSTR +="<br>";
			 
			stuinfoSTR += "<div id='note' style='clear:both; display: none;'>";
			stuinfoSTR += "<div class='investLabel_l'  style='width:auto;margin-left:40px;' >*If you are appearing for the exam as Medical/Other Reasons or Batch differ candidates, please provide approved medical certificates and Board of Study approval letter.</div></br>";
			stuinfoSTR += "<div class='investLabel_l'  style='width:auto;margin-left:40px;' >*Please note that the proof of following payments should be submitted to the FGS office;</div></br>";
			//str += "<ul>";	
			stuinfoSTR += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Course fee payment voucher/s.(If not submitted previously)</li></div></br>";
			stuinfoSTR += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Repeat Exam fee payment voucher - (1000/= per paper).</li></div></br>";
			stuinfoSTR += "<div class='investLabel_l' style='width:auto;margin-left:60px;' ><li>Renewal of Registration payment voucher – 5000/= per year.</li></div></br>";
			//str += "</ul>";
			stuinfoSTR += "<div class='investLabel_l' style='width:auto;margin-left:40px;' >Admissions will be issued only on submission of the above mentioned vouchers certified by the bank.</div></br>";
			stuinfoSTR += "</div>";
			
			
			
			
			
			
			
			
			
			document.getElementById('studentDetailListView').style.display="block";			
document.getElementById('studentDetailListView').innerHTML=stuinfoSTR;
			
}





