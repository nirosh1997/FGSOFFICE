

var transferData = new Array();
var newStr="";
var ruleIDcount=1;
function formTransferRules(dsp) {
		str = "";
		title = "Introduce Transfer Rules ";
//alert('ok')
		if(dsp=="formTransferRules") { 
			
			//alert('ok')
			
			str  = "<div id='addStudentTransferRules'  >";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="formTransferRules">';
			
			for(var i=0; i<ruleIDLength; i++)
			{
			    if (ruleIDArr.indexOf(ruleIDArr[i]) == ruleIDArr.lastIndexOf(ruleIDArr[i]) || (ruleIDArr.indexOf(ruleIDArr[i]) != ruleIDArr.lastIndexOf(ruleIDArr[i]) && ruleIDArr.indexOf(ruleIDArr[i])==i))
				{
					 ruleIDcount= ruleIDArr[i];	
					 ruleIDcount++;
				}
			}
			
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;margin-left:-2px;'><fieldset class='field' style='width:500px;' ><legend class='fieldHead'></legend>";
			str +="<div class='longIdentifier' >Rule ID</div>";//"+dataRep["ruleID"].trim()+"
			str +="<div class='viewArea' >";		
			str +="<input type='text' name='ruleID' style='width:240px;' disabled='disabled'  id='ruleID' value= "+ruleIDcount+"  onchange='dataRep[this.name]=this.value;'>";//setValuesTransfer();
			str += "</div>";			
			
			str +="<div class='longIdentifier' >Rule Description</div>";//"+dataRep["ruleTitle"].trim()+"
			str +="<div class='viewArea'>";
			str +="<input type='text' name='ruleTitle' style='width:240px;' id='ruleTitle' value= ''  onchange='dataRep[this.name]=this.value;'>";//setValuesTransfer();
			str += "</div>";
			str += "</fieldset></div></div></br>";
			//str +="<input  type='checkbox' name='MsscToMa'  id='MsscToMa' >Mssc to MA";
			//var a='Mssc to MA'
			//str +="<div id = 'noprint' class ='section1' style='float:left;margin-left:-2px;'><fieldset class='field'><legend class='fieldHead'>Add Trasfer Types</legend>";
		    str += "<br></br><br></br><div style='margin-left:10px;'>";
		    str +="<input  type='checkbox' name='transferType1'  id='transferType1' value='Mssc to MA' >Mssc to MA &nbsp;&nbsp;";
		    str +="<input  type='checkbox' name='transferType2'  id='transferType2'  value='MA to Mssc'>MA to Mssc &nbsp;&nbsp;";
			str +="<input  type='checkbox' name='transferType3'  id='transferType3'  value='Special Transfer'>Special Transfer &nbsp;&nbsp;";
			str +="<input  type='checkbox' name='transferType4'  id='transferType4'  value='Upgrade Degree'>Upgrade Degree &nbsp;&nbsp;";
		    str +="<input  type='checkbox' name='transferType5'  id='transferType5' value='Programme'>Programme &nbsp;&nbsp;";
		    str +="<input  type='checkbox' name='transferType6'  id='transferType6'  value='Medium'>Medium<br>";
		    str += "</div>";
			//str += "</fieldset></div><br>";
        var Rulelist="";
		//str +="<div style=margin-top:0px;float:left;clear:both;' ' class = 'demoprint' >";
	     str +="<div class='section1' style='margin-left:-2px;'><fieldset  class='field' style='width:500px;background-Color:#ffe6e6;'><legend class='fieldHead'>Available Rules</legend><div style='clear:both'>";
		for(var i=0; i<ruleIDLength; i++)
		{ 
			    if (ruleIDArr.indexOf(ruleIDArr[i]) == ruleIDArr.lastIndexOf(ruleIDArr[i]) || (ruleIDArr.indexOf(ruleIDArr[i]) != ruleIDArr.lastIndexOf(ruleIDArr[i]) && ruleIDArr.indexOf(ruleIDArr[i])==i))
					{
						if (ruleTitleArr[i] != 'undefined')
						{
							Rulelist += "<li><b>*</b>&nbsp;&nbsp;"+ruleTitleArr[i]+" </li>";	
						}
							
					}
				           
		}
		str += '<font color="black" size="2">';
		str += '<ul>';
		str += Rulelist;
		str += '</ul>';
		//str += "</div>";
		//str += "</div>";
		str += '</font>';
		str +="</fieldset>"
		str += "</div></br></br>";

		str += "</br></br></br><div>";
			str += '<input type="button" class="btn" value = "Save" onclick = formTrnsferRulessendForm("addTransferRules");formTrnsferRulesDetailssendForm("addTransferRulesDetails");>';
		   str += '<input type="button" class="btn" value = "Reset" onclick ="sendForm('+"'data4studentTransfer'"+'); sendForm('+"'data4applicantTransfer'"+'); sendForm('+"'data4Transferprogramme'"+');">';//
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formTransferMenu'"+');>';
			//str += '<input type="button" class="btn" value = "Return to Clerk Menu" onclick = showMenu('+"'formClerkMenu'"+');>';
            str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
		str += "</div>";		

			str += '</div></form>';
			str += '</td></tr></table></div>';
		
		}
		return str;
	}
	
	
function formTrnsferRulessendForm(frm){
	var rv=0;
			for(var i=1; i<7; i++)		
			{			
                if (document.getElementById('transferType'+i).checked == true)
				{
					
					rv++
				}
			}
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
        if (rv==0)
		{
			alert('Please Select Atleast one Transfer Type');
		}
		else if (document.getElementById('ruleTitle').value=="")
		{
			alert('Rule Description Can not be Null');
		}
		else{
		if(frm == 'addTransferRules'){
			doc = document.formTransferRules;
			dataStr += "&interface="+frm;
			

			dataStr += "&ruleID="+document.getElementById('ruleID').value;
			dataStr += "&ruleTitle="+document.getElementById('ruleTitle').value;

			//--------------------------------------add data for second table---------------------
            newStr = "action=add";
			newStr+= "&interface="+"addTransferRulesDetails";			
			for(var i=1; i<7; i++)
			{
                if (document.getElementById('transferType'+i).checked == true)
				{
							newStr += "&ruleID="+document.getElementById('ruleID').value;
                            newStr += "&transferType="+document.getElementById('transferType'+i).value;;
							transferData[i]= newStr;
							//alert(transferData[i]);
					
				}
				//documentData[i]= dataStr;
			}

			isrHandle.getDataFromDB(eval("clientController"), "serverController.php",dataStr);
								
					

				
		} 
		}	
		return 0;
		
} 

function formTrnsferRulesDetailssendForm(frm){
//alert('ok');
			for(var i=1; i<7; i++)
			
			{
				//alert('ok');
                if (transferData[i]!="" & transferData[i]!=undefined)
				{
					//alert(transferData[i]);
				  isrHandle.getDataFromDB(eval("clientController"), "serverController.php",transferData[i]);
                       document.getElementById('ruleID').value="";
		               ruleIDcount++;
		               document.getElementById('ruleID').value=ruleIDcount;
				}
			}

	return 0;
		
}

function rulesValidation()
{
			for(var i=1; i<7; i++)
			
			{
				//alert('ok');
                if (transferData[i]!="" & transferData[i]!=undefined)
				{
					//alert(transferData[i]);
				    isrHandle.getDataFromDB(eval("clientController"), "serverController.php",transferData[i]);
                       document.getElementById('ruleID').value="";
		               ruleIDcount++;
		               document.getElementById('ruleID').value=ruleIDcount;
				}
			}
}

