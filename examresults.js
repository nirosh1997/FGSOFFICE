
var studentNoList = "";
dataRep['roleName'] = "";
dataRep["subjectName"] = dataRep["marks"] = "";
var addResultsValueArr1 = new Array();
var addResultsValueArr = new Array();
var addingRow = 1;

function setValuesForExamResults() {

	for (j = 0; j < studentNoCodeLength; j++) {

		if (dataRep["studentNo"] == studentNoArr[j]) {

			dataRep["studentName"] = studentNameArr[j];
			dataRep["degreeCode"] = degreeCodeArr[j];



		}

	}
}

function formExamResults(dsp) {

	title = "Exam Results";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "addExamResults") {
		keyDisabled = "Disabled";

		str = "<div id='addExamResults'>";
		str += "<table align='center' border='1'><tr><td>"
		str += '<h2>' + title + '</h2><hr>';
		str += '<form name="maintainExamResults">';
		var u = document.cookie;
		var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		for (i = 0; i < userIdLength; i++) {
			if (use == userIdArr[i]) {
				dataRep['roleName'] = roleNameArr[i];
				//alert(dataRep['departmentCode']);
			}

		}



		for (i = 0; i < studentNoCodeLength; i++) {


			studentNoList += "<option value='" + studentNoArr[i] + "'>";

		}
		str += "<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<input type='text' name='studentNo'  id='studentNo' list='studentNoList' value= '" + dataRep["studentNo"].trim() + "'  onchange='dataRep[this.name]=this.value;setValuesForExamResults();'>";
		str += "<datalist id='studentNoList'>" + studentNoList + "</datalist>";


		str += "<input type='button' style='margin-top:0px' class='btn' value='Search' onclick=sendForm('data4addExamResults');>";

		//str += '<input type = "button" class ="btn" value="Return" onclick="showMenu('+"'formClerkMenu'"+');">';

		if (dataRep['roleName'] == 'Subject Clerk') {
			str += '<input type = "button" class ="btn" value="Return" onclick="showMenu(' + "'formClerkMenu'" + ');">';
		}
		if (dataRep['roleName'] == 'Dean') {
			str += '<input type = "button" class ="btn" value="Return" onclick="showMenu(' + "'formDeanMenu'" + ');">';
		}
		str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';

		str += "<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<input type='text'  name='studentName'  id='studentName' value= '" + dataRep["studentName"] + "'  onchange='dataRep[this.name]=this.value;' >";

		str += "<div style='margin-top:20px;float:left;clear:both;'>";
		str += "<div class='longIdentifier' style='clear:none;'>Student Degree</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		str += "<input type='text'  name='degreeCode'  id='degreeCode' value= '" + dataRep["degreeCode"] + "'  onchange='dataRep[this.name]=this.value;' >";


		str += "<div><input type='button' style='margin-top:0px' class='btn'id='addbtn1' value='Add Marks' onclick=addowExamMarks();>";
		str += "<div><input type='button' style='margin-top:0px; visibility:hidden' id='addbtn2' class='btn' value='Add Row' onclick=addowExamMarks();>";
		str += "</div></div>";



		str += "<div><input type='button' style='margin-top:0px' class='btn' value='Save' onclick=formExamResultssendForm('addExamResults');>";
		str += "</div>";
		str += '</center></div>';
		str += "<br><div id='testExam'></div></form>";
		str += '</td></tr></table></div>';
	}




	return str;
}

