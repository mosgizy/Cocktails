import React from 'react'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'

const Home = () => {
    return (
        <div className='mt-44 w-[85vw] max-w-[1170px] m-auto mb-20'>
            <Search />
            <CocktailList />
        </div>
    )
}

export default Home
