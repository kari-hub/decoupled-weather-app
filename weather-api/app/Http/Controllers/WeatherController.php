<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    private $apiKey;

    public function __construct()
    {
        $this->apiKey = env('OPENWEATHERMAP_API_KEY');
    }

    public function getCurrentWeather(Request $request)
    {
        $city = $request->query('city');
        if (!$city) {
            return response()->json(['error' => 'City is required'], 400);
        }

        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $this->apiKey,
            'units' => 'metric',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch weather data'], 500);
        }

        $data = $response->json();

        // Return only the necessary fields
        return response()->json([
            'city' => $data['name'],
            'temperature' => $data['main']['temp'],
            'feels_like' => $data['main']['feels_like'],
            'humidity' => $data['main']['humidity'],
            'wind_speed' => $data['wind']['speed'],
            'description' => $data['weather'][0]['description'],
            'icon' => $data['weather'][0]['icon'],
        ]);
    }

    public function getForecast(Request $request)
    {
        $city = $request->query('city');
        if (!$city) {
            return response()->json(['error' => 'City is required'], 400);
        }

        $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
            'q' => $city,
            'appid' => $this->apiKey,
            'units' => 'metric',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch forecast data'], 500);
        }

        $data = $response->json();

        // Filter and return only the necessary fields for the next 3 days
        $filteredForecast = collect($data['list'])
            ->filter(function ($item) {
                return str_contains($item['dt_txt'], '12:00:00'); // Only take midday readings
            })
            ->take(3)
            ->map(function ($item) {
                return [
                    'date' => $item['dt_txt'],
                    'temperature' => $item['main']['temp'],
                    'description' => $item['weather'][0]['description'],
                    'icon' => $item['weather'][0]['icon'],
                ];
            })
            ->values();

        return response()->json($filteredForecast);
    }
}
