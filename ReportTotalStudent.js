
var inum=0;
var rwcnt=1;
var count=0;

function formTotalStudentReport(dsp){
		title = " Total Student report";
		var keyDisabled = fieldDisabled = "";
 
		str = "";

			
		if(dsp == "formTotalStudentReport") {
	
			
	
	
		
			str  = "<div id='formTotalStudentReport'>";
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainNewCourseUnit" >';

			
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Achedamic Year From</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				str +="</div>";
				
				dataRep['achedamicYear1']="";
				str +="<div class='identifiers'>Achedamic Year To</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear1' value='achedamicYear1' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear1']);
				str += "</select>";
				str +="</div>";
				
				//str +="<input type='checkbox' id='select-all' name='select-all' onClick='toggle(this)' style='display:none' />";
		
			str +="<div style='clear:both'>&nbsp;</div>"
	        str += '<input type="button" class="btn" value = "Get Report " onclick=getTSReport();>';
			//str += '<input type="button" class="btn" value = "View Course Unit" onclick="sendForm('+"'data4ViewNewCourseUnit'"+')">';
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		
		}
		return str;
 
	}
	
	
	function getTSReport()
{
//	alert(document.getElementById('selectedDegreeName').value);
	var count1=1;
	var Rcount=1;
	var Stotal=0;
	
	
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Total Registerd Student From "+document.getElementById('achedamicYear').value+" To "+document.getElementById('achedamicYear1').value+"</div>";
					//newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>#</th>";
					newStr +="<th style='border: 1px solid black;'>Year</th>";
					newStr +="<th style='border: 1px solid black;'>Total</th>";
					
					newStr +="</tr>";
					
				
				
		
			//for( i=0; i<studentNoLength; i++){
				
				var frm= document.getElementById('achedamicYear').value;
				var to= document.getElementById('achedamicYear1').value;
			//	alert(studentNoLength);
				//for ( q=frm; q<=to; q++)
			//	{
					//alert(q);
				//	for( i=0; i<studentNoLength; i++){
						
				//	if (academicYearArr[i]==q)
				//	{
					//Stotal++;
				//	}
					
				//	}
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+q+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Stotal+'</td>';
					newStr +="</tr>";	
					newStr += "</div><dev><br>";
					inum++				
					Rcount++;	
					Stotal=0;
				//}
				//
		newStr +="</table>";

if (Rcount==1)
{
	alert("No records to display ");
	return 0;
}
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