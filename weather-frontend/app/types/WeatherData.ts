
export interface WeatherData {
    temperature: number;
    description: string;
    icon: string;
    date: string;
    city: string;
    windSpeed: number;
    humidity: number;
    feelsLike: number;
}

export interface ForecastDay {
    date: string;
    icon: string;
    minTemp: number; 
    maxTemp: number; 
}

export interface Coordinates {
    lat: number;
    lon: number;
}

// export interface WeatherForecast {
//     city: string;
//     days: ForecastDay[];
// }
// export interface WeatherError {}