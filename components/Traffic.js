import Image from 'next/image'

const Traffic = () => {
  return (
    <div className='my-32 flex flex-col-reverse md:flex-row justify-between md:items-center gap-x-10'>
          <div className='md:max-w-[50%]'>
            <h2 className='font-Inter text-[2.625rem] leading-[3.125rem] font-bold text-secondary'>
              Increase your business {" "}
              <span className='text-primary'>traffic</span> 
            </h2>
            <p className='mt-8'>
              We are committed to processing the information in order to contact you and talk about your project. 
            </p>
            <button className='mt-10 btn border-primary px-8 py-3 bg-primary text-white button-shadow'>
              Learn More
            </button>
          </div>
          <div>
            <Image src="/traffic-graph.png" width={380} height={400} alt=''/>
          </div>
    </div>
  )
}

export default Traffic