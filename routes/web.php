<?php

use Illuminate\Support\Facades\Route;
use \PhpOffice\PhpSpreadsheet\IOFactory;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $spreadsheet = IOFactory::load(config_path().'/food3.xlsx');
    $sheet = $spreadsheet->getActiveSheet()->toArray();
    
    // Display the sheet content 
    $headings = array_shift($sheet);
    array_walk($sheet, function (&$row) use ($headings) {
        $row = array_combine($headings, $row);
    });


    return view('welcome',['data'=>$sheet]);
});

Route::get('/calcolo-chilocalorie', function () {
  

    return view('chilopage');
});

Route::get('/chilocalorie-totali', function () {
  

    return view('chilopage');
});