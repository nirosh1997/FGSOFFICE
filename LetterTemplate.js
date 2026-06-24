var firtspageheader = 0;
var fileNumber = 0;
var change = 0;
var abc = "";
var page1 = "";
var page2 = "";
dataRep['roleName'] = dataRep['userName'] = "";



var preintLettertable;
function DataTableForPrintLetterApplicant() {

	var buttons = [];

	buttons.push({
		text: 'Print Letter',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			// getAllRegStudentList2('w');
			printLetter();
			// countSelectedCheckBoxes();getdoc()
		}
	});

	buttons.push({
		text: 'Send Email',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			getAllRegStudentList2('e');
		}
	});


	preintLettertable = $('#applicantPrintLetter').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
			className: 'selectall-checkbox',
		},
		{
			targets: 1,
			orderable: false,
			searchable: false
		},
		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [1, 'asc'],
	});


	preintLettertable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = preintLettertable.rows({ selected: true }).count();
		var countItems = preintLettertable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', preintLettertable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', preintLettertable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	preintLettertable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	preintLettertable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			console.log("L = " + viewStudentArray.length)
			preintLettertable.rows().select();
			for (i = 0; i < viewStudentArray.length; i++) {
				var checkBoxDivIdRegistered = '#checkRegistered' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
					console.log($(checkBoxDivIdRegistered));
				}
			}
		} else {
			preintLettertable.rows().deselect();
			for (i = 0; i < viewStudentArray.length; i++) {
				var checkBoxDivIdRegistered = '#checkRegistered' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});

}










function formLetterTemplate(dsp) {


	str = "";
	title = "Print Letters";

	if (dsp == "formLetterTemplate") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += "<div id='formLetterTemplate'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row""><div class="col-sm-6">';

		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Letter Template</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedTemplateid" onchange="dataRep[this.id]=this.value;letterTypeChange();">';
		str += '</select>';
		str += '</div></div></div>';

		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">List Type</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDocName" onchange="dataRep[this.id]=this.value;">';
		// str += "<option>Please scroll down to see the records</option>";
		str += "<option " + ((dataRep["selectedDocName"] == "1") ? "selected" : "") + " value='1'>Applicant List</option>";
		str += "<option " + ((dataRep["selectedDocName"] == "2") ? "selected" : "") + " value='2'>Selected List</option>";
		str += "<option " + ((dataRep["selectedDocName"] == "3") ? "selected" : "") + " value='3'>Pre-Registered List</option>";
		str += "<option " + ((dataRep["selectedDocName"] == "4") ? "selected" : "") + " value='4'>Registered List</option>";
		str += '</select>';
		str += '</div></div></div>';


		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programm</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName">';
		str += '</select>';
		str += '</div></div></div>';




		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedAcademicYear">';
		str += setAcademicYearNew();
		str += '</select>';
		str += '</div></div></div>';

		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Medium</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedmedium"  value="selectedmedium" onchange="dataRep[this.id]=this.value">';
		// str += "<option>Please scroll down to see the records</option>";
		str += "<option value='si' " + ((dataRep["selectedmedium"] == "si") ? "selected" : "") + " >Sinhala</option>";
		str += "<option value='en' " + ((dataRep["selectedmedium"] == "en") ? "selected" : "") + ">English</option>";
		str += "<option value='jp' " + ((dataRep["selectedmedium"] == "jp") ? "selected" : "") + ">Japan</option>";
		str += '</select>';
		str += '</div></div></div>';

		str += '<div class="form-group row" style="margin-bottom: 10px !important;"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r"></label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<input type="button" id="View-List"  class="btn btn-info mr-2" value="View List" onclick=ViewList1();>';

		str += '</div></div></div>';


		str += '</div>';
		str += '<div class="col-sm-6">';

		str += '<div id="templatePreview" style="border:1px solid #ccc;padding:5px"></div>';

		str += '</div>';
		str += '</div>';

		str += '</div>';
		str += '</div></div></div>';


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicantPrintLetter">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input " id="all" style="margin: 0;position: relative;"></th>';
		str += '<th id="tableFirstHeader"></th>';
		str += '<th>Name with Initals</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Email</th>';
		str += '<th>Mobile Number</th>';
		str += '<th>Fiexed Number</th>';

		str += '</tr></thead>';
		str += '<tbody id="batchTable">';
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';


	}

	return str;

}


