// ── Cart Data Store ──────────────────────────────────────────────────
var paymentCart = [];

// ── addToCart ────────────────────────────────────────────────────────
function addToCart() {
	var select = document.getElementById('cartPaymentSelect');
	var selectedOption = select.options[select.selectedIndex];

	if (!selectedOption || selectedOption.value == "") {
		alert("Please select a payment type.");
		return;
	}

	var type = selectedOption.getAttribute('data-type');
	var code = selectedOption.value;
	var title = selectedOption.getAttribute('data-title');
	var amount = selectedOption.getAttribute('data-amount');
	var source = selectedOption.getAttribute('data-source');
	var currency = selectedOption.getAttribute('data-currency');

	// Check if already in cart (except exam fee)
	if (type != "examfee") {
		var alreadyAdded = paymentCart.some(function (item) { return item.code == code; });
		if (alreadyAdded) {
			alert(title + " is already added to the cart.");
			return;
		}
	}

	if (type == "examfee") {
		// Open exam paper modal
		document.getElementById('examModal').style.display = 'flex';

	} else if (type == "rescrutiny") {
		// Open rescrutiny form modal
		document.getElementById('rescrutinyModal').style.display = 'flex';
		// Store pending rescrutiny details for submitRescrutinyForm to use
		document.getElementById('rescrutinyModal').setAttribute('data-code', code);
		document.getElementById('rescrutinyModal').setAttribute('data-source', source);
		document.getElementById('rescrutinyModal').setAttribute('data-amount', amount);
		document.getElementById('rescrutinyModal').setAttribute('data-currency', currency);

	} else {
		// Normal fee — add directly to cart
		paymentCart.push({
			code: code,
			title: title,
			amount: parseFloat(amount),
			source: source,
			currency: currency,
			type: type,
			details: ""
		});
		renderCartTable();
	}
}

// ── submitRescrutinyForm ─────────────────────────────────────────────
function submitRescrutinyForm() {
	var paperCode = document.getElementById('res_paperCode').value.trim();
	var paperName = document.getElementById('res_paperName').value.trim();
	var examYear = document.getElementById('res_examYear').value.trim();
	var reason = document.getElementById('res_reason').value.trim();

	if (!paperCode || !paperName || !examYear || !reason) {
		alert("Please fill all fields in the Rescrutiny form.");
		return;
	}

	var modal = document.getElementById('rescrutinyModal');
	var code = modal.getAttribute('data-code');
	var source = modal.getAttribute('data-source');
	var amount = modal.getAttribute('data-amount');
	var currency = modal.getAttribute('data-currency');

	paymentCart.push({
		code: code,
		title: "Rescrutiny Fee",
		amount: parseFloat(amount),
		source: source,
		currency: currency,
		type: "rescrutiny",
		details: paperCode + " - " + paperName + " (" + examYear + ")",
		rescrutinyData: {
			paperCode: paperCode,
			paperName: paperName,
			examYear: examYear,
			reason: reason
		}
	});

	// Clear form and close modal
	document.getElementById('res_paperCode').value = '';
	document.getElementById('res_paperName').value = '';
	document.getElementById('res_reason').value = '';
	document.getElementById('rescrutinyModal').style.display = 'none';

	renderCartTable();
}

// ── submitExamPapers ─────────────────────────────────────────────────
function submitExamPapers() {
	var checkboxes = document.querySelectorAll('.examPaperCheckbox:checked');

	if (checkboxes.length == 0) {
		alert("Please select at least one exam paper.");
		return;
	}

	// Check if exam fee already in cart
	var alreadyAdded = paymentCart.some(function (item) { return item.type == "examfee"; });
	if (alreadyAdded) {
		alert("Exam fees are already added to the cart. Remove them first to reselect.");
		return;
	}

	var papers = [];
	var totalFee = 0;
	var paperCodes = [];

	checkboxes.forEach(function (cb) {
		var fee = parseFloat(cb.getAttribute('data-fee')) || 0;
		totalFee += fee;
		paperCodes.push(cb.getAttribute('data-code'));
		papers.push({
			studentNo: studentNoArr[0],
			academicYear: cb.getAttribute('data-academic'),
			degreeCode: cb.getAttribute('data-degree'),
			subjectCode: cb.getAttribute('data-code'),
			attempt: cb.getAttribute('data-attempt'),
			attempt_time: cb.getAttribute('data-attempttime'),
			paper_feeArr: fee,
			subjectTitle: cb.getAttribute('data-name')
		});
	});

	paymentCart.push({
		code: "EXAMFEE",
		title: "Exam Fee (" + papers.length + " papers)",
		amount: totalFee,
		source: IncomeSourceCodeArr[0],
		currency: CurrencyArr[0],
		type: "examfee",
		details: paperCodes.join(', '),
		examData: papers
	});

	// Close modal and reset
	document.getElementById('examModal').style.display = 'none';
	document.getElementById('selectAllPapers').checked = false;
	document.querySelectorAll('.examPaperCheckbox').forEach(function (cb) { cb.checked = false; });
	document.getElementById('examSelectedCount').innerText = '0';
	document.getElementById('examSubTotal').innerText = '0.00';

	renderCartTable();
}

