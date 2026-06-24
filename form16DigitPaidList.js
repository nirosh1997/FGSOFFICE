var selectedChecked = "";
var registeredChecked = "";
var changeRow=0;
var me,pt,dCode;
var mediumSinhalaChecked=mediumEnglishChecked="";
var count=0;
dataRep['roleName']="";
var BulkNote01;
var TempBulkNote01;
var BulkNoteArr01= new Array();
var SelectedStudentData= new Array();
var datetime="";
var TempUser01="";
var SelectedStudentDatacount =0;
var LibraryId="";
var LibraryIdArr= new Array();
//-------------------------------------------------MAIN FUNCTION START---------------------------------------------
function form16DigitPaidList(dsp) {


		str = "";
		if(dataRep["roleName"]=="Subject Clerk"){
		title = "16 Digit Code Paid List - Registered Students";
		}
		else{
			title = "16 Digit Code Paid List - Registered Students";
		}
		if(dsp == "form16DigitPaidList") {

			str  = "<div id='form16DigitPaidList'>";
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";

			    str += "<input type='text'  name='searchApplicantName01'  id='searchApplicantName01' value= '' placeholder='Eg:PERERA' style='margin-left:900px;width:150px;' onchange='dataRep[this.name]=this.value;' >";		
				str += "<input type='text'  name='searchApplicant01'  id='searchApplicant01' value= '' placeholder='111111111V' style='width:100px;' onchange='dataRep[this.name]=this.value;' >";		
				str += '<input type="button"  class="btnB" id="search01"  value="search" disabled="disabled" style="background-Color:#ff6633;" onclick=serachApplicant01();>';	//buttondisable();			
				str +="</div></div><br/>";
			str += "<div>"
			str += '<h2 id="mainRequestTitle">'+title+'</h2><hr>';
			str += '<form name="maintainform16DigitPaidList"><br><br>';
			var role;
			var role1;
			var role2;
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					TempUser=use;
					dataRep['roleName']=roleNameArr[i];
					dataRep['departmentCode']=departmentCodeArr[i];
					dataRep['userName']=userNameArr[i];
					dataRep['programmeCode']=programmeCodeArr[i];
					//alert(dataRep['programmeCode']);
				}
		    
		   }
				if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator')
				{
				//alert("ok");
					var dcode= dataRep['departmentCode']
					role = "cordinator";
					
					 
					var pcode=dataRep['programmeCode']
					role = "cordinator";
				
				}
				else if(dataRep['roleName']=='Head of the Department' )
				{
					var dcode1= dataRep['departmentCode']
					role1 = "head";
					 
					var pcode1=dataRep['programmeCode']
					role1 = "head";
				}
				else{
				
					role2="other";
				}
			

			if (role== "cordinator")
			{
			//alert("yes");
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							 
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			else if (role1== "head")
			{
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							   
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			if (role2=="other")
			{
			if(dataRep['userName']=="ssdean" || dataRep['userName']=="ssar" || dataRep['userName']=="Asanka"){
				//alert(dataRep['userName']);
				programName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<studentNoLength; i++) {
							if(facultyCodeArr[i]=="FAC03" & degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
			}
			else if(dataRep['userName']=="SAR-GWAI"){
				//alert(dataRep['userName']);
				programName="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<studentNoLength; i++) {
							if(facultyCodeArr[i]=="FAC10" & degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
			}
			else{
							programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
				}
			}			
				str +="<div>";

			
			    if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Head of the Department' || dataRep['roleName']=='Technical Coordinator')
		        {
				str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += programName1;
				str += "</select>";	
				
		        }
				else{
				
				str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";						
				}
				str +="<div class='colon'>";
			
				dataRep['achedamicYear']="";
				str +="<div class='identifiers' style='width:100px;'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2021, 2030, 4, dataRep['achedamicYear']);
			
				str += "</select>";

				str +="<div class='rdo' style='float:center;position:relative;'>";//left:150px'
	            if(dataRep['selectMedium']== 'mediumSinhala'){
			         mediumSinhalaChecked = 'checked';
	            } else if(dataRep['selectMedium']=='mediumEnglish'){
			         mediumEnglishChecked = 'checked'}
		
		       str +="<input  type='radio'  name='selectMedium' id='mediumSinhala' value= 'mediumSinhala'";
		       str +=mediumSinhalaChecked;
		       str +=" onclick='dataRep[this.name]=this.value;getMediumSinhala16();'>Sinhala";
		       str +="<input  type='radio' name='selectMedium' id='mediumEnglish' value= 'mediumEnglish'";
		       str +=mediumEnglishChecked;
               str +=" onclick='dataRep[this.name]=this.value;getMediumEnglish16();'>English";//</div></div>
		       str += "</div>";
		       
				str += '<input type="button" style="float:center;position:relative;" class="btnB" value="View List" onclick=Reg16DigitStudentList();>';
                str += "</div>";
	           // str +="<br>";
				str +="<div>____________________________________________________________________________________________________________________________________________</div>";

				//str +="<div style='clear:both'>&nbsp;</div>"

		        if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar' || dataRep['roleName']=='SAR-GWAI')
		       {
				    // str += "<input type='button' class='btnB' value='Register' id='registerBtn16' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm("+'"addSelectedStudentList"'+");formRegisterBulkNotesendForm("+'"addBulkRegisterNotes"'+");>"; //printStudentIDNow();
				   // // str += '<input type="button" class="btnB" value = " Download" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = CompleteApplication();>';		           
				   	// str += "<input type='button' class='btnB' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote01' value='Add Note' onclick=generateBulkNote01();>";            
				    // str += '<input type = "button" class ="btnB" disabled="disabled" id="resetbtn" disable="disabled" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';				   
			    	// str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				    // str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

    

				str += '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				str += '<input type="button" class="btnB" value = "Download Paid Students List (16-Digit Code)" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = PaidListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				
			    str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				
				str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	




					
				}
				if (dataRep['roleName']=='Assistant Registrar')
		       {
					str += '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
					str += '<input type="button" class="btnB" value = "Download Paid Students List (16-Digit Code)" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = PaidListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				
					str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				
					str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
		        
				}
                 if(dataRep['roleName']=='Dean')
		        {
					str += '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				
					str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				
					str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	   
				}
				if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator') {
					
					str += '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
					str += '<input type="button" class="btnB" value = "Download Paid Students List (16-Digit Code)" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = PaidListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				
					str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				
					str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	   
				}
                str +="<div  id='list16' style='margin:clear:both'>";  
				str +="</div>";				
				str +="<div  id='registerBtn16' style='margin:clear:both'>";  
				str +="</div>";	
				//str += '<input type="button" class="btn" value = "Download" onclick = CompleteApplication();>';
                //str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';

				str +="</div>";

				str += '</form>';
				str += '</div>';
				str += "</div>";
				
				}
				
		return str;
}
//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 
 var temArr =new Array();
 var tNo=0;
 
 //-------------------------------------------------VIEW STUDENT LIST FUNCTION START---------------------------------------------
function Reg16DigitStudentList(){
		var rcount=0;
        dataRep["bcd"]=document.getElementById('selectedDegreeName').value;
        dataRep["bcd"]=document.getElementById('achedamicYear').value;
	    document.getElementById('registerBtn16').innerHTML = document.getElementById('registerBtn16').innerHTML.replace ="";  
	    document.getElementById('list16').innerHTML = document.getElementById('list16').innerHTML.replace="";
		var newStr ="<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
		newStr +="<tr style='background-Color:#ff9f80'>";
		newStr +="<th style='width:50px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'></font></div></th>";
		newStr +="<th style='width:220px;' align='center'><div class='investLabel_l' style='width:220px;'><font color='black'>Student Name</font></div></th>";
		newStr +="<th style='width:120px;' align='center'><div class='investLabel' style='width:120px;'><font color='black'>NIC</font></div></th>";
		newStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Student No &nbsp;&nbsp;</font></div></th>";
		//newStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Library Id &nbsp;&nbsp;</font></div></th>";
		
		//if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='SAR' || dataRep['roleName']=='SAR-GWAI'){
		//newStr +="<th style='width:50px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'>Register</font></div></th>";
		//}
		//newStr +="<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Transfer Detaills</font></div></th>";
		//newStr +="<th style='width:170px;' align='center'><div class='investLabel' style='width:170px;'><font color='black'>Notes</font></div></th>";
		//newStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'></font></div></th>";
		//newStr +="<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>medium</font></div></th>";
		
		newStr +="</tr>";
		for( var i=0; i<studentNoLength; i++){
		  if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
		// if (dTitle == degreeTitleArr[i] &&  achedamicYearArr[i]== document.getElementById('achedamicYear').value && ){  
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && mediumArr[i]==md){//  && mediumArr[i]==md && registeredstudentNoArr[i] !=""	
		     //alert(registeredstudentNoArr[i]);
			temArr[tNo] =i;
			tNo++;
			rcount++;
			if(rcount%2==0){
            newStr +="<tr style='background-Color:#ffece6;>";}
			else{
			newStr +="<tr style='background-Color:#ffd9cc;>";}
			
			newStr +="<div class='info' id='Alist"+i+"'  name='testInfo"+i+"'>";				
			newStr += "<td style='width:50px;' align='center'><div style='width:50px;' class='investView' name='rc"+i+"' id='rc"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+rcount+"</div></td>";
			newStr += "<td style='width:220px;' align='center'><div style='width:220px;' class='investView_l' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div></td>";
			newStr += "<td style='width:120px;' align='center'><div style='width:120px;' class='investView' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
            // if(registeredStudentArr[i]=='tr' || registeredStudentArr[i]=='dg' || registeredStudentArr[i]=='sp'){
			// newStr += "<td style='width:185px;' align='center'><div style='width:185px;' class='investView' name='studentRegistrationNumber"+i+"' id='studentRegistrationNumber"+i+"' >";
			// newStr += '<input type="text"  disabled="disabled" style="width:180px;background-Color:#59b300;" name="studentNo'+i+'" value="'+registeredstudentNoArr[i]+'" id="studentNo'+i+'";>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>&nbsp;&nbsp;';
			
			// //newStr += "<td style='width:185px;' align='center'><div style='width:185px;' class='investView' name='studentLibraryId"+i+"' id='studentLibraryId"+i+"' >";
			// //newStr += '<input type="text"  disabled="disabled" style="width:180px;background-Color:#59b300;"  name="SLibraryId'+i+'"  id="SLibraryId'+i+'";>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>&nbsp;&nbsp;';
			
			// }
			// else{
				
				
			// newStr += "<td style='width:185px;' align='center'><div style='width:185px;' class='investView' name='studentRegistrationNumber"+i+"' id='studentRegistrationNumber"+i+"' >";
			// newStr += '<input type="text"  disabled="disabled" style="width:180px;" name="studentNo'+i+'" value="'+studentNoArr[i]+'" id="studentNo'+i+'";>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td>&nbsp;&nbsp;';				
			
			newStr += "<td style='width:185px;' align='center'><div style='width:185px;' class='investView' name='studentRegistrationNumber"+i+"' id='studentRegistrationNumber"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNoArr[i]+"</div></td>";
			
			
			
			
			//}
            // count= registeredstudentNoArr[i];
			// if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='SAR' || dataRep['roleName']=='SAR-GWAI'){
			// var checkBoxDivIdRegistered = 'checkRegistered'+i;
				// if(document.getElementById(checkBoxDivIdRegistered)){
					// if(document.getElementById(checkBoxDivIdRegistered).checked){
						// registeredChecked='checked';
					// }
				// }
			// if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='SAR' || dataRep['roleName']=='SAR-GWAI'){
			// newStr += "<td style='width:50px;' align='center'><div  style='width:50px;' class='investView' style='text-align:center' name='registered"+i+"' id='registered"+i+"'>";
			// newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"'disabled='disabled' name='checkRegistered"+i+"' onchange='generateStudentNo(this);dataRep[this.name]=this.value; ' />";//AddRowColorStudentList(Alist"+i+", this)
			// newStr += "</div></td>";
			// }
            // }
			// if(registeredStudentArr[i]=='tr' || registeredStudentArr[i]=='dg'|| registeredStudentArr[i]=='sp' ){
			   	// for( var q=0; q<transferIDLength; q++){
                // if (transferIDArr.indexOf(transferIDArr[q]) == transferIDArr.lastIndexOf(transferIDArr[q]) || (transferIDArr.indexOf(transferIDArr[q]) != transferIDArr.lastIndexOf(transferIDArr[q]) && transferIDArr.indexOf(transferIDArr[q])==q)){
			    // if(registeredstudentNoArr[i]==oldStudentNoArr[q] ){
                 // if(registeredStudentArr[i]=='tr'){
				 // var transferDetails= studentNoArr[q];
				 // }else{
				 // var transferDetails= transferTypeArr[q];	 
				 // }
				
				// }
				// }
				// }
				// newStr += "<td style='width:170px;' align='center'><div class='investView' style='width:170px;'>";//<textarea rows='auto' disabled='disabled' name='notes"+i+"' value='Transfer' id='notes"+i+"' style='width:80%;float:left;' value="+transferDetails+"  onchange='dataRep[this.name]=this.value'>
			    // if(registeredStudentArr[i]=='tr'){
				// newStr +=  'New Student No</br>'+transferDetails+'</div></td>';
				// }else if(registeredStudentArr[i]=='sp'){
				// newStr +=  'Special Transfer</br>'+transferDetails+'</div></td>';		
				// }else{
				// newStr +=  'Degrade Degree</br>'+transferDetails+'</div></td>';	
				// }
			// }
			// else{
				// newStr += "<td style='width:150px;' align='center'><div class='investView' style='width:150px;'>";//<textarea rows='auto' disabled='disabled' name='notes"+i+"' value='Transfer' id='notes"+i+"' style='width:80%;float:left;' value="+transferDetails+"  onchange='dataRep[this.name]=this.value'>
			    // //newStr += 'Not Transfer</div></td>';
				// newStr += '</div></td>';
			// }
		
			
			//newStr +='<td style="width:100px;" align="center"><div style="width:100px;" class="investView"><img src="pic/'+studentNICArr[i]+'.jpg" width="70" height="85"  alt=""/></div></td>';
			
		//	newStr +='<td style="width:100px;" align="center"><div style="width:100px;" class="investView">(<img src="studentPhotos/pic/'+studentNICArr[i]+'.jpg" width="70" height="85"  alt=""/>)</div></td>';
			
			
			newStr +="</div>";
			newStr +="</tr>";
	    }
		}		
	}
	//if (dataRep['roleName']=='Subject Clerk'){
	// for( var i=rcount+1; i<applicationNoArr.length; i++){
		
		// if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && studentNoArr[i]=="" && mediumArr[i]==md){	//
			// // if(mediumArr[i]==md)
			// // {
			// temArr[tNo] =i;
			// tNo++;
			// rcount++;
			// if(rcount%2==0){
            // newStr +="<tr style='background-Color:#ffece6;>";}
			// else{
			// newStr +="<tr style='background-Color:#ffd9cc;>";}			
			// newStr +="<div class='info' id='Alist"+i+"'  name='testInfo"+i+"'>";

			// newStr += "<div class='hideLabel'>";
			// newStr += universityCodeArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += facultyCodeArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += programmeTypeCodeArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += degreeCodeArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentInitialArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentDateofbirthArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentEmploymentArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentOfficeAddressArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentContactLanArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentContactMobileArr[i];
			// newStr +="</div>";
			// newStr += "<div class='hideLabel'>";
			// newStr += studentContactEmailArr[i];
			// newStr +="</div>";
			// newStr += "<td style='width:50px;' align='center'><div style='width:50px;' class='investView' name='rc"+i+"' id='rc"+i+"'";
			// newStr += " onchange='dataRep[this.name]=this.value;'>"+rcount+"</div></td>";
			// newStr += "<td style='width:220px;' align='center'><div class='investView_l' style='width:220px;'name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			// newStr += studentInitialArr[i]+"</div></td>";
			// newStr += "<td style='width:120px;' align='center'><div class='investView' style='width:120px;' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			// newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			// newStr += "<td style='width:185px;' align='center'><div class='investView' style='width:185px;' name='studentRegistrationNumber"+i+"' id='studentRegistrationNumber"+i+"' >";
			// newStr += '<input type="text" style="width:180px" name="studentNo'+i+'" id="studentNo'+i+'";></div></td>&nbsp;&nbsp;';
			// var checkBoxDivIdRegistered = 'checkRegistered'+i;
				// if(document.getElementById(checkBoxDivIdRegistered)){
					// if(document.getElementById(checkBoxDivIdRegistered).checked){
						// registeredChecked='checked';
					// }
				// }
			// if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='SAR' || dataRep['roleName']=='SAR-GWAI'){
			// newStr += "<td style='width:50px;' align='center'><div  class='investView' style='width:50px;' name='registered"+i+"' id='registered"+i+"'>";
			// newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"' name='checkRegistered"+i+"' onchange='generateStudentNo(this);dataRep[this.name]=this.value;' />";//AddRowColorStudentList(Alist"+i+", this)
			// newStr += "</div></td>";
			// }			
			// newStr += "<td style='width:150px;' align='center'><div class='investView' style='width:150px;'><textarea rows='auto' name='notes"+i+"'  id='notes"+i+"' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
			// newStr +=" </textarea></div></td>";	
			// newStr +='<td style="width:100px;" align="center"><div class="investView" style="width:100px;"><img src="pic/'+studentNICArr[i]+'.jpg" width="70" height="85"  alt=""/></div></td>';
			// //newStr +="</div>";
			// //newStr +='<td style="width:100px;" align="center"><div class="investView" style="width:100px;">'+mediumArr[i]+'</div></td>';
			// newStr +="</div>";
			// newStr +="</tr>";
			// }
			// }
	// }
	//}
	//newStr +="<tr colspan=7>";
	//newStr +="<td text-align='center' colspan=7 >";//<div'>
	//newStr += '<input type="text"  disabled="disabled" style="width:20px;background-Color:#59b300;height:20px" >:Transfer Students';
    //newStr +="</td>";//</div>
	//newStr +="</tr>";
    newStr +="</table></br>";

	//newStr +="</div>";
	if(rcount>=10){
		    if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar' || dataRep['roleName']=='SAR-GWAI')
		    {
				// var newStr1 = "<input type='button' class='btnB' value='Register' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm("+'"addSelectedStudentList"'+");formRegisterBulkNotesendForm("+'"addBulkRegisterNotes"'+");>"; //printStudentIDNow();
				// //newStr1 += '<input type="button" class="btnB" value = " Download" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = CompleteApplication();>';		           
				// newStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' onclick=generateBulkNote01();>";      

				var newStr1 = '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';	
				
				// newStr1 += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm('+"'data4GetPaid16DigitList'"+');sendForm('+"'data4checkUserPaid16DigitList'"+');sendForm('+"'data4return16DigitList'"+');">';	
				
			    newStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				newStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		        
			}
			if (dataRep['roleName']=='Assistant Registrar')
		    {
				var newStr1 = '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';		           
				
				// newStr1 += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';					
			   // newStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick = refreshStudentList();showMenu('+"'formDeanMenu'"+');>';	    
				//newStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		        
				newStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu('+"'main'"+');>';
				newStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		        
			}
            if(dataRep['roleName']=='Dean')
		    {
				var newStr1 = '<input type="button" class="btnB" value = "Download Attendence Sheet" style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';		           
				
				// newStr1 += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';					
			    newStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick = refreshStudentList();showMenu('+"'main'"+');>';	    
				newStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		        
		    }
			if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
				   var newStr1 = '<input type="button" class="btnB" value = "Download Attendence Sheet"  id="getlistbtn"  style="background-Color:#ff6633;padding-right:35px;height:30px;" onclick = AttendListDown16();><img style="background-Color:#ff6633;margin-left:-32px;margin-bottom:-9px;height:25px;" src="img/DownloadImg.png"/></input>';		           
				   
				   // newStr1 += '<input type = "button" class ="btnB" value="Reset"  id="resetbtn" disable="disabled" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';					
			      
				  newStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick = refreshStudentList();showMenu('+"'main'"+');>';
				  
				   newStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		        
			}
	    document.getElementById('registerBtn16').innerHTML += newStr1;  
	}	
	document.getElementById('list16').innerHTML += newStr;
}
 //-------------------------------------------------VIEW STUDENT LIST FUNCTION END---------------------------------------------

 //-------------------------------------------------ADD ROW COLOURS FUNCTION START---------------------------------------------

 function AddRowColorStudentList(x, _this) {
		if (changeRow==1)
		{
			changeRow=0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		
		}
		else
		{
			changeRow++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		
		}
}
 //-------------------------------------------------ADD ROW COLOURS FUNCTION END---------------------------------------------

