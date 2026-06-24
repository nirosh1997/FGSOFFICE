//Coded By S.Suraweera

var DocName=""; 
dataRep["ItemValue"]="";
var testNum = 0;
var inum=docID=0;
dataRep["docName"]="";
dataRep["dataItemName"]="";
var ItemValueArr = new Array();
var docNameArr = new Array();
var dataItemNameArr = new Array();
var documentDataArr = new Array();
dataRep["sessionID"]="";
var degreeList=lecturerNameList="";

function setValuesDocument(){
		
	for(i=0; i<documentIDLength;i++){

		if(dataRep["documentID"]==documentIDArr[i]){

			dataRep["documentID"]=documentIDArr[i];
			dataRep["documentName"]=documentNameArr[i];

    }
  }
}

function setValuesSequance(){
		
	for(i=0; i<documentIDLength;i++){

		if(dataRep["docmentID"]==docmentIDArr[i]){

			dataRep["docmentID"]=docmentIDArr[i];
			dataRep["sequenceNo"]=sequenceNoArr[i];

    }
  }
}
//edited
function formAddDocumentData(dsp) {

		
		str = ""; 
		title = "Add Document Data"; 
  
	if(dsp == "formAddDocumentData") {    

		
			str  = "<div id='formAddDocumentData'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainAddDocumentData"><br>';
					str +="<div>";
					str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
							
						// str +="<table style='width:800px;float:left'><tr><th style='width:260px'>Document Name</th>";			
						// str +="<th style='width:160px'>Data Item</th>";
						// str +="<th style='width:300px'>Value</th>";					
						// str +="<th style='width:0px'></tr></table>";		
				
				str +="<div  id='inputs' style='margin:clear:both'>";  //test333					
							
				str +="<div id='newRow"+testNum+"' style='margin:0px 10px;clear:both'>";
							
				
				documentName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<documentIDLength; i++) {

							
							if(documentNameArr[i] != null){	
							
							   if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i)){
							
							documentName += "<option>"+documentNameArr[i]+"</option>";

									}
								 }
							}
				
				//str +="<div>";
				str +="<div class='identifiers'>Select the Document Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDocName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();addNewRowDoc();'>";
				str += documentName;
				str += "</select>";
					
				
					
				
				dataItemList="<option>Please scroll down to see the records</option>";
				
							for(i = 0; i<dataItemIDLength; i++) {

							
							if(documentIDArr[dataRep["selectedDocName"]-1]==documentItemIDArr){	
							
						//	  if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i)) {
							
							dataItemList += "<option>"+dataItemNameArr[i]+"-"+dataItemIDArr[i]+"</option>";

							//		}
								}
							}
				
				//str +="<div>";
				// str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedItem' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType()'>";
				// str += dataItemList;
				
				// str += "</select>";
				
				//str +="<div class='longIdentifier' style='clear:none;'>Data Item Value</div><div class='colon'>&nbsp:&nbsp;</div>";
			
				//str +="<input type='text' style='width:230px';visibility:'hidden' name='ItemValue'  id='ItemValue' value= '"+dataRep["ItemValue"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
				
			
				str += '<input type="button" style="margin-top:1px" class="btnB" value="View Items" onclick=addNewRowDoc();>';
				
				str += "</div></div>";
								
			str +="<div style='margin-top:1px;float:left;clear:both;' class = 'demoprint'>";	
				
			str += '<input type="button" style="margin-top:18px" class="btn" value="Save" onclick=formAddDocumentsendForm('+"'addDocumentData'"+');>';
		
			str += '<input type="button" style="margin-top:18px" class="btn" value="Reset" onclick="ResetAll();sendForm('+"'data4DocName'"+');sendForm('+"'data4AddDocument'"+');sendForm('+"'data4SequanceNumber'"+');">';
			
			str += '<input type="button" style="margin-top:18px" class="btn" value = "Return" onclick = ResetAll();showMenu('+"'formClerkDocumentMenu'"+');>';
			
				
				
				
				str += '</td></tr></table></div>';
				str += '</form>';
				}
				
				return str;
	}


