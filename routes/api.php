<?php

use App\Http\Controllers\Api\Admin\ProductController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
});
Route::prefix('media')->controller(MediaController::class)->group(function () {
    Route::post('upload', 'upload');
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::prefix('product')->as('product')->controller(ProductController::class)->group(function () {
        Route::get('', 'index');
        Route::get('{productId}', 'detail');
        Route::put('{productId}', 'update');
    });
});
