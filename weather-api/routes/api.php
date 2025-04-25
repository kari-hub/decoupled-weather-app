<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\GeocodeController;

Route::get('/weather', [WeatherController::class, 'getCurrentWeather']);
Route::get('/forecast', [WeatherController::class, 'getForecast']);
Route::get('/weather/{city}', [WeatherController::class, 'getWeatherByCity']);
Route::get('/geocode', [GeocodeController::class, 'getCoordinates']);
// Route::get('/weather/coordinates', [WeatherController::class, 'getWeatherByCoordinates']);
