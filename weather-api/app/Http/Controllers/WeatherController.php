<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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

        try {
            $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
                'q' => $city,
                'appid' => $this->apiKey,
                'units' => 'metric',
            ]);

            if ($response->failed()) {
                $error = $response->json();
                Log::error('OpenWeather API Error:', $error);
                return response()->json([
                    'error' => $error['message'] ?? 'Failed to fetch weather data'
                ], $response->status());
            }

            $data = $response->json();

            return response()->json([
                'city' => $data['name'],
                'temp' => $data['main']['temp'],
                'description' => $data['weather'][0]['description'],
                'icon' => $data['weather'][0]['icon'],
                'humidity' => $data['main']['humidity'],
                'windSpeed' => $data['wind']['speed'],
                'date' => now()->format('Y-m-d'),
            ]);
        } catch (\Exception $e) {
            Log::error('Weather API Error:', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'Failed to fetch weather data'], 500);
        }
    }

    public function getForecast(Request $request)
    {
        $city = $request->query('city');
        if (!$city) {
            return response()->json(['error' => 'City is required'], 400);
        }

        try {
            $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
                'q' => $city,
                'appid' => $this->apiKey,
                'units' => 'metric',
            ]);

            if ($response->failed()) {
                $error = $response->json();
                Log::error('OpenWeather API Error:', $error);
                return response()->json([
                    'error' => $error['message'] ?? 'Failed to fetch forecast data'
                ], $response->status());
            }

            $data = $response->json();

            // Filter and return only the necessary fields for the next 3 days
            $days = collect($data['list'])
                ->filter(function ($item) {
                    return str_contains($item['dt_txt'], '12:00:00'); // Only take midday readings
                })
                ->take(3)
                ->map(function ($item) {
                    return [
                        'date' => $item['dt_txt'],
                        'temp' => $item['main']['temp'],
                        'description' => $item['weather'][0]['description'],
                        'icon' => $item['weather'][0]['icon'],
                    ];
                })
                ->values();

            return response()->json(['days' => $days]);
        } catch (\Exception $e) {
            Log::error('Forecast API Error:', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'Failed to fetch forecast data'], 500);
        }
    }

    public function getWeatherByCity($city)
    {
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $this->apiKey,
            'units' => 'metric',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch weather data'], 500);
        }

        $data = $response->json();

        return response()->json([
            'city' => $data['name'],
            'temp' => $data['main']['temp'],
            'description' => $data['weather'][0]['description'],
            'icon' => $data['weather'][0]['icon'],
            'humidity' => $data['main']['humidity'],
            'windSpeed' => $data['wind']['speed'],
            'date' => now()->format('Y-m-d'),
        ]);
    }
}
