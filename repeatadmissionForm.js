dataRep['examDateYYYY'] = dataRep['examDateMM'] = dataRep['examDateDD'] ="";
dataRep['examTimeHHFrom']= dataRep['examTimeHHTo'] = dataRep['examTimeMMTo']= dataRep['examTimeMMFrom'] =currentTime="";
var repsemcount1=repsemcount2=repsemcount3=repsemcount4=repsemcount0=0;

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


function setValuesforAdmission(){

	for(var i=0; i<studentNoArr.length; i++){

		if(dataRep['studentNo']==studentNoArr[i]){
		
			dataRep['studentName']= studentNameArr[i];
			dataRep["subjectCode"] = rep_subjectCodeArr[i];
			dataRep["medium"]= mediumArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[i];
			dataRep["examdate"] = rep_examdateArr[i];
			dataRep["starttime"] =  rep_starttimeArr[i];
			dataRep["endtime"] = rep_endtimeArr[i];
			dataRep["hallno"] = rep_hallnoArr[i];
			dataRep["degreeTitle"] = degreeTitleArr[i];
			
	
		}else if(dataRep['studentName']==studentNameArr[i]){
		

			dataRep['studentNo'] = studentNoArr[i];
			dataRep["subjectCode"] = rep_subjectCodeArr[i];
			dataRep["medium"]= mediumArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[i];
			dataRep["examdate"] = rep_examdateArr[i];
			dataRep["starttime"] =  rep_starttimeArr[i];
			dataRep["endtime"] = rep_endtimeArr[i];
			dataRep["hallno"] = rep_hallnoArr[i];
			dataRep["degreeTitle"] = degreeTitleArr[i];
			

		}
	}
}



