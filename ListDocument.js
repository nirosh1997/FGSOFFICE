//Coded By S.Suraweera


var ItemValueArr = new Array();
var AppNoArr = new Array();
var sqnum=0;
var docID="";
dataRep["sessionID"]=dataRep["docName"]=dataRep["programYear"]=dataRep['roleName']=dataRep["achedamicYear"]=dataRep['userName']=dataRep['userName1']=dataRep['userid']="";
var inum=0;
var rwcnt=1;
var count=0;
var checkcount=0;
var countviewSelectedList=0;
//---------------------------------------MAIN FUNCTION START--------------------------------------------------------------
function formListDocument(dsp) {

		
		str = ""; 
		title = "List Document"; 
  
	if(dsp == "formListDocument") {    

		
			str  = "<div id='formListDocument'>";
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					dataRep['roleName']=roleNameArr[i];
					dataRep['userName']=userNameArr[i];
					dataRep['departmentCode']=departmentCodeArr[i];
				}
		    
		   }					
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
				//str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
				//str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
				//str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
			    str += "<input type='text'  name='searchSelectedApplicantName'  id='searchSelectedApplicantName' value= '' placeholder='Eg:PERERA' style='margin-left:900px;width:150px;' onchange='dataRep[this.name]=this.value;' >";		
				str += "<input type='text'  name='searchSelectedApplicant'  id='searchSelectedApplicant' value= '' placeholder='111111111V' style='width:100px;' onchange='dataRep[this.name]=this.value;' >";		
				str += '<input type="button"  class="btnB" id="search"  value="search" style="background-Color:#ff6633;" onclick=buttondisable2();searchSelectedList();>';	//buttondisable();			
				str +="</div></div><br/>";
				
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainListDocument"><br>';
					str +="<div>";
		
					documentName="<option>Please scroll down to see the records</option>";
					
							for(i = 0; i<documentIDLength; i++) {

							
							if(documentNameArr[i] != null){	
							
							   if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i)){
							
							documentName += "<option>"+documentNameArr[i]+"</option>";

									}
								 }
						}
				//str += "<div>";	
			    //str += "<input type='text'  name='searchApplicantName'  id='searchApplicantName' value= '' placeholder='Eg:PERERA' style='margin-left:900px;width:150px;' onchange='dataRep[this.name]=this.value;' >";		
				//str += "<input type='text'  name='searchApplicant'  id='searchApplicant' value= '' placeholder='111111111V' style='width:100px;' onchange='dataRep[this.name]=this.value;' >";		
				//str += '<input type="button"  class="btnB" id="search"  value="search" style="background-Color:#ff6633;" onclick=buttondisable();serachApplicant();>';
				//str += "</div><br>";	
				str +="<div class='colon' style='width:50px;'>Document</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDocName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();addNewRowDoc();'>";
				str += documentName;
				str += "</select>";
				
				programName="<option>Please scroll down to see the records</option>";
				if(dataRep['roleName'] !='Coordinator' && dataRep['roleName']!='Technical Coordinator'){
							for(i = 0; i<applicationNoLength; i++) {

							
							if(degreeTitleArr[i] != null){	
							
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
				                }
				}
				else{
							for(i = 0; i<applicationNoLength; i++) {
                           // alert(dataRep['departmentCode']);
							if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							if(degreeTitleArr[i] != null && dataRep['departmentCode']==degreeCodeArr[i]){	
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
				                }					
				}
				str +="<div class='colon'>";			
				str +="<div class='identifiers' style='width:50px;'>Programm</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();ViewList();'>";
				str += programName;
				str += "</select>";
				str +="</div>"; 
				
				str +="<div class='colon'>";
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=buttondisable2();ViewList();>';
				if (dataRep['roleName']=='Subject Clerk'){
				str += '<input type="button" id="select-all" style="display:none;margin-top:1px;float:left" class="btnB" value="Select All" onclick=Select1();>';
				str += '<input type="button" id="select-non" style="display:none;margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=Unselect1();>';
                }
				str +="</div>";
				str +="<div>_____________________________________________________________________________________________________________________________________________</div>";
               	str +="<div style='clear:both'>&nbsp;</div>"			
			//str += '<input type="button" style="margin-top:18px" class="btn" value="Print List" onclick=getListPrint1();>';		
			//str += '<input type="button" style="margin-top:18px" class="btn" value="Print Payment Letters English" onclick=printLetters();>';		
			//str += '<input type="button" style="margin-top:18px" class="btn" value="Print Payment Letters Sinhala" onclick=printLettersSinhala();>';
			//str += '<input type="button" style="margin-top:18px" class="btn" value="Print Envelops Sinhala" onclick=printEnvilop();>';
			//str += '<input type="button" style="margin-top:18px" class="btn" value="Print Envelops English" onclick=printEnvilopEnglish();>';
		if (dataRep['roleName']=='Subject Clerk' )
		{	
		str += '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" disabled="disabled" id="DSinhala" value="sinhala-Download" class="btnB"  onclick=getlistSinhala11();>';
		str += '<input type="button"  style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" disabled="disabled" value="English-Download"class="btnB" id="ESinhala" onclick=getlistEnglish();>';
		//str += '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" class="btnB" value="Download Names" onclick=getListPrint1();>';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  value="Save" id="save" disabled="disabled" onclick=formAddListDocumentsendForm('+"'addListDocumentData'"+');formAddApplicationListDocumentsendForm('+"'addListNumDocumentData'"+');>';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';   
		str += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';   
		}
        if(dataRep['roleName']=='Dean')
		{	
		str += '<input type="button"  class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;" disabled="disabled" id="LDownload" value="Download" onclick=getlistAll();>';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="DReset" disabled="disabled" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';   
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      
		}
		//alert(dataRep['roleName']);
		 if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
		str += '<input type="button" class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;" id="LDownload" value="Download" onclick=getlistAll();>';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="DReset" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formCoordinatorMenu'"+');>';   
		str += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      			   
	    }
        str +="<div  id='list' style='margin:clear:both'></div>";
        str +="<div  id='selectedlistbtn' style='margin:clear:both'></div>"; 		
		str += '</td></table></div>';
		str += '</form>';
		}		
 return str;
				
	}	
//---------------------------------------MAIN FUNCTION END--------------------------------------------------------------

//---------------------------------------VIEW LIST FUNCTION START--------------------------------------------------------------	
function ViewList(){

if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please Select a value from the select Box(s)");		
	
	}
