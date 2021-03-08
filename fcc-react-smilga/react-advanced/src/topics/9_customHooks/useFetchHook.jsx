import {useEffect, useState} from "react";

export const useFetchHook = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()

        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        console.log('Getting products from useFetchHook!!')

        getProducts()
    }, [url])

    return {
        loading,
        products,
    }
}