<?php

use App\Http\Controllers\CountryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::controller(CountryController::class)->group(function () {
    Route::get('/all', 'getAll');
    Route::get('/{id}', 'getOne');
    Route::post('/new', 'addCountry');
    Route::put('/edit/{id}', 'editCountry');
    Route::delete('/del/{id}', 'deleteCountry');

});
