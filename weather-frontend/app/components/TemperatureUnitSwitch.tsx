'use client';

interface TemperatureUnitSwitchProps {
    unit: 'celsius' | 'fahrenheit';
    onUnitChange: (unit: 'celsius' | 'fahrenheit') => void;
}

const TemperatureUnitSwitch = ({ unit, onUnitChange }: TemperatureUnitSwitchProps) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => onUnitChange('celsius')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${unit === 'celsius'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
            >
                °C
            </button>
            <button
                onClick={() => onUnitChange('fahrenheit')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${unit === 'fahrenheit'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
            >
                °F
            </button>
        </div>
    );
};

export default TemperatureUnitSwitch; 