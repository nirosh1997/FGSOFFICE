

dataRep['description']="";
dataRep['subdescription']="";
dataRep['transactionCode']="";
dataRep['departmentCode']="";
dataRep['facultyCode'],dataRep['degreeCode']="";
dataRep['boards']="";
var CategorySubCodeStr1,CategorySubCodeStr2,selectForm ="";
var newRow2str, newRow3str="";
var selecttransaction="";
var x,y;



function formTransactionType(dsp)
{
    
    str = "";
	title = "Add Transactions";
	if ( dsp == "formTransactionType")
	{
		

		str += "<table><tr><td>";
		str += '<h2 >'+title+'</h2><hr>';
		str += '<form name="formTransactionType"><br>';
		
		str +="<div style='float:left' onclick='dataRep[this.name]=this.value;checkvalue();'><label>Transaction</label>&nbsp; &nbsp;";
		str +="<input  type='checkbox' name='transaction'  id='transaction' class='changeColor'  value='transaction'></div>&nbsp;&nbsp;";
		
		str +="&nbsp; &nbsp;<div style='float:left' onclick='dataRep[this.name]=this.value;checkSubTransaction()'><label>Add Degree To Existing Transaction</label>&nbsp &nbsp;";
		str +="<input  type='checkbox' name='SubTransaction'  id='SubTransaction' class='changeColor'  value='SubTransaction'></div><br>";
		str +="<br>";
		
		var c=0;
		for(var i=0; i<facultyCodeLength; i++)
		{
			 if (transactionCodeArr[i]!=="")
			 { 
				 c++;
			 }
		}
	    c++; 
		if(c<10)
        {dataRep['transactionCode']= "000"+c+""; }	
		else if(9<c<100)
		{dataRep['transactionCode']= "00"+c+""}
		else if (99<c<100)
		{dataRep['transactionCode']= "0"+c+"";}
        else if(999<c<1000)
		{dataRep['transactionCode']= ""+c+"";}
	//alert(dataRep['transactionCode']);
	
		//....................To insert Description....................
		str += "<div class='identifiers'>Description</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<input type='text' name='description' id ='description' disabled='disabled'  style = 'width: 300px'";
		str += "value= '"+dataRep['description'].trim()+"' onchange = 'dataRep [this.name] = this.value;'>"; 


		
       //.........................SElect transactions............................
		var count=0;
		for(var i=0; i<facultyCodeLength; i++)
		{
			 if (transacDescriptionArr[i]!=="")
			 {
				 if (transacDescriptionArr[i]!== transacDescriptionArr[i-1])
				 {
					 selecttransaction += "<option> "+transacDescriptionArr[i]+" </option>";
				 }					 
			 }
			
		}
        

		str += "<div class='identifiers'>Select Transaction</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selecttransaction' id='selecttransaction' disabled='disabled' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selecttransaction;
		str += "</select><br><br><br><br>";				
		
		//...........get data for dropdown from faculty Table..............
		var CategorySubCodeStr="<option>Please scroll down to see the records</option>";
		for(var i=0; i<facultyCodeLength; i++)
		{
			
			      if (facultyTitleArr[i]!==facultyTitleArr[i-1])
				  {					  
					  
			               CategorySubCodeStr+= "<option> "+facultyTitleArr[i]+" </option>";
					  
                  }
			
        }

	
		str += "<div class='identifiers'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectfaculty' id='selectfaculty'   onchange='dataRep[this.id]=this.selectedIndex;getvalue()'>";
		str += CategorySubCodeStr;
		str += "</select><br><br>";		
       
		
		
	
		//get data for department 
        str += "<div class='identifiers'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> ";		
        str += "<select name='selectdepartment' id='selectdepartment'   onchange='getvalue2()'>";
		str += "<option>Please scroll down to see the records</option>";
		str += "</select><br><br>";		

		//...................................................................
		
		//get data for degree
		str += "<div class='identifiers'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectdegree' id='selectdegree'   onchange='dataRep[this.id]=this.selectedIndex;getvalue3()'>";
		str += "<option>Please scroll down to see the records</option>";
		str += "</select><br><br>";		
        
		
		//...................................select sendformuse..................................
		var count=0;
		for(var i=0; i<facultyCodeLength; i++)
		{
			 if (sendformuseArr[i]!=="")
			 {
				 
				 count++;
			 }
			
		}
        for(var c=count+1; c<31; c++) 
		{
		   selectForm += "<option> Form"+c+" </option>";
		}
		str += "<div class='identifiers'>Select Form Use</div><div class='colon'>&nbsp;:&nbsp;</div> ";
        str += "<select name='selectedformuse' id='selectedformuse' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str +="<option>Please scroll down to see the records</option>";
		str += selectForm;
		str += "</select><br><br>";		
		
		
		str += '<br><input type = "button" class ="btn" value="save" onclick=formTransactionTypesendForm('+"'addTransactionType'"+');>';
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formAdministratorMenu'"+');>';
		str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
		
		str += '</form>';
		str += "</td>";
		str += "</tr>";
		str += "</table>";
	}
	
	return str;
}
//dataRep['facultyCode1']="";
dataRep['fCode']="";
function getvalue()
{
	//document.getElementById('selectdepartment').Option.length=0;
	
	 x= document.getElementById("selectfaculty").value;
	    for (i=0; i<facultyCodeLength;i++)
		{
		    if (facultyTitleArr[i]== x)
			{
				 dataRep['facultyCode']=facultyCodeArr[i];
				if (departmentTitleArr[i]!= departmentTitleArr[i-1])
			   {
				   dataRep['fCode']=departmentTitleArr[i]
			       CategorySubCodeStr1 += "<option> "+dataRep['fCode']+" </option>";
			  
			   }
			}
		}
		document.getElementById('selectdepartment').innerHTML += CategorySubCodeStr1;
		//alert(dataRep['facultyCode']);
	return 0;
	
}

