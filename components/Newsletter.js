
const Newsletter = () => {
  return (
    <section className="mt-20 py-10 bg-[url('/newsletter-bg.png')] bg-top bg-no-repeat">
        <div className="text-center p-7 lg:p-10 max-w-[940px] mx-auto rounded-[5px] bg-[#3C3E7D] bg-opacity-20 backdrop-blur-[134px]">
            <h2 className="text-primary font-Rubik font-medium text-[2.25rem] leading-[2.68rem]">
                There are many reasons to get down
            </h2>
            <p className="max-w-[396px] mx-auto mt-5 mb-6">
                There are many reasons to get down and start to get depressed about your situation. 
            </p>
            <div className="mt-6 flex gap-y-2 md:flex-row justify-center">
                <input className="max-w-[200px] md:max-w-none md:min-w-[288px] font-Inter text-sm bg-[#F6F6F6] bg-opacity-10 text-white px-4 py-[18px] rounded md:rounded-l-[5px] outline-none" type='text' placeholder="Your Email" />
                <button className="text-xs uppercase px-4 md:px-8 py-4 font-medium tracking-[2px] bg-primary text-white rounded-r-[5px]">Send</button> 
            </div>
            <p className="mt-4 text-sm font-medium">
                No spam. Only releases, updates and discounts
            </p>
        </div>
    </section>
  )
}

export default Newsletter