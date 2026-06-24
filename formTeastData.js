
function formTestData(dsp)
{
		str = "";
		title = "List of Applicants";
		
		if(dsp == "formTestData") 
		{
		

			str  = "<div id='testFormData'>";

			str += "<div>"
			str += '<h2 id="mainRequestTitle">'+title+'</h2><hr>';
			str += '<form name="formTestData"><br><br>';

		    str +="<div id='topics' class='info'>";
            str +="<div class='investLabel_l'>Transaction Subcode</div>";
		
		
		    for( var i=0; i<transactionCodeLength; i++)
		    {
			    str +="<div class='info'   name='testInfo"+i+"'>";
			
			    str += "<div class='investView_l' name='transactionSubCode"+i+"=' id='transactionSubCode"+i+"' onchange='dataRep[this.name]=this.value;'>";
			    str += transactionSubCodeArr[i]+"</div>";
			
			    str +="<div >&nbsp;</div>"
			    str += "<br/>";
			
			    str +="</div>";
			
		    }

		    str += "</div>";
		    str +="<div style='clear:both'>&nbsp;</div>"
	        str += "<input type='button' class='btn' value='Save'  onclick=>"; 
		    str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentProfileMenu'"+');>';
				
			//str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';

		    str +="</div>";

		    str += '</form>';
		    str += '</div>';
		    str += "</div>";
		
		}
		return str;
}