else{
	        var countSelectedRows=0;
			for( i=0; i<applicationNoLength; i++){
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
             countSelectedRows++;
			}
			}
			}
			if(countSelectedRows==0){
				alert('There is no matching data');
			}
			else{
			if(document.getElementById('selectedDocName').value=="Application List" ){
				    //var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
                    //newStr +="<div id='topics1' class='info'></div>";
                    countviewSelectedList++;
					var newStr ="<table id='my1Table' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
					newStr +="<tr style='background-Color:#ff9f80'>";
					if(dataRep['roleName']=='Subject Clerk'){
					newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>List Selection</font></div></th>";
					}
					newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>Row Count</font></div></th>";
					newStr +="<th style='width:200px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Applicant Name</font></div></th>";
					newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='width:150px;' style='text-align:left'><font color='black'>Application No</font></div></th>";
					newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>NIC Number</font></div></th>";
					newStr +="<th style='width:200px;' align='center'><div class='investLabel_l style='width:200px;'' style='text-align:left'><font color='black'>Address</font></div></th>";
					if(dataRep['roleName']=='Subject Clerk'){
					newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Qualification</font></div></th>";
                    }
					newStr +="</tr>";
			for( i=0; i<applicationNoLength; i++){
		    
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	

			
			if(rwcnt%2==0){
			
            newStr +="<tr style='background-Color:#ffece6;>";}
			else{
			newStr +="<tr style='background-Color:#ffd9cc;>";}
			newStr +="<div class='info' id='stdlist"+i+"'  style='width:auto;clear:both;' name='testInfo"+i+"'>";
			if(dataRep['roleName']=='Subject Clerk'){
			var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';
					}
				}
			
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div  class='investView' style='text-align:center' name='registered"+i+"' id='registered"+i+"'>";
			newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"' onChange='' name='checkRegistered"+i+"' ' />";
			newStr += "</div></td>";//AddRowColorLdocument(stdlist"+i+", this)	
			}
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
			newStr += rwcnt+"</div></td>";//
											
			//newStr += "<td style='width:200px;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			// if(rwcnt%2==0){
			// newStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="SelectedNamebtn'+i+'" onclick="">'+studentInitialArr[i]+'</button></div></td>';//;
			// }
			// else{
			// newStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="SelectedNamebtn'+i+'" onclick="loadProfile1(this);">'+studentInitialArr[i]+'</button></div></td>';//
			// }
			
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName"+inum+"' id='studentName"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentInitialArr[i]+"</div></td>";
		   
			
			
            //newStr +="<input type='text' name='selectedapplicationNo' style='display:none;' id='selectedapplicationNo"+i+"' value= '"+applicationNoArr[i]+"' >";	

			//newStr += studentInitialArr[i]+"</div></td>";
							
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
			newStr += applicationNoArr[i]+"</div></td>";
			
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
		    newStr +="<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC"+i+"' value= '"+studentNICArr[i]+"' >";			
			 
			newStr += "<td style='width:200px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
			if(dataRep['roleName']=='Subject Clerk'){
			if(fieldValueArr[i]!= null){
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div></td>";
			}
			else{
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'></div></td>";				
			}
			}
			
			vID = 'applicationNo1'+inum;
			AppNoArr[inum] = applicationNoArr[i];	
	         newStr +="</tr>";
			newStr +="</div>";  
			inum++;	
			rwcnt++;
            			

				}
			}
		} 
		newStr +="</table></br>";
	}
	
	if(document.getElementById('selectedDocName').value=="Registered List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel_l'>Applicant Name</div>";								
					newStr +="<div class='investLabel_l'>Student No</div>";
					newStr +="<div class='investLabel_l'>NIC Number</div>";
					newStr +="<div class='investLabel_l'>Address</div>";
					newStr +="<div class='investLabel' style='width:1px'>Qualification</div>";
	
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
		
			
			newStr +="<div class='info'  style='width:auto;clear:both;' name='testInfo"+i+"'>";
												
						
			newStr += "<div class='investView_l' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div>";
							
			newStr += "<div  class='investView_l' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
			newStr += studentNoArr[i]+"</div>";
			
			newStr += "<div class='investView_l' name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div>";
		    newStr +="<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC"+i+"' value= '"+applicationNoArr[i]+"' >";			
 
			newStr += "<div class='investView_l' name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div>";
			
			if(fieldValueArr[i] != null){
			newStr += "<div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div>";
			}
			
			vID = 'applicationNo1'+inum;
			AppNoArr[inum] = studentNoArr[i];	
			newStr += "<br/>";
			newStr +="</div>"; 
			inum++				
				
				}
			}
		}
		newStr +="</div>"; 
	}

	for(i = 0; i<documentIDLength; i++) {
		
		if(documentIDArr[dataRep["selectedDocName"]-1]==documentIDArr[i]){
		docID=documentIDArr[i];
		}
		
	}
		
	for(var q=0; q<=dataItemIDLength; q++){
			
			if(docID==documentItemIDArr[q]){	
			if(dataItemNameArr[q] !=null){
			if(dataItemNameArr[q]=="Programm Title"){
			dataRep["programTitle"]=document.getElementById('selectedDegreeName').value;
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '"+dataRep["programTitle"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			
			}
			 if(dataItemNameArr[q]=="Achedamic Year"){		
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '"+dataRep["programYear"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			
			}
			
			}
		}
	}
     if (rwcnt >= 10)  { 
		if (dataRep['roleName']=='Subject Clerk')
		{	
		var newStr1 = '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" value="sinhala-Download" class="btnB"  onclick=getlistSinhala11();>';
		newStr1 += '<input type="button"  style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" value="English-Download"class="btnB"  onclick=getlistEnglish();>';
		newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  value="Save" onclick=formAddListDocumentsendForm('+"'addListDocumentData'"+');formAddApplicationListDocumentsendForm('+"'addListNumDocumentData'"+');>';
		//newStr1 += '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" class="btnB" value="Download Names" onclick=getListPrint1();>';
		newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';   
		newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';   
	    }
        if(dataRep['roleName']=='Dean')
		{	
		var newStr1 = '<input type="button"  class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;" value="Download" onclick=getlistAll();>';
		newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';   
		newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      
		}
				   if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
		   var newStr1 = '<input type="button" class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;"  value="Download" onclick=getlistAll();>';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset"  onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formCoordinatorMenu'"+');>';   
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      			   
		   }
		    document.getElementById('selectedlistbtn').innerHTML += newStr1; 
	 }
	document.getElementById('list').innerHTML += newStr;		 
	document.getElementById("View-List").disabled= true; 
	document.getElementById('select-all').style="display";
	document.getElementById('select-non').style="display";
    }
	}
}
//---------------------------------------VIEW LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------ADD ROW COLOUR FUNCTION START--------------------------------------------------------------	

function AddRowColorLdocument(n, _this) {
		if (checkcount==1)
		{
			checkcount=0;
				
		n.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		}
		else
		{
		checkcount++;	
		n.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		}
		
}
//---------------------------------------ADD ROW COLOUR FUNCTION END--------------------------------------------------------------	

//---------------------------------------SELECT ALL FUNCTION START--------------------------------------------------------------	

function Select1() 
	{
		for( i=0; i<applicationNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById('checkRegistered'+i))
				{
				document.getElementById('checkRegistered'+i).checked = true;
				document.getElementById("select-all").disabled= true;
				document.getElementById("select-non").disabled= false;		
			var namid="stdlist";
				namid+=i;
			if (checkcount==1)
		{
			checkcount=0;
		//document.getElementById(namid).style.backgroundColor =  '#d0d0fb' ;
		
		}
		else
		{
			checkcount++;
		//document.getElementById(namid).style.backgroundColor = '#e7e7fd';
		
		}

				}
		}
	}
//---------------------------------------SELECT ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------UNSELECT ALL FUNCTION START--------------------------------------------------------------	

function Unselect1() 
	{
		for( i=0; i<applicationNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("select-all").disabled= false;
				document.getElementById("select-non").disabled= true;					
			var idnam="stdlist";
				idnam+=i;
			if (checkcount==1)
		{
			checkcount=0;
		//document.getElementById(idnam).style.backgroundColor =  '#FDFDFD' ;
		
		}
		else
		{
			checkcount++;
		//document.getElementById(idnam).style.backgroundColor = '#FDFDFD';
		
		}

				}
		}
		
	}
//---------------------------------------UNSELECT ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------ADD LIST FUNCTION START--------------------------------------------------------------	

function formAddListDocumentsendForm(frm){

if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before save!");			
	}
else{
	var doc, dataStr,itemID1,itemID2,tempid1,tempid2,docid,dataid,x,y;
	
			
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
			
		if(frm == 'addListDocumentData'){
 
			doc = document.maintainListDocument;
		
			dataStr += "&interface="+frm;
				
				
		
			for(var y=0; y<=sessionIDLength; y++){
			if(sessionuserNameArr[y]==dataRep["userName"]){
			dataRep["sessionID"]= sessionIDArr[y];
				
			  }
			}
			var row=inum+3;
			for(var i=0; i<2; i++){	
			itemID1=document.getElementById('programTitle').value;
			x=itemID1.split("-",2);
			
			itemID2=document.getElementById('achedamicYear1').value;
			y=itemID2.split("-",2);

			for (var n=0;n<documentIDLength; n++)
			{
				if (docmentIDArr[n]== docID )
				{
					if(sequenceNoArr[n]==null){
					sqnum;
					}
					else{
					
					sqnum=sequenceNoArr[n];
					sqnum++;
					}
				}
			}
			
			if(i == 0){

			dataStr += "&docmentID="+docID	
			dataStr += "&dataItemID="+(x[x.length-1]);
			dataStr += "&sessionID="+dataRep["sessionID"];
			dataStr += "&sequenceNo="+sqnum;
			dataStr += "&itemValue="+document.getElementById('selectedDegreeName').value;
				}
			else{

			dataStr += "&docmentID="+docID	
			dataStr += "&dataItemID="+(y[y.length-1]);
			dataStr += "&sessionID="+dataRep["sessionID"];
			dataStr += "&sequenceNo="+sqnum;
			dataStr += "&itemValue="+document.getElementById('achedamicYear').value;
				}
		documentDataArr[i]=dataStr;		
}	
		for(var j=0; j<2; j++){			
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentDataArr[j]);
		
	    }
		
	}

		return 0;
	}
}
//---------------------------------------ADD LIST FUNCTION END--------------------------------------------------------------	
		
//---------------------------------------ADD LIST DOCUMENT FUNCTION START--------------------------------------------------------------	

