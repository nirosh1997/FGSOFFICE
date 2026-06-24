dataRep['invoiceNo']= dataRep["degreeTitle"] = dataRep["accountNum"] = dataRep["rupees"] ="";
dataRep["bankOfficer"] = dataRep["payerDetails"] = dataRep["annualBenchFee"]="";
dataRep["renewalRegistrationFee"] = dataRep["total"] = "";
function displayButton(){
	
		document.getElementById('issue').style.display='block';
		
}
function displayButton2(){
		document.getElementById('issue').style.display='block';
		document.getElementById('letter').style.display='block';
		
}

function displayButton3(){
		document.getElementById('issue').style.display='none';
		document.getElementById('letter').style.display='none';
		
}

function dataforLetter(){
alert("ok");
sendForm('data4RegistrationLetter');

}




function callNextFunctionLetter(){

//sendForm('data4RegistrationLetter');

		for(i = 0; i<studentNICLength; i++) { 
			if(studentNICArr[i] == dataRep["studentNIC"]){
		
						dataRep["studentName"]=studentNameArr[i];
						dataRep["studentNo"]=studentNoArr[i];
						dataRep["universityCode"]=universityCodeArr[i];
						dataRep["universityTitle"]=universityTitleArr[i];
						dataRep["facultyCode"]=facultyCodeArr[i];
						dataRep["facultyTitle"]=facultyTitleArr[i];
						dataRep["departmentCode"]=departmentCodeArr[i];
						dataRep["departmentTitle"]=departmentTitleArr[i];
						dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
						dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
						dataRep["degreeCode"]=degreeCodeArr[i];
						dataRep["degreeTitle"]=degreeTitleArr[i];
						dataRep["invoiceNo"]=invoiceNoArr[i];
						dataRep["batchNo"]=batchNoArr[i];
						dataRep["academicYear"]=academicYearArr[i];
						dataRep["calenderYear"]=calenderYearArr[i];
						dataRep["extendedDuration"]=extendedDurationArr[i];
						dataRep["commenceDate"]=commenceDateArr[i];
						dataRep["fullpaymentDeadlineDate"]=fullpaymentDeadlineDateArr[i];
						dataRep['halfpaymentDeadlineDate']=halfpaymentDeadlineDateArr[i];
						dataRep['rate1']=rate1Arr[i];
						dataRep['categoryCode']= categoryCodeArr[i];
						dataRep['categoryTitle']= categoryTitleArr[i];
						//alert(dataRep["commenceDate"]);
			} 
		}
	//sendForm('data4RegistrationLetter');
	showMenu('updateRegistrationLetter');
}





