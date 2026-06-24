// ////Coded by S.Suraweera////
// ////14.05.2015-----

 dataRep["selectedTransac"]="";

function setValuesExaminerDetails(){
		
	for(i=0; i<lecturerEmpNoLength;i++){

		if(dataRep["studentNIC"]==lecturerEmpNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
			dataRep["BOSNo"]=BOSNoArr[i];
			dataRep["BOSDate"]=BOSDateArr[i];
			dataRep["DateReceivefromHead"]=DateReceivefromHeadArr[i];
			dataRep["Accept"]=AcceptArr[i];
			dataRep["DateRequestRenominate"]=DateRequestRenominateArr[i];
			
			dataRep["FGSBoardNo"]=FGSBoardNoArr[i];
			dataRep["FGSBoardDate"]=FGSBoardDateArr[i];
			dataRep["DateReceivefromBOS"]=DateReceivefromBOSArr[i];
			dataRep["Acceptfgs"]=AcceptfgsArr[i];
			dataRep["DateRequestRenominateFgs"]=DateRequestRenominateFgsArr[i];
			
			dataRep["SenateNo"]=SenateNoArr[i];
			dataRep["SenateDate"]=SenateDateArr[i];
			dataRep["DateReceivefromFGSBoad"]=DateReceivefromFGSBoadArr[i];
			dataRep["AcceptSenate"]=AcceptSenateArr[i];
			dataRep["DateRequestRenominateSenate"]=DateRequestRenominateSenateArr[i];
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
			dataRep["BOSNo"]=BOSNoArr[i];
			dataRep["BOSDate"]=BOSDateArr[i];
			dataRep["DateReceivefromHead"]=DateReceivefromHeadArr[i];
			dataRep["Accept"]=AcceptArr[i];
			dataRep["DateRequestRenominate"]=DateRequestRenominateArr[i];
			
			dataRep["FGSBoardNo"]=FGSBoardNoArr[i];
			dataRep["FGSBoardDate"]=FGSBoardDateArr[i];
			dataRep["DateReceivefromBOS"]=DateReceivefromBOSArr[i];
			dataRep["Acceptfgs"]=AcceptfgsArr[i];
			dataRep["DateRequestRenominateFgs"]=DateRequestRenominateFgsArr[i];
			
			dataRep["SenateNo"]=SenateNoArr[i];
			dataRep["SenateDate"]=SenateDateArr[i];
			dataRep["DateReceivefromFGSBoad"]=DateReceivefromFGSBoadArr[i];
			dataRep["AcceptSenate"]=AcceptSenateArr[i];
			dataRep["DateRequestRenominateSenate"]=DateRequestRenominateSenateArr[i];
			
		}else if(dataRep["studentNIC"]==BOSNoArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
			dataRep["BOSNo"]=BOSNoArr[i];
			dataRep["BOSDate"]=BOSDateArr[i];
			dataRep["DateReceivefromHead"]=DateReceivefromHeadArr[i];
			dataRep["Accept"]=AcceptArr[i];
			dataRep["DateRequestRenominate"]=DateRequestRenominateArr[i];
			
			dataRep["FGSBoardNo"]=FGSBoardNoArr[i];
			dataRep["FGSBoardDate"]=FGSBoardDateArr[i];
			dataRep["DateReceivefromBOS"]=DateReceivefromBOSArr[i];
			dataRep["Acceptfgs"]=AcceptfgsArr[i];
			dataRep["DateRequestRenominateFgs"]=DateRequestRenominateFgsArr[i];
			
			dataRep["SenateNo"]=SenateNoArr[i];
			dataRep["SenateDate"]=SenateDateArr[i];
			dataRep["DateReceivefromFGSBoad"]=DateReceivefromFGSBoadArr[i];
			dataRep["AcceptSenate"]=AcceptSenateArr[i];
			dataRep["DateRequestRenominateSenate"]=DateRequestRenominateSenateArr[i];
			
	
			//showMenu('formAppointExaminers');
		}
		

	}	//while(index != i++);
}

