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
        <section className="mt-24 max-w-[90vw] m-auto">
            {
                loading ? <Loading /> : newCocktails().length > 0 &&
                    <div>
                        <h1 className='text-center text-4xl capitalize tracking-widest mb-12 font-bold'>cocktails</h1>
                        <div className='flex flex-col gap-14 lg:flex-row justify-center lg:flex-wrap lg:gap-8'>
                            {
                                newCocktails().map((cocktail) => {
                                    return <Cocktail key={cocktail.id} {...cocktail} />
                                })
                            }
                        </div>
                    </div>
            }
        </section>

    )
}

export default CocktailList
