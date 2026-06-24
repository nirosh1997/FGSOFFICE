dataRep['extentionsFromYYYYOne'] = year;dataRep['extentionsFromMMOne']= month;dataRep['extentionsFromDDOne']= date;
dataRep['extentionsToYYYYOne']= year;dataRep['extentionsToMMOne']= month;dataRep['extentionsToDDOne']= date;
dataRep['extentionsFromYYYYTwo'] = year;dataRep['extentionsFromMMTwo']= month;dataRep['extentionsFromDDTwo']= date;
dataRep['extentionsToYYYYTwo']= year;dataRep['extentionsToMMTwo']= month;dataRep['extentionsToDDTwo']= date;
dataRep['extentionsFromYYYYThree'] = year;dataRep['extentionsFromMMThree']= month;dataRep['extentionsFromDDThree']= date;
dataRep['extentionsToYYYYThree']= year;dataRep['extentionsToMMThree']= month;dataRep['extentionsToDDThree']= date;

dataRep['progressReportYYYYOne'] = year;dataRep['progressReportMMOne'] = month;dataRep['progressReportDDOne'] = date;
dataRep['progressReportYYYYTwo'] = year;dataRep['progressReportMMTwo'] = month;dataRep['progressReportDDTwo'] = date;
dataRep['progressReportYYYYThree'] = year;dataRep['progressReportMMThree'] = month;dataRep['progressReportDDThree'] = date;
dataRep['progressReportYYYYFour'] = year;dataRep['progressReportMMFour'] = month;dataRep['progressReportDDFour'] = date;
dataRep['progressReportYYYYFive'] = year;dataRep['progressReportMMFive'] = month;dataRep['progressReportDDFive'] = date;
dataRep['progressReportYYYYSix'] = year;dataRep['progressReportMMSix'] = month;dataRep['progressReportDDSix'] = date;