// ── updateExamSubTotal ───────────────────────────────────────────────
function updateExamSubTotal() {
	var checkboxes = document.querySelectorAll('.examPaperCheckbox:checked');
	var total = 0;
	checkboxes.forEach(function (cb) {
		total += parseFloat(cb.getAttribute('data-fee')) || 0;
	});
	document.getElementById('examSelectedCount').innerText = checkboxes.length;
	document.getElementById('examSubTotal').innerText = total.toFixed(2);
}

// ── toggleAllPapers ──────────────────────────────────────────────────
function toggleAllPapers(checked) {
	document.querySelectorAll('.examPaperCheckbox:not([disabled])').forEach(function (cb) {
		cb.checked = checked;
	});
	updateExamSubTotal();
}

// ── renderCartTable ──────────────────────────────────────────────────
function renderCartTable() {
	var tbody = document.getElementById('cartTableBody');
	var emptyRow = document.getElementById('cartEmptyRow');

	if (paymentCart.length == 0) {
		tbody.innerHTML = '<tr id="cartEmptyRow"><td colspan="5" style="text-align:center;color:#aaa;font-style:italic;padding:14px;">No items added. Select a payment above and click Add.</td></tr>';
		document.getElementById('cartTotal').innerText = 'LKR 0.00';
		return;
	}

	var rows = '';
	var total = 0;

	paymentCart.forEach(function (item, index) {
		total += item.amount;
		rows += '<tr>';
		rows += '<td style="text-align:center;">' + (index + 1) + '</td>';
		rows += '<td style="font-weight:600;">' + item.title + '</td>';
		rows += '<td style="font-size:12px;color:#666;">' + (item.details || '-') + '</td>';
		rows += '<td style="text-align:right;font-weight:700;">' + item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
		rows += '<td style="text-align:center;"><button onclick="removeCartItem(' + index + ')" style="background:none;border:none;color:#ccc;font-size:18px;cursor:pointer;" onmouseover="this.style.color=\'#ff4747\';" onmouseout="this.style.color=\'#ccc\';">&times;</button></td>';
		rows += '</tr>';
	});

	tbody.innerHTML = rows;
	document.getElementById('cartTotal').innerText = 'LKR ' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ── removeCartItem ───────────────────────────────────────────────────
function removeCartItem(index) {
	paymentCart.splice(index, 1);
	renderCartTable();
}

// ── cartMakePayment ──────────────────────────────────────────────────
function cartMakePayment() {
	if (paymentCart.length == 0) {
		alert("Please add at least one payment to the cart.");
		return;
	}

	// Set student data into dataRep same as existing makepayment()
	dataRep["studentNo"] = studentNoArr[0];
	dataRep["studentNIC"] = studentNICArr[0];
	dataRep["studentName"] = studentNameArr[0];
	dataRep["studentPermanentAddress"] = studentPermanentAddressArr[0];
	dataRep["studentContactMobile"] = studentContactMobileArr[0];
	dataRep["IncomeSourceCode"] = IncomeSourceCodeArr[0];
	dataRep["Currency"] = CurrencyArr[0];

	// Calculate total
	var total = 0;
	paymentCart.forEach(function (item) { total += item.amount; });

	// Set invoice category code 999
	dataRep["IncomeCategoryCode"] = "999";
	dataRep["IncomeCategoryTitle"] = "Invoice Payment";
	dataRep["IncomeCategoryValue"] = total;

	// Build summary HTML for Swal
	var summaryRows = '';
	paymentCart.forEach(function (item) {
		summaryRows += '<tr>'
			+ '<td style="text-align:left;padding:4px 8px;">' + item.title + '</td>'
			+ '<td style="text-align:left;padding:4px 8px;font-size:11px;color:#888;">' + (item.details || '-') + '</td>'
			+ '<td style="text-align:right;padding:4px 8px;font-weight:700;">LKR ' + item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>'
			+ '</tr>';
	});

	var str = '<div style="text-align:left;">';
	str += '<table style="width:100%;border-collapse:collapse;margin-bottom:10px;">';
	str += '<thead><tr style="background:#1a1a2e;color:#fff;">'
		+ '<th style="padding:6px 8px;">Payment</th>'
		+ '<th style="padding:6px 8px;">Details</th>'
		+ '<th style="padding:6px 8px;text-align:right;">Amount</th>'
		+ '</tr></thead>';
	str += '<tbody>' + summaryRows + '</tbody>';
	str += '<tfoot><tr><td colspan="2" style="text-align:right;padding:8px;font-weight:700;border-top:2px solid #1a1a2e;">Total</td>'
		+ '<td style="text-align:right;padding:8px;font-weight:800;color:#ff4747;border-top:2px solid #1a1a2e;">LKR ' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td></tr></tfoot>';
	str += '</table>';
	str += '<div style="font-size:11px;color:#cc2222;">* Amex credit card payments are not allowed<br>* 1% transaction convenience fee applies for card payments</div>';
	str += '</div>';

	// Show Swal same as existing system
	Swal.fire({
		title: 'Payment Details',
		allowOutsideClick: false,
		allowEscapeKey: false,
		html: str,
		focusConfirm: false,
		showCancelButton: true,
		showDenyButton: true,
		showConfirmButton: true,
		cancelButtonText: 'Cancel',
		confirmButtonText: 'Direct Bank Deposit',
		denyButtonText: 'Card Payment',
		customClass: {
			confirmButton: 'btn btn-primary swal-mobile-btn',
			denyButton: 'btn btn-info swal-mobile-btn',
			cancelButton: 'btn btn-secondary swal-mobile-btn',
			actions: 'd-flex justify-content-between'
		},
		buttonsStyling: false,
	}).then(async function (result) {

		if (!result.isConfirmed && !result.isDenied) return;

		var method = result.isConfirmed ? "Bank" : "Card";

		// ⚠ YOU NEED TO UPDATE: generate invoice ref using category 999
		// Use existing getCreateVoucherData() but override CategoryCode to 999
		dataRep["IncomeCategoryCode"] = "999";
		var invoiceVoucherData = getCreateVoucherData(method);
		var invoiceRef = invoiceVoucherData.Pay_RefNo;

		// Save each cart item individually to StudentPayment
		// then call payment subsystem once with invoice ref + total
		var savePromises = paymentCart.map(function (item) {
			if (item.type == "examfee") {
				// Use existing exam save — addMakeStudentPaymentExam
				var examVoucherData = {
					action: "addMakeStudentPaymentExam",
					Pay_RefNo: invoiceRef,       // ⚠ invoice ref for all
					Pay_studentNo: studentNoArr[0],
					Pay_sourceCode: item.source || IncomeSourceCodeArr[0],
					Pay_CategoryCode: "200",     // existing exam category code
					Pay_amount: item.amount,
					Pay_Method: method,
					authcode: authcode,
					username: dataRep['userId'],
					examAppliedSub: JSON.stringify(item.examData)
				};
				return $.ajax({ type: 'POST', url: 'students.php', data: examVoucherData, dataType: 'json' });

			} else {
				// Normal fee / Rescrutiny — use addMakeStudentPayment
				var normalVoucherData = {
					action: "addMakeStudentPayment",
					Pay_RefNo: invoiceRef,       // ⚠ invoice ref for all
					Pay_studentNo: studentNoArr[0],
					Pay_sourceCode: item.source,
					Pay_CategoryCode: item.code,
					Pay_amount: item.amount,
					Pay_Method: method,
					authcode: authcode,
					username: dataRep['userId'],
				};
				return $.ajax({ type: 'POST', url: 'students.php', data: normalVoucherData, dataType: 'json' });
			}
		});

		// Wait for all saves then call payment subsystem
		Promise.all(savePromises).then(function (responses) {
			var allOk = responses.every(function (r) { return r.status === 200 || r.status === 201; });

			if (allOk) {
				// Build dataForPrint with invoice ref and total
				var dataForPrint = {
					IncomeSourceCode: dataRep["IncomeSourceCode"],
					IncomeCategoryCode: "999",
					IncomeCategoryTitle: "Invoice Payment",
					academicYear: dataRep["academicYear"],
					studentNIC: dataRep["studentNIC"],
					studentName: dataRep["studentName"],
					studentPermanentAddress: dataRep["studentPermanentAddress"],
					studentContactMobile: dataRep["studentContactMobile"],
					studentNo: dataRep["studentNo"],
					Currency: dataRep["Currency"],
					IncomeCategoryValue: total,
					Pay_RefNo: invoiceRef,
					flag_pay: method == "Bank" ? "1" : "0"
				};

				if (result.isConfirmed) {
					// Bank — print voucher same as before
					callPaymentSubsystem(dataForPrint);
				} else {
					// Card — redirect to gateway same as before
					onChange(dataForPrint);
				}

				// Clear cart after successful payment initiation
				paymentCart = [];
				renderCartTable();

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Payment Save Failed',
					html: 'System error. Please try again.',
					confirmButtonText: 'OK',
					allowOutsideClick: false
				});
			}
		});
	});
}