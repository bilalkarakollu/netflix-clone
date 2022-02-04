import React from 'react';
import RecommendedMovie from '../../layout/RecommendedMovie'
import TopMovie from '../../layout/TopMovie'
import NetflixOrginalMovie from '../../layout/NetflixOrginalMovie'
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

export default function Index() {
    return (
        <>
            <Helmet>
                <title>New and Populer - Netflix</title>
            </Helmet>
            <Box mt={120}>
                <NetflixOrginalMovie />
                <RecommendedMovie />
                <TopMovie />
            </Box>
        </>
    );
}
