dataRep["rate1"]= dataRep["rate2"] = dataRep["unit1"] = "";
dataRep["noteNo1"]=dataRep["noteNo2"]= dataRep["unit2"] ="";
dataRep["noteNo3"]=dataRep["noteNo4"]="";
dataRep["budgetId"] = "";
dataRep["budgetId"] = new Array();

function formBudgetSheet(dsp){
		

  saved="No";
  str = "";
  
  title = "University of Kelaniya";
		str = "";

	if(dsp == "formBudgetSheet"){  
categoryCodeLength = budgetCodeLength;
//subcategoryCodeLength = budgetCodeLength;
departmentCodeLength=departmentCodeTitleLength;
programmeTypeCodeLength=departmentCodeTitleLength;
			str  = "<div id='addnewBudget' style='float:left;' >";
			str += "<br>" ;
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str+="<div id='main' style='margin-left:100px'>";
			str += "<form name='MainBudgetSheetform'>";
			
				str += "<center>";
				str += "<div style='clear:both' id='selectbox' style='border: solid 2px pink' >";
				
				str += "<div style='float:left' >&nbsp;";
			
				DepartmentCodeStr="<option>Please scroll down to see the records</option>";
				
				for(var deploop = 0; deploop<departmentCodeTitleLength; deploop++) {
				if(facultyCodeArr[deploop] == "000"){
				if (departmentTitleArr.indexOf(departmentTitleArr[deploop])== departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) || (departmentTitleArr.indexOf(departmentTitleArr[deploop])!= departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) && departmentTitleArr.indexOf(departmentTitleArr[deploop])== deploop)){
				
					DepartmentCodeStr  += "<option>"+departmentTitleArr[deploop]+"-"+facultyTitleArr[deploop]+"-"+universityTitleArr[deploop]+"</option>";
				}
				}else{
					DepartmentCodeStr  += "<option>"+departmentTitleArr[deploop]+"-"+facultyTitleArr[deploop]+"-"+universityTitleArr[deploop]+"</option>";
				}
				}
				str += "<select id='selecteduniversity' name='selecteduniversity'     onchange='dataRep[this.id]=this.selectedIndex; '>";
				str += DepartmentCodeStr ;
				str += "</select></div>";
				str += "</br></br>";
				
				str += "<div style='float:left' >&nbsp;";
				
				programmeTypeCodeStr = "<option>Please scroll down to see the records</option>";
	
			for(var proLoop = 0; proLoop<departmentCodeTitleLength; proLoop++) {
					programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[proLoop]+"--"+degreeTitleArr[proLoop]+"</option>";
			}

			str += "<select id='selectedprogrammeType' name='selectedprogrammeType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programmeTypeCodeStr ;
			str += "</select></div>";
			
			
			str +="<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='academicYear' value='academicYear'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2013, 2050, 4, dataRep['academicYear']);
			str += "</select></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Batch No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='batchNo' id='batchNo' value= '"+dataRep["batchNo"].trim()+"' onchange='dataRep[this.name]=this.value;' >";
			str += "</div></div>";
			str += "</div>";
			str += "</center>";
			
			str += "<div style='width:95%; align:center; background:red;'>";			

 			str += "<div style='width:100%; text-align:center;  border:1px solid black;   float:left;'>";
 			str += "<div style='width:5%; text-align:left;      float:left;'>Code No</div>";
 			str += "<div style='width:34%; text-align:left;  border-left:1px solid black;  float:left;'>Budget Line</div>";
 			str += "<div style='width:5%;    border-left:1px solid black;  float:left;'>Note No</div>";
 			str += "<div style='width:5%;    border-left:1px solid black;  float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'>Rate</div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'>Units</div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'>Amount in Rs</div>";			
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'>Amount in Rs</div>";
 			str += "<div style='width:10%;  border-left:1px solid black;     float:left;'>As % of LTE</div>";
 			str += "</div>";

 			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; float:left;'>";
 			str += "<div style='width:5%; text-align:left;      float:left;'>A</div>";
 			str += "<div style='width:34%; text-align:left;  border-left:1px solid black;  float:left;'>Income</div>";
 			str += "<div style='width:5%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "</div>";

		for (var i=0; i<budgetCodeLength; i++) {
			if (categoryTypeArr[i] == "Income"){
				if(subcategoryTitleArr != ""){
 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";

            str += "<div style='width:5%; text-align:left;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:34%; text-align:left;    float:left;'>" +categoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;    border-left:1px solid black;  float:left;'><input type='text' name='noteNo1"+i+"' id ='noteNo1"+i+"' value= '"+dataRep["noteNo1"]+"'  onchange='dataRep[this.name]=this.value'  style='width:100%;'></div>";
 			str += "<div style='width:5%;    border-left:1px solid black;  float:left;'><input type='text' name='noteNo2"+i+"' id ='noteNo2"+i+"' value= '"+dataRep["noteNo2"]+"'  onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'><input type='text' name='rate1"+i+"' id ='rate1"+i+"' value= '"+dataRep["rate1"]+"'  onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'><input type='text' style='width:100%;' name ='unit1"+i+"' id ='unit1"+i+"' value= '"+dataRep["unit1"]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'><input type='text' name = 'incomeAmount1"+i+"' id ='incomeAmount1"+i+"'  onclick ='calculateamount1();' style='width:100%;'></div>";			
 			str += "<div style='width:10%;   border-left:1px solid black;    float:left;'><input type='text' style='width:100%;' name = 'incomeAmount2"+i+"' id ='incomeAmount2"+i+"'></div>";
 			str += "<div style='width:10%;  border-left:1px solid black;     float:left;'><input type='text' style='width:100%;'></div>";

			str += "</div>";
				} 
			}
		}

 			str += "<div style='width:100%; text-align:center;  border-left:1px solid black; border-right:1px solid black;   float:left;'>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;     float:left;'><input type='button'  class='btn' id='total' value = 'Total Income' onclick = ''></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'><input type='text' style='width:100%;' name='totalIncomeAmount' id ='totalIncomeAmount' ></div>";
 			str += "<div style='width:10%;        float:left;'><input type='text' value='' style='width:100%;' name= 'total_2' id ='total_2'></div>";
 			str += "</div>";
			
			str += "<div style='width:100%; text-align:center; float:left; border-bottom:1px solid black; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;     float:left;'><lable id='total' onclick = ''>NBT2%+ESC0.25%(Exceptitem No.05)</lable></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'></div>";
 			str += "<div style='width:10%;        float:left;'><input type='text' value='' style='width:100%;' id ='TaxForTotalIncome' onclick ='alert(this.id)'></div>";
 			str += "</div>";
			
			
			str += "<div style='width:100%; text-align:center; float:left; border-bottom:1px solid black;  border-left:1px solid black; border-right:1px solid black; '>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;     float:left;'><lable id='total'>Total income after taxes</lable></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'></div>";
 			str += "<div style='width:10%;        float:left;'><input type='text' value='' style='width:100%;' id ='totalIncomeAfterTax' onclick ='alert(this.id)'></div>";
 			str += "</div>";
			str += "</div>";			
			str += "<div style='width:100%; height:80px; float:left;'>&nbsp;</div>";

