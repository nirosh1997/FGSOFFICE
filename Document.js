//code by chamoda
dataRep['documentName']="";
dataRep['search']="";
var c=1;
var x=0;
function formDocument(dsp)
{
	// test
	str = "";
	title = "Add Document";
	
	if ( dsp == "formDocument")
	{
		str = '<div id = "AddDocument">';
					
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formDocument"><br>';
		if (documentIDLength !=0)
		{
			x=documentIDLength;
		}
	
		for(var i=0; i<documentIDLength; i++)
		{
			if (documentIDArr.indexOf(documentIDArr[i]) == documentIDArr.lastIndexOf(documentIDArr[i]) || (documentIDArr.indexOf(documentIDArr[i]) != documentIDArr.lastIndexOf(documentIDArr[i]) && documentIDArr.indexOf(documentIDArr[i])==i))
			{
				c=i;
			}
		}
		if (documentIDLength != 0 )
		{
			c=c+2;
		}
		
		
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Document ID</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='documentID' id ='documentID' disabled='disabled'  style = 'width: 300px'";
		str += "value= '"+c+"' onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		
		// To insert document Name
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Document Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='documentName' id ='documentName' style = 'width: 300px;text-transform:capitalize'";
		str += "onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		//str += "value= '"+dataRep['documentName'].trim()+"' onchange = 'dataRep [this.name] = this.value;'>"; 
		str += '<br><br><input type = "button" class ="btn" value="save" onclick=formDocumentsendForm('+"'addDocument'"+');>';
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formDocumentMenu'"+');values1();>';
		str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
		
		var dlist="";
		str += '<br>';
		str += '<br>';
		str += '<br>';
		str +="<div style=margin-top:0px;float:left;clear:both;' ' class = 'demoprint' >";
        str +="<fieldset  class='field'><legend class='fieldHead'>Available Documents</legend><div style='clear:both'><div class='rdo'>";
		for(var i=0; i<x; i++)
		{ 
			 if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i))
					{
						if (documentNameArr[i] != 'undefined')
						{
							dlist += "<li><b>*</b>&nbsp;&nbsp;"+documentNameArr[i]+" </li>";	
						}
							
					}
				           
		}
		str += '<font color="black">';
		str += '<ul>';
		str += dlist;
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


function formDocumentsendForm(frm)
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
		
		
		  if(frm == 'addDocument')
          {
			     doc = document.formDocument;
			     dataStr += "&interface="+frm;
                 dataStr += "&documentID="+doc.documentID.value;
			     dataStr += "&documentName="+dataRep['documentName'];
				 c=doc.documentID.value;
				
		  }
		  var count=0;
		   for (var i=0; i<x; i++)
		   {
			   if (documentNameArr[i] ==document.getElementById('documentName').value  )
			   {
				   
				   count++;
			   }
		   }
		   if (document.getElementById('documentName').value=="")
		   {
			   alert('Please enter Document Name');
		   }
		   else
		   {
		         if (count == 0)
		        {
			           //alert (dataStr);
			           isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		
		               document.getElementById('documentID').value="";
			           document.getElementById('documentName').value="";
		               c++;
		               document.getElementById('documentID').value=c;
					   documentIDLength=0;
			           dataRep['documentName']="";
		        }
		        else
		        {
			           alert("already have")
			           dataRep['documentName']="";
		        }
				
		   }
		   
			 
		   
		
  return 0;
}

function values1()
{
	dataRep['documentName']="";
	documentIDLength=0;
	//document.getElementById('documentName').value="";
	//document.getElementById('documentID').value="";
	document.getElementById('documentName').value="";
	c=0;
}