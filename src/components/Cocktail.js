import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, glass, alcoholic, image }) => {

    return (
        <div className='bg-white shadow-2xl rounded lg:flex-initial lg:w-1/4'>
            <div>
                <img src={image} alt={name} className="h-80 w-full rounded-t object-cover" />
            </div>
            <div className='py-7 px-6  tracking-widest'>
                <h1 className='text-3xl font-extra-black'>{name}</h1>
                <p className='text-xl font-medium'>{glass}</p>
                <p className='text-slate-400'>{alcoholic}</p>
                <div className='mt-4'>
                    <Link to={`/cocktail/${id}`} className="bg-cyan-800 text-white py-2 px-5 mt-4 rounded uppercase" >Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Cocktail
