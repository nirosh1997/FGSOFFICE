var finalTmpStudentArray = new Array();

function formFinalResultView(dsp) {

		var title = "View Final Result";
		str = "";

		if(dsp == "formFinalResultView") {
			
			var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', 'ab', '-'];
			
			str  = "<div id='viewSubject'>";
			str += "<table  ><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainFinalResultView" >';				
			/***************************************************************************************/
			
			str += '<h2>'+dataRep['acYear'] + ' - ' + dataRep["degTitle"] + ' ('+dataRep["degCode"]+') ' +'</h2><hr>';
			
			for (var j = 0 ; j < cr_Length ; j++){
				str += '<p style="text-align:left; font-weight: bold">'+cr_finalResultArr[j]+'</p>';
				if(cr_descriptionArr[j].indexOf('<br>') == -1){
					cr_descriptionArr[j] = cr_descriptionArr[j].replace(/\(/g, "<br>&emsp;&emsp;(");
				}
				
				str += "<p style='text-align:left;margin-left:30px'>"+cr_descriptionArr[j]+"</p><br>";
			}
			
			
			str += '<table style="margin: 35px 30px;border: 1px solid black;">';
				str += "<tr style='border: 1px solid black;'>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Student No</th>";
					//str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Student Name</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Credits</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'></th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Final Result</th>";
					str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>";
						str += "<input type='checkbox'  class='viewArea' id='CheckboxAll' onchange='lockALLSelection()' >";
					str += "</th>";
					// str += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>";
						// //str += "<input type='checkbox'  class='viewArea' id='CheckboxAll' onchange='lockALLSelection()' >";
					// str += "</th>";
				str += "</tr>";
				
				var tmpStudentNO = '';
				var tmpStudentSemester = '';
				var tmpGPA = 0;
				var tmpcredits = 0;
				var tmpsubCount = 0;
				var tmpGradeHolder = new Array();
				var tmpAcademicYearHolder = dataRep['acYear'];
				var tmpCreditHolder = 0;
				
			for(var i=0; i<MarksLength+1; i++){
				//if(dataRep["degTitle"]== document.getElementById('selecteddegreeTitleFinal').selectedIndex){
					if(marksArr[i] == '-'){
						marksArr[i] = '(ab)';
					}
					
					
					var tmpGradeResult = "";
						
					if(tmpStudentNO == tmpDownStudNoArr[i]){
						str += "<tr>";
							str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
							//str += "<td style='border: none;'></td>";
					}else{
						if(i != 0){
							
							/******** Check Academic Year******/
							
							
							var tmpacDif = (parseInt(tmpAcademicYearHolder) - parseInt(dataRep['acYear']))+1;
							
							var tmpacResult = "";
																	
							for (var f = 0 ; f < cr_Length ; f++){
								if(tmpacDif <= cr_academicYearsArr[f]){
									tmpacResult = cr_finalResultArr[f];
									tmpGradeHolder.push(f);
									tmpsubCount++;
									break;
								}
							}
									
							if(tmpacResult == ""){
								tmpGradeHolder.push('-1');
								tmpsubCount++;
							}
							
							str += "<tr>";
								str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
								str += "<td style='border-top:1px solid black;padding: 5px;text-align:center' colspan='3'><div class='investView_l'  style='text-align:center; width:auto'></div></td>";	
								str += "<td style='border-right:1px solid black;padding: 5px;text-align:center;border-bottom:1px solid black;'><div class='investView_l'  style='text-align:center; width:auto;padding-left:10px' ></div></td>"; //"+tmpacDif+"
								str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' ></div></td>"; //"+tmpacResult+"
							str += "</tr>";
							
							var tmpCalGPA = tmpGPA/tmpcredits;
							str += "<tr>";
								str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
								str += "<td style='border-top:1px solid black;padding: 5px;text-align:center' colspan='3'><div class='investView_l'  style='text-align:center; width:auto'>GPA : </div></td>";	
								str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l' id='lblGPA"+tmpStudentNO+"'  style='text-align:center; width:auto;' >"+tmpCalGPA.toFixed(2)+"</div></td>";
								
								//if(tmpStudentSemester == '4'){
									
									var tmpGpaResult = "";
									
									/******** Check GPA******/
									for (var j = 0 ; j < cr_Length ; j++){
										if(parseFloat(cr_gpaArr[j]) <= tmpCalGPA.toFixed(2)){  //if(parseFloat(cr_gpaArr[j]) <= tmpCalGPA.toFixed(2)){
											tmpGpaResult = cr_finalResultArr[j];
											tmpGradeHolder.push(j);
											tmpsubCount++;
											break;
										}
										// else if(tmpCalGPA.toFixed(1) == "3.7"){
											// tmpGpaResult = "Merit";
											// //tmpGradeHolder.push(j);
											// //tmpsubCount++;
											// break;
										// }
									}
									
									if(tmpGpaResult == ""){
										tmpGradeHolder.push('-1');
										tmpsubCount++;
									}
									
									/******** Check Grades******/
									var countResult = 0;
									var finalRsltHolder = "Fail";
									var tmpIndexCount = cr_Length;
									
									for (var k = 0 ; k < cr_Length ; k++){
										for (var l = 0 ; l < tmpsubCount ; l++){
											if(tmpGradeHolder[l] == k){
												countResult++;
											}
										}
										if(tmpsubCount == countResult){
											finalRsltHolder = cr_finalResultArr[k];
											tmpIndexCount = k;
											break;
										}
									}
									
									// if(tmpCalGPA.toFixed(2) == "3.7"){
									// str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >Merit</div></td>";
									// }
									// else if(tmpCalGPA.toFixed(2) == "4.0" & dataRep["degTitle"]=="Master of Business (Accounting/Finance)"){
									// str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >Merit</div></td>";
									// }
									// else{
									str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+tmpGpaResult+"</div></td>";	
									//}
								
									str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'>";
										str += "<select id='finalResult"+tmpStudentNO+"' onchange='' style='margin:0 5px'>";
											for (var k = 0 ; k < cr_Length ; k++){
												if(k == tmpIndexCount){
													str += "<option selected='true'>"+cr_finalResultArr[k]+"</option>";
												}else{
													str += "<option>"+cr_finalResultArr[k]+"</option>";
												}
												
											}
											if(cr_Length == tmpIndexCount){
												str += "<option selected='true'>Merit</option>";
												str += "<option selected='true'>Not Completed</option>";
												str += "<option selected='true'>Repeat</option>";
											}
											//else if(tmpCalGPA.toFixed(1) == "3.7"  || tmpCalGPA.toFixed(1) == "4.0"){
												// str += "<option selected='true'>Merit</option>";
											// }
											else{
												str += "<option>Merit</option>";
												str += "<option>InComplete</option>";
												str += "<option>Repeat</option>";
											}
											
										str += "</select>";
									str += "</td>";
									
									str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'>";
										str += "<input type='checkbox'  class='viewArea' id='selectedCheckbox"+tmpStudentNO+"' name='finalResult"+tmpStudentNO+"'  onchange='lockSelection(this.id, this.name)' >";
									str += "</td>";
									// str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'>";
										// str += "<input type='button'  class='btnD' value='Print' id='selectedButton"+tmpStudentNO+"' name='finalResultPrint"+tmpStudentNO+"'  onchange='lockSelection(this.id, this.name)' >";
									// str += "</td>";
								/*}else{
									str += "<td style='border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+"-"+"</div></td>";	
								}*/
								
							str += "</tr>";
							
							tmpGPA = 0;
							tmpcredits = 0;
							tmpsubCount = 0;
							tmpGradeHolder = new Array();
							tmpAcademicYearHolder = dataRep['acYear'];
							tmpCreditHolder = 0;
							
							str += "<tr style='border-top:3px double black;padding-top:5px;'>";
							if(i == MarksLength){
								str += "</tr>";
								break;
							}
						}else{
							str += "<tr>";
						}
							str += "<td style='border-left:1px solid black; border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l' style='text-align:center; width:auto; padding-top:20px'>"+tmpDownStudNoArr[i]+"</div></td>";
							//str += "<td style='border-left:1px solid black; border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l' style='text-align:center; width:auto'>"+tmpDownStudNameArr[i]+"</div></td>";
							finalTmpStudentArray.push(tmpDownStudNoArr[i]);
					}
						
						
						if(tmpStudentNO == tmpDownStudNoArr[i] && tmpStudentSemester == subjectSemesterArr[i]){
							str += "<td style='border-right:1px solid black;'></td>";
						}else{
							str += "<td style='border-left:1px solid black; border-right:1px solid black;border-top:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>"+subjectSemesterArr[i]+"</div></td>";
							tmpAcademicYearHolder = dataRep['acYear'];
							tmpStudentNO = tmpDownStudNoArr[i];
							tmpStudentSemester = subjectSemesterArr[i];
						}
						
						tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));   //tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));
						tmpcredits += parseInt(subjectCreditsArr[i]);
						tmpsubCount++;
						for (var j = 0 ; j < cr_Length ; j++){
							if(gradeArray.indexOf(cr_gradeArr[j]) >= gradeArray.indexOf(marksArr[i])){
								tmpGradeResult = cr_finalResultArr[j];
								tmpGradeHolder.push(j);
								break;
							}else if(gradeArray.indexOf(cr_resitArr[j]) <= gradeArray.indexOf(marksArr[i])){
								tmpGradeResult = 'Resit';
								break;
							}
						}
						
						if(tmpGradeResult == ""){
							tmpGradeHolder.push('-1');
						}
						
						if(academicYearArr[i] > tmpAcademicYearHolder){
							tmpAcademicYearHolder = academicYearArr[i];
						}
						
						str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >("+subjectNameArr[i]+") "+subjectTitleArr[i]+"</div></td>";										
						str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>"+marksArr[i]+"</div></td>";	
						
						if(tmpGradeResult == ""){
							str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>0</div></td>";
						}else{
							str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>"+subjectCreditsArr[i]+"</div></td>";
							tmpCreditHolder += subjectCreditsArr[i];
						}
						if(tmpGradeResult == "Resit"){
						str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;color: red'>"+tmpGradeResult+"</div></td>";	
						}
						else{
						str += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto'>"+tmpGradeResult+"</div></td>";	
						
						}
					str += "</tr>";
				//}
			}
			
			str += '</table>';
			
			/***************************************************************************************/
			str += "<div style='clear:both'>";
			
			str += '<input type="button" class ="btnD" value="Save" onclick="saveFinalResultV();">';
			//str += '<input type="button" class ="btnD" value="Print" onclick="PrintCertificate();">';
			str += '<input type="button" class ="btnD" value="Return to Examination Menu" onclick="returnFinalResultV();showMenu('+"'formExamMenu'"+');">';
			str += '<input type="button" id="btnlog" class="btnD" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		} 
		return str;
	}
	
