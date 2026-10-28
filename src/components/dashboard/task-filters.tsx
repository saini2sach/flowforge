
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { TaskStatus } from "@/types/dashboard";

const statuses: (TaskStatus | "All")[] = [
    "All",
    "Todo",
    "In Progress",
    "In Review",
    "Done",
];

export default function TaskFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentStatus = searchParams.get("status") ?? "All";

    function handleStatusChange(status: string) {
        const params = new URLSearchParams(searchParams.toString());

        if (status === "All") {
            params.delete("status");
        } else {
            params.set("status", status);
        }

        // A changed filter should start at page 1.
        params.delete("page");

        const queryString = params.toString();
        router.push(queryString ? `/dashboard?${queryString}` : "/dashboard");
    }

    return (
        <label className="flex items-center gap-2 text-sm">
            <span>Status</span>
            <select
                value={currentStatus}
                onChange={(event) => handleStatusChange(event.target.value)}
                className="rounded-lg border px-3 py-2"
            >
                {statuses.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </label>
    );
}