var tempNo="";
var md;
var counttimes=0;
 //-------------------------------------------------RESET DATA FUNCTION START---------------------------------------------

function resetdata()
{
	studentNoLength=0;
	count=0;
	counttimes=0;
	rcount=0;
}
//-------------------------------------------------RESET DATA FUNCTION END---------------------------------------------

//-------------------------------------------------GET SINHALA MEDIUM FUNCTION START---------------------------------------------

function getMediumSinhala16()
{
   md='si';
}
//-------------------------------------------------GET SINHALA MEDIUM FUNCTION END---------------------------------------------

//-------------------------------------------------GET ENGLISH MEDIUM FUNCTION START---------------------------------------------

 function getMediumEnglish16()
 {
	 md='en';
 }
//-------------------------------------------------GET ENGLISH MEDIUM FUNCTION END---------------------------------------------

//-------------------------------------------------GENERATE STUDENT NO FUNCTION START---------------------------------------------
//function generateStudentNo(sNo)
// {
	// counttimes++;
	// var ans=libpt=libdcode=libyr=tempDcodetest=tempPttest="";
	// if(counttimes==1 && md=='si' && count!=""){
		    // count=(count.split("/",5)[count.split("/",5).length-1]);
	// }
    // if(counttimes==1 && md=='en' && count!=""){
       // count=(count.split("/",5)[count.split("/",5).length-1]);
       // count = count.slice(0,3); 
	// }

	// var adID = sNo.id;
	// var lastChar = adID.substr(adID.indexOf("checkRegistered") + 15);
	// var dTitle = document.getElementById('selectedDegreeName').value;
	// var yr= document.getElementById('achedamicYear').value;

	// if (document.getElementById(adID).checked == false){
	   // tempNo=document.getElementById('studentNo'+lastChar).value;
	   // document.getElementById('studentNo'+lastChar).value="";
	   // LibraryIdArr[lastChar]="";
	   // //alert(lastChar);
	// }
	// if (document.getElementById(adID).checked == true){

	    // for( var i=0; i<applicationNoArr.length; i++){
			
	      // if (dTitle == degreeTitleArr[i]){
			  // //alert(dTitle);
			 // // alert(degreeTitleArr[i]);
	        // pt = programmeTypeTitleArr[i];
			// tempPttest=programmeTypeTitleArr[i];
		    // dCode = degreeCodeArr[i];
		    // //dCode = degreeCodeArr[i];//why ????????????????? 
			// tempDcodetest=degreeCodeArr[i];
		    // var tempdCode= degreeCodeArr[i];
	      // }
	    // }
	// //alert(dCode);
	    // if (tempNo!= ""){
		   // document.getElementById('studentNo'+lastChar).value=tempNo;
		   // tempNo="";
	    // }
		// else{
           // count++;
		   
		   // if(pt!=dCode){
		   // if(pt=='MA'){
			  // dCode = dCode.substr(dCode.indexOf("MA") + 2);  
		   // }
		   // else if(pt=='MSSC'){
			   
			  // dCode = dCode.substr(dCode.indexOf("MSSC") + 4); 
		   // } 
			// else if(dCode=='MBA'){
			   
			  // pt = "MBA"; 
		   // }
			// else if(dCode=='MSCIEC'){
			   
			  // pt = "MSc"; 
		   // }
		   // // else if(dCode=='PGDM'){
			   
			  // // pt = "PGDM"; 
		   // // }
		   
		   // else{
			   // //alert(dCode);
			 	// var x = dCode.split(pt);
	            // dCode= x[1];  
				// // alert(dCode +"2");
		   // }
		   
		   // }
	       // //if(pt!=dCode)
	        // //{
		      // // var x = dCode.split(pt);
	          // // dCode= x[1];
	        // //}

	        // if (dCode== undefined)
	        // {
		       // dCode=tempdCode;
	        // }
	        // var str = "" + count;
            // var pad = "000"
	        // if (dTitle == 'MA Degree in Mass Communication')
	        // {
			    // dCode='MACO';
	        // }
            // if (dTitle == 'MSSc Degree in Mass Communication')
	        // {
			  // dCode='MACO';
			  // pt='MSSC';
	        // }
			// if (dTitle == 'Postgraduate Diploma in Marketing')
	        // {
			  // dCode='PGDM';
			  // //pt='MSSC';
	        // }
			// if (dTitle == 'Postgraduate Diploma in Kayacikitsa')
	        // {
			  // dCode='PGDKY';
			  // //pt='MSSC';
	        // }
			// if (dTitle == 'Postgraduate Diploma in Pancakarma')
	        // {
			  // dCode='PGDPN';
			  // //pt='MSSC';
	        // }
			// if (dTitle == 'Postgraduate Diploma in Management and Administration of Ayurveda Institutions')
	        // {
			  // dCode='PGDMAAI';
			  // //pt='MSSC';
	        // }
            // ans = pad.substring(0, pad.length - str.length) + str
	        // if(dCode=='MHRM' || dCode=='MCom' || dCode=='MBus' || dCode=='MBA' || dCode=='DBA' || dCode=='PGDM' || dCode=='PGDIT' || dCode=='MBM' || dCode=='PGDKY' || dCode=='PGDMAAI' || dCode=='PGDPN')
	        // {
				// //alert("yes");
		      // document.getElementById('studentNo'+lastChar).value='FGS/'+dCode+'/'+yr+'/'+ans;
			  // for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
	        // }
		    // else if(pt=='MHRM')
	        // {//alert("ok");
		      // document.getElementById('studentNo'+lastChar).value='FGS/'+dCode+'/'+yr+'/'+ans;
			  // for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
	        // }
			// else if(pt=='MCom' || pt=='MBus')
	        // {//alert("ok2222");
		      // document.getElementById('studentNo'+lastChar).value='FGS/'+dCode+'/'+yr+'/'+ans;
			  // for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
	        // }
			// else if(pt=='MBA')
	        // {//alert("ok333");
		      // document.getElementById('studentNo'+lastChar).value='FGS/'+dCode+'/'+yr+'/'+ans;
			  // for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
	        // }

			// else if(pt=='MSc')
	        // {//alert("ok333");
		// var newDegreeCode;
		// if(dCode.substring(0,3)=="MSC"){
				// newDegreeCode= dCode.substring(3,8);
			// //	alert(newDegreeCode);
				// //ApplicationNo="MA/"+newDegreeCode+'/'+lang+'/'+yr+'/'+tempNo;
			// }
		
		      // document.getElementById('studentNo'+lastChar).value='FGS/'+pt+'/'+newDegreeCode+'/'+yr+'/'+ans;
			  // for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
	        // }
			
			// else{
				// //alert(pt);
				// //alert(md);
		      // if (md=='si'){
				 // // alert("si");
		            // document.getElementById('studentNo'+lastChar).value='FGS/'+pt+'/'+dCode+'/'+yr+'/'+ans;
					
					// //teting lib code
					// //alert(tempDcodetest+"- -"+libdegreecode);
					 // for( var n=0; n<libraryCodeLenth; n++){
						 // // alert();
						 
					// if (pt==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					 // }
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
					// //alert(pt+dCode+yr+ans);
					
	          // }else{
				 // // alert("No");
		            // document.getElementById('studentNo'+lastChar).value='FGS/'+pt+'/'+dCode+'/'+yr+'/'+ans+'E';
					// //teting lib code
					// for( var n=0; n<libraryCodeLenth; n++){
						// // alert(pt);
						// // alert(libptcode[n]);
					// if (tempPttest==libptcode[n]){
						// libpt=newlibptcode[n]; //
					// }
					// if (tempDcodetest==libdegreecode[n])
					// {
						// libdcode=newlibdegreecode[n];
					// }
					// libyr=yr.substring(3,4);
					
					 // }
					 // if (libdcode=="DB")
					 // {						 
					
					// LibraryId="DB"+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
					 // }
					 // else
					 // {						
				
					// LibraryId=libpt+libdcode+libyr+ans;
					// LibraryIdArr[lastChar]=LibraryId;
					// //alert(LibraryId);//document.getElementById('SLibraryId'+lastChar).value=LibraryId;
					 // }
	          // }
	        // }
	    // }
	// }	
