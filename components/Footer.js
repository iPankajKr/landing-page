import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-20 px-8 md:container py-10 bg-[url('/footer-bg.png')]">
        <div className="flex justify-between max-w-[940px] mx-auto">
          <h3 className='text-primary font-Inter font-bold text-[1.625]'>
            ARShakir
          </h3>
          <div className='flex gap-4'>
            <img src="/icons/Google.svg" alt="" className="hover:scale-110 cursor-pointer" />
            <img src="/icons/Twitter.svg" alt="" className="hover:scale-110 cursor-pointer" />
            <img src="/icons/Facebook.svg" alt="" className="hover:scale-110 cursor-pointer" />
          </div>
        </div>
        <div className='grid grid-cols-2 md:flex md:justify-between mt-20 gap-10 max-w-[940px] mx-auto'>
            {footerMenu.map(menu => (
                <FooterMenuList key={menu.id} title={menu.title} list={menu.items} />
            ))}
        </div>
        <div className="mt-20 flex flex-wrap md:justify-center items-center gap-5 text-[#8D8D8D]">
          <p>© Copyrights 2021</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
        
      </footer>
  )
}

export default Footer

const footerMenu = [
    {
        id: 1,
        title: 'First',
        items: [
            'First Page',
            'Second Page',
            'Third Page',
            'Fourth Page',
        ]
    },
    {
        id: 2,
        title: 'Second',
        items: [
            'First Page',
            'Second Page',
            'Third Page',
            'Fourth Page',
        ]
    },
    {
        id: 3,
        title: 'Third',
        items: [
            'First Page',
            'Second Page',
            'Third Page',
            'Fourth Page',
        ]
    },
    {
        id: 4,
        title: 'Fourth',
        items: [
            'First Page',
            'Second Page',
            'Third Page',
            'Fourth Page',
        ]
    },
]

function FooterMenuList({title, list}) {
    return (
        <div className='font-Inter'>
            <h3 className='font-bold text-[.93rem] text-white tracking-[0.2px]'>{title}</h3>
            <ul className='mt-6'>
                {list.map((item, index) => 
                    (
                        <li 
                            key={index}
                            className='text-[.93rem] text-white tracking-[.2px]'
                        >
                            {item}
                        </li>  
                    )
                )}
            </ul>
          </div>
    )
}