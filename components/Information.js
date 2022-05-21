import Image from 'next/image'

const Information = () => {
  return (
    <div className='mt-20 flex flex-col md:flex-row justify-between md:items-center gap-10'>
          <div className="">
            <Image src="/find-info.png" width={494} height={446} alt=''/>
          </div>
          <div className='md:max-w-[50%]'>
            <h2 className='font-Inter text-[1.625rem] leading-[2rem] font-bold text-secondary'>
                Help Finding Information Online
            </h2>
            <p className='mt-8'>
                Fully customizable and neatly organized components will help you work faster without limiting creative freedom. 
            </p>
            <div className='mt-12 flex flex-col gap-10 md:flex-row'>
                <div className="text-[0.93rem]">
                    <img src="/icons/knife.svg" alt="" />
                    <h3 className="mt-4 text-secondary font-Inter font-bold">Feature One</h3>
                    <p className='mt-2'>
                        Fully customizable and neatly organized components will help you work faster without limiting creative freedom.
                    </p>
                </div>
                <div className="text-[0.93rem]">
                    <img src="/icons/lte.svg" alt="" />
                    <h3 className="mt-4 text-secondary font-Inter font-bold">Feature Two</h3>
                    <p className='mt-2'>
                        Fully customizable and neatly organized components will help you work faster without limiting creative freedom.
                    </p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Information