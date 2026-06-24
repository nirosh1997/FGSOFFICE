//Coded By S.Suraweera


function formFilterApplication(dsp) {





		str = "";
		title = "List of Applicants";
		
		if(dsp == "formFilterApplication") {
		
		str  = "<div id='FilterApplication'>";

			str += "<div>"
			str += '<h2 id="mainRequestTitle">'+title+'</h2><hr>';
			str += '<form name="maintainformFilterApplication"><br><br>';
			
			programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<applicationNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
							}
			
			str +="<div class='identifiers'>Select the Programm</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";	
		
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
		str += '<input type="button" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=filterList();>';
		
			
			str +="</div>";

		str += '</form>';
		str += '</div>';
		str += "</div>";
		
		}

		return str;
	}