function formAddApplicationListDocumentsendForm(frm){

	var doc, dataStr,itemID1,itemID2,dataStr3,tempid1,tempid2,docid,dataid,x,y;

			
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
			
		if(frm == 'addListNumDocumentData'){
 
			doc = document.maintainListDocument;
		
			dataStr += "&interface="+frm;
				
			
		
			for(var y=0; y<=sessionIDLength; y++){
			
			if(sessionuserNameArr[y]==dataRep["userName"]){
			dataRep["sessionID"]= sessionIDArr[y];
				
			  }
			}
			
			for(var i=0; i<inum; i++){	

			tempid1 = dataRep["docName"];
			
			docid = tempid1.split("-",2);	
									
			sqnum++;
			
			for(var q=0; q<=dataItemIDLength; q++){
			if(docID==documentItemIDArr[q]){
			
			if(dataItemNameArr[q] !=null){
						
			dataStr += "&docmentID="+docID	
			dataStr += "&dataItemID="+dataItemIDArr[q];
			dataStr += "&sessionID="+dataRep["sessionID"];
			dataStr += "&sequenceNo="+sqnum;
			if(dataItemNameArr[q]=="Application No"){
			if(AppNoArr[i] !="undefined"){
			dataStr += "&itemValue="+AppNoArr[i];
			}
			}
		documentDataArr[i]=dataStr;
		
			 }
		 }
	 }
			
		
}	
		for(var j=0; j<inum; j++){		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentDataArr[j]);
		
	  }
		
	}

		return 0;
	
}
//---------------------------------------ADD LIST DOCUMENT FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT LIST FUNCTION START--------------------------------------------------------------	
		
function getListPrint1(){
	var gtDiv = "";
if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{
	if(document.getElementById('selectedDocName').value=="Application List" ){
			gtDiv+='<div style="width:100%;height:70px;">';
			gtDiv+="<div style='float:left;width:10%;'>";
			gtDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
			gtDiv+="</div>";
			gtDiv+="<div style='float:left;width:90%;'>";
			gtDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">FACULTY OF GRADUATE STUDIES - UNIVERSITY OF KELANIYA</h3></div>';
			gtDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-20px; ">'+document.getElementById('selectedDocName').value+'-'+document.getElementById('achedamicYear').value+'</h3></div>';
			gtDiv+="</div>";
			gtDiv +="<div id='topics1' class='info'></div>";
			gtDiv +="<div class='investLabel_l' style='width:200px'><h2 style='margin-top:-20px;float:left;text-align:center;'>Application No</h2></div>";
			gtDiv +="<div class='investLabel_l' style='width:240px'><h2 style='margin-top:-20px;'>Applicant Name</h2></div>";
			gtDiv +="<div class='investLabel' style='width:240px'><h2 style='margin-top:-20px;'>Qualification</h2></div>";
			
			for( i=0; i<applicationNoLength; i++){
		
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			if(document.getElementById('checkRegistered'+i)){
			if(document.getElementById('checkRegistered'+i).checked == true){
			gtDiv +="<br><div>"; 
			gtDiv += "<br><div  class='investView_l' style='float:left;width:100px' name='applicationNo"+inum+"' id='applicationNo"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			gtDiv += applicationNoArr[i]+"</div>";
			
			gtDiv += "<div class='investView_l' style='float:left;width:400px' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			gtDiv += studentInitialArr[i]+"</div>";		
			gtDiv += "<div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			gtDiv += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div>";
			gtDiv += "</div><dev><br>"; 
			}
			}
			}
		}
	}
}			

	if(document.getElementById('selectedDocName').value=="Registered List" ){

			gtDiv+='<div style="width:100%;height:70px;">';
			gtDiv+="<div style='float:left;width:10%;'>";
			gtDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
			gtDiv+="</div>";
			gtDiv+="<div style='float:left;width:90%;'>";
			gtDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">FACULTY OF GRADUATE STUDIES - UNIVERSITY OF KELANIYA</h3></div>';
			gtDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-20px; ">'+document.getElementById('selectedDocName').value+'-'+document.getElementById('achedamicYear').value+'</h3></div>';
			gtDiv+="</div>";		
			gtDiv +="<div id='topics1' class='info'></div>";
			gtDiv +="<div class='investLabel_l' style='width:160px'><h2 style='margin-top:-10px;float:left;text-align:center;'>Student No</h2></div>";
			gtDiv +="<div class='investLabel_l' style='width:260px'><h2 style='margin-top:-10px;'>Applicant Name</h2></div>";
            gtDiv +="<div class='investLabel' style='width:260px'><h2 style='margin-top:-10px;'>Qualification</h2></div>";
			
			for( i=0; i<studentNoLength; i++){
	        if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			gtDiv +="<br><div>";
			gtDiv += "<br><div  class='investView_l' style='float:left;width:100px' name='applicationNo"+inum+"' id='applicationNo"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			gtDiv += studentNoArr[i]+"</div>";
			gtDiv += "<div class='investView_l' style='float:left;width:400px' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			gtDiv += studentInitialArr[i]+"</div>";
			gtDiv += "<div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			gtDiv += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div>";
			gtDiv += "</div><dev><br>"; 
			}
		}
	}			
}
		gtDiv += "<div></dev>"; 
		gtDiv +="<div id='List' style='margin-top:10px 10px;width:100%;clear:both'></div>";	
		gtDiv+="<br><div style='clear:both;margin-top:30px'> Registrar/Coordinator:.............................. 			Date:........................ </div>";
	
		newPrint = window.open('','');
		doc = newPrint.document;
		doc.open();
		
		doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">label{font-family:tahoma;font-size:14px}.investView_l,.investView,.investLabel_l,.investLabel,br{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
		doc.write('</head><body>');
		doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0096c7;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
		doc.write(gtDiv);
		doc.write('</body></html>');
		doc.close();
	}		
}
//---------------------------------------PRINT LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------RESET ALL FUNCTION START--------------------------------------------------------------	

function ResetAll()
{
	dataItemIDLength=0;
	documentIDLength =0;
    inum=0;
    testNum=0;
    decisionMakingPointIDLength=0;
    documentIDLength=0;
    sessionIDLength=0;
}
//---------------------------------------RESET ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENGLISH LETTERS FUNCTION START--------------------------------------------------------------	

