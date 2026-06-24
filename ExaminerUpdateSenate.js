// ////Coded by S.Suraweera////
// ////17.05.2015-----



function formExaminerUpdateSenate(dsp){
	
		var keyDisabled = fieldDisabled = "";
		str="";
		title = "Update Examiner Recommendation Details";
		if (dsp == "formExaminerUpdateSenate") {
		
			str += "<table border='0'><tr><td  colspan='13'>"
			str += '<h2 align="center">'+title+'</h2></td>';
			
			keyDisabled = "Disabled";
			
			str+='<div id="ExaminerUpdateSenate" >';
			str+='<form align="center" name="maintainExaminerUpdateSenate">';
			str+='<fieldset>'
			str+='<legend>Student Information</legend>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Student Name</label>';
			str+=' <input type="text" id="boardNumbers" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["studentName"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Thesis ID</label>';
			str+=' <input type="text" id="boardNumbers" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["tid"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			
			str+='<tr>';
			str+=' <td><label for="name">Examiner Name</label>';
			str+=' <input type="text" id="examinerName" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["lecturerName"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+' ></td>';
			str+=' </tr>';
		
			
			str+=' <tr>';
			str+=' <td><label for="exno">BOS/FGS/Senate Number</label>';
			str+=' <input type="text" id="senateNo" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["SenateNo"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+='<tr>';
			str+=' <td width="59"><label for="name">Received Date From HOD/BOS/FGS</label>';
			str+=' <input type="text" id="senateDate" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["SenateDate"].trim()+'" ></td>';
			str+=' </tr>';
		
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate Date</label>';
			str+='<input type="text" id="DateReceivefromFGSBoad" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateReceivefromFGSBoad"].trim()+'" ></td>';
			str+='</tr>';
			
			if(dataRep["AcceptSenate"]=="2"){
			BOSChecked = 'checked';
			
			}
			
			str +="<tr>";
			str +="<td><onclick='dataRep[this.name]=this.value;'><label>Reject</label>";
			str +="<input  type='checkbox' name='senateRejectChk' id='senateRejectChk' class='changeColor'  value='Bos Reject'></td>";
			str +=BOSChecked;
			str+='</tr><br>';
			
			str+='<br/><tr>';
			str +="<td><label></label>";
			str +="</td>";
			str+='</tr>';
			
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate ReNominate</label>';
			str+='<input type="text" id="dateRequestRenominateSenate" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateRequestRenominateSenate"].trim()+'" ></td>';
			str+='</tr>';
			
			
			
			
			str +='<tr>';
			str +='<td> <input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerReccomandSenatesendForm('+"'updateExaminerReccomandSenate'"+');resetValues();>';	
			str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formAppointExaminers'"+');>';
			str += '<input type ="button" class ="btnB" value="logout" onclick=logOut();></td>';
			
			str+='</tr>';
			str+='</tr>';	
			str+='</div>';
			str+='</table>';
			str+='</form>';
			str+='</fieldset>';
			
		}
		return str;
	}
	
	function resetValues(){
lecturerEmpNoLength=0;
//showMenu('formUpdateUGCStudent');

}

function formUpdateExaminerReccomandSenatesendForm(frm){

	var doc, dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'updateExaminerReccomandSenate'){
 
			doc = document.maintainAppointExaminers;
		
			dataStr += "&interface="+frm;
				
														
			dataStr += "&eid="+dataRep["lecturerEmpNo"];
			
			dataStr += "&SenateNo="+dataRep["SenateNo"];
			
			dataStr += "&DateReceivefromFGSBoad="+document.getElementById('DateReceivefromFGSBoad').value;
				
			dataStr += "&SenateDate="+document.getElementById('senateDate').value;
			
			if(document.getElementById('senateRejectChk').checked == true){
				dataStr +="&AcceptSenate="+"2";
			}
			else{
				dataStr +="&AcceptSenate="+"1";
			}
			
			dataStr += "&DateRequestRenominateSenate="+document.getElementById('dateRequestRenominateSenate').value;
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}