import Hero from "@/app/components/hero";
import Benefits from "@/app/components/benefits";
import Solutions from "@/app/components/solutions";
import Testimonials from "@/app/components/testimonials";

export default function Page() {
    return (
        <section className={'flex flex-col justify-center items-center w-full'}>
            <Hero />
            <Benefits />
            <Solutions />
            <Testimonials />
        </section>
    );
}