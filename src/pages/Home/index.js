import React from 'react';
import Header from '../../layout/Header'
import RecommendedTV from '../../layout/RecommendedTV'
import TopTV from '../../layout/TopTV'
import NetflixOrginalTV from '../../layout/NetflixOrginalTV'
import RecommendedMovie from '../../layout/RecommendedMovie'
import TopMovie from '../../layout/TopMovie'
import NetflixOrginalMovie from '../../layout/NetflixOrginalMovie'
import { requests } from '../../utils';
import { Helmet } from 'react-helmet-async';
export default function Index() {
    return (
        <>
            <Helmet>
                <title>Netflix</title>
            </Helmet>
            <Header title={''} request={requests.fetchNetflixOrginalsTV} comp={'tv'} />
            <NetflixOrginalMovie />
            <NetflixOrginalTV />
            <RecommendedTV />
            <RecommendedMovie />
            <TopMovie />
            <TopTV />
        </>
    );
}
