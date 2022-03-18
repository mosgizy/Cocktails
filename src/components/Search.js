import React, { useRef,useEffect } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
    const searchElement = useRef(null)
    const { searchValue,dispatch } = useGlobalContext()
    

    const getSearchValue = (e) => {
        dispatch({type:'SEARCH_ITEM',payload:e.target.value})
    }

    useEffect(() => {
        searchElement.current.focus()
    },[])

    return (
        <div className='bg-white shadow-2xl max-w-2xl m-auto py-8 px-12 rounded'>
            <p className='text-xl capitalize tracking-widest'>search your favorite cocktail</p>
            <input type="text" value={searchValue} ref={searchElement} onChange={getSearchValue} className="mt-5 p-2 bg-slate-100 rounded w-full" />
        </div>
    )
}

export default Search
