//Coded By S.Suraweera

dataRep["IssueDate"]="";
dataRep["ExpireDate"]="";
dataRep["Registration"]="";
var idate,edate;

var countId=0;

function formSSStudentList(dsp) {
		str = "";
		//if(dataRep["roleName"]=="ICT Center" || dataRep['roleName']=="Librarian" || dataRep['roleName']=="Coordinator"){// SAR-GWAI
			title = "Registered Students";
		// }else{
			// title = "Print Student Identity Card";
		// }
	//alert(dataRep['userName']);	

		if(dsp == "formSSStudentList") { 
			
			if(dataRep["UserAR"]== "Assistant Registrar")
			{
				dataRep['roleName']='Assistant Registrar';
			}				
			
			str  = "<div id='addSSStudentList'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2><center>'+title+'</center></h2><hr>';
			str += '<form name="maintainSSStudentList">';
			var role;
			var role1;
			var role2;
			var role3;
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
					dataRep['facultyCode']=facultyCodeArr[i];
					//alert(dataRep['programmeCode']);
				}
			}
			// //studentNoLength
			// if (dataRep['roleName']=='Coordinator')
				// {
				// //alert("ok");
					// var dcode= dataRep['departmentCode']
					// role = "cordinator";
					
					 
					// var pcode=dataRep['programmeCode']
					// role = "cordinator";
				
				// }
				// else if(dataRep['roleName']=='Head of the Department' )
				// {
					// var dcode1= dataRep['departmentCode']
					// role1 = "head";
					 
					// var pcode1=dataRep['programmeCode']
					// role1 = "head";
				// }
				// // else if(dataRep['roleName']=='Assistant Registrar' )
				// // {
					// // var dcode2= dataRep['facultyCode']
					// // role3 = "AR";
					 
					
				// // }
				// else{
				
					// role2="other";
				// }
			

			// if (role== "cordinator")
			// {
			// //alert("yes");
			       	// programName="<option>Please scroll down to see the records</option>";
							// for(i = 0; i<studentNoLength; i++) {
							// if(degreeTitleArr[i] != null){	
							 // if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							 
									  // if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   // programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  // }
									 // }
									
								 // }
							// }
 			                // for(j= 0; j<degreeCodeLength; j++) {
                            // if(degreeCodappeArr[j] != null){	
							// if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							// if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 // programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							// }
							// }
							// }
							// }
			// }
			
			// else if (role1== "head")
			// {
			       	// programName="<option>Please scroll down to see the records</option>";
							// for(i = 0; i<studentNoLength; i++) {
							// if(degreeTitleArr[i] != null){	
							 // if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							   
									  // if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   // programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  // }
									 // }
									
								 // }
							// }
 			                // for(j= 0; j<degreeCodeLength; j++) {
                            // if(degreeCodappeArr[j] != null){	
							// if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							// if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 // programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							// }
							// }
							// }
							// }
			// }

			// if (role2=="other")
			// {
				// //alert("yes");
			// if(dataRep['userName']=="ssdean" || dataRep['userName']=="ssar" || dataRep['userName']=="Asanka"){
				
				// programName="<option>Please scroll down to see the records</option>";
				
						// for(i = 0; i<studentNoLength; i++) {
							// if(facultyCodeArr[i]=="FAC03" & degreeTitleArr[i] != null){	
							   // if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
								   
								// //if (facultyCodeArr[i]==dataRep['facultyCode']){//|| departmentCodeappArr[j]== 
									     
									// programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
								// //}
								// }
							// }
						// }
			// }
			// else if(dataRep['userName']=="SAR-GWAI"){
				// //alert(dataRep['userName']);
				// programName="<option>Please scroll down to see the records</option>";
				
							// for(i = 0; i<studentNoLength; i++) {
								// if(facultyCodeArr[i]=="FAC10" & degreeTitleArr[i] != null){	
							   // if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							// programName += "<option>"+degreeTitleArr[i]+"</option>";
														 
								// }
								// }
							// }
			// }
			// else{
							programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
				//}
			//}			
				
				// if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Head of the Department')
		        // {
				// str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				// str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				// str += programName;
				// str += programName1;
				// str += "</select>";	
				
		        // }
				// else{
				
				str +="<div class='colon' style='width:100px;margin-left:10px;'><strong>Programme &nbsp;:&nbsp;</strong></div><div class='colon'></div>";
				str += "<class='longIdentifier'><div class='colon'></div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";						
				//}
		
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				if(dataRep["roleName"]!="ICT Center" && dataRep["roleName"]!="Coordinator" && dataRep['roleName']!='Technical Coordinator'){

				var dd = new Date();
				var date = dd.getUTCDate(); 
				var mm = dd.getUTCMonth();
				var yr = dd.getUTCFullYear();
				var mn=("0" + (mm + 1)).slice(-2);
				var currentdate = yr+"-"+mn+"-"+date;
				
				
				
				
				// var dd = new Date();
				// var d = dd.getUTCDate(); 
				// var m = dd.getUTCMonth();
				// var y = dd.getUTCFullYear();
				// var mn=m+1;
				// var currentdate = y+"-"+mn+"-"+d;
				// if(dataRep['roleName']!='Librarian'){
				// str +="<div class='longIdentifier'>Issued Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
				// str +="<div class='viewArea'>";
			
				// str +="<input type='text' style='width:180px';visibility:'hidden' name='IssueDate'  id='IssueDate' value= '"+currentdate+"'  onchange='dataRep[this.name]=this.value;'>";
				// str += "</div>"; 
				// }
				// str +="<div class='longIdentifier'>Expire Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
				// str +="<div class='viewArea'>";
			
				// str +="<input type='text' style='width:180px';visibility:'hidden' name='ExpireDate'  id='ExpireDate' value= '"+dataRep["ExpireDate"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
				// str += "</div>"; 
				}
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=filterStudentID();>';
				str += '<input type="button" id="select-all" style="display:none;margin-top:1px;float:left" class="btnB" value="Select All" onclick=Select6();>';
				str += '<input type="button" id="select-non" style="display:none;margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=Unselect6();>';
	
		str +="<div style='float:left'>____________________________________________________________________________________________________________________________________________</div>";
			
		str +="<div  id='list' style='margin:clear:both'>";  
		str +="</div>";
		str +="<div style='clear:both'>&nbsp;</div>"
		if (dataRep['roleName']!='Librarian' && dataRep["roleName"]!="Coordinator" && dataRep['roleName']!='Technical Coordinator' && dataRep['roleName']!='Assistant Registrar'){
		str += "<input type='button' class='btnD' value='Print All ID'  onclick=printStudentID();>"; 
		str += "<input type='button' class='btnD' value='Print Selected Student ID'  onclick=printSelectedStudentID();>"; 
		str += '<input type="button" class="btnD" value="Id Issuing List English" onclick=getRegStudentlist();>';
		str += '<input type="button" class="btnD" value="Id Issuing List Sinhala" onclick=getRegStudentlistSinhala();>';
        str += '<input type="button" class="btnD" value="Print File Tags" onclick=getstudentlist();>';
        str += '<input type="button" class="btnD" value="New ID English" onclick=newIdEnglish();>';
		str += '<input type="button" class="btnD" value="New ID Sinhala" onclick=newIdSinhala();>';
		
		//alert(dataRep['roleName']);
		}
		//str += '<input type="button" class="btn" value = "Return" onclick = refresshStudentList();showMenu('+"'formClerkMenu'"+');>';
		if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar')
		{	
		str += '<input type="button" class="btnD" value = "Reset" onclick = refresshStudentList();showMenu('+"'formClerkMenu'"+');>';
		str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
				
		}
		if (dataRep['roleName']=='Assistant Registrar')
		{	
		//str += '<input type="button" class="btn" value = "Reset" onclick = refresshStudentList();showMenu('+"'formAssistantRegistrarMenu'"+');>';
		str += '<input type="button" class="btnD" value="Download Registered List" onclick=getRegisterdListDownload();>';
		str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
				
		}
        if(dataRep['roleName']=='Dean')
		{
			str += '<input type="button"  class="btnD"  value = "Return" onclick = showMenu('+"'main'"+');>';   
		dataRep['roleName']='Dean';
		dataRep['userName']="Dean Faculty of Graduate Studies";
		}

		if(dataRep['roleName'] =='Administrator'){
			 	str += '<input type="button"  class="btnD" value = "Return" onclick = showMenu('+"'formAdministratorMenu'"+');>';   

		}
		
		if(dataRep['roleName'] =='ICT Center'){
			 	str += '<input type="button"  class="btnD" value = "Download" onclick = getAllRegStudentList();>';   
		
		}
		if(dataRep['roleName'] =='Librarian'){
				//str += '<input type="button" class="btnD" value="Download List- English" onclick=getRegStudentlist();>';
				//str += '<input type="button" class="btnD" value="Download List- Sinhala" onclick=getRegStudentlistSinhala();>';
				str += '<input type="button" class="btnD" value = "Reset" onclick = refresshStudentList();showMenu('+"'main'"+');>';
				str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
		}
		
		if(dataRep['roleName'] =='Coordinator' || dataRep['roleName']=='Technical Coordinator'){
			
				str += '<input type="button" class="btnD" value="Download Attendance Sheet - English Medium" onclick=getEnglishAttendenceSheet();>';
				str += '<input type="button" class="btnD" value="Download Attendance Sheet - Sinhala Medium" onclick=getSinhalaAttendenceSheet();>';
				str += '<input type="button" class="btnD" value="Download Registered List" onclick=getRegisterdListDownload();>';
				str += '<input type="button" class="btnD" value = "Return" onclick = showMenu('+"'main'"+');>';
		}
		
		//getAllRegStudentList 
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';

		str +="</div>";

		str += '</form>';
		str += '</div>';
		str += "</div>";
		
		}
	return str;
}

