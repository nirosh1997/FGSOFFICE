var programmeTypeTitleList="";
var achedamicYearList="";
dataRep['roleName']="";
dataRep["subsemester"]="";
var temArr =new Array();
var tNo=0;
var rcount=0;
var degCode="";
var countviewList=0;
var selectedDCode="";
var newStr = "";
var checBboxIncrese=0;
var subjectCount =0;
var titlecount=0;
var subjectMarksArr = new Array();

function selDegreeCode()
{
	//alert("1");
	//alert(document.getElementById('selectedDegreeName').value);
	for(var i = 0; i<dedegreeCodeLength; i++){
		if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i])
		{
			//alert(dedegreeCodeArr[i]);
			selectedDCode=dedegreeCodeArr[i];
			
		}
		
	}
		
}


	
function formAddResults(dsp) {
	var title = "Add Results";
	str = "";
	if(dsp == "formAddResults") {
		title = "Add Results";
		str  = "<div id='addResults'>";
		str += "<table  ><tr><td>"
		str += '<h2>'+title+'</h2><hr>';
		str += '<form name="maintainaddResults" >';
		
			
		
			
		programName="<option>Please scroll down to see the records</option>";
				
			for(i = 0; i<dedegreeCodeLength; i++) {

							
				if(degreeTitleArr[i] != null){	
							
					if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							//alert(programName);
						programName += "<option>"+degreeTitleArr[i]+"</option>";

					}
				}
			}
			str +="<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='degCode=degreeCodeArr[this.selectedIndex-1];'>";//dataRep[degreeCode]="+degreeCodeArr[+"this.selectedIndex"+]+"degCodeIndex=this.selectedIndex;
				
				str += programName;
				str += "</select>";
				
				
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				str +="<div style='clear:both'>&nbsp;</div>"
				
				str += "<div class='identifiers'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
				str +="<input type='radio' name='subsemester' id='subsem1' value='1' onchange='dataRep[this.name]=this.value;'>1";
				str +="<input type='radio' name='subsemester' id='subsem2' value='2' onchange='dataRep[this.name]=this.value;'>2";
				str +="<input type='radio' name='subsemester' id='subsem3' value='3' onchange='dataRep[this.name]=this.value;'>3";
				str +="<input type='radio' name='subsemester' id='subsem4' value='4' onchange='dataRep[this.name]=this.value;'>4";
				str +="<input type='radio' name='subsemester' id='subsem0' value='0' onchange='dataRep[this.name]=this.value;'>none";
				str +="</div>";
				str +="</div>";
				
				
				
				str += '</br><input type="button" id="View-List" style="margin-top:1px;float:left" class="btnD" value="View List" onclick="selDegreeCode();viewList();">';
				str += '</br><input type="reset" id="View-List" style="margin-top:1px;float:left" class="btnD" value="Reset" onclick="resetExamlist();">';
				
				str +="<div  id='list' style='margin:clear:both'></div>";
				str +="<div style='clear:both'>";
				str	+= "<div><input type='button' style='margin-top:0px' class='btnD' value='Save' onclick=formAddResultssendForm('addResults');>";
				
			//	str += '<input type = "button" class ="btnD" value="Return to Examination Menu" onclick="refresshStudentList();showMenu('+"'formExamMenu'"+');">';
						
				str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();></div>';
				

				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
	}
	return str;   
}



