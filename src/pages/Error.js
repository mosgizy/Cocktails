import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='mt-40 w-[85vw] max-w-[1170px] m-auto mb-20 text-center'>
          <h1 className='mb-6 text-3xl tracking-widest'>oops! it's a dead end</h1>
      <Link to='/' className="bg-cyan-800 text-white py-2 px-5 mt-4 rounded uppercase tracking-widest">Back Home</Link>
    </div>
  )
}

export default Error
