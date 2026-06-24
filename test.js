dataRep['invoiceNo']= dataRep["degreeTitle"] = dataRep["accountNum"] = dataRep["rupees"] ="";
dataRep["bankOfficer"] = dataRep["payerDetails"] = dataRep["annualBenchFee"]="";
dataRep["renewalFee"] = dataRep["total"] = "";

function formTest(dsp) {
str = "";
 var keyDisabled = fieldDisabled = "";
		if(dsp == "formTest"){
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
			str += '<center><h5>DIPLOMA COURSES</h5></center>'
			str +="<font style= 'font-size:12px;'>";	
			str += "<div style='width:100%; margin:10px; float:left; '>";

			str += "<div style='width:33%;   height:50px;float:left; '>People's Bank-Kelaniya</div>";		
			str += "<div style='width:33%; height:50px;float:left; '></div>";		
			str += "<div style='width:34%; height:50px;float:left; '><div style=' float:left;    width:45%; text-align:right;  '>No</div><input type='text'  style='width:50%;' name='invoiceNo' id='invoiceNo' onchange='dataRep[this.name]=this.value' value= '"+dataRep['invoiceNo'].trim()+"'  "+fieldDisabled+"/></div>";		

			
			str += "<div style='width:33%; height:100px;float:left; '>Bursar<br>University of Kelaniya<br>Kelaniya</div>";		
			str += "<div style='width:33%; height:100px;float:left; '>&nbsp;</div>";		
			str += "<div style='width:34%; height:100px;float:left; '><br>Date-.....................<div style='float:left;   width:100%;  '></div></div>";		
			
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
			str += "<div style='width:50%; float:left;'>Paid to the credit of the University of Kelaniya,Collection <b> A/C No.055-100130667553 by</b></div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text' style='width:100%;' name='accountNum' value= '"+dataRep["accountNum"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";



			 str += "<div style='clear:both;margin:10px;'>";

			str += "<div style='width:100%; float:left;'>";
			str += "<div style='width:50%; float:left;'>Full name in block letters/Student number(if any)</div>";
			str += "<div style='width:50%; float:left;'>";
			str += "<input type='text' style='width:100%;' name='studentName' value= '"+dataRep["studentName"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
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
			str += "<input type='text'  style='width:100%;' name='rupees' value= '"+dataRep["rupees"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			str += "</div>";
			str += "</div>";


			 str += "</div>";			 			 
			 
			 



			str += "<div style='width:100%; float:left; '>";

			str += "<div style='width:58%; float:left; border-right:1px solid black;  '>&nbsp;</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Rs</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-top:1px solid black; '>Cts</div>";

			str += "</div>";			
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>1</div>";
			str += "<div style='width:53%; float:left;   '>Application fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='applicationFee' value= '"+dataRep["applicationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";						
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>2</div>";
			str += "<div style='width:53%; float:left;   '>Registration fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='registrationFee' value= '"+dataRep["registrationFee"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+" ></div>";

			str += "</div>";									
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>3</div>";
			str += "<div style='width:53%; float:left;   '>Library fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='libraryFeeRefundable' value= '"+dataRep["libraryFeeRefundable"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;'"+keyDisabled+" ></div>";

			str += "</div>";												
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>4</div>";
			str += "<div style='width:25%; float:left;   '>Course fee</div>";
			str += "<div style='width:28%; float:left;   '>Total fees</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='courseFeeTotal' value= '"+dataRep["courseFeeTotal"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";															
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:25%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:28%; float:left;   '>1st instalment</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;'  name='firstinstalment' value= '"+dataRep["firstinstalment"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";																		
			

			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:25%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:28%; float:left;   '>2nd instalment</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='secondinstalment' value= '"+dataRep["secondinstalment"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";									

			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:25%; float:left;   '>&nbsp;</div>";
			str += "<div style='width:28%; float:left;   '>3rd instalment</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='thirdinstalment' value= '"+dataRep["thirdinstalment"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";																		


			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>5</div>";
			str += "<div style='width:53%; float:left;   '>Annual bench fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='annualBenchFee' value= '"+dataRep["annualBenchFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												

			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>6</div>";
			str += "<div style='width:53%; float:left;   '>Renewal of registration fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='renewalFee' value= '"+dataRep["renewalFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";												

			str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:5%; float:left;   '>7</div>";
			str += "<div style='width:53%; float:left;   '>Examination fee</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='examinationFee' value= '"+dataRep["examinationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
			str += "<div style='width:20%; float:left;  '><input type='text' style='width:100%;' "+keyDisabled+"></div>";

			str += "</div>";															
			
			
			str += "<div style='width:100%; float:left; border-top:1px solid black; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";

			str += "<div style='width:48%; float:left;   '>Should be paid at the first payment</div>";
			str += "<div style='width:10%; float:left;   '>Total</div>";
			str += "<div style='width:20%; float:left; border-right:1px solid black; border-left:1px solid black; '><input type='text' style='width:100%;' name='total' id='total' value= '"+dataRep["total"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+"></div>";
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

			str += "</form></td></tr></table>";
			str += "</div>";
			 
			} 
			 
			if(dsp == "formRegistrationLetter") { 
	keyDisabled = "Disabled";

		str  = "<div id='addRegistrationLetter'>";
		str += '<form name="maintainaddRegistrationLetter">';
str += "<div style='width:80%; margin:0 auto; float:center; '>";			
			
		str += "<table ><tr><td>"
		str += '<center><img src ="img/nciNew.gif" style="width:150px; height:150px;"/></center>';
		str += '<center><h3>UNIVERSITY OF KELANIYA</h3></center>'
		str += '<center><h4>Facalty of Graduate Studies</h4></center>'
		str += '<center><h5>Kelaniya,Sri Lanka</h5></center>'
	
		str +="<font style= 'font-size:12px;'>";	
		str += "<div style='clear:both; margin:10px;'><b>Admission to the";
		str += "<div class='viewArea'   id='degreeTitle' style='clear:none;'>"+dataRep['degreeTitle']+"</div>-2012/2013<hr></b></div>";
	
		str += "<div style='clear:both; margin:10px;'>Reference to the"; 
		str += "<div class='viewArea'   id='degreeTitle' style='clear:none;'>"+dataRep['degreeTitle']+"</div>application sent by you on the above subject.</div>";
		
		str += "<div style='clear:both; margin:10px;'>I am pleased to inform you that,subject to the approval of the University Senate,you have been selected to follow the above";
		str += "<div class='viewArea'   id='programmeTypeTitle' style='clear:none;'>"+dataRep['programmeTypeTitle']+"</div>programme conducted by the";
		str += "<div class='viewArea'   id='facultyTitle' style='clear:none;'>"+dataRep['facultyTitle']+"</div>,University of Kelaniya.</div>";
		
		str += "<div style='clear:both; margin:10px;'>The details regarding inaugural ceremony will be informed for paid applicants and the study programme will be commenced in <b>";
		str += "<div><input type='text'></div></b>The course fee structure is as follows.</div>";

		str += "<div style='width:100%; height:20px;  float:left;'>&nbsp;</div>";			

		
		str += "<center><div style='width:80%;  float:center;'    >";
		//str +="<font style= 'font-size:12px;'>";		
		
		str += "<div style='width:100%; float:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Cost Componet</div>";
		str += "<div style='width:25%; float:left; border-right:1px solid black; '>Rs</div>";
		str += "<div style='width:25%; float:left;  '>To be paid</div>";		
		str += "</div>";				
		
		str += "<div style='width:100%; float:left;  text-align:left;  border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Registration fee</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='registrationFee' value= '"+dataRep["registrationFee"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		
		
		
		
		str += "<div style='width:100%; float:left;  text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Library fee-Non refundable</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='libraryFeeNonRefundable' value= '"+dataRep["libraryFeeNonRefundable"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Library fee-Refundable</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='libraryFeeRefundable' value= '"+dataRep["libraryFeeRefundable"]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Computer lab fee</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Examination fee</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='examinationFee' value= '"+dataRep["examinationFee"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Foreign tour fee</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Course fee-(1st installment)</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'  name='firstinstalment' value= '"+dataRep["firstinstalment"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>2% NBT</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Sub total</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Course fee-(2nd installment)</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;' name='secondinstalment' value= '"+dataRep["secondinstalment"]+"'  onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>2% NBT</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Sub total</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";		

		str += "<div style='width:100%; float:left; text-align:left; border-bottom:1px solid black;  border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";		
		str += "<div style='width:45%; float:left; border-right:1px solid black; '>Grand total</div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";
		str += "<div style='width:25%; float:left; border-left:1px solid black; '><input type='text' style='width:100%;'></div>";		
		str += "</div>";				
		
		str +="</div></center>";		
		str += "<br><br></div>";	
		str += "<div style='width:100%; height:20px;  float:left;'>&nbsp;</div>";			
			
		str += "<div style='clear:both; margin:10px;'>Candidates are requested to pay ...................or part payment of ....................................for joining to the course on or before ....................... to the University of Kelaniya -Earned Income Account Number 055-100180669229 at <b>Kelaniya Branch </b>of the peoples bank.(please use attached paying -in-vouchers(PIV))Candidates who make part payment are required to pay the balance...................... before ., paying in vocher.[Educational certificates, Birth certificate ,certificate in proof of professional Qualification (if any), National identity card and a photograph(2cm x 2 1/2 cm in size)].Also please fill the form sent to you according to the rules  mentioned in it.</div>";

		str += "<div style='width:100%; height:50px;  float:left;'>&nbsp;</div>";					
		
		str += "<div  style='width:100%; height:20px; float:left;'>Yours sincerely,</div>";
		str += "<div style='width:100%; height:20px;  float:left;'>........................</div>";			
		str += "</font></div>";
		

		str += '<input type="button" class="btn" id="issue" value="Issue Voucher" onclick=formVoucherDiplomasendForm("addVoucherDiploma");>';
		str += '<input type="button" class="btn" id="print" value="Print Voucher" onclick="getVoucherPrint();">';
			
		str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
 	

		//str += "<input type='button' class='btn' value='Save'  onclick=formaddLectureRequestsendForm('addFormLecturerRequest');>"; 
		//str += '<input type="button" class="btn" value="Print Appoinment Letter" onclick="printAdmission();">';
		//str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
		//str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
		str += '</center>';
		str += '</form>';
		str += '</div>';
		str += '</td></tr></table>';
		str += "</div>";
		
		} 
			 
			 
			 
			// str += '<input type="button" class="btn" id="issue" value="Issue Voucher" onclick=formVoucherDiplomasendForm("addVoucherDiploma");>';
			// str += '<input type="button" class="btn" id="print" value="Print Voucher" onclick="getVoucherPrint();">';
			
			// str += '<input type="button" class="btn" id ="return" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				 
			// str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();>'; 
 	
			
			// str += "</form></td></tr></table>";
			// str += "</div>";
			
			

			

		
		
			return str;
	}