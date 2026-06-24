
dataRep['roleName']=dataRep['userName']="";
function formClerkDocumentMenu(dsp) {

		str = "";
		title = "Document Template Management";
		

		if(dsp == "formClerkDocumentMenu") {
			var u=document.cookie;
			var ur=(u.split(";",2)[u.split(";",2).length-2]);
			var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			for(i = 0; i<userIdLength; i++) {
				if( use== userIdArr[i]){
					dataRep['roleName']=roleNameArr[i];
					dataRep['userName']=userNameArr[i];
				}
		    
		   }			
			
		str  = "<div id='maintaindocumentMenu'>";
		str +="<div style='float:left;width:100%;height:50px;'>";
		str +="<div style='float:right;padding:15px;'>";
		str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
		str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
		str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
		str +="</div></div><br/>";
		
		str +="<div></div><br/>";	
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		str += "<div style='float:left;clear:both;' id='btnsection'>";
		/*str +="<div style='margin-top:0px;float:left;clear:both;' class = 'demoprint'>";
        str +="<fieldset  class='field'><legend class='fieldHead'>New </legend><div style='clear:both'><div class='rdo'>";
		str += '<input type="button" class="btn2" value = "Introduce documents" onclick ="sendForm('+"'data4formDocument'"+');">';
		str += '<input type="button" class="btn2" value = "Introduce Data Item" onclick ="sendForm('+"'data4formDataItem'"+');">';
		str += '<input type="button" class="btn2" value = "Introduce Decision Making Point" onclick ="sendForm('+"'data4formDecisionMakingPoint'"+');">';
		str += '<input type="button" class="btn2" value = "Create Document Template" onclick ="sendForm('+"'data4formDocumentItem'"+');sendForm('+"'data4dataItems'"+');">';
		str +="</div>";
		str +="</div>";
		str +="</fieldset>";
		str +="</div>";*/
			
		str +="<div style='margin-top:0px;float:left;clear:both;' class = 'demoprint'>";
        str +="<fieldset  class='field'><legend class='fieldHead'>Assign</legend><div style='clear:both'><div class='rdo'>";
		//str += '<input type="button" class="btn2" value = "List Document" onclick ="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');sendForm('+"'data4AddListDocument'"+');sendForm('+"'data4SequanceNumberList'"+');sendForm('+"'data4SessionIDList'"+');">';
		str += '<input type = "button" class ="btn2" value="Add Document Details" onclick="ResetAll();sendForm('+"'data4DocName'"+');sendForm('+"'data4AddDocument'"+');sendForm('+"'data4SequanceNumber'"+');sendForm('+"'data4SessionID'"+');sendForm('+"'data4DegreeList'"+');">';		
	    str += '<input type="button" class="btn2" value = "Document Decision Transaction" onclick ="sendForm('+"'data4decisionMakingPoint'"+');sendForm('+"'data4document'"+');sendForm('+"'data4studentlist'"+');sendForm('+"'data4formDocDecisionTransaction'"+');sendForm('+"'data4decisionprogramm'"+')">';
		//str += '&nbsp;<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
  		    if (dataRep['roleName']=='Subject Clerk')
		    {	
		        str += '&nbsp;<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
		    }
            if(dataRep['roleName']=='Dean')
		    {
	        	str += '&nbsp;<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formDeanMenu'"+');>';
		    }		
				
str += "</div>";
		str += "</div>";
		str += "</fieldset>";
		str += "</div><br><br><br><br>";
		
		str +="<div style='margin-top:30px;float:left;clear:both;' class = 'demoprint'>";
		
		
		str += "</div>";
		str += "<br>";
		str += "<br>";
		
		
		
		
		str += '</td></tr></table>';
		str += "</div>";
		
		}
		return str;
	}

	
/*function ResetAll(){
documentIDLength =0;
inum=0;
testNum=0;
decisionMakingPointIDLength=0;
documentIDLength=0;
sessionIDLength=0;
}*/