function printLetters(){

var gtDiv = "";
if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{
	if(document.getElementById('selectedDocName').value=="Application List" ){
	
	for( i=0; i<applicationNoLength; i++){
		
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
	    if((document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES") & (document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en")){	
		if(document.getElementById('checkRegistered'+i)){	
		if(document.getElementById('checkRegistered'+i).checked == true){
		gtDiv += "<div style='width:700; height:1120'>";
		gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';
		gtDiv+='<div style="width:100%;height:70px;">';
		gtDiv+="<div style='float:left;width:10%;'>";	
		gtDiv+='<table width="690" border="0" cellpadding="0" align="center" style="margin-top:-10px">';
		gtDiv+='<tr>';
		gtDiv+="<td width='101'><img src='img/logo.gif' align='right' style='width:90px;height:90px;'/></td>";
		gtDiv+="<td width='472'><img src='img/nm.png' style='width:472px;height:100px;'/></td>";
		gtDiv+="<td width='101'><img src='img/fgs.jpg' align='right' style='width:80px;height:90px;'/></td>";
		gtDiv+='</tr>';
		gtDiv+='</table>'; 
		gtDiv+="</div></div>";
        gtDiv+="<div style='float:left;width:90%;'>";
		gtDiv+="</div>";
		gtDiv+='<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-20px;margin-bottom:5px">__________________________________________________________________________________________</h4></div>';
		gtDiv+='<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-5px;margin-bottom:5px"><span style="float:left;">Our Ref. No:&nbsp;&nbsp;'+dataRep['userName']+'&nbsp;&nbsp;</span> 										<span style="float:right;">&nbsp;&nbsp;Temporary. No:&nbsp;&nbsp;'+applicationNoArr[i]+'</span></h4></div>';
		gtDiv += "<br><div style='float:left;width:270px;text-align:left' name='applicationNo' id='applicationNo' onchange='dataRep[this.name]=this.value;'>";
		var dd = new Date();
		var d = dd.getUTCDate(); 
		var m = dd.getUTCMonth();
		var y = dd.getUTCFullYear();
		var mn=m+1;
		var datelbl = d+"/"+mn+"/"+y;
		
		gtDiv += studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+"<div>";
		gtDiv += studentPermanentAddressArr[i]+"</div></div><br>";
		gtDiv+="<br><div style='clear:both;margin-top:30px;text-align:left'><style='margin-top:10px;'>"+datelbl+"</div>";
		gtDiv+="<br><div style='clear:both;margin-top:10px;text-align:left'><h4 style='margin-top:-10px;'>Dear Applicant,</h4></div>";

		var acYear = document.getElementById('achedamicYear').value;
		acYear++;
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-10px; ">Admission for '+document.getElementById('selectedDegreeName').value+'-'+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		gtDiv+="<div style='clear:both;text-align:left;'>This refers to your application submitted for the above programme and the interview held thereafter.</div><br/>";
		
		var yname1 = document.getElementById('selectedDegreeName').value;
		var xx1 = yname1.split(" ",2);
		var degname1 = xx1[0];
		var tname1,duration1;
		
		if (degname1=="MA"){
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">I am pleased to inform you that you have been selected to follow the '+document.getElementById('selectedDegreeName').value+'-'+document.getElementById('achedamicYear').value+'/'+acYear+' programme conducted by the '+departmentTitleArr[i]+' of this University subject to confirmation of the senate. The duration of this course is one year. However you can complete this course within a period of three years, upon receiving the prior approval from the university. Accordingly, you are required to register yourself for the programme at the Faculty of Graduate Studies (FGS) and, pay the following fees (being payment of the first installment) on or before 06th November 2015.</div>';
		gtDiv+='<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:100px">';
		gtDiv+='<tr>';
		gtDiv+='<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="2" style="text-align: center"><strong>One time payment</strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong>Payment Item</strong></td>';
        gtDiv+='<td style="text-align: center"><strong> Fee</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="198">Registration fee</td>';
        gtDiv+='<td width="100">Rs.    1,500.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Course fee</td>';
        gtDiv+='<td>Rs.  69,500.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Library fee (Non  refundable)</td>';
        gtDiv+='<td>Rs.    2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Library fee (refundable) </td>';
        gtDiv+='<td>Rs.    5,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Examination  fee</td>';
        gtDiv+='<td>Rs.    2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>Total</strong></td>';
        gtDiv+='<td><strong>Rs.   80,000.00</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='<td width="10">&nbsp;</td>';
		gtDiv+='<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="3" style="text-align: center"><strong>Installments</strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">Instalment</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">Instalment value</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong> payment due date</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="150">First Installment</td>';
        gtDiv+='<td width="150" style="font-style: normal">Rs. 30,000/= (course  fee Rs. 25,000/= and refundable library deposit Rs. 5000/=)</td>';
        gtDiv+='<td width="58" style="font-style: normal">06.11.2015 </td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Second installment</td>';
        gtDiv+='<td style="font-style: normal">Rs.  30,000.00</td>';
        gtDiv+='<td style="font-style: normal">30.04.2016</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Third Installment</td>';
        gtDiv+='<td style="font-style: normal">Rs.  20,000.00</td>';
        gtDiv+='<td style="font-style: normal">31.07.2016</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>Total</strong></td>';
        gtDiv+='<td style="font-style: normal"><strong>Rs.   80,000.00</strong></td>';
        gtDiv+='<td style="font-style: normal">&nbsp;</td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='</tr>';
		gtDiv+='</table>';
		
		tname1 = "one ";
		duration1 = 03;
		}
		
		if (degname1=="MSSc"){
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">I am pleased to inform you that you have been selected to follow the '+document.getElementById('selectedDegreeName').value+'-'+document.getElementById('achedamicYear').value+'/'+acYear+' programme conducted by the '+departmentTitleArr[i]+' of this University subject to confirmation of the senate. The duration of this Course is two years. However you can complete this course within a period of four years, upon receiving the prior approval. Accordingly, you are required to register yourself for the programme at the Faculty of Graduate Studies (FGS) and, pay the following fees (being payment of the first installment) on or before 31st October 2015.</div>';
		gtDiv+='<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:100px">';
		gtDiv+='<tr>';
		gtDiv+='<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="2" style="text-align: center"><strong>One time payment</strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong>Payment Item</strong></td>';
        gtDiv+='<td style="text-align: center"><strong> Fee</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="198">Registration fee</td>';
        gtDiv+='<td width="100">Rs.    2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Course fee</td>';
        gtDiv+='<td>Rs.  84,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Library fee (Non  refundable)</td>';
        gtDiv+='<td>Rs.    2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Library fee (refundable) </td>';
        gtDiv+='<td>Rs.    5,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Examination  fee</td>';
        gtDiv+='<td>Rs.    2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>Total</strong></td>';
        gtDiv+='<td><strong>Rs.   95,000.00</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='<td width="10">&nbsp;</td>';
		gtDiv+='<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="3" style="text-align: center"><strong>Instalments</strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">Instalment</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">Instalment value</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong> payment due date</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="150">First Installment</td>';
        gtDiv+='<td width="150" style="font-style: normal">Rs. 30,000/= (course  fee Rs. 25,000/= and refundable library deposit Rs. 5000/=)</td>';
        gtDiv+='<td width="58" style="font-style: normal">2015/10/31</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Second installment</td>';
        gtDiv+='<td style="font-style: normal">Rs.  30,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/01/30</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Third Installment</td>';
        gtDiv+='<td style="font-style: normal">Rs.  20,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/04/30</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>Fourth Installment</td>';
        gtDiv+='<td style="font-style: normal">Rs.  15,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/07/31</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>Total</strong></td>';
        gtDiv+='<td style="font-style: normal"><strong>Rs.   95,000.00</strong></td>';
        gtDiv+='<td style="font-style: normal">&nbsp;</td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='</tr>';
		gtDiv+='</table>';
		tname1 = "two ";
		duration1 = 04;
		}
		
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">Those who fail to make the payments on or before 06.11.2015  will not be registered for any reason. In the case of paying course fee by your employer or any other institution all the payments should be received to the FGS as per the due dates indicated above. If it is being late, it is the responsibility of the student to make the payments and to request for a reimbursement later.</div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;"><h4>Note :- Please note that the payment of library deposit (Rs. 5000/=) should be paid in the relevant voucher which is annexed herewith.</h4> </div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-15px;text-align:justify;">You may remit these fees to the credit of University of Kelaniya Account No: 055100130667553 of the People(s) Bank, Kelaniya branch by using paying-in-vouchers (PIV) enclosed herewith. Please send the first copy of the PIV certified by the Bank, to the Faculty of Graduate Studies. Further, certified copies of certificates in support of your educational qualifications and professional qualification etc. (if any), birth certificate, national identity card and two copy of photograph (2cm x 2½cm in size) should be sent to this office along with the paying-in-voucher. Please collect your student ID in the course.</div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">The inauguration ceremony of this programme will be held on saturday,14th November 2015 at 9.00 am at the Sri Dharmaloka hall. I cordially invite you to participate to this event.</div>';
		gtDiv+='<div style="width:100%;height:20%;float:left;margin-top:5px;margin-bottom:25px;text-align:left;">Yours faithfully,</div>';
		gtDiv+="<br><div style='width:50%;height:5%;margin-top:1px;text-align:left'>Senior Assistant Registrar</div>";
		gtDiv+="<br><div style='width:50%;height:5%;margin-top:-18px;text-align:left'>Faculty of Graduate Studies.</div>";
		gtDiv+='<div style="width:100%;height:5%;float:left;margin-top:-10px;text-align:left;">__________________________________________________________________________________________</div>';
		gtDiv+='<div style="width:100%;height:5%;float:center;margin-top:1px;margin-bottom:5px;text-align:center;">Tel: Dean : 011-2986124	&nbsp;&nbsp;  |&nbsp;&nbsp; Senior Assistant Registrar : 011-2903951    &nbsp;&nbsp;   |&nbsp;&nbsp; Office : 011-2903952/3</div><br>';
		gtDiv+= "</fieldset></div>";
			}
			}
			}
			}
		}
	}	
		
		var reportWindow = window.open();
		reportWindow.document.write(gtDiv);
		reportWindow.print();
		reportWindow.document.close();
	
				
				
}
}
//---------------------------------------PRINT ENGLISH LETTERS FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT SINHALA LETTERS FUNCTION START--------------------------------------------------------------	