function LetterTemplatesDiv() {

	document.getElementById('LetterTemplates').style.display = 'block';
	document.getElementById('StudentList').style.display = 'none';

}
function StudentListDiv() {

	document.getElementById('LetterTemplates').style.display = 'none';
	document.getElementById('StudentList').style.display = 'block';

}


var viewStudentArray = new Array();

function ViewList1() {
	if ($("#selectedDegreeName option:selected").val() == 0) {
		Swal.fire({
			icon: 'warning',
			title: 'Degree Required.',
			text: "Please select degree before create batch",
		});
	} else {

		if ($("#selectedDocName option:selected").val() == 1 || $("#selectedDocName option:selected").val() == 2) {
			$("#tableFirstHeader").text("Application Number");
		} else {
			$("#tableFirstHeader").text("Student Number");
		}
		let postData = {
			action: "getStudentsinBatchPrintLetter",
			degreeCode: $("#selectedDegreeName option:selected").val(),
			achedamicYear: $("#selectedAcademicYear option:selected").val(),
			medium: $("#selectedmedium option:selected").val(),
			selectedDocName: $("#selectedDocName option:selected").val(),
			authcode: authcode,
			username: dataRep['userId'],
		};
		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				if ($.fn.DataTable.isDataTable('#applicantPrintLetter')) {
					$('#applicantPrintLetter').DataTable().clear().destroy();
				}
				$('#batchTable').empty();
				viewStudentArray.length = 0;
				if (response && response.length > 0) {
					let count = 0;
					$.each(response, function (index, batches) {
						console.log(batches)
						if (batches.degreecode != undefined) {
							viewStudentArray[count] = [batches.degreecode, batches.academicYear, batches.medium];

							let department = "";
							department += "<tr id='letterList" + count + "'  name='testInfo" + count + "'>";
							department += "<td><input type='checkbox' id='checkRegistered" + count + "' onChange='AddRowColorLetterTemplate(letterList" + count + ", this)' name='checkRegistered" + count + "' ' /></td>";
							if ($("#selectedDocName option:selected").val() == 1 || $("#selectedDocName option:selected").val() == 2) {
								department += "<td >" + batches.applicationNumber + "</td>";
							} else {
								department += "<td >" + batches.studentNo + "</td>";

							}
							department += "<td >" + batches.studentName + "</td>";
							department += "<td >" + batches.nic + "</td>";
							department += "<td >" + batches.address + "</td>";
							department += "<td >" + batches.email + "</td>";
							department += "<td >" + batches.mobile + "</td>";
							department += "<td >" + batches.lan + "</td>";
							department += "</tr>";
							$('#batchTable').append(department);
							count++;
						}
					});

				}
				console.log(response)
				DataTableForPrintLetterApplicant();
			},
			error: function (error) {
				console.log(error)
			}
		});
	}

	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" ||
	// 	document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" ||
	// 	document.getElementById('selectedmedium').value == "Please scroll down to see the records") {
	// 	alert("Please Select a value from the select Box(s)");
	// }
	// else {
	// 	if (document.getElementById('selectedmedium').value == "Sinhala") {
	// 		var me = 'si';
	// 	}
	// 	if (document.getElementById('selectedmedium').value == "English") {
	// 		var me = 'en';
	// 	}
	// 	sendForm('data4LetterApplicantListPrint');
	// }
}

function AddRowColorLetterTemplate(q, _this) {
	//	 if (y.checked)
	//    x.style.backgroundColor = '#0000FF';
	// else
	//    x.style.backgroundColor = '#FF0000';
	if (change == 1) {
		change = 0;
		//alert(q.id);
		//var x="";
		//x ="inputs";
		q.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
		//alert("1");

	}
	else {
		change++;
		q.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
		//alert("0");

	}

	//alert(q);
}

function Select1AllStudent() {
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered) && document.getElementById(checkBoxDivIdRegistered) != null) {
			document.getElementById(checkBoxDivIdRegistered).checked = true;
			// document.getElementById("select-all").disabled = true;
			// document.getElementById("select-non").disabled = false;

			//for( y=0; y<applicationNoLength; y++){

			//if(studentNoArr.indexOf(studentNoArr[y]) == studentNoArr.lastIndexOf(studentNoArr[y]) || (studentNoArr.indexOf(studentNoArr[y]) != studentNoArr.lastIndexOf(studentNoArr[y]) && studentNoArr.indexOf(studentNoArr[y])==y)){

			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[y] & registeredArr[y] !="" &  document.getElementById('achedamicYear').value==achedamicYearArr[y] & degreeMediumArr1[y]==me){	
			var nameid = "letterList";
			nameid += i;
			if (change == 1) {
				change = 0;
				//alert('ok');
				document.getElementById(nameid).style.backgroundColor = '#d0d0fb';

			}
			else {
				//alert('ok else');
				change++;
				document.getElementById(nameid).style.backgroundColor = '#e7e7fd';

			}
			//alert(nam);

			//}
			//}
			//}
		}
	}
}

