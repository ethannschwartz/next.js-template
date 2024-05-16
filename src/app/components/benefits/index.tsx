import Benefit from "@/app/components/benefits/benefit";

export default function Benefits() {
    const benefits = [
        {
            title: 'Seamless Integration',
            icon: 'integral',
            description: 'Integrate effortlessly with your existing systems. CloudNexus provides robust APIs and tools that make the transition to our platform smooth and hassle-free.',
        },
        {
            title: 'Scalable Solutions',
            icon: 'ruler-combined',
            description: 'Grow your business without limits. Our scalable cloud solutions are designed to adapt to your evolving needs, providing you with the flexibility to expand as your business grows.',
        },
        {
            title: 'Security You Can Trust',
            icon: 'shield-check',
            description: 'Rest easy knowing your data is secure. CloudNexus employs top-tier security measures, including encryption, multi-factor authentication, and continuous monitoring to protect your critical information.',
        },
    ];
    return (
        <article>
            <div className={'p-16 h-auto'}>
                <div className={'mb-8'}>
                    <h1 className={'font-bold text-4xl text-zinc-800 mb-4'}>Why Choose CloudNexus?</h1>
                    <p className={'text-left text-2xl font-extralight'}>
                        Experience unprecedented efficiency with our AI-driven cloud solutions. Our advanced
                        algorithms continuously analyze and optimize your cloud infrastructure, ensuring maximum
                        performance at all times.
                    </p>
                </div>
                <ul className={'flex items-center gap-8'}>
                    {
                        benefits.map(benefit => {
                            return <Benefit icon={benefit.icon} title={benefit.title} description={benefit.description} />
                        })
                    }
                </ul>
            </div>
        </article>
    )
}