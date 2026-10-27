"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
];

export default function WorkspaceNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Workspace navigation"
            className="space-y-1"
        >
            {navItems.map((item) => {
                const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${isActive
                                ? "bg-indigo-50 text-indigo-700"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}