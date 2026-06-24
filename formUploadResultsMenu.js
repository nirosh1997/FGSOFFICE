function formUploadResultsMenu(dsp) {

		str = "";

		

		if(dsp == "formUploadResultsMenu") {

			str  = "<div id='maintainformUploadResultsMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
		//	str += '<h2 >'+title+'</h2><hr>';
		
		str += "<div style='float:left;clear:both;' id='btnsection'>";

	


	
		str += '<input type="button" class="btnD" value = "First Attempt Upload/Download Examination Results" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'
		str += '<input type="button" class="btnD" value = "Repeat Attempt Upload/Download Examination Results" onclick ="sendForm('+"'data4DownloadRepsubjectDetails'"+');sendForm('+"'data4DownloadRepdegreeSubjects'"+');">';
		
		str += '<input type="button" class="btnD" value = "Re - Repeat Attempt Upload/Download Examination Results" onclick ="sendForm('+"'data4DownloadReRepeatsubjectDetails'"+');sendForm('+"'data4DownloadReRepeatdegreeSubjects'"+');">';
		
		
		if (dataRep['roleName']=='Subject Clerk')
		{
		str += '<input type="button" class="btnD" value = "Return" onclick =showMenu('+"'main'"+');>';
		}
		else{
			str += '<input type="button" class="btnD" value = "Return" onclick =showMenu('+"'main'"+');>';
		}
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";

		str += '</td></tr></table>';
		str += "</div>";
		
		}
		
		return str;
	}