//////////////////////////////////////////////////////////////////////////////////////////
			str += "<div style='width:95%; align:center; background:red; id='tblEst1' '>";	
 			str += "<div style='width:100%; text-align:center; border:1px solid black; float:left;'>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>B</div>";
 			str += "<div style='width:34%; text-align:left;  border-left:1px solid black;  float:left;'>Expenditure</div>";
 			str += "<div style='width:5%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "</div>";			
			
		for (var i=0; i<budgetCodeLength; i++) {
			if (categoryTypeArr[i] == "Expenditure"){
				if(i ==0 || categoryTitleArr[i-1]!= categoryTitleArr[i]){
					if(categoryTitleArr[i]== "Contingencies"){
				
			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";
			str += "<div style='width:5%; text-align:left;float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left; float:left;'>" +categoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3"+i+"' id ='noteNo3"+i+"' style='width:100%;  '></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4'"+i+" id ='noteNo4"+i+"' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2"+i+"' id ='rate2"+i+"'  value= '"+dataRep["rate2"]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2"+i+"' id ='unit2"+i+"' value= '"+dataRep["unit2"]+"'  onchange='dataRep[this.name]=this.value' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' name = 'expenditureAmount1"+i+"' id='expenditureAmount1"+i+"' onclick ='calculateamount2();' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2"+i+"' id ='expenditureamount2"+i+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
					}
					else{
			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";
			str += "<div style='width:5%; text-align:left;float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left; float:left;'>" +categoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;float:left;' >&nbsp;</div>";
 			str += "<div style='width:5%;float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%; float:left;'>&nbsp;</div>";
 			str += "</div>";			
					}
				}
		
			if(subcategoryTitleArr[i]!= ""){		
				if(subcategoryCodeArr[i-1] != subcategoryCodeArr[i]){
			
 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";			
            
			str += "<div style='width:5%; text-align:left; float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left;    float:left;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +subcategoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3"+i+"' id ='noteNo3"+i+"' style='width:100%;  '></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4'"+i+" id ='noteNo4"+i+"' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2"+i+"' id ='rate2"+i+"'  value= '"+dataRep["rate2"]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2"+i+"' id ='unit2"+i+"' value= '"+dataRep["unit2"]+"'  onchange='dataRep[this.name]=this.value' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' name = 'expenditureAmount1"+i+"' id='expenditureAmount1"+i+"' onclick ='calculateamount2();' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2"+i+"' id ='expenditureamount2"+i+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
				}
				
					if(subcategoryCodeArr[i-1] == subcategoryCodeArr[i]){
			
 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";			
            
			str += "<div style='width:5%; text-align:left; float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left;    float:left;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +subcategoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3"+i+"' id ='noteNo3"+i+"' style='width:100%;  '></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4'"+i+" id ='noteNo4"+i+"' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2"+i+"' id ='rate2"+i+"'  value= '"+dataRep["rate2"]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2"+i+"' id ='unit2"+i+"' value= '"+dataRep["unit2"]+"'  onchange='dataRep[this.name]=this.value' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' name = 'expenditureAmount1"+i+"' id='expenditureAmount1"+i+"' onclick ='calculateamount2();' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2"+i+"' id ='expenditureamount2"+i+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
					}			
				
			}
			
			}
		
		
		else if(subcategoryTitleArr == ""){

		     str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";
 			 str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			 str += "<div style='width:34%; text-align:left;     float:left;'>" +categoryTitleArr[i]+"</div>";
 			 str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3"+i+"' id ='noteNo3"+i+"' style='width:100%;  '></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4'"+i+" id ='noteNo4"+i+"' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2"+i+"' id ='rate2"+i+"'  value= '"+dataRep["rate2"]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2"+i+"' id ='unit2"+i+"' value= '"+dataRep["unit2"]+"'  onchange='dataRep[this.name]=this.value' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' name = 'expenditureAmount1"+i+"' id='expenditureAmount1"+i+"' onclick ='calculateamount2();' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2"+i+"' id ='expenditureamount2"+i+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";		
					
			}
		}
 			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; float:left;'>";
 			str += "<div style='width:5%; text-align:left;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;   float:left;'><input type='button' class='btn' id='total' value = 'Total Expenditure' onclick = ''></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;       float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;       float:left;'><input type='text' style='width:100%;' id ='totalExpenditureAmount'></div>";
 			str += "<div style='width:10%;     float:left;'><input type='text' style='width:100%;' id ='total_4'></div>";
 			str += "</div>";	
			str += "</div>";
 	
