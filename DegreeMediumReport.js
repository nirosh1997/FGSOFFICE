

function formDegreeMediumReport(dsp) {

		str = "";
		title = "New User";
	

			if(dsp == "formDegreeMediumReport") {
				title = "Degree Medium Report";					

			str  = "<div id='degreeReport'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="formDegreeMediumReport">';
			
		//	str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
		//	str +="<div  id='list' style='margin:clear:both'>";  
		//	str +="</div>";
			
			
			
			
							programName="<option>All</option>";
							for(i = 0; i<degreeCodeLength; i++) {
							if(facultyTitleArr[i] != null){	
							   if (facultyTitleArr.indexOf(facultyTitleArr[i]) == facultyTitleArr.lastIndexOf(facultyTitleArr[i]) || (facultyTitleArr.indexOf(facultyTitleArr[i]) != facultyTitleArr.lastIndexOf(facultyTitleArr[i]) && facultyTitleArr.indexOf(facultyTitleArr[i])==i)){
							programName += "<option>"+facultyTitleArr[i]+"</option>";

									}
								 }
							}
				
			
			
			str +="<div class='identifiers'>Select the Faculty</div><div class='colon'>&nbsp;&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedFaculty' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";	
				
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=filterFacList();>';
			
			str +="<div style='float:left'>_____________________________________________________________________________________________________________________________________________________________</div>";
			
			str +="<div  id='list' style='margin:clear:both'>";  
			str +="</div>";
			str +="<div style='clear:both'>&nbsp;</div>"
			
			
			
			str += '<input type="button" class="btn" value = "Return" onclick =showMenu('+"'formClerkMenu'"+');>';
			str += '<input type = "button" class ="btn2" value="Reset" onclick="sendForm('+"'data4DegreeMediumReport'"+')">';
			str +="</form>";
			str += '</td></tr></table>';
			str += "</div>";
		}
		return str;
	}
	
	function filterFacList(){
		var	viewStr ="<div id='topics' class='info'>";
			viewStr +="<div class='investLabel_l'>No.</div>";
			viewStr +="<div class='investLabel'>Faculty Title</div>";
			viewStr +="<div class='investLabel'>Degree Code</div>";
			viewStr +="<div class='investLabel_l'>Degree Title</div>";
			viewStr +="<div class='investLabel_l'>Sinhala</div>";
			viewStr +="<div class='investLabel_l'>English</div>";
			//viewStr +="<div class='investLabel'>Tamil</div>";
			viewStr +="</div></br>";
			var count=0;
			//var medium=null;
			var temp=null;
		
			
			for(var i=0; i<degreeCodeLength; i++){
			if (degreeCodeArr.indexOf(degreeCodeArr[i]) == degreeCodeArr.lastIndexOf(degreeCodeArr[i]) || (degreeCodeArr.indexOf(degreeCodeArr[i]) != degreeCodeArr.lastIndexOf(degreeCodeArr[i]) && degreeCodeArr.indexOf(degreeCodeArr[i])==i)){
		
			if(document.getElementById('selectedFaculty').value=='All'){
			
			temp=mediumArr[i];
			//if(medium.charAt(3)=='/'){
			//	temp=medium.split("/");
			//}else
			//	temp=medium;
			
			viewStr +="<div class='info'   name='testInfo"+i+"'>";
				
				count++;
			
			
			viewStr += "<div class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div>";
			
			
			viewStr += "<div class='investView_l' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += facultyTitleArr[i]+"</div>";
				
			viewStr += "<div class='investView' name='degreeCode"+i+"' id='degreeCode"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeCodeArr[i]+"</div>";	
				
			viewStr += "<div class='investView_l' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeTitleArr[i]+"</div>";	
			
			if(temp=='Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'> </div>";
			}
			else if(temp=='Eng'){
			viewStr += "<div class='investView_l'> </div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else{
			viewStr += "<div class='investView_l'>Not Defined</div>";
			viewStr += "<div class='investView'>Not Defined</div>";
			}
				
				viewStr +="<div >&nbsp;</div>"
			viewStr += "<br/>";
			viewStr +="</div>";
			}
			else if(document.getElementById('selectedFaculty').value==facultyTitleArr[i]){
			
				viewStr +="<div class='info'   name='testInfo"+i+"'>";
				
				count++;
			temp=mediumArr[i];
			
			viewStr += "<div class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div>";
			
			
			viewStr += "<div class='investView_l' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += facultyTitleArr[i]+"</div>";
				
			viewStr += "<div class='investView' name='degreeCode"+i+"' id='degreeCode"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeCodeArr[i]+"</div>";	
				
			viewStr += "<div class='investView_l' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeTitleArr[i]+"</div>";	
			
			if(temp=='Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'> </div>";
			}
			else if(temp=='Eng'){
			viewStr += "<div class='investView_l'> </div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else{
			viewStr += "<div class='investView_l'>Not Defined</div>";
			viewStr += "<div class='investView'>Not Defined</div>";
			}
				
				viewStr +="<div >&nbsp;</div>"
			viewStr += "<br/>";
			viewStr +="</div>";
			}
			}
			}
			document.getElementById('list').innerHTML += viewStr;
	 document.getElementById("View-List").disabled= true;
			
	}
	
	function getlistSinhala()
{
			var	viewStr ="<div id='topics' class='info'>";
			viewStr +="<div class='investLabel_l'>No.</div>";
			viewStr +="<div class='investLabel'>Faculty Title</div>";
			viewStr +="<div class='investLabel'>Degree Code</div>";
			viewStr +="<div class='investLabel_l'>Degree Title</div>";
			viewStr +="<div class='investLabel_l'>Sinhala</div>";
			viewStr +="<div class='investLabel_l'>English</div>";
			//viewStr +="<div class='investLabel'>Tamil</div>";
			viewStr +="</div></br>";
			var count=0;
			//var medium=null;
			var temp=null;
		
			
			for(var i=0; i<degreeCodeLength; i++){
			if (degreeCodeArr.indexOf(degreeCodeArr[i]) == degreeCodeArr.lastIndexOf(degreeCodeArr[i]) || (degreeCodeArr.indexOf(degreeCodeArr[i]) != degreeCodeArr.lastIndexOf(degreeCodeArr[i]) && degreeCodeArr.indexOf(degreeCodeArr[i])==i)){
		
			if(document.getElementById('selectedFaculty').value=='All'){
			
			temp=mediumArr[i];
			//if(medium.charAt(3)=='/'){
			//	temp=medium.split("/");
			//}else
			//	temp=medium;
			
			viewStr +="<div class='info'   name='testInfo"+i+"'>";
				
				count++;
			
			
			viewStr += "<div class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div>";
			
			
			viewStr += "<div class='investView_l' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += facultyTitleArr[i]+"</div>";
				
			viewStr += "<div class='investView' name='degreeCode"+i+"' id='degreeCode"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeCodeArr[i]+"</div>";	
				
			viewStr += "<div class='investView_l' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeTitleArr[i]+"</div>";	
			
			if(temp=='Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'> </div>";
			}
			else if(temp=='Eng'){
			viewStr += "<div class='investView_l'> </div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else{
			viewStr += "<div class='investView_l'>Not Defined</div>";
			viewStr += "<div class='investView'>Not Defined</div>";
			}
				
				viewStr +="<div >&nbsp;</div>"
			viewStr += "<br/>";
			viewStr +="</div>";
			}
			else if(document.getElementById('selectedFaculty').value==facultyTitleArr[i]){
			
				viewStr +="<div class='info'   name='testInfo"+i+"'>";
				
				count++;
			temp=mediumArr[i];
			
			viewStr += "<div class='investView' name='count"+i+"' id='count"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += count+"</div>";
			
			
			viewStr += "<div class='investView_l' name='facultyTitle"+i+"' id='facultyTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += facultyTitleArr[i]+"</div>";
				
			viewStr += "<div class='investView' name='degreeCode"+i+"' id='degreeCode"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeCodeArr[i]+"</div>";	
				
			viewStr += "<div class='investView_l' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			viewStr += degreeTitleArr[i]+"</div>";	
			
			if(temp=='Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'> </div>";
			}
			else if(temp=='Eng'){
			viewStr += "<div class='investView_l'> </div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else if(temp=='Sin/Eng' || temp=='Eng/Sin'){
			viewStr += "<div class='investView_l'>Y</div>";
			viewStr += "<div class='investView'>Y</div>";
			}
			else{
			viewStr += "<div class='investView_l'>Not Defined</div>";
			viewStr += "<div class='investView'>Not Defined</div>";
			}
				
				viewStr +="<div >&nbsp;</div>"
			viewStr += "<br/>";
			viewStr +="</div>";
			}
			}
			}
			document.getElementById('list').innerHTML += viewStr;
	 document.getElementById("View-List").disabled= true;
	var csvData = new Array();
	
	csvData.push(viewStr);
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
}