function printLettersSinhala(){

var gtDiv = "";
if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{
	if(document.getElementById('selectedDocName').value=="Application List" ){
	
	for( i=0; i<applicationNoLength; i++){
		
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
		if((document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES") &  (document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="si")){	
		if(document.getElementById('checkRegistered'+i)){
		if(document.getElementById('checkRegistered'+i).checked == true){
        gtDiv += "<div style='width:700; height:1140'>";
		gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';
	
		gtDiv+='<div style="width:107%;height:100px;">';
		gtDiv+="<div style='float:left;width:10%;'>";
			
		gtDiv+='<table width="690" border="0" cellpadding="0" align="center" style="margin-top:-10px">';
		gtDiv+='<tr>';
		gtDiv+="<td width='101'><img src='img/logo.gif' align='right' style='width:90px;height:90px;'/></td>";
		gtDiv+="<td width='472'><img src='img/nm.png' style='width:472px;height:100px;'/></td>";
		gtDiv+="<td width='101'><img src='img/fgs.jpg' align='right' style='width:80px;height:90px;'/></td>";
		gtDiv+='</tr>';
        gtDiv+='</table>';
		gtDiv+="</div></div>";
		gtDiv+="<div style='float:left;width:90%;'>";
		gtDiv+="</div>";

		gtDiv+='<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-20px;margin-bottom:5px">__________________________________________________________________________________________</h4></div>';
		gtDiv+='<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-5px;margin-bottom:5px"><span style="float:left;"> Our Ref. No:&nbsp;&nbsp;'+dataRep['userName']+'&nbsp;&nbsp;</span>							<span style="float:right;">&nbsp;&nbsp;Temporary. No:&nbsp;&nbsp;'+applicationNoArr[i]+'</span></h4></div>';
		gtDiv += "<br><div style='float:left;width:270px;text-align:left' name='applicationNo' id='applicationNo' onchange='dataRep[this.name]=this.value;'>";
		var dd = new Date();
		var d = dd.getUTCDate(); 
		var m = dd.getUTCMonth();
		var y = dd.getUTCFullYear();
		var mn=m+1;
		var datelbl = d+"/"+mn+"/"+y;
		
		gtDiv += studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+"<div>";
		gtDiv += studentPermanentAddressArr[i]+"</div></div><br>";
		gtDiv+="<br><div style='clear:both;margin-top:30px;text-align:left;margin-top:10px;'>"+datelbl+"</div>";		
		var acYear = document.getElementById('achedamicYear').value;
		acYear++;
		
		var xname = degreeCodeArr[i];
		var pname;
		
		if (xname=="MAHIST"){
		pname = "ඉතිහාසය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px;margin-bottom:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAARCH"){
		pname = "පුරාවිද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAGEOG"){
		pname = "භුගෝල විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAECON"){
		pname = "ආර්ථීක විද්‍යාව ";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MASOCI"){
		pname = "සමාජ විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MALISC"){
		pname = "පුස්තකාල හා විඥාපන විද්‍යාව ";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAPHIL"){
		pname = "දර්ශනය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAPOLS"){
		pname = "දේශපාලන විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';
		}
		if (xname=="MAMACO"){
		pname = "ජනසන්නිවේදනය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCHIST"){
		pname = "ඉතිහාසය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCARCH"){
		pname = "පුරාවිද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCGEOG"){
		pname = "භුගෝල විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCECON"){
		pname = "ආර්ථීක විද්‍යාව ";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCSOCI"){
		pname = "සමාජ විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCLISC"){
		pname = "පුස්තකාල හා විඥාපන විද්‍යාව ";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCPHIL"){
		pname = "දර්ශනය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCPOLS"){
		pname = "දේශපාලන විද්‍යාව";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}
		if (xname=="MSSCMACO"){
		pname = "ජනසන්නිවේදනය";
		gtDiv+='<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  ('+pname+') - '+document.getElementById('achedamicYear').value+'/'+acYear+'</h3></div>';			
		}				
		gtDiv+="<div style='clear:both;text-align:left;margin-top:-30px'>ඉහත පාඨමාලාව සඳහා ඔබ විසින් ඉදිරිපත් කරන ලද අයදුම්පත හා අනතුරුව පැවති සම්මුඛ පරීක්ෂණය හා බැඳේ.</div><br/>";
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-12px;text-align:justify;">01.	ඒ අනුව පූර්වෝක්ත පාඨමාලාව හැදෑරීම සඳහා සමාජීය විද්‍යා පීඨ අධ්‍යයන මණ්ඩලය විසින් සනාතන සභාවේ අනුමැතියට යටත්ව ඔබ තෝරාගෙන ඇති බව සතුටින් දන්වමි. <div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:10px;text-align:justify;">02.	පාඨමාලාව සඳහා ලියාපදිංචි කිරීම පිණිස ඔබ විසින් ගෙවිය යුතු පහත සඳහන් ගාස්තු, මේ සමඟ එවා ඇති ගෙවීම් වවුචර්පත් මඟින් ඕනෑම මහජන බැංකු ශාඛාවකට ගෙවා බැංකුවෙන් සහතික කරන ලද වවුචර්වල මුල් පිටපත් (ගාස්තු හා පුස්තකාල තැන්පත්) 2015.11.06  දින හෝ එදිනට ප්‍රථම මෙම පීඨය වෙත එවීමට කටයුතු කරන මෙන්  දන්වමි.<div>';
	
		var yname =	document.getElementById('selectedDegreeName').value;
		var xx = yname.split(" ",2);
		var degname = xx[0];
		var tname,duration;
		
		if (degname=="MA"){
		
		gtDiv+='<div >';
		gtDiv+='<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:10px">';
		gtDiv+='<tr>';
		gtDiv+='<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="2" style="text-align: center"><strong>එක්වර ගෙවන්නේ නම් </strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong>ගාස්තුව</strong></td>';
        gtDiv+='<td style="text-align: center"><strong>මුදල (රු)</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="198">ලියාපදිංචි ගාස්තු</td>';
        gtDiv+='<td width="100">රු.      &nbsp;&nbsp;&nbsp;&nbsp;1,500.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පාඨමාලා ගාස්තු</td>';
        gtDiv+='<td>රු.             &nbsp;69,500.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පුස්තකාල ගාස්තු (ආපසු නොගෙවන)</td>';
        gtDiv+='<td>රු.       2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පුස්තකාල තැන්පත් (ආපසු ගෙවන) </td>';
        gtDiv+='<td>රු.       5,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>විභාග ගාස්තු</td>';
        gtDiv+='<td>රු.       2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>ගෙවිය යුතු මුළු මුදල</strong></td>';
        gtDiv+='<td><strong>රු.        &nbsp;80,000.00</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='<td width="10">&nbsp;</td>';
		gtDiv+='<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="3" style="text-align: center"><strong>වාරික වශයෙන් ගෙවන්නේ නම්  </strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">වාරික </span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">වාරික මුදල (රු.)</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong> ගෙවිය යුතු දින</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="150">පළමු වාරිකය</td>';
        gtDiv+='<td width="150" style="font-style: normal">රු.  30,000 (පාඨමාලා ගාස්තු රු.25,000.00 ක්  හා පුස්තකාල තැන්පතුව රු.5,000.00)</td>';
        gtDiv+='<td width="58" style="font-style: normal">06.11.2015 </td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>දෙවන වාරිකය </td>';
        gtDiv+='<td style="font-style: normal">රු.    &nbsp;30,000.00</td>';
        gtDiv+='<td style="font-style: normal">30.04.2016</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>තෙවන වාරිකය </td>';
        gtDiv+='<td style="font-style: normal">රු.   &nbsp;20,000.00</td>';
        gtDiv+='<td style="font-style: normal">31.07.2016</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>එකතුව </strong></td>';
        gtDiv+='<td style="font-style: normal"><strong>රු.    &nbsp;&nbsp;80,000.00</strong></td>';
        gtDiv+='<td style="font-style: normal">&nbsp;</td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='</tr>';
		gtDiv+='</table>';
		
		gtDiv+='</div>';
		
		tname = "එක් ";
		duration = 03;
		}
		if (degname=="MSSc"){
		
		gtDiv+='<div >';
		
		gtDiv+='<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:10px">';
		gtDiv+='<tr>';
		gtDiv+='<td width="283"><table width="304" height="252" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="2" style="text-align: center"><strong>එක්වර ගෙවන්නේ නම් </strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong>ගාස්තුව</strong></td>';
        gtDiv+='<td style="text-align: center"><strong>මුදල (රු)</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="198">ලියාපදිංචි ගාස්තු</td>';
        gtDiv+='<td width="100">රු.      &nbsp;&nbsp;&nbsp;&nbsp;2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පාඨමාලා ගාස්තු</td>';
        gtDiv+='<td>රු.             &nbsp;84,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පුස්තකාල ගාස්තු (ආපසු නොගෙවන)</td>';
        gtDiv+='<td>රු.       2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>පුස්තකාල තැන්පත් (ආපසු ගෙවන) </td>';
        gtDiv+='<td>රු.       5,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>විභාග ගාස්තු</td>';
        gtDiv+='<td>රු.       2,000.00</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>ගෙවිය යුතු මුළු මුදල</strong></td>';
        gtDiv+='<td><strong>රු.        &nbsp;95,000.00</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='<td width="10">&nbsp;</td>';
		gtDiv+='<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
		gtDiv+='<tr>';
        gtDiv+='<td colspan="3" style="text-align: center"><strong>වාරික වශයෙන් ගෙවන්නේ නම්  </strong></td>';
        gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">වාරික </span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong><span style="text-align: center">වාරික මුදල (රු.)</span></strong></td>';
        gtDiv+='<td style="text-align: center"><strong> ගෙවිය යුතු දින</strong></td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td width="150">පළමු වාරිකය</td>';
        gtDiv+='<td width="150" style="font-style: normal">රු.  30,000 (පාඨමාලා ගාස්තු රු.25,000.00 ක්  හා පුස්තකාල තැන්පතුව රු.5,000.00)</td>';
        gtDiv+='<td width="58" style="font-style: normal">2015/10/31</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>දෙවන වාරිකය </td>';
        gtDiv+='<td style="font-style: normal">රු.    &nbsp;30,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/01/30</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td>තෙවන වාරිකය </td>';
        gtDiv+='<td style="font-style: normal">රු.   &nbsp;20,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/04/30</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
		gtDiv+='<td>සිව්වන වාරිකය </td>';
        gtDiv+='<td style="font-style: normal">රු.   &nbsp;15,000.00</td>';
        gtDiv+='<td style="font-style: normal">2016/07/31</td>';
		gtDiv+='</tr>';
		gtDiv+='<tr>';
        gtDiv+='<td><strong>එකතුව </strong></td>';
        gtDiv+='<td style="font-style: normal"><strong>රු.    &nbsp;&nbsp;95,000.00</strong></td>';
        gtDiv+='<td style="font-style: normal">&nbsp;</td>';
		gtDiv+='</tr>';
		gtDiv+='</table></td>';
		gtDiv+='</tr>';
		gtDiv+='</table>';
		
		gtDiv+='</div>';
		tname = "දෙ ";
		duration = 04;
		}
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:10px;text-align:justify;">වාරික වශයෙන් ගෙවන්නේ නම්  පළමු වාරිකය ඉහත සඳහන් දිනට (2015.11.06 ) හෝ එදිනට පෙර අනිවාර්යයෙන්ම ගෙවිය යුතු අතර එසේ නොගෙවන අපේක්ෂකයින් කිසිඳු හේතුවක් මත ඉන් පසුව ලියාපදිංචි නොකරන බව සැලකුව මැනවි. පාඨමාලා ගාස්තු වෙනත් ආයතන මහින් ගෙවනු ලබන අවස්ථාවකදී ද ඉහත දක්වා ඇති ආකාරයෙන් අදාළ දිනට ප්‍රථම මුදල් ගෙවිය යුතුය. ආයතනය මගින් ඊට අදාළ මුදල් විශ්වවිද්‍යාලය වෙත ගෙවීමට ප්‍රමාද වන්නේ නම් ශිෂ්‍යයා  විසින් එම මුදල් පෞද්ගලිකව ගෙවිය යුතු වේ.  </div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-15px;text-align:justify;"><h4>සැ.යු. : පුස්තකාල තැන්පතුව (රු. 5000.00) ගෙවීමේදී ඒ වෙනුවෙන් එවනු ලබන වවුචරය පමණක් භාවිත කළ යුතු අතර, එම මුදල ආපසු ලබා ගැනීමේදී එම වවුචරයේ නිල් පැහැති පිටපත ඉදිරිපත් කළ යුතු වේ. එසේ නොකළහොත් තැන්පතු මුදල ආපසු ගෙවීමට අපහසු බව කාරුණිකව සලකන්න.  </h4> </div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">03.	ඔබගේ ශිෂ්‍ය හැඳුනුම්පත සඳහා මේ සමඟ අමුණා ඇති ආකෘති පත්‍රය සම්පූර්ණ කොට, අධ්‍යාපන හා උප්පැන්න සහතිකවල සහතික කළ පිටපත් සහ සෙ.මි 2  x සෙ.මි 2 1/2  ප්‍රමාණයේ ඡායාරූප 2 ක් ද ඉහත සඳහන් වවුචර් පිටපත සමඟ මෙම පීඨය වෙත එවීමට කටයුතු කරන්න.</div>';
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">04.	ඔබගේ ලියාපදිංචි අංකය ඇතුළත් හැඳුනුම්පත පශ්චාත් උපාධි අධ්‍යයන පීඨය මඟින් යථාකාලයේ දී නිකුත් කිරීමට කටයුතු කරනු ඇත.</div>';
		
		if (degname=="MA"){
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">05.	මෙම එක් අවුරුදු ශාස්ත්‍රපති උපාධි පාඨමාලාව සම්පූර්ණ කළ යුතු උපරිම කාල සීමාව, කාලය දීර්ඝ කිරීම් ද ඇතුළුව වසර 03 ක් පමණක් වන බව වැඩිදුරටත් දන්වමි.</div>';
		tname = "එක් ";
		duration = 03;
		}
		if (degname=="MSSc"){
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">05.	මෙම  දෑ  අවුරුදු  සමාජීය විද්‍යාපති උපාධි පාඨමාලාව සම්පුර්ණ කළ යුතු උපරිම කාල සීමාව, කාලය දීර්ඝ කිරීම් ද ඇතුළුව වසර 04 ක් පමණක් වන බව  වැඩිදුරටත් දන්වමි.</div>';
		tname = "දෙ ";
		duration = 04;
		}
		gtDiv+='<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">06.	මෙම පාඨමාලාවේ සමාරම්භක උත්සවය 2015.11.14 වන සෙනසුරාදා පෙ.ව. 9.00ට කැලණිය විශ්වවිද්‍යාලයේ ශ්‍රී ධර්මාලෝක ශාලාවේදී පැවැත්වෙන අතර ඒ සඳහා සහභාගි වන ලෙස මෙයින් දන්වමි.</div>';
		gtDiv+='<div style="width:100%;height:20%;float:left;margin-top:5px;margin-bottom:25px;text-align:left;">මෙයට ,</div>';
		gtDiv+="<br><div style='width:60%;height:1%;margin-top:-18px;text-align:left'>ජ්‍යෙෂ්ඨ  සහකාර ලේඛකාධිකාරී </div>";
		gtDiv+="<br><div style='width:60%;height:1%;margin-top:-21px;text-align:left'>ලේඛකාධිකාරී වෙනුවට.</div>";
		gtDiv+='<div style="width:100%;height:1%;float:left;margin-top:-12px;text-align:left;">__________________________________________________________________________________________</div>';
		gtDiv+='<div style="width:100%;height:1%;float:center;margin-top:0px;margin-bottom:5px;text-align:center;">Tel: පීඨාධිපති   : 011-2986124	  | ජ්‍යෙෂ්ඨ  සහකාර ලේඛකාධිකාරී : 011-2903951      | කාර්යාලය  : 011-2903952/3</div><br>';
		gtDiv+= "</fieldset></div>";
			}
			}
		    }
			}
		}
	}	
		
		var reportWindow = window.open();
		reportWindow.document.write(gtDiv);
		reportWindow.print();
		reportWindow.document.close();
	
				
				
}
}
//---------------------------------------PRINT SINHALA LETTERS FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENVILOP FUNCTION START--------------------------------------------------------------	