function printRepeatAdmission(){
	//var gtDiv = document.getElementById('admissionFormTable').innerHTML;
	var addsDiv="";	
	var addsDiv2="";
	var addsDiv3="";
	var adfinaldsDiv="";
	var chechCount=0;
	
	

	
			
	
	for(var i=0; i<studentNoLength; i++){
		
		if(document.getElementById('checkSelectingAdd'+i)){
							if(document.getElementById('checkSelectingAdd'+i).checked== true){
		chechCount++;
	var moreThanOne=0;
	
	//alert(dataRep['subsemester']);
	
	dataRep['studentName']=studentNameArr[i];
	dataRep['studentPermanentAddress']=studentPermanentAddressArr[i];
	dataRep['studentNo']=studentNoArr[i];
	dataRep['faculty']=facultyTitleArr[i];
	dataRep['degreeTitle1']=degreeTitleArr[i];
	dataRep['subsemester']=rep_semesterArr[i];
	
	addsDiv='<div style="width:100%;height:30px;">';
	
	addsDiv+="<div style='float:left;width:10%;'>";
			//addsDiv+="<img src='img/fgs.jpg' style='width:80px;height:80px;'/>";
			addsDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
		addsDiv+="</div>";
		
	//addsDiv+="<div style='float:right;width:10%;'>Temporary Admission";
			// addsDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
	//addsDiv+="</div>";
		
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
		
		var batchNo =document.getElementById('academicYear').value;
		
		addsDiv+="<div style='float:left;width:90%;'>";
			//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>'+facultyTitleArr[i]+'</b> - University of Kelaniya</h3></div>';
			addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>Faculty of Graduate Studies</b> - University of Kelaniya</h3></div>';
		addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">'+dataRep['degreeTitle1']+' - '+batchNo+' Batch</h3></div>';
			
			
var selectedDegree =document.getElementById('degreeWiseAdmision').value;

			
			for(var n = 0; n<degreeCodeLength; n++) {
		if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n])==n)){
			
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "1"){	//alert(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]);
				 
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">First/Second Semester Examination</h3></div>';
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">January - '+dYear+'</h3></div>';
					addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September '+dYear+'</h3></div>';
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "2"){	
					
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Second Semester Examination</h3></div>';
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">January - '+dYear+'</h3></div>';
						addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "3"){	
					
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Third Semester Examination</h3></div>';
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">January - '+dYear+'</h3></div>';
				addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "4"){	
					
						addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
						//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">May - 2022</h3></div>';
				}
				
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "0"){
					
						addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">September - '+dYear+'</h3></div>';
				}
				// if(selectedDegree=="Master of Business Administration"){
					
						// addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">December Examination - '+dYear+'</h3></div>';
				// }
			
		}
		//}
	}
			
			
			
			
			
			addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Admission Card - Repeat</h3></div>';
		addsDiv+="</div>";
		
			
		
	addsDiv += '</div><hr style="clear:both;" />';
	addsDiv+="<div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'><div style='float:left;font-weight:bold;margin-right:5px;'>Name in full</div><div style='float:left;'>&nbsp;:&nbsp;</div><div style='float:left;'>"+dataRep['studentName']+"</div></div>"; 
	addsDiv+="<br/><div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'>";
		addsDiv+="<div style='float:left;width:80%;'>";
			addsDiv+="<div style='float:left;margin-right:10px;font-weight:bold;'>Student Number</div><div style='float:left;'>&nbsp;&nbsp;:&nbsp;</div><div style='float:left;'>"+dataRep['studentNo']+"</div>";
		addsDiv+="</div>";
		addsDiv+="<div style='float:left;width:20%;'>";
			//addsDiv+="<div style='float:left;'></div><div style='float:left;font-size:12px;width:60%;font-weight:bold;'>"+dataRep['subjectTitle']+"&nbsp;&nbsp;"+dataRep["medium"]+"&nbsp;"+"Medium"+"</div>";
		//addsDiv+="</div>";
	addsDiv+="</div>";
	
	addsDiv+="<br/><br/><div style='clear:both;font-family:tahoma;font-size:12px;font-weight:bold;width:100%;height:40px;border:1px solid #000000;'>";
		addsDiv+="<div style='float:left;width:24%;height:100%;border-right:1px solid #000000;text-align:center;'>Date/Time</div>";
		addsDiv+="<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;'>Paper Code/Exam Hall</div>";
		addsDiv+="<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;;'>Signature of the Applicant</div>";
		addsDiv+="<div style='float:left;width:25%;height:100%;text-align:center;'>Signature of the Supervisor</div>";
	addsDiv+="</div>";
	
	
		//if(dataRep["studentNo"] == studentNoArr[i] && dataRep["studentName"] == studentNameArr[i]){	
				
			//if (studentExamIdArr.indexOf(studentExamIdArr[i]) == studentExamIdArr.lastIndexOf(studentExamIdArr[i]) || (studentExamIdArr.indexOf(studentExamIdArr[i]) != studentExamIdArr.lastIndexOf(studentExamIdArr[i]) && studentExamIdArr.indexOf(studentExamIdArr[i])==i)){
			
			for (k=0; k<rep_studentnoArr.length; k++)
			{
			
			if(document.getElementById('degreeWiseAdmision').value==degreeTitleArr[i] & rep_studentnoArr[k]== studentNoArr[i]){	
			//if (rep_subjectCodeArr.indexOf(rep_subjectCodeArr[k]) == rep_subjectCodeArr.lastIndexOf(rep_subjectCodeArr[k]) || (rep_subjectCodeArr.indexOf(rep_subjectCodeArr[k]) != rep_subjectCodeArr.lastIndexOf(rep_subjectCodeArr[k]) && rep_subjectCodeArr.indexOf(rep_subjectCodeArr[k])==k)){
			moreThanOne++;
					if(moreThanOne==1)
					{
						// if (k!=0)
						// {
							
						// }
					addsDiv2="<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
					}
					else
					{
					addsDiv2+="<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
					}
					addsDiv2+="<div style='float:left;width:24%;height:50px;border-right:1px solid #000000;text-align:center;'>";
					addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+rep_examdateArr[k]+" / "+rep_starttimeArr[k]+"-"+rep_endtimeArr[k]+"</div>";
					//addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+starttimeArr[k]+"-"+endtimeArr[k]+"</div>";
					addsDiv2 += '</div>';
					
					addsDiv2+="<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;'>";
					addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+rep_subjectCodeArr[k]+"</div>";
		
					addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+rep_hallnoArr[k]+"</div>";
				
					addsDiv2 += '</div>';
					addsDiv2+="<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;;'></div>";
					addsDiv2+="<div style='float:left;width:25%;height:50px;text-align:center;'></div>";
					addsDiv2+="</div>";
					
		//	}		
					
		 addsDiv3="<br/>";
	
	
		 addsDiv3+="<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;font-style: italic;text-decoration:underline;'>Certification of Signature and Name</div>";
	 	 addsDiv3+="<br/><div style='clear:both;width:100%;font-family:tahoma;font-size:12px;'>";
		 addsDiv3+="<div style='clear:both;width:100%;'>";			
		 addsDiv3+="</div>";		
		 addsDiv3+="<div style='clear:both;text-align:justify;line-height: 0.5cm;'>I certify that my name is correct in this admission and it will appear in my results sheet, certificates, and all other records accordingly. I understand that the name appears in this admission will appear in all records including certificates and requests received to correct the name after issuing results will not be accepted [If you have changed your name or if your name is not correct in our records/system please, inform immediately in writing with evidence to make corrections]. </div><br/>";
		 addsDiv3+="<div>Signature of the Student&nbsp;............................................ &nbsp;&nbsp;Date&nbsp;................................. &nbsp;&nbsp;NIC/Driving License/Passport No:...........................................</div><br/>";

addsDiv3+="<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";

		//if(rep_facCodeArr[i]=="FAC03")
		{
		addsDiv3+="<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'><i>Certification of the Attester</i></div><br/>";
		}
		

		addsDiv3+="<div style='clear:both;width:100%;'>";
			addsDiv3+="<div style='float:left;text-align:justify;'>Signature of the Attester </div>";
			addsDiv3+="<div style='float:left;width:25%;'>.............................................</div>";
			addsDiv3+="<div style='margin-left: 630px;text-align:justify;'>Date ";//</div>  <div style='float:left;width:25%;'>
			addsDiv3+="......................................</div>";//text-align:justify;
		addsDiv3+="</div>";
		//addsDiv3+="<div style='clear:both;'>Name, Designation and official stamp of Attester</div>";
		
		addsDiv3+="<div style='clear:both;text-align:justify;line-height: 1cm;'>Name:..................................................................................................................................................................................................................</div>";
		addsDiv3+="<div style='clear:both;text-align:justify;line-height: 1cm;'>Designation:.....................................................................................</div>";
		addsDiv3+="<div style='margin-left: 630px;text-align:justify;line-height: 1cm;'>Official stamp:</div>";
		
		addsDiv3+="<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";

		
		// addsDiv3+="<br/><br/><br/><div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'>Instructions for the certification of signature</div>";
		// addsDiv3+="<br/>";
		
		

			// addsDiv3+="<div style='clear:both;text-align:justify;'>";
			
				// addsDiv3+="The signature of the applicant should be certified by a Permanent academic member/Executive officer of the University of Kelaniya or a Principal of a Government School /Grama Niladari of the GN Division/Justice of Peace/ Commissioned officer of the Armed Forces/incumbent or the High Priest of a Temple/a Priest of a Temple/a Priest of any other Religious Place or a Clergy of important Position or a Permanent Staff officer drawing Rs. 79,080.00 or above annual consolidated salary in Public Sector or Local Government sector.";
			// addsDiv3+="</div>";
			// addsDiv3+="<br/><div style='clear:both;text-align:justify;'>";
				// addsDiv3+="After sitting for the question paper, this admission card should be handed over to the Supervisor of the examination hall in order to be submitted to the exams branch. ";
			// addsDiv3+="</div>";
			// addsDiv3+="<br/><div style='clear:both;text-align:justify;'>";
				// addsDiv3+="It is compulsory for every candidate to carry on this admission card along with the University Identity Card, and present it to the supervisor of the examination hall. ";
			// addsDiv3+="</div><br/><br/>";	

		
			
			addsDiv3+="&nbsp;&nbsp;<div style='clear:both;'>Sgd.</div>";
		addsDiv3+="<div style='clear:both;'>Deputy Registrar</div>";
		addsDiv3+="<div style='clear:both;'>Faculty of Graduate Studies</div>";
		addsDiv3+="<div style='clear:both;'>University of Kelaniya</div>";
	
			//addsDiv3+="&nbsp;&nbsp;<img src='img/examdrsign.jpg' style='width:150px;height:80px;'/><br/><div style='clear:both;'>Deputy Registrar</div>";
		//addsDiv3+="<div style='clear:both;'>Examination</div>";
		addsDiv3+="<div style='clear:both;'>"+currentdate+"</div>";
	addsDiv3+="</div>";
	addsDiv3+="<br/><div style='clear:both;width:100%;height:100px;font-family:tahoma;font-size:12px;border:1px solid #000000;'>";
		addsDiv3+="<div style='float:left;width:40%;height:100%;border-right:1px solid #000000;margin-left:5px;'>";
			addsDiv3+="<div style='clear:both;margin-top:5px;font-weight:bold;'>Return:</div>";
			addsDiv3+="<div style='clear:both;'>Deputy Registrar</div>";
		addsDiv3+="<div style='clear:both;'>Faculty of Graduate Studies</div>";
		addsDiv3+="<div style='clear:both;'>University of Kelaniya</div>";
			//addsDiv3+="<div style='clear:both;'>Deputy Registrar,Examination,University of Kelaniya</div>";
		addsDiv3+="</div>";
		addsDiv3+="<div style='float:left;width:59%;'>";
			addsDiv3+="<div style='clear:both;margin-top:5px;font-weight:bold;margin-left:5px;'>To:</div>";
			addsDiv3+="<div style='clear:both;margin-left:50px;'>"+dataRep['studentName']+"</div>";
			addsDiv3+="<div style='clear:both;margin-left:50px;'>"+dataRep['studentPermanentAddress']+"</div>";
		addsDiv3+="</div>";
	addsDiv3+="</div><br/><div style='page-break-after:always;'> </div>";
	
					// if(moreThanOne==1)
					// {
					// adfinaldsDiv+= dsDiv+addsDiv2+addsDiv3;
					// }
					// else
					// {
					// adfinaldsDiv+= dsDiv+addsDiv2+addsDiv3;
					// }
					
					
					// if(document.getElementById('degreeWiseAdmision').value==degreeTitleArr[i] & rep_studentnoArr[k]== studentNoArr[i]){	
		// if (rep_studentnoArr.indexOf(rep_studentnoArr[k]) == rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) || (rep_studentnoArr.indexOf(rep_studentnoArr[k]) != rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) && rep_studentnoArr.indexOf(rep_studentnoArr[k])==k)){
			var tempNo=k+1;
			if(rep_studentnoArr[tempNo]!=rep_studentnoArr[k])
			{
				//alert(rep_studentnoArr[tempNo]+" = "+rep_studentnoArr[k]);
				adfinaldsDiv+= addsDiv+addsDiv2+addsDiv3;
			}
			
		// }
					// }
					
				}
				
				
				
				
				//}
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



var studentNameList = studentNoList = studentNICList = "";
function formRepeatAdmissionCardForm(dsp){
	
	
	
//title1 ="FACULTY OF SOCIAL SCIENCES - UNIVERSITY OF KELANIYA" 

//title2 = "MA/MSSC Examination 2013";
title1 = "Repeat Examination Admission Card";
		str = "";

	if(dsp == "formRepeatAdmissionCardForm"){
				//alert(studentNoArr);
			

			keyDisabled = "Disabled";	

			
			str  = "<div id='addRepeatAdmissionCardForm'>";
			str += "<table  ><tr><td>"
			//str += '</br><h10><center><font color="#bd3303">'+title1+'</font></center></h10></br>';
			//str += '<center><font color="#bd3303">'+title2+'</font></center></br>';
			str += '<center><font color="#bd3303">'+title1+'</font></center></br>';
	
			
			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainRepeatAdmissionCardForm" >';
			
			

			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			var degreeCodeList = "<option>Please scroll down to see the records</option>";
			
			if(dataRep['roleName']=="Assistant Registrar"  ){
			
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					if(dataRep['roleName']=="Assistant Registrar" & dataRep['facultyCode']==rep_facCodeArr[degLoop]){
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+repSub_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					}	
				}
			}
			else if (dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator')
			{				
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					if(((dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator') && dataRep['departmentCode']==repSub_degreeCodeArr[degLoop])|| ((dataRep['roleName']=="Coordinator" || dataRep['roleName']=='Technical Coordinator')  && dataRep['programmeCode']==repSub_degreeCodeArr[degLoop])){
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+repSub_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					}	
				}
			}
			else
			{
				for(var degLoop = 0; degLoop<degreeCodeLength; degLoop++){
				
					//if(dataRep['roleName']=="Assistant Registrar" & dataRep['facultyCode']==rep_facCodeArr[degLoop]){//
						if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[degLoop]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[degLoop])==degLoop)){
							degreeCodeList  += "<option id='"+rep_DegreeTitleArr[degLoop]+"' title='"+repSub_degreeCodeArr[degLoop]+"'>"+rep_DegreeTitleArr[degLoop]+"</option>";	
						}	
					//}	
				}
				
			}
	
			str += "<select id='degreeWiseAdmision' name='degreeWiseAdmision' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeList ;
			str += "</select></div>";
			
			
			str += "<div style='clear:both'>";
			dataRep['academicYear']="";
			str +="<div class='longIdentifier'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='academicYear' value='academicYear' onchange='dataRep[this.id]=this.selectedIndex;showRepSemesters();'>";//displaySubjectCode();
			str += generateNumberOptions(2015, 2050, 4, dataRep['academicYear']);
			str += "</select>";
		
			
			
			
			
			
			str  += "<div id='SemDiv'></div>";
			
			str  += "<div id='admissionFormTable'></div>";


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

function AllStudentSelect1() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectingAdd'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = true;
				document.getElementById("selectAllButt").disabled= true;
				document.getElementById("selectNonButt").disabled= false;
			
			var nameid="letterList1";
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

function AllStudentUnselect() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdSelecting = 'checkSelectingAdd'+i;
				if(document.getElementById(checkBoxDivIdSelecting))
				{
				document.getElementById(checkBoxDivIdSelecting).checked = false;
				document.getElementById("selectAllButt").disabled= false;
				document.getElementById("selectNonButt").disabled= true;
				
				var idname="letterList1";
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


function viewRepeatAdmissionlist()
{
	var rwcnt=1;
	if(document.getElementById('degreeWiseAdmision').value=="Please scroll down to see the records" ){				
	alert("Please Select a value from the select Box(s)");			
	}
else{
        var	newStr = '<input type="button" id="selectAllButt" style="margin-top:1px;float:left" class="btnB" value="Select All" onclick=AllStudentSelect1();>';
				newStr += '<input type="button" id="selectNonButt" style="margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=AllStudentUnselect();>';
	            
			
				newStr +="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					//newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='width:100;text-align:center'>List Selection</div>";
					newStr +="<div class='investLabel' style='width:100px;text-align:center'>Row Count</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Student Name</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Student No</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>NIC Number</div>";
					newStr +="<div class='investLabel_l' style='width:200px;text-align:left'>Address</div>";
	
			for( i=0; i<studentNoLength; i++){
		
			
			for (k=0; k<rep_studentnoArr.length; k++){
				//alert(document.getElementById('academicYear').value);
				if(document.getElementById('degreeWiseAdmision').value==degreeTitleArr[i] & rep_studentnoArr[k]== studentNoArr[i]){
//alert("ok");					//& academicYearArr[k]== achedamicYearArr[i]
					if(document.getElementById('academicYear').value==rep_achedamicYearArr[k]){	
					//alert("ok2");	
						if (rep_studentnoArr.indexOf(rep_studentnoArr[k]) == rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) || (rep_studentnoArr.indexOf(rep_studentnoArr[k]) != rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) && rep_studentnoArr.indexOf(rep_studentnoArr[k])==k)){
						
			
							newStr +="<div class='info' id='letterList1"+i+"' style='clear:both;' name='testInfo"+i+"'>";// 
								
							newStr += "<div  class='investView' style='width:100px;text-align:center' name='SelectingAdd"+i+"' id='SelectingAdd"+i+"'>";
							newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkSelectingAdd"+i+"' onChange='AddRowColorAdmissionForm(letterList1"+i+", this)' name='checkSelectingAdd"+i+"' ' />";
							newStr += "</div>";
							
							newStr += "<div class='investView' style='width:100px;text-align:center' name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";
							newStr += rwcnt+"</div>";
															
							newStr += "<div class='investView_l' name='studentName"+inum+"' style='width:200px;text-align:left'  id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
							newStr += studentNameArr[i]+"</div>";
											
							newStr += "<div  class='investView_l' name='applicationNo"+inum+"' style='width:200px;text-align:left' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
							newStr += studentNoArr[i]+"</div>";
							
							newStr += "<div class='investView_l'style='width:200px;text-align:left'  name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
							newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div>";
							 
							newStr += "<div class='investView_l' style='width:200px;text-align:left'  name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
							newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div>";
							
							// vID = 'applicationNo1'+inum;
							// AppNoArr[inum] = applicationNoArr[i];	
							
							
							newStr += "<br/>";
							newStr +="</div>";  
							inum++;	
							rwcnt++;	
						
						}
					}
				}
			}
		newStr += "</div>"; 
		
			
	}
	newStr += '<input type="button" id="gtPrint" class="btnD" value="Print Admission"  onclick= "printRepeatAdmission()" >';
	newStr += '<input type="button" id="gtPrint" class="btnD" value="Download List"  onclick= "rep_examDownloadSheet()" >';
		
	
	document.getElementById('admissionFormTable').innerHTML = newStr;	 
	// document.getElementById("View-List").disabled= true; // idea
	// document.getElementById('select-all').style="display";
	// document.getElementById('select-non').style="display";
	}
}
	
