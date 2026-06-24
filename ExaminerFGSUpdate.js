// ////Coded by S.Suraweera////
// ////17.05.2015-----



function formExaminerFGSUpdate(dsp){
	
		var keyDisabled = fieldDisabled = "";
		str="";
		title = "Update Examiner Recommendation Details";
		if (dsp == "formExaminerFGSUpdate") {
		
			str += "<table border='0'><tr><td  colspan='13'>"
			str += '<h2 align="center">'+title+'</h2></td>';
			
			keyDisabled = "Disabled";
			
			str+='<div id="updateExaminerReccomandFGS" >';
			str+='<form name="maintainExaminerFGSUpdate">';
			str+='<fieldset>'
			str+='<legend>Student Information</legend>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Student Name</label>';
			str+=' <input type="text" id="studentName" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["studentName"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Thesis ID</label>';
			str+=' <input type="text" id="tid" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["tid"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			
			str+='<tr>';
			str+=' <td><label for="name">Examiner Name</label>';
			str+=' <input type="text" id="examinerName" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["lecturerEmpNo"]+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+' ></td>';
			str+=' </tr>';
		
			
			str+=' <tr>';
			str+=' <td><label for="exno">BOS/FGS/Senate Number</label>';
			str+=' <input type="text" id="FGSBoardNo" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["FGSBoardNo"]+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+='<tr>';
			str+=' <td width="59"><label for="name">Received Date From HOD/BOS/FGS</label>';
			str+=' <input type="text" id="FGSBoardDate" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["FGSBoardDate"]+'" ></td>';
			str+=' </tr>';
		
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate Date</label>';
			str+='<input type="text" id="DateReceivefromBOS" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateReceivefromBOS"]+'" ></td>';
			str+='</tr>';
			
			if(dataRep["Acceptfgs"]=="2"){
			BOSChecked = 'checked';
			
			}
			
			str +="<tr>";
			str +="<td><onclick='dataRep[this.name]=this.value;'><label>Reject</label>";
			str +="<input  type='checkbox' name='bosReject' id='fgsRejectChk' class='changeColor'  value='Bos Reject'></td>";
			str +=BOSChecked;
			str+='</tr><br>';
			
			str+='<br/><tr>';
			str +="<td><label></label>";
			str +="</td>";
			str+='</tr>';
			
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate ReNominate</label>';
			str+='<input type="text" id="DateRequestRenominateFgs" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateRequestRenominateFgs"]+'" ></td>';
			str+='</tr>';
									
			
			str +='<tr>';
			str +='<td> <input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerFGSsendForm('+"'updateExaminerReccomandFGS'"+');>';	
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


function formUpdateExaminerFGSsendForm(frm){

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
		
		
		if(frm == 'updateExaminerReccomandFGS'){
 
			doc = document.maintainExaminerFGSUpdate;
		
			dataStr += "&interface="+frm;
												
						
			dataStr += "&eid="+dataRep["lecturerEmpNo"];
			
			dataStr += "&FGSBoardNo="+dataRep["FGSBoardNo"];
			
			dataStr += "&DateReceivefromBOS="+document.getElementById('DateReceivefromBOS').value;
				
			dataStr += "&FGSBoardDate="+document.getElementById('FGSBoardDate').value;
			
			if(document.getElementById('fgsRejectChk').checked == true){
			
				dataStr +="&Acceptfgs="+"2";
			}
			else{
				dataStr +="&Acceptfgs="+"1";
			}
			
			dataStr += "&DateRequestRenominateFgs="+document.getElementById('DateRequestRenominateFgs').value;
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}