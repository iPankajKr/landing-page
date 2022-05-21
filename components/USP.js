import React from 'react'

const USP = () => {
  return (
    <section className='text-center'>
        <h2 className='font-Inter max-w-[864px] lg:mx-auto text-[2.25rem] leading-[2.625rem] tracking-[0.33px] font-bold text-secondary'>
            3 Simple Ways To {" "}
            <span className='text-primary'>Save {" "}</span>
             A Bunch Of {" "}
            <span className='text-primary'>Money {" "}</span>
             When Buying A New Computer
        </h2>
        <p className='mt-8 text-[0.93rem] leading-5 tracking-[0.2px]'>
            Fully customizable and neatly organized components will help you work faster without limiting creative freedom.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
                <h2 className='font-Inter max-w-[864px] lg:mx-auto text-[2.25rem] leading-[2.625rem] tracking-[0.33px] font-bold text-secondary'>
                    100+
                </h2>
                <p className='mt-4 text-[0.93rem] leading-5 tracking-[0.2px]'>
                    5 Reasons To Purchase Desktop Computers
                </p>
            </div>
            <div className="md:w-1/3">
                <h2 className='font-Inter max-w-[864px] lg:mx-auto text-[2.25rem] leading-[2.625rem] tracking-[0.33px] font-bold text-secondary'>
                    43,000+
                </h2>
                <p className='mt-4 text-[0.93rem] leading-5 tracking-[0.2px]'>
                    3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
                </p>
            </div>
            <div className="md:w-1/3">
                <h2 className='font-Inter max-w-[864px] lg:mx-auto text-[2.25rem] leading-[2.625rem] tracking-[0.33px] font-bold text-secondary'>
                    30+
                </h2>
                <p className='mt-4 text-[0.93rem] leading-5 tracking-[0.2px]'>
                    A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More
                </p>
            </div>
        </div>
    </section>
  )
}

export default USP