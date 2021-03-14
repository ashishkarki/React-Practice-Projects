import { useCallback, useEffect, useState } from "react"

export const useFetchHook = (url) => {
    const [ loading, setLoading ] = useState(true)
    const [ products, setProducts ] = useState([])

    const getProducts = useCallback(async () => {
        const response = await fetch(url)
        const products = await response.json()

        setProducts(products)
        setLoading(false)
    }, [url])

    useEffect(() => {
        console.log('Getting products from useFetchHook!!')

        getProducts()
    }, [ url, getProducts ])

    return {
        loading,
        products,
    }
}