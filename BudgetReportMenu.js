
	
	function formViewFirstInstallementStudent(dsp) {
	
	var str = "";
		title = "View First Installement Student";

		if(dsp == "formViewFirstInstallementStudent"){
			
			str  = "<div id='formViewFirstInstallementStudent'>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="ViewFirstInstallementStudent">';

			str +="<div id='topics' class='info'>";
			str += "<div class='investLabel_l'>Faculty</div>";
			str += "<div class='investLabel_l'>Department</div>";
			str += "<div class='investLabel_l'>Programme Type</div>";
			str += "<div class='investLabel_l'>Degree</div>";
			str += "<div class='investLabel_l'>NIC</div>";
			str += "<div class='investLabel_l'>Name</div>";
			str += "<div class='investLabel_l'>Installement Type</div>";
			// str += "<div class='investLabel_l'>TotalAmount</div>";
			// str += "<div class='investLabel_l'>Academic Year</div>";
			 str +="</div></br>";
	

			for(studentCounter=0; studentCounter < universityCodeLength; studentCounter++){
			
			str +="<div class='info'   name='testInfo"+studentCounter+"'>";
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += facultyTitleArr[studentCounter]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += departmentTitleArr[studentCounter]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += programmeTypeTitleArr[studentCounter]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += degreeTitleArr[studentCounter]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += studentNICArr[studentCounter]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += studentNameArr[studentCounter]+"</div>";
		
			str += "<div class='investView_l' name='studentNIC"+studentCounter+"' id='studentNIC"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			str += instalmentTypeArr[studentCounter]+"</div>";
			
			// str += "<div class='investView_l' name='studentTotalAmount"+studentCounter+"' id='studentTotalAmount"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			// str += studentTotalAmountArr[studentCounter]+"</div>";
		
			// str += "<div class='investView_l' name='academicYear"+studentCounter+"' id='academicYear"+studentCounter+"' onchange='hims[this.name]=this.value;'>";
			// str += academicYearArr[studentCounter]+"</div>";
			
			str += "</div>";
			
			}
			
			str += "<br><br>";
			str +="<div style='float:left;clear:both' >";
			str += '<center>';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formReports'"+')>';
				
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}