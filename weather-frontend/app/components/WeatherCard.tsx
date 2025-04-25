'use client';

import { useState } from 'react';
import { WeatherData } from '@/types/WeatherData';
import { format } from 'date-fns';
import WindStatus from './WindStatus';
import HumidityStatus from './HumidityStatus';
import TemperatureUnitSwitch from './TemperatureUnitSwitch';

interface WeatherCardProps {
    data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
    const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

    const convertTemperature = (temp: number) => {
        return unit === 'celsius' ? temp : (temp * 9 / 5) + 32;
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <img
                        src={`/weather-icons/${data.icon}.png`}
                        alt={data.description}
                        className="w-16 h-16"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-4xl font-bold text-gray-900">
                                {Math.round(convertTemperature(data.temp))}°
                            </h1>
                            <TemperatureUnitSwitch unit={unit} onUnitChange={setUnit} />
                        </div>
                        <p className="text-xl text-gray-900 capitalize">{data.description}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">{data.city}</p>
                    <p className="text-gray-900">
                        {format(new Date(), 'do MMM yyyy')}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <WindStatus speed={data.windSpeed} />
                <HumidityStatus humidity={data.humidity} />
            </div>
        </div>
    );
};

export default WeatherCard;
