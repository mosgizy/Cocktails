import React from 'react'
import { useReducer, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const reducer = (state, action) => {
    if (action.type === 'FETCHING_DATA') {
        return {
            ...state,
            cocktails:[...action.payload]
        }
    }

    if (action.type === 'STOP_LOADING') {
        return {
            ...state,
            loading:false,
        }
    }

    if (action.type === 'LOADING') {
        return {
            ...state,
            loading: true,
        }
    }

    if (action.type === 'SEARCH_ITEM') {
        return {
            ...state,
            searchValue: action.payload,
        }
    }
}

const defaultState = {
    cocktails: [],
    loading: true,
    searchValue:'',
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const getCocktails = (url) => {
        fetch(url).then(res => res.json()).then(res => {
            const { drinks } = res
            const newDrinks = drinks.map((drink) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass,
                    strInstructions,
                    strCategory,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = drink

                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                ]
            
                return {
                    name: strDrink,
                    id: idDrink,
                    glass: strGlass,
                    alcoholic: strAlcoholic,
                    image: strDrinkThumb,
                    instructions: strInstructions,
                    category: strCategory,
                    ingredients:ingredients
                }
            })
            dispatch({ type: "FETCHING_DATA", payload: [...newDrinks] })
            dispatch({ type: "STOP_LOADING" })
        })
    }

    useEffect(() => {
        getCocktails(url)
    }, [])

    // console.log({...state});

    return (
        <AppContext.Provider value={{...state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export {Context,AppContext}