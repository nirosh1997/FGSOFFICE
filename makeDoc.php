<?php
// library name: phpoffice/phpword
// prints e.g. 'Current PHP version: 4.1.1'
echo 'Current PHP version: ' . phpversion();

// prints e.g. '2.0' or nothing if the extension isn't enabled
echo phpversion('tidy');
require 'vendor/autoload.php'; // Include the PHPWord library
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

if (isset($_POST['htmlContent'])) {

    // if (isset($_POST['fileType'])) {
    //     if ($_POST['fileType'] == "w") {
            $orientation = "portrait";
            if(isset($_POST['orientation'])){
                if($_POST['orientation']=="p"){
                    $orientation = "portrait";
                }
                if($_POST['orientation']=="l"){
                    $orientation = "landscape";
                }
            }
            $phpWord = new \PhpOffice\PhpWord\PhpWord();

            $section = $phpWord->addSection();
            $section->getStyle()
                ->setPaperSize('A4')
                ->setMarginLeft(800)
                ->setMarginRight(800)
                ->setMarginTop(200)
                ->setOrientation($orientation);
            $htmlContent = $_POST['htmlContent'];
            \PhpOffice\PhpWord\Shared\Html::addHtml($section, $htmlContent);

            $footer = $section->addFooter();
            $footer->addPreserveText(
                'Page {PAGE} of {NUMPAGES}                                                       ' . date('Y-m-d'),
                null,
                array('align' => 'right')
            );

            $filename = 'word_document_' . uniqid() . '.docx';

            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $filename . '"');
            $phpWord->save('php://output');
            exit;
        // } else if ($_POST['fileType'] == "e") {
        //     // Create a new Excel spreadsheet
        //     $spreadsheet = new Spreadsheet();

        //     // Create a new worksheet
        //     $worksheet = $spreadsheet->getActiveSheet();

        //     // Merge three cells and add a title
        //     $worksheet->mergeCells('A1:C1');
        //     $worksheet->setCellValue('A1', 'Merged Title');

        //     // Remove the cell borders around the title cell
        //     $style = $worksheet->getStyle('A1');
        //     $style->getBorders()->getAllBorders()->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_NONE);

        //     // Define data for the remaining cells
        //     $data = [
        //         ['Header 1', 'Header 2', 'Header 3'],
        //         ['Subheader 1', 'Subheader 2', 'Subheader 3'],
        //         ['Data 1', 'Data 2', 'Data 3'],
        //     ];

        //     // Loop through the data and set it in the cells
        //     $row = 2;
        //     foreach ($data as $rowData) {
        //         $column = 1;
        //         foreach ($rowData as $cellData) {
        //             $cell = $worksheet->getCellByColumnAndRow($column, $row);
        //             $cell->setValue($cellData);

        //             // Add border around the data cells
        //             $style = $cell->getStyle();
        //             $style->getBorders()->getAllBorders()->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);

        //             $column++;
        //         }
        //         $row++;
        //     }

        //     // Auto-size the column widths to fit cell content
        //     foreach (range('A', 'C') as $column) {
        //         $worksheet->getColumnDimension($column)->setAutoSize(true);
        //     }

        //     // Create a unique filename for the Excel file
        //     $excelFilename = 'excel_document_' . uniqid() . '.xlsx';

        //     // Save the Excel file
        //     $excelWriter = IOFactory::createWriter($spreadsheet, 'Xlsx');
        //     $excelWriter->save($excelFilename);

        //     // Optionally, you can force the download of the Excel file
        //     header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        //     header('Content-Disposition: attachment; filename="' . $excelFilename . '"');
        //     readfile($excelFilename);

        //     // Clean up the temporary file
        //     unlink($excelFilename);

        //     // Exit to prevent any other output
        //     exit;
        // }
    // }
} else {
    // Handle invalid or missing input
    header("HTTP/1.1 400 Bad Request");
    echo "Invalid request.";
}