function showRepSemesters() {
	//alert("ok");
	//alert(document.getElementById('degreeWiseAdmision').value);
	var selectedDegree =document.getElementById('degreeWiseAdmision').value;
	var tStr = "";
	tStr += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			tStr +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
			//alert(selectedDegree);
			
	for(var n = 0; n<degreeCodeLength; n++) {
		if (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) == rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) || (rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n]) != rep_DegreeTitleArr.lastIndexOf(rep_DegreeTitleArr[n]) && rep_DegreeTitleArr.indexOf(rep_DegreeTitleArr[n])==n)){
			
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "1"){	//alert(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]);
				 if(repsemcount1==0)
					{
					tStr +="<input type='radio' name='appSemester' id='appSem1' value='1' onchange='dataRep[this.name]=this.value;viewRepeatAdmissionlist();'>1";
					repsemcount1++;
					}
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "2"){	
					 if(repsemcount2==0)
					{
				tStr +="<input type='radio' name='appSemester' id='appSem2' value='2' onchange='dataRep[this.name]=this.value;viewRepeatAdmissionlist();'>2";
					repsemcount2++;
					}
				
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "3"){	
					if(repsemcount3==0)
					{
						tStr +="<input type='radio' name='appSemester' id='appSem3' value='3' onchange='dataRep[this.name]=this.value;viewRepeatAdmissionlist();'>3";
					repsemcount3++;
					}
				
				}
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "4"){	
					if(repsemcount4==0)
					{
						tStr +="<input type='radio' name='appSemester' id='appSem4' value='4' onchange='dataRep[this.name]=this.value;viewRepeatAdmissionlist();'>4";
					repsemcount4++;
					}
				
				}
				
				if(selectedDegree==rep_DegreeTitleArr[n] && rep_semesterArr[n]== "0"){	
				//alert(selectedDegree);
					//if(repsemcount0==0)
					//{	
						tStr +="<input type='radio' name='appSemester' id='appSem0' value='0' onchange='dataRep[this.name]=this.value;viewRepeatAdmissionlist();'>End of Year";
					repsemcount0++;
					//}
				}
			
		}
		//}
	}
		
			
		tStr +="</div>";
		
			tStr +="</div></br>";
	
	document.getElementById('SemDiv').innerHTML = tStr;
	document.getElementById('academicYear').disabled= true;
	document.getElementById('degreeWiseAdmision').disabled= true;
}