function filterStudentID(){

if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please Select a value from the select Box(s)");			
	}
else{
	
	
	

	var	newStr1 ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
	

	
		newStr1 ="<div id='topics' class='info'><div>";
		newStr1 +="<div class='investLabel' style='text-align:center'>Selected</div>";
		newStr1 +="<div class='investLabel_l'>Student Name</div>";
		newStr1 +="<div class='investLabel_l'>Student Reg. No</div>";
		newStr1 +="<div class='investLabel_l'>NIC</div>";
		
		//if(dataRep['roleName'] =='Coordinator'){
		newStr1 +="<div class='investLabel_l'>Registration Date</div>";
		//}
		//else{
		//newStr1 +="<div class='investLabel'>Library ID</div>";
		//newStr1 +="<div class='investLabel_l'>Registration Date</div>";
		//newStr1 +="<div class='investLabel_l'>Expire Date</div>";
		//}

		newStr1 +="<div></div>";
		//newStr1+="</div></br>";
		document.getElementById('list').innerHTML += newStr1;				
			for( i=0; i<studentNoLength; i++){
			//document.getElementById('list').innerHTML += newStr;
			//document.getElementById('list').innerHTML += newStr;					
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			//alert(achedamicYearArr[i]);
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			
					commDate=coursecommenceArr[i];
					duration=durationArr[i];
					if(durationArr[i].substring(0,1)=="1"){
						duration=1;
					}
					if(durationArr[i].substring(0,1)=="2"){
						duration=2;
					}
					if(durationArr[i].substring(0,1)=="3"){
						duration=3;
					}
					if(durationArr[i].substring(0,2)=="1-2"){
						duration=2;
					}	
			
			
		
             var newStr="";
			 newStr +="<div class='info' id='Alist"+i+"' style='width:auto;clear:both;' name='testInfo"+i+"'>";
			

			

			var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';
					}
				}
			
			newStr += "<div  class='investView' style='text-align:center' name='registered"+i+"' id='registered"+i+"'>";
			newStr += "<input type='checkbox'  "+registeredChecked+"  id='checkRegistered"+i+"' onChange='AddRowColorsid(Alist"+i+", this)' name='checkRegistered"+i+"' ' />";
			newStr += "</div>";
			
			// newStr += "<div class='investView' style='text-align:center' name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";
			// newStr += rwcnt+"</div>";
											
			newStr += "<div class='investView_l' name='studentName"+inum+"' id='studentName"+inum+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div>";
							
			newStr += "<div  class='investView_l' name='applicationNo"+inum+"' id='applicationNo1"+inum+"' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
			newStr += studentNoArr[i]+"</div>";
			
			newStr += "<div class='investView_l' name='studentNIC"+inum+"' id='studentNIC"+inum+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div>";
			
			//if(dataRep['roleName'] =='Coordinator'){
				
				newStr += "<div class='investView_l' name='Registration"+inum+"' id='Registration"+inum+"'";
				newStr += " onchange='dataRep[this.name]=this.value;'>"+coursecommenceArr[i]+"</div>";
				
			//}
			
			// else{
				// newStr += "<div class='investView' name='studentLibraryId"+inum+"' id='studentLibraryId"+inum+"'";
				// newStr += " onchange='dataRep[this.name]=this.value;'>"+studentLibraryIdCodeArr[i]+"</div>";
				
				// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentLibraryIdCodeArr[i]+'</td>';
				
				
				// newStr += "<div class='investView_l' name='Registration"+inum+"' id='Registration"+inum+"'";
				// newStr += " onchange='dataRep[this.name]=this.value;'>"+coursecommenceArr[i]+"</div>";
				
				// var endy=(commDate.split("-",3)[commDate.split("-",3).length-3]);
				// var endm=(commDate.split("-",3)[commDate.split("-",3).length-2]);
				// var endd=(commDate.split("-",3)[commDate.split("-",3).length-1]);
				// endy= parseInt(endy)+duration;
				// endd= parseInt(endd)-01;
				// var EndDate= endy+"-"+endm+"-"+endd;
				
				
				// if(document.getElementById('selectedDegreeName').value=="MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value=="2017"){
				// newStr += "<div class='investView_l' name='ExpireDate"+inum+"' id='ExpireDate"+inum+"'";
				// newStr += " onchange='dataRep[this.name]=this.value;'>2018-03-31</div>";
				// newStr += "<br/>";
				// newStr +="</div>"; 	
				// }
				// else if(document.getElementById('selectedDegreeName').value=="Master of Business Management in Marketing" & document.getElementById('achedamicYear').value=="2018"){
				// newStr += "<div class='investView_l' name='ExpireDate"+inum+"' id='ExpireDate"+inum+"'";
				// newStr += " onchange='dataRep[this.name]=this.value;'>2020-11-31</div>";
				// newStr += "<br/>";
				// newStr +="</div>"; 	
				// }
				// else{
				// newStr += "<div class='investView_l' name='ExpireDate"+inum+"' id='ExpireDate"+inum+"'";
				// newStr += " onchange='dataRep[this.name]=this.value;'>"+EndDate+"</div>";
				// newStr += "<br/>";
				// newStr +="</div>"; 
				// }
				
			// }
			

           // document.getElementById('list').innerHTML += newStr;		coursecommenceArr	
 
			inum++;	
			rwcnt++;	
		    
			document.getElementById('list').innerHTML += newStr;	 
			document.getElementById("View-List").disabled= true; // idea
			document.getElementById('select-all').style="display";
			document.getElementById('select-non').style="display";	
				
				}
			}
			     				
		}

        newStr +="</div>";  
		}
		//document.getElementById('list').innerHTML += newStr;
}

