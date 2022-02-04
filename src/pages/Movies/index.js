import React from 'react';
import Header from '../../layout/Header'
import RecommendedMovie from '../../layout/RecommendedMovie'
import TopMovie from '../../layout/TopMovie'
import NetflixOrginalMovie from '../../layout/NetflixOrginalMovie'
import { requests } from '../../utils';
import { Helmet } from 'react-helmet-async';
export default function Index() {
    return (
        <>
            <Helmet>
                <title>Movies - Netflix</title>
            </Helmet>
            <Header title={'Movies'} request={requests.fetchNetflixOrginalsMovie} comp={'movie'} />
            <NetflixOrginalMovie />
            <RecommendedMovie />
            <TopMovie />
        </>
    );
}
