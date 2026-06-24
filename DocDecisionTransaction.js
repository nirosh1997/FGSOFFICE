
//code by chamoda
dataRep['decisionYYYY']="";
dataRep['decisionMM']="";
dataRep['decisionDD']="";
dataRep['number']="";
dataRep['remarks']="";
dataRep['ProcessID']="";
var selectdocument;
var c;
var idLength=1;
var studentIDChecked, documentIDChecked="";
var sname=0;
var studentlist="";


function formDocDecisionTransaction(dsp)
{
	str = "";
	title = "Document Decision Transaction";
	
	if ( dsp == "formDocDecisionTransaction")
	{
		str = '<div id = "AddDocument">';
		str +="<div style='float:left;width:100%;height:50px;'>";
		str +="<div style='float:right;padding:15px;'>";
		str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
		str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
		str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
		str +="</div></div><br/>";
					
		str += "<table style='layout: auto'><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formDocDecisionTransaction"><br>';
		
		
		str +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;'>";
	    if(dataRep['selectID']== 'StudentID'){
			studentIDChecked = 'checked';
	    } else if(dataRep['selectID']=='documentID'){
			documentIDChecked = 'checked'}
		
		str +="<input  type='radio' name='selectID' id='selectStudentID' value= 'StudentID'";
		str +=studentIDChecked;
		str +=" onclick='dataRep[this.name]=this.value;studentIDOnClick();'>Student Base Document";
		str +="<input  type='radio' name='selectID' id='selectDocumentID' value= 'documentID'";
		str +=documentIDChecked;
		str +=" onclick='dataRep[this.name]=this.value;documentIDOnClick();'>List Base Document</div></div>";
		str += "</div>";
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formClerkDocumentMenu'"+');values1();>';
		
		for(var i=0; i<studentNameLength; i++)
		{
			studentlist += "<option value='"+studentlistArr[i]+"'>";
		}
		str +="<div  id ='selectwithstudentid' style=visibility:hidden;>";
		str +="<div style=margin-top:0px;float:left;clear:both;' ' class = 'demoprint' >";
        str +="<fieldset  class='field'><legend class='fieldHead'>Student Base Document</legend><div style='clear:both'><div class='rdo'>";
		//To insert ProcessID
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Student ID</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='ProcessID' list='liststudent' id ='ProcessID' disabled='disabled' style = 'width: 300px'";
		str += "onchange = 'dataRep [this.name] = this.value;getdocument()' onclick='atOnClick()'>"; 
		str += "<datalist id='liststudent'>"+studentlist+"</datalist>"; 
		str += "</div><br><br>";
		// to insert documentID 
		str += "<div class='identifiers'> Document</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectdocument' id='selectdocument' disabled='disabled' style = 'width: 300px'>";
		str +="<option>Please scroll down to see the records</option>";
		str += "</select>";	
        str += '<br><input type = "button" class ="btn" value="Add Decision" onclick=validateStudentBase();>';
		str += '<input type = "button" class ="btn" value="Reset" onclick="sendForm('+"'data4decisionMakingPoint'"+');sendForm('+"'data4document'"+');sendForm('+"'data4studentlist'"+');sendForm('+"'data4formDocDecisionTransaction'"+');sendForm('+"'data4decisionprogramm'"+')">';
		str += "</div>"; //showMenu('+"'formClerkMenu'"+');
		str += "</div>";
		str +="</fieldset>";
		str += "</div>";
		str += "</div>";
	   
		 // to insert documentID 
		str +="<div  id ='selectwithdocumentid' style=visibility:hidden;position:fixed;top:265px;>";
	    str +="<div style='margin-top:0px;float:left;clear:both;' class = 'demoprint'>";
        str +="<fieldset  class='field'><legend class='fieldHead'>List Base Document</legend><div style='clear:both'><div class='rdo'>";
	    var selectdocument1;
	    for(var i=0; i<documentIDLength; i++)
		{
			if (documentIDArr.indexOf(documentIDArr[i]) == documentIDArr.lastIndexOf(documentIDArr[i]) || (documentIDArr.indexOf(documentIDArr[i]) != documentIDArr.lastIndexOf(documentIDArr[i]) && documentIDArr.indexOf(documentIDArr[i])==i))
			{
				if(/List/.test(documentNameArr[i]) ||/list/.test(documentNameArr[i])){
				  selectdocument1 += "<option> "+documentNameArr[i]+" </option>";
				}				  
			}
		}
		str += "<div class='identifiers'>Document </div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectdocument1' id='selectdocument1' disabled='disabled'  style = 'width: 250px'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectdocument1;
		str += "</select><br>";
	   var selectdegree;
	   for (var i=0; i< degreeCodeLength;i++){
		  // alert(degreeTitleArr[i]);
		  if (degreeTitleArr[i] != degreeTitleArr[i-1])
		  {
              selectdegree +="<option>"+degreeTitleArr[i]+" </option>";
		  }
		   
	   }

        str += "<div class='identifiers'>Select Programm </div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectdegree' id='selectdegree'   style = 'width: 250px'>";
		str +="<option>Please scroll down to see the records</option>";
		if (selectdegree !=undefined){
		 str += selectdegree;	
		}
		
		str += "</select>";
		
		
		//str += "<div class='identifiers'>Year</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<select name='selectYYYY' id='selectYYYY' value='selectYYYY'   onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2010, 2025, 4, dataRep['selectYYYY']);
        str += "</select>";
		str += "</div>";
		str += '<br><input type = "button" class ="btn" value="Add Decision" onclick=validateListBase();>';
		str += '<input type = "button" class ="btn" value="Reset" onclick="sendForm('+"'data4decisionMakingPoint'"+');sendForm('+"'data4document'"+');sendForm('+"'data4studentlist'"+');sendForm('+"'data4formDocDecisionTransaction'"+');sendForm('+"'data4decisionprogramm'"+')">';
		
		str += "</div>";
		str += "</div>";
		str += "</div>";
		str +="</fieldset>";
		str += "</div>";
		str += "</div>";
		str += "<br>";
		
		
		str += '</form>';
		str += '</td>';
		str += '</tr>';
		str += '</table>';
		str += '</div>';
			}
		return str;
	}
	
