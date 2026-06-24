//code by chamoda
function formDocumentItem(dsp)
{
	str = "";
	title = "Create Document Template";
	
	if ( dsp == "formDocumentItem")
	{
		str = '<div id = "AddDocumentItem">';
		str +="<div style='float:left;width:100%;height:50px;'>";
		str +="<div style='float:right;padding:15px;'>";
		str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
		str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
		str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
		str +="</div></div><br/>";
					
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formDocumentItem"><br>';
		str +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;'>";
	    if(dataRep['selectID']== 'StudentID'){
			studentIDChecked = 'checked';
	    } else if(dataRep['selectID']=='documentID'){
			documentIDChecked = 'checked'}
		
		str +="<input  type='radio' name='selectID' id='selectStudentID' value= 'StudentID'";
		str +=studentIDChecked;
		str +=" onclick='studentOnClick();'>Student Base Document";
		str +="<input  type='radio' name='selectID' id='selectDocumentID' value= 'documentID'";
		str +=documentIDChecked;
		str +=" onclick='listOnClick();'>List Base Document</div></div>";
		str += "</div>";
		
		var selectdocument;
		var selectlistdocument;
		for(var i=0; i<documentIDLength; i++)
		{
			
			 if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i))
			 {
				 if(/List/.test(documentNameArr[i]))
				 {
					  selectlistdocument += "<option> "+documentNameArr[i]+" </option>";
				 }
                 else
				 {
					  selectdocument += "<option> "+documentNameArr[i]+" </option>";
				 }
			 }
			
			   	
					   	
		}
        //To select student base document
		
		str += "<div class='identifiers'>Select Document</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectstudentdocument' id='selectstudentdocument' disabled='disabled' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectdocument;
		str += "</select><br>";	

	//To select list base document
        
		str += "<div class='identifiers'>Select Document</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectlistdocument' id='selectlistdocument' disabled='disabled'  onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectlistdocument;
		str += "</select><br>";			
		
		// To select data Items
		str +="<div style='margin-top:0px;float:left;clear:both;' class = 'demoprint'>";
        str +="<fieldset  class='field'><legend class='fieldHead' style = 'width: 400px'>Select Data Items</legend><div style='clear:both'><div class='rdo'>";
		
		for(var i=0; i<dataItemIDLength; i++)
		{
			 if (dataItemIDArr.indexOf(dataItemIDArr[i]) == dataItemIDArr.lastIndexOf(dataItemIDArr[i]) || (dataItemIDArr.indexOf(dataItemIDArr[i]) != dataItemIDArr.lastIndexOf(dataItemIDArr[i]) && dataItemIDArr.indexOf(dataItemIDArr[i])==i))
			 {
			
                if (dataItemNameArr.indexOf(dataItemNameArr[i]) == dataItemNameArr.lastIndexOf(dataItemNameArr[i]) || (dataItemNameArr.indexOf(dataItemNameArr[i]) != dataItemNameArr.lastIndexOf(dataItemNameArr[i]) && dataItemNameArr.indexOf(dataItemNameArr[i])==i))   
				
				{		
                      
					   str +="<br>";			
				       str +="<input  type='checkbox' name='documentItem"+i+"'  id='documentItem"+i+"' disabled='disabled' class='changeColor'>"+dataItemNameArr[i]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
				}	
			 }	
                    					
		}
        str += "</div>";
        str += "</div>";
		str +="</fieldset>";
		str += "</div>";
		

		
		str += '<br><br><br><br><br><br><br><br><input type = "button" class ="btn" value="save" onclick=formDocumentItemsendForm('+"'addDocumentItem'"+');>';
		str += '<input type="button" class="btn" value = "Return" onclick = clearCheckboxes();showMenu('+"'formDocumentMenu'"+');>';
		
		
		
		str += '</form>';
		str += '</td>';
		str += '</tr>';
		str += '</table>';
		str += '</div>';
	}
	
	return str;
}
function studentOnClick()
{
	  document.getElementById("selectstudentdocument").disabled=false;
	  document.getElementById("selectlistdocument").disabled='disabled';
	  document.getElementById("selectlistdocument").value ='Please scroll down to see the records';
	  for(var i=0; i<dataItemIDLength; i++)
	 {
			  document.getElementById('documentItem'+i).disabled=false;
	 }
}

function listOnClick()
{
	document.getElementById("selectlistdocument").disabled=false;
	document.getElementById("selectstudentdocument").disabled='disabled';
	document.getElementById("selectstudentdocument").value ='Please scroll down to see the records';
	 for(var i=0; i<dataItemIDLength; i++)
	 {
		 if (dataItemNameArr[i]=='Programm Title' || dataItemNameArr[i]=='Achedamic Year' || dataItemNameArr[i]=='Student No' || dataItemNameArr[i]=='Application No'  )
		 {
			 document.getElementById('documentItem'+i).disabled=false;
		 }
         else
		 {
			  document.getElementById('documentItem'+i).disabled='disabled';
		 }
	 }
}

function formDocumentItemsendForm(frm)
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
		
		if(frm == 'addDocumentItem')
		{
			doc = document.formDocumentItem;
			dataStr += "&interface="+frm;
			var x;
			var docID=0;
			if (document.getElementById("selectstudentdocument").value != 'Please scroll down to see the records' )
			{
				x= document.getElementById('selectstudentdocument').value;
			}
			if (document.getElementById("selectlistdocument").value != 'Please scroll down to see the records' )
			{
				x= document.getElementById('selectlistdocument').value;
			}
	
			for (var i=0;i<documentIDLength; i++)
			{
				if (documentNameArr[i]==x )
				{
					docID = documentIDArr[i];
					//alert(docID);
				}
			}

			for(var i=0; i<dataItemIDLength; i++)
			{
                     if (document.getElementById('documentItem'+i).checked == true)
				    {
							dataStr += "&documentID="+docID;
                            dataStr += "&dataItemID="+dataItemIDArr[i];
							documentData[i]= dataStr;
					
				    }
				//documentData[i]= dataStr;
			}
			var count=0;
			for(var i=0; i<dataItemIDLength; i++)
			{
                    if (document.getElementById('documentItem'+i).checked == true)
				    {
					      count++; 						  
				    }
			}
			if (document.getElementById('selectstudentdocument').value== 'Please scroll down to see the records' && document.getElementById("selectlistdocument").value == 'Please scroll down to see the records' )
			{
				alert("please select document");
			}
			else if (count== 0)
			{
				alert('please select at least one data item');
			}
			else
			{
				
			  for(var i=0; i<dataItemIDLength; i++)
		      {
				  
				  if(documentData[i] != "" && documentData[i]!= documentData[i-1] && documentData[i] != undefined )
				  {
					   // alert (documentData[i]);
                       isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentData[i]);
						dataRep['selectID']= "";
						documentData[i]="";
				  }
			        
		       }
			}
			
			
		}
		
return 0;
}

function clearCheckboxes()
{
	dataItemIDLength=0;
	dataRep['selectID']= "";
}