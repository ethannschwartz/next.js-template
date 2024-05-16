export default function Testimonials() {
    const testimonials = [
        {
            description: '"CloudNexus has transformed our business operations. Their AI solutions have provided us with invaluable insights and improved our efficiency dramatically."',
            name: "Jane Doe, CEO of Tech Innovators",
        },
        {
            description: '"The integration process was seamless, and the performance enhancements have been remarkable. We couldn\'t be happier with CloudNexus."',
            name: "John Smith, CTO of Future Enterprises",
        },
    ];
    return (
        <article
            className={'bg-black text-white p-16 flex items-center flex-row justify-start h-auto'}>
            <div className={'text-çenter'}>
                <h1 className={'text-center font-bold text-6xl text-white mb-4'}>Testimonials</h1>
                <ul className={'flex items-center gap-8'}>
                    {
                        testimonials.map(testimonial => {
                            return (
                                <li className={'block p-8'}>
                                    <h1 className={'text-center font-bold text-3xl text-white mb-2'}>{testimonial.description}</h1>
                                    <p className={'text-center h-14 font-extralight text-lg'}>— {testimonial.name}</p>
                                </li>)
                        })
                    }
                </ul>
            </div>
        </article>
    )
}