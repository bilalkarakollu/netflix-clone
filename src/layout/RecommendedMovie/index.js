import React, { useEffect } from 'react'
import { requests, scroolFunction } from '../../utils'
import { Box, Heading } from '@chakra-ui/react'
import ListCard from '../../components/ListCard'

export default function Index() {
    useEffect(() => {
        scroolFunction()
    }, [0])
    return (
        <>
            <Box px={14} mt={10}>
                <Heading as='h2' fontWeight={'bold'} fontSize={'2xl'}>Recommended Movies</Heading>
            </Box>
            <Box mt={5} className="scrollable-content news-container">
                <button className="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87" /><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" /></svg>
                </button>
                <button className="next">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="40" viewBox="0 0 24 24" width="40"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g></svg>
                </button>
                <Box px={14} className="scrollable-inner news-content">
                    <ListCard requests={requests.fetchTrendingMovie} />
                </Box>
            </Box>
        </>
    )
}
