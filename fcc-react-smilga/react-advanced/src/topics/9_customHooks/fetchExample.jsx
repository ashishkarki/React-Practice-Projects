import {useFetchHook} from "./useFetchHook";

const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {
    const {loading, products} = useFetchHook(url)

    return (
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    )
}

export default FetchExample