function UnselectAllStudent() {
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered) && document.getElementById(checkBoxDivIdRegistered) != null) {
			document.getElementById(checkBoxDivIdRegistered).checked = false;
			// document.getElementById("select-all").disabled = false;
			// document.getElementById("select-non").disabled = true;

			//for( z=0; z<applicationNoLength; z++){

			//if(studentNoArr.indexOf(studentNoArr[z]) == studentNoArr.lastIndexOf(studentNoArr[z]) || (studentNoArr.indexOf(studentNoArr[z]) != studentNoArr.lastIndexOf(studentNoArr[z]) && studentNoArr.indexOf(studentNoArr[z])==z)){

			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[z] & registeredArr[z] !="" &  document.getElementById('achedamicYear').value==achedamicYearArr[z] & degreeMediumArr1[z]==me){	
			var idname = "letterList";
			idname += i;
			if (change == 1) {
				change = 0;
				document.getElementById(idname).style.backgroundColor = '#fff';

			}
			else {
				change++;
				document.getElementById(idname).style.backgroundColor = '#fff';

			}
			//alert(nam);

			//}
			//}
			//}
		}
	}

}
function printRefDetails(type, value) {
	let gtDiv = '<div style="width:97%;float:left;text-align:left;padding-left: 15px;margin-top: 7.5rem;margin-bottom: 10px;page-break-before: always;"><h4 style="">';
	gtDiv += '<span style="float:left; color:#000000"> Our Ref. No:&nbsp;&nbsp;' + dataRep['userName'] + '&nbsp;&nbsp;</span>';
	gtDiv += '<span style="float:right; color:#000000">&nbsp;&nbsp;' + type + ':&nbsp;&nbsp;' + value + '</span></h4></div>';
	return gtDiv;
}

function SeletedListletter1Data(i, index, type, value) {
	let gtDiv = "";
	gtDiv += '<div style="margin-top: 7.5rem;"><div style="width:97%;float:left;text-align:left;padding-left: 15px;"><h4 style="">';
	gtDiv += '<span style="float:left; color:#000000"> Our Ref. No:&nbsp;&nbsp;' + dataRep['userName'] + '&nbsp;&nbsp;</span>';
	gtDiv += '<span style="float:right; color:#000000">&nbsp;&nbsp;' + type + ':&nbsp;&nbsp;' + value + '</span></h4></div>';
	var dd = new Date();
	var d = dd.getUTCDate();
	var m = dd.getUTCMonth();
	var y = dd.getUTCFullYear();
	var mn = m + 1;
	var datelbl = d + "/" + mn + "/" + y;

	var sOfficeAddress1 = studentPermanentAddressArr[i];
	var convertSOfficeAddress = sOfficeAddress1.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
	var test2 = titleCase(convertSOfficeAddress);
	test2 = removeDash(test2);
	var test1 = test2.split(",");

	var studentname = studentInitialArr[i];
	var convertstudentname = studentname.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
	gtDiv += "<div style='margin-top:0.5rem;padding-left: 15px; '>";
	gtDiv += "<label>" + studentPersonalTitleArr[i] + '. ' + convertstudentname + "</label><br>";
	var test = 1;
	for (var q = 0; q < test1.length; q++) {

		if (test1.length > 4) {
			if (test < 3) {
				gtDiv += "<label>" + test1[q] + ",</label>";
				test++;
			}
			else if (test == 3) {
				gtDiv += "<br><label>" + test1[q] + ",</label>";
				test++;
			}
			else if (test < 6) {
				gtDiv += "<label>" + test1[q] + ",</label>";
				test++;
			}
		}
		else {
			if (test < 2) {
				gtDiv += "<label>" + test1[q] + ",</label>";
				test++;
			}
			else {
				gtDiv += "<label>" + test1[q] + ",</label><br>";
			}
		}
	}
	gtDiv += "</div>";
	gtDiv += "<div style='clear:both;margin-top:10px;text-align:left;margin-left: 15px;'>" + datelbl + "</div>";
	gtDiv += "</div>";

	return gtDiv;
}

