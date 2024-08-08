export default function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    function formatIcon() {
        if(icon.includes('http')) {
            return <img className={'h-8'} src={icon} alt={icon + ' icon'} />
        } else {
            return <i className={icon + ' h-8 text-lg'}></i>
        }
    }

    return (
        <div className={'w-full h-40 p-6 rounded-xl border border-blue-600/15 hover:border-blue-600/50 hover:scale-105 duration-150 hover:shadow-md'}>
            <span className={'h-8 flex items-center justify-start'}>{ formatIcon() }</span>
            <h5 className={'font-bold text-lg mb-1'}>{title}</h5>
            <p className={'text-sm'}>{description}</p>
        </div>
    )
}