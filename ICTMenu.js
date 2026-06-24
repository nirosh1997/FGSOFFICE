function formICTMenu(dsp) {

		str = "";
		title = "ICT Center";
		

		if(dsp == "formICTMenu") {

			str  = "<div id='maintainformICTMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			//var u=document.cookie;
			///var ur=(u.split(";",2)[u.split(";",2).length-2]);
			//var use =(ur.split("=",2)[ur.split(";",2).length-0]);
            //dataRep["userName"]=use;		
		str += "<div style='float:left;clear:both;' id='btnsection'>";

		str += '<input type="button" class="btn2" value = "View Registered Students" onclick ="sendForm('+"'data4ForeignReport'"+');">';//sendForm('+"'data4TotalStudentReport'"+');sendForm('+"'data4ForeignReport'"+');  sendForm('+"'data4viewstudent'"+');

		//str += '<input type = "button" class ="btn2" value="View Registered Students" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');">';


		str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';
		str += "</div>";

		str += '</td></tr></table>';
		str += "</div>";
		
		}
		
		return str;
	}
