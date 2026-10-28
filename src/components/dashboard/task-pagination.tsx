
"use client";

import { useRouter, useSearchParams } from "next/navigation";

type TaskPaginationProps = {
    page: number;
    totalPages: number;
    total: number;
};

export default function TaskPagination({
    page,
    totalPages,
    total,
}: TaskPaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function navigateToPage(nextPage: number) {
        if (nextPage < 1 || nextPage > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());

        if (nextPage === 1) {
            params.delete("page");
        } else {
            params.set("page", String(nextPage));
        }

        const queryString = params.toString();

        router.push(queryString ? `/dashboard?${queryString}` : "/dashboard");
    }

    return (
        <nav
            aria-label="Task pagination"
            className="flex items-center justify-between gap-4"
        >
            <p className="text-sm text-gray-500">
                {total} task(s) · Page {page} of {totalPages}
            </p>

            <div className="flex gap-2">
                <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => navigateToPage(page - 1)}
                    className="rounded-lg border px-3 py-2 text-sm disabled:opacity-50"
                >
                    Previous
                </button>

                <button
                    type="button"
                    disabled={page >= totalPages}
                    onClick={() => navigateToPage(page + 1)}
                    className="rounded-lg border px-3 py-2 text-sm disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </nav>
    );
}