function viewList(){
	document.getElementById('list').innerHTML = "";

var rCount=0;
for( var k = 0; k < studentNoLength; k++){
	//alert(1);
	if (studentNoArr.indexOf(studentNoArr[k]) == studentNoArr.lastIndexOf(studentNoArr[k]) || (studentNoArr.indexOf(studentNoArr[k]) != studentNoArr.lastIndexOf(studentNoArr[k]) && studentNoArr.indexOf(studentNoArr[k])==k)){
		// alert(2);
			 //alert(achedamicYearArr[k]);
			// alert(document.getElementById('achedamicYear').value);
		
		if(selectedDCode==degreeCodeArr[k] & document.getElementById('achedamicYear').value==achedamicYearArr[k] ){	
			//alert(3);
		   rCount++;
		}
	}
}
if(rCount==0)
{
	alert('There is no data');
}
		
else{
	

	
	  countviewList++;
		newStr += "<table style='border: 1px solid black; border-collapse: collapse; width:95%; margin:10px 20px 0px 20px'>";
			newStr +="<tr style='background-Color:#ff9f80'>";
				newStr += "<th style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+''+'</th>'; 
				newStr += "<th style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'No'+'</th>'; 
				newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Student No'+'</th>'; 
				newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Student Name'+'</th>';
				
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 1'+'</th>';
				// newStr += "<th colspan='1' style='text-align: center;float: center;border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'; >"+'✓'+'</th>';
				
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 2'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0; width:50px;'>"+'✓'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 3'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'; width:50px;>"+'✓'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 4'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'; width:50px;>"+'✓'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 5'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'; width:50px;>"+'✓'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+'Subject 6'+'</th>';
				// newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'; width:50px;>"+'✓'+'</th>';
				
				//alert(subjectTitleArr);
				alert(dataRep["subsemester"]);
				alert(subjectCodeLength);
				for(var i = 0; i< subjectCodeLength; i++){
					
					if(subjectTitleArr.indexOf(subjectTitleArr[i])== subjectTitleArr.lastIndexOf(subjectTitleArr[i]) || (subjectTitleArr.indexOf(subjectTitleArr[i]) != subjectTitleArr.lastIndexOf(subjectTitleArr[i]) && subjectTitleArr.indexOf(subjectTitleArr[i])==i)){
						//alert(1);
						if(dataRep["subsemester"] == semesterArr[i]){
						if(selectedDCode==degreeCodeSubArr[i] & document.getElementById('achedamicYear').value==academicYearSubArr[i]){
				newStr += "<th id='subjectTitle' colspan=''  style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0'>"+subjectTitleArr[i]+'<input type="hidden" id="subjectTitle'+titlecount+'" value="'+subjectTitleArr[titlecount]+'"></th>';
				 newStr += "<th colspan='1' style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0; width:50px;'>"+'✓'+'</th>';
						titlecount++;
						subjectCount++;
						}
						}
				}
				
				}
				
			newStr += '</tr>';
			
		//alert(selectedDCode);
			 
		var count =0;
		
		
		for( var k = 0; k < studentNoLength; k++){
			if (studentNoArr.indexOf(studentNoArr[k]) == studentNoArr.lastIndexOf(studentNoArr[k]) || (studentNoArr.indexOf(studentNoArr[k]) != studentNoArr.lastIndexOf(studentNoArr[k]) && studentNoArr.indexOf(studentNoArr[k])==k)){
				if(selectedDCode==degreeCodeArr[k] & document.getElementById('achedamicYear').value==achedamicYearArr[k] ){	
		
							temArr[tNo] =k;
							tNo++;
							count++;
						
							if(count%2==0){
					newStr +="<tr style='background-Color:#ffece6;>";}
					else{
					newStr +="<tr style='background-Color:#ffd9cc;>";}
							
			
		newStr += "<tr >";
			newStr +="<div class='info' id='Alist"+k+"'  name='testInfo"+k+"'>";				
			newStr += "<td align='center'><div class='investView' style='text-align:center' name='use' id='sub1'>";
			newStr += "<input type='checkbox'  id='stu"+k+"' nam style='border: 1px solid black; border-collapse: collapse; padding: 5px'e='sub0"+k+"'/></td>";
			newStr += "<td style='border: 1px solid black; border-collapse: collapse; padding: 5px 0 5px 0; text-align: center'><div style='width:50px;' class='investLabel' name='rc"+k+"' id='rc"+k+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+count+"</div></td>";
			
			newStr += "<td  style='border: 1px solid black; border-collapse: collapse; padding: 5px'>"+studentNoArr[k]+'<input type="hidden" id="studentNo'+k+'" value="'+studentNoArr[k]+'"></td>';	
			newStr += "<td  style='border: 1px solid black; border-collapse: collapse; padding: 5px'>"+studentNameArr[k]+'<input type="hidden" id="studentName'+k+'" value="'+studentNameArr[k]+'"></td>';
			for(var i = 0; i<subjectCount; i++)
			{
				newStr += "<td id='Subject 0"+checBboxIncrese+"' style='border: 1px solid black; border-collapse: collapse; padding: 5px'><input type='number' id='Subject0_"+checBboxIncrese+"' min='0' max='100' value='0' step='1' style='width:60px'></td>";
			newStr += "<td style='width:20px;' align='center'><div  style='width:20px;' class='investView' style='text-align:center' name='use' id='sub1'>"; 
			newStr += "<input type='checkbox'  style='border: 1px solid black; border-collapse: collapse; padding: 5px' id='"+k+"sub0"+checBboxIncrese+"' name='sub0"+checBboxIncrese+"'/></td>";
			checBboxIncrese++;
			}

			
			newStr += '</tr>';	

			}
					}
				}
						}
						
						
		
		//newStr += "</td>";
		
		newStr += '</tr>';
		newStr +='</table>';
		document.getElementById('list').innerHTML += newStr; 
		document.getElementById("View-List").disabled= true;
		
		
	}

		
