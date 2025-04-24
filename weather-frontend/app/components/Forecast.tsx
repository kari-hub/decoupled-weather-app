import ForecastCard from "./ForecastCard";

type ForecastDay = {
    date: string;
    icon: string;
    minTemp: number;
    maxTemp: number;
};

type Props = {
    forecast: ForecastDay[];
};

export default function Forecast({ forecast }: { forecast: ForecastDay[] }) {
    console.log("Forecast Component Data:", forecast); 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {forecast.map((day, index) => (
                <div key={index} className="card p-4 shadow-lg text-center">
                    <p className="text-sm text-gray-500">{day.date}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt="Weather Icon"
                        className="w-12 h-12 mx-auto"
                    />
                    <p className="text-lg font-bold">
                        {day.minTemp}° - {day.maxTemp}°
                    </p>
                </div>
            ))}
        </div>
    );
}