function saveFinalResultV(){	
	for(var m=0; m<finalTmpStudentArray.length; m++){
		if(document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]) != undefined && document.getElementById('finalResult'+tmpDownStudNoArr[m]) != undefined){
			if(!document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]).checked){
				var r = confirm('Not all the check boxes are checked do you wish to continue')
				if(r == false){
					return 0;
				}if(r == true){
					break;
				}
			}
		}
	}
	
	var tmpFinalStudStr = new Array();
	var tmpFinalStudCount = 0;
	var dataStr;
	
	for(var s=0; s<finalTmpStudentArray.length; s++){
		if(document.getElementById('selectedCheckbox'+finalTmpStudentArray[s]) != undefined && document.getElementById('finalResult'+tmpDownStudNoArr[s]) != undefined){
			if(document.getElementById('selectedCheckbox'+finalTmpStudentArray[s]).checked){
				dataStr = "action=add";
				dataStr += "&interface=addStudentFinalResults";
				dataStr += "&studentNo="+finalTmpStudentArray[s];
				dataStr += "&degreeCode="+dataRep["degCode"];			
				dataStr += "&achedamicYear="+dataRep['acYear'];
				dataStr += "&semester="+"0";
				dataStr += "&finalGPA="+document.getElementById('lblGPA'+finalTmpStudentArray[s]).innerHTML;
				dataStr += "&finalResult="+document.getElementById('finalResult'+finalTmpStudentArray[s]).value;
				dataStr += "&userID="+dataRep['userId'];
				
				tmpFinalStudStr[tmpFinalStudCount] = dataStr;
				tmpFinalStudCount++;
			}
		}
	}
	
	if(tmpFinalStudCount != 0){
		for(j = 0 ; j < tmpFinalStudCount ; j++){
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", tmpFinalStudStr[j]);
		}		
		returnFinalResultV();			
	}
	
}

