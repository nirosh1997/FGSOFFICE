
//code by chamoda
dataRep['decisionYYYY']="";
dataRep['decisionMM']="";
dataRep['decisionDD']="";
dataRep['number']="";
dataRep['remarks']="";
dataRep['ProcessID']="";
var selectdocument;
var studentIDChecked, documentIDChecked="";
var studentlist="";
	var c=0;
    var x=0;
function formDocDecisionTransactionTwo(dsp)
{
	str = "";
	title = "Document Decision Transaction";
	
	if ( dsp == "formDocDecisionTransactionTwo")
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
		str += '<form name="formDocDecisionTransactionTwo"><br>';
    c=0;
	var selectDocument;
		for(var i=0; i<sequenceNoLength; i++)
		{
						if (documentID2Arr[i] != undefined && documentID2Arr[i]==dataRep['docmentID'])
						{
							c++;
							 selectDocument += "<option > "+documentName2Arr[i]+"-"+dataRep['itemValue1']+"-"+dataRep['itemValue2']+"-list"+c+" </option>";	
						}
		}
         
		 x=0;
	    var selectStudentBaseDocument;
		for(var i=0; i<sequenceNoLength; i++)
		{
						if (documentID2Arr[i] != undefined && documentID2Arr[i]==dataRep['docmentID'])
						{
							
							x++;
							 selectStudentBaseDocument += "<option > "+documentName2Arr[i]+"-Document"+x+" </option>";	
						}
		}
		
		// To Select Source
		var selectsource;
		for(var i=0; i<decisionMakingPointIDLength; i++)
		{
					if (decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i]) == decisionMakingPointNameArr.lastIndexOf(decisionMakingPointNameArr[i]) || (decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i]) != decisionMakingPointNameArr.lastIndexOf(decisionMakingPointNameArr[i]) && decisionMakingPointNameArr.indexOf(decisionMakingPointNameArr[i])==i))
					{
						if (decisionMakingPointNameArr[i] != undefined)
						{
							selectsource += "<option> "+decisionMakingPointNameArr[i]+" </option>";		
						}
							
					}
				           
		}
        
	  if (dataRep['documentIDType']=='list'){
		str += "<div id='releventDoc'>";
        str +="<div class='investLabel_l'  style='width:160px;margin-left:15px'>Document Name</div>";
		str += "<div class='investView_l'  style='width:300px' name='DocumentName' id='DocumentName' onchange='dataRep[this.name]=this.value;'>";
		str += dataRep['DocumentName']+"</div><br>";
		
		str +="<div class='investLabel_l'  style='width:160px;margin-left:15px'>Programm Name</div>";
		str += "<div class='investView_l'  style='width:300px' name='programmName' id='programmName' onchange='dataRep[this.name]=this.value;'>";
		str += dataRep['itemValue1']+"</div><br>";
		
		str +="<div class='investLabel_l'  style='width:160px;margin-left:15px'>year</div>";
		str += "<div class='investView_l'  style='width:160px' name='year' id='year' onchange='dataRep[this.name]=this.value;'>";
		str += dataRep['itemValue2']+"</div><br>";
		
	  	str += "<br><div class='identifiers'>relevent Document</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectreleventdoc' id='selectreleventdoc' onchange='dataRep[this.id]=this.selectedIndex;' style = 'width: 300px'>";
        str +="<option>Please scroll down to see the records</option>";
		str += selectDocument;	
        str += "</select>";
        str += "</div>";			
	  }
      else{
		str += "<div id='releventStudent'>";
        str +="<div class='investLabel_l'  style='width:160px;margin-left:15px'>Student Number</div>";
		str += "<div class='investView_l'  style='width:300px' name='DocumentName' id='DocumentName' onchange='dataRep[this.name]=this.value;'>";
		str += dataRep['itemValue1']+"</div><br>";
		
		str +="<div class='investLabel_l'  style='width:160px;margin-left:15px'>Document Name</div>";
		str += "<div class='investView_l'  style='width:300px' name='programmName' id='programmName' onchange='dataRep[this.name]=this.value;'>";
		str += dataRep['selectdocument']+"</div><br>";
		
		str += "<br><div class='identifiers'>relevent Document</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selecStudentBaseDocument' id='selecStudentBaseDocument' onchange='dataRep[this.id]=this.selectedIndex;' style = 'width: 300px'>";
        str +="<option>Please scroll down to see the records</option>";
		str += selectStudentBaseDocument;	
        str += "</select>";
        str += "</div>";	
			
		str += "</div>";
		  
	  }
		str += "<br><br><div class='identifiers'>Source</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectsource' id='selectsource' onchange='dataRep[this.id]=this.selectedIndex;' style = 'width: 300px'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectsource;
		str += "</select><br>";
		
		//To Select decision Making Point
		str += "<div class='identifiers'>Decision Making Point</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectdecisionmakingpoint' id='selectdecisionmakingpoint' onchange='dataRep[this.id]=this.selectedIndex;' style = 'width: 300px'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectsource;
		str += "</select><br>";

		//To insert number
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<input type='text' name='number' id ='number' style = 'width: 300px'";
		str += "value= '"+dataRep['number'].trim()+"' onchange = 'dataRep [this.name] = this.value;'>"; 
		str += "</div>";
		
		// To insert date
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Date</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>";
		str += "<select name='decisionYYYY' id='decisionYYYY' value='decisionYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(2015, 2025, 4, dataRep['decisionYYYY']);
        str += "</select>";
        str += "<select name='decisionMM' id='decisionMM' value='decisionMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
        str += generateNumberOptions(1, 12, 2, dataRep['decisionMM']);
        str += "</select>";
        str += "<select name='decisionDD' id='decisionDD' value='decisionDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
        str += generateNumberOptions(1, 31, 2, dataRep['decisionDD']);
        str += "</select></div>";
		str += "</div>";
		
		//To Select decision 
		str += "<div class='identifiers'>Decision</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='decision' id='decision' onchange='dataRep[this.id]=this.selectedIndex;' style = 'width: 300px'>";
		str +="<option>Please scroll down to see the records</option>";
		str += "<option> Accepted</option>";
		str += "<option> Recommend</option>";
		str += "<option> Reject </option>";
		str += "</select><br>";

		//To insert remarks
		str += "<div style='clear:both'>";
		str += "<div class='identifiers'>Remarks</div><div class='colon'>&nbsp;:&nbsp;</div> "
		str += "<div style='float:left' >&nbsp &nbsp;";
		str += "<textarea rows='auto'  name='remarks' id ='remarks' style = 'float:left;width:200px;height:120px;text-transform:capitalize'";
		str += "value= '"+dataRep['remarks'].trim()+"' onchange = 'dataRep [this.name] = this.value;'>"; 
		str +=" </textarea>";
		str += "</div>";
		str += "</div>";
		str += "</div>";
        str += '<br><br><br><br><br><br><input type="button" class="btn" value = "Return" onclick =values10();showMenu('+"'formClerkDocumentMenu'"+');>';
		str += '<input type = "button" class ="btn" value="save" onclick=formDocDecisionTransactionsendFormTwo('+"'addDocDecisionTransactionTwo'"+');>';
		
		str += "</div>";
		
		str += '</form>';
		str += '</td>';
		str += '</tr>';
		str += '</table>';
		str += '</div>';
			}
		return str;

}

