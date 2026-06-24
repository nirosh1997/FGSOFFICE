<?php



	$fromYear = (date('Y')-5);
	echo $fromYear."<br>";
   $getSQL["data4ApplicantList"]="select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode where achedamicYear>='".$fromYear."' order by t6.degreeTitle ASC ,(t1.temporaryNo);";
   

echo  $getSQL["data4ApplicantList"];




?>