function printEnvilop(){

var gtDiv = "";
if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{
	if(document.getElementById('selectedDocName').value=="Application List" ){
	
	for( i=0; i<applicationNoLength; i++){
		
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if((document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES") &  (document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="si")){	
		
						
			gtDiv += '<page size="#10">';
			gtDiv += "<div style='width:648; height:288'>";
			gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';

			gtDiv+='<table width="649" height="282" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td><div align="right">';
			gtDiv+='<p>&nbsp;</p>';
			gtDiv+='<table width="350" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td colspan="2" width="240" style="text-align: left;font-size: 18px"><div align="left">'+studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+'</div></td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td width="240" style="text-align: left;font-size: 18px">'+studentPermanentAddressArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='</table>';
			gtDiv+='</div></td>';
			gtDiv+='</tr>';
			gtDiv+='</table><br>';
			
					
		
			gtDiv+= "</fieldset></div></page>";
				}
			}
		}
	}
	
	var reportWindow = window.open();
		reportWindow.document.write(gtDiv);
		reportWindow.print();
		reportWindow.document.close();
	
			
	}

}
//---------------------------------------PRINT ENVILOP FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENGLISH ENVILOP FUNCTION START--------------------------------------------------------------	

function printEnvilopEnglish(){

var gtDiv = "";
if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{
	if(document.getElementById('selectedDocName').value=="Application List" ){
	
	for( i=0; i<applicationNoLength; i++){
		
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if((document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES") &  (document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en")){	
		
						
			gtDiv += '<page size="#10">';
			gtDiv += "<div style='width:648; height:288'>";
			gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';

			gtDiv+='<table width="649" height="282" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td><div align="right">';
			gtDiv+='<p>&nbsp;</p>';
			gtDiv+='<table width="350" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td colspan="2" width="240" style="text-align: left;font-size: 18px"><div align="left">'+studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+'</div></td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td>&nbsp;</td>';
			gtDiv+='<td width="240" style="text-align: left;font-size: 18px">'+studentPermanentAddressArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='</table>';
			gtDiv+='</div></td>';
			gtDiv+='</tr>';
			gtDiv+='</table><br>';
			
			gtDiv+= "</fieldset></div></page>";
				}
			}
		}
	}
	
	var reportWindow = window.open();
		reportWindow.document.write(gtDiv);
		reportWindow.print();
		reportWindow.document.close();		
	}
}
//---------------------------------------PRINT ENGLISH ENVILOP FUNCTION END--------------------------------------------------------------	

