dataRep["studentNICNo"]=dataRep['degreeTitle']=dataRep['PinNo']="";


function formReprintApplicantion(dsp) {

		str = "";
		title = "Print Application";
		
		if(dsp == "formReprintApplicantion") {


			str += "<div>"
			str += "<table style='layout: auto'><tr><td>"
			str += '<h2 id="mainRequestTitle">'+title+'</h2><hr>';
			str += '<form name="formReprintApplicantion"><br><br>';

			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentNICNo' name='studentNICNo' style ='width:130px' value= '"+dataRep["studentNICNo"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Reference Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='PinNo' name='PinNo' style ='width:130px' value= '"+dataRep["PinNo"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
		str +="<div  id='list' style='margin:clear:both'>";  
		str +="</div>";
		str +="<div style='clear:both'>&nbsp;</div>";
	
		str += '<input type="button" class="btn" value="Print application"  onclick="getdata3();">'; //sendForm('+"'data4ApplicarionReprint'"+'); sendForm('+"'data4ApplicarionReprintWork'"+'); sendForm('+"'data4ApplicationReprinteducation'"+');
	
//str += '<input type="button" class="btn" value = "Back" onclick =showMenu('+"'formClerkMenu'"+');>';
					
		str += '<input type = "button" class ="btn" value="Exit" onclick=logOut();>';

		str +="</div>";

		str += '</form>';
		str += '</table>';
		str += '</div>';
		str += "</div>";
		
		}

		return str;
	}
	
function getdata3(){
	sendForm('data4ApplicarionReprint'); 
	sendForm('data4ApplicarionReprintWork'); 
	sendForm('data4ApplicationReprinteducation');
	ReprintApplication2();
}
	
function ReprintApplication2(){
if (document.getElementById("studentNICNo").value=="" || document.getElementById("PinNo").value=="" ){
	alert('Please enter relevent details');
}
else{
	
		var divText = "";
		divText += "<div id='wraper' style='width:1000px;margin:0px auto;'>";
		divText += '<div style="width:100%;height:30px;">';
	//	divText += '<div style="width:100%;height:100%;float:left;"><img src ="img/fgs.jpg" width="35px" height="35px" style ="float:left;margin:10px 10px;"/></div>';//<img src ="img/nciNew.png"  width="100px" height="40px"  style ="float:left;margin:5px 0px 10px 10px;"/>
	    divText += '<div style="width:100%;height:100%;float:left;"><img src="img/fgs.jpg" align="left" style="width:100px;height:105px;margin-left:50px;top:5px"/></div>';
		divText += '<div style="width:100%;height:100%;float:left;text-align:center"><h3>UNIVERSITY OF KELANIYA, FACULTY OF GRADUATE STUDIES</h3></div>';
		divText += '<div style="width:100%;height:50%;float:left;text-align:center;font-size:22px;margin-bottom:10px;"><h5>Application Form</h5></div>';
		for(var i=0; i<applicationNoLength;i++){
			if (applicationNo1Arr.indexOf(applicationNo1Arr[i]) == applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) || (applicationNo1Arr.indexOf(applicationNo1Arr[i]) != applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) && applicationNo1Arr.indexOf(applicationNo1Arr[i])==i)){
			if (document.getElementById("studentNICNo").value==studentNIC1Arr[i] && document.getElementById("PinNo").value==pin1Arr[i] ){
				dataRep['degreeTitle']= degreeTitle1Arr[i];
				var yr = achedamicYear1Arr[i];
				var appNo= applicationNo1Arr[i] 

			}
			}
		}
		if (yr==undefined || appNo==undefined)
		{

			alert("Please check details again")
		}
		else {divText += '<div style="width:100%;height:50%;float:left;text-align:center;font-size:22px;margin-bottom:10px;"><h5>'+dataRep['degreeTitle']+'-'+yr+'</h5></div>';
		
		divText += '<div style="width:25%;height:100%;float:right;font-size:18px;"><span style="float:right;text-align:center;font-family:tahoma;font-size:18px;margin-top:5%;"></span></div>';
	
		divText += '</div><br/>';
		divText += "<br><hr style='clear:both;'/>";

		divText += "<div style='clear:both;'>";
		
					divText += "<div style='clear:both;width:100%;font-size:18px;'>";
							divText += "<div style='float:right;width:30%'><div class='identifiers' style='float:left;font-size:18px;'>Application No</div>";
							divText += "<div style='float:left;font-size:18px;'>"+appNo+"</div>";
					divText += "</div>";
			var count=0;		
	for (var i=0; i<applicationNoLength;i++){
     if (appNo==applicationNo1Arr[i] && count==0){
	  count++;
			divText += '<div style="float:left;"><u><b>Personnel Information</b></u></div></br></br>';
			
			divText += "<div style='float:left;width:30%;margin-left:5px;margin-left:-5px;font-size:18px;font-family:tahoma;'>";
			
			divText+='<table width="660"  align="center" style="margin-top:10px;borde:none">';
	//<div class='colonDiv'>:</div> border: 1px solid black;
			if(medium1Arr[i]=="en"){
				
				divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Medium &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>English</div></div></td>";
			
			}
			else if(medium1Arr[i]=="si"){
				
				divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Medium &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>Sinhala</div></div></td>";
			
			}
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Gender &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentgenderArr[i]+"</div></div></td>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Name with Initials &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentInitial1Arr[i]+"</div></div></td>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Full Name &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentName1Arr[i]+"</div></div></td>";
		    divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Date Of Birth &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentDateofbirth1Arr[i]+"</div></div></td>";
		    divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Country/Region &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+countryRegion1Arr[i]+"</div></div></td>";
		    
			
			
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Student NIC Number &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentNIC1Arr[i]+"</div></div></td></tr>";//dataRep["studentNIC"]
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Nationality &nbsp;</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentNationality1Arr[i]+"</div></div></td></tr>";
		    
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Citizenship &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentCitizenship1Arr[i]+"</div></div></td></tr>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Address &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentPermanentAddress1Arr[i]+"</div></div></td></tr>";
	
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'><u>Telephone</u></div></td></tr>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Home &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentContactLan1Arr[i]+"</div></div></td></tr>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Mobile Number &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentContactMobile1Arr[i]+"</div></div></td></tr>";
			divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Email 01 &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentContactEmail1Arr[i]+"</div></div></td></tr>";
		    divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Email 02 &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentContactEmai21Arr[i]+"</div></div></td></tr>";
		    
			
            divText +="</table>";
			divText +="</div>";
				
			divText +="<div style='clear:both;height:2%;'>";
			divText +="</div>";
			
		divText += "<hr style='clear:both;visibility: hidden;'/>";
		
		divText += '<div style="float:left;"><u><b>Employment Details</b></u></div></br></br>';
		
		divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;'>";
		
		divText+='<table width="660"  align="center" style="margin-top:10px;border:none">';
		divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Designation &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentDesignation1Arr[i]+"</div></div></td>";
		divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Employment &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentEmployment1Arr[i]+"</div></div></td></tr>";
		divText += "<tr style='border: 1px solid black;'><td><div style='clear:both;margin-left:20px;'><div class='divLeft' style='font-weight:bold;font-size:18px;'>Office Address &nbsp;:</div></td><td><div class='divRight' style='width:auto;font-size:18px;'>"+studentOfficeAddress1Arr[i]+"</div></div></td></tr>";
	    divText +="</table>";
		divText +="</div>";
	 }
	}
	
		divText +="<div style='clear:both;height:2%;'>";
		divText +="</div>";
		divText += "<hr style='clear:both;'/>";
		divText += '<div style="float:left;"><u><b>Educational Qualifications</b></u></div></br></br>';
		divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;'>";	
		divText+='<table width="660"  align="center" style="margin-top:10px;border:none;table-layout:fixed;">';
		count= 0;
		for(var i=0; i<applicationNo2Length; i++){
			if(appNo==applicationNo2Arr[i]){
			if (educationPin2Arr.indexOf(educationPin2Arr[i]) == educationPin2Arr.lastIndexOf(educationPin2Arr[i]) || (educationPin2Arr.indexOf(educationPin2Arr[i]) != educationPin2Arr.lastIndexOf(educationPin2Arr[i]) && educationPin2Arr.indexOf(educationPin2Arr[i])==i)){
			if(educationFieldName2Arr[i] !=undefined & educationFieldName2Arr[i] !=" " & educationValue2Arr[i] !=undefined & educationValue2Arr[i] !=" "){		
            if (educationFieldName2Arr[j] =="Qualification Level" || educationFieldName2Arr[i] !="Qualification" && educationFieldName2Arr[i] !="Awarding Authority" && educationFieldName2Arr[i] !="Awarding Year" && educationFieldName2Arr[i] !="Country"){		
				if (educationFieldName2Arr[i]== "University/Institute name")	
				{
				   count++;
				}	
				if (count==1)
				{
				   //count++;
				   divText+='<tr style="border: 1px solid black;">';
				   if(educationFieldName2Arr[i] !=""){
					if(educationFieldName2Arr[i] =="Result Status")
					{
						count++;
					}
				   divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">'+educationFieldName2Arr[i]+'</td>';
				   }
				    for(var j=0; j<applicationNo2Length; j++){
			        if(appNo==applicationNo2Arr[j]){
			        if (educationPin2Arr.indexOf(educationPin2Arr[j]) == educationPin2Arr.lastIndexOf(educationPin2Arr[j]) || (educationPin2Arr.indexOf(educationPin2Arr[j]) != educationPin2Arr.lastIndexOf(educationPin2Arr[j]) && educationPin2Arr.indexOf(educationPin2Arr[j])==j)){
			        if(educationFieldName2Arr[j] !=undefined & educationFieldName2Arr[j] !=" " & educationValue2Arr[j] !=undefined & educationValue2Arr[j] !=" "){		
			        if (educationFieldName2Arr[j] =="Qualification Level" || educationFieldName2Arr[j] !="Qualification" || educationFieldName2Arr[j] !="Awarding Authority" || educationFieldName2Arr[j] !="Awarding Year" || educationFieldName2Arr[j] !="Country"){	
				        if(educationValue2Arr[j] !="" && educationFieldName2Arr[i] == educationFieldName2Arr[j]){
				           divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+educationValue2Arr[j]+'&nbsp;</td>';
				        }
			    
			        }
			        }
			        }
			        }
		            }
					 //divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+educationValue2Arr[i]+'&nbsp;</td>';
				        
				   divText+='</tr>';
			    }
			}
			}
			}
			}
		}
		divText+='</table>';
		divText+='</div>';
		divText +="</div>";
		
		divText += "<hr style='clear:both;'/>";
		divText += '<div style="float:left;"><u><b>Professional Qualifications</b></u></div></br></br>';
	    divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;height:15%;'>";	
		divText+='<table width="860"  align="center" style="margin-top:20px;border:none;table-layout:fixed;">';
		count=0;
		for(var i=0; i<applicationNo2Length; i++){
			if(appNo==applicationNo2Arr[i]){
			if (educationPin2Arr.indexOf(educationPin2Arr[i]) == educationPin2Arr.lastIndexOf(educationPin2Arr[i]) || (educationPin2Arr.indexOf(educationPin2Arr[i]) != educationPin2Arr.lastIndexOf(educationPin2Arr[i]) && educationPin2Arr.indexOf(educationPin2Arr[i])==i)){
			if(educationFieldName2Arr[i] !=undefined & educationFieldName2Arr[i] !=" " & educationValue2Arr[i] !=undefined & educationValue2Arr[i] !=" "){		
			// if(educationFieldName2Arr[i]== "Qualification Level"){
				// divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">'+educationFieldName2Arr[i]+'</td>';
				
				// }//
			if (educationFieldName2Arr[i] =="Qualification" || educationFieldName2Arr[i] =="Awarding Authority" || educationFieldName2Arr[i] =="Awarding Year" || educationFieldName2Arr[i] =="Country" || educationFieldName2Arr[i] =="Qualification Level"){	//|| educationFieldName2Arr[j] =="Qualification Level"		
				if (educationFieldName2Arr[i]== "Qualification")	
				{
				   count++;
				}
				//if(educationFieldName2Arr[i]== "Qualification Level"){
					
				//}//
				if (count== 1){
					//count++;
				divText+='<tr style="border: 1px solid black;">';
				if(educationFieldName2Arr[i] !=""){
					if(educationFieldName2Arr[i] =="Country")
					{
						count++;
					}
				divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">'+educationFieldName2Arr[i]+'</td>';
				}
				for(var j=0; j<applicationNo2Length; j++){
			    if(appNo==applicationNo2Arr[j]){
			    if (educationPin2Arr.indexOf(educationPin2Arr[j]) == educationPin2Arr.lastIndexOf(educationPin2Arr[j]) || (educationPin2Arr.indexOf(educationPin2Arr[j]) != educationPin2Arr.lastIndexOf(educationPin2Arr[j]) && educationPin2Arr.indexOf(educationPin2Arr[j])==j)){
			    if(educationFieldName2Arr[j] !=undefined & educationFieldName2Arr[j] !=" " & educationValue2Arr[j] !=undefined & educationValue2Arr[j] !=" "){		
			    //alert(educationFieldName2Arr[i] +' '+ educationFieldName2Arr[j]);
				// if(educationFieldName2Arr[j]== "Qualification Level"){
				 // divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+educationValue2Arr[j]+' &nbsp;</td>';
				// // educationFieldName2Arr[i] =  "Qualification Level";
				// }
				 if (educationFieldName2Arr[j] =="Qualification" || educationFieldName2Arr[j] =="Awarding Authority" || educationFieldName2Arr[j] =="Awarding Year" || educationFieldName2Arr[j] =="Country"  || educationFieldName2Arr[j] =="Qualification Level"){			//|| educationFieldName2Arr[j]== "Qualification Level"
				   if(educationValue2Arr[j] !="" && educationFieldName2Arr[i] == educationFieldName2Arr[j]){
				     divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+educationValue2Arr[j]+' &nbsp;</td>';
				    }
				}	
			    }
			    }
			    }
			    }
				divText+='</tr>';
				}	
			}
			}
			}
			}
		}
		divText+='</table>';
		//divText+='<br><br><br><br><br><br>';
		divText+='<br>';
		divText+='</div>';
		divText+='</div>';
		//divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;height:25%;'></div>";
		
		//divText+='<P>&nbsp;</P>';
      //  divText+='<P>&nbsp;</P>';
		divText += "<hr style='clear:both;'/>";
	//	divText+='<P>&nbsp;</P>';
		//divText+='<P></P>';
		divText += '<br><br><div style="float:left;"><u><b>Working Experience</b></u></div></br></br>';
		divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;height:20%;'>";
		divText+='<table width="660"  align="center" style="margin-top:30px;border:none;table-layout:fixed;">';
		count=0;
		for(var i=0; i<applicationNo3Length; i++){
			if(appNo==applicationNo3Arr[i]){
			if (workPin3Arr.indexOf(workPin3Arr[i]) == workPin3Arr.lastIndexOf(workPin3Arr[i]) || (workPin3Arr.indexOf(workPin3Arr[i]) != workPin3Arr.lastIndexOf(workPin3Arr[i]) && workPin3Arr.indexOf(workPin3Arr[i])==i)){
			if(workFieldName3Arr[i] !=undefined &  workFieldName3Arr[i] !=" " & workValue3Arr[i] !=undefined  & workValue3Arr[i] !=" "){		
			if (workFieldName3Arr[i] =="Company/Institute/Organization" || workFieldName3Arr[i] =="Applicant Designation" || workFieldName3Arr[i] =="From" || workFieldName3Arr[i] =="To" || workFieldName3Arr[i] =="Applicant Country"){		
				if (workFieldName3Arr[i]=="Company/Institute/Organization")
				{
					count++;
				}
				if (count== 1)
				{
					//count++;
				  divText+='<tr style="border: 1px solid black;">';
				  if(workFieldName3Arr[i] !=""){
					  if(workFieldName3Arr[i] =="Applicant Country")
					{
						count++;
					}
					if (workFieldName3Arr[i]=="Applicant Designation" || workFieldName3Arr[i]=="Designation")
					{
						divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">Designation</td>';
				
					}
					else if (workFieldName3Arr[i]=="Applicant Country"  || workFieldName3Arr[i]=="Country")
					{
						divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">Country</td>';
				
					}
					else 
					{
					divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">'+workFieldName3Arr[i]+'</td>';
					}
				 }
				 for(var j=0; j<applicationNo3Length; j++){
			     if(appNo==applicationNo3Arr[j]){
			     if (workPin3Arr.indexOf(workPin3Arr[j]) == workPin3Arr.lastIndexOf(workPin3Arr[j]) || (workPin3Arr.indexOf(workPin3Arr[j]) != workPin3Arr.lastIndexOf(workPin3Arr[j]) && workPin3Arr.indexOf(workPin3Arr[j])==j)){
			     if(workFieldName3Arr[j] !=undefined &  workFieldName3Arr[j] !=" " & workValue3Arr[j] !=undefined  & workValue3Arr[j] !=" "){		
			     if (workFieldName3Arr[j] =="Company/Institute/Organization" || workFieldName3Arr[j] =="Applicant Designation" || workFieldName3Arr[j] =="From" || workFieldName3Arr[j] =="To" || workFieldName3Arr[j] =="Applicant Country"){		
				   if(workValue3Arr[j] !="" && workFieldName3Arr[i]==workFieldName3Arr[j]){
				     divText+='<td  style="border:none;width:100px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+workValue3Arr[j]+' &nbsp;</td>';
				    }
				
			    }
			    }
			    }
			    }
		        }
				  divText+='</tr>';
				}
			}
			}
			}
			}
		}
		divText+='</table>';
		divText+='</div>';
		divText +="</div>";	
		
		
		divText += "<hr style='clear:both;'/>";
		divText += '<div style="float:left;"><u><b>Non-Related Referees</b></u></div></br></br>';
		divText += "<div style='float:left;width:30%;margin-left:5px;margin-top:-5px;font-size:18px;font-family:tahoma;'>";
		divText+='<table width="660"  align="center" style="margin-top:40px;border:none;table-layout:fixed;">';
		count=0;
		for(var i=0; i<applicationNo3Length; i++){
			if(appNo==applicationNo3Arr[i]){
			if (workPin3Arr.indexOf(workPin3Arr[i]) == workPin3Arr.lastIndexOf(workPin3Arr[i]) || (workPin3Arr.indexOf(workPin3Arr[i]) != workPin3Arr.lastIndexOf(workPin3Arr[i]) && workPin3Arr.indexOf(workPin3Arr[i])==i)){
			if(workFieldName3Arr[i] !=undefined &  workFieldName3Arr[i] !=" " & workValue3Arr[i] !=undefined  & workValue3Arr[i] !=" "){		
			if (workFieldName3Arr[i] !="Company/Institute/Organization" && workFieldName3Arr[i] !="Designation" && workFieldName3Arr[i] !="From" && workFieldName3Arr[i] !="To" && workFieldName3Arr[i] !="Country"){	
				if (workFieldName3Arr[i]=="Name with Initials")
				{
					count++;
				}
				//alert(count);
				if (count==1){
				//count++;
				divText+='<tr style="border: thin solid black;" >';
				if(workFieldName3Arr[i] !=""){
					if(workFieldName3Arr[i] =="Home")
					{
						count++;
					}
					if (workFieldName3Arr[i]=="Ref.Designation"|| workFieldName3Arr[i]=="Designation Of Refree")
					{
						divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">Designation</td>';
				
					}
					else if (workFieldName3Arr[i]=="Ref.Country" || workFieldName3Arr[i]=="Country of referee" )
					{
						divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">Country</td>';
				
					}
					else 
					{
						divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;font-weight:bold;">'+workFieldName3Arr[i]+'</td>';
					}
				}
				
				for(var j=0; j<applicationNo3Length; j++){
					
			    if(appNo==applicationNo3Arr[j]){
					
			    if (workPin3Arr.indexOf(workPin3Arr[j]) == workPin3Arr.lastIndexOf(workPin3Arr[j]) || (workPin3Arr.indexOf(workPin3Arr[j]) != workPin3Arr.lastIndexOf(workPin3Arr[j]) && workPin3Arr.indexOf(workPin3Arr[j])==j)){
			    if(workFieldName3Arr[j] !=undefined &  workFieldName3Arr[j] !=" " & workValue3Arr[j] !=undefined  & workValue3Arr[j] !=" "){		
			    if (workFieldName3Arr[j] !="Company/Institute/Organization" && workFieldName3Arr[j] !="Applicant Designation" && workFieldName3Arr[j] !="From" && workFieldName3Arr[j] !="To" && workFieldName3Arr[j] !="Applicant Country"){	
				if(workValue3Arr[j] !="" && workFieldName3Arr[i]== workFieldName3Arr[j]){
				divText+='<td  style="border:none;width:150px;heigth:30%;font-size:18px;font-family:tahoma;word-wrap:break-word;">'+workValue3Arr[j]+'&nbsp;</td>';
				}
				
				
			    }
			    }
			    }
			    }
		        }
				divText+='</tr>';
				}
			}
			}
			}
			}
		}
		divText+='</table>';
		divText+='</div>';
		divText +="</div>";
		
		divText += "<br><br>";
			divText += "<center>";
			divText +="<div style='float:left;clear:both;margin:25px;'>";
			divText += "<div class='paragraphDiv'>I do hereby certify that the above particulars furnished by me are true and correct.</div></br>";
			divText += "</div>";
			divText += "</center>";
			
			divText +="<div style='float:left;clear:both;margin:25px;'>";
			divText+='<table width="560"  align="center" style="margin-top:40px;border:none;table-layout:fixed;">';
			divText +="<tr>";
		    divText +="<td align='left'><div style='float:left;'><p>--------------------------</p><p>Date</p></div></td>";
		    divText +="<td align='right'><div style='float:left;'><p>--------------------------</p><p>Signature of the Applicant</p></div></td>";
			divText +="</tr>";
			divText +="</table>";
		    divText +="</div>";
		// divText += "<hr style='clear:both;visibility: hidden;'/>";		
		// divText += "<hr style='clear:both;'/>";		
		// divText += '<div style="float:left;"><u><b>For Official use only</b></u></div></br></br>';
		// divText += "<div style='float:left;width:30%;margin-left:10px;font-size:18px;font-family:tahoma;'>";
		// divText += "<div style='clear:both;text-align:left;'><p><span style='float:left;'>Recommendation of the HOD/Coordinator</span><p/></div></br>";
		// divText += "<div style='clear:both;text-align:left;'><p><span style='float:left;'>Recommended/ Not Recommended</span><p/></div></br>";
		// divText += "<br><div style='clear:both;text-align:left;'><p><span style='float:left;'>Date--------------------------</span><p/></div></br>";
		// divText +="<div style='float:left;margin-left:450px;'><p>--------------------------</p><p>Signature</p><p>Head/Course Coordinator</p><br><br><p>Name-----------------------------------------</p></div>";
		// divText += "<div style='clear:both;text-align:left;'><p><span style='float:left;'>(Please endorse the Official Stamp)</span></div></br>";
		// divText +="</div>";	
		
		
		divText +="<div style='clear:both;height:2%;'>";
		divText +="</div>";
		
		
		
		
		divText += '<input type="button" id="prbtn"  style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;margin:5px 40%;" onclick=toPrint(); value="Print"/>';
		divText += "</div>";
		var myWindow = window.open('','');
		var doc = myWindow.document;
		doc.open();
		doc.write('<html><head><title>Print</title>');
		doc.write('<script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none"; window.print();}</script>');
		doc.write('<style>.identifiers{width:100px;float:left;font-size: 12px;text-align: left;margin:0px 15px 0px 10px;line-height: 20px;font-weight:bold;}.viewArea{float:left;width:auto;line-height: 20px;font-family: Verdana;font-size: 12px;text-align: left;}#wraper{width:1000px;margin:0px auto;}.divLeft{float:left;font-family:tahoma;font-size:14px;width:auto;line-height:20px}.colonDiv{line-height:20px;float:left;font-size: 14px;font-weight:bold;margin:0px 5px;width: auto;}.divRight{line-height:20px;float:left;font-family:tahoma;font-size:14px;width:auto;clear:right;}body{font-family:tahoma;}#genderDiv{clear:left;}#btnsub,#getbtn,#btnbk,#btnsrch{display:none}.forview{float:left;width:150px;font-family:tahoma;font-size:12px;}#invest1{margin:25px 0px;font-size:12px;}img{margin:10px; width:50px;height:50px;}p,h2{text-align:center;}input,textarea{border:none;font-family:tahoma;font-size:12px}textarea{min-width:150px;width:450px}</style></head>');
		//doc.write('<link rel="StyleSheet" href="style/barcode.css" type="text/css" />');
		//doc.write('<script src="barcode.js"></script>');
		doc.write('<body>');
		doc.write(divText);
		doc.write('</body>');
		doc.close();
}	
}
}	

	
	
	


	
	
	