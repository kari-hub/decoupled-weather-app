<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeocodeController extends Controller
{
    public function getCoordinates(Request $request)
    {
        $city = $request->query('city');
        
        if (!$city) {
            return response()->json(['error' => 'City parameter is required'], 400);
        }

        try {
            $apiKey = env('OPENWEATHERMAP_API_KEY');
            Log::info('OpenWeather API Key: ' . ($apiKey ? 'Set' : 'Not Set'));
            
            $response = Http::get('https://api.openweathermap.org/geo/1.0/direct', [
                'q' => $city,
                'limit' => 1,
                'appid' => $apiKey
            ]);

            Log::info('OpenWeather API Response Status: ' . $response->status());
            Log::info('OpenWeather API Response Body: ' . $response->body());

            if ($response->successful() && !empty($response->json())) {
                $data = $response->json()[0];
                return response()->json([
                    'lat' => $data['lat'],
                    'lon' => $data['lon']
                ]);
            }

            return response()->json([
                'error' => 'City not found',
                'status' => $response->status(),
                'body' => $response->body()
            ], 404);
        } catch (\Exception $e) {
            Log::error('Geocode Error: ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to fetch coordinates',
                'message' => $e->getMessage()
            ], 500);
        }
    }
} 