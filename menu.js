function menuMain(dsp) {

	str = "";




	let roleName = dataRep['roleName'];
	let rol1 = "Coordinator";
	let rol2 = "Subject Clerk";
	let rol4 = "Head of the Department";
	let rol5 = "Administrator";
	let rol6 = "Student";
	let rol7 = "-----------";
	let rol8 = "ICT Center";
	let rol9 = "Examination Department";
	let rol10 = "FGS Deputy Registrar";
	let rol11 = "Faculty Staff";
	let rol12 = "Examination Staff";
	let rol13 = "Senior Assistant Librarian";
	let rol14 = "SAR-GWAI";
	let rol15 = "Bursar";
	let rol16 = "Technical Officer";
	let rol17 = "Assistant Bursar";
	let rol18 = "Book keeper";
	let rol19 = "Office Staff";
	let rol20 = "Guest";
	let rol21 = "Dean";
	let rol22 = "Program Assistant/Clerk";
	let rol23 = "Technical Coordinator";
	let rol24 = "Senior Assistant Registrar";
	let rol26 = "Assistant Registrar";
	let rol25 = "Assistant Manager - Finance";
	let rol27 = "Book Keeper - FGS Finanace";


	// console.log(rol25);
	// console.log(roleName);

	str = '<div class="sidebar-dark">';
	str += '<nav class="sidebar-dark sidebar sidebar-offcanvas" id="sidebar"><ul class="nav">';

	// if (
	// 	dsp == "formAdministratorMenu" || dsp == "formCoordinatorMenu" || dsp == "formProgramClerkMenu" ||
	// 	dsp == "formClerkMenu" || dsp == "formDeanMenu" || dsp == "formHeadMenu" ||
	// 	dsp == "formAssistantRegistrarMenu" || dsp == "formICTMenu" || dsp == "formExamMenu" ||
	// 	dsp == "formAssistantBursarMenu" || dsp == "formLibraryMenu" || dsp == "formClerkMenu" ||
	// 	dsp == "formGWAIClerkMenu" || dataRep["roleName"] == "Program Assistant/Clerk") {


	str += '<li class="nav-item">';
	str += '<a class="nav-link" onclick ="showMenu(' + "'formCoordinatorMenu'" + ');">';
	str += '<i class="fa fa-dashboard"></i>';
	str += '<span class="menu-title">Dashboard</span></a></li>';


	//Administrator

	if (roleName == rol5 || roleName == rol10 || roleName == rol21) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#report" aria-expanded="false" aria-controls="report">';
		str += '<i class="fa fa-cog"></i>';

		str += '<span class="menu-title"> Administrator Managment</span>';
		str += '<i class="menu-arrow"></i>';

		str += '</a>';
		str += '<div class="collapse" id="report">';
		str += '<ul class="nav flex-column sub-menu">';
		let tabs = "";
		let link = "";


		tabs += '<li class="nav-item"> <a class="nav-link" onclick ="Uploadstatement2();">Upload Bank Statement New</a></li>';

		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewUsers'" + ');setFacultysForUsers();setRoles();setUserCreate();">Users</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewDepartment'" + ');setFacultys();setDepartment();">Department</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewProgrameType'" + ');setProgrameType();">Program Type</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewDegreeProgramme'" + ');setFacultys();setProgrameTypeforCombo();getcriteriaCheckbox();setDegreeForNew();">Degree Programme</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewBatch'" + ');getallinstallment();setDegrees();setBatch();">Batch</a></li>';
		// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');">Users</a></li>';
		// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');">Roles</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewSubject'" + ');setDegrees();getSubejcts();setBatchsForSubject();">Subjects for Batch</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewTimeTable'" + ');setDegrees();getSubejcts();setTableForTimeTable(1);">Timetable</a></li>';
		// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');setDegrees();">Income Category</a></li>';
		// if (roleName == rol5) {
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formEmailLog'" + ');setEmailLog();">Email Log</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formSMSLog'" + ');setSMSLog();">SMS Log</a></li>';
		// }

		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewUsers'" + ');setFacultysForUsers();setRoles();setUserCreate();">Users</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewDepartment'" + ');setFacultys();setDepartment();">Department</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewProgrameType'" + ');setProgrameType();">Program Type</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewDegreeProgramme'" + ');setFacultys();setProgrameTypeforCombo();getcriteriaCheckbox();setDegreeForNew();">Degree Programme</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewBatch'" + ');getallinstallment();setDegrees();setBatch();">Batch</a></li>';
		// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');">Users</a></li>';
		// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');">Roles</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewSubject'" + ');setDegrees();getSubejcts();setBatchsForSubject();">Subjects for Batch</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewTimeTable'" + ');setDegrees();getSubejcts();setTableForTimeTable(1);">Timetable</a></li>';
		// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');setDegrees();">Income Category</a></li>';
		// if (roleName == rol5) {
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formEmailLog'" + ');setEmailLog();">Email Log</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formSMSLog'" + ');setSMSLog();">SMS Log</a></li>';
		// }


		str += tabs;



		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//modal administrator
		str += '<div class="modal fade" id="administratorModel" tabindex="-1" role="dialog" aria-labelledby="administratorModel" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel"> Administrator Managment</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';

	}

	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol14 || roleName == rol21) {
		//Applicants
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#applicants" aria-expanded="false" aria-controls="applicants">';
		// str += '<i class="typcn typcn-document-text menu-icon"></i>';
		str += '<i class="fa fa-user-plus"></i>';
		str += '<span class="menu-title">Applicants</span>';
		str += '<i class="menu-arrow"></i>';

		str += '</a>';
		str += '<div class="collapse" id="applicants">';
		str += '<ul class="nav flex-column sub-menu">';
		let tabs = "";
		let link = "";
		// if (roleName == rol10 || roleName == rol21) {
		// 	tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();OpenLink();">Add New Application</a></li>';
		// 	link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');OpenLink();">Add New Application</a></li>';
		// }

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4LoadApplicantList'" + ');">List of Applicants </a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4LoadApplicantList'" + ');">List of Applicants </a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4LoadPendingApplicantList'" + ');">Pending Application </a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4LoadPendingApplicantList'" + ');">Pending Application </a></li>';
		}

		if (roleName == rol2 || roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol10 || roleName == rol5 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol14 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4ReprintCheckUser'" + ');">Print Application</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4ReprintCheckUser'" + ');">Print Application</a></li>';

		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol24 || roleName == rol26 || roleName == rol4 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4LoadInterviewScreenList'" + ');">Interview Screening List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4LoadInterviewScreenList'" + ');">Interview Screening List</a></li>';
		}



		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol5 || roleName == rol10 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'appointPanelForm'" + ');setDegrees();DataTableInterViewAppointForm();">Schedule Interviews</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'appointPanelForm'" + ');setDegrees();DataTableInterViewAppointForm();">Schedule Interviews</a></li>';
		}

		if (roleName == rol1 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol22 || roleName == rol5 || roleName == rol10 || roleName == rol21 || roleName == rol23) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formInterViewPanelList'" + ');setDegrees();DataTableForInterViewPanelList();">View Interviews Lists</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'formInterViewPanelList'" + ');setDegrees();DataTableForInterViewPanelList();">View Interviews Lists</a></li>';
		}

		if (roleName == rol1 || roleName == rol22 || roleName == rol5 || roleName == rol10 || roleName == rol21 || roleName == rol23) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formInterViewPanelAddDecision'" + ');setDegrees();DataTableForInterViewPanelAddDecision();">Add Interview Panel Decisions</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'formInterViewPanelAddDecision'" + ');setDegrees();DataTableForInterViewPanelAddDecision();">Add Interview Panel Decisions</a></li>';
		}


		if (roleName == rol1 || roleName == rol23 || roleName == rol22) {
			// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formInterViewPanelList'" + ');setDegrees();DataTableForInterViewPanelList();">Rejected Interview List</a></li>';
			// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'formInterViewPanelList'" + ');setDegrees();DataTableForInterViewPanelList();">Rejected Interview List</a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol5 || roleName == rol10 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formInterViewPanelSummery'" + ');setDegrees();DataTableForInterViewPanelListSummery();">Interviews Summary </a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'formInterViewPanelSummery'" + ');setDegrees();DataTableForInterViewPanelListSummery();">Interviews Summary </a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol5 || roleName == rol10 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formDownloadListForFBapprove'" + ');setDegrees();DataTableForDownloadListForFBapprove();">Download List for Senate approval</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');showMenu(' + "'formDownloadListForFBapprove'" + ');setDegrees();DataTableForDownloadListForFBapprove();">Download List for Senate approval</a></li>';
		}









		if (roleName == rol2 || roleName == rol10 || roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4LoadApplicantSelection'" + ');">Applicants Selection</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4LoadApplicantSelection'" + ');">Applicants Selection</a></li>';
		}
		// <input type = "button" class ="btnD" value="Applicants Selection" onclick="removeMainData();sendForm(' + "'data4ApplicantSelection'" + ');sendForm(' + "'data4checkdepartmentSelection'" + ');sendForm(' + "'data4checkUserSelection'" + ');">

		if (roleName == rol1 || roleName == rol23
			|| roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5
			|| roleName == rol7 || roleName == rol4 || roleName == rol14 || roleName == rol21 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link"  onclick="removeMainData();sendForm(' + "'data4LoadListofSelectedApplicant'" + ');">FB/FGS Approved Selected List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link	"  onclick="removeMainData();sendForm(' + "'data4LoadListofSelectedApplicant'" + ');">FB/FGS Approved Selected List</a></li>';
		}

		if (roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link"  onclick="removeMainData();sendForm(' + "'data4returnEditApplicant'" + ');sendForm(' + "'data4ApplicantDetailsEdit'" + ');">Edit Applicant</a></li>';
			tabs += '<li class="nav-item"> <a class="nav-link"  onclick="removeMainData();sendForm(' + "'data4UpdateInfo'" + ');">Applicant Transfer</a></li>';

			link += '<li class="nav-pointer"> <a class="nav-link"  onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4returnEditApplicant'" + ');sendForm(' + "'data4ApplicantDetailsEdit'" + ');">Edit Applicant</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link"  onclick="removeMainData();removeMode(' + "'applicantModel'" + ');sendForm(' + "'data4UpdateInfo'" + ');">Applicant Transfer</a></li>';

		}
		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//modal applicant
		str += '<div class="modal fade" id="applicantModel" tabindex="-1" role="dialog" aria-labelledby="applicantModel" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Applicants</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}

	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10
		|| roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol13 || roleName == rol8
		|| roleName == rol14 || roleName == rol21 || roleName == rol9 || roleName == rol24 || roleName == rol26) {
		//Students
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#students" aria-expanded="false" aria-controls="students">';
		// str += '<i class="icon fas fa-graduation-cap"></i>';
		str += '<i class="fa fa-graduation-cap"></i>';


		str += '<span class="menu-title">Students</span>';
		str += '<i class="menu-arrow"></i>';

		str += '</a>';
		str += '<div class="collapse" id="students">';
		str += '<ul class="nav flex-column sub-menu">';

		let tabs = "";
		let link = "";
		// if (roleName == rol2 || roleName == rol10) {
		// 	tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();sendForm(' + "'data4returnStudent'" + ');sendForm(' + "'data4checkUserRegisterStudent'" + ');sendForm(' + "'data4checkdepartmentRegisterStudent'" + ');sendForm(' + "'data4getLibCode'" + ');">Students For Registration</a></li>';
		// 	link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();sendForm(' + "'data4returnStudent'" + ');sendForm(' + "'data4checkUserRegisterStudent'" + ');sendForm(' + "'data4checkdepartmentRegisterStudent'" + ');sendForm(' + "'data4getLibCode'" + ');">Students For Registration</a></li>';
		// }

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol5 || roleName == rol7 || roleName == rol24 || roleName == rol26 || roleName == rol4 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();showMenu(' + "'formPreRegStudent'" + ');setDegrees();">Pre-Registered Student(s) List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();showMenu(' + "'formPreRegStudent'" + ');setDegrees();">Pre-Registered Students</a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 ||
			roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol4 ||
			roleName == rol13 || roleName == rol8 || roleName == rol14 || roleName == rol21 ||
			roleName == rol9 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();showMenu(' + "'formPrintStudentID'" + ');setDegrees();"> View Registered Students</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();showMenu(' + "'formPrintStudentID'" + ');setDegrees();"> View Registered Students</a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol5 || roleName == rol7 || roleName == rol24 || roleName == rol26 || roleName == rol4 || roleName == rol14 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4LoadStudentQulificationList'" + ');">Students Qulification List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');sendForm(' + "'data4LoadStudentQulificationList'" + ');">Students Qulification List</a></li>';
		}

		if (roleName == rol5 || roleName == rol10 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();showMenu(' + "'formEnrollStudent'" + ');setDegrees();"> Enroll Students</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();showMenu(' + "'formEnrollStudent'" + ');setDegrees();"> Enroll Students</a></li>';
		} else if (roleName == rol1 || roleName == rol23) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();showMenu(' + "'formEnrollStudent'" + ');setDegrees();"> Enroll Students For Thesis</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();showMenu(' + "'formEnrollStudent'" + ');setDegrees();"> Enroll Students For Thesis</a></li>';

		}


		if (roleName == rol2 || roleName == rol10 || roleName == rol5) {
			// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearStudent();sendForm(' + "'data4BulkTransferTransferprogramme'" + ');sendForm(' + "'data4StudentProfileBulkTransterStudent'" + ');sendForm(' + "'data4BulkTransterStudent'" + ');">Bulk Transfer</a></li>';
			// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');clearStudent();sendForm(' + "'data4BulkTransferTransferprogramme'" + ');sendForm(' + "'data4StudentProfileBulkTransterStudent'" + ');sendForm(' + "'data4BulkTransterStudent'" + ');">Bulk Transfer</a></li>';
		}

		if (roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4returnEditStudentForm'" + ');">Edit Student</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');sendForm(' + "'data4returnEditStudentForm'" + ');">Edit Student</a></li>';
		}
		// if (roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName ==rol21) {
		// 	str += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4PrintStudentIDCard'" + ');sendForm(' + "'data4checkUserPrintIDList'" + ');sendForm(' + "'data4checkdepartmentPrintIDList'" + ');">Print StudentID</a></li>';
		// }
		if (roleName == rol5 || roleName == rol2 || roleName == rol10 || roleName == rol21) {
			// if (roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewTemplates'" + ');setDegrees();setTemplates();setSummonNote();">Create Templates</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formAddViewTemplates'" + ');setDegrees();setTemplates();setSummonNote();">Create Templates</a></li>';

		}
		if (roleName == rol5 || roleName == rol2 || roleName == rol10 || roleName == rol21) {
			// if (roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formLetterTemplate'" + ');setDegrees();getAllTemplate(); ">Print Letter</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');showMenu(' + "'formLetterTemplate'" + ');setDegrees();getAllTemplate();">Print Letter</a></li>';
		}
		if (roleName == rol2 || roleName == rol10) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();uploadImage();">Upload Photo & Signature</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');uploadImage();">Upload Photo & Signature</a></li>';
		}
		if (roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4getDegrees'" + ');setDegrees();">List for Wifi Creation</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'studentModal'" + ');sendForm(' + "'data4getDegrees'" + ');setDegrees();">List for Wifi Creation</a></li>';
		}


		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 ||
			roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol14 || roleName == rol9 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick ="sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');setDegrees();">Student Payments</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick ="removeMode(' + "'studentModal'" + ');sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');setDegrees();">Student Payments</a></li>';
		}

		if (roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick ="sendForm(' + "'data4UpdateInfoStudentTransfer'" + ');">Student Transfer</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick ="removeMode(' + "'studentModal'" + ');sendForm(' + "'data4UpdateInfoStudentTransfer'" + ');">Student Transfer</a></li>';
		}
		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//modal student
		str += '<div class="modal fade" id="studentModal" tabindex="-1" role="dialog" aria-labelledby="studentModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Students</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}

	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7
		|| roleName == rol4 || roleName == rol8 || roleName == rol14
		|| roleName == rol21 || roleName == rol17 || roleName == rol25 || roleName == rol24 || roleName == rol26 || roleName == rol27) {
		//Students
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#payment" aria-expanded="false" aria-controls="payment">';
		// str += '<i class="icon fas fa-graduation-cap"></i>';
		str += '<i class="fa fa-usd"></i>';


		str += '<span class="menu-title">Payments</span>';
		str += '<i class="menu-arrow"></i>';

		str += '</a>';
		str += '<div class="collapse" id="payment">';
		str += '<ul class="nav flex-column sub-menu">';

		let tabs = "";
		let link = "";

		if (roleName == rol5 || roleName == rol17 || roleName == rol25 || roleName == rol27) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick ="Uploadstatement2();">Upload Bank Statement</a></li>';
			// tabs += '<li class="nav-item"> <a class="nav-link" onclick ="Uploadstatement2();">Upload Bank Statement New</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick ="removeMode(' + "'paymentModal'" + ');Uploadstatement2();">Upload Bank Statement</a></li>';
		}

		if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol27 ||
			roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol14 || roleName == rol17 || roleName == rol25 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick ="sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');setDegrees();">Student Payments</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick ="removeMode(' + "'paymentModal'" + ');sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');setDegrees();">Student Payments</a></li>';
		}
		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//modal student
		str += '<div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Payments</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}

	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol21 || roleName == rol4) {
		//Exams
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#exams" aria-expanded="false" aria-controls="exams">';
		// str += '<i class="fa fa-list-alt"></i>';
		str += '<i class="fa fa fa-pencil"></i>';

		str += '<span class="menu-title">Exams</span>';
		str += '<i class="menu-arrow"></i>';
		str += '</a>';
		str += '<div class="collapse" id="exams">';
		str += '<ul class="nav flex-column sub-menu">';

		let tabs = "";
		let link = "";
		if (roleName == rol10 || roleName == rol21 || roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'studentViolaionForm'" + ');setDegrees();DataTableExamViolationForm();">Temporary suspension of results</a></li>';
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'studentViolaion'" + ');">Suspension of Results</a></li>';

			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');showMenu(' + "'studentViolaionForm'" + ');setDegrees();DataTableExamViolationForm();">Temporary suspension of results</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');showMenu(' + "'studentViolaion'" + ');">Suspension of Results</a></li>';
		}




		if (roleName == rol10 || roleName == rol21) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearApplicationData();sendForm(' + "'data4addApplicationForm'" + ');sendForm(' + "'data4checkUserExamApplication'" + ');sendForm(' + "'data4checkdepartmentExamApplication'" + ');initializedGetSubjectForApplyExamDataTable();">Exam Application Form</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');clearApplicationData();sendForm(' + "'data4addApplicationForm'" + ');sendForm(' + "'data4checkUserExamApplication'" + ');sendForm(' + "'data4checkdepartmentExamApplication'" + ');initializedGetSubjectForApplyExamDataTable();">Exam Application Form</a></li>';
		}

		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkdepartmentExamAppliedList'" + ');">Exam Applied List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkdepartmentExamAppliedList'" + ');">Exam Applied List</a></li>';
		}

		if (roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();clearApplicationData();sendForm(' + "'data4addApplicationForm'" + ');sendForm(' + "'data4checkUserExamApplication'" + ');sendForm(' + "'data4checkdepartmentExamApplication'" + ');initializedGetSubjectForApplyExamDataTable();">Exam application Delete</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');clearApplicationData();sendForm(' + "'data4addApplicationForm'" + ');sendForm(' + "'data4checkUserExamApplication'" + ');sendForm(' + "'data4checkdepartmentExamApplication'" + ');initializedGetSubjectForApplyExamDataTable();">Exam application Delete</a></li>';
		}

		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol4 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formPrintAdmission'" + ');setDegrees();getSubejcts();setTableForTimeTable(2);">Print Admission Card</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');showMenu(' + "'formPrintAdmission'" + ');setDegrees();getSubejcts();setTableForTimeTable(2);">Print Admission Card</a></li>';
			// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4getDepartmentAdmissionForm'" + ');">Print Admission Form 2</a></li>';
			// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4getDepartmentAdmissionForm'" + ');">Print Admission Form</a></li>';
		}

		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol22 || roleName == rol4 || roleName == rol24 || roleName == rol26) {

			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4getPaperCountForm'" + ');">Paper Count</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4getPaperCountForm'" + ');">Paper Count</a></li>';

		}
		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol22 || roleName == rol4 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkdepartmentExamAppliedListForStiker'" + ');">Attendance sheet/Table stickers and etc. </a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkdepartmentExamAppliedListForStiker'" + ');">Attendance sheet/Table stickers</a></li>';
		}



		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5 || roleName == rol7 || roleName == rol22 || roleName == rol4 || roleName == rol24 || roleName == rol26) {

			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkdepartmentExamAppliedListForRawMarkSheet'" + ');">Raw Mark Sheets</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkdepartmentExamAppliedListForRawMarkSheet'" + ');">Raw Mark Sheets</a></li>';


		}



		// if (roleName == rol1 || roleName == rol10 || roleName == rol5) {

		// 	tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Upload(New)</a></li>';
		// 	link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Upload(New)</a></li>';
		// }

		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//exam student
		str += '<div class="modal fade" id="examModal" tabindex="-1" role="dialog" aria-labelledby="examModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Exam</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';

	}

	//Exams Results
	if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol5 || roleName == rol10 || roleName == rol9 || roleName == rol22) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#examsResult" aria-expanded="false" aria-controls="examsResult">';
		str += '<i class="fa fa-cloud-upload"></i>';
		str += '<span class="menu-title">Exam Results</span>';
		str += '<i class="menu-arrow"></i>';
		str += '</a>';
		str += '<div class="collapse" id="examsResult">';
		str += '<ul class="nav flex-column sub-menu">';
		let tabs = "";
		let link = "";

		if (roleName == rol10 || roleName == rol21 || roleName == rol5 || roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol4 || roleName == rol24 || roleName == rol26) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'medicalstudentlist'" + ');">Medical/Other Approved Reason Student List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');showMenu(' + "'medicalstudentlist'" + ');">Medical/Other Approved Reason Student List </a></li>';

		}

		if (roleName == rol1 || roleName == rol4 || roleName == rol23 || roleName == rol10 || roleName == rol5 || roleName == rol9 || roleName == rol4 || roleName == rol24 || roleName == rol26) {
			if (roleName == rol9 || roleName == rol24 || roleName == rol26) {
				tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Download</a></li>';
				link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Download</a></li>';


			} else if (roleName == rol10 || roleName == rol5) {
				tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Release Exam Results</a></li>';
				link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Release Exam Results</a></li>';

			} else {
				tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Upload</a></li>';
				link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForStudentsResultUpdate'" + ');">Exam Result Upload</a></li>';
			}
		}


		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForFinalResult'" + ');">Final Result</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForFinalResult'" + ');">Final Result</a></li>';

		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//upload download exam result student
		str += '<div class="modal fade" id="upload_download_exam_resultModal" tabindex="-1" role="dialog" aria-labelledby="upload_download_exam_resultModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		// str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Upload & Download Results</h4>';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Exam Results</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}

	//Reports
	// order: [0, 'asc']
	// order: [0, 'asc']
	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol5 || roleName == rol7 || roleName == rol2 || roleName == rol10 || roleName == rol4 || roleName == rol24 || roleName == rol26 || roleName == rol13) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#report" aria-expanded="false" aria-controls="report">';
		str += '<i class="fa fa-file-text"></i>';

		str += '<span class="menu-title">Reports</span>';
		str += '<i class="menu-arrow"></i>';
		str += '</a>';
		str += '<div class="collapse" id="report">';
		str += '<ul class="nav flex-column sub-menu">';
		let tabs = "";
		let link = "";

		if (roleName == rol5) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportHoldAndNotReleased'" + ');setDegrees(1);DataTableSetreportHoldAndNotReleased();">Hold/Not Released Results Report</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportHoldAndNotReleased'" + ');setDegrees(1);DataTableSetreportHoldAndNotReleased();">Hold/Not Released Results Report</a></li>';

		}
		if (roleName == rol13) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'report1stinstallmentpaidReportStDetails'" + ');setDegrees(1);DataTableSet1stinstallmentpaidReportStDetails();">Paid Student Report to Arrange Library Orientation</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'report1stinstallmentpaidReportStDetails'" + ');setDegrees(1);DataTableSet1stinstallmentpaidReportStDetails();">Paid Student Report to Arrange Library Orientation</a></li>';

		} else {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');setDegrees(1);DataTableSetPayedStCountReport();">Paid Student Count</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStPayedCount'" + ');setDegrees(1);DataTableSetPayedStCountReport();">Paid Student Count</a></li>';

			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStRegisterCount'" + ');setDegrees(1);DataTableSetRegisterStCountReport();">Number of Students Registered</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStRegisterCount'" + ');setDegrees(1);DataTableSetRegisterStCountReport();">Number of Students Registered</a></li>';

			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStRegisterDateCount'" + ');setDegrees(1);DataTableSetRegisterStCountDateReport();">Number of Students Registered Date Filter</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStRegisterDateCount'" + ');setDegrees(1);DataTableSetRegisterStCountDateReport();">Number of Students Registered Date Filter</a></li>';


			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStForeignCount'" + ');setDegrees(1);DataTableSetForeignStCountReport();">Number of Foreign Students Registered</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'reportStForeignCount'" + ');setDegrees(1);DataTableSetForeignStCountReport();">Number of Foreign Students Registered</a></li>';


			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'report1stinstallmentpaidReportStDetails'" + ');setDegrees(1);DataTableSet1stinstallmentpaidReportStDetails();">1<sup>st</sup> Installment Paid Student List</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'report1stinstallmentpaidReportStDetails'" + ');setDegrees(1);DataTableSet1stinstallmentpaidReportStDetails();">1<sup>st</sup> Installment Paid Student List</a></li>';

		}

		if (roleName == rol5 || roleName == rol2 || roleName == rol21 || roleName == rol10) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formCordinatoDetailsrReport'" + ');setCordinatoDetailsrReport();">Coordinator Details Report</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formCordinatoDetailsrReport'" + ');setCordinatoDetailsrReport();">Coordinator Details Report</a></li>';
		}
		if (roleName == rol5 || roleName == rol2 || roleName == rol21 || roleName == rol10 || roleName == rol17) {
			tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formPaymentLogReport'" + ');DataTableForPaymentLogReport()">Payments Log Report</a></li>';
			link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formPaymentLogReport'" + ');DataTableForPaymentLogReport()">Payments Log Report</a></li>';
		}
		str += tabs;

		str += '</ul>';
		str += '</div>';
		str += '</li>';

		//report model
		str += '<div class="modal fade" id="reportModal" tabindex="-1" role="dialog" aria-labelledby="reportModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Reports</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}



	if (roleName == rol1 || roleName == rol23 || roleName == rol2 || roleName == rol10 || roleName == rol5 ||
		roleName == rol14 || roleName == rol25 || roleName == rol17 || roleName == rol4) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" data-toggle="collapse" href="#EmailSMsCom" aria-expanded="false" aria-controls="EmailSMsCom">';
		str += '<i class="fa fa-comment"></i>';
		str += '<span class="menu-title">SMS/Email Communication</span>';
		str += '<i class="menu-arrow"></i>';
		str += '</a>';
		str += '<div class="collapse" id="EmailSMsCom">';
		str += '<ul class="nav flex-column sub-menu">';
		let tabs = "";
		let link = "";

		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formSendSMSBulk'" + ');setDegrees();DataTableForSendSMSBulk();">SMS/Email Communication</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'smsEmailModal'" + ');showMenu(' + "'formSendSMSBulk'" + ');setDegrees();DataTableForSendSMSBulk();">SMS/Email Communication</a></li>';

		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formMyEmailLog'" + ');setMyEmailLog();">My Emails</a></li>';
		tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formMySMSLog'" + ');setMySMSLog();">My SMS</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formMyEmailLog'" + ');setMyEmailLog();">My Emails</a></li>';
		link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();showMenu(' + "'formMySMSLog'" + ');setMySMSLog();">My SMS</a></li>';
		// tabs += '<li class="nav-item"> <a class="nav-link" onclick="removeMainData();sendForm(' + "'data4checkUserExamAppliedListForFinalResult'" + ');">Final Result</a></li>';
		// link += '<li class="nav-pointer"> <a class="nav-link" onclick="removeMainData();removeMode(' + "'examModal'" + ');sendForm(' + "'data4checkUserExamAppliedListForFinalResult'" + ');">Final Result</a></li>';

		str += tabs;
		str += '</ul>';
		str += '</div>';
		str += '</li>';

		str += '<div class="modal fade" id="upload_download_exam_resultModal" tabindex="-1" role="dialog" aria-labelledby="upload_download_exam_resultModal" aria-hidden="true" data-backdrop="false">';
		str += '<div class="modal-dialog" >';
		str += '<div class="modal-content" style="border: 5px solid #000;">';
		str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
		str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">SMS/Email Communication</h4>';
		str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		str += '<span aria-hidden="true">&times;</span>';
		str += '</button>';
		str += '</div>';
		str += '<div class="modal-body">';
		str += '<ul>';
		str += link;
		str += '</ul>';
		str += '<a>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += ' </div>';
	}



	// if (roleName == rol1 || roleName == rol23 || roleName == rol2 || roleName == rol10 || roleName == rol5 ||
	// 	roleName == rol14 || roleName == rol25 || roleName == rol17 || roleName == rol4) {
	// 	str += '<li class="nav-item">';
	// 	str += '<a class="nav-link" onclick ="showMenu(' + "'formSendSMSBulk'" + ');setDegrees();DataTableForSendSMSBulk();">';
	// 	// str += '<i class="typcn typcn-device-desktop menu-icon"></i>';
	// 	str += '<i class="fa fa-comment"></i>';

	// 	str += '<span class="menu-title">SMS/Email Communication</span></a></li>';
	// }


	if (roleName == rol5) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" onclick ="openInputBulkEmailBultByDeveloper();">';
		// str += '<i class="typcn typcn-device-desktop menu-icon"></i>';
		str += '<i class="fa fa-paper-plane"></i>';

		str += '<span class="menu-title">Email Bulk With Excel Sheet</span></a></li>';
	}

	if (roleName == rol5) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" onclick ="openInputBulkEmailBultByDeveloper2();">';
		// str += '<i class="typcn typcn-device-desktop menu-icon"></i>';
		str += '<i class="fa fa-paper-plane"></i>';

		str += '<span class="menu-title">Email Bulk List</span></a></li>';
	}

	if (roleName == rol1 || roleName == rol23 || roleName == rol22 || roleName == rol2 || roleName == rol10 || roleName == rol5
		|| roleName == rol14 || roleName == rol25 || roleName == rol17 || roleName == rol4 || roleName == rol9 || roleName == rol27) {
		str += '<li class="nav-item">';
		str += '<a class="nav-link" onclick ="setSearchApplicantStudent(' + "'applicant'" + ');sendForm(' + "'data4LoadApplicantView'" + ');">';
		// str += '<i class="typcn typcn-device-desktop menu-icon"></i>';
		str += '<i class="fa fa-address-card"></i>';

		str += '<span class="menu-title">Student/Applicant Profile</span></a></li>';
	}


	let tabs = "";
	let link = "";
	let link2 = "";



	tabs += '<li class="nav-item"><a class="nav-link" onclick ="showMenu(' + "'formDownloadRequirdFile'" + ');"><i class="fa fa-download"></i><span class="menu-title">Downloads</span></a></li>';
	tabs += '<li class="nav-item"><a class="nav-link" onclick ="updateUser()"><i class="fa fa-key"></i><span class="menu-title">Account Setting</span></a></li>';
	tabs += '<li class="nav-item"><a class="nav-link" onclick ="logOut();"><i class="fa fa-sign-out"></i><span class="menu-title">Logout</span></a></li>';

	link2 += '<li class="nav-pointer"><a class="nav-link" onclick ="removeMode(' + "'downloadModal'" + ');updateUser()"><i class="fa fa-download"></i><span class="menu-title">Downloads</span></a></li>';
	link += '<li class="nav-pointer"><a class="nav-link" onclick ="removeMode(' + "'accountModal'" + ');updateUser()"><i class="fa fa-key"></i><span class="menu-title">Account Setting</span></a></li>';
	link += '<li class="nav-pointer"><a class="nav-link" onclick ="removeMode(' + "'accountModal'" + ');logOut();"><i class="fa fa-sign-out"></i><span class="menu-title">Logout</span></a></li>';
	str += tabs;


	//download model
	str += '<div class="modal fade" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModal" aria-hidden="true" data-backdrop="false">';
	str += '<div class="modal-dialog" >';
	str += '<div class="modal-content" style="border: 5px solid #000;">';
	str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
	str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Setting</h4>';
	str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
	str += '<span aria-hidden="true">&times;</span>';
	str += '</button>';
	str += '</div>';
	str += '<div class="modal-body">';
	str += '<ul>';
	str += link2;
	str += '</ul>';
	str += '<a>';
	str += '</div>';
	str += '</div>';
	str += '</div>';
	str += ' </div>';


	//users model
	str += '<div class="modal fade" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="accountModal" aria-hidden="true" data-backdrop="false">';
	str += '<div class="modal-dialog" >';
	str += '<div class="modal-content" style="border: 5px solid #000;">';
	str += '<div class="modal-header" style="border-bottom: 5px solid #000;text-align: center;background-color: #282F3A;color: #FFF;border-radius: 0;">';
	str += '<h4 class="modal-title" style="text-align: center;margin: auto;width: 100%;" id="myModalLabel">Setting</h4>';
	str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
	str += '<span aria-hidden="true">&times;</span>';
	str += '</button>';
	str += '</div>';
	str += '<div class="modal-body">';
	str += '<ul>';
	str += link;
	str += '</ul>';
	str += '<a>';
	str += '</div>';
	str += '</div>';
	str += '</div>';
	str += ' </div>';




	// }

	str += '</ul></nav</div>'



	let ve = "";
	if (dataRep['roleName'] != "") {
		ve = '<a class="navbar-brand brand-logo" onclick="showMenu(' + "'formCoordinatorMenu'" + ');"><img src="images/fgslogo-white.png" alt="logo" /></a>';
	} else {
		ve = '<a class="navbar-brand brand-logo" href=""><img src="images/fgslogo-white.png" alt="logo" /></a>';
	}
	ve += '<button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">';
	ve += '<span class="typcn typcn-th-menu"></span>';
	ve += '</button>';
	ve += '<button class="navbar-toggler navbar-toggler align-self-center d-lg-none c" type="button" data-toggle="offcanvas">';
	ve += '<span class="typcn typcn-th-menu"></span>';
	ve += '</button>';

	return str;
}

function clearStudent() {
	studentNoLength = 0;
}



function removeMode(id) {
	$('#' + id).hide();

}