function AddRowColorsid(x, _this) {
	//	 if (y.checked)
  //    x.style.backgroundColor = '#0000FF';
 // else
  //    x.style.backgroundColor = '#FF0000';
		if (countId==1)
		{
			countId=0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		
		}
		else
		{
			countId++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		
		}
		
		//alert(x);
}

function Select6() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = true;
				document.getElementById("select-all").disabled= true;
				document.getElementById("select-non").disabled= false;
				
				//for( x=0; x<studentNoLength; x++){
			
			//if(studentNoArr.indexOf(studentNoArr[x]) == studentNoArr.lastIndexOf(studentNoArr[x]) || (studentNoArr.indexOf(studentNoArr[x]) != studentNoArr.lastIndexOf(studentNoArr[x]) && studentNoArr.indexOf(studentNoArr[x])==x)){
			
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x]){	
		var nam="Alist";
				nam+=i;
			if (countId==1)
		{
			countId=0;
		document.getElementById(nam).style.backgroundColor =  '#d0d0fb' ;
		
		}
		else
		{
			countId++;
		document.getElementById(nam).style.backgroundColor = '#e7e7fd';
		
		}
				//alert(nam);
			
			//}
		//}
			//}
				}
		}
	}

function Unselect6() 
	{
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'checkRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered))
				{
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("select-all").disabled= false;
				document.getElementById("select-non").disabled= true;
				//for( var x=0; x<applicationNoLength; x++){
		
		//if (applicationNoArr.indexOf(applicationNoArr[x]) == applicationNoArr.lastIndexOf(applicationNoArr[x]) || (applicationNoArr.indexOf(applicationNoArr[x]) != applicationNoArr.lastIndexOf(applicationNoArr[x]) && applicationNoArr.indexOf(applicationNoArr[x])==x)){
			
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x] ){
			var nam="Alist";
				nam+=i;
			if (countId==1)
		{
			countId=0;
		document.getElementById(nam).style.backgroundColor =  '#FDFDFD' ;
		
		}
		else
		{
			countId++;
		document.getElementById(nam).style.backgroundColor = '#FDFDFD';
		
		}
				//alert(nam);
			
			//}
//}
			//}
				}
		}
		
	}

