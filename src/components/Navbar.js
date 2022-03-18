import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <header className='bg-white fixed top-0 w-full py-6 px-8 shadow-2xl'>
            <nav className='flex justify-between items-center lg:max-w-[70vw] m-auto'>
                <div className='w-52'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex gap-4 text-2xl tracking-widest'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