// }
//-------------------------------------------------GENERATE STUDENT NO FUNCTION END---------------------------------------------
	
	
	
//-------------------------------------------------REFRESH STUDENT LIST FUNCTION START---------------------------------------------
	
function refreshStudentList(){
    studentNoLength=0;
	dataRep['selectMedium']="";
	count=0;
	counttimes=0;
	rcount=0;
	
	
}
//-------------------------------------------------REFRESH STUDENT LIST FUNCTION END---------------------------------------------
	
//-------------------------------------------------REGISTER STUDENT SENDFORM FUNCTION START---------------------------------------------
	
// function formSelectedStudentListsendForm(frm){

	// var doc, dataStr;

		// if(frm.substring(0,3)=="add"){
			// dataStr = "action=add";
		// } else if(frm.substring(0,6)=="update"){
				// dataStr = "action=update";
		// } else if(frm.substring(0,6)=="delete"){
				// dataStr = "action=delete";
		// } else if(frm.substring(0,6)=="search"){
				// dataStr = "action=get";
		// }

		// if(frm == 'addSelectedStudentList'){
 
			// doc = document.maintainformSelectedStudentList;
			// dataStr += "&interface="+frm;
			// var newStr ="";
			
			
			// var dd = new Date();
			// var d = dd.getUTCDate(); 
			// var m = dd.getUTCMonth();
			// var y = dd.getUTCFullYear();
			// var mn=m+1;
			// var currentdate = y+"-"+mn+"-"+d;

			// newStr += "&achedamicYear="+document.getElementById('achedamicYear').value;
			// newStr += "&medium="+md;
			// //alert(md);
			// //alert(document.getElementById('achedamicYear').value);
			// for(var k=0; k<applicationNoArr.length; k++){
				// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[k]  & document.getElementById('achedamicYear').value==achedamicYearArr[k] ){
                // if(document.getElementById('checkRegistered'+k)){
			    // if(document.getElementById('checkRegistered'+k).checked == true){
				
					// newStr +="&universityCode="+universityCodeArr[k]+"&facultyCode="+facultyCodeArr[k]+"&programmeTypeCode="+programmeTypeCodeArr[k]+"&degreeCode="+degreeCodeArr[k]+"&studentNIC="+studentNICArr[k]
							// +"&applicationNo="+applicationNoArr[k]+"&studentName="+studentNameArr[k]+"&studentPersonalTitle="+studentPersonalTitleArr[k]+"&studentInitial="+studentInitialArr[k]
							// +"&studentDateofbirth="+studentDateofbirthArr[k]+"&studentEmployment="+studentEmploymentArr[k]+"&studentPermanentAddress="+studentPermanentAddressArr[k]
							// +"&studentOfficeAddress="+studentOfficeAddressArr[k]+"&studentContactLan="+studentContactLanArr[k]+"&studentContactMobile="+studentContactMobileArr[k]+"&studentContactEmail="+studentContactEmailArr[k];

							
					// newStr += "&studentNo="+document.getElementById('studentNo'+k).value;	
					// //alert(LibraryIdArr[k]);
					
					// //LibraryIdArr[k]=LibraryId;
					// newStr += "&LibraryIdCode="+LibraryIdArr[k];
					
					// newStr += "&registered="+"yes";
					// newStr += "&notes="+document.getElementById('notes'+k).value;
					// newStr += "&RegisteredDate="+currentdate;
					// SelectedStudentData[k]= dataStr + newStr;
					// //SelectedStudentDatacount++;
				// //alert(SelectedStudentData);
				// }
				// }
			    // }

				// //alert(degreeCodeArr[k]);
			// }
    // //---------------------------------------------------------add bulk notes--------------------------------
         	// var checkNotes01=0;
			// for(var k=0; k<applicationNoArr.length; k++){
				// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[k]  & document.getElementById('achedamicYear').value==achedamicYearArr[k] ){
                // if(document.getElementById('checkRegistered'+k)){
			    // if(document.getElementById('checkRegistered'+k).checked == true){  
			    // if(document.getElementById('notes'+k).value !=" "){
			  // checkNotes01++;
			 // }
			// }
			// }
			// }
			// }
		   // if(BulkNote01!=" " || checkNotes !=0){
			
			// for(var k=0; k<applicationNoArr.length; k++){
				// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[k]  & document.getElementById('achedamicYear').value==achedamicYearArr[k] ){
                // if(document.getElementById('checkRegistered'+k)){
			    // if(document.getElementById('checkRegistered'+k).checked == true){

					// currentdate = new Date(); 
                    // datetime =  + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" 
                    // + currentdate.getFullYear() + "/"  
                    // + currentdate.getHours() + "/"  
                    // + currentdate.getMinutes() + "/" 
                    // + currentdate.getSeconds();

					// if(document.getElementById('notes'+k).value !=" "&& TempBulkNote01!=undefined){
					// newStr1 = "action=add";
			        // newStr1 += "&interface="+"addBulkRegisterNotes";
					// newStr1 +="&messageId="+datetime;		
					// newStr1 += "&referenceNo="+document.getElementById('studentNo'+k).value;
					// newStr1 += "&userId="+TempUser01;
					// newStr1 += "&message="+TempBulkNote01+"/"+document.getElementById('notes'+k).value;	
                    // BulkNoteArr01[k]= newStr1;					
					// }
					// else if(document.getElementById('notes'+k).value !=" "&& TempBulkNote01 ==undefined){
					// newStr1 = "action=add";
			        // newStr1 += "&interface="+"addBulkRegisterNotes";
					// newStr1 +="&messageId="+datetime;		
					// newStr1 += "&referenceNo="+document.getElementById('studentNo'+k).value;
					// newStr1 += "&userId="+TempUser01;
					// newStr1 += "&message="+document.getElementById('notes'+k).value;	
					// BulkNoteArr01[k]= newStr1;
					// }
					// else if(TempBulkNote01!=undefined){
					// newStr1 = "action=add";
			        // newStr1 += "&interface="+"addBulkRegisterNotes";
					// newStr1 +="&messageId="+datetime;
							
					// newStr1 += "&referenceNo="+document.getElementById('studentNo'+k).value;
					// newStr1 += "&userId="+TempUser01;
					// newStr1 += "&message="+TempBulkNote01;	
					// BulkNoteArr01[k]= newStr1;
					// }
				     
				// }    					 
			    // }

				// }
				
			// }
			// }
			// //alert(SelectedStudentData);
			// for(var j=0; j<applicationNoArr.length; j++){						
				// if(SelectedStudentData[j] != ""){
					// isrHandle.getDataFromDB(eval("clientController"), "serverController.php",SelectedStudentData[j]);
						// //isrHandle.getDataFromDB(eval("clientController"), "serverController.php",updateDataArray[j]);									
						// dataRep['selectMedium']="";
						// dataRep['selectMedium']="";
	                    // counttimes=0;
				// }
			// }		
		// } 
		// return 0;
		