function SeletedListletter2Data(i, index, type, value) {
	let gtDiv = "";
	gtDiv += '<div style="margin-top: 7.5rem;"><div style="width:97%;float:left;text-align:left;padding-left: 15px;"><h4 style="">';
	gtDiv += '<span style="float:left; color:#000000"> Our Ref. No:&nbsp;&nbsp;' + dataRep['userName'] + '&nbsp;&nbsp;</span>';
	gtDiv += '<span style="float:right; color:#000000">&nbsp;&nbsp;' + type + ':&nbsp;&nbsp;' + value + '</span></h4></div>';
	gtDiv += "<div style='margin-top:0.5rem;padding-left: 15px; '>";
	var dd = new Date();
	var d = dd.getUTCDate();
	var m = dd.getUTCMonth();
	var y = dd.getUTCFullYear();
	var mn = m + 1;
	var datelbl = d + "/" + mn + "/" + y;

	gtDiv += studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + "<div>";
	gtDiv += document.getElementById('selectedDegreeName').value + "</div></div>";
	gtDiv += "<div style='clear:both;margin-top:10px;text-align:left;margin-left: 15px;'>" + datelbl + "</div>";
	gtDiv += "</div>";
	return gtDiv;
}

var hiddenContent;

function setDATAFILE(abc) {
	let gtDiv = "";
	// gtDiv += '<div style="page-break-after: always" id="firstSection"><p>' + abc + '</p> Nirosh</div>';
	for (let sect = 0; sect <= 5; sect++) {
		abc = abc.replace("<div class=WordSection" + sect + ">", "");
	}

	if (abc.includes("mso-special-character:line-break;")) {
		let count = 0;
		while (abc.includes("mso-special-character:line-break;")) {
			if (abc.includes("page-break-before:always")) {
				var cut = abc.indexOf("page-break-before:always");
				var page1cut = abc.indexOf("</span>", cut) + 7;
				page1 = abc.substr(0, page1cut);
				abc = abc.substr(page1cut, abc.length);
				if (count == 0) {
					gtDiv += '<div id="firstSection"><p>' + page1 + '</p> </div><p style="page-break-after: always;"></p>';
					count++;
				} else {
					gtDiv += '<div style="margin-top: 7.5rem;" id="firstSection"><p>' + page1 + '</p> </div> <p style="page-break-after: always;"></p>';
				}
			}
		}
		gtDiv += '<div style="margin-top: 7.5rem;" id="firstSection"><p>' + abc + '</p> </div>';
	} else {
		gtDiv += '<div style="margin-top: 9rem;"><p>' + abc + '</p></div>';
	}
	gtDiv += "<p id='dd' style='page-break-after: always;'></p>";
	return gtDiv;
}


// --- Header HTML ---

function printFooter() {
	let gtDiv = '<footer style="position: fixed;color: #000;text-align: center;padding: 10px 0px; bottom: 0;">';
	gtDiv += '<div style="text-align:center;"><h4 style="margin: 4px 0 5px 0; color:#000000">';
	gtDiv += '_________________________________________________________________________________________________';
	gtDiv += '</h4></div>';
	gtDiv += '<div style="width:100%text-align:center;fontSize:9px;">Tel: Dean : 011-2986124/2903950 &nbsp;&nbsp; Senior Assistant Registrar : 011-2903951/2908165 &nbsp;&nbsp; Office : 011-2903952/3</div>';
	gtDiv += '<div style="width:100%text-align:center;">Fax: 011-2908165 &nbsp;&nbsp; Web:www.fgs.kln.ac.lk &nbsp;&nbsp; Email:fgs@kln.ac.lk</div><br>';
	gtDiv += '<div style="width:100%text-align:center;"><u>www.facebook.com/Faculty-of-Graduate-studies/University-of-kelaniya</u></div></footer>';
	return gtDiv;
}


