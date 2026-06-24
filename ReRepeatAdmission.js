dataRep['examDateYYYY'] = dataRep['examDateMM'] = dataRep['examDateDD'] ="";
dataRep['examTimeHHFrom']= dataRep['examTimeHHTo'] = dataRep['examTimeMMTo']= dataRep['examTimeMMFrom'] =currentTime="";
var Rerepsemcount1=Rerepsemcount2=Rerepsemcount3=Rerepsemcount4=Rerepsemcount0=0;

	currentdate = new Date();
	var year = currentdate.getFullYear();
	var month = (currentdate.getMonth()+1);
	var date = currentdate.getDate();
	var hours = currentdate.getHours();
	var min = currentdate.getMinutes();
	var secnds = currentdate.getSeconds();
	dataRep['examTimeHHFrom']=hours;
	dataRep['examTimeMMFrom'] = min;
	dataRep['examTimeHHTo']=hours;
	dataRep['examTimeMMTo']=min;
	
	
//var degreeCodeList = degreeCodeListNew="";
currentTime = hours+":"+min+":"+secnds;

dataRep['paperCode']="";

dataRep["substudentno"] = dataRep["substudentno"] ="";


dataRep["subjectTitle"] = dataRep["medium"] ="";

function refreshAdmission(){
	degreeCodeLength = studentNoLength =0;
	studentNameList = studentNoList ="";
	dataRep["studentNo"]=dataRep["studentName"]=dataRep["subjectTitle"]=dataRep["medium"]="";
	dataRep["studentInitial"]=dataRep['paperCode'] = "";
	dataRep["subjectCode"] = dataRep["studentPermanentAddress"] = dataRep["examdate"] ="";
	dataRep["starttime"] =  dataRep["endtime"] = dataRep["hallno"] = dataRep["degreeTitle"] =currentTime="";
	sendForm('data4getAdmissionStudent');
	sendForm('data4getAdmissionSubject');
}