// function DownloadadmissionList()
// {
	// var rwcnt=1;
	// if(document.getElementById('degreeWiseAdmision').value=="Please scroll down to see the records" ){				
	// alert("Please Select a value from the select Box(s)");			
	// }
// else{
					// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					// newStr +="<div id='topics1' class='info'></div>";
					// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('degreeWiseAdmision').value+"</div>";
					// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('academicYear').value+"</div>";
                    // newStr +="<br>";
					
					// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					// newStr +="<tr style='border: 1px solid black;'>";
					// newStr +="<th style='border: 1px solid black;'>Row Count</th>";
					// newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					// newStr +="<th style='border: 1px solid black;'>Student No</th>";
					// newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					// newStr +="<th style='border: 1px solid black;'>Address</th>";
					// newStr +="<th style='border: 1px solid black;'>Subjects</th>";
					// newStr +="</tr>";

			// for( i=0; i<studentNoLength; i++){
		
			
			// for (k=0; k<rep_studentnoArr.length; k++){

				// if(document.getElementById('degreeWiseAdmision').value==degreeTitleArr[i] & rep_studentnoArr[k]== studentNoArr[i]){
	
					// if(document.getElementById('academicYear').value==rep_achedamicYearArr[k]){
						// if (rep_studentnoArr.indexOf(rep_studentnoArr[k]) == rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) || (rep_studentnoArr.indexOf(rep_studentnoArr[k]) != rep_studentnoArr.lastIndexOf(rep_studentnoArr[k]) && rep_studentnoArr.indexOf(rep_studentnoArr[k])==k)){
									
						
			
							// newStr +="<tr style='border: 1px solid black;'>";
				
							// newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+rwcnt+'</td>';
				
							// newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
				
							// newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
							
							// newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
							
							// newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
							
							
							// //for (k=0; k<rep_studentnoArr.length; k++){
							// newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+rep_subjectCodeArr+'</td>';
							// //}
								
							// newStr +="</tr>";
							// newStr += "</div><div><br>"; 
							// inum++;	
							// rwcnt++;	
						
						// }
					// }
				// }
			// }
		// newStr += "</div>"; 
		
			
	// }
	
	// newStr +="</table>";
	
	// var exportFilename = "Admission List.xls";
	// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
	
		// if (navigator.msSaveBlob) {
			// navigator.msSaveBlob(csvData, exportFilename);
			// } else {
			// //In FF link must be added to DOM to be clicked
			// var link = document.createElement('a');
			// link.href = window.URL.createObjectURL(csvData);
			// link.setAttribute('download', exportFilename);
			// document.body.appendChild(link);    
			// link.click();
			// document.body.removeChild(link);    
			// }

	// }
