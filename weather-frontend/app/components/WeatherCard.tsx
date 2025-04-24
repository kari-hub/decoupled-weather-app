import { WeatherData } from "@/types/WeatherData";

type Props = {
    data: WeatherData;
};

export default function WeatherCard({ data }: Props) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
            <div>
            <h2 className="text-2xl font-bold">{data.city}</h2>
            <p className="text-sm text-gray-500">{data.date}</p>
            <p className="text-lg capitalize">{data.description}</p>
            </div>
            <img
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt="Weather Icon"
            className="w-16 h-16"
            />
        </div>
        <div className="text-center">
            <h1 className="text-5xl font-bold">{Math.round(data.temperature)}°C</h1>
            <p className="text-sm text-gray-500">
            Feels like {Math.round(data.feelsLike)}°C
            </p>
        </div>
        <div className="flex justify-between text-sm mt-4">
            <p>💨 Wind: {data.windSpeed} m/s</p>
            <p>💧 Humidity: {data.humidity}%</p>
        </div>
        </div>
    );
}
