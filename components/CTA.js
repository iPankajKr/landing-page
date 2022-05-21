import React from 'react'

const CTA = () => {
  return (
    <section>
        <div className='mt-32 text-center max-w-[770px] mx-auto'>
            <h2 className='font-Inter max-w-[864px] lg:mx-auto text-[2.625rem] leading-[3.125rem] font-bold text-secondary'>
                Create your {" "}
                <span className='text-primary'>next project {" "}</span>
                with startup framework
            </h2>
            <button className='mt-11 btn border-primary px-8 py-3 bg-primary text-white button-shadow'>
                Get Started
            </button>
        </div>
        <img className='md:-mt-[130px] relative -z-10' src="/bg/cta-bg.png" alt="" />
    </section>
  )
}

export default CTA