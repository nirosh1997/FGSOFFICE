//Coded By S.Suraweera
//Edited by Nishadi

var PaymentData = new Array();
dataRep["sessionID"]=dataRep["docName"]=dataRep["programYear"]=dataRep["setamount"]=dataRep['roleName']=dataRep['userName']=dataRep["achedamicYear"]="";
var inum=0;
var rcount=1;
var tempid,exid;
var installmentChecked=false;
var installment="";
var totalCourseFee=0;
var tempStdNo=new Array();
var tempPayAmount=new Array();
var tempDueAmount=new Array();
var tempInstNo=tempAmount=tempDeadline=new Array();
var tempCount=jj=r=0;
var selectedlist = new Array();
var p=0;

var degCode=acYear="";

function formABPaymentView(dsp) {

		
		str = ""; 
		
		title = "Student Payments"; 
		
	if(dsp == "formABPaymentView") {    

		
			str  = "<div id='formABPaymentView'>";
				var role;
			var role1;
			var role2;
			// var u=document.cookie;
			// var ur=(u.split(";",2)[u.split(";",2).length-2]);
			// var use =(ur.split("=",2)[ur.split(";",2).length-0]);
			// for(i = 0; i<userIdLength; i++) {
			// 	if( use== userIdArr[i]){
			// 		TempUser=use;
			// 		dataRep['roleName']=roleNameArr[i];
			// 		dataRep['departmentCode']=departmentCodeArr[i];
			// 		dataRep['userName']=userNameArr[i];
			// 		dataRep['programmeCode']=programmeCodeArr[i];
			// 		//alert(dataRep['programmeCode']);
			// 	}
			// }
				if (dataRep['roleName']=='Coordinator' || dataRep['roleName']=='Technical Coordinator' )
				{
				//alert("ok");
					var dcode= dataRep['departmentCode']
					role = "cordinator";
					
					 
					var pcode=dataRep['programmeCode']
					role = "cordinator";
				
				}
				else if(dataRep['roleName']=='Head of the Department' )
				{
					var dcode1= dataRep['departmentCode']
					role1 = "head";
					 
					var pcode1=dataRep['programmeCode']
					role1 = "head";
				}
				else{
				
					role2="other";
				}
				
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
				
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainBulkPayment"><br>';
					str +="<div>";								
					

			//alert("yes");studentNoLength
			if (role== "cordinator")
			{
			//alert("yes");
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							 
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			else if (role1== "head")
			{
			       	programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							 if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							   
									  if (degreeCodeArr[i]==dataRep['departmentCode'] || degreeCodeArr[i]== dataRep['programmeCode'] ){//|| departmentCodeappArr[j]== 
									   
									   programName += "<option>"+degreeTitleArr[i]+"</option>";
									 
									  }
									 }
									
								 }
							}
 			                for(j= 0; j<degreeCodeLength; j++) {
                            if(degreeCodappeArr[j] != null){	
							if(degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j])==j)){
							if (departmentCodeappArr[j]== dataRep['departmentCode']){
							 programName1 += "<option>"+degreeTitle1Arr[j]+"</option>";
							}
							}
							}
							}
			}
			
			if (role2=="other")
			{
				if(dataRep['userName']=="ssdean" || dataRep['userName']=="ssar" || dataRep['userName']=="Asanka"){
					//alert(dataRep['userName']);
					programName="<option>Please scroll down to see the records</option>";
					
								for(i = 0; i<studentNoLength; i++) {
								if(facultyCodeArr[i]=="FAC03" & degreeTitleArr[i] != null){	
								   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
								programName += "<option>"+degreeTitleArr[i]+"</option>";
										 
										}
									 }
								}
				}
				else{
							programName="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							if(degreeTitleArr[i] != null){	
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							programName += "<option>"+degreeTitleArr[i]+"</option>";
                                     
									}
								 }
							}
				}
			}
				
				if(dataRep['roleName']=='Coordinator'  || dataRep['roleName']=='Technical Coordinator'  || dataRep['roleName']=='Head of the Department'){
				str +="<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += programName1;
				str += "</select>";
				}
				else{
				str +="<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += programName;
				str += "</select>";	
				}
				
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				
				
				str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=calInstallment();calPayAmount();ViewStudentsList();>';
				
				str += '<input type="button" id="mark-all" style="margin-top:1px;float:left" class="btnB" value="Mark All" onclick=MarkAll();>';
				str += '<input type="button" id="mark-non" style="margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnmarkAll();>';
				
				
				str +="<div>_____________________________________________________________________________________________________________________________________________</div>";
			
				str +="<div style='clear:both'>&nbsp;</div>";
		
				// str +="<div style='clear:both'>";
				// str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';

				// str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';

				// str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
				// str +="</div>";

             // if(dataRep['roleName']=='Dean')
		    // {
		
		     // dataRep['userName']="Dean Faculty of Graduate Studies"
			// }
			
		
				str +="<div  id='list' >"; 
				
				str +="</div>";
				str += '</td></table></div>';
				str += '</form>';
		}		
 return str;
				
	}
	
