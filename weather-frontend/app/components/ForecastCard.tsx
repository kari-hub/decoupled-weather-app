type ForecastDay = {
    date: string;
    icon: string;
    minTemp: number;
    maxTemp: number;
};

export default function ForecastCard({ day }: { day: ForecastDay }) {
    return (
        <div className="card p-4 shadow-lg text-center">
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
    );
}