// }
//-------------------------------------------------REGISTER STUDENT SENDFORM FUNCTION END---------------------------------------------

//-------------------------------------------------SEND BULKNOTES FUNCTION START--------------------------------------------
// function formRegisterBulkNotesendForm(frm){				
            // for(var i=0; i<BulkNoteArr01.length; i++){
				// if (BulkNoteArr01[i]!=undefined)
				// {
					// //alert(BulkNoteArr01[i]);
				  // isrHandle.getDataFromDB(eval("clientController"), "serverController.php",BulkNoteArr01[i]); 
				// }
			// }
	// return 0;
		
// }
//-------------------------------------------------SEND BULKNOTES FUNCTION START--------------------------------------------


//-------------------------------------------------COMPLETE APPLICATION FUNCTION START---------------------------------------------

// function CompleteApplication(){
 // count=1;
	// var Rcount=1;
	// if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	// alert("Please Select Programm and the Year.");
	// }
    // else{
            // // for(var i=0; i<applicationNoLength; i++){
		    // // if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
			// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
			// newStr +="<div id='topics1' class='info'></div>";
			// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
		    // newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
            // newStr +="<br>";
			// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			// newStr +="<tr style='border: 1px solid black;'>";
			// newStr +="<th style='border: 1px solid black;'>No</th>";
			// newStr +="<th style='border: 1px solid black;'>Application No</th>";
			// newStr +="<th style='border: 1px solid black;'>Name With Initial</th>";
			// newStr +="<th style='border: 1px solid black;'>Address</th>";
			// // newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
			// // newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
			// // newStr +="<th style='border: 1px solid black;'>Email</th>";
			// newStr +="</tr>";  
            
			// for( i=0; i<applicationNoLength; i++){
		    // if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	
            // //alert("test");
		    // //if(medium1Arr[i] == "en"){
			// // for( i=0; i<studentNoLength.length; i++){
	        // // if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			// // if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            // // newStr +="<div class='info'   name='testInfo"+i+"'>";
			// newStr +="<tr style='border: 1px solid black;'>";
			// newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			// newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
	        // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
	        // newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
            // //newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'/'+studentContactMobileArr[i]+'</td>';
            // //newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			// //newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';
			// //for( i=0; i<applicationNoLength; i++){
			// //newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+fieldNameArr[i]+'-'+fieldValueArr[i]+'</td>';
			// //}
			// newStr +="</tr>";
			// newStr += "</div><dev><br>"; 
			// count++;
			// }
			// //}
			// //}				
			// //}
			// //}
		    // //}
		    // }	 
	        // }
	// newStr +="</table>";
	// }	
    // var csvData = new Array();
	
	// csvData.push(newStr);
	// // download stuff 
	// var fileName = "data.";
	// var buffer = csvData.join("\n");
	// var blob = new Blob([buffer], {
	  // "type": "text/doc;charset=utf8;"			  
	// });
	// var link = document.createElement("a");
				
	// if(link.download !== undefined) { // feature detection
	  // // Browsers that support HTML5 download attribute
	  // link.setAttribute("href", window.URL.createObjectURL(blob));
	  // link.setAttribute("download", fileName);
	 // }
	// else {
	  // // it needs to implement server side export
	  // link.setAttribute("href", "http://www.example.com/export");
	// }
	// //link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	// //document.getElementById('btnContainer').appendChild(link);
	// //document.body.appendChild(link);
	// link.innerHTML = "";
	// document.body.appendChild(link);
	// window.location.replace(link);		