function addStudentData()
{
	if (document.getElementById("ProcessID").value != "")
			{
				//dataRep['itemValue1']= document.getElementById('selectdocument').value;
			    dataRep['itemValue1']= document.getElementById("ProcessID").value;
				dataRep['itemValue2']= document.getElementById("ProcessID").value;
			}
			
			
for(var i=0; i<documentIDLength; i++)
		{
			if (documentIDArr.indexOf(documentIDArr[i]) == documentIDArr.lastIndexOf(documentIDArr[i]) || (documentIDArr.indexOf(documentIDArr[i]) != documentIDArr.lastIndexOf(documentIDArr[i]) && documentIDArr.indexOf(documentIDArr[i])==i))
			{

				if (document.getElementById("selectdocument").value==documentNameArr[i])
				{
					
					var docID=documentIDArr[i];
	
				}
			}
		}
			dataRep['docmentID']=docID;
			
dataRep['itemValue1']= document.getElementById("ProcessID").value;
dataRep['itemValue2']=document.getElementById("ProcessID").value;
dataRep['selectdocument']=document.getElementById("selectdocument").value;
sendForm('data4formDocDecisionTransactionTwo');
}


function addData()
{
	 dataRep['itemValue1']=document.getElementById("selectdegree").value;
     dataRep['itemValue2']=document.getElementById("selectYYYY").value;
	 var tempdocID=document.getElementById("selectdocument1").value;
	 for(var i=0; i<documentIDLength; i++)
		{
			if (documentIDArr.indexOf(documentIDArr[i]) == documentIDArr.lastIndexOf(documentIDArr[i]) || (documentIDArr.indexOf(documentIDArr[i]) != documentIDArr.lastIndexOf(documentIDArr[i]) && documentIDArr.indexOf(documentIDArr[i])==i))
			{

				if (document.getElementById("selectdocument1").value==documentNameArr[i])
				{
					
					var docID=documentIDArr[i];
	
				}
			}
		}
		    dataRep['docmentID']=docID;
			dataRep['DocumentName']= document.getElementById("selectdocument1").value;
			sendForm('data4formDocDecisionTransactionTwo');
}