//---------------------------------------GET SINHALA LIST FUNCTION START--------------------------------------------------------------	

function getlistSinhala11()
{
	var count1=1;
	var Rcount=1;
	if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){		
	}
    else{
        if(document.getElementById('selectedDocName').value=="Application List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"-"+document.getElementById('selectedDocName').value+"(Sinhala Medium)</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Applicant Name</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="</tr>";  
            
			for( i=0; i<applicationNoLength; i++){
		
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="si"){	
			if(document.getElementById('checkRegistered'+i)){
			if(document.getElementById('checkRegistered'+i).checked == true){           
		   newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count1+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count1++;
			    }
			    }
				}
			}
		}
		newStr +="</table>";
	}
	
		if(document.getElementById('selectedDocName').value=="Registered List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"-"+document.getElementById('selectedDocName').value+"(Sinhala Medium)</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Applicant Name</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="</tr>";  
		
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="si"){	
		
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;			
				}
			}
		}
		newStr +="</table>";
	}
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {type: "text/doc;charset=utf8;"});
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	   
	  if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	link.setAttribute("href", window.URL.createObjectURL(blob));
	   link.setAttribute("download", fileName);
	  
		}
		else{
			  link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
		}
	  
	
	  
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	
	if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	document.body.appendChild(link);
	window.location.replace(link);
		}
}
//---------------------------------------GET SINHALA LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------GET ENGLISH LIST FUNCTION START--------------------------------------------------------------	

function getlistEnglish()
{
	var count1=1;
	var Rcount=1;
	if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){		
	}
    else{
        if(document.getElementById('selectedDocName').value=="Application List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"-"+document.getElementById('selectedDocName').value+"(English Medium)</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Applicant Name</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="</tr>";  
            
			for( i=0; i<applicationNoLength; i++){
		
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en"){	
			if(document.getElementById('checkRegistered'+i)){
			if(document.getElementById('checkRegistered'+i).checked == true){           
		   newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count1+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count1++;
			    }
			    }
				}
			}
		}
		newStr +="</table>";
	}
	
		if(document.getElementById('selectedDocName').value=="Registered List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"-"+document.getElementById('selectedDocName').value+"(English Medium)</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Applicant Name</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="</tr>";  
		
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en"){	
		
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;			
				}
			}
		}
		newStr +="</table>";
	}
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {type: "text/doc;charset=utf8;"});
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	   
	  if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	link.setAttribute("href", window.URL.createObjectURL(blob));
	   link.setAttribute("download", fileName);
	  
		}
		else{
			  link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
		}
	  
	
	  
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	
	if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{ 
	document.body.appendChild(link);
	window.location.replace(link);
		}
}
//---------------------------------------GET ENGLISH LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------DOWNLOAD ALL STUDENT  FUNCTION START--------------------------------------------------------------	

