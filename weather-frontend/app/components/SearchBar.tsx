'use client';

type SearchBarProps = {
    city: string;
    onCityChange: (value: string) => void;
    onSearch: () => void;
    unit: 'metric' | 'imperial';
    onToggleUnit: () => void;
};

export default function SearchBar({ city, onCityChange, onSearch, unit, onToggleUnit }: SearchBarProps) {
    return (
    <div className="flex items-center gap-4">
        <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="input input-bordered w-full"
        />
        <button onClick={onSearch} className="btn btn-primary">Go</button>
        <button onClick={onToggleUnit} className="btn">
            {unit === 'metric' ? '°C' : '°F'}
        </button>
    </div>
);
}