function studentIDOnClick()
{ 
	  document.getElementById("selectdocument1").disabled='disabled';
	  document.getElementById("ProcessID").disabled=false;
	  document.getElementById("selectdocument1").value ='Please scroll down to see the records';  
	  //document.getElementById("selectwithstudentid").style.position="absolute";
	  //document.getElementById("selectwithstudentid").style.top="275px";
	  document.getElementById("selectwithstudentid").style.visibility = "visible"; 
	  document.getElementById("selectwithdocumentid").style.visibility = "hidden";
	document.getElementById("msgArea").innerHTML =document.getElementById("msgArea").innerHTML.replace="";	  
      dataRep['documentIDType']="";
	  dataRep['documentType']='student';
}

function documentIDOnClick()
{
document.getElementById("ProcessID").disabled='disabled';
	 document.getElementById("selectdocument1").disabled=false;
	 document.getElementById("ProcessID").value =""; 
	 document.getElementById("selectdocument").disabled='disabled';
//document.getElementById("selectwithstudentid").style.position="fixed";
	 //document.getElementById("selectwithdocumentid").style.top="275px";
	  document.getElementById("selectwithstudentid").style.visibility = "hidden"; 
	 document.getElementById("selectwithdocumentid").style.visibility = "visible";
	document.getElementById("msgArea").innerHTML =document.getElementById("msgArea").innerHTML.replace="";	 
	 dataRep['documentIDType']="";
	 dataRep['documentIDType']='list';
}

function atOnClick()
{
	 document.getElementById("selectdocument").disabled=false;
	 document.getElementById("selectdocument1").value ='Please scroll down to see the records';
	
}




function getdocument()
{
	 y= document.getElementById("ProcessID").value;
	 document.getElementById("selectdocument").disabled=false;
	 document.getElementById("selectdocument1").disabled='disabled';
	 document.getElementById("selectdocument1").value ='Please scroll down to see the records';
	 selectdocument="";
	  if (sname != 0)
    {	 
	   for (var j=0; j<sname; j++)
	  {
		   for(i=1; i<sname;i++)
	       {
			  
	            document.getElementById("selectdocument").options[i]=null;
	       }
	  }
    }
	    for (i=0; i<sessionIDLength;i++)//&& documentName1Arr[i] != documentName1Arr[i-1]
		{
   						 if (valueArr[i]== y )
			               {
								   selectdocument += "<option> "+documentName1Arr[i]+" </option>";
			                        
			               }
		}
		document.getElementById('selectdocument').innerHTML += selectdocument;
		sname= document.getElementById("selectdocument").options.length;
		return 0;
}

function validateStudentBase()
{
	document.getElementById("msgArea").innerHTML =document.getElementById("msgArea").innerHTML.replace="";
	if (document.getElementById("ProcessID").value == "")
	{
      document.getElementById("msgArea").innerHTML += "<div class='MsgText' style='color:red;'>Student Number Can Not Be Blank</div>";
	}
	
	else if (document.getElementById("selectdocument").value=='Please scroll down to see the records')
	{
      document.getElementById("msgArea").innerHTML += "<div class='MsgText' style='color:red;'>Document Can Not Be Blank</div>";
	}
	else{
		addStudentData();
	}
}

function validateListBase()
{
	document.getElementById("msgArea").innerHTML =document.getElementById("msgArea").innerHTML.replace="";
	if (document.getElementById("selectdocument1").value == 'Please scroll down to see the records')
	{
      document.getElementById("msgArea").innerHTML += "<div class='MsgText' style='color:red;'>Document Can Not Be Blank</div>";
	}
	
	else if (document.getElementById("selectdegree").value=='Please scroll down to see the records')
	{
      document.getElementById("msgArea").innerHTML += "<div class='MsgText' style='color:red;'>Programm Can Not Be Blank</div>";
	}
	else{
		addData();
	}
}

