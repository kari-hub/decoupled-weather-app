export interface WeatherData {
    city: string;
    temp: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    date: string;
}

export interface ForecastDay {
    date: string;
    temp: number;
    description: string;
    icon: string;
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