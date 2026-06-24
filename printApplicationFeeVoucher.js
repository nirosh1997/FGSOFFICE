function printApplicatonFeeVoucher(dsp){


	var str="";
	//title = "Export Details of Applicants";
	
	//if(dsp == "ApplicatonFeeVoucher") {
	
	str  = "<div id='addAppicationFee'>";
	//str += "<table><tr><td>";
	//str += '<h2 align="center"></h2><hr>';
	str += '<form name="maintainApplicatonFeeVoucher">';
	
	
			str += "<div style='width:700px; margin:10px auto;'>";
			str += "<table ><tr><td>"
			str += '<center><img src ="img/nciNew.gif" style="width:150px; height:150px;"/></center>';
			str += '<center><h3>UNIVERSITY OF KELANIYA-SRI LANKA</h3></center>'
			str += '<center><h4>FACULTY OF GRADUATE STUDIES</h4></center>'
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
			str += "<div style='width:50%; float:left;'>Name of the fee levying course(with relevant subject)</div>";
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
			str += "<div style='width:50%; float:left;'>Application Number</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text'  style='width:100%;' name='applicationNo' value= '"+dataRep["applicationNo"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+" >";
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
			str += "<div style='width:53%; float:left;   '>Application fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='applicationFee' value= '"+dataRep["applicationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												


				
			str += "<div style='width:100%;  float:left; border-top:1px solid black; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:48%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:10%; float:left;   '>Total</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='fullTotalAmount' id='fullTotalAmount' value= '"+dataRep["fullTotalAmount"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";															
			
			//str += "</div>";											

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
			
			
			//str += '<input type="button" class="btn" id ="return" value = "Print Voucher" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			//str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
			//str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
			str += "</center>";
			
			str += "</form></td></tr></table>";
			str += "</div>";
	

	
	
	var reportWindow = window.open();
	reportWindow.document.write(str);
	reportWindow.print();
	reportWindow.document.close();
	
	
	//}
	//return str;
}