// }

	
	
	
	// function AdmissionTable(){
	
	
	// var newtabStr="";
	
	// newtabStr  += "<div id='admissionForm'>";
			

			// newtabStr +="<div style='margin-top:20px;float:left;clear:both;'>";
			// newtabStr +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// newtabStr +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			// newtabStr +="<div class=hideLabel>&nbsp;</div>";
			// newtabStr +="</div><br/>";
			
			// newtabStr +="<div style='margin-top:20px;float:left;clear:both;'>";
			// newtabStr +="<div class='longIdentifier' style='clear:none;'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// newtabStr +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			// newtabStr +="<div class=hideLabel>&nbsp;</div>";
			
			// newtabStr +="</div><br/>";
			// var setMedium="";
			// if(dataRep["medium"]=="si")
			// {
				// setMedium="Sinhala";
			// }
			// else if(dataRep["medium"]=="en")
			// {
				// setMedium="English";
			// }
			// newtabStr +="<div style='margin-top:20px;float:left;clear:both;'>";
			// newtabStr +="<div class='longIdentifier' style='clear:none;'></div>&nbsp;&nbsp;&nbsp;&nbsp;<div class='colon'>&nbsp;&nbsp;</div>";
			// newtabStr +="<div class='viewArea' style='clear:none;' id='degreeTitle' >"+dataRep["degreeTitle"]+"&nbsp;:&nbsp;&nbsp;"+setMedium+"&nbsp;"+"Medium"+"</div>";
			// newtabStr +="<div class=hideLabel>&nbsp;</div>";
			
			// newtabStr +="</div><br/>";
			// newtabStr += "<div style='clear:both' ></div>";
	
	
	// newtabStr  += "<div id='admissionFormTable'>";
	// newtabStr += "<table align='center' border=''><tr>";
			
			// newtabStr += '<tr>';
			
			// newtabStr += '<td align="center">Date/Time</td>';
			// newtabStr += '<td align="center">Paper Code</td>';
			// newtabStr += '<td align="center">Signatute of Applicant</td>';
			// newtabStr += '<td align="center">Signature of Supervisor</td>';
			

			// newtabStr += '</tr>';
			
			
			
	// for(var i=0; i<degreeCodeLength; i++){
	// //alert(studentNoLength);
			
			// //alert(dataRep["studentNo"]);
		// //if(dataRep["studentNo"] == studentNoArr[i] && dataRep["studentName"] == studentNameArr[i]){	
					
			// //if (subjectCodeArr.indexOf(subjectCodeArr[i]) == subjectCodeArr.lastIndexOf(subjectCodeArr[i]) || (subjectCodeArr.indexOf(subjectCodeArr[i]) != subjectCodeArr.lastIndexOf(subjectCodeArr[i]) && subjectCodeArr.indexOf(subjectCodeArr[i])==i)){
		// if(dataRep["studentNo"] == rep_studentnoArr[i]){
			// if(subjectCodeArr[i] != null){	
			// if(hallnoArr[i]="K1 201"){
			
				// newtabStr += '<tr id="selectedStudent">';
				// newtabStr += '<td>';
				// newtabStr +="<div class='investLabel_l'>Date</div>";		
				// newtabStr += "</br><div class='investView_l' name='outside' id='outside' style='width:170px;'>"+examdateArr[i]+"";
				// newtabStr += "</div>";
				// newtabStr += "<div class='investView_l' name='outside' id='outside' style='width:110px;'>"+starttimeArr[i]+"-"+endtimeArr[i]+"";
				// newtabStr += "</div>";
				// newtabStr += '</td>';
				// newtabStr += '<td>';
				// newtabStr += "<center><div class='investView_l' name='outside' id='outside' style='width:170px;'>"+subjectCodeArr[i]+"</div></center></br>";	
				// newtabStr += "<div class='investView_l' name='outside' id='outside' style='width:auto;'>"+hallnoArr[i]+"</div>";
			// }				
				
				// newtabStr += '</td>';
				// newtabStr += '<td></td>';
				// newtabStr += '<td></td>';
				// newtabStr += '</tr>';
			// }
		// }


				
	// }		
			
			// newtabStr += '</tr></table></br></br>';
	
	// newtabStr += "</div>";
	
	// newtabStr += "<div style='clear:both'>";
			// newtabStr += "<center>";
	
			// newtabStr += '<input type="button" id="gtPrint" class="btnD" value="Print Admission"  onclick= "printRepeatAdmission()" >';
			// newtabStr += '<input type="button" id="btnDreset" class="btnD" value="Reset"  onclick= refreshAdmission();></div>';
			
			// if(dataRep['roleName']=='Coordinator'){
				// newtabStr += '<input type="button" class="btnD" value = "Return to Coordinator Menu" onclick = "returnCreateTimeTable();showMenu('+"'formCoordinatorMenu'"+')">';
			// }
			// if(dataRep['roleName']=='Examination Department'){
				// newtabStr += '<input type="button" class="btnD" value = "Return to Examination Menu" onclick = "returnCreateTimeTable();showMenu('+"'formExamMenu'"+')">';
			// }
			
			
			// //newtabStr += '<input type="button" class="btnD" value = "Return to Examination Menu" onclick =showMenu('+"'formExamMenu'"+')>';
			// newtabStr += '<input type="button"  class="btnD" value="logout"  onclick= logOut();></div>';
		
		// //	str += '<input type="button" id="btnDlog" class="btnD" value="logout"  onclick= logOut();></div>';
			
			// newtabStr += "</div>";
			// document.getElementById('searchButt').style.display="none";
			// document.getElementById('btnDlogAdmi').style.display="none";
			
	// document.getElementById('admissionFormTable').innerHTML=newtabStr;
	
	// }
		
	
function resetRepeatAdmission(){
	degreeCodeLength =0;
	studentNoLength =0;
}

function rep_examDownloadSheet(){
	if(document.getElementById('degreeWiseAdmision').selectedIndex != 0 
		&& document.getElementById('academicYear').selectedIndex != 0 
		&& dataRep["appSemester"] != ""){
		
		var tmpDId = document.getElementById(document.getElementById('degreeWiseAdmision').value).title;		
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('academicYear').value;
		dataRep["degSem"]= dataRep["appSemester"];
		
		
		var degTitle = document.getElementById('degreeWiseAdmision').value;
		var SubSem = dataRep["degSem"];
		var BatchYear = document.getElementById('academicYear').value;

	
	//resetResultUpload()
	sendForm('data4rep_examDownload');
	//sendForm('data4examResultsSemWise');
	
	DownloadadmissionList(degTitle, SubSem, BatchYear);
		

	}

}	
	
	