function printHeader() {
	let gtDiv = "<header style='top: 0;position: fixed;color: #000;text-align: center;padding: 10px 0px;'><div style='width:100%;'>";
	gtDiv += "<div style='float:left;width:90%;'>";
	gtDiv += '<table "width:100%;" border="0" cellpadding="0" align="center" style="margin-top:0px">';
	gtDiv += '<tr>';
	gtDiv += "<td 'width:100%'><img src='img/logo.gif' align='right' style='width:90px;height:90px;'/></td>";
	gtDiv += "<td 'width:100%'><img src='img/nm.png' style='width:472px;height:100px;'/></td>";
	gtDiv += "<td 'width:100%'><img src='img/fgs.jpg' align='right' style='width:80px;height:90px;'/></td>";
	gtDiv += '</tr>';
	gtDiv += '</table>';
	gtDiv += "</div><br><br>";
	gtDiv += '<div style="width:100%;height:0%;float:left;text-align:left"><h4 style="margin-top:4px;margin: 0px 0px 10px 0px;color:#000000">';
	gtDiv += '_________________________________________________________________________________________________';
	gtDiv += '</h4></div>';
	gtDiv += "</div></header>";
	return gtDiv;
}


// --- Paginate content based on height ---
function paginateContent(html) {
	const pageHeight = 850; // target page height
	const pageWidth = 800;

	// 🧼 CLEAN UP Word-generated HTML
	html = html
		.replace(/<!--.*?-->/gs, "") // remove comments
		.replace(/\s*mso-[^:]+:[^;"]+;?/gi, "") // remove mso-* inline styles
		.replace(/\s*class="Mso[^"]*"/gi, "") // remove Mso classes
		.replace(/<\/?o:[^>]*>/gi, ""); // remove <o:p> tags

	const container = document.createElement("div");
	Object.assign(container.style, {
		position: "absolute",
		left: "-9999px",
		top: "0",
		width: pageWidth + "px",
		visibility: "visible",
	});
	document.body.appendChild(container);

	// 🧷 Preserve all CSS (inline + <style> + <link>)
	// const styles = [
	// 	// ...Array.from(document.querySelectorAll("style")).map((el) => el.innerHTML),
	// 	...Array.from(document.querySelectorAll("link[rel='stylesheet']")).map(
	// 		(el) => el.outerHTML
	// 	),
	// ].join("\n");

	const styles ="";

	const pages = [];
	let pageDiv = document.createElement("div");
	container.appendChild(pageDiv);

	const doc = new DOMParser().parseFromString(html, "text/html");

	function measureHeight() {
		return pageDiv.offsetHeight;
	}

	function pushPage() {
		if (pageDiv.innerHTML.trim() !== "") {
			pages.push(
				styles + "\n" + "<div class='page'>" + pageDiv.innerHTML + "</div>"
			);
			pageDiv = document.createElement("div");
			container.appendChild(pageDiv);
		}
	}

	// ✳️ Recursive content adder
	function addNode(node) {
    if (!node) return;

    // TEXT NODE
    if (node.nodeType === Node.TEXT_NODE) {
        if (!node.textContent.trim()) return;
        const textNode = document.createTextNode(node.textContent);
        pageDiv.appendChild(textNode);
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        const inlineTags = ["SPAN", "B", "I", "U", "STRONG", "EM", "SUP", "SUB"];
        const isInline = inlineTags.includes(node.tagName);

        // deep clone inline, shallow clone block
        const clone = node.cloneNode(isInline);

        // copy attributes safely
        if (typeof node.getAttributeNames === "function") {
            node.getAttributeNames().forEach(attr => {
                clone.setAttribute(attr, node.getAttribute(attr));
            });
        }

        // RECURSE only for block elements
        if (!isInline) {
            for (const child of Array.from(node.childNodes)) {
                addNodeToParent(child, clone);
            }
        }

        pageDiv.appendChild(clone);
    }
}

// helper to add a child node into a specific parent clone
function addNodeToParent(node, parentClone) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
        if (!node.textContent.trim()) return;
        parentClone.appendChild(document.createTextNode(node.textContent));
        return;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
        const inlineTags = ["SPAN", "B", "I", "U", "STRONG", "EM", "SUP", "SUB"];
        const isInline = inlineTags.includes(node.tagName);

        const clone = node.cloneNode(isInline);

        if (typeof node.getAttributeNames === "function") {
            node.getAttributeNames().forEach(attr => {
                clone.setAttribute(attr, node.getAttribute(attr));
            });
        }

        if (!isInline) {
            for (const child of Array.from(node.childNodes)) {
                addNodeToParent(child, clone);
            }
        }

        parentClone.appendChild(clone);
    }
}

	// 🧾 Split long paragraphs/headings by sentence
	function splitParagraph(node) {
		const text = node.innerText.trim();
		const sentences = text.split(/(?<=\.)\s*/);
		let tempNode = document.createElement(node.tagName.toLowerCase());

		// preserve inline styles and attributes
		if (node.nodeType === 1 && typeof node.getAttributeNames === "function") {
			node.getAttributeNames().forEach((attr) => {
				clone.setAttribute(attr, node.getAttribute(attr));
			});
		}


		for (let sentence of sentences) {
			if (sentence.trim() === "") continue;
			tempNode.innerHTML += sentence + " ";
			pageDiv.appendChild(tempNode);

			if (measureHeight() > pageHeight) {
				if (pageDiv.contains(tempNode)) {
					pageDiv.removeChild(tempNode);
				}
				pushPage();
				tempNode = document.createElement(node.tagName.toLowerCase());
				if (node.nodeType === 1 && typeof node.getAttributeNames === "function") {
					node.getAttributeNames().forEach((attr) => {
						clone.setAttribute(attr, node.getAttribute(attr));
					});
				}

				tempNode.innerHTML = sentence + " ";
				pageDiv.appendChild(tempNode);
			}
		}
	}

	// 🧩 Split inline text by sentence
	function splitTextBySentence(text) {
		const parts = text.split(/(?<=\.)\s*/);
		for (let part of parts) {
			if (part.trim() === "") continue;
			const span = document.createElement("span");
			span.textContent = part;
			pageDiv.appendChild(span);
			if (measureHeight() > pageHeight) {
				if (pageDiv.contains(span)) {
					pageDiv.removeChild(span);
				}
				pushPage();
				const newSpan = document.createElement("span");
				newSpan.textContent = part;
				pageDiv.appendChild(newSpan);
			}
		}
	}

	// 🧮 Handle table pagination row by row
	function handleTable(tableNode) {
		const cloneTable = tableNode.cloneNode(false);

		// ✅ safe attribute copy
		if (tableNode.nodeType === 1 && typeof tableNode.getAttributeNames === "function") {
			tableNode.getAttributeNames().forEach((attr) => {
				cloneTable.setAttribute(attr, tableNode.getAttribute(attr));
			});
		}

		const thead = tableNode.querySelector("thead");
		const tfoot = tableNode.querySelector("tfoot");
		if (thead) cloneTable.appendChild(thead.cloneNode(true));

		const body = tableNode.querySelector("tbody") || tableNode;
		const newBody = document.createElement("tbody");
		cloneTable.appendChild(newBody);
		pageDiv.appendChild(cloneTable);

		for (let row of Array.from(body.rows)) {
			newBody.appendChild(row.cloneNode(true));

			if (measureHeight() > pageHeight) {
				// ✅ only remove if it's actually in DOM
				if (newBody.contains(row)) {
					newBody.removeChild(row);
				}

				if (tfoot) cloneTable.appendChild(tfoot.cloneNode(true));
				pushPage();

				const newTable = tableNode.cloneNode(false);
				if (thead) newTable.appendChild(thead.cloneNode(true));
				const newBody2 = document.createElement("tbody");
				newTable.appendChild(newBody2);
				pageDiv.appendChild(newTable);
				newBody2.appendChild(row.cloneNode(true));
			}
		}

		if (tfoot) cloneTable.appendChild(tfoot.cloneNode(true));
	}


	// 🚀 Process all root nodes
	for (const node of Array.from(doc.body.childNodes)) {
		addNode(node);
	}

	if (pageDiv.innerHTML.trim() !== "") {
		pages.push(styles + "\n" + "<div class='page'>" + pageDiv.innerHTML + "</div>");
	}

	document.body.removeChild(container);
	return pages;
}


