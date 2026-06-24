function formCertificatePrintForm(dsp){
	
var rwcnt=1;
title1 = "Print Certificate";
		str = "";

	if(dsp == "formCertificatePrintForm"){
			
			

			keyDisabled = "Disabled";	

			
			str  = "<div id='formCertificatePrintForm'>";
			str += "<table  ><tr><td>"
			
			str += '<center><font color="#bd3303">'+title1+'</font></center></br>';

			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainCertificatePrintForm" >';
		
			str = '<input type="button" id="selectAllButt" style="margin-top:1px;float:left" class="btnB" value="Select All" onclick=AllStudentSelectForm();>';
			str += '<input type="button" id="selectNonButt" style="margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=AllStudentUnselectForm();>';
	            
			
			str +="<div  id='inputs' style='margin:0px 10px;clear:both'>";
			str +="<div class='investLabel' style='width:100;text-align:center'>List Selection</div>";
			str +="<div class='investLabel' style='width:100px;text-align:center'>Row Count</div>";
			str +="<div class='investLabel_l' style='width:200px;text-align:left'>Student Name</div>";
			str +="<div class='investLabel_l' style='width:200px;text-align:left'>Student No</div>";
			str +="<div class='investLabel_l' style='width:200px;text-align:left'>Final GPA</div>";
			str +="<div class='investLabel_l' style='width:200px;text-align:left'>Results Status</div>";
			
			for( i=0; i<pr_Length; i++){
				
				
				if (printStudNoArr.indexOf(printStudNoArr[i]) == printStudNoArr.lastIndexOf(printStudNoArr[i]) || (printStudNoArr.indexOf(printStudNoArr[i]) != printStudNoArr.lastIndexOf(printStudNoArr[i]) && printStudNoArr.indexOf(printStudNoArr[i])==i)){
							str +="<div class='info' id='certificateList"+i+"' style='clear:both;' name='testInfo"+i+"'>";// 
								
							str += "<div  class='investView' style='width:100px;text-align:center' name='SelectingAdd"+i+"' id='SelectingAdd"+i+"'>";
							str += "<input type='checkbox'  "+registeredChecked+"  id='checkSelectedPrint"+i+"' onChange='AddRowColorForm(certificateList"+i+", this)' name='checkSelectedPrint"+i+"' ' />";
							str += "</div>";
							
							str += "<div class='investView' style='width:100px;text-align:center' name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";
							str += rwcnt+"</div>";
															
							str += "<div class='investView_l' name='studentName"+inum+"' style='width:200px;text-align:left'  id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
							str += printStuNameArr[i]+"</div>";
											
							str += "<div  class='investView_l' name='studentNo"+inum+"' style='width:200px;text-align:left' id='studentNo"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
							str += printStudNoArr[i]+"</div>";
							
							str += "<div class='investView_l'style='width:200px;text-align:left'  name='gpa"+inum+"' id='gpa"+inum+"'";
							str += " onchange='dataRep[this.name]=this.value;'>"+printGPAArr[i]+"</div>";
							 
							str += "<div class='investView_l' style='width:200px;text-align:left'  name='results"+inum+"' id='results"+inum+"'";
							str += " onchange='dataRep[this.name]=this.value;'>"+printResultArr[i]+"</div>";
							
							str += "<br/>";
							str +="</div>"; 
							inum++;	
							rwcnt++;								
							
				}
				
			//
			}
			str += "</div>"; 	
				
				
				
			str += "<div style='clear:both'>";
			str += "<center>";
			str += '<input type="button" id="getPrint" class="btnD" value="Download Certificate"  onclick= "printCertificate()" >';
			str += '<input type="button" id="getPrintT" class="btnD" value="Download Transcript"  onclick= "printTranscript()" >';
			str += '<input type="button" class ="btnD" value="Return" onclick="resetPrintCertificate();showMenu('+"'main'"+');">';
			str += '<input type="button" id="btnDlogAdmi" class="btnD" value="logout"  onclick= logOut();></div>';
			str += "</div>";
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
	}

		return str;
}


