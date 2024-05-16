export default function Hero() {
    return (
        <article className={'p-16 flex items-center flex-row justify-start h-96 bg-gradient-to-b from-white to-indigo-100'}>
            <div className={'text-center'}>
                <h1 className={'font-bold text-6xl text-zinc-800 mb-4'}>Unleash the Power of the <span
                    className={'text-blue-500'}>Cloud</span></h1>
                <p className={'text-2xl font-extralight'}>At CloudNexus, we harness the potential of
                    cutting-edge cloud technologies to drive your business forward. Our state-of-the-art cloud
                    optimization and AI solutions are designed to enhance performance, reduce costs, and scale
                    seamlessly.</p>
            </div>
        </article>
    )
}