
export default function DashboardLoading() {
    return (
        <div className="space-y-6 animate-pulse">
            <div className="h-8 w-56 rounded bg-gray-200" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }, (_, index) => (
                    <div
                        key={index}
                        className="h-28 rounded-xl bg-gray-200"
                    />
                ))}
            </div>

            <div className="h-72 rounded-xl bg-gray-200" />
        </div>
    );
}
