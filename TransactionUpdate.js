// ////Coded by S.Suraweera////
// ////17.05.2015-----



function formTransactionUpdate(dsp){
	
		var keyDisabled = fieldDisabled = "";
		str="";
		title = "Update Examiner Recommendation Details";
		if (dsp == "formTransactionUpdate") {
		
			str += "<table border='0'><tr><td  colspan='13'>"
			str += '<h2 align="center">'+title+'</h2></td>';
			
			keyDisabled = "Disabled";
			
			str+='<div id="updateTransactionDetails" >';
			str+='<form name ="maintainupdateTransactionDetails">';
			str+='<fieldset>'
			str+='<legend>Transaction Information</legend>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Student Name</label>';
			str+=' <input type="text" id="boardNumbers" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["studentName"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+=' <tr>';
			str+=' <td><label for="exno">Thesis ID</label>';
			str+=' <input type="text" id="tid" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["tid"].trim()+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			
			str+='<tr>';
			str+=' <td><label for="name">Examiner Name</label>';
			str+=' <input type="text" id="examinerName" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["lecturerName"].trim()+'-'+dataRep["lecturerEmpNo"]+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+' ></td>';
			str+=' </tr>';
		
			
			str+=' <tr>';
			str+=' <td><label for="exno">BOS/FGS/Senate Number</label>';
			str+=' <input type="text" id="boardNumbers" class="exno text"  style="float:left;width:600px;" value= "'+dataRep["BOSNo"]+'" onchange="dataRep[this.name]=this.value" '+keyDisabled+'></td>';//'+dataRep["indexNumberAL"][i]+'
			str+=' </tr>';
			
			str+='<tr>';
			str+=' <td width="59"><label for="name">Received Date From HOD/BOS/FGS</label>';
			str+=' <input type="text" id="BOSDate" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["BOSDate"]+'" ></td>';
			str+=' </tr>';
		
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate Date</label>';
			str+='<input type="text" id="dateReceivefromHead" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateReceivefromHead"]+'" ></td>';
			str+='</tr>';
			
			if(dataRep["Accept"]=="2"){
			BOSChecked = 'checked';
			
			
			
			str +="<tr>";
			str +="<td><onclick='dataRep[this.name]=this.value;'><label>Reject</label>";
			str +="<input  type='checkbox' name='bosReject' id='bosRejectChk' class='changeColor'  value='Bos Reject'></td>";
			str += document.getElementById('bosRejectChk').checked == true;
			str +='</tr><br>';
			}
			else{
			str +="<tr>";
			str +="<td><onclick='dataRep[this.name]=this.value;'><label>Reject</label>";
			str +="<input  type='checkbox' name='bosReject' id='bosRejectChk' class='changeColor'  value='Bos Reject'></td>";

			str +='</tr><br>';
			
			}
			
			str+='<br/><tr>';
			str +="<td><label></label>";
			str +="</td>";
			str+='</tr>';
			
			str+='<tr>';
			str+='<td width="59"><label for="name">BOS/FGS/Senate ReNominate</label>';
			str+='<input type="text" id="DateRequestRenominate" style="float:left;width:600px;" size="" class="required text" value= "'+dataRep["DateRequestRenominate"]+'" ></td>';
			str+='</tr>';
			
			
			
			
			str +='<tr>';
			str +='<td> <input type="button" class="btnB" value="Update"  onclick=formBOSUpdatesendForm('+"'updateExaminerReccomandBOS'"+');>';	
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

function formBOSUpdatesendForm(frm){

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
		
		
		if(frm == 'updateExaminerReccomandBOS'){
 
			doc = document.maintainUpdateExaminerBoard;
		//alert(dataRep["BOSDate"]);
			dataStr += "&interface="+frm;
									
						
			dataStr += "&eid="+dataRep["lecturerEmpNo"];
			
			dataStr += "&BOSNo="+dataRep["BOSNo"];
			
			dataStr += "&BOSDate="+document.getElementById('BOSDate').value;
						
			dataStr += "&DateReceivefromHead="+document.getElementById('dateReceivefromHead').value;
						
			
			if(document.getElementById('bosRejectChk').checked == true){
				dataStr +="&Accept="+"2";
			}
			else{
				dataStr +="&Accept="+"1";
			}
			
			
			dataStr += "&DateRequestRenominate="+document.getElementById('DateRequestRenominate').value;
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}