//reset variables and arrays
function resetInstallment(){
	sendForm('data4returnBulkPayment1');
	sendForm('data4StudentPaymentRecordAB');
	sendForm('data4InstallmentDetailsAB');
	sendForm('data4StudentPaymentDetailsAB');
	sendForm('data4StudentPaymentDetails1AB');
	sendForm('data4StudentPaymentDetails2AB');
	
	installment="";
	totalCourseFee=tempCount=jj=r=p=0;
	selectedlist=tempStdNo=tempPayAmount=tempDueAmount=tempInstNo=tempAmount=tempDeadline=new Array();	
}

//enable to record payment installments	
function installmentViewAB(){
	if(document.getElementById('payCategoryAB').value=="Total Course fee")
	document.getElementById("installmentDivAB").style="display";
	else
		document.getElementById("installmentDivAB").style="display:none";
}




//calculate paid amount (to view payment status)
function calPayAmount(){
	tempCount=0;
	var j=add=0;
	degCode=acYear="";

	for( i=0; i<degreeCodeLength; i++){
								
		if(document.getElementById('achedamicYear').value==acYearArr[i] && document.getElementById('selectedDegreeName').value==degreeTitleArr2[i]){
			degCode=degreeCodeNewArr2[i];
			acYear=acYearArr[i];
			}			
	}
	
	for( i=0; i<tCLength; i++){
					
			if(studentNoNewArr[i].includes(document.getElementById('achedamicYear').value) && degCode==degreeCodeNewArr[i]){
				
				if(tempStdNo[j]==studentNoNewArr[i]){
					add +=parseInt(payAmountArr[i],10);
					tempPayAmount[j]=add;
				}
				else{
					j++;
					tempStdNo[j]=studentNoNewArr[i];
					add=0;
					add +=parseInt(payAmountArr[i],10);
					tempPayAmount[j]=add;
				}
			
			}
			
	}
	
}

//calculate installment details for selected degree
function calInstallment(){
	
	tempInstNo=new Array();
	tempAmount=new Array();
	tempDeadline=new Array();
	for( i=0; i<installmentNoLength; i++){
				
			if(document.getElementById('achedamicYear').value==academicYrForInstArr[i] && document.getElementById('selectedDegreeName').value==degreeTitleForInstArr[i]){
			tempInstNo[i]=instNoForInstArr[i];
			tempAmount[i]=amountForInstArr[i];
			tempDeadline[i]=deadlineForInstArr[i];
			totalCourseFee=parseInt(courseFeeForInstArr[i],10)+parseInt(libraryFeeForInstArr[i],10);			
			}
	}
	
}	

