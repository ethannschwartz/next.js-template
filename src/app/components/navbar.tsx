"use client";
import React from "react";
import '../globals.css';
import {Tooltip} from "@nextui-org/tooltip";

export default function Navbar() {

    return (
        <header className={'flex justify-between gap-6 items-center p-6'}>
            <span className={'flex items-center gap-1.5 font-bold'}>
                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className={'w-6 h-6'} alt=""/>
                <span className={'font-bold text-zinc-800 text-xl'}>NEXT.js Template</span>
            </span>
            <div className={'flex items-center gap-4'}>
                <Tooltip content={'Github'} className={'text-white'}>
                    <a href="https://github.com/ethannschwartz">
                        <i className={'text-xl fi fi-brands-github'}></i>
                    </a>
                </Tooltip>
            </div>
        </header>
    )
}
