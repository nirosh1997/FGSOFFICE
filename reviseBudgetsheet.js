var degreeTitleList = academicYearList = "";
dataRep["degreeTitle"] = dataRep["academicYear"] ="";

function setValuesForBudget(){
	for(i=0; i<categoryCodeLength;i++){

		if(dataRep["degreeTitle"]==degreeTitleArr[i]){
		//alert(totalExpenditureAmountArr[i]);

			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["universityTitle"]=universityTitleArr[i];
			dataRep["facultyCode"]=facultyCodeArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["categoryCode"]=categoryCodeArr[i];
			dataRep["categoryTitle"]=categoryTitleArr[i];
			dataRep["categoryType"]=categoryTypeArr[i];
			dataRep["subcategoryCode"]=subcategoryCodeArr[i];
			dataRep["subcategoryTitle"]=subcategoryTitleArr[i];
			dataRep["noteNo1"]=noteNo1Arr[i];
			dataRep["noteNo2"]=noteNo2Arr[i];
			dataRep["noteNo3"]=noteNo3Arr[i];
			dataRep["noteNo4"]=noteNo4Arr[i];
			dataRep["rate1"]=rate1Arr[i];
			dataRep["unit1"]=unit1Arr[i];
			dataRep["rate2"]=rate2Arr[i];
			dataRep["unit2"]=unit2Arr[i];
			dataRep["incomeAmount1"]=incomeAmount1Arr[i];
			dataRep["expenditureAmount1"]=expenditureAmount1Arr[i];
			dataRep["totalIncomeAmount"]=totalIncomeAmountArr[i];
			dataRep["totalIncomeAfterTax"]=totalIncomeAfterTaxArr[i];
			dataRep["totalExpenditureAmount"]=totalExpenditureAmountArr[i];
			dataRep["budgetId"]=budgetIdArr[i];
			

				
	
		}else if(dataRep["academicYear"]==academicYearArr[i]){

			
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["universityTitle"]=universityTitleArr[i];
			dataRep["facultyCode"]=facultyCodeArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["categoryCode"]=categoryCodeArr[i];
			dataRep["categoryTitle"]=categoryTitleArr[i];
			dataRep["categoryType"]=categoryTypeArr[i];
			dataRep["subcategoryCode"]=subcategoryCodeArr[i];
			dataRep["subcategoryTitle"]=subcategoryTitleArr[i];
			dataRep["noteNo1"]=noteNo1Arr[i];
			dataRep["noteNo2"]=noteNo2Arr[i];
			dataRep["noteNo3"]=noteNo3Arr[i];
			dataRep["noteNo4"]=noteNo4Arr[i];
			dataRep["rate1"]=rate1Arr[i];
			dataRep["unit1"]=unit1Arr[i];
			dataRep["rate2"]=rate2Arr[i];
			dataRep["unit2"]=unit2Arr[i];
			dataRep["incomeAmount1"]=incomeAmount1Arr[i];
			dataRep["expenditureAmount1"]=expenditureAmount1Arr[i];
			dataRep["totalIncomeAmount"]=totalIncomeAmountArr[i];
			dataRep["totalIncomeAfterTax"]=totalIncomeAfterTaxArr[i];
			dataRep["totalExpenditureAmount"]=totalExpenditureAmountArr[i];
			dataRep["budgetId"]=budgetIdArr[i];

		}
	}
} 