function lockALLSelection(){
	if(document.getElementById('CheckboxAll').checked){
		for(var m=0; m<finalTmpStudentArray.length; m++){
			if(document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]) != undefined && document.getElementById('finalResult'+finalTmpStudentArray[m]) != undefined){
				document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]).checked = true;
				document.getElementById('finalResult'+finalTmpStudentArray[m]).disabled = true;
			}
			
		}
	}else if(!document.getElementById('CheckboxAll').checked){
		for(var m=0; m<finalTmpStudentArray.length; m++){
			if(document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]) != undefined && document.getElementById('finalResult'+finalTmpStudentArray[m]) != undefined){
				document.getElementById('selectedCheckbox'+finalTmpStudentArray[m]).checked = false;
				document.getElementById('finalResult'+finalTmpStudentArray[m]).disabled = false;
			}
		}
	}
}

function lockSelection(chkbx, slct){
	if(document.getElementById(chkbx).checked){
		document.getElementById(slct).disabled = true;
	}else if(!document.getElementById(chkbx).checked){
		document.getElementById(slct).disabled = false;
	}
}

function returnFinalResultV() {
	dataRep['acYear'] = '';
	dataRep["degCode"] = '';
	dataRep["degTitle"] = '';
	dataRep["finsemester"] = '';
	degreeCodeLength = 0;
	MarksLength = 0;
	cr_Length = 0;
	finalTmpStudentArray = new Array();
}


