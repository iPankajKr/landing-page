import Link from 'next/link'

const Hero = () => {
  return (
    <section className="mt-24 px-8 md:container scroll">
        <div className='flex flex-col-reverse md:flex-row gap-x-10'>
            <div className='max-w-lg'>
                <h1 className='md:pt-7 font-Inter text-[2.75rem] leading-[50px] font-bold text-secondary'>
                    Many reasons to get up and start to get back in the business 
                </h1>
                <p className='mt-5 md:max-w-[90%]'>
                    The harder you work for something, the greater you’ll feel when you achieve it.
                </p>
                <div className='flex py-10 space-x-5 uppercase text-xs font-medium'>
                    <button 
                        className='btn border-primary px-8 py-3 
                            bg-primary text-white button-shadow'
                        >
                        Learn More
                    </button>
                    <div className='btn px-8 py-3 text-primary'>Demo</div>
                </div>
                <div className='flex lg:items-center gap-5'>
                    <div className='group flex items-center justify-center flex-shrink-0 px-11 py-4 h-[80px] bg-[#361C5D] rounded cursor-pointer'>
                        <img className='font-sm group-hover:scale-110 transition-all cursor-pointer' src='/icons/play.svg' alt='' />
                    </div>
                    <div className=''>
                        <h3 className='font-Rubik'>
                            The harder you work for something, the greater you’ll feel when you achieve it.
                        </h3>
                        <button className='text-sm text-[#6D6D78]'>Watch preview</button>
                    </div>
                </div>
            </div>
            <div className='md:ml-[30px] md:-mr-[100px] relative'>
                <img className='lg:w-auto lg:h-[580px]' src='/running-man.png' alt='' />
                <img className='lg:w-auto lg:h-[580px] absolute top-2 -right-20' src='/bg/running-man-dots.png' alt='' />
            </div>
        </div>
        <div className='mt-[90px] lg:mt-0 flex items-center lg:justify-between gap-8 overflow-auto no-scrollbar overflow-fade opacity-30'>
            <img src='/clients/icon-1.svg' alt='' />
            <img src='/clients/icon-2.svg' alt='' />
            <img src='/clients/icon-3.svg' alt='' />
            <img src='/clients/icon-4.svg' alt='' />
            <img src='/clients/icon-5.svg' alt='' />
            <img src='/clients/icon-6.svg' alt='' />
        </div>
    </section>
  )
}

export default Hero