import React from 'react'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'

const Home = () => {
    return (
        <div className='mt-44 mb-20 px-6 lg:px-0'>
            <Search />
            <CocktailList />
        </div>
    )
}

export default Home
