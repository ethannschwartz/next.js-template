import Link from "next/link";

export default function Home() {
  return (
      <section
          className={'p-8 flex flex-col justify-center items-center w-full h-[95vh] bg-gradient-to-b from-white to-indigo-200'}>
          <h1 className={'text-8xl text-zinc-800 font-extrabold text-center m-auto'}>Elevate Your Business with Next-Generation Cloud Solutions.</h1>
          <div className={'flex items-center gap-3'}>
              <Link href={'/about'} className={'btn-secondary'}>
                  <span>Learn more</span>
                  <i className={'fi fi-rr-arrow-right text-sm flex items-center'}></i>
              </Link>
              <button className={'btn-primary'}>Log in</button>
          </div>
      </section>
  );
}
