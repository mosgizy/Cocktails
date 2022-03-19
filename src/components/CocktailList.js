import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail'

const CocktailList = () => {
    const { loading, cocktails, searchValue} = useGlobalContext()

    const newCocktails = () => {
        if (searchValue) {
            return cocktails.filter((search) => search.name.toLowerCase().indexOf(searchValue) !== -1)
        } else {
            return cocktails
        }
    }

    console.log(newCocktails())

    return (
        <section>
            {
                loading ? <Loading /> : newCocktails().length > 0 ?
                    <div className="mt-24">
                        <h1 className='text-center text-4xl capitalize tracking-widest mb-12 font-bold'>cocktails</h1>
                        <div className='flex flex-col gap-14 lg:flex-row lg:flex-wrap lg:gap-8 cocktails'>
                            {
                                newCocktails().map((cocktail) => {
                                    return <Cocktail key={cocktail.id} {...cocktail} />
                                })
                            }
                        </div>
                    </div> : <div>
                        <h1 className='capitalize text-center mt-8 tracking-widest text-4xl font-black'>no cocktails match your search criteria</h1>
                    </div>
            }
        </section>

    )
}

export default CocktailList
