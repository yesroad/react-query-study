import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchColors = async (pageNumber) => {
    const { data } = await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
    return data

}

const PaginationQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { isLoading, isError, error, data: colors, isFetching } = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), { keepPreviousData: true })


    if (isLoading) {
        return <h2>Loading</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div>
                {
                    colors?.map((color) => {
                        return <div key={color.id}>
                            <h2>{color.id}. {color.label}</h2>
                        </div>
                    })
                }
            </div>
            <div>
                <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>
                    Prev page
                </button>
                <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>
                    Next page
                </button>
            </div>
        </>
    )
}

export default PaginationQueriesPage
