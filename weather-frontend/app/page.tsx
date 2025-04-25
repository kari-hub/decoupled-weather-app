"use client";

import { useEffect, useState } from "react";
import { WeatherData, ForecastDay } from "@/types/WeatherData";
import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [forecast, setForecast] = useState<ForecastDay[]>([]);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

    const handleSearch = async () => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Get current weather and forecast
            const [weatherResponse, forecastResponse] = await Promise.all([
                fetch(`/api/weather?city=${encodeURIComponent(city)}`),
                fetch(`/api/forecast?city=${encodeURIComponent(city)}`)
            ]);

            if (!weatherResponse.ok || !forecastResponse.ok) {
                const weatherError = await weatherResponse.json().catch(() => ({}));
                const forecastError = await forecastResponse.json().catch(() => ({}));
                throw new Error(weatherError.error || forecastError.error || 'Failed to fetch weather data');
            }

            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();

            setWeather(weatherData);
            setForecast(forecastData.days || []);
        } catch (error: any) {
            setError(error.message || "Failed to fetch weather data. Please try again.");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleUnit = () => {
        setUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
    };

    // Initial weather data fetch for a default city
    useEffect(() => {
        if (!city) {
            setCity('London');
            handleSearch();
        }
    }, []);

    return (
        <main className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <SearchBar
                    city={city}
                    onCityChange={setCity}
                    onSearch={handleSearch}
                    unit={unit}
                    onToggleUnit={handleToggleUnit}
                />

                {error && (
                    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="mt-8 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
                        <p className="mt-2 text-gray-800">Loading weather data...</p>
                    </div>
                ) : (
                    <>
                        {weather && <WeatherCard data={weather} />}
                        {forecast.length > 0 && <Forecast forecast={forecast} unit={"celsius"} />}
                    </>
                )}
            </div>
        </main>
    );
}