dataRep["selectedSupervisorOne"]= dataRep["selectedSupervisorTwo"]=dataRep["selectedExaminerOne"]=dataRep["selectedExaminerTwo"]=dataRep["selectedExaminerThree"]="";
dataRep["paymentTypeThree"] = dataRep["paymentAmountThree"] ="";
function formAddOldStudentFormTwo(dsp){
		title = "Add Student Details";
		
		str = "";
//var SelectedYear ="";
		var birthCertificateChecked = degreeCertificateChecked = OtherChecked ="";	
		if(dsp== "formAddOldStudentFormTwo"){// || dsp == "addOldStudentTwo"){
		
		
		
			str  = "<div id='addOldStudentTwo'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainformAddOldStudentTwo" >';

			str += "<div style='clear:both'>";
	
			str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";

			str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";

			// str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			
			
			//hidelable starts
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['degreeCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
		
			str +="<br/><br/>";
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";	
			str += "<textarea rows='auto'  name='thesisTopicOne' id='thesisTopicOne'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			str +=dataRep["thesisTopicOne"];
			str +=" </textarea></div></br></br>";
		
			str +="<div style='margin-top:50px;clear:both;'></div>";
			
			var lecturerEmpNoStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<lecturerEmpNoLength; i++) {
				lecturerEmpNoStr += "<option>"+lecturerNameArr[i]+"</option>";
			}
			
			str += "<div class='longIdentifier'>Supervisor/s</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedSupervisorOne' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += lecturerEmpNoStr;
			str += "</select></br></br>";
			
			
			var lecturerEmpNoStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<lecturerEmpNoLength; i++) {
				lecturerEmpNoStr += "<option>"+lecturerNameArr[i]+"</option>";
			}
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedSupervisorTwo' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += lecturerEmpNoStr;
			str += "</select>";
			
			
			str +="<div style='margin-top:50px;clear:both;'></div>";
			
			var lecturerEmpNoStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<lecturerEmpNoLength; i++) {
				lecturerEmpNoStr += "<option>"+lecturerNameArr[i]+"</option>";
			}
			
			str += "<div class='longIdentifier'>Examiners</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedExaminerOne' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += lecturerEmpNoStr;
			str += "</select></br></br>";
			
			
			var lecturerEmpNoStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<lecturerEmpNoLength; i++) {
				lecturerEmpNoStr += "<option>"+lecturerNameArr[i]+"</option>";
			}
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedExaminerTwo' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += lecturerEmpNoStr;
			str += "</select></br></br>";
			
			var lecturerEmpNoStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<lecturerEmpNoLength; i++) {
				lecturerEmpNoStr += "<option>"+lecturerNameArr[i]+"</option>";
			}
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedExaminerThree' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += lecturerEmpNoStr;
			str += "</select>";
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";	
			// str += "<textarea rows='auto'  name='supervisorOne' id='supervisorOne'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			// str +=dataRep["supervisorOne"];
			// str +=" </textarea></div>";
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;&nbsp;</div>"
			// str += "<div style='float:left' >&nbsp;";	
			// str += "<textarea rows='auto'  name='supervisorTwo' id='supervisorTwo'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			// str +=dataRep["supervisorTwo"];
			// str +=" </textarea></div></div>";
			
			
			// str +="<div style='margin-top:50px;clear:both;'></div>";
			
			
			// str +="<div class='longIdentifier' style='clear:none;'><u><b>Examiners</b></u></div>";
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";	
			// str += "<textarea rows='auto'  name='examinerOne' id='examinerOne'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			// str +=dataRep["examinerOne"];
			// str +=" </textarea></div>";
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";	
			// str += "<textarea rows='auto'  name='examinerTwo' id='examinerTwo'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			// str +=dataRep["examinerTwo"];
			// str +=" </textarea></div>";
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;</div>"
			// str += "<div style='float:left' >&nbsp;";	
			// str += "<textarea rows='auto'  name='examinerThree' id='examinerThree'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			// str +=dataRep["examinerThree"];
			// str +=" </textarea></div></div>";
			// str +="</div></div></fieldset>";
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<fieldset  class='field'><legend class='fieldHead'>Certified Certificates</legend><div style='clear:both'><div class='rdo'>";

			if(dataRep['certifiedCertificates']== 'Birth Certificate'){
			birthCertificateChecked = 'checked';
			} else if(dataRep['certifiedCertificates']=='Degree Certificate/s'){
			degreeCertificateChecked = 'checked'
			} else if(dataRep['certifiedCertificates']=='Other'){
			OtherChecked = 'checked'
			} 

			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='certifiedCertificates' id='birthCertificate' class='changeColor' value= 'Birth Certificate'";
			str +=birthCertificateChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Birth Certificate</label>";
			str +="<br /><input  type='checkbox' name='certifiedCertificates' id='degreeCertificate' class='changeColor' value= 'Degree Certificate/s'";
			str +=degreeCertificateChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Degree Certificate/s</label>";
			str +="<br /><input  type='checkbox' name='certifiedCertificates'  id='OtherChecked' class='changeColor' value= 'Other'";
			str +=OtherChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Other</label>";

			str +="</div></div></fieldset>";
			
			str +="<fieldset  class='field'><legend class='fieldHead'>Payment Details</legend><div style='clear:both'><div class='rdo'>";
			
			str +="<div class='investLabel_l'>Payment Type</div>";
			str +="<div class='investLabel_l' >&nbsp;&nbsp;&nbsp;&nbsp;Date</div>";
			str +="<div class='investLabel_l' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</div></br></br>";
			//str +="<div class='investLabel_l'  margin-left:50px;>Amount</div></br></br>";
			
			dataRep['paymentYYYYOne'] = year;
			dataRep['paymentMMOne'] = month;
			dataRep['paymentDDOne'] = date;
			
			dataRep['paymentYYYYTwo'] = year;
			dataRep['paymentMMTwo'] = month;
			dataRep['paymentDDTwo'] = date;
			
			
			dataRep['paymentYYYYThree'] = year;
			dataRep['paymentMMThree'] = month;
			dataRep['paymentDDThree'] = date;
			
			
			str += "<div class='investView_l' name='take' id='take' >";
			str += "<input type='text' style='width:130px;'  id='paymentTypeOne' name='paymentTypeOne'  value= '"+dataRep["paymentTypeOne"]+"'  onchange='dataRep[this.name]=this.value;' ></div>";

			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='paymentYYYYOne' value='paymentYYYYOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['paymentYYYYOne']);
			str += "</select>";
			str += "<select name='paymentMMOne' value='paymentMMOne' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['paymentMMOne']);
			str += "</select>";
			str += "<select name='paymentDDOne' value='paymentDDOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['paymentDDOne']);
			str += "</select></div>";

			str += "<div class='investView' name='removeDiv' id='removeDiv'>";
			str += "<input type='text' id='paymentAmountOne' name='paymentAmountOne'  value= '"+dataRep["paymentAmountOne"]+"'  onchange='dataRep[this.name]=this.value;' ></div></div></br></br></br>";
			
			
			str += "<div class='investView_l' name='take' id='take' >";
			str += "<input type='text' style='width:130px;'  id='paymentTypeTwo' name='paymentTypeTwo'  value= '"+dataRep["paymentTypeTwo"]+"'  onchange='dataRep[this.name]=this.value;' ></div>";

			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='paymentYYYYTwo' value='paymentYYYYTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['paymentYYYYTwo']);
			str += "</select>";
			str += "<select name='paymentMMTwo' value='paymentMMTwo' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['paymentMMTwo']);
			str += "</select>";
			str += "<select name='paymentDDTwo' value='paymentDDTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['paymentDDTwo']);
			str += "</select></div>";

			str += "<div class='investView' name='removeDiv' id='removeDiv'>";
			str += "<input type='text' id='paymentAmountTwo' name='paymentAmountTwo'  value= '"+dataRep["paymentAmountTwo"]+"'  onchange='dataRep[this.name]=this.value;' ></div></div></br></br></br>";
			
			str += "<div class='investView_l' name='take' id='take' >";
			str += "<input type='text' style='width:130px;'  id='paymentTypeThree' name='paymentTypeThree'  value= '"+dataRep["paymentTypeThree"]+"'  onchange='dataRep[this.name]=this.value;' ></div>";

			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='paymentYYYYThree' value='paymentYYYYThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['paymentYYYYThree']);
			str += "</select>";
			str += "<select name='paymentMMThree' value='paymentMMThree' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['paymentMMThree']);
			str += "</select>";
			str += "<select name='paymentDDThree' value='paymentDDThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['paymentDDThree']);
			str += "</select></div>";

			str += "<div class='investView' name='removeDiv' id='removeDiv'>";
			str += "<input type='text' id='paymentAmountThree' name='paymentAmountThree'  value= '"+dataRep["paymentAmountThree"]+"'  onchange='dataRep[this.name]=this.value;' ></div></div></br></br></br>";
			
			
			str +="</div></div></fieldset>";
			
			
			
			str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Progress Reports</legend><div style='clear:both'><div class='rdo'>";

			if(dataRep['progressReport']== 'Progress Report One'){
			OneChecked = 'checked';
			} else if(dataRep['progressReport']=='Progress Report Two'){
			TwoChecked = 'checked'
			} else if(dataRep['progressReport']=='Progress Report Three'){
			ThreeChecked = 'checked'
			} else if(dataRep['progressReport']=='Progress Report Four'){
			FourChecked = 'checked'
			} else if(dataRep['progressReport']=='Progress Report Five'){
			FiveChecked = 'checked'
			} else if(dataRep['progressReport']=='Progress Report Six'){
			SixChecked = 'checked'
			} 

			dataRep['progressReportYYYYOne'] = year;
			dataRep['progressReportMMOne'] = month;
			dataRep['progressReportDDOne'] = date;
			
			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReport' id='progressReportOne' class='changeColor' value= 'Progress Report One'";
			str +=OneChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report One</label>";
			str +="<div style='float:right;margin-left:25px;'>";
			str += "<select name='progressReportYYYYOne' value=progressReportYYYYOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYOne']);
			str += "</select>";
			str += "<select name='progressReportMMOne' value='progressReportMMOne' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMOne']);
			str += "</select>";
			str += "<select name='progressReportDDOne' value='progressReportDDOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDOne']);
			str += "</select></div></div></br>";
			
			dataRep['progressReportYYYYTwo'] = year;
			dataRep['progressReportMMTwo'] = month;
			dataRep['progressReportDDTwo'] = date;
			
			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReportTwo' id='progressReportTwo' class='changeColor' value= 'Progress Report Two'";
			str +=TwoChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report Two</label>";
			str +="<div style='float:right;margin-left:22px;'>";
			str += "<select name='progressReportYYYYTwo' value=progressReportYYYYTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYTwo']);
			str += "</select>";
			str += "<select name='progressReportMMTwo' value='progressReportMMTwo' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMTwo']);
			str += "</select>";
			str += "<select name='progressReportDDTwo' value='progressReportDDTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDTwo']);
			str += "</select></div></div></br>";
			
			
			dataRep['progressReportYYYYThree'] = year;
			dataRep['progressReportMMThree'] = month;
			dataRep['progressReportDDThree'] = date;
			

			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReportThree'  id='progressReportThree' class='changeColor' value= 'Progress Report Three'";
			str +=ThreeChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report Three</label>";
			str +="<div style='float:right;margin-left:14px;'>";
			str += "<select name='progressReportYYYYThree' value=progressReportYYYYThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYThree']);
			str += "</select>";
			str += "<select name='progressReportMMThree' value='progressReportMMThree' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMThree']);
			str += "</select>";
			str += "<select name='progressReportDDThree' value='progressReportDDThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDThree']);
			str += "</select></div></div></br>";
			
			
			dataRep['progressReportYYYYFour'] = year;
			dataRep['progressReportMMFour'] = month;
			dataRep['progressReportDDFour'] = date;
			
			
			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReportFour' id='progressReportFour' class='changeColor' value= 'Progress Report Four'";
			str +=FourChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report Four</label>";
			str +="<div style='float:right;margin-left:22px;'>";
			str += "<select name='progressReportYYYYFour' value=progressReportYYYYFour'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYFour']);
			str += "</select>";
			str += "<select name='progressReportMMFour' value='progressReportMMFour' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMFour']);
			str += "</select>";
			str += "<select name='progressReportDDFour' value='progressReportDDFour'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDFour']);
			str += "</select></div></div></br>";
			
			dataRep['progressReportYYYYFive'] = year;
			dataRep['progressReportMMFive'] = month;
			dataRep['progressReportDDFive'] = date;
			
			
			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReportFive' id='progressReportFive' class='changeColor' value= 'Progress Report Five' ";
			str +=FiveChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report Five</label>";
			str +="<div style='float:right;margin-left:25px;'>";
			str += "<select name='progressReportYYYYFive' value=progressReportYYYYFive'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYFive']);
			str += "</select>";
			str += "<select name='progressReportMMFive' value='progressReportMMFive' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMFive']);
			str += "</select>";
			str += "<select name='progressReportDDFive' value='progressReportDDFive'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDFive']);
			str += "</select></div></div></br>";
			
			
			dataRep['progressReportYYYYSix'] = year;
			dataRep['progressReportMMSix'] = month;
			dataRep['progressReportDDSix'] = date;
			
			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReportSix' id='progressReportSix'  class='changeColor' value= 'Progress Report Six' ";
			str +=SixChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Progress Report Six</label>";
			str +="<div style='float:right;margin-left:30px;'>";
			str += "<select name='progressReportYYYYSix' value=progressReportYYYYSix'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['progressReportYYYYSix']);
			str += "</select>";
			str += "<select name='progressReportMMSix' value='progressReportMMSix' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['progressReportMMSix']);
			str += "</select>";
			str += "<select name='progressReportDDSix' value='progressReportDDSix'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['progressReportDDSix']);
			str += "</select></div></div></br>";
			str +="</fieldset>";
			
			
			
			//str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Extensions</legend><div style='clear:both'><div class='rdo'>";

			str +="<div class='investLabel_l'>From</div>";
			str +="<div class='investLabel_l' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To</div></br></br>";
			
			
			
			dataRep['extentionsFromYYYYOne'] = year;
			dataRep['extentionsFromMMOne']= month;
			dataRep['extentionsFromDDOne']= date;
			
			dataRep['extentionsToYYYYOne']= year;
			dataRep['extentionsToMMOne']= month;
			dataRep['extentionsToDDOne']= date;
			
			
			dataRep['extentionsFromYYYYTwo'] = year;
			dataRep['extentionsFromMMTwo']= month;
			dataRep['extentionsFromDDTwo']= date;
			
			dataRep['extentionsToYYYYTwo']= year;
			dataRep['extentionsToMMTwo']= month;
			dataRep['extentionsToDDTwo']= date;
			
			
			dataRep['extentionsFromYYYYThree'] = year;
			dataRep['extentionsFromMMThree']= month;
			dataRep['extentionsFromDDThree']= date;
			
			dataRep['extentionsToYYYYThree']= year;
			dataRep['extentionsToMMThree']= month;
			dataRep['extentionsToDDThree']= date;
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsFromYYYYOne' value='extentionsFromYYYYOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsFromYYYYOne']);
			str += "</select>";
			str += "<select name='extentionsFromMMOne's value='extentionsFromMMOne' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsFromMMOne']);
			str += "</select>";
			str += "<select name='extentionsFromDDOne' value='extentionsFromDDOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsFromDDOne']);
			str += "</select></div>";
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsToYYYYOne' value='extentionsToYYYYOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsToYYYYOne']);
			str += "</select>";
			str += "<select name='extentionsToMMOne' value='extentionsToMMOne' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsToMMOne']);
			str += "</select>";
			str += "<select name='extentionsToDDOne' value='extentionsToDDOne'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsToDDOne']);
			str += "</select></div><br/>";
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsFromYYYYTwo' value='extentionsFromYYYYTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsFromYYYYTwo']);
			str += "</select>";
			str += "<select name='extentionsFromMMTwo' value='extentionsFromMMTwo' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsFromMMTwo']);
			str += "</select>";
			str += "<select name='extentionsFromDDTwo' value='extentionsFromDDTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsFromDDTwo']);
			str += "</select></div>";
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsToYYYYTwo' value='extentionsToYYYYTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsToYYYYTwo']);
			str += "</select>";
			str += "<select name='extentionsToMMTwo' value='extentionsToMMTwo' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsToMMTwo']);
			str += "</select>";
			str += "<select name='extentionsToDDTwo' value='extentionsToDDTwo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsToDDTwo']);
			str += "</select></div><br/>";
			
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsFromYYYYThree' value='extentionsFromYYYYThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsFromYYYYThree']);
			str += "</select>";
			str += "<select name='extentionsFromMMThree' value='extentionsFromMMThree' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsFromMMThree']);
			str += "</select>";
			str += "<select name='extentionsFromDDThree' value='extentionsFromDDThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsFromDDThree']);
			str += "</select></div>";
			
			str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
			str += "<select name='extentionsToYYYYThree' value='extentionsToYYYYThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['extentionsToYYYYThree']);
			str += "</select>";
			str += "<select name='extentionsToMMThree' value='extentionsToMMThree' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['extentionsToMMThree']);
			str += "</select>";
			str += "<select name='extentionsToDDThree' value='extentionsToDDThree'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['extentionsToDDThree']);
			str += "</select></div>";
			
			str +="</fieldset></div></div></div>";
			
	
			str += "<center>";
			str += "<div style='margin-top:50px;clear:both;'>";
			str += "<input type='button' class='btn' value='Save' id='save'  onclick=formAddOldStudentFormTwosendForm('addOldStudentTwo');>"; 
			
			//str += '<input type="button" class="btn" id="next" value = "Next" onclick = callNextFunctionFormTwo();>';
            str += '<input type="button" class="btn" value = "Return To Clerk Menu" onclick = showMenu('+"'formClerkMenu'"+');>';
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	
	
	
	
	function formAddOldStudentFormTwosendForm(frm){

		var doc, dataStr;

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
	
		if(frm == 'addOldStudentTwo'){	
		
			doc = document.maintainformAddOldStudentTwo;
			dataStr += "&interface="+frm;
			
				dataStr += "&studentNIC="+dataRep["studentNIC"];
				dataStr += "&studentName="+dataRep["studentName"];
				dataStr += "&studentNo="+dataRep["studentNo"];	
				dataStr += "&degreeCode="+dataRep["degreeCode"];
				
				dataStr += "&supervisorOne="+lecturerEmpNoArr[dataRep["selectedSupervisorOne"]-1];//alert(lecturerEmpNoArr[dataRep["selectedSupervisorOne"]-1]);
				dataStr += "&supervisorTwo="+lecturerEmpNoArr[dataRep["selectedSupervisorTwo"]-1];
				dataStr += "&examinerOne="+lecturerEmpNoArr[dataRep["selectedExaminerOne"]-1];
				dataStr += "&examinerTwo="+lecturerEmpNoArr[dataRep["selectedExaminerTwo"]-1];
				dataStr += "&examinerThree="+lecturerEmpNoArr[dataRep["selectedExaminerThree"]-1];
				
				if(document.getElementById('birthCertificate').checked == true){
				dataStr += "&birthCertificate="+"yes";
				}
				if(document.getElementById('degreeCertificate').checked == true){
				dataStr += "&degreeCertificate="+"yes";
				}
				
				
				dataStr += "&paymentTypeOne="+dataRep["paymentTypeOne"];
				dataStr += "&paymentDateOne="+doc.paymentYYYYOne.value+"/"+doc.paymentMMOne.value+"/"+doc.paymentDDOne.value;
				dataStr += "&paymentAmountOne="+dataRep["paymentAmountOne"];
				
				dataStr += "&paymentTypeTwo="+dataRep["paymentTypeTwo"];
				dataStr += "&paymentDateTwo="+doc.paymentYYYYTwo.value+"/"+doc.paymentMMTwo.value+"/"+doc.paymentDDTwo.value;		
				dataStr += "&paymentAmountTwo="+dataRep["paymentAmountTwo"];
					
				dataStr += "&paymentTypeThree="+dataRep["paymentTypeThree"];
				dataStr += "&paymentDateThree="+doc.paymentYYYYThree.value+"/"+doc.paymentMMThree.value+"/"+doc.paymentDDThree.value;		
				dataStr += "&paymentAmountThree="+dataRep["paymentAmountThree"];
					
				dataStr += "&thesisTopicOne="+dataRep["thesisTopicOne"];	
				
				
				if(document.getElementById('progressReportOne').checked == true){
				dataStr += "&progressReportOne="+"yes";
				dataStr += "&progressReportDateOne="+doc.progressReportYYYYOne.value+"/"+doc.progressReportMMOne.value+"/"+doc.progressReportDDOne.value;
				}
				if(document.getElementById('progressReportTwo').checked == true){
				dataStr += "&progressReportTwo="+"yes";
				dataStr += "&progressReportDateTwo="+doc.progressReportYYYYTwo.value+"/"+doc.progressReportMMTwo.value+"/"+doc.progressReportDDTwo.value;
				}
				if(document.getElementById('progressReportThree').checked == true){
				dataStr += "&progressReportThree="+"yes";
				dataStr += "&progressReportDateThree="+doc.progressReportYYYYThree.value+"/"+doc.progressReportMMThree.value+"/"+doc.progressReportDDThree.value;
				}
				if(document.getElementById('progressReportFour').checked == true){
				dataStr += "&progressReportFour="+"yes";
				dataStr += "&progressReportDateFour="+doc.progressReportYYYYFour.value+"/"+doc.progressReportMMFour.value+"/"+doc.progressReportDDFour.value;
				}
				if(document.getElementById('progressReportFive').checked == true){
				dataStr += "&progressReportFive="+"yes";
				dataStr += "&progressReportDateFive="+doc.progressReportYYYYFive.value+"/"+doc.progressReportMMFive.value+"/"+doc.progressReportDDFive.value;
				}
				if(document.getElementById('progressReportSix').checked == true){
				dataStr += "&progressReportSix="+"yes";
				dataStr += "&progressReportDateSix="+doc.progressReportYYYYSix.value+"/"+doc.progressReportMMSix.value+"/"+doc.progressReportDDSix.value;
				}
				
				
				
				dataStr += "&extentionFromOne="+doc.extentionsFromYYYYOne.value+"/"+doc.extentionsFromMMOne.value+"/"+doc.extentionsFromDDOne.value;
				dataStr += "&extentionToOne="+doc.extentionsToYYYYOne.value+"/"+doc.extentionsToMMOne.value+"/"+doc.extentionsToDDOne.value;
				
				dataStr += "&extentionFromTwo="+doc.extentionsFromYYYYTwo.value+"/"+doc.extentionsFromMMTwo.value+"/"+doc.extentionsFromDDTwo.value;
				dataStr += "&extentionToTwo="+doc.extentionsToYYYYTwo.value+"/"+doc.extentionsToMMTwo.value+"/"+doc.extentionsToDDTwo.value;
				
				dataStr += "&extentionFromThree="+doc.extentionsFromYYYYThree.value+"/"+doc.extentionsFromMMThree.value+"/"+doc.extentionsFromDDThree.value;
				dataStr += "&extentionToThree="+doc.extentionsToYYYYThree.value+"/"+doc.extentionsToMMThree.value+"/"+doc.extentionsToDDThree.value;
			//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
			
			
			
	}	