// }

//-------------------------------------------------COMPLETE APPLICATION FUNCTION END---------------------------------------------

//-------------------------------------------------DEAN LIST DOWNLOAD FUNCTION START----------------------------------------------

function AttendListDown16(){
 
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
        
		var count=1;
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Registered Student List</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Course Unit:</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Date:</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Lecturer's Name:</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;'>No</th>";
				newStr +="<th style='border: 1px solid black;'>Name</th>";
				newStr +="<th style='border: 1px solid black;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;'>Student NIC</th>";
				newStr +="<th style='border: 1px solid black;'>Contact No</th>";
				newStr +="<th style='border: 1px solid black;'>Email</th>";
				newStr +="<th style='border: 1px solid black;'>Address</th>";
				newStr +="<th style='border: 1px solid black;'>Library ID</th>";
				newStr +="<th style='border: 1px solid black;'>Signature</th>";
			newStr +="</tr>"; 


			for( var i=0; i<studentNoLength; i++){
		   if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && mediumArr[i]==md){          
			
			
				newStr +="<tr>";
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+count+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentPersonalTitleArr[i]+". "+studentInitialArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';//studentNICArr
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentContactMobileArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentContactEmailArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentPermanentAddressArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+librarycodeArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr +="</tr>";
				newStr += "</div><dev><br>"; 
				
				count++;

			}
			
		   }	 
	        }
	newStr +="</table>";
	newStr +="<br>";
	}


	var exportFilename = "Attendence Sheet.doc";
	var csvData = new Blob([newStr], {type: '.ms-word;charset=utf-8;'});	


	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvData, exportFilename);
	} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvData);
		link.setAttribute('download', exportFilename);
		document.body.appendChild(link);    
		link.click();
		document.body.removeChild(link);    
	}

	
}