//view list of students and their payment status	
function ViewStudentsList(){
	rcount=0;	


document.getElementById('list').innerHTML =document.getElementById('list').innerHTML.replace="";
if(document.getElementById('selectedDegreeName').value=="Please scroll down to see the records"){
				
	alert("Please Select a value from the select Box(s)");		
	
	}
else{
		var dueAmount=0;
		var r;
		var degreeName=document.getElementById('selectedDegreeName').value;
		var newStr ="&nbsp;<h3>&nbsp;&nbsp;<b><u>"+degreeName+" - Payment Details</u></b></h3>";
		
		newStr +="<br><div class='identifiers' style='width:150px;'>Total Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
		newStr +="<div class='colon'>"+totalCourseFee+"</div>";
		newStr +="<br>";
		// for(r=0;r<tempInstNo.length;r++){
			// if(tempInstNo[r]!==undefined && tempAmount[r]!==undefined && tempDeadline[r]!==undefined){
			// newStr +="<br><div class='identifiers' style='width:150px;'><font color='black'>Installment "+tempInstNo[r]+" Amount</font></div><div class='colon'>&nbsp;:&nbsp;</div>";
			// newStr +="<div class='colon' style='width:50px;'>"+tempAmount[r]+"</div>";
			
				// //if(dataRep['roleName']!='Coordinator'){
				// //newStr +="<div class='identifiers' style='width:80px;clear:none'><font color='black'>Deadline</font></div><div class='colon'>&nbsp;:&nbsp;</div>";
				// //newStr +="<div class='colon'>"+tempDeadline[r]+"</div>";
				// //}
				// //else{
				// //newStr +="<div class='identifiers' style='width:80px;clear:none'><font color='black'></font></div><div class='colon'></div>";
				// //newStr +="<div class='colon'></div>";
				// //}
			
			// }
		// }
		
		newStr +="<table id='myTable' style='margin-left:8px;border-collapse:separate;border-spacing:2px 0;'>";
		newStr +="<tr style='background-Color:#ff9f80'>";
		newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'>Selection</font></div></th>";
		newStr +="<th style='width:80px;' align='center'><div class='investLabel_l' style='width:80px;'><font color='black'>Count</font></div></th>";
		newStr +="<th style='width:300px;' align='center'><div class='investLabel' style='width:300px;'><font color='black'>Student Name &nbsp;&nbsp;</font></div></th>";
		newStr +="<th style='width:250px;' align='center'><div class='investLabel' style='width:250px;'><font color='black'>Registration No &nbsp;&nbsp;</font></div></th>";
		newStr +="<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>NIC Number &nbsp;&nbsp;</font></div></th>";
		newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Paid Amount &nbsp;&nbsp;</font></div></th>";
		newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Due Amount &nbsp;&nbsp;</font></div></th>";
		newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Payment Completed &nbsp;&nbsp;</font></div></th>";
		//newStr +="<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Confirmed by SAR &nbsp;&nbsp;</font></div></th>";
		
		newStr +="</tr>";
			for( i=0; i<studentNoLength; i++){
			var temtot=temdue=totalCourseFee;
			var tempay=0;
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] && document.getElementById('achedamicYear').value==achedamicYearArr[i] ){	
				
			rcount++;
			if(rcount%2==0){
            newStr +="<tr style='background-Color:#ffece6;>";}
			else{
			newStr +="<tr style='background-Color:#ffd9cc;>";}
			
			newStr +="<div class='info' id='Alist"+i+"'  name='testInfo"+i+"'>";
			newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered"+i+"' id='registered"+i+"'>";
			newStr += "<input type='checkbox'  "+registeredChecked+"  id='markRegistered"+i+"' name='markRegistered"+i+"' onchange='AddRowColorsid(Alist"+i+", this);selectedStudentList("+i+")'/>";
			newStr += "</div></td>";			
			newStr += "<td style='width:80px;' align='center'><div style='width:80px;' class='investView' name='rc"+i+"' id='rc"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+rcount+"</div></td>";
			newStr += "<td style='width:300px;' align='center'><div style='width:300px;' class='investView_l' name='studentNo"+i+"' id='studentNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentInitialArr[i]+"</div></td>";
			newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView' name='studentName"+i+"' id='studentName"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNoArr[i]+"</div></td>";
			newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='studentNIC"+i+"' id='studentNIC"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'>"+studentNICArr[i]+"</div></td>";
			
			if (dataRep['roleName']=='Subject Clerk' || dataRep['roleName']=='FGS Deputy Registrar'){
			var checkBoxDivIdRegistered = 'markRegistered'+i;
				if(document.getElementById(checkBoxDivIdRegistered)){
					if(document.getElementById(checkBoxDivIdRegistered).checked){
						registeredChecked='checked';						
					}
				}
			
			}
			
			for(jj=0;jj<tempStdNo.length;jj++){
				if(studentNoArr[i]==tempStdNo[jj]){
					temtot=totalCourseFee;
					tempay=parseInt(tempPayAmount[jj],10);
					temdue=temtot-tempay;
									
				}
				 
			}
			
			newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='paymentStatus"+i+"' id='paymentStatus"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'><font color=black>"+tempay+"</font></div></td>";
					
			newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='balancepaymentStatus"+i+"' id='balancepaymentStatus"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>"+temdue+"</font></div></td>";
			
			newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompleted"+i+"' id='paymentCompleted"+i+"'";
			newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>"+paymentCompletedArr[i]+"</font></div></td>";

			newStr +="</tr>";
	    }
		}		
	}
	
    newStr +="</table></br>";
	
	if (dataRep['roleName']=='Subject Clerk'){
				newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
				
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';
				
				newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList('+"'updatePaymentList'"+');>'; //

				newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		
	}
	if(dataRep['userName']=="S.C.Wickramanayake"){
		
				newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
				
				newStr += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick =showMenu('+"'main'"+');>';	
	}
	

	// if(rcount>=1){
		
		
		// if (dataRep['roleName']=='Subject Clerk'){
			
				// newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
				
				// newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';
				
				// newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList('+"'updatePaymentList'"+');>'; //

				// newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';		
  		    
		// }   
		
		// // if(dataRep['roleName']=='Dean'){				             
					// // newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Get Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
					// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';
					// // //newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick ="resetInstallment();">';
					// // //newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';
					// // newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
		   
		// // }
			
			// // if (dataRep['roleName']=='Administrator')
		    // // {	
				// // newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
				
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';
				
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payments" onclick=formAddStudentsPayments('+"'addStudentsPayments'"+');>';
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList('+"'updatePaymentList'"+');>'; //
				
				
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB"  value="SAR- Confirmation" onclick=formUpdatePaymentConfirmList('+"'updatePaymentConfirmList'"+');>';
				
				// // //newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick ="resetInstallment();">';
			  // // // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formAdministratorMenu'"+');>';
				// // newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
  		    
			// // }
			
			// // if(dataRep['roleName']=='Assistant Bursar'){
				
				
				// // newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
				
				
				// // newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';
				
				
				
				// // newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
			// // }
			
			// // if(dataRep['roleName']=='Coordinator'){
				
				// // newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
				
				// // newStr += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick =showMenu('+"'main'"+');>';	
				
				
				// // newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';	
			// // }
	     
	// }	
	
	document.getElementById('list').innerHTML += newStr;
}
}

