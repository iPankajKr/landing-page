import Image from 'next/image'

const Investment = () => {
  return (
    <div className='my-12 flex flex-col-reverse md:flex-row justify-between md:items-center gap-10'>
          <div className='md:max-w-[50%]'>
            <h2 className='font-Inter text-[2.625rem] leading-[3.125rem] font-bold text-secondary'>
            Invest property for better {" "}
              <span className='text-primary'>business</span> 
            </h2>
            <p className='mt-8'>
              We are committed to processing the information in order to contact you and talk about your project. 
            </p>
            <button className='mt-10 btn border-primary px-8 py-3 bg-primary text-white button-shadow'>
              Learn More
            </button>
          </div>
          <div className="bg-[url('/map-bg.png')] py-4">
            <Image src="/price-card.png" width={403} height={414} alt=''/>
          </div>
    </div>
  )
}

export default Investment