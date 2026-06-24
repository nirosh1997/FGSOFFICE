function formPaymentList(dsp){
 
		title = "View Student Payment List";
		str = "";

	if(dsp == "formPaymentList") {
	
			str  = "<div id='formPaymentList'>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="formPaymentList">';
			str += "</br>";
			str +="<div id='topics' class='info'>";
			str +="<div class='investLabel_l'>Faculty</div>";
			str +="<div class='investLabel_l'>Department</div>";
			str +="<div class='investLabel_l'>Student NIC</div>";
			str +="<div class='investLabel_l' >Student Name</div>";
			str +="<div class='investLabel_l'>Instalment Type</div>";
			str +="<div class='investLabel_l'>Payment Method</div>";
			str +="</div></br>";
			
			
			for( var i=0; i<studentNICArr.length; i++){
			
			str +="<div class='info'   name='testInfo"+i+"'>";
			str += "<div class='investView_l' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += facultyTitleArr[i]+"</div>";
			
			str += "<div class='investView_l' name='departmentTitle"+i+"' id='departmentTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += departmentTitleArr[i]+"</div>";
			
			str += "<div class='investView_l' name='studentNIC"+i+"' id='studentNIC"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += studentNICArr[i]+"</div>";
			
			str += "<div  class='investView_l' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += studentNameArr[i]+"</div>";
			
			str += "<div class='investView_l' name='instalmentType"+i+"' id='instalmentType"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += instalmentTypeArr[i]+"</div>";

			str += "<div class='investView_l' name='paymentMethod"+i+"' id='paymentMethod"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += paymentMethodArr[i]+"</div>";
			
			str += "</br></br></br>";
	
			str +="</div>";
		
			
	}
			str += "<br><br><center>";
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += "</center>";
			str += '</form>';
			str += '</td></tr></table>';
			str += '</div>';
	
			}
	return str;
	
	}