function printStudentID(){

var gtDiv = "";
if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{

			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]){

					commDate=coursecommenceArr[i];
					duration=durationArr[i];
					if(durationArr[i].substring(0,1)=="1"){
						duration=1;
					}
					if(durationArr[i].substring(0,1)=="2"){
						duration=2;
					}
					if(durationArr[i].substring(0,1)=="3"){
						duration=3;
					}
					if(durationArr[i].substring(0,2)=="1-2"){
						duration=2;
					}	
		
			//if(document.getElementById('registered'+i).checked == true){
			
			gtDiv+='<table width="752" border="1" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td width="275" height="225"><table width="391" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td bgcolor="#4B0A0A" width="70"><h>';
			gtDiv+='<img src="img/logoid.gif"  alt="" width="70" height="64" align="left"/></td>';
			
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878; font-size: small;"><p align="center"><strong>University of Kelaniya</strong> <br>Faculty of Graduate  Studies<br/>';
			// gtDiv+='<strong><br>Student  Identification Card<br/></strong></p>';
			
			gtDiv+='<td bgcolor="#430102" colspan="2">';
			gtDiv+='<img src="img/h1logo.jpg"  alt="" width="318" height="62" align="left"/></td>';
			
			// gtDiv+='<tr>';
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="text-align: center;color: #F5D878; font-size: small;">Faculty of Graduate  Studies</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="text-align: center;color: #F5D878; font-size: small;"><strong>Student  Identification Card</strong></td>';
			// gtDiv+='</tr>';
			
			gtDiv+='</td></tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="87" rowspan="3"><img src="pic/'+studentNICArr[i]+'.jpg" width="70" height="85"  alt=""/></td>';
			
			gtDiv+='<td height="26" colspan="2" style="font-size: medium">Name : ' +studentPersonalTitleArr[i]+ '. ' +studentInitialArr[i]+'<br></td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="28" colspan="2" style="font-size: medium">Student No: ' +studentNoArr[i]+' </td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			var endy=(commDate.split("-",3)[commDate.split("-",3).length-3]);
			var endm=(commDate.split("-",3)[commDate.split("-",3).length-2]);
			var endd=(commDate.split("-",3)[commDate.split("-",3).length-1]);
			endy= parseInt(endy)+duration;
			endd= parseInt(endd)-01;
			var EndDate= endy+"-"+endm+"-"+endd;
			
			
			// gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: '+EndDate+'</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			
			if(document.getElementById('selectedDegreeName').value=="MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value=="2017"){
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: 2018-03-31</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			}
			else if(document.getElementById('selectedDegreeName').value=="Master of Business Management in Marketing" & document.getElementById('achedamicYear').value=="2018"){
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: 2020-11-31</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>'; 	
			}
			else{
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: '+EndDate+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			}
			
			
			
			
			
			
			
			//var file = <img src="studentPhotos/sig/S'+studentNICArr[i]+'.jpg"'>;
			
			//if(/.+\.(jpg|jpeg|png|gif)$/i.test(file)){
			gtDiv+='<td colspan="2"><img src="sig/S'+studentNICArr[i]+'.jpg" width="90" height="60"  alt=""/>';	
		//	}
			//else{
			//gtDiv+='<td colspan="2"><img src="studentPhotos/sig/S'+studentNICArr[i]+'.jpg" width="90" height="60"  alt=""/>';
			//}
			
			gtDiv+='</td>';
			
			gtDiv+='<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
			gtDiv+='</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			
			gtDiv+="<td height='30' colspan='2'><span style='font-size: small'>Student's Signature</span></td>";
			
			gtDiv+='<td width="153"><span style="font-size: small">Senior Assistant Registrar </span><br><span style="font-size: x-small"> Faculty of Graduate Studies<br/></span></td>';
			gtDiv+='</tr>';
			gtDiv+='</table></td>';
			gtDiv+='<td width="30">&nbsp;</td>';
			gtDiv+='<td width="296"><table width="391" height="254" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td height="55" style="font-size: small"> National Identity card  No : </td>';
			gtDiv+='<td style="font-size: small">' +studentNICArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td width="134" style="font-size: small"> Address :</td>';
			gtDiv+='<td width="150" style="font-size: small">' +studentPermanentAddressArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td><p style="font-size: small"> Date of Registration : </p></td>';
			gtDiv+='<td style="font-size: small">'+coursecommenceArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			
			var dd = new Date();
			var d = dd.getUTCDate(); 
			var m = dd.getUTCMonth();
			var y = dd.getUTCFullYear();
			var mn=m+1;
			var currentdate = y+"-"+mn+"-"+d;
			
			gtDiv+='<td><p style="font-size: small"> Date of Issue : </p></td>';
			gtDiv+='<td style="font-size: small">'+currentdate+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="100" colspan="2" style="font-size: small"> This ID card is a property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of Graduate  Studies. </td>';
			gtDiv+='</tr>';
			gtDiv+='</table></td>';
			gtDiv+='</tr>';
			gtDiv+='</table>';
			
				gtDiv+='<p></P>';
				gtDiv+='<p>--</P>';
			// gtDiv+='<table width="723" border="1" cellpadding="0">';
			// gtDiv+='<tr>';
			// gtDiv+='<td width="274" height="225"><table width="361" border="0" cellpadding="0">';
			// gtDiv+='<tr>';
			// gtDiv+='<td bgcolor="#780C20" width="70" rowspan="3"><h>';
			// gtDiv+='<img src="img/logo.gif"  alt="" width="61" height="62" align="left"/></td>';
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878;text-align: center;font-size: small;"><p align="center"><strong>University of Kelaniya</strong><br>';
			// gtDiv+='</p></td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="border-color:#F5D878;color: #F5D878;text-align: center;font-size: small;">Faculty of Graduate  Studies</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878;text-align: center;font-size: small;"><strong>Student  Identification Card</strong></td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td height="87" rowspan="3"><img src="studentPhotos/Diploma in Business/922723346V.jpg" width="70" height="79"  alt=""/></td>';
			// gtDiv+='<td height="26" colspan="2" style="font-size: small">Name : ' +studentInitialArr[i]+'<br></td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td height="28" colspan="2" style="font-size: small">Student No: ' +studentNoArr[i]+' </td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td colspan="2" style="font-size: small">Date of Expire: 14.11.2015</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td colspan="2"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
			// gtDiv+='</td>';
			// gtDiv+='<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
			// gtDiv+='</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td height="30" colspan="2"><span style="font-size: x-small">Student&rsquo;s  Signature  </span></td>';
			// gtDiv+='<td width="153"><span style="font-size: x-small">Senior Assistant Registrar Faculty of Graduate Studies</span></td>';
			// gtDiv+='</tr>';
			// gtDiv+='</table></td>';
			// gtDiv+='<td width="292"><table width="361" height="254" border="0" cellpadding="0">';
			// gtDiv+='<tr>';
			// gtDiv+='<td height="55" style="font-size: small">National Identicard  No : </td>';
			// gtDiv+='<td style="font-size: small">' +studentNICArr[i]+'</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td width="134" style="font-size: small">Address :</td>';
			// gtDiv+='<td width="150" style="font-size: small">' +studentPermanentAddressArr[i]+'</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td><p style="font-size: small">Date of Registration : </p></td>';
			// gtDiv+='<td style="font-size: small">14.11.2015</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td><p style="font-size: small">Date of Issued : </p></td>';
			// gtDiv+='<td style="font-size: small">14.11.2015</td>';
			// gtDiv+='</tr>';
			// gtDiv+='<tr>';
			// gtDiv+='<td height="100" colspan="2" style="font-size: x-small">This card is the  property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of graduate  studies. </td>';
			// gtDiv+='</tr>';
			// gtDiv+='</table></td>';
			// gtDiv+='</tr>';
			// gtDiv+='</table>';
			
				//}
			}
		}
	}

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


