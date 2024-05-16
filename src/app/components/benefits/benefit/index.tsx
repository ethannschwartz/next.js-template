export default function Benefit(benefit: { icon: string; title: string; description: string }) {
    return (
        <li className={'w-1/3 block hover:scale-105 duration-300 ease-in-out p-4 hover:bg-zinc-50 rounded-2xl'}>
            <i className={`w-fit fi fi-rr-${benefit.icon} flex items-center p-4 mb-2 bg-black text-2xl text-white rounded-full`}></i>
            <h4 className={'font-medium text-xl mb-1 text-zinc-800'}>{benefit.title}</h4>
            <p className={'font-extralight h-24'}>{benefit.description}</p>
        </li>
    )
}