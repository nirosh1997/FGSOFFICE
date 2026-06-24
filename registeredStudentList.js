function getRegisteredListprint(){
	var gtlistDiv = document.getElementById('addRegisteredStudentList').innerHTML;

	var gtlistDiv = document.getElementById('addRegisteredStudentList').innerHTML;
	
	newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">label{font-family:tahoma;font-size:12px}.investView_l,.investLabel_l,.investView,.investLabel{margin-left:40px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write('<h1 style="text-align:center;"><img src ="img/nciNew.gif" style="width:150px; height:150px;"/><br><center>University of Kelaniya</center></h1>');
		doc.write(gtlistDiv);
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write('</body></html>');
		doc.close();
		
}


function formRegisteredStudentList(dsp) {


		str = "";
		title = "Registered Student List";

		if(dsp == "formRegisteredStudentList") {

			str  = "<div id='addRegisteredStudentList'>";
			
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainRegisteredStudentList"><br><br>';

		//str += '<br/><br/>';
		
		str +="<div id='topics' class='info'>";
		
		str +="<div class='investLabel_l'>Student NIC</div>";
		str +="<div class='investLabel_l'>Student No</div>";
		str +="<div class='investLabel'>Student Name</div>";
		str +="<div class='investLabel'>Degree Title</div>";
		str +="<div class='investLabel'>Department Title</div>";
		str +="<div class='investLabel'>Faculty Title</div>";
		
		
		str +="<div></div>";
		str +="</div></br>";
			
		for( var i=0; i<studentNICLength; i++){

			
			str +="<div class='info'   name='testInfo"+i+"'>";
			str += "<div class='investView_l' name='studentNIC"+i+"' id='studentNIC"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += studentNICArr[i]+"</div>";
			
			
			str += "<div class='investView_l' name='studentNo"+i+"' id='studentNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += studentNoArr[i]+"</div>";
			
			str += "<div  class='investView' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += studentNameArr[i]+"</div>";
			
			str += "<div class='investView' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += degreeTitleArr[i]+"</div>";

			str += "<div class='investView' name='departmentTitle"+i+"' id='departmentTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += departmentTitleArr[i]+"</div>";

			str += "<div class='investView' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += facultyTitleArr[i]+"</div>";


			str +="</div>";

			
			str +="<div >&nbsp;</div>"
			str += "<br/>";
			//str +="</div>";
			
		}
		
		
		
		str +="<div style='clear:both'>&nbsp;</div>"
	
		str +="<div style='float:left;margin-left:25px'>";  
		//str += '<input type="button" id="print" class="btn" value="Print"  onclick=getRegisteredListprint();>';
		str += '<input type="button" id ="return" class="btn" value = "Return" onclick = showMenu('+"'formReports'"+')>';
				
		str += '<input type="button" id ="return" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
		str +="</div>";

		str += '</form>';
		str += '</div>';
		str += "</div>";
		
		}

		return str;
	}