function printSelectedStudentID(){

var gtDiv = "";
if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please get the proper list of data before print the list");			
	}
else{

			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
		    if(document.getElementById('checkRegistered'+i)){
			if(document.getElementById('checkRegistered'+i).checked == true){
				
					commDate=coursecommenceArr[i];
					duration=durationArr[i];
					if(durationArr[i].substring(0,1)=="1"){
						duration=1;
					}
					if(durationArr[i].substring(0,1)=="2"){
						duration=2;
					}
					if(durationArr[i].substring(0,1)=="3"){
						duration=3;
					}
					if(durationArr[i].substring(0,2)=="1-2"){
						duration=2;
					}	
				
				
			gtDiv+='<table width="752" border="1" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td width="275" height="225"><table width="391" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td bgcolor="#4B0A0A" width="70"><h>';
			gtDiv+='<img src="img/logoid.gif"  alt="" width="70" height="64" align="left"/></td>';
			
			gtDiv+='<td bgcolor="#430102" colspan="2">';
			gtDiv+='<img src="img/h1logo.jpg"  alt="" width="318" height="62" align="left"/></td>';

			gtDiv+='</td></tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="87" rowspan="3"><img src="pic/'+studentNICArr[i]+'.jpg" width="70" height="85"  alt=""/></td>';
			gtDiv+='<td height="26" colspan="2" style="font-size: medium">Name : ' +studentPersonalTitleArr[i]+ '. ' +studentInitialArr[i]+'<br></td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="28" colspan="2" style="font-size: medium">Student No: ' +studentNoArr[i]+' </td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			var endy=(commDate.split("-",3)[commDate.split("-",3).length-3]);
			var endm=(commDate.split("-",3)[commDate.split("-",3).length-2]);
			var endd=(commDate.split("-",3)[commDate.split("-",3).length-1]);
			endy= parseInt(endy)+duration;
			endd= parseInt(endd)-01;
			var EndDate= endy+"-"+endm+"-"+endd;
			
			if(document.getElementById('selectedDegreeName').value=="MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value=="2017"){
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: 2018-03-31</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			}
			else if(document.getElementById('selectedDegreeName').value=="Master of Business Management in Marketing" & document.getElementById('achedamicYear').value=="2018"){
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: 2020-11-31</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>'; 	
			}
			else{
			gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: '+EndDate+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			}
			
			gtDiv+='<td colspan="2"><img src="sig/S'+studentNICArr[i]+'.jpg" width="90" height="60"  alt=""/>';	
			
			gtDiv+='</td>';
			
			gtDiv+='<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
			gtDiv+='</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			
			gtDiv+='<td height="30" colspan="2"><span style="font-size: small">Student&rsquo;s  Signature  </span></td>';
			
			gtDiv+='<td width="153"><span style="font-size: small">Senior Assistant Registrar </span><br><span style="font-size: x-small"> Faculty of Graduate Studies<br/></span></td>';
			gtDiv+='</tr>';
			gtDiv+='</table></td>';
			gtDiv+='<td width="30">&nbsp;</td>';
			gtDiv+='<td width="296"><table width="391" height="254" border="0" cellpadding="0">';
			gtDiv+='<tr>';
			gtDiv+='<td height="55" style="font-size: small"> National Identity card  No : </td>';
			gtDiv+='<td style="font-size: small">' +studentNICArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td width="134" style="font-size: small"> Address :</td>';
			gtDiv+='<td width="150" style="font-size: small">' +studentPermanentAddressArr[i]+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td><p style="font-size: small"> Date of Registration : </p></td>';
			gtDiv+='<td style="font-size: small">'+coursecommenceArr[i]+'</td>';
			gtDiv+='</tr>';
			
				var dd = new Date();
				var d = dd.getUTCDate(); 
				var m = dd.getUTCMonth();
				var y = dd.getUTCFullYear();
				var mn=m+1;
				var currentdate = y+"-"+mn+"-"+d;
				//var currentdate = d+"/"+mn+"/"+y;
			
			gtDiv+='<tr>';
			gtDiv+='<td><p style="font-size: small"> Date of Issue : </p></td>';
			gtDiv+='<td style="font-size: small">'+currentdate+'</td>';
			gtDiv+='</tr>';
			gtDiv+='<tr>';
			gtDiv+='<td height="100" colspan="2" style="font-size: small"> This ID card is a property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of Graduate  Studies. </td>';
			gtDiv+='</tr>';
			gtDiv+='</table></td>';
			gtDiv+='</tr>';
			gtDiv+='</table>';
			
				gtDiv+='<p></P>';
				gtDiv+='<p>&nbsp;</P>';

			}
			}
		}
	}
			}
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
//ICT center Download all list starts----------------------------------------------------------------------
function getAllRegStudentList(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					// newStr +="<th style='border: 1px solid black;'>Application Number</th>";
					// newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					// newStr +="<th style='border: 1px solid black;'>Address</th>";
					// newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					// newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					 newStr +="<th style='border: 1px solid black;'>Email</th>";
					// newStr +="<th style='border: 1px solid black;'>Signature</th>";
					newStr +="</tr>";  
            
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	

			//if(medium1Arr[i] == "en"){
			
				
			// for( i=0; i<studentNoLength.length; i++){
		
			// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            // newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
			
			
			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'</td>';
	
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			//newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			//newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	   // newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
					//	}
			
						}
					}				
				}
			// }
		// }
		newStr +="</table>";
	
	
		
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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