function refresshStudentList(){
subjectCodeLength=0;
studentNoLength =0;	
countviewList=0;	
	newStr = "";
	subjectCount = 0;
	checBboxIncrese=0;
	dataRep["subsemester"] ="";
	sub_semesterArr=0;
	titlecount=0;
	dedegreeCodeLength=0;

}


function resetExamlist(){
dedegreeCodeLength=0;
subjectCodeLength=0;
studentNoLength =0;	
programmeTypeTitleList="";
achedamicYearList="";
dataRep['roleName']="";
temArr =new Array();
tNo=0;
rcount=0;
degCode="";
countviewList=0;
selectedDCode="";
newStr = "";
checBboxIncrese=0;
subjectCount =0;
titlecount=0;
sub_semesterArr=0;
subjectMarksArr = new Array();
	dataRep["subsemester"] ="";
	sendForm('data4addProgramm');
	sendForm('data4addaccy');
	sendForm('data4addSubject');

}

// function formAddResultssendForm(frm){
	// var doc;
	// var dataStr;
	

	// if(frm.substring(0,3)=="add"){ 
		// dataStr = "action=add";
	// } 
	// else if(frm.substring(0,6)=="update"){
		// dataStr = "action=update";
	// } 
	// else if(frm.substring(0,6)=="delete"){
		// dataStr = "action=delete";
	// } 
	// else if(frm.substring(0,6)=="search"){
		// dataStr = "action=get";
	// }
	// if (frm == 'addResults'){
		// var newStr="";
		// var subjectLengthCount = 0;
		// doc = document.maintainaddResults;
	// for(var k =0; k < studentNoLength; k++)
	// {
		// var subjrctinsertcount=0; 
		// if(document.getElementById('stu'+k))
							// //alert(document.getElementById('stu'+j));
		// {
		// if(document.getElementById('stu'+k).checked == true)
		// {
		// for(var i = 0; i<dedegreeCodeLength; i++)
		// {
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] )
			// {
				// // if( var k = 0; k < studentNoLength; k++)
				// // {//alert("1");
					// if(document.getElementById('studentNo'+k))
					// {//alert("1.1");
					// if(document.getElementById('studentNo'+k).value==studentNoArr[k])
					// {//alert("1.1.1");//alert(subjectCount);
						
							// //if(document.getElementById('Subject 0'+j).value==subjectTitleArr[j])
							// //{
							// for(var t = 0; t<=checBboxIncrese; t++)
						// {	
									
									// if(document.getElementById('sub0'+t))
									// {
										// if(document.getElementById('sub0'+t).checked == true)
										// {	
						
											
											// if (subjrctinsertcount<subjectCount)
											// {
												
											// dataStr += "&interface="+frm;
											// dataStr += "&SudentNo="+document.getElementById('studentNo'+k).value;
											// dataStr += "&StudentName="+document.getElementById('studentName'+k).value;
											// dataStr += "&degreeCode="+selectedDCode;
											// //dataStr += "&subjectName="+document.getElementById('subjectTitle'+i).value;
											// dataStr += "&Marks="+document.getElementById('Subject0_'+t).value;
											// dataRep["subjectTitle"]=subjectTitleArr[t];	
											
											// newStr ="&subjectName="+document.getElementById('subjectTitle'+subjrctinsertcount).value;
											// subjrctinsertcount++;
											
											// //newStr ="&subjectName="+subjectTitleArr[t];											//subjectTitle
											// subjectMarksArr[subjectLengthCount]= dataStr + newStr;
											// subjectLengthCount++;
											// dataStr = "action=add";
											// document.getElementById('sub0'+t).checked = false;
											// document.getElementById('stu'+k).checked = false;
											
											// }
										// }
											
											// //alert("2.1	");
										
									// }
						// }
									
					// //}
									// }
							// //}
						// }
					// }
				// }
			
				// }
			// }
			
		// }
		// //alert(subjectMarksArr);
		// for(var n = 0; n<subjectLengthCount; n++){
			
		// if(subjectMarksArr[n] != ""){
		
		// //alert("2");
		// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", subjectMarksArr[n]);
		// }
		// }
	// }
	// return 0;
