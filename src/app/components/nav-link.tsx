"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ route, name }: { route: string, name: string }) {
    const pathname = usePathname();
    const isActive = pathname === route;

    return (
        <span>
            <Link
                className={`${
                    isActive ? 'bg-black text-white pointer-events-none' : 'hover:bg-zinc-100 hover:scale-95 active:bg-zinc-200'
                } block font-medium text-sm duration-150 rounded-md px-2 py-1`}
                href={route}
            >
                {name}
            </Link>
        </span>
    );
}
