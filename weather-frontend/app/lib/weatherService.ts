// /lib/weatherService.ts

import { WeatherData, ForecastDay, Coordinates } from "@/types/WeatherData";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"; 

// Fetch current weather by city
export async function fetchCurrentWeather(city: string): Promise<WeatherData> {
    const res = await fetch(`${API_URL}/weather?city=${encodeURIComponent(city)}`);
    if (!res.ok) {
        throw new Error("Failed to fetch current weather data");
    }
    const data = await res.json();
    return data as WeatherData;
}

// Fetch 3-day forecast
export async function fetchForecast(city: string): Promise<ForecastDay[]> {
    const res = await fetch(`${API_URL}/forecast?city=${encodeURIComponent(city)}`);
    if (!res.ok) {
        throw new Error("Failed to fetch forecast data");
    }
    const data = await res.json();
    return data.map((day: any) => ({
        date: day.date,
        icon: day.icon,
        minTemp: day.minTemp,
        maxTemp: day.maxTemp,
    })) as ForecastDay[];
}

// Fetch city coordinates if needed
export async function fetchCityCoordinates(city: string): Promise<Coordinates> {
    const res = await fetch(`${API_URL}/geocode?city=${encodeURIComponent(city)}`);
    if (!res.ok) {
        throw new Error("Failed to fetch city coordinates");
    }
    const data = await res.json();
    return data as Coordinates;
}

