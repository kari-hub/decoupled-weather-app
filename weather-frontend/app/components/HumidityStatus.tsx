'use client';

interface HumidityStatusProps {
    humidity: number;
}

const HumidityStatus = ({ humidity }: HumidityStatusProps) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Humidity</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded-full">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>
                    <p className="text-2xl font-semibold text-gray-900">{humidity}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${humidity}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default HumidityStatus;
