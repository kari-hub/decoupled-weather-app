'use client';

interface SearchBarProps {
    city: string;
    onCityChange: (city: string) => void;
    onSearch: () => void;
    unit: 'celsius' | 'fahrenheit';
    onToggleUnit: () => void;
}

const SearchBar = ({ city, onCityChange, onSearch, unit, onToggleUnit }: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <div className="flex items-center space-x-4">
            <form onSubmit={handleSubmit} className="flex-1">
                <div className="relative">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => onCityChange(e.target.value)}
                        placeholder="Search for a city..."
                        className="w-full p-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </form>
            <button
                onClick={onToggleUnit}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
                °{unit === 'celsius' ? 'F' : 'C'}
            </button>
        </div>
    );
};

export default SearchBar;