function AddRowColorForm(q, _this) {
	if (change==1)
		{
			change=0;
		q.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		
		}
		else
		{
			change++;
		q.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		}
		
}

function AllStudentSelectForm() {
		for( i=0; i<pr_Length; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectedPrint'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = true;
				document.getElementById("selectAllButt").disabled= true;
				document.getElementById("selectNonButt").disabled= false;
			
			var nameid="certificateList";
				nameid+=i;
			if (change==1)
		{
			change=0;
		
		document.getElementById(nameid).style.backgroundColor =  '#d0d0fb' ;
		
		}
		else
		{
			
			change++;
		document.getElementById(nameid).style.backgroundColor = '#e7e7fd';
		
		}
		}
		}
}

function AllStudentUnselectForm(){
		for( i=0; i<pr_Length; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectedPrint'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = false;
				document.getElementById("selectAllButt").disabled= false;
				document.getElementById("selectNonButt").disabled= true;
				
				var idname="certificateList";
				idname+=i;
			if (change==1)
		{
			change=0;
		document.getElementById(idname).style.backgroundColor =  '#FDFDFD' ;
		
		}
		else
		{
			change++;
		document.getElementById(idname).style.backgroundColor = '#FDFDFD';
		
		}
		}
		}
		
}






function printCertificate(){
	
	var finalDiv="";	
	var addsDiv2="";
	var adfinaldsDiv="";
	var chechCount=0;

	for(var i=0; i<pr_Length; i++){
		
		if(document.getElementById('checkSelectedPrint'+i)){
			if(document.getElementById('checkSelectedPrint'+i).checked== true){


					dataRep['printStudentNo']=printStudNoArr[i];
					dataRep['printStudentName']=printStuNameArr[i];
					dataRep['printYear']=printYearArr[i];
					dataRep['printsemester']=printsemArr[i];
					dataRep['finalGPA']=printGPAArr[i];
					dataRep['finalResult']= printResultArr[i];
					dataRep['printMedium']= printMediumArr[i];
					dataRep['degreeTitle']= PrintdegreeTitleArr[i];
					dataRep['cr_examHeld']= printexamHeldArr[i];
					dataRep['cr_examValiddate']= printexamValiddateArr[i];
					dataRep['cr_resit']= printresitArr[i];
					dataRep['cr_credits']= printcreditsArr[i];
					

					var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
					var dd = new Date();
					//var d = dd.getUTCDate();
					var d = ("0" + dd.getUTCDate()).slice(-2)
					var m = dd.getUTCMonth();
					var y = dd.getUTCFullYear();
					var mn=m+1;
					var mn=months[dd.getUTCMonth()];
					var datelbl = d+" "+mn+","+y;
					var datelbl = mn+" "+d+", "+y;
					 
					adfinaldsDiv+='<p>&nbsp;</p>';
					//adfinaldsDiv+='<p>&nbsp;</p>';
					
					adfinaldsDiv+='<div style="width:100%;height:0%;float:right;text-align:right;margin-top:5px;margin-bottom:5px;font-family:tahoma;font-size:13px;"><span style="float:right; color:#000000"></span><span style="float:right; color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;'+datelbl+'</span></div>';
					

					adfinaldsDiv+='<p style="text-align: center;">This is to certify that</p>';

					adfinaldsDiv+='<p style="text-align: center;"><strong>---------'+dataRep['printStudentName']+'--------</strong></p>';

					if(PrintprogrammeTypeCodeArr[i]=="PRO0000013"){
					adfinaldsDiv+='<p>obtained the <strong>'+dataRep['degreeTitle']+'</strong> and reached the standard required, offering the following course units:</p>';
					}
					else{
					adfinaldsDiv+='<p>obtained the <strong>'+dataRep['degreeTitle']+' degree</strong> and reached the standard required, offering the following course units:</p>';	
					}


						adfinaldsDiv += '<table style="height: 52px; width: 606px; border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse;" border="1">';
						adfinaldsDiv += '<tbody>';
							adfinaldsDiv += '<tr>';
							adfinaldsDiv += '<td style="width: 100px; text-align: center;"><p><strong>Code</strong></p></td>';
							adfinaldsDiv += '<td style="width: 500px; text-align: center;"><p><strong>Title</strong></p></td>';
							adfinaldsDiv += '<td style="width: 50px; text-align: center;"><p><strong>Grade obtained</strong></p></td>';
							adfinaldsDiv += '<td style="width: 50px; text-align: center;"><p><strong>Credits</strong></p></td>';
							adfinaldsDiv += '<td style="width: 50px; text-align: center;"><p><strong>Status</strong></p></td>';
							adfinaldsDiv += '</tr>';
					
						
						
						
					
					for(k=0; k<cer_StudNoArr.length; k++){ 
				//if (PrintsubjectNameArr.indexOf(PrintsubjectNameArr[k]) == PrintsubjectNameArr.lastIndexOf(PrintsubjectNameArr[k]) || (PrintsubjectNameArr.indexOf(PrintsubjectNameArr[k]) != PrintsubjectNameArr.lastIndexOf(PrintsubjectNameArr[k]) && PrintsubjectNameArr.indexOf(PrintsubjectNameArr[k])==k)){

						if(cer_StudNoArr[k]== printStudNoArr[i]){
							
							adfinaldsDiv += '<tr>';
							adfinaldsDiv += '<td style="width: 100px; text-align: center;">&nbsp;'+PrintsubjectNameArr[k]+'</td>';
							adfinaldsDiv += '<td style="width: 500px; text-align: left;">&nbsp;'+PrintsubjectTitleArr[k]+'</td>';
							adfinaldsDiv += '<td style="width: 50px; text-align: center;">&nbsp;'+PrintGradeArr[k]+'</td>';
							adfinaldsDiv += '<td style="width: 50px; text-align: center;">&nbsp;'+PrintsubjectCreditsArr[k]+'</td>';
							

							var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];
							//var pFstatus = "";
							//alert(dataRep['degreeTitle']);
							if(dataRep['degreeTitle'] == "Master of Business (Accounting/Finance)"){
								//alert("ok1");
								var pFstatus1 = "";
								var tmpTestGrade1 = 'C-';
								if(PrintGradeArr[k]=='-'){
									pFstatus1 = "-";
								}
								else if(tmpTestGrade1 <= PrintGradeArr[k]){	
									pFstatus1= "Repeat";
								}else if(tmpTestGrade1 > PrintGradeArr[k]){
									pFstatus1 = "Pass";
								}
								adfinaldsDiv += '<td style="width: 50px; text-align: center;">'+pFstatus1+'</td>';
							}
							else{
								//alert("ok2");
								var pFstatus2 = "";
								var tmpTestGrade2 = 'B-';
								if(PrintGradeArr[k]=='-'){
									pFstatus2 = "-";
								}
								else if(tmpTestGrade2 < PrintGradeArr[k]){	
									pFstatus2 = "Repeat";
								}else if(tmpTestGrade2 >= PrintGradeArr[k]){
									pFstatus2 = "Pass";
								}
								adfinaldsDiv += '<td style="width: 50px; text-align: center;">'+pFstatus2+'</td>';
							}


							adfinaldsDiv += '</tr>';

						
						}

					}
					adfinaldsDiv += '</tbody>';
					adfinaldsDiv += '</table>';
					
					adfinaldsDiv+='<p><strong>Student Number :</strong>&nbsp;&nbsp;'+dataRep['printStudentNo']+'</p>';
					
					adfinaldsDiv+='<p><strong>Overall Grade Point Average :</strong>&nbsp;&nbsp;'+dataRep['finalGPA']+'</p>';
					
					if(dataRep['finalResult']=="Pass"){
					adfinaldsDiv+='<p><strong>Final Result :</strong>&nbsp;&nbsp;Pass</p>';
					}
					if(dataRep['finalResult']=="Merit"){
					adfinaldsDiv+='<p><strong>Final Result :</strong>&nbsp;&nbsp;Merit</p>';
					}
					
					if(dataRep['finalResult']=="Repeat"){
					adfinaldsDiv+='<p><strong>Final Result :</strong>&nbsp;&nbsp;Incomplete</p>';
					}
					
					if(PrintdurationArr[i]=="2 Years"){
						adfinaldsDiv+='<p><strong>Duration :</strong>&nbsp;2 Years </p>';
					}
					else if(PrintdurationArr[i]=="1 Year"){
						adfinaldsDiv+='<p><strong>Duration :</strong>&nbsp;1 Year </p>';
					}
					else if(PrintdurationArr[i]=="PG"){
						adfinaldsDiv+='<p><strong>Duration :</strong>&nbsp;1 Year </p>';
					}
					else if(PrintdurationArr[i]=="3 Years"){
						adfinaldsDiv+='<p><strong>Duration :</strong>&nbsp;3 Years </p>';
					}
					else{
						adfinaldsDiv+='<p></p>';
					}
					

					if(dataRep['printMedium']=="si"){
					adfinaldsDiv+='<p><strong>Medium&nbsp; :</strong>&nbsp;Sinhala</p>';
					}
					if(dataRep['printMedium']=="en"){
					adfinaldsDiv+='<p><strong>Medium&nbsp; :</strong>&nbsp;English</p>';
					}

					if(PrintdurationArr[i]=="2 Years"){
						adfinaldsDiv+='<p><strong>Title of the Thesis :</strong>&nbsp; </p>';
					}
					else if(PrintdurationArr[i]=="1 Year"){
						adfinaldsDiv+='<p></p>';
					}
					else if(PrintdurationArr[i]=="3 Years"){
						adfinaldsDiv+='<p><strong>Title of the Thesis :</strong>&nbsp; </p>';
					}
					else if(PrintdurationArr[i]=="PG"){
						adfinaldsDiv+='<p></p>';
					}
					else{
						adfinaldsDiv+='<p></p>';
					}
					

					adfinaldsDiv+='<p><strong>Total Credits :</strong>&nbsp;'+dataRep['cr_credits']+' </p>';
					
					adfinaldsDiv+='<p><strong>Exam Month & Year :</strong>&nbsp; </p>';
					adfinaldsDiv+='<p><strong>Result valid from :</strong>&nbsp; </p>';
					
					
					
					if(PrintdurationArr[i]=="2 Years"){
						adfinaldsDiv+='<p><strong>*SLQF Level :</strong>&nbsp;10 </p>';
					}
					else if(PrintdurationArr[i]=="1 Year"){
						adfinaldsDiv+='<p><strong>*SLQF Level :</strong>&nbsp;09 </p>';
					}
					else if(PrintdurationArr[i]=="PG"){
						adfinaldsDiv+='<p><strong>*SLQF Level :</strong>&nbsp;08 </p>';
					}
					else if(PrintdurationArr[i]=="3 Years"){
						adfinaldsDiv+='<p><strong>*SLQF Level :</strong>&nbsp;12 </p>';
					}
					else{
						adfinaldsDiv+='<p></p>';
					}
					
					
					adfinaldsDiv += '<table style="height: 120px; margin-left: auto; margin-right: auto; margin-top: 5px;" width="600">';
					adfinaldsDiv += '<tbody>';
					adfinaldsDiv += '<tr style="height: 30px;">';
					adfinaldsDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					//adfinaldsDiv += '<p></p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					//adfinaldsDiv += '<p></p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '<td style="width: 600px; height: 30px; ">';
					adfinaldsDiv += '<p style="text-align: center;">(R.M.M.L.B. Wewegama)</p>';
					//adfinaldsDiv += '<p style="text-align: center;"><strong>Deputy Registrar/Examinations&nbsp; &nbsp; &nbsp;</strong></p>';
					//adfinaldsDiv += '<p style="text-align: center;"><strong>for Registrar</strong>&nbsp;</p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '</tr>';
					
					adfinaldsDiv += '<tr style="height: 30px;">';
					adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					adfinaldsDiv += '<td style="width: 600px; text-align: center; height: 30px;"><strong>Deputy Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
					adfinaldsDiv += '</tr>';
					
					
					
					adfinaldsDiv += '<tr style="height: 30px;">';
					adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					adfinaldsDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					adfinaldsDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '<td style="width: 600px; text-align: center; height: 30px;">';
					//adfinaldsDiv += '<p></p>';
					adfinaldsDiv += '</td>';
					adfinaldsDiv += '</tr>';
					adfinaldsDiv += '</tbody>';
					adfinaldsDiv += '</table>';
					
					adfinaldsDiv+='<p style="font-size:11px;"><u>Grading System</u></p>';
					
				

					adfinaldsDiv+='<table style="width: 524px;border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse; font-size:11px;" border="1">';
					adfinaldsDiv+='<tbody>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Range of Marks</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Grade</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Grade Point Value</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Range of Marks</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Grade</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p><strong>Grade Point Value</strong></p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>85 - 100</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>A+</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>4.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>45 - 49</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>C+</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>2.3</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>70 - 84</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>A</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>4.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>40 - 44</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>C</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>2.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>65 - 69</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>A-</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>3.7</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>35 - 39</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>C-</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>1.7</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>60 - 64</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>B+</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>3.3</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>30 - 34</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>D+</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>1.3</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>55 - 59</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>B</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>3.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>25 - 29</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>D</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>1.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='<tr>';
					adfinaldsDiv+='<td style="width: 105px; text-align: center;">';
					adfinaldsDiv+='<p>50 - 54</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 28px; text-align: center;">';
					adfinaldsDiv+='<p>B-</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>2.7</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 104px; text-align: center;">';
					adfinaldsDiv+='<p>20 - 24</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 29px; text-align: center;">';
					adfinaldsDiv+='<p>E</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='<td style="width: 112px; text-align: center;">';
					adfinaldsDiv+='<p>0.0</p>';
					adfinaldsDiv+='</td>';
					adfinaldsDiv+='</tr>';
					adfinaldsDiv+='</tbody>';
					adfinaldsDiv+='</table>';
										
					//adfinaldsDiv+='<p>&nbsp;</p>';
					//adfinaldsDiv+='<p>&nbsp;</p>';
					adfinaldsDiv+='<p style="font-size:11px;">*Sri Lanka Qualification Framework Level</p>';
						// adfinaldsDiv += '<table style="height: 120px; margin-left: auto; margin-right: auto; margin-top: 5px;" width="600">';
					// adfinaldsDiv += '<tbody>';
					// adfinaldsDiv += '<tr style="height: 30px;">';
					// adfinaldsDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					// //adfinaldsDiv += '<p></p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					// //adfinaldsDiv += '<p></p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '<td style="width: 261px; height: 30px; ">';
					// adfinaldsDiv += '<p style="text-align: center;">(K.B.S.L. Wijeratne)</p>';
					// //adfinaldsDiv += '<p style="text-align: center;"><strong>Deputy Registrar/Examinations&nbsp; &nbsp; &nbsp;</strong></p>';
					// //adfinaldsDiv += '<p style="text-align: center;"><strong>for Registrar</strong>&nbsp;</p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '</tr>';
					
					// adfinaldsDiv += '<tr style="height: 30px;">';
					// adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					// adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					// adfinaldsDiv += '<td style="width: 261px; text-align: center; height: 30px;"><strong>Actg. Senior Assistant Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
					// adfinaldsDiv += '</tr>';
					
					
					
					// adfinaldsDiv += '<tr style="height: 30px;">';
					// adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					// adfinaldsDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					// adfinaldsDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '<td style="width: 261px; text-align: center; height: 30px;">';
					// //adfinaldsDiv += '<p></p>';
					// adfinaldsDiv += '</td>';
					// adfinaldsDiv += '</tr>';
					// adfinaldsDiv += '</tbody>';
					// adfinaldsDiv += '</table>';
	
	
	
			}
		}
	}


	
			var exportFilename = "certificate.doc";
			var csvData = new Blob([adfinaldsDiv], {type: '.ms-word;charset=utf-8;'});
		
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData, exportFilename);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData);
				link.setAttribute('download', exportFilename);
				document.body.appendChild(link);    
				link.click();
				document.body.removeChild(link);    
			}
	
}