function printReRepeatAdmission(){
	//var gtDiv = document.getElementById('ReRepadmissionFormTable').innerHTML;
	var addsReDiv="";	
	var addsReDiv2="";
	var addsReDiv3="";
	var adRefinaldsDiv="";
	var RechechCount=0;
	
	

	
			
	
	for(var i=0; i<studentNoLength; i++){
		
		if(document.getElementById('checkSelectingReRepAdd'+i)){
			if(document.getElementById('checkSelectingReRepAdd'+i).checked== true){
				RechechCount++;
				var RemoreThanOne=0;
	
//	alert(dataRep['studentNo']);
	
			dataRep['studentName']=studentNameArr[i];
			dataRep['studentPermanentAddress']=studentPermanentAddressArr[i];
			dataRep['studentNo']=studentNoArr[i];
			dataRep['faculty']=facultyTitleArr[i];
			dataRep['degreeTitle1']=degreeTitleArr[i];
			dataRep['subsemester']=ReRep_semesterArr[i];
	
			addsReDiv='<div style="width:100%;height:30px;">';
	
			addsReDiv+="<div style='float:left;width:10%;'>";
			//addsReDiv+="<img src='img/fgs.jpg' style='width:80px;height:80px;'/>";
			addsReDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
			addsReDiv+="</div>";
		

		
		var d = new Date();	
		var dYear =0;
		var dYear = d.getFullYear();
		
		var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		var now       = new Date();
		var thisMonth = months[now.getMonth()];
		
		var dd = new Date();
		var date = dd.getUTCDate(); 
		var mm = dd.getUTCMonth();
		//var mm = this.getMonth();
		var yr = dd.getUTCFullYear();
		var mn=("0" + (mm + 1)).slice(-2);
		//var nn=mn+1;
		//var mn=('0'+mm+1).slice(-2);
		var currentdate = yr+"/"+mn+"/"+date;
		
				var batchNo =document.getElementById('academicYearReRepeat').value;
		
					addsReDiv+="<div style='float:left;width:90%;'>";
					//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>'+facultyTitleArr[i]+'</b> - University of Kelaniya</h3></div>';
					addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>Faculty of Graduate Studies</b> - University of Kelaniya</h3></div>';
					addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">'+dataRep['degreeTitle1']+' - '+batchNo+' Batch</h3></div>';
		
			
					var selectedRepeatDegree =document.getElementById('degreeWiseReRepeatAdmision').value;

			
			for(var n = 0; n<degreeCodeLength; n++){
				if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n])==n)){
			
					if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "1"){	//alert(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]);
					 
							//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">First Semester Examination</h3></div>';
							//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">January - '+dYear+'</h3></div>';
							addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
					}
					if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "2"){	
						
							//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Second Semester Examination</h3></div>';
							addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
					
					}
					if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "3"){	
						
						//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Third Semester Examination</h3></div>';
						//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">May '+dYear+' </h3></div>';
						//addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">January - '+dYear+'</h3></div>';
						addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
					}
					if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "4"){	
						
							addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
					}
					
					if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "0"){
						
							addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
					}
			
					// if(selectedRepeatDegree=="Master of Business Administration"){
						
							// addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">December Examination - '+dYear+'</h3></div>';
					// }
				}
	
			}
			
			
			
			
			
			addsReDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Admission Card - Re-Repeat</h3></div>';
			addsReDiv+="</div>";
		
			
		
			addsReDiv += '</div><hr style="clear:both;" />';
			addsReDiv+="<div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'><div style='float:left;font-weight:bold;margin-right:5px;'>Name in full</div><div style='float:left;'>&nbsp;:&nbsp;</div><div style='float:left;'>"+dataRep['studentName']+"</div></div>"; 
			addsReDiv+="<br/><div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'>";
				addsReDiv+="<div style='float:left;width:80%;'>";
					addsReDiv+="<div style='float:left;margin-right:10px;font-weight:bold;'>Student Number</div><div style='float:left;'>&nbsp;&nbsp;:&nbsp;</div><div style='float:left;'>"+dataRep['studentNo']+"</div>";
				addsReDiv+="</div>";
				addsReDiv+="<div style='float:left;width:20%;'>";
					//addsReDiv+="<div style='float:left;'></div><div style='float:left;font-size:12px;width:60%;font-weight:bold;'>"+dataRep['subjectTitle']+"&nbsp;&nbsp;"+dataRep["medium"]+"&nbsp;"+"Medium"+"</div>";
				//addsReDiv+="</div>";
			addsReDiv+="</div>";
			
			addsReDiv+="<br/><br/><div style='clear:both;font-family:tahoma;font-size:12px;font-weight:bold;width:100%;height:40px;border:1px solid #000000;'>";
				addsReDiv+="<div style='float:left;width:24%;height:100%;border-right:1px solid #000000;text-align:center;'>Date/Time</div>";
				addsReDiv+="<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;'>Paper Code/Exam Hall</div>";
				addsReDiv+="<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;;'>Signature of the Applicant</div>";
				addsReDiv+="<div style='float:left;width:25%;height:100%;text-align:center;'>Signature of the Supervisor</div>";
			addsReDiv+="</div>";
	
	
		
			
		for (k=0; k<ReRep_studentNoArr.length; k++)
		{
			
			if(document.getElementById('degreeWiseReRepeatAdmision').value==degreeTitleArr[i] & ReRep_studentNoArr[k]== studentNoArr[i]){	//
			
					RemoreThanOne++;
							if(RemoreThanOne==1)
							{
								
							addsReDiv2="<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
							}
							else
							{
							addsReDiv2+="<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
							}
							addsReDiv2+="<div style='float:left;width:24%;height:50px;border-right:1px solid #000000;text-align:center;'>";
							addsReDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+ReRepeat_examdateArr[k]+" / "+ReRepeat_starttimeArr[k]+"-"+ReRepeat_endtimeArr[k]+"</div>";
							
							addsReDiv2 += '</div>';
							
							addsReDiv2+="<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;'>";
							addsReDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+ReRepeat_subjectCodeArr[k]+"</div>";
				
							addsReDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+ReRepeat_hallnoArr[k]+"</div>";
						
							addsReDiv2 += '</div>';
							addsReDiv2+="<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;;'></div>";
							addsReDiv2+="<div style='float:left;width:25%;height:50px;text-align:center;'></div>";
							addsReDiv2+="</div>";
							
					
							
						addsReDiv3="<br/>";
	
	

		 addsReDiv3+="<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;font-style: italic;text-decoration:underline;'>Certification of Signature and Name</div>";
	 	 addsReDiv3+="<br/><div style='clear:both;width:100%;font-family:tahoma;font-size:12px;'>";
		 addsReDiv3+="<div style='clear:both;width:100%;'>";			
		 addsReDiv3+="</div>";		
		 addsReDiv3+="<div style='clear:both;text-align:justify;line-height: 0.5cm;'>I certify that my name is correct in this admission and it will appear in my results sheet, certificates, and all other records accordingly. I understand that the name appears in this admission will appear in all records including certificates and requests received to correct the name after issuing results will not be accepted [If you have changed your name or if your name is not correct in our records/system please, inform immediately in writing with evidence to make corrections]. </div><br/>";
		 addsReDiv3+="<div>Signature of the Student&nbsp;............................................ &nbsp;&nbsp;Date&nbsp;................................. &nbsp;&nbsp;NIC/Driving License/Passport No:...........................................</div><br/>";

addsReDiv3+="<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";

		//if(rep_facCodeArr[i]=="FAC03")
		{
		addsReDiv3+="<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'><i>Certification of the Attester</i></div><br/>";
		}
		addsReDiv3+="<div style='clear:both;width:100%;'>";
			addsReDiv3+="<div style='float:left;text-align:justify;'>Signature of the Attester </div>";
			addsReDiv3+="<div style='float:left;width:25%;'>.............................................</div>";
			addsReDiv3+="<div style='margin-left: 630px;text-align:justify;'>Date ";//</div>  <div style='float:left;width:25%;'>
			addsReDiv3+="......................................</div>";//text-align:justify;
		addsReDiv3+="</div>";
		//addsReDiv3+="<div style='clear:both;'>Name, Designation and official stamp of Attester</div>";
		
		addsReDiv3+="<div style='clear:both;text-align:justify;line-height: 1cm;'>Name:..................................................................................................................................................................................................................</div>";
		addsReDiv3+="<div style='clear:both;text-align:justify;line-height: 1cm;'>Designation:.....................................................................................</div>";
		addsReDiv3+="<div style='margin-left: 630px;text-align:justify;line-height: 1cm;'>Official stamp:</div>";
		
		addsReDiv3+="<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";

		
		// addsReDiv3+="<br/><br/><br/><div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'>Instructions for the certification of signature</div>";
		// addsReDiv3+="<br/>";
		
		

			// addsReDiv3+="<div style='clear:both;text-align:justify;'>";
			
				// addsReDiv3+="The signature of the applicant should be certified by a Permanent academic member/Executive officer of the University of Kelaniya or a Principal of a Government School /Grama Niladari of the GN Division/Justice of Peace/ Commissioned officer of the Armed Forces/incumbent or the High Priest of a Temple/a Priest of a Temple/a Priest of any other Religious Place or a Clergy of important Position or a Permanent Staff officer drawing Rs. 79,080.00 or above annual consolidated salary in Public Sector or Local Government sector.";
			// addsReDiv3+="</div>";
			// addsReDiv3+="<br/><div style='clear:both;text-align:justify;'>";
				// addsReDiv3+="After sitting for the question paper, this admission card should be handed over to the Supervisor of the examination hall in order to be submitted to the exams branch. ";
			// addsReDiv3+="</div>";
			// addsReDiv3+="<br/><div style='clear:both;text-align:justify;'>";
				// addsReDiv3+="It is compulsory for every candidate to carry on this admission card along with the University Identity Card, and present it to the supervisor of the examination hall. ";
			// addsReDiv3+="</div><br/><br/>";	

		
			
			addsReDiv3+="&nbsp;&nbsp;<div style='clear:both;'>Sgd.</div>";
		addsReDiv3+="<div style='clear:both;'>Deputy Registrar</div>";
		addsReDiv3+="<div style='clear:both;'>Faculty of Graduate Studies</div>";
		addsReDiv3+="<div style='clear:both;'>University of Kelaniya</div>";
	
			//addsReDiv3+="&nbsp;&nbsp;<img src='img/examdrsign.jpg' style='width:150px;height:80px;'/><br/><div style='clear:both;'>Deputy Registrar</div>";
		//addsReDiv3+="<div style='clear:both;'>Examination</div>";
		addsReDiv3+="<div style='clear:both;'>"+currentdate+"</div>";
	addsReDiv3+="</div>";
	addsReDiv3+="<br/><div style='clear:both;width:100%;height:100px;font-family:tahoma;font-size:12px;border:1px solid #000000;'>";
		addsReDiv3+="<div style='float:left;width:40%;height:100%;border-right:1px solid #000000;margin-left:5px;'>";
			addsReDiv3+="<div style='clear:both;margin-top:5px;font-weight:bold;'>Return:</div>";
			addsReDiv3+="<div style='clear:both;'>Deputy Registrar</div>";
		addsReDiv3+="<div style='clear:both;'>Faculty of Graduate Studies</div>";
		addsReDiv3+="<div style='clear:both;'>University of Kelaniya</div>";
			//addsReDiv3+="<div style='clear:both;'>Deputy Registrar,Examination,University of Kelaniya</div>";
		addsReDiv3+="</div>";
		addsReDiv3+="<div style='float:left;width:59%;'>";
			addsReDiv3+="<div style='clear:both;margin-top:5px;font-weight:bold;margin-left:5px;'>To:</div>";
			addsReDiv3+="<div style='clear:both;margin-left:50px;'>"+dataRep['studentName']+"</div>";
			addsReDiv3+="<div style='clear:both;margin-left:50px;'>"+dataRep['studentPermanentAddress']+"</div>";
		addsReDiv3+="</div>";
	addsReDiv3+="</div><br/><div style='page-break-after:always;'> </div>";

						var tempNo=k+1;
						if(ReRep_studentNoArr[tempNo]!=ReRep_studentNoArr[k])
						{
						
							adRefinaldsDiv+= addsReDiv+addsReDiv2+addsReDiv3;
						}
			
	
					
				}
				
				
				
				
				}
			
			}
	
		}
	
	}
		if (RechechCount!=0)
		{
		newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		doc.write('<html><head><title>Print</title><script type="text/javascript">function printReport(){document.getElementById("printButton").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">body{margin:10px auto;font-family:tahoma;width:800px;height:auto;text-align:left;padding:15px;}select{border:none;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;}</style>');
		doc.write('</head><body>');
		doc.write(adRefinaldsDiv);
		doc.write('<button id="printButton" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;text-align:center;" onclick=printReport();>Print</button>');
		doc.write('</body></html>');
		doc.close();
		}
		else
		{
			alert("Please select at least one student");
		}
	
		
}



