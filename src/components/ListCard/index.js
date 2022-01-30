import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { fetchApi } from '../../utils'

export default function Index({ requests }) {

    useEffect(() => {
        getFetch()
    }, [0])

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = async () => {

        const { data, message, status } = await fetchApi(requests)
        if (status === 200) {
            setMovies(data.results)
            setLoading(false)
        }

    }

    const writeMovies = () => {
        if (!loading) {
            return movies.map((data) => {
                return (
                    <>
                        <Card data={data} loading={loading} />
                    </>
                )
            })
        }
    }

    return <>{writeMovies()}</>
}
