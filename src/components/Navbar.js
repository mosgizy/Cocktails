import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <header className='bg-white fixed top-0 w-full py-5 px-8 shadow-2xl'>
            <nav className='flex justify-between items-center lg:max-w-[60vw] m-auto'>
                <div className='w-[12rem]'>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex gap-6 text-2xl tracking-widest'>
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
