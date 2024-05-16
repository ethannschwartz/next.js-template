"use client";
import NavLink from "@/app/components/nav-link";
import React from "react";
import '../globals.css';
import {usePathname} from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();
    const routes = [
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'About',
            route: '/about',
        },
        {
            name: 'Dashboard',
            route: '/dashboard',
        },
    ]

    return (
        <header className={'flex justify-between gap-6 items-center px-6 py-3'}>
            <span className={'flex items-center gap-1.5 font-bold'}>
                <i className={'flex items-center text-base fi fi-rr-cloud-showers text-white p-1 rounded-full bg-black'}></i>
                <span className={'font-bold text-zinc-800 text-xl'}>CloudNexus</span>
            </span>
            <div className={'relative flex items-center'}>
                <ul className={'flex items-center gap-3'}>
                    {
                        routes.map((route, index) => {
                            return (
                                <li key={index} className={''}>
                                    <NavLink route={route.route} name={route.name}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}