//ICT center Download all list ends------------------------------------------------------------------------
function getRegStudentlist(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Application Number</th>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="<th style='border: 1px solid black;'>Signature</th>";
					newStr +="</tr>";  
            
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	

			if(medium1Arr[i] == "en"){
			
				
			// for( i=0; i<studentNoLength.length; i++){
		
			// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            // newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
			
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'</td>';
	
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
						}
			
						}
					}				
				}
			// }
		// }
		newStr +="</table>";
	
	
		
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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

function getRegStudentlistSinhala(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Application Number</th>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					newStr +="<th style='border: 1px solid black;'>Signature</th>";
					newStr +="</tr>";  
            
			for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	

			if(medium1Arr[i] == "si"){
			//alert(medium1Arr[i]);
				
			// for( i=0; i<studentNoLength.length; i++){
		
			// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
			
			// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
            // newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'</td>';
	
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
     	    newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
			
			newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
						}
			
						}
					}				
				}
			// }
		// }
		newStr +="</table>";
	
	
		
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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

function getstudentlist(){
	var count=0;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
				    newStr +="<table style='border-collapse: collapse;border: 4px solid black;font-size:16px;font-family:tahoma;'>";  
            
			for( i=0; i<studentNoLength; i++){
		    
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			count++;
           // newStr+='<tr  style="border:1px solid black;width:250px;heigth:30%;font-size:16px;font-family:tahoma;">'+studentInitialArr[i]+'</tr>';
            if (count==1)
			{
				newStr +="<tr style='border: 4px solid black;heigth:0%;'>";
			}
			//
			newStr +="<tr style='border: 4px solid black;heigth:0%;'>";
			newStr +="<td>";
			newStr +="</td>";
			newStr +="</tr>";
			
			//
			newStr +="<td style='border: 4px solid black;text-align:center;heigth:0%;'>";
		    newStr += studentPersonalTitleArr[i]+"."+studentInitialArr[i];
			newStr +="<br>";
			newStr += studentNoArr[i];
			newStr +="</td>&nbsp;&nbsp;&nbsp;";
			if (count==2)
			{
				newStr +="</tr>";
            }
            if (count==2)
			{
				count=0;
            }
			//newStr +="</tr>";
			newStr += "</div>"; 
			inum++;	
			rwcnt++;	
			
						}
					}				
				}

		newStr +="</table>";
	
	
		
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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



