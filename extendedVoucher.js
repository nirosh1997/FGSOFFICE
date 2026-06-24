dataRep['invoiceNo']= dataRep["degreeTitle"] = dataRep["accountNum"] = dataRep["rupees"] ="";
dataRep["bankOfficer"] = dataRep["payerDetails"] = dataRep["annualBenchFee"]="";
dataRep["renewalRegistrationFee"] = dataRep["total"] = "";
function displayIssueButton(){
	
		document.getElementById('issuebtn').style.display='block';
		
}
function getTimeExtendedVoucherPrint(){
		var divText = "";
		var xxx="'s";
			
			
			divText += "<div style='width:700px; margin:10px auto;'>";
			divText += "<table ><tr><td>"
			divText += '<center><img src ="img/nciNew.gif" style="width:150px; height:150px;"/></center>';
			divText += '<center><h3>UNIVERSITY OF KELANIYA-SRI LANKA</h3></center>'
			divText += '<center><h4>PAYING IN VOUCHER</h4></center>'
			divText += '<center><h5></h5></center>'
			divText +="<font style= 'font-size:12px;'>";	
			divText += "<div style='width:100%; margin:10px; float:left; '>";

			divText += "<div style='width:33%;   height:50px;float:left; '>People's Bank-Kelaniya</div>";		
			divText += "<div style='width:33%; height:50px;float:left; '></div>";		
			divText += "<div style='width:34%; height:50px;float:left; '><div style=' float:left;    width:45%; text-align:right;  '>No</div><input type='text'  style='width:50%;' disabled='disabled' name='invoiceNo' id='invoiceNo' onchange='dataRep[this.name]=this.value' value= '"+dataRep['invoiceNo']+"'  "+keyDisabled+"/></div>";		

			divText += "<div style='width:33%; height:100px;float:left; '>Bursar<br>University of Kelaniya<br>Kelaniya</div>";		
			divText += "<div style='width:33%; height:100px;float:left; '>&nbsp;</div>";		
			//divText += "<div style='width:34%; height:100px;float:left; '><br>Date-.....................<div style='float:left;   width:100%;  '></div></div>";		
			divText += "<div style='width:34%; height:100px;float:left; '><br>Date<div style='float:left;   width:100%;  '><input type='text' disabled='disabled' style='width:50%;'  name='date' value= '"+dataRep["date"]+"'  onchange='dataRep[this.name]=this.value'></div></div>";
			divText += "</div>";
	
			divText += "<div style='clear:both; margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>Name of the levying course(with relevant subject)</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";
			 

			 
			divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:100%; float:left;'>Paid to the credit of the University of Kelaniya,Collection <b> A/C No.055-100130667553 by</b></div><br>";
			divText += "<input type='text' style='width:100%;' disabled='disabled' name='studentName' value= '"+dataRep["studentName"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			divText += "<div style='width:50%; float:left;'>Full name in block letters</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";	

			divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>Student number(if any)</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='studentNo' value= '"+dataRep["studentNo"]+"'  onchange='dataRep[this.name]=this.value' >";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";



		 
			 
			 
		 divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>National Identity Card No</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='studentNIC' value= '"+dataRep["studentNIC"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";			 

			 
			 divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>the sum of Rupees and cts.(in words)</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='rupees' value= '"+dataRep["rupees"]+"'  onchange='dataRep[this.name]=this.value' >";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";			 			 


			divText += "<div style='width:100%; float:left; '>";

			divText += "<div style='width:58%; float:left; border-right:1px solid black;  '>&nbsp;</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Rs</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Cts</div>";

			divText += "</div>";			
			
												

			divText += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			divText += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			divText += "<div style='width:53%; float:left;   '>Renewal of registration fee</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' disabled='disabled' style='width:100%;' name='renewalRegistrationFee' value= '"+dataRep["renewalRegistrationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			divText += "<div style='width:20%; float:left;  '><input type='text' disabled='disabled' style='width:100%;' "+keyDisabled+"></div>";

			divText += "</div>";												
																								
			
			
			
			divText += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			divText += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			divText += "<div style='width:53%; float:left;   '>Certificate fee</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' disabled='disabled' style='width:100%;' name='certificateFee' value= '"+dataRep["certificateFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			divText += "<div style='width:20%; float:left;  '><input type='text' disabled='disabled' style='width:100%;' "+keyDisabled+"></div>";

			divText += "</div>";																											
			
			
			divText += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			divText += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			divText += "<div style='width:53%; float:left;   '>Convocation fee</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text'  disabled='disabled' style='width:100%;' name='convocationFee' value= '"+dataRep["convocationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			divText += "<div style='width:20%; float:left;  '><input type='text' disabled='disabled' style='width:100%;' "+keyDisabled+"></div>";

			divText += "</div>";																														
			
			
			
			divText += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			divText += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			divText += "<div style='width:53%; float:left;   '>Repeat exam fee</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text'  disabled='disabled' style='width:100%;' name='repeatExamFee' value= '"+dataRep["repeatExamFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			divText += "<div style='width:20%; float:left;  '><input type='text' disabled='disabled' style='width:100%;' "+keyDisabled+"></div>";

			divText += "</div>";																																	
			
																																										
			
			
			
			
			
			
			
			divText += "<div style='width:100%; float:left; border-top:1px solid black; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			divText += "<div style='width:48%; float:left;   '>Should be paid at the first payment</div>";
			divText += "<div style='width:10%; float:left;   '>Total</div>";
			divText += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' disabled='disabled' style='width:100%;' name='fullTotalAmount' id='fullTotalAmount' value= '"+dataRep["fullTotalAmount"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></div>";
			divText += "<div style='width:20%; float:left;  '><input type='text' disabled='disabled' style='width:100%;' "+keyDisabled+"></div>";

			divText += "</div>";															
			
			divText += "</div>";											

			 divText += "<div style='clear:both; width:100%; height:15px; float:left; '>&nbsp;</div>";
			
			 divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>Name and address of payer</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='payerDetails' id='payerDetails' value= '"+dataRep["payerDetails"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			divText += "</div>";
			divText += "</div>";


			 divText += "</div>";			 


			  divText += "<div style='clear:both;margin:10px;'>";

			divText += "<div style='width:100%; float:left;'>";
			divText += "<div style='width:50%; float:left;'>Officer of the bank</div>";
			divText += "<div style='width:50%; float:left;'>";
			divText += "<input type='text' disabled='disabled' style='width:100%;' name='bankOfficer' id='bankOfficer' value= '"+dataRep["bankOfficer"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			divText += "</div>";
			divText += "</div>";
			 divText += "</font></div>";	



		divText += "</div>";
		divText += '<input type="button" id="prbtn"  style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;margin:30% 40%;" onclick=toPrint(); value="Print"/>';
		divText += "</form></td></tr></table>";
		divText += "</div>";
		
		var myWindow = window.open('','');
		var doc = myWindow.document;
		doc.open();
		
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">.investView_l,.investLabel_l{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:700px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#issue,#print,#return,#btnlog,#letter{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write(divText);
	//	doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write('</body></html>');
		doc.close();
		
		
	}





function formStudentExtendedVoucher(dsp) {
str = "";
 var keyDisabled = fieldDisabled = "";
		if(dsp == "formStudentExtendedVoucher"){
		keyDisabled = "Disabled";

			str  = "<div id='addExtendedVoucher'>";

			
			//str += '<h2 ></h2><hr>';
			str += '<form name="maintainStudentExtendedVoucher">';

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
			//str += "<div style='width:34%; height:100px;float:left; '><br>Date<div style='float:left;   width:100%;  '><input type='text' style='width:50%;'></div></div>";		
			str += "<div style='width:34%; height:100px;float:left; '><br>Date<div style='float:left;   width:100%;  '><input type='text'  style='width:50%;'  name='date' value= '"+dataRep["date"]+"'  onchange='dataRep[this.name]=this.value'></div></div>";
			
			str += "</div>";
	
			 str += "<div style='clear:both; margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Name of the levying course(with relevant subject)</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text' style='width:100%;' name='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";
			 
	// 
	//for(dep=0; dep<degreeCodeLength; dep++){
			
		//	if(studentNameArr[dep] == dataRep["studentName"]  && studentNICArr[dep] == dataRep["studentNIC"] && studentNoArr[dep] ==  dataRep["studentNo"]){
	//alert(dataRep["studentName"]);
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
			str += "<input type='text'  style='width:100%;' name='studentNo' value= '"+dataRep["studentNo"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+" >";
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

			
			
			str += "<div style='width:100%; height:20px; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:53%; float:left;   '>Renewal of registration fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='renewalRegistrationFee' value= '"+dataRep["renewalRegistrationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												

									
			
			
			
			
			str += "<div style='width:100%; height:20px; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:53%; float:left;   '>Certificate fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='certificateFee' value= '"+dataRep["certificateFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												
			
			
			str += "<div style='width:100%; height:20px; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:53%; float:left;   '>Convocation fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='convocationFee' value= '"+dataRep["convocationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												
			
			
			str += "<div style='width:100%; height:20px; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:53%; float:left;   '>Repeat exam fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='repeatExamFee' value= '"+dataRep["repeatExamFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												
			
			
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
			str += '<input type="button" class="btn"  style="display:none;" id="issuebtn" value="Issue Voucher" onclick=formStudentExtendedVouchersendForm("addExtendedVoucher");>';
			
			str += '<input type="button" class="btn"   id="print" value="Print Voucher" onclick="getTimeExtendedVoucherPrint();displayIssueButton();">';
			
			//str += '<input type = "button" class ="btn2" style="display:none;" id="letter" value="Registration letter" onclick="callNextFunctionLetter();">';
			str += '<input type="button" class="btn" value = "Return" id="requestBack" onclick = showMenu("formStudentExtendedTime");></center>';
		
			str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
			str += "</center>";
			
			str += "</form></td></tr></table>";
			str += "</div>";
			
			

			
		}
		
		
			return str;
	}
	
	
	
			function formStudentExtendedVouchersendForm(frm){

			var doc, dataStr;
			var extendedpayStr = "";
			//var updateDataStr ="";

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
		
	if(frm == 'addExtendedVoucher'){
				
					doc = document.maintainStudentExtendedVoucher;
					dataStr += "&interface="+frm;
				
				
				dataStr += "&universityCode="+dataRep["universityCode"];
				dataStr += "&facultyCode="+dataRep["facultyCode"];
				dataStr += "&departmentCode="+dataRep["departmentCode"];
				dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
				dataStr += "&degreeCode="+dataRep["degreeCode"];
				dataStr += "&invoiceNo="+doc.invoiceNo.value;
				dataStr += "&studentNIC="+dataRep["studentNIC"];
				dataStr += "&studentName="+dataRep["studentName"];

		//for (var j=0; j<degreeCodeLength; j++){
				
			//if (amountArr[j] !=""){
				// extendedpayStr += "&paymentId="+paymentIdArr[j];
				// extendedpayStr += "&amount="+amountArr[j];
				
				dataStr += "&renewalRegistrationFee="+dataRep["renewalRegistrationFee"];
				dataStr += "&certificateFee="+dataRep["certificateFee"];
				dataStr += "&repeatExamFee="+dataRep["repeatExamFee"];
				dataStr += "&convocationFee="+dataRep["convocationFee"];
					
				
				
				
				// dataRep["voucherId"] = voucherIdArr[0];
                // if(dataRep["voucherId"]== null || dataRep["voucherId"]==""){
             // //alert("yes");
                    // dataStr += "&voucherId="+"1";
                // }else{
             // //alert("no");
                    // var voucherId = (parseInt(dataRep["voucherId"])+1).toString();
                    // dataRep["voucherId"] = voucherId;
                    // dataStr += "&voucherId="+dataRep["voucherId"];
                // }
				
					if(voucherIdArr.length!=0){
					var voucherId=parseInt(voucherIdArr[voucherIdArr.length-1]);
					voucherId=voucherId+1;	
					dataRep['voucherId']=voucherId;
					dataStr += "&voucherId="+voucherId;
					}
					else{
					var voucherId=parseInt('1');
					dataRep['voucherId']=voucherId;
					dataStr += "&voucherId="+voucherId;
					}
					
			//}		
					//voucherPaymentArr[j] = dataStr + extendedpayStr;
					//alert(voucherPaymentArr[j]);
					//alert(dataStr);
		//}
		
		// if(frm == 'addExtendedVoucher'){
				// for(k=0; k<degreeCodeLength; k++){
					// if(voucherPaymentArr[k]!= "" || voucherPaymentArr[k]!= null){
					// //alert(budgetDataIncomeArr[budgetLoop]);
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", voucherPaymentArr[k]);
						
					var updateDataStr = "action=update&interface=UpdateExtendedTime&studentNo="+dataRep['studentNo'];
					
					
					updateDataStr += "&ExtendedTime="+"yes"
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", updateDataStr);
			
						
						
					// }
				// }
					
						
		// }

					// var updateDataStr = "action=update&interface=UpdateExtendedTime&studentNo="+dataRep['studentNo'];
					
					
					// updateDataStr += "&ExtendedTime="+"yes"
					// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", updateDataStr);
			

	}
			
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
	
}