//////////////////////////////////////////////////////////////////////////////////////////////
			str += "<br><br><center>";
            str += '<div style="width:100%; float:left; height:20px;"></div>';			
			str += '<input type="submit" class="btn" value="Save" onclick=formBudgetSheetsendForm("addnewBudget");>';
			//str += '<input type="submit" class="btn" value="Print" onclick=formBudgetSheetsendForm("addnewBudget");>';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formBudgetDetails'"+')>';
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';	
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			str += '</center>';
			str += '</form>';
			str += "</div>";
			str += '</td></tr></table>';
			str += '</div>';
		
	}
	return str;
}


function formBudgetSheetsendForm(frm){
	
		var doc, dataStr;
		var categoryStr = "";
		var SubcategoryStr = "";
		var SubcatStr = "";
		var budgetIdStr = "";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		if(frm == 'addnewBudget'){
 
			doc = document.MainBudgetSheetform;
			dataStr += "&interface="+frm;

			
					dataStr += "&batchNo="+doc.batchNo.value;
					dataStr += "&academicYear="+dataRep['academicYear'];
					dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
					dataStr += "&facultyCode="+facultyCodeArr[dataRep["selecteduniversity"]-1];
					dataStr += "&departmentCode="+departmentCodeArr[dataRep["selecteduniversity"]-1];
					dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedprogrammeType"]-1];
					dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedprogrammeType"]-1];
					dataStr += "&budgetId="+dataRep["budgetId"];

			for (var i=0; i<budgetCodeLength; i++){
				categoryStr += "&categoryCode="+categoryCodeArr[i]+"&subcategoryCode="+subcategoryCodeArr[i];
				
				if (categoryTypeArr[i] == "Income"){
					
						categoryStr += "&noteNo1="+ document.getElementById('noteNo1'+i).value; 
						categoryStr += "&noteNo2="+ document.getElementById('noteNo2'+i).value; 
						categoryStr += "&rate1="+document.getElementById('rate1'+i).value;
						categoryStr += "&unit1="+document.getElementById('unit1'+i).value;
						categoryStr += "&incomeAmount1="+document.getElementById('incomeAmount1'+i).value;
						categoryStr += "&totalIncomeAmount="+document.getElementById('totalIncomeAmount').value; 
						categoryStr += "&totalIncomeAfterTax="+document.getElementById('totalIncomeAfterTax').value;
				}		
				else{	
						categoryStr += "&noteNo3="+  document.getElementById('noteNo3'+i).value; 
						categoryStr += "&noteNo4="+ document.getElementById('noteNo4'+i).value; 
						categoryStr += "&rate2="+document.getElementById('rate2'+i).value;
						categoryStr += "&unit2="+document.getElementById('unit2'+i).value;
						categoryStr += "&expenditureAmount1="+document.getElementById('expenditureAmount1'+i).value;
						categoryStr += "&totalExpenditureAmount="+document.getElementById('totalExpenditureAmount').value;
						//categoryStr += "&="

				}
					budgetDataIncomeArr[i] = dataStr+categoryStr;
					//alert(budgetDataIncomeArr[i]);
			}
			
	

			if(frm == 'addnewBudget'){
				for(budgetLoop=0; budgetLoop<categoryCodeArr.length; budgetLoop++){
					if(budgetDataIncomeArr[budgetLoop]!= "" || budgetDataIncomeArr[budgetLoop]!= null){
					//alert(budgetDataIncomeArr[budgetLoop]);
						isrHandle.getDataFromDB(eval("clientController"), "serverController.php", budgetDataIncomeArr[budgetLoop]);
					}
				}
			}

		}	

	 else{
		 isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 }		
			
	return 0;
		
}