function formReviseBudgetSheet(dsp){

  saved="No";
  str = "";
  
  title = "University of Kelaniya";
		str = "";

	if(dsp == "formReviseBudgetSheet") {  
			str  = "<div id='addnewReviseBudget' style='float:left;' >";
			str += "<br>" ;
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str+="<div id='main' style='margin-left:100px'>";
			str += "<form name='MainBudgetSheetform'>";
			
			for(budgetLoop=0; budgetLoop< categoryCodeLength; budgetLoop++){
			
			if(departmentTitleArr[budgetLoop] != ""){
				if (degreeTitleArr.indexOf(degreeTitleArr[budgetLoop])== degreeTitleArr.lastIndexOf(degreeTitleArr[budgetLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[budgetLoop])!= degreeTitleArr.lastIndexOf(degreeTitleArr[budgetLoop]) && degreeTitleArr.indexOf(degreeTitleArr[budgetLoop])== budgetLoop)){
					
				degreeTitleList += "<option value='"+degreeTitleArr[budgetLoop]+"'>";
		
				academicYearList += "<option value='"+academicYearArr[budgetLoop]+"'>";
			}
			}
			}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Degree Title</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='degreeTitle' list='listdegreeTitle' id='degreeTitle' value= '"+dataRep["degreeTitle"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForBudget();'>";
			str += "<datalist id='listdegreeTitle'>"+degreeTitleList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Academic Year</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='academicYear' list='listacademicYear' id='academicYear' value= '"+dataRep["academicYear"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForBudget();'>";
			str += "<datalist id='listacademicYear'>"+academicYearList+"</datalist>";
			str += "</div><br>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4AddCategory1');>";
			
			
			str += "</fieldset></div></div>";

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
 			str += "<div style='width:10%;  border-left:1px solid black;     float:left;'>Revise Budget</div>";
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

		for (var i=0; i<categoryCodeLength; i++) {
			if (categoryTypeArr[i] == "Income"){
			if(subcategoryTitleArr != ""){
	
				if (categoryTitleArr[i] != categoryTitleArr[i-1] && categoryTitleArr[i] != ""){
		
 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";

            str += "<div style='width:5%; text-align:left;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:34%; text-align:left;    float:left;'>" +categoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;   border-left:1px solid black;  float:left;'><input type='text' name='noteNo1'       id ='noteNo1' 	 value='"+noteNo1Arr[i]+"'     onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:5%;   border-left:1px solid black;  float:left;'><input type='text' name='noteNo2'       id ='noteNo2' 	 value='"+noteNo1Arr[i]+"'	      onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;  border-left:1px solid black;  float:left;'><input type='text' name='rate1' 	       id ='rate1'    	 value='"+rate1Arr[i]+"'  	   onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;  border-left:1px solid black;  float:left;'><input type='text' name ='unit1'         id ='uni1t'    	 value='"+unit1Arr[i]+"' 	   onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;  border-left:1px solid black;  float:left;'><input type='text' name = 'incomeAmount1'    id ='incomeAmount1'    value='"+incomeAmount1Arr[i]+"'    onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";			
 			str += "<div style='width:10%;  border-left:1px solid black;  float:left;'><input type='text' name = 'incomeAmount2' id ='incomeAmount2'  onchange='dataRep[this.name]=this.value' style='width:100%;'></div>";
 			str += "<div style='width:10%;  border-left:1px solid black;  float:left;'><input type='text' style='width:100%;'></div>";

			str += "</div>";
			}	
			}
			}
		}

 			str += "<div style='width:100%; text-align:center;  border-left:1px solid black; border-right:1px solid black;   float:left;'>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;     float:left;'><input type='button'  class='btn' id='total' value = 'Total Income'></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'><input type='text' name='totalIncomeAmount' id ='totalIncomeAmount' value='"+totalIncomeAmountArr[0]+"' style='width:100%;'></div>";
 			str += "<div style='width:10%;        float:left;'><input type='text' name='total_2' id ='total_2' style='width:100%;'></div>";
 			str += "</div>";
			
			str += "<div style='width:100%; text-align:center; float:left; border-bottom:1px solid black; border-top:1px solid black; border-left:1px solid black; border-right:1px solid black; '>";
 			str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;     float:left;'><lable id='total'>NBT2%+ESC0.25%(Exceptitem No.05)</lable></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;        float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;        float:left;'></div>";
 			str += "<div style='width:10%;        float:left;'></div>";
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
 			str += "<div style='width:10%;        float:left;'><input type='text' name ='totalIncomeAfterTax' id ='totalIncomeAfterTax' value='"+totalIncomeAfterTaxArr[0]+"' style='width:100%;'></div>";
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
			
	for (var i=0; i<categoryCodeLength; i++) {
		if (categoryTypeArr[i] == "Expenditure"){
			if(i ==0 || categoryTitleArr[i-1]!= categoryTitleArr[i]){
			//if(categoryTitleArr[i-1]!= categoryTitleArr[i]){
			
			
				if(categoryTitleArr[i]== "Contingencies"){
					
			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";
			str += "<div style='width:5%; text-align:left;float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left; float:left;'>" +categoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3' id ='noteNo3' value='"+noteNo3Arr[i]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4' id ='noteNo4' value='"+noteNo4Arr[i]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2' id ='rate2'  value='"+rate2Arr[i]+"'  onchange='dataRep[this.name]=this.value'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2' id ='unit2' value='"+unit2Arr[i]+"'  onchange='dataRep[this.name]=this.value' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' name = 'expenditureAmount1' id='expenditureAmount1' value='"+expenditureAmount1Arr[i]+"' style='width:100%;'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2' id ='expenditureamount2' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
				}
				else{
					if (categoryTitleArr.indexOf(categoryTitleArr[i])== categoryTitleArr.lastIndexOf(categoryTitleArr[i]) || (categoryTitleArr.indexOf(categoryTitleArr[i])!= categoryTitleArr.lastIndexOf(categoryTitleArr[i]) && categoryTitleArr.indexOf(categoryTitleArr[i])== i)){
				
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
			}
																										
																										
																										
																										
																										
			if(subcategoryTitleArr[i]!= ""){		
		

				if(subcategoryCodeArr[i-1] != subcategoryCodeArr[i]){
				//if (subcategoryTitleArr[i] != subcategoryTitleArr[i-1] && subcategoryTitleArr[i] != ""){
				if (subcategoryTitleArr.indexOf(subcategoryTitleArr[i])== subcategoryTitleArr.lastIndexOf(subcategoryTitleArr[i]) || (subcategoryTitleArr.indexOf(subcategoryTitleArr[i])!= subcategoryTitleArr.lastIndexOf(subcategoryTitleArr[i]) && subcategoryTitleArr.indexOf(subcategoryTitleArr[i])== i)){
				
			
 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";			
            
			str += "<div style='width:5%; text-align:left; float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left;    float:left;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +subcategoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3' id ='noteNo3' value='"+noteNo3Arr[i]+"'></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4' id ='noteNo4' value='"+noteNo4Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2'    id ='rate2' value='"+rate2Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2'   id ='unit2' value='"+unit2Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name = 'expenditureAmount1' id='expenditureAmount1' value='"+expenditureAmount1Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureAmount2' id ='expenditureAmount2' ></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
				}
			}
				
					if(subcategoryCodeArr[i-1] == subcategoryCodeArr[i]){
				if (subcategoryTitleArr.indexOf(subcategoryTitleArr[i])== subcategoryTitleArr.lastIndexOf(subcategoryTitleArr[i]) || (subcategoryTitleArr.indexOf(subcategoryTitleArr[i])!= subcategoryTitleArr.lastIndexOf(subcategoryTitleArr[i]) && subcategoryTitleArr.indexOf(subcategoryTitleArr[i])== i)){

 			str += "<div style='width:100%;  text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";			
            
			str += "<div style='width:5%; text-align:left; float:left;'>&nbsp;</div>";
			str += "<div style='width:34%; text-align:left;    float:left;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +subcategoryTitleArr[i]+"</div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo3' id ='noteNo3' value='"+noteNo3Arr[i]+"'></div>";
 			str += "<div style='width:5%;  border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='noteNo4' id ='noteNo4' value='"+noteNo4Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='rate2'    id ='rate2' value='"+rate2Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name ='unit2'   id ='unit2' value='"+unit2Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name = 'expenditureAmount1' id='expenditureAmount1' value='"+expenditureAmount1Arr[i]+"'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;' name='expenditureamount2' id ='expenditureamount2'></div>";
 			str += "<div style='width:10%; border-left:1px solid black; float:left;'><input type='text' style='width:100%;'></div>";
			str += "</div>";
				}			
				}
				}
		}
		// else if(subcategoryTitleArr[i] == ""){

		     // str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black;   float:left;'>";
 			 // str += "<div style='width:5%; text-align:left;       float:left;'>&nbsp;</div>";
 			 // str += "<div style='width:34%; text-align:left;     float:left;'>" +categoryTitleArr[i]+"</div>";
 			 // str += "<div style='width:5%;    border-left:1px solid black;  float:left;'><input type='text' style='width:100%;' name ='noteNo3' id ='noteNo3' value='"+noteNo3Arr[i]+"'></div>";
 			 // str += "<div style='width:5%;    border-left:1px solid black;  float:left;'><input type='text' style='width:100%;' name ='noteNo4' id ='noteNo4' value='"+noteNo4Arr[i]+"'></div>";
 			 // str += "<div style='width:10%;  border-left:1px solid black;float:left;'><input type='text' style='width:100%;' name='rate2'    id ='rate2' value='"+rate2Arr[i]+"'></div>";
 			 // str += "<div style='width:10%;  border-left:1px solid black;float:left;'><input type='text' style='width:100%;' name ='unit2'   id ='unit2' value='"+unit2Arr[i]+"'></div>";
 			 // str += "<div style='width:10%;  border-left:1px solid black;float:left;'><input type='text' style='width:100%;' name = 'expenditureAmount1' id='expenditureAmount1' value='"+expenditureAmount1Arr[i]+"'></div>";
 			 // str += "<div style='width:10%;  border-left:1px solid black;float:left;'><input type='text' style='width:100%;' name='expenditureamount2' id ='expenditureamount2' value='"+expenditureAmount2Arr[i]+"'></div>";
 			 // str += "<div style='width:10%;  border-left:1px solid black;     float:left;'><input type='text' style='width:100%;'></div>";
 			 // str += "</div>";	
					
			// }

	}
	
	var last = totalExpenditureAmountArr[totalExpenditureAmountArr.length - 1];
 			str += "<div style='width:100%; text-align:center;  border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; float:left;'>";
 			str += "<div style='width:5%; text-align:left;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:34.5%; text-align:left;   float:left;'><input type='button' class='btn' id='totalExpenditure' value = 'Total Expenditure'></div>";
 			str += "<div style='width:5%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:5%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;       float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;      float:left;'>&nbsp;</div>";
 			str += "<div style='width:10%;       float:left;'>&nbsp;</div>";			
 			str += "<div style='width:10%;       float:left;'><input type='text' style='width:100%;' id ='totalExpenditureAmount'  name ='totalExpenditureAmount' value='"+last+"' ></div>";
 			str += "<div style='width:10%;     float:left;'><input type='text' style='width:100%;' id ='total_4'></div>";
 			str += "</div>";	
			str += "</div>";
 	
//////////////////////////////////////////////////////////////////////////////////////////////
			str += "<br><br><center>";
            str += '<div style="width:100%; float:left; height:20px;"></div>';			
			//str += '<input type="submit" class="btn" value="Save" onclick=formBudgetSheetsendForm("addnewBudget");>';
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
