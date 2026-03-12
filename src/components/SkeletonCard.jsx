function SkeletonCard() {
    return (<div>
        <div className='rounded-3xl border border-gray-200 bg-white p-4 animate-pulse'>
            <div className='mb-4 h-48 rounded-2xl bg-gray-200'/>
            <div className='flex flex-col gap-3'>
                <div className='h-3 w-16 rounded-full bg-gray-200'/>
                <div className='h-5 w-3/4 rounded-full bg-gray-200'/>
                <div className='h-3 w-full rounded-full bg-gray-200'/>
                <div className='h-3 w-2/3 rounded-full bg-gray-200'/>
                <div className='flex items-center justify-between pt-2'>
                    <div className='h-7 w-16 rounded-full bg-gray-200'/>
                    <div className='h-8 w-16 rounded-xl bg-gray-200'/>
                </div>
            </div>
        </div>
    </div>)
}

export default SkeletonCard
