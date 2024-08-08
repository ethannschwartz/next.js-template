import React from "react";
import {Tooltip} from "@nextui-org/tooltip";

export default function FeatureCard({ title, description, icon, href }: { title: string, description: string, icon: string, href: string }) {
    function formatIcon() {
        if(icon.includes('http')) {
            return <img className={'h-8'} src={icon} alt={icon + ' icon'} />
        } else {
            return <i className={icon + ' flex items-center h-8 text-lg'}></i>
        }
    }

    return (
        <Tooltip content={'Visit the docs'} className={'py-1 px-3 rounded-lg text-white text-xs bg-zinc-900'}>
            <a href={href} target={'_blank'} className={'block w-full h-44 p-6 rounded-xl border border-indigo-600/15 hover:border-indigo-600/50 hover:scale-105 duration-150 hover:shadow-md'}>
                <span className={'h-8 flex items-center justify-start mb-0'}>{ formatIcon() }</span>
                <h5 className={'font-bold text-lg my-1'}>{title}</h5>
                <p className={'text-sm'}>{description}</p>
            </a>
        </Tooltip>
    )
}