function printLetter() {
	//alert(page2);
	var gtDiv = ``;
	if (document.getElementById('selectedDocName').value == "Please scroll down to see the records"
		|| $("#selectedDegreeName option:selected").val() == 0
		|| $("#selectedTemplateid option:selected").val() == 0
	) {
		alert("Please get the proper list of data before print the list");
	}
	else {
		let count = 0;
		preintLettertable.rows().every(function (i) {
			// Get the data for the current row
			var checkbox = $(this.node()).find('input[type="checkbox"]');
			var isChecked = checkbox.prop('checked');
			if (isChecked) {
				count++;
			}
		});

		if (count == 0) {
			// document.getElementById('StudentList').style.display = 'block';
			// document.getElementById('LetterTemplates').style.display = 'none';
			alert("please select at least one");
		}
		else {
			let postData = {
				action: "getDataForTemplateUpdate",
				id: $("#selectedTemplateid option:selected").val(),
				authcode: authcode,
				username: dataRep['userId'],
			};

			$.ajax({
				type: 'POST',
				url: 'rules/templates.php', // Replace with your server-side script URL
				data: postData,
				dataType: 'json',
				success: function (response) {
					var c = 0;
					gtDiv += printHeader();
					let textFile = response[0].template;
					preintLettertable.rows().every(function (i) {
						// Get the data for the current row
						var checkbox = $(this.node()).find('input[type="checkbox"]');
						var isChecked = checkbox.prop('checked');
						if (isChecked) {

							let pages = paginateContent(textFile);
							let finalHtml = '';
							pages.forEach(pageHtml => {
								finalHtml += `<div class="page" style="margin-top:140px; margin-bottom:100px;">${pageHtml}</div>`;
								finalHtml += `<p style="page-break-after: always;"></p>`;
							});
							gtDiv += finalHtml;
						}

					});

					gtDiv += printFooter();

					firtspageheader = 0;
					var reportWindow = window.open();
					reportWindow.document.write(gtDiv);
					reportWindow.print();

					reportWindow.document.close();

				},
				error: function (error) {
					console.log(error);
					Swal.fire({
						icon: 'error',
						title: 'Updated Failed',
						text: error,
					});
				}
			});


		}

	}
}
//}

