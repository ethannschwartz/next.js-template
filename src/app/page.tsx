import FeatureCard from "@/app/components/feature-card";
import React from "react";
import {Tooltip} from "@nextui-org/tooltip";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {

    let features = [
        {
            title: "TailwindCSS",
            href: "https://tailwindcss.com/",
            icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
            description: "Style elements efficiently using classes linked with auto-generated CSS for streamlined and responsive design.",
        },
        {
            title: "Next UI",
            href: "https://nextui.org/docs/guide/introduction",
            icon: "https://avatars.githubusercontent.com/u/86160567?v=4",
            description: "Access a diverse selection of components offered by Next UI for a consistent and intuitive user experience.",
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
      <NextUIProvider>
          <section className={'p-8 flex flex-col justify-center items-center w-full h-auto bg-gradient-to-b from-white to-indigo-200'}>
              <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className={'w-24 h-24 mb-4'} alt="next.js logo"/>
              <h1 className={'text-3xl text-zinc-800 font-extrabold text-center m-auto'}>NEXT.js Template</h1>
              <p className={'type-secondary font-light mb-8'}>This is my personal Next.js starter kit!</p>
              <ul className={'w-full max-w-5xl grid md:grid-cols-2 gap-6 mb-20'}>
                  {
                      features.map((feature, index) => {
                          return (
                              <li key={index}>
                                  <FeatureCard {...feature} />
                              </li>
                          )
                      })
                  }
              </ul>
              <div className={'text-white p-12 rounded-lg bg-black font-mono mb-12'}>
                  For further documentation, please visit the&nbsp;
                  <Tooltip content={'Visit this Github repo'} className={'text-black bg-white'}>
                      <a
                          href={'https://github.com/ethannschwartz/next.js-template'}
                          className={'text-indigo-500 hover:underline underline-offset-4'}
                      >
                          GitHub Repository
                      </a>
                  </Tooltip>
              </div>
          </section>
      </NextUIProvider>
  );
}