import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
          <h3>oops! it's a dead end</h3>
          <Link to='/'>Back Home</Link>
    </div>
  )
}

export default Error
