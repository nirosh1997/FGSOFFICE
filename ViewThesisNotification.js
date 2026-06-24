

// ////Coded by S.Suraweera////
// ////09.06.2015-----



function setValuesThesisDetails(){
		
	for(i=0; i<tidNoLength;i++){

		if(dataRep["studentNIC"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNoArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["receivedBy"]=receivedByArr[i];
			dataRep["receivedDate"]=receivedDateArr[i];
			dataRep["forwardTo"]=forwardToArr[i];
			dataRep["forwardedDate"]=forwardedDateArr[i];
			
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNoArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["receivedBy"]=receivedByArr[i];
			dataRep["receivedDate"]=receivedDateArr[i];
			dataRep["forwardTo"]=forwardToArr[i];
			dataRep["forwardedDate"]=forwardedDateArr[i];
			
			
			
		}else if(dataRep["studentNIC"]==studentNoArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["receivedBy"]=receivedByArr[i];
			dataRep["receivedDate"]=receivedDateArr[i];
			dataRep["forwardTo"]=forwardToArr[i];
			dataRep["forwardedDate"]=forwardedDateArr[i];
			
			
		}
	}while(index != i++);
} 


function formViewThesisNotification(dsp) {

		
		str = ""; 
		title = "View Thesis Notification"; 
  
	if(dsp == "formViewThesisNotification") {    

		
			str  = "<div id='formViewThesisNotification'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainformViewThesisNotification"><br>';
						str +="<div>";
						 str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
							
			// for(studentNoLoop=0; studentNoLoop< tidNoLength; studentNoLoop++){
			
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
			// if (studentNoArr.indexOf(studentNoArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				// if(studentNoArr[studentNoLoop] != ""){
				// studentNICList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
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
					str +="<div class='investLabel_l'>Received By</div>";
					str +="<div class='investLabel'>Received Date</div>";
					str +="<div class='investLabel'>Forward To</div>";
					str +="<div class='investLabel_l'>Forward Date </div>";
					
					
		var r=0;			
					for( var i=0; i<tidNoLength; i++){
		//while ()
		//	alert (tidArr.indexOf(tidArr[i]));
		//	alert (tidArr.lastIndexOf(tidArr[i]));
		//i++;
		//if ( tidArr.indexOf(tidArr[i]) == tidArr.lastIndexOf(tidArr[i]) || (tidArr.indexOf(tidArr[i]) != tidArr.lastIndexOf(tidArr[i]) && tidArr.indexOf(tidArr[i])!=i)){
		
		//alert (tidNoLength);
		
		r++; // this only for to avoid repeat 
		
			str +="<div class='info'   name='testInfo"+i+"'>";
			 
			 
			str += "<div class='hideLabel'>";
			str += receivedByArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += receivedDateArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += forwardToArr[i];
			str +="</div>";
			
			str += "<div class='hideLabel'>";
			str += forwardedDateArr[i];
			str +="</div>";
			
			
			
			str += "<div class='investView_l' name='lecturerName"+i+"' id='lecturerName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += receivedByArr[i]+"</div>";
			
			str += "<div  class='investView' name='BOSNo"+i+"' id='BOSNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			str += receivedDateArr[i]+"</div>";
			
			str += "<div class='investView' name='BOSDate"+i+"' id='BOSDate"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+forwardToArr[i]+"</div>";
			 
			str += "<div class='investView_l' name='DateReceivefromHead"+i+"' id='DateReceivefromHead"+i+"'";
			str += " onchange='dataRep[this.name]=this.value;'>"+forwardedDateArr[i]+"</div>";
			
			
			
			str += "</div>"; 
			 
			//}
}			
					
					str +="<div style='margin-top:10px;float:center;clear:both;'>";
								
					str += '<input type="button" class="btn" value = "Return" onclick = sendForm('+"'data4AppointExaminers'"+');>';
			
	}
		return str;	
	}