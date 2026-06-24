//code by chamoda
dataRep['dataItemID']="";
dataRep['dataItemName']="";
var c=1;
var x=0;
var userPrivilagesArr = new Array();
userPrivilagesArr = ["Add" , "Edit", "Delete" ,"View"];
function formUserActivity(dsp)
{
	str = "";
	title = "Add User Privilages";
	
	if ( dsp == "formUserActivity")
	{
		str = '<div id = "AddUserActivity">';
					
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		// create Form
		str += '<form name="formUserActivity"><br>';
		
		var selectdegree;
		for(var i=0; i<degreeCodeLength; i++)
		{
			
                if (degreeCodeUserArr.indexOf(degreeCodeUserArr[i]) == degreeCodeUserArr.lastIndexOf(degreeCodeUserArr[i]) || (degreeCodeUserArr.indexOf(degreeCodeUserArr[i]) != degreeCodeUserArr.lastIndexOf(degreeCodeUserArr[i]) && degreeCodeUserArr.indexOf(degreeCodeUserArr[i])==i))
                {
					  selectdegree += "<option> "+degreeTitleUserArr[i]+" </option>";
                }					  
		}
        //To select degree programm
		
		str += "<div class='identifiers'>Degree Programme</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectDegreeProgramme' id='selectDegreeProgramme' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectdegree;
	    str += "</select><br>";
		
		var selectUser;
		for(var i=0; i<userIdLength; i++)
		{
			
                if (userIdUserArr.indexOf(userIdUserArr[i]) == userIdUserArr.lastIndexOf(userIdUserArr[i]) || (userIdUserArr.indexOf(userIdUserArr[i]) != userIdUserArr.lastIndexOf(userIdUserArr[i]) && userIdUserArr.indexOf(userIdUserArr[i])==i))
                {
					  selectUser += "<option> "+userNameUserArr[i]+" </option>";
                }					  
		}
        //To select degree programm
		
		str += "<div class='identifiers'>User</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectUser' id='selectUser' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectUser;
		str += "</select><br>";	
		
        str += '<br>';
		str += '<br>';
		str += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			for(var i=0; i<userPrivilagesArr.length; i++)
		{				
				       str +="<input  type='checkbox' name='userPrivilage"+i+"'  id='userPrivilage"+i+"' class='changeColor'>"+userPrivilagesArr[i]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		}

		
		str += '<br><br><br><input type = "button" class ="btn" value="save" onclick=formUserPrivilagessendForm('+"'addUserPrivilages'"+');>';
        str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
		str += '</form>';
		str += '</td>';
		str += '</tr>';
		str += '</table>';
		str += '</div>';
	}
	
	return str;
}


//Add document Data

function formUserPrivilagessendForm(frm)
{
	
	var doc,dataStr;
	
    if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addUserPrivilages')
		{
			doc =document.formUserActivity;
			dataStr += "&interface="+frm;
			var y=document.getElementById('selectDegreeProgramme').value;
        for(var i=0; i<degreeCodeLength; i++){
		    if ( degreeTitleUserArr[i]==  y)
            {
				dataStr += "&degreeCode="+degreeCodeUserArr[i];
			} 
		}
        for(var i=0; i<userIdLength; i++){
			if ( userNameUserArr[i]== document.getElementById('selectUser').value )
			{
				dataStr += "&userID="+userIdUserArr[i];
			}
		}
		var x="Yes";
		
		if (document.getElementById('userPrivilage0').checked == true)
		{
			dataStr += "&userAdd="+x;
		}
		if (document.getElementById('userPrivilage1').checked == true)
		{
			dataStr += "&userUpdate="+x;
		}
		if (document.getElementById('userPrivilage2').checked == true)
		{
			dataStr += "&userView="+x;
		}
		if (document.getElementById('userPrivilage3').checked == true)
		{
			dataStr += "&userDelete="+x;
		}
		
		 //alert (dataStr);
        
		}
		    
        isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
return 0;
}