function getvalue2()
{
	y= document.getElementById("selectdepartment").value;
	
	    for (i=0; i<facultyCodeLength;i++)s
		{
		    if (departmentTitleArr[i]== y)
			{
				 dataRep['departmentCode']= departmentCodeArr[i]; 
				 
					 if (degreeCodeArr[i]!==dataRep['dCode'] )
					 {
							
							 dataRep['dCode']=degreeCodeArr[i];
							 var se= degreeCodeArr[i];
						 CategorySubCodeStr2 += "<option> "+se+" </option>";
					 }
					 
				 
			}
			 
		}
		
		document.getElementById('selectdegree').innerHTML += CategorySubCodeStr2;
		//alert(dataRep['departmentCode']);
		return 0;
}

function getvalue3()
{
	y= document.getElementById("selectdegree").value;
	
	    for (i=0; i<facultyCodeLength;i++)
		{
		    if (degreeCodeArr[i]== y)
			{
			
			      dataRep['degreeCode']= programmeTypeCodeArr[i];
			   
			   
			}
		}
		//alert (dataRep['degreeCode']);
}

function checkvalue()
{
	if (document.getElementById('transaction').checked == true)
	{		
		
		 document.getElementById("description").disabled=false;
		 document.getElementById("selecttransaction").disabled='disabled';
	}
	
	return 0;
}

function checkSubTransaction()
{
	if (document.getElementById('SubTransaction').checked == true)
	{
	     document.getElementById("description").disabled='disabled';
         document.getElementById("selecttransaction").disabled=false;	         
	}
	
	  
	
	return 0;
}



function formTransactionTypesendForm(frm)
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
		
		if(frm == 'addTransactionType')
		{
			doc = document.formTransactionType;
			dataStr += "&interface="+frm;

			if(document.getElementById('transaction').checked == true)
			{
				dataStr += "&transacDescription="+dataRep["description"];
				
			
			}
			
			if (document.getElementById('SubTransaction').checked == true)
			{
				dataStr += "&transacDescription="+doc.selecttransaction.value;
			}
			dataStr += "&transactionCode="+dataRep["transactionCode"];
			dataStr += "&sendformuse="+doc.selectedformuse.value;
			dataStr += "&degreeCode="+doc.selectdegree.value;
			dataStr += "&facultyCode="+dataRep['facultyCode'];
			dataStr += "&departmentCode="+dataRep['departmentCode'];
			dataStr += "&proTransacTypeCode="+dataRep['degreeCode'];
			dataStr += "&universityCode="+"KLN";
			alert (dataStr);
			
		}
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		
		
		
return 0;
}