function callNextFunctionBOS(i){
//alert("came");

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["lecturerName"]=lecturerEmpNoArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["BOSNo"]=BOSNoArr[i];
			dataRep["BOSDate"]=BOSDateArr[i];
			dataRep["DateReceivefromHead"]=DateReceivefromHeadArr[i];
			dataRep["Accept"]=AcceptArr[i];
			dataRep["DateRequestRenominate"]=DateRequestRenominateArr[i];
			//alert(i);
		showMenu('formUpdateExaminerBoard');
			
}

function callNextFunctionFgs(i){


			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["lecturerName"]=lecturerEmpNoArr[i];
			
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["FGSBoardNo"]=FGSBoardNoArr[i];
			dataRep["FGSBoardDate"]=FGSBoardDateArr[i];
			dataRep["DateReceivefromBOS"]=DateReceivefromBOSArr[i];
			dataRep["Acceptfgs"]=AcceptfgsArr[i];
			dataRep["DateRequestRenominateFgs"]=DateRequestRenominateFgsArr[i];
			alert(dataRep["FGSBoardNo"]);
			//alert(i);
		showMenu('formExaminerFGSUpdate');	
			
}

function callNextFunctionSenate(i){
//alert(i);
			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["lecturerName"]=lecturerEmpNoArr[i];
			
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["SenateNo"]=SenateNoArr[i];
			dataRep["SenateDate"]=SenateDateArr[i];
			dataRep["DateReceivefromFGSBoad"]=DateReceivefromFGSBoadArr[i];
			dataRep["AcceptSenate"]=AcceptSenateArr[i];
			dataRep["DateRequestRenominateSenate"]=DateRequestRenominateSenateArr[i];
			//alert(i);
		showMenu('formExaminerUpdateSenate');	
		}

	

