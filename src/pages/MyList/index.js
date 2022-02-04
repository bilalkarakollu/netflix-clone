import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import { fetchApi } from '../../utils/fetchApi';
import Card from '../../components/Card'
import { Helmet } from 'react-helmet-async';

export default function Index() {

    useEffect(() => {
        getFetch(603)
        getFetch(752)
        getFetch(111)
        getFetch(652)
        getFetch(98)
        getFetch(582873)
    }, [0])

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = async (movieID) => {

        const { data, message, status } = await fetchApi(`https://api.themoviedb.org/3/movie/${movieID}?api_key=4402f32b551579d5807f2dbf613deb7a`)
        if (status === 200) {
            console.log(data)
            setMovies(movies => [...movies, data])
            setLoading(false)
        }

    }


    const writeMovies = () => {
        if (!loading) {
            return movies.map((data) => {
                return (<Card data={data} loading={loading} />)
            })
        }
    }


    return (
        <>
            <Helmet>
                <title>My List - Netflix</title>
            </Helmet>
            <Box mt={120} className="scrollable-content news-container">
                <button className="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
                </button>
                <button className="next">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="40" viewBox="0 0 24 24" width="40"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
                </button>
                <Box px={14} className="scrollable-inner news-content">
                    {writeMovies()}
                </Box>
            </Box>
        </>
    );
}