var studentNameList = studentNoList = studentNICList = "";
function formReRepeatAdmissionForm(dsp){
	
	
	
//title1 ="FACULTY OF SOCIAL SCIENCES - UNIVERSITY OF KELANIYA" 

//title2 = "MA/MSSC Examination 2013";
title1 = "Repeat Examination Admission Card";
		str = "";

	if(dsp == "formReRepeatAdmissionForm"){
				//alert(studentNoArr);
			

			keyDisabled = "Disabled";	

			
			str  = "<div id='addReRepeatAdmissionForm'>";
			str += "<table  ><tr><td>"
			//str += '</br><h10><center><font color="#bd3303">'+title1+'</font></center></h10></br>';
			//str += '<center><font color="#bd3303">'+title2+'</font></center></br>';
			str += '<center><font color="#bd3303">'+title1+'</font></center></br>';
	
			
			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainReRepeatAdmissionForm" >';
			
			

			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			var degreeCodeList = "<option>Please scroll down to see the records</option>";
			
			if(dataRep['roleName']=="Assistant Registrar"  ){
			
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					if(dataRep['roleName']=="Assistant Registrar" & dataRep['facultyCode']==rep_facCodeArr[degLoop]){
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+ReRepeat_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					}	
				}repSub_degreeCodeArr[degLoop]
			}
			else if (dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator')
			{				
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					if(((dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator') && dataRep['departmentCode']==ReRepeat_subjectCodeArr[degLoop])|| ((dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator') && dataRep['programmeCode']==ReRepeat_subjectCodeArr[degLoop])){
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+ReRepeat_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					}	
				}
			}
			else
			{
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					//if(dataRep['roleName']=="Assistant Registrar" & dataRep['facultyCode']==rep_facCodeArr[degLoop]){//
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+ReRepeat_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					//}	
				}
				
			}
	
			str += "<select id='degreeWiseReRepeatAdmision' name='degreeWiseReRepeatAdmision' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeList ;
			str += "</select></div>";
			
			
			str += "<div style='clear:both'>";
			dataRep['academicYearReRepeat']="";
			str +="<div class='longIdentifier'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYearReRepeat' value='academicYearReRepeat' onchange='dataRep[this.id]=this.selectedIndex;showReRepSemesters();'>";//displaySubjectCode();
			str += generateNumberOptions(2015, 2050, 4, dataRep['academicYearReRepeat']);
			str += "</select>";
		
			
			
			
			
			
			str  += "<div id='ReRepSemDiv'></div>";
			
			str  += "<div id='ReRepadmissionFormTable'></div>";


			str += "<div style='clear:both'>";
			str += "<center>";
	
			str += '<input type="button" class ="btnD" value="Return" onclick="resetRepeatAdmission();showMenu('+"'main'"+');;">';
			
			str += '<input type="button" id="btnDlogAdmi" class="btnD" value="logout"  onclick= logOut();></div>';
			
			str += "</div>";
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
	}

		return str;
}

