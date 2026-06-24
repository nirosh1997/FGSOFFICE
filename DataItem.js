
dataRep['dataItemID']="";
dataRep['dataItemName']="";
var d=1;
var q=0;

function formDataItem(dsp)
{
	str = "";
	title = "Add Data Item";
	
	if ( dsp == "formDataItem")
	{
		str = '<div id = "AddDataItem">';
					
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formDataItem"><br>';
		if (dataItemIDLength !=0)
		{
			q=dataItemIDLength;
		}
		// to insert dataItemID
		for(var i=0; i<dataItemIDLength; i++)
		{
			
			if (dataItemIDArr.indexOf(dataItemIDArr[i]) == dataItemIDArr.lastIndexOf(dataItemIDArr[i]) || (dataItemIDArr.indexOf(dataItemIDArr[i]) != dataItemIDArr.lastIndexOf(dataItemIDArr[i]) && dataItemIDArr.indexOf(dataItemIDArr[i])==i))
			{
				
				if (dataItemIDArr[i] != undefined)
				{
					d=i;
				}
			}
		}
		
		if (dataItemIDLength != 0 )
		{
			d=d+2;
		}
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Data Item ID</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='dataItemID' id ='dataItemID' disabled='disabled' style = 'width: 300px'";
		str += "value= '"+d+"' onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		
		// To insert dataItemName
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Data Item Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='dataItemName' id ='dataItemName' style = 'width: 300px;text-transform:capitalize'";
		str += "onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		
		str += '<br><input type = "button" class ="btn" value="save" onclick=formDataItemsendForm('+"'addDataItem'"+');>';
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formDocumentMenu'"+');values2();>';
		str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
		
		var dilist="";
		str += '<br>';
		str += '<br>';
		str += '<br>';
		str +="<div style=margin-top:0px;float:left;clear:both;' ' class = 'demoprint' >";
        str +="<fieldset  class='field'><legend class='fieldHead'>Available Data Items</legend><div style='clear:both'><div class='rdo'>";
		for(var i=0; i<q; i++)
		{ 
					if (dataItemIDArr.indexOf(dataItemIDArr[i]) == dataItemIDArr.lastIndexOf(dataItemIDArr[i]) || (dataItemIDArr.indexOf(dataItemIDArr[i]) != dataItemIDArr.lastIndexOf(dataItemIDArr[i]) && dataItemIDArr.indexOf(dataItemIDArr[i])==i))
					{
						if (dataItemNameArr[i]!= undefined)
						{
							dilist += "<li><b>*</b>&nbsp;&nbsp;"+dataItemNameArr[i]+" </li>";	
						}
							
					}
				           
		}
		str += '<font color="black">';
		str += '<ul>';
		str += dilist;
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

function formDataItemsendForm(frm)
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
		
		if(frm == 'addDataItem')
		{
			doc = document.formDataItem;
			dataStr += "&interface="+frm;
			
            dataStr += "&dataItemID="+doc.dataItemID.value;
			dataStr += "&dataItemName="+dataRep['dataItemName'];
		    d= doc.dataItemID.value;	
			
		}
		 var count=0;
		 for (var i=0; i<q; i++)
		 {
			if (dataItemNameArr[i] ==document.getElementById('dataItemName').value  )
			{
				count++;
			}
		}
		if (document.getElementById('dataItemName').value=="")
		{
			   alert('Please enter DataItem Name');
		}
		else
		{
			if (count == 0)
			{
				//alert (dataStr);
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		        document.getElementById('dataItemID').value="";
			    document.getElementById('dataItemName').value="";
		        d++;
		       document.getElementById('dataItemID').value=d;
			   dataItemIDLength=0;
			   dataRep['dataItemName']="";
			}
			else
			{
			   alert('already have');
			   dataRep['dataItemName']="";
			}
			
		}
		    
		
return 0;
}
function values2()
{
	dataItemIDLength=0;
	dataRep['dataItemName']="";
}

