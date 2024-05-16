import Solution from "@/app/components/solutions/solution";

export default function Solutions() {
    const solutions = [
        {
            title: 'Cloud Optimization',
            icon: 'integral',
            description: 'Optimize your cloud infrastructure with our cutting-edge solutions. Reduce costs and improve efficiency with our AI-powered optimization tools.',
        },
        {
            title: 'AI Solutions',
            icon: 'ruler-combined',
            description: 'Leverage the power of artificial intelligence to transform your business operations. Our AI solutions provide actionable insights, predictive analytics, and automation to drive innovation.',
        },
        {
            title: 'Cloud Performance Enhancement',
            icon: 'shield-check',
            description: 'Boost your cloud performance with our advanced performance enhancement tools. Our solutions ensure that your cloud infrastructure operates at peak efficiency, delivering superior results.',
        },
    ];
    return (
        <article
            className={'p-16 flex items-center flex-row justify-start h-auto'}>
            <div className={'text-left'}>
                <h1 className={'font-bold text-6xl text-zinc-800 mb-4'}>Our Solutions</h1>
                <ul>
                    {
                        solutions.map(solution => {
                            return <Solution title={solution.title} description={solution.description} />
                        })
                    }
                </ul>
            </div>
        </article>
    )
}