import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


function Header() {
    const [toggleMenu,setToggleMenu] = useState(false);
    return (
   <header className="flex justify-between  w-full px-5 py-5 md:shadow-md shadow-md bg1">
    <a href="#" className="font-bold text-black text-3xl">P<span className='font-bold text-green-500 text-3xl'>o</span>r<span className='font-bold text-green-500 text-3xl'>t</span>f<span className='font-bold text-green-500 text-3xl'>o</span>l<span className='font-bold text-green-500 text-3xl'>i</span>o</a>
    <nav className="hidden md:block">
    <ul className="flex text-black">
        <li><a href="/" className='font-semibold tracking-wide nav'>Home</a></li>
        <li><a href="#about" className='font-semibold tracking-wide nav'>About</a></li>
        <li><a href="#projects" className='font-semibold tracking-wide nav'>Projects</a></li>
        <li><a href="#resume" className='font-semibold tracking-wide nav'>Resume</a></li>
        <li><a href="#contact" className='font-semibold tracking-wide nav'>Contact</a></li>

    </ul>
    </nav>

   {toggleMenu && <nav className="block md:hidden ">
    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-black mobile-nav">
        <li><a href="/" className='text-white'>Home</a></li>
        <li><a href="#about"  className='text-white'>About</a></li>
        <li><a href="#projects"  className='text-white'>Projects</a></li>
        <li><a href="#resume"  className='text-white'>Resume</a></li>
        <li><a href="#contact"  className='text-white'>Contact</a></li>

    </ul>
    </nav>}
    <button className='block md:hidden' onClick={
        () => setToggleMenu(!toggleMenu)
    }>
<Bars3Icon className='md:text-white h-5'/>
    </button>
   </header>
    )
}


export default Header