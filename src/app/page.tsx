import FeatureCard from "@/app/components/feature-card";
import React from "react";

export default function Home() {

    let features = [
        {
            title: "TailwindCSS",
            href: "https://tailwindcss.com/",
            icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
            description: "Style elements efficiently using classes linked with auto-generated CSS for streamlined and responsive design.",
        },
        {
            title: "Next Sitemap",
            href: "https://nuxtseo.com/",
            icon: "fi fi-rr-sitemap",
            description: "Easily manage your site's structure; simply add files to the pages directory to have them included in /sitemap.xml.",
        },
        {
            title: "AOS (Animate on Scroll)",
            href: "https://nuxt.com/modules/aos",
            icon: "https://ipx.nuxt.com/s_80,f_auto/gh/nuxt/modules/main/icons/aos.png",
            description: "Enhance your site's interactivity with fades, flips, slides, and more by adding data-aos=\"<name>\" to your elements.",
        },
        {
            title: "Flaticon",
            href: "https://www.flaticon.com/",
            icon: "fi fi-brands-flaticon",
            description: "Integrate a wide array of icons into your project seamlessly with Flaticon.",
        },
    ]


  return (
      <section className={'p-8 flex flex-col justify-center items-center w-full h-auto bg-gradient-to-b from-white to-indigo-200'}>
          <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className={'w-24 h-24 mb-4'} alt="next.js logo"/>
          <h1 className={'text-3xl text-zinc-800 font-extrabold text-center m-auto'}>NEXT.js Template</h1>
          <p className={'type-secondary font-light mb-8'}>This is my personal Next.js starter kit!</p>
          <ul className={'w-full max-w-5xl grid md:grid-cols-2 gap-6 mb-20'}>
              {
                  features.map((feature, index) => {
                      return (
                          <li key={index}>
                              <FeatureCard
                                  title={feature.title}
                                  icon={feature.icon}
                                  description={feature.description}
                              />
                          </li>
                      )
                  })
              }
          </ul>
          <div className={'text-white p-12 rounded-lg bg-black font-mono mb-12'}>
              For further documentation, please visit the <a href={'#'} className={'text-blue-600 underline underline-offset-4 hover:text-white'}>GitHub Repository</a>
          </div>
      </section>
  );
}