// }
function formAddResultssendForm(frm){
	var doc;
	var dataStr;
	

	if(frm.substring(0,3)=="add"){ 
		dataStr = "action=add";
	} 
	else if(frm.substring(0,6)=="update"){
		dataStr = "action=update";
	} 
	else if(frm.substring(0,6)=="delete"){
		dataStr = "action=delete";
	} 
	else if(frm.substring(0,6)=="search"){
		dataStr = "action=get";
	}
	if (frm == 'addResults'){
		var newStr="";
		var subjectLengthCount = 0;
		doc = document.maintainaddResults;
	for(var k =0; k < studentNoLength; k++)
	{
		var subjrctinsertcount=0; 
		if(document.getElementById('stu'+k))
							//alert(document.getElementById('stu'+j));
		{
		if(document.getElementById('stu'+k).checked == true)
		{
		for(var i = 0; i<dedegreeCodeLength; i++)
		{
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] )
			{
				// if( var k = 0; k < studentNoLength; k++)
				// {//alert("1");
					if(document.getElementById('studentNo'+k))
					{//alert("1.1");
					if(document.getElementById('studentNo'+k).value==studentNoArr[k])
					{//alert("1.1.1");//alert(subjectCount);
						
							//if(document.getElementById('Subject 0'+j).value==subjectTitleArr[j])
							//{
							for(var t = 0; t<=checBboxIncrese; t++)
						{	
									
									if(document.getElementById(k+'sub0'+t))
									{
										if(document.getElementById(k+'sub0'+t).checked == true)
										{	
						
											
											if (subjrctinsertcount<subjectCount)
											{
												
											dataStr += "&interface="+frm;
											dataStr += "&SudentNo="+document.getElementById('studentNo'+k).value;
											dataStr += "&StudentName="+document.getElementById('studentName'+k).value;
											dataStr += "&degreeCode="+selectedDCode;
											//dataStr += "&subjectName="+document.getElementById('subjectTitle'+i).value;
											dataStr += "&Marks="+document.getElementById('Subject0_'+t).value;
											dataRep["subjectTitle"]=subjectTitleArr[t];	
											
											newStr ="&subjectName="+document.getElementById('subjectTitle'+subjrctinsertcount).value;
											subjrctinsertcount++;
											
											//newStr ="&subjectName="+subjectTitleArr[t];											//subjectTitle
											subjectMarksArr[subjectLengthCount]= dataStr + newStr;
											subjectLengthCount++;
											dataStr = "action=add";
											document.getElementById(k+'sub0'+t).checked = false;
											document.getElementById('stu'+k).checked = false;
											
											
											}
										}
											
											//alert("2.1	");
										
									}
						}
									
					//}
									}
							//}
						}
					}subjrctinsertcount=0;
				}
				}
			
			}
		}
		//alert(subjectMarksArr);
		for(var n = 0; n<subjectLengthCount; n++){
			
		if(subjectMarksArr[n] != ""){
		
		//alert("2");
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", subjectMarksArr[n]);
		}
		}
	}
	return 0;
}


