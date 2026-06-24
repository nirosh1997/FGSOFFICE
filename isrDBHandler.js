// File : isrDBHandler.js
let cst = 0;
function isrDBHandler() {

	this.dbName = "";

	isrDBHandler.prototype.updateDB = function (targetDiv, source, SQL) {
		check = "&authcode=" + authcode + "&username=" + dataRep['userId'];
		SQL = SQL + check;	
		var XMLHttpRequestObject = false;
		if (window.XMLHttpRequest) {
			XMLHttpRequestObject = new XMLHttpRequest();

		} else if (window.ActiveXObject) {
			XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
		}

		if (XMLHttpRequestObject) {
			var obj = document.getElementById(targetDiv);
			XMLHttpRequestObject.open("POST", source);
			XMLHttpRequestObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

			XMLHttpRequestObject.onreadystatechange = function () {
				if (XMLHttpRequestObject.readyState != 4 || XMLHttpRequestObject.status != 200) {
					// console.log(targetDiv);
					// console.log(source);
					// console.log(SQL);
					obj.innerHTML = XMLHttpRequestObject.responseText;
				}

				if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
					// console.log(targetDiv);
					// console.log(source);
					// console.log(SQL);
					//obj.innerHTML += XMLHttpRequestObject.responseText;
					delete XMLHttpRequestObject;
					XMLHttpRequestObject = null;
				}
			}
			XMLHttpRequestObject.send(SQL);
		}
	}


	isrDBHandler.prototype.getDataFromDBLogin = function (callBackFunction, source, SQL) {
		check = "&authcode=" + authcode + "&username=" + dataRep['userId'];
		SQL = SQL + check;		
		$('#loading-spinner').show();

		$('#loading-spinner').show(function () {

			var XMLHttpRequestObject = false;
			if (window.XMLHttpRequest) {
				XMLHttpRequestObject = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
			} else {


			}

			if (XMLHttpRequestObject) {
				// Show a loading modal using SweetAlert


				XMLHttpRequestObject.open("POST", source, false);
				XMLHttpRequestObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				XMLHttpRequestObject.onreadystatechange = function () {
					if (XMLHttpRequestObject.readyState == 4) {
						// Close the loading modal when the response is received
						$('#loading-spinner').hide();

						if (XMLHttpRequestObject.status == 200) {
							if (XMLHttpRequestObject.responseXML != null)
							// 	console.log(XMLHttpRequestObject.responseXML);
							// console.log(XMLHttpRequestObject.responseText);
								callBackFunction(XMLHttpRequestObject.responseXML);

							delete XMLHttpRequestObject;
							XMLHttpRequestObject = null;


						}
					}
				}
				XMLHttpRequestObject.send(SQL);
			}
		});
	}

	

	isrDBHandler.prototype.getDataFromDB = function (callBackFunction, source, SQL) {
		check = "&authcode=" + authcode + "&username=" + dataRep['userId'];
		SQL = SQL + check;	
		$('#loading-spinner').show(function () {
			var XMLHttpRequestObject = false;

			if (window.XMLHttpRequest) {
				XMLHttpRequestObject = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
			}

			if (XMLHttpRequestObject) {
				// Show a loading modal using SweetAlert


				XMLHttpRequestObject.open("POST", source, false);
				XMLHttpRequestObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				XMLHttpRequestObject.onreadystatechange = function () {
					if (XMLHttpRequestObject.readyState == 4) {
						// Close the loading modal when the response is received
						$('#loading-spinner').hide();

						if (XMLHttpRequestObject.status == 200) {
							console.log(XMLHttpRequestObject.responseXML);
							console.log(XMLHttpRequestObject.responseText);
							if (XMLHttpRequestObject.responseXML != null)
								callBackFunction(XMLHttpRequestObject.responseXML);

							delete XMLHttpRequestObject;
							XMLHttpRequestObject = null;
						}
					}
				}
				XMLHttpRequestObject.send(SQL);
			}
		});
		// console.log("Bye");

	}

	isrDBHandler.prototype.getDataFromDB2 = function (callBackFunction, source, SQL) {
		cst++;
		check = "&authcode=" + authcode + "&username=" + dataRep['userId'];
		SQL = SQL + check;	
		console.log(SQL);
		$('#loading-spinner').show(function () {
			var XMLHttpRequestObject = false;

			if (window.XMLHttpRequest) {
				XMLHttpRequestObject = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
			}

			if (XMLHttpRequestObject) {
				// Show a loading modal using SweetAlert


				XMLHttpRequestObject.open("POST", source, false);
				XMLHttpRequestObject.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				XMLHttpRequestObject.onreadystatechange = function () {
					if (XMLHttpRequestObject.readyState == 4) {
						// Close the loading modal when the response is received
						$('#loading-spinner').hide();

						if (XMLHttpRequestObject.status == 200) {
							// console.log(XMLHttpRequestObject.responseXML);
							// console.log(XMLHttpRequestObject.responseText);
							if (XMLHttpRequestObject.responseXML != null)
								// callBackFunction(XMLHttpRequestObject.responseXML);

							delete XMLHttpRequestObject;
							XMLHttpRequestObject = null;
						}
					}
				}
		console.log(cst+" 2 - "+SQL);

				XMLHttpRequestObject.send(SQL);
			}
		});
		// console.log("Bye");

	}

	/******For CSV upload temp    added by Chamika Mahakumbura***********************/
	isrDBHandler.prototype.uploadCSV = function (callBackFunction, source, formData) {
		XMLHttpRequestObject = new XMLHttpRequest();
		XMLHttpRequestObject.onreadystatechange = function () {
			var pro = document.getElementById("msgArea");
			pro.innerHTML = "<center><progress value='" + XMLHttpRequestObject.readyState + "' max='4'></progress></center>";
			if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
				console.log(XMLHttpRequestObject.responseText);
				console.log(XMLHttpRequestObject.responseXML);

				var XML = XMLHttpRequestObject.responseXML;
				callBackFunction(XMLHttpRequestObject.responseXML);
				delete XMLHttpRequestObject;
				XMLHttpRequestObject = null;
			}
		}
		XMLHttpRequestObject.open('POST', source, true);
		XMLHttpRequestObject.send(formData);
	}


	// isrDBHandler.prototype.getDoc = function (sendDataList, fileName) {
	// 	// Send the HTML content to the PHP script
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open('POST', 'makeDoc.php', true);
	// 	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// 	xhr.responseType = "blob"; // Set response type to Blob
	// 	xhr.onreadystatechange = function () {
	// 		if (xhr.readyState === 4 && xhr.status === 200) {				
	// 			var blob = new Blob([xhr.response], { type: 'application/octet-stream' });	
	// 			// Create a Blob URL for the response
	// 			var blobUrl = window.URL.createObjectURL(blob);	
	// 			// Create a link to trigger the download
	// 			var downloadLink = document.createElement('a');
	// 			downloadLink.href = blobUrl;
	// 			downloadLink.download = fileName;
	// 			downloadLink.style.display = 'none';
	// 			document.body.appendChild(downloadLink);	
	// 			// Trigger the download
	// 			downloadLink.click();	
	// 			// Remove the download link from the page
	// 			document.body.removeChild(downloadLink);	
	// 			// Clean up the Blob URL
	// 			window.URL.revokeObjectURL(blobUrl);
	// 		}
	// 	};

	// 	xhr.send(sendDataList);
	// };

	isrDBHandler.prototype.getDoc = function (data, fileName,orientation_type="portrait") {
		let orientation = orientation_type;
		// console.log(orientation)
		var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";

		var footer = "</body></html>";

		var html = header + data + footer;

		// Check if orientation is specified and valid (portrait or landscape)
		if (orientation && (orientation.toLowerCase() === 'portrait' || orientation.toLowerCase() === 'landscape')) {
			// Add style for page orientation
			html = html.replace('<body>', '<body style="writing-mode:' + (orientation.toLowerCase() === 'landscape' ? 'tb-rl' : 'lr-tb') + ';">');
		}

		var blob = new Blob(['\ufeff', html], {
			type: 'application/msword'
		});

		// Specify link url
		var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

		// Specify file name
		var filename = fileName ? fileName : 'document.docx';

		// Create download link element
		var downloadLink = document.createElement("a");

		document.body.appendChild(downloadLink);

		if (navigator.msSaveOrOpenBlob) {
			navigator.msSaveOrOpenBlob(blob, filename);
		} else {
			// Create a link to the file
			downloadLink.href = url;

			// Setting the file name
			downloadLink.download = filename;

			// Triggering the function
			downloadLink.click();
		}

		document.body.removeChild(downloadLink);
	}




}