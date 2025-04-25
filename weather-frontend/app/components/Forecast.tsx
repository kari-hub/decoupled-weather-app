import { ForecastDay } from '@/types/WeatherData';
import { format } from 'date-fns';

interface ForecastProps {
    forecast: ForecastDay[];
    unit: 'celsius' | 'fahrenheit';
}

const Forecast = ({ forecast, unit }: ForecastProps) => {
    const convertTemp = (temp: number) => {
        return unit === 'celsius' ? temp : (temp * 9 / 5) + 32;
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">3-Day Forecast</h2>
            <div className="grid grid-cols-3 gap-4">
                {forecast.slice(0, 3).map((day, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                        <p className="text-gray-800 mb-2">
                            {format(new Date(day.date), 'EEE, MMM d')}
                        </p>
                        <div className="flex items-center justify-between">
                            <img
                                src={`/weather-icons/${day.icon}.png`}
                                alt={day.description}
                                className="w-12 h-12"
                            />
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-900">
                                    {Math.round(convertTemp(day.temp))}°{unit === 'celsius' ? 'C' : 'F'}
                                </p>
                                <p className="text-sm text-gray-800 capitalize">
                                    {day.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
