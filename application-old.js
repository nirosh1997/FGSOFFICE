var selectedDegreeCode= studentNoList=selectedCheckboxChecked="";
var checkboxCount= count =0;

function setDegreeCode()
{
	//alert(degreeCodeArr);
	for(var i = 0; i<studentNoLength; i++){
		
		if(document.getElementById('selecteddegree').value==degreeTitleArr[i])
		{
			
			selectedDegreeCode=degreeCodeArr[i];
			
			
			
		}
		//alert(studentNoList);
	}
	
	for(var j=0; j< studentNoLength; j++){
				if(degreeCodeArr[j]==selectedDegreeCode){
//alert(document.getElementById('selecteddegree').value + "   " +degreeTitleArr[i] + "   "+selectedDegreeCode);
					
					studentNoList += "<option value='"+studentNoArr[j]+"'>";
				}
						
				
			}
var testStr="";	
			testStr +="<div style='margin-top:20px;float:left;clear:both;'>";
			testStr +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			testStr +="<input type='text' name='studentNo'  id='studentNo' list='studentNoList' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesForApplication();'>";
			testStr += "<datalist id='studentNoList'>"+studentNoList+"</datalist>";
	
			
			testStr += "<input type='button' id='searchid' style='margin-top:0px' class='btnD' value='search' onclick=showDivApplicationForm();>";
document.getElementById('studentNoListView').style.display="block";			
document.getElementById('studentNoListView').innerHTML=testStr;

		
}

function setValuesForApplication(){

	for(var k=0; k<studentNoLength; k++){

		if(dataRep["studentNo"]==studentNoArr[k]){
	
			dataRep["studentName"]=studentNameArr[k];
			dataRep["degreeTitle"]=degreeTitleArr[k];
			
			

		}

	}
	
	var stuinfoSTR="";
	
			stuinfoSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			stuinfoSTR +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			stuinfoSTR += "<input type='text'  name='studentName' disabled id='studentName' value= '"+dataRep["studentName"]+"'  onchange='dataRep[this.name]=this.value;' >";		
			
			// stuinfoSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			// stuinfoSTR +="<div class='longIdentifier' style='clear:none;'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			// stuinfoSTR += "<input type='text'  name='studentNo'  id='studentNo' value= '"+dataRep["studentNo"]+"'  onchange='dataRep[this.name]=this.value;' >";		
			
			
			
			// stuinfoSTR +="<div style='margin-top:20px;float:left;clear:both;'>";
			// stuinfoSTR +="<div class='longIdentifier' style='clear:none;'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			// stuinfoSTR += "<input type='text'  name='degreeTitle'  id='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value;' >";		
			
			document.getElementById('studentDetailListView').style.display="block";			
document.getElementById('studentDetailListView').innerHTML=stuinfoSTR;
			
}




function formApplication(dsp){

title = "Application Form";
		str = "";
var keyDisabled = fieldDisabled = "";
	if(dsp == "formApplication"){
keyDisabled = "Disabled";
	
			str  = "<div id='formApplication'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformApplication">';
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					dataRep['roleName']=roleNameArr[i];
				
				}
		    
		   }			
			
			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			
			degreeStr1 = "<option>Please scroll down to see the records</option>";
				for(var i = 0; i<studentNoLength; i++) {
					if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
						degreeStr1  += "<option>"+degreeTitleArr[i]+"</option>";
								
					}
				}

			
			str += "<select id='selecteddegree' onchange='dataRep[this.id]=this.value;setDegreeCode();'>";
			str += degreeStr1 ;
			str += "</select></div>";
					
			
			
			
			str += "<div style='clear:both' id='studentNoListView' style='display:none'></div>";// 
		
			str += "<div style='clear:both' id='studentDetailListView' style='display:none'></div>";
			
			//str += "<input type='button' style='margin-top:0px' class='btnD' value='Search' onclick=showDiv();>";
			str += '<input type="button" class="btnD" id="returnapp" value = "Return to Examination Menu" onclick ="returnApplicationFormsub();showMenu('+"'formExamMenu'"+');">';			
		   	str += '<input type = "button" id="logout1" class ="btnD" value="logout" onclick=logOut();>';
			str += "<div style='clear:both' id='paperDiv'  style='display:none'></div>";
			
			
			
			
			}
			

			str += '</center></div>';
			str += "<br></form>";
			str += '</td></tr></table></div>';
		
		return str;
}