//Add marked student list to a temporary array - avoid slow down of saving process
function selectedStudentList(i){
	
	if(document.getElementById('markRegistered'+i).checked)
	{
		selectedlist[p]=i;		
		p++;
					
	}
	else{
		var ii;
		for(ii=0;ii<selectedlist.length;ii++){
			if(selectedlist[ii]==i)
				selectedlist[ii]=null;
		}
	}
}

	
function buttondisable()
{
	document.getElementById("payCategoryAB").disabled=false;
	
}
	
//function of Mark All button	
function MarkAll() 
	{
		p=0;
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'markRegistered'+i;
			if(document.getElementById('markRegistered'+i))
			{
			
				document.getElementById('markRegistered'+i).checked = true;
				selectedStudentList(i);
				document.getElementById("mark-all").disabled= true;
				document.getElementById("mark-non").disabled= false;
				
				var nam="Alist";
				nam+=i;
				if (countId==1)
				{
					countId=0;
				document.getElementById(nam).style.backgroundColor =  '#d0d0fb' ;
				
				}
				else
				{
					countId++;
				document.getElementById(nam).style.backgroundColor = '#e7e7fd';
				}
				
			
			}	
		}
	}

//function of Unmark All button
function UnmarkAll() 
	{
		p=0;
		selectedlist=new Array();
		for( i=0; i<studentNoLength; i++)
		{
		var checkBoxDivIdRegistered = 'markRegistered'+i;
			if(document.getElementById(checkBoxDivIdRegistered))
			{
				
				document.getElementById(checkBoxDivIdRegistered).checked = false;
				document.getElementById("mark-all").disabled= false;
				document.getElementById("mark-non").disabled= true;
				
				var nam="Alist";
				nam+=i;
				if (countId==1)
				{
					countId=0;
				//document.getElementById(nam).style.backgroundColor =  '#FDFDFD' ;
				
				}
				else
				{
					countId++;
				//document.getElementById(nam).style.backgroundColor = '#FDFDFD';
				}
			}
		
		}

	}
	


	


