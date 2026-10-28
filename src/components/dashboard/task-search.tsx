
"use client";

import { useMemo, useState } from "react";
import type { TaskSummary } from "@/types/dashboard";

type TaskSearchProps = {
    tasks: TaskSummary[];
};

export default function TaskSearch({ tasks }: TaskSearchProps) {
    const [query, setQuery] = useState("");

    const filteredTasks = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) return tasks;

        return tasks.filter(
            (task) =>
                task.title.toLowerCase().includes(normalizedQuery) ||
                task.project.toLowerCase().includes(normalizedQuery),
        );
    }, [tasks, query]);

    return (
        <section className="space-y-4">
            <label htmlFor="task-search" className="block text-sm font-medium">
                Search tasks
            </label>

            <input
                id="task-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by task or project..."
                className="w-full rounded-lg border px-3 py-2 text-sm"
            />

            <p className="text-sm text-gray-500" aria-live="polite">
                {filteredTasks.length} task(s) found
            </p>

            <ul className="space-y-2">
                {filteredTasks.map((task) => (
                    <li key={`${task.project}-${task.title}`} className="rounded-lg border p-3">
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-gray-500">{task.project}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