function formVoucherDiploma(dsp) {

str = "";
 var keyDisabled = fieldDisabled = "";
		if(dsp == "addVoucherDiploma"){
		keyDisabled = "Disabled";

			str  = "<div id='addVoucherDiploma'>";

			
			//str += '<h2 ></h2><hr>';
			str += '<form name="formVoucherDiploma">';

			//var str = "";
		//	var xxx="'s";
			str += "<div style='width:700px; margin:10px auto;'>";
			str += "<table ><tr><td>"
			str += '<center><img src ="img/nciNew.gif" style="width:150px; height:150px;"/></center>';
			str += '<center><h3>UNIVERSITY OF KELANIYA-SRI LANKA</h3></center>'
			str += '<center><h4>PAYING IN VOUCHER</h4></center>'
			str += '<center><h5></h5></center>'
			str +="<font style= 'font-size:12px;'>";	
			str += "<div style='width:100%; margin:10px; float:left; '>";

			str += "<div style='width:33%;   height:50px;float:left; '>People's Bank-Kelaniya</div>";		
			str += "<div style='width:33%; height:50px;float:left; '></div>";		
			str += "<div style='width:34%; height:50px;float:left; '><div style=' float:left;    width:45%; text-align:right;  '>No</div><input type='text'  style='width:50%;' name='invoiceNo' id='invoiceNo' onchange='dataRep[this.name]=this.value' value= '"+dataRep['invoiceNo']+"'  "+keyDisabled+"/></div>";		

			
			str += "<div style='width:33%; height:100px;float:left; '>Bursar<br>University of Kelaniya<br>Kelaniya</div>";		
			str += "<div style='width:33%; height:100px;float:left; '>&nbsp;</div>";		
			//str += "<div style='width:34%; height:100px;float:left; '><br>Date-.....................<div style='float:left;   width:100%;  '></div></div>";		
			str += "<div style='width:34%; height:100px;float:left; '><br>Date<div style='float:left;   width:100%;  '><input type='text' style='width:50%;'  name='date' value= '"+dataRep["date"]+"'  onchange='dataRep[this.name]=this.value'></div></div>";
			
			str += "</div>";
	
			 str += "<div style='clear:both; margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Name of the levying course(with relevant subject)</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text' style='width:100%;' name='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";
			 



			 str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:100%; float:left;'>Paid to the credit of the University of Kelaniya,Collection <b> A/C No.055-100130667553 by</b></div><br>";
			str += "<input type='text' style='width:100%;' name='studentName' value= '"+dataRep["studentName"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "<div style='width:50%; float:left;'>Full name in block letters</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "</div>";
			str += "</div>";


			 str += "</div>";	

			str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Student number(if any)</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='studentNo' value= '"+dataRep["studentNo"]+"'  onchange='dataRep[this.name]=this.value' >";
			str += "</div>";
			str += "</div>";


			 str += "</div>";			 
 
			 
		 str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>National Identity Card No</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='studentNIC' value= '"+dataRep["studentNIC"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";	
			str +="<div class='hideLabel'>";
			str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Batch No</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='batchNo' value= '"+dataRep["batchNo"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";
			str +="</div>";

			 str += "</div>";				 
			str +="<div class='hideLabel'>";
			str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Budget Id</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='budgetId' value= '"+dataRep["budgetId"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";	 
			 str +="</div>";
			
			 
			 str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>the sum of Rupees and cts.(in words)</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='rupees' value= '"+dataRep["rupees"]+"'  onchange='dataRep[this.name]=this.value'>";
			str += "</div>";
			str += "</div>";


			 str += "</div>";			 			 
			 
			 



			str += "<div style='width:100%; float:left; '>";

			str += "<div style='width:58%; float:left; border-right:1px solid black;  '>&nbsp;</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Rs</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Cts</div>";

			str += "</div>";			
			

		for (var i=0; i<studentNICLength; i++) {
			if (categoryCodeArr.indexOf(categoryCodeArr[i])== categoryCodeArr.lastIndexOf(categoryCodeArr[i]) || (categoryCodeArr.indexOf(categoryCodeArr[i])!= categoryCodeArr.lastIndexOf(categoryCodeArr[i]) && categoryCodeArr.indexOf(categoryCodeArr[i])== i)){
				if (rate1Arr[i] != ""){	
			str += "<div style='width:100%; height:20px;  float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:53%; float:left;   '>"+categoryTitleArr[i]+"</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='amount' value= '"+rate1Arr[i]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";
				}
			}
		}
			
///////////////////////////////////////			
			str += "<div style='width:100%;  float:left; border-top:1px solid black; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:48%; float:left;   '>Should be paid at the first payment</div>";
			str += "<div style='width:10%; float:left;   '>Total</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='fullTotalAmount' id='fullTotalAmount' value= '"+dataRep["fullTotalAmount"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";															
			
			str += "</div>";											

			 str += "<div style='clear:both; width:100%; height:15px; float:left; '>&nbsp;</div>";
			
			 str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Name and address of payer</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='payerDetails' id='payerDetails' value= '"+dataRep["payerDetails"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";			 


			  str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Officer of the bank</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='bankOfficer' id='bankOfficer' value= '"+dataRep["bankOfficer"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "</div>";
			 str += "</font></div>";		
			str += "<center>";
			str += '<input type="button" class="btn" style="display:none;" id="issue" value="Issue Voucher" onclick=formVoucherDiplomasendForm("addVoucherDiploma");displayButton2();>';
			
			str += '<input type="button" class="btn"   id="print" value="Print Voucher" onclick="getVoucherPrint();displayButton();">';
			
			//str += '<input type = "button" class ="btn" style="display:none;" id="letter" value="Registration letter" onclick="callNextFunctionLetter();sendForm('+"'data4RegistrationLetter'"+');">';
			str += '<input type = "button" class ="btn" style="display:none;" id="letter" value="Registration letter" onclick="displayButton3();callNextFunctionLetter();">';
			
			str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
			str += "</center>";
			
			str += "</form></td></tr></table>";
			str += "</div>";
			
			

			
		}
		
		
			return str;
	}

	
	function formVoucherDiplomasendForm(frm){
	
	var doc, dataStr;
	var payStr ="";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		} else if(frm.substring(0,5) == 'data4'){
				dataStr = "action=get&interface="+frm;
		}
	
		if(frm == 'addVoucherDiploma'){
		
			doc = document.formVoucherDiploma;
			dataStr += "&interface="+frm;
		
			
				dataStr += "&universityCode="+dataRep["universityCode"];
				dataStr += "&facultyCode="+dataRep["facultyCode"];
				dataStr += "&departmentCode="+dataRep["departmentCode"];
				dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
				dataStr += "&degreeCode="+dataRep["degreeCode"];
				dataStr += "&invoiceNo="+doc.invoiceNo.value;
				dataStr += "&batchNo="+doc.batchNo.value;
				dataStr += "&budgetId="+doc.budgetId.value;
				
				dataStr += "&studentNIC="+dataRep["studentNIC"];
				dataStr += "&studentName="+dataRep["studentName"];
				dataStr += "&instalmentType="+"first";
		
			for (var i=0; i<studentNICArr.length; i++){
	
				if(studentNICArr[i] == dataRep["studentNIC"]){
					
						//alert(dataRep["studentNIC"]);
				//if (rate1Arr[i] != ""){
					payStr += "&categoryCode="+categoryCodeArr[i];
					payStr += "&rate1="+rate1Arr[i];
				

					if(voucherIdArr.length!=0){
					var voucherId=parseInt(voucherIdArr[voucherIdArr.length-1]);
					voucherId=voucherId+1;	
					dataRep['voucherId']=voucherId;
					payStr += "&voucherId="+voucherId;
					}
					else{
					var voucherId=parseInt('1');
					dataRep['voucherId']=voucherId;
					payStr += "&voucherId="+voucherId;
					}
				//}
				
				}
				voucherPaymentArr[i] = dataStr + payStr;
			//alert(voucherPaymentArr[i]);	
			}
			if(frm == 'addVoucherDiploma'){
				for(x=0; x<studentNICArr.length; x++){
					if(studentNICArr[x] == dataRep["studentNIC"]){
						if(voucherPaymentArr[x]!= ""){
						//alert(voucherPaymentArr[x]);
							isrHandle.getDataFromDB(eval("clientController"), "serverController.php", voucherPaymentArr[x]);
						}
					}
				}
			}
		}	

	 else{
		 isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 }		
			
	return 0;
		
}




function getVoucherPrint(){
	var gtDischargeDiv = document.getElementById('addVoucherDiploma').innerHTML;

	var gtDischargeDiv = document.getElementById('addVoucherDiploma').innerHTML;
	
	newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">label{font-family:tahoma;font-size:12px}.investView_l,.investLabel_l{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:1000px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog,.hideLabel{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write('<h2 style="text-align:center;"></h2>');
		doc.write(gtDischargeDiv);
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write('</body></html>');
		doc.close();
		
}