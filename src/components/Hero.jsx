import re_banner from '../images/resident-evil-requiem-banner.jpg';

function Hero() {
    return (<div className='max-w-7xl mx-auto w-full py-4 px-2 relative'>
        <a href=""><img src={re_banner} alt="" className=" rounded-4xl"/>
            <div className='absolute bottom-56 left-60'>
                <p className=' rounded-2xl py-2 px-4 bg-red-950 font-bold text-2xl'>Preorder</p>
            </div>
        </a>

    </div>)
}

export default Hero
