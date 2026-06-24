dataRep['userName']=dataRep['roleName']="";
function formTransferMenu(dsp) {

		str = "";
		title = "Student Transfer";
		

		if(dsp == "formTransferMenu") {
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
       	str += '<input type="button" class="btn2" value = "Transfer Rules" onclick ="sendForm('+"'data4transferRules'"+');">';//
		
		//str += '<input type="button" class="btn2" value = "Student Transfer" onclick ="sendForm('+"'data4studentTransfer'"+'); sendForm('+"'data4applicantTransfer'"+');sendForm('+"'data4getTransferID'"+');sendForm('+"'data4DisplayTransferRules'"+'); sendForm('+"'data4Transferprogramme'"+');">';//

		//str += '<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
  		    if (dataRep['roleName']=='Subject Clerk')
		    {	
             str += '<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formClerkMenu'"+');>';
		    }
            if(dataRep['roleName']=='Dean')
		    {
		      str += '<input type="button" class="btn2" value = "Return" onclick = showMenu('+"'formDeanMenu'"+');>';
		    }	
        str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';
		str +="</div>";
		
	
		
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