function PrintCertificate(){
	var addsDiv="";	
	var addsDiv2="";
	var addsDiv3="";
	var adfinaldsDiv="";
	var chechCount=0;

	for(var m=0; m<finalTmpStudentArray.length; m++){
		if(document.getElementById('selectedCheckbox'+m)){
			if(document.getElementById('selectedCheckbox'+m).checked== true){
				

	
	

	chechCount++;
	var moreThanOne=0;
	
	//alert(dataRep['subsemester']);
	
	dataRep['SudentNo']=tmpDownStudNoArr[m];
	dataRep['StudentName']=tmpDownStudNameArr[m];
	dataRep['academicYear']=academicYearArr[m];
	dataRep['subjectName']=subjectNameArr[m];
	dataRep['subjectTitle']=subjectTitleArr[m];
	dataRep['subjectSemester']=subjectSemesterArr[m];
	dataRep['subjectGPA']=subjectGPAArr[m];
	dataRep['marks']=marksArr[m];
	dataRep['subjectCredits']=subjectCreditsArr[m];
	addsDiv='<div style="width:100%;height:30px;">';
	
	addsDiv+="<div style='float:left;width:10%;'>";
			//addsDiv+="<img src='img/fgs.jpg' style='width:80px;height:80px;'/>";
			addsDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
		addsDiv+="</div>";
		
	// addsDiv+="<div style='float:right;width:10%;'>";
			// addsDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
		// addsDiv+="</div>";
		
		var d = new Date();	
		var dYear =0;
		var dYear = d.getFullYear();
		
		var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var now       = new Date();
		var thisMonth = months[now.getMonth()];
		
		
		
		
		addsDiv3+="<div style='float:left;width:90%;'>";
		
		addsDiv3+="<div style='clear:both;text-align:justify;'>";
			
				addsDiv3+="This is to certify that";
			addsDiv3+="</div>";
			addsDiv3+="<br/><div style='clear:both;text-align:justify;'>"+dataRep['studentName']+"</div>";
			addsDiv3+="<br/><div style='clear:both;text-align:justify;'>'sat The "+dataRep["degTitle"]+" Examination, held in ............................................................... under Index Number "+dataRep['SudentNo']+" and reached the standard required for "+tmpGradeResult+" offering the following subjects: '</div><br/><br/>";	
		

			
		
	addsDiv += '<hr style="clear:both;" />';
	
	addsDiv+="<div style='clear:both;text-align:justify;'><u>";
	addsDiv+="No. and Title of Papers - "+dataRep["degTitle"]+"-";
	addsDiv+="</u></div>";
	
	addsDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >("+subjectNameArr[i]+") "+subjectTitleArr[i]+"</div></td>";										
	addsDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>"+marksArr[i]+"</div></td>";	
	
	addsDiv+="<div style='clear:both;text-align:justify;'>";
	addsDiv+="Grade point Average: "+tmpCalGPA.toFixed(2)+"";
	addsDiv+="</div>";
	
	
	addsDiv+="</div><br/><div style='page-break-after:always;'> </div>";
	
	
				
			var tempNo=k+1;
			if(tmpDownStudNoArr[tempNo]!=tmpDownStudNoArr[k])
			{
				//alert(substudentnoArr[tempNo]+" = "+substudentnoArr[k]);
				adfinaldsDiv+= addsDiv+addsDiv3;
			}
			
	
					
			
			}
		}
	}		
	if (chechCount!=0)
	{
	newPrint = window.open('','');
	doc = newPrint.document;
	doc.open();
	doc.write('<html><head><title>Print</title><script type="text/javascript">function printReport(){document.getElementById("printButton").style.display="none";window.print();}</script>');
	doc.write('<style type="text/css">body{margin:10px auto;font-family:tahoma;width:800px;height:auto;text-align:left;padding:15px;}select{border:none;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;}</style>');
	doc.write('</head><body>');
	doc.write(adfinaldsDiv);
	//doc.write(gtDiv);
	doc.write('<button id="printButton" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;text-align:center;" onclick=printReport();>Print</button>');
	doc.write('</body></html>');
	doc.close();
	}
	else
	{
		alert("Please select at least one student");
	}
	
		
}