function calculateamount1(){ 

for(var i=0; i < budgetCodeLength; i++){
	
    document.getElementById('incomeAmount1'+i).value = (document.getElementById('rate1'+i).value * document.getElementById('unit1'+i).value);
			
}
}


function calculateamount2(){ 

for(var i=0; i < budgetCodeLength; i++){

	document.getElementById('expenditureAmount1'+i).value = (document.getElementById('rate2'+i).value * document.getElementById('unit2'+i).value);
	//alert(document.getElementById('expenditureAmount1'+i).value);
    		
}
}

// function findTotalIncome(){
// var incometotal = document.getElementById('incomeAmount'+i).value;
// var tot=0;
// for(var i=0; i< incometotal.length; i++){
// tot += parseFloat(incometotal[i].value);
// document.getElementById('totalIncomeAmount').value = tot;

// }
// }

// function findTaxForIncome(){
	// var incometotal = document.getElementById('incomeAmount'+i).value;
	// var tot =0;
	// for(var i=0; i<incometotal.length; i++){
	// tot += parseFloat(incometotal[i].value);
	// document.getElementById('totalIncomeAmount').value =tot;
	
	// }
// }

// function findTotalIncome(){
	 // var incometotal = document.getElementById('incomeAmount1'+i).value
 // // var incometotal = document.getElementsByName('incomeAmount1');
    // var tot=0;
		// for(var i=0;i<incometotal.length;i++){
            // tot += parseFloat(incometotal[i].value);
			// document.getElementById('totalIncomeAmount').value = tot;
		// }
// }



// function findTexForIncome(){
  // var incometotal = document.getElementsByName('incomeAmount1');
    // var tot=0;
		// for(var i=0;i<incometotal.length;i++){
            // tot += parseFloat(incometotal[i].value);
			 // document.getElementById('totalIncomeAmount').value = tot;
		// }

// var miniLibraryfee =(tot-document.getElementById('incomeAmount'+i).value);
// document.getElementById('TaxForTotalIncome').value = minLibraryfee;

// var NBT =((minLibraryfee*2)/100);
// document.getElementById('TaxForTotalIncome').value = NBT;	
		
// var ESC=((minLibraryfee*0.25)/100);
// document.getElementById('TaxForTotalIncome').value = ESC;		

// var incomeTex = NBT + ESC;
// document.getElementById('TaxForTotalIncome').value = incomeTex;

// var incomeAfterTex = tot-incomeTex;
// document.getElementById('totalIncomeAfterTax').value = incomeAfterTex;

// var minLibraryfee=(tot- document.MainBudgetSheetform.incomeAmount1[4].value);
// //document.getElementById('TaxForTotalIncome').value = minLibraryfee;

// var NBT=((minLibraryfee*2)/100);
// //document.getElementById('TaxForTotalIncome').value = NBT;

// var ESC=((minLibraryfee*0.25)/100);
// //document.getElementById('TaxForTotalIncome').value = ESC;

// var incomeTex=NBT+ESC;
// document.getElementById('TaxForTotalIncome').value = incomeTex;

// var incomeAfterTex=tot-incomeTex;
// document.getElementById('totalIncomeAfterTax').value = incomeAfterTex;
// }



// function findTotalExpenditure(){
	
  // var expendituretotal = document.getElementsByName('expenditureAmount1');
    // var tot=0;
		// for(var i=0;i<expendituretotal.length;i++){
            // tot += parseFloat(expendituretotal[i].value);
			// document.getElementById('totalExpenditureAmount').value = tot;
		// }


		// }