function getNextContentFragment(content, maxHeight) {
	var fragment = '';
	var contentHeight = 0;

	while (contentHeight < maxHeight && content.length > 0) {
		// let i = 0;
		// while (content[i] == " " || content.length == i + 1) {
		// 	i++;
		// }


		fragment += content[0];
		content = content.substring(1);
		// Update contentHeight for the current fragment
		hiddenContent.innerHTML = fragment;
		contentHeight = hiddenContent.offsetHeight;
	}

	return fragment;
}

var type;
function getdoc() {

	//window.onload = function() {

	var fileInput = document.getElementById('fileInput').files;
	//var fileDisplayArea = document.getElementById('fileDisplayArea');
	if (!fileInput.length) {
		alert('Please select a file!');
	}
	else {//fileInput.addEventListener('change', function(e) {

		var file = fileInput[fileNumber];
		var textType = /text.*/;
		var textType1 = /application.*/;
		//var textType2 = /doc.*/;
		//var textType3 = /pdf.*/;	

		if (file.type.match(textType) || file.type.match(textType1)) { //|| file.type.match(textType2)|| file.type.match(textType3)

			var reader = new FileReader("UTF-8");
			reader.readAsText(file, "UTF-8");

			reader.onload = function (e) {
				abc = reader.result;
				if (abc != "") {
					printLetter();
				} else {
					alert("Document is Empty!")
				}
				//abc=abc;
				//alert(abc);

				//fileDisplayArea.value = reader.result;
				//document.getElementById('fileDisplayArea').value = abc;
				//var newStr = '<pre width="80px"  style="word-wrap:break-word;">';
				//newStr +="<div>"+abc+"</div>"
				//newStr += "</pre>"
				//alert(newStr);
				//document.getElementById('generateParagraph').innerHTML += newStr;

			}
			// console.log(abc)
			// //reader.getAsBinary(file) 
			// if (abc != "") {
			// 	//alert('ok2');
			// 	printLetter();
			// }else{
			// 	alert('ok2');

			// }

		} else {
			alert("File not supported!");
		}
	}
}

var letterType = "";
function displayletter01() {

	letterType = 'letter01';
	document.getElementById('letter01').style.visibility = "visible"
	document.getElementById('letter02').style.visibility = 'hidden'
}

function displayletter02() {

	letterType = 'letter02';
	document.getElementById('letter01').style.visibility = 'hidden'
	document.getElementById('letter02').style.visibility = "visible"
}