function PaidListDown16(){
 
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{	
        
		var count=1;
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Registered Student List</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Course Unit:</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Date:</div>";
		//newStr +="<div class='investLabel' style='font-weight:bold;'>Lecturer's Name:</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;'>No</th>";
				newStr +="<th style='border: 1px solid black;'>Name</th>";
				newStr +="<th style='border: 1px solid black;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;'>Student NIC</th>";
				newStr +="<th style='border: 1px solid black;'>Contact No</th>";
				newStr +="<th style='border: 1px solid black;'>Email</th>";
				newStr +="<th style='border: 1px solid black;'>Address</th>";
				newStr +="<th style='border: 1px solid black;'>Paid Amount</th>";
				//newStr +="<th style='border: 1px solid black;'>Library ID</th>";
				//newStr +="<th style='border: 1px solid black;'>Signature</th>";
			newStr +="</tr>"; 


			for( var i=0; i<studentNoLength; i++){
		   if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && mediumArr[i]==md){          
			
			
				newStr +="<tr>";
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+count+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentPersonalTitleArr[i]+". "+studentInitialArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';//studentNICArr
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentContactMobileArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentContactEmailArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentPermanentAddressArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+studentPaidAmountArr[i]+'</td>';
				//newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">'+librarycodeArr[i]+'</td>';
				//newStr+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr +="</tr>";
				newStr += "</div><dev><br>"; 
				
				count++;

			}
			
		   }	 
	        }
	newStr +="</table>";
	newStr +="<br>";
	}


	var exportFilename = "Attendence Sheet.doc";
	var csvData = new Blob([newStr], {type: '.ms-word;charset=utf-8;'});	


	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvData, exportFilename);
	} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvData);
		link.setAttribute('download', exportFilename);
		document.body.appendChild(link);    
		link.click();
		document.body.removeChild(link);    
	}

	
}
//-----------------------------------------------------DEAN LIST DOWNLOAD FUNCTION END---------------------------------