function newIdEnglish()
{
	//alert("in");
	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
			alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>Name with Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 2</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 3</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 4</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 5</th>";
					newStr +="<th style='border: 1px solid black;'>NIC No</th>";
					newStr +="<th style='border: 1px solid black;'>Library Id No</th>";
					newStr +="<th style='border: 1px solid black;'>Start Date</th>";	
					newStr +="<th style='border: 1px solid black;'>End Date</th>";					
					newStr +="</tr>";  
            
	for( i=0; i<studentNoLength; i++){
		
		if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	

				if(medium1Arr[i] == "en"){
			
					var stuAddress=studentPermanentAddressArr[i];	
					var convertstuAddress= stuAddress.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
					var testAdd =titleCase(convertstuAddress);
					testAdd=removeDash(testAdd);
					var test1 = testAdd.split(",");
					var test =1;
										
				
					newStr +="<tr style='border: 1px solid black;'>";
					
				
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

					//alert(test1);
						// for (var q = 0; q < 5; q++){
											
								// if(test1.length>4){
									// if (test<3 && test1[q]!=""){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
									// }
									// else if(test<3 && test1[q]==""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test==3 && test1[q]!=""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test==3 && test1[q]==""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test<6 && test1[q]!=""){
									// //alert(test1[q]);
									// //	gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test<6 && test1[q]==""){
									// //alert(test1[q]);
									// //	gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// // else if(test==5){
									// // //alert(test1[q]);
										// // newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// // test++;
									// // }
									// // else{
									// // //alert(test1[q]);
										// // gtDiv+="<label>"+test1[q]+",</label>";
									// // }

								// }
								// else
								// {
								// if (test<2 && test1[q]!="undefined"){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
								// }
								// else if (test<2 && test1[q]=="undefined"){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
								// }
									// else{
									// //gtDiv+="<label>"+test1[q]+",</label><br>";
									
									// if(test1[q]!="undefined"){
										
										// if(test1[q]==undefined){
											// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
									
										// }
										// else{
									// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
										// }
									// }
									// else{
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
									
									// }
									// }
								// }
							// }
					
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
				
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentLibraryIdCodeArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
				//	newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
					newStr +="</tr>";
					newStr += "</div><dev><br>"; 
					inum++;	
					rwcnt++;	
					count++;
				}
			
			}
		}				
	}
	
		newStr +="</table>";
	
	}

//ENG
		var exportFilenameENG = document.getElementById('selectedDegreeName').value + " - English - " + "ID List.xls";
		var csvDataENG = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
		if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvDataENG, exportFilenameENG);
		} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvDataENG);
		link.setAttribute('download', exportFilenameENG);
		document.body.appendChild(link);    
		link.click();
		document.body.removeChild(link);    
		}



}