function addowExamMarks() {
	var newstr = "";
	newstr += "<div class='section1' id='marks'  style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Add Results</legend>";
	str += "<div id='addSubjeckMarks'></div>";
	str += '<input type="button" id="addbtn1" class="btn" value="Add Marks" onclick="addMarks();">';

	str += "</fieldset></div>";


	newstr += "<div id='" + addingRow + "'>";
	newstr += "<div style='margin-top:20px;float:left;clear:both;'>";
	newstr += "<div class='longIdentifier' style='clear:none;'>Subject</div><div class='colon'>&nbsp;:&nbsp;</div> ";
	newstr += "<input type='text'  name='subjectName'  id='subject" + addingRow + "' value= '" + dataRep["subjectName"] + "'  onchange='dataRep[this.name]=this.value;' >";
	newstr += "<div style='margin-top:20px; float:left;clear:both;'>";
	newstr += "<div class='longIdentifier' style='clear:none;'>Marks</div><div class='colon'>&nbsp;:&nbsp;</div> ";
	newstr += "<input type='text'  name='marks'  id='marks" + addingRow + "' value= '" + dataRep["marks"] + "'  onchange='dataRep[this.name]=this.value;' ></div></br>";
	//newstr += "<div><input type='button' style='margin-top:0px' class='btn' value='Add Row' onclick=addowExamMarks();></br></div>";
	addingRow++;




	//document.getElementById('addbtn1').style.display='none';
	//document.getElementById('addbtn2').style.display='block';
	document.getElementById("testExam").innerHTML += newstr;


	// newstr+= "<div><input type='button' style='margin-top:0px' class='btn' value='Save' onclick=formExamResultssendForm('addExamResults');>";
	// str += "</div>";



}



function formExamResultssendForm(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	if (frm == 'addExamResults') {


		doc = document.maintainExamResults;
		dataStr += "&interface=" + frm;
		//dataStr += "&universityCode="+dataRep["universityCode"]+"&facultyCode="+dataRep["facultyCode"]+"&degreeCode="+dataRep["degreeCode"]+"&studentNIC="+dataRep["studentNIC"]+"&studentNo="+dataRep["studentNo"];

		//	dataStr += "&universityCode="+dataRep["universityCode"]+"&facultyCode="+dataRep["facultyCode"]+"&programmeTypeCode="+dataRep["programmeTypeCode"]+"&degreeCode="+dataRep["degreeCode"]+"&studentNIC="+dataRep["studentNIC"]+"&studentNo="+dataRep["studentNo"];

		dataStr += "&SudentNo=" + dataRep["studentNo"];
		dataStr += "&StudentName=" + dataRep["studentName"];
		dataStr += "&degreeCode=" + dataRep["degreeCode"];


		//arrcount=testcount;
		//arrcount1=testcount1;
		//dataStr += "&subjectName="+doc.subjectName.value;
		//dataStr += "&Marks="+doc.marks.value;
		second = 0;
		testcount = 0;
		var newstr = dataStr;
		//alert(newstr);
		for (var x = 0; x <= addingRow; x++) {
			//alert("1");
			checkElement = "subject" + x;
			//alert(checkElement);
			if (document.getElementById(checkElement)) {

				if (x > 2 && document.getElementById(checkElement).value != "" && document.getElementById(checkElement).value != " ") {
					newstr += "&subjectName=" + document.getElementById(checkElement).value;

					checkElement = 'marks' + x;
					if (document.getElementById(checkElement)) {
						newstr += "&Marks=" + document.getElementById(checkElement).value;

						addResultsValueArr[testcount] = newstr;
						testcount++;
						alert("3");
					}
				}
				if (x <= 2 && document.getElementById(checkElement).value != "" && document.getElementById(checkElement).value != " ") {
					//alert("in");
					newstr += "&subjectName=" + document.getElementById(checkElement).value;;
					//document.getElementById('professionalQualification'+x).value;

					checkElement = 'marks' + x;
					if (document.getElementById(checkElement)) {
						//	alert("in2");
						newstr += "&Marks=" + document.getElementById(checkElement).value;
						//alert("2"+newstr);
						addResultsValueArr[testcount] = newstr;
						//alert("2"+addResultsValueArr[testcount]);
						testcount++;
					}
				}



			}
		}
		for (var x = 0; x < testcount; x++) {
			//alert (addResultsValueArr["0"]);
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", addResultsValueArr[x]);
			//isrHandle.getDataFromDB(eval("clientController"), "serverController.php", addResultsValueArr["0"]);
		}
		//alert (addResultsValueArr);
		//

		return 0;

	}
}