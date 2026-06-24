dataRep['decisionMakingPointID']="";
dataRep['decisionMakingPointName']="";
var e=1;
var y=0;
function formDecisionMakingPoint(dsp)
{
	str = "";
	title = "Add Decision Making Point";
	
	if ( dsp == "formDecisionMakingPoint")
	{
		str = '<div id = "AddDecisionMakingPoint">';
					
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formDecisionMakingPoint"><br>';
		if (decisionMakingPointIDLength !=0)
		{
			y=decisionMakingPointIDLength;
		}
		// to insert decisionMakingPointID
		for(var i=0; i<decisionMakingPointIDLength; i++)
		{
			if (decisionMakingPointIDArr.indexOf(decisionMakingPointIDArr[i]) == decisionMakingPointIDArr.lastIndexOf(decisionMakingPointIDArr[i]) || (decisionMakingPointIDArr.indexOf(decisionMakingPointIDArr[i]) != decisionMakingPointIDArr.lastIndexOf(decisionMakingPointIDArr[i]) && decisionMakingPointIDArr.indexOf(decisionMakingPointIDArr[i])==i))
			{
				e=i;
			}
		}
		if (decisionMakingPointIDLength != 0 )
		{
			e=e+2;
		}
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Decision Making point ID</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='decisionMakingPointID' id ='decisionMakingPointID' disabled='disabled' style = 'width: 300px'";
		str += "value= '"+e+"'  onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		str += '<br>';
		// To insert decisionMakingPointName
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Decision Making Point Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='decisionMakingPointName' id ='decisionMakingPointName'  style = 'width: 300px;text-transform:capitalize'";
		str += "onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		
		str += '<br><input type = "button" class ="btn" value="save" onclick=formDecisionMakingPointsendForm('+"'addDecisionMakingPoint'"+');>';
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formDocumentMenu'"+'); values();>';
		str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
		var dmplist="";
		str += '<br>';
		str += '<br>';
		str += '<br>';
		for(var i=0; i<y; i++)
		{ 
					if (decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i]) == decisionMakingPointNameArr.lastIndexOf(decisionMakingPointNameArr[i]) || (decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i]) != decisionMakingPointNameArr.lastIndexOf(decisionMakingPointNameArr[i]) && decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i])==i))
					{
						if (decisionMakingPointNameArr[i] =='undefined')
						{
							//alert(decisionMakingPointNameArr[i]);
							
						}
						else{
							dmplist += "<li> <b>*</b>&nbsp;&nbsp;"+decisionMakingPointNameArr[i]+" </li>";	
						}
							
					}
				           
		}
		str +="<div style=margin-top:0px;float:left;clear:both;' ' class = 'demoprint' >";
        str +="<fieldset  class='field'><legend class='fieldHead'>Available Decision Making Points</legend><div style='clear:both'><div class='rdo'>";
		str += '<font color="black">';
		str += '<ul>';
		str += dmplist;
		str += '</ul>';
		str += "</div>";
		str += "</div>";
		str += '</font>';
		str +="</fieldset>"
		str += "</div>";
		
		
		
		str += '</form>';
		str += '</td>';
		str += '</tr>';
		str += '</table>';
		str += '</div>';
	}
	
	return str;
}

//Add document Data

function formDecisionMakingPointsendForm(frm)
{
	
	var doc, dataStr;
	
    if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addDecisionMakingPoint')
		{
			doc = document.formDecisionMakingPoint;
			dataStr += "&interface="+frm;
            
			dataStr += "&decisionMakingPointID="+doc.decisionMakingPointID.value;
			dataStr += "&decisionMakingPointName="+dataRep['decisionMakingPointName'];
			e=doc.decisionMakingPointID.value;
			
			
		}
		var count=0;
	    for (var i=0; i<y; i++)
	   {
			   if (decisionMakingPointNameArr[i] ==document.getElementById('decisionMakingPointName').value  )
			   {
				   
				   count++;
			   }
		}
		if (document.getElementById('decisionMakingPointName').value == "")
		{
			alert("Please Enter Decision Making point Name")
			
		}
		else
		{
			if (count == 0)
			{
				//alert (dataStr);
			    isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			    document.getElementById('decisionMakingPointID').value="";
			    document.getElementById('decisionMakingPointName').value="";
		        e++;
		        document.getElementById('decisionMakingPointID').value=e;
			    decisionMakingPointIDLength=0;
			    dataRep['decisionMakingPointName']="";
			}
			else
			{
				alert('already have');
			}
			
			
			
		}
		
		
		
return 0;
}
function values()
{
	decisionMakingPointIDLength=0;
	dataRep['decisionMakingPointName']="";
	
}