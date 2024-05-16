export default function Solution(solution: { title: string; description: string }){
    return (
        <li className={'block py-8 border-b'}>
            <h1 className={'font-bold text-3xl text-zinc-800'}>{solution.title}</h1>
            <p className={'h-14 font-extralight text-lg'}>{solution.description}</p>
        </li>
    )
}