function formTransactionsDetailsView(dsp) {

		
		str = ""; 
		title = "Transactions Details View"; 
  
	if(dsp == "formTransactionsDetailsView") {    

		
			str  = "<div id='formTransactionsDetailsView'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainformTransactionsDetailsView"><br>';
						str +="<div>";
						 str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
							
			// for(studentNoLoop=0; studentNoLoop< lecturerEmpNoLength; studentNoLoop++){
			
			// if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				// if(studentNameArr[studentNoLoop] != ""){
				// studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
			// }
			// }
			// if (studentNoArr.indexOf(studentNoArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				// if(studentNoArr[studentNoLoop] != ""){
				// studentNoList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
				// }
			// }
			// if (BOSNoArr.indexOf(BOSNoArr[studentNoLoop]) == BOSNoArr.lastIndexOf(BOSNoArr[studentNoLoop]) || (BOSNoArr.indexOf(BOSNoArr[studentNoLoop]) != BOSNoArr.lastIndexOf(BOSNoArr[studentNoLoop]) && BOSNoArr.indexOf(BOSNoArr[studentNoLoop])==studentNoLoop)){
				// if(BOSNoArr[studentNoLoop] != ""){
				// studentNICList += "<option value='"+BOSNoArr[studentNoLoop]+"'>";
				// }
			// }
			// if (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop])==studentNoLoop)){
				// if(lecturerNameArr[studentNoLoop] != ""){
				// lecturerNameList += "<option value='"+lecturerNameArr[studentNoLoop]+"'>";
				// }
			// }
			// if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop])==studentNoLoop)){
				// if(lecturerEmpNoArr[studentNoLoop] != ""){
				// lecturerEmpNoList += "<option value='"+lecturerNameArr[studentNoLoop]+"-"+lecturerEmpNoArr[studentNoLoop]+"'>";
				// }
			// }
					
			// }
	
	
			
					str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentName'>"+dataRep["studentName"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
					str += "<textarea rows='auto'  name='title' id='title'  style='float:left;width:220px'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
					str +=dataRep["title"];
					str +=" </textarea></div><br>";
					
										
					str +="<div id='topics' class='info'>";
					str +="<div class='investLabel_l'>Examiner Name</div>";
					str +="<div class='investLabel'>Bos No</div>";
					str +="<div class='investLabel'>BOS Date</div>";
					str +="<div class='investLabel_l'>DateReceive from Head</div>";
					str +="<div class='investLabel'>BOS Status</div>";
					str +="<div class='investLabel'>Re-nominate Date</div>";
					str +="<div id='selectedExaminer'>";
					
					
					for( var i=0; i<lecturerEmpNoLength; i++){
					//alert("oky");
					
		//alert(BOSNoArr[i]);
		if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])==i)){
			//alert("bbb");
				
					//if((studentNoArr[i] == dataRep["studentNo"] && dataRep["BOSNo"] !=" ") && dataRep["tid"] !=" " ){
		//alert("aaaa");
		
			str +="<div class='info'   name='testInfo"+i+"'>";
			 
			 
			str += "<div class='hideLabel'>";
			str += lecturerNameArr[i];
			str +="</div>";
			//if(BOSNoArr[i] !=""){
			str += "<div class='hideLabel'>";
			str += BOSNoArr[i];
			str +="</div>";
			//}
			str += "<div class='hideLabel'>";
			str += BOSDateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateReceivefromHeadArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += AcceptArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateRequestRenominateArr[i];
			str +="</div>";
			
			str += "<div class='investView_l' name='lecturerName"+i+"' id='lecturerName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += lecturerNameArr[i]+"</div>";
			
			str += "<div  class='investView' name='BOSNo"+i+"' id='BOSNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += BOSNoArr[i]+"</div>";
			
			str += "<div class='investView' name='BOSDate"+i+"' id='BOSDate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+BOSDateArr[i]+"</div>";
			 
			str += "<div class='investView_l' name='DateReceivefromHead"+i+"' id='DateReceivefromHead"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateReceivefromHeadArr[i]+"</div>";
			
			
			if(AcceptArr[i] == 2){
			var r = 'Rejected';
			str += "<div class='investView' name='Acceptr"+i+"' id='Acceptr"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+r+"</div>";
			 }
			 else{
			 var s = 'Accepted';
			 str += "<div class='investView' name='Accept"+i+"' id='Accept"+i+"'";
			 str += " onchange='dataRep[this.name]=this.value;'>"+s+"</div>";
			}
			str += "<div class='investView' name='DateRequestRenominate"+i+"' id='DateRequestRenominate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateRequestRenominateArr[i]+"</div>";
			 
			str += "<div input type='button' class='btn2' onClick='callNextFunctionBOS("+i+")'>Edit</div>";
			 
			str += "</div><br>"; 
			 
			}
		//}	
	}	
  

	
		//FGS
		
str += "______________________________________________________________________________________________________________________";		
					
					str +="<div id='topics1' class='info'></div>";
					str +="<div class='investLabel_l'>Examiner Name</div>";
					str +="<div class='investLabel'>FGS No</div>";
					str +="<div class='investLabel'>FGS Date</div>";
					str +="<div class='investLabel_l'>DateReceive from BOS</div>";
					str +="<div class='investLabel'>FGS Status</div>";
					str +="<div class='investLabel'>Re-nominate Date</div>";
					str +="<div id='selectedExaminer'>";
					
					for( var i=0; i<lecturerEmpNoLength; i++){
						
				//alert (dataRep["FGSBoardNo"]);
				
				if(studentNoArr[i] == dataRep["studentNo"] && FGSBoardNoArr[i] != "" ){
									
		if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])==i)){
			
			//alert(dataRep["FGSBoardNo"]);
		
		
			
			str +="<div class='info'   name='testInfo"+i+"'>";
			 
			 
			str += "<div class='hideLabel'>";
			str += lecturerNameArr[i];
			str +="</div>";
			//if(FGSBoardNoArr[i] !=""){
			str +="<div class='hideLabel'>";
			str += FGSBoardNoArr[i];
			str +="</div>";
			//}
			str += "<div class='hideLabel'>";
			str += FGSBoardDateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateReceivefromBOSArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += AcceptfgsArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateRequestRenominateFgsArr[i];
			str +="</div>";
			
			str += "<div class='investView_l' name='lecturerName"+i+"' id='lecturerName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += lecturerNameArr[i]+"</div>";
			
			str += "<div  class='investView' name='BOSNo"+i+"' id='BOSNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += FGSBoardNoArr[i]+"</div>";
			
			str += "<div class='investView' name='BOSDate"+i+"' id='BOSDate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+FGSBoardDateArr[i]+"</div>";
			 
			str += "<div class='investView_l' name='DateReceivefromHead"+i+"' id='DateReceivefromHead"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateReceivefromBOSArr[i]+"</div>";
			
			
			if(AcceptfgsArr[i] == 2){
			var r = 'Rejected';
			str += "<div class='investView' name='Acceptr"+i+"' id='Acceptr"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+r+"</div>";
			 }
			 else{
			 var s = 'Accepted';
			 str += "<div class='investView' name='Accept"+i+"' id='Accept"+i+"'";
			 str += " onchange='dataRep[this.name]=this.value;'>"+s+"</div>";
			}
			str += "<div class='investView' name='DateRequestRenominate"+i+"' id='DateRequestRenominate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateRequestRenominateFgsArr[i]+"</div>";
			
			str += "<div input type='button' class='btn2' onclick='callNextFunctionFgs("+i+")'>Edit</div>";
				
			
			str += "</div><br>"; 
			 
			}
		}
}			
			//Senate		