function getlistAll()
{
	var count1=1;
	var Rcount=1;
	if(document.getElementById('selectedDocName').value=="Please scroll down to see the records" && document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){		
	}
    else{
        if(document.getElementById('selectedDocName').value=="Application List" ){
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"- Selected List</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Applicant Name</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="</tr>";  
            
			for( i=0; i<applicationNoLength; i++){
		
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            if(document.getElementById('selectedStudentNIC'+i)){
			if(document.getElementById('selectedStudentNIC'+i).value== studentNICArr[i]){	
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count1+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count1++;
				}
			}
			}
			}
		}
		newStr +="</table>";
	}
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {
	  "type": "text/doc;charset=utf8;"			  
	});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	  link.setAttribute("href", window.URL.createObjectURL(blob));
	  link.setAttribute("download", fileName);
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}
//---------------------------------------DOWNLOAD ALL STUDENT  FUNCTION END--------------------------------------------------------------	
 
 //---------------------------------------SEARCH  FUNCTION START--------------------------------------------------------------	

 function searchSelectedList(){
	 var countSearch=0;
	if(countviewSelectedList!=0){
	var c=0;
	var appNIC=document.getElementById('searchSelectedApplicant').value;
	var tempName=document.getElementById('searchSelectedApplicantName').value;
	for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			//alert('ok');
			if(document.getElementById('stdlist'+i)){
                 				
                 c++;
                 if (c%2==0)
                 {
                   document.getElementById('stdlist'+i).style.backgroundColor='#ffece6';  
      			   document.getElementById('SelectedNamebtn'+i).style.backgroundColor='#ffece6';                  
                 } 
                 else{
                   document.getElementById('stdlist'+i).style.backgroundColor='#ffd9cc';
				   document.getElementById('SelectedNamebtn'+i).style.backgroundColor='#ffd9cc'; 
                }

			}
			}
				
		}
	}
    var check=0;
	for( var i=0; i<applicationNoLength; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			if(document.getElementById('searchSelectedApplicant').value!="" & document.getElementById('searchSelectedApplicantName').value!=""){
			if (studentNICArr[i]==appNIC & studentInitialArr[i].indexOf(tempName) != -1){
                check++;
				countSearch++;
                document.getElementById('stdlist'+i).style.backgroundColor='#ccffeb';
			    document.getElementById('SelectedNamebtn'+i).style.backgroundColor='#ccffeb'; 
			}
			}
			else{
			if((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check==0) || (studentNICArr[i]== appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check==0)  ){
                 countSearch++;
				document.getElementById('stdlist'+i).style.backgroundColor='#ccffeb';
				document.getElementById('SelectedNamebtn'+i).style.backgroundColor='#ccffeb';
			}
			}
			}
				
		}
	}
	if(countSearch ==0){
			alert('There is No Matching Data');
	}
    }
 	else{
	    if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records" ){
		alert('Please enter Relevent Details');
	    }
        else{
	    document.getElementById('list').innerHTML=document.getElementById('list').innerHTML.replace ="";
	    if(document.getElementById('searchSelectedApplicantName').value!="" & document.getElementById('searchSelectedApplicant').value!=""){
         	var newStr ="<table id='my1Table' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
			newStr +="<tr style='background-Color:#ff9f80'>";
			if(dataRep['roleName']=='Subject Clerk'){
				newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>List Selection</font></div></th>";
		    }
			newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>Row Count</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Applicant Name</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='width:150px;' style='text-align:left'><font color='black'>Application No</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>NIC Number</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel_l style='width:200px;'' style='text-align:left'><font color='black'>Address</font></div></th>";
			if(dataRep['roleName']=='Subject Clerk'){
				newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Qualification</font></div></th>";
            }
			newStr +="</tr>";
		    var tempName=document.getElementById('searchSelectedApplicantName').value;
		    var appNIC=document.getElementById('searchSelectedApplicant').value;
		    for( var i=0; i<applicationNoLength; i++){
		    if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if(studentInitialArr[i].indexOf(tempName) != -1 && studentNICArr[i]== appNIC){
			countSearch++;
            if(rwcnt%2==0){
            newStr +="<tr style='background-Color:#ffece6;>";}
			else{
			newStr +="<tr style='background-Color:#ffd9cc;>";}
			newStr +="<div class='info' id='stdlist"+i+"'  style='width:auto;clear:both;' name='testInfo"+i+"'>";
			if(dataRep['roleName']=='Subject Clerk'){
			var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';
					}
				}
			
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div  class='investView' style='text-align:center' name='registered"+i+"' id='registered"+i+"'>";
			newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"' onChange='' name='checkRegistered"+i+"' ' />";
			newStr += "</div></td>";//AddRowColorLdocument(stdlist"+i+", this)	
			}
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
			newStr += rwcnt+"</div></td>";//
											
			newStr += "<td style='width:200px;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div></td>";
							
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
			newStr += applicationNoArr[i]+"</div></td>";
			
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
		    newStr +="<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC"+i+"' value= '"+studentNICArr[i]+"' >";			
			 
			newStr += "<td style='width:200px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
			if(dataRep['roleName']=='Subject Clerk'){
			if(fieldValueArr[i]!= null){
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div></td>";
			}
			else{
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'></div></td>";				
			}
			}
			vID = 'applicationNo1'+inum;
			AppNoArr[inum] = applicationNoArr[i];	
	        newStr +="</tr>";
			newStr +="</div>";  
			inum++;	
			rwcnt++;
			}
			}	
			}
		    }
		    newStr +="</table><br>";
		    if(countSearch ==0){
			alert('There is No Matching Data');
		    }
	    
	        for(i = 0; i<documentIDLength; i++) {
		
		    if(documentIDArr[dataRep["selectedDocName"]-1]==documentIDArr[i]){
		    docID=documentIDArr[i];
		    }
		
	        }
		
	        for(var q=0; q<=dataItemIDLength; q++){
			
			if(docID==documentItemIDArr[q]){	
			if(dataItemNameArr[q] !=null){
			if(dataItemNameArr[q]=="Programm Title"){
			dataRep["programTitle"]=document.getElementById('selectedDegreeName').value;
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '"+dataRep["programTitle"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			
			}
			 if(dataItemNameArr[q]=="Achedamic Year"){		
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '"+dataRep["programYear"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			}
			}
	        }
	        }
            if (rwcnt >= 10)  { 
		    if (dataRep['roleName']=='Subject Clerk')
		    {	
		       var newStr1 = '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" value="sinhala-Download" class="btnB"  onclick=getlistSinhala11();>';
		       newStr1 += '<input type="button"  style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" value="English-Download"class="btnB"  onclick=getlistEnglish();>';
		       //newStr1 += '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" class="btnB" value="Download Names" onclick=getListPrint1();>';
			   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  value="Save" onclick=formAddListDocumentsendForm('+"'addListDocumentData'"+');formAddApplicationListDocumentsendForm('+"'addListNumDocumentData'"+');>';		       
			   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		       newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';   
		       newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';   
	        }
            if(dataRep['roleName']=='Dean')
		    {	
		       var newStr1 = '<input type="button"  class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;" value="Download" onclick=getlistAll();>';
		       newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		       newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';   
		       newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      
		    }
		   if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
		   var newStr1 = '<input type="button" class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;"  value="Download" onclick=getlistAll();>';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset"  onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formCoordinatorMenu'"+');>';   
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      			   
		   }
		    document.getElementById('selectedlistbtn').innerHTML += newStr1;
	        }
	        document.getElementById('list').innerHTML += newStr; 		 
	        document.getElementById("View-List").disabled= true; 
	        document.getElementById('select-all').style="display";
	        document.getElementById('select-non').style="display";  	
	    }
	    if((document.getElementById('searchSelectedApplicantName').value!="" & document.getElementById('searchSelectedApplicant').value =="") || (document.getElementById('searchApplicantName').value=="" & document.getElementById('searchApplicant').value!="")){
         
         	var newStr ="<table id='my1Table' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
			newStr +="<tr style='background-Color:#ff9f80'>";
			if(dataRep['roleName']=='Subject Clerk'){
				newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>List Selection</font></div></th>";
			}
			newStr +="<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>Row Count</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Applicant Name</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='width:150px;' style='text-align:left'><font color='black'>Application No</font></div></th>";
			newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>NIC Number</font></div></th>";
			newStr +="<th style='width:200px;' align='center'><div class='investLabel_l style='width:200px;'' style='text-align:left'><font color='black'>Address</font></div></th>";
			if(dataRep['roleName']=='Subject Clerk'){
				newStr +="<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Qualification</font></div></th>";
            }
			newStr +="</tr>";
  		    var tempName=document.getElementById('searchSelectedApplicantName').value;
		    var appNIC=document.getElementById('searchSelectedApplicant').value;
		    for( var i=0; i<applicationNoLength; i++){
		    if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			if((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0) || (studentNICArr[i]== appNIC & studentInitialArr[i].indexOf(tempName) == 0) ){
			countSearch++;
            if(rwcnt%2==0){
			
            newStr +="<tr style='background-Color:#ffece6;>";}
			else{
			newStr +="<tr style='background-Color:#ffd9cc;>";}
			newStr +="<div class='info' id='stdlist"+i+"'  style='width:auto;clear:both;' name='testInfo"+i+"'>";
			if(dataRep['roleName']=='Subject Clerk'){
			var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';
					}
				}
			
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div  class='investView' style='text-align:center' name='registered"+i+"' id='registered"+i+"'>";
			newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"' onChange='' name='checkRegistered"+i+"' ' />";
			newStr += "</div></td>";//AddRowColorLdocument(stdlist"+i+", this)	
			}
			newStr += "<td style='width:20px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
			newStr += rwcnt+"</div></td>";//
											
			newStr += "<td style='width:200px;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div></td>";
							
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
			newStr += applicationNoArr[i]+"</div></td>";
			
			newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			newStr +="<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC"+i+"' value= '"+studentNICArr[i]+"' >";			
 
			newStr += "<td style='width:200px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress"+inum+"' id='studentPermanentAddress"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentPermanentAddressArr[i]+"</div></td>";
			
			if(dataRep['roleName']=='Subject Clerk'){
			if(fieldValueArr[i]!= null){
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+fieldNameArr[i]+'-'+fieldValueArr[i]+"</div></td>";
			}
			else{
			newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification"+inum+"' id='qualification"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'></div></td>";				
			}
			}
			
			vID = 'applicationNo1'+inum;
			AppNoArr[inum] = applicationNoArr[i];	
	        newStr +="</tr>";
			newStr +="</div>";  
			inum++;	
			rwcnt++;
			}
		    }	
			}
		    }
		    newStr +="</table><br>";
		    if(countSearch ==0){
			alert('There is No Matching Data');
		    }
	        for(i = 0; i<documentIDLength; i++) {
		    if(documentIDArr[dataRep["selectedDocName"]-1]==documentIDArr[i]){
		    docID=documentIDArr[i];
		    }	
	        }
		
	        for(var q=0; q<=dataItemIDLength; q++){
			
			if(docID==documentItemIDArr[q]){	
			if(dataItemNameArr[q] !=null){
			if(dataItemNameArr[q]=="Programm Title"){
			dataRep["programTitle"]=document.getElementById('selectedDegreeName').value;
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '"+dataRep["programTitle"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			
			}
			 if(dataItemNameArr[q]=="Achedamic Year"){		
			newStr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '"+dataRep["programYear"]+"-"+dataItemIDArr[q]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
			}
			}
		    }
	        }
            if (rwcnt >= 10)  { 
		    if (dataRep['roleName']=='Subject Clerk')
		    {	
		    var newStr1 = '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;"  value="sinhala-Download" class="btnB"  onclick=getlistSinhala11();>';
		    newStr1 += '<input type="button"  style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;"  value="English-Download"class="btnB"  onclick=getlistEnglish();>';
		    //newStr1 += '<input type="button" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;text-align:left;" class="btnB" value="Download Names" onclick=getListPrint1();>';
			newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  value="Save" onclick=formAddListDocumentsendForm('+"'addListDocumentData'"+');formAddApplicationListDocumentsendForm('+"'addListNumDocumentData'"+');>';
		    newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset"  onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		    newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formClerkMenu'"+');>';   
		    newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';   
	        }
            if(dataRep['roleName']=='Dean')
		   {	
		   var newStr1 = '<input type="button" class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;"  value="Download" onclick=getlistAll();>';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset"  onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';   
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      
		   }
		   if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
		   var newStr1 = '<input type="button" class="btnB" style="margin-top:0px;width:157px;background-image:url(img/wbutton.png);height:30px;"  value="Download" onclick=getlistAll();>';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset"  onclick="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');">';
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu('+"'formCoordinatorMenu'"+');>';   
		   newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';      			   
		   }
		   document.getElementById('selectedlistbtn').innerHTML += newStr1; 
	       }
	       document.getElementById('list').innerHTML += newStr;		 
	       document.getElementById("View-List").disabled= true; 
	       document.getElementById('select-all').style="display";
	       document.getElementById('select-non').style="display";                     
		}
	    }	
	}
 }
  //---------------------------------------SEARCH FUNCTION END--------------------------------------------------------------	

function loadProfile1(app)
{

	// var adID = app.id;
    // var lastChar = adID.substr(adID.indexOf("SelectedNamebtn") + 15);
    // dataRep["applicationNo"]=document.getElementById('selectedapplicationNo'+lastChar).value;  //sendForm('data4GetReleventApplicant')

 // sendForm('data4GetReleventApplicant');
 // sendForm('data4StudentProfileDeteilsCheckUser');	
 // sendForm('data4profileEducationalDetails');
 // setValuesProfileabc();	


}

//------------------------------------------BUTTON DISABLE FUNCTION START------------------------------------------------------------------
// function buttondisable2()
// {
	// if (dataRep['roleName']=='Subject Clerk'){
		// document.getElementById("DSinhala").disabled=false;
		// document.getElementById("ESinhala").disabled=false;	
		// document.getElementById("save").disabled=false;
		// document.getElementById("Reset").disabled=false;
	// }
	// else{
		// document.getElementById("LDownload").disabled=false;
		// document.getElementById("DReset").disabled=false;		
	// }
	
// }
//------------------------------------------BUTTON DISABLE FUNCTION END------------------------------------------------------------------
