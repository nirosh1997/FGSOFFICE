//S.Suraweera

function formDeleteApplicant(dsp) {

		
		str = ""; 
		title = "Delete Application"; 

			if(dsp == "formDeleteApplicant") {
			
			str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainDeleteApplicant"><br>';
					str +="<div>";
					
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Application Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='ApplicationNo' name='ApplicationNo' style ='width:130px' value= '"+dataRep["ApplicationNo"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
					
			str += "<input type='button' class='btn' value='Remove application'  onclick=formDeleteApplicationForm('deleteApplicationForm');>"; 
		
			str += '<input type="button" class="btn" value = "Back" onclick =showMenu('+"'formClerkMenu'"+');>';
					
			str += '<input type = "button" class ="btn" value="Exit" onclick=logOut();>';
		
					
				str += '</td></table></div>';
				str += '</form>';
				
			}
			
	return str;
			
}

function formDeleteApplicationForm(frm){

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

		if (frm == 'deleteApplicationForm'){	
	
 
			doc = document.maintainDeleteApplicant;
			dataStr += "&interface="+frm;
			// var newStr ="";
			
			// for(var i=0; i<applicationNoLength; i++){
				 // if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			    // if(document.getElementById('checkSelected'+i).checked == true){
				
		
	
			dataStr ="&applicationNo="+dataRep["applicationNo"];	
			
			// }
		// }

		//ApplicantData[i]= dataStr + newStr;	
//alert(dataStr);
		} 

		// for(var j=0; j<applicationNoLength; j++){						
			// //if(ApplicantData[j] != "" && updateDataStrArray[j] != "" ){
			// if(ApplicantData[j] != ""){
							
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			// }
		// }	
		
	//}
		return 0;
		
} 
	