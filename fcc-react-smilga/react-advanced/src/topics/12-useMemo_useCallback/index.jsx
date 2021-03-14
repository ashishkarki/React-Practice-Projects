import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFetchHook } from '../9_customHooks/useFetchHook'

const url = 'https://course-api.com/javascript-store-products'

const calculateMostExpensive = (data) => {
    return data.reduce((max, item) => {
        const price = item.fields.price
        if (price > max) {
            max = price
        }

        return max
    }, 0) / 100
}

const UseMemoCallBackIndex = () => {
    const { products } = useFetchHook(url)
    const [ count, setCount ] = useState(0)
    const [ cart, setCart ] = useState(0)

    const addToCart = useCallback(() => {
        setCart(cart + 1)
    }, [ cart ])

    const mostExpensiveMemo = useMemo(
        () => calculateMostExpensive(products),
        [ products ]
    )

    return (
        <>
            <h1>Count: { count }</h1>
            <button
                className="btn"
                onClick={ () => setCount(count + 1) }>
                Click Me!
            </button>

            <h3 style={ { marginTop: '2rem', border: '2px dotted red' } }>
                Cart Items: { cart }
            </h3>

            <h3>Most expensive item: ${ mostExpensiveMemo }</h3>

            <BigList products={ products } addToCart={ addToCart } />
        </>
    )
}

const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.count('BigList called!!')
    })

    return (
        <section className='products'>
            {
                products.map(product => {
                    return <SingleProduct
                        key={ product.id }
                        { ...product }
                        addToCart={ addToCart }
                    />
                })
            }
        </section>
    )
})

const SingleProduct = ({ fields, addToCart }) => {
    let { name, price } = fields
    price = price / 100
    const image = fields.image[ 0 ].url

    useEffect(() => {
        console.count('SingleProduct called!!')
    })

    return (
        <article className='product'>
            <img src={ image } alt={ name } />
            <h4>{ name }</h4>
            <p>${ price }</p>

            <button onClick={ addToCart }>
                Add to Cart
            </button>
        </article>
    )
}

export default UseMemoCallBackIndex