function newIdSinhala()
{
	//alert("in");
	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
			alert("Please Select Programm and the Year.");
	}
    else{
       // if(document.getElementById('selectedDocName').value=="Application List" ){
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'>Name with Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 2</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 3</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 4</th>";
					// newStr +="<th style='border: 1px solid black;'>Ad 5</th>";
					newStr +="<th style='border: 1px solid black;'>NIC No</th>";
					newStr +="<th style='border: 1px solid black;'>Library Id No</th>";
					newStr +="<th style='border: 1px solid black;'>Start Date</th>";	
					newStr +="<th style='border: 1px solid black;'>End Date</th>";						
					newStr +="</tr>";  
            
	for( i=0; i<studentNoLength; i++){
		
		if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	

				if(medium1Arr[i] == "si"){
			
					var stuAddress=studentPermanentAddressArr[i];	
					var convertstuAddress= stuAddress.toLowerCase().replace(/\b[a-z]/g, function(letter) {return letter.toUpperCase();});
					var testAdd =titleCase(convertstuAddress);
					testAdd=removeDash(testAdd);
					var test1 = testAdd.split(",");
					var test =1;
										
				
					newStr +="<tr style='border: 1px solid black;'>";
					
				
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'. '+studentInitialArr[i]+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

					//alert(test1);
						// for (var q = 0; q < 5; q++){
											
								// if(test1.length>4){
									// if (test<3 && test1[q]!=""){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
									// }
									// else if(test<3 && test1[q]==""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test==3 && test1[q]!=""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test==3 && test1[q]==""){
									
										// //gtDiv+="<br><label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test<6 && test1[q]!=""){
									// //alert(test1[q]);
									// //	gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
										// //alert(test);
									// }
									// else if(test<6 && test1[q]==""){
									// //alert(test1[q]);
									// //	gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
										// //alert(test);
									// }
									// // else if(test==5){
									// // //alert(test1[q]);
										// // newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// // test++;
									// // }
									// // else{
									// // //alert(test1[q]);
										// // gtDiv+="<label>"+test1[q]+",</label>";
									// // }

								// }
								// else
								// {
								// if (test<2 && test1[q]!="undefined"){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
					
										// test++;
								// }
								// else if (test<2 && test1[q]=="undefined"){
										// //gtDiv+="<label>"+test1[q]+",</label>";
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
										// test++;
								// }
									// else{
									// //gtDiv+="<label>"+test1[q]+",</label><br>";
									
									// if(test1[q]!="undefined"){
										
										// if(test1[q]==undefined){
											// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
									
										// }
										// else{
									// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
										// }
									// }
									// else{
										// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
									
									// }
									// }
								// }
							// }
					
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
				
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentLibraryIdCodeArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
				//	newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					
					newStr +="</tr>";
					newStr += "</div><dev><br>"; 
					inum++;	
					rwcnt++;	
					count++;
				}
			
			}
		}				
	}
	
		newStr +="</table>";
	
	}
	
	//SIN
		var exportFilename = document.getElementById('selectedDegreeName').value + " - Sinhala - " + "ID List.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
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



//-------------------------------------------------- Attendance Sheet----------------------------------------------------------------------------




function getSinhalaAttendenceSheet(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
      	
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>Attendance Sheet</div>";
		newStr +="<br>";
		newStr +="<br>";
		newStr +="<hr/>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Course Unit:</div>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Date:</div>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Lecturer's Name:</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Name</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStr +="</tr>"; 
			
			for( var i=0; i<studentNoLength; i++){
		  		if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
					if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	

						if(medium1Arr[i] == "si"){          
			
			
							newStr +="<tr>";
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">'+count+'</td>';
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">'+studentNoArr[i]+'</td>';
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;width:200px;">'+studentNameArr[i]+'</td>';
							newStr+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:14px;font-family:Times New Roman;"></td>';
							newStr +="</tr>";
							newStr += "</div><dev><br>"; 
							
							count++;

						}
					}
				}	 
	        }
		newStr +="</table>";
		newStr +="<br>";
	}


	var exportFilename = "Attendance Sheet - Sinhala.doc";
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



function getEnglishAttendenceSheet(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
      	
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>Attendance Sheet</div>";
		newStr +="<br>";
		newStr +="<br>";
		newStr +="<hr/>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Course Unit:</div>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Date:</div>";
		newStr +="<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Lecturer's Name:</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Name</th>";
				newStr +="<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStr +="</tr>"; 
			
			for( var i=0; i<studentNoLength; i++){
		  		if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
					if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	

						if(medium1Arr[i] == "en"){          
			
			
							newStr +="<tr>";
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">'+count+'</td>';
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">'+studentNoArr[i]+'</td>';
							newStr+='<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;width:200px;">'+studentNameArr[i]+'</td>';
							newStr+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:14px;font-family:Times New Roman;"></td>';
							newStr +="</tr>";
							newStr += "</div><dev><br>"; 
							
							count++;

						}
					}
				}	 
	        }
		newStr +="</table>";
		newStr +="<br>";
	}


	var exportFilename = "Attendance Sheet - English.doc";
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

//--------------------------------------------------------------Registered List------------------------------------------


function getRegisterdListDownload(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
       
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					//newStr +="<th style='border: 1px solid black;'>Application Number</th>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initials</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Address</th>";
					newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
					newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
					newStr +="<th style='border: 1px solid black;'>Email</th>";
					//newStr +="<th style='border: 1px solid black;'>Signature</th>";
					newStr +="</tr>";  
            
		for( i=0; i<studentNoLength; i++){
		
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
				if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){	


					newStr +="<tr style='border: 1px solid black;'>";
					
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'</td>';
			
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			
					newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';

					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
					newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';
					
					newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';

					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr +="</tr>";
					newStr += "</div><div><br>"; 
					inum++;	
					rwcnt++;	
					count++;

				}
			}				
		}

		newStr +="</table>";
	
	
		
}
	var exportFilename = "Registered List.doc";
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