function formDocDecisionTransactionsendFormTwo(frm)
{
	dataRep['selectID']="";
	var doc, dataStr,year1,month,da;
	
    if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addDocDecisionTransactionTwo')
		{


		    doc = document.formDocDecisionTransactionTwo;
			dataStr += "&interface="+frm;
if (dataRep['documentIDType']=='list'){
		   var y=(document.getElementById('selectreleventdoc').value.split("-",4)[document.getElementById('selectreleventdoc').value.split("-",4).length-1]);
            var lastChar = y.substr(y.indexOf("list") + 4);
			c=0;
            	for(var i=0; i<sequenceNoLength; i++)
	         	{
						if (documentID2Arr[i] != undefined && documentID2Arr[i]==dataRep['docmentID'])
						{
							c++;
							if( c==lastChar)
							{
								var docID=documentID2Arr[i];
								var sessionID=sessionID2Arr[i];
								var sequenceNo=sequenceNo2Arr[i];
							}
						}
				           
                }
}
else{
     var y=(document.getElementById('selecStudentBaseDocument').value.split("-",2)[document.getElementById('selecStudentBaseDocument').value.split("-",2).length-1]);
     var lastChar = y.substr(y.indexOf("Document") + 8);
	 	c=0;
            	for(var i=0; i<sequenceNoLength; i++)
	         	{
						if (documentID2Arr[i] != undefined && documentID2Arr[i]==dataRep['docmentID'])
						{
							c++;
							if( c==lastChar)
							{
								var docID=documentID2Arr[i];
								var sessionID=sessionID2Arr[i];
								var sequenceNo=sequenceNo2Arr[i];
							}
						}
				           
                }
//var docID=dataRep['studentDocID'];
   // var sessionID=dataRep['studentSessionID'];
//var sequenceNo=dataRep['studentSequenceNo'];
}
			var x= document.getElementById('selectsource').value;
			for (var i=0;i<decisionMakingPointIDLength; i++)
			{
				if (decisionMakingPointNameArr[i]== x )
				{
					var sourceID = decisionMakingPointIDArr[i];
				}
			}
			
			x= document.getElementById('selectdecisionmakingpoint').value;
			for (var i=0;i<decisionMakingPointIDLength; i++)
			{
				if (decisionMakingPointNameArr[i]== x )
				{
					var decisionmakingpointID = decisionMakingPointIDArr[i];
				}
			}
			dataStr += "&documentID="+docID;
			dataStr += "&sourceID="+sourceID;
			dataStr += "&decisionMakingPointID="+decisionmakingpointID;
			dataStr += "&sessionID="+sessionID;
			dataStr += "&sequenceNo="+sequenceNo;
			dataStr += "&number="+dataRep['number'];
			dataStr += "&date="+doc.decisionYYYY.value+"/"+doc.decisionMM.value+"/"+doc.decisionDD.value;
			dataStr += "&decision="+doc.decision.value;
			dataStr += "&remarks="+dataRep['remarks'];
			
		}
		
		   alert (dataStr);
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			dataRep['number']="";
			dataRep['remarks']="";
			dataRep['studentDocID']="";
             dataRep['studentSessionID']="";
             dataRep['studentSequenceNo']="";
			 	sequenceNoLength=0;
		  if (dataRep['documentIDType']=='list'){
             document.getElementById("releventDoc").innerHTML =document.getElementById("releventDoc").innerHTML.replace="";

           }
          else{
	      document.getElementById("releventStudent").innerHTML =document.getElementById("releventStudent").innerHTML.replace="";
	
          }

		
return 0;
}
function values10()
{
	sequenceNoLength=0;
	c=0;
	idLength++;
	decisionMakingPointIDLength=0;
	documentIDLength=0;
	dataRep['selectID']="";
	sessionIDLength=0;
	dataRep['number']="";
	dataRep['remarks']="";
    dataRep['studentDocID']="";
    dataRep['studentSessionID']="";
    dataRep['studentSequenceNo']="";
	if (dataRep['documentIDType']=='list'){
      document.getElementById("releventDoc").innerHTML =document.getElementById("releventDoc").innerHTML.replace="";

	}
    else{
	      document.getElementById("releventStudent").innerHTML =document.getElementById("releventStudent").innerHTML.replace="";
	
	}
}
