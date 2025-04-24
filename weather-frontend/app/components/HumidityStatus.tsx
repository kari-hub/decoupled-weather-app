'use client';

type WindStatusProps = {
    speed: number;
    direction: string;
};

export default function WindStatus({ speed, direction }: WindStatusProps) {
    return (
        <div className="card p-4 shadow-lg">
        <h2 className="text-xl font-bold">Wind Status</h2>
        <p>{speed} km/h</p>
        <p>{direction}</p>
        </div>
    );
}