function AddRowColorAdmissionForm(q, _this) {
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

function AllReStudentSelect() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectingReRepAdd'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = true;
				document.getElementById("selectAllButt").disabled= true;
				document.getElementById("selectNonButt").disabled= false;
			
			var nameid="ReRepeatList1";
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

function AllReStudentUnselect() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectingReRepAdd'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = false;
				document.getElementById("selectAllButt").disabled= false;
				document.getElementById("selectNonButt").disabled= true;
				
				var idname="ReRepeatList1";
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


function viewReRepeatAdmissionlist()
{
	var rwcnt=1;
	if(document.getElementById('degreeWiseReRepeatAdmision').value=="Please scroll down to see the records" ){				
	alert("Please Select a value from the select Box(s)");			
	}
else{
	//alert(ReRep_studentNoArr);
        var	newStr = '<input type="button" id="selectAllButt" style="margin-top:1px;float:left" class="btnB" value="Select All" onclick=AllReStudentSelect();>';
				newStr += '<input type="button" id="selectNonButt" style="margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=AllReStudentUnselect();>';
	            
			
				newStr +="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					//newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='width:100;text-align:center'>List Selection</div>";
					newStr +="<div class='investLabel' style='width:100px;text-align:center'>Row Count</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Student Name</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Student No</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Address</div>";
	
		for( i=0; i<studentNoLength; i++){
		
			
			for (k=0; k<ReRep_studentNoArr.length; k++){
			//alert(ReRep_studentNoArr[k]);
				if(document.getElementById('degreeWiseReRepeatAdmision').value==degreeTitleArr[i] & ReRep_studentNoArr[k]==studentNoArr[i]){ // & studentNoArr[i]==
		
					if(document.getElementById('academicYearReRepeat').value==ReRep_achedamicYearArr[k]){	
	
						if (ReRep_studentNoArr.indexOf(ReRep_studentNoArr[k]) == ReRep_studentNoArr.lastIndexOf(ReRep_studentNoArr[k]) || (ReRep_studentNoArr.indexOf(ReRep_studentNoArr[k]) != ReRep_studentNoArr.lastIndexOf(ReRep_studentNoArr[k]) && ReRep_studentNoArr.indexOf(ReRep_studentNoArr[k])==k)){
				
			
								newStr +="<div class='info' id='ReRepeatList1"+i+"' style='clear:both;' name='testInfo"+i+"'>";// 
									
								newStr += "<div  class='investView' style='width:100px;text-align:center' name='SelectingAdd"+i+"' id='SelectingAdd"+i+"'>";
								newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkSelectingReRepAdd"+i+"' onChange='AddRowColorAdmissionForm(ReRepeatList1"+i+", this)' name='checkSelectingReRepAdd"+i+"' ' />";
								newStr += "</div>";
								
								newStr += "<div class='investView' style='width:100px;text-align:center' name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";
								newStr += rwcnt+"</div>";
																
								newStr += "<div class='investView_l' name='studentName"+inum+"' style='width:200px;text-align:left'  id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
								newStr += studentNameArr[i]+"</div>";
												
								newStr += "<div  class='investView_l' name='applicationNo"+inum+"' style='width:200px;text-align:left' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
								newStr += studentNoArr[i]+"</div>";
								
								newStr += "<div class='investView_l' style='width:200px;text-align:left'  name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
								newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div>";
								
								
								
								
								newStr += "<br/>";
								newStr +="</div>";  
								inum++;	
								rwcnt++;	
						
							//}
						}		
					}
				}
			}
			newStr += "</div>"; 
		
			
		}
		newStr += '<input type="button" id="getRePrint" class="btnD" value="Print Admission"  onclick= "printReRepeatAdmission()" >';
		newStr += '<input type="button" id="download" class="btnD" value="Download List"  onclick= "Rerep_examDownloadSheet()" >';
		
	
		document.getElementById('ReRepadmissionFormTable').innerHTML = newStr;	 

	}
}
	
function showReRepSemesters() {
	//alert("ok");
	//alert(document.getElementById('degreeWiseReRepeatAdmision').value);
	var selectedRepeatDegree =document.getElementById('degreeWiseReRepeatAdmision').value;
	var reRepStr = "";
	reRepStr += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			reRepStr +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
			//alert(selectedRepeatDegree);
			
	for(var n = 0; n<degreeCodeLength; n++) {
		if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n])==n)){
			
				if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "1"){	//alert(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]);
				 if(Rerepsemcount1==0)
					{
					reRepStr +="<input type='radio' name='ReRepappSemester' id='ReappSem1' value='1' onchange='dataRep[this.name]=this.value;viewReRepeatAdmissionlist();'>1";
					Rerepsemcount1++;
					}
				}
				if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "2"){	
					 if(Rerepsemcount2==0)
					{
				reRepStr +="<input type='radio' name='ReRepappSemester' id='ReappSem2' value='2' onchange='dataRep[this.name]=this.value;viewReRepeatAdmissionlist();'>2";
					Rerepsemcount2++;
					}
				
				}
				if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "3"){	
					if(Rerepsemcount3==0)
					{
						reRepStr +="<input type='radio' name='ReRepappSemester' id='ReappSem3' value='3' onchange='dataRep[this.name]=this.value;viewReRepeatAdmissionlist();'>3";
					Rerepsemcount3++;
					}
				
				}
				if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "4"){	
					if(Rerepsemcount4==0)
					{
						reRepStr +="<input type='radio' name='ReRepappSemester' id='ReappSem4' value='4' onchange='dataRep[this.name]=this.value;viewReRepeatAdmissionlist();'>4";
					Rerepsemcount4++;
					}
				
				}
				
				if(selectedRepeatDegree==rep_DegreeTitleArr[n] && ReRep_semesterArr[n]== "0"){	
				//alert(selectedRepeatDegree);
					if(Rerepsemcount0==0)
					{	
						reRepStr +="<input type='radio' name='ReRepappSemester' id='ReappSem0' value='0' onchange='dataRep[this.name]=this.value;viewReRepeatAdmissionlist();'>End of Year";
					Rerepsemcount0++;
					}
				}
			
		}
		//}
	}
		
			
		reRepStr +="</div>";
		
			reRepStr +="</div></br>";
	
	document.getElementById('ReRepSemDiv').innerHTML = reRepStr;
	document.getElementById('academicYearReRepeat').disabled= true;
	document.getElementById('degreeWiseReRepeatAdmision').disabled= true;
}





		
	
function resetRepeatAdmission(){
	//degreeCodeLength =0;
	studentNoLength =0;
}

	function Rerep_examDownloadSheet(){
		if(document.getElementById('degreeWiseReRepeatAdmision').selectedIndex != 0 
			&& document.getElementById('academicYearReRepeat').value != ""){
			
			dataRep["degCode"] = document.getElementById(document.getElementById('degreeWiseReRepeatAdmision').value).title;
			dataRep["acYear"] = document.getElementById('academicYearReRepeat').value;

			// alert(dataRep["degCode"] +"/"+ dataRep["acYear"]);
			// var degTitle = document.getElementById('degreeWiseReRepeatAdmision').value;
			// var BatchYear = document.getElementById('academicYearReRepeat').value;
			
			
			sendForm('data4Rerep_examDownload');
		}
		else{
				alert('Select relevant fields');
			}
	
		
	}	
	
	