//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION START-------	
// function generateBulkNote01() {
// if (TempBulkNote01==undefined)
 // {
     // BulkNote01 = prompt("Please enter Note", "");
     // TempBulkNote01=BulkNote01;
 
 // }  
// else{
    // BulkNote01 = prompt("Please enter Note", TempBulkNote01 );
    // if (BulkNote01!=null){
    // TempBulkNote01=BulkNote01;
// }
     
// } 


// }
//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION END-------	

//--------------------------------------------------------SEARCH FUNCTION START--------------------------------------------
function serachApplicant01()
{
	
	var countSearch=0;
    var c=0;
	var appNIC=document.getElementById('searchApplicant01').value;
	var tempName=document.getElementById('searchApplicantName01').value;
		for( var i=0; i<applicationNoArr.length; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
		if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && studentNoArr[i]==""){
		if(document.getElementById('studentNIC'+i)){	
                 c++;
                 if (c%2==0)
                 {
                   document.getElementById('Alist'+i).style.backgroundColor='#ffece6';  
      			   //document.getElementById('Namebtn'+i).style.backgroundColor='#ffece6';                  
                 } 
                 else{
                   document.getElementById('Alist'+i).style.backgroundColor='#ffd9cc';
				   //document.getElementById('Namebtn'+i).style.backgroundColor='#ffd9cc'; 
                }

			}
			}
				
		}
	}
    var check=0;
		for( var i=0; i<applicationNoArr.length; i++){
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
		if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && studentNoArr[i]==""){
			if(document.getElementById('searchApplicantName01').value!="" & document.getElementById('searchApplicant01').value!=""){
			if (studentNICArr[i]==appNIC & studentInitialArr[i].indexOf(tempName) != -1){
                check++;
				countSearch++;
                document.getElementById('Alist'+i).style.backgroundColor='#ccffeb';
			    //document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb'; 
			}
			}
			else{
			if((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check==0) || (studentNICArr[i]== appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check==0)  ){
                countSearch++;
				document.getElementById('Alist'+i).style.backgroundColor='#ccffeb';
				//document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb';
			}
			}
			}
				
		}
	}
	if(countSearch ==0){
			alert('There is No Matching Data');
	}
}
//--------------------------------------------------------SEARCH FUNCTION END-----------------------------------------------

