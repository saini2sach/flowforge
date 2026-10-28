
"use client";

export default function DashboardError({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">
                Something went wrong
            </h2>

            <p className="mt-2 text-sm text-gray-600">
                {`We couldn't load the dashboard. Please try again.`}
            </p>

            <button
                onClick={reset}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
                Try again
            </button>
        </div>
    );
}