str += "______________________________________________________________________________________________________________________";		
			
					str +="<div id='topics' class='info'></div>";
					str +="<div class='investLabel_l'>Examiner Name</div>";
					str +="<div class='investLabel'>Senate No</div>";
					str +="<div class='investLabel'>Senate Date</div>";
					str +="<div class='investLabel_l'>DateReceive from FGS</div>";
					str +="<div class='investLabel'>Senate Status</div>";
					str +="<div class='investLabel'>Re-nominate Date</div>";
					str +="<div id='selectedExaminer'>";
			
			for( var i=0; i<lecturerEmpNoLength; i++){
				
			//if(dataRep["SenateNo"] != " " ){
				if(studentNoArr[i] == dataRep["studentNo"] && SenateNoArr[i] != "" ){
			
			if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])==i)){
			
			
	
			str +="<div class='info'   name='testInfo"+i+"'>";
			 
			 
			str += "<div class='hideLabel'>";
			str += lecturerNameArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += SenateNoArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += SenateDateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateReceivefromFGSBoadArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += AcceptSenateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += DateRequestRenominateSenateArr[i];
			str +="</div>";
			
			str += "<div class='investView_l' name='lecturerName"+i+"' id='lecturerName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += lecturerNameArr[i]+"</div>";
			
			str += "<div  class='investView' name='SenateNo"+i+"' id='SenateNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += SenateNoArr[i]+"</div>";
			
			str += "<div class='investView' name='SenateDate"+i+"' id='SenateDate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+SenateDateArr[i]+"</div>";
			 
			str += "<div class='investView_l' name='DateReceivefromFGSBoad"+i+"' id='DateReceivefromFGSBoad"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateReceivefromFGSBoadArr[i]+"</div>";
			
			
			if(AcceptSenateArr[i] == 2){
			var r = 'Rejected';
			str += "<div class='investView' name='Acceptr"+i+"' id='Acceptr"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+r+"</div>";
			 }
			 else{
			 var s = 'Accepted';
			 str += "<div class='investView' name='Accept"+i+"' id='Accept"+i+"'";
			 str += " onchange='dataRep[this.name]=this.value;'>"+s+"</div>";
			}
			str += "<div class='investView' name='DateRequestRenominate"+i+"' id='DateRequestRenominate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+DateRequestRenominateSenateArr[i]+"</div>";
			 
				str += "<div input type='button' class='btn2' onclick='callNextFunctionSenate("+i+")'>Edit</div>";
				
			
			str += "</div>"; 
			 
			}
	}			
					
}					str +="<div style='margin-top:10px;float:center;clear:both;'>";
								
					str += '<input type="button" class="btn" value = "Return" onclick = sendForm('+"'data4ExaminerReccomand'"+');>';
			str += '</form>';

	}
		return str;	
	}