function addNewRowDoc(){

if(document.getElementById('selectedDocName').value=="Please scroll down to see the records"){
				
	alert("Please Select the document name from the select Box");			
	}
	
else{
var f ="sentTo"+testNum;

 
 if((dataRep['sentTo']).value !=""){

dataRep['sentTo'][testNum]=dataRep['sentTo'];



e="sentTo"+ ++testNum;
 
 for(i = 0; i<dataItemIDLength; i++) {
				if(documentIDArr[dataRep["selectedDocName"]-1]==documentIDArr[i]){	
				docID=documentIDArr[i];
			}
	}
 
 for(i=0; i< programmeTypeCode; i++){
 
				if (documentIDArr.indexOf(documentIDArr[i]) == documentIDArr.lastIndexOf(documentIDArr[i]) || (documentIDArr.indexOf(documentIDArr[i]) != documentIDArr.lastIndexOf(documentIDArr[i]) && documentIDArr.indexOf(documentIDArr[i])==i)){
					
					documentIDList+= "<option value='"+documentIDArr[i]+"'>";
				} 					
			} 
 
        //.............................................................................
			
		//............................................................................
 
		var newRowstr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";  //test333
				
					
				newRowstr +="<div id='newRow"+testNum+"' style='margin:clear:both'>";
				
				
				DocName = document.getElementById('selectedDocName').value;
				var temDocName = DocName.split("-",2);
				
				dataRep["docName"]=(temDocName[0]);	
				
				newRowstr +="<div class='viewArea' style='clear:none;' id='documentName'>Document Name - "+dataRep["docName"]+"</div>";
				newRowstr +="<div class=hideLabel>&nbsp;</div><br>";
				
				var keyDisabled = fieldDisabled = "";
				
				keyDisabled = "Disabled";
			
				for(var j=0; j<=dataItemIDLength; j++){
				
				dataRep["ItemValue"]="";
				//alert(dataRep["selectedDocName"]);
				
				if(documentItemIDArr[dataRep["selectedDocName"]-1]==documentItemIDArr[j]){	
				
				
				dataRep["docName"] = document.getElementById('selectedDocName').value;
				
				//newRowstr +="<div class='colon'>&nbsp;&nbsp;</div><input type='text' style='width:230px';visibility:'hidden' name='ItemValue'  id='DocumentName"+testNum+"' value= '"+docNameArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
				
				//newRowstr += "<div>"+dataItemNameArr[j]+"-"+dataItemIDArr[j]+"</div>";
				
				if(dataItemNameArr[j] !=null){
					
				
				//newRowstr +="<div><input type='text' style='width:150px';visibility:'hidden' name='ItemValue'  id='DataItemName"+inum+"' value= '"+dataItemNameArr[j]+"-"+dataItemIDArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
				newRowstr +="<div><input type='text' style='width:150px;border:none';visibility:'hidden' name='ItemName'  id='DataItemName"+inum+"' value= '"+dataItemNameArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+">";
				
				newRowstr +="<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='ItemID'  id='DataItemID"+inum+"' value= '"+dataItemIDArr[j]+"' onchange='dataRep[this.name]=this.value'"+keyDisabled+"></div>";
				
				for(degreeNoLoop=0; degreeNoLoop< degreeCodeLength; degreeNoLoop++){
				if (degreeTitleArr.indexOf(degreeTitleArr[degreeNoLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degreeNoLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degreeNoLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degreeNoLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degreeNoLoop])==degreeNoLoop)){
				if(degreeTitleArr[degreeNoLoop] != ""){
				
				 // if (lecturerNameArr.indexOf(lecturerNameArr[degreeNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[degreeNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[degreeNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[degreeNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[degreeNoLoop])==degreeNoLoop)){
				 // if(lecturerNameArr[degreeNoLoop] != ""){
				degreeList += "<option value='"+degreeTitleArr[degreeNoLoop]+"'>";
				//degreeList += "<option value='"+lecturerNameArr[degreeNoLoop]+"'>";
				// }
			    //}		
		    }
		}
	}	
			
				newRowstr +="<input type='text' style='width:230px';visibility:'hidden' name='ItemValue' list='listDegree' id='ItemValue"+inum+"' value= '"+dataRep["ItemValue"].trim()+"' onchange='dataRep[this.name]=this.value'></div><div>";
				newRowstr += "<datalist id='listDegree'>"+degreeList+"</datalist>"; 
				
				inum++;
				
				//newRowstr += "</div></div>";
								
}								
				newRowstr +="</div>";
					
					
		newRowstr +="</div>";
		}
	}	
		document.getElementById('inputs').innerHTML += newRowstr;
		//-----------------------------
  
}

}

}
	
	
	
	
	function formAddDocumentsendForm(frm){
	//alert(document.getElementById('ItemValue'+inum).value);
	if(inum ==0){
				
	alert("Please Select the document and fill the data item value before save!");			
	}
	
else{
	
	var doc, dataStr,tempid1,tempid2,docid,dataid;
	var sqnum=0;
			
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'addDocumentData'){
 
			doc = document.maintainAddDocumentData;
		
			dataStr += "&interface="+frm;
				
			
			
			for(var y=0; y<=sessionIDLength; y++){
			
			if(userIdArr[y]==dataRep["userName"]){
			dataRep["sessionID"]= sessionIDArr[y];
			  }
			}
			
			for(var i=0; i<inum; i++){	
			
			
			//dataItemNameArr[i]=document.getElementById('selectedItem').value;
			//ItemValueArr[i]=dataRep["ItemValue"];
			
			// tempid1 = dataRep["docName"];//document.getElementById('DocumentName'+i).value;
			// //alert(tempid);
			// docid = tempid1.split("-",2);	
			
			tempid2 = document.getElementById('DataItemID'+i).value;
			//alert(tempid);
			dataid = tempid2.split("-",2);	
			
			for (var q=0;q<documentIDLength; q++)
			{
				if (docmentIDArr[q]== docID)
				{
					if(sequenceNoArr[q]==null){
					sqnum;
					}
					else{
					
					sqnum=sequenceNoArr[q];
					sqnum++;
					}
				}
			}
			
			// for (var p=0;p<documentIDLength; p++){
			
			// if(documentIDArr[dataRep["selectedDocName"]-1]==documentIDArr[p]){
			
			// docid=documentIDArr[p];
			// }
				
			// }
			
			dataStr += "&docmentID="+docID;//(docid[docid.length-1]);	
			dataStr += "&dataItemID="+tempid2;//(dataid[dataid.length-1]);
			dataStr += "&sessionID="+dataRep["sessionID"];
			dataStr += "&sequenceNo="+sqnum;
			dataStr += "&itemValue="+document.getElementById('ItemValue'+i).value;
			
			
			
		//alert(dataStr);
		documentDataArr[i]=dataStr;
			}
			
		for(var j=0; j<inum; j++){		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentDataArr[j]);
		}
		
		
		}

		return 0;
	}	
}
		
function ResetAll(){
dataItemIDLength=0;
documentIDLength =0;
inum=0;
testNum=0;
}
