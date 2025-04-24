"use client";

import { useEffect, useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "@/lib/weatherService";
import { WeatherData, ForecastDay } from "@/types/WeatherData";
import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";

export default function HomePage() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [forecast, setForecast] = useState<ForecastDay[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const city = "Nairobi";
      Promise.all([fetchCurrentWeather(city), fetchForecast(city)])
          .then(([current, forecast]) => {
              console.log("Current Weather Data:", current); 
              console.log("Forecast Data:", forecast); 
              setWeather(current);
              setForecast(forecast);
          })
          .catch((error) => {
              console.error("Error fetching data:", error); 
          })
          .finally(() => setLoading(false));
  }, []);

    return (
        <div className="p-4">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {weather && <WeatherCard data={weather} />}
                    {forecast.length > 0 && <Forecast forecast={forecast} />} 
                </>
            )}
        </div>
    );
}