function showDivApplicationForm(){
		
		
	
		var newStr="";	
			newStr += "<div style='clear:both' id='paperDiv'>";
			newStr += "<div class='longIdentifier'>Subjects</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			
			
			
			var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			for(var i = 0; i<subjectCodeLength; i++) {
		
			
			
					if(selectedDegreeCode == subjectdegreeCodeArr[i]){	
		//alert(subjectStatusArr);

						newStr += "<div style='clear:both'>";
						newStr += "<div id='instituteDiv' class='investView' style='width:50px;'>";
						if(subjectStatusArr[i]=="c")
						{
						newStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+subjectCodeArr[i]+" checked  disabled  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
						checkboxCount++;
						}
						if(subjectStatusArr[i]=="o")
						{
						newStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+subjectCodeArr[i]+"  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
						}
						newStr += "</div>";
						
						//newStr +="<input type='text' style='width:500px;border:none;' name='paperCode'  id='paperCode"+count+"' value= '"+subjectTitleArr[i]+" ("+subjectCodeArr[i]+") "+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
					
						newStr +="<input type='text' style='width:130px;border:none;margin-right:10px;' name='paperCode'  id='paperCode"+count+"' value= '"+subjectCodeArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
					
						newStr +="<input type='text' style='width:400px;border:none;' name='paperTitle'  id='paperTitle"+count+"' value= '"+subjectTitleArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
					
						// newStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+subjectCodeArr[i]+"  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
						// newStr += "</div>";
						
						// newStr +="<input type='text' style='width:500px;border:none;' name='paperCode'  id='paperCode"+count+"' value= '"+subjectTitleArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
					
						
						count++;
					}
			
		
			}
			
			newStr += "</div></br>";
			newStr += "<div><input type='button' style='margin-top:0px' class='btnD' value='Save' onclick=formExamApplicationFormsendForm('addApplicationFormExam');>";
			newStr += '<input type="button" class="btnD"  value = "Reset" onclick = "returnApplicationFormsub();sendForm('+"'data4ApplicationFormExam'"+');sendForm('+"'data4addApplicationForm'"+');">';
			newStr += '<input type="button" class="btnD"  value = "Return to Examination Menu" onclick = returnApplicationFormsub();showMenu('+"'formExamMenu'"+')>';
			newStr += '<input type = "button" id="logout" class ="btnD" value="logout" onclick=logOut();>';
			newStr += "</div>";
			
			document.getElementById('searchid').style.display="none";	
			document.getElementById('returnapp').style.display="none";
			
			document.getElementById('studentNo').disabled = true;
			document.getElementById('selecteddegree').disabled = true;
			
			
			//document.getElementById('returnapp').style.display="none";
			document.getElementById('logout1').style.display="none";	
	document.getElementById('paperDiv').innerHTML=newStr;
	
	
	
	}

function checkSubjectApplication(CheckselectedCheckbox){
	
	
	if(document.getElementById(CheckselectedCheckbox).checked == true){
		checkboxCount++;
			if(checkboxCount>6){
				checkboxCount=checkboxCount-1;
				alert("You have select maximum allowed subjects");
				document.getElementById(CheckselectedCheckbox).checked = false;
			}
	
	}
	else{
		checkboxCount=checkboxCount-1;
	}
	//alert(checkboxCount);
	
	
}
	
	
	
	
	
function formExamApplicationFormsendForm(frm){

	var doc, dataStr;
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

		if(frm == 'addApplicationFormExam'){
 
			doc = document.maintainformApplication;
			dataStr += "&interface="+frm;
			
			var forloopcount =1;
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			dataStr += "&degreeCode="+selectedDegreeCode;
			
			
			for(var y=0; y<=count; y++){
		
			
				if(document.getElementById('selectedCheckbox'+y)){
					if(document.getElementById('selectedCheckbox'+y).checked==true){
		//alert(dataRep["studentNo"+y]);
						if(forloopcount ==1){
							dataStr += "&subjectCodeOne="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
						else if(forloopcount ==2){
							dataStr += "&subjectCodeTwo="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
						else if(forloopcount ==3){
							dataStr += "&subjectCodeThree="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
						else if(forloopcount ==4){
							dataStr += "&subjectCodeFour="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
						else if(forloopcount ==5){
							dataStr += "&subjectCodeFive="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
						else if(forloopcount ==6){
							dataStr += "&subjectCodeSix="+document.getElementById('selectedCheckbox'+y).value;
							forloopcount++;
						}
					}
					
				}
			//alert(dataStr);
			
				
			}
			
			
			
			if(frm == 'addApplicationFormExam'){

				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

			}
		}
			
	   
        
    return 0;
		
}	


function returnApplicationFormsub(){
selectedDegreeCode= studentNoList="";
checkboxCount= count =0;
studentNoLength=subjectCodeLength=0;
dataRep["studentName"]=dataRep["studentNo"]=dataRep["degreeTitle"]="";
}
			