function letterTypeChange() {
	// 


	document.getElementById('templatePreview').innerHTML = "visible";
	let postData = {
		action: "getDataForTemplateUpdate",
		id: dataRep["selectedTemplateid"],
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/templates.php', // Replace with your server-side script URL
		data: postData,
		dataType: 'json',
		success: function (response) {
			document.getElementById('templatePreview').innerHTML = response[0].template;


		},
		error: function (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Updated Failed',
				text: error,
			});
		}
	});


	// if (document.getElementById('template').value == "letter01") {
	// 	letterType = 'letter01';
	// 	document.getElementById('leTemp1').style.display = "block";
	// 	document.getElementById('leTemp2').style.display = 'none';

	// } else if (document.getElementById('template').value == "letter02") {
	// 	letterType = 'letter02';
	// 	document.getElementById('leTemp2').style.display = "block";
	// 	document.getElementById('leTemp1').style.display = 'none';

	// } else {
	// 	document.getElementById('leTemp1').style.display = 'none';
	// 	document.getElementById('leTemp2').style.display = 'none';
	// }
}


function preDifineLetterType() {
	if (dataRep["template"] == "letter01") {
		letterType = 'letter01';

	} else if (dataRep["template"] == "letter02") {
		letterType = 'letter02';
	} else {
		letterType = '';
	}
}


function refresh() {
	letterType = "";
	rwcnt = 1;
	count = 0;
	abc = "";
	page1 = "";
	page2 = "";
	fileNumber = 0;
	firtspageheader = 0;

}

var count = 0;
function countSelectedCheckBoxes() {
	count = 0;
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			if (document.getElementById(checkBoxDivIdRegistered).checked == true) {
				count++;
			}
		}
	}
}


function changeButton1() {
	//alert(a);
	document.getElementById('letterTemplateBtn').style.backgroundImage = "url(img/buttonoff.png)";
	document.getElementById('studentListBtn').style.backgroundImage = "url(img/button.png)";
	document.getElementById('letterTemplateBtn').style.width = "157px";
	document.getElementById('letterTemplateBtn').style.height = "37px";
	document.getElementById('studentListBtn').style.width = "150px";
	document.getElementById('studentListBtn').style.height = "37px";
}

function changeButton2() {
	document.getElementById('letterTemplateBtn').style.backgroundImage = "url(img/button.png)";
	document.getElementById('studentListBtn').style.backgroundImage = "url(img/buttonoff.png)";
	document.getElementById('letterTemplateBtn').style.width = "157px";
	document.getElementById('letterTemplateBtn').style.height = "37px";
	document.getElementById('studentListBtn').style.width = "157px";
	document.getElementById('studentListBtn').style.height = "37px";
}

function titleCase(str2) {
	str2 = addDash(str2);
	//alert(str2);
	var test1 = str2.split(/[ ,]+/);

	for (var i = 0; i < test1.length; i++) {
		//alert(test1[i]);
		if (test1[i] == "De" || test1[i] == "Of" || test1[i] == "At" || test1[i] == "In" || test1[i] == "On" || test1[i] == "The" || test1[i] == "A" || test1[i] == "An" || test1[i] == "Behind" ||
			test1[i] == "Near" || test1[i] == "Off" || test1[i] == "2nd" || test1[i] == "1st" || test1[i] == "3rd" || test1[i] == "St") {
			test1[i] = test1[i].toLowerCase();
			// alert(test1[i]);

		}

	}
	return test1.join(' ');

}


function addDash(str2) {
	var test1 = str2.split(",");

	// // for (var i = 0; i < test1.length; i++){
	// // if(test1[i]=="de"||test1[i]=="of"||test1[i]=="at"||test1[i]=="in"||test1[i]=="on"||test1[i]=="the"||test1[i]=="a"||test1[i]=="an"||test1[i]=="behind"||
	// // test1[i]=="near"||test1[i]=="Off"||test1[i]=="2nd"||test1[i]=="1st"||test1[i]=="3rd"||test1[i]=="st"){
	// // test1[i] = test1[i].toLowerCase();     
	// // // alert(test1[i]);

	//}

	//}
	return test1.join(',@ ');

}

function removeDash(str2) {
	var test1 = str2.split("@");

	// // for (var i = 0; i < test1.length; i++){
	// // if(test1[i]=="de"||test1[i]=="of"||test1[i]=="at"||test1[i]=="in"||test1[i]=="on"||test1[i]=="the"||test1[i]=="a"||test1[i]=="an"||test1[i]=="behind"||
	// // test1[i]=="near"||test1[i]=="Off"||test1[i]=="2nd"||test1[i]=="1st"||test1[i]=="3rd"||test1[i]=="st"){
	// // test1[i] = test1[i].toLowerCase();     
	// // // alert(test1[i]);

	///}

	//}
	return test1.join(',');

}