import Link from 'next/link'

const Header = () => {
  return (
    <header className="px-8 md:container flex justify-between">
        <div className='flex items-center space-x-11'>
            <Link href="/">
                <img src="/logo.svg" alt=""/>
            </Link>
            <div className="hidden lg:inline-flex items-center space-x-5 text-xs uppercase font-semibold">
                <h3>About</h3>
                <h3>Gallery</h3>
                <h3>Pricing</h3>
                <h3>FAQ</h3>
                <h3>Benefits</h3>
            </div>
        </div>
        <div className="hidden lg:flex items-center space-x-5 text-xs uppercase font-medium">
            <div className='btn px-7 py-2 text-primary'>
                Sign In
            </div>
            <div className="btn border-primary px-7 py-2 bg-primary text-white button-shadow">
                Get Started
            </div>
        </div>
        <div className='lg:hidden py-2 px-6 rounded bg-blue text-white opacity-70 hover:opacity-90 hover:brightness-105 transition-all cursor-pointer hover:shadow-md'>
            Menu
        </div>
    </header>
  )
}

export default Header