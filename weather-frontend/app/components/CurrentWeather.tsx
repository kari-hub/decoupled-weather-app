'use client';

type CurrentWeatherProps = {
    temperature: number;
    description: string;
    date: string;
    location: string;
    icon: string;
    };

export default function CurrentWeather({ temperature, description, date, location, icon }: CurrentWeatherProps) {
    return (
        <div className="flex flex-col items-center">
        <img src={icon} alt="Weather Icon" className="w-24 h-24" />
        <h1 className="text-4xl">{temperature}°</h1>
        <p className="text-lg">{description}</p>
        <p className="text-sm">{date} - {location}</p>
        </div>
    );
}
