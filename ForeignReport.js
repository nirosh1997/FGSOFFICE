
function formForeignReport(dsp) {

		
		str = ""; 
		title = "Report"; 
  
	if(dsp == "formForeignReport") {    

		
			str  = "<div id='formForeignReport'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
				str += '<form name="formForeignReport"><br>';
				str +="<div>";
					
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
				str += '<br><input type="button" id="select-non" style="margin-top:1px;float:left" class="btnB" value="Get Report" onclick=getReport();>';
                str += '<input type="button" style="margin-top:1px;float:left" class="btnB" value="Reset" onclick="sendForm('+"'data4ForeignReport'"+');">';

				
				str +="</div>";
                str += '</form>';				
				str += '</td></tr></table></div>';
				
		}		
 return str;
				
	}

	

var Fcount=0;
var Mcount=0;
var FEcount=0;
var MEcount=0;
var TFcount=0;
var TMcount=0;
var TFEcount=0;
var TMEcount=0;
var TotalcourseFee2=0;
function getReport()
{

      //  if(document.getElementById('selectedDocName').value=="Application List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>FOREIGN POSTGRADUATE STUDENT ENROLMENT-"+document.getElementById('achedamicYear').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:12px'>(Number of Foreign Student registered for postgraduate Courses)</div>";
                    newStr +="</br>";
					newStr +="<br><br><table style='margin-left:80px;' >";
					newStr +="<tr>";
					newStr +="<td style='width:120px;font-size:12px;'> University/HEI</td>";
					newStr +="<td style='font-size:12px;border-collapse: collapse;border: 1px solid black;'> University of Kelaniya</td>";
					newStr +="</tr>";
					newStr +="</table>";
				    newStr +="</br>";
					newStr +="<table style='margin-left:80px;' >";
					newStr +="<tr>";
					newStr +="<td style='width:120px;font-size:12px;'>Faculty</td>";
					newStr +="<td style='font-size:12px;width:200px;border-collapse: collapse;border: 1px solid black;'>Faculty of Graduate Studies</td>";
					newStr +="<td style='font-size:12px;font-weight:bold;text-align:right'>Calender Year-"+document.getElementById('achedamicYear').value+"</td>";
					newStr +="</tr>";
					newStr +="</table>";
				    newStr +="<br><table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'>(1)</th>";
					newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>(2)</th>";
					newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>(3)</th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;' colspan='2'>(4)</th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;' colspan='2'>(5)</th>";
					newStr +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>(6)</th>";
					newStr +="</tr>"; 
					
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;width:250px;font-size:12px;' rowspan='2'>Programme of Syudy</th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;' rowspan='2'>Full Time/Part Time</th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;' rowspan='2'>Nationality</th>";
					newStr +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>New Registrations</th>";
					newStr +="<th style='border: 1px solid black;width:150px;font-size:12px;' colspan='2'>Total Foreign Student Enrolment</th>";
					newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;' colspan='2'>Fees Charges for the year 2015(from all the students mentioned in column (5)</th>";
					newStr +="</tr>"; 					

					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Male&nbsp;</th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Female&nbsp;</th>";					
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'>Curency&nbsp;</th>";					
					newStr +="<th style='border: 1px solid black;width:125px;font-size:12px;'>Amount</th>";					
					newStr +="</tr>"; 	

                    newStr +="<tr style='border: 1px solid black;background-Color:#666666;font-size:12px;width:300px;' colspan='9'>Eg.PG Dip in Computer Science";
					//newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;colspan='9'>Eg.PG Dip in Computer Science</th>";				
					newStr +="</tr>"; 

                    newStr +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
					newStr +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					newStr +="<th style='border: 1px solid black;width:100px;font-size:12px;'></th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";					
					newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;'></th>";					
					newStr +="<th style='border: 1px solid black;width:125px;font-size:12px;'></th>";		
					newStr +="</tr>";
                    
					newStr +="<tr style='border: 1px solid black;'>";				
					newStr +="</tr>"; 
					
					newStr +="<tr style='border: 1px solid black;background-Color:#666666;font-size:12px;width:300px' colspan='9'>MASTER DEGREE (MSC,MA,MBA,....)";
					//newStr +="<th style='border: 1px solid black;width:75px;font-size:12px;colspan='9'>MASTER DEGREE (MSC,MA,MBA,....)</th>";	
					
					newStr +="</tr>"; 
				
					
			for( i=0; i<applicationNoLength; i++){
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(studentNationalityArr[i] != studentNationalityArr[i-1] && countryRegionArr[i] !='Local' && countryRegionArr[i] !="" && achedamicYearArr[i]== document.getElementById('achedamicYear').value ){	
			newStr +="<tr style='border: 1px solid black;'>";
            newStr +="<td style='border: 1px solid black;width:250px;font-size:12px;'>"+degreeTitleArr[i]+"</td>"; 		
			newStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'>Full Time</td>";

			newStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'>"+studentNationalityArr[i]+"</td>";
			       for( j=0; j<applicationNoLength; j++){
		              if(applicationNoArr.indexOf(applicationNoArr[j]) == applicationNoArr.lastIndexOf(applicationNoArr[j]) || (applicationNoArr.indexOf(applicationNoArr[j]) != applicationNoArr.lastIndexOf(applicationNoArr[j]) && applicationNoArr.indexOf(applicationNoArr[j])==j)){
			            if (degreeCodeArr[i] == degreeCodeArr[j] && studentNationalityArr[i] == studentNationalityArr[j] && studentNICArr[j] >499 && achedamicYearArr[j]== document.getElementById('achedamicYear').value )
						{
							Fcount++;
							TFcount++;
						}
					    if (degreeCodeArr[i] == degreeCodeArr[j] && studentNationalityArr[i] == studentNationalityArr[j] && studentNICArr[j] < 500 && achedamicYearArr[j]== document.getElementById('achedamicYear').value)
						{
							Mcount++;
							TMcount++;
						}
					  }
				   }
				   
				   var str = "";
                   str = durationArr[i];
				   str=(str.split(" ",2)[str.split(" ",2).length-2]);
                   
				   var NewYear = '';
				   NewYear= document.getElementById('achedamicYear').value - str;
				   //alert(NewYear);
			       for( j=0; j<applicationNoLength; j++){
		              if(applicationNoArr.indexOf(applicationNoArr[j]) == applicationNoArr.lastIndexOf(applicationNoArr[j]) || (applicationNoArr.indexOf(applicationNoArr[j]) != applicationNoArr.lastIndexOf(applicationNoArr[j]) && applicationNoArr.indexOf(applicationNoArr[j])==j)){
			            if (degreeCodeArr[i] == degreeCodeArr[j] && studentNationalityArr[i] == studentNationalityArr[j] && studentNICArr[j] >499 && NewYear-1 < achedamicYearArr[j] < document.getElementById('achedamicYear').value +1 )
						{
							FEcount++;
							TFEcount++;
						}
					    if (degreeCodeArr[i] == degreeCodeArr[j] && studentNationalityArr[i] == studentNationalityArr[j] && studentNICArr[j] < 500 && NewYear-1 < achedamicYearArr[j] < document.getElementById('achedamicYear').value +1)
						{
							MEcount++;
							TMEcount++;
			            
					    }
					  }
				   }
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					if (str==1)
					{
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Mcount+"</td>";
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+Fcount+"</td>";
					var courseFee= Mcount + Fcount;
					}
					else{
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+MEcount+"</td>";
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>"+FEcount+"</td>";	
                    var courseFee= FEcount + MEcount;
					
					}
                    
					var TotalcourseFee1 = courseFeeArr[i]* courseFee;
					TotalcourseFee2=TotalcourseFee2+TotalcourseFee1;
					newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;'>LKR</td>";					
					newStr +="<td style='border: 1px solid black;width:125px;font-size:12px;'>"+TotalcourseFee1+"</td>";
			        newStr +="</tr>";
					Mcount=0;
					Fcount=0;
					MEcount=0;
					FEcount=0;
					
		    }
			}
			}
			newStr +="<tr style='border: 1px solid black;background-Color:#b3b3b3;'>";
            newStr +="<th style='border: 1px solid black;width:250px;font-size:12px;'>Total</th>"; 		
			newStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'></td>";	
            newStr +="<td style='border: 1px solid black;width:100px;font-size:12px;'></td>";
			newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";
			newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TMcount+"</td>";
			newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>"+TFcount+"</td>";	
			newStr +="<td style='border: 1px solid black;width:75px;font-size:12px;font-weight:bold;'>LKR</td>";					
			newStr +="<td style='border: 1px solid black;width:125px;font-size:12px;font-weight:bold;'>"+TotalcourseFee2+"</td>";
            newStr +="</tr>";			
		    newStr +="</table>";
            newStr +="<br><div class='investLabel' style='margin-left:350px;text-align:center;font-weight:bold;font-size:12px'>Certified by:</div>";
            newStr +="<table style='margin-left:400px;border-collapse: collapse;border: 1px solid black;'>";
		   	newStr +="<tr style='border: 1px solid black;height:20px;'>";
			newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Signature</th>";
			newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			newStr +="</tr>"; 
			newStr +="<tr style='border: 1px solid black;height:20px;'>";
			newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Nane</th>";
			newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			newStr +="</tr>"; 
			newStr +="<tr style='border: 1px solid black;height:20px;'>";
			newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Designation</th>";
			newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			newStr +="</tr>"; 
			newStr +="<tr style='border: 1px solid black;height:20px;'>";
			newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Contact Tel No</th>";
			newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			newStr +="</tr>"; 
			newStr +="<tr style='border: 1px solid black;height:20px;'>";
			newStr +="<th style='border: 1px solid black;width:50px;font-size:12px;'>Date</th>";
			newStr +="<th style='border: 1px solid black;width:200px;font-size:12px;'></th>";
			newStr +="</tr>"; 
		    newStr +="</table>";
		   // newStr +="<br><div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-weight:bold;font-size:12px>_______________________________________________________________________________________________</div>";
            newStr +="<br><br><br><hr style='width:750px;margin-left:10px;'></hr>"; 
			newStr +="<div class='investLabel' style='margin-left:10px;width:600px;text-align:center;font-size:9px'>Please return completed shedule to the Head/MIS, MIS Division, University Grants Commission,20, Ward Place, Colombo 7.Tel 2685184/ E-mail: mis@ugc.ac.lk  This shedule can be downloaded from http://www.ugc.ac.lk under data collection Sfedules (Enrolment)</div>";

	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {
	  "type": "text/doc;charset=utf8;"			  
	});
	
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	  link.setAttribute("href", window.URL.createObjectURL(blob));
	  link.setAttribute("download", fileName);
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}