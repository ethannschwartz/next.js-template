
export default function Page() {
    return (
        <div>
            <section className={'flex h-64 p-6 gap-6 flex-col md:flex-row'}>
                <article className={'bg-zinc-100 rounded-lg p-6 w-full flex flex-col'}>
                    <h6 className={'font-medium mb-3'}>Statistics</h6>
                    <div className={'h-full bg-zinc-200 rounded-lg grow w-full animate-pulse'}></div>
                </article>
                <article className={'bg-zinc-100 rounded-lg p-6 w-full flex flex-col'}>
                    <h6 className={'font-medium mb-3'}>Data</h6>
                    <div className={'h-full bg-zinc-200 rounded-lg grow w-full animate-pulse'}></div>
                </article>
                <article className={'bg-zinc-100 rounded-lg p-6 w-full flex flex-col'}>
                    <h6 className={'font-medium mb-3'}>Sales</h6>
                    <div className={'h-full bg-zinc-200 rounded-lg grow w-full animate-pulse'}></div>
                </article>
            </section>
            <section className={'p-6'}>
                Next more to come...
            </section>
        </div>
    )
}
