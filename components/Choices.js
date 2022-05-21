import Link from 'next/link'

const Choices = () => {
  return (
    <section className='bg-gradient-to-b from-transparent to-blue'>
        <div className='md:container mt-24 px-8'>
            <div className='md:text-center'>
                <h2 className='font-Inter text-[2.625rem] leading-[3.125rem] font-bold text-secondary'>
                    Your choice 
                </h2>
                <p className='mt-3'>
                    There are many reasons to get down and start to get depressed about your situation.
                </p>
            </div>
            <div className='grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {choiceList.map(item => <Choice key={item.id} icon={item.icon} title={item.title} description={item.description} />)}
            </div>
        </div>
    </section>
  )
}

export default Choices

function Choice({icon, title, description}) {
    return (
        <div className='flex gap-7'>
            <div className='flex flex-shrink-0 items-start'>
                <img src={`/icons/${icon}.svg`} alt="" />
            </div>
            <div>
                <h3 className='text-secondary font-bold text-lg leading-6'>
                    {title}
                </h3>
                <p className='mt-3'>{description}</p>
            </div>
        </div>
    
    )
}

const choiceList = [
    {
        id: 1,
        title: 'Ecstatic elegance',
        description: 'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.',
        icon: 'icon-1'
    },
    {
        id: 2,
        title: 'Folly words widow',
        description: 'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.',
        icon: 'icon-2'
    },
    {
        id: 3,
        title: 'Possible procured trifling',
        description: 'We me rent been part what. An concluded sportsman offending so provision mr education.',
        icon: 'icon-3'
    },
    {
        id: 4,
        title: 'Open game',
        description: 'Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.',
        icon: 'icon-4'
    },
    {
        id: 5,
        title: 'Endeavor',
        description: 'Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady.',
        icon: 'icon-5'
    },
    {
        id: 6,
        title: 'Comfort pursuit',
        description: 'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.',
        icon: 'icon-6'
    },
]