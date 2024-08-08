"use client";
import React from "react";
import '../globals.css';
import {usePathname} from "next/navigation";
import NavLink from "@/app/components/nav-link";

export default function Navbar() {
    const pathname = usePathname();
    const routes = [
        {
            name: 'Home',
            route: '/',
        },
    ]

    return (
        <header className={'flex justify-between gap-6 items-center p-6'}>
            <span className={'flex items-center gap-1.5 font-bold'}>
                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className={'w-6 h-6'} alt=""/>
                <span className={'font-bold text-zinc-800 text-xl'}>NEXT.js Template</span>
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
