interface WindStatusProps {
    speed: number;
}

const WindStatus = ({ speed }: WindStatusProps) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Wind Status</h3>
            <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-100 rounded-full">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{speed} km/h</p>
            </div>
        </div>
    );
};

export default WindStatus;
