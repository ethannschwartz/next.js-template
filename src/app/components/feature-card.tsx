import React from "react";
import {Tooltip} from "@nextui-org/tooltip";

export default function FeatureCard({...props}) {
    const { icon, title, description, href } = props;

    function formatIcon() {
        let imageElement = <img className={'h-8'} src={icon} alt={icon + ' icon'}/>;
        let iconElement = <i className={icon + ' flex items-center h-8 text-lg'}></i>;

        return icon.includes('http')
            ? imageElement
            : iconElement;
    }

    return (
        <Tooltip content={'Visit the docs'} className={'text-white'}>
            <a href={href} target={'_blank'} className={'block w-full h-44 p-6 rounded-xl border border-indigo-600/15 hover:border-indigo-600/50 hover:scale-105 duration-150 hover:shadow-md'}>
                <span className={'h-8 flex items-center justify-start mb-0'}>{ formatIcon() }</span>
                <h5 className={'font-bold text-lg my-1'}>{title}</h5>
                <p className={'text-sm'}>{description}</p>
            </a>
        </Tooltip>
    )
}