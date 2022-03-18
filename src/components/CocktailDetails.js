import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CocktailDetails = () => {
  const { id } = useParams()
  const { cocktails } = useGlobalContext()
  const [loading, setLoading] = useState(true)

  const cocktailInfo = cocktails.find((cocktail) => id === cocktail.id)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [loading])

  return (
    <div className='mt-40 mb-12 max-w-[80vw] m-auto'>
      {
        loading ? <Loading /> :
          <div>
            <header className='mb-16 flex items-center flex-col gap-8'>
              <div>
                <Link to='/' className="bg-cyan-800 text-white py-2 px-5 mt-4 rounded uppercase tracking-widest">back home </Link>
              </div>
              <h1 className='text-4xl font-black'>{cocktailInfo.name}</h1>
            </header>
            <section className='flex flex-col gap-6 items-center lg:flex-row'>
              <article>
                <img src={cocktailInfo.image} alt={cocktailInfo.name} className="rounded w-full" />
              </article>
              <article className=''>
                {/* <p><span>name:</span>{cocktailInfo.name}</p>
                <p><span>category:</span>{cocktailInfo.category}</p>
                <p><span>info:</span>{cocktailInfo.alcoholic}</p>
                <p><span>glass:</span>{cocktailInfo.glass}</p>
                <p><span>instructions:</span>{cocktailInfo.instructions}</p>
                <p><span>ingredients:</span>{cocktailInfo.ingredients.map(ingredient => ingredient)}</p> */}
                <div className='flex flex-col gap-5 text-lg capitalize tracking-wide font-bold'>
                  {
                    Object.keys(cocktailInfo).map((key) => {
                      return <Property key={cocktailInfo.id} name={key} value={cocktailInfo[key]} />
                    })
                  }
                </div>
              </article>
            </section>
          </div>
      }
    </div>
  )
}

const Property = ({ name, value }) => {
  if (name === 'image' || name === 'id') return null
  return (
    <>
      {
        name === 'alcoholic' ?
          <p><span className='bg-green-100 py-1 rounded px-3 text-green-800 mr-3'>{'info'}:</span>{value}</p> :
          <p><span className='bg-green-100 py-1 rounded px-3 text-green-800 mr-3' >{name}:</span>{value}</p>
      }
    </>
  )
}

export default CocktailDetails