function resetPrintCertificate(){
	dataRep['acYear'] = '';
	dataRep["degCode"] = '';
	dataRep["degTitle"] = '';
	pr_Length=0;
	cer_StudNoArr.length=0;
}






//--------------------------------------------------------------------------------
//Transcript

function printTranscript(){
	
	var finalDiv="";	
	var addsDiv2="";
	var transDiv="";
	var chechCount=0;

	for(var i=0; i<pr_Length; i++){
		
		if(document.getElementById('checkSelectedPrint'+i)){
			if(document.getElementById('checkSelectedPrint'+i).checked== true){


					dataRep['printStudentNo']=printStudNoArr[i];
					dataRep['printStudentName']=printStuNameArr[i];
					dataRep['printYear']=printYearArr[i];
					dataRep['printsemester']=printsemArr[i];
					dataRep['finalGPA']=printGPAArr[i];
					dataRep['finalResult']= printResultArr[i];
					dataRep['printMedium']= printMediumArr[i];
					dataRep['degreeTitle']= PrintdegreeTitleArr[i];
					dataRep['cr_examHeld']= printexamHeldArr[i];
					dataRep['cr_examValiddate']= printexamValiddateArr[i];
					dataRep['cr_resit']= printresitArr[i];
					//dataRep['Marks']= PrintMarksArr[i];
					

					var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
					var dd = new Date();
					var d = dd.getUTCDate(); 
					var m = dd.getUTCMonth();
					var y = dd.getUTCFullYear();
					var mn=m+1;
					var mn=months[dd.getUTCMonth()];
					var datelbl = d+" "+mn+","+y;
					
					
					
					transDiv+='<p style="text-align: center;"><strong><u>STRICTLY CONFIDENTIAL </u></strong></p>';
					transDiv+='<div style="width:100%;height:0%;float:right;text-align:right;margin-top:5px;margin-bottom:5px;font-family:tahoma;font-size:13px;"><span style="float:right; color:#000000"></span><span style="float:right; color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;'+datelbl+'</span></div>';
					transDiv+='<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
					transDiv+='<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
					transDiv+='<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
					transDiv+='<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
					transDiv+='<p>&nbsp;</p>';
					transDiv+='<p style="text-align: center;"><strong><u>Academic Transcript &ndash; '+dataRep['printStudentName']+'.</u></strong></p>';
					//transDiv+='<p style="text-align: center;">&nbsp;</p>';
					transDiv+='<p>At the request of Mr./Mrs. '+dataRep['printStudentName']+', his/her performances at the University examinations are forwarded herewith:</p>';
					transDiv+='<p>&nbsp;</p>';
					transDiv+='<ol>';
					transDiv+='<li>Full Name of the candidate :&nbsp;&nbsp; '+dataRep['printStudentName']+'</li>';
					transDiv+='</ol>';
					//transDiv+='<p>&nbsp;</p>';
					transDiv+='<ol start="2">';
					transDiv+='<li>Faculty&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp;&nbsp; Faculty of Graduate Studies</li>';
					transDiv+='<li>Degree&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp;&nbsp;'+dataRep['degreeTitle']+'</li>';
					transDiv+='<li>Mode of Examination&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; Course work &amp; Research</li>';
					
					
			
						
					if(PrintdurationArr[i]=="2 Years"){
						transDiv+='<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 2 Years</li>';
					}
					else if(PrintdurationArr[i]=="1 Year"){
						transDiv+='<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 1 Year</li>';
					}
					else if(PrintdurationArr[i]=="PG"){
						transDiv+='<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 1 Year</li>';
					}
					else if(PrintdurationArr[i]=="3 Years"){
						transDiv+='<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 3 Years</li>';
					}
					else{
						transDiv+='<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; </li>';
					}	
						

					if(dataRep['degreeTitle'] == "Master of Business in (Accounting/Finance)" ){
						
					transDiv+='<li>Total no. of Credits&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp; 44</li>';	
					}
					else{
					transDiv+='<li>Total no. of Credits&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp;'+dataRep['cr_credits']+'</li>';
					}
					transDiv+='<li>Grade Point Average (GPA)&nbsp; :&nbsp; <strong>'+dataRep['finalGPA']+'</strong></li>';
					transDiv+='</ol>';
					//transDiv+='<p>&nbsp;</p>';
					transDiv+='<ol start="8">';
					transDiv+='<li><strong><u>'+dataRep['degreeTitle']+'</u></strong><strong><u> &ndash; Part I</u></strong></li>';
					transDiv+='</ol>';
					if(dataRep['degreeTitle'] == "Master of Business in (Accounting/Finance)" ){
						transDiv+='<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Course Work</u></strong></p>';
					}
					else{
					transDiv+='<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>(40 Credits) Course Work</u></strong></p>';
					}
					//transDiv+='<p><strong><u>&nbsp;</u></strong></p>';
					transDiv+='<ol>';
					transDiv+='<li>a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date of Examination&nbsp;&nbsp;&nbsp;&nbsp; : '+dataRep['cr_examHeld']+'</li>';
					transDiv+='<li>b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Index Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <strong>'+dataRep['printStudentNo']+'</strong></li>';
					transDiv+='</ol>';
					
				
					
					transDiv += '<table style="height: 52px; width: 606px; border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse;" border="1">';
						transDiv += '<tbody>';
							transDiv += '<tr>';
							transDiv += '<td style="width: 100px; text-align: center;"><p><strong>Code</strong></p></td>';
							transDiv += '<td style="width: 500px; text-align: center;"><p><strong>Title of Paper</strong></p></td>';
							transDiv += '<td style="width: 50px; text-align: center;"><p><strong>No of Credits</strong></p></td>';
							transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Marks</strong></p></td>';
							transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Grade</strong></p></td>';
							transDiv += '</tr>';
					
					var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];
							
					for(k=0; k<cer_StudNoArr.length; k++){ 
			

						if(cer_StudNoArr[k]== printStudNoArr[i]){
							
							transDiv += '<tr>';
							transDiv += '<td style="width: 100px; text-align: center;">&nbsp;'+PrintsubjectNameArr[k]+'</td>';
							transDiv += '<td style="width: 500px; text-align: left;">&nbsp;'+PrintsubjectTitleArr[k]+'</td>';
							transDiv += '<td style="width: 50px; text-align: center;">&nbsp;'+PrintsubjectCreditsArr[k]+'</td>';
							transDiv += '<td style="width: 50px; text-align: center;">&nbsp;'+PrintMarksArr[k]+'</td>';
							transDiv += '<td style="width: 50px; text-align: center;">&nbsp;'+PrintGradeArr[k]+'</td>';
							transDiv += '</tr>';
							
						}

					}
					transDiv += '</tbody>';
					transDiv += '</table>';
					

					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>contd&hellip;&hellip;. 02</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -2-</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;</p>';
					//transDiv+='<p>&nbsp;</p>';
					
					//----crop protection
					// transDiv+='<ol start="9">';
					// transDiv+='<li><strong><u>'+dataRep['degreeTitle']+'</u></strong></li>';
					// transDiv+='</ol>';
					// transDiv+='<p><strong>&nbsp;&nbsp;&nbsp;&nbsp; <u>Part II</u>&nbsp; (20 Credits)</strong></p>';
					// transDiv+='<p>&nbsp;</p>';
					// transDiv+='<table width="618">';
					// transDiv+='<tbody>';
					// transDiv+='<tr>';
					// transDiv+='<td width="144">';
					// transDiv+='<p>a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CPBT 6301L</p>';
					// transDiv+='</td>';
					// transDiv+='<td width="408">';
					// transDiv+='<p>&nbsp;Research Project</p>';
					// transDiv+='</td>';
					// transDiv+='<td width="66">&nbsp;</td>';
					// transDiv+='</tr>';
					// transDiv+='</tbody>';
					// transDiv+='</table>';
					//------
					
					//transDiv+='<p>&nbsp;</p>';
					transDiv+='<ol start="10">';
					transDiv+='<li>Key to Grades</li>';
					transDiv+='</ol>';
					
					transDiv+='<table style="width: 524px;border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse; font-size:11px;" border="1">';
					transDiv+='<tbody>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p><strong>Range of Marks</strong></p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p><strong>Grade</strong></p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p><strong>Grade Point Value</strong></p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p><strong>Range of Marks</strong></p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p><strong>Grade</strong></p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p><strong>Grade Point Value</strong></p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>85 - 100</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>A+</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>4.0</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>45 - 49</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>C+</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>2.3</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>70 - 84</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>A</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>4.0</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>40 - 44</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>C</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>2.0</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>65 - 69</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>A-</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>3.7</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>35 - 39</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>C-</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>1.7</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>60 - 64</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>B+</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>3.3</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>30 - 34</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>D+</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>1.3</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>55 - 59</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>B</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>3.0</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>25 - 29</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>D</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>1.0</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='<tr>';
					transDiv+='<td style="width: 105px; text-align: center;">';
					transDiv+='<p>50 - 54</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 28px; text-align: center;">';
					transDiv+='<p>B-</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>2.7</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 104px; text-align: center;">';
					transDiv+='<p>20 - 24</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 29px; text-align: center;">';
					transDiv+='<p>E</p>';
					transDiv+='</td>';
					transDiv+='<td style="width: 112px; text-align: center;">';
					transDiv+='<p>0.0</p>';
					transDiv+='</td>';
					transDiv+='</tr>';
					transDiv+='</tbody>';
					transDiv+='</table>';
					
					
					transDiv+='<ol start="11">';
					if(dataRep['finalResult']=="Pass"){
					transDiv+='<li>Result : Reached the standard required for <strong>PASS</strong></li>';
					}
					if(dataRep['finalResult']=="Merit"){
					transDiv+='<li>Result : Reached the standard required for <strong>Merit</strong></li>';
					}
					if(dataRep['finalResult']=="Repeat"){
					transDiv+='<li>Result : Reached the standard required for <strong>Incomplete</strong></li>';
					}
					transDiv+='</ol>';
					
					//transDiv+='<p><strong>&nbsp;</strong></p>';
					
					transDiv+='<ol start="12">';
					transDiv+='<li>Results valid from : &nbsp;<strong>'+dataRep['cr_examValiddate']+'</strong></li>';
					transDiv+='</ol>';
					transDiv+='<p>&nbsp;</p>';
					
					transDiv += '<table style="height: 120px; margin-left: auto; margin-right: auto; margin-top: 5px;" width="600">';
					transDiv += '<tbody>';
					transDiv += '<tr style="height: 30px;">';
					transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					transDiv += '</td>';
					transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
					
					transDiv += '</td>';
					transDiv += '<td style="width: 261px; height: 30px; ">';
					transDiv += '<p style="text-align: center;">(R.M.M.L.B. Wewegama)</p>';
					transDiv += '</td>';
					transDiv += '</tr>';
					
					transDiv += '<tr style="height: 30px;">';
					transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
					transDiv += '<td style="width: 261px; text-align: center; height: 30px;"><strong>Deputy Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
					transDiv += '</tr>';
					
					
					
					transDiv += '<tr style="height: 30px;">';
					transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
					transDiv += '</td>';
					transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
					transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
					transDiv += '</td>';
					transDiv += '<td style="width: 261px; text-align: center; height: 30px;">';
					transDiv += '</td>';
					transDiv += '</tr>';
					transDiv += '</tbody>';
					transDiv += '</table>';
						
						
						
					
			
					

	
	
	
			}
		}
	}


	
			var exportFilename = "Transcript.doc";
			var csvData = new Blob([transDiv], {type: '.ms-word;charset=utf-8;'});
		
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData, exportFilename);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData);
				link.setAttribute('download', exportFilename);
				document.body.appendChild(link);    
				link.click();
				document.body.removeChild(link);    
			}
	
}
















