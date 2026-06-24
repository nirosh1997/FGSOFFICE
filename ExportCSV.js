
function exportCSVForm(dsp){


	var str="";
	title = "Export Details of Applicants";
	
	if(dsp == "exportCSVForm") {
	
	str  = "<div id='ExportData'>";
	str += '<form name="maintainExportData">';
	str += '<h2 align="center">'+title+'</h2><hr>';

	str += "<input type='button' id='exportBtn' class='btn' value='Export to CSV'  onclick='myFunction();'>";
	str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
	
	
	
	str += '</form>';
	str += "</div>";
	
	}
	return str;
}


function myFunction(){
		//alert("ok");
		
		var hidden = false;
        hidden = !hidden;
        if(hidden) {
            document.getElementById('exportBtn').style.visibility = 'hidden';
			var link = "";
        } 
		

		var csvData = [];
		
		csvData.push('Application Number, Student Personal Title, Name with Initials, Full Name, NIC, Date of Birth, Address, Contact No-Home, Contact No-Mobile, Email, Education Qulifications, Other Qulifications, Working Experience');
	
		for(var i=0;  i<studentNICLength; i++){
		
		
		var EduQualificationOne = bachelorDegreeArr[i]+"-"+bachelorDegreeTitleArr[i]+"-"+bachelorDegreeobtainUniversityArr[i];
		
		var EduQualificationTwo = higherDegreeArr[i]+"-"+higherDegreeTitleArr[i]+"-"+higherDegreeobtainUniversityArr[i];
		
		var OtherQualificationOne = qualificationOneArr[i]+"-"+qualificationAwardingAuthorityOneArr[i]+"-"+qualificationAwardingYearOneArr[i];
		
		var OtherQualificationTwo = qualificationTwoArr[i]+"-"+qulificationAwardingAuthorityTwoArr[i]+"-"+qulificationAwardingYearTwoArr[i];
		
		var WorkExpOne = designationOneArr[i]+"-"+companyOneArr[i];
		
		var WorkExpTwo = designationTwoArr[i]+"-"+companyTwoArr[i];
		
		var WorkExpThree = designationThreeArr[i]+"-"+companyThreeArr[i];
		
			csvData.push('"'+applicationNoArr[i]+'","'+studentPersonalTitleArr[i]+'","'+studentInitialArr[i]+'","'+studentNameArr[i]+'","'+studentNICArr[i]+'","'+studentDateofbirthArr[i]+'","'+studentPermanentAddressArr[i]+'","'+studentContactLanArr[i]+'","'+studentContactMobileArr[i]+'","'+studentContactEmailArr[i]+'","'+EduQualificationOne+"--"+EduQualificationTwo+'","'+OtherQualificationOne+"--"+OtherQualificationTwo+'","'+WorkExpOne+"--"+WorkExpTwo+"--"+WorkExpThree+'"');
	
		}

		var csvString = csvData.join("%0A");
		var a         = document.createElement('a');
		a.href        = 'data:attachment/csv,' + csvString;
		a.target      = '_blank';
		a.download    = 'myFile.csv';

		document.body.appendChild(a);
		a.click();
	

}
