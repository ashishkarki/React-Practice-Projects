import React from 'react';
import {useFetchHook} from '../9_customHooks/useFetchHook';
import Product from "./product";

const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
    const {products} = useFetchHook(url)

    return (
        <div>
            <h2>List of Products</h2>

            <section className='products'>
                {
                    products.map(product => {
                        return <Product key={product.id} {...product} />
                    })
                }
            </section>
        </div>
    )
}

export default Index