//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function getStudentPaymentlist(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
		   var cfee=0;
		   var libfee=0;
		   var pfee=0;
		   var dfee=0;
		   var tot=0;
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Student Payment Details</div>";
					
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";					
					newStr +="<th style='border: 1px solid black;'>Total Course Fee(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Course Fee Paid(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Library Fee Paid(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Due Amount(Rs)</th>";
					newStr +="</tr>";  
            
			for( i=0; i<tCodeLength; i++){
				cfee=parseInt(courseFeeArr[i],10)+parseInt(libraryFeeArr[i],10);
				libfee=0;				
				tot=cfee+libfee;
				pfee=0;
				dfee=cfee;
			if(studentNoArr1.indexOf(studentNoArr1[i]) == studentNoArr1.lastIndexOf(studentNoArr1[i]) || (studentNoArr1.indexOf(studentNoArr1[i]) != studentNoArr1.lastIndexOf(studentNoArr1[i]) && studentNoArr1.indexOf(studentNoArr1[i])==i)){
			
			
			if(document.getElementById('achedamicYear').value==achedamicYearArr1[i] && document.getElementById('selectedDegreeName').value==degreeTitleArr1[i]){
		
			for(jj=0;jj<tempStdNo.length;jj++){
				if(studentNoArr1[i]==tempStdNo[jj]){
					libfee=parseInt(libraryFeeArr[i],10);
					pfee=parseInt(tempPayAmount[jj],10)-libfee;
					dfee=cfee-parseInt(tempPayAmount[jj],10);			
				}
				 
			}
		
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
			newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr1[i]+'</td>';
			newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr1[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr1[i]+'</td>';
	
			newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+tot.toFixed(2)+'</td>';
			
			newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+pfee.toFixed(2)+'</td>';
			
			newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+libfee.toFixed(2)+'</td>';
			
			newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+dfee.toFixed(2)+'</td>';
			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
					
						}
					}				
				}
		
		newStr +="</table>";
		
		
		
		var exportFilename = "Student Payment Details.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
		if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData, exportFilename);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData);
				link.setAttribute('download', exportFilename);
				document.body.appendChild(link);    
				link.click();
				document.body.removeChild(link);    
			}

	}
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


//Get printable document of payment details for the degree program
function getPaymentDegreeWise(){
	var jj=0;
	var count=1;
	var Rcount=1;
	var pvalue=0;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
      
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Degree Payment Details</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Degree Title</th>";
					newStr +="<th style='border: 1px solid black;'>Degree Code</th>";
					newStr +="<th style='border: 1px solid black;'>Paid Amount(Rs)</th>";
					newStr +="</tr>";  
            for(jj=0;jj<tempPayAmount.length;jj++){
					if(tempPayAmount[jj]!=undefined){
						pvalue+=parseInt(tempPayAmount[jj],10);
					}
			}
			
			newStr +="<tr style='border: 1px solid black;'>";
			
			newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
            newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+document.getElementById('selectedDegreeName').value+'</td>';
	
			newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+degCode+'</td>';

			newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+pvalue+'</td>';
			
			newStr +="</tr>";
			newStr += "</div><dev><br>"; 
			inum++;	
			rwcnt++;	
			count++;
			
		newStr +="</table>";

		
		var exportFilename = "Balance Payment Details.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
		if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData, exportFilename);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData);
				link.setAttribute('download', exportFilename);
				document.body.appendChild(link);    
				link.click();
				document.body.removeChild(link);    
			}
		
	}
}	



//save installment to table
function calculateInstallmentAB(){
	if(document.getElementById('ABinstallmentChecked1').checked == true){
		installment="1"	;
	}
	if(document.getElementById('ABinstallmentChecked2').checked == true){
		installment+="2";
	}
	if(document.getElementById('ABinstallmentChecked3').checked == true){
		installment+="3"	;
	}
}

//save student payments



//------------------------------------------------------UPDATE SELECTED FUNCTION START - Staff---------------------------	

//------------------------------------------------------UPDATE SELECTED FUNCTION END - Staff ---------------------------



//------------------------------------------------------UPDATE SELECTED FUNCTION START - SAR---------------------------	

//------------------------------------------------------UPDATE SELECTED FUNCTION END - SAR ---------------------------




//Get printable document of list of students WHO COMPLETED PAYMENT
function downloadStudentPaymentCompletelist(){

	var count=1;
	var Rcount=1;
	if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
	alert("Please Select Programm and the Year.");
	}
    else{
		   var cfee=0;
		   var libfee=0;
		   var pfee=0;
		   var dfee=0;
		   var tot=0;
	   var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Student Payment Details</div>";
					
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";					
					newStr +="<th style='border: 1px solid black;'>Total Course Fee(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Course Fee Paid(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Library Fee Paid(Rs)</th>";
					newStr +="<th style='border: 1px solid black;'>Due Amount(Rs)</th>";
					newStr +="</tr>";  
            
			for( i=0; i<tCodeLength; i++){
				cfee=parseInt(courseFeeArr[i],10)+parseInt(libraryFeeArr[i],10);
				libfee=0;				
				tot=cfee+libfee;
				pfee=0;
				dfee=cfee;
			
				if(studentNoArr1.indexOf(studentNoArr1[i]) == studentNoArr1.lastIndexOf(studentNoArr1[i]) || (studentNoArr1.indexOf(studentNoArr1[i]) != studentNoArr1.lastIndexOf(studentNoArr1[i]) && studentNoArr1.indexOf(studentNoArr1[i])==i)){
					
					
					if(document.getElementById('achedamicYear').value==achedamicYearArr1[i] && document.getElementById('selectedDegreeName').value==degreeTitleArr1[i]){
						if(paymentCompletedArr1[i]=='YES'){
							
							for(jj=0;jj<tempStdNo.length;jj++){
								if(studentNoArr1[i]==tempStdNo[jj]){
									libfee=parseInt(libraryFeeArr[i],10);
									pfee=parseInt(tempPayAmount[jj],10)-libfee;
									dfee=cfee-parseInt(tempPayAmount[jj],10);			
								}
								 
							}
		
							newStr +="<tr style='border: 1px solid black;'>";
							newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+count+'</td>';
							newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr1[i]+'</td>';
							newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr1[i]+'</td>';
							newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr1[i]+'</td>';
					
							newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+tot.toFixed(2)+'</td>';
							
							newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+pfee.toFixed(2)+'</td>';
							
							newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+libfee.toFixed(2)+'</td>';
							
							newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+dfee.toFixed(2)+'</td>';
							
							newStr +="</tr>";
							newStr += "</div><dev><br>"; 
							inum++;	
							rwcnt++;	
							count++;
					
						}
					}
				}				
			}
		
		newStr +="</table>";
		
		
		
		var exportFilename = "Student Payment Complete List.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
		if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData, exportFilename);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData);
				link.setAttribute('download', exportFilename);
				document.body.appendChild(link);    
				link.click();
				document.body.removeChild(link);    
			}


			}
}


function AddRowColorsid(x, _this) {
	//	 if (y.checked)
  //    x.style.backgroundColor = '#0000FF';
 // else
  //    x.style.backgroundColor = '#FF0000';
		if (countId==1)
		{
			countId=0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		
		}
		else
		{
			countId++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		
		}
		
		//alert(x);
}
