
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TaskSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlSearch = searchParams.get("search") ?? "";

    const [query, setQuery] = useState(urlSearch);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const params = new URLSearchParams(searchParams.toString());
        const trimmedQuery = query.trim();

        if (trimmedQuery) {
            params.set("search", trimmedQuery);
        } else {
            params.delete("search");
        }

        const queryString = params.toString();

        router.push(
            queryString ? `/dashboard?${queryString}` : "/dashboard",
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="task-search" className="sr-only">
                Search tasks
            </label>

            <input
                id="task-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tasks or projects..."
                className="min-w-0 flex-1 rounded-lg border px-3 py-2"
            />

            <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
                Search
            </button>
        </form>
    );
}