//------------------------------------------------------BUTTON DISABLED FUNCTION START---------------------------------
// function btndisabledreStudent16(){
	   
	// document.getElementById("search01").disabled=false;
	// //document.getElementById("resetbtn").disabled=false;
	
	// if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='SAR' || dataRep['roleName']=='SAR-GWAI'){
		// document.getElementById("registerBtn16").disabled=false;
		// document.getElementById("AddNote01").disabled=false;	

    // }
		// // if (dataRep['roleName']=='Assistant Registrar'){
		// // document.getElementById("registerBtn16").disabled=false;
		// // document.getElementById("AddNote01").disabled=false;	

    // // }
	// else{
		// //document.getElementById("getlistbtn").disabled=false;		
	// }
// }
//------------------------------------------------------BUTTON DISABLED FUNCTION END---------------------------------
/*function getstudentlist(){

	var count=1;
	var Rcount=1;
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";

					newStr +="</tr>";  
            
			for( i=0; i<applicationNoArr.length; i++){
			if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] && document.getElementById('studentNo'+i).value !="" ){	

		
			
				
			// for( i=0; i<studentNoLength.length; i++){
		
			// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            // newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
    			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:16px;font-family:tahoma;">' +studentPersonalTitleArr[i]+ '. ' +studentInitialArr[i]+'</td>';

	          newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:px;font-family:tahoma;">'+document.getElementById('studentNo'+i).value+'</td>';
	

		//	newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
			
						}
					}				
				}
			// }
		// }
		newStr +="</table>";
	
	
		

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
}*/

