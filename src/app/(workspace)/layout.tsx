
import type { ReactNode } from "react";
import Link from "next/link";

export default function WorkspaceLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-5 md:flex">
                <Link href="/dashboard" className="mb-10 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                        F
                    </span>
                    <span className="text-xl font-bold tracking-tight">
                        FlowForge
                    </span>
                </Link>

                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Workspace
                </p>

                <nav aria-label="Workspace navigation" className="space-y-1">
                    <Link
                        href="/dashboard"
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/projects"
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    >
                        Projects
                    </Link>
                </nav>

                <div className="mt-auto rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold">Your workspace</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                        Keep your projects moving and your team aligned.
                    </p>
                </div>
            </aside>

            <div className="min-w-0 flex-1">
                <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-8">
                    <div>
                        <p className="text-xs text-slate-500">
                            FlowForge / Workspace
                        </p>
                        <p className="mt-1 text-lg font-semibold">
                            Project Management
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="hidden text-sm text-slate-500 sm:block">
                            Demo Workspace
                        </span>
                        <div
                            aria-label="Jordan's profile"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700"
                        >
                            JD
                        </div>
                    </